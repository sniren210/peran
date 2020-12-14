/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, g, u) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t
  }

  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), e.forEach(function (t) {
        var e, n, i;
        e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i
      })
    }
    return o
  }
  g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u;
  var e = "transitionend";

  function n(t) {
    var e = this,
      n = !1;
    return g(this).one(_.TRANSITION_END, function () {
      n = !0
    }), setTimeout(function () {
      n || _.triggerTransitionEnd(e)
    }, t), this
  }
  var _ = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
      return t
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : ""
      }
      try {
        return document.querySelector(e) ? e : null
      } catch (t) {
        return null
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = g(t).css("transition-duration"),
        n = g(t).css("transition-delay"),
        i = parseFloat(e),
        o = parseFloat(n);
      return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
    },
    reflow: function (t) {
      return t.offsetHeight
    },
    triggerTransitionEnd: function (t) {
      g(t).trigger(e)
    },
    supportsTransitionEnd: function () {
      return Boolean(e)
    },
    isElement: function (t) {
      return (t[0] || t).nodeType
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
        } var a
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null
    }
  };
  g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
    bindType: e,
    delegateType: e,
    handle: function (t) {
      if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
    }
  };
  var o = "alert",
    r = "bs.alert",
    a = "." + r,
    c = g.fn[o],
    h = {
      CLOSE: "close" + a,
      CLOSED: "closed" + a,
      CLICK_DATA_API: "click" + a + ".data-api"
    },
    f = "alert",
    d = "fade",
    m = "show",
    p = function () {
      function i(t) {
        this._element = t
      }
      var t = i.prototype;
      return t.close = function (t) {
        var e = this._element;
        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
      }, t.dispose = function () {
        g.removeData(this._element, r), this._element = null
      }, t._getRootElement = function (t) {
        var e = _.getSelectorFromElement(t),
          n = !1;
        return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n
      }, t._triggerCloseEvent = function (t) {
        var e = g.Event(h.CLOSE);
        return g(t).trigger(e), e
      }, t._removeElement = function (e) {
        var n = this;
        if (g(e).removeClass(m), g(e).hasClass(d)) {
          var t = _.getTransitionDurationFromElement(e);
          g(e).one(_.TRANSITION_END, function (t) {
            return n._destroyElement(e, t)
          }).emulateTransitionEnd(t)
        } else this._destroyElement(e)
      }, t._destroyElement = function (t) {
        g(t).detach().trigger(h.CLOSED).remove()
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = g(this),
            e = t.data(r);
          e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this)
        })
      }, i._handleDismiss = function (e) {
        return function (t) {
          t && t.preventDefault(), e.close(this)
        }
      }, s(i, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }]), i
    }();
  g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () {
    return g.fn[o] = c, p._jQueryInterface
  };
  var v = "button",
    y = "bs.button",
    E = "." + y,
    C = ".data-api",
    T = g.fn[v],
    S = "active",
    b = "btn",
    I = "focus",
    D = '[data-toggle^="button"]',
    w = '[data-toggle="buttons"]',
    A = 'input:not([type="hidden"])',
    N = ".active",
    O = ".btn",
    k = {
      CLICK_DATA_API: "click" + E + C,
      FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
    },
    P = function () {
      function n(t) {
        this._element = t
      }
      var t = n.prototype;
      return t.toggle = function () {
        var t = !0,
          e = !0,
          n = g(this._element).closest(w)[0];
        if (n) {
          var i = this._element.querySelector(A);
          if (i) {
            if ("radio" === i.type)
              if (i.checked && this._element.classList.contains(S)) t = !1;
              else {
                var o = n.querySelector(N);
                o && g(o).removeClass(S)
              } if (t) {
              if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
              i.checked = !this._element.classList.contains(S), g(i).trigger("change")
            }
            i.focus(), e = !1
          }
        }
        e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S)
      }, t.dispose = function () {
        g.removeData(this._element, y), this._element = null
      }, n._jQueryInterface = function (e) {
        return this.each(function () {
          var t = g(this).data(y);
          t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]()
        })
      }, s(n, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }]), n
    }();
  g(document).on(k.CLICK_DATA_API, D, function (t) {
    t.preventDefault();
    var e = t.target;
    g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle")
  }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = g(t.target).closest(O)[0];
    g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
  }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () {
    return g.fn[v] = T, P._jQueryInterface
  };
  var L = "carousel",
    j = "bs.carousel",
    H = "." + j,
    R = ".data-api",
    x = g.fn[L],
    F = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
    U = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
    W = "next",
    q = "prev",
    M = "left",
    K = "right",
    Q = {
      SLIDE: "slide" + H,
      SLID: "slid" + H,
      KEYDOWN: "keydown" + H,
      MOUSEENTER: "mouseenter" + H,
      MOUSELEAVE: "mouseleave" + H,
      TOUCHSTART: "touchstart" + H,
      TOUCHMOVE: "touchmove" + H,
      TOUCHEND: "touchend" + H,
      POINTERDOWN: "pointerdown" + H,
      POINTERUP: "pointerup" + H,
      DRAG_START: "dragstart" + H,
      LOAD_DATA_API: "load" + H + R,
      CLICK_DATA_API: "click" + H + R
    },
    B = "carousel",
    V = "active",
    Y = "slide",
    z = "carousel-item-right",
    X = "carousel-item-left",
    $ = "carousel-item-next",
    G = "carousel-item-prev",
    J = "pointer-event",
    Z = ".active",
    tt = ".active.carousel-item",
    et = ".carousel-item",
    nt = ".carousel-item img",
    it = ".carousel-item-next, .carousel-item-prev",
    ot = ".carousel-indicators",
    rt = "[data-slide], [data-slide-to]",
    st = '[data-ride="carousel"]',
    at = {
      TOUCH: "touch",
      PEN: "pen"
    },
    lt = function () {
      function r(t, e) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
      }
      var t = r.prototype;
      return t.next = function () {
        this._isSliding || this._slide(W)
      }, t.nextWhenVisible = function () {
        !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
      }, t.prev = function () {
        this._isSliding || this._slide(q)
      }, t.pause = function (t) {
        t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, t.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, t.to = function (t) {
        var e = this;
        this._activeElement = this._element.querySelector(tt);
        var n = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0))
          if (this._isSliding) g(this._element).one(Q.SLID, function () {
            return e.to(t)
          });
          else {
            if (n === t) return this.pause(), void this.cycle();
            var i = n < t ? W : q;
            this._slide(i, this._items[t])
          }
      }, t.dispose = function () {
        g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, t._getConfig = function (t) {
        return t = l({}, F, t), _.typeCheckConfig(L, t, U), t
      }, t._handleSwipe = function () {
        var t = Math.abs(this.touchDeltaX);
        if (!(t <= 40)) {
          var e = t / this.touchDeltaX;
          0 < e && this.prev(), e < 0 && this.next()
        }
      }, t._addEventListeners = function () {
        var e = this;
        this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
          return e._keydown(t)
        }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) {
          return e.pause(t)
        }).on(Q.MOUSELEAVE, function (t) {
          return e.cycle(t)
        }), this._config.touch && this._addTouchEventListeners()
      }, t._addTouchEventListeners = function () {
        var n = this;
        if (this._touchSupported) {
          var e = function (t) {
              n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
            },
            i = function (t) {
              n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
                return n.cycle(t)
              }, 500 + n._config.interval))
            };
          g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
            return t.preventDefault()
          }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
            return e(t)
          }), g(this._element).on(Q.POINTERUP, function (t) {
            return i(t)
          }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
            return e(t)
          }), g(this._element).on(Q.TOUCHMOVE, function (t) {
            var e;
            (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
          }), g(this._element).on(Q.TOUCHEND, function (t) {
            return i(t)
          }))
        }
      }, t._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;
          case 39:
            t.preventDefault(), this.next()
        }
      }, t._getItemIndex = function (t) {
        return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t)
      }, t._getItemByDirection = function (t, e) {
        var n = t === W,
          i = t === q,
          o = this._getItemIndex(e),
          r = this._items.length - 1;
        if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
        var s = (o + (t === q ? -1 : 1)) % this._items.length;
        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
      }, t._triggerSlideEvent = function (t, e) {
        var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(tt)),
          o = g.Event(Q.SLIDE, {
            relatedTarget: t,
            direction: e,
            from: i,
            to: n
          });
        return g(this._element).trigger(o), o
      }, t._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
          g(e).removeClass(V);
          var n = this._indicatorsElement.children[this._getItemIndex(t)];
          n && g(n).addClass(V)
        }
      }, t._slide = function (t, e) {
        var n, i, o, r = this,
          s = this._element.querySelector(tt),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);
        if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1;
        else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
          this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
          var u = g.Event(Q.SLID, {
            relatedTarget: l,
            direction: o,
            from: a,
            to: c
          });
          if (g(this._element).hasClass(Y)) {
            g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
            var f = parseInt(l.getAttribute("data-interval"), 10);
            this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
            var d = _.getTransitionDurationFromElement(s);
            g(s).one(_.TRANSITION_END, function () {
              g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
                return g(r._element).trigger(u)
              }, 0)
            }).emulateTransitionEnd(d)
          } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);
          h && this.cycle()
        }
      }, r._jQueryInterface = function (i) {
        return this.each(function () {
          var t = g(this).data(j),
            e = l({}, F, g(this).data());
          "object" == typeof i && (e = l({}, e, i));
          var n = "string" == typeof i ? i : e.slide;
          if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i);
          else if ("string" == typeof n) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]()
          } else e.interval && e.ride && (t.pause(), t.cycle())
        })
      }, r._dataApiClickHandler = function (t) {
        var e = _.getSelectorFromElement(this);
        if (e) {
          var n = g(e)[0];
          if (n && g(n).hasClass(B)) {
            var i = l({}, g(n).data(), g(this).data()),
              o = this.getAttribute("data-slide-to");
            o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault()
          }
        }
      }, s(r, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }, {
        key: "Default",
        get: function () {
          return F
        }
      }]), r
    }();
  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
      var i = g(t[e]);
      lt._jQueryInterface.call(i, i.data())
    }
  }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () {
    return g.fn[L] = x, lt._jQueryInterface
  };
  var ct = "collapse",
    ht = "bs.collapse",
    ut = "." + ht,
    ft = g.fn[ct],
    dt = {
      toggle: !0,
      parent: ""
    },
    gt = {
      toggle: "boolean",
      parent: "(string|element)"
    },
    _t = {
      SHOW: "show" + ut,
      SHOWN: "shown" + ut,
      HIDE: "hide" + ut,
      HIDDEN: "hidden" + ut,
      CLICK_DATA_API: "click" + ut + ".data-api"
    },
    mt = "show",
    pt = "collapse",
    vt = "collapsing",
    yt = "collapsed",
    Et = "width",
    Ct = "height",
    Tt = ".show, .collapsing",
    St = '[data-toggle="collapse"]',
    bt = function () {
      function a(e, t) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
        for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
          var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
              return t === e
            });
          null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
      }
      var t = a.prototype;
      return t.toggle = function () {
        g(this._element).hasClass(mt) ? this.hide() : this.show()
      }, t.show = function () {
        var t, e, n = this;
        if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
            return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
          })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
          var i = g.Event(_t.SHOW);
          if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
            t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));
            var o = this._getDimension();
            g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);
            var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = _.getTransitionDurationFromElement(this._element);
            g(this._element).one(_.TRANSITION_END, function () {
              g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN)
            }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
          }
        }
      }, t.hide = function () {
        var t = this;
        if (!this._isTransitioning && g(this._element).hasClass(mt)) {
          var e = g.Event(_t.HIDE);
          if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
            var n = this._getDimension();
            this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
            var i = this._triggerArray.length;
            if (0 < i)
              for (var o = 0; o < i; o++) {
                var r = this._triggerArray[o],
                  s = _.getSelectorFromElement(r);
                if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1)
              }
            this.setTransitioning(!0);
            this._element.style[n] = "";
            var a = _.getTransitionDurationFromElement(this._element);
            g(this._element).one(_.TRANSITION_END, function () {
              t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
            }).emulateTransitionEnd(a)
          }
        }
      }, t.setTransitioning = function (t) {
        this._isTransitioning = t
      }, t.dispose = function () {
        g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
      }, t._getConfig = function (t) {
        return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t
      }, t._getDimension = function () {
        return g(this._element).hasClass(Et) ? Et : Ct
      }, t._getParent = function () {
        var t, n = this;
        _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
        var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));
        return g(i).each(function (t, e) {
          n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
        }), t
      }, t._addAriaAndCollapsedClass = function (t, e) {
        var n = g(t).hasClass(mt);
        e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n)
      }, a._getTargetFromElement = function (t) {
        var e = _.getSelectorFromElement(t);
        return e ? document.querySelector(e) : null
      }, a._jQueryInterface = function (i) {
        return this.each(function () {
          var t = g(this),
            e = t.data(ht),
            n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
          if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
            if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
            e[i]()
          }
        })
      }, s(a, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }, {
        key: "Default",
        get: function () {
          return dt
        }
      }]), a
    }();
  g(document).on(_t.CLICK_DATA_API, St, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = g(this),
      e = _.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e));
    g(i).each(function () {
      var t = g(this),
        e = t.data(ht) ? "toggle" : n.data();
      bt._jQueryInterface.call(t, e)
    })
  }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () {
    return g.fn[ct] = ft, bt._jQueryInterface
  };
  var It = "dropdown",
    Dt = "bs.dropdown",
    wt = "." + Dt,
    At = ".data-api",
    Nt = g.fn[It],
    Ot = new RegExp("38|40|27"),
    kt = {
      HIDE: "hide" + wt,
      HIDDEN: "hidden" + wt,
      SHOW: "show" + wt,
      SHOWN: "shown" + wt,
      CLICK: "click" + wt,
      CLICK_DATA_API: "click" + wt + At,
      KEYDOWN_DATA_API: "keydown" + wt + At,
      KEYUP_DATA_API: "keyup" + wt + At
    },
    Pt = "disabled",
    Lt = "show",
    jt = "dropup",
    Ht = "dropright",
    Rt = "dropleft",
    xt = "dropdown-menu-right",
    Ft = "position-static",
    Ut = '[data-toggle="dropdown"]',
    Wt = ".dropdown form",
    qt = ".dropdown-menu",
    Mt = ".navbar-nav",
    Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Qt = "top-start",
    Bt = "top-end",
    Vt = "bottom-start",
    Yt = "bottom-end",
    zt = "right-start",
    Xt = "left-start",
    $t = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic"
    },
    Gt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string"
    },
    Jt = function () {
      function c(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
      }
      var t = c.prototype;
      return t.toggle = function () {
        if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
          var t = c._getParentFromElement(this._element),
            e = g(this._menu).hasClass(Lt);
          if (c._clearMenus(), !e) {
            var n = {
                relatedTarget: this._element
              },
              i = g.Event(kt.SHOW, n);
            if (g(t).trigger(i), !i.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                var o = this._element;
                "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig())
              }
              "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
            }
          }
        }
      }, t.show = function () {
        if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
          var t = {
              relatedTarget: this._element
            },
            e = g.Event(kt.SHOW, t),
            n = c._getParentFromElement(this._element);
          g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
        }
      }, t.hide = function () {
        if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
          var t = {
              relatedTarget: this._element
            },
            e = g.Event(kt.HIDE, t),
            n = c._getParentFromElement(this._element);
          g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
        }
      }, t.dispose = function () {
        g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
      }, t.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
      }, t._addEventListeners = function () {
        var e = this;
        g(this._element).on(kt.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle()
        })
      }, t._getConfig = function (t) {
        return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t
      }, t._getMenuElement = function () {
        if (!this._menu) {
          var t = c._getParentFromElement(this._element);
          t && (this._menu = t.querySelector(qt))
        }
        return this._menu
      }, t._getPlacement = function () {
        var t = g(this._element.parentNode),
          e = Vt;
        return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e
      }, t._detectNavbar = function () {
        return 0 < g(this._element).closest(".navbar").length
      }, t._getOffset = function () {
        var e = this,
          t = {};
        return "function" == typeof this._config.offset ? t.fn = function (t) {
          return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
        } : t.offset = this._config.offset, t
      }, t._getPopperConfig = function () {
        var t = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
        return "static" === this._config.display && (t.modifiers.applyStyle = {
          enabled: !1
        }), t
      }, c._jQueryInterface = function (e) {
        return this.each(function () {
          var t = g(this).data(Dt);
          if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
            t[e]()
          }
        })
      }, c._clearMenus = function (t) {
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
          for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
            var o = c._getParentFromElement(e[n]),
              r = g(e[n]).data(Dt),
              s = {
                relatedTarget: e[n]
              };
            if (t && "click" === t.type && (s.clickEvent = t), r) {
              var a = r._menu;
              if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                var l = g.Event(kt.HIDE, s);
                g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
              }
            }
          }
      }, c._getParentFromElement = function (t) {
        var e, n = _.getSelectorFromElement(t);
        return n && (e = document.querySelector(n)), e || t.parentNode
      }, c._dataApiKeydownHandler = function (t) {
        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
          var e = c._getParentFromElement(this),
            n = g(e).hasClass(Lt);
          if (n && (!n || 27 !== t.which && 32 !== t.which)) {
            var i = [].slice.call(e.querySelectorAll(Kt));
            if (0 !== i.length) {
              var o = i.indexOf(t.target);
              38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
            }
          } else {
            if (27 === t.which) {
              var r = e.querySelector(Ut);
              g(r).trigger("focus")
            }
            g(this).trigger("click")
          }
        }
      }, s(c, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }, {
        key: "Default",
        get: function () {
          return $t
        }
      }, {
        key: "DefaultType",
        get: function () {
          return Gt
        }
      }]), c
    }();
  g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) {
    t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle")
  }).on(kt.CLICK_DATA_API, Wt, function (t) {
    t.stopPropagation()
  }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () {
    return g.fn[It] = Nt, Jt._jQueryInterface
  };
  var Zt = "modal",
    te = "bs.modal",
    ee = "." + te,
    ne = g.fn[Zt],
    ie = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
    oe = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    },
    re = {
      HIDE: "hide" + ee,
      HIDDEN: "hidden" + ee,
      SHOW: "show" + ee,
      SHOWN: "shown" + ee,
      FOCUSIN: "focusin" + ee,
      RESIZE: "resize" + ee,
      CLICK_DISMISS: "click.dismiss" + ee,
      KEYDOWN_DISMISS: "keydown.dismiss" + ee,
      MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
      CLICK_DATA_API: "click" + ee + ".data-api"
    },
    se = "modal-dialog-scrollable",
    ae = "modal-scrollbar-measure",
    le = "modal-backdrop",
    ce = "modal-open",
    he = "fade",
    ue = "show",
    fe = ".modal-dialog",
    de = ".modal-body",
    ge = '[data-toggle="modal"]',
    _e = '[data-dismiss="modal"]',
    me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    pe = ".sticky-top",
    ve = function () {
      function o(t, e) {
        this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
      }
      var t = o.prototype;
      return t.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t)
      }, t.show = function (t) {
        var e = this;
        if (!this._isShown && !this._isTransitioning) {
          g(this._element).hasClass(he) && (this._isTransitioning = !0);
          var n = g.Event(re.SHOW, {
            relatedTarget: t
          });
          g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
            return e.hide(t)
          }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
            g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
              g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
            })
          }), this._showBackdrop(function () {
            return e._showElement(t)
          }))
        }
      }, t.hide = function (t) {
        var e = this;
        if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
          var n = g.Event(re.HIDE);
          if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
            this._isShown = !1;
            var i = g(this._element).hasClass(he);
            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
              var o = _.getTransitionDurationFromElement(this._element);
              g(this._element).one(_.TRANSITION_END, function (t) {
                return e._hideModal(t)
              }).emulateTransitionEnd(o)
            } else this._hideModal()
          }
        }
      }, t.dispose = function () {
        [window, this._element, this._dialog].forEach(function (t) {
          return g(t).off(ee)
        }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
      }, t.handleUpdate = function () {
        this._adjustDialog()
      }, t._getConfig = function (t) {
        return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t
      }, t._showElement = function (t) {
        var e = this,
          n = g(this._element).hasClass(he);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();
        var i = g.Event(re.SHOWN, {
            relatedTarget: t
          }),
          o = function () {
            e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i)
          };
        if (n) {
          var r = _.getTransitionDurationFromElement(this._dialog);
          g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
        } else o()
      }, t._enforceFocus = function () {
        var e = this;
        g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
          document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
        })
      }, t._setEscapeEvent = function () {
        var e = this;
        this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
          27 === t.which && (t.preventDefault(), e.hide())
        }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
      }, t._setResizeEvent = function () {
        var e = this;
        this._isShown ? g(window).on(re.RESIZE, function (t) {
          return e.handleUpdate(t)
        }) : g(window).off(re.RESIZE)
      }, t._hideModal = function () {
        var t = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
          g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN)
        })
      }, t._removeBackdrop = function () {
        this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
      }, t._showBackdrop = function (t) {
        var e = this,
          n = g(this._element).hasClass(he) ? he : "";
        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) {
              e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
            }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;
          if (!n) return void t();
          var i = _.getTransitionDurationFromElement(this._backdrop);
          g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
        } else if (!this._isShown && this._backdrop) {
          g(this._backdrop).removeClass(ue);
          var o = function () {
            e._removeBackdrop(), t && t()
          };
          if (g(this._element).hasClass(he)) {
            var r = _.getTransitionDurationFromElement(this._backdrop);
            g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
          } else o()
        } else t && t()
      }, t._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }, t._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }, t._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
      }, t._setScrollbar = function () {
        var o = this;
        if (this._isBodyOverflowing) {
          var t = [].slice.call(document.querySelectorAll(me)),
            e = [].slice.call(document.querySelectorAll(pe));
          g(t).each(function (t, e) {
            var n = e.style.paddingRight,
              i = g(e).css("padding-right");
            g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
          }), g(e).each(function (t, e) {
            var n = e.style.marginRight,
              i = g(e).css("margin-right");
            g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
          });
          var n = document.body.style.paddingRight,
            i = g(document.body).css("padding-right");
          g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
        }
        g(document.body).addClass(ce)
      }, t._resetScrollbar = function () {
        var t = [].slice.call(document.querySelectorAll(me));
        g(t).each(function (t, e) {
          var n = g(e).data("padding-right");
          g(e).removeData("padding-right"), e.style.paddingRight = n || ""
        });
        var e = [].slice.call(document.querySelectorAll("" + pe));
        g(e).each(function (t, e) {
          var n = g(e).data("margin-right");
          "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
        });
        var n = g(document.body).data("padding-right");
        g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
      }, t._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = ae, document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e
      }, o._jQueryInterface = function (n, i) {
        return this.each(function () {
          var t = g(this).data(te),
            e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
          if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n](i)
          } else e.show && t.show(i)
        })
      }, s(o, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }, {
        key: "Default",
        get: function () {
          return ie
        }
      }]), o
    }();
  g(document).on(re.CLICK_DATA_API, ge, function (t) {
    var e, n = this,
      i = _.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var r = g(e).one(re.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
        g(n).is(":visible") && n.focus()
      })
    });
    ve._jQueryInterface.call(g(e), o, this)
  }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () {
    return g.fn[Zt] = ne, ve._jQueryInterface
  };
  var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
    Ee = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function Se(t, s, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);
    for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function (t, e) {
        var n = l[t],
          i = n.nodeName.toLowerCase();
        if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
        var o = [].slice.call(n.attributes),
          r = [].concat(s["*"] || [], s[i] || []);
        o.forEach(function (t) {
          (function (t, e) {
            var n = t.nodeName.toLowerCase();
            if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
            for (var i = e.filter(function (t) {
                return t instanceof RegExp
              }), o = 0, r = i.length; o < r; o++)
              if (n.match(i[o])) return !0;
            return !1
          })(t, r) || n.removeAttribute(t.nodeName)
        })
      }, o = 0, r = l.length; o < r; o++) i(o);
    return n.body.innerHTML
  }
  var be = "tooltip",
    Ie = "bs.tooltip",
    De = "." + Ie,
    we = g.fn[be],
    Ae = "bs-tooltip",
    Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
    Oe = ["sanitize", "whiteList", "sanitizeFn"],
    ke = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object"
    },
    Pe = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    },
    Le = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Ee
    },
    je = "show",
    He = "out",
    Re = {
      HIDE: "hide" + De,
      HIDDEN: "hidden" + De,
      SHOW: "show" + De,
      SHOWN: "shown" + De,
      INSERTED: "inserted" + De,
      CLICK: "click" + De,
      FOCUSIN: "focusin" + De,
      FOCUSOUT: "focusout" + De,
      MOUSEENTER: "mouseenter" + De,
      MOUSELEAVE: "mouseleave" + De
    },
    xe = "fade",
    Fe = "show",
    Ue = ".tooltip-inner",
    We = ".arrow",
    qe = "hover",
    Me = "focus",
    Ke = "click",
    Qe = "manual",
    Be = function () {
      function i(t, e) {
        if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
      }
      var t = i.prototype;
      return t.enable = function () {
        this._isEnabled = !0
      }, t.disable = function () {
        this._isEnabled = !1
      }, t.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled
      }, t.toggle = function (t) {
        if (this._isEnabled)
          if (t) {
            var e = this.constructor.DATA_KEY,
              n = g(t.currentTarget).data(e);
            n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
          } else {
            if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
            this._enter(null, this)
          }
      }, t.dispose = function () {
        clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
      }, t.show = function () {
        var e = this;
        if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
        var t = g.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          g(this.element).trigger(t);
          var n = _.findShadowRoot(this.element),
            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
          if (t.isDefaultPrevented() || !i) return;
          var o = this.getTipElement(),
            r = _.getUID(this.constructor.NAME);
          o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);
          var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);
          this.addAttachmentClass(a);
          var l = this._getContainer();
          g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
            placement: a,
            modifiers: {
              offset: this._getOffset(),
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: We
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function (t) {
              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
            },
            onUpdate: function (t) {
              return e._handlePopperPlacementChange(t)
            }
          }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
          var c = function () {
            e.config.animation && e._fixTransition();
            var t = e._hoverState;
            e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e)
          };
          if (g(this.tip).hasClass(xe)) {
            var h = _.getTransitionDurationFromElement(this.tip);
            g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
          } else c()
        }
      }, t.hide = function (t) {
        var e = this,
          n = this.getTipElement(),
          i = g.Event(this.constructor.Event.HIDE),
          o = function () {
            e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
          };
        if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
          if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
            var r = _.getTransitionDurationFromElement(n);
            g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
          } else o();
          this._hoverState = ""
        }
      }, t.update = function () {
        null !== this._popper && this._popper.scheduleUpdate()
      }, t.isWithContent = function () {
        return Boolean(this.getTitle())
      }, t.addAttachmentClass = function (t) {
        g(this.getTipElement()).addClass(Ae + "-" + t)
      }, t.getTipElement = function () {
        return this.tip = this.tip || g(this.config.template)[0], this.tip
      }, t.setContent = function () {
        var t = this.getTipElement();
        this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe)
      }, t.setElementContent = function (t, e) {
        "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
      }, t.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
      }, t._getOffset = function () {
        var e = this,
          t = {};
        return "function" == typeof this.config.offset ? t.fn = function (t) {
          return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
        } : t.offset = this.config.offset, t
      }, t._getContainer = function () {
        return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
      }, t._getAttachment = function (t) {
        return Pe[t.toUpperCase()]
      }, t._setListeners = function () {
        var i = this;
        this.config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
            return i.toggle(t)
          });
          else if (t !== Qe) {
            var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
            g(i.element).on(e, i.config.selector, function (t) {
              return i._enter(t)
            }).on(n, i.config.selector, function (t) {
              return i._leave(t)
            })
          }
        }), g(this.element).closest(".modal").on("hide.bs.modal", function () {
          i.element && i.hide()
        }), this.config.selector ? this.config = l({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle()
      }, t._fixTitle = function () {
        var t = typeof this.element.getAttribute("data-original-title");
        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
      }, t._enter = function (t, e) {
        var n = this.constructor.DATA_KEY;
        (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
          e._hoverState === je && e.show()
        }, e.config.delay.show) : e.show())
      }, t._leave = function (t, e) {
        var n = this.constructor.DATA_KEY;
        (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
          e._hoverState === He && e.hide()
        }, e.config.delay.hide) : e.hide())
      }, t._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1
      }, t._getConfig = function (t) {
        var e = g(this.element).data();
        return Object.keys(e).forEach(function (t) {
          -1 !== Oe.indexOf(t) && delete e[t]
        }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t
      }, t._getDelegateConfig = function () {
        var t = {};
        if (this.config)
          for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        return t
      }, t._cleanTipClass = function () {
        var t = g(this.getTipElement()),
          e = t.attr("class").match(Ne);
        null !== e && e.length && t.removeClass(e.join(""))
      }, t._handlePopperPlacementChange = function (t) {
        var e = t.instance;
        this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
      }, t._fixTransition = function () {
        var t = this.getTipElement(),
          e = this.config.animation;
        null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = g(this).data(Ie),
            e = "object" == typeof n && n;
          if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]()
          }
        })
      }, s(i, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }, {
        key: "Default",
        get: function () {
          return Le
        }
      }, {
        key: "NAME",
        get: function () {
          return be
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return Ie
        }
      }, {
        key: "Event",
        get: function () {
          return Re
        }
      }, {
        key: "EVENT_KEY",
        get: function () {
          return De
        }
      }, {
        key: "DefaultType",
        get: function () {
          return ke
        }
      }]), i
    }();
  g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () {
    return g.fn[be] = we, Be._jQueryInterface
  };
  var Ve = "popover",
    Ye = "bs.popover",
    ze = "." + Ye,
    Xe = g.fn[Ve],
    $e = "bs-popover",
    Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
    Je = l({}, Be.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    Ze = l({}, Be.DefaultType, {
      content: "(string|element|function)"
    }),
    tn = "fade",
    en = "show",
    nn = ".popover-header",
    on = ".popover-body",
    rn = {
      HIDE: "hide" + ze,
      HIDDEN: "hidden" + ze,
      SHOW: "show" + ze,
      SHOWN: "shown" + ze,
      INSERTED: "inserted" + ze,
      CLICK: "click" + ze,
      FOCUSIN: "focusin" + ze,
      FOCUSOUT: "focusout" + ze,
      MOUSEENTER: "mouseenter" + ze,
      MOUSELEAVE: "mouseleave" + ze
    },
    sn = function (t) {
      var e, n;

      function i() {
        return t.apply(this, arguments) || this
      }
      n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
      var o = i.prototype;
      return o.isWithContent = function () {
        return this.getTitle() || this._getContent()
      }, o.addAttachmentClass = function (t) {
        g(this.getTipElement()).addClass($e + "-" + t)
      }, o.getTipElement = function () {
        return this.tip = this.tip || g(this.config.template)[0], this.tip
      }, o.setContent = function () {
        var t = g(this.getTipElement());
        this.setElementContent(t.find(nn), this.getTitle());
        var e = this._getContent();
        "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en)
      }, o._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content
      }, o._cleanTipClass = function () {
        var t = g(this.getTipElement()),
          e = t.attr("class").match(Ge);
        null !== e && 0 < e.length && t.removeClass(e.join(""))
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = g(this).data(Ye),
            e = "object" == typeof n ? n : null;
          if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]()
          }
        })
      }, s(i, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }, {
        key: "Default",
        get: function () {
          return Je
        }
      }, {
        key: "NAME",
        get: function () {
          return Ve
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return Ye
        }
      }, {
        key: "Event",
        get: function () {
          return rn
        }
      }, {
        key: "EVENT_KEY",
        get: function () {
          return ze
        }
      }, {
        key: "DefaultType",
        get: function () {
          return Ze
        }
      }]), i
    }(Be);
  g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () {
    return g.fn[Ve] = Xe, sn._jQueryInterface
  };
  var an = "scrollspy",
    ln = "bs.scrollspy",
    cn = "." + ln,
    hn = g.fn[an],
    un = {
      offset: 10,
      method: "auto",
      target: ""
    },
    fn = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
    dn = {
      ACTIVATE: "activate" + cn,
      SCROLL: "scroll" + cn,
      LOAD_DATA_API: "load" + cn + ".data-api"
    },
    gn = "dropdown-item",
    _n = "active",
    mn = '[data-spy="scroll"]',
    pn = ".nav, .list-group",
    vn = ".nav-link",
    yn = ".nav-item",
    En = ".list-group-item",
    Cn = ".dropdown",
    Tn = ".dropdown-item",
    Sn = ".dropdown-toggle",
    bn = "offset",
    In = "position",
    Dn = function () {
      function n(t, e) {
        var n = this;
        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) {
          return n._process(t)
        }), this.refresh(), this._process()
      }
      var t = n.prototype;
      return t.refresh = function () {
        var e = this,
          t = this._scrollElement === this._scrollElement.window ? bn : In,
          o = "auto" === this._config.method ? t : this._config.method,
          r = o === In ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
          var e, n = _.getSelectorFromElement(t);
          if (n && (e = document.querySelector(n)), e) {
            var i = e.getBoundingClientRect();
            if (i.width || i.height) return [g(e)[o]().top + r, n]
          }
          return null
        }).filter(function (t) {
          return t
        }).sort(function (t, e) {
          return t[0] - e[0]
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1])
        })
      }, t.dispose = function () {
        g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
      }, t._getConfig = function (t) {
        if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) {
          var e = g(t.target).attr("id");
          e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e
        }
        return _.typeCheckConfig(an, t, fn), t
      }, t._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }, t._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }, t._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }, t._process = function () {
        var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), n <= t) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i)
        } else {
          if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
          for (var o = this._offsets.length; o--;) {
            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
          }
        }
      }, t._activate = function (e) {
        this._activeTarget = e, this._clear();
        var t = this._selector.split(",").map(function (t) {
            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
          }),
          n = g([].slice.call(document.querySelectorAll(t.join(","))));
        n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, {
          relatedTarget: e
        })
      }, t._clear = function () {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
          return t.classList.contains(_n)
        }).forEach(function (t) {
          return t.classList.remove(_n)
        })
      }, n._jQueryInterface = function (e) {
        return this.each(function () {
          var t = g(this).data(ln);
          if (t || (t = new n(this, "object" == typeof e && e), g(this).data(ln, t)), "string" == typeof e) {
            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
            t[e]()
          }
        })
      }, s(n, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }, {
        key: "Default",
        get: function () {
          return un
        }
      }]), n
    }();
  g(window).on(dn.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
      var n = g(t[e]);
      Dn._jQueryInterface.call(n, n.data())
    }
  }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () {
    return g.fn[an] = hn, Dn._jQueryInterface
  };
  var wn = "bs.tab",
    An = "." + wn,
    Nn = g.fn.tab,
    On = {
      HIDE: "hide" + An,
      HIDDEN: "hidden" + An,
      SHOW: "show" + An,
      SHOWN: "shown" + An,
      CLICK_DATA_API: "click" + An + ".data-api"
    },
    kn = "dropdown-menu",
    Pn = "active",
    Ln = "disabled",
    jn = "fade",
    Hn = "show",
    Rn = ".dropdown",
    xn = ".nav, .list-group",
    Fn = ".active",
    Un = "> li > .active",
    Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    qn = ".dropdown-toggle",
    Mn = "> .dropdown-menu .active",
    Kn = function () {
      function i(t) {
        this._element = t
      }
      var t = i.prototype;
      return t.show = function () {
        var n = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
          var t, i, e = g(this._element).closest(xn)[0],
            o = _.getSelectorFromElement(this._element);
          if (e) {
            var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
            i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
          }
          var s = g.Event(On.HIDE, {
              relatedTarget: this._element
            }),
            a = g.Event(On.SHOW, {
              relatedTarget: i
            });
          if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
            o && (t = document.querySelector(o)), this._activate(this._element, e);
            var l = function () {
              var t = g.Event(On.HIDDEN, {
                  relatedTarget: n._element
                }),
                e = g.Event(On.SHOWN, {
                  relatedTarget: i
                });
              g(i).trigger(t), g(n._element).trigger(e)
            };
            t ? this._activate(t, t.parentNode, l) : l()
          }
        }
      }, t.dispose = function () {
        g.removeData(this._element, wn), this._element = null
      }, t._activate = function (t, e, n) {
        var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
          r = n && o && g(o).hasClass(jn),
          s = function () {
            return i._transitionComplete(t, o, n)
          };
        if (o && r) {
          var a = _.getTransitionDurationFromElement(o);
          g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
        } else s()
      }, t._transitionComplete = function (t, e, n) {
        if (e) {
          g(e).removeClass(Pn);
          var i = g(e.parentNode).find(Mn)[0];
          i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
        }
        if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
          var o = g(t).closest(Rn)[0];
          if (o) {
            var r = [].slice.call(o.querySelectorAll(qn));
            g(r).addClass(Pn)
          }
          t.setAttribute("aria-expanded", !0)
        }
        n && n()
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = g(this),
            e = t.data(wn);
          if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) {
            if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]()
          }
        })
      }, s(i, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }]), i
    }();
  g(document).on(On.CLICK_DATA_API, Wn, function (t) {
    t.preventDefault(), Kn._jQueryInterface.call(g(this), "show")
  }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () {
    return g.fn.tab = Nn, Kn._jQueryInterface
  };
  var Qn = "toast",
    Bn = "bs.toast",
    Vn = "." + Bn,
    Yn = g.fn[Qn],
    zn = {
      CLICK_DISMISS: "click.dismiss" + Vn,
      HIDE: "hide" + Vn,
      HIDDEN: "hidden" + Vn,
      SHOW: "show" + Vn,
      SHOWN: "shown" + Vn
    },
    Xn = "fade",
    $n = "hide",
    Gn = "show",
    Jn = "showing",
    Zn = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    ti = {
      animation: !0,
      autohide: !0,
      delay: 500
    },
    ei = '[data-dismiss="toast"]',
    ni = function () {
      function i(t, e) {
        this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
      }
      var t = i.prototype;
      return t.show = function () {
        var t = this;
        g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);
        var e = function () {
          t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide()
        };
        if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
          var n = _.getTransitionDurationFromElement(this._element);
          g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
        } else e()
      }, t.hide = function (t) {
        var e = this;
        this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
          e._close()
        }, this._config.delay))
      }, t.dispose = function () {
        clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null
      }, t._getConfig = function (t) {
        return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t
      }, t._setListeners = function () {
        var t = this;
        g(this._element).on(zn.CLICK_DISMISS, ei, function () {
          return t.hide(!0)
        })
      }, t._close = function () {
        var t = this,
          e = function () {
            t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN)
          };
        if (this._element.classList.remove(Gn), this._config.animation) {
          var n = _.getTransitionDurationFromElement(this._element);
          g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
        } else e()
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = g(this),
            e = t.data(Bn);
          if (e || (e = new i(this, "object" == typeof n && n), t.data(Bn, e)), "string" == typeof n) {
            if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
            e[n](this)
          }
        })
      }, s(i, null, [{
        key: "VERSION",
        get: function () {
          return "4.3.1"
        }
      }, {
        key: "DefaultType",
        get: function () {
          return Zn
        }
      }, {
        key: "Default",
        get: function () {
          return ti
        }
      }]), i
    }();
  g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () {
      return g.fn[Qn] = Yn, ni._jQueryInterface
    },
    function () {
      if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var t = g.fn.jquery.split(" ")[0].split(".");
      if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", {
      value: !0
    })
});

