(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 76192, e => {
    e.v({
        canvas: "BrandMarkDraw-module__9FNMbW__canvas",
        mark: "BrandMarkDraw-module__9FNMbW__mark"
    })
}, 78911, e => {
    "use strict";
    e.i(47167);
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(76192);
    e.s(["default", 0, function({
        className: e = ""
    }) {
        let o = (0, r.useRef)(null),
            a = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let e = o.current,
                t = a.current;
            if (!e || !t) return;
            let r = t.getContext("2d", {
                willReadFrequently: !0
            });
            if (!r) return;
            let n = 0,
                i = 0,
                l = 0,
                u = null,
                s = 1,
                c = null,
                f = null,
                d = null,
                h = null,
                m = {
                    r: 255,
                    g: 255,
                    b: 255
                },
                p = () => {
                    let t = /rgba?\(([^)]+)\)/.exec(getComputedStyle(e).color);
                    if (!t) return;
                    let r = t[1].split(",").map(e => parseFloat(e));
                    m = {
                        r: r[0],
                        g: r[1],
                        b: r[2]
                    }
                },
                g = (e, t) => {
                    let n = i / 2175.7;
                    r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, i, l), r.setTransform(n, 0, 0, n, -40 * n, 1440 * n), r.save(), r.scale(1, -1), r.translate(t, 0), r.fillStyle = "#fff", r.fill(new Path2D(e)), r.restore(), r.setTransform(1, 0, 0, 1, 0, 0);
                    let o = r.getImageData(0, 0, i, l).data,
                        a = new Uint8Array(i * l),
                        u = new Float32Array(i * l),
                        s = 1 / 0,
                        c = -1;
                    for (let e = 0; e < l; e++)
                        for (let t = 0; t < i; t++) {
                            let r = e * i + t;
                            if (u[r] = o[4 * r + 3] / 255, o[4 * r + 3] > 127) {
                                a[r] = 1;
                                let n = t + (l - 1 - e);
                                n < s && (s = n, c = r)
                            }
                        }
                    return {
                        mask: a,
                        seed: c,
                        cov: u
                    }
                },
                y = () => {
                    let n = e.getBoundingClientRect();
                    if (n.width < 2) return;
                    let o = Math.min(window.devicePixelRatio || 1, 2);
                    i = Math.max(2, Math.round(n.width * o)), l = Math.max(2, Math.round(1470 * n.width / 2175.7 * o)), t.width = i, t.height = l;
                    let a = g("M40 0 507.998291015625 1440H808.67138671875L1276.669677734375 0H1059.9991455078125L628.668212890625 1313.997314453125H683.334716796875L256.6705322265625 0ZM282.66796875 324.6651611328125V520.668701171875H1034.66845703125V324.6651611328125Z", 0),
                        m = g("M444.6663818359375 -30Q325.333251953125 -30 243.99996948242188 14.333343505859375Q162.66668701171875 58.66668701171875 121.33334350585938 132.33340454101562Q80 206.0001220703125 80 294.000244140625Q80 375.66650390625 109.16629028320312 437.8331604003906Q138.33258056640625 499.99981689453125 194.99893188476562 543.6667175292969Q251.665283203125 587.3336181640625 335.3321533203125 614.0006103515625Q406.664794921875 635.0006713867188 497.8309631347656 651.1673889160156Q588.9971313476562 667.3341064453125 689.3307495117188 681.0008850097656Q789.6643676757812 694.6676635742188 888.666015625 709.3345947265625L813.331298828125 666.667236328125Q814.9978637695312 794.3319702148438 759.4984436035156 855.4976501464844Q703.9990234375 916.663330078125 569.333984375 916.663330078125Q484.002197265625 916.663330078125 413.1692199707031 877.1639709472656Q342.33624267578125 837.6646118164062 314.0030517578125 746.6656494140625L119.333251953125 806.666748046875Q158.66668701171875 945.999755859375 271.1667175292969 1027.9998779296875Q383.666748046875 1110 570.667236328125 1110Q716.0004272460938 1110 823.333984375 1060.3336791992188Q930.6675415039062 1010.6673583984375 980.66796875 904.0006103515625Q1006.6683349609375 850.6668701171875 1012.6683349609375 791.6668090820312Q1018.6683349609375 732.666748046875 1018.6683349609375 665.3330078125V0H833.9984130859375V246.6651611328125L869.998291015625 215.3309326171875Q802.99755859375 91.33184814453125 699.3316345214844 30.665924072265625Q595.6657104492188 -30 444.6663818359375 -30ZM482.0009765625 140.6693115234375Q571.0001220703125 140.6693115234375 635.166015625 172.33566284179688Q699.3319091796875 204.00201416015625 738.1647338867188 253.16775512695312Q776.99755859375 302.33349609375 789.330810546875 354.6650390625Q805.9977416992188 402.664794921875 808.3311462402344 462.9980163574219Q810.66455078125 523.3312377929688 810.66455078125 558.664794921875L878.665283203125 533.9984130859375Q780.33056640625 518.9981079101562 699.1642761230469 507.1646728515625Q617.9979858398438 495.33123779296875 552.6658325195312 483.4979553222656Q487.33367919921875 471.6646728515625 436.0013427734375 455.9981689453125Q393.00152587890625 441.3314208984375 359.3354187011719 420.3315734863281Q325.6693115234375 399.33172607421875 306.1697998046875 368.9989013671875Q286.6702880859375 338.66607666015625 286.6702880859375 296.0003662109375Q286.6702880859375 254.00067138671875 307.6701354980469 218.66787719726562Q328.66998291015625 183.3350830078125 371.8360900878906 162.002197265625Q415.002197265625 140.6693115234375 482.0009765625 140.6693115234375Z", 1197),
                        y = new Uint8Array(i * l),
                        v = new Float32Array(i * l);
                    for (let e = 0; e < y.length; e++) y[e] = a.mask[e] | m.mask[e], v[e] = Math.max(a.cov[e], m.cov[e]);
                    f = y, d = v;
                    let b = [];
                    a.seed >= 0 && b.push(a.seed), m.seed >= 0 && b.push(m.seed);
                    let E = (e => {
                        let t = new Float32Array(i * l).fill(1 / 0);
                        for (let r of e) t[r] = 0;
                        let r = Math.SQRT2,
                            n = f,
                            o = !0,
                            a = 0;
                        for (; o && a < 24;) {
                            o = !1, a++;
                            for (let e = 0; e < l; e++)
                                for (let a = 0; a < i; a++) {
                                    let l = e * i + a;
                                    if (!n[l]) continue;
                                    let u = t[l];
                                    a > 0 && n[l - 1] && (u = Math.min(u, t[l - 1] + 1)), e > 0 && n[l - i] && (u = Math.min(u, t[l - i] + 1)), a > 0 && e > 0 && n[l - i - 1] && (u = Math.min(u, t[l - i - 1] + r)), a < i - 1 && e > 0 && n[l - i + 1] && (u = Math.min(u, t[l - i + 1] + r)), u < t[l] && (t[l] = u, o = !0)
                                }
                            for (let e = l - 1; e >= 0; e--)
                                for (let a = i - 1; a >= 0; a--) {
                                    let u = e * i + a;
                                    if (!n[u]) continue;
                                    let s = t[u];
                                    a < i - 1 && n[u + 1] && (s = Math.min(s, t[u + 1] + 1)), e < l - 1 && n[u + i] && (s = Math.min(s, t[u + i] + 1)), a < i - 1 && e < l - 1 && n[u + i + 1] && (s = Math.min(s, t[u + i + 1] + r)), a > 0 && e < l - 1 && n[u + i - 1] && (s = Math.min(s, t[u + i - 1] + r)), s < t[u] && (t[u] = s, o = !0)
                                }
                        }
                        return t
                    })(b);
                    for (let e = 0; e < l; e++)
                        for (let t = 0; t < i; t++) {
                            let r = e * i + t;
                            if (y[r] || v[r] <= 0) continue;
                            let n = 1 / 0;
                            for (let r = -1; r <= 1; r++)
                                for (let o = -1; o <= 1; o++) {
                                    let a = t + o,
                                        u = e + r;
                                    if (a < 0 || u < 0 || a >= i || u >= l) continue;
                                    let s = u * i + a;
                                    y[s] && E[s] < n && (n = E[s])
                                }
                            E[r] = n
                        }
                    u = E, s = 1;
                    for (let e = 0; e < E.length; e++) y[e] && E[e] !== 1 / 0 && E[e] > s && (s = E[e]);
                    let M = new Float32Array(i * l);
                    for (let e = 0; e < l; e++)
                        for (let t = 0; t < i; t++) {
                            let r = e * i + t,
                                n = v[r];
                            if (n <= 0) continue;
                            let o = n,
                                a = n;
                            for (let r = -1; r <= 1; r++)
                                for (let n = -1; n <= 1; n++) {
                                    let u = t + n,
                                        s = e + r,
                                        c = u < 0 || s < 0 || u >= i || s >= l ? 0 : v[s * i + u];
                                    c < a && (a = c), (0 === n || 0 === r) && c < o && (o = c)
                                }
                            M[r] = Math.min(1, 1.7 * (n - (o + a) / 2))
                        }
                    c = M, h = r.createImageData(i, l), p()
                },
                v = (e, t) => {
                    let n = u,
                        o = c,
                        a = d,
                        i = h;
                    if (!n || !o || !a || !i) return;
                    let l = i.data,
                        f = Math.max(1 / s, 1e-4),
                        p = e * (1 + 2 * f) - f,
                        g = t * (1 + 2 * f) - f;
                    for (let e = 0; e < n.length; e++) {
                        let t = 0,
                            r = a[e];
                        if (r > 0) {
                            let a = n[e] === 1 / 0 ? 1 : n[e] / s;
                            t = Math.max(r * Math.min(1, Math.max(0, (p - a) / f)) * (1 - Math.min(1, Math.max(0, (g - a) / f))), o[e])
                        }
                        let i = 4 * e;
                        l[i] = m.r, l[i + 1] = m.g, l[i + 2] = m.b, l[i + 3] = 255 * t | 0
                    }
                    r.setTransform(1, 0, 0, 1, 0, 0), r.putImageData(i, 0, 0)
                },
                b = window.matchMedia("(prefers-reduced-motion: reduce)"),
                E = !1,
                M = NaN,
                w = NaN,
                P = 0,
                A = e => {
                    P || (P = e);
                    let t = (e - P) % 5100,
                        r = 1,
                        o = 0;
                    t < 1500 ? r = t / 1500 : t < 3100 ? r = 1 : o = t < 4600 ? (t - 1500 - 1600) / 1500 : 1, (r !== M || o !== w) && (M = r, w = o, v(r, o)), n = requestAnimationFrame(A)
                },
                S = () => {
                    (cancelAnimationFrame(n), n = 0, M = NaN, w = NaN, b.matches) ? v(0, 0): E && (P = 0, n = requestAnimationFrame(A))
                };
            y(), S();
            let x = new ResizeObserver(() => {
                y(), S()
            });
            x.observe(e);
            let N = new MutationObserver(() => {
                p(), M = NaN, w = NaN, b.matches && v(0, 0)
            });
            N.observe(document.documentElement, {
                attributes: !0,
                attributeFilter: ["data-theme"]
            });
            let _ = () => S();
            b.addEventListener("change", _);
            let F = new IntersectionObserver(([e]) => {
                e.isIntersecting !== E && ((E = e.isIntersecting) ? S() : (cancelAnimationFrame(n), n = 0))
            }, {
                rootMargin: "100% 0px"
            });
            return F.observe(e), () => {
                cancelAnimationFrame(n), F.disconnect(), x.disconnect(), N.disconnect(), b.removeEventListener("change", _)
            }
        }, []), (0, t.jsx)("div", {
            ref: o,
            className: [n.default.mark, e].filter(Boolean).join(" "),
            "aria-hidden": "true",
            children: (0, t.jsx)("canvas", {
                ref: a,
                className: n.default.canvas
            })
        })
    }])
}, 9960, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(22016);
    e.s(["default", 0, function(e) {
        let [o, a] = (0, r.useState)(!1);
        return (0, t.jsx)(n.default, { ...e,
            prefetch: !!o && null,
            onMouseEnter: t => {
                a(!0), e.onMouseEnter ? .(t)
            },
            onFocus: t => {
                a(!0), e.onFocus ? .(t)
            },
            onTouchStart: t => {
                a(!0), e.onTouchStart ? .(t)
            }
        })
    }])
}, 14463, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["default", 0, function({
        selector: e
    }) {
        return (0, t.useEffect)(() => {
            let t = document.querySelector(e);
            if (!t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let r = t.closest("[data-scroll-highlight],[data-p-host]"),
                n = Array.from(t.querySelectorAll("[data-icon]"));
            if (!r || !n.length) return;
            let o = parseFloat(t.style.getPropertyValue("--n")) || 1,
                a = n.map(e => parseFloat(e.style.getPropertyValue("--at")) || 0),
                i = () => parseFloat(r.style.getPropertyValue("--p")) || 0,
                l = n.map((e, t) => +(i() * o >= a[t])),
                u = l.slice(),
                s = e => n[e].style.setProperty("--g", u[e].toFixed(4));
            n.forEach((e, t) => s(t));
            let c = 0,
                f = 0,
                d = !0,
                h = e => {
                    let t = Math.min(e - f || 16, 64);
                    f = e;
                    let r = i() * o,
                        m = 1 - Math.exp(-t / 150);
                    n.forEach((e, t) => {
                        r >= a[t] ? l[t] = 1 : r < a[t] - 1 && (l[t] = 0), u[t] !== l[t] && (u[t] += (l[t] - u[t]) * m, .002 > Math.abs(l[t] - u[t]) && (u[t] = l[t]), s(t))
                    }), c = d ? requestAnimationFrame(h) : 0
                },
                m = new IntersectionObserver(([e]) => {
                    (d = e.isIntersecting) && !c && (f = 0, c = requestAnimationFrame(h))
                }, {
                    rootMargin: "100% 0px"
                });
            return m.observe(t), c = requestAnimationFrame(h), () => {
                m.disconnect(), cancelAnimationFrame(c), n.forEach(e => e.style.removeProperty("--g"))
            }
        }, [e]), null
    }])
}, 15785, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["default", 0, function({
        selector: e
    }) {
        return (0, t.useEffect)(() => {
            let t = document.querySelector(e);
            if (!t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let r = Array.from(t.querySelectorAll("[data-icon]"));
            if (!r.length) return;
            let n = [],
                o = !0,
                a = () => {
                    n.splice(0).forEach(e => e.remove()), t.style.removeProperty("white-space")
                },
                i = () => {
                    if (!o) return;
                    a();
                    let e = r.map(e => e.style.getPropertyValue("--g"));
                    r.forEach(e => e.style.removeProperty("--g"));
                    let i = Array.from(t.children).filter(e => e.hasAttribute("data-unit")),
                        l = [],
                        u = -1;
                    i.forEach(e => {
                        let t = Math.round((e.firstElementChild ? ? e).getBoundingClientRect().top); - 1 !== u && t > u + 2 && l.push(e), u = Math.max(u, t)
                    }), l.forEach(e => {
                        let t = document.createElement("br");
                        t.setAttribute("data-lock", ""), e.before(t), n.push(t)
                    }), t.style.whiteSpace = "nowrap", r.forEach((t, r) => {
                        e[r] && t.style.setProperty("--g", e[r])
                    })
                };
            i();
            let l = t.getBoundingClientRect().width,
                u = 0,
                s = new ResizeObserver(() => {
                    let e = t.getBoundingClientRect().width;
                    .5 > Math.abs(e - l) || (l = e, cancelAnimationFrame(u), u = requestAnimationFrame(i))
                });
            return s.observe(t), document.fonts ? .ready.then(i), () => {
                o = !1, s.disconnect(), cancelAnimationFrame(u), a()
            }
        }, [e]), null
    }])
}, 83117, e => {
    "use strict";
    var t = e.i(43476);
    e.i(97379);
    var r = e.i(72804),
        n = e.i(63928),
        o = e.i(14149);
    e.s(["default", 0, function({
        items: e
    }) {
        return (0, t.jsx)("ul", {
            className: n.default.socials,
            children: e.map(({
                label: e,
                icon: a,
                href: i
            }) => (0, t.jsx)("li", {
                children: (0, t.jsxs)("a", {
                    className: n.default.social,
                    href: i,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    ...o.navSoundProps,
                    children: [(0, t.jsx)(r.HugeiconsIcon, {
                        icon: a,
                        size: 24,
                        strokeWidth: 1.5,
                        "aria-hidden": "true"
                    }), (0, t.jsx)("span", {
                        className: n.default.socialLabel,
                        children: e
                    })]
                })
            }, e))
        })
    }])
}, 18323, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["default", 0, function({
        selector: e
    }) {
        return (0, t.useEffect)(() => {
            let t = document.querySelector(e);
            if (!t) return;
            let r = t.matches("[data-tone]") ? [t] : Array.from(t.querySelectorAll("[data-tone]"));
            if (matchMedia("(prefers-reduced-motion: reduce)").matches) return void r.forEach(e => {
                e.dataset.tone = "done"
            });
            let n = [],
                o = new IntersectionObserver(e => {
                    for (let t of e) {
                        if (!t.isIntersecting) continue;
                        let e = t.target;
                        o.unobserve(e), e.dataset.tone = "in", n.push(setTimeout(() => {
                            e.dataset.tone = "done"
                        }, 1500))
                    }
                }, {
                    threshold: .5
                });
            return r.forEach(e => o.observe(e)), () => {
                o.disconnect(), n.forEach(clearTimeout)
            }
        }, [e]), null
    }])
}, 22016, (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return y
        },
        useLinkStatus: function() {
            return b
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let a = e.r(90809),
        i = e.r(43476),
        l = a._(e.r(71645)),
        u = e.r(95057),
        s = e.r(8372),
        c = e.r(18581),
        f = e.r(18967),
        d = e.r(5550),
        h = e.r(88540),
        m = e.r(91949),
        p = e.r(73668),
        g = e.r(9396);

    function y(t) {
        var r;
        let n, o, a, [y, b] = (0, l.useOptimistic)(m.IDLE_LINK_STATUS),
            E = (0, l.useRef)(null),
            {
                href: M,
                as: w,
                children: P,
                prefetch: A = null,
                passHref: S,
                replace: x,
                shallow: N,
                scroll: _,
                onClick: F,
                onMouseEnter: Q,
                onTouchStart: T,
                legacyBehavior: O = !1,
                onNavigate: C,
                transitionTypes: R,
                ref: j,
                unstable_dynamicOnHover: L,
                ...I
            } = t;
        n = P, O && ("string" == typeof n || "number" == typeof n) && (n = (0, i.jsx)("a", {
            children: n
        }));
        let k = l.default.useContext(s.AppRouterContext),
            U = !1 !== A,
            B = !1 === A ? "none" : !0 === A ? "full" : "auto",
            $ = "none" !== B ? "auto" === B ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR,
            D = "string" == typeof(r = w || M) ? r : (0, u.formatUrl)(r);
        if (O) {
            if (n ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            o = l.default.Children.only(n)
        }
        let q = O ? o && "object" == typeof o && o.ref : j,
            V, z = l.default.useCallback(e => (null !== k && (E.current = (0, m.mountLinkInstance)(e, D, k, $, U, b, V)), () => {
                E.current && ((0, m.unmountLinkForCurrentNavigation)(E.current), E.current = null), (0, m.unmountPrefetchableInstance)(e)
            }), [U, D, k, $, b, V]),
            K = {
                ref: (0, c.useMergedRef)(z, q),
                onClick(t) {
                    O || "function" != typeof F || F(t), O && o.props && "function" == typeof o.props.onClick && o.props.onClick(t), !k || t.defaultPrevented || function(t, r, n, o, a, i, u, s = "none") {
                        if ("u" > typeof window) {
                            let c, {
                                nodeName: f
                            } = t.currentTarget;
                            if ("A" === f.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, p.isLocalURL)(r)) {
                                o && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), i) {
                                let e = !1;
                                if (i({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: d
                            } = e.r(99781);
                            l.default.startTransition(() => {
                                d(r, o ? "replace" : "push", !1 === a ? h.ScrollBehavior.NoScroll : h.ScrollBehavior.Default, n.current, u, s)
                            })
                        }
                    }(t, D, E, x, _, C, R, B)
                },
                onMouseEnter(e) {
                    O || "function" != typeof Q || Q(e), O && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), k && U && (0, m.onNavigationIntent)(e.currentTarget, !0 === L)
                },
                onTouchStart: function(e) {
                    O || "function" != typeof T || T(e), O && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), k && U && (0, m.onNavigationIntent)(e.currentTarget, !0 === L)
                }
            };
        return (0, f.isAbsoluteUrl)(D) ? K.href = D : O && !S && ("a" !== o.type || "href" in o.props) || (K.href = (0, d.addBasePath)(D)), a = O ? l.default.cloneElement(o, K) : (0, i.jsx)("a", { ...I,
            ...K,
            children: n
        }), (0, i.jsx)(v.Provider, {
            value: y,
            children: a
        })
    }
    let v = (0, l.createContext)(m.IDLE_LINK_STATUS),
        b = () => (0, l.useContext)(v);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 73668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(18967),
        o = e.r(52817);

    function a(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, o.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 98183, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return u
        },
        searchParamsToUrlQuery: function() {
            return a
        },
        urlQueryToSearchParams: function() {
            return l
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });

    function a(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }

    function i(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function l(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) t.append(r, i(e));
            else t.set(r, i(n));
        return t
    }

    function u(e, ...t) {
        for (let r of t) {
            for (let t of r.keys()) e.delete(t);
            for (let [t, n] of r.entries()) e.append(t, n)
        }
        return e
    }
}, 95057, (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return l
        },
        formatWithValidation: function() {
            return s
        },
        urlObjectKeys: function() {
            return u
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let a = e.r(90809)._(e.r(98183)),
        i = /https?|ftp|gopher|file/;

    function l(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", o = e.pathname || "", l = e.hash || "", u = e.query || "", s = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? s = t + e.host : r && (s = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (s += ":" + e.port)), u && "object" == typeof u && (u = String(a.urlQueryToSearchParams(u)));
        let c = e.search || u && `?${u}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || i.test(n)) && !1 !== s ? (s = "//" + (s || ""), o && "/" !== o[0] && (o = "/" + o)) : s || (s = ""), l && "#" !== l[0] && (l = "#" + l), c && "?" !== c[0] && (c = "?" + c), o = o.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${s}${o}${c}${l}`
    }
    let u = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function s(e) {
        return l(e)
    }
}, 18967, (e, t, r) => {
    "use strict";
    e.i(47167), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return y
        },
        MiddlewareNotFoundError: function() {
            return M
        },
        MissingStaticPage: function() {
            return E
        },
        NormalizeError: function() {
            return v
        },
        PageNotFoundError: function() {
            return b
        },
        SP: function() {
            return p
        },
        ST: function() {
            return g
        },
        WEB_VITALS: function() {
            return a
        },
        execOnce: function() {
            return i
        },
        getDisplayName: function() {
            return f
        },
        getLocationOrigin: function() {
            return s
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return u
        },
        isResSent: function() {
            return d
        },
        loadGetInitialProps: function() {
            return m
        },
        normalizeRepeatedSlashes: function() {
            return h
        },
        stringifyError: function() {
            return w
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function i(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0, t = e(...n)), t)
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        u = e => {
            let t = e.charCodeAt(0);
            return !!(t >= 65 && t <= 90 || t >= 97 && t <= 122) && l.test(e)
        };

    function s() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, t = s();
        return e.substring(t.length)
    }

    function f(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function d(e) {
        return e.finished || e.headersSent
    }

    function h(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function m(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await m(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && d(r)) return n;
        if (!n) throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let p = "u" > typeof performance,
        g = p && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class y extends Error {}
    class v extends Error {}
    class b extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class E extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class M extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function w(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}]);