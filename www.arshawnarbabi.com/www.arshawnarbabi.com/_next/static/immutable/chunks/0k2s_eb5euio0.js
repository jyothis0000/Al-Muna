(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 41222, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["default", 0, function() {
        return (0, t.useEffect)(() => {
            let e = new URLSearchParams(window.location.search).get("pointer"),
                t = document.documentElement;
            "coarse" === e || "fine" === e ? t.dataset.pointer = e : delete t.dataset.pointer
        }, []), null
    }])
}, 66100, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(18566);
    e.s(["default", 0, function() {
        let e = (0, r.usePathname)();
        return (0, t.useEffect)(() => {
            let e = navigator.connection;
            if (e ? .saveData) return;
            let t = !1,
                r = 0,
                n = null,
                a = document.documentElement,
                i = () => {
                    if (t) return;
                    let e = [...document.querySelectorAll('main img[loading="lazy"]')].filter(e => !e.complete),
                        r = () => {
                            if (t) return;
                            let n = e.shift();
                            if (!n) return;
                            if (!n.isConnected || n.complete) return void r();
                            let a = () => {
                                n.removeEventListener("load", a), n.removeEventListener("error", a), n.decode && n.decode().catch(() => {}), r()
                            };
                            n.addEventListener("load", a), n.addEventListener("error", a), n.loading = "eager"
                        };
                    for (let e = 0; e < 6; e++) r()
                },
                s = () => {
                    r = window.setTimeout(i, 0)
                };
            return a.hasAttribute("data-loaded") ? s() : (n = new MutationObserver(() => {
                a.hasAttribute("data-loaded") && (n ? .disconnect(), n = null, s())
            })).observe(a, {
                attributes: !0,
                attributeFilter: ["data-loaded"]
            }), () => {
                t = !0, window.clearTimeout(r), n ? .disconnect()
            }
        }, [e]), null
    }])
}, 94882, e => {
    "use strict";
    var t = e.i(18566),
        r = e.i(71645);
    let n = Object.freeze([{
            selector: "#work",
            theme: "light"
        }, {
            selector: "#contact-close",
            theme: "dark"
        }]),
        a = ["/work/"];
    e.s(["default", 0, function({
        boundaries: e = n,
        base: i = "dark"
    }) {
        var s;
        let o = (s = (0, t.usePathname)(), a.some(e => s.startsWith(e)) ? "light" : i);
        return (0, r.useEffect)(() => {
            let t = document.documentElement,
                r = e.map(() => !1),
                n = "light" === t.dataset.theme ? "light" : "dark",
                a = !1,
                i = 0,
                s = () => {
                    a = !1;
                    let i = window.innerHeight || 1,
                        s = o;
                    for (let t = 0; t < e.length; t += 1) {
                        let n = document.querySelector(e[t].selector);
                        if (!n) {
                            r[t] = !1;
                            continue
                        }
                        let a = n.getBoundingClientRect().top;
                        r[t] = r[t] ? a < .75 * i : a < .55 * i, r[t] && (s = e[t].theme)
                    }
                    s !== n && (n = s, t.dataset.theme = s)
                },
                l = () => {
                    a || (a = !0, i = requestAnimationFrame(s))
                };
            return window.addEventListener("scroll", l, {
                passive: !0
            }), window.addEventListener("resize", l, {
                passive: !0
            }), s(), () => {
                window.removeEventListener("scroll", l), window.removeEventListener("resize", l), cancelAnimationFrame(i)
            }
        }, [e, o]), null
    }])
}, 88423, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["default", 0, function() {
        return (0, t.useEffect)(() => {
            let e = new URLSearchParams(window.location.search).get("perf-off");
            if (!e) return;
            let t = e.split(",").map(e => e.trim()).filter(Boolean).join(" ");
            return document.documentElement.setAttribute("data-perf-off", t), () => document.documentElement.removeAttribute("data-perf-off")
        }, []), null
    }])
}, 83309, e => {
    "use strict";
    var t = e.i(71645);
    let r = "[data-ptr-parallax]";
    e.s(["default", 0, function() {
        return (0, t.useEffect)(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
            let e = null,
                t = 0,
                n = new Map,
                a = (e, t, r) => {
                    e.style.setProperty("--ptr-x", t.toFixed(4)), e.style.setProperty("--ptr-y", r.toFixed(4))
                },
                i = e => {
                    e.style.removeProperty("--ptr-x"), e.style.removeProperty("--ptr-y")
                },
                s = (e, r) => {
                    let a = n.get(e);
                    if (a && a.gTo === r) return;
                    let i = a ? a.g : 0;
                    n.set(e, {
                        x: a ? a.x : 0,
                        y: a ? a.y : 0,
                        g: i,
                        g0: i,
                        gTo: r,
                        t0: performance.now()
                    }), t || (t = requestAnimationFrame(o))
                },
                o = e => {
                    t = 0;
                    let r = !1;
                    for (let [t, s] of n) {
                        let o = Math.min(1, (e - s.t0) / 260),
                            l = 1 - Math.pow(1 - o, 3);
                        s.g = s.g0 + (s.gTo - s.g0) * l, a(t, s.x * s.g, s.y * s.g), o < 1 ? r = !0 : 0 === s.gTo ? (n.delete(t), i(t)) : (s.g = 1, s.g0 = 1)
                    }
                    r && (t = requestAnimationFrame(o))
                },
                l = i => {
                    let o = i.target ? .closest ? .(r);
                    if (o !== e && (e && s(e, 0), e = o, o && s(o, 1)), !o) return;
                    let l = o.getBoundingClientRect();
                    if (!l.width || !l.height) return;
                    let d = n.get(o);
                    d && (d.x = (i.clientX - l.left) / l.width * 2 - 1, d.y = (i.clientY - l.top) / l.height * 2 - 1, 1 !== d.g || t || a(o, d.x, d.y))
                },
                d = () => {
                    e && s(e, 0), e = null
                };
            return window.addEventListener("pointermove", l, {
                passive: !0
            }), document.addEventListener("pointerleave", d), () => {
                window.removeEventListener("pointermove", l), document.removeEventListener("pointerleave", d), t && cancelAnimationFrame(t), n.clear(), document.querySelectorAll(r).forEach(i)
            }
        }, []), null
    }])
}, 6818, e => {
    e.v({
        readout: "QualityGovernor-module__SHpHLG__readout"
    })
}, 32493, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(93494),
        a = e.i(31283),
        i = e.i(6818);
    e.s(["default", 0, function() {
        let [e, s] = (0, r.useState)(!1), o = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let e = new URLSearchParams(window.location.search);
            if ((e.get("perf-off") ? ? "").split(",").some(e => "quality" === e.trim())) return;
            let t = e.get("quality"),
                r = null !== t && /^\d$/.test(t) && Number(t) <= n.MAX_LEVEL ? Number(t) : null,
                i = e.has("quality-debug"),
                l = document.documentElement,
                d = !0;
            try {
                d = window.self !== window.top
            } catch {
                d = !0
            }
            if (d) {
                if (null === r) return;
                return (0, n.setQuality)(r, !0), (0, n.setHeroQuality)(r), r > 0 && l.setAttribute("data-quality", String(r)), () => {
                    (0, n.setQuality)(0, !1), (0, n.setHeroQuality)(0), l.removeAttribute("data-quality")
                }
            }
            let u = (0, n.subscribeQuality)(() => {
                let e = (0, n.readQuality)();
                e > 0 ? l.setAttribute("data-quality", String(e)) : l.removeAttribute("data-quality")
            });
            null !== r && (0, n.setQuality)(r, !0);
            let c = (0, n.createMeter)({
                    decide: null === r
                }),
                m = window.matchMedia("(prefers-reduced-motion: reduce)"),
                h = [],
                f = e => {
                    let t = new Date().toTimeString().slice(0, 8);
                    h.push({
                        at: t,
                        path: window.location.pathname,
                        text: e
                    }), h.length > 200 && h.shift(), i && console.info(`[quality] ${t} ${window.location.pathname} ${e}`)
                },
                p = 0,
                v = 0,
                w = -1 / 0,
                y = 0,
                g = !document.hasFocus(),
                b = window.innerWidth,
                x = "idle",
                E = null,
                A = !1,
                L = !1,
                F = -1 / 0,
                P = null,
                S = () => {
                    let e = E ? .getAttribute("data-state");
                    A = null != e && "idle" !== e, L = "covered" === e
                },
                _ = e => E && E.isConnected ? A : !(e - F < 1e3) && ((F = e, P ? .disconnect(), E = document.querySelector("[data-route-cover]")) ? ((P = new MutationObserver(S)).observe(E, {
                    attributes: !0,
                    attributeFilter: ["data-state"]
                }), S(), A) : (A = !1, !1)),
                j = e => {
                    let t = v ? e - v : 0;
                    v = e, (e => {
                        let t = (0, n.readQuality)(),
                            r = (0, n.readHeroQuality)();
                        if (t !== r) {
                            if ((0, n.heroLooksDifferent)(r, t)) {
                                let t = _(e) ? L : !l.hasAttribute("data-loaded"),
                                    r = null === document.getElementById("hero") || (0, a.readHeroFade)() >= .998;
                                if (!t && !(r && e - w >= 300)) return
                            }(0, n.setHeroQuality)(t), (0, n.isQualityForced)() || (c.restart(e), f(`the hero took level ${t}`))
                        }
                    })(e);
                    let r = !m.matches && null !== document.getElementById("hero") && 1 > (0, a.readHeroFade)();
                    if (!r && e - w > 2e3) {
                        p = 0, v = 0, x = "idle";
                        return
                    }
                    if (p = requestAnimationFrame(j), g) {
                        x = "paused: window not focused";
                        return
                    }
                    if (e < y) {
                        x = "paused: settling after a return or resize";
                        return
                    }
                    if (!l.hasAttribute("data-loaded")) {
                        x = "paused: loading";
                        return
                    }
                    if (_(e)) {
                        x = "paused: page transition";
                        return
                    }
                    let i = r || e - w < 250;
                    x = i ? "counting" : "running, not counting";
                    let s = c.frame(t, i, e);
                    s ? .kind === "step" ? ((0, n.setQuality)(s.to), c.hold(), f(`stepped to ${s.to}: ${s.reason}`)) : s ? .kind === "stall" && f(`stall ${Math.round(s.ms)} ms, logged and not counted`)
                },
                k = () => {
                    p || document.hidden || (v = 0, p = requestAnimationFrame(j))
                },
                M = () => {
                    w = performance.now(), k()
                },
                $ = () => {
                    if (document.hidden) {
                        cancelAnimationFrame(p), p = 0, v = 0, x = "paused: tab hidden";
                        return
                    }
                    y = performance.now() + 1e3, k()
                },
                q = () => {
                    g = !0
                },
                R = () => {
                    g = !1, y = performance.now() + 1e3, k()
                },
                N = () => {
                    window.innerWidth !== b && (b = window.innerWidth, y = performance.now() + 500)
                },
                z = {
                    passive: !0
                },
                Q = ["scroll", "wheel", "pointermove", "pointerdown", "touchmove", "keydown"];
            for (let e of Q) window.addEventListener(e, M, z);
            window.addEventListener("resize", N, z), window.addEventListener("blur", q), window.addEventListener("focus", R), document.addEventListener("visibilitychange", $), k();
            let C = 0,
                T = window;
            if (i) {
                s(!0);
                let e = (e, t = 1) => null === e ? "none yet" : e.toFixed(t);
                C = window.setInterval(() => {
                    let t = o.current;
                    if (!t) return;
                    let r = c.snapshot(),
                        a = (0, n.readQuality)(),
                        i = (0, n.readHeroQuality)(),
                        s = `level ${a}${(0,n.isQualityForced)()?", forced by the URL (no decisions)":""}, hero at ${i}${i<a?" (waits until it is out of sight)":""}`,
                        l = [i >= n.GLASS_1X && "glass 1x", a >= n.PICTURE_WATER_OFF && "no new picture water"].filter(Boolean).join(", "),
                        d = h.filter(e => e.text.startsWith("stepped"));
                    t.textContent = [s, `in effect: ${l||"the full site"}`, `refresh ${r.hz||"measuring"}${r.hz?" Hz":""} (fastest seen ${r.fastestHz||"none"})`, `missed per 1000: last window ${e(r.lastMissedPer1000)}, this visit ${e(r.sessionMissedPer1000)}`, `windows ${r.windows}, over the line ${r.troubledWindows}`, `stalls ${r.stalls}${r.stalls?`, worst ${Math.round(r.worstStallMs)} ms`:""}`, `last step: ${d.length?`${d[d.length-1].at} ${d[d.length-1].text}`:"none"}`, `now: ${x}`].join("\n")
                }, 500), T.__quality = {
                    snapshot: () => ({ ...c.snapshot(),
                        level: (0, n.readQuality)(),
                        heroLevel: (0, n.readHeroQuality)(),
                        forced: (0, n.isQualityForced)(),
                        state: x,
                        log: h.slice()
                    }),
                    stepNow: () => {
                        if ((0, n.isQualityForced)()) return;
                        let e = c.stepNow();
                        (0, n.setQuality)(e), f(`stepped to ${e}: by hand, from the debug hook`), k()
                    }
                }
            }
            return () => {
                for (let e of Q) window.removeEventListener(e, M);
                window.removeEventListener("resize", N), window.removeEventListener("blur", q), window.removeEventListener("focus", R), document.removeEventListener("visibilitychange", $), cancelAnimationFrame(p), P ? .disconnect(), window.clearInterval(C), delete T.__quality, u(), (0, n.setQuality)(0, !1), (0, n.setHeroQuality)(0), l.removeAttribute("data-quality")
            }
        }, []), e ? (0, t.jsx)("pre", {
            ref: o,
            className: i.default.readout,
            "aria-hidden": "true"
        }) : null
    }])
}, 71802, e => {
    e.v({
        rail: "ScrollIndicator-module__mMnhYq__rail",
        thumb: "ScrollIndicator-module__mMnhYq__thumb"
    })
}, 36894, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(71802);
    e.s(["default", 0, function() {
        let e = (0, r.useRef)(null),
            a = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let t = e.current,
                r = a.current;
            if (!t || !r) return;
            let n = !1,
                i = 0,
                s = 0 === t.getClientRects().length,
                o = () => {
                    s = 0 === t.getClientRects().length, d()
                },
                l = () => {
                    if (n = !1, s) return;
                    let e = document.documentElement,
                        a = e.scrollHeight - window.innerHeight,
                        i = document.querySelector("#hero"),
                        o = !i || i.getBoundingClientRect().bottom <= 0,
                        l = a > 1 && e.hasAttribute("data-loaded") && o;
                    if (l ? t.setAttribute("data-visible", "") : t.removeAttribute("data-visible"), !l) return;
                    let d = t.clientHeight,
                        u = Math.max(24, Math.round(d * (window.innerHeight / e.scrollHeight))),
                        c = Math.round((d - u) * Math.min(1, Math.max(0, window.scrollY / a)));
                    r.style.height = `${u}px`, r.style.transform = `translateY(${c}px)`
                },
                d = () => {
                    n || (n = !0, i = requestAnimationFrame(l))
                };
            window.addEventListener("scroll", d, {
                passive: !0
            }), window.addEventListener("resize", o, {
                passive: !0
            });
            let u = new ResizeObserver(d);
            u.observe(document.body);
            let c = new ResizeObserver(o);
            c.observe(t);
            let m = new MutationObserver(d);
            return m.observe(document.documentElement, {
                attributes: !0,
                attributeFilter: ["data-loaded"]
            }), l(), () => {
                window.removeEventListener("scroll", d), window.removeEventListener("resize", o), u.disconnect(), c.disconnect(), m.disconnect(), cancelAnimationFrame(i)
            }
        }, []), (0, t.jsx)("div", {
            ref: e,
            className: n.default.rail,
            "aria-hidden": "true",
            children: (0, t.jsx)("div", {
                ref: a,
                className: n.default.thumb
            })
        })
    }])
}, 34107, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(18566),
        a = e.i(1075),
        i = e.i(91338),
        s = e.i(76810);
    let o = {
            "per-character-rise": "char",
            "per-word-crossfade": "word",
            whole: "whole"
        },
        l = {
            "per-character-rise": s.default.charRise,
            "per-word-crossfade": s.default.wordFade,
            whole: s.default.riseWhole
        };

    function d({
        text: e,
        effect: r = "per-word-crossfade",
        delayMs: n = 0,
        className: a,
        style: i,
        children: u,
        gate: c = "loaded"
    }) {
        let m = {
                "--anim-base": `${n}ms`
            },
            h = o[r],
            f = "early" === c ? `${l[r]} ${s.default.early}` : l[r];
        if ("whole" === h) return (0, t.jsxs)("span", {
            className: `${f} ${a??""}`,
            style: { ...m,
                ...i
            },
            "data-anim-hidden": "",
            children: [void 0 !== u && e ? (0, t.jsx)("span", {
                className: "sr-only",
                children: e
            }) : null, void 0 !== u ? (0, t.jsx)("span", {
                "aria-hidden": "true",
                children: u
            }) : e]
        });
        let p = e.split(/(\s+)/),
            v = 0;
        return (0, t.jsxs)("span", {
            className: a,
            style: { ...m,
                ...i
            },
            children: [(0, t.jsx)("span", {
                className: "sr-only",
                children: e
            }), p.map((e, r) => {
                if ("" === e) return null;
                if (/^\s+$/.test(e)) return (0, t.jsx)("span", {
                    "aria-hidden": "true",
                    children: " "
                }, r);
                if ("word" === h) {
                    let n = v++;
                    return (0, t.jsx)("span", {
                        className: f,
                        "aria-hidden": "true",
                        "data-anim-hidden": "",
                        style: {
                            "--i": n
                        },
                        children: e
                    }, r)
                }
                return (0, t.jsx)("span", {
                    className: s.default.word,
                    "aria-hidden": "true",
                    children: Array.from(e).map(e => {
                        let r = v++;
                        return (0, t.jsx)("span", {
                            className: f,
                            "data-anim-hidden": "",
                            style: {
                                "--i": r
                            },
                            children: e
                        }, r)
                    })
                }, r)
            })]
        })
    }
    var u = e.i(14149),
        c = e.i(73246);
    let m = {
            smoothing: .09,
            free: .28,
            commit: 90
        },
        h = {
            mark: 720,
            nav: 820
        },
        f = {
            mark: 500,
            nav: 600
        },
        p = [{
            href: "/#work",
            label: "Work"
        }, {
            href: "/#process-summary",
            label: "Process"
        }],
        v = "/contact",
        w = "Start a project";
    e.s(["default", 0, function() {
        let e = "/" === (0, n.usePathname)(),
            s = e ? h : f,
            o = (0, r.useRef)(null),
            l = (0, r.useRef)(null);
        (0, r.useLayoutEffect)(() => {
            let e = o.current;
            if (!e) return;
            let t = () => {
                if (!e.getClientRects().length) return;
                let t = e.querySelector("[data-nav-links]"),
                    r = e.hasAttribute("data-measured"),
                    n = e.style.getPropertyValue("--nav-p"),
                    a = e.style.getPropertyValue("--nav-shrink");
                e.removeAttribute("data-measured"), e.style.setProperty("--nav-p", "1");
                let i = r => (e.style.setProperty("--nav-shrink", r), [e.getBoundingClientRect().width, t ? t.getBoundingClientRect().width : 0]),
                    [s, o] = i("0"),
                    [l, d] = i("1");
                n ? e.style.setProperty("--nav-p", n) : e.style.removeProperty("--nav-p"), a ? e.style.setProperty("--nav-shrink", a) : e.style.removeProperty("--nav-shrink"), s > 0 && o > 0 && l > 0 && d > 0 ? (e.style.setProperty("--nav-settled-0", `${s.toFixed(2)}px`), e.style.setProperty("--nav-settled-1", `${l.toFixed(2)}px`), e.style.setProperty("--links-settled-0", `${o.toFixed(2)}px`), e.style.setProperty("--links-settled-1", `${d.toFixed(2)}px`), e.setAttribute("data-measured", "")) : r && e.setAttribute("data-measured", "")
            };
            t(), window.addEventListener("resize", t), document.fonts ? .ready.then(t).catch(() => {});
            let r = new ResizeObserver(() => {
                e.hasAttribute("data-measured") || t()
            });
            return r.observe(e), () => {
                window.removeEventListener("resize", t), r.disconnect()
            }
        }, []), (0, r.useEffect)(() => {
            let e = new URLSearchParams(window.location.search).get("navfx");
            if (e) return document.documentElement.setAttribute("data-navfx", e.split(",").join(" ")), () => document.documentElement.removeAttribute("data-navfx")
        }, []);
        let [y, g] = (0, r.useState)("none");
        (0, r.useEffect)(() => {
            let e = () => window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)").matches || window.matchMedia("(min-width: 1024px) and (pointer: coarse)").matches && !(0, i.isWidePortraitTouch)() ? "desktop" : (0, i.usesPanelMenu)() ? "panel" : "none";
            g(e());
            let t = 0,
                r = () => {
                    cancelAnimationFrame(t), t = requestAnimationFrame(() => g(e()))
                };
            return window.addEventListener("resize", r, {
                passive: !0
            }), window.addEventListener("orientationchange", r), () => {
                cancelAnimationFrame(t), window.removeEventListener("resize", r), window.removeEventListener("orientationchange", r)
            }
        }, []), (0, r.useEffect)(() => {
            let e = o.current;
            if (!e) return;
            let t = "desktop" === y,
                r = "panel" === y;
            if (!t) {
                if (!r) return;
                let t = document.documentElement,
                    n = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                    i = 0,
                    s = 0,
                    o = !0,
                    l = () => (0, a.morphTarget)(window.scrollY, m.free, m.commit),
                    d = 0,
                    u = () => {
                        t.style.setProperty("--nav-m", i.toFixed(4)), t.style.setProperty("--menu-p", d.toFixed(4));
                        let r = d > 1e-4;
                        e.toggleAttribute("data-menu-open", r), F.current ? .toggleAttribute("data-anim", r)
                    },
                    c = () => {
                        let e = +!!E.current,
                            t = Math.max(l(), e);
                        i += (t - i) * m.smoothing, d += (e - d) * m.smoothing, Math.abs(t - i) < a.SETTLED && Math.abs(e - d) < a.SETTLED && (i = t, d = e, o = !0), u(), o || (s = requestAnimationFrame(c))
                    },
                    h = () => {
                        if (n) {
                            let e = +!!E.current;
                            i = Math.max(l(), e), d = e, u();
                            return
                        }
                        o && (o = !1, s = requestAnimationFrame(c))
                    };
                return A.current = h, window.addEventListener("scroll", h, {
                    passive: !0
                }), window.addEventListener("resize", h, {
                    passive: !0
                }), h(), () => {
                    A.current = null, window.removeEventListener("scroll", h), window.removeEventListener("resize", h), cancelAnimationFrame(s), t.style.removeProperty("--nav-m"), t.style.removeProperty("--menu-p")
                }
            }
            let n = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                i = 0,
                s = 0,
                l = !0,
                d = e => (0, a.morphTarget)(e, m.free, m.commit),
                u = () => {
                    let {
                        smoothing: t
                    } = m, r = d(window.scrollY);
                    i += (r - i) * t, Math.abs(r - i) < a.SETTLED && (i = r, l = !0), e.style.setProperty("--nav-p", i.toFixed(4)), e.style.setProperty("--nav-shrink", i.toFixed(4)), l || (s = requestAnimationFrame(u))
                },
                c = () => {
                    if (n) {
                        i = d(window.scrollY), e.style.setProperty("--nav-p", i.toFixed(4)), e.style.setProperty("--nav-shrink", i.toFixed(4));
                        return
                    }
                    l && (l = !1, s = requestAnimationFrame(u))
                };
            return window.addEventListener("scroll", c, {
                passive: !0
            }), c(), () => {
                window.removeEventListener("scroll", c), cancelAnimationFrame(s), e.style.removeProperty("--nav-p"), e.style.removeProperty("--nav-shrink")
            }
        }, [y]), (0, r.useEffect)(() => {
            let e = l.current,
                t = e ? .parentElement;
            if (!e || !t) return;
            let r = () => {
                    let r = parseFloat(getComputedStyle(t).fontSize),
                        n = e.offsetWidth;
                    r > 0 && n > 0 && t.style.setProperty("--wm-ratio", (n / r).toFixed(4))
                },
                n = new ResizeObserver(r);
            return n.observe(e), r(), () => n.disconnect()
        }, []);
        let [b, x] = (0, r.useState)(!1), E = (0, r.useRef)(!1), A = (0, r.useRef)(null), L = (0, r.useRef)(null), F = (0, r.useRef)(null), P = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let e = F.current,
                t = P.current;
            if (!e || !t) return;
            let r = () => {
                if (!(0, i.usesPanelMenu)()) return;
                let r = getComputedStyle(e),
                    n = parseFloat(r.paddingBlockStart) + parseFloat(r.paddingBlockEnd);
                e.style.setProperty("--sheet-h", `${Math.round(t.offsetHeight+n)}px`)
            };
            r();
            let n = new ResizeObserver(r);
            return n.observe(t), window.addEventListener("resize", r, {
                passive: !0
            }), () => {
                n.disconnect(), window.removeEventListener("resize", r)
            }
        }, []), (0, r.useEffect)(() => {
            E.current = b, b && (o.current ? .setAttribute("data-menu-open", ""), F.current ? .setAttribute("data-anim", "")), A.current ? .()
        }, [b]), (0, r.useEffect)(() => {
            let e = document.documentElement;
            if (b ? e.setAttribute("data-menu-open", "") : e.removeAttribute("data-menu-open"), !b) return;
            let t = e => {
                    "Escape" === e.key && (x(!1), L.current ? .focus())
                },
                r = window.matchMedia("(min-width: 1024px)"),
                n = () => {
                    r.matches && !(0, i.isWidePortraitTouch)() && x(!1)
                };
            return document.addEventListener("keydown", t), r.addEventListener("change", n), F.current ? .querySelector("a") ? .focus({
                preventScroll: !0
            }), () => {
                document.removeEventListener("keydown", t), r.removeEventListener("change", n)
            }
        }, [b]), (0, r.useEffect)(() => () => {
            document.documentElement.removeAttribute("data-menu-open")
        }, []), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("nav", {
                ref: o,
                className: c.default.nav,
                "aria-label": "Primary",
                style: e ? void 0 : {
                    "--reveal-delay": "0ms"
                },
                children: [(0, t.jsxs)("a", {
                    href: "/",
                    className: c.default.mark,
                    "aria-label": "Arshawn Arbabi",
                    "data-parallax-pitch": "",
                    "data-parallax-compose": "",
                    ...u.navSoundProps,
                    children: [(0, t.jsx)("span", {
                        ref: l,
                        className: c.default.wordmark,
                        "aria-hidden": "true",
                        children: (0, t.jsx)(d, {
                            text: "Arshawn Arbabi",
                            delayMs: s.mark
                        })
                    }), (0, t.jsx)(d, {
                        effect: "whole",
                        text: "",
                        delayMs: s.mark,
                        style: {
                            "--rise-y": "8px"
                        },
                        children: (0, t.jsx)("span", {
                            className: c.default.glyph,
                            "aria-hidden": "true"
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: c.default.links,
                    "data-nav-links": "",
                    "data-parallax-pitch": "",
                    "data-parallax-compose": "",
                    children: [p.map((e, r) => (0, t.jsx)("a", {
                        href: e.href,
                        className: c.default.item,
                        ...u.navSoundProps,
                        children: (0, t.jsx)(d, {
                            text: e.label,
                            delayMs: s.nav + 40 * r
                        })
                    }, e.href)), (0, t.jsxs)("a", {
                        href: v,
                        className: c.default.cta,
                        "data-label": w,
                        style: {
                            "--cta-reveal-delay": `${s.nav+40*p.length}ms`
                        },
                        ...u.navSoundProps,
                        children: [(0, t.jsx)(d, {
                            text: w,
                            delayMs: s.nav + 40 * p.length
                        }), (0, t.jsx)("span", {
                            className: c.default.ctaFill,
                            "aria-hidden": "true",
                            children: (0, t.jsx)(d, {
                                text: w,
                                delayMs: s.nav + 40 * p.length
                            })
                        })]
                    })]
                }), (0, t.jsx)("button", {
                    ref: L,
                    type: "button",
                    className: c.default.burger,
                    "aria-expanded": b,
                    "aria-controls": "site-menu",
                    "aria-label": b ? "Close menu" : "Open menu",
                    "data-open": b ? "" : void 0,
                    onClick: () => x(e => !e),
                    children: (0, t.jsxs)("span", {
                        className: c.default.burgerBox,
                        "aria-hidden": "true",
                        children: [(0, t.jsx)("span", {
                            className: c.default.burgerLine
                        }), (0, t.jsx)("span", {
                            className: c.default.burgerLine
                        })]
                    })
                })]
            }), (0, t.jsx)("div", {
                className: c.default.scrim,
                "data-open": b ? "" : void 0,
                "aria-hidden": "true",
                onClick: () => x(!1)
            }), (0, t.jsx)("nav", {
                id: "site-menu",
                ref: F,
                className: c.default.sheet,
                "data-open": b ? "" : void 0,
                inert: !b,
                "aria-label": "Menu",
                children: (0, t.jsxs)("div", {
                    ref: P,
                    className: c.default.sheetInner,
                    children: [p.map(e => (0, t.jsx)("a", {
                        href: e.href,
                        className: c.default.sheetItem,
                        onClick: () => x(!1),
                        ...u.navSoundProps,
                        children: e.label
                    }, e.href)), (0, t.jsx)("a", {
                        href: v,
                        className: c.default.sheetCta,
                        onClick: () => x(!1),
                        ...u.navSoundProps,
                        children: w
                    })]
                })
            })]
        })
    }], 34107)
}, 76810, e => {
    e.v({
        charRise: "anim-module__X7bmSq__charRise",
        clipped: "anim-module__X7bmSq__clipped",
        early: "anim-module__X7bmSq__early",
        riseWhole: "anim-module__X7bmSq__riseWhole",
        word: "anim-module__X7bmSq__word",
        wordFade: "anim-module__X7bmSq__wordFade"
    })
}]);