/*jquery easing*/
! function (n) {
  "function" == typeof define && define.amd ? define(["jquery"], function (e) {
    return n(e)
  }) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery)
}(function (n) {
  function e(n) {
    var e = 7.5625,
      t = 2.75;
    return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + .75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + .9375 : e * (n -= 2.625 / t) * n + .984375
  }
  n.easing.jswing = n.easing.swing;
  var t = Math.pow,
    u = Math.sqrt,
    r = Math.sin,
    i = Math.cos,
    a = Math.PI,
    c = 1.70158,
    o = 1.525 * c,
    s = 2 * a / 3,
    f = 2 * a / 4.5;
  n.extend(n.easing, {
    def: "easeOutQuad",
    swing: function (e) {
      return n.easing[n.easing.def](e)
    },
    easeInQuad: function (n) {
      return n * n
    },
    easeOutQuad: function (n) {
      return 1 - (1 - n) * (1 - n)
    },
    easeInOutQuad: function (n) {
      return n < .5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2
    },
    easeInCubic: function (n) {
      return n * n * n
    },
    easeOutCubic: function (n) {
      return 1 - t(1 - n, 3)
    },
    easeInOutCubic: function (n) {
      return n < .5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2
    },
    easeInQuart: function (n) {
      return n * n * n * n
    },
    easeOutQuart: function (n) {
      return 1 - t(1 - n, 4)
    },
    easeInOutQuart: function (n) {
      return n < .5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2
    },
    easeInQuint: function (n) {
      return n * n * n * n * n
    },
    easeOutQuint: function (n) {
      return 1 - t(1 - n, 5)
    },
    easeInOutQuint: function (n) {
      return n < .5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2
    },
    easeInSine: function (n) {
      return 1 - i(n * a / 2)
    },
    easeOutSine: function (n) {
      return r(n * a / 2)
    },
    easeInOutSine: function (n) {
      return -(i(a * n) - 1) / 2
    },
    easeInExpo: function (n) {
      return 0 === n ? 0 : t(2, 10 * n - 10)
    },
    easeOutExpo: function (n) {
      return 1 === n ? 1 : 1 - t(2, -10 * n)
    },
    easeInOutExpo: function (n) {
      return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? t(2, 20 * n - 10) / 2 : (2 - t(2, -20 * n + 10)) / 2
    },
    easeInCirc: function (n) {
      return 1 - u(1 - t(n, 2))
    },
    easeOutCirc: function (n) {
      return u(1 - t(n - 1, 2))
    },
    easeInOutCirc: function (n) {
      return n < .5 ? (1 - u(1 - t(2 * n, 2))) / 2 : (u(1 - t(-2 * n + 2, 2)) + 1) / 2
    },
    easeInElastic: function (n) {
      return 0 === n ? 0 : 1 === n ? 1 : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s)
    },
    easeOutElastic: function (n) {
      return 0 === n ? 0 : 1 === n ? 1 : t(2, -10 * n) * r((10 * n - .75) * s) + 1
    },
    easeInOutElastic: function (n) {
      return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -(t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2 : t(2, -20 * n + 10) * r((20 * n - 11.125) * f) / 2 + 1
    },
    easeInBack: function (n) {
      return (c + 1) * n * n * n - c * n * n
    },
    easeOutBack: function (n) {
      return 1 + (c + 1) * t(n - 1, 3) + c * t(n - 1, 2)
    },
    easeInOutBack: function (n) {
      return n < .5 ? t(2 * n, 2) * (7.189819 * n - o) / 2 : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2
    },
    easeInBounce: function (n) {
      return 1 - e(1 - n)
    },
    easeOutBounce: e,
    easeInOutBounce: function (n) {
      return n < .5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2
    }
  })
});
/*
 * @license jQuery Breakpoints | MIT | Jerry Low | https://www.github.com/jerrylow/breakpoints
 */
