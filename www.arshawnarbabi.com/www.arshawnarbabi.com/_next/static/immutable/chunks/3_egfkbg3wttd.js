(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 58087, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(45396),
        a = e.i(71645),
        o = e.i(32955),
        i = e.i(63090),
        n = e.i(31283),
        s = e.i(91338),
        l = e.i(93494);
    let u = new Set,
        f = `#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`,
        h = `#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_prev;    // h(t-1)
uniform sampler2D u_curr;    // h(t)
uniform vec2  u_texel;
uniform float u_viscosity;
uniform float u_decay;
uniform vec2  u_pointer;     // 0..1, y UP; off-screen when idle
uniform vec2  u_prevPointer; // where it was on the previous frame
uniform float u_velocity;    // uv distance covered since then
uniform float u_intensity;
uniform float u_radius;
uniform float u_aspect;
out vec4 fragColor;

void main() {
  float c  = texture(u_curr, v_uv).r;
  float p  = texture(u_prev, v_uv).r;
  float l  = texture(u_curr, v_uv - vec2(u_texel.x, 0.0)).r;
  float r  = texture(u_curr, v_uv + vec2(u_texel.x, 0.0)).r;
  float d  = texture(u_curr, v_uv - vec2(0.0, u_texel.y)).r;
  float u  = texture(u_curr, v_uv + vec2(0.0, u_texel.y)).r;

  // THE WHOLE WAVE STEP FIRST, then blended toward the current value by
  // viscosity. The order matters and it used to be the other way round:
  // mix(c, avg, visc) * 2 - p is not the same expression as
  // mix(c, avg * 2 - p, visc), and it leaves prev with a coefficient of 1
  // instead of viscosity. At 0.99 the two are close; the gap widens as
  // viscosity falls, which is why lower values behaved unlike the demo's.
  float avg = (l + r + d + u) * 0.25;
  float wave = avg * 2.0 - p;
  wave = mix(c, wave, u_viscosity);
  wave *= u_decay;

  // INJECTED EVERY FRAME THE POINTER IS MOVING, and scaled by how fast.
  // It used to be one flat impulse per pointer event regardless of speed, so a
  // slow drag and a fast flick pushed exactly the same amount of water in.
  if (u_velocity > 0.0001) {
    vec2 diff = v_uv - u_pointer;
    diff.x *= u_aspect;
    float ripple = smoothstep(u_radius, 0.0, length(diff));
    // Squared, per the reference. A bare smoothstep has a much wider skirt, so
    // the same scale value produced a visibly larger and softer splat here.
    ripple *= ripple;

    // The trail. Eight samples along the path the pointer took since the last
    // frame, so a fast movement leaves a continuous wake instead of a row of
    // separate dots at whatever rate the pointer events happened to arrive.
    for (int i = 0; i < 8; i++) {
      vec2 tp = mix(u_prevPointer, u_pointer, float(i) / 8.0);
      vec2 td = v_uv - tp;
      td.x *= u_aspect;
      float tr = smoothstep(u_radius * 0.7, 0.0, length(td));
      ripple = max(ripple, tr * tr);
    }

    wave += ripple * u_intensity * min(u_velocity * 10.0, 1.0);
  }

  fragColor = vec4(clamp(wave, -1.0, 1.0), 0.0, 0.0, 1.0);
}`,
        d = `#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_field;
uniform sampler2D u_image;
uniform vec2  u_texel;
uniform vec2  u_cover;       // object-fit: cover correction
uniform float u_strength;
uniform float u_aberration;
uniform float u_rippleBlur;

/**
 * Gradient gain when building the surface normal. 50 is the reference's own
 * figure. It is not a free parameter: it sets how much a given height
 * difference tilts the normal, and therefore what distortionStrength means.
 *
 * ONE KNOWN SCALE CAVEAT. The field here runs at SIM_SCALE (half), so a texel
 * step spans twice the distance the reference's does and the differences come
 * out roughly twice as large. If the distortion reads about twice as strong as
 * the demo at the same distortionStrength, halve this rather than retuning
 * every value that depends on it.
 */
const float NORMAL_GAIN = 50.0;
uniform float u_light;
uniform float u_power;
uniform float u_flip;        // 1 for a decoded <img>, 0 for a canvas source
/**
 * 1 when the wave simulation is not running, so the height field is known to be
 * all zeros rather than merely likely to be.
 *
 * That is not a hint, it is a proof obligation discharged on the CPU side: with
 * the sim skipped nothing ever writes the field textures, so they hold the
 * clear colour. Under that condition the four field fetches return 0, the
 * normal is 0, the lookup offset is 0, and the three chromatic-aberration
 * fetches all sample the SAME coordinate. Skipping six of the seven fetches is
 * therefore bit-identical, not an approximation.
 *
 * It is uniformly true on every touch device, which is exactly the hardware
 * with the least fill rate to spare.
 */
uniform float u_still;

// ── soft focus and top fade ───────────────────────────────────────────────
// Both were stacks of masked backdrop-filter elements. Each layer in such a
// stack doubles the previous radius and covers a proportionally smaller band,
// so the cumulative radius at normalised depth q through the ramp is
// B * 2^(-n*q): exponential in q. A mip level IS a log2 of blur radius, so
// that whole ramp collapses to one straight line, lod = log2(B) - n*q, and the
// entire effect becomes a single textureLod fetch.
uniform float u_focus;       // 0 disables every branch below
uniform vec4  u_sfTitle;     // cx, cy, rx, ry, in this canvas's uv
uniform vec4  u_sfPitch;
uniform vec4  u_sfMeta;
uniform vec3  u_sfLod;       // log2(cumulative peak radius) for title, pitch, meta
uniform float u_sfLayers;    // n, the ramp's slope
uniform vec3  u_fade;        // end of the band in uv y, log2(peak), n
uniform vec4  u_bfade;       // bottom blur: start and end of the band in uv y, log2(peak), n (0 = off)
uniform float u_smoothBlur;  // 1 = the 4-fetch smooth read for the bottom blur; 0 on a stepped-down device
out vec4 fragColor;

/**
 * The image at a mip level, read through a cubic B-spline instead of a straight
 * bilinear blend. His report on the bottom blur, 2026-10-20: "the blur looks kind
 * of pixleated/worse quality than the orignial". A high mip level is a small
 * box-filtered copy, and stretching it back up bilinearly shows its texels as
 * blocks and creases. Four bilinear fetches placed at the B-spline's weights
 * (the standard 4-tap cubic) give a smooth bell over the same copy. Used
 * wherever the focus blur is past the first mip (see smoothB); the unblurred
 * picture reads exactly as before.
 */
vec3 bsplineLod(vec2 uv, float lod) {
  // The grid is the FINER of the two levels the trilinear fetch blends. The
  // coarser one (ceil) was tried first and came out as hard-edged rectangles:
  // its cells are twice the size of the level doing most of the blending.
  vec2 size = vec2(textureSize(u_image, int(floor(lod))));
  vec2 st = uv * size - 0.5;
  vec2 i = floor(st);
  vec2 f = st - i;
  vec2 f2 = f * f, f3 = f2 * f;
  vec2 w0 = (-f3 + 3.0 * f2 - 3.0 * f + 1.0) / 6.0;
  vec2 w1 = (3.0 * f3 - 6.0 * f2 + 4.0) / 6.0;
  vec2 w2 = (-3.0 * f3 + 3.0 * f2 + 3.0 * f + 1.0) / 6.0;
  vec2 w3 = f3 / 6.0;
  vec2 g0 = w0 + w1, g1 = w2 + w3;
  vec2 h0 = (i - 0.5 + w1 / g0) / size;
  vec2 h1 = (i + 1.5 + w3 / g1) / size;
  vec3 a = textureLod(u_image, vec2(h0.x, h0.y), lod).rgb;
  vec3 b = textureLod(u_image, vec2(h1.x, h0.y), lod).rgb;
  vec3 c = textureLod(u_image, vec2(h0.x, h1.y), lod).rgb;
  vec3 d = textureLod(u_image, vec2(h1.x, h1.y), lod).rgb;
  return g0.y * (g0.x * a + g1.x * b) + g1.y * (g0.x * c + g1.x * d);
}

/** Normalised distance from an ellipse's centre: 0 at the middle, 1 at the edge. */
float ellipseQ(vec2 p, vec4 e) {
  vec2 d = (p - e.xy) / max(e.zw, vec2(1e-4));
  return length(d);
}

void main() {
  // Surface normal of the height field, built the way the reference
  // implementation builds it (cortiz2894/mouse-effects, calculateNormal):
  // central differences with a fixed gain, z pinned to 1, then NORMALIZED.
  //
  // THIS WAS THE ROOT OF THE PARAMETER MISMATCH. It used to feed the RAW
  // gradient straight into the refraction, unnormalized and ungained, so
  // distortionStrength was multiplying an unbounded difference of two
  // texture samples instead of a unit vector's xy. The same number therefore
  // meant something entirely different here than in the demo, and no value
  // could be transferred between the two.
  //
  // The sign is also flipped from what was here before: (left - right), not
  // (right - left). The old order refracted every ripple the wrong way.
  vec3 nrm = vec3(0.0, 0.0, 1.0);
  if (u_still < 0.5) {
    float hl = texture(u_field, v_uv - vec2(u_texel.x, 0.0)).r;
    float hr = texture(u_field, v_uv + vec2(u_texel.x, 0.0)).r;
    float hb = texture(u_field, v_uv - vec2(0.0, u_texel.y)).r;
    float ht = texture(u_field, v_uv + vec2(0.0, u_texel.y)).r;
    nrm = normalize(vec3((hl - hr) * NORMAL_GAIN, (hb - ht) * NORMAL_GAIN, 1.0));
  }
  // How far the surface tilts from flat, 0 on still water. Gates the lighting.
  float ndev = length(nrm.xy);

  // Cover-fit: the image keeps its aspect and is cropped, matching the CSS
  // object-fit: cover the rest of the hero uses.
  vec2 uv = (v_uv - 0.5) * u_cover + 0.5;
  // A decoded <img> arrives top-down and needs flipping; a WebGL canvas
  // uploaded as a texture is already in the same orientation as our own render.
  uv.y = mix(uv.y, 1.0 - uv.y, u_flip);

  vec2 off = nrm.xy * u_strength;

  // Screen space, y DOWN, so the ellipse centres and the fade band can be
  // expressed the way the CSS authored them instead of upside down.
  vec2 s = vec2(v_uv.x, 1.0 - v_uv.y);

  // The ramps overlap (an ellipse can reach up into the nav band), so take the
  // strongest rather than summing: two blurs do not add, and summing would put
  // a bright seam exactly where they meet.
  float lod = 0.0;
  if (u_focus > 0.5) {
    if (u_sfTitle.z > 0.0) {
      lod = max(lod, u_sfLod.x - u_sfLayers * ellipseQ(s, u_sfTitle));
    }
    if (u_sfPitch.z > 0.0) {
      lod = max(lod, u_sfLod.y - u_sfLayers * ellipseQ(s, u_sfPitch));
    }
    // A THIRD ellipse is very nearly free, which is the only reason there is
    // one: it adds a subtract, a length and a max to the ALU and NOT a single
    // texture fetch, because every ellipse feeds the same lod that the one
    // textureLod below already takes as an argument. This is the whole point
    // of the mip-chain rewrite. Under the old backdrop-filter stack a third
    // region meant four more compositor passes over an animating canvas, and
    // that is what could not be afforded.
    if (u_sfMeta.z > 0.0) {
      lod = max(lod, u_sfLod.z - u_sfLayers * ellipseQ(s, u_sfMeta));
    }
    if (u_fade.x > 0.0) {
      // NOT clamped at the top end. Clamping q to 1 pins the ramp at
      // (peak - n) for the whole rest of the canvas, which is 0.19 here, so
      // every pixel below the nav band picked up a blur that the CSS stack
      // never applied. Letting q run past 1 sends the term negative and the
      // max() below floors it at 0, which is the actual intent.
      lod = max(lod, u_fade.y - u_fade.z * max(s.y / u_fade.x, 0.0));
    }
    if (u_bfade.w > 0.0) {
      // The bottom blur (heroBottomBlur.ts), the top fade's ramp turned upside
      // down: q is 0 at the bottom of the hero, where every layer of the old
      // stack applied, and 1 at the start of the band. Past the bottom q goes
      // negative and is floored, so the peak holds rather than growing.
      float q = max((u_bfade.y - s.y) / max(u_bfade.y - u_bfade.x, 1e-4), 0.0);
      lod = max(lod, u_bfade.z - u_bfade.w * q);
    }
    lod = max(lod, 0.0);
  }

  // BLUR WHERE THE WATER IS DISTURBED, and nowhere else.
  //
  // This costs nothing, and the reason is worth stating because blurs on this
  // project have twice been the thing that dropped the frame rate. It is not a
  // convolution: the image texture already carries a full mip chain for the
  // soft-focus ramp, so this only chooses a LOWER MIP LEVEL to read from. One
  // fetch either way. A gaussian over a moving surface would be a separate
  // pass per frame; this is an argument to a fetch that was happening anyway.
  //
  // Rides ndev, how far the surface tilts from flat, so still water stays
  // perfectly sharp and only the moving part softens. Which is also what makes
  // it read as depth rather than as the image going out of focus.
  float flod = lod; // the focus blur's own level, before the water adds to it
  lod += u_rippleBlur * ndev;

  // THE SMOOTH READ WHEREVER THE FOCUS BLURS, not only the bottom band. His
  // report the same night: the area behind the Availability row looks
  // "pixelated or kind of flashy" while scrolling, "kind of a problem before we
  // added this blur", "make sure this doesnt occur anywehre else on the shader".
  // That row sits in the meta soft-focus ellipse, read with the same plain mip
  // fetch whose blocky creases crawl when the picture moves; the title, pitch
  // and top fade use it too. Four fetches instead of one, only past the first
  // mip, and only at full quality: a device the QualityGovernor has stepped
  // down gets the single plain fetch (his rule, "good quality as teh default,
  // just as optimzed as possible").
  bool smoothB = u_smoothBlur > 0.5 && flod > 0.6;

  vec3 col;
  if (smoothB) {
    vec2 duvS = clamp(uv + off, 0.001, 0.999);
    float abS = u_aberration * (abs(nrm.x) + abs(nrm.y));
    if (u_still > 0.5 || abS < 1e-5) {
      col = bsplineLod(duvS, lod);
    } else {
      // Water moving over a blurred area: keep its channel split, at three
      // smooth reads. Only where the pointer is disturbing the surface.
      col.r = bsplineLod(duvS + vec2(abS, 0.0), lod).r;
      col.g = bsplineLod(duvS, lod).g;
      col.b = bsplineLod(duvS - vec2(abS, 0.0), lod).b;
    }
  } else if (u_still > 0.5) {
    // off is exactly zero here, so the three fetches below would be the same
    // fetch three times. One is not an approximation of three, it IS three.
    col = textureLod(u_image, uv, lod).rgb;
  } else {
    // Clamped like the reference does, so a strong ripple at the edge samples
    // the border pixel instead of wrapping or smearing the clamp-to-edge row.
    vec2 duv = clamp(uv + off, 0.001, 0.999);
    // ABERRATION IS AN ABSOLUTE OFFSET ALONG X, scaled by how tilted the
    // surface is. It used to SCALE the refraction vector, which meant the
    // channel separation could never be more than a fraction of a distortion
    // already on screen, and was exactly zero whenever distortionStrength was.
    // That is why turning it up appeared to do nothing.
    float ab = u_aberration * (abs(nrm.x) + abs(nrm.y));
    col.r = textureLod(u_image, duv + vec2(ab, 0.0), lod).r;
    col.g = textureLod(u_image, duv, lod).g;
    col.b = textureLod(u_image, duv - vec2(ab, 0.0), lod).b;
  }

  if (u_light > 0.0 && u_still < 0.5) {
    // MASKED BY THE RIPPLE, which is what stops this brightening the page.
    // The term used to be added unconditionally: on flat water the normal is
    // (0,0,1), so dot(normal, lightDir) collapsed to lightDir.z and every
    // pixel gained a constant. The canvas is fixed and viewport sized, so that
    // read as the light control lifting the brightness of the whole site.
    // The reference gates it on how far the surface tilts from flat, with a
    // soft threshold, and that is what is done here.
    float rippleMask = smoothstep(0.01, 0.1, ndev);

    // Blinn-Phong, against the half vector rather than the light direction.
    // The previous version took dot(normal, lightDir) directly, which is a
    // diffuse term wearing a specular exponent, and it responded to
    // specularPower on a different curve than the demo does.
    vec3 lightDir = normalize(vec3(0.5, 0.5, 1.0));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(nrm, halfDir), 0.0), u_power);
    col += spec * u_light * rippleMask;

    // Fresnel rim, at a tenth of the light's strength. Missing entirely
    // before, which is part of why the highlight read as flat rather than as
    // water: this is what puts a faint edge on the side of a crest turned away
    // from the light.
    float fres = pow(1.0 - max(dot(nrm, viewDir), 0.0), 2.0);
    col += fres * u_light * 0.1 * rippleMask;
  }

  fragColor = vec4(col, 1.0);
}`,
        c = `#version 300 es
precision highp float;
uniform sampler2D u_src;
uniform vec2 u_texel;
in vec2 v_uv;
out vec4 fragColor;
vec3 s(vec2 o) { return textureLod(u_src, v_uv + o * u_texel, 0.0).rgb; }
void main() {
  vec3 a = s(vec2(-2.0, 2.0)), b = s(vec2(0.0, 2.0)), c = s(vec2(2.0, 2.0));
  vec3 d = s(vec2(-2.0, 0.0)), e = s(vec2(0.0, 0.0)), f = s(vec2(2.0, 0.0));
  vec3 g = s(vec2(-2.0, -2.0)), h = s(vec2(0.0, -2.0)), i = s(vec2(2.0, -2.0));
  vec3 j = s(vec2(-1.0, 1.0)), k = s(vec2(1.0, 1.0));
  vec3 l = s(vec2(-1.0, -1.0)), m = s(vec2(1.0, -1.0));
  vec3 col = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625
    + (j + k + l + m) * 0.125;
  fragColor = vec4(col, 1.0);
}`;

    function m(e, t, r) {
        let a = e.createShader(t);
        return (e.shaderSource(a, r), e.compileShader(a), e.getShaderParameter(a, e.COMPILE_STATUS)) ? a : (console.error("[fluid] shader compile failed:", e.getShaderInfoLog(a)), null)
    }

    function v(e, t) {
        let r = m(e, e.VERTEX_SHADER, f),
            a = m(e, e.FRAGMENT_SHADER, t);
        if (!r || !a) return null;
        let o = e.createProgram();
        return (e.attachShader(o, r), e.attachShader(o, a), e.bindAttribLocation(o, 0, "a_pos"), e.linkProgram(o), e.getProgramParameter(o, e.LINK_STATUS)) ? o : (console.error("[fluid] link failed:", e.getProgramInfoLog(o)), null)
    }
    e.s(["default", 0, function({
        src: e,
        fallback: f,
        settings: m,
        stack: p = !1,
        focus: g = r.FOCUS_OFF
    }) {
        let _ = (0, a.useRef)(null),
            E = (0, a.useRef)(m);
        E.current = m;
        let T = (0, a.useRef)(g);
        T.current = g;
        let b = (0, a.useRef)(null);
        return (0, a.useEffect)(() => {
            b.current ? .()
        }, [g]), (0, a.useEffect)(() => {
            let t = _.current;
            if (!t) return;
            let r = t.getContext("webgl2", {
                alpha: !1,
                antialias: !1,
                premultipliedAlpha: !1,
                depth: !1,
                stencil: !1
            });
            if (!r) return void console.error("[fluid] WebGL2 unavailable");
            if (r.isContextLost()) return void console.error("[fluid] WebGL2 context is lost");
            let a = r.getExtension("EXT_color_buffer_float"),
                o = a ? r.R16F : r.RGBA8,
                m = a ? r.RED : r.RGBA,
                g = a ? r.HALF_FLOAT : r.UNSIGNED_BYTE;
            a || console.warn("[fluid] EXT_color_buffer_float missing; field will band");
            let w = v(r, h),
                x = v(r, d);
            if (!w || !x) return;
            let y = v(r, c),
                R = y ? {
                    src: r.getUniformLocation(y, "u_src"),
                    texel: r.getUniformLocation(y, "u_texel")
                } : null,
                L = r.createFramebuffer(),
                A = r.createVertexArray();
            r.bindVertexArray(A);
            let U = r.createBuffer();
            r.bindBuffer(r.ARRAY_BUFFER, U), r.bufferData(r.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), r.STATIC_DRAW), r.enableVertexAttribArray(0), r.vertexAttribPointer(0, 2, r.FLOAT, !1, 0, 0);
            let M = 1,
                S = 1,
                D = 1,
                I = 1,
                P = 1,
                X = 1,
                F = [],
                B = [],
                N = e => {
                    let t = F[e] ? ? r.createTexture();
                    F[e] = t, r.bindTexture(r.TEXTURE_2D, t), r.texImage2D(r.TEXTURE_2D, 0, o, D, I, 0, m, g, null), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
                    let a = B[e] ? ? r.createFramebuffer();
                    B[e] = a, r.bindFramebuffer(r.FRAMEBUFFER, a), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, t, 0), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT)
                },
                C = r.createTexture(),
                k = 0,
                O = 0,
                G = !1,
                H = p;
            H || (t.style.visibility = "hidden"), r.bindTexture(r.TEXTURE_2D, C), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, 0);
            let z = !1,
                q = 0,
                W = 0,
                V = null,
                Y = 16 / 9,
                j = new Image;
            j.crossOrigin = "anonymous";
            let Q = !0,
                K = (e, t, a) => {
                    Q && (Y = t / a, r.bindTexture(r.TEXTURE_2D, C), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, e), k = t, O = a, z && r.generateMipmap(r.TEXTURE_2D), G = !0)
                };
            j.onload = () => K(j, j.naturalWidth, j.naturalHeight);
            let J = !1;
            j.onerror = () => {
                !J && f && (J = !0, j.src = f)
            }, p || ("function" == typeof createImageBitmap && "function" == typeof fetch ? fetch(e, {
                cache: u.has(e) ? "force-cache" : "default"
            }).then(t => {
                if (!t.ok) throw Error(String(t.status));
                return u.add(e), t.blob()
            }).then(e => createImageBitmap(e, {
                premultiplyAlpha: "none",
                colorSpaceConversion: "default"
            })).then(e => {
                K(e, e.width, e.height), e.close()
            }).catch(() => {
                Q && (j.src = e)
            }) : j.src = e);
            let Z = {
                    on: 0,
                    title: [0, 0, 0, 0],
                    pitch: [0, 0, 0, 0],
                    meta: [0, 0, 0, 0],
                    lod: [0, 0, 0],
                    layers: 4,
                    fade: [0, 0, 5],
                    bfade: [0, 0, 0, 0]
                },
                $ = -1,
                ee = new URLSearchParams(window.location.search).get("noblur") ? ? "",
                et = ee.includes("all"),
                er = et || ee.includes("bottom"),
                ea = et || ee.includes("focus"),
                eo = et || ee.includes("water");
            if (et || ee.includes("fade")) {
                let e = document.createElement("style");
                e.textContent = "[class*='rippleFade']{filter:none!important}", document.head.appendChild(e)
            }
            let ei = () => {
                    var e;
                    let a = T.current;
                    if ($ = O, Z.on = 0, Z.title = [0, 0, 0, 0], Z.pitch = [0, 0, 0, 0], Z.meta = [0, 0, 0, 0], Z.fade = [0, 0, a.fadeLayers], Z.bfade = [0, 0, 0, 0], (e = a.enabled) !== z && (z = e, r.bindTexture(r.TEXTURE_2D, C), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, e ? r.LINEAR_MIPMAP_LINEAR : r.LINEAR), e && r.generateMipmap(r.TEXTURE_2D)), !a.enabled) return;
                    let o = t.getBoundingClientRect();
                    if (o.width < 1 || o.height < 1) return;
                    let i = document.querySelector("[data-hero-focus-box]"),
                        n = O > 0 ? O / o.height : 2,
                        l = (e, t) => Math.log2(Math.max(1, e * (2 - Math.pow(2, 1 - Math.max(1, t))) * n)) + -.35;
                    if (i) {
                        let e = i.getBoundingClientRect(),
                            t = t => [(e.left + t.x / 100 * e.width - o.left) / o.width, (e.top + t.y / 100 * e.height - o.top) / o.height, t.rx / 100 * e.width / o.width, t.ry / 100 * e.height / o.height];
                        a.title && (Z.title = t(a.title)), a.pitch && (Z.pitch = t(a.pitch)), a.meta && (Z.meta = t(a.meta)), Z.lod = [a.title ? l(a.title.blur, a.softLayers) : 0, a.pitch ? l(a.pitch.blur, a.softLayers) : 0, a.meta ? l(a.meta.blur, a.softLayers) : 0], Z.layers = a.softLayers
                    }
                    if (a.fadeHeight > 0) {
                        let e = document.querySelector("[data-hero-fade-box]");
                        Z.fade = [((e ? e.getBoundingClientRect() : o).top + a.fadeHeight - o.top) / o.height, l(a.fadeBlur, a.fadeLayers), a.fadeLayers]
                    }
                    if (ea && (Z.title = [0, 0, 0, 0], Z.pitch = [0, 0, 0, 0], Z.meta = [0, 0, 0, 0], Z.fade = [0, 0, a.fadeLayers]), a.bottomBlur > 0 && !(0, s.isPhone)() && !er) {
                        let e = document.querySelector("[data-hero-fade-box]"),
                            t = e ? e.getBoundingClientRect() : o;
                        Z.bfade = [(t.top + a.bottomStart * t.height - o.top) / o.height, (t.bottom - o.top) / o.height, l(a.bottomBlur, a.bottomLayers), a.bottomLayers]
                    }
                    Z.on = 1
                },
                en = 0,
                es = !p,
                el = (0, i.prefersReducedMotion)(),
                eu = 8 * !!el,
                ef = () => {
                    let e = t.getBoundingClientRect();
                    P = Math.max(1, e.width), X = Math.max(1, e.height);
                    let r = Math.min(window.devicePixelRatio || 1, 2),
                        a = Math.max(1, Math.round(e.width * r)),
                        o = Math.max(1, Math.round(e.height * r));
                    (a !== M || o !== S) && (M = a, S = o, t.width = M, t.height = S, en = 0, el && (eu = 8), D = Math.max(2, Math.round(.5 * M)), I = Math.max(2, Math.round(.5 * S)), N(0), N(1), N(2))
                },
                eh = 0;
            ef(), ei(), b.current = ei;
            let ed = new ResizeObserver(() => {
                let e = t.getBoundingClientRect();
                P = Math.max(1, e.width), X = Math.max(1, e.height), en = 0, el && (eu = 8, eF()), clearTimeout(eh), eh = window.setTimeout(() => {
                    ef(), el && eF()
                }, 150), ei()
            });
            ed.observe(t);
            let ec = document.querySelector("[data-hero-focus-box]");
            ec && ed.observe(ec);
            let em = -10,
                ev = -10,
                ep = -10,
                eg = -10,
                e_ = 0,
                eE = e => {
                    en = 0;
                    let r = t.getBoundingClientRect();
                    em = (e.clientX - r.left) / r.width, ev = 1 - (e.clientY - r.top) / r.height, ep < -1 && (ep = em, eg = ev)
                },
                eT = () => {
                    ep = -10, eg = -10, en = 0
                },
                eb = "function" != typeof window.matchMedia || window.matchMedia("(hover: hover) and (pointer: fine)").matches,
                ew = !el && eb;
            ew && (window.addEventListener("pointermove", eE, {
                passive: !0
            }), window.addEventListener("pointerleave", eT));
            let ex = 0,
                ey = 1,
                eR = 2,
                eL = 0,
                eA = {
                    prev: r.getUniformLocation(w, "u_prev"),
                    curr: r.getUniformLocation(w, "u_curr"),
                    texel: r.getUniformLocation(w, "u_texel"),
                    visc: r.getUniformLocation(w, "u_viscosity"),
                    decay: r.getUniformLocation(w, "u_decay"),
                    ptr: r.getUniformLocation(w, "u_pointer"),
                    intensity: r.getUniformLocation(w, "u_intensity"),
                    prevPtr: r.getUniformLocation(w, "u_prevPointer"),
                    velocity: r.getUniformLocation(w, "u_velocity"),
                    radius: r.getUniformLocation(w, "u_radius"),
                    aspect: r.getUniformLocation(w, "u_aspect")
                },
                eU = {
                    field: r.getUniformLocation(x, "u_field"),
                    image: r.getUniformLocation(x, "u_image"),
                    texel: r.getUniformLocation(x, "u_texel"),
                    cover: r.getUniformLocation(x, "u_cover"),
                    strength: r.getUniformLocation(x, "u_strength"),
                    ab: r.getUniformLocation(x, "u_aberration"),
                    rblur: r.getUniformLocation(x, "u_rippleBlur"),
                    light: r.getUniformLocation(x, "u_light"),
                    power: r.getUniformLocation(x, "u_power"),
                    flip: r.getUniformLocation(x, "u_flip"),
                    still: r.getUniformLocation(x, "u_still"),
                    focus: r.getUniformLocation(x, "u_focus"),
                    sfTitle: r.getUniformLocation(x, "u_sfTitle"),
                    sfPitch: r.getUniformLocation(x, "u_sfPitch"),
                    sfMeta: r.getUniformLocation(x, "u_sfMeta"),
                    sfLod: r.getUniformLocation(x, "u_sfLod"),
                    sfLayers: r.getUniformLocation(x, "u_sfLayers"),
                    fade: r.getUniformLocation(x, "u_fade"),
                    bfade: r.getUniformLocation(x, "u_bfade"),
                    smoothBlur: r.getUniformLocation(x, "u_smoothBlur")
                };
            r.useProgram(w), r.uniform1i(eA.prev, 0), r.uniform1i(eA.curr, 1), r.useProgram(x), r.uniform1i(eU.field, 0), r.uniform1i(eU.image, 1);
            let eM = () => {
                    if (eI && ++eX % eP != 0) {
                        eL = requestAnimationFrame(eM);
                        return
                    }
                    let e = E.current;
                    if (es && ++en > 150) {
                        eL = requestAnimationFrame(eM);
                        return
                    }
                    ew && (r.useProgram(w), r.bindFramebuffer(r.FRAMEBUFFER, B[eR]), r.viewport(0, 0, D, I), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, F[ex]), r.activeTexture(r.TEXTURE1), r.bindTexture(r.TEXTURE_2D, F[ey]), r.uniform2f(eA.texel, 1 / D, 1 / I), r.uniform1f(eA.visc, e.viscosity), r.uniform1f(eA.decay, e.decay), r.uniform2f(eA.ptr, em, ev), r.uniform2f(eA.prevPtr, ep, eg), r.uniform1f(eA.velocity, e_), r.uniform1f(eA.intensity, e.intensity), r.uniform1f(eA.radius, Math.max(.001, e.scale)), r.uniform1f(eA.aspect, M / S), r.drawArrays(r.TRIANGLES, 0, 3), e_ = ep < -1 ? 0 : Math.hypot(em - ep, ev - eg), ep = em, eg = ev);
                    let a = !!p && (V && V.isConnected || (V = document.querySelector("[data-hero-bg-source] canvas")), !!V && !(V.width < 2) && (r.bindTexture(r.TEXTURE_2D, C), (V.width !== k || V.height !== O) && (k = V.width, O = V.height, r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, k, O, 0, r.RGBA, r.UNSIGNED_BYTE, null)), r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, V), z && (() => {
                        if (r.activeTexture(r.TEXTURE1), r.bindTexture(r.TEXTURE_2D, C), !y || !R || !L || (0, l.readHeroQuality)() >= l.GLASS_1X) {
                            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_BASE_LEVEL, 0), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAX_LEVEL, 1e3), r.generateMipmap(r.TEXTURE_2D), q = 0;
                            return
                        }(q !== k || W !== O) && (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_BASE_LEVEL, 0), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAX_LEVEL, 1e3), r.generateMipmap(r.TEXTURE_2D), q = k, W = O);
                        let e = Math.min(8, Math.floor(Math.log2(Math.max(k, O))));
                        r.useProgram(y), r.uniform1i(R.src, 1), r.bindFramebuffer(r.FRAMEBUFFER, L), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR);
                        for (let t = 0; t < e; t++) {
                            let e = Math.max(1, k >> t),
                                a = Math.max(1, O >> t);
                            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_BASE_LEVEL, t), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAX_LEVEL, t + 1), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, C, t + 1), r.viewport(0, 0, Math.max(1, k >> t + 1), Math.max(1, O >> t + 1)), r.uniform2f(R.texel, 1 / e, 1 / a), r.drawArrays(r.TRIANGLES, 0, 3)
                        }
                        r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, null, 0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_BASE_LEVEL, 0), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAX_LEVEL, e), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR)
                    })(), Y = V.width / V.height, G = !0, !0));
                    O !== $ && ei(), r.useProgram(x), r.bindFramebuffer(r.FRAMEBUFFER, null), r.viewport(0, 0, M, S), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, F[eR]), r.activeTexture(r.TEXTURE1), r.bindTexture(r.TEXTURE_2D, C), r.uniform2f(eU.texel, 1 / D, 1 / I);
                    let o = P / X;
                    r.uniform2f(eU.cover, p || o > Y ? 1 : o / Y, p ? 1 : o > Y ? Y / o : 1), r.uniform1f(eU.flip, +!p), r.uniform1f(eU.still, +!ew), r.uniform1f(eU.strength, e.distortionStrength), r.uniform1f(eU.ab, e.aberration), r.uniform1f(eU.rblur, eo ? 0 : e.rippleBlur), r.uniform1f(eU.light, e.lightIntensity), r.uniform1f(eU.power, e.specularPower), r.uniform1f(eU.focus, Z.on), r.uniform4fv(eU.sfTitle, Z.title), r.uniform4fv(eU.sfPitch, Z.pitch), r.uniform4fv(eU.sfMeta, Z.meta), r.uniform3fv(eU.sfLod, Z.lod), r.uniform1f(eU.sfLayers, Z.layers), r.uniform3fv(eU.fade, Z.fade), r.uniform4fv(eU.bfade, Z.bfade), r.uniform1f(eU.smoothBlur, +((0, l.readHeroQuality)() < l.GLASS_1X)), G && (r.drawArrays(r.TRIANGLES, 0, 3), H || (H = !0, t.style.visibility = ""));
                    let i = ex;
                    if (ex = ey, ey = eR, eR = i, el && ((p ? a : G) && eu--, eu <= 0)) {
                        eL = 0;
                        return
                    }
                    eL = requestAnimationFrame(eM)
                },
                eS = !0,
                eD = !!t.closest("[data-hero-fade-box]"),
                eI = !1,
                eP = 12,
                eX = 0,
                eF = () => {
                    eS && (!el || eu > 0) ? eL || (eL = requestAnimationFrame(eM)) : eL && (cancelAnimationFrame(eL), eL = 0)
                },
                eB = new IntersectionObserver(([e]) => {
                    e.isIntersecting !== eS && (eS = e.isIntersecting, eF())
                }, {
                    rootMargin: "100% 0px"
                });
            eB.observe(t);
            let eN = () => {};
            if (eD) {
                let e = () => {
                    let e = (0, n.readHeroFade)() >= .995;
                    e !== eI && (eI = e, eF())
                };
                eN = (0, n.onHeroMeasure)(e), e()
            }
            return el && !(eu > 0) || eI || (eL = requestAnimationFrame(eM)), () => {
                Q = !1, eB.disconnect(), eN(), cancelAnimationFrame(eL), window.removeEventListener("pointermove", eE), window.removeEventListener("pointerleave", eT), clearTimeout(eh), ed.disconnect(), F.forEach(e => r.deleteTexture(e)), B.forEach(e => r.deleteFramebuffer(e)), r.deleteTexture(C), r.deleteProgram(w), r.deleteProgram(x), r.deleteBuffer(U), r.deleteVertexArray(A), window.setTimeout(() => {
                    t.isConnected || r.getExtension("WEBGL_lose_context") ? .loseContext()
                }, 0)
            }
        }, [e, f, p]), (0, t.jsx)("canvas", {
            ref: _,
            className: o.default.fluidCanvas,
            "aria-hidden": "true"
        })
    }])
}]);