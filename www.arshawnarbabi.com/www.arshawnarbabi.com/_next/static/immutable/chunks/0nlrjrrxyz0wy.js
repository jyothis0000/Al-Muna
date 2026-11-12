(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 25387, e => {
    e.v({
        a: "Faq-module__EHB7zG__a",
        grid: "Faq-module__EHB7zG__grid",
        heading: "Faq-module__EHB7zG__heading",
        item: "Faq-module__EHB7zG__item",
        list: "Faq-module__EHB7zG__list",
        panel: "Faq-module__EHB7zG__panel",
        panelInner: "Faq-module__EHB7zG__panelInner",
        q: "Faq-module__EHB7zG__q",
        section: "Faq-module__EHB7zG__section",
        sign: "Faq-module__EHB7zG__sign",
        signBar: "Faq-module__EHB7zG__signBar",
        signPivot: "Faq-module__EHB7zG__signPivot",
        term: "Faq-module__EHB7zG__term",
        trigger: "Faq-module__EHB7zG__trigger"
    })
}, 81024, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(71645);
    e.i(97379);
    var r = e.i(72804),
        n = e.i(43861),
        i = e.i(25387);
    e.s(["default", 0, function({
        q: e,
        a: s,
        defaultOpen: l = !1
    }) {
        let [o, d] = (0, a.useState)(l), c = (0, a.useId)(), u = `${c}-a`;
        return (0, t.jsxs)("div", {
            className: i.default.item,
            "data-open": o ? "" : void 0,
            children: [(0, t.jsx)("dt", {
                className: i.default.term,
                children: (0, t.jsxs)("button", {
                    type: "button",
                    className: i.default.trigger,
                    "data-faq-trigger": "",
                    "aria-expanded": o,
                    "aria-controls": u,
                    onClick: () => d(e => !e),
                    children: [(0, t.jsx)("span", {
                        className: i.default.q,
                        children: e
                    }), (0, t.jsxs)("span", {
                        className: i.default.sign,
                        "aria-hidden": "true",
                        children: [(0, t.jsx)(r.HugeiconsIcon, {
                            icon: n.MinusSignIcon,
                            size: 32,
                            strokeWidth: 1.5,
                            className: i.default.signBar
                        }), (0, t.jsx)(r.HugeiconsIcon, {
                            icon: n.MinusSignIcon,
                            size: 32,
                            strokeWidth: 1.5,
                            className: `${i.default.signBar} ${i.default.signPivot}`
                        })]
                    })]
                })
            }), (0, t.jsx)("dd", {
                id: u,
                className: i.default.panel,
                "data-faq-panel": "",
                children: (0, t.jsx)("div", {
                    className: i.default.panelInner,
                    children: (0, t.jsx)("p", {
                        className: i.default.a,
                        "data-faq-answer": "",
                        children: s
                    })
                })
            })]
        })
    }])
}, 1401, e => {
    e.v({
        dock: "GlassScaleSwitch-module__H4GNJq__dock",
        flip: "GlassScaleSwitch-module__H4GNJq__flip",
        hint: "GlassScaleSwitch-module__H4GNJq__hint",
        reveal: "GlassScaleSwitch-module__H4GNJq__reveal",
        size: "GlassScaleSwitch-module__H4GNJq__size"
    })
}, 73176, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(71645),
        r = e.i(1401),
        n = e.i(7096);
    e.s(["default", 0, function() {
        let [e, i] = (0, a.useState)(null), [s, l] = (0, a.useState)(!1), [o, d] = (0, a.useState)(""), [c, u] = (0, a.useState)(!1), [m] = (0, a.useState)(() => .5 > Math.random());
        if ((0, a.useEffect)(() => {
                let e = new URLSearchParams(window.location.search).get("glass");
                null !== e && (i("blind" === e ? "blind" : "open"), l("2" === e))
            }, []), (0, a.useEffect)(() => {
                e && (0, n.setGlassOverride)(s ? 2 : null)
            }, [e, s]), (0, a.useEffect)(() => {
                if (!e) return;
                let t = () => {
                    let e = document.querySelector("[data-hero-bg-source] canvas");
                    e && d(`${e.width} x ${e.height}`)
                };
                t();
                let a = window.setInterval(t, 500),
                    r = e => {
                        ("g" === e.key || "G" === e.key) && l(e => !e)
                    };
                return window.addEventListener("keydown", r), () => {
                    window.clearInterval(a), window.removeEventListener("keydown", r), (0, n.setGlassOverride)(null)
                }
            }, [e]), !e) return null;
        let f = "blind" !== e || c ? s ? "Glass 2x (before)" : "Glass 1.5x (shipped)" : `Glass ${s===m?"A":"B"}`;
        return (0, t.jsxs)("div", {
            className: r.default.dock,
            children: [(0, t.jsxs)("button", {
                type: "button",
                className: r.default.flip,
                onClick: () => l(e => !e),
                children: [f, (0, t.jsx)("span", {
                    className: r.default.hint,
                    children: "tap or G to flip"
                })]
            }), "open" === e && (0, t.jsx)("span", {
                className: r.default.size,
                children: o
            }), "blind" === e && (0, t.jsx)("button", {
                type: "button",
                className: r.default.reveal,
                onClick: () => u(e => !e),
                children: c ? `A was ${m?"2x, before":"1.5x, shipped"}` : "Reveal"
            })]
        })
    }])
}, 18419, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(71645),
        r = e.i(32955),
        n = e.i(92306),
        i = e.i(91338),
        s = e.i(11032),
        l = e.i(31283);
    e.s(["default", 0, function() {
        let e = (0, a.useRef)(null);
        return (0, a.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let a = (0, l.subscribeHeroScroll)(),
                r = 0,
                o = 0,
                d = () => {
                    let e = document.querySelector("[data-hero-bg-source] canvas"),
                        a = e ? (0, n.fluteGeometry)(e, (0, l.readFluteSize)(), s.HERO_PLATE_ASPECT, window.innerWidth) : null;
                    if (!a || !(a.period > 1)) return t.style.setProperty("--flute-line", "0px"), !1;
                    let r = 1 + 0 * (0, l.readPanelProgress)(),
                        o = a.period * ((0, i.isPhone)() ? 1 : 2),
                        d = ((a.anchor - r / 2) % o + o) % o;
                    return t.style.setProperty("--flute-tile", `${o.toFixed(3)}px`), t.style.setProperty("--flute-offset", `${d.toFixed(3)}px`), t.style.setProperty("--flute-line", `${r.toFixed(2)}px`), !0
                },
                c = (0, l.onHeroMeasure)(d),
                u = () => {
                    d() || ++o >= 30 || (r = requestAnimationFrame(u))
                };
            return u(), () => {
                cancelAnimationFrame(r), c(), a()
            }
        }, []), (0, t.jsx)("div", {
            ref: e,
            className: r.default.panelLines,
            "aria-hidden": "true"
        })
    }])
}, 84346, e => {
    "use strict";
    var t = e.i(71645),
        a = e.i(63090),
        r = e.i(91338);
    e.s(["default", 0, function({
        strength: e,
        pitchStrength: n,
        ease: i
    }) {
        return (0, t.useEffect)(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            if (!(0, r.isFinePointer)()) {
                let t = document.getElementById("hero");
                if (!t) return;
                let a = (e, a) => ({
                        s: a,
                        els: [...document.querySelectorAll(e)].filter(e => t.contains(e))
                    }),
                    r = [a("[data-parallax-target]", e), a("[data-parallax-pitch]", n)].filter(e => e.els.length > 0);
                if (0 === r.length) return;
                let i = 0,
                    s = !1,
                    l = r.map(() => ""),
                    o = () => {
                        s = !1;
                        let e = t.getBoundingClientRect(),
                            a = e.height || 1,
                            n = Math.min(1, Math.max(0, -e.top / a));
                        r.forEach((e, t) => {
                            let a = `translate3d(0px, ${(n*e.s).toFixed(2)}px, 0)`;
                            a !== l[t] && (l[t] = a, e.els.forEach(e => {
                                e.style.transform = a
                            }))
                        })
                    },
                    d = () => {
                        s || (s = !0, i = requestAnimationFrame(o))
                    };
                return o(), window.addEventListener("scroll", d, {
                    passive: !0
                }), window.addEventListener("resize", d, {
                    passive: !0
                }), () => {
                    cancelAnimationFrame(i), window.removeEventListener("scroll", d), window.removeEventListener("resize", d), r.forEach(e => e.els.forEach(e => {
                        e.style.transform = ""
                    }))
                }
            }
            let t = (e, t) => {
                    let a = [...document.querySelectorAll(e)];
                    return {
                        s: t,
                        n: a.length,
                        direct: a.filter(e => !e.hasAttribute("data-parallax-compose")),
                        composed: a.filter(e => e.hasAttribute("data-parallax-compose"))
                    }
                },
                s = [t("[data-parallax-target]", e), t("[data-parallax-pitch]", n)].filter(e => e.n > 0);
            if (0 === s.length) return;
            let l = (0, a.subscribePointer)(),
                o = s.map(() => ({
                    x: 0,
                    y: 0
                })),
                d = s.map(() => ""),
                c = !1,
                u = 0,
                m = () => {
                    c || (c = !0, u = requestAnimationFrame(f))
                },
                f = () => {
                    let e = (0, a.readPointer)(),
                        t = Math.min(1, Math.max(.001, i)),
                        r = !1;
                    if (s.forEach((a, n) => {
                            let i = o[n],
                                s = i.x,
                                l = i.y;
                            i.x += (e.nx * a.s - i.x) * t, i.y += (e.ny * a.s - i.y) * t, (i.x !== s || i.y !== l) && (r = !0);
                            let c = `translate3d(${i.x.toFixed(2)}px, ${i.y.toFixed(2)}px, 0)`;
                            if (c !== d[n] && (d[n] = c, a.direct.forEach(e => {
                                    e.style.transform = c
                                }), a.composed.length > 0)) {
                                let e = `${i.x.toFixed(2)}px`,
                                    t = `${i.y.toFixed(2)}px`;
                                a.composed.forEach(a => {
                                    a.style.setProperty("--par-x", e), a.style.setProperty("--par-y", t)
                                })
                            }
                        }), !r) {
                        c = !1, u = 0;
                        return
                    }
                    u = requestAnimationFrame(f)
                },
                h = (0, a.onPointerMove)(m);
            return m(), () => {
                cancelAnimationFrame(u), h(), l(), s.forEach(e => {
                    e.direct.forEach(e => {
                        e.style.transform = ""
                    }), e.composed.forEach(e => {
                        e.style.removeProperty("--par-x"), e.style.removeProperty("--par-y")
                    })
                })
            }
        }, [e, n, i]), null
    }])
}, 44963, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(70703),
        r = e.i(71645),
        n = e.i(91338);
    let i = (0, a.default)(() => e.A(71259), {
            loadableGenerated: {
                modules: [48025]
            },
            ssr: !1
        }),
        s = (0, a.default)(() => e.A(18814), {
            loadableGenerated: {
                modules: [80616]
            },
            ssr: !1
        });
    e.s(["default", 0, function(e) {
        let a = function() {
                let [e, t] = (0, r.useState)(null);
                return (0, r.useEffect)(() => {
                    let e = window.matchMedia(n.PHONE_QUERY),
                        a = window.matchMedia(n.FINE_POINTER_QUERY),
                        r = () => t((0, n.isPhone)());
                    return r(), e.addEventListener("change", r), a.addEventListener("change", r), () => {
                        e.removeEventListener("change", r), a.removeEventListener("change", r)
                    }
                }, []), e
            }(),
            [l, o] = function(e) {
                let [t, a] = (0, r.useState)(null);
                return (0, r.useEffect)(() => {
                    let t = (new URLSearchParams(window.location.search).get("perf-off") ? ? "").split(",").map(e => e.trim()).includes("title-lens"),
                        r = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                        n = window.matchMedia("(forced-colors: active)").matches,
                        i = e.dispersion <= 0 && 2 >= Math.round(e.trail);
                    a(!t && !r && !n && i && "u" > typeof WebGL2RenderingContext)
                }, [e.dispersion, e.trail]), [t, (0, r.useCallback)(() => a(!1), [])]
            }(e);
        return !1 !== a || null === l ? null : l ? (0, t.jsx)(s, { ...e,
            onFail: o
        }) : (0, t.jsx)(i, { ...e
        })
    }], 44963)
}, 23467, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(70703),
        r = e.i(71645);
    let n = (0, a.default)(() => e.A(34162), {
        loadableGenerated: {
            modules: [1426]
        },
        ssr: !1
    });
    e.s(["default", 0, function({
        t: e
    }) {
        let a = (0, r.useRef)(null),
            [i, s] = (0, r.useState)({
                w: 0,
                h: 0
            });
        return (0, r.useEffect)(() => {
            let e = a.current;
            if (!e) return;
            let t = (e, t) => {
                    s(a => a.w === Math.round(e) && a.h === Math.round(t) ? a : {
                        w: Math.round(e),
                        h: Math.round(t)
                    })
                },
                r = e.getBoundingClientRect();
            t(r.width, r.height);
            let n = new ResizeObserver(([e]) => t(e.contentRect.width, e.contentRect.height));
            return n.observe(e), () => n.disconnect()
        }, []), (0, t.jsx)("div", {
            ref: a,
            style: {
                position: "absolute",
                inset: 0,
                pointerEvents: "none"
            },
            children: i.w > 0 && i.h > 0 ? (0, t.jsx)(n, {
                t: e,
                width: i.w,
                height: i.h
            }) : null
        })
    }])
}, 86736, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["default", 0, function({
        selector: e
    }) {
        return (0, t.useEffect)(() => {
            let t = new WeakSet,
                a = e => {
                    t.has(e) || (t.add(e), e.decode().catch(() => void 0))
                },
                r = new IntersectionObserver(e => {
                    for (let t of e) {
                        if (!t.isIntersecting) continue;
                        let e = t.target;
                        r.unobserve(e), e.complete && e.naturalWidth > 0 ? a(e) : e.addEventListener("load", () => a(e), {
                            once: !0
                        })
                    }
                }, {
                    rootMargin: "200% 0px"
                });
            return document.querySelectorAll(e).forEach(e => r.observe(e)), () => r.disconnect()
        }, [e]), null
    }])
}, 13160, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(71645),
        r = e.i(63090);
    let n = new Map,
        i = 0,
        s = !1,
        l = 0;

    function o() {
        s = !1;
        let e = window.innerHeight || 1;
        for (let t of n.values()) {
            let a = t.el.getBoundingClientRect(),
                r = e + a.height;
            t.p = Math.min(1, Math.max(0, (e - a.top) / (r || 1))), t.el.style.setProperty("--mark-p", t.p.toFixed(3))
        }
    }

    function d() {
        s || (s = !0, l = requestAnimationFrame(o))
    }
    var c = e.i(70260);
    e.s(["default", 0, function() {
        let u = (0, a.useRef)(null);
        return (0, a.useEffect)(() => {
            let t, a = u.current;
            if (!a) return;
            let m = a.closest("[data-mark-media]") ? ? a,
                f = (n.set(m, {
                    el: m,
                    p: .5
                }), 0 === i && (window.addEventListener("scroll", d, {
                    passive: !0
                }), window.addEventListener("resize", d, {
                    passive: !0
                })), i += 1, o(), t = !1, () => {
                    t || (t = !0, n.delete(m), 0 == (i -= 1) && (cancelAnimationFrame(l), s = !1, window.removeEventListener("scroll", d), window.removeEventListener("resize", d)))
                }),
                h = !1,
                p = null,
                _ = async () => {
                    let [t, i] = await Promise.all([e.A(21442), e.A(56946)]);
                    if (h) return;
                    let s = await fetch("/mark-3d/implementation-1.json").then(e => e.json());
                    if (h) return;
                    let l = document.createElement("canvas");
                    l.className = c.default.canvas, a.appendChild(l);
                    let o = new t.WebGLRenderer({
                        canvas: l,
                        alpha: !0,
                        antialias: !0,
                        powerPreference: "high-performance"
                    });
                    o.setClearAlpha(0), o.toneMapping = t.NoToneMapping, o.outputColorSpace = t.SRGBColorSpace;
                    let d = await i.buildScene(o, s, {
                        svgUrl: "/mark-3d/mark.svg",
                        stickerUrl: e => "/mark-3d/sticker/" + e.split("/").pop()
                    });
                    if (h) {
                        o.forceContextLoss(), o.dispose(), d.dispose();
                        return
                    }
                    let u = (0, r.subscribePointer)(),
                        f = (0, r.prefersReducedMotion)(),
                        _ = !0,
                        w = 0,
                        x = 0,
                        v = 0,
                        g = 0,
                        E = () => {
                            if (!v || !g || v === w && g === x) return;
                            w = v, x = g;
                            let e = Math.min(window.devicePixelRatio || 1, 2);
                            o.setPixelRatio(e), o.setSize(w, x, !1), d.camera.aspect = w / Math.max(x, 1), d.fitCamera(d.camera.aspect), _ = !0
                        }; {
                        let e = a.getBoundingClientRect();
                        v = e.width, g = e.height
                    }
                    E();
                    let y = 0,
                        b = 0,
                        k = .9299999999999999,
                        F = NaN,
                        N = NaN,
                        S = NaN,
                        j = performance.now(),
                        q = 0,
                        M = !0,
                        G = e => {
                            if (h) return;
                            q = requestAnimationFrame(G);
                            let t = Math.min((e - j) / 1e3, .1);
                            if (j = e, !M) return;
                            E();
                            let a = ((n.get(m) ? .p ? ? .5) - .5) * 2,
                                i = -(.42 * a),
                                s = .1 * a;
                            if (!f) {
                                let e = (0, r.readPointer)();
                                e.seen && (i += .16 * e.nx, s += .12 * e.ny)
                            }
                            let l = 1 - .07 * Math.abs(a),
                                c = f ? 1 : 1 - Math.exp(-6.5 * t);
                            y += (i - y) * c, b += (s - b) * c, k += (l - k) * c, d.group.rotation.set(b, y, 0), d.group.scale.setScalar(k), d.updateSway(t) && (_ = !0), (Math.abs(y - F) > 1e-9 || Math.abs(b - N) > 1e-9 || Math.abs(k - S) > 1e-9) && (_ = !0), _ && (_ = !1, F = y, N = b, S = k, o.render(d.scene, d.camera))
                        };
                    try {
                        await o.compileAsync(d.scene, d.camera)
                    } catch {}
                    if (h) {
                        u(), d.dispose(), o.forceContextLoss(), o.dispose(), l.remove();
                        return
                    }
                    q = requestAnimationFrame(G);
                    let A = new IntersectionObserver(e => {
                        (M = e[0].isIntersecting) && (_ = !0)
                    }, {
                        rootMargin: "200px 0px"
                    });
                    A.observe(a);
                    let P = new ResizeObserver(e => {
                        let t = e[0] ? .contentRect;
                        t && (v = t.width, g = t.height)
                    });
                    P.observe(a), a.dataset.ready = "true", p = () => {
                        cancelAnimationFrame(q), A.disconnect(), P.disconnect(), u(), d.dispose(), o.forceContextLoss(), o.dispose(), l.remove()
                    }
                },
                w = !1,
                x = 0,
                v = 0,
                g = () => {
                    w || h || (w = !0, E.disconnect(), _().catch(() => {}))
                },
                E = new IntersectionObserver(e => {
                    e[0].isIntersecting && g()
                }, {
                    rootMargin: "100% 0px"
                });
            E.observe(a);
            let y = window;
            return v = window.setTimeout(() => {
                y.requestIdleCallback ? x = y.requestIdleCallback(g, {
                    timeout: 4e3
                }) : g()
            }, 2500), () => {
                h = !0, clearTimeout(v), x && y.cancelIdleCallback && y.cancelIdleCallback(x), E.disconnect(), f(), p ? .()
            }
        }, []), (0, t.jsx)("div", {
            ref: u,
            className: c.default.stage,
            "aria-hidden": "true"
        })
    }], 13160)
}, 70260, e => {
    e.v({
        canvas: "MarkShowcase-module__an9uhG__canvas",
        frame: "MarkShowcase-module__an9uhG__frame",
        markDrift: "MarkShowcase-module__an9uhG__markDrift",
        section: "MarkShowcase-module__an9uhG__section",
        stage: "MarkShowcase-module__an9uhG__stage"
    })
}, 18168, e => {
    e.v({
        caption: "WorkCaption-module__TVxDpW__caption",
        facts: "WorkCaption-module__TVxDpW__facts",
        line: "WorkCaption-module__TVxDpW__line",
        meta: "WorkCaption-module__TVxDpW__meta",
        metaItem: "WorkCaption-module__TVxDpW__metaItem",
        metaLabel: "WorkCaption-module__TVxDpW__metaLabel",
        metaValue: "WorkCaption-module__TVxDpW__metaValue",
        title: "WorkCaption-module__TVxDpW__title",
        view: "WorkCaption-module__TVxDpW__view",
        viewLabel: "WorkCaption-module__TVxDpW__viewLabel"
    })
}, 84937, e => {
    e.v({
        captionAfter: "WorkFeature-module__I5KD3q__captionAfter",
        frame: "WorkFeature-module__I5KD3q__frame",
        media: "WorkFeature-module__I5KD3q__media",
        panel: "WorkFeature-module__I5KD3q__panel",
        runway: "WorkFeature-module__I5KD3q__runway",
        stage: "WorkFeature-module__I5KD3q__stage"
    })
}, 23880, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(57688),
        r = e.i(9960),
        n = e.i(71645),
        i = e.i(84937),
        s = e.i(58614),
        l = e.i(18168),
        o = e.i(83350);

    function d({
        project: e
    }) {
        return (0, t.jsxs)("div", {
            className: l.default.caption,
            children: [(0, t.jsx)("h3", {
                className: l.default.title,
                children: e.label
            }), (0, t.jsx)("p", {
                className: l.default.line,
                children: e.one_line
            }), (0, t.jsxs)("div", {
                className: l.default.facts,
                children: [(0, t.jsxs)("dl", {
                    className: l.default.meta,
                    children: [(0, t.jsxs)("div", {
                        className: l.default.metaItem,
                        children: [(0, t.jsx)("dt", {
                            className: l.default.metaLabel,
                            children: "Year"
                        }), (0, t.jsx)("dd", {
                            className: l.default.metaValue,
                            children: e.year
                        })]
                    }), (0, t.jsxs)("div", {
                        className: l.default.metaItem,
                        children: [(0, t.jsx)("dt", {
                            className: l.default.metaLabel,
                            children: "Role"
                        }), (0, t.jsx)("dd", {
                            className: l.default.metaValue,
                            children: e.role
                        })]
                    })]
                }), (0, t.jsx)(o.default, {})]
            })]
        })
    }
    var c = e.i(1075);
    e.s(["default", 0, function({
        project: e
    }) {
        let l = (0, n.useRef)(null);
        return (0, n.useEffect)(() => {
            let e = l.current;
            if (!e || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let t = 0,
                a = 0,
                r = !0,
                n = e.querySelector("[data-stage]"),
                i = 0,
                s = () => {
                    i = n && parseFloat(getComputedStyle(n).insetBlockStart) || 0
                };
            s();
            let o = () => {
                    let n = e.getBoundingClientRect().top,
                        s = window.innerHeight || 1,
                        l = 1.5 * Math.max(0, 280 - (n - i)),
                        d = (0, c.morphTarget)(l, .28, 140),
                        u = Math.min(1, Math.max(0, (s - n) / Math.max(1, s - i)));
                    t += (d - t) * .09, Math.abs(d - t) < c.SETTLED && (t = d, r = !0), e.style.setProperty("--p", t.toFixed(4)), e.style.setProperty("--entry", u.toFixed(4)), r || (a = requestAnimationFrame(o))
                },
                d = () => {
                    r && (r = !1, a = requestAnimationFrame(o))
                },
                u = () => {
                    s(), d()
                };
            return window.addEventListener("scroll", d, {
                passive: !0
            }), window.addEventListener("resize", u, {
                passive: !0
            }), d(), () => {
                window.removeEventListener("scroll", d), window.removeEventListener("resize", u), cancelAnimationFrame(a)
            }
        }, []), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                ref: l,
                className: i.default.runway,
                children: (0, t.jsx)("div", {
                    className: i.default.stage,
                    "data-stage": "",
                    children: (0, t.jsx)(r.default, {
                        href: `/work/${e.slug}`,
                        className: i.default.panel,
                        "aria-label": e.label,
                        children: (0, t.jsxs)("span", {
                            className: i.default.frame,
                            "data-work-link": "",
                            "data-work-media": "",
                            "data-ptr-parallax": "",
                            children: [(0, t.jsx)(a.default, {
                                src: e.image,
                                alt: "",
                                width: 2400,
                                height: 1500,
                                sizes: "100vw",
                                className: i.default.media,
                                "aria-hidden": "true"
                            }), (0, t.jsx)(s.default, {
                                src: e.image
                            })]
                        })
                    })
                })
            }), (0, t.jsx)(r.default, {
                href: `/work/${e.slug}`,
                className: i.default.captionAfter,
                children: (0, t.jsx)(d, {
                    project: e
                })
            })]
        })
    }], 23880)
}, 83350, e => {
    "use strict";
    var t = e.i(43476);
    e.i(97379);
    var a = e.i(72804),
        r = e.i(43861),
        n = e.i(14149),
        i = e.i(18168);
    e.s(["default", 0, function() {
        return (0, t.jsxs)("span", {
            className: i.default.view,
            ...n.navSoundProps,
            children: [(0, t.jsx)("span", {
                className: i.default.viewLabel,
                children: "View"
            }), (0, t.jsx)(a.HugeiconsIcon, {
                icon: r.ArrowRight02Icon,
                size: 20,
                strokeWidth: 1.5,
                "aria-hidden": "true"
            })]
        })
    }])
}]);