! function (e) {
  var t = function (t, n) {
    var r = this;
    r.n = "breakpoints", r.settings = {}, r.currentBp = null, r.getBreakpoint = function () {
      var e, t = a(),
        n = r.settings.breakpoints;
      return n.forEach(function (n) {
        t >= n.width && (e = n.name)
      }), e || (e = n[n.length - 1].name), e
    }, r.getBreakpointWidth = function (e) {
      var t;
      return r.settings.breakpoints.forEach(function (n) {
        e == n.name && (t = n.width)
      }), t
    }, r.compareCheck = function (e, t, n) {
      var i = a(),
        o = r.settings.breakpoints,
        s = r.getBreakpointWidth(t),
        u = !1;
      switch (e) {
        case "lessThan":
          u = i < s;
          break;
        case "lessEqualTo":
          u = i <= s;
          break;
        case "greaterThan":
        case "greaterEqualTo":
          u = i > s;
          break;
        case "inside":
          var g = o.findIndex(function (e) {
            return e.name === t
          });
          if (g === o.length - 1) u = i > s;
          else {
            var d = r.getBreakpointWidth(o[g + 1].name);
            u = i >= s && i < d
          }
      }
      u && n()
    }, r.destroy = function () {
      e(window).unbind(r.n)
    };
    var i = function () {
        var t = a(),
          n = r.settings.breakpoints,
          i = r.currentBp;
        n.forEach(function (n) {
          i === n.name ? n.inside || (e(window).trigger("inside-" + n.name), n.inside = !0) : n.inside = !1, t < n.width && (n.less || (e(window).trigger("lessThan-" + n.name), n.less = !0, n.greater = !1, n.greaterEqual = !1)), t >= n.width && (n.greaterEqual || (e(window).trigger("greaterEqualTo-" + n.name), n.greaterEqual = !0, n.less = !1), t > n.width && (n.greater || (e(window).trigger("greaterThan-" + n.name), n.greater = !0, n.less = !1)))
        })
      },
      a = function () {
        var t = e(window);
        return r.outerWidth ? t.outerWidth() : t.width()
      },
      o = e.extend({}, e.fn.breakpoints.defaults, n);
    r.settings = {
      breakpoints: o.breakpoints,
      buffer: o.buffer,
      triggerOnInit: o.triggerOnInit,
      outerWidth: o.outerWidth
    }, t.data(r.n, this), r.currentBp = r.getBreakpoint();
    var s = null;
    e.isFunction(e(window).on) && e(window).on("resize." + r.n, function (t) {
      s && clearTimeout(s), s = setTimeout(function (t) {
        var n;
        (n = r.getBreakpoint()) !== r.currentBp && (e(window).trigger({
          type: "breakpoint-change",
          from: r.currentBp,
          to: n
        }), r.currentBp = n), i()
      }, r.settings.buffer)
    }), r.settings.triggerOnInit && setTimeout(function () {
      e(window).trigger({
        type: "breakpoint-change",
        from: r.currentBp,
        to: r.currentBp,
        initialInit: !0
      })
    }, r.settings.buffer), setTimeout(function () {
      i()
    }, 0)
  };
  e.fn.breakpoints = function (e, n, r) {
    if (this.data("breakpoints")) {
      var i = this.data("breakpoints");
      return "getBreakpoint" === e ? i.getBreakpoint() : "getBreakpointWidth" === e ? i.getBreakpointWidth(n) : ["lessThan", "lessEqualTo", "greaterThan", "greaterEqualTo", "inside"].indexOf(e) >= 0 ? i.compareCheck(e, n, r) : void("destroy" === e && i.destroy())
    }
    new t(this, e)
  }, e.fn.breakpoints.defaults = {
    breakpoints: [{
      name: "xs",
      width: 0
    }, {
      name: "sm",
      width: 768
    }, {
      name: "md",
      width: 992
    }, {
      name: "lg",
      width: 1200
    }],
    buffer: 300,
    triggerOnInit: !1,
    outerWidth: !1
  }
}(jQuery);


// Isotope PACKAGED v3.0.6 https://isotope.metafizzy.co
! function (t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
  "use strict";

  function i(i, s, a) {
    function u(t, e, o) {
      var n, s = "$()." + i + '("' + e + '")';
      return t.each(function (t, u) {
        var h = a.data(u, i);
        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
        var l = d.apply(h, o);
        n = void 0 === n ? l : n
      }), void 0 !== n ? n : t
    }

    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
      })
    }
    a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[i] = function (t) {
      if ("string" == typeof t) {
        var e = n.call(arguments, 1);
        return u(this, t, e)
      }
      return h(this, t), this
    }, o(a))
  }

  function o(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var n = Array.prototype.slice,
    s = t.console,
    r = "undefined" == typeof s ? function () {} : function (t) {
      s.error(t)
    };
  return o(e || t.jQuery), i
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
  function t() {}
  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        o = i[t] = i[t] || [];
      return o.indexOf(e) == -1 && o.push(e), this
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
        o = i[t] = i[t] || {};
      return o[e] = !0, this
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var o = i.indexOf(e);
      return o != -1 && i.splice(o, 1), this
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      i = i.slice(0), e = e || [];
      for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
        var s = i[n],
          r = o && o[s];
        r && (this.off(t, s), delete o[s]), s.apply(this, e)
      }
      return this
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents
  }, t
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
      i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e
  }

  function e() {}

  function i() {
    for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0; e < h; e++) {
      var i = u[e];
      t[i] = 0
    }
    return t
  }

  function o(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
  }

  function n() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var n = o(e);
      r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
    }
  }

  function s(e) {
    if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
      var s = o(e);
      if ("none" == s.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
        var f = u[l],
          c = s[f],
          m = parseFloat(c);
        a[f] = isNaN(m) ? 0 : m
      }
      var p = a.paddingLeft + a.paddingRight,
        y = a.paddingTop + a.paddingBottom,
        g = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        z = a.borderTopWidth + a.borderBottomWidth,
        I = d && r,
        x = t(s.width);
      x !== !1 && (a.width = x + (I ? 0 : p + _));
      var S = t(s.height);
      return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
    }
  }
  var r, a = "undefined" == typeof console ? e : function (t) {
      console.error(t)
    },
    u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    h = u.length,
    d = !1;
  return s
}),
function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
  "use strict";
  var t = function () {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var o = e[i],
        n = o + "MatchesSelector";
      if (t[n]) return n
    }
  }();
  return function (e, i) {
    return e[t](i)
  }
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
  var i = {};
  i.extend = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }, i.modulo = function (t, e) {
    return (t % e + e) % e
  };
  var o = Array.prototype.slice;
  i.makeArray = function (t) {
    if (Array.isArray(t)) return t;
    if (null === t || void 0 === t) return [];
    var e = "object" == typeof t && "number" == typeof t.length;
    return e ? o.call(t) : [t]
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e);
    i != -1 && t.splice(i, 1)
  }, i.getParent = function (t, i) {
    for (; t.parentNode && t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function (t, o) {
    t = i.makeArray(t);
    var n = [];
    return t.forEach(function (t) {
      if (t instanceof HTMLElement) {
        if (!o) return void n.push(t);
        e(t, o) && n.push(t);
        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
      }
    }), n
  }, i.debounceMethod = function (t, e, i) {
    i = i || 100;
    var o = t.prototype[e],
      n = e + "Timeout";
    t.prototype[e] = function () {
      var t = this[n];
      clearTimeout(t);
      var e = arguments,
        s = this;
      this[n] = setTimeout(function () {
        o.apply(s, e), delete s[n]
      }, i)
    }
  }, i.docReady = function (t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var n = t.console;
  return i.htmlInit = function (e, o) {
    i.docReady(function () {
      var s = i.toDashed(o),
        r = "data-" + s,
        a = document.querySelectorAll("[" + r + "]"),
        u = document.querySelectorAll(".js-" + s),
        h = i.makeArray(a).concat(i.makeArray(u)),
        d = r + "-options",
        l = t.jQuery;
      h.forEach(function (t) {
        var i, s = t.getAttribute(r) || t.getAttribute(d);
        try {
          i = s && JSON.parse(s)
        } catch (a) {
          return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
        }
        var u = new e(t, i);
        l && l.data(t, o, u)
      })
    })
  }, i
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
  "use strict";

  function i(t) {
    for (var e in t) return !1;
    return e = null, !0
  }

  function o(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  function n(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase()
    })
  }
  var s = document.documentElement.style,
    r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
    a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
    u = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    } [r],
    h = {
      transform: a,
      transition: r,
      transitionDuration: r + "Duration",
      transitionProperty: r + "Property",
      transitionDelay: r + "Delay"
    },
    d = o.prototype = Object.create(t.prototype);
  d.constructor = o, d._create = function () {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    })
  }, d.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, d.getSize = function () {
    this.size = e(this.element)
  }, d.css = function (t) {
    var e = this.element.style;
    for (var i in t) {
      var o = h[i] || i;
      e[o] = t[i]
    }
  }, d.getPosition = function () {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      o = t[e ? "left" : "right"],
      n = t[i ? "top" : "bottom"],
      s = parseFloat(o),
      r = parseFloat(n),
      a = this.layout.size;
    o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
  }, d.layoutPosition = function () {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      o = this.layout._getOption("originTop"),
      n = i ? "paddingLeft" : "paddingRight",
      s = i ? "left" : "right",
      r = i ? "right" : "left",
      a = this.position.x + t[n];
    e[s] = this.getXValue(a), e[r] = "";
    var u = o ? "paddingTop" : "paddingBottom",
      h = o ? "top" : "bottom",
      d = o ? "bottom" : "top",
      l = this.position.y + t[u];
    e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, d.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, d.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, d._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x,
      o = this.position.y,
      n = t == this.position.x && e == this.position.y;
    if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
    var s = t - i,
      r = e - o,
      a = {};
    a.transform = this.getTranslate(s, r), this.transition({
      to: a,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    })
  }, d.getTranslate = function (t, e) {
    var i = this.layout._getOption("originLeft"),
      o = this.layout._getOption("originTop");
    return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
  }, d.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
    this.position.x = parseFloat(t), this.position.y = parseFloat(e)
  }, d._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, d.transition = function (t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var o = this.element.offsetHeight;
      o = null
    }
    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var l = "opacity," + n(a);
  d.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(u, this, !1)
    }
  }, d.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t)
  }, d.onotransitionend = function (t) {
    this.ontransitionend(t)
  };
  var f = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
        o = f[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
        var n = e.onEnd[o];
        n.call(this), delete e.onEnd[o]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, d.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
  }, d._removeStyles = function (t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e)
  };
  var c = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function () {
    this.css(c)
  }, d.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
  }, d.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this])
  }, d.remove = function () {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, d.reveal = function () {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal")
  }, d.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i
  }, d.hide = function () {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onHideTransitionEnd = function () {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"))
  }, d.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, o
}),
function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
    return e(t, i, o, n, s)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n) {
  "use strict";

  function s(t, e) {
    var i = o.getQueryElement(t);
    if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
    var n = ++l;
    this.element.outlayerGUID = n, f[n] = this, this._create();
    var s = this._getOption("initLayout");
    s && this.layout()
  }

  function r(t) {
    function e() {
      t.apply(this, arguments)
    }
    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
      i = e && e[1],
      o = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var n = m[o] || 1;
    return i * n
  }
  var u = t.console,
    h = t.jQuery,
    d = function () {},
    l = 0,
    f = {};
  s.namespace = "outlayer", s.Item = n, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var c = s.prototype;
  o.extend(c, e.prototype), c.option = function (t) {
    o.extend(this.options, t)
  }, c._getOption = function (t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, c._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize()
  }, c.reloadItems = function () {
    this.items = this._itemize(this.element.children)
  }, c._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
      var s = e[n],
        r = new i(s, this);
      o.push(r)
    }
    return o
  }, c._filterFindItemElements = function (t) {
    return o.filterFindElements(t, this.options.itemSelector)
  }, c.getItemElements = function () {
    return this.items.map(function (t) {
      return t.element
    })
  }, c.layout = function () {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, c._init = c.layout, c._resetLayout = function () {
    this.getSize()
  }, c.getSize = function () {
    this.size = i(this.element)
  }, c._getMeasurement = function (t, e) {
    var o, n = this.options[t];
    n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
  }, c.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, c._getItemsForLayout = function (t) {
    return t.filter(function (t) {
      return !t.isIgnored
    })
  }, c._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function (t) {
        var o = this._getItemLayoutPosition(t);
        o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
      }, this), this._processLayoutQueue(i)
    }
  }, c._getItemLayoutPosition = function () {
    return {
      x: 0,
      y: 0
    }
  }, c._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach(function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e)
    }, this)
  }, c.updateStagger = function () {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
  }, c._positionItem = function (t, e, i, o, n) {
    o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
  }, c._postLayout = function () {
    this.resizeContainer()
  }, c.resizeContainer = function () {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, c._emitCompleteOnItems = function (t, e) {
    function i() {
      n.dispatchEvent(t + "Complete", null, [e])
    }

    function o() {
      r++, r == s && i()
    }
    var n = this,
      s = e.length;
    if (!e || !s) return void i();
    var r = 0;
    e.forEach(function (e) {
      e.once(t, o)
    })
  }, c.dispatchEvent = function (t, e, i) {
    var o = e ? [e].concat(i) : i;
    if (this.emitEvent(t, o), h)
      if (this.$element = this.$element || h(this.element), e) {
        var n = h.Event(e);
        n.type = t, this.$element.trigger(n, i)
      } else this.$element.trigger(t, i)
  }, c.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, c.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, c.stamp = function (t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, c.unstamp = function (t) {
    t = this._find(t), t && t.forEach(function (t) {
      o.removeFrom(this.stamps, t), this.unignore(t)
    }, this)
  }, c._find = function (t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
  }, c._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, c._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, c._manageStamp = d, c._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
      o = this._boundingRect,
      n = i(t),
      s = {
        left: e.left - o.left - n.marginLeft,
        top: e.top - o.top - n.marginTop,
        right: o.right - e.right - n.marginRight,
        bottom: o.bottom - e.bottom - n.marginBottom
      };
    return s
  }, c.handleEvent = o.handleEvent, c.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0
  }, c.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1
  }, c.onresize = function () {
    this.resize()
  }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, c.needsResizeLayout = function () {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth
  }, c.addItems = function (t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, c.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, c.prepended = function (t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, c.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.reveal()
      })
    }
  }, c.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.hide()
      })
    }
  }, c.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, c.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e)
  }, c.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i
    }
  }, c.getItems = function (t) {
    t = o.makeArray(t);
    var e = [];
    return t.forEach(function (t) {
      var i = this.getItem(t);
      i && e.push(i)
    }, this), e
  }, c.remove = function (t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
      t.remove(), o.removeFrom(this.items, t)
    }, this)
  }, c.destroy = function () {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
      t.destroy()
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
  }, s.data = function (t) {
    t = o.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e]
  }, s.create = function (t, e) {
    var i = r(s);
    return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return s.Item = n, s
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments)
  }
  var i = e.prototype = Object.create(t.Item.prototype),
    o = i._create;
  i._create = function () {
    this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
  }, i.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
        e = this.layout._sorters;
      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this)
      }
    }
  };
  var n = i.destroy;
  return i.destroy = function () {
    n.apply(this, arguments), this.css({
      display: ""
    })
  }, e
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
  "use strict";

  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
  }
  var o = i.prototype,
    n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return n.forEach(function (t) {
    o[t] = function () {
      return e.prototype[t].apply(this.isotope, arguments)
    }
  }), o.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element),
      i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight
  }, o._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments)
  }, o.getColumnWidth = function () {
    this.getSegmentSize("column", "Width")
  }, o.getRowHeight = function () {
    this.getSegmentSize("row", "Height")
  }, o.getSegmentSize = function (t, e) {
    var i = t + e,
      o = "outer" + e;
    if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();
      this[i] = n && n[o] || this.isotope.size["inner" + e]
    }
  }, o.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element)
  }, o.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments)
  }, o.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size
  }, i.modes = {}, i.create = function (t, e) {
    function n() {
      i.apply(this, arguments)
    }
    return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
  }, i
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var o = i.prototype;
  return o._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    this.maxY = 0, this.horizontalColIndex = 0
  }, o.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var o = this.columnWidth += this.gutter,
      n = this.containerWidth + this.gutter,
      s = n / o,
      r = o - n % o,
      a = r && r < 1 ? "round" : "floor";
    s = Math[a](s), this.cols = Math.max(s, 1)
  }, o.getContainerWidth = function () {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      o = e(i);
    this.containerWidth = o && o.innerWidth
  }, o._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && e < 1 ? "round" : "ceil",
      o = Math[i](t.size.outerWidth / this.columnWidth);
    o = Math.min(o, this.cols);
    for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
        x: this.columnWidth * s.col,
        y: s.y
      }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
    return r
  }, o._getTopColPosition = function (t) {
    var e = this._getTopColGroup(t),
      i = Math.min.apply(Math, e);
    return {
      col: e.indexOf(i),
      y: i
    }
  }, o._getTopColGroup = function (t) {
    if (t < 2) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
    return e
  }, o._getColGroupY = function (t, e) {
    if (e < 2) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i)
  }, o._getHorizontalColPosition = function (t, e) {
    var i = this.horizontalColIndex % this.cols,
      o = t > 1 && i + t > this.cols;
    i = o ? 0 : i;
    var n = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    }
  }, o._manageStamp = function (t) {
    var i = e(t),
      o = this._getElementOffset(t),
      n = this._getOption("originLeft"),
      s = n ? o.left : o.right,
      r = s + i.outerWidth,
      a = Math.floor(s / this.columnWidth);
    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
    for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
  }, o._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, o._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, o.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth
  }, i
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
  "use strict";
  var i = t.create("masonry"),
    o = i.prototype,
    n = {
      _getElementOffset: !0,
      layout: !0,
      _getMeasurement: !0
    };
  for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
  var r = o.measureColumns;
  o.measureColumns = function () {
    this.items = this.isotope.filteredItems, r.call(this)
  };
  var a = o._getOption;
  return o._getOption = function (t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
  }, i
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
  "use strict";
  var e = t.create("fitRows"),
    i = e.prototype;
  return i._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
      i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var o = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
  }, i._getContainerSize = function () {
    return {
      height: this.maxY
    }
  }, e
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
  "use strict";
  var e = t.create("vertical", {
      horizontalAlignment: 0
    }),
    i = e.prototype;
  return i._resetLayout = function () {
    this.y = 0
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
      i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    }
  }, i._getContainerSize = function () {
    return {
      height: this.y
    }
  }, e
}),
function (t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
    return e(t, i, o, n, s, r, a)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, s, r) {
  function a(t, e) {
    return function (i, o) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
          r = i.sortData[s],
          a = o.sortData[s];
        if (r > a || r < a) {
          var u = void 0 !== e[s] ? e[s] : e,
            h = u ? 1 : -1;
          return (r > a ? 1 : -1) * h
        }
      }
      return 0
    }
  }
  var u = t.jQuery,
    h = String.prototype.trim ? function (t) {
      return t.trim()
    } : function (t) {
      return t.replace(/^\s+|\s+$/g, "")
    },
    d = e.create("isotope", {
      layoutMode: "masonry",
      isJQueryFiltering: !0,
      sortAscending: !0
    });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function () {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
    for (var t in r.modes) this._initLayoutMode(t)
  }, l.reloadItems = function () {
    this.itemGUID = 0, e.prototype.reloadItems.call(this)
  }, l._itemize = function () {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
      var o = t[i];
      o.id = this.itemGUID++
    }
    return this._updateItemsSortData(t), t
  }, l._initLayoutMode = function (t) {
    var e = r.modes[t],
      i = this.options[t] || {};
    this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
  }, l.layout = function () {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
  }, l._layout = function () {
    var t = this._getIsInstant();
    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
  }, l.arrange = function (t) {
    this.option(t), this._getIsInstant();
    var e = this._filter(this.items);
    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
  }, l._init = l.arrange, l._hideReveal = function (t) {
    this.reveal(t.needReveal), this.hide(t.needHide)
  }, l._getIsInstant = function () {
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    return this._isInstant = e, e
  }, l._bindArrangeComplete = function () {
    function t() {
      e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
    }
    var e, i, o, n = this;
    this.once("layoutComplete", function () {
      e = !0, t()
    }), this.once("hideComplete", function () {
      i = !0, t()
    }), this.once("revealComplete", function () {
      o = !0, t()
    })
  }, l._filter = function (t) {
    var e = this.options.filter;
    e = e || "*";
    for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];
      if (!a.isIgnored) {
        var u = s(a);
        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
      }
    }
    return {
      matches: i,
      needReveal: o,
      needHide: n
    }
  }, l._getFilterTest = function (t) {
    return u && this.options.isJQueryFiltering ? function (e) {
      return u(e.element).is(t);
    } : "function" == typeof t ? function (e) {
      return t(e.element)
    } : function (e) {
      return o(e.element, t)
    }
  }, l.updateSortData = function (t) {
    var e;
    t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
  }, l._getSorters = function () {
    var t = this.options.getSortData;
    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i)
    }
  }, l._updateItemsSortData = function (t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) {
      var o = t[i];
      o.updateSortData()
    }
  };
  var f = function () {
    function t(t) {
      if ("string" != typeof t) return t;
      var i = h(t).split(" "),
        o = i[0],
        n = o.match(/^\[(.+)\]$/),
        s = n && n[1],
        r = e(s, o),
        a = d.sortDataParsers[i[1]];
      return t = a ? function (t) {
        return t && a(r(t))
      } : function (t) {
        return t && r(t)
      }
    }

    function e(t, e) {
      return t ? function (e) {
        return e.getAttribute(t)
      } : function (t) {
        var i = t.querySelector(e);
        return i && i.textContent
      }
    }
    return t
  }();
  d.sortDataParsers = {
    parseInt: function (t) {
      return parseInt(t, 10)
    },
    parseFloat: function (t) {
      return parseFloat(t)
    }
  }, l._sort = function () {
    if (this.options.sortBy) {
      var t = n.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
      var e = a(this.sortHistory, this.options.sortAscending);
      this.filteredItems.sort(e)
    }
  }, l._getIsSameSortBy = function (t) {
    for (var e = 0; e < t.length; e++)
      if (t[e] != this.sortHistory[e]) return !1;
    return !0
  }, l._mode = function () {
    var t = this.options.layoutMode,
      e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e
  }, l._resetLayout = function () {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout()
  }, l._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t)
  }, l._manageStamp = function (t) {
    this._mode()._manageStamp(t)
  }, l._getContainerSize = function () {
    return this._mode()._getContainerSize()
  }, l.needsResizeLayout = function () {
    return this._mode().needsResizeLayout()
  }, l.appended = function (t) {
    var e = this.addItems(t);
    if (e.length) {
      var i = this._filterRevealAdded(e);
      this.filteredItems = this.filteredItems.concat(i)
    }
  }, l.prepended = function (t) {
    var e = this._itemize(t);
    if (e.length) {
      this._resetLayout(), this._manageStamps();
      var i = this._filterRevealAdded(e);
      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
    }
  }, l._filterRevealAdded = function (t) {
    var e = this._filter(t);
    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
  }, l.insert = function (t) {
    var e = this.addItems(t);
    if (e.length) {
      var i, o, n = e.length;
      for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
      var s = this._filter(e).matches;
      for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
      for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
      this.reveal(s)
    }
  };
  var c = l.remove;
  return l.remove = function (t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    c.call(this, t);
    for (var i = e && e.length, o = 0; i && o < i; o++) {
      var s = e[o];
      n.removeFrom(this.filteredItems, s)
    }
  }, l.shuffle = function () {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];
      e.sortData.random = Math.random()
    }
    this.options.sortBy = "random", this._sort(), this._layout()
  }, l._noTransition = function (t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var o = t.apply(this, e);
    return this.options.transitionDuration = i, o
  }, l.getFilteredItemElements = function () {
    return this.filteredItems.map(function (t) {
      return t.element
    })
  }, d
});


