(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 71594, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["default", 0, function({
        selector: e
    }) {
        return (0, t.useEffect)(() => {
            let t = document.querySelector(e);
            if (!t) return;
            let r = Array.from(t.querySelectorAll("[data-reveal]")),
                n = new Map,
                i = new IntersectionObserver(e => {
                    for (let t of e) t.isIntersecting && (n.get(t.target) ? .setAttribute("data-in", ""), i.unobserve(t.target))
                }, {
                    threshold: .35
                });
            return r.forEach(e => {
                let t = e.parentElement ? ? e;
                n.set(t, e), i.observe(t)
            }), t.setAttribute("data-reveal-armed", ""), () => i.disconnect()
        }, [e]), null
    }])
}, 60075, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(58614);
    let i = 0,
        o = new Set;

    function a(e) {
        o.delete(e), i > 0 && (i -= 1);
        let t = o.values().next();
        t.done || (o.delete(t.value), i += 1, t.value())
    }
    e.s(["default", 0, function({
        src: e
    }) {
        let l = (0, r.useRef)(null),
            [s, d] = (0, r.useState)(!1),
            u = (0, r.useRef)(!1);
        return (0, r.useEffect)(() => {
            let e = l.current;
            if (!e) return;
            let t = () => {
                    u.current = !0, d(!0)
                },
                r = new IntersectionObserver(([e]) => {
                    if (e.isIntersecting) !u.current && ((i < 8 ? (i += 1, 0) : (o.add(t), 1)) || t());
                    else u.current ? (u.current = !1, d(!1), a(t)) : o.delete(t)
                }, {
                    rootMargin: "100% 0px"
                });
            return r.observe(e), () => {
                r.disconnect(), u.current ? (u.current = !1, a(t)) : o.delete(t)
            }
        }, []), (0, t.jsx)("span", {
            ref: l,
            children: s ? (0, t.jsx)(n.default, {
                src: e
            }) : null
        })
    }])
}, 66867, e => {
    "use strict";
    e.i(47167);
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(64395),
        i = e.i(13864),
        o = e.i(92306),
        a = e.i(11032),
        l = e.i(67850);

    function s(e, t) {
        return {
            "--zoom-ms": `${(0,l.zoomMs)(e)}ms`,
            "--zoom-fx": String(e.zoomFx),
            "--zoom-fy": String(e.zoomFy),
            "--ink-delay": `${Math.round((0,l.zoomMs)(e)*e.inkStart)}ms`,
            "--ink-fade": `${Math.round((0,l.zoomMs)(e)*e.inkLength)}ms`,
            "--spin-to": `${(0,l.spinDeg)(e)}deg`,
            "--spin-ease": (0, l.zoomShapeEase)(e),
            ..."zoom" === t ? {
                "--zoom-big-vw": String(e.zoomBigVw)
            } : null
        }
    }

    function d(e) {
        return {
            "--zoom-to": e.zoomTo.toFixed(2),
            "--zoom-ease": (0, l.zoomEase)(e)
        }
    }

    function u(e) {
        let t = Number.parseFloat(getComputedStyle(e).getPropertyValue("--big"));
        return !Number.isFinite(t) || t <= 0 ? null : {
            big: t,
            vw: window.innerWidth,
            vh: window.innerHeight
        }
    }
    let m = {
        panels: {
            needsGeometry: !0,
            exitMs: e => 220 + (e - 1) * 45 + 300 + 300
        },
        split: {
            needsGeometry: !1,
            exitMs: () => 1220
        },
        zoom: {
            needsGeometry: !1,
            exitMs: () => 0
        }
    };
    e.s(["default", 0, function({
        size: e,
        variant: c = "panels",
        brand: f = "field",
        tuning: v,
        canvasSelector: h = "[data-hero-bg-source] canvas",
        theme: p,
        waitsForPlate: w = !0
    }) {
        let [g] = (0, r.useState)(() => !v && (0, n.hasNavigated)()), [y] = (0, r.useState)(() => !1), [E, x] = (0, r.useState)(null), [b] = (0, r.useState)(() => v ? ? (0, l.readLoaderTuning)());
        (0, r.useEffect)(() => {
            let e = S.current;
            if (!e) return;
            let t = s(b, c);
            for (let r of Object.keys(t)) e.style.setProperty(r, t[r]);
            let {
                theme: r,
                ground: n
            } = (0, l.themeAttrs)(p ? { ...b,
                theme: p
            } : b);
            e.setAttribute("data-theme", r), e.setAttribute("data-ground", n), "off" === b.spin ? e.removeAttribute("data-spin") : e.setAttribute("data-spin", "")
        }, [b, c]), (0, r.useEffect)(() => {
            let e = S.current;
            if (!e) return;
            let t = u(e);
            if (!t) return;
            let r = d((0, l.resolveTuning)(b, t));
            for (let t of Object.keys(r)) e.style.setProperty(t, r[t])
        }, [b]), (0, r.useEffect)(() => {
            if (!y) return;
            let e = S.current;
            if (!e) return;
            e.setAttribute("data-scrubbing", "");
            let t = () => u(e) ? ? {
                    big: 1,
                    vw: 1,
                    vh: 1
                },
                r = (0, l.resolveTuning)(b, t()),
                n = 0,
                i = () => {
                    let t = (0, l.frameAt)(n, r);
                    e.style.setProperty("--fill", t.fill.toFixed(4)), e.style.setProperty("--zoom", t.zoom.toFixed(4)), e.style.setProperty("--spin", `${t.spin.toFixed(3)}deg`);
                    let i = e.querySelector("[data-zoom-ink]");
                    i && (i.style.opacity = t.ink.toFixed(4))
                },
                o = window;
            return o.__loaderTotalMs = (0, l.totalMs)(b), o.__loaderScrub = e => {
                n = e, i()
            }, o.__loaderSetTuning = n => {
                let a = t();
                r = (0, l.resolveTuning)(n, a), o.__loaderTotalMs = (0, l.totalMs)(n);
                let u = { ...s(n, c),
                    ...d(r)
                };
                for (let t of Object.keys(u)) e.style.setProperty(t, u[t]);
                let m = (0, l.themeAttrs)(n);
                e.setAttribute("data-theme", m.theme), e.setAttribute("data-ground", m.ground), "off" === n.spin ? e.removeAttribute("data-spin") : e.setAttribute("data-spin", ""), o.__loaderZoom = { ...(0, l.zoomNeed)(n, a),
                    end: r.zoomTo,
                    geo: a
                }, i()
            }, o.__loaderScrub(0), () => {
                delete o.__loaderScrub, delete o.__loaderSetTuning, delete o.__loaderTotalMs
            }
        }, [y, b, c]);
        let [A, L] = (0, r.useState)(!1), [M, z] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
            if ("zoom" !== c || g) return;
            let e = document.documentElement;
            return e.dataset.instantReveal = "", e.dataset.heroTitle = "", () => {
                delete e.dataset.instantReveal
            }
        }, [c, g]);
        let [T, _] = (0, r.useState)(!1), F = (0, r.useRef)([]), S = (0, r.useRef)(null), $ = (0, r.useRef)(null);
        return ((0, r.useEffect)(() => {
            if (g) return;
            null !== $.current && (clearTimeout($.current), $.current = null);
            let t = (e, t) => {
                    F.current.push(window.setTimeout(t, e))
                },
                r = document.documentElement.style.overflow;
            document.documentElement.style.overflow = "hidden";
            let n = new Set([" ", "PageDown", "PageUp", "End", "Home", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]),
                i = e => {
                    e.cancelable && e.preventDefault()
                },
                s = e => {
                    n.has(e.key) && e.cancelable && e.preventDefault()
                },
                d = {
                    passive: !1,
                    capture: !0
                };
            window.addEventListener("wheel", i, d), window.addEventListener("touchmove", i, d), window.addEventListener("keydown", s, d);
            let u = !1,
                f = !1,
                v = () => {
                    u || (u = !0, document.documentElement.style.overflow = r, window.removeEventListener("wheel", i, d), window.removeEventListener("touchmove", i, d), window.removeEventListener("keydown", s, d))
                },
                p = () => {
                    document.documentElement.dataset.loaded = "", document.documentElement.dataset.heroTitle = "", f = !0
                },
                E = new Promise(e => t(Math.min(1e3, (0, l.tideMs)(b)), e)),
                A = new Promise(e => t(4e3, e)),
                M = new Promise(e => {
                    if (!w) return e();
                    let t = new Image;
                    t.crossOrigin = "anonymous";
                    let r = !1,
                        n = () => e();
                    t.onload = n, t.onerror = () => {
                        if (r) return n();
                        r = !0, t.src = a.HERO_PLATE_FALLBACK
                    }, t.src = a.HERO_PLATE, t.decode ? .().then(n, () => {})
                }),
                T = new Promise(e => {
                    if (!m[c].needsGeometry) return e();
                    let r = () => {
                        let n = document.querySelector(h);
                        if (n && n.width > 0 && n.height > 0) return e();
                        t(100, r)
                    };
                    r()
                }),
                k = !1,
                P = (0, l.tideMs)(b),
                j = 610 * ("zoom" === c && !window.matchMedia("(prefers-reduced-motion: reduce)").matches),
                N = Math.max(400, P - j),
                R = 0,
                C = !1,
                I = null,
                q = 0,
                O = performance.now(),
                H = e => {
                    S.current ? .style.setProperty("--fill", e.toFixed(4))
                },
                D = e => {
                    if (k) return;
                    let t = Math.min((e - O) / 1e3, .05);
                    if (O = e, j) {
                        let t = window.__loaderEnterAt;
                        if (void 0 === t || e < t + j) {
                            q = requestAnimationFrame(D);
                            return
                        }
                    }
                    R = Math.min(1, R + 1e3 * t / N);
                    let r = C ? R : Math.min(R, .9);
                    if (C && R >= 1) {
                        H(1);
                        let e = I;
                        I = null, e ? .();
                        return
                    }
                    H((0, l.tideProgress)(r, b)), q = requestAnimationFrame(D)
                };
            return H(0), y || (q = requestAnimationFrame(D)), Promise.race([Promise.all([E, M, T]).then(() => void 0), A]).then(() => {
                if (k) return;
                let r = window.innerWidth,
                    n = m[c].needsGeometry ? document.querySelector(h) : null,
                    i = n ? (0, o.fluteGeometry)(n, e, a.HERO_PLATE_ASPECT, r) : null,
                    s = i && i.edges.length > 2 ? i.edges : [0, r],
                    d = [];
                for (let e = 0; e < s.length - 1; e++) {
                    let t = s[e];
                    d.push({
                        left: t,
                        width: s[e + 1] - t
                    })
                }
                x(d);
                let u = !1,
                    p = () => {
                        !u && (u = !0, k || ("zoom" === c ? L(!0) : (z(!0), t(220, () => {
                            k || L(!0)
                        })), t("zoom" === c ? 2 * (0, l.zoomMs)(b) / 3 : 220 + 2e3 / 3, () => {
                            k || (document.documentElement.dataset.heroTitle = "")
                        }), t(("zoom" === c ? (0, l.exitMs)(b) : m[c].exitMs(d.length)) + 40, () => {
                            k || (v(), document.documentElement.dataset.loaded = "", document.documentElement.dataset.heroTitle = "", f = !0, _(!0))
                        })))
                    };
                C = !0, y || (I = p, t(P + 600, p))
            }), () => {
                k = !0, cancelAnimationFrame(q), F.current.forEach(clearTimeout), F.current = [], v(), f || ($.current = window.setTimeout(p, 0))
            }
        }, [e, c, h, g]), g || T) ? null : (0, t.jsxs)("div", {
            ref: S,
            className: `${i.default.overlay} ${A?i.default.overlayLifting:""}`,
            style: {
                "--fill": 0,
                ...s(b, c)
            },
            "data-theme": (0, l.themeAttrs)(p ? { ...b,
                theme: p
            } : b).theme,
            "data-ground": (0, l.themeAttrs)(p ? { ...b,
                theme: p
            } : b).ground,
            ..."off" === b.spin ? null : {
                "data-spin": ""
            },
            role: "status",
            "aria-live": "polite",
            "aria-label": "Loading",
            "data-loader-overlay": "",
            "data-brand": f,
            "data-variant": c,
            children: ["field" === f && (0, t.jsx)("div", {
                className: i.default.pattern,
                "aria-hidden": "true"
            }), "split" === c && E && (0, t.jsxs)("div", {
                className: i.default.panels,
                "aria-hidden": "true",
                children: [(0, t.jsx)("div", {
                    className: `${i.default.splitHalf} ${i.default.splitTop} ${A?i.default.splitLifting:""}`
                }), (0, t.jsx)("div", {
                    className: `${i.default.splitHalf} ${i.default.splitBottom} ${A?i.default.splitLifting:""}`
                })]
            }), "panels" === c && E && (0, t.jsx)("div", {
                className: i.default.panels,
                "aria-hidden": "true",
                children: E.map((e, r) => (0, t.jsx)("div", {
                    className: `${i.default.panel} ${A?i.default.panelLifting:""}`,
                    style: {
                        left: `${e.left}px`,
                        width: `${e.width}px`,
                        "--panel-delay": `${45*r}ms`,
                        "--pat-x": `${-e.left}px`
                    },
                    children: (0, t.jsx)("div", {
                        className: i.default.panelTrail
                    })
                }, r))
            }), "zoom" === c && ("field" === f || "mark" === f) && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: i.default.zoomCover,
                    "aria-hidden": "true"
                }), (0, t.jsx)("div", {
                    className: `${i.default.zoomInk} ${i.default.zoomInkMain} ${A?i.default.zoomInkLeaving:""}`,
                    "aria-hidden": "true",
                    "data-zoom-ink": ""
                }), (0, t.jsx)("div", {
                    className: `${i.default.enterClip} ${i.default.enterClipA}`,
                    "aria-hidden": "true",
                    children: (0, t.jsx)("div", {
                        className: i.default.zoomInk
                    })
                }), (0, t.jsx)("div", {
                    className: `${i.default.enterClip} ${i.default.enterClipB}`,
                    "aria-hidden": "true",
                    children: (0, t.jsx)("div", {
                        className: i.default.zoomInk
                    })
                })]
            }), "zoom" !== c && ("field" === f || "mark" === f) && (0, t.jsx)("div", {
                className: `${i.default.bigMark} ${M?i.default.bigMarkLeaving:""}`,
                "aria-hidden": "true"
            }), "wordmark" === f && (0, t.jsx)("span", {
                className: `${i.default.mark} ${M?i.default.markLeaving:""}`,
                children: "Arshawn Arbabi"
            })]
        })
    }])
}, 58614, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(93494),
        i = e.i(79318),
        o = e.i(58087),
        a = e.i(45396);
    let l = a.FLUID_DEFAULT,
        s = new Set;

    function d() {
        return l
    }

    function u() {
        return a.FLUID_DEFAULT
    }

    function m(e) {
        return s.add(e), () => {
            s.delete(e)
        }
    }
    e.s(["default", 0, function({
        src: e
    }) {
        let a = (0, i.default)(),
            l = (0, r.useSyncExternalStore)(m, d, u),
            [s, c] = (0, r.useState)(null);
        return (!0 === a && null === s && c((0, n.readQuality)()), !1 === a && null !== s && c(null), !0 !== a || null === s || s >= n.PICTURE_WATER_OFF) ? null : (0, t.jsx)(o.default, {
            src: e,
            settings: l
        })
    }], 58614)
}, 84236, e => {
    e.v({
        cursor: "WorkCursor-module__roho0q__cursor",
        label: "WorkCursor-module__roho0q__label"
    })
}, 81453, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(79318);
    e.i(97379);
    var i = e.i(72804),
        o = e.i(43861),
        a = e.i(84236),
        l = e.i(14149);
    e.s(["default", 0, function({
        label: e = "View"
    }) {
        let s = (0, r.useRef)(null),
            d = (0, n.default)();
        return ((0, r.useEffect)(() => {
            let e = s.current;
            if (!e || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
            let t = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                r = -200,
                n = -200,
                i = -200,
                o = -200,
                a = !1,
                d = !1,
                u = 0,
                m = 0,
                c = 0,
                f = !0,
                v = null,
                h = t => {
                    t !== d && (d = t, t ? (v = document.elementFromPoint(r, n) ? .closest("[data-work-link]") ? ? null, (0, l.navHover)({
                        pointerType: "mouse",
                        currentTarget: v
                    })) : ((0, l.navLeave)({
                        currentTarget: v
                    }), v = null), t ? (i = r, o = n, w(), e.setAttribute("data-on", "")) : (e.removeAttribute("data-on"), e.style.filter = ""))
                },
                p = () => {
                    if (!a) return;
                    let e = document.elementFromPoint(r, n);
                    h(!!e ? .closest ? .("[data-work-link]"))
                },
                w = () => {
                    e.style.setProperty("--x", `${i.toFixed(1)}px`), e.style.setProperty("--y", `${o.toFixed(1)}px`)
                },
                g = () => {
                    let t = (r - i) * .13,
                        a = (n - o) * .13;
                    i += t, o += a;
                    let l = Math.min(1.6, .09 * Math.hypot(t, a));
                    e.style.filter = l > .12 ? `blur(${l.toFixed(2)}px)` : "";
                    let s = Math.abs(r - i) + Math.abs(n - o);
                    s < .05 && (i = r, o = n), w();
                    let d = Math.max(-6, Math.min(6, 7 * (u *= .86)));
                    .01 > Math.abs(m += (d - m) * .16) && .01 > Math.abs(d) && s < .05 && (m = 0, f = !0), e.style.setProperty("--rot", `${m.toFixed(2)}deg`), f || (c = requestAnimationFrame(g))
                },
                y = 0,
                E = e => {
                    let i = e.timeStamp,
                        o = y ? i - y : 0;
                    o > 0 && o < 100 && a && (u = (e.clientX - r) / o), y = i, r = e.clientX, n = e.clientY, a = !0, p(), f && !t && (f = !1, c = requestAnimationFrame(g))
                },
                x = () => {
                    p()
                },
                b = e => {
                    null === e.relatedTarget && h(!1)
                },
                A = () => {
                    d && (e.setAttribute("data-press", ""), (0, l.navPress)())
                },
                L = () => e.removeAttribute("data-press");
            return document.addEventListener("pointermove", E, {
                passive: !0
            }), document.addEventListener("pointerout", b, {
                passive: !0
            }), document.addEventListener("pointerdown", A, {
                passive: !0
            }), window.addEventListener("pointerup", L, {
                passive: !0
            }), window.addEventListener("pointercancel", L, {
                passive: !0
            }), window.addEventListener("scroll", x, {
                passive: !0
            }), window.addEventListener("resize", x, {
                passive: !0
            }), () => {
                document.removeEventListener("pointermove", E), document.removeEventListener("pointerout", b), document.removeEventListener("pointerdown", A), window.removeEventListener("pointerup", L), window.removeEventListener("pointercancel", L), window.removeEventListener("scroll", x), window.removeEventListener("resize", x), cancelAnimationFrame(c)
            }
        }, [d]), !0 !== d) ? null : (0, t.jsxs)("div", {
            ref: s,
            className: a.default.cursor,
            "aria-hidden": "true",
            children: [(0, t.jsx)("span", {
                className: a.default.label,
                children: e
            }), (0, t.jsx)(i.HugeiconsIcon, {
                icon: o.ArrowRight02Icon,
                size: 24,
                strokeWidth: 1.5
            })]
        })
    }])
}, 87429, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["default", 0, function() {
        return (0, t.useEffect)(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let e = Array.from(document.querySelectorAll("[data-work-media]"));
            if (!e.length) return;
            let t = !1,
                r = 0,
                n = () => {
                    t = !1;
                    let r = window.innerHeight || 1;
                    for (let t of e) {
                        let e = t.getBoundingClientRect(),
                            n = r + e.height,
                            i = Math.min(1, Math.max(0, (r - e.top) / (n || 1)));
                        t.style.setProperty("--img-p", i.toFixed(3))
                    }
                },
                i = () => {
                    t || (t = !0, r = requestAnimationFrame(n))
                };
            window.addEventListener("scroll", i, {
                passive: !0
            }), window.addEventListener("resize", i, {
                passive: !0
            });
            let o = new ResizeObserver(i);
            return e.forEach(e => o.observe(e)), n(), () => {
                window.removeEventListener("scroll", i), window.removeEventListener("resize", i), o.disconnect(), cancelAnimationFrame(r)
            }
        }, []), null
    }])
}, 92306, e => {
    "use strict";

    function t(e, t, r, n, i, o) {
        if (!(e > 0 && t > 0 && r > 0 && o > 0)) return null;
        let a = Math.max(e / o, t) * o,
            l = e / a * (200 + -195 * i);
        return l > .5 ? {
            period: r / l,
            count: l,
            anchor: n + r / 2
        } : null
    }
    e.s(["fluteGeometry", 0, function(e, r, n, i) {
        let o = e.getBoundingClientRect(),
            a = t(e.width, e.height, o.width, o.left, r, n);
        if (!a) return null;
        let {
            period: l,
            count: s,
            anchor: d
        } = a, u = window.devicePixelRatio || 1, m = e => Math.round(e * u) / u, c = [0], f = d - Math.ceil((d - 0) / l) * l;
        for (let e = f; e <= i + l; e += l) e > 1 && e < i - 1 && c.push(m(e));
        return c.push(i), {
            period: l,
            count: s,
            anchor: d,
            edges: c
        }
    }, "flutePeriod", 0, t])
}]);