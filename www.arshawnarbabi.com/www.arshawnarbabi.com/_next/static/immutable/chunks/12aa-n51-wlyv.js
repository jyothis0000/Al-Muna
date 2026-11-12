(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 9138, t => {
    "use strict";

    function e(t, e, r, a, l) {
        let o = 0;
        r[0] = 0, a[0] = -1e20, a[1] = 1e20;
        for (let e = 1; e < l; e++) {
            let l = (t[e] + e * e - (t[r[o]] + r[o] * r[o])) / (2 * e - 2 * r[o]);
            for (; o > 0 && l <= a[o];) o--, l = (t[e] + e * e - (t[r[o]] + r[o] * r[o])) / (2 * e - 2 * r[o]);
            r[++o] = e, a[o] = l, a[o + 1] = 1e20
        }
        o = 0;
        for (let n = 0; n < l; n++) {
            for (; a[o + 1] < n;) o++;
            e[n] = (n - r[o]) * (n - r[o]) + t[r[o]]
        }
    }
    self.onmessage = async t => {
        let {
            id: r,
            url: a
        } = t.data;
        try {
            let t = await fetch(a);
            if (!t.ok) throw Error(String(t.status));
            let l = await createImageBitmap(await t.blob()),
                o = Math.min(1, 1400 / Math.max(l.width, l.height)),
                n = Math.max(1, Math.round(l.width * o)),
                f = Math.max(1, Math.round(l.height * o)),
                i = new OffscreenCanvas(n, f).getContext("2d", {
                    willReadFrequently: !0
                });
            if (!i) throw Error("no 2d context");
            i.drawImage(l, 0, 0, n, f), l.close();
            let s = i.getImageData(0, 0, n, f),
                u = function(t, r, a) {
                    let l = function(t, e, r) {
                        let a = e,
                            l = r,
                            o = -1,
                            n = -1,
                            f = 0,
                            i = t.data;
                        for (let t = 0; t < r; t++)
                            for (let r = 0; r < e; r++) {
                                let s = i[(t * e + r) * 4 + 3];
                                s > f && (f = s), s > 8 && (r < a && (a = r), r > o && (o = r), t < l && (l = t), t > n && (n = t))
                            }
                        return o < 0 ? null : {
                            x0: a,
                            y0: l,
                            x1: o,
                            y1: n,
                            maxAlpha: f
                        }
                    }(t, r, a);
                    if (!l) return null;
                    let o = l.x1 - l.x0 + 1,
                        n = l.y1 - l.y0 + 1,
                        f = Math.min(o, n),
                        i = Math.max(2, Math.round(.16 * f)),
                        s = o + 2 * i,
                        u = n + 2 * i,
                        h = new ImageData(s, u);
                    for (let e = 0; e < n; e++) {
                        let a = ((l.y0 + e) * r + l.x0) * 4,
                            n = ((i + e) * s + i) * 4;
                        h.data.set(t.data.subarray(a, a + 4 * o), n)
                    }! function(t, e, r) {
                        let a = t.data,
                            l = new Uint8Array(e * r);
                        for (let t = 0; t < e * r; t++) l[t] = +(a[4 * t + 3] > 0);
                        for (let t = 0; t < 3; t++) {
                            let t = l.slice();
                            for (let o = 0; o < r; o++)
                                for (let n = 0; n < e; n++) {
                                    let f = o * e + n;
                                    if (l[f]) continue;
                                    let i = 0,
                                        s = 0,
                                        u = 0,
                                        h = 0;
                                    for (let t = -1; t <= 1; t++)
                                        for (let f = -1; f <= 1; f++) {
                                            let c = n + f,
                                                d = o + t;
                                            if (c < 0 || c >= e || d < 0 || d >= r) continue;
                                            let m = d * e + c;
                                            l[m] && (i += a[4 * m], s += a[4 * m + 1], u += a[4 * m + 2], h++)
                                        }
                                    h && (a[4 * f] = i / h, a[4 * f + 1] = s / h, a[4 * f + 2] = u / h, t[f] = 1)
                                }
                            l.set(t)
                        }
                    }(h, s, u);
                    let c = function(t, r, a, l) {
                            let o = Math.max(8, .5 * l),
                                n = new Float64Array(r * a);
                            for (let e = 0; e < r * a; e++) n[e] = t.data[4 * e + 3] > o ? 0 : 1e20;
                            let f = Math.max(r, a),
                                i = new Float64Array(f),
                                s = new Float64Array(f),
                                u = new Int32Array(f),
                                h = new Float64Array(f + 1);
                            for (let t = 0; t < r; t++) {
                                for (let e = 0; e < a; e++) i[e] = n[e * r + t];
                                e(i, s, u, h, a);
                                for (let e = 0; e < a; e++) n[e * r + t] = s[e]
                            }
                            for (let t = 0; t < a; t++) {
                                for (let e = 0; e < r; e++) i[e] = n[t * r + e];
                                e(i, s, u, h, r);
                                for (let e = 0; e < r; e++) n[t * r + e] = s[e]
                            }
                            return n
                        }(h, s, u, l.maxAlpha),
                        d = new Uint8Array(s * u),
                        m = .16 * f;
                    for (let t = 0; t < u; t++) {
                        let e = (u - 1 - t) * s,
                            r = t * s;
                        for (let t = 0; t < s; t++) d[r + t] = Math.min(255, Math.round(Math.sqrt(c[e + t]) / m * 255))
                    }
                    let w = new Uint8Array(s * u * 4);
                    for (let t = 0; t < u; t++) w.set(h.data.subarray((u - 1 - t) * s * 4, (u - t) * s * 4), t * s * 4);
                    return {
                        rgba: w,
                        bytes: d,
                        w: s,
                        h: u,
                        aspect: s / u
                    }
                }(s, n, f);
            if (!u) return void self.postMessage({
                id: r,
                ok: !0,
                empty: !0
            });
            self.postMessage({
                id: r,
                ok: !0,
                ...u
            }, [u.rgba.buffer, u.bytes.buffer])
        } catch (t) {
            self.postMessage({
                id: r,
                ok: !1,
                error: String(t)
            })
        }
    }, t.s([], 9138)
}]);