/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function (e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return t.on = function (e, t) {
    if (e && t) {
      var i = this._events = this._events || {},
        n = i[e] = i[e] || [];
      return n.indexOf(t) == -1 && n.push(t), this
    }
  }, t.once = function (e, t) {
    if (e && t) {
      this.on(e, t);
      var i = this._onceEvents = this._onceEvents || {},
        n = i[e] = i[e] || {};
      return n[t] = !0, this
    }
  }, t.off = function (e, t) {
    var i = this._events && this._events[e];
    if (i && i.length) {
      var n = i.indexOf(t);
      return n != -1 && i.splice(n, 1), this
    }
  }, t.emitEvent = function (e, t) {
    var i = this._events && this._events[e];
    if (i && i.length) {
      i = i.slice(0), t = t || [];
      for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
        var r = i[o],
          s = n && n[r];
        s && (this.off(e, r), delete n[r]), r.apply(this, t)
      }
      return this
    }
  }, t.allOff = function () {
    delete this._events, delete this._onceEvents
  }, e
}),
function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
    return t(e, i)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
  function i(e, t) {
    for (var i in t) e[i] = t[i];
    return e
  }

  function n(e) {
    if (Array.isArray(e)) return e;
    var t = "object" == typeof e && "number" == typeof e.length;
    return t ? d.call(e) : [e]
  }

  function o(e, t, r) {
    if (!(this instanceof o)) return new o(e, t, r);
    var s = e;
    return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
  }

  function r(e) {
    this.img = e
  }

  function s(e, t) {
    this.url = e, this.element = t, this.img = new Image
  }
  var h = e.jQuery,
    a = e.console,
    d = Array.prototype.slice;
  o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  }, o.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
    var t = e.nodeType;
    if (t && u[t]) {
      for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o)
      }
      if ("string" == typeof this.options.background) {
        var r = e.querySelectorAll(this.options.background);
        for (n = 0; n < r.length; n++) {
          var s = r[n];
          this.addElementBackgroundImages(s)
        }
      }
    }
  };
  var u = {
    1: !0,
    9: !0,
    11: !0
  };
  return o.prototype.addElementBackgroundImages = function (e) {
    var t = getComputedStyle(e);
    if (t)
      for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
        var o = n && n[2];
        o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
      }
  }, o.prototype.addImage = function (e) {
    var t = new r(e);
    this.images.push(t)
  }, o.prototype.addBackground = function (e, t) {
    var i = new s(e, t);
    this.images.push(i)
  }, o.prototype.check = function () {
    function e(e, i, n) {
      setTimeout(function () {
        t.progress(e, i, n)
      })
    }
    var t = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
      t.once("progress", e), t.check()
    }) : void this.complete()
  }, o.prototype.progress = function (e, t, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
  }, o.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this)
    }
  }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
    var e = this.getIsImageComplete();
    return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
  }, r.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth
  }, r.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
  }, r.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, r.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, r.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, r.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
    var e = this.getIsImageComplete();
    e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
  }, o.makeJQueryPlugin = function (t) {
    t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
      var i = new o(this, e, t);
      return i.jqDeferred.promise(h(this))
    })
  }, o.makeJQueryPlugin(), o
});

/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

