!function(e) {
    var t = {};
    function n(r) {
        if (t[r])return t[r].exports;
        var i = t[r] = {i: r,l: !1,exports: {}};
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0,get: r})
    },
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 3)
}([function(e, t, n) {
    var r;
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    !function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, function(n, i) {
        "use strict";
        var o = []
          , a = n.document
          , s = Object.getPrototypeOf
          , u = o.slice
          , c = o.concat
          , l = o.push
          , f = o.indexOf
          , d = {}
          , p = d.toString
          , h = d.hasOwnProperty
          , g = h.toString
          , m = g.call(Object)
          , v = {}
          , y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
          , b = function(e) {
            return null != e && e === e.window
        }
          , w = {
            type: !0,
            src: !0,
            noModule: !0
        };
        function x(e, t, n) {
            var r, i = (t = t || a).createElement("script");
            if (i.text = e,
            n)
                for (r in w)
                    n[r] && (i[r] = n[r]);
            t.head.appendChild(i).parentNode.removeChild(i)
        }
        function C(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e
        }
        var T = function(e, t) {
            return new T.fn.init(e,t)
        }
          , k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function _(e) {
            var t = !!e && "length"in e && e.length
              , n = C(e);
            return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        T.fn = T.prototype = {
            jquery: "3.3.1",
            constructor: T,
            length: 0,
            toArray: function() {
                return u.call(this)
            },
            get: function(e) {
                return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = T.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return T.each(this, e)
            },
            map: function(e) {
                return this.pushStack(T.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(u.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: o.sort,
            splice: o.splice
        },
        T.extend = T.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a,
            a = arguments[s] || {},
            s++),
            "object" == typeof a || y(a) || (a = {}),
            s === u && (a = this,
            s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        n = a[t],
                        a !== (r = e[t]) && (c && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                        o = n && Array.isArray(n) ? n : []) : o = n && T.isPlainObject(n) ? n : {},
                        a[t] = T.extend(c, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        T.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === m)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e) {
                x(e)
            },
            each: function(e, t) {
                var n, r = 0;
                if (_(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(k, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (_(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : f.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0, a = [];
                if (_(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e)
                        null != (i = t(e[o], o, n)) && a.push(i);
                return c.apply([], a)
            },
            guid: 1,
            support: v
        }),
        "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]),
        T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        });
        var S = /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
        function(e) {
            var t, n, r, i, o, a, s, u, c, l, f, d, p, h, g, m, v, y, b, w = "sizzle" + 1 * new Date, x = e.document, C = 0, T = 0, k = ae(), _ = ae(), S = ae(), E = function(e, t) {
                return e === t && (f = !0),
                0
            }, D = {}.hasOwnProperty, A = [], N = A.pop, j = A.push, L = A.push, I = A.slice, M = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", q = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", P = "\\[" + q + "*(" + H + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + q + "*\\]", $ = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp(q + "+","g"), U = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$","g"), F = new RegExp("^" + q + "*," + q + "*"), W = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"), B = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]","g"), G = new RegExp($), V = new RegExp("^" + H + "$"), z = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)","i"),
                bool: new RegExp("^(?:" + O + ")$","i"),
                needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)","i")
            }, X = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)","ig"), ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function() {
                d()
            }, ie = ye(function(e) {
                return !0 === e.disabled && ("form"in e || "label"in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                L.apply(A = I.call(x.childNodes), x.childNodes),
                A[x.childNodes.length].nodeType
            } catch (e) {
                L = {
                    apply: A.length ? function(e, t) {
                        j.apply(e, I.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            function oe(e, t, r, i) {
                var o, s, c, l, f, h, v, y = t && t.ownerDocument, C = t ? t.nodeType : 9;
                if (r = r || [],
                "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C)
                    return r;
                if (!i && ((t ? t.ownerDocument || t : x) !== p && d(t),
                t = t || p,
                g)) {
                    if (11 !== C && (f = K.exec(e)))
                        if (o = f[1]) {
                            if (9 === C) {
                                if (!(c = t.getElementById(o)))
                                    return r;
                                if (c.id === o)
                                    return r.push(c),
                                    r
                            } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o)
                                return r.push(c),
                                r
                        } else {
                            if (f[2])
                                return L.apply(r, t.getElementsByTagName(e)),
                                r;
                            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                return L.apply(r, t.getElementsByClassName(o)),
                                r
                        }
                    if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
                        if (1 !== C)
                            y = t,
                            v = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((l = t.getAttribute("id")) ? l = l.replace(te, ne) : t.setAttribute("id", l = w),
                            s = (h = a(e)).length; s--; )
                                h[s] = "#" + l + " " + ve(h[s]);
                            v = h.join(","),
                            y = Q.test(e) && ge(t.parentNode) || t
                        }
                        if (v)
                            try {
                                return L.apply(r, y.querySelectorAll(v)),
                                r
                            } catch (e) {} finally {
                                l === w && t.removeAttribute("id")
                            }
                    }
                }
                return u(e.replace(U, "$1"), t, r, i)
            }
            function ae() {
                var e = [];
                return function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    t[n + " "] = i
                }
            }
            function se(e) {
                return e[w] = !0,
                e
            }
            function ue(e) {
                var t = p.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function ce(e, t) {
                for (var n = e.split("|"), i = n.length; i--; )
                    r.attrHandle[n[i]] = t
            }
            function le(e, t) {
                var n = t && e
                  , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r)
                    return r;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function fe(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function de(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function pe(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label"in t && t.disabled === e
                }
            }
            function he(e) {
                return se(function(t) {
                    return t = +t,
                    se(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; )
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function ge(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = oe.support = {},
            o = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            d = oe.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : x;
                return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement,
                g = !o(p),
                x !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                n.attributes = ue(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                n.getElementsByTagName = ue(function(e) {
                    return e.appendChild(p.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                n.getElementsByClassName = Y.test(p.getElementsByClassName),
                n.getById = ue(function(e) {
                    return h.appendChild(e).id = w,
                    !p.getElementsByName || !p.getElementsByName(w).length
                }),
                n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ,
                r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o];
                            for (i = t.getElementsByName(e),
                            r = 0; o = i[r++]; )
                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                    return [o]
                        }
                        return []
                    }
                }
                ),
                r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++]; )
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }
                ,
                r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e)
                }
                ,
                v = [],
                m = [],
                (n.qsa = Y.test(p.querySelectorAll)) && (ue(function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + q + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || m.push("\\[" + q + "*(?:value|" + O + ")"),
                    e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                    e.querySelectorAll(":checked").length || m.push(":checked"),
                    e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                }),
                ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && m.push("name" + q + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                    h.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    m.push(",.*:")
                })),
                (n.matchesSelector = Y.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                    n.disconnectedMatch = y.call(e, "*"),
                    y.call(e, "[s!='']:x"),
                    v.push("!=", $)
                }),
                m = m.length && new RegExp(m.join("|")),
                v = v.length && new RegExp(v.join("|")),
                t = Y.test(h.compareDocumentPosition),
                b = t || Y.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                E = t ? function(e, t) {
                    if (e === t)
                        return f = !0,
                        0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === x && b(x, e) ? -1 : t === p || t.ownerDocument === x && b(x, t) ? 1 : l ? M(l, e) - M(l, t) : 0 : 4 & r ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return f = !0,
                        0;
                    var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                    if (!i || !o)
                        return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : l ? M(l, e) - M(l, t) : 0;
                    if (i === o)
                        return le(e, t);
                    for (n = e; n = n.parentNode; )
                        a.unshift(n);
                    for (n = t; n = n.parentNode; )
                        s.unshift(n);
                    for (; a[r] === s[r]; )
                        r++;
                    return r ? le(a[r], s[r]) : a[r] === x ? -1 : s[r] === x ? 1 : 0
                }
                ,
                p) : p
            }
            ,
            oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }
            ,
            oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && d(e),
                t = t.replace(B, "='$1']"),
                n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                    try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (e) {}
                return oe(t, p, null, [e]).length > 0
            }
            ,
            oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && d(e),
                b(e, t)
            }
            ,
            oe.attr = function(e, t) {
                (e.ownerDocument || e) !== p && d(e);
                var i = r.attrHandle[t.toLowerCase()]
                  , o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }
            ,
            oe.escape = function(e) {
                return (e + "").replace(te, ne)
            }
            ,
            oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            oe.uniqueSort = function(e) {
                var t, r = [], i = 0, o = 0;
                if (f = !n.detectDuplicates,
                l = !n.sortStable && e.slice(0),
                e.sort(E),
                f) {
                    for (; t = e[o++]; )
                        t === e[o] && (i = r.push(o));
                    for (; i--; )
                        e.splice(r[i], 1)
                }
                return l = null,
                e
            }
            ,
            i = oe.getText = function(e) {
                var t, n = "", r = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += i(e)
                    } else if (3 === o || 4 === o)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += i(t);
                return n
            }
            ,
            (r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: z,
                attrHandle: {},
                find: {},
                relative: {
					">": {dir: "parentNode",first: !0},
					" ": {dir: "parentNode"},
					"+": {dir: "previousSibling",first: !0},
					"~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && k(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = oe.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "",
                            "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3)
                          , a = "last" !== e.slice(-4)
                          , s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, u) {
                            var c, l, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, b = !1;
                            if (m) {
                                if (o) {
                                    for (; g; ) {
                                        for (d = t; d = d[g]; )
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild],
                                a && y) {
                                    for (b = (p = (c = (l = (f = (d = m)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2],
                                    d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop(); )
                                        if (1 === d.nodeType && ++b && d === t) {
                                            l[e] = [C, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (c = (l = (f = (d = t)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && c[1]),
                                !1 === b)
                                    for (; (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((l = (f = d[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [C, b]),
                                    d !== t)); )
                                        ;
                                return (b -= i) === r || b % r == 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                        r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--; )
                                e[r = M(e, o[a])] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, n)
                        }
                        ) : i
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = []
                          , n = []
                          , r = s(e.replace(U, "$1"));
                        return r[w] ? se(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--; )
                                (o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e,
                            r(t, null, o, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: se(function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }),
                    contains: se(function(e) {
                        return e = e.replace(Z, ee),
                        function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                    }),
                    lang: se(function(e) {
                        return V.test(e || "") || oe.error("unsupported lang: " + e),
                        e = e.replace(Z, ee).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {return !r.pseudos.empty(e)},
                    header: function(e) {return J.test(e.nodeName)},
                    input: function(e) {return X.test(e.nodeName)},
                    button: function(e) {var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t},
                    text: function(e) {var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())},
                    first: he(function() {return [0]}),
                    last: he(function(e, t) {return [t - 1]}),
                    eq: he(function(e, t, n) {return [n < 0 ? n + t : n]}),
                    even: he(function(e, t) {for (var n = 0; n < t; n += 2)e.push(n);return e}),
                    odd: he(function(e, t) {for (var n = 1; n < t; n += 2)e.push(n);return e}),
                    lt: he(function(e, t, n) {for (var r = n < 0 ? n + t : n; --r >= 0; )e.push(r);return e}),
                    gt: he(function(e, t, n) {for (var r = n < 0 ? n + t : n; ++r < t; )e.push(r);return e})
                }
            }).pseudos.nth = r.pseudos.eq,
            {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
                r.pseudos[t] = fe(t);
            for (t in {submit: !0,reset: !0})
                r.pseudos[t] = de(t);
            function me() {}
            function ve(e) {for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }
            function ye(e, t, n) {
                var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = T++;
                return t.first ? function(t, n, i) { for (; t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, i); return !1 }
                : function(t, n, u) {
                    var c, l, f, d = [C, s];
                    if (u) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || a) && e(t, n, u))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || a)
                                if (l = (f = t[w] || (t[w] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                                i && i === t.nodeName.toLowerCase())
                                    t = t[r] || t;
                                else {
                                    if ((c = l[o]) && c[0] === C && c[1] === s)
                                        return d[2] = c[2];
                                    if (l[o] = d,
                                    d[2] = e(t, n, u))
                                        return !0
                                }
                    return !1
                }
            }
            function be(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--; )
                        if (!e[i](t, n, r))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function we(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
                    (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                    c && t.push(s)));
                return a
            }
            function xe(e, t, n, r, i, o) {
                return r && !r[w] && (r = xe(r)),
                i && !i[w] && (i = xe(i, o)),
                se(function(o, a, s, u) {
                    var c, l, f, d = [], p = [], h = a.length, g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            oe(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : we(g, d, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, v, s, u),
                    r)
                        for (c = we(v, p),
                        r(c, [], s, u),
                        l = c.length; l--; )
                            (f = c[l]) && (v[p[l]] = !(m[p[l]] = f));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (c = [],
                                l = v.length; l--; )
                                    (f = v[l]) && c.push(m[l] = f);
                                i(null, v = [], c, u)
                            }
                            for (l = v.length; l--; )
                                (f = v[l]) && (c = i ? M(o, f) : d[l]) > -1 && (o[c] = !(a[c] = f))
                        }
                    } else
                        v = we(v === a ? v.splice(h, v.length) : v),
                        i ? i(null, a, v, u) : L.apply(a, v)
                })
            }
            function Ce(e) {
                for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, l = ye(function(e) {
                    return e === t
                }, s, !0), f = ye(function(e) {
                    return M(t, e) > -1
                }, s, !0), d = [function(e, n, r) {
                    var i = !a && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                    return t = null,
                    i
                }
                ]; u < o; u++)
                    if (n = r.relative[e[u].type])
                        d = [ye(be(d), n)];
                    else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[w]) {
                            for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                                ;
                            return xe(u > 1 && be(d), u > 1 && ve(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(U, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                        }
                        d.push(n)
                    }
                return be(d)
            }
            return me.prototype = r.filters = r.pseudos,
            r.setFilters = new me,
            a = oe.tokenize = function(e, t) {
                var n, i, o, a, s, u, c, l = _[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                for (s = e,
                u = [],
                c = r.preFilter; s; ) {
                    for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                    u.push(o = [])),
                    n = !1,
                    (i = W.exec(s)) && (n = i.shift(),
                    o.push({
                        value: n,
                        type: i[0].replace(U, " ")
                    }),
                    s = s.slice(n.length)),
                    r.filter)
                        !(i = z[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(),
                        o.push({
                            value: n,
                            type: a,
                            matches: i
                        }),
                        s = s.slice(n.length));
                    if (!n)
                        break
                }
                return t ? s.length : s ? oe.error(e) : _(e, u).slice(0)
            }
            ,
            s = oe.compile = function(e, t) {
                var n, i = [], o = [], s = S[e + " "];
                if (!s) {
                    for (t || (t = a(e)),
                    n = t.length; n--; )
                        (s = Ce(t[n]))[w] ? i.push(s) : o.push(s);
                    (s = S(e, function(e, t) {
                        var n = t.length > 0
                          , i = e.length > 0
                          , o = function(o, a, s, u, l) {
                            var f, h, m, v = 0, y = "0", b = o && [], w = [], x = c, T = o || i && r.find.TAG("*", l), k = C += null == x ? 1 : Math.random() || .1, _ = T.length;
                            for (l && (c = a === p || a || l); y !== _ && null != (f = T[y]); y++) {
                                if (i && f) {
                                    for (h = 0,
                                    a || f.ownerDocument === p || (d(f),
                                    s = !g); m = e[h++]; )
                                        if (m(f, a || p, s)) {
                                            u.push(f);
                                            break
                                        }
                                    l && (C = k)
                                }
                                n && ((f = !m && f) && v--,
                                o && b.push(f))
                            }
                            if (v += y,
                            n && y !== v) {
                                for (h = 0; m = t[h++]; )
                                    m(b, w, a, s);
                                if (o) {
                                    if (v > 0)
                                        for (; y--; )
                                            b[y] || w[y] || (w[y] = N.call(u));
                                    w = we(w)
                                }
                                L.apply(u, w),
                                l && !o && w.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                            }
                            return l && (C = k,
                            c = x),
                            b
                        };
                        return n ? se(o) : o
                    }(o, i))).selector = e
                }
                return s
            }
            ,
            u = oe.select = function(e, t, n, i) {
                var o, u, c, l, f, d = "function" == typeof e && e, p = !i && a(e = d.selector || e);
                if (n = n || [],
                1 === p.length) {
                    if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0]))
                            return n;
                        d && (t = t.parentNode),
                        e = e.slice(u.shift().value.length)
                    }
                    for (o = z.needsContext.test(e) ? 0 : u.length; o-- && (c = u[o],
                    !r.relative[l = c.type]); )
                        if ((f = r.find[l]) && (i = f(c.matches[0].replace(Z, ee), Q.test(u[0].type) && ge(t.parentNode) || t))) {
                            if (u.splice(o, 1),
                            !(e = i.length && ve(u)))
                                return L.apply(n, i),
                                n;
                            break
                        }
                }
                return (d || s(e, p))(i, t, !g, n, !t || Q.test(e) && ge(t.parentNode) || t),
                n
            }
            ,
            n.sortStable = w.split("").sort(E).join("") === w,
            n.detectDuplicates = !!f,
            d(),
            n.sortDetached = ue(function(e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
            }),
            ue(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || ce("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            n.attributes && ue(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || ce("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            ue(function(e) {
                return null == e.getAttribute("disabled")
            }) || ce(O, function(e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            oe
        }(n);
        T.find = S,
        T.expr = S.selectors,
        T.expr[":"] = T.expr.pseudos,
        T.uniqueSort = T.unique = S.uniqueSort,
        T.text = S.getText,
        T.isXMLDoc = S.isXML,
        T.contains = S.contains,
        T.escapeSelector = S.escape;
        var E = function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && T(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        }
          , D = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , A = T.expr.match.needsContext;
        function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function L(e, t, n) {
            return y(t) ? T.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? T.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? T.grep(e, function(e) {
                return f.call(t, e) > -1 !== n
            }) : T.filter(t, e, n)
        }
        T.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        T.fn.extend({
            find: function(e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(T(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (T.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                t = 0; t < r; t++)
                    T.find(e, i[t], n);
                return r > 1 ? T.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(L(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(L(this, e || [], !0))
            },
            is: function(e) {
                return !!L(this, "string" == typeof e && A.test(e) ? T(e) : e || [], !1).length
            }
        });
        var I, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || I,
            "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : M.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof T ? t[0] : t,
                    T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)),
                    j.test(r[1]) && T.isPlainObject(t))
                        for (r in t)
                            y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = a.getElementById(r[2])) && (this[0] = i,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
        }
        ).prototype = T.fn,
        I = T(a);
        var O = /^(?:parents|prev(?:Until|All))/
          , q = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function H(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        T.fn.extend({
            has: function(e) {
                var t = T(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (T.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0, i = this.length, o = [], a = "string" != typeof e && T(e);
                if (!A.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? f.call(T(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        T.each({
            parent: function(e) {var t = e.parentNode;return t && 11 !== t.nodeType ? t : null},
            parents: function(e) {return E(e, "parentNode")},
            parentsUntil: function(e, t, n) {return E(e, "parentNode", n)},
            next: function(e) {return H(e, "nextSibling")},
            prev: function(e) {return H(e, "previousSibling")},
            nextAll: function(e) {return E(e, "nextSibling")},
            prevAll: function(e) {return E(e, "previousSibling")},
            nextUntil: function(e, t, n) {return E(e, "nextSibling", n)},
            prevUntil: function(e, t, n) {return E(e, "previousSibling", n)},
            siblings: function(e) {return D((e.parentNode || {}).firstChild, e)},
            children: function(e) {return D(e.firstChild)},
            contents: function(e) {return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e),T.merge([], e.childNodes))}
        }, function(e, t) {
            T.fn[e] = function(n, r) {
                var i = T.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = T.filter(r, i)),
                this.length > 1 && (q[e] || T.uniqueSort(i),
                O.test(e) && i.reverse()),
                this.pushStack(i)
            }
        });
        var P = /[^\x20\t\r\n\f]+/g;
        function $(e) {return e}
        function R(e) {throw e}
        function U(e, t, n, r) {
            var i;
            try {
                e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        T.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return T.each(e.match(P) || [], function(e, n) {
                    t[n] = !0
                }),
                t
            }(e) : T.extend({}, e);
            var t, n, r, i, o = [], a = [], s = -1, u = function() {
                for (i = i || e.once,
                r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length; )
                        !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                i && (o = n ? [] : "")
            }, c = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1,
                    a.push(n)),
                    function t(n) {
                        T.each(n, function(n, r) {
                            y(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== C(r) && t(r)
                        })
                    }(arguments),
                    n && !t && u()),
                    this
                },
                remove: function() {
                    return T.each(arguments, function(e, t) {
                        for (var n; (n = T.inArray(t, o, n)) > -1; )
                            o.splice(n, 1),
                            n <= s && s--
                    }),
                    this
                },
                has: function(e) {
                    return e ? T.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []),
                    this
                },
                disable: function() {
                    return i = a = [],
                    o = n = "",
                    this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [],
                    n || t || (o = n = ""),
                    this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                    a.push(n),
                    t || u()),
                    this
                },
                fire: function() {
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!r
                }
            };
            return c
        }
        ,
        T.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]]
                  , r = "pending"
                  , i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return T.Deferred(function(n) {
                            T.each(t, function(t, r) {
                                var i = y(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    then: function(e, r, i) {
                        var o = 0;
                        function a(e, t, r, i) {
                            return function() {
                                var s = this
                                  , u = arguments
                                  , c = function() {
                                    var n, c;
                                    if (!(e < o)) {
                                        if ((n = r.apply(s, u)) === t.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        y(c) ? i ? c.call(n, a(o, t, $, i), a(o, t, R, i)) : (o++,
                                        c.call(n, a(o, t, $, i), a(o, t, R, i), a(o, t, $, t.notifyWith))) : (r !== $ && (s = void 0,
                                        u = [n]),
                                        (i || t.resolveWith)(s, u))
                                    }
                                }
                                  , l = i ? c : function() {
                                    try {
                                        c()
                                    } catch (n) {
                                        T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, l.stackTrace),
                                        e + 1 >= o && (r !== R && (s = void 0,
                                        u = [n]),
                                        t.rejectWith(s, u))
                                    }
                                }
                                ;
                                e ? l() : (T.Deferred.getStackHook && (l.stackTrace = T.Deferred.getStackHook()),
                                n.setTimeout(l))
                            }
                        }
                        return T.Deferred(function(n) {
                            t[0][3].add(a(0, n, y(i) ? i : $, n.notifyWith)),
                            t[1][3].add(a(0, n, y(e) ? e : $)),
                            t[2][3].add(a(0, n, y(r) ? r : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? T.extend(e, i) : i
                    }
                }
                  , o = {};
                return T.each(t, function(e, n) {
                    var a = n[2]
                      , s = n[5];
                    i[n[1]] = a.add,
                    s && a.add(function() {
                        r = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                    a.add(n[3].fire),
                    o[n[0]] = function() {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                    }
                    ,
                    o[n[0] + "With"] = a.fireWith
                }),
                i.promise(o),
                e && e.call(o, o),
                o
            },
            when: function(e) {
                var t = arguments.length
                  , n = t
                  , r = Array(n)
                  , i = u.call(arguments)
                  , o = T.Deferred()
                  , a = function(e) {
                    return function(n) {
                        r[e] = this,
                        i[e] = arguments.length > 1 ? u.call(arguments) : n,
                        --t || o.resolveWith(r, i)
                    }
                };
                if (t <= 1 && (U(e, o.done(a(n)).resolve, o.reject, !t),
                "pending" === o.state() || y(i[n] && i[n].then)))
                    return o.then();
                for (; n--; )
                    U(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        T.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        }
        ;
        var W = T.Deferred();
        function B() {
            a.removeEventListener("DOMContentLoaded", B),
            n.removeEventListener("load", B),
            T.ready()
        }
        T.fn.ready = function(e) {
            return W.then(e).catch(function(e) {
                T.readyException(e)
            }),
            this
        }
        ,
        T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0,
                !0 !== e && --T.readyWait > 0 || W.resolveWith(a, [T]))
            }
        }),
        T.ready.then = W.then,
        "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", B),
        n.addEventListener("load", B));
        var G = function(e, t, n, r, i, o, a) {
            var s = 0
              , u = e.length
              , c = null == n;
            if ("object" === C(n))
                for (s in i = !0,
                n)
                    G(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0,
            y(r) || (a = !0),
            c && (a ? (t.call(e, r),
            t = null) : (c = t,
            t = function(e, t, n) {
                return c.call(T(e), n)
            }
            )),
            t))
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
        }
          , V = /^-ms-/
          , z = /-([a-z])/g;
        function X(e, t) {
            return t.toUpperCase()
        }
        function J(e) {
            return e.replace(V, "ms-").replace(z, X)
        }
        var Y = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function K() {
            this.expando = T.expando + K.uid++
        }
        K.uid = 1,
        K.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[J(t)] = n;
                else
                    for (r in t)
                        i[J(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][J(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(J) : (t = J(t))in r ? [t] : t.match(P) || []).length;
                        for (; n--; )
                            delete r[t[n]]
                    }
                    (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t)
            }
        };
        var Q = new K
          , Z = new K
          , ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , te = /[A-Z]/g;
        function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(te, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Z.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        T.extend({
            hasData: function(e) {
                return Z.hasData(e) || Q.hasData(e)
            },
            data: function(e, t, n) {
                return Z.access(e, t, n)
            },
            removeData: function(e, t) {
                Z.remove(e, t)
            },
            _data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            _removeData: function(e, t) {
                Q.remove(e, t)
            }
        }),
        T.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Z.get(o),
                    1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--; )
                            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = J(r.slice(5)),
                            ne(o, r, i[r]));
                        Q.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    Z.set(this, e)
                }) : G(this, function(t) {
                    var n;
                    if (o && void 0 === t)
                        return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
                    this.each(function() {
                        Z.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Z.remove(this, e)
                })
            }
        }),
        T.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                    r = Q.get(e, t),
                    n && (!r || Array.isArray(n) ? r = Q.access(e, t, T.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = T.queue(e, t)
                  , r = n.length
                  , i = n.shift()
                  , o = T._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(),
                r--),
                i && ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(e, function() {
                    T.dequeue(e, t)
                }, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Q.get(e, n) || Q.access(e, n, {
                    empty: T.Callbacks("once memory").add(function() {
                        Q.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        T.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    T.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = T.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; a--; )
                    (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++,
                    n.empty.add(s));
                return s(),
                i.promise(t)
            }
        });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
          , oe = ["Top", "Right", "Bottom", "Left"]
          , ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display")
        }
          , se = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t)
                a[o] = e.style[o],
                e.style[o] = t[o];
            for (o in i = n.apply(e, r || []),
            t)
                e.style[o] = a[o];
            return i
        };
        function ue(e, t, n, r) {
            var i, o, a = 20, s = r ? function() {
                return r.cur()
            }
            : function() {
                return T.css(e, t, "")
            }
            , u = s(), c = n && n[3] || (T.cssNumber[t] ? "" : "px"), l = (T.cssNumber[t] || "px" !== c && +u) && ie.exec(T.css(e, t));
            if (l && l[3] !== c) {
                for (u /= 2,
                c = c || l[3],
                l = +u || 1; a--; )
                    T.style(e, t, l + c),
                    (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                    l /= o;
                l *= 2,
                T.style(e, t, l + c),
                n = n || []
            }
            return n && (l = +l || +u || 0,
            i = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = c,
            r.start = l,
            r.end = i)),
            i
        }
        var ce = {};
        function le(e) {
            var t, n = e.ownerDocument, r = e.nodeName, i = ce[r];
            return i || (t = n.body.appendChild(n.createElement(r)),
            i = T.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            ce[r] = i,
            i)
        }
        function fe(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
                (r = e[o]).style && (n = r.style.display,
                t ? ("none" === n && (i[o] = Q.get(r, "display") || null,
                i[o] || (r.style.display = "")),
                "" === r.style.display && ae(r) && (i[o] = le(r))) : "none" !== n && (i[o] = "none",
                Q.set(r, "display", n)));
            for (o = 0; o < a; o++)
                null != i[o] && (e[o].style.display = i[o]);
            return e
        }
        T.fn.extend({
            show: function() {
                return fe(this, !0)
            },
            hide: function() {
                return fe(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ae(this) ? T(this).show() : T(this).hide()
                })
            }
        });
        var de = /^(?:checkbox|radio)$/i
          , pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , he = /^$|^module$|\/(?:java|ecma)script/i
          , ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function me(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && N(e, t) ? T.merge([e], n) : n
        }
        function ve(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
        }
        ge.optgroup = ge.option,
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
        ge.th = ge.td;
        var ye, be, we = /<|&#?\w+;/;
        function xe(e, t, n, r, i) {
            for (var o, a, s, u, c, l, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === C(o))
                        T.merge(d, o.nodeType ? [o] : o);
                    else if (we.test(o)) {
                        for (a = a || f.appendChild(t.createElement("div")),
                        s = (pe.exec(o) || ["", ""])[1].toLowerCase(),
                        u = ge[s] || ge._default,
                        a.innerHTML = u[1] + T.htmlPrefilter(o) + u[2],
                        l = u[0]; l--; )
                            a = a.lastChild;
                        T.merge(d, a.childNodes),
                        (a = f.firstChild).textContent = ""
                    } else
                        d.push(t.createTextNode(o));
            for (f.textContent = "",
            p = 0; o = d[p++]; )
                if (r && T.inArray(o, r) > -1)
                    i && i.push(o);
                else if (c = T.contains(o.ownerDocument, o),
                a = me(f.appendChild(o), "script"),
                c && ve(a),
                n)
                    for (l = 0; o = a[l++]; )
                        he.test(o.type || "") && n.push(o);
            return f
        }
        ye = a.createDocumentFragment().appendChild(a.createElement("div")),
        (be = a.createElement("input")).setAttribute("type", "radio"),
        be.setAttribute("checked", "checked"),
        be.setAttribute("name", "t"),
        ye.appendChild(be),
        v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ye.innerHTML = "<textarea>x</textarea>",
        v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
        var Ce = a.documentElement
          , Te = /^key/
          , ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , _e = /^([^.]*)(?:\.(.+)|)/;
        function Se() {
            return !0
        }
        function Ee() {
            return !1
        }
        function De() {
            try {
                return a.activeElement
            } catch (e) {}
        }
        function Ae(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                    Ae(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n,
            r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
            r = void 0) : (i = r,
            r = n,
            n = void 0)),
            !1 === i)
                i = Ee;
            else if (!i)
                return e;
            return 1 === o && (a = i,
            (i = function(e) {
                return T().off(e),
                a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = T.guid++)),
            e.each(function() {
                T.event.add(this, t, i, r, n)
            })
        }
        T.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, u, c, l, f, d, p, h, g, m = Q.get(e);
                if (m)
                    for (n.handler && (n = (o = n).handler,
                    i = o.selector),
                    i && T.find.matchesSelector(Ce, i),
                    n.guid || (n.guid = T.guid++),
                    (u = m.events) || (u = m.events = {}),
                    (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    c = (t = (t || "").match(P) || [""]).length; c--; )
                        p = g = (s = _e.exec(t[c]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        p && (f = T.event.special[p] || {},
                        p = (i ? f.delegateType : f.bindType) || p,
                        f = T.event.special[p] || {},
                        l = T.extend({
                            type: p,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && T.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o),
                        (d = u[p]) || ((d = u[p] = []).delegateCount = 0,
                        f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                        f.add && (f.add.call(e, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                        i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                        T.event.global[p] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, c, l, f, d, p, h, g, m = Q.hasData(e) && Q.get(e);
                if (m && (u = m.events)) {
                    for (c = (t = (t || "").match(P) || [""]).length; c--; )
                        if (p = g = (s = _e.exec(t[c]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        p) {
                            for (f = T.event.special[p] || {},
                            d = u[p = (r ? f.delegateType : f.bindType) || p] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = o = d.length; o--; )
                                l = d[o],
                                !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1),
                                l.selector && d.delegateCount--,
                                f.remove && f.remove.call(e, l));
                            a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || T.removeEvent(e, p, m.handle),
                            delete u[p])
                        } else
                            for (p in u)
                                T.event.remove(e, p + t[c], n, r, !0);
                    T.isEmptyObject(u) && Q.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = T.event.fix(e), u = new Array(arguments.length), c = (Q.get(this, "events") || {})[s.type] || [], l = T.event.special[s.type] || {};
                for (u[0] = s,
                t = 1; t < arguments.length; t++)
                    u[t] = arguments[t];
                if (s.delegateTarget = this,
                !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                    for (a = T.event.handlers.call(this, s, c),
                    t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                        for (s.currentTarget = i.elem,
                        n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                            s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                            s.data = o.data,
                            void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                            s.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, s),
                    s.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [], u = t.delegateCount, c = e.target;
                if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (o = [],
                            a = {},
                            n = 0; n < u; n++)
                                void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? T(i, this).index(c) > -1 : T.find(i, this, null, [c]).length),
                                a[i] && o.push(r);
                            o.length && s.push({
                                elem: c,
                                handlers: o
                            })
                        }
                return c = this,
                u < t.length && s.push({
                    elem: c,
                    handlers: t.slice(u)
                }),
                s
            },
            addProp: function(e, t) {
                Object.defineProperty(T.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[T.expando] ? e : new T.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== De() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === De() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && N(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(e) {
                        return N(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        T.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        T.Event = function(e, t) {
            if (!(this instanceof T.Event))
                return new T.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ee,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && T.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[T.expando] = !0
        }
        ,
        T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Se,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Se,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Se,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, T.event.addProp),
        T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            T.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = e.relatedTarget, i = e.handleObj;
                    return r && (r === this || T.contains(this, r)) || (e.type = i.origType,
                    n = i.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        T.fn.extend({
            on: function(e, t, n, r) {
                return Ae(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Ae(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                    T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Ee),
                this.each(function() {
                    T.event.remove(this, e, n, t)
                })
            }
        });
        var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , je = /<script|<style|<link/i
          , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Me(e, t) {
            return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
        }
        function Oe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function qe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function He(e, t) {
            var n, r, i, o, a, s, u, c;
            if (1 === t.nodeType) {
                if (Q.hasData(e) && (o = Q.access(e),
                a = Q.set(t, o),
                c = o.events))
                    for (i in delete a.handle,
                    a.events = {},
                    c)
                        for (n = 0,
                        r = c[i].length; n < r; n++)
                            T.event.add(t, i, c[i][n]);
                Z.hasData(e) && (s = Z.access(e),
                u = T.extend({}, s),
                Z.set(t, u))
            }
        }
        function Pe(e, t, n, r) {
            t = c.apply([], t);
            var i, o, a, s, u, l, f = 0, d = e.length, p = d - 1, h = t[0], g = y(h);
            if (g || d > 1 && "string" == typeof h && !v.checkClone && Le.test(h))
                return e.each(function(i) {
                    var o = e.eq(i);
                    g && (t[0] = h.call(this, i, o.html())),
                    Pe(o, t, n, r)
                });
            if (d && (o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild,
            1 === i.childNodes.length && (i = o),
            o || r)) {
                for (s = (a = T.map(me(i, "script"), Oe)).length; f < d; f++)
                    u = i,
                    f !== p && (u = T.clone(u, !0, !0),
                    s && T.merge(a, me(u, "script"))),
                    n.call(e[f], u, f);
                if (s)
                    for (l = a[a.length - 1].ownerDocument,
                    T.map(a, qe),
                    f = 0; f < s; f++)
                        u = a[f],
                        he.test(u.type || "") && !Q.access(u, "globalEval") && T.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(u.src) : x(u.textContent.replace(Ie, ""), l, u))
            }
            return e
        }
        function $e(e, t, n) {
            for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                n || 1 !== r.nodeType || T.cleanData(me(r)),
                r.parentNode && (n && T.contains(r.ownerDocument, r) && ve(me(r, "script")),
                r.parentNode.removeChild(r));
            return e
        }
        T.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ne, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, a, s, u, c, l = e.cloneNode(!0), f = T.contains(e.ownerDocument, e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                    for (a = me(l),
                    r = 0,
                    i = (o = me(e)).length; r < i; r++)
                        s = o[r],
                        u = a[r],
                        c = void 0,
                        "input" === (c = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== c && "textarea" !== c || (u.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || me(e),
                        a = a || me(l),
                        r = 0,
                        i = o.length; r < i; r++)
                            He(o[r], a[r]);
                    else
                        He(e, l);
                return (a = me(l, "script")).length > 0 && ve(a, !f && me(e, "script")),
                l
            },
            cleanData: function(e) {
                for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Y(n)) {
                        if (t = n[Q.expando]) {
                            if (t.events)
                                for (r in t.events)
                                    i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                            n[Q.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
            }
        }),
        T.fn.extend({
            detach: function(e) {
                return $e(this, e, !0)
            },
            remove: function(e) {
                return $e(this, e)
            },
            text: function(e) {
                return G(this, function(e) {
                    return void 0 === e ? T.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Pe(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Pe(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Me(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Pe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Pe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (T.cleanData(me(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return T.clone(this, e, t)
                })
            },
            html: function(e) {
                return G(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !je.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = T.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (T.cleanData(me(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Pe(this, arguments, function(t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 && (T.cleanData(me(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            T.fn[e] = function(e) {
                for (var n, r = [], i = T(e), o = i.length - 1, a = 0; a <= o; a++)
                    n = a === o ? this : this.clone(!0),
                    T(i[a])[t](n),
                    l.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Re = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
          , Ue = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }
          , Fe = new RegExp(oe.join("|"),"i");
        function We(e, t, n) {
            var r, i, o, a, s = e.style;
            return (n = n || Ue(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (a = T.style(e, t)),
            !v.pixelBoxStyles() && Re.test(a) && Fe.test(t) && (r = s.width,
            i = s.minWidth,
            o = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = a,
            a = n.width,
            s.width = r,
            s.minWidth = i,
            s.maxWidth = o)),
            void 0 !== a ? a + "" : a
        }
        function Be(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function e() {
                if (l) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    Ce.appendChild(c).appendChild(l);
                    var e = n.getComputedStyle(l);
                    r = "1%" !== e.top,
                    u = 12 === t(e.marginLeft),
                    l.style.right = "60%",
                    s = 36 === t(e.right),
                    i = 36 === t(e.width),
                    l.style.position = "absolute",
                    o = 36 === l.offsetWidth || "absolute",
                    Ce.removeChild(c),
                    l = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, i, o, s, u, c = a.createElement("div"), l = a.createElement("div");
            l.style && (l.style.backgroundClip = "content-box",
            l.cloneNode(!0).style.backgroundClip = "",
            v.clearCloneStyle = "content-box" === l.style.backgroundClip,
            T.extend(v, {
                boxSizingReliable: function() {
                    return e(),
                    i
                },
                pixelBoxStyles: function() {
                    return e(),
                    s
                },
                pixelPosition: function() {
                    return e(),
                    r
                },
                reliableMarginLeft: function() {
                    return e(),
                    u
                },
                scrollboxSize: function() {
                    return e(),
                    o
                }
            }))
        }();
        var Ge = /^(none|table(?!-c[ea]).+)/
          , Ve = /^--/
          , ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Xe = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , Je = ["Webkit", "Moz", "ms"]
          , Ye = a.createElement("div").style;
        function Ke(e) {
            var t = T.cssProps[e];
            return t || (t = T.cssProps[e] = function(e) {
                if (e in Ye)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--; )
                    if ((e = Je[n] + t)in Ye)
                        return e
            }(e) || e),
            t
        }
        function Qe(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }
        function Ze(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0
              , s = 0
              , u = 0;
            if (n === (r ? "border" : "content"))
                return 0;
            for (; a < 4; a += 2)
                "margin" === n && (u += T.css(e, n + oe[a], !0, i)),
                r ? ("content" === n && (u -= T.css(e, "padding" + oe[a], !0, i)),
                "margin" !== n && (u -= T.css(e, "border" + oe[a] + "Width", !0, i))) : (u += T.css(e, "padding" + oe[a], !0, i),
                "padding" !== n ? u += T.css(e, "border" + oe[a] + "Width", !0, i) : s += T.css(e, "border" + oe[a] + "Width", !0, i));
            return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))),
            u
        }
        function et(e, t, n) {
            var r = Ue(e)
              , i = We(e, t, r)
              , o = "border-box" === T.css(e, "boxSizing", !1, r)
              , a = o;
            if (Re.test(i)) {
                if (!n)
                    return i;
                i = "auto"
            }
            return a = a && (v.boxSizingReliable() || i === e.style[t]),
            ("auto" === i || !parseFloat(i) && "inline" === T.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
            a = !0),
            (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        }
        function tt(e, t, n, r, i) {
            return new tt.prototype.init(e,t,n,r,i)
        }
        T.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = J(t), u = Ve.test(t), c = e.style;
                    if (u || (t = Ke(s)),
                    a = T.cssHooks[t] || T.cssHooks[s],
                    void 0 === n)
                        return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                    "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i),
                    o = "number"),
                    null != n && n == n && ("number" === o && (n += i && i[3] || (T.cssNumber[s] ? "" : "px")),
                    v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                    a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = J(t);
                return Ve.test(t) || (t = Ke(s)),
                (a = T.cssHooks[t] || T.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = We(e, t, r)),
                "normal" === i && t in Xe && (i = Xe[t]),
                "" === n || n ? (o = parseFloat(i),
                !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }),
        T.each(["height", "width"], function(e, t) {
            T.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n)
                        return !Ge.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, ze, function() {
                            return et(e, t, r)
                        })
                },
                set: function(e, n, r) {
                    var i, o = Ue(e), a = "border-box" === T.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                    return a && v.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)),
                    s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                    n = T.css(e, t)),
                    Qe(0, n, s)
                }
            }
        }),
        T.cssHooks.marginLeft = Be(v.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        T.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            T.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                        i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            "margin" !== e && (T.cssHooks[e + t].set = Qe)
        }),
        T.fn.extend({
            css: function(e, t) {
                return G(this, function(e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = Ue(e),
                        i = t.length; a < i; a++)
                            o[t[a]] = T.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        T.Tween = tt,
        tt.prototype = {
            constructor: tt,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                this.prop = n,
                this.easing = i || T.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = o || (T.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = tt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                this
            }
        },
        tt.prototype.init.prototype = tt.prototype,
        tt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        T.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        T.fx = tt.prototype.init,
        T.fx.step = {};
        var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
        function at() {
            rt && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, T.fx.interval),
            T.fx.tick())
        }
        function st() {
            return n.setTimeout(function() {
                nt = void 0
            }),
            nt = Date.now()
        }
        function ut(e, t) {
            var n, r = 0, i = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
            i
        }
        function ct(e, t, n) {
            for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e))
                    return r
        }
        function lt(e, t, n) {
            var r, i, o = 0, a = lt.prefilters.length, s = T.Deferred().always(function() {
                delete u.elem
            }), u = function() {
                if (i)
                    return !1;
                for (var t = nt || st(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++)
                    c.tweens[o].run(r);
                return s.notifyWith(e, [c, r, n]),
                r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]),
                s.resolveWith(e, [c]),
                !1)
            }, c = s.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = T.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0
                      , r = t ? c.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; n < r; n++)
                        c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]),
                    s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
                    this
                }
            }), l = c.props;
            for (!function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = J(n)],
                    o = e[n],
                    Array.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                    n !== r && (e[r] = o,
                    delete e[n]),
                    (a = T.cssHooks[r]) && "expand"in a)
                        for (n in o = a.expand(o),
                        delete e[r],
                        o)
                            n in e || (e[n] = o[n],
                            t[n] = i);
                    else
                        t[r] = i
            }(l, c.opts.specialEasing); o < a; o++)
                if (r = lt.prefilters[o].call(c, e, l, c.opts))
                    return y(r.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                    r;
            return T.map(l, ct, c),
            y(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            T.fx.timer(T.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c
        }
        T.Animation = T.extend(lt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                y(e) ? (t = e,
                e = ["*"]) : e = e.match(P);
                for (var n, r = 0, i = e.length; r < i; r++)
                    n = e[r],
                    lt.tweeners[n] = lt.tweeners[n] || [],
                    lt.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, c, l, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, g = e.nodeType && ae(e), m = Q.get(e, "fxshow");
                for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || s()
                }
                ),
                a.unqueued++,
                d.always(function() {
                    d.always(function() {
                        a.unqueued--,
                        T.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                t)
                    if (i = t[r],
                    it.test(i)) {
                        if (delete t[r],
                        o = o || "toggle" === i,
                        i === (g ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r])
                                continue;
                            g = !0
                        }
                        p[r] = m && m[r] || T.style(e, r)
                    }
                if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    null == (c = m && m.display) && (c = Q.get(e, "display")),
                    "none" === (l = T.css(e, "display")) && (c ? l = c : (fe([e], !0),
                    c = e.style.display || c,
                    l = T.css(e, "display"),
                    fe([e]))),
                    ("inline" === l || "inline-block" === l && null != c) && "none" === T.css(e, "float") && (u || (d.done(function() {
                        h.display = c
                    }),
                    null == c && (l = h.display,
                    c = "none" === l ? "" : l)),
                    h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                    d.always(function() {
                        h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                    })),
                    u = !1,
                    p)
                        u || (m ? "hidden"in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
                            display: c
                        }),
                        o && (m.hidden = !g),
                        g && fe([e], !0),
                        d.done(function() {
                            for (r in g || fe([e]),
                            Q.remove(e, "fxshow"),
                            p)
                                T.style(e, r, p[r])
                        })),
                        u = ct(g ? m[r] : 0, r, d),
                        r in m || (m[r] = u.start,
                        g && (u.end = u.start,
                        u.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
            }
        }),
        T.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? T.extend({}, e) : {
                complete: n || !n && t || y(e) && e,
                duration: e,
                easing: n && t || t && !y(t) && t
            };
            return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                y(r.old) && r.old.call(this),
                r.queue && T.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        T.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = T.isEmptyObject(e)
                  , o = T.speed(t, n, r)
                  , a = function() {
                    var t = lt(this, T.extend({}, e), o);
                    (i || Q.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , i = null != e && e + "queueHooks"
                      , o = T.timers
                      , a = Q.get(this);
                    if (i)
                        a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a)
                            a[i] && a[i].stop && ot.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                        o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                        t = !1,
                        o.splice(i, 1));
                    !t && n || T.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each(function() {
                    var t, n = Q.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = T.timers, a = r ? r.length : 0;
                    for (n.finish = !0,
                    T.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length; t--; )
                        o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                        o.splice(t, 1));
                    for (t = 0; t < a; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        T.each(["toggle", "show", "hide"], function(e, t) {
            var n = T.fn[t];
            T.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
            }
        }),
        T.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            T.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        T.timers = [],
        T.fx.tick = function() {
            var e, t = 0, n = T.timers;
            for (nt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || T.fx.stop(),
            nt = void 0
        }
        ,
        T.fx.timer = function(e) {
            T.timers.push(e),
            T.fx.start()
        }
        ,
        T.fx.interval = 13,
        T.fx.start = function() {
            rt || (rt = !0,
            at())
        }
        ,
        T.fx.stop = function() {
            rt = null
        }
        ,
        T.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        T.fn.delay = function(e, t) {
            return e = T.fx && T.fx.speeds[e] || e,
            t = t || "fx",
            this.queue(t, function(t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function() {
                    n.clearTimeout(i)
                }
            })
        }
        ,
        function() {
            var e = a.createElement("input")
              , t = a.createElement("select").appendChild(a.createElement("option"));
            e.type = "checkbox",
            v.checkOn = "" !== e.value,
            v.optSelected = t.selected,
            (e = a.createElement("input")).value = "t",
            e.type = "radio",
            v.radioValue = "t" === e.value
        }();
        var ft, dt = T.expr.attrHandle;
        T.fn.extend({
            attr: function(e, t) {
                return G(this, T.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    T.removeAttr(this, e)
                })
            }
        }),
        T.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ft : void 0)),
                    void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                    n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++]; )
                        e.removeAttribute(n)
            }
        }),
        ft = {
            set: function(e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = dt[t] || T.find.attr;
            dt[t] = function(e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = dt[a],
                dt[a] = i,
                i = null != n(e, t, r) ? a : null,
                dt[a] = o),
                i
            }
        });
        var pt = /^(?:input|select|textarea|button)$/i
          , ht = /^(?:a|area)$/i;
        function gt(e) {
            return (e.match(P) || []).join(" ")
        }
        function mt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function vt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
        }
        T.fn.extend({
            prop: function(e, t) {
                return G(this, T.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[T.propFix[e] || e]
                })
            }
        }),
        T.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t,
                    i = T.propHooks[t]),
                    void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = T.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        v.optSelected || (T.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            T.propFix[this.toLowerCase()] = this
        }),
        T.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (y(e))
                    return this.each(function(t) {
                        T(this).addClass(e.call(this, t, mt(this)))
                    });
                if ((t = vt(e)).length)
                    for (; n = this[u++]; )
                        if (i = mt(n),
                        r = 1 === n.nodeType && " " + gt(i) + " ") {
                            for (a = 0; o = t[a++]; )
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = gt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (y(e))
                    return this.each(function(t) {
                        T(this).removeClass(e.call(this, t, mt(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((t = vt(e)).length)
                    for (; n = this[u++]; )
                        if (i = mt(n),
                        r = 1 === n.nodeType && " " + gt(i) + " ") {
                            for (a = 0; o = t[a++]; )
                                for (; r.indexOf(" " + o + " ") > -1; )
                                    r = r.replace(" " + o + " ", " ");
                            i !== (s = gt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                  , r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function(n) {
                    T(this).toggleClass(e.call(this, n, mt(this), t), t)
                }) : this.each(function() {
                    var t, i, o, a;
                    if (r)
                        for (i = 0,
                        o = T(this),
                        a = vt(e); t = a[i++]; )
                            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || ((t = mt(this)) && Q.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++]; )
                    if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var yt = /\r/g;
        T.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = y(e),
                this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
            }
        }),
        T.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = T.find.attr(e, "value");
                        return null != t ? t : gt(T.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (t = T(n).val(),
                                a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--; )
                            ((r = i[a]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        T.each(["radio", "checkbox"], function() {
            T.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = T.inArray(T(e).val(), t) > -1
                }
            },
            v.checkOn || (T.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }),
        v.focusin = "onfocusin"in n;
        var bt = /^(?:focusinfocus|focusoutblur)$/
          , wt = function(e) {
            e.stopPropagation()
        };
        T.extend(T.event, {
            trigger: function(e, t, r, i) {
                var o, s, u, c, l, f, d, p, g = [r || a], m = h.call(e, "type") ? e.type : e, v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = u = r = r || a,
                3 !== r.nodeType && 8 !== r.nodeType && !bt.test(m + T.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."),
                m = v.shift(),
                v.sort()),
                l = m.indexOf(":") < 0 && "on" + m,
                (e = e[T.expando] ? e : new T.Event(m,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
                e.namespace = v.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = r),
                t = null == t ? [e] : T.makeArray(t, [e]),
                d = T.event.special[m] || {},
                i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                    if (!i && !d.noBubble && !b(r)) {
                        for (c = d.delegateType || m,
                        bt.test(c + m) || (s = s.parentNode); s; s = s.parentNode)
                            g.push(s),
                            u = s;
                        u === (r.ownerDocument || a) && g.push(u.defaultView || u.parentWindow || n)
                    }
                    for (o = 0; (s = g[o++]) && !e.isPropagationStopped(); )
                        p = s,
                        e.type = o > 1 ? c : d.bindType || m,
                        (f = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && f.apply(s, t),
                        (f = l && s[l]) && f.apply && Y(s) && (e.result = f.apply(s, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = m,
                    i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !Y(r) || l && y(r[m]) && !b(r) && ((u = r[l]) && (r[l] = null),
                    T.event.triggered = m,
                    e.isPropagationStopped() && p.addEventListener(m, wt),
                    r[m](),
                    e.isPropagationStopped() && p.removeEventListener(m, wt),
                    T.event.triggered = void 0,
                    u && (r[l] = u)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var r = T.extend(new T.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                T.event.trigger(r, null, t)
            }
        }),
        T.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    T.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return T.event.trigger(e, t, n, !0)
            }
        }),
        v.focusin || T.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                T.event.simulate(t, e.target, T.event.fix(e))
            };
            T.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this
                      , i = Q.access(r, t);
                    i || r.addEventListener(e, n, !0),
                    Q.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this
                      , i = Q.access(r, t) - 1;
                    i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0),
                    Q.remove(r, t))
                }
            }
        });
        var xt = n.location
          , Ct = Date.now()
          , Tt = /\?/;
        T.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e),
            t
        }
        ;
        var kt = /\[\]$/
          , _t = /\r?\n/g
          , St = /^(?:submit|button|image|reset|file)$/i
          , Et = /^(?:input|select|textarea|keygen)/i;
        function Dt(e, t, n, r) {
            var i;
            if (Array.isArray(t))
                T.each(t, function(t, i) {
                    n || kt.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                });
            else if (n || "object" !== C(t))
                r(e, t);
            else
                for (i in t)
                    Dt(e + "[" + i + "]", t[i], n, r)
        }
        T.param = function(e, t) {
            var n, r = [], i = function(e, t) {
                var n = y(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(e) || e.jquery && !T.isPlainObject(e))
                T.each(e, function() {
                    i(this.name, this.value)
                });
            else
                for (n in e)
                    Dt(n, e[n], t, i);
            return r.join("&")
        }
        ,
        T.fn.extend({
            serialize: function() {
                return T.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = T.prop(this, "elements");
                    return e ? T.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !T(this).is(":disabled") && Et.test(this.nodeName) && !St.test(e) && (this.checked || !de.test(e))
                }).map(function(e, t) {
                    var n = T(this).val();
                    return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(_t, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(_t, "\r\n")
                    }
                }).get()
            }
        });
        var At = /%20/g
          , Nt = /#.*$/
          , jt = /([?&])_=[^&]*/
          , Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , It = /^(?:GET|HEAD)$/
          , Mt = /^\/\//
          , Ot = {}
          , qt = {}
          , Ht = "*/".concat("*")
          , Pt = a.createElement("a");
        function $t(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var r, i = 0, o = t.toLowerCase().match(P) || [];
                if (y(n))
                    for (; r = o[i++]; )
                        "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function Rt(e, t, n, r) {
            var i = {}
              , o = e === qt;
            function a(s) {
                var u;
                return i[s] = !0,
                T.each(e[s] || [], function(e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c),
                    a(c),
                    !1)
                }),
                u
            }
            return a(t.dataTypes[0]) || !i["*"] && a("*")
        }
        function Ut(e, t) {
            var n, r, i = T.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && T.extend(!0, e, r),
            e
        }
        Pt.href = xt.href,
        T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ht,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": T.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Ut(Ut(e, T.ajaxSettings), t) : Ut(T.ajaxSettings, e)
            },
            ajaxPrefilter: $t(Ot),
            ajaxTransport: $t(qt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var r, i, o, s, u, c, l, f, d, p, h = T.ajaxSetup({}, t), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? T(g) : T.event, v = T.Deferred(), y = T.Callbacks("once memory"), b = h.statusCode || {}, w = {}, x = {}, C = "canceled", k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!s)
                                for (s = {}; t = Lt.exec(o); )
                                    s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return l ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                        w[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (h.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (l)
                                k.always(e[k.status]);
                            else
                                for (t in e)
                                    b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return r && r.abort(t),
                        _(0, t),
                        this
                    }
                };
                if (v.promise(k),
                h.url = ((e || h.url || xt.href) + "").replace(Mt, xt.protocol + "//"),
                h.type = t.method || t.type || h.method || h.type,
                h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""],
                null == h.crossDomain) {
                    c = a.createElement("a");
                    try {
                        c.href = h.url,
                        c.href = c.href,
                        h.crossDomain = Pt.protocol + "//" + Pt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)),
                Rt(Ot, h, t, k),
                l)
                    return k;
                for (d in (f = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
                h.type = h.type.toUpperCase(),
                h.hasContent = !It.test(h.type),
                i = h.url.replace(Nt, ""),
                h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (p = h.url.slice(i.length),
                h.data && (h.processData || "string" == typeof h.data) && (i += (Tt.test(i) ? "&" : "?") + h.data,
                delete h.data),
                !1 === h.cache && (i = i.replace(jt, "$1"),
                p = (Tt.test(i) ? "&" : "?") + "_=" + Ct++ + p),
                h.url = i + p),
                h.ifModified && (T.lastModified[i] && k.setRequestHeader("If-Modified-Since", T.lastModified[i]),
                T.etag[i] && k.setRequestHeader("If-None-Match", T.etag[i])),
                (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType),
                k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]),
                h.headers)
                    k.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || l))
                    return k.abort();
                if (C = "abort",
                y.add(h.complete),
                k.done(h.success),
                k.fail(h.error),
                r = Rt(qt, h, t, k)) {
                    if (k.readyState = 1,
                    f && m.trigger("ajaxSend", [k, h]),
                    l)
                        return k;
                    h.async && h.timeout > 0 && (u = n.setTimeout(function() {
                        k.abort("timeout")
                    }, h.timeout));
                    try {
                        l = !1,
                        r.send(w, _)
                    } catch (e) {
                        if (l)
                            throw e;
                        _(-1, e)
                    }
                } else
                    _(-1, "No Transport");
                function _(e, t, a, s) {
                    var c, d, p, w, x, C = t;
                    l || (l = !0,
                    u && n.clearTimeout(u),
                    r = void 0,
                    o = s || "",
                    k.readyState = e > 0 ? 4 : 0,
                    c = e >= 200 && e < 300 || 304 === e,
                    a && (w = function(e, t, n) {
                        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                            u.shift(),
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in s)
                                if (s[i] && s[i].test(r)) {
                                    u.unshift(i);
                                    break
                                }
                        if (u[0]in n)
                            o = u[0];
                        else {
                            for (i in n) {
                                if (!u[0] || e.converters[i + " " + u[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o)
                            return o !== u[0] && u.unshift(o),
                            n[o]
                    }(h, k, a)),
                    w = function(e, t, n, r) {
                        var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
                        if (l[1])
                            for (a in e.converters)
                                c[a.toLowerCase()] = e.converters[a];
                        for (o = l.shift(); o; )
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            u = o,
                            o = l.shift())
                                if ("*" === o)
                                    o = u;
                                else if ("*" !== u && u !== o) {
                                    if (!(a = c[u + " " + o] || c["* " + o]))
                                        for (i in c)
                                            if ((s = i.split(" "))[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                                !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0],
                                                l.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws)
                                            t = a(t);
                                        else
                                            try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + u + " to " + o
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, w, k, c),
                    c ? (h.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (T.lastModified[i] = x),
                    (x = k.getResponseHeader("etag")) && (T.etag[i] = x)),
                    204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state,
                    d = w.data,
                    c = !(p = w.error))) : (p = C,
                    !e && C || (C = "error",
                    e < 0 && (e = 0))),
                    k.status = e,
                    k.statusText = (t || C) + "",
                    c ? v.resolveWith(g, [d, C, k]) : v.rejectWith(g, [k, C, p]),
                    k.statusCode(b),
                    b = void 0,
                    f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [k, h, c ? d : p]),
                    y.fireWith(g, [k, C]),
                    f && (m.trigger("ajaxComplete", [k, h]),
                    --T.active || T.event.trigger("ajaxStop")))
                }
                return k
            },
            getJSON: function(e, t, n) {
                return T.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return T.get(e, void 0, t, "script")
            }
        }),
        T.each(["get", "post"], function(e, t) {
            T[t] = function(e, n, r, i) {
                return y(n) && (i = i || r,
                r = n,
                n = void 0),
                T.ajax(T.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, T.isPlainObject(e) && e))
            }
        }),
        T._evalUrl = function(e) {
            return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        T.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])),
                t = T(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(e) {
                return y(e) ? this.each(function(t) {
                    T(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = T(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = y(e);
                return this.each(function(n) {
                    T(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    T(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        T.expr.pseudos.hidden = function(e) {
            return !T.expr.pseudos.visible(e)
        }
        ,
        T.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        T.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Ft = {
            0: 200,
            1223: 204
        }
          , Wt = T.ajaxSettings.xhr();
        v.cors = !!Wt && "withCredentials"in Wt,
        v.ajax = Wt = !!Wt,
        T.ajaxTransport(function(e) {
            var t, r;
            if (v.cors || Wt && !e.crossDomain)
                return {
                    send: function(i, o) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (a in e.xhrFields)
                                s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                        e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                        i)
                            s.setRequestHeader(a, i[a]);
                        t = function(e) {
                            return function() {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                                "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }
                        ,
                        s.onload = t(),
                        r = s.onerror = s.ontimeout = t("error"),
                        void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && n.setTimeout(function() {
                                t && r()
                            })
                        }
                        ,
                        t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }),
        T.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return T.globalEval(e),
                    e
                }
            }
        }),
        T.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        T.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain)
                return {
                    send: function(r, i) {
                        t = T("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && i("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        a.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
        });
        var Bt, Gt = [], Vt = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Gt.pop() || T.expando + "_" + Ct++;
                return this[e] = !0,
                e
            }
        }),
        T.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i, o, a, s = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                s ? e[s] = e[s].replace(Vt, "$1" + i) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                e.converters["script json"] = function() {
                    return a || T.error(i + " was not called"),
                    a[0]
                }
                ,
                e.dataTypes[0] = "json",
                o = n[i],
                n[i] = function() {
                    a = arguments
                }
                ,
                r.always(function() {
                    void 0 === o ? T(n).removeProp(i) : n[i] = o,
                    e[i] && (e.jsonpCallback = t.jsonpCallback,
                    Gt.push(i)),
                    a && y(o) && o(a[0]),
                    a = o = void 0
                }),
                "script"
        }),
        v.createHTMLDocument = ((Bt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === Bt.childNodes.length),
        T.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (v.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href,
            t.head.appendChild(r)) : t = a),
            o = !n && [],
            (i = j.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
            o && o.length && T(o).remove(),
            T.merge([], i.childNodes)));
            var r, i, o
        }
        ,
        T.fn.load = function(e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return s > -1 && (r = gt(e.slice(s)),
            e = e.slice(0, s)),
            y(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (i = "POST"),
            a.length > 0 && T.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            T.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        T.expr.pseudos.animated = function(e) {
            return T.grep(T.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        T.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, c = T.css(e, "position"), l = T(e), f = {};
                "static" === c && (e.style.position = "relative"),
                s = l.offset(),
                o = T.css(e, "top"),
                u = T.css(e, "left"),
                ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (a = (r = l.position()).top,
                i = r.left) : (a = parseFloat(o) || 0,
                i = parseFloat(u) || 0),
                y(t) && (t = t.call(e, n, T.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + i),
                "using"in t ? t.using.call(e, f) : l.css(f)
            }
        },
        T.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        T.offset.setOffset(this, e, t)
                    });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === T.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0),
                        i.left += T.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - T.css(r, "marginTop", !0),
                        left: t.left - i.left - T.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === T.css(e, "position"); )
                        e = e.offsetParent;
                    return e || Ce
                })
            }
        }),
        T.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function(r) {
                return G(this, function(e, r, i) {
                    var o;
                    if (b(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                        return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                }, e, r, arguments.length)
            }
        }),
        T.each(["top", "left"], function(e, t) {
            T.cssHooks[t] = Be(v.pixelPosition, function(e, n) {
                if (n)
                    return n = We(e, t),
                    Re.test(n) ? T(e).position()[t] + "px" : n
            })
        }),
        T.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            T.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                T.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i)
                      , s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return G(this, function(t, n, i) {
                        var o;
                        return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                        Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, s) : T.style(t, n, i, s)
                    }, t, a ? i : void 0, a)
                }
            })
        }),
        T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            T.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        T.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        T.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        T.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            y(e))
                return r = u.call(arguments, 2),
                (i = function() {
                    return e.apply(t || this, r.concat(u.call(arguments)))
                }
                ).guid = e.guid = e.guid || T.guid++,
                i
        }
        ,
        T.holdReady = function(e) {
            e ? T.readyWait++ : T.ready(!0)
        }
        ,
        T.isArray = Array.isArray,
        T.parseJSON = JSON.parse,
        T.nodeName = N,
        T.isFunction = y,
        T.isWindow = b,
        T.camelCase = J,
        T.type = C,
        T.now = Date.now,
        T.isNumeric = function(e) {
            var t = T.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        void 0 === (r = function() {
            return T
        }
        .apply(t, [])) || (e.exports = r);
        var zt = n.jQuery
          , Xt = n.$;
        return T.noConflict = function(e) {
            return n.$ === T && (n.$ = Xt),
            e && n.jQuery === T && (n.jQuery = zt),
            T
        }
        ,
        i || (n.jQuery = n.$ = T),
        T
    })
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        var n, r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , o = {};
        o.ntpApis = new ChromeWebUIApis({
            methods: "setNtpPref,getNtpPref,openIncognitoWindow,openWindow",
            onerror: function(e) {},
            onbefore: function(e) {},
            onafter: function(e) {}
        }),
        o.api = {
            GetSID: function() {
                if (o.api.sid)
                    return o.api.sid;
                try {
                    return o.api.sid = external.GetSID(window),
                    o.api.sid
                } catch (e) {
                    return ""
                }
            },
            GetMID: function() {
                return o.api.mid ? o.api.mid : (o.api.mid = o.api.GetSID() && external.GetMID(o.api.sid),
                o.api.mid)
            },
            GetMID2: function(e) {
                o.api.mid2 ? e && e(o.api.mid2) : external.AppCmd(o.api.GetSID(), "", "GetMID2", "", "", function(t, n) {
                    o.api.mid2 = n,
                    e && e(o.api.mid2)
                })
            },
            GetVersion: function() {
                return o.api.ver ? o.api.ver : (o.api.ver = o.api.GetSID() && external.GetVersion(o.api.sid),
                o.api.ver)
            },
            MakeUID: function(e, t) {
                var n, r, i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), o = [];
                if (t = t || i.length,
                e)
                    for (n = 0; n < e; n++)
                        o[n] = i[0 | Math.random() * t];
                else
                    for (o[8] = o[13] = o[18] = o[23] = "-",
                    o[14] = "4",
                    n = 0; n < 36; n++)
                        o[n] || (r = 0 | 16 * Math.random(),
                        o[n] = i[19 == n ? 3 & r | 8 : r]);
                return o.join("")
            }
        },
        o.cookie = {
            get: function(e) {
                for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                    var i = n[r].trim();
                    if (0 == i.indexOf(t))
                        return i.substring(t.length, i.length)
                }
                return ""
            },
            set: function(e, t, n) {
                var r = new Date;
                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
                var i = "expires=" + r.toGMTString();
                document.cookie = e + "=" + t + "; " + i
            }
        },
        o.storage = {
            get: function(e) {
                try {
                    return JSON.parse(localStorage[e] || "{}")
                } catch (e) {
                    return {}
                }
            },
            set: function(e, t, n) {
                var r = this.get(e);
                r[t] = n,
                this.setData(e, r)
            },
            setData: function(e, t) {
                localStorage[e] = JSON.stringify(t)
            }
        },
        o.DC = (n = "__ajax_cache",
        {
            storage: r = {
                get: function(e) {
                    try {
                        return JSON.parse(localStorage[e] || "{}")
                    } catch (e) {
                        return {}
                    }
                },
                set: function(e, t) {
                    localStorage[e] = JSON.stringify(t)
                },
                getCache: function(e, t) {
                    var i = r.get(n)[e];
                    if (i) {
                        t = void 0 === t ? 36e5 : t;
                        var o = Date.now() - i.expires;
                        if (!(o < 0 || o > t) && i.data)
                            return i.data
                    }
                    return null
                },
                setCache: function(e, t) {
                    var i = r.get(n);
                    i[e] = {
                        data: t,
                        expires: Date.now()
                    },
                    r.set(n, i)
                }
            },
            get: function(e, n, i, o, a, s, u) {
                var c;
                (c = r.getCache(e, o)) ? !1 !== a && i(c) : t.ajax({
                    url: e,
                    data: n,
                    dataType: "jsonp",
                    success: function(t, n) {
                        r.setCache(e, t),
                        i(t)
                    },
                    error: function(t, n, o) {
                        u && (c = r.getCache(e, Number.MAX_VALUE)) ? i(c) : s && s(t, n, o)
                    }
                })
            }
        }),
        o.StringH = {
            byteLen: function(e) {
                return (e || "").replace(/[^\x00-\xff]/g, "--").length
            },
            subByte: function(e, t, n) {
                return o.StringH.byteLen(e) <= t ? e : (n = void 0 === n ? "..." : n,
                t -= o.StringH.byteLen(n),
                e.substr(0, t).replace(/([^\x00-\xff])/g, "$1 ").substr(0, t).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "$1") + n)
            }
        },
        o.filterHtml = function(e) {
            return (e = (e = (e || "").toString()).replace(/"/g, "&quot;")).replace(/<[^>]*>/g, "")
        }
        ,
        o.htmlEncode = function(e) {
            var t = document.createElement("div")
              , n = document.createTextNode(e);
            t.appendChild(n);
            var r = t.innerHTML;
            return r = r.replace(/"/g, "&quot;")
        }
        ,
        o.checkUrlProtocol = function(e) {
            return !e || "http://" != e.substr(0, 7) && "https://" != e.substr(0, 8) && "ftp://" != e.substr(0, 6) && "ftps://" != e.substr(0, 7) && "file://" != e.substr(0, 7) ? "" : e
        }
        ,
        o.openUrl = function(e) {
            setTimeout(function() {
                location.href = e
            })
        }
        ,
        o.quickSort = function(e, t, n) {
            if (e.length <= 1)
                return e;
            var r = Math.floor(e.length / 2)
              , i = e.splice(r, 1)[0]
              , a = t ? i[t] : i;
            a = n ? parseInt(a) : a;
            for (var s = [], u = [], c = 0; c < e.length; c++) {
                var l = t ? e[c][t] : e[c];
                (l = n ? parseInt(l) : l) < a ? s.push(e[c]) : u.push(e[c])
            }
            return o.quickSort(s, t, n).concat([i], o.quickSort(u, t, n))
        }
        ,
        o.getSwitchMode = function(e) {
            return t('.mode-switch a[data-mode="' + e + '"]')
        }
        ,
        o.Stat = {
            init: function() {
                this.allPV(),
                this.bindSoHotwordClickPV(),
                this.bindWallpaperClickPV(),
                t(".wrap-dial").is(":visible") && this.screenPV(this.getScreen())
            },
            allPV: function() {
                this.send("40.7042.gif"),
                o.storage.get("wallpaper_options")["enable-blank-page"] || this.send("472.9031.gif"),
                null != loadTimeData.data.AddressNewStyle && (1 == loadTimeData.data.AddressNewStyle ? this.send("515.1815.gif") : this.send("515.4158.gif"))
            },
            newPagesPv: function() {
                // this.sendTime("830.6897.gif")
            },
            httpClickPv: function() {
                this.sendTime("830.5355.gif")
            },
            searchPV: function() {
                this.send("41.1301.gif"),
                this.sendTime("830.1546.gif")
            },
            getScreen: function() {
                var e;
                try {
                    e = t(".sliders>a.selected").attr("class").replace("selected", "").replace(/\s+/g, "")
                } catch (e) {}
                return e
            },
            screenPV: function(e) {
                var t;
                switch (e) {
                case "mosts":
                    t = "472.587.gif";
                    break;
                case "customs":
                    t = "472.6958.gif"
                }
                t && this.send(t)
            },
            bindSoHotwordClickPV: function() {
                var e = this;
                t(document).delegate(".so-hotword a[href]", "click", function() {
                    var n;
                    n = /^ad_/.test(t(this).data("from")) ? "357.7519.gif" : "357.4373.gif",
                    e.send(n)
                })
            },
            bindWallpaperClickPV: function() {
                var e = this;
                t(document).delegate(".wallpaper-push-links a.btn[href], .wallpaper-push-links a.img[href]", "click", function() {
                    e.send("388.6430.gif"),
                    e.send("514.7670.gif"),
                    "" != t(this).data("imptk") && "undefined" != t(this).data("imptk") || e.send("758.8320.gif")
                }),
                t(document).delegate(".angle-right-bottom-ad a.angle-ad-link[href]", "click", function() {
                    e.send("388.1224.gif")
                })
            },
            send: function(e, t) {
                var n = [];
                if ("[object String]" == Object.prototype.toString.call(e))
                    n.push(e);
                else {
                    if ("[object Array]" != Object.prototype.toString.call(e))
                        return;
                    n = e
                }
                n.forEach(function(e) {
                    var n = "";
                    if (t && "object" == (void 0 === t ? "undefined" : i(t)))
                        for (var r in t)
                            n += r + "=" + t[r] + "&";
                    (new Image).src = "https://dd.browser.360.cn/static/a/" + e + "?" + n + "mid=" + o.api.GetMID() + "&" + Date.now() + Math.random().toString().replace("0.", "").substr(0, 10)
                })
            },
            sendTime: function(e, t) {
                var n = [];
                if ("[object String]" == Object.prototype.toString.call(e))
                    n.push(e);
                else {
                    if ("[object Array]" != Object.prototype.toString.call(e))
                        return;
                    n = e
                }
                n.forEach(function(e) {
                    var n = "";
                    if (t && "object" == (void 0 === t ? "undefined" : i(t)))
                        for (var r in t)
                            n += r + "=" + t[r] + "&";
                    (new Image).src = "https://dd.browser.360.cn/static/a/" + e + "?" + n + "t=" + Date.now() + "&m=" + o.api.GetMID()
                })
            },
            setLog: function(e) {
                if (e)
                    for (var t = e.split(","), n = Math.random().toString().replace("0.", "").substr(0, 10), r = 0; r < t.length; r++)
                        (new Image).src = t[r] + (t[r].indexOf("?") > -1 ? "&" : "?") + n
            }
        },
        String.prototype.getHashCode = function() {
            var e, t = 1315423911;
            for (e = this.length - 1; e >= 0; e--)
                t ^= (t << 5) + this.charCodeAt(e) + (t >> 2);
            return 2147483647 & t
        }
        ,
        o.getLetterLogo = function(e) {
            var t = e.replace(/\/$/, "").getHashCode() % 12 + 1;
            return t >= 8 && (t = 1),
            t
        }
        ,
        o.getQueryObject = function(e) {
            var t = (e = null == e ? window.location.href : e).substring(e.lastIndexOf("?") + 1)
              , n = {};
            return t.replace(/([^?&=]+)=([^?&=]*)/g, function(e, t, r) {
                var i = decodeURIComponent(t)
                  , o = decodeURIComponent(r);
                return o = String(o),
                n[i] = o,
                e
            }),
            n
        }
        ,
        o.parseParam = function(e, t, n) {
            if (null == e)
                return "";
            var r = ""
              , a = void 0 === e ? "undefined" : i(e);
            if ("string" == a || "number" == a || "boolean" == a)
                r += "&" + t + "=" + (null == n || n ? encodeURIComponent(e) : e);
            else
                for (var s in e) {
                    var u = null == t ? s : t + (e instanceof Array ? "[" + s + "]" : "." + s);
                    r += o.parseParam(e[s], u, n)
                }
            return r
        }
        ,
        o.getTimeFromNow = function(e) {
            var t = (Date.now() - e) / 1e3;
            return t < 60 ? "刚刚更新" : t < 3600 ? (t / 60).toFixed(0) + "分钟前更新" : t < 86400 ? (t / 3600).toFixed(0) + "小时前更新" : t < 604800 ? (t / 86400).toFixed(0) + "天前更新" : t < 2592e3 ? (t / 604800).toFixed(0) + "周前更新" : ">1个月前更新"
        }
        ,
        o.setImgUrl = function(e, t) {
            t = t || "";
            var n = (e = e || "").match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/) || []
              , r = n[5] && n[5].split("/")
              , i = r && r[1] || "";
            return /^[0-9_]+$/.test(i) ? e.replace(i, t) : e
        }
        ,
        o.cutImg = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "160_90_"
              , n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "video") + "/" + t;
            return e ? e.replace(/(p\d*)\.(ssl\.)?(qhimg(s4)?)\.com\/(\w{2,}\/\d*_\d*_\d*\/)*/gi, "$1.$2$3.com/" + n + "/") : ""
        }
        ,
        o.isEmpty = function(e) {
            return "" === (e = t.trim(e)) || null == e || "null" === e
        }
        ,
        o.isNewer = function(e, t) {
            for (var n = e.split("."), r = t.split("."), i = Math.max(n.length, r.length), o = 0; o < i; o++) {
                var a = parseInt(n[o]) || 0
                  , s = parseInt(r[o]) || 0;
                if (a > s)
                    return !0;
                if (a < s)
                    return !1
            }
            return !0
        }
        ,
        o.customizeLog = function(e, n, r) {
            var i = {
                event_name: e,
                para: {
                    ver: VERSION,
                    v: o.api.GetVersion(),
                    act: e,
                    ct: "0"
                },
                extendOtherData: e
            };
            n.f && (n.f = encodeURIComponent(n.f)),
            t.extend(i.para, n),
            r && (i.el = r),
            se_monitor.customizeLog(i)
        }
        ,
        Date.prototype.Format = function(e) {
            if (e = e || "yyyy-MM-dd hh:mm:ss",
            "Invalid Date" == this)
                return "";
            var t = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))),
            t)
                new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
            return e
        }
        ,
        e.exports = o
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    e.exports = n.p + "img/387d1bda.png"
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n(4),
        n(5),
        n(6),
        n(7),
        n(8),
        n(30),
        window.VERSION = "1.0.0",
        n(31).SearchForm.init(),
        e(window).trigger("newpages:firstPageOnLoad")
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    !function() {
        if (void 0 === window.QIHOO_MONITOR) {
            var e = ["360.cn", "so.com", "leidian.com"]
              , t = function(n, i) {
                var o;
                !function() {
                    o = !0;
                    try {
                        var e = location.protocol.toLowerCase();
                        "http:" != e && "https:" != e || (o = !1)
                    } catch (e) {}
                }();
                var a = document
                  , s = navigator
                  , u = n.screen
                  , c = o ? "" : document.domain.toLowerCase()
                  , l = s.userAgent.toLowerCase()
                  , f = function(e) {
                    return e.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "")
                }
                  , d = function(e, t, n) {
                    e.addEventListener ? e && e.addEventListener(t, n, !1) : e && e.attachEvent("on" + t, n)
                }
                  , p = function(e, t, n) {
                    for (n = n || 5,
                    t = t.toUpperCase(); e && n-- > 0; ) {
                        if (e.tagName === t)
                            return e;
                        e = e.parentNode
                    }
                    return null
                }
                  , h = function(e) {
                    if (!("target"in e)) {
                        var t = e.srcElement || e.target;
                        t && 3 == t.nodeType && (t = t.parentNode),
                        e.target = t
                    }
                    return e
                }
                  , g = function() {
                    return {
                        isArray: function(e) {
                            return "Array" == function(e) {
                                return null != e && null != e.constructor ? Object.prototype.toString.call(e).slice(8, -1) : ""
                            }(e)
                        },
                        isObject: function(e) {
                            return null !== e && "object" == (void 0 === e ? "undefined" : r(e))
                        },
                        mix: function(e, t, n) {
                            for (var r in t)
                                !n && (e[r] || r in e) || (e[r] = t[r]);
                            return e
                        },
                        encodeURIJson: function(e) {
                            var t = [];
                            for (var n in e)
                                null != e[n] && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                            return t.join("&")
                        }
                    }
                }()
                  , m = function(e) {
                    try {
                        var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                        return (t = a.cookie.match(n)) ? unescape(t[2]) : ""
                    } catch (e) {
                        return ""
                    }
                }
                  , v = function(e, t, n) {
                    var r = (n = n || {}).expires;
                    "number" == typeof r && (r = new Date).setTime(r.getTime() + n.expires);
                    try {
                        a.cookie = e + "=" + escape(t) + (r ? ";expires=" + r.toGMTString() : "") + (n.path ? ";path=" + n.path : "") + (n.domain ? "; domain=" + n.domain : "")
                    } catch (e) {}
                }
                  , y = {
                    getColorDepth: function() {
                        return u.colorDepth + "-bit"
                    },
                    getLanguage: function() {
                        return (s.language || s.browserLanguage).toLowerCase()
                    },
                    getScreenSize: function() {
                        return u.width + "x" + u.height
                    },
                    getProject: function() {
                        return ""
                    },
                    getReferrer: function() {
                        var e = a.referrer || "";
                        return e.indexOf("pass") > -1 || e.indexOf("pwd") > -1 ? "403" : e
                    },
                    getBrowser: function() {
                        var e = {
                            "360se-ua": "360se",
                            TT: "tencenttraveler",
                            Maxthon: "maxthon",
                            GreenBrowser: "greenbrowser",
                            Sogou: "se 1.x / se 2.x",
                            TheWorld: "theworld"
                        };
                        for (var t in e)
                            if (l.indexOf(e[t]) > -1)
                                return t;
                        var r = !1;
                        try {
                            +external.twGetVersion(external.twGetSecurityID(n)).replace(/\./g, "") > 1013 && (r = !0)
                        } catch (e) {}
                        if (r)
                            return "360se-noua";
                        var i = l.match(/(msie|chrome|safari|firefox|opera|trident)/);
                        return "msie" == (i = i ? i[0] : "") ? i = l.match(/msie[^;]+/) + "" : "trident" == i && l.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/gi, function(e, t) {
                            i = "msie " + t
                        }),
                        i
                    },
                    getLocation: function() {
                        var e = "";
                        try {
                            e = location.href
                        } catch (t) {
                            (e = a.createElement("a")).href = "",
                            e = e.href
                        }
                        return e = /\.(s?htm|php)/.test(e) ? e : e.replace(/\/$/, "") + "/"
                    },
                    hash: function(e) {
                        for (var t = 0, n = 0, r = e.length - 1; r >= 0; r--) {
                            var i = parseInt(e.charCodeAt(r), 10);
                            0 != (n = 266338304 & (t = (t << 6 & 268435455) + i + (i << 14))) && (t ^= n >> 21)
                        }
                        return t
                    },
                    guid: function() {
                        for (var e = [s.appName, s.version, s.language || s.browserLanguage, s.platform, s.userAgent, u.width, "x", u.height, u.colorDepth, a.referrer].join(""), t = e.length, r = n.history.length; r; )
                            e += r-- ^ t++;
                        return 2147483647 * (Math.round(2147483647 * Math.random()) ^ y.hash(e))
                    },
                    getSid: function() {
                        var e = "__sid"
                          , t = m(e);
                        t || (t = [y.hash(o ? "" : a.domain), y.guid(), +new Date + Math.random()].join("."));
                        var n = {
                            expires: 60 * (y._activeTime || 30) * 1e3,
                            path: "/"
                        };
                        return v(e, t, n),
                        t
                    },
                    getMid: function() {
                        try {
                            return external.GetMID(external.GetSID(n))
                        } catch (e) {
                            return ""
                        }
                    },
                    getGid: function() {
                        var t = "__gid"
                          , n = m(t);
                        n ? ((n = n.split("."))[3] = (new Date).getTime(),
                        n[4] = (parseInt(n[4]) || 1) + 1,
                        n = n.join(".")) : n = [y.hash(o ? "" : a.domain), Math.floor(1e9 * Math.random()), (new Date).getTime(), (new Date).getTime(), 1].join(".");
                        var r = {
                            expires: 63072e6,
                            path: "/"
                        };
                        if (e.length)
                            for (var i = 0; i < e.length; i++) {
                                var s = e[i]
                                  , u = "." + s;
                                if (c.indexOf(u) > 0 && c.lastIndexOf(u) == c.length - u.length || c == s) {
                                    r.domain = u;
                                    break
                                }
                            }
                        return v(t, n, r),
                        n
                    },
                    getGuid: function() {
                        var t = "__guid"
                          , n = m(t);
                        if (!n) {
                            n = [y.hash(o ? "" : a.domain), y.guid(), +new Date + Math.random() + Math.random()].join(".");
                            var r = {
                                expires: 2592e7,
                                path: "/"
                            };
                            if (e.length)
                                for (var i = 0; i < e.length; i++) {
                                    var s = e[i]
                                      , u = "." + s;
                                    if (c.indexOf(u) > 0 && c.lastIndexOf(u) == c.length - u.length || c == s) {
                                        r.domain = u;
                                        break
                                    }
                                }
                            v(t, n, r)
                        }
                        return n
                    },
                    getCount: function() {
                        var e = "monitor_count"
                          , t = m(e);
                        return t = (parseInt(t) || 0) + 1,
                        v(e, t, {
                            expires: 864e5,
                            path: "/"
                        }),
                        function() {
                            return t
                        }
                    }(),
                    getFlashVer: function() {
                        var e = -1;
                        if (s.plugins && s.mimeTypes.length) {
                            var t = s.plugins["Shockwave Flash"];
                            t && t.description && (e = t.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
                        } else if (n.ActiveXObject && !n.opera)
                            try {
                                var r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                                if (r)
                                    e = r.GetVariable("$version").replace(/WIN/g, "").replace(/,/g, ".")
                            } catch (e) {}
                        return e = parseInt(e, 10)
                    },
                    getContainerId: function(e) {
                        var t, n;
                        for (w.areaIds && (t = new RegExp("^(" + w.areaIds.join("|") + ")$","ig")); e; ) {
                            if (e.attributes && ("bk"in e.attributes || "data-bk"in e.attributes)) {
                                if (n = e.getAttribute("bk") || e.getAttribute("data-bk"))
                                    return (n = "bk:" + n).substr(0, 100);
                                if (e.id)
                                    return (n = e.getAttribute("data-desc") || e.id).substr(0, 100)
                            } else if (t && e.id && t.test(e.id))
                                return (n = e.getAttribute("data-desc") || e.id).substr(0, 100);
                            e = e.parentNode
                        }
                        return ""
                    },
                    getText: function(e) {
                        var t = "";
                        return t = "input" == e.tagName.toLowerCase() ? e.getAttribute("text") || e.getAttribute("data-text") || e.value || e.title || "" : e.getAttribute("text") || e.getAttribute("data-text") || e.innerText || e.textContent || e.title || "",
                        f(t).substr(0, 100)
                    },
                    getHref: function(e) {
                        try {
                            return e.getAttribute("data-href") || e.href || ""
                        } catch (e) {
                            return ""
                        }
                    }
                }
                  , b = {
                    getBase: function() {
                        return {
                            p: y.getProject(),
                            u: y.getLocation(),
                            guid: y.getGuid(),
                            gid: y.getGid(),
                            sid: y.getSid(),
                            title: document.title,
                            mid: y.getMid()
                        }
                    },
                    getTrack: function(e) {
                        var t = y.getSid() == y.getSid() ? 1 : 0
                          , n = {
                            b: y.getBrowser(),
                            c: y.getCount(),
                            r: y.getReferrer(),
                            fl: y.getFlashVer(),
                            sd: y.getColorDepth(),
                            sr: y.getScreenSize(),
                            ul: y.getLanguage(),
                            ce: t
                        };
                        if (e) {
                            for (var r = [], i = 0, o = (e = e.split(",")).length; i < o; i++) {
                                var a = m(e[i]);
                                r.push(e[i] + "=" + encodeURIComponent(a))
                            }
                            n.uc = encodeURIComponent(r.join("&"))
                        }
                        return n
                    },
                    getClick: function(e) {
                        var t, n, r = (e = h(e || event)).target, i = r.tagName, o = y.getContainerId(r);
                        if (!r.type || "submit" != r.type && "button" != r.type)
                            return "AREA" == i ? {
                                f: y.getHref(r),
                                c: "area:" + r.parentNode.name,
                                cId: o
                            } : ("IMG" == i && (t = r),
                            !!(r = p(r, "A")) && (n = y.getText(r),
                            {
                                f: y.getHref(r),
                                c: n || (t ? t.src.match(/[^\/]+$/) : ""),
                                cId: o
                            }));
                        var a = p(r, "FORM")
                          , s = {};
                        if (a) {
                            var u = a.id || ""
                              , c = r.id;
                            if (s = {
                                f: a.action,
                                c: "form:" + (a.name || u),
                                cId: o
                            },
                            !("search-form" != u && "searchForm" != u || "searchBtn" != c && "search-btn" != c)) {
                                var l = x("kw") || x("search-kw") || x("kw1");
                                s.w = l ? l.value : ""
                            }
                        } else
                            s = {
                                f: y.getHref(r),
                                c: y.getText(r),
                                cId: o
                            };
                        return s
                    },
                    getKeydown: function(e) {
                        if (13 != (e = h(e || event)).keyCode)
                            return !1;
                        var t = e.target
                          , n = t.tagName
                          , r = y.getContainerId(t);
                        if ("INPUT" == n) {
                            var i = p(t, "FORM");
                            if (i) {
                                var o = i.id || ""
                                  , a = t.id
                                  , s = {
                                    f: i.action,
                                    c: "form:" + (i.name || o),
                                    cId: r
                                };
                                return "kw" != a && "search-kw" != a && "kw1" != a || (s.w = t.value),
                                s
                            }
                        }
                        return !1
                    }
                }
                  , w = {
                    trackUrl: null,
                    clickUrl: null,
                    areaIds: null
                }
                  , x = function(e) {
                    return document.getElementById(e)
                };
                return {
                    version: "v1.5.0 (2016.01.25)",
                    util: y,
                    data: b,
                    config: w,
                    sendLog: (n.__qihoo_monitor_imgs = {},
                    function(e) {
                        var t = "log_" + +new Date
                          , r = n.__qihoo_monitor_imgs[t] = new Image;
                        r.onload = r.onerror = function() {
                            n.__qihoo_monitor_imgs && n.__qihoo_monitor_imgs[t] && (n.__qihoo_monitor_imgs[t] = null,
                            delete n.__qihoo_monitor_imgs[t])
                        }
                        ,
                        r.src = e
                    }
                    ),
                    buildLog: function() {
                        var e = "";
                        return function(t, n) {
                            if (!1 !== t) {
                                t = t || {};
                                var r = b.getBase();
                                t = g.mix(r, t, !0);
                                var i = n + g.encodeURIJson(t);
                                if (i != e) {
                                    e = i,
                                    setTimeout(function() {
                                        e = ""
                                    }, 100);
                                    var o = g.encodeURIJson(t);
                                    o += "&t=" + +new Date,
                                    n = n.indexOf("?") > -1 ? n + "&" + o : n + "?" + o,
                                    this.sendLog(n)
                                }
                            }
                        }
                    }(),
                    log: function(e, t) {
                        var n = w[(t = t || "click") + "Url"];
                        n || alert("Error : the " + t + "url does not exist!"),
                        this.buildLog(e, n)
                    },
                    setConf: function(e, t) {
                        var n = {};
                        return g.isObject(e) ? n = e : n[e] = t,
                        this.config = g.mix(this.config, n, !0),
                        this
                    },
                    setUrl: function(e) {
                        return e && (this.util.getLocation = function() {
                            return e
                        }
                        ),
                        this
                    },
                    setProject: function(e) {
                        return e && (this.util.getProject = function() {
                            return e
                        }
                        ),
                        this
                    },
                    setId: function() {
                        for (var e, t = [], n = 0; e = arguments[n++]; )
                            g.isArray(e) ? t = t.concat(e) : t.push(e);
                        return this.setConf("areaIds", t),
                        this
                    },
                    getTrack: function(e) {
                        var t = this.data.getTrack(e);
                        return this.log(t, "track"),
                        this
                    },
                    getClickHeatmap: function(e, t) {
                        if (!this.heatmapTimer) {
                            this.heatmapTimer = !0;
                            var n = this
                              , r = [];
                            e = e || 10,
                            t = t || 5;
                            var i = 0
                              , o = function o(a) {
                                if (clearTimeout(i),
                                a || r.length > e) {
                                    if (!r.length)
                                        return;
                                    return n.log({
                                        pos: r.join(","),
                                        sr: y.getScreenSize()
                                    }, "clickHeatMap"),
                                    void (r = [])
                                }
                                i = setTimeout(function() {
                                    o(!0)
                                }, 60 * t * 1e3)
                            };
                            return d(a, "mousedown", function(e) {
                                var t = e.pageX + "." + e.pageY;
                                r.push(t),
                                o()
                            }),
                            this
                        }
                    },
                    getClickAndKeydown: function() {
                        var e = this;
                        return d(a, "mousedown", function(t) {
                            var n = e.data.getClick(t);
                            e.log(n, "click")
                        }),
                        d(a, "keydown", function(t) {
                            var n = e.data.getKeydown(t);
                            e.log(n, "click")
                        }),
                        t.getClickAndKeydown = function() {
                            return e
                        }
                        ,
                        this
                    },
                    setActiveTime: function(e) {
                        return y._activeTime = e,
                        this
                    }
                }
            }(window);
            t.setConf({
                trackUrl: "http://s.360.cn/qdas/s.htm",
                clickUrl: "http://s.360.cn/qdas/c.htm",
                clickHeatMapUrl: "http://s.360.cn/qdas/c.htm",
                wpoUrl: "http://s.360.cn/qdas/p.htm"
            }),
            window.QIHOO_MONITOR = t,
            void 0 === window.monitor && (window.monitor = t)
        }
    }()
}
, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    window.se_monitor = function(e) {
        var t = {};
        function n(e, t, n, r) {
            for (var i in t)
                !n && (e[i] || i in e) || (e[i] = t[i]);
            return e
        }
        var i = function(e) {
            try {
                var t, n = document, r = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                return (t = n.cookie.match(r)) ? unescape(t[2]) : ""
            } catch (e) {
                return ""
            }
        }
          , o = function(e, t, n) {
            var r = (n = n || {}).expires
              , i = document;
            "number" == typeof r && (r = new Date).setTime(r.getTime() + n.expires);
            try {
                i.cookie = e + "=" + escape(t) + (r ? ";expires=" + r.toGMTString() : "") + (n.path ? ";path=" + n.path : "") + (n.domain ? "; domain=" + n.domain : "")
            } catch (e) {}
        };
        function a() {
            var r = {
                p: e.util.getProject(),
                u: window.location.href,
                guid: e.util.getGuid(),
                id: e.util.getGuid(),
                mid: external.GetMID(external.GetSID(window)),
                pid: "",
                act: "track",
                ct: 0
            };
            return r = n(r, t, !0)
        }
        return {
            init: function(n) {
                if (!i("__mid"))
                    try {
                        var r = external && external.GetMID && external.GetSID && external.GetMID(external.GetSID(window)) || wdextcmd && wdextcmd.GetMid && wdextcmd.GetMid() || "";
                        if (r) {
                            var s = new Date;
                            s.setTime(s.getTime() + 2592e7),
                            o("__mid", r, {
                                expires: s,
                                path: "/"
                            })
                        }
                    } catch (e) {}
                e.setConf({
                    trackUrl: "https://tt.browser.360.cn/t.html",
                    clickUrl: "https://tt.browser.360.cn/c.html"
                }),
                t = n.basePar,
                e.setProject(n.project),
                e.data.getBase = a,
                e.getTrack(),
                !1 !== n.isOpenClick && e.getClickAndKeydown()
            },
            customizeLog: function(t) {
                if (t && "object" == (void 0 === t ? "undefined" : r(t))) {
                    var i = {};
                    t.extendOtherData ? ("track" == t.extendOtherData && (i = n(e.data.getTrack(), t.para, !0)),
                    "click" == t.extendOtherData && (i = n(e.data.getClick(t.el), t.para, !0))) : i = t.para,
                    e.log(i, t.event_name)
                }
            }
        }
    }(window.monitor)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        !function(t, n) {
            function r(t, n, r) {
                this.target = t,
                this.type = n,
                e.extend(this, r || {})
            }
            e.extend(r.prototype, {
                target: null,
                currentTarget: null,
                type: null,
                returnValue: void 0,
                preventDefault: function() {
                    this.returnValue = !1
                }
            });
            var i = {
                on: function(e, t, n) {
                    var r = e.__customListeners && e.__customListeners[t];
                    return r || (i.createEvents(e, t),
                    r = e.__customListeners && e.__customListeners[t]),
                    r.length < 2 && r.push(n),
                    !0
                },
                un: function(e, t, n) {
                    var r = e.__customListeners && e.__customListeners[t];
                    if (!r)
                        return !1;
                    if (n) {
                        var i = [].indexOf.call(r, n);
                        if (i < 0)
                            return !1;
                        r.splice(i, 1)
                    } else
                        r.length = 0;
                    return !0
                },
                fire: function(t, n, o) {
                    if (n instanceof r) {
                        var a = e.extend(n, o);
                        n = n.type
                    } else
                        a = new r(t,n,o);
                    var s = t.__customListeners && t.__customListeners[n];
                    s || (i.createEvents(t, n),
                    s = t.__customListeners && t.__customListeners[n]),
                    "*" != n && (s = s.concat(t.__customListeners["*"] || [])),
                    a.returnValue = void 0;
                    var u = a.currentTarget = t;
                    if (u && u["on" + a.type])
                        var c = u["on" + a.type].call(u, a);
                    for (var l = 0; l < s.length; l++)
                        s[l].call(u, a);
                    return !1 !== a.returnValue && (!1 !== c || void 0 !== a.returnValue)
                },
                createEvents: function(e, t) {
                    "string" == typeof (t = t || []) && (t = t.split(","));
                    for (var n = e.__customListeners = e.__customListeners || {}, r = 0; r < t.length; r++)
                        n[t[r]] = n[t[r]] || [];
                    return n["*"] = n["*"] || [],
                    e
                }
            };
            e.extend(t, {
                CETH: i
            })
        }(window),
        function(t, n) {
            var r = Array.prototype.slice;
            e.noop;
            var i = function n(i) {
                var o = this
                  , a = (i = i || {}).methods || [];
                e.extend(o, i),
                "string" == typeof a && (a = a.split(",")),
                a.forEach(function(e) {
                    o[e] = function() {
                        var n = r.call(arguments, 0)
                          , i = n.length && "string" == typeof n[n.length - 1] && n.pop()
                          , a = n.length && "function" == typeof n[n.length - 1] && n.pop();
                        a && (i || (i = "__" + +new Date + "_" + Math.floor(1e5 * Math.random())),
                        CETH.on(o, i, function(e) {
                            a.apply(o, e.data)
                        }),
                        function(e, n, r) {
                            for (var i, o = e.split("."), a = r || t; o.length && (i = o.shift()); )
                                o.length || void 0 === n ? a = i in a ? a[i] : a[i] = {} : a[i] = n
                        }(i, function(t) {
                            CETH.fire(o, "after", {
                                methodName: e,
                                data: t
                            }),
                            CETH.fire(o, i, {
                                data: r.call(arguments, 0)
                            })
                        }, t));
                        try {
                            CETH.fire(o, "before", {
                                methodName: e,
                                args: [i].concat(n)
                            }),
                            o.post(e, n.concat(i ? [i] : []))
                        } catch (n) {
                            CETH.fire(o, "error", {
                                methodName: e,
                                callback: t[i]
                            })
                        }
                    }
                }),
                CETH.createEvents(this, n.EVENTS)
            };
            i.EVENTS = "before,after,error",
            i.prototype = {
                post: function(e, t) {
                    try {
                        n.send(e, t)
                    } catch (e) {}
                }
            },
            e.extend(t, {
                ChromeWebUIApis: i
            })
        }(window, window.chrome)
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        !function(e) {
            e.extend(e.fn, {
                autocomplete: function(t, n) {
                    var r = "string" == typeof t;
                    return (n = e.extend({}, e.Autocompleter.defaults, {
                        url: r ? t : null,
                        data: r ? null : t,
                        delay: r ? e.Autocompleter.defaults.delay : 10,
                        max: n && !n.scroll ? 10 : 150
                    }, n)).highlight = n.highlight || function(e) {
                        return e
                    }
                    ,
                    n.formatMatch = n.formatMatch || n.formatItem,
                    this.each(function() {
                        new e.Autocompleter(this,n)
                    })
                },
                result: function(e) {
                    return this.bind("result", e)
                },
                search: function(e) {
                    return this.trigger("search", [e])
                },
                flushCache: function() {
                    return this.trigger("flushCache")
                },
                setOptions: function(e) {
                    return this.trigger("setOptions", [e])
                },
                unautocomplete: function() {
                    return this.trigger("unautocomplete")
                }
            }),
            e.Autocompleter = function(t, n) {
                var r, i, o = {
                    UP: 38,
                    DOWN: 40,
                    DEL: 46,
                    TAB: 9,
                    RETURN: 13,
                    ESC: 27,
                    COMMA: 188,
                    PAGEUP: 33,
                    PAGEDOWN: 34,
                    BACKSPACE: 8
                }, a = e(t).attr("autocomplete", "off").addClass(n.inputClass), s = "", u = e.Autocompleter.Cache(n), c = 0, l = {
                    mouseDownOnSelect: !1
                }, f = e.Autocompleter.Select(n, t, p, l);
                function d(e) {
                    return e.replace(/&?(adsession|key|clientkey|pass|psd|password|usr|user|username|usrname|shoujhao|mima|xingming|userid|usrid|shoujihao|addr|address|dizhi)=[^&]*(&|$)/gi, "")
                }
                function p() {
                    var r = f.selected();
                    if (!r)
                        return !1;
                    var i = r.keyword || r.result;
                    if (s = i,
                    n.multiple) {
                        var o = g(a.val());
                        if (o.length > 1) {
                            var u, c = n.multipleSeparator.length, l = e(t).selection().start, d = 0;
                            e.each(o, function(e, t) {
                                if (d += t.length,
                                l <= d)
                                    return u = e,
                                    !1;
                                d += c
                            }),
                            o[u] = i,
                            i = o.join(n.multipleSeparator)
                        }
                        i += n.multipleSeparator
                    }
                    return a.val(i),
                    v(),
                    a.trigger("result", [r]),
                    !0
                }
                function h(e, t) {
                    var r = a.val();
                    (t || r != s) && (s = r,
                    (r = m(r)).length >= n.minChars ? (a.addClass(n.loadingClass),
                    n.matchCase || (r = r.toLowerCase()),
                    b(r, y, v)) : (w(),
                    f.hide()))
                }
                function g(t) {
                    return t ? n.multiple ? e.map(t.split(n.multipleSeparator), function(n) {
                        return e.trim(t).length ? e.trim(n) : null
                    }) : [e.trim(t)] : [""]
                }
                function m(r) {
                    if (!n.multiple)
                        return r;
                    var i = g(r);
                    if (1 == i.length)
                        return i[0];
                    var o = e(t).selection().start;
                    return (i = o == r.length ? g(r) : g(r.replace(r.substring(o), "")))[i.length - 1]
                }
                function v() {
                    f.visible();
                    f.hide(),
                    e("#search-hotword").removeClass("open"),
                    clearTimeout(r),
                    w(),
                    n.mustMatch && a.search(function(e) {
                        if (!e)
                            if (n.multiple) {
                                var t = g(a.val()).slice(0, -1);
                                a.val(t.join(n.multipleSeparator) + (t.length ? n.multipleSeparator : ""))
                            } else
                                a.val(""),
                                a.trigger("result", null)
                    })
                }
                function y(r, u) {
                    u && u.length && c ? (!0 === n.zhida && function(t, n) {
                        var r = t
                          , i = n[0].value;
                        if (r.length < 2)
                            return;
                        /^[\x00-\xff]+$/.test(r) && (r = "");
                        e.ajax({
                            url: "https://gem.www.so.com/zhida",
                            dataType: "jsonp",
                            data: {
                                q1: r,
                                q2: i
                            },
                            success: function(e) {
                                var r;
                                if (0 === e.errno)
                                    try {
                                        r = JSON.parse(e.msg)
                                    } catch (e) {}
                                if (r && r.SiteName) {
                                    var i = r.SiteName;
                                    n[0].zhida && n.shift(),
                                    n.unshift({
                                        data: r,
                                        result: i,
                                        value: i,
                                        link: r.Host,
                                        zhida: !0
                                    }),
                                    f.display(n, t)
                                }
                            }
                        })
                    }(r, u),
                    w(),
                    f.display(u, r),
                    function(r, u) {
                        n.autoFill && m(a.val()).toLowerCase() == r.toLowerCase() && i != o.BACKSPACE && (a.val(a.val() + u.substring(m(s).length)),
                        e(t).selection(s.length, s.length + u.length))
                    }(r, u[0].value),
                    f.show(),
                    e("#search-hotword").removeClass("open")) : v()
                }
                function b(r, i, o) {
                    n.matchCase || (r = r.toLowerCase());
                    var a, s = u.load(r);
                    if (s && s.length)
                        i(r, s);
                    else if (n.url) {
                        var c = {
                            timestamp: +new Date
                        };
                        window.mode;
                        e.each(n.extraParams, function(e, t) {
                            c[e] = "function" == typeof t ? t() : t
                        }),
                        e.ajax({
                            mode: "abort",
                            port: "autocomplete" + t.name,
                            dataType: n.dataType,
                            url: n.url,
                            data: e.extend({
                                word: d((a = m(r),
                                (a || "").replace(/\?.*$/gi, ""))),
                                limit: n.max
                            }, c),
                            success: function(t) {
                                var o = n.parse && n.parse(t) || function(t) {
                                    for (var r = [], i = t.split("\n"), o = 0; o < i.length; o++) {
                                        var a = e.trim(i[o]);
                                        a && (a = a.split("|"),
                                        r[r.length] = {
                                            data: a,
                                            value: a[0],
                                            result: n.formatResult && n.formatResult(a, a[0]) || a[0]
                                        })
                                    }
                                    return r
                                }(t);
                                u.add(r, o),
                                i(r, o)
                            }
                        })
                    } else
                        f.emptyList(),
                        o(r)
                }
                function w() {a.removeClass(n.loadingClass)}
                e(window).on("resize", function() {setTimeout(f.repos, 10)}),
                "search-kw" == t.id && (window.sugSelect = f),
                f.display([], ""),
                a.bind("input.autocomplete", function(e) {
                    clearTimeout(r),
                    r = setTimeout(h, n.delay)
                }),
                a.bind("keydown.autocomplete", function(t) {
                    switch (c = 1,i = t.keyCode,t.keyCode) {
                    case o.UP:
                        t.preventDefault(),
                        f.visible() ? f.prev() : h(0, !0);
                        break;
                    case o.DOWN:
                        t.preventDefault(),
                        f.visible() ? f.next() : h(0, !0);
                        break;
                    case o.PAGEUP:
                        t.preventDefault(),
                        f.visible() ? f.pageUp() : h(0, !0);
                        break;
                    case o.PAGEDOWN:
                        t.preventDefault(),
                        f.visible() ? f.pageDown() : h(0, !0);
                        break;
                    case n.multiple && "," == e.trim(n.multipleSeparator) && o.COMMA:
                    case o.TAB:
                    case o.RETURN:
                        if (p())
                            return t.preventDefault(),
                            !0,
                            !1;
                        break;
                    case o.ESC:
                        f.hide();
                        break;
                    default:
                        clearTimeout(r),
                        r = setTimeout(h, n.delay)
                    }
                }).focus(function() { c++
                }).blur(function() { c = 0
                }).click(function() { c++ >= 1 && !f.visible() && h(0, !0)
                }).bind("search", function() {
                    var t = arguments.length > 1 ? arguments[1] : null;
                    function n(e, n) {
                        var r;
                        if (n && n.length)
                            for (var i = 0; i < n.length; i++)
                                if (n[i].result.toLowerCase() == e.toLowerCase()) {
                                    r = n[i];
                                    break
                                }
                        "function" == typeof t ? t(r) : a.trigger("result", r && [r.data, r.value])
                    }
                    e.each(g(a.val()), function(e, t) {
                        b(t, n, n)
                    })
                }).bind("flushCache", function() { u.flush()
                }).bind("setOptions", function() { e.extend(n, arguments[1]), "data"in arguments[1] && u.populate()
                }).bind("unautocomplete", function() { f.unbind(), a.unbind(), e(t.form).unbind(".autocomplete") 
				}),
                e(document.body).mousedown(function(t) {
                    c = 0;
                    var n = e(t.target);
                    n.hasClass("search-sug-delete") || n.hasClass("search-sug-clear") || (clearTimeout(r),
                    r = window.sug_hide_timeout = setTimeout(v, 0))
                })
            }
            ,
            e.Autocompleter.defaults = {
                inputClass: "ac_input",
                resultsClass: "ac_results",
                loadingClass: "ac_loading",
                minChars: 1,
                delay: 200,
                matchCase: !1,
                matchSubset: !1,
                matchContains: !1,
                cacheLength: 10,
                max: 100,
                mustMatch: !1,
                extraParams: {},
                selectFirst: !0,
                formatItem: function(e) {
                    return e[0]
                },
                formatMatch: null,
                autoFill: !1,
                width: 0,
                multiple: !1,
                multipleSeparator: ", ",
                highlight: function(e, t) {
                    return e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)","gi"), '<span class="no-strong">$1</span>')
                },
                scroll: !0,
                scrollHeight: 180
            },
            e.Autocompleter.Cache = function(t) {
                var n = {}
                  , r = 0;
                function i(e, n) {
                    t.matchCase || (e = e.toLowerCase());
                    var r = e.indexOf(n);
                    return "word" == t.matchContains && (r = e.toLowerCase().search("\\b" + n.toLowerCase())),
                    -1 != r && (0 == r || t.matchContains)
                }
                function o(e, i) {
                    r > t.cacheLength && s(),
                    n[e] || r++,
                    n[e] = i
                }
                function a() {
                    if (!t.data)
                        return !1;
                    var n = {}
                      , r = 0;
                    t.url || (t.cacheLength = 1),
                    n[""] = [];
                    for (var i = 0, a = t.data.length; i < a; i++) {
                        var s = t.data[i];
                        s = "string" == typeof s ? [s] : s;
                        var u = t.formatMatch(s, i + 1, t.data.length);
                        if (!1 !== u) {
                            var c = u.charAt(0).toLowerCase();
                            n[c] || (n[c] = []);
                            var l = {
                                value: u,
                                data: s,
                                result: t.formatResult && t.formatResult(s) || u
                            };
                            n[c].push(l),
                            r++ < t.max && n[""].push(l)
                        }
                    }
                    e.each(n, function(e, n) {
                        t.cacheLength++,
                        o(e, n)
                    })
                }
                function s() {
                    n = {},
                    r = 0
                }
                return setTimeout(a, 25),
                {
                    flush: s,
                    add: o,
                    populate: a,
                    load: function(o) {
                        if (!t.cacheLength || !r)
                            return null;
                        if (!t.url && t.matchContains) {
                            var a = [];
                            for (var s in n)
                                if (s.length > 0) {
                                    var u = n[s];
                                    e.each(u, function(e, t) {
                                        i(t.value, o) && a.push(t)
                                    })
                                }
                            return a
                        }
                        if (n[o])
                            return n[o];
                        if (t.matchSubset)
                            for (var c = o.length - 1; c >= t.minChars; c--) {
                                if (u = n[o.substr(0, c)]) {
                                    a = [];
                                    return e.each(u, function(e, t) {
                                        i(t.value, o) && (a[a.length] = t)
                                    }),
                                    a
                                }
                            }
                        return null
                    }
                }
            }
            ,
            e.Autocompleter.Select = function(t, n, r, i) {
                var o, a, s, u, c, l = {
                    ACTIVE: "ac_over"
                }, f = -1, d = "", p = !0;
                function h(e) {
                    for (var t = e.target; t && "LI" != t.tagName; )
                        t = t.parentNode;
                    return t || []
                }
                function g(r) {
                    (o = c.find("li")).slice(f, f + 1).removeClass(l.ACTIVE),
                    function(e) {
                        (f += e) < 0 ? f = o.length - 1 : f >= o.length && (f = 0)
                    }(r);
                    var i = o.slice(f, f + 1).addClass(l.ACTIVE);
                    if (i.length > 0) {
                        var a = e.data(i[0], "ac_data");
                        a && a.result && e(n).val(a.result)
                    }
                    if (t.scroll) {
                        var s = 0;
                        o.slice(0, f).each(function() {
                            s += this.offsetHeight
                        }),
                        s + i[0].offsetHeight - c.scrollTop() > c[0].clientHeight ? c.scrollTop(s + i[0].offsetHeight - c.innerHeight()) : s < c.scrollTop() && c.scrollTop(s)
                    }
                }
                function m() {
                    c.empty();
                    for (var n, r = (n = s.length,
                    t.max && t.max < n ? t.max : n), i = 0; i < r; i++)
                        if (s[i]) {
                            var a = e("<li/>");
                            if (e.data(a.get(0), "ac_data", s[i]),
                            s[i].zhida) {
                                var u, p = [];
                                (u = s[i].data.Favicon) && p.push('<img src="' + u + '">'),
                                p.push("<b>" + s[i].value + "</b>"),
                                u || p.push('<span class="tag_site">官网</span>'),
                                p.push('<span class="site_url">' + s[i].data.Host.replace(/^.*?:\/\/|\/$/g, "") + "</span>"),
                                a.html(p.join("")).addClass("zhida").appendTo(c)[0]
                            } else if (s[i].searched)
                                a.html('<a class="search-sug-rec">' + s[i].value + "</a>").appendTo(c)[0];
                            else {
                                var h = t.formatItem(s[i].data, i + 1, r, s[i].value, d);
                                if (!1 === h)
                                    continue;
                                a.html(t.highlight(h, d)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(c)[0]
                            }
                        }
                    o = c.find("li"),
                    t.selectFirst && (o.slice(0, 1).addClass(l.ACTIVE),
                    f = 0),
                    e.fn.bgiframe && c.bgiframe()
                }
                return {
                    display: function(o, g) {
                        !function() {
                            if (p) {
                                var o = e(n).parents(".search");
                                a = e(n).parent(".ipt"),
                                u = e("<div/>").hide().addClass(t.resultsClass).css("position", "absolute"),
                                o.append(u),
                                c = e("<ul/>").appendTo(u).mouseover(function(t) {
                                    h(t).nodeName && "LI" == h(t).nodeName.toUpperCase() && (f = e("li", c).removeClass(l.ACTIVE).index(h(t)),
                                    e(h(t)).addClass(l.ACTIVE))
                                }).click(function(t) {
                                    var i = e(t.target);
                                    if (!i.hasClass("search-sug-delete") && !i.hasClass("search-sug-clear"))
                                        return e(h(t)).addClass(l.ACTIVE),
                                        r(),
                                        n.focus(),
                                        !1
                                }).mousedown(function(e) {
                                    return i.mouseDownOnSelect = !0,
                                    !1
                                }).mouseup(function() {
                                    i.mouseDownOnSelect = !1
                                }),
                                u.append('<div class="powered">由3亿人都在使用的<i>360搜索</i>提供</div><div class="search-sug-ft"><a class="search-sug-clear">清空历史记录</a></div>'),
                                t.width > 0 && u.css("width", t.width),
                                p = !1
                            }
                        }(),
                        s = o,
                        d = g,
                        m()
                    },
                    next: function() {g(1)},
                    prev: function() {g(-1)},
                    pageUp: function() {g(0 != f && f - 9 < 0 ? -f : -9)},
                    pageDown: function() {f != o.length - 1 && f + 9 > o.length ? g(o.length - 1 - f) : g(9)},
                    hide: function() {u && u.hide(),o && o.removeClass(l.ACTIVE),f = -1 },
                    visible: function() { return u && u.is(":visible") },
                    current: function() { return this.visible() && (o.filter("." + l.ACTIVE)[0] || t.selectFirst && o[0]) },
                    show: function(e) {
                        var n = this;
                        function r() {
                            f = -1,
                            e ? u.attr("class", t.resultsClass + " " + e) : u.attr("class", t.resultsClass),
                            n.repos(),
                            u.show(),
                            t.scroll && (c.scrollTop(0),
                            c.css({
                                maxHeight: t.scrollHeight,
                                overflow: "auto"
                            }))
                        }
                        t.onbeforeshow ? t.onbeforeshow(r) : r()
                    },
                    repos: function() {
                        var n = a.position();
                        u.css({
                            width: "string" == typeof t.width || t.width > 0 ? t.width : e(".search").width(),
                            top: n.top + a[0].offsetHeight + 2,
                            left: n.left
                        })
                    },
                    selected: function() {
                        var t = (o = c.find("li")) && o.filter("." + l.ACTIVE).removeClass(l.ACTIVE);
                        return t && t.length && e.data(t[0], "ac_data")
                    },
                    emptyList: function() {
                        c && c.empty()
                    },
                    unbind: function() {
                        u && u.remove()
                    }
                }
            }
            ,
            e.fn.selection = function(e, t) {
                if (void 0 !== e)
                    return this.each(function() {
                        if (this.createTextRange) {
                            var n = this.createTextRange();
                            void 0 === t || e == t ? (n.move("character", e),
                            n.select()) : (n.collapse(!0),
                            n.moveStart("character", e),
                            n.moveEnd("character", t),
                            n.select())
                        } else
                            this.setSelectionRange ? this.setSelectionRange(e, t) : this.selectionStart && (this.selectionStart = e,
                            this.selectionEnd = t)
                    });
                var n = this[0];
                if (n.createTextRange) {
                    var r = document.selection.createRange()
                      , i = n.value
                      , o = r.text.length;
                    r.text = "<->";
                    var a = n.value.indexOf("<->");
                    return n.value = i,
                    this.selection(a, a + o),
                    {
                        start: a,
                        end: a + o
                    }
                }
                return void 0 !== n.selectionStart ? {
                    start: n.selectionStart,
                    end: n.selectionEnd
                } : void 0
            }
        }(e)
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var t, r = n(1), i = (t = r) && t.__esModule ? t : { default: t }, o = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,t
        }(n(9));
        i.default.Stat.newPagesPv();
        var a = 0
          , s = ((1124 / 202).toFixed(2),(1124 / 132).toFixed(2),0)
          , u = 0
          , c = 450
          , l = 0
          , f = 0
          , d = 0;
        window.user_data = "";
        var p = !1
          , h = !1
          , g = n(27)
          , m = n(28)
          , v = e(document)
          , y = e(".search-form-bg")
          , b = e("#tab-div")
          , w = e("#edit-div")
          , x = e("#edit-icon")
          , C = e("#edit-title")
          , T = e("#edit-url")
          , k = e("#edit-save")
          , _ = e("#edit-tab-list")
          , S = e("#edit-close-btn")
          , E = e("#drag-div")
          , D = e("#context-menu")
          , A = 5
          , N = n(2)
          , j = n(29);
        x[0].src = N;
        var L = JSON.parse(o.defaultGrid)
          , I = !1
          , M = 2
          , O = void 0;
        function q(e) {
            return !!e.match(/^([a-z]+:\/\/)?[^\.]+(?:\.[^\.]+)+\/?/i)
        }
        function H() {
            var t = Math.ceil(b.find(".tab-grid").length / A)
              , n = (t = Math.min(t, 2)) * u
              , r = e(window).height()
              , i = parseInt((r - n) / 2) + 30;
            y.css({
                opacity: 1,
                top: i - 114
            }),
            b.css({
                "max-height": parseInt(2 * u),
                top: i
            }).fadeIn(200)
        }
        function P(t) {
            var n = user_data.option.layout;
            if (t) {
                var r = Math.min(n.tab * parseInt(b.css("max-height"), 10), u * Math.ceil(b.find(".tab-grid").length / A))
                  , i = parseInt(d - l - c - r)
                  , o = parseInt(u);
                b.css({
                    width: a,
                    "max-height": parseInt(2 * o)
                }),
                b.find(".tab-grid").css({
                    width: s,
                    height: o
                }),
                y.css({
                    top: i - 114
                }),
                b.css("top", i)
            } else
                b.css({
                    width: a,
                    "max-height": parseInt(2 * u)
                }),
                b.find(".tab-grid").css({
                    width: s,
                    height: u
                }),
                H();
            !function(t) {
                var n;
                t ? (n = 0,
                p = !0) : (n = -c,
                p = !1,
                e(".tab-grid").removeClass("edit"));
                w.css("bottom", n)
            }(t)
        }
        function $() {
            R()
        }
        function R() {
            f = e(window).width(),
            d = e(window).height(),
            a = (a = Math.ceil(.8 * f)) % 2 == 0 ? a : a + 1,
            a = Math.max(a, 800),
            a = parseInt(Math.min(a, 1025)),
            l = parseInt(Math.min(.08 * d, 70)),
            s = parseInt(Math.floor(a / A * 100) / 100),
            u = parseInt(.97 * s),
            128,
            128,
            b.css({
                width: parseInt(a),
                "max-height": parseInt(2 * u)
            }),
            b.find(".tab-grid").css({
                width: parseInt(s),
                height: parseInt(u)
            }),
            O = .893 * s,
            b.find(".tab-grid > img").css({
                width: parseInt(O),
                height: parseInt(.8 * O)
            }),
            p ? P(!0) : H()
        }
        function U(e) {
            e ? (y.addClass("move-by-top"),
            b.addClass("move-by-top")) : (y.removeClass("move-by-top"),
            b.removeClass("move-by-top"))
        }
        function F(t, n, r) {
            for (var i, a, s, u = document.elementsFromPoint(t, n), c = b.find(".tab-grid"), l = 0, f = u.length; l < f; l++)
                if (u[l] != r[0] && "tab-grid" == u[l].className && "drag-div" != u[l].parentElement.id) {
                    i = e(u[l]);
                    break
                }
            i && (i[0].getBoundingClientRect(),
            a = c.index(r),
            s = c.index(i),
            a < s ? c.each(function(t, n) {
                t > a && t <= s && (t > 0 && t % A == 0 ? M > 2 ? e(n).addClass("drag-lmove-line2") : e(n).addClass("drag-lmove-line") : e(n).addClass("drag-lmove"))
            }) : a > s && c.each(function(t, n) {
                t >= s && t < a && ((t + 1) % A == 0 ? M > 2 ? e(n).addClass("drag-rmove-line2") : e(n).addClass("drag-rmove-line") : e(n).addClass("drag-rmove"))
            }),
            setTimeout(function() {
                var t;
                e(".drag-lmove, .drag-lmove-line, .drag-lmove-line2, .drag-rmove, .drag-rmove-line, .drag-rmove-line2").removeClass("drag-lmove drag-lmove-line drag-lmove-line2 drag-rmove drag-rmove-line drag-rmove-line2"),
                a < s ? i.after(r) : a > s && i.before(r),
                a != s && (t = user_data.list.splice(a, 1),
                user_data.list.splice(s, 0, t[0]),
                o.setUserData())
            }, 100))
        }
        function W() {
            x[0].src = N,
            C.val(""),
            T.val(""),
            k.attr("disabled", !0),
            T.removeAttr("disabled"),
            C.removeAttr("disabled")
        }
        function B(t) {
            var n = e(".tab-grid.edit")
              , r = n.hasClass("add")
              , a = b.find(".tab-grid").index(n)
              , c = T.val()
              , l = i.default.isEmpty(C.val()) ? c : C.val()
              , f = i.default.getLetterLogo(c)
              , d = void 0;
            I || !t ? d = x.attr("src") || N : d = L.icons360[f].img || N;
            if (/^[a-z]+:\/\//i.test(c) || (c = "http://" + c),
            r ? ((h = e('<a href="' + c + '" target="_top" class="tab-grid"><img src="' + d + '"/><p title="' + l + '">' + l + "</p></a>")).css({
                width: s,
                height: u
            }),
            h.find("img").css({
                width: parseInt(O),
                height: parseInt(.8 * O)
            }),
            t && h.addClass("to-check"),
            a + 1 >= A * M ? (h.addClass("edit"),
            n.removeClass("edit")) : W(),
            n.before(h)) : (n.attr("href", c),
            n.find("p").attr("title", l),
            n.find("img").attr("src", d),
            n.find("p").html(l),
            n.find("img").css({
                width: parseInt(O),
                height: parseInt(.8 * O)
            }),
            t && n.addClass("to-check")),
            user_data.list[a] = {
                url: c,
                title: l,
                img: d
            },
            o.setUserData(),
            r && (a + 1) % A == 0 && Math.ceil((a + 1) / A) < M) {
                var p = parseInt(b.css("top")) - u;
                b.css("top", p),
                y.css({
                    top: p - 114
                })
            }
            if (window.navigator.onLine && t) {
                var h = b.find('.to-check[href="' + c + '"]');
                if ((a = b.find(".tab-grid").index(h)) > -1) {
                    !1,
                    o.setUserData(),
                    h.find("p").html(user_data.list[a].title),
                    h.find("p").attr("title", user_data.list[a].title),
                    h.find("img")[0].src = user_data.list[a].img,
                    h.removeClass("to-check")
                }
            }
        }
        window.onNtpPrefChange = function(e) {
            e = e.ntp.custom_urls_sync,
            o.onNtpPrefChangeApi(e, function(e) {
                !function(e) {
                    user_data = e,
                    user_data.fav_add_btn = j,
                    b.html(g(user_data)),
                    $()
                }(e)
            })
        }
        ,
        b.on("click", ".tab-grid", function(t) {
            var n = e(this);
            if (n.hasClass("add"))
                W(),
                p || P(!0);
            else {
                I = !0,
                x.attr("src", n.find("img")[0].src),
                C.val(n.find("p").html()),
                T.val(n[0].href);
                C.html();
                k.removeAttr("disabled"),
                C.removeAttr("disabled"),
                T.removeAttr("disabled")
            }
            p && e(this).addClass("edit").siblings().removeClass("edit"),
            t.originalEvent ? t.originalEvent.origin = "edit" : t.stopPropagation()
        }),
        S.on("click", function() {
            P(!1)
        }),
        w.on("click", function(e) {
            e.originalEvent && (e.originalEvent.origin = "edit")
        }),
        b.on("contextmenu", ".tab-grid:not(.add)", function(t) {
            var n;
            n = b.find(".tab-grid").index(this),
            e("#context-menu p.white-line").show(),
            e("#context-menu p.edit").show(),
            e("#context-menu p.del").show();
            e(this).find("p").html();
            D.attr("data-idx", n).css({
                top: t.pageY,
                left: t.pageX
            }).show(),
            t.preventDefault()
        }),
        D.on("mousedown", function(e) {
            e.originalEvent.origin = "contextmenu"
        }),
        D.on("click", function(e) {
            e.originalEvent.origin = "contextmenu"
        }),
        D.on("click", ".new-tab-current", function(e) {
            var t = +D.attr("data-idx")
              , n = b.find(".tab-grid:nth-child(" + (t + 1) + ")")[0].href;
            window.open(n),
            D.hide()
        }),
        D.on("click", ".new-tab-open", function(e) {
            var t = +D.attr("data-idx")
              , n = b.find(".tab-grid:nth-child(" + (t + 1) + ")")[0].href;
            i.default.ntpApis.openWindow(n, !1),
            D.hide()
        }),
        D.on("click", ".new-tab-Invisible", function(e) {
            var t = +D.attr("data-idx")
              , n = b.find(".tab-grid:nth-child(" + (t + 1) + ")")[0].href;
            i.default.ntpApis.openWindow(n, !0),
            D.hide()
        }),
        D.on("click", ".edit", function(e) {
            var t = +D.attr("data-idx");
            P(!0),
            b.find(".tab-grid:nth-child(" + (t + 1) + ")").click(),
            D.hide()
        }),
        D.on("click", ".del", function(e) {
            var t = +D.attr("data-idx")
              , n = b.find(".tab-grid:nth-child(" + (t + 1) + ")")
              , r = b.find(".tab-grid").length - 1;
            if (n.hasClass("edit") && n.removeClass("edit").next().addClass("edit").click(),
            n.remove(),
            user_data.list.splice(t, 1),
            o.setUserData(),
            D.hide(),
            p && r % A == 0 && Math.ceil(r / A) < M) {
                var i = parseInt(b.css("top")) + u;
                b.css("top", i),
                y.css({
                    top: i - 114
                })
            } else
                !p && r % A == 0 && Math.ceil(r / A) < M && R()
        }),
        b.on("mousedown", ".tab-grid:not(.add)", function(t) {
            var n, r, i, o, a, s, u, c, l = function(e) {
                var t, l;
                Math.abs(a - e.pageX) < 4 && Math.abs(s - e.pageY) < 4 || (a = e.pageX,
                s = e.pageY,
                t = c.left + e.pageX - i,
                l = c.top + e.pageY - o,
                E.show(),
                u.css("opacity", 0),
                n = n ? cancelAnimationFrame(n) : n,
                n = requestAnimationFrame(function() {
                    E.css({
                        left: t,
                        top: l
                    })
                }),
                r = clearTimeout(r),
                r = setTimeout(F, 100, e.pageX, e.pageY, u))
            };
            0 == t.button && (h || p || (h = !0,
            u = e(this),
            c = u[0].getBoundingClientRect(),
            i = t.pageX,
            o = t.pageY,
            a = t.pageX,
            s = t.pageY,
            E.html(u[0].outerHTML).css({
                top: c.top,
                left: c.left
            }),
            v.on("mousemove", l),
            v.on("mouseup", function e(t) {
                c = u[0].getBoundingClientRect(),
                v.off("mousemove", l),
                v.off("mouseup", e),
                E.css({
                    top: c.top,
                    left: c.left
                }).addClass("drop"),
                setTimeout(function() {
                    E.removeClass("drop").hide(),
                    u.css("opacity", 1),
                    h = !1
                }, 200)
            })))
        }),
        w.on("click", ".edit-category > span", function() {
            var t = e(this)
              , n = e(this).attr("data-category");
            t.addClass("active").siblings().removeClass("active"),
            e("#edit-category-" + n).addClass("active").siblings().removeClass("active")
        }),
        w.on("click", ".edit-grid", function() {
            var t = e(this);
            x.attr("src", t.attr("data-img")),
            C.val(t.attr("data-title")),
            T.val(t.attr("data-url")),
            k.removeAttr("disabled"),
            B()
        }),
        T.on("input", function() {
            q(this.value.trim()) ? k.removeAttr("disabled") : k.attr("disabled", !0)
        }),
        T.on("keydown", function(e) {
            13 === e.keyCode && (q(T.val().trim()) && k.click())
        }),
        k.on("click", function() {
            B(1),
            P(!1)
        }),
        b.on("click", "a:not(.add)", function(t) {
            e(this),
            b.find(".tab-grid").index(this)
        }),
        v.on("click", function(t) {
            var n = e(t.target);
            p && ("A" == n[0].nodeName || n.parent("a").length) ? t.preventDefault() : ("A" == n[0].nodeName && "tab-grid" == n[0].className || n.parent("a").length && "tab-grid" == n.parent("a")[0].className) && i.default.Stat.httpClickPv(),
            t.originalEvent && p && "edit" != t.originalEvent.origin && "contextmenu" != t.originalEvent.origin && P(!1)
        }),
        v.on("mousedown", function(e) {
            "contextmenu" != e.originalEvent.origin && D.hide()
        }),
        v.on("contextmenu", function(t) {
            0 == e(t.target).closest("#search-kw").length && t.preventDefault()
        }),
        e(window).resize(function() {
            U(!1),
            R(),
            U(!0)
        }),
        window.editDefault = function(e) {
            var t = i.default.getLetterLogo(e);
            return L.icons360[t].img || N
        }
        ,
        o.getUserData(function(e) {
            !function(e) {
                var t = function(e) {
                    _.html(m(e.tab))
                }
                  , n = o.getCacheData();
                user_data = e,
                user_data.fav_add_btn = j,
                b.html(g(user_data)),
                $(),
                n && t(n),
                o.getData(function(e, n) {
                    user_data.list.length || 0 !== user_data.timeStamp || (user_data.list = e.user,
                    o.setUserData(),
                    b.html(g(user_data.list)),
                    b.find(".tab-grid").css({
                        width: s,
                        height: u
                    })),
                    n && t(e)
                })
            }(e)
        }),
        U(!0),
        setTimeout(function() {
            w.show()
        }, 500)
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.defaultGrid = t.getData = t.getCacheData = t.onNtpPrefChangeApi = t.getUserData = t.setUserData = void 0;
        var r, i = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }(n(1)), o = n(10), a = (r = o) && r.__esModule ? r : {
            default: r
        };
        var s, u = "cache_data_key", c = "https://browser.360.cn/ee/ntp/mac_new_pages_edit.json";
        var l = function(t, n) {
            return new Promise(function(n, r) {
                e.ajax({
                    type: "GET",
                    url: t,
                    dataType: "jsonp",
                    jsonpCallback: "mac_newtab_event_callback",
                    cache: !1,
                    success: function(e) {
                        n(e)
                    },
                    error: function(e) {
                        r("请刷新重试！")
                    }
                })
            }
            )
        }
          , f = "ntp.custom_urls_sync";
        function d(e, t) {
            e || (e = a.default);
            var n = {
                timeStamp: 0,
                option: {
                    layout: { tab: 1 },
                    bgCloud: 0,
                    bgIdx: 0
                },
                list: []
            };
            try {
                n = JSON.parse(e)
            } catch (e) {}
            t && t(n)
        }
        t.setUserData = function() {
            user_data.timeStamp = Date.now(),
            i.ntpApis.setNtpPref(f, JSON.stringify(user_data))
        }
        ,
        t.getUserData = function(e) {
            i.ntpApis.getNtpPref(f, function(t) {
                d(t, e)
            })
        }
        ,
        t.onNtpPrefChangeApi = function(e, t) {
            d(e, t)
        }
        ,
        t.getCacheData = function() {
            return s || (s = function(e) {
                try {
                    return JSON.parse(localStorage.getItem(e))
                } catch (e) {
                    return null
                }
            }(u)),
            s
        }
        ,
        t.getData = function(e) {
            var t = {
                tab: []
            }
              , n = !1;
            l(c).then(function(r) {
                var i, o;
                r.error || (t = r.data,
                (s = t).localStamp = Date.now(),
                i = u,
                o = s,
                localStorage.setItem(i, JSON.stringify(o)),
                n = !0),
                e && e(t, n)
            }).catch(function(e) {})
        }
        ,
        t.defaultGrid = a.default
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = {
        option: {
            layout: { news: 0, nav: 0, tab: 1 },
            bgCloud: 0,
            bgIdx: 0,
            new_fav: 1
        },
        list: [
			{title: "360导航",url: "https://hao.360.cn/",img: n(11)},
			{title: "微博",url: "https://weibo.com/",img: n(12)},
			{title: "京东",url: "https://www.jd.com/",img: n(13)},
			{title: "天猫",url: "https://www.tmall.com/",img: n(14)},
			{title: "搜狐",url: "https://www.sohu.com/",img: n(15)},
			{title: "哔哩哔哩",url: "https://www.bilibili.com/",img: n(16)},
			{title: "Apple",url: "https://www.apple.com/cn/",img: n(17)},
			{title: "Google",url: "https://www.google.com",img: n(18)},
			{title: "优酷",url: "https://www.youku.com/",img: n(19)
        }],
        icons360: [{img: n(20)}, {img: n(21)}, {img: n(22)}, {img: n(23)}, {img: n(24)}, {img: n(2)}, {img: n(25)}, {img: n(26)}]
    };
    t.default = JSON.stringify(r)
}
, function(e, t, n) {e.exports = n.p + "img/504f8003.png"}
, function(e, t, n) {e.exports = n.p + "img/16e7fecc.png"}
, function(e, t, n) {e.exports = n.p + "img/c76856b1.png"}
, function(e, t, n) {e.exports = n.p + "img/c27d1c9d.png"}
, function(e, t, n) {e.exports = n.p + "img/905440b3.png"}
, function(e, t, n) {e.exports = n.p + "img/076bda93.png"}
, function(e, t, n) {e.exports = n.p + "img/67510eeb.png"}
, function(e, t, n) {e.exports = n.p + "img/6862b9ac.png"}
, function(e, t, n) {e.exports = n.p + "img/0b17e18a.png"}
, function(e, t, n) {e.exports = n.p + "img/24bc41fa.png"}
, function(e, t, n) {e.exports = n.p + "img/77104e73.png"}
, function(e, t, n) {e.exports = n.p + "img/7c8c1b26.png"}
, function(e, t, n) {e.exports = n.p + "img/f650c99b.png"}
, function(e, t, n) {e.exports = n.p + "img/e9aed5bf.png"}
, function(e, t, n) {e.exports = n.p + "img/69596ae1.png"}
, function(e, t, n) {e.exports = n.p + "img/2ef8df4e.png"}
, function(e, t) {
    e.exports = function(e) {
        var t, n, r = "undefined" != typeof _encodeHTML ? _encodeHTML : (t = {
            "&": "&#38;",
            "<": "&#60;",
            ">": "&#62;",
            '"': "&#34;",
            "'": "&#39;",
            "/": "&#47;"
        },
        n = /&(?!#?\w+;)|<|>|"|'|\//g,
        function(e) {
            return e ? e.toString().replace(n, function(e) {
                return t[e] || e
            }) : ""
        }
        ), i = "", o = e.list;
        if (o)
            for (var a, s = -1, u = o.length - 1; s < u; )
                i += ' <a href="' + r((a = o[s += 1]).url) + '" target="_top" class="tab-grid"> <img src="' + r(a.img) + '" onerror="src=\'' + r(editDefault(a.url)) + '\'" /> <p title="' + r(a.title) + '">' + r(a.title) + "</p> </a> ";
        return i += '<a class="tab-grid add"> <img src="' + r(e.fav_add_btn) + '"/> <p></p></a>'
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t, n, r = "undefined" != typeof _encodeHTML ? _encodeHTML : (t = {
            "&": "&#38;",
            "<": "&#60;",
            ">": "&#62;",
            '"': "&#34;",
            "'": "&#39;",
            "/": "&#47;"
        },
        n = /&(?!#?\w+;)|<|>|"|'|\//g,
        function(e) {
            return e ? e.toString().replace(n, function(e) {
                return t[e] || e
            }) : ""
        }
        ), i = '<p class="edit-category"> ', o = e;
        if (o)
            for (var a = -1, s = o.length - 1; a < s; )
                c = o[a += 1],
                i += ' <span class="' + (0 == a ? "active" : "") + '" data-category="' + a + '">' + r(c.category) + "</span> ";
        i += "</p>";
        var u = e;
        if (u) {
            a = -1;
            for (var c, l = u.length - 1; a < l; ) {
                c = u[a += 1],
                i += ' <div id="edit-category-' + a + '" class="edit-list ' + (0 == a ? "active" : "") + '"> ';
                var f = c.list;
                if (f)
                    for (var d, p = -1, h = f.length - 1; p < h; )
                        i += ' <a class="edit-grid"  data-url="' + r((d = f[p += 1]).url) + '" data-img="' + r(d.img || editDefault(d.url)) + '" data-title="' + r(d.title) + '"> <img src="' + r(d.img) + '" onerror="src=\'' + r(editDefault(d.url)) + '\'"  /> <p title="' + r(d.title) + '">' + r(d.title) + "</p> </a> ";
                i += " </div>"
            }
        }
        return i
    }
}
, function(e, t, n) {
    e.exports = n.p + "img/38fde480.png"
}
, function(e, t) {}
, function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var util = __webpack_require__(1)
          , searchmaps = __webpack_require__(32)
          , $searchUi = $(".search-ui")
          , HotKeyword = function() {
            var e, t, n, r, i = "https://smart.sug.so.com/suggest?pid=webpage&src=senewtab";
            function o(i) {
                if (!i || 0 == i.button) {
                    if ($("#search-hotword-update").hide(),
                    util.storage.set("settings", "hide-update-num", (new Date).Format("yyyy-MM-dd")),
                    clearTimeout(window.sug_hide_timeout),
                    r.hasClass("open"))
                        r.removeClass("open"),
                        sugSelect.hide();
                    else {
                        if (t.focus(),
                        "search" == window.mode)
                            return a(),
                            !1;
                        (function() {
                            var t = e;
                            if (!t)
                                return !1;
                            var i = n.find("ul");
                            return $(".selectLiImg").remove(),
                            i.empty(),
                            t.forEach(function(e, t) {
                                var n = $('<li asin="' + (e.asin || "") + '"><a' + (e.link ? ' href="' + util.htmlEncode(util.checkUrlProtocol(e.link)) + '"' : "") + '><em class="hot">' + (t + 1) + '</em><span class="' + ("1" == e.new ? "new" : "") + '">' + util.htmlEncode(e.text) + "</span></a></li>");
                                i.append(n),
                                e.result = e.text,
                                n.data("ac_data", e)
                            }),
                            r.addClass("open"),
                            !0
                        }
                        )() && sugSelect.show("hot-keyword")
                    }
                    return !1
                }
            }
            function a() {
                util.DC.get(i, {}, function(e) {
                    0 == e.errno && function(e) {
                        var t = n.find("ul");
                        t.empty(),
                        e.forEach(function(e, n) {
                            var r = encodeURIComponent(e.q)
                              , i = "his" == e.t ? '<span class="tip search-sug-delete" data-q="' + r + '">删除</span>' : '<span class="tip search-sug-push" data-q="' + r + '">推荐</span>'
                              , o = $('<li class="search-sug-item"><a class="search-sug-link">' + e.q + "</a>" + i + "</li>");
                            e.result = e.q,
                            o.data("ac_data", e),
                            t.append(o)
                        }),
                        r.addClass("open"),
                        sugSelect.show("sug-words")
                    }(e.data.splice(0, 10))
                })
            }
            function s() {
                util.DC.storage.setCache(i, "")
            }
            return $searchUi.on("click", ".tips", function() {
                $searchUi.addClass("active"),
                o()
            }),
            {
                init: function(i) {
                    n = $(".ac_results:first"),
                    t = i.on("mousedown", function(e) {
                        0 == e.button && ("" != $(this).val() && $(this).val() != $(this).attr("_placeholder") || o(),
                        e.stopPropagation())
                    }),
                    r = $("#search-hotword").on("mousedown", o),
                    $("#search-hotword-update").on("mousedown", o);
                    var u = 1;
                    util.DC.get("https://site.browser.360.cn/sword.php?callback=?", {
                        v: util.api.GetVersion()
                    }, function(t) {
                        e = t && t.data && t.data.webpage,
                        0 == --u && HotKeyword.ondata()
                    }),
                    n.delegate(".search-sug-delete,.search-sug-clear", "click", function(e) {
                        var t = $(this)
                          , n = ""
                          , r = "";
                        t.hasClass("search-sug-delete") ? (n = "delete",
                        t.remove(),
                        r = decodeURIComponent(t.data("q"))) : n = "clear",
                        function(e, t) {
                            var n = "delete" == e ? "Delete" : "Clear"
                              , r = {
                                src: "senewtab"
                            };
                            "delete" == e && (r.q = t || ""),
                            $.ajax({
                                url: "https://smart.sug.so.com/history" + n,
                                data: r,
                                dataType: "jsonp",
                                success: function(e) {
                                    0 == e.errno && (s(),
                                    a())
                                }
                            })
                        }(n, r),
                        e.preventDefault()
                    })
                },
                ondata: function() {
                    for (var t = 0, n = e.length; t < n; t++) {
                        var i = e[t];
                        if (i.api_url) {
                            $("#search-kw").attr("placeholder", i.text).data("link", i.link);
                            break
                        }
                    }
                    r.show(),
                    function() {
                        if (util.storage.get("settings")["hide-update-num"] != (new Date).Format("yyyy-MM-dd")) {
                            var t = 0;
                            e.forEach(function(e) {
                                "1" == e.new && t++
                            }),
                            t > 0 && ($("#search-hotword-update").text(t),
                            "search" != window.mode && $("#search-hotword-update").show())
                        }
                    }()
                },
                clearSugExpires: s
            }
        }()
          , SearchForm = function() {
            var searchMaps = searchmaps
              , searchTypeMaps = {
                webpage: ["so", "google", "baidu"],
                news: ["news_so", "news_google", "news_baidu"],
                video: ["video_so", "video_google", "video_baidu"],
                image: ["image_so", "image_google", "image_baidu"],
                music: ["music_so", "music_sogou", "music_baidu"],
                map: ["map_so", "map_google", "map_baidu"],
                wenda: ["wenda_so", "wenda_baidu"]
            };
            function saveSetting(e, t) {
                var n = localStorage.settings = localStorage.settings || "{}";
                try {
                    n = JSON.parse(n)
                } catch (e) {
                    n = {}
                }
                n[e] = t,
                localStorage.settings = JSON.stringify(n)
            }
            function loadSettings() {
                var settings = localStorage.settings = localStorage.settings || "{}";
                try {
                    settings = JSON.parse(settings)
                } catch (e) {
                    settings = {}
                }
                for (var k in settings)
                    try {
                        eval(settings[k])
                    } catch (e) {}
                setSearchType("webpage")
            }
            function setSearchType(e) {
                var t = searchTypeMaps[e];
                if (t) {
                    $(".search-menu").empty(),
                    t.forEach(function(e) {
                        var t = searchMaps[e] || {};
                        $(".search-menu").append('<li><a __href="#" class="' + t.type + '"></a>' + t.desc + "</li>")
                    });
                    var n = $(".search-menu ." + util.storage.get("default_engine")[e]);
                    return 0 == n.length && (n = $(".search-menu a:first")),
                    n.trigger("click"),
                    saveSetting("search_type", 'setSearchType("' + e + '")'),
                    !0
                }
                return !1
            }
            function setSearch(e) {
                $("#search-switch>a")[0].className = e.type,
                $("#search-form").attr("action", e.url),
                $("#search-kw").attr("name", e.key),
                $("#search-form input[type=hidden]").remove(),
                $("#search-form").attr("default-url", e.default_url || "");
                var t = e.params;
                if (t)
                    for (var n in t) {
                        var r = document.createElement("input");
                        r.type = "hidden",
                        r.name = n,
                        r.value = t[n],
                        $("#search-form").append(r)
                    }
            }
            function bindEvents() {
                var e = $("#search-switch");
                $("#search-form").on("submit", function(e) {
                    var t = $("#current-engine")[0].className
                      , n = window.mode
                      , r = $("#search-kw")
                      , i = r.val();
                    i && util.customizeLog("track", {
                        pid: "search_" + n + "_" + t
                    }, e),
                    HotKeyword.clearSugExpires(),
                    e.isTrigger || (util.Stat.searchPV(),
                    "" === i && "" != r.attr("placeholder") && "" != r.data("link") && (util.Stat.setLog(event_searchClick.join(",")),
                    util.openUrl(r.data("link")),
                    e.preventDefault()))
                }),
                e.on("click", function(t) {
                    var n = $(".search-menu")
                      , r = e.position().top + e.height() - 5;
                    n.is(":visible") ? n.slideUp() : n.css("top", r).slideDown()
                }),
                $(document).on("click", function(e) {
                    "search-switch" == e.target.id || $(e.target).parents("#search-switch").length || $(e.target).parents(".search-menu").length || $(".search-menu").slideUp(),
                    0 == $(e.target).closest(".search-form-bg").length && ($searchUi.removeClass("active"),
                    $("#search-kw").val(""))
                }),
                $(document).delegate(".search-menu li", "click", function(e) {
                    var t, n = e.target.className || e.target.firstElementChild.className;
                    (t = searchMaps[n]) && (setSearch(t),
                    $(".search-menu").is(":visible") && ($(".search-menu").slideUp(function() {
                        $(this).removeClass("open")
                    }),
                    saveSetting("search", "setSearch(" + JSON.stringify(t) + ");"),
                    util.storage.set("default_engine", "webpage", t.type)))
                })
            }
            function init() {
                bindEvents(),
                loadSettings();
                var e = {
                    zhida: !0,
                    selectFirst: !1,
                    type: "jsonp",
                    resultsClass: "ac_results",
                    dataType: "jsonp",
                    width: 638,
                    scrollHeight: 400,
                    offset: {
                        left: -1,
                        top: 0
                    },
                    onbeforeshow: function(e) {
                        return $(".search-menu").hide(),
                        e && e(),
                        !0
                    },
                    parse: function(e) {
                        var t = [];
                        return e.s.forEach(function(e, n) {
                            t.push({
                                searched: "his" == e.resrc,
                                data: [util.htmlEncode(e)],
                                value: util.htmlEncode(e),
                                result: e
                            })
                        }),
                        t
                    }
                };
                $("#search-kw").autocomplete("https://sug.so.360.cn/suggest/word?encodein=utf-8&encodeout=utf-8", e).on("result", function(e, t) {
                    if (util.Stat.searchPV(),
                    t.link)
                        util.openUrl(t.link);
                    else {
                        var n = $(this).parents("form");
                        n.find(':hidden[name="src"]').val($(".ac_results:first").hasClass("hot-keyword") ? "se7_newtab_new_hot" : "se7_newtab_new"),
                        n.trigger("submit")
                    }
                }).on("focus", function(e) {
                    $(".ipt-border").addClass("ipt-border-focus")
                }).on("blur", function(e) {
                    $(".ipt-border").removeClass("ipt-border-focus")
                }),
                $(window).on("newpages:firstPageOnLoad", function() {
                    HotKeyword.init($("#search-kw"))
                }).on("unload", function() {
                    HotKeyword.clearSugExpires()
                })
            }
            return {
                init: init
            }
        }();
        module.exports = {
            HotKeyword: HotKeyword,
            SearchForm: SearchForm
        }
    }
    ).call(this, __webpack_require__(0))
}
, function(e) {
    e.exports = {
        so: {
            type: "so",
            desc: "360搜索",
            url: "https://www.so.com/s?ie=utf-8&src=se7_newtab_new",
            default_url: "https://www.so.com/?src=se7_newtab_new",
            key: "q",
            params: {
                ie: "utf-8",
                src: "se7_newtab_new"
            }
        },
        baidu: {
            type: "baidu",
            desc: "百度",
            url: "https://www.baidu.com/s?&ie=utf-8",
            key: "wd",
            params: {
                ie: "utf-8"
            }
        },
        google: {
            type: "google",
            desc: "谷歌",
            url: "http://www.google.com.hk/search?client=aff-cs-360se&ie=UTF-8",
            key: "q",
            params: {
                client: "aff-cs-360se",
                ie: "UTF-8"
            }
        },
        news_so: {
            type: "news_so",
            desc: "360搜索",
            url: "http://news.so.com/ns?ie=utf-8&tn=news&src=se7_newtab_new",
            default_url: "http://sh.qihoo.com/?src=se7_newtab_new",
            key: "q",
            params: {
                ie: "utf-8",
                tn: "news",
                src: "se7_newtab_new"
            }
        },
        news_baidu: {
            type: "news_baidu",
            desc: "百度",
            url: "http://news.baidu.com/ns?&ie=utf-8",
            key: "word",
            params: {
                ie: "utf-8"
            }
        },
        news_google: {
            type: "news_google",
            desc: "谷歌",
            url: "http://news.google.com.hk/news/search?client=aff-cs-360se&ie=UTF-8",
            key: "q",
            params: {
                client: "aff-cs-360se",
                ie: "UTF-8"
            }
        },
        video_so: {
            type: "video_so",
            desc: "360搜索",
            url: "http://video.so.com/v?ie=utf-8&src=se7_newtab_new",
            default_url: "http://video.so.com/?src=se7_newtab_new",
            key: "q",
            params: {
                ie: "utf-8",
                src: "se7_newtab_new"
            }
        },
        video_baidu: {
            type: "video_baidu",
            desc: "百度",
            url: "http://video.baidu.com/v?&ie=utf-8",
            key: "word",
            params: {
                ie: "utf-8"
            }
        },
        video_google: {
            type: "video_google",
            desc: "谷歌",
            url: "http://www.google.com.hk/search?client=aff-cs-360se&ie=UTF-8",
            key: "q",
            params: {
                tbm: "vid",
                client: "aff-cs-360se",
                ie: "UTF-8"
            }
        },
        image_so: {
            type: "image_so",
            desc: "360搜索",
            url: "http://image.so.com/i?ie=utf-8&src=se7_newtab_new",
            default_url: "http://image.so.com/?src=se7_newtab_new",
            key: "q",
            params: {
                ie: "utf-8",
                src: "se7_newtab_new"
            }
        },
        image_baidu: {
            type: "image_baidu",
            desc: "百度",
            url: "http://image.baidu.com/i?&ie=utf-8",
            key: "word",
            params: {
                ie: "utf-8"
            }
        },
        image_google: {
            type: "image_google",
            desc: "谷歌",
            url: "http://images.google.com.hk/images?client=aff-cs-360se&ie=UTF-8",
            key: "q",
            params: {
                client: "aff-cs-360se",
                ie: "UTF-8"
            }
        },
        music_so: {
            type: "music_so",
            desc: "360搜索",
            url: "http://s.music.so.com/s?ie=utf-8&src=se7_newtab_new",
            default_url: "http://music.so.com/?src=se7_newtab_new",
            key: "q",
            params: {
                ie: "utf-8",
                src: "se7_newtab_new"
            }
        },
        music_baidu: {
            type: "music_baidu",
            desc: "百度",
            url: "http://music.baidu.com/search?&ie=utf-8",
            key: "key",
            params: {
                ie: "utf-8"
            }
        },
        music_sogou: {
            type: "music_sogou",
            desc: "搜狗",
            url: "http://mp3.sogou.com/music?ie=UTF-8",
            key: "query",
            params: {
                ie: "UTF-8"
            }
        },
        map_so: {
            type: "map_so",
            desc: "360搜索",
            url: "http://map.so.com/?ie=utf-8&t=map&src=se7_newtab_new",
            default_url: "http://map.so.com/?src=se7_newtab_new",
            key: "k",
            params: {
                ie: "utf-8",
                t: "map",
                src: "se7_newtab_new"
            }
        },
        map_baidu: {
            type: "map_baidu",
            desc: "百度",
            url: "http://map.baidu.com/m?&ie=utf-8",
            key: "word",
            params: {
                ie: "utf-8"
            }
        },
        map_google: {
            type: "map_google",
            desc: "谷歌",
            url: "http://ditu.google.cn/maps?client=aff-cs-360se&ie=UTF-8",
            key: "q",
            params: {
                client: "aff-cs-360se",
                ie: "UTF-8"
            }
        },
        wenda_so: {
            type: "wenda_so",
            desc: "360问答",
            url: "http://wenda.so.com/search/?ie=utf-8&src=se7_newtab_new",
            default_url: "http://wenda.so.com/?src=se7_newtab_new",
            key: "q",
            params: {
                ie: "utf-8",
                src: "se7_newtab_new"
            }
        },
        wenda_baidu: {
            type: "wenda_baidu",
            desc: "百度",
            url: "http://zhidao.baidu.com/search?&ie=utf-8",
            key: "word",
            params: {
                ie: "utf-8"
            }
        }
    }
}
]);
