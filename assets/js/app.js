! function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.i = function (e) {
        return e
    }, t.d = function (e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 16)
}([function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o() {
        var e = (0, u.default)(".reveal-overlay").eq(0),
            t = e.children(".reveal").eq(0);
        e.css("display", "block"), t.css("display", "block");
        var n = t.width(),
            i = t.height();
        e.css("display", ""), t.css("display", ""), i / n < .5625 ? ((0, u.default)(".plyr").css("width", i / .5625), (0, u.default)(".plyr__video-wrapper").css("width", i / .5625)) : ((0, u.default)(".plyr").css("width", ""), (0, u.default)(".plyr__video-wrapper").css("width", ""))
    }

    function r() {
        var e = document.body.scrollTop || document.documentElement.scrollTop,
            t = (e / 6).toFixed(2);
        m.style.transform = "translateY(" + t + "px)"
    }

    function a(e) {
        for (var t = e.offsetTop, n = e.offsetHeight; e = e.offsetParent;) t += e.offsetTop;
        return t + n >= window.pageYOffset
    }

    function s() {
        a(g[0]) ? y.removeClass("is-visible") : y.addClass("is-visible")
    }
    var l = n(11),
        u = i(l);
    n(2), n(7), n(6), n(5), n(10), n(8), n(9), n(3), n(4), n(15);
    var c = n(14),
        d = i(c);
    "undefined" == typeof console && (console = {
        log: function () {},
        error: function () {}
    }), window.log = Function.prototype.bind.call(console.log, console), (0, u.default)(document).foundation();
    var f = d.default.setup();
    (0, u.default)(".page-stories").length && ((0, u.default)(window).on("resize", o), o());
    for (var p = 0; p < f.length; p++) ! function (e) {
        var t = (0, u.default)(f[e].getContainer()).closest(".reveal");
        t.on("open.zf.reveal", function () {
            f[e].play()
        }), t.on("closed.zf.reveal", function () {
            f[e].pause()
        })
    }(p);
    for (var p = 0; p < f.length; p++) {
        var h = (0, u.default)("#panel" + (p + 2));
        h.length && f[p].on("ended", function (e, t) {
            return function () {
                (0, u.default)("#the-tabs").find('a[href="#' + t[0].id + '"]').click()
            }
        }(0, h))
    }(0, u.default)(".tabs-title:not(.is-active)").on("click", function () {
        (0, u.default)('.reveal[aria-hidden="false"]').length && (0, u.default)('.reveal[aria-hidden="false"]').foundation("close")
    });
    var m = (0, u.default)(".js-parallax")[0];
    m && (0, u.default)(window).on("scroll", r);
    var g = (0, u.default)(".home-header"),
        y = (0, u.default)(".appearing-header");
    y.length && (0, u.default)(window).on("scroll", s)
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function (e) {
        function t(e) {
            if (void 0 === Function.prototype.name) {
                var t = /function\s([^(]{1,})\(/,
                    n = t.exec(e.toString());
                return n && n.length > 1 ? n[1].trim() : ""
            }
            return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name
        }

        function n(e) {
            return "true" === e || "false" !== e && (isNaN(1 * e) ? e : parseFloat(e))
        }

        function o(e) {
            return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }
        var r = {
            version: "6.3.1",
            _plugins: {},
            _uuids: [],
            rtl: function () {
                return "rtl" === e("html").attr("dir")
            },
            plugin: function (e, n) {
                var i = n || t(e),
                    r = o(i);
                this._plugins[r] = this[i] = e
            },
            registerPlugin: function (e, n) {
                var i = n ? o(n) : t(e.constructor).toLowerCase();
                e.uuid = this.GetYoDigits(6, i), e.$element.attr("data-" + i) || e.$element.attr("data-" + i, e.uuid), e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf." + i), this._uuids.push(e.uuid)
            },
            unregisterPlugin: function (e) {
                var n = o(t(e.$element.data("zfPlugin").constructor));
                this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-" + n).removeData("zfPlugin").trigger("destroyed.zf." + n);
                for (var i in e) e[i] = null
            },
            reInit: function (t) {
                var n = t instanceof e;
                try {
                    if (n) t.each(function () {
                        e(this).data("zfPlugin")._init()
                    });
                    else {
                        var r = void 0 === t ? "undefined" : i(t),
                            a = this;
                        ({
                            object: function (t) {
                                t.forEach(function (t) {
                                    t = o(t), e("[data-" + t + "]").foundation("_init")
                                })
                            },
                            string: function () {
                                t = o(t), e("[data-" + t + "]").foundation("_init")
                            },
                            undefined: function () {
                                this.object(Object.keys(a._plugins))
                            }
                        })[r](t)
                    }
                } catch (e) {
                    console.error(e)
                } finally {
                    return t
                }
            },
            GetYoDigits: function (e, t) {
                return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-" + t : "")
            },
            reflow: function (t, i) {
                void 0 === i ? i = Object.keys(this._plugins) : "string" == typeof i && (i = [i]);
                var o = this;
                e.each(i, function (i, r) {
                    var a = o._plugins[r];
                    e(t).find("[data-" + r + "]").addBack("[data-" + r + "]").each(function () {
                        var t = e(this),
                            i = {};
                        if (t.data("zfPlugin")) return void console.warn("Tried to initialize " + r + " on an element that already has a Foundation plugin.");
                        t.attr("data-options") && t.attr("data-options").split(";").forEach(function (e, t) {
                            var o = e.split(":").map(function (e) {
                                return e.trim()
                            });
                            o[0] && (i[o[0]] = n(o[1]))
                        });
                        try {
                            t.data("zfPlugin", new a(e(this), i))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            return
                        }
                    })
                })
            },
            getFnName: t,
            transitionend: function (e) {
                var t, n = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "otransitionend"
                    },
                    i = document.createElement("div");
                for (var o in n) void 0 !== i.style[o] && (t = n[o]);
                return t || (t = setTimeout(function () {
                    e.triggerHandler("transitionend", [e])
                }, 1), "transitionend")
            }
        };
        r.util = {
            throttle: function (e, t) {
                var n = null;
                return function () {
                    var i = this,
                        o = arguments;
                    null === n && (n = setTimeout(function () {
                        e.apply(i, o), n = null
                    }, t))
                }
            }
        };
        var a = function (n) {
            var o = void 0 === n ? "undefined" : i(n),
                a = e("meta.foundation-mq"),
                s = e(".no-js");
            if (a.length || e('<meta class="foundation-mq">').appendTo(document.head), s.length && s.removeClass("no-js"), "undefined" === o) r.MediaQuery._init(), r.reflow(this);
            else {
                if ("string" !== o) throw new TypeError("We're sorry, " + o + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
                var l = Array.prototype.slice.call(arguments, 1),
                    u = this.data("zfPlugin");
                if (void 0 === u || void 0 === u[n]) throw new ReferenceError("We're sorry, '" + n + "' is not an available method for " + (u ? t(u) : "this element") + ".");
                1 === this.length ? u[n].apply(u, l) : this.each(function (t, i) {
                    u[n].apply(e(i).data("zfPlugin"), l)
                })
            }
            return this
        };
        window.Foundation = r, e.fn.foundation = a,
            function () {
                Date.now && window.Date.now || (window.Date.now = Date.now = function () {
                    return (new Date).getTime()
                });
                for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
                    var n = e[t];
                    window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]
                }
                if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                    var i = 0;
                    window.requestAnimationFrame = function (e) {
                        var t = Date.now(),
                            n = Math.max(i + 16, t);
                        return setTimeout(function () {
                            e(i = n)
                        }, n - t)
                    }, window.cancelAnimationFrame = clearTimeout
                }
                window.performance && window.performance.now || (window.performance = {
                    start: Date.now(),
                    now: function () {
                        return Date.now() - this.start
                    }
                })
            }(), Function.prototype.bind || (Function.prototype.bind = function (e) {
                if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var t = Array.prototype.slice.call(arguments, 1),
                    n = this,
                    i = function () {},
                    o = function () {
                        return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                    };
                return this.prototype && (i.prototype = this.prototype), o.prototype = new i, o
            })
    }(jQuery)
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    ! function (e) {
        function t() {
            return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
        }

        function n() {
            return /Android/.test(window.navigator.userAgent)
        }

        function r() {
            return t() || n()
        }
        var a = function () {
            function t(n, o) {
                i(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), o), this._init(), Foundation.registerPlugin(this, "Reveal"), Foundation.Keyboard.register("Reveal", {
                    ENTER: "open",
                    SPACE: "open",
                    ESCAPE: "close"
                })
            }
            return o(t, [{
                key: "_init",
                value: function () {
                    this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                        mq: Foundation.MediaQuery.current
                    }, this.isMobile = r(), this.$anchor = e(e('[data-open="' + this.id + '"]').length ? '[data-open="' + this.id + '"]' : '[data-toggle="' + this.id + '"]'), this.$anchor.attr({
                        "aria-controls": this.id,
                        "aria-haspopup": !0,
                        tabindex: 0
                    }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                        role: "dialog",
                        "aria-hidden": !0,
                        "data-yeti-box": this.id,
                        "data-resize": this.id
                    }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(e(this.options.appendTo)), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && e(window).one("load.zf.reveal", this.open.bind(this))
                }
            }, {
                key: "_makeOverlay",
                value: function () {
                    return e("<div></div>").addClass("reveal-overlay").appendTo(this.options.appendTo)
                }
            }, {
                key: "_updatePosition",
                value: function () {
                    var t, n, i = this.$element.outerWidth(),
                        o = e(window).width(),
                        r = this.$element.outerHeight(),
                        a = e(window).height();
                    t = "auto" === this.options.hOffset ? parseInt((o - i) / 2, 10) : parseInt(this.options.hOffset, 10), n = "auto" === this.options.vOffset ? r > a ? parseInt(Math.min(100, a / 10), 10) : parseInt((a - r) / 4, 10) : parseInt(this.options.vOffset, 10), this.$element.css({
                        top: n + "px"
                    }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                        left: t + "px"
                    }), this.$element.css({
                        margin: "0px"
                    }))
                }
            }, {
                key: "_events",
                value: function () {
                    var t = this,
                        n = this;
                    this.$element.on({
                        "open.zf.trigger": this.open.bind(this),
                        "close.zf.trigger": function (i, o) {
                            if (i.target === n.$element[0] || e(i.target).parents("[data-closable]")[0] === o) return t.close.apply(t)
                        },
                        "toggle.zf.trigger": this.toggle.bind(this),
                        "resizeme.zf.trigger": function () {
                            n._updatePosition()
                        }
                    }), this.$anchor.length && this.$anchor.on("keydown.zf.reveal", function (e) {
                        13 !== e.which && 32 !== e.which || (e.stopPropagation(), e.preventDefault(), n.open())
                    }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function (t) {
                        t.target !== n.$element[0] && !e.contains(n.$element[0], t.target) && e.contains(document, t.target) && n.close()
                    }), this.options.deepLink && e(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
                }
            }, {
                key: "_handleState",
                value: function (e) {
                    window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
                }
            }, {
                key: "open",
                value: function () {
                    function t() {
                        o.isMobile ? (o.originalScrollPos || (o.originalScrollPos = window.pageYOffset), e("html, body").addClass("is-reveal-open")) : e("body").addClass("is-reveal-open")
                    }
                    var n = this;
                    if (this.options.deepLink) {
                        var i = "#" + this.id;
                        window.history.pushState ? window.history.pushState(null, null, i) : window.location.hash = i
                    }
                    this.isActive = !0, this.$element.css({
                        visibility: "hidden"
                    }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                        visibility: "hidden"
                    }).show(), this._updatePosition(), this.$element.hide().css({
                        visibility: ""
                    }), this.$overlay && (this.$overlay.css({
                        visibility: ""
                    }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id);
                    var o = this;
                    if (this.options.animationIn) {
                        var r = function () {
                            o.$element.attr({
                                "aria-hidden": !1,
                                tabindex: -1
                            }).focus(), t(), Foundation.Keyboard.trapFocus(o.$element)
                        };
                        this.options.overlay && Foundation.Motion.animateIn(this.$overlay, "fade-in"), Foundation.Motion.animateIn(this.$element, this.options.animationIn, function () {
                            n.$element && (n.focusableElements = Foundation.Keyboard.findFocusable(n.$element), r())
                        })
                    } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
                    this.$element.attr({
                        "aria-hidden": !1,
                        tabindex: -1
                    }).focus(), Foundation.Keyboard.trapFocus(this.$element), this.$element.trigger("open.zf.reveal"), t(), setTimeout(function () {
                        n._extraHandlers()
                    }, 0)
                }
            }, {
                key: "_extraHandlers",
                value: function () {
                    var t = this;
                    this.$element && (this.focusableElements = Foundation.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || e("body").on("click.zf.reveal", function (n) {
                        n.target !== t.$element[0] && !e.contains(t.$element[0], n.target) && e.contains(document, n.target) && t.close()
                    }), this.options.closeOnEsc && e(window).on("keydown.zf.reveal", function (e) {
                        Foundation.Keyboard.handleKey(e, "Reveal", {
                            close: function () {
                                t.options.closeOnEsc && (t.close(), t.$anchor.focus())
                            }
                        })
                    }), this.$element.on("keydown.zf.reveal", function (n) {
                        var i = e(this);
                        Foundation.Keyboard.handleKey(n, "Reveal", {
                            open: function () {
                                t.$element.find(":focus").is(t.$element.find("[data-close]")) ? setTimeout(function () {
                                    t.$anchor.focus()
                                }, 1) : i.is(t.focusableElements) && t.open()
                            },
                            close: function () {
                                t.options.closeOnEsc && (t.close(), t.$anchor.focus())
                            },
                            handled: function (e) {
                                e && n.preventDefault()
                            }
                        })
                    }))
                }
            }, {
                key: "close",
                value: function () {
                    function t() {
                        n.isMobile ? (e("html, body").removeClass("is-reveal-open"), n.originalScrollPos && (e("body").scrollTop(n.originalScrollPos), n.originalScrollPos = null)) : e("body").removeClass("is-reveal-open"), Foundation.Keyboard.releaseFocus(n.$element), n.$element.attr("aria-hidden", !0), n.$element.trigger("closed.zf.reveal")
                    }
                    if (!this.isActive || !this.$element.is(":visible")) return !1;
                    var n = this;
                    this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", t) : t(), Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, t) : t(), this.$element.hide(this.options.hideDelay)), this.options.closeOnEsc && e(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && e("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, n.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.href.replace("#" + this.id, "")) : window.location.hash = "")
                }
            }, {
                key: "toggle",
                value: function () {
                    this.isActive ? this.close() : this.open()
                }
            }, {
                key: "destroy",
                value: function () {
                    this.options.overlay && (this.$element.appendTo(e(this.options.appendTo)), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), e(window).off(".zf.reveal:" + this.id), Foundation.unregisterPlugin(this)
                }
            }]), t
        }();
        a.defaults = {
            animationIn: "",
            animationOut: "",
            showDelay: 0,
            hideDelay: 0,
            closeOnClick: !0,
            closeOnEsc: !0,
            multipleOpened: !1,
            vOffset: "auto",
            hOffset: "auto",
            fullScreen: !1,
            btmOffsetPct: 10,
            overlay: !0,
            resetOnClose: !1,
            deepLink: !1,
            appendTo: "body"
        }, Foundation.plugin(a, "Reveal")
    }(jQuery)
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    ! function (e) {
        var t = function () {
            function t(n, o) {
                i(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), o), this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "previous",
                    ARROW_DOWN: "next",
                    ARROW_LEFT: "previous"
                })
            }
            return r(t, [{
                key: "_init",
                value: function () {
                    var t = this,
                        n = this;
                    if (this.$element.attr({
                            role: "tablist"
                        }), this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = e('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function () {
                            var t = e(this),
                                i = t.find("a"),
                                o = t.hasClass("" + n.options.linkActiveClass),
                                r = i[0].hash.slice(1),
                                a = i[0].id ? i[0].id : r + "-label",
                                s = e("#" + r);
                            t.attr({
                                role: "presentation"
                            }), i.attr({
                                role: "tab",
                                "aria-controls": r,
                                "aria-selected": o,
                                id: a
                            }), s.attr({
                                role: "tabpanel",
                                "aria-hidden": !o,
                                "aria-labelledby": a
                            }), o && n.options.autoFocus && e(window).load(function () {
                                e("html, body").animate({
                                    scrollTop: t.offset().top
                                }, n.options.deepLinkSmudgeDelay, function () {
                                    i.focus()
                                })
                            })
                        }), this.options.matchHeight) {
                        var i = this.$tabContent.find("img");
                        i.length ? Foundation.onImagesLoaded(i, this._setHeight.bind(this)) : this._setHeight()
                    }
                    this._checkDeepLink = function () {
                        var n = window.location.hash;
                        if (n.length) {
                            var i = t.$element.find('[href="' + n + '"]');
                            if (i.length) {
                                if (t.selectTab(e(n), !0), t.options.deepLinkSmudge) {
                                    var o = t.$element.offset();
                                    e("html, body").animate({
                                        scrollTop: o.top
                                    }, t.options.deepLinkSmudgeDelay)
                                }
                                t.$element.trigger("deeplink.zf.tabs", [i, e(n)])
                            }
                        }
                    }, this.options.deepLink && this._checkDeepLink(), this._events()
                }
            }, {
                key: "_events",
                value: function () {
                    this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), e(window).on("changed.zf.mediaquery", this._setHeightMqHandler)), this.options.deepLink && e(window).on("popstate", this._checkDeepLink)
                }
            }, {
                key: "_addClickHandler",
                value: function () {
                    var t = this;
                    this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function (n) {
                        n.preventDefault(), n.stopPropagation(), t._handleTabChange(e(this))
                    })
                }
            }, {
                key: "_addKeyHandler",
                value: function () {
                    var t = this;
                    this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function (n) {
                        if (9 !== n.which) {
                            var i, o, r = e(this),
                                a = r.parent("ul").children("li");
                            a.each(function (n) {
                                if (e(this).is(r)) return void(t.options.wrapOnKeys ? (i = 0 === n ? a.last() : a.eq(n - 1), o = n === a.length - 1 ? a.first() : a.eq(n + 1)) : (i = a.eq(Math.max(0, n - 1)), o = a.eq(Math.min(n + 1, a.length - 1))))
                            }), Foundation.Keyboard.handleKey(n, "Tabs", {
                                open: function () {
                                    r.find('[role="tab"]').focus(), t._handleTabChange(r)
                                },
                                previous: function () {
                                    i.find('[role="tab"]').focus(), t._handleTabChange(i)
                                },
                                next: function () {
                                    o.find('[role="tab"]').focus(), t._handleTabChange(o)
                                },
                                handled: function () {
                                    n.stopPropagation(), n.preventDefault()
                                }
                            })
                        }
                    })
                }
            }, {
                key: "_handleTabChange",
                value: function (e, t) {
                    if (e.hasClass("" + this.options.linkActiveClass)) return void(this.options.activeCollapse && (this._collapseTab(e), this.$element.trigger("collapse.zf.tabs", [e])));
                    var n = this.$element.find("." + this.options.linkClass + "." + this.options.linkActiveClass),
                        i = e.find('[role="tab"]'),
                        o = i[0].hash,
                        r = this.$tabContent.find(o);
                    if (this._collapseTab(n), this._openTab(e), this.options.deepLink && !t) {
                        var a = e.find("a").attr("href");
                        this.options.updateHistory ? history.pushState({}, "", a) : history.replaceState({}, "", a)
                    }
                    this.$element.trigger("change.zf.tabs", [e, r]), r.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }
            }, {
                key: "_openTab",
                value: function (e) {
                    var t = e.find('[role="tab"]'),
                        n = t[0].hash,
                        i = this.$tabContent.find(n);
                    e.addClass("" + this.options.linkActiveClass), t.attr({
                        "aria-selected": "true"
                    }), i.addClass("" + this.options.panelActiveClass).attr({
                        "aria-hidden": "false"
                    })
                }
            }, {
                key: "_collapseTab",
                value: function (t) {
                    var n = t.removeClass("" + this.options.linkActiveClass).find('[role="tab"]').attr({
                        "aria-selected": "false"
                    });
                    e("#" + n.attr("aria-controls")).removeClass("" + this.options.panelActiveClass).attr({
                        "aria-hidden": "true"
                    })
                }
            }, {
                key: "selectTab",
                value: function (e, t) {
                    var n;
                    n = "object" === (void 0 === e ? "undefined" : o(e)) ? e[0].id : e, n.indexOf("#") < 0 && (n = "#" + n);
                    var i = this.$tabTitles.find('[href="' + n + '"]').parent("." + this.options.linkClass);
                    this._handleTabChange(i, t)
                }
            }, {
                key: "_setHeight",
                value: function () {
                    var t = 0,
                        n = this;
                    this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function () {
                        var i = e(this),
                            o = i.hasClass("" + n.options.panelActiveClass);
                        o || i.css({
                            visibility: "hidden",
                            display: "block"
                        });
                        var r = this.getBoundingClientRect().height;
                        o || i.css({
                            visibility: "",
                            display: ""
                        }), t = r > t ? r : t
                    }).css("height", t + "px")
                }
            }, {
                key: "destroy",
                value: function () {
                    this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && null != this._setHeightMqHandler && e(window).off("changed.zf.mediaquery", this._setHeightMqHandler), this.options.deepLink && e(window).off("popstate", this._checkDeepLink), Foundation.unregisterPlugin(this)
                }
            }]), t
        }();
        t.defaults = {
            deepLink: !1,
            deepLinkSmudge: !1,
            deepLinkSmudgeDelay: 300,
            updateHistory: !1,
            autoFocus: !1,
            wrapOnKeys: !0,
            matchHeight: !1,
            activeCollapse: !1,
            linkClass: "tabs-title",
            linkActiveClass: "is-active",
            panelClass: "tabs-panel",
            panelActiveClass: "is-active"
        }, Foundation.plugin(t, "Tabs")
    }(jQuery)
}, function (e, t, n) {
    "use strict";
    ! function (e) {
        function t(e, t, i, o) {
            var r, a, s, l, u = n(e);
            if (t) {
                var c = n(t);
                a = u.offset.top + u.height <= c.height + c.offset.top, r = u.offset.top >= c.offset.top, s = u.offset.left >= c.offset.left, l = u.offset.left + u.width <= c.width + c.offset.left
            } else a = u.offset.top + u.height <= u.windowDims.height + u.windowDims.offset.top, r = u.offset.top >= u.windowDims.offset.top, s = u.offset.left >= u.windowDims.offset.left, l = u.offset.left + u.width <= u.windowDims.width;
            var d = [a, r, s, l];
            return i ? s === l == !0 : o ? r === a == !0 : -1 === d.indexOf(!1)
        }

        function n(e, t) {
            if ((e = e.length ? e[0] : e) === window || e === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
            var n = e.getBoundingClientRect(),
                i = e.parentNode.getBoundingClientRect(),
                o = document.body.getBoundingClientRect(),
                r = window.pageYOffset,
                a = window.pageXOffset;
            return {
                width: n.width,
                height: n.height,
                offset: {
                    top: n.top + r,
                    left: n.left + a
                },
                parentDims: {
                    width: i.width,
                    height: i.height,
                    offset: {
                        top: i.top + r,
                        left: i.left + a
                    }
                },
                windowDims: {
                    width: o.width,
                    height: o.height,
                    offset: {
                        top: r,
                        left: a
                    }
                }
            }
        }

        function i(e, t, i, o, r, a) {
            var s = n(e),
                l = t ? n(t) : null;
            switch (i) {
                case "top":
                    return {
                        left: Foundation.rtl() ? l.offset.left - s.width + l.width : l.offset.left,
                        top: l.offset.top - (s.height + o)
                    };
                case "left":
                    return {
                        left: l.offset.left - (s.width + r),
                        top: l.offset.top
                    };
                case "right":
                    return {
                        left: l.offset.left + l.width + r,
                        top: l.offset.top
                    };
                case "center top":
                    return {
                        left: l.offset.left + l.width / 2 - s.width / 2,
                        top: l.offset.top - (s.height + o)
                    };
                case "center bottom":
                    return {
                        left: a ? r : l.offset.left + l.width / 2 - s.width / 2,
                        top: l.offset.top + l.height + o
                    };
                case "center left":
                    return {
                        left: l.offset.left - (s.width + r),
                        top: l.offset.top + l.height / 2 - s.height / 2
                    };
                case "center right":
                    return {
                        left: l.offset.left + l.width + r + 1,
                        top: l.offset.top + l.height / 2 - s.height / 2
                    };
                case "center":
                    return {
                        left: s.windowDims.offset.left + s.windowDims.width / 2 - s.width / 2,
                        top: s.windowDims.offset.top + s.windowDims.height / 2 - s.height / 2
                    };
                case "reveal":
                    return {
                        left: (s.windowDims.width - s.width) / 2,
                        top: s.windowDims.offset.top + o
                    };
                case "reveal full":
                    return {
                        left: s.windowDims.offset.left,
                        top: s.windowDims.offset.top
                    };
                case "left bottom":
                    return {
                        left: l.offset.left,
                        top: l.offset.top + l.height + o
                    };
                case "right bottom":
                    return {
                        left: l.offset.left + l.width + r - s.width,
                        top: l.offset.top + l.height + o
                    };
                default:
                    return {
                        left: Foundation.rtl() ? l.offset.left - s.width + l.width : l.offset.left + r,
                        top: l.offset.top + l.height + o
                    }
            }
        }
        Foundation.Box = {
            ImNotTouchingYou: t,
            GetDimensions: n,
            GetOffsets: i
        }
    }(jQuery)
}, function (e, t, n) {
    "use strict";
    ! function (e) {
        var t = {
                9: "TAB",
                13: "ENTER",
                27: "ESCAPE",
                32: "SPACE",
                37: "ARROW_LEFT",
                38: "ARROW_UP",
                39: "ARROW_RIGHT",
                40: "ARROW_DOWN"
            },
            n = {},
            i = {
                keys: function (e) {
                    var t = {};
                    for (var n in e) t[e[n]] = e[n];
                    return t
                }(t),
                parseKey: function (e) {
                    var n = t[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase();
                    return n = n.replace(/\W+/, ""), e.shiftKey && (n = "SHIFT_" + n), e.ctrlKey && (n = "CTRL_" + n), e.altKey && (n = "ALT_" + n), n = n.replace(/_$/, "")
                },
                handleKey: function (t, i, o) {
                    var r, a, s, l = n[i],
                        u = this.parseKey(t);
                    if (!l) return console.warn("Component not defined!");
                    if (r = void 0 === l.ltr ? l : Foundation.rtl() ? e.extend({}, l.ltr, l.rtl) : e.extend({}, l.rtl, l.ltr), a = r[u], (s = o[a]) && "function" == typeof s) {
                        var c = s.apply();
                        (o.handled || "function" == typeof o.handled) && o.handled(c)
                    } else(o.unhandled || "function" == typeof o.unhandled) && o.unhandled()
                },
                findFocusable: function (t) {
                    return !!t && t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function () {
                        return !(!e(this).is(":visible") || e(this).attr("tabindex") < 0)
                    })
                },
                register: function (e, t) {
                    n[e] = t
                },
                trapFocus: function (e) {
                    var t = Foundation.Keyboard.findFocusable(e),
                        n = t.eq(0),
                        i = t.eq(-1);
                    e.on("keydown.zf.trapfocus", function (e) {
                        e.target === i[0] && "TAB" === Foundation.Keyboard.parseKey(e) ? (e.preventDefault(), n.focus()) : e.target === n[0] && "SHIFT_TAB" === Foundation.Keyboard.parseKey(e) && (e.preventDefault(), i.focus())
                    })
                },
                releaseFocus: function (e) {
                    e.off("keydown.zf.trapfocus")
                }
            };
        Foundation.Keyboard = i
    }(jQuery)
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function (e) {
        function t(e) {
            var t = {};
            return "string" != typeof e ? t : (e = e.trim().slice(1, -1)) ? t = e.split("&").reduce(function (e, t) {
                var n = t.replace(/\+/g, " ").split("="),
                    i = n[0],
                    o = n[1];
                return i = decodeURIComponent(i), o = void 0 === o ? null : decodeURIComponent(o), e.hasOwnProperty(i) ? Array.isArray(e[i]) ? e[i].push(o) : e[i] = [e[i], o] : e[i] = o, e
            }, {}) : t
        }
        var n = {
            queries: [],
            current: "",
            _init: function () {
                var n, i = this,
                    o = e(".foundation-mq").css("font-family");
                n = t(o);
                for (var r in n) n.hasOwnProperty(r) && i.queries.push({
                    name: r,
                    value: "only screen and (min-width: " + n[r] + ")"
                });
                this.current = this._getCurrentSize(), this._watcher()
            },
            atLeast: function (e) {
                var t = this.get(e);
                return !!t && window.matchMedia(t).matches
            },
            is: function (e) {
                return e = e.trim().split(" "), e.length > 1 && "only" === e[1] ? e[0] === this._getCurrentSize() : this.atLeast(e[0])
            },
            get: function (e) {
                for (var t in this.queries)
                    if (this.queries.hasOwnProperty(t)) {
                        var n = this.queries[t];
                        if (e === n.name) return n.value
                    }
                return null
            },
            _getCurrentSize: function () {
                for (var e, t = 0; t < this.queries.length; t++) {
                    var n = this.queries[t];
                    window.matchMedia(n.value).matches && (e = n)
                }
                return "object" === (void 0 === e ? "undefined" : i(e)) ? e.name : e
            },
            _watcher: function () {
                var t = this;
                e(window).on("resize.zf.mediaquery", function () {
                    var n = t._getCurrentSize(),
                        i = t.current;
                    n !== i && (t.current = n, e(window).trigger("changed.zf.mediaquery", [n, i]))
                })
            }
        };
        Foundation.MediaQuery = n, window.matchMedia || (window.matchMedia = function () {
            var e = window.styleMedia || window.media;
            if (!e) {
                var t = document.createElement("style"),
                    n = document.getElementsByTagName("script")[0],
                    i = null;
                t.type = "text/css", t.id = "matchmediajs-test", n && n.parentNode && n.parentNode.insertBefore(t, n), i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
                    matchMedium: function (e) {
                        var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                        return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === i.width
                    }
                }
            }
            return function (t) {
                return {
                    matches: e.matchMedium(t || "all"),
                    media: t || "all"
                }
            }
        }()), Foundation.MediaQuery = n
    }(jQuery)
}, function (e, t, n) {
    "use strict";
    ! function (e) {
        function t(e, t, n) {
            function i(s) {
                a || (a = s), r = s - a, n.apply(t), r < e ? o = window.requestAnimationFrame(i, t) : (window.cancelAnimationFrame(o), t.trigger("finished.zf.animate", [t]).triggerHandler("finished.zf.animate", [t]))
            }
            var o, r, a = null;
            if (0 === e) return n.apply(t), void t.trigger("finished.zf.animate", [t]).triggerHandler("finished.zf.animate", [t]);
            o = window.requestAnimationFrame(i)
        }

        function n(t, n, r, a) {
            function s() {
                t || n.hide(), l(), a && a.apply(n)
            }

            function l() {
                n[0].style.transitionDuration = 0, n.removeClass(u + " " + c + " " + r)
            }
            if (n = e(n).eq(0), n.length) {
                var u = t ? i[0] : i[1],
                    c = t ? o[0] : o[1];
                l(), n.addClass(r).css("transition", "none"), requestAnimationFrame(function () {
                    n.addClass(u), t && n.show()
                }), requestAnimationFrame(function () {
                    n[0].offsetWidth, n.css("transition", "").addClass(c)
                }), n.one(Foundation.transitionend(n), s)
            }
        }
        var i = ["mui-enter", "mui-leave"],
            o = ["mui-enter-active", "mui-leave-active"],
            r = {
                animateIn: function (e, t, i) {
                    n(!0, e, t, i)
                },
                animateOut: function (e, t, i) {
                    n(!1, e, t, i)
                }
            };
        Foundation.Move = t, Foundation.Motion = r
    }(jQuery)
}, function (e, t, n) {
    "use strict";
    ! function (e) {
        function t(e, t, n) {
            var i, o, r = this,
                a = t.duration,
                s = Object.keys(e.data())[0] || "timer",
                l = -1;
            this.isPaused = !1, this.restart = function () {
                l = -1, clearTimeout(o), this.start()
            }, this.start = function () {
                this.isPaused = !1, clearTimeout(o), l = l <= 0 ? a : l, e.data("paused", !1), i = Date.now(), o = setTimeout(function () {
                    t.infinite && r.restart(), n && "function" == typeof n && n()
                }, l), e.trigger("timerstart.zf." + s)
            }, this.pause = function () {
                this.isPaused = !0, clearTimeout(o), e.data("paused", !0);
                var t = Date.now();
                l -= t - i, e.trigger("timerpaused.zf." + s)
            }
        }

        function n(t, n) {
            function i() {
                0 === --o && n()
            }
            var o = t.length;
            0 === o && n(), t.each(function () {
                if (this.complete || 4 === this.readyState || "complete" === this.readyState) i();
                else {
                    var t = e(this).attr("src");
                    e(this).attr("src", t + (t.indexOf("?") >= 0 ? "&" : "?") + (new Date).getTime()), e(this).one("load", function () {
                        i()
                    })
                }
            })
        }
        Foundation.Timer = t, Foundation.onImagesLoaded = n
    }(jQuery)
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function (e) {
        function t() {
            s(), o(), r(), a(), n()
        }

        function n(t) {
            var n = e("[data-yeti-box]"),
                o = ["dropdown", "tooltip", "reveal"];
            if (t && ("string" == typeof t ? o.push(t) : "object" === (void 0 === t ? "undefined" : i(t)) && "string" == typeof t[0] ? o.concat(t) : console.error("Plugin names must be strings")), n.length) {
                var r = o.map(function (e) {
                    return "closeme.zf." + e
                }).join(" ");
                e(window).off(r).on(r, function (t, n) {
                    var i = t.namespace.split(".")[0];
                    e("[data-" + i + "]").not('[data-yeti-box="' + n + '"]').each(function () {
                        var t = e(this);
                        t.triggerHandler("close.zf.trigger", [t])
                    })
                })
            }
        }

        function o(t) {
            var n = void 0,
                i = e("[data-resize]");
            i.length && e(window).off("resize.zf.trigger").on("resize.zf.trigger", function (o) {
                n && clearTimeout(n), n = setTimeout(function () {
                    l || i.each(function () {
                        e(this).triggerHandler("resizeme.zf.trigger")
                    }), i.attr("data-events", "resize")
                }, t || 10)
            })
        }

        function r(t) {
            var n = void 0,
                i = e("[data-scroll]");
            i.length && e(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function (o) {
                n && clearTimeout(n), n = setTimeout(function () {
                    l || i.each(function () {
                        e(this).triggerHandler("scrollme.zf.trigger")
                    }), i.attr("data-events", "scroll")
                }, t || 10)
            })
        }

        function a(t) {
            var n = e("[data-mutate]");
            n.length && l && n.each(function () {
                e(this).triggerHandler("mutateme.zf.trigger")
            })
        }

        function s() {
            if (!l) return !1;
            var t = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
                n = function (t) {
                    var n = e(t[0].target);
                    switch (t[0].type) {
                        case "attributes":
                            "scroll" === n.attr("data-events") && "data-events" === t[0].attributeName && n.triggerHandler("scrollme.zf.trigger", [n, window.pageYOffset]), "resize" === n.attr("data-events") && "data-events" === t[0].attributeName && n.triggerHandler("resizeme.zf.trigger", [n]), "style" === t[0].attributeName && (n.closest("[data-mutate]").attr("data-events", "mutate"), n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [n.closest("[data-mutate]")]));
                            break;
                        case "childList":
                            n.closest("[data-mutate]").attr("data-events", "mutate"), n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [n.closest("[data-mutate]")]);
                            break;
                        default:
                            return !1
                    }
                };
            if (t.length)
                for (var i = 0; i <= t.length - 1; i++) {
                    var o = new l(n);
                    o.observe(t[i], {
                        attributes: !0,
                        childList: !0,
                        characterData: !1,
                        subtree: !0,
                        attributeFilter: ["data-events", "style"]
                    })
                }
        }
        var l = function () {
                for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++)
                    if (e[t] + "MutationObserver" in window) return window[e[t] + "MutationObserver"];
                return !1
            }(),
            u = function (t, n) {
                t.data(n).split(" ").forEach(function (i) {
                    e("#" + i)["close" === n ? "trigger" : "triggerHandler"](n + ".zf.trigger", [t])
                })
            };
        e(document).on("click.zf.trigger", "[data-open]", function () {
            u(e(this), "open")
        }), e(document).on("click.zf.trigger", "[data-close]", function () {
            e(this).data("close") ? u(e(this), "close") : e(this).trigger("close.zf.trigger")
        }), e(document).on("click.zf.trigger", "[data-toggle]", function () {
            e(this).data("toggle") ? u(e(this), "toggle") : e(this).trigger("toggle.zf.trigger")
        }), e(document).on("close.zf.trigger", "[data-closable]", function (t) {
            t.stopPropagation();
            var n = e(this).data("closable");
            "" !== n ? Foundation.Motion.animateOut(e(this), n, function () {
                e(this).trigger("closed.zf")
            }) : e(this).fadeOut().trigger("closed.zf")
        }), e(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function () {
            var t = e(this).data("toggle-focus");
            e("#" + t).triggerHandler("toggle.zf.trigger", [e(this)])
        }), e(window).on("load", function () {
            t()
        }), Foundation.IHearYou = t
    }(jQuery)
}, function (e, t, n) {
    (function (t) {
        e.exports = t.$ = n(12)
    }).call(t, n(0))
}, function (e, t, n) {
    (function (t) {
        e.exports = t.jQuery = n(13)
    }).call(t, n(0))
}, function (e, t, n) {
    var i, o;
    /*!
     * jQuery JavaScript Library v3.2.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2017-03-20T18:59Z
     */
    ! function (t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, r) {
        "use strict";

        function a(e, t) {
            t = t || ae;
            var n = t.createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function s(e) {
            var t = !!e && "length" in e && e.length,
                n = ve.type(e);
            return "function" !== n && !ve.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function l(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function u(e, t, n) {
            return ve.isFunction(t) ? ve.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? ve.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? ve.grep(e, function (e) {
                return de.call(t, e) > -1 !== n
            }) : Fe.test(t) ? ve.filter(t, e, n) : (t = ve.filter(t, e), ve.grep(e, function (e) {
                return de.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }

        function c(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function d(e) {
            var t = {};
            return ve.each(e.match(Oe) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function f(e) {
            return e
        }

        function p(e) {
            throw e
        }

        function h(e, t, n, i) {
            var o;
            try {
                e && ve.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && ve.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        function m() {
            ae.removeEventListener("DOMContentLoaded", m), n.removeEventListener("load", m), ve.ready()
        }

        function g() {
            this.expando = ve.expando + g.uid++
        }

        function y(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ie.test(e) ? JSON.parse(e) : e)
        }

        function v(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Re, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = y(n)
                    } catch (e) {}
                    Me.set(e, t, n)
                } else n = void 0;
            return n
        }

        function b(e, t, n, i) {
            var o, r = 1,
                a = 20,
                s = i ? function () {
                    return i.cur()
                } : function () {
                    return ve.css(e, t, "")
                },
                l = s(),
                u = n && n[3] || (ve.cssNumber[t] ? "" : "px"),
                c = (ve.cssNumber[t] || "px" !== u && +l) && We.exec(ve.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do {
                    r = r || ".5", c /= r, ve.style(e, t, c + u)
                } while (r !== (r = s() / l) && 1 !== r && --a)
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
        }

        function w(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                o = Ue[i];
            return o || (t = n.body.appendChild(n.createElement(i)), o = ve.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ue[i] = o, o)
        }

        function x(e, t) {
            for (var n, i, o = [], r = 0, a = e.length; r < a; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = He.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Ve(i) && (o[r] = w(i))) : "none" !== n && (o[r] = "none", He.set(i, "display", n)));
            for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
            return e
        }

        function T(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && l(e, t) ? ve.merge([e], n) : n
        }

        function k(e, t) {
            for (var n = 0, i = e.length; n < i; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"))
        }

        function C(e, t, n, i, o) {
            for (var r, a, s, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if ((r = e[p]) || 0 === r)
                    if ("object" === ve.type(r)) ve.merge(f, r.nodeType ? [r] : r);
                    else if (Je.test(r)) {
                for (a = a || d.appendChild(t.createElement("div")), s = (Ye.exec(r) || ["", ""])[1].toLowerCase(), l = Ge[s] || Ge._default, a.innerHTML = l[1] + ve.htmlPrefilter(r) + l[2], c = l[0]; c--;) a = a.lastChild;
                ve.merge(f, a.childNodes), a = d.firstChild, a.textContent = ""
            } else f.push(t.createTextNode(r));
            for (d.textContent = "", p = 0; r = f[p++];)
                if (i && ve.inArray(r, i) > -1) o && o.push(r);
                else if (u = ve.contains(r.ownerDocument, r), a = T(d.appendChild(r), "script"), u && k(a), n)
                for (c = 0; r = a[c++];) Qe.test(r.type || "") && n.push(r);
            return d
        }

        function S() {
            return !0
        }

        function E() {
            return !1
        }

        function A() {
            try {
                return ae.activeElement
            } catch (e) {}
        }

        function F(e, t, n, i, o, r) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) F(e, s, n, i, t[s], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = E;
            else if (!o) return e;
            return 1 === r && (a = o, o = function (e) {
                return ve().off(e), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = ve.guid++)), e.each(function () {
                ve.event.add(this, t, o, i, n)
            })
        }

        function _(e, t) {
            return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") ? ve(">tbody", e)[0] || e : e
        }

        function D(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function N(e) {
            var t = at.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function j(e, t) {
            var n, i, o, r, a, s, l, u;
            if (1 === t.nodeType) {
                if (He.hasData(e) && (r = He.access(e), a = He.set(t, r), u = r.events)) {
                    delete a.handle, a.events = {};
                    for (o in u)
                        for (n = 0, i = u[o].length; n < i; n++) ve.event.add(t, o, u[o][n])
                }
                Me.hasData(e) && (s = Me.access(e), l = ve.extend({}, s), Me.set(t, l))
            }
        }

        function O(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function q(e, t, n, i) {
            t = ue.apply([], t);
            var o, r, s, l, u, c, d = 0,
                f = e.length,
                p = f - 1,
                h = t[0],
                m = ve.isFunction(h);
            if (m || f > 1 && "string" == typeof h && !ye.checkClone && rt.test(h)) return e.each(function (o) {
                var r = e.eq(o);
                m && (t[0] = h.call(this, o, r.html())), q(r, t, n, i)
            });
            if (f && (o = C(t, e[0].ownerDocument, !1, e, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (s = ve.map(T(o, "script"), D), l = s.length; d < f; d++) u = o, d !== p && (u = ve.clone(u, !0, !0), l && ve.merge(s, T(u, "script"))), n.call(e[d], u, d);
                if (l)
                    for (c = s[s.length - 1].ownerDocument, ve.map(s, N), d = 0; d < l; d++) u = s[d], Qe.test(u.type || "") && !He.access(u, "globalEval") && ve.contains(c, u) && (u.src ? ve._evalUrl && ve._evalUrl(u.src) : a(u.textContent.replace(st, ""), c))
            }
            return e
        }

        function L(e, t, n) {
            for (var i, o = t ? ve.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || ve.cleanData(T(i)), i.parentNode && (n && ve.contains(i.ownerDocument, i) && k(T(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function P(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || ct(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || ve.contains(e.ownerDocument, e) || (a = ve.style(e, t)), !ye.pixelMarginRight() && ut.test(a) && lt.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
        }

        function $(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function H(e) {
            if (e in gt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = mt.length; n--;)
                if ((e = mt[n] + t) in gt) return e
        }

        function M(e) {
            var t = ve.cssProps[e];
            return t || (t = ve.cssProps[e] = H(e) || e), t
        }

        function I(e, t, n) {
            var i = We.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function R(e, t, n, i, o) {
            var r, a = 0;
            for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (a += ve.css(e, n + Be[r], !0, o)), i ? ("content" === n && (a -= ve.css(e, "padding" + Be[r], !0, o)), "margin" !== n && (a -= ve.css(e, "border" + Be[r] + "Width", !0, o))) : (a += ve.css(e, "padding" + Be[r], !0, o), "padding" !== n && (a += ve.css(e, "border" + Be[r] + "Width", !0, o)));
            return a
        }

        function z(e, t, n) {
            var i, o = ct(e),
                r = P(e, t, o),
                a = "border-box" === ve.css(e, "boxSizing", !1, o);
            return ut.test(r) ? r : (i = a && (ye.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + R(e, t, n || (a ? "border" : "content"), i, o) + "px")
        }

        function W(e, t, n, i, o) {
            return new W.prototype.init(e, t, n, i, o)
        }

        function B() {
            vt && (!1 === ae.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(B) : n.setTimeout(B, ve.fx.interval), ve.fx.tick())
        }

        function V() {
            return n.setTimeout(function () {
                yt = void 0
            }), yt = ve.now()
        }

        function K(e, t) {
            var n, i = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Be[i], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function U(e, t, n) {
            for (var i, o = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), r = 0, a = o.length; r < a; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function X(e, t, n) {
            var i, o, r, a, s, l, u, c, d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                m = e.nodeType && Ve(e),
                g = He.get(e, "fxshow");
            n.queue || (a = ve._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, f.always(function () {
                f.always(function () {
                    a.unqueued--, ve.queue(e, "fx").length || a.empty.fire()
                })
            }));
            for (i in t)
                if (o = t[i], bt.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    p[i] = g && g[i] || ve.style(e, i)
                }
            if ((l = !ve.isEmptyObject(t)) || !ve.isEmptyObject(p)) {
                d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = g && g.display, null == u && (u = He.get(e, "display")), c = ve.css(e, "display"), "none" === c && (u ? c = u : (x([e], !0), u = e.style.display || u, c = ve.css(e, "display"), x([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === ve.css(e, "float") && (l || (f.done(function () {
                    h.display = u
                }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1;
                for (i in p) l || (g ? "hidden" in g && (m = g.hidden) : g = He.access(e, "fxshow", {
                    display: u
                }), r && (g.hidden = !m), m && x([e], !0), f.done(function () {
                    m || x([e]), He.remove(e, "fxshow");
                    for (i in p) ve.style(e, i, p[i])
                })), l = U(m ? g[i] : 0, i, f), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }

        function Y(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = ve.camelCase(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = ve.cssHooks[i]) && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
                } else t[i] = o
        }

        function Q(e, t, n) {
            var i, o, r = 0,
                a = Q.prefilters.length,
                s = ve.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (o) return !1;
                    for (var t = yt || V(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; a < l; a++) u.tweens[a].run(r);
                    return s.notifyWith(e, [u, r, n]), r < 1 && l ? n : (l || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: ve.extend({}, t),
                    opts: ve.extend(!0, {
                        specialEasing: {},
                        easing: ve.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: yt || V(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = ve.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (Y(c, u.opts.specialEasing); r < a; r++)
                if (i = Q.prefilters[r].call(u, e, c, u.opts)) return ve.isFunction(i.stop) && (ve._queueHooks(u.elem, u.opts.queue).stop = ve.proxy(i.stop, i)), i;
            return ve.map(c, U, u), ve.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), ve.fx.timer(ve.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u
        }

        function G(e) {
            return (e.match(Oe) || []).join(" ")
        }

        function J(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Z(e, t, n, i) {
            var o;
            if (Array.isArray(t)) ve.each(t, function (t, o) {
                n || Dt.test(e) ? i(e, o) : Z(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== ve.type(t)) i(e, t);
            else
                for (o in t) Z(e + "[" + o + "]", t[o], n, i)
        }

        function ee(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(Oe) || [];
                if (ve.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function te(e, t, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, ve.each(e[s] || [], function (e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var r = {},
                a = e === zt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function ne(e, t) {
            var n, i, o = ve.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && ve.extend(!0, e, i), e
        }

        function ie(e, t, n) {
            for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (o in s)
                    if (s[o] && s[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    a || (a = o)
                }
                r = r || a
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function oe(e, t, n, i) {
            var o, r, a, s, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (r = c.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (!(a = u[l + " " + r] || u["* " + r]))
                    for (o in u)
                        if (s = o.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));
                            break
                        }
                if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }
        var re = [],
            ae = n.document,
            se = Object.getPrototypeOf,
            le = re.slice,
            ue = re.concat,
            ce = re.push,
            de = re.indexOf,
            fe = {},
            pe = fe.toString,
            he = fe.hasOwnProperty,
            me = he.toString,
            ge = me.call(Object),
            ye = {},
            ve = function (e, t) {
                return new ve.fn.init(e, t)
            },
            be = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            we = /^-ms-/,
            xe = /-([a-z])/g,
            Te = function (e, t) {
                return t.toUpperCase()
            };
        ve.fn = ve.prototype = {
            jquery: "3.2.1",
            constructor: ve,
            length: 0,
            toArray: function () {
                return le.call(this)
            },
            get: function (e) {
                return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
                var t = ve.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function (e) {
                return ve.each(this, e)
            },
            map: function (e) {
                return this.pushStack(ve.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(le.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: ce,
            sort: re.sort,
            splice: re.splice
        }, ve.extend = ve.fn.extend = function () {
            var e, t, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ve.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (u && i && (ve.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && ve.isPlainObject(n) ? n : {}, a[t] = ve.extend(u, r, i)) : void 0 !== i && (a[t] = i));
            return a
        }, ve.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === ve.type(e)
            },
            isWindow: function (e) {
                return null != e && e === e.window
            },
            isNumeric: function (e) {
                var t = ve.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== pe.call(e)) && (!(t = se(e)) || "function" == typeof (n = he.call(t, "constructor") && t.constructor) && me.call(n) === ge)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? fe[pe.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                a(e)
            },
            camelCase: function (e) {
                return e.replace(we, "ms-").replace(xe, Te)
            },
            each: function (e, t) {
                var n, i = 0;
                if (s(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(be, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? ve.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : de.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return e.length = o, e
            },
            grep: function (e, t, n) {
                for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
                return i
            },
            map: function (e, t, n) {
                var i, o, r = 0,
                    a = [];
                if (s(e))
                    for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
                else
                    for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
                return ue.apply([], a)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, o;
                if ("string" == typeof t && (n = e[t], t = e, e = n), ve.isFunction(e)) return i = le.call(arguments, 2), o = function () {
                    return e.apply(t || this, i.concat(le.call(arguments)))
                }, o.guid = e.guid = e.guid || ve.guid++, o
            },
            now: Date.now,
            support: ye
        }), "function" == typeof Symbol && (ve.fn[Symbol.iterator] = re[Symbol.iterator]), ve.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            fe["[object " + t + "]"] = t.toLowerCase()
        });
        var ke =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function (e) {
                function t(e, t, n, i) {
                    var o, r, a, s, l, c, f, p = t && t.ownerDocument,
                        h = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                    if (!i && ((t ? t.ownerDocument || t : M) !== N && D(t), t = t || N, O)) {
                        if (11 !== h && (l = me.exec(e)))
                            if (o = l[1]) {
                                if (9 === h) {
                                    if (!(a = t.getElementById(o))) return n;
                                    if (a.id === o) return n.push(a), n
                                } else if (p && (a = p.getElementById(o)) && $(t, a) && a.id === o) return n.push(a), n
                            } else {
                                if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                                if ((o = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                            }
                        if (w.qsa && !B[e + " "] && (!q || !q.test(e))) {
                            if (1 !== h) p = t, f = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(be, we) : t.setAttribute("id", s = H), c = C(e), r = c.length; r--;) c[r] = "#" + s + " " + d(c[r]);
                                f = c.join(","), p = ge.test(e) && u(t.parentNode) || t
                            }
                            if (f) try {
                                return Q.apply(n, p.querySelectorAll(f)), n
                            } catch (e) {} finally {
                                s === H && t.removeAttribute("id")
                            }
                        }
                    }
                    return E(e.replace(re, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }
                    var t = [];
                    return e
                }

                function i(e) {
                    return e[H] = !0, e
                }

                function o(e) {
                    var t = N.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function r(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function l(e) {
                    return i(function (t) {
                        return t = +t, i(function (n, i) {
                            for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function u(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                function c() {}

                function d(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function f(e, t, n) {
                    var i = t.dir,
                        o = t.next,
                        r = o || i,
                        a = n && "parentNode" === r,
                        s = R++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || a) return e(t, n, o);
                        return !1
                    } : function (t, n, l) {
                        var u, c, d, f = [I, s];
                        if (l) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || a)
                                    if (d = t[H] || (t[H] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                                    else {
                                        if ((u = c[r]) && u[0] === I && u[1] === s) return f[2] = u[2];
                                        if (c[r] = f, f[2] = e(t, n, l)) return !0
                                    } return !1
                    }
                }

                function p(e) {
                    return e.length > 1 ? function (t, n, i) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function h(e, n, i) {
                    for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
                    return i
                }

                function m(e, t, n, i, o) {
                    for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), u && t.push(s)));
                    return a
                }

                function g(e, t, n, o, r, a) {
                    return o && !o[H] && (o = g(o)), r && !r[H] && (r = g(r, a)), i(function (i, a, s, l) {
                        var u, c, d, f = [],
                            p = [],
                            g = a.length,
                            y = i || h(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !i && t ? y : m(y, f, e, s, l),
                            b = n ? r || (i ? e : g || o) ? [] : a : v;
                        if (n && n(v, b, s, l), o)
                            for (u = m(b, p), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(v[p[c]] = d));
                        if (i) {
                            if (r || e) {
                                if (r) {
                                    for (u = [], c = b.length; c--;)(d = b[c]) && u.push(v[c] = d);
                                    r(null, b = [], u, l)
                                }
                                for (c = b.length; c--;)(d = b[c]) && (u = r ? J(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                            }
                        } else b = m(b === a ? b.splice(g, b.length) : b), r ? r(null, a, b, l) : Q.apply(a, b)
                    })
                }

                function y(e) {
                    for (var t, n, i, o = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = f(function (e) {
                            return e === t
                        }, a, !0), u = f(function (e) {
                            return J(t, e) > -1
                        }, a, !0), c = [function (e, n, i) {
                            var o = !r && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                            return t = null, o
                        }]; s < o; s++)
                        if (n = x.relative[e[s].type]) c = [f(p(c), n)];
                        else {
                            if (n = x.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                                for (i = ++s; i < o && !x.relative[e[i].type]; i++);
                                return g(s > 1 && p(c), s > 1 && d(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(re, "$1"), n, s < i && y(e.slice(s, i)), i < o && y(e = e.slice(i)), i < o && d(e))
                            }
                            c.push(n)
                        }
                    return p(c)
                }

                function v(e, n) {
                    var o = n.length > 0,
                        r = e.length > 0,
                        a = function (i, a, s, l, u) {
                            var c, d, f, p = 0,
                                h = "0",
                                g = i && [],
                                y = [],
                                v = A,
                                b = i || r && x.find.TAG("*", u),
                                w = I += null == v ? 1 : Math.random() || .1,
                                T = b.length;
                            for (u && (A = a === N || a || u); h !== T && null != (c = b[h]); h++) {
                                if (r && c) {
                                    for (d = 0, a || c.ownerDocument === N || (D(c), s = !O); f = e[d++];)
                                        if (f(c, a || N, s)) {
                                            l.push(c);
                                            break
                                        }
                                    u && (I = w)
                                }
                                o && ((c = !f && c) && p--, i && g.push(c))
                            }
                            if (p += h, o && h !== p) {
                                for (d = 0; f = n[d++];) f(g, y, a, s);
                                if (i) {
                                    if (p > 0)
                                        for (; h--;) g[h] || y[h] || (y[h] = X.call(l));
                                    y = m(y)
                                }
                                Q.apply(l, y), u && !i && y.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                            }
                            return u && (I = w, A = v), g
                        };
                    return o ? i(a) : a
                }
                var b, w, x, T, k, C, S, E, A, F, _, D, N, j, O, q, L, P, $, H = "sizzle" + 1 * new Date,
                    M = e.document,
                    I = 0,
                    R = 0,
                    z = n(),
                    W = n(),
                    B = n(),
                    V = function (e, t) {
                        return e === t && (_ = !0), 0
                    },
                    K = {}.hasOwnProperty,
                    U = [],
                    X = U.pop,
                    Y = U.push,
                    Q = U.push,
                    G = U.slice,
                    J = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ee = "[\\x20\\t\\r\\n\\f]",
                    te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                    ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                    oe = new RegExp(ee + "+", "g"),
                    re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                    ae = new RegExp("^" + ee + "*," + ee + "*"),
                    se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                    le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                    ue = new RegExp(ie),
                    ce = new RegExp("^" + te + "$"),
                    de = {
                        ID: new RegExp("^#(" + te + ")"),
                        CLASS: new RegExp("^\\.(" + te + ")"),
                        TAG: new RegExp("^(" + te + "|[*])"),
                        ATTR: new RegExp("^" + ne),
                        PSEUDO: new RegExp("^" + ie),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Z + ")$", "i"),
                        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                    },
                    fe = /^(?:input|select|textarea|button)$/i,
                    pe = /^h\d$/i,
                    he = /^[^{]+\{\s*\[native \w/,
                    me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ge = /[+~]/,
                    ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                    ve = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    we = function (e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    xe = function () {
                        D()
                    },
                    Te = f(function (e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    Q.apply(U = G.call(M.childNodes), M.childNodes), U[M.childNodes.length].nodeType
                } catch (e) {
                    Q = {
                        apply: U.length ? function (e, t) {
                            Y.apply(e, G.call(t))
                        } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, k = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, D = t.setDocument = function (e) {
                    var t, n, i = e ? e.ownerDocument || e : M;
                    return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, j = N.documentElement, O = !k(N), M !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = o(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = o(function (e) {
                        return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = he.test(N.getElementsByClassName), w.getById = o(function (e) {
                        return j.appendChild(e).id = H, !N.getElementsByName || !N.getElementsByName(H).length
                    }), w.getById ? (x.filter.ID = function (e) {
                        var t = e.replace(ye, ve);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, x.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && O) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (x.filter.ID = function (e) {
                        var t = e.replace(ye, ve);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, x.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && O) {
                            var n, i, o, r = t.getElementById(e);
                            if (r) {
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                            }
                            return []
                        }
                    }), x.find.TAG = w.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, i = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, x.find.CLASS = w.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e)
                    }, L = [], q = [], (w.qsa = he.test(N.querySelectorAll)) && (o(function (e) {
                        j.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + H + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || q.push(".#.+[+~]")
                    }), o(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = N.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), j.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
                    })), (w.matchesSelector = he.test(P = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function (e) {
                        w.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), L.push("!=", ie)
                    }), q = q.length && new RegExp(q.join("|")), L = L.length && new RegExp(L.join("|")), t = he.test(j.compareDocumentPosition), $ = t || he.test(j.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, V = t ? function (e, t) {
                        if (e === t) return _ = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === M && $(M, e) ? -1 : t === N || t.ownerDocument === M && $(M, t) ? 1 : F ? J(F, e) - J(F, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return _ = !0, 0;
                        var n, i = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            s = [e],
                            l = [t];
                        if (!o || !r) return e === N ? -1 : t === N ? 1 : o ? -1 : r ? 1 : F ? J(F, e) - J(F, t) : 0;
                        if (o === r) return a(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; s[i] === l[i];) i++;
                        return i ? a(s[i], l[i]) : s[i] === M ? -1 : l[i] === M ? 1 : 0
                    }, N) : N
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== N && D(e), n = n.replace(le, "='$1']"), w.matchesSelector && O && !B[n + " "] && (!L || !L.test(n)) && (!q || !q.test(n))) try {
                        var i = P.call(e, n);
                        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (e) {}
                    return t(n, N, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== N && D(e), $(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== N && D(e);
                    var n = x.attrHandle[t.toLowerCase()],
                        i = n && K.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                    return void 0 !== i ? i : w.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.escape = function (e) {
                    return (e + "").replace(be, we)
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [],
                        i = 0,
                        o = 0;
                    if (_ = !w.detectDuplicates, F = !w.sortStable && e.slice(0), e.sort(V), _) {
                        for (; t = e[o++];) t === e[o] && (i = n.push(o));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return F = null, e
                }, T = t.getText = function (e) {
                    var t, n = "",
                        i = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += T(t);
                    return n
                }, x = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: de,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(ye, ve), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, ve), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(ye, ve).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = z[e + " "];
                            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && z(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, n, i) {
                            return function (o) {
                                var r = t.attr(o, e);
                                return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function (e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === o ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var u, c, d, f, p, h, m = r !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(),
                                    v = !l && !s,
                                    b = !1;
                                if (g) {
                                    if (r) {
                                        for (; m;) {
                                            for (f = t; f = f[m];)
                                                if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && v) {
                                        for (f = g, d = f[H] || (f[H] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === I && u[1], b = p && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                            if (1 === f.nodeType && ++b && f === t) {
                                                c[e] = [I, p, b];
                                                break
                                            }
                                    } else if (v && (f = t, d = f[H] || (f[H] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === I && u[1], b = p), !1 === b)
                                        for (;
                                            (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++b || (v && (d = f[H] || (f[H] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [I, b]), f !== t)););
                                    return (b -= o) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function (e, n) {
                            var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return r[H] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                for (var i, o = r(e, n), a = o.length; a--;) i = J(e, o[a]), e[i] = !(t[i] = o[a])
                            }) : function (e) {
                                return r(e, 0, o)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: i(function (e) {
                            var t = [],
                                n = [],
                                o = S(e.replace(re, "$1"));
                            return o[H] ? i(function (e, t, n, i) {
                                for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                            }) : function (e, i, r) {
                                return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: i(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: i(function (e) {
                            return e = e.replace(ye, ve),
                                function (t) {
                                    return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                                }
                        }),
                        lang: i(function (e) {
                            return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, ve).toLowerCase(),
                                function (t) {
                                    var n;
                                    do {
                                        if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === j
                        },
                        focus: function (e) {
                            return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: s(!1),
                        disabled: s(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !x.pseudos.empty(e)
                        },
                        header: function (e) {
                            return pe.test(e.nodeName)
                        },
                        input: function (e) {
                            return fe.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: l(function () {
                            return [0]
                        }),
                        last: l(function (e, t) {
                            return [t - 1]
                        }),
                        eq: l(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: l(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: l(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: l(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: l(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, x.pseudos.nth = x.pseudos.eq;
                for (b in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) x.pseudos[b] = function (e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(b);
                for (b in {
                        submit: !0,
                        reset: !0
                    }) x.pseudos[b] = function (e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(b);
                return c.prototype = x.filters = x.pseudos, x.setFilters = new c, C = t.tokenize = function (e, n) {
                    var i, o, r, a, s, l, u, c = W[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, l = [], u = x.preFilter; s;) {
                        i && !(o = ae.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = se.exec(s)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(re, " ")
                        }), s = s.slice(i.length));
                        for (a in x.filter) !(o = de[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: a,
                            matches: o
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
                }, S = t.compile = function (e, t) {
                    var n, i = [],
                        o = [],
                        r = B[e + " "];
                    if (!r) {
                        for (t || (t = C(e)), n = t.length; n--;) r = y(t[n]), r[H] ? i.push(r) : o.push(r);
                        r = B(e, v(o, i)), r.selector = e
                    }
                    return r
                }, E = t.select = function (e, t, n, i) {
                    var o, r, a, s, l, c = "function" == typeof e && e,
                        f = !i && C(e = c.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if (r = f[0] = f[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && O && x.relative[r[1].type]) {
                            if (!(t = (x.find.ID(a.matches[0].replace(ye, ve), t) || [])[0])) return n;
                            c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                        }
                        for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]);)
                            if ((l = x.find[s]) && (i = l(a.matches[0].replace(ye, ve), ge.test(r[0].type) && u(t.parentNode) || t))) {
                                if (r.splice(o, 1), !(e = i.length && d(r))) return Q.apply(n, i), n;
                                break
                            }
                    }
                    return (c || S(e, f))(i, t, !O, n, !t || ge.test(e) && u(t.parentNode) || t), n
                }, w.sortStable = H.split("").sort(V).join("") === H, w.detectDuplicates = !!_, D(), w.sortDetached = o(function (e) {
                    return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
                }), o(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && o(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || r("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), o(function (e) {
                    return null == e.getAttribute("disabled")
                }) || r(Z, function (e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(n);
        ve.find = ke, ve.expr = ke.selectors, ve.expr[":"] = ve.expr.pseudos, ve.uniqueSort = ve.unique = ke.uniqueSort, ve.text = ke.getText, ve.isXMLDoc = ke.isXML, ve.contains = ke.contains, ve.escapeSelector = ke.escape;
        var Ce = function (e, t, n) {
                for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && ve(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            Se = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Ee = ve.expr.match.needsContext,
            Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Fe = /^.[^:#\[\.,]*$/;
        ve.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ve.find.matchesSelector(i, e) ? [i] : [] : ve.find.matches(e, ve.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, ve.fn.extend({
            find: function (e) {
                var t, n, i = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(ve(e).filter(function () {
                    for (t = 0; t < i; t++)
                        if (ve.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) ve.find(e, o[t], n);
                return i > 1 ? ve.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(u(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(u(this, e || [], !0))
            },
            is: function (e) {
                return !!u(this, "string" == typeof e && Ee.test(e) ? ve(e) : e || [], !1).length
            }
        });
        var _e, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (ve.fn.init = function (e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || _e, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : De.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ve ? t[0] : t, ve.merge(this, ve.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)), Ae.test(i[1]) && ve.isPlainObject(t))
                        for (i in t) ve.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = ae.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : ve.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ve) : ve.makeArray(e, this)
        }).prototype = ve.fn, _e = ve(ae);
        var Ne = /^(?:parents|prev(?:Until|All))/,
            je = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ve.fn.extend({
            has: function (e) {
                var t = ve(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++)
                        if (ve.contains(this, t[e])) return !0
                })
            },
            closest: function (e, t) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    a = "string" != typeof e && ve(e);
                if (!Ee.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ve.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? ve.uniqueSort(r) : r)
            },
            index: function (e) {
                return e ? "string" == typeof e ? de.call(ve(e), this[0]) : de.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(ve.uniqueSort(ve.merge(this.get(), ve(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ve.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return Ce(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return Ce(e, "parentNode", n)
            },
            next: function (e) {
                return c(e, "nextSibling")
            },
            prev: function (e) {
                return c(e, "previousSibling")
            },
            nextAll: function (e) {
                return Ce(e, "nextSibling")
            },
            prevAll: function (e) {
                return Ce(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return Ce(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return Ce(e, "previousSibling", n)
            },
            siblings: function (e) {
                return Se((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return Se(e.firstChild)
            },
            contents: function (e) {
                return l(e, "iframe") ? e.contentDocument : (l(e, "template") && (e = e.content || e), ve.merge([], e.childNodes))
            }
        }, function (e, t) {
            ve.fn[e] = function (n, i) {
                var o = ve.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ve.filter(i, o)), this.length > 1 && (je[e] || ve.uniqueSort(o), Ne.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var Oe = /[^\x20\t\r\n\f]+/g;
        ve.Callbacks = function (e) {
            e = "string" == typeof e ? d(e) : ve.extend({}, e);
            var t, n, i, o, r = [],
                a = [],
                s = -1,
                l = function () {
                    for (o = o || e.once, i = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < r.length;) !1 === r[s].apply(n[0], n[1]) && e.stopOnFalse && (s = r.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                },
                u = {
                    add: function () {
                        return r && (n && !t && (s = r.length - 1, a.push(n)), function t(n) {
                            ve.each(n, function (n, i) {
                                ve.isFunction(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== ve.type(i) && t(i)
                            })
                        }(arguments), n && !t && l()), this
                    },
                    remove: function () {
                        return ve.each(arguments, function (e, t) {
                            for (var n;
                                (n = ve.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function (e) {
                        return e ? ve.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function () {
                        return r && (r = []), this
                    },
                    disable: function () {
                        return o = a = [], r = n = "", this
                    },
                    disabled: function () {
                        return !r
                    },
                    lock: function () {
                        return o = a = [], n || t || (r = n = ""), this
                    },
                    locked: function () {
                        return !!o
                    },
                    fireWith: function (e, n) {
                        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return u
        }, ve.extend({
            Deferred: function (e) {
                var t = [["notify", "progress", ve.Callbacks("memory"), ve.Callbacks("memory"), 2], ["resolve", "done", ve.Callbacks("once memory"), ve.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ve.Callbacks("once memory"), ve.Callbacks("once memory"), 1, "rejected"]],
                    i = "pending",
                    o = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function (e) {
                            return o.then(null, e)
                        },
                        pipe: function () {
                            var e = arguments;
                            return ve.Deferred(function (n) {
                                ve.each(t, function (t, i) {
                                    var o = ve.isFunction(e[i[4]]) && e[i[4]];
                                    r[i[1]](function () {
                                        var e = o && o.apply(this, arguments);
                                        e && ve.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function (e, i, o) {
                            function r(e, t, i, o) {
                                return function () {
                                    var s = this,
                                        l = arguments,
                                        u = function () {
                                            var n, u;
                                            if (!(e < a)) {
                                                if ((n = i.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, ve.isFunction(u) ? o ? u.call(n, r(a, t, f, o), r(a, t, p, o)) : (a++, u.call(n, r(a, t, f, o), r(a, t, p, o), r(a, t, f, t.notifyWith))) : (i !== f && (s = void 0, l = [n]), (o || t.resolveWith)(s, l))
                                            }
                                        },
                                        c = o ? u : function () {
                                            try {
                                                u()
                                            } catch (n) {
                                                ve.Deferred.exceptionHook && ve.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= a && (i !== p && (s = void 0, l = [n]), t.rejectWith(s, l))
                                            }
                                        };
                                    e ? c() : (ve.Deferred.getStackHook && (c.stackTrace = ve.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            var a = 0;
                            return ve.Deferred(function (n) {
                                t[0][3].add(r(0, n, ve.isFunction(o) ? o : f, n.notifyWith)), t[1][3].add(r(0, n, ve.isFunction(e) ? e : f)), t[2][3].add(r(0, n, ve.isFunction(i) ? i : p))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? ve.extend(e, o) : o
                        }
                    },
                    r = {};
                return ve.each(t, function (e, n) {
                    var a = n[2],
                        s = n[5];
                    o[n[1]] = a.add, s && a.add(function () {
                        i = s
                    }, t[3 - e][2].disable, t[0][2].lock), a.add(n[3].fire), r[n[0]] = function () {
                        return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[n[0] + "With"] = a.fireWith
                }), o.promise(r), e && e.call(r, r), r
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    o = le.call(arguments),
                    r = ve.Deferred(),
                    a = function (e) {
                        return function (n) {
                            i[e] = this, o[e] = arguments.length > 1 ? le.call(arguments) : n, --t || r.resolveWith(i, o)
                        }
                    };
                if (t <= 1 && (h(e, r.done(a(n)).resolve, r.reject, !t), "pending" === r.state() || ve.isFunction(o[n] && o[n].then))) return r.then();
                for (; n--;) h(o[n], a(n), r.reject);
                return r.promise()
            }
        });
        var qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        ve.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && qe.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, ve.readyException = function (e) {
            n.setTimeout(function () {
                throw e
            })
        };
        var Le = ve.Deferred();
        ve.fn.ready = function (e) {
            return Le.then(e).catch(function (e) {
                ve.readyException(e)
            }), this
        }, ve.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --ve.readyWait : ve.isReady) || (ve.isReady = !0, !0 !== e && --ve.readyWait > 0 || Le.resolveWith(ae, [ve]))
            }
        }), ve.ready.then = Le.then, "complete" === ae.readyState || "loading" !== ae.readyState && !ae.documentElement.doScroll ? n.setTimeout(ve.ready) : (ae.addEventListener("DOMContentLoaded", m), n.addEventListener("load", m));
        var Pe = function (e, t, n, i, o, r, a) {
                var s = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === ve.type(n)) {
                    o = !0;
                    for (s in n) Pe(e, t, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0, ve.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                        return u.call(ve(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
            },
            $e = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        g.uid = 1, g.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, $e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function (e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[ve.camelCase(t)] = n;
                else
                    for (i in t) o[ve.camelCase(i)] = t[i];
                return o
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ve.camelCase(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(ve.camelCase) : (t = ve.camelCase(t), t = t in i ? [t] : t.match(Oe) || []), n = t.length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || ve.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !ve.isEmptyObject(t)
            }
        };
        var He = new g,
            Me = new g,
            Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Re = /[A-Z]/g;
        ve.extend({
            hasData: function (e) {
                return Me.hasData(e) || He.hasData(e)
            },
            data: function (e, t, n) {
                return Me.access(e, t, n)
            },
            removeData: function (e, t) {
                Me.remove(e, t)
            },
            _data: function (e, t, n) {
                return He.access(e, t, n)
            },
            _removeData: function (e, t) {
                He.remove(e, t)
            }
        }), ve.fn.extend({
            data: function (e, t) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Me.get(r), 1 === r.nodeType && !He.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ve.camelCase(i.slice(5)), v(r, i, o[i])));
                        He.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function () {
                    Me.set(this, e)
                }) : Pe(this, function (t) {
                    var n;
                    if (r && void 0 === t) {
                        if (void 0 !== (n = Me.get(r, e))) return n;
                        if (void 0 !== (n = v(r, e))) return n
                    } else this.each(function () {
                        Me.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    Me.remove(this, e)
                })
            }
        }), ve.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = He.get(e, t), n && (!i || Array.isArray(n) ? i = He.access(e, t, ve.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = ve.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = ve._queueHooks(e, t),
                    a = function () {
                        ve.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return He.get(e, n) || He.access(e, n, {
                    empty: ve.Callbacks("once memory").add(function () {
                        He.remove(e, [t + "queue", n])
                    })
                })
            }
        }), ve.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ve.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = ve.queue(this, e, t);
                    ve._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ve.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    ve.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, i = 1,
                    o = ve.Deferred(),
                    r = this,
                    a = this.length,
                    s = function () {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = He.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            We = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
            Be = ["Top", "Right", "Bottom", "Left"],
            Ve = function (e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && ve.contains(e.ownerDocument, e) && "none" === ve.css(e, "display")
            },
            Ke = function (e, t, n, i) {
                var o, r, a = {};
                for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t) e.style[r] = a[r];
                return o
            },
            Ue = {};
        ve.fn.extend({
            show: function () {
                return x(this, !0)
            },
            hide: function () {
                return x(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Ve(this) ? ve(this).show() : ve(this).hide()
                })
            }
        });
        var Xe = /^(?:checkbox|radio)$/i,
            Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Qe = /^$|\/(?:java|ecma)script/i,
            Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
        var Je = /<|&#?\w+;/;
        ! function () {
            var e = ae.createDocumentFragment(),
                t = e.appendChild(ae.createElement("div")),
                n = ae.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ye.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ye.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ze = ae.documentElement,
            et = /^key/,
            tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            nt = /^([^.]*)(?:\.(.+)|)/;
        ve.event = {
            global: {},
            add: function (e, t, n, i, o) {
                var r, a, s, l, u, c, d, f, p, h, m, g = He.get(e);
                if (g)
                    for (n.handler && (r = n, n = r.handler, o = r.selector), o && ve.find.matchesSelector(Ze, o), n.guid || (n.guid = ve.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                            return void 0 !== ve && ve.event.triggered !== t.type ? ve.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(Oe) || [""], u = t.length; u--;) s = nt.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (d = ve.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = ve.event.special[p] || {}, c = ve.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && ve.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), ve.event.global[p] = !0)
            },
            remove: function (e, t, n, i, o) {
                var r, a, s, l, u, c, d, f, p, h, m, g = He.hasData(e) && He.get(e);
                if (g && (l = g.events)) {
                    for (t = (t || "").match(Oe) || [""], u = t.length; u--;)
                        if (s = nt.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = ve.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) c = f[r], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || ve.removeEvent(e, p, g.handle), delete l[p])
                        } else
                            for (p in l) ve.event.remove(e, p + t[u], n, i, !0);
                    ve.isEmptyObject(l) && He.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                var t, n, i, o, r, a, s = ve.event.fix(e),
                    l = new Array(arguments.length),
                    u = (He.get(this, "events") || {})[s.type] || [],
                    c = ve.event.special[s.type] || {};
                for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (a = ve.event.handlers.call(this, s, u), t = 0;
                        (o = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((ve.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result
                }
            },
            handlers: function (e, t) {
                var n, i, o, r, a, s = [],
                    l = t.delegateCount,
                    u = e.target;
                if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (r = [], a = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === a[o] && (a[o] = i.needsContext ? ve(o, this).index(u) > -1 : ve.find(o, this, null, [u]).length), a[o] && r.push(i);
                            r.length && s.push({
                                elem: u,
                                handlers: r
                            })
                        }
                return u = this, l < t.length && s.push({
                    elem: u,
                    handlers: t.slice(l)
                }), s
            },
            addProp: function (e, t) {
                Object.defineProperty(ve.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: ve.isFunction(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function (e) {
                return e[ve.expando] ? e : new ve.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== A() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === A() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
                    },
                    _default: function (e) {
                        return l(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, ve.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, ve.Event = function (e, t) {
            if (!(this instanceof ve.Event)) return new ve.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? S : E, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ve.extend(this, t), this.timeStamp = e && e.timeStamp || ve.now(), this[ve.expando] = !0
        }, ve.Event.prototype = {
            constructor: ve.Event,
            isDefaultPrevented: E,
            isPropagationStopped: E,
            isImmediatePropagationStopped: E,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = S, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = S, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = S, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ve.each({
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
            which: function (e) {
                var t = e.button;
                return null == e.which && et.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && tt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, ve.event.addProp), ve.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            ve.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return o && (o === i || ve.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ve.fn.extend({
            on: function (e, t, n, i) {
                return F(this, e, t, n, i)
            },
            one: function (e, t, n, i) {
                return F(this, e, t, n, i, 1)
            },
            off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ve(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = E), this.each(function () {
                    ve.event.remove(this, e, n, t)
                })
            }
        });
        var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ot = /<script|<style|<link/i,
            rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            at = /^true\/(.*)/,
            st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ve.extend({
            htmlPrefilter: function (e) {
                return e.replace(it, "<$1></$2>")
            },
            clone: function (e, t, n) {
                var i, o, r, a, s = e.cloneNode(!0),
                    l = ve.contains(e.ownerDocument, e);
                if (!(ye.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ve.isXMLDoc(e)))
                    for (a = T(s), r = T(e), i = 0, o = r.length; i < o; i++) O(r[i], a[i]);
                if (t)
                    if (n)
                        for (r = r || T(e), a = a || T(s), i = 0, o = r.length; i < o; i++) j(r[i], a[i]);
                    else j(e, s);
                return a = T(s, "script"), a.length > 0 && k(a, !l && T(e, "script")), s
            },
            cleanData: function (e) {
                for (var t, n, i, o = ve.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if ($e(n)) {
                        if (t = n[He.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? ve.event.remove(n, i) : ve.removeEvent(n, i, t.handle);
                            n[He.expando] = void 0
                        }
                        n[Me.expando] && (n[Me.expando] = void 0)
                    }
            }
        }), ve.fn.extend({
            detach: function (e) {
                return L(this, e, !0)
            },
            remove: function (e) {
                return L(this, e)
            },
            text: function (e) {
                return Pe(this, function (e) {
                    return void 0 === e ? ve.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return q(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        _(this, e).appendChild(e)
                    }
                })
            },
            prepend: function () {
                return q(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = _(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return q(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return q(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ve.cleanData(T(e, !1)), e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return ve.clone(this, e, t)
                })
            },
            html: function (e) {
                return Pe(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !ot.test(e) && !Ge[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ve.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (ve.cleanData(T(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return q(this, arguments, function (t) {
                    var n = this.parentNode;
                    ve.inArray(this, e) < 0 && (ve.cleanData(T(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), ve.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            ve.fn[e] = function (e) {
                for (var n, i = [], o = ve(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), ve(o[a])[t](n), ce.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var lt = /^margin/,
            ut = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"),
            ct = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            };
        ! function () {
            function e() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ze.appendChild(a);
                    var e = n.getComputedStyle(s);
                    t = "1%" !== e.top, r = "2px" === e.marginLeft, i = "4px" === e.width, s.style.marginRight = "50%", o = "4px" === e.marginRight, Ze.removeChild(a), s = null
                }
            }
            var t, i, o, r, a = ae.createElement("div"),
                s = ae.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ye.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ve.extend(ye, {
                pixelPosition: function () {
                    return e(), t
                },
                boxSizingReliable: function () {
                    return e(), i
                },
                pixelMarginRight: function () {
                    return e(), o
                },
                reliableMarginLeft: function () {
                    return e(), r
                }
            }))
        }();
        var dt = /^(none|table(?!-c[ea]).+)/,
            ft = /^--/,
            pt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ht = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            mt = ["Webkit", "Moz", "ms"],
            gt = ae.createElement("div").style;
        ve.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = P(e, "opacity");
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
            cssProps: {
                float: "cssFloat"
            },
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = ve.camelCase(t),
                        l = ft.test(t),
                        u = e.style;
                    if (l || (t = M(s)), a = ve.cssHooks[t] || ve.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : u[t];
                    r = typeof n, "string" === r && (o = We.exec(n)) && o[1] && (n = b(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (ve.cssNumber[s] ? "" : "px")), ye.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function (e, t, n, i) {
                var o, r, a, s = ve.camelCase(t);
                return ft.test(t) || (t = M(s)), a = ve.cssHooks[t] || ve.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = P(e, t, i)), "normal" === o && t in ht && (o = ht[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), ve.each(["height", "width"], function (e, t) {
            ve.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) return !dt.test(ve.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? z(e, t, i) : Ke(e, pt, function () {
                        return z(e, t, i)
                    })
                },
                set: function (e, n, i) {
                    var o, r = i && ct(e),
                        a = i && R(e, t, i, "border-box" === ve.css(e, "boxSizing", !1, r), r);
                    return a && (o = We.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = ve.css(e, t)), I(e, n, a)
                }
            }
        }), ve.cssHooks.marginLeft = $(ye.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), ve.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            ve.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Be[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, lt.test(e) || (ve.cssHooks[e + t].set = I)
        }), ve.fn.extend({
            css: function (e, t) {
                return Pe(this, function (e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (i = ct(e), o = t.length; a < o; a++) r[t[a]] = ve.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? ve.style(e, t, n) : ve.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), ve.Tween = W, W.prototype = {
            constructor: W,
            init: function (e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || ve.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ve.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = W.propHooks[this.prop];
                return e && e.get ? e.get(this) : W.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = W.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ve.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ve.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function (e) {
                    ve.fx.step[e.prop] ? ve.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ve.cssProps[e.prop]] && !ve.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ve.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ve.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, ve.fx = W.prototype.init, ve.fx.step = {};
        var yt, vt, bt = /^(?:toggle|show|hide)$/,
            wt = /queueHooks$/;
        ve.Animation = ve.extend(Q, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return b(n.elem, e, We.exec(t), n), n
                    }]
                },
                tweener: function (e, t) {
                    ve.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
                    for (var n, i = 0, o = e.length; i < o; i++) n = e[i], Q.tweeners[n] = Q.tweeners[n] || [], Q.tweeners[n].unshift(t)
                },
                prefilters: [X],
                prefilter: function (e, t) {
                    t ? Q.prefilters.unshift(e) : Q.prefilters.push(e)
                }
            }), ve.speed = function (e, t, n) {
                var i = e && "object" == typeof e ? ve.extend({}, e) : {
                    complete: n || !n && t || ve.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ve.isFunction(t) && t
                };
                return ve.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ve.fx.speeds ? i.duration = ve.fx.speeds[i.duration] : i.duration = ve.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    ve.isFunction(i.old) && i.old.call(this), i.queue && ve.dequeue(this, i.queue)
                }, i
            }, ve.fn.extend({
                fadeTo: function (e, t, n, i) {
                    return this.filter(Ve).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function (e, t, n, i) {
                    var o = ve.isEmptyObject(e),
                        r = ve.speed(t, n, i),
                        a = function () {
                            var t = Q(this, ve.extend({}, e), r);
                            (o || He.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function (e, t, n) {
                    var i = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = ve.timers,
                            a = He.get(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && wt.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        !t && n || ve.dequeue(this, e)
                    })
                },
                finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each(function () {
                        var t, n = He.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = ve.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, ve.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ve.each(["toggle", "show", "hide"], function (e, t) {
                var n = ve.fn[t];
                ve.fn[t] = function (e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(K(t, !0), e, i, o)
                }
            }), ve.each({
                slideDown: K("show"),
                slideUp: K("hide"),
                slideToggle: K("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, t) {
                ve.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), ve.timers = [], ve.fx.tick = function () {
                var e, t = 0,
                    n = ve.timers;
                for (yt = ve.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || ve.fx.stop(), yt = void 0
            }, ve.fx.timer = function (e) {
                ve.timers.push(e), ve.fx.start()
            }, ve.fx.interval = 13, ve.fx.start = function () {
                vt || (vt = !0, B())
            }, ve.fx.stop = function () {
                vt = null
            }, ve.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ve.fn.delay = function (e, t) {
                return e = ve.fx ? ve.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                    var o = n.setTimeout(t, e);
                    i.stop = function () {
                        n.clearTimeout(o)
                    }
                })
            },
            function () {
                var e = ae.createElement("input"),
                    t = ae.createElement("select"),
                    n = t.appendChild(ae.createElement("option"));
                e.type = "checkbox", ye.checkOn = "" !== e.value, ye.optSelected = n.selected, e = ae.createElement("input"), e.value = "t", e.type = "radio", ye.radioValue = "t" === e.value
            }();
        var xt, Tt = ve.expr.attrHandle;
        ve.fn.extend({
            attr: function (e, t) {
                return Pe(this, ve.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    ve.removeAttr(this, e)
                })
            }
        }), ve.extend({
            attr: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? ve.prop(e, t, n) : (1 === r && ve.isXMLDoc(e) || (o = ve.attrHooks[t.toLowerCase()] || (ve.expr.match.bool.test(t) ? xt : void 0)), void 0 !== n ? null === n ? void ve.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = ve.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ye.radioValue && "radio" === t && l(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, i = 0,
                    o = t && t.match(Oe);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) e.removeAttribute(n)
            }
        }), xt = {
            set: function (e, t, n) {
                return !1 === t ? ve.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, ve.each(ve.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Tt[t] || ve.find.attr;
            Tt[t] = function (e, t, i) {
                var o, r, a = t.toLowerCase();
                return i || (r = Tt[a], Tt[a] = o, o = null != n(e, t, i) ? a : null, Tt[a] = r), o
            }
        });
        var kt = /^(?:input|select|textarea|button)$/i,
            Ct = /^(?:a|area)$/i;
        ve.fn.extend({
            prop: function (e, t) {
                return Pe(this, ve.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[ve.propFix[e] || e]
                })
            }
        }), ve.extend({
            prop: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ve.isXMLDoc(e) || (t = ve.propFix[t] || t, o = ve.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ve.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : kt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ye.optSelected || (ve.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), ve.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ve.propFix[this.toLowerCase()] = this
        }), ve.fn.extend({
            addClass: function (e) {
                var t, n, i, o, r, a, s, l = 0;
                if (ve.isFunction(e)) return this.each(function (t) {
                    ve(this).addClass(e.call(this, t, J(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Oe) || []; n = this[l++];)
                        if (o = J(n), i = 1 === n.nodeType && " " + G(o) + " ") {
                            for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = G(i), o !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function (e) {
                var t, n, i, o, r, a, s, l = 0;
                if (ve.isFunction(e)) return this.each(function (t) {
                    ve(this).removeClass(e.call(this, t, J(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Oe) || []; n = this[l++];)
                        if (o = J(n), i = 1 === n.nodeType && " " + G(o) + " ") {
                            for (a = 0; r = t[a++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            s = G(i), o !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ve.isFunction(e) ? this.each(function (n) {
                    ve(this).toggleClass(e.call(this, n, J(this), t), t)
                }) : this.each(function () {
                    var t, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = ve(this), r = e.match(Oe) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = J(this), t && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : He.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + G(J(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var St = /\r/g;
        ve.fn.extend({
            val: function (e) {
                var t, n, i, o = this[0]; {
                    if (arguments.length) return i = ve.isFunction(e), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, ve(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = ve.map(o, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = ve.valHooks[this.type] || ve.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return (t = ve.valHooks[o.type] || ve.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(St, "") : null == n ? "" : n)
                }
            }
        }), ve.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ve.find.attr(e, "value");
                        return null != t ? t : G(ve.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, i, o = e.options,
                            r = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? r + 1 : o.length;
                        for (i = r < 0 ? u : a ? r : 0; i < u; i++)
                            if (n = o[i], (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                                if (t = ve(n).val(), a) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function (e, t) {
                        for (var n, i, o = e.options, r = ve.makeArray(t), a = o.length; a--;) i = o[a], (i.selected = ve.inArray(ve.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), ve.each(["radio", "checkbox"], function () {
            ve.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = ve.inArray(ve(e).val(), t) > -1
                }
            }, ye.checkOn || (ve.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Et = /^(?:focusinfocus|focusoutblur)$/;
        ve.extend(ve.event, {
            trigger: function (e, t, i, o) {
                var r, a, s, l, u, c, d, f = [i || ae],
                    p = he.call(e, "type") ? e.type : e,
                    h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = s = i = i || ae, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(p + ve.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[ve.expando] ? e : new ve.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : ve.makeArray(t, [e]), d = ve.event.special[p] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                    if (!o && !d.noBubble && !ve.isWindow(i)) {
                        for (l = d.delegateType || p, Et.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                        s === (i.ownerDocument || ae) && f.push(s.defaultView || s.parentWindow || n)
                    }
                    for (r = 0;
                        (a = f[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : d.bindType || p, c = (He.get(a, "events") || {})[e.type] && He.get(a, "handle"), c && c.apply(a, t), (c = u && a[u]) && c.apply && $e(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = p, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), t) || !$e(i) || u && ve.isFunction(i[p]) && !ve.isWindow(i) && (s = i[u], s && (i[u] = null), ve.event.triggered = p, i[p](), ve.event.triggered = void 0, s && (i[u] = s)), e.result
                }
            },
            simulate: function (e, t, n) {
                var i = ve.extend(new ve.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ve.event.trigger(i, null, t)
            }
        }), ve.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    ve.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return ve.event.trigger(e, t, n, !0)
            }
        }), ve.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            ve.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ve.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), ye.focusin = "onfocusin" in n, ye.focusin || ve.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                ve.event.simulate(t, e.target, ve.event.fix(e))
            };
            ve.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        o = He.access(i, t);
                    o || i.addEventListener(e, n, !0), He.access(i, t, (o || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        o = He.access(i, t) - 1;
                    o ? He.access(i, t, o) : (i.removeEventListener(e, n, !0), He.remove(i, t))
                }
            }
        });
        var At = n.location,
            Ft = ve.now(),
            _t = /\?/;
        ve.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || ve.error("Invalid XML: " + e), t
        };
        var Dt = /\[\]$/,
            Nt = /\r?\n/g,
            jt = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;
        ve.param = function (e, t) {
            var n, i = [],
                o = function (e, t) {
                    var n = ve.isFunction(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !ve.isPlainObject(e)) ve.each(e, function () {
                o(this.name, this.value)
            });
            else
                for (n in e) Z(n, e[n], t, o);
            return i.join("&")
        }, ve.fn.extend({
            serialize: function () {
                return ve.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = ve.prop(this, "elements");
                    return e ? ve.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !ve(this).is(":disabled") && Ot.test(this.nodeName) && !jt.test(e) && (this.checked || !Xe.test(e))
                }).map(function (e, t) {
                    var n = ve(this).val();
                    return null == n ? null : Array.isArray(n) ? ve.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(Nt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Nt, "\r\n")
                    }
                }).get()
            }
        });
        var qt = /%20/g,
            Lt = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Mt = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            Rt = {},
            zt = {},
            Wt = "*/".concat("*"),
            Bt = ae.createElement("a");
        Bt.href = At.href, ve.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal: Ht.test(At.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Wt,
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
                    "text xml": ve.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? ne(ne(e, ve.ajaxSettings), t) : ne(ve.ajaxSettings, e)
            },
            ajaxPrefilter: ee(Rt),
            ajaxTransport: ee(zt),
            ajax: function (e, t) {
                function i(e, t, i, s) {
                    var u, f, p, w, x, T = t;
                    c || (c = !0, l && n.clearTimeout(l), o = void 0, a = s || "", k.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (w = ie(h, k, i)), w = oe(h, w, k, u), u ? (h.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (ve.lastModified[r] = x), (x = k.getResponseHeader("etag")) && (ve.etag[r] = x)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, f = w.data, p = w.error, u = !p)) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || T) + "", u ? y.resolveWith(m, [f, T, k]) : y.rejectWith(m, [k, T, p]), k.statusCode(b), b = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? f : p]), v.fireWith(m, [k, T]), d && (g.trigger("ajaxComplete", [k, h]), --ve.active || ve.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var o, r, a, s, l, u, c, d, f, p, h = ve.ajaxSetup({}, t),
                    m = h.context || h,
                    g = h.context && (m.nodeType || m.jquery) ? ve(m) : ve.event,
                    y = ve.Deferred(),
                    v = ve.Callbacks("once memory"),
                    b = h.statusCode || {},
                    w = {},
                    x = {},
                    T = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (c) {
                                if (!s)
                                    for (s = {}; t = $t.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return c ? a : null
                        },
                        setRequestHeader: function (e, t) {
                            return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return null == c && (h.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (c) k.always(e[k.status]);
                                else
                                    for (t in e) b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function (e) {
                            var t = e || T;
                            return o && o.abort(t), i(0, t), this
                        }
                    };
                if (y.promise(k), h.url = ((e || h.url || At.href) + "").replace(It, At.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Oe) || [""], null == h.crossDomain) {
                    u = ae.createElement("a");
                    try {
                        u.href = h.url, u.href = u.href, h.crossDomain = Bt.protocol + "//" + Bt.host != u.protocol + "//" + u.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = ve.param(h.data, h.traditional)), te(Rt, h, t, k), c) return k;
                d = ve.event && h.global, d && 0 == ve.active++ && ve.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), r = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (p = h.url.slice(r.length), h.data && (r += (_t.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Pt, "$1"), p = (_t.test(r) ? "&" : "?") + "_=" + Ft++ + p), h.url = r + p), h.ifModified && (ve.lastModified[r] && k.setRequestHeader("If-Modified-Since", ve.lastModified[r]), ve.etag[r] && k.setRequestHeader("If-None-Match", ve.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : h.accepts["*"]);
                for (f in h.headers) k.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, k, h) || c)) return k.abort();
                if (T = "abort", v.add(h.complete), k.done(h.success), k.fail(h.error), o = te(zt, h, t, k)) {
                    if (k.readyState = 1, d && g.trigger("ajaxSend", [k, h]), c) return k;
                    h.async && h.timeout > 0 && (l = n.setTimeout(function () {
                        k.abort("timeout")
                    }, h.timeout));
                    try {
                        c = !1, o.send(w, i)
                    } catch (e) {
                        if (c) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return k
            },
            getJSON: function (e, t, n) {
                return ve.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return ve.get(e, void 0, t, "script")
            }
        }), ve.each(["get", "post"], function (e, t) {
            ve[t] = function (e, n, i, o) {
                return ve.isFunction(n) && (o = o || i, i = n, n = void 0), ve.ajax(ve.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, ve.isPlainObject(e) && e))
            }
        }), ve._evalUrl = function (e) {
            return ve.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, ve.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (ve.isFunction(e) && (e = e.call(this[0])), t = ve(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function (e) {
                return ve.isFunction(e) ? this.each(function (t) {
                    ve(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = ve(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = ve.isFunction(e);
                return this.each(function (n) {
                    ve(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    ve(this).replaceWith(this.childNodes)
                }), this
            }
        }), ve.expr.pseudos.hidden = function (e) {
            return !ve.expr.pseudos.visible(e)
        }, ve.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, ve.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Vt = {
                0: 200,
                1223: 204
            },
            Kt = ve.ajaxSettings.xhr();
        ye.cors = !!Kt && "withCredentials" in Kt, ye.ajax = Kt = !!Kt, ve.ajaxTransport(function (e) {
            var t, i;
            if (ye.cors || Kt && !e.crossDomain) return {
                send: function (o, r) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (a in o) s.setRequestHeader(a, o[a]);
                    t = function (e) {
                        return function () {
                            t && (t = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), i = s.onerror = t("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                        4 === s.readyState && n.setTimeout(function () {
                            t && i()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function () {
                    t && t()
                }
            }
        }), ve.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), ve.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return ve.globalEval(e), e
                }
            }
        }), ve.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), ve.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        t = ve("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), ae.head.appendChild(t[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Ut = [],
            Xt = /(=)\?(?=&|$)|\?\?/;
        ve.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Ut.pop() || ve.expando + "_" + Ft++;
                return this[e] = !0, e
            }
        }), ve.ajaxPrefilter("json jsonp", function (e, t, i) {
            var o, r, a, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = ve.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + o) : !1 !== e.jsonp && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return a || ve.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", r = n[o], n[o] = function () {
                a = arguments
            }, i.always(function () {
                void 0 === r ? ve(n).removeProp(o) : n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, Ut.push(o)), a && ve.isFunction(r) && r(a[0]), a = r = void 0
            }), "script"
        }), ye.createHTMLDocument = function () {
            var e = ae.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), ve.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var i, o, r;
            return t || (ye.createHTMLDocument ? (t = ae.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ae.location.href, t.head.appendChild(i)) : t = ae), o = Ae.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = C([e], t, r), r && r.length && ve(r).remove(), ve.merge([], o.childNodes))
        }, ve.fn.load = function (e, t, n) {
            var i, o, r, a = this,
                s = e.indexOf(" ");
            return s > -1 && (i = G(e.slice(s)), e = e.slice(0, s)), ve.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ve.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                r = arguments, a.html(i ? ve("<div>").append(ve.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, ve.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ve.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ve.expr.pseudos.animated = function (e) {
            return ve.grep(ve.timers, function (t) {
                return e === t.elem
            }).length
        }, ve.offset = {
            setOffset: function (e, t, n) {
                var i, o, r, a, s, l, u, c = ve.css(e, "position"),
                    d = ve(e),
                    f = {};
                "static" === c && (e.style.position = "relative"), s = d.offset(), r = ve.css(e, "top"), l = ve.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), ve.isFunction(t) && (t = t.call(e, n, ve.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, ve.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    ve.offset.setOffset(this, e, t)
                });
                var t, n, i, o, r = this[0];
                if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, o = t.defaultView, {
                    top: i.top + o.pageYOffset - n.clientTop,
                    left: i.left + o.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function () {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ve.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), l(e[0], "html") || (i = e.offset()), i = {
                        top: i.top + ve.css(e[0], "borderTopWidth", !0),
                        left: i.left + ve.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - i.top - ve.css(n, "marginTop", !0),
                        left: t.left - i.left - ve.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === ve.css(e, "position");) e = e.offsetParent;
                    return e || Ze
                })
            }
        }), ve.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = "pageYOffset" === t;
            ve.fn[e] = function (i) {
                return Pe(this, function (e, i, o) {
                    var r;
                    if (ve.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                }, e, i, arguments.length)
            }
        }), ve.each(["top", "left"], function (e, t) {
            ve.cssHooks[t] = $(ye.pixelPosition, function (e, n) {
                if (n) return n = P(e, t), ut.test(n) ? ve(e).position()[t] + "px" : n
            })
        }), ve.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            ve.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, i) {
                ve.fn[i] = function (o, r) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === r ? "margin" : "border");
                    return Pe(this, function (t, n, o) {
                        var r;
                        return ve.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? ve.css(t, n, s) : ve.style(t, n, o, s)
                    }, t, a ? o : void 0, a)
                }
            })
        }), ve.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), ve.holdReady = function (e) {
            e ? ve.readyWait++ : ve.ready(!0)
        }, ve.isArray = Array.isArray, ve.parseJSON = JSON.parse, ve.nodeName = l, i = [], void 0 !== (o = function () {
            return ve
        }.apply(t, i)) && (e.exports = o);
        var Yt = n.jQuery,
            Qt = n.$;
        return ve.noConflict = function (e) {
            return n.$ === ve && (n.$ = Qt), e && n.jQuery === ve && (n.jQuery = Yt), ve
        }, r || (n.jQuery = n.$ = ve), ve
    })
}, function (e, t, n) {
    var i, o;
    ! function (n, r) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = r(n, document) : (i = [], void 0 !== (o = function () {
            return r(n, document)
        }.apply(t, i)) && (e.exports = o))
    }("undefined" != typeof window ? window : this, function (e, t) {
        "use strict";

        function n() {
            var e, n, i, o = navigator.userAgent,
                r = navigator.appName,
                a = "" + parseFloat(navigator.appVersion),
                s = parseInt(navigator.appVersion, 10),
                l = !1,
                u = !1,
                c = !1,
                d = !1;
            return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (l = !0, r = "IE", a = "11") : -1 !== (n = o.indexOf("MSIE")) ? (l = !0, r = "IE", a = o.substring(n + 5)) : -1 !== (n = o.indexOf("Chrome")) ? (c = !0, r = "Chrome", a = o.substring(n + 7)) : -1 !== (n = o.indexOf("Safari")) ? (d = !0, r = "Safari", a = o.substring(n + 7), -1 !== (n = o.indexOf("Version")) && (a = o.substring(n + 8))) : -1 !== (n = o.indexOf("Firefox")) ? (u = !0, r = "Firefox", a = o.substring(n + 8)) : (e = o.lastIndexOf(" ") + 1) < (n = o.lastIndexOf("/")) && (r = o.substring(e, n), a = o.substring(n + 1), r.toLowerCase() === r.toUpperCase() && (r = navigator.appName)), -1 !== (i = a.indexOf(";")) && (a = a.substring(0, i)), -1 !== (i = a.indexOf(" ")) && (a = a.substring(0, i)), s = parseInt("" + a, 10), isNaN(s) && (a = "" + parseFloat(navigator.appVersion), s = parseInt(navigator.appVersion, 10)), {
                name: r,
                version: s,
                isIE: l,
                isFirefox: u,
                isChrome: c,
                isSafari: d,
                isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
                isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
                isTouch: "ontouchstart" in t.documentElement
            }
        }

        function i(e, t) {
            var n = e.media;
            if ("video" === e.type) switch (t) {
                case "video/webm":
                    return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
                case "video/mp4":
                    return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
                case "video/ogg":
                    return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
            } else if ("audio" === e.type) switch (t) {
                case "audio/mpeg":
                    return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
                case "audio/ogg":
                    return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
                case "audio/wav":
                    return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
            }
            return !1
        }

        function o(e) {
            if (!t.querySelectorAll('script[src="' + e + '"]').length) {
                var n = t.createElement("script");
                n.src = e;
                var i = t.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(n, i)
            }
        }

        function r(e, t) {
            return Array.prototype.indexOf && -1 !== e.indexOf(t)
        }

        function a(e, t, n) {
            return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), n)
        }

        function s(e, t) {
            e.length || (e = [e]);
            for (var n = e.length - 1; n >= 0; n--) {
                var i = n > 0 ? t.cloneNode(!0) : t,
                    o = e[n],
                    r = o.parentNode,
                    a = o.nextSibling;
                return i.appendChild(o), a ? r.insertBefore(i, a) : r.appendChild(i), i
            }
        }

        function l(e) {
            e && e.parentNode.removeChild(e)
        }

        function u(e, t) {
            e.insertBefore(t, e.firstChild)
        }

        function c(e, t) {
            for (var n in t) e.setAttribute(n, q.boolean(t[n]) && t[n] ? "" : t[n])
        }

        function d(e, n, i) {
            var o = t.createElement(e);
            c(o, i), u(n, o)
        }

        function f(e) {
            return e.replace(".", "")
        }

        function p(e, t, n) {
            if (e)
                if (e.classList) e.classList[n ? "add" : "remove"](t);
                else {
                    var i = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                    e.className = i + (n ? " " + t : "")
                }
        }

        function h(e, t) {
            return !!e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
        }

        function m(e, n) {
            var i = Element.prototype;
            return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function (e) {
                return -1 !== [].indexOf.call(t.querySelectorAll(e), this)
            }).call(e, n)
        }

        function g(e, t, n, i, o) {
            v(e, t, function (t) {
                n && n.apply(e, [t]), i.apply(e, [t])
            }, o)
        }

        function y(e, t, n, i, o) {
            var r = t.split(" ");
            if (q.boolean(o) || (o = !1), e instanceof NodeList)
                for (var a = 0; a < e.length; a++) e[a] instanceof Node && y(e[a], arguments[1], arguments[2], arguments[3]);
            else
                for (var s = 0; s < r.length; s++) e[i ? "addEventListener" : "removeEventListener"](r[s], n, o)
        }

        function v(e, t, n, i) {
            e && y(e, t, n, !0, i)
        }

        function b(e, t, n, i) {
            if (e && t) {
                q.boolean(n) || (n = !1);
                var o = new CustomEvent(t, {
                    bubbles: n,
                    detail: i
                });
                e.dispatchEvent(o)
            }
        }

        function w(e, t) {
            if (e) return t = q.boolean(t) ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t
        }

        function x(e, t) {
            return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
        }

        function T() {
            var e = arguments;
            if (e.length) {
                if (1 === e.length) return e[0];
                for (var t = Array.prototype.shift.call(e), n = e.length, i = 0; i < n; i++) {
                    var o = e[i];
                    for (var r in o) o[r] && o[r].constructor && o[r].constructor === Object ? (t[r] = t[r] || {}, T(t[r], o[r])) : t[r] = o[r]
                }
                return t
            }
        }

        function k(e) {
            var t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            return e.match(t) ? RegExp.$2 : e
        }

        function C(e) {
            var t = /^.*(vimeo.com\/|video\/)(\d+).*/;
            return e.match(t) ? RegExp.$2 : e
        }

        function S() {
            var e = {
                    supportsFullScreen: !1,
                    isFullScreen: function () {
                        return !1
                    },
                    requestFullScreen: function () {},
                    cancelFullScreen: function () {},
                    fullScreenEventName: "",
                    element: null,
                    prefix: ""
                },
                n = "webkit o moz ms khtml".split(" ");
            if (q.undefined(t.cancelFullScreen))
                for (var i = 0, o = n.length; i < o; i++) {
                    if (e.prefix = n[i], !q.undefined(t[e.prefix + "CancelFullScreen"])) {
                        e.supportsFullScreen = !0;
                        break
                    }
                    if (!q.undefined(t.msExitFullscreen) && t.msFullscreenEnabled) {
                        e.prefix = "ms", e.supportsFullScreen = !0;
                        break
                    }
                } else e.supportsFullScreen = !0;
            return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function (e) {
                switch (q.undefined(e) && (e = t.body), this.prefix) {
                    case "":
                        return t.fullscreenElement === e;
                    case "moz":
                        return t.mozFullScreenElement === e;
                    default:
                        return t[this.prefix + "FullscreenElement"] === e
                }
            }, e.requestFullScreen = function (e) {
                return q.undefined(e) && (e = t.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
            }, e.cancelFullScreen = function () {
                return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
            }, e.element = function () {
                return "" === this.prefix ? t.fullscreenElement : t[this.prefix + "FullscreenElement"]
            }), e
        }

        function E(y, E) {
            function _(e, t, n, i) {
                b(e, t, n, T({}, i, {
                    plyr: We
                }))
            }

            function P(t, n) {
                E.debug && e.console && (n = Array.prototype.slice.call(n), q.string(E.logPrefix) && E.logPrefix.length && n.unshift(E.logPrefix), console[t].apply(console, n))
            }

            function $() {
                return {
                    url: E.iconUrl,
                    absolute: 0 === E.iconUrl.indexOf("http") || Be.browser.isIE
                }
            }

            function H() {
                var e = [],
                    t = $(),
                    n = (t.absolute ? "" : t.url) + "#" + E.iconPrefix;
                return r(E.controls, "play-large") && e.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + E.i18n.play + "</span>", "</button>"), e.push('<div class="plyr__controls">'), r(E.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + n + '-restart" /></svg>', '<span class="plyr__sr-only">' + E.i18n.restart + "</span>", "</button>"), r(E.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + n + '-rewind" /></svg>', '<span class="plyr__sr-only">' + E.i18n.rewind + "</span>", "</button>"), r(E.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + E.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + n + '-pause" /></svg>', '<span class="plyr__sr-only">' + E.i18n.pause + "</span>", "</button>"), r(E.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + n + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + E.i18n.forward + "</span>", "</button>"), r(E.controls, "progress") && (e.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + E.i18n.buffered, "</progress>"), E.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'), e.push("</span>")), r(E.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + E.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), r(E.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + E.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), r(E.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + n + '-muted" /></svg>', '<svg><use xlink:href="' + n + '-volume" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleMute + "</span>", "</button>"), r(E.controls, "volume") && e.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + E.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + E.volumeMin + '" max="' + E.volumeMax + '" value="' + E.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + E.volumeMax + '" value="' + E.volumeMin + '" role="presentation"></progress>', "</span>"), r(E.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + n + '-captions-on" /></svg>', '<svg><use xlink:href="' + n + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleCaptions + "</span>", "</button>"), r(E.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + n + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + n + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleFullscreen + "</span>", "</button>"), e.push("</div>"), e.join("")
            }

            function M() {
                if (Be.supported.full && ("audio" !== Be.type || E.fullscreen.allowAudio) && E.fullscreen.enabled) {
                    var e = N.supportsFullScreen;
                    e || E.fullscreen.fallback && !K() ? (Ue((e ? "Native" : "Fallback") + " fullscreen enabled"), p(Be.container, E.classes.fullscreen.enabled, !0)) : Ue("Fullscreen not supported and fallback disabled"), Be.buttons && Be.buttons.fullscreen && w(Be.buttons.fullscreen, !1), U()
                }
            }

            function I() {
                if ("video" === Be.type) {
                    V(E.selectors.captions) || Be.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + f(E.selectors.captions) + '"></div>'), Be.usingTextTracks = !1, Be.media.textTracks && (Be.usingTextTracks = !0);
                    for (var e, t = "", n = Be.media.childNodes, i = 0; i < n.length; i++) "track" === n[i].nodeName.toLowerCase() && ("captions" !== (e = n[i].kind) && "subtitles" !== e || (t = n[i].getAttribute("src")));
                    if (Be.captionExists = !0, "" === t ? (Be.captionExists = !1, Ue("No caption track found")) : Ue("Caption track found; URI: " + t), Be.captionExists) {
                        for (var o = Be.media.textTracks, r = 0; r < o.length; r++) o[r].mode = "hidden";
                        if (W(), (Be.browser.isIE && Be.browser.version >= 10 || Be.browser.isFirefox && Be.browser.version >= 31) && (Ue("Detected browser with known TextTrack issues - using manual fallback"), Be.usingTextTracks = !1), Be.usingTextTracks) {
                            Ue("TextTracks supported");
                            for (var a = 0; a < o.length; a++) {
                                var s = o[a];
                                "captions" !== s.kind && "subtitles" !== s.kind || v(s, "cuechange", function () {
                                    this.activeCues[0] && "text" in this.activeCues[0] ? R(this.activeCues[0].getCueAsHTML()) : R()
                                })
                            }
                        } else if (Ue("TextTracks not supported so rendering captions manually"), Be.currentCaption = "", Be.captions = [], "" !== t) {
                            var l = new XMLHttpRequest;
                            l.onreadystatechange = function () {
                                if (4 === l.readyState)
                                    if (200 === l.status) {
                                        var e, t = [],
                                            n = l.responseText,
                                            i = "\r\n"; - 1 === n.indexOf(i + i) && (i = -1 !== n.indexOf("\r\r") ? "\r" : "\n"), t = n.split(i + i);
                                        for (var o = 0; o < t.length; o++) {
                                            e = t[o], Be.captions[o] = [];
                                            var r = e.split(i),
                                                a = 0; - 1 === r[a].indexOf(":") && (a = 1), Be.captions[o] = [r[a], r[a + 1]]
                                        }
                                        Be.captions.shift(), Ue("Successfully loaded the caption file via AJAX")
                                    } else Xe(E.logPrefix + "There was a problem loading the caption file via AJAX")
                            }, l.open("get", t, !0), l.send()
                        }
                    } else p(Be.container, E.classes.captions.enabled)
                }
            }

            function R(e) {
                var n = V(E.selectors.captions),
                    i = t.createElement("span");
                n.innerHTML = "", q.undefined(e) && (e = ""), q.string(e) ? i.innerHTML = e.trim() : i.appendChild(e), n.appendChild(i);
                n.offsetHeight
            }

            function z(e) {
                function t(e, t) {
                    var n = [];
                    n = e.split(" --\x3e ");
                    for (var o = 0; o < n.length; o++) n[o] = n[o].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                    return i(n[t])
                }

                function n(e) {
                    return t(e, 1)
                }

                function i(e) {
                    if (null === e || void 0 === e) return 0;
                    var t = [],
                        n = [];
                    return t = e.split(","), n = t[0].split(":"), Math.floor(60 * n[0] * 60) + Math.floor(60 * n[1]) + Math.floor(n[2])
                }
                if (!Be.usingTextTracks && "video" === Be.type && Be.supported.full && (Be.subcount = 0, e = q.number(e) ? e : Be.media.currentTime, Be.captions[Be.subcount])) {
                    for (; n(Be.captions[Be.subcount][0]) < e.toFixed(1);)
                        if (++Be.subcount > Be.captions.length - 1) {
                            Be.subcount = Be.captions.length - 1;
                            break
                        }
                    Be.media.currentTime.toFixed(1) >= function (e) {
                        return t(e, 0)
                    }(Be.captions[Be.subcount][0]) && Be.media.currentTime.toFixed(1) <= n(Be.captions[Be.subcount][0]) ? (Be.currentCaption = Be.captions[Be.subcount][1], R(Be.currentCaption)) : R()
                }
            }

            function W() {
                if (Be.buttons.captions) {
                    p(Be.container, E.classes.captions.enabled, !0);
                    var e = Be.storage.captionsEnabled;
                    q.boolean(e) || (e = E.captions.defaultActive), e && (p(Be.container, E.classes.captions.active, !0), w(Be.buttons.captions, !0))
                }
            }

            function B(e) {
                return Be.container.querySelectorAll(e)
            }

            function V(e) {
                return B(e)[0]
            }

            function K() {
                try {
                    return e.self !== e.top
                } catch (e) {
                    return !0
                }
            }

            function U() {
                function e(e) {
                    9 === e.which && Be.isFullscreen && (e.target !== i || e.shiftKey ? e.target === n && e.shiftKey && (e.preventDefault(), i.focus()) : (e.preventDefault(), n.focus()))
                }
                var t = B("input:not([disabled]), button:not([disabled])"),
                    n = t[0],
                    i = t[t.length - 1];
                v(Be.container, "keydown", e)
            }

            function X(e, t) {
                if (q.string(t)) d(e, Be.media, {
                    src: t
                });
                else if (t.constructor === Array)
                    for (var n = t.length - 1; n >= 0; n--) d(e, Be.media, t[n])
            }

            function Y() {
                if (E.loadSprite) {
                    var e = $();
                    e.absolute ? (Ue("AJAX loading absolute SVG sprite" + (Be.browser.isIE ? " (due to IE)" : "")), A(e.url, "sprite-plyr")) : Ue("Sprite will be used as external resource directly")
                }
                var n = E.html;
                Ue("Injecting custom controls"), n || (n = H()), n = a(n, "{seektime}", E.seekTime), n = a(n, "{id}", Math.floor(1e4 * Math.random()));
                var i;
                if (q.string(E.selectors.controls.container) && (i = t.querySelector(E.selectors.controls.container)), q.htmlElement(i) || (i = Be.container), i.insertAdjacentHTML("beforeend", n), E.tooltips.controls)
                    for (var o = B([E.selectors.controls.wrapper, " ", E.selectors.labels, " .", E.classes.hidden].join("")), r = o.length - 1; r >= 0; r--) {
                        var s = o[r];
                        p(s, E.classes.hidden, !1), p(s, E.classes.tooltip, !0)
                    }
            }

            function Q() {
                try {
                    return Be.controls = V(E.selectors.controls.wrapper), Be.buttons = {}, Be.buttons.seek = V(E.selectors.buttons.seek), Be.buttons.play = B(E.selectors.buttons.play), Be.buttons.pause = V(E.selectors.buttons.pause), Be.buttons.restart = V(E.selectors.buttons.restart), Be.buttons.rewind = V(E.selectors.buttons.rewind), Be.buttons.forward = V(E.selectors.buttons.forward), Be.buttons.fullscreen = V(E.selectors.buttons.fullscreen), Be.buttons.mute = V(E.selectors.buttons.mute), Be.buttons.captions = V(E.selectors.buttons.captions), Be.progress = {}, Be.progress.container = V(E.selectors.progress.container), Be.progress.buffer = {}, Be.progress.buffer.bar = V(E.selectors.progress.buffer), Be.progress.buffer.text = Be.progress.buffer.bar && Be.progress.buffer.bar.getElementsByTagName("span")[0], Be.progress.played = V(E.selectors.progress.played), Be.progress.tooltip = Be.progress.container && Be.progress.container.querySelector("." + E.classes.tooltip), Be.volume = {}, Be.volume.input = V(E.selectors.volume.input), Be.volume.display = V(E.selectors.volume.display), Be.duration = V(E.selectors.duration), Be.currentTime = V(E.selectors.currentTime), Be.seekTime = B(E.selectors.seekTime), !0
                } catch (e) {
                    return Xe("It looks like there is a problem with your controls HTML"), J(!0), !1
                }
            }

            function G() {
                p(Be.container, E.selectors.container.replace(".", ""), Be.supported.full)
            }

            function J(e) {
                e && r(E.types.html5, Be.type) ? Be.media.setAttribute("controls", "") : Be.media.removeAttribute("controls")
            }

            function Z(e) {
                var t = E.i18n.play;
                if (q.string(E.title) && E.title.length && (t += ", " + E.title, Be.container.setAttribute("aria-label", E.title)), Be.supported.full && Be.buttons.play)
                    for (var n = Be.buttons.play.length - 1; n >= 0; n--) Be.buttons.play[n].setAttribute("aria-label", t);
                q.htmlElement(e) && e.setAttribute("title", E.i18n.frameTitle.replace("{title}", E.title))
            }

            function ee() {
                var t = null;
                Be.storage = {}, L.supported && E.storage.enabled && (e.localStorage.removeItem("plyr-volume"), (t = e.localStorage.getItem(E.storage.key)) && (/^\d+(\.\d+)?$/.test(t) ? te({
                    volume: parseFloat(t)
                }) : Be.storage = JSON.parse(t)))
            }

            function te(t) {
                L.supported && E.storage.enabled && (T(Be.storage, t), e.localStorage.setItem(E.storage.key, JSON.stringify(Be.storage)))
            }

            function ne() {
                if (!Be.media) return void Xe("No media element found!");
                if (Be.supported.full && (p(Be.container, E.classes.type.replace("{0}", Be.type), !0), r(E.types.embed, Be.type) && p(Be.container, E.classes.type.replace("{0}", "video"), !0), p(Be.container, E.classes.stopped, E.autoplay), p(Be.container, E.classes.isIos, Be.browser.isIos), p(Be.container, E.classes.isTouch, Be.browser.isTouch), "video" === Be.type)) {
                    var e = t.createElement("div");
                    e.setAttribute("class", E.classes.videoWrapper), s(Be.media, e), Be.videoContainer = e
                }
                r(E.types.embed, Be.type) && ie()
            }

            function ie() {
                var n, i = t.createElement("div"),
                    r = Be.type + "-" + Math.floor(1e4 * Math.random());
                switch (Be.type) {
                    case "youtube":
                        n = k(Be.embedId);
                        break;
                    case "vimeo":
                        n = C(Be.embedId);
                        break;
                    default:
                        n = Be.embedId
                }
                for (var a = B('[id^="' + Be.type + '-"]'), s = a.length - 1; s >= 0; s--) l(a[s]);
                if (p(Be.media, E.classes.videoWrapper, !0), p(Be.media, E.classes.embedWrapper, !0), "youtube" === Be.type) Be.media.appendChild(i), i.setAttribute("id", r), q.object(e.YT) ? re(n, i) : (o(E.urls.youtube.api), e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [], e.onYouTubeReadyCallbacks.push(function () {
                    re(n, i)
                }), e.onYouTubeIframeAPIReady = function () {
                    e.onYouTubeReadyCallbacks.forEach(function (e) {
                        e()
                    })
                });
                else if ("vimeo" === Be.type)
                    if (Be.supported.full ? Be.media.appendChild(i) : i = Be.media, i.setAttribute("id", r), q.object(e.Vimeo)) ae(n, i);
                    else {
                        o(E.urls.vimeo.api);
                        var u = e.setInterval(function () {
                            q.object(e.Vimeo) && (e.clearInterval(u), ae(n, i))
                        }, 50)
                    }
                else if ("soundcloud" === Be.type) {
                    var d = t.createElement("iframe");
                    d.loaded = !1, v(d, "load", function () {
                        d.loaded = !0
                    }), c(d, {
                        src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + n,
                        id: r
                    }), i.appendChild(d), Be.media.appendChild(i), e.SC || o(E.urls.soundcloud.api);
                    var f = e.setInterval(function () {
                        e.SC && d.loaded && (e.clearInterval(f), se.call(d))
                    }, 50)
                }
            }

            function oe() {
                Be.supported.full && (Re(), ze()), Z(V("iframe"))
            }

            function re(t, n) {
                Be.embed = new e.YT.Player(n.id, {
                    videoId: t,
                    playerVars: {
                        autoplay: E.autoplay ? 1 : 0,
                        controls: Be.supported.full ? 0 : 1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        cc_load_policy: E.captions.defaultActive ? 1 : 0,
                        cc_lang_pref: "en",
                        wmode: "transparent",
                        modestbranding: 1,
                        disablekb: 1,
                        origin: "*"
                    },
                    events: {
                        onError: function (e) {
                            _(Be.container, "error", !0, {
                                code: e.data,
                                embed: e.target
                            })
                        },
                        onReady: function (t) {
                            var n = t.target;
                            Be.media.play = function () {
                                n.playVideo(), Be.media.paused = !1
                            }, Be.media.pause = function () {
                                n.pauseVideo(), Be.media.paused = !0
                            }, Be.media.stop = function () {
                                n.stopVideo(), Be.media.paused = !0
                            }, Be.media.duration = n.getDuration(), Be.media.paused = !0, Be.media.currentTime = 0, Be.media.muted = n.isMuted(), E.title = n.getVideoData().title, Be.supported.full && Be.media.querySelector("iframe").setAttribute("tabindex", "-1"), oe(), _(Be.media, "timeupdate"), _(Be.media, "durationchange"), e.clearInterval(Ve.buffering), Ve.buffering = e.setInterval(function () {
                                Be.media.buffered = n.getVideoLoadedFraction(), (null === Be.media.lastBuffered || Be.media.lastBuffered < Be.media.buffered) && _(Be.media, "progress"), Be.media.lastBuffered = Be.media.buffered, 1 === Be.media.buffered && (e.clearInterval(Ve.buffering), _(Be.media, "canplaythrough"))
                            }, 200)
                        },
                        onStateChange: function (t) {
                            var n = t.target;
                            switch (e.clearInterval(Ve.playing), t.data) {
                                case 0:
                                    Be.media.paused = !0, _(Be.media, "ended");
                                    break;
                                case 1:
                                    Be.media.paused = !1, Be.media.seeking && _(Be.media, "seeked"), Be.media.seeking = !1, _(Be.media, "play"), _(Be.media, "playing"), Ve.playing = e.setInterval(function () {
                                        Be.media.currentTime = n.getCurrentTime(), _(Be.media, "timeupdate")
                                    }, 100), Be.media.duration !== n.getDuration() && (Be.media.duration = n.getDuration(), _(Be.media, "durationchange"));
                                    break;
                                case 2:
                                    Be.media.paused = !0, _(Be.media, "pause")
                            }
                            _(Be.container, "statechange", !1, {
                                code: t.data
                            })
                        }
                    }
                })
            }

            function ae(t, n) {
                Be.embed = new e.Vimeo.Player(n, {
                    id: parseInt(t),
                    loop: E.loop,
                    autoplay: E.autoplay,
                    byline: !1,
                    portrait: !1,
                    title: !1
                }), Be.media.play = function () {
                    Be.embed.play(), Be.media.paused = !1
                }, Be.media.pause = function () {
                    Be.embed.pause(), Be.media.paused = !0
                }, Be.media.stop = function () {
                    Be.embed.stop(), Be.media.paused = !0
                }, Be.media.paused = !0, Be.media.currentTime = 0, oe(), Be.embed.getCurrentTime().then(function (e) {
                    Be.media.currentTime = e, _(Be.media, "timeupdate")
                }), Be.embed.getDuration().then(function (e) {
                    Be.media.duration = e, _(Be.media, "durationchange")
                }), Be.embed.on("loaded", function () {
                    q.htmlElement(Be.embed.element) && Be.supported.full && Be.embed.element.setAttribute("tabindex", "-1")
                }), Be.embed.on("play", function () {
                    Be.media.paused = !1, _(Be.media, "play"), _(Be.media, "playing")
                }), Be.embed.on("pause", function () {
                    Be.media.paused = !0, _(Be.media, "pause")
                }), Be.embed.on("timeupdate", function (e) {
                    Be.media.seeking = !1, Be.media.currentTime = e.seconds, _(Be.media, "timeupdate")
                }), Be.embed.on("progress", function (e) {
                    Be.media.buffered = e.percent, _(Be.media, "progress"), 1 === parseInt(e.percent) && _(Be.media, "canplaythrough")
                }), Be.embed.on("seeked", function () {
                    Be.media.seeking = !1, _(Be.media, "seeked"), _(Be.media, "play")
                }), Be.embed.on("ended", function () {
                    Be.media.paused = !0, _(Be.media, "ended")
                })
            }

            function se() {
                Be.embed = e.SC.Widget(this), Be.embed.bind(e.SC.Widget.Events.READY, function () {
                    Be.media.play = function () {
                        Be.embed.play(), Be.media.paused = !1
                    }, Be.media.pause = function () {
                        Be.embed.pause(), Be.media.paused = !0
                    }, Be.media.stop = function () {
                        Be.embed.seekTo(0), Be.embed.pause(), Be.media.paused = !0
                    }, Be.media.paused = !0, Be.media.currentTime = 0, Be.embed.getDuration(function (e) {
                        Be.media.duration = e / 1e3, oe()
                    }), Be.embed.getPosition(function (e) {
                        Be.media.currentTime = e, _(Be.media, "timeupdate")
                    }), Be.embed.bind(e.SC.Widget.Events.PLAY, function () {
                        Be.media.paused = !1, _(Be.media, "play"), _(Be.media, "playing")
                    }), Be.embed.bind(e.SC.Widget.Events.PAUSE, function () {
                        Be.media.paused = !0, _(Be.media, "pause")
                    }), Be.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS, function (e) {
                        Be.media.seeking = !1, Be.media.currentTime = e.currentPosition / 1e3, _(Be.media, "timeupdate")
                    }), Be.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS, function (e) {
                        Be.media.buffered = e.loadProgress, _(Be.media, "progress"), 1 === parseInt(e.loadProgress) && _(Be.media, "canplaythrough")
                    }), Be.embed.bind(e.SC.Widget.Events.FINISH, function () {
                        Be.media.paused = !0, _(Be.media, "ended")
                    })
                })
            }

            function le() {
                "play" in Be.media && Be.media.play()
            }

            function ue() {
                "pause" in Be.media && Be.media.pause()
            }

            function ce(e) {
                return q.boolean(e) || (e = Be.media.paused), e ? le() : ue(), e
            }

            function de(e) {
                q.number(e) || (e = E.seekTime), pe(Be.media.currentTime - e)
            }

            function fe(e) {
                q.number(e) || (e = E.seekTime), pe(Be.media.currentTime + e)
            }

            function pe(e) {
                var t = 0,
                    n = Be.media.paused,
                    i = he();
                q.number(e) ? t = e : q.object(e) && r(["input", "change"], e.type) && (t = e.target.value / e.target.max * i), t < 0 ? t = 0 : t > i && (t = i), Ne(t);
                try {
                    Be.media.currentTime = t.toFixed(4)
                } catch (e) {}
                if (r(E.types.embed, Be.type)) {
                    switch (Be.type) {
                        case "youtube":
                            Be.embed.seekTo(t);
                            break;
                        case "vimeo":
                            Be.embed.setCurrentTime(t.toFixed(0));
                            break;
                        case "soundcloud":
                            Be.embed.seekTo(1e3 * t)
                    }
                    n && ue(), _(Be.media, "timeupdate"), Be.media.seeking = !0, _(Be.media, "seeking")
                }
                Ue("Seeking to " + Be.media.currentTime + " seconds"), z(t)
            }

            function he() {
                var e = parseInt(E.duration),
                    t = 0;
                return null === Be.media.duration || isNaN(Be.media.duration) || (t = Be.media.duration), isNaN(e) ? t : e
            }

            function me() {
                p(Be.container, E.classes.playing, !Be.media.paused), p(Be.container, E.classes.stopped, Be.media.paused), Oe(Be.media.paused)
            }

            function ge() {
                j = {
                    x: e.pageXOffset || 0,
                    y: e.pageYOffset || 0
                }
            }

            function ye() {
                e.scrollTo(j.x, j.y)
            }

            function ve(e) {
                var n = N.supportsFullScreen;
                if (n) {
                    if (!e || e.type !== N.fullScreenEventName) return N.isFullScreen(Be.container) ? N.cancelFullScreen() : (ge(), N.requestFullScreen(Be.container)), void(Be.isFullscreen = N.isFullScreen(Be.container));
                    Be.isFullscreen = N.isFullScreen(Be.container)
                } else Be.isFullscreen = !Be.isFullscreen, t.body.style.overflow = Be.isFullscreen ? "hidden" : "";
                p(Be.container, E.classes.fullscreen.active, Be.isFullscreen), U(Be.isFullscreen), Be.buttons && Be.buttons.fullscreen && w(Be.buttons.fullscreen, Be.isFullscreen), _(Be.container, Be.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0), !Be.isFullscreen && n && ye()
            }

            function be(e) {
                if (q.boolean(e) || (e = !Be.media.muted), w(Be.buttons.mute, e), Be.media.muted = e, 0 === Be.media.volume && we(E.volume), r(E.types.embed, Be.type)) {
                    switch (Be.type) {
                        case "youtube":
                            Be.embed[Be.media.muted ? "mute" : "unMute"]();
                            break;
                        case "vimeo":
                        case "soundcloud":
                            Be.embed.setVolume(Be.media.muted ? 0 : parseFloat(E.volume / E.volumeMax))
                    }
                    _(Be.media, "volumechange")
                }
            }

            function we(e) {
                var t = E.volumeMax,
                    n = E.volumeMin;
                if (q.undefined(e) && (e = Be.storage.volume), (null === e || isNaN(e)) && (e = E.volume), e > t && (e = t), e < n && (e = n), Be.media.volume = parseFloat(e / t), Be.volume.display && (Be.volume.display.value = e), r(E.types.embed, Be.type)) {
                    switch (Be.type) {
                        case "youtube":
                            Be.embed.setVolume(100 * Be.media.volume);
                            break;
                        case "vimeo":
                        case "soundcloud":
                            Be.embed.setVolume(Be.media.volume)
                    }
                    _(Be.media, "volumechange")
                }
                0 === e ? Be.media.muted = !0 : Be.media.muted && e > 0 && be()
            }

            function xe(e) {
                var t = Be.media.muted ? 0 : Be.media.volume * E.volumeMax;
                q.number(e) || (e = E.volumeStep), we(t + e)
            }

            function Te(e) {
                var t = Be.media.muted ? 0 : Be.media.volume * E.volumeMax;
                q.number(e) || (e = E.volumeStep), we(t - e)
            }

            function ke() {
                var e = Be.media.muted ? 0 : Be.media.volume * E.volumeMax;
                Be.supported.full && (Be.volume.input && (Be.volume.input.value = e), Be.volume.display && (Be.volume.display.value = e)), te({
                    volume: e
                }), p(Be.container, E.classes.muted, 0 === e), Be.supported.full && Be.buttons.mute && w(Be.buttons.mute, 0 === e)
            }

            function Ce(e) {
                Be.supported.full && Be.buttons.captions && (q.boolean(e) || (e = -1 === Be.container.className.indexOf(E.classes.captions.active)), Be.captionsEnabled = e, w(Be.buttons.captions, Be.captionsEnabled), p(Be.container, E.classes.captions.active, Be.captionsEnabled), _(Be.container, Be.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0), te({
                    captionsEnabled: Be.captionsEnabled
                }))
            }

            function Se(e) {
                var t = "waiting" === e.type;
                clearTimeout(Ve.loading), Ve.loading = setTimeout(function () {
                    p(Be.container, E.classes.loading, t), Oe(t)
                }, t ? 250 : 0)
            }

            function Ee(e) {
                if (Be.supported.full) {
                    var t = Be.progress.played,
                        n = 0,
                        i = he();
                    if (e) switch (e.type) {
                        case "timeupdate":
                        case "seeking":
                            if (Be.controls.pressed) return;
                            n = x(Be.media.currentTime, i), "timeupdate" === e.type && Be.buttons.seek && (Be.buttons.seek.value = n);
                            break;
                        case "playing":
                        case "progress":
                            t = Be.progress.buffer, n = function () {
                                var e = Be.media.buffered;
                                return e && e.length ? x(e.end(0), i) : q.number(e) ? 100 * e : 0
                            }()
                    }
                    Ae(t, n)
                }
            }

            function Ae(e, t) {
                if (Be.supported.full) {
                    if (q.undefined(t) && (t = 0), q.undefined(e)) {
                        if (!Be.progress || !Be.progress.buffer) return;
                        e = Be.progress.buffer
                    }
                    q.htmlElement(e) ? e.value = t : e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
                }
            }

            function Fe(e, t) {
                if (t) {
                    isNaN(e) && (e = 0), Be.secs = parseInt(e % 60), Be.mins = parseInt(e / 60 % 60), Be.hours = parseInt(e / 60 / 60 % 60);
                    var n = parseInt(he() / 60 / 60 % 60) > 0;
                    Be.secs = ("0" + Be.secs).slice(-2), Be.mins = ("0" + Be.mins).slice(-2), t.innerHTML = (n ? Be.hours + ":" : "") + Be.mins + ":" + Be.secs
                }
            }

            function _e() {
                if (Be.supported.full) {
                    var e = he() || 0;
                    !Be.duration && E.displayDuration && Be.media.paused && Fe(e, Be.currentTime), Be.duration && Fe(e, Be.duration), je()
                }
            }

            function De(e) {
                Fe(Be.media.currentTime, Be.currentTime), e && "timeupdate" === e.type && Be.media.seeking || Ee(e)
            }

            function Ne(e) {
                q.number(e) || (e = 0);
                var t = he(),
                    n = x(e, t);
                Be.progress && Be.progress.played && (Be.progress.played.value = n), Be.buttons && Be.buttons.seek && (Be.buttons.seek.value = n)
            }

            function je(e) {
                var t = he();
                if (E.tooltips.seek && Be.progress.container && 0 !== t) {
                    var n = Be.progress.container.getBoundingClientRect(),
                        i = 0,
                        o = E.classes.tooltip + "--visible";
                    if (e) i = 100 / n.width * (e.pageX - n.left);
                    else {
                        if (!h(Be.progress.tooltip, o)) return;
                        i = Be.progress.tooltip.style.left.replace("%", "")
                    }
                    i < 0 ? i = 0 : i > 100 && (i = 100), Fe(t / 100 * i, Be.progress.tooltip), Be.progress.tooltip.style.left = i + "%", e && r(["mouseenter", "mouseleave"], e.type) && p(Be.progress.tooltip, o, "mouseenter" === e.type)
                }
            }

            function Oe(t) {
                if (E.hideControls && "audio" !== Be.type) {
                    var n = 0,
                        i = !1,
                        o = t,
                        a = h(Be.container, E.classes.loading);
                    if (q.boolean(t) || (t && t.type ? (i = "enterfullscreen" === t.type, o = r(["mousemove", "touchstart", "mouseenter", "focus"], t.type), r(["mousemove", "touchmove"], t.type) && (n = 2e3), "focus" === t.type && (n = 3e3)) : o = h(Be.container, E.classes.hideControls)), e.clearTimeout(Ve.hover), o || Be.media.paused || a) {
                        if (p(Be.container, E.classes.hideControls, !1), Be.media.paused || a) return;
                        Be.browser.isTouch && (n = 3e3)
                    }
                    o && Be.media.paused || (Ve.hover = e.setTimeout(function () {
                        (!Be.controls.pressed && !Be.controls.hover || i) && p(Be.container, E.classes.hideControls, !0)
                    }, n))
                }
            }

            function qe(e) {
                if (!q.undefined(e)) return void Le(e);
                var t;
                switch (Be.type) {
                    case "youtube":
                        t = Be.embed.getVideoUrl();
                        break;
                    case "vimeo":
                        Be.embed.getVideoUrl.then(function (e) {
                            t = e
                        });
                        break;
                    case "soundcloud":
                        Be.embed.getCurrentSound(function (e) {
                            t = e.permalink_url
                        });
                        break;
                    default:
                        t = Be.media.currentSrc
                }
                return t || ""
            }

            function Le(e) {
                function n() {
                    if (Be.embed = null, l(Be.media), "video" === Be.type && Be.videoContainer && l(Be.videoContainer), Be.container && Be.container.removeAttribute("class"), "type" in e && (Be.type = e.type, "video" === Be.type)) {
                        var n = e.sources[0];
                        "type" in n && r(E.types.embed, n.type) && (Be.type = n.type)
                    }
                    switch (Be.supported = F(Be.type), Be.type) {
                        case "video":
                            Be.media = t.createElement("video");
                            break;
                        case "audio":
                            Be.media = t.createElement("audio");
                            break;
                        case "youtube":
                        case "vimeo":
                        case "soundcloud":
                            Be.media = t.createElement("div"), Be.embedId = e.sources[0].src
                    }
                    u(Be.container, Be.media), q.boolean(e.autoplay) && (E.autoplay = e.autoplay), r(E.types.html5, Be.type) && (E.crossorigin && Be.media.setAttribute("crossorigin", ""), E.autoplay && Be.media.setAttribute("autoplay", ""), "poster" in e && Be.media.setAttribute("poster", e.poster), E.loop && Be.media.setAttribute("loop", "")), p(Be.container, E.classes.fullscreen.active, Be.isFullscreen), p(Be.container, E.classes.captions.active, Be.captionsEnabled), G(), r(E.types.html5, Be.type) && X("source", e.sources), ne(), r(E.types.html5, Be.type) && ("tracks" in e && X("track", e.tracks), Be.media.load()), (r(E.types.html5, Be.type) || r(E.types.embed, Be.type) && !Be.supported.full) && (Re(), ze()), E.title = e.title, Z()
                }
                if (!(q.object(e) && "sources" in e && e.sources.length)) return void Xe("Invalid source format");
                p(Be.container, E.classes.ready, !1), ue(), Ne(), Ae(), Me(), Ie(n, !1)
            }

            function Pe(e) {
                "video" === Be.type && Be.media.setAttribute("poster", e)
            }

            function $e() {
                function n() {
                    var e = ce(),
                        t = Be.buttons[e ? "play" : "pause"],
                        n = Be.buttons[e ? "pause" : "play"];
                    if (n = n && n.length > 1 ? n[n.length - 1] : n[0]) {
                        var i = h(t, E.classes.tabFocus);
                        setTimeout(function () {
                            n.focus(), i && (p(t, E.classes.tabFocus, !1), p(n, E.classes.tabFocus, !0))
                        }, 100)
                    }
                }

                function i() {
                    var e = t.activeElement;
                    return e = e && e !== t.body ? t.querySelector(":focus") : null
                }

                function o(e) {
                    return e.keyCode ? e.keyCode : e.which
                }

                function a(e) {
                    for (var t in Be.buttons) {
                        var n = Be.buttons[t];
                        if (q.nodeList(n))
                            for (var i = 0; i < n.length; i++) p(n[i], E.classes.tabFocus, n[i] === e);
                        else p(n, E.classes.tabFocus, n === e)
                    }
                }

                function s(e) {
                    var t = o(e),
                        n = "keydown" === e.type,
                        i = n && t === u;
                    if (q.number(t))
                        if (n) {
                            var a = [48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67];
                            switch (r(a, t) && (e.preventDefault(), e.stopPropagation()), t) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    i || function () {
                                        var e = Be.media.duration;
                                        q.number(e) && pe(e / 10 * (t - 48))
                                    }();
                                    break;
                                case 32:
                                case 75:
                                    i || ce();
                                    break;
                                case 38:
                                    xe();
                                    break;
                                case 40:
                                    Te();
                                    break;
                                case 77:
                                    i || be();
                                    break;
                                case 39:
                                    fe();
                                    break;
                                case 37:
                                    de();
                                    break;
                                case 70:
                                    ve();
                                    break;
                                case 67:
                                    i || Ce()
                            }!N.supportsFullScreen && Be.isFullscreen && 27 === t && ve(), u = t
                        } else u = null
                }
                var l = Be.browser.isIE ? "change" : "input";
                if (E.keyboardShorcuts.focused) {
                    var u = null;
                    E.keyboardShorcuts.global && v(e, "keydown keyup", function (e) {
                        var t = o(e),
                            n = i(),
                            a = [48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67];
                        1 !== D().length || !r(a, t) || q.htmlElement(n) && m(n, E.selectors.editable) || s(e)
                    }), v(Be.container, "keydown keyup", s)
                }
                v(e, "keyup", function (e) {
                    var t = o(e),
                        n = i();
                    9 === t && a(n)
                }), v(t.body, "click", function () {
                    p(V("." + E.classes.tabFocus), E.classes.tabFocus, !1)
                });
                for (var c in Be.buttons) {
                    var d = Be.buttons[c];
                    v(d, "blur", function () {
                        p(d, "tab-focus", !1)
                    })
                }
                g(Be.buttons.play, "click", E.listeners.play, n), g(Be.buttons.pause, "click", E.listeners.pause, n), g(Be.buttons.restart, "click", E.listeners.restart, pe), g(Be.buttons.rewind, "click", E.listeners.rewind, de), g(Be.buttons.forward, "click", E.listeners.forward, fe), g(Be.buttons.seek, l, E.listeners.seek, pe), g(Be.volume.input, l, E.listeners.volume, function () {
                    we(Be.volume.input.value)
                }), g(Be.buttons.mute, "click", E.listeners.mute, be), g(Be.buttons.fullscreen, "click", E.listeners.fullscreen, ve), N.supportsFullScreen && v(t, N.fullScreenEventName, ve), g(Be.buttons.captions, "click", E.listeners.captions, Ce), v(Be.progress.container, "mouseenter mouseleave mousemove", je), E.hideControls && (v(Be.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", Oe), v(Be.controls, "mouseenter mouseleave", function (e) {
                    Be.controls.hover = "mouseenter" === e.type
                }), v(Be.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
                    Be.controls.pressed = r(["mousedown", "touchstart"], e.type)
                }), v(Be.controls, "focus blur", Oe, !0)), v(Be.volume.input, "wheel", function (e) {
                    e.preventDefault();
                    var t = e.webkitDirectionInvertedFromDevice,
                        n = E.volumeStep / 5;
                    (e.deltaY < 0 || e.deltaX > 0) && (t ? Te(n) : xe(n)), (e.deltaY > 0 || e.deltaX < 0) && (t ? xe(n) : Te(n))
                })
            }

            function He() {
                if (v(Be.media, "timeupdate seeking", De), v(Be.media, "timeupdate", z), v(Be.media, "durationchange loadedmetadata", _e), v(Be.media, "ended", function () {
                        "video" === Be.type && E.showPosterOnEnd && ("video" === Be.type && R(), pe(), Be.media.load())
                    }), v(Be.media, "progress playing", Ee), v(Be.media, "volumechange", ke), v(Be.media, "play pause ended", me), v(Be.media, "waiting canplay seeked", Se), E.clickToPlay && "audio" !== Be.type) {
                    var e = V("." + E.classes.videoWrapper);
                    if (!e) return;
                    e.style.cursor = "pointer", v(e, "click", function () {
                        E.hideControls && Be.browser.isTouch && !Be.media.paused || (Be.media.paused ? le() : Be.media.ended ? (pe(), le()) : ue())
                    })
                }
                E.disableContextMenu && v(Be.media, "contextmenu", function (e) {
                    e.preventDefault()
                }), v(Be.media, E.events.concat(["keyup", "keydown"]).join(" "), function (e) {
                    _(Be.container, e.type, !0)
                })
            }

            function Me() {
                if (r(E.types.html5, Be.type)) {
                    for (var e = Be.media.querySelectorAll("source"), t = 0; t < e.length; t++) l(e[t]);
                    Be.media.setAttribute("src", E.blankUrl), Be.media.load(), Ue("Cancelled network requests")
                }
            }

            function Ie(n, i) {
                function o() {
                    clearTimeout(Ve.cleanUp), q.boolean(i) || (i = !0), q.function(n) && n.call(Ke), i && (Be.init = !1, Be.container.parentNode.replaceChild(Ke, Be.container), t.body.style.overflow = "", _(Ke, "destroyed", !0))
                }
                if (!Be.init) return null;
                switch (Be.type) {
                    case "youtube":
                        e.clearInterval(Ve.buffering), e.clearInterval(Ve.playing), Be.embed.destroy(), o();
                        break;
                    case "vimeo":
                        Be.embed.unload().then(o), Ve.cleanUp = e.setTimeout(o, 200);
                        break;
                    case "video":
                    case "audio":
                        J(!0), o()
                }
            }

            function Re() {
                if (!Be.supported.full) return Xe("Basic support only", Be.type), l(V(E.selectors.controls.wrapper)), l(V(E.selectors.buttons.play)), void J(!0);
                var e = !B(E.selectors.controls.wrapper).length;
                e && Y(), Q() && (e && $e(), He(), J(), M(), I(), we(), ke(), De(), me())
            }

            function ze() {
                e.setTimeout(function () {
                    _(Be.media, "ready")
                }, 0), p(Be.media, O.classes.setup, !0), p(Be.container, E.classes.ready, !0), Be.media.plyr = We, E.autoplay && le()
            }
            var We, Be = this,
                Ve = {};
            Be.media = y;
            var Ke = y.cloneNode(!0),
                Ue = function () {
                    P("log", arguments)
                },
                Xe = function () {
                    P("warn", arguments)
                };
            return Ue("Config", E), We = {
                    getOriginal: function () {
                        return Ke
                    },
                    getContainer: function () {
                        return Be.container
                    },
                    getEmbed: function () {
                        return Be.embed
                    },
                    getMedia: function () {
                        return Be.media
                    },
                    getType: function () {
                        return Be.type
                    },
                    getDuration: he,
                    getCurrentTime: function () {
                        return Be.media.currentTime
                    },
                    getVolume: function () {
                        return Be.media.volume
                    },
                    isMuted: function () {
                        return Be.media.muted
                    },
                    isReady: function () {
                        return h(Be.container, E.classes.ready)
                    },
                    isLoading: function () {
                        return h(Be.container, E.classes.loading)
                    },
                    isPaused: function () {
                        return Be.media.paused
                    },
                    on: function (e, t) {
                        return v(Be.container, e, t), this
                    },
                    play: le,
                    pause: ue,
                    stop: function () {
                        ue(), pe()
                    },
                    restart: pe,
                    rewind: de,
                    forward: fe,
                    seek: pe,
                    source: qe,
                    poster: Pe,
                    setVolume: we,
                    togglePlay: ce,
                    toggleMute: be,
                    toggleCaptions: Ce,
                    toggleFullscreen: ve,
                    toggleControls: Oe,
                    isFullscreen: function () {
                        return Be.isFullscreen || !1
                    },
                    support: function (e) {
                        return i(Be, e)
                    },
                    destroy: Ie
                },
                function () {
                    if (Be.init) return null;
                    if (N = S(), Be.browser = n(), q.htmlElement(Be.media)) {
                        ee();
                        var e = y.tagName.toLowerCase();
                        "div" === e ? (Be.type = y.getAttribute("data-type"), Be.embedId = y.getAttribute("data-video-id"), y.removeAttribute("data-type"), y.removeAttribute("data-video-id")) : (Be.type = e, E.crossorigin = null !== y.getAttribute("crossorigin"), E.autoplay = E.autoplay || null !== y.getAttribute("autoplay"), E.loop = E.loop || null !== y.getAttribute("loop")), Be.supported = F(Be.type), Be.supported.basic && (Be.container = s(y, t.createElement("div")), Be.container.setAttribute("tabindex", 0), G(), Ue(Be.browser.name + " " + Be.browser.version), ne(), (r(E.types.html5, Be.type) || r(E.types.embed, Be.type) && !Be.supported.full) && (Re(), ze(), Z()), Be.init = !0)
                    }
                }(), Be.init ? We : null
        }

        function A(e, n) {
            var i = new XMLHttpRequest;
            if (!q.string(n) || !q.htmlElement(t.querySelector("#" + n))) {
                var o = t.createElement("div");
                o.setAttribute("hidden", ""), q.string(n) && o.setAttribute("id", n), t.body.insertBefore(o, t.body.childNodes[0]), "withCredentials" in i && (i.open("GET", e, !0), i.onload = function () {
                    o.innerHTML = i.responseText
                }, i.send())
            }
        }

        function F(e) {
            var i = n(),
                o = i.isIE && i.version <= 9,
                r = i.isIos,
                a = i.isIphone,
                s = !!t.createElement("audio").canPlayType,
                l = !!t.createElement("video").canPlayType,
                u = !1,
                c = !1;
            switch (e) {
                case "video":
                    u = l, c = u && !o && !a;
                    break;
                case "audio":
                    u = s, c = u && !o;
                    break;
                case "vimeo":
                    u = !0, c = !o && !r;
                    break;
                case "youtube":
                    u = !0, c = !o && !r, r && !a && i.version >= 10 && (c = !0);
                    break;
                case "soundcloud":
                    u = !0, c = !o && !a;
                    break;
                default:
                    u = s && l, c = u && !o
            }
            return {
                basic: u,
                full: c
            }
        }

        function _(e, n) {
            function i(e, t) {
                h(t, O.classes.hook) || o.push({
                    target: e,
                    media: t
                })
            }
            var o = [],
                r = [],
                a = [O.selectors.html5, O.selectors.embed].join(",");
            if (q.string(e) ? e = t.querySelectorAll(e) : q.htmlElement(e) ? e = [e] : q.nodeList(e) || q.array(e) || q.string(e) || (q.undefined(n) && q.object(e) && (n = e), e = t.querySelectorAll(a)), q.nodeList(e) && (e = Array.prototype.slice.call(e)), !F().basic || !e.length) return !1;
            for (var s = 0; s < e.length; s++) {
                var l = e[s],
                    u = l.querySelectorAll(a);
                if (u.length)
                    for (var c = 0; c < u.length; c++) i(l, u[c]);
                else m(l, a) && i(l, l)
            }
            return o.forEach(function (e) {
                var t = e.target,
                    i = e.media;
                var o = {};
                try {
                    o = JSON.parse(t.getAttribute("data-plyr"))
                } catch (e) {}
                var a = T({}, O, n, o);
                if (!a.enabled) return null;
                var s = new E(i, a);
                if (q.object(s)) {
                    if (a.debug) {
                        var l = a.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                        v(s.getContainer(), l.join(" "), function (e) {
                            console.log([a.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                        })
                    }
                    b(s.getContainer(), "setup", !0, {
                        plyr: s
                    }), r.push(s)
                }
            }), r
        }

        function D(e) {
            if (q.string(e) ? e = t.querySelector(e) : q.undefined(e) && (e = t.body), q.htmlElement(e)) {
                var n = e.querySelectorAll("." + O.classes.setup),
                    i = [];
                return Array.prototype.slice.call(n).forEach(function (e) {
                    q.object(e.plyr) && i.push(e.plyr)
                }), i
            }
            return []
        }
        var N, j = {
                x: 0,
                y: 0
            },
            O = {
                enabled: !0,
                debug: !1,
                autoplay: !1,
                loop: !1,
                seekTime: 10,
                volume: 10,
                volumeMin: 0,
                volumeMax: 10,
                volumeStep: 1,
                duration: null,
                displayDuration: !0,
                loadSprite: !0,
                iconPrefix: "plyr",
                iconUrl: "https://cdn.plyr.io/2.0.13/plyr.svg",
                blankUrl: "https://cdn.selz.com/plyr/blank.mp4",
                clickToPlay: !0,
                hideControls: !0,
                showPosterOnEnd: !1,
                disableContextMenu: !0,
                keyboardShorcuts: {
                    focused: !0,
                    global: !1
                },
                tooltips: {
                    controls: !1,
                    seek: !0
                },
                selectors: {
                    html5: "video, audio",
                    embed: "[data-type]",
                    editable: "input, textarea, select, [contenteditable]",
                    container: ".plyr",
                    controls: {
                        container: null,
                        wrapper: ".plyr__controls"
                    },
                    labels: "[data-plyr]",
                    buttons: {
                        seek: '[data-plyr="seek"]',
                        play: '[data-plyr="play"]',
                        pause: '[data-plyr="pause"]',
                        restart: '[data-plyr="restart"]',
                        rewind: '[data-plyr="rewind"]',
                        forward: '[data-plyr="fast-forward"]',
                        mute: '[data-plyr="mute"]',
                        captions: '[data-plyr="captions"]',
                        fullscreen: '[data-plyr="fullscreen"]'
                    },
                    volume: {
                        input: '[data-plyr="volume"]',
                        display: ".plyr__volume--display"
                    },
                    progress: {
                        container: ".plyr__progress",
                        buffer: ".plyr__progress--buffer",
                        played: ".plyr__progress--played"
                    },
                    captions: ".plyr__captions",
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration"
                },
                classes: {
                    setup: "plyr--setup",
                    ready: "plyr--ready",
                    videoWrapper: "plyr__video-wrapper",
                    embedWrapper: "plyr__video-embed",
                    type: "plyr--{0}",
                    stopped: "plyr--stopped",
                    playing: "plyr--playing",
                    muted: "plyr--muted",
                    loading: "plyr--loading",
                    hover: "plyr--hover",
                    tooltip: "plyr__tooltip",
                    hidden: "plyr__sr-only",
                    hideControls: "plyr--hide-controls",
                    isIos: "plyr--is-ios",
                    isTouch: "plyr--is-touch",
                    captions: {
                        enabled: "plyr--captions-enabled",
                        active: "plyr--captions-active"
                    },
                    fullscreen: {
                        enabled: "plyr--fullscreen-enabled",
                        active: "plyr--fullscreen-active"
                    },
                    tabFocus: "tab-focus"
                },
                captions: {
                    defaultActive: !1
                },
                fullscreen: {
                    enabled: !0,
                    fallback: !0,
                    allowAudio: !1
                },
                storage: {
                    enabled: !0,
                    key: "plyr"
                },
                controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
                i18n: {
                    restart: "Restart",
                    rewind: "Rewind {seektime} secs",
                    play: "Play",
                    pause: "Pause",
                    forward: "Forward {seektime} secs",
                    played: "played",
                    buffered: "buffered",
                    currentTime: "Current time",
                    duration: "Duration",
                    volume: "Volume",
                    toggleMute: "Toggle Mute",
                    toggleCaptions: "Toggle Captions",
                    toggleFullscreen: "Toggle Fullscreen",
                    frameTitle: "Player for {title}"
                },
                types: {
                    embed: ["youtube", "vimeo", "soundcloud"],
                    html5: ["video", "audio"]
                },
                urls: {
                    vimeo: {
                        api: "https://player.vimeo.com/api/player.js"
                    },
                    youtube: {
                        api: "https://www.youtube.com/iframe_api"
                    },
                    soundcloud: {
                        api: "https://w.soundcloud.com/player/api.js"
                    }
                },
                listeners: {
                    seek: null,
                    play: null,
                    pause: null,
                    restart: null,
                    rewind: null,
                    forward: null,
                    mute: null,
                    volume: null,
                    captions: null,
                    fullscreen: null
                },
                events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied"],
                logPrefix: "[Plyr]"
            },
            q = {
                object: function (e) {
                    return null !== e && "object" == typeof e
                },
                array: function (e) {
                    return null !== e && "object" == typeof e && e.constructor === Array
                },
                number: function (e) {
                    return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
                },
                string: function (e) {
                    return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
                },
                boolean: function (e) {
                    return null !== e && "boolean" == typeof e
                },
                nodeList: function (e) {
                    return null !== e && e instanceof NodeList
                },
                htmlElement: function (e) {
                    return null !== e && e instanceof HTMLElement
                },
                function: function (e) {
                    return null !== e && "function" == typeof e
                },
                undefined: function (e) {
                    return null !== e && void 0 === e
                }
            },
            L = {
                supported: function () {
                    if (!("localStorage" in e)) return !1;
                    try {
                        e.localStorage.setItem("___test", "OK");
                        var t = e.localStorage.getItem("___test");
                        return e.localStorage.removeItem("___test"), "OK" === t
                    } catch (e) {
                        return !1
                    }
                    return !1
                }()
            };
        return {
            setup: _,
            supported: F,
            loadSprite: A,
            get: D
        }
    }),
    function () {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }()
}, function (e, t, n) {
    var i;
    ! function (o, r) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = r(o, document) : void 0 !== (i = function () {
            r(o, document)
        }.call(t, n, t, e)) && (e.exports = i)
    }("undefined" != typeof window ? window : this, function (e, t) {
        "use strict";

        function n(e) {
            return e instanceof HTMLElement && e.classList.contains(d.selectors.disabled)
        }

        function i(e, t, n) {
            e.addEventListener(t, n, !1)
        }

        function o(e) {
            var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
        }

        function r(e, t) {
            if (t < 1) {
                var n = o(t);
                return parseFloat(e.toFixed(n))
            }
            return Math.round(e / t) * t
        }

        function a(e) {
            var t, n = e.target,
                i = e.changedTouches[0],
                o = parseFloat(n.getAttribute("min")) || 0,
                a = parseFloat(n.getAttribute("max")) || 100,
                s = parseFloat(n.getAttribute("step")) || 1,
                l = a - o,
                u = n.getBoundingClientRect(),
                c = 100 / u.width * (d.thumbWidth / 2) / 100;
            return t = 100 / u.width * (i.clientX - u.left), t < 0 ? t = 0 : t > 100 && (t = 100), t < 50 ? t -= (100 - 2 * t) * c : t > 50 && (t += 2 * (t - 50) * c), o + r(l * (t / 100), s)
        }

        function s(e) {
            d.enabled && "range" === e.target.type && !n(e.target) && (e.preventDefault(), e.target.value = a(e), u(e.target, e.type === d.events.end ? "change" : "input"))
        }

        function l() {
            i(t.body, d.events.start, s), i(t.body, d.events.move, s), i(t.body, d.events.end, s)
        }

        function u(e, t, n) {
            e.dispatchEvent(new CustomEvent(t, n))
        }

        function c() {
            return [d.selectors.range, ":not(.", d.selectors.disabled, ")"].join("")
        }
        var d = {
            enabled: !0,
            selectors: {
                range: '[type="range"]',
                disabled: "rangetouch--disabled"
            },
            thumbWidth: 15,
            events: {
                start: "touchstart",
                move: "touchmove",
                end: "touchend"
            }
        };
        return function () {
            if ("ontouchstart" in t.documentElement) {
                for (var e = t.querySelectorAll(c()), n = e.length - 1; n >= 0; n--) e[n].style.touchAction = "manipulation", e[n].style.webkitUserSelect = "none";
                l()
            }
        }(), {
            set: function (e, t) {
                d[e] = t
            }
        }
    }),
    function () {
        "use strict";

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        if ("function" == typeof window.CustomEvent) return !1;
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }()
}, function (e, t, n) {
    e.exports = n(1)
}]);