! function (e, i) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
    return i(e, t)
  }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function (t, e) {
  "use strict";
  var i = Array.prototype.slice,
    n = t.console,
    d = void 0 === n ? function () {} : function (t) {
      n.error(t)
    };

  function s(h, s, c) {
    (c = c || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function (t) {
      c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
    }), c.fn[h] = function (t) {
      return "string" == typeof t ? function (t, o, r) {
        var a, l = "$()." + h + '("' + o + '")';
        return t.each(function (t, e) {
          var i = c.data(e, h);
          if (i) {
            var n = i[o];
            if (n && "_" != o.charAt(0)) {
              var s = n.apply(i, r);
              a = void 0 === a ? s : a
            } else d(l + " is not a valid method")
          } else d(h + " not initialized. Cannot call methods, i.e. " + l)
        }), void 0 !== a ? a : t
      }(this, t, i.call(arguments, 1)) : (function (t, n) {
        t.each(function (t, e) {
          var i = c.data(e, h);
          i ? (i.option(n), i._init()) : (i = new s(e, n), c.data(e, h, i))
        })
      }(this, t), this)
    }, o(c))
  }

  function o(t) {
    !t || t && t.bridget || (t.bridget = s)
  }
  return o(e || t.jQuery), s
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
  function t() {}
  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {};
      return (i[t] = i[t] || {})[e] = !0, this
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      i = i.slice(0), e = e || [];
      for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
        var o = i[s];
        n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
      }
      return this
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents
  }, t
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
  "use strict";

  function m(t) {
    var e = parseFloat(t);
    return -1 == t.indexOf("%") && !isNaN(e) && e
  }
  var i = "undefined" == typeof console ? function () {} : function (t) {
      console.error(t)
    },
    y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    b = y.length;

  function E(t) {
    var e = getComputedStyle(t);
    return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
  }
  var S, C = !1;

  function x(t) {
    if (function () {
        if (!C) {
          C = !0;
          var t = document.createElement("div");
          t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
          var e = document.body || document.documentElement;
          e.appendChild(t);
          var i = E(t);
          S = 200 == Math.round(m(i.width)), x.isBoxSizeOuter = S, e.removeChild(t)
        }
      }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
      var e = E(t);
      if ("none" == e.display) return function () {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          }, e = 0; e < b; e++) {
          t[y[e]] = 0
        }
        return t
      }();
      var i = {};
      i.width = t.offsetWidth, i.height = t.offsetHeight;
      for (var n = i.isBorderBox = "border-box" == e.boxSizing, s = 0; s < b; s++) {
        var o = y[s],
          r = e[o],
          a = parseFloat(r);
        i[o] = isNaN(a) ? 0 : a
      }
      var l = i.paddingLeft + i.paddingRight,
        h = i.paddingTop + i.paddingBottom,
        c = i.marginLeft + i.marginRight,
        d = i.marginTop + i.marginBottom,
        u = i.borderLeftWidth + i.borderRightWidth,
        f = i.borderTopWidth + i.borderBottomWidth,
        p = n && S,
        g = m(e.width);
      !1 !== g && (i.width = g + (p ? 0 : l + u));
      var v = m(e.height);
      return !1 !== v && (i.height = v + (p ? 0 : h + f)), i.innerWidth = i.width - (l + u), i.innerHeight = i.height - (h + f), i.outerWidth = i.width + c, i.outerHeight = i.height + d, i
    }
  }
  return x
}),
function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
  "use strict";
  var i = function () {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i] + "MatchesSelector";
      if (t[n]) return n
    }
  }();
  return function (t, e) {
    return t[i](e)
  }
}),
function (e, i) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
    return i(e, t)
  }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function (h, o) {
  var c = {
      extend: function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
      },
      modulo: function (t, e) {
        return (t % e + e) % e
      }
    },
    e = Array.prototype.slice;
  c.makeArray = function (t) {
    return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
  }, c.removeFrom = function (t, e) {
    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
  }, c.getParent = function (t, e) {
    for (; t.parentNode && t != document.body;)
      if (t = t.parentNode, o(t, e)) return t
  }, c.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, c.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, c.filterFindElements = function (t, n) {
    t = c.makeArray(t);
    var s = [];
    return t.forEach(function (t) {
      if (t instanceof HTMLElement)
        if (n) {
          o(t, n) && s.push(t);
          for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) s.push(e[i])
        } else s.push(t)
    }), s
  }, c.debounceMethod = function (t, e, n) {
    n = n || 100;
    var s = t.prototype[e],
      o = e + "Timeout";
    t.prototype[e] = function () {
      var t = this[o];
      clearTimeout(t);
      var e = arguments,
        i = this;
      this[o] = setTimeout(function () {
        s.apply(i, e), delete i[o]
      }, n)
    }
  }, c.docReady = function (t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, c.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var d = h.console;
  return c.htmlInit = function (a, l) {
    c.docReady(function () {
      var t = c.toDashed(l),
        s = "data-" + t,
        e = document.querySelectorAll("[" + s + "]"),
        i = document.querySelectorAll(".js-" + t),
        n = c.makeArray(e).concat(c.makeArray(i)),
        o = s + "-options",
        r = h.jQuery;
      n.forEach(function (e) {
        var t, i = e.getAttribute(s) || e.getAttribute(o);
        try {
          t = i && JSON.parse(i)
        } catch (t) {
          return void(d && d.error("Error parsing " + s + " on " + e.className + ": " + t))
        }
        var n = new a(e, t);
        r && r.data(e, l, n)
      })
    })
  }, c
}),
function (e, i) {
  "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (t) {
    return i(e, t)
  }) : "object" == typeof module && module.exports ? module.exports = i(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = i(e, e.getSize))
}(window, function (t, e) {
  function i(t, e) {
    this.element = t, this.parent = e, this.create()
  }
  var n = i.prototype;
  return n.create = function () {
    this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
  }, n.destroy = function () {
    this.unselect(), this.element.style.position = "";
    var t = this.parent.originSide;
    this.element.style[t] = ""
  }, n.getSize = function () {
    this.size = e(this.element)
  }, n.setPosition = function (t) {
    this.x = t, this.updateTarget(), this.renderPosition(t)
  }, n.updateTarget = n.setDefaultTarget = function () {
    var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
    this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
  }, n.renderPosition = function (t) {
    var e = this.parent.originSide;
    this.element.style[e] = this.parent.getPositionValue(t)
  }, n.select = function () {
    this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
  }, n.unselect = function () {
    this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
  }, n.wrapShift = function (t) {
    this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
  }, n.remove = function () {
    this.element.parentNode.removeChild(this.element)
  }, i
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
}(window, function () {
  "use strict";

  function t(t) {
    this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
  }
  var e = t.prototype;
  return e.addCell = function (t) {
    if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
      this.x = t.x;
      var e = this.isOriginLeft ? "marginLeft" : "marginRight";
      this.firstMargin = t.size[e]
    }
  }, e.updateTarget = function () {
    var t = this.isOriginLeft ? "marginRight" : "marginLeft",
      e = this.getLastCell(),
      i = e ? e.size[t] : 0,
      n = this.outerWidth - (this.firstMargin + i);
    this.target = this.x + this.firstMargin + n * this.parent.cellAlign
  }, e.getLastCell = function () {
    return this.cells[this.cells.length - 1]
  }, e.select = function () {
    this.cells.forEach(function (t) {
      t.select()
    })
  }, e.unselect = function () {
    this.cells.forEach(function (t) {
      t.unselect()
    })
  }, e.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element
    })
  }, t
}),
function (e, i) {
  "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
    return i(e, t)
  }) : "object" == typeof module && module.exports ? module.exports = i(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = i(e, e.fizzyUIUtils))
}(window, function (t, e) {
  var i = {
    startAnimation: function () {
      this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
    },
    animate: function () {
      this.applyDragForce(), this.applySelectedAttraction();
      var t = this.x;
      if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
        var e = this;
        requestAnimationFrame(function () {
          e.animate()
        })
      }
    },
    positionSlider: function () {
      var t = this.x;
      this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
    },
    setTranslateX: function (t, e) {
      t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
      var i = this.getPositionValue(t);
      this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
    },
    dispatchScrollEvent: function () {
      var t = this.slides[0];
      if (t) {
        var e = -this.x - t.target,
          i = e / this.slidesWidth;
        this.dispatchEvent("scroll", null, [i, e])
      }
    },
    positionSliderAtSelected: function () {
      this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
    },
    getPositionValue: function (t) {
      return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
    },
    settle: function (t) {
      this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
    },
    shiftWrapCells: function (t) {
      var e = this.cursorPosition + t;
      this._shiftCells(this.beforeShiftCells, e, -1);
      var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
      this._shiftCells(this.afterShiftCells, i, 1)
    },
    _shiftCells: function (t, e, i) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
          o = 0 < e ? i : 0;
        s.wrapShift(o), e -= s.size.outerWidth
      }
    },
    _unshiftCells: function (t) {
      if (t && t.length)
        for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
    },
    integratePhysics: function () {
      this.x += this.velocity, this.velocity *= this.getFrictionFactor()
    },
    applyForce: function (t) {
      this.velocity += t
    },
    getFrictionFactor: function () {
      return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    },
    getRestingPosition: function () {
      return this.x + this.velocity / (1 - this.getFrictionFactor())
    },
    applyDragForce: function () {
      if (this.isDraggable && this.isPointerDown) {
        var t = this.dragX - this.x - this.velocity;
        this.applyForce(t)
      }
    },
    applySelectedAttraction: function () {
      if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
        var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
        this.applyForce(t)
      }
    }
  };
  return i
}),
function (r, a) {
  if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (t, e, i, n, s, o) {
    return a(r, t, e, i, n, s, o)
  });
  else if ("object" == typeof module && module.exports) module.exports = a(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
  else {
    var t = r.Flickity;
    r.Flickity = a(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype)
  }
}(window, function (n, t, e, a, i, r, s) {
  var l = n.jQuery,
    o = n.getComputedStyle,
    h = n.console;

  function c(t, e) {
    for (t = a.makeArray(t); t.length;) e.appendChild(t.shift())
  }
  var d = 0,
    u = {};

  function f(t, e) {
    var i = a.getQueryElement(t);
    if (i) {
      if (this.element = i, this.element.flickityGUID) {
        var n = u[this.element.flickityGUID];
        return n.option(e), n
      }
      l && (this.$element = l(this.element)), this.options = a.extend({}, this.constructor.defaults), this.option(e), this._create()
    } else h && h.error("Bad element for Flickity: " + (i || t))
  }
  f.defaults = {
    accessibility: !0,
    cellAlign: "center",
    freeScrollFriction: .075,
    friction: .28,
    namespaceJQueryEvents: !0,
    percentPosition: !0,
    resize: !0,
    selectedAttraction: .025,
    setGallerySize: !0
  }, f.createMethods = [];
  var p = f.prototype;
  a.extend(p, t.prototype), p._create = function () {
    var t = this.guid = ++d;
    for (var e in this.element.flickityGUID = t, (u[t] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && n.addEventListener("resize", this), this.options.on) {
      var i = this.options.on[e];
      this.on(e, i)
    }
    f.createMethods.forEach(function (t) {
      this[t]()
    }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
  }, p.option = function (t) {
    a.extend(this.options, t)
  }, p.activate = function () {
    this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), c(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
  }, p._createSlider = function () {
    var t = document.createElement("div");
    t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
  }, p._filterFindCellElements = function (t) {
    return a.filterFindElements(t, this.options.cellSelector)
  }, p.reloadCells = function () {
    this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
  }, p._makeCells = function (t) {
    return this._filterFindCellElements(t).map(function (t) {
      return new i(t, this)
    }, this)
  }, p.getLastCell = function () {
    return this.cells[this.cells.length - 1]
  }, p.getLastSlide = function () {
    return this.slides[this.slides.length - 1]
  }, p.positionCells = function () {
    this._sizeCells(this.cells), this._positionCells(0)
  }, p._positionCells = function (t) {
    t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
    var e = 0;
    if (0 < t) {
      var i = this.cells[t - 1];
      e = i.x + i.size.outerWidth
    }
    for (var n = this.cells.length, s = t; s < n; s++) {
      var o = this.cells[s];
      o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
    }
    this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
  }, p._sizeCells = function (t) {
    t.forEach(function (t) {
      t.getSize()
    })
  }, p.updateSlides = function () {
    if (this.slides = [], this.cells.length) {
      var n = new r(this);
      this.slides.push(n);
      var s = "left" == this.originSide ? "marginRight" : "marginLeft",
        o = this._getCanCellFit();
      this.cells.forEach(function (t, e) {
        if (n.cells.length) {
          var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
          o.call(this, e, i) || (n.updateTarget(), n = new r(this), this.slides.push(n)), n.addCell(t)
        } else n.addCell(t)
      }, this), n.updateTarget(), this.updateSelectedSlide()
    }
  }, p._getCanCellFit = function () {
    var t = this.options.groupCells;
    if (!t) return function () {
      return !1
    };
    if ("number" == typeof t) {
      var e = parseInt(t, 10);
      return function (t) {
        return t % e != 0
      }
    }
    var i = "string" == typeof t && t.match(/^(\d+)%$/),
      n = i ? parseInt(i[1], 10) / 100 : 1;
    return function (t, e) {
      return e <= (this.size.innerWidth + 1) * n
    }
  }, p._init = p.reposition = function () {
    this.positionCells(), this.positionSliderAtSelected()
  }, p.getSize = function () {
    this.size = e(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
  };
  var g = {
    center: {
      left: .5,
      right: .5
    },
    left: {
      left: 0,
      right: 1
    },
    right: {
      right: 0,
      left: 1
    }
  };
  return p.setCellAlign = function () {
    var t = g[this.options.cellAlign];
    this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
  }, p.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
      this.viewport.style.height = t + "px"
    }
  }, p._getWrapShiftCells = function () {
    if (this.options.wrapAround) {
      this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
      var t = this.cursorPosition,
        e = this.cells.length - 1;
      this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
    }
  }, p._getGapCells = function (t, e, i) {
    for (var n = []; 0 < t;) {
      var s = this.cells[e];
      if (!s) break;
      n.push(s), e += i, t -= s.size.outerWidth
    }
    return n
  }, p._containSlides = function () {
    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
      var t = this.options.rightToLeft,
        e = t ? "marginRight" : "marginLeft",
        i = t ? "marginLeft" : "marginRight",
        n = this.slideableWidth - this.getLastCell().size[i],
        s = n < this.size.innerWidth,
        o = this.cursorPosition + this.cells[0].size[e],
        r = n - this.size.innerWidth * (1 - this.cellAlign);
      this.slides.forEach(function (t) {
        s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, r))
      }, this)
    }
  }, p.dispatchEvent = function (t, e, i) {
    var n = e ? [e].concat(i) : i;
    if (this.emitEvent(t, n), l && this.$element) {
      var s = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
      if (e) {
        var o = l.Event(e);
        o.type = t, s = o
      }
      this.$element.trigger(s, i)
    }
  }, p.select = function (t, e, i) {
    if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = a.modulo(t, this.slides.length)), this.slides[t])) {
      var n = this.selectedIndex;
      this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != n && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
    }
  }, p._wrapSelect = function (t) {
    var e = this.slides.length;
    if (!(this.options.wrapAround && 1 < e)) return t;
    var i = a.modulo(t, e),
      n = Math.abs(i - this.selectedIndex),
      s = Math.abs(i + e - this.selectedIndex),
      o = Math.abs(i - e - this.selectedIndex);
    !this.isDragSelect && s < n ? t += e : !this.isDragSelect && o < n && (t -= e), t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
  }, p.previous = function (t, e) {
    this.select(this.selectedIndex - 1, t, e)
  }, p.next = function (t, e) {
    this.select(this.selectedIndex + 1, t, e)
  }, p.updateSelectedSlide = function () {
    var t = this.slides[this.selectedIndex];
    t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
  }, p.unselectSelectedSlide = function () {
    this.selectedSlide && this.selectedSlide.unselect()
  }, p.selectInitialIndex = function () {
    var t = this.options.initialIndex;
    if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
    else {
      if (t && "string" == typeof t)
        if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
      var e = 0;
      t && this.slides[t] && (e = t), this.select(e, !1, !0)
    }
  }, p.selectCell = function (t, e, i) {
    var n = this.queryCell(t);
    if (n) {
      var s = this.getCellSlideIndex(n);
      this.select(s, e, i)
    }
  }, p.getCellSlideIndex = function (t) {
    for (var e = 0; e < this.slides.length; e++) {
      if (-1 != this.slides[e].cells.indexOf(t)) return e
    }
  }, p.getCell = function (t) {
    for (var e = 0; e < this.cells.length; e++) {
      var i = this.cells[e];
      if (i.element == t) return i
    }
  }, p.getCells = function (t) {
    t = a.makeArray(t);
    var i = [];
    return t.forEach(function (t) {
      var e = this.getCell(t);
      e && i.push(e)
    }, this), i
  }, p.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element
    })
  }, p.getParentCell = function (t) {
    var e = this.getCell(t);
    return e || (t = a.getParent(t, ".flickity-slider > *"), this.getCell(t))
  }, p.getAdjacentCellElements = function (t, e) {
    if (!t) return this.selectedSlide.getCellElements();
    e = void 0 === e ? this.selectedIndex : e;
    var i = this.slides.length;
    if (i <= 1 + 2 * t) return this.getCellElements();
    for (var n = [], s = e - t; s <= e + t; s++) {
      var o = this.options.wrapAround ? a.modulo(s, i) : s,
        r = this.slides[o];
      r && (n = n.concat(r.getCellElements()))
    }
    return n
  }, p.queryCell = function (t) {
    if ("number" == typeof t) return this.cells[t];
    if ("string" == typeof t) {
      if (t.match(/^[#\.]?[\d\/]/)) return;
      t = this.element.querySelector(t)
    }
    return this.getCell(t)
  }, p.uiChange = function () {
    this.emitEvent("uiChange")
  }, p.childUIPointerDown = function (t) {
    "touchstart" != t.type && t.preventDefault(), this.focus()
  }, p.onresize = function () {
    this.watchCSS(), this.resize()
  }, a.debounceMethod(f, "onresize", 150), p.resize = function () {
    if (this.isActive) {
      this.getSize(), this.options.wrapAround && (this.x = a.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
      var t = this.selectedElements && this.selectedElements[0];
      this.selectCell(t, !1, !0)
    }
  }, p.watchCSS = function () {
    this.options.watchCSS && (-1 != o(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
  }, p.onkeydown = function (t) {
    var e = document.activeElement && document.activeElement != this.element;
    if (this.options.accessibility && !e) {
      var i = f.keyboardHandlers[t.keyCode];
      i && i.call(this)
    }
  }, f.keyboardHandlers = {
    37: function () {
      var t = this.options.rightToLeft ? "next" : "previous";
      this.uiChange(), this[t]()
    },
    39: function () {
      var t = this.options.rightToLeft ? "previous" : "next";
      this.uiChange(), this[t]()
    }
  }, p.focus = function () {
    var t = n.pageYOffset;
    this.element.focus({
      preventScroll: !0
    }), n.pageYOffset != t && n.scrollTo(n.pageXOffset, t)
  }, p.deactivate = function () {
    this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function (t) {
      t.destroy()
    }), this.element.removeChild(this.viewport), c(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
  }, p.destroy = function () {
    this.deactivate(), n.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), l && this.$element && l.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete u[this.guid]
  }, a.extend(p, s), f.data = function (t) {
    var e = (t = a.getQueryElement(t)) && t.flickityGUID;
    return e && u[e]
  }, a.htmlInit(f, "flickity"), l && l.bridget && l.bridget("flickity", f), f.setJQuery = function (t) {
    l = t
  }, f.Cell = i, f.Slide = r, f
}),
function (e, i) {
  "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (t) {
    return i(e, t)
  }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter)
}(window, function (s, t) {
  function e() {}
  var i = e.prototype = Object.create(t.prototype);
  i.bindStartEvent = function (t) {
    this._bindStartEvent(t, !0)
  }, i.unbindStartEvent = function (t) {
    this._bindStartEvent(t, !1)
  }, i._bindStartEvent = function (t, e) {
    var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener",
      n = "mousedown";
    s.PointerEvent ? n = "pointerdown" : "ontouchstart" in s && (n = "touchstart"), t[i](n, this)
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.getTouch = function (t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      if (i.identifier == this.pointerIdentifier) return i
    }
  }, i.onmousedown = function (t) {
    var e = t.button;
    e && 0 !== e && 1 !== e || this._pointerDown(t, t)
  }, i.ontouchstart = function (t) {
    this._pointerDown(t, t.changedTouches[0])
  }, i.onpointerdown = function (t) {
    this._pointerDown(t, t)
  }, i._pointerDown = function (t, e) {
    t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
  }, i.pointerDown = function (t, e) {
    this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
  };
  var n = {
    mousedown: ["mousemove", "mouseup"],
    touchstart: ["touchmove", "touchend", "touchcancel"],
    pointerdown: ["pointermove", "pointerup", "pointercancel"]
  };
  return i._bindPostStartEvents = function (t) {
    if (t) {
      var e = n[t.type];
      e.forEach(function (t) {
        s.addEventListener(t, this)
      }, this), this._boundPointerEvents = e
    }
  }, i._unbindPostStartEvents = function () {
    this._boundPointerEvents && (this._boundPointerEvents.forEach(function (t) {
      s.removeEventListener(t, this)
    }, this), delete this._boundPointerEvents)
  }, i.onmousemove = function (t) {
    this._pointerMove(t, t)
  }, i.onpointermove = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
  }, i.ontouchmove = function (t) {
    var e = this.getTouch(t.changedTouches);
    e && this._pointerMove(t, e)
  }, i._pointerMove = function (t, e) {
    this.pointerMove(t, e)
  }, i.pointerMove = function (t, e) {
    this.emitEvent("pointerMove", [t, e])
  }, i.onmouseup = function (t) {
    this._pointerUp(t, t)
  }, i.onpointerup = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
  }, i.ontouchend = function (t) {
    var e = this.getTouch(t.changedTouches);
    e && this._pointerUp(t, e)
  }, i._pointerUp = function (t, e) {
    this._pointerDone(), this.pointerUp(t, e)
  }, i.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e])
  }, i._pointerDone = function () {
    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
  }, i._pointerReset = function () {
    this.isPointerDown = !1, delete this.pointerIdentifier
  }, i.pointerDone = function () {}, i.onpointercancel = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
  }, i.ontouchcancel = function (t) {
    var e = this.getTouch(t.changedTouches);
    e && this._pointerCancel(t, e)
  }, i._pointerCancel = function (t, e) {
    this._pointerDone(), this.pointerCancel(t, e)
  }, i.pointerCancel = function (t, e) {
    this.emitEvent("pointerCancel", [t, e])
  }, e.getPointerPoint = function (t) {
    return {
      x: t.pageX,
      y: t.pageY
    }
  }, e
}),
function (e, i) {
  "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function (t) {
    return i(e, t)
  }) : "object" == typeof module && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer)
}(window, function (o, t) {
  function e() {}
  var i = e.prototype = Object.create(t.prototype);
  i.bindHandles = function () {
    this._bindHandles(!0)
  }, i.unbindHandles = function () {
    this._bindHandles(!1)
  }, i._bindHandles = function (t) {
    for (var e = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", n = 0; n < this.handles.length; n++) {
      var s = this.handles[n];
      this._bindStartEvent(s, t), s[e]("click", this), o.PointerEvent && (s.style.touchAction = i)
    }
  }, i._touchActionValue = "none", i.pointerDown = function (t, e) {
    this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
  };
  var s = {
      TEXTAREA: !0,
      INPUT: !0,
      SELECT: !0,
      OPTION: !0
    },
    r = {
      radio: !0,
      checkbox: !0,
      button: !0,
      submit: !0,
      image: !0,
      file: !0
    };
  return i.okayPointerDown = function (t) {
    var e = s[t.target.nodeName],
      i = r[t.target.type],
      n = !e || i;
    return n || this._pointerReset(), n
  }, i.pointerDownBlur = function () {
    var t = document.activeElement;
    t && t.blur && t != document.body && t.blur()
  }, i.pointerMove = function (t, e) {
    var i = this._dragPointerMove(t, e);
    this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
  }, i._dragPointerMove = function (t, e) {
    var i = {
      x: e.pageX - this.pointerDownPointer.pageX,
      y: e.pageY - this.pointerDownPointer.pageY
    };
    return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
  }, i.hasDragStarted = function (t) {
    return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
  }, i.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
  }, i._dragPointerUp = function (t, e) {
    this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
  }, i._dragStart = function (t, e) {
    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
  }, i.dragStart = function (t, e) {
    this.emitEvent("dragStart", [t, e])
  }, i._dragMove = function (t, e, i) {
    this.isDragging && this.dragMove(t, e, i)
  }, i.dragMove = function (t, e, i) {
    t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
  }, i._dragEnd = function (t, e) {
    this.isDragging = !1, setTimeout(function () {
      delete this.isPreventingClicks
    }.bind(this)), this.dragEnd(t, e)
  }, i.dragEnd = function (t, e) {
    this.emitEvent("dragEnd", [t, e])
  }, i.onclick = function (t) {
    this.isPreventingClicks && t.preventDefault()
  }, i._staticClick = function (t, e) {
    this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
      delete this.isIgnoringMouseUp
    }.bind(this), 400)))
  }, i.staticClick = function (t, e) {
    this.emitEvent("staticClick", [t, e])
  }, e.getPointerPoint = t.getPointerPoint, e
}),
function (n, s) {
  "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (t, e, i) {
    return s(n, t, e, i)
  }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils)
}(window, function (i, t, e, a) {
  a.extend(t.defaults, {
    draggable: ">1",
    dragThreshold: 3
  }), t.createMethods.push("_createDrag");
  var n = t.prototype;
  a.extend(n, e.prototype), n._touchActionValue = "pan-y";
  var s = "createTouch" in document,
    o = !1;
  n._createDrag = function () {
    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), s && !o && (i.addEventListener("touchmove", function () {}), o = !0)
  }, n.onActivateDrag = function () {
    this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
  }, n.onDeactivateDrag = function () {
    this.unbindHandles(), this.element.classList.remove("is-draggable")
  }, n.updateDraggable = function () {
    ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
  }, n.bindDrag = function () {
    this.options.draggable = !0, this.updateDraggable()
  }, n.unbindDrag = function () {
    this.options.draggable = !1, this.updateDraggable()
  }, n._uiChangeDrag = function () {
    delete this.isFreeScrolling
  }, n.pointerDown = function (t, e) {
    this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), i.addEventListener("scroll", this), this._pointerDownDefault(t, e)) : this._pointerDownDefault(t, e)
  }, n._pointerDownDefault = function (t, e) {
    this.pointerDownPointer = {
      pageX: e.pageX,
      pageY: e.pageY
    }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
  };
  var r = {
    INPUT: !0,
    TEXTAREA: !0,
    SELECT: !0
  };

  function l() {
    return {
      x: i.pageXOffset,
      y: i.pageYOffset
    }
  }
  return n.pointerDownFocus = function (t) {
    r[t.target.nodeName] || this.focus()
  }, n._pointerDownPreventDefault = function (t) {
    var e = "touchstart" == t.type,
      i = "touch" == t.pointerType,
      n = r[t.target.nodeName];
    e || i || n || t.preventDefault()
  }, n.hasDragStarted = function (t) {
    return Math.abs(t.x) > this.options.dragThreshold
  }, n.pointerUp = function (t, e) {
    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
  }, n.pointerDone = function () {
    i.removeEventListener("scroll", this), delete this.pointerDownScroll
  }, n.dragStart = function (t, e) {
    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), i.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [e]))
  }, n.pointerMove = function (t, e) {
    var i = this._dragPointerMove(t, e);
    this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
  }, n.dragMove = function (t, e, i) {
    if (this.isDraggable) {
      t.preventDefault(), this.previousDragX = this.dragX;
      var n = this.options.rightToLeft ? -1 : 1;
      this.options.wrapAround && (i.x = i.x % this.slideableWidth);
      var s = this.dragStartPosition + i.x * n;
      if (!this.options.wrapAround && this.slides.length) {
        var o = Math.max(-this.slides[0].target, this.dragStartPosition);
        s = o < s ? .5 * (s + o) : s;
        var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
        s = s < r ? .5 * (s + r) : s
      }
      this.dragX = s, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
    }
  }, n.dragEnd = function (t, e) {
    if (this.isDraggable) {
      this.options.freeScroll && (this.isFreeScrolling = !0);
      var i = this.dragEndRestingSelect();
      if (this.options.freeScroll && !this.options.wrapAround) {
        var n = this.getRestingPosition();
        this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
      } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
      delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
    }
  }, n.dragEndRestingSelect = function () {
    var t = this.getRestingPosition(),
      e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
      i = this._getClosestResting(t, e, 1),
      n = this._getClosestResting(t, e, -1);
    return i.distance < n.distance ? i.index : n.index
  }, n._getClosestResting = function (t, e, i) {
    for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function (t, e) {
        return t <= e
      } : function (t, e) {
        return t < e
      }; o(e, s) && (n += i, s = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
    return {
      distance: s,
      index: n - i
    }
  }, n.getSlideDistance = function (t, e) {
    var i = this.slides.length,
      n = this.options.wrapAround && 1 < i,
      s = n ? a.modulo(e, i) : e,
      o = this.slides[s];
    if (!o) return null;
    var r = n ? this.slideableWidth * Math.floor(e / i) : 0;
    return t - (o.target + r)
  }, n.dragEndBoostSelect = function () {
    if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0;
    var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
      e = this.previousDragX - this.dragX;
    return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
  }, n.staticClick = function (t, e) {
    var i = this.getParentCell(t.target),
      n = i && i.element,
      s = i && this.cells.indexOf(i);
    this.dispatchEvent("staticClick", t, [e, n, s])
  }, n.onscroll = function () {
    var t = l(),
      e = this.pointerDownScroll.x - t.x,
      i = this.pointerDownScroll.y - t.y;
    (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone()
  }, t
}),
function (n, s) {
  "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) {
    return s(n, t, e, i)
  }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils)
}(window, function (t, e, i, n) {
  "use strict";
  var s = "http://www.w3.org/2000/svg";

  function o(t, e) {
    this.direction = t, this.parent = e, this._create()
  }(o.prototype = Object.create(i.prototype))._create = function () {
    this.isEnabled = !0, this.isPrevious = -1 == this.direction;
    var t = this.parent.options.rightToLeft ? 1 : -1;
    this.isLeft = this.direction == t;
    var e = this.element = document.createElement("button");
    e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
    var i = this.createSVG();
    e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
  }, o.prototype.activate = function () {
    this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
  }, o.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
  }, o.prototype.createSVG = function () {
    var t = document.createElementNS(s, "svg");
    t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
    var e = document.createElementNS(s, "path"),
      i = function (t) {
        return "string" != typeof t ? "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z" : t
      }(this.parent.options.arrowShape);
    return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
  }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function () {
    if (this.isEnabled) {
      this.parent.uiChange();
      var t = this.isPrevious ? "previous" : "next";
      this.parent[t]()
    }
  }, o.prototype.enable = function () {
    this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
  }, o.prototype.disable = function () {
    this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
  }, o.prototype.update = function () {
    var t = this.parent.slides;
    if (this.parent.options.wrapAround && 1 < t.length) this.enable();
    else {
      var e = t.length ? t.length - 1 : 0,
        i = this.isPrevious ? 0 : e;
      this[this.parent.selectedIndex == i ? "disable" : "enable"]()
    }
  }, o.prototype.destroy = function () {
    this.deactivate(), this.allOff()
  }, n.extend(e.defaults, {
    prevNextButtons: !0,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 70,
      y2: 40,
      x3: 30
    }
  }), e.createMethods.push("_createPrevNextButtons");
  var r = e.prototype;
  return r._createPrevNextButtons = function () {
    this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
  }, r.activatePrevNextButtons = function () {
    this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
  }, r.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
  }, e.PrevNextButton = o, e
}),
function (n, s) {
  "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) {
    return s(n, t, e, i)
  }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils)
}(window, function (t, e, i, n) {
  function s(t) {
    this.parent = t, this._create()
  }(s.prototype = Object.create(i.prototype))._create = function () {
    this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
  }, s.prototype.activate = function () {
    this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
  }, s.prototype.deactivate = function () {
    this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
  }, s.prototype.setDots = function () {
    var t = this.parent.slides.length - this.dots.length;
    0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
  }, s.prototype.addDots = function (t) {
    for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) {
      var r = document.createElement("li");
      r.className = "dot", r.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(r), i.push(r)
    }
    this.holder.appendChild(e), this.dots = this.dots.concat(i)
  }, s.prototype.removeDots = function (t) {
    this.dots.splice(this.dots.length - t, t).forEach(function (t) {
      this.holder.removeChild(t)
    }, this)
  }, s.prototype.updateSelected = function () {
    this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
  }, s.prototype.onTap = s.prototype.onClick = function (t) {
    var e = t.target;
    if ("LI" == e.nodeName) {
      this.parent.uiChange();
      var i = this.dots.indexOf(e);
      this.parent.select(i)
    }
  }, s.prototype.destroy = function () {
    this.deactivate(), this.allOff()
  }, e.PageDots = s, n.extend(e.defaults, {
    pageDots: !0
  }), e.createMethods.push("_createPageDots");
  var o = e.prototype;
  return o._createPageDots = function () {
    this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
  }, o.activatePageDots = function () {
    this.pageDots.activate()
  }, o.updateSelectedPageDots = function () {
    this.pageDots.updateSelected()
  }, o.updatePageDots = function () {
    this.pageDots.setDots()
  }, o.deactivatePageDots = function () {
    this.pageDots.deactivate()
  }, e.PageDots = s, e
}),
function (t, n) {
  "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, e, i) {
    return n(t, e, i)
  }) : "object" == typeof module && module.exports ? module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function (t, e, i) {
  function n(t) {
    this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
  }(n.prototype = Object.create(t.prototype)).play = function () {
    "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
  }, n.prototype.tick = function () {
    if ("playing" == this.state) {
      var t = this.parent.options.autoPlay;
      t = "number" == typeof t ? t : 3e3;
      var e = this;
      this.clear(), this.timeout = setTimeout(function () {
        e.parent.next(!0), e.tick()
      }, t)
    }
  }, n.prototype.stop = function () {
    this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
  }, n.prototype.clear = function () {
    clearTimeout(this.timeout)
  }, n.prototype.pause = function () {
    "playing" == this.state && (this.state = "paused", this.clear())
  }, n.prototype.unpause = function () {
    "paused" == this.state && this.play()
  }, n.prototype.visibilityChange = function () {
    this[document.hidden ? "pause" : "unpause"]()
  }, n.prototype.visibilityPlay = function () {
    this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
  }, e.extend(i.defaults, {
    pauseAutoPlayOnHover: !0
  }), i.createMethods.push("_createPlayer");
  var s = i.prototype;
  return s._createPlayer = function () {
    this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
  }, s.activatePlayer = function () {
    this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
  }, s.playPlayer = function () {
    this.player.play()
  }, s.stopPlayer = function () {
    this.player.stop()
  }, s.pausePlayer = function () {
    this.player.pause()
  }, s.unpausePlayer = function () {
    this.player.unpause()
  }, s.deactivatePlayer = function () {
    this.player.stop(), this.element.removeEventListener("mouseenter", this)
  }, s.onmouseenter = function () {
    this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
  }, s.onmouseleave = function () {
    this.player.unpause(), this.element.removeEventListener("mouseleave", this)
  }, i.Player = n, i
}),
function (i, n) {
  "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) {
    return n(i, t, e)
  }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function (t, e, n) {
  var i = e.prototype;
  return i.insert = function (t, e) {
    var i = this._makeCells(t);
    if (i && i.length) {
      var n = this.cells.length;
      e = void 0 === e ? n : e;
      var s = function (t) {
          var e = document.createDocumentFragment();
          return t.forEach(function (t) {
            e.appendChild(t.element)
          }), e
        }(i),
        o = e == n;
      if (o) this.slider.appendChild(s);
      else {
        var r = this.cells[e].element;
        this.slider.insertBefore(s, r)
      }
      if (0 === e) this.cells = i.concat(this.cells);
      else if (o) this.cells = this.cells.concat(i);
      else {
        var a = this.cells.splice(e, n - e);
        this.cells = this.cells.concat(i).concat(a)
      }
      this._sizeCells(i), this.cellChange(e, !0)
    }
  }, i.append = function (t) {
    this.insert(t, this.cells.length)
  }, i.prepend = function (t) {
    this.insert(t, 0)
  }, i.remove = function (t) {
    var e = this.getCells(t);
    if (e && e.length) {
      var i = this.cells.length - 1;
      e.forEach(function (t) {
        t.remove();
        var e = this.cells.indexOf(t);
        i = Math.min(e, i), n.removeFrom(this.cells, t)
      }, this), this.cellChange(i, !0)
    }
  }, i.cellSizeChange = function (t) {
    var e = this.getCell(t);
    if (e) {
      e.getSize();
      var i = this.cells.indexOf(e);
      this.cellChange(i)
    }
  }, i.cellChange = function (t, e) {
    var i = this.selectedElement;
    this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
    var n = this.getCell(i);
    n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
  }, e
}),
function (i, n) {
  "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) {
    return n(i, t, e)
  }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function (t, e, o) {
  "use strict";
  e.createMethods.push("_createLazyload");
  var i = e.prototype;

  function s(t, e) {
    this.img = t, this.flickity = e, this.load()
  }
  return i._createLazyload = function () {
    this.on("select", this.lazyLoad)
  }, i.lazyLoad = function () {
    var t = this.options.lazyLoad;
    if (t) {
      var e = "number" == typeof t ? t : 0,
        i = this.getAdjacentCellElements(e),
        n = [];
      i.forEach(function (t) {
        var e = function (t) {
          if ("IMG" == t.nodeName) {
            var e = t.getAttribute("data-flickity-lazyload"),
              i = t.getAttribute("data-flickity-lazyload-src"),
              n = t.getAttribute("data-flickity-lazyload-srcset");
            if (e || i || n) return [t]
          }
          var s = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
          return o.makeArray(s)
        }(t);
        n = n.concat(e)
      }), n.forEach(function (t) {
        new s(t, this)
      }, this)
    }
  }, s.prototype.handleEvent = o.handleEvent, s.prototype.load = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this);
    var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
      e = this.img.getAttribute("data-flickity-lazyload-srcset");
    this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
  }, s.prototype.onload = function (t) {
    this.complete(t, "flickity-lazyloaded")
  }, s.prototype.onerror = function (t) {
    this.complete(t, "flickity-lazyerror")
  }, s.prototype.complete = function (t, e) {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    var i = this.flickity.getParentCell(this.img),
      n = i && i.element;
    this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
  }, e.LazyLoader = s, e
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function (t) {
  return t
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function (n, s) {
  n.createMethods.push("_createAsNavFor");
  var t = n.prototype;
  return t._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
    var t = this.options.asNavFor;
    if (t) {
      var e = this;
      setTimeout(function () {
        e.setNavCompanion(t)
      })
    }
  }, t.setNavCompanion = function (t) {
    t = s.getQueryElement(t);
    var e = n.data(t);
    if (e && e != this) {
      this.navCompanion = e;
      var i = this;
      this.onNavCompanionSelect = function () {
        i.navCompanionSelect()
      }, e.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
    }
  }, t.navCompanionSelect = function (t) {
    var e = this.navCompanion && this.navCompanion.selectedCells;
    if (e) {
      var i = e[0],
        n = this.navCompanion.cells.indexOf(i),
        s = n + e.length - 1,
        o = Math.floor(function (t, e, i) {
          return (e - t) * i + t
        }(n, s, this.navCompanion.cellAlign));
      if (this.selectCell(o, !1, t), this.removeNavSelectedElements(), !(o >= this.cells.length)) {
        var r = this.cells.slice(n, 1 + s);
        this.navSelectedElements = r.map(function (t) {
          return t.element
        }), this.changeNavSelectedClass("add")
      }
    }
  }, t.changeNavSelectedClass = function (e) {
    this.navSelectedElements.forEach(function (t) {
      t.classList[e]("is-nav-selected")
    })
  }, t.activateAsNavFor = function () {
    this.navCompanionSelect(!0)
  }, t.removeNavSelectedElements = function () {
    this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
  }, t.onNavStaticClick = function (t, e, i, n) {
    "number" == typeof n && this.navCompanion.selectCell(n)
  }, t.deactivateAsNavFor = function () {
    this.removeNavSelectedElements()
  }, t.destroyAsNavFor = function () {
    this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
  }, n
}),
function (e, i) {
  "use strict";
  "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (t) {
    return i(e, t)
  }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
  var s = e.jQuery,
    o = e.console;

  function r(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }
  var a = Array.prototype.slice;

  function l(t, e, i) {
    if (!(this instanceof l)) return new l(t, e, i);
    var n = t;
    "string" == typeof t && (n = document.querySelectorAll(t)), n ? (this.elements = function (t) {
      return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? a.call(t) : [t]
    }(n), this.options = r({}, this.options), "function" == typeof e ? i = e : r(this.options, e), i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(this.check.bind(this))) : o.error("Bad element for imagesLoaded " + (n || t))
  }(l.prototype = Object.create(t.prototype)).options = {}, l.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  }, l.prototype.addElementImages = function (t) {
    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
    var e = t.nodeType;
    if (e && h[e]) {
      for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var s = i[n];
        this.addImage(s)
      }
      if ("string" == typeof this.options.background) {
        var o = t.querySelectorAll(this.options.background);
        for (n = 0; n < o.length; n++) {
          var r = o[n];
          this.addElementBackgroundImages(r)
        }
      }
    }
  };
  var h = {
    1: !0,
    9: !0,
    11: !0
  };

  function i(t) {
    this.img = t
  }

  function n(t, e) {
    this.url = t, this.element = e, this.img = new Image
  }
  return l.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);
    if (e)
      for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
        var s = n && n[2];
        s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
      }
  }, l.prototype.addImage = function (t) {
    var e = new i(t);
    this.images.push(e)
  }, l.prototype.addBackground = function (t, e) {
    var i = new n(t, e);
    this.images.push(i)
  }, l.prototype.check = function () {
    var n = this;

    function e(t, e, i) {
      setTimeout(function () {
        n.progress(t, e, i)
      })
    }
    this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) {
      t.once("progress", e), t.check()
    }) : this.complete()
  }, l.prototype.progress = function (t, e, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && o && o.log("progress: " + i, t, e)
  }, l.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[e](this)
    }
  }, (i.prototype = Object.create(t.prototype)).check = function () {
    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
  }, i.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth
  }, i.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
  }, i.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, i.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, i.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, (n.prototype = Object.create(i.prototype)).check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, n.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, n.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
  }, l.makeJQueryPlugin = function (t) {
    (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function (t, e) {
      return new l(this, t, e).jqDeferred.promise(s(this))
    })
  }, l.makeJQueryPlugin(), l
}),
function (i, n) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (t, e) {
    return n(i, t, e)
  }) : "object" == typeof module && module.exports ? module.exports = n(i, require("flickity"), require("imagesloaded")) : i.Flickity = n(i, i.Flickity, i.imagesLoaded)
}(window, function (t, e, i) {
  "use strict";
  e.createMethods.push("_createImagesLoaded");
  var n = e.prototype;
  return n._createImagesLoaded = function () {
    this.on("activate", this.imagesLoaded)
  }, n.imagesLoaded = function () {
    if (this.options.imagesLoaded) {
      var n = this;
      i(this.slider).on("progress", function (t, e) {
        var i = n.getParentCell(e.img);
        n.cellSizeChange(i && i.element), n.options.freeScroll || n.positionSliderAtSelected()
      })
    }
  }, e
});

