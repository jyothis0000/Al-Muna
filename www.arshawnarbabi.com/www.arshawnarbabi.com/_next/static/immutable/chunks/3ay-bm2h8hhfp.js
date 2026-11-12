(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 79973, e => {
    e.v({
        bottom: "RouteTransition-module__XvASuW__bottom",
        half: "RouteTransition-module__XvASuW__half",
        overlay: "RouteTransition-module__XvASuW__overlay",
        top: "RouteTransition-module__XvASuW__top"
    })
}, 20037, e => {
    "use strict";
    e.i(47167);
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(18566),
        o = e.i(79973),
        a = e.i(13864),
        i = e.i(67850),
        l = e.i(64395),
        u = e.i(47420);

    function s(e) {
        return Math.max(0, (0, i.inkEndFrac)(e) - 1)
    }

    function d(e) {
        return Math.round(550 * (1 + s(e)))
    }

    function c(e) {
        return "/" === e ? "light" : "dark"
    }
    let m = !1,
        f = n.useLayoutEffect;
    e.s(["default", 0, function() {
        let [e, h] = (0, n.useState)("idle"), [p, w] = (0, n.useState)(!1), [g, v] = (0, n.useState)("dark"), y = (0, n.useRef)(null), T = (0, n.useRef)(null), b = (0, n.useRef)(!1), E = (0, n.useRef)(0), A = (0, r.useRouter)(), x = (0, r.usePathname)(), z = (0, n.useRef)(null), R = (0, n.useRef)(null), S = (0, n.useRef)([]), k = () => {
            S.current.forEach(e => window.clearTimeout(e)), S.current = []
        }, _ = n.default.useCallback(e => {
            let t = y.current,
                n = T.current;
            if (!t) return;
            let r = { ...(0, i.readLoaderTuning)(),
                zoomEaseIn: .84,
                zoomEaseOut: .15
            };
            t.style.setProperty("--zoom-big-vw", String(r.zoomBigVw)), t.style.setProperty("--zoom-fx", String(r.zoomFx)), t.style.setProperty("--zoom-fy", String(r.zoomFy)), t.style.setProperty("--fill", "1");
            let o = parseFloat(getComputedStyle(t).getPropertyValue("--big"));
            if (!Number.isFinite(o) || o <= 0) return;
            let a = (0, i.resolveTuning)(r, {
                    big: o,
                    vw: window.innerWidth,
                    vh: window.innerHeight
                }),
                l = "out" === e;
            t.style.transition = "none", t.style.setProperty("--zoom", (l ? a.zoomTo : 1).toFixed(4)), n && (n.style.transition = "none", n.style.opacity = l ? "0" : "1"), t.offsetWidth;
            let u = l ? Math.round(550 * Math.max(0, s(r))) : 0;
            if (t.style.transition = `--zoom 550ms ${l?(0,i.zoomEaseReverse)(a):(0,i.zoomEase)(a)} ${u}ms`, t.style.setProperty("--zoom", (l ? 1 : a.zoomTo).toFixed(4)), n) {
                let e = Math.min(1, Math.max(0, r.inkStart)),
                    t = Math.round(550 * (e + Math.max(.001, r.inkLength) - e)),
                    o = l ? 0 : Math.round(550 * e);
                n.style.transition = `opacity ${t}ms linear ${o}ms`, n.style.opacity = l ? "1" : "0"
            }
        }, []), F = (e, t) => {
            S.current.push(window.setTimeout(t, e))
        };
        return f(() => {
            p && ("closing" === e ? _("out") : "opening" === e && _("in"))
        }, [e, p, _]), (0, n.useEffect)(() => {
            let e = e => {
                if (e.defaultPrevented || 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                let t = function(e) {
                    if (!(e instanceof Element)) return null;
                    let t = e.closest("a");
                    if (!t) return null;
                    let n = t.getAttribute("href");
                    if (!n || t.closest("[data-next-gate]") || t.hasAttribute("download") || "_blank" === t.getAttribute("target") || n.startsWith("http") || n.startsWith("mailto:") || n.startsWith("tel:")) return null;
                    let r = new URL(n, window.location.href);
                    return r.origin !== window.location.origin || r.pathname === window.location.pathname ? null : r.pathname + r.search + r.hash
                }(e.target);
                if (!t) return;
                e.preventDefault(), (0, l.markNavigated)(), k(), h("closing");
                let n = new URL(t, window.location.href);
                R.current = n.hash || null;
                let r = n.pathname + n.search;
                w((n.pathname, !0)), v(c(n.pathname)), F(d((0, i.readLoaderTuning)()), () => {
                    h("covered"), F(0, () => A.push(r))
                })
            };
            return document.addEventListener("click", e, {
                capture: !0
            }), () => document.removeEventListener("click", e, {
                capture: !0
            })
        }, [A]), (0, n.useEffect)(() => {
            let e = () => {
                if (window.location.pathname === z.current) return;
                (0, l.markNavigated)(), k();
                let e = (window.location.pathname, !0);
                w(e), b.current = e, E.current = performance.now(), v(c(window.location.pathname)), h("closing"), F(d((0, i.readLoaderTuning)()), () => h("covered"))
            };
            return window.addEventListener("popstate", e), () => window.removeEventListener("popstate", e)
        }, []), (0, n.useEffect)(() => {
            if (null === z.current) {
                z.current = x;
                return
            }
            if (z.current === x) return;
            if (z.current = x, m) {
                m = !1, h("idle"), document.documentElement.dataset.loaded = "", document.documentElement.dataset.heroTitle = "", document.documentElement.dataset.gateTitle = "", (0, u.scrollToTop)(), document.documentElement.removeAttribute("data-gate-leaving"), requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.removeAttribute("data-gate-arrive")));
                return
            }
            document.documentElement.removeAttribute("data-loaded"), document.documentElement.removeAttribute("data-hero-title"), document.documentElement.removeAttribute("data-gate-title");
            let e = b.current;
            b.current = !1;
            let t = e ? Math.max(0, d((0, i.readLoaderTuning)()) - (performance.now() - E.current)) : 0;
            k(), (0, u.scrollToTop)();
            let n = p ? Math.round(550 * (1 + s((0, i.readLoaderTuning)()))) : 620,
                r = !1;
            performance.now();
            let o = e => {
                    r || (r = !0, h("opening"), F(n, l))
                },
                a = () => {
                    r || requestAnimationFrame(() => requestAnimationFrame(() => {
                        if (!r) {
                            if (function(e) {
                                    if ("/" === e) {
                                        if ("/" !== e) return !0;
                                        let t = document.querySelector("[data-hero-bg-source] canvas");
                                        return !!t && t.width > 0 && t.height > 0
                                    }
                                    if (e.startsWith("/work/")) {
                                        let e = document.querySelector("main img");
                                        return !!e && e.complete && e.naturalWidth > 0
                                    }
                                    return !0
                                }(x)) return o("ready");
                            F(60, a)
                        }
                    }))
                };
            F(t, () => {
                F(700, () => o("cap: opened without the page reporting ready")), a()
            });
            let l = () => {
                h("idle"), document.documentElement.dataset.loaded = "", document.documentElement.dataset.heroTitle = "";
                let e = R.current;
                R.current = null, e ? (0, u.scrollToHash)(e) : (0, u.scrollToTop)()
            }
        }, [x]), (0, n.useEffect)(() => k, []), (0, t.jsx)("div", {
            ref: y,
            className: p ? `${o.default.overlay} ${a.default.overlay}` : o.default.overlay,
            "data-state": e,
            "data-route-cover": "",
            "data-variant": p ? "zoom" : void 0,
            "data-theme": g,
            "data-ground": "neutral",
            style: p ? {
                zIndex: 9998
            } : void 0,
            "aria-hidden": "true",
            children: p ? (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: a.default.zoomCover
                }), (0, t.jsx)("div", {
                    ref: T,
                    className: a.default.zoomInk
                })]
            }) : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: `${o.default.half} ${o.default.top}`
                }), (0, t.jsx)("div", {
                    className: `${o.default.half} ${o.default.bottom}`
                })]
            })
        })
    }, "suppressNextSheet", 0, function() {
        m = !0
    }])
}, 47420, e => {
    "use strict";
    let t, n, r, o;
    var a = e.i(71645);
    let i = (t = (e, t) => 1 - 3 * t + 3 * e, n = (e, t) => 3 * t - 6 * e, r = (e, r, o) => ((t(r, o) * e + n(r, o)) * e + 3 * r) * e, o = (e, r, o) => 3 * t(r, o) * e * e + 2 * n(r, o) * e + 3 * r, e => {
            if (e <= 0) return 0;
            if (e >= 1) return 1;
            let t = e;
            for (let n = 0; n < 4; n++) {
                let n = o(t, .2, 0);
                if (0 === n) break;
                t -= (r(t, .2, 0) - e) / n
            }
            return r(t, 0, 1)
        }),
        l = {
            min: 1.1,
            max: 2.2,
            perPx: 1 / 3500
        };

    function u(e) {
        let t = Math.abs(e.getBoundingClientRect().top);
        return Math.min(l.max, Math.max(l.min, t * l.perPx))
    }
    let s = null;
    e.s(["default", 0, function() {
        return (0, a.useEffect)(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let t = null,
                n = 0,
                r = !1,
                o = null,
                a = e => {
                    if (e.defaultPrevented || 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                    let n = (e => {
                        if (!(e instanceof Element)) return null;
                        let t = e.closest("a");
                        if (!t) return null;
                        let n = t.getAttribute("href");
                        if (!n || !n.includes("#") || t.hasAttribute("download") || "_blank" === t.getAttribute("target")) return null;
                        let r = new URL(n, window.location.href);
                        if (r.origin !== window.location.origin || r.pathname !== window.location.pathname) return null;
                        let o = decodeURIComponent(r.hash.slice(1));
                        if (!o) return null;
                        let a = document.getElementById(o);
                        return a ? {
                            el: a,
                            hash: r.hash
                        } : null
                    })(e.target);
                    !n || t && (e.preventDefault(), t.start(), t.resize(), t.scrollTo(n.el, {
                        force: !0,
                        duration: u(n.el),
                        easing: i
                    }), window.history.replaceState(window.history.state, "", n.hash))
                };
            return document.addEventListener("click", a, {
                capture: !0
            }), e.A(67968).then(({
                default: e
            }) => {
                if (r) return;
                s = t = new e({
                    autoRaf: !1
                });
                let a = document.documentElement,
                    i = () => {
                        a.hasAttribute("data-loaded") && !a.hasAttribute("data-menu-open") ? t ? .start() : t ? .stop()
                    };
                i(), (o = new MutationObserver(i)).observe(a, {
                    attributes: !0,
                    attributeFilter: ["data-loaded", "data-menu-open"]
                });
                let l = e => {
                    t ? .raf(e), n = requestAnimationFrame(l)
                };
                n = requestAnimationFrame(l)
            }), () => {
                r = !0, document.removeEventListener("click", a, {
                    capture: !0
                }), cancelAnimationFrame(n), o ? .disconnect(), s === t && (s = null), t ? .destroy()
            }
        }, []), null
    }, "lockScroll", 0, function() {
        s ? .stop()
    }, "scrollToHash", 0, function(e) {
        if (!s || !e || "#" === e) return !1;
        let t = decodeURIComponent(e.slice(1)),
            n = document.getElementById(t);
        return !!n && (s.start(), s.resize(), s.scrollTo(n, {
            force: !0,
            duration: u(n),
            easing: i
        }), window.history.replaceState(window.history.state, "", e), !0)
    }, "scrollToTop", 0, function() {
        if (s) {
            s.start(), s.resize(), s.scrollTo(0, {
                immediate: !0,
                force: !0
            });
            return
        }
        window.scrollTo(0, 0)
    }, "unlockScroll", 0, function() {
        s ? .start()
    }])
}, 18566, (e, t, n) => {
    t.exports = e.r(76562)
}]);