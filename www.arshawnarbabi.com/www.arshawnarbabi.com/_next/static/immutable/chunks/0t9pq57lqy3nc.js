(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 10914, e => {
    "use strict";
    e.s(["default", 0, function(t, a) {
        return (r, o) => (function(t, a, r, o) {
            let n = "SharedWorker" === t.name,
                i = e.b,
                l = [r.map(t => e.h("string" == typeof t ? t : t.path, i)).reverse(), e.X],
                s = ["NEXT_DEPLOYMENT_ID", "NEXT_CLIENT_ASSET_SUFFIX"];
            for (let e = 0; e < s.length; e++) l.push(globalThis[s[e]]);
            let u = new URL(e.h(a, i), location.origin),
                h = JSON.stringify(l);
            return n ? u.searchParams.set("params", h) : u.hash = "#params=" + encodeURIComponent(h), new t(u, o ? { ...o,
                type: void 0
            } : void 0)
        })(r, t, a, o)
    }])
}, 20243, e => {
    e.v(e.r(10914).default("static/immutable/chunks/turbopack-worker-16g0xxeppwj0k.js", ["static/immutable/chunks/12aa-n51-wlyv.js", "static/immutable/chunks/turbopack-13cojyi0p0hq2.js"]))
}, 54851, e => {
    "use strict";
    let t;
    var a = e.i(90072),
        r = e.i(8560),
        o = a;
    let n = o.SRGBColorSpace;
    class i extends o.Loader {
        constructor(e) {
            super(e), this.defaultDPI = 90, this.defaultUnit = "px"
        }
        load(e, t, a, r) {
            let n = this,
                i = new o.FileLoader(n.manager);
            i.setPath(n.path), i.setRequestHeader(n.requestHeader), i.setWithCredentials(n.withCredentials), i.load(e, function(a) {
                try {
                    t(n.parse(a))
                } catch (t) {
                    r ? r(t) : console.error(t), n.manager.itemError(e)
                }
            }, a, r)
        }
        parse(e) {
            let t = this;

            function a(e, t, a, o, n, i, l, s) {
                if (0 == t || 0 == a) return void e.lineTo(s.x, s.y);
                o = o * Math.PI / 180, t = Math.abs(t), a = Math.abs(a);
                let u = (l.x - s.x) / 2,
                    h = (l.y - s.y) / 2,
                    c = Math.cos(o) * u + Math.sin(o) * h,
                    f = -Math.sin(o) * u + Math.cos(o) * h,
                    d = t * t,
                    p = a * a,
                    m = c * c,
                    y = f * f,
                    g = m / d + y / p;
                if (g > 1) {
                    let e = Math.sqrt(g);
                    t *= e, a *= e, d = t * t, p = a * a
                }
                let w = d * y + p * m,
                    b = Math.sqrt(Math.max(0, (d * p - w) / w));
                n === i && (b = -b);
                let x = b * t * f / a,
                    v = -b * a * c / t,
                    k = Math.cos(o) * x - Math.sin(o) * v + (l.x + s.x) / 2,
                    M = Math.sin(o) * x + Math.cos(o) * v + (l.y + s.y) / 2,
                    S = r(1, 0, (c - x) / t, (f - v) / a),
                    A = r((c - x) / t, (f - v) / a, (-c - x) / t, (-f - v) / a) % (2 * Math.PI);
                e.currentPath.absellipse(k, M, t, a, S, S + A, 0 === i, o)
            }

            function r(e, t, a, r) {
                let o = Math.sqrt(e * e + t * t) * Math.sqrt(a * a + r * r),
                    n = Math.acos(Math.max(-1, Math.min(1, (e * a + t * r) / o)));
                return e * r - t * a < 0 && (n = -n), n
            }

            function i(e, t) {
                t = Object.assign({}, t);
                let a = {};
                if (e.hasAttribute("class")) {
                    let t = e.getAttribute("class").split(/\s/).filter(Boolean).map(e => e.trim());
                    for (let e = 0; e < t.length; e++) a = Object.assign(a, y["." + t[e]])
                }

                function r(r, o, n) {
                    void 0 === n && (n = function(e) {
                        return e
                    }), e.hasAttribute(r) && (t[o] = n(e.getAttribute(r))), a[o] && (t[o] = n(a[o])), e.style && "" !== e.style[r] && (t[o] = n(e.style[r]))
                }

                function o(e) {
                    return Math.max(0, Math.min(1, h(e)))
                }

                function n(e) {
                    return Math.max(0, h(e))
                }
                return e.hasAttribute("id") && (a = Object.assign(a, y["#" + e.getAttribute("id")])), r("fill", "fill"), r("fill-opacity", "fillOpacity", o), r("fill-rule", "fillRule"), r("opacity", "opacity", o), r("stroke", "stroke"), r("stroke-opacity", "strokeOpacity", o), r("stroke-width", "strokeWidth", n), r("stroke-linejoin", "strokeLineJoin"), r("stroke-linecap", "strokeLineCap"), r("stroke-miterlimit", "strokeMiterLimit", n), r("visibility", "visibility"), t
            }

            function l(e, t, a) {
                let r;
                if ("string" != typeof e) throw TypeError("Invalid input: " + typeof e);
                let o = /[ \t\r\n]/,
                    n = /[\d]/,
                    i = /[-+]/,
                    l = /\./,
                    s = /,/,
                    u = /e/i,
                    h = /[01]/,
                    c = 0,
                    f = !0,
                    d = "",
                    p = "",
                    m = [];

                function y(e, t, a) {
                    let r = SyntaxError('Unexpected character "' + e + '" at index ' + t + ".");
                    throw r.partial = a, r
                }

                function g() {
                    "" !== d && ("" === p ? m.push(Number(d)) : m.push(Number(d) * Math.pow(10, Number(p)))), d = "", p = ""
                }
                let w = e.length;
                for (let b = 0; b < w; b++) {
                    if (r = e[b], Array.isArray(t) && t.includes(m.length % a) && h.test(r)) {
                        c = 1, d = r, g();
                        continue
                    }
                    if (0 === c) {
                        if (o.test(r)) continue;
                        if (n.test(r) || i.test(r)) {
                            c = 1, d = r;
                            continue
                        }
                        if (l.test(r)) {
                            c = 2, d = r;
                            continue
                        }
                        s.test(r) && (f && y(r, b, m), f = !0)
                    }
                    if (1 === c) {
                        if (n.test(r)) {
                            d += r;
                            continue
                        }
                        if (l.test(r)) {
                            d += r, c = 2;
                            continue
                        }
                        if (u.test(r)) {
                            c = 3;
                            continue
                        }
                        i.test(r) && 1 === d.length && i.test(d[0]) && y(r, b, m)
                    }
                    if (2 === c) {
                        if (n.test(r)) {
                            d += r;
                            continue
                        }
                        if (u.test(r)) {
                            c = 3;
                            continue
                        }
                        l.test(r) && "." === d[d.length - 1] && y(r, b, m)
                    }
                    if (3 === c) {
                        if (n.test(r)) {
                            p += r;
                            continue
                        }
                        if (i.test(r)) {
                            if ("" === p) {
                                p += r;
                                continue
                            }
                            1 === p.length && i.test(p) && y(r, b, m)
                        }
                    }
                    o.test(r) ? (g(), c = 0, f = !1) : s.test(r) ? (g(), c = 0, f = !0) : i.test(r) ? (g(), c = 1, d = r) : l.test(r) ? (g(), c = 2, d = r) : y(r, b, m)
                }
                return g(), m
            }
            let s = ["mm", "cm", "in", "pt", "pc", "px"],
                u = {
                    mm: {
                        mm: 1,
                        cm: .1,
                        in: 1 / 25.4,
                        pt: 72 / 25.4,
                        pc: 6 / 25.4,
                        px: -1
                    },
                    cm: {
                        mm: 10,
                        cm: 1,
                        in: 1 / 2.54,
                        pt: 72 / 2.54,
                        pc: 6 / 2.54,
                        px: -1
                    },
                    in: {
                        mm: 25.4,
                        cm: 2.54,
                        in: 1,
                        pt: 72,
                        pc: 6,
                        px: -1
                    },
                    pt: {
                        mm: 25.4 / 72,
                        cm: 2.54 / 72,
                        in: 1 / 72,
                        pt: 1,
                        pc: 6 / 72,
                        px: -1
                    },
                    pc: {
                        mm: 25.4 / 6,
                        cm: 2.54 / 6,
                        in: 1 / 6,
                        pt: 12,
                        pc: 1,
                        px: -1
                    },
                    px: {
                        px: 1
                    }
                };

            function h(e) {
                let a, r = "px";
                if ("string" == typeof e || e instanceof String)
                    for (let t = 0, a = s.length; t < a; t++) {
                        let a = s[t];
                        if (e.endsWith(a)) {
                            r = a, e = e.substring(0, e.length - a.length);
                            break
                        }
                    }
                return "px" === r && "px" !== t.defaultUnit ? a = u.in[t.defaultUnit] / t.defaultDPI : (a = u[r][t.defaultUnit]) < 0 && (a = u[r].in * t.defaultDPI), a * parseFloat(e)
            }

            function c(e, t) {
                let a = e.split(")");
                for (let e = a.length - 1; e >= 0; e--) {
                    let r = a[e].trim();
                    if ("" === r) continue;
                    let o = r.indexOf("("),
                        n = r.length;
                    if (o > 0 && o < n) {
                        let e = r.slice(0, o),
                            a = l(r.slice(o + 1));
                        switch (b.identity(), e) {
                            case "translate":
                                if (a.length >= 1) {
                                    let e = a[0],
                                        t = 0;
                                    a.length >= 2 && (t = a[1]), b.makeTranslation(e, t)
                                }
                                break;
                            case "rotate":
                                if (a.length >= 1) {
                                    let e = 0,
                                        t = 0,
                                        r = 0;
                                    e = a[0] * Math.PI / 180, a.length >= 3 && (t = a[1], r = a[2]), x.makeTranslation(-t, -r), v.makeRotation(e), k.multiplyMatrices(v, x), x.makeTranslation(t, r), b.multiplyMatrices(x, k)
                                }
                                break;
                            case "scale":
                                if (a.length >= 1) {
                                    let e = a[0],
                                        t = e;
                                    a.length >= 2 && (t = a[1]), b.makeScale(e, t)
                                }
                                break;
                            case "skewX":
                                1 === a.length && b.set(1, Math.tan(a[0] * Math.PI / 180), 0, 0, 1, 0, 0, 0, 1);
                                break;
                            case "skewY":
                                1 === a.length && b.set(1, 0, 0, Math.tan(a[0] * Math.PI / 180), 1, 0, 0, 0, 1);
                                break;
                            case "matrix":
                                6 === a.length && b.set(a[0], a[2], a[4], a[1], a[3], a[5], 0, 0, 1)
                        }
                        t.premultiply(b)
                    }
                }
                return t
            }

            function f(e) {
                let t = e.elements;
                return t[0] * t[4] - t[1] * t[3] < 0
            }

            function d(e) {
                let t = e.elements;
                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            }

            function p(e) {
                let t = e.elements;
                return Math.sqrt(t[3] * t[3] + t[4] * t[4])
            }
            let m = [],
                y = {},
                g = {},
                w = [],
                b = new o.Matrix3,
                x = new o.Matrix3,
                v = new o.Matrix3,
                k = new o.Matrix3,
                M = new o.Vector2,
                S = new o.Vector3,
                A = new o.Matrix3,
                T = new DOMParser().parseFromString(e, "image/svg+xml");
            return ! function(e) {
                let t = e.querySelectorAll("linearGradient, radialGradient"),
                    a = ["x1", "y1", "x2", "y2", "cx", "cy", "r", "fx", "fy", "gradientUnits", "gradientTransform", "spreadMethod"],
                    r = {};
                for (let e of t) {
                    let t = e.getAttribute("id");
                    if (!t) continue;
                    let o = {
                            type: "radialGradient" === e.nodeName ? "radialGradient" : "linearGradient",
                            attrs: {},
                            stops: null,
                            href: null
                        },
                        n = e.getAttributeNS("http://www.w3.org/1999/xlink", "href") || e.getAttribute("href") || "";
                    for (let t of (n.startsWith("#") && (o.href = n.substring(1)), a)) e.hasAttribute(t) && (o.attrs[t] = e.getAttribute(t));
                    let i = e.querySelectorAll("stop");
                    if (i.length > 0)
                        for (let e of (o.stops = [], i)) {
                            let t = e.getAttribute("stop-color");
                            !t && e.style && (t = e.style["stop-color"]), t || (t = "#000");
                            let a = e.getAttribute("stop-opacity");
                            (null === a || "" === a) && e.style && (a = e.style["stop-opacity"]), a = null === a || "" === a || void 0 === a ? 1 : Math.max(0, Math.min(1, parseFloat(a)));
                            let r = Math.max(0, Math.min(1, parseFloat(e.getAttribute("offset") || "0")));
                            o.stops.push({
                                offset: r,
                                color: t,
                                opacity: a
                            })
                        }
                    r[t] = o
                }
                for (let e in r) ! function e(t, a) {
                    let o = r[t];
                    if (!o || a.has(t)) return o;
                    if (a.add(t), o.href && r[o.href]) {
                        let t = e(o.href, a);
                        if (t)
                            for (let e in o.stops || (o.stops = t.stops), t.attrs) e in o.attrs || (o.attrs[e] = t.attrs[e])
                    }
                    return o
                }(e, new Set);
                for (let e in r) {
                    let t = r[e],
                        a = t.attrs,
                        i = "userSpaceOnUse" === a.gradientUnits ? "userSpaceOnUse" : "objectBoundingBox",
                        l = {
                            type: t.type,
                            gradientUnits: i,
                            spreadMethod: "reflect" === a.spreadMethod || "repeat" === a.spreadMethod ? a.spreadMethod : "pad",
                            gradientTransform: null,
                            stops: (t.stops || []).slice().sort((e, t) => e.offset - t.offset)
                        };

                    function n(e) {
                        return "string" != typeof e ? 0 : e.endsWith("%") ? parseFloat(e) / 100 : h(e)
                    }
                    if (a.gradientTransform && (l.gradientTransform = new o.Matrix3, c(a.gradientTransform, l.gradientTransform)), "linearGradient" === t.type) l.x1 = void 0 !== a.x1 ? n(a.x1) : 0, l.y1 = void 0 !== a.y1 ? n(a.y1) : 0, l.x2 = void 0 !== a.x2 ? n(a.x2) : +("objectBoundingBox" === i), l.y2 = void 0 !== a.y2 ? n(a.y2) : 0;
                    else {
                        let e = .5 * ("objectBoundingBox" === i),
                            t = .5 * ("objectBoundingBox" === i);
                        l.cx = void 0 !== a.cx ? n(a.cx) : e, l.cy = void 0 !== a.cy ? n(a.cy) : e, l.r = void 0 !== a.r ? n(a.r) : t, l.fx = void 0 !== a.fx ? n(a.fx) : l.cx, l.fy = void 0 !== a.fy ? n(a.fy) : l.cy
                    }
                    g[e] = l
                }
            }(T), ! function e(t, r) {
                var s, u, k, T, C, V;
                if (1 !== t.nodeType) return;
                t.hasAttribute("filter") && console.warn("THREE.SVGLoader: Filters are not supported.");
                let F = function(e) {
                        if (!(e.hasAttribute("transform") || "use" === e.nodeName && (e.hasAttribute("x") || e.hasAttribute("y")))) return null;
                        let t = function(e) {
                            let t = new o.Matrix3;
                            if ("use" === e.nodeName && (e.hasAttribute("x") || e.hasAttribute("y"))) {
                                let a = h(e.getAttribute("x") || 0),
                                    r = h(e.getAttribute("y") || 0);
                                t.makeTranslation(a, r)
                            }
                            return e.hasAttribute("transform") && c(e.getAttribute("transform"), t), t
                        }(e);
                        return w.length > 0 && t.premultiply(w[w.length - 1]), A.copy(t), w.push(t), t
                    }(t),
                    E = !1,
                    P = null;
                switch (t.nodeName) {
                    case "svg":
                    case "g":
                        r = i(t, r);
                        break;
                    case "style":
                        ! function(e) {
                            if (e.sheet && e.sheet.cssRules && e.sheet.cssRules.length)
                                for (let t = 0; t < e.sheet.cssRules.length; t++) {
                                    let a = e.sheet.cssRules[t];
                                    if (1 !== a.type) continue;
                                    let r = a.selectorText.split(/,/gm).filter(Boolean).map(e => e.trim());
                                    for (let e = 0; e < r.length; e++) {
                                        let t = Object.fromEntries(Object.entries(a.style).filter(([, e]) => "" !== e));
                                        y[r[e]] = Object.assign(y[r[e]] || {}, t)
                                    }
                                }
                        }(t);
                        break;
                    case "path":
                        r = i(t, r), t.hasAttribute("d") && (P = function(e) {
                            let t = new o.ShapePath,
                                r = new o.Vector2,
                                n = new o.Vector2,
                                i = new o.Vector2,
                                s = !0,
                                u = !1,
                                h = e.getAttribute("d");
                            if ("" === h || "none" === h) return null;
                            let c = h.match(/[a-df-z][^a-df-z]*/ig);
                            for (let e = 0, o = c.length; e < o; e++) {
                                var f, d, p, m, y, g, w, b;
                                let o, h = c[e],
                                    x = h.charAt(0),
                                    v = h.slice(1).trim();
                                switch (!0 === s && (u = !0, s = !1), x) {
                                    case "M":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 2) r.x = o[e + 0], r.y = o[e + 1], n.x = r.x, n.y = r.y, 0 === e ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y), 0 === e && i.copy(r);
                                        break;
                                    case "H":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e++) r.x = o[e], n.x = r.x, n.y = r.y, t.lineTo(r.x, r.y), 0 === e && !0 === u && i.copy(r);
                                        break;
                                    case "V":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e++) r.y = o[e], n.x = r.x, n.y = r.y, t.lineTo(r.x, r.y), 0 === e && !0 === u && i.copy(r);
                                        break;
                                    case "L":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 2) r.x = o[e + 0], r.y = o[e + 1], n.x = r.x, n.y = r.y, t.lineTo(r.x, r.y), 0 === e && !0 === u && i.copy(r);
                                        break;
                                    case "C":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 6) t.bezierCurveTo(o[e + 0], o[e + 1], o[e + 2], o[e + 3], o[e + 4], o[e + 5]), n.x = o[e + 2], n.y = o[e + 3], r.x = o[e + 4], r.y = o[e + 5], 0 === e && !0 === u && i.copy(r);
                                        break;
                                    case "S":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 4) {
                                            t.bezierCurveTo((f = r.x, f - (n.x - f)), (d = r.y, d - (n.y - d)), o[e + 0], o[e + 1], o[e + 2], o[e + 3]), n.x = o[e + 0], n.y = o[e + 1], r.x = o[e + 2], r.y = o[e + 3], 0 === e && !0 === u && i.copy(r)
                                        }
                                        break;
                                    case "Q":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 4) t.quadraticCurveTo(o[e + 0], o[e + 1], o[e + 2], o[e + 3]), n.x = o[e + 0], n.y = o[e + 1], r.x = o[e + 2], r.y = o[e + 3], 0 === e && !0 === u && i.copy(r);
                                        break;
                                    case "T":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 2) {
                                            let a = (p = r.x, p - (n.x - p)),
                                                l = (m = r.y, m - (n.y - m));
                                            t.quadraticCurveTo(a, l, o[e + 0], o[e + 1]), n.x = a, n.y = l, r.x = o[e + 0], r.y = o[e + 1], 0 === e && !0 === u && i.copy(r)
                                        }
                                        break;
                                    case "A":
                                        o = l(v, [3, 4], 7);
                                        for (let e = 0, l = o.length; e < l; e += 7) {
                                            if (o[e + 5] == r.x && o[e + 6] == r.y) continue;
                                            let l = r.clone();
                                            r.x = o[e + 5], r.y = o[e + 6], n.x = r.x, n.y = r.y, a(t, o[e], o[e + 1], o[e + 2], o[e + 3], o[e + 4], l, r), 0 === e && !0 === u && i.copy(r)
                                        }
                                        break;
                                    case "m":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 2) r.x += o[e + 0], r.y += o[e + 1], n.x = r.x, n.y = r.y, 0 === e ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y), 0 === e && i.copy(r);
                                        break;
                                    case "h":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e++) r.x += o[e], n.x = r.x, n.y = r.y, t.lineTo(r.x, r.y), 0 === e && !0 === u && i.copy(r);
                                        break;
                                    case "v":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e++) r.y += o[e], n.x = r.x, n.y = r.y, t.lineTo(r.x, r.y), 0 === e && !0 === u && i.copy(r);
                                        break;
                                    case "l":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 2) r.x += o[e + 0], r.y += o[e + 1], n.x = r.x, n.y = r.y, t.lineTo(r.x, r.y), 0 === e && !0 === u && i.copy(r);
                                        break;
                                    case "c":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 6) t.bezierCurveTo(r.x + o[e + 0], r.y + o[e + 1], r.x + o[e + 2], r.y + o[e + 3], r.x + o[e + 4], r.y + o[e + 5]), n.x = r.x + o[e + 2], n.y = r.y + o[e + 3], r.x += o[e + 4], r.y += o[e + 5], 0 === e && !0 === u && i.copy(r);
                                        break;
                                    case "s":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 4) {
                                            t.bezierCurveTo((y = r.x, y - (n.x - y)), (g = r.y, g - (n.y - g)), r.x + o[e + 0], r.y + o[e + 1], r.x + o[e + 2], r.y + o[e + 3]), n.x = r.x + o[e + 0], n.y = r.y + o[e + 1], r.x += o[e + 2], r.y += o[e + 3], 0 === e && !0 === u && i.copy(r)
                                        }
                                        break;
                                    case "q":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 4) t.quadraticCurveTo(r.x + o[e + 0], r.y + o[e + 1], r.x + o[e + 2], r.y + o[e + 3]), n.x = r.x + o[e + 0], n.y = r.y + o[e + 1], r.x += o[e + 2], r.y += o[e + 3], 0 === e && !0 === u && i.copy(r);
                                        break;
                                    case "t":
                                        o = l(v);
                                        for (let e = 0, a = o.length; e < a; e += 2) {
                                            let a = (w = r.x, w - (n.x - w)),
                                                l = (b = r.y, b - (n.y - b));
                                            t.quadraticCurveTo(a, l, r.x + o[e + 0], r.y + o[e + 1]), n.x = a, n.y = l, r.x = r.x + o[e + 0], r.y = r.y + o[e + 1], 0 === e && !0 === u && i.copy(r)
                                        }
                                        break;
                                    case "a":
                                        o = l(v, [3, 4], 7);
                                        for (let e = 0, l = o.length; e < l; e += 7) {
                                            if (0 == o[e + 5] && 0 == o[e + 6]) continue;
                                            let l = r.clone();
                                            r.x += o[e + 5], r.y += o[e + 6], n.x = r.x, n.y = r.y, a(t, o[e], o[e + 1], o[e + 2], o[e + 3], o[e + 4], l, r), 0 === e && !0 === u && i.copy(r)
                                        }
                                        break;
                                    case "Z":
                                    case "z":
                                        t.currentPath.autoClose = !0, t.currentPath.curves.length > 0 && (r.copy(i), t.currentPath.currentPoint.copy(r), s = !0);
                                        break;
                                    default:
                                        console.warn(h)
                                }
                                u = !1
                            }
                            return t
                        }(t));
                        break;
                    case "rect":
                        let B, D, L, N, z, I, R;
                        r = i(t, r), B = h((s = t).getAttribute("x") || 0), D = h(s.getAttribute("y") || 0), L = h(s.getAttribute("rx") || s.getAttribute("ry") || 0), N = h(s.getAttribute("ry") || s.getAttribute("rx") || 0), z = h(s.getAttribute("width")), I = h(s.getAttribute("height")), (R = new o.ShapePath).moveTo(B + L, D), R.lineTo(B + z - L, D), (0 !== L || 0 !== N) && R.bezierCurveTo(B + z - .448084975506 * L, D, B + z, D + .448084975506 * N, B + z, D + N), R.lineTo(B + z, D + I - N), (0 !== L || 0 !== N) && R.bezierCurveTo(B + z, D + I - .448084975506 * N, B + z - .448084975506 * L, D + I, B + z - L, D + I), R.lineTo(B + L, D + I), (0 !== L || 0 !== N) && R.bezierCurveTo(B + .448084975506 * L, D + I, B, D + I - .448084975506 * N, B, D + I - N), R.lineTo(B, D + N), (0 !== L || 0 !== N) && R.bezierCurveTo(B, D + .448084975506 * N, B + .448084975506 * L, D, B + L, D), P = R;
                        break;
                    case "polygon":
                        let W, O;
                        r = i(t, r), u = t, W = new o.ShapePath, O = 0, u.getAttribute("points").replace(/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g, function(e, t, a) {
                            let r = h(t),
                                o = h(a);
                            0 === O ? W.moveTo(r, o) : W.lineTo(r, o), O++
                        }), W.currentPath.autoClose = !0, P = W;
                        break;
                    case "polyline":
                        let U, q;
                        r = i(t, r), k = t, U = new o.ShapePath, q = 0, k.getAttribute("points").replace(/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g, function(e, t, a) {
                            let r = h(t),
                                o = h(a);
                            0 === q ? U.moveTo(r, o) : U.lineTo(r, o), q++
                        }), U.currentPath.autoClose = !1, P = U;
                        break;
                    case "circle":
                        let G, H, j, _, X;
                        r = i(t, r), G = h((T = t).getAttribute("cx") || 0), H = h(T.getAttribute("cy") || 0), j = h(T.getAttribute("r") || 0), (_ = new o.Path).absarc(G, H, j, 0, 2 * Math.PI), (X = new o.ShapePath).subPaths.push(_), P = X;
                        break;
                    case "ellipse":
                        let Y, $, K, Z, J, Q;
                        r = i(t, r), Y = h((C = t).getAttribute("cx") || 0), $ = h(C.getAttribute("cy") || 0), K = h(C.getAttribute("rx") || 0), Z = h(C.getAttribute("ry") || 0), (J = new o.Path).absellipse(Y, $, K, Z, 0, 2 * Math.PI), (Q = new o.ShapePath).subPaths.push(J), P = Q;
                        break;
                    case "line":
                        let ee, et, ea, er, eo;
                        r = i(t, r), ee = h((V = t).getAttribute("x1") || 0), et = h(V.getAttribute("y1") || 0), ea = h(V.getAttribute("x2") || 0), er = h(V.getAttribute("y2") || 0), (eo = new o.ShapePath).moveTo(ee, et), eo.lineTo(ea, er), eo.currentPath.autoClose = !1, P = eo;
                        break;
                    case "defs":
                        E = !0;
                        break;
                    case "use":
                        r = i(t, r);
                        let en = (t.getAttributeNS("http://www.w3.org/1999/xlink", "href") || "").substring(1),
                            ei = t.viewportElement.getElementById(en);
                        ei ? e(ei, r) : console.warn("SVGLoader: 'use node' references non-existent node id: " + en)
                }
                if (P) {
                    let e;
                    void 0 === r.fill || "none" === r.fill || r.fill.startsWith("url") || P.color.setStyle(r.fill, n),
                        function(e, t) {
                            function a(e) {
                                S.set(e.x, e.y, 1).applyMatrix3(t), e.set(S.x, S.y)
                            }
                            let r = e.subPaths;
                            for (let e = 0, n = r.length; e < n; e++) {
                                let n = r[e].curves;
                                for (let e = 0; e < n.length; e++) {
                                    let r = n[e];
                                    r.isLineCurve ? (a(r.v1), a(r.v2)) : r.isCubicBezierCurve ? (a(r.v0), a(r.v1), a(r.v2), a(r.v3)) : r.isQuadraticBezierCurve ? (a(r.v0), a(r.v1), a(r.v2)) : r.isEllipseCurve && (M.set(r.aX, r.aY), a(M), r.aX = M.x, r.aY = M.y, function(e) {
                                        let t = e.elements,
                                            a = t[0] * t[3] + t[1] * t[4];
                                        return 0 !== a && Math.abs(a / (d(e) * p(e))) > Number.EPSILON
                                    }(t) ? function(e) {
                                        let a = e.xRadius,
                                            r = e.yRadius,
                                            n = Math.cos(e.aRotation),
                                            i = Math.sin(e.aRotation),
                                            l = new o.Vector3(a * n, a * i, 0),
                                            s = new o.Vector3(-r * i, r * n, 0),
                                            u = l.applyMatrix3(t),
                                            h = s.applyMatrix3(t),
                                            c = b.set(u.x, h.x, 0, u.y, h.y, 0, 0, 0, 1),
                                            d = x.copy(c).invert(),
                                            p = v.copy(d).transpose().multiply(d).elements,
                                            m = function(e, t, a) {
                                                let r, o, n, i, l, s = e + a,
                                                    u = e - a,
                                                    h = Math.sqrt(u * u + 4 * t * t);
                                                return s > 0 ? o = e * (l = 1 / (r = .5 * (s + h))) * a - t * l * t : s < 0 ? o = .5 * (s - h) : (r = .5 * h, o = -.5 * h), Math.abs(n = u > 0 ? u + h : u - h) > 2 * Math.abs(t) ? (i = 1 / Math.sqrt(1 + (l = -2 * t / n) * l), n = l * i) : 0 === Math.abs(t) ? (n = 1, i = 0) : (n = 1 / Math.sqrt(1 + (l = -.5 * n / t) * l), i = l * n), u > 0 && (l = n, n = -i, i = l), {
                                                    rt1: r,
                                                    rt2: o,
                                                    cs: n,
                                                    sn: i
                                                }
                                            }(p[0], p[1], p[4]),
                                            y = Math.sqrt(m.rt1),
                                            g = Math.sqrt(m.rt2);
                                        if (e.xRadius = 1 / y, e.yRadius = 1 / g, e.aRotation = Math.atan2(m.sn, m.cs), !((e.aEndAngle - e.aStartAngle) % (2 * Math.PI) < Number.EPSILON)) {
                                            let a = x.set(y, 0, 0, 0, g, 0, 0, 0, 1),
                                                r = v.set(m.cs, m.sn, 0, -m.sn, m.cs, 0, 0, 0, 1),
                                                n = a.multiply(r).multiply(c),
                                                i = e => {
                                                    let {
                                                        x: t,
                                                        y: a
                                                    } = new o.Vector3(Math.cos(e), Math.sin(e), 0).applyMatrix3(n);
                                                    return Math.atan2(a, t)
                                                };
                                            e.aStartAngle = i(e.aStartAngle), e.aEndAngle = i(e.aEndAngle), f(t) && (e.aClockwise = !e.aClockwise)
                                        }
                                    }(r) : function(e) {
                                        let a = d(t),
                                            r = p(t);
                                        e.xRadius *= a, e.yRadius *= r;
                                        let o = a > Number.EPSILON ? Math.atan2(t.elements[1], t.elements[0]) : Math.atan2(-t.elements[3], t.elements[4]);
                                        e.aRotation += o, f(t) && (e.aStartAngle *= -1, e.aEndAngle *= -1, e.aClockwise = !e.aClockwise)
                                    }(r))
                                }
                            }
                        }(P, A), m.push(P);
                    let a = Object.assign({}, r);
                    a.strokeWidth = r.strokeWidth * Math.sqrt(Math.abs((e = A.elements)[0] * e[4] - e[1] * e[3])), P.userData = {
                        node: t,
                        style: a,
                        transform: A.clone(),
                        gradients: g
                    }
                }
                let el = t.childNodes;
                for (let t = 0; t < el.length; t++) {
                    let a = el[t];
                    E && "style" !== a.nodeName && "defs" !== a.nodeName || e(a, r)
                }
                F && (w.pop(), w.length > 0 ? A.copy(w[w.length - 1]) : A.identity())
            }(T.documentElement, {
                fill: "#000",
                fillOpacity: 1,
                strokeOpacity: 1,
                strokeWidth: 1,
                strokeLineJoin: "miter",
                strokeLineCap: "butt",
                strokeMiterLimit: 4
            }), {
                paths: m,
                gradients: g,
                xml: T.documentElement
            }
        }
        static createFillMaterial(e) {
            let t = e.userData.style;
            if (void 0 === t.fill || "none" === t.fill) return null;
            let a = e.color,
                r = null,
                i = l.exec(t.fill);
            i && (r = function(e, t, a = 256) {
                let r;
                if (!e || !Array.isArray(e.stops) || 0 === e.stops.length) return null;
                let i = t.userData.transform,
                    l = "objectBoundingBox" === e.gradientUnits,
                    u = null;
                if (l && null === (u = function(e, t) {
                        let a = t ? t.clone().invert() : null,
                            r = new o.Vector2,
                            n = new o.Box2;
                        for (let t of e.subPaths)
                            for (let e of t.getPoints()) r.copy(e), a && r.applyMatrix3(a), n.expandByPoint(r);
                        return n.isEmpty() ? null : {
                            minX: n.min.x,
                            minY: n.min.y,
                            width: n.max.x - n.min.x,
                            height: n.max.y - n.min.y
                        }
                    }(t, i))) return null;

                function h(t, a, r) {
                    r.set(t, a, 1), e.gradientTransform && r.applyMatrix3(e.gradientTransform), l && r.set(u.minX + r.x * u.width, u.minY + r.y * u.height, 1), i && r.applyMatrix3(i)
                }
                let c = document.createElement("canvas");
                if ("linearGradient" === e.type) {
                    c.width = a, c.height = 1;
                    let t = c.getContext("2d"),
                        n = t.createLinearGradient(0, 0, a, 0);
                    s(n, e.stops), t.fillStyle = n, t.fillRect(0, 0, a, 1);
                    let i = new o.Vector3,
                        l = new o.Vector3;
                    h(e.x1, e.y1, i), h(e.x2, e.y2, l);
                    let u = l.x - i.x,
                        f = l.y - i.y,
                        d = u * u + f * f || 1e-20,
                        p = u / d,
                        m = f / d,
                        y = -(p * i.x + m * i.y);
                    r = new o.Matrix3().set(p, m, y, 0, 0, .5, 0, 0, 1)
                } else {
                    let t = e.cx,
                        n = e.cy,
                        h = e.fx,
                        f = e.fy,
                        d = e.r;
                    if (e.gradientTransform) {
                        let a = new o.Vector3;
                        a.set(t, n, 1).applyMatrix3(e.gradientTransform), t = a.x, n = a.y, a.set(h, f, 1).applyMatrix3(e.gradientTransform), h = a.x, f = a.y
                    }
                    if (l && (t = u.minX + t * u.width, n = u.minY + n * u.height, h = u.minX + h * u.width, f = u.minY + f * u.height, d *= Math.sqrt((u.width * u.width + u.height * u.height) / 2)), d <= 0) return null;
                    c.width = a, c.height = a;
                    let p = c.getContext("2d"),
                        m = t - d,
                        y = n - d,
                        g = 2 * d,
                        w = a / g;
                    p.setTransform(w, 0, 0, w, -m * w, -y * w);
                    let b = p.createRadialGradient(h, f, 0, t, n, d);
                    s(b, e.stops), p.fillStyle = b, p.fillRect(m, y, g, g);
                    let x = i ? i.clone().invert() : new o.Matrix3;
                    r = new o.Matrix3().set(1 / g, 0, -m / g, 0, 1 / g, -y / g, 0, 0, 1).multiply(x)
                }
                let f = new o.CanvasTexture(c);
                f.colorSpace = n, f.flipY = !1, f.matrixAutoUpdate = !1, f.matrix = r;
                let d = "reflect" === e.spreadMethod ? o.MirroredRepeatWrapping : "repeat" === e.spreadMethod ? o.RepeatWrapping : o.ClampToEdgeWrapping;
                return f.wrapS = d, f.wrapT = d, f
            }(e.userData.gradients && e.userData.gradients[i[1]], e));
            let u = new o.MeshBasicMaterial({
                opacity: t.fillOpacity * (t.opacity || 1),
                transparent: !0,
                side: o.DoubleSide,
                depthWrite: !1
            });
            return null !== r ? u.map = r : u.color = a, u
        }
        static createStrokeMaterial(e) {
            let t = e.userData.style;
            return void 0 === t.stroke || "none" === t.stroke ? null : (l.test(t.stroke) && console.warn("THREE.SVGLoader: Gradient strokes are not supported."), new o.MeshBasicMaterial({
                color: new o.Color().setStyle(t.stroke, n),
                opacity: t.strokeOpacity * (t.opacity || 1),
                transparent: !0,
                side: o.DoubleSide,
                depthWrite: !1
            }))
        }
        static createShapes(e) {
            return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."), e.toShapes()
        }
        static getStrokeStyle(e, t, a, r, o) {
            return {
                strokeColor: t = void 0 !== t ? t : "#000",
                strokeWidth: e = void 0 !== e ? e : 1,
                strokeLineJoin: a = void 0 !== a ? a : "miter",
                strokeLineCap: r = void 0 !== r ? r : "butt",
                strokeMiterLimit: o = void 0 !== o ? o : 4
            }
        }
        static pointsToStroke(e, t, a, r) {
            let n = [],
                l = [],
                s = [];
            if (0 === i.pointsToStrokeWithBuffers(e, t, a, r, n, l, s)) return null;
            let u = new o.BufferGeometry;
            return u.setAttribute("position", new o.Float32BufferAttribute(n, 3)), u.setAttribute("normal", new o.Float32BufferAttribute(l, 3)), u.setAttribute("uv", new o.Float32BufferAttribute(s, 2)), u
        }
        static pointsToStrokeWithBuffers(e, t, a, r, n, i, l, s) {
            let u, h, c, f, d, p = new o.Vector2,
                m = new o.Vector2,
                y = new o.Vector2,
                g = new o.Vector2,
                w = new o.Vector2,
                b = new o.Vector2,
                x = new o.Vector2,
                v = new o.Vector2,
                k = new o.Vector2,
                M = new o.Vector2,
                S = new o.Vector2,
                A = new o.Vector2,
                T = new o.Vector2,
                C = new o.Vector2,
                V = new o.Vector2,
                F = new o.Vector2,
                E = new o.Vector2;
            a = void 0 !== a ? a : 12, r = void 0 !== r ? r : .001, s = void 0 !== s ? s : 0;
            let P = (e = function(e) {
                let t = !1;
                for (let a = 1, o = e.length - 1; a < o; a++)
                    if (e[a].distanceTo(e[a + 1]) < r) {
                        t = !0;
                        break
                    }
                if (!t) return e;
                let a = [];
                a.push(e[0]);
                for (let t = 1, o = e.length - 1; t < o; t++) e[t].distanceTo(e[t + 1]) >= r && a.push(e[t]);
                return a.push(e[e.length - 1]), a
            }(e)).length;
            if (P < 2) return 0;
            let B = e[0].equals(e[P - 1]),
                D = e[0],
                L = t.strokeWidth / 2,
                N = 1 / (P - 1),
                z = 0,
                I, R = !1,
                W = 0,
                O = 3 * s,
                U = 2 * s;
            q(e[0], e[1], p).multiplyScalar(L), v.copy(e[0]).sub(p), k.copy(e[0]).add(p), M.copy(v), S.copy(k);
            for (let a = 1; a < P; a++) {
                if (u = e[a], h = a === P - 1 ? B ? e[1] : void 0 : e[a + 1], q(D, u, p), y.copy(p).multiplyScalar(L), A.copy(u).sub(y), T.copy(u).add(y), I = z + N, c = !1, void 0 !== h) {
                    q(u, h, m), y.copy(m).multiplyScalar(L), C.copy(u).sub(y), V.copy(u).add(y), f = !0, y.subVectors(h, D), 0 > p.dot(y) && (f = !1), 1 === a && (R = f), y.subVectors(h, u), y.normalize();
                    let e = Math.abs(p.dot(y));
                    if (e > Number.EPSILON) {
                        let a = L / e;
                        y.multiplyScalar(-a), g.subVectors(u, D), w.copy(g).setLength(a).add(y), F.copy(w).negate();
                        let r = w.length(),
                            o = g.length();
                        g.divideScalar(o), b.subVectors(h, u);
                        let n = b.length();
                        if (b.divideScalar(n), g.dot(F) < o && b.dot(F) < n && (c = !0), E.copy(w).add(u), F.add(u), c) {
                            let e = f ? k : v,
                                t = (E.x - e.x) * (F.y - e.y) - (E.y - e.y) * (F.x - e.x);
                            (f && t < 0 || !f && t > 0) && F.copy(e)
                        }
                        switch (d = !1, c ? f ? (V.copy(F), T.copy(F)) : (C.copy(F), A.copy(F)) : j(), t.strokeLineJoin) {
                            case "bevel":
                                _(f, c, I);
                                break;
                            case "round":
                                X(f, c), f ? H(u, A, C, I, 0) : H(u, V, T, I, 1);
                                break;
                            default:
                                let i = L * t.strokeMiterLimit / r;
                                i < 1 ? "miter-clip" !== t.strokeLineJoin ? _(f, c, I) : (X(f, c), f ? (b.subVectors(E, A).multiplyScalar(i).add(A), x.subVectors(E, C).multiplyScalar(i).add(C), G(A, I, 0), G(b, I, 0), G(u, I, .5), G(u, I, .5), G(b, I, 0), G(x, I, 0), G(u, I, .5), G(x, I, 0), G(C, I, 0)) : (b.subVectors(E, T).multiplyScalar(i).add(T), x.subVectors(E, V).multiplyScalar(i).add(V), G(T, I, 1), G(b, I, 1), G(u, I, .5), G(u, I, .5), G(b, I, 1), G(x, I, 1), G(u, I, .5), G(x, I, 1), G(V, I, 1))) : (c ? (f ? (G(k, z, 1), G(v, z, 0), G(E, I, 0), G(k, z, 1), G(E, I, 0), G(F, I, 1)) : (G(k, z, 1), G(v, z, 0), G(E, I, 1), G(v, z, 0), G(F, I, 0), G(E, I, 1)), f ? C.copy(E) : V.copy(E)) : f ? (G(A, I, 0), G(E, I, 0), G(u, I, .5), G(u, I, .5), G(E, I, 0), G(C, I, 0)) : (G(T, I, 1), G(E, I, 1), G(u, I, .5), G(u, I, .5), G(E, I, 1), G(V, I, 1)), d = !0)
                        }
                    } else j()
                } else j();
                B || a !== P - 1 || Y(e[0], M, S, f, !0, z), z = I, D = u, v.copy(C), k.copy(V)
            }
            if (B) {
                if (c && n) {
                    let e = E,
                        t = F;
                    R !== f && (e = F, t = E), f ? (d || R) && (t.toArray(n, 0), t.toArray(n, 9), d && e.toArray(n, 3)) : (d || !R) && (t.toArray(n, 3), t.toArray(n, 9), d && e.toArray(n, 0))
                }
            } else Y(u, A, T, f, !1, I);
            if (n) {
                let e = [new o.Vector2, new o.Vector2, new o.Vector2],
                    t = 3 * s;
                for (let a = t; a < O; a += 9) e[0].set(n[a], n[a + 1]), e[1].set(n[a + 3], n[a + 4]), e[2].set(n[a + 6], n[a + 7]), 0 > o.ShapeUtils.area(e) && (n[a + 3] = e[0].x, n[a + 4] = e[0].y)
            }
            return W;

            function q(e, t, a) {
                return a.subVectors(t, e), a.set(-a.y, a.x).normalize()
            }

            function G(e, t, a) {
                n && (n[O] = e.x, n[O + 1] = e.y, n[O + 2] = 0, i && (i[O] = 0, i[O + 1] = 0, i[O + 2] = 1), O += 3, l && (l[U] = t, l[U + 1] = a, U += 2)), W += 3
            }

            function H(e, t, r, o, n) {
                p.copy(t).sub(e).normalize(), m.copy(r).sub(e).normalize();
                let i = Math.PI,
                    l = p.dot(m);
                1 > Math.abs(l) && (i = Math.abs(Math.acos(l))), i /= a, y.copy(t);
                for (let t = 0, r = a - 1; t < r; t++) g.copy(y).rotateAround(e, i), G(y, o, n), G(g, o, n), G(e, o, .5), y.copy(g);
                G(y, o, n), G(r, o, n), G(e, o, .5)
            }

            function j() {
                G(k, z, 1), G(v, z, 0), G(A, I, 0), G(k, z, 1), G(A, I, 0), G(T, I, 1)
            }

            function _(e, t, a) {
                t ? e ? (G(k, z, 1), G(v, z, 0), G(A, I, 0), G(k, z, 1), G(A, I, 0), G(F, I, 1), G(A, a, 0), G(C, a, 0), G(F, a, .5)) : (G(k, z, 1), G(v, z, 0), G(T, I, 1), G(v, z, 0), G(F, I, 0), G(T, I, 1), G(T, a, 1), G(F, a, 0), G(V, a, 1)) : (e ? (G(A, a, 0), G(C, a, 0)) : (G(T, a, 1), G(V, a, 0)), G(u, a, .5))
            }

            function X(e, t) {
                t && (e ? (G(k, z, 1), G(v, z, 0), G(A, I, 0), G(k, z, 1), G(A, I, 0), G(F, I, 1), G(A, z, 0), G(u, I, .5), G(F, I, 1), G(u, I, .5), G(C, z, 0), G(F, I, 1)) : (G(k, z, 1), G(v, z, 0), G(T, I, 1), G(v, z, 0), G(F, I, 0), G(T, I, 1), G(T, z, 1), G(F, I, 0), G(u, I, .5), G(u, I, .5), G(F, I, 0), G(V, z, 1)))
            }

            function Y(e, a, r, o, i, s) {
                switch (t.strokeLineCap) {
                    case "round":
                        i ? H(e, r, a, s, .5) : H(e, a, r, s, .5);
                        break;
                    case "square":
                        if (i) p.subVectors(a, e), m.set(p.y, -p.x), y.addVectors(p, m).add(e), g.subVectors(m, p).add(e), o ? (y.toArray(n, 3), g.toArray(n, 0), g.toArray(n, 9)) : (y.toArray(n, 3), 1 === l[7] ? g.toArray(n, 9) : y.toArray(n, 9), g.toArray(n, 0));
                        else {
                            p.subVectors(r, e), m.set(p.y, -p.x), y.addVectors(p, m).add(e), g.subVectors(m, p).add(e);
                            let t = n.length;
                            o ? (y.toArray(n, t - 3), g.toArray(n, t - 6)) : (g.toArray(n, t - 6), y.toArray(n, t - 3)), g.toArray(n, t - 12)
                        }
                }
            }
        }
    }
    let l = /^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;

    function s(e, t) {
        let a = new o.Color;
        for (let r of t) {
            let t = r.color;
            if (r.opacity < 1) {
                a.setStyle(r.color, n);
                let e = /rgb\(([^)]+)\)/.exec(a.getStyle(n));
                e && (t = `rgba(${e[1]},${r.opacity})`)
            }
            e.addColorStop(Math.max(0, Math.min(1, r.offset)), t)
        }
    }
    var u = a;
    class h extends u.BufferGeometry {
        constructor(e = new u.Mesh, t = new u.Vector3, a = new u.Euler, r = new u.Vector3(1, 1, 1)) {
            super();
            const o = [],
                n = [],
                i = [],
                l = new u.Vector3,
                s = new u.Matrix3().getNormalMatrix(e.matrixWorld),
                h = new u.Matrix4;
            h.makeRotationFromEuler(a), h.setPosition(t);
            const f = new u.Matrix4;

            function d(t, a, r = null) {
                a.applyMatrix4(e.matrixWorld), a.applyMatrix4(f), r ? (r.applyNormalMatrix(s), t.push(new c(a.clone(), r.clone()))) : t.push(new c(a.clone()))
            }

            function p(e, t) {
                let a = [],
                    o = .5 * Math.abs(r.dot(t));
                for (let r = 0; r < e.length; r += 3) {
                    let n, i, l, s, u = e[r + 0].position.dot(t) - o,
                        h = e[r + 1].position.dot(t) - o,
                        c = e[r + 2].position.dot(t) - o,
                        f = u > 0,
                        d = h > 0,
                        p = c > 0;
                    switch (+!!f + +!!d + +!!p) {
                        case 0:
                            a.push(e[r]), a.push(e[r + 1]), a.push(e[r + 2]);
                            break;
                        case 1:
                            if (f && (n = e[r + 1], i = e[r + 2], l = m(e[r], n, t, o), s = m(e[r], i, t, o)), d) {
                                n = e[r], i = e[r + 2], l = m(e[r + 1], n, t, o), s = m(e[r + 1], i, t, o), a.push(l), a.push(i.clone()), a.push(n.clone()), a.push(i.clone()), a.push(l.clone()), a.push(s);
                                break
                            }
                            p && (n = e[r], i = e[r + 1], l = m(e[r + 2], n, t, o), s = m(e[r + 2], i, t, o)), a.push(n.clone()), a.push(i.clone()), a.push(l), a.push(s), a.push(l.clone()), a.push(i.clone());
                            break;
                        case 2:
                            f || (i = m(n = e[r].clone(), e[r + 1], t, o), l = m(n, e[r + 2], t, o), a.push(n), a.push(i), a.push(l)), d || (i = m(n = e[r + 1].clone(), e[r + 2], t, o), l = m(n, e[r], t, o), a.push(n), a.push(i), a.push(l)), p || (i = m(n = e[r + 2].clone(), e[r], t, o), l = m(n, e[r + 1], t, o), a.push(n), a.push(i), a.push(l))
                    }
                }
                return a
            }

            function m(e, t, a, r) {
                let o = e.position.dot(a) - r,
                    n = o / (o - (t.position.dot(a) - r)),
                    i = new u.Vector3(e.position.x + n * (t.position.x - e.position.x), e.position.y + n * (t.position.y - e.position.y), e.position.z + n * (t.position.z - e.position.z)),
                    l = null;
                return null !== e.normal && null !== t.normal && (l = new u.Vector3(e.normal.x + n * (t.normal.x - e.normal.x), e.normal.y + n * (t.normal.y - e.normal.y), e.normal.z + n * (t.normal.z - e.normal.z))), new c(i, l)
            }
            f.copy(h).invert(),
                function() {
                    let t = [],
                        a = new u.Vector3,
                        s = new u.Vector3,
                        c = e.geometry,
                        f = c.attributes.position,
                        m = c.attributes.normal;
                    if (null !== c.index) {
                        let e = c.index;
                        for (let r = 0; r < e.count; r++) a.fromBufferAttribute(f, e.getX(r)), m ? (s.fromBufferAttribute(m, e.getX(r)), d(t, a, s)) : d(t, a)
                    } else {
                        if (void 0 === f) return;
                        for (let e = 0; e < f.count; e++) a.fromBufferAttribute(f, e), m ? (s.fromBufferAttribute(m, e), d(t, a, s)) : d(t, a)
                    }
                    t = p(t, l.set(1, 0, 0)), t = p(t, l.set(-1, 0, 0)), t = p(t, l.set(0, 1, 0)), t = p(t, l.set(0, -1, 0)), t = p(t, l.set(0, 0, 1)), t = p(t, l.set(0, 0, -1));
                    for (let e = 0; e < t.length; e++) {
                        let a = t[e];
                        i.push(.5 + a.position.x / r.x, .5 + a.position.y / r.y), a.position.applyMatrix4(h), o.push(a.position.x, a.position.y, a.position.z), null !== a.normal && n.push(a.normal.x, a.normal.y, a.normal.z)
                    }
                }(), this.setAttribute("position", new u.Float32BufferAttribute(o, 3)), this.setAttribute("uv", new u.Float32BufferAttribute(i, 2)), n.length > 0 && this.setAttribute("normal", new u.Float32BufferAttribute(n, 3))
        }
    }
    class c {
        constructor(e, t = null) {
            this.position = e, this.normal = t
        }
        clone() {
            let e = this.position.clone(),
                t = null !== this.normal ? this.normal.clone() : null;
            return new this.constructor(e, t)
        }
    }
    let f = new Map;

    function d() {
        let e = document.createElement("canvas");
        e.width = e.height = 1;
        let t = new a.CanvasTexture(e),
            r = new a.DataTexture(new Uint8Array([255]), 1, 1, a.RedFormat, a.UnsignedByteType);
        return r.needsUpdate = !0, {
            art: t,
            sdf: r,
            aspect: 1,
            dispose: () => {
                t.dispose(), r.dispose()
            }
        }
    }

    function p(e, t, a, r, o) {
        let n = 0;
        a[0] = 0, r[0] = -1e20, r[1] = 1e20;
        for (let t = 1; t < o; t++) {
            let o = (e[t] + t * t - (e[a[n]] + a[n] * a[n])) / (2 * t - 2 * a[n]);
            for (; n > 0 && o <= r[n];) n--, o = (e[t] + t * t - (e[a[n]] + a[n] * a[n])) / (2 * t - 2 * a[n]);
            a[++n] = t, r[n] = o, r[n + 1] = 1e20
        }
        n = 0;
        for (let i = 0; i < o; i++) {
            for (; r[n + 1] < i;) n++;
            t[i] = (i - a[n]) * (i - a[n]) + e[a[n]]
        }
    }
    let m = `
float hash31(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float vnoise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), f.x),
        mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
        mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y), f.z);
}
/** One octave's contribution, zero once its period is under about a pixel. */
float octaveWeight(float rate) {
  return 1.0 - smoothstep(0.30, 0.85, rate);
}
float fbmLod(vec3 p, float rate) {
  float sum = 0.0, amp = 0.5, freq = 1.0, norm = 0.0;
  for (int i = 0; i < 4; i++) {
    float w = octaveWeight(rate * freq);
    if (w <= 0.001) break;
    sum += amp * w * vnoise(p * freq);
    norm += amp * w;
    amp *= 0.5;
    freq *= 2.02;
  }
  // Renormalised, so dropping octaves changes the DETAIL and not the overall
  // level. Without this a finish visibly shifts as the camera pulls back.
  return norm > 0.0001 ? sum / norm : 0.5;
}
`,
        y = {
            brushed: {
                freq: 46,
                height: "h = fbmLod(vec3(q.x * 46.0, q.y * 0.5, q.z * 2.5), rate * 46.0);"
            },
            scratched: {
                freq: 26,
                height: `{
      float n = fbmLod(vec3(q.x * 26.0, q.y * 0.6, q.z * 2.0), rate * 26.0);
      h = smoothstep(0.42, 0.56, n);
    }`
            },
            "bead blast": {
                freq: 38,
                height: "h = fbmLod(q * 38.0, rate * 38.0);"
            },
            fluted: {
                freq: 14,
                height: `{
      float w = octaveWeight(rate * 14.0);
      h = 0.5 + 0.5 * cos(q.x * 14.0 * 6.2831) * w;
    }`
            },
            hammered: {
                freq: 11,
                height: `{
      float w = octaveWeight(rate * 11.0);
      float a = vnoise(q * 11.0);
      float b = vnoise(q * 11.0 + 7.3);
      h = mix(0.5, smoothstep(0.15, 0.85, abs(a - b) * 2.2), w);
    }`
            }
        },
        g = `
uniform float uFlake;
uniform float uFlakeScale;
uniform float uFlakeSharp;

/** One tap: the glint this cell contributes, already weighted by whether it
    is a flake at all. Split out so the footprint can be sampled more than once. */
float flakeTap(vec3 p, vec3 V, vec3 bx, vec3 by, vec3 n, float lobe, float density, float blur);

vec3 flakeCell(vec3 p, out float lit) {
  vec3 c = floor(p);
  float h1 = hash31(c);
  float h2 = hash31(c + 11.3);
  float h3 = hash31(c + 27.7);
  // Only the cells above the cut are flakes at all.
  lit = step(1.0 - uFlake * 0.55, h1);
  // A direction on the hemisphere, leaning toward the surface so a flake reads
  // as embedded in the coat rather than standing on end.
  float a = h2 * 6.2831853;
  float r = 0.35 + 0.65 * h3;
  /*
   * LEANING HARD TOWARD THE SURFACE. A flake tilted freely is as likely to find
   * a dark part of the room as a bright one, and in a lit studio most of those
   * random directions are darker than what the face itself is looking at, so
   * the flakes come back as dirt rather than as sparkle. Keeping them close to
   * the surface normal means they see roughly what the face sees, and what
   * makes them stand out is that they are POLISHED where it is not.
   */
  return normalize(vec3(cos(a) * r, sin(a) * r, 3.2));
}

float flakeTap(vec3 p, vec3 V, vec3 bx, vec3 by, vec3 n, float lobe, float density, float blur) {
  float lit;
  vec3 tilt = flakeCell(p, lit);
  vec3 fn = normalize(bx * tilt.x + by * tilt.y + n * tilt.z);
  float aim = max(dot(V, fn), 0.0);
  return pow(aim, lobe) * mix(lit, density, blur);
}
`,
        w = `
    vec2 p = vDecalLocal.xy;
    // Positive going INTO the solid. The projector's +z is the outward surface
    // normal, because placement aims it down e.face.normal.
    float depth = max(-vDecalLocal.z, 0.0);
    // The surface's own normal, flattened into the sticker's plane: the
    // direction this patch of surface has turned. Zero on a face that has not
    // turned at all, where depth is zero too, so nothing is pushed anywhere.
    vec2 turn = vDecalN.xy;
    float tl = length(turn);
    vec2 dir = tl > 1e-4 ? turn / tl : vec2(0.0);
    gStickerUv = (p + dir * depth) / uDecalSize + 0.5;
`,
        b = `
    vec4 art = texture2D(map, gStickerUv);

    /*
     * RECOLOUR, as a duotone rather than a tint.
     *
     * Multiplying by a colour would only ever darken, so recolouring a red mark
     * to blue would give near black. Replacing the colour outright would flatten
     * the artwork's own structure, and these are not flat: the globe is white
     * lines on a disc, the badge is a ring inside a field.
     *
     * So the artwork's LUMINANCE is remapped through the chosen ink: black stays
     * black, the ink's own lightness lands exactly on the ink, and anything
     * lighter runs on up to white. Two tone artwork comes out cleanly recoloured
     * with its internal contrast intact, which is what a differently printed run
     * of the same sticker would look like.
     */
    if (uTint > 0.0) {
      const vec3 W = vec3(0.2126, 0.7152, 0.0722);
      float aL = dot(art.rgb, W);
      float tL = dot(uTintCol, W);
      vec3 recol = aL < tL
        ? uTintCol * (aL / max(tL, 0.02))
        : mix(uTintCol, vec3(1.0), (aL - tL) / max(1.0 - tL, 0.02));
      art.rgb = mix(art.rgb, recol, uTint);
    }

    float dist = texture2D(uCutD, gStickerUv).r * uCutMax;
    float aa = max(fwidth(dist), 1e-5);
    float total = uCutW + uCutB;
    float inW = uCutW > 0.0 ? 1.0 - smoothstep(uCutW - aa, uCutW + aa, dist) : 0.0;
    float inB = total > 0.0 ? 1.0 - smoothstep(total - aa, total + aa, dist) : 0.0;
    // THE GRADIENT ACROSS THE CUT. The field already knows how far out every
    // texel is, so shading it is just reading that as a ramp: 0 against the ink,
    // 1 at the outer edge of the white. That is the direction a real sticker
    // shades, the outer lip catching slightly less light than the face, and it
    // is what stops a wide white border reading as a flat plastic slab.
    float ramp = uCutW > 0.0 ? clamp(dist / uCutW, 0.0, 1.0) : 0.0;
    vec3 whiteCol = mix(uCutWCol, uCutWCol2, ramp * uCutGrad);
    vec3 cutCol = mix(uCutBCol, whiteCol, inW);
    float cutA = max(inB, art.a);
    cutCol = mix(cutCol, art.rgb, art.a);

    /*
     * THE LINER SIDE. A sticker is a sheet with no thickness, so drawn front
     * faces only it simply vanishes the moment you get behind it: the overhang
     * past an edge, and the underside of a peeled corner, both disappear.
     * Rendering both sides fixes that, but showing the ARTWORK through the back
     * would be wrong in the other direction. Print sits on one face; the other
     * is the stock, which is why peeling a corner shows plain white vinyl and
     * not a mirror image of the design.
     *
     * So the silhouette is kept, since that is the shape of the sheet whichever
     * way you look at it, and only the colour is replaced. Slightly darker than
     * the cut, because the back of a lifted flap faces away from the light.
     *
     * WHY FLIP_SIDED AND NOT gl_FrontFacing, which is the obvious answer and is
     * wrong here. A transparent DoubleSide material is not one draw in three. It
     * is two: the renderer sets side to BackSide, draws, sets it to FrontSide,
     * draws again. Each pass culls the half it is not drawing, so from the front
     * only the FrontSide pass survives and from behind only the BackSide pass
     * does. The BackSide pass is drawn with the winding reversed, which makes
     * gl_FrontFacing true in BOTH passes, and it also negates the normal in the
     * vertex shader, so dot(view, normal) is positive in both as well. Measured:
     * both of those report the front value from either side, while FLIP_SIDED
     * splits 25408 pixels each way. It is a define, so it costs nothing, and
     * three already keys the two programs apart without help from the cache key.
     *
     * The else branch is not dead. It is what runs if this material ever stops
     * being transparent, where three draws DoubleSide in a single pass and
     * gl_FrontFacing is then the correct and only signal.
     */
    bool linerSide;
    #ifdef FLIP_SIDED
      linerSide = true;
    #else
      linerSide = !gl_FrontFacing;
    #endif
    if (linerSide) cutCol = uCutWCol * 0.78;

    /*
     * ------------------------------------------------------------------
     * THE EDGE OF THE STOCK, so the sticker does not vanish seen side on.
     *
     * A sticker here is a single sheet with no thickness, so from the side
     * there is literally nothing to draw and it disappears. The obvious fix is
     * to extrude the mesh, and it cannot be done: the outline is not in the
     * geometry. It is cut per fragment from the distance field, because the cut
     * and keyline widths are sliders, so there is no mesh edge to pull on.
     *
     * What there IS, though, is spare geometry. The quad covers the artwork
     * plus the border headroom, so fragments beyond the outline already exist
     * and are simply being thrown away. Those are exactly the pixels a real
     * edge would occupy, because that is what a slab does: seen from an angle
     * its side wall projects to a band OUTSIDE the top face, and the band is
     * as wide as the thickness times the tangent of the viewing angle. Head on
     * that is zero and nothing shows, which is correct. Turn away and it opens
     * up, which is also correct, and it is why this needs no geometry at all.
     *
     * Shaded as the outermost stock colour, darkened: the cut edge of a vinyl
     * sheet faces sideways, so it catches far less of the light than the face
     * does, and it is the one part of a sticker that always reads darker than
     * everything around it.
     * ------------------------------------------------------------------
     */
    if (uThick > 0.0 && dist > total) {
      /* THE VARYING, not the local: this block runs at map_fragment, and three
         does not define its own working normal until normal_fragment_begin,
         several chunks further down.
         The interpolated varying is available here and is the same vector for
         the purpose of measuring how far the face has turned from the eye. */
      /* Floored at 0.3, which caps the band at about three times the
         thickness. The projected width of a side wall really is thickness
         times the tangent of the viewing angle, and that is unbounded: within
         a few degrees of edge on it runs away and the sticker turns into a
         black slab wider than itself. A real edge stops growing because the
         face it belongs to has shrunk to nothing by then; this is where that
         is put back. */
      float ndv = clamp(abs(dot(normalize(vViewPosition), normalize(vNormal))), 0.3, 1.0);
      float reach = uThick * sqrt(max(1.0 - ndv * ndv, 0.0)) / ndv;
      float over = dist - total;
      if (over > reach) discard;
      // Softened over the last fraction of a pixel only, so the edge stays an
      // edge rather than becoming a glow around the sticker.
      float e = 1.0 - smoothstep(reach - aa, reach, over);
      /* The CUT colour, shaded down, not the keyline. Print sits on top of the
         stock, so a blade through it exposes the stock itself: on white vinyl
         with a black keyline the cut edge is white, not black. Darkened because
         it faces sideways and catches little of the light. */
      cutCol = uCutWCol * 0.62;
      cutA = max(cutA, e);
    }
`,
        x = `
  {
    vec3 V = normalize(vViewPosition);
    float facing = clamp(dot(V, normal), 0.0, 1.0);
    float phase = (gStickerUv.x - gStickerUv.y) * uHoloScale + facing * 7.0;
    vec3 band = 0.5 + 0.5 * cos(6.2831853 * (fract(phase) + vec3(0.0, 0.3333, 0.6667)));
    float lum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    float w = uHolo * smoothstep(0.20, 0.85, lum);
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * band * 1.7, w);
    // A little emission, because foil appears to glow at the angle where it is
    // throwing light back at you and nothing else in the rig does that.
    totalEmissiveRadiance += band * w * 0.18 * (1.0 - facing);
  }
`,
        v = `
  transformed += aLoose * uSway;
`;
    async function k(e, t) {
        let r = await fetch(e).then(e => e.text()),
            o = new i().parse(r),
            n = [];
        for (let e of o.paths) n = n.concat(i.createShapes(e));
        let l = function(e, t, r) {
                if (r <= 0) return e;
                let o = e => {
                    let t = [],
                        a = null;
                    for (let o of e)(!a || Math.hypot(o.x - a.x, o.y - a.y) >= r) && (t.push(o), a = o);
                    return t.length > 2 && Math.hypot(t[0].x - t[t.length - 1].x, t[0].y - t[t.length - 1].y) < r && t.pop(), t.length > 2 ? t : e
                };
                return e.map(e => {
                    let r = new a.Shape(o(e.getPoints(t)));
                    return r.holes = e.holes.map(e => new a.Path(o(e.getPoints(t)))), r
                })
            }(n, t.curveSegments, 1.5 * t.bevelSize),
            s = new a.ExtrudeGeometry(l, {
                depth: t.depth,
                bevelEnabled: t.bevelSize > 0 || t.bevelThickness > 0,
                bevelSize: t.bevelSize,
                bevelThickness: t.bevelThickness,
                bevelSegments: t.bevelSegments,
                bevelOffset: 0,
                curveSegments: t.curveSegments
            });
        s.center();
        let u = function(e, t = Math.PI / 3) {
            let r, o = e.index ? e.toNonIndexed() : e,
                n = o.attributes.position,
                i = n.count;
            if (!0 === n.isBufferAttribute && 3 === n.itemSize && !1 === n.normalized) r = n.array;
            else {
                r = new Float64Array(3 * i);
                for (let e = 0; e < i; e++) r[3 * e + 0] = n.getX(e), r[3 * e + 1] = n.getY(e), r[3 * e + 2] = n.getZ(e)
            }
            let l = Math.cos(t),
                s = (1 + 1e-10) * 100,
                u = i / 3,
                h = new Float64Array(3 * u);
            for (let e = 0; e < u; e++) {
                let t = 9 * e,
                    a = r[t + 0],
                    o = r[t + 1],
                    n = r[t + 2],
                    i = r[t + 3],
                    l = r[t + 4],
                    s = r[t + 5],
                    u = r[t + 6],
                    c = r[t + 7],
                    f = r[t + 8],
                    d = u - i,
                    p = c - l,
                    m = f - s,
                    y = a - i,
                    g = o - l,
                    w = n - s,
                    b = p * w - m * g,
                    x = m * y - d * w,
                    v = d * g - p * y,
                    k = 1 / (Math.sqrt(b * b + x * x + v * v) || 1);
                h[3 * e + 0] = b * k, h[3 * e + 1] = x * k, h[3 * e + 2] = v * k
            }
            let c = new Int32Array(i),
                f = new Int32Array(3 * i),
                d = 1;
            for (; d < 2 * i;) d <<= 1;
            let p = d - 1,
                m = new Int32Array(d),
                y = 0;
            for (let e = 0; e < i; e++) {
                let t = 3 * e,
                    a = ~~(r[t + 0] * s),
                    o = ~~(r[t + 1] * s),
                    n = ~~(r[t + 2] * s),
                    i = (Math.imul(a, 0x466f45d) ^ Math.imul(o, 0x127409f) ^ Math.imul(n, 0x4f9ffb7)) & p;
                for (;;) {
                    let t = m[i];
                    if (0 === t) {
                        let t = 3 * y;
                        f[t + 0] = a, f[t + 1] = o, f[t + 2] = n, m[i] = y + 1, c[e] = y++;
                        break
                    }
                    let r = 3 * (t - 1);
                    if (f[r + 0] === a && f[r + 1] === o && f[r + 2] === n) {
                        c[e] = t - 1;
                        break
                    }
                    i = i + 1 & p
                }
            }
            let g = new Int32Array(y + 1);
            for (let e = 0; e < i; e++) g[c[e] + 1]++;
            for (let e = 0; e < y; e++) g[e + 1] += g[e];
            let w = new Int32Array(i),
                b = g.slice(0, y);
            for (let e = 0; e < u; e++) {
                let t = 3 * e;
                w[b[c[t + 0]]++] = e, w[b[c[t + 1]]++] = e, w[b[c[t + 2]]++] = e
            }
            let x = new Float32Array(3 * i);
            for (let e = 0; e < u; e++) {
                let t = 3 * e,
                    a = h[t + 0],
                    r = h[t + 1],
                    o = h[t + 2];
                for (let e = 0; e < 3; e++) {
                    let n = t + e,
                        i = c[n],
                        s = 0,
                        u = 0,
                        f = 0;
                    for (let e = g[i], t = g[i + 1]; e < t; e++) {
                        let t = 3 * w[e],
                            n = h[t + 0],
                            i = h[t + 1],
                            c = h[t + 2];
                        a * n + r * i + o * c > l && (s += n, u += i, f += c)
                    }
                    let d = 1 / (Math.sqrt(s * s + u * u + f * f) || 1);
                    x[3 * n + 0] = s * d, x[3 * n + 1] = u * d, x[3 * n + 2] = f * d
                }
            }
            return o.setAttribute("normal", new a.BufferAttribute(x, 3, !1)), o
        }(s, a.MathUtils.degToRad(35));
        u !== s && s.dispose();
        let h = u.attributes.position,
            c = u.attributes.normal,
            f = 1 / 0,
            d = -1 / 0;
        for (let e = 0; e < h.count; e++) {
            let t = h.getZ(e);
            t < f && (f = t), t > d && (d = t)
        }
        let p = Math.max(1e-6, (d - f) * 1e-4);
        for (let e = 0; e < h.count; e++) {
            let t = h.getZ(e);
            Math.abs(t - d) <= p ? c.setXYZ(e, 0, 0, 1) : Math.abs(t - f) <= p && c.setXYZ(e, 0, 0, -1)
        }
        return c.needsUpdate = !0, u.computeBoundingSphere(), u
    }
    let M = (t = globalThis.scheduler, "function" == typeof t ? .yield ? () => t.yield() : () => new Promise(e => {
        let t = new MessageChannel;
        t.port1.onmessage = () => {
            t.port1.close(), e()
        }, t.port2.postMessage(0)
    }));
    async function S(t) {
        let r = await
        function(t) {
            let a;
            if ("u" < typeof Worker || "u" < typeof OffscreenCanvas) return Promise.resolve(null);
            try {
                let t = Math.max(1, Math.min(4, (navigator.hardwareConcurrency || 4) - 1));
                a = Array.from({
                    length: t
                }, () => e.r(20243)(Worker, {
                    type: "module"
                }))
            } catch {
                return Promise.resolve(null)
            }
            return new Promise(e => {
                let r = Array(t.length).fill(null),
                    o = 0,
                    n = 0,
                    i = !1,
                    l = () => {
                        for (let e of a) e.terminate();
                        e(i ? null : r)
                    },
                    s = e => {
                        if (o >= t.length) return;
                        let a = o++;
                        e.postMessage({
                            id: a,
                            url: t[a].url
                        })
                    };
                for (let e of a) e.onerror = () => {
                    i = !0, n = t.length, l()
                }, e.onmessage = a => {
                    let o = a.data;
                    if (r[o.id] = o.ok && !o.empty ? o : null, ++n === t.length) return l();
                    s(e)
                };
                for (let e of a) s(e);
                t.length || l()
            })
        }(t);
        return r ? t.map((e, t) => {
            var o;
            return function(e, t) {
                let r = f.get(e);
                if (r) return r;
                if (!t) return d();
                let {
                    rgba: o,
                    bytes: n,
                    w: i,
                    h: l,
                    aspect: s
                } = t, u = new a.DataTexture(o, i, l, a.RGBAFormat, a.UnsignedByteType);
                u.colorSpace = a.SRGBColorSpace, u.wrapS = u.wrapT = a.ClampToEdgeWrapping, u.minFilter = a.LinearMipmapLinearFilter, u.magFilter = a.LinearFilter, u.generateMipmaps = !0, u.anisotropy = 8, u.needsUpdate = !0;
                let h = new a.DataTexture(n, i, l, a.RedFormat, a.UnsignedByteType);
                h.wrapS = h.wrapT = a.ClampToEdgeWrapping, h.minFilter = a.LinearMipmapLinearFilter, h.magFilter = a.LinearFilter, h.generateMipmaps = !0, h.needsUpdate = !0;
                let c = {
                    art: u,
                    sdf: h,
                    aspect: s,
                    dispose: () => {
                        u.dispose(), h.dispose()
                    }
                };
                return f.set(e, c), c
            }(e.key, (o = r[t]) && o.ok && !o.empty && o.rgba && o.bytes && o.w && o.h && o.aspect ? {
                rgba: o.rgba,
                bytes: o.bytes,
                w: o.w,
                h: o.h,
                aspect: o.aspect
            } : null)
        }) : (await Promise.all(t.map(e => {
            var t;
            return t = e.url, new Promise(e => {
                let a = new Image;
                a.crossOrigin = "anonymous", a.onload = () => e(a), a.onerror = () => e(null), a.src = t
            })
        }))).map((e, r) => e ? function(e, t) {
            let r = f.get(e);
            if (r) return r;
            let o = function(e) {
                let t = "naturalWidth" in e ? e.naturalWidth : e.width,
                    r = "naturalHeight" in e ? e.naturalHeight : e.height,
                    o = Math.min(1, 1400 / Math.max(t, r)),
                    n = Math.max(1, Math.round(t * o)),
                    i = Math.max(1, Math.round(r * o)),
                    l = document.createElement("canvas");
                l.width = n, l.height = i;
                let s = l.getContext("2d", {
                    willReadFrequently: !0
                });
                s.drawImage(e, 0, 0, n, i);
                let u = function(e, t, a) {
                    let r = t,
                        o = a,
                        n = -1,
                        i = -1,
                        l = 0,
                        s = e.data;
                    for (let e = 0; e < a; e++)
                        for (let a = 0; a < t; a++) {
                            let u = s[(e * t + a) * 4 + 3];
                            u > l && (l = u), u > 8 && (a < r && (r = a), a > n && (n = a), e < o && (o = e), e > i && (i = e))
                        }
                    return n < 0 ? null : {
                        x0: r,
                        y0: o,
                        x1: n,
                        y1: i,
                        maxAlpha: l
                    }
                }(s.getImageData(0, 0, n, i), n, i);
                if (!u) return d();
                let h = u.x1 - u.x0 + 1,
                    c = u.y1 - u.y0 + 1,
                    f = Math.min(h, c),
                    m = Math.max(2, Math.round(.16 * f)),
                    y = h + 2 * m,
                    g = c + 2 * m,
                    w = document.createElement("canvas");
                w.width = y, w.height = g;
                let b = w.getContext("2d", {
                    willReadFrequently: !0
                });
                b.drawImage(l, u.x0, u.y0, h, c, m, m, h, c);
                let x = b.getImageData(0, 0, y, g);
                ! function(e, t, a) {
                    let r = e.data,
                        o = new Uint8Array(t * a);
                    for (let e = 0; e < t * a; e++) o[e] = +(r[4 * e + 3] > 0);
                    for (let e = 0; e < 3; e++) {
                        let e = o.slice();
                        for (let n = 0; n < a; n++)
                            for (let i = 0; i < t; i++) {
                                let l = n * t + i;
                                if (o[l]) continue;
                                let s = 0,
                                    u = 0,
                                    h = 0,
                                    c = 0;
                                for (let e = -1; e <= 1; e++)
                                    for (let l = -1; l <= 1; l++) {
                                        let f = i + l,
                                            d = n + e;
                                        if (f < 0 || f >= t || d < 0 || d >= a) continue;
                                        let p = d * t + f;
                                        o[p] && (s += r[4 * p], u += r[4 * p + 1], h += r[4 * p + 2], c++)
                                    }
                                c && (r[4 * l] = s / c, r[4 * l + 1] = u / c, r[4 * l + 2] = h / c, e[l] = 1)
                            }
                        o.set(e)
                    }
                }(x, y, g);
                let v = function(e, t, a, r) {
                        let o = Math.max(8, .5 * r),
                            n = new Float64Array(t * a);
                        for (let r = 0; r < t * a; r++) n[r] = e.data[4 * r + 3] > o ? 0 : 1e20;
                        let i = Math.max(t, a),
                            l = new Float64Array(i),
                            s = new Float64Array(i),
                            u = new Int32Array(i),
                            h = new Float64Array(i + 1);
                        for (let e = 0; e < t; e++) {
                            for (let r = 0; r < a; r++) l[r] = n[r * t + e];
                            p(l, s, u, h, a);
                            for (let r = 0; r < a; r++) n[r * t + e] = s[r]
                        }
                        for (let e = 0; e < a; e++) {
                            for (let a = 0; a < t; a++) l[a] = n[e * t + a];
                            p(l, s, u, h, t);
                            for (let a = 0; a < t; a++) n[e * t + a] = s[a]
                        }
                        return n
                    }(x, y, g, u.maxAlpha),
                    k = new Uint8Array(y * g),
                    M = .16 * f;
                for (let e = 0; e < g; e++) {
                    let t = (g - 1 - e) * y,
                        a = e * y;
                    for (let e = 0; e < y; e++) k[a + e] = Math.min(255, Math.round(Math.sqrt(v[t + e]) / M * 255))
                }
                let S = new Uint8Array(y * g * 4);
                for (let e = 0; e < g; e++) S.set(x.data.subarray((g - 1 - e) * y * 4, (g - e) * y * 4), e * y * 4);
                let A = new a.DataTexture(S, y, g, a.RGBAFormat, a.UnsignedByteType);
                A.colorSpace = a.SRGBColorSpace, A.wrapS = A.wrapT = a.ClampToEdgeWrapping, A.minFilter = a.LinearMipmapLinearFilter, A.magFilter = a.LinearFilter, A.generateMipmaps = !0, A.anisotropy = 8, A.needsUpdate = !0;
                let T = new a.DataTexture(k, y, g, a.RedFormat, a.UnsignedByteType);
                return T.wrapS = T.wrapT = a.ClampToEdgeWrapping, T.minFilter = a.LinearMipmapLinearFilter, T.magFilter = a.LinearFilter, T.generateMipmaps = !0, T.needsUpdate = !0, {
                    art: A,
                    sdf: T,
                    aspect: y / g,
                    dispose: () => {
                        A.dispose(), T.dispose()
                    }
                }
            }(t);
            return f.set(e, o), o
        }(t[r].key, e) : null)
    }
    async function A(e, t, o) {
        var n, i, l;
        let s, u, c, f, d, p, A, T, C, V, F, E, P, B, D, L, N, z = new a.Scene;
        n = t.studio, (s = document.createElement("canvas")).width = 256, s.height = 64, (c = (u = s.getContext("2d")).createLinearGradient(0, 0, 256, 0)).addColorStop(0, "#0a0a0a"), c.addColorStop(.18, "#ffffff"), c.addColorStop(.82, "#ffffff"), c.addColorStop(1, "#0a0a0a"), u.fillStyle = c, u.fillRect(0, 0, 256, 64), (f = u.createLinearGradient(0, 0, 0, 64)).addColorStop(0, "rgba(0,0,0,1)"), f.addColorStop(.25, "rgba(0,0,0,0)"), f.addColorStop(.75, "rgba(0,0,0,0)"), f.addColorStop(1, "rgba(0,0,0,1)"), u.globalCompositeOperation = "multiply", u.fillStyle = f, u.fillRect(0, 0, 256, 64), (d = new a.CanvasTexture(s)).colorSpace = a.SRGBColorSpace, (p = document.createElement("canvas")).width = 8, p.height = 128, (T = (A = p.getContext("2d")).createLinearGradient(0, 0, 0, 128)).addColorStop(0, n.roomTop), T.addColorStop(1, n.ambient), A.fillStyle = T, A.fillRect(0, 0, 8, 128), (C = new a.CanvasTexture(p)).colorSpace = a.SRGBColorSpace, (V = new a.Scene).background = new a.Color(n.ambient), V.add(new a.Mesh(new a.SphereGeometry(30, 24, 16), new a.MeshBasicMaterial({
            map: C,
            side: a.BackSide,
            toneMapped: !1
        }))), F = (e, t, r, o, n, i) => {
            let l = new a.Mesh(new a.PlaneGeometry(1, 1), new a.MeshBasicMaterial({
                color: new a.Color(e).multiplyScalar(t),
                map: i ? ? null,
                toneMapped: !1,
                side: a.DoubleSide
            }));
            return l.position.set(...r), l.rotation.set(...o), l.scale.set(n[0], n[1], 1), l
        }, E = n.intensity, V.add(F(n.background, n.sweepIntensity * E, [0, -2.4, 0], [-Math.PI / 2, 0, 0], [16, 16])), V.add(F("#ffffff", 1.15 * n.keyIntensity * E, [0, 3.6, 3], [-.6, 0, 0], [14, 2.2], d)), V.add(F("#ffffff", 1.5 * n.fillIntensity * E, [0, .9, 5], [-.1, 0, 0], [14, 1.1], d)), V.add(F("#ffffff", .87 * n.keyIntensity * E, [0, -1.6, 3.6], [.5, 0, 0], [14, 1.8], d)), V.add(F("#ffffff", 1.4 * n.rimIntensity * E, [0, 2, -4.5], [.4, 0, 0], [12, 2.4], d)), P = new r.WebGLCubeRenderTarget(256, {
            type: a.HalfFloatType
        }), new a.CubeCamera(.1, 100, P).update(e, V), D = (B = new r.PMREMGenerator(e)).fromCubemap(P.texture).texture, P.dispose(), B.dispose(), d.dispose(), C.dispose(), V.traverse(e => {
            e instanceof a.Mesh && (e.geometry.dispose(), e.material.dispose())
        }), z.environment = D;
        let I = await k(o.svgUrl, t.geo),
            R = (i = t.mat, l = t.surface, L = new a.MeshPhysicalMaterial({
                color: i.color,
                metalness: i.metalness,
                roughness: i.roughness,
                clearcoat: i.clearcoat,
                envMapIntensity: i.envMapIntensity
            }), (N = function(e, t = 0) {
                if ("none" === e && t <= 0) return null;
                let a = "none" === e ? "" : y[e].height;
                return {
                    pars: `
      ${m}
      ${g}
      uniform float uSurfScale;
      uniform float uSurfStrength;
      uniform float uSurfRough;
      uniform float uSurfAngle;
      varying vec3 vSurfPos;

      float surfHeight(vec3 p, float rate) {
        float c = cos(uSurfAngle), s = sin(uSurfAngle);
        vec3 q = vec3(p.x * c - p.y * s, p.x * s + p.y * c, p.z) * uSurfScale;
        float h = 0.5;
        ${a}
        return h;
      }
    `,
                    body: ("none" === e ? "" : `
      {
        /*
         * HEIGHT IS EVALUATED IN OBJECT SPACE so the finish is welded to the
         * solid and does not swim while the mark is orbited. The BASIS for the
         * bump is built in VIEW space, because three's own 'normal' here is a
         * view-space vector, and a cross product between two different spaces
         * is meaningless. Mixing them gives a bump that looks almost right and
         * rotates wrongly.
         */
        float rate = length(fwidth(vSurfPos)) * uSurfScale;
        float hh = surfHeight(vSurfPos, rate);

        /*
         * SCALED TO A REAL DISPLACEMENT before any derivative is taken. The
         * field returns roughly 0 to 1 while positions are in units where the
         * whole mark is 1 tall, so handing it straight to a gradient asks for a
         * bump a mark-height deep. 0.012 at full strength is a fraction of a
         * millimetre on a 10cm object: a finish, not terrain.
         */
        float h = hh * uSurfStrength * 0.012;

        vec3 surfPos = -vViewPosition;
        vec3 sx = dFdx(surfPos);
        vec3 sy = dFdy(surfPos);
        vec3 vN = normal;
        vec3 r1 = cross(sy, vN);
        vec3 r2 = cross(vN, sx);
        float det = dot(sx, r1);
        vec3 grad = sign(det) * (dFdx(h) * r1 + dFdy(h) * r2);
        normal = normalize(abs(det) * vN - grad);

        // A real finish scatters unevenly, so the field drives roughness too.
        // Without this a brushed surface is bumpy but still mirror-smooth
        // between the grooves, which reads as plastic wrap rather than metal.
        // Same band-limited height, so it stops varying at the same distance
        // the bump does instead of flickering on its own.
        roughnessFactor = clamp(roughnessFactor + (hh - 0.5) * uSurfRough, 0.02, 1.0);
      }
`) + (t <= 0 ? "" : `
      /*
       * SPECKLE, after the finish so it sits ON the brushing rather than being
       * smoothed away by it.
       *
       * ----------------------------------------------------------------
       * THIS IS A GLINT, NOT A TILTED FACET, and the first version got that
       * wrong in a way worth writing down.
       *
       * The physical model is a flake lying at its own angle inside the coat,
       * so the obvious build is to perturb the normal and let the reflection do
       * the work. It does not read as sparkle here. Sparkle in life comes from
       * environments full of SMALL BRIGHT SOURCES, and this studio is broad
       * smooth bands with dark gaps between them. Perturbing a normal that was
       * pointed at a band is far more likely to swing it into a gap than onto
       * something brighter, so the flakes came back as DARK grit, worst exactly
       * where the surface grazes and there is least to catch.
       *
       * So the facet direction is kept, but only as the thing that decides WHEN
       * a flake fires, and the light is added directly. Each cell gets its own
       * facet, so at any camera angle a different scattering of them is aimed
       * near the eye and lights up; turn the mark and a different scattering
       * takes over. That is the twinkle, and it is why this is view dependent
       * rather than a static emissive dot. The normal is nudged only slightly,
       * enough to break the surface up, not enough to lose the reflection the
       * flake is supposed to be brightening.
       * ----------------------------------------------------------------
       */
      if (uFlake > 0.0) {
        vec3 fp = vSurfPos * (uFlakeScale * 180.0);
        float rate = length(fwidth(vSurfPos)) * uFlakeScale * 180.0;

        vec3 sp = -vViewPosition;
        vec3 bx = normalize(dFdx(sp));
        vec3 by = normalize(cross(normal, bx));
        vec3 V = normalize(vViewPosition);

        /*
         * PUSHED A LONG WAY OUT, which the four taps below make honest rather
         * than merely optimistic. Before them, blending had to begin at about
         * one cell per pixel because past that a single sample is a coin toss.
         * With the footprint sampled four times, distinct flakes hold to
         * several cells per pixel and only then settle into an even sheen.
         */
        float blur = smoothstep(3.0, 10.0, rate);
        // 0.55 is the same coefficient the threshold in flakeCell uses, so this
        // really is the fraction of cells that are flakes.
        float density = uFlake * 0.55;
        // Tight lobe at low tilt, broad at high, so the control reads as "hard
        // glitter" to "soft shimmer" rather than as a brightness. It widens with
        // distance so a pixel that used to catch one facet catches many.
        float lobe = mix(mix(48.0, 6.0, uFlakeSharp), 2.0, blur);
        // A widened lobe fires on far more pixels than a tight one, so it is
        // dimmed to match. Measured, not guessed: this is the value at which the
        // light added per pixel of the object is the same close up as far away.
        float norm = mix(1.0, 0.075, blur);

        /*
         * ------------------------------------------------------------------
         * FOUR TAPS ACROSS THE PIXEL, and this is what buys the range rather
         * than moving the threshold did.
         *
         * The hard limit on how far flake can stay distinct is not the flake,
         * it is the sampling. One sample per pixel means a pixel covering ten
         * cells reports whichever ONE it happened to land on, so past that
         * point the surface is a lottery: patchy, and crawling as the camera
         * moves, because the winner changes. Blurring it away was a way of
         * hiding that, not of solving it.
         *
         * Sampling the footprint four times instead cuts the noise in half and
         * lets a pixel see several flakes at once, which is what it physically
         * does. So the blend to a flat sheen can start far later and finish
         * far later, and the flakes stay distinct for it.
         *
         * The taps cost nothing when close up: at that range all four land
         * inside the same cell and agree, because they are spread by the
         * PIXEL FOOTPRINT rather than by a fixed distance.
         * ------------------------------------------------------------------
         */
        vec3 fw = fwidth(vSurfPos) * (uFlakeScale * 180.0);
        float glint = 0.25 * (
            flakeTap(fp + fw * vec3(-0.25, -0.25, 0.0), V, bx, by, normal, lobe, density, blur)
          + flakeTap(fp + fw * vec3( 0.25, -0.25, 0.0), V, bx, by, normal, lobe, density, blur)
          + flakeTap(fp + fw * vec3(-0.25,  0.25, 0.0), V, bx, by, normal, lobe, density, blur)
          + flakeTap(fp + fw * vec3( 0.25,  0.25, 0.0), V, bx, by, normal, lobe, density, blur));

        /*
         * ADDITIVE AND NOTHING ELSE. Two earlier versions also nudged the normal
         * and dropped the roughness at a flake, on the reasoning that a flake is
         * a polished plate. Both of those can make a flake DARKER: a sharper or
         * slightly turned sample of a room with dark gaps in it lands in a gap
         * about as often as on a band, and the result was fine grey grit rather
         * than sparkle. Adding light can only ever brighten, so what is left is
         * strictly shine.
         */
        totalEmissiveRadiance += vec3(1.0) * glint * norm * (0.6 + 2.4 * uFlake);
      }
`)
                }
            }(l.kind, l.flake)) && (L.onBeforeCompile = e => {
                e.uniforms.uSurfScale = {
                    value: l.scale
                }, e.uniforms.uSurfStrength = {
                    value: l.strength
                }, e.uniforms.uSurfRough = {
                    value: l.roughMix
                }, e.uniforms.uSurfAngle = {
                    value: l.angle
                }, e.uniforms.uFlake = {
                    value: l.flake
                }, e.uniforms.uFlakeScale = {
                    value: l.flakeScale
                }, e.uniforms.uFlakeSharp = {
                    value: l.flakeSharp
                }, e.vertexShader = e.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vSurfPos;").replace("#include <begin_vertex>", "#include <begin_vertex>\n  vSurfPos = position;"), e.fragmentShader = e.fragmentShader.replace("#include <common>", "#include <common>\n" + N.pars).replace("#include <normal_fragment_maps>", "#include <normal_fragment_maps>\n" + N.body)
            }, L.customProgramCacheKey = () => "mark-surface"), L),
            W = new a.Group;
        W.add(new a.Mesh(I, R));
        let O = t.stickers.filter(e => e.visible),
            U = await S(O.map(e => ({
                key: e.url,
                url: o.stickerUrl(e.url)
            }))),
            q = [];
        for (let e = 0; e < O.length; e++) {
            let t = U[e];
            if (t) {
                let r = function(e, t, r) {
                    let o, n, i, l, [s, u] = (n = t.aspect) >= 1 ? [e.scale, e.scale / n] : [e.scale * n, e.scale],
                        c = ((i = new a.Quaternion().setFromEuler(new a.Euler(e.rot[0], e.rot[1], e.rot[2]))).multiply(new a.Quaternion().setFromAxisAngle(new a.Vector3(0, 0, 1), e.spin)), [(l = new a.Euler().setFromQuaternion(i)).x, l.y, l.z]),
                        f = null;
                    if ("flat" === e.conform) o = function(e) {
                        let t = Math.max(2, e.segments ? ? 18),
                            r = t + 1,
                            o = e.width / 2,
                            n = e.height / 2,
                            i = e.width / t,
                            l = e.height / t,
                            s = new a.Euler(e.rot[0], e.rot[1], e.rot[2]),
                            u = new a.Matrix4().makeRotationFromEuler(s).setPosition(new a.Vector3(e.pos[0], e.pos[1], e.pos[2])),
                            h = u.clone().invert(),
                            c = new a.Matrix3().setFromMatrix4(h),
                            f = new a.Matrix3().setFromMatrix4(u),
                            d = new Float32Array(r * r).fill(NaN),
                            p = e.geom.attributes.position,
                            m = e.geom.attributes.normal,
                            y = e.geom.index,
                            g = y ? y.count / 3 : p.count / 3,
                            w = Math.hypot(o, n) + .9 * Math.max(e.width, e.height),
                            b = .9 * Math.max(e.width, e.height),
                            x = new a.Vector3,
                            v = new a.Vector3,
                            k = new a.Vector3,
                            M = new a.Vector3,
                            S = new a.Vector3,
                            A = new a.Vector3;
                        for (let a = 0; a < g; a++) {
                            let s = y ? y.getX(3 * a) : 3 * a,
                                u = y ? y.getX(3 * a + 1) : 3 * a + 1,
                                f = y ? y.getX(3 * a + 2) : 3 * a + 2;
                            x.fromBufferAttribute(p, s), v.fromBufferAttribute(p, u), k.fromBufferAttribute(p, f);
                            let g = (x.x + v.x + k.x) / 3,
                                T = (x.y + v.y + k.y) / 3,
                                C = (x.z + v.z + k.z) / 3;
                            if (Math.hypot(g - e.pos[0], T - e.pos[1], C - e.pos[2]) - Math.max(Math.hypot(x.x - g, x.y - T, x.z - C), Math.hypot(v.x - g, v.y - T, v.z - C), Math.hypot(k.x - g, k.y - T, k.z - C)) > w) continue;
                            x.applyMatrix4(h), v.applyMatrix4(h), k.applyMatrix4(h);
                            let V = v.x - x.x,
                                F = v.y - x.y,
                                E = k.x - x.x,
                                P = k.y - x.y,
                                B = V * P - E * F;
                            if (1e-12 > Math.abs(B)) continue;
                            let D = Math.min(x.x, v.x, k.x),
                                L = Math.max(x.x, v.x, k.x),
                                N = Math.min(x.y, v.y, k.y),
                                z = Math.max(x.y, v.y, k.y);
                            if (L < -o || D > o || z < -n || N > n) continue;
                            D = Math.max(D, -o), L = Math.min(L, o), N = Math.max(N, -n), z = Math.min(z, n);
                            let I = Math.max(0, Math.ceil((D + o) / i)),
                                R = Math.min(t, Math.floor((L + o) / i)),
                                W = Math.max(0, Math.ceil((N + n) / l)),
                                O = Math.min(t, Math.floor((z + n) / l));
                            if (!(I > R) && !(W > O)) {
                                M.fromBufferAttribute(m, s).applyMatrix3(c), S.fromBufferAttribute(m, u).applyMatrix3(c), A.fromBufferAttribute(m, f).applyMatrix3(c);
                                for (let e = W; e <= O; e++) {
                                    let t = -n + e * l;
                                    for (let a = I; a <= R; a++) {
                                        let n = -o + a * i - x.x,
                                            l = t - x.y,
                                            s = (n * P - E * l) / B,
                                            u = (V * l - n * F) / B,
                                            h = 1 - s - u;
                                        if (h < 0 || s < 0 || u < 0) continue;
                                        let c = h * x.z + s * v.z + u * k.z;
                                        if (c > b || c < -b) continue;
                                        let f = e * r + a;
                                        (Number.isNaN(d[f]) || !(d[f] >= c)) && (h * M.z + s * S.z + u * A.z <= 0 || (d[f] = c))
                                    }
                                }
                            }
                        }! function(e, t, r, o, n) {
                            let i = e.slice(),
                                l = new Float32Array(t * t).fill(NaN),
                                s = Math.max(a.MathUtils.degToRad(r) * o * o / Math.max(n, 1e-6), 1e-7),
                                u = Math.floor(t / 2),
                                h = u * t + u;
                            if (Number.isNaN(i[h])) {
                                let e = 1 / 0;
                                h = -1;
                                for (let a = 0; a < t; a++)
                                    for (let r = 0; r < t; r++) {
                                        let o = a * t + r;
                                        if (Number.isNaN(i[o])) continue;
                                        let n = (r - u) * (r - u) + (a - u) * (a - u);
                                        n < e && (e = n, h = o)
                                    }
                                if (h < 0) return
                            }
                            l[h] = i[h];
                            let c = [h],
                                f = [
                                    [1, 0],
                                    [-1, 0],
                                    [0, 1],
                                    [0, -1]
                                ];
                            for (let e = 0; e < c.length; e++) {
                                let a = c[e],
                                    r = a % t,
                                    o = (a - r) / t;
                                for (let [e, n] of f) {
                                    let u = r + e,
                                        h = o + n;
                                    if (u < 0 || u >= t || h < 0 || h >= t) continue;
                                    let f = h * t + u;
                                    if (!Number.isNaN(l[f]) || Number.isNaN(i[f])) continue;
                                    let d = r - e,
                                        p = o - n,
                                        m = p >= 0 && p < t && d >= 0 && d < t ? p * t + d : -1,
                                        y = m >= 0 && !Number.isNaN(l[m]) ? l[a] - l[m] : 0;
                                    Math.abs(i[f] - (l[a] + y)) > s || (l[f] = i[f], c.push(f))
                                }
                            }
                            e.set(l)
                        }(d, r, e.bendDeg, Math.max(i, l), Math.max(e.width, e.height));
                        let T = new Uint8Array(r * r),
                            C = 0;
                        for (let e = 0; e < r * r; e++) !Number.isNaN(d[e]) && (T[e] = 1, C++);
                        ! function(e, t, a, r) {
                            let o = new Uint8Array(t * t),
                                n = 0;
                            for (let a = 0; a < t * t; a++) o[a] = +!Number.isNaN(e[a]), n += o[a];
                            if (!n) return e.fill(0);
                            let i = new Float32Array(t * t),
                                l = new Float32Array(t * t);
                            for (let n = 0; n < t; n++)
                                for (let s = 0; s < t; s++) {
                                    let u = n * t + s;
                                    if (!o[u]) continue;
                                    let h = s > 0 && o[u - 1],
                                        c = s < t - 1 && o[u + 1],
                                        f = n > 0 && o[u - t],
                                        d = n < t - 1 && o[u + t];
                                    i[u] = h && c ? (e[u + 1] - e[u - 1]) / (2 * a) : c ? (e[u + 1] - e[u]) / a : h ? (e[u] - e[u - 1]) / a : 0, l[u] = f && d ? (e[u + t] - e[u - t]) / (2 * r) : d ? (e[u + t] - e[u]) / r : f ? (e[u] - e[u - t]) / r : 0
                                }
                            let s = Uint8Array.from(o),
                                u = [];
                            for (let e = 0; e < t * t; e++) o[e] && u.push(e);
                            let h = [
                                [1, 0],
                                [-1, 0],
                                [0, 1],
                                [0, -1]
                            ];
                            for (let o = 0; o < u.length; o++) {
                                let n = u[o],
                                    c = n % t,
                                    f = (n - c) / t;
                                for (let [o, d] of h) {
                                    let h = c + o,
                                        p = f + d;
                                    if (h < 0 || h >= t || p < 0 || p >= t) continue;
                                    let m = p * t + h;
                                    s[m] || (e[m] = e[n] + i[n] * o * a + l[n] * d * r, i[m] = i[n], l[m] = l[n], s[m] = 1, u.push(m))
                                }
                            }
                            for (let a = 0; a < 2; a++) {
                                let a = e.slice();
                                for (let r = 0; r < t; r++)
                                    for (let n = 0; n < t; n++) {
                                        let i = r * t + n;
                                        if (o[i]) continue;
                                        let l = 0,
                                            s = 0;
                                        for (let [e, o] of h) {
                                            let i = n + e,
                                                u = r + o;
                                            i < 0 || i >= t || u < 0 || u >= t || (l += a[u * t + i], s++)
                                        }
                                        s && (e[i] = (a[i] + l / s) * .5)
                                    }
                            }
                        }(d, r, i, l);
                        let V = function(e, t, a, r, o, n) {
                                let i = t - 1,
                                    l = new Float32Array(t * t),
                                    s = new Int32Array(t * t).fill(-1),
                                    u = [];
                                for (let e = 0; e < t * t; e++) n[e] && (s[e] = 0, u.push(e));
                                if (!u.length) {
                                    let e = Math.floor(t / 2) * t + Math.floor(t / 2);
                                    s[e] = 0, u.push(e)
                                }
                                let h = [
                                    [1, 0],
                                    [-1, 0],
                                    [0, 1],
                                    [0, -1]
                                ];
                                for (let e = 0; e < u.length; e++) {
                                    let a = u[e],
                                        r = a % t,
                                        o = (a - r) / t;
                                    for (let [e, n] of h) {
                                        let i = r + e,
                                            l = o + n;
                                        if (i < 0 || i >= t || l < 0 || l >= t) continue;
                                        let h = l * t + i;
                                        s[h] >= 0 || (s[h] = s[a] + 1, u.push(h))
                                    }
                                }
                                let c = Math.max(1, .4 * t),
                                    [f, d, p, m] = a,
                                    y = f > 0 || d > 0 || p > 0 || m > 0;
                                for (let a = 0; a < t; a++) {
                                    let n = a / i;
                                    for (let u = 0; u < t; u++) {
                                        let h = u / i,
                                            g = a * t + u,
                                            w = 0,
                                            b = 0;
                                        if (y)
                                            for (let [e, t, a] of [
                                                    [f, o, 1 - n],
                                                    [d, r, 1 - h],
                                                    [p, o, n],
                                                    [m, r, h]
                                                ]) {
                                                if (e <= 0) continue;
                                                let r = .15 + .45 * e;
                                                if (a >= r) continue;
                                                let o = 1 - a / r,
                                                    n = o * o;
                                                w += .5 * e * t * n, n > b && (b = n)
                                            }
                                        e[g] += w;
                                        let x = Math.min(1, s[g] / c);
                                        l[g] = Math.min(1, Math.max(b, x))
                                    }
                                }
                                return l
                            }(d, r, e.peel, e.width, e.height, T),
                            {
                                nx: F,
                                ny: E,
                                nz: P
                            } = function(e, t, a, r) {
                                let o = new Float32Array(t * t),
                                    n = new Float32Array(t * t),
                                    i = new Float32Array(t * t);
                                for (let l = 0; l < t; l++)
                                    for (let s = 0; s < t; s++) {
                                        let u = l * t + s,
                                            h = s > 0 ? u - 1 : u,
                                            c = s < t - 1 ? u + 1 : u,
                                            f = l > 0 ? u - t : u,
                                            d = l < t - 1 ? u + t : u,
                                            p = (e[c] - e[h]) / (a * (c === h ? 1 : s > 0 && s < t - 1 ? 2 : 1)),
                                            m = (e[d] - e[f]) / (r * (d === f ? 1 : l > 0 && l < t - 1 ? 2 : 1)),
                                            y = Math.hypot(-p, -m, 1) || 1;
                                        o[u] = -p / y, n[u] = -m / y, i[u] = 1 / y
                                    }
                                return {
                                    nx: o,
                                    ny: n,
                                    nz: i
                                }
                            }(d, r, i, l),
                            B = new Float32Array(r * r * 3),
                            D = new Float32Array(r * r * 3),
                            L = new Float32Array(r * r * 2),
                            N = new a.Vector3,
                            z = new a.Vector3;
                        for (let a = 0; a < r; a++)
                            for (let s = 0; s < r; s++) {
                                let h = a * r + s;
                                z.set(F[h], E[h], P[h]), 1e-8 > z.lengthSq() && z.set(0, 0, 1), z.normalize(), N.set(-o + s * i, -n + a * l, d[h]).addScaledVector(z, e.lift).applyMatrix4(u), z.applyMatrix3(f).normalize(), B[3 * h] = N.x, B[3 * h + 1] = N.y, B[3 * h + 2] = N.z, D[3 * h] = z.x, D[3 * h + 1] = z.y, D[3 * h + 2] = z.z, L[2 * h] = s / t, L[2 * h + 1] = a / t
                            }
                        let I = [];
                        for (let e = 0; e < t; e++)
                            for (let a = 0; a < t; a++) {
                                let t = e * r + a;
                                I.push(t, t + 1, t + r, t + 1, t + r + 1, t + r)
                            }
                        let R = 1 / 0,
                            W = -1 / 0;
                        for (let e = 0; e < r * r; e++) d[e] < R && (R = d[e]), d[e] > W && (W = d[e]);
                        let O = new a.BufferGeometry;
                        return O.userData.conform = {
                            stuck: C / (r * r),
                            bend: (W - R) / Math.max(e.width, e.height)
                        }, O.setAttribute("position", new a.BufferAttribute(B, 3)), O.setAttribute("normal", new a.BufferAttribute(D, 3)), O.setAttribute("uv", new a.BufferAttribute(L, 2)), O.setAttribute("aLoose", new a.BufferAttribute(V, 1)), O.setIndex(I), O
                    }({
                        geom: r,
                        pos: e.pos,
                        rot: c,
                        width: s,
                        height: u,
                        bendDeg: e.bend,
                        lift: e.lift,
                        peel: [e.peelTop, e.peelRight, e.peelBottom, e.peelLeft]
                    });
                    else {
                        let t = Math.max(1.2 * e.scale, .12),
                            n = new a.Vector3(s, u, t),
                            i = function(e, t, r) {
                                let o = e.attributes.position,
                                    n = e.attributes.normal,
                                    i = e.index,
                                    l = i ? i.count / 3 : o.count / 3,
                                    s = [],
                                    u = [],
                                    h = new a.Vector3,
                                    c = new a.Vector3,
                                    f = new a.Vector3;
                                for (let e = 0; e < l; e++) {
                                    let a = i ? i.getX(3 * e) : 3 * e,
                                        l = i ? i.getX(3 * e + 1) : 3 * e + 1,
                                        d = i ? i.getX(3 * e + 2) : 3 * e + 2;
                                    h.fromBufferAttribute(o, a), c.fromBufferAttribute(o, l), f.fromBufferAttribute(o, d);
                                    let p = (h.x + c.x + f.x) / 3,
                                        m = (h.y + c.y + f.y) / 3,
                                        y = (h.z + c.z + f.z) / 3;
                                    if (!(Math.hypot(p - t[0], m - t[1], y - t[2]) - Math.max(Math.hypot(h.x - p, h.y - m, h.z - y), Math.hypot(c.x - p, c.y - m, c.z - y), Math.hypot(f.x - p, f.y - m, f.z - y)) > r))
                                        for (let e of (s.push(h.x, h.y, h.z, c.x, c.y, c.z, f.x, f.y, f.z), [a, l, d])) u.push(n.getX(e), n.getY(e), n.getZ(e))
                                }
                                let d = new a.BufferGeometry;
                                return d.setAttribute("position", new a.Float32BufferAttribute(s, 3)), d.setAttribute("normal", new a.Float32BufferAttribute(u, 3)), d
                            }(r, e.pos, .5 * n.length());
                        o = new h(new a.Mesh(i), new a.Vector3(e.pos[0], e.pos[1], e.pos[2]), new a.Euler(c[0], c[1], c[2]), n), i.dispose(), f = {
                            inv: new a.Matrix4().makeRotationFromEuler(new a.Euler(c[0], c[1], c[2])).setPosition(new a.Vector3(e.pos[0], e.pos[1], e.pos[2])).clone().invert(),
                            size: new a.Vector2(s, u),
                            dir: new a.Vector3(0, 0, 1).applyEuler(new a.Euler(c[0], c[1], c[2])),
                            cut: Math.cos(a.MathUtils.degToRad(e.wrap))
                        }
                    }
                    let d = !!f,
                        p = e.holo > 0,
                        m = !d && e.sway > 0,
                        y = new a.MeshPhysicalMaterial({
                            map: t.art,
                            transparent: !0,
                            opacity: e.opacity,
                            roughness: e.roughness,
                            metalness: e.metalness,
                            clearcoat: e.clearcoat,
                            clearcoatRoughness: .08,
                            side: a.DoubleSide,
                            polygonOffset: !0,
                            polygonOffsetFactor: -1.5,
                            polygonOffsetUnits: -1.5,
                            depthTest: !0,
                            depthWrite: !1,
                            toneMapped: !0
                        }),
                        g = null;
                    y.onBeforeCompile = r => {
                        m && (r.uniforms.uSway = {
                            value: new a.Vector3
                        }, r.vertexShader = r.vertexShader.replace("#include <common>", "#include <common>\nattribute float aLoose;\nuniform vec3 uSway;").replace("#include <begin_vertex>", `#include <begin_vertex>${v}`)), d && (r.uniforms.uDecalInv = {
                            value: new a.Matrix4
                        }, r.uniforms.uDecalSize = {
                            value: new a.Vector2(1, 1)
                        }, r.uniforms.uDecalDir = {
                            value: new a.Vector3(0, 0, 1)
                        }, r.uniforms.uDecalCut = {
                            value: -.17
                        }, r.uniforms.uDecalLift = {
                            value: 0
                        }, r.vertexShader = r.vertexShader.replace("#include <common>", `#include <common>
        varying vec3 vObjN;
        varying vec3 vDecalN;
        varying vec3 vDecalLocal;
        uniform mat4 uDecalInv;
        uniform float uDecalLift;`).replace("#include <beginnormal_vertex>", `#include <beginnormal_vertex>
        vObjN = objectNormal;
        vDecalN = mat3(uDecalInv) * objectNormal;`).replace("#include <begin_vertex>", `#include <begin_vertex>
        transformed += objectNormal * uDecalLift;
        vDecalLocal = (uDecalInv * vec4(transformed, 1.0)).xyz;`)), p && (r.uniforms.uHolo = {
                            value: 0
                        }, r.uniforms.uHoloScale = {
                            value: 16
                        }), r.uniforms.uCutD = {
                            value: null
                        }, r.uniforms.uCutMax = {
                            value: .16
                        }, r.uniforms.uCutW = {
                            value: 0
                        }, r.uniforms.uCutB = {
                            value: 0
                        }, r.uniforms.uCutWCol = {
                            value: new a.Color("#ffffff")
                        }, r.uniforms.uCutWCol2 = {
                            value: new a.Color("#e6e6ea")
                        }, r.uniforms.uCutBCol = {
                            value: new a.Color("#101012")
                        }, r.uniforms.uCutGrad = {
                            value: 0
                        }, r.uniforms.uTint = {
                            value: 0
                        }, r.uniforms.uTintCol = {
                            value: new a.Color("#8b0f1d")
                        }, r.uniforms.uThick = {
                            value: 0
                        }, r.fragmentShader = r.fragmentShader.replace("#include <common>", `#include <common>
      vec2 gStickerUv;
      uniform sampler2D uCutD;
      uniform float uCutMax;
      uniform float uCutW;
      uniform float uCutB;
      uniform vec3 uCutWCol;
      uniform vec3 uCutWCol2;
      uniform vec3 uCutBCol;
      uniform float uCutGrad;
      uniform float uTint;
      uniform vec3 uTintCol;
      uniform float uThick;
      ${d?`varying vec3 vObjN;
        varying vec3 vDecalN;
        varying vec3 vDecalLocal;
        uniform vec3 uDecalDir;
        uniform float uDecalCut;
        uniform vec2 uDecalSize;`:""}
      ${p?"uniform float uHolo;\n uniform float uHoloScale;":""}`).replace("#include <map_fragment>", `
      {
        ${d?w:"gStickerUv = vMapUv;"}
        ${b}
        ${d?`
        float facing = dot(normalize(vObjN), normalize(uDecalDir));
        if (facing < uDecalCut) discard;
        if (gStickerUv.x < 0.0 || gStickerUv.x > 1.0 || gStickerUv.y < 0.0 || gStickerUv.y > 1.0) discard;`:""}
        if (cutA < 0.004) discard;
        diffuseColor *= vec4(cutCol, cutA);
      }`), p && (r.fragmentShader = r.fragmentShader.replace("#include <normal_fragment_maps>", `#include <normal_fragment_maps>
${x}`)), m && (g = r.uniforms.uSway), r.uniforms.uCutD.value = t.sdf, r.uniforms.uCutMax.value = .16, r.uniforms.uCutW.value = e.cutWidth, r.uniforms.uCutB.value = e.keylineWidth, r.uniforms.uCutWCol.value.set(e.cutColor), r.uniforms.uCutWCol2.value.set(e.cutColorEnd), r.uniforms.uCutBCol.value.set(e.keylineColor), r.uniforms.uCutGrad.value = +!!e.cutGradient, r.uniforms.uTint.value = e.tint, r.uniforms.uTintCol.value.set(e.tintColor), r.uniforms.uThick.value = e.thickness, p && (r.uniforms.uHolo.value = e.holo, r.uniforms.uHoloScale.value = e.holoScale), f && (r.uniforms.uDecalInv.value.copy(f.inv), r.uniforms.uDecalSize.value.copy(f.size), r.uniforms.uDecalDir.value.copy(f.dir), r.uniforms.uDecalCut.value = f.cut, r.uniforms.uDecalLift.value = e.lift)
                    }, y.customProgramCacheKey = () => `sticker:${d}:${p}:${m}`;
                    let k = new a.Mesh(o, y);
                    return k.renderOrder = 10, {
                        mesh: k,
                        sway: m ? {
                            get uniform() {
                                return g
                            },
                            pos: new a.Vector3(e.pos[0], e.pos[1], e.pos[2]),
                            amount: e.sway,
                            scale: e.scale,
                            springPos: new a.Vector3,
                            springVel: new a.Vector3
                        } : null,
                        dispose: () => {
                            o.dispose(), y.dispose(), t.dispose()
                        }
                    }
                }(O[e], t, I);
                r && q.push(r)
            }
            e < O.length - 1 && await M()
        }
        for (let e of q) W.add(e.mesh);
        z.add(W);
        let G = q.map(e => e.sway).filter(Boolean),
            H = new a.PerspectiveCamera(30, 1, .1, 100);
        H.position.set(0, 0, 3.2), H.lookAt(0, 0, 0);
        let j = new a.Vector3,
            _ = new a.Vector3,
            X = new a.Vector3,
            Y = new a.Vector3,
            $ = new a.Vector3,
            K = new a.Quaternion,
            Z = !1;
        return {
            scene: z,
            group: W,
            camera: H,
            fitCamera: (e, t = .82) => {
                let r = W.scale.clone();
                W.scale.set(1, 1, 1), W.updateWorldMatrix(!1, !0);
                let o = new a.Box3().setFromObject(W);
                W.scale.copy(r), W.updateWorldMatrix(!1, !0);
                let n = o.getSize(new a.Vector3),
                    i = H.fov * Math.PI / 180,
                    l = n.y / 2 / Math.tan(i / 2),
                    s = n.x / 2 / Math.tan(i / 2) / Math.max(e, 1e-4);
                H.position.z = Math.max(l, s) / t + n.z / 2, H.updateProjectionMatrix()
            },
            updateSway: e => {
                if (!G.length) return !1;
                let t = Math.min(Math.max(e, 1e-4), 1 / 30);
                K.copy(W.quaternion).invert(), j.copy(H.position).applyQuaternion(K).normalize(), Z || (_.copy(j), Z = !0), X.crossVectors(_, j).divideScalar(t), _.copy(j);
                let a = !1;
                for (let e of G) {
                    if (!e.uniform) continue;
                    Y.crossVectors(X, e.pos).multiplyScalar(.22 * e.amount);
                    let r = .9 * Math.max(e.scale, .05);
                    Y.lengthSq() > r * r && Y.setLength(r), $.copy(Y).sub(e.springPos).multiplyScalar(260).addScaledVector(e.springVel, -11), e.springVel.addScaledVector($, t), e.springPos.addScaledVector(e.springVel, t), e.uniform.value.copy(e.springPos), !a && (e.springVel.lengthSq() > 1e-4 * 1e-4 || Y.distanceToSquared(e.springPos) > 1e-5 * 1e-5) && (a = !0)
                }
                return a
            },
            dispose: () => {
                for (let e of q) e.dispose();
                I.dispose(), R.dispose(), z.environment ? .dispose()
            }
        }
    }
    e.s(["buildScene", 0, A, "loadMarkGeometry", 0, k], 54851)
}]);