! function (e, t) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == typeof module && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : t(e.Flickity, e.fizzyUIUtils)
}(this, function (e, t) {
  var i = e.Slide,
    s = i.prototype.updateTarget;
  i.prototype.updateTarget = function () {
    if (s.apply(this, arguments), this.parent.options.fade) {
      var e = this.target - this.x,
        t = this.cells[0].x;
      this.cells.forEach(function (i) {
        var s = i.x - t - e;
        i.renderPosition(s)
      })
    }
  }, i.prototype.setOpacity = function (e) {
    this.cells.forEach(function (t) {
      t.element.style.opacity = e
    })
  };
  var a = e.prototype;
  e.createMethods.push("_createFade"), a._createFade = function () {
    this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
  };
  var n = a.updateSlides;
  a.updateSlides = function () {
    n.apply(this, arguments), this.options.fade && this.slides.forEach(function (e, t) {
      var i = t == this.selectedIndex ? 1 : 0;
      e.setOpacity(i)
    }, this)
  }, a.onSelectFade = function () {
    this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
  }, a.onSettleFade = function () {
    (delete this.didDragEnd, this.options.fade) && (this.selectedSlide.setOpacity(1), this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0))
  }, a.onDragEndFade = function () {
    this.didDragEnd = !0
  }, a.onActivateFade = function () {
    this.options.fade && this.element.classList.add("is-fade")
  }, a.onDeactivateFade = function () {
    this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach(function (e) {
      e.setOpacity("")
    }))
  };
  var d = a.positionSlider;
  a.positionSlider = function () {
    this.options.fade ? (this.fadeSlides(), this.dispatchScrollEvent()) : d.apply(this, arguments)
  };
  var h = a.positionSliderAtSelected;
  a.positionSliderAtSelected = function () {
    this.options.fade && this.setTranslateX(0), h.apply(this, arguments)
  }, a.fadeSlides = function () {
    if (!(this.slides.length < 2)) {
      var e = this.getFadeIndexes(),
        t = this.slides[e.a],
        i = this.slides[e.b],
        s = this.wrapDifference(t.target, i.target),
        a = this.wrapDifference(t.target, -this.x);
      a /= s, t.setOpacity(1 - a), i.setOpacity(a);
      var n = e.a;
      this.isDragging && (n = a > .5 ? e.a : e.b), null != this.fadeHideIndex && this.fadeHideIndex != n && this.fadeHideIndex != e.a && this.fadeHideIndex != e.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = n
    }
  }, a.getFadeIndexes = function () {
    return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
      a: this.fadeIndex,
      b: this.selectedIndex
    }
  }, a.getFadeDragWrapIndexes = function () {
    var e = this.slides.map(function (e, t) {
        return this.getSlideDistance(-this.x, t)
      }, this),
      i = e.map(function (e) {
        return Math.abs(e)
      }),
      s = Math.min.apply(Math, i),
      a = i.indexOf(s),
      n = e[a],
      d = this.slides.length,
      h = n >= 0 ? 1 : -1;
    return {
      a: a,
      b: t.modulo(a + h, d)
    }
  }, a.getFadeDragLimitIndexes = function () {
    for (var e = 0, t = 0; t < this.slides.length - 1; t++) {
      var i = this.slides[t];
      if (-this.x < i.target) break;
      e = t
    }
    return {
      a: e,
      b: e + 1
    }
  }, a.wrapDifference = function (e, t) {
    var i = t - e;
    if (!this.options.wrapAround) return i;
    var s = i + this.slideableWidth,
      a = i - this.slideableWidth;
    return Math.abs(s) < Math.abs(i) && (i = s), Math.abs(a) < Math.abs(i) && (i = a), i
  };
  var o = a._getWrapShiftCells;
  a._getWrapShiftCells = function () {
    this.options.fade || o.apply(this, arguments)
  };
  var r = a.shiftWrapCells;
  return a.shiftWrapCells = function () {
    this.options.fade || r.apply(this, arguments)
  }, e
});

! function (e, t) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == typeof module && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : e.Flickity = t(e.Flickity, e.fizzyUIUtils)
}(window, function (e, t) {
  "use strict";
  e.createMethods.push("_createAsNavFor");
  var i = e.prototype;
  return i._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
    var e = this.options.asNavFor;
    if (e) {
      var t = this;
      setTimeout(function () {
        t.setNavCompanion(e)
      })
    }
  }, i.setNavCompanion = function (i) {
    i = t.getQueryElement(i);
    var n = e.data(i);
    if (n && n != this) {
      this.navCompanion = n;
      var a = this;
      this.onNavCompanionSelect = function () {
        a.navCompanionSelect()
      }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
    }
  }, i.navCompanionSelect = function (e) {
    var t = this.navCompanion && this.navCompanion.selectedCells;
    if (t) {
      var i, n, a, o = t[0],
        s = this.navCompanion.cells.indexOf(o),
        c = s + t.length - 1,
        l = Math.floor((i = s, n = c, a = this.navCompanion.cellAlign, (n - i) * a + i));
      if (this.selectCell(l, !1, e), this.removeNavSelectedElements(), !(l >= this.cells.length)) {
        var v = this.cells.slice(s, c + 1);
        this.navSelectedElements = v.map(function (e) {
          return e.element
        }), this.changeNavSelectedClass("add")
      }
    }
  }, i.changeNavSelectedClass = function (e) {
    this.navSelectedElements.forEach(function (t) {
      t.classList[e]("is-nav-selected")
    })
  }, i.activateAsNavFor = function () {
    this.navCompanionSelect(!0)
  }, i.removeNavSelectedElements = function () {
    this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
  }, i.onNavStaticClick = function (e, t, i, n) {
    "number" == typeof n && this.navCompanion.selectCell(n)
  }, i.deactivateAsNavFor = function () {
    this.removeNavSelectedElements()
  }, i.destroyAsNavFor = function () {
    this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
  }, e
});

/*
 *  Project: Scrolly : parallax is easy as a matter of fact !
 *  Description: Based on jQuery boilerplate
 *  Author: Victor C. / Octave & Octave web agency
 *  Licence: MIT
 */
