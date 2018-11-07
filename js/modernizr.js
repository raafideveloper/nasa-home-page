/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-video-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses-shiv-teststyles !*/
! function (e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, a, i, s;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), y.push((o ? "" : "no-") + s.join("-"))
            }
    }

    function a(e) {
        var t = b.className,
            n = Modernizr._config.classPrefix || "";
        if (x && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? b.className.baseVal = t : b.className = t)
    }

    function i(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function s(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function l() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function c() {
        var e = t.body;
        return e || (e = l(x ? "svg" : "body"), e.fake = !0), e
    }

    function u(e, n, r, o) {
        var a, i, s, u, f = "modernizr",
            d = l("div"),
            p = c();
        if (parseInt(r, 10))
            for (; r--;) s = l("div"), s.id = o ? o[r] : f + (r + 1), d.appendChild(s);
        return a = l("style"), a.type = "text/css", a.id = "s" + f, (p.fake ? p : d).appendChild(a), p.appendChild(d), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), i = n(d, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = u, b.offsetHeight) : d.parentNode.removeChild(d), !!i
    }

    function f(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function d(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function p(e, t, n) {
        var o;
        for (var a in e)
            if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, "function") ? d(o, n || t) : o);
        return !1
    }

    function m(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var a = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (a) {
                var i = a.error ? "error" : "log";
                a[i].call(a, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }

    function v(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(s(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var a = []; o--;) a.push("(" + s(t[o]) + ":" + r + ")");
            return a = a.join(" or "), u("@supports (" + a + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == m(e, null, "position")
            })
        }
        return n
    }

    function h(e, t, o, a) {
        function s() {
            u && (delete j.style, delete j.modElem)
        }
        if (a = r(a, "undefined") ? !1 : a, !r(o, "undefined")) {
            var c = v(e, o);
            if (!r(c, "undefined")) return c
        }
        for (var u, d, p, m, h, g = ["modernizr", "tspan", "samp"]; !j.style && g.length;) u = !0, j.modElem = l(g.shift()), j.style = j.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], h = j.style[m], f(m, "-") && (m = i(m)), j.style[m] !== n) {
                if (a || r(o, "undefined")) return s(), "pfx" == t ? m : !0;
                try {
                    j.style[m] = o
                } catch (y) {}
                if (j.style[m] != h) return s(), "pfx" == t ? m : !0
            } return s(), !1
    }

    function g(e, t, n, o, a) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + _.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(s, t, o, a) : (s = (e + " " + T.join(i + " ") + i).split(" "), p(s, t, n))
    }
    var y = [],
        C = [],
        S = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e])
                }, 0)
            },
            addTest: function (e, t, n) {
                C.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function (e) {
                C.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function () {};
    Modernizr.prototype = S, Modernizr = new Modernizr;
    var E = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    S._prefixes = E;
    var b = t.documentElement,
        x = "svg" === b.nodeName.toLowerCase();
    x || ! function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = C.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, c(t)
        }

        function a(e) {
            var t = y[e[h]];
            return t || (t = {}, g++, e[h] = g, y[g] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), f) return n.createElement(e);
            r || (r = a(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : v.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), f) return e.createDocumentFragment();
            n = n || a(e);
            for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) o.createElement(s[i]);
            return o
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return C.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(C, t.frag)
        }

        function c(e) {
            e || (e = t);
            var r = a(e);
            return !C.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e
        }
        var u, f, d = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            v = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv",
            g = 0,
            y = {};
        ! function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, f = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0, f = !0
            }
        }();
        var C = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: d,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: f,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: i,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = C, c(t), "object" == typeof module && module.exports && (module.exports = C)
    }("undefined" != typeof e ? e : this, t), Modernizr.addTest("video", function () {
        var e = l("video"),
            t = !1;
        try {
            t = !!e.canPlayType, t && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    });
    var w = (S.testStyles = u, "Moz O ms Webkit"),
        _ = S._config.usePrefixes ? w.split(" ") : [];
    S._cssomPrefixes = _;
    var P = function (t) {
        var r, o = E.length,
            a = e.CSSRule;
        if ("undefined" == typeof a) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in a) return "@" + t;
        for (var i = 0; o > i; i++) {
            var s = E[i],
                l = s.toUpperCase() + "_" + r;
            if (l in a) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    S.atRule = P;
    var T = S._config.usePrefixes ? w.toLowerCase().split(" ") : [];
    S._domPrefixes = T;
    var N = function (e, t) {
        var n = !1,
            r = l("div"),
            o = r.style;
        if (e in o) {
            var a = T.length;
            for (o[e] = t, n = o[e]; a-- && !n;) o[e] = "-" + T[a] + "-" + t, n = o[e]
        }
        return "" === n && (n = !1), n
    };
    S.prefixedCSSValue = N;
    var z = {
        elem: l("modernizr")
    };
    Modernizr._q.push(function () {
        delete z.elem
    });
    var j = {
        style: z.elem.style
    };
    Modernizr._q.unshift(function () {
        delete j.style
    }), S.testAllProps = g;
    var k = S.prefixed = function (e, t, n) {
        return 0 === e.indexOf("@") ? P(e) : (-1 != e.indexOf("-") && (e = i(e)), t ? g(e, t, n) : g(e, "pfx"))
    };
    S.prefixedCSS = function (e) {
        var t = k(e);
        return t && s(t)
    };
    o(), a(y), delete S.addTest, delete S.addAsyncTest;
    for (var F = 0; F < Modernizr._q.length; F++) Modernizr._q[F]();
    e.Modernizr = Modernizr
}(window, document);