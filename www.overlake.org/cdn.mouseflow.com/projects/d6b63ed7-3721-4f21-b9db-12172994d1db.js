var mouseflowDisableKeyLogging = true;
if (typeof mouseflow === 'undefined' && typeof mouseflowPlayback === 'undefined') {
    (function() {
        var _174 = false;
        var _178 = false;
        var _179 = [];
        var _202 = [];
        var _23 = ["https://eu.mouseflow.com", "https://us.mouseflow.com"];
        var _17 = 'https://us.mouseflow.com';
        var _177 = false;
        var _191 = (() => {
            "use strict";
            var t = {
                    d: (e, n) => {
                        for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: n[r]
                        })
                    },
                    o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
                    r: t => {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }
                },
                e = {};

            function n(t) {
                return "object" == typeof t && null !== t && t.nodeType === Node.ELEMENT_NODE
            }
            t.r(e), t.d(e, {
                default: () => Q,
                getCssSelector: () => K
            });
            const r = {
                    NONE: "",
                    DESCENDANT: " ",
                    CHILD: " > "
                },
                o = {
                    id: "id",
                    class: "class",
                    tag: "tag",
                    attribute: "attribute",
                    nthchild: "nthchild",
                    nthoftype: "nthoftype"
                },
                i = "CssSelectorGenerator";

            function c(t = "unknown problem", ...e) {
                console.warn(`${i}: ${t}`, ...e)
            }
            const u = {
                selectors: [o.id, o.class, o.tag, o.attribute],
                includeTag: !1,
                whitelist: [],
                blacklist: [],
                combineWithinSelector: !0,
                combineBetweenSelectors: !0,
                root: null,
                maxCombinations: Number.POSITIVE_INFINITY,
                maxCandidates: Number.POSITIVE_INFINITY,
                useScope: !1
            };

            function s(t) {
                return t instanceof RegExp
            }

            function a(t) {
                return ["string", "function"].includes(typeof t) || s(t)
            }

            function l(t) {
                return Array.isArray(t) ? t.filter(a) : []
            }

            function f(t) {
                const e = [Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE, Node.ELEMENT_NODE];
                return function(t) {
                    return t instanceof Node
                }(t) && e.includes(t.nodeType)
            }

            function d(t, e) {
                if (f(t)) return t.contains(e) || c("element root mismatch", "Provided root does not contain the element. This will most likely result in producing a fallback selector using element's real root node. If you plan to use the selector using provided root (e.g. `root.querySelector`), it will not work as intended."), t;
                const n = e.getRootNode({
                    composed: !1
                });
                return f(n) ? (n !== document && c("shadow root inferred", "You did not provide a root and the element is a child of Shadow DOM. This will produce a selector using ShadowRoot as a root. If you plan to use the selector using document as a root (e.g. `document.querySelector`), it will not work as intended."), n) : S(e)
            }

            function m(t) {
                return "number" == typeof t ? t : Number.POSITIVE_INFINITY
            }

            function p(t = []) {
                const [e = [], ...n] = t;
                return 0 === n.length ? e : n.reduce(((t, e) => t.filter((t => e.includes(t)))), e)
            }

            function g(t) {
                return [].concat(...t)
            }

            function h(t) {
                const e = t.map((t => {
                    if (s(t)) return e => t.test(e);
                    if ("function" == typeof t) return e => {
                        const n = t(e);
                        return "boolean" != typeof n ? (c("pattern matcher function invalid", "Provided pattern matching function does not return boolean. It's result will be ignored.", t), !1) : n
                    };
                    if ("string" == typeof t) {
                        const e = new RegExp("^" + t.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".+") + "$");
                        return t => e.test(t)
                    }
                    return c("pattern matcher invalid", "Pattern matching only accepts strings, regular expressions and/or functions. This item is invalid and will be ignored.", t), () => !1
                }));
                return t => e.some((e => e(t)))
            }

            function b(t, e, n) {
                const r = Array.from(d(n, t[0]).querySelectorAll(e));
                return r.length === t.length && t.every((t => r.includes(t)))
            }

            function y(t, e) {
                e = null != e ? e : S(t);
                const r = [];
                let o = t;
                for (; n(o) && o !== e;) r.push(o), o = o.parentElement;
                return r
            }

            function N(t, e) {
                return p(t.map((t => y(t, e))))
            }

            function S(t) {
                return t.ownerDocument.querySelector(":root")
            }
            const E = ", ",
                v = new RegExp(["^$", "\\s"].join("|")),
                w = new RegExp(["^$"].join("|")),
                I = [o.nthoftype, o.tag, o.id, o.class, o.attribute, o.nthchild],
                T = h(["class", "id", "ng-*"]);

            function O({
                name: t
            }) {
                return `[${t}]`
            }

            function C({
                name: t,
                value: e
            }) {
                return `[${t}='${e}']`
            }

            function x({
                nodeName: t,
                nodeValue: e
            }) {
                return {
                    name: Y(t),
                    value: Y(null != e ? e : void 0)
                }
            }

            function j(t) {
                const e = Array.from(t.attributes).filter((e => function({
                    nodeName: t,
                    nodeValue: e
                }, n) {
                    const r = n.tagName.toLowerCase();
                    return !(["input", "option"].includes(r) && "value" === t || "src" === t && (null == e ? void 0 : e.startsWith("data:")) || T(t))
                }(e, t))).map(x);
                return [...e.map(O), ...e.map(C)]
            }

            function A(t) {
                var e;
                return (null !== (e = t.getAttribute("class")) && void 0 !== e ? e : "").trim().split(/\s+/).filter((t => !w.test(t))).map((t => `.${Y(t)}`))
            }

            function $(t) {
                var e;
                const n = null !== (e = t.getAttribute("id")) && void 0 !== e ? e : "",
                    r = `#${Y(n)}`,
                    o = t.getRootNode({
                        composed: !1
                    });
                return !v.test(n) && b([t], r, o) ? [r] : []
            }

            function D(t) {
                const e = t.parentNode;
                if (e) {
                    const r = Array.from(e.childNodes).filter(n).indexOf(t);
                    if (r > -1) return [`:nth-child(${String(r+1)})`]
                }
                return []
            }

            function R(t) {
                return [Y(t.tagName.toLowerCase())]
            }

            function P(t) {
                const e = [...new Set(g(t.map(R)))];
                return 0 === e.length || e.length > 1 ? [] : [e[0]]
            }

            function _(t) {
                const e = P([t])[0],
                    n = t.parentElement;
                if (n) {
                    const r = Array.from(n.children).filter((t => t.tagName.toLowerCase() === e)),
                        o = r.indexOf(t);
                    if (o > -1) return [`${e}:nth-of-type(${String(o+1)})`]
                }
                return []
            }

            function k(t = [], {
                maxResults: e = Number.POSITIVE_INFINITY
            } = {}) {
                return Array.from(function*(t = [], {
                    maxResults: e = Number.POSITIVE_INFINITY
                } = {}) {
                    let n = 0,
                        r = M(1);
                    for (; r.length <= t.length && n < e;) {
                        n += 1;
                        const e = r.map((e => t[e]));
                        yield e, r = L(r, t.length - 1)
                    }
                }(t, {
                    maxResults: e
                }))
            }

            function L(t = [], e = 0) {
                const n = t.length;
                if (0 === n) return [];
                const r = [...t];
                r[n - 1] += 1;
                for (let t = n - 1; t >= 0; t--)
                    if (r[t] > e) {
                        if (0 === t) return M(n + 1);
                        r[t - 1]++, r[t] = r[t - 1] + 1
                    }
                return r[n - 1] > e ? M(n + 1) : r
            }

            function M(t = 1) {
                return Array.from(Array(t).keys())
            }
            const V = ":".charCodeAt(0).toString(16).toUpperCase(),
                F = /[ !"#$%&'()\[\]{|}<>*+,./;=?@^`~\\]/;

            function Y(t = "") {
                return CSS ? CSS.escape(t) : function(t = "") {
                    return t.split("").map((t => ":" === t ? `\\${V} ` : F.test(t) ? `\\${t}` : escape(t).replace(/%/g, "\\"))).join("")
                }(t)
            }
            const W = {
                    tag: P,
                    id: function(t) {
                        return 0 === t.length || t.length > 1 ? [] : $(t[0])
                    },
                    class: function(t) {
                        return p(t.map(A))
                    },
                    attribute: function(t) {
                        return p(t.map(j))
                    },
                    nthchild: function(t) {
                        return p(t.map(D))
                    },
                    nthoftype: function(t) {
                        return p(t.map(_))
                    }
                },
                q = {
                    tag: R,
                    id: $,
                    class: A,
                    attribute: j,
                    nthchild: D,
                    nthoftype: _
                };

            function B(t) {
                return t.includes(o.tag) || t.includes(o.nthoftype) ? [...t] : [...t, o.tag]
            }

            function G(t = {}) {
                const e = [...I];
                return t[o.tag] && t[o.nthoftype] && e.splice(e.indexOf(o.tag), 1), e.map((e => {
                    return (r = t)[n = e] ? r[n].join("") : "";
                    var n, r
                })).join("")
            }

            function H(t, e, n = "", o) {
                const i = function(t, e) {
                    return "" === e ? t : function(t, e) {
                        return [...t.map((t => e + r.DESCENDANT + t)), ...t.map((t => e + r.CHILD + t))]
                    }(t, e)
                }(function(t, e, n) {
                    const r = function(t, e) {
                            const {
                                blacklist: n,
                                whitelist: r,
                                combineWithinSelector: o,
                                maxCombinations: i
                            } = e, c = h(n), u = h(r);
                            return function(t) {
                                const {
                                    selectors: e,
                                    includeTag: n
                                } = t, r = [...e];
                                return n && !r.includes("tag") && r.push("tag"), r
                            }(e).reduce(((e, n) => {
                                const r = function(t, e) {
                                        return (0, W[e])(t)
                                    }(t, n),
                                    s = function(t = [], e, n) {
                                        return t.filter((t => n(t) || !e(t)))
                                    }(r, c, u),
                                    a = function(t = [], e) {
                                        return t.sort(((t, n) => {
                                            const r = e(t),
                                                o = e(n);
                                            return r && !o ? -1 : !r && o ? 1 : 0
                                        }))
                                    }(s, u);
                                return e[n] = o ? k(a, {
                                    maxResults: i
                                }) : a.map((t => [t])), e
                            }), {})
                        }(t, n),
                        o = function(t, e) {
                            return function(t) {
                                const {
                                    selectors: e,
                                    combineBetweenSelectors: n,
                                    includeTag: r,
                                    maxCandidates: o
                                } = t, i = n ? k(e, {
                                    maxResults: o
                                }) : e.map((t => [t]));
                                return r ? i.map(B) : i
                            }(e).map((e => function(t, e) {
                                const n = {};
                                return t.forEach((t => {
                                        const r = e[t];
                                        r && r.length > 0 && (n[t] = r)
                                    })),
                                    function(t = {}) {
                                        let e = [];
                                        return Object.entries(t).forEach((([t, n]) => {
                                            e = n.flatMap((n => 0 === e.length ? [{
                                                [t]: n
                                            }] : e.map((e => Object.assign(Object.assign({}, e), {
                                                [t]: n
                                            })))))
                                        })), e
                                    }(n).map(G)
                            }(e, t))).filter((t => t.length > 0))
                        }(r, n),
                        i = g(o);
                    return [...new Set(i)]
                }(t, 0, o), n);
                for (const n of i)
                    if (b(t, n, e)) return n;
                return null
            }

            function U(t) {
                return {
                    value: t,
                    include: !1
                }
            }

            function z({
                selectors: t,
                operator: e
            }) {
                let n = [...I];
                t[o.tag] && t[o.nthoftype] && (n = n.filter((t => t !== o.tag)));
                let r = "";
                return n.forEach((e => {
                    var n;
                    (null !== (n = t[e]) && void 0 !== n ? n : []).forEach((({
                        value: t,
                        include: e
                    }) => {
                        e && (r += t)
                    }))
                })), e + r
            }

            function J(t, e) {
                return t.map((t => function(t, e) {
                    return [e ? ":scope" : ":root", ...y(t, e).reverse().map((t => {
                        var e;
                        const n = function(t, e, n = r.NONE) {
                            const o = {};
                            return e.forEach((e => {
                                Reflect.set(o, e, function(t, e) {
                                    return q[e](t)
                                }(t, e).map(U))
                            })), {
                                element: t,
                                operator: n,
                                selectors: o
                            }
                        }(t, [o.nthchild], r.CHILD);
                        return (null !== (e = n.selectors.nthchild) && void 0 !== e ? e : []).forEach((t => {
                            t.include = !0
                        })), n
                    })).map(z)].join("")
                }(t, e))).join(E)
            }

            function K(t, e = {}) {
                var r;
                const i = function(t) {
                        (t instanceof NodeList || t instanceof HTMLCollection) && (t = Array.from(t));
                        const e = (Array.isArray(t) ? t : [t]).filter(n);
                        return [...new Set(e)]
                    }(t),
                    c = function(t, e = {}) {
                        const n = Object.assign(Object.assign({}, u), e);
                        return {
                            selectors: (r = n.selectors, Array.isArray(r) ? r.filter((t => {
                                return e = o, n = t, Object.values(e).includes(n);
                                var e, n
                            })) : []),
                            whitelist: l(n.whitelist),
                            blacklist: l(n.blacklist),
                            root: d(n.root, t),
                            combineWithinSelector: !!n.combineWithinSelector,
                            combineBetweenSelectors: !!n.combineBetweenSelectors,
                            includeTag: !!n.includeTag,
                            maxCombinations: m(n.maxCombinations),
                            maxCandidates: m(n.maxCandidates),
                            useScope: !!n.useScope
                        };
                        var r
                    }(i[0], e),
                    s = null !== (r = c.root) && void 0 !== r ? r : S(i[0]);
                let a = "",
                    f = s;

                function p() {
                    return function(t, e, n = "", r) {
                        if (0 === t.length) return null;
                        const o = [t.length > 1 ? t : [], ...N(t, e).map((t => [t]))];
                        for (const t of o) {
                            const o = H(t, e, n, r);
                            if (o) return {
                                foundElements: t,
                                selector: o
                            }
                        }
                        return null
                    }(i, f, a, c)
                }
                let g = p();
                for (; g;) {
                    const {
                        foundElements: t,
                        selector: e
                    } = g;
                    if (b(i, e, s)) return e;
                    f = t[0], a = e, g = p()
                }
                return i.length > 1 ? i.map((t => K(t, c))).join(E) : J(i, c.useScope ? s : void 0)
            }
            const Q = K;
            return e
        })();
        var _110 = typeof _373 === 'function';

        function _260(_91) {
            return 'MF' + (_2.includeDebugTime ? ' - ' + _147 : '') + ': ' + _91
        }

        function _1(_91, _147) {
            if (!_2.debug) return;
            _147 = (typeof _147 !== 'undefined' ? _147 : '');
            if (_91 instanceof Error) {
                _91.message = _260(_91.message);
                console.error(_91)
            } else {
                console.groupCollapsed(_260(_91));
                console.trace();
                console.groupEnd()
            }
        }
        var _22 = new _374(window, _1);
        var _12 = new _362(window, _22);
        var _18 = new _387(window, Math, JSON, _22);
        var _16 = new _327(_22, _18);
        var _54 = new _248('local', window, _18, _1);
        var _172 = new _248('session', window, _18, _1);
        var _220 = new _378(window, _12);
        var _2 = new _386(window, _54, _172, _174, _178, _177);
        _2._170();
        _2._200 = [];
        _2._358 = [];
        _2._294 = [];
        _2._296 = [];
        _2._399 = [];
        _2._308 = '##GENERAL_EVENTS##';
        _2._308 = [];
        _2._405 = [];
        _2._62 = 'd6b63ed7-3721-4f21-b9db-12172994d1db';
        _2._407 = true;
        _2._401 = '10000000';
        _2._123('appUrl', _17);
        var _380 = new _337(window, _18, _2, _1);

        function _347(_0, _23, _12, _2, _44, _18, _16, _60, _54) {
            var _17, _62, _1, _30;
            var _130 = 'mf_liveHeatmaps';
            var _13;
            var _120 = [];
            var _37;
            var _145 = false;

            function _25(_195, _76, _79) {
                _62 = _195;
                _1 = _76;
                _145 = window.location.search.indexOf('mf_legacy=1') !== -1 ? true : false;
                _1('Live heatmaps starting, allowedAppUrls: ' + _23.join(', '));
                _30 = _44._85();
                if (!_30) {
                    _1('Live heatmaps not initiated - could not create root HTML element');
                    return
                }
                if (!_0.opener) {
                    _1('Live heatmaps not initiated - window.opener is missing');
                    return
                }
                if (typeof _79 === 'function') {
                    _79(function() {
                        _63()
                    })
                } else {
                    _63()
                }
            }

            function _66() {
                _311()
            }

            function _63() {
                _16._115(_0, 'message', function(_8) {
                    if (!_23.includes(_8.origin)) return;
                    _71(_8.data);
                    switch (_8.data.message) {
                        case 'MouseflowLiveHeatmaps_Init_Received':
                            _0.clearInterval(_37);
                            _17 = _8.origin;
                            break;
                        case 'MouseflowLiveHeatmaps_Init_Success':
                        case 'MouseflowLiveHeatmaps_Hello':
                            _46(_8.data);
                            _73(_8.data.scripts, function() {
                                var message;
                                if (_145) {
                                    message = {
                                        mfCommand: 'settings',
                                        value: {
                                            websiteSettings: _8.data.websiteSettings
                                        }
                                    }
                                } else {
                                    _225();
                                    message = {
                                        mfCommand: 'settings_liveheatmap',
                                        value: _13
                                    }
                                }
                                _193(JSON.stringify(message))
                            });
                            break;
                        case 'MouseflowLiveHeatmaps_StreamData_Chunk':
                            _114(_8.data.requestUrl, true)._204(_8.data.dataChunk);
                            break;
                        case 'MouseflowLiveHeatmaps_StreamData_Success':
                            _114(_8.data.requestUrl)._89();
                            break;
                        case 'MouseflowLiveHeatmaps_StreamData_Error':
                            _114(_8.data.requestUrl)._84();
                            break;
                        case 'MouseflowLiveHeatmaps_RequestData_Success':
                            _114(_8.data.requestUrl)._89(_8.data.responseText);
                            break;
                        case 'MouseflowLiveHeatmaps_RequestData_Error':
                            _114(_8.data.requestUrl)._84();
                            break
                    }
                });
                _37 = _12._140(_121, 500);
                _12._81(function() {
                    _12._86(_37)
                }, 10000);
                _121()
            }

            function _121() {
                _1('[Heatmap] Posting Init message to opener');
                try {
                    for (const _15 of _23) {
                        _0.opener.postMessage({
                            message: 'MouseflowLiveHeatmaps_Init',
                            websiteId: _62,
                            legacy: _145
                        }, _15)
                    }
                } catch (e) {
                    _1('[Heatmap] Failed to post Init message: ' + e)
                }
            }

            function _46(_46) {
                _13 = _221();
                var _126 = _222();
                var _137 = _2.location.search.match(/mf_liveHeatmaps=([^&]+)/);
                var _192 = typeof _0.name === 'string' && _0.name.indexOf('mf_liveHeatmaps') === 0 ? _0.name.slice(15).split('_') : [];
                var _307 = _137 || _192[1] === 'init';
                if (_13 && !_307) {
                    _13.filters.url = _126.url;
                    _186(_13);
                    return
                }
                _13 = {
                    isMinimized: false,
                    appUrlBase: _17,
                    websiteId: _62,
                    filters: _126,
                    minDate: _46.minDate,
                    filteredViews: _46.filteredViews,
                    user: _46.user,
                    website: _46.website,
                    mutedEvents: _46.mutedEvents,
                    supportedLanguages: _46.supportedLanguages,
                    accountFeatures: _46.accountFeatures
                };
                if (_46.filters && _46.filters.view) {
                    _13.selectedFilteredView = _46.filters.view;
                    delete _46.filters.view
                }
                if (_46.filters) {
                    Object.keys(_46.filters).forEach(function(_5) {
                        var _4 = _46.filters[_5];
                        if (_4 instanceof Date) _4 = _136(_4);
                        _13.filters[_5] = _4
                    })
                }
                if (_137 && _137[1] !== '1') _13.filters.maptype = _137[1];
                else if (_192[2]) _13.filters.maptype = _192[2];
                _186(_13);
                _0.name = 'mf_liveHeatmaps'
            }

            function _225() {
                _13.devices = _13.filters.device ? _13.filters.device.and || _13.filters.device.or : [];
                _13.mapType = _13.filters.maptype;
                _13.url = _13.filters.url = _60._102();
                _194({
                    message: 'MouseflowLiveHeatmaps_SetSettings',
                    settings: _13
                })
            }

            function _73(_38, _31) {
                if (!_38) return;
                var _49 = 0;

                function _56() {
                    if (_49 >= _38.length) {
                        _31();
                        return
                    }
                    var _6 = _38[_49];
                    _125(_6);
                    _49++;
                    var _14 = document.createElement('script');
                    if (_6.startsWith('/')) _14.src = _17 + _6;
                    else _14.src = _17 + '/' + _6;
                    _14.onload = _56;
                    _30.appendChild(_14)
                }
                _56()
            }

            function _221() {
                return _54._238(_130)
            }

            function _186(_13) {
                if (_1) _1('Live heatmaps saving settings');
                _54._240(_130, _13)
            }

            function _311() {
                if (_1) _1('Live heatmaps removing settings');
                _54._242(_130)
            }

            function _114(_15, _291) {
                var _189 = _120.filter(function(_302) {
                    return _302._15 === _15
                })[0];
                if (!_291 && _189) _120.splice(_120.indexOf(_189), 1);
                return _189
            }

            function _319(_40) {
                if (typeof _40 !== 'object') return;
                _13 = _221();
                var _126 = _222();
                Object.keys(_40).forEach(function(_5) {
                    var _4 = _40[_5];
                    if (_4 instanceof Date) _4 = _136(_4);
                    _13.filters[_5] = _4 || undefined
                });
                Object.keys(_126).forEach(function(_5) {
                    if (!_13.filters[_5]) _13.filters[_5] = _126[_5]
                });
                if (_13.filters.view) {
                    _13.selectedFilteredView = _13.filters.view;
                    delete _13.filters.view
                }
                _186(_13)
            }

            function _222() {
                var _104 = new Date();
                _104 = new Date(_104.getFullYear(), _104.getMonth(), _104.getDate());
                var _182 = new Date(_104);
                _182.setDate(_182.getDate() - 29);
                return {
                    maptype: 'click',
                    url: _60._102(),
                    fromdate: _136(_182),
                    todate: _136(_104)
                }
            }

            function _194(_9) {
                _0.opener.postMessage(_9, _17);
                _1('Sent ' + _9.message + (_9.requestUrl ? ', request URL: ' + _9.requestUrl : ''))
            }

            function _193(_9) {
                _0.postMessage(_9, _0.location.origin);
                _1('Sent ' + _9.message + (_9.requestUrl ? ', request URL: ' + _9.requestUrl : ''))
            }

            function _71(_9) {
                if (_9.message && _9.message.indexOf('MouseflowLiveHeatmaps_') === 0) _1('Received ' + _9.message + (_9.requestUrl ? ', request URL: ' + _9.requestUrl : ''))
            }

            function _125(_6) {
                _1('Live heatmaps loading script: ' + _6)
            }

            function _136(_80) {
                return _80.getFullYear() + '-' + _223(_80.getMonth() + 1, '00') + '-' + _223(_80.getDate(), '00')
            }

            function _223(_330, _224) {
                return (_224 + _330).slice(-_224.length)
            }
            this._25 = _25;
            this._66 = _66;
            this._183 = function(_40) {
                _319(_40);
                if (_145) {
                    _193('{"mfCommand":"MouseflowHeatmap_UpdateHeatmap"}')
                } else {
                    _225();
                    var message = {
                        mfCommand: 'settings_change',
                        value: {
                            settings: _13,
                            reloadData: _40 && _40.maptype ? false : true
                        }
                    };
                    _193(JSON.stringify(message))
                }
                _1('Sent postmessage updateheatmap')
            };
            _0.mouseflowHeatmap = {
                streamData: function(_15, _204, _89, _84) {
                    _120.push({
                        _15: _15,
                        _204: _204 || function() {},
                        _89: _89 || function() {},
                        _84: _84 || function() {}
                    });
                    _194({
                        message: 'MouseflowLiveHeatmaps_StreamData',
                        requestUrl: _15
                    })
                },
                getData: function(_15, _89, _84) {
                    _120.push({
                        _15: _15,
                        _89: _89 || function() {},
                        _84: _84 || function() {}
                    });
                    _194({
                        message: 'MouseflowLiveHeatmaps_RequestData',
                        requestUrl: _15
                    })
                }
            }
        }

        function _348(_0, _23, _12, _2, _44, _18, _16, _60, _54) {
            const _130 = 'mf_liveHeatmaps';
            let _17, _62, _1, _30;
            let _37;
            const _24 = _0.document;
            const _315 = _0.location.search.slice(1).split('&').map(a => a.split('=', 2)).filter(a => a[0]).reduce((acc, cur) => (acc[cur[0]] = cur[1] ? ? null, acc), {});

            function _25(_195, _76, _79) {
                _62 = _195;
                _1 = _76;
                _1('Live heatmaps starting, allowedAppUrls: ' + _23.join(', '));
                _30 = _44._85();
                if (!_30) {
                    _1('Live heatmaps not initiated - could not create root HTML element');
                    return
                }
                if (!_0.opener) {
                    _1('Live heatmaps not initiated - window.opener is missing');
                    return
                }
                if (typeof _79 === 'function') {
                    _79(function() {
                        _63()
                    })
                } else {
                    _63()
                }
            }

            function _66() {}

            function _63() {
                _16._115(_0, 'message', function(_8) {
                    if (!_23.includes(_8.origin)) return;
                    _71(_8.data);
                    switch (_8.data.message) {
                        case 'MouseflowLiveHeatmapsV3_Init_Received':
                            _12._86(_37);
                            _17 = _8.origin;
                            _2._123('appUrl', _17);
                            break;
                        case 'MouseflowLiveHeatmapsV3_Init_Success':
                            _73(_8.data.scripts);
                            break
                    }
                });
                _37 = _12._140(_121, 500);
                _12._81(function() {
                    _12._86(_37)
                }, 10000);
                _121()
            }

            function _121() {
                _1('[Heatmap] Posting Init message to opener');
                try {
                    for (const _15 of _23) {
                        _0.opener.postMessage({
                            message: 'MouseflowLiveHeatmapsV3_Init',
                            websiteId: _62,
                            prod: _315.prod !== undefined
                        }, _15)
                    }
                } catch (e) {
                    _1('[Heatmap] Failed to post Init message: ' + e)
                }
            }

            function _73(_38) {
                for (const _6 of _38) {
                    const _3 = _24.createElement(_6.tagName);
                    if (_6.textContent) {
                        _3.textContent = _6.textContent
                    }
                    for (const _5 in _6.attributes) {
                        const _4 = _6.attributes[_5];
                        if (_5 === 'src' || _5 === 'href') {
                            _3[_5] = _88(_4)
                        } else {
                            _3.setAttribute(_5, _4)
                        }
                    }
                    if (_3.tagName === 'SCRIPT') {
                        _3.async = false
                    }
                    if (_3.tagName === 'SCRIPT' && _3.type === 'importmap') {
                        _3.textContent = _3.textContent.replace(/(:\s*")(\/[^"]+")/g, `$1${_17}$2`)
                    }
                    _30.appendChild(_3)
                }
            }

            function _88(_6) {
                if (_6.includes('://')) return _6;
                return _6.startsWith('/') ? _17 + _6 : _17 + '/' + _6
            }

            function _71(_9) {
                if (_9.message && _9.message.indexOf('MouseflowLiveHeatmapsV3_') === 0) _1('Received ' + _9.message + (_9.requestUrl ? ', request URL: ' + _9.requestUrl : ''))
            }
            this._25 = _25;
            this._66 = _66;
            this._183 = function() {
                window.updateSpaPage()
            }
        }

        function _351(_0, _23, _44, _22, _12, _18, _16, _2) {
            var _1, _30, _37, _17, _83;

            function _25(_62, _432, _433, _434, _435, _76, _31) {
                _1 = _76;
                _83 = _31;
                _1('[PrivacyTool] _start called');
                _1('[PrivacyTool] allowedAppUrls: ' + _23.join(', '));
                _30 = _44._85();
                _1('[PrivacyTool] Root element created? ' + !!_30);
                if (!_30) {
                    _1('Privacy tool not initiated - could not create root HTML element');
                    return
                }
                if (!_0.opener) {
                    _1('Privacy tool not initiated - window.opener is missing');
                    return
                }
                _63()
            }

            function _63() {
                _1('[PrivacyTool] Setting up event listener');
                _16._115(_0, 'message', function(_8) {
                    _1('[PrivacyTool] message event received: ' + _8.origin + ', ' + (_8.data ? .message));
                    if (!_23.includes(_8.origin)) {
                        _1('[PrivacyTool] Ignored message from unexpected origin: ' + _8.origin);
                        return
                    }
                    _71(_8.data);
                    switch (_8.data.message) {
                        case 'MouseflowPrivacyTool_Init_Received':
                            _1('[PrivacyTool] Init_Received acknowledged');
                            _0.clearInterval(_37);
                            _17 = _8.origin;
                            _1('[PrivacyTool] appUrl: ' + _17);
                            break;
                        case 'MouseflowPrivacyTool_Init_Success':
                            _1('[PrivacyTool] Init_Success received');
                            _73(_8.data.scripts, function() {
                                try {
                                    _1('[PrivacyTool] All scripts loaded');
                                    var payload = _8.data.payload || {};
                                    _1('[PrivacyTool] Payload: ' + JSON.stringify(payload));
                                    privacyToolWidget.start(_17, payload.blacklist || [], payload.whitelist || [], payload.tracked || [], payload.masked || []);
                                    _1('[PrivacyTool] Widget started');
                                    if (typeof _83 === 'function') _83()
                                } catch (e) {
                                    _1('[PrivacyTool] Failed to start widget: ' + e)
                                }
                            });
                            break;
                        default:
                            _1('[PrivacyTool] Unknown message: ' + (_8.data ? .message))
                    }
                });
                _37 = _0.setInterval(_226, 500);
                _0.setTimeout(function() {
                    _1('[PrivacyTool] Init timeout reached, clearing interval');
                    _0.clearInterval(_37)
                }, 10000);
                _226()
            }

            function _226() {
                _1('[PrivacyTool] Posting Init message to opener');
                try {
                    for (const _15 of _23) {
                        _0.opener.postMessage({
                            message: 'MouseflowPrivacyTool_Init'
                        }, _15)
                    }
                } catch (e) {
                    _1('[PrivacyTool] Failed to post Init message: ' + e)
                }
            }

            function _73(_38, _31) {
                if (!_38) return;
                var _49 = 0;

                function _56() {
                    if (_49 >= _38.length) {
                        _31();
                        return
                    }
                    var _6 = _38[_49];
                    _125(_6);
                    _49++;
                    var _14;
                    var _55 = _88(_6);
                    var _43 = _55.split('?')[0];
                    if (_43.endsWith('.js')) {
                        _14 = document.createElement('script');
                        if (_43.endsWith('.min.js')) _14.type = 'module';
                        _14.src = _55
                    } else if (_43.endsWith('.css')) {
                        _14 = document.createElement('link');
                        _14.rel = 'stylesheet';
                        _14.href = _55
                    } else {
                        _1('[PrivacyTool] Unsupported script type: ' + _55);
                        _56();
                        return
                    }
                    _14.onload = _56;
                    _30.appendChild(_14)
                }
                _56()
            }

            function _88(_6) {
                if (_6.includes('://')) return _6;
                return _6.startsWith('/') ? _17 + _6 : _17 + '/' + _6
            }

            function _125(_6) {
                _1('Privacy Tool loading script: ' + _6)
            }

            function _71(_9) {
                if (_9.message && _9.message.indexOf('MouseflowPrivacyTool_') === 0) _1('Received ' + _9.message + (_9.requestUrl ? ', request URL: ' + _9.requestUrl : ''))
            }
            this._25 = _25
        }

        function _364(_0, _23, _44, _12, _18, _16, _2, _60) {
            var _1, _30, _37, _17, _128, _228, _83;

            function _25(_76, _317, _31) {
                _1 = _76;
                _83 = _31;
                _228 = !!_317;
                _1('Tagger tool starting, allowedAppUrls: ' + _23.join(', '));
                _30 = _44._85();
                if (!_30) {
                    _1('Tagger tool not initiated - could not create root HTML element');
                    return
                }
                if (!_0.opener) {
                    _1('Tagger tool not initiated - window.opener is missing');
                    return
                }
                _63()
            }

            function _63() {
                _16._115(_0, 'message', function(_8) {
                    if (!_23.includes(_8.origin)) return;
                    _71(_8.data);
                    switch (_8.data.message) {
                        case 'MouseflowTaggerTool_Init_Received':
                            _12._86(_37);
                            _17 = _8.origin;
                            break;
                        case 'MouseflowTaggerTool_Init_Success':
                            _73(_8.data.scripts, function() {
                                taggerToolWidget.start(_17, _128, _60._102());
                                if (typeof _83 === 'function') _83();
                                _1('Tagger tool scripts loaded')
                            });
                            break
                    }
                });
                _37 = _12._140(_227, 500);
                _12._81(function() {
                    _12._86(_37)
                }, 10000);
                _227()
            }

            function _227() {
                _1('[TaggerTool] Posting Init message to opener');
                try {
                    for (const _15 of _23) {
                        _0.opener.postMessage({
                            message: 'MouseflowTaggerTool_Init',
                            startWithHeatMap: _228
                        }, _15)
                    }
                } catch (e) {
                    _1('[TaggerTool] Failed to post Init message: ' + e)
                }
            }

            function _73(_38, _31) {
                if (!_38) return;
                var _49 = 0;

                function _56() {
                    if (_49 >= _38.length) {
                        _31();
                        return
                    }
                    var _6 = _38[_49];
                    _125(_6);
                    _49++;
                    var _14;
                    var _55 = _88(_6);
                    var _43 = _55.split('?')[0];
                    if (_43.endsWith('.html')) {
                        fetch(_55).then(async _116 => {
                            _128 = await _116.text();
                            _56()
                        });
                        return
                    } else if (_43.endsWith('.css')) {
                        _14 = document.createElement('link');
                        _14.rel = 'stylesheet';
                        _14.href = _55
                    } else {
                        _14 = document.createElement('script');
                        if (_43.endsWith('.min.js')) _14.type = 'module';
                        _14.src = _55
                    }
                    _14.onload = _56;
                    _30.appendChild(_14)
                }
                _56()
            }

            function _88(_6) {
                if (_6.includes('://')) return _6;
                return _6.startsWith('/') ? _17 + _6 : _17 + '/' + _6
            }

            function _125(_6) {
                _1('Tagger tool loading script: ' + _6)
            }

            function _71(_9) {
                if (_9.message && _9.message.indexOf('MouseflowTaggerTool_') === 0) _1('Received ' + _9.message + (_9.requestUrl ? ', request URL: ' + _9.requestUrl : ''))
            }
            this._25 = _25
        }

        function _250(_0, _23, _44, _12, _18, _16, _2) {
            let _1, _30, _37, _17, _128;

            function _25(_76) {
                _1 = _76;
                _1('Element picker starting, allowedAppUrls: ' + _23.join(', '));
                _30 = _44._85();
                if (!_30) {
                    _1('Element picker not initiated - could not create root HTML element');
                    return
                }
                if (!_0.opener) {
                    _1('Element picker not initiated - window.opener is missing');
                    return
                }
                _63()
            }

            function _63() {
                _16._115(_0, 'message', function(_8) {
                    if (!_23.includes(_8.origin)) return;
                    _71(_8.data);
                    switch (_8.data.message) {
                        case 'MouseflowElementPicker_Init_Received':
                            _12._86(_37);
                            _17 = _8.origin;
                            break;
                        case 'MouseflowElementPicker_Init_Success':
                            _73(_8.data.scripts, () => {
                                _0.elementPicker.start(_17, _128, _2.location.href, _320);
                                _1('Element picker scripts loaded')
                            });
                            break
                    }
                });
                _37 = _12._140(_229, 500);
                _12._81(function() {
                    _12._86(_37)
                }, 10000);
                _229()
            }

            function _229() {
                _1('[ElementPicker] Posting Init message to opener');
                try {
                    for (const _15 of _23) {
                        _0.opener.postMessage({
                            message: 'MouseflowElementPicker_Init'
                        }, _15)
                    }
                } catch (e) {
                    _1('[ElementPicker] Failed to post Init message: ' + e)
                }
            }

            function _320(_36) {
                _0.opener.postMessage({
                    message: 'MouseflowElementPicker_Result',
                    selector: _36.selector,
                    pageUrl: _36.pageUrl
                }, _17)
            }

            function _73(_38, _31) {
                if (!_38) return;
                let _49 = 0;

                function _56() {
                    if (_49 >= _38.length) {
                        _31();
                        return
                    }
                    const _6 = _38[_49];
                    _1('Element picker loading script: ' + _6);
                    _49++;
                    const _55 = _88(_6);
                    const _43 = _55.split('?')[0];
                    let _14;
                    if (_43.endsWith('.html')) {
                        fetch(_55).then(async _116 => {
                            _128 = await _116.text();
                            _56()
                        });
                        return
                    } else if (_43.endsWith('.css')) {
                        _14 = document.createElement('link');
                        _14.rel = 'stylesheet';
                        _14.href = _55
                    } else {
                        _14 = document.createElement('script');
                        _14.type = 'module';
                        _14.src = _55
                    }
                    _14.onload = _56;
                    _30.appendChild(_14)
                }
                _56()
            }

            function _88(_6) {
                if (_6.includes('://')) return _6;
                return _6.startsWith('/') ? _17 + _6 : _17 + '/' + _6
            }

            function _71(_9) {
                if (_9.message && _9.message.indexOf('MouseflowElementPicker_') === 0) _1('Received ' + _9.message)
            }
            this._25 = _25
        }

        function _343(_2, _179, _202) {
            function _102() {
                if (_2.forcePath && _2.path) return _2.path.toLowerCase();
                var _41 = (_2.crossDomainSupport ? _2.location.hostname : '') + (_2.path || (_2.decodePathName ? decodeURIComponent(_2.location.pathname) : _2.location.pathname)).toLowerCase();
                var _231 = (_2.includeHashInPath ? _2.location.hash : '').toLowerCase();
                var _64 = _2.location.search.toLowerCase();
                if (_41 !== '/' && _41.slice(-1) === '/' && (!_2.includeQueryStringInPath && !_2.includeHashInPath)) _41 = _41.slice(0, -1);
                return _323(_41 + (_2.includeQueryStringInPath ? _64 : '') + _231) || _41 + _324(_64) + _231
            }

            function _323(_41) {
                return _179.filter(function(_33) {
                    return _338(_41, _33)
                }).map(function(_33) {
                    return _331(_33)
                })[0]
            }

            function _324(_64) {
                if (_64[0] === '?') _64 = _64.slice(1);
                var _48;
                var _187 = [];
                var _325 = /([^&=]+)=?([^&]*)/g;
                while ((_48 = _325.exec(_64)) !== null) {
                    var _35 = _202.indexOf(_48[1]);
                    if (_48[2] && _35 > -1) _187[_35] = _48[0]
                }
                return _187.length ? '?' + _187.filter(hasValue).join('&') : (_2.includeQueryStringInPath && _64 ? '?' + _64 : '')
            }

            function _338(_41, _33) {
                var _232 = _41.indexOf('?');
                if (!_2.includeQueryStringInPath && _232 > -1) _41 = _41.slice(0, _232);
                switch (_33._95) {
                    case 'equals':
                        return _41 === _33._4.toLowerCase();
                    case 'startsWith':
                        return _41.substr(0, _33._4.length) === _33._4;
                    case 'endsWith':
                        return _41.substr(-_33._4.length) === _33._4;
                    case 'contains':
                        return _41.includes(_33._4.toLowerCase());
                    case 'regex':
                        return new RegExp(_33._4).test(_41);
                    default:
                        return false
                }
            }

            function _331(_33) {
                if (_33._332) return _33._332;
                switch (_33._95) {
                    case 'startsWith':
                        return _33._4 + '*';
                    case 'endsWith':
                        return '*' + _33._4;
                    default:
                        return _33._4
                }
            }

            function hasValue(value) {
                return value
            }
            this._102 = _102
        }

        function _248(_95, _0, _18, _1) {
            var _96 = _313(_95);
            this._119 = function(_5) {
                try {
                    return _96.getItem(_5) || null
                } catch (e) {
                    _1(e);
                    return null
                }
            };
            this._238 = function(_5) {
                try {
                    return _18._144(this._119(_5)) || null
                } catch (e) {
                    _1(e);
                    return null
                }
            };
            this._163 = function(_5, _4) {
                try {
                    _96.setItem(_5, _4);
                    return true
                } catch (e) {
                    _1(e);
                    return false
                }
            };
            this._240 = function(_5, _4) {
                try {
                    return this._163(_5, _18._127(_4))
                } catch (e) {
                    _1(e);
                    return false
                }
            };
            this._242 = function(_5) {
                try {
                    _96.removeItem(_5)
                } catch (e) {
                    _1(e)
                }
            };
            this._367 = function() {
                try {
                    var _5 = 'mf_supportsSessionStorage';
                    var _4 = '1';
                    _96.setItem(_5, _4);
                    var _335 = _96.getItem(_5) === _4;
                    _96.removeItem(_5);
                    return _335
                } catch (e) {
                    _1(e);
                    return false
                }
            };

            function _313(_95) {
                switch (_95) {
                    case 'local':
                        return _0.localStorage;
                    case 'session':
                        return _0.sessionStorage;
                    default:
                        throw Error('Unknown storage type: ' + (_95 || 'null'))
                }
            }
        }

        function _337(_0, _18, _2, _1) {
            var _24 = _0.document;
            var _47 = _0.location;
            var _297 = 7776000000;
            this._292 = function(_69) {
                var _237 = _69 + '=';
                var _236 = _24.cookie.split(';');
                for (var i = 0; i < _236.length; i++) {
                    var c = _236[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1)
                    }
                    if (c.indexOf(_237) === 0) {
                        return c.substring(_237.length, c.length)
                    }
                }
                return ''
            };
            this._119 = function(_5) {
                try {
                    return this._292(_5)
                } catch (e) {
                    _1(e);
                    return null
                }
            };
            this._238 = function(_5) {
                try {
                    return _18._144(this._119(_5)) || null
                } catch (e) {
                    _1(e);
                    return null
                }
            };
            this._301 = function(_69, _4, _118, _53) {
                var _239 = '';
                if (_118 == 1) {
                    var _80 = new Date();
                    _80.setTime(_80.getTime() + _297);
                    _239 = '; expires=' + _80.toGMTString()
                }
                var _300 = _2.secureCookie ? 'secure;' : '';
                _24.cookie = _69 + '=' + _4 + _239 + '; path=/; domain=' + _53 + ';' + _300 + 'SameSite=Strict;'
            };
            this._163 = function(_5, _4, _118, _53) {
                try {
                    this._301(_5, _4, _118, _53);
                    return true
                } catch (e) {
                    _1(e);
                    return false
                }
            };
            this._240 = function(_5, _4, _118, _53) {
                try {
                    return this._163(_5, _18._127(_4), _118, _53)
                } catch (e) {
                    _1(e);
                    return false
                }
            };
            this._242 = function(_5) {
                try {
                    _24.cookie = _5 + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/; domain=' + _18._153(_47, _2) + ';'
                } catch (e) {
                    _1(e)
                }
            }
        }

        function _382(_0, _12, _18, _2, _1) {
            this._339 = function() {
                _0._mfq = []
            };
            this._170 = function() {
                if (!_0._mfq) this._339();
                for (var _35 = 0; _35 < _0._mfq.length; _35++) {
                    var _52 = _0._mfq[_35];
                    if (_52 && _52.length) {
                        var _243 = true;
                        if (_52[0] === 'config') _2._123.apply(_2, _52.slice(1));
                        else if (_52[0] === 'newPageView') _2._234.apply(_2, _52.slice(1));
                        else _243 = false;
                        if (_243) delete _0._mfq[_35]
                    }
                }
            };
            this._25 = function() {
                _0._mfq = new _105(_0._mfq)
            };
            this._423 = function() {
                _0._mfq.push.apply(_0._mfq, arguments)
            };
            this._424 = function() {
                return _0._mfq
            };

            function _105(_131) {
                if (!_131) _131 = [];
                var _150 = this;
                _12._81(function() {
                    for (var _35 = 0; _35 < _131.length; _35++) _150.push(_131[_35])
                }, 1)
            }
            _105.prototype.push = function(_52) {
                if (!_52) return;
                try {
                    if (typeof _52 === 'object' && _52.length) {
                        _0.mouseflow[_52.slice(0, 1)].apply(_0.mouseflow, _52.slice(1))
                    } else if (typeof _52 === 'function') {
                        _52(_0.mouseflow)
                    }
                } catch (error) {
                    var _165 = 'Failed to execute item on action queue';
                    var _244 = _18._127(_52);
                    if (_244) _165 += '\n' + _244;
                    _165 += '\n' + error;
                    _1(_165)
                }
            }
        }

        function _327(_22, _18) {
            const _371 = ['target', 'button', 'pageX', 'pageY', 'which', 'data', 'origin', 'source', 'touches', 'key', 'clientX', 'clientY'];
            let _113 = [];

            function _203(_34, _29, _51, _173, _40) {
                const _132 = !!_40._132;
                const _169 = function(_32) {
                    let _117 = [];
                    if (_32.composedPath && (_32.target ? .shadowRoot || _51)) _117 = _32.composedPath();
                    const _245 = _32;
                    _32 = _370(_32);
                    _32.preventDefault = function() {
                        _245.preventDefault()
                    };
                    _32.stopPropagation = function() {
                        _245.stopPropagation()
                    };
                    if (_32.target ? .shadowRoot && _117.length) _32.target = _117[0];
                    if (_51) {
                        _32.delegatedTarget = _247(function(_78, _10) {
                            return _117.length ? _117[_10] : (_78 ? _22._168(_78) : _32.target)
                        }, _51);
                        if (!_32.delegatedTarget && !_40._447) return;
                        if (_40._368 && _32.target !== _32.delegatedTarget) return
                    } else if (_40._368 && _32.target !== _34) {
                        return
                    }
                    if (_40._426) _32.preventDefault();
                    if (_40._425) _32.stopPropagation();
                    _173.apply(this, arguments)
                };
                _34.addEventListener(_29, _169, {
                    capture: _132
                });
                _113.push({
                    _34,
                    _29,
                    _173,
                    _169,
                    _132
                })
            }

            function _370(_32) {
                const _246 = {};
                _371.forEach(function(_5) {
                    if (_32[_5] != undefined) _246[_5] = _32[_5]
                });
                return _246
            }

            function _148(_16) {
                _16._34.removeEventListener(_16._29, _16._169, {
                    capture: _16._132
                })
            }

            function _247(_219, _51, _34, _35) {
                if (!_35) _35 = 0;
                _34 = _219(_34, _35);
                if (!_34 || !_51) return null;
                if (_18._59(_34, _51)) return _34;
                return _247(_219, _51, _34, ++_35)
            }
            this._115 = function(_34, _29, _51, _31, _40) {
                if (typeof _51 === 'function') {
                    _40 = _31;
                    _31 = _51;
                    _51 = null
                }
                _203(_34, _29, _51, _31, _40 || {})
            };
            this._421 = function(_34, _29, _31) {
                const _233 = [];
                for (const _16 of _113) {
                    const shouldRemove = _16._34 === _34 && _16._29 === _29 && (_31 ? _16._173 === _31 : true);
                    if (shouldRemove) {
                        _148(_16)
                    } else {
                        _233.push(_16)
                    }
                }
                _113 = _233
            };
            this._420 = function() {
                for (const _16 of _113) {
                    _148(_16)
                }
                _113 = []
            }
        }

        function _375(_1) {
            const _97 = new Map();
            const _176 = new Set();
            const _384 = new Set(['pageview']);
            this._203 = function(_29, _98) {
                if (typeof _98 !== 'function' || !_384.has(_29)) return;
                if (!_97.has(_29)) _97.set(_29, new Set());
                _97.get(_29).add(_98)
            };
            this._148 = function(_29, _98) {
                _97.get(_29) ? .delete(_98)
            };
            this._230 = function(_29) {
                _1('dispatchEvent, type: ' + _29);
                if (!_97.has(_29) || _176.has(_29)) return;
                _176.add(_29);
                try {
                    for (const _98 of _97.get(_29)) {
                        try {
                            _98()
                        } catch (e) {
                            _1(e)
                        }
                    }
                } finally {
                    _176.delete(_29)
                }
            }
        }

        function _386(_0, _54, _172, _174, _178, _177) {
            const _47 = _0.location;
            const _24 = _0.document;
            const _385 = URL.parse ? ? _164;

            function _164(_15) {
                var _59 = (_15 || '').match(/^(([^:]+:)?\/?\/?(([^:/?#]+)?:?(\d+)?))(\/.*?)?(\?.*?)?(#.*)?$/);
                return {
                    href: _59[0] || '',
                    origin: _59[1] || '',
                    protocol: _59[2] || '',
                    host: _59[3] || '',
                    hostname: _59[4] || '',
                    port: _59[5] || '',
                    pathname: _59[6] || '',
                    search: _59[7] || '',
                    hash: _59[8] || ''
                }
            }

            function _209(_383) {
                if (_177) return '';
                const _15 = _385(_383);
                return _15 ? .protocol && _15 ? .origin ? _15.origin : ''
            }
            this.debug = _0.mouseflowDebug || _47.search.indexOf('mf_debug=1') !== -1;
            this.includeDebugTime = false;
            this.forceStart = _47.search.indexOf('mf_force=1') !== -1;
            this.autoStart = _0.mouseflowAutoStart !== false && _47.search.indexOf('mf_autostart=0') === -1;
            this.enableBots = false;
            this.touchEvents = !_0.mouseflowDisableTouch;
            this.htmlDelay = _0.mouseflowHtmlDelay || 1000;
            this.newPageViewHtmlDelay = _0.mouseflowNewPageViewHtmlDelay || 500;
            this.compress = _0.mouseflowCompress !== false && _47.search.indexOf('mf_compress=0') === -1;
            this.compressFunction = null;
            this.autoTagging = _0.mouseflowAutoTagging !== false;
            this.path = _0.mouseflowPath;
            this.forcePath = false;
            this.crossDomainSupport = !!_0.mouseflowCrossDomainSupport;
            this.location = _164(_0.mouseflowHref || _47.href);
            this.hasCustomHref = !!_0.mouseflowHref;
            this.referrer = _209(_0.mouseflowReferrer !== undefined ? _0.mouseflowReferrer : _24.referrer);
            this.htmlFetchMode = _0.mouseflowHtmlFetchMode || 'post';
            this.sessionId = _0.mouseflowSessionId;
            this.honorDoNotTrack = _0.mouseflowHonorDoNotTrack || _178;
            this.gdprEnabled = _0.mouseflowForceGdpr || _174;
            this.keyLogging = !_0.mouseflowDisableKeyLogging && !this.gdprEnabled;
            this.domReuse = !_0.mouseflowDisableDomReuse;
            this.domDeduplicator = !_0.mouseflowDisableDomDeduplicator;
            this.includeSubDomains = !_0.mouseflowExcludeSubDomains;
            this.registerSubmitTimeout = _0.mouseflowRegisterSubmitTimeout || 2000;
            this.useUnload = !!_0.mouseflowUseUnload;
            this.replaceLastFormValues = _0.mouseflowReplaceLastFormValues || !this.keyLogging || this.gdprEnabled;
            this.useAllHoverSelectors = !!_0.mouseflowUseAllHoverSelectors;
            this.enableCssRecording = !!_0.mouseflowEnableCssRecording;
            this.secureCookie = !!_0.mouseflowSecureCookie;
            this.enableSpa = true;
            this.includeHashInPath = false;
            this.includeQueryStringInPath = false;
            this.autoTagPayments = true;
            this.preferStorageApi = !!_0.mouseflowPreferStorageApi;
            this.domMutationDetectorEnable = _0.domMutationDetectorEnable !== undefined ? _0.domMutationDetectorEnable : false;
            this.domMutationUseParentNode = _0.domMutationUseParentNode !== undefined ? _0.domMutationUseParentNode : true;
            this.domMutationUsePreviousSibling = _0.domMutationUsePreviousSibling !== undefined ? _0.domMutationUsePreviousSibling : false;
            this.domMutationCountThreshold = _0.domMutationCountThreshold !== undefined ? _0.domMutationCountThreshold : 20;
            this.domMutationTimeThresholdInSeconds = _0.domMutationTimeThresholdInSeconds !== undefined ? _0.domMutationTimeThresholdInSeconds : 10;
            this.liveHeatmapsEnabled = false;
            this.privacyToolEnabled = false;
            this.taggerToolEnabled = false;
            this.elementPickerEnabled = false;
            this.useIdSelectors = _0.mouseflowUseIdSelectors !== undefined ? _0.mouseflowUseIdSelectors : true;
            this.useSelectorGenerator = _0.mouseflowUseSelectorGenerator !== undefined ? _0.mouseflowUseSelectorGenerator : false;
            this.proxyAttachShadow = true;
            this.scrollSelector = _0.mouseflowScrollSelector;
            this.autoScrollSelector = _0.mouseflowAutoScrollSelector !== false;
            this.freezeElementIds = [];
            this.proxyValueSetter = false;
            this.decodePathName = false;
            this.forms = _0.mouseflowFormsConfiguration || null;
            this.notFoundIdentifiers = _0.mouseflowNotFoundIdentifiers || ["Not Found", "404"];
            this.debugDeadClick = _47.search.indexOf('mf_debugDeadClick=1') !== -1;
            this.enableDeadClick = true;
            this.enableDataLayerCapture = !!_0.mouseflowEnableDataLayerCapture;
            this.fixDynamicViewport = !!_0.mouseflowFixDynamicViewport;
            this.enableCustomFormFieldTracking = !!_0.mouseflowEnableCustomFormFieldTracking;
            this._170 = function() {
                const _129 = typeof _0.name === 'string' && _0.name.startsWith('mf_') ? _0.name.slice(3).split('_') : [];
                this.liveHeatmapsV3Enabled = true;
                if (!!_0.opener && _47.search.indexOf('mf_liveHeatmaps') !== -1) {
                    this.liveHeatmapsEnabled = true;
                    this.taggerToolEnabled = true;
                    return
                }
                if (_47.search.indexOf('mf_inspect') !== -1) {
                    this.privacyToolEnabled = true;
                    return
                }
                if (!!_0.opener && _129[0] === 'liveHeatmaps') {
                    this.liveHeatmapsEnabled = true;
                    this.taggerToolEnabled = true;
                    return
                }
                if (_129[0] === 'privacyTool') {
                    this.privacyToolEnabled = true;
                    return
                }
                if (`${_129[0]}_${_129[1]}` === 'tagger_tool') {
                    this.taggerToolEnabled = true;
                    return
                }
                if (!!_0.opener && _129[0] === 'elementPicker') {
                    this.elementPickerEnabled = true;
                    return
                }
                if (!_54._367()) return;
                if (_0.opener) {
                    if (_54._119('mf_privacyTool')) this.privacyToolEnabled = true;
                    else if (_54._119('mf_liveHeatmaps')) {
                        this.liveHeatmapsEnabled = true;
                        this.taggerToolEnabled = true
                    }
                }
            };
            this._234 = function(_43, _47) {
                this._123('href', _0.location.href);
                this.path = undefined;
                if (_43) this.path = _43.toString();
                if (_47) {
                    this.location = _47;
                    this.hasCustomHref = true
                }
            };
            this._123 = function(_5, _4) {
                if (_5[0] === '_') return;
                switch (_5) {
                    case 'href':
                        this.location = _164(_4);
                        this.hasCustomHref = _4 !== _0.location.href;
                        break;
                    case 'keyLogging':
                        this.keyLogging = this.keyLogging && _4;
                        break;
                    case 'gdprEnabled':
                        this.gdprEnabled = this.gdprEnabled || _4;
                        break;
                    case 'freezeElementIds':
                        this.freezeElementIds = Array.isArray(_4) ? _4 : ['' + _4];
                        break;
                    case 'referrer':
                        this.referrer = _209(_4);
                        break;
                    case 'hasCustomHref':
                        break;
                    case 'compressFunction':
                        this.compressFunction = function(_9) {
                            let _208, _210;
                            const _342 = new Promise(function(_116, _365) {
                                _208 = _116;
                                _210 = _365
                            });
                            const _36 = _4(_9, _208, _210);
                            return _36 instanceof Promise ? _36 : _342
                        };
                        break;
                    default:
                        this[_5] = _4;
                        break
                }
            }
        }

        function _341(_0, _22) {
            const _138 = 'mf-root';
            let _212, _87;
            _92(_0);

            function _92(_106) {
                _212 = _106;
                _87 = _106.document;
                _22._92(_106)
            }

            function _198() {
                if (!_87.body) return null;
                const _42 = _345();
                if (!_350()) _162();
                return _42
            }

            function _85() {
                const _30 = _198();
                const _42 = _30 ? .shadowRoot.getElementById('mouseflow');
                return _42
            }

            function _196() {
                const _42 = _215();
                if (!_42) return;
                const _213 = _212.getComputedStyle(_87.body);
                const _181 = parseInt(_213.marginTop) + parseInt(_213.paddingTop);
                if (_181) {
                    _42.style.top = `${_181 * -1}px`;
                    _42.style.height = `calc(100% + ${_181}px)`;
                    _42.style.left = '0px';
                    _42.style.width = '100%'
                }
            }

            function _215() {
                return _87.getElementsByTagName(_138)[0]
            }

            function _345() {
                const _42 = _215() ? ? _87.createElement(_138);
                if (!_42.id) _42.id = 'mouseflow';
                if (_42.innerHTML ? .trim() === '') _42.innerHTML = _357();
                if (!_87.contains(_42)) _87.body.appendChild(_42);
                _196();
                return _42
            }

            function _350() {
                return !!_22._289(_138)
            }

            function _162() {
                _22._162(_138, class extends _22._94('HTMLElement') {
                    connectedCallback() {
                        const _214 = this.shadowRoot ? ? this.attachShadow({
                            mode: 'open'
                        });
                        if (_214.getElementById('mouseflow')) return;
                        _214.innerHTML = ('<div id="mouseflow">' + '<style type="text/css">' + '@font-face {' + 'font-family: "Open Sans";' + 'font-style: normal;' + 'font-weight: 400;' + 'src: url(https://cdn.mouseflow.com/fonts/opensans/opensans-regular.woff2) format("woff2");' + '}' + '@font-face {' + 'font-family: "Open Sans";' + 'font-style: normal;' + 'font-weight: 700;' + 'src: url(https://cdn.mouseflow.com/fonts/opensans/opensans-bold.woff2) format("woff2");' + '}' + ':host {' + 'all: initial;' + 'font: 400 14px/1.4 "Open Sans", Arial, sans-serif;' + 'color: #666;' + '}' + '.load-font {' + 'position: absolute;' + 'visibility: hidden;' + 'width: 0px;' + 'height: 0px;' + 'overflow: hidden;' + '}' + '* {' + 'background: transparent;' + 'border: 0;' + 'border-image-outset: 0s;' + 'border-image-repeat: stretch;' + 'border-image-slice: 100%;' + 'border-image-source: none;' + 'border-image-width: 1;' + 'border-color: #000;' + 'border-radius: 0;' + 'border-width: 0;' + 'border-style: none;' + 'box-sizing: border-box;' + 'clip: auto;' + 'float: none;' + 'color: inherit;' + 'font-family: inherit;' + 'font-size: inherit;' + 'font-style: inherit;' + 'font-weight: inherit;' + 'width: auto;' + 'height: auto;' + 'min-width: auto;' + 'min-height: auto;' + 'max-width: auto;' + 'max-height: auto;' + 'letter-spacing: normal;' + 'line-height: normal;' + 'margin: 0;' + 'padding: 0;' + 'text-decoration: none;' + 'text-indent: 0;' + 'text-transform: none;' + 'vertical-align: baseline;' + 'text-align: left;' + 'overflow: visible;' + 'top: auto;' + 'right: auto;' + 'bottom: auto;' + 'left: auto;' + '-webkit-transition: none;' + 'transition: none;' + '}' + '.mf-is-hidden {' + 'display: none;' + '}' + '</style>' + '<div class="load-font">load font</div>' + '<slot />' + '</div>')
                    }
                })
            }

            function _357() {
                return ('<style type="text/css">' + '@font-face {' + 'font-family: "Mouseflow Open Sans";' + 'font-style: normal;' + 'font-weight: 400;' + 'src: url(https://cdn.mouseflow.com/fonts/opensans/opensans-regular.woff2) format("woff2");' + '}' + '@font-face {' + 'font-family: "Mouseflow Open Sans";' + 'font-style: normal;' + 'font-weight: 700;' + 'src: url(https://cdn.mouseflow.com/fonts/opensans/opensans-bold.woff2) format("woff2");' + '}' + '#mouseflow,' + 'mf-root {' + 'all: initial;' + 'font: 400 14px/1.4 "Mouseflow Open Sans", Arial, sans-serif;' + 'color: #666;' + '}' + '#mouseflow *,' + 'mf-root * {' + 'background: transparent;' + 'border: 0;' + 'border-image-outset: 0s;' + 'border-image-repeat: stretch;' + 'border-image-slice: 100%;' + 'border-image-source: none;' + 'border-image-width: 1;' + 'border-color: #000;' + 'border-radius: 0;' + 'border-width: 0;' + 'border-style: none;' + 'box-sizing: border-box;' + 'clip: auto;' + 'float: none;' + 'color: inherit;' + 'font-family: inherit;' + 'font-size: inherit;' + 'font-style: inherit;' + 'font-weight: inherit;' + 'width: auto;' + 'height: auto;' + 'min-width: auto;' + 'min-height: auto;' + 'max-width: auto;' + 'max-height: auto;' + 'letter-spacing: normal;' + 'line-height: normal;' + 'margin: 0;' + 'padding: 0;' + 'text-decoration: none;' + 'text-indent: 0;' + 'text-transform: none;' + 'vertical-align: baseline;' + 'text-align: left;' + 'overflow: visible;' + 'top: auto;' + 'right: auto;' + 'bottom: auto;' + 'left: auto;' + '-webkit-transition: none;' + 'transition: none;' + '}' + '#mouseflow .mf-is-hidden,' + 'mf-root .mf-is-hidden {' + 'display: none;' + '}' + '</style>')
            }
            this._92 = _92;
            this._198 = _198;
            this._85 = _85;
            this._196 = _196
        }

        function _362(_0, _22) {
            this._81 = function() {
                return _22._108(_0, 'setTimeout').apply(_0, arguments)
            };
            this._140 = function() {
                return _22._108(_0, 'setInterval').apply(_0, arguments)
            };
            this._431 = function() {
                _22._108(_0, 'clearTimeout').apply(_0, arguments)
            };
            this._86 = function() {
                _22._108(_0, 'clearInterval').apply(_0, arguments)
            }
        }

        function _387(_0, _143, _201, _22) {
            var _24 = _0.document;

            function _156(_3, _45) {
                var _100 = _3.classList;
                if (_100 && _45) return _100.contains(_45);
                var _74 = _124(_3);
                return _74.indexOf(_45) !== -1
            }

            function _158(_3, _45) {
                var _100 = _3.classList;
                if (_100 && _45) {
                    _3.classList.add(_45);
                    return
                }
                var _74 = _124(_3);
                if (_74.indexOf(_45) === -1) _74.push(_45);
                _3.className = _74.join(' ')
            }

            function _161(_3, _45) {
                var _100 = _3.classList;
                if (_100 && _45) {
                    _3.classList.remove(_45);
                    return
                }
                var _74 = _124(_3);
                var _35 = _74.indexOf(_45);
                if (_35 !== -1) _74.splice(_35, 1);
                _3.className = _74.join(' ')
            }

            function _255(_3, _45, _188) {
                if (_188 === undefined) _188 = !_156(_3, _45);
                if (_188) {
                    _158(_3, _45)
                } else {
                    _161(_3, _45)
                }
            }

            function _124(_3) {
                var _216 = typeof _3.className === 'string' ? _3.className.replace(/\s+/g, ' ').trim() : '';
                return _216 !== '' ? _216.split(' ') : []
            }

            function _256() {
                return _143.max((_24.body || {}).scrollHeight || 0, (_24.body || {}).offsetHeight || 0, _24.documentElement.scrollHeight || 0, _24.documentElement.offsetHeight || 0, _24.documentElement.clientHeight || 0)
            }
            const SCROLLABLE_OVERFLOW = new Set(['auto', 'scroll', 'overlay']);
            const INVISIBLE_VISIBILITY = new Set(['hidden', 'collapse']);

            function _171() {
                let _67 = _24.scrollingElement ? ? _24.documentElement;
                const _109 = _24.querySelectorAll(`            *:not(                mf-root,                script,                style,                link,                br,                head,                head *,                noscript,                noscript *            )        `);
                for (const _3 of _109) {
                    if (_3.scrollHeight <= _3.clientHeight) continue;
                    if (_67.scrollHeight >= _3.scrollHeight) continue;
                    if (_67.clientHeight * 0.95 >= _3.clientHeight) continue;
                    const {
                        overflowY,
                        visibility
                    } = _0.getComputedStyle(_3);
                    if (!SCROLLABLE_OVERFLOW.has(overflowY)) continue;
                    if (INVISIBLE_VISIBILITY.has(visibility)) continue;
                    const {
                        width,
                        height
                    } = _3.getBoundingClientRect();
                    if (width <= 0 || height <= 0) continue;
                    const _360 = _3.checkVisibility ? .({
                        opacityProperty: true
                    });
                    if (_360 === false) continue;
                    _67 = _3
                }
                return _67
            }

            function _272(_2) {
                let _67 = _24.querySelector(_2.scrollSelector);
                if (!_67 && _2.autoScrollSelector) _67 = _171();
                if (!_67) _67 = _24.scrollingElement ? ? _24.documentElement;
                return _67
            }

            function _273(_3) {
                return _3 === (_24.scrollingElement ? ? _24.documentElement)
            }

            function _51(_141, _359) {
                var _36 = [];
                if (!_141) return _36;
                for (var _10 = 0; _10 < _141.length; _10++) {
                    if (_359(_141[_10], _10)) _36.push(_141[_10])
                }
                return _36
            }

            function _257(_206) {
                var _10 = Math.floor(Math.log(_206) / Math.log(1024));
                return (_206 / Math.pow(1024, _10)).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][_10]
            }

            function _259(_122) {
                var _142 = _122.length;
                while (_142) {
                    var _10 = _143.floor(_143.random() * _142--);
                    var _355 = _122[_142];
                    _122[_142] = _122[_10];
                    _122[_10] = _355
                }
            }

            function _251(_28) {
                if (!_28) return _28;
                return _28.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            }

            function _166(_28) {
                if (!_28) return _28;
                return _28.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            }

            function _167(url) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(url.trim())
            }

            function _261(_28) {
                return _28.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(_48, _354, _15) {
                    _15 = _166(_15);
                    return _167(_15) ? '<a href="' + _15 + '" target="_blank">' + _354 + '</a>' : _48
                })
            }

            function _262(_4) {
                if (!_4) return _4;
                return _4.replace(/([^a-zA-Z\d-_])/g, '\\$1').replace(/^(-)?(\d)/, '$1\\3$2 ')
            }

            function _144(_4) {
                return _4 ? _201.parse(_4) : undefined
            }

            function _127(_4) {
                var _36;
                if (Array.prototype.toJSON) {
                    var _353 = Array.prototype.toJSON;
                    delete Array.prototype.toJSON;
                    _36 = _201.stringify(_4);
                    Array.prototype.toJSON = _353
                } else if (_4) {
                    _36 = _201.stringify(_4)
                }
                return _36
            }

            function _263(_352, _349) {
                var _101 = _146(_352);
                var _28 = _146(_349);
                var _381 = _143.max(_101.length, _28.length);
                if (_28 == 'NaN' || _101 == 'NaN') {
                    return false
                }
                for (var _10 = 0; _10 < _381; _10++) {
                    _101[_10] = _101[_10] || 0;
                    _28[_10] = _28[_10] || 0;
                    if (_101[_10] == _28[_10]) {
                        continue
                    }
                    return _101[_10] > _28[_10]
                }
                return true
            }

            function _146(_372) {
                var _241 = _372.split('.');
                var _249 = [];
                for (var _10 = 0; _10 < _241.length; _10++) {
                    _249.push(parseInt(_241[_10]))
                }
                return _249
            }

            function _266(_28, _340) {
                var _36 = _28;
                while (_36[_36.length - 1] === (_340 || ' ')) _36 = _36.slice(0, -1);
                return _36
            }

            function _268(_369) {
                var _48;
                var _64 = /([^?&=]+)(?:=([^&]*))?/g;
                var _282 = {};
                while ((_48 = _64.exec(_369)) !== null) {
                    var _5 = _48[1];
                    var _4 = _48[2] ? window.decodeURIComponent(_48[2].replace(/\+/g, ' ')) : null;
                    _282[_5] = _4
                }
                return _282
            }
            const platformRegexes = [{
                family: 'windows',
                regex: [/microsoft (windows) (vista|xp)/i, /(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[/]?([\d.\w]*)/i, /(windows)[/]?([ntce\d.]+\w)(?!.+xbox)/i, /(win(?=3|9|n)|win 9x )([nt\d.]+)/i]
            }, {
                family: 'ios',
                regex: [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[/])([\d.]+)/i, /cfnetwork\/.+darwin/i]
            }, {
                family: 'macos',
                regex: [/(mac os x) ?([\w. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i]
            }, {
                family: 'android',
                regex: [/droid ([\w.]+)\b.+android[- ]x86/i, /(android)[-/]?([\w.]*)/i]
            }, {
                family: 'linux',
                regex: [/\b(joli|palm)\b ?(?:os)?\/?([\w.]*)/i, /(mint)[/()]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-/]?(?!chrom|package)([-\w.]*)/i, /(hurd|linux) ?([\w.]*)/i, /(gnu) ?([\w.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[/]?(?!amd|[ix346]{1,2}86)([\w.]*)/i, /(haiku) (\w+)/i]
            }];
            const browserRegexes = [{
                browser: 'chrome',
                regex: [/\b(?:crmo|crios)\/([\w.]+)/i]
            }, {
                browser: 'edge',
                regex: [/edg(?:e|ios|a)?\/([\w.]+)/i]
            }, {
                browser: 'opera',
                regex: [/(opera mini)\/([-\w.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w.]+)/i, /(opera)(?:.+version\/|[/]+)([\w.]+)/i, /opios[/]+([\w.]+)/i, /\bopr\/([\w.]+)/i]
            }, {
                browser: 'ie',
                regex: [/(?:ms|\()(ie) ([\w.]+)/i, /trident.+rv[: ]([\w.]{1,9})\b.+like gecko/i]
            }, {
                browser: 'firefox',
                regex: [/\bfocus\/([\w.]+)/i, /fxios\/([\w.-]+)/i, /(?:mobile|tablet);.*(firefox)\/([\w.-]+)/i, /mobile vr; rv:([\w.]+)\).+firefox/i, /(firefox)\/([\w.]+)/i]
            }, {
                browser: 'opera',
                regex: [/\bopt\/([\w.]+)/i, /coast\/([\w.]+)/i]
            }, {
                browser: 'samsung',
                regex: [/(samsung)browser\/([\w.]+)/i]
            }, {
                browser: 'chrome',
                regex: [/ wv\).+(chrome)\/([\w.]+)/i, /chrome\/([\w.]+) mobile/i, /(chrome)\/v?([\w.]+)/i]
            }, {
                browser: 'android',
                regex: [/droid.+ version\/([\w.]+)\b.+(?:mobile safari|safari)/i]
            }, {
                browser: 'safari',
                regex: [/version\/([\w.,]+) .*mobile(?:\/\w+ | ?)safari/i, /iphone .*mobile(?:\/\w+ | ?)safari/i, /version\/([\w.,]+) .*(safari)/i, /webkit.+?(mobile ?safari|safari)(\/[\w.]+)/i]
            }];

            function _271(_285) {
                var _253;
                var _254;
                for (let _10 = 0; _10 < platformRegexes.length; _10++) {
                    var _281 = platformRegexes[_10];
                    let _48 = _281.regex.find(function(_184) {
                        return _184.test(_285)
                    });
                    if (_48) {
                        _254 = _281.family;
                        break
                    }
                }
                for (let _10 = 0; _10 < browserRegexes.length; _10++) {
                    var _252 = browserRegexes[_10];
                    let _48 = _252.regex.find(function(_184) {
                        return _184.test(_285)
                    });
                    if (_48) {
                        _253 = _252.browser;
                        break
                    }
                }
                return {
                    browser: _253,
                    os: _254
                }
            }

            function _59(_3, _20) {
                if (_3.nodeType !== 1) return false;
                if (_3.msMatchesSelector) return _3.msMatchesSelector(_20);
                if (_3.matches) return _3.matches(_20);
                return false
            }

            function _267(_78, _346) {
                var _39 = _22._168(_78);
                return _39 && _39.hasAttribute && _39.hasAttribute(_346)
            }

            function _154(ipaddress) {
                if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
                    return (true)
                }
                return (false)
            }

            function _153(_28, _2) {
                if (_154(_28.hostname) || !_2.includeSubDomains) return _28.hostname;
                var _53 = _28.href;
                var _366 = /\.co\.|\.com\.|\.ac\.|\.org\.|\.gov\.|\.edu\.|\.net\./;
                _53 = _53.replace(/^http(s)?:\/\/?/i, '').replace(/^([^/]+)\/.*/i, '$1').replace(/:[\d]*$/, '');
                if (_366.test(_53)) _53 = _53.replace(/^([^.]+\.){1,}([^.]+\.[^.]+\.[^.]+)$/i, '$2');
                else _53 = _53.replace(/^([^.]+\.){1,}([^.]+\.[^.]+)$/i, '$2');
                return '.' + _53
            }
            this._153 = _153;
            this._154 = _154;
            this._156 = _156;
            this._158 = _158;
            this._161 = _161;
            this._255 = _255;
            this._124 = _124;
            this._256 = _256;
            this._51 = _51;
            this._257 = _257;
            this._259 = _259;
            this._251 = _251;
            this._166 = _166;
            this._167 = _167;
            this._261 = _261;
            this._262 = _262;
            this._144 = _144;
            this._127 = _127;
            this._263 = _263;
            this._146 = _146;
            this._266 = _266;
            this._59 = _59;
            this._267 = _267;
            this._268 = _268;
            this._271 = _271;
            this._171 = _171;
            this._272 = _272;
            this._273 = _273
        }

        function _374(_0, _1) {
            const _316 = _0.Object;
            let _133;
            let _72, _135, _27, _77;
            this._92 = function(_106) {
                _72 = _106;
                _135 = _106.document;
                _27 = {}
            };
            this._92(_0);
            this._94 = function(_7) {
                const _99 = _72[_7];
                const _277 = `function ${_7}() { [native code] }`;
                let _11 = _99;
                try {
                    while (_27[_7] === undefined) {
                        if (!_11) {
                            _11 = _159(_7);
                            _27[_7] = _11;
                            _157(_7, _11);
                            break
                        } else if (_134(_11) === _277) {
                            _27[_7] = _11;
                            break
                        } else if (_134(_11.prototype ? .constructor) === _277) {
                            _27[_7] = _11.prototype.constructor;
                            break
                        } else {
                            _11 = Object.getPrototypeOf(_11)
                        }
                    }
                } catch (e) {
                    _1(e)
                }
                return _27[_7] ? ? _99
            };
            this._190 = function(_7, _57) {
                const _99 = _72[_7];
                const _290 = `function ${_57}() { [native code] }`;
                const _82 = `${_7}.${_57}`;
                try {
                    if (_27[_82] === undefined) {
                        let _11 = this._94(_7).prototype;
                        let _61 = this._108(_11, _57);
                        if (_134(_61) !== _290) {
                            _27[_7] = _159(_7);
                            _11 = _27[_7].prototype;
                            _61 = _11[_57];
                            _157(_7, _11)
                        }
                        _27[_82] = _61
                    }
                } catch (e) {
                    _1(e)
                }
                return _27[_82] ? ? _99[_57]
            };
            this._93 = function(_7, _70, _68) {
                const _99 = _72[_7];
                const _293 = `function ${_68} ${_70}() { [native code] }`;
                const _82 = `${_7}.${_70}.${_68}`;
                try {
                    if (_27[_82] === undefined) {
                        let _11 = this._94(_7).prototype;
                        let _90 = _139(_11, _70, _68);
                        if (_134(_90) !== _293) {
                            _27[_7] = _159(_7);
                            _11 = _27[_7].prototype;
                            _90 = _139(_11, _70, _68) ? ? _90;
                            _157(_7, _11)
                        }
                        _27[_82] = _90
                    }
                } catch (e) {
                    _1(e)
                }
                return _27[_82] ? ? _139(_99, _70, _68)
            };
            this._108 = function(_34, _69) {
                let _270;
                if (_0.Zone ? .__symbol__) _270 = _34[_0.Zone.__symbol__(_69)];
                return _270 || _34[_69]
            };

            function _139(_11, _70, _68) {
                return Object.getOwnPropertyDescriptor(_11, _70)[_68]
            }
            this._199 = function(_7, _57, _112) {
                const _61 = this._190(_7, _57);
                const _310 = Array.from(arguments).slice(3);
                return _61.apply(_112, _310)
            };
            this._162 = function(_69, _295) {
                this._199('CustomElementRegistry', 'define', _72.customElements, _69, _295)
            };
            this._289 = function(_69) {
                return this._199('CustomElementRegistry', 'get', _72.customElements, _69)
            };

            function _159(_7) {
                if (!_77) {
                    _77 = _135.createElement('iframe');
                    _77.style.display = 'none';
                    _77.style.width = '0';
                    _77.style.height = '0';
                    _77.style.position = 'absolute';
                    _135.body.appendChild(_77)
                }
                const _11 = _77.contentWindow[_7];
                return _11
            }

            function _157(_7, _11) {
                for (const _5 in _27) {
                    const _103 = _5.split('.');
                    if (_103[0] !== _7) continue;
                    if (_103.length === 2) {
                        const _61 = _11[_103[1]];
                        if (_61) _27[_5] = _61
                    } else if (_103.length === 3) {
                        const _90 = _139(_11, _103[1], _103[2]);
                        if (_90) _27[_5] = _90
                    }
                }
            }

            function _134(_4) {
                return _4 ? .toString().replace(/\s+/g, ' ')
            }
            this._168 = function(_3) {
                const _329 = this._93('Node', 'parentNode', 'get');
                return _3 ? _329.apply(_3) : null
            };
            this._417 = function(_3) {
                const _326 = this._93('Node', 'nextSibling', 'get');
                return _3 ? _326.apply(_3) : null
            };
            this._416 = function(_3) {
                const _322 = this._93('Node', 'firstChild', 'get');
                return _3 ? _322.apply(_3) : null
            };
            this._379 = function(_3, _7) {
                let _11 = this._94(_7);
                return _3 instanceof _11
            };
            this._415 = function(_3) {
                const _321 = this._93('Node', 'childNodes', 'get');
                return _3 ? _321.apply(_3) ? ? [] : []
            };
            this._414 = function(_3) {
                const _318 = this._93('Node', 'parentElement', 'get');
                return _3 ? _318.apply(_3) : null
            };
            this._439 = function(_3) {
                return this._199('Node', 'getRootNode', _3)
            };
            this._438 = function(_3) {
                if (!_3) return false;
                if (_133 === undefined) {
                    try {
                        _133 = _135.createElement('div').attachShadow({
                            mode: 'open'
                        }).constructor
                    } catch {
                        _133 = _72.ShadowRoot
                    }
                }
                let _11 = _3;
                let _4 = null;
                while (_4 === null) {
                    _11 = _316.getPrototypeOf(_11);
                    if (!_11 || _11.constructor === _72.DocumentFragment) _4 = false;
                    if (_11 && _11.constructor === _133) _4 = true
                }
                return _4
            };
            this._395 = function() {
                if (!this._333('XMLHttpRequest') || !this._280('XMLHttpRequest', 'open') || !this._280('XMLHttpRequest', 'send')) {
                    return new _72.XMLHttpRequest()
                }
                const _328 = this._94('XMLHttpRequest');
                const _185 = new _328();
                this._286(_185, 'XMLHttpRequest', 'open');
                this._286(_185, 'XMLHttpRequest', 'send');
                return _185
            };
            this._333 = function(_7) {
                this._94(_7);
                return !!_27[_7]
            };
            this._280 = function(_7, _57) {
                this._190(_7, _57);
                return !!_27[`${_7}.${_57}`]
            };
            this._406 = function(_7, _70, _68) {
                this._93(_7, _70, _68);
                return !!_27[`${_7}.${_70}.${_68}`]
            };
            this._286 = function(_112, _7, _57) {
                const _61 = this._190(_7, _57);
                if (_61 !== _112[_57]) _112[_57] = _61.bind(_112)
            }
        }

        function _288(_0, _22, _191, _2, _1) {
            const _24 = _0.document;
            const _264 = ' :document-fragment: ';
            const _151 = new Map();
            const _205 = {
                _284: {
                    _58: ['attribute', 'id', 'class', 'tag', 'nthoftype'],
                    _278: ['.mf-*', /\[(?!data-mf-id=)/],
                    _279: ['[data-mf-id=*]'],
                    _276: 25,
                    _275: 25
                },
                _336: {
                    _58: ['attribute', 'id'],
                    _278: [/\[(?!data-mf-id=)/],
                    _279: ['[data-mf-id=*]'],
                    _276: 1,
                    _275: 2
                }
            };
            if (!_2.useIdSelectors) {
                const _58 = _205._284._58;
                _58.splice(_58.indexOf('id'), 1)
            }
            this._287 = function(_3) {
                try {
                    const _58 = [];
                    while (_3) {
                        const _20 = [];
                        let _50 = _3.getRootNode ? _3.getRootNode() : _24;
                        const _39 = _303(_3, function(_211) {
                            const _217 = _305(_211) ? ? _312(_211, _50);
                            if (_217) {
                                _20.push(_217);
                                return true
                            } else {
                                return false
                            }
                        });
                        if (_3 !== _39) {
                            const _309 = _304(_3, _50, _39);
                            _20.push(_309)
                        }
                        _58.unshift(_20.join(' '));
                        _3 = _50.host
                    }
                    return _58.join(_264)
                } catch (_65) {
                    _65.message = 'Get CSS selector failed: ' + _65.message;
                    _1(_65)
                }
                return ''
            };

            function _305(_3) {
                return _151.size ? _151.get(_3) : null
            }

            function _304(_3, _50, _39) {
                const _20 = _283(_205._284, _3, _50, _39);
                return _20
            }

            function _312(_3, _50) {
                if (!_2.useIdSelectors || !_3.hasAttribute('id')) return null;
                const _20 = _283(_205._336, _3, _50);
                return _20
            }

            function _283(_107, _3, _50, _39) {
                let _20 = _191.getCssSelector(_3, {
                    root: _39 ? ? _50,
                    useScope: !!_39,
                    selectors: _107._58,
                    blacklist: _107._278,
                    whitelist: _107._279,
                    maxCombinations: _107._276,
                    maxCandidates: _107._275
                });
                if (!_20) return null;
                if (_20.startsWith(':root ')) return null;
                if (_20.includes(':nth-child(')) return null;
                if (_39 && _20.startsWith(':scope ')) _20 = _20.slice(7);
                return _20
            }
            this._175 = function(_20, _50) {
                return _160(_20, _50 || _24, (_78, _197) => [_78.querySelector(_197)])[0]
            };
            this._274 = function(_20, _50) {
                return _160(_20, _50 || _24, (_78, _197) => _78.querySelectorAll(_197))
            };
            this._377 = function() {
                if (!_2.freezeElementIds) return;
                const _150 = this;
                for (let _20 of _2.freezeElementIds) {
                    try {
                        const _258 = _150._274(_20);
                        for (const _155 of _258) {
                            if (_151.has(_155)) return;
                            if (_258.length > 1) _20 = _150._287(_155);
                            _151.set(_155, _20)
                        }
                    } catch (_65) {
                        _65.message = 'Could not freeze element IDs: ' + _65.message;
                        _1(_65)
                    }
                }
            };

            function _160(_20, _50, _269) {
                const _109 = new Set();
                try {
                    for (const _334 of _20.split(',')) {
                        const _58 = _334.split(_264, 2);
                        for (const _39 of _269(_50, _58[0])) {
                            if (!_39) break;
                            if (_58[1] && _39.shadowRoot) {
                                const _306 = _160(_58[1], _39.shadowRoot, _269);
                                for (const _298 of _306) {
                                    _109.add(_298)
                                }
                            } else {
                                _109.add(_39)
                            }
                        }
                    }
                } catch (_65) {
                    _65.message = 'Could not get element from selector: ' + _65.message;
                    _1(_65)
                }
                return [..._109]
            }

            function _303(_3, _31) {
                while (_3) {
                    if (!_22._379(_3, 'Element')) break;
                    if (_31(_3)) return _3;
                    _3 = _22._168(_3)
                }
                return null
            }
        }

        function _378(_0, _12) {
            var _265;
            this.proxyPushState = function(callback) {
                var _180 = _0.history;
                _265 = _180.pushState;
                _180.pushState = function() {
                    _12._81(callback, 100);
                    return _265.apply(_180, arguments)
                };
                _0.addEventListener('popstate', function() {
                    _12._81(callback, 100)
                })
            }
        }

        function _21() {
            return undefined
        }

        function _75() {
            return null
        }

        function _111() {
            return false
        }
        var _105 = new _382(window, _12, _18, _2, _1);
        var _44 = new _341(window, _22);
        var _60 = new _343(_2, _179, _202);
        var _175 = (typeof _288 === 'function') ? new _288(window, _22, _191, _2, _1) : {
            _287: _75,
            _175: _75,
            _274: _75,
            _377: _21
        };
        var _207 = (typeof _344 === 'function') ? new _344(_2, _18) : {
            _390: _111
        };
        var _388 = (typeof _356 === 'function') ? new _356(window, _2, _44, _12, _18, _207, _16, _54, _1, _60) : {
            _25: _21,
            _66: _21,
            _314: _21,
            _404: _75,
            _409: _21,
            _402: _21
        };
        var _389 = (typeof _361 === 'function') ? new _361(_22, _2) : {
            _398: _111
        };
        var _376 = (typeof _363 === 'function') ? new _363(window, _22) : {
            _25: _21,
            _66: _21,
            _403: _21,
            _411: _111,
            _436: function() {
                return ''
            },
            _444: function() {
                return []
            }
        };
        var _235 = new _351(window, _23, _44, _22, _12, _18, _16, _2);
        var _152 = _2.liveHeatmapsV3Enabled ? new _348(window, _23, _12, _2, _44, _18, _16, _60, _54) : new _347(window, _23, _12, _2, _44, _18, _16, _60, _54);
        const _299 = (typeof _250 === 'function') ? new _250(window, _23, _44, _12, _18, _16, _2) : {
            _25: _21
        };
        var _218 = new _364(window, _23, _44, _12, _18, _16, _2, _60);
        var _19 = _110 ? new _373(window, Math, _22, _2, _12, _18, _16, _60, _207, _54, _172, _388, _389, _1, _220, _380, _105, _175, _376) : null;
        const _149 = new _375(_1);
        _105._170();
        _19 ? ._422();
        var _26 = false;
        if (_2.privacyToolEnabled) {
            _235._25(_2._62, _2._200, _2._358, _2._294, _2._296, _1)
        } else if (_2.liveHeatmapsEnabled) {
            var _79;
            if (_2.taggerToolEnabled) {
                _79 = function(_31) {
                    _218._25(_1, true, _31)
                }
            }
            _152._25(_2._62, _1, _79)
        } else if (_2.taggerToolEnabled) {
            _218._25(_1)
        } else if (_2.elementPickerEnabled) {
            _299._25(_1)
        } else if (_110) {
            _19._419();
            _26 = true
        }
        window.mouseflow = {
            start: _26 ? _19._25 : _21,
            stop: _26 ? _19._66 : function() {
                if (_2.privacyToolEnabled) _235._66();
                else if (_2.liveHeatmapsEnabled) _152._66()
            },
            newPageView: function(_43, _47) {
                if (_26) {
                    _19._418(_43, _47)
                } else {
                    _2._234(_43, _47);
                    if (_2.liveHeatmapsEnabled) _152._183()
                }
                _149._230('pageview')
            },
            addEventListener: _149._203,
            removeEventListener: _149._148,
            dispatchEvent: _149._230,
            stopSession: _26 ? _19._413 : _21,
            getSessionId: _26 ? _19._412 : _75,
            getPageViewId: _26 ? _19._427 : _75,
            tag: _26 ? _19._429 : _21,
            star: _26 ? _19._446 : _21,
            setVariable: _26 ? _19._430 : _21,
            identify: _26 ? _19._445 : _21,
            formSubmitAttempt: _26 ? _19._410 : _21,
            formSubmitSuccess: _26 ? _19._443 : _21,
            formSubmitFailure: _26 ? _19._442 : _21,
            addFriction: _26 ? _19._441 : _21,
            isRecording: _26 ? _19._440 : _111,
            isReturningUser: _26 ? _19._437 : _111,
            activateFeedback: _26 ? _19._314 : _21,
            proxyAttachShadow: _26 ? _19._428 : _21,
            recordingRate: _26 ? _19._391 : _75,
            version: _26 ? _19._392 : _75,
            lastUpdate: _26 ? _19._393 : _75,
            isCreditCard: _26 ? _19._396 : _21,
            pageNotFound: _26 ? _19._408 : _21,
            websiteId: _2._62,
            gdprEnabled: _2.gdprEnabled,
            updateHeatmap: _152._183,
            getDisplayUrl: _60._102,
            config: function() {
                return arguments.length === 1 ? _2[arguments[0]] : _2._123.apply(_2, arguments)
            },
            logConfig: function() {
                if (_2.debug) console.log(_2)
            },
            debug: function() {
                _2.debug = !_2.debug;
                console.log('MF: Debugging ' + (_2.debug ? 'enabled' : 'disabled'))
            },
            createTreeMirrorClient: _110 ? _19._400 : _21,
            deleteTreeMirrorClient: _110 ? _19._394 : _21,
            addCustomEvent: _110 ? _19._397 : _21,
            exclude: function(selector) {
                if (!_2._200.includes(selector)) _2._200.push(selector)
            }
        };
        if (_2.enableSpa) _220.proxyPushState(window.mouseflow.newPageView);
        if (!_26) _105._25()
    })()
}