! function (t, i) {
  "function" == typeof define && define.amd ? define(["jquery"], i) : i(t.jQuery)
}(this, function (t) {
  "use strict";

  function i(i, o) {
    this.element = i, this.$element = t(this.element), this.options = t.extend({}, e, o), this._defaults = e, this._name = s, this.init()
  }
  var s = "scrolly",
    e = {
      bgParallax: !1
    };
  i.prototype.init = function () {
    var i = this;
    this.startPosition = this.$element.position().top, this.offsetTop = this.$element.offset().top, this.height = this.$element.outerHeight(!0), this.velocity = this.$element.attr("data-velocity"), this.bgStart = parseInt(this.$element.attr("data-fit"), 10), t(document).scroll(function () {
      i.didScroll = !0
    }), setInterval(function () {
      i.didScroll && (i.didScroll = !1, i.scrolly())
    }, 10)
  }, i.prototype.scrolly = function () {
    var i = t(window).scrollTop(),
      s = t(window).height(),
      e = this.startPosition;
    this.offsetTop >= i + s ? this.$element.addClass("scrolly-invisible") : e = this.$element.hasClass("scrolly-invisible") ? this.startPosition + (i + (s - this.offsetTop)) * this.velocity : this.startPosition + i * this.velocity, this.bgStart && (e += this.bgStart), this.options.bgParallax === !0 ? this.$element.css({
      backgroundPositionY: e + "px"
    }) : this.$element.css({
      top: e
    })
  }, t.fn[s] = function (e) {
    return this.each(function () {
      t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new i(this, e))
    })
  }
});

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
  var b, c, d, e, f, g, h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c)
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    },
    z = function (c) {
      return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    },
    A = function () {
      a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length;)
        if (b.pop() + "Transition" in a) return !0;
      return !1
    };
  t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g, h = c.items;
        for (e = 0; e < h.length; e++)
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break
          }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close()
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close()
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
      }
      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type)
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close()
      }), v.on("resize" + p, function () {
        b.updateSize()
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o)
      }
      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
    },
    close: function () {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close()
      }, b.st.removalDelay)) : b._close())
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
    },
    appendContent: function (a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
    },
    parseEl: function (c) {
      var d, e = b.items[c];
      if (e.tagName ? e = {
          el: a(e)
        } : (d = e.type, e = {
          data: e,
          src: e.src
        }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break
          } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
      }
      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
    },
    addGroup: function (a, c) {
      var d = function (d) {
        d.mfpEl = this, b._openClick(d, a, c)
      };
      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
    },
    _openClick: function (c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation()
        }), b.container.addClass("mfp-s-" + a), c = a
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0
        } else if (e && a.contains(document, c)) return !0;
        return !1
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    },
    _hasScrollBar: function (a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;
        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);
          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
          }
        } else b.find(p + "-" + c).html(d)
      })
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return b.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function (b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
    },
    close: function () {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function (b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c)
      if ("open" === c) {
        var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
          g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f)
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d
  };
  var C, D, E, F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), E = null)
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function () {
        b.types.push(F), w(h + "." + F, function () {
          G()
        })
      },
      getInline: function (c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");
          return c.inlineElement = f, f
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
      }
    }
  });
  var H, I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H)
    },
    K = function () {
      J(), b.req && b.req.abort()
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function () {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function (d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q)
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
          },
          error: function () {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), ""
      }
    }
  });
  var L, M = function (c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;
    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
        }
      },
      _onImageHasSize: function (a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L), L = setInterval(function () {
              return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
            }, f)
          };
        e(1)
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
          },
          g = function () {
            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
        }
        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
      }
    }
  });
  var N, O = function () {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img")
      }
    },
    proto: {
      initZoom: function () {
        var a, c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e, f, g = c.duration,
            j = function (a) {
              var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                f = "transition";
              return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
            },
            k = function () {
              b.content.css("visibility", "visible")
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded")
                  }, 16)
                }, g)
              }, 16)
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a)
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset())
              }, 16)
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null)
          })
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
      }
    }
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function () {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0))
        }), w(h + "." + P, function () {
          R()
        })
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
      }
    }
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
          })
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
              e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
              f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function () {
              b.prev()
            }), f.click(function () {
              b.next()
            }), b.container.append(e.add(f))
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null
          }, 16)
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
        })) : !1
      },
      next: function () {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
      },
      prev: function () {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
      },
      goTo: function (a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML()
      },
      preloadNearbyImages: function () {
        var a, c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
      },
      _preloadItem: function (c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
          }).attr("src", d.src)), d.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a
        })
      },
      ratio: 1
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            })
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c)
          }))
        }
      }
    }
  }), A()
});
/*! js-cookie v2.2.1 | MIT */
! function (a) {
  var b;
  if ("function" == typeof define && define.amd && (define(a), b = !0), "object" == typeof exports && (module.exports = a(), b = !0), !b) {
    var c = window.Cookies,
      d = window.Cookies = a();
    d.noConflict = function () {
      return window.Cookies = c, d
    }
  }
}(function () {
  function a() {
    for (var a = 0, b = {}; a < arguments.length; a++) {
      var c = arguments[a];
      for (var d in c) b[d] = c[d]
    }
    return b
  }

  function b(a) {
    return a.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
  }

  function c(d) {
    function e() {}

    function f(b, c, f) {
      if ("undefined" != typeof document) {
        f = a({
          path: "/"
        }, e.defaults, f), "number" == typeof f.expires && (f.expires = new Date(1 * new Date + 864e5 * f.expires)), f.expires = f.expires ? f.expires.toUTCString() : "";
        try {
          var g = JSON.stringify(c);
          /^[\{\[]/.test(g) && (c = g)
        } catch (j) {}
        c = d.write ? d.write(c, b) : encodeURIComponent(c + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), b = encodeURIComponent(b + "").replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
        var h = "";
        for (var i in f) f[i] && (h += "; " + i, !0 !== f[i] && (h += "=" + f[i].split(";")[0]));
        return document.cookie = b + "=" + c + h
      }
    }

    function g(a, c) {
      if ("undefined" != typeof document) {
        for (var e = {}, f = document.cookie ? document.cookie.split("; ") : [], g = 0; g < f.length; g++) {
          var h = f[g].split("="),
            i = h.slice(1).join("=");
          c || '"' !== i.charAt(0) || (i = i.slice(1, -1));
          try {
            var j = b(h[0]);
            if (i = (d.read || d)(i, j) || b(i), c) try {
              i = JSON.parse(i)
            } catch (k) {}
            if (e[j] = i, a === j) break
          } catch (k) {}
        }
        return a ? e[a] : e
      }
    }
    return e.set = f, e.get = function (a) {
      return g(a, !1)
    }, e.getJSON = function (a) {
      return g(a, !0)
    }, e.remove = function (b, c) {
      f(b, "", a(c, {
        expires: -1
      }))
    }, e.defaults = {}, e.withConverter = c, e
  }
  return c(function () {})
});
/**
 * Tweetie: A simple Twitter feed plugin
 * Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
 */
! function (e) {
  "use strict";
  e.fn.twittie = function () {
    var t = arguments[0] instanceof Object ? arguments[0] : {},
      a = "function" == typeof arguments[0] ? arguments[0] : arguments[1],
      r = e.extend({
        username: null,
        list: null,
        hashtag: null,
        count: 10,
        hideReplies: !1,
        dateFormat: "%b/%d/%Y",
        template: "{{date}} - {{tweet}}",
        apiPath: "api/tweet.php",
        loadingText: "Loading..."
      }, t);
    r.list && !r.username && e.error("If you want to fetch tweets from a list, you must define the username of the list owner.");
    var n = function (e) {
        var t = e.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi, '<a href="$1" target="_blank" title="Visit this link">$1</a>').replace(/#([a-zA-Z0-9_]+)/g, '<a href="https://twitter.com/search?q=%23$1&amp;src=hash" target="_blank" title="Search for #$1">#$1</a>').replace(/@([a-zA-Z0-9_]+)/g, '<a href="https://twitter.com/$1" target="_blank" title="$1 on Twitter">@$1</a>');
        return t
      },
      s = function (e) {
        var t = e.split(" ");
        e = new Date(Date.parse(t[1] + " " + t[2] + ", " + t[5] + " " + t[3] + " UTC"));
        for (var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], n = {
            "%d": e.getDate(),
            "%m": e.getMonth() + 1,
            "%b": a[e.getMonth()].substr(0, 3),
            "%B": a[e.getMonth()],
            "%y": String(e.getFullYear()).slice(-2),
            "%Y": e.getFullYear()
          }, s = r.dateFormat, u = r.dateFormat.match(/%[dmbByY]/g), i = 0, l = u.length; l > i; i++) s = s.replace(u[i], n[u[i]]);
        return s
      },
      u = function (e) {
        for (var t = r.template, a = ["date", "tweet", "avatar", "url", "retweeted", "screen_name", "user_name"], n = 0, s = a.length; s > n; n++) t = t.replace(new RegExp("{{" + a[n] + "}}", "gi"), e[a[n]]);
        return t
      };
    this.html("<span>" + r.loadingText + "</span>");
    var i = this;
    e.getJSON(r.apiPath, {
      username: r.username,
      list: r.list,
      hashtag: r.hashtag,
      count: r.count,
      exclude_replies: r.hideReplies
    }, function (e) {
      i.find("span").fadeOut("fast", function () {
        i.html("<ul></ul>");
        for (var t = 0; t < r.count; t++) {
          var l = !1;
          if (e[t]) l = e[t];
          else {
            if (void 0 === e.statuses || !e.statuses[t]) break;
            l = e.statuses[t]
          }
          var o = {
            user_name: l.user.name,
            date: s(l.created_at),
            tweet: n(l.retweeted ? "RT @" + l.user.screen_name + ": " + l.retweeted_status.text : l.text),
            avatar: '<img src="' + l.user.profile_image_url + '" />',
            url: "https://twitter.com/" + l.user.screen_name + "/status/" + l.id_str,
            retweeted: l.retweeted,
            screen_name: n("@" + l.user.screen_name)
          };
          i.find("ul").append("<li>" + u(o) + "</li>")
        }
        "function" == typeof a && a()
      })
    })
  }
}(jQuery);
/*
 * Copyright (C) 2009 Joel Sutherland
 * Licenced under the MIT license
 * http://www.newmediacampaigns.com/page/jquery-flickr-plugin
 */
(function ($) {
  $.fn.jflickrfeed = function (settings, callback) {
    settings = $.extend(true, {
      flickrbase: 'http://api.flickr.com/services/feeds/',
      feedapi: 'photos_public.gne',
      limit: 20,
      qstrings: {
        lang: 'en-us',
        format: 'json',
        jsoncallback: '?'
      },
      cleanDescription: true,
      useTemplate: true,
      itemTemplate: '',
      itemCallback: function () {}
    }, settings);
    var url = settings.flickrbase + settings.feedapi + '?';
    var first = true;
    for (var key in settings.qstrings) {
      if (!first)
        url += '&';
      url += key + '=' + settings.qstrings[key];
      first = false;
    }
    return $(this).each(function () {
      var $container = $(this);
      var container = this;
      $.getJSON(url, function (data) {
        $.each(data.items, function (i, item) {
          if (i < settings.limit) {
            if (settings.cleanDescription) {
              var regex = /<p>(.*?)<\/p>/g;
              var input = item.description;
              if (regex.test(input)) {
                item.description = input.match(regex)[2]
                if (item.description != undefined)
                  item.description = item.description.replace('<p>', '').replace('</p>', '');
              }
            }
            item['image_s'] = item.media.m.replace('_m', '_s');
            item['image_t'] = item.media.m.replace('_m', '_t');
            item['image_m'] = item.media.m.replace('_m', '_m');
            item['image'] = item.media.m.replace('_m', '');
            item['image_b'] = item.media.m.replace('_m', '_b');
            delete item.media;
            if (settings.useTemplate) {
              var template = settings.itemTemplate;
              for (var key in item) {
                var rgx = new RegExp('{{' + key + '}}', 'g');
                template = template.replace(rgx, item[key]);
              }
              $container.append(template)
            }
            settings.itemCallback.call(container, item);
          }
        });
        if ($.isFunction(callback)) {
          callback.call(container, data);
        }
      });
    });
  }
})(jQuery);
/* spectragram.js / by Adrian Quevedo */
"function" != typeof Object.create && (Object.create = function (t) {
    function e() {}
    return e.prototype = t, new e
  }),
  function (t, e, s, a) {
    var i = {
      API_URL: "https://api.instagram.com/v1",
      initialize: function (e, s) {
        this.elem = s, this.$elem = t(s), this.accessToken = t.fn.spectragram.accessData.accessToken, this.options = t.extend({}, t.fn.spectragram.options, e), this.endpoints = this.setEndpoints(), this.messages = {
          defaultImageAltText: "Instagram Photo related with " + this.options.query,
          notFound: "This user account is private or doesn't have any photos."
        }
      },
      setEndpoints: function () {
        return {
          usersSelf: "/users/self/?access_token=" + this.accessToken,
          usersMediaRecent: "/users/self/media/recent/?&count=" + this.options.max + "&access_token=" + this.accessToken,
          tagsMediaRecent: "/tags/" + this.options.query + "/media/recent?&count=" + this.options.max + "&access_token=" + this.accessToken
        }
      },
      getPhotos: function (e) {
        var s = this;
        s.fetch(e).done(function (e) {
          var a = s.options.query || "User";
          e.data.length ? s.display(e) : t.error("Spectragram.js - Error: " + a + " does not have photos.")
        })
      },
      getUserFeed: function () {
        this.getPhotos(this.endpoints.usersMediaRecent)
      },
      getRecentTagged: function () {
        this.getPhotos(this.endpoints.tagsMediaRecent)
      },
      fetch: function (e) {
        var s = this.API_URL + e;
        return t.ajax({
          type: "GET",
          dataType: "jsonp",
          cache: !1,
          url: s
        })
      },
      display: function (e) {
        var s, a, i, n, o, r, c, h, d, p = [];
        if (i = 0 === t(this.options.wrapEachWith).length, void 0 === e.data || 200 !== e.meta.code || 0 === e.data.length) i ? this.$elem.append(this.messages.notFound) : this.$elem.append(t(this.options.wrapEachWith).append(this.messages.notFound));
        else {
          c = this.options.max >= e.data.length ? e.data.length : this.options.max, h = this.options.size;
          for (var u = 0; u < c; u++) "small" === h ? (d = e.data[u].images.thumbnail.url, o = e.data[u].images.thumbnail.height, r = e.data[u].images.thumbnail.width) : "medium" === h ? (d = e.data[u].images.low_resolution.url, o = e.data[u].images.low_resolution.height, r = e.data[u].images.low_resolution.width) : (d = e.data[u].images.standard_resolution.url, o = e.data[u].images.standard_resolution.height, r = e.data[u].images.standard_resolution.width), n = null !== e.data[u].caption ? t("<span>").text(e.data[u].caption.text).html() : this.messages.defaultImageAltText, a = t("<img>", {
            alt: n,
            attr: {
              height: o,
              width: r
            },
            src: d
          }), s = t("<a>", {
            href: e.data[u].link,
            target: "_blank",
            title: n
          }).append(a), i ? p.push(s) : p.push(t(this.options.wrapEachWith).append(s));
          this.$elem.append(p)
        }
        "function" == typeof this.options.complete && this.options.complete.call(this)
      }
    };
    jQuery.fn.spectragram = function (e, s) {
      jQuery.fn.spectragram.accessData.accessToken ? this.each(function () {
        var a = Object.create(i);
        if (a.initialize(s, this), a[e]) return a[e](this);
        t.error("Method " + e + " does not exist on jQuery.spectragram")
      }) : t.error("You must define an accessToken on jQuery.spectragram")
    }, jQuery.fn.spectragram.options = {
      complete: null,
      max: 20,
      query: "instagram",
      size: "medium",
      wrapEachWith: "<li></li>"
    }, jQuery.fn.spectragram.accessData = {
      accessToken: null
    }
  }(jQuery, window, document);

/* https://github.com/mhuggins/jquery-countTo */
(function (e) {
  function t(e, t) {
    return e.toFixed(t.decimals)
  }
  e.fn.countTo = function (t) {
    t = t || {};
    return e(this).each(function () {
      function l() {
        a += i;
        u++;
        c(a);
        if (typeof n.onUpdate == "function") {
          n.onUpdate.call(s, a)
        }
        if (u >= r) {
          o.removeData("countTo");
          clearInterval(f.interval);
          a = n.to;
          if (typeof n.onComplete == "function") {
            n.onComplete.call(s, a)
          }
        }
      }

      function c(e) {
        var t = n.formatter.call(s, e, n);
        o.text(t)
      }
      var n = e.extend({}, e.fn.countTo.defaults, {
        from: e(this).data("from"),
        to: e(this).data("to"),
        speed: e(this).data("speed"),
        refreshInterval: e(this).data("refresh-interval"),
        decimals: e(this).data("decimals")
      }, t);
      var r = Math.ceil(n.speed / n.refreshInterval),
        i = (n.to - n.from) / r;
      var s = this,
        o = e(this),
        u = 0,
        a = n.from,
        f = o.data("countTo") || {};
      o.data("countTo", f);
      if (f.interval) {
        clearInterval(f.interval)
      }
      f.interval = setInterval(l, n.refreshInterval);
      c(a)
    })
  };
  e.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: t,
    onUpdate: null,
    onComplete: null
  }
})(jQuery);

/*! Morphext - v2.4.7 - 2016-11-04 */
! function (a) {
  "use strict";

  function b(b, c) {
    this.element = a(b), this.settings = a.extend({}, d, c), this._defaults = d, this._init()
  }
  var c = "Morphext",
    d = {
      animation: "bounceIn",
      separator: ",",
      speed: 2e3,
      complete: a.noop
    };
  b.prototype = {
    _init: function () {
      var b = this;
      this.phrases = [], this.element.addClass("morphext"), a.each(this.element.text().split(this.settings.separator), function (c, d) {
        b.phrases.push(a.trim(d))
      }), this.index = -1, this.animate(), this.start()
    },
    animate: function () {
      this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", a.isFunction(this.settings.complete) && this.settings.complete.call(this)
    },
    start: function () {
      var a = this;
      this._interval = setInterval(function () {
        a.animate()
      }, this.settings.speed)
    },
    stop: function () {
      this._interval = clearInterval(this._interval)
    }
  }, a.fn[c] = function (d) {
    return this.each(function () {
      a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d))
    })
  }
}(jQuery);
/*
 * easy-pie-chart - Lightweight plugin to render simple, animated and retina optimized pie charts - http://robert-fleischmann.de
 */
! function (a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function (a) {
    return b(a)
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function (a) {
  var b = function (a, b) {
      var c, d = document.createElement("canvas");
      a.appendChild(d), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
      var e = d.getContext("2d");
      d.width = d.height = b.size;
      var f = 1;
      window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
      var g = (b.size - b.lineWidth) / 2;
      b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function () {
        return +new Date
      };
      var h = function (a, b, c) {
          c = Math.min(Math.max(-1, c || 0), 1);
          var d = 0 >= c ? !0 : !1;
          e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
        },
        i = function () {
          var a, c;
          e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
          for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
          e.restore()
        },
        j = function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1e3 / 60)
          }
        }(),
        k = function () {
          b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
        };
      this.getCanvas = function () {
        return d
      }, this.getCtx = function () {
        return e
      }, this.clear = function () {
        e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
      }, this.draw = function (a) {
        b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
        var d;
        d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
      }.bind(this), this.animate = function (a, c) {
        var d = Date.now();
        b.onStart(a, c);
        var e = function () {
          var f = Math.min(Date.now() - d, b.animate.duration),
            g = b.easing(this, f, a, c - a, b.animate.duration);
          this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
        }.bind(this);
        j(e)
      }.bind(this)
    },
    c = function (a, c) {
      var d = {
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "#dfe0e0",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        trackWidth: void 0,
        size: 110,
        rotate: 0,
        animate: {
          duration: 1e3,
          enabled: !0
        },
        easing: function (a, b, c, d, e) {
          return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        onStart: function (a, b) {},
        onStep: function (a, b, c) {},
        onStop: function (a, b) {}
      };
      if ("undefined" != typeof b) d.renderer = b;
      else {
        if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
        d.renderer = SVGRenderer
      }
      var e = {},
        f = 0,
        g = function () {
          this.el = a, this.options = e;
          for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
          "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = {
            duration: e.animate,
            enabled: !0
          }), "boolean" != typeof e.animate || e.animate || (e.animate = {
            duration: 1e3,
            enabled: e.animate
          }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
        }.bind(this);
      this.update = function (a) {
        return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
      }.bind(this), this.disableAnimation = function () {
        return e.animate.enabled = !1, this
      }, this.enableAnimation = function () {
        return e.animate.enabled = !0, this
      }, g()
    };
  a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;
      a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
    })
  }
});
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 */
! function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
  "use strict";

  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
    throw new Error("Couldn't cast `" + a + "` to a date object.")
  }

  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b)
  }

  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
        }
      return b = b.replace(/%%/, "%")
    }
  }

  function e(a, b) {
    var c = "s",
      d = "";
    return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d
  }
  var f = [],
    g = [],
    h = {
      precision: 100,
      elapse: !1,
      defer: !1
    };
  g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds"
    },
    j = function (b, c, d) {
      this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.firstTick = !0, this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start()
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(), this.interval = setInterval(function () {
        a.update.call(a)
      }, this.options.precision)
    },
    stop: function () {
      clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
    },
    toggle: function () {
      this.interval ? this.stop() : this.start()
    },
    pause: function () {
      this.stop()
    },
    resume: function () {
      this.start()
    },
    remove: function () {
      this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
    },
    setFinalDate: function (a) {
      this.finalDate = b(a)
    },
    update: function () {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var a, b = new Date;
      return a = this.finalDate.getTime() - b.getTime(), a = Math.ceil(a / 1e3), a = !this.options.elapse && a < 0 ? 0 : Math.abs(a), this.totalSecsLeft === a || this.firstTick ? void(this.firstTick = !1) : (this.totalSecsLeft = a, this.elapsed = b >= this.finalDate, this.offset = {
        seconds: this.totalSecsLeft % 60,
        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
        years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
        totalMinutes: Math.floor(this.totalSecsLeft / 60),
        totalSeconds: this.totalSecsLeft
      }, void(this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))))
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + ".countdown");
      c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
    }
  }), a.fn.countdown = function () {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.each(function () {
      var c = a(this).data("countdown-instance");
      if (void 0 !== c) {
        var d = f[c],
          e = b[0];
        j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
      } else new j(this, b[0], b[1])
    })
  }
});

! function (e) {
  e.fn.downCount = function (t, n) {
    var r = e.extend({
      date: null,
      offset: null
    }, t);
    r.date || e.error("Date is not defined."), Date.parse(r.date) || e.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
    var o = this,
      f = function () {
        var e = new Date,
          t = e.getTime() + 6e4 * e.getTimezoneOffset();
        return new Date(t + 36e5 * r.offset)
      };
    var i = setInterval(function () {
      var e = new Date(r.date) - f();
      if (e < 0) return clearInterval(i), void(n && "function" == typeof n && n());
      var t = Math.floor(e / 864e5),
        a = Math.floor(e % 864e5 / 36e5),
        d = Math.floor(e % 36e5 / 6e4),
        s = Math.floor(e % 6e4 / 1e3),
        u = 1 === (t = String(t).length >= 2 ? t : "0" + t) ? "day" : "days",
        l = 1 === (a = String(a).length >= 2 ? a : "0" + a) ? "hour" : "hours",
        h = 1 === (d = String(d).length >= 2 ? d : "0" + d) ? "minute" : "minutes",
        c = 1 === (s = String(s).length >= 2 ? s : "0" + s) ? "second" : "seconds";
      o.find(".days").text(t), o.find(".hours").text(a), o.find(".minutes").text(d), o.find(".seconds").text(s), o.find(".days_ref").text(u), o.find(".hours_ref").text(l), o.find(".minutes_ref").text(h), o.find(".seconds_ref").text(c)
    }, 1e3)
  }
}(jQuery);

/*sticky sidebar*/
! function (i) {
  i.fn.theiaStickySidebar = function (t) {
    function e(t, e) {
      var a = o(t, e);
      a || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function (t, e) {
        return function (a) {
          var n = o(t, e);
          n && i(this).unbind(a)
        }
      }(t, e)), i(window).on("resize." + t.namespace, function (t, e) {
        return function (a) {
          var n = o(t, e);
          n && i(this).unbind(a)
        }
      }(t, e)))
    }

    function o(t, e) {
      return t.initialized === !0 || !(i("body").width() < t.minWidth) && (a(t, e), !0)
    }

    function a(t, e) {
      t.initialized = !0;
      var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
      0 === o.length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function () {
        function e() {
          a.fixedScrollTop = 0, a.sidebar.css({
            "min-height": "1px"
          }), a.stickySidebar.css({
            position: "static",
            width: "",
            transform: "none"
          })
        }

        function o(t) {
          var e = t.height();
          return t.children().each(function () {
            e = Math.max(e, i(this).height())
          }), e
        }
        var a = {};
        if (a.sidebar = i(this), a.options = t || {}, a.container = i(a.options.containerSelector), 0 == a.container.length && (a.container = a.sidebar.parent()), a.sidebar.parents().css("-webkit-transform", "none"), a.sidebar.css({
            position: a.options.defaultPosition,
            overflow: "visible",
            "-webkit-box-sizing": "border-box",
            "-moz-box-sizing": "border-box",
            "box-sizing": "border-box"
          }), a.stickySidebar = a.sidebar.find(".theiaStickySidebar"), 0 == a.stickySidebar.length) {
          var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
          a.sidebar.find("script").filter(function (i, t) {
            return 0 === t.type.length || t.type.match(s)
          }).remove(), a.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()), a.sidebar.append(a.stickySidebar)
        }
        a.marginBottom = parseInt(a.sidebar.css("margin-bottom")), a.paddingTop = parseInt(a.sidebar.css("padding-top")), a.paddingBottom = parseInt(a.sidebar.css("padding-bottom"));
        var r = a.stickySidebar.offset().top,
          d = a.stickySidebar.outerHeight();
        a.stickySidebar.css("padding-top", 1), a.stickySidebar.css("padding-bottom", 1), r -= a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight() - d - r, 0 == r ? (a.stickySidebar.css("padding-top", 0), a.stickySidebarPaddingTop = 0) : a.stickySidebarPaddingTop = 1, 0 == d ? (a.stickySidebar.css("padding-bottom", 0), a.stickySidebarPaddingBottom = 0) : a.stickySidebarPaddingBottom = 1, a.previousScrollTop = null, a.fixedScrollTop = 0, e(), a.onScroll = function (a) {
          if (a.stickySidebar.is(":visible")) {
            if (i("body").width() < a.options.minWidth) return void e();
            if (a.options.disableOnResponsiveLayouts) {
              var s = a.sidebar.outerWidth("none" == a.sidebar.css("float"));
              if (s + 50 > a.container.width()) return void e()
            }
            var r = i(document).scrollTop(),
              d = "static";
            if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
              var c, p = a.paddingTop + t.additionalMarginTop,
                b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
                l = a.sidebar.offset().top,
                f = a.sidebar.offset().top + o(a.container),
                h = 0 + t.additionalMarginTop,
                g = a.stickySidebar.outerHeight() + p + b < i(window).height();
              c = g ? h + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
              var u = l - r + a.paddingTop,
                S = f - r - a.paddingBottom - a.marginBottom,
                y = a.stickySidebar.offset().top - r,
                m = a.previousScrollTop - r;
              "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (y += m), "stick-to-top" == a.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == a.options.sidebarBehavior && (y = c - a.stickySidebar.outerHeight()), y = m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight()), y = Math.max(y, u), y = Math.min(y, S - a.stickySidebar.outerHeight());
              var k = a.container.height() == a.stickySidebar.outerHeight();
              d = (k || y != h) && (k || y != c - a.stickySidebar.outerHeight()) ? r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
            }
            if ("fixed" == d) {
              var v = i(document).scrollLeft();
              a.stickySidebar.css({
                position: "fixed",
                width: n(a.stickySidebar) + "px",
                transform: "translateY(" + y + "px)",
                left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left")) - v + "px",
                top: "0px"
              })
            } else if ("absolute" == d) {
              var x = {};
              "absolute" != a.stickySidebar.css("position") && (x.position = "absolute", x.transform = "translateY(" + (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + "px)", x.top = "0px"), x.width = n(a.stickySidebar) + "px", x.left = "", a.stickySidebar.css(x)
            } else "static" == d && e();
            "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({
              "min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom
            }), a.previousScrollTop = r
          }
        }, a.onScroll(a), i(document).on("scroll." + a.options.namespace, function (i) {
          return function () {
            i.onScroll(i)
          }
        }(a)), i(window).on("resize." + a.options.namespace, function (i) {
          return function () {
            i.stickySidebar.css({
              position: "static"
            }), i.onScroll(i)
          }
        }(a)), "undefined" != typeof ResizeSensor && new ResizeSensor(a.stickySidebar[0], function (i) {
          return function () {
            i.onScroll(i)
          }
        }(a))
      })
    }

    function n(i) {
      var t;
      try {
        t = i[0].getBoundingClientRect().width
      } catch (i) {}
      return "undefined" == typeof t && (t = i.width()), t
    }
    var s = {
      containerSelector: "",
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: !0,
      minWidth: 0,
      disableOnResponsiveLayouts: !0,
      sidebarBehavior: "modern",
      defaultPosition: "relative",
      namespace: "TSS"
    };
    return t = i.extend(s, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(t, this), this
  }
}(jQuery);
/*
 * Project: Bootstrap Notify = v3.1.5
 * Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
 * Author: Mouse0270 aka Robert McIntosh
 * License: MIT License
 * Website: https://github.com/mouse0270/bootstrap-growl
 */
