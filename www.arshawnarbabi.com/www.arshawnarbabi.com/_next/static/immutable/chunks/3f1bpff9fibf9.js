(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 28363, e => {
    "use strict";
    e.i(47167);
    var t = e.i(43476),
        r = e.i(71645),
        o = e.i(63928),
        n = e.i(8339);
    e.s(["default", 0, function({
        text: e,
        className: i,
        style: l,
        children: a
    }) {
        let s = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            let e = s.current;
            if (e) return e.setAttribute("data-scroll-driven", ""), () => e.removeAttribute("data-scroll-driven")
        }, []), (0, r.useEffect)(() => {
            let e = s.current;
            if (!e || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
            let t = Array.from(e.querySelectorAll("[data-ch]"));
            if (!t.length) return;
            let r = [],
                o = () => {
                    let o = window.scrollX,
                        n = window.scrollY;
                    r = t.map(e => {
                        let t = e.getBoundingClientRect();
                        return {
                            x: t.left + o,
                            y: t.top + n,
                            w: t.width,
                            h: t.height
                        }
                    });
                    let i = parseFloat(getComputedStyle(t[0]).fontSize) || 0,
                        l = e.querySelector("feMorphology");
                    l && i > 0 && l.setAttribute("radius", (.007 * i).toFixed(2))
                },
                n = 0,
                i = 0,
                l = 0,
                a = 0,
                d = !1,
                u = 0,
                c = 0,
                _ = !0,
                m = () => {
                    let o = +!!d;
                    u += (o - u) * .18, l += (n - l) * .1, a += (i - a) * .1;
                    let s = .001 > Math.abs(o - u),
                        f = .4 > Math.hypot(n - l, i - a);
                    s && (u = o), f && (l = n, a = i), _ = s && f, e.style.setProperty("--on", u.toFixed(3));
                    for (let e = 0; e < t.length; e += 1) {
                        let o = r[e];
                        o && (t[e].style.setProperty("--mx", `${(l-o.x).toFixed(1)}px`), t[e].style.setProperty("--my", `${(a-o.y).toFixed(1)}px`))
                    }
                    c = 0, _ || (c = requestAnimationFrame(m))
                },
                f = () => {
                    _ = !1, c || (c = requestAnimationFrame(m))
                },
                p = e => {
                    n = e.clientX + window.scrollX, i = e.clientY + window.scrollY;
                    let o = ((e, o) => {
                        if (!r.length) return !1;
                        let n = getComputedStyle(t[0]),
                            i = parseFloat(n.getPropertyValue("--closer-hover-reach-x")) || 0,
                            l = parseFloat(n.getPropertyValue("--closer-hover-reach-y")) || 0,
                            a = 1 / 0,
                            s = -1 / 0,
                            d = 1 / 0,
                            u = -1 / 0;
                        for (let e of r) a = Math.min(a, e.x), s = Math.max(s, e.x + e.w), d = Math.min(d, e.y), u = Math.max(u, e.y + e.h);
                        return e >= a - i && e <= s + i && o >= d - l && o <= u + l
                    })(n, i);
                    u <= .001 && (l = n, a = i), d = o, f()
                },
                h = () => {
                    d = !1, f()
                };
            o();
            let g = new ResizeObserver(o);
            return g.observe(e), window.addEventListener("pointermove", p, {
                passive: !0
            }), document.addEventListener("pointerleave", h), () => {
                for (let r of (g.disconnect(), window.removeEventListener("pointermove", p), document.removeEventListener("pointerleave", h), cancelAnimationFrame(c), e.style.removeProperty("--on"), t)) r.style.removeProperty("--mx"), r.style.removeProperty("--my")
            }
        }, [e]);
        let d = 0,
            u = Array.from(e).filter(e => !/^\s$/.test(e)).length;
        return (0, t.jsxs)("p", {
            ref: s,
            className: i,
            "aria-hidden": "true",
            style: { ...l,
                "--closer-rise-last": Math.max(0, u - 1)
            },
            "data-closer-name": "",
            children: [(0, t.jsx)(n.default, {
                selector: "[data-closer-name]",
                span: "viewport"
            }), (0, t.jsx)("svg", {
                "aria-hidden": "true",
                focusable: "false",
                width: "0",
                height: "0",
                style: {
                    position: "absolute",
                    inlineSize: 0,
                    blockSize: 0
                },
                children: (0, t.jsxs)("filter", {
                    id: "closer-name-outline",
                    colorInterpolationFilters: "sRGB",
                    x: "-50%",
                    y: "-50%",
                    width: "200%",
                    height: "200%",
                    children: [(0, t.jsx)("feMorphology", { in: "SourceAlpha",
                        operator: "erode",
                        radius: "2.5",
                        result: "thin"
                    }), (0, t.jsx)("feComposite", { in: "SourceAlpha",
                        in2: "thin",
                        operator: "out",
                        result: "ring"
                    }), (0, t.jsx)("feComposite", { in: "SourceGraphic",
                        in2: "ring",
                        operator: "in"
                    })]
                })
            }), Array.from(e).map((e, r) => /^\s$/.test(e) ? (0, t.jsx)("span", {
                children: " "
            }, r) : (0, t.jsx)("span", {
                className: o.default.letter,
                "data-anim-hidden": "",
                "data-ch": e,
                style: {
                    "--i": d++
                },
                children: e
            }, r)), a]
        })
    }])
}, 51707, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["default", 0, function() {
        return (0, t.useEffect)(() => {
            let e = document.getElementById("contact-close"),
                t = e ? .querySelector("[data-closer-backdrop]");
            if (!e || !t || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let r = 0,
                o = 0,
                n = 0,
                i = 0;
            t.style.setProperty("--rise", "0");
            let l = e => {
                    let a = i ? Math.min(64, e - i) : 16;
                    if (i = e, r += (o - r) * (1 - Math.exp(-a / 260)), .001 > Math.abs(o - r) && (r = o), t.style.setProperty("--rise", r.toFixed(4)), r === o) {
                        t.style.willChange = "", n = 0, i = 0;
                        return
                    }
                    n = requestAnimationFrame(l)
                },
                a = document.createElement("div");
            a.setAttribute("aria-hidden", "true"), a.style.cssText = "position:absolute;left:0;right:0;bottom:0;height:45%;pointer-events:none;visibility:hidden", e.appendChild(a);
            let s = new IntersectionObserver(([e]) => {
                e.isIntersecting && (o = 1, n || (t.style.willChange = "transform", n = requestAnimationFrame(l)))
            }, {
                rootMargin: "0px 0px -25% 0px",
                threshold: 0
            });
            return s.observe(a), () => {
                s.disconnect(), a.remove(), n && cancelAnimationFrame(n), t.style.removeProperty("--rise"), t.style.willChange = ""
            }
        }, []), null
    }])
}, 63928, e => {
    e.v({
        brand: "ContactClose-module__vbddmq__brand",
        colophon: "ContactClose-module__vbddmq__colophon",
        colophonLink: "ContactClose-module__vbddmq__colophonLink",
        colophonNote: "ContactClose-module__vbddmq__colophonNote",
        copy: "ContactClose-module__vbddmq__copy",
        copyright: "ContactClose-module__vbddmq__copyright",
        cta: "ContactClose-module__vbddmq__cta",
        head: "ContactClose-module__vbddmq__head",
        heading: "ContactClose-module__vbddmq__heading",
        inner: "ContactClose-module__vbddmq__inner",
        isBleed: "ContactClose-module__vbddmq__isBleed",
        letter: "ContactClose-module__vbddmq__letter",
        mark: "ContactClose-module__vbddmq__mark",
        name: "ContactClose-module__vbddmq__name",
        nameBlurBand: "ContactClose-module__vbddmq__nameBlurBand",
        pitch: "ContactClose-module__vbddmq__pitch",
        section: "ContactClose-module__vbddmq__section",
        social: "ContactClose-module__vbddmq__social",
        socialLabel: "ContactClose-module__vbddmq__socialLabel",
        socials: "ContactClose-module__vbddmq__socials"
    })
}, 32955, e => {
    e.v({
        actions: "Hero-module__Z8hQ_W__actions",
        bg: "Hero-module__Z8hQ_W__bg",
        bgShader: "Hero-module__Z8hQ_W__bgShader",
        bgSource: "Hero-module__Z8hQ_W__bgSource",
        body: "Hero-module__Z8hQ_W__body",
        bottomDark: "Hero-module__Z8hQ_W__bottomDark",
        bottomDarkIn: "Hero-module__Z8hQ_W__bottomDarkIn",
        defs: "Hero-module__Z8hQ_W__defs",
        fluidCanvas: "Hero-module__Z8hQ_W__fluidCanvas",
        hero: "Hero-module__Z8hQ_W__hero",
        heroScrimIn: "Hero-module__Z8hQ_W__heroScrimIn",
        img: "Hero-module__Z8hQ_W__img",
        imgWrap: "Hero-module__Z8hQ_W__imgWrap",
        inner: "Hero-module__Z8hQ_W__inner",
        layer: "Hero-module__Z8hQ_W__layer",
        maskSvg: "Hero-module__Z8hQ_W__maskSvg",
        measure: "Hero-module__Z8hQ_W__measure",
        meta: "Hero-module__Z8hQ_W__meta",
        metaItem: "Hero-module__Z8hQ_W__metaItem",
        metaLabel: "Hero-module__Z8hQ_W__metaLabel",
        metaValue: "Hero-module__Z8hQ_W__metaValue",
        panelLines: "Hero-module__Z8hQ_W__panelLines",
        pitch: "Hero-module__Z8hQ_W__pitch",
        primary: "Hero-module__Z8hQ_W__primary",
        rippleFade: "Hero-module__Z8hQ_W__rippleFade",
        rippleWrap: "Hero-module__Z8hQ_W__rippleWrap",
        role: "Hero-module__Z8hQ_W__role",
        roleIcon: "Hero-module__Z8hQ_W__roleIcon",
        secondary: "Hero-module__Z8hQ_W__secondary",
        shaderHost: "Hero-module__Z8hQ_W__shaderHost",
        shaderTitle: "Hero-module__Z8hQ_W__shaderTitle",
        softFocus: "Hero-module__Z8hQ_W__softFocus",
        softFocusLayer: "Hero-module__Z8hQ_W__softFocusLayer",
        sub: "Hero-module__Z8hQ_W__sub",
        title55: "Hero-module__Z8hQ_W__title55",
        titleBase: "Hero-module__Z8hQ_W__titleBase",
        titleSr: "Hero-module__Z8hQ_W__titleSr",
        titleWrap: "Hero-module__Z8hQ_W__titleWrap",
        titleWrap3d: "Hero-module__Z8hQ_W__titleWrap3d",
        topFade: "Hero-module__Z8hQ_W__topFade",
        topFadeLayer: "Hero-module__Z8hQ_W__topFadeLayer",
        veil: "Hero-module__Z8hQ_W__veil"
    })
}, 8339, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["default", 0, function({
        selector: e = "[data-scroll-highlight]",
        span: r = "element",
        travel: o,
        startAt: n = 1,
        endAt: i = .68
    }) {
        return (0, t.useEffect)(() => {
            let t = document.querySelector(e);
            if (!t) return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || o && 0 === parseFloat(getComputedStyle(t).getPropertyValue(o))) return void t.style.setProperty("--p", "1");
            let l = 0,
                a = !1,
                s = "",
                d = "",
                u = 0,
                c = 10,
                _ = () => {
                    a = !1;
                    let e = t.getBoundingClientRect(),
                        o = window.innerHeight || 1,
                        l = "viewport" === r ? o : (n - i) * o + e.height,
                        _ = ("viewport" === r ? o : n * o) - e.top,
                        m = Math.min(1, Math.max(0, _ / (l || 1))).toFixed(3);
                    m !== s && (s = m, t.style.setProperty("--p", m)), 0 === u && c > 0 && (c--, u = parseFloat(getComputedStyle(t).getPropertyValue("--closer-rise-need")) || 0);
                    let f = (document.scrollingElement || document.documentElement).scrollHeight - (e.top + window.scrollY);
                    if (u > 0 && f > 0 && f < l * u) {
                        let e = Math.min(1, Math.max(0, _ / f)).toFixed(3);
                        e !== d && (d = e, t.style.setProperty("--p-reach", e))
                    } else "" !== d && (d = "", t.style.removeProperty("--p-reach"))
                },
                m = () => {
                    a || (a = !0, l = requestAnimationFrame(_))
                },
                f = new IntersectionObserver(([e]) => {
                    e.isIntersecting ? (window.addEventListener("scroll", m, {
                        passive: !0
                    }), _()) : window.removeEventListener("scroll", m)
                }, {
                    rootMargin: "50% 0px"
                });
            return f.observe(t), window.addEventListener("resize", m, {
                passive: !0
            }), _(), () => {
                f.disconnect(), cancelAnimationFrame(l), window.removeEventListener("scroll", m), window.removeEventListener("resize", m)
            }
        }, [e, r, o, n, i]), null
    }])
}, 45396, e => {
    "use strict";
    e.s(["FLUID_DEFAULT", 0, {
        enabled: !0,
        intensity: .24,
        scale: .288,
        viscosity: .5,
        decay: .93,
        distortionStrength: .073,
        aberration: .01,
        rippleBlur: 8,
        lightIntensity: 0,
        specularPower: 8
    }, "FOCUS_OFF", 0, {
        enabled: !1,
        title: null,
        pitch: null,
        meta: null,
        softLayers: 4,
        fadeHeight: 0,
        fadeBlur: 0,
        fadeLayers: 5,
        bottomStart: 0,
        bottomBlur: 0,
        bottomLayers: 5
    }])
}, 11032, e => {
    "use strict";
    e.s(["HERO_PLATE", 0, "/hero/aura-expanded-vblur.webp", "HERO_PLATE_ASPECT", 0, 3840 / 2152, "HERO_PLATE_FALLBACK", 0, "/hero/aura-expanded-vblur.jpg"])
}, 63090, e => {
    "use strict";
    let t = {
            nx: 0,
            ny: 0,
            lastMove: 0,
            seen: !1
        },
        r = 0,
        o = new Set,
        n = e => e(),
        i = 1,
        l = 1,
        a = () => {
            i = window.innerWidth || 1, l = window.innerHeight || 1
        };

    function s(e) {
        t.nx = e.clientX / i * 2 - 1, t.ny = e.clientY / l * 2 - 1, t.lastMove = performance.now(), t.seen = !0, o.size && o.forEach(n)
    }
    let d = null;
    e.s(["onPointerMove", 0, function(e) {
        return o.add(e), () => {
            o.delete(e)
        }
    }, "pointerActivity", 0, function(e, r, o) {
        if (!t.seen) return 0;
        let n = e - t.lastMove;
        if (n <= r) return 1;
        if (o <= 0) return 0;
        let i = Math.min(1, (n - r) / o);
        return 1 - i * i * (3 - 2 * i)
    }, "prefersReducedMotion", 0, function() {
        return null === d && (d = window.matchMedia("(prefers-reduced-motion: reduce)").matches), d
    }, "readPointer", 0, function() {
        return t
    }, "subscribePointer", 0, function() {
        0 === r && (a(), window.addEventListener("resize", a), window.addEventListener("pointermove", s, {
            passive: !0
        })), r += 1;
        let e = !1;
        return () => {
            e || (e = !0, 0 == (r -= 1) && (window.removeEventListener("pointermove", s), window.removeEventListener("resize", a)))
        }
    }])
}, 79318, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(91338);
    e.s(["default", 0, function() {
        let [e, o] = (0, t.useState)(null);
        return (0, t.useEffect)(() => {
            let e = window.matchMedia(r.FINE_POINTER_QUERY),
                t = () => o((0, r.isFinePointer)());
            return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t)
        }, []), e
    }])
}, 5500, (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return w
        }
    });
    let o = e.r(55682),
        n = e.r(90809),
        i = e.r(43476),
        l = n._(e.r(71645)),
        a = o._(e.r(74080)),
        s = o._(e.r(25633)),
        d = e.r(8927),
        u = e.r(87690),
        c = e.r(18556),
        _ = e.r(65856),
        m = o._(e.r(1948)),
        f = e.r(18581),
        p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75, 82, 90, 95],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function h(e, t, r, o, n, i, l) {
        let a = e ? .src;
        e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let o = !1,
                        n = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => o,
                        isPropagationStopped: () => n,
                        persist: () => {},
                        preventDefault: () => {
                            o = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            n = !0, t.stopPropagation()
                        }
                    })
                }
                o ? .current && o.current(e)
            }
        }))
    }

    function g(e) {
        return l.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = "u" < typeof window ? l.useEffect : l.useLayoutEffect,
        v = (0, l.forwardRef)(({
            src: e,
            srcSet: t,
            sizes: r,
            height: o,
            width: n,
            decoding: a,
            className: s,
            style: d,
            fetchPriority: u,
            placeholder: c,
            loading: _,
            unoptimized: m,
            fill: p,
            onLoadRef: v,
            onLoadingCompleteRef: b,
            setBlurComplete: w,
            setShowAltText: C,
            sizesInput: x,
            onLoad: E,
            onError: P,
            ...S
        }, j) => {
            let O = (0, l.useRef)(!1),
                M = (0, l.useRef)(null);
            y(() => {
                let {
                    current: e
                } = O, {
                    current: t
                } = M;
                e || null === t || (P && (t.src = t.src), t.complete && h(t, c, v, b, w, m, x), O.current = !0)
            }, [e, c, v, b, P, m, x]);
            let W = (0, f.useMergedRef)(j, M);
            return (0, i.jsx)("img", { ...S,
                ...g(u),
                loading: _,
                width: n,
                height: o,
                decoding: a,
                "data-nimg": p ? "fill" : "1",
                className: s,
                style: d,
                sizes: r,
                srcSet: t,
                src: e,
                ref: W,
                onLoad: e => {
                    h(e.currentTarget, c, v, b, w, m, x)
                },
                onError: e => {
                    C(!0), "empty" !== c && w(!0), P && P(e)
                }
            })
        });

    function b({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...g(t.fetchPriority)
        };
        return e && a.default.preload ? (a.default.preload(t.src, r), null) : (0, i.jsx)(s.default, {
            children: (0, i.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let w = (0, l.forwardRef)((e, t) => {
        let r = (0, l.useContext)(_.RouterContext),
            o = (0, l.useContext)(c.ImageConfigContext),
            n = (0, l.useMemo)(() => {
                let e = p || o || u.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    n = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: n,
                    localPatterns: "u" < typeof window ? o ? .localPatterns : e.localPatterns
                }
            }, [o]),
            {
                onLoad: a,
                onLoadingComplete: s
            } = e,
            f = (0, l.useRef)(a);
        (0, l.useEffect)(() => {
            f.current = a
        }, [a]);
        let h = (0, l.useRef)(s);
        (0, l.useEffect)(() => {
            h.current = s
        }, [s]);
        let [g, y] = (0, l.useState)(!1), [w, C] = (0, l.useState)(!1), {
            props: x,
            meta: E
        } = (0, d.getImgProps)(e, {
            defaultLoader: m.default,
            imgConf: n,
            blurComplete: g,
            showAltText: w
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(v, { ...x,
                unoptimized: E.unoptimized,
                placeholder: E.placeholder,
                fill: E.fill,
                onLoadRef: f,
                onLoadingCompleteRef: h,
                setBlurComplete: y,
                setShowAltText: C,
                sizesInput: e.sizes,
                ref: t
            }), E.preload ? (0, i.jsx)(b, {
                isAppRouter: !r,
                imgAttributes: x
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let o = e.r(71645);

    function n(e, t) {
        let r = (0, o.useRef)(null),
            n = (0, o.useRef)(null);
        return (0, o.useCallback)(o => {
            if (null === o) {
                let e = r.current;
                e && (r.current = null, e());
                let t = n.current;
                t && (n.current = null, t())
            } else e && (r.current = i(e, o)), t && (n.current = i(t, o))
        }, [e, t])
    }

    function i(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 70965, (e, t, r) => {
    "use strict";

    function o(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return o
        }
    })
}, 8927, (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return d
        }
    });
    let o = e.r(43369),
        n = e.r(88143),
        i = e.r(87690),
        l = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function a(e) {
        return void 0 !== e.default
    }

    function s(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function d({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: u = !1,
        preload: c = !1,
        loading: _,
        className: m,
        quality: f,
        width: p,
        height: h,
        fill: g = !1,
        style: y,
        overrideSrc: v,
        onLoad: b,
        onLoadingComplete: w,
        placeholder: C = "empty",
        blurDataURL: x,
        fetchPriority: E,
        decoding: P = "async",
        layout: S,
        objectFit: j,
        objectPosition: O,
        lazyBoundary: M,
        lazyRoot: W,
        ...R
    }, H) {
        var L;
        let F, A, I, {
                imgConf: Q,
                showAltText: Z,
                blurComplete: q,
                defaultLoader: z
            } = H,
            k = Q || i.imageConfigDefault;
        if ("allSizes" in k) F = k;
        else {
            let e = [...k.deviceSizes, ...k.imageSizes].sort((e, t) => e - t),
                t = k.deviceSizes.sort((e, t) => e - t),
                r = k.qualities ? .sort((e, t) => e - t);
            F = { ...k,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === z) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let T = R.loader || z;
        delete R.loader, delete R.srcSet;
        let D = "__next_img_default" in T;
        if (D) {
            if ("custom" === F.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = T;
            T = t => {
                let {
                    config: r,
                    ...o
                } = t;
                return e(o)
            }
        }
        if (S) {
            "fill" === S && (g = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[S];
            e && (y = { ...y,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[S];
            r && !t && (t = r)
        }
        let $ = "",
            B = s(p),
            N = s(h);
        if ((L = e) && "object" == typeof L && (a(L) || void 0 !== L.src)) {
            let t = a(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (A = t.blurWidth, I = t.blurHeight, x = x || t.blurDataURL, $ = t.src, !g)
                if (B || N) {
                    if (B && !N) {
                        let e = B / t.width;
                        N = Math.round(t.height * e)
                    } else if (!B && N) {
                        let e = N / t.height;
                        B = Math.round(t.width * e)
                    }
                } else B = t.width, N = t.height
        }
        let U = !u && !c && ("lazy" === _ || void 0 === _);
        (!(e = "string" == typeof e ? e : $) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, U = !1), F.unoptimized && (r = !0), D && !F.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let G = s(f),
            V = Object.assign(g ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: j,
                objectPosition: O
            } : {}, Z ? {} : {
                color: "transparent"
            }, y),
            X = q || "empty" === C ? null : "blur" === C ? `url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:B,heightInt:N,blurWidth:A,blurHeight:I,blurDataURL:x||"",objectFit:V.objectFit})}")` : `url("${C}")`,
            Y = l.includes(V.objectFit) ? "fill" === V.objectFit ? "100% 100%" : "cover" : V.objectFit,
            K = X ? {
                backgroundSize: Y,
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X
            } : {},
            J = function({
                config: e,
                src: t,
                unoptimized: r,
                width: n,
                quality: i,
                sizes: l,
                loader: a
            }) {
                if (r) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, o.getDeploymentId)();
                        if (t.includes("/_next/static/immutable") && !(0, o.getAssetToken)()) e = void 0;
                        else if (e) {
                            let r = t.indexOf("?");
                            if (-1 !== r) {
                                let o = new URLSearchParams(t.slice(r + 1));
                                o.get("dpl") || (o.append("dpl", e), t = t.slice(0, r) + "?" + o.toString())
                            } else t += `?dpl=${e}`
                        }
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: s,
                    kind: d
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, o) {
                    if (o) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            n = [];
                        for (let e; e = r.exec(o);) n.push(parseInt(e[2]));
                        if (n.length) {
                            let r = .01 * Math.min(...n);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, n, l), u = s.length - 1;
                return {
                    sizes: l || "w" !== d ? l : "100vw",
                    srcSet: s.map((r, o) => `${a({config:e,src:t,quality:i,width:r})} ${"w"===d?r:o+1}${d}`).join(", "),
                    src: a({
                        config: e,
                        src: t,
                        quality: i,
                        width: s[u]
                    })
                }
            }({
                config: F,
                src: e,
                unoptimized: r,
                width: B,
                quality: G,
                sizes: t,
                loader: T
            }),
            ee = U ? "lazy" : _;
        return {
            props: { ...R,
                loading: ee,
                fetchPriority: E,
                width: B,
                height: N,
                decoding: P,
                className: m,
                style: { ...V,
                    ...K
                },
                sizes: J.sizes,
                srcSet: J.srcSet,
                src: v || J.src
            },
            meta: {
                unoptimized: r,
                preload: c || u,
                placeholder: C,
                fill: g
            }
        }
    }
}, 25633, (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return p
        },
        defaultHead: function() {
            return c
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let i = e.r(55682),
        l = e.r(90809),
        a = e.r(43476),
        s = l._(e.r(71645)),
        d = i._(e.r(98879)),
        u = e.r(42732);

    function c() {
        return [(0, a.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, a.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function _(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    let m = ["name", "httpEquiv", "charSet", "itemProp"];

    function f(e) {
        let t, r, o, n;
        return e.reduce(_, []).reverse().concat(c().reverse()).filter((t = new Set, r = new Set, o = new Set, n = {}, e => {
            let i = !0,
                l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                l = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? i = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? i = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = m.length; t < r; t++) {
                        let r = m[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) o.has(r) ? i = !1 : o.add(r);
                            else {
                                let t = e.props[r],
                                    o = n[r] || new Set;
                                ("name" !== r || !l) && o.has(t) ? i = !1 : (o.add(t), n[r] = o)
                            }
                    }
            }
            return i
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return s.default.cloneElement(e, {
                key: r
            })
        })
    }
    let p = function({
        children: e
    }) {
        let t = (0, s.useContext)(u.HeadManagerContext);
        return (0, a.jsx)(d.default, {
            reduceComponentsToState: f,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 88143, (e, t, r) => {
    "use strict";

    function o({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: n,
        blurDataURL: i,
        objectFit: l
    }) {
        let a = r ? 40 * r : e,
            s = n ? 40 * n : t,
            d = a && s ? `viewBox='0 0 ${a} ${s}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return o
        }
    })
}, 18556, (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let o = e.r(55682)._(e.r(71645)),
        n = e.r(87690),
        i = o.default.createContext(n.imageConfigDefault)
}, 65856, (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = e.r(55682)._(e.r(71645)).default.createContext(null)
}, 87690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        VALID_LOADERS: function() {
            return i
        },
        imageConfigDefault: function() {
            return l
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        l = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumDiskCacheSize: void 0,
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1,
            customCacheHandler: !1
        }
}, 1948, (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let o = e.r(70965),
        n = e.r(43369);

    function i({
        config: e,
        src: t,
        width: r,
        quality: l
    }) {
        let a = (0, n.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//"))
            if (t.includes("/_next/static/immutable") && !(0, n.getAssetToken)()) a = void 0;
            else {
                let e = t.indexOf("?");
                if (-1 !== e) {
                    let r = new URLSearchParams(t.slice(e + 1)),
                        o = r.get("dpl");
                    if (o) {
                        a = o, r.delete("dpl");
                        let n = r.toString();
                        t = t.slice(0, e) + (n ? "?" + n : "")
                    }
                }
            }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let s = (0, o.findClosestQuality)(l, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&a?`&dpl=${a}`:""}`
    }
    i.__next_img_default = !0;
    let l = i
}, 98879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let o = e.r(71645),
        n = "u" < typeof window,
        i = n ? () => {} : o.useLayoutEffect,
        l = n ? () => {} : o.useEffect;

    function a(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function a() {
            if (t && t.mountedInstances) {
                let e = o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t ? .mountedInstances ? .add(e.children), a()), i(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), i(() => (t && (t._pendingUpdate = a), () => {
            t && (t._pendingUpdate = a)
        })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}]);