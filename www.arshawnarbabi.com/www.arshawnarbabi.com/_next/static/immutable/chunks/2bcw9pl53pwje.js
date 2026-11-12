(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 70182, e => {
    e.v(t => Promise.all(["static/immutable/chunks/0fls-0tjx8agm.js", "static/immutable/chunks/3_egfkbg3wttd.js"].map(t => e.l(t))).then(() => t(17822)))
}, 9960, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(22016);
    e.s(["default", 0, function(e) {
        let [o, u] = (0, r.useState)(!1);
        return (0, t.jsx)(n.default, { ...e,
            prefetch: !!o && null,
            onMouseEnter: t => {
                u(!0), e.onMouseEnter ? .(t)
            },
            onFocus: t => {
                u(!0), e.onFocus ? .(t)
            },
            onTouchStart: t => {
                u(!0), e.onTouchStart ? .(t)
            }
        })
    }])
}, 83282, e => {
    e.v({
        arrow: "NotFound-module__4qsQ4W__arrow",
        home: "NotFound-module__4qsQ4W__home " + e.i(73246).cta,
        homeFill: "NotFound-module__4qsQ4W__homeFill " + e.i(73246).ctaFill,
        homeWrap: "NotFound-module__4qsQ4W__homeWrap",
        title: "NotFound-module__4qsQ4W__title",
        top: "NotFound-module__4qsQ4W__top"
    })
}, 84622, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(64395);
    e.s(["default", 0, function() {
        return (0, t.useEffect)(() => {
            document.querySelector("[data-loader-overlay]") || (0, r.hasNavigated)() || (document.documentElement.dataset.loaded = "")
        }, []), null
    }])
}, 48021, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(9960);
    e.i(97379);
    var n = e.i(72804),
        o = e.i(43861),
        u = e.i(83282),
        a = e.i(14149);
    e.s(["default", 0, function() {
        let e = (0, t.jsx)(n.HugeiconsIcon, {
            icon: o.ArrowRight02Icon,
            size: 20,
            strokeWidth: 1.5,
            className: u.default.arrow,
            "aria-hidden": "true"
        });
        return (0, t.jsx)("div", {
            className: u.default.homeWrap,
            children: (0, t.jsxs)(r.default, {
                href: "/",
                className: u.default.home,
                ...a.navSoundProps,
                children: ["Return home", e, (0, t.jsxs)("span", {
                    className: u.default.homeFill,
                    "aria-hidden": "true",
                    children: ["Return home", e]
                })]
            })
        })
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
            return v
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = e.r(90809),
        a = e.r(43476),
        i = u._(e.r(71645)),
        s = e.r(95057),
        l = e.r(8372),
        c = e.r(18581),
        f = e.r(18967),
        d = e.r(5550),
        p = e.r(88540),
        h = e.r(91949),
        m = e.r(73668),
        g = e.r(9396);

    function y(t) {
        var r;
        let n, o, u, [y, v] = (0, i.useOptimistic)(h.IDLE_LINK_STATUS),
            b = (0, i.useRef)(null),
            {
                href: P,
                as: E,
                children: S,
                prefetch: N = null,
                passHref: j,
                replace: T,
                shallow: O,
                scroll: C,
                onClick: R,
                onMouseEnter: x,
                onTouchStart: w,
                legacyBehavior: F = !1,
                onNavigate: A,
                transitionTypes: L,
                ref: k,
                unstable_dynamicOnHover: I,
                ...U
            } = t;
        n = S, F && ("string" == typeof n || "number" == typeof n) && (n = (0, a.jsx)("a", {
            children: n
        }));
        let $ = i.default.useContext(l.AppRouterContext),
            M = !1 !== N,
            W = !1 === N ? "none" : !0 === N ? "full" : "auto",
            B = "none" !== W ? "auto" === W ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR,
            D = "string" == typeof(r = E || P) ? r : (0, s.formatUrl)(r);
        if (F) {
            if (n ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            o = i.default.Children.only(n)
        }
        let q = F ? o && "object" == typeof o && o.ref : k,
            K, Q = i.default.useCallback(e => (null !== $ && (b.current = (0, h.mountLinkInstance)(e, D, $, B, M, v, K)), () => {
                b.current && ((0, h.unmountLinkForCurrentNavigation)(b.current), b.current = null), (0, h.unmountPrefetchableInstance)(e)
            }), [M, D, $, B, v, K]),
            z = {
                ref: (0, c.useMergedRef)(Q, q),
                onClick(t) {
                    F || "function" != typeof R || R(t), F && o.props && "function" == typeof o.props.onClick && o.props.onClick(t), !$ || t.defaultPrevented || function(t, r, n, o, u, a, s, l = "none") {
                        if ("u" > typeof window) {
                            let c, {
                                nodeName: f
                            } = t.currentTarget;
                            if ("A" === f.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, m.isLocalURL)(r)) {
                                o && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), a) {
                                let e = !1;
                                if (a({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: d
                            } = e.r(99781);
                            i.default.startTransition(() => {
                                d(r, o ? "replace" : "push", !1 === u ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, n.current, s, l)
                            })
                        }
                    }(t, D, b, T, C, A, L, W)
                },
                onMouseEnter(e) {
                    F || "function" != typeof x || x(e), F && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), $ && M && (0, h.onNavigationIntent)(e.currentTarget, !0 === I)
                },
                onTouchStart: function(e) {
                    F || "function" != typeof w || w(e), F && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), $ && M && (0, h.onNavigationIntent)(e.currentTarget, !0 === I)
                }
            };
        return (0, f.isAbsoluteUrl)(D) ? z.href = D : F && !j && ("a" !== o.type || "href" in o.props) || (z.href = (0, d.addBasePath)(D)), u = F ? i.default.cloneElement(o, z) : (0, a.jsx)("a", { ...U,
            ...z,
            children: n
        }), (0, a.jsx)(_.Provider, {
            value: y,
            children: u
        })
    }
    let _ = (0, i.createContext)(h.IDLE_LINK_STATUS),
        v = () => (0, i.useContext)(_);
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
            return u
        }
    });
    let n = e.r(18967),
        o = e.r(52817);

    function u(e) {
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
            return s
        },
        searchParamsToUrlQuery: function() {
            return u
        },
        urlQueryToSearchParams: function() {
            return i
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });

    function u(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }

    function a(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function i(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) t.append(r, a(e));
            else t.set(r, a(n));
        return t
    }

    function s(e, ...t) {
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
            return i
        },
        formatWithValidation: function() {
            return l
        },
        urlObjectKeys: function() {
            return s
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = e.r(90809)._(e.r(98183)),
        a = /https?|ftp|gopher|file/;

    function i(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", o = e.pathname || "", i = e.hash || "", s = e.query || "", l = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? l = t + e.host : r && (l = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (l += ":" + e.port)), s && "object" == typeof s && (s = String(u.urlQueryToSearchParams(s)));
        let c = e.search || s && `?${s}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || a.test(n)) && !1 !== l ? (l = "//" + (l || ""), o && "/" !== o[0] && (o = "/" + o)) : l || (l = ""), i && "#" !== i[0] && (i = "#" + i), c && "?" !== c[0] && (c = "?" + c), o = o.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${l}${o}${c}${i}`
    }
    let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function l(e) {
        return i(e)
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
            return P
        },
        MissingStaticPage: function() {
            return b
        },
        NormalizeError: function() {
            return _
        },
        PageNotFoundError: function() {
            return v
        },
        SP: function() {
            return m
        },
        ST: function() {
            return g
        },
        WEB_VITALS: function() {
            return u
        },
        execOnce: function() {
            return a
        },
        getDisplayName: function() {
            return f
        },
        getLocationOrigin: function() {
            return l
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return s
        },
        isResSent: function() {
            return d
        },
        loadGetInitialProps: function() {
            return h
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return E
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function a(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0, t = e(...n)), t)
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = e => {
            let t = e.charCodeAt(0);
            return !!(t >= 65 && t <= 90 || t >= 97 && t <= 122) && i.test(e)
        };

    function l() {
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
        } = window.location, t = l();
        return e.substring(t.length)
    }

    function f(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function d(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function h(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await h(t.Component, t.ctx)
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
    let m = "u" > typeof performance,
        g = m && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class y extends Error {}
    class _ extends Error {}
    class v extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class b extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class P extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function E(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}]);