(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 13864, e => {
    e.v({
        bigMark: "HeroLoader-module__0bMEaq__bigMark",
        bigMarkLeaving: "HeroLoader-module__0bMEaq__bigMarkLeaving",
        enterClip: "HeroLoader-module__0bMEaq__enterClip",
        enterClipA: "HeroLoader-module__0bMEaq__enterClipA",
        enterClipB: "HeroLoader-module__0bMEaq__enterClipB",
        loaderHideAfter: "HeroLoader-module__0bMEaq__loaderHideAfter",
        loaderHideDuring: "HeroLoader-module__0bMEaq__loaderHideDuring",
        loaderHoleShut: "HeroLoader-module__0bMEaq__loaderHoleShut",
        loaderRise: "HeroLoader-module__0bMEaq__loaderRise",
        mark: "HeroLoader-module__0bMEaq__mark",
        markLeaving: "HeroLoader-module__0bMEaq__markLeaving",
        overlay: "HeroLoader-module__0bMEaq__overlay",
        overlayLifting: "HeroLoader-module__0bMEaq__overlayLifting",
        panel: "HeroLoader-module__0bMEaq__panel",
        panelLifting: "HeroLoader-module__0bMEaq__panelLifting",
        panelTrail: "HeroLoader-module__0bMEaq__panelTrail",
        panels: "HeroLoader-module__0bMEaq__panels",
        pattern: "HeroLoader-module__0bMEaq__pattern",
        splitBottom: "HeroLoader-module__0bMEaq__splitBottom",
        splitHalf: "HeroLoader-module__0bMEaq__splitHalf",
        splitLifting: "HeroLoader-module__0bMEaq__splitLifting",
        splitTop: "HeroLoader-module__0bMEaq__splitTop",
        zoomCover: "HeroLoader-module__0bMEaq__zoomCover",
        zoomInk: "HeroLoader-module__0bMEaq__zoomInk",
        zoomInkLeaving: "HeroLoader-module__0bMEaq__zoomInkLeaving",
        zoomInkMain: "HeroLoader-module__0bMEaq__zoomInkMain"
    })
}, 73246, e => {
    e.v({
        burger: "SiteNav-module__xVSxrG__burger",
        burgerBox: "SiteNav-module__xVSxrG__burgerBox",
        burgerLine: "SiteNav-module__xVSxrG__burgerLine",
        cta: "SiteNav-module__xVSxrG__cta",
        ctaFill: "SiteNav-module__xVSxrG__ctaFill",
        ctaStrokeIn: "SiteNav-module__xVSxrG__ctaStrokeIn",
        glyph: "SiteNav-module__xVSxrG__glyph",
        item: "SiteNav-module__xVSxrG__item",
        links: "SiteNav-module__xVSxrG__links",
        mark: "SiteNav-module__xVSxrG__mark",
        nav: "SiteNav-module__xVSxrG__nav",
        scrim: "SiteNav-module__xVSxrG__scrim",
        sheet: "SiteNav-module__xVSxrG__sheet",
        sheetCta: "SiteNav-module__xVSxrG__sheetCta",
        sheetInner: "SiteNav-module__xVSxrG__sheetInner",
        sheetItem: "SiteNav-module__xVSxrG__sheetItem",
        wordmark: "SiteNav-module__xVSxrG__wordmark"
    })
}, 31283, e => {
    "use strict";
    var t = e.i(91338);
    let n = 0,
        r = 0,
        o = 0,
        i = !1,
        a = 0,
        u = 0,
        l = !1,
        d = 0,
        s = 0,
        m = 0,
        c = !1,
        _ = 0,
        f = 0,
        h = 0,
        M = !1,
        p = new Set;

    function v() {
        M = !1;
        let e = document.querySelector("#intro");
        if (!e) return void x();
        let a = window.innerHeight || 1,
            u = window.scrollY,
            f = e.getBoundingClientRect().top + u - a,
            h = f + 2 * e.offsetHeight / 3,
            p = e => {
                let t, n = f + e,
                    r = h - n;
                return Math.pow(r > 0 ? (t = (u - n) / r) < 0 ? 0 : t > 1 ? 1 : t : +(u >= n), 1.41)
            };
        if (d = p(70), s = p(150), !l || "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? (r = s, _ = s, o = 0, l = !0) : g(), (0, t.isFinePointer)()) {
            n = d, _ = s, w();
            return
        }! function() {
            if (c) return;
            c = !0;
            let e = () => {
                n += (d - n) * .2, _ += (s - _) * .2, 5e-4 > Math.abs(d - n) && 5e-4 > Math.abs(s - _) && (n = d, _ = s, c = !1), i || g(), w(), c && (m = requestAnimationFrame(e))
            };
            m = requestAnimationFrame(e)
        }()
    }

    function g() {
        if (i) return;
        i = !0, u = performance.now();
        let e = 2 * Math.PI * 2,
            t = n => {
                let l = Math.min(.05, Math.max(0, (n - u) / 1e3));
                u = n;
                let d = Math.max(1, Math.ceil(240 * l)),
                    m = l / d;
                for (let t = 0; t < d; t++) {
                    let t = e * e * (_ - r) - 1.2 * e * o;
                    o += t * m, r += o * m
                }
                1e-4 > Math.abs(_ - r) && .001 > Math.abs(o) && _ === s && (r = s, o = 0, i = !1), w(), i && (a = requestAnimationFrame(t))
            };
        a = requestAnimationFrame(t)
    }

    function w() {
        document.documentElement.style.setProperty("--hero-fade", n.toFixed(4)), x()
    }

    function x() {
        for (let e of Array.from(p)) e()
    }

    function E() {
        M || (M = !0, f = requestAnimationFrame(v))
    }
    e.s(["SIZE_TO", 0, .955, "onHeroMeasure", 0, function(e) {
        return p.add(e), () => {
            p.delete(e)
        }
    }, "readFluteSize", 0, function() {
        return .93 + .02499999999999991 * r
    }, "readHeroFade", 0, function() {
        return n
    }, "readPanelProgress", 0, function() {
        return r
    }, "subscribeHeroScroll", 0, function() {
        return 1 === (h += 1) && (window.addEventListener("scroll", E, {
            passive: !0
        }), window.addEventListener("resize", E, {
            passive: !0
        }), v()), () => {
            0 == (h -= 1) && (window.removeEventListener("scroll", E), window.removeEventListener("resize", E), cancelAnimationFrame(f), cancelAnimationFrame(m), cancelAnimationFrame(a), c = !1, i = !1, l = !1, M = !1)
        }
    }])
}, 67850, e => {
    "use strict";
    e.i(47167);
    let t = ["dark", "light", "red-dark", "red-light"],
        n = ["off", "cw", "ccw"];

    function r(e) {
        if ("off" === e.spin) return 0;
        let t = Number.isFinite(e.spinDeg) ? e.spinDeg : 0;
        return "ccw" === e.spin ? -t : t
    }
    let o = {
        zoomMs: 550,
        zoomEaseIn: .72,
        zoomClear: 1.15,
        zoomFx: .39,
        zoomFy: .395,
        zoomBigVw: 32,
        inkStart: .82,
        inkLength: .41,
        tideMs: 1700,
        tideEaseIn: .72,
        tideEaseOut: .72,
        theme: "light",
        spin: "off",
        spinDeg: 25
    };

    function i(e, t, n) {
        return Math.min(n, Math.max(t, e))
    }

    function a(e, t, n, r, o) {
        let a = i(e, 0, 1),
            u = 0,
            l = 1,
            d = a;
        for (let e = 0; e < 24; e++) {
            let e = 1 - d;
            3 * e * e * d * t + 3 * e * d * d * r + d * d * d < a ? u = d : l = d, d = (u + l) / 2
        }
        let s = 1 - d;
        return 3 * s * s * d * n + 3 * s * d * d * o + d * d * d
    }

    function u(e) {
        return {
            x1: i(e.zoomEaseIn, 0, .98),
            x2: 1 - i(e.zoomEaseOut ? ? 0, 0, .98)
        }
    }

    function l(e) {
        return {
            x1: i(e.tideEaseIn, 0, .98),
            x2: 1 - i(e.tideEaseOut, 0, .98)
        }
    }

    function d(e, t) {
        let n = .950109 * e.zoomFx - .210719 * e.zoomFy - .238877,
            r = .335967 + .208833 * e.zoomFy - .951059 * e.zoomFx,
            o = Math.max(1, t.big),
            i = t.vw / 2 + o * (e.zoomFx - .5),
            a = t.vh / 2 + o / 1.48 * (e.zoomFy - .5);
        return {
            need: Math.min(4e3, Math.max(2, (.9501 * i + .31188 * (t.vh - a)) / (Math.max(.002, n) * o), (.95106 * (t.vw - i) + .30909 * a) / (Math.max(.002, r) * o))),
            onInk: n > .002 && r > .002
        }
    }

    function s(e) {
        return Math.max(1, Math.round(e.zoomMs))
    }

    function m(e) {
        return Math.max(1, Math.round(e.tideMs))
    }

    function c(e) {
        return e.inkStart + Math.max(.001, e.inkLength)
    }

    function _(e) {
        let t = s(e);
        return Math.round(Math.max(t, t * c(e)))
    }

    function f(e, t) {
        let {
            x1: n,
            x2: r
        } = u(t);
        return a(e, n, 0, r, 1)
    }

    function h(e, t) {
        let n = Math.max(1.0001, t.zoomTo);
        return (Math.pow(n, f(e, t)) - 1) / (n - 1)
    }

    function M(e, t) {
        let {
            x1: n,
            x2: r
        } = l(t);
        return a(e, n, 0, r, 1)
    }
    e.s(["LOADER_DEFAULTS", 0, o, "LOADER_TUNING_KEY", 0, "loader-tuning", "NOMINAL_GEOMETRY", 0, {
        big: 272.16,
        vw: 1512,
        vh: 861
    }, "SPINS", 0, n, "THEMES", 0, t, "exitMs", 0, _, "frameAt", 0, function(e, t) {
        let n = m(t),
            o = s(t),
            a = i(e, 0, n + _(t));
        if (a < n) return {
            fill: M(n > 0 ? a / n : 1, t),
            zoom: 1,
            ink: 1,
            spin: 0,
            phase: "fill"
        };
        let u = o > 0 ? (a - n) / o : 1,
            l = Math.min(1, u),
            d = c(t);
        return {
            fill: 1,
            zoom: 1 + (t.zoomTo - 1) * h(l, t),
            ink: 1 - i((u - t.inkStart) / (d - t.inkStart), 0, 1),
            spin: r(t) * f(l, t),
            phase: "zoom"
        }
    }, "inkEndFrac", 0, c, "parseLoaderTuning", 0, function(e) {
        if (!e) return null;
        try {
            let r = JSON.parse(e);
            if (r ? .v !== 5) return null;
            let i = { ...o
            };
            for (let e of Object.keys(o)) {
                if ("number" != typeof o[e]) continue;
                let t = r[e];
                "number" == typeof t && Number.isFinite(t) && (i[e] = t)
            }
            return t.includes(r.theme) && (i.theme = r.theme), n.includes(r.spin) && (i.spin = r.spin), i
        } catch {
            return null
        }
    }, "peakRatio", 0, function(e) {
        let t = 0;
        for (let n = 1; n <= 400; n++) {
            let r = (M(n / 400, e) - M((n - 1) / 400, e)) * 400;
            r > t && (t = r)
        }
        return t
    }, "readLoaderTuning", 0, function() {
        return o
    }, "resolveTuning", 0, function(e, t) {
        let {
            need: n
        } = d(e, t);
        return { ...e,
            zoomTo: n * Math.max(1, e.zoomClear)
        }
    }, "spinDeg", 0, r, "themeAttrs", 0, function(e) {
        return {
            theme: "light" === e.theme || "red-light" === e.theme ? "light" : "dark",
            ground: "red-dark" === e.theme || "red-light" === e.theme ? "red" : "neutral"
        }
    }, "tideEase", 0, function(e) {
        let {
            x1: t,
            x2: n
        } = l(e);
        return `cubic-bezier(${t.toFixed(3)}, 0, ${n.toFixed(3)}, 1)`
    }, "tideMs", 0, m, "tideProgress", 0, M, "totalMs", 0, function(e) {
        return m(e) + _(e)
    }, "writeLoaderTuning", 0, function(e) {
        return JSON.stringify({
            v: 5,
            ...e
        })
    }, "zoomApparentRatio", 0, function(e) {
        let t = 0;
        for (let n = 1; n <= 400; n++) {
            let r = (f(n / 400, e) - f((n - 1) / 400, e)) * 400;
            r > t && (t = r)
        }
        return t
    }, "zoomEase", 0, function(e) {
        let t = [];
        for (let n = 0; n <= 60; n++) {
            let r = n / 60;
            t.push(`${h(r,e).toFixed(5)} ${(100*r).toFixed(2)}%`)
        }
        return `linear(${t.join(", ")})`
    }, "zoomEaseReverse", 0, function(e) {
        let t = [];
        for (let n = 0; n <= 60; n++) {
            let r = n / 60;
            t.push(`${(1-h(1-r,e)).toFixed(5)} ${(100*r).toFixed(2)}%`)
        }
        return `linear(${t.join(", ")})`
    }, "zoomMs", 0, s, "zoomNeed", 0, d, "zoomProgress", 0, h, "zoomRate", 0, function(e) {
        return Math.log2(Math.max(1.0001, e.zoomTo)) / (s(e) / 1e3)
    }, "zoomShapeEase", 0, function(e) {
        let {
            x1: t,
            x2: n
        } = u(e);
        return `cubic-bezier(${t.toFixed(3)}, 0, ${n.toFixed(3)}, 1)`
    }])
}, 14149, e => {
    "use strict";
    var t = e.i(91338);
    let n = {
            f: 430,
            to: 130,
            dur: .09,
            glide: .075,
            peak: .32
        },
        r = {
            f: 520,
            to: 330,
            dur: .035,
            glide: .03,
            peak: .08
        },
        o = null,
        i = null,
        a = null,
        u = !1;

    function l() {
        if (u) return;
        u = !0;
        let e = window.AudioContext || window.webkitAudioContext;
        e && ((i = (o = new e).createGain()).gain.value = .55, i.connect(o.destination), (a = o.createGain()).gain.value = 2.5, a.connect(i))
    }

    function d() {
        l(), o && "running" !== o.state && o.resume()
    }

    function s() {
        if (u) return !0;
        let e = navigator.userActivation;
        return !e || !0 === e.hasBeenActive
    } {
        let e = () => {
            (0, t.isFinePointer)() && s() && (d(), o && "running" === o.state && (window.removeEventListener("pointerdown", e), window.removeEventListener("keydown", e), window.removeEventListener("touchend", e), window.removeEventListener("click", e)))
        };
        window.addEventListener("pointerdown", e, {
            passive: !0
        }), window.addEventListener("keydown", e, {
            passive: !0
        }), window.addEventListener("touchend", e, {
            passive: !0
        }), window.addEventListener("click", e, {
            passive: !0
        });
        let n = navigator.userActivation;
        n && n.hasBeenActive && (0, t.isFinePointer)() && d(), document.addEventListener("visibilitychange", () => {
            !document.hidden && u && d()
        })
    }
    let m = null;

    function c(e, t) {
        if (!o) return;
        let n = o.currentTime + .001;
        ! function(e) {
            if (!m) return;
            let {
                osc: t,
                gain: n
            } = m, r = n.gain;
            if (r.cancelAndHoldAtTime) r.cancelAndHoldAtTime(e);
            else {
                let t = n.gain.value;
                n.gain.cancelScheduledValues(e), n.gain.setValueAtTime(Math.max(t, 1e-4), e)
            }
            n.gain.exponentialRampToValueAtTime(1e-4, e + .01);
            try {
                t.stop(e + .01 + .005)
            } catch (e) {}
            m = null
        }(n);
        let r = o.createOscillator(),
            i = o.createGain();
        r.type = "sine", r.frequency.setValueAtTime(e.f, n), r.frequency.exponentialRampToValueAtTime(e.to, n + e.glide), i.gain.setValueAtTime(1e-4, n), i.gain.exponentialRampToValueAtTime(e.peak, n + .004), i.gain.exponentialRampToValueAtTime(1e-4, n + e.dur), r.connect(i).connect(t), r.start(n), r.stop(n + e.dur + .02), r.onended = () => {
            try {
                r.disconnect(), i.disconnect()
            } catch (e) {}
        }, m = {
            osc: r,
            gain: i
        }
    }

    function _(e, t) {
        if (!s() || (l(), !o || !i || !a)) return !1;
        let n = "hover" === t ? a : i;
        if ("running" !== o.state) {
            let t = performance.now();
            return o.resume().then(() => {
                o && "running" === o.state && performance.now() - t < 250 && c(e, n)
            }), !1
        }
        return c(e, n), !0
    }
    let f = null,
        h = !1;

    function M(e) {
        !(0, t.isFinePointer)() || e.pointerType && "mouse" !== e.pointerType || f !== e.currentTarget && _(r, "hover") && (f = e.currentTarget)
    }

    function p(e) {
        f === e.currentTarget && (f = null)
    }

    function v() {
        (0, t.isFinePointer)() && (h = !0, _(n, "press"))
    } {
        let e = () => {
            h && (h = !1, _(r, "hover"))
        };
        window.addEventListener("pointerup", e, {
            passive: !0
        }), window.addEventListener("pointercancel", e, {
            passive: !0
        })
    }
    e.s(["navHover", 0, M, "navLeave", 0, p, "navPress", 0, v, "navSoundProps", 0, {
        onPointerEnter: M,
        onPointerMove: M,
        onPointerLeave: p,
        onPointerDown: v,
        onFocus: e => {
            var t;
            (t = e.currentTarget) && t.matches(":focus-visible") && _(r, "hover")
        }
    }])
}, 64395, e => {
    "use strict";
    let t = !1;
    e.s(["hasNavigated", 0, function() {
        return t
    }, "markNavigated", 0, function() {
        t = !0
    }])
}, 91338, e => {
    "use strict";
    e.i(47167);
    let t = "(hover: hover) and (pointer: fine)";

    function n() {
        return window.matchMedia(t).matches
    }

    function r() {
        let e = window.innerWidth;
        return e >= 1024 && e <= 1100 && window.innerHeight > e && window.matchMedia("(pointer: coarse)").matches
    }
    e.s(["FINE_POINTER_QUERY", 0, t, "PHONE_QUERY", 0, "(max-width: 480px), (max-height: 480px)", "isFinePointer", 0, n, "isPhone", 0, function() {
        return !n() && 480 >= Math.min(window.innerWidth, window.innerHeight)
    }, "isWidePortraitTouch", 0, r, "usesPanelMenu", 0, function() {
        return !n() && (window.innerWidth < 1024 || r())
    }])
}, 93494, e => {
    "use strict";
    let t = 0,
        n = !1,
        r = new Set,
        o = 0,
        i = new Set,
        a = [360, 300, 280, 240, 200, 180, 175, 165, 144, 120, 100, 90, 85, 75, 72, 60, 50, 48, 30],
        u = (e, t, n) => Math.abs(Math.log(e / t)) < n,
        l = 1e3 / 30;
    e.s(["GLASS_1X", 0, 1, "MAX_LEVEL", 0, 2, "PICTURE_WATER_OFF", 0, 2, "createMeter", 0, function(e) {
        let t = new Float64Array(40),
            n = new Float64Array(40),
            r = 0,
            o = 0,
            i = 0,
            d = 0,
            s = 0,
            m = 0,
            c = 0,
            _ = 0,
            f = -1 / 0,
            h = 0,
            M = 0,
            p = [],
            v = 0,
            g = 0,
            w = null,
            x = 0,
            E = 0,
            L = 0,
            b = 0,
            S = 0,
            k = null,
            H = 0,
            T = 2,
            F = e => {
                for (let t of a)
                    if (u(e, 1e3 / t, .05)) return t;
                return Math.round(1e3 / e)
            },
            z = t => {
                let n = d || l,
                    r = h / n,
                    o = r > 0 ? M / r : 0,
                    i = o > .05;
                v++, i && g++, w = o, x += M, E += r, h = 0, M = 0, _ = 0;
                let a = F(n);
                if (!e.decide || t < H) return {
                    kind: "window",
                    missedShare: o,
                    troubled: i,
                    hz: a
                };
                p.push(i), p.length > 4 && p.shift();
                let u = 0;
                for (let e of p) e && u++;
                return u >= 3 && S < T ? (S++, H = t + 4e3, p.length = 0, k = `${u} of the last 4 windows missed over 5% (this one ${(100*o).toFixed(1)}%, at ${a} Hz)`, {
                    kind: "step",
                    to: S,
                    reason: k
                }) : {
                    kind: "window",
                    missedShare: o,
                    troubled: i,
                    hz: a
                }
            };
        return {
            frame(e, a, p) {
                if (!(e > 0)) return null;
                if (e >= 100) {
                    L++, e > b && (b = e);
                    let t = p - f > 2e3;
                    if (f = p, t || !a) return {
                        kind: "stall",
                        ms: e,
                        counted: !1
                    };
                    let n = d || l;
                    if (h += e, M += Math.round(e / n) - 1, _ = 0, h >= 2e3) {
                        let e = z(p);
                        if ("step" === e.kind) return e
                    }
                    return {
                        kind: "stall",
                        ms: e,
                        counted: !0
                    }
                }
                if (t[o] = e, o = (o + 1) % 40, r < 40 && r++, r >= 20 && (0 === d || ++i >= 10) && (i = 0, (() => {
                        let e = r;
                        for (let r = 0; r < e; r++) {
                            let e = t[r],
                                o = r - 1;
                            for (; o >= 0 && n[o] > e;) n[o + 1] = n[o], o--;
                            n[o + 1] = e
                        }
                        let o = n[Math.floor(.2 * e)],
                            i = Math.max(1.5 * o, o + 2.5),
                            a = 0;
                        for (; a < e && n[a] < i;) a++;
                        let l = s = n[a >> 1];
                        if (0 !== d && u(l, d, .1)) {
                            d += (l - d) * .2, c = 0;
                            return
                        }
                        if (0 === c || !u(l, c, .1)) {
                            c = l;
                            return
                        }
                        0 !== d && (h = 0, M = 0, _ = 0), c = 0;
                        let f = F(d = l);
                        f > m && (m = f)
                    })()), !a || 0 === d) return null;
                if (h += e, e >= 1.5 * d) {
                    let t = e / d;
                    M += Math.round(t) - 1, _ = .25 > Math.abs(t - Math.round(t)) ? _ + 1 : 0
                } else _ = 0;
                return h < 2e3 || _ >= 8 && h < 6e3 ? null : z(p)
            },
            hold() {
                T = S
            },
            stepNow: () => (S < 2 && S++, T = S, S),
            restart(e) {
                T = 2, p.length = 0, H = e + 4e3, h = 0, M = 0, _ = 0
            },
            snapshot: () => ({
                hz: d ? F(d) : 0,
                rawPeriodMs: s,
                fastestHz: m,
                windows: v,
                troubledWindows: g,
                lastMissedPer1000: null === w ? null : 1e3 * w,
                sessionMissedPer1000: E > 0 ? x / E * 1e3 : null,
                sessionMissed: x,
                sessionExpected: E,
                stalls: L,
                worstStallMs: b,
                wouldLevel: S,
                lastStep: k
            })
        }
    }, "heroLooksDifferent", 0, function(e, t) {
        return 1 > Math.min(e, t) && Math.max(e, t) >= 1
    }, "isQualityForced", 0, function() {
        return n
    }, "readHeroQuality", 0, function() {
        return o
    }, "readQuality", 0, function() {
        return t
    }, "setHeroQuality", 0, function(e) {
        let t = Math.max(0, Math.min(2, Math.round(e)));
        t !== o && (o = t, i.forEach(e => e()))
    }, "setQuality", 0, function(e, o = !1) {
        let i = Math.max(0, Math.min(2, Math.round(e)));
        (i !== t || o !== n) && (t = i, n = o, r.forEach(e => e()))
    }, "subscribeHeroQuality", 0, function(e) {
        return i.add(e), () => {
            i.delete(e)
        }
    }, "subscribeQuality", 0, function(e) {
        return r.add(e), () => {
            r.delete(e)
        }
    }])
}, 1075, e => {
    "use strict";
    e.s(["SETTLED", 0, 2e-4, "morphTarget", 0, function(e, t, n) {
        let r = e / n;
        return r < 1 ? Math.max(0, r) * t : 1 - Math.max(0, Math.min(1, 2 - r)) * t
    }])
}]);