! function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t) {
  function s(s) {
    var i = !1;
    return t('[data-notify="container"]').each(function (e, n) {
      var a = t(n),
        o = a.find('[data-notify="title"]').html().trim(),
        r = a.find('[data-notify="message"]').html().trim(),
        l = o === t("<div>" + s.settings.content.title + "</div>").html().trim(),
        d = r === t("<div>" + s.settings.content.message + "</div>").html().trim(),
        c = a.hasClass("alert-" + s.settings.type);
      return l && d && c && (i = !0), !i
    }), i
  }

  function i(i, n, a) {
    var o = {
      content: {
        message: "object" == typeof n ? n.message : n,
        title: n.title ? n.title : "",
        icon: n.icon ? n.icon : "",
        url: n.url ? n.url : "#",
        target: n.target ? n.target : "-"
      }
    };
    a = t.extend(!0, {}, o, a), this.settings = t.extend(!0, {}, e, a), this._defaults = e, "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
      start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
      end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
    }, "number" == typeof this.settings.offset && (this.settings.offset = {
      x: this.settings.offset,
      y: this.settings.offset
    }), (this.settings.allow_duplicates || !this.settings.allow_duplicates && !s(this)) && this.init()
  }
  var e = {
    element: "body",
    position: null,
    type: "info",
    allow_dismiss: !0,
    allow_duplicates: !0,
    newest_on_top: !1,
    showProgressbar: !1,
    placement: {
      from: "top",
      align: "right"
    },
    offset: 20,
    spacing: 10,
    z_index: 1031,
    delay: 5e3,
    timer: 1e3,
    url_target: "_blank",
    mouse_over: null,
    animate: {
      enter: "animated fadeInDown",
      exit: "animated fadeOutUp"
    },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    onClick: null,
    icon_type: "class",
    template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="p-progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
  };
  String.format = function () {
    var t = arguments,
      s = arguments[0];
    return s.replace(/(\{\{\d\}\}|\{\d\})/g, function (s) {
      if ("{{" === s.substring(0, 2)) return s;
      var i = parseInt(s.match(/\d/)[0]);
      return t[i + 1]
    })
  }, t.extend(i.prototype, {
    init: function () {
      var t = this;
      this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = {
        $ele: this.$ele,
        update: function (s, i) {
          var e = {};
          "string" == typeof s ? e[s] = i : e = s;
          for (var n in e) switch (n) {
            case "type":
              this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("p-progress-bar-" + t.settings.type), t.settings.type = e[n], this.$ele.addClass("alert-" + e[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("p-progress-bar-" + e[n]);
              break;
            case "icon":
              var a = this.$ele.find('[data-notify="icon"]');
              "class" === t.settings.icon_type.toLowerCase() ? a.removeClass(t.settings.content.icon).addClass(e[n]) : (a.is("img") || a.find("img"), a.attr("src", e[n])), t.settings.content.icon = e[s];
              break;
            case "progress":
              var o = t.settings.delay - t.settings.delay * (e[n] / 100);
              this.$ele.data("notify-delay", o), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", e[n]).css("width", e[n] + "%");
              break;
            case "url":
              this.$ele.find('[data-notify="url"]').attr("href", e[n]);
              break;
            case "target":
              this.$ele.find('[data-notify="url"]').attr("target", e[n]);
              break;
            default:
              this.$ele.find('[data-notify="' + n + '"]').html(e[n])
          }
          var r = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
          t.reposition(r)
        },
        close: function () {
          t.close()
        }
      }
    },
    buildNotify: function () {
      var s = this.settings.content;
      this.$ele = t(String.format(this.settings.template, this.settings.type, s.title, s.message, s.url, s.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
    },
    setIcon: function () {
      "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
    },
    styleDismiss: function () {
      this.$ele.find('[data-notify="dismiss"]').css({
        position: "absolute",
        right: "10px",
        top: "5px",
        zIndex: this.settings.z_index + 2
      })
    },
    styleURL: function () {
      this.$ele.find('[data-notify="url"]').css({
        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: this.settings.z_index + 1
      })
    },
    placement: function () {
      var s = this,
        i = this.settings.offset.y,
        e = {
          display: "inline-block",
          margin: "0px auto",
          position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
          transition: "all .5s ease-in-out",
          zIndex: this.settings.z_index
        },
        n = !1,
        a = this.settings;
      switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
        i = Math.max(i, parseInt(t(this).css(a.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(a.spacing))
      }), this.settings.newest_on_top === !0 && (i = this.settings.offset.y), e[this.settings.placement.from] = i + "px", this.settings.placement.align) {
        case "left":
        case "right":
          e[this.settings.placement.align] = this.settings.offset.x + "px";
          break;
        case "center":
          e.left = 0, e.right = 0
      }
      this.$ele.css(e).addClass(this.settings.animate.enter), t.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (t, i) {
        s.$ele[0].style[i + "AnimationIterationCount"] = 1
      }), t(this.settings.element).append(this.$ele), this.settings.newest_on_top === !0 && (i = parseInt(i) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(i)), t.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function () {
        n = !0
      }).one(this.animations.end, function () {
        s.$ele.removeClass(s.settings.animate.enter), t.isFunction(s.settings.onShown) && s.settings.onShown.call(this)
      }), setTimeout(function () {
        n || t.isFunction(s.settings.onShown) && s.settings.onShown.call(this)
      }, 600)
    },
    bind: function () {
      var s = this;
      if (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
          s.close()
        }), t.isFunction(s.settings.onClick) && this.$ele.on("click", function (t) {
          t.target != s.$ele.find('[data-notify="dismiss"]')[0] && s.settings.onClick.call(this, t)
        }), this.$ele.mouseover(function () {
          t(this).data("data-hover", "true")
        }).mouseout(function () {
          t(this).data("data-hover", "false")
        }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
        s.$ele.data("notify-delay", s.settings.delay);
        var i = setInterval(function () {
          var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer;
          if ("false" === s.$ele.data("data-hover") && "pause" === s.settings.mouse_over || "pause" != s.settings.mouse_over) {
            var e = (s.settings.delay - t) / s.settings.delay * 100;
            s.$ele.data("notify-delay", t), s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", e).css("width", e + "%")
          }
          t <= -s.settings.timer && (clearInterval(i), s.close())
        }, s.settings.timer)
      }
    },
    close: function () {
      var s = this,
        i = parseInt(this.$ele.css(this.settings.placement.from)),
        e = !1;
      this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), s.reposition(i), t.isFunction(s.settings.onClose) && s.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function () {
        e = !0
      }).one(this.animations.end, function () {
        t(this).remove(), t.isFunction(s.settings.onClosed) && s.settings.onClosed.call(this)
      }), setTimeout(function () {
        e || (s.$ele.remove(), s.settings.onClosed && s.settings.onClosed(s.$ele))
      }, 600)
    },
    reposition: function (s) {
      var i = this,
        e = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
        n = this.$ele.nextAll(e);
      this.settings.newest_on_top === !0 && (n = this.$ele.prevAll(e)), n.each(function () {
        t(this).css(i.settings.placement.from, s), s = parseInt(s) + parseInt(i.settings.spacing) + t(this).outerHeight()
      })
    }
  }), t.notify = function (t, s) {
    var e = new i(this, t, s);
    return e.notify
  }, t.notifyDefaults = function (s) {
    return e = t.extend(!0, {}, e, s)
  }, t.notifyClose = function (s) {
    "undefined" == typeof s || "all" === s ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === s || "info" === s || "warning" === s || "danger" === s ? t(".alert-" + s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : s ? t(s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + s + '"]').find('[data-notify="dismiss"]').trigger("click")
  }, t.notifyCloseExcept = function (s) {
    "success" === s || "info" === s || "warning" === s || "danger" === s ? t("[data-notify]").not(".alert-" + s).find('[data-notify="dismiss"]').trigger("click") : t("[data-notify]").not(s).find('[data-notify="dismiss"]').trigger("click")
  }
});


/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
! function (t, e) {
  "use strict";

  function r(r, a, i, u, l) {
    function f() {
      L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function () {
        s(!0)
      }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function (t) {
        "resize" === t.type && (w = B = -1), s(t.all)
      }), u.a = function (t) {
        t = c(t), i.push.apply(i, t)
      }, u.g = function () {
        return i = n(i).filter(function () {
          return !n(this).data(a.loadedName)
        })
      }, u.f = function (t) {
        for (var e = 0; e < t.length; e++) {
          var r = i.filter(function () {
            return this === t[e]
          });
          r.length && s(!1, r)
        }
      }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e))
    }

    function c(t) {
      var i = a.defaultImage,
        o = a.placeholder,
        u = a.imageBase,
        l = a.srcsetAttribute,
        f = a.loaderAttribute,
        c = a._f || {};
      t = n(t).filter(function () {
        var t = n(this),
          r = m(this);
        return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e)
      }).data("plugin_" + a.name, r);
      for (var s = 0, d = t.length; s < d; s++) {
        var A = n(t[s]),
          g = m(t[s]),
          h = A.attr(a.imageBaseAttribute) || u;
        g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')")
      }
      return t
    }

    function s(t, e) {
      if (!i.length) return void(a.autoDestroy && r.destroy());
      for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
        if (t || e || A(o[s])) {
          var g = n(o[s]),
            h = m(o[s]),
            b = g.attr(a.attribute),
            v = g.attr(a.imageBaseAttribute) || l,
            p = g.attr(a.loaderAttribute);
          g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p))
        } u && (i = n(i).filter(function () {
        return !n(this).data(c)
      }))
    }

    function d(t, e, r, i) {
      ++z;
      var o = function () {
        y("onError", t), p(), o = n.noop
      };
      y("beforeLoad", t);
      var u = a.attribute,
        l = a.srcsetAttribute,
        f = a.sizesAttribute,
        c = a.retinaAttribute,
        s = a.removeAttribute,
        d = a.loadedName,
        A = t.attr(c);
      if (i) {
        var g = function () {
          s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop
        };
        t.off(I).one(I, o).one(D, g), y(i, t, function (e) {
          e ? (t.off(D), g()) : (t.off(I), o())
        }) || t.trigger(I)
      } else {
        var h = n(new Image);
        h.one(I, o).one(D, function () {
          t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p()
        });
        var m = (L && A ? A : t.attr(u)) || "";
        h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D)
      }
    }

    function A(t) {
      var e = t.getBoundingClientRect(),
        r = a.scrollDirection,
        n = a.threshold,
        i = h() + n > e.top && -n < e.bottom,
        o = g() + n > e.left && -n < e.right;
      return "vertical" === r ? i : "horizontal" === r ? o : i && o
    }

    function g() {
      return w >= 0 ? w : w = n(t).width()
    }

    function h() {
      return B >= 0 ? B : B = n(t).height()
    }

    function m(t) {
      return t.tagName.toLowerCase()
    }

    function b(t, e) {
      if (e) {
        var r = t.split(",");
        t = "";
        for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "")
      }
      return t
    }

    function v(t, e) {
      var n, i = 0;
      return function (o, u) {
        function l() {
          i = +new Date, e.call(r, o)
        }
        var f = +new Date - i;
        n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f)
      }
    }

    function p() {
      --z, i.length || z || y("onFinishedAll")
    }

    function y(t, e, n) {
      return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0)
    }
    var z = 0,
      w = -1,
      B = -1,
      L = !1,
      T = "afterLoad",
      D = "load",
      I = "error",
      N = "img",
      E = "src",
      F = "srcset",
      C = "sizes",
      O = "background-image";
    "event" === a.bind || o ? f() : n(t).on(D + "." + l, f)
  }

  function a(a, o) {
    var u = this,
      l = n.extend({}, u.config, o),
      f = {},
      c = l.name + "-" + ++i;
    return u.config = function (t, r) {
      return r === e ? l[t] : (l[t] = r, u)
    }, u.addItems = function (t) {
      return f.a && f.a("string" === n.type(t) ? n(t) : t), u
    }, u.getItems = function () {
      return f.g ? f.g() : {}
    }, u.update = function (t) {
      return f.e && f.e({}, !t), u
    }, u.force = function (t) {
      return f.f && f.f("string" === n.type(t) ? n(t) : t), u
    }, u.loadAll = function () {
      return f.e && f.e({
        all: !0
      }, !0), u
    }, u.destroy = function () {
      return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e
    }, r(u, l, a, f, c), l.chainable ? a : u
  }
  var n = t.jQuery || t.Zepto,
    i = 0,
    o = !1;
  n.fn.Lazy = n.fn.lazy = function (t) {
    return new a(this, t)
  }, n.Lazy = n.lazy = function (t, r, i) {
    if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
      t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
      for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++)(o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);
      for (var c = 0, s = r.length; c < s; c++) u[r[c]] = t[0]
    }
  }, a.prototype.config = {
    name: "lazy",
    chainable: !0,
    autoDestroy: !0,
    bind: "load",
    threshold: 500,
    visibleOnly: !1,
    appendScroll: t,
    scrollDirection: "both",
    imageBase: null,
    defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    placeholder: null,
    delay: -1,
    combined: !1,
    attribute: "data-src",
    srcsetAttribute: "data-srcset",
    sizesAttribute: "data-sizes",
    retinaAttribute: "data-retina",
    loaderAttribute: "data-loader",
    imageBaseAttribute: "data-imagebase",
    removeAttribute: !0,
    handledName: "handled",
    loadedName: "loaded",
    effect: "show",
    effectTime: 0,
    enableThrottle: !0,
    throttle: 250,
    beforeLoad: e,
    afterLoad: e,
    onError: e,
    onFinishedAll: e
  }, n(t).on("load", function () {
    o = !0
  })
}(window);
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function () {
  "use strict";

  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element) throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
  }
  var e = 0,
    i = {};
  t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t)
  }, t.prototype.trigger = function (t) {
    this.enabled && this.callback && this.callback.apply(this, t)
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete i[this.key]
  }, t.prototype.disable = function () {
    return this.enabled = !1, this
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this
  }, t.prototype.next = function () {
    return this.group.next(this)
  }, t.prototype.previous = function () {
    return this.group.previous(this)
  }, t.invokeAll = function (t) {
    var e = [];
    for (var o in i) e.push(i[o]);
    for (var n = 0, r = e.length; r > n; n++) e[n][t]()
  }, t.destroyAll = function () {
    t.invokeAll("destroy")
  }, t.disableAll = function () {
    t.invokeAll("disable")
  }, t.enableAll = function () {
    t.Context.refreshAll();
    for (var e in i) i[e].enabled = !0;
    return this
  }, t.refreshAll = function () {
    t.Context.refreshAll()
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function () {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    "right-in-view": function () {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }, window.Waypoint = t
}(),
function () {
  "use strict";

  function t(t) {
    window.setTimeout(t, 1e3 / 60)
  }

  function e(t) {
    this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
  }
  var i = 0,
    o = {},
    n = window.Waypoint,
    r = window.onload;
  e.prototype.add = function (t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh()
  }, e.prototype.checkEmpty = function () {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
      e = this.Adapter.isEmptyObject(this.waypoints.vertical),
      i = this.element == this.element.window;
    t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
  }, e.prototype.createThrottledResizeHandler = function () {
    function t() {
      e.handleResize(), e.didResize = !1
    }
    var e = this;
    this.adapter.on("resize.waypoints", function () {
      e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
    })
  }, e.prototype.createThrottledScrollHandler = function () {
    function t() {
      e.handleScroll(), e.didScroll = !1
    }
    var e = this;
    this.adapter.on("scroll.waypoints", function () {
      (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
    })
  }, e.prototype.handleResize = function () {
    n.Context.refreshAll()
  }, e.prototype.handleScroll = function () {
    var t = {},
      e = {
        horizontal: {
          newScroll: this.adapter.scrollLeft(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left"
        },
        vertical: {
          newScroll: this.adapter.scrollTop(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up"
        }
      };
    for (var i in e) {
      var o = e[i],
        n = o.newScroll > o.oldScroll,
        r = n ? o.forward : o.backward;
      for (var s in this.waypoints[i]) {
        var a = this.waypoints[i][s];
        if (null !== a.triggerPoint) {
          var l = o.oldScroll < a.triggerPoint,
            h = o.newScroll >= a.triggerPoint,
            p = l && h,
            u = !l && !h;
          (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
        }
      }
    }
    for (var c in t) t[c].flushTriggers();
    this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
    }
  }, e.prototype.innerHeight = function () {
    return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
  }, e.prototype.remove = function (t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty()
  }, e.prototype.innerWidth = function () {
    return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
  }, e.prototype.destroy = function () {
    var t = [];
    for (var e in this.waypoints)
      for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
    for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
  }, e.prototype.refresh = function () {
    var t, e = this.element == this.element.window,
      i = e ? void 0 : this.adapter.offset(),
      o = {};
    this.handleScroll(), t = {
      horizontal: {
        contextOffset: e ? 0 : i.left,
        contextScroll: e ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: e ? 0 : i.top,
        contextScroll: e ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    };
    for (var r in t) {
      var s = t[r];
      for (var a in this.waypoints[r]) {
        var l, h, p, u, c, d = this.waypoints[r][a],
          f = d.options.offset,
          w = d.triggerPoint,
          y = 0,
          g = null == w;
        d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
      }
    }
    return n.requestAnimationFrame(function () {
      for (var t in o) o[t].flushTriggers()
    }), this
  }, e.findOrCreateByElement = function (t) {
    return e.findByElement(t) || new e(t)
  }, e.refreshAll = function () {
    for (var t in o) o[t].refresh()
  }, e.findByElement = function (t) {
    return o[t.waypointContextKey]
  }, window.onload = function () {
    r && r(), e.refreshAll()
  }, n.requestAnimationFrame = function (e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i.call(window, e)
  }, n.Context = e
}(),
function () {
  "use strict";

  function t(t, e) {
    return t.triggerPoint - e.triggerPoint
  }

  function e(t, e) {
    return e.triggerPoint - t.triggerPoint
  }

  function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
  }
  var o = {
      vertical: {},
      horizontal: {}
    },
    n = window.Waypoint;
  i.prototype.add = function (t) {
    this.waypoints.push(t)
  }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }, i.prototype.flushTriggers = function () {
    for (var i in this.triggerQueues) {
      var o = this.triggerQueues[i],
        n = "up" === i || "left" === i;
      o.sort(n ? e : t);
      for (var r = 0, s = o.length; s > r; r += 1) {
        var a = o[r];
        (a.options.continuous || r === o.length - 1) && a.trigger([i])
      }
    }
    this.clearTriggerQueues()
  }, i.prototype.next = function (e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints),
      o = i === this.waypoints.length - 1;
    return o ? null : this.waypoints[i + 1]
  }, i.prototype.previous = function (e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints);
    return i ? this.waypoints[i - 1] : null
  }, i.prototype.queueTrigger = function (t, e) {
    this.triggerQueues[e].push(t)
  }, i.prototype.remove = function (t) {
    var e = n.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1)
  }, i.prototype.first = function () {
    return this.waypoints[0]
  }, i.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1]
  }, i.findOrCreate = function (t) {
    return o[t.axis][t.name] || new i(t)
  }, n.Group = i
}(),
function () {
  "use strict";

  function t(t) {
    this.$element = e(t)
  }
  var e = window.jQuery,
    i = window.Waypoint;
  e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
    t.prototype[i] = function () {
      var t = Array.prototype.slice.call(arguments);
      return this.$element[i].apply(this.$element, t)
    }
  }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
    t[o] = e[o]
  }), i.adapters.push({
    name: "jquery",
    Adapter: t
  }), i.Adapter = t
}(),
function () {
  "use strict";

  function t(t) {
    return function () {
      var i = [],
        o = arguments[0];
      return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
        var n = t.extend({}, o, {
          element: this
        });
        "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
      }), i
    }
  }
  var e = window.Waypoint;
  window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();