"use strict";
(globalThis.webpackChunk_zendesk_web_widget_classic = globalThis.webpackChunk_zendesk_web_widget_classic || []).push([
    [5433], {
        65433(e, t, n) {
            n.r(t), n.d(t, {
                BrowserClient: () => ql,
                ErrorBoundary: () => nS,
                MULTIPLEXED_TRANSPORT_EXTRA_KEY: () => ps,
                OpenFeatureIntegrationHook: () => bb,
                Profiler: () => Xb,
                SDK_VERSION: () => i,
                SEMANTIC_ATTRIBUTE_SENTRY_OP: () => ar,
                SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => cr,
                SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => sr,
                SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => or,
                Scope: () => Re,
                WINDOW: () => Bo,
                addBreadcrumb: () => gs,
                addEventProcessor: () => No,
                addIntegration: () => Qe,
                breadcrumbsIntegration: () => Gd,
                browserApiErrorsIntegration: () => Yd,
                browserProfilingIntegration: () => mb,
                browserSessionIntegration: () => ep,
                browserTracingIntegration: () => wv,
                buildLaunchDarklyFlagUsedHandler: () => _b,
                captureConsoleIntegration: () => Es,
                captureEvent: () => ko,
                captureException: () => bo,
                captureFeedback: () => Ge,
                captureMessage: () => So,
                captureReactException: () => Pb,
                captureSession: () => jo,
                chromeStackLineParser: () => ad,
                close: () => Oo,
                consoleLoggingIntegration: () => qs,
                contextLinesIntegration: () => Lp,
                continueTrace: () => oi,
                createConsolaReporter: () => mi,
                createLangChainCallbackHandler: () => Ba,
                createReduxEnhancer: () => sS,
                createTransport: () => Ja,
                createUserFeedbackEnvelope: () => bd,
                cultureContextIntegration: () => tp,
                dedupeIntegration: () => Ga,
                defaultRequestInstrumentationOptions: () => K_,
                defaultStackLineParsers: () => yd,
                defaultStackParser: () => _d,
                diagnoseSdkConnectivity: () => Cb,
                elementTimingIntegration: () => Ov,
                endSession: () => $o,
                eventFiltersIntegration: () => ec,
                eventFromException: () => Fl,
                eventFromMessage: () => jl,
                exceptionFromError: () => Al,
                extraErrorDataIntegration: () => oc,
                featureFlagsIntegration: () => lc,
                feedbackAsyncIntegration: () => Ko,
                feedbackIntegration: () => Yo,
                feedbackSyncIntegration: () => Yo,
                flush: () => Mo,
                forceLoad: () => _p,
                functionToStringIntegration: () => fc,
                geckoStackLineParser: () => ld,
                getActiveSpan: () => ro,
                getClient: () => Ve,
                getCurrentScope: () => Ue,
                getDefaultIntegrations: () => gp,
                getFeedback: () => _t,
                getGlobalScope: () => qe,
                getIsolationScope: () => ze,
                getReplay: () => e_,
                getRootSpan: () => no,
                getSpanDescendants: () => to,
                getSpanStatusFromHttpCode: () => Ar,
                getTraceData: () => hc,
                globalHandlersIntegration: () => np,
                graphqlClientIntegration: () => Vp,
                growthbookIntegration: () => Eb,
                httpClientIntegration: () => Tp,
                httpContextIntegration: () => cp,
                inboundFiltersIntegration: () => tc,
                init: () => Ob,
                instrumentAnthropicAiClient: () => Tc,
                instrumentGoogleGenAIClient: () => Dc,
                instrumentLangGraph: () => zc,
                instrumentOpenAiClient: () => ru,
                instrumentOutgoingRequests: () => Y_,
                instrumentSupabaseClient: () => hu,
                isEnabled: () => Lo,
                isInitialized: () => Po,
                lastEventId: () => Ao,
                launchDarklyIntegration: () => yb,
                lazyLoadIntegration: () => Go,
                linkedErrorsIntegration: () => hp,
                logger: () => r,
                makeBrowserOfflineTransport: () => Bv,
                makeFetchTransport: () => Ql,
                makeMultiplexedTransport: () => hs,
                metrics: () => o,
                moduleMetadataIntegration: () => Bu,
                onLoad: () => vp,
                openFeatureIntegration: () => vb,
                opera10StackLineParser: () => hd,
                opera11StackLineParser: () => gd,
                parameterize: () => gu,
                reactErrorHandler: () => Lb,
                reactRouterV3BrowserTracingIntegration: () => iS,
                reactRouterV4BrowserTracingIntegration: () => lS,
                reactRouterV5BrowserTracingIntegration: () => dS,
                reactRouterV6BrowserTracingIntegration: () => wk,
                reactRouterV7BrowserTracingIntegration: () => Ik,
                registerSpanErrorInstrumentation: () => Gu,
                registerWebWorker: () => Ab,
                replayCanvasIntegration: () => O_,
                replayIntegration: () => Xy,
                reportPageLoaded: () => Pv,
                reportingObserverIntegration: () => wp,
                rewriteFramesIntegration: () => el,
                sendFeedback: () => at,
                setActiveSpanInBrowser: () => Lv,
                setContext: () => wo,
                setConversationId: () => Ro,
                setCurrentClient: () => tl,
                setExtra: () => Eo,
                setExtras: () => xo,
                setHttpStatus: () => Mr,
                setMeasurement: () => Ks,
                setTag: () => Co,
                setTags: () => To,
                setUser: () => Io,
                showReportDialog: () => bp,
                spanToBaggageHeader: () => po,
                spanToJSON: () => Kr,
                spanToTraceHeader: () => Hr,
                spotlightBrowserIntegration: () => gb,
                startBrowserTracingNavigationSpan: () => Ev,
                startBrowserTracingPageLoadSpan: () => xv,
                startInactiveSpan: () => ri,
                startNewTrace: () => ai,
                startSession: () => Do,
                startSpan: () => ti,
                startSpanManual: () => ni,
                statsigIntegration: () => Tb,
                supabaseIntegration: () => mu,
                suppressTracing: () => ii,
                tanstackRouterBrowserTracingIntegration: () => cS,
                thirdPartyErrorFilterIntegration: () => nl,
                uiProfiler: () => td,
                unleashIntegration: () => Sb,
                updateSpanName: () => so,
                useProfiler: () => Qb,
                webWorkerIntegration: () => Ib,
                winjsStackLineParser: () => pd,
                withActiveSpan: () => si,
                withErrorBoundary: () => rS,
                withIsolationScope: () => He,
                withProfiler: () => Zb,
                withScope: () => We,
                withSentryReactRouterV6Routing: () => Ck,
                withSentryReactRouterV7Routing: () => Rk,
                withSentryRouting: () => hS,
                wrapCreateBrowserRouterV6: () => Ek,
                wrapCreateBrowserRouterV7: () => Ak,
                wrapCreateMemoryRouterV6: () => Tk,
                wrapCreateMemoryRouterV7: () => Mk,
                wrapUseRoutesV6: () => xk,
                wrapUseRoutesV7: () => Ok,
                zodErrorsIntegration: () => ul
            });
            var r = {};
            n.r(r), n.d(r, {
                debug: () => bu,
                error: () => wu,
                fatal: () => xu,
                fmt: () => yu,
                info: () => Su,
                trace: () => vu,
                warn: () => ku
            });
            var o = {};
            n.r(o), n.d(o, {
                count: () => Ou,
                distribution: () => Lu,
                gauge: () => Pu
            });
            const s = globalThis,
                i = "10.47.0";

            function a() {
                return c(s), s
            }

            function c(e) {
                const t = e.__SENTRY__ = e.__SENTRY__ || {};
                return t.version = t.version || i, t[i] = t[i] || {}
            }

            function u(e, t, n = s) {
                const r = n.__SENTRY__ = n.__SENTRY__ || {},
                    o = r[i] = r[i] || {};
                return o[e] || (o[e] = t())
            }
            const l = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
                d = Object.prototype.toString;

            function p(e) {
                switch (d.call(e)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                    case "[object WebAssembly.Exception]":
                        return !0;
                    default:
                        return k(e, Error)
                }
            }

            function f(e, t) {
                return d.call(e) === `[object ${t}]`
            }

            function h(e) {
                return f(e, "ErrorEvent")
            }

            function m(e) {
                return f(e, "DOMError")
            }

            function g(e) {
                return f(e, "String")
            }

            function y(e) {
                return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
            }

            function _(e) {
                return null === e || y(e) || "object" != typeof e && "function" != typeof e
            }

            function v(e) {
                return f(e, "Object")
            }

            function b(e) {
                return "undefined" != typeof Event && k(e, Event)
            }

            function S(e) {
                return Boolean(e ? .then && "function" == typeof e.then)
            }

            function k(e, t) {
                try {
                    return e instanceof t
                } catch {
                    return !1
                }
            }

            function w(e) {
                return !("object" != typeof e || null === e || !(e.__isVue || e._isVue || e.__v_isVNode))
            }

            function x(e) {
                return "undefined" != typeof Request && k(e, Request)
            }
            const E = s;

            function T(e, t = {}) {
                if (!e) return "<unknown>";
                try {
                    let n = e;
                    const r = 5,
                        o = [];
                    let s = 0,
                        i = 0;
                    const a = " > ",
                        c = a.length;
                    let u;
                    const l = Array.isArray(t) ? t : t.keyAttrs,
                        d = !Array.isArray(t) && t.maxStringLength || 80;
                    for (; n && s++ < r && (u = C(n, l), !("html" === u || s > 1 && i + o.length * c + u.length >= d));) o.push(u), i += u.length, n = n.parentNode;
                    return o.reverse().join(a)
                } catch {
                    return "<unknown>"
                }
            }

            function C(e, t) {
                const n = e,
                    r = [];
                if (!n ? .tagName) return "";
                if (E.HTMLElement && n instanceof HTMLElement && n.dataset) {
                    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
                    if (n.dataset.sentryElement) return n.dataset.sentryElement
                }
                r.push(n.tagName.toLowerCase());
                const o = t ? .length ? t.filter((e => n.getAttribute(e))).map((e => [e, n.getAttribute(e)])) : null;
                if (o ? .length) o.forEach((e => {
                    r.push(`[${e[0]}="${e[1]}"]`)
                }));
                else {
                    n.id && r.push(`#${n.id}`);
                    const e = n.className;
                    if (e && g(e)) {
                        const t = e.split(/\s+/);
                        for (const e of t) r.push(`.${e}`)
                    }
                }
                for (const e of ["aria-label", "type", "name", "title", "alt"]) {
                    const t = n.getAttribute(e);
                    t && r.push(`[${e}="${t}"]`)
                }
                return r.join("")
            }

            function I() {
                try {
                    return E.document.location.href
                } catch {
                    return ""
                }
            }

            function R(e) {
                if (!E.HTMLElement) return null;
                let t = e;
                for (let e = 0; e < 5; e++) {
                    if (!t) return null;
                    if (t instanceof HTMLElement) {
                        if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                        if (t.dataset.sentryElement) return t.dataset.sentryElement
                    }
                    t = t.parentNode
                }
                return null
            }
            const A = ["debug", "info", "warn", "error", "log", "assert", "trace"],
                M = {};

            function O(e) {
                if (!("console" in s)) return e();
                const t = s.console,
                    n = {},
                    r = Object.keys(M);
                r.forEach((e => {
                    const r = M[e];
                    n[e] = t[e], t[e] = r
                }));
                try {
                    return e()
                } finally {
                    r.forEach((e => {
                        t[e] = n[e]
                    }))
                }
            }

            function P() {
                return N().enabled
            }

            function L(e, ...t) {
                l && P() && O((() => {
                    s.console[e](`Sentry Logger [${e}]:`, ...t)
                }))
            }

            function N() {
                return l ? u("loggerSettings", (() => ({
                    enabled: !1
                }))) : {
                    enabled: !1
                }
            }
            const D = {
                enable: function() {
                    N().enabled = !0
                },
                disable: function() {
                    N().enabled = !1
                },
                isEnabled: P,
                log: function(...e) {
                    L("log", ...e)
                },
                warn: function(...e) {
                    L("warn", ...e)
                },
                error: function(...e) {
                    L("error", ...e)
                }
            };

            function $(e, t, n) {
                if (!(t in e)) return;
                const r = e[t];
                if ("function" != typeof r) return;
                const o = n(r);
                "function" == typeof o && j(o, r);
                try {
                    e[t] = o
                } catch {
                    l && D.log(`Failed to replace method "${t}" in object`, e)
                }
            }

            function F(e, t, n) {
                try {
                    Object.defineProperty(e, t, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    })
                } catch {
                    l && D.log(`Failed to add non-enumerable property "${t}" to object`, e)
                }
            }

            function j(e, t) {
                try {
                    const n = t.prototype || {};
                    e.prototype = t.prototype = n, F(e, "__sentry_original__", t)
                } catch {}
            }

            function B(e) {
                return e.__sentry_original__
            }

            function U(e) {
                if (p(e)) return {
                    message: e.message,
                    name: e.name,
                    stack: e.stack,
                    ...q(e)
                };
                if (b(e)) {
                    const t = {
                        type: e.type,
                        target: z(e.target),
                        currentTarget: z(e.currentTarget),
                        ...q(e)
                    };
                    return "undefined" != typeof CustomEvent && k(e, CustomEvent) && (t.detail = e.detail), t
                }
                return e
            }

            function z(e) {
                try {
                    return t = e, "undefined" != typeof Element && k(t, Element) ? T(e) : Object.prototype.toString.call(e)
                } catch {
                    return "<unknown>"
                }
                var t
            }

            function q(e) {
                return "object" == typeof e && null !== e ? Object.fromEntries(Object.entries(e)) : {}
            }
            let W;

            function H(e) {
                if (void 0 !== W) return W ? W(e) : e();
                const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
                    n = s;
                return t in n && "function" == typeof n[t] ? (W = n[t], W(e)) : (W = null, e())
            }

            function V() {
                return H((() => Math.random()))
            }

            function J() {
                return H((() => Date.now()))
            }
            const G = "?",
                K = /\(error: (.*)\)/,
                Y = /captureMessage|captureException/;

            function X(...e) {
                const t = e.sort(((e, t) => e[0] - t[0])).map((e => e[1]));
                return (e, n = 0, r = 0) => {
                    const o = [],
                        s = e.split("\n");
                    for (let e = n; e < s.length; e++) {
                        let n = s[e];
                        n.length > 1024 && (n = n.slice(0, 1024));
                        const i = K.test(n) ? n.replace(K, "$1") : n;
                        if (!i.match(/\S*Error: /)) {
                            for (const e of t) {
                                const t = e(i);
                                if (t) {
                                    o.push(t);
                                    break
                                }
                            }
                            if (o.length >= 50 + r) break
                        }
                    }
                    return function(e) {
                        if (!e.length) return [];
                        const t = Array.from(e);
                        /sentryWrapped/.test(Z(t).function || "") && t.pop();
                        t.reverse(), Y.test(Z(t).function || "") && (t.pop(), Y.test(Z(t).function || "") && t.pop());
                        return t.slice(0, 50).map((e => ({ ...e,
                            filename: e.filename || Z(t).filename,
                            function: e.function || G
                        })))
                    }(o.slice(r))
                }
            }

            function Z(e) {
                return e[e.length - 1] || {}
            }
            const Q = "<anonymous>";

            function ee(e) {
                try {
                    return e && "function" == typeof e && e.name || Q
                } catch {
                    return Q
                }
            }

            function te(e) {
                const t = e.exception;
                if (t) {
                    const e = [];
                    try {
                        return t.values.forEach((t => {
                            t.stacktrace.frames && e.push(...t.stacktrace.frames)
                        })), e
                    } catch {
                        return
                    }
                }
            }

            function ne(e) {
                return "__v_isVNode" in e && e.__v_isVNode ? "[VueVNode]" : "[VueViewModel]"
            }

            function re(e) {
                let t = e ? .startsWith("file://") ? e.slice(7) : e;
                return t ? .match(/\/[A-Z]:/) && (t = t.slice(1)), t
            }

            function oe(e, t = 0) {
                return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
            }

            function se(e, t) {
                let n = e;
                const r = n.length;
                if (r <= 150) return n;
                t > r && (t = r);
                let o = Math.max(t - 60, 0);
                o < 5 && (o = 0);
                let s = Math.min(o + 140, r);
                return s > r - 5 && (s = r), s === r && (o = Math.max(s - 140, 0)), n = n.slice(o, s), o > 0 && (n = `'{snip} ${n}`), s < r && (n += " {snip}"), n
            }

            function ie(e, t) {
                if (!Array.isArray(e)) return "";
                const n = [];
                for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    try {
                        w(r) ? n.push(ne(r)) : n.push(String(r))
                    } catch {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(t)
            }

            function ae(e, t, n = !1) {
                return !!g(e) && (f(t, "RegExp") ? t.test(e) : !!g(t) && (n ? e === t : e.includes(t)))
            }

            function ce(e, t = [], n = !1) {
                return t.some((t => ae(e, t, n)))
            }
            let ue;

            function le(e = function() {
                const e = s;
                return e.crypto || e.msCrypto
            }()) {
                try {
                    if (e ? .randomUUID) return H((() => e.randomUUID())).replace(/-/g, "")
                } catch {}
                return ue || (ue = [1e7] + 1e3 + 4e3 + 8e3 + 1e11), ue.replace(/[018]/g, (e => (e ^ (16 * V() & 15) >> e / 4).toString(16)))
            }

            function de(e) {
                return e.exception ? .values ? .[0]
            }

            function pe(e) {
                const {
                    message: t,
                    event_id: n
                } = e;
                if (t) return t;
                const r = de(e);
                return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
            }

            function fe(e, t, n) {
                const r = e.exception = e.exception || {},
                    o = r.values = r.values || [],
                    s = o[0] = o[0] || {};
                s.value || (s.value = t || ""), s.type || (s.type = n || "Error")
            }

            function he(e, t) {
                const n = de(e);
                if (!n) return;
                const r = n.mechanism;
                if (n.mechanism = {
                        type: "generic",
                        handled: !0,
                        ...r,
                        ...t
                    }, t && "data" in t) {
                    const e = { ...r ? .data,
                        ...t.data
                    };
                    n.mechanism.data = e
                }
            }

            function me(e) {
                if (function(e) {
                        try {
                            return e.__sentry_captured__
                        } catch {}
                    }(e)) return !0;
                try {
                    F(e, "__sentry_captured__", !0)
                } catch {}
                return !1
            }

            function ge() {
                return J() / 1e3
            }
            let ye;

            function _e() {
                return (ye ? ? (ye = function() {
                    const {
                        performance: e
                    } = s;
                    if (!e ? .now || !e.timeOrigin) return ge;
                    const t = e.timeOrigin;
                    return () => (t + H((() => e.now()))) / 1e3
                }()))()
            }
            let ve = null;

            function be() {
                return null === ve && (ve = function() {
                    const {
                        performance: e
                    } = s;
                    if (!e ? .now) return;
                    const t = 3e5,
                        n = H((() => e.now())),
                        r = J(),
                        o = e.timeOrigin;
                    if ("number" == typeof o && Math.abs(o + n - r) < t) return o;
                    const i = e.timing ? .navigationStart;
                    if ("number" == typeof i && Math.abs(i + n - r) < t) return i;
                    return r - n
                }()), ve
            }

            function Se(e) {
                const t = _e(),
                    n = {
                        sid: le(),
                        init: !0,
                        timestamp: t,
                        started: t,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: () => function(e) {
                            return {
                                sid: `${e.sid}`,
                                init: e.init,
                                started: new Date(1e3 * e.started).toISOString(),
                                timestamp: new Date(1e3 * e.timestamp).toISOString(),
                                status: e.status,
                                errors: e.errors,
                                did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                                duration: e.duration,
                                abnormal_mechanism: e.abnormal_mechanism,
                                attrs: {
                                    release: e.release,
                                    environment: e.environment,
                                    ip_address: e.ipAddress,
                                    user_agent: e.userAgent
                                }
                            }
                        }(n)
                    };
                return e && ke(n, e), n
            }

            function ke(e, t = {}) {
                if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || _e(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : le()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
                else if ("number" == typeof t.duration) e.duration = t.duration;
                else {
                    const t = e.timestamp - e.started;
                    e.duration = t >= 0 ? t : 0
                }
                t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
            }

            function we(e, t, n = 2) {
                if (!t || "object" != typeof t || n <= 0) return t;
                if (e && 0 === Object.keys(t).length) return e;
                const r = { ...e
                };
                for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = we(r[e], t[e], n - 1));
                return r
            }

            function xe() {
                return le()
            }

            function Ee() {
                return le().substring(16)
            }
            const Te = "_sentrySpan";

            function Ce(e, t) {
                t ? F(e, Te, t) : delete e[Te]
            }

            function Ie(e) {
                return e[Te]
            }
            class Re {
                constructor() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                        traceId: xe(),
                        sampleRand: V()
                    }
                }
                clone() {
                    const e = new Re;
                    return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags
                    }, e._attributes = { ...this._attributes
                    }, e._extra = { ...this._extra
                    }, e._contexts = { ...this._contexts
                    }, this._contexts.flags && (e._contexts.flags = {
                        values: [...this._contexts.flags.values]
                    }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
                    }, e._propagationContext = { ...this._propagationContext
                    }, e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, Ce(e, Ie(this)), e
                }
                setClient(e) {
                    this._client = e
                }
                setLastEventId(e) {
                    this._lastEventId = e
                }
                getClient() {
                    return this._client
                }
                lastEventId() {
                    return this._lastEventId
                }
                addScopeListener(e) {
                    this._scopeListeners.push(e)
                }
                addEventProcessor(e) {
                    return this._eventProcessors.push(e), this
                }
                setUser(e) {
                    return this._user = e || {
                        email: void 0,
                        id: void 0,
                        ip_address: void 0,
                        username: void 0
                    }, this._session && ke(this._session, {
                        user: e
                    }), this._notifyScopeListeners(), this
                }
                getUser() {
                    return this._user
                }
                setConversationId(e) {
                    return this._conversationId = e || void 0, this._notifyScopeListeners(), this
                }
                setTags(e) {
                    return this._tags = { ...this._tags,
                        ...e
                    }, this._notifyScopeListeners(), this
                }
                setTag(e, t) {
                    return this.setTags({
                        [e]: t
                    })
                }
                setAttributes(e) {
                    return this._attributes = { ...this._attributes,
                        ...e
                    }, this._notifyScopeListeners(), this
                }
                setAttribute(e, t) {
                    return this.setAttributes({
                        [e]: t
                    })
                }
                removeAttribute(e) {
                    return e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this
                }
                setExtras(e) {
                    return this._extra = { ...this._extra,
                        ...e
                    }, this._notifyScopeListeners(), this
                }
                setExtra(e, t) {
                    return this._extra = { ...this._extra,
                        [e]: t
                    }, this._notifyScopeListeners(), this
                }
                setFingerprint(e) {
                    return this._fingerprint = e, this._notifyScopeListeners(), this
                }
                setLevel(e) {
                    return this._level = e, this._notifyScopeListeners(), this
                }
                setTransactionName(e) {
                    return this._transactionName = e, this._notifyScopeListeners(), this
                }
                setContext(e, t) {
                    return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
                }
                setSession(e) {
                    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
                }
                getSession() {
                    return this._session
                }
                update(e) {
                    if (!e) return this;
                    const t = "function" == typeof e ? e(this) : e,
                        n = t instanceof Re ? t.getScopeData() : v(t) ? e : void 0,
                        {
                            tags: r,
                            attributes: o,
                            extra: s,
                            user: i,
                            contexts: a,
                            level: c,
                            fingerprint: u = [],
                            propagationContext: l,
                            conversationId: d
                        } = n || {};
                    return this._tags = { ...this._tags,
                        ...r
                    }, this._attributes = { ...this._attributes,
                        ...o
                    }, this._extra = { ...this._extra,
                        ...s
                    }, this._contexts = { ...this._contexts,
                        ...a
                    }, i && Object.keys(i).length && (this._user = i), c && (this._level = c), u.length && (this._fingerprint = u), l && (this._propagationContext = l), d && (this._conversationId = d), this
                }
                clear() {
                    return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, Ce(this, void 0), this._attachments = [], this.setPropagationContext({
                        traceId: xe(),
                        sampleRand: V()
                    }), this._notifyScopeListeners(), this
                }
                addBreadcrumb(e, t) {
                    const n = "number" == typeof t ? t : 100;
                    if (n <= 0) return this;
                    const r = {
                        timestamp: ge(),
                        ...e,
                        message: e.message ? oe(e.message, 2048) : e.message
                    };
                    return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client ? .recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
                }
                getLastBreadcrumb() {
                    return this._breadcrumbs[this._breadcrumbs.length - 1]
                }
                clearBreadcrumbs() {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this
                }
                addAttachment(e) {
                    return this._attachments.push(e), this
                }
                clearAttachments() {
                    return this._attachments = [], this
                }
                getScopeData() {
                    return {
                        breadcrumbs: this._breadcrumbs,
                        attachments: this._attachments,
                        contexts: this._contexts,
                        tags: this._tags,
                        attributes: this._attributes,
                        extra: this._extra,
                        user: this._user,
                        level: this._level,
                        fingerprint: this._fingerprint || [],
                        eventProcessors: this._eventProcessors,
                        propagationContext: this._propagationContext,
                        sdkProcessingMetadata: this._sdkProcessingMetadata,
                        transactionName: this._transactionName,
                        span: Ie(this),
                        conversationId: this._conversationId
                    }
                }
                setSDKProcessingMetadata(e) {
                    return this._sdkProcessingMetadata = we(this._sdkProcessingMetadata, e, 2), this
                }
                setPropagationContext(e) {
                    return this._propagationContext = e, this
                }
                getPropagationContext() {
                    return this._propagationContext
                }
                captureException(e, t) {
                    const n = t ? .event_id || le();
                    if (!this._client) return l && D.warn("No client configured on scope - will not capture exception!"), n;
                    const r = new Error("Sentry syntheticException");
                    return this._client.captureException(e, {
                        originalException: e,
                        syntheticException: r,
                        ...t,
                        event_id: n
                    }, this), n
                }
                captureMessage(e, t, n) {
                    const r = n ? .event_id || le();
                    if (!this._client) return l && D.warn("No client configured on scope - will not capture message!"), r;
                    const o = n ? .syntheticException ? ? new Error(e);
                    return this._client.captureMessage(e, t, {
                        originalException: e,
                        syntheticException: o,
                        ...n,
                        event_id: r
                    }, this), r
                }
                captureEvent(e, t) {
                    const n = e.event_id || t ? .event_id || le();
                    return this._client ? (this._client.captureEvent(e, { ...t,
                        event_id: n
                    }, this), n) : (l && D.warn("No client configured on scope - will not capture event!"), n)
                }
                _notifyScopeListeners() {
                    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e => {
                        e(this)
                    })), this._notifyingListeners = !1)
                }
            }
            const Ae = e => e instanceof Promise && !e[Me],
                Me = Symbol("chained PromiseLike"),
                Oe = (e, t, n) => {
                    const r = e.then((e => (t(e), e)), (e => {
                        throw n(e), e
                    }));
                    return Ae(r) && Ae(e) ? r : Pe(e, r)
                },
                Pe = (e, t) => {
                    let n = !1;
                    for (const r in e) {
                        if (r in t) continue;
                        n = !0;
                        const o = e[r];
                        "function" == typeof o ? Object.defineProperty(t, r, {
                            value: (...t) => o.apply(e, t),
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[r] = o
                    }
                    return n && Object.assign(t, {
                        [Me]: !0
                    }), t
                };
            class Le {
                constructor(e, t) {
                    let n, r;
                    n = e || new Re, r = t || new Re, this._stack = [{
                        scope: n
                    }], this._isolationScope = r
                }
                withScope(e) {
                    const t = this._pushScope();
                    let n;
                    try {
                        n = e(t)
                    } catch (e) {
                        throw this._popScope(), e
                    }
                    return S(n) ? Oe(n, (() => this._popScope()), (() => this._popScope())) : (this._popScope(), n)
                }
                getClient() {
                    return this.getStackTop().client
                }
                getScope() {
                    return this.getStackTop().scope
                }
                getIsolationScope() {
                    return this._isolationScope
                }
                getStackTop() {
                    return this._stack[this._stack.length - 1]
                }
                _pushScope() {
                    const e = this.getScope().clone();
                    return this._stack.push({
                        client: this.getClient(),
                        scope: e
                    }), e
                }
                _popScope() {
                    return !(this._stack.length <= 1) && !!this._stack.pop()
                }
            }

            function Ne() {
                const e = c(a());
                return e.stack = e.stack || new Le(u("defaultCurrentScope", (() => new Re)), u("defaultIsolationScope", (() => new Re)))
            }

            function De(e) {
                return Ne().withScope(e)
            }

            function $e(e, t) {
                const n = Ne();
                return n.withScope((() => (n.getStackTop().scope = e, t(e))))
            }

            function Fe(e) {
                return Ne().withScope((() => e(Ne().getIsolationScope())))
            }

            function je(e) {
                const t = c(e);
                return t.acs ? t.acs : {
                    withIsolationScope: Fe,
                    withScope: De,
                    withSetScope: $e,
                    withSetIsolationScope: (e, t) => Fe(t),
                    getCurrentScope: () => Ne().getScope(),
                    getIsolationScope: () => Ne().getIsolationScope()
                }
            }
            let Be;

            function Ue() {
                return je(a()).getCurrentScope()
            }

            function ze() {
                return je(a()).getIsolationScope()
            }

            function qe() {
                return u("globalScope", (() => new Re))
            }

            function We(...e) {
                const t = je(a());
                if (2 === e.length) {
                    const [n, r] = e;
                    return n ? t.withSetScope(n, r) : t.withScope(r)
                }
                return t.withScope(e[0])
            }

            function He(...e) {
                const t = je(a());
                if (2 === e.length) {
                    const [n, r] = e;
                    return n ? t.withSetIsolationScope(n, r) : t.withIsolationScope(r)
                }
                return t.withIsolationScope(e[0])
            }

            function Ve() {
                return Ue().getClient()
            }

            function Je(e) {
                const t = Be ? .();
                if (t) return {
                    trace_id: t.traceId,
                    span_id: t.spanId
                };
                const n = e.getPropagationContext(),
                    {
                        traceId: r,
                        parentSpanId: o,
                        propagationSpanId: s
                    } = n,
                    i = {
                        trace_id: r,
                        span_id: s || Ee()
                    };
                return o && (i.parent_span_id = o), i
            }

            function Ge(e, t = {}, n = Ue()) {
                const {
                    message: r,
                    name: o,
                    email: s,
                    url: i,
                    source: a,
                    associatedEventId: c,
                    tags: u
                } = e, l = {
                    contexts: {
                        feedback: {
                            contact_email: s,
                            name: o,
                            message: r,
                            url: i,
                            source: a,
                            associated_event_id: c
                        }
                    },
                    type: "feedback",
                    level: "info",
                    tags: u
                }, d = n ? .getClient() || Ve();
                d && d.emit("beforeSendFeedback", l, t);
                return n.captureEvent(l, t)
            }
            const Ke = [];

            function Ye(e) {
                const t = e.defaultIntegrations || [],
                    n = e.integrations;
                let r;
                if (t.forEach((e => {
                        e.isDefaultInstance = !0
                    })), Array.isArray(n)) r = [...t, ...n];
                else if ("function" == typeof n) {
                    const e = n(t);
                    r = Array.isArray(e) ? e : [e]
                } else r = t;
                return function(e) {
                    const t = {};
                    return e.forEach((e => {
                        const {
                            name: n
                        } = e, r = t[n];
                        r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                    })), Object.values(t)
                }(r)
            }

            function Xe(e, t) {
                for (const n of t) n ? .afterAllSetup && n.afterAllSetup(e)
            }

            function Ze(e, t, n) {
                if (n[t.name]) l && D.log(`Integration skipped because it was already installed: ${t.name}`);
                else {
                    if (n[t.name] = t, Ke.includes(t.name) || "function" != typeof t.setupOnce || (t.setupOnce(), Ke.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), "function" == typeof t.preprocessEvent) {
                        const n = t.preprocessEvent.bind(t);
                        e.on("preprocessEvent", ((t, r) => n(t, r, e)))
                    }
                    if ("function" == typeof t.processEvent) {
                        const n = t.processEvent.bind(t),
                            r = Object.assign(((t, r) => n(t, r, e)), {
                                id: t.name
                            });
                        e.addEventProcessor(r)
                    }
                    l && D.log(`Integration installed: ${t.name}`)
                }
            }

            function Qe(e) {
                const t = Ve();
                t ? t.addIntegration(e) : l && D.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`)
            }
            var et = n(75483);

            function tt() {
                return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== et ? et : 0)
            }

            function nt() {
                return "undefined" != typeof window && (!tt() || function() {
                    const e = s.process;
                    return "renderer" === e ? .type
                }())
            }
            const rt = s,
                ot = rt.document,
                st = rt.navigator,
                it = "Report a Bug",
                at = (e, t = {
                    includeReplay: !0
                }) => {
                    if (!e.message) throw new Error("Unable to submit feedback with empty message");
                    const n = Ve();
                    if (!n) throw new Error("No client setup, cannot send feedback.");
                    e.tags && Object.keys(e.tags).length && Ue().setTags(e.tags);
                    const r = Ge({
                        source: "api",
                        url: I(),
                        ...e
                    }, t);
                    return new Promise(((e, t) => {
                        const o = setTimeout((() => t("Unable to determine if Feedback was correctly sent.")), 3e4),
                            s = n.on("afterSendEvent", ((n, i) => {
                                if (n.event_id === r) return clearTimeout(o), s(), i ? .statusCode && i.statusCode >= 200 && i.statusCode < 300 ? e(r) : t(403 === i ? .statusCode ? "Unable to send feedback. This could be because this domain is not in your list of allowed domains." : "Unable to send feedback. This could be because of network issues, or because you are using an ad-blocker.")
                            }))
                    }))
                },
                ct = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

            function ut(e, t) {
                return { ...e,
                    ...t,
                    tags: { ...e.tags,
                        ...t.tags
                    },
                    onFormOpen: () => {
                        t.onFormOpen ? .(), e.onFormOpen ? .()
                    },
                    onFormClose: () => {
                        t.onFormClose ? .(), e.onFormClose ? .()
                    },
                    onSubmitSuccess: (n, r) => {
                        t.onSubmitSuccess ? .(n, r), e.onSubmitSuccess ? .(n, r)
                    },
                    onSubmitError: n => {
                        t.onSubmitError ? .(n), e.onSubmitError ? .(n)
                    },
                    onFormSubmitted: () => {
                        t.onFormSubmitted ? .(), e.onFormSubmitted ? .()
                    },
                    themeDark: { ...e.themeDark,
                        ...t.themeDark
                    },
                    themeLight: { ...e.themeLight,
                        ...t.themeLight
                    }
                }
            }

            function lt(e, t) {
                return Object.entries(t).forEach((([t, n]) => {
                    e.setAttributeNS(null, t, n)
                })), e
            }

            function dt({
                triggerLabel: e,
                triggerAriaLabel: t,
                shadow: n,
                styleNonce: r
            }) {
                const o = ot.createElement("button");
                if (o.type = "button", o.className = "widget__actor", o.ariaHidden = "false", o.ariaLabel = t || e || it, o.appendChild(function() {
                        const e = e => rt.document.createElementNS("http://www.w3.org/2000/svg", e),
                            t = lt(e("svg"), {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "var(--actor-color, var(--foreground))"
                            }),
                            n = lt(e("g"), {
                                clipPath: "url(#clip0_57_80)"
                            }),
                            r = lt(e("path"), {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
                            });
                        t.appendChild(n).appendChild(r);
                        const o = e("defs"),
                            s = lt(e("clipPath"), {
                                id: "clip0_57_80"
                            }),
                            i = lt(e("rect"), {
                                width: "20",
                                height: "20",
                                fill: "white"
                            });
                        return s.appendChild(i), o.appendChild(s), t.appendChild(o).appendChild(s).appendChild(i), t
                    }()), e) {
                    const t = ot.createElement("span");
                    t.appendChild(ot.createTextNode(e)), o.appendChild(t)
                }
                const s = function(e) {
                    const t = ot.createElement("style");
                    return t.textContent = '\n.widget__actor {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: var(--page-margin);\n  inset: var(--actor-inset);\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  line-height: 1.14em;\n  text-decoration: none;\n\n  background: var(--actor-background, var(--background));\n  border-radius: var(--actor-border-radius, 1.7em/50%);\n  border: var(--actor-border, var(--border));\n  box-shadow: var(--actor-box-shadow, var(--box-shadow));\n  color: var(--actor-color, var(--foreground));\n  fill: var(--actor-color, var(--foreground));\n  cursor: pointer;\n  opacity: 1;\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n.widget__actor[aria-hidden="true"] {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n  transform: translate(0, 16px) scale(0.98);\n}\n\n.widget__actor:hover {\n  background: var(--actor-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n\n.widget__actor svg {\n  width: 1.14em;\n  height: 1.14em;\n}\n\n@media (max-width: 600px) {\n  .widget__actor span {\n    display: none;\n  }\n}\n', e && t.setAttribute("nonce", e), t
                }(r);
                return {
                    el: o,
                    appendToDom() {
                        n.appendChild(s), n.appendChild(o)
                    },
                    removeFromDom() {
                        o.remove(), s.remove()
                    },
                    show() {
                        o.ariaHidden = "false"
                    },
                    hide() {
                        o.ariaHidden = "true"
                    }
                }
            }
            const pt = "rgba(88, 74, 192, 1)",
                ft = {
                    foreground: "#2b2233",
                    background: "#ffffff",
                    accentForeground: "white",
                    accentBackground: pt,
                    successColor: "#268d75",
                    errorColor: "#df3338",
                    border: "1.5px solid rgba(41, 35, 47, 0.13)",
                    boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
                    outline: "1px auto var(--accent-background)",
                    interactiveFilter: "brightness(95%)"
                },
                ht = {
                    foreground: "#ebe6ef",
                    background: "#29232f",
                    accentForeground: "white",
                    accentBackground: pt,
                    successColor: "#2da98c",
                    errorColor: "#f55459",
                    border: "1.5px solid rgba(235, 230, 239, 0.15)",
                    boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
                    outline: "1px auto var(--accent-background)",
                    interactiveFilter: "brightness(150%)"
                };

            function mt(e) {
                return `\n  --foreground: ${e.foreground};\n  --background: ${e.background};\n  --accent-foreground: ${e.accentForeground};\n  --accent-background: ${e.accentBackground};\n  --success-color: ${e.successColor};\n  --error-color: ${e.errorColor};\n  --border: ${e.border};\n  --box-shadow: ${e.boxShadow};\n  --outline: ${e.outline};\n  --interactive-filter: ${e.interactiveFilter};\n  `
            }

            function gt({
                colorScheme: e,
                themeDark: t,
                themeLight: n,
                styleNonce: r
            }) {
                const o = ot.createElement("style");
                return o.textContent = `\n:host {\n  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;\n  --font-size: 14px;\n  --z-index: 100000;\n\n  --page-margin: 16px;\n  --inset: auto 0 0 auto;\n  --actor-inset: var(--inset);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  ${"system"!==e?`color-scheme: only ${e};`:""}\n\n  ${mt("dark"===e?{...ht,...t}:{...ft,...n})}\n}\n\n${"system"===e?`\n@media (prefers-color-scheme: dark) {\n  :host {\n    color-scheme: only dark;\n\n    ${mt({...ht,...t})}\n  }\n}`:""}\n`, r && o.setAttribute("nonce", r), o
            }
            const yt = ({
                lazyLoadIntegration: e,
                getModalIntegration: t,
                getScreenshotIntegration: n
            }) => ({
                id: r = "sentry-feedback",
                autoInject: o = !0,
                showBranding: s = !0,
                isEmailRequired: i = !1,
                isNameRequired: a = !1,
                showEmail: c = !0,
                showName: u = !0,
                enableScreenshot: l = !0,
                useSentryUser: d = {
                    email: "email",
                    name: "username"
                },
                tags: p,
                styleNonce: f,
                scriptNonce: h,
                colorScheme: m = "system",
                themeLight: g = {},
                themeDark: y = {},
                addScreenshotButtonLabel: _ = "Add a screenshot",
                cancelButtonLabel: v = "Cancel",
                confirmButtonLabel: b = "Confirm",
                emailLabel: S = "Email",
                emailPlaceholder: k = "your.email@example.org",
                formTitle: w = "Report a Bug",
                isRequiredLabel: x = "(required)",
                messageLabel: E = "Description",
                messagePlaceholder: T = "What's the bug? What did you expect?",
                nameLabel: C = "Name",
                namePlaceholder: I = "Your Name",
                removeScreenshotButtonLabel: R = "Remove screenshot",
                submitButtonLabel: A = "Send Bug Report",
                successMessageText: M = "Thank you for your report!",
                triggerLabel: O = it,
                triggerAriaLabel: P = "",
                highlightToolText: L = "Highlight",
                hideToolText: N = "Hide",
                removeHighlightText: $ = "Remove",
                onFormOpen: F,
                onFormClose: j,
                onSubmitSuccess: B,
                onSubmitError: U,
                onFormSubmitted: z
            } = {}) => {
                const q = {
                    id: r,
                    autoInject: o,
                    showBranding: s,
                    isEmailRequired: i,
                    isNameRequired: a,
                    showEmail: c,
                    showName: u,
                    enableScreenshot: l,
                    useSentryUser: d,
                    tags: p,
                    styleNonce: f,
                    scriptNonce: h,
                    colorScheme: m,
                    themeDark: y,
                    themeLight: g,
                    triggerLabel: O,
                    triggerAriaLabel: P,
                    cancelButtonLabel: v,
                    submitButtonLabel: A,
                    confirmButtonLabel: b,
                    formTitle: w,
                    emailLabel: S,
                    emailPlaceholder: k,
                    messageLabel: E,
                    messagePlaceholder: T,
                    nameLabel: C,
                    namePlaceholder: I,
                    successMessageText: M,
                    isRequiredLabel: x,
                    addScreenshotButtonLabel: _,
                    removeScreenshotButtonLabel: R,
                    highlightToolText: L,
                    hideToolText: N,
                    removeHighlightText: $,
                    onFormClose: j,
                    onFormOpen: F,
                    onSubmitError: U,
                    onSubmitSuccess: B,
                    onFormSubmitted: z
                };
                let W = null,
                    H = null,
                    V = [];
                const J = e => {
                        if (!W) {
                            const t = ot.createElement("div");
                            t.id = String(e.id), ot.body.appendChild(t), W = t.attachShadow({
                                mode: "open"
                            }), H = gt(e), W.appendChild(H)
                        }
                        return W
                    },
                    G = async r => {
                        const o = r.enableScreenshot && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(st.userAgent) || /Macintosh/i.test(st.userAgent) && st.maxTouchPoints && st.maxTouchPoints > 1 || !isSecureContext);
                        let s, i;
                        try {
                            s = (t ? t() : await e("feedbackModalIntegration", h))(), Qe(s)
                        } catch {
                            throw ct && D.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`."), new Error("[Feedback] Missing feedback modal integration!")
                        }
                        try {
                            const t = o ? n ? n() : await e("feedbackScreenshotIntegration", h) : void 0;
                            t && (i = t(), Qe(i))
                        } catch {
                            ct && D.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.")
                        }
                        const a = s.createDialog({
                            options: { ...r,
                                onFormClose: () => {
                                    a ? .close(), r.onFormClose ? .()
                                },
                                onFormSubmitted: () => {
                                    a ? .close(), r.onFormSubmitted ? .()
                                }
                            },
                            screenshotIntegration: i,
                            sendFeedback: at,
                            shadow: J(r)
                        });
                        return a
                    },
                    K = (e, t = {}) => {
                        const n = ut(q, t),
                            r = "string" == typeof e ? ot.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
                        if (!r) throw ct && D.error("[Feedback] Unable to attach to target element"), new Error("Unable to attach to target element");
                        let o = null;
                        const s = async () => {
                            o || (o = await G({ ...n,
                                onFormSubmitted: () => {
                                    o ? .removeFromDom(), n.onFormSubmitted ? .()
                                }
                            })), o.appendToDom(), o.open()
                        };
                        r.addEventListener("click", s);
                        const i = () => {
                            V = V.filter((e => e !== i)), o ? .removeFromDom(), o = null, r.removeEventListener("click", s)
                        };
                        return V.push(i), i
                    },
                    Y = (e = {}) => {
                        const t = ut(q, e),
                            n = J(t),
                            r = dt({
                                triggerLabel: t.triggerLabel,
                                triggerAriaLabel: t.triggerAriaLabel,
                                shadow: n,
                                styleNonce: f
                            });
                        return K(r.el, { ...t,
                            onFormOpen() {
                                r.hide()
                            },
                            onFormClose() {
                                r.show()
                            },
                            onFormSubmitted() {
                                r.show()
                            }
                        }), r
                    };
                return {
                    name: "Feedback",
                    setupOnce() {
                        nt() && q.autoInject && ("loading" === ot.readyState ? ot.addEventListener("DOMContentLoaded", (() => Y().appendToDom())) : Y().appendToDom())
                    },
                    attachTo: K,
                    createWidget(e = {}) {
                        const t = Y(ut(q, e));
                        return t.appendToDom(), t
                    },
                    createForm: async (e = {}) => G(ut(q, e)),
                    setTheme(e) {
                        if (q.colorScheme = e, W) {
                            const e = gt(q);
                            H ? W.replaceChild(e, H) : W.prepend(e), H = e
                        }
                    },
                    remove() {
                        W && (W.parentElement ? .remove(), W = null, H = null), V.forEach((e => e())), V = []
                    }
                }
            };

            function _t() {
                const e = Ve();
                return e ? .getIntegrationByName("Feedback")
            }
            var vt, bt, St, kt, wt, xt, Et, Tt = {},
                Ct = [],
                It = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                Rt = Array.isArray;

            function At(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function Mt(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function Ot(e, t, n) {
                var r, o, s, i = {};
                for (s in t) "key" == s ? r = t[s] : "ref" == s ? o = t[s] : i[s] = t[s];
                if (arguments.length > 2 && (i.children = arguments.length > 3 ? vt.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                    for (s in e.defaultProps) void 0 === i[s] && (i[s] = e.defaultProps[s]);
                return Pt(e, i, r, o, null)
            }

            function Pt(e, t, n, r, o) {
                var s = {
                    type: e,
                    props: t,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: null == o ? ++St : o,
                    __i: -1,
                    __u: 0
                };
                return null == o && null != bt.vnode && bt.vnode(s), s
            }

            function Lt(e) {
                return e.children
            }

            function Nt(e, t) {
                this.props = e, this.context = t
            }

            function Dt(e, t) {
                if (null == t) return e.__ ? Dt(e.__, e.__i + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? Dt(e) : null
            }

            function $t(e, t, n) {
                var r, o = e.__v,
                    s = o.__e,
                    i = e.__P;
                if (i) return (r = At({}, o)).__v = o.__v + 1, bt.vnode && bt.vnode(r), Gt(i, r, o, e.__n, void 0 !== i.ownerSVGElement, 32 & o.__u ? [s] : null, t, null == s ? Dt(o) : s, !!(32 & o.__u), n), r.__.__k[r.__i] = r, r.__d = void 0, r.__e != s && Ft(r), r
            }

            function Ft(e) {
                var t, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                        if (null != (n = e.__k[t]) && null != n.__e) {
                            e.__e = e.__c.base = n.__e;
                            break
                        }
                    return Ft(e)
                }
            }

            function jt(e) {
                (!e.__d && (e.__d = !0) && kt.push(e) && !Bt.__r++ || wt !== bt.debounceRendering) && ((wt = bt.debounceRendering) || xt)(Bt)
            }

            function Bt() {
                var e, t, n, r = [],
                    o = [];
                for (kt.sort(Et); e = kt.shift();) e.__d && (n = kt.length, t = $t(e, r, o) || t, 0 === n || kt.length > n ? (Kt(r, t, o), o.length = r.length = 0, t = void 0, kt.sort(Et)) : t && bt.__c && bt.__c(t, Ct));
                t && Kt(r, t, o), Bt.__r = 0
            }

            function Ut(e, t, n, r, o, s, i, a, c, u, l) {
                var d, p, f, h, m, g = r && r.__k || Ct,
                    y = t.length;
                for (n.__d = c, function(e, t, n) {
                        var r, o, s, i, a, c = t.length,
                            u = n.length,
                            l = u,
                            d = 0;
                        for (e.__k = [], r = 0; r < c; r++) null != (o = e.__k[r] = null == (o = t[r]) || "boolean" == typeof o || "function" == typeof o ? null : "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? Pt(null, o, null, null, o) : Rt(o) ? Pt(Lt, {
                            children: o
                        }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? Pt(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) ? (o.__ = e, o.__b = e.__b + 1, a = qt(o, n, i = r + d, l), o.__i = a, s = null, -1 !== a && (l--, (s = n[a]) && (s.__u |= 131072)), null == s || null === s.__v ? (-1 == a && d--, "function" != typeof o.type && (o.__u |= 65536)) : a !== i && (a === i + 1 ? d++ : a > i ? l > c - i ? d += a - i : d-- : d = a < i && a == i - 1 ? a - i : 0, a !== r + d && (o.__u |= 65536))) : (s = n[r]) && null == s.key && s.__e && (s.__e == e.__d && (e.__d = Dt(s)), Zt(s, s, !1), n[r] = null, l--);
                        if (l)
                            for (r = 0; r < u; r++) null != (s = n[r]) && !(131072 & s.__u) && (s.__e == e.__d && (e.__d = Dt(s)), Zt(s, s))
                    }(n, t, g), c = n.__d, d = 0; d < y; d++) null != (f = n.__k[d]) && "boolean" != typeof f && "function" != typeof f && (p = -1 === f.__i ? Tt : g[f.__i] || Tt, f.__i = d, Gt(e, f, p, o, s, i, a, c, u, l), h = f.__e, f.ref && p.ref != f.ref && (p.ref && Xt(p.ref, null, f), l.push(f.ref, f.__c || h, f)), null == m && null != h && (m = h), 65536 & f.__u || p.__k === f.__k ? c = zt(f, c, e) : "function" == typeof f.type && void 0 !== f.__d ? c = f.__d : h && (c = h.nextSibling), f.__d = void 0, f.__u &= -196609);
                n.__d = c, n.__e = m
            }

            function zt(e, t, n) {
                var r, o;
                if ("function" == typeof e.type) {
                    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = zt(r[o], t, n));
                    return t
                }
                e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
                do {
                    t = t && t.nextSibling
                } while (null != t && 8 === t.nodeType);
                return t
            }

            function qt(e, t, n, r) {
                var o = e.key,
                    s = e.type,
                    i = n - 1,
                    a = n + 1,
                    c = t[n];
                if (null === c || c && o == c.key && s === c.type) return n;
                if (r > (null == c || 131072 & c.__u ? 0 : 1))
                    for (; i >= 0 || a < t.length;) {
                        if (i >= 0) {
                            if ((c = t[i]) && !(131072 & c.__u) && o == c.key && s === c.type) return i;
                            i--
                        }
                        if (a < t.length) {
                            if ((c = t[a]) && !(131072 & c.__u) && o == c.key && s === c.type) return a;
                            a++
                        }
                    }
                return -1
            }

            function Wt(e, t, n) {
                "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || It.test(t) ? n : n + "px"
            }

            function Ht(e, t, n, r, o) {
                var s;
                e: if ("style" === t)
                    if ("string" == typeof n) e.style.cssText = n;
                    else {
                        if ("string" == typeof r && (e.style.cssText = r = ""), r)
                            for (t in r) n && t in n || Wt(e.style, t, "");
                        if (n)
                            for (t in n) r && n[t] === r[t] || Wt(e.style, t, n[t])
                    }
                else if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, s ? Jt : Vt, s)) : e.removeEventListener(t, s ? Jt : Vt, s);
                else {
                    if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {}
                    "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
                }
            }

            function Vt(e) {
                if (this.l) {
                    var t = this.l[e.type + !1];
                    if (e.t) {
                        if (e.t <= t.u) return
                    } else e.t = Date.now();
                    return t(bt.event ? bt.event(e) : e)
                }
            }

            function Jt(e) {
                if (this.l) return this.l[e.type + !0](bt.event ? bt.event(e) : e)
            }

            function Gt(e, t, n, r, o, s, i, a, c, u) {
                var l, d, p, f, h, m, g, y, _, v, b, S, k, w, x, E = t.type;
                if (void 0 !== t.constructor) return null;
                128 & n.__u && (c = !!(32 & n.__u), s = [a = t.__e = n.__e]), (l = bt.__b) && l(t);
                e: if ("function" == typeof E) try {
                    if (y = t.props, _ = (l = E.contextType) && r[l.__c], v = l ? _ ? _.props.value : l.__ : r, n.__c ? g = (d = t.__c = n.__c).__ = d.__E : ("prototype" in E && E.prototype.render ? t.__c = d = new E(y, v) : (t.__c = d = new Nt(y, v), d.constructor = E, d.render = Qt), _ && _.sub(d), d.props = y, d.state || (d.state = {}), d.context = v, d.__n = r, p = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != E.getDerivedStateFromProps && (d.__s == d.state && (d.__s = At({}, d.__s)), At(d.__s, E.getDerivedStateFromProps(y, d.__s))), f = d.props, h = d.state, d.__v = t, p) null == E.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                    else {
                        if (null == E.getDerivedStateFromProps && y !== f && null != d.componentWillReceiveProps && d.componentWillReceiveProps(y, v), !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(y, d.__s, v) || t.__v === n.__v)) {
                            for (t.__v !== n.__v && (d.props = y, d.state = d.__s, d.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                                    e && (e.__ = t)
                                })), b = 0; b < d._sb.length; b++) d.__h.push(d._sb[b]);
                            d._sb = [], d.__h.length && i.push(d);
                            break e
                        }
                        null != d.componentWillUpdate && d.componentWillUpdate(y, d.__s, v), null != d.componentDidUpdate && d.__h.push((function() {
                            d.componentDidUpdate(f, h, m)
                        }))
                    }
                    if (d.context = v, d.props = y, d.__P = e, d.__e = !1, S = bt.__r, k = 0, "prototype" in E && E.prototype.render) {
                        for (d.state = d.__s, d.__d = !1, S && S(t), l = d.render(d.props, d.state, d.context), w = 0; w < d._sb.length; w++) d.__h.push(d._sb[w]);
                        d._sb = []
                    } else
                        do {
                            d.__d = !1, S && S(t), l = d.render(d.props, d.state, d.context), d.state = d.__s
                        } while (d.__d && ++k < 25);
                    d.state = d.__s, null != d.getChildContext && (r = At(At({}, r), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (m = d.getSnapshotBeforeUpdate(f, h)), Ut(e, Rt(x = null != l && l.type === Lt && null == l.key ? l.props.children : l) ? x : [x], t, n, r, o, s, i, a, c, u), d.base = t.__e, t.__u &= -161, d.__h.length && i.push(d), g && (d.__E = d.__ = null)
                } catch (e) {
                    t.__v = null, c || null != s ? (t.__e = a, t.__u |= c ? 160 : 32, s[s.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), bt.__e(e, t, n)
                } else null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Yt(n.__e, t, n, r, o, s, i, c, u);
                (l = bt.diffed) && l(t)
            }

            function Kt(e, t, n) {
                for (var r = 0; r < n.length; r++) Xt(n[r], n[++r], n[++r]);
                bt.__c && bt.__c(t, e), e.some((function(t) {
                    try {
                        e = t.__h, t.__h = [], e.some((function(e) {
                            e.call(t)
                        }))
                    } catch (e) {
                        bt.__e(e, t.__v)
                    }
                }))
            }

            function Yt(e, t, n, r, o, s, i, a, c) {
                var u, l, d, p, f, h, m, g = n.props,
                    y = t.props,
                    _ = t.type;
                if ("svg" === _ && (o = !0), null != s)
                    for (u = 0; u < s.length; u++)
                        if ((f = s[u]) && "setAttribute" in f == !!_ && (_ ? f.localName === _ : 3 === f.nodeType)) {
                            e = f, s[u] = null;
                            break
                        }
                if (null == e) {
                    if (null === _) return document.createTextNode(y);
                    e = o ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, y.is && y), s = null, a = !1
                }
                if (null === _) g === y || a && e.data === y || (e.data = y);
                else {
                    if (s = s && vt.call(e.childNodes), g = n.props || Tt, !a && null != s)
                        for (g = {}, u = 0; u < e.attributes.length; u++) g[(f = e.attributes[u]).name] = f.value;
                    for (u in g) f = g[u], "children" == u || ("dangerouslySetInnerHTML" == u ? d = f : "key" === u || u in y || Ht(e, u, null, f, o));
                    for (u in y) f = y[u], "children" == u ? p = f : "dangerouslySetInnerHTML" == u ? l = f : "value" == u ? h = f : "checked" == u ? m = f : "key" === u || a && "function" != typeof f || g[u] === f || Ht(e, u, f, g[u], o);
                    if (l) a || d && (l.__html === d.__html || l.__html === e.innerHTML) || (e.innerHTML = l.__html), t.__k = [];
                    else if (d && (e.innerHTML = ""), Ut(e, Rt(p) ? p : [p], t, n, r, o && "foreignObject" !== _, s, i, s ? s[0] : n.__k && Dt(n, 0), a, c), null != s)
                        for (u = s.length; u--;) null != s[u] && Mt(s[u]);
                    a || (u = "value", void 0 !== h && (h !== e[u] || "progress" === _ && !h || "option" === _ && h !== g[u]) && Ht(e, u, h, g[u], !1), u = "checked", void 0 !== m && m !== e[u] && Ht(e, u, m, g[u], !1))
                }
                return e
            }

            function Xt(e, t, n) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    bt.__e(e, n)
                }
            }

            function Zt(e, t, n) {
                var r, o;
                if (bt.unmount && bt.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Xt(r, null, t)), null != (r = e.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (e) {
                        bt.__e(e, t)
                    }
                    r.base = r.__P = null, e.__c = void 0
                }
                if (r = e.__k)
                    for (o = 0; o < r.length; o++) r[o] && Zt(r[o], t, n || "function" != typeof e.type);
                n || null == e.__e || Mt(e.__e), e.__ = e.__e = e.__d = void 0
            }

            function Qt(e, t, n) {
                return this.constructor(e, n)
            }
            vt = Ct.slice, bt = {
                __e: function(e, t, n, r) {
                    for (var o, s, i; t = t.__;)
                        if ((o = t.__c) && !o.__) try {
                            if ((s = o.constructor) && null != s.getDerivedStateFromError && (o.setState(s.getDerivedStateFromError(e)), i = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), i = o.__d), i) return o.__E = o
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, St = 0, Nt.prototype.setState = function(e, t) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = At({}, this.state), "function" == typeof e && (e = e(At({}, n), this.props)), e && At(n, e), null != e && this.__v && (t && this._sb.push(t), jt(this))
            }, Nt.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), jt(this))
            }, Nt.prototype.render = Lt, kt = [], xt = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Et = function(e, t) {
                return e.__v.__b - t.__v.__b
            }, Bt.__r = 0;
            var en, tn, nn, rn, on = 0,
                sn = [],
                an = [],
                cn = bt,
                un = cn.__b,
                ln = cn.__r,
                dn = cn.diffed,
                pn = cn.__c,
                fn = cn.unmount,
                hn = cn.__;

            function mn(e, t) {
                cn.__h && cn.__h(tn, e, on || t), on = 0;
                var n = tn.__H || (tn.__H = {
                    __: [],
                    __h: []
                });
                return e >= n.__.length && n.__.push({
                    __V: an
                }), n.__[e]
            }

            function gn(e) {
                return on = 1, yn(Cn, e)
            }

            function yn(e, t, n) {
                var r = mn(en++, 2);
                if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Cn(void 0, t), function(e) {
                        var t = r.__N ? r.__N[0] : r.__[0],
                            n = r.t(t, e);
                        t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}))
                    }], r.__c = tn, !tn.u)) {
                    var o = function(e, t, n) {
                        if (!r.__c.__H) return !0;
                        var o = r.__c.__H.__.filter((function(e) {
                            return !!e.__c
                        }));
                        if (o.every((function(e) {
                                return !e.__N
                            }))) return !s || s.call(this, e, t, n);
                        var i = !1;
                        return o.forEach((function(e) {
                            if (e.__N) {
                                var t = e.__[0];
                                e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (i = !0)
                            }
                        })), !(!i && r.__c.props === e) && (!s || s.call(this, e, t, n))
                    };
                    tn.u = !0;
                    var s = tn.shouldComponentUpdate,
                        i = tn.componentWillUpdate;
                    tn.componentWillUpdate = function(e, t, n) {
                        if (this.__e) {
                            var r = s;
                            s = void 0, o(e, t, n), s = r
                        }
                        i && i.call(this, e, t, n)
                    }, tn.shouldComponentUpdate = o
                }
                return r.__N || r.__
            }

            function _n(e, t) {
                var n = mn(en++, 4);
                !cn.__s && Tn(n.__H, t) && (n.__ = e, n.i = t, tn.__h.push(n))
            }

            function vn(e, t) {
                var n = mn(en++, 7);
                return Tn(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
            }

            function bn(e, t) {
                return on = 8, vn((function() {
                    return e
                }), t)
            }

            function Sn() {
                for (var e; e = sn.shift();)
                    if (e.__P && e.__H) try {
                        e.__H.__h.forEach(xn), e.__H.__h.forEach(En), e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [], cn.__e(t, e.__v)
                    }
            }
            cn.__b = function(e) {
                tn = null, un && un(e)
            }, cn.__ = function(e, t) {
                t.__k && t.__k.__m && (e.__m = t.__k.__m), hn && hn(e, t)
            }, cn.__r = function(e) {
                ln && ln(e), en = 0;
                var t = (tn = e.__c).__H;
                t && (nn === tn ? (t.__h = [], tn.__h = [], t.__.forEach((function(e) {
                    e.__N && (e.__ = e.__N), e.__V = an, e.__N = e.i = void 0
                }))) : (t.__h.forEach(xn), t.__h.forEach(En), t.__h = [], en = 0)), nn = tn
            }, cn.diffed = function(e) {
                dn && dn(e);
                var t = e.__c;
                t && t.__H && (t.__H.__h.length && (1 !== sn.push(t) && rn === cn.requestAnimationFrame || ((rn = cn.requestAnimationFrame) || wn)(Sn)), t.__H.__.forEach((function(e) {
                    e.i && (e.__H = e.i), e.__V !== an && (e.__ = e.__V), e.i = void 0, e.__V = an
                }))), nn = tn = null
            }, cn.__c = function(e, t) {
                t.some((function(e) {
                    try {
                        e.__h.forEach(xn), e.__h = e.__h.filter((function(e) {
                            return !e.__ || En(e)
                        }))
                    } catch (n) {
                        t.some((function(e) {
                            e.__h && (e.__h = [])
                        })), t = [], cn.__e(n, e.__v)
                    }
                })), pn && pn(e, t)
            }, cn.unmount = function(e) {
                fn && fn(e);
                var t, n = e.__c;
                n && n.__H && (n.__H.__.forEach((function(e) {
                    try {
                        xn(e)
                    } catch (e) {
                        t = e
                    }
                })), n.__H = void 0, t && cn.__e(t, n.__v))
            };
            var kn = "function" == typeof requestAnimationFrame;

            function wn(e) {
                var t, n = function() {
                        clearTimeout(r), kn && cancelAnimationFrame(t), setTimeout(e)
                    },
                    r = setTimeout(n, 100);
                kn && (t = requestAnimationFrame(n))
            }

            function xn(e) {
                var t = tn,
                    n = e.__c;
                "function" == typeof n && (e.__c = void 0, n()), tn = t
            }

            function En(e) {
                var t = tn;
                e.__c = e.__(), tn = t
            }

            function Tn(e, t) {
                return !e || e.length !== t.length || t.some((function(t, n) {
                    return t !== e[n]
                }))
            }

            function Cn(e, t) {
                return "function" == typeof t ? t(e) : t
            }
            const In = Object.defineProperty({
                __proto__: null,
                useCallback: bn,
                useContext: function(e) {
                    var t = tn.context[e.__c],
                        n = mn(en++, 9);
                    return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(tn)), t.props.value) : e.__
                },
                useDebugValue: function(e, t) {
                    cn.useDebugValue && cn.useDebugValue(t ? t(e) : e)
                },
                useEffect: function(e, t) {
                    var n = mn(en++, 3);
                    !cn.__s && Tn(n.__H, t) && (n.__ = e, n.i = t, tn.__H.__h.push(n))
                },
                useErrorBoundary: function(e) {
                    var t = mn(en++, 10),
                        n = gn();
                    return t.__ = e, tn.componentDidCatch || (tn.componentDidCatch = function(e, r) {
                        t.__ && t.__(e, r), n[1](e)
                    }), [n[0], function() {
                        n[1](void 0)
                    }]
                },
                useId: function() {
                    var e = mn(en++, 11);
                    if (!e.__) {
                        for (var t = tn.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
                        var n = t.__m || (t.__m = [0, 0]);
                        e.__ = "P" + n[0] + "-" + n[1]++
                    }
                    return e.__
                },
                useImperativeHandle: function(e, t, n) {
                    on = 6, _n((function() {
                        return "function" == typeof e ? (e(t()), function() {
                            return e(null)
                        }) : e ? (e.current = t(), function() {
                            return e.current = null
                        }) : void 0
                    }), null == n ? n : n.concat(e))
                },
                useLayoutEffect: _n,
                useMemo: vn,
                useReducer: yn,
                useRef: function(e) {
                    return on = 5, vn((function() {
                        return {
                            current: e
                        }
                    }), [])
                },
                useState: gn
            }, Symbol.toStringTag, {
                value: "Module"
            });

            function Rn() {
                const e = e => ot.createElementNS("http://www.w3.org/2000/svg", e),
                    t = lt(e("svg"), {
                        width: "32",
                        height: "30",
                        viewBox: "0 0 72 66",
                        fill: "inherit"
                    }),
                    n = lt(e("path"), {
                        transform: "translate(11, 11)",
                        d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
                    });
                return t.appendChild(n), t
            }

            function An({
                options: e
            }) {
                const t = vn((() => ({
                    __html: Rn().outerHTML
                })), []);
                return Ot("h2", {
                    class: "dialog__header"
                }, Ot("span", {
                    class: "dialog__title"
                }, e.formTitle), e.showBranding ? Ot("a", {
                    class: "brand-link",
                    target: "_blank",
                    href: "https://sentry.io/welcome/",
                    title: "Powered by Sentry",
                    rel: "noopener noreferrer",
                    dangerouslySetInnerHTML: t
                }) : null)
            }

            function Mn(e, t) {
                const n = e.get(t);
                return "string" == typeof n ? n.trim() : ""
            }

            function On({
                options: e,
                defaultEmail: t,
                defaultName: n,
                onFormClose: r,
                onSubmit: o,
                onSubmitSuccess: s,
                onSubmitError: i,
                showEmail: a,
                showName: c,
                screenshotInput: u
            }) {
                const {
                    tags: l,
                    addScreenshotButtonLabel: d,
                    removeScreenshotButtonLabel: p,
                    cancelButtonLabel: f,
                    emailLabel: h,
                    emailPlaceholder: m,
                    isEmailRequired: g,
                    isNameRequired: y,
                    messageLabel: _,
                    messagePlaceholder: v,
                    nameLabel: b,
                    namePlaceholder: S,
                    submitButtonLabel: k,
                    isRequiredLabel: w
                } = e, [x, E] = gn(!1), [T, C] = gn(null), [I, R] = gn(!1), A = u ? .input, [M, O] = gn(null), P = bn((e => {
                    O(e), R(!1)
                }), []), L = bn((e => {
                    const t = function(e, t) {
                        const n = [];
                        return t.isNameRequired && !e.name && n.push(t.nameLabel), t.isEmailRequired && !e.email && n.push(t.emailLabel), e.message || n.push(t.messageLabel), n
                    }(e, {
                        emailLabel: h,
                        isEmailRequired: g,
                        isNameRequired: y,
                        messageLabel: _,
                        nameLabel: b
                    });
                    return t.length > 0 ? C(`Please enter in the following required fields: ${t.join(", ")}`) : C(null), 0 === t.length
                }), [h, g, y, _, b]), N = bn((async e => {
                    E(!0);
                    try {
                        if (e.preventDefault(), !(e.target instanceof HTMLFormElement)) return;
                        const t = new FormData(e.target),
                            n = await (u && I ? u.value() : void 0),
                            r = {
                                name: Mn(t, "name"),
                                email: Mn(t, "email"),
                                message: Mn(t, "message"),
                                attachments: n ? [n] : void 0
                            };
                        if (!L(r)) return;
                        try {
                            const e = await o({
                                name: r.name,
                                email: r.email,
                                message: r.message,
                                source: "widget",
                                tags: l
                            }, {
                                attachments: r.attachments
                            });
                            s(r, e)
                        } catch (e) {
                            ct && D.error(e), C(e), i(e)
                        }
                    } finally {
                        E(!1)
                    }
                }), [u && I, s, i]);
                return Ot("form", {
                    class: "form",
                    onSubmit: N
                }, A && I ? Ot(A, {
                    onError: P
                }) : null, Ot("fieldset", {
                    class: "form__right",
                    "data-sentry-feedback": !0,
                    disabled: x
                }, Ot("div", {
                    class: "form__top"
                }, T ? Ot("div", {
                    class: "form__error-container"
                }, T) : null, c ? Ot("label", {
                    for: "name",
                    class: "form__label"
                }, Ot(Pn, {
                    label: b,
                    isRequiredLabel: w,
                    isRequired: y
                }), Ot("input", {
                    class: "form__input",
                    defaultValue: n,
                    id: "name",
                    name: "name",
                    placeholder: S,
                    required: y,
                    type: "text"
                })) : Ot("input", {
                    "aria-hidden": !0,
                    value: n,
                    name: "name",
                    type: "hidden"
                }), a ? Ot("label", {
                    for: "email",
                    class: "form__label"
                }, Ot(Pn, {
                    label: h,
                    isRequiredLabel: w,
                    isRequired: g
                }), Ot("input", {
                    class: "form__input",
                    defaultValue: t,
                    id: "email",
                    name: "email",
                    placeholder: m,
                    required: g,
                    type: "email"
                })) : Ot("input", {
                    "aria-hidden": !0,
                    value: t,
                    name: "email",
                    type: "hidden"
                }), Ot("label", {
                    for: "message",
                    class: "form__label"
                }, Ot(Pn, {
                    label: _,
                    isRequiredLabel: w,
                    isRequired: !0
                }), Ot("textarea", {
                    autoFocus: !0,
                    class: "form__input form__input--textarea",
                    id: "message",
                    name: "message",
                    placeholder: v,
                    required: !0,
                    rows: 5
                })), A ? Ot("label", {
                    for: "screenshot",
                    class: "form__label"
                }, Ot("button", {
                    class: "btn btn--default",
                    disabled: x,
                    type: "button",
                    onClick: () => {
                        O(null), R((e => !e))
                    }
                }, I ? p : d), M ? Ot("div", {
                    class: "form__error-container"
                }, M.message) : null) : null), Ot("div", {
                    class: "btn-group"
                }, Ot("button", {
                    class: "btn btn--primary",
                    disabled: x,
                    type: "submit"
                }, k), Ot("button", {
                    class: "btn btn--default",
                    disabled: x,
                    type: "button",
                    onClick: r
                }, f))))
            }

            function Pn({
                label: e,
                isRequired: t,
                isRequiredLabel: n
            }) {
                return Ot("span", {
                    class: "form__label__text"
                }, e, t && Ot("span", {
                    class: "form__label__text--required"
                }, n))
            }

            function Ln() {
                const e = e => rt.document.createElementNS("http://www.w3.org/2000/svg", e),
                    t = lt(e("svg"), {
                        width: "16",
                        height: "17",
                        viewBox: "0 0 16 17",
                        fill: "inherit"
                    }),
                    n = lt(e("g"), {
                        clipPath: "url(#clip0_57_156)"
                    }),
                    r = lt(e("path"), {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
                    }),
                    o = lt(e("path"), {
                        d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
                    });
                t.appendChild(n).append(o, r);
                const s = e("defs"),
                    i = lt(e("clipPath"), {
                        id: "clip0_57_156"
                    }),
                    a = lt(e("rect"), {
                        width: "16",
                        height: "16",
                        fill: "white",
                        transform: "translate(0 0.5)"
                    });
                return i.appendChild(a), s.appendChild(i), t.appendChild(s).appendChild(i).appendChild(a), t
            }

            function Nn({
                open: e,
                onFormSubmitted: t,
                ...n
            }) {
                const r = n.options,
                    o = vn((() => ({
                        __html: Ln().outerHTML
                    })), []),
                    [s, i] = gn(null),
                    a = bn((() => {
                        s && (clearTimeout(s), i(null)), t()
                    }), [s]),
                    c = bn(((e, r) => {
                        n.onSubmitSuccess(e, r), i(setTimeout((() => {
                            t(), i(null)
                        }), 5e3))
                    }), [t]);
                return Ot(Lt, null, s ? Ot("div", {
                    class: "success__position",
                    onClick: a
                }, Ot("div", {
                    class: "success__content"
                }, r.successMessageText, Ot("span", {
                    class: "success__icon",
                    dangerouslySetInnerHTML: o
                }))) : Ot("dialog", {
                    class: "dialog",
                    onClick: r.onFormClose,
                    open: e
                }, Ot("div", {
                    class: "dialog__position"
                }, Ot("div", {
                    class: "dialog__content",
                    onClick: e => {
                        e.stopPropagation()
                    }
                }, Ot(An, {
                    options: r
                }), Ot(On, { ...n,
                    onSubmitSuccess: c
                })))))
            }
            const Dn = () => ({
                name: "FeedbackModal",
                setupOnce() {},
                createDialog: ({
                    options: e,
                    screenshotIntegration: t,
                    sendFeedback: n,
                    shadow: r
                }) => {
                    const o = r,
                        s = e.useSentryUser,
                        i = function() {
                            const e = Ue().getUser(),
                                t = ze().getUser(),
                                n = qe().getUser();
                            return e && Object.keys(e).length ? e : t && Object.keys(t).length ? t : n
                        }(),
                        a = ot.createElement("div"),
                        c = function(e) {
                            const t = ot.createElement("style");
                            return t.textContent = "\n:host {\n  --dialog-inset: var(--inset);\n}\n\n\n.dialog {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: 0;\n  inset: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  height: 100vh;\n  width: 100vw;\n\n  color: var(--dialog-color, var(--foreground));\n  fill: var(--dialog-color, var(--foreground));\n  line-height: 1.75em;\n\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  inset: 0;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog__position {\n  position: fixed;\n  z-index: var(--z-index);\n  inset: var(--dialog-inset);\n  padding: var(--page-margin);\n  display: flex;\n  max-height: calc(100vh - (2 * var(--page-margin)));\n}\n@media (max-width: 600px) {\n  .dialog__position {\n    inset: var(--page-margin);\n    padding: 0;\n  }\n}\n\n.dialog__position:has(.editor) {\n  inset: var(--page-margin);\n  padding: 0;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: var(--dialog-padding, 24px);\n  max-width: 100%;\n  width: 100%;\n  max-height: 100%;\n  overflow: auto;\n\n  background: var(--dialog-background, var(--background));\n  border-radius: var(--dialog-border-radius, 20px);\n  border: var(--dialog-border, var(--border));\n  box-shadow: var(--dialog-box-shadow, var(--box-shadow));\n  transform: translate(0, 0) scale(1);\n  transition: transform 0.2s ease-in-out;\n}\n\n\n\n.dialog__header {\n  display: flex;\n  gap: 4px;\n  justify-content: space-between;\n  font-weight: var(--dialog-header-weight, 600);\n  margin: 0;\n}\n.dialog__title {\n  align-self: center;\n  width: var(--form-width, 272px);\n}\n\n@media (max-width: 600px) {\n  .dialog__title {\n    width: auto;\n  }\n}\n\n.dialog__position:has(.editor) .dialog__title {\n  width: auto;\n}\n\n\n.brand-link {\n  display: inline-flex;\n}\n.brand-link:focus-visible {\n  outline: var(--outline);\n}\n\n\n.form {\n  display: flex;\n  overflow: auto;\n  flex-direction: row;\n  gap: 16px;\n  flex: 1 0;\n}\n\n.form fieldset {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\n.form__right {\n  flex: 0 0 auto;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  width: var(--form-width, 100%);\n}\n\n.dialog__position:has(.editor) .form__right {\n  width: var(--form-width, 272px);\n}\n\n.form__top {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.form__error-container {\n  color: var(--error-color);\n  fill: var(--error-color);\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  font-family: inherit;\n  line-height: inherit;\n  background: transparent;\n  box-sizing: border-box;\n  border: var(--input-border, var(--border));\n  border-radius: var(--input-border-radius, 6px);\n  color: var(--input-color, inherit);\n  fill: var(--input-color, inherit);\n  font-size: var(--input-font-size, inherit);\n  font-weight: var(--input-font-weight, 500);\n  padding: 6px 12px;\n}\n\n.form__input::placeholder {\n  opacity: 0.65;\n  color: var(--input-placeholder-color, inherit);\n  filter: var(--interactive-filter);\n}\n\n.form__input:focus-visible {\n  outline: var(--input-focus-outline, var(--outline));\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.error {\n  color: var(--error-color);\n  fill: var(--error-color);\n}\n\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--button-font-size, inherit);\n  font-weight: var(--button-font-weight, 600);\n  padding: var(--button-padding, 6px 16px);\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  color: var(--button-primary-color, var(--accent-foreground));\n  fill: var(--button-primary-color, var(--accent-foreground));\n  background: var(--button-primary-background, var(--accent-background));\n  border: var(--button-primary-border, var(--border));\n  border-radius: var(--button-primary-border-radius, 6px);\n  font-weight: var(--button-primary-font-weight, 500);\n}\n.btn--primary:hover {\n  color: var(--button-primary-hover-color, var(--accent-foreground));\n  fill: var(--button-primary-hover-color, var(--accent-foreground));\n  background: var(--button-primary-hover-background, var(--accent-background));\n  filter: var(--interactive-filter);\n}\n.btn--primary:focus-visible {\n  background: var(--button-primary-hover-background, var(--accent-background));\n  filter: var(--interactive-filter);\n  outline: var(--button-primary-focus-outline, var(--outline));\n}\n\n.btn--default {\n  color: var(--button-color, var(--foreground));\n  fill: var(--button-color, var(--foreground));\n  background: var(--button-background, var(--background));\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  font-weight: var(--button-font-weight, 500);\n}\n.btn--default:hover {\n  color: var(--button-color, var(--foreground));\n  fill: var(--button-color, var(--foreground));\n  background: var(--button-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n.btn--default:focus-visible {\n  background: var(--button-hover-background, var(--background));\n  filter: var(--interactive-filter);\n  outline: var(--button-focus-outline, var(--outline));\n}\n\n\n.success__position {\n  position: fixed;\n  inset: var(--dialog-inset);\n  padding: var(--page-margin);\n  z-index: var(--z-index);\n}\n.success__content {\n  background: var(--success-background, var(--background));\n  border: var(--success-border, var(--border));\n  border-radius: var(--success-border-radius, 1.7em/50%);\n  box-shadow: var(--success-box-shadow, var(--box-shadow));\n  font-weight: var(--success-font-weight, 600);\n  color: var(--success-color);\n  fill: var(--success-color);\n  padding: 12px 24px;\n  line-height: 1.75em;\n\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success__icon {\n  display: flex;\n}\n\n", e && t.setAttribute("nonce", e), t
                        }(e.styleNonce);
                    let u = "";
                    const l = {
                            get el() {
                                return a
                            },
                            appendToDom() {
                                o.contains(c) || o.contains(a) || (o.appendChild(c), o.appendChild(a))
                            },
                            removeFromDom() {
                                a.remove(), c.remove(), ot.body.style.overflow = u
                            },
                            open() {
                                p(!0), e.onFormOpen ? .(), Ve() ? .emit("openFeedbackWidget"), u = ot.body.style.overflow, ot.body.style.overflow = "hidden"
                            },
                            close() {
                                p(!1), ot.body.style.overflow = u
                            }
                        },
                        d = t ? .createInput({
                            h: Ot,
                            hooks: In,
                            dialog: l,
                            options: e
                        }),
                        p = t => {
                            ! function(e, t) {
                                var n, r, o;
                                bt.__ && bt.__(e, t), n = t.__k, r = [], o = [], Gt(t, e = t.__k = Ot(Lt, null, [e]), n || Tt, Tt, void 0 !== t.ownerSVGElement, n ? null : t.firstChild ? vt.call(t.childNodes) : null, r, n ? n.__e : t.firstChild, !1, o), e.__d = void 0, Kt(r, e, o)
                            }(Ot(Nn, {
                                options: e,
                                screenshotInput: d,
                                showName: e.showName || e.isNameRequired,
                                showEmail: e.showEmail || e.isEmailRequired,
                                defaultName: String(s && i ? .[s.name] || ""),
                                defaultEmail: String(s && i ? .[s.email] || ""),
                                onFormClose: () => {
                                    p(!1), e.onFormClose ? .()
                                },
                                onSubmit: n,
                                onSubmitSuccess: (t, n) => {
                                    p(!1), e.onSubmitSuccess ? .(t, n)
                                },
                                onSubmitError: t => {
                                    e.onSubmitError ? .(t)
                                },
                                onFormSubmitted: () => {
                                    e.onFormSubmitted ? .()
                                },
                                open: t
                            }), a)
                        };
                    return l
                }
            });

            function $n(e) {
                const t = ot.createElement("style"),
                    n = "#1A141F",
                    r = "#302735";
                return t.textContent = `\n.editor {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n}\n\n.editor__image-container {\n  justify-items: center;\n  padding: 15px;\n  position: relative;\n  height: 100%;\n  border-radius: var(--menu-border-radius, 6px);\n\n  background-color: ${n};\n  background-image: repeating-linear-gradient(\n      -145deg,\n      transparent,\n      transparent 8px,\n      ${n} 8px,\n      ${n} 11px\n    ),\n    repeating-linear-gradient(\n      -45deg,\n      transparent,\n      transparent 15px,\n      ${r} 15px,\n      ${r} 16px\n    );\n}\n\n.editor__canvas-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.editor__canvas-container > * {\n  object-fit: contain;\n  position: absolute;\n}\n\n.editor__tool-container {\n  padding-top: 8px;\n  display: flex;\n  justify-content: center;\n}\n\n.editor__tool-bar {\n  display: flex;\n  gap: 8px;\n}\n\n.editor__tool {\n  display: flex;\n  padding: 8px 12px;\n  justify-content: center;\n  align-items: center;\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  background: var(--button-background, var(--background));\n  color: var(--button-color, var(--foreground));\n}\n\n.editor__tool--active {\n  background: var(--button-primary-background, var(--accent-background));\n  color: var(--button-primary-color, var(--accent-foreground));\n}\n\n.editor__rect {\n  position: absolute;\n  z-index: 2;\n}\n\n.editor__rect button {\n  opacity: 0;\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  cursor: pointer;\n  padding: 0;\n  z-index: 3;\n  border: none;\n  background: none;\n}\n\n.editor__rect:hover button {\n  opacity: 1;\n}\n`, e && t.setAttribute("nonce", e), t
            }

            function Fn({
                hooks: e
            }) {
                return function({
                    onBeforeScreenshot: t,
                    onScreenshot: n,
                    onAfterScreenshot: r,
                    onError: o
                }) {
                    const s = function() {
                        const [t, n] = e.useState(rt.devicePixelRatio ? ? 1);
                        return e.useEffect((() => {
                            const e = () => {
                                    n(rt.devicePixelRatio)
                                },
                                t = matchMedia(`(resolution: ${rt.devicePixelRatio}dppx)`);
                            return t.addEventListener("change", e), () => {
                                t.removeEventListener("change", e)
                            }
                        }), []), t
                    }();
                    e.useEffect((() => {
                        (async () => {
                            t();
                            const e = await st.mediaDevices.getDisplayMedia({
                                    video: {
                                        width: rt.innerWidth * s,
                                        height: rt.innerHeight * s
                                    },
                                    audio: !1,
                                    monitorTypeSurfaces: "exclude",
                                    preferCurrentTab: !0,
                                    selfBrowserSurface: "include",
                                    surfaceSwitching: "exclude"
                                }),
                                o = ot.createElement("video");
                            await new Promise(((t, r) => {
                                o.srcObject = e, o.onloadedmetadata = () => {
                                    n(o, s), e.getTracks().forEach((e => e.stop())), t()
                                }, o.play().catch(r)
                            })), r()
                        })().catch(o)
                    }), [])
                }
            }

            function jn(e, t, n) {
                if (!e) return;
                const r = e.getContext("2d", t);
                r && n(e, r)
            }

            function Bn(e, t) {
                jn(e, {
                    alpha: !0
                }, ((e, n) => {
                    n.drawImage(t, 0, 0, t.width, t.height, 0, 0, e.width, e.height)
                }))
            }

            function Un(e, t, n) {
                jn(e, {
                    alpha: !0
                }, ((e, r) => {
                    n.length && (r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e.width, e.height)), n.forEach((e => {
                        ! function(e, t, n) {
                            switch (e.type) {
                                case "highlight":
                                    t.shadowColor = "rgba(0, 0, 0, 0.7)", t.shadowBlur = 50, t.fillStyle = n, t.fillRect(e.x - 1, e.y - 1, e.w + 2, e.h + 2), t.clearRect(e.x, e.y, e.w, e.h);
                                    break;
                                case "hide":
                                    t.fillStyle = "rgb(0, 0, 0)", t.fillRect(e.x, e.y, e.w, e.h)
                            }
                        }(e, r, t)
                    }))
                }))
            }

            function zn({
                h: e,
                hooks: t,
                outputBuffer: n,
                dialog: r,
                options: o
            }) {
                const s = Fn({
                        hooks: t
                    }),
                    i = function({
                        h: e
                    }) {
                        return function({
                            action: t,
                            setAction: n,
                            options: r
                        }) {
                            return e("div", {
                                class: "editor__tool-container"
                            }, e("div", {
                                class: "editor__tool-bar"
                            }, e("button", {
                                type: "button",
                                class: "editor__tool " + ("highlight" === t ? "editor__tool--active" : ""),
                                onClick: () => {
                                    n("highlight" === t ? "" : "highlight")
                                }
                            }, r.highlightToolText), e("button", {
                                type: "button",
                                class: "editor__tool " + ("hide" === t ? "editor__tool--active" : ""),
                                onClick: () => {
                                    n("hide" === t ? "" : "hide")
                                }
                            }, r.hideToolText)))
                        }
                    }({
                        h: e
                    }),
                    a = function({
                        h: e
                    }) {
                        return function() {
                            return e("svg", {
                                "data-test-id": "icon-close",
                                viewBox: "0 0 16 16",
                                fill: "#2B2233",
                                height: "25px",
                                width: "25px"
                            }, e("circle", {
                                r: "7",
                                cx: "8",
                                cy: "8",
                                fill: "white"
                            }), e("path", {
                                strokeWidth: "1.5",
                                d: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"
                            }), e("path", {
                                strokeWidth: "1.5",
                                d: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z"
                            }), e("path", {
                                strokeWidth: "1.5",
                                d: "M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z"
                            }))
                        }
                    }({
                        h: e
                    }),
                    c = {
                        __html: $n(o.styleNonce).innerText
                    },
                    u = r.el.style,
                    l = ({
                        screenshot: r
                    }) => {
                        const [s, u] = t.useState("highlight"), [l, d] = t.useState([]), p = t.useRef(null), f = t.useRef(null), h = t.useRef(null), m = t.useRef(null), [g, y] = t.useState(1), _ = t.useMemo((() => {
                            const e = ot.getElementById(o.id);
                            if (!e) return "white";
                            const t = getComputedStyle(e);
                            return t.getPropertyValue("--button-primary-background") || t.getPropertyValue("--accent-background")
                        }), [o.id]);
                        t.useLayoutEffect((() => {
                            const e = () => {
                                const t = p.current;
                                t && (jn(r.canvas, {
                                    alpha: !1
                                }, (e => {
                                    const n = Math.min(t.clientWidth / e.width, t.clientHeight / e.height);
                                    y(n)
                                })), 0 !== t.clientHeight && 0 !== t.clientWidth || setTimeout(e, 0))
                            };
                            return e(), rt.addEventListener("resize", e), () => {
                                rt.removeEventListener("resize", e)
                            }
                        }), [r]);
                        const v = t.useCallback(((e, t) => {
                            jn(e, {
                                alpha: !0
                            }, ((e, n) => {
                                n.scale(t, t), e.width = r.canvas.width, e.height = r.canvas.height
                            }))
                        }), [r]);
                        t.useEffect((() => {
                            v(f.current, r.dpi), Bn(f.current, r.canvas)
                        }), [r]), t.useEffect((() => {
                            v(h.current, r.dpi), jn(h.current, {
                                alpha: !0
                            }, ((e, t) => {
                                t.clearRect(0, 0, e.width, e.height)
                            })), Un(h.current, _, l)
                        }), [l, _]), t.useEffect((() => {
                            v(n, r.dpi), Bn(n, r.canvas), jn(ot.createElement("canvas"), {
                                alpha: !0
                            }, ((e, t) => {
                                t.scale(r.dpi, r.dpi), e.width = r.canvas.width, e.height = r.canvas.height, Un(e, _, l), Bn(n, e)
                            }))
                        }), [l, r, _]);
                        const b = t.useCallback((e => t => {
                                t.preventDefault(), t.stopPropagation(), d((t => {
                                    const n = [...t];
                                    return n.splice(e, 1), n
                                }))
                            }), []),
                            S = {
                                width: r.canvas.width * g + "px",
                                height: r.canvas.height * g + "px"
                            },
                            k = e => {
                                e.stopPropagation()
                            };
                        return e("div", {
                            class: "editor"
                        }, e("style", {
                            nonce: o.styleNonce,
                            dangerouslySetInnerHTML: c
                        }), e("div", {
                            class: "editor__image-container"
                        }, e("div", {
                            class: "editor__canvas-container",
                            ref: p
                        }, e("canvas", {
                            ref: f,
                            id: "background",
                            style: S
                        }), e("canvas", {
                            ref: h,
                            id: "foreground",
                            style: S
                        }), e("div", {
                            ref: m,
                            onMouseDown: e => {
                                if (!s || !m.current) return;
                                const t = m.current.getBoundingClientRect(),
                                    n = {
                                        type: s,
                                        x: e.offsetX / g,
                                        y: e.offsetY / g
                                    },
                                    r = (e, n) => {
                                        const r = (n.clientX - t.x) / g,
                                            o = (n.clientY - t.y) / g;
                                        return {
                                            type: e.type,
                                            x: Math.min(e.x, r),
                                            y: Math.min(e.y, o),
                                            w: Math.abs(r - e.x),
                                            h: Math.abs(o - e.y)
                                        }
                                    },
                                    o = e => {
                                        jn(h.current, {
                                            alpha: !0
                                        }, ((e, t) => {
                                            t.clearRect(0, 0, e.width, e.height)
                                        })), Un(h.current, _, [...l, r(n, e)])
                                    },
                                    i = e => {
                                        const t = r(n, e);
                                        t.w * g >= 1 && t.h * g >= 1 && d((e => [...e, t])), ot.removeEventListener("mousemove", o), ot.removeEventListener("mouseup", i)
                                    };
                                ot.addEventListener("mousemove", o), ot.addEventListener("mouseup", i)
                            },
                            style: S
                        }, l.map(((t, n) => e("div", {
                            key: n,
                            class: "editor__rect",
                            style: {
                                top: t.y * g + "px",
                                left: t.x * g + "px",
                                width: t.w * g + "px",
                                height: t.h * g + "px"
                            }
                        }, e("button", {
                            "aria-label": o.removeHighlightText,
                            onClick: b(n),
                            onMouseDown: k,
                            onMouseUp: k,
                            type: "button"
                        }, e(a, null)))))))), e(i, {
                            options: o,
                            action: s,
                            setAction: u
                        }))
                    };
                return function({
                    onError: r
                }) {
                    const [o, i] = t.useState();
                    return s({
                        onBeforeScreenshot: t.useCallback((() => {
                            u.display = "none"
                        }), []),
                        onScreenshot: t.useCallback(((e, t) => {
                            jn(ot.createElement("canvas"), {
                                alpha: !1
                            }, ((n, r) => {
                                r.scale(t, t), n.width = e.videoWidth, n.height = e.videoHeight, r.drawImage(e, 0, 0, n.width, n.height), i({
                                    canvas: n,
                                    dpi: t
                                })
                            })), n.width = e.videoWidth, n.height = e.videoHeight
                        }), []),
                        onAfterScreenshot: t.useCallback((() => {
                            u.display = "block"
                        }), []),
                        onError: t.useCallback((e => {
                            u.display = "block", r(e)
                        }), [])
                    }), o ? e(l, {
                        screenshot: o
                    }) : e("div", null)
                }
            }
            const qn = () => ({
                    name: "FeedbackScreenshot",
                    setupOnce() {},
                    createInput: ({
                        h: e,
                        hooks: t,
                        dialog: n,
                        options: r
                    }) => {
                        const o = ot.createElement("canvas");
                        return {
                            input: zn({
                                h: e,
                                hooks: t,
                                outputBuffer: o,
                                dialog: n,
                                options: r
                            }),
                            value: async () => {
                                const e = await new Promise((e => {
                                    o.toBlob(e, "image/png")
                                }));
                                if (e) {
                                    return {
                                        data: new Uint8Array(await e.arrayBuffer()),
                                        filename: "screenshot.png",
                                        contentType: "application/png"
                                    }
                                }
                            }
                        }
                    }
                }),
                Wn = "production";

            function Hn(e) {
                return new Jn((t => {
                    t(e)
                }))
            }

            function Vn(e) {
                return new Jn(((t, n) => {
                    n(e)
                }))
            }
            class Jn {
                constructor(e) {
                    this._state = 0, this._handlers = [], this._runExecutor(e)
                }
                then(e, t) {
                    return new Jn(((n, r) => {
                        this._handlers.push([!1, t => {
                            if (e) try {
                                n(e(t))
                            } catch (e) {
                                r(e)
                            } else n(t)
                        }, e => {
                            if (t) try {
                                n(t(e))
                            } catch (e) {
                                r(e)
                            } else r(e)
                        }]), this._executeHandlers()
                    }))
                } catch (e) {
                    return this.then((e => e), e)
                } finally(e) {
                    return new Jn(((t, n) => {
                        let r, o;
                        return this.then((t => {
                            o = !1, r = t, e && e()
                        }), (t => {
                            o = !0, r = t, e && e()
                        })).then((() => {
                            o ? n(r) : t(r)
                        }))
                    }))
                }
                _executeHandlers() {
                    if (0 === this._state) return;
                    const e = this._handlers.slice();
                    this._handlers = [], e.forEach((e => {
                        e[0] || (1 === this._state && e[1](this._value), 2 === this._state && e[2](this._value), e[0] = !0)
                    }))
                }
                _runExecutor(e) {
                    const t = (e, t) => {
                            0 === this._state && (S(t) ? t.then(n, r) : (this._state = e, this._value = t, this._executeHandlers()))
                        },
                        n = e => {
                            t(1, e)
                        },
                        r = e => {
                            t(2, e)
                        };
                    try {
                        e(n, r)
                    } catch (e) {
                        r(e)
                    }
                }
            }

            function Gn(e, t, n, r = 0) {
                try {
                    const o = Kn(t, n, e, r);
                    return S(o) ? o : Hn(o)
                } catch (e) {
                    return Vn(e)
                }
            }

            function Kn(e, t, n, r) {
                const o = n[r];
                if (!e || !o) return e;
                const s = o({ ...e
                }, t);
                return l && null === s && D.log(`Event processor "${o.id||"?"}" dropped event`), S(s) ? s.then((e => Kn(e, t, n, r + 1))) : Kn(s, t, n, r + 1)
            }
            let Yn, Xn, Zn, Qn;

            function er(e) {
                const t = s._sentryDebugIds,
                    n = s._debugIds;
                if (!t && !n) return {};
                const r = t ? Object.keys(t) : [],
                    o = n ? Object.keys(n) : [];
                if (Qn && r.length === Xn && o.length === Zn) return Qn;
                Xn = r.length, Zn = o.length, Qn = {}, Yn || (Yn = {});
                const i = (t, n) => {
                    for (const r of t) {
                        const t = n[r],
                            o = Yn ? .[r];
                        if (o && Qn && t) Qn[o[0]] = t, Yn && (Yn[r] = [o[0], t]);
                        else if (t) {
                            const n = e(r);
                            for (let e = n.length - 1; e >= 0; e--) {
                                const o = n[e],
                                    s = o ? .filename;
                                if (s && Qn && Yn) {
                                    Qn[s] = t, Yn[r] = [s, t];
                                    break
                                }
                            }
                        }
                    }
                };
                return t && i(r, t), n && i(o, n), Qn
            }

            function tr(e, t = 100, n = 1 / 0) {
                try {
                    return rr("", e, t, n)
                } catch (e) {
                    return {
                        ERROR: `**non-serializable** (${e})`
                    }
                }
            }

            function nr(e, t = 3, n = 102400) {
                const r = tr(e, t);
                return o = r,
                    function(e) {
                        return ~-encodeURI(e).split(/%..|./).length
                    }(JSON.stringify(o)) > n ? nr(e, t - 1, n) : r;
                var o
            }

            function rr(e, t, n = 1 / 0, r = 1 / 0, o = function() {
                const e = new WeakSet;

                function t(t) {
                    return !!e.has(t) || (e.add(t), !1)
                }

                function n(t) {
                    e.delete(t)
                }
                return [t, n]
            }()) {
                const [s, i] = o;
                if (null == t || ["boolean", "string"].includes(typeof t) || "number" == typeof t && Number.isFinite(t)) return t;
                const a = function(e, t) {
                    try {
                        if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                        if ("domainEmitter" === e) return "[DomainEmitter]";
                        if ("undefined" != typeof globalThis && t === globalThis) return "[Global]";
                        if ("undefined" != typeof window && t === window) return "[Window]";
                        if ("undefined" != typeof document && t === document) return "[Document]";
                        if (w(t)) return ne(t);
                        if (v(n = t) && "nativeEvent" in n && "preventDefault" in n && "stopPropagation" in n) return "[SyntheticEvent]";
                        if ("number" == typeof t && !Number.isFinite(t)) return `[${t}]`;
                        if ("function" == typeof t) return `[Function: ${ee(t)}]`;
                        if ("symbol" == typeof t) return `[${String(t)}]`;
                        if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                        const r = function(e) {
                            const t = Object.getPrototypeOf(e);
                            return t ? .constructor ? t.constructor.name : "null prototype"
                        }(t);
                        return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
                    } catch (e) {
                        return `**non-serializable** (${e})`
                    }
                    var n
                }(e, t);
                if (!a.startsWith("[object ")) return a;
                if (t.__sentry_skip_normalization__) return t;
                const c = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : n;
                if (0 === c) return a.replace("object ", "");
                if (s(t)) return "[Circular ~]";
                const u = t;
                if (u && "function" == typeof u.toJSON) try {
                    return rr("", u.toJSON(), c - 1, r, o)
                } catch {}
                const l = Array.isArray(t) ? [] : {};
                let d = 0;
                const p = U(t);
                for (const e in p) {
                    if (!Object.prototype.hasOwnProperty.call(p, e)) continue;
                    if (d >= r) {
                        l[e] = "[MaxProperties ~]";
                        break
                    }
                    const t = p[e];
                    l[e] = rr(e, t, c - 1, r, o), d++
                }
                return i(t), l
            }
            const or = "sentry.source",
                sr = "sentry.sample_rate",
                ir = "sentry.previous_trace_sample_rate",
                ar = "sentry.op",
                cr = "sentry.origin",
                ur = "sentry.idle_span_finish_reason",
                lr = "sentry.measurement_unit",
                dr = "sentry.measurement_value",
                pr = "sentry.custom_span_name",
                fr = "sentry.profile_id",
                hr = "sentry.exclusive_time",
                mr = "http.request.method",
                gr = "url.full",
                yr = "sentry.link.type",
                _r = "sentry-";

            function vr(e) {
                const t = function(e) {
                    if (!e || !g(e) && !Array.isArray(e)) return;
                    if (Array.isArray(e)) return e.reduce(((e, t) => {
                        const n = Sr(t);
                        return Object.entries(n).forEach((([t, n]) => {
                            e[t] = n
                        })), e
                    }), {});
                    return Sr(e)
                }(e);
                if (!t) return;
                const n = Object.entries(t).reduce(((e, [t, n]) => {
                    if (t.startsWith(_r)) {
                        e[t.slice(7)] = n
                    }
                    return e
                }), {});
                return Object.keys(n).length > 0 ? n : void 0
            }

            function br(e) {
                if (!e) return;
                return function(e) {
                    if (0 === Object.keys(e).length) return;
                    return Object.entries(e).reduce(((e, [t, n], r) => {
                        const o = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                            s = 0 === r ? o : `${e},${o}`;
                        return s.length > 8192 ? (l && D.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), e) : s
                    }), "")
                }(Object.entries(e).reduce(((e, [t, n]) => (n && (e[`${_r}${t}`] = n), e)), {}))
            }

            function Sr(e) {
                return e.split(",").map((e => {
                    const t = e.indexOf("=");
                    if (-1 === t) return [];
                    return [e.slice(0, t), e.slice(t + 1)].map((e => {
                        try {
                            return decodeURIComponent(e.trim())
                        } catch {
                            return
                        }
                    }))
                })).reduce(((e, [t, n]) => (t && n && (e[t] = n), e)), {})
            }
            const kr = /^o(\d+)\./,
                wr = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

            function xr(e, t = !1) {
                const {
                    host: n,
                    path: r,
                    pass: o,
                    port: s,
                    projectId: i,
                    protocol: a,
                    publicKey: c
                } = e;
                return `${a}://${c}${t&&o?`:${o}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${i}`
            }

            function Er(e) {
                const t = wr.exec(e);
                if (!t) return void O((() => {
                    console.error(`Invalid Sentry Dsn: ${e}`)
                }));
                const [n, r, o = "", s = "", i = "", a = ""] = t.slice(1);
                let c = "",
                    u = a;
                const l = u.split("/");
                if (l.length > 1 && (c = l.slice(0, -1).join("/"), u = l.pop()), u) {
                    const e = u.match(/^\d+/);
                    e && (u = e[0])
                }
                return Tr({
                    host: s,
                    pass: o,
                    path: c,
                    projectId: u,
                    port: i,
                    protocol: n,
                    publicKey: r
                })
            }

            function Tr(e) {
                return {
                    protocol: e.protocol,
                    publicKey: e.publicKey || "",
                    pass: e.pass || "",
                    host: e.host,
                    port: e.port || "",
                    path: e.path || "",
                    projectId: e.projectId
                }
            }

            function Cr(e) {
                const t = e.getOptions(),
                    {
                        host: n
                    } = e.getDsn() || {};
                let r;
                return t.orgId ? r = String(t.orgId) : n && (r = function(e) {
                    const t = e.match(kr);
                    return t ? .[1]
                }(n)), r
            }

            function Ir(e) {
                const t = "string" == typeof e ? Er(e) : Tr(e);
                if (t && function(e) {
                        if (!l) return !0;
                        const {
                            port: t,
                            projectId: n,
                            protocol: r
                        } = e;
                        return !(["protocol", "publicKey", "host", "projectId"].find((t => !e[t] && (D.error(`Invalid Sentry Dsn: ${t} missing`), !0))) || (n.match(/^\d+$/) ? function(e) {
                            return "http" === e || "https" === e
                        }(r) ? t && isNaN(parseInt(t, 10)) && (D.error(`Invalid Sentry Dsn: Invalid port ${t}`), 1) : (D.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), 1) : (D.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1)))
                    }(t)) return t
            }

            function Rr(e) {
                if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                const t = e || Ve() ? .getOptions();
                return !(!t || null == t.tracesSampleRate && !t.tracesSampler)
            }

            function Ar(e) {
                if (e < 400 && e >= 100) return {
                    code: 1
                };
                if (e >= 400 && e < 500) switch (e) {
                    case 401:
                        return {
                            code: 2,
                            message: "unauthenticated"
                        };
                    case 403:
                        return {
                            code: 2,
                            message: "permission_denied"
                        };
                    case 404:
                        return {
                            code: 2,
                            message: "not_found"
                        };
                    case 409:
                        return {
                            code: 2,
                            message: "already_exists"
                        };
                    case 413:
                        return {
                            code: 2,
                            message: "failed_precondition"
                        };
                    case 429:
                        return {
                            code: 2,
                            message: "resource_exhausted"
                        };
                    case 499:
                        return {
                            code: 2,
                            message: "cancelled"
                        };
                    default:
                        return {
                            code: 2,
                            message: "invalid_argument"
                        }
                }
                if (e >= 500 && e < 600) switch (e) {
                    case 501:
                        return {
                            code: 2,
                            message: "unimplemented"
                        };
                    case 503:
                        return {
                            code: 2,
                            message: "unavailable"
                        };
                    case 504:
                        return {
                            code: 2,
                            message: "deadline_exceeded"
                        };
                    default:
                        return {
                            code: 2,
                            message: "internal_error"
                        }
                }
                return {
                    code: 2,
                    message: "internal_error"
                }
            }

            function Mr(e, t) {
                e.setAttribute("http.response.status_code", t);
                const n = Ar(t);
                "unknown_error" !== n.message && e.setStatus(n)
            }
            const Or = "_sentryScope",
                Pr = "_sentryIsolationScope";

            function Lr(e) {
                if (e) {
                    if ("object" == typeof e && "deref" in e && "function" == typeof e.deref) try {
                        return e.deref()
                    } catch {
                        return
                    }
                    return e
                }
            }

            function Nr(e, t, n) {
                e && (F(e, Pr, function(e) {
                    try {
                        const t = s.WeakRef;
                        if ("function" == typeof t) return new t(e)
                    } catch {}
                    return e
                }(n)), F(e, Or, t))
            }

            function Dr(e) {
                const t = e;
                return {
                    scope: t[Or],
                    isolationScope: Lr(t[Pr])
                }
            }

            function $r(e) {
                if ("boolean" == typeof e) return Number(e);
                const t = "string" == typeof e ? parseFloat(e) : e;
                return "number" != typeof t || isNaN(t) || t < 0 || t > 1 ? void 0 : t
            }
            const Fr = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

            function jr(e, t) {
                const n = function(e) {
                        if (!e) return;
                        const t = e.match(Fr);
                        if (!t) return;
                        let n;
                        return "1" === t[3] ? n = !0 : "0" === t[3] && (n = !1), {
                            traceId: t[1],
                            parentSampled: n,
                            parentSpanId: t[2]
                        }
                    }(e),
                    r = vr(t);
                if (!n ? .traceId) return {
                    traceId: xe(),
                    sampleRand: V()
                };
                const o = function(e, t) {
                    const n = $r(t ? .sample_rand);
                    if (void 0 !== n) return n;
                    const r = $r(t ? .sample_rate);
                    return r && void 0 !== e ? .parentSampled ? e.parentSampled ? V() * r : r + V() * (1 - r) : V()
                }(n, r);
                r && (r.sample_rand = o.toString());
                const {
                    traceId: s,
                    parentSpanId: i,
                    parentSampled: a
                } = n;
                return {
                    traceId: s,
                    parentSpanId: i,
                    sampled: a,
                    dsc: r || {},
                    sampleRand: o
                }
            }

            function Br(e = xe(), t = Ee(), n) {
                let r = "";
                return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
            }

            function Ur(e = xe(), t = Ee(), n) {
                return `00-${e}-${t}-${n?"01":"00"}`
            }
            let zr = !1;

            function qr(e) {
                const {
                    spanId: t,
                    traceId: n
                } = e.spanContext(), {
                    data: r,
                    op: o,
                    parent_span_id: s,
                    status: i,
                    origin: a,
                    links: c
                } = Kr(e);
                return {
                    parent_span_id: s,
                    span_id: t,
                    trace_id: n,
                    data: r,
                    op: o,
                    status: i,
                    origin: a,
                    links: c
                }
            }

            function Wr(e) {
                const {
                    spanId: t,
                    traceId: n,
                    isRemote: r
                } = e.spanContext(), o = r ? t : Kr(e).parent_span_id, s = Dr(e).scope;
                return {
                    parent_span_id: o,
                    span_id: r ? s ? .getPropagationContext().propagationSpanId || Ee() : t,
                    trace_id: n
                }
            }

            function Hr(e) {
                const {
                    traceId: t,
                    spanId: n
                } = e.spanContext();
                return Br(t, n, Yr(e))
            }

            function Vr(e) {
                return e && e.length > 0 ? e.map((({
                    context: {
                        spanId: e,
                        traceId: t,
                        traceFlags: n,
                        ...r
                    },
                    attributes: o
                }) => ({
                    span_id: e,
                    trace_id: t,
                    sampled: 1 === n,
                    attributes: o,
                    ...r
                }))) : void 0
            }

            function Jr(e) {
                return "number" == typeof e ? Gr(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? Gr(e.getTime()) : _e()
            }

            function Gr(e) {
                return e > 9999999999 ? e / 1e3 : e
            }

            function Kr(e) {
                if (function(e) {
                        return "function" == typeof e.getSpanJSON
                    }(e)) return e.getSpanJSON();
                const {
                    spanId: t,
                    traceId: n
                } = e.spanContext();
                if (function(e) {
                        const t = e;
                        return !!(t.attributes && t.startTime && t.name && t.endTime && t.status)
                    }(e)) {
                    const {
                        attributes: r,
                        startTime: o,
                        name: s,
                        endTime: i,
                        status: a,
                        links: c
                    } = e;
                    return {
                        span_id: t,
                        trace_id: n,
                        data: r,
                        description: s,
                        parent_span_id: "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? e.parentSpanContext ? .spanId : void 0,
                        start_timestamp: Jr(o),
                        timestamp: Jr(i) || void 0,
                        status: Xr(a),
                        op: r[ar],
                        origin: r[cr],
                        links: Vr(c)
                    }
                }
                return {
                    span_id: t,
                    trace_id: n,
                    start_timestamp: 0,
                    data: {}
                }
            }

            function Yr(e) {
                const {
                    traceFlags: t
                } = e.spanContext();
                return 1 === t
            }

            function Xr(e) {
                if (e && 0 !== e.code) return 1 === e.code ? "ok" : e.message || "internal_error"
            }
            const Zr = "_sentryChildSpans",
                Qr = "_sentryRootSpan";

            function eo(e, t) {
                const n = e[Qr] || e;
                F(t, Qr, n), e[Zr] ? e[Zr].add(t) : F(e, Zr, new Set([t]))
            }

            function to(e) {
                const t = new Set;
                return function e(n) {
                    if (!t.has(n) && Yr(n)) {
                        t.add(n);
                        const r = n[Zr] ? Array.from(n[Zr]) : [];
                        for (const t of r) e(t)
                    }
                }(e), Array.from(t)
            }

            function no(e) {
                return e[Qr] || e
            }

            function ro() {
                const e = je(a());
                return e.getActiveSpan ? e.getActiveSpan() : Ie(Ue())
            }

            function oo() {
                zr || (O((() => {
                    console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
                })), zr = !0)
            }

            function so(e, t) {
                e.updateName(t), e.setAttributes({
                    [or]: "custom",
                    [pr]: t
                })
            }
            const io = "_frozenDsc";

            function ao(e, t) {
                F(e, io, t)
            }

            function co(e, t) {
                const n = t.getOptions(),
                    {
                        publicKey: r
                    } = t.getDsn() || {},
                    o = {
                        environment: n.environment || Wn,
                        release: n.release,
                        public_key: r,
                        trace_id: e,
                        org_id: Cr(t)
                    };
                return t.emit("createDsc", o), o
            }

            function uo(e, t) {
                const n = t.getPropagationContext();
                return n.dsc || co(n.traceId, e)
            }

            function lo(e) {
                const t = Ve();
                if (!t) return {};
                const n = no(e),
                    r = Kr(n),
                    o = r.data,
                    s = n.spanContext().traceState,
                    i = s ? .get("sentry.sample_rate") ? ? o[sr] ? ? o[ir];

                function a(e) {
                    return "number" != typeof i && "string" != typeof i || (e.sample_rate = `${i}`), e
                }
                const c = n[io];
                if (c) return a(c);
                const u = s ? .get("sentry.dsc"),
                    l = u && vr(u);
                if (l) return a(l);
                const d = co(e.spanContext().traceId, t),
                    p = o[or],
                    f = r.description;
                return "url" !== p && f && (d.transaction = f), Rr() && (d.sampled = String(Yr(n)), d.sample_rand = s ? .get("sentry.sample_rand") ? ? Dr(n).scope ? .getPropagationContext().sampleRand.toString()), a(d), t.emit("createDsc", d, n), d
            }

            function po(e) {
                return br(lo(e))
            }

            function fo(e, t) {
                const {
                    fingerprint: n,
                    span: r,
                    breadcrumbs: o,
                    sdkProcessingMetadata: s
                } = t;
                ! function(e, t) {
                    const {
                        extra: n,
                        tags: r,
                        user: o,
                        contexts: s,
                        level: i,
                        transactionName: a
                    } = t;
                    Object.keys(n).length && (e.extra = { ...n,
                        ...e.extra
                    });
                    Object.keys(r).length && (e.tags = { ...r,
                        ...e.tags
                    });
                    Object.keys(o).length && (e.user = { ...o,
                        ...e.user
                    });
                    Object.keys(s).length && (e.contexts = { ...s,
                        ...e.contexts
                    });
                    i && (e.level = i);
                    a && "transaction" !== e.type && (e.transaction = a)
                }(e, t), r && function(e, t) {
                        e.contexts = {
                            trace: Wr(t),
                            ...e.contexts
                        }, e.sdkProcessingMetadata = {
                            dynamicSamplingContext: lo(t),
                            ...e.sdkProcessingMetadata
                        };
                        const n = no(t),
                            r = Kr(n).description;
                        r && !e.transaction && "transaction" === e.type && (e.transaction = r)
                    }(e, r),
                    function(e, t) {
                        e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], t && (e.fingerprint = e.fingerprint.concat(t));
                        e.fingerprint.length || delete e.fingerprint
                    }(e, n),
                    function(e, t) {
                        const n = [...e.breadcrumbs || [], ...t];
                        e.breadcrumbs = n.length ? n : void 0
                    }(e, o),
                    function(e, t) {
                        e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata,
                            ...t
                        }
                    }(e, s)
            }

            function ho(e, t) {
                const {
                    extra: n,
                    tags: r,
                    attributes: o,
                    user: s,
                    contexts: i,
                    level: a,
                    sdkProcessingMetadata: c,
                    breadcrumbs: u,
                    fingerprint: l,
                    eventProcessors: d,
                    attachments: p,
                    propagationContext: f,
                    transactionName: h,
                    span: m
                } = t;
                mo(e, "extra", n), mo(e, "tags", r), mo(e, "attributes", o), mo(e, "user", s), mo(e, "contexts", i), e.sdkProcessingMetadata = we(e.sdkProcessingMetadata, c, 2), a && (e.level = a), h && (e.transactionName = h), m && (e.span = m), u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]), l.length && (e.fingerprint = [...e.fingerprint, ...l]), d.length && (e.eventProcessors = [...e.eventProcessors, ...d]), p.length && (e.attachments = [...e.attachments, ...p]), e.propagationContext = { ...e.propagationContext,
                    ...f
                }
            }

            function mo(e, t, n) {
                e[t] = we(e[t], n, 1)
            }

            function go(e, t) {
                const n = qe().getScopeData();
                return e && ho(n, e.getScopeData()), t && ho(n, t.getScopeData()), n
            }

            function yo(e, t, n, r, o, s) {
                const {
                    normalizeDepth: i = 3,
                    normalizeMaxBreadth: a = 1e3
                } = e, c = { ...t,
                    event_id: t.event_id || n.event_id || le(),
                    timestamp: t.timestamp || ge()
                }, u = n.integrations || e.integrations.map((e => e.name));
                ! function(e, t) {
                    const {
                        environment: n,
                        release: r,
                        dist: o,
                        maxValueLength: s
                    } = t;
                    e.environment = e.environment || n || Wn, !e.release && r && (e.release = r);
                    !e.dist && o && (e.dist = o);
                    const i = e.request;
                    i ? .url && s && (i.url = oe(i.url, s));
                    s && e.exception ? .values ? .forEach((e => {
                        e.value && (e.value = oe(e.value, s))
                    }))
                }(c, e),
                function(e, t) {
                    t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...t])
                }(c, u), o && o.emit("applyFrameMetadata", t), void 0 === t.type && function(e, t) {
                    const n = er(t);
                    e.exception ? .values ? .forEach((e => {
                        e.stacktrace ? .frames ? .forEach((e => {
                            e.filename && (e.debug_id = n[e.filename])
                        }))
                    }))
                }(c, e.stackParser);
                const l = function(e, t) {
                    if (!t) return e;
                    const n = e ? e.clone() : new Re;
                    return n.update(t), n
                }(r, n.captureContext);
                n.mechanism && he(c, n.mechanism);
                const d = o ? o.getEventProcessors() : [],
                    p = go(s, l),
                    f = [...n.attachments || [], ...p.attachments];
                f.length && (n.attachments = f), fo(c, p);
                const h = [...d, ...p.eventProcessors];
                return (n.data && !0 === n.data.__sentry__ ? Hn(c) : Gn(h, c, n)).then((e => (e && function(e) {
                    const t = {};
                    if (e.exception ? .values ? .forEach((e => {
                            e.stacktrace ? .frames ? .forEach((e => {
                                e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id)
                            }))
                        })), 0 === Object.keys(t).length) return;
                    e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                    const n = e.debug_meta.images;
                    Object.entries(t).forEach((([e, t]) => {
                        n.push({
                            type: "sourcemap",
                            code_file: e,
                            debug_id: t
                        })
                    }))
                }(e), "number" == typeof i && i > 0 ? function(e, t, n) {
                    if (!e) return null;
                    const r = { ...e,
                        ...e.breadcrumbs && {
                            breadcrumbs: e.breadcrumbs.map((e => ({ ...e,
                                ...e.data && {
                                    data: tr(e.data, t, n)
                                }
                            })))
                        },
                        ...e.user && {
                            user: tr(e.user, t, n)
                        },
                        ...e.contexts && {
                            contexts: tr(e.contexts, t, n)
                        },
                        ...e.extra && {
                            extra: tr(e.extra, t, n)
                        }
                    };
                    e.contexts ? .trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = tr(e.contexts.trace.data, t, n)));
                    e.spans && (r.spans = e.spans.map((e => ({ ...e,
                        ...e.data && {
                            data: tr(e.data, t, n)
                        }
                    }))));
                    e.contexts ? .flags && r.contexts && (r.contexts.flags = tr(e.contexts.flags, 3, n));
                    return r
                }(e, i, a) : e)))
            }

            function _o(e) {
                if (e) return function(e) {
                    return e instanceof Re || "function" == typeof e
                }(e) || function(e) {
                    return Object.keys(e).some((e => vo.includes(e)))
                }(e) ? {
                    captureContext: e
                } : e
            }
            const vo = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

            function bo(e, t) {
                return Ue().captureException(e, _o(t))
            }

            function So(e, t) {
                const n = "string" == typeof t ? t : void 0,
                    r = "string" != typeof t ? {
                        captureContext: t
                    } : void 0;
                return Ue().captureMessage(e, n, r)
            }

            function ko(e, t) {
                return Ue().captureEvent(e, t)
            }

            function wo(e, t) {
                ze().setContext(e, t)
            }

            function xo(e) {
                ze().setExtras(e)
            }

            function Eo(e, t) {
                ze().setExtra(e, t)
            }

            function To(e) {
                ze().setTags(e)
            }

            function Co(e, t) {
                ze().setTag(e, t)
            }

            function Io(e) {
                ze().setUser(e)
            }

            function Ro(e) {
                ze().setConversationId(e)
            }

            function Ao() {
                return ze().lastEventId()
            }
            async function Mo(e) {
                const t = Ve();
                return t ? t.flush(e) : (l && D.warn("Cannot flush events. No client defined."), Promise.resolve(!1))
            }
            async function Oo(e) {
                const t = Ve();
                return t ? t.close(e) : (l && D.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1))
            }

            function Po() {
                return !!Ve()
            }

            function Lo() {
                const e = Ve();
                return !1 !== e ? .getOptions().enabled && !!e ? .getTransport()
            }

            function No(e) {
                ze().addEventProcessor(e)
            }

            function Do(e) {
                const t = ze(),
                    {
                        user: n
                    } = go(t, Ue()),
                    {
                        userAgent: r
                    } = s.navigator || {},
                    o = Se({
                        user: n,
                        ...r && {
                            userAgent: r
                        },
                        ...e
                    }),
                    i = t.getSession();
                return "ok" === i ? .status && ke(i, {
                    status: "exited"
                }), $o(), t.setSession(o), o
            }

            function $o() {
                const e = ze(),
                    t = Ue().getSession() || e.getSession();
                t && function(e, t) {
                    let n = {};
                    t ? n = {
                        status: t
                    } : "ok" === e.status && (n = {
                        status: "exited"
                    }), ke(e, n)
                }(t), Fo(), e.setSession()
            }

            function Fo() {
                const e = ze(),
                    t = Ve(),
                    n = e.getSession();
                n && t && t.captureSession(n)
            }

            function jo(e = !1) {
                e ? $o() : Fo()
            }
            const Bo = s;
            let Uo = 0;

            function zo() {
                return Uo > 0
            }

            function qo(e, t = {}) {
                if (! function(e) {
                        return "function" == typeof e
                    }(e)) return e;
                try {
                    const t = e.__sentry_wrapped__;
                    if (t) return "function" == typeof t ? t : e;
                    if (B(e)) return e
                } catch {
                    return e
                }
                const n = function(...n) {
                    try {
                        const r = n.map((e => qo(e, t)));
                        return e.apply(this, r)
                    } catch (e) {
                        throw Uo++, setTimeout((() => {
                            Uo--
                        })), We((r => {
                            r.addEventProcessor((e => (t.mechanism && (fe(e, void 0, void 0), he(e, t.mechanism)), e.extra = { ...e.extra,
                                arguments: n
                            }, e))), bo(e)
                        })), e
                    }
                };
                try {
                    for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
                } catch {}
                j(n, e), F(e, "__sentry_wrapped__", n);
                try {
                    Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                        get: () => e.name
                    })
                } catch {}
                return n
            }

            function Wo() {
                const e = I(),
                    {
                        referrer: t
                    } = Bo.document || {},
                    {
                        userAgent: n
                    } = Bo.navigator || {};
                return {
                    url: e,
                    headers: { ...t && {
                            Referer: t
                        },
                        ...n && {
                            "User-Agent": n
                        }
                    }
                }
            }
            const Ho = ["replayIntegration", "replayCanvasIntegration", "feedbackIntegration", "feedbackModalIntegration", "feedbackScreenshotIntegration", "captureConsoleIntegration", "contextLinesIntegration", "linkedErrorsIntegration", "dedupeIntegration", "extraErrorDataIntegration", "graphqlClientIntegration", "httpClientIntegration", "reportingObserverIntegration", "rewriteFramesIntegration", "browserProfilingIntegration", "moduleMetadataIntegration", "instrumentAnthropicAiClient", "instrumentOpenAiClient", "instrumentGoogleGenAIClient", "instrumentLangGraph", "createLangChainCallbackHandler"],
                Vo = {
                    replayCanvasIntegration: "replay-canvas",
                    feedbackModalIntegration: "feedback-modal",
                    feedbackScreenshotIntegration: "feedback-screenshot"
                };
            const Jo = Bo;
            async function Go(e, t) {
                const n = Ho.includes(e) ? function(e) {
                        return Vo[e] || e.replace("Integration", "").toLowerCase()
                    }(e) : void 0,
                    r = Jo.Sentry = Jo.Sentry || {};
                if (!n) throw new Error(`Cannot lazy load integration: ${e}`);
                const o = r[e];
                if ("function" == typeof o && !("_isShim" in o)) return o;
                const s = function(e) {
                        const t = Ve(),
                            n = t ? .getOptions() ? .cdnBaseUrl || "https://browser.sentry-cdn.com";
                        return new URL(`/${i}/${e}.min.js`, n).toString()
                    }(n),
                    a = Bo.document.createElement("script");
                a.src = s, a.crossOrigin = "anonymous", a.referrerPolicy = "strict-origin", t && a.setAttribute("nonce", t);
                const c = new Promise(((e, t) => {
                        a.addEventListener("load", (() => e())), a.addEventListener("error", t)
                    })),
                    u = Bo.document.currentScript,
                    l = Bo.document.body || Bo.document.head || u ? .parentElement;
                if (!l) throw new Error(`Could not find parent element to insert lazy-loaded ${e} script`);
                l.appendChild(a);
                try {
                    await c
                } catch {
                    throw new Error(`Error when loading integration: ${e}`)
                }
                const d = r[e];
                if ("function" != typeof d) throw new Error(`Could not load integration: ${e}`);
                return d
            }
            const Ko = yt({
                    lazyLoadIntegration: Go
                }),
                Yo = yt({
                    getModalIntegration: () => Dn,
                    getScreenshotIntegration: () => qn
                });

            function Xo(e) {
                const t = e.protocol ? `${e.protocol}:` : "",
                    n = e.port ? `:${e.port}` : "";
                return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
            }

            function Zo(e, t, n) {
                return t || `${function(e){return`${Xo(e)}${e.projectId}/envelope/`}(e)}?${function(e,t){const n={sentry_version:"7"};return e.publicKey&&(n.sentry_key=e.publicKey),t&&(n.sentry_client=`
                $ {
                    t.name
                }
                /${t.version}`),new URLSearchParams(n).toString()}(e,n)}`}function Qo(e,t=[]){return[e,t]}function es(e,t){const[n,r]=e;return[n,[...r,t]]}function ts(e,t){const n=e[1];for(const e of n){if(t(e,e[0].type))return!0}return!1}function ns(e,t){return ts(e,((e,n)=>t.includes(n)))}function rs(e){const t=c(s);return t.encodePolyfill?t.encodePolyfill(e):(new TextEncoder).encode(e)}function os(e){const[t,n]=e;let r=JSON.stringify(t);function o(e){"string"==typeof r?r="string"==typeof e?r+e:[rs(r),e]:r.push("string"==typeof e?rs(e):e)}for(const e of n){const[t,n]=e;if(o(`\n${JSON.stringify(t)}\n`),"string"==typeof n||n instanceof Uint8Array)o(n);else{let e;try{e=JSON.stringify(n)}catch{e=JSON.stringify(tr(n))}o(e)}}return"string"==typeof r?r:function(e){const t=e.reduce(((e,t)=>e+t.length),0),n=new Uint8Array(t);let r=0;for(const t of e)n.set(t,r),r+=t.length;return n}(r)}function ss(e){let t="string"==typeof e?rs(e):e;function n(e){const n=t.subarray(0,e);return t=t.subarray(e+1),n}function r(){let e=t.indexOf(10);return e<0&&(e=t.length),JSON.parse(function(e){const t=c(s);return t.decodePolyfill?t.decodePolyfill(e):(new TextDecoder).decode(e)}(n(e)))}const o=r(),i=[];for(;t.length;){const e=r(),t="number"==typeof e.length?e.length:void 0;i.push([e,t?n(t):r()])}return[o,i]}function is(e){return[{type:"span"},e]}function as(e){const t="string"==typeof e.data?rs(e.data):e.data;return[{type:"attachment",length:t.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType},t]}const cs={sessions:"session",event:"error",client_report:"internal",user_report:"default",profile_chunk:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",raw_security:"security",log:"log_item",trace_metric:"metric"};function us(e){return function(e){return e in cs}(e)?cs[e]:e}function ls(e){if(!e?.sdk)return;const{name:t,version:n}=e.sdk;return{name:t,version:n}}function ds(e,t,n,r){const o=e.sdkProcessingMetadata?.dynamicSamplingContext;return{event_id:e.event_id,sent_at:(new Date).toISOString(),...t&&{sdk:t},...!!n&&r&&{dsn:xr(r)},...o&&{trace:o}}}const ps="MULTIPLEXED_TRANSPORT_EXTRA_KEY";function fs(e,t){let n;return ts(e,((e,r)=>(t.includes(r)&&(n=Array.isArray(e)?e[1]:void 0),!!n))),n}function hs(e,t){return n=>{const r=e(n),o=new Map,s=t||(e=>{const t=e.getEvent();return t?.extra?.[ps]&&Array.isArray(t.extra[ps])?t.extra[ps]:[]});function i(t,r){const s=r?`${t}:${r}`:t;let i=o.get(s);if(!i){const a=Er(t);if(!a)return;const c=Zo(a,n.tunnel);i=r?function(e,t){return n=>{const r=e(n);return{...r,send:async e=>{const n=fs(e,["event","transaction","profile","replay_event"]);return n&&(n.release=t),r.send(e)}}}}(e,r)({...n,url:c}):e({...n,url:c}),o.set(s,i)}return[t,i]}return{send:async function(e){const t=s({envelope:e,getEvent:function(t){return fs(e,t?.length?t:["event"])}}).map((e=>"string"==typeof e?i(e,void 0):i(e.dsn,e.release))).filter((e=>!!e)),n=t.length?t:[["",r]];return(await Promise.all(n.map((([t,n])=>n.send(function(e,t){return Qo(t?{...e[0],dsn:t}:e[0],e[1])}(e,t))))))[0]},flush:async function(e){const t=[...o.values(),r];return(await Promise.all(t.map((t=>t.flush(e))))).every((e=>e))}}}}const ms=100;function gs(e,t){const n=Ve(),r=ze();if(!n)return;const{beforeBreadcrumb:o=null,maxBreadcrumbs:s=ms}=n.getOptions();if(s<=0)return;const i={timestamp:ge(),...e},a=o?O((()=>o(i,t))):i;null!==a&&(n.emit&&n.emit("beforeAddBreadcrumb",a,t),r.addBreadcrumb(a,s))}const ys={},_s={};function vs(e,t){ys[e]=ys[e]||[],ys[e].push(t)}function bs(e,t){if(!_s[e]){_s[e]=!0;try{t()}catch(t){l&&D.error(`Error while instrumenting ${e}`,t)}}}function Ss(e,t){const n=e&&ys[e];if(n)for(const r of n)try{r(t)}catch(t){l&&D.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${ee(r)}\nError:`,t)}}function ks(e){const t="console";vs(t,e),bs(t,ws)}function ws(){"console"in s&&A.forEach((function(e){e in s.console&&$(s.console,e,(function(t){return M[e]=t,function(...t){Ss("console",{args:t,level:e});const n=M[e];n?.apply(s.console,t)}}))}))}function xs(e){return"warn"===e?"warning":["fatal","error","warning","log","info","debug"].includes(e)?e:"log"}const Es=(e={})=>{const t=e.levels||A,n=e.handled??!0;return{name:"CaptureConsole",setup(e){"console"in s&&ks((({args:r,level:o})=>{Ve()===e&&t.includes(o)&&function(e,t,n){const r=xs(t),o=new Error,s={level:xs(t),extra:{arguments:e}};We((i=>{if(i.addEventProcessor((e=>(e.logger="console",he(e,{handled:n,type:"auto.core.capture_console"}),e))),"assert"===t){if(!e[0]){const t=`Assertion failed: ${ie(e.slice(1)," ")||"console.assert"}`;i.setExtra("arguments",e.slice(1)),i.captureMessage(t,r,{captureContext:s,syntheticException:o})}return}const a=e.find((e=>e instanceof Error));if(a)return void bo(a,s);const c=ie(e," ");i.captureMessage(c,r,{captureContext:s,syntheticException:o})}))}(r,o,n)}))}}};function Ts(e,t){const{value:n,unit:r}="object"==typeof(o=e)&&null!=o&&!Array.isArray(o)&&Object.keys(o).includes("value")?e:{value:e,unit:void 0};var o;const s=function(e){const t="string"==typeof e?"string":"boolean"==typeof e?"boolean":"number"!=typeof e||Number.isNaN(e)?null:Number.isInteger(e)?"integer":"double";if(t)return{value:e,type:t}}(n),i=r&&"string"==typeof r?{unit:r}:{};if(s)return{...s,...i};if(!t||"skip-undefined"===t&&void 0===n)return;let a="";try{a=JSON.stringify(n)??""}catch{}return{value:a,type:"string",...i}}function Cs(e,t=!1){const n={};for(const[r,o]of Object.entries(e??{})){const e=Ts(o,t);e&&(n[r]=e)}return n}let Is,Rs=0;function As(e){const t=Math.floor(1e3*e);void 0!==Is&&t!==Is&&(Rs=0);const n=Rs;return Rs++,Is=t,{key:"sentry.timestamp.sequence",value:{value:n,type:"integer"}}}function Ms(e,t){return t?We(t,(()=>{const n=ro(),r=n?Wr(n):Je(t);return[n?lo(n):uo(e,t),r]})):[void 0,void 0]}const Os={trace:1,debug:5,info:9,warn:13,error:17,fatal:21};function Ps(e,t,n,r=!0){!n||e[t]&&!r||(e[t]=n)}function Ls(e,t){const n=Fs(),r=$s(e);void 0===r?n.set(e,[t]):r.length>=100?(Ds(e,r),n.set(e,[t])):n.set(e,[...r,t])}function Ns(e,t=Ue(),n=Ls){const r=t?.getClient()??Ve();if(!r)return void(l&&D.warn("No client available to capture log."));const{release:o,environment:s,enableLogs:i=!1,beforeSendLog:a}=r.getOptions();if(!i)return void(l&&D.warn("logging option not enabled, log will not be captured."));const[,c]=Ms(r,t),u={...e.attributes},{user:{id:d,email:p,username:f},attributes:h={}}=go(ze(),t);Ps(u,"user.id",d,!1),Ps(u,"user.email",p,!1),Ps(u,"user.name",f,!1),Ps(u,"sentry.release",o),Ps(u,"sentry.environment",s);const{name:m,version:g}=r.getSdkMetadata()?.sdk??{};Ps(u,"sentry.sdk.name",m),Ps(u,"sentry.sdk.version",g);const _=r.getIntegrationByName("Replay"),v=_?.getReplayId(!0);Ps(u,"sentry.replay_id",v),v&&"buffer"===_?.getRecordingMode()&&Ps(u,"sentry._internal.replay_is_buffering",!0);const b=e.message;if(y(b)){const{__sentry_template_string__:e,__sentry_template_values__:t=[]}=b;t?.length&&(u["sentry.message.template"]=e),t.forEach(((e,t)=>{u[`sentry.message.parameter.${t}`]=e}))}const S=Ie(t);Ps(u,"sentry.trace.parent_span_id",S?.spanContext().spanId);const k={...e,attributes:u};r.emit("beforeCaptureLog",k);const w=a?O((()=>a(k))):k;if(!w)return r.recordDroppedEvent("before_send","log_item",1),void(l&&D.warn("beforeSendLog returned null, log will not be captured."));const{level:x,message:E,attributes:T={},severityNumber:C}=w,I=_e(),R=As(I);n(r,{timestamp:I,level:x,body:E,trace_id:c?.trace_id,severity_number:C??Os[x],attributes:{...Cs(h),...Cs(T,!0),[R.key]:R.value}}),r.emit("afterCaptureLog",w)}function Ds(e,t){const n=t??$s(e)??[];if(0===n.length)return;const r=e.getOptions(),o=function(e,t,n,r){const o={};return t?.sdk&&(o.sdk={name:t.sdk.name,version:t.sdk.version}),n&&r&&(o.dsn=xr(r)),Qo(o,[(s=e,[{type:"log",item_count:s.length,content_type:"application/vnd.sentry.items.log+json"},{items:s}])]);var s}(n,r._metadata,r.tunnel,e.getDsn());Fs().set(e,[]),e.emit("flushLogs"),e.sendEnvelope(o)}function $s(e){return Fs().get(e)}function Fs(){return u("clientToLogBufferMap",(()=>new WeakMap))}function js(e,t,n){return"util"in s&&"function"==typeof s.util.format?s.util.format(...e):function(e,t,n){return e.map((e=>_(e)?String(e):JSON.stringify(tr(e,t,n)))).join(" ")}(e,t,n)}function Bs(e){return/ % [sdifocO] / .test(e)
            }

            function Us(e, t) {
                const n = {},
                    r = new Array(t.length).fill("{}").join(" ");
                return n["sentry.message.template"] = `${e} ${r}`, t.forEach(((e, t) => {
                    n[`sentry.message.parameter.${t}`] = e
                })), n
            }
            const zs = {
                    [cr]: "auto.log.console"
                },
                qs = (e = {}) => {
                    const t = e.levels || A;
                    return {
                        name: "ConsoleLogs",
                        setup(e) {
                            const {
                                enableLogs: n,
                                normalizeDepth: r = 3,
                                normalizeMaxBreadth: o = 1e3
                            } = e.getOptions();
                            n ? ks((({
                                args: n,
                                level: s
                            }) => {
                                if (Ve() !== e || !t.includes(s)) return;
                                const i = n[0],
                                    a = n.slice(1);
                                if ("assert" === s) {
                                    if (!i) {
                                        Ns({
                                            level: "error",
                                            message: a.length > 0 ? `Assertion failed: ${js(a,r,o)}` : "Assertion failed",
                                            attributes: zs
                                        })
                                    }
                                    return
                                }
                                const c = "log" === s,
                                    u = n.length > 1 && "string" == typeof n[0] && !Bs(n[0]),
                                    l = { ...zs,
                                        ...u ? Us(i, a) : {}
                                    };
                                Ns({
                                    level: c ? "info" : s,
                                    message: js(n, r, o),
                                    severityNumber: c ? 10 : void 0,
                                    attributes: l
                                })
                            })) : l && D.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled")
                        }
                    }
                };

            function Ws(e, t, n = () => {}, r = () => {}) {
                let o;
                try {
                    o = e()
                } catch (e) {
                    throw t(e), n(), e
                }
                return function(e, t, n, r) {
                    if (S(e)) return Oe(e, (e => {
                        n(), r(e)
                    }), (e => {
                        t(e), n()
                    }));
                    return n(), r(e), e
                }(o, t, n, r)
            }
            class Hs {
                constructor(e = {}) {
                    this._traceId = e.traceId || xe(), this._spanId = e.spanId || Ee()
                }
                spanContext() {
                    return {
                        spanId: this._spanId,
                        traceId: this._traceId,
                        traceFlags: 0
                    }
                }
                end(e) {}
                setAttribute(e, t) {
                    return this
                }
                setAttributes(e) {
                    return this
                }
                setStatus(e) {
                    return this
                }
                updateName(e) {
                    return this
                }
                isRecording() {
                    return !1
                }
                addEvent(e, t, n) {
                    return this
                }
                addLink(e) {
                    return this
                }
                addLinks(e) {
                    return this
                }
                recordException(e, t) {}
            }

            function Vs(e) {
                D.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`)
            }

            function Js(e, t) {
                if (!t ? .length || !e.description) return !1;
                for (const r of t) {
                    if ("string" == typeof(n = r) || n instanceof RegExp) {
                        if (ae(e.description, r)) return l && Vs(e), !0;
                        continue
                    }
                    if (!r.name && !r.op) continue;
                    const t = !r.name || ae(e.description, r.name),
                        o = !r.op || e.op && ae(e.op, r.op);
                    if (t && o) return l && Vs(e), !0
                }
                var n;
                return !1
            }

            function Gs(e, t) {
                const n = t.parent_span_id,
                    r = t.span_id;
                if (n)
                    for (const t of e) t.parent_span_id === r && (t.parent_span_id = n)
            }

            function Ks(e, t, n, r = ro()) {
                const o = r && no(r);
                o && (l && D.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), o.addEvent(e, {
                    [dr]: t,
                    [lr]: n
                }))
            }

            function Ys(e) {
                if (!e || 0 === e.length) return;
                const t = {};
                return e.forEach((e => {
                    const n = e.attributes || {},
                        r = n[lr],
                        o = n[dr];
                    "string" == typeof r && "number" == typeof o && (t[e.name] = {
                        value: o,
                        unit: r
                    })
                })), t
            }
            class Xs {
                constructor(e = {}) {
                    this._traceId = e.traceId || xe(), this._spanId = e.spanId || Ee(), this._startTime = e.startTimestamp || _e(), this._links = e.links, this._attributes = {}, this.setAttributes({
                        [cr]: "manual",
                        [ar]: e.op,
                        ...e.attributes
                    }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded()
                }
                addLink(e) {
                    return this._links ? this._links.push(e) : this._links = [e], this
                }
                addLinks(e) {
                    return this._links ? this._links.push(...e) : this._links = e, this
                }
                recordException(e, t) {}
                spanContext() {
                    const {
                        _spanId: e,
                        _traceId: t,
                        _sampled: n
                    } = this;
                    return {
                        spanId: e,
                        traceId: t,
                        traceFlags: n ? 1 : 0
                    }
                }
                setAttribute(e, t) {
                    return void 0 === t ? delete this._attributes[e] : this._attributes[e] = t, this
                }
                setAttributes(e) {
                    return Object.keys(e).forEach((t => this.setAttribute(t, e[t]))), this
                }
                updateStartTime(e) {
                    this._startTime = Jr(e)
                }
                setStatus(e) {
                    return this._status = e, this
                }
                updateName(e) {
                    return this._name = e, this.setAttribute(or, "custom"), this
                }
                end(e) {
                    this._endTime || (this._endTime = Jr(e), function(e) {
                        if (!l) return;
                        const {
                            description: t = "< unknown name >",
                            op: n = "< unknown op >"
                        } = Kr(e), {
                            spanId: r
                        } = e.spanContext(), o = `[Tracing] Finishing "${n}" ${no(e)===e?"root ":""}span "${t}" with ID ${r}`;
                        D.log(o)
                    }(this), this._onSpanEnded())
                }
                getSpanJSON() {
                    return {
                        data: this._attributes,
                        description: this._name,
                        op: this._attributes[ar],
                        parent_span_id: this._parentSpanId,
                        span_id: this._spanId,
                        start_timestamp: this._startTime,
                        status: Xr(this._status),
                        timestamp: this._endTime,
                        trace_id: this._traceId,
                        origin: this._attributes[cr],
                        profile_id: this._attributes[fr],
                        exclusive_time: this._attributes[hr],
                        measurements: Ys(this._events),
                        is_segment: this._isStandaloneSpan && no(this) === this || void 0,
                        segment_id: this._isStandaloneSpan ? no(this).spanContext().spanId : void 0,
                        links: Vr(this._links)
                    }
                }
                isRecording() {
                    return !this._endTime && !!this._sampled
                }
                addEvent(e, t, n) {
                    l && D.log("[Tracing] Adding an event to span:", e);
                    const r = Zs(t) ? t : n || _e(),
                        o = Zs(t) ? {} : t || {},
                        s = {
                            name: e,
                            time: Jr(r),
                            attributes: o
                        };
                    return this._events.push(s), this
                }
                isStandaloneSpan() {
                    return !!this._isStandaloneSpan
                }
                _onSpanEnded() {
                    const e = Ve();
                    e && e.emit("spanEnd", this);
                    if (!(this._isStandaloneSpan || this === no(this))) return;
                    if (this._isStandaloneSpan) return void(this._sampled ? function(e) {
                        const t = Ve();
                        if (!t) return;
                        const n = e[1];
                        if (!n || 0 === n.length) return void t.recordDroppedEvent("before_send", "span");
                        t.sendEnvelope(e)
                    }(function(e, t) {
                        const n = lo(e[0]),
                            r = t ? .getDsn(),
                            o = t ? .getOptions().tunnel,
                            s = {
                                sent_at: (new Date).toISOString(),
                                ... function(e) {
                                    return !!e.trace_id && !!e.public_key
                                }(n) && {
                                    trace: n
                                },
                                ...!!o && r && {
                                    dsn: xr(r)
                                }
                            },
                            {
                                beforeSendSpan: i,
                                ignoreSpans: a
                            } = t ? .getOptions() || {},
                            c = a ? .length ? e.filter((e => !Js(Kr(e), a))) : e,
                            u = e.length - c.length;
                        u && t ? .recordDroppedEvent("before_send", "span", u);
                        const l = i ? e => {
                                const t = Kr(e);
                                return i(t) || (oo(), t)
                            } : Kr,
                            d = [];
                        for (const e of c) {
                            const t = l(e);
                            t && d.push(is(t))
                        }
                        return Qo(s, d)
                    }([this], e)) : (l && D.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span")));
                    const t = this._convertSpanToTransaction();
                    if (t) {
                        (Dr(this).scope || Ue()).captureEvent(t)
                    }
                }
                _convertSpanToTransaction() {
                    if (!Qs(Kr(this))) return;
                    this._name || (l && D.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
                    const {
                        scope: e,
                        isolationScope: t
                    } = Dr(this), n = e ? .getScopeData().sdkProcessingMetadata ? .normalizedRequest;
                    if (!0 !== this._sampled) return;
                    const r = to(this).filter((e => e !== this && ! function(e) {
                            return e instanceof Xs && e.isStandaloneSpan()
                        }(e))).map((e => Kr(e))).filter(Qs),
                        o = this._attributes[or];
                    delete this._attributes[pr], r.forEach((e => {
                        delete e.data[pr]
                    }));
                    const s = {
                            contexts: {
                                trace: qr(this)
                            },
                            spans: r.length > 1e3 ? r.sort(((e, t) => e.start_timestamp - t.start_timestamp)).slice(0, 1e3) : r,
                            start_timestamp: this._startTime,
                            timestamp: this._endTime,
                            transaction: this._name,
                            type: "transaction",
                            sdkProcessingMetadata: {
                                capturedSpanScope: e,
                                capturedSpanIsolationScope: t,
                                dynamicSamplingContext: lo(this)
                            },
                            request: n,
                            ...o && {
                                transaction_info: {
                                    source: o
                                }
                            }
                        },
                        i = Ys(this._events);
                    return i && Object.keys(i).length && (l && D.log("[Measurements] Adding measurements to transaction event", JSON.stringify(i, void 0, 2)), s.measurements = i), s
                }
            }

            function Zs(e) {
                return e && "number" == typeof e || e instanceof Date || Array.isArray(e)
            }

            function Qs(e) {
                return !!(e.start_timestamp && e.timestamp && e.span_id && e.trace_id)
            }
            const ei = "__SENTRY_SUPPRESS_TRACING__";

            function ti(e, t) {
                const n = li();
                if (n.startSpan) return n.startSpan(e, t);
                const r = ui(e),
                    {
                        forceTransaction: o,
                        parentSpan: s,
                        scope: i
                    } = e,
                    a = i ? .clone();
                return We(a, (() => fi(s)((() => {
                    const n = Ue(),
                        i = pi(n, s),
                        a = e.onlyIfParent && !i ? new Hs : ci({
                            parentSpan: i,
                            spanArguments: r,
                            forceTransaction: o,
                            scope: n
                        });
                    return Ce(n, a), Ws((() => t(a)), (() => {
                        const {
                            status: e
                        } = Kr(a);
                        !a.isRecording() || e && "ok" !== e || a.setStatus({
                            code: 2,
                            message: "internal_error"
                        })
                    }), (() => {
                        a.end()
                    }))
                }))))
            }

            function ni(e, t) {
                const n = li();
                if (n.startSpanManual) return n.startSpanManual(e, t);
                const r = ui(e),
                    {
                        forceTransaction: o,
                        parentSpan: s,
                        scope: i
                    } = e,
                    a = i ? .clone();
                return We(a, (() => fi(s)((() => {
                    const n = Ue(),
                        i = pi(n, s),
                        a = e.onlyIfParent && !i ? new Hs : ci({
                            parentSpan: i,
                            spanArguments: r,
                            forceTransaction: o,
                            scope: n
                        });
                    return Ce(n, a), Ws((() => t(a, (() => a.end()))), (() => {
                        const {
                            status: e
                        } = Kr(a);
                        !a.isRecording() || e && "ok" !== e || a.setStatus({
                            code: 2,
                            message: "internal_error"
                        })
                    }))
                }))))
            }

            function ri(e) {
                const t = li();
                if (t.startInactiveSpan) return t.startInactiveSpan(e);
                const n = ui(e),
                    {
                        forceTransaction: r,
                        parentSpan: o
                    } = e;
                return (e.scope ? t => We(e.scope, t) : void 0 !== o ? e => si(o, e) : e => e())((() => {
                    const t = Ue(),
                        s = pi(t, o);
                    return e.onlyIfParent && !s ? new Hs : ci({
                        parentSpan: s,
                        spanArguments: n,
                        forceTransaction: r,
                        scope: t
                    })
                }))
            }
            const oi = (e, t) => {
                const n = je(a());
                if (n.continueTrace) return n.continueTrace(e, t);
                const {
                    sentryTrace: r,
                    baggage: o
                } = e, s = Ve(), i = vr(o);
                return s && ! function(e, t) {
                    const n = Cr(e);
                    return t && n && t !== n ? (D.log(`Won't continue trace because org IDs don't match (incoming baggage: ${t}, SDK options: ${n})`), !1) : !e.getOptions().strictTraceContinuation || !(t && !n || !t && n) || (D.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${t}, Sentry client: ${n})`), !1)
                }(s, i ? .org_id) ? ai(t) : We((e => {
                    const n = jr(r, o);
                    return e.setPropagationContext(n), Ce(e, void 0), t()
                }))
            };

            function si(e, t) {
                const n = li();
                return n.withActiveSpan ? n.withActiveSpan(e, t) : We((n => (Ce(n, e || void 0), t(n))))
            }

            function ii(e) {
                const t = li();
                return t.suppressTracing ? t.suppressTracing(e) : We((t => {
                    t.setSDKProcessingMetadata({
                        [ei]: !0
                    });
                    const n = e();
                    return t.setSDKProcessingMetadata({
                        [ei]: void 0
                    }), n
                }))
            }

            function ai(e) {
                const t = li();
                return t.startNewTrace ? t.startNewTrace(e) : We((t => (t.setPropagationContext({
                    traceId: xe(),
                    sampleRand: V()
                }), l && D.log(`Starting a new trace with id ${t.getPropagationContext().traceId}`), si(null, e))))
            }

            function ci({
                parentSpan: e,
                spanArguments: t,
                forceTransaction: n,
                scope: r
            }) {
                if (!Rr()) {
                    const r = new Hs;
                    if (n || !e) {
                        ao(r, {
                            sampled: "false",
                            sample_rate: "0",
                            transaction: t.name,
                            ...lo(r)
                        })
                    }
                    return r
                }
                const o = ze();
                let s;
                if (e && !n) s = function(e, t, n) {
                    const {
                        spanId: r,
                        traceId: o
                    } = e.spanContext(), s = !t.getScopeData().sdkProcessingMetadata[ei] && Yr(e), i = s ? new Xs({ ...n,
                        parentSpanId: r,
                        traceId: o,
                        sampled: s
                    }) : new Hs({
                        traceId: o
                    });
                    eo(e, i);
                    const a = Ve();
                    a && (a.emit("spanStart", i), n.endTimestamp && a.emit("spanEnd", i));
                    return i
                }(e, r, t), eo(e, s);
                else if (e) {
                    const n = lo(e),
                        {
                            traceId: o,
                            spanId: i
                        } = e.spanContext(),
                        a = Yr(e);
                    s = di({
                        traceId: o,
                        parentSpanId: i,
                        ...t
                    }, r, a), ao(s, n)
                } else {
                    const {
                        traceId: e,
                        dsc: n,
                        parentSpanId: i,
                        sampled: a
                    } = { ...o.getPropagationContext(),
                        ...r.getPropagationContext()
                    };
                    s = di({
                        traceId: e,
                        parentSpanId: i,
                        ...t
                    }, r, a), n && ao(s, n)
                }
                return function(e) {
                    if (!l) return;
                    const {
                        description: t = "< unknown name >",
                        op: n = "< unknown op >",
                        parent_span_id: r
                    } = Kr(e), {
                        spanId: o
                    } = e.spanContext(), s = Yr(e), i = no(e), a = i === e, c = `[Tracing] Starting ${s?"sampled":"unsampled"} ${a?"root ":""}span`, u = [`op: ${n}`, `name: ${t}`, `ID: ${o}`];
                    if (r && u.push(`parent ID: ${r}`), !a) {
                        const {
                            op: e,
                            description: t
                        } = Kr(i);
                        u.push(`root ID: ${i.spanContext().spanId}`), e && u.push(`root op: ${e}`), t && u.push(`root description: ${t}`)
                    }
                    D.log(`${c}\n  ${u.join("\n  ")}`)
                }(s), Nr(s, r, o), s
            }

            function ui(e) {
                const t = {
                    isStandalone: (e.experimental || {}).standalone,
                    ...e
                };
                if (e.startTime) {
                    const n = { ...t
                    };
                    return n.startTimestamp = Jr(e.startTime), delete n.startTime, n
                }
                return t
            }

            function li() {
                return je(a())
            }

            function di(e, t, n) {
                const r = Ve(),
                    o = r ? .getOptions() || {},
                    {
                        name: s = ""
                    } = e,
                    i = {
                        spanAttributes: { ...e.attributes
                        },
                        spanName: s,
                        parentSampled: n
                    };
                r ? .emit("beforeSampling", i, {
                    decision: !1
                });
                const a = i.parentSampled ? ? n,
                    c = i.spanAttributes,
                    u = t.getPropagationContext(),
                    [d, p, f] = t.getScopeData().sdkProcessingMetadata[ei] ? [!1] : function(e, t, n) {
                        if (!Rr(e)) return [!1];
                        let r, o;
                        "function" == typeof e.tracesSampler ? (o = e.tracesSampler({ ...t,
                            inheritOrSampleWith: e => "number" == typeof t.parentSampleRate ? t.parentSampleRate : "boolean" == typeof t.parentSampled ? Number(t.parentSampled) : e
                        }), r = !0) : void 0 !== t.parentSampled ? o = t.parentSampled : void 0 !== e.tracesSampleRate && (o = e.tracesSampleRate, r = !0);
                        const s = $r(o);
                        if (void 0 === s) return l && D.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`), [!1];
                        if (!s) return l && D.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), [!1, s, r];
                        const i = n < s;
                        return i || l && D.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(o)})`), [i, s, r]
                    }(o, {
                        name: s,
                        parentSampled: a,
                        attributes: c,
                        parentSampleRate: $r(u.dsc ? .sample_rate)
                    }, u.sampleRand),
                    h = new Xs({ ...e,
                        attributes: {
                            [or]: "custom",
                            [sr]: void 0 !== p && f ? p : void 0,
                            ...c
                        },
                        sampled: d
                    });
                return !d && r && (l && D.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), r.recordDroppedEvent("sample_rate", "transaction")), r && r.emit("spanStart", h), h
            }

            function pi(e, t) {
                if (t) return t;
                if (null === t) return;
                const n = Ie(e);
                if (!n) return;
                const r = Ve();
                return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? no(n) : n
            }

            function fi(e) {
                return void 0 !== e ? t => si(e, t) : e => e()
            }
            const hi = ["trace", "debug", "info", "warn", "error", "fatal"];

            function mi(e = {}) {
                const t = new Set(e.levels ? ? hi),
                    n = e.client;
                return {
                    log(e) {
                        const {
                            type: r,
                            level: o,
                            message: s,
                            args: i,
                            tag: a,
                            date: c,
                            ...u
                        } = e, l = n || Ve();
                        if (!l) return;
                        const d = function(e, t) {
                            if ("verbose" === e) return "debug";
                            if ("silent" === e) return "trace";
                            if (e) {
                                const t = gi[e];
                                if (t) return t
                            }
                            if ("number" == typeof t) {
                                const e = yi[t];
                                if (e) return e
                            }
                            return "info"
                        }(r, o);
                        if (!t.has(d)) return;
                        const {
                            normalizeDepth: p = 3,
                            normalizeMaxBreadth: f = 1e3
                        } = l.getOptions(), h = {};
                        for (const [e, t] of Object.entries(u)) h[e] = tr(t, p, f);
                        h["sentry.origin"] = "auto.log.consola", a && (h["consola.tag"] = a), r && (h["consola.type"] = r), null != o && "number" == typeof o && (h["consola.level"] = o);
                        const m = function(e, t, n) {
                            const {
                                message: r,
                                attributes: o,
                                messageTemplate: s,
                                messageParameters: i
                            } = e, a = {};
                            if (s && i) {
                                const e = Us(s, i);
                                for (const [r, o] of Object.entries(e)) a[r] = r.startsWith("sentry.message.parameter.") ? tr(o, t, n) : o
                            } else i && i.length > 0 && i.forEach(((e, r) => {
                                a[`sentry.message.parameter.${r}`] = tr(e, t, n)
                            }));
                            return {
                                message: r,
                                attributes: { ...tr(o, t, n),
                                    ...a
                                }
                            }
                        }(function(e, t, n) {
                            if (!e ? .length) return {
                                message: ""
                            };
                            const r = js(e, t, n),
                                o = e[0];
                            if (v(o)) {
                                const t = "string" == typeof e[1] ? 2 : 1;
                                return {
                                    message: r,
                                    attributes: o,
                                    messageParameters: e.slice(t)
                                }
                            } {
                                const t = e.slice(1),
                                    n = t.length > 0 && "string" == typeof o && !Bs(o);
                                return {
                                    message: r,
                                    messageTemplate: n ? o : void 0,
                                    messageParameters: n ? t : void 0
                                }
                            }
                        }(i, p, f), p, f);
                        m ? .attributes && Object.assign(h, m.attributes), Ns({
                            level: d,
                            message: m ? .message || s || i && js(i, p, f) || "",
                            attributes: h
                        })
                    }
                }
            }
            const gi = {
                    silent: "trace",
                    fatal: "fatal",
                    error: "error",
                    warn: "warn",
                    log: "info",
                    info: "info",
                    success: "info",
                    fail: "error",
                    ready: "info",
                    start: "info",
                    box: "info",
                    debug: "debug",
                    trace: "trace",
                    verbose: "debug",
                    critical: "fatal",
                    notice: "info"
                },
                yi = {
                    0: "fatal",
                    1: "warn",
                    2: "info",
                    3: "info",
                    4: "debug",
                    5: "trace"
                };
            const _i = "gen_ai.prompt",
                vi = "gen_ai.system",
                bi = "gen_ai.request.model",
                Si = "gen_ai.request.stream",
                ki = "gen_ai.request.temperature",
                wi = "gen_ai.request.max_tokens",
                xi = "gen_ai.request.frequency_penalty",
                Ei = "gen_ai.request.presence_penalty",
                Ti = "gen_ai.request.top_p",
                Ci = "gen_ai.request.top_k",
                Ii = "gen_ai.response.finish_reasons",
                Ri = "gen_ai.response.model",
                Ai = "gen_ai.response.id",
                Mi = "gen_ai.usage.input_tokens",
                Oi = "gen_ai.usage.output_tokens",
                Pi = "gen_ai.usage.total_tokens",
                Li = "gen_ai.operation.name",
                Ni = "sentry.sdk_meta.gen_ai.input.messages.original_length",
                Di = "gen_ai.input.messages",
                $i = "gen_ai.system_instructions",
                Fi = "gen_ai.response.text",
                ji = "gen_ai.request.available_tools",
                Bi = "gen_ai.response.streaming",
                Ui = "gen_ai.response.tool_calls",
                zi = "gen_ai.agent.name",
                qi = "gen_ai.pipeline.name",
                Wi = "gen_ai.conversation.id",
                Hi = "gen_ai.invoke_agent",
                Vi = "gen_ai.embeddings.input",
                Ji = "gen_ai.tool.name",
                Gi = "gen_ai.tool.output",
                Ki = "openai.response.id",
                Yi = "openai.response.model",
                Xi = "openai.response.timestamp",
                Zi = "openai.usage.completion_tokens",
                Qi = "openai.usage.prompt_tokens",
                ea = "anthropic.response.timestamp";

            function ta(e) {
                return !(!e || "object" != typeof e) && (function(e) {
                    return "type" in e && "string" == typeof e.type && "source" in e && ta(e.source)
                }(e) || ra(e) || function(e) {
                    return "image_url" in e && ("string" == typeof e.image_url ? e.image_url.startsWith("data:") : na(e))
                }(e) || oa(e) || sa(e) || function(e) {
                    return "media_type" in e && "string" == typeof e.media_type && "data" in e
                }(e) || function(e) {
                    return "type" in e && "file" === e.type && "mediaType" in e && "string" == typeof e.mediaType && "data" in e && "string" == typeof e.data && !e.data.startsWith("http://") && !e.data.startsWith("https://")
                }(e) || function(e) {
                    return "type" in e && "image" === e.type && "image" in e && "string" == typeof e.image && !e.image.startsWith("http://") && !e.image.startsWith("https://")
                }(e) || function(e) {
                    return "type" in e && ("blob" === e.type || "base64" === e.type)
                }(e) || function(e) {
                    return "b64_json" in e
                }(e) || function(e) {
                    return "type" in e && "result" in e && "image_generation" === e.type
                }(e) || function(e) {
                    return "uri" in e && "string" == typeof e.uri && e.uri.startsWith("data:")
                }(e))
            }

            function na(e) {
                return "image_url" in e && !!e.image_url && "object" == typeof e.image_url && "url" in e.image_url && "string" == typeof e.image_url.url && e.image_url.url.startsWith("data:")
            }

            function ra(e) {
                return "inlineData" in e && !!e.inlineData && "object" == typeof e.inlineData && "data" in e.inlineData && "string" == typeof e.inlineData.data
            }

            function oa(e) {
                return "type" in e && "input_audio" === e.type && "input_audio" in e && !!e.input_audio && "object" == typeof e.input_audio && "data" in e.input_audio && "string" == typeof e.input_audio.data
            }

            function sa(e) {
                return "type" in e && "file" === e.type && "file" in e && !!e.file && "object" == typeof e.file && "file_data" in e.file && "string" == typeof e.file.file_data
            }
            const ia = "[Blob substitute]",
                aa = ["image_url", "data", "content", "b64_json", "result", "uri", "image"];

            function ca(e) {
                const t = { ...e
                };
                ta(t.source) && (t.source = ca(t.source)), ra(e) && (t.inlineData = { ...e.inlineData,
                    data: ia
                }), na(e) && (t.image_url = { ...e.image_url,
                    url: ia
                }), oa(e) && (t.input_audio = { ...e.input_audio,
                    data: ia
                }), sa(e) && (t.file = { ...e.file,
                    file_data: ia
                });
                for (const e of aa) "string" == typeof t[e] && (t[e] = ia);
                return t
            }
            const ua = e => (new TextEncoder).encode(e).length,
                la = e => ua(JSON.stringify(e));

            function da(e, t) {
                if (ua(e) <= t) return e;
                let n = 0,
                    r = e.length,
                    o = "";
                for (; n <= r;) {
                    const s = Math.floor((n + r) / 2),
                        i = e.slice(0, s);
                    ua(i) <= t ? (o = i, n = s + 1) : r = s - 1
                }
                return o
            }

            function pa(e) {
                return "string" == typeof e ? e : "text" in e && "string" == typeof e.text ? e.text : ""
            }

            function fa(e, t) {
                return "string" == typeof e ? t : { ...e,
                    text: t
                }
            }

            function ha(e) {
                return null !== e && "object" == typeof e && "content" in e && Array.isArray(e.content)
            }

            function ma(e) {
                return null !== e && "object" == typeof e && "parts" in e && Array.isArray(e.parts) && e.parts.length > 0
            }

            function ga(e, t) {
                const {
                    key: n,
                    items: r
                } = function(e) {
                    return "parts" in e && Array.isArray(e.parts) ? {
                        key: "parts",
                        items: e.parts
                    } : "content" in e && Array.isArray(e.content) ? {
                        key: "content",
                        items: e.content
                    } : {
                        key: null,
                        items: []
                    }
                }(e);
                if (null === n || 0 === r.length) return [];
                const o = r.map((e => fa(e, "")));
                let s = t - la({ ...e,
                    [n]: o
                });
                if (s <= 0) return [];
                const i = [];
                for (const e of r) {
                    const t = pa(e),
                        n = ua(t);
                    if (!(n <= s)) {
                        if (0 === i.length) {
                            const n = da(t, s);
                            n && i.push(fa(e, n));
                            break
                        }
                        break
                    }
                    i.push(e), s -= n
                }
                return i.length <= 0 ? [] : [{ ...e,
                    [n]: i
                }]
            }

            function ya(e, t) {
                if (!e) return [];
                if ("string" == typeof e) {
                    const n = da(e, t);
                    return n ? [n] : []
                }
                return "object" != typeof e ? [] : function(e) {
                    return null !== e && "object" == typeof e && "content" in e && "string" == typeof e.content
                }(e) ? function(e, t) {
                    const n = { ...e,
                            content: ""
                        },
                        r = t - la(n);
                    if (r <= 0) return [];
                    const o = da(e.content, r);
                    return [{ ...e,
                        content: o
                    }]
                }(e, t) : ha(e) || ma(e) ? ga(e, t) : []
            }

            function _a(e) {
                return e.map((e => {
                    let t;
                    return e && "object" == typeof e && (ha(e) ? t = { ...e,
                        content: _a(e.content)
                    } : "content" in e && ta(e.content) && (t = { ...e,
                        content: ca(e.content)
                    }), ma(e) && (t = { ...t ? ? e,
                        parts : _a(e.parts)
                    }), ta(t) ? t = ca(t) : ta(e) && (t = ca(e))), t ? ? e
                }))
            }

            function va(e, t) {
                if (!Array.isArray(e) || 0 === e.length) return e;
                const n = t - 2,
                    r = _a([e[e.length - 1]]),
                    o = r[0];
                return la(o) <= n ? r : ya(o, n)
            }

            function ba(e) {
                return va(e, 2e4)
            }

            function Sa(e) {
                const t = Boolean(Ve() ? .getOptions().sendDefaultPii);
                return { ...e,
                    recordInputs: e ? .recordInputs ? ? t,
                    recordOutputs: e ? .recordOutputs ? ? t
                }
            }

            function ka(e, t) {
                return e ? `${e}.${t}` : t
            }

            function wa(e, t, n, r, o) {
                if (void 0 !== t && e.setAttributes({
                        [Mi]: t
                    }), void 0 !== n && e.setAttributes({
                        [Oi]: n
                    }), void 0 !== t || void 0 !== n || void 0 !== r || void 0 !== o) {
                    const s = (t ? ? 0) + (n ? ? 0) + (r ? ? 0) + (o ? ? 0);
                    e.setAttributes({
                        [Pi]: s
                    })
                }
            }

            function xa(e) {
                if ("string" == typeof e) return da(e, 2e4);
                if (Array.isArray(e)) {
                    const t = ba(e);
                    return JSON.stringify(t)
                }
                return JSON.stringify(e)
            }

            function Ea(e) {
                if (!Array.isArray(e)) return {
                    systemInstructions: void 0,
                    filteredMessages: e
                };
                const t = e.findIndex((e => e && "object" == typeof e && "role" in e && "system" === e.role));
                if (-1 === t) return {
                    systemInstructions: void 0,
                    filteredMessages: e
                };
                const n = e[t],
                    r = "string" == typeof n.content ? n.content : void 0 !== n.content ? JSON.stringify(n.content) : void 0;
                if (!r) return {
                    systemInstructions: void 0,
                    filteredMessages: e
                };
                return {
                    systemInstructions: JSON.stringify([{
                        type: "text",
                        content: r
                    }]),
                    filteredMessages: [...e.slice(0, t), ...e.slice(t + 1)]
                }
            }

            function Ta(e, t, n) {
                return S(e) ? new Proxy(e, {
                    get(e, r) {
                        const o = r in Promise.prototype || r === Symbol.toStringTag ? t : e,
                            s = Reflect.get(o, r);
                        return "withResponse" === r && "function" == typeof s ? function() {
                            return async function(e, t, n) {
                                const r = e.catch((e => {
                                        throw bo(e, {
                                            mechanism: {
                                                handled: !1,
                                                type: n
                                            }
                                        }), e
                                    })),
                                    o = await t,
                                    s = await r;
                                return s && "object" == typeof s && "data" in s ? { ...s,
                                    data: o
                                } : o
                            }(s.call(e), t, n)
                        } : "function" == typeof s ? s.bind(o) : s
                    }
                }) : t
            }
            const Ca = "auto.ai.langchain",
                Ia = {
                    human: "user",
                    ai: "assistant",
                    assistant: "assistant",
                    system: "system",
                    function: "function",
                    tool: "tool"
                },
                Ra = (e, t, n) => {
                    null != n && (e[t] = n)
                },
                Aa = (e, t, n) => {
                    const r = Number(n);
                    Number.isNaN(r) || (e[t] = r)
                };

            function Ma(e) {
                if ("string" == typeof e) return e;
                try {
                    return JSON.stringify(e)
                } catch {
                    return String(e)
                }
            }

            function Oa(e) {
                if (Array.isArray(e)) try {
                    const t = e.map((e => e && "object" == typeof e && ta(e) ? ca(e) : e));
                    return JSON.stringify(t)
                } catch {
                    return String(e)
                }
                return Ma(e)
            }

            function Pa(e) {
                const t = e.toLowerCase();
                return Ia[t] ? ? t
            }

            function La(e) {
                return e.includes("System") ? "system" : e.includes("Human") ? "user" : e.includes("AI") || e.includes("Assistant") ? "assistant" : e.includes("Function") ? "function" : e.includes("Tool") ? "tool" : "user"
            }

            function Na(e) {
                if (e && !Array.isArray(e)) return e.invocation_params
            }

            function Da(e) {
                return e.map((e => {
                    const t = e._getType;
                    if ("function" == typeof t) {
                        return {
                            role: Pa(t.call(e)),
                            content: Oa(e.content)
                        }
                    }
                    if (1 === e.lc && e.kwargs) {
                        const t = e.id,
                            n = Array.isArray(t) && t.length > 0 ? t[t.length - 1] : "";
                        return {
                            role: Pa("string" == typeof n ? La(n) : "user"),
                            content: Oa(e.kwargs ? .content)
                        }
                    }
                    if (e.type) {
                        return {
                            role: Pa(String(e.type).toLowerCase()),
                            content: Oa(e.content)
                        }
                    }
                    if (e.role) return {
                        role: Pa(String(e.role)),
                        content: Oa(e.content)
                    };
                    const n = e.constructor ? .name;
                    return n && "Object" !== n ? {
                        role: Pa(La(n)),
                        content: Oa(e.content)
                    } : {
                        role: "user",
                        content: Oa(e.content)
                    }
                }))
            }

            function $a(e, t, n) {
                const r = {},
                    o = "kwargs" in e ? e.kwargs : void 0;
                Aa(r, ki, t ? .temperature ? ? n ? .ls_temperature ? ? o ? .temperature);
                Aa(r, wi, t ? .max_tokens ? ? n ? .ls_max_tokens ? ? o ? .max_tokens);
                Aa(r, Ti, t ? .top_p ? ? o ? .top_p);
                const s = t ? .frequency_penalty;
                Aa(r, xi, s);
                const i = t ? .presence_penalty;
                return Aa(r, Ei, i), t && "stream" in t && Ra(r, Si, Boolean(t.stream)), r
            }

            function Fa(e, t, n, r, o) {
                return {
                    [vi]: Ma(e ? ? "langchain"),
                    [Li]: "chat",
                    [bi]: Ma(t),
                    [cr]: Ca,
                    ...$a(n, r, o)
                }
            }

            function ja(e, t) {
                if (!e) return;
                const n = {};
                if (Array.isArray(e.generations)) {
                    const r = e.generations.flat().map((e => e.generationInfo ? .finish_reason ? e.generationInfo.finish_reason : e.generation_info ? .finish_reason ? e.generation_info.finish_reason : null)).filter((e => "string" == typeof e));
                    if (r.length > 0 && Ra(n, Ii, Ma(r)), function(e, t) {
                            const n = [],
                                r = e.flat();
                            for (const e of r) {
                                const t = e.message ? .content;
                                if (Array.isArray(t))
                                    for (const e of t) {
                                        const t = e;
                                        "tool_use" === t.type && n.push(t)
                                    }
                            }
                            n.length > 0 && Ra(t, Ui, Ma(n))
                        }(e.generations, n), t) {
                        const t = e.generations.flat().map((e => e.text ? ? e.message ? .content)).filter((e => "string" == typeof e));
                        t.length > 0 && Ra(n, Fi, Ma(t))
                    }
                }! function(e, t) {
                    if (!e) return;
                    const n = e.tokenUsage,
                        r = e.usage;
                    if (n) Aa(t, Mi, n.promptTokens), Aa(t, Oi, n.completionTokens), Aa(t, Pi, n.totalTokens);
                    else if (r) {
                        Aa(t, Mi, r.input_tokens), Aa(t, Oi, r.output_tokens);
                        const e = Number(r.input_tokens),
                            n = Number(r.output_tokens),
                            o = (Number.isNaN(e) ? 0 : e) + (Number.isNaN(n) ? 0 : n);
                        o > 0 && Aa(t, Pi, o), void 0 !== r.cache_creation_input_tokens && Aa(t, "gen_ai.usage.cache_creation_input_tokens", r.cache_creation_input_tokens), void 0 !== r.cache_read_input_tokens && Aa(t, "gen_ai.usage.cache_read_input_tokens", r.cache_read_input_tokens)
                    }
                }(e.llmOutput, n);
                const r = e.llmOutput,
                    o = e.generations ? .[0] ? .[0],
                    s = o ? .message,
                    i = r ? .model_name ? ? r ? .model ? ? s ? .response_metadata ? .model_name;
                i && Ra(n, Ri, i);
                const a = r ? .id ? ? s ? .id;
                a && Ra(n, Ai, a);
                const c = r ? .stop_reason ? ? s ? .response_metadata ? .finish_reason;
                return c && Ra(n, "gen_ai.response.stop_reason", Ma(c)), n
            }

            function Ba(e = {}) {
                const {
                    recordInputs: t,
                    recordOutputs: n
                } = Sa(e), r = new Map, o = e => {
                    const t = r.get(e);
                    t ? .isRecording() && (t.end(), r.delete(e))
                }, s = {
                    lc_serializable: !1,
                    lc_namespace: ["langchain_core", "callbacks", "sentry"],
                    lc_secrets: void 0,
                    lc_attributes: void 0,
                    lc_aliases: void 0,
                    lc_serializable_keys: void 0,
                    lc_id: ["langchain_core", "callbacks", "sentry"],
                    lc_kwargs: {},
                    name: "SentryCallbackHandler",
                    ignoreLLM: !1,
                    ignoreChain: !1,
                    ignoreAgent: !1,
                    ignoreRetriever: !1,
                    ignoreCustomEvent: !1,
                    raiseError: !1,
                    awaitHandlers: !0,
                    handleLLMStart(e, n, o, s, i, a, c, u) {
                        const l = Na(a),
                            d = function(e, t, n, r, o) {
                                const s = o ? .ls_provider,
                                    i = Fa(s, r ? .model ? ? o ? .ls_model_name ? ? "unknown", e, r, o);
                                if (n && Array.isArray(t) && t.length > 0) {
                                    Ra(i, Ni, t.length);
                                    const e = t.map((e => ({
                                        role: "user",
                                        content: e
                                    })));
                                    Ra(i, Di, Ma(e))
                                }
                                return i
                            }(e, n, t, l, c),
                            p = d[bi];
                        ni({
                            name: `${d[Li]} ${p}`,
                            op: "gen_ai.chat",
                            attributes: { ...d,
                                [ar]: "gen_ai.chat"
                            }
                        }, (e => (r.set(o, e), e)))
                    },
                    handleChatModelStart(e, n, o, s, i, a, c, u) {
                        const l = Na(a),
                            d = function(e, t, n, r, o) {
                                const s = Fa(o ? .ls_provider ? ? e.id ? .[2], r ? .model ? ? o ? .ls_model_name ? ? "unknown", e, r, o);
                                if (n && Array.isArray(t) && t.length > 0) {
                                    const e = Da(t.flat()),
                                        {
                                            systemInstructions: n,
                                            filteredMessages: r
                                        } = Ea(e);
                                    n && Ra(s, $i, n);
                                    const o = Array.isArray(r) ? r.length : 0;
                                    Ra(s, Ni, o);
                                    const i = ba(r);
                                    Ra(s, Di, Ma(i))
                                }
                                return s
                            }(e, n, t, l, c),
                            p = d[bi];
                        ni({
                            name: `${d[Li]} ${p}`,
                            op: "gen_ai.chat",
                            attributes: { ...d,
                                [ar]: "gen_ai.chat"
                            }
                        }, (e => (r.set(o, e), e)))
                    },
                    handleLLMEnd(e, t, s, i, a) {
                        const c = r.get(t);
                        if (c ? .isRecording()) {
                            const r = ja(e, n);
                            r && c.setAttributes(r), o(t)
                        }
                    },
                    handleLLMError(e, t) {
                        const n = r.get(t);
                        n ? .isRecording() && (n.setStatus({
                            code: 2,
                            message: "internal_error"
                        }), o(t)), bo(e, {
                            mechanism: {
                                handled: !1,
                                type: `${Ca}.llm_error_handler`
                            }
                        })
                    },
                    handleChainStart(e, n, o, s, i, a, c, u) {
                        const l = u || e.name || "unknown_chain",
                            d = {
                                [cr]: "auto.ai.langchain",
                                "langchain.chain.name": l
                            };
                        t && (d["langchain.chain.inputs"] = JSON.stringify(n)), ni({
                            name: `chain ${l}`,
                            op: "gen_ai.invoke_agent",
                            attributes: { ...d,
                                [ar]: "gen_ai.invoke_agent"
                            }
                        }, (e => (r.set(o, e), e)))
                    },
                    handleChainEnd(e, t) {
                        const s = r.get(t);
                        s ? .isRecording() && (n && s.setAttributes({
                            "langchain.chain.outputs": JSON.stringify(e)
                        }), o(t))
                    },
                    handleChainError(e, t) {
                        const n = r.get(t);
                        n ? .isRecording() && (n.setStatus({
                            code: 2,
                            message: "internal_error"
                        }), o(t)), bo(e, {
                            mechanism: {
                                handled: !1,
                                type: `${Ca}.chain_error_handler`
                            }
                        })
                    },
                    handleToolStart(e, n, o, s) {
                        const i = e.name || "unknown_tool",
                            a = {
                                [cr]: Ca,
                                [Ji]: i
                            };
                        t && (a["gen_ai.tool.input"] = n), ni({
                            name: `execute_tool ${i}`,
                            op: "gen_ai.execute_tool",
                            attributes: { ...a,
                                [ar]: "gen_ai.execute_tool"
                            }
                        }, (e => (r.set(o, e), e)))
                    },
                    handleToolEnd(e, t) {
                        const s = r.get(t);
                        s ? .isRecording() && (n && s.setAttributes({
                            [Gi]: JSON.stringify(e)
                        }), o(t))
                    },
                    handleToolError(e, t) {
                        const n = r.get(t);
                        n ? .isRecording() && (n.setStatus({
                            code: 2,
                            message: "internal_error"
                        }), o(t)), bo(e, {
                            mechanism: {
                                handled: !1,
                                type: `${Ca}.tool_error_handler`
                            }
                        })
                    },
                    copy: () => s,
                    toJSON: () => ({
                        lc: 1,
                        type: "not_implemented",
                        id: s.lc_id
                    }),
                    toJSONNotImplemented: () => ({
                        lc: 1,
                        type: "not_implemented",
                        id: s.lc_id
                    })
                };
                return s
            }

            function Ua(e) {
                return "object" == typeof e && "function" == typeof e.unref && e.unref(), e
            }
            const za = Symbol.for("SentryBufferFullError");

            function qa(e = 100) {
                const t = new Set;

                function n(e) {
                    t.delete(e)
                }
                return {
                    get $() {
                        return Array.from(t)
                    },
                    add: function(r) {
                        if (!(t.size < e)) return Vn(za);
                        const o = r();
                        return t.add(o), o.then((() => n(o)), (() => n(o))), o
                    },
                    drain: function(e) {
                        if (!t.size) return Hn(!0);
                        const n = Promise.allSettled(Array.from(t)).then((() => !0));
                        if (!e) return n;
                        const r = [n, new Promise((t => Ua(setTimeout((() => t(!1)), e))))];
                        return Promise.race(r)
                    }
                }
            }

            function Wa(e, t = J()) {
                const n = parseInt(`${e}`, 10);
                if (!isNaN(n)) return 1e3 * n;
                const r = Date.parse(`${e}`);
                return isNaN(r) ? 6e4 : r - t
            }

            function Ha(e, t, n = J()) {
                return function(e, t) {
                    return e[t] || e.all || 0
                }(e, t) > n
            }

            function Va(e, {
                statusCode: t,
                headers: n
            }, r = J()) {
                const o = { ...e
                    },
                    s = n ? .["x-sentry-rate-limits"],
                    i = n ? .["retry-after"];
                if (s)
                    for (const e of s.trim().split(",")) {
                        const [t, n, , , s] = e.split(":", 5), i = parseInt(t, 10), a = 1e3 * (isNaN(i) ? 60 : i);
                        if (n)
                            for (const e of n.split(";")) "metric_bucket" === e && s && !s.split(";").includes("custom") || (o[e] = r + a);
                        else o.all = r + a
                    } else i ? o.all = r + Wa(i, r) : 429 === t && (o.all = r + 6e4);
                return o
            }

            function Ja(e, t, n = qa(e.bufferSize || 64)) {
                let r = {};
                return {
                    send: function(o) {
                        const s = [];
                        if (ts(o, ((t, n) => {
                                const o = us(n);
                                Ha(r, o) ? e.recordDroppedEvent("ratelimit_backoff", o) : s.push(t)
                            })), 0 === s.length) return Promise.resolve({});
                        const i = Qo(o[0], s),
                            a = t => {
                                ns(i, ["client_report"]) ? l && D.warn(`Dropping client report. Will not send outcomes (reason: ${t}).`) : ts(i, ((n, r) => {
                                    e.recordDroppedEvent(t, us(r))
                                }))
                            };
                        return n.add((() => t({
                            body: os(i)
                        }).then((e => 413 === e.statusCode ? (l && D.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), a("send_error"), e) : (l && void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && D.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), r = Va(r, e), e)), (e => {
                            throw a("network_error"), l && D.error("Encountered error running transport request:", e), e
                        })))).then((e => e), (e => {
                            if (e === za) return l && D.error("Skipped sending event because buffer is full."), a("queue_overflow"), Promise.resolve({});
                            throw e
                        }))
                    },
                    flush: e => n.drain(e)
                }
            }
            const Ga = () => {
                let e;
                return {
                    name: "Dedupe",
                    processEvent(t) {
                        if (t.type) return t;
                        try {
                            if (function(e, t) {
                                    if (!t) return !1;
                                    if (function(e, t) {
                                            const n = e.message,
                                                r = t.message;
                                            if (!n && !r) return !1;
                                            if (n && !r || !n && r) return !1;
                                            if (n !== r) return !1;
                                            if (!Ya(e, t)) return !1;
                                            if (!Ka(e, t)) return !1;
                                            return !0
                                        }(e, t)) return !0;
                                    if (function(e, t) {
                                            const n = Xa(t),
                                                r = Xa(e);
                                            if (!n || !r) return !1;
                                            if (n.type !== r.type || n.value !== r.value) return !1;
                                            if (!Ya(e, t)) return !1;
                                            if (!Ka(e, t)) return !1;
                                            return !0
                                        }(e, t)) return !0;
                                    return !1
                                }(t, e)) return l && D.warn("Event dropped due to being a duplicate of previously captured event."), null
                        } catch {}
                        return e = t
                    }
                }
            };

            function Ka(e, t) {
                let n = te(e),
                    r = te(t);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (r.length !== n.length) return !1;
                for (let e = 0; e < r.length; e++) {
                    const t = r[e],
                        o = n[e];
                    if (t.filename !== o.filename || t.lineno !== o.lineno || t.colno !== o.colno || t.function !== o.function) return !1
                }
                return !0
            }

            function Ya(e, t) {
                let n = e.fingerprint,
                    r = t.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                try {
                    return !(n.join("") !== r.join(""))
                } catch {
                    return !1
                }
            }

            function Xa(e) {
                return e.exception ? .values ? .[0]
            }

            function Za(e) {
                const t = [];
                e.message && t.push(e.message);
                try {
                    const n = e.exception.values[e.exception.values.length - 1];
                    n ? .value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
                } catch {}
                return t
            }
            const Qa = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /^Java exception was raised during method invocation$/],
                ec = (e = {}) => {
                    let t;
                    return {
                        name: "EventFilters",
                        setup(n) {
                            const r = n.getOptions();
                            t = nc(e, r)
                        },
                        processEvent(n, r, o) {
                            if (!t) {
                                const n = o.getOptions();
                                t = nc(e, n)
                            }
                            return function(e, t) {
                                if (e.type) {
                                    if ("transaction" === e.type && function(e, t) {
                                            if (!t ? .length) return !1;
                                            const n = e.transaction;
                                            return !!n && ce(n, t)
                                        }(e, t.ignoreTransactions)) return l && D.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${pe(e)}`), !0
                                } else {
                                    if (function(e, t) {
                                            if (!t ? .length) return !1;
                                            return Za(e).some((e => ce(e, t)))
                                        }(e, t.ignoreErrors)) return l && D.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${pe(e)}`), !0;
                                    if (function(e) {
                                            if (!e.exception ? .values ? .length) return !1;
                                            return !e.message && !e.exception.values.some((e => e.stacktrace || e.type && "Error" !== e.type || e.value))
                                        }(e)) return l && D.warn(`Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${pe(e)}`), !0;
                                    if (function(e, t) {
                                            if (!t ? .length) return !1;
                                            const n = rc(e);
                                            return !!n && ce(n, t)
                                        }(e, t.denyUrls)) return l && D.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${pe(e)}.\nUrl: ${rc(e)}`), !0;
                                    if (! function(e, t) {
                                            if (!t ? .length) return !0;
                                            const n = rc(e);
                                            return !n || ce(n, t)
                                        }(e, t.allowUrls)) return l && D.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${pe(e)}.\nUrl: ${rc(e)}`), !0
                                }
                                return !1
                            }(n, t) ? null : n
                        }
                    }
                },
                tc = (e = {}) => ({ ...ec(e),
                    name: "InboundFilters"
                });

            function nc(e = {}, t = {}) {
                return {
                    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                    ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : Qa],
                    ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []]
                }
            }

            function rc(e) {
                try {
                    const t = [...e.exception ? .values ? ? []].reverse().find((e => void 0 === e.mechanism ? .parent_id && e.stacktrace ? .frames ? .length)),
                        n = t ? .stacktrace ? .frames;
                    return n ? function(e = []) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            const n = e[t];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(n) : null
                } catch {
                    return l && D.error(`Cannot extract url for event ${pe(e)}`), null
                }
            }
            const oc = (e = {}) => {
                const {
                    depth: t = 3,
                    captureErrorCause: n = !0
                } = e;
                return {
                    name: "ExtraErrorData",
                    processEvent(e, r, o) {
                        const {
                            maxValueLength: s
                        } = o.getOptions();
                        return function(e, t = {}, n, r, o) {
                            if (!t.originalException || !p(t.originalException)) return e;
                            const s = t.originalException.name || t.originalException.constructor.name,
                                i = sc(t.originalException, r, o);
                            if (i) {
                                const t = { ...e.contexts
                                    },
                                    r = tr(i, n);
                                return v(r) && (F(r, "__sentry_skip_normalization__", !0), t[s] = r), { ...e,
                                    contexts: t
                                }
                            }
                            return e
                        }(e, r, t, n, s)
                    }
                }
            };

            function sc(e, t, n) {
                try {
                    const r = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                        o = {};
                    for (const t of Object.keys(e)) {
                        if (-1 !== r.indexOf(t)) continue;
                        const s = e[t];
                        o[t] = p(s) || "string" == typeof s ? n ? oe(`${s}`, n) : `${s}` : s
                    }
                    if (t && void 0 !== e.cause)
                        if (p(e.cause)) {
                            const t = e.cause.name || e.cause.constructor.name;
                            o.cause = {
                                [t]: sc(e.cause, !1, n)
                            }
                        } else o.cause = e.cause;
                    if ("function" == typeof e.toJSON) {
                        const t = e.toJSON();
                        for (const e of Object.keys(t)) {
                            const n = t[e];
                            o[e] = p(n) ? n.toString() : n
                        }
                    }
                    return o
                } catch (e) {
                    l && D.error("Unable to extract extra data from the Error object:", e)
                }
                return null
            }
            const ic = "flag.evaluation.";

            function ac(e) {
                const t = Ue().getScopeData().contexts.flags,
                    n = t ? t.values : [];
                return n.length ? (void 0 === e.contexts && (e.contexts = {}), e.contexts.flags = {
                    values: [...n]
                }, e) : e
            }

            function cc(e, t, n = 100) {
                const r = Ue().getScopeData().contexts;
                r.flags || (r.flags = {
                    values: []
                });
                ! function(e, t, n, r) {
                    if ("boolean" != typeof n) return;
                    if (e.length > r) return void(l && D.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${r}`));
                    const o = e.findIndex((e => e.flag === t)); - 1 !== o && e.splice(o, 1);
                    e.length === r && e.shift();
                    e.push({
                        flag: t,
                        result: n
                    })
                }(r.flags.values, e, t, n)
            }

            function uc(e, t, n = 10) {
                if ("boolean" != typeof t) return;
                const r = ro();
                if (!r) return;
                const o = Kr(r).data;
                if (`${ic}${e}` in o) return void r.setAttribute(`${ic}${e}`, t);
                Object.keys(o).filter((e => e.startsWith(ic))).length < n && r.setAttribute(`${ic}${e}`, t)
            }
            const lc = () => ({
                name: "FeatureFlags",
                processEvent: (e, t, n) => ac(e),
                addFeatureFlag(e, t) {
                    cc(e, t), uc(e, t)
                }
            });
            let dc;
            const pc = new WeakMap,
                fc = () => ({
                    name: "FunctionToString",
                    setupOnce() {
                        dc = Function.prototype.toString;
                        try {
                            Function.prototype.toString = function(...e) {
                                const t = B(this),
                                    n = pc.has(Ve()) && void 0 !== t ? t : this;
                                return dc.apply(n, e)
                            }
                        } catch {}
                    },
                    setup(e) {
                        pc.set(e, !0)
                    }
                });

            function hc(e = {}) {
                const t = e.client || Ve();
                if (!Lo() || !t) return {};
                const n = je(a());
                if (n.getTraceData) return n.getTraceData(e);
                const r = e.scope || Ue(),
                    o = e.span || ro();
                if (!o && void 0 !== Be) return {};
                const s = o ? Hr(o) : function(e) {
                        const {
                            traceId: t,
                            sampled: n,
                            propagationSpanId: r
                        } = e.getPropagationContext();
                        return Br(t, r, n)
                    }(r),
                    i = br(o ? lo(o) : uo(t, r));
                if (!Fr.test(s)) return D.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
                const c = {
                    "sentry-trace": s,
                    baggage: i
                };
                return e.propagateTraceparent && (c.traceparent = o ? function(e) {
                    const {
                        traceId: t,
                        spanId: n
                    } = e.spanContext();
                    return Ur(t, n, Yr(e))
                }(o) : function(e) {
                    const {
                        traceId: t,
                        sampled: n,
                        propagationSpanId: r
                    } = e.getPropagationContext();
                    return Ur(t, r, n)
                }(r)), c
            }
            const mc = {
                "messages.create": {
                    operation: "chat"
                },
                "messages.stream": {
                    operation: "chat",
                    streaming: !0
                },
                "messages.countTokens": {
                    operation: "chat"
                },
                "models.get": {
                    operation: "models"
                },
                "completions.create": {
                    operation: "chat"
                },
                "models.retrieve": {
                    operation: "models"
                },
                "beta.messages.create": {
                    operation: "chat"
                }
            };
            const gc = {
                invalid_request_error: "invalid_argument",
                authentication_error: "unauthenticated",
                permission_error: "permission_denied",
                not_found_error: "not_found",
                request_too_large: "failed_precondition",
                rate_limit_error: "resource_exhausted",
                api_error: "internal_error",
                overloaded_error: "unavailable"
            };

            function yc(e) {
                return e && gc[e] || "internal_error"
            }

            function _c(e, t, n, r) {
                if (!e || "object" != typeof e) return;
                const o = function(e, t) {
                    return "type" in e && "string" == typeof e.type && "error" === e.type && (t.setStatus({
                        code: 2,
                        message: yc(e.error ? .type)
                    }), bo(e.error, {
                        mechanism: {
                            handled: !1,
                            type: "auto.ai.anthropic.anthropic_error"
                        }
                    }), !0)
                }(e, r);
                o || (function(e, t) {
                    if ("message_delta" === e.type && e.usage && "output_tokens" in e.usage && "number" == typeof e.usage.output_tokens && (t.completionTokens = e.usage.output_tokens), e.message) {
                        const n = e.message;
                        n.id && (t.responseId = n.id), n.model && (t.responseModel = n.model), n.stop_reason && t.finishReasons.push(n.stop_reason), n.usage && ("number" == typeof n.usage.input_tokens && (t.promptTokens = n.usage.input_tokens), "number" == typeof n.usage.cache_creation_input_tokens && (t.cacheCreationInputTokens = n.usage.cache_creation_input_tokens), "number" == typeof n.usage.cache_read_input_tokens && (t.cacheReadInputTokens = n.usage.cache_read_input_tokens))
                    }
                }(e, t), function(e, t) {
                    "content_block_start" === e.type && "number" == typeof e.index && e.content_block && ("tool_use" !== e.content_block.type && "server_tool_use" !== e.content_block.type || (t.activeToolBlocks[e.index] = {
                        id: e.content_block.id,
                        name: e.content_block.name,
                        inputJsonParts: []
                    }))
                }(e, t), function(e, t, n) {
                    if ("content_block_delta" === e.type && e.delta) {
                        if ("number" == typeof e.index && "partial_json" in e.delta && "string" == typeof e.delta.partial_json) {
                            const n = t.activeToolBlocks[e.index];
                            n && n.inputJsonParts.push(e.delta.partial_json)
                        }
                        n && "string" == typeof e.delta.text && t.responseTexts.push(e.delta.text)
                    }
                }(e, t, n), function(e, t) {
                    if ("content_block_stop" !== e.type || "number" != typeof e.index) return;
                    const n = t.activeToolBlocks[e.index];
                    if (!n) return;
                    const r = n.inputJsonParts.join("");
                    let o;
                    try {
                        o = r ? JSON.parse(r) : {}
                    } catch {
                        o = {
                            __unparsed: r
                        }
                    }
                    t.toolCalls.push({
                        type: "tool_use",
                        id: n.id,
                        name: n.name,
                        input: o
                    }), delete t.activeToolBlocks[e.index]
                }(e, t))
            }

            function vc(e, t, n) {
                const r = {
                    responseTexts: [],
                    finishReasons: [],
                    responseId: "",
                    responseModel: "",
                    promptTokens: void 0,
                    completionTokens: void 0,
                    cacheCreationInputTokens: void 0,
                    cacheReadInputTokens: void 0,
                    toolCalls: [],
                    activeToolBlocks: {}
                };
                return e.on("streamEvent", (e => {
                    _c(e, r, n, t)
                })), e.on("message", (() => {
                    ! function(e, t, n) {
                        t.isRecording() && (e.responseId && t.setAttributes({
                            [Ai]: e.responseId
                        }), e.responseModel && t.setAttributes({
                            [Ri]: e.responseModel
                        }), wa(t, e.promptTokens, e.completionTokens, e.cacheCreationInputTokens, e.cacheReadInputTokens), t.setAttributes({
                            [Bi]: !0
                        }), e.finishReasons.length > 0 && t.setAttributes({
                            [Ii]: JSON.stringify(e.finishReasons)
                        }), n && e.responseTexts.length > 0 && t.setAttributes({
                            [Fi]: e.responseTexts.join("")
                        }), n && e.toolCalls.length > 0 && t.setAttributes({
                            [Ui]: JSON.stringify(e.toolCalls)
                        }), t.end())
                    }(r, t, n)
                })), e.on("error", (e => {
                    bo(e, {
                        mechanism: {
                            handled: !1,
                            type: "auto.ai.anthropic.stream_error"
                        }
                    }), t.isRecording() && (t.setStatus({
                        code: 2,
                        message: "internal_error"
                    }), t.end())
                })), e
            }

            function bc(e, t) {
                const n = function(e) {
                    const {
                        system: t,
                        messages: n,
                        input: r
                    } = e, o = "string" == typeof t ? [{
                        role: "system",
                        content: e.system
                    }] : [], s = Array.isArray(r) ? r : null != r ? [r] : void 0, i = Array.isArray(n) ? n : null != n ? [n] : [];
                    return [...o, ...s ? ? i]
                }(t);
                ! function(e, t) {
                    if (Array.isArray(t) && 0 === t.length) return;
                    const {
                        systemInstructions: n,
                        filteredMessages: r
                    } = Ea(t);
                    n && e.setAttributes({
                        [$i]: n
                    });
                    const o = Array.isArray(r) ? r.length : 1;
                    e.setAttributes({
                        [Di]: xa(r),
                        [Ni]: o
                    })
                }(e, n), "prompt" in t && e.setAttributes({
                    [_i]: JSON.stringify(t.prompt)
                })
            }

            function Sc(e, t, n) {
                t && "object" == typeof t && ("type" in t && "error" === t.type ? function(e, t) {
                    t.error && (e.setStatus({
                        code: 2,
                        message: yc(t.error.type)
                    }), bo(t.error, {
                        mechanism: {
                            handled: !1,
                            type: "auto.ai.anthropic.anthropic_error"
                        }
                    }))
                }(e, t) : (n && function(e, t) {
                    if ("content" in t && Array.isArray(t.content)) {
                        e.setAttributes({
                            [Fi]: t.content.map((e => e.text)).filter((e => !!e)).join("")
                        });
                        const n = [];
                        for (const e of t.content) "tool_use" !== e.type && "server_tool_use" !== e.type || n.push(e);
                        n.length > 0 && e.setAttributes({
                            [Ui]: JSON.stringify(n)
                        })
                    }
                    "completion" in t && e.setAttributes({
                        [Fi]: t.completion
                    }), "input_tokens" in t && e.setAttributes({
                        [Fi]: JSON.stringify(t.input_tokens)
                    })
                }(e, t), function(e, t) {
                    "id" in t && "model" in t && (e.setAttributes({
                        [Ai]: t.id,
                        [Ri]: t.model
                    }), "created" in t && "number" == typeof t.created && e.setAttributes({
                        [ea]: new Date(1e3 * t.created).toISOString()
                    }), "created_at" in t && "number" == typeof t.created_at && e.setAttributes({
                        [ea]: new Date(1e3 * t.created_at).toISOString()
                    }), "usage" in t && t.usage && wa(e, t.usage.input_tokens, t.usage.output_tokens, t.usage.cache_creation_input_tokens, t.usage.cache_read_input_tokens))
                }(e, t)))
            }

            function kc(e, t, n) {
                throw bo(e, {
                    mechanism: {
                        handled: !1,
                        type: "auto.ai.anthropic",
                        data: {
                            function: n
                        }
                    }
                }), t.isRecording() && (t.setStatus({
                    code: 2,
                    message: "internal_error"
                }), t.end()), e
            }

            function wc(e, t, n, r, o, s, i, a, c, u, l) {
                const d = {
                    name: `${s} ${o[bi]??"unknown"}`,
                    op: `gen_ai.${s}`,
                    attributes: o
                };
                if (u && !l) {
                    let t;
                    const o = ni(d, (o => (t = e.apply(n, r), c.recordInputs && a && bc(o, a), (async () => {
                        try {
                            return async function*(e, t, n) {
                                const r = {
                                    responseTexts: [],
                                    finishReasons: [],
                                    responseId: "",
                                    responseModel: "",
                                    promptTokens: void 0,
                                    completionTokens: void 0,
                                    cacheCreationInputTokens: void 0,
                                    cacheReadInputTokens: void 0,
                                    toolCalls: [],
                                    activeToolBlocks: {}
                                };
                                try {
                                    for await (const o of e) _c(o, r, n, t), yield o
                                } finally {
                                    r.responseId && t.setAttributes({
                                        [Ai]: r.responseId
                                    }), r.responseModel && t.setAttributes({
                                        [Ri]: r.responseModel
                                    }), wa(t, r.promptTokens, r.completionTokens, r.cacheCreationInputTokens, r.cacheReadInputTokens), t.setAttributes({
                                        [Bi]: !0
                                    }), r.finishReasons.length > 0 && t.setAttributes({
                                        [Ii]: JSON.stringify(r.finishReasons)
                                    }), n && r.responseTexts.length > 0 && t.setAttributes({
                                        [Fi]: r.responseTexts.join("")
                                    }), n && r.toolCalls.length > 0 && t.setAttributes({
                                        [Ui]: JSON.stringify(r.toolCalls)
                                    }), t.end()
                                }
                            }(await t, o, c.recordOutputs ? ? !1)
                        } catch (e) {
                            return kc(e, o, i)
                        }
                    })())));
                    return Ta(t, o, "auto.ai.anthropic")
                }
                return ni(d, (e => {
                    try {
                        c.recordInputs && a && bc(e, a);
                        return vc(t.apply(n, r), e, c.recordOutputs ? ? !1)
                    } catch (t) {
                        return kc(t, e, i)
                    }
                }))
            }

            function xc(e, t, n, r, o) {
                return new Proxy(e, {
                    apply(s, i, a) {
                        const c = n.operation,
                            u = function(e, t, n) {
                                const r = {
                                    [vi]: "anthropic",
                                    [Li]: n,
                                    [cr]: "auto.ai.anthropic"
                                };
                                if (e.length > 0 && "object" == typeof e[0] && null !== e[0]) {
                                    const t = e[0];
                                    t.tools && Array.isArray(t.tools) && (r[ji] = JSON.stringify(t.tools)), r[bi] = t.model ? ? "unknown", "temperature" in t && (r[ki] = t.temperature), "top_p" in t && (r[Ti] = t.top_p), "stream" in t && (r[Si] = t.stream), "top_k" in t && (r[Ci] = t.top_k), "frequency_penalty" in t && (r[xi] = t.frequency_penalty), "max_tokens" in t && (r[wi] = t.max_tokens)
                                } else r[bi] = "models.retrieve" === t || "models.get" === t ? e[0] : "unknown";
                                return r
                            }(a, t, c),
                            l = u[bi] ? ? "unknown",
                            d = "object" == typeof a[0] ? a[0] : void 0,
                            p = Boolean(d ? .stream),
                            f = !0 === n.streaming;
                        if (p || f) return wc(e, s, r, a, u, c, t, d, o, p, f);
                        let h;
                        const m = ti({
                            name: `${c} ${l}`,
                            op: `gen_ai.${c}`,
                            attributes: u
                        }, (e => (h = s.apply(r, a), o.recordInputs && d && bc(e, d), h.then((t => (Sc(e, t, o.recordOutputs), t)), (e => {
                            throw bo(e, {
                                mechanism: {
                                    handled: !1,
                                    type: "auto.ai.anthropic",
                                    data: {
                                        function: t
                                    }
                                }
                            }), e
                        })))));
                        return Ta(h, m, "auto.ai.anthropic")
                    }
                })
            }

            function Ec(e, t = "", n) {
                return new Proxy(e, {
                    get(e, r) {
                        const o = e[r],
                            s = ka(t, String(r)),
                            i = mc[s];
                        return "function" == typeof o && i ? xc(o, s, i, e, n) : "function" == typeof o ? o.bind(e) : o && "object" == typeof o ? Ec(o, s, n) : o
                    }
                })
            }

            function Tc(e, t) {
                return Ec(e, "", Sa(t))
            }
            const Cc = {
                    "models.generateContent": {
                        operation: "generate_content"
                    },
                    "models.generateContentStream": {
                        operation: "generate_content",
                        streaming: !0
                    },
                    "models.embedContent": {
                        operation: "embeddings"
                    },
                    "chats.create": {
                        operation: "chat"
                    },
                    "chat.sendMessage": {
                        operation: "chat"
                    },
                    "chat.sendMessageStream": {
                        operation: "chat",
                        streaming: !0
                    }
                },
                Ic = "chats.create";

            function Rc(e, t, n, r) {
                e && ! function(e, t) {
                    const n = e ? .promptFeedback;
                    if (n ? .blockReason) {
                        const e = n.blockReasonMessage ? ? n.blockReason;
                        return t.setStatus({
                            code: 2,
                            message: "internal_error"
                        }), bo(`Content blocked: ${e}`, {
                            mechanism: {
                                handled: !1,
                                type: "auto.ai.google_genai"
                            }
                        }), !0
                    }
                    return !1
                }(e, r) && (function(e, t) {
                    "string" == typeof e.responseId && (t.responseId = e.responseId), "string" == typeof e.modelVersion && (t.responseModel = e.modelVersion);
                    const n = e.usageMetadata;
                    n && ("number" == typeof n.promptTokenCount && (t.promptTokens = n.promptTokenCount), "number" == typeof n.candidatesTokenCount && (t.completionTokens = n.candidatesTokenCount), "number" == typeof n.totalTokenCount && (t.totalTokens = n.totalTokenCount))
                }(e, t), function(e, t, n) {
                    Array.isArray(e.functionCalls) && t.toolCalls.push(...e.functionCalls);
                    for (const r of e.candidates ? ? []) {
                        r ? .finishReason && !t.finishReasons.includes(r.finishReason) && t.finishReasons.push(r.finishReason);
                        for (const e of r ? .content ? .parts ? ? []) n && e.text && t.responseTexts.push(e.text), e.functionCall && t.toolCalls.push({
                            type: "function",
                            id: e.functionCall.id,
                            name: e.functionCall.name,
                            arguments: e.functionCall.args
                        })
                    }
                }(e, t, n))
            }

            function Ac(e, t = "user") {
                return "string" == typeof e ? [{
                    role: t,
                    content: e
                }] : Array.isArray(e) ? e.flatMap((e => Ac(e, t))) : "object" == typeof e && e ? "role" in e && "string" == typeof e.role ? [e] : "parts" in e ? [{ ...e,
                    role: t
                }] : [{
                    role: t,
                    content: e
                }] : []
            }

            function Mc(e, t) {
                if ("model" in e && "string" == typeof e.model) return e.model;
                if (t && "object" == typeof t) {
                    const e = t;
                    if ("model" in e && "string" == typeof e.model) return e.model;
                    if ("modelVersion" in e && "string" == typeof e.modelVersion) return e.modelVersion
                }
                return "unknown"
            }

            function Oc(e, t, n) {
                const r = {
                    [vi]: "google_genai",
                    [Li]: e,
                    [cr]: "auto.ai.google_genai"
                };
                if (t) {
                    if (r[bi] = Mc(t, n), "config" in t && "object" == typeof t.config && t.config) {
                        const e = t.config;
                        if (Object.assign(r, function(e) {
                                const t = {};
                                return "temperature" in e && "number" == typeof e.temperature && (t[ki] = e.temperature), "topP" in e && "number" == typeof e.topP && (t[Ti] = e.topP), "topK" in e && "number" == typeof e.topK && (t[Ci] = e.topK), "maxOutputTokens" in e && "number" == typeof e.maxOutputTokens && (t[wi] = e.maxOutputTokens), "frequencyPenalty" in e && "number" == typeof e.frequencyPenalty && (t[xi] = e.frequencyPenalty), "presencePenalty" in e && "number" == typeof e.presencePenalty && (t[Ei] = e.presencePenalty), t
                            }(e)), "tools" in e && Array.isArray(e.tools)) {
                            const t = e.tools.flatMap((e => e.functionDeclarations));
                            r[ji] = JSON.stringify(t)
                        }
                    }
                } else r[bi] = Mc({}, n);
                return r
            }

            function Pc(e, t, n) {
                if (n) {
                    const n = t.contents;
                    return void(null != n && e.setAttribute(Vi, "string" == typeof n ? n : JSON.stringify(n)))
                }
                const r = [];
                if ("config" in t && t.config && "object" == typeof t.config && "systemInstruction" in t.config && t.config.systemInstruction && r.push(...Ac(t.config.systemInstruction, "system")), "history" in t && r.push(...Ac(t.history, "user")), "contents" in t && r.push(...Ac(t.contents, "user")), "message" in t && r.push(...Ac(t.message, "user")), Array.isArray(r) && r.length) {
                    const {
                        systemInstructions: t,
                        filteredMessages: n
                    } = Ea(r);
                    t && e.setAttribute($i, t);
                    const o = Array.isArray(n) ? n.length : 0;
                    e.setAttributes({
                        [Ni]: o,
                        [Di]: JSON.stringify(ba(n))
                    })
                }
            }

            function Lc(e, t, n, r, o) {
                const s = t === Ic,
                    i = "embeddings" === n.operation;
                return new Proxy(e, {
                    apply(e, a, c) {
                        const u = n.operation,
                            l = c[0],
                            d = Oc(u, l, r),
                            p = d[bi] ? ? "unknown";
                        return n.streaming ? ni({
                            name: `${u} ${p}`,
                            op: `gen_ai.${u}`,
                            attributes: d
                        }, (async n => {
                            try {
                                o.recordInputs && l && Pc(n, l, i);
                                return async function*(e, t, n) {
                                    const r = {
                                        responseTexts: [],
                                        finishReasons: [],
                                        toolCalls: []
                                    };
                                    try {
                                        for await (const o of e) Rc(o, r, n, t), yield o
                                    } finally {
                                        const e = {
                                            [Bi]: !0
                                        };
                                        r.responseId && (e[Ai] = r.responseId), r.responseModel && (e[Ri] = r.responseModel), void 0 !== r.promptTokens && (e[Mi] = r.promptTokens), void 0 !== r.completionTokens && (e[Oi] = r.completionTokens), void 0 !== r.totalTokens && (e[Pi] = r.totalTokens), r.finishReasons.length && (e[Ii] = JSON.stringify(r.finishReasons)), n && r.responseTexts.length && (e[Fi] = r.responseTexts.join("")), n && r.toolCalls.length && (e[Ui] = JSON.stringify(r.toolCalls)), t.setAttributes(e), t.end()
                                    }
                                }(await e.apply(r, c), n, Boolean(o.recordOutputs))
                            } catch (e) {
                                throw n.setStatus({
                                    code: 2,
                                    message: "internal_error"
                                }), bo(e, {
                                    mechanism: {
                                        handled: !1,
                                        type: "auto.ai.google_genai",
                                        data: {
                                            function: t
                                        }
                                    }
                                }), n.end(), e
                            }
                        })) : ti({
                            name: s ? `${u} ${p} create` : `${u} ${p}`,
                            op: `gen_ai.${u}`,
                            attributes: d
                        }, (n => (o.recordInputs && l && Pc(n, l, i), Ws((() => e.apply(r, c)), (e => {
                            bo(e, {
                                mechanism: {
                                    handled: !1,
                                    type: "auto.ai.google_genai",
                                    data: {
                                        function: t
                                    }
                                }
                            })
                        }), (() => {}), (e => {
                            s || i || function(e, t, n) {
                                if (t && "object" == typeof t) {
                                    if (t.modelVersion && e.setAttribute(Ri, t.modelVersion), t.usageMetadata && "object" == typeof t.usageMetadata) {
                                        const n = t.usageMetadata;
                                        "number" == typeof n.promptTokenCount && e.setAttributes({
                                            [Mi]: n.promptTokenCount
                                        }), "number" == typeof n.candidatesTokenCount && e.setAttributes({
                                            [Oi]: n.candidatesTokenCount
                                        }), "number" == typeof n.totalTokenCount && e.setAttributes({
                                            [Pi]: n.totalTokenCount
                                        })
                                    }
                                    if (n && Array.isArray(t.candidates) && t.candidates.length > 0) {
                                        const n = t.candidates.map((e => e.content ? .parts && Array.isArray(e.content.parts) ? e.content.parts.map((e => "string" == typeof e.text ? e.text : "")).filter((e => e.length > 0)).join("") : "")).filter((e => e.length > 0));
                                        n.length > 0 && e.setAttributes({
                                            [Fi]: n.join("")
                                        })
                                    }
                                    if (n && t.functionCalls) {
                                        const n = t.functionCalls;
                                        Array.isArray(n) && n.length > 0 && e.setAttributes({
                                            [Ui]: JSON.stringify(n)
                                        })
                                    }
                                }
                            }(n, e, o.recordOutputs)
                        })))))
                    }
                })
            }

            function Nc(e, t = "", n) {
                return new Proxy(e, {
                    get: (e, r, o) => {
                        const s = Reflect.get(e, r, o),
                            i = ka(t, String(r)),
                            a = Cc[i];
                        if ("function" == typeof s && a) {
                            if (i === Ic) {
                                const t = Lc(s, i, a, e, n);
                                return function(...e) {
                                    const r = t(...e);
                                    return r && "object" == typeof r ? Nc(r, "chat", n) : r
                                }
                            }
                            return Lc(s, i, a, e, n)
                        }
                        return "function" == typeof s ? s.bind(e) : s && "object" == typeof s ? Nc(s, i, n) : s
                    }
                })
            }

            function Dc(e, t) {
                return Nc(e, "", Sa(t))
            }
            const $c = "auto.ai.langgraph";

            function Fc(e) {
                const t = e;
                let n = 0,
                    r = 0,
                    o = 0;
                if (t.usage_metadata && "object" == typeof t.usage_metadata) {
                    const e = t.usage_metadata;
                    return "number" == typeof e.input_tokens && (n = e.input_tokens), "number" == typeof e.output_tokens && (r = e.output_tokens), "number" == typeof e.total_tokens && (o = e.total_tokens), {
                        inputTokens: n,
                        outputTokens: r,
                        totalTokens: o
                    }
                }
                if (t.response_metadata && "object" == typeof t.response_metadata) {
                    const e = t.response_metadata;
                    if (e.tokenUsage && "object" == typeof e.tokenUsage) {
                        const t = e.tokenUsage;
                        "number" == typeof t.promptTokens && (n = t.promptTokens), "number" == typeof t.completionTokens && (r = t.completionTokens), "number" == typeof t.totalTokens && (o = t.totalTokens)
                    }
                }
                return {
                    inputTokens: n,
                    outputTokens: r,
                    totalTokens: o
                }
            }

            function jc(e, t) {
                const n = t;
                if (n.response_metadata && "object" == typeof n.response_metadata) {
                    const t = n.response_metadata;
                    t.model_name && "string" == typeof t.model_name && e.setAttribute(Ri, t.model_name), t.finish_reason && "string" == typeof t.finish_reason && e.setAttribute(Ii, [t.finish_reason])
                }
            }

            function Bc(e, t, n) {
                const r = n,
                    o = r ? .messages;
                if (!o || !Array.isArray(o)) return;
                const s = t ? .length ? ? 0,
                    i = o.length > s ? o.slice(s) : [];
                if (0 === i.length) return;
                const a = function(e) {
                    if (!e || 0 === e.length) return null;
                    const t = [];
                    for (const n of e)
                        if (n && "object" == typeof n) {
                            const e = n.tool_calls;
                            e && Array.isArray(e) && t.push(...e)
                        }
                    return t.length > 0 ? t : null
                }(i);
                a && e.setAttribute(Ui, JSON.stringify(a));
                const c = Da(i);
                e.setAttribute(Fi, JSON.stringify(c));
                let u = 0,
                    l = 0,
                    d = 0;
                for (const t of i) {
                    const n = Fc(t);
                    u += n.inputTokens, l += n.outputTokens, d += n.totalTokens, jc(e, t)
                }
                u > 0 && e.setAttribute(Mi, u), l > 0 && e.setAttribute(Oi, l), d > 0 && e.setAttribute(Pi, d)
            }

            function Uc(e, t) {
                return new Proxy(e, {
                    apply: (e, n, r) => ti({
                        op: "gen_ai.create_agent",
                        name: "create_agent",
                        attributes: {
                            [cr]: $c,
                            [ar]: "gen_ai.create_agent",
                            [Li]: "create_agent"
                        }
                    }, (o => {
                        try {
                            const s = Reflect.apply(e, n, r),
                                i = r.length > 0 ? r[0] : {};
                            i ? .name && "string" == typeof i.name && (o.setAttribute(zi, i.name), o.updateName(`create_agent ${i.name}`));
                            const a = s.invoke;
                            return a && "function" == typeof a && (s.invoke = function(e, t, n, r) {
                                return new Proxy(e, {
                                    apply: (e, o, s) => ti({
                                        op: "gen_ai.invoke_agent",
                                        name: "invoke_agent",
                                        attributes: {
                                            [cr]: $c,
                                            [ar]: Hi,
                                            [Li]: "invoke_agent"
                                        }
                                    }, (async i => {
                                        try {
                                            const a = n ? .name;
                                            a && "string" == typeof a && (i.setAttribute(qi, a), i.setAttribute(zi, a), i.updateName(`invoke_agent ${a}`));
                                            const c = s.length > 1 ? s[1] : void 0,
                                                u = c ? .configurable,
                                                l = u ? .thread_id;
                                            l && "string" == typeof l && i.setAttribute(Wi, l);
                                            const d = function(e) {
                                                if (!e.builder ? .nodes ? .tools ? .runnable ? .tools) return null;
                                                const t = e.builder ? .nodes ? .tools ? .runnable ? .tools;
                                                return t && Array.isArray(t) && 0 !== t.length ? t.map((e => ({
                                                    name: e.lc_kwargs ? .name,
                                                    description: e.lc_kwargs ? .description,
                                                    schema: e.lc_kwargs ? .schema
                                                }))) : null
                                            }(t);
                                            d && i.setAttribute(ji, JSON.stringify(d));
                                            const p = r.recordInputs,
                                                f = r.recordOutputs,
                                                h = s.length > 0 ? s[0] ? .messages ? ? [] : [];
                                            if (h && p) {
                                                const e = Da(h),
                                                    {
                                                        systemInstructions: t,
                                                        filteredMessages: n
                                                    } = Ea(e);
                                                t && i.setAttribute($i, t);
                                                const r = ba(n),
                                                    o = Array.isArray(n) ? n.length : 0;
                                                i.setAttributes({
                                                    [Di]: JSON.stringify(r),
                                                    [Ni]: o
                                                })
                                            }
                                            const m = await Reflect.apply(e, o, s);
                                            return f && Bc(i, h ? ? null, m), m
                                        } catch (e) {
                                            throw i.setStatus({
                                                code: 2,
                                                message: "internal_error"
                                            }), bo(e, {
                                                mechanism: {
                                                    handled: !1,
                                                    type: "auto.ai.langgraph.error"
                                                }
                                            }), e
                                        }
                                    }))
                                })
                            }(a.bind(s), s, i, t)), s
                        } catch (e) {
                            throw o.setStatus({
                                code: 2,
                                message: "internal_error"
                            }), bo(e, {
                                mechanism: {
                                    handled: !1,
                                    type: "auto.ai.langgraph.error"
                                }
                            }), e
                        }
                    }))
                })
            }

            function zc(e, t) {
                return e.compile = Uc(e.compile, Sa(t)), e
            }
            const qc = {
                    "responses.create": {
                        operation: "chat"
                    },
                    "chat.completions.create": {
                        operation: "chat"
                    },
                    "embeddings.create": {
                        operation: "embeddings"
                    },
                    "conversations.create": {
                        operation: "chat"
                    }
                },
                Wc = ["response.created", "response.in_progress", "response.failed", "response.completed", "response.incomplete", "response.queued", "response.output_text.delta", "response.output_item.added", "response.function_call_arguments.delta", "response.function_call_arguments.done", "response.output_item.done"];

            function Hc(e) {
                return null !== e && "object" == typeof e && "type" in e && "string" == typeof e.type && e.type.startsWith("response.")
            }

            function Vc(e) {
                return null !== e && "object" == typeof e && "object" in e && "chat.completion.chunk" === e.object
            }

            function Jc(e, t, n, r) {
                void 0 !== t && e.setAttributes({
                    [Qi]: t,
                    [Mi]: t
                }), void 0 !== n && e.setAttributes({
                    [Zi]: n,
                    [Oi]: n
                }), void 0 !== r && e.setAttributes({
                    [Pi]: r
                })
            }

            function Gc(e, t, n, r) {
                e.setAttributes({
                    [Ki]: t,
                    [Ai]: t
                }), e.setAttributes({
                    [Yi]: n,
                    [Ri]: n
                }), e.setAttributes({
                    [Xi]: new Date(1e3 * r).toISOString()
                })
            }

            function Kc(e, t) {
                for (const n of e) {
                    const e = n.index;
                    if (void 0 !== e && n.function)
                        if (e in t.chatCompletionToolCalls) {
                            const r = t.chatCompletionToolCalls[e];
                            n.function.arguments && r ? .function && (r.function.arguments += n.function.arguments)
                        } else t.chatCompletionToolCalls[e] = { ...n,
                            function: {
                                name: n.function.name,
                                arguments: n.function.arguments || ""
                            }
                        }
                }
            }

            function Yc(e, t, n) {
                t.responseId = e.id ? ? t.responseId, t.responseModel = e.model ? ? t.responseModel, t.responseTimestamp = e.created ? ? t.responseTimestamp, e.usage && (t.promptTokens = e.usage.prompt_tokens, t.completionTokens = e.usage.completion_tokens, t.totalTokens = e.usage.total_tokens);
                for (const r of e.choices ? ? []) n && (r.delta ? .content && t.responseTexts.push(r.delta.content), r.delta ? .tool_calls && Kc(r.delta.tool_calls, t)), r.finish_reason && t.finishReasons.push(r.finish_reason)
            }

            function Xc(e, t, n, r) {
                if (!e || "object" != typeof e) return void t.eventTypes.push("unknown:non-object");
                if (e instanceof Error) return r.setStatus({
                    code: 2,
                    message: "internal_error"
                }), void bo(e, {
                    mechanism: {
                        handled: !1,
                        type: "auto.ai.openai.stream-response"
                    }
                });
                if (!("type" in e)) return;
                const o = e;
                if (Wc.includes(o.type)) {
                    if (n && ("response.output_item.done" === o.type && "item" in o && t.responsesApiToolCalls.push(o.item), "response.output_text.delta" === o.type && "delta" in o && o.delta)) t.responseTexts.push(o.delta);
                    else if ("response" in o) {
                        const {
                            response: e
                        } = o;
                        t.responseId = e.id ? ? t.responseId, t.responseModel = e.model ? ? t.responseModel, t.responseTimestamp = e.created_at ? ? t.responseTimestamp, e.usage && (t.promptTokens = e.usage.input_tokens, t.completionTokens = e.usage.output_tokens, t.totalTokens = e.usage.total_tokens), e.status && t.finishReasons.push(e.status), n && e.output_text && t.responseTexts.push(e.output_text)
                    }
                } else t.eventTypes.push(o.type)
            }

            function Zc(e, t) {
                const n = {
                    [vi]: "openai",
                    [Li]: t,
                    [cr]: "auto.ai.openai"
                };
                if (e.length > 0 && "object" == typeof e[0] && null !== e[0]) {
                    const t = e[0],
                        r = function(e) {
                            const t = [...Array.isArray(e.tools) ? e.tools : [], ...e.web_search_options && "object" == typeof e.web_search_options ? [{
                                type: "web_search_options",
                                ...e.web_search_options
                            }] : []];
                            if (0 !== t.length) try {
                                return JSON.stringify(t)
                            } catch (e) {
                                return void(l && D.error("Failed to serialize OpenAI tools:", e))
                            }
                        }(t);
                    r && (n[ji] = r), Object.assign(n, function(e) {
                        const t = {
                            [bi]: e.model ? ? "unknown"
                        };
                        "temperature" in e && (t[ki] = e.temperature), "top_p" in e && (t[Ti] = e.top_p), "frequency_penalty" in e && (t[xi] = e.frequency_penalty), "presence_penalty" in e && (t[Ei] = e.presence_penalty), "stream" in e && (t[Si] = e.stream), "encoding_format" in e && (t["gen_ai.request.encoding_format"] = e.encoding_format), "dimensions" in e && (t["gen_ai.request.dimensions"] = e.dimensions);
                        const n = function(e) {
                            return "conversation" in e && "string" == typeof e.conversation ? e.conversation : "previous_response_id" in e && "string" == typeof e.previous_response_id ? e.previous_response_id : void 0
                        }(e);
                        return n && (t[Wi] = n), t
                    }(t))
                } else n[bi] = "unknown";
                return n
            }

            function Qc(e, t, n) {
                if (!t || "object" != typeof t) return;
                const r = t;
                if (function(e) {
                        return null !== e && "object" == typeof e && "object" in e && "chat.completion" === e.object
                    }(r)) {
                    if (function(e, t, n) {
                            if (Gc(e, t.id, t.model, t.created), t.usage && Jc(e, t.usage.prompt_tokens, t.usage.completion_tokens, t.usage.total_tokens), Array.isArray(t.choices)) {
                                const r = t.choices.map((e => e.finish_reason)).filter((e => null !== e));
                                if (r.length > 0 && e.setAttributes({
                                        [Ii]: JSON.stringify(r)
                                    }), n) {
                                    const n = t.choices.map((e => e.message ? .tool_calls)).filter((e => Array.isArray(e) && e.length > 0)).flat();
                                    n.length > 0 && e.setAttributes({
                                        [Ui]: JSON.stringify(n)
                                    })
                                }
                            }
                        }(e, r, n), n && r.choices ? .length) {
                        const t = r.choices.map((e => e.message ? .content || ""));
                        e.setAttributes({
                            [Fi]: JSON.stringify(t)
                        })
                    }
                } else ! function(e) {
                    return null !== e && "object" == typeof e && "object" in e && "response" === e.object
                }(r) ? function(e) {
                    if (null === e || "object" != typeof e || !("object" in e)) return !1;
                    const t = e;
                    return "list" === t.object && "string" == typeof t.model && t.model.toLowerCase().includes("embedding")
                }(r) ? function(e, t) {
                    e.setAttributes({
                        [Yi]: t.model,
                        [Ri]: t.model
                    }), t.usage && Jc(e, t.usage.prompt_tokens, void 0, t.usage.total_tokens)
                }(e, r) : function(e) {
                    return null !== e && "object" == typeof e && "object" in e && "conversation" === e.object
                }(r) && function(e, t) {
                    const {
                        id: n,
                        created_at: r
                    } = t;
                    e.setAttributes({
                        [Ki]: n,
                        [Ai]: n,
                        [Wi]: n
                    }), r && e.setAttributes({
                        [Xi]: new Date(1e3 * r).toISOString()
                    })
                }(e, r) : (! function(e, t, n) {
                    if (Gc(e, t.id, t.model, t.created_at), t.status && e.setAttributes({
                            [Ii]: JSON.stringify([t.status])
                        }), t.usage && Jc(e, t.usage.input_tokens, t.usage.output_tokens, t.usage.total_tokens), n) {
                        const n = t;
                        if (Array.isArray(n.output) && n.output.length > 0) {
                            const t = n.output.filter((e => "object" == typeof e && null !== e && "function_call" === e.type));
                            t.length > 0 && e.setAttributes({
                                [Ui]: JSON.stringify(t)
                            })
                        }
                    }
                }(e, r, n), n && r.output_text && e.setAttributes({
                    [Fi]: r.output_text
                }))
            }

            function eu(e, t, n) {
                if ("embeddings" === n && "input" in t) {
                    const n = t.input;
                    if (null == n) return;
                    if ("string" == typeof n && 0 === n.length) return;
                    if (Array.isArray(n) && 0 === n.length) return;
                    return void e.setAttribute(Vi, "string" == typeof n ? n : JSON.stringify(n))
                }
                const r = "input" in t ? t.input : "messages" in t ? t.messages : void 0;
                if (!r) return;
                if (Array.isArray(r) && 0 === r.length) return;
                const {
                    systemInstructions: o,
                    filteredMessages: s
                } = Ea(r);
                o && e.setAttribute($i, o);
                const i = xa(s);
                e.setAttribute(Di, i), Array.isArray(s) ? e.setAttribute(Ni, s.length) : e.setAttribute(Ni, 1)
            }

            function tu(e, t, n, r, o) {
                return function(...s) {
                    const i = n.operation,
                        a = Zc(s, i),
                        c = a[bi] || "unknown",
                        u = s[0],
                        l = u && "object" == typeof u && !0 === u.stream,
                        d = {
                            name: `${i} ${c}`,
                            op: `gen_ai.${i}`,
                            attributes: a
                        };
                    if (l) {
                        let n;
                        const a = ni(d, (a => (n = e.apply(r, s), o.recordInputs && u && eu(a, u, i), (async () => {
                            try {
                                return async function*(e, t, n) {
                                    const r = {
                                        eventTypes: [],
                                        responseTexts: [],
                                        finishReasons: [],
                                        responseId: "",
                                        responseModel: "",
                                        responseTimestamp: 0,
                                        promptTokens: void 0,
                                        completionTokens: void 0,
                                        totalTokens: void 0,
                                        chatCompletionToolCalls: {},
                                        responsesApiToolCalls: []
                                    };
                                    try {
                                        for await (const o of e) Vc(o) ? Yc(o, r, n) : Hc(o) && Xc(o, r, n, t), yield o
                                    } finally {
                                        Gc(t, r.responseId, r.responseModel, r.responseTimestamp), Jc(t, r.promptTokens, r.completionTokens, r.totalTokens), t.setAttributes({
                                            [Bi]: !0
                                        }), r.finishReasons.length && t.setAttributes({
                                            [Ii]: JSON.stringify(r.finishReasons)
                                        }), n && r.responseTexts.length && t.setAttributes({
                                            [Fi]: r.responseTexts.join("")
                                        });
                                        const e = [...Object.values(r.chatCompletionToolCalls), ...r.responsesApiToolCalls];
                                        e.length > 0 && t.setAttributes({
                                            [Ui]: JSON.stringify(e)
                                        }), t.end()
                                    }
                                }(await n, a, o.recordOutputs ? ? !1)
                            } catch (e) {
                                throw a.setStatus({
                                    code: 2,
                                    message: "internal_error"
                                }), bo(e, {
                                    mechanism: {
                                        handled: !1,
                                        type: "auto.ai.openai.stream",
                                        data: {
                                            function: t
                                        }
                                    }
                                }), a.end(), e
                            }
                        })())));
                        return Ta(n, a, "auto.ai.openai")
                    }
                    let p;
                    const f = ti(d, (n => (p = e.apply(r, s), o.recordInputs && u && eu(n, u, i), p.then((e => (Qc(n, e, o.recordOutputs), e)), (e => {
                        throw bo(e, {
                            mechanism: {
                                handled: !1,
                                type: "auto.ai.openai",
                                data: {
                                    function: t
                                }
                            }
                        }), e
                    })))));
                    return Ta(p, f, "auto.ai.openai")
                }
            }

            function nu(e, t = "", n) {
                return new Proxy(e, {
                    get(e, r) {
                        const o = e[r],
                            s = ka(t, String(r)),
                            i = qc[s];
                        return "function" == typeof o && i ? tu(o, s, i, e, n) : "function" == typeof o ? o.bind(e) : o && "object" == typeof o ? nu(o, s, n) : o
                    }
                })
            }

            function ru(e, t) {
                return nu(e, "", Sa(t))
            }
            const ou = ["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"],
                su = ["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"],
                iu = {
                    eq: "eq",
                    neq: "neq",
                    gt: "gt",
                    gte: "gte",
                    lt: "lt",
                    lte: "lte",
                    like: "like",
                    "like(all)": "likeAllOf",
                    "like(any)": "likeAnyOf",
                    ilike: "ilike",
                    "ilike(all)": "ilikeAllOf",
                    "ilike(any)": "ilikeAnyOf",
                    is: "is",
                    in: "in",
                    cs: "contains",
                    cd: "containedBy",
                    sr: "rangeGt",
                    nxl: "rangeGte",
                    sl: "rangeLt",
                    nxr: "rangeLte",
                    adj: "rangeAdjacent",
                    ov: "overlaps",
                    fts: "",
                    plfts: "plain",
                    phfts: "phrase",
                    wfts: "websearch",
                    not: "not"
                },
                au = ["select", "insert", "upsert", "update", "delete"];

            function cu(e) {
                try {
                    e.__SENTRY_INSTRUMENTED__ = !0
                } catch {}
            }

            function uu(e) {
                try {
                    return e.__SENTRY_INSTRUMENTED__
                } catch {
                    return !1
                }
            }

            function lu(e, t) {
                if ("" === t || "*" === t) return "select(*)";
                if ("select" === e) return `select(${t})`;
                if ("or" === e || e.endsWith(".or")) return `${e}${t}`;
                const [n, ...r] = t.split(".");
                let o;
                return o = n ? .startsWith("fts") ? "textSearch" : n ? .startsWith("plfts") ? "textSearch[plain]" : n ? .startsWith("phfts") ? "textSearch[phrase]" : n ? .startsWith("wfts") ? "textSearch[websearch]" : n && iu[n] || "filter", `${o}(${e}, ${r.join(".")})`
            }

            function du(e, t = !1) {
                return new Proxy(e, {
                    apply: (n, r, o) => ti({
                        name: `auth ${t?"(admin) ":""}${e.name}`,
                        attributes: {
                            [cr]: "auto.db.supabase",
                            [ar]: "db",
                            "db.system": "postgresql",
                            "db.operation": `auth.${t?"admin.":""}${e.name}`
                        }
                    }, (e => Reflect.apply(n, r, o).then((t => (t && "object" == typeof t && "error" in t && t.error ? (e.setStatus({
                        code: 2
                    }), bo(t.error, {
                        mechanism: {
                            handled: !1,
                            type: "auto.db.supabase.auth"
                        }
                    })) : e.setStatus({
                        code: 1
                    }), e.end(), t))).catch((t => {
                        throw e.setStatus({
                            code: 2
                        }), e.end(), bo(t, {
                            mechanism: {
                                handled: !1,
                                type: "auto.db.supabase.auth"
                            }
                        }), t
                    })).then(...o)))
                })
            }

            function pu(e) {
                uu(e.prototype.from) || (e.prototype.from = new Proxy(e.prototype.from, {
                    apply(e, t, n) {
                        const r = Reflect.apply(e, t, n);
                        return function(e) {
                            for (const t of au) uu(e.prototype[t]) || (e.prototype[t] = new Proxy(e.prototype[t], {
                                apply(e, n, r) {
                                    const o = Reflect.apply(e, n, r),
                                        s = o.constructor;
                                    return l && D.log(`Instrumenting ${t} operation's PostgRESTFilterBuilder`), fu(s), o
                                }
                            }), cu(e.prototype[t]))
                        }(r.constructor), r
                    }
                }), cu(e.prototype.from))
            }

            function fu(e) {
                uu(e.prototype.then) || (e.prototype.then = new Proxy(e.prototype.then, {
                    apply(e, t, n) {
                        const r = au,
                            o = t,
                            s = function(e, t = {}) {
                                switch (e) {
                                    case "GET":
                                        return "select";
                                    case "POST":
                                        return t.Prefer ? .includes("resolution=") ? "upsert" : "insert";
                                    case "PATCH":
                                        return "update";
                                    case "DELETE":
                                        return "delete";
                                    default:
                                        return "<unknown-op>"
                                }
                            }(o.method, o.headers);
                        if (!r.includes(s)) return Reflect.apply(e, t, n);
                        if (!o ? .url ? .pathname || "string" != typeof o.url.pathname) return Reflect.apply(e, t, n);
                        const i = o.url.pathname.split("/"),
                            a = i.length > 0 ? i[i.length - 1] : "",
                            c = [];
                        for (const [e, t] of o.url.searchParams.entries()) c.push(lu(e, t));
                        const u = Object.create(null);
                        if (v(o.body))
                            for (const [e, t] of Object.entries(o.body)) u[e] = t;
                        const l = `${"select"===s?"":`${s}${u?"(...) ":""}`}${c.join(" ")} from(${a})`,
                            d = {
                                "db.table": a,
                                "db.schema": o.schema,
                                "db.url": o.url.origin,
                                "db.sdk": o.headers["X-Client-Info"],
                                "db.system": "postgresql",
                                "db.operation": s,
                                [cr]: "auto.db.supabase",
                                [ar]: "db"
                            };
                        return c.length && (d["db.query"] = c), Object.keys(u).length && (d["db.body"] = u), ti({
                            name: l,
                            attributes: d
                        }, (r => Reflect.apply(e, t, []).then((e => {
                            if (r && (e && "object" == typeof e && "status" in e && Mr(r, e.status || 500), r.end()), e ? .error) {
                                const t = new Error(e.error.message);
                                e.error.code && (t.code = e.error.code), e.error.details && (t.details = e.error.details);
                                const n = {};
                                c.length && (n.query = c), Object.keys(u).length && (n.body = u), bo(t, (e => (e.addEventProcessor((e => (he(e, {
                                    handled: !1,
                                    type: "auto.db.supabase.postgres"
                                }), e))), e.setContext("supabase", n), e)))
                            }
                            const t = {
                                    type: "supabase",
                                    category: `db.${s}`,
                                    message: l
                                },
                                n = {};
                            return c.length && (n.query = c), Object.keys(u).length && (n.body = u), Object.keys(n).length && (t.data = n), gs(t), e
                        }), (e => {
                            throw r && (Mr(r, 500), r.end()), e
                        })).then(...n)))
                    }
                }), cu(e.prototype.then))
            }
            const hu = e => {
                    if (!e) return void(l && D.warn("Supabase integration was not installed because no Supabase client was provided."));
                    pu(e.constructor === Function ? e : e.constructor),
                        function(e) {
                            const t = e.auth;
                            if (t && !uu(e.auth)) {
                                for (const n of ou) {
                                    const r = t[n];
                                    r && "function" == typeof e.auth[n] && (e.auth[n] = du(r))
                                }
                                for (const n of su) {
                                    const r = t.admin[n];
                                    r && "function" == typeof e.auth.admin[n] && (e.auth.admin[n] = du(r, !0))
                                }
                                cu(e.auth)
                            }
                        }(e)
                },
                mu = e => {
                    return t = e.supabaseClient, {
                        setupOnce() {
                            hu(t)
                        },
                        name: "Supabase"
                    };
                    var t
                };

            function gu(e, ...t) {
                const n = new String(String.raw(e, ...t));
                return n.__sentry_template_string__ = e.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), n.__sentry_template_values__ = t, n
            }
            const yu = gu;

            function _u(e, t, n, r, o) {
                Ns({
                    level: e,
                    message: t,
                    attributes: n,
                    severityNumber: o
                }, r)
            }

            function vu(e, t, {
                scope: n
            } = {}) {
                _u("trace", e, t, n)
            }

            function bu(e, t, {
                scope: n
            } = {}) {
                _u("debug", e, t, n)
            }

            function Su(e, t, {
                scope: n
            } = {}) {
                _u("info", e, t, n)
            }

            function ku(e, t, {
                scope: n
            } = {}) {
                _u("warn", e, t, n)
            }

            function wu(e, t, {
                scope: n
            } = {}) {
                _u("error", e, t, n)
            }

            function xu(e, t, {
                scope: n
            } = {}) {
                _u("fatal", e, t, n)
            }

            function Eu(e, t, n, r = !0) {
                !n || !r && t in e || (e[t] = n)
            }

            function Tu(e, t) {
                const n = Au(),
                    r = Ru(e);
                void 0 === r ? n.set(e, [t]) : r.length >= 1e3 ? (Iu(e, r), n.set(e, [t])) : n.set(e, [...r, t])
            }

            function Cu(e, t) {
                const n = t ? .scope ? ? Ue(),
                    r = t ? .captureSerializedMetric ? ? Tu,
                    o = n ? .getClient() ? ? Ve();
                if (!o) return void(l && D.warn("No client available to capture metric."));
                const {
                    _experiments: s,
                    enableMetrics: i,
                    beforeSendMetric: a
                } = o.getOptions();
                if (!(i ? ? s ? .enableMetrics ? ? !0)) return void(l && D.warn("metrics option not enabled, metric will not be captured."));
                const {
                    user: c,
                    attributes: u
                } = go(ze(), n), d = function(e, t, n) {
                    const {
                        release: r,
                        environment: o
                    } = t.getOptions(), s = { ...e.attributes
                    };
                    Eu(s, "user.id", n.id, !1), Eu(s, "user.email", n.email, !1), Eu(s, "user.name", n.username, !1), Eu(s, "sentry.release", r), Eu(s, "sentry.environment", o);
                    const {
                        name: i,
                        version: a
                    } = t.getSdkMetadata() ? .sdk ? ? {};
                    Eu(s, "sentry.sdk.name", i), Eu(s, "sentry.sdk.version", a);
                    const c = t.getIntegrationByName("Replay"),
                        u = c ? .getReplayId(!0);
                    return Eu(s, "sentry.replay_id", u), u && "buffer" === c ? .getRecordingMode() && Eu(s, "sentry._internal.replay_is_buffering", !0), { ...e,
                        attributes: s
                    }
                }(e, o, c);
                o.emit("processMetric", d);
                const p = a || s ? .beforeSendMetric,
                    f = p ? p(d) : d;
                if (!f) return void(l && D.log("`beforeSendMetric` returned `null`, will not send metric."));
                const h = function(e, t, n, r) {
                    const [, o] = Ms(t, n), s = Ie(n), i = s ? s.spanContext().traceId : o ? .trace_id, a = s ? s.spanContext().spanId : void 0, c = _e(), u = As(c);
                    return {
                        timestamp: c,
                        trace_id: i ? ? "",
                        span_id: a,
                        name: e.name,
                        type: e.type,
                        unit: e.unit,
                        value: e.value,
                        attributes: { ...Cs(r),
                            ...Cs(e.attributes, "skip-undefined"),
                            [u.key]: u.value
                        }
                    }
                }(f, o, n, u);
                l && D.log("[Metric]", h), r(o, h), o.emit("afterCaptureMetric", f)
            }

            function Iu(e, t) {
                const n = t ? ? Ru(e) ? ? [];
                if (0 === n.length) return;
                const r = e.getOptions(),
                    o = function(e, t, n, r) {
                        const o = {};
                        return t ? .sdk && (o.sdk = {
                            name: t.sdk.name,
                            version: t.sdk.version
                        }), n && r && (o.dsn = xr(r)), Qo(o, [(s = e, [{
                            type: "trace_metric",
                            item_count: s.length,
                            content_type: "application/vnd.sentry.items.trace-metric+json"
                        }, {
                            items: s
                        }])]);
                        var s
                    }(n, r._metadata, r.tunnel, e.getDsn());
                Au().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(o)
            }

            function Ru(e) {
                return Au().get(e)
            }

            function Au() {
                return u("clientToMetricBufferMap", (() => new WeakMap))
            }

            function Mu(e, t, n, r) {
                Cu({
                    type: e,
                    name: t,
                    value: n,
                    unit: r ? .unit,
                    attributes: r ? .attributes
                }, {
                    scope: r ? .scope
                })
            }

            function Ou(e, t = 1, n) {
                Mu("counter", e, t, n)
            }

            function Pu(e, t, n) {
                Mu("gauge", e, t, n)
            }

            function Lu(e, t, n) {
                Mu("distribution", e, t, n)
            }
            const Nu = new Map,
                Du = new Set;

            function $u(e, t) {
                return function(e) {
                    if (s._sentryModuleMetadata)
                        for (const t of Object.keys(s._sentryModuleMetadata)) {
                            const n = s._sentryModuleMetadata[t];
                            if (Du.has(t)) continue;
                            Du.add(t);
                            const r = e(t);
                            for (const e of r.reverse())
                                if (e.filename) {
                                    Nu.set(e.filename, n);
                                    break
                                }
                        }
                }(e), Nu.get(t)
            }

            function Fu(e, t) {
                t.exception ? .values ? .forEach((t => {
                    t.stacktrace ? .frames ? .forEach((t => {
                        if (!t.filename || t.module_metadata) return;
                        const n = $u(e, t.filename);
                        n && (t.module_metadata = n)
                    }))
                }))
            }

            function ju(e) {
                e.exception ? .values ? .forEach((e => {
                    e.stacktrace ? .frames ? .forEach((e => {
                        delete e.module_metadata
                    }))
                }))
            }
            const Bu = () => ({
                name: "ModuleMetadata",
                setup(e) {
                    e.on("beforeEnvelope", (e => {
                        ts(e, ((e, t) => {
                            if ("event" === t) {
                                const t = Array.isArray(e) ? e[1] : void 0;
                                t && (ju(t), e[1] = t)
                            }
                        }))
                    })), e.on("applyFrameMetadata", (t => {
                        if (t.type) return;
                        Fu(e.getOptions().stackParser, t)
                    }))
                }
            });
            let Uu = null;

            function zu(e) {
                const t = "error";
                vs(t, e), bs(t, qu)
            }

            function qu() {
                Uu = s.onerror, s.onerror = function(e, t, n, r, o) {
                    return Ss("error", {
                        column: r,
                        error: o,
                        line: n,
                        msg: e,
                        url: t
                    }), !!Uu && Uu.apply(this, arguments)
                }, s.onerror.__SENTRY_INSTRUMENTED__ = !0
            }
            let Wu = null;

            function Hu(e) {
                const t = "unhandledrejection";
                vs(t, e), bs(t, Vu)
            }

            function Vu() {
                Wu = s.onunhandledrejection, s.onunhandledrejection = function(e) {
                    return Ss("unhandledrejection", e), !Wu || Wu.apply(this, arguments)
                }, s.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
            }
            let Ju = !1;

            function Gu() {
                function e() {
                    const e = ro(),
                        t = e && no(e);
                    if (t) {
                        const e = "internal_error";
                        l && D.log(`[Tracing] Root span: ${e} -> Global error occurred`), t.setStatus({
                            code: 2,
                            message: e
                        })
                    }
                }
                Ju || (e.tag = "sentry_tracingErrorCallback", Ju = !0, zu(e), Hu(e))
            }

            function Ku(e, t) {
                let n = 0;
                for (let t = e.length - 1; t >= 0; t--) {
                    const r = e[t];
                    "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
                }
                if (t)
                    for (; n--; n) e.unshift("..");
                return e
            }
            const Yu = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

            function Xu(e) {
                const t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
                    n = Yu.exec(t);
                return n ? n.slice(1) : []
            }

            function Zu(...e) {
                let t = "",
                    n = !1;
                for (let r = e.length - 1; r >= -1 && !n; r--) {
                    const o = r >= 0 ? e[r] : "/";
                    o && (t = `${o}/${t}`, n = "/" === o.charAt(0))
                }
                return t = Ku(t.split("/").filter((e => !!e)), !n).join("/"), (n ? "/" : "") + t || "."
            }

            function Qu(e) {
                let t = 0;
                for (; t < e.length && "" === e[t]; t++);
                let n = e.length - 1;
                for (; n >= 0 && "" === e[n]; n--);
                return t > n ? [] : e.slice(t, n - t + 1)
            }
            const el = (e = {}) => {
                const t = e.root,
                    n = e.prefix || "app:///",
                    r = "window" in s && !!s.window,
                    o = e.iteratee || function({
                        isBrowser: e,
                        root: t,
                        prefix: n
                    }) {
                        return r => {
                            if (!r.filename) return r;
                            const o = /^[a-zA-Z]:\\/.test(r.filename) || r.filename.includes("\\") && !r.filename.includes("/"),
                                s = /^\//.test(r.filename);
                            if (e) {
                                if (t) {
                                    const e = r.filename;
                                    0 === e.indexOf(t) && (r.filename = e.replace(t, n))
                                }
                            } else if (o || s) {
                                const e = o ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r.filename,
                                    s = t ? function(e, t) {
                                        e = Zu(e).slice(1), t = Zu(t).slice(1);
                                        const n = Qu(e.split("/")),
                                            r = Qu(t.split("/")),
                                            o = Math.min(n.length, r.length);
                                        let s = o;
                                        for (let e = 0; e < o; e++)
                                            if (n[e] !== r[e]) {
                                                s = e;
                                                break
                                            }
                                        let i = [];
                                        for (let e = s; e < n.length; e++) i.push("..");
                                        return i = i.concat(r.slice(s)), i.join("/")
                                    }(t, e) : function(e, t) {
                                        let n = Xu(e)[2] || "";
                                        return t && n.slice(-1 * t.length) === t && (n = n.slice(0, n.length - t.length)), n
                                    }(e);
                                r.filename = `${n}${s}`
                            }
                            return r
                        }
                    }({
                        isBrowser: r,
                        root: t,
                        prefix: n
                    });
                return {
                    name: "RewriteFrames",
                    processEvent(e) {
                        let t = e;
                        return e.exception && Array.isArray(e.exception.values) && (t = function(e) {
                            try {
                                return { ...e,
                                    exception: { ...e.exception,
                                        values: e.exception.values.map((e => {
                                            return { ...e,
                                                ...e.stacktrace && {
                                                    stacktrace: (t = e.stacktrace, { ...t,
                                                        frames: t ? .frames ? .map((e => o(e)))
                                                    })
                                                }
                                            };
                                            var t
                                        }))
                                    }
                                }
                            } catch {
                                return e
                            }
                        }(t)), t
                    }
                }
            };

            function tl(e) {
                Ue().setClient(e)
            }
            const nl = e => ({
                name: "ThirdPartyErrorsFilter",
                setup(e) {
                    e.on("beforeEnvelope", (e => {
                        ts(e, ((e, t) => {
                            if ("event" === t) {
                                const t = Array.isArray(e) ? e[1] : void 0;
                                t && (ju(t), e[1] = t)
                            }
                        }))
                    })), e.on("applyFrameMetadata", (t => {
                        if (t.type) return;
                        Fu(e.getOptions().stackParser, t)
                    }))
                },
                processEvent(t) {
                    const n = function(e, t) {
                        const n = te(e);
                        if (!n) return;
                        return n.filter(((e, n) => !!e.filename && ((null != e.lineno || null != e.colno || null != e.instruction_addr) && (!t || ! function(e, t) {
                            if (0 !== t || !e.context_line || !e.filename) return !1;
                            if (!e.filename.includes("sentry") || !e.filename.includes("helpers") || !e.context_line.includes(sl)) return !1;
                            if (e.pre_context) {
                                const t = e.pre_context.length;
                                for (let n = 0; n < t; n++)
                                    if (e.pre_context[n] ? .includes(ol)) return !0
                            }
                            return !1
                        }(e, n))))).map((e => e.module_metadata ? Object.keys(e.module_metadata).filter((e => e.startsWith(rl))).map((e => e.slice(rl.length))) : []))
                    }(t, e.ignoreSentryInternalFrames);
                    if (n) {
                        const r = n["drop-error-if-contains-third-party-frames" === e.behaviour || "apply-tag-if-contains-third-party-frames" === e.behaviour ? "some" : "every"]((t => !t.some((t => e.filterKeys.includes(t)))));
                        if (r) {
                            if ("drop-error-if-contains-third-party-frames" === e.behaviour || "drop-error-if-exclusively-contains-third-party-frames" === e.behaviour) return null;
                            t.tags = { ...t.tags,
                                third_party_code: !0
                            }
                        }
                    }
                    return t
                }
            });
            const rl = "_sentryBundlerPluginAppKey:",
                ol = "Attempt to invoke user-land function",
                sl = "fn.apply(this, wrappedArguments)";

            function il(e) {
                return { ...e,
                    path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
                    keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
                    unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0
                }
            }

            function al(e) {
                const t = new Set;
                for (const n of e.issues) {
                    const e = n.path.map((e => "number" == typeof e ? "<array>" : e)).join(".");
                    e.length > 0 && t.add(e)
                }
                const n = Array.from(t);
                if (0 === n.length) {
                    let t = "variable";
                    if (e.issues.length > 0) {
                        const n = e.issues[0];
                        void 0 !== n && "expected" in n && "string" == typeof n.expected && (t = n.expected)
                    }
                    return `Failed to validate ${t}`
                }
                return `Failed to validate keys: ${oe(n.join(", "),100)}`
            }

            function cl(e, t = !1, n, r) {
                if (!(n.exception ? .values && r.originalException && (o = r.originalException, p(o) && "ZodError" === o.name && Array.isArray(o.issues)) && 0 !== r.originalException.issues.length)) return n;
                var o;
                try {
                    const o = (t ? r.originalException.issues : r.originalException.issues.slice(0, e)).map(il);
                    return t && (Array.isArray(r.attachments) || (r.attachments = []), r.attachments.push({
                        filename: "zod_issues.json",
                        data: JSON.stringify({
                            issues: o
                        })
                    })), { ...n,
                        exception: { ...n.exception,
                            values: [{ ...n.exception.values[0],
                                value: al(r.originalException)
                            }, ...n.exception.values.slice(1)]
                        },
                        extra: { ...n.extra,
                            "zoderror.issues": o.slice(0, e)
                        }
                    }
                } catch (e) {
                    return { ...n,
                        extra: { ...n.extra,
                            "zoderrors sentry integration parse error": {
                                message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
                                error: e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : "unknown"
                            }
                        }
                    }
                }
            }
            const ul = (e = {}) => {
                const t = e.limit ? ? 10;
                return {
                    name: "ZodErrors",
                    processEvent: (n, r) => cl(t, e.saveZodIssuesAsAttachment, n, r)
                }
            };
            const ll = "Not capturing exception because it's already been captured.",
                dl = "Discarded session because of missing or non-string release",
                pl = Symbol.for("SentryInternalError"),
                fl = Symbol.for("SentryDoNotSendEventError");

            function hl(e) {
                return {
                    message: e,
                    [pl]: !0
                }
            }

            function ml(e) {
                return {
                    message: e,
                    [fl]: !0
                }
            }

            function gl(e) {
                return !!e && "object" == typeof e && pl in e
            }

            function yl(e) {
                return !!e && "object" == typeof e && fl in e
            }

            function _l(e, t, n, r, o) {
                let s, i = 0,
                    a = !1;
                e.on(n, (() => {
                    i = 0, clearTimeout(s), a = !1
                })), e.on(t, (t => {
                    i += r(t), i >= 8e5 ? o(e) : a || (a = !0, s = Ua(setTimeout((() => {
                        o(e)
                    }), 5e3)))
                })), e.on("flush", (() => {
                    o(e)
                }))
            }
            class vl {
                constructor(e) {
                    if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = qa(e.transportOptions ? .bufferSize ? ? 64), e.dsn ? this._dsn = Ir(e.dsn) : l && D.warn("No DSN provided, client will not send events."), this._dsn) {
                        const t = Zo(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
                        this._transport = e.transport({
                            tunnel: this._options.tunnel,
                            recordDroppedEvent: this.recordDroppedEvent.bind(this),
                            ...e.transportOptions,
                            url: t
                        })
                    }
                    this._options.enableLogs = this._options.enableLogs ? ? this._options._experiments ? .enableLogs, this._options.enableLogs && _l(this, "afterCaptureLog", "flushLogs", xl, Ds);
                    (this._options.enableMetrics ? ? this._options._experiments ? .enableMetrics ? ? !0) && _l(this, "afterCaptureMetric", "flushMetrics", wl, Iu)
                }
                captureException(e, t, n) {
                    const r = le();
                    if (me(e)) return l && D.log(ll), r;
                    const o = {
                        event_id: r,
                        ...t
                    };
                    return this._process((() => this.eventFromException(e, o).then((e => this._captureEvent(e, o, n))).then((e => e))), "error"), o.event_id
                }
                captureMessage(e, t, n, r) {
                    const o = {
                            event_id: le(),
                            ...n
                        },
                        s = y(e) ? e : String(e),
                        i = _(e),
                        a = i ? this.eventFromMessage(s, t, o) : this.eventFromException(e, o);
                    return this._process((() => a.then((e => this._captureEvent(e, o, r)))), i ? "unknown" : "error"), o.event_id
                }
                captureEvent(e, t, n) {
                    const r = le();
                    if (t ? .originalException && me(t.originalException)) return l && D.log(ll), r;
                    const o = {
                            event_id: r,
                            ...t
                        },
                        s = e.sdkProcessingMetadata || {},
                        i = s.capturedSpanScope,
                        a = s.capturedSpanIsolationScope,
                        c = bl(e.type);
                    return this._process((() => this._captureEvent(e, o, i || n, a)), c), o.event_id
                }
                captureSession(e) {
                    this.sendSession(e), ke(e, {
                        init: !1
                    })
                }
                getDsn() {
                    return this._dsn
                }
                getOptions() {
                    return this._options
                }
                getSdkMetadata() {
                    return this._options._metadata
                }
                getTransport() {
                    return this._transport
                }
                async flush(e) {
                    const t = this._transport;
                    if (!t) return !0;
                    this.emit("flush");
                    const n = await this._isClientDoneProcessing(e),
                        r = await t.flush(e);
                    return n && r
                }
                async close(e) {
                    Ds(this);
                    const t = await this.flush(e);
                    return this.getOptions().enabled = !1, this.emit("close"), t
                }
                getEventProcessors() {
                    return this._eventProcessors
                }
                addEventProcessor(e) {
                    this._eventProcessors.push(e)
                }
                init() {
                    (this._isEnabled() || this._options.integrations.some((({
                        name: e
                    }) => e.startsWith("Spotlight")))) && this._setupIntegrations()
                }
                getIntegrationByName(e) {
                    return this._integrations[e]
                }
                addIntegration(e) {
                    const t = this._integrations[e.name];
                    Ze(this, e, this._integrations), t || Xe(this, [e])
                }
                sendEvent(e, t = {}) {
                    this.emit("beforeSendEvent", e, t);
                    let n = function(e, t, n, r) {
                        const o = ls(n),
                            s = e.type && "replay_event" !== e.type ? e.type : "event";
                        ! function(e, t) {
                            if (!t) return e;
                            const n = e.sdk || {};
                            e.sdk = { ...n,
                                name: n.name || t.name,
                                version: n.version || t.version,
                                integrations: [...e.sdk ? .integrations || [], ...t.integrations || []],
                                packages: [...e.sdk ? .packages || [], ...t.packages || []],
                                settings: e.sdk ? .settings || t.settings ? { ...e.sdk ? .settings,
                                    ...t.settings
                                } : void 0
                            }
                        }(e, n ? .sdk);
                        const i = ds(e, o, r, t);
                        return delete e.sdkProcessingMetadata, Qo(i, [
                            [{
                                type: s
                            }, e]
                        ])
                    }(e, this._dsn, this._options._metadata, this._options.tunnel);
                    for (const e of t.attachments || []) n = es(n, as(e));
                    this.sendEnvelope(n).then((t => this.emit("afterSendEvent", e, t)))
                }
                sendSession(e) {
                    const {
                        release: t,
                        environment: n = Wn
                    } = this._options;
                    if ("aggregates" in e) {
                        const r = e.attrs || {};
                        if (!r.release && !t) return void(l && D.warn(dl));
                        r.release = r.release || t, r.environment = r.environment || n, e.attrs = r
                    } else {
                        if (!e.release && !t) return void(l && D.warn(dl));
                        e.release = e.release || t, e.environment = e.environment || n
                    }
                    this.emit("beforeSendSession", e);
                    const r = function(e, t, n, r) {
                        const o = ls(n);
                        return Qo({
                            sent_at: (new Date).toISOString(),
                            ...o && {
                                sdk: o
                            },
                            ...!!r && t && {
                                dsn: xr(t)
                            }
                        }, ["aggregates" in e ? [{
                            type: "sessions"
                        }, e] : [{
                            type: "session"
                        }, e.toJSON()]])
                    }(e, this._dsn, this._options._metadata, this._options.tunnel);
                    this.sendEnvelope(r)
                }
                recordDroppedEvent(e, t, n = 1) {
                    if (this._options.sendClientReports) {
                        const r = `${e}:${t}`;
                        l && D.log(`Recording outcome: "${r}"${n>1?` (${n} times)`:""}`), this._outcomes[r] = (this._outcomes[r] || 0) + n
                    }
                }
                on(e, t) {
                    const n = this._hooks[e] = this._hooks[e] || new Set,
                        r = (...e) => t(...e);
                    return n.add(r), () => {
                        n.delete(r)
                    }
                }
                emit(e, ...t) {
                    const n = this._hooks[e];
                    n && n.forEach((e => e(...t)))
                }
                async sendEnvelope(e) {
                    if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) try {
                        return await this._transport.send(e)
                    } catch (e) {
                        return l && D.error("Error while sending envelope:", e), {}
                    }
                    return l && D.error("Transport disabled"), {}
                }
                dispose() {}
                _setupIntegrations() {
                    const {
                        integrations: e
                    } = this._options;
                    this._integrations = function(e, t) {
                        const n = {};
                        return t.forEach((t => {
                            t && Ze(e, t, n)
                        })), n
                    }(this, e), Xe(this, e)
                }
                _updateSessionFromEvent(e, t) {
                    let n = "fatal" === t.level,
                        r = !1;
                    const o = t.exception ? .values;
                    if (o) {
                        r = !0, n = !1;
                        for (const e of o)
                            if (!1 === e.mechanism ? .handled) {
                                n = !0;
                                break
                            }
                    }
                    const s = "ok" === e.status;
                    (s && 0 === e.errors || s && n) && (ke(e, { ...n && {
                            status: "crashed"
                        },
                        errors: e.errors || Number(r || n)
                    }), this.captureSession(e))
                }
                async _isClientDoneProcessing(e) {
                    let t = 0;
                    for (; !e || t < e;) {
                        if (await new Promise((e => setTimeout(e, 1))), !this._numProcessing) return !0;
                        t++
                    }
                    return !1
                }
                _isEnabled() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._transport
                }
                _prepareEvent(e, t, n, r) {
                    const o = this.getOptions(),
                        s = Object.keys(this._integrations);
                    return !t.integrations && s ? .length && (t.integrations = s), this.emit("preprocessEvent", e, t), e.type || r.setLastEventId(e.event_id || t.event_id), yo(o, e, t, n, this, r).then((e => {
                        if (null === e) return e;
                        this.emit("postprocessEvent", e, t), e.contexts = {
                            trace: { ...e.contexts ? .trace,
                                ...Je(n)
                            },
                            ...e.contexts
                        };
                        const r = uo(this, n);
                        return e.sdkProcessingMetadata = {
                            dynamicSamplingContext: r,
                            ...e.sdkProcessingMetadata
                        }, e
                    }))
                }
                _captureEvent(e, t = {}, n = Ue(), r = ze()) {
                    return l && Sl(e) && D.log(`Captured error event \`${Za(e)[0]||"<unknown>"}\``), this._processEvent(e, t, n, r).then((e => e.event_id), (e => {
                        l && (yl(e) ? D.log(e.message) : gl(e) ? D.warn(e.message) : D.warn(e))
                    }))
                }
                _processEvent(e, t, n, r) {
                    const o = this.getOptions(),
                        {
                            sampleRate: s
                        } = o,
                        i = kl(e),
                        a = Sl(e),
                        c = `before send for type \`${e.type||"error"}\``,
                        u = void 0 === s ? void 0 : $r(s);
                    if (a && "number" == typeof u && V() > u) return this.recordDroppedEvent("sample_rate", "error"), Vn(ml(`Discarding event because it's not included in the random sample (sampling rate = ${s})`));
                    const l = bl(e.type);
                    return this._prepareEvent(e, t, n, r).then((e => {
                        if (null === e) throw this.recordDroppedEvent("event_processor", l), ml("An event processor returned `null`, will not send event.");
                        if (!0 === t.data ? .__sentry__) return e;
                        const n = function(e, t, n, r) {
                            const {
                                beforeSend: o,
                                beforeSendTransaction: s,
                                beforeSendSpan: i,
                                ignoreSpans: a
                            } = t;
                            let c = n;
                            if (Sl(c) && o) return o(c, r);
                            if (kl(c)) {
                                if (i || a) {
                                    const t = function(e) {
                                        const {
                                            trace_id: t,
                                            parent_span_id: n,
                                            span_id: r,
                                            status: o,
                                            origin: s,
                                            data: i,
                                            op: a
                                        } = e.contexts ? .trace ? ? {};
                                        return {
                                            data: i ? ? {},
                                            description: e.transaction,
                                            op: a,
                                            parent_span_id: n,
                                            span_id: r ? ? "",
                                            start_timestamp: e.start_timestamp ? ? 0,
                                            status: o,
                                            timestamp: e.timestamp,
                                            trace_id: t ? ? "",
                                            origin: s,
                                            profile_id: i ? .[fr],
                                            exclusive_time: i ? .[hr],
                                            measurements: e.measurements,
                                            is_segment: !0
                                        }
                                    }(c);
                                    if (a ? .length && Js(t, a)) return null;
                                    if (i) {
                                        const e = i(t);
                                        e ? c = we(n, {
                                            type: "transaction",
                                            timestamp: (u = e).timestamp,
                                            start_timestamp: u.start_timestamp,
                                            transaction: u.description,
                                            contexts: {
                                                trace: {
                                                    trace_id: u.trace_id,
                                                    span_id: u.span_id,
                                                    parent_span_id: u.parent_span_id,
                                                    op: u.op,
                                                    status: u.status,
                                                    origin: u.origin,
                                                    data: { ...u.data,
                                                        ...u.profile_id && {
                                                            [fr]: u.profile_id
                                                        },
                                                        ...u.exclusive_time && {
                                                            [hr]: u.exclusive_time
                                                        }
                                                    }
                                                }
                                            },
                                            measurements: u.measurements
                                        }) : oo()
                                    }
                                    if (c.spans) {
                                        const t = [],
                                            n = c.spans;
                                        for (const e of n)
                                            if (a ? .length && Js(e, a)) Gs(n, e);
                                            else if (i) {
                                            const n = i(e);
                                            n ? t.push(n) : (oo(), t.push(e))
                                        } else t.push(e);
                                        const r = c.spans.length - t.length;
                                        r && e.recordDroppedEvent("before_send", "span", r), c.spans = t
                                    }
                                }
                                if (s) {
                                    if (c.spans) {
                                        const e = c.spans.length;
                                        c.sdkProcessingMetadata = { ...n.sdkProcessingMetadata,
                                            spanCountBeforeProcessing: e
                                        }
                                    }
                                    return s(c, r)
                                }
                            }
                            var u;
                            return c
                        }(this, o, e, t);
                        return function(e, t) {
                            const n = `${t} must return \`null\` or a valid event.`;
                            if (S(e)) return e.then((e => {
                                if (!v(e) && null !== e) throw hl(n);
                                return e
                            }), (e => {
                                throw hl(`${t} rejected with ${e}`)
                            }));
                            if (!v(e) && null !== e) throw hl(n);
                            return e
                        }(n, c)
                    })).then((o => {
                        if (null === o) {
                            if (this.recordDroppedEvent("before_send", l), i) {
                                const t = 1 + (e.spans || []).length;
                                this.recordDroppedEvent("before_send", "span", t)
                            }
                            throw ml(`${c} returned \`null\`, will not send event.`)
                        }
                        const s = n.getSession() || r.getSession();
                        if (a && s && this._updateSessionFromEvent(s, o), i) {
                            const e = (o.sdkProcessingMetadata ? .spanCountBeforeProcessing || 0) - (o.spans ? o.spans.length : 0);
                            e > 0 && this.recordDroppedEvent("before_send", "span", e)
                        }
                        const u = o.transaction_info;
                        if (i && u && o.transaction !== e.transaction) {
                            const e = "custom";
                            o.transaction_info = { ...u,
                                source: e
                            }
                        }
                        return this.sendEvent(o, t), o
                    })).then(null, (e => {
                        if (yl(e) || gl(e)) throw e;
                        throw this.captureException(e, {
                            mechanism: {
                                handled: !1,
                                type: "internal"
                            },
                            data: {
                                __sentry__: !0
                            },
                            originalException: e
                        }), hl(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)
                    }))
                }
                _process(e, t) {
                    this._numProcessing++, this._promiseBuffer.add(e).then((e => (this._numProcessing--, e)), (e => (this._numProcessing--, e === za && this.recordDroppedEvent("queue_overflow", t), e)))
                }
                _clearOutcomes() {
                    const e = this._outcomes;
                    return this._outcomes = {}, Object.entries(e).map((([e, t]) => {
                        const [n, r] = e.split(":");
                        return {
                            reason: n,
                            category: r,
                            quantity: t
                        }
                    }))
                }
                _flushOutcomes() {
                    l && D.log("Flushing outcomes...");
                    const e = this._clearOutcomes();
                    if (0 === e.length) return void(l && D.log("No outcomes to send"));
                    if (!this._dsn) return void(l && D.log("No dsn provided, will not send outcomes"));
                    l && D.log("Sending outcomes:", e);
                    const t = (n = e, Qo((r = this._options.tunnel && xr(this._dsn)) ? {
                        dsn: r
                    } : {}, [
                        [{
                            type: "client_report"
                        }, {
                            timestamp: o || ge(),
                            discarded_events: n
                        }]
                    ]));
                    var n, r, o;
                    this.sendEnvelope(t)
                }
            }

            function bl(e) {
                return "replay_event" === e ? "replay" : e || "error"
            }

            function Sl(e) {
                return void 0 === e.type
            }

            function kl(e) {
                return "transaction" === e.type
            }

            function wl(e) {
                let t = 0;
                return e.name && (t += 2 * e.name.length), t += 8, t + El(e.attributes)
            }

            function xl(e) {
                let t = 0;
                return e.message && (t += 2 * e.message.length), t + El(e.attributes)
            }

            function El(e) {
                if (!e) return 0;
                let t = 0;
                return Object.values(e).forEach((e => {
                    Array.isArray(e) ? t += e.length * Tl(e[0]) : _(e) ? t += Tl(e) : t += 100
                })), t
            }

            function Tl(e) {
                return "string" == typeof e ? 2 * e.length : "number" == typeof e ? 8 : "boolean" == typeof e ? 4 : 0
            }

            function Cl(e, t, n = [t], r = "npm") {
                const o = (e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {};
                o.name || (o.name = `sentry.javascript.${t}`, o.packages = n.map((e => ({
                    name: `${r}:@sentry/${e}`,
                    version: i
                }))), o.version = i)
            }

            function Il(e) {
                "aggregates" in e ? void 0 === e.attrs ? .ip_address && (e.attrs = { ...e.attrs,
                    ip_address: "{{auto}}"
                }) : void 0 === e.ipAddress && (e.ipAddress = "{{auto}}")
            }

            function Rl(e) {
                return function(e) {
                    return p(e) && "__sentry_fetch_url_host__" in e && "string" == typeof e.__sentry_fetch_url_host__
                }(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message
            }

            function Al(e, t) {
                const n = Pl(e, t),
                    r = {
                        type: Dl(t),
                        value: $l(t)
                    };
                return n.length && (r.stacktrace = {
                    frames: n
                }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
            }

            function Ml(e, t, n, r) {
                const o = Ve(),
                    s = o ? .getOptions().normalizeDepth,
                    i = (a = t, Object.values(a).find((e => e instanceof Error)));
                var a;
                const c = {
                    __serialized__: nr(t, s)
                };
                if (i) return {
                    exception: {
                        values: [Al(e, i)]
                    },
                    extra: c
                };
                const u = {
                    exception: {
                        values: [{
                            type: b(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                            value: zl(t, {
                                isUnhandledRejection: r
                            })
                        }]
                    },
                    extra: c
                };
                if (n) {
                    const t = Pl(e, n);
                    t.length && (u.exception.values[0].stacktrace = {
                        frames: t
                    })
                }
                return u
            }

            function Ol(e, t) {
                return {
                    exception: {
                        values: [Al(e, t)]
                    }
                }
            }

            function Pl(e, t) {
                const n = t.stacktrace || t.stack || "",
                    r = function(e) {
                        if (e && Ll.test(e.message)) return 1;
                        return 0
                    }(t),
                    o = function(e) {
                        if ("number" == typeof e.framesToPop) return e.framesToPop;
                        return 0
                    }(t);
                try {
                    return e(n, r, o)
                } catch {}
                return []
            }
            const Ll = /Minified React error #\d+;/i;

            function Nl(e) {
                return "undefined" != typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception
            }

            function Dl(e) {
                const t = e ? .name;
                if (!t && Nl(e)) {
                    return e.message && Array.isArray(e.message) && 2 == e.message.length ? e.message[0] : "WebAssembly.Exception"
                }
                return t
            }

            function $l(e) {
                const t = e ? .message;
                return Nl(e) ? Array.isArray(e.message) && 2 == e.message.length ? e.message[1] : "wasm exception" : t ? t.error && "string" == typeof t.error.message ? Rl(t.error) : Rl(e) : "No error message"
            }

            function Fl(e, t, n, r) {
                const o = Bl(e, t, n ? .syntheticException || void 0, r);
                return he(o), o.level = "error", n ? .event_id && (o.event_id = n.event_id), Hn(o)
            }

            function jl(e, t, n = "info", r, o) {
                const s = Ul(e, t, r ? .syntheticException || void 0, o);
                return s.level = n, r ? .event_id && (s.event_id = r.event_id), Hn(s)
            }

            function Bl(e, t, n, r, o) {
                let s;
                if (h(t) && t.error) {
                    return Ol(e, t.error)
                }
                if (m(t) || f(t, "DOMException")) {
                    const o = t;
                    if ("stack" in t) s = Ol(e, t);
                    else {
                        const t = o.name || (m(o) ? "DOMError" : "DOMException"),
                            i = o.message ? `${t}: ${o.message}` : t;
                        s = Ul(e, i, n, r), fe(s, i)
                    }
                    return "code" in o && (s.tags = { ...s.tags,
                        "DOMException.code": `${o.code}`
                    }), s
                }
                if (p(t)) return Ol(e, t);
                if (v(t) || b(t)) {
                    return s = Ml(e, t, n, o), he(s, {
                        synthetic: !0
                    }), s
                }
                return s = Ul(e, t, n, r), fe(s, `${t}`, void 0), he(s, {
                    synthetic: !0
                }), s
            }

            function Ul(e, t, n, r) {
                const o = {};
                if (r && n) {
                    const r = Pl(e, n);
                    r.length && (o.exception = {
                        values: [{
                            value: t,
                            stacktrace: {
                                frames: r
                            }
                        }]
                    }), he(o, {
                        synthetic: !0
                    })
                }
                if (y(t)) {
                    const {
                        __sentry_template_string__: e,
                        __sentry_template_values__: n
                    } = t;
                    return o.logentry = {
                        message: e,
                        params: n
                    }, o
                }
                return o.message = t, o
            }

            function zl(e, {
                isUnhandledRejection: t
            }) {
                const n = function(e) {
                        const t = Object.keys(U(e));
                        return t.sort(), t[0] ? t.join(", ") : "[object has no keys]"
                    }(e),
                    r = t ? "promise rejection" : "exception";
                if (h(e)) return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                if (b(e)) {
                    return `Event \`${function(e){try{const t=Object.getPrototypeOf(e);return t?t.constructor.name:void 0}catch{}}(e)}\` (type=${e.type}) captured as ${r}`
                }
                return `Object captured as ${r} with keys: ${n}`
            }
            class ql extends vl {
                constructor(e) {
                    const t = (n = e, {
                        release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : Bo.SENTRY_RELEASE ? .id,
                        sendClientReports: !0,
                        parentSpanIsAlwaysRootSpan: !0,
                        ...n
                    });
                    var n;
                    Cl(t, "browser", ["browser"], Bo.SENTRY_SDK_SOURCE || "npm"), t._metadata ? .sdk && (t._metadata.sdk.settings = {
                        infer_ip: t.sendDefaultPii ? "auto" : "never",
                        ...t._metadata.sdk.settings
                    }), super(t);
                    const {
                        sendDefaultPii: r,
                        sendClientReports: o,
                        enableLogs: s,
                        _experiments: i,
                        enableMetrics: a
                    } = this._options, c = a ? ? i ? .enableMetrics ? ? !0;
                    Bo.document && (o || s || c) && Bo.document.addEventListener("visibilitychange", (() => {
                        "hidden" === Bo.document.visibilityState && (o && this._flushOutcomes(), s && Ds(this), c && Iu(this))
                    })), r && this.on("beforeSendSession", Il)
                }
                eventFromException(e, t) {
                    return Fl(this._options.stackParser, e, t, this._options.attachStacktrace)
                }
                eventFromMessage(e, t = "info", n) {
                    return jl(this._options.stackParser, e, t, n, this._options.attachStacktrace)
                }
                _prepareEvent(e, t, n, r) {
                    return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r)
                }
            }
            const Wl = s;

            function Hl() {
                if (!("fetch" in Wl)) return !1;
                try {
                    return new Headers, new Request("data:,"), new Response, !0
                } catch {
                    return !1
                }
            }

            function Vl(e) {
                return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
            }

            function Jl() {
                if ("string" == typeof EdgeRuntime) return !0;
                if (!Hl()) return !1;
                if (Vl(Wl.fetch)) return !0;
                let e = !1;
                const t = Wl.document;
                if (t && "function" == typeof t.createElement) try {
                    const n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n), n.contentWindow ? .fetch && (e = Vl(n.contentWindow.fetch)), t.head.removeChild(n)
                } catch (e) {
                    l && D.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                }
                return e
            }
            const Gl = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
                Kl = s,
                Yl = {};

            function Xl(e) {
                const t = Yl[e];
                if (t) return t;
                let n = Kl[e];
                if (Vl(n)) return Yl[e] = n.bind(Kl);
                const r = Kl.document;
                if (r && "function" == typeof r.createElement) try {
                    const t = r.createElement("iframe");
                    t.hidden = !0, r.head.appendChild(t);
                    const o = t.contentWindow;
                    o ? .[e] && (n = o[e]), r.head.removeChild(t)
                } catch (t) {
                    Gl && D.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t)
                }
                return n ? Yl[e] = n.bind(Kl) : n
            }

            function Zl(...e) {
                return Xl("setTimeout")(...e)
            }

            function Ql(e, t = Xl("fetch")) {
                let n = 0,
                    r = 0;
                return Ja(e, (async function(o) {
                    const s = o.body.length;
                    n += s, r++;
                    const i = {
                        body: o.body,
                        method: "POST",
                        referrerPolicy: "strict-origin",
                        headers: e.headers,
                        keepalive: n <= 6e4 && r < 15,
                        ...e.fetchOptions
                    };
                    try {
                        const n = await t(e.url, i);
                        return {
                            statusCode: n.status,
                            headers: {
                                "x-sentry-rate-limits": n.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": n.headers.get("Retry-After")
                            }
                        }
                    } catch (e) {
                        throw Yl["fetch"] = void 0, e
                    } finally {
                        n -= s, r--
                    }
                }), qa(e.bufferSize || 40))
            }
            const ed = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
            const td = {
                startProfiler: function() {
                    const e = Ve();
                    if (!e) return void(ed && D.warn("No Sentry client available, profiling is not started"));
                    e.getIntegrationByName("BrowserProfiling") ? e.emit("startUIProfiler") : ed && D.warn("BrowserProfiling integration is not available")
                },
                stopProfiler: function() {
                    const e = Ve();
                    if (!e) return void(ed && D.warn("No Sentry client available, profiling is not started"));
                    e.getIntegrationByName("BrowserProfiling") ? e.emit("stopUIProfiler") : ed && D.warn("ProfilingIntegration is not available")
                }
            };

            function nd(e, t, n, r) {
                const o = {
                    filename: e,
                    function: "<anonymous>" === t ? G : t,
                    in_app: !0
                };
                return void 0 !== n && (o.lineno = n), void 0 !== r && (o.colno = r), o
            }
            const rd = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
                od = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                sd = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                id = /at (.+?) ?\(data:(.+?),/,
                ad = [30, e => {
                    const t = e.match(id);
                    if (t) return {
                        filename: `<data:${t[2]}>`,
                        function: t[1]
                    };
                    const n = rd.exec(e);
                    if (n) {
                        const [, e, t, r] = n;
                        return nd(e, G, +t, +r)
                    }
                    const r = od.exec(e);
                    if (r) {
                        if (0 === r[2] ? .indexOf("eval")) {
                            const e = sd.exec(r[2]);
                            e && (r[2] = e[1], r[3] = e[2], r[4] = e[3])
                        }
                        const [e, t] = vd(r[1] || G, r[2]);
                        return nd(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0)
                    }
                }],
                cd = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                ud = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                ld = [50, e => {
                    const t = cd.exec(e);
                    if (t) {
                        if (t[3] && t[3].indexOf(" > eval") > -1) {
                            const e = ud.exec(t[3]);
                            e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
                        }
                        let e = t[3],
                            n = t[1] || G;
                        return [n, e] = vd(n, e), nd(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                    }
                }],
                dd = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                pd = [40, e => {
                    const t = dd.exec(e);
                    return t ? nd(t[2], t[1] || G, +t[3], t[4] ? +t[4] : void 0) : void 0
                }],
                fd = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                hd = [10, e => {
                    const t = fd.exec(e);
                    return t ? nd(t[2], t[3] || G, +t[1]) : void 0
                }],
                md = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
                gd = [20, e => {
                    const t = md.exec(e);
                    return t ? nd(t[5], t[3] || t[4] || G, +t[1], +t[2]) : void 0
                }],
                yd = [ad, ld],
                _d = X(...yd),
                vd = (e, t) => {
                    const n = -1 !== e.indexOf("safari-extension"),
                        r = -1 !== e.indexOf("safari-web-extension");
                    return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : G, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
                };

            function bd(e, {
                metadata: t,
                tunnel: n,
                dsn: r
            }) {
                const o = {
                        event_id: e.event_id,
                        sent_at: (new Date).toISOString(),
                        ...t ? .sdk && {
                            sdk: {
                                name: t.sdk.name,
                                version: t.sdk.version
                            }
                        },
                        ...!!n && !!r && {
                            dsn: xr(r)
                        }
                    },
                    s = function(e) {
                        return [{
                            type: "user_report"
                        }, e]
                    }(e);
                return Qo(o, [s])
            }
            const Sd = () => ({
                name: "ConversationId",
                setup(e) {
                    e.on("spanStart", (e => {
                        const t = Ue().getScopeData(),
                            n = ze().getScopeData(),
                            r = t.conversationId || n.conversationId;
                        r && e.setAttribute("gen_ai.conversation.id", r)
                    }))
                }
            });

            function kd(e, t) {
                const n = "fetch";
                vs(n, e), bs(n, (() => wd(void 0, t)))
            }

            function wd(e, t = !1) {
                t && !Jl() || $(s, "fetch", (function(t) {
                    return function(...n) {
                        const r = new Error,
                            {
                                method: o,
                                url: i
                            } = function(e) {
                                if (0 === e.length) return {
                                    method: "GET",
                                    url: ""
                                };
                                if (2 === e.length) {
                                    const [t, n] = e;
                                    return {
                                        url: Td(t),
                                        method: Ed(n, "method") ? String(n.method).toUpperCase() : x(t) && Ed(t, "method") ? String(t.method).toUpperCase() : "GET"
                                    }
                                }
                                const t = e[0];
                                return {
                                    url: Td(t),
                                    method: Ed(t, "method") ? String(t.method).toUpperCase() : "GET"
                                }
                            }(n),
                            a = {
                                args: n,
                                fetchData: {
                                    method: o,
                                    url: i
                                },
                                startTimestamp: 1e3 * _e(),
                                virtualError: r,
                                headers: Cd(n)
                            };
                        return e || Ss("fetch", { ...a
                        }), t.apply(s, n).then((async t => (e ? e(t) : Ss("fetch", { ...a,
                            endTimestamp: 1e3 * _e(),
                            response: t
                        }), t)), (e => {
                            Ss("fetch", { ...a,
                                endTimestamp: 1e3 * _e(),
                                error: e
                            }), p(e) && void 0 === e.stack && (e.stack = r.stack, F(e, "framesToPop", 1));
                            const t = Ve(),
                                n = t ? .getOptions().enhanceFetchErrorMessages ? ? "always";
                            if (!1 !== n && e instanceof TypeError && ("Failed to fetch" === e.message || "Load failed" === e.message || "NetworkError when attempting to fetch resource." === e.message)) try {
                                const t = new URL(a.fetchData.url).host;
                                "always" === n ? e.message = `${e.message} (${t})` : F(e, "__sentry_fetch_url_host__", t)
                            } catch {}
                            throw e
                        }))
                    }
                }))
            }

            function xd(e) {
                let t;
                try {
                    t = e.clone()
                } catch {
                    return
                }!async function(e, t) {
                    if (e ? .body) {
                        const n = e.body,
                            r = n.getReader(),
                            o = setTimeout((() => {
                                n.cancel().then(null, (() => {}))
                            }), 9e4);
                        let s = !0;
                        for (; s;) {
                            let e;
                            try {
                                e = setTimeout((() => {
                                    n.cancel().then(null, (() => {}))
                                }), 5e3);
                                const {
                                    done: o
                                } = await r.read();
                                clearTimeout(e), o && (t(), s = !1)
                            } catch {
                                s = !1
                            } finally {
                                clearTimeout(e)
                            }
                        }
                        clearTimeout(o), r.releaseLock(), n.cancel().then(null, (() => {}))
                    }
                }(t, (() => {
                    Ss("fetch-body-resolved", {
                        endTimestamp: 1e3 * _e(),
                        response: e
                    })
                }))
            }

            function Ed(e, t) {
                return !!e && "object" == typeof e && !!e[t]
            }

            function Td(e) {
                return "string" == typeof e ? e : e ? Ed(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
            }

            function Cd(e) {
                const [t, n] = e;
                try {
                    if ("object" == typeof n && null !== n && "headers" in n && n.headers) return new Headers(n.headers);
                    if (x(t)) return new Headers(t.headers)
                } catch {}
            }

            function Id(e) {
                return void 0 === e ? void 0 : e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
            }

            function Rd(e) {
                return "isRelative" in e
            }

            function Ad(e, t) {
                const n = e.indexOf("://") <= 0 && 0 !== e.indexOf("//"),
                    r = t ? ? (n ? "thismessage:/" : void 0);
                try {
                    if ("canParse" in URL && !URL.canParse(e, r)) return;
                    const t = new URL(e, r);
                    return n ? {
                        isRelative: n,
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash
                    } : t
                } catch {}
            }

            function Md(e) {
                if (Rd(e)) return e.pathname;
                const t = new URL(e);
                return t.search = "", t.hash = "", ["80", "443"].includes(t.port) && (t.port = ""), t.password && (t.password = "%filtered%"), t.username && (t.username = "%filtered%"), t.toString()
            }

            function Od(e) {
                if (!e) return {};
                const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                const n = t[6] || "",
                    r = t[8] || "";
                return {
                    host: t[4],
                    path: t[5],
                    protocol: t[2],
                    search: n,
                    hash: r,
                    relative: t[5] + n + r
                }
            }

            function Pd(e) {
                return e.split(/[?#]/, 1)[0]
            }

            function Ld(e, t = !0) {
                if (e.startsWith("data:")) {
                    const n = e.match(/^data:([^;,]+)/),
                        r = n ? n[1] : "text/plain",
                        o = e.includes(";base64,"),
                        s = e.indexOf(",");
                    let i = "";
                    if (t && -1 !== s) {
                        const t = e.slice(s + 1);
                        i = t.length > 10 ? `${t.slice(0,10)}... [truncated]` : t
                    }
                    return `data:${r}${o?",base64":""}${i?`,${i}`:""}`
                }
                return e
            }
            let Nd, Dd, $d;

            function Fd(e) {
                vs("dom", e), bs("dom", jd)
            }

            function jd() {
                if (!Kl.document) return;
                const e = Ss.bind(null, "dom"),
                    t = Bd(e, !0);
                Kl.document.addEventListener("click", t, !1), Kl.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((t => {
                    const n = Kl,
                        r = n[t] ? .prototype;
                    r ? .hasOwnProperty ? .("addEventListener") && ($(r, "addEventListener", (function(t) {
                        return function(n, r, o) {
                            if ("click" === n || "keypress" == n) try {
                                const r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                    s = r[n] = r[n] || {
                                        refCount: 0
                                    };
                                if (!s.handler) {
                                    const r = Bd(e);
                                    s.handler = r, t.call(this, n, r, o)
                                }
                                s.refCount++
                            } catch {}
                            return t.call(this, n, r, o)
                        }
                    })), $(r, "removeEventListener", (function(e) {
                        return function(t, n, r) {
                            if ("click" === t || "keypress" == t) try {
                                const n = this.__sentry_instrumentation_handlers__ || {},
                                    o = n[t];
                                o && (o.refCount--, o.refCount <= 0 && (e.call(this, t, o.handler, r), o.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                            } catch {}
                            return e.call(this, t, n, r)
                        }
                    })))
                }))
            }

            function Bd(e, t = !1) {
                return n => {
                    if (!n || n._sentryCaptured) return;
                    const r = function(e) {
                        try {
                            return e.target
                        } catch {
                            return null
                        }
                    }(n);
                    if (function(e, t) {
                            return "keypress" === e && (!t ? .tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable)
                        }(n.type, r)) return;
                    F(n, "_sentryCaptured", !0), r && !r._sentryId && F(r, "_sentryId", le());
                    const o = "keypress" === n.type ? "input" : n.type;
                    if (! function(e) {
                            if (e.type !== Dd) return !1;
                            try {
                                if (!e.target || e.target._sentryId !== $d) return !1
                            } catch {}
                            return !0
                        }(n)) {
                        e({
                            event: n,
                            name: o,
                            global: t
                        }), Dd = n.type, $d = r ? r._sentryId : void 0
                    }
                    clearTimeout(Nd), Nd = Kl.setTimeout((() => {
                        $d = void 0, Dd = void 0
                    }), 1e3)
                }
            }
            const Ud = "__sentry_xhr_v3__";

            function zd(e) {
                vs("xhr", e), bs("xhr", qd)
            }

            function qd() {
                if (!Kl.XMLHttpRequest) return;
                const e = XMLHttpRequest.prototype;
                e.open = new Proxy(e.open, {
                    apply(e, t, n) {
                        const r = new Error,
                            o = 1e3 * _e(),
                            s = g(n[0]) ? n[0].toUpperCase() : void 0,
                            i = function(e) {
                                if (g(e)) return e;
                                try {
                                    return e.toString()
                                } catch {}
                                return
                            }(n[1]);
                        if (!s || !i) return e.apply(t, n);
                        t[Ud] = {
                            method: s,
                            url: i,
                            request_headers: {}
                        }, "POST" === s && i.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
                        const a = () => {
                            const e = t[Ud];
                            if (e && 4 === t.readyState) {
                                try {
                                    e.status_code = t.status
                                } catch {}
                                Ss("xhr", {
                                    endTimestamp: 1e3 * _e(),
                                    startTimestamp: o,
                                    xhr: t,
                                    virtualError: r
                                })
                            }
                        };
                        return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                            apply: (e, t, n) => (a(), e.apply(t, n))
                        }) : t.addEventListener("readystatechange", a), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                            apply(e, t, n) {
                                const [r, o] = n, s = t[Ud];
                                return s && g(r) && g(o) && (s.request_headers[r.toLowerCase()] = o), e.apply(t, n)
                            }
                        }), e.apply(t, n)
                    }
                }), e.send = new Proxy(e.send, {
                    apply(e, t, n) {
                        const r = t[Ud];
                        if (!r) return e.apply(t, n);
                        void 0 !== n[0] && (r.body = n[0]);
                        return Ss("xhr", {
                            startTimestamp: 1e3 * _e(),
                            xhr: t
                        }), e.apply(t, n)
                    }
                })
            }
            let Wd;

            function Hd(e) {
                const t = "history";
                vs(t, e), bs(t, Vd)
            }

            function Vd() {
                function e(e) {
                    return function(...t) {
                        const n = t.length > 2 ? t[2] : void 0;
                        if (n) {
                            const r = Wd,
                                o = function(e) {
                                    try {
                                        return new URL(e, Kl.location.origin).toString()
                                    } catch {
                                        return e
                                    }
                                }(String(n));
                            if (Wd = o, r === o) return e.apply(this, t);
                            Ss("history", {
                                from: r,
                                to: o
                            })
                        }
                        return e.apply(this, t)
                    }
                }
                Kl.addEventListener("popstate", (() => {
                    const e = Kl.location.href,
                        t = Wd;
                    if (Wd = e, t === e) return;
                    Ss("history", {
                        from: t,
                        to: e
                    })
                })), "history" in Wl && Wl.history && ($(Kl.history, "pushState", e), $(Kl.history, "replaceState", e))
            }
            const Jd = 1024,
                Gd = (e = {}) => {
                    const t = {
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0,
                        ...e
                    };
                    return {
                        name: "Breadcrumbs",
                        setup(e) {
                            t.console && ks(function(e) {
                                return function(t) {
                                    if (Ve() !== e) return;
                                    const n = {
                                        category: "console",
                                        data: {
                                            arguments: t.args,
                                            logger: "console"
                                        },
                                        level: xs(t.level),
                                        message: ie(t.args, " ")
                                    };
                                    if ("assert" === t.level) {
                                        if (!1 !== t.args[0]) return;
                                        n.message = `Assertion failed: ${ie(t.args.slice(1)," ")||"console.assert"}`, n.data.arguments = t.args.slice(1)
                                    }
                                    gs(n, {
                                        input: t.args,
                                        level: t.level
                                    })
                                }
                            }(e)), t.dom && Fd(function(e, t) {
                                return function(n) {
                                    if (Ve() !== e) return;
                                    let r, o, s = "object" == typeof t ? t.serializeAttribute : void 0,
                                        i = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                                    i && i > Jd && (ed && D.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`), i = Jd), "string" == typeof s && (s = [s]);
                                    try {
                                        const e = n.event,
                                            t = function(e) {
                                                return !!e && !!e.target
                                            }(e) ? e.target : e;
                                        r = T(t, {
                                            keyAttrs: s,
                                            maxStringLength: i
                                        }), o = R(t)
                                    } catch {
                                        r = "<unknown>"
                                    }
                                    if (0 === r.length) return;
                                    const a = {
                                        category: `ui.${n.name}`,
                                        message: r
                                    };
                                    o && (a.data = {
                                        "ui.component_name": o
                                    }), gs(a, {
                                        event: n.event,
                                        name: n.name,
                                        global: n.global
                                    })
                                }
                            }(e, t.dom)), t.xhr && zd(function(e) {
                                return function(t) {
                                    if (Ve() !== e) return;
                                    const {
                                        startTimestamp: n,
                                        endTimestamp: r
                                    } = t, o = t.xhr[Ud];
                                    if (!n || !r || !o) return;
                                    const {
                                        method: s,
                                        url: i,
                                        status_code: a,
                                        body: c
                                    } = o, u = {
                                        method: s,
                                        url: i,
                                        status_code: a
                                    }, l = {
                                        xhr: t.xhr,
                                        input: c,
                                        startTimestamp: n,
                                        endTimestamp: r
                                    }, d = {
                                        category: "xhr",
                                        data: u,
                                        type: "http",
                                        level: Id(a)
                                    };
                                    e.emit("beforeOutgoingRequestBreadcrumb", d, l), gs(d, l)
                                }
                            }(e)), t.fetch && kd(function(e) {
                                return function(t) {
                                    if (Ve() !== e) return;
                                    const {
                                        startTimestamp: n,
                                        endTimestamp: r
                                    } = t;
                                    if (r && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                                        if (t.error) {
                                            const o = {
                                                    data: t.error,
                                                    input: t.args,
                                                    startTimestamp: n,
                                                    endTimestamp: r
                                                },
                                                s = {
                                                    category: "fetch",
                                                    data: t.fetchData,
                                                    level: "error",
                                                    type: "http"
                                                };
                                            e.emit("beforeOutgoingRequestBreadcrumb", s, o), gs(s, o)
                                        } else {
                                            const o = t.response,
                                                s = { ...t.fetchData,
                                                    status_code: o ? .status
                                                },
                                                i = {
                                                    input: t.args,
                                                    response: o,
                                                    startTimestamp: n,
                                                    endTimestamp: r
                                                },
                                                a = {
                                                    category: "fetch",
                                                    data: s,
                                                    type: "http",
                                                    level: Id(s.status_code)
                                                };
                                            e.emit("beforeOutgoingRequestBreadcrumb", a, i), gs(a, i)
                                        }
                                }
                            }(e)), t.history && Hd(function(e) {
                                return function(t) {
                                    if (Ve() !== e) return;
                                    let n = t.from,
                                        r = t.to;
                                    const o = Od(Bo.location.href);
                                    let s = n ? Od(n) : void 0;
                                    const i = Od(r);
                                    s ? .path || (s = o), o.protocol === i.protocol && o.host === i.host && (r = i.relative), o.protocol === s.protocol && o.host === s.host && (n = s.relative), gs({
                                        category: "navigation",
                                        data: {
                                            from: n,
                                            to: r
                                        }
                                    })
                                }
                            }(e)), t.sentry && e.on("beforeSendEvent", function(e) {
                                return function(t) {
                                    Ve() === e && gs({
                                        category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                                        event_id: t.event_id,
                                        level: t.level,
                                        message: pe(t)
                                    }, {
                                        event: t
                                    })
                                }
                            }(e))
                        }
                    }
                };
            const Kd = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(","),
                Yd = (e = {}) => {
                    const t = {
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0,
                        unregisterOriginalCallbacks: !1,
                        ...e
                    };
                    return {
                        name: "BrowserApiErrors",
                        setupOnce() {
                            t.setTimeout && $(Bo, "setTimeout", Xd), t.setInterval && $(Bo, "setInterval", Xd), t.requestAnimationFrame && $(Bo, "requestAnimationFrame", Zd), t.XMLHttpRequest && "XMLHttpRequest" in Bo && $(XMLHttpRequest.prototype, "send", Qd);
                            const e = t.eventTarget;
                            if (e) {
                                (Array.isArray(e) ? e : Kd).forEach((e => function(e, t) {
                                    const n = Bo,
                                        r = n[e] ? .prototype;
                                    if (!r ? .hasOwnProperty ? .("addEventListener")) return;
                                    $(r, "addEventListener", (function(n) {
                                        return function(r, o, s) {
                                            try {
                                                "function" == typeof o.handleEvent && (o.handleEvent = qo(o.handleEvent, {
                                                    mechanism: {
                                                        data: {
                                                            handler: ee(o),
                                                            target: e
                                                        },
                                                        handled: !1,
                                                        type: "auto.browser.browserapierrors.handleEvent"
                                                    }
                                                }))
                                            } catch {}
                                            return t.unregisterOriginalCallbacks && function(e, t, n) {
                                                e && "object" == typeof e && "removeEventListener" in e && "function" == typeof e.removeEventListener && e.removeEventListener(t, n)
                                            }(this, r, o), n.apply(this, [r, qo(o, {
                                                mechanism: {
                                                    data: {
                                                        handler: ee(o),
                                                        target: e
                                                    },
                                                    handled: !1,
                                                    type: "auto.browser.browserapierrors.addEventListener"
                                                }
                                            }), s])
                                        }
                                    })), $(r, "removeEventListener", (function(e) {
                                        return function(t, n, r) {
                                            try {
                                                const o = n.__sentry_wrapped__;
                                                o && e.call(this, t, o, r)
                                            } catch {}
                                            return e.call(this, t, n, r)
                                        }
                                    }))
                                }(e, t)))
                            }
                        }
                    }
                };

            function Xd(e) {
                return function(...t) {
                    const n = t[0];
                    return t[0] = qo(n, {
                        mechanism: {
                            handled: !1,
                            type: `auto.browser.browserapierrors.${ee(e)}`
                        }
                    }), e.apply(this, t)
                }
            }

            function Zd(e) {
                return function(t) {
                    return e.apply(this, [qo(t, {
                        mechanism: {
                            data: {
                                handler: ee(e)
                            },
                            handled: !1,
                            type: "auto.browser.browserapierrors.requestAnimationFrame"
                        }
                    })])
                }
            }

            function Qd(e) {
                return function(...t) {
                    const n = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e => {
                        e in n && "function" == typeof n[e] && $(n, e, (function(t) {
                            const n = {
                                    mechanism: {
                                        data: {
                                            handler: ee(t)
                                        },
                                        handled: !1,
                                        type: `auto.browser.browserapierrors.xhr.${e}`
                                    }
                                },
                                r = B(t);
                            return r && (n.mechanism.data.handler = ee(r)), qo(t, n)
                        }))
                    })), e.apply(this, t)
                }
            }
            const ep = (e = {}) => {
                    const t = e.lifecycle ? ? "route";
                    return {
                        name: "BrowserSession",
                        setupOnce() {
                            if (void 0 === Bo.document) return void(ed && D.warn("Using the `browserSessionIntegration` in non-browser environments is not supported."));
                            Do({
                                ignoreDuration: !0
                            }), jo();
                            const e = ze();
                            let n = e.getUser();
                            e.addScopeListener((e => {
                                const t = e.getUser();
                                n ? .id === t ? .id && n ? .ip_address === t ? .ip_address || (jo(), n = t)
                            })), "route" === t && Hd((({
                                from: e,
                                to: t
                            }) => {
                                e !== t && (Do({
                                    ignoreDuration: !0
                                }), jo())
                            }))
                        }
                    }
                },
                tp = () => ({
                    name: "CultureContext",
                    preprocessEvent(e) {
                        const t = function() {
                            try {
                                const e = Bo.Intl;
                                if (!e) return;
                                const t = e.DateTimeFormat().resolvedOptions();
                                return {
                                    locale: t.locale,
                                    timezone: t.timeZone,
                                    calendar: t.calendar
                                }
                            } catch {
                                return
                            }
                        }();
                        t && (e.contexts = { ...e.contexts,
                            culture: { ...t,
                                ...e.contexts ? .culture
                            }
                        })
                    }
                });
            const np = (e = {}) => {
                const t = {
                    onerror: !0,
                    onunhandledrejection: !0,
                    ...e
                };
                return {
                    name: "GlobalHandlers",
                    setupOnce() {
                        Error.stackTraceLimit = 50
                    },
                    setup(e) {
                        t.onerror && (! function(e) {
                            zu((t => {
                                const {
                                    stackParser: n,
                                    attachStacktrace: r
                                } = ip();
                                if (Ve() !== e || zo()) return;
                                const {
                                    msg: o,
                                    url: s,
                                    line: i,
                                    column: a,
                                    error: c
                                } = t, u = function(e, t, n, r) {
                                    const o = e.exception = e.exception || {},
                                        s = o.values = o.values || [],
                                        i = s[0] = s[0] || {},
                                        a = i.stacktrace = i.stacktrace || {},
                                        c = a.frames = a.frames || [];
                                    0 === c.length && c.push({
                                        colno: r,
                                        lineno: n,
                                        filename: ap(t) ? ? I(),
                                        function: G,
                                        in_app: !0
                                    });
                                    return e
                                }(Bl(n, c || o, void 0, r, !1), s, i, a);
                                u.level = "error", ko(u, {
                                    originalException: c,
                                    mechanism: {
                                        handled: !1,
                                        type: "auto.browser.global_handlers.onerror"
                                    }
                                })
                            }))
                        }(e), sp("onerror")), t.onunhandledrejection && (! function(e) {
                            Hu((t => {
                                const {
                                    stackParser: n,
                                    attachStacktrace: r
                                } = ip();
                                if (Ve() !== e || zo()) return;
                                const o = rp(t),
                                    s = _(o) ? op(o) : Bl(n, o, void 0, r, !0);
                                s.level = "error", ko(s, {
                                    originalException: o,
                                    mechanism: {
                                        handled: !1,
                                        type: "auto.browser.global_handlers.onunhandledrejection"
                                    }
                                })
                            }))
                        }(e), sp("onunhandledrejection"))
                    }
                }
            };

            function rp(e) {
                if (_(e)) return e;
                try {
                    if ("reason" in e) return e.reason;
                    if ("detail" in e && "reason" in e.detail) return e.detail.reason
                } catch {}
                return e
            }

            function op(e) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: `Non-Error promise rejection captured with value: ${String(e)}`
                        }]
                    }
                }
            }

            function sp(e) {
                ed && D.log(`Global Handler attached: ${e}`)
            }

            function ip() {
                const e = Ve();
                return e ? .getOptions() || {
                    stackParser: () => [],
                    attachStacktrace: !1
                }
            }

            function ap(e) {
                if (g(e) && 0 !== e.length) return e.startsWith("data:") ? `<${Ld(e,!1)}>` : e
            }
            const cp = () => ({
                name: "HttpContext",
                preprocessEvent(e) {
                    if (!Bo.navigator && !Bo.location && !Bo.document) return;
                    const t = Wo(),
                        n = { ...t.headers,
                            ...e.request ? .headers
                        };
                    e.request = { ...t,
                        ...e.request,
                        headers: n
                    }
                }
            });

            function up(e, t, n, r, o, s) {
                if (!o.exception ? .values || !s || !k(s.originalException, Error)) return;
                const i = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
                i && (o.exception.values = lp(e, t, r, s.originalException, n, o.exception.values, i, 0))
            }

            function lp(e, t, n, r, o, s, i, a) {
                if (s.length >= n + 1) return s;
                let c = [...s];
                if (k(r[o], Error)) {
                    pp(i, a, r);
                    const s = e(t, r[o]),
                        u = c.length;
                    fp(s, o, u, a), c = lp(e, t, n, r[o], o, [s, ...c], s, u)
                }
                return dp(r) && r.errors.forEach(((s, u) => {
                    if (k(s, Error)) {
                        pp(i, a, r);
                        const l = e(t, s),
                            d = c.length;
                        fp(l, `errors[${u}]`, d, a), c = lp(e, t, n, s, o, [l, ...c], l, d)
                    }
                })), c
            }

            function dp(e) {
                return Array.isArray(e.errors)
            }

            function pp(e, t, n) {
                e.mechanism = {
                    handled: !0,
                    type: "auto.core.linked_errors",
                    ...dp(n) && {
                        is_exception_group: !0
                    },
                    ...e.mechanism,
                    exception_id: t
                }
            }

            function fp(e, t, n, r) {
                e.mechanism = {
                    handled: !0,
                    ...e.mechanism,
                    type: "chained",
                    source: t,
                    exception_id: n,
                    parent_id: r
                }
            }
            const hp = (e = {}) => {
                const t = e.limit || 5,
                    n = e.key || "cause";
                return {
                    name: "LinkedErrors",
                    preprocessEvent(e, r, o) {
                        up(Al, o.getOptions().stackParser, n, t, e, r)
                    }
                }
            };

            function mp() {
                return !! function() {
                    if (void 0 === Bo.window) return !1;
                    const e = Bo;
                    if (e.nw) return !1;
                    const t = e.chrome || e.browser;
                    if (!t ? .runtime ? .id) return !1;
                    const n = I();
                    return !(Bo === Bo.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(n))
                }() && (ed && O((() => {
                    console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
                })), !0)
            }

            function gp(e) {
                return [tc(), fc(), Sd(), Yd(), Gd(), np(), hp(), Ga(), cp(), tp(), ep()]
            }

            function yp(e = {}) {
                const t = !e.skipBrowserExtensionCheck && mp();
                let n = null == e.defaultIntegrations ? gp() : e.defaultIntegrations;
                const r = { ...e,
                    enabled: !t && e.enabled,
                    stackParser: (o = e.stackParser || _d, Array.isArray(o) ? X(...o) : o),
                    integrations: Ye({
                        integrations: e.integrations,
                        defaultIntegrations: n
                    }),
                    transport: e.transport || Ql
                };
                var o;
                return function(e, t) {
                    !0 === t.debug && (l ? D.enable() : O((() => {
                        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
                    }))), Ue().update(t.initialScope);
                    const n = new e(t);
                    return tl(n), n.init(), n
                }(ql, r)
            }

            function _p() {}

            function vp(e) {
                e()
            }

            function bp(e = {}) {
                const t = Bo.document,
                    n = t ? .head || t ? .body;
                if (!n) return void(ed && D.error("[showReportDialog] Global document not defined"));
                const r = Ue(),
                    o = Ve(),
                    s = o ? .getDsn();
                if (!s) return void(ed && D.error("[showReportDialog] DSN not configured"));
                const i = { ...e,
                        user: { ...r.getUser(),
                            ...e.user
                        },
                        eventId: e.eventId || Ao()
                    },
                    a = Bo.document.createElement("script");
                a.async = !0, a.crossOrigin = "anonymous", a.src = function(e, t) {
                    const n = Ir(e);
                    if (!n) return "";
                    const r = `${Xo(n)}embed/error-page/`;
                    let o = `dsn=${xr(n)}`;
                    for (const e in t)
                        if ("dsn" !== e && "onClose" !== e)
                            if ("user" === e) {
                                const e = t.user;
                                if (!e) continue;
                                e.name && (o += `&name=${encodeURIComponent(e.name)}`), e.email && (o += `&email=${encodeURIComponent(e.email)}`)
                            } else o += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
                    return `${r}?${o}`
                }(s, i);
                const {
                    onLoad: c,
                    onClose: u
                } = i;
                if (c && (a.onload = c), u) {
                    const e = t => {
                        if ("__sentry_reportdialog_closed__" === t.data) try {
                            u()
                        } finally {
                            Bo.removeEventListener("message", e)
                        }
                    };
                    Bo.addEventListener("message", e)
                }
                n.appendChild(a)
            }
            const Sp = s,
                kp = new WeakMap,
                wp = (e = {}) => {
                    const t = e.types || ["crash", "deprecation", "intervention"];

                    function n(e) {
                        if (kp.has(Ve()))
                            for (const t of e) We((e => {
                                e.setExtra("url", t.url);
                                const n = `ReportingObserver [${t.type}]`;
                                let r = "No details available";
                                if (t.body) {
                                    const n = {};
                                    for (const e in t.body) n[e] = t.body[e];
                                    if (e.setExtra("body", n), "crash" === t.type) {
                                        const e = t.body;
                                        r = [e.crashId || "", e.reason || ""].join(" ").trim() || r
                                    } else {
                                        r = t.body.message || r
                                    }
                                }
                                So(`${n}: ${r}`)
                            }))
                    }
                    return {
                        name: "ReportingObserver",
                        setupOnce() {
                            if (!("ReportingObserver" in Wl)) return;
                            new Sp.ReportingObserver(n, {
                                buffered: !0,
                                types: t
                            }).observe()
                        },
                        setup(e) {
                            kp.set(e, !0)
                        }
                    }
                };

            function xp(e, t) {
                const n = t ? .getDsn(),
                    r = t ? .getOptions().tunnel;
                return function(e, t) {
                    const n = Ad(e);
                    if (!n || Rd(n)) return !1;
                    return !!t && (n.host.includes(t.host) && /(^|&|\?)sentry_key=/.test(n.search))
                }(e, n) || function(e, t) {
                    if (!t) return !1;
                    return Ep(e) === Ep(t)
                }(e, r)
            }

            function Ep(e) {
                return "/" === e[e.length - 1] ? e.slice(0, -1) : e
            }
            const Tp = (e = {}) => {
                const t = {
                    failedRequestStatusCodes: [
                        [500, 599]
                    ],
                    failedRequestTargets: [/.*/],
                    ...e
                };
                return {
                    name: "HttpClient",
                    setup(e) {
                        ! function(e, t) {
                            if (!Jl()) return;
                            kd((n => {
                                if (Ve() !== e) return;
                                const {
                                    response: r,
                                    args: o,
                                    error: s,
                                    virtualError: i
                                } = n, [a, c] = o;
                                r && function(e, t, n, r, o) {
                                    if (Ap(e, n.status, n.url)) {
                                        const e = function(e, t) {
                                            if (!t && e instanceof Request) return e;
                                            if (e instanceof Request && e.bodyUsed) return e;
                                            return new Request(e, t)
                                        }(t, r);
                                        let s, i, a, c;
                                        Op() && ([s, a] = Cp("Cookie", e), [i, c] = Cp("Set-Cookie", n));
                                        ko(Mp({
                                            url: e.url,
                                            method: e.method,
                                            status: n.status,
                                            requestHeaders: s,
                                            responseHeaders: i,
                                            requestCookies: a,
                                            responseCookies: c,
                                            error: o,
                                            type: "fetch"
                                        }))
                                    }
                                }(t, a, r, c, s || i)
                            }), !1)
                        }(e, t),
                        function(e, t) {
                            if (!("XMLHttpRequest" in s)) return;
                            zd((n => {
                                if (Ve() !== e) return;
                                const {
                                    error: r,
                                    virtualError: o
                                } = n, s = n.xhr, i = s[Ud];
                                if (!i) return;
                                const {
                                    method: a,
                                    request_headers: c
                                } = i;
                                try {
                                    ! function(e, t, n, r, o) {
                                        if (Ap(e, t.status, t.responseURL)) {
                                            let e, s, i;
                                            if (Op()) {
                                                try {
                                                    const e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                                                    e && (s = Rp(e))
                                                } catch {}
                                                try {
                                                    i = function(e) {
                                                        const t = e.getAllResponseHeaders();
                                                        if (!t) return {};
                                                        return t.split("\r\n").reduce(((e, t) => {
                                                            const [n, r] = t.split(": ");
                                                            return n && r && (e[n] = r), e
                                                        }), {})
                                                    }(t)
                                                } catch {}
                                                e = r
                                            }
                                            ko(Mp({
                                                url: t.responseURL,
                                                method: n,
                                                status: t.status,
                                                requestHeaders: e,
                                                responseHeaders: i,
                                                responseCookies: s,
                                                error: o,
                                                type: "xhr"
                                            }))
                                        }
                                    }(t, s, a, c, r || o)
                                } catch (e) {
                                    ed && D.warn("Error while extracting response event form XHR response", e)
                                }
                            }))
                        }(e, t)
                    }
                }
            };

            function Cp(e, t) {
                const n = function(e) {
                    const t = {};
                    return e.forEach(((e, n) => {
                        t[n] = e
                    })), t
                }(t.headers);
                let r;
                try {
                    const t = n[e] || n[e.toLowerCase()] || void 0;
                    t && (r = Rp(t))
                } catch {}
                return [n, r]
            }

            function Ip(e) {
                if (e) {
                    const t = e["Content-Length"] || e["content-length"];
                    if (t) return parseInt(t, 10)
                }
            }

            function Rp(e) {
                return e.split("; ").reduce(((e, t) => {
                    const [n, r] = t.split("=");
                    return n && r && (e[n] = r), e
                }), {})
            }

            function Ap(e, t, n) {
                return function(e, t) {
                    return e.some((e => "number" == typeof e ? e === t : t >= e[0] && t <= e[1]))
                }(e.failedRequestStatusCodes, t) && (r = e.failedRequestTargets, o = n, r.some((e => "string" == typeof e ? o.includes(e) : e.test(o)))) && !xp(n, Ve());
                var r, o
            }

            function Mp(e) {
                const t = Ve(),
                    n = t && e.error && e.error instanceof Error ? e.error.stack : void 0,
                    r = n && t ? t.getOptions().stackParser(n, 0, 1) : void 0,
                    o = `HTTP Client Error with status code: ${e.status}`,
                    s = {
                        message: o,
                        exception: {
                            values: [{
                                type: "Error",
                                value: o,
                                stacktrace: r ? {
                                    frames: r
                                } : void 0
                            }]
                        },
                        request: {
                            url: e.url,
                            method: e.method,
                            headers: e.requestHeaders,
                            cookies: e.requestCookies
                        },
                        contexts: {
                            response: {
                                status_code: e.status,
                                headers: e.responseHeaders,
                                cookies: e.responseCookies,
                                body_size: Ip(e.responseHeaders)
                            }
                        }
                    };
                return he(s, {
                    type: `auto.http.client.${e.type}`,
                    handled: !1
                }), s
            }

            function Op() {
                const e = Ve();
                return !!e && Boolean(e.getOptions().sendDefaultPii)
            }
            const Pp = s,
                Lp = (e = {}) => {
                    const t = null != e.frameContextLines ? e.frameContextLines : 7;
                    return {
                        name: "ContextLines",
                        processEvent: e => function(e, t) {
                            const n = Pp.document,
                                r = Pp.location && Pd(Pp.location.href);
                            if (!n || !r) return e;
                            const o = e.exception ? .values;
                            if (!o ? .length) return e;
                            const s = n.documentElement.innerHTML;
                            if (!s) return e;
                            const i = ["<!DOCTYPE html>", "<html>", ...s.split("\n"), "</html>"];
                            return o.forEach((e => {
                                const n = e.stacktrace;
                                n ? .frames && (n.frames = n.frames.map((e => function(e, t, n, r) {
                                    if (e.filename !== n || !e.lineno || !t.length) return e;
                                    return function(e, t, n = 5) {
                                        if (void 0 === t.lineno) return;
                                        const r = e.length,
                                            o = Math.max(Math.min(r - 1, t.lineno - 1), 0);
                                        t.pre_context = e.slice(Math.max(0, o - n), o).map((e => se(e, 0)));
                                        const s = Math.min(r - 1, o);
                                        t.context_line = se(e[s], t.colno || 0), t.post_context = e.slice(Math.min(o + 1, r), o + 1 + n).map((e => se(e, 0)))
                                    }(t, e, r), e
                                }(e, i, r, t))))
                            })), e
                        }(e, t)
                    }
                };
            const Np = Symbol.for("sentry__originalRequestBody");

            function Dp(e) {
                return new URLSearchParams(e).toString()
            }

            function $p(e, t = D) {
                try {
                    if ("string" == typeof e) return [e];
                    if (e instanceof URLSearchParams) return [e.toString()];
                    if (e instanceof FormData) return [Dp(e)];
                    if (!e) return [void 0]
                } catch (n) {
                    return Gl && t.error(n, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
                }
                return Gl && t.log("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
            }

            function Fp(e = []) {
                if (e.length >= 2 && e[1] && "object" == typeof e[1] && "body" in e[1]) return e[1].body;
                if (e.length >= 1 && e[0] instanceof Request) {
                    const t = e[0][Np];
                    return void 0 !== t ? t : void 0
                }
            }

            function jp(e) {
                let t;
                try {
                    t = e.getAllResponseHeaders()
                } catch (t) {
                    return Gl && D.error(t, "Failed to get xhr response headers", e), {}
                }
                return t ? t.split("\r\n").reduce(((e, t) => {
                    const [n, r] = t.split(": ");
                    return r && (e[n.toLowerCase()] = r), e
                }), {}) : {}
            }

            function Bp(e) {
                if (Wp(e)) return `persisted ${e.operationName}`;
                if (qp(e)) {
                    const {
                        query: t,
                        operationName: n
                    } = e, {
                        operationName: r = n,
                        operationType: o
                    } = function(e) {
                        const t = /^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/,
                            n = /^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/,
                            r = e.match(t);
                        if (r) return {
                            operationType: r[1],
                            operationName: r[2]
                        };
                        const o = e.match(n);
                        if (o) return {
                            operationType: o[1],
                            operationName: void 0
                        };
                        return {
                            operationType: void 0,
                            operationName: void 0
                        }
                    }(t);
                    return r ? `${o} ${r}` : `${o}`
                }
                return "unknown"
            }

            function Up(e) {
                let t;
                if ("xhr" in e) {
                    const n = e.xhr[Ud];
                    t = n && $p(n.body)[0]
                } else {
                    t = $p(Fp(e.input))[0]
                }
                return t
            }

            function zp(e) {
                return "object" == typeof e && null !== e
            }

            function qp(e) {
                return zp(e) && "string" == typeof e.query
            }

            function Wp(e) {
                return zp(e) && "string" == typeof e.operationName && zp(e.extensions) && zp(e.extensions.persistedQuery) && "string" == typeof e.extensions.persistedQuery.sha256Hash && "number" == typeof e.extensions.persistedQuery.version
            }

            function Hp(e) {
                try {
                    const t = JSON.parse(e);
                    return qp(t) || Wp(t) ? t : void 0
                } catch {
                    return
                }
            }
            const Vp = e => ({
                name: "GraphQLClient",
                setup(t) {
                    ! function(e, t) {
                        e.on("beforeOutgoingRequestSpan", ((e, n) => {
                            const r = Kr(e).data || {};
                            if (!("http.client" === r[ar])) return;
                            const o = r[gr] || r["http.url"],
                                s = r[mr] || r["http.method"];
                            if (!g(o) || !g(s)) return;
                            const {
                                endpoints: i
                            } = t, a = ce(o, i), c = Up(n);
                            if (a && c) {
                                const t = Hp(c);
                                if (t) {
                                    const n = Bp(t);
                                    e.updateName(`${s} ${o} (${n})`), qp(t) && e.setAttribute("graphql.document", t.query), Wp(t) && (e.setAttribute("graphql.persisted_query.hash.sha256", t.extensions.persistedQuery.sha256Hash), e.setAttribute("graphql.persisted_query.version", t.extensions.persistedQuery.version))
                                }
                            }
                        }))
                    }(t, e),
                    function(e, t) {
                        e.on("beforeOutgoingRequestBreadcrumb", ((e, n) => {
                            const {
                                category: r,
                                type: o,
                                data: s
                            } = e;
                            if ("http" === o && ("fetch" === r || "xhr" === r)) {
                                const e = s ? .url,
                                    {
                                        endpoints: r
                                    } = t,
                                    o = ce(e, r),
                                    i = Up(n);
                                if (o && s && i) {
                                    const e = Hp(i);
                                    if (!s.graphql && e) {
                                        const t = Bp(e);
                                        s["graphql.operation"] = t, qp(e) && (s["graphql.document"] = e.query), Wp(e) && (s["graphql.persisted_query.hash.sha256"] = e.extensions.persistedQuery.sha256Hash, s["graphql.persisted_query.version"] = e.extensions.persistedQuery.version)
                                    }
                                }
                            }
                        }))
                    }(t, e)
                }
            });
            const Jp = (e, t, n, r) => {
                    let o, s;
                    return i => {
                        t.value >= 0 && (i || r) && (s = t.value - (o ? ? 0), (s || void 0 === o) && (o = t.value, t.delta = s, t.rating = ((e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(t.value, n), e(t)))
                    }
                },
                Gp = (e = !0) => {
                    const t = Kl.performance ? .getEntriesByType ? .("navigation")[0];
                    if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t
                },
                Kp = () => {
                    const e = Gp();
                    return e ? .activationStart ? ? 0
                };

            function Yp(e, t, n) {
                Kl.document && Kl.addEventListener(e, t, n)
            }

            function Xp(e, t, n) {
                Kl.document && Kl.removeEventListener(e, t, n)
            }
            let Zp = -1;
            const Qp = new Set,
                ef = e => {
                    if (function(e) {
                            return "pagehide" === e.type || "hidden" === Kl.document ? .visibilityState
                        }(e) && Zp > -1) {
                        if ("visibilitychange" === e.type || "pagehide" === e.type)
                            for (const e of Qp) e();
                        isFinite(Zp) || (Zp = "visibilitychange" === e.type ? e.timeStamp : 0, Xp("prerenderingchange", ef, !0))
                    }
                },
                tf = () => {
                    if (Kl.document && Zp < 0) {
                        const e = Kp(),
                            t = Kl.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter((t => "hidden" === t.name && t.startTime > e))[0] ? .startTime;
                        Zp = t ? ? ("hidden" !== Kl.document ? .visibilityState || Kl.document ? .prerendering ? 1 / 0 : 0), Yp("visibilitychange", ef, !0), Yp("pagehide", ef, !0), Yp("prerenderingchange", ef, !0)
                    }
                    return {
                        get firstHiddenTime() {
                            return Zp
                        },
                        onHidden(e) {
                            Qp.add(e)
                        }
                    }
                };
            const nf = (e, t = -1) => {
                    const n = Gp();
                    let r = "navigate";
                    n && (Kl.document ? .prerendering || Kp() > 0 ? r = "prerender" : Kl.document ? .wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-")));
                    return {
                        name: e,
                        value: t,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: `v5-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
                        navigationType: r
                    }
                },
                rf = new WeakMap;

            function of (e, t) {
                try {
                    return rf.get(e) || rf.set(e, new t), rf.get(e)
                } catch (e) {
                    return new t
                }
            }
            class sf {
                constructor() {
                    sf.prototype.__init.call(this), sf.prototype.__init2.call(this)
                }
                __init() {
                    this._sessionValue = 0
                }
                __init2() {
                    this._sessionEntries = []
                }
                _processEntry(e) {
                    if (e.hadRecentInput) return;
                    const t = this._sessionEntries[0],
                        n = this._sessionEntries[this._sessionEntries.length - 1];
                    this._sessionValue && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [e]), this._onAfterProcessingUnexpectedShift ? .(e)
                }
            }
            const af = (e, t, n = {}) => {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            const r = new PerformanceObserver((e => {
                                Promise.resolve().then((() => {
                                    t(e.getEntries())
                                }))
                            }));
                            return r.observe({
                                type: e,
                                buffered: !0,
                                ...n
                            }), r
                        }
                    } catch {}
                },
                cf = e => {
                    let t = !1;
                    return () => {
                        t || (e(), t = !0)
                    }
                },
                uf = e => {
                    Kl.document ? .prerendering ? addEventListener("prerenderingchange", (() => e()), !0) : e()
                },
                lf = [1800, 3e3],
                df = [.1, .25],
                pf = (e, t = {}) => {
                    ((e, t = {}) => {
                        uf((() => {
                            const n = tf(),
                                r = nf("FCP");
                            let o;
                            const s = af("paint", (e => {
                                for (const t of e) "first-contentful-paint" === t.name && (s.disconnect(), t.startTime < n.firstHiddenTime && (r.value = Math.max(t.startTime - Kp(), 0), r.entries.push(t), o(!0)))
                            }));
                            s && (o = Jp(e, r, lf, t.reportAllChanges))
                        }))
                    })(cf((() => {
                        const n = nf("CLS", 0);
                        let r;
                        const o = tf(),
                            s = of (t, sf),
                            i = e => {
                                for (const t of e) s._processEntry(t);
                                s._sessionValue > n.value && (n.value = s._sessionValue, n.entries = s._sessionEntries, r())
                            },
                            a = af("layout-shift", i);
                        a && (r = Jp(e, n, df, t.reportAllChanges), o.onHidden((() => {
                            i(a.takeRecords()), r(!0)
                        })), Kl ? .setTimeout ? .(r))
                    })))
                };
            let ff = 0,
                hf = 1 / 0,
                mf = 0;
            const gf = e => {
                e.forEach((e => {
                    e.interactionId && (hf = Math.min(hf, e.interactionId), mf = Math.max(mf, e.interactionId), ff = mf ? (mf - hf) / 7 + 1 : 0)
                }))
            };
            let yf;
            const _f = () => yf ? ff : performance.interactionCount || 0,
                vf = () => {
                    "interactionCount" in performance || yf || (yf = af("event", gf, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                };
            let bf = 0;
            class Sf {
                constructor() {
                    Sf.prototype.__init.call(this), Sf.prototype.__init2.call(this)
                }
                __init() {
                    this._longestInteractionList = []
                }
                __init2() {
                    this._longestInteractionMap = new Map
                }
                _resetInteractions() {
                    bf = _f(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear()
                }
                _estimateP98LongestInteraction() {
                    const e = Math.min(this._longestInteractionList.length - 1, Math.floor((_f() - bf) / 50));
                    return this._longestInteractionList[e]
                }
                _processEntry(e) {
                    if (this._onBeforeProcessingEntry ? .(e), !e.interactionId && "first-input" !== e.entryType) return;
                    const t = this._longestInteractionList.at(-1);
                    let n = this._longestInteractionMap.get(e.interactionId);
                    if (n || this._longestInteractionList.length < 10 || e.duration > t._latency) {
                        if (n ? e.duration > n._latency ? (n.entries = [e], n._latency = e.duration) : e.duration === n._latency && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                                id: e.interactionId,
                                entries: [e],
                                _latency: e.duration
                            }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort(((e, t) => t._latency - e._latency)), this._longestInteractionList.length > 10) {
                            const e = this._longestInteractionList.splice(10);
                            for (const t of e) this._longestInteractionMap.delete(t.id)
                        }
                        this._onAfterProcessingINPCandidate ? .(n)
                    }
                }
            }
            const kf = e => {
                    const t = Kl.requestIdleCallback || Kl.setTimeout;
                    "hidden" === Kl.document ? .visibilityState ? e() : (Yp("visibilitychange", e = cf(e), {
                        once: !0,
                        capture: !0
                    }), Yp("pagehide", e, {
                        once: !0,
                        capture: !0
                    }), t((() => {
                        e(), Xp("visibilitychange", e, {
                            capture: !0
                        }), Xp("pagehide", e, {
                            capture: !0
                        })
                    })))
                },
                wf = [200, 500];
            class xf {
                _processEntry(e) {
                    this._onBeforeProcessingEntry ? .(e)
                }
            }
            const Ef = [2500, 4e3],
                Tf = [800, 1800],
                Cf = e => {
                    Kl.document ? .prerendering ? uf((() => Cf(e))) : "complete" !== Kl.document ? .readyState ? addEventListener("load", (() => Cf(e)), !0) : setTimeout(e)
                },
                If = {},
                Rf = {};
            let Af, Mf, Of, Pf;

            function Lf(e, t = !1) {
                return qf("cls", e, jf, Af, t)
            }

            function Nf(e, t = !1) {
                return qf("lcp", e, Bf, Mf, t)
            }

            function Df(e) {
                return qf("inp", e, zf, Pf)
            }

            function $f(e, t) {
                return Wf(e, t), Rf[e] || (! function(e) {
                    const t = {};
                    "event" === e && (t.durationThreshold = 0);
                    af(e, (t => {
                        Ff(e, {
                            entries: t
                        })
                    }), t)
                }(e), Rf[e] = !0), Hf(e, t)
            }

            function Ff(e, t) {
                const n = If[e];
                if (n ? .length)
                    for (const r of n) try {
                        r(t)
                    } catch (t) {
                        Gl && D.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${ee(r)}\nError:`, t)
                    }
            }

            function jf() {
                return pf((e => {
                    Ff("cls", {
                        metric: e
                    }), Af = e
                }), {
                    reportAllChanges: !0
                })
            }

            function Bf() {
                return ((e, t = {}) => {
                    uf((() => {
                        const n = tf(),
                            r = nf("LCP");
                        let o;
                        const s = of (t, xf),
                            i = e => {
                                t.reportAllChanges || (e = e.slice(-1));
                                for (const t of e) s._processEntry(t), t.startTime < n.firstHiddenTime && (r.value = Math.max(t.startTime - Kp(), 0), r.entries = [t], o())
                            },
                            a = af("largest-contentful-paint", i);
                        if (a) {
                            o = Jp(e, r, Ef, t.reportAllChanges);
                            const n = cf((() => {
                                    i(a.takeRecords()), a.disconnect(), o(!0)
                                })),
                                s = e => {
                                    e.isTrusted && (kf(n), Xp(e.type, s, {
                                        capture: !0
                                    }))
                                };
                            for (const e of ["keydown", "click", "visibilitychange"]) Yp(e, s, {
                                capture: !0
                            })
                        }
                    }))
                })((e => {
                    Ff("lcp", {
                        metric: e
                    }), Mf = e
                }), {
                    reportAllChanges: !0
                })
            }

            function Uf() {
                return ((e, t = {}) => {
                    const n = nf("TTFB"),
                        r = Jp(e, n, Tf, t.reportAllChanges);
                    Cf((() => {
                        const e = Gp();
                        e && (n.value = Math.max(e.responseStart - Kp(), 0), n.entries = [e], r(!0))
                    }))
                })((e => {
                    Ff("ttfb", {
                        metric: e
                    }), Of = e
                }))
            }

            function zf() {
                return ((e, t = {}) => {
                    if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
                    const n = tf();
                    uf((() => {
                        vf();
                        const r = nf("INP");
                        let o;
                        const s = of (t, Sf),
                            i = e => {
                                kf((() => {
                                    for (const t of e) s._processEntry(t);
                                    const t = s._estimateP98LongestInteraction();
                                    t && t._latency !== r.value && (r.value = t._latency, r.entries = t.entries, o())
                                }))
                            },
                            a = af("event", i, {
                                durationThreshold: t.durationThreshold ? ? 40
                            });
                        o = Jp(e, r, wf, t.reportAllChanges), a && (a.observe({
                            type: "first-input",
                            buffered: !0
                        }), n.onHidden((() => {
                            i(a.takeRecords()), o(!0)
                        })))
                    }))
                })((e => {
                    Ff("inp", {
                        metric: e
                    }), Pf = e
                }))
            }

            function qf(e, t, n, r, o = !1) {
                let s;
                return Wf(e, t), Rf[e] || (s = n(), Rf[e] = !0), r && t({
                    metric: r
                }), Hf(e, t, o ? s : void 0)
            }

            function Wf(e, t) {
                If[e] = If[e] || [], If[e].push(t)
            }

            function Hf(e, t, n) {
                return () => {
                    n && n();
                    const r = If[e];
                    if (!r) return;
                    const o = r.indexOf(t); - 1 !== o && r.splice(o, 1)
                }
            }
            const Vf = s,
                Jf = "sentryReplaySession",
                Gf = "Unable to send Replay",
                Kf = 15e4,
                Yf = 5e3,
                Xf = 2e7,
                Zf = 36e5;
            var Qf = Object.defineProperty,
                eh = (e, t, n) => ((e, t, n) => t in e ? Qf(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n)(e, "symbol" != typeof t ? t + "" : t, n),
                th = (e => (e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e))(th || {});

            function nh(e) {
                const t = e ? .host;
                return Boolean(t ? .shadowRoot === e)
            }

            function rh(e) {
                return "[object ShadowRoot]" === Object.prototype.toString.call(e)
            }

            function oh(e) {
                try {
                    const n = e.rules || e.cssRules;
                    return n ? ((t = Array.from(n, sh).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t) : null
                } catch (e) {
                    return null
                }
                var t
            }

            function sh(e) {
                let t;
                if (function(e) {
                        return "styleSheet" in e
                    }(e)) try {
                    t = oh(e.styleSheet) || function(e) {
                        const {
                            cssText: t
                        } = e;
                        if (t.split('"').length < 3) return t;
                        const n = ["@import", `url(${JSON.stringify(e.href)})`];
                        return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";"
                    }(e)
                } catch (e) {} else if (function(e) {
                        return "selectorText" in e
                    }(e)) {
                    let t = e.cssText;
                    const n = e.selectorText.includes(":"),
                        r = "string" == typeof e.style.all && e.style.all;
                    if (r && (t = function(e) {
                            let t = "";
                            for (let n = 0; n < e.style.length; n++) {
                                const r = e.style,
                                    o = r[n],
                                    s = r.getPropertyPriority(o);
                                t += `${o}:${r.getPropertyValue(o)}${s?" !important":""};`
                            }
                            return `${e.selectorText} { ${t} }`
                        }(e)), n && (t = function(e) {
                            const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
                            return e.replace(t, "$1\\$2")
                        }(t)), n || r) return t
                }
                return t || e.cssText
            }
            class ih {
                constructor() {
                    eh(this, "idNodeMap", new Map), eh(this, "nodeMetaMap", new WeakMap)
                }
                getId(e) {
                    if (!e) return -1;
                    const t = this.getMeta(e) ? .id;
                    return t ? ? -1
                }
                getNode(e) {
                    return this.idNodeMap.get(e) || null
                }
                getIds() {
                    return Array.from(this.idNodeMap.keys())
                }
                getMeta(e) {
                    return this.nodeMetaMap.get(e) || null
                }
                removeNodeFromMap(e) {
                    const t = this.getId(e);
                    this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)))
                }
                has(e) {
                    return this.idNodeMap.has(e)
                }
                hasNode(e) {
                    return this.nodeMetaMap.has(e)
                }
                add(e, t) {
                    const n = t.id;
                    this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
                }
                replace(e, t) {
                    const n = this.getNode(e);
                    if (n) {
                        const e = this.nodeMetaMap.get(n);
                        e && this.nodeMetaMap.set(t, e)
                    }
                    this.idNodeMap.set(e, t)
                }
                reset() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
            }

            function ah({
                maskInputOptions: e,
                tagName: t,
                type: n
            }) {
                return "OPTION" === t && (t = "SELECT"), Boolean(e[t.toLowerCase()] || n && e[n] || "password" === n || "INPUT" === t && !n && e.text)
            }

            function ch({
                isMasked: e,
                element: t,
                value: n,
                maskInputFn: r
            }) {
                let o = n || "";
                return e ? (r && (o = r(o, t)), "*".repeat(o.length)) : o
            }

            function uh(e) {
                return e.toLowerCase()
            }

            function lh(e) {
                return e.toUpperCase()
            }
            const dh = "__rrweb_original__";

            function ph(e) {
                const t = e.type;
                return e.hasAttribute("data-rr-is-password") ? "password" : t ? uh(t) : null
            }

            function fh(e, t, n) {
                return "INPUT" !== t || "radio" !== n && "checkbox" !== n ? e.value : e.getAttribute("value") || ""
            }

            function hh(e, t) {
                let n;
                try {
                    n = new URL(e, t ? ? window.location.href)
                } catch (e) {
                    return null
                }
                const r = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return r ? .[1] ? ? null
            }
            const mh = {};

            function gh(e) {
                const t = mh[e];
                if (t) return t;
                const n = window.document;
                let r = window[e];
                if (n && "function" == typeof n.createElement) try {
                    const t = n.createElement("iframe");
                    t.hidden = !0, n.head.appendChild(t);
                    const o = t.contentWindow;
                    o && o[e] && (r = o[e]), n.head.removeChild(t)
                } catch (e) {}
                return mh[e] = r.bind(window)
            }

            function yh(...e) {
                return gh("setTimeout")(...e)
            }

            function _h(...e) {
                return gh("clearTimeout")(...e)
            }

            function vh(e) {
                try {
                    return e.contentDocument
                } catch (e) {}
            }
            let bh = 1;
            const Sh = new RegExp("[^a-z0-9-_:]");

            function kh() {
                return bh++
            }
            let wh, xh;
            const Eh = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                Th = /^(?:[a-z+]+:)?\/\//i,
                Ch = /^www\..*/i,
                Ih = /^(data:)([^,]*),(.*)/i;

            function Rh(e, t) {
                return (e || "").replace(Eh, ((e, n, r, o, s, i) => {
                    const a = r || s || i,
                        c = n || o || "";
                    if (!a) return e;
                    if (Th.test(a) || Ch.test(a)) return `url(${c}${a}${c})`;
                    if (Ih.test(a)) return `url(${c}${a}${c})`;
                    if ("/" === a[0]) return `url(${c}${function(e){let t="";return t=e.indexOf("//")>-1?e.split("/").slice(0,3).join("/"):e.split("/")[0],t=t.split("?")[0],t}(t)+a}${c})`;
                    const u = t.split("/"),
                        l = a.split("/");
                    u.pop();
                    for (const e of l) "." !== e && (".." === e ? u.pop() : u.push(e));
                    return `url(${c}${u.join("/")}${c})`
                }))
            }
            const Ah = /^[^ \t\n\r\u000c]+/,
                Mh = /^[, \t\n\r\u000c]+/;
            const Oh = new WeakMap;

            function Ph(e, t) {
                return t && "" !== t.trim() ? Nh(e, t) : t
            }

            function Lh(e) {
                return Boolean("svg" === e.tagName || e.ownerSVGElement)
            }

            function Nh(e, t) {
                let n = Oh.get(e);
                if (n || (n = e.createElement("a"), Oh.set(e, n)), t) {
                    if (t.startsWith("blob:") || t.startsWith("data:")) return t
                } else t = "";
                return n.setAttribute("href", t), n.href
            }

            function Dh(e, t, n, r, o, s, i) {
                if (!r) return r;
                if ("src" === n || "href" === n && ("use" !== t || "#" !== r[0])) return Ph(e, r);
                if ("xlink:href" === n && "#" !== r[0]) return Ph(e, r);
                if ("background" === n && ("table" === t || "td" === t || "th" === t)) return Ph(e, r);
                if ("srcset" === n) return function(e, t) {
                    if ("" === t.trim()) return t;
                    let n = 0;

                    function r(e) {
                        let r;
                        const o = e.exec(t.substring(n));
                        return o ? (r = o[0], n += r.length, r) : ""
                    }
                    const o = [];
                    for (; r(Mh), !(n >= t.length);) {
                        let s = r(Ah);
                        if ("," === s.slice(-1)) s = Ph(e, s.substring(0, s.length - 1)), o.push(s);
                        else {
                            let r = "";
                            s = Ph(e, s);
                            let i = !1;
                            for (;;) {
                                const e = t.charAt(n);
                                if ("" === e) {
                                    o.push((s + r).trim());
                                    break
                                }
                                if (i) ")" === e && (i = !1);
                                else {
                                    if ("," === e) {
                                        n += 1, o.push((s + r).trim());
                                        break
                                    }
                                    "(" === e && (i = !0)
                                }
                                r += e, n += 1
                            }
                        }
                    }
                    return o.join(", ")
                }(e, r);
                if ("style" === n) {
                    let t = Rh(r, Nh(e));
                    return i && i.size > 0 && (t = function(e, t) {
                        if (!e || 0 === t.size) return e;
                        try {
                            const n = e.split(";"),
                                r = [];
                            for (let e of n) {
                                if (e = e.trim(), !e) continue;
                                const n = e.indexOf(":");
                                if (-1 === n) {
                                    r.push(e);
                                    continue
                                }
                                const o = e.slice(0, n).trim();
                                t.has(o) || r.push(e)
                            }
                            return r.join("; ") + (r.length > 0 && e.endsWith(";") ? ";" : "")
                        } catch (t) {
                            return console.warn("Error filtering CSS properties:", t), e
                        }
                    }(t, i)), t
                }
                return "object" === t && "data" === n ? Ph(e, r) : "function" == typeof s ? s(n, r, o) : r
            }

            function $h(e, t, n) {
                return ("video" === e || "audio" === e) && "autoplay" === t
            }

            function Fh(e, t, n = 1 / 0, r = 0) {
                return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : Fh(e.parentNode, t, n, r + 1) : -1
            }

            function jh(e, t) {
                return n => {
                    const r = n;
                    if (null === r) return !1;
                    try {
                        if (e)
                            if ("string" == typeof e) {
                                if (r.matches(`.${e}`)) return !0
                            } else if (function(e, t) {
                                for (let n = e.classList.length; n--;) {
                                    const r = e.classList[n];
                                    if (t.test(r)) return !0
                                }
                                return !1
                            }(r, e)) return !0;
                        return !(!t || !r.matches(t))
                    } catch {
                        return !1
                    }
                }
            }

            function Bh(e, t, n, r, o, s) {
                try {
                    const i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                    if (null === i) return !1;
                    if ("INPUT" === i.tagName) {
                        const e = i.getAttribute("autocomplete");
                        if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
                    }
                    let a = -1,
                        c = -1;
                    if (s) {
                        if (c = Fh(i, jh(r, o)), c < 0) return !0;
                        a = Fh(i, jh(t, n), c >= 0 ? c : 1 / 0)
                    } else {
                        if (a = Fh(i, jh(t, n)), a < 0) return !1;
                        c = Fh(i, jh(r, o), a >= 0 ? a : 1 / 0)
                    }
                    return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0) && !!s
                } catch (e) {}
                return !!s
            }

            function Uh(e, t) {
                const {
                    doc: n,
                    mirror: r,
                    blockClass: o,
                    blockSelector: s,
                    unblockSelector: i,
                    maskAllText: a,
                    maskAttributeFn: c,
                    maskTextClass: u,
                    unmaskTextClass: l,
                    maskTextSelector: d,
                    unmaskTextSelector: p,
                    inlineStylesheet: f,
                    maskInputOptions: h = {},
                    maskTextFn: m,
                    maskInputFn: g,
                    dataURLOptions: y = {},
                    inlineImages: _,
                    recordCanvas: v,
                    keepIframeSrcFn: b,
                    newlyAddedElement: S = !1,
                    ignoreCSSAttributes: k
                } = t, w = function(e, t) {
                    if (!t.hasNode(e)) return;
                    const n = t.getId(e);
                    return 1 === n ? void 0 : n
                }(n, r);
                switch (e.nodeType) {
                    case e.DOCUMENT_NODE:
                        return "CSS1Compat" !== e.compatMode ? {
                            type: th.Document,
                            childNodes: [],
                            compatMode: e.compatMode
                        } : {
                            type: th.Document,
                            childNodes: []
                        };
                    case e.DOCUMENT_TYPE_NODE:
                        return {
                            type: th.DocumentType,
                            name: e.name,
                            publicId: e.publicId,
                            systemId: e.systemId,
                            rootId: w
                        };
                    case e.ELEMENT_NODE:
                        return function(e, t) {
                            const {
                                doc: n,
                                blockClass: r,
                                blockSelector: o,
                                unblockSelector: s,
                                inlineStylesheet: i,
                                maskInputOptions: a = {},
                                maskAttributeFn: c,
                                maskInputFn: u,
                                dataURLOptions: l = {},
                                inlineImages: d,
                                recordCanvas: p,
                                keepIframeSrcFn: f,
                                newlyAddedElement: h = !1,
                                rootId: m,
                                maskTextClass: g,
                                unmaskTextClass: y,
                                maskTextSelector: _,
                                unmaskTextSelector: v,
                                ignoreCSSAttributes: b
                            } = t, S = function(e, t, n, r) {
                                try {
                                    if (r && e.matches(r)) return !1;
                                    if ("string" == typeof t) {
                                        if (e.classList.contains(t)) return !0
                                    } else
                                        for (let n = e.classList.length; n--;) {
                                            const r = e.classList[n];
                                            if (t.test(r)) return !0
                                        }
                                    if (n) return e.matches(n)
                                } catch (e) {}
                                return !1
                            }(e, r, o, s), k = function(e) {
                                if (e instanceof HTMLFormElement) return "form";
                                const t = uh(e.tagName);
                                return Sh.test(t) ? "div" : t
                            }(e);
                            let w = {};
                            const x = e.attributes.length;
                            for (let t = 0; t < x; t++) {
                                const r = e.attributes[t];
                                r.name && !$h(k, r.name, r.value) && (w[r.name] = Dh(n, k, uh(r.name), r.value, e, c, b))
                            }
                            if ("link" === k && i) {
                                const t = Array.from(n.styleSheets).find((t => t.href === e.href));
                                let r = null;
                                t && (r = oh(t)), r && (w.rel = null, w.href = null, w.crossorigin = null, w._cssText = Rh(r, t.href))
                            }
                            if ("style" === k && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                                const t = oh(e.sheet);
                                t && (w._cssText = Rh(t, Nh(n)))
                            }
                            if ("input" === k || "textarea" === k || "select" === k || "option" === k) {
                                const t = e,
                                    n = ph(t),
                                    r = fh(t, lh(k), n),
                                    o = t.checked;
                                if ("submit" !== n && "button" !== n && r) {
                                    const e = Bh(t, g, _, y, v, ah({
                                        type: n,
                                        tagName: lh(k),
                                        maskInputOptions: a
                                    }));
                                    w.value = ch({
                                        isMasked: e,
                                        element: t,
                                        value: r,
                                        maskInputFn: u
                                    })
                                }
                                o && (w.checked = o)
                            }
                            "option" === k && (e.selected && !a.select ? w.selected = !0 : delete w.selected);
                            if ("canvas" === k && p)
                                if ("2d" === e.__context)(function(e) {
                                    const t = e.getContext("2d");
                                    if (!t) return !0;
                                    for (let n = 0; n < e.width; n += 50)
                                        for (let r = 0; r < e.height; r += 50) {
                                            const o = t.getImageData,
                                                s = dh in o ? o[dh] : o;
                                            if (new Uint32Array(s.call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some((e => 0 !== e))) return !1
                                        }
                                    return !0
                                })(e) || (w.rr_dataURL = e.toDataURL(l.type, l.quality));
                                else if (!("__context" in e)) {
                                const t = e.toDataURL(l.type, l.quality),
                                    r = n.createElement("canvas");
                                r.width = e.width, r.height = e.height;
                                t !== r.toDataURL(l.type, l.quality) && (w.rr_dataURL = t)
                            }
                            if ("img" === k && d) {
                                wh || (wh = n.createElement("canvas"), xh = wh.getContext("2d"));
                                const t = e,
                                    r = t.currentSrc || t.getAttribute("src") || "<unknown-src>",
                                    o = t.crossOrigin,
                                    s = () => {
                                        t.removeEventListener("load", s);
                                        try {
                                            wh.width = t.naturalWidth, wh.height = t.naturalHeight, xh.drawImage(t, 0, 0), w.rr_dataURL = wh.toDataURL(l.type, l.quality)
                                        } catch (e) {
                                            if ("anonymous" !== t.crossOrigin) return t.crossOrigin = "anonymous", void(t.complete && 0 !== t.naturalWidth ? s() : t.addEventListener("load", s));
                                            console.warn(`Cannot inline img src=${r}! Error: ${e}`)
                                        }
                                        "anonymous" === t.crossOrigin && (o ? w.crossOrigin = o : t.removeAttribute("crossorigin"))
                                    };
                                t.complete && 0 !== t.naturalWidth ? s() : t.addEventListener("load", s)
                            }
                            "audio" !== k && "video" !== k || (w.rr_mediaState = e.paused ? "paused" : "played", w.rr_mediaCurrentTime = e.currentTime);
                            h || (e.scrollLeft && (w.rr_scrollLeft = e.scrollLeft), e.scrollTop && (w.rr_scrollTop = e.scrollTop));
                            if (S) {
                                const {
                                    width: t,
                                    height: n
                                } = e.getBoundingClientRect();
                                w = {
                                    class: w.class,
                                    rr_width: `${t}px`,
                                    rr_height: `${n}px`
                                }
                            }
                            "iframe" !== k || f(w.src) || (S || vh(e) || (w.rr_src = w.src), delete w.src);
                            let E;
                            try {
                                customElements.get(k) && (E = !0)
                            } catch (e) {}
                            return {
                                type: th.Element,
                                tagName: k,
                                attributes: w,
                                childNodes: [],
                                isSVG: Lh(e) || void 0,
                                needBlock: S,
                                rootId: m,
                                isCustom: E
                            }
                        }(e, {
                            doc: n,
                            blockClass: o,
                            blockSelector: s,
                            unblockSelector: i,
                            inlineStylesheet: f,
                            maskAttributeFn: c,
                            maskInputOptions: h,
                            maskInputFn: g,
                            dataURLOptions: y,
                            inlineImages: _,
                            recordCanvas: v,
                            keepIframeSrcFn: b,
                            newlyAddedElement: S,
                            rootId: w,
                            maskTextClass: u,
                            unmaskTextClass: l,
                            maskTextSelector: d,
                            unmaskTextSelector: p,
                            ignoreCSSAttributes: k
                        });
                    case e.TEXT_NODE:
                        return function(e, t) {
                            const {
                                maskAllText: n,
                                maskTextClass: r,
                                unmaskTextClass: o,
                                maskTextSelector: s,
                                unmaskTextSelector: i,
                                maskTextFn: a,
                                maskInputOptions: c,
                                maskInputFn: u,
                                rootId: l
                            } = t, d = e.parentNode && e.parentNode.tagName;
                            let p = e.textContent;
                            const f = "STYLE" === d || void 0,
                                h = "SCRIPT" === d || void 0,
                                m = "TEXTAREA" === d || void 0;
                            if (f && p) {
                                try {
                                    e.nextSibling || e.previousSibling || e.parentNode.sheet ? .cssRules && (p = oh(e.parentNode.sheet))
                                } catch (t) {
                                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                                }
                                p = Rh(p, Nh(t.doc))
                            }
                            h && (p = "SCRIPT_PLACEHOLDER");
                            const g = Bh(e, r, s, o, i, n);
                            f || h || m || !p || !g || (p = a ? a(p, e.parentElement) : p.replace(/[\S]/g, "*"));
                            m && p && (c.textarea || g) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*"));
                            if ("OPTION" === d && p) {
                                p = ch({
                                    isMasked: Bh(e, r, s, o, i, ah({
                                        type: null,
                                        tagName: d,
                                        maskInputOptions: c
                                    })),
                                    element: e,
                                    value: p,
                                    maskInputFn: u
                                })
                            }
                            return {
                                type: th.Text,
                                textContent: p || "",
                                isStyle: f,
                                rootId: l
                            }
                        }(e, {
                            doc: n,
                            maskAllText: a,
                            maskTextClass: u,
                            unmaskTextClass: l,
                            maskTextSelector: d,
                            unmaskTextSelector: p,
                            maskTextFn: m,
                            maskInputOptions: h,
                            maskInputFn: g,
                            rootId: w
                        });
                    case e.CDATA_SECTION_NODE:
                        return {
                            type: th.CDATA,
                            textContent: "",
                            rootId: w
                        };
                    case e.COMMENT_NODE:
                        return {
                            type: th.Comment,
                            textContent: e.textContent || "",
                            rootId: w
                        };
                    default:
                        return !1
                }
            }

            function zh(e) {
                return null == e ? "" : e.toLowerCase()
            }

            function qh(e, t) {
                const {
                    doc: n,
                    mirror: r,
                    blockClass: o,
                    blockSelector: s,
                    unblockSelector: i,
                    maskAllText: a,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: l,
                    unmaskTextSelector: d,
                    skipChild: p = !1,
                    inlineStylesheet: f = !0,
                    maskInputOptions: h = {},
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: y,
                    slimDOMOptions: _,
                    dataURLOptions: v = {},
                    inlineImages: b = !1,
                    recordCanvas: S = !1,
                    onSerialize: k,
                    onIframeLoad: w,
                    iframeLoadTimeout: x = 5e3,
                    onBlockedImageLoad: E,
                    onStylesheetLoad: T,
                    stylesheetLoadTimeout: C = 5e3,
                    keepIframeSrcFn: I = () => !1,
                    newlyAddedElement: R = !1,
                    ignoreCSSAttributes: A
                } = t;
                let {
                    preserveWhiteSpace: M = !0
                } = t;
                const O = Uh(e, {
                    doc: n,
                    mirror: r,
                    blockClass: o,
                    blockSelector: s,
                    maskAllText: a,
                    unblockSelector: i,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: l,
                    unmaskTextSelector: d,
                    inlineStylesheet: f,
                    maskInputOptions: h,
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: y,
                    dataURLOptions: v,
                    inlineImages: b,
                    recordCanvas: S,
                    keepIframeSrcFn: I,
                    newlyAddedElement: R,
                    ignoreCSSAttributes: A
                });
                if (!O) return console.warn(e, "not serialized"), null;
                let P;
                P = r.hasNode(e) ? r.getId(e) : ! function(e, t) {
                    if (t.comment && e.type === th.Comment) return !0;
                    if (e.type === th.Element) {
                        if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === hh(e.attributes.href))) return !0;
                        if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (zh(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === zh(e.attributes.name) || "icon" === zh(e.attributes.rel) || "apple-touch-icon" === zh(e.attributes.rel) || "shortcut icon" === zh(e.attributes.rel)))) return !0;
                        if ("meta" === e.tagName) {
                            if (t.headMetaDescKeywords && zh(e.attributes.name).match(/^description|keywords$/)) return !0;
                            if (t.headMetaSocial && (zh(e.attributes.property).match(/^(og|twitter|fb):/) || zh(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === zh(e.attributes.name))) return !0;
                            if (t.headMetaRobots && ("robots" === zh(e.attributes.name) || "googlebot" === zh(e.attributes.name) || "bingbot" === zh(e.attributes.name))) return !0;
                            if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                            if (t.headMetaAuthorship && ("author" === zh(e.attributes.name) || "generator" === zh(e.attributes.name) || "framework" === zh(e.attributes.name) || "publisher" === zh(e.attributes.name) || "progid" === zh(e.attributes.name) || zh(e.attributes.property).match(/^article:/) || zh(e.attributes.property).match(/^product:/))) return !0;
                            if (t.headMetaVerification && ("google-site-verification" === zh(e.attributes.name) || "yandex-verification" === zh(e.attributes.name) || "csrf-token" === zh(e.attributes.name) || "p:domain_verify" === zh(e.attributes.name) || "verify-v1" === zh(e.attributes.name) || "verification" === zh(e.attributes.name) || "shopify-checkout-api-token" === zh(e.attributes.name))) return !0
                        }
                    }
                    return !1
                }(O, _) && (M || O.type !== th.Text || O.isStyle || O.textContent.replace(/^\s+|\s+$/gm, "").length) ? kh() : -2;
                const L = Object.assign(O, {
                    id: P
                });
                if (r.add(e, L), -2 === P) return null;
                k && k(e);
                let N = !p;
                if (L.type === th.Element) {
                    N = N && !L.needBlock;
                    const t = e.shadowRoot;
                    t && rh(t) && (L.isShadowHost = !0)
                }
                if ((L.type === th.Document || L.type === th.Element) && N) {
                    _.headWhitespace && L.type === th.Element && "head" === L.tagName && (M = !1);
                    const t = {
                            doc: n,
                            mirror: r,
                            blockClass: o,
                            blockSelector: s,
                            maskAllText: a,
                            unblockSelector: i,
                            maskTextClass: c,
                            unmaskTextClass: u,
                            maskTextSelector: l,
                            unmaskTextSelector: d,
                            skipChild: p,
                            inlineStylesheet: f,
                            maskInputOptions: h,
                            maskAttributeFn: m,
                            maskTextFn: g,
                            maskInputFn: y,
                            slimDOMOptions: _,
                            dataURLOptions: v,
                            inlineImages: b,
                            recordCanvas: S,
                            preserveWhiteSpace: M,
                            onSerialize: k,
                            onIframeLoad: w,
                            iframeLoadTimeout: x,
                            onBlockedImageLoad: E,
                            onStylesheetLoad: T,
                            stylesheetLoadTimeout: C,
                            keepIframeSrcFn: I,
                            ignoreCSSAttributes: A
                        },
                        R = e.childNodes ? Array.from(e.childNodes) : [];
                    for (const e of R) {
                        const n = qh(e, t);
                        n && L.childNodes.push(n)
                    }
                    if (function(e) {
                            return e.nodeType === e.ELEMENT_NODE
                        }(e) && e.shadowRoot)
                        for (const n of Array.from(e.shadowRoot.childNodes)) {
                            const r = qh(n, t);
                            r && (rh(e.shadowRoot) && (r.isShadow = !0), L.childNodes.push(r))
                        }
                }
                if (e.parentNode && nh(e.parentNode) && rh(e.parentNode) && (L.isShadow = !0), L.type !== th.Element || "iframe" !== L.tagName || L.needBlock || function(e, t, n) {
                        const r = e.contentWindow;
                        if (!r) return;
                        let o, s = !1;
                        try {
                            o = r.document.readyState
                        } catch (e) {
                            return
                        }
                        if ("complete" !== o) {
                            const r = yh((() => {
                                s || (t(), s = !0)
                            }), n);
                            return void e.addEventListener("load", (() => {
                                _h(r), s = !0, t()
                            }))
                        }
                        const i = "about:blank";
                        if (r.location.href !== i || e.src === i || "" === e.src) return yh(t, 0), e.addEventListener("load", t);
                        e.addEventListener("load", t)
                    }(e, (() => {
                        const t = vh(e);
                        if (t && w) {
                            const n = qh(t, {
                                doc: t,
                                mirror: r,
                                blockClass: o,
                                blockSelector: s,
                                unblockSelector: i,
                                maskAllText: a,
                                maskTextClass: c,
                                unmaskTextClass: u,
                                maskTextSelector: l,
                                unmaskTextSelector: d,
                                skipChild: !1,
                                inlineStylesheet: f,
                                maskInputOptions: h,
                                maskAttributeFn: m,
                                maskTextFn: g,
                                maskInputFn: y,
                                slimDOMOptions: _,
                                dataURLOptions: v,
                                inlineImages: b,
                                recordCanvas: S,
                                preserveWhiteSpace: M,
                                onSerialize: k,
                                onIframeLoad: w,
                                iframeLoadTimeout: x,
                                onStylesheetLoad: T,
                                stylesheetLoadTimeout: C,
                                keepIframeSrcFn: I,
                                ignoreCSSAttributes: A
                            });
                            n && w(e, n)
                        }
                    }), x), L.type === th.Element && "img" === L.tagName && !e.complete && L.needBlock) {
                    const t = e,
                        n = () => {
                            if (t.isConnected && !t.complete && E) try {
                                const e = t.getBoundingClientRect();
                                e.width > 0 && e.height > 0 && E(t, L, e)
                            } catch (e) {}
                            t.removeEventListener("load", n)
                        };
                    t.isConnected && t.addEventListener("load", n)
                }
                return L.type === th.Element && "link" === L.tagName && "string" == typeof L.attributes.rel && ("stylesheet" === L.attributes.rel || "preload" === L.attributes.rel && "string" == typeof L.attributes.href && "css" === hh(L.attributes.href)) && function(e, t, n) {
                    let r, o = !1;
                    try {
                        r = e.sheet
                    } catch (e) {
                        return
                    }
                    if (r) return;
                    const s = yh((() => {
                        o || (t(), o = !0)
                    }), n);
                    e.addEventListener("load", (() => {
                        _h(s), o = !0, t()
                    }))
                }(e, (() => {
                    if (T) {
                        const t = qh(e, {
                            doc: n,
                            mirror: r,
                            blockClass: o,
                            blockSelector: s,
                            unblockSelector: i,
                            maskAllText: a,
                            maskTextClass: c,
                            unmaskTextClass: u,
                            maskTextSelector: l,
                            unmaskTextSelector: d,
                            skipChild: !1,
                            inlineStylesheet: f,
                            maskInputOptions: h,
                            maskAttributeFn: m,
                            maskTextFn: g,
                            maskInputFn: y,
                            slimDOMOptions: _,
                            dataURLOptions: v,
                            inlineImages: b,
                            recordCanvas: S,
                            preserveWhiteSpace: M,
                            onSerialize: k,
                            onIframeLoad: w,
                            iframeLoadTimeout: x,
                            onStylesheetLoad: T,
                            stylesheetLoadTimeout: C,
                            keepIframeSrcFn: I,
                            ignoreCSSAttributes: A
                        });
                        t && T(e, t)
                    }
                }), C), L.type === th.Element && delete L.needBlock, L
            }

            function Wh(e, t, n = document) {
                const r = {
                    capture: !0,
                    passive: !0
                };
                return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
            }
            const Hh = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
            let Vh = {
                map: {},
                getId: () => (console.error(Hh), -1),
                getNode: () => (console.error(Hh), null),
                removeNodeFromMap() {
                    console.error(Hh)
                },
                has: () => (console.error(Hh), !1),
                reset() {
                    console.error(Hh)
                }
            };

            function Jh(e, t, n = {}) {
                let r = null,
                    o = 0;
                return function(...s) {
                    const i = Date.now();
                    o || !1 !== n.leading || (o = i);
                    const a = t - (i - o),
                        c = this;
                    a <= 0 || a > t ? (r && (! function(...e) {
                        fm("clearTimeout")(...e)
                    }(r), r = null), o = i, e.apply(c, s)) : r || !1 === n.trailing || (r = hm((() => {
                        o = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(c, s)
                    }), a))
                }
            }

            function Gh(e, t, n, r, o = window) {
                const s = o.Object.getOwnPropertyDescriptor(e, t);
                return o.Object.defineProperty(e, t, r ? n : {
                    set(e) {
                        hm((() => {
                            n.set.call(this, e)
                        }), 0), s && s.set && s.set.call(this, e)
                    }
                }), () => Gh(e, t, s || {}, !0)
            }

            function Kh(e, t, n) {
                try {
                    if (!(t in e)) return () => {};
                    const r = e[t],
                        o = n(r);
                    return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })), e[t] = o, () => {
                        e[t] = r
                    }
                } catch {
                    return () => {}
                }
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (Vh = new Proxy(Vh, {
                get: (e, t, n) => ("map" === t && console.error(Hh), Reflect.get(e, t, n))
            }));
            let Yh = Date.now;

            function Xh(e) {
                const t = e.document;
                return {
                    left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : t ? .documentElement.scrollLeft || t ? .body ? .parentElement ? .scrollLeft || t ? .body ? .scrollLeft || 0,
                    top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : t ? .documentElement.scrollTop || t ? .body ? .parentElement ? .scrollTop || t ? .body ? .scrollTop || 0
                }
            }

            function Zh() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function Qh() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function em(e) {
                if (!e) return null;
                try {
                    return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
                } catch (e) {
                    return null
                }
            }

            function tm(e, t, n, r, o) {
                if (!e) return !1;
                const s = em(e);
                if (!s) return !1;
                const i = jh(t, n);
                if (!o) {
                    const e = r && s.matches(r);
                    return i(s) && !e
                }
                const a = Fh(s, i);
                let c = -1;
                return !(a < 0) && (r && (c = Fh(s, jh(null, r))), a > -1 && c < 0 || a < c)
            }

            function nm(e, t) {
                return -2 === t.getId(e)
            }

            function rm(e, t) {
                if (nh(e)) return !1;
                const n = t.getId(e);
                return !t.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || rm(e.parentNode, t))
            }

            function om(e) {
                return Boolean(e.changedTouches)
            }

            function sm(e, t) {
                return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
            }

            function im(e, t) {
                return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
            }

            function am(e) {
                return Boolean(e ? .shadowRoot)
            }
            /[1-9][0-9]{12}/.test(Date.now().toString()) || (Yh = () => (new Date).getTime());
            class cm {
                constructor() {
                    this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
                }
                getId(e) {
                    return this.styleIDMap.get(e) ? ? -1
                }
                has(e) {
                    return this.styleIDMap.has(e)
                }
                add(e, t) {
                    if (this.has(e)) return this.getId(e);
                    let n;
                    return n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n
                }
                getStyle(e) {
                    return this.idStyleMap.get(e) || null
                }
                reset() {
                    this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
                }
                generateId() {
                    return this.id++
                }
            }

            function um(e) {
                let t = null;
                return e.getRootNode ? .() ? .nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
            }

            function lm(e) {
                const t = e.ownerDocument;
                if (!t) return !1;
                const n = function(e) {
                    let t, n = e;
                    for (; t = um(n);) n = t;
                    return n
                }(e);
                return t.contains(n)
            }

            function dm(e) {
                const t = e.ownerDocument;
                return !!t && (t.contains(e) || lm(e))
            }
            const pm = {};

            function fm(e) {
                const t = pm[e];
                if (t) return t;
                const n = window.document;
                let r = window[e];
                if (n && "function" == typeof n.createElement) try {
                    const t = n.createElement("iframe");
                    t.hidden = !0, n.head.appendChild(t);
                    const o = t.contentWindow;
                    o && o[e] && (r = o[e]), n.head.removeChild(t)
                } catch (e) {}
                return pm[e] = r.bind(window)
            }

            function hm(...e) {
                return fm("setTimeout")(...e)
            }
            var mm = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(mm || {}),
                gm = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(gm || {}),
                ym = (e => (e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(ym || {}),
                _m = (e => (e[e.Mouse = 0] = "Mouse", e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e))(_m || {}),
                vm = (e => (e[e.Play = 0] = "Play", e[e.Pause = 1] = "Pause", e[e.Seeked = 2] = "Seeked", e[e.VolumeChange = 3] = "VolumeChange", e[e.RateChange = 4] = "RateChange", e))(vm || {});

            function bm(e) {
                try {
                    return e.contentDocument
                } catch (e) {}
            }

            function Sm(e) {
                return "__ln" in e
            }
            class km {
                constructor() {
                    this.length = 0, this.head = null, this.tail = null
                }
                get(e) {
                    if (e >= this.length) throw new Error("Position outside of list range");
                    let t = this.head;
                    for (let n = 0; n < e; n++) t = t ? .next || null;
                    return t
                }
                addNode(e) {
                    const t = {
                        value: e,
                        previous: null,
                        next: null
                    };
                    if (e.__ln = t, e.previousSibling && Sm(e.previousSibling)) {
                        const n = e.previousSibling.__ln.next;
                        t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
                    } else if (e.nextSibling && Sm(e.nextSibling) && e.nextSibling.__ln.previous) {
                        const n = e.nextSibling.__ln.previous;
                        t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
                    } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
                    null === t.next && (this.tail = t), this.length++
                }
                removeNode(e) {
                    const t = e.__ln;
                    this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
                }
            }
            const wm = (e, t) => `${e}@${t}`;
            class xm {
                constructor() {
                    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                        e.forEach(this.processMutation), this.emit()
                    }, this.emit = () => {
                        if (this.frozen || this.locked) return;
                        const e = [],
                            t = new Set,
                            n = new km,
                            r = e => {
                                let t = e,
                                    n = -2;
                                for (; - 2 === n;) t = t && t.nextSibling, n = t && this.mirror.getId(t);
                                return n
                            },
                            o = o => {
                                if (!o.parentNode || !dm(o)) return;
                                const s = nh(o.parentNode) ? this.mirror.getId(um(o)) : this.mirror.getId(o.parentNode),
                                    i = r(o);
                                if (-1 === s || -1 === i) return n.addNode(o);
                                const a = qh(o, {
                                    doc: this.doc,
                                    mirror: this.mirror,
                                    blockClass: this.blockClass,
                                    blockSelector: this.blockSelector,
                                    maskAllText: this.maskAllText,
                                    unblockSelector: this.unblockSelector,
                                    maskTextClass: this.maskTextClass,
                                    unmaskTextClass: this.unmaskTextClass,
                                    maskTextSelector: this.maskTextSelector,
                                    unmaskTextSelector: this.unmaskTextSelector,
                                    skipChild: !0,
                                    newlyAddedElement: !0,
                                    inlineStylesheet: this.inlineStylesheet,
                                    maskInputOptions: this.maskInputOptions,
                                    maskAttributeFn: this.maskAttributeFn,
                                    maskTextFn: this.maskTextFn,
                                    maskInputFn: this.maskInputFn,
                                    slimDOMOptions: this.slimDOMOptions,
                                    dataURLOptions: this.dataURLOptions,
                                    recordCanvas: this.recordCanvas,
                                    inlineImages: this.inlineImages,
                                    onSerialize: e => {
                                        sm(e, this.mirror) && !tm(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e), im(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), am(o) && this.shadowDomManager.addShadowRoot(o.shadowRoot, this.doc)
                                    },
                                    onIframeLoad: (e, t) => {
                                        tm(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(e, t), e.contentWindow && this.canvasManager.addWindow(e.contentWindow), this.shadowDomManager.observeAttachShadow(e))
                                    },
                                    onStylesheetLoad: (e, t) => {
                                        this.stylesheetManager.attachLinkElement(e, t)
                                    },
                                    onBlockedImageLoad: (e, t, {
                                        width: n,
                                        height: r
                                    }) => {
                                        this.mutationCb({
                                            adds: [],
                                            removes: [],
                                            texts: [],
                                            attributes: [{
                                                id: t.id,
                                                attributes: {
                                                    style: {
                                                        width: `${n}px`,
                                                        height: `${r}px`
                                                    }
                                                }
                                            }]
                                        })
                                    },
                                    ignoreCSSAttributes: this.ignoreCSSAttributes
                                });
                                a && (e.push({
                                    parentId: s,
                                    nextId: i,
                                    node: a
                                }), t.add(a.id))
                            };
                        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (const e of this.movedSet) Tm(this.removes, e, this.mirror) && !this.movedSet.has(e.parentNode) || o(e);
                        for (const e of this.addedSet) Cm(this.droppedSet, e) || Tm(this.removes, e, this.mirror) ? Cm(this.movedSet, e) ? o(e) : this.droppedSet.add(e) : o(e);
                        let s = null;
                        for (; n.length;) {
                            let e = null;
                            if (s) {
                                const t = this.mirror.getId(s.value.parentNode),
                                    n = r(s.value); - 1 !== t && -1 !== n && (e = s)
                            }
                            if (!e) {
                                let t = n.tail;
                                for (; t;) {
                                    const n = t;
                                    if (t = t.previous, n) {
                                        const t = this.mirror.getId(n.value.parentNode);
                                        if (-1 === r(n.value)) continue;
                                        if (-1 !== t) {
                                            e = n;
                                            break
                                        } {
                                            const t = n.value;
                                            if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                                const r = t.parentNode.host;
                                                if (-1 !== this.mirror.getId(r)) {
                                                    e = n;
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (!e) {
                                for (; n.head;) n.removeNode(n.head.value);
                                break
                            }
                            s = e.previous, n.removeNode(e.value), o(e.value)
                        }
                        const i = {
                            texts: this.texts.map((e => ({
                                id: this.mirror.getId(e.node),
                                value: e.value
                            }))).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                            attributes: this.attributes.map((e => {
                                const {
                                    attributes: t
                                } = e;
                                if ("string" == typeof t.style) {
                                    const n = JSON.stringify(e.styleDiff),
                                        r = JSON.stringify(e._unchangedStyles);
                                    n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                                }
                                return {
                                    id: this.mirror.getId(e.node),
                                    attributes: t
                                }
                            })).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                            removes: this.removes,
                            adds: e
                        };
                        (i.texts.length || i.attributes.length || i.removes.length || i.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(i))
                    }, this.processMutation = e => {
                        if (!nm(e.target, this.mirror)) switch (e.type) {
                            case "characterData":
                                {
                                    const t = e.target.textContent;tm(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                        value: Bh(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, em(e.target)) : t.replace(/[\S]/g, "*") : t,
                                        node: e.target
                                    });
                                    break
                                }
                            case "attributes":
                                {
                                    const t = e.target;
                                    let n = e.attributeName,
                                        r = e.target.getAttribute(n);
                                    if ("value" === n) {
                                        const n = ph(t),
                                            o = t.tagName;
                                        r = fh(t, o, n);
                                        const s = ah({
                                            maskInputOptions: this.maskInputOptions,
                                            tagName: o,
                                            type: n
                                        });
                                        r = ch({
                                            isMasked: Bh(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s),
                                            element: t,
                                            value: r,
                                            maskInputFn: this.maskInputFn
                                        })
                                    }
                                    if (tm(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue) return;
                                    let o = this.attributeMap.get(e.target);
                                    if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                                        if (bm(t)) return;
                                        n = "rr_src"
                                    }
                                    if (o || (o = {
                                            node: e.target,
                                            attributes: {},
                                            styleDiff: {},
                                            _unchangedStyles: {}
                                        }, this.attributes.push(o), this.attributeMap.set(e.target, o)), "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !$h(t.tagName, n) && (o.attributes[n] = Dh(this.doc, uh(t.tagName), uh(n), r, t, this.maskAttributeFn), "style" === n)) {
                                        if (!this.unattachedDoc) try {
                                            this.unattachedDoc = document.implementation.createHTMLDocument()
                                        } catch (e) {
                                            this.unattachedDoc = this.doc
                                        }
                                        const n = this.unattachedDoc.createElement("span");
                                        e.oldValue && n.setAttribute("style", e.oldValue);
                                        for (const e of Array.from(t.style)) {
                                            const r = t.style.getPropertyValue(e),
                                                s = t.style.getPropertyPriority(e);
                                            r !== n.style.getPropertyValue(e) || s !== n.style.getPropertyPriority(e) ? o.styleDiff[e] = "" === s ? r : [r, s] : o._unchangedStyles[e] = [r, s]
                                        }
                                        for (const e of Array.from(n.style)) "" === t.style.getPropertyValue(e) && (o.styleDiff[e] = !1)
                                    }
                                    break
                                }
                            case "childList":
                                if (tm(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                                e.addedNodes.forEach((t => this.genAdds(t, e.target))), e.removedNodes.forEach((t => {
                                    const n = this.mirror.getId(t),
                                        r = nh(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                    tm(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || nm(t, this.mirror) || ! function(e, t) {
                                        return -1 !== t.getId(e)
                                    }(t, this.mirror) || (this.addedSet.has(t) ? (Em(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || rm(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[wm(n, r)] ? Em(this.movedSet, t) : this.removes.push({
                                        parentId: r,
                                        id: n,
                                        isShadow: !(!nh(e.target) || !rh(e.target)) || void 0
                                    })), this.mapRemoves.push(t))
                                }))
                        }
                    }, this.genAdds = (e, t) => {
                        if (!this.processedNodeManager.inOtherBuffer(e, this) && !this.addedSet.has(e) && !this.movedSet.has(e)) {
                            if (this.mirror.hasNode(e)) {
                                if (nm(e, this.mirror)) return;
                                this.movedSet.add(e);
                                let n = null;
                                t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[wm(this.mirror.getId(e), n)] = !0)
                            } else this.addedSet.add(e), this.droppedSet.delete(e);
                            tm(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (e.childNodes && e.childNodes.forEach((e => this.genAdds(e))), am(e) && e.shadowRoot.childNodes.forEach((t => {
                                this.processedNodeManager.add(t, this), this.genAdds(t, e)
                            })))
                        }
                    }
                }
                init(e) {
                    ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager", "ignoreCSSAttributes"].forEach((t => {
                        this[t] = e[t]
                    }))
                }
                freeze() {
                    this.frozen = !0, this.canvasManager.freeze()
                }
                unfreeze() {
                    this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                }
                isFrozen() {
                    return this.frozen
                }
                lock() {
                    this.locked = !0, this.canvasManager.lock()
                }
                unlock() {
                    this.locked = !1, this.canvasManager.unlock(), this.emit()
                }
                reset() {
                    this.shadowDomManager.reset(), this.canvasManager.reset()
                }
            }

            function Em(e, t) {
                e.delete(t), t.childNodes ? .forEach((t => Em(e, t)))
            }

            function Tm(e, t, n) {
                return 0 !== e.length && function(e, t, n) {
                    let r = t.parentNode;
                    for (; r;) {
                        const t = n.getId(r);
                        if (e.some((e => e.id === t))) return !0;
                        r = r.parentNode
                    }
                    return !1
                }(e, t, n)
            }

            function Cm(e, t) {
                return 0 !== e.size && Im(e, t)
            }

            function Im(e, t) {
                const {
                    parentNode: n
                } = t;
                return !!n && (!!e.has(n) || Im(e, n))
            }
            let Rm;
            const Am = e => {
                    if (!Rm) return e;
                    return (...t) => {
                        try {
                            return e(...t)
                        } catch (e) {
                            if (Rm && !0 === Rm(e)) return () => {};
                            throw e
                        }
                    }
                },
                Mm = [];

            function Om(e) {
                try {
                    if ("composedPath" in e) {
                        const t = e.composedPath();
                        if (t.length) return t[0]
                    } else if ("path" in e && e.path.length) return e.path[0]
                } catch {}
                return e && e.target
            }

            function Pm(e, t) {
                const n = new xm;
                Mm.push(n), n.init(e);
                let r = window.MutationObserver || window.__rrMutationObserver;
                const o = window ? .Zone ? .__symbol__ ? .("MutationObserver");
                o && window[o] && (r = window[o]);
                const s = new r(Am((t => {
                    e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t)
                })));
                return s.observe(t, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), s
            }

            function Lm({
                mouseInteractionCb: e,
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: o,
                unblockSelector: s,
                sampling: i
            }) {
                if (!1 === i.mouseInteraction) return () => {};
                const a = !0 === i.mouseInteraction || void 0 === i.mouseInteraction ? {} : i.mouseInteraction,
                    c = [];
                let u = null;
                return Object.keys(ym).filter((e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e])).forEach((i => {
                    let a = uh(i);
                    const l = (t => i => {
                        const a = Om(i);
                        if (tm(a, r, o, s, !0)) return;
                        let c = null,
                            l = t;
                        if ("pointerType" in i) {
                            switch (i.pointerType) {
                                case "mouse":
                                    c = _m.Mouse;
                                    break;
                                case "touch":
                                    c = _m.Touch;
                                    break;
                                case "pen":
                                    c = _m.Pen
                            }
                            c === _m.Touch ? ym[t] === ym.MouseDown ? l = "TouchStart" : ym[t] === ym.MouseUp && (l = "TouchEnd") : _m.Pen
                        } else om(i) && (c = _m.Touch);
                        null !== c ? (u = c, (l.startsWith("Touch") && c === _m.Touch || l.startsWith("Mouse") && c === _m.Mouse) && (c = null)) : ym[t] === ym.Click && (c = u, u = null);
                        const d = om(i) ? i.changedTouches[0] : i;
                        if (!d) return;
                        const p = n.getId(a),
                            {
                                clientX: f,
                                clientY: h
                            } = d;
                        Am(e)({
                            type: ym[l],
                            id: p,
                            x: f,
                            y: h,
                            ...null !== c && {
                                pointerType: c
                            }
                        })
                    })(i);
                    if (window.PointerEvent) switch (ym[i]) {
                        case ym.MouseDown:
                        case ym.MouseUp:
                            a = a.replace("mouse", "pointer");
                            break;
                        case ym.TouchStart:
                        case ym.TouchEnd:
                            return
                    }
                    c.push(Wh(a, l, t))
                })), Am((() => {
                    c.forEach((e => e()))
                }))
            }

            function Nm({
                scrollCb: e,
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: o,
                unblockSelector: s,
                sampling: i
            }) {
                return Wh("scroll", Am(Jh(Am((i => {
                    const a = Om(i);
                    if (!a || tm(a, r, o, s, !0)) return;
                    const c = n.getId(a);
                    if (a === t && t.defaultView) {
                        const n = Xh(t.defaultView);
                        e({
                            id: c,
                            x: n.left,
                            y: n.top
                        })
                    } else e({
                        id: c,
                        x: a.scrollLeft,
                        y: a.scrollTop
                    })
                })), i.scroll || 100)), t)
            }
            const Dm = ["INPUT", "TEXTAREA", "SELECT"],
                $m = new WeakMap;

            function Fm({
                inputCb: e,
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: o,
                unblockSelector: s,
                ignoreClass: i,
                ignoreSelector: a,
                maskInputOptions: c,
                maskInputFn: u,
                sampling: l,
                userTriggeredOnInput: d,
                maskTextClass: p,
                unmaskTextClass: f,
                maskTextSelector: h,
                unmaskTextSelector: m
            }) {
                function g(e) {
                    let n = Om(e);
                    const l = e.isTrusted,
                        g = n && lh(n.tagName);
                    if ("OPTION" === g && (n = n.parentElement), !n || !g || Dm.indexOf(g) < 0 || tm(n, r, o, s, !0)) return;
                    const _ = n;
                    if (_.classList.contains(i) || a && _.matches(a)) return;
                    const v = ph(n);
                    let b = fh(_, g, v),
                        S = !1;
                    const k = ah({
                            maskInputOptions: c,
                            tagName: g,
                            type: v
                        }),
                        w = Bh(n, p, h, f, m, k);
                    "radio" !== v && "checkbox" !== v || (S = n.checked), b = ch({
                        isMasked: w,
                        element: n,
                        value: b,
                        maskInputFn: u
                    }), y(n, d ? {
                        text: b,
                        isChecked: S,
                        userTriggered: l
                    } : {
                        text: b,
                        isChecked: S
                    });
                    const x = n.name;
                    "radio" === v && x && S && t.querySelectorAll(`input[type="radio"][name="${x}"]`).forEach((e => {
                        if (e !== n) {
                            const t = ch({
                                isMasked: w,
                                element: e,
                                value: fh(e, g, v),
                                maskInputFn: u
                            });
                            y(e, d ? {
                                text: t,
                                isChecked: !S,
                                userTriggered: !1
                            } : {
                                text: t,
                                isChecked: !S
                            })
                        }
                    }))
                }

                function y(t, r) {
                    const o = $m.get(t);
                    if (!o || o.text !== r.text || o.isChecked !== r.isChecked) {
                        $m.set(t, r);
                        const o = n.getId(t);
                        Am(e)({ ...r,
                            id: o
                        })
                    }
                }
                const _ = ("last" === l.input ? ["change"] : ["input", "change"]).map((e => Wh(e, Am(g), t))),
                    v = t.defaultView;
                if (!v) return () => {
                    _.forEach((e => e()))
                };
                const b = v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, "value"),
                    S = [
                        [v.HTMLInputElement.prototype, "value"],
                        [v.HTMLInputElement.prototype, "checked"],
                        [v.HTMLSelectElement.prototype, "value"],
                        [v.HTMLTextAreaElement.prototype, "value"],
                        [v.HTMLSelectElement.prototype, "selectedIndex"],
                        [v.HTMLOptionElement.prototype, "selected"]
                    ];
                return b && b.set && _.push(...S.map((e => Gh(e[0], e[1], {
                    set() {
                        Am(g)({
                            target: this,
                            isTrusted: !1
                        })
                    }
                }, !1, v)))), Am((() => {
                    _.forEach((e => e()))
                }))
            }

            function jm(e) {
                return function(e, t) {
                    if (qm("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || qm("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || qm("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || qm("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
                        const n = Array.from(e.parentRule.cssRules).indexOf(e);
                        t.unshift(n)
                    } else if (e.parentStyleSheet) {
                        const n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
                        t.unshift(n)
                    }
                    return t
                }(e, [])
            }

            function Bm(e, t, n) {
                let r, o;
                return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : o = n.getId(e), {
                    styleId: o,
                    id: r
                }) : {}
            }

            function Um({
                mirror: e,
                stylesheetManager: t
            }, n) {
                let r = null;
                r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
                const o = "#document" === n.nodeName ? n.defaultView ? .Document : n.ownerDocument ? .defaultView ? .ShadowRoot,
                    s = o ? .prototype ? Object.getOwnPropertyDescriptor(o ? .prototype, "adoptedStyleSheets") : void 0;
                return null !== r && -1 !== r && o && s ? (Object.defineProperty(n, "adoptedStyleSheets", {
                    configurable: s.configurable,
                    enumerable: s.enumerable,
                    get() {
                        return s.get ? .call(this)
                    },
                    set(e) {
                        const n = s.set ? .call(this, e);
                        if (null !== r && -1 !== r) try {
                            t.adoptStyleSheets(e, r)
                        } catch (e) {}
                        return n
                    }
                }), Am((() => {
                    Object.defineProperty(n, "adoptedStyleSheets", {
                        configurable: s.configurable,
                        enumerable: s.enumerable,
                        get: s.get,
                        set: s.set
                    })
                }))) : () => {}
            }

            function zm(e, t = {}) {
                const n = e.doc.defaultView;
                if (!n) return () => {};
                let r;
                e.recordDOM && (r = Pm(e, e.doc));
                const o = function({
                        mousemoveCb: e,
                        sampling: t,
                        doc: n,
                        mirror: r
                    }) {
                        if (!1 === t.mousemove) return () => {};
                        const o = "number" == typeof t.mousemove ? t.mousemove : 50,
                            s = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
                        let i, a = [];
                        const c = Jh(Am((t => {
                                const n = Date.now() - i;
                                e(a.map((e => (e.timeOffset -= n, e))), t), a = [], i = null
                            })), s),
                            u = Am(Jh(Am((e => {
                                const t = Om(e),
                                    {
                                        clientX: n,
                                        clientY: o
                                    } = om(e) ? e.changedTouches[0] : e;
                                i || (i = Yh()), a.push({
                                    x: n,
                                    y: o,
                                    id: r.getId(t),
                                    timeOffset: Yh() - i
                                }), c("undefined" != typeof DragEvent && e instanceof DragEvent ? gm.Drag : e instanceof MouseEvent ? gm.MouseMove : gm.TouchMove)
                            })), o, {
                                trailing: !1
                            })),
                            l = [Wh("mousemove", u, n), Wh("touchmove", u, n), Wh("drag", u, n)];
                        return Am((() => {
                            l.forEach((e => e()))
                        }))
                    }(e),
                    s = Lm(e),
                    i = Nm(e),
                    a = function({
                        viewportResizeCb: e
                    }, {
                        win: t
                    }) {
                        let n = -1,
                            r = -1;
                        return Wh("resize", Am(Jh(Am((() => {
                            const t = Zh(),
                                o = Qh();
                            n === t && r === o || (e({
                                width: Number(o),
                                height: Number(t)
                            }), n = t, r = o)
                        })), 200)), t)
                    }(e, {
                        win: n
                    }),
                    c = Fm(e),
                    u = function({
                        mediaInteractionCb: e,
                        blockClass: t,
                        blockSelector: n,
                        unblockSelector: r,
                        mirror: o,
                        sampling: s,
                        doc: i
                    }) {
                        const a = Am((i => Jh(Am((s => {
                                const a = Om(s);
                                if (!a || tm(a, t, n, r, !0)) return;
                                const {
                                    currentTime: c,
                                    volume: u,
                                    muted: l,
                                    playbackRate: d
                                } = a;
                                e({
                                    type: i,
                                    id: o.getId(a),
                                    currentTime: c,
                                    volume: u,
                                    muted: l,
                                    playbackRate: d
                                })
                            })), s.media || 500))),
                            c = [Wh("play", a(vm.Play), i), Wh("pause", a(vm.Pause), i), Wh("seeked", a(vm.Seeked), i), Wh("volumechange", a(vm.VolumeChange), i), Wh("ratechange", a(vm.RateChange), i)];
                        return Am((() => {
                            c.forEach((e => e()))
                        }))
                    }(e);
                let l = () => {},
                    d = () => {},
                    p = () => {},
                    f = () => {};
                e.recordDOM && (l = function({
                    styleSheetRuleCb: e,
                    mirror: t,
                    stylesheetManager: n
                }, {
                    win: r
                }) {
                    if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
                    const o = r.CSSStyleSheet.prototype.insertRule;
                    r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                        apply: Am(((r, o, s) => {
                            const [i, a] = s, {
                                id: c,
                                styleId: u
                            } = Bm(o, t, n.styleMirror);
                            return (c && -1 !== c || u && -1 !== u) && e({
                                id: c,
                                styleId: u,
                                adds: [{
                                    rule: i,
                                    index: a
                                }]
                            }), r.apply(o, s)
                        }))
                    });
                    const s = r.CSSStyleSheet.prototype.deleteRule;
                    let i, a;
                    r.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
                        apply: Am(((r, o, s) => {
                            const [i] = s, {
                                id: a,
                                styleId: c
                            } = Bm(o, t, n.styleMirror);
                            return (a && -1 !== a || c && -1 !== c) && e({
                                id: a,
                                styleId: c,
                                removes: [{
                                    index: i
                                }]
                            }), r.apply(o, s)
                        }))
                    }), r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = new Proxy(i, {
                        apply: Am(((r, o, s) => {
                            const [i] = s, {
                                id: a,
                                styleId: c
                            } = Bm(o, t, n.styleMirror);
                            return (a && -1 !== a || c && -1 !== c) && e({
                                id: a,
                                styleId: c,
                                replace: i
                            }), r.apply(o, s)
                        }))
                    })), r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
                        apply: Am(((r, o, s) => {
                            const [i] = s, {
                                id: a,
                                styleId: c
                            } = Bm(o, t, n.styleMirror);
                            return (a && -1 !== a || c && -1 !== c) && e({
                                id: a,
                                styleId: c,
                                replaceSync: i
                            }), r.apply(o, s)
                        }))
                    }));
                    const c = {};
                    Wm("CSSGroupingRule") ? c.CSSGroupingRule = r.CSSGroupingRule : (Wm("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule), Wm("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule), Wm("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
                    const u = {};
                    return Object.entries(c).forEach((([r, o]) => {
                        u[r] = {
                            insertRule: o.prototype.insertRule,
                            deleteRule: o.prototype.deleteRule
                        }, o.prototype.insertRule = new Proxy(u[r].insertRule, {
                            apply: Am(((r, o, s) => {
                                const [i, a] = s, {
                                    id: c,
                                    styleId: u
                                } = Bm(o.parentStyleSheet, t, n.styleMirror);
                                return (c && -1 !== c || u && -1 !== u) && e({
                                    id: c,
                                    styleId: u,
                                    adds: [{
                                        rule: i,
                                        index: [...jm(o), a || 0]
                                    }]
                                }), r.apply(o, s)
                            }))
                        }), o.prototype.deleteRule = new Proxy(u[r].deleteRule, {
                            apply: Am(((r, o, s) => {
                                const [i] = s, {
                                    id: a,
                                    styleId: c
                                } = Bm(o.parentStyleSheet, t, n.styleMirror);
                                return (a && -1 !== a || c && -1 !== c) && e({
                                    id: a,
                                    styleId: c,
                                    removes: [{
                                        index: [...jm(o), i]
                                    }]
                                }), r.apply(o, s)
                            }))
                        })
                    })), Am((() => {
                        r.CSSStyleSheet.prototype.insertRule = o, r.CSSStyleSheet.prototype.deleteRule = s, i && (r.CSSStyleSheet.prototype.replace = i), a && (r.CSSStyleSheet.prototype.replaceSync = a), Object.entries(c).forEach((([e, t]) => {
                            t.prototype.insertRule = u[e].insertRule, t.prototype.deleteRule = u[e].deleteRule
                        }))
                    }))
                }(e, {
                    win: n
                }), d = Um(e, e.doc), p = function({
                    styleDeclarationCb: e,
                    mirror: t,
                    ignoreCSSAttributes: n,
                    stylesheetManager: r
                }, {
                    win: o
                }) {
                    const s = o.CSSStyleDeclaration.prototype.setProperty;
                    o.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
                        apply: Am(((o, i, a) => {
                            const [c, u, l] = a;
                            if (n.has(c)) return s.apply(i, [c, u, l]);
                            const {
                                id: d,
                                styleId: p
                            } = Bm(i.parentRule ? .parentStyleSheet, t, r.styleMirror);
                            return (d && -1 !== d || p && -1 !== p) && e({
                                id: d,
                                styleId: p,
                                set: {
                                    property: c,
                                    value: u,
                                    priority: l
                                },
                                index: jm(i.parentRule)
                            }), o.apply(i, a)
                        }))
                    });
                    const i = o.CSSStyleDeclaration.prototype.removeProperty;
                    return o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i, {
                        apply: Am(((o, s, a) => {
                            const [c] = a;
                            if (n.has(c)) return i.apply(s, [c]);
                            const {
                                id: u,
                                styleId: l
                            } = Bm(s.parentRule ? .parentStyleSheet, t, r.styleMirror);
                            return (u && -1 !== u || l && -1 !== l) && e({
                                id: u,
                                styleId: l,
                                remove: {
                                    property: c
                                },
                                index: jm(s.parentRule)
                            }), o.apply(s, a)
                        }))
                    }), Am((() => {
                        o.CSSStyleDeclaration.prototype.setProperty = s, o.CSSStyleDeclaration.prototype.removeProperty = i
                    }))
                }(e, {
                    win: n
                }), e.collectFonts && (f = function({
                    fontCb: e,
                    doc: t
                }) {
                    const n = t.defaultView;
                    if (!n) return () => {};
                    const r = [],
                        o = new WeakMap,
                        s = n.FontFace;
                    n.FontFace = function(e, t, n) {
                        const r = new s(e, t, n);
                        return o.set(r, {
                            family: e,
                            buffer: "string" != typeof t,
                            descriptors: n,
                            fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                        }), r
                    };
                    const i = Kh(t.fonts, "add", (function(t) {
                        return function(n) {
                            return hm(Am((() => {
                                const t = o.get(n);
                                t && (e(t), o.delete(n))
                            })), 0), t.apply(this, [n])
                        }
                    }));
                    return r.push((() => {
                        n.FontFace = s
                    })), r.push(i), Am((() => {
                        r.forEach((e => e()))
                    }))
                }(e)));
                const h = function(e) {
                        const {
                            doc: t,
                            mirror: n,
                            blockClass: r,
                            blockSelector: o,
                            unblockSelector: s,
                            selectionCb: i
                        } = e;
                        let a = !0;
                        const c = Am((() => {
                            const e = t.getSelection();
                            if (!e || a && e ? .isCollapsed) return;
                            a = e.isCollapsed || !1;
                            const c = [],
                                u = e.rangeCount || 0;
                            for (let t = 0; t < u; t++) {
                                const i = e.getRangeAt(t),
                                    {
                                        startContainer: a,
                                        startOffset: u,
                                        endContainer: l,
                                        endOffset: d
                                    } = i;
                                tm(a, r, o, s, !0) || tm(l, r, o, s, !0) || c.push({
                                    start: n.getId(a),
                                    startOffset: u,
                                    end: n.getId(l),
                                    endOffset: d
                                })
                            }
                            i({
                                ranges: c
                            })
                        }));
                        return c(), Wh("selectionchange", c)
                    }(e),
                    m = function({
                        doc: e,
                        customElementCb: t
                    }) {
                        const n = e.defaultView;
                        return n && n.customElements ? Kh(n.customElements, "define", (function(e) {
                            return function(n, r, o) {
                                try {
                                    t({
                                        define: {
                                            name: n
                                        }
                                    })
                                } catch (e) {}
                                return e.apply(this, [n, r, o])
                            }
                        })) : () => {}
                    }(e),
                    g = [];
                for (const t of e.plugins) g.push(t.observer(t.callback, n, t.options));
                return Am((() => {
                    Mm.forEach((e => e.reset())), r ? .disconnect(), o(), s(), i(), a(), c(), u(), l(), d(), p(), f(), h(), m(), g.forEach((e => e()))
                }))
            }

            function qm(e) {
                return void 0 !== window[e]
            }

            function Wm(e) {
                return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
            }
            class Hm {
                constructor(e) {
                    this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
                }
                getId(e, t, n, r) {
                    const o = n || this.getIdToRemoteIdMap(e),
                        s = r || this.getRemoteIdToIdMap(e);
                    let i = o.get(t);
                    return i || (i = this.generateIdFn(), o.set(t, i), s.set(i, t)), i
                }
                getIds(e, t) {
                    const n = this.getIdToRemoteIdMap(e),
                        r = this.getRemoteIdToIdMap(e);
                    return t.map((t => this.getId(e, t, n, r)))
                }
                getRemoteId(e, t, n) {
                    const r = n || this.getRemoteIdToIdMap(e);
                    if ("number" != typeof t) return t;
                    const o = r.get(t);
                    return o || -1
                }
                getRemoteIds(e, t) {
                    const n = this.getRemoteIdToIdMap(e);
                    return t.map((t => this.getRemoteId(e, t, n)))
                }
                reset(e) {
                    if (!e) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
                    this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
                }
                getIdToRemoteIdMap(e) {
                    let t = this.iframeIdToRemoteIdMap.get(e);
                    return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
                }
                getRemoteIdToIdMap(e) {
                    let t = this.iframeRemoteIdToIdMap.get(e);
                    return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
                }
            }
            class Vm {
                constructor() {
                    this.crossOriginIframeMirror = new Hm(kh), this.crossOriginIframeRootIdMap = new WeakMap
                }
                addIframe() {}
                addLoadListener() {}
                attachIframe() {}
            }
            class Jm {
                constructor(e) {
                    this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new Hm(kh), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Hm(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
                }
                addIframe(e) {
                    this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
                }
                addLoadListener(e) {
                    this.loadListener = e
                }
                attachIframe(e, t) {
                    this.mutationCb({
                        adds: [{
                            parentId: this.mirror.getId(e),
                            nextId: null,
                            node: t
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }), this.recordCrossOriginIframes && e.contentWindow ? .addEventListener("message", this.handleMessage.bind(this)), this.loadListener ? .(e);
                    const n = bm(e);
                    n && n.adoptedStyleSheets && n.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(n.adoptedStyleSheets, this.mirror.getId(n))
                }
                handleMessage(e) {
                    const t = e;
                    if ("rrweb" !== t.data.type || t.origin !== t.data.origin) return;
                    if (!e.source) return;
                    const n = this.crossOriginIframeMap.get(e.source);
                    if (!n) return;
                    const r = this.transformCrossOriginEvent(n, t.data.event);
                    r && this.wrappedEmit(r, t.data.isCheckout)
                }
                transformCrossOriginEvent(e, t) {
                    switch (t.type) {
                        case mm.FullSnapshot:
                            {
                                this.crossOriginIframeMirror.reset(e),
                                this.crossOriginIframeStyleMirror.reset(e),
                                this.replaceIdOnNode(t.data.node, e);
                                const n = t.data.node.id;
                                return this.crossOriginIframeRootIdMap.set(e, n),
                                this.patchRootIdOnNode(t.data.node, n),
                                {
                                    timestamp: t.timestamp,
                                    type: mm.IncrementalSnapshot,
                                    data: {
                                        source: gm.Mutation,
                                        adds: [{
                                            parentId: this.mirror.getId(e),
                                            nextId: null,
                                            node: t.data.node
                                        }],
                                        removes: [],
                                        texts: [],
                                        attributes: [],
                                        isAttachIframe: !0
                                    }
                                }
                            }
                        case mm.Meta:
                        case mm.Load:
                        case mm.DomContentLoaded:
                            return !1;
                        case mm.Plugin:
                            return t;
                        case mm.Custom:
                            return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                        case mm.IncrementalSnapshot:
                            switch (t.data.source) {
                                case gm.Mutation:
                                    return t.data.adds.forEach((t => {
                                        this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                                        const n = this.crossOriginIframeRootIdMap.get(e);
                                        n && this.patchRootIdOnNode(t.node, n)
                                    })), t.data.removes.forEach((t => {
                                        this.replaceIds(t, e, ["parentId", "id"])
                                    })), t.data.attributes.forEach((t => {
                                        this.replaceIds(t, e, ["id"])
                                    })), t.data.texts.forEach((t => {
                                        this.replaceIds(t, e, ["id"])
                                    })), t;
                                case gm.Drag:
                                case gm.TouchMove:
                                case gm.MouseMove:
                                    return t.data.positions.forEach((t => {
                                        this.replaceIds(t, e, ["id"])
                                    })), t;
                                case gm.ViewportResize:
                                    return !1;
                                case gm.MediaInteraction:
                                case gm.MouseInteraction:
                                case gm.Scroll:
                                case gm.CanvasMutation:
                                case gm.Input:
                                    return this.replaceIds(t.data, e, ["id"]), t;
                                case gm.StyleSheetRule:
                                case gm.StyleDeclaration:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                                case gm.Font:
                                    return t;
                                case gm.Selection:
                                    return t.data.ranges.forEach((t => {
                                        this.replaceIds(t, e, ["start", "end"])
                                    })), t;
                                case gm.AdoptedStyleSheet:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), t.data.styles ? .forEach((t => {
                                        this.replaceStyleIds(t, e, ["styleId"])
                                    })), t
                            }
                    }
                    return !1
                }
                replace(e, t, n, r) {
                    for (const o of r)(Array.isArray(t[o]) || "number" == typeof t[o]) && (Array.isArray(t[o]) ? t[o] = e.getIds(n, t[o]) : t[o] = e.getId(n, t[o]));
                    return t
                }
                replaceIds(e, t, n) {
                    return this.replace(this.crossOriginIframeMirror, e, t, n)
                }
                replaceStyleIds(e, t, n) {
                    return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
                }
                replaceIdOnNode(e, t) {
                    this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach((e => {
                        this.replaceIdOnNode(e, t)
                    }))
                }
                patchRootIdOnNode(e, t) {
                    e.type === th.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach((e => {
                        this.patchRootIdOnNode(e, t)
                    }))
                }
            }
            class Gm {
                init() {}
                addShadowRoot() {}
                observeAttachShadow() {}
                reset() {}
            }
            class Km {
                constructor(e) {
                    this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
                }
                init() {
                    this.reset(), this.patchAttachShadow(Element, document)
                }
                addShadowRoot(e, t) {
                    if (!rh(e)) return;
                    if (this.shadowDoms.has(e)) return;
                    this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
                    const n = Pm({ ...this.bypassOptions,
                        doc: t,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }, e);
                    this.restoreHandlers.push((() => n.disconnect())), this.restoreHandlers.push(Nm({ ...this.bypassOptions,
                        scrollCb: this.scrollCb,
                        doc: e,
                        mirror: this.mirror
                    })), hm((() => {
                        e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(Um({
                            mirror: this.mirror,
                            stylesheetManager: this.bypassOptions.stylesheetManager
                        }, e))
                    }), 0)
                }
                observeAttachShadow(e) {
                    const t = bm(e),
                        n = function(e) {
                            try {
                                return e.contentWindow
                            } catch (e) {}
                        }(e);
                    t && n && this.patchAttachShadow(n.Element, t)
                }
                patchAttachShadow(e, t) {
                    const n = this;
                    this.restoreHandlers.push(Kh(e.prototype, "attachShadow", (function(e) {
                        return function(r) {
                            const o = e.call(this, r);
                            return this.shadowRoot && dm(this) && n.addShadowRoot(this.shadowRoot, t), o
                        }
                    })))
                }
                reset() {
                    this.restoreHandlers.forEach((e => {
                        try {
                            e()
                        } catch (e) {}
                    })), this.restoreHandlers = [], this.shadowDoms = new WeakSet, this.bypassOptions.canvasManager.resetShadowRoots()
                }
            }
            for (var Ym = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xm = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Zm = 0; Zm < 64; Zm++) Xm[Ym.charCodeAt(Zm)] = Zm;
            class Qm {
                reset() {}
                freeze() {}
                unfreeze() {}
                lock() {}
                unlock() {}
                snapshot() {}
                addWindow() {}
                addShadowRoot() {}
                resetShadowRoots() {}
            }
            class eg {
                constructor(e) {
                    this.trackedLinkElements = new WeakSet, this.styleMirror = new cm, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
                }
                attachLinkElement(e, t) {
                    "_cssText" in t.attributes && this.mutationCb({
                        adds: [],
                        removes: [],
                        texts: [],
                        attributes: [{
                            id: t.id,
                            attributes: t.attributes
                        }]
                    }), this.trackLinkElement(e)
                }
                trackLinkElement(e) {
                    this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
                }
                adoptStyleSheets(e, t) {
                    if (0 === e.length) return;
                    const n = {
                            id: t,
                            styleIds: []
                        },
                        r = [];
                    for (const t of e) {
                        let e;
                        this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), r.push({
                            styleId: e,
                            rules: Array.from(t.rules || CSSRule, ((e, t) => ({
                                rule: sh(e),
                                index: t
                            })))
                        })), n.styleIds.push(e)
                    }
                    r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
                }
                reset() {
                    this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
                }
                trackStylesheetInLinkElement(e) {}
            }
            class tg {
                constructor() {
                    this.nodeMap = new WeakMap, this.active = !1
                }
                inOtherBuffer(e, t) {
                    const n = this.nodeMap.get(e);
                    return n && Array.from(n).some((e => e !== t))
                }
                add(e, t) {
                    this.active || (this.active = !0, function(...e) {
                        fm("requestAnimationFrame")(...e)
                    }((() => {
                        this.nodeMap = new WeakMap, this.active = !1
                    }))), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
                }
                destroy() {}
            }
            let ng, rg;
            try {
                if (2 !== Array.from([1], (e => 2 * e))[0]) {
                    const e = document.createElement("iframe");
                    document.body.appendChild(e), Array.from = e.contentWindow ? .Array.from || Array.from, document.body.removeChild(e)
                }
            } catch (e) {
                console.debug("Unable to override Array.from", e)
            }
            const og = new ih;

            function sg(e = {}) {
                const {
                    emit: t,
                    checkoutEveryNms: n,
                    checkoutEveryNth: r,
                    blockClass: o = "rr-block",
                    blockSelector: s = null,
                    unblockSelector: i = null,
                    ignoreClass: a = "rr-ignore",
                    ignoreSelector: c = null,
                    maskAllText: u = !1,
                    maskTextClass: l = "rr-mask",
                    unmaskTextClass: d = null,
                    maskTextSelector: p = null,
                    unmaskTextSelector: f = null,
                    inlineStylesheet: h = !0,
                    maskAllInputs: m,
                    maskInputOptions: g,
                    slimDOMOptions: y,
                    maskAttributeFn: _,
                    maskInputFn: v,
                    maskTextFn: b,
                    maxCanvasSize: S = null,
                    packFn: k,
                    sampling: w = {},
                    dataURLOptions: x = {},
                    mousemoveWait: E,
                    recordDOM: T = !0,
                    recordCanvas: C = !1,
                    recordCrossOriginIframes: I = !1,
                    recordAfter: R = ("DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load"),
                    userTriggeredOnInput: A = !1,
                    collectFonts: M = !1,
                    inlineImages: O = !1,
                    plugins: P,
                    keepIframeSrcFn: L = () => !1,
                    ignoreCSSAttributes: N = new Set([]),
                    errorHandler: D,
                    onMutation: $,
                    getCanvasManager: F
                } = e;
                Rm = D;
                const j = !I || window.parent === window;
                let B = !1;
                if (!j) try {
                    window.parent.document && (B = !1)
                } catch (e) {
                    B = !0
                }
                if (j && !t) throw new Error("emit function is required");
                if (!j && !B) return () => {};
                void 0 !== E && void 0 === w.mousemove && (w.mousemove = E), og.reset();
                const U = !0 === m ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        radio: !0,
                        checkbox: !0
                    } : void 0 !== g ? g : {},
                    z = !0 === y || "all" === y ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === y,
                        headMetaDescKeywords: "all" === y
                    } : y || {};
                let q;
                ! function(e = window) {
                    "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
                        let t = e[0];
                        if (!(0 in e)) throw new TypeError("1 argument is required");
                        do {
                            if (this === t) return !0
                        } while (t = t && t.parentNode);
                        return !1
                    })
                }();
                let W = 0;
                const H = e => {
                    for (const t of P || []) t.eventProcessor && (e = t.eventProcessor(e));
                    return k && !B && (e = k(e)), e
                };
                ng = (e, o) => {
                    const s = e;
                    if (s.timestamp = Yh(), !Mm[0] ? .isFrozen() || s.type === mm.FullSnapshot || s.type === mm.IncrementalSnapshot && s.data.source === gm.Mutation || Mm.forEach((e => e.unfreeze())), j) t ? .(H(s), o);
                    else if (B) {
                        const e = {
                            type: "rrweb",
                            event: H(s),
                            origin: window.location.origin,
                            isCheckout: o
                        };
                        window.parent.postMessage(e, "*")
                    }
                    if (s.type === mm.FullSnapshot) q = s, W = 0;
                    else if (s.type === mm.IncrementalSnapshot) {
                        if (s.data.source === gm.Mutation && s.data.isAttachIframe) return;
                        W++;
                        const e = r && W >= r,
                            t = n && q && s.timestamp - q.timestamp > n;
                        (e || t) && ee(!0)
                    }
                };
                const V = e => {
                        ng({
                            type: mm.IncrementalSnapshot,
                            data: {
                                source: gm.Mutation,
                                ...e
                            }
                        })
                    },
                    J = e => ng({
                        type: mm.IncrementalSnapshot,
                        data: {
                            source: gm.Scroll,
                            ...e
                        }
                    }),
                    G = e => ng({
                        type: mm.IncrementalSnapshot,
                        data: {
                            source: gm.CanvasMutation,
                            ...e
                        }
                    }),
                    K = new eg({
                        mutationCb: V,
                        adoptedStyleSheetCb: e => ng({
                            type: mm.IncrementalSnapshot,
                            data: {
                                source: gm.AdoptedStyleSheet,
                                ...e
                            }
                        })
                    }),
                    Y = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new Vm : new Jm({
                        mirror: og,
                        mutationCb: V,
                        stylesheetManager: K,
                        recordCrossOriginIframes: I,
                        wrappedEmit: ng
                    });
                for (const e of P || []) e.getMirror && e.getMirror({
                    nodeMirror: og,
                    crossOriginIframeMirror: Y.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: Y.crossOriginIframeStyleMirror
                });
                const X = new tg,
                    Z = function(e, t) {
                        try {
                            return e ? e(t) : new Qm
                        } catch {
                            return console.warn("Unable to initialize CanvasManager"), new Qm
                        }
                    }(F, {
                        mirror: og,
                        win: window,
                        mutationCb: e => ng({
                            type: mm.IncrementalSnapshot,
                            data: {
                                source: gm.CanvasMutation,
                                ...e
                            }
                        }),
                        recordCanvas: C,
                        blockClass: o,
                        blockSelector: s,
                        unblockSelector: i,
                        maxCanvasSize: S,
                        sampling: w.canvas,
                        dataURLOptions: x,
                        errorHandler: D
                    }),
                    Q = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new Gm : new Km({
                        mutationCb: V,
                        scrollCb: J,
                        bypassOptions: {
                            onMutation: $,
                            blockClass: o,
                            blockSelector: s,
                            unblockSelector: i,
                            maskAllText: u,
                            maskTextClass: l,
                            unmaskTextClass: d,
                            maskTextSelector: p,
                            unmaskTextSelector: f,
                            inlineStylesheet: h,
                            maskInputOptions: U,
                            dataURLOptions: x,
                            maskAttributeFn: _,
                            maskTextFn: b,
                            maskInputFn: v,
                            recordCanvas: C,
                            inlineImages: O,
                            sampling: w,
                            slimDOMOptions: z,
                            iframeManager: Y,
                            stylesheetManager: K,
                            canvasManager: Z,
                            keepIframeSrcFn: L,
                            processedNodeManager: X,
                            ignoreCSSAttributes: N
                        },
                        mirror: og
                    }),
                    ee = (e = !1) => {
                        if (!T) return;
                        ng({
                            type: mm.Meta,
                            data: {
                                href: window.location.href,
                                width: Qh(),
                                height: Zh()
                            }
                        }, e), K.reset(), Q.init(), Mm.forEach((e => e.lock()));
                        const t = function(e, t) {
                            const {
                                mirror: n = new ih,
                                blockClass: r = "rr-block",
                                blockSelector: o = null,
                                unblockSelector: s = null,
                                maskAllText: i = !1,
                                maskTextClass: a = "rr-mask",
                                unmaskTextClass: c = null,
                                maskTextSelector: u = null,
                                unmaskTextSelector: l = null,
                                inlineStylesheet: d = !0,
                                inlineImages: p = !1,
                                recordCanvas: f = !1,
                                maskAllInputs: h = !1,
                                maskAttributeFn: m,
                                maskTextFn: g,
                                maskInputFn: y,
                                slimDOM: _ = !1,
                                dataURLOptions: v,
                                preserveWhiteSpace: b,
                                onSerialize: S,
                                onIframeLoad: k,
                                iframeLoadTimeout: w,
                                onBlockedImageLoad: x,
                                onStylesheetLoad: E,
                                stylesheetLoadTimeout: T,
                                keepIframeSrcFn: C = () => !1,
                                ignoreCSSAttributes: I = new Set([])
                            } = t || {};
                            return qh(e, {
                                doc: e,
                                mirror: n,
                                blockClass: r,
                                blockSelector: o,
                                unblockSelector: s,
                                maskAllText: i,
                                maskTextClass: a,
                                unmaskTextClass: c,
                                maskTextSelector: u,
                                unmaskTextSelector: l,
                                skipChild: !1,
                                inlineStylesheet: d,
                                maskInputOptions: !0 === h ? {
                                    color: !0,
                                    date: !0,
                                    "datetime-local": !0,
                                    email: !0,
                                    month: !0,
                                    number: !0,
                                    range: !0,
                                    search: !0,
                                    tel: !0,
                                    text: !0,
                                    time: !0,
                                    url: !0,
                                    week: !0,
                                    textarea: !0,
                                    select: !0
                                } : !1 === h ? {} : h,
                                maskAttributeFn: m,
                                maskTextFn: g,
                                maskInputFn: y,
                                slimDOMOptions: !0 === _ || "all" === _ ? {
                                    script: !0,
                                    comment: !0,
                                    headFavicon: !0,
                                    headWhitespace: !0,
                                    headMetaDescKeywords: "all" === _,
                                    headMetaSocial: !0,
                                    headMetaRobots: !0,
                                    headMetaHttpEquiv: !0,
                                    headMetaAuthorship: !0,
                                    headMetaVerification: !0
                                } : !1 === _ ? {} : _,
                                dataURLOptions: v,
                                inlineImages: p,
                                recordCanvas: f,
                                preserveWhiteSpace: b,
                                onSerialize: S,
                                onIframeLoad: k,
                                iframeLoadTimeout: w,
                                onBlockedImageLoad: x,
                                onStylesheetLoad: E,
                                stylesheetLoadTimeout: T,
                                keepIframeSrcFn: C,
                                newlyAddedElement: !1,
                                ignoreCSSAttributes: I
                            })
                        }(document, {
                            mirror: og,
                            blockClass: o,
                            blockSelector: s,
                            unblockSelector: i,
                            maskAllText: u,
                            maskTextClass: l,
                            unmaskTextClass: d,
                            maskTextSelector: p,
                            unmaskTextSelector: f,
                            inlineStylesheet: h,
                            maskAllInputs: U,
                            maskAttributeFn: _,
                            maskInputFn: v,
                            maskTextFn: b,
                            slimDOM: z,
                            dataURLOptions: x,
                            recordCanvas: C,
                            inlineImages: O,
                            onSerialize: e => {
                                sm(e, og) && Y.addIframe(e), im(e, og) && K.trackLinkElement(e), am(e) && Q.addShadowRoot(e.shadowRoot, document)
                            },
                            onIframeLoad: (e, t) => {
                                Y.attachIframe(e, t), e.contentWindow && Z.addWindow(e.contentWindow), Q.observeAttachShadow(e)
                            },
                            onStylesheetLoad: (e, t) => {
                                K.attachLinkElement(e, t)
                            },
                            onBlockedImageLoad: (e, t, {
                                width: n,
                                height: r
                            }) => {
                                V({
                                    adds: [],
                                    removes: [],
                                    texts: [],
                                    attributes: [{
                                        id: t.id,
                                        attributes: {
                                            style: {
                                                width: `${n}px`,
                                                height: `${r}px`
                                            }
                                        }
                                    }]
                                })
                            },
                            keepIframeSrcFn: L,
                            ignoreCSSAttributes: N
                        });
                        if (!t) return console.warn("Failed to snapshot the document");
                        ng({
                            type: mm.FullSnapshot,
                            data: {
                                node: t,
                                initialOffset: Xh(window)
                            }
                        }), Mm.forEach((e => e.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && K.adoptStyleSheets(document.adoptedStyleSheets, og.getId(document))
                    };
                rg = ee;
                try {
                    const e = [],
                        t = e => Am(zm)({
                            onMutation: $,
                            mutationCb: V,
                            mousemoveCb: (e, t) => ng({
                                type: mm.IncrementalSnapshot,
                                data: {
                                    source: t,
                                    positions: e
                                }
                            }),
                            mouseInteractionCb: e => ng({
                                type: mm.IncrementalSnapshot,
                                data: {
                                    source: gm.MouseInteraction,
                                    ...e
                                }
                            }),
                            scrollCb: J,
                            viewportResizeCb: e => ng({
                                type: mm.IncrementalSnapshot,
                                data: {
                                    source: gm.ViewportResize,
                                    ...e
                                }
                            }),
                            inputCb: e => ng({
                                type: mm.IncrementalSnapshot,
                                data: {
                                    source: gm.Input,
                                    ...e
                                }
                            }),
                            mediaInteractionCb: e => ng({
                                type: mm.IncrementalSnapshot,
                                data: {
                                    source: gm.MediaInteraction,
                                    ...e
                                }
                            }),
                            styleSheetRuleCb: e => ng({
                                type: mm.IncrementalSnapshot,
                                data: {
                                    source: gm.StyleSheetRule,
                                    ...e
                                }
                            }),
                            styleDeclarationCb: e => ng({
                                type: mm.IncrementalSnapshot,
                                data: {
                                    source: gm.StyleDeclaration,
                                    ...e
                                }
                            }),
                            canvasMutationCb: G,
                            fontCb: e => ng({
                                type: mm.IncrementalSnapshot,
                                data: {
                                    source: gm.Font,
                                    ...e
                                }
                            }),
                            selectionCb: e => {
                                ng({
                                    type: mm.IncrementalSnapshot,
                                    data: {
                                        source: gm.Selection,
                                        ...e
                                    }
                                })
                            },
                            customElementCb: e => {
                                ng({
                                    type: mm.IncrementalSnapshot,
                                    data: {
                                        source: gm.CustomElement,
                                        ...e
                                    }
                                })
                            },
                            blockClass: o,
                            ignoreClass: a,
                            ignoreSelector: c,
                            maskAllText: u,
                            maskTextClass: l,
                            unmaskTextClass: d,
                            maskTextSelector: p,
                            unmaskTextSelector: f,
                            maskInputOptions: U,
                            inlineStylesheet: h,
                            sampling: w,
                            recordDOM: T,
                            recordCanvas: C,
                            inlineImages: O,
                            userTriggeredOnInput: A,
                            collectFonts: M,
                            doc: e,
                            maskAttributeFn: _,
                            maskInputFn: v,
                            maskTextFn: b,
                            keepIframeSrcFn: L,
                            blockSelector: s,
                            unblockSelector: i,
                            slimDOMOptions: z,
                            dataURLOptions: x,
                            mirror: og,
                            iframeManager: Y,
                            stylesheetManager: K,
                            shadowDomManager: Q,
                            processedNodeManager: X,
                            canvasManager: Z,
                            ignoreCSSAttributes: N,
                            plugins: P ? .filter((e => e.observer)) ? .map((e => ({
                                observer: e.observer,
                                options: e.options,
                                callback: t => ng({
                                    type: mm.Plugin,
                                    data: {
                                        plugin: e.name,
                                        payload: t
                                    }
                                })
                            }))) || []
                        }, {});
                    Y.addLoadListener((n => {
                        try {
                            e.push(t(n.contentDocument))
                        } catch (e) {
                            console.warn(e)
                        }
                    }));
                    const n = () => {
                        ee(), e.push(t(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(Wh("DOMContentLoaded", (() => {
                        ng({
                            type: mm.DomContentLoaded,
                            data: {}
                        }), "DOMContentLoaded" === R && n()
                    }))), e.push(Wh("load", (() => {
                        ng({
                            type: mm.Load,
                            data: {}
                        }), "load" === R && n()
                    }), window))), () => {
                        e.forEach((e => e())), X.destroy(), rg = void 0, Rm = void 0
                    }
                } catch (e) {
                    console.warn(e)
                }
            }
            var ig, ag;
            sg.mirror = og, sg.takeFullSnapshot = function(e) {
                if (!rg) throw new Error("please take full snapshot after start recording");
                rg(e)
            }, (ag = ig || (ig = {}))[ag.NotStarted = 0] = "NotStarted", ag[ag.Running = 1] = "Running", ag[ag.Stopped = 2] = "Stopped";

            function cg(e) {
                return e > 9999999999 ? e : 1e3 * e
            }

            function ug(e) {
                return e > 9999999999 ? e / 1e3 : e
            }

            function lg(e, t) {
                "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate((() => (e.throttledAddEvent({
                    type: mm.Custom,
                    timestamp: 1e3 * (t.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: tr(t, 10, 1e3)
                    }
                }), "console" === t.category))))
            }

            function dg(e) {
                return e.closest("button,a") || e
            }

            function pg(e) {
                const t = fg(e);
                return t && t instanceof Element ? dg(t) : t
            }

            function fg(e) {
                return function(e) {
                    return "object" == typeof e && !!e && "target" in e
                }(e) ? e.target : e
            }
            let hg;

            function mg(e) {
                return hg || (hg = [], $(Vf, "open", (function(e) {
                    return function(...t) {
                        if (hg) try {
                            hg.forEach((e => e()))
                        } catch {}
                        return e.apply(Vf, t)
                    }
                }))), hg.push(e), () => {
                    const t = hg ? hg.indexOf(e) : -1;
                    t > -1 && hg.splice(t, 1)
                }
            }
            const gg = new Set([gm.Mutation, gm.StyleSheetRule, gm.StyleDeclaration, gm.AdoptedStyleSheet, gm.CanvasMutation, gm.Selection, gm.MediaInteraction]);
            class yg {
                constructor(e, t, n = lg) {
                    this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scrollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n
                }
                addListeners() {
                    const e = mg((() => {
                        this._lastMutation = vg()
                    }));
                    this._teardown = () => {
                        e(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
                    }
                }
                removeListeners() {
                    this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
                }
                handleClick(e, t) {
                    if (function(e, t) {
                            if (!_g.includes(e.tagName)) return !0;
                            if ("INPUT" === e.tagName && !["submit", "button"].includes(e.getAttribute("type") || "")) return !0;
                            if ("A" === e.tagName && (e.hasAttribute("download") || e.hasAttribute("target") && "_self" !== e.getAttribute("target"))) return !0;
                            if (t && e.matches(t)) return !0;
                            return !1
                        }(t, this._ignoreSelector) || ! function(e) {
                            return !(!e.data || "number" != typeof e.data.nodeId || !e.timestamp)
                        }(e)) return;
                    const n = {
                        timestamp: ug(e.timestamp),
                        clickBreadcrumb: e,
                        clickCount: 0,
                        node: t
                    };
                    this._clicks.some((e => e.node === n.node && Math.abs(e.timestamp - n.timestamp) < 1)) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks())
                }
                registerMutation(e = Date.now()) {
                    this._lastMutation = ug(e)
                }
                registerScroll(e = Date.now()) {
                    this._lastScroll = ug(e)
                }
                registerClick(e) {
                    const t = dg(e);
                    this._handleMultiClick(t)
                }
                _handleMultiClick(e) {
                    this._getClicks(e).forEach((e => {
                        e.clickCount++
                    }))
                }
                _getClicks(e) {
                    return this._clicks.filter((t => t.node === e))
                }
                _checkClicks() {
                    const e = [],
                        t = vg();
                    this._clicks.forEach((n => {
                        !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= t && e.push(n)
                    }));
                    for (const t of e) {
                        const e = this._clicks.indexOf(t);
                        e > -1 && (this._generateBreadcrumbs(t), this._clicks.splice(e, 1))
                    }
                    this._clicks.length && this._scheduleCheckClicks()
                }
                _generateBreadcrumbs(e) {
                    const t = this._replay,
                        n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout,
                        r = e.mutationAfter && e.mutationAfter <= this._threshold,
                        o = !n && !r,
                        {
                            clickCount: s,
                            clickBreadcrumb: i
                        } = e;
                    if (o) {
                        const n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                            r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                            o = {
                                type: "default",
                                message: i.message,
                                timestamp: i.timestamp,
                                category: "ui.slowClickDetected",
                                data: { ...i.data,
                                    url: Vf.location.href,
                                    route: t.getCurrentRoute(),
                                    timeAfterClickMs: n,
                                    endReason: r,
                                    clickCount: s || 1
                                }
                            };
                        this._addBreadcrumbEvent(t, o)
                    } else if (s > 1) {
                        const e = {
                            type: "default",
                            message: i.message,
                            timestamp: i.timestamp,
                            category: "ui.multiClick",
                            data: { ...i.data,
                                url: Vf.location.href,
                                route: t.getCurrentRoute(),
                                clickCount: s,
                                metric: !0
                            }
                        };
                        this._addBreadcrumbEvent(t, e)
                    }
                }
                _scheduleCheckClicks() {
                    this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = Zl((() => this._checkClicks()), 1e3)
                }
            }
            const _g = ["A", "BUTTON", "INPUT"];

            function vg() {
                return Date.now() / 1e3
            }

            function bg(e, t) {
                try {
                    if (! function(e) {
                            return 3 === e.type
                        }(t)) return;
                    const {
                        source: n
                    } = t.data;
                    if (gg.has(n) && e.registerMutation(t.timestamp), n === gm.Scroll && e.registerScroll(t.timestamp), function(e) {
                            return e.data.source === gm.MouseInteraction
                        }(t)) {
                        const {
                            type: n,
                            id: r
                        } = t.data, o = sg.mirror.getNode(r);
                        o instanceof HTMLElement && n === ym.Click && e.registerClick(o)
                    }
                } catch {}
            }

            function Sg(e) {
                return {
                    timestamp: Date.now() / 1e3,
                    type: "default",
                    ...e
                }
            }
            var kg = (e => (e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e))(kg || {});
            const wg = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);

            function xg(e) {
                const t = {};
                !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]);
                for (const n in e)
                    if (wg.has(n)) {
                        let r = n;
                        "data-testid" !== n && "data-test-id" !== n || (r = "testId"), t[r] = e[n]
                    }
                return t
            }
            const Eg = e => t => {
                if (!e.isEnabled()) return;
                const n = function(e) {
                    const {
                        target: t,
                        message: n
                    } = function(e) {
                        const t = "click" === e.name;
                        let n, r = null;
                        try {
                            r = t ? pg(e.event) : fg(e.event), n = T(r, {
                                maxStringLength: 200
                            }) || "<unknown>"
                        } catch {
                            n = "<unknown>"
                        }
                        return {
                            target: r,
                            message: n
                        }
                    }(e);
                    return Sg({
                        category: `ui.${e.name}`,
                        ...Tg(t, n)
                    })
                }(t);
                if (!n) return;
                const r = "click" === t.name,
                    o = r ? t.event : void 0;
                var s, i, a;
                !(r && e.clickDetector && o ? .target) || o.altKey || o.metaKey || o.ctrlKey || o.shiftKey || (s = e.clickDetector, i = n, a = pg(t.event), s.handleClick(i, a)), lg(e, n)
            };

            function Tg(e, t) {
                const n = sg.mirror.getId(e),
                    r = n && sg.mirror.getNode(n),
                    o = r && sg.mirror.getMeta(r),
                    s = o && function(e) {
                        return e.type === kg.Element
                    }(o) ? o : null;
                return {
                    message: t,
                    data: s ? {
                        nodeId: n,
                        node: {
                            id: n,
                            tagName: s.tagName,
                            textContent: Array.from(s.childNodes).map((e => e.type === kg.Text && e.textContent)).filter(Boolean).map((e => e.trim())).join(""),
                            attributes: xg(s.attributes)
                        }
                    } : {}
                }
            }

            function Cg(e, t) {
                if (!e.isEnabled()) return;
                e.updateUserActivity();
                const n = function(e) {
                    const {
                        metaKey: t,
                        shiftKey: n,
                        ctrlKey: r,
                        altKey: o,
                        key: s,
                        target: i
                    } = e;
                    if (!i || function(e) {
                            return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable
                        }(i) || !s) return null;
                    const a = t || r || o,
                        c = 1 === s.length;
                    if (!a && c) return null;
                    const u = T(i, {
                            maxStringLength: 200
                        }) || "<unknown>",
                        l = Tg(i, u);
                    return Sg({
                        category: "ui.keyDown",
                        message: u,
                        data: { ...l.data,
                            metaKey: t,
                            shiftKey: n,
                            ctrlKey: r,
                            altKey: o,
                            key: s
                        }
                    })
                }(t);
                n && lg(e, n)
            }
            const Ig = {
                resource: function(e) {
                    const {
                        entryType: t,
                        initiatorType: n,
                        name: r,
                        responseEnd: o,
                        startTime: s,
                        decodedBodySize: i,
                        encodedBodySize: a,
                        responseStatus: c,
                        transferSize: u
                    } = e;
                    if (["fetch", "xmlhttprequest"].includes(n)) return null;
                    return {
                        type: `${t}.${n}`,
                        start: Mg(s),
                        end: Mg(o),
                        name: r,
                        data: {
                            size: u,
                            statusCode: c,
                            decodedBodySize: i,
                            encodedBodySize: a
                        }
                    }
                },
                paint: function(e) {
                    const {
                        duration: t,
                        entryType: n,
                        name: r,
                        startTime: o
                    } = e, s = Mg(o);
                    return {
                        type: n,
                        name: r,
                        start: s,
                        end: s + t,
                        data: void 0
                    }
                },
                navigation: function(e) {
                    const {
                        entryType: t,
                        name: n,
                        decodedBodySize: r,
                        duration: o,
                        domComplete: s,
                        encodedBodySize: i,
                        domContentLoadedEventStart: a,
                        domContentLoadedEventEnd: c,
                        domInteractive: u,
                        loadEventStart: l,
                        loadEventEnd: d,
                        redirectCount: p,
                        startTime: f,
                        transferSize: h,
                        type: m
                    } = e;
                    if (0 === o) return null;
                    return {
                        type: `${t}.${m}`,
                        start: Mg(f),
                        end: Mg(s),
                        name: n,
                        data: {
                            size: h,
                            decodedBodySize: r,
                            encodedBodySize: i,
                            duration: o,
                            domInteractive: u,
                            domContentLoadedEventStart: a,
                            domContentLoadedEventEnd: c,
                            loadEventStart: l,
                            loadEventEnd: d,
                            domComplete: s,
                            redirectCount: p
                        }
                    }
                }
            };

            function Rg(e, t) {
                return ({
                    metric: n
                }) => {
                    t.replayPerformanceEntries.push(e(n))
                }
            }

            function Ag(e) {
                const t = Ig[e.entryType];
                return t ? t(e) : null
            }

            function Mg(e) {
                return ((be() || Vf.performance.timeOrigin) + e) / 1e3
            }

            function Og(e) {
                const t = e.entries[e.entries.length - 1];
                return Dg(e, "largest-contentful-paint", t ? .element ? [t.element] : void 0)
            }

            function Pg(e) {
                return void 0 !== e.sources
            }

            function Lg(e) {
                const t = [],
                    n = [];
                for (const r of e.entries)
                    if (Pg(r)) {
                        const e = [];
                        for (const t of r.sources)
                            if (t.node) {
                                n.push(t.node);
                                const r = sg.mirror.getId(t.node);
                                r && e.push(r)
                            }
                        t.push({
                            value: r.value,
                            nodeIds: e.length ? e : void 0
                        })
                    }
                return Dg(e, "cumulative-layout-shift", n, t)
            }

            function Ng(e) {
                const t = e.entries[e.entries.length - 1];
                return Dg(e, "interaction-to-next-paint", t ? .target ? [t.target] : void 0)
            }

            function Dg(e, t, n, r) {
                const o = e.value,
                    s = e.rating,
                    i = Mg(o);
                return {
                    type: "web-vital",
                    name: t,
                    start: i,
                    end: i,
                    data: {
                        value: o,
                        size: o,
                        rating: s,
                        nodeIds: n ? n.map((e => sg.mirror.getId(e))) : void 0,
                        attributions: r
                    }
                }
            }
            const $g = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
            const Fg = ["log", "warn", "error"],
                jg = "[Replay] ";

            function Bg(e, t = "info") {
                gs({
                    category: "console",
                    data: {
                        logger: "replay"
                    },
                    level: t,
                    message: `${jg}${e}`
                }, {
                    level: t
                })
            }
            const Ug = function() {
                let e = !1,
                    t = !1;
                const n = {
                    exception: () => {},
                    infoTick: () => {},
                    setConfig: n => {
                        e = !!n.captureExceptions, t = !!n.traceInternals
                    }
                };
                return $g ? (Fg.forEach((e => {
                    n[e] = (...n) => {
                        D[e](jg, ...n), t && Bg(n.join(""), xs(e))
                    }
                })), n.exception = (r, ...o) => {
                    o.length && n.error && n.error(...o), D.error(jg, r), e ? bo(r, {
                        mechanism: {
                            handled: !0,
                            type: "auto.function.replay.debug"
                        }
                    }) : t && Bg(r, "error")
                }, n.infoTick = (...e) => {
                    D.log(jg, ...e), t && setTimeout((() => Bg(e[0])), 0)
                }) : Fg.forEach((e => {
                    n[e] = () => {}
                })), n
            }();
            class zg extends Error {
                constructor() {
                    super("Event buffer exceeded maximum size of 20000000.")
                }
            }
            class qg {
                constructor() {
                    this.events = [], this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
                }
                get hasEvents() {
                    return this.events.length > 0
                }
                get type() {
                    return "sync"
                }
                destroy() {
                    this.events = []
                }
                async addEvent(e) {
                    const t = JSON.stringify(e).length;
                    if (this._totalSize += t, this._totalSize > Xf) throw new zg;
                    this.events.push(e)
                }
                finish() {
                    return new Promise((e => {
                        const t = this.events;
                        this.clear(), e(JSON.stringify(t))
                    }))
                }
                clear() {
                    this.events = [], this._totalSize = 0, this.hasCheckout = !1
                }
                getEarliestTimestamp() {
                    let e = null;
                    for (const {
                            timestamp: t
                        } of this.events)(null === e || t < e) && (e = t);
                    return null === e ? e : cg(e)
                }
            }
            class Wg {
                constructor(e) {
                    this._worker = e, this._id = 0
                }
                ensureReady() {
                    return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise(((e, t) => {
                        this._worker.addEventListener("message", (({
                            data: n
                        }) => {
                            n.success ? e() : ($g && Ug.warn("Received worker message with unsuccessful status", n), t(new Error("Received worker message with unsuccessful status")))
                        }), {
                            once: !0
                        }), this._worker.addEventListener("error", (e => {
                            $g && Ug.warn("Failed to load Replay compression worker", e), t(new Error(`Failed to load Replay compression worker: ${e instanceof ErrorEvent&&e.message?e.message:"Unknown error. This can happen due to CSP policy restrictions, network issues, or the worker script failing to load."}`))
                        }), {
                            once: !0
                        })
                    }))), this._ensureReadyPromise
                }
                destroy() {
                    $g && Ug.log("Destroying compression worker"), this._worker.terminate()
                }
                postMessage(e, t) {
                    const n = this._getAndIncrementId();
                    return new Promise(((r, o) => {
                        const s = ({
                            data: t
                        }) => {
                            const i = t;
                            if (i.method === e && i.id === n) {
                                if (this._worker.removeEventListener("message", s), !i.success) return $g && Ug.error("Error in compression worker: ", i.response), void o(new Error("Error in compression worker"));
                                r(i.response)
                            }
                        };
                        this._worker.addEventListener("message", s), this._worker.postMessage({
                            id: n,
                            method: e,
                            arg: t
                        })
                    }))
                }
                _getAndIncrementId() {
                    return this._id++
                }
            }
            class Hg {
                constructor(e) {
                    this._worker = new Wg(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
                }
                get hasEvents() {
                    return !!this._earliestTimestamp
                }
                get type() {
                    return "worker"
                }
                ensureReady() {
                    return this._worker.ensureReady()
                }
                destroy() {
                    this._worker.destroy()
                }
                addEvent(e) {
                    const t = cg(e.timestamp);
                    (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
                    const n = JSON.stringify(e);
                    return this._totalSize += n.length, this._totalSize > Xf ? Promise.reject(new zg) : this._sendEventToWorker(n)
                }
                finish() {
                    return this._finishRequest()
                }
                clear() {
                    this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, (e => {
                        $g && Ug.exception(e, 'Sending "clear" message to worker failed', e)
                    }))
                }
                getEarliestTimestamp() {
                    return this._earliestTimestamp
                }
                _sendEventToWorker(e) {
                    return this._worker.postMessage("addEvent", e)
                }
                async _finishRequest() {
                    const e = await this._worker.postMessage("finish");
                    return this._earliestTimestamp = null, this._totalSize = 0, e
                }
            }
            class Vg {
                constructor(e) {
                    this._fallback = new qg, this._compression = new Hg(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
                }
                get waitForCheckout() {
                    return this._used.waitForCheckout
                }
                get type() {
                    return this._used.type
                }
                get hasEvents() {
                    return this._used.hasEvents
                }
                get hasCheckout() {
                    return this._used.hasCheckout
                }
                set hasCheckout(e) {
                    this._used.hasCheckout = e
                }
                set waitForCheckout(e) {
                    this._used.waitForCheckout = e
                }
                destroy() {
                    this._fallback.destroy(), this._compression.destroy()
                }
                clear() {
                    return this._used.clear()
                }
                getEarliestTimestamp() {
                    return this._used.getEarliestTimestamp()
                }
                addEvent(e) {
                    return this._used.addEvent(e)
                }
                async finish() {
                    return await this.ensureWorkerIsLoaded(), this._used.finish()
                }
                ensureWorkerIsLoaded() {
                    return this._ensureWorkerIsLoadedPromise
                }
                async _ensureWorkerIsLoaded() {
                    try {
                        await this._compression.ensureReady()
                    } catch (e) {
                        return void($g && Ug.exception(e, "Failed to load the compression worker, falling back to simple buffer"))
                    }
                    await this._switchToCompressionWorker()
                }
                async _switchToCompressionWorker() {
                    const {
                        events: e,
                        hasCheckout: t,
                        waitForCheckout: n
                    } = this._fallback, r = [];
                    for (const t of e) r.push(this._compression.addEvent(t));
                    this._compression.hasCheckout = t, this._compression.waitForCheckout = n, this._used = this._compression;
                    try {
                        await Promise.all(r), this._fallback.clear()
                    } catch (e) {
                        $g && Ug.exception(e, "Failed to add events when switching buffers.")
                    }
                }
            }

            function Jg({
                useCompression: e,
                workerUrl: t
            }) {
                if (e && window.Worker) {
                    const e = function(e) {
                        try {
                            const t = e || function() {
                                if ("undefined" == typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ || !__SENTRY_EXCLUDE_REPLAY_WORKER__) return function() {
                                    const e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                    return URL.createObjectURL(e)
                                }();
                                return ""
                            }();
                            if (!t) return;
                            $g && Ug.log("Using compression worker" + (e ? ` from ${e}` : ""));
                            const n = new Worker(t);
                            return new Vg(n)
                        } catch (e) {
                            $g && Ug.exception(e, "Failed to create compression worker")
                        }
                    }(t);
                    if (e) return e
                }
                return $g && Ug.log("Using simple buffer"), new qg
            }

            function Gg() {
                try {
                    return "sessionStorage" in Vf && !!Vf.sessionStorage
                } catch {
                    return !1
                }
            }

            function Kg(e) {
                ! function() {
                    if (!Gg()) return;
                    try {
                        Vf.sessionStorage.removeItem(Jf)
                    } catch {}
                }(), e.session = void 0
            }

            function Yg(e) {
                return void 0 !== e && Math.random() < e
            }

            function Xg(e) {
                if (Gg()) try {
                    Vf.sessionStorage.setItem(Jf, JSON.stringify(e))
                } catch {}
            }

            function Zg(e) {
                const t = Date.now();
                return {
                    id: e.id || le(),
                    started: e.started || t,
                    lastActivity: e.lastActivity || t,
                    segmentId: e.segmentId || 0,
                    sampled: e.sampled,
                    previousSessionId: e.previousSessionId,
                    dirty: e.dirty || !1
                }
            }

            function Qg({
                sessionSampleRate: e,
                allowBuffering: t,
                stickySession: n = !1
            }, {
                previousSessionId: r
            } = {}) {
                const o = function(e, t) {
                        return Yg(e) ? "session" : !!t && "buffer"
                    }(e, t),
                    s = Zg({
                        sampled: o,
                        previousSessionId: r
                    });
                return n && Xg(s), s
            }

            function ey(e, t, n = +new Date) {
                return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
            }

            function ty(e, {
                maxReplayDuration: t,
                sessionIdleExpire: n,
                targetTime: r = Date.now()
            }) {
                return ey(e.started, t, r) || ey(e.lastActivity, n, r)
            }

            function ny(e, {
                sessionIdleExpire: t,
                maxReplayDuration: n
            }) {
                return !!ty(e, {
                    sessionIdleExpire: t,
                    maxReplayDuration: n
                }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
            }

            function ry({
                sessionIdleExpire: e,
                maxReplayDuration: t,
                previousSessionId: n
            }, r) {
                const o = r.stickySession && function() {
                    if (!Gg()) return null;
                    try {
                        const e = Vf.sessionStorage.getItem(Jf);
                        if (!e) return null;
                        const t = JSON.parse(e);
                        return $g && Ug.infoTick("Loading existing session"), Zg(t)
                    } catch {
                        return null
                    }
                }();
                return o ? ny(o, {
                    sessionIdleExpire: e,
                    maxReplayDuration: t
                }) ? ($g && Ug.infoTick("Session in sessionStorage is expired, creating new one..."), Qg(r, {
                    previousSessionId: o.id
                })) : o : ($g && Ug.infoTick("Creating new session"), Qg(r, {
                    previousSessionId: n
                }))
            }

            function oy(e, t, n) {
                return !!iy(e, t) && (sy(e, t, n), !0)
            }
            async function sy(e, t, n) {
                const {
                    eventBuffer: r
                } = e;
                if (!r || r.waitForCheckout && !n) return null;
                const o = "buffer" === e.recordingMode;
                try {
                    n && o && r.clear(), n && (r.hasCheckout = !0, r.waitForCheckout = !1);
                    const s = function(e, t) {
                        try {
                            if ("function" == typeof t && function(e) {
                                    return e.type === mm.Custom
                                }(e)) return t(e)
                        } catch (e) {
                            return $g && Ug.exception(e, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."), null
                        }
                        return e
                    }(t, e.getOptions().beforeAddRecordingEvent);
                    if (!s) return;
                    return await r.addEvent(s)
                } catch (t) {
                    const n = t && t instanceof zg,
                        s = n ? "addEventSizeExceeded" : "addEvent",
                        i = Ve();
                    if (i) {
                        const e = n ? "buffer_overflow" : "internal_sdk_error";
                        i.recordDroppedEvent(e, "replay")
                    }
                    if (n && o) return r.clear(), r.waitForCheckout = !0, null;
                    e.handleException(t), await e.stop({
                        reason: s
                    })
                }
            }

            function iy(e, t) {
                if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
                const n = cg(t.timestamp);
                return !(n + e.timeouts.sessionIdlePause < Date.now()) && (!(n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || ($g && Ug.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`), !1))
            }

            function ay(e) {
                return !e.type
            }

            function cy(e) {
                return "transaction" === e.type
            }

            function uy(e) {
                return "feedback" === e.type
            }

            function ly(e) {
                return (t, n) => {
                    if (!e.isEnabled() || !ay(t) && !cy(t)) return;
                    const r = n.statusCode;
                    !r || r < 200 || r >= 300 || (cy(t) ? function(e, t) {
                        const n = e.getContext();
                        t.contexts ? .trace ? .trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
                    }(e, t) : function(e, t) {
                        const n = e.getContext();
                        t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id);
                        if ("buffer" !== e.recordingMode || !t.tags ? .replayId) return;
                        const {
                            beforeErrorSampling: r
                        } = e.getOptions();
                        if ("function" == typeof r && !r(t)) return;
                        Zl((async () => {
                            try {
                                await e.sendBufferedReplayOrFlush()
                            } catch (t) {
                                e.handleException(t)
                            }
                        }))
                    }(e, t))
                }
            }

            function dy(e) {
                return t => {
                    e.isEnabled() && ay(t) && function(e, t) {
                        const n = t.exception ? .values ? .[0] ? .value;
                        if ("string" != typeof n) return;
                        if (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) {
                            lg(e, Sg({
                                category: "replay.hydrate-error",
                                data: {
                                    url: I()
                                }
                            }))
                        }
                    }(e, t)
                }
            }

            function py(e) {
                const t = Ve();
                t && t.on("beforeAddBreadcrumb", (t => function(e, t) {
                    if (!e.isEnabled() || !fy(t)) return;
                    const n = function(e) {
                        if (!fy(e) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) return null;
                        if ("console" === e.category) return function(e) {
                            const t = e.data ? .arguments;
                            if (!Array.isArray(t) || 0 === t.length) return Sg(e);
                            let n = !1;
                            const r = t.map((e => {
                                if (!e) return e;
                                if ("string" == typeof e) return e.length > Yf ? (n = !0, `${e.slice(0,Yf)}…`) : e;
                                if ("object" == typeof e) try {
                                    const t = tr(e, 7);
                                    return JSON.stringify(t).length > Yf ? (n = !0, `${JSON.stringify(t,null,2).slice(0,Yf)}…`) : t
                                } catch {}
                                return e
                            }));
                            return Sg({ ...e,
                                data: { ...e.data,
                                    arguments: r,
                                    ...n ? {
                                        _meta: {
                                            warnings: ["CONSOLE_ARG_TRUNCATED"]
                                        }
                                    } : {}
                                }
                            })
                        }(e);
                        return Sg(e)
                    }(t);
                    n && lg(e, n)
                }(e, t)))
            }

            function fy(e) {
                return !!e.category
            }

            function hy() {
                const e = Ue().getPropagationContext().dsc;
                e && delete e.replay_id;
                const t = ro();
                if (t) {
                    delete lo(t).replay_id
                }
            }

            function my(e) {
                return Object.assign(((t, n) => {
                    if (!e.isEnabled() || e.isPaused()) return t;
                    if (function(e) {
                            return "replay_event" === e.type
                        }(t)) return delete t.breadcrumbs, t;
                    if (!ay(t) && !cy(t) && !uy(t)) return t;
                    if (!e.checkAndHandleExpiredSession()) return hy(), t;
                    if (uy(t)) return e.flush(), t.contexts.feedback.replay_id = e.getSessionId(),
                        function(e, t) {
                            e.triggerUserActivity(), e.addUpdate((() => !t.timestamp || (e.throttledAddEvent({
                                type: mm.Custom,
                                timestamp: 1e3 * t.timestamp,
                                data: {
                                    tag: "breadcrumb",
                                    payload: {
                                        timestamp: t.timestamp,
                                        type: "default",
                                        category: "sentry.feedback",
                                        data: {
                                            feedbackId: t.event_id
                                        }
                                    }
                                }
                            }), !1)))
                        }(e, t), t;
                    if (function(e, t) {
                            return !(e.type || !e.exception ? .values ? .length || !t.originalException ? .__rrweb__)
                        }(t, n) && !e.getOptions()._experiments.captureExceptions) return $g && Ug.log("Ignoring error from rrweb internals", t), null;
                    const r = function(e, t) {
                        return "buffer" === e.recordingMode && t.message !== Gf && !(!t.exception || t.type) && Yg(e.getOptions().errorSampleRate)
                    }(e, t);
                    if ((r || "session" === e.recordingMode) && (t.tags = { ...t.tags,
                            replayId: e.getSessionId()
                        }), r && "buffer" === e.recordingMode && "buffer" === e.session ? .sampled) {
                        const t = e.session;
                        t.dirty = !0, e.getOptions().stickySession && Xg(t)
                    }
                    return t
                }), {
                    id: "Replay"
                })
            }

            function gy(e, t) {
                return t.map((({
                    type: t,
                    start: n,
                    end: r,
                    name: o,
                    data: s
                }) => {
                    const i = e.throttledAddEvent({
                        type: mm.Custom,
                        timestamp: n,
                        data: {
                            tag: "performanceSpan",
                            payload: {
                                op: t,
                                description: o,
                                startTimestamp: n,
                                endTimestamp: r,
                                data: s
                            }
                        }
                    });
                    return "string" == typeof i ? Promise.resolve(null) : i
                }))
            }

            function yy(e) {
                return t => {
                    if (!e.isEnabled()) return;
                    const n = function(e) {
                        const {
                            from: t,
                            to: n
                        } = e, r = Date.now() / 1e3;
                        return {
                            type: "navigation.push",
                            start: r,
                            end: r,
                            name: n,
                            data: {
                                previous: t
                            }
                        }
                    }(t);
                    null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate((() => (gy(e, [n]), !1))))
                }
            }

            function _y(e, t) {
                e.isEnabled() && null !== t && (function(e, t) {
                    return (!$g || !e.getOptions()._experiments.traceInternals) && xp(t, Ve())
                }(e, t.name) || e.addUpdate((() => (gy(e, [t]), !0))))
            }

            function vy(e) {
                if (!e) return;
                const t = new TextEncoder;
                try {
                    if ("string" == typeof e) return t.encode(e).length;
                    if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
                    if (e instanceof FormData) {
                        const n = Dp(e);
                        return t.encode(n).length
                    }
                    if (e instanceof Blob) return e.size;
                    if (e instanceof ArrayBuffer) return e.byteLength
                } catch {}
            }

            function by(e) {
                if (!e) return;
                const t = parseInt(e, 10);
                return isNaN(t) ? void 0 : t
            }

            function Sy(e, t) {
                if (!e) return {
                    headers: {},
                    size: void 0,
                    _meta: {
                        warnings: [t]
                    }
                };
                const n = { ...e._meta
                    },
                    r = n.warnings || [];
                return n.warnings = [...r, t], e._meta = n, e
            }

            function ky(e, t) {
                if (!t) return null;
                const {
                    startTimestamp: n,
                    endTimestamp: r,
                    url: o,
                    method: s,
                    statusCode: i,
                    request: a,
                    response: c
                } = t;
                return {
                    type: e,
                    start: n / 1e3,
                    end: r / 1e3,
                    name: o,
                    data: {
                        method: s,
                        statusCode: i,
                        request: a,
                        response: c
                    }
                }
            }

            function wy(e) {
                return {
                    headers: {},
                    size: e,
                    _meta: {
                        warnings: ["URL_SKIPPED"]
                    }
                }
            }

            function xy(e, t, n) {
                if (!t && 0 === Object.keys(e).length) return;
                if (!t) return {
                    headers: e
                };
                if (!n) return {
                    headers: e,
                    size: t
                };
                const r = {
                        headers: e,
                        size: t
                    },
                    {
                        body: o,
                        warnings: s
                    } = function(e) {
                        if (!e || "string" != typeof e) return {
                            body: e
                        };
                        const t = e.length > Kf,
                            n = function(e) {
                                const t = e[0],
                                    n = e[e.length - 1];
                                return "[" === t && "]" === n || "{" === t && "}" === n
                            }(e);
                        if (t) {
                            const t = e.slice(0, Kf);
                            return n ? {
                                body: t,
                                warnings: ["MAYBE_JSON_TRUNCATED"]
                            } : {
                                body: `${t}…`,
                                warnings: ["TEXT_TRUNCATED"]
                            }
                        }
                        if (n) try {
                            return {
                                body: JSON.parse(e)
                            }
                        } catch {}
                        return {
                            body: e
                        }
                    }(n);
                return r.body = o, s ? .length && (r._meta = {
                    warnings: s
                }), r
            }

            function Ey(e, t) {
                return Object.entries(e).reduce(((n, [r, o]) => {
                    const s = r.toLowerCase();
                    return t.includes(s) && e[r] && (n[s] = o), n
                }), {})
            }

            function Ty(e, t) {
                const n = function(e, t = Vf.document.baseURI) {
                    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(Vf.location.origin)) return e;
                    const n = new URL(e, t);
                    if (n.origin !== new URL(t).origin) return e;
                    const r = n.href;
                    if (!e.endsWith("/") && r.endsWith("/")) return r.slice(0, -1);
                    return r
                }(e);
                return ce(n, t)
            }
            async function Cy(e, t, n) {
                try {
                    const r = await async function(e, t, n) {
                            const r = Date.now(),
                                {
                                    startTimestamp: o = r,
                                    endTimestamp: s = r
                                } = t,
                                {
                                    url: i,
                                    method: a,
                                    status_code: c = 0,
                                    request_body_size: u,
                                    response_body_size: l
                                } = e.data,
                                d = Ty(i, n.networkDetailAllowUrls) && !Ty(i, n.networkDetailDenyUrls),
                                p = d ? function({
                                    networkCaptureBodies: e,
                                    networkRequestHeaders: t
                                }, n, r) {
                                    const o = n ? function(e, t) {
                                        if (1 === e.length && "string" != typeof e[0]) return Ry(e[0], t);
                                        if (2 === e.length) return Ry(e[1], t);
                                        return {}
                                    }(n, t) : {};
                                    if (!e) return xy(o, r, void 0);
                                    const s = Fp(n),
                                        [i, a] = $p(s, Ug),
                                        c = xy(o, r, i);
                                    if (a) return Sy(c, a);
                                    return c
                                }(n, t.input, u) : wy(u),
                                f = await async function(e, {
                                    networkCaptureBodies: t,
                                    networkResponseHeaders: n
                                }, r, o) {
                                    if (!e && void 0 !== o) return wy(o);
                                    const s = r ? Iy(r.headers, n) : {};
                                    if (!r || !t && void 0 !== o) return xy(s, o, void 0);
                                    const [i, a] = await async function(e) {
                                        const t = function(e) {
                                            try {
                                                return e.clone()
                                            } catch (e) {
                                                $g && Ug.exception(e, "Failed to clone response body")
                                            }
                                        }(e);
                                        if (!t) return [void 0, "BODY_PARSE_ERROR"];
                                        try {
                                            const e = await
                                            function(e) {
                                                return new Promise(((t, n) => {
                                                    const r = Zl((() => n(new Error("Timeout while trying to read response body"))), 500);
                                                    (async function(e) {
                                                        return await e.text()
                                                    })(e).then((e => t(e)), (e => n(e))).finally((() => clearTimeout(r)))
                                                }))
                                            }(t);
                                            return [e]
                                        } catch (e) {
                                            return e instanceof Error && e.message.indexOf("Timeout") > -1 ? ($g && Ug.warn("Parsing text body from response timed out"), [void 0, "BODY_PARSE_TIMEOUT"]) : ($g && Ug.exception(e, "Failed to get text body from response"), [void 0, "BODY_PARSE_ERROR"])
                                        }
                                    }(r), c = function(e, {
                                        networkCaptureBodies: t,
                                        responseBodySize: n,
                                        captureDetails: r,
                                        headers: o
                                    }) {
                                        try {
                                            const s = e ? .length && void 0 === n ? vy(e) : n;
                                            return r ? xy(o, s, t ? e : void 0) : wy(s)
                                        } catch (e) {
                                            return $g && Ug.exception(e, "Failed to serialize response body"), xy(o, n, void 0)
                                        }
                                    }(i, {
                                        networkCaptureBodies: t,
                                        responseBodySize: o,
                                        captureDetails: e,
                                        headers: s
                                    });
                                    if (a) return Sy(c, a);
                                    return c
                                }(d, n, t.response, l);
                            return {
                                startTimestamp: o,
                                endTimestamp: s,
                                url: i,
                                method: a,
                                statusCode: c,
                                request: p,
                                response: f
                            }
                        }(e, t, n),
                        o = ky("resource.fetch", r);
                    _y(n.replay, o)
                } catch (e) {
                    $g && Ug.exception(e, "Failed to capture fetch breadcrumb")
                }
            }

            function Iy(e, t) {
                const n = {};
                return t.forEach((t => {
                    e.get(t) && (n[t] = e.get(t))
                })), n
            }

            function Ry(e, t) {
                if (!e) return {};
                const n = e.headers;
                return n ? n instanceof Headers ? Iy(n, t) : Array.isArray(n) ? {} : Ey(n, t) : {}
            }
            async function Ay(e, t, n) {
                try {
                    const r = function(e, t, n) {
                            const r = Date.now(),
                                {
                                    startTimestamp: o = r,
                                    endTimestamp: s = r,
                                    input: i,
                                    xhr: a
                                } = t,
                                {
                                    url: c,
                                    method: u,
                                    status_code: l = 0,
                                    request_body_size: d,
                                    response_body_size: p
                                } = e.data;
                            if (!c) return null;
                            if (!a || !Ty(c, n.networkDetailAllowUrls) || Ty(c, n.networkDetailDenyUrls)) {
                                return {
                                    startTimestamp: o,
                                    endTimestamp: s,
                                    url: c,
                                    method: u,
                                    statusCode: l,
                                    request: wy(d),
                                    response: wy(p)
                                }
                            }
                            const f = a[Ud],
                                h = f ? Ey(f.request_headers, n.networkRequestHeaders) : {},
                                m = Ey(jp(a), n.networkResponseHeaders),
                                [g, y] = n.networkCaptureBodies ? $p(i, Ug) : [void 0],
                                [_, v] = n.networkCaptureBodies ? function(e) {
                                    const t = [];
                                    try {
                                        return [e.responseText]
                                    } catch (e) {
                                        t.push(e)
                                    }
                                    try {
                                        return function(e, t) {
                                            try {
                                                if ("string" == typeof e) return [e];
                                                if (e instanceof Document) return [e.body.outerHTML];
                                                if ("json" === t && e && "object" == typeof e) return [JSON.stringify(e)];
                                                if (!e) return [void 0]
                                            } catch (t) {
                                                return $g && Ug.exception(t, "Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
                                            }
                                            return $g && Ug.log("Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
                                        }(e.response, e.responseType)
                                    } catch (e) {
                                        t.push(e)
                                    }
                                    return $g && Ug.warn("Failed to get xhr response body", ...t), [void 0]
                                }(a) : [void 0],
                                b = xy(h, d, g),
                                S = xy(m, p, _);
                            return {
                                startTimestamp: o,
                                endTimestamp: s,
                                url: c,
                                method: u,
                                statusCode: l,
                                request: y ? Sy(b, y) : b,
                                response: v ? Sy(S, v) : S
                            }
                        }(e, t, n),
                        o = ky("resource.xhr", r);
                    _y(n.replay, o)
                } catch (e) {
                    $g && Ug.exception(e, "Failed to capture xhr breadcrumb")
                }
            }

            function My(e, t) {
                const {
                    xhr: n,
                    input: r
                } = t;
                if (!n) return;
                const o = vy(r),
                    s = n.getResponseHeader("content-length") ? by(n.getResponseHeader("content-length")) : function(e, t) {
                        try {
                            return vy("json" === t && e && "object" == typeof e ? JSON.stringify(e) : e)
                        } catch {
                            return
                        }
                    }(n.response, n.responseType);
                void 0 !== o && (e.data.request_body_size = o), void 0 !== s && (e.data.response_body_size = s)
            }

            function Oy(e) {
                const t = Ve();
                try {
                    const {
                        networkDetailAllowUrls: n,
                        networkDetailDenyUrls: r,
                        networkCaptureBodies: o,
                        networkRequestHeaders: s,
                        networkResponseHeaders: i
                    } = e.getOptions(), a = {
                        replay: e,
                        networkDetailAllowUrls: n,
                        networkDetailDenyUrls: r,
                        networkCaptureBodies: o,
                        networkRequestHeaders: s,
                        networkResponseHeaders: i
                    };
                    t && t.on("beforeAddBreadcrumb", ((e, t) => function(e, t, n) {
                        if (!t.data) return;
                        try {
                            (function(e) {
                                return "xhr" === e.category
                            })(t) && function(e) {
                                return e ? .xhr
                            }(n) && (My(t, n), Ay(t, n, e)),
                            function(e) {
                                return "fetch" === e.category
                            }(t) && function(e) {
                                return e ? .response
                            }(n) && (! function(e, t) {
                                const {
                                    input: n,
                                    response: r
                                } = t, o = vy(n ? Fp(n) : void 0), s = r ? by(r.headers.get("content-length")) : void 0;
                                void 0 !== o && (e.data.request_body_size = o), void 0 !== s && (e.data.response_body_size = s)
                            }(t, n), Cy(t, n, e))
                        } catch (e) {
                            $g && Ug.exception(e, "Error when enriching network breadcrumb")
                        }
                    }(a, e, t)))
                } catch {}
            }

            function Py(e) {
                const {
                    jsHeapSizeLimit: t,
                    totalJSHeapSize: n,
                    usedJSHeapSize: r
                } = e, o = Date.now() / 1e3;
                return {
                    type: "memory",
                    name: "memory",
                    start: o,
                    end: o,
                    data: {
                        memory: {
                            jsHeapSizeLimit: t,
                            totalJSHeapSize: n,
                            usedJSHeapSize: r
                        }
                    }
                }
            }

            function Ly(e, t, n) {
                return function(e, t, n) {
                    let r, o, s;
                    const i = n ? .maxWait ? Math.max(n.maxWait, t) : 0,
                        a = n ? .setTimeoutImpl || setTimeout;

                    function c() {
                        return u(), r = e(), r
                    }

                    function u() {
                        void 0 !== o && clearTimeout(o), void 0 !== s && clearTimeout(s), o = s = void 0
                    }

                    function l() {
                        return o && clearTimeout(o), o = a(c, t), i && void 0 === s && (s = a(c, i)), r
                    }
                    return l.cancel = u, l.flush = function() {
                        return void 0 !== o || void 0 !== s ? c() : r
                    }, l
                }(e, t, { ...n,
                    setTimeoutImpl: Zl
                })
            }
            const Ny = s.navigator;

            function Dy(e) {
                let t = !1;
                return (n, r) => {
                    if (!e.checkAndHandleExpiredSession()) return void($g && Ug.warn("Received replay event after session expired."));
                    const o = r || !t;
                    t = !0, e.clickDetector && bg(e.clickDetector, n), e.addUpdate((() => {
                        if ("buffer" === e.recordingMode && o && e.setInitialState(), !oy(e, n, o)) return !0;
                        if (!o) return !1;
                        const t = e.session;
                        if (function(e, t) {
                                if (!t || 0 !== e.session ? .segmentId) return;
                                oy(e, function(e) {
                                    const t = e.getOptions();
                                    return {
                                        type: mm.Custom,
                                        timestamp: Date.now(),
                                        data: {
                                            tag: "options",
                                            payload: {
                                                shouldRecordCanvas: e.isRecordingCanvas(),
                                                sessionSampleRate: t.sessionSampleRate,
                                                errorSampleRate: t.errorSampleRate,
                                                useCompressionOption: t.useCompression,
                                                blockAllMedia: t.blockAllMedia,
                                                maskAllText: t.maskAllText,
                                                maskAllInputs: t.maskAllInputs,
                                                useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                networkCaptureBodies: t.networkCaptureBodies,
                                                networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                            }
                                        }
                                    }
                                }(e), !1)
                            }(e, o), "buffer" === e.recordingMode && t && e.eventBuffer && !t.dirty) {
                            const n = e.eventBuffer.getEarliestTimestamp();
                            n && ($g && Ug.log(`Updating session start time to earliest event in buffer to ${new Date(n)}`), t.started = n, e.getOptions().stickySession && Xg(t))
                        }
                        return t ? .previousSessionId || "session" === e.recordingMode && e.flush(), !0
                    }))
                }
            }
            async function $y({
                recordingData: e,
                replayId: t,
                segmentId: n,
                eventContext: r,
                timestamp: o,
                session: s
            }) {
                const i = function({
                        recordingData: e,
                        headers: t
                    }) {
                        let n;
                        const r = `${JSON.stringify(t)}\n`;
                        if ("string" == typeof e) n = `${r}${e}`;
                        else {
                            const t = (new TextEncoder).encode(r);
                            n = new Uint8Array(t.length + e.length), n.set(t), n.set(e, t.length)
                        }
                        return n
                    }({
                        recordingData: e,
                        headers: {
                            segment_id: n
                        }
                    }),
                    {
                        urls: a,
                        errorIds: c,
                        traceIds: u,
                        initialTimestamp: l
                    } = r,
                    d = Ve(),
                    p = Ue(),
                    f = d ? .getTransport(),
                    h = d ? .getDsn();
                if (!(d && f && h && s.sampled)) return Promise.resolve({});
                const m = {
                        type: "replay_event",
                        replay_start_timestamp: l / 1e3,
                        timestamp: o / 1e3,
                        error_ids: c,
                        trace_ids: u,
                        urls: a,
                        replay_id: t,
                        segment_id: n,
                        replay_type: s.sampled
                    },
                    g = await async function({
                        client: e,
                        scope: t,
                        replayId: n,
                        event: r
                    }) {
                        const o = {
                            event_id: n,
                            integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
                        };
                        e.emit("preprocessEvent", r, o);
                        const s = await yo(e.getOptions(), r, o, t, e, ze());
                        if (!s) return null;
                        e.emit("postprocessEvent", s, o), s.platform = s.platform || "javascript";
                        const i = e.getSdkMetadata(),
                            {
                                name: a,
                                version: c,
                                settings: u
                            } = i ? .sdk || {};
                        return s.sdk = { ...s.sdk,
                            name: a || "sentry.javascript.unknown",
                            version: c || "0.0.0",
                            settings: u
                        }, s
                    }({
                        scope: p,
                        client: d,
                        replayId: t,
                        event: m
                    });
                if (!g) return d.recordDroppedEvent("event_processor", "replay"), $g && Ug.log("An event processor returned `null`, will not send event."), Promise.resolve({});
                delete g.sdkProcessingMetadata;
                const y = function(e, t, n, r) {
                    return Qo(ds(e, ls(e), r, n), [
                        [{
                            type: "replay_event"
                        }, e],
                        [{
                            type: "replay_recording",
                            length: "string" == typeof t ? (new TextEncoder).encode(t).length : t.length
                        }, t]
                    ])
                }(g, i, h, d.getOptions().tunnel);
                let _;
                try {
                    _ = await f.send(y)
                } catch (e) {
                    const t = new Error(Gf);
                    try {
                        t.cause = e
                    } catch {}
                    throw t
                }
                const v = Va({}, _);
                if (Ha(v, "replay")) throw new jy(v);
                if ("number" == typeof _.statusCode && (_.statusCode < 200 || _.statusCode >= 300)) throw new Fy(_.statusCode);
                return _
            }
            class Fy extends Error {
                constructor(e) {
                    super(`Transport returned status code ${e}`)
                }
            }
            class jy extends Error {
                constructor(e) {
                    super("Rate limit hit"), this.rateLimits = e
                }
            }
            class By extends Error {
                constructor() {
                    super("Session is too long, not sending replay")
                }
            }
            async function Uy(e, t = {
                count: 0,
                interval: 5e3
            }) {
                const {
                    recordingData: n,
                    onError: r
                } = e;
                if (n.length) try {
                    return await $y(e), !0
                } catch (n) {
                    if (n instanceof Fy || n instanceof jy) throw n;
                    if (wo("Replays", {
                            _retryCount: t.count
                        }), r && r(n), t.count >= 3) {
                        const e = new Error(`${Gf} - max retries exceeded`);
                        try {
                            e.cause = n
                        } catch {}
                        throw e
                    }
                    return t.interval *= ++t.count, new Promise(((n, r) => {
                        Zl((async () => {
                            try {
                                await Uy(e, t), n(!0)
                            } catch (e) {
                                r(e)
                            }
                        }), t.interval)
                    }))
                }
            }
            const zy = "__THROTTLED";

            function qy(e, t, n) {
                const r = new Map;
                let o = !1;
                return (...s) => {
                    const i = Math.floor(Date.now() / 1e3);
                    if ((e => {
                            const t = e - n;
                            r.forEach(((e, n) => {
                                n < t && r.delete(n)
                            }))
                        })(i), [...r.values()].reduce(((e, t) => e + t), 0) >= t) {
                        const e = o;
                        return o = !0, e ? "__SKIPPED" : zy
                    }
                    o = !1;
                    const a = r.get(i) || 0;
                    return r.set(i, a + 1), e(...s)
                }
            }
            class Wy {
                constructor({
                    options: e,
                    recordingOptions: t
                }) {
                    this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
                        sessionIdlePause: 3e5,
                        sessionIdleExpire: 9e5
                    }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._requiresManualStart = !1, this._hasInitializedCoreListeners = !1, this._context = {
                        errorIds: new Set,
                        traceIds: new Set,
                        urls: [],
                        initialTimestamp: Date.now(),
                        initialUrl: ""
                    }, this._recordingOptions = t, this._options = e, this._debouncedFlush = Ly((() => this._flush()), this._options.flushMinDelay, {
                        maxWait: this._options.flushMaxDelay
                    }), this._throttledAddEvent = qy(((e, t) => function(e, t, n) {
                        return iy(e, t) ? sy(e, t, n) : Promise.resolve(null)
                    }(this, e, t)), 300, 5);
                    const {
                        slowClickTimeout: n,
                        slowClickIgnoreSelectors: r
                    } = this.getOptions(), o = n ? {
                        threshold: Math.min(3e3, n),
                        timeout: n,
                        scrollTimeout: 300,
                        ignoreSelector: r ? r.join(",") : ""
                    } : void 0;
                    if (o && (this.clickDetector = new yg(this, o)), $g) {
                        const t = e._experiments;
                        Ug.setConfig({
                            captureExceptions: !!t.captureExceptions,
                            traceInternals: !!t.traceInternals
                        })
                    }
                    this._handleVisibilityChange = () => {
                        "visible" === Vf.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                    }, this._handleWindowBlur = () => {
                        const e = Sg({
                            category: "ui.blur"
                        });
                        this._doChangeToBackgroundTasks(e)
                    }, this._handleWindowFocus = () => {
                        const e = Sg({
                            category: "ui.focus"
                        });
                        this._doChangeToForegroundTasks(e)
                    }, this._handleKeyboardEvent = e => {
                        Cg(this, e)
                    }
                }
                getContext() {
                    return this._context
                }
                isEnabled() {
                    return this._isEnabled
                }
                isPaused() {
                    return this._isPaused
                }
                isRecordingCanvas() {
                    return Boolean(this._canvas)
                }
                getOptions() {
                    return this._options
                }
                handleException(e) {
                    $g && Ug.exception(e), this._options.onError && this._options.onError(e)
                }
                initializeSampling(e) {
                    const {
                        errorSampleRate: t,
                        sessionSampleRate: n
                    } = this._options, r = t <= 0 && n <= 0;
                    this._requiresManualStart = r, r || (this._initializeSessionForSampling(e), this.session ? !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", $g && Ug.infoTick(`Starting replay in ${this.recordingMode} mode`), this._initializeRecording()) : $g && Ug.exception(new Error("Unable to initialize and create session")))
                }
                start() {
                    if (this._isEnabled && "session" === this.recordingMode) return void($g && Ug.log("Recording is already in progress"));
                    if (this._isEnabled && "buffer" === this.recordingMode) return void($g && Ug.log("Buffering is in progress, call `flush()` to save the replay"));
                    $g && Ug.infoTick("Starting replay in session mode"), this._updateUserActivity();
                    const e = ry({
                        maxReplayDuration: this._options.maxReplayDuration,
                        sessionIdleExpire: this.timeouts.sessionIdleExpire
                    }, {
                        stickySession: this._options.stickySession,
                        sessionSampleRate: 1,
                        allowBuffering: !1
                    });
                    this.session = e, this.recordingMode = "session", this._initializeRecording()
                }
                startBuffering() {
                    if (this._isEnabled) return void($g && Ug.log("Buffering is in progress, call `flush()` to save the replay"));
                    $g && Ug.infoTick("Starting replay in buffer mode");
                    const e = ry({
                        sessionIdleExpire: this.timeouts.sessionIdleExpire,
                        maxReplayDuration: this._options.maxReplayDuration
                    }, {
                        stickySession: this._options.stickySession,
                        sessionSampleRate: 0,
                        allowBuffering: !0
                    });
                    this.session = e, this.recordingMode = "buffer", this._initializeRecording()
                }
                startRecording() {
                    try {
                        const e = this._canvas;
                        this._stopRecording = sg({ ...this._recordingOptions,
                            ..."buffer" === this.recordingMode ? {
                                checkoutEveryNms: 6e4
                            } : this._options._experiments.continuousCheckout && {
                                checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                            },
                            emit: Dy(this),
                            .../iPhone|iPad|iPod/i.test(Ny ? .userAgent ? ? "") || /Macintosh/i.test(Ny ? .userAgent ? ? "") && Ny ? .maxTouchPoints && Ny ? .maxTouchPoints > 1 ? {
                                sampling: {
                                    mousemove: !1
                                }
                            } : {},
                            onMutation : this._onMutationHandler.bind(this),
                            ...e ? {
                                recordCanvas: e.recordCanvas,
                                getCanvasManager: e.getCanvasManager,
                                sampling: e.sampling,
                                dataURLOptions: e.dataURLOptions
                            } : {}
                        })
                    } catch (e) {
                        this.handleException(e)
                    }
                }
                stopRecording() {
                    try {
                        return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
                    } catch (e) {
                        return this.handleException(e), !1
                    }
                }
                async stop({
                    forceFlush: e = !1,
                    reason: t
                } = {}) {
                    if (this._isEnabled) {
                        this._isEnabled = !1, this.recordingMode = "buffer";
                        try {
                            $g && Ug.log("Stopping Replay" + (t ? ` triggered by ${t}` : "")), hy(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                                force: !0
                            }), this.eventBuffer ? .destroy(), this.eventBuffer = null, Kg(this)
                        } catch (e) {
                            this.handleException(e)
                        }
                    }
                }
                pause() {
                    this._isPaused || (this._isPaused = !0, this.stopRecording(), $g && Ug.log("Pausing replay"))
                }
                resume() {
                    this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), $g && Ug.log("Resuming replay"))
                }
                async sendBufferedReplayOrFlush({
                    continueRecording: e = !0
                } = {}) {
                    if ("session" === this.recordingMode) return this.flushImmediate();
                    const t = Date.now();
                    $g && Ug.log("Converting buffer to session"), await this.flushImmediate();
                    const n = this.stopRecording();
                    e && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this.session.dirty = !1, this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording())
                }
                addUpdate(e) {
                    const t = e();
                    "buffer" !== this.recordingMode && this._isEnabled && !0 !== t && this._debouncedFlush()
                }
                triggerUserActivity() {
                    if (this._updateUserActivity(), this._stopRecording) this.checkAndHandleExpiredSession(), this._updateSessionActivity();
                    else {
                        if (!this._checkSession()) return;
                        this.resume()
                    }
                }
                updateUserActivity() {
                    this._updateUserActivity(), this._updateSessionActivity()
                }
                conditionalFlush() {
                    return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
                }
                flush() {
                    return this._debouncedFlush()
                }
                flushImmediate() {
                    return this._debouncedFlush(), this._debouncedFlush.flush()
                }
                cancelFlush() {
                    this._debouncedFlush.cancel()
                }
                getSessionId(e) {
                    if (!e || !1 !== this.session ? .sampled) return this.session ? .id
                }
                checkAndHandleExpiredSession() {
                    if (!this._lastActivity || !ey(this._lastActivity, this.timeouts.sessionIdlePause) || "session" !== this.session ? .sampled) return !!this._checkSession();
                    this.pause()
                }
                setInitialState() {
                    const e = `${Vf.location.pathname}${Vf.location.hash}${Vf.location.search}`,
                        t = `${Vf.location.origin}${e}`;
                    this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
                }
                throttledAddEvent(e, t) {
                    const n = this._throttledAddEvent(e, t);
                    if (n === zy) {
                        const e = Sg({
                            category: "replay.throttled"
                        });
                        this.addUpdate((() => !oy(this, {
                            type: 5,
                            timestamp: e.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: e,
                                metric: !0
                            }
                        })))
                    }
                    return n
                }
                getCurrentRoute() {
                    const e = this.lastActiveSpan || ro(),
                        t = e && no(e),
                        n = (t && Kr(t).data || {})[or];
                    if (t && n && ["route", "custom"].includes(n)) return Kr(t).description
                }
                _initializeRecording() {
                    this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = Jg({
                        useCompression: this._options.useCompression,
                        workerUrl: this._options.workerUrl
                    }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
                }
                _initializeSessionForSampling(e) {
                    const t = this._options.errorSampleRate > 0,
                        n = ry({
                            sessionIdleExpire: this.timeouts.sessionIdleExpire,
                            maxReplayDuration: this._options.maxReplayDuration,
                            previousSessionId: e
                        }, {
                            stickySession: this._options.stickySession,
                            sessionSampleRate: this._options.sessionSampleRate,
                            allowBuffering: t
                        });
                    this.session = n
                }
                _checkSession() {
                    if (!this.session) return !1;
                    const e = this.session;
                    return !ny(e, {
                        sessionIdleExpire: this.timeouts.sessionIdleExpire,
                        maxReplayDuration: this._options.maxReplayDuration
                    }) || (this._refreshSession(e), !1)
                }
                async _refreshSession(e) {
                    this._isEnabled && (await this.stop({
                        reason: "refresh session"
                    }), this.initializeSampling(e.id))
                }
                _addListeners() {
                    try {
                        Vf.document.addEventListener("visibilitychange", this._handleVisibilityChange), Vf.addEventListener("blur", this._handleWindowBlur), Vf.addEventListener("focus", this._handleWindowFocus), Vf.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (! function(e) {
                            const t = Ve();
                            Fd(Eg(e)), Hd(yy(e)), py(e), Oy(e), No(my(e)), t && (t.on("beforeSendEvent", dy(e)), t.on("afterSendEvent", ly(e)), t.on("createDsc", (t => {
                                const n = e.getSessionId();
                                n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
                            })), t.on("spanStart", (t => {
                                e.lastActiveSpan = t
                            })), t.on("spanEnd", (t => {
                                e.lastActiveSpan = t
                            })), t.on("beforeSendFeedback", (async (t, n) => {
                                const r = e.getSessionId();
                                n ? .includeReplay && e.isEnabled() && r && t.contexts ? .feedback && ("api" === t.contexts.feedback.source && await e.sendBufferedReplayOrFlush(), t.contexts.feedback.replay_id = r)
                            })), t.on("openFeedbackWidget", (async () => {
                                await e.sendBufferedReplayOrFlush()
                            })))
                        }(this), this._hasInitializedCoreListeners = !0)
                    } catch (e) {
                        this.handleException(e)
                    }
                    this._performanceCleanupCallback = function(e) {
                        function t(t) {
                            e.performanceEntries.includes(t) || e.performanceEntries.push(t)
                        }

                        function n({
                            entries: e
                        }) {
                            e.forEach(t)
                        }
                        const r = [];
                        return ["navigation", "paint", "resource"].forEach((e => {
                            r.push($f(e, n))
                        })), r.push(Nf(Rg(Og, e)), Lf(Rg(Lg, e)), Df(Rg(Ng, e))), () => {
                            r.forEach((e => e()))
                        }
                    }(this)
                }
                _removeListeners() {
                    try {
                        Vf.document.removeEventListener("visibilitychange", this._handleVisibilityChange), Vf.removeEventListener("blur", this._handleWindowBlur), Vf.removeEventListener("focus", this._handleWindowFocus), Vf.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
                    } catch (e) {
                        this.handleException(e)
                    }
                }
                _doChangeToBackgroundTasks(e) {
                    if (!this.session) return;
                    ty(this.session, {
                        maxReplayDuration: this._options.maxReplayDuration,
                        sessionIdleExpire: this.timeouts.sessionIdleExpire
                    }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush())
                }
                _doChangeToForegroundTasks(e) {
                    if (!this.session) return;
                    this.checkAndHandleExpiredSession() ? e && this._createCustomBreadcrumb(e) : $g && Ug.log("Document has become active, but session has expired")
                }
                _updateUserActivity(e = Date.now()) {
                    this._lastActivity = e
                }
                _updateSessionActivity(e = Date.now()) {
                    this.session && (this.session.lastActivity = e, this._maybeSaveSession())
                }
                _createCustomBreadcrumb(e) {
                    this.addUpdate((() => {
                        this.throttledAddEvent({
                            type: mm.Custom,
                            timestamp: e.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: e
                            }
                        })
                    }))
                }
                _addPerformanceEntries() {
                    let e = (t = this.performanceEntries, t.map(Ag).filter(Boolean)).concat(this.replayPerformanceEntries);
                    var t;
                    if (this.performanceEntries = [], this.replayPerformanceEntries = [], this._requiresManualStart) {
                        const t = this._context.initialTimestamp / 1e3;
                        e = e.filter((e => e.start >= t))
                    }
                    return Promise.all(gy(this, e))
                }
                _clearContext() {
                    this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
                }
                _updateInitialTimestampFromEventBuffer() {
                    const {
                        session: e,
                        eventBuffer: t
                    } = this;
                    if (!e || !t || this._requiresManualStart) return;
                    if (e.segmentId) return;
                    const n = t.getEarliestTimestamp();
                    n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
                }
                _popEventContext() {
                    const e = {
                        initialTimestamp: this._context.initialTimestamp,
                        initialUrl: this._context.initialUrl,
                        errorIds: Array.from(this._context.errorIds),
                        traceIds: Array.from(this._context.traceIds),
                        urls: this._context.urls
                    };
                    return this._clearContext(), e
                }
                async _runFlush() {
                    const e = this.getSessionId();
                    if (this.session && this.eventBuffer && e) {
                        if (await this._addPerformanceEntries(), this.eventBuffer ? .hasEvents && (await async function(e) {
                                try {
                                    return Promise.all(gy(e, [Py(Vf.performance.memory)]))
                                } catch {
                                    return []
                                }
                            }(this), this.eventBuffer && e === this.getSessionId())) try {
                            this._updateInitialTimestampFromEventBuffer();
                            const t = Date.now();
                            if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new By;
                            const n = this._popEventContext(),
                                r = this.session.segmentId++;
                            this._maybeSaveSession();
                            const o = await this.eventBuffer.finish();
                            await Uy({
                                replayId: e,
                                recordingData: o,
                                segmentId: r,
                                eventContext: n,
                                session: this.session,
                                timestamp: t,
                                onError: e => this.handleException(e)
                            })
                        } catch (e) {
                            this.handleException(e), this.stop({
                                reason: "sendReplay"
                            });
                            const t = Ve();
                            if (t) {
                                let n;
                                n = e instanceof jy ? "ratelimit_backoff" : e instanceof By ? "invalid" : "send_error", t.recordDroppedEvent(n, "replay")
                            }
                        }
                    } else $g && Ug.error("No session or eventBuffer found to flush.")
                }
                async _flush({
                    force: e = !1
                } = {}) {
                    if (!this._isEnabled && !e) return;
                    if (!this.checkAndHandleExpiredSession()) return void($g && Ug.error("Attempting to finish replay event after session expired."));
                    if (!this.session) return;
                    const t = this.session.started,
                        n = Date.now() - t;
                    this._debouncedFlush.cancel();
                    const r = n < this._options.minReplayDuration,
                        o = n > this._options.maxReplayDuration + 5e3;
                    if (r || o) return $g && Ug.log(`Session duration (${Math.floor(n/1e3)}s) is too ${r?"short":"long"}, not sending replay.`), void(r && this._debouncedFlush());
                    const s = this.eventBuffer;
                    s && 0 === this.session.segmentId && !s.hasCheckout && $g && Ug.log("Flushing initial segment without checkout.");
                    const i = !!this._flushLock;
                    this._flushLock || (this._flushLock = this._runFlush());
                    try {
                        await this._flushLock
                    } catch (e) {
                        this.handleException(e)
                    } finally {
                        this._flushLock = void 0, i && this._debouncedFlush()
                    }
                }
                _maybeSaveSession() {
                    this.session && this._options.stickySession && Xg(this.session)
                }
                _onMutationHandler(e) {
                    const {
                        ignoreMutations: t
                    } = this._options._experiments;
                    if (t ? .length && e.some((e => {
                            const n = function(e) {
                                    if (!e) return null;
                                    try {
                                        return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
                                    } catch {
                                        return null
                                    }
                                }(e.target),
                                r = t.join(",");
                            return n ? .matches(r)
                        }))) return !1;
                    const n = e.length,
                        r = this._options.mutationLimit,
                        o = r && n > r;
                    if (n > this._options.mutationBreadcrumbLimit || o) {
                        const e = Sg({
                            category: "replay.mutations",
                            data: {
                                count: n,
                                limit: o
                            }
                        });
                        this._createCustomBreadcrumb(e)
                    }
                    return !o || (this.stop({
                        reason: "mutationLimit",
                        forceFlush: "session" === this.recordingMode
                    }), !1)
                }
            }

            function Hy(e, t) {
                return [...e, ...t].join(",")
            }
            const Vy = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                Jy = ["content-length", "content-type", "accept"],
                Gy = Symbol.for("sentry__originalRequestBody");
            let Ky = !1,
                Yy = !1;
            const Xy = e => new Zy(e);
            class Zy {
                constructor({
                    flushMinDelay: e = 5e3,
                    flushMaxDelay: t = 5500,
                    minReplayDuration: n = 4999,
                    maxReplayDuration: r = 36e5,
                    stickySession: o = !0,
                    useCompression: s = !0,
                    workerUrl: i,
                    _experiments: a = {},
                    maskAllText: c = !0,
                    maskAllInputs: u = !0,
                    blockAllMedia: l = !0,
                    mutationBreadcrumbLimit: d = 750,
                    mutationLimit: p = 1e4,
                    slowClickTimeout: f = 7e3,
                    slowClickIgnoreSelectors: h = [],
                    networkDetailAllowUrls: m = [],
                    networkDetailDenyUrls: g = [],
                    networkCaptureBodies: y = !0,
                    networkRequestHeaders: _ = [],
                    networkResponseHeaders: v = [],
                    mask: b = [],
                    maskAttributes: S = ["title", "placeholder", "aria-label"],
                    unmask: k = [],
                    block: w = [],
                    unblock: x = [],
                    ignore: E = [],
                    maskFn: T,
                    beforeAddRecordingEvent: C,
                    beforeErrorSampling: I,
                    onError: R,
                    attachRawBodyFromRequest: A = !1
                } = {}) {
                    this.name = "Replay";
                    const M = function({
                        mask: e,
                        unmask: t,
                        block: n,
                        unblock: r,
                        ignore: o
                    }) {
                        return {
                            maskTextSelector: Hy(e, [".sentry-mask", "[data-sentry-mask]"]),
                            unmaskTextSelector: Hy(t, []),
                            blockSelector: Hy(n, [".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]),
                            unblockSelector: Hy(r, []),
                            ignoreSelector: Hy(o, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
                        }
                    }({
                        mask: b,
                        unmask: k,
                        block: w,
                        unblock: x,
                        ignore: E
                    });
                    if (this._recordingOptions = {
                            maskAllInputs: u,
                            maskAllText: c,
                            maskInputOptions: {
                                password: !0
                            },
                            maskTextFn: T,
                            maskInputFn: T,
                            maskAttributeFn: (e, t, n) => function({
                                el: e,
                                key: t,
                                maskAttributes: n,
                                maskAllText: r,
                                privacyOptions: o,
                                value: s
                            }) {
                                return r ? o.unmaskTextSelector && e.matches(o.unmaskTextSelector) ? s : n.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? s.replace(/[\S]/g, "*") : s : s
                            }({
                                maskAttributes: S,
                                maskAllText: c,
                                privacyOptions: M,
                                key: e,
                                value: t,
                                el: n
                            }),
                            ...M,
                            slimDOMOptions: "all",
                            inlineStylesheet: !0,
                            inlineImages: !1,
                            collectFonts: !0,
                            errorHandler: e => {
                                try {
                                    e.__rrweb__ = !0
                                } catch {}
                            },
                            recordCrossOriginIframes: Boolean(a.recordCrossOriginIframes)
                        }, this._initialOptions = {
                            flushMinDelay: e,
                            flushMaxDelay: t,
                            minReplayDuration: Math.min(n, 5e4),
                            maxReplayDuration: Math.min(r, Zf),
                            stickySession: o,
                            useCompression: s,
                            workerUrl: i,
                            blockAllMedia: l,
                            maskAllInputs: u,
                            maskAllText: c,
                            mutationBreadcrumbLimit: d,
                            mutationLimit: p,
                            slowClickTimeout: f,
                            slowClickIgnoreSelectors: h,
                            networkDetailAllowUrls: m,
                            networkDetailDenyUrls: g,
                            networkCaptureBodies: y,
                            networkRequestHeaders: Qy(_),
                            networkResponseHeaders: Qy(v),
                            beforeAddRecordingEvent: C,
                            beforeErrorSampling: I,
                            onError: R,
                            attachRawBodyFromRequest: A,
                            _experiments: a
                        }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${Vy}` : Vy, this._recordingOptions.ignoreCSSAttributes = new Set(["background-image"])), this._isInitialized && nt()) throw new Error("Multiple Sentry Session Replay instances are not supported");
                    this._isInitialized = !0
                }
                get _isInitialized() {
                    return Ky
                }
                set _isInitialized(e) {
                    Ky = e
                }
                afterAllSetup(e) {
                    nt() && !this._replay && (this._initialOptions.attachRawBodyFromRequest && function() {
                        if ("undefined" == typeof Request || Yy) return;
                        const e = Request;
                        try {
                            const t = function(t, n) {
                                const r = new e(t, n);
                                return null != n ? .body && (r[Gy] = n.body), r
                            };
                            t.prototype = e.prototype, s.Request = t, Yy = !0
                        } catch {}
                    }(), this._setup(e), this._initialize(e))
                }
                start() {
                    this._replay && this._replay.start()
                }
                startBuffering() {
                    this._replay && this._replay.startBuffering()
                }
                stop() {
                    return this._replay ? this._replay.stop({
                        forceFlush: "session" === this._replay.recordingMode
                    }) : Promise.resolve()
                }
                flush(e) {
                    return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve()) : Promise.resolve()
                }
                getReplayId(e) {
                    if (this._replay ? .isEnabled()) return this._replay.getSessionId(e)
                }
                getRecordingMode() {
                    if (this._replay ? .isEnabled()) return this._replay.recordingMode
                }
                _initialize(e) {
                    this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling())
                }
                _setup(e) {
                    const t = function(e, t) {
                        const n = t.getOptions(),
                            r = {
                                sessionSampleRate: 0,
                                errorSampleRate: 0,
                                ...e
                            },
                            o = $r(n.replaysSessionSampleRate),
                            s = $r(n.replaysOnErrorSampleRate);
                        null == o && null == s && O((() => {
                            console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
                        }));
                        null != o && (r.sessionSampleRate = o);
                        null != s && (r.errorSampleRate = s);
                        return r
                    }(this._initialOptions, e);
                    this._replay = new Wy({
                        options: t,
                        recordingOptions: this._recordingOptions
                    })
                }
                _maybeLoadFromReplayCanvasIntegration(e) {
                    try {
                        const t = e.getIntegrationByName("ReplayCanvas");
                        if (!t) return;
                        this._replay._canvas = t.getOptions()
                    } catch {}
                }
            }

            function Qy(e) {
                return [...Jy, ...e.map((e => e.toLowerCase()))]
            }

            function e_() {
                const e = Ve();
                return e ? .getIntegrationByName("Replay")
            }
            var t_ = Object.defineProperty,
                n_ = (e, t, n) => ((e, t, n) => t in e ? t_(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n)(e, "symbol" != typeof t ? t + "" : t, n);
            class r_ {
                constructor() {
                    n_(this, "idNodeMap", new Map), n_(this, "nodeMetaMap", new WeakMap)
                }
                getId(e) {
                    if (!e) return -1;
                    const t = this.getMeta(e) ? .id;
                    return t ? ? -1
                }
                getNode(e) {
                    return this.idNodeMap.get(e) || null
                }
                getIds() {
                    return Array.from(this.idNodeMap.keys())
                }
                getMeta(e) {
                    return this.nodeMetaMap.get(e) || null
                }
                removeNodeFromMap(e) {
                    const t = this.getId(e);
                    this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)))
                }
                has(e) {
                    return this.idNodeMap.has(e)
                }
                hasNode(e) {
                    return this.nodeMetaMap.has(e)
                }
                add(e, t) {
                    const n = t.id;
                    this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
                }
                replace(e, t) {
                    const n = this.getNode(e);
                    if (n) {
                        const e = this.nodeMetaMap.get(n);
                        e && this.nodeMetaMap.set(t, e)
                    }
                    this.idNodeMap.set(e, t)
                }
                reset() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
            }

            function o_(e, t, n = 1 / 0, r = 0) {
                return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : o_(e.parentNode, t, n, r + 1) : -1
            }

            function s_(e, t) {
                return n => {
                    const r = n;
                    if (null === r) return !1;
                    try {
                        if (e)
                            if ("string" == typeof e) {
                                if (r.matches(`.${e}`)) return !0
                            } else if (function(e, t) {
                                for (let n = e.classList.length; n--;) {
                                    const r = e.classList[n];
                                    if (t.test(r)) return !0
                                }
                                return !1
                            }(r, e)) return !0;
                        return !(!t || !r.matches(t))
                    } catch {
                        return !1
                    }
                }
            }
            const i_ = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
            let a_ = {
                map: {},
                getId: () => (console.error(i_), -1),
                getNode: () => (console.error(i_), null),
                removeNodeFromMap() {
                    console.error(i_)
                },
                has: () => (console.error(i_), !1),
                reset() {
                    console.error(i_)
                }
            };

            function c_(e, t, n, r, o = window) {
                const s = o.Object.getOwnPropertyDescriptor(e, t);
                return o.Object.defineProperty(e, t, r ? n : {
                    set(e) {
                        h_((() => {
                            n.set.call(this, e)
                        }), 0), s && s.set && s.set.call(this, e)
                    }
                }), () => c_(e, t, s || {}, !0)
            }

            function u_(e, t, n) {
                try {
                    if (!(t in e)) return () => {};
                    const r = e[t],
                        o = n(r);
                    return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })), e[t] = o, () => {
                        e[t] = r
                    }
                } catch {
                    return () => {}
                }
            }

            function l_(e, t, n, r, o) {
                if (!e) return !1;
                const s = function(e) {
                    if (!e) return null;
                    try {
                        return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
                    } catch (e) {
                        return null
                    }
                }(e);
                if (!s) return !1;
                const i = s_(t, n);
                if (!o) {
                    const e = r && s.matches(r);
                    return i(s) && !e
                }
                const a = o_(s, i);
                let c = -1;
                return !(a < 0) && (r && (c = o_(s, s_(null, r))), a > -1 && c < 0 || a < c)
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (a_ = new Proxy(a_, {
                get: (e, t, n) => ("map" === t && console.error(i_), Reflect.get(e, t, n))
            })), Date.now().toString();
            const d_ = {};

            function p_(e) {
                const t = d_[e];
                if (t) return t;
                const n = window.document;
                let r = window[e];
                if (n && "function" == typeof n.createElement) try {
                    const t = n.createElement("iframe");
                    t.hidden = !0, n.head.appendChild(t);
                    const o = t.contentWindow;
                    o && o[e] && (r = o[e]), n.head.removeChild(t)
                } catch (e) {}
                return d_[e] = r.bind(window)
            }

            function f_(...e) {
                return p_("requestAnimationFrame")(...e)
            }

            function h_(...e) {
                return p_("setTimeout")(...e)
            }
            var m_ = (e => (e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", e))(m_ || {});
            let g_;
            const y_ = e => {
                if (!g_) return e;
                return (...t) => {
                    try {
                        return e(...t)
                    } catch (e) {
                        if (g_ && !0 === g_(e)) return () => {};
                        throw e
                    }
                }
            };
            for (var __ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", v_ = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), b_ = 0; b_ < 64; b_++) v_[__.charCodeAt(b_)] = b_;
            const S_ = new Map;
            const k_ = (e, t, n) => {
                if (!e || !E_(e, t) && "object" != typeof e) return;
                const r = function(e, t) {
                    let n = S_.get(e);
                    return n || (n = new Map, S_.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
                }(n, e.constructor.name);
                let o = r.indexOf(e);
                return -1 === o && (o = r.length, r.push(e)), o
            };

            function w_(e, t, n) {
                if (e instanceof Array) return e.map((e => w_(e, t, n)));
                if (null === e) return e;
                if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) {
                    return {
                        rr_type: e.constructor.name,
                        args: [Object.values(e)]
                    }
                }
                if (e instanceof ArrayBuffer) {
                    return {
                        rr_type: e.constructor.name,
                        base64: function(e) {
                            var t, n = new Uint8Array(e),
                                r = n.length,
                                o = "";
                            for (t = 0; t < r; t += 3) o += __[n[t] >> 2], o += __[(3 & n[t]) << 4 | n[t + 1] >> 4], o += __[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], o += __[63 & n[t + 2]];
                            return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
                        }(e)
                    }
                }
                if (e instanceof DataView) {
                    return {
                        rr_type: e.constructor.name,
                        args: [w_(e.buffer, t, n), e.byteOffset, e.byteLength]
                    }
                }
                if (e instanceof HTMLImageElement) {
                    const t = e.constructor.name,
                        {
                            src: n
                        } = e;
                    return {
                        rr_type: t,
                        src: n
                    }
                }
                if (e instanceof HTMLCanvasElement) {
                    return {
                        rr_type: "HTMLImageElement",
                        src: e.toDataURL()
                    }
                }
                if (e instanceof ImageData) {
                    return {
                        rr_type: e.constructor.name,
                        args: [w_(e.data, t, n), e.width, e.height]
                    }
                }
                if (E_(e, t) || "object" == typeof e) {
                    return {
                        rr_type: e.constructor.name,
                        index: k_(e, t, n)
                    }
                }
                return e
            }
            const x_ = (e, t, n) => e.map((e => w_(e, t, n))),
                E_ = (e, t) => {
                    const n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((e => "function" == typeof t[e]));
                    return Boolean(n.find((n => e instanceof t[n])))
                };

            function T_(e, t, n, r, o) {
                const s = [];
                try {
                    const i = u_(e.HTMLCanvasElement.prototype, "getContext", (function(e) {
                        return function(s, ...i) {
                            if (!l_(this, t, n, r, !0)) {
                                const e = function(e) {
                                    return "experimental-webgl" === e ? "webgl" : e
                                }(s);
                                if ("__context" in this || (this.__context = e), o && ["webgl", "webgl2"].includes(e))
                                    if (i[0] && "object" == typeof i[0]) {
                                        const e = i[0];
                                        e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0)
                                    } else i.splice(0, 1, {
                                        preserveDrawingBuffer: !0
                                    })
                            }
                            return e.apply(this, [s, ...i])
                        }
                    }));
                    s.push(i)
                } catch {
                    console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                }
                return () => {
                    s.forEach((e => e()))
                }
            }

            function C_(e, t, n, r, o, s, i, a) {
                const c = [],
                    u = Object.getOwnPropertyNames(e);
                for (const i of u)
                    if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(i)) try {
                        if ("function" != typeof e[i]) continue;
                        const u = u_(e, i, (function(e) {
                            return function(...c) {
                                const u = e.apply(this, c);
                                if (k_(u, a, this), "tagName" in this.canvas && !l_(this.canvas, r, o, s, !0)) {
                                    const e = x_(c, a, this),
                                        r = {
                                            type: t,
                                            property: i,
                                            args: e
                                        };
                                    n(this.canvas, r)
                                }
                                return u
                            }
                        }));
                        c.push(u)
                    } catch {
                        const r = c_(e, i, {
                            set(e) {
                                n(this.canvas, {
                                    type: t,
                                    property: i,
                                    args: [e],
                                    setter: !0
                                })
                            }
                        });
                        c.push(r)
                    }
                return c
            }
            class I_ {
                constructor(e) {
                    this.pendingCanvasMutations = new Map, this.rafStamps = {
                        latestId: 0,
                        invokeId: null
                    }, this.shadowDoms = new Set, this.windowsSet = new WeakSet, this.windows = [], this.restoreHandlers = [], this.frozen = !1, this.locked = !1, this.snapshotInProgressMap = new Map, this.worker = null, this.lastSnapshotTime = 0, this.processMutation = (e, t) => {
                        !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
                    };
                    const {
                        enableManualSnapshot: t,
                        sampling: n = "all",
                        win: r,
                        recordCanvas: o,
                        errorHandler: s
                    } = e;
                    e.sampling = n, this.mutationCb = e.mutationCb, this.mirror = e.mirror, this.options = e, s && (g_ = s), (o && "number" == typeof n || t) && (this.worker = this.initFPSWorker()), this.addWindow(r), t || y_((() => {
                        o && "all" === n && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), o && "number" == typeof n && this.initCanvasFPSObserver()
                    }))()
                }
                reset() {
                    this.pendingCanvasMutations.clear(), this.restoreHandlers.forEach((e => {
                        try {
                            e()
                        } catch (e) {}
                    })), this.restoreHandlers = [], this.windowsSet = new WeakSet, this.windows = [], this.shadowDoms = new Set, this.worker ? .terminate(), this.worker = null, this.snapshotInProgressMap = new Map
                }
                freeze() {
                    this.frozen = !0
                }
                unfreeze() {
                    this.frozen = !1
                }
                lock() {
                    this.locked = !0
                }
                unlock() {
                    this.locked = !1
                }
                addWindow(e) {
                    const {
                        sampling: t = "all",
                        blockClass: n,
                        blockSelector: r,
                        unblockSelector: o,
                        recordCanvas: s,
                        enableManualSnapshot: i
                    } = this.options;
                    if (!this.windowsSet.has(e)) {
                        if (i) return this.windowsSet.add(e), void this.windows.push(new WeakRef(e));
                        y_((() => {
                            if (s && "all" === t && this.initCanvasMutationObserver(e, n, r, o), s && "number" == typeof t) {
                                const t = T_(e, n, r, o, !0);
                                this.restoreHandlers.push((() => {
                                    t()
                                }))
                            }
                        }))(), this.windowsSet.add(e), this.windows.push(new WeakRef(e))
                    }
                }
                addShadowRoot(e) {
                    this.shadowDoms.add(new WeakRef(e))
                }
                resetShadowRoots() {
                    this.shadowDoms = new Set
                }
                snapshot(e, t) {
                    t ? .skipRequestAnimationFrame ? this.takeSnapshot(performance.now(), !0, e) : f_((t => this.takeSnapshot(t, !0, e)))
                }
                initFPSWorker() {
                    const e = new Worker(function() {
                        const e = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']);
                        return URL.createObjectURL(e)
                    }());
                    return e.onmessage = e => {
                        const t = e.data,
                            {
                                id: n
                            } = t;
                        if (this.snapshotInProgressMap.set(n, !1), !("base64" in t)) return;
                        const {
                            base64: r,
                            type: o,
                            width: s,
                            height: i
                        } = t;
                        this.mutationCb({
                            id: n,
                            type: m_["2D"],
                            commands: [{
                                property: "clearRect",
                                args: [0, 0, s, i]
                            }, {
                                property: "drawImage",
                                args: [{
                                    rr_type: "ImageBitmap",
                                    args: [{
                                        rr_type: "Blob",
                                        data: [{
                                            rr_type: "ArrayBuffer",
                                            base64: r
                                        }],
                                        type: o
                                    }]
                                }, 0, 0, s, i]
                            }]
                        })
                    }, e
                }
                initCanvasFPSObserver() {
                    let e;
                    if (!this.windows.length && !this.shadowDoms.size) return;
                    const t = n => {
                        this.takeSnapshot(n, !1), e = f_(t)
                    };
                    e = f_(t), this.restoreHandlers.push((() => {
                        e && cancelAnimationFrame(e)
                    }))
                }
                initCanvasMutationObserver(e, t, n, r) {
                    const o = T_(e, t, n, r, !1),
                        s = function(e, t, n, r, o) {
                            const s = [],
                                i = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
                            for (const a of i) try {
                                if ("function" != typeof t.CanvasRenderingContext2D.prototype[a]) continue;
                                const i = u_(t.CanvasRenderingContext2D.prototype, a, (function(s) {
                                    return function(...i) {
                                        return l_(this.canvas, n, r, o, !0) || h_((() => {
                                            const n = x_(i, t, this);
                                            e(this.canvas, {
                                                type: m_["2D"],
                                                property: a,
                                                args: n
                                            })
                                        }), 0), s.apply(this, i)
                                    }
                                }));
                                s.push(i)
                            } catch {
                                const n = c_(t.CanvasRenderingContext2D.prototype, a, {
                                    set(t) {
                                        e(this.canvas, {
                                            type: m_["2D"],
                                            property: a,
                                            args: [t],
                                            setter: !0
                                        })
                                    }
                                });
                                s.push(n)
                            }
                            return () => {
                                s.forEach((e => e()))
                            }
                        }(this.processMutation.bind(this), e, t, n, r),
                        i = function(e, t, n, r, o) {
                            const s = [];
                            return s.push(...C_(t.WebGLRenderingContext.prototype, m_.WebGL, e, n, r, o, 0, t)), void 0 !== t.WebGL2RenderingContext && s.push(...C_(t.WebGL2RenderingContext.prototype, m_.WebGL2, e, n, r, o, 0, t)), () => {
                                s.forEach((e => e()))
                            }
                        }(this.processMutation.bind(this), e, t, n, r, this.mirror);
                    this.restoreHandlers.push((() => {
                        o(), s(), i()
                    }))
                }
                getCanvasElements(e, t, n) {
                    const r = [],
                        o = o => {
                            o.querySelectorAll("canvas").forEach((o => {
                                l_(o, e, t, n, !0) || r.push(o)
                            }))
                        };
                    for (const e of this.windows) {
                        const t = e.deref();
                        let n;
                        try {
                            n = t && t.document
                        } catch {}
                        n && o(n)
                    }
                    for (const e of this.shadowDoms) {
                        const t = e.deref();
                        t && o(t)
                    }
                    return r
                }
                takeSnapshot(e, t, n) {
                    const {
                        sampling: r,
                        blockClass: o,
                        blockSelector: s,
                        unblockSelector: i,
                        dataURLOptions: a,
                        maxCanvasSize: c
                    } = this.options, u = 1e3 / ("all" === r ? 2 : r || 2);
                    if (this.lastSnapshotTime && e - this.lastSnapshotTime < u) return !1;
                    this.lastSnapshotTime = e;
                    return (n ? [n] : this.getCanvasElements(o, s, i)).forEach((e => {
                        const n = this.mirror.getId(e);
                        if (this.mirror.hasNode(e) && e.width && e.height && !this.snapshotInProgressMap.get(n)) {
                            if (this.snapshotInProgressMap.set(n, !0), !t && ["webgl", "webgl2"].includes(e.__context)) {
                                const t = e.getContext(e.__context);
                                !1 === t ? .getContextAttributes() ? .preserveDrawingBuffer && t.clear(t.COLOR_BUFFER_BIT)
                            }
                            createImageBitmap(e).then((t => {
                                this.worker ? .postMessage({
                                    id: n,
                                    bitmap: t,
                                    width: e.width,
                                    height: e.height,
                                    dataURLOptions: a,
                                    maxCanvasSize: c
                                }, [t])
                            })).catch((e => {
                                y_((() => {
                                    throw this.snapshotInProgressMap.delete(n), e
                                }))()
                            }))
                        }
                    })), !0
                }
                startPendingCanvasMutationFlusher() {
                    f_((() => this.flushPendingCanvasMutations()))
                }
                startRAFTimestamping() {
                    const e = t => {
                        this.rafStamps.latestId = t, f_(e)
                    };
                    f_(e)
                }
                flushPendingCanvasMutations() {
                    this.pendingCanvasMutations.forEach(((e, t) => {
                        const n = this.mirror.getId(t);
                        this.flushPendingCanvasMutationFor(t, n)
                    })), f_((() => this.flushPendingCanvasMutations()))
                }
                flushPendingCanvasMutationFor(e, t) {
                    if (this.frozen || this.locked) return;
                    const n = this.pendingCanvasMutations.get(e);
                    if (!n || -1 === t) return;
                    const r = n.map((e => {
                            const {
                                type: t,
                                ...n
                            } = e;
                            return n
                        })),
                        {
                            type: o
                        } = n[0];
                    this.mutationCb({
                        id: t,
                        type: o,
                        commands: r
                    }), this.pendingCanvasMutations.delete(e)
                }
            }
            try {
                if (2 !== Array.from([1], (e => 2 * e))[0]) {
                    const e = document.createElement("iframe");
                    document.body.appendChild(e), Array.from = e.contentWindow ? .Array.from || Array.from, document.body.removeChild(e)
                }
            } catch (e) {
                console.debug("Unable to override Array.from", e)
            }
            var R_;
            new r_,
            function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped"
            }(R_ || (R_ = {}));
            const A_ = {
                    low: {
                        sampling: {
                            canvas: 1
                        },
                        dataURLOptions: {
                            type: "image/webp",
                            quality: .25
                        }
                    },
                    medium: {
                        sampling: {
                            canvas: 2
                        },
                        dataURLOptions: {
                            type: "image/webp",
                            quality: .4
                        }
                    },
                    high: {
                        sampling: {
                            canvas: 4
                        },
                        dataURLOptions: {
                            type: "image/webp",
                            quality: .5
                        }
                    }
                },
                M_ = 1280,
                O_ = (e = {}) => {
                    const [t, n] = e.maxCanvasSize || [], r = {
                        quality: e.quality || "medium",
                        enableManualSnapshot: e.enableManualSnapshot,
                        maxCanvasSize: [t ? Math.min(t, M_) : M_, n ? Math.min(n, M_) : M_]
                    };
                    let o, s;
                    const i = new Promise((e => s = e));
                    return {
                        name: "ReplayCanvas",
                        getOptions() {
                            const {
                                quality: e,
                                enableManualSnapshot: t,
                                maxCanvasSize: n
                            } = r;
                            return {
                                enableManualSnapshot: t,
                                recordCanvas: !0,
                                getCanvasManager: e => {
                                    const r = new I_({ ...e,
                                        enableManualSnapshot: t,
                                        maxCanvasSize: n,
                                        errorHandler: e => {
                                            try {
                                                "object" == typeof e && (e.__rrweb__ = !0)
                                            } catch {}
                                        }
                                    });
                                    return o = r, s(r), r
                                },
                                ...A_[e] || A_.medium
                            }
                        },
                        async snapshot(e, t) {
                            (o || await i).snapshot(e, t)
                        }
                    }
                };

            function P_(e, t, n, r, o) {
                if (!e.fetchData) return;
                const {
                    method: s,
                    url: i
                } = e.fetchData, a = Rr() && t(i);
                if (e.endTimestamp) {
                    const t = e.fetchData.__span;
                    if (!t) return;
                    const n = r[t];
                    return void(n && (a && (function(e, t) {
                        if (t.response) {
                            Mr(e, t.response.status);
                            const n = t.response ? .headers ? .get("content-length");
                            if (n) {
                                const t = parseInt(n);
                                t > 0 && e.setAttribute("http.response_content_length", t)
                            }
                        } else t.error && e.setStatus({
                            code: 2,
                            message: "internal_error"
                        });
                        e.end()
                    }(n, e), function(e, t, n) {
                        const r = "object" == typeof n && null !== n ? n.onRequestSpanEnd : void 0;
                        r ? .(e, {
                            headers: t.response ? .headers,
                            error: t.error
                        })
                    }(n, e, o)), delete r[t]))
                }
                const {
                    spanOrigin: c = "auto.http.browser",
                    propagateTraceparent: u = !1
                } = "object" == typeof o ? o : {
                    spanOrigin: o
                }, l = !!ro(), d = a && l ? ri(function(e, t, n) {
                    if (e.startsWith("data:")) {
                        return {
                            name: `${t} ${Ld(e)}`,
                            attributes: N_(e, void 0, t, n)
                        }
                    }
                    const r = Ad(e),
                        o = r ? Md(r) : e;
                    return {
                        name: `${t} ${o}`,
                        attributes: N_(e, r, t, n)
                    }
                }(i, s, c)) : new Hs;
                if (e.fetchData.__span = d.spanContext().spanId, r[d.spanContext().spanId] = d, n(e.fetchData.url)) {
                    const t = e.args[0],
                        n = { ...e.args[1] || {}
                        },
                        r = function(e, t, n, r) {
                            const o = hc({
                                    span: n,
                                    propagateTraceparent: r
                                }),
                                s = o["sentry-trace"],
                                i = o.baggage,
                                a = o.traceparent;
                            if (!s) return;
                            const c = t.headers || (x(e) ? e.headers : void 0);
                            if (c) {
                                if (function(e) {
                                        return "undefined" != typeof Headers && k(e, Headers)
                                    }(c)) {
                                    const e = new Headers(c);
                                    if (e.get("sentry-trace") || e.set("sentry-trace", s), r && a && !e.get("traceparent") && e.set("traceparent", a), i) {
                                        const t = e.get("baggage");
                                        t ? L_(t) || e.set("baggage", `${t},${i}`) : e.set("baggage", i)
                                    }
                                    return e
                                }
                                if (Array.isArray(c)) {
                                    const e = [...c];
                                    c.find((e => "sentry-trace" === e[0])) || e.push(["sentry-trace", s]), r && a && !c.find((e => "traceparent" === e[0])) && e.push(["traceparent", a]);
                                    const t = c.find((e => "baggage" === e[0] && L_(e[1])));
                                    return i && !t && e.push(["baggage", i]), e
                                } {
                                    const e = "sentry-trace" in c ? c["sentry-trace"] : void 0,
                                        t = "traceparent" in c ? c.traceparent : void 0,
                                        n = "baggage" in c ? c.baggage : void 0,
                                        o = n ? Array.isArray(n) ? [...n] : [n] : [],
                                        u = n && (Array.isArray(n) ? n.find((e => L_(e))) : L_(n));
                                    i && !u && o.push(i);
                                    const l = { ...c,
                                        "sentry-trace": e ? ? s,
                                        baggage: o.length > 0 ? o.join(",") : void 0
                                    };
                                    return r && a && !t && (l.traceparent = a), l
                                }
                            }
                            return { ...o
                            }
                        }(t, n, Rr() && l ? d : void 0, u);
                    r && (e.args[1] = n, n.headers = r)
                }
                const p = Ve();
                if (p) {
                    const t = {
                        input: e.args,
                        response: e.response,
                        startTimestamp: e.startTimestamp,
                        endTimestamp: e.endTimestamp
                    };
                    p.emit("beforeOutgoingRequestSpan", d, t)
                }
                return d
            }

            function L_(e) {
                return e.split(",").some((e => e.trim().startsWith(_r)))
            }

            function N_(e, t, n, r) {
                const o = {
                    url: Ld(e),
                    type: "fetch",
                    "http.method": n,
                    [cr]: r,
                    [ar]: "http.client"
                };
                return t && (Rd(t) || (o["http.url"] = Ld(t.href), o["server.address"] = t.host), t.search && (o["http.query"] = t.search), t.hash && (o["http.fragment"] = t.hash)), o
            }

            function D_(e) {
                return "number" == typeof e && isFinite(e)
            }

            function $_(e, t, n, { ...r
            }) {
                const o = Kr(e).start_timestamp;
                return o && o > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), si(e, (() => {
                    const e = ri({
                        startTime: t,
                        ...r
                    });
                    return e && e.end(n), e
                }))
            }

            function F_(e) {
                const t = Ve();
                if (!t) return;
                const {
                    name: n,
                    transaction: r,
                    attributes: o,
                    startTime: s
                } = e, {
                    release: i,
                    environment: a,
                    sendDefaultPii: c
                } = t.getOptions(), u = t.getIntegrationByName("Replay"), l = u ? .getReplayId(), d = Ue(), p = d.getUser(), f = void 0 !== p ? p.email || p.id || p.ip_address : void 0;
                let h;
                try {
                    h = d.getScopeData().contexts.profile.profile_id
                } catch {}
                return ri({
                    name: n,
                    attributes: {
                        release: i,
                        environment: a,
                        user: f || void 0,
                        profile_id: h || void 0,
                        replay_id: l || void 0,
                        transaction: r,
                        "user_agent.original": Kl.navigator ? .userAgent,
                        "client.address": c ? "{{auto}}" : void 0,
                        ...o
                    },
                    startTime: s,
                    experimental: {
                        standalone: !0
                    }
                })
            }

            function j_() {
                return Kl.addEventListener && Kl.performance
            }

            function B_(e) {
                return e / 1e3
            }

            function U_(e) {
                try {
                    return PerformanceObserver.supportedEntryTypes.includes(e)
                } catch {
                    return !1
                }
            }

            function z_(e, t) {
                let n, r = !1;

                function o(e) {
                    !r && n && t(e, n), r = !0
                }(e => {
                    const t = t => {
                        "pagehide" !== t.type && "hidden" !== Kl.document ? .visibilityState || e(t)
                    };
                    Yp("visibilitychange", t, {
                        capture: !0,
                        once: !0
                    }), Yp("pagehide", t, {
                        capture: !0,
                        once: !0
                    })
                })((() => {
                    o("pagehide")
                }));
                const s = e.on("beforeStartNavigationSpan", ((e, t) => {
                        t ? .isRedirect || (o("navigation"), s(), i())
                    })),
                    i = e.on("afterStartPageLoadSpan", (e => {
                        n = e.spanContext().spanId, i()
                    }))
            }

            function q_(e) {
                return e ? ((be() || performance.timeOrigin) + e) / 1e3 : e
            }

            function W_(e) {
                const t = {};
                if (null != e.nextHopProtocol) {
                    const {
                        name: n,
                        version: r
                    } = function(e) {
                        let t = "unknown",
                            n = "unknown",
                            r = "";
                        for (const o of e) {
                            if ("/" === o) {
                                [t, n] = e.split("/");
                                break
                            }
                            if (!isNaN(Number(o))) {
                                t = "h" === r ? "http" : r, n = e.split(r)[1];
                                break
                            }
                            r += o
                        }
                        return r === e && (t = r), {
                            name: t,
                            version: n
                        }
                    }(e.nextHopProtocol);
                    t["network.protocol.version"] = r, t["network.protocol.name"] = n
                }
                return be() || j_() ? .timeOrigin ? (n = { ...t,
                    "http.request.redirect_start": q_(e.redirectStart),
                    "http.request.redirect_end": q_(e.redirectEnd),
                    "http.request.worker_start": q_(e.workerStart),
                    "http.request.fetch_start": q_(e.fetchStart),
                    "http.request.domain_lookup_start": q_(e.domainLookupStart),
                    "http.request.domain_lookup_end": q_(e.domainLookupEnd),
                    "http.request.connect_start": q_(e.connectStart),
                    "http.request.secure_connection_start": q_(e.secureConnectionStart),
                    "http.request.connection_end": q_(e.connectEnd),
                    "http.request.request_start": q_(e.requestStart),
                    "http.request.response_start": q_(e.responseStart),
                    "http.request.response_end": q_(e.responseEnd),
                    "http.request.time_to_first_byte": null != e.responseStart ? e.responseStart / 1e3 : void 0
                }, Object.fromEntries(Object.entries(n).filter((([, e]) => null != e)))) : t;
                var n
            }

            function H_(e) {
                try {
                    return new URL(e, Bo.location.origin).href
                } catch {
                    return
                }
            }

            function V_(e) {
                try {
                    return new Headers(e)
                } catch {
                    return
                }
            }
            const J_ = new WeakMap,
                G_ = new Map,
                K_ = {
                    traceFetch: !0,
                    traceXHR: !0,
                    enableHTTPTimings: !0,
                    trackFetchStreamPerformance: !1
                };

            function Y_(e, t) {
                const {
                    traceFetch: n,
                    traceXHR: r,
                    trackFetchStreamPerformance: o,
                    shouldCreateSpanForRequest: s,
                    enableHTTPTimings: i,
                    tracePropagationTargets: a,
                    onRequestSpanStart: c,
                    onRequestSpanEnd: u
                } = { ...K_,
                    ...t
                }, l = "function" == typeof s ? s : e => !0, d = e => function(e, t) {
                    const n = I();
                    if (n) {
                        let r, o;
                        try {
                            r = new URL(e, n), o = new URL(n).origin
                        } catch {
                            return !1
                        }
                        const s = r.origin === o;
                        return t ? ce(r.toString(), t) || s && ce(r.pathname, t) : s
                    } {
                        const n = !!e.match(/^\/(?!\/)/);
                        return t ? ce(e, t) : n
                    }
                }(e, a), p = {}, f = e.getOptions().propagateTraceparent;
                n && (e.addEventProcessor((e => ("transaction" === e.type && e.spans && e.spans.forEach((e => {
                    if ("http.client" === e.op) {
                        const t = G_.get(e.span_id);
                        t && (e.timestamp = t / 1e3, G_.delete(e.span_id))
                    }
                })), e))), o && function(e) {
                    const t = "fetch-body-resolved";
                    vs(t, e), bs(t, (() => wd(xd)))
                }((e => {
                    if (e.response) {
                        const t = J_.get(e.response);
                        t && e.endTimestamp && G_.set(t, e.endTimestamp)
                    }
                })), kd((e => {
                    const t = P_(e, l, d, p, {
                        propagateTraceparent: f,
                        onRequestSpanEnd: u
                    });
                    if (e.response && e.fetchData.__span && J_.set(e.response, e.fetchData.__span), t) {
                        const n = H_(e.fetchData.url),
                            r = n ? Od(n).host : void 0;
                        t.setAttributes({
                            "http.url": n ? Ld(n) : void 0,
                            "server.address": r
                        }), i && X_(t), c ? .(t, {
                            headers: e.headers
                        })
                    }
                }))), r && zd((e => {
                    const t = function(e, t, n, r, o, s) {
                        const i = e.xhr,
                            a = i ? .[Ud];
                        if (!i || i.__sentry_own_request__ || !a) return;
                        const {
                            url: c,
                            method: u
                        } = a, l = Rr() && t(c);
                        if (e.endTimestamp) {
                            const t = i.__sentry_xhr_span_id__;
                            if (!t) return;
                            const n = r[t];
                            return void(n && (l && void 0 !== a.status_code && (Mr(n, a.status_code), n.end(), s ? .(n, {
                                headers: V_(jp(i)),
                                error: e.error
                            })), delete r[t]))
                        }
                        const d = H_(c),
                            p = Od(d || c),
                            f = Ld(Pd(c)),
                            h = !!ro(),
                            m = l && h ? ri({
                                name: `${u} ${f}`,
                                attributes: {
                                    url: Ld(c),
                                    type: "xhr",
                                    "http.method": u,
                                    "http.url": d ? Ld(d) : void 0,
                                    "server.address": p ? .host,
                                    [cr]: "auto.http.browser",
                                    [ar]: "http.client",
                                    ...p ? .search && {
                                        "http.query": p ? .search
                                    },
                                    ...p ? .hash && {
                                        "http.fragment": p ? .hash
                                    }
                                }
                            }) : new Hs;
                        i.__sentry_xhr_span_id__ = m.spanContext().spanId, r[i.__sentry_xhr_span_id__] = m, n(c) && function(e, t, n) {
                            const {
                                "sentry-trace": r,
                                baggage: o,
                                traceparent: s
                            } = hc({
                                span: t,
                                propagateTraceparent: n
                            });
                            r && function(e, t, n, r) {
                                const o = e.__sentry_xhr_v3__ ? .request_headers;
                                if (o ? .["sentry-trace"] || !e.setRequestHeader) return;
                                try {
                                    if (e.setRequestHeader("sentry-trace", t), r && !o ? .traceparent && e.setRequestHeader("traceparent", r), n) {
                                        const t = o ? .baggage;
                                        t && t.split(",").some((e => e.trim().startsWith("sentry-"))) || e.setRequestHeader("baggage", n)
                                    }
                                } catch {}
                            }(e, r, o, s)
                        }(i, Rr() && h ? m : void 0, o);
                        const g = Ve();
                        g && g.emit("beforeOutgoingRequestSpan", m, e);
                        return m
                    }(e, l, d, p, f, u);
                    t && (i && X_(t), c ? .(t, {
                        headers: V_(e.xhr.__sentry_xhr_v3__ ? .request_headers)
                    }))
                }))
            }

            function X_(e) {
                const {
                    url: t
                } = Kr(e).data;
                if (!t || "string" != typeof t) return;
                const n = $f("resource", (({
                    entries: r
                }) => {
                    r.forEach((r => {
                        (function(e) {
                            return "resource" === e.entryType && "initiatorType" in e && "string" == typeof e.nextHopProtocol && ("fetch" === e.initiatorType || "xmlhttprequest" === e.initiatorType)
                        })(r) && r.name.endsWith(t) && (e.setAttributes(W_(r)), setTimeout(n))
                    }))
                }))
            }
            const Z_ = {
                idleTimeout: 1e3,
                finalTimeout: 3e4,
                childSpanTimeout: 15e3
            };

            function Q_(e, t = {}) {
                const n = new Map;
                let r, o = !1,
                    s = "externalFinish",
                    i = !t.disableAutoFinish;
                const a = [],
                    {
                        idleTimeout: c = Z_.idleTimeout,
                        finalTimeout: u = Z_.finalTimeout,
                        childSpanTimeout: d = Z_.childSpanTimeout,
                        beforeSpanEnd: p,
                        trimIdleSpanEndTimestamp: f = !0
                    } = t,
                    h = Ve();
                if (!h || !Rr()) {
                    const e = new Hs;
                    return ao(e, {
                        sample_rate: "0",
                        sampled: "false",
                        ...lo(e)
                    }), e
                }
                const m = Ue(),
                    g = ro(),
                    y = function(e) {
                        const t = ri(e);
                        return Ce(Ue(), t), l && D.log("[Tracing] Started span is an idle span"), t
                    }(e);

                function _() {
                    r && (clearTimeout(r), r = void 0)
                }

                function v(e) {
                    _(), r = setTimeout((() => {
                        !o && 0 === n.size && i && (s = "idleTimeout", y.end(e))
                    }), c)
                }

                function b(e) {
                    r = setTimeout((() => {
                        !o && i && (s = "heartbeatFailed", y.end(e))
                    }), d)
                }

                function S(e) {
                    o = !0, n.clear(), a.forEach((e => e())), Ce(m, g);
                    const t = Kr(y),
                        {
                            start_timestamp: r
                        } = t;
                    if (!r) return;
                    t.data[ur] || y.setAttribute(ur, s);
                    const i = t.status;
                    i && "unknown" !== i || y.setStatus({
                        code: 1
                    }), D.log(`[Tracing] Idle span "${t.op}" finished`);
                    const d = to(y).filter((e => e !== y));
                    let p = 0;
                    d.forEach((t => {
                        t.isRecording() && (t.setStatus({
                            code: 2,
                            message: "cancelled"
                        }), t.end(e), l && D.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
                        const n = Kr(t),
                            {
                                timestamp: r = 0,
                                start_timestamp: o = 0
                            } = n,
                            s = o <= e,
                            i = r - o <= (u + c) / 1e3;
                        if (l) {
                            const e = JSON.stringify(t, void 0, 2);
                            s ? i || D.log("[Tracing] Discarding span since it finished after idle span final timeout", e) : D.log("[Tracing] Discarding span since it happened after idle span was finished", e)
                        }
                        i && s || (! function(e, t) {
                            e[Zr] && e[Zr].delete(t)
                        }(y, t), p++)
                    })), p > 0 && y.setAttribute("sentry.idle_span_discarded_spans", p)
                }
                return y.end = new Proxy(y.end, {
                    apply(e, t, n) {
                        if (p && p(y), t instanceof Hs) return;
                        const [r, ...o] = n, s = Jr(r || _e()), i = to(y).filter((e => e !== y)), a = Kr(y);
                        if (!i.length || !f) return S(s), Reflect.apply(e, t, [s, ...o]);
                        const c = h.getOptions().ignoreSpans,
                            l = i ? .reduce(((e, t) => {
                                const n = Kr(t);
                                return n.timestamp ? c && Js(n, c) ? e : e ? Math.max(e, n.timestamp) : n.timestamp : e
                            }), void 0),
                            d = a.start_timestamp,
                            m = Math.min(d ? d + u / 1e3 : 1 / 0, Math.max(d || -1 / 0, Math.min(s, l || 1 / 0)));
                        return S(m), Reflect.apply(e, t, [m, ...o])
                    }
                }), a.push(h.on("spanStart", (e => {
                    if (o || e === y || Kr(e).timestamp || e instanceof Xs && e.isStandaloneSpan()) return;
                    var t;
                    to(y).includes(e) && (t = e.spanContext().spanId, _(), n.set(t, !0), b(_e() + d / 1e3))
                }))), a.push(h.on("spanEnd", (e => {
                    var t;
                    o || (t = e.spanContext().spanId, n.has(t) && n.delete(t), 0 === n.size && v(_e() + c / 1e3))
                }))), a.push(h.on("idleSpanEnableAutoFinish", (e => {
                    e === y && (i = !0, v(), n.size && b())
                }))), t.disableAutoFinish || v(), setTimeout((() => {
                    o || (y.setStatus({
                        code: 2,
                        message: "deadline_exceeded"
                    }), s = "finalTimeout", y.end())
                }), u), y
            }

            function ev(e) {
                let t, n = 0;
                if (!U_("layout-shift")) return;
                const r = Lf((({
                    metric: e
                }) => {
                    const r = e.entries[e.entries.length - 1];
                    r && (n = e.value, t = r)
                }), !0);
                z_(e, ((e, o) => {
                    ! function(e, t, n, r) {
                        Gl && D.log(`Sending CLS span (${e})`);
                        const o = t ? B_((be() || 0) + t.startTime) : _e(),
                            s = Ue().getScopeData().transactionName,
                            i = t ? T(t.sources[0] ? .node) : "Layout shift",
                            a = {
                                [cr]: "auto.http.browser.cls",
                                [ar]: "ui.webvital.cls",
                                [hr]: 0,
                                "sentry.pageload.span_id": n,
                                "sentry.report_event": r
                            };
                        t ? .sources && t.sources.forEach(((e, t) => {
                            a[`cls.source.${t+1}`] = T(e.node)
                        }));
                        const c = F_({
                            name: i,
                            transaction: s,
                            attributes: a,
                            startTime: o
                        });
                        c && (c.addEvent("cls", {
                            [lr]: "",
                            [dr]: e
                        }), c.end(o))
                    }(n, t, o, e), r()
                }))
            }

            function tv(e) {
                let t, n = 0;
                if (!U_("largest-contentful-paint")) return;
                const r = Nf((({
                    metric: e
                }) => {
                    const r = e.entries[e.entries.length - 1];
                    r && (n = e.value, t = r)
                }), !0);
                z_(e, ((e, o) => {
                    ! function(e, t, n, r) {
                        Gl && D.log(`Sending LCP span (${e})`);
                        const o = B_((be() || 0) + (t ? .startTime || 0)),
                            s = Ue().getScopeData().transactionName,
                            i = t ? T(t.element) : "Largest contentful paint",
                            a = {
                                [cr]: "auto.http.browser.lcp",
                                [ar]: "ui.webvital.lcp",
                                [hr]: 0,
                                "sentry.pageload.span_id": n,
                                "sentry.report_event": r
                            };
                        t && (t.element && (a["lcp.element"] = T(t.element)), t.id && (a["lcp.id"] = t.id), t.url && (a["lcp.url"] = t.url), null != t.loadTime && (a["lcp.loadTime"] = t.loadTime), null != t.renderTime && (a["lcp.renderTime"] = t.renderTime), null != t.size && (a["lcp.size"] = t.size));
                        const c = F_({
                            name: i,
                            transaction: s,
                            attributes: a,
                            startTime: o
                        });
                        c && (c.addEvent("lcp", {
                            [lr]: "millisecond",
                            [dr]: e
                        }), c.end(o))
                    }(n, t, o, e), r()
                }))
            }
            const nv = 2147483647;
            let rv, ov, sv = 0,
                iv = {};

            function av({
                recordClsStandaloneSpans: e,
                recordLcpStandaloneSpans: t,
                client: n
            }) {
                const r = j_();
                if (r && be()) {
                    r.mark && Kl.performance.mark("sentry-tracing-init");
                    const o = t ? tv(n) : Nf((({
                            metric: e
                        }) => {
                            const t = e.entries[e.entries.length - 1];
                            t && (iv.lcp = {
                                value: e.value,
                                unit: "millisecond"
                            }, rv = t)
                        }), !0),
                        s = qf("ttfb", (({
                            metric: e
                        }) => {
                            e.entries[e.entries.length - 1] && (iv.ttfb = {
                                value: e.value,
                                unit: "millisecond"
                            })
                        }), Uf, Of),
                        i = e ? ev(n) : Lf((({
                            metric: e
                        }) => {
                            const t = e.entries[e.entries.length - 1];
                            t && (iv.cls = {
                                value: e.value,
                                unit: ""
                            }, ov = t)
                        }), !0);
                    return () => {
                        o ? .(), s(), i ? .()
                    }
                }
                return () => {}
            }

            function cv(e, t) {
                const n = j_(),
                    r = be();
                if (!n ? .getEntries || !r) return;
                const o = B_(r),
                    s = n.getEntries(),
                    {
                        op: i,
                        start_timestamp: a
                    } = Kr(e);
                s.slice(sv).forEach((n => {
                        const r = B_(n.startTime),
                            s = B_(Math.max(0, n.duration));
                        if (!("navigation" === i && a && o + r < a)) switch (n.entryType) {
                            case "navigation":
                                ! function(e, t, n) {
                                    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r => {
                                            uv(e, t, r, n)
                                        })), uv(e, t, "secureConnection", n, "TLS/SSL"), uv(e, t, "fetch", n, "cache"), uv(e, t, "domainLookup", n, "DNS"),
                                        function(e, t, n) {
                                            const r = n + B_(t.requestStart),
                                                o = n + B_(t.responseEnd),
                                                s = n + B_(t.responseStart);
                                            t.responseEnd && ($_(e, r, o, {
                                                op: "browser.request",
                                                name: t.name,
                                                attributes: {
                                                    [cr]: "auto.ui.browser.metrics"
                                                }
                                            }), $_(e, s, o, {
                                                op: "browser.response",
                                                name: t.name,
                                                attributes: {
                                                    [cr]: "auto.ui.browser.metrics"
                                                }
                                            }))
                                        }(e, t, n)
                                }(e, n, o);
                                break;
                            case "mark":
                            case "paint":
                            case "measure":
                                {! function(e, t, n, r, o, s) {
                                        if (function(e) {
                                                if ("measure" !== e ? .entryType) return;
                                                try {
                                                    return "Components ⚛" === e.detail.devtools.track
                                                } catch {
                                                    return
                                                }
                                            }(t)) return;
                                        if (["mark", "measure"].includes(t.entryType) && ce(t.name, s)) return;
                                        const i = Gp(!1),
                                            a = B_(i ? i.requestStart : 0),
                                            c = o + Math.max(n, a),
                                            u = o + n,
                                            l = u + r,
                                            d = {
                                                [cr]: "auto.resource.browser.metrics"
                                            };
                                        c !== u && (d["sentry.browser.measure_happened_before_request"] = !0, d["sentry.browser.measure_start_time"] = c);
                                        (function(e, t) {
                                            try {
                                                const n = t.detail;
                                                if (!n) return;
                                                if ("object" == typeof n) {
                                                    for (const [t, r] of Object.entries(n))
                                                        if (r && _(r)) e[`sentry.browser.measure.detail.${t}`] = r;
                                                        else if (void 0 !== r) try {
                                                        e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(r)
                                                    } catch {}
                                                    return
                                                }
                                                if (_(n)) return void(e["sentry.browser.measure.detail"] = n);
                                                try {
                                                    e["sentry.browser.measure.detail"] = JSON.stringify(n)
                                                } catch {}
                                            } catch {}
                                        })(d, t), c <= l && $_(e, c, l, {
                                            name: t.name,
                                            op: t.entryType,
                                            attributes: d
                                        })
                                    }(e, n, r, s, o, t.ignorePerformanceApiSpans);
                                    const i = tf(),
                                        a = n.startTime < i.firstHiddenTime;
                                    "first-paint" === n.name && a && (iv.fp = {
                                        value: n.startTime,
                                        unit: "millisecond"
                                    }),
                                    "first-contentful-paint" === n.name && a && (iv.fcp = {
                                        value: n.startTime,
                                        unit: "millisecond"
                                    });
                                    break
                                }
                            case "resource":
                                ! function(e, t, n, r, o, s, i) {
                                    if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                                    const a = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
                                    if (i ? .includes(a)) return;
                                    const c = {
                                            [cr]: "auto.resource.browser.metrics"
                                        },
                                        u = Od(n);
                                    u.protocol && (c["url.scheme"] = u.protocol.split(":").pop());
                                    u.host && (c["server.address"] = u.host);
                                    c["url.same_origin"] = n.includes(Kl.location.origin),
                                        function(e, t, n) {
                                            n.forEach((([n, r]) => {
                                                const o = e[n];
                                                null != o && ("number" == typeof o && o < nv || "string" == typeof o) && (t[r] = o)
                                            }))
                                        }(t, c, [
                                            ["responseStatus", "http.response.status_code"],
                                            ["transferSize", "http.response_transfer_size"],
                                            ["encodedBodySize", "http.response_content_length"],
                                            ["decodedBodySize", "http.decoded_response_content_length"],
                                            ["renderBlockingStatus", "resource.render_blocking_status"],
                                            ["deliveryType", "http.response_delivery_type"]
                                        ]);
                                    const l = { ...c,
                                            ...W_(t)
                                        },
                                        d = s + r,
                                        p = d + o;
                                    $_(e, d, p, {
                                        name: n.replace(Kl.location.origin, ""),
                                        op: a,
                                        attributes: l
                                    })
                                }(e, n, n.name, r, s, o, t.ignoreResourceSpans)
                        }
                    })), sv = Math.max(s.length - 1, 0),
                    function(e) {
                        const t = Kl.navigator;
                        if (!t) return;
                        const n = t.connection;
                        n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType), n.type && e.setAttribute("connectionType", n.type), D_(n.rtt) && (iv["connection.rtt"] = {
                            value: n.rtt,
                            unit: "millisecond"
                        }));
                        D_(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`);
                        D_(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
                    }(e), "pageload" === i && (function(e) {
                        const t = Gp(!1);
                        if (!t) return;
                        const {
                            responseStart: n,
                            requestStart: r
                        } = t;
                        r <= n && (e["ttfb.requestTime"] = {
                            value: n - r,
                            unit: "millisecond"
                        })
                    }(iv), t.recordClsOnPageloadSpan || delete iv.cls, t.recordLcpOnPageloadSpan || delete iv.lcp, Object.entries(iv).forEach((([e, t]) => {
                        Ks(e, t.value, t.unit)
                    })), e.setAttribute("performance.timeOrigin", o), e.setAttribute("performance.activationStart", Kp()), function(e, t) {
                        rv && t.recordLcpOnPageloadSpan && (rv.element && e.setAttribute("lcp.element", T(rv.element)), rv.id && e.setAttribute("lcp.id", rv.id), rv.url && e.setAttribute("lcp.url", rv.url.trim().slice(0, 200)), null != rv.loadTime && e.setAttribute("lcp.loadTime", rv.loadTime), null != rv.renderTime && e.setAttribute("lcp.renderTime", rv.renderTime), e.setAttribute("lcp.size", rv.size));
                        ov ? .sources && t.recordClsOnPageloadSpan && ov.sources.forEach(((t, n) => e.setAttribute(`cls.source.${n+1}`, T(t.node))))
                    }(e, t)), rv = void 0, ov = void 0, iv = {}
            }

            function uv(e, t, n, r, o = n) {
                const s = function(e) {
                        if ("secureConnection" === e) return "connectEnd";
                        if ("fetch" === e) return "domainLookupStart";
                        return `${e}End`
                    }(n),
                    i = t[s],
                    a = t[`${n}Start`];
                a && i && $_(e, r + B_(a), r + B_(i), {
                    op: `browser.${o}`,
                    name: t.name,
                    attributes: {
                        [cr]: "auto.ui.browser.metrics",
                        ..."redirect" === n && null != t.redirectCount ? {
                            "http.redirect_count": t.redirectCount
                        } : {}
                    }
                })
            }
            const lv = [],
                dv = new Map,
                pv = new Map;

            function fv() {
                if (j_() && be()) {
                    const e = Df(mv);
                    return () => {
                        e()
                    }
                }
                return () => {}
            }
            const hv = {
                click: "click",
                pointerdown: "click",
                pointerup: "click",
                mousedown: "click",
                mouseup: "click",
                touchstart: "click",
                touchend: "click",
                mouseover: "hover",
                mouseout: "hover",
                mouseenter: "hover",
                mouseleave: "hover",
                pointerover: "hover",
                pointerout: "hover",
                pointerenter: "hover",
                pointerleave: "hover",
                dragstart: "drag",
                dragend: "drag",
                drag: "drag",
                dragenter: "drag",
                dragleave: "drag",
                dragover: "drag",
                drop: "drag",
                keydown: "press",
                keyup: "press",
                keypress: "press",
                input: "press"
            };
            const mv = ({
                metric: e
            }) => {
                if (null == e.value) return;
                const t = B_(e.value);
                if (t > 60) return;
                const n = e.entries.find((t => t.duration === e.value && hv[t.name]));
                if (!n) return;
                const {
                    interactionId: r
                } = n, o = hv[n.name], s = B_(be() + n.startTime), i = ro(), a = i ? no(i) : void 0, c = null != r ? dv.get(r) : void 0, u = c ? .span || a, l = u ? Kr(u).description : Ue().getScopeData().transactionName, d = F_({
                    name: c ? .elementName || T(n.target),
                    transaction: l,
                    attributes: {
                        [cr]: "auto.http.browser.inp",
                        [ar]: `ui.interaction.${o}`,
                        [hr]: n.duration
                    },
                    startTime: s
                });
                d && (d.addEvent("inp", {
                    [lr]: "millisecond",
                    [dr]: e.value
                }), d.end(s + t))
            };

            function gv() {
                const e = Object.keys(hv);

                function t(e) {
                    const t = e.target;
                    if (!t) return;
                    const n = T(t),
                        r = Math.round(e.timeStamp);
                    if (pv.set(r, n), pv.size > 50) {
                        const e = pv.keys().next().value;
                        void 0 !== e && pv.delete(e)
                    }
                }
                nt() && e.forEach((e => {
                    Kl.addEventListener(e, t, {
                        capture: !0,
                        passive: !0
                    })
                }));
                const n = ({
                    entries: e
                }) => {
                    const t = ro(),
                        n = t && no(t);
                    e.forEach((e => {
                        if (! function(e) {
                                return "duration" in e
                            }(e)) return;
                        const t = e.interactionId;
                        if (null == t) return;
                        if (dv.has(t)) return;
                        const r = e.target ? T(e.target) : function(e) {
                            const t = Math.round(e.startTime);
                            let n = pv.get(t);
                            if (!n)
                                for (let e = -5; e <= 5; e++) {
                                    const r = pv.get(t + e);
                                    if (r) {
                                        n = r;
                                        break
                                    }
                                }
                            return n || "<unknown>"
                        }(e);
                        if (lv.length > 10) {
                            const e = lv.shift();
                            dv.delete(e)
                        }
                        lv.push(t), dv.set(t, {
                            span: n,
                            elementName: r
                        })
                    }))
                };
                $f("event", n), $f("first-input", n)
            }
            const yv = "sentry_previous_trace",
                _v = "sentry.previous_trace";

            function vv(e, {
                linkPreviousTrace: t,
                consistentTraceSampling: n
            }) {
                const r = "session-storage" === t;
                let o = r ? function() {
                    try {
                        const e = Bo.sessionStorage ? .getItem(yv);
                        return JSON.parse(e)
                    } catch {
                        return
                    }
                }() : void 0;
                e.on("spanStart", (e => {
                    if (no(e) !== e) return;
                    const t = Ue().getPropagationContext();
                    o = function(e, t, n) {
                        const r = Kr(t);

                        function o() {
                            try {
                                return Number(n.dsc ? .sample_rate) ? ? Number(r.data ? .[sr])
                            } catch {
                                return 0
                            }
                        }
                        const s = {
                            spanContext: t.spanContext(),
                            startTimestamp: r.start_timestamp,
                            sampleRate: o(),
                            sampleRand: n.sampleRand
                        };
                        if (!e) return s;
                        const i = e.spanContext;
                        if (i.traceId === r.trace_id) return e;
                        Date.now() / 1e3 - e.startTimestamp <= 3600 && (ed && D.log(`Adding previous_trace \`${JSON.stringify(i)}\` link to span \`${JSON.stringify({op:r.op,...t.spanContext()})}\``), t.addLink({
                            context: i,
                            attributes: {
                                [yr]: "previous_trace"
                            }
                        }), t.setAttribute(_v, `${i.traceId}-${i.spanId}-${bv(i)?1:0}`));
                        return s
                    }(o, e, t), r && function(e) {
                        try {
                            Bo.sessionStorage.setItem(yv, JSON.stringify(e))
                        } catch (e) {
                            ed && D.warn("Could not store previous trace in sessionStorage", e)
                        }
                    }(o)
                }));
                let s = !0;
                n && e.on("beforeSampling", (e => {
                    if (!o) return;
                    const t = Ue(),
                        n = t.getPropagationContext();
                    s && n.parentSpanId ? s = !1 : (t.setPropagationContext({ ...n,
                        dsc: { ...n.dsc,
                            sample_rate: String(o.sampleRate),
                            sampled: String(bv(o.spanContext))
                        },
                        sampleRand: o.sampleRand
                    }), e.parentSampled = bv(o.spanContext), e.parentSampleRate = o.sampleRate, e.spanAttributes = { ...e.spanAttributes,
                        [ir]: o.sampleRate
                    })
                }))
            }

            function bv(e) {
                return 1 === e.traceFlags
            }
            const Sv = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
            const kv = { ...Z_,
                    instrumentNavigation: !0,
                    instrumentPageLoad: !0,
                    markBackgroundSpan: !0,
                    enableLongTask: !0,
                    enableLongAnimationFrame: !0,
                    enableInp: !0,
                    ignoreResourceSpans: [],
                    ignorePerformanceApiSpans: [],
                    detectRedirects: !0,
                    linkPreviousTrace: "in-memory",
                    consistentTraceSampling: !1,
                    enableReportPageLoaded: !1,
                    _experiments: {},
                    ...K_
                },
                wv = (e = {}) => {
                    "enableElementTiming" in e && O((() => {
                        console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.")
                    }));
                    const t = {
                            name: void 0,
                            source: void 0
                        },
                        n = Bo.document,
                        {
                            enableInp: r,
                            enableLongTask: o,
                            enableLongAnimationFrame: i,
                            _experiments: {
                                enableInteractions: a,
                                enableStandaloneClsSpans: c,
                                enableStandaloneLcpSpans: u
                            },
                            beforeStartSpan: l,
                            idleTimeout: d,
                            finalTimeout: p,
                            childSpanTimeout: f,
                            markBackgroundSpan: h,
                            traceFetch: m,
                            traceXHR: g,
                            trackFetchStreamPerformance: y,
                            shouldCreateSpanForRequest: _,
                            enableHTTPTimings: v,
                            ignoreResourceSpans: b,
                            ignorePerformanceApiSpans: S,
                            instrumentPageLoad: k,
                            instrumentNavigation: w,
                            detectRedirects: x,
                            linkPreviousTrace: E,
                            consistentTraceSampling: C,
                            enableReportPageLoaded: A,
                            onRequestSpanStart: M,
                            onRequestSpanEnd: P
                        } = { ...kv,
                            ...e
                        },
                        L = function() {
                            const e = Bo.navigator;
                            return !!e ? .userAgent && Sv.test(e.userAgent)
                        }();
                    let N, $, F;

                    function j(e, r, o = !0) {
                        const s = "pageload" === r.op,
                            i = r.name,
                            a = l ? l(r) : r,
                            h = a.attributes || {};
                        if (i !== a.name && (h[or] = "custom", a.attributes = h), !o) {
                            const e = ge();
                            return void ri({ ...a,
                                startTime: e
                            }).end(e)
                        }
                        t.name = a.name, t.source = h[or];
                        const m = Q_(a, {
                            idleTimeout: d,
                            finalTimeout: p,
                            childSpanTimeout: f,
                            disableAutoFinish: s,
                            beforeSpanEnd: t => {
                                N ? .(), cv(t, {
                                    recordClsOnPageloadSpan: !c,
                                    recordLcpOnPageloadSpan: !u,
                                    ignoreResourceSpans: b,
                                    ignorePerformanceApiSpans: S
                                }), Av(e, void 0);
                                const n = Ue(),
                                    r = n.getPropagationContext();
                                n.setPropagationContext({ ...r,
                                    traceId: m.spanContext().traceId,
                                    sampled: Yr(m),
                                    dsc: lo(t)
                                }), s && (F = void 0)
                            },
                            trimIdleSpanEndTimestamp: !A
                        });

                        function g() {
                            n && ["interactive", "complete"].includes(n.readyState) && e.emit("idleSpanEnableAutoFinish", m)
                        }
                        s && A && (F = m), Av(e, m), s && !A && n && (n.addEventListener("readystatechange", (() => {
                            g()
                        })), g())
                    }
                    return {
                        name: "BrowserTracing",
                        setup(e) {
                            if (L) ed && D.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
                            else {
                                if (Gu(), N = av({
                                        recordClsStandaloneSpans: c || !1,
                                        recordLcpStandaloneSpans: u || !1,
                                        client: e
                                    }), r && fv(), i && s.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? .includes("long-animation-frame") ? new PerformanceObserver((e => {
                                        const t = ro();
                                        if (t)
                                            for (const n of e.getEntries()) {
                                                if (!n.scripts[0]) continue;
                                                const e = B_(be() + n.startTime),
                                                    {
                                                        start_timestamp: r,
                                                        op: o
                                                    } = Kr(t);
                                                if ("navigation" === o && r && e < r) continue;
                                                const s = B_(n.duration),
                                                    i = {
                                                        [cr]: "auto.ui.browser.metrics"
                                                    },
                                                    a = n.scripts[0],
                                                    {
                                                        invoker: c,
                                                        invokerType: u,
                                                        sourceURL: l,
                                                        sourceFunctionName: d,
                                                        sourceCharPosition: p
                                                    } = a;
                                                i["browser.script.invoker"] = c, i["browser.script.invoker_type"] = u, l && (i["code.filepath"] = l), d && (i["code.function"] = d), -1 !== p && (i["browser.script.source_char_position"] = p), $_(t, e, e + s, {
                                                    name: "Main UI thread blocked",
                                                    op: "ui.long-animation-frame",
                                                    attributes: i
                                                })
                                            }
                                    })).observe({
                                        type: "long-animation-frame",
                                        buffered: !0
                                    }) : o && $f("longtask", (({
                                        entries: e
                                    }) => {
                                        const t = ro();
                                        if (!t) return;
                                        const {
                                            op: n,
                                            start_timestamp: r
                                        } = Kr(t);
                                        for (const o of e) {
                                            const e = B_(be() + o.startTime),
                                                s = B_(o.duration);
                                            "navigation" === n && r && e < r || $_(t, e, e + s, {
                                                name: "Main UI thread blocked",
                                                op: "ui.long-task",
                                                attributes: {
                                                    [cr]: "auto.ui.browser.metrics"
                                                }
                                            })
                                        }
                                    })), a && $f("event", (({
                                        entries: e
                                    }) => {
                                        const t = ro();
                                        if (t)
                                            for (const n of e)
                                                if ("click" === n.name) {
                                                    const e = B_(be() + n.startTime),
                                                        r = B_(n.duration),
                                                        o = {
                                                            name: T(n.target),
                                                            op: `ui.interaction.${n.name}`,
                                                            startTime: e,
                                                            attributes: {
                                                                [cr]: "auto.ui.browser.metrics"
                                                            }
                                                        },
                                                        s = R(n.target);
                                                    s && (o.attributes["ui.component_name"] = s), $_(t, e, e + r, o)
                                                }
                                    })), x && n) {
                                    const e = () => {
                                        $ = _e()
                                    };
                                    addEventListener("click", e, {
                                        capture: !0
                                    }), addEventListener("keydown", e, {
                                        capture: !0,
                                        passive: !0
                                    })
                                }
                                e.on("startNavigationSpan", ((n, r) => {
                                    if (Ve() !== e) return;
                                    if (r ? .isRedirect) return ed && D.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), void j(e, {
                                        op: "navigation.redirect",
                                        ...n
                                    }, !1);
                                    $ = void 0, t(), ze().setPropagationContext({
                                        traceId: xe(),
                                        sampleRand: Math.random(),
                                        propagationSpanId: Rr() ? void 0 : Ee()
                                    });
                                    const o = Ue();
                                    o.setPropagationContext({
                                        traceId: xe(),
                                        sampleRand: Math.random(),
                                        propagationSpanId: Rr() ? void 0 : Ee()
                                    }), o.setSDKProcessingMetadata({
                                        normalizedRequest: void 0
                                    }), j(e, {
                                        op: "navigation",
                                        ...n,
                                        parentSpan: null,
                                        forceTransaction: !0
                                    })
                                })), e.on("startPageLoadSpan", ((n, r = {}) => {
                                    if (Ve() !== e) return;
                                    t();
                                    const o = jr(r.sentryTrace || Tv("sentry-trace") || Cv("sentry-trace"), r.baggage || Tv("baggage") || Cv("baggage")),
                                        s = Ue();
                                    s.setPropagationContext(o), Rr() || (s.getPropagationContext().propagationSpanId = Ee()), s.setSDKProcessingMetadata({
                                        normalizedRequest: Wo()
                                    }), j(e, {
                                        op: "pageload",
                                        ...n
                                    })
                                })), e.on("endPageloadSpan", (() => {
                                    A && F && (F.setAttribute(ur, "reportPageLoaded"), F.end())
                                }))
                            }

                            function t() {
                                const t = Rv(e);
                                t && !Kr(t).timestamp && (ed && D.log(`[Tracing] Finishing current active span with op: ${Kr(t).op}`), t.setAttribute(ur, "cancelled"), t.end())
                            }
                        },
                        afterAllSetup(e) {
                            if (L) return;
                            let n = I();
                            if ("off" !== E && vv(e, {
                                    linkPreviousTrace: E,
                                    consistentTraceSampling: C
                                }), Bo.location) {
                                if (k) {
                                    const t = be();
                                    xv(e, {
                                        name: Bo.location.pathname,
                                        startTime: t ? t / 1e3 : void 0,
                                        attributes: {
                                            [or]: "url",
                                            [cr]: "auto.pageload.browser"
                                        }
                                    })
                                }
                                w && Hd((({
                                    to: t,
                                    from: r
                                }) => {
                                    if (void 0 === r && -1 !== n ? .indexOf(t)) return void(n = void 0);
                                    n = void 0;
                                    const o = Ad(t),
                                        s = Rv(e),
                                        i = s && x && function(e, t) {
                                            const n = Kr(e),
                                                r = ge(),
                                                o = n.start_timestamp;
                                            if (r - o > Mv) return !1;
                                            if (t && r - t <= Mv) return !1;
                                            return !0
                                        }(s, $);
                                    Ev(e, {
                                        name: o ? .pathname || Bo.location.pathname,
                                        attributes: {
                                            [or]: "url",
                                            [cr]: "auto.navigation.browser"
                                        }
                                    }, {
                                        url: t,
                                        isRedirect: i
                                    })
                                }))
                            }
                            h && (Bo.document ? Bo.document.addEventListener("visibilitychange", (() => {
                                const e = ro();
                                if (!e) return;
                                const t = no(e);
                                if (Bo.document.hidden && t) {
                                    const e = "cancelled",
                                        {
                                            op: n,
                                            status: r
                                        } = Kr(t);
                                    ed && D.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), r || t.setStatus({
                                        code: 2,
                                        message: e
                                    }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
                                }
                            })) : ed && D.warn("[Tracing] Could not set up background tab detection due to lack of global document")), a && function(e, t, n, r, o) {
                                const s = Bo.document;
                                let i;
                                const a = () => {
                                    const s = "ui.action.click",
                                        a = Rv(e);
                                    if (a) {
                                        const e = Kr(a).op;
                                        if (["navigation", "pageload"].includes(e)) return void(ed && D.warn(`[Tracing] Did not create ${s} span because a pageload or navigation span is in progress.`))
                                    }
                                    i && (i.setAttribute(ur, "interactionInterrupted"), i.end(), i = void 0), o.name ? i = Q_({
                                        name: o.name,
                                        op: s,
                                        attributes: {
                                            [or]: o.source || "url"
                                        }
                                    }, {
                                        idleTimeout: t,
                                        finalTimeout: n,
                                        childSpanTimeout: r
                                    }) : ed && D.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`)
                                };
                                s && addEventListener("click", a, {
                                    capture: !0
                                })
                            }(e, d, p, f, t), r && gv(), Y_(e, {
                                traceFetch: m,
                                traceXHR: g,
                                trackFetchStreamPerformance: y,
                                tracePropagationTargets: e.getOptions().tracePropagationTargets,
                                shouldCreateSpanForRequest: _,
                                enableHTTPTimings: v,
                                onRequestSpanStart: M,
                                onRequestSpanEnd: P
                            })
                        }
                    }
                };

            function xv(e, t, n) {
                e.emit("startPageLoadSpan", t, n), Ue().setTransactionName(t.name);
                const r = Rv(e);
                return r && e.emit("afterStartPageLoadSpan", r), r
            }

            function Ev(e, t, n) {
                const {
                    url: r,
                    isRedirect: o
                } = n || {};
                e.emit("beforeStartNavigationSpan", t, {
                    isRedirect: o
                }), e.emit("startNavigationSpan", t, {
                    isRedirect: o
                });
                const s = Ue();
                return s.setTransactionName(t.name), r && !o && s.setSDKProcessingMetadata({
                    normalizedRequest: { ...Wo(),
                        url: r
                    }
                }), Rv(e)
            }

            function Tv(e) {
                const t = Bo.document,
                    n = t ? .querySelector(`meta[name=${e}]`);
                return n ? .getAttribute("content") || void 0
            }

            function Cv(e) {
                const t = Bo.performance ? .getEntriesByType ? .("navigation")[0],
                    n = t ? .serverTiming ? .find((t => t.name === e));
                return n ? .description
            }
            const Iv = "_sentry_idleSpan";

            function Rv(e) {
                return e[Iv]
            }

            function Av(e, t) {
                F(e, Iv, t)
            }
            const Mv = 1.5;
            const Ov = () => ({
                name: "ElementTiming",
                setup() {
                    j_() && be() && $f("element", (({
                        entries: e
                    }) => {
                        for (const t of e) {
                            const e = t;
                            if (!e.identifier) continue;
                            const n = e.identifier,
                                r = e.name,
                                o = e.renderTime,
                                s = e.loadTime,
                                i = {
                                    "sentry.origin": "auto.ui.browser.element_timing",
                                    "ui.element.identifier": n
                                };
                            r && (i["ui.element.paint_type"] = r), e.id && (i["ui.element.id"] = e.id), e.element && (i["ui.element.type"] = e.element.tagName.toLowerCase()), e.url && (i["ui.element.url"] = e.url), e.naturalWidth && (i["ui.element.width"] = e.naturalWidth), e.naturalHeight && (i["ui.element.height"] = e.naturalHeight), o > 0 && Lu("ui.element.render_time", o, {
                                unit: "millisecond",
                                attributes: i
                            }), s > 0 && Lu("ui.element.load_time", s, {
                                unit: "millisecond",
                                attributes: i
                            })
                        }
                    }))
                }
            });

            function Pv(e = Ve()) {
                e ? .emit("endPageloadSpan")
            }

            function Lv(e) {
                const t = ro();
                if (t === e) return;
                const n = Ue();
                e.end = new Proxy(e.end, {
                    apply: (e, r, o) => (Ce(n, t), Reflect.apply(e, r, o))
                }), Ce(n, e)
            }
            const Nv = 5e3;

            function Dv(e) {
                function t(...e) {
                    l && D.log("[Offline]:", ...e)
                }
                return n => {
                    const r = e(n);
                    if (!n.createStore) throw new Error("No `createStore` function was provided");
                    const o = n.createStore(n);
                    let s, i = Nv;

                    function a(e) {
                        s && clearTimeout(s), s = Ua(setTimeout((async () => {
                            s = void 0;
                            const e = await o.shift();
                            e && (t("Attempting to send previously queued event"), e[0].sent_at = (new Date).toISOString(), u(e, !0).catch((e => {
                                t("Failed to retry sending", e)
                            })))
                        }), e))
                    }

                    function c() {
                        s || (a(i), i = Math.min(2 * i, 36e5))
                    }
                    async function u(e, s = !1) {
                        if (!s && ns(e, ["replay_event", "replay_recording"])) return await o.push(e), a(100), {};
                        try {
                            if (n.shouldSend && !1 === await n.shouldSend(e)) throw new Error("Envelope not sent because `shouldSend` callback returned false");
                            const t = await r.send(e);
                            let o = 100;
                            if (t)
                                if (t.headers ? .["retry-after"]) o = Wa(t.headers["retry-after"]);
                                else if (t.headers ? .["x-sentry-rate-limits"]) o = 6e4;
                            else if ((t.statusCode || 0) >= 400) return t;
                            return a(o), i = Nv, t
                        } catch (r) {
                            if (await
                                function(e, t, r) {
                                    return !ns(e, ["client_report"]) && (!n.shouldStore || n.shouldStore(e, t, r))
                                }(e, r, i)) return s ? await o.unshift(e) : await o.push(e), c(), t("Error sending. Event queued.", r), {};
                            throw r
                        }
                    }
                    return n.flushAtStartup && c(), {
                        send: u,
                        flush: e => (void 0 === e && (i = Nv, a(100)), r.flush(e))
                    }
                }
            }

            function $v(e) {
                return new Promise(((t, n) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
                }))
            }

            function Fv(e) {
                return $v(e.getAllKeys())
            }

            function jv(e) {
                let t;

                function n() {
                    return null == t && (t = function(e, t) {
                        const n = indexedDB.open(e);
                        n.onupgradeneeded = () => n.result.createObjectStore(t);
                        const r = $v(n);
                        return e => r.then((n => e(n.transaction(t, "readwrite").objectStore(t))))
                    }(e.dbName || "sentry-offline", e.storeName || "queue")), t
                }
                return {
                    push: async t => {
                        try {
                            const r = os(t);
                            await
                            function(e, t, n) {
                                return e((e => Fv(e).then((r => {
                                    if (!(r.length >= n)) return e.put(t, Math.max(...r, 0) + 1), $v(e.transaction)
                                }))))
                            }(n(), r, e.maxQueueSize || 30)
                        } catch {}
                    },
                    unshift: async t => {
                        try {
                            const r = os(t);
                            await
                            function(e, t, n) {
                                return e((e => Fv(e).then((r => {
                                    if (!(r.length >= n)) return e.put(t, Math.min(...r, 0) - 1), $v(e.transaction)
                                }))))
                            }(n(), r, e.maxQueueSize || 30)
                        } catch {}
                    },
                    shift: async () => {
                        try {
                            const e = await
                            function(e) {
                                return e((e => Fv(e).then((t => {
                                    const n = t[0];
                                    if (null != n) return $v(e.get(n)).then((t => (e.delete(n), $v(e.transaction).then((() => t)))))
                                }))))
                            }(n());
                            if (e) return ss(e)
                        } catch {}
                    }
                }
            }

            function Bv(e = Ql) {
                return function(e) {
                    return t => {
                        const n = e({ ...t,
                            createStore: jv
                        });
                        return Bo.addEventListener("online", (async e => {
                            await n.flush()
                        })), n
                    }
                }(Dv(e))
            }
            const Uv = 1e6,
                zv = "window" in s && s.window === s && "undefined" == typeof importScripts,
                qv = String(0),
                Wv = zv ? "main" : "worker",
                Hv = Bo.navigator;
            let Vv = "",
                Jv = "",
                Gv = "",
                Kv = Hv ? .userAgent || "",
                Yv = "";
            const Xv = Hv ? .language || Hv ? .languages ? .[0] || "";
            const Zv = Hv ? .userAgentData;
            var Qv;

            function eb(e) {
                return function(e) {
                    return !("thread_metadata" in e)
                }(e) ? function(e) {
                    let t, n = 0;
                    const r = {
                            samples: [],
                            stacks: [],
                            frames: [],
                            thread_metadata: {
                                [qv]: {
                                    name: Wv
                                }
                            }
                        },
                        o = e.samples[0];
                    if (!o) return r;
                    const s = o.timestamp,
                        i = be(),
                        a = "number" == typeof performance.timeOrigin ? performance.timeOrigin : i || 0,
                        c = a - (i || a);
                    return e.samples.forEach(((o, i) => {
                        if (void 0 === o.stackId) return void 0 === t && (t = n, r.stacks[t] = [], n++), void(r.samples[i] = {
                            elapsed_since_start_ns: ((o.timestamp + c - s) * Uv).toFixed(0),
                            stack_id: t,
                            thread_id: qv
                        });
                        let a = e.stacks[o.stackId];
                        const u = [];
                        for (; a;) {
                            u.push(a.frameId);
                            const t = e.frames[a.frameId];
                            t && void 0 === r.frames[a.frameId] && (r.frames[a.frameId] = {
                                function: t.name,
                                abs_path: "number" == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                lineno: t.line,
                                colno: t.column
                            }), a = void 0 === a.parentId ? void 0 : e.stacks[a.parentId]
                        }
                        const l = {
                            elapsed_since_start_ns: ((o.timestamp + c - s) * Uv).toFixed(0),
                            stack_id: n,
                            thread_id: qv
                        };
                        r.stacks[n] = u, r.samples[i] = l, n++
                    })), r
                }(e) : e
            }

            function tb(e, t, n, r) {
                if ("transaction" !== r.type) throw new TypeError("Profiling events may only be attached to transactions, this should never occur.");
                if (null == n) throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
                const o = function(e) {
                        const t = e.contexts ? .trace ? .trace_id;
                        return "string" == typeof t && 32 !== t.length && ed && D.log(`[Profiling] Invalid traceId: ${t} on profiled event`), "string" != typeof t ? "" : t
                    }(r),
                    s = eb(n),
                    i = t || ("number" == typeof r.start_timestamp ? 1e3 * r.start_timestamp : 1e3 * _e()),
                    a = "number" == typeof r.timestamp ? 1e3 * r.timestamp : 1e3 * _e();
                return {
                    event_id: e,
                    timestamp: new Date(i).toISOString(),
                    platform: "javascript",
                    version: "1",
                    release: r.release || "",
                    environment: r.environment || Wn,
                    runtime: {
                        name: "javascript",
                        version: Bo.navigator.userAgent
                    },
                    os: {
                        name: Vv,
                        version: Jv,
                        build_number: Kv
                    },
                    device: {
                        locale: Xv,
                        model: Yv,
                        manufacturer: Kv,
                        architecture: Gv,
                        is_emulator: !1
                    },
                    debug_meta: {
                        images: ob(n.resources)
                    },
                    profile: s,
                    transactions: [{
                        name: r.transaction || "",
                        id: r.event_id || le(),
                        trace_id: o,
                        active_thread_id: qv,
                        relative_start_ns: "0",
                        relative_end_ns: (1e6 * (a - i)).toFixed(0)
                    }]
                }
            }

            function nb(e, t, n) {
                if (null == e) throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`);
                const r = function(e) {
                        const t = [];
                        for (let n = 0; n < e.frames.length; n++) {
                            const r = e.frames[n];
                            r && (t[n] = {
                                function: r.name,
                                abs_path: "number" == typeof r.resourceId ? e.resources[r.resourceId] : void 0,
                                lineno: r.line,
                                colno: r.column
                            })
                        }
                        const n = [];
                        for (let t = 0; t < e.stacks.length; t++) {
                            const r = e.stacks[t];
                            if (!r) continue;
                            const o = [];
                            let s = r;
                            for (; s;) o.push(s.frameId), s = void 0 === s.parentId ? void 0 : e.stacks[s.parentId];
                            n[t] = o
                        }
                        const r = be(),
                            o = "number" == typeof performance.timeOrigin ? performance.timeOrigin : r || 0,
                            s = o - (r || o),
                            i = [];
                        for (let t = 0; t < e.samples.length; t++) {
                            const n = e.samples[t];
                            if (!n) continue;
                            const r = (o + (n.timestamp - s)) / 1e3;
                            i[t] = {
                                stack_id: n.stackId ? ? 0,
                                thread_id: qv,
                                timestamp: r
                            }
                        }
                        return {
                            frames: t,
                            stacks: n,
                            samples: i,
                            thread_metadata: {
                                [qv]: {
                                    name: Wv
                                }
                            }
                        }
                    }(e),
                    o = t.getOptions(),
                    s = t.getSdkMetadata ? .() ? .sdk;
                return {
                    chunk_id: le(),
                    client_sdk: {
                        name: s ? .name ? ? "sentry.javascript.browser",
                        version: s ? .version ? ? "0.0.0"
                    },
                    profiler_id: n || le(),
                    platform: "javascript",
                    version: "2",
                    release: o.release ? ? "",
                    environment: o.environment ? ? "production",
                    debug_meta: {
                        images: ob(e.resources)
                    },
                    profile: r
                }
            }

            function rb(e) {
                return "pageload" === Kr(e).op
            }

            function ob(e) {
                const t = Ve(),
                    n = t ? .getOptions(),
                    r = n ? .stackParser;
                return r ? function(e, t) {
                    const n = er(e);
                    if (!n) return [];
                    const r = [];
                    for (const e of t) {
                        const t = re(e);
                        t && n[t] && r.push({
                            type: "sourcemap",
                            code_file: e,
                            debug_id: n[t]
                        })
                    }
                    return r
                }(r, e) : []
            }

            function sb(e) {
                return "number" != typeof e && "boolean" != typeof e || "number" == typeof e && isNaN(e) ? (ed && D.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`), !1) : !0 === e || !1 === e || (!(e < 0 || e > 1) || (ed && D.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${e}.`), !1))
            }
            "object" == typeof(Qv = Zv) && null !== Qv && "getHighEntropyValues" in Qv && Zv.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then((e => {
                if (Vv = e.platform || "", Gv = e.architecture || "", Yv = e.model || "", Jv = e.platformVersion || "", e.fullVersionList ? .length) {
                    const t = e.fullVersionList[e.fullVersionList.length - 1];
                    Kv = `${t.brand} ${t.version}`
                }
            })).catch((e => {}));
            let ib = !1;

            function ab() {
                const e = Bo.Profiler;
                if ("function" != typeof e) return void(ed && D.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."));
                const t = Math.floor(3e3);
                try {
                    return new e({
                        sampleInterval: 10,
                        maxBufferSize: t
                    })
                } catch (e) {
                    ed && (D.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), D.log("[Profiling] Disabling profiling for current user session.")), ib = !0
                }
            }

            function cb(e) {
                if (ib) return ed && D.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1;
                if (!e.isRecording()) return ed && D.log("[Profiling] Discarding profile because root span was not sampled."), !1;
                const t = Ve(),
                    n = t ? .getOptions();
                if (!n) return ed && D.log("[Profiling] Profiling disabled, no options found."), !1;
                const r = n.profilesSampleRate;
                if (!sb(r)) return ed && D.warn("[Profiling] Discarding profile because of invalid sample rate."), !1;
                if (!r) return ed && D.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), !1;
                return !!(!0 === r || Math.random() < r) || (ed && D.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`), !1)
            }

            function ub(e) {
                return void 0 !== e.profilesSampleRate
            }

            function lb(e, t, n, r) {
                return function(e) {
                    return e.samples.length < 2 ? (ed && D.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!e.frames.length || (ed && D.log("[Profiling] Discarding profile because it contains no frames"), !1)
                }(n) ? tb(e, t, n, r) : null
            }
            const db = new Map;

            function pb(e) {
                const t = db.get(e);
                return t && db.delete(e), t
            }

            function fb(e) {
                let t;
                rb(e) && (t = 1e3 * _e());
                const n = ab();
                if (!n) return;
                ed && D.log(`[Profiling] started profiling span: ${Kr(e).description}`);
                const r = le();
                let o = null;
                async function s() {
                    if (e && n) {
                        if (!o) return n.stop().then((t => {
                            i && (Bo.clearTimeout(i), i = void 0), ed && D.log(`[Profiling] stopped profiling of span: ${Kr(e).description}`), t ? (o = t, function(e, t) {
                                if (db.set(e, t), db.size > 30) {
                                    const e = db.keys().next().value;
                                    void 0 !== e && db.delete(e)
                                }
                            }(r, t)) : ed && D.log(`[Profiling] profiler returned null profile for: ${Kr(e).description}`, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started")
                        })).catch((e => {
                            ed && D.log("[Profiling] error while stopping profiler:", e)
                        }));
                        ed && D.log("[Profiling] profile for:", Kr(e).description, "already exists, returning early")
                    }
                }
                Ue().setContext("profile", {
                    profile_id: r,
                    start_timestamp: t
                });
                let i = Bo.setTimeout((() => {
                    ed && D.log("[Profiling] max profile duration elapsed, stopping profiling for:", Kr(e).description), s()
                }), 3e4);
                const a = e.end.bind(e);
                e.end = function() {
                    return e ? (s().then((() => {
                        a()
                    }), (() => {
                        a()
                    })), e) : a()
                }
            }
            class hb {
                constructor() {
                    this._client = void 0, this._profiler = void 0, this._chunkTimer = void 0, this._profilerId = void 0, this._isRunning = !1, this._sessionSampled = !1, this._lifecycleMode = void 0, this._activeRootSpanIds = new Set, this._rootSpanTimeouts = new Map
                }
                initialize(e) {
                    const t = e.getOptions().profileLifecycle,
                        n = function(e) {
                            if (ib) return ed && D.log("[Profiling] Profiling has been disabled for the duration of the current user session as the JS Profiler could not be started."), !1;
                            if ("trace" !== e.profileLifecycle && "manual" !== e.profileLifecycle) return ed && D.warn("[Profiling] Session not sampled. Invalid `profileLifecycle` option."), !1;
                            const t = e.profileSessionSampleRate;
                            return sb(t) ? t ? Math.random() <= t : (ed && D.log("[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0"), !1) : (ed && D.warn("[Profiling] Discarding profile because of invalid profileSessionSampleRate."), !1)
                        }(e.getOptions());
                    ed && D.log(`[Profiling] Initializing profiler (lifecycle='${t}').`), n || ed && D.log("[Profiling] Session not sampled. Skipping lifecycle profiler initialization."), this._profilerId = le(), this._client = e, this._sessionSampled = n, this._lifecycleMode = t, "trace" === t && this._setupTraceLifecycleListeners(e)
                }
                start() {
                    "trace" !== this._lifecycleMode ? this._isRunning ? ed && D.warn("[Profiling] Profile session is already running, `uiProfiler.start()` is a no-op.") : this._sessionSampled ? this._beginProfiling() : ed && D.warn("[Profiling] Session is not sampled, `uiProfiler.start()` is a no-op.") : ed && D.warn('[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.start()` are ignored in trace mode.')
                }
                stop() {
                    "trace" !== this._lifecycleMode ? this._isRunning ? this._endProfiling() : ed && D.warn("[Profiling] Profiler is not running, `uiProfiler.stop()` is a no-op.") : ed && D.warn('[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.stop()` are ignored in trace mode.')
                }
                notifyRootSpanActive(e) {
                    if ("trace" !== this._lifecycleMode || !this._sessionSampled) return;
                    const t = e.spanContext().spanId;
                    if (!t || this._activeRootSpanIds.has(t)) return;
                    this._registerTraceRootSpan(t);
                    const n = this._activeRootSpanIds.size;
                    1 === n && (ed && D.log("[Profiling] Detected already active root span during setup. Active root spans now:", n), this._beginProfiling())
                }
                _beginProfiling() {
                    if (!this._isRunning) {
                        if (this._isRunning = !0, ed && D.log("[Profiling] Started profiling with profiler ID:", this._profilerId), qe().setContext("profile", {
                                profiler_id: this._profilerId
                            }), this._startProfilerInstance(), !this._profiler) return ed && D.log("[Profiling] Failed to start JS Profiler; stopping."), void this._resetProfilerInfo();
                        this._startPeriodicChunking()
                    }
                }
                _endProfiling() {
                    this._isRunning && (this._isRunning = !1, this._chunkTimer && (clearTimeout(this._chunkTimer), this._chunkTimer = void 0), this._clearAllRootSpanTimeouts(), this._collectCurrentChunk().catch((e => {
                        ed && D.error("[Profiling] Failed to collect current profile chunk on `stop()`:", e)
                    })), "manual" === this._lifecycleMode && qe().setContext("profile", {}))
                }
                _setupTraceLifecycleListeners(e) {
                    e.on("spanStart", (e => {
                        if (!this._sessionSampled) return void(ed && D.log("[Profiling] Span not profiled because of negative sampling decision for user session."));
                        if (e !== no(e)) return;
                        if (!e.isRecording()) return void(ed && D.log("[Profiling] Discarding profile because root span was not sampled."));
                        const t = e.spanContext().spanId;
                        if (!t || this._activeRootSpanIds.has(t)) return;
                        this._registerTraceRootSpan(t);
                        const n = this._activeRootSpanIds.size;
                        1 === n && (ed && D.log(`[Profiling] Root span ${t} started. Profiling active while there are active root spans (count=${n}).`), this._beginProfiling())
                    })), e.on("spanEnd", (e => {
                        if (!this._sessionSampled) return;
                        const t = e.spanContext().spanId;
                        if (!t || !this._activeRootSpanIds.has(t)) return;
                        this._activeRootSpanIds.delete(t);
                        const n = this._activeRootSpanIds.size;
                        ed && D.log(`[Profiling] Root span with ID ${t} ended. Will continue profiling for as long as there are active root spans (currently: ${n}).`), 0 === n && (this._collectCurrentChunk().catch((e => {
                            ed && D.error("[Profiling] Failed to collect current profile chunk on last `spanEnd`:", e)
                        })), this._endProfiling())
                    }))
                }
                _resetProfilerInfo() {
                    this._isRunning = !1, qe().setContext("profile", {})
                }
                _clearAllRootSpanTimeouts() {
                    this._rootSpanTimeouts.forEach((e => clearTimeout(e))), this._rootSpanTimeouts.clear()
                }
                _registerTraceRootSpan(e) {
                    this._activeRootSpanIds.add(e);
                    const t = setTimeout((() => this._onRootSpanTimeout(e)), 3e5);
                    this._rootSpanTimeouts.set(e, t)
                }
                _startProfilerInstance() {
                    if (!1 === this._profiler ? .stopped) return;
                    const e = ab();
                    e ? this._profiler = e : ed && D.log("[Profiling] Failed to start JS Profiler.")
                }
                _startPeriodicChunking() {
                    this._isRunning && (this._chunkTimer = setTimeout((() => {
                        if (this._collectCurrentChunk().catch((e => {
                                ed && D.error("[Profiling] Failed to collect current profile chunk during periodic chunking:", e)
                            })), this._isRunning) {
                            if (this._startProfilerInstance(), !this._profiler) return void this._resetProfilerInfo();
                            this._startPeriodicChunking()
                        }
                    }), 6e4))
                }
                _onRootSpanTimeout(e) {
                    this._rootSpanTimeouts.has(e) && (this._rootSpanTimeouts.delete(e), this._activeRootSpanIds.has(e) && (ed && D.log(`[Profiling] Reached 5-minute timeout for root span ${e}. You likely started a manual root span that never called \`.end()\`.`), this._activeRootSpanIds.delete(e), 0 === this._activeRootSpanIds.size && this._endProfiling()))
                }
                async _collectCurrentChunk() {
                    const e = this._profiler;
                    if (this._profiler = void 0, e) try {
                        const t = nb(await e.stop(), this._client, this._profilerId),
                            n = function(e) {
                                try {
                                    if (!e || "object" != typeof e) return {
                                        reason: "chunk is not an object"
                                    };
                                    const t = e => "string" == typeof e && /^[a-f0-9]{32}$/.test(e);
                                    if (!t(e.profiler_id)) return {
                                        reason: "missing or invalid profiler_id"
                                    };
                                    if (!t(e.chunk_id)) return {
                                        reason: "missing or invalid chunk_id"
                                    };
                                    if (!e.client_sdk) return {
                                        reason: "missing client_sdk metadata"
                                    };
                                    const n = e.profile;
                                    return n ? Array.isArray(n.frames) && n.frames.length ? Array.isArray(n.stacks) && n.stacks.length ? Array.isArray(n.samples) && n.samples.length ? {
                                        valid: !0
                                    } : {
                                        reason: "profile has no samples"
                                    } : {
                                        reason: "profile has no stacks"
                                    } : {
                                        reason: "profile has no frames"
                                    } : {
                                        reason: "missing profile data"
                                    }
                                } catch (e) {
                                    return {
                                        reason: `unknown validation error: ${e}`
                                    }
                                }
                            }(t);
                        if ("reason" in n) return void(ed && D.log("[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):", n.reason));
                        this._sendProfileChunk(t), ed && D.log("[Profiling] Collected browser profile chunk.")
                    } catch (e) {
                        ed && D.log("[Profiling] Error while stopping JS Profiler for chunk:", e)
                    }
                }
                _sendProfileChunk(e) {
                    const t = this._client,
                        n = ls(t.getSdkMetadata ? .()),
                        r = t.getDsn(),
                        o = t.getOptions().tunnel,
                        s = Qo({
                            event_id: le(),
                            sent_at: (new Date).toISOString(),
                            ...n && {
                                sdk: n
                            },
                            ...!!o && r && {
                                dsn: xr(r)
                            }
                        }, [
                            [{
                                type: "profile_chunk",
                                platform: "javascript"
                            }, e]
                        ]);
                    t.sendEnvelope(s).then(null, (e => {
                        ed && D.error("Error while sending profile chunk envelope:", e)
                    }))
                }
            }
            const mb = () => ({
                name: "BrowserProfiling",
                setup(e) {
                    const t = e.getOptions(),
                        n = new hb;
                    if (ub(t) || t.profileLifecycle || (t.profileLifecycle = "manual"), ub(t) && !t.profilesSampleRate) return void(ed && D.log("[Profiling] Profiling disabled, no profiling options found."));
                    const r = ro(),
                        o = r && no(r);
                    if (ub(t) && void 0 !== t.profileSessionSampleRate && ed && D.warn("[Profiling] Both legacy profiling (`profilesSampleRate`) and UI profiling settings are defined. `profileSessionSampleRate` has no effect when legacy profiling is enabled."), ub(t)) o && rb(o) && cb(o) && fb(o), e.on("spanStart", (e => {
                        e === no(e) && cb(e) && fb(e)
                    })), e.on("beforeEnvelope", (e => {
                        if (!db.size) return;
                        const t = function(e) {
                            const t = [];
                            return ts(e, ((e, n) => {
                                if ("transaction" === n)
                                    for (let n = 1; n < e.length; n++) {
                                        const r = e[n];
                                        r ? .contexts ? .profile ? .profile_id && t.push(e[n])
                                    }
                            })), t
                        }(e);
                        if (!t.length) return;
                        const n = [];
                        for (const e of t) {
                            const t = e ? .contexts,
                                r = t ? .profile ? .profile_id,
                                o = t ? .profile ? .start_timestamp;
                            if ("string" != typeof r) {
                                ed && D.log("[Profiling] cannot find profile for a span without a profile context");
                                continue
                            }
                            if (!r) {
                                ed && D.log("[Profiling] cannot find profile for a span without a profile context");
                                continue
                            }
                            t ? .profile && delete t.profile;
                            const s = pb(r);
                            if (!s) {
                                ed && D.log(`[Profiling] Could not retrieve profile for span: ${r}`);
                                continue
                            }
                            const i = lb(r, o, s, e);
                            i && n.push(i)
                        }! function(e, t) {
                            if (!t.length) return e;
                            for (const n of t) e[1].push([{
                                type: "profile"
                            }, n])
                        }(e, n)
                    }));
                    else {
                        const r = t.profileLifecycle;
                        if (e.on("startUIProfiler", (() => n.start())), e.on("stopUIProfiler", (() => n.stop())), "manual" === r) n.initialize(e);
                        else if ("trace" === r) {
                            if (!Rr(t)) return void(ed && D.warn("[Profiling] `profileLifecycle` is 'trace' but tracing is disabled. Set a `tracesSampleRate` or `tracesSampler` to enable span tracing."));
                            n.initialize(e), o && n.notifyRootSpanActive(o), Bo.setTimeout((() => {
                                const e = ro(),
                                    t = e && no(e);
                                t && n.notifyRootSpanActive(t)
                            }), 0)
                        }
                    }
                },
                processEvent: e => function(e) {
                    return e ? .contexts ? .profile && e.contexts ? (e.contexts.trace ? .trace_id && (e.contexts.trace = { ...e.contexts.trace,
                        data: { ...e.contexts.trace.data ? ? {},
                            "thread.id" : qv,
                            "thread.name" : Wv
                        }
                    }), e.spans ? .forEach((e => {
                        e.data = { ...e.data || {},
                            "thread.id": qv,
                            "thread.name": Wv
                        }
                    })), e) : e
                }(e)
            });
            const gb = (e = {}) => {
                const t = e.sidecarUrl || "http://localhost:8969/stream";
                return {
                    name: "SpotlightBrowser",
                    setup: () => {
                        ed && D.log("Using Sidecar URL", t)
                    },
                    processEvent: e => function(e) {
                        return Boolean("transaction" === e.type && e.spans && e.contexts ? .trace && "ui.action.click" === e.contexts.trace.op && e.spans.some((({
                            description: e
                        }) => e ? .includes("#sentry-spotlight"))))
                    }(e) ? null : e,
                    afterAllSetup: e => {
                        ! function(e, t) {
                            const n = Xl("fetch");
                            let r = 0;
                            e.on("beforeEnvelope", (e => {
                                r > 3 ? D.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", r) : n(t, {
                                    method: "POST",
                                    body: os(e),
                                    headers: {
                                        "Content-Type": "application/x-sentry-envelope"
                                    },
                                    mode: "cors"
                                }).then((e => {
                                    e.status >= 200 && e.status < 400 && (r = 0)
                                }), (e => {
                                    r++, D.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", e)
                                }))
                            }))
                        }(e, t)
                    }
                }
            };
            const yb = () => ({
                name: "LaunchDarkly",
                processEvent: (e, t, n) => ac(e)
            });

            function _b() {
                return {
                    name: "sentry-flag-auditor",
                    type: "flag-used",
                    synchronous: !0,
                    method: (e, t, n) => {
                        cc(e, t.value), uc(e, t.value)
                    }
                }
            }
            const vb = () => ({
                name: "OpenFeature",
                processEvent: (e, t, n) => ac(e)
            });
            class bb {
                after(e, t) {
                    cc(t.flagKey, t.value), uc(t.flagKey, t.value)
                }
                error(e, t, n) {
                    cc(e.flagKey, e.defaultValue), uc(e.flagKey, e.defaultValue)
                }
            }
            const Sb = ({
                featureFlagClientClass: e
            }) => ({
                name: "Unleash",
                setupOnce() {
                    $(e.prototype, "isEnabled", kb)
                },
                processEvent: (e, t, n) => ac(e)
            });

            function kb(e) {
                return function(...t) {
                    const n = t[0],
                        r = e.apply(this, t);
                    return "string" == typeof n && "boolean" == typeof r ? (cc(n, r), uc(n, r)) : ed && D.error(`[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ${n} (${typeof n}), result: ${r} (${typeof r})`), r
                }
            }
            const wb = ({
                growthbookClass: e
            }) => ({
                name: "GrowthBook",
                setupOnce() {
                    const t = e.prototype;
                    "function" == typeof t.isOn && $(t, "isOn", xb), "function" == typeof t.getFeatureValue && $(t, "getFeatureValue", xb)
                },
                processEvent: (e, t, n) => ac(e)
            });

            function xb(e) {
                return function(...t) {
                    const n = t[0],
                        r = e.apply(this, t);
                    return "string" == typeof n && "boolean" == typeof r && (cc(n, r), uc(n, r)), r
                }
            }
            const Eb = ({
                    growthbookClass: e
                }) => wb({
                    growthbookClass: e
                }),
                Tb = ({
                    featureFlagClient: e
                }) => ({
                    name: "Statsig",
                    setup(t) {
                        e.on("gate_evaluation", (e => {
                            cc(e.gate.name, e.gate.value), uc(e.gate.name, e.gate.value)
                        }))
                    },
                    processEvent: (e, t, n) => ac(e)
                });
            async function Cb() {
                const e = Ve();
                if (!e) return "no-client-active";
                if (!e.getDsn()) return "no-dsn-configured";
                const t = e.getOptions().tunnel || "https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7";
                try {
                    await ii((() => fetch(t, {
                        body: "{}",
                        method: "POST",
                        mode: "cors",
                        credentials: "omit"
                    })))
                } catch {
                    return "sentry-unreachable"
                }
            }
            const Ib = ({
                worker: e
            }) => ({
                name: "WebWorker",
                setupOnce: () => {
                    (Array.isArray(e) ? e : [e]).forEach((e => Rb(e)))
                },
                addWorker: e => Rb(e)
            });

            function Rb(e) {
                e.addEventListener("message", (e => {
                    if (function(e) {
                            if (!v(e) || !0 !== e._sentryMessage) return !1;
                            const t = "_sentryDebugIds" in e,
                                n = "_sentryModuleMetadata" in e,
                                r = "_sentryWorkerError" in e,
                                o = "_sentryWasmImages" in e;
                            if (!(t || n || r || o)) return !1;
                            if (t && !v(e._sentryDebugIds) && void 0 !== e._sentryDebugIds) return !1;
                            if (n && !v(e._sentryModuleMetadata) && void 0 !== e._sentryModuleMetadata) return !1;
                            if (r && !v(e._sentryWorkerError)) return !1;
                            if (o && (!Array.isArray(e._sentryWasmImages) || !e._sentryWasmImages.every((e => v(e) && "string" == typeof e.code_file)))) return !1;
                            return !0
                        }(e.data)) {
                        if (e.stopImmediatePropagation(), e.data._sentryDebugIds && (ed && D.log("Sentry debugId web worker message received", e.data), Bo._sentryDebugIds = { ...e.data._sentryDebugIds,
                                ...Bo._sentryDebugIds
                            }), e.data._sentryModuleMetadata && (ed && D.log("Sentry module metadata web worker message received", e.data), Bo._sentryModuleMetadata = { ...e.data._sentryModuleMetadata,
                                ...Bo._sentryModuleMetadata
                            }), e.data._sentryWasmImages) {
                            ed && D.log("Sentry WASM images web worker message received", e.data);
                            const t = Bo._sentryWasmImages || [],
                                n = e.data._sentryWasmImages.filter((e => v(e) && "string" == typeof e.code_file && !t.some((t => t.code_file === e.code_file))));
                            Bo._sentryWasmImages = [...t, ...n]
                        }
                        e.data._sentryWorkerError && (ed && D.log("Sentry worker rejection message received", e.data._sentryWorkerError), function(e) {
                            const t = Ve();
                            if (!t) return;
                            const n = t.getOptions().stackParser,
                                r = t.getOptions().attachStacktrace,
                                o = e.reason,
                                s = _(o) ? op(o) : Bl(n, o, void 0, r, !0);
                            s.level = "error", e.filename && (s.contexts = { ...s.contexts,
                                worker: {
                                    filename: e.filename
                                }
                            });
                            ko(s, {
                                originalException: o,
                                mechanism: {
                                    handled: !1,
                                    type: "auto.browser.web_worker.onunhandledrejection"
                                }
                            }), ed && D.log("Captured worker unhandled rejection", o)
                        }(e.data._sentryWorkerError))
                    }
                }))
            }

            function Ab({
                self: e
            }) {
                e.postMessage({
                    _sentryMessage: !0,
                    _sentryDebugIds: e._sentryDebugIds ? ? void 0,
                    _sentryModuleMetadata: e._sentryModuleMetadata ? ? void 0
                }), e.addEventListener("unhandledrejection", (t => {
                    const n = {
                        reason: rp(t),
                        filename: e.location ? .href
                    };
                    e.postMessage({
                        _sentryMessage: !0,
                        _sentryWorkerError: n
                    }), ed && D.log("[Sentry Worker] Forwarding unhandled rejection to parent", n)
                })), ed && D.log("[Sentry Worker] Registered worker with unhandled rejection handling")
            }
            var Mb = n(82017);

            function Ob(e) {
                const t = { ...e
                };
                return Cl(t, "react"), wo("react", {
                    version: Mb.version
                }), yp(t)
            }

            function Pb(e, {
                componentStack: t
            }, n) {
                if (function(e) {
                        const t = e.match(/^([^.]+)/);
                        return null !== t && parseInt(t[0]) >= 17
                    }(Mb.version) && p(e) && t) {
                    const n = new Error(e.message);
                    n.name = `React ErrorBoundary ${e.name}`, n.stack = t,
                        function(e, t) {
                            const n = new WeakSet;
                            ! function e(t, r) {
                                if (!n.has(t)) return t.cause ? (n.add(t), e(t.cause, r)) : void(t.cause = r)
                            }(e, t)
                        }(e, n)
                }
                return We((r => (r.setContext("react", {
                    componentStack: t
                }), bo(e, n))))
            }

            function Lb(e) {
                return (t, n) => {
                    const r = !!e,
                        o = Pb(t, n, {
                            mechanism: {
                                handled: r,
                                type: "auto.function.react.error_handler"
                            }
                        });
                    r && e(t, n, o)
                }
            }
            const Nb = "ui.react.render",
                Db = "ui.react.mount",
                $b = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                Fb = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                jb = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                Bb = Symbol.for("react.forward_ref"),
                Ub = Symbol.for("react.memo");
            const zb = {};

            function qb(e) {
                if (function(e) {
                        return "object" == typeof e && null !== e && e.$$typeof === Ub
                    }(e)) return jb;
                const t = e.$$typeof;
                return t && zb[t] || $b
            }
            zb[Bb] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, zb[Ub] = jb;
            const Wb = Object.defineProperty.bind(Object),
                Hb = Object.getOwnPropertyNames.bind(Object),
                Vb = Object.getOwnPropertySymbols ? .bind(Object),
                Jb = Object.getOwnPropertyDescriptor.bind(Object),
                Gb = Object.getPrototypeOf.bind(Object),
                Kb = Object.prototype;

            function Yb(e, t, n) {
                if ("string" != typeof t) {
                    if (Kb) {
                        const n = Gb(t);
                        n && n !== Kb && Yb(e, n)
                    }
                    let n = Hb(t);
                    Vb && (n = n.concat(Vb(t)));
                    const r = qb(e),
                        o = qb(t);
                    for (const s of n)
                        if (!(Fb[s] || o ? .[s] || r ? .[s] || Jb(e, s))) {
                            const n = Jb(t, s);
                            if (n) try {
                                Wb(e, s, n)
                            } catch (e) {}
                        }
                }
                return e
            }
            class Xb extends Mb.Component {
                constructor(e) {
                    super(e);
                    const {
                        name: t,
                        disabled: n = !1
                    } = this.props;
                    n || (this._mountSpan = ri({
                        name: `<${t}>`,
                        onlyIfParent: !0,
                        op: Db,
                        attributes: {
                            [cr]: "auto.ui.react.profiler",
                            "ui.component_name": t
                        }
                    }))
                }
                componentDidMount() {
                    this._mountSpan && this._mountSpan.end()
                }
                shouldComponentUpdate({
                    updateProps: e,
                    includeUpdates: t = !0
                }) {
                    if (t && this._mountSpan && e !== this.props.updateProps) {
                        const t = Object.keys(e).filter((t => e[t] !== this.props.updateProps[t]));
                        if (t.length > 0) {
                            const e = _e();
                            this._updateSpan = si(this._mountSpan, (() => ri({
                                name: `<${this.props.name}>`,
                                onlyIfParent: !0,
                                op: "ui.react.update",
                                startTime: e,
                                attributes: {
                                    [cr]: "auto.ui.react.profiler",
                                    "ui.component_name": this.props.name,
                                    "ui.react.changed_props": t
                                }
                            })))
                        }
                    }
                    return !0
                }
                componentDidUpdate() {
                    this._updateSpan && (this._updateSpan.end(), this._updateSpan = void 0)
                }
                componentWillUnmount() {
                    const e = _e(),
                        {
                            name: t,
                            includeRender: n = !0
                        } = this.props;
                    if (this._mountSpan && n) {
                        const n = Kr(this._mountSpan).timestamp;
                        si(this._mountSpan, (() => {
                            const r = ri({
                                onlyIfParent: !0,
                                name: `<${t}>`,
                                op: Nb,
                                startTime: n,
                                attributes: {
                                    [cr]: "auto.ui.react.profiler",
                                    "ui.component_name": t
                                }
                            });
                            r && r.end(e)
                        }))
                    }
                }
                render() {
                    return this.props.children
                }
            }

            function Zb(e, t) {
                const n = t ? .name || e.displayName || e.name || "unknown",
                    r = r => Mb.createElement(Xb, { ...t,
                        name: n,
                        updateProps: r
                    }, Mb.createElement(e, { ...r
                    }));
                return r.displayName = `profiler(${n})`, Yb(r, e), r
            }

            function Qb(e, t = {
                disabled: !1,
                hasRenderSpan: !0
            }) {
                const [n] = Mb.useState((() => {
                    if (!t ? .disabled) return ri({
                        name: `<${e}>`,
                        onlyIfParent: !0,
                        op: Db,
                        attributes: {
                            [cr]: "auto.ui.react.profiler",
                            "ui.component_name": e
                        }
                    })
                }));
                Mb.useEffect((() => (n && n.end(), () => {
                    if (n && t.hasRenderSpan) {
                        const t = Kr(n).timestamp,
                            r = _e(),
                            o = ri({
                                name: `<${e}>`,
                                onlyIfParent: !0,
                                op: Nb,
                                startTime: t,
                                attributes: {
                                    [cr]: "auto.ui.react.profiler",
                                    "ui.component_name": e
                                }
                            });
                        o && o.end(r)
                    }
                })), [])
            }
            Object.assign(Xb, {
                defaultProps: {
                    disabled: !1,
                    includeRender: !0,
                    includeUpdates: !0
                }
            });
            const eS = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
                tS = {
                    componentStack: null,
                    error: null,
                    eventId: null
                };
            class nS extends Mb.Component {
                constructor(e) {
                    super(e), this.state = tS, this._openFallbackReportDialog = !0;
                    const t = Ve();
                    t && e.showDialog && (this._openFallbackReportDialog = !1, this._cleanupHook = t.on("afterSendEvent", (t => {
                        !t.type && this._lastEventId && t.event_id === this._lastEventId && bp({ ...e.dialogOptions,
                            eventId: this._lastEventId
                        })
                    })))
                }
                componentDidCatch(e, t) {
                    const {
                        componentStack: n
                    } = t, {
                        beforeCapture: r,
                        onError: o,
                        showDialog: s,
                        dialogOptions: i
                    } = this.props;
                    We((a => {
                        r && r(a, e, n);
                        const c = null != this.props.handled ? this.props.handled : !!this.props.fallback,
                            u = Pb(e, t, {
                                mechanism: {
                                    handled: c,
                                    type: "auto.function.react.error_boundary"
                                }
                            });
                        o && o(e, n, u), s && (this._lastEventId = u, this._openFallbackReportDialog && bp({ ...i,
                            eventId: u
                        })), this.setState({
                            error: e,
                            componentStack: n,
                            eventId: u
                        })
                    }))
                }
                componentDidMount() {
                    const {
                        onMount: e
                    } = this.props;
                    e && e()
                }
                componentWillUnmount() {
                    const {
                        error: e,
                        componentStack: t,
                        eventId: n
                    } = this.state, {
                        onUnmount: r
                    } = this.props;
                    r && (this.state === tS ? r(null, null, null) : r(e, t, n)), this._cleanupHook && (this._cleanupHook(), this._cleanupHook = void 0)
                }
                resetErrorBoundary() {
                    const {
                        onReset: e
                    } = this.props, {
                        error: t,
                        componentStack: n,
                        eventId: r
                    } = this.state;
                    e && e(t, n, r), this.setState(tS)
                }
                render() {
                    const {
                        fallback: e,
                        children: t
                    } = this.props, n = this.state;
                    if (null === n.componentStack) return "function" == typeof t ? t() : t;
                    const r = "function" == typeof e ? Mb.createElement(e, {
                        error: n.error,
                        componentStack: n.componentStack,
                        resetError: () => this.resetErrorBoundary(),
                        eventId: n.eventId
                    }) : e;
                    return Mb.isValidElement(r) ? r : (e && eS && D.warn("fallback did not produce a valid ReactElement"), null)
                }
            }

            function rS(e, t) {
                const n = e.displayName || e.name || "unknown",
                    r = Mb.memo((n => Mb.createElement(nS, { ...t
                    }, Mb.createElement(e, { ...n
                    }))));
                return r.displayName = `errorBoundary(${n})`, Yb(r, e), r
            }
            const oS = {
                attachReduxState: !0,
                actionTransformer: e => e,
                stateTransformer: e => e || null
            };

            function sS(e) {
                const t = { ...oS,
                    ...e
                };
                return e => (n, r) => {
                    function o(e) {
                        return (n, r) => {
                            const o = e(n, r),
                                s = Ue(),
                                i = t.actionTransformer(r);
                            null != i && gs({
                                category: "redux.action",
                                data: i,
                                type: "info"
                            });
                            const a = t.stateTransformer(o);
                            if (null != a) {
                                const e = Ve(),
                                    t = e ? .getOptions(),
                                    n = {
                                        state: {
                                            type: "redux",
                                            value: a
                                        }
                                    };
                                F(n, "__sentry_override_normalization_depth__", 3 + (t ? .normalizeDepth || 3)), s.setContext("state", n)
                            } else s.setContext("state", null);
                            const {
                                configureScopeWithState: c
                            } = t;
                            return "function" == typeof c && c(s, o), o
                        }
                    }
                    t.attachReduxState && qe().addEventProcessor(((e, t) => {
                        try {
                            void 0 === e.type && "redux" === e.contexts.state.state.type && (t.attachments = [...t.attachments || [], {
                                filename: "redux_state.json",
                                data: JSON.stringify(e.contexts.state.state.value)
                            }])
                        } catch {}
                        return e
                    }));
                    const s = e(o(n), r);
                    return s.replaceReducer = new Proxy(s.replaceReducer, {
                        apply: function(e, t, n) {
                            e.apply(t, [o(n[0])])
                        }
                    }), s
                }
            }

            function iS(e) {
                const t = wv({ ...e,
                        instrumentPageLoad: !1,
                        instrumentNavigation: !1
                    }),
                    {
                        history: n,
                        routes: r,
                        match: o,
                        instrumentPageLoad: s = !0,
                        instrumentNavigation: i = !0
                    } = e;
                return { ...t,
                    afterAllSetup(e) {
                        t.afterAllSetup(e), s && Bo.location && aS(r, Bo.location, o, ((t, n = "url") => {
                            xv(e, {
                                name: t,
                                attributes: {
                                    [ar]: "pageload",
                                    [cr]: "auto.pageload.react.reactrouter_v3",
                                    [or]: n
                                }
                            })
                        })), i && n.listen && n.listen((t => {
                            "PUSH" !== t.action && "POP" !== t.action || aS(r, t, o, ((t, n = "url") => {
                                Ev(e, {
                                    name: t,
                                    attributes: {
                                        [ar]: "navigation",
                                        [cr]: "auto.navigation.react.reactrouter_v3",
                                        [or]: n
                                    }
                                })
                            }))
                        }))
                    }
                }
            }

            function aS(e, t, n, r) {
                let o = t.pathname;
                n({
                    location: t,
                    routes: e
                }, ((e, t, n) => {
                    if (e || !n) return r(o);
                    const s = function(e) {
                        if (!Array.isArray(e) || 0 === e.length) return "";
                        const t = e.filter((e => !!e.path));
                        let n = -1;
                        for (let e = t.length - 1; e >= 0; e--) {
                            const r = t[e];
                            if (r.path ? .startsWith("/")) {
                                n = e;
                                break
                            }
                        }
                        return t.slice(n).reduce(((e, {
                            path: t
                        }) => `${e}${"/"===e||""===e?t:`/${t}`}`), "")
                    }(n.routes || []);
                    return 0 === s.length || "/*" === s ? r(o) : (o = s, r(o, "route"))
                }))
            }

            function cS(e, t = {}) {
                const n = e,
                    r = wv({ ...t,
                        instrumentNavigation: !1,
                        instrumentPageLoad: !1
                    }),
                    {
                        instrumentPageLoad: o = !0,
                        instrumentNavigation: s = !0
                    } = t;
                return { ...r,
                    afterAllSetup(e) {
                        r.afterAllSetup(e);
                        const t = Bo.location;
                        if (o && t) {
                            const r = n.matchRoutes(t.pathname, n.options.parseSearch(t.search), {
                                    preload: !1,
                                    throwOnError: !1
                                }),
                                o = r[r.length - 1],
                                s = "__root__" !== o ? .routeId ? o : void 0;
                            xv(e, {
                                name: s ? s.routeId : t.pathname,
                                attributes: {
                                    [ar]: "pageload",
                                    [cr]: "auto.pageload.react.tanstack_router",
                                    [or]: s ? "route" : "url",
                                    ...uS(s)
                                }
                            })
                        }
                        s && n.subscribe("onBeforeNavigate", (t => {
                            if (!t.fromLocation || t.toLocation.state === t.fromLocation.state) return;
                            const r = n.matchRoutes(t.toLocation.pathname, t.toLocation.search, {
                                    preload: !1,
                                    throwOnError: !1
                                }),
                                o = r[r.length - 1],
                                s = "__root__" !== o ? .routeId ? o : void 0,
                                i = Bo.location,
                                a = Ev(e, {
                                    name: s ? s.routeId : i.pathname,
                                    attributes: {
                                        [ar]: "navigation",
                                        [cr]: "auto.navigation.react.tanstack_router",
                                        [or]: s ? "route" : "url"
                                    }
                                }),
                                c = n.subscribe("onResolved", (e => {
                                    if (c(), a) {
                                        const t = n.matchRoutes(e.toLocation.pathname, e.toLocation.search, {
                                                preload: !1,
                                                throwOnError: !1
                                            }),
                                            r = t[t.length - 1],
                                            o = "__root__" !== r ? .routeId ? r : void 0;
                                        o && (a.updateName(o.routeId), a.setAttribute(or, "route"), a.setAttributes(uS(o)))
                                    }
                                }))
                        }))
                    }
                }
            }

            function uS(e) {
                if (!e) return {};
                const t = {};
                return Object.entries(e.params).forEach((([e, n]) => {
                    t[`url.path.params.${e}`] = n, t[`url.path.parameter.${e}`] = n, t[`params.${e}`] = n
                })), t
            }

            function lS(e) {
                const t = wv({ ...e,
                        instrumentPageLoad: !1,
                        instrumentNavigation: !1
                    }),
                    {
                        history: n,
                        routes: r,
                        matchPath: o,
                        instrumentPageLoad: s = !0,
                        instrumentNavigation: i = !0
                    } = e;
                return { ...t,
                    afterAllSetup(e) {
                        t.afterAllSetup(e), pS(e, s, i, n, "reactrouter_v4", r, o)
                    }
                }
            }

            function dS(e) {
                const t = wv({ ...e,
                        instrumentPageLoad: !1,
                        instrumentNavigation: !1
                    }),
                    {
                        history: n,
                        routes: r,
                        matchPath: o,
                        instrumentPageLoad: s = !0,
                        instrumentNavigation: i = !0
                    } = e;
                return { ...t,
                    afterAllSetup(e) {
                        t.afterAllSetup(e), pS(e, s, i, n, "reactrouter_v5", r, o)
                    }
                }
            }

            function pS(e, t, n, r, o, s = [], i) {
                function a(e) {
                    if (0 === s.length || !i) return [e, "url"];
                    const t = fS(s, e, i);
                    for (const e of t)
                        if (e.match.isExact) return [e.match.path, "route"];
                    return [e, "url"]
                }
                if (t) {
                    const t = r.location ? r.location.pathname : Bo.location ? Bo.location.pathname : void 0;
                    if (t) {
                        const [n, r] = a(t);
                        xv(e, {
                            name: n,
                            attributes: {
                                [ar]: "pageload",
                                [cr]: `auto.pageload.react.${o}`,
                                [or]: r
                            }
                        })
                    }
                }
                n && r.listen && r.listen(((t, n) => {
                    if (n && ("PUSH" === n || "POP" === n)) {
                        const [n, r] = a(t.pathname);
                        Ev(e, {
                            name: n,
                            attributes: {
                                [ar]: "navigation",
                                [cr]: `auto.navigation.react.${o}`,
                                [or]: r
                            }
                        })
                    }
                }))
            }

            function fS(e, t, n, r = []) {
                return e.some((e => {
                    const o = e.path ? n(t, e) : r.length ? r[r.length - 1].match : function(e) {
                        return {
                            path: "/",
                            url: "/",
                            params: {},
                            isExact: "/" === e
                        }
                    }(t);
                    return o && (r.push({
                        route: e,
                        match: o
                    }), e.routes && fS(e.routes, t, n, r)), !!o
                })), r
            }

            function hS(e) {
                const t = e.displayName || e.name,
                    n = t => {
                        if (t ? .computedMatch ? .isExact) {
                            const e = t.computedMatch.path,
                                n = function() {
                                    const e = ro(),
                                        t = e && no(e);
                                    if (!t) return;
                                    const n = Kr(t).op;
                                    return "navigation" === n || "pageload" === n ? t : void 0
                                }();
                            Ue().setTransactionName(e), n && (n.updateName(e), n.setAttribute(or, "route"))
                        }
                        return Mb.createElement(e, { ...t
                        })
                    };
                return n.displayName = `sentryRoute(${t})`, Yb(n, e), n
            }

            function mS(e, t) {
                if (!t || "/" === t) return e;
                if (!e.toLowerCase().startsWith(t.toLowerCase())) return e;
                const n = t.endsWith("/") ? t.length - 1 : t.length,
                    r = e.charAt(n);
                return r && "/" !== r ? e : e.slice(n) || "/"
            }
            const gS = new WeakMap;

            function yS(e, t, n) {
                if (!e || !t ? .length) return null;
                const r = n ? mS(e, n) : e;
                let o = gS.get(t);
                o || (o = function(e) {
                    return [...e].sort(((e, t) => {
                        const n = kS(e);
                        return kS(t) - n
                    }))
                }(t), gS.set(t, o), eS && D.log("[React Router] Sorted route manifest by specificity:", o.length, "patterns"));
                for (const e of o)
                    if (_S(r, e)) return eS && D.log("[React Router] Matched pathname", r, "to pattern", e), e;
                return eS && D.log("[React Router] No manifest match found for pathname:", r), null
            }

            function _S(e, t) {
                if ("/" === t) return "/" === e || "" === e;
                const n = bS(e),
                    r = bS(t);
                if (r.length > 0 && "*" === r[r.length - 1]) {
                    const e = r.slice(0, -1);
                    if (n.length < e.length) return !1;
                    for (const [t, r] of e.entries())
                        if (!vS(n[t], r)) return !1;
                    return !0
                }
                if (n.length !== r.length) return !1;
                for (const [e, t] of r.entries())
                    if (!vS(n[e], t)) return !1;
                return !0
            }

            function vS(e, t) {
                return void 0 !== e && void 0 !== t && (!!SS.test(t) || e === t)
            }

            function bS(e) {
                return e.split("/").filter(Boolean)
            }
            const SS = /^:[\w-]+$/;

            function kS(e) {
                const t = e.split("/");
                let n = t.length;
                t.includes("*") && (n += -2);
                for (const e of t) "*" !== e && (SS.test(e) ? n += 3 : n += "" === e ? 1 : 10);
                return n
            }
            let wS, xS = !1;
            const ES = [];

            function TS() {
                const e = ES.length;
                return e > 0 ? ES[e - 1] ? ? null : null
            }

            function CS(e) {
                return "*" === (t = e.route.path || "")[t.length - 1] ? t.slice(0, -1) : t;
                var t
            }

            function IS(e) {
                return e.params["*"] || ""
            }

            function RS(e) {
                return "/" === e[e.length - 1] ? e.slice(0, -1) : e
            }

            function AS(e) {
                return e.endsWith("*")
            }

            function MS(e) {
                return e.includes("/*") || e.endsWith("*")
            }

            function OS(e, t) {
                return AS(e) && !!t.route.children ? .length || !1
            }

            function PS(e, t, n) {
                const r = e && e.length > 0 ? e : xS ? mS(t, n) : t;
                let o = "/*" === r.slice(-2) ? r.slice(0, -2) : r;
                return o.length > 1 && "/" === o[o.length - 1] && (o = o.slice(0, -1)), [o, "route"]
            }

            function LS(e) {
                return e.split(/\\?\//).filter((e => e.length > 0 && "," !== e)).length
            }

            function NS(e) {
                return "/" === e[0] ? e : `/${e}`
            }

            function DS(e, t) {
                const n = wS(e, t);
                if (!n || 0 === n.length) return "";
                for (const r of n)
                    if (r.route.path && "*" !== r.route.path) {
                        const n = CS(r),
                            o = mS(t.pathname, NS(r.pathnameBase));
                        return t.pathname === o ? RS(o) : RS(RS(n || "") + NS(DS(e.filter((e => e !== r.route)), {
                            pathname: o
                        })))
                    }
                return ""
            }

            function $S(e, t) {
                return xS ? mS(e.pathname, t) : e.pathname || ""
            }

            function FS(e, t, n, r, o = "", s, i) {
                if (i && s && s.length > 0) {
                    const t = yS(e.pathname, s, o);
                    if (t) return [(xS ? "" : o) + t, "route"]
                }
                let a, c = "url";
                const u = function(e, t) {
                    const n = wS(t, e);
                    if (n)
                        for (const e of n)
                            if (!(r = e.route).children && r.element && r.path ? .endsWith("/*") && IS(e)) return !0;
                    var r;
                    return !1
                }(e, n);
                return u && (a = NS(DS(n, e)), c = "route"), u && a || ([a, c] = function(e, t, n, r = "") {
                    if (!e || 0 === e.length) return [xS ? mS(t.pathname, r) : t.pathname, "url"];
                    if (!n) return [$S(t, r), "url"];
                    let o = "";
                    for (const e of n) {
                        const n = e.route;
                        if (!n) continue;
                        if (n.index) return PS(o, e.pathname, r);
                        const s = n.path;
                        if (!s || OS(s, e)) continue;
                        const i = "/" === s[0] || "/" === o[o.length - 1] ? s : `/${s}`;
                        if (o = RS(o) + NS(i), RS(t.pathname) === RS(r + e.pathname)) return LS(o) === LS(e.pathname) || AS(o) ? (OS(o, e) && (o = o.slice(0, -1)), [(xS ? "" : r) + o, "route"]) : [(xS ? "" : r) + i, "route"]
                    }
                    return [$S(t, r), "url"]
                }(t, e, r, o)), [a || e.pathname, c]
            }

            function jS() {
                const e = ro(),
                    t = e ? no(e) : void 0;
                if (!t) return;
                const n = Kr(t).op;
                return "navigation" === n || "pageload" === n ? t : void 0
            }

            function BS(e, t, n, r) {
                const o = new Proxy(e, {
                    apply(e, o, s) {
                        const i = function() {
                                const e = TS();
                                if (e) return e.targetPath ? {
                                    pathname: e.targetPath,
                                    search: "",
                                    hash: "",
                                    state: null,
                                    key: "default"
                                } : null;
                                if (void 0 !== Bo) try {
                                    const e = Bo.location;
                                    if (e) return {
                                        pathname: e.pathname,
                                        search: e.search || "",
                                        hash: e.hash || "",
                                        state: null,
                                        key: "default"
                                    }
                                } catch {
                                    eS && D.warn("[React Router] Could not access window.location")
                                }
                                return null
                            }(),
                            a = function() {
                                const e = TS();
                                return e ? e.span : jS()
                            }(),
                            c = e.apply(o, s);
                        return function(e, t, n, r, o, s) {
                            S(e) ? e.then((e => {
                                Array.isArray(e) && r(e, t, o ? ? void 0, s)
                            })).catch((e => {
                                eS && D.warn(`Error resolving async handler '${n}' for route`, t, e)
                            })) : Array.isArray(e) && r(e, t, o ? ? void 0, s)
                        }(c, t, n, r, i, a), c
                    }
                });
                return F(o, "__sentry_proxied__", !0), o
            }

            function US(e, t) {
                if (e.handle && "object" == typeof e.handle)
                    for (const n of Object.keys(e.handle)) {
                        const r = e.handle[n];
                        "function" != typeof r || r.__sentry_proxied__ || (e.handle[n] = BS(r, e, n, t))
                    }
                if (Array.isArray(e.children))
                    for (const n of e.children) US(n, t)
            }
            let zS, qS, WS, HS, VS, JS, GS = !1,
                KS = 3e3,
                YS = "";
            const XS = new WeakSet,
                ZS = new WeakMap,
                QS = new Set,
                ek = new WeakMap,
                tk = new WeakMap;

            function nk(e) {
                Bo ? .cancelAnimationFrame ? Bo.cancelAnimationFrame(e) : clearTimeout(e)
            }

            function rk(e) {
                return `${e.pathname}${e.search||""}${e.hash||""}`
            }

            function ok(e) {
                return e.includes(":") || e.includes("*")
            }

            function sk(e, t) {
                const n = t.children || [],
                    r = e.filter((e => !n.some((t => t === e || e.path && t.path === e.path || e.id && t.id === e.id))));
                r.length > 0 && (t.children = [...n, ...r])
            }

            function ik(e, t) {
                let n = ek.get(e);
                n || (n = new Set, ek.set(e, n)), n.add(t), t.finally((() => {
                    const n = ek.get(e);
                    n && n.delete(t)
                }))
            }

            function ak(e) {
                const t = new Promise((t => {
                    tk.set(e, t)
                }));
                ik(e, t)
            }

            function ck(e, t, n = null, r) {
                e.forEach((e => {
                    QS.add(e), GS && US(e, ck)
                })), t && sk(e, t);
                const o = r ? ? jS();
                if (o) {
                    const e = Kr(o);
                    if (e.timestamp) return void(eS && D.warn("[React Router] Lazy handler resolved after span ended - skipping update"));
                    const t = e.op;
                    let s = n;
                    if (!s && !r && void 0 !== Bo) {
                        const e = Bo.location;
                        e ? .pathname && (s = {
                            pathname: e.pathname
                        })
                    }
                    s && ("pageload" === t ? vk({
                        activeRootSpan: o,
                        location: {
                            pathname: s.pathname
                        },
                        routes: Array.from(QS),
                        allRoutes: Array.from(QS)
                    }) : "navigation" === t && uk(o, s, Array.from(QS), !1, VS))
                }
            }

            function uk(e, t, n, r = !1, o) {
                const s = Kr(e),
                    i = s.description,
                    a = e ? .__sentry_navigation_name_set__,
                    c = i && MS(i);
                if ((!a || r || c) && !s.timestamp) {
                    const r = o(n, t),
                        [u, l] = FS(t, n, n, r || [], YS, JS, GS),
                        d = s.data ? .[or];
                    u && (!i || !a && ("route" !== d || "route" === l) || "route" !== d && "route" === l || "route" === d && "route" === l && c) && (e.updateName(u), e.setAttribute(or, l), MS(u) || "route" !== l || F(e, "__sentry_navigation_name_set__", !0))
                }
            }

            function lk(e, t, n, r, o) {
                let s = !1,
                    i = !!o && "pageload" === Kr(o).op,
                    a = !1,
                    c = null,
                    u = null;
                e.subscribe((e => {
                    if (!s) {
                        const t = jS();
                        t && "pageload" === Kr(t).op ? i = !0 : i && ("POP" !== e.historyAction || a ? s = !0 : a = !0)
                    }
                    if ("PUSH" === e.historyAction || "POP" === e.historyAction && s) {
                        const s = rk(e.location),
                            i = () => {
                                u !== s && (u = s, c = null, gk({
                                    location: e.location,
                                    routes: t,
                                    navigationType: e.historyAction,
                                    version: n,
                                    basename: r,
                                    allRoutes: Array.from(QS)
                                }))
                            };
                        "idle" !== e.navigation.state ? (u !== s && (u = null), null !== c && nk(c), o = i, c = Bo ? .requestAnimationFrame ? Bo.requestAnimationFrame(o) : setTimeout(o, 0)) : (null !== c && (nk(c), c = null), i())
                    }
                    var o
                }))
            }

            function dk(e, t) {
                return zS && qS && WS && VS ? function(n, r) {
                    if (yk(n), GS)
                        for (const e of n) US(e, ck);
                    const o = jS();
                    r && "patchRoutesOnNavigation" in r && "function" == typeof r.patchRoutesOnNavigation && o && (F(o, "__sentry_may_have_lazy_routes__", !0), ak(o));
                    const s = mk(r, !1, o),
                        i = e(n, s),
                        a = r ? .basename;
                    return "POP" === i.state.historyAction && o && vk({
                        activeRootSpan: o,
                        location: i.state.location,
                        routes: n,
                        basename: a,
                        allRoutes: Array.from(QS)
                    }), YS = a || "", lk(i, n, t, a, o), i
                } : (eS && D.warn(`reactRouterV${t}Instrumentation was unable to wrap the \`createRouter\` function because of one or more missing parameters.`), e)
            }

            function pk(e, t) {
                return zS && qS && WS && VS ? function(n, r) {
                    if (yk(n), GS)
                        for (const e of n) US(e, ck);
                    const o = jS();
                    r && "patchRoutesOnNavigation" in r && "function" == typeof r.patchRoutesOnNavigation && o && (F(o, "__sentry_may_have_lazy_routes__", !0), ak(o));
                    const s = mk(r, !0, o),
                        i = e(n, s),
                        a = r ? .basename;
                    let c;
                    const u = r ? .initialEntries,
                        l = r ? .initialIndex,
                        d = 1 === u ? .length,
                        p = void 0 !== l && u ? .[l];
                    c = d ? u[0] : p ? u[l] : void 0;
                    const f = c ? "string" == typeof c ? {
                            pathname: c
                        } : c : i.state.location,
                        h = jS();
                    return "POP" === i.state.historyAction && h && vk({
                        activeRootSpan: h,
                        location: f,
                        routes: n,
                        basename: a,
                        allRoutes: Array.from(QS)
                    }), YS = a || "", lk(i, n, t, a, h), i
                } : (eS && D.warn(`reactRouterV${t}Instrumentation was unable to wrap the \`createMemoryRouter\` function because of one or more missing parameters.`), e)
            }

            function fk(e, t) {
                const n = wv({ ...e,
                        instrumentPageLoad: !1,
                        instrumentNavigation: !1
                    }),
                    {
                        useEffect: r,
                        useLocation: o,
                        useNavigationType: s,
                        createRoutesFromChildren: i,
                        matchRoutes: a,
                        stripBasename: c,
                        enableAsyncRouteHandlers: u = !1,
                        instrumentPageLoad: l = !0,
                        instrumentNavigation: d = !0,
                        lazyRouteTimeout: p,
                        lazyRouteManifest: f
                    } = e;
                return { ...n,
                    setup(t) {
                        n.setup(t);
                        const l = e.finalTimeout ? ? 3e4,
                            d = 3 * (e.idleTimeout ? ? 1e3),
                            h = p ? ? d;
                        h === 1 / 0 ? (KS = l, eS && D.log("[React Router] lazyRouteTimeout set to Infinity, capping at finalTimeout:", l, "ms to prevent indefinite hangs")) : Number.isNaN(h) ? (eS && D.warn("[React Router] lazyRouteTimeout must be a number, falling back to default:", d), KS = d) : h < 0 ? (eS && D.warn("[React Router] lazyRouteTimeout must be non-negative or Infinity, got:", h, "falling back to:", d), KS = d) : KS = h, zS = r, qS = o, WS = s, VS = a, HS = i, GS = u, JS = f,
                            function(e, t = !1) {
                                wS = e, xS = t
                            }(a, c || !1)
                    },
                    afterAllSetup(e) {
                        n.afterAllSetup(e);
                        const r = Bo.location ? .pathname;
                        l && r && xv(e, {
                            name: r,
                            attributes: {
                                [or]: "url",
                                [ar]: "pageload",
                                [cr]: `auto.pageload.react.reactrouter_v${t}`
                            }
                        }), d && XS.add(e)
                    }
                }
            }

            function hk(e, t) {
                if (!(zS && qS && WS && VS)) return eS && D.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters."), e;
                const n = n => {
                    const r = Mb.useRef(!0),
                        {
                            routes: o,
                            locationArg: s
                        } = n,
                        i = e(o, s),
                        a = qS(),
                        c = WS(),
                        u = "string" == typeof s || s ? .pathname ? s : a;
                    return zS((() => {
                        const e = "string" == typeof u ? {
                            pathname: u
                        } : u;
                        r.current ? (yk(o), vk({
                            activeRootSpan: jS(),
                            location: e,
                            routes: o,
                            allRoutes: Array.from(QS)
                        }), r.current = !1) : gk({
                            location: e,
                            routes: o,
                            navigationType: c,
                            version: t,
                            allRoutes: Array.from(QS)
                        })
                    }), [c, u]), i
                };
                return (e, t) => Mb.createElement(n, {
                    routes: e,
                    locationArg: t
                })
            }

            function mk(e, t = !1, n) {
                if (!e || !("patchRoutesOnNavigation" in e) || "function" != typeof e.patchRoutesOnNavigation) return e || {};
                const r = e.patchRoutesOnNavigation;
                return { ...e,
                    patchRoutesOnNavigation: async e => {
                        const o = e ? .path,
                            s = jS() ? ? n;
                        if (!t) {
                            const t = e ? .patch,
                                n = e ? .matches;
                            t && (e.patch = (e, r) => {
                                if (yk(r), n && n.length > 0) {
                                    const t = n[n.length - 1],
                                        o = t ? .route;
                                    if (o) {
                                        const t = Array.from(QS).find((t => {
                                            const n = void 0 !== t.id && t.id === e,
                                                r = t === o,
                                                s = void 0 !== t.path && void 0 !== o.path && t.path === o.path;
                                            return n || r || s
                                        }));
                                        t && sk(r, t)
                                    }
                                }
                                const i = s ? Kr(s) : void 0;
                                return o && s && i && !i.timestamp && "navigation" === i.op && uk(s, {
                                    pathname: o,
                                    search: "",
                                    hash: "",
                                    state: null,
                                    key: "default"
                                }, Array.from(QS), !0, VS), t(e, r)
                            })
                        }
                        const i = (async () => {
                            const t = function(e, t) {
                                const n = {};
                                return ES.length >= 10 && (eS && D.warn("[React Router] Navigation context stack overflow - removing oldest context"), ES.shift()), ES.push({
                                    token: n,
                                    targetPath: e,
                                    span: t
                                }), n
                            }(o, s);
                            let n;
                            try {
                                n = await r(e)
                            } finally {
                                ! function(e) {
                                    const t = ES[ES.length - 1];
                                    t ? .token === e && ES.pop()
                                }(t), s && function(e) {
                                    const t = tk.get(e);
                                    t && (t(), tk.delete(e), e.__sentry_may_have_lazy_routes__ && (e.__sentry_may_have_lazy_routes__ = !1))
                                }(s)
                            }
                            const i = s ? Kr(s) : void 0;
                            if (s && i && !i.timestamp && "navigation" === i.op) {
                                o && uk(s, {
                                    pathname: o,
                                    search: "",
                                    hash: "",
                                    state: null,
                                    key: "default"
                                }, Array.from(QS), !1, VS)
                            }
                            return n
                        })();
                        return s && ik(s, i), i
                    }
                }
            }

            function gk(e) {
                const {
                    location: t,
                    routes: n,
                    navigationType: r,
                    version: o,
                    matches: s,
                    basename: i,
                    allRoutes: a
                } = e, c = Array.isArray(s) ? s : VS(a || n, t, i), u = Ve();
                if (!u || !XS.has(u)) return;
                const l = jS();
                if ((!l || "pageload" !== Kr(l).op || "POP" !== r) && ("PUSH" === r || "POP" === r) && c) {
                    const [e, r] = FS(t, a || n, a || n, c, i, JS, GS), s = rk(t), l = ZS.get(u), d = !(!l || l.isPlaceholder) && !!Kr(l.span).timestamp, {
                        skip: p,
                        shouldUpdate: f
                    } = function(e, t, n, r) {
                        if (!e) return {
                            skip: !1,
                            shouldUpdate: !1
                        };
                        if (e.locationKey === t && (e.isPlaceholder || !r)) {
                            const t = !!e.routeName && MS(e.routeName),
                                r = MS(n),
                                o = !!e.routeName && ok(e.routeName),
                                s = ok(n),
                                i = t && !r,
                                a = !o && s,
                                c = n !== e.routeName && n.length > (e.routeName ? .length || 0) && !r;
                            return {
                                skip: !0,
                                shouldUpdate: !(!e.routeName || !(i || a || c))
                            }
                        }
                        return {
                            skip: !1,
                            shouldUpdate: !1
                        }
                    }(l, s, e, d);
                    if (p) {
                        if (f && l) {
                            const t = l.routeName;
                            l.isPlaceholder ? (l.routeName = e, eS && D.log(`[Tracing] Updated placeholder navigation name from "${t}" to "${e}" (will apply to real span)`)) : (l.span.updateName(e), l.span.setAttribute(or, r), F(l.span, "__sentry_navigation_name_set__", !0), l.routeName = e, eS && D.log(`[Tracing] Updated navigation span name from "${t}" to "${e}"`))
                        } else eS && D.log(`[Tracing] Skipping duplicate navigation for location: ${s}`);
                        return
                    }
                    const h = {
                        span: {
                            end: () => {}
                        },
                        routeName: e,
                        pathname: t.pathname,
                        locationKey: s,
                        isPlaceholder: !0
                    };
                    let m;
                    ZS.set(u, h);
                    try {
                        m = Ev(u, {
                            name: h.routeName,
                            attributes: {
                                [or]: r,
                                [ar]: "navigation",
                                [cr]: `auto.navigation.react.reactrouter_v${o}`
                            }
                        })
                    } catch (e) {
                        throw ZS.delete(u), e
                    }
                    m ? (ZS.set(u, {
                        span: m,
                        routeName: h.routeName,
                        pathname: t.pathname,
                        locationKey: s
                    }), Sk(m, t, n, i, "navigation")) : ZS.delete(u)
                }
            }

            function yk(e) {
                e.forEach((e => {
                    _k(e).forEach((e => {
                        QS.add(e)
                    }))
                }))
            }

            function _k(e, t = new Set) {
                return t.has(e) || (t.add(e), e.children && !e.index && e.children.forEach((e => {
                    _k(e, t).forEach((e => {
                        t.add(e)
                    }))
                }))), t
            }

            function vk({
                activeRootSpan: e,
                location: t,
                routes: n,
                matches: r,
                basename: o,
                allRoutes: s
            }) {
                const i = Array.isArray(r) ? r : VS(s || n, t, o);
                if (i) {
                    const [r, a] = FS(t, s || n, s || n, i, o, JS, GS);
                    Ue().setTransactionName(r || "/"), e && (e.updateName(r), e.setAttribute(or, a), Sk(e, t, n, o, "pageload"))
                } else e && Sk(e, t, n, o, "pageload")
            }

            function bk(e, t, n, r, o, s, i, a) {
                try {
                    const c = t.data ? .[or];
                    if ("route" === c && n && !MS(n)) return;
                    const u = Array.from(a),
                        l = u.length > 0 ? u : o,
                        d = VS(l, r, s);
                    if (!d) return;
                    const [p, f] = FS(r, l, l, d, s, JS, GS), h = function(e, t, n, r, o = !1) {
                        return !!n && (!(e || !o) || (!(!e || !MS(e) || "route" !== r || MS(n)) || "route" !== t && "route" === r))
                    }(n, c, p, f, !0), m = "pageload" === i || !t.timestamp;
                    h && m && (e.updateName(p), e.setAttribute(or, f))
                } catch (e) {
                    eS && D.warn(`Error updating span details before ending: ${e}`)
                }
            }

            function Sk(e, t, n, r, o) {
                const s = `__sentry_${o}_end_patched__`,
                    i = e ? .[s];
                if (i || !e.end) return;
                const a = e.end.bind(e);
                let c = !1;
                e.end = function(...s) {
                    if (c) return;
                    c = !0;
                    const i = s.length > 0 ? s[0] : Date.now() / 1e3,
                        u = Kr(e),
                        l = u.description,
                        d = u.data ? .[or],
                        p = () => {
                            const t = Ve();
                            if (t && "navigation" === o) {
                                const n = ZS.get(t);
                                n && n.span === e && ZS.delete(t)
                            }
                        },
                        f = ek.get(e),
                        h = e.__sentry_may_have_lazy_routes__;
                    if ((f && f.size > 0 || h) && l && (MS(l) || "route" !== d)) {
                        if (0 === KS) return bk(e, u, l, t, n, r, o, QS), p(), void a(i);
                        const s = new Promise((e => setTimeout(e, KS)));
                        let c;
                        if (f && f.size > 0) {
                            const e = Promise.allSettled(f).then((() => {}));
                            c = KS === 1 / 0 ? e : Promise.race([e, s])
                        } else c = s;
                        c.then((() => {
                            const s = Kr(e);
                            bk(e, s, s.description, t, n, r, o, QS), p(), a(i)
                        })).catch((() => {
                            p(), a(i)
                        }))
                    } else bk(e, u, l, t, n, r, o, QS), p(), a(i)
                }, F(e, s, !0)
            }

            function kk(e, t) {
                if (!(zS && qS && WS && HS && VS)) return eS && D.warn(`reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: ${zS}. useLocation: ${qS}. useNavigationType: ${WS}.\n      createRoutesFromChildren: ${HS}. matchRoutes: ${VS}.`), e;
                const n = n => {
                    const r = Mb.useRef(!0),
                        o = qS(),
                        s = WS();
                    return zS((() => {
                        const e = HS(n.children);
                        r.current ? (yk(e), vk({
                            activeRootSpan: jS(),
                            location: o,
                            routes: e,
                            allRoutes: Array.from(QS)
                        }), r.current = !1) : gk({
                            location: o,
                            routes: e,
                            navigationType: s,
                            version: t,
                            allRoutes: Array.from(QS)
                        })
                    }), [o, s]), Mb.createElement(e, { ...n
                    })
                };
                return Yb(n, e), n
            }

            function wk(e) {
                return fk(e, "6")
            }

            function xk(e) {
                return hk(e, "6")
            }

            function Ek(e) {
                return dk(e, "6")
            }

            function Tk(e) {
                return pk(e, "6")
            }

            function Ck(e) {
                return kk(e, "6")
            }

            function Ik(e) {
                return fk(e, "7")
            }

            function Rk(e) {
                return kk(e, "7")
            }

            function Ak(e) {
                return dk(e, "7")
            }

            function Mk(e) {
                return pk(e, "7")
            }

            function Ok(e) {
                return hk(e, "7")
            }
        }
    }
]);