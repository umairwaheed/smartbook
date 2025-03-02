(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) f(d);
  new MutationObserver((d) => {
    for (const v of d)
      if (v.type === "childList")
        for (const x of v.addedNodes) x.tagName === "LINK" && x.rel === "modulepreload" && f(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(d) {
    const v = {};
    return (
      d.integrity && (v.integrity = d.integrity),
      d.referrerPolicy && (v.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : d.crossOrigin === "anonymous"
          ? (v.credentials = "omit")
          : (v.credentials = "same-origin"),
      v
    );
  }
  function f(d) {
    if (d.ep) return;
    d.ep = !0;
    const v = o(d);
    fetch(d.href, v);
  }
})();
function O0(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var bf = { exports: {} },
  Uu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td;
function z0() {
  if (Td) return Uu;
  Td = 1;
  var c = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function o(f, d, v) {
    var x = null;
    if ((v !== void 0 && (x = "" + v), d.key !== void 0 && (x = "" + d.key), "key" in d)) {
      v = {};
      for (var A in d) A !== "key" && (v[A] = d[A]);
    } else v = d;
    return (d = v.ref), { $$typeof: c, type: f, key: x, ref: d !== void 0 ? d : null, props: v };
  }
  return (Uu.Fragment = s), (Uu.jsx = o), (Uu.jsxs = o), Uu;
}
var xd;
function _0() {
  return xd || ((xd = 1), (bf.exports = z0())), bf.exports;
}
var O = _0(),
  Sf = { exports: {} },
  et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad;
function D0() {
  if (Ad) return et;
  Ad = 1;
  var c = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    v = Symbol.for("react.consumer"),
    x = Symbol.for("react.context"),
    A = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    M = Symbol.for("react.lazy"),
    B = Symbol.iterator;
  function D(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (B && y[B]) || y["@@iterator"]), typeof y == "function" ? y : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    Z = {};
  function Y(y, H, W) {
    (this.props = y), (this.context = H), (this.refs = Z), (this.updater = W || C);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (y, H) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, y, H, "setState");
    }),
    (Y.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function q() {}
  q.prototype = Y.prototype;
  function J(y, H, W) {
    (this.props = y), (this.context = H), (this.refs = Z), (this.updater = W || C);
  }
  var Q = (J.prototype = new q());
  (Q.constructor = J), j(Q, Y.prototype), (Q.isPureReactComponent = !0);
  var ht = Array.isArray,
    P = { H: null, A: null, T: null, S: null },
    zt = Object.prototype.hasOwnProperty;
  function Lt(y, H, W, k, w, ft) {
    return (W = ft.ref), { $$typeof: c, type: y, key: H, ref: W !== void 0 ? W : null, props: ft };
  }
  function Qt(y, H) {
    return Lt(y.type, H, void 0, void 0, void 0, y.props);
  }
  function X(y) {
    return typeof y == "object" && y !== null && y.$$typeof === c;
  }
  function lt(y) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (W) {
        return H[W];
      })
    );
  }
  var Jt = /\/+/g;
  function He(y, H) {
    return typeof y == "object" && y !== null && y.key != null ? lt("" + y.key) : H.toString(36);
  }
  function Ae() {}
  function Be(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (
          (typeof y.status == "string"
            ? y.then(Ae, Ae)
            : ((y.status = "pending"),
              y.then(
                function (H) {
                  y.status === "pending" && ((y.status = "fulfilled"), (y.value = H));
                },
                function (H) {
                  y.status === "pending" && ((y.status = "rejected"), (y.reason = H));
                }
              )),
          y.status)
        ) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function Ft(y, H, W, k, w) {
    var ft = typeof y;
    (ft === "undefined" || ft === "boolean") && (y = null);
    var at = !1;
    if (y === null) at = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case c:
            case s:
              at = !0;
              break;
            case M:
              return (at = y._init), Ft(at(y._payload), H, W, k, w);
          }
      }
    if (at)
      return (
        (w = w(y)),
        (at = k === "" ? "." + He(y, 0) : k),
        ht(w)
          ? ((W = ""),
            at != null && (W = at.replace(Jt, "$&/") + "/"),
            Ft(w, H, W, "", function (Dt) {
              return Dt;
            }))
          : w != null &&
            (X(w) &&
              (w = Qt(
                w,
                W +
                  (w.key == null || (y && y.key === w.key)
                    ? ""
                    : ("" + w.key).replace(Jt, "$&/") + "/") +
                  at
              )),
            H.push(w)),
        1
      );
    at = 0;
    var kt = k === "" ? "." : k + ":";
    if (ht(y))
      for (var dt = 0; dt < y.length; dt++)
        (k = y[dt]), (ft = kt + He(k, dt)), (at += Ft(k, H, W, ft, w));
    else if (((dt = D(y)), typeof dt == "function"))
      for (y = dt.call(y), dt = 0; !(k = y.next()).done; )
        (k = k.value), (ft = kt + He(k, dt++)), (at += Ft(k, H, W, ft, w));
    else if (ft === "object") {
      if (typeof y.then == "function") return Ft(Be(y), H, W, k, w);
      throw (
        ((H = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : H) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return at;
  }
  function L(y, H, W) {
    if (y == null) return y;
    var k = [],
      w = 0;
    return (
      Ft(y, k, "", "", function (ft) {
        return H.call(W, ft, w++);
      }),
      k
    );
  }
  function tt(y) {
    if (y._status === -1) {
      var H = y._result;
      (H = H()),
        H.then(
          function (W) {
            (y._status === 0 || y._status === -1) && ((y._status = 1), (y._result = W));
          },
          function (W) {
            (y._status === 0 || y._status === -1) && ((y._status = 2), (y._result = W));
          }
        ),
        y._status === -1 && ((y._status = 0), (y._result = H));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var F =
    typeof reportError == "function"
      ? reportError
      : function (y) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var H = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof y == "object" && y !== null && typeof y.message == "string"
                  ? String(y.message)
                  : String(y),
              error: y,
            });
            if (!window.dispatchEvent(H)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", y);
            return;
          }
          console.error(y);
        };
  function gt() {}
  return (
    (et.Children = {
      map: L,
      forEach: function (y, H, W) {
        L(
          y,
          function () {
            H.apply(this, arguments);
          },
          W
        );
      },
      count: function (y) {
        var H = 0;
        return (
          L(y, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (y) {
        return (
          L(y, function (H) {
            return H;
          }) || []
        );
      },
      only: function (y) {
        if (!X(y))
          throw Error("React.Children.only expected to receive a single React element child.");
        return y;
      },
    }),
    (et.Component = Y),
    (et.Fragment = o),
    (et.Profiler = d),
    (et.PureComponent = J),
    (et.StrictMode = f),
    (et.Suspense = b),
    (et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (et.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (et.cache = function (y) {
      return function () {
        return y.apply(null, arguments);
      };
    }),
    (et.cloneElement = function (y, H, W) {
      if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
      var k = j({}, y.props),
        w = y.key,
        ft = void 0;
      if (H != null)
        for (at in (H.ref !== void 0 && (ft = void 0), H.key !== void 0 && (w = "" + H.key), H))
          !zt.call(H, at) ||
            at === "key" ||
            at === "__self" ||
            at === "__source" ||
            (at === "ref" && H.ref === void 0) ||
            (k[at] = H[at]);
      var at = arguments.length - 2;
      if (at === 1) k.children = W;
      else if (1 < at) {
        for (var kt = Array(at), dt = 0; dt < at; dt++) kt[dt] = arguments[dt + 2];
        k.children = kt;
      }
      return Lt(y.type, w, void 0, void 0, ft, k);
    }),
    (et.createContext = function (y) {
      return (
        (y = {
          $$typeof: x,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (y.Provider = y),
        (y.Consumer = { $$typeof: v, _context: y }),
        y
      );
    }),
    (et.createElement = function (y, H, W) {
      var k,
        w = {},
        ft = null;
      if (H != null)
        for (k in (H.key !== void 0 && (ft = "" + H.key), H))
          zt.call(H, k) && k !== "key" && k !== "__self" && k !== "__source" && (w[k] = H[k]);
      var at = arguments.length - 2;
      if (at === 1) w.children = W;
      else if (1 < at) {
        for (var kt = Array(at), dt = 0; dt < at; dt++) kt[dt] = arguments[dt + 2];
        w.children = kt;
      }
      if (y && y.defaultProps)
        for (k in ((at = y.defaultProps), at)) w[k] === void 0 && (w[k] = at[k]);
      return Lt(y, ft, void 0, void 0, null, w);
    }),
    (et.createRef = function () {
      return { current: null };
    }),
    (et.forwardRef = function (y) {
      return { $$typeof: A, render: y };
    }),
    (et.isValidElement = X),
    (et.lazy = function (y) {
      return { $$typeof: M, _payload: { _status: -1, _result: y }, _init: tt };
    }),
    (et.memo = function (y, H) {
      return { $$typeof: m, type: y, compare: H === void 0 ? null : H };
    }),
    (et.startTransition = function (y) {
      var H = P.T,
        W = {};
      P.T = W;
      try {
        var k = y(),
          w = P.S;
        w !== null && w(W, k),
          typeof k == "object" && k !== null && typeof k.then == "function" && k.then(gt, F);
      } catch (ft) {
        F(ft);
      } finally {
        P.T = H;
      }
    }),
    (et.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (et.use = function (y) {
      return P.H.use(y);
    }),
    (et.useActionState = function (y, H, W) {
      return P.H.useActionState(y, H, W);
    }),
    (et.useCallback = function (y, H) {
      return P.H.useCallback(y, H);
    }),
    (et.useContext = function (y) {
      return P.H.useContext(y);
    }),
    (et.useDebugValue = function () {}),
    (et.useDeferredValue = function (y, H) {
      return P.H.useDeferredValue(y, H);
    }),
    (et.useEffect = function (y, H) {
      return P.H.useEffect(y, H);
    }),
    (et.useId = function () {
      return P.H.useId();
    }),
    (et.useImperativeHandle = function (y, H, W) {
      return P.H.useImperativeHandle(y, H, W);
    }),
    (et.useInsertionEffect = function (y, H) {
      return P.H.useInsertionEffect(y, H);
    }),
    (et.useLayoutEffect = function (y, H) {
      return P.H.useLayoutEffect(y, H);
    }),
    (et.useMemo = function (y, H) {
      return P.H.useMemo(y, H);
    }),
    (et.useOptimistic = function (y, H) {
      return P.H.useOptimistic(y, H);
    }),
    (et.useReducer = function (y, H, W) {
      return P.H.useReducer(y, H, W);
    }),
    (et.useRef = function (y) {
      return P.H.useRef(y);
    }),
    (et.useState = function (y) {
      return P.H.useState(y);
    }),
    (et.useSyncExternalStore = function (y, H, W) {
      return P.H.useSyncExternalStore(y, H, W);
    }),
    (et.useTransition = function () {
      return P.H.useTransition();
    }),
    (et.version = "19.0.0"),
    et
  );
}
var Rd;
function Uf() {
  return Rd || ((Rd = 1), (Sf.exports = D0())), Sf.exports;
}
var R = Uf(),
  Ef = { exports: {} },
  Cu = {},
  Tf = { exports: {} },
  xf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od;
function N0() {
  return (
    Od ||
      ((Od = 1),
      (function (c) {
        function s(L, tt) {
          var F = L.length;
          L.push(tt);
          t: for (; 0 < F; ) {
            var gt = (F - 1) >>> 1,
              y = L[gt];
            if (0 < d(y, tt)) (L[gt] = tt), (L[F] = y), (F = gt);
            else break t;
          }
        }
        function o(L) {
          return L.length === 0 ? null : L[0];
        }
        function f(L) {
          if (L.length === 0) return null;
          var tt = L[0],
            F = L.pop();
          if (F !== tt) {
            L[0] = F;
            t: for (var gt = 0, y = L.length, H = y >>> 1; gt < H; ) {
              var W = 2 * (gt + 1) - 1,
                k = L[W],
                w = W + 1,
                ft = L[w];
              if (0 > d(k, F))
                w < y && 0 > d(ft, k)
                  ? ((L[gt] = ft), (L[w] = F), (gt = w))
                  : ((L[gt] = k), (L[W] = F), (gt = W));
              else if (w < y && 0 > d(ft, F)) (L[gt] = ft), (L[w] = F), (gt = w);
              else break t;
            }
          }
          return tt;
        }
        function d(L, tt) {
          var F = L.sortIndex - tt.sortIndex;
          return F !== 0 ? F : L.id - tt.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var v = performance;
          c.unstable_now = function () {
            return v.now();
          };
        } else {
          var x = Date,
            A = x.now();
          c.unstable_now = function () {
            return x.now() - A;
          };
        }
        var b = [],
          m = [],
          M = 1,
          B = null,
          D = 3,
          C = !1,
          j = !1,
          Z = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function Q(L) {
          for (var tt = o(m); tt !== null; ) {
            if (tt.callback === null) f(m);
            else if (tt.startTime <= L) f(m), (tt.sortIndex = tt.expirationTime), s(b, tt);
            else break;
            tt = o(m);
          }
        }
        function ht(L) {
          if (((Z = !1), Q(L), !j))
            if (o(b) !== null) (j = !0), Be();
            else {
              var tt = o(m);
              tt !== null && Ft(ht, tt.startTime - L);
            }
        }
        var P = !1,
          zt = -1,
          Lt = 5,
          Qt = -1;
        function X() {
          return !(c.unstable_now() - Qt < Lt);
        }
        function lt() {
          if (P) {
            var L = c.unstable_now();
            Qt = L;
            var tt = !0;
            try {
              t: {
                (j = !1), Z && ((Z = !1), q(zt), (zt = -1)), (C = !0);
                var F = D;
                try {
                  e: {
                    for (Q(L), B = o(b); B !== null && !(B.expirationTime > L && X()); ) {
                      var gt = B.callback;
                      if (typeof gt == "function") {
                        (B.callback = null), (D = B.priorityLevel);
                        var y = gt(B.expirationTime <= L);
                        if (((L = c.unstable_now()), typeof y == "function")) {
                          (B.callback = y), Q(L), (tt = !0);
                          break e;
                        }
                        B === o(b) && f(b), Q(L);
                      } else f(b);
                      B = o(b);
                    }
                    if (B !== null) tt = !0;
                    else {
                      var H = o(m);
                      H !== null && Ft(ht, H.startTime - L), (tt = !1);
                    }
                  }
                  break t;
                } finally {
                  (B = null), (D = F), (C = !1);
                }
                tt = void 0;
              }
            } finally {
              tt ? Jt() : (P = !1);
            }
          }
        }
        var Jt;
        if (typeof J == "function")
          Jt = function () {
            J(lt);
          };
        else if (typeof MessageChannel < "u") {
          var He = new MessageChannel(),
            Ae = He.port2;
          (He.port1.onmessage = lt),
            (Jt = function () {
              Ae.postMessage(null);
            });
        } else
          Jt = function () {
            Y(lt, 0);
          };
        function Be() {
          P || ((P = !0), Jt());
        }
        function Ft(L, tt) {
          zt = Y(function () {
            L(c.unstable_now());
          }, tt);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (c.unstable_continueExecution = function () {
            j || C || ((j = !0), Be());
          }),
          (c.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Lt = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (c.unstable_getFirstCallbackNode = function () {
            return o(b);
          }),
          (c.unstable_next = function (L) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var tt = 3;
                break;
              default:
                tt = D;
            }
            var F = D;
            D = tt;
            try {
              return L();
            } finally {
              D = F;
            }
          }),
          (c.unstable_pauseExecution = function () {}),
          (c.unstable_requestPaint = function () {}),
          (c.unstable_runWithPriority = function (L, tt) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var F = D;
            D = L;
            try {
              return tt();
            } finally {
              D = F;
            }
          }),
          (c.unstable_scheduleCallback = function (L, tt, F) {
            var gt = c.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? gt + F : gt))
                : (F = gt),
              L)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = F + y),
              (L = {
                id: M++,
                callback: tt,
                priorityLevel: L,
                startTime: F,
                expirationTime: y,
                sortIndex: -1,
              }),
              F > gt
                ? ((L.sortIndex = F),
                  s(m, L),
                  o(b) === null &&
                    L === o(m) &&
                    (Z ? (q(zt), (zt = -1)) : (Z = !0), Ft(ht, F - gt)))
                : ((L.sortIndex = y), s(b, L), j || C || ((j = !0), Be())),
              L
            );
          }),
          (c.unstable_shouldYield = X),
          (c.unstable_wrapCallback = function (L) {
            var tt = D;
            return function () {
              var F = D;
              D = tt;
              try {
                return L.apply(this, arguments);
              } finally {
                D = F;
              }
            };
          });
      })(xf)),
    xf
  );
}
var zd;
function M0() {
  return zd || ((zd = 1), (Tf.exports = N0())), Tf.exports;
}
var Af = { exports: {} },
  Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _d;
function U0() {
  if (_d) return Kt;
  _d = 1;
  var c = Uf();
  function s(b) {
    var m = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++) m += "&args[]=" + encodeURIComponent(arguments[M]);
    }
    return (
      "Minified React error #" +
      b +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var f = {
      d: {
        f: o,
        r: function () {
          throw Error(s(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function v(b, m, M) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: B == null ? null : "" + B,
      children: b,
      containerInfo: m,
      implementation: M,
    };
  }
  var x = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function A(b, m) {
    if (b === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Kt.createPortal = function (b, m) {
      var M = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(s(299));
      return v(b, m, null, M);
    }),
    (Kt.flushSync = function (b) {
      var m = x.T,
        M = f.p;
      try {
        if (((x.T = null), (f.p = 2), b)) return b();
      } finally {
        (x.T = m), (f.p = M), f.d.f();
      }
    }),
    (Kt.preconnect = function (b, m) {
      typeof b == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == "string" ? (m === "use-credentials" ? m : "") : void 0))
          : (m = null),
        f.d.C(b, m));
    }),
    (Kt.prefetchDNS = function (b) {
      typeof b == "string" && f.d.D(b);
    }),
    (Kt.preinit = function (b, m) {
      if (typeof b == "string" && m && typeof m.as == "string") {
        var M = m.as,
          B = A(M, m.crossOrigin),
          D = typeof m.integrity == "string" ? m.integrity : void 0,
          C = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        M === "style"
          ? f.d.S(b, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: B,
              integrity: D,
              fetchPriority: C,
            })
          : M === "script" &&
            f.d.X(b, {
              crossOrigin: B,
              integrity: D,
              fetchPriority: C,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Kt.preinitModule = function (b, m) {
      if (typeof b == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var M = A(m.as, m.crossOrigin);
            f.d.M(b, {
              crossOrigin: M,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && f.d.M(b);
    }),
    (Kt.preload = function (b, m) {
      if (typeof b == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
        var M = m.as,
          B = A(M, m.crossOrigin);
        f.d.L(b, M, {
          crossOrigin: B,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Kt.preloadModule = function (b, m) {
      if (typeof b == "string")
        if (m) {
          var M = A(m.as, m.crossOrigin);
          f.d.m(b, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: M,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else f.d.m(b);
    }),
    (Kt.requestFormReset = function (b) {
      f.d.r(b);
    }),
    (Kt.unstable_batchedUpdates = function (b, m) {
      return b(m);
    }),
    (Kt.useFormState = function (b, m, M) {
      return x.H.useFormState(b, m, M);
    }),
    (Kt.useFormStatus = function () {
      return x.H.useHostTransitionStatus();
    }),
    (Kt.version = "19.0.0"),
    Kt
  );
}
var Dd;
function C0() {
  if (Dd) return Af.exports;
  Dd = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), (Af.exports = U0()), Af.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd;
function j0() {
  if (Nd) return Cu;
  Nd = 1;
  var c = M0(),
    s = Uf(),
    o = C0();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var v = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    B = Symbol.for("react.provider"),
    D = Symbol.for("react.consumer"),
    C = Symbol.for("react.context"),
    j = Symbol.for("react.forward_ref"),
    Z = Symbol.for("react.suspense"),
    Y = Symbol.for("react.suspense_list"),
    q = Symbol.for("react.memo"),
    J = Symbol.for("react.lazy"),
    Q = Symbol.for("react.offscreen"),
    ht = Symbol.for("react.memo_cache_sentinel"),
    P = Symbol.iterator;
  function zt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (P && t[P]) || t["@@iterator"]), typeof t == "function" ? t : null);
  }
  var Lt = Symbol.for("react.client.reference");
  function Qt(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === Lt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case b:
        return "Fragment";
      case A:
        return "Portal";
      case M:
        return "Profiler";
      case m:
        return "StrictMode";
      case Z:
        return "Suspense";
      case Y:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case C:
          return (t.displayName || "Context") + ".Provider";
        case D:
          return (t._context.displayName || "Context") + ".Consumer";
        case j:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case q:
          return (e = t.displayName || null), e !== null ? e : Qt(t.type) || "Memo";
        case J:
          (e = t._payload), (t = t._init);
          try {
            return Qt(t(e));
          } catch {}
      }
    return null;
  }
  var X = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    lt = Object.assign,
    Jt,
    He;
  function Ae(t) {
    if (Jt === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (Jt = (e && e[1]) || ""),
          (He =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      Jt +
      t +
      He
    );
  }
  var Be = !1;
  function Ft(t, e) {
    if (!t || Be) return "";
    Be = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (z) {
                  var T = z;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (z) {
                  T = z;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                T = z;
              }
              (U = t()) && typeof U.catch == "function" && U.catch(function () {});
            }
          } catch (z) {
            if (z && T && typeof z.stack == "string") return [z.stack, T.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        r = n[1];
      if (i && r) {
        var h = i.split(`
`),
          p = r.split(`
`);
        for (u = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; u < p.length && !p[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (a === h.length || u === p.length)
          for (a = h.length - 1, u = p.length - 1; 1 <= a && 0 <= u && h[a] !== p[u]; ) u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (h[a] !== p[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || h[a] !== p[u])) {
                  var _ =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      _.includes("<anonymous>") &&
                      (_ = _.replace("<anonymous>", t.displayName)),
                    _
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (Be = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Ae(l) : "";
  }
  function L(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ae(t.type);
      case 16:
        return Ae("Lazy");
      case 13:
        return Ae("Suspense");
      case 19:
        return Ae("SuspenseList");
      case 0:
      case 15:
        return (t = Ft(t.type, !1)), t;
      case 11:
        return (t = Ft(t.type.render, !1)), t;
      case 1:
        return (t = Ft(t.type, !0)), t;
      default:
        return "";
    }
  }
  function tt(t) {
    try {
      var e = "";
      do (e += L(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function F(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function gt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (F(t) !== t) throw Error(f(188));
  }
  function H(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = F(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === l) return y(u), t;
          if (n === a) return y(u), e;
          n = n.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = u), (a = n);
      else {
        for (var i = !1, r = u.child; r; ) {
          if (r === l) {
            (i = !0), (l = u), (a = n);
            break;
          }
          if (r === a) {
            (i = !0), (a = u), (l = n);
            break;
          }
          r = r.sibling;
        }
        if (!i) {
          for (r = n.child; r; ) {
            if (r === l) {
              (i = !0), (l = n), (a = u);
              break;
            }
            if (r === a) {
              (i = !0), (a = n), (l = u);
              break;
            }
            r = r.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function W(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = W(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var k = Array.isArray,
    w = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ft = { pending: !1, data: null, method: null, action: null },
    at = [],
    kt = -1;
  function dt(t) {
    return { current: t };
  }
  function Dt(t) {
    0 > kt || ((t.current = at[kt]), (at[kt] = null), kt--);
  }
  function St(t, e) {
    kt++, (at[kt] = t.current), (t.current = e);
  }
  var Re = dt(null),
    Ha = dt(null),
    el = dt(null),
    wu = dt(null);
  function Gu(t, e) {
    switch ((St(el, e), St(Ha, t), St(Re, null), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? Fo(e) : 0;
        break;
      default:
        if (((t = t === 8 ? e.parentNode : e), (e = t.tagName), (t = t.namespaceURI)))
          (t = Fo(t)), (e = Po(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    Dt(Re), St(Re, e);
  }
  function Wl() {
    Dt(Re), Dt(Ha), Dt(el);
  }
  function ri(t) {
    t.memoizedState !== null && St(wu, t);
    var e = Re.current,
      l = Po(e, t.type);
    e !== l && (St(Ha, t), St(Re, l));
  }
  function Xu(t) {
    Ha.current === t && (Dt(Re), Dt(Ha)), wu.current === t && (Dt(wu), (zu._currentValue = ft));
  }
  var si = Object.prototype.hasOwnProperty,
    oi = c.unstable_scheduleCallback,
    di = c.unstable_cancelCallback,
    uh = c.unstable_shouldYield,
    nh = c.unstable_requestPaint,
    Oe = c.unstable_now,
    ih = c.unstable_getCurrentPriorityLevel,
    Lf = c.unstable_ImmediatePriority,
    wf = c.unstable_UserBlockingPriority,
    Qu = c.unstable_NormalPriority,
    ch = c.unstable_LowPriority,
    Gf = c.unstable_IdlePriority,
    fh = c.log,
    rh = c.unstable_setDisableYieldValue,
    Ba = null,
    ee = null;
  function sh(t) {
    if (ee && typeof ee.onCommitFiberRoot == "function")
      try {
        ee.onCommitFiberRoot(Ba, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function ll(t) {
    if ((typeof fh == "function" && rh(t), ee && typeof ee.setStrictMode == "function"))
      try {
        ee.setStrictMode(Ba, t);
      } catch {}
  }
  var le = Math.clz32 ? Math.clz32 : hh,
    oh = Math.log,
    dh = Math.LN2;
  function hh(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((oh(t) / dh) | 0)) | 0;
  }
  var Zu = 128,
    Vu = 4194304;
  function zl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ku(t, e) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var a = 0,
      u = t.suspendedLanes,
      n = t.pingedLanes,
      i = t.warmLanes;
    t = t.finishedLanes !== 0;
    var r = l & 134217727;
    return (
      r !== 0
        ? ((l = r & ~u),
          l !== 0
            ? (a = zl(l))
            : ((n &= r), n !== 0 ? (a = zl(n)) : t || ((i = r & ~i), i !== 0 && (a = zl(i)))))
        : ((r = l & ~u),
          r !== 0
            ? (a = zl(r))
            : n !== 0
              ? (a = zl(n))
              : t || ((i = l & ~i), i !== 0 && (a = zl(i)))),
      a === 0
        ? 0
        : e !== 0 &&
            e !== a &&
            (e & u) === 0 &&
            ((u = a & -a), (i = e & -e), u >= i || (u === 32 && (i & 4194176) !== 0))
          ? e
          : a
    );
  }
  function qa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function mh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xf() {
    var t = Zu;
    return (Zu <<= 1), (Zu & 4194176) === 0 && (Zu = 128), t;
  }
  function Qf() {
    var t = Vu;
    return (Vu <<= 1), (Vu & 62914560) === 0 && (Vu = 4194304), t;
  }
  function hi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ya(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function yh(t, e, l, a, u, n) {
    var i = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var r = t.entanglements,
      h = t.expirationTimes,
      p = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var _ = 31 - le(l),
        U = 1 << _;
      (r[_] = 0), (h[_] = -1);
      var T = p[_];
      if (T !== null)
        for (p[_] = null, _ = 0; _ < T.length; _++) {
          var z = T[_];
          z !== null && (z.lane &= -536870913);
        }
      l &= ~U;
    }
    a !== 0 && Zf(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~e));
  }
  function Zf(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - le(e);
    (t.entangledLanes |= e), (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194218));
  }
  function Vf(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - le(l),
        u = 1 << a;
      (u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u);
    }
  }
  function Kf(t) {
    return (t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function Jf() {
    var t = w.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : vd(t.type));
  }
  function vh(t, e) {
    var l = w.p;
    try {
      return (w.p = t), e();
    } finally {
      w.p = l;
    }
  }
  var al = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + al,
    Pt = "__reactProps$" + al,
    Fl = "__reactContainer$" + al,
    mi = "__reactEvents$" + al,
    gh = "__reactListeners$" + al,
    ph = "__reactHandles$" + al,
    kf = "__reactResources$" + al,
    La = "__reactMarker$" + al;
  function yi(t) {
    delete t[Zt], delete t[Pt], delete t[mi], delete t[gh], delete t[ph];
  }
  function _l(t) {
    var e = t[Zt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Fl] || l[Zt])) {
        if (((l = e.alternate), e.child !== null || (l !== null && l.child !== null)))
          for (t = ed(t); t !== null; ) {
            if ((l = t[Zt])) return l;
            t = ed(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Pl(t) {
    if ((t = t[Zt] || t[Fl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function wa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function Il(t) {
    var e = t[kf];
    return e || (e = t[kf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e;
  }
  function Ht(t) {
    t[La] = !0;
  }
  var $f = new Set(),
    Wf = {};
  function Dl(t, e) {
    ta(t, e), ta(t + "Capture", e);
  }
  function ta(t, e) {
    for (Wf[t] = e, t = 0; t < e.length; t++) $f.add(e[t]);
  }
  var qe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    bh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ff = {},
    Pf = {};
  function Sh(t) {
    return si.call(Pf, t)
      ? !0
      : si.call(Ff, t)
        ? !1
        : bh.test(t)
          ? (Pf[t] = !0)
          : ((Ff[t] = !0), !1);
  }
  function Ju(t, e, l) {
    if (Sh(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function ku(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ye(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function fe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function If(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Eh(t) {
    var e = If(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        n = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            (a = "" + i), n.call(this, i);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function $u(t) {
    t._valueTracker || (t._valueTracker = Eh(t));
  }
  function tr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = If(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Wu(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Th = /[\n"\\]/g;
  function re(t) {
    return t.replace(Th, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function vi(t, e, l, a, u, n, i, r) {
    (t.name = ""),
      i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      e != null
        ? i === "number"
          ? ((e === 0 && t.value === "") || t.value != e) && (t.value = "" + fe(e))
          : t.value !== "" + fe(e) && (t.value = "" + fe(e))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      e != null
        ? gi(t, i, fe(e))
        : l != null
          ? gi(t, i, fe(l))
          : a != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean"
        ? (t.name = "" + fe(r))
        : t.removeAttribute("name");
  }
  function er(t, e, l, a, u, n, i, r) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      e != null || l != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || e != null)) return;
      (l = l != null ? "" + fe(l) : ""),
        (e = e != null ? "" + fe(e) : l),
        r || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = r ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i);
  }
  function gi(t, e, l) {
    (e === "number" && Wu(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function ea(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < l.length; u++) e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        (u = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== u && (t[l].selected = u),
          u && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + fe(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          (t[u].selected = !0), a && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function lr(t, e, l) {
    if (e != null && ((e = "" + fe(e)), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + fe(l) : "";
  }
  function ar(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (k(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = fe(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a);
  }
  function la(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var xh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ur(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || xh.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function nr(t, e, l) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var u in e) (a = e[u]), e.hasOwnProperty(u) && l[u] !== a && ur(t, u, a);
    } else for (var n in e) e.hasOwnProperty(n) && ur(t, n, e[n]);
  }
  function pi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ah = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Rh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fu(t) {
    return Rh.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var bi = null;
  function Si(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var aa = null,
    ua = null;
  function ir(t) {
    var e = Pl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Pt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (vi(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll('input[name="' + re("" + e) + '"][type="radio"]'), e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var u = a[Pt] || null;
                if (!u) throw Error(f(90));
                vi(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < l.length; e++) (a = l[e]), a.form === t.form && tr(a);
          }
          break t;
        case "textarea":
          lr(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && ea(t, !!l.multiple, e, !1);
      }
    }
  }
  var Ei = !1;
  function cr(t, e, l) {
    if (Ei) return t(e, l);
    Ei = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Ei = !1),
        (aa !== null || ua !== null) &&
          (Hn(), aa && ((e = aa), (t = ua), (ua = aa = null), ir(e), t)))
      )
        for (e = 0; e < t.length; e++) ir(t[e]);
    }
  }
  function Ga(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Pt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(f(231, e, typeof l));
    return l;
  }
  var Ti = !1;
  if (qe)
    try {
      var Xa = {};
      Object.defineProperty(Xa, "passive", {
        get: function () {
          Ti = !0;
        },
      }),
        window.addEventListener("test", Xa, Xa),
        window.removeEventListener("test", Xa, Xa);
    } catch {
      Ti = !1;
    }
  var ul = null,
    xi = null,
    Pu = null;
  function fr() {
    if (Pu) return Pu;
    var t,
      e = xi,
      l = e.length,
      a,
      u = "value" in ul ? ul.value : ul.textContent,
      n = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === u[n - a]; a++);
    return (Pu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Iu(t) {
    var e = t.keyCode;
    return (
      "charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function tn() {
    return !0;
  }
  function rr() {
    return !1;
  }
  function It(t) {
    function e(l, a, u, n, i) {
      (this._reactName = l),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null);
      for (var r in t) t.hasOwnProperty(r) && ((l = t[r]), (this[r] = l ? l(n) : n[r]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? tn
          : rr),
        (this.isPropagationStopped = rr),
        this
      );
    }
    return (
      lt(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = tn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = tn));
        },
        persist: function () {},
        isPersistent: tn,
      }),
      e
    );
  }
  var Nl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    en = It(Nl),
    Qa = lt({}, Nl, { view: 0, detail: 0 }),
    Oh = It(Qa),
    Ai,
    Ri,
    Za,
    ln = lt({}, Qa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Za &&
              (Za && t.type === "mousemove"
                ? ((Ai = t.screenX - Za.screenX), (Ri = t.screenY - Za.screenY))
                : (Ri = Ai = 0),
              (Za = t)),
            Ai);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ri;
      },
    }),
    sr = It(ln),
    zh = lt({}, ln, { dataTransfer: 0 }),
    _h = It(zh),
    Dh = lt({}, Qa, { relatedTarget: 0 }),
    Oi = It(Dh),
    Nh = lt({}, Nl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mh = It(Nh),
    Uh = lt({}, Nl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Ch = It(Uh),
    jh = lt({}, Nl, { data: 0 }),
    or = It(jh),
    Hh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Bh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    qh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yh(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = qh[t]) ? !!e[t] : !1;
  }
  function zi() {
    return Yh;
  }
  var Lh = lt({}, Qa, {
      key: function (t) {
        if (t.key) {
          var e = Hh[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Iu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Bh[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zi,
      charCode: function (t) {
        return t.type === "keypress" ? Iu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Iu(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    wh = It(Lh),
    Gh = lt({}, ln, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    dr = It(Gh),
    Xh = lt({}, Qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zi,
    }),
    Qh = It(Xh),
    Zh = lt({}, Nl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vh = It(Zh),
    Kh = lt({}, ln, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Jh = It(Kh),
    kh = lt({}, Nl, { newState: 0, oldState: 0 }),
    $h = It(kh),
    Wh = [9, 13, 27, 32],
    _i = qe && "CompositionEvent" in window,
    Va = null;
  qe && "documentMode" in document && (Va = document.documentMode);
  var Fh = qe && "TextEvent" in window && !Va,
    hr = qe && (!_i || (Va && 8 < Va && 11 >= Va)),
    mr = " ",
    yr = !1;
  function vr(t, e) {
    switch (t) {
      case "keyup":
        return Wh.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function gr(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var na = !1;
  function Ph(t, e) {
    switch (t) {
      case "compositionend":
        return gr(e);
      case "keypress":
        return e.which !== 32 ? null : ((yr = !0), mr);
      case "textInput":
        return (t = e.data), t === mr && yr ? null : t;
      default:
        return null;
    }
  }
  function Ih(t, e) {
    if (na)
      return t === "compositionend" || (!_i && vr(t, e))
        ? ((t = fr()), (Pu = xi = ul = null), (na = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return hr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var tm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function pr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!tm[t.type] : e === "textarea";
  }
  function br(t, e, l, a) {
    aa ? (ua ? ua.push(a) : (ua = [a])) : (aa = a),
      (e = wn(e, "onChange")),
      0 < e.length &&
        ((l = new en("onChange", "change", null, l, a)), t.push({ event: l, listeners: e }));
  }
  var Ka = null,
    Ja = null;
  function em(t) {
    Ko(t, 0);
  }
  function an(t) {
    var e = wa(t);
    if (tr(e)) return t;
  }
  function Sr(t, e) {
    if (t === "change") return e;
  }
  var Er = !1;
  if (qe) {
    var Di;
    if (qe) {
      var Ni = "oninput" in document;
      if (!Ni) {
        var Tr = document.createElement("div");
        Tr.setAttribute("oninput", "return;"), (Ni = typeof Tr.oninput == "function");
      }
      Di = Ni;
    } else Di = !1;
    Er = Di && (!document.documentMode || 9 < document.documentMode);
  }
  function xr() {
    Ka && (Ka.detachEvent("onpropertychange", Ar), (Ja = Ka = null));
  }
  function Ar(t) {
    if (t.propertyName === "value" && an(Ja)) {
      var e = [];
      br(e, Ja, t, Si(t)), cr(em, e);
    }
  }
  function lm(t, e, l) {
    t === "focusin"
      ? (xr(), (Ka = e), (Ja = l), Ka.attachEvent("onpropertychange", Ar))
      : t === "focusout" && xr();
  }
  function am(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return an(Ja);
  }
  function um(t, e) {
    if (t === "click") return an(e);
  }
  function nm(t, e) {
    if (t === "input" || t === "change") return an(e);
  }
  function im(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ae = typeof Object.is == "function" ? Object.is : im;
  function ka(t, e) {
    if (ae(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var u = l[a];
      if (!si.call(e, u) || !ae(t[u], e[u])) return !1;
    }
    return !0;
  }
  function Rr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Or(t, e) {
    var l = Rr(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e)) return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Rr(l);
    }
  }
  function zr(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? zr(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function _r(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Wu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Wu(t.document);
    }
    return e;
  }
  function Mi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function cm(t, e) {
    var l = _r(e);
    e = t.focusedElem;
    var a = t.selectionRange;
    if (l !== e && e && e.ownerDocument && zr(e.ownerDocument.documentElement, e)) {
      if (a !== null && Mi(e)) {
        if (((t = a.start), (l = a.end), l === void 0 && (l = t), "selectionStart" in e))
          (e.selectionStart = t), (e.selectionEnd = Math.min(l, e.value.length));
        else if (
          ((l = ((t = e.ownerDocument || document) && t.defaultView) || window), l.getSelection)
        ) {
          l = l.getSelection();
          var u = e.textContent.length,
            n = Math.min(a.start, u);
          (a = a.end === void 0 ? n : Math.min(a.end, u)),
            !l.extend && n > a && ((u = a), (a = n), (n = u)),
            (u = Or(e, n));
          var i = Or(e, a);
          u &&
            i &&
            (l.rangeCount !== 1 ||
              l.anchorNode !== u.node ||
              l.anchorOffset !== u.offset ||
              l.focusNode !== i.node ||
              l.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            l.removeAllRanges(),
            n > a
              ? (l.addRange(t), l.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), l.addRange(t)));
        }
      }
      for (t = [], l = e; (l = l.parentNode); )
        l.nodeType === 1 && t.push({ element: l, left: l.scrollLeft, top: l.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
        (l = t[e]), (l.element.scrollLeft = l.left), (l.element.scrollTop = l.top);
    }
  }
  var fm = qe && "documentMode" in document && 11 >= document.documentMode,
    ia = null,
    Ui = null,
    $a = null,
    Ci = !1;
  function Dr(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ci ||
      ia == null ||
      ia !== Wu(a) ||
      ((a = ia),
      "selectionStart" in a && Mi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      ($a && ka($a, a)) ||
        (($a = a),
        (a = wn(Ui, "onSelect")),
        0 < a.length &&
          ((e = new en("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = ia))));
  }
  function Ml(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var ca = {
      animationend: Ml("Animation", "AnimationEnd"),
      animationiteration: Ml("Animation", "AnimationIteration"),
      animationstart: Ml("Animation", "AnimationStart"),
      transitionrun: Ml("Transition", "TransitionRun"),
      transitionstart: Ml("Transition", "TransitionStart"),
      transitioncancel: Ml("Transition", "TransitionCancel"),
      transitionend: Ml("Transition", "TransitionEnd"),
    },
    ji = {},
    Nr = {};
  qe &&
    ((Nr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ca.animationend.animation,
      delete ca.animationiteration.animation,
      delete ca.animationstart.animation),
    "TransitionEvent" in window || delete ca.transitionend.transition);
  function Ul(t) {
    if (ji[t]) return ji[t];
    if (!ca[t]) return t;
    var e = ca[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Nr) return (ji[t] = e[l]);
    return t;
  }
  var Mr = Ul("animationend"),
    Ur = Ul("animationiteration"),
    Cr = Ul("animationstart"),
    rm = Ul("transitionrun"),
    sm = Ul("transitionstart"),
    om = Ul("transitioncancel"),
    jr = Ul("transitionend"),
    Hr = new Map(),
    Br =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Se(t, e) {
    Hr.set(t, e), Dl(e, [t]);
  }
  var se = [],
    fa = 0,
    Hi = 0;
  function un() {
    for (var t = fa, e = (Hi = fa = 0); e < t; ) {
      var l = se[e];
      se[e++] = null;
      var a = se[e];
      se[e++] = null;
      var u = se[e];
      se[e++] = null;
      var n = se[e];
      if (((se[e++] = null), a !== null && u !== null)) {
        var i = a.pending;
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)), (a.pending = u);
      }
      n !== 0 && qr(l, u, n);
    }
  }
  function nn(t, e, l, a) {
    (se[fa++] = t),
      (se[fa++] = e),
      (se[fa++] = l),
      (se[fa++] = a),
      (Hi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Bi(t, e, l, a) {
    return nn(t, e, l, a), cn(t);
  }
  function nl(t, e) {
    return nn(t, null, null, e), cn(t);
  }
  function qr(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var u = !1, n = t.return; n !== null; )
      (n.childLanes |= l),
        (a = n.alternate),
        a !== null && (a.childLanes |= l),
        n.tag === 22 && ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return);
    u &&
      e !== null &&
      t.tag === 3 &&
      ((n = t.stateNode),
      (u = 31 - le(l)),
      (n = n.hiddenUpdates),
      (t = n[u]),
      t === null ? (n[u] = [e]) : t.push(e),
      (e.lane = l | 536870912));
  }
  function cn(t) {
    if (50 < Su) throw ((Su = 0), (Xc = null), Error(f(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ra = {},
    Yr = new WeakMap();
  function oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Yr.get(t);
      return l !== void 0 ? l : ((e = { value: t, source: e, stack: tt(e) }), Yr.set(t, e), e);
    }
    return { value: t, source: e, stack: tt(e) };
  }
  var sa = [],
    oa = 0,
    fn = null,
    rn = 0,
    de = [],
    he = 0,
    Cl = null,
    Le = 1,
    we = "";
  function jl(t, e) {
    (sa[oa++] = rn), (sa[oa++] = fn), (fn = t), (rn = e);
  }
  function Lr(t, e, l) {
    (de[he++] = Le), (de[he++] = we), (de[he++] = Cl), (Cl = t);
    var a = Le;
    t = we;
    var u = 32 - le(a) - 1;
    (a &= ~(1 << u)), (l += 1);
    var n = 32 - le(e) + u;
    if (30 < n) {
      var i = u - (u % 5);
      (n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (Le = (1 << (32 - le(e) + u)) | (l << u) | a),
        (we = n + t);
    } else (Le = (1 << n) | (l << u) | a), (we = t);
  }
  function qi(t) {
    t.return !== null && (jl(t, 1), Lr(t, 1, 0));
  }
  function Yi(t) {
    for (; t === fn; ) (fn = sa[--oa]), (sa[oa] = null), (rn = sa[--oa]), (sa[oa] = null);
    for (; t === Cl; )
      (Cl = de[--he]),
        (de[he] = null),
        (we = de[--he]),
        (de[he] = null),
        (Le = de[--he]),
        (de[he] = null);
  }
  var $t = null,
    wt = null,
    st = !1,
    Ee = null,
    ze = !1,
    Li = Error(f(519));
  function Hl(t) {
    var e = Error(f(418, ""));
    throw (Pa(oe(e, t)), Li);
  }
  function wr(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Zt] = t), (e[Pt] = a), l)) {
      case "dialog":
        ct("cancel", e), ct("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Tu.length; l++) ct(Tu[l], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ct("error", e), ct("load", e);
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        ct("invalid", e),
          er(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
          $u(e);
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        ct("invalid", e), ar(e, a.value, a.defaultValue, a.children), $u(e);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Wo(e.textContent, l)
        ? (a.popover != null && (ct("beforetoggle", e), ct("toggle", e)),
          a.onScroll != null && ct("scroll", e),
          a.onScrollEnd != null && ct("scrollend", e),
          a.onClick != null && (e.onclick = Gn),
          (e = !0))
        : (e = !1),
      e || Hl(t);
  }
  function Gr(t) {
    for ($t = t.return; $t; )
      switch ($t.tag) {
        case 3:
        case 27:
          ze = !0;
          return;
        case 5:
        case 13:
          ze = !1;
          return;
        default:
          $t = $t.return;
      }
  }
  function Wa(t) {
    if (t !== $t) return !1;
    if (!st) return Gr(t), (st = !0), !1;
    var e = !1,
      l;
    if (
      ((l = t.tag !== 3 && t.tag !== 27) &&
        ((l = t.tag === 5) &&
          ((l = t.type), (l = !(l !== "form" && l !== "button") || nf(t.type, t.memoizedProps))),
        (l = !l)),
      l && (e = !0),
      e && wt && Hl(t),
      Gr(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(f(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                wt = xe(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        wt = null;
      }
    } else wt = $t ? xe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Fa() {
    (wt = $t = null), (st = !1);
  }
  function Pa(t) {
    Ee === null ? (Ee = [t]) : Ee.push(t);
  }
  var Ia = Error(f(460)),
    Xr = Error(f(474)),
    wi = { then: function () {} };
  function Qr(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function sn() {}
  function Zr(t, e, l) {
    switch (
      ((l = t[l]), l === void 0 ? t.push(e) : l !== e && (e.then(sn, sn), (e = l)), e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), t === Ia ? Error(f(483)) : t);
      default:
        if (typeof e.status == "string") e.then(sn, sn);
        else {
          if (((t = pt), t !== null && 100 < t.shellSuspendCounter)) throw Error(f(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), t === Ia ? Error(f(483)) : t);
        }
        throw ((tu = e), Ia);
    }
  }
  var tu = null;
  function Vr() {
    if (tu === null) throw Error(f(459));
    var t = tu;
    return (tu = null), t;
  }
  var da = null,
    eu = 0;
  function on(t) {
    var e = eu;
    return (eu += 1), da === null && (da = []), Zr(da, t, e);
  }
  function lu(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function dn(t, e) {
    throw e.$$typeof === v
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
          )
        ));
  }
  function Kr(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Jr(t) {
    function e(S, g) {
      if (t) {
        var E = S.deletions;
        E === null ? ((S.deletions = [g]), (S.flags |= 16)) : E.push(g);
      }
    }
    function l(S, g) {
      if (!t) return null;
      for (; g !== null; ) e(S, g), (g = g.sibling);
      return null;
    }
    function a(S) {
      for (var g = new Map(); S !== null; )
        S.key !== null ? g.set(S.key, S) : g.set(S.index, S), (S = S.sibling);
      return g;
    }
    function u(S, g) {
      return (S = gl(S, g)), (S.index = 0), (S.sibling = null), S;
    }
    function n(S, g, E) {
      return (
        (S.index = E),
        t
          ? ((E = S.alternate),
            E !== null
              ? ((E = E.index), E < g ? ((S.flags |= 33554434), g) : E)
              : ((S.flags |= 33554434), g))
          : ((S.flags |= 1048576), g)
      );
    }
    function i(S) {
      return t && S.alternate === null && (S.flags |= 33554434), S;
    }
    function r(S, g, E, N) {
      return g === null || g.tag !== 6
        ? ((g = jc(E, S.mode, N)), (g.return = S), g)
        : ((g = u(g, E)), (g.return = S), g);
    }
    function h(S, g, E, N) {
      var G = E.type;
      return G === b
        ? _(S, g, E.props.children, N, E.key)
        : g !== null &&
            (g.elementType === G ||
              (typeof G == "object" && G !== null && G.$$typeof === J && Kr(G) === g.type))
          ? ((g = u(g, E.props)), lu(g, E), (g.return = S), g)
          : ((g = Nn(E.type, E.key, E.props, null, S.mode, N)), lu(g, E), (g.return = S), g);
    }
    function p(S, g, E, N) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== E.containerInfo ||
        g.stateNode.implementation !== E.implementation
        ? ((g = Hc(E, S.mode, N)), (g.return = S), g)
        : ((g = u(g, E.children || [])), (g.return = S), g);
    }
    function _(S, g, E, N, G) {
      return g === null || g.tag !== 7
        ? ((g = Vl(E, S.mode, N, G)), (g.return = S), g)
        : ((g = u(g, E)), (g.return = S), g);
    }
    function U(S, g, E) {
      if ((typeof g == "string" && g !== "") || typeof g == "number" || typeof g == "bigint")
        return (g = jc("" + g, S.mode, E)), (g.return = S), g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case x:
            return (E = Nn(g.type, g.key, g.props, null, S.mode, E)), lu(E, g), (E.return = S), E;
          case A:
            return (g = Hc(g, S.mode, E)), (g.return = S), g;
          case J:
            var N = g._init;
            return (g = N(g._payload)), U(S, g, E);
        }
        if (k(g) || zt(g)) return (g = Vl(g, S.mode, E, null)), (g.return = S), g;
        if (typeof g.then == "function") return U(S, on(g), E);
        if (g.$$typeof === C) return U(S, zn(S, g), E);
        dn(S, g);
      }
      return null;
    }
    function T(S, g, E, N) {
      var G = g !== null ? g.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number" || typeof E == "bigint")
        return G !== null ? null : r(S, g, "" + E, N);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case x:
            return E.key === G ? h(S, g, E, N) : null;
          case A:
            return E.key === G ? p(S, g, E, N) : null;
          case J:
            return (G = E._init), (E = G(E._payload)), T(S, g, E, N);
        }
        if (k(E) || zt(E)) return G !== null ? null : _(S, g, E, N, null);
        if (typeof E.then == "function") return T(S, g, on(E), N);
        if (E.$$typeof === C) return T(S, g, zn(S, E), N);
        dn(S, E);
      }
      return null;
    }
    function z(S, g, E, N, G) {
      if ((typeof N == "string" && N !== "") || typeof N == "number" || typeof N == "bigint")
        return (S = S.get(E) || null), r(g, S, "" + N, G);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case x:
            return (S = S.get(N.key === null ? E : N.key) || null), h(g, S, N, G);
          case A:
            return (S = S.get(N.key === null ? E : N.key) || null), p(g, S, N, G);
          case J:
            var nt = N._init;
            return (N = nt(N._payload)), z(S, g, E, N, G);
        }
        if (k(N) || zt(N)) return (S = S.get(E) || null), _(g, S, N, G, null);
        if (typeof N.then == "function") return z(S, g, E, on(N), G);
        if (N.$$typeof === C) return z(S, g, E, zn(g, N), G);
        dn(g, N);
      }
      return null;
    }
    function V(S, g, E, N) {
      for (
        var G = null, nt = null, K = g, $ = (g = 0), Yt = null;
        K !== null && $ < E.length;
        $++
      ) {
        K.index > $ ? ((Yt = K), (K = null)) : (Yt = K.sibling);
        var ot = T(S, K, E[$], N);
        if (ot === null) {
          K === null && (K = Yt);
          break;
        }
        t && K && ot.alternate === null && e(S, K),
          (g = n(ot, g, $)),
          nt === null ? (G = ot) : (nt.sibling = ot),
          (nt = ot),
          (K = Yt);
      }
      if ($ === E.length) return l(S, K), st && jl(S, $), G;
      if (K === null) {
        for (; $ < E.length; $++)
          (K = U(S, E[$], N)),
            K !== null && ((g = n(K, g, $)), nt === null ? (G = K) : (nt.sibling = K), (nt = K));
        return st && jl(S, $), G;
      }
      for (K = a(K); $ < E.length; $++)
        (Yt = z(K, S, $, E[$], N)),
          Yt !== null &&
            (t && Yt.alternate !== null && K.delete(Yt.key === null ? $ : Yt.key),
            (g = n(Yt, g, $)),
            nt === null ? (G = Yt) : (nt.sibling = Yt),
            (nt = Yt));
      return (
        t &&
          K.forEach(function (Al) {
            return e(S, Al);
          }),
        st && jl(S, $),
        G
      );
    }
    function I(S, g, E, N) {
      if (E == null) throw Error(f(151));
      for (
        var G = null, nt = null, K = g, $ = (g = 0), Yt = null, ot = E.next();
        K !== null && !ot.done;
        $++, ot = E.next()
      ) {
        K.index > $ ? ((Yt = K), (K = null)) : (Yt = K.sibling);
        var Al = T(S, K, ot.value, N);
        if (Al === null) {
          K === null && (K = Yt);
          break;
        }
        t && K && Al.alternate === null && e(S, K),
          (g = n(Al, g, $)),
          nt === null ? (G = Al) : (nt.sibling = Al),
          (nt = Al),
          (K = Yt);
      }
      if (ot.done) return l(S, K), st && jl(S, $), G;
      if (K === null) {
        for (; !ot.done; $++, ot = E.next())
          (ot = U(S, ot.value, N)),
            ot !== null &&
              ((g = n(ot, g, $)), nt === null ? (G = ot) : (nt.sibling = ot), (nt = ot));
        return st && jl(S, $), G;
      }
      for (K = a(K); !ot.done; $++, ot = E.next())
        (ot = z(K, S, $, ot.value, N)),
          ot !== null &&
            (t && ot.alternate !== null && K.delete(ot.key === null ? $ : ot.key),
            (g = n(ot, g, $)),
            nt === null ? (G = ot) : (nt.sibling = ot),
            (nt = ot));
      return (
        t &&
          K.forEach(function (R0) {
            return e(S, R0);
          }),
        st && jl(S, $),
        G
      );
    }
    function Ot(S, g, E, N) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === b &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case x:
            t: {
              for (var G = E.key; g !== null; ) {
                if (g.key === G) {
                  if (((G = E.type), G === b)) {
                    if (g.tag === 7) {
                      l(S, g.sibling), (N = u(g, E.props.children)), (N.return = S), (S = N);
                      break t;
                    }
                  } else if (
                    g.elementType === G ||
                    (typeof G == "object" && G !== null && G.$$typeof === J && Kr(G) === g.type)
                  ) {
                    l(S, g.sibling), (N = u(g, E.props)), lu(N, E), (N.return = S), (S = N);
                    break t;
                  }
                  l(S, g);
                  break;
                } else e(S, g);
                g = g.sibling;
              }
              E.type === b
                ? ((N = Vl(E.props.children, S.mode, N, E.key)), (N.return = S), (S = N))
                : ((N = Nn(E.type, E.key, E.props, null, S.mode, N)),
                  lu(N, E),
                  (N.return = S),
                  (S = N));
            }
            return i(S);
          case A:
            t: {
              for (G = E.key; g !== null; ) {
                if (g.key === G)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === E.containerInfo &&
                    g.stateNode.implementation === E.implementation
                  ) {
                    l(S, g.sibling), (N = u(g, E.children || [])), (N.return = S), (S = N);
                    break t;
                  } else {
                    l(S, g);
                    break;
                  }
                else e(S, g);
                g = g.sibling;
              }
              (N = Hc(E, S.mode, N)), (N.return = S), (S = N);
            }
            return i(S);
          case J:
            return (G = E._init), (E = G(E._payload)), Ot(S, g, E, N);
        }
        if (k(E)) return V(S, g, E, N);
        if (zt(E)) {
          if (((G = zt(E)), typeof G != "function")) throw Error(f(150));
          return (E = G.call(E)), I(S, g, E, N);
        }
        if (typeof E.then == "function") return Ot(S, g, on(E), N);
        if (E.$$typeof === C) return Ot(S, g, zn(S, E), N);
        dn(S, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number" || typeof E == "bigint"
        ? ((E = "" + E),
          g !== null && g.tag === 6
            ? (l(S, g.sibling), (N = u(g, E)), (N.return = S), (S = N))
            : (l(S, g), (N = jc(E, S.mode, N)), (N.return = S), (S = N)),
          i(S))
        : l(S, g);
    }
    return function (S, g, E, N) {
      try {
        eu = 0;
        var G = Ot(S, g, E, N);
        return (da = null), G;
      } catch (K) {
        if (K === Ia) throw K;
        var nt = ge(29, K, null, S.mode);
        return (nt.lanes = N), (nt.return = S), nt;
      } finally {
      }
    };
  }
  var Bl = Jr(!0),
    kr = Jr(!1),
    ha = dt(null),
    hn = dt(0);
  function $r(t, e) {
    (t = Fe), St(hn, t), St(ha, e), (Fe = t | e.baseLanes);
  }
  function Gi() {
    St(hn, Fe), St(ha, ha.current);
  }
  function Xi() {
    (Fe = hn.current), Dt(ha), Dt(hn);
  }
  var me = dt(null),
    _e = null;
  function il(t) {
    var e = t.alternate;
    St(Ct, Ct.current & 1),
      St(me, t),
      _e === null && (e === null || ha.current !== null || e.memoizedState !== null) && (_e = t);
  }
  function Wr(t) {
    if (t.tag === 22) {
      if ((St(Ct, Ct.current), St(me, t), _e === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (_e = t);
      }
    } else cl();
  }
  function cl() {
    St(Ct, Ct.current), St(me, me.current);
  }
  function Ge(t) {
    Dt(me), _e === t && (_e = null), Dt(Ct);
  }
  var Ct = dt(0);
  function mn(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || l.data === "$?" || l.data === "$!"))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var dm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    hm = c.unstable_scheduleCallback,
    mm = c.unstable_NormalPriority,
    jt = {
      $$typeof: C,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Qi() {
    return { controller: new dm(), data: new Map(), refCount: 0 };
  }
  function au(t) {
    t.refCount--,
      t.refCount === 0 &&
        hm(mm, function () {
          t.controller.abort();
        });
  }
  var uu = null,
    Zi = 0,
    ma = 0,
    ya = null;
  function ym(t, e) {
    if (uu === null) {
      var l = (uu = []);
      (Zi = 0),
        (ma = Wc()),
        (ya = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Zi++, e.then(Fr, Fr), e;
  }
  function Fr() {
    if (--Zi === 0 && uu !== null) {
      ya !== null && (ya.status = "fulfilled");
      var t = uu;
      (uu = null), (ma = 0), (ya = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function vm(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var u = 0; u < l.length; u++) (0, l[u])(e);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < l.length; u++) (0, l[u])(void 0);
        }
      ),
      a
    );
  }
  var Pr = X.S;
  X.S = function (t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && ym(t, e),
      Pr !== null && Pr(t, e);
  };
  var ql = dt(null);
  function Vi() {
    var t = ql.current;
    return t !== null ? t : pt.pooledCache;
  }
  function yn(t, e) {
    e === null ? St(ql, ql.current) : St(ql, e.pool);
  }
  function Ir() {
    var t = Vi();
    return t === null ? null : { parent: jt._currentValue, pool: t };
  }
  var fl = 0,
    ut = null,
    mt = null,
    Nt = null,
    vn = !1,
    va = !1,
    Yl = !1,
    gn = 0,
    nu = 0,
    ga = null,
    gm = 0;
  function _t() {
    throw Error(f(321));
  }
  function Ki(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++) if (!ae(t[l], e[l])) return !1;
    return !0;
  }
  function Ji(t, e, l, a, u, n) {
    return (
      (fl = n),
      (ut = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (X.H = t === null || t.memoizedState === null ? Ll : rl),
      (Yl = !1),
      (n = l(a, u)),
      (Yl = !1),
      va && (n = es(e, l, a, u)),
      ts(t),
      n
    );
  }
  function ts(t) {
    X.H = De;
    var e = mt !== null && mt.next !== null;
    if (((fl = 0), (Nt = mt = ut = null), (vn = !1), (nu = 0), (ga = null), e)) throw Error(f(300));
    t === null || Bt || ((t = t.dependencies), t !== null && On(t) && (Bt = !0));
  }
  function es(t, e, l, a) {
    ut = t;
    var u = 0;
    do {
      if ((va && (ga = null), (nu = 0), (va = !1), 25 <= u)) throw Error(f(301));
      if (((u += 1), (Nt = mt = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (X.H = wl), (n = e(l, a));
    } while (va);
    return n;
  }
  function pm() {
    var t = X.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? iu(e) : e),
      (t = t.useState()[0]),
      (mt !== null ? mt.memoizedState : null) !== t && (ut.flags |= 1024),
      e
    );
  }
  function ki() {
    var t = gn !== 0;
    return (gn = 0), t;
  }
  function $i(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function Wi(t) {
    if (vn) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      vn = !1;
    }
    (fl = 0), (Nt = mt = ut = null), (va = !1), (nu = gn = 0), (ga = null);
  }
  function te() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Nt === null ? (ut.memoizedState = Nt = t) : (Nt = Nt.next = t), Nt;
  }
  function Mt() {
    if (mt === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = mt.next;
    var e = Nt === null ? ut.memoizedState : Nt.next;
    if (e !== null) (Nt = e), (mt = t);
    else {
      if (t === null) throw ut.alternate === null ? Error(f(467)) : Error(f(310));
      (mt = t),
        (t = {
          memoizedState: mt.memoizedState,
          baseState: mt.baseState,
          baseQueue: mt.baseQueue,
          queue: mt.queue,
          next: null,
        }),
        Nt === null ? (ut.memoizedState = Nt = t) : (Nt = Nt.next = t);
    }
    return Nt;
  }
  var pn;
  pn = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function iu(t) {
    var e = nu;
    return (
      (nu += 1),
      ga === null && (ga = []),
      (t = Zr(ga, t, e)),
      (e = ut),
      (Nt === null ? e.memoizedState : Nt.next) === null &&
        ((e = e.alternate), (X.H = e === null || e.memoizedState === null ? Ll : rl)),
      t
    );
  }
  function bn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return iu(t);
      if (t.$$typeof === C) return Vt(t);
    }
    throw Error(f(438, String(t)));
  }
  function Fi(t) {
    var e = null,
      l = ut.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = ut.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = pn()), (ut.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = ht;
    return e.index++, l;
  }
  function Xe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Sn(t) {
    var e = Mt();
    return Pi(e, mt, t);
  }
  function Pi(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        (u.next = n.next), (n.next = i);
      }
      (e.baseQueue = u = n), (a.pending = null);
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      e = u.next;
      var r = (i = null),
        h = null,
        p = e,
        _ = !1;
      do {
        var U = p.lane & -536870913;
        if (U !== p.lane ? (rt & U) === U : (fl & U) === U) {
          var T = p.revertLane;
          if (T === 0)
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: p.action,
                  hasEagerState: p.hasEagerState,
                  eagerState: p.eagerState,
                  next: null,
                }),
              U === ma && (_ = !0);
          else if ((fl & T) === T) {
            (p = p.next), T === ma && (_ = !0);
            continue;
          } else
            (U = {
              lane: 0,
              revertLane: p.revertLane,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
              h === null ? ((r = h = U), (i = n)) : (h = h.next = U),
              (ut.lanes |= T),
              (pl |= T);
          (U = p.action), Yl && l(n, U), (n = p.hasEagerState ? p.eagerState : l(n, U));
        } else
          (T = {
            lane: U,
            revertLane: p.revertLane,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          }),
            h === null ? ((r = h = T), (i = n)) : (h = h.next = T),
            (ut.lanes |= U),
            (pl |= U);
        p = p.next;
      } while (p !== null && p !== e);
      if (
        (h === null ? (i = n) : (h.next = r),
        !ae(n, t.memoizedState) && ((Bt = !0), _ && ((l = ya), l !== null)))
      )
        throw l;
      (t.memoizedState = n), (t.baseState = i), (t.baseQueue = h), (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Ii(t) {
    var e = Mt(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      u = l.pending,
      n = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var i = (u = u.next);
      do (n = t(n, i.action)), (i = i.next);
      while (i !== u);
      ae(n, e.memoizedState) || (Bt = !0),
        (e.memoizedState = n),
        e.baseQueue === null && (e.baseState = n),
        (l.lastRenderedState = n);
    }
    return [n, a];
  }
  function ls(t, e, l) {
    var a = ut,
      u = Mt(),
      n = st;
    if (n) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !ae((mt || u).memoizedState, l);
    if (
      (i && ((u.memoizedState = l), (Bt = !0)),
      (u = u.queue),
      lc(ns.bind(null, a, u, t), [t]),
      u.getSnapshot !== e || i || (Nt !== null && Nt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        pa(9, us.bind(null, a, u, l, e), { destroy: void 0 }, null),
        pt === null)
      )
        throw Error(f(349));
      n || (fl & 60) !== 0 || as(a, e, l);
    }
    return l;
  }
  function as(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = ut.updateQueue),
      e === null
        ? ((e = pn()), (ut.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function us(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), is(e) && cs(t);
  }
  function ns(t, e, l) {
    return l(function () {
      is(e) && cs(t);
    });
  }
  function is(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ae(t, l);
    } catch {
      return !0;
    }
  }
  function cs(t) {
    var e = nl(t, 2);
    e !== null && Wt(e, t, 2);
  }
  function tc(t) {
    var e = te();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Yl)) {
        ll(!0);
        try {
          l();
        } finally {
          ll(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xe,
        lastRenderedState: t,
      }),
      e
    );
  }
  function fs(t, e, l, a) {
    return (t.baseState = l), Pi(t, mt, typeof a == "function" ? a : Xe);
  }
  function bm(t, e, l, a, u) {
    if (xn(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      X.T !== null ? l(!0) : (n.isTransition = !1),
        a(n),
        (l = e.pending),
        l === null
          ? ((n.next = e.pending = n), rs(e, n))
          : ((n.next = l.next), (e.pending = l.next = n));
    }
  }
  function rs(t, e) {
    var l = e.action,
      a = e.payload,
      u = t.state;
    if (e.isTransition) {
      var n = X.T,
        i = {};
      X.T = i;
      try {
        var r = l(u, a),
          h = X.S;
        h !== null && h(i, r), ss(t, e, r);
      } catch (p) {
        ec(t, e, p);
      } finally {
        X.T = n;
      }
    } else
      try {
        (n = l(u, a)), ss(t, e, n);
      } catch (p) {
        ec(t, e, p);
      }
  }
  function ss(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            os(t, e, a);
          },
          function (a) {
            return ec(t, e, a);
          }
        )
      : os(t, e, l);
  }
  function os(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      ds(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next), l === e ? (t.pending = null) : ((l = l.next), (e.next = l), rs(t, l)));
  }
  function ec(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), ds(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function ds(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function hs(t, e) {
    return e;
  }
  function ms(t, e) {
    if (st) {
      var l = pt.formState;
      if (l !== null) {
        t: {
          var a = ut;
          if (st) {
            if (wt) {
              e: {
                for (var u = wt, n = ze; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break e;
                  }
                  if (((u = xe(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (wt = xe(u.nextSibling)), (a = u.data === "F!");
                break t;
              }
            }
            Hl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = te()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hs,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Us.bind(null, ut, a)),
      (a.dispatch = l),
      (a = tc(!1)),
      (n = cc.bind(null, ut, !1, a.queue)),
      (a = te()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (l = bm.bind(null, ut, u, n, l)),
      (u.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function ys(t) {
    var e = Mt();
    return vs(e, mt, t);
  }
  function vs(t, e, l) {
    (e = Pi(t, e, hs)[0]),
      (t = Sn(Xe)[0]),
      (e = typeof e == "object" && e !== null && typeof e.then == "function" ? iu(e) : e);
    var a = Mt(),
      u = a.queue,
      n = u.dispatch;
    return (
      l !== a.memoizedState &&
        ((ut.flags |= 2048), pa(9, Sm.bind(null, u, l), { destroy: void 0 }, null)),
      [e, n, t]
    );
  }
  function Sm(t, e) {
    t.action = e;
  }
  function gs(t) {
    var e = Mt(),
      l = mt;
    if (l !== null) return vs(e, l, t);
    Mt(), (e = e.memoizedState), (l = Mt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function pa(t, e, l, a) {
    return (
      (t = { tag: t, create: e, inst: l, deps: a, next: null }),
      (e = ut.updateQueue),
      e === null && ((e = pn()), (ut.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function ps() {
    return Mt().memoizedState;
  }
  function En(t, e, l, a) {
    var u = te();
    (ut.flags |= t), (u.memoizedState = pa(1 | e, l, { destroy: void 0 }, a === void 0 ? null : a));
  }
  function Tn(t, e, l, a) {
    var u = Mt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    mt !== null && a !== null && Ki(a, mt.memoizedState.deps)
      ? (u.memoizedState = pa(e, l, n, a))
      : ((ut.flags |= t), (u.memoizedState = pa(1 | e, l, n, a)));
  }
  function bs(t, e) {
    En(8390656, 8, t, e);
  }
  function lc(t, e) {
    Tn(2048, 8, t, e);
  }
  function Ss(t, e) {
    return Tn(4, 2, t, e);
  }
  function Es(t, e) {
    return Tn(4, 4, t, e);
  }
  function Ts(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function xs(t, e, l) {
    (l = l != null ? l.concat([t]) : null), Tn(4, 4, Ts.bind(null, e, t), l);
  }
  function ac() {}
  function As(t, e) {
    var l = Mt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Ki(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Rs(t, e) {
    var l = Mt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Ki(e, a[1])) return a[0];
    if (((a = t()), Yl)) {
      ll(!0);
      try {
        t();
      } finally {
        ll(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function uc(t, e, l) {
    return l === void 0 || (fl & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = _o()), (ut.lanes |= t), (pl |= t), l);
  }
  function Os(t, e, l, a) {
    return ae(l, e)
      ? l
      : ha.current !== null
        ? ((t = uc(t, l, a)), ae(t, e) || (Bt = !0), t)
        : (fl & 42) === 0
          ? ((Bt = !0), (t.memoizedState = l))
          : ((t = _o()), (ut.lanes |= t), (pl |= t), e);
  }
  function zs(t, e, l, a, u) {
    var n = w.p;
    w.p = n !== 0 && 8 > n ? n : 8;
    var i = X.T,
      r = {};
    (X.T = r), cc(t, !1, e, l);
    try {
      var h = u(),
        p = X.S;
      if (
        (p !== null && p(r, h), h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var _ = vm(h, a);
        cu(t, e, _, ce(t));
      } else cu(t, e, a, ce(t));
    } catch (U) {
      cu(t, e, { then: function () {}, status: "rejected", reason: U }, ce());
    } finally {
      (w.p = n), (X.T = i);
    }
  }
  function Em() {}
  function nc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var u = _s(t).queue;
    zs(
      t,
      u,
      e,
      ft,
      l === null
        ? Em
        : function () {
            return Ds(t), l(a);
          }
    );
  }
  function _s(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ft,
      baseState: ft,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xe,
        lastRenderedState: ft,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xe,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Ds(t) {
    var e = _s(t).next.queue;
    cu(t, e, {}, ce());
  }
  function ic() {
    return Vt(zu);
  }
  function Ns() {
    return Mt().memoizedState;
  }
  function Ms() {
    return Mt().memoizedState;
  }
  function Tm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ce();
          t = dl(l);
          var a = hl(e, t, l);
          a !== null && (Wt(a, e, l), su(a, e, l)), (e = { cache: Qi() }), (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function xm(t, e, l) {
    var a = ce();
    (l = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }),
      xn(t) ? Cs(e, l) : ((l = Bi(t, e, l, a)), l !== null && (Wt(l, t, a), js(l, e, a)));
  }
  function Us(t, e, l) {
    var a = ce();
    cu(t, e, l, a);
  }
  function cu(t, e, l, a) {
    var u = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (xn(t)) Cs(e, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = e.lastRenderedReducer), n !== null)
      )
        try {
          var i = e.lastRenderedState,
            r = n(i, l);
          if (((u.hasEagerState = !0), (u.eagerState = r), ae(r, i)))
            return nn(t, e, u, 0), pt === null && un(), !1;
        } catch {
        } finally {
        }
      if (((l = Bi(t, e, u, a)), l !== null)) return Wt(l, t, a), js(l, e, a), !0;
    }
    return !1;
  }
  function cc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Wc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      xn(t))
    ) {
      if (e) throw Error(f(479));
    } else (e = Bi(t, l, a, 2)), e !== null && Wt(e, t, 2);
  }
  function xn(t) {
    var e = t.alternate;
    return t === ut || (e !== null && e === ut);
  }
  function Cs(t, e) {
    va = vn = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)), (t.pending = e);
  }
  function js(t, e, l) {
    if ((l & 4194176) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), Vf(t, l);
    }
  }
  var De = {
    readContext: Vt,
    use: bn,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useLayoutEffect: _t,
    useInsertionEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useSyncExternalStore: _t,
    useId: _t,
  };
  (De.useCacheRefresh = _t),
    (De.useMemoCache = _t),
    (De.useHostTransitionStatus = _t),
    (De.useFormState = _t),
    (De.useActionState = _t),
    (De.useOptimistic = _t);
  var Ll = {
    readContext: Vt,
    use: bn,
    useCallback: function (t, e) {
      return (te().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Vt,
    useEffect: bs,
    useImperativeHandle: function (t, e, l) {
      (l = l != null ? l.concat([t]) : null), En(4194308, 4, Ts.bind(null, e, t), l);
    },
    useLayoutEffect: function (t, e) {
      return En(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      En(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var l = te();
      e = e === void 0 ? null : e;
      var a = t();
      if (Yl) {
        ll(!0);
        try {
          t();
        } finally {
          ll(!1);
        }
      }
      return (l.memoizedState = [a, e]), a;
    },
    useReducer: function (t, e, l) {
      var a = te();
      if (l !== void 0) {
        var u = l(e);
        if (Yl) {
          ll(!0);
          try {
            l(e);
          } finally {
            ll(!1);
          }
        }
      } else u = e;
      return (
        (a.memoizedState = a.baseState = u),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: u,
        }),
        (a.queue = t),
        (t = t.dispatch = xm.bind(null, ut, t)),
        [a.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = te();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: function (t) {
      t = tc(t);
      var e = t.queue,
        l = Us.bind(null, ut, e);
      return (e.dispatch = l), [t.memoizedState, l];
    },
    useDebugValue: ac,
    useDeferredValue: function (t, e) {
      var l = te();
      return uc(l, t, e);
    },
    useTransition: function () {
      var t = tc(!1);
      return (t = zs.bind(null, ut, t.queue, !0, !1)), (te().memoizedState = t), [!1, t];
    },
    useSyncExternalStore: function (t, e, l) {
      var a = ut,
        u = te();
      if (st) {
        if (l === void 0) throw Error(f(407));
        l = l();
      } else {
        if (((l = e()), pt === null)) throw Error(f(349));
        (rt & 60) !== 0 || as(a, e, l);
      }
      u.memoizedState = l;
      var n = { value: l, getSnapshot: e };
      return (
        (u.queue = n),
        bs(ns.bind(null, a, n, t), [t]),
        (a.flags |= 2048),
        pa(9, us.bind(null, a, n, l, e), { destroy: void 0 }, null),
        l
      );
    },
    useId: function () {
      var t = te(),
        e = pt.identifierPrefix;
      if (st) {
        var l = we,
          a = Le;
        (l = (a & ~(1 << (32 - le(a) - 1))).toString(32) + l),
          (e = ":" + e + "R" + l),
          (l = gn++),
          0 < l && (e += "H" + l.toString(32)),
          (e += ":");
      } else (l = gm++), (e = ":" + e + "r" + l.toString(32) + ":");
      return (t.memoizedState = e);
    },
    useCacheRefresh: function () {
      return (te().memoizedState = Tm.bind(null, ut));
    },
  };
  (Ll.useMemoCache = Fi),
    (Ll.useHostTransitionStatus = ic),
    (Ll.useFormState = ms),
    (Ll.useActionState = ms),
    (Ll.useOptimistic = function (t) {
      var e = te();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (e.queue = l), (e = cc.bind(null, ut, !0, l)), (l.dispatch = e), [t, e];
    });
  var rl = {
    readContext: Vt,
    use: bn,
    useCallback: As,
    useContext: Vt,
    useEffect: lc,
    useImperativeHandle: xs,
    useInsertionEffect: Ss,
    useLayoutEffect: Es,
    useMemo: Rs,
    useReducer: Sn,
    useRef: ps,
    useState: function () {
      return Sn(Xe);
    },
    useDebugValue: ac,
    useDeferredValue: function (t, e) {
      var l = Mt();
      return Os(l, mt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Sn(Xe)[0],
        e = Mt().memoizedState;
      return [typeof t == "boolean" ? t : iu(t), e];
    },
    useSyncExternalStore: ls,
    useId: Ns,
  };
  (rl.useCacheRefresh = Ms),
    (rl.useMemoCache = Fi),
    (rl.useHostTransitionStatus = ic),
    (rl.useFormState = ys),
    (rl.useActionState = ys),
    (rl.useOptimistic = function (t, e) {
      var l = Mt();
      return fs(l, mt, t, e);
    });
  var wl = {
    readContext: Vt,
    use: bn,
    useCallback: As,
    useContext: Vt,
    useEffect: lc,
    useImperativeHandle: xs,
    useInsertionEffect: Ss,
    useLayoutEffect: Es,
    useMemo: Rs,
    useReducer: Ii,
    useRef: ps,
    useState: function () {
      return Ii(Xe);
    },
    useDebugValue: ac,
    useDeferredValue: function (t, e) {
      var l = Mt();
      return mt === null ? uc(l, t, e) : Os(l, mt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Ii(Xe)[0],
        e = Mt().memoizedState;
      return [typeof t == "boolean" ? t : iu(t), e];
    },
    useSyncExternalStore: ls,
    useId: Ns,
  };
  (wl.useCacheRefresh = Ms),
    (wl.useMemoCache = Fi),
    (wl.useHostTransitionStatus = ic),
    (wl.useFormState = gs),
    (wl.useActionState = gs),
    (wl.useOptimistic = function (t, e) {
      var l = Mt();
      return mt !== null ? fs(l, mt, t, e) : ((l.baseState = t), [t, l.queue.dispatch]);
    });
  function fc(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : lt({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var rc = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? F(t) === t : !1;
    },
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ce(),
        u = dl(a);
      (u.payload = e),
        l != null && (u.callback = l),
        (e = hl(t, u, a)),
        e !== null && (Wt(e, t, a), su(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ce(),
        u = dl(a);
      (u.tag = 1),
        (u.payload = e),
        l != null && (u.callback = l),
        (e = hl(t, u, a)),
        e !== null && (Wt(e, t, a), su(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ce(),
        a = dl(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = hl(t, a, l)),
        e !== null && (Wt(e, t, l), su(e, t, l));
    },
  };
  function Hs(t, e, l, a, u, n, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, n, i)
        : e.prototype && e.prototype.isPureReactComponent
          ? !ka(l, a) || !ka(u, n)
          : !0
    );
  }
  function Bs(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && rc.enqueueReplaceState(e, e.state, null);
  }
  function Gl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = lt({}, l));
      for (var u in t) l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  var An =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" && t !== null && typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function qs(t) {
    An(t);
  }
  function Ys(t) {
    console.error(t);
  }
  function Ls(t) {
    An(t);
  }
  function Rn(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function ws(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, { componentStack: l.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function sc(t, e, l) {
    return (
      (l = dl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Rn(t, e);
      }),
      l
    );
  }
  function Gs(t) {
    return (t = dl(t)), (t.tag = 3), t;
  }
  function Xs(t, e, l, a) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          ws(e, l, a);
        });
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        ws(e, l, a),
          typeof u != "function" && (bl === null ? (bl = new Set([this])) : bl.add(this));
        var r = a.stack;
        this.componentDidCatch(a.value, { componentStack: r !== null ? r : "" });
      });
  }
  function Am(t, e, l, a, u) {
    if (((l.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
      if (((e = l.alternate), e !== null && ru(e, l, u, !0), (l = me.current), l !== null)) {
        switch (l.tag) {
          case 13:
            return (
              _e === null ? Vc() : l.alternate === null && Rt === 0 && (Rt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              a === wi
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Jc(t, a, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === wi
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue), l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Jc(t, a, u)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return Jc(t, a, u), Vc(), !1;
    }
    if (st)
      return (
        (e = me.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            a !== Li && ((t = Error(f(422), { cause: a })), Pa(oe(t, l))))
          : (a !== Li && ((e = Error(f(423), { cause: a })), Pa(oe(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = oe(a, l)),
            (u = sc(t.stateNode, a, u)),
            Rc(t, u),
            Rt !== 4 && (Rt = 2)),
        !1
      );
    var n = Error(f(520), { cause: a });
    if (((n = oe(n, l)), pu === null ? (pu = [n]) : pu.push(n), Rt !== 4 && (Rt = 2), e === null))
      return !0;
    (a = oe(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = u & -u),
            (l.lanes |= t),
            (t = sc(l.stateNode, a, t)),
            Rc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (n = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (bl === null || !bl.has(n)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = Gs(u)),
              Xs(u, t, l, a),
              Rc(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Qs = Error(f(461)),
    Bt = !1;
  function Gt(t, e, l, a) {
    e.child = t === null ? kr(e, null, l, a) : Bl(e, t.child, l, a);
  }
  function Zs(t, e, l, a, u) {
    l = l.render;
    var n = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var r in a) r !== "ref" && (i[r] = a[r]);
    } else i = a;
    return (
      Ql(e),
      (a = Ji(t, e, l, i, n, u)),
      (r = ki()),
      t !== null && !Bt
        ? ($i(t, e, u), Qe(t, e, u))
        : (st && r && qi(e), (e.flags |= 1), Gt(t, e, a, u), e.child)
    );
  }
  function Vs(t, e, l, a, u) {
    if (t === null) {
      var n = l.type;
      return typeof n == "function" && !Cc(n) && n.defaultProps === void 0 && l.compare === null
        ? ((e.tag = 15), (e.type = n), Ks(t, e, n, a, u))
        : ((t = Nn(l.type, null, a, e, e.mode, u)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((n = t.child), !bc(t, u))) {
      var i = n.memoizedProps;
      if (((l = l.compare), (l = l !== null ? l : ka), l(i, a) && t.ref === e.ref))
        return Qe(t, e, u);
    }
    return (e.flags |= 1), (t = gl(n, a)), (t.ref = e.ref), (t.return = e), (e.child = t);
  }
  function Ks(t, e, l, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (ka(n, a) && t.ref === e.ref)
        if (((Bt = !1), (e.pendingProps = a = n), bc(t, u))) (t.flags & 131072) !== 0 && (Bt = !0);
        else return (e.lanes = t.lanes), Qe(t, e, u);
    }
    return oc(t, e, l, a, u);
  }
  function Js(t, e, l) {
    var a = e.pendingProps,
      u = a.children,
      n = (e.stateNode._pendingVisibility & 2) !== 0,
      i = t !== null ? t.memoizedState : null;
    if ((fu(t, e), a.mode === "hidden" || n)) {
      if ((e.flags & 128) !== 0) {
        if (((a = i !== null ? i.baseLanes | l : l), t !== null)) {
          for (u = e.child = t.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          e.childLanes = n & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return ks(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && yn(e, i !== null ? i.cachePool : null),
          i !== null ? $r(e, i) : Gi(),
          Wr(e);
      else
        return (e.lanes = e.childLanes = 536870912), ks(t, e, i !== null ? i.baseLanes | l : l, l);
    } else
      i !== null
        ? (yn(e, i.cachePool), $r(e, i), cl(), (e.memoizedState = null))
        : (t !== null && yn(e, null), Gi(), cl());
    return Gt(t, e, u, l), e.child;
  }
  function ks(t, e, l, a) {
    var u = Vi();
    return (
      (u = u === null ? null : { parent: jt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && yn(e, null),
      Gi(),
      Wr(e),
      t !== null && ru(t, e, a, !0),
      null
    );
  }
  function fu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 2097664);
    }
  }
  function oc(t, e, l, a, u) {
    return (
      Ql(e),
      (l = Ji(t, e, l, a, void 0, u)),
      (a = ki()),
      t !== null && !Bt
        ? ($i(t, e, u), Qe(t, e, u))
        : (st && a && qi(e), (e.flags |= 1), Gt(t, e, l, u), e.child)
    );
  }
  function $s(t, e, l, a, u, n) {
    return (
      Ql(e),
      (e.updateQueue = null),
      (l = es(e, a, l, u)),
      ts(t),
      (a = ki()),
      t !== null && !Bt
        ? ($i(t, e, n), Qe(t, e, n))
        : (st && a && qi(e), (e.flags |= 1), Gt(t, e, l, n), e.child)
    );
  }
  function Ws(t, e, l, a, u) {
    if ((Ql(e), e.stateNode === null)) {
      var n = ra,
        i = l.contextType;
      typeof i == "object" && i !== null && (n = Vt(i)),
        (n = new l(a, n)),
        (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = rc),
        (e.stateNode = n),
        (n._reactInternals = e),
        (n = e.stateNode),
        (n.props = a),
        (n.state = e.memoizedState),
        (n.refs = {}),
        xc(e),
        (i = l.contextType),
        (n.context = typeof i == "object" && i !== null ? Vt(i) : ra),
        (n.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (fc(e, l, i, a), (n.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
          i !== n.state && rc.enqueueReplaceState(n, n.state, null),
          du(e, a, n, u),
          ou(),
          (n.state = e.memoizedState)),
        typeof n.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      n = e.stateNode;
      var r = e.memoizedProps,
        h = Gl(l, r);
      n.props = h;
      var p = n.context,
        _ = l.contextType;
      (i = ra), typeof _ == "object" && _ !== null && (i = Vt(_));
      var U = l.getDerivedStateFromProps;
      (_ = typeof U == "function" || typeof n.getSnapshotBeforeUpdate == "function"),
        (r = e.pendingProps !== r),
        _ ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((r || p !== i) && Bs(e, n, a, i)),
        (ol = !1);
      var T = e.memoizedState;
      (n.state = T),
        du(e, a, n, u),
        ou(),
        (p = e.memoizedState),
        r || T !== p || ol
          ? (typeof U == "function" && (fc(e, l, U, a), (p = e.memoizedState)),
            (h = ol || Hs(e, l, h, a, T, p, i))
              ? (_ ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" && n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" && (e.flags |= 4194308))
              : (typeof n.componentDidMount == "function" && (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = p)),
            (n.props = a),
            (n.state = p),
            (n.context = i),
            (a = h))
          : (typeof n.componentDidMount == "function" && (e.flags |= 4194308), (a = !1));
    } else {
      (n = e.stateNode),
        Ac(t, e),
        (i = e.memoizedProps),
        (_ = Gl(l, i)),
        (n.props = _),
        (U = e.pendingProps),
        (T = n.context),
        (p = l.contextType),
        (h = ra),
        typeof p == "object" && p !== null && (h = Vt(p)),
        (r = l.getDerivedStateFromProps),
        (p = typeof r == "function" || typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== U || T !== h) && Bs(e, n, a, h)),
        (ol = !1),
        (T = e.memoizedState),
        (n.state = T),
        du(e, a, n, u),
        ou();
      var z = e.memoizedState;
      i !== U || T !== z || ol || (t !== null && t.dependencies !== null && On(t.dependencies))
        ? (typeof r == "function" && (fc(e, l, r, a), (z = e.memoizedState)),
          (_ =
            ol ||
            Hs(e, l, _, a, T, z, h) ||
            (t !== null && t.dependencies !== null && On(t.dependencies)))
            ? (p ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, z, h),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, z, h)),
              typeof n.componentDidUpdate == "function" && (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = z)),
          (n.props = a),
          (n.state = z),
          (n.context = h),
          (a = _))
        : (typeof n.componentDidUpdate != "function" ||
            (i === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      fu(t, e),
      (a = (e.flags & 128) !== 0),
      n || a
        ? ((n = e.stateNode),
          (l = a && typeof l.getDerivedStateFromError != "function" ? null : n.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Bl(e, t.child, null, u)), (e.child = Bl(e, null, l, u)))
            : Gt(t, e, l, u),
          (e.memoizedState = n.state),
          (t = e.child))
        : (t = Qe(t, e, u)),
      t
    );
  }
  function Fs(t, e, l, a) {
    return Fa(), (e.flags |= 256), Gt(t, e, l, a), e.child;
  }
  var dc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hc(t) {
    return { baseLanes: t, cachePool: Ir() };
  }
  function mc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= pe), t;
  }
  function Ps(t, e, l) {
    var a = e.pendingProps,
      u = !1,
      n = (e.flags & 128) !== 0,
      i;
    if (
      ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      i && ((u = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (st) {
        if ((u ? il(e) : cl(), st)) {
          var r = wt,
            h;
          if ((h = r)) {
            t: {
              for (h = r, r = ze; h.nodeType !== 8; ) {
                if (!r) {
                  r = null;
                  break t;
                }
                if (((h = xe(h.nextSibling)), h === null)) {
                  r = null;
                  break t;
                }
              }
              r = h;
            }
            r !== null
              ? ((e.memoizedState = {
                  dehydrated: r,
                  treeContext: Cl !== null ? { id: Le, overflow: we } : null,
                  retryLane: 536870912,
                }),
                (h = ge(18, null, null, 0)),
                (h.stateNode = r),
                (h.return = e),
                (e.child = h),
                ($t = e),
                (wt = null),
                (h = !0))
              : (h = !1);
          }
          h || Hl(e);
        }
        if (((r = e.memoizedState), r !== null && ((r = r.dehydrated), r !== null)))
          return r.data === "$!" ? (e.lanes = 16) : (e.lanes = 536870912), null;
        Ge(e);
      }
      return (
        (r = a.children),
        (a = a.fallback),
        u
          ? (cl(),
            (u = e.mode),
            (r = vc({ mode: "hidden", children: r }, u)),
            (a = Vl(a, u, l, null)),
            (r.return = e),
            (a.return = e),
            (r.sibling = a),
            (e.child = r),
            (u = e.child),
            (u.memoizedState = hc(l)),
            (u.childLanes = mc(t, i, l)),
            (e.memoizedState = dc),
            a)
          : (il(e), yc(e, r))
      );
    }
    if (((h = t.memoizedState), h !== null && ((r = h.dehydrated), r !== null))) {
      if (n)
        e.flags & 256
          ? (il(e), (e.flags &= -257), (e = gc(t, e, l)))
          : e.memoizedState !== null
            ? (cl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (cl(),
              (u = a.fallback),
              (r = e.mode),
              (a = vc({ mode: "visible", children: a.children }, r)),
              (u = Vl(u, r, l, null)),
              (u.flags |= 2),
              (a.return = e),
              (u.return = e),
              (a.sibling = u),
              (e.child = a),
              Bl(e, t.child, null, l),
              (a = e.child),
              (a.memoizedState = hc(l)),
              (a.childLanes = mc(t, i, l)),
              (e.memoizedState = dc),
              (e = u));
      else if ((il(e), r.data === "$!")) {
        if (((i = r.nextSibling && r.nextSibling.dataset), i)) var p = i.dgst;
        (i = p),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = i),
          Pa({ value: a, source: null, stack: null }),
          (e = gc(t, e, l));
      } else if ((Bt || ru(t, e, l, !1), (i = (l & t.childLanes) !== 0), Bt || i)) {
        if (((i = pt), i !== null)) {
          if (((a = l & -l), (a & 42) !== 0)) a = 1;
          else
            switch (a) {
              case 2:
                a = 1;
                break;
              case 8:
                a = 4;
                break;
              case 32:
                a = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                a = 64;
                break;
              case 268435456:
                a = 134217728;
                break;
              default:
                a = 0;
            }
          if (((a = (a & (i.suspendedLanes | l)) !== 0 ? 0 : a), a !== 0 && a !== h.retryLane))
            throw ((h.retryLane = a), nl(t, a), Wt(i, t, a), Qs);
        }
        r.data === "$?" || Vc(), (e = gc(t, e, l));
      } else
        r.data === "$?"
          ? ((e.flags |= 128),
            (e.child = t.child),
            (e = Lm.bind(null, t)),
            (r._reactRetry = e),
            (e = null))
          : ((t = h.treeContext),
            (wt = xe(r.nextSibling)),
            ($t = e),
            (st = !0),
            (Ee = null),
            (ze = !1),
            t !== null &&
              ((de[he++] = Le),
              (de[he++] = we),
              (de[he++] = Cl),
              (Le = t.id),
              (we = t.overflow),
              (Cl = e)),
            (e = yc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (cl(),
        (u = a.fallback),
        (r = e.mode),
        (h = t.child),
        (p = h.sibling),
        (a = gl(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 31457280),
        p !== null ? (u = gl(p, u)) : ((u = Vl(u, r, l, null)), (u.flags |= 2)),
        (u.return = e),
        (a.return = e),
        (a.sibling = u),
        (e.child = a),
        (a = u),
        (u = e.child),
        (r = t.child.memoizedState),
        r === null
          ? (r = hc(l))
          : ((h = r.cachePool),
            h !== null
              ? ((p = jt._currentValue), (h = h.parent !== p ? { parent: p, pool: p } : h))
              : (h = Ir()),
            (r = { baseLanes: r.baseLanes | l, cachePool: h })),
        (u.memoizedState = r),
        (u.childLanes = mc(t, i, l)),
        (e.memoizedState = dc),
        a)
      : (il(e),
        (l = t.child),
        (t = l.sibling),
        (l = gl(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions), i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function yc(t, e) {
    return (e = vc({ mode: "visible", children: e }, t.mode)), (e.return = t), (t.child = e);
  }
  function vc(t, e) {
    return Ro(t, e, 0, null);
  }
  function gc(t, e, l) {
    return (
      Bl(e, t.child, null, l),
      (t = yc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Is(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Ec(t.return, e, l);
  }
  function pc(t, e, l, a, u) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: u,
        })
      : ((n.isBackwards = e),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = l),
        (n.tailMode = u));
  }
  function to(t, e, l) {
    var a = e.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((Gt(t, e, a.children, l), (a = Ct.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Is(t, l, e);
          else if (t.tag === 19) Is(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((St(Ct, a), u)) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          (t = l.alternate), t !== null && mn(t) === null && (u = l), (l = l.sibling);
        (l = u),
          l === null ? ((u = e.child), (e.child = null)) : ((u = l.sibling), (l.sibling = null)),
          pc(e, !1, u, l, n);
        break;
      case "backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && mn(t) === null)) {
            e.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = l), (l = u), (u = t);
        }
        pc(e, !0, l, null, n);
        break;
      case "together":
        pc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Qe(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies), (pl |= e.lanes), (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ru(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, l = gl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        (t = t.sibling), (l = l.sibling = gl(t, t.pendingProps)), (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function bc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && On(t)));
  }
  function Rm(t, e, l) {
    switch (e.tag) {
      case 3:
        Gu(e, e.stateNode.containerInfo), sl(e, jt, t.memoizedState.cache), Fa();
        break;
      case 27:
      case 5:
        ri(e);
        break;
      case 4:
        Gu(e, e.stateNode.containerInfo);
        break;
      case 10:
        sl(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (il(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? Ps(t, e, l)
              : (il(e), (t = Qe(t, e, l)), t !== null ? t.sibling : null);
        il(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (ru(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          u)
        ) {
          if (a) return to(t, e, l);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          St(Ct, Ct.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Js(t, e, l);
      case 24:
        sl(e, jt, t.memoizedState.cache);
    }
    return Qe(t, e, l);
  }
  function eo(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Bt = !0;
      else {
        if (!bc(t, l) && (e.flags & 128) === 0) return (Bt = !1), Rm(t, e, l);
        Bt = (t.flags & 131072) !== 0;
      }
    else (Bt = !1), st && (e.flags & 1048576) !== 0 && Lr(e, rn, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            u = a._init;
          if (((a = u(a._payload)), (e.type = a), typeof a == "function"))
            Cc(a)
              ? ((t = Gl(a, t)), (e.tag = 1), (e = Ws(null, e, a, t, l)))
              : ((e.tag = 0), (e = oc(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === j)) {
                (e.tag = 11), (e = Zs(null, e, a, t, l));
                break t;
              } else if (u === q) {
                (e.tag = 14), (e = Vs(null, e, a, t, l));
                break t;
              }
            }
            throw ((e = Qt(a) || a), Error(f(306, e, "")));
          }
        }
        return e;
      case 0:
        return oc(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (u = Gl(a, e.pendingProps)), Ws(t, e, a, u, l);
      case 3:
        t: {
          if ((Gu(e, e.stateNode.containerInfo), t === null)) throw Error(f(387));
          var n = e.pendingProps;
          (u = e.memoizedState), (a = u.element), Ac(t, e), du(e, n, null, l);
          var i = e.memoizedState;
          if (
            ((n = i.cache),
            sl(e, jt, n),
            n !== u.cache && Tc(e, [jt], l, !0),
            ou(),
            (n = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: n, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Fs(t, e, n, l);
              break t;
            } else if (n !== a) {
              (a = oe(Error(f(424)), e)), Pa(a), (e = Fs(t, e, n, l));
              break t;
            } else
              for (
                wt = xe(e.stateNode.containerInfo.firstChild),
                  $t = e,
                  st = !0,
                  Ee = null,
                  ze = !0,
                  l = kr(e, null, n, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Fa(), n === a)) {
              e = Qe(t, e, l);
              break t;
            }
            Gt(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          fu(t, e),
          t === null
            ? (l = nd(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : st ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Xn(el.current).createElement(l)),
                (a[Zt] = e),
                (a[Pt] = t),
                Xt(a, l, t),
                Ht(a),
                (e.stateNode = a))
            : (e.memoizedState = nd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          ri(e),
          t === null &&
            st &&
            ((a = e.stateNode = ld(e.type, e.pendingProps, el.current)),
            ($t = e),
            (ze = !0),
            (wt = xe(a.firstChild))),
          (a = e.pendingProps.children),
          t !== null || st ? Gt(t, e, a, l) : (e.child = Bl(e, null, a, l)),
          fu(t, e),
          e.child
        );
      case 5:
        return (
          t === null &&
            st &&
            ((u = a = wt) &&
              ((a = e0(a, e.type, e.pendingProps, ze)),
              a !== null
                ? ((e.stateNode = a), ($t = e), (wt = xe(a.firstChild)), (ze = !1), (u = !0))
                : (u = !1)),
            u || Hl(e)),
          ri(e),
          (u = e.type),
          (n = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = n.children),
          nf(u, n) ? (a = null) : i !== null && nf(u, i) && (e.flags |= 32),
          e.memoizedState !== null && ((u = Ji(t, e, pm, null, null, l)), (zu._currentValue = u)),
          fu(t, e),
          Gt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            st &&
            ((t = l = wt) &&
              ((l = l0(l, e.pendingProps, ze)),
              l !== null ? ((e.stateNode = l), ($t = e), (wt = null), (t = !0)) : (t = !1)),
            t || Hl(e)),
          null
        );
      case 13:
        return Ps(t, e, l);
      case 4:
        return (
          Gu(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Bl(e, null, a, l)) : Gt(t, e, a, l),
          e.child
        );
      case 11:
        return Zs(t, e, e.type, e.pendingProps, l);
      case 7:
        return Gt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Gt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Gt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (a = e.pendingProps), sl(e, e.type, a.value), Gt(t, e, a.children, l), e.child;
      case 9:
        return (
          (u = e.type._context),
          (a = e.pendingProps.children),
          Ql(e),
          (u = Vt(u)),
          (a = a(u)),
          (e.flags |= 1),
          Gt(t, e, a, l),
          e.child
        );
      case 14:
        return Vs(t, e, e.type, e.pendingProps, l);
      case 15:
        return Ks(t, e, e.type, e.pendingProps, l);
      case 19:
        return to(t, e, l);
      case 22:
        return Js(t, e, l);
      case 24:
        return (
          Ql(e),
          (a = Vt(jt)),
          t === null
            ? ((u = Vi()),
              u === null &&
                ((u = pt),
                (n = Qi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= l),
                (u = n)),
              (e.memoizedState = { parent: a, cache: u }),
              xc(e),
              sl(e, jt, u))
            : ((t.lanes & l) !== 0 && (Ac(t, e), du(e, null, null, l), ou()),
              (u = t.memoizedState),
              (n = e.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (e.memoizedState = u),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u),
                  sl(e, jt, a))
                : ((a = n.cache), sl(e, jt, a), a !== u.cache && Tc(e, [jt], l, !0))),
          Gt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  var Sc = dt(null),
    Xl = null,
    Ze = null;
  function sl(t, e, l) {
    St(Sc, e._currentValue), (e._currentValue = l);
  }
  function Ve(t) {
    (t._currentValue = Sc.current), Dt(Sc);
  }
  function Ec(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Tc(t, e, l, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var r = n;
          n = u;
          for (var h = 0; h < e.length; h++)
            if (r.context === e[h]) {
              (n.lanes |= l),
                (r = n.alternate),
                r !== null && (r.lanes |= l),
                Ec(n.return, l, t),
                a || (i = null);
              break t;
            }
          n = r.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(f(341));
        (i.lanes |= l), (n = i.alternate), n !== null && (n.lanes |= l), Ec(i, l, t), (i = null);
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            (u.return = i.return), (i = u);
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ru(t, e, l, a) {
    t = null;
    for (var u = e, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(f(387));
        if (((i = i.memoizedProps), i !== null)) {
          var r = u.type;
          ae(u.pendingProps.value, i.value) || (t !== null ? t.push(r) : (t = [r]));
        }
      } else if (u === wu.current) {
        if (((i = u.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(zu) : (t = [zu]));
      }
      u = u.return;
    }
    t !== null && Tc(e, t, l, a), (e.flags |= 262144);
  }
  function On(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ae(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ql(t) {
    (Xl = t), (Ze = null), (t = t.dependencies), t !== null && (t.firstContext = null);
  }
  function Vt(t) {
    return lo(Xl, t);
  }
  function zn(t, e) {
    return Xl === null && Ql(t), lo(t, e);
  }
  function lo(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ze === null)) {
      if (t === null) throw Error(f(308));
      (Ze = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288);
    } else Ze = Ze.next = e;
    return l;
  }
  var ol = !1;
  function xc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ac(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function dl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function hl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Tt & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (a.pending = e),
        (e = cn(t)),
        qr(t, null, l),
        e
      );
    }
    return nn(t, a, e, l), cn(t);
  }
  function su(t, e, l) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194176) !== 0))) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), Vf(t, l);
    }
  }
  function Rc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var u = null,
        n = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          n === null ? (u = n = i) : (n = n.next = i), (l = l.next);
        } while (l !== null);
        n === null ? (u = n = e) : (n = n.next = e);
      } else u = n = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var Oc = !1;
  function ou() {
    if (Oc) {
      var t = ya;
      if (t !== null) throw t;
    }
  }
  function du(t, e, l, a) {
    Oc = !1;
    var u = t.updateQueue;
    ol = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      r = u.shared.pending;
    if (r !== null) {
      u.shared.pending = null;
      var h = r,
        p = h.next;
      (h.next = null), i === null ? (n = p) : (i.next = p), (i = h);
      var _ = t.alternate;
      _ !== null &&
        ((_ = _.updateQueue),
        (r = _.lastBaseUpdate),
        r !== i && (r === null ? (_.firstBaseUpdate = p) : (r.next = p), (_.lastBaseUpdate = h)));
    }
    if (n !== null) {
      var U = u.baseState;
      (i = 0), (_ = p = h = null), (r = n);
      do {
        var T = r.lane & -536870913,
          z = T !== r.lane;
        if (z ? (rt & T) === T : (a & T) === T) {
          T !== 0 && T === ma && (Oc = !0),
            _ !== null &&
              (_ = _.next =
                { lane: 0, tag: r.tag, payload: r.payload, callback: null, next: null });
          t: {
            var V = t,
              I = r;
            T = e;
            var Ot = l;
            switch (I.tag) {
              case 1:
                if (((V = I.payload), typeof V == "function")) {
                  U = V.call(Ot, U, T);
                  break t;
                }
                U = V;
                break t;
              case 3:
                V.flags = (V.flags & -65537) | 128;
              case 0:
                if (
                  ((V = I.payload), (T = typeof V == "function" ? V.call(Ot, U, T) : V), T == null)
                )
                  break t;
                U = lt({}, U, T);
                break t;
              case 2:
                ol = !0;
            }
          }
          (T = r.callback),
            T !== null &&
              ((t.flags |= 64),
              z && (t.flags |= 8192),
              (z = u.callbacks),
              z === null ? (u.callbacks = [T]) : z.push(T));
        } else
          (z = { lane: T, tag: r.tag, payload: r.payload, callback: r.callback, next: null }),
            _ === null ? ((p = _ = z), (h = U)) : (_ = _.next = z),
            (i |= T);
        if (((r = r.next), r === null)) {
          if (((r = u.shared.pending), r === null)) break;
          (z = r), (r = z.next), (z.next = null), (u.lastBaseUpdate = z), (u.shared.pending = null);
        }
      } while (!0);
      _ === null && (h = U),
        (u.baseState = h),
        (u.firstBaseUpdate = p),
        (u.lastBaseUpdate = _),
        n === null && (u.shared.lanes = 0),
        (pl |= i),
        (t.lanes = i),
        (t.memoizedState = U);
    }
  }
  function ao(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function uo(t, e) {
    var l = t.callbacks;
    if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) ao(l[t], e);
  }
  function hu(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var n = l.create,
              i = l.inst;
            (a = n()), (i.destroy = a);
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (r) {
      vt(e, e.return, r);
    }
  }
  function ml(t, e, l) {
    try {
      var a = e.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              r = i.destroy;
            if (r !== void 0) {
              (i.destroy = void 0), (u = e);
              var h = l;
              try {
                r();
              } catch (p) {
                vt(u, h, p);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (p) {
      vt(e, e.return, p);
    }
  }
  function no(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        uo(e, l);
      } catch (a) {
        vt(t, t.return, a);
      }
    }
  }
  function io(t, e, l) {
    (l.props = Gl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      vt(t, e, a);
    }
  }
  function Zl(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        var a = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = a;
            break;
          default:
            u = a;
        }
        typeof l == "function" ? (t.refCleanup = l(u)) : (l.current = u);
      }
    } catch (n) {
      vt(t, e, n);
    }
  }
  function ue(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          vt(t, e, u);
        } finally {
          (t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          vt(t, e, u);
        }
      else l.current = null;
  }
  function co(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (u) {
      vt(t, t.return, u);
    }
  }
  function fo(t, e, l) {
    try {
      var a = t.stateNode;
      Wm(a, t.type, l, e), (a[Pt] = e);
    } catch (u) {
      vt(t, t.return, u);
    }
  }
  function ro(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4;
  }
  function zc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || ro(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function _c(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(t, e)
            : l.insertBefore(t, e)
          : (l.nodeType === 8
              ? ((e = l.parentNode), e.insertBefore(t, l))
              : ((e = l), e.appendChild(t)),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Gn));
    else if (a !== 4 && a !== 27 && ((t = t.child), t !== null))
      for (_c(t, e, l), t = t.sibling; t !== null; ) _c(t, e, l), (t = t.sibling);
  }
  function _n(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6) (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && a !== 27 && ((t = t.child), t !== null))
      for (_n(t, e, l), t = t.sibling; t !== null; ) _n(t, e, l), (t = t.sibling);
  }
  var Ke = !1,
    At = !1,
    Dc = !1,
    so = typeof WeakSet == "function" ? WeakSet : Set,
    qt = null,
    oo = !1;
  function Om(t, e) {
    if (((t = t.containerInfo), (af = kn), (t = _r(t)), Mi(t))) {
      if ("selectionStart" in t) var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, n.nodeType;
            } catch {
              l = null;
              break t;
            }
            var i = 0,
              r = -1,
              h = -1,
              p = 0,
              _ = 0,
              U = t,
              T = null;
            e: for (;;) {
              for (
                var z;
                U !== l || (u !== 0 && U.nodeType !== 3) || (r = i + u),
                  U !== n || (a !== 0 && U.nodeType !== 3) || (h = i + a),
                  U.nodeType === 3 && (i += U.nodeValue.length),
                  (z = U.firstChild) !== null;

              )
                (T = U), (U = z);
              for (;;) {
                if (U === t) break e;
                if (
                  (T === l && ++p === u && (r = i),
                  T === n && ++_ === a && (h = i),
                  (z = U.nextSibling) !== null)
                )
                  break;
                (U = T), (T = U.parentNode);
              }
              U = z;
            }
            l = r === -1 || h === -1 ? null : { start: r, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (uf = { focusedElem: t, selectionRange: l }, kn = !1, qt = e; qt !== null; )
      if (((e = qt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
        (t.return = e), (qt = t);
      else
        for (; qt !== null; ) {
          switch (((e = qt), (n = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                (t = void 0),
                  (l = e),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = l.stateNode);
                try {
                  var V = Gl(l.type, u, l.elementType === l.type);
                  (t = a.getSnapshotBeforeUpdate(V, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (I) {
                  vt(l, l.return, I);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)) rf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      rf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (qt = t);
            break;
          }
          qt = e.return;
        }
    return (V = oo), (oo = !1), V;
  }
  function ho(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ke(t, l), a & 4 && hu(5, l);
        break;
      case 1:
        if ((ke(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (r) {
              vt(l, l.return, r);
            }
          else {
            var u = Gl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              vt(l, l.return, r);
            }
          }
        a & 64 && no(l), a & 512 && Zl(l, l.return);
        break;
      case 3:
        if ((ke(t, l), a & 64 && ((a = l.updateQueue), a !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            uo(a, t);
          } catch (r) {
            vt(l, l.return, r);
          }
        }
        break;
      case 26:
        ke(t, l), a & 512 && Zl(l, l.return);
        break;
      case 27:
      case 5:
        ke(t, l), e === null && a & 4 && co(l), a & 512 && Zl(l, l.return);
        break;
      case 12:
        ke(t, l);
        break;
      case 13:
        ke(t, l), a & 4 && vo(t, l);
        break;
      case 22:
        if (((u = l.memoizedState !== null || Ke), !u)) {
          e = (e !== null && e.memoizedState !== null) || At;
          var n = Ke,
            i = At;
          (Ke = u),
            (At = e) && !i ? yl(t, l, (l.subtreeFlags & 8772) !== 0) : ke(t, l),
            (Ke = n),
            (At = i);
        }
        a & 512 && (l.memoizedProps.mode === "manual" ? Zl(l, l.return) : ue(l, l.return));
        break;
      default:
        ke(t, l);
    }
  }
  function mo(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), mo(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && yi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Ut = null,
    ne = !1;
  function Je(t, e, l) {
    for (l = l.child; l !== null; ) yo(t, e, l), (l = l.sibling);
  }
  function yo(t, e, l) {
    if (ee && typeof ee.onCommitFiberUnmount == "function")
      try {
        ee.onCommitFiberUnmount(Ba, l);
      } catch {}
    switch (l.tag) {
      case 26:
        At || ue(l, e),
          Je(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        At || ue(l, e);
        var a = Ut,
          u = ne;
        for (Ut = l.stateNode, Je(t, e, l), l = l.stateNode, e = l.attributes; e.length; )
          l.removeAttributeNode(e[0]);
        yi(l), (Ut = a), (ne = u);
        break;
      case 5:
        At || ue(l, e);
      case 6:
        u = Ut;
        var n = ne;
        if (((Ut = null), Je(t, e, l), (Ut = u), (ne = n), Ut !== null))
          if (ne)
            try {
              (t = Ut),
                (a = l.stateNode),
                t.nodeType === 8 ? t.parentNode.removeChild(a) : t.removeChild(a);
            } catch (i) {
              vt(l, e, i);
            }
          else
            try {
              Ut.removeChild(l.stateNode);
            } catch (i) {
              vt(l, e, i);
            }
        break;
      case 18:
        Ut !== null &&
          (ne
            ? ((e = Ut),
              (l = l.stateNode),
              e.nodeType === 8 ? ff(e.parentNode, l) : e.nodeType === 1 && ff(e, l),
              Mu(e))
            : ff(Ut, l.stateNode));
        break;
      case 4:
        (a = Ut),
          (u = ne),
          (Ut = l.stateNode.containerInfo),
          (ne = !0),
          Je(t, e, l),
          (Ut = a),
          (ne = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        At || ml(2, l, e), At || ml(4, l, e), Je(t, e, l);
        break;
      case 1:
        At ||
          (ue(l, e), (a = l.stateNode), typeof a.componentWillUnmount == "function" && io(l, e, a)),
          Je(t, e, l);
        break;
      case 21:
        Je(t, e, l);
        break;
      case 22:
        At || ue(l, e), (At = (a = At) || l.memoizedState !== null), Je(t, e, l), (At = a);
        break;
      default:
        Je(t, e, l);
    }
  }
  function vo(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Mu(t);
      } catch (l) {
        vt(e, e.return, l);
      }
  }
  function zm(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new so()), e;
      case 22:
        return (
          (t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new so()), e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Nc(t, e) {
    var l = zm(t);
    e.forEach(function (a) {
      var u = wm.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(u, u));
    });
  }
  function ye(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a],
          n = t,
          i = e,
          r = i;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
            case 5:
              (Ut = r.stateNode), (ne = !1);
              break t;
            case 3:
              (Ut = r.stateNode.containerInfo), (ne = !0);
              break t;
            case 4:
              (Ut = r.stateNode.containerInfo), (ne = !0);
              break t;
          }
          r = r.return;
        }
        if (Ut === null) throw Error(f(160));
        yo(n, i, u),
          (Ut = null),
          (ne = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) go(e, t), (e = e.sibling);
  }
  var Te = null;
  function go(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ye(e, t), ve(t), a & 4 && (ml(3, t, t.return), hu(3, t), ml(5, t, t.return));
        break;
      case 1:
        ye(e, t),
          ve(t),
          a & 512 && (At || l === null || ue(l, l.return)),
          a & 64 &&
            Ke &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var u = Te;
        if ((ye(e, t), ve(t), a & 512 && (At || l === null || ue(l, l.return)), a & 4)) {
          var n = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type), (l = t.memoizedProps), (u = u.ownerDocument || u);
                  e: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[La] ||
                          n[Zt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(n, u.querySelector("head > title"))),
                        Xt(n, a, l),
                        (n[Zt] = t),
                        Ht(n),
                        (a = n);
                      break t;
                    case "link":
                      var i = fd("link", "href", u).get(a + (l.href || ""));
                      if (i) {
                        for (var r = 0; r < i.length; r++)
                          if (
                            ((n = i[r]),
                            n.getAttribute("href") === (l.href == null ? null : l.href) &&
                              n.getAttribute("rel") === (l.rel == null ? null : l.rel) &&
                              n.getAttribute("title") === (l.title == null ? null : l.title) &&
                              n.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(r, 1);
                            break e;
                          }
                      }
                      (n = u.createElement(a)), Xt(n, a, l), u.head.appendChild(n);
                      break;
                    case "meta":
                      if ((i = fd("meta", "content", u).get(a + (l.content || "")))) {
                        for (r = 0; r < i.length; r++)
                          if (
                            ((n = i[r]),
                            n.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              n.getAttribute("name") === (l.name == null ? null : l.name) &&
                              n.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              n.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              n.getAttribute("charset") === (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(r, 1);
                            break e;
                          }
                      }
                      (n = u.createElement(a)), Xt(n, a, l), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (n[Zt] = t), Ht(n), (a = n);
                }
                t.stateNode = a;
              } else rd(u, t.type, t.stateNode);
            else t.stateNode = cd(u, a, t.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                  : n.count--,
                a === null ? rd(u, t.type, t.stateNode) : cd(u, a, t.memoizedProps))
              : a === null && t.stateNode !== null && fo(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        if (a & 4 && t.alternate === null) {
          (u = t.stateNode), (n = t.memoizedProps);
          try {
            for (var h = u.firstChild; h; ) {
              var p = h.nextSibling,
                _ = h.nodeName;
              h[La] ||
                _ === "HEAD" ||
                _ === "BODY" ||
                _ === "SCRIPT" ||
                _ === "STYLE" ||
                (_ === "LINK" && h.rel.toLowerCase() === "stylesheet") ||
                u.removeChild(h),
                (h = p);
            }
            for (var U = t.type, T = u.attributes; T.length; ) u.removeAttributeNode(T[0]);
            Xt(u, U, n), (u[Zt] = t), (u[Pt] = n);
          } catch (V) {
            vt(t, t.return, V);
          }
        }
      case 5:
        if ((ye(e, t), ve(t), a & 512 && (At || l === null || ue(l, l.return)), t.flags & 32)) {
          u = t.stateNode;
          try {
            la(u, "");
          } catch (V) {
            vt(t, t.return, V);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), fo(t, u, l !== null ? l.memoizedProps : u)),
          a & 1024 && (Dc = !0);
        break;
      case 6:
        if ((ye(e, t), ve(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (V) {
            vt(t, t.return, V);
          }
        }
        break;
      case 3:
        if (
          ((Vn = null),
          (u = Te),
          (Te = Qn(e.containerInfo)),
          ye(e, t),
          (Te = u),
          ve(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Mu(e.containerInfo);
          } catch (V) {
            vt(t, t.return, V);
          }
        Dc && ((Dc = !1), po(t));
        break;
      case 4:
        (a = Te), (Te = Qn(t.stateNode.containerInfo)), ye(e, t), ve(t), (Te = a);
        break;
      case 12:
        ye(e, t), ve(t);
        break;
      case 13:
        ye(e, t),
          ve(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (Lc = Oe()),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Nc(t, a)));
        break;
      case 22:
        if (
          (a & 512 && (At || l === null || ue(l, l.return)),
          (h = t.memoizedState !== null),
          (p = l !== null && l.memoizedState !== null),
          (_ = Ke),
          (U = At),
          (Ke = _ || h),
          (At = U || p),
          ye(e, t),
          (At = U),
          (Ke = _),
          ve(t),
          (e = t.stateNode),
          (e._current = t),
          (e._visibility &= -3),
          (e._visibility |= e._pendingVisibility & 2),
          a & 8192 &&
            ((e._visibility = h ? e._visibility & -2 : e._visibility | 1),
            h && ((e = Ke || At), l === null || p || e || ba(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (l === null) {
                p = l = e;
                try {
                  if (((u = p.stateNode), h))
                    (n = u.style),
                      typeof n.setProperty == "function"
                        ? n.setProperty("display", "none", "important")
                        : (n.display = "none");
                  else {
                    (i = p.stateNode), (r = p.memoizedProps.style);
                    var z = r != null && r.hasOwnProperty("display") ? r.display : null;
                    i.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (V) {
                  vt(p, p.return, V);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                p = e;
                try {
                  p.stateNode.nodeValue = h ? "" : p.memoizedProps;
                } catch (V) {
                  vt(p, p.return, V);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null), (e.sibling.return = e.return), (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), Nc(t, l))));
        break;
      case 19:
        ye(e, t),
          ve(t),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Nc(t, a)));
        break;
      case 21:
        break;
      default:
        ye(e, t), ve(t);
    }
  }
  function ve(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var l = t.return; l !== null; ) {
              if (ro(l)) {
                var a = l;
                break t;
              }
              l = l.return;
            }
            throw Error(f(160));
          }
          switch (a.tag) {
            case 27:
              var u = a.stateNode,
                n = zc(t);
              _n(t, n, u);
              break;
            case 5:
              var i = a.stateNode;
              a.flags & 32 && (la(i, ""), (a.flags &= -33));
              var r = zc(t);
              _n(t, r, i);
              break;
            case 3:
            case 4:
              var h = a.stateNode.containerInfo,
                p = zc(t);
              _c(t, p, h);
              break;
            default:
              throw Error(f(161));
          }
        }
      } catch (_) {
        vt(t, t.return, _);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function po(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        po(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling);
      }
  }
  function ke(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) ho(t, e.alternate, e), (e = e.sibling);
  }
  function ba(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ml(4, e, e.return), ba(e);
          break;
        case 1:
          ue(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && io(e, e.return, l), ba(e);
          break;
        case 26:
        case 27:
        case 5:
          ue(e, e.return), ba(e);
          break;
        case 22:
          ue(e, e.return), e.memoizedState === null && ba(e);
          break;
        default:
          ba(e);
      }
      t = t.sibling;
    }
  }
  function yl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = t,
        n = e,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          yl(u, n, l), hu(4, n);
          break;
        case 1:
          if ((yl(u, n, l), (a = n), (u = a.stateNode), typeof u.componentDidMount == "function"))
            try {
              u.componentDidMount();
            } catch (p) {
              vt(a, a.return, p);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var r = a.stateNode;
            try {
              var h = u.shared.hiddenCallbacks;
              if (h !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < h.length; u++) ao(h[u], r);
            } catch (p) {
              vt(a, a.return, p);
            }
          }
          l && i & 64 && no(n), Zl(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          yl(u, n, l), l && a === null && i & 4 && co(n), Zl(n, n.return);
          break;
        case 12:
          yl(u, n, l);
          break;
        case 13:
          yl(u, n, l), l && i & 4 && vo(u, n);
          break;
        case 22:
          n.memoizedState === null && yl(u, n, l), Zl(n, n.return);
          break;
        default:
          yl(u, n, l);
      }
      e = e.sibling;
    }
  }
  function Mc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && au(l));
  }
  function Uc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && au(t));
  }
  function vl(t, e, l, a) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) bo(t, e, l, a), (e = e.sibling);
  }
  function bo(t, e, l, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        vl(t, e, l, a), u & 2048 && hu(9, e);
        break;
      case 3:
        vl(t, e, l, a),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && au(t)));
        break;
      case 12:
        if (u & 2048) {
          vl(t, e, l, a), (t = e.stateNode);
          try {
            var n = e.memoizedProps,
              i = n.id,
              r = n.onPostCommit;
            typeof r == "function" &&
              r(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (h) {
            vt(e, e.return, h);
          }
        } else vl(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (n = e.stateNode),
          e.memoizedState !== null
            ? n._visibility & 4
              ? vl(t, e, l, a)
              : mu(t, e)
            : n._visibility & 4
              ? vl(t, e, l, a)
              : ((n._visibility |= 4), Sa(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          u & 2048 && Mc(e.alternate, e);
        break;
      case 24:
        vl(t, e, l, a), u & 2048 && Uc(e.alternate, e);
        break;
      default:
        vl(t, e, l, a);
    }
  }
  function Sa(t, e, l, a, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var n = t,
        i = e,
        r = l,
        h = a,
        p = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Sa(n, i, r, h, u), hu(8, i);
          break;
        case 23:
          break;
        case 22:
          var _ = i.stateNode;
          i.memoizedState !== null
            ? _._visibility & 4
              ? Sa(n, i, r, h, u)
              : mu(n, i)
            : ((_._visibility |= 4), Sa(n, i, r, h, u)),
            u && p & 2048 && Mc(i.alternate, i);
          break;
        case 24:
          Sa(n, i, r, h, u), u && p & 2048 && Uc(i.alternate, i);
          break;
        default:
          Sa(n, i, r, h, u);
      }
      e = e.sibling;
    }
  }
  function mu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          u = a.flags;
        switch (a.tag) {
          case 22:
            mu(l, a), u & 2048 && Mc(a.alternate, a);
            break;
          case 24:
            mu(l, a), u & 2048 && Uc(a.alternate, a);
            break;
          default:
            mu(l, a);
        }
        e = e.sibling;
      }
  }
  var yu = 8192;
  function Ea(t) {
    if (t.subtreeFlags & yu) for (t = t.child; t !== null; ) So(t), (t = t.sibling);
  }
  function So(t) {
    switch (t.tag) {
      case 26:
        Ea(t), t.flags & yu && t.memoizedState !== null && y0(Te, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ea(t);
        break;
      case 3:
      case 4:
        var e = Te;
        (Te = Qn(t.stateNode.containerInfo)), Ea(t), (Te = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = yu), (yu = 16777216), Ea(t), (yu = e))
            : Ea(t));
        break;
      default:
        Ea(t);
    }
  }
  function Eo(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function vu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (qt = a), xo(a, t);
        }
      Eo(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) To(t), (t = t.sibling);
  }
  function To(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        vu(t), t.flags & 2048 && ml(9, t, t.return);
        break;
      case 3:
        vu(t);
        break;
      case 12:
        vu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 4 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -5), Dn(t))
          : vu(t);
        break;
      default:
        vu(t);
    }
  }
  function Dn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (qt = a), xo(a, t);
        }
      Eo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          ml(8, e, e.return), Dn(e);
          break;
        case 22:
          (l = e.stateNode), l._visibility & 4 && ((l._visibility &= -5), Dn(e));
          break;
        default:
          Dn(e);
      }
      t = t.sibling;
    }
  }
  function xo(t, e) {
    for (; qt !== null; ) {
      var l = qt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ml(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          au(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (qt = a);
      else
        t: for (l = t; qt !== null; ) {
          a = qt;
          var u = a.sibling,
            n = a.return;
          if ((mo(a), a === l)) {
            qt = null;
            break t;
          }
          if (u !== null) {
            (u.return = n), (qt = u);
            break t;
          }
          qt = n;
        }
    }
  }
  function _m(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ge(t, e, l, a) {
    return new _m(t, e, l, a);
  }
  function Cc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function gl(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = ge(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 31457280),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Ao(t, e) {
    t.flags &= 31457282;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Nn(t, e, l, a, u, n) {
    var i = 0;
    if (((a = t), typeof t == "function")) Cc(t) && (i = 1);
    else if (typeof t == "string")
      i = h0(t, l, Re.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case b:
          return Vl(l.children, u, n, e);
        case m:
          (i = 8), (u |= 24);
          break;
        case M:
          return (t = ge(12, l, e, u | 2)), (t.elementType = M), (t.lanes = n), t;
        case Z:
          return (t = ge(13, l, e, u)), (t.elementType = Z), (t.lanes = n), t;
        case Y:
          return (t = ge(19, l, e, u)), (t.elementType = Y), (t.lanes = n), t;
        case Q:
          return Ro(l, u, n, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case B:
              case C:
                i = 10;
                break t;
              case D:
                i = 9;
                break t;
              case j:
                i = 11;
                break t;
              case q:
                i = 14;
                break t;
              case J:
                (i = 16), (a = null);
                break t;
            }
          (i = 29), (l = Error(f(130, t === null ? "null" : typeof t, ""))), (a = null);
      }
    return (e = ge(i, l, e, u)), (e.elementType = t), (e.type = a), (e.lanes = n), e;
  }
  function Vl(t, e, l, a) {
    return (t = ge(7, t, a, e)), (t.lanes = l), t;
  }
  function Ro(t, e, l, a) {
    (t = ge(22, t, a, e)), (t.elementType = Q), (t.lanes = l);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var n = u._current;
        if (n === null) throw Error(f(456));
        if ((u._pendingVisibility & 2) === 0) {
          var i = nl(n, 2);
          i !== null && ((u._pendingVisibility |= 2), Wt(i, n, 2));
        }
      },
      attach: function () {
        var n = u._current;
        if (n === null) throw Error(f(456));
        if ((u._pendingVisibility & 2) !== 0) {
          var i = nl(n, 2);
          i !== null && ((u._pendingVisibility &= -3), Wt(i, n, 2));
        }
      },
    };
    return (t.stateNode = u), t;
  }
  function jc(t, e, l) {
    return (t = ge(6, t, null, e)), (t.lanes = l), t;
  }
  function Hc(t, e, l) {
    return (
      (e = ge(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  function $e(t) {
    t.flags |= 4;
  }
  function Oo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !sd(e))) {
      if (
        ((e = me.current),
        e !== null &&
          ((rt & 4194176) === rt
            ? _e !== null
            : ((rt & 62914560) !== rt && (rt & 536870912) === 0) || e !== _e))
      )
        throw ((tu = wi), Xr);
      t.flags |= 8192;
    }
  }
  function Mn(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? Qf() : 536870912), (t.lanes |= e), (xa |= e));
  }
  function gu(t, e) {
    if (!st)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; ) e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; ) l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Et(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 31457280),
          (a |= u.flags & 31457280),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function Dm(t, e, l) {
    var a = e.pendingProps;
    switch ((Yi(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Et(e), null;
      case 1:
        return Et(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ve(jt),
          Wl(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Wa(e)
              ? $e(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Ee !== null && (Qc(Ee), (Ee = null)))),
          Et(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? ($e(e), l !== null ? (Et(e), Oo(e, l)) : (Et(e), (e.flags &= -16777217)))
            : l
              ? l !== t.memoizedState
                ? ($e(e), Et(e), Oo(e, l))
                : (Et(e), (e.flags &= -16777217))
              : (t.memoizedProps !== a && $e(e), Et(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Xu(e), (l = el.current);
        var u = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && $e(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return Et(e), null;
          }
          (t = Re.current), Wa(e) ? wr(e) : ((t = ld(u, a, l)), (e.stateNode = t), $e(e));
        }
        return Et(e), null;
      case 5:
        if ((Xu(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && $e(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return Et(e), null;
          }
          if (((t = Re.current), Wa(e))) wr(e);
          else {
            switch (((u = Xn(el.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple ? (t.multiple = !0) : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? u.createElement(l, { is: a.is })
                        : u.createElement(l);
                }
            }
            (t[Zt] = e), (t[Pt] = a);
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            e.stateNode = t;
            t: switch ((Xt(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && $e(e);
          }
        }
        return Et(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && $e(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
          if (((t = el.current), Wa(e))) {
            if (((t = e.stateNode), (l = e.memoizedProps), (a = null), (u = $t), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (t[Zt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Wo(t.nodeValue, l)
              )),
              t || Hl(e);
          } else (t = Xn(t).createTextNode(a)), (t[Zt] = e), (e.stateNode = t);
        }
        return Et(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Wa(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(f(318));
              if (((u = e.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(f(317));
              u[Zt] = e;
            } else Fa(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4);
            Et(e), (u = !1);
          } else Ee !== null && (Qc(Ee), (Ee = null)), (u = !0);
          if (!u) return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
        }
        if ((Ge(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (((l = a !== null), (t = t !== null && t.memoizedState !== null), l)) {
          (a = e.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048);
        }
        return l !== t && l && (e.child.flags |= 8192), Mn(e, e.updateQueue), Et(e), null;
      case 4:
        return Wl(), t === null && tf(e.stateNode.containerInfo), Et(e), null;
      case 10:
        return Ve(e.type), Et(e), null;
      case 19:
        if ((Dt(Ct), (u = e.memoizedState), u === null)) return Et(e), null;
        if (((a = (e.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) gu(u, !1);
          else {
            if (Rt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((n = mn(t)), n !== null)) {
                  for (
                    e.flags |= 128,
                      gu(u, !1),
                      t = n.updateQueue,
                      e.updateQueue = t,
                      Mn(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    Ao(l, t), (l = l.sibling);
                  return St(Ct, (Ct.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              Oe() > Un &&
              ((e.flags |= 128), (a = !0), gu(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = mn(n)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Mn(e, t),
                gu(u, !0),
                u.tail === null && u.tailMode === "hidden" && !n.alternate && !st)
              )
                return Et(e), null;
            } else
              2 * Oe() - u.renderingStartTime > Un &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), gu(u, !1), (e.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = e.child), (e.child = n))
            : ((t = u.last), t !== null ? (t.sibling = n) : (e.child = n), (u.last = n));
        }
        return u.tail !== null
          ? ((e = u.tail),
            (u.rendering = e),
            (u.tail = e.sibling),
            (u.renderingStartTime = Oe()),
            (e.sibling = null),
            (t = Ct.current),
            St(Ct, a ? (t & 1) | 2 : t & 1),
            e)
          : (Et(e), null);
      case 22:
      case 23:
        return (
          Ge(e),
          Xi(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Et(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Et(e),
          (l = e.updateQueue),
          l !== null && Mn(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && Dt(ql),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ve(jt),
          Et(e),
          null
        );
      case 25:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function Nm(t, e) {
    switch ((Yi(e), e.tag)) {
      case 1:
        return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
      case 3:
        return (
          Ve(jt),
          Wl(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return Xu(e), null;
      case 13:
        if ((Ge(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(f(340));
          Fa();
        }
        return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
      case 19:
        return Dt(Ct), null;
      case 4:
        return Wl(), null;
      case 10:
        return Ve(e.type), null;
      case 22:
      case 23:
        return (
          Ge(e),
          Xi(),
          t !== null && Dt(ql),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Ve(jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zo(t, e) {
    switch ((Yi(e), e.tag)) {
      case 3:
        Ve(jt), Wl();
        break;
      case 26:
      case 27:
      case 5:
        Xu(e);
        break;
      case 4:
        Wl();
        break;
      case 13:
        Ge(e);
        break;
      case 19:
        Dt(Ct);
        break;
      case 10:
        Ve(e.type);
        break;
      case 22:
      case 23:
        Ge(e), Xi(), t !== null && Dt(ql);
        break;
      case 24:
        Ve(jt);
    }
  }
  var Mm = {
      getCacheForType: function (t) {
        var e = Vt(jt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    Um = typeof WeakMap == "function" ? WeakMap : Map,
    Tt = 0,
    pt = null,
    it = null,
    rt = 0,
    bt = 0,
    ie = null,
    We = !1,
    Ta = !1,
    Bc = !1,
    Fe = 0,
    Rt = 0,
    pl = 0,
    Kl = 0,
    qc = 0,
    pe = 0,
    xa = 0,
    pu = null,
    Ne = null,
    Yc = !1,
    Lc = 0,
    Un = 1 / 0,
    Cn = null,
    bl = null,
    jn = !1,
    Jl = null,
    bu = 0,
    wc = 0,
    Gc = null,
    Su = 0,
    Xc = null;
  function ce() {
    if ((Tt & 2) !== 0 && rt !== 0) return rt & -rt;
    if (X.T !== null) {
      var t = ma;
      return t !== 0 ? t : Wc();
    }
    return Jf();
  }
  function _o() {
    pe === 0 && (pe = (rt & 536870912) === 0 || st ? Xf() : 536870912);
    var t = me.current;
    return t !== null && (t.flags |= 32), pe;
  }
  function Wt(t, e, l) {
    ((t === pt && bt === 2) || t.cancelPendingCommit !== null) && (Aa(t, 0), Pe(t, rt, pe, !1)),
      Ya(t, l),
      ((Tt & 2) === 0 || t !== pt) &&
        (t === pt && ((Tt & 2) === 0 && (Kl |= l), Rt === 4 && Pe(t, rt, pe, !1)), Me(t));
  }
  function Do(t, e, l) {
    if ((Tt & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 60) === 0 && (e & t.expiredLanes) === 0) || qa(t, e),
      u = a ? Hm(t, e) : Kc(t, e, !0),
      n = a;
    do {
      if (u === 0) {
        Ta && !a && Pe(t, e, 0, !1);
        break;
      } else if (u === 6) Pe(t, e, 0, !We);
      else {
        if (((l = t.current.alternate), n && !Cm(l))) {
          (u = Kc(t, e, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = e), t.errorRecoveryDisabledLanes & n)) var i = 0;
          else (i = t.pendingLanes & -536870913), (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            e = i;
            t: {
              var r = t;
              u = pu;
              var h = r.current.memoizedState.isDehydrated;
              if ((h && (Aa(r, i).flags |= 256), (i = Kc(r, i, !1)), i !== 2)) {
                if (Bc && !h) {
                  (r.errorRecoveryDisabledLanes |= n), (Kl |= n), (u = 4);
                  break t;
                }
                (n = Ne), (Ne = u), n !== null && Qc(n);
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Aa(t, 0), Pe(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194176) === e) {
                Pe(a, e, pe, !We);
                break t;
              }
              break;
            case 2:
              Ne = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if (
            ((a.finishedWork = l),
            (a.finishedLanes = e),
            (e & 62914560) === e && ((n = Lc + 300 - Oe()), 10 < n))
          ) {
            if ((Pe(a, e, pe, !We), Ku(a, 0) !== 0)) break t;
            a.timeoutHandle = Io(No.bind(null, a, l, Ne, Cn, Yc, e, pe, Kl, xa, We, 2, -0, 0), n);
            break t;
          }
          No(a, l, Ne, Cn, Yc, e, pe, Kl, xa, We, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Me(t);
  }
  function Qc(t) {
    Ne === null ? (Ne = t) : Ne.push.apply(Ne, t);
  }
  function No(t, e, l, a, u, n, i, r, h, p, _, U, T) {
    var z = e.subtreeFlags;
    if (
      (z & 8192 || (z & 16785408) === 16785408) &&
      ((Ou = { stylesheets: null, count: 0, unsuspend: m0 }), So(e), (e = v0()), e !== null)
    ) {
      (t.cancelPendingCommit = e(qo.bind(null, t, l, a, u, i, r, h, 1, U, T))), Pe(t, n, i, !p);
      return;
    }
    qo(t, l, a, u, i, r, h, _, U, T);
  }
  function Cm(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var u = l[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!ae(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null)) (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Pe(t, e, l, a) {
    (e &= ~qc),
      (e &= ~Kl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var u = e; 0 < u; ) {
      var n = 31 - le(u),
        i = 1 << n;
      (a[n] = -1), (u &= ~i);
    }
    l !== 0 && Zf(t, l, e);
  }
  function Hn() {
    return (Tt & 6) === 0 ? (Eu(0), !1) : !0;
  }
  function Zc() {
    if (it !== null) {
      if (bt === 0) var t = it.return;
      else (t = it), (Ze = Xl = null), Wi(t), (da = null), (eu = 0), (t = it);
      for (; t !== null; ) zo(t.alternate, t), (t = t.return);
      it = null;
    }
  }
  function Aa(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), Pm(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Zc(),
      (pt = t),
      (it = l = gl(t.current, null)),
      (rt = e),
      (bt = 0),
      (ie = null),
      (We = !1),
      (Ta = qa(t, e)),
      (Bc = !1),
      (xa = pe = qc = Kl = pl = Rt = 0),
      (Ne = pu = null),
      (Yc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - le(a),
          n = 1 << u;
        (e |= t[u]), (a &= ~n);
      }
    return (Fe = e), un(), l;
  }
  function Mo(t, e) {
    (ut = null),
      (X.H = De),
      e === Ia
        ? ((e = Vr()), (bt = 3))
        : e === Xr
          ? ((e = Vr()), (bt = 4))
          : (bt =
              e === Qs
                ? 8
                : e !== null && typeof e == "object" && typeof e.then == "function"
                  ? 6
                  : 1),
      (ie = e),
      it === null && ((Rt = 1), Rn(t, oe(e, t.current)));
  }
  function Uo() {
    var t = X.H;
    return (X.H = De), t === null ? De : t;
  }
  function Co() {
    var t = X.A;
    return (X.A = Mm), t;
  }
  function Vc() {
    (Rt = 4),
      We || ((rt & 4194176) !== rt && me.current !== null) || (Ta = !0),
      ((pl & 134217727) === 0 && (Kl & 134217727) === 0) || pt === null || Pe(pt, rt, pe, !1);
  }
  function Kc(t, e, l) {
    var a = Tt;
    Tt |= 2;
    var u = Uo(),
      n = Co();
    (pt !== t || rt !== e) && ((Cn = null), Aa(t, e)), (e = !1);
    var i = Rt;
    t: do
      try {
        if (bt !== 0 && it !== null) {
          var r = it,
            h = ie;
          switch (bt) {
            case 8:
              Zc(), (i = 6);
              break t;
            case 3:
            case 2:
            case 6:
              me.current === null && (e = !0);
              var p = bt;
              if (((bt = 0), (ie = null), Ra(t, r, h, p), l && Ta)) {
                i = 0;
                break t;
              }
              break;
            default:
              (p = bt), (bt = 0), (ie = null), Ra(t, r, h, p);
          }
        }
        jm(), (i = Rt);
        break;
      } catch (_) {
        Mo(t, _);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ze = Xl = null),
      (Tt = a),
      (X.H = u),
      (X.A = n),
      it === null && ((pt = null), (rt = 0), un()),
      i
    );
  }
  function jm() {
    for (; it !== null; ) jo(it);
  }
  function Hm(t, e) {
    var l = Tt;
    Tt |= 2;
    var a = Uo(),
      u = Co();
    pt !== t || rt !== e ? ((Cn = null), (Un = Oe() + 500), Aa(t, e)) : (Ta = qa(t, e));
    t: do
      try {
        if (bt !== 0 && it !== null) {
          e = it;
          var n = ie;
          e: switch (bt) {
            case 1:
              (bt = 0), (ie = null), Ra(t, e, n, 1);
              break;
            case 2:
              if (Qr(n)) {
                (bt = 0), (ie = null), Ho(e);
                break;
              }
              (e = function () {
                bt === 2 && pt === t && (bt = 7), Me(t);
              }),
                n.then(e, e);
              break t;
            case 3:
              bt = 7;
              break t;
            case 4:
              bt = 5;
              break t;
            case 7:
              Qr(n) ? ((bt = 0), (ie = null), Ho(e)) : ((bt = 0), (ie = null), Ra(t, e, n, 7));
              break;
            case 5:
              var i = null;
              switch (it.tag) {
                case 26:
                  i = it.memoizedState;
                case 5:
                case 27:
                  var r = it;
                  if (!i || sd(i)) {
                    (bt = 0), (ie = null);
                    var h = r.sibling;
                    if (h !== null) it = h;
                    else {
                      var p = r.return;
                      p !== null ? ((it = p), Bn(p)) : (it = null);
                    }
                    break e;
                  }
              }
              (bt = 0), (ie = null), Ra(t, e, n, 5);
              break;
            case 6:
              (bt = 0), (ie = null), Ra(t, e, n, 6);
              break;
            case 8:
              Zc(), (Rt = 6);
              break t;
            default:
              throw Error(f(462));
          }
        }
        Bm();
        break;
      } catch (_) {
        Mo(t, _);
      }
    while (!0);
    return (
      (Ze = Xl = null),
      (X.H = a),
      (X.A = u),
      (Tt = l),
      it !== null ? 0 : ((pt = null), (rt = 0), un(), Rt)
    );
  }
  function Bm() {
    for (; it !== null && !uh(); ) jo(it);
  }
  function jo(t) {
    var e = eo(t.alternate, t, Fe);
    (t.memoizedProps = t.pendingProps), e === null ? Bn(t) : (it = e);
  }
  function Ho(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = $s(l, e, e.pendingProps, e.type, void 0, rt);
        break;
      case 11:
        e = $s(l, e, e.pendingProps, e.type.render, e.ref, rt);
        break;
      case 5:
        Wi(e);
      default:
        zo(l, e), (e = it = Ao(e, Fe)), (e = eo(l, e, Fe));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Bn(t) : (it = e);
  }
  function Ra(t, e, l, a) {
    (Ze = Xl = null), Wi(e), (da = null), (eu = 0);
    var u = e.return;
    try {
      if (Am(t, u, e, l, rt)) {
        (Rt = 1), Rn(t, oe(l, t.current)), (it = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((it = u), n);
      (Rt = 1), Rn(t, oe(l, t.current)), (it = null);
      return;
    }
    e.flags & 32768
      ? (st || a === 1
          ? (t = !0)
          : Ta || (rt & 536870912) !== 0
            ? (t = !1)
            : ((We = t = !0),
              (a === 2 || a === 3 || a === 6) &&
                ((a = me.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        Bo(e, t))
      : Bn(e);
  }
  function Bn(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Bo(e, We);
        return;
      }
      t = e.return;
      var l = Dm(e.alternate, e, Fe);
      if (l !== null) {
        it = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        it = e;
        return;
      }
      it = e = t;
    } while (e !== null);
    Rt === 0 && (Rt = 5);
  }
  function Bo(t, e) {
    do {
      var l = Nm(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (it = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        it = t;
        return;
      }
      it = t = l;
    } while (t !== null);
    (Rt = 6), (it = null);
  }
  function qo(t, e, l, a, u, n, i, r, h, p) {
    var _ = X.T,
      U = w.p;
    try {
      (w.p = 2), (X.T = null), qm(t, e, l, a, U, u, n, i, r, h, p);
    } finally {
      (X.T = _), (w.p = U);
    }
  }
  function qm(t, e, l, a, u, n, i, r) {
    do Oa();
    while (Jl !== null);
    if ((Tt & 6) !== 0) throw Error(f(327));
    var h = t.finishedWork;
    if (((a = t.finishedLanes), h === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), h === t.current)) throw Error(f(177));
    (t.callbackNode = null), (t.callbackPriority = 0), (t.cancelPendingCommit = null);
    var p = h.lanes | h.childLanes;
    if (
      ((p |= Hi),
      yh(t, a, p, n, i, r),
      t === pt && ((it = pt = null), (rt = 0)),
      ((h.subtreeFlags & 10256) === 0 && (h.flags & 10256) === 0) ||
        jn ||
        ((jn = !0),
        (wc = p),
        (Gc = l),
        Gm(Qu, function () {
          return Oa(), null;
        })),
      (l = (h.flags & 15990) !== 0),
      (h.subtreeFlags & 15990) !== 0 || l
        ? ((l = X.T),
          (X.T = null),
          (n = w.p),
          (w.p = 2),
          (i = Tt),
          (Tt |= 4),
          Om(t, h),
          go(h, t),
          cm(uf, t.containerInfo),
          (kn = !!af),
          (uf = af = null),
          (t.current = h),
          ho(t, h.alternate, h),
          nh(),
          (Tt = i),
          (w.p = n),
          (X.T = l))
        : (t.current = h),
      jn ? ((jn = !1), (Jl = t), (bu = a)) : Yo(t, p),
      (p = t.pendingLanes),
      p === 0 && (bl = null),
      sh(h.stateNode),
      Me(t),
      e !== null)
    )
      for (u = t.onRecoverableError, h = 0; h < e.length; h++)
        (p = e[h]), u(p.value, { componentStack: p.stack });
    return (
      (bu & 3) !== 0 && Oa(),
      (p = t.pendingLanes),
      (a & 4194218) !== 0 && (p & 42) !== 0 ? (t === Xc ? Su++ : ((Su = 0), (Xc = t))) : (Su = 0),
      Eu(0),
      null
    );
  }
  function Yo(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), au(e)));
  }
  function Oa() {
    if (Jl !== null) {
      var t = Jl,
        e = wc;
      wc = 0;
      var l = Kf(bu),
        a = X.T,
        u = w.p;
      try {
        if (((w.p = 32 > l ? 32 : l), (X.T = null), Jl === null)) var n = !1;
        else {
          (l = Gc), (Gc = null);
          var i = Jl,
            r = bu;
          if (((Jl = null), (bu = 0), (Tt & 6) !== 0)) throw Error(f(331));
          var h = Tt;
          if (
            ((Tt |= 4),
            To(i.current),
            bo(i, i.current, r, l),
            (Tt = h),
            Eu(0, !1),
            ee && typeof ee.onPostCommitFiberRoot == "function")
          )
            try {
              ee.onPostCommitFiberRoot(Ba, i);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (w.p = u), (X.T = a), Yo(t, e);
      }
    }
    return !1;
  }
  function Lo(t, e, l) {
    (e = oe(l, e)), (e = sc(t.stateNode, e, 2)), (t = hl(t, e, 2)), t !== null && (Ya(t, 2), Me(t));
  }
  function vt(t, e, l) {
    if (t.tag === 3) Lo(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Lo(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" && (bl === null || !bl.has(a)))
          ) {
            (t = oe(l, t)),
              (l = Gs(2)),
              (a = hl(e, l, 2)),
              a !== null && (Xs(l, a, e, t), Ya(a, 2), Me(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Jc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Um();
      var u = new Set();
      a.set(e, u);
    } else (u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u));
    u.has(l) || ((Bc = !0), u.add(l), (t = Ym.bind(null, t, e, l)), e.then(t, t));
  }
  function Ym(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      pt === t &&
        (rt & l) === l &&
        (Rt === 4 || (Rt === 3 && (rt & 62914560) === rt && 300 > Oe() - Lc)
          ? (Tt & 2) === 0 && Aa(t, 0)
          : (qc |= l),
        xa === rt && (xa = 0)),
      Me(t);
  }
  function wo(t, e) {
    e === 0 && (e = Qf()), (t = nl(t, e)), t !== null && (Ya(t, e), Me(t));
  }
  function Lm(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), wo(t, l);
  }
  function wm(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), wo(t, l);
  }
  function Gm(t, e) {
    return oi(t, e);
  }
  var qn = null,
    za = null,
    kc = !1,
    Yn = !1,
    $c = !1,
    kl = 0;
  function Me(t) {
    t !== za && t.next === null && (za === null ? (qn = za = t) : (za = za.next = t)),
      (Yn = !0),
      kc || ((kc = !0), Qm(Xm));
  }
  function Eu(t, e) {
    if (!$c && Yn) {
      $c = !0;
      do
        for (var l = !1, a = qn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                r = a.pingedLanes;
              (n = (1 << (31 - le(42 | t) + 1)) - 1),
                (n &= u & ~(i & ~r)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((l = !0), Qo(a, n));
          } else
            (n = rt),
              (n = Ku(a, a === pt ? n : 0)),
              (n & 3) === 0 || qa(a, n) || ((l = !0), Qo(a, n));
          a = a.next;
        }
      while (l);
      $c = !1;
    }
  }
  function Xm() {
    Yn = kc = !1;
    var t = 0;
    kl !== 0 && (Fm() && (t = kl), (kl = 0));
    for (var e = Oe(), l = null, a = qn; a !== null; ) {
      var u = a.next,
        n = Go(a, e);
      n === 0
        ? ((a.next = null), l === null ? (qn = u) : (l.next = u), u === null && (za = l))
        : ((l = a), (t !== 0 || (n & 3) !== 0) && (Yn = !0)),
        (a = u);
    }
    Eu(t);
  }
  function Go(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - le(n),
        r = 1 << i,
        h = u[i];
      h === -1
        ? ((r & l) === 0 || (r & a) !== 0) && (u[i] = mh(r, e))
        : h <= e && (t.expiredLanes |= r),
        (n &= ~r);
    }
    if (
      ((e = pt),
      (l = rt),
      (l = Ku(t, t === e ? l : 0)),
      (a = t.callbackNode),
      l === 0 || (t === e && bt === 2) || t.cancelPendingCommit !== null)
    )
      return a !== null && a !== null && di(a), (t.callbackNode = null), (t.callbackPriority = 0);
    if ((l & 3) === 0 || qa(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && di(a), Kf(l))) {
        case 2:
        case 8:
          l = wf;
          break;
        case 32:
          l = Qu;
          break;
        case 268435456:
          l = Gf;
          break;
        default:
          l = Qu;
      }
      return (
        (a = Xo.bind(null, t)), (l = oi(l, a)), (t.callbackPriority = e), (t.callbackNode = l), e
      );
    }
    return a !== null && a !== null && di(a), (t.callbackPriority = 2), (t.callbackNode = null), 2;
  }
  function Xo(t, e) {
    var l = t.callbackNode;
    if (Oa() && t.callbackNode !== l) return null;
    var a = rt;
    return (
      (a = Ku(t, t === pt ? a : 0)),
      a === 0
        ? null
        : (Do(t, a, e),
          Go(t, Oe()),
          t.callbackNode != null && t.callbackNode === l ? Xo.bind(null, t) : null)
    );
  }
  function Qo(t, e) {
    if (Oa()) return null;
    Do(t, e, !0);
  }
  function Qm(t) {
    Im(function () {
      (Tt & 6) !== 0 ? oi(Lf, t) : t();
    });
  }
  function Wc() {
    return kl === 0 && (kl = Xf()), kl;
  }
  function Zo(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Fu("" + t);
  }
  function Vo(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function Zm(t, e, l, a, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var n = Zo((u[Pt] || null).action),
        i = a.submitter;
      i &&
        ((e = (e = i[Pt] || null) ? Zo(e.formAction) : i.getAttribute("formAction")),
        e !== null && ((n = e), (i = null)));
      var r = new en("action", "action", null, a, u);
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (kl !== 0) {
                  var h = i ? Vo(u, i) : new FormData(u);
                  nc(l, { pending: !0, data: h, method: u.method, action: n }, null, h);
                }
              } else
                typeof n == "function" &&
                  (r.preventDefault(),
                  (h = i ? Vo(u, i) : new FormData(u)),
                  nc(l, { pending: !0, data: h, method: u.method, action: n }, n, h));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Fc = 0; Fc < Br.length; Fc++) {
    var Pc = Br[Fc],
      Vm = Pc.toLowerCase(),
      Km = Pc[0].toUpperCase() + Pc.slice(1);
    Se(Vm, "on" + Km);
  }
  Se(Mr, "onAnimationEnd"),
    Se(Ur, "onAnimationIteration"),
    Se(Cr, "onAnimationStart"),
    Se("dblclick", "onDoubleClick"),
    Se("focusin", "onFocus"),
    Se("focusout", "onBlur"),
    Se(rm, "onTransitionRun"),
    Se(sm, "onTransitionStart"),
    Se(om, "onTransitionCancel"),
    Se(jr, "onTransitionEnd"),
    ta("onMouseEnter", ["mouseout", "mouseover"]),
    ta("onMouseLeave", ["mouseout", "mouseover"]),
    ta("onPointerEnter", ["pointerout", "pointerover"]),
    ta("onPointerLeave", ["pointerout", "pointerover"]),
    Dl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Dl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Dl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Dl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Dl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Dl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Tu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Jm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tu)
    );
  function Ko(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var r = a[i],
              h = r.instance,
              p = r.currentTarget;
            if (((r = r.listener), h !== n && u.isPropagationStopped())) break t;
            (n = r), (u.currentTarget = p);
            try {
              n(u);
            } catch (_) {
              An(_);
            }
            (u.currentTarget = null), (n = h);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((r = a[i]),
              (h = r.instance),
              (p = r.currentTarget),
              (r = r.listener),
              h !== n && u.isPropagationStopped())
            )
              break t;
            (n = r), (u.currentTarget = p);
            try {
              n(u);
            } catch (_) {
              An(_);
            }
            (u.currentTarget = null), (n = h);
          }
      }
    }
  }
  function ct(t, e) {
    var l = e[mi];
    l === void 0 && (l = e[mi] = new Set());
    var a = t + "__bubble";
    l.has(a) || (Jo(e, t, 2, !1), l.add(a));
  }
  function Ic(t, e, l) {
    var a = 0;
    e && (a |= 4), Jo(l, t, a, e);
  }
  var Ln = "_reactListening" + Math.random().toString(36).slice(2);
  function tf(t) {
    if (!t[Ln]) {
      (t[Ln] = !0),
        $f.forEach(function (l) {
          l !== "selectionchange" && (Jm.has(l) || Ic(l, !1, t), Ic(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ln] || ((e[Ln] = !0), Ic("selectionchange", !1, e));
    }
  }
  function Jo(t, e, l, a) {
    switch (vd(e)) {
      case 2:
        var u = b0;
        break;
      case 8:
        u = S0;
        break;
      default:
        u = mf;
    }
    (l = u.bind(null, e, l, t)),
      (u = void 0),
      !Ti || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: u })
          : t.addEventListener(e, l, !0)
        : u !== void 0
          ? t.addEventListener(e, l, { passive: u })
          : t.addEventListener(e, l, !1);
  }
  function ef(t, e, l, a, u) {
    var n = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var r = a.stateNode.containerInfo;
          if (r === u || (r.nodeType === 8 && r.parentNode === u)) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var h = i.tag;
              if (
                (h === 3 || h === 4) &&
                ((h = i.stateNode.containerInfo),
                h === u || (h.nodeType === 8 && h.parentNode === u))
              )
                return;
              i = i.return;
            }
          for (; r !== null; ) {
            if (((i = _l(r)), i === null)) return;
            if (((h = i.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = n = i;
              continue t;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    cr(function () {
      var p = n,
        _ = Si(l),
        U = [];
      t: {
        var T = Hr.get(t);
        if (T !== void 0) {
          var z = en,
            V = t;
          switch (t) {
            case "keypress":
              if (Iu(l) === 0) break t;
            case "keydown":
            case "keyup":
              z = wh;
              break;
            case "focusin":
              (V = "focus"), (z = Oi);
              break;
            case "focusout":
              (V = "blur"), (z = Oi);
              break;
            case "beforeblur":
            case "afterblur":
              z = Oi;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = sr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = _h;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Qh;
              break;
            case Mr:
            case Ur:
            case Cr:
              z = Mh;
              break;
            case jr:
              z = Vh;
              break;
            case "scroll":
            case "scrollend":
              z = Oh;
              break;
            case "wheel":
              z = Jh;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Ch;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = dr;
              break;
            case "toggle":
            case "beforetoggle":
              z = $h;
          }
          var I = (e & 4) !== 0,
            Ot = !I && (t === "scroll" || t === "scrollend"),
            S = I ? (T !== null ? T + "Capture" : null) : T;
          I = [];
          for (var g = p, E; g !== null; ) {
            var N = g;
            if (
              ((E = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                E === null ||
                S === null ||
                ((N = Ga(g, S)), N != null && I.push(xu(g, N, E))),
              Ot)
            )
              break;
            g = g.return;
          }
          0 < I.length && ((T = new z(T, V, null, l, _)), U.push({ event: T, listeners: I }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((T = t === "mouseover" || t === "pointerover"),
            (z = t === "mouseout" || t === "pointerout"),
            T && l !== bi && (V = l.relatedTarget || l.fromElement) && (_l(V) || V[Fl]))
          )
            break t;
          if (
            (z || T) &&
            ((T =
              _.window === _
                ? _
                : (T = _.ownerDocument)
                  ? T.defaultView || T.parentWindow
                  : window),
            z
              ? ((V = l.relatedTarget || l.toElement),
                (z = p),
                (V = V ? _l(V) : null),
                V !== null &&
                  ((Ot = F(V)), (I = V.tag), V !== Ot || (I !== 5 && I !== 27 && I !== 6)) &&
                  (V = null))
              : ((z = null), (V = p)),
            z !== V)
          ) {
            if (
              ((I = sr),
              (N = "onMouseLeave"),
              (S = "onMouseEnter"),
              (g = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((I = dr), (N = "onPointerLeave"), (S = "onPointerEnter"), (g = "pointer")),
              (Ot = z == null ? T : wa(z)),
              (E = V == null ? T : wa(V)),
              (T = new I(N, g + "leave", z, l, _)),
              (T.target = Ot),
              (T.relatedTarget = E),
              (N = null),
              _l(_) === p &&
                ((I = new I(S, g + "enter", V, l, _)),
                (I.target = E),
                (I.relatedTarget = Ot),
                (N = I)),
              (Ot = N),
              z && V)
            )
              e: {
                for (I = z, S = V, g = 0, E = I; E; E = _a(E)) g++;
                for (E = 0, N = S; N; N = _a(N)) E++;
                for (; 0 < g - E; ) (I = _a(I)), g--;
                for (; 0 < E - g; ) (S = _a(S)), E--;
                for (; g--; ) {
                  if (I === S || (S !== null && I === S.alternate)) break e;
                  (I = _a(I)), (S = _a(S));
                }
                I = null;
              }
            else I = null;
            z !== null && ko(U, T, z, I, !1), V !== null && Ot !== null && ko(U, Ot, V, I, !0);
          }
        }
        t: {
          if (
            ((T = p ? wa(p) : window),
            (z = T.nodeName && T.nodeName.toLowerCase()),
            z === "select" || (z === "input" && T.type === "file"))
          )
            var G = Sr;
          else if (pr(T))
            if (Er) G = nm;
            else {
              G = am;
              var nt = lm;
            }
          else
            (z = T.nodeName),
              !z || z.toLowerCase() !== "input" || (T.type !== "checkbox" && T.type !== "radio")
                ? p && pi(p.elementType) && (G = Sr)
                : (G = um);
          if (G && (G = G(t, p))) {
            br(U, G, l, _);
            break t;
          }
          nt && nt(t, T, p),
            t === "focusout" &&
              p &&
              T.type === "number" &&
              p.memoizedProps.value != null &&
              gi(T, "number", T.value);
        }
        switch (((nt = p ? wa(p) : window), t)) {
          case "focusin":
            (pr(nt) || nt.contentEditable === "true") && ((ia = nt), (Ui = p), ($a = null));
            break;
          case "focusout":
            $a = Ui = ia = null;
            break;
          case "mousedown":
            Ci = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ci = !1), Dr(U, l, _);
            break;
          case "selectionchange":
            if (fm) break;
          case "keydown":
          case "keyup":
            Dr(U, l, _);
        }
        var K;
        if (_i)
          t: {
            switch (t) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break t;
              case "compositionend":
                $ = "onCompositionEnd";
                break t;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break t;
            }
            $ = void 0;
          }
        else
          na
            ? vr(t, l) && ($ = "onCompositionEnd")
            : t === "keydown" && l.keyCode === 229 && ($ = "onCompositionStart");
        $ &&
          (hr &&
            l.locale !== "ko" &&
            (na || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && na && (K = fr())
              : ((ul = _), (xi = "value" in ul ? ul.value : ul.textContent), (na = !0))),
          (nt = wn(p, $)),
          0 < nt.length &&
            (($ = new or($, t, null, l, _)),
            U.push({ event: $, listeners: nt }),
            K ? ($.data = K) : ((K = gr(l)), K !== null && ($.data = K)))),
          (K = Fh ? Ph(t, l) : Ih(t, l)) &&
            (($ = wn(p, "onBeforeInput")),
            0 < $.length &&
              ((nt = new or("onBeforeInput", "beforeinput", null, l, _)),
              U.push({ event: nt, listeners: $ }),
              (nt.data = K))),
          Zm(U, t, p, l, _);
      }
      Ko(U, e);
    });
  }
  function xu(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function wn(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ga(t, l)),
          u != null && a.unshift(xu(t, u, n)),
          (u = Ga(t, e)),
          u != null && a.push(xu(t, u, n))),
        (t = t.return);
    }
    return a;
  }
  function _a(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ko(t, e, l, a, u) {
    for (var n = e._reactName, i = []; l !== null && l !== a; ) {
      var r = l,
        h = r.alternate,
        p = r.stateNode;
      if (((r = r.tag), h !== null && h === a)) break;
      (r !== 5 && r !== 26 && r !== 27) ||
        p === null ||
        ((h = p),
        u
          ? ((p = Ga(l, n)), p != null && i.unshift(xu(l, p, h)))
          : u || ((p = Ga(l, n)), p != null && i.push(xu(l, p, h)))),
        (l = l.return);
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var km = /\r\n?/g,
    $m = /\u0000|\uFFFD/g;
  function $o(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        km,
        `
`
      )
      .replace($m, "");
  }
  function Wo(t, e) {
    return (e = $o(e)), $o(t) === e;
  }
  function Gn() {}
  function yt(t, e, l, a, u, n) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || la(t, a)
          : (typeof a == "number" || typeof a == "bigint") && e !== "body" && la(t, "" + a);
        break;
      case "className":
        ku(t, "class", a);
        break;
      case "tabIndex":
        ku(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ku(t, l, a);
        break;
      case "style":
        nr(t, a, n);
        break;
      case "data":
        if (e !== "object") {
          ku(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Fu("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (l === "formAction"
              ? (e !== "input" && yt(t, e, "name", u.name, u, null),
                yt(t, e, "formEncType", u.formEncType, u, null),
                yt(t, e, "formMethod", u.formMethod, u, null),
                yt(t, e, "formTarget", u.formTarget, u, null))
              : (yt(t, e, "encType", u.encType, u, null),
                yt(t, e, "method", u.method, u, null),
                yt(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Fu("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Gn);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Fu("" + a)), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol"
            ? t.setAttribute(l, a)
            : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        ct("beforetoggle", t), ct("toggle", t), Ju(t, "popover", a);
        break;
      case "xlinkActuate":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ju(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || (l[0] !== "o" && l[0] !== "O") || (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Ah.get(l) || l), Ju(t, l, a));
    }
  }
  function lf(t, e, l, a, u, n) {
    switch (l) {
      case "style":
        nr(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? la(t, a)
          : (typeof a == "number" || typeof a == "bigint") && la(t, "" + a);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Gn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Wf.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((u = l.endsWith("Capture")),
              (e = l.slice(2, u ? l.length - 7 : void 0)),
              (n = t[Pt] || null),
              (n = n != null ? n[l] : null),
              typeof n == "function" && t.removeEventListener(e, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (l in t ? (t[l] = null) : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, u);
              break t;
            }
            l in t ? (t[l] = a) : a === !0 ? t.setAttribute(l, "") : Ju(t, l, a);
          }
    }
  }
  function Xt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ct("error", t), ct("load", t);
        var a = !1,
          u = !1,
          n;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var i = l[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  yt(t, e, n, i, l, null);
              }
          }
        u && yt(t, e, "srcSet", l.srcSet, l, null), a && yt(t, e, "src", l.src, l, null);
        return;
      case "input":
        ct("invalid", t);
        var r = (n = i = u = null),
          h = null,
          p = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var _ = l[a];
            if (_ != null)
              switch (a) {
                case "name":
                  u = _;
                  break;
                case "type":
                  i = _;
                  break;
                case "checked":
                  h = _;
                  break;
                case "defaultChecked":
                  p = _;
                  break;
                case "value":
                  n = _;
                  break;
                case "defaultValue":
                  r = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null) throw Error(f(137, e));
                  break;
                default:
                  yt(t, e, a, _, l, null);
              }
          }
        er(t, n, r, h, p, i, u, !1), $u(t);
        return;
      case "select":
        ct("invalid", t), (a = i = n = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((r = l[u]), r != null))
            switch (u) {
              case "value":
                n = r;
                break;
              case "defaultValue":
                i = r;
                break;
              case "multiple":
                a = r;
              default:
                yt(t, e, u, r, l, null);
            }
        (e = n),
          (l = i),
          (t.multiple = !!a),
          e != null ? ea(t, !!a, e, !1) : l != null && ea(t, !!a, l, !0);
        return;
      case "textarea":
        ct("invalid", t), (n = u = a = null);
        for (i in l)
          if (l.hasOwnProperty(i) && ((r = l[i]), r != null))
            switch (i) {
              case "value":
                a = r;
                break;
              case "defaultValue":
                u = r;
                break;
              case "children":
                n = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                yt(t, e, i, r, l, null);
            }
        ar(t, a, u, n), $u(t);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && ((a = l[h]), a != null))
            switch (h) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                yt(t, e, h, a, l, null);
            }
        return;
      case "dialog":
        ct("cancel", t), ct("close", t);
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Tu.length; a++) ct(Tu[a], t);
        break;
      case "image":
        ct("error", t), ct("load", t);
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ct("error", t), ct("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (p in l)
          if (l.hasOwnProperty(p) && ((a = l[p]), a != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                yt(t, e, p, a, l, null);
            }
        return;
      default:
        if (pi(e)) {
          for (_ in l)
            l.hasOwnProperty(_) && ((a = l[_]), a !== void 0 && lf(t, e, _, a, l, void 0));
          return;
        }
    }
    for (r in l) l.hasOwnProperty(r) && ((a = l[r]), a != null && yt(t, e, r, a, l, null));
  }
  function Wm(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          r = null,
          h = null,
          p = null,
          _ = null;
        for (z in l) {
          var U = l[z];
          if (l.hasOwnProperty(z) && U != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = U;
              default:
                a.hasOwnProperty(z) || yt(t, e, z, null, a, U);
            }
        }
        for (var T in a) {
          var z = a[T];
          if (((U = l[T]), a.hasOwnProperty(T) && (z != null || U != null)))
            switch (T) {
              case "type":
                n = z;
                break;
              case "name":
                u = z;
                break;
              case "checked":
                p = z;
                break;
              case "defaultChecked":
                _ = z;
                break;
              case "value":
                i = z;
                break;
              case "defaultValue":
                r = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(f(137, e));
                break;
              default:
                z !== U && yt(t, e, T, z, a, U);
            }
        }
        vi(t, i, r, h, p, _, n, u);
        return;
      case "select":
        z = i = r = T = null;
        for (n in l)
          if (((h = l[n]), l.hasOwnProperty(n) && h != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                z = h;
              default:
                a.hasOwnProperty(n) || yt(t, e, n, null, a, h);
            }
        for (u in a)
          if (((n = a[u]), (h = l[u]), a.hasOwnProperty(u) && (n != null || h != null)))
            switch (u) {
              case "value":
                T = n;
                break;
              case "defaultValue":
                r = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== h && yt(t, e, u, n, a, h);
            }
        (e = r),
          (l = i),
          (a = z),
          T != null
            ? ea(t, !!l, T, !1)
            : !!a != !!l && (e != null ? ea(t, !!l, e, !0) : ea(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        z = T = null;
        for (r in l)
          if (((u = l[r]), l.hasOwnProperty(r) && u != null && !a.hasOwnProperty(r)))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(t, e, r, null, a, u);
            }
        for (i in a)
          if (((u = a[i]), (n = l[i]), a.hasOwnProperty(i) && (u != null || n != null)))
            switch (i) {
              case "value":
                T = u;
                break;
              case "defaultValue":
                z = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(f(91));
                break;
              default:
                u !== n && yt(t, e, i, u, a, n);
            }
        lr(t, T, z);
        return;
      case "option":
        for (var V in l)
          if (((T = l[V]), l.hasOwnProperty(V) && T != null && !a.hasOwnProperty(V)))
            switch (V) {
              case "selected":
                t.selected = !1;
                break;
              default:
                yt(t, e, V, null, a, T);
            }
        for (h in a)
          if (((T = a[h]), (z = l[h]), a.hasOwnProperty(h) && T !== z && (T != null || z != null)))
            switch (h) {
              case "selected":
                t.selected = T && typeof T != "function" && typeof T != "symbol";
                break;
              default:
                yt(t, e, h, T, a, z);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var I in l)
          (T = l[I]),
            l.hasOwnProperty(I) && T != null && !a.hasOwnProperty(I) && yt(t, e, I, null, a, T);
        for (p in a)
          if (((T = a[p]), (z = l[p]), a.hasOwnProperty(p) && T !== z && (T != null || z != null)))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(f(137, e));
                break;
              default:
                yt(t, e, p, T, a, z);
            }
        return;
      default:
        if (pi(e)) {
          for (var Ot in l)
            (T = l[Ot]),
              l.hasOwnProperty(Ot) &&
                T !== void 0 &&
                !a.hasOwnProperty(Ot) &&
                lf(t, e, Ot, void 0, a, T);
          for (_ in a)
            (T = a[_]),
              (z = l[_]),
              !a.hasOwnProperty(_) ||
                T === z ||
                (T === void 0 && z === void 0) ||
                lf(t, e, _, T, a, z);
          return;
        }
    }
    for (var S in l)
      (T = l[S]),
        l.hasOwnProperty(S) && T != null && !a.hasOwnProperty(S) && yt(t, e, S, null, a, T);
    for (U in a)
      (T = a[U]),
        (z = l[U]),
        !a.hasOwnProperty(U) || T === z || (T == null && z == null) || yt(t, e, U, T, a, z);
  }
  var af = null,
    uf = null;
  function Xn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Fo(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Po(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function nf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cf = null;
  function Fm() {
    var t = window.event;
    return t && t.type === "popstate" ? (t === cf ? !1 : ((cf = t), !0)) : ((cf = null), !1);
  }
  var Io = typeof setTimeout == "function" ? setTimeout : void 0,
    Pm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    td = typeof Promise == "function" ? Promise : void 0,
    Im =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof td < "u"
          ? function (t) {
              return td.resolve(null).then(t).catch(t0);
            }
          : Io;
  function t0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ff(t, e) {
    var l = e,
      a = 0;
    do {
      var u = l.nextSibling;
      if ((t.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === "/$")) {
          if (a === 0) {
            t.removeChild(u), Mu(e);
            return;
          }
          a--;
        } else (l !== "$" && l !== "$?" && l !== "$!") || a++;
      l = u;
    } while (l);
    Mu(e);
  }
  function rf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rf(l), yi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function e0(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[La])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !== (u.href == null ? null : u.href) ||
                t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = xe(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function l0(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l) ||
        ((t = xe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function xe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (((e = t.data), e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")) break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function ed(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ld(t, e, l) {
    switch (((e = Xn(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  var be = new Map(),
    ad = new Set();
  function Qn(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.ownerDocument;
  }
  var Ie = w.d;
  w.d = { f: a0, r: u0, D: n0, C: i0, L: c0, m: f0, X: s0, S: r0, M: o0 };
  function a0() {
    var t = Ie.f(),
      e = Hn();
    return t || e;
  }
  function u0(t) {
    var e = Pl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Ds(e) : Ie.r(t);
  }
  var Da = typeof document > "u" ? null : document;
  function ud(t, e, l) {
    var a = Da;
    if (a && typeof e == "string" && e) {
      var u = re(e);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
        ad.has(u) ||
          (ad.add(u),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(u) === null &&
            ((e = a.createElement("link")), Xt(e, "link", t), Ht(e), a.head.appendChild(e)));
    }
  }
  function n0(t) {
    Ie.D(t), ud("dns-prefetch", t, null);
  }
  function i0(t, e) {
    Ie.C(t, e), ud("preconnect", t, e);
  }
  function c0(t, e, l) {
    Ie.L(t, e, l);
    var a = Da;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + re(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + re(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" && (u += '[imagesizes="' + re(l.imageSizes) + '"]'))
        : (u += '[href="' + re(t) + '"]');
      var n = u;
      switch (e) {
        case "style":
          n = Na(t);
          break;
        case "script":
          n = Ma(t);
      }
      be.has(n) ||
        ((t = lt(
          { rel: "preload", href: e === "image" && l && l.imageSrcSet ? void 0 : t, as: e },
          l
        )),
        be.set(n, t),
        a.querySelector(u) !== null ||
          (e === "style" && a.querySelector(Au(n))) ||
          (e === "script" && a.querySelector(Ru(n))) ||
          ((e = a.createElement("link")), Xt(e, "link", t), Ht(e), a.head.appendChild(e)));
    }
  }
  function f0(t, e) {
    Ie.m(t, e);
    var l = Da;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        u = 'link[rel="modulepreload"][as="' + re(a) + '"][href="' + re(t) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ma(t);
      }
      if (
        !be.has(n) &&
        ((t = lt({ rel: "modulepreload", href: t }, e)), be.set(n, t), l.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ru(n))) return;
        }
        (a = l.createElement("link")), Xt(a, "link", t), Ht(a), l.head.appendChild(a);
      }
    }
  }
  function r0(t, e, l) {
    Ie.S(t, e, l);
    var a = Da;
    if (a && t) {
      var u = Il(a).hoistableStyles,
        n = Na(t);
      e = e || "default";
      var i = u.get(n);
      if (!i) {
        var r = { loading: 0, preload: null };
        if ((i = a.querySelector(Au(n)))) r.loading = 5;
        else {
          (t = lt({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = be.get(n)) && sf(t, l);
          var h = (i = a.createElement("link"));
          Ht(h),
            Xt(h, "link", t),
            (h._p = new Promise(function (p, _) {
              (h.onload = p), (h.onerror = _);
            })),
            h.addEventListener("load", function () {
              r.loading |= 1;
            }),
            h.addEventListener("error", function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            Zn(i, e, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: r }), u.set(n, i);
      }
    }
  }
  function s0(t, e) {
    Ie.X(t, e);
    var l = Da;
    if (l && t) {
      var a = Il(l).hoistableScripts,
        u = Ma(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(Ru(u))),
        n ||
          ((t = lt({ src: t, async: !0 }, e)),
          (e = be.get(u)) && of(t, e),
          (n = l.createElement("script")),
          Ht(n),
          Xt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function o0(t, e) {
    Ie.M(t, e);
    var l = Da;
    if (l && t) {
      var a = Il(l).hoistableScripts,
        u = Ma(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(Ru(u))),
        n ||
          ((t = lt({ src: t, async: !0, type: "module" }, e)),
          (e = be.get(u)) && of(t, e),
          (n = l.createElement("script")),
          Ht(n),
          Xt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function nd(t, e, l, a) {
    var u = (u = el.current) ? Qn(u) : null;
    if (!u) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Na(l.href)),
            (l = Il(u).hoistableStyles),
            (a = l.get(e)),
            a || ((a = { type: "style", instance: null, count: 0, state: null }), l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Na(l.href);
          var n = Il(u).hoistableStyles,
            i = n.get(t);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, i),
              (n = u.querySelector(Au(t))) && !n._p && ((i.instance = n), (i.state.loading = 5)),
              be.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                be.set(t, l),
                n || d0(u, t, l, i.state))),
            e && a === null)
          )
            throw Error(f(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" && e && typeof e != "function" && typeof e != "symbol"
            ? ((e = Ma(l)),
              (l = Il(u).hoistableScripts),
              (a = l.get(e)),
              a || ((a = { type: "script", instance: null, count: 0, state: null }), l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Na(t) {
    return 'href="' + re(t) + '"';
  }
  function Au(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function id(t) {
    return lt({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function d0(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Xt(e, "link", l),
        Ht(e),
        t.head.appendChild(e));
  }
  function Ma(t) {
    return '[src="' + re(t) + '"]';
  }
  function Ru(t) {
    return "script[async]" + t;
  }
  function cd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + re(l.href) + '"]');
          if (a) return (e.instance = a), Ht(a), a;
          var u = lt({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Ht(a),
            Xt(a, "style", u),
            Zn(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          u = Na(l.href);
          var n = t.querySelector(Au(u));
          if (n) return (e.state.loading |= 4), (e.instance = n), Ht(n), n;
          (a = id(l)),
            (u = be.get(u)) && sf(a, u),
            (n = (t.ownerDocument || t).createElement("link")),
            Ht(n);
          var i = n;
          return (
            (i._p = new Promise(function (r, h) {
              (i.onload = r), (i.onerror = h);
            })),
            Xt(n, "link", a),
            (e.state.loading |= 4),
            Zn(n, l.precedence, t),
            (e.instance = n)
          );
        case "script":
          return (
            (n = Ma(l.src)),
            (u = t.querySelector(Ru(n)))
              ? ((e.instance = u), Ht(u), u)
              : ((a = l),
                (u = be.get(n)) && ((a = lt({}, l)), of(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Ht(u),
                Xt(u, "link", a),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Zn(a, l.precedence, t));
    return e.instance;
  }
  function Zn(t, e, l) {
    for (
      var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var r = a[i];
      if (r.dataset.precedence === e) n = r;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function sf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function of(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Vn = null;
  function fd(t, e, l) {
    if (Vn === null) {
      var a = new Map(),
        u = (Vn = new Map());
      u.set(l, a);
    } else (u = Vn), (a = u.get(l)), a || ((a = new Map()), u.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), u = 0; u < l.length; u++) {
      var n = l[u];
      if (
        !(n[La] || n[Zt] || (t === "link" && n.getAttribute("rel") === "stylesheet")) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(e) || "";
        i = t + i;
        var r = a.get(i);
        r ? r.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function rd(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
  }
  function h0(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (t = e.disabled), typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function sd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Ou = null;
  function m0() {}
  function y0(t, e, l) {
    if (Ou === null) throw Error(f(475));
    var a = Ou;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = Na(l.href),
          n = t.querySelector(Au(u));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Kn.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = n),
            Ht(n);
          return;
        }
        (n = t.ownerDocument || t),
          (l = id(l)),
          (u = be.get(u)) && sf(l, u),
          (n = n.createElement("link")),
          Ht(n);
        var i = n;
        (i._p = new Promise(function (r, h) {
          (i.onload = r), (i.onerror = h);
        })),
          Xt(n, "link", l),
          (e.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Kn.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function v0() {
    if (Ou === null) throw Error(f(475));
    var t = Ou;
    return (
      t.stylesheets && t.count === 0 && df(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && df(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Kn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) df(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Jn = null;
  function df(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (Jn = new Map()), e.forEach(g0, t), (Jn = null), Kn.call(t));
  }
  function g0(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Jn.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Jn.set(t, l);
        for (
          var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      (u = e.instance),
        (i = u.getAttribute("data-precedence")),
        (n = l.get(i) || a),
        n === a && l.set(null, u),
        l.set(i, u),
        this.count++,
        (a = Kn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var zu = {
    $$typeof: C,
    Provider: null,
    Consumer: null,
    _currentValue: ft,
    _currentValue2: ft,
    _threadCount: 0,
  };
  function p0(t, e, l, a, u, n, i, r) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = hi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = hi(0)),
      (this.hiddenUpdates = hi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = r),
      (this.incompleteTransitions = new Map());
  }
  function od(t, e, l, a, u, n, i, r, h, p, _, U) {
    return (
      (t = new p0(t, e, l, i, r, h, p, U)),
      (e = 1),
      n === !0 && (e |= 24),
      (n = ge(3, null, null, e)),
      (t.current = n),
      (n.stateNode = t),
      (e = Qi()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (n.memoizedState = { element: a, isDehydrated: l, cache: e }),
      xc(n),
      t
    );
  }
  function dd(t) {
    return t ? ((t = ra), t) : ra;
  }
  function hd(t, e, l, a, u, n) {
    (u = dd(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = dl(e)),
      (a.payload = { element: l }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (l = hl(t, a, e)),
      l !== null && (Wt(l, t, e), su(l, t, e));
  }
  function md(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function hf(t, e) {
    md(t, e), (t = t.alternate) && md(t, e);
  }
  function yd(t) {
    if (t.tag === 13) {
      var e = nl(t, 67108864);
      e !== null && Wt(e, t, 67108864), hf(t, 67108864);
    }
  }
  var kn = !0;
  function b0(t, e, l, a) {
    var u = X.T;
    X.T = null;
    var n = w.p;
    try {
      (w.p = 2), mf(t, e, l, a);
    } finally {
      (w.p = n), (X.T = u);
    }
  }
  function S0(t, e, l, a) {
    var u = X.T;
    X.T = null;
    var n = w.p;
    try {
      (w.p = 8), mf(t, e, l, a);
    } finally {
      (w.p = n), (X.T = u);
    }
  }
  function mf(t, e, l, a) {
    if (kn) {
      var u = yf(a);
      if (u === null) ef(t, e, a, $n, l), gd(t, a);
      else if (T0(u, t, e, l, a)) a.stopPropagation();
      else if ((gd(t, a), e & 4 && -1 < E0.indexOf(t))) {
        for (; u !== null; ) {
          var n = Pl(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = zl(n.pendingLanes);
                  if (i !== 0) {
                    var r = n;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; i; ) {
                      var h = 1 << (31 - le(i));
                      (r.entanglements[1] |= h), (i &= ~h);
                    }
                    Me(n), (Tt & 6) === 0 && ((Un = Oe() + 500), Eu(0));
                  }
                }
                break;
              case 13:
                (r = nl(n, 2)), r !== null && Wt(r, n, 2), Hn(), hf(n, 2);
            }
          if (((n = yf(a)), n === null && ef(t, e, a, $n, l), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else ef(t, e, a, null, l);
    }
  }
  function yf(t) {
    return (t = Si(t)), vf(t);
  }
  var $n = null;
  function vf(t) {
    if ((($n = null), (t = _l(t)), t !== null)) {
      var e = F(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = gt(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ($n = t), null;
  }
  function vd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ih()) {
          case Lf:
            return 2;
          case wf:
            return 8;
          case Qu:
          case ch:
            return 32;
          case Gf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gf = !1,
    Sl = null,
    El = null,
    Tl = null,
    _u = new Map(),
    Du = new Map(),
    xl = [],
    E0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function gd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Sl = null;
        break;
      case "dragenter":
      case "dragleave":
        El = null;
        break;
      case "mouseover":
      case "mouseout":
        Tl = null;
        break;
      case "pointerover":
      case "pointerout":
        _u.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Du.delete(e.pointerId);
    }
  }
  function Nu(t, e, l, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        e !== null && ((e = Pl(e)), e !== null && yd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function T0(t, e, l, a, u) {
    switch (e) {
      case "focusin":
        return (Sl = Nu(Sl, t, e, l, a, u)), !0;
      case "dragenter":
        return (El = Nu(El, t, e, l, a, u)), !0;
      case "mouseover":
        return (Tl = Nu(Tl, t, e, l, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return _u.set(n, Nu(_u.get(n) || null, t, e, l, a, u)), !0;
      case "gotpointercapture":
        return (n = u.pointerId), Du.set(n, Nu(Du.get(n) || null, t, e, l, a, u)), !0;
    }
    return !1;
  }
  function pd(t) {
    var e = _l(t.target);
    if (e !== null) {
      var l = F(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = gt(l)), e !== null)) {
            (t.blockedOn = e),
              vh(t.priority, function () {
                if (l.tag === 13) {
                  var a = ce(),
                    u = nl(l, a);
                  u !== null && Wt(u, l, a), hf(l, a);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Wn(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = yf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (bi = a), l.target.dispatchEvent(a), (bi = null);
      } else return (e = Pl(l)), e !== null && yd(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function bd(t, e, l) {
    Wn(t) && l.delete(e);
  }
  function x0() {
    (gf = !1),
      Sl !== null && Wn(Sl) && (Sl = null),
      El !== null && Wn(El) && (El = null),
      Tl !== null && Wn(Tl) && (Tl = null),
      _u.forEach(bd),
      Du.forEach(bd);
  }
  function Fn(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      gf || ((gf = !0), c.unstable_scheduleCallback(c.unstable_NormalPriority, x0)));
  }
  var Pn = null;
  function Sd(t) {
    Pn !== t &&
      ((Pn = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        Pn === t && (Pn = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            u = t[e + 2];
          if (typeof a != "function") {
            if (vf(a || l) === null) continue;
            break;
          }
          var n = Pl(l);
          n !== null &&
            (t.splice(e, 3),
            (e -= 3),
            nc(n, { pending: !0, data: u, method: l.method, action: a }, a, u));
        }
      }));
  }
  function Mu(t) {
    function e(h) {
      return Fn(h, t);
    }
    Sl !== null && Fn(Sl, t),
      El !== null && Fn(El, t),
      Tl !== null && Fn(Tl, t),
      _u.forEach(e),
      Du.forEach(e);
    for (var l = 0; l < xl.length; l++) {
      var a = xl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < xl.length && ((l = xl[0]), l.blockedOn === null); )
      pd(l), l.blockedOn === null && xl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var u = l[a],
          n = l[a + 1],
          i = u[Pt] || null;
        if (typeof n == "function") i || Sd(l);
        else if (i) {
          var r = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Pt] || null))) r = i.formAction;
            else if (vf(u) !== null) continue;
          } else r = i.action;
          typeof r == "function" ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)), Sd(l);
        }
      }
  }
  function pf(t) {
    this._internalRoot = t;
  }
  (In.prototype.render = pf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = ce();
      hd(l, a, t, e, null, null);
    }),
    (In.prototype.unmount = pf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          t.tag === 0 && Oa(), hd(t.current, 2, null, t, null, null), Hn(), (e[Fl] = null);
        }
      });
  function In(t) {
    this._internalRoot = t;
  }
  In.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Jf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < xl.length && e !== 0 && e < xl[l].priority; l++);
      xl.splice(l, 0, t), l === 0 && pd(t);
    }
  };
  var Ed = s.version;
  if (Ed !== "19.0.0") throw Error(f(527, Ed, "19.0.0"));
  w.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(f(188))
        : ((t = Object.keys(t).join(",")), Error(f(268, t)));
    return (t = H(e)), (t = t !== null ? W(t) : null), (t = t === null ? null : t.stateNode), t;
  };
  var A0 = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: X,
    findFiberByHostInstance: _l,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ti.isDisabled && ti.supportsFiber)
      try {
        (Ba = ti.inject(A0)), (ee = ti);
      } catch {}
  }
  return (
    (Cu.createRoot = function (t, e) {
      if (!d(t)) throw Error(f(299));
      var l = !1,
        a = "",
        u = qs,
        n = Ys,
        i = Ls,
        r = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (n = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 && (r = e.unstable_transitionCallbacks)),
        (e = od(t, 1, !1, null, null, l, a, u, n, i, r, null)),
        (t[Fl] = e.current),
        tf(t.nodeType === 8 ? t.parentNode : t),
        new pf(e)
      );
    }),
    (Cu.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(f(299));
      var a = !1,
        u = "",
        n = qs,
        i = Ys,
        r = Ls,
        h = null,
        p = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 && (h = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (p = l.formState)),
        (e = od(t, 1, !0, e, l ?? null, a, u, n, i, r, h, p)),
        (e.context = dd(null)),
        (l = e.current),
        (a = ce()),
        (u = dl(a)),
        (u.callback = null),
        hl(l, u, a),
        (e.current.lanes = a),
        Ya(e, a),
        Me(e),
        (t[Fl] = e.current),
        tf(t),
        new In(e)
      );
    }),
    (Cu.version = "19.0.0"),
    Cu
  );
}
var Md;
function H0() {
  if (Md) return Ef.exports;
  Md = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), (Ef.exports = j0()), Ef.exports;
}
var B0 = H0(),
  ju = {},
  Ud;
function q0() {
  if (Ud) return ju;
  (Ud = 1),
    Object.defineProperty(ju, "__esModule", { value: !0 }),
    (ju.parse = x),
    (ju.serialize = m);
  const c = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    s = /^[\u0021-\u003A\u003C-\u007E]*$/,
    o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    f = /^[\u0020-\u003A\u003D-\u007E]*$/,
    d = Object.prototype.toString,
    v = (() => {
      const D = function () {};
      return (D.prototype = Object.create(null)), D;
    })();
  function x(D, C) {
    const j = new v(),
      Z = D.length;
    if (Z < 2) return j;
    const Y = (C == null ? void 0 : C.decode) || M;
    let q = 0;
    do {
      const J = D.indexOf("=", q);
      if (J === -1) break;
      const Q = D.indexOf(";", q),
        ht = Q === -1 ? Z : Q;
      if (J > ht) {
        q = D.lastIndexOf(";", J - 1) + 1;
        continue;
      }
      const P = A(D, q, J),
        zt = b(D, J, P),
        Lt = D.slice(P, zt);
      if (j[Lt] === void 0) {
        let Qt = A(D, J + 1, ht),
          X = b(D, ht, Qt);
        const lt = Y(D.slice(Qt, X));
        j[Lt] = lt;
      }
      q = ht + 1;
    } while (q < Z);
    return j;
  }
  function A(D, C, j) {
    do {
      const Z = D.charCodeAt(C);
      if (Z !== 32 && Z !== 9) return C;
    } while (++C < j);
    return j;
  }
  function b(D, C, j) {
    for (; C > j; ) {
      const Z = D.charCodeAt(--C);
      if (Z !== 32 && Z !== 9) return C + 1;
    }
    return j;
  }
  function m(D, C, j) {
    const Z = (j == null ? void 0 : j.encode) || encodeURIComponent;
    if (!c.test(D)) throw new TypeError(`argument name is invalid: ${D}`);
    const Y = Z(C);
    if (!s.test(Y)) throw new TypeError(`argument val is invalid: ${C}`);
    let q = D + "=" + Y;
    if (!j) return q;
    if (j.maxAge !== void 0) {
      if (!Number.isInteger(j.maxAge)) throw new TypeError(`option maxAge is invalid: ${j.maxAge}`);
      q += "; Max-Age=" + j.maxAge;
    }
    if (j.domain) {
      if (!o.test(j.domain)) throw new TypeError(`option domain is invalid: ${j.domain}`);
      q += "; Domain=" + j.domain;
    }
    if (j.path) {
      if (!f.test(j.path)) throw new TypeError(`option path is invalid: ${j.path}`);
      q += "; Path=" + j.path;
    }
    if (j.expires) {
      if (!B(j.expires) || !Number.isFinite(j.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${j.expires}`);
      q += "; Expires=" + j.expires.toUTCString();
    }
    if (
      (j.httpOnly && (q += "; HttpOnly"),
      j.secure && (q += "; Secure"),
      j.partitioned && (q += "; Partitioned"),
      j.priority)
    )
      switch (typeof j.priority == "string" ? j.priority.toLowerCase() : void 0) {
        case "low":
          q += "; Priority=Low";
          break;
        case "medium":
          q += "; Priority=Medium";
          break;
        case "high":
          q += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${j.priority}`);
      }
    if (j.sameSite)
      switch (typeof j.sameSite == "string" ? j.sameSite.toLowerCase() : j.sameSite) {
        case !0:
        case "strict":
          q += "; SameSite=Strict";
          break;
        case "lax":
          q += "; SameSite=Lax";
          break;
        case "none":
          q += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${j.sameSite}`);
      }
    return q;
  }
  function M(D) {
    if (D.indexOf("%") === -1) return D;
    try {
      return decodeURIComponent(D);
    } catch {
      return D;
    }
  }
  function B(D) {
    return d.call(D) === "[object Date]";
  }
  return ju;
}
q0();
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Cd = "popstate";
function Y0(c = {}) {
  function s(f, d) {
    let { pathname: v, search: x, hash: A } = f.location;
    return Nf(
      "",
      { pathname: v, search: x, hash: A },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default"
    );
  }
  function o(f, d) {
    return typeof d == "string" ? d : Bu(d);
  }
  return w0(s, o, null, c);
}
function xt(c, s) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(s);
}
function Ue(c, s) {
  if (!c) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function L0() {
  return Math.random().toString(36).substring(2, 10);
}
function jd(c, s) {
  return { usr: c.state, key: c.key, idx: s };
}
function Nf(c, s, o = null, f) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? Ca(s) : s),
    state: o,
    key: (s && s.key) || f || L0(),
  };
}
function Bu({ pathname: c = "/", search: s = "", hash: o = "" }) {
  return (
    s && s !== "?" && (c += s.charAt(0) === "?" ? s : "?" + s),
    o && o !== "#" && (c += o.charAt(0) === "#" ? o : "#" + o),
    c
  );
}
function Ca(c) {
  let s = {};
  if (c) {
    let o = c.indexOf("#");
    o >= 0 && ((s.hash = c.substring(o)), (c = c.substring(0, o)));
    let f = c.indexOf("?");
    f >= 0 && ((s.search = c.substring(f)), (c = c.substring(0, f))), c && (s.pathname = c);
  }
  return s;
}
function w0(c, s, o, f = {}) {
  let { window: d = document.defaultView, v5Compat: v = !1 } = f,
    x = d.history,
    A = "POP",
    b = null,
    m = M();
  m == null && ((m = 0), x.replaceState({ ...x.state, idx: m }, ""));
  function M() {
    return (x.state || { idx: null }).idx;
  }
  function B() {
    A = "POP";
    let Y = M(),
      q = Y == null ? null : Y - m;
    (m = Y), b && b({ action: A, location: Z.location, delta: q });
  }
  function D(Y, q) {
    A = "PUSH";
    let J = Nf(Z.location, Y, q);
    m = M() + 1;
    let Q = jd(J, m),
      ht = Z.createHref(J);
    try {
      x.pushState(Q, "", ht);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      d.location.assign(ht);
    }
    v && b && b({ action: A, location: Z.location, delta: 1 });
  }
  function C(Y, q) {
    A = "REPLACE";
    let J = Nf(Z.location, Y, q);
    m = M();
    let Q = jd(J, m),
      ht = Z.createHref(J);
    x.replaceState(Q, "", ht), v && b && b({ action: A, location: Z.location, delta: 0 });
  }
  function j(Y) {
    let q = d.location.origin !== "null" ? d.location.origin : d.location.href,
      J = typeof Y == "string" ? Y : Bu(Y);
    return (
      (J = J.replace(/ $/, "%20")),
      xt(q, `No window.location.(origin|href) available to create URL for href: ${J}`),
      new URL(J, q)
    );
  }
  let Z = {
    get action() {
      return A;
    },
    get location() {
      return c(d, x);
    },
    listen(Y) {
      if (b) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(Cd, B),
        (b = Y),
        () => {
          d.removeEventListener(Cd, B), (b = null);
        }
      );
    },
    createHref(Y) {
      return s(d, Y);
    },
    createURL: j,
    encodeLocation(Y) {
      let q = j(Y);
      return { pathname: q.pathname, search: q.search, hash: q.hash };
    },
    push: D,
    replace: C,
    go(Y) {
      return x.go(Y);
    },
  };
  return Z;
}
function Gd(c, s, o = "/") {
  return G0(c, s, o, !1);
}
function G0(c, s, o, f) {
  let d = typeof s == "string" ? Ca(s) : s,
    v = Ol(d.pathname || "/", o);
  if (v == null) return null;
  let x = Xd(c);
  X0(x);
  let A = null;
  for (let b = 0; A == null && b < x.length; ++b) {
    let m = I0(v);
    A = F0(x[b], m, f);
  }
  return A;
}
function Xd(c, s = [], o = [], f = "") {
  let d = (v, x, A) => {
    let b = {
      relativePath: A === void 0 ? v.path || "" : A,
      caseSensitive: v.caseSensitive === !0,
      childrenIndex: x,
      route: v,
    };
    b.relativePath.startsWith("/") &&
      (xt(
        b.relativePath.startsWith(f),
        `Absolute route path "${b.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (b.relativePath = b.relativePath.slice(f.length)));
    let m = tl([f, b.relativePath]),
      M = o.concat(b);
    v.children &&
      v.children.length > 0 &&
      (xt(
        v.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      Xd(v.children, s, M, m)),
      !(v.path == null && !v.index) && s.push({ path: m, score: $0(m, v.index), routesMeta: M });
  };
  return (
    c.forEach((v, x) => {
      var A;
      if (v.path === "" || !((A = v.path) != null && A.includes("?"))) d(v, x);
      else for (let b of Qd(v.path)) d(v, x, b);
    }),
    s
  );
}
function Qd(c) {
  let s = c.split("/");
  if (s.length === 0) return [];
  let [o, ...f] = s,
    d = o.endsWith("?"),
    v = o.replace(/\?$/, "");
  if (f.length === 0) return d ? [v, ""] : [v];
  let x = Qd(f.join("/")),
    A = [];
  return (
    A.push(...x.map((b) => (b === "" ? v : [v, b].join("/")))),
    d && A.push(...x),
    A.map((b) => (c.startsWith("/") && b === "" ? "/" : b))
  );
}
function X0(c) {
  c.sort((s, o) =>
    s.score !== o.score
      ? o.score - s.score
      : W0(
          s.routesMeta.map((f) => f.childrenIndex),
          o.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var Q0 = /^:[\w-]+$/,
  Z0 = 3,
  V0 = 2,
  K0 = 1,
  J0 = 10,
  k0 = -2,
  Hd = (c) => c === "*";
function $0(c, s) {
  let o = c.split("/"),
    f = o.length;
  return (
    o.some(Hd) && (f += k0),
    s && (f += V0),
    o.filter((d) => !Hd(d)).reduce((d, v) => d + (Q0.test(v) ? Z0 : v === "" ? K0 : J0), f)
  );
}
function W0(c, s) {
  return c.length === s.length && c.slice(0, -1).every((f, d) => f === s[d])
    ? c[c.length - 1] - s[s.length - 1]
    : 0;
}
function F0(c, s, o = !1) {
  let { routesMeta: f } = c,
    d = {},
    v = "/",
    x = [];
  for (let A = 0; A < f.length; ++A) {
    let b = f[A],
      m = A === f.length - 1,
      M = v === "/" ? s : s.slice(v.length) || "/",
      B = ni({ path: b.relativePath, caseSensitive: b.caseSensitive, end: m }, M),
      D = b.route;
    if (
      (!B &&
        m &&
        o &&
        !f[f.length - 1].route.index &&
        (B = ni({ path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 }, M)),
      !B)
    )
      return null;
    Object.assign(d, B.params),
      x.push({
        params: d,
        pathname: tl([v, B.pathname]),
        pathnameBase: ay(tl([v, B.pathnameBase])),
        route: D,
      }),
      B.pathnameBase !== "/" && (v = tl([v, B.pathnameBase]));
  }
  return x;
}
function ni(c, s) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [o, f] = P0(c.path, c.caseSensitive, c.end),
    d = s.match(o);
  if (!d) return null;
  let v = d[0],
    x = v.replace(/(.)\/+$/, "$1"),
    A = d.slice(1);
  return {
    params: f.reduce((m, { paramName: M, isOptional: B }, D) => {
      if (M === "*") {
        let j = A[D] || "";
        x = v.slice(0, v.length - j.length).replace(/(.)\/+$/, "$1");
      }
      const C = A[D];
      return B && !C ? (m[M] = void 0) : (m[M] = (C || "").replace(/%2F/g, "/")), m;
    }, {}),
    pathname: v,
    pathnameBase: x,
    pattern: c,
  };
}
function P0(c, s = !1, o = !0) {
  Ue(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, "/*")}".`
  );
  let f = [],
    d =
      "^" +
      c
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (x, A, b) => (
            f.push({ paramName: A, isOptional: b != null }), b ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    c.endsWith("*")
      ? (f.push({ paramName: "*" }), (d += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
        ? (d += "\\/*$")
        : c !== "" && c !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, s ? void 0 : "i"), f]
  );
}
function I0(c) {
  try {
    return c
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      Ue(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`
      ),
      c
    );
  }
}
function Ol(c, s) {
  if (s === "/") return c;
  if (!c.toLowerCase().startsWith(s.toLowerCase())) return null;
  let o = s.endsWith("/") ? s.length - 1 : s.length,
    f = c.charAt(o);
  return f && f !== "/" ? null : c.slice(o) || "/";
}
function ty(c, s = "/") {
  let { pathname: o, search: f = "", hash: d = "" } = typeof c == "string" ? Ca(c) : c;
  return { pathname: o ? (o.startsWith("/") ? o : ey(o, s)) : s, search: uy(f), hash: ny(d) };
}
function ey(c, s) {
  let o = s.replace(/\/+$/, "").split("/");
  return (
    c.split("/").forEach((d) => {
      d === ".." ? o.length > 1 && o.pop() : d !== "." && o.push(d);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function Rf(c, s, o, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${s}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ly(c) {
  return c.filter((s, o) => o === 0 || (s.route.path && s.route.path.length > 0));
}
function Zd(c) {
  let s = ly(c);
  return s.map((o, f) => (f === s.length - 1 ? o.pathname : o.pathnameBase));
}
function Vd(c, s, o, f = !1) {
  let d;
  typeof c == "string"
    ? (d = Ca(c))
    : ((d = { ...c }),
      xt(!d.pathname || !d.pathname.includes("?"), Rf("?", "pathname", "search", d)),
      xt(!d.pathname || !d.pathname.includes("#"), Rf("#", "pathname", "hash", d)),
      xt(!d.search || !d.search.includes("#"), Rf("#", "search", "hash", d)));
  let v = c === "" || d.pathname === "",
    x = v ? "/" : d.pathname,
    A;
  if (x == null) A = o;
  else {
    let B = s.length - 1;
    if (!f && x.startsWith("..")) {
      let D = x.split("/");
      for (; D[0] === ".."; ) D.shift(), (B -= 1);
      d.pathname = D.join("/");
    }
    A = B >= 0 ? s[B] : "/";
  }
  let b = ty(d, A),
    m = x && x !== "/" && x.endsWith("/"),
    M = (v || x === ".") && o.endsWith("/");
  return !b.pathname.endsWith("/") && (m || M) && (b.pathname += "/"), b;
}
var tl = (c) => c.join("/").replace(/\/\/+/g, "/"),
  ay = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
  uy = (c) => (!c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c),
  ny = (c) => (!c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c);
function iy(c) {
  return (
    c != null &&
    typeof c.status == "number" &&
    typeof c.statusText == "string" &&
    typeof c.internal == "boolean" &&
    "data" in c
  );
}
var Kd = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Kd);
var cy = ["GET", ...Kd];
new Set(cy);
var ja = R.createContext(null);
ja.displayName = "DataRouter";
var ci = R.createContext(null);
ci.displayName = "DataRouterState";
var Jd = R.createContext({ isTransitioning: !1 });
Jd.displayName = "ViewTransition";
var fy = R.createContext(new Map());
fy.displayName = "Fetchers";
var ry = R.createContext(null);
ry.displayName = "Await";
var Ce = R.createContext(null);
Ce.displayName = "Navigation";
var qu = R.createContext(null);
qu.displayName = "Location";
var je = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
je.displayName = "Route";
var Cf = R.createContext(null);
Cf.displayName = "RouteError";
function sy(c, { relative: s } = {}) {
  xt(Yu(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: o, navigator: f } = R.useContext(Ce),
    { hash: d, pathname: v, search: x } = Lu(c, { relative: s }),
    A = v;
  return (
    o !== "/" && (A = v === "/" ? o : tl([o, v])), f.createHref({ pathname: A, search: x, hash: d })
  );
}
function Yu() {
  return R.useContext(qu) != null;
}
function $l() {
  return (
    xt(Yu(), "useLocation() may be used only in the context of a <Router> component."),
    R.useContext(qu).location
  );
}
var kd =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function $d(c) {
  R.useContext(Ce).static || R.useLayoutEffect(c);
}
function oy() {
  let { isDataRoute: c } = R.useContext(je);
  return c ? Ay() : dy();
}
function dy() {
  xt(Yu(), "useNavigate() may be used only in the context of a <Router> component.");
  let c = R.useContext(ja),
    { basename: s, navigator: o } = R.useContext(Ce),
    { matches: f } = R.useContext(je),
    { pathname: d } = $l(),
    v = JSON.stringify(Zd(f)),
    x = R.useRef(!1);
  return (
    $d(() => {
      x.current = !0;
    }),
    R.useCallback(
      (b, m = {}) => {
        if ((Ue(x.current, kd), !x.current)) return;
        if (typeof b == "number") {
          o.go(b);
          return;
        }
        let M = Vd(b, JSON.parse(v), d, m.relative === "path");
        c == null && s !== "/" && (M.pathname = M.pathname === "/" ? s : tl([s, M.pathname])),
          (m.replace ? o.replace : o.push)(M, m.state, m);
      },
      [s, o, v, d, c]
    )
  );
}
R.createContext(null);
function Wd() {
  let { matches: c } = R.useContext(je),
    s = c[c.length - 1];
  return s ? s.params : {};
}
function Lu(c, { relative: s } = {}) {
  let { matches: o } = R.useContext(je),
    { pathname: f } = $l(),
    d = JSON.stringify(Zd(o));
  return R.useMemo(() => Vd(c, JSON.parse(d), f, s === "path"), [c, d, f, s]);
}
function hy(c, s) {
  return Fd(c, s);
}
function Fd(c, s, o, f) {
  var J;
  xt(Yu(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: d, static: v } = R.useContext(Ce),
    { matches: x } = R.useContext(je),
    A = x[x.length - 1],
    b = A ? A.params : {},
    m = A ? A.pathname : "/",
    M = A ? A.pathnameBase : "/",
    B = A && A.route;
  {
    let Q = (B && B.path) || "";
    Pd(
      m,
      !B || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`
    );
  }
  let D = $l(),
    C;
  if (s) {
    let Q = typeof s == "string" ? Ca(s) : s;
    xt(
      M === "/" || ((J = Q.pathname) == null ? void 0 : J.startsWith(M)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${M}" but pathname "${Q.pathname}" was given in the \`location\` prop.`
    ),
      (C = Q);
  } else C = D;
  let j = C.pathname || "/",
    Z = j;
  if (M !== "/") {
    let Q = M.replace(/^\//, "").split("/");
    Z = "/" + j.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let Y = !v && o && o.matches && o.matches.length > 0 ? o.matches : Gd(c, { pathname: Z });
  Ue(B || Y != null, `No routes matched location "${C.pathname}${C.search}${C.hash}" `),
    Ue(
      Y == null ||
        Y[Y.length - 1].route.element !== void 0 ||
        Y[Y.length - 1].route.Component !== void 0 ||
        Y[Y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let q = py(
    Y &&
      Y.map((Q) =>
        Object.assign({}, Q, {
          params: Object.assign({}, b, Q.params),
          pathname: tl([M, d.encodeLocation ? d.encodeLocation(Q.pathname).pathname : Q.pathname]),
          pathnameBase:
            Q.pathnameBase === "/"
              ? M
              : tl([
                  M,
                  d.encodeLocation ? d.encodeLocation(Q.pathnameBase).pathname : Q.pathnameBase,
                ]),
        })
      ),
    x,
    o,
    f
  );
  return s && q
    ? R.createElement(
        qu.Provider,
        {
          value: {
            location: { pathname: "/", search: "", hash: "", state: null, key: "default", ...C },
            navigationType: "POP",
          },
        },
        q
      )
    : q;
}
function my() {
  let c = xy(),
    s = iy(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c),
    o = c instanceof Error ? c.stack : null,
    f = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: f },
    v = { padding: "2px 4px", backgroundColor: f },
    x = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", c),
    (x = R.createElement(
      R.Fragment,
      null,
      R.createElement("p", null, "💿 Hey developer 👋"),
      R.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        R.createElement("code", { style: v }, "ErrorBoundary"),
        " or",
        " ",
        R.createElement("code", { style: v }, "errorElement"),
        " prop on your route."
      )
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement("h2", null, "Unexpected Application Error!"),
      R.createElement("h3", { style: { fontStyle: "italic" } }, s),
      o ? R.createElement("pre", { style: d }, o) : null,
      x
    )
  );
}
var yy = R.createElement(my, null),
  vy = class extends R.Component {
    constructor(c) {
      super(c),
        (this.state = { location: c.location, revalidation: c.revalidation, error: c.error });
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, s) {
      return s.location !== c.location || (s.revalidation !== "idle" && c.revalidation === "idle")
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : s.error,
            location: s.location,
            revalidation: c.revalidation || s.revalidation,
          };
    }
    componentDidCatch(c, s) {
      console.error("React Router caught the following error during render", c, s);
    }
    render() {
      return this.state.error !== void 0
        ? R.createElement(
            je.Provider,
            { value: this.props.routeContext },
            R.createElement(Cf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function gy({ routeContext: c, match: s, children: o }) {
  let f = R.useContext(ja);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = s.route.id),
    R.createElement(je.Provider, { value: c }, o)
  );
}
function py(c, s = [], o = null, f = null) {
  if (c == null) {
    if (!o) return null;
    if (o.errors) c = o.matches;
    else if (s.length === 0 && !o.initialized && o.matches.length > 0) c = o.matches;
    else return null;
  }
  let d = c,
    v = o == null ? void 0 : o.errors;
  if (v != null) {
    let b = d.findIndex((m) => m.route.id && (v == null ? void 0 : v[m.route.id]) !== void 0);
    xt(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`
    ),
      (d = d.slice(0, Math.min(d.length, b + 1)));
  }
  let x = !1,
    A = -1;
  if (o)
    for (let b = 0; b < d.length; b++) {
      let m = d[b];
      if (((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (A = b), m.route.id)) {
        let { loaderData: M, errors: B } = o,
          D = m.route.loader && !M.hasOwnProperty(m.route.id) && (!B || B[m.route.id] === void 0);
        if (m.route.lazy || D) {
          (x = !0), A >= 0 ? (d = d.slice(0, A + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((b, m, M) => {
    let B,
      D = !1,
      C = null,
      j = null;
    o &&
      ((B = v && m.route.id ? v[m.route.id] : void 0),
      (C = m.route.errorElement || yy),
      x &&
        (A < 0 && M === 0
          ? (Pd(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (D = !0),
            (j = null))
          : A === M && ((D = !0), (j = m.route.hydrateFallbackElement || null))));
    let Z = s.concat(d.slice(0, M + 1)),
      Y = () => {
        let q;
        return (
          B
            ? (q = C)
            : D
              ? (q = j)
              : m.route.Component
                ? (q = R.createElement(m.route.Component, null))
                : m.route.element
                  ? (q = m.route.element)
                  : (q = b),
          R.createElement(gy, {
            match: m,
            routeContext: { outlet: b, matches: Z, isDataRoute: o != null },
            children: q,
          })
        );
      };
    return o && (m.route.ErrorBoundary || m.route.errorElement || M === 0)
      ? R.createElement(vy, {
          location: o.location,
          revalidation: o.revalidation,
          component: C,
          error: B,
          children: Y(),
          routeContext: { outlet: null, matches: Z, isDataRoute: !0 },
        })
      : Y();
  }, null);
}
function jf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function by(c) {
  let s = R.useContext(ja);
  return xt(s, jf(c)), s;
}
function Sy(c) {
  let s = R.useContext(ci);
  return xt(s, jf(c)), s;
}
function Ey(c) {
  let s = R.useContext(je);
  return xt(s, jf(c)), s;
}
function Hf(c) {
  let s = Ey(c),
    o = s.matches[s.matches.length - 1];
  return xt(o.route.id, `${c} can only be used on routes that contain a unique "id"`), o.route.id;
}
function Ty() {
  return Hf("useRouteId");
}
function xy() {
  var f;
  let c = R.useContext(Cf),
    s = Sy("useRouteError"),
    o = Hf("useRouteError");
  return c !== void 0 ? c : (f = s.errors) == null ? void 0 : f[o];
}
function Ay() {
  let { router: c } = by("useNavigate"),
    s = Hf("useNavigate"),
    o = R.useRef(!1);
  return (
    $d(() => {
      o.current = !0;
    }),
    R.useCallback(
      async (d, v = {}) => {
        Ue(o.current, kd),
          o.current &&
            (typeof d == "number" ? c.navigate(d) : await c.navigate(d, { fromRouteId: s, ...v }));
      },
      [c, s]
    )
  );
}
var Bd = {};
function Pd(c, s, o) {
  !s && !Bd[c] && ((Bd[c] = !0), Ue(!1, o));
}
R.memo(Ry);
function Ry({ routes: c, future: s, state: o }) {
  return Fd(c, void 0, o, s);
}
function Ua(c) {
  xt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Oy({
  basename: c = "/",
  children: s = null,
  location: o,
  navigationType: f = "POP",
  navigator: d,
  static: v = !1,
}) {
  xt(
    !Yu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let x = c.replace(/^\/*/, "/"),
    A = R.useMemo(() => ({ basename: x, navigator: d, static: v, future: {} }), [x, d, v]);
  typeof o == "string" && (o = Ca(o));
  let { pathname: b = "/", search: m = "", hash: M = "", state: B = null, key: D = "default" } = o,
    C = R.useMemo(() => {
      let j = Ol(b, x);
      return j == null
        ? null
        : { location: { pathname: j, search: m, hash: M, state: B, key: D }, navigationType: f };
    }, [x, b, m, M, B, D, f]);
  return (
    Ue(
      C != null,
      `<Router basename="${x}"> is not able to match the URL "${b}${m}${M}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    C == null
      ? null
      : R.createElement(
          Ce.Provider,
          { value: A },
          R.createElement(qu.Provider, { children: s, value: C })
        )
  );
}
function zy({ children: c, location: s }) {
  return hy(Mf(c), s);
}
function Mf(c, s = []) {
  let o = [];
  return (
    R.Children.forEach(c, (f, d) => {
      if (!R.isValidElement(f)) return;
      let v = [...s, d];
      if (f.type === R.Fragment) {
        o.push.apply(o, Mf(f.props.children, v));
        return;
      }
      xt(
        f.type === Ua,
        `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        xt(!f.props.index || !f.props.children, "An index route cannot have child routes.");
      let x = {
        id: f.props.id || v.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (x.children = Mf(f.props.children, v)), o.push(x);
    }),
    o
  );
}
var li = "get",
  ai = "application/x-www-form-urlencoded";
function fi(c) {
  return c != null && typeof c.tagName == "string";
}
function _y(c) {
  return fi(c) && c.tagName.toLowerCase() === "button";
}
function Dy(c) {
  return fi(c) && c.tagName.toLowerCase() === "form";
}
function Ny(c) {
  return fi(c) && c.tagName.toLowerCase() === "input";
}
function My(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function Uy(c, s) {
  return c.button === 0 && (!s || s === "_self") && !My(c);
}
var ei = null;
function Cy() {
  if (ei === null)
    try {
      new FormData(document.createElement("form"), 0), (ei = !1);
    } catch {
      ei = !0;
    }
  return ei;
}
var jy = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Of(c) {
  return c != null && !jy.has(c)
    ? (Ue(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ai}"`
      ),
      null)
    : c;
}
function Hy(c, s) {
  let o, f, d, v, x;
  if (Dy(c)) {
    let A = c.getAttribute("action");
    (f = A ? Ol(A, s) : null),
      (o = c.getAttribute("method") || li),
      (d = Of(c.getAttribute("enctype")) || ai),
      (v = new FormData(c));
  } else if (_y(c) || (Ny(c) && (c.type === "submit" || c.type === "image"))) {
    let A = c.form;
    if (A == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let b = c.getAttribute("formaction") || A.getAttribute("action");
    if (
      ((f = b ? Ol(b, s) : null),
      (o = c.getAttribute("formmethod") || A.getAttribute("method") || li),
      (d = Of(c.getAttribute("formenctype")) || Of(A.getAttribute("enctype")) || ai),
      (v = new FormData(A, c)),
      !Cy())
    ) {
      let { name: m, type: M, value: B } = c;
      if (M === "image") {
        let D = m ? `${m}.` : "";
        v.append(`${D}x`, "0"), v.append(`${D}y`, "0");
      } else m && v.append(m, B);
    }
  } else {
    if (fi(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (o = li), (f = null), (d = ai), (x = c);
  }
  return (
    v && d === "text/plain" && ((x = v), (v = void 0)),
    { action: f, method: o.toLowerCase(), encType: d, formData: v, body: x }
  );
}
function Bf(c, s) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(s);
}
async function By(c, s) {
  if (c.id in s) return s[c.id];
  try {
    let o = await import(c.module);
    return (s[c.id] = o), o;
  } catch (o) {
    return (
      console.error(`Error loading route module \`${c.module}\`, reloading page...`),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function qy(c) {
  return c == null
    ? !1
    : c.href == null
      ? c.rel === "preload" && typeof c.imageSrcSet == "string" && typeof c.imageSizes == "string"
      : typeof c.rel == "string" && typeof c.href == "string";
}
async function Yy(c, s, o) {
  let f = await Promise.all(
    c.map(async (d) => {
      let v = s.routes[d.route.id];
      if (v) {
        let x = await By(v, o);
        return x.links ? x.links() : [];
      }
      return [];
    })
  );
  return Xy(
    f
      .flat(1)
      .filter(qy)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
      )
  );
}
function qd(c, s, o, f, d, v) {
  let x = (b, m) => (o[m] ? b.route.id !== o[m].route.id : !0),
    A = (b, m) => {
      var M;
      return (
        o[m].pathname !== b.pathname ||
        (((M = o[m].route.path) == null ? void 0 : M.endsWith("*")) &&
          o[m].params["*"] !== b.params["*"])
      );
    };
  return v === "assets"
    ? s.filter((b, m) => x(b, m) || A(b, m))
    : v === "data"
      ? s.filter((b, m) => {
          var B;
          let M = f.routes[b.route.id];
          if (!M || !M.hasLoader) return !1;
          if (x(b, m) || A(b, m)) return !0;
          if (b.route.shouldRevalidate) {
            let D = b.route.shouldRevalidate({
              currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
              currentParams: ((B = o[0]) == null ? void 0 : B.params) || {},
              nextUrl: new URL(c, window.origin),
              nextParams: b.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof D == "boolean") return D;
          }
          return !0;
        })
      : [];
}
function Ly(c, s, { includeHydrateFallback: o } = {}) {
  return wy(
    c
      .map((f) => {
        let d = s.routes[f.route.id];
        if (!d) return [];
        let v = [d.module];
        return (
          d.clientActionModule && (v = v.concat(d.clientActionModule)),
          d.clientLoaderModule && (v = v.concat(d.clientLoaderModule)),
          o && d.hydrateFallbackModule && (v = v.concat(d.hydrateFallbackModule)),
          d.imports && (v = v.concat(d.imports)),
          v
        );
      })
      .flat(1)
  );
}
function wy(c) {
  return [...new Set(c)];
}
function Gy(c) {
  let s = {},
    o = Object.keys(c).sort();
  for (let f of o) s[f] = c[f];
  return s;
}
function Xy(c, s) {
  let o = new Set();
  return (
    new Set(s),
    c.reduce((f, d) => {
      let v = JSON.stringify(Gy(d));
      return o.has(v) || (o.add(v), f.push({ key: v, link: d })), f;
    }, [])
  );
}
function Qy(c) {
  let s =
    typeof c == "string"
      ? new URL(c, typeof window > "u" ? "server://singlefetch/" : window.location.origin)
      : c;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function Zy() {
  let c = R.useContext(ja);
  return Bf(c, "You must render this element inside a <DataRouterContext.Provider> element"), c;
}
function Vy() {
  let c = R.useContext(ci);
  return (
    Bf(c, "You must render this element inside a <DataRouterStateContext.Provider> element"), c
  );
}
var qf = R.createContext(void 0);
qf.displayName = "FrameworkContext";
function Id() {
  let c = R.useContext(qf);
  return Bf(c, "You must render this element inside a <HydratedRouter> element"), c;
}
function Ky(c, s) {
  let o = R.useContext(qf),
    [f, d] = R.useState(!1),
    [v, x] = R.useState(!1),
    { onFocus: A, onBlur: b, onMouseEnter: m, onMouseLeave: M, onTouchStart: B } = s,
    D = R.useRef(null);
  R.useEffect(() => {
    if ((c === "render" && x(!0), c === "viewport")) {
      let Z = (q) => {
          q.forEach((J) => {
            x(J.isIntersecting);
          });
        },
        Y = new IntersectionObserver(Z, { threshold: 0.5 });
      return (
        D.current && Y.observe(D.current),
        () => {
          Y.disconnect();
        }
      );
    }
  }, [c]),
    R.useEffect(() => {
      if (f) {
        let Z = setTimeout(() => {
          x(!0);
        }, 100);
        return () => {
          clearTimeout(Z);
        };
      }
    }, [f]);
  let C = () => {
      d(!0);
    },
    j = () => {
      d(!1), x(!1);
    };
  return o
    ? c !== "intent"
      ? [v, D, {}]
      : [
          v,
          D,
          {
            onFocus: Hu(A, C),
            onBlur: Hu(b, j),
            onMouseEnter: Hu(m, C),
            onMouseLeave: Hu(M, j),
            onTouchStart: Hu(B, C),
          },
        ]
    : [!1, D, {}];
}
function Hu(c, s) {
  return (o) => {
    c && c(o), o.defaultPrevented || s(o);
  };
}
function Jy({ page: c, ...s }) {
  let { router: o } = Zy(),
    f = R.useMemo(() => Gd(o.routes, c, o.basename), [o.routes, c, o.basename]);
  return f ? R.createElement($y, { page: c, matches: f, ...s }) : null;
}
function ky(c) {
  let { manifest: s, routeModules: o } = Id(),
    [f, d] = R.useState([]);
  return (
    R.useEffect(() => {
      let v = !1;
      return (
        Yy(c, s, o).then((x) => {
          v || d(x);
        }),
        () => {
          v = !0;
        }
      );
    }, [c, s, o]),
    f
  );
}
function $y({ page: c, matches: s, ...o }) {
  let f = $l(),
    { manifest: d, routeModules: v } = Id(),
    { loaderData: x, matches: A } = Vy(),
    b = R.useMemo(() => qd(c, s, A, d, f, "data"), [c, s, A, d, f]),
    m = R.useMemo(() => qd(c, s, A, d, f, "assets"), [c, s, A, d, f]),
    M = R.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let C = new Set(),
        j = !1;
      if (
        (s.forEach((Y) => {
          var J;
          let q = d.routes[Y.route.id];
          !q ||
            !q.hasLoader ||
            ((!b.some((Q) => Q.route.id === Y.route.id) &&
              Y.route.id in x &&
              (J = v[Y.route.id]) != null &&
              J.shouldRevalidate) ||
            q.hasClientLoader
              ? (j = !0)
              : C.add(Y.route.id));
        }),
        C.size === 0)
      )
        return [];
      let Z = Qy(c);
      return (
        j &&
          C.size > 0 &&
          Z.searchParams.set(
            "_routes",
            s
              .filter((Y) => C.has(Y.route.id))
              .map((Y) => Y.route.id)
              .join(",")
          ),
        [Z.pathname + Z.search]
      );
    }, [x, f, d, b, s, c, v]),
    B = R.useMemo(() => Ly(m, d), [m, d]),
    D = ky(m);
  return R.createElement(
    R.Fragment,
    null,
    M.map((C) => R.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...o })),
    B.map((C) => R.createElement("link", { key: C, rel: "modulepreload", href: C, ...o })),
    D.map(({ key: C, link: j }) => R.createElement("link", { key: C, ...j }))
  );
}
function Wy(...c) {
  return (s) => {
    c.forEach((o) => {
      typeof o == "function" ? o(s) : o != null && (o.current = s);
    });
  };
}
var th =
  typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  th && (window.__reactRouterVersion = "7.2.0");
} catch {}
function Fy({ basename: c, children: s, window: o }) {
  let f = R.useRef();
  f.current == null && (f.current = Y0({ window: o, v5Compat: !0 }));
  let d = f.current,
    [v, x] = R.useState({ action: d.action, location: d.location }),
    A = R.useCallback(
      (b) => {
        R.startTransition(() => x(b));
      },
      [x]
    );
  return (
    R.useLayoutEffect(() => d.listen(A), [d, A]),
    R.createElement(Oy, {
      basename: c,
      children: s,
      location: v.location,
      navigationType: v.action,
      navigator: d,
    })
  );
}
var eh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ii = R.forwardRef(function (
    {
      onClick: s,
      discover: o = "render",
      prefetch: f = "none",
      relative: d,
      reloadDocument: v,
      replace: x,
      state: A,
      target: b,
      to: m,
      preventScrollReset: M,
      viewTransition: B,
      ...D
    },
    C
  ) {
    let { basename: j } = R.useContext(Ce),
      Z = typeof m == "string" && eh.test(m),
      Y,
      q = !1;
    if (typeof m == "string" && Z && ((Y = m), th))
      try {
        let X = new URL(window.location.href),
          lt = m.startsWith("//") ? new URL(X.protocol + m) : new URL(m),
          Jt = Ol(lt.pathname, j);
        lt.origin === X.origin && Jt != null ? (m = Jt + lt.search + lt.hash) : (q = !0);
      } catch {
        Ue(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let J = sy(m, { relative: d }),
      [Q, ht, P] = Ky(f, D),
      zt = tv(m, {
        replace: x,
        state: A,
        target: b,
        preventScrollReset: M,
        relative: d,
        viewTransition: B,
      });
    function Lt(X) {
      s && s(X), X.defaultPrevented || zt(X);
    }
    let Qt = R.createElement("a", {
      ...D,
      ...P,
      href: Y || J,
      onClick: q || v ? s : Lt,
      ref: Wy(C, ht),
      target: b,
      "data-discover": !Z && o === "render" ? "true" : void 0,
    });
    return Q && !Z ? R.createElement(R.Fragment, null, Qt, R.createElement(Jy, { page: J })) : Qt;
  });
ii.displayName = "Link";
var ui = R.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: o = !1,
    className: f = "",
    end: d = !1,
    style: v,
    to: x,
    viewTransition: A,
    children: b,
    ...m
  },
  M
) {
  let B = Lu(x, { relative: m.relative }),
    D = $l(),
    C = R.useContext(ci),
    { navigator: j, basename: Z } = R.useContext(Ce),
    Y = C != null && nv(B) && A === !0,
    q = j.encodeLocation ? j.encodeLocation(B).pathname : B.pathname,
    J = D.pathname,
    Q = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
  o || ((J = J.toLowerCase()), (Q = Q ? Q.toLowerCase() : null), (q = q.toLowerCase())),
    Q && Z && (Q = Ol(Q, Z) || Q);
  const ht = q !== "/" && q.endsWith("/") ? q.length - 1 : q.length;
  let P = J === q || (!d && J.startsWith(q) && J.charAt(ht) === "/"),
    zt = Q != null && (Q === q || (!d && Q.startsWith(q) && Q.charAt(q.length) === "/")),
    Lt = { isActive: P, isPending: zt, isTransitioning: Y },
    Qt = P ? s : void 0,
    X;
  typeof f == "function"
    ? (X = f(Lt))
    : (X = [f, P ? "active" : null, zt ? "pending" : null, Y ? "transitioning" : null]
        .filter(Boolean)
        .join(" "));
  let lt = typeof v == "function" ? v(Lt) : v;
  return R.createElement(
    ii,
    { ...m, "aria-current": Qt, className: X, ref: M, style: lt, to: x, viewTransition: A },
    typeof b == "function" ? b(Lt) : b
  );
});
ui.displayName = "NavLink";
var Py = R.forwardRef(
  (
    {
      discover: c = "render",
      fetcherKey: s,
      navigate: o,
      reloadDocument: f,
      replace: d,
      state: v,
      method: x = li,
      action: A,
      onSubmit: b,
      relative: m,
      preventScrollReset: M,
      viewTransition: B,
      ...D
    },
    C
  ) => {
    let j = av(),
      Z = uv(A, { relative: m }),
      Y = x.toLowerCase() === "get" ? "get" : "post",
      q = typeof A == "string" && eh.test(A),
      J = (Q) => {
        if ((b && b(Q), Q.defaultPrevented)) return;
        Q.preventDefault();
        let ht = Q.nativeEvent.submitter,
          P = (ht == null ? void 0 : ht.getAttribute("formmethod")) || x;
        j(ht || Q.currentTarget, {
          fetcherKey: s,
          method: P,
          navigate: o,
          replace: d,
          state: v,
          relative: m,
          preventScrollReset: M,
          viewTransition: B,
        });
      };
    return R.createElement("form", {
      ref: C,
      method: Y,
      action: Z,
      onSubmit: f ? b : J,
      ...D,
      "data-discover": !q && c === "render" ? "true" : void 0,
    });
  }
);
Py.displayName = "Form";
function Iy(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function lh(c) {
  let s = R.useContext(ja);
  return xt(s, Iy(c)), s;
}
function tv(
  c,
  { target: s, replace: o, state: f, preventScrollReset: d, relative: v, viewTransition: x } = {}
) {
  let A = oy(),
    b = $l(),
    m = Lu(c, { relative: v });
  return R.useCallback(
    (M) => {
      if (Uy(M, s)) {
        M.preventDefault();
        let B = o !== void 0 ? o : Bu(b) === Bu(m);
        A(c, { replace: B, state: f, preventScrollReset: d, relative: v, viewTransition: x });
      }
    },
    [b, A, m, o, f, s, c, d, v, x]
  );
}
var ev = 0,
  lv = () => `__${String(++ev)}__`;
function av() {
  let { router: c } = lh("useSubmit"),
    { basename: s } = R.useContext(Ce),
    o = Ty();
  return R.useCallback(
    async (f, d = {}) => {
      let { action: v, method: x, encType: A, formData: b, body: m } = Hy(f, s);
      if (d.navigate === !1) {
        let M = d.fetcherKey || lv();
        await c.fetch(M, o, d.action || v, {
          preventScrollReset: d.preventScrollReset,
          formData: b,
          body: m,
          formMethod: d.method || x,
          formEncType: d.encType || A,
          flushSync: d.flushSync,
        });
      } else
        await c.navigate(d.action || v, {
          preventScrollReset: d.preventScrollReset,
          formData: b,
          body: m,
          formMethod: d.method || x,
          formEncType: d.encType || A,
          replace: d.replace,
          state: d.state,
          fromRouteId: o,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [c, s, o]
  );
}
function uv(c, { relative: s } = {}) {
  let { basename: o } = R.useContext(Ce),
    f = R.useContext(je);
  xt(f, "useFormAction must be used inside a RouteContext");
  let [d] = f.matches.slice(-1),
    v = { ...Lu(c || ".", { relative: s }) },
    x = $l();
  if (c == null) {
    v.search = x.search;
    let A = new URLSearchParams(v.search),
      b = A.getAll("index");
    if (b.some((M) => M === "")) {
      A.delete("index"), b.filter((B) => B).forEach((B) => A.append("index", B));
      let M = A.toString();
      v.search = M ? `?${M}` : "";
    }
  }
  return (
    (!c || c === ".") &&
      d.route.index &&
      (v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (v.pathname = v.pathname === "/" ? o : tl([o, v.pathname])),
    Bu(v)
  );
}
function nv(c, s = {}) {
  let o = R.useContext(Jd);
  xt(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = lh("useViewTransitionState"),
    d = Lu(c, { relative: s.relative });
  if (!o.isTransitioning) return !1;
  let v = Ol(o.currentLocation.pathname, f) || o.currentLocation.pathname,
    x = Ol(o.nextLocation.pathname, f) || o.nextLocation.pathname;
  return ni(d.pathname, x) != null || ni(d.pathname, v) != null;
}
new TextEncoder();
function iv() {
  const c = async () => {
    try {
      const o = await fetch("/users/logout/", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json", "X-CSRFToken": s() },
      });
      if (o.ok) {
        if ((console.log("Logout successful"), console.log(o), o.redirected)) {
          const f = new URL(o.url);
          window.location.href = f.pathname;
        }
      } else console.error("Logout failed");
    } catch (o) {
      console.error("Error logging out:", o);
    }
  };
  function s() {
    const o = document.cookie.split("; ").find((f) => f.startsWith("csrftoken="));
    return o ? o.split("=")[1] : "";
  }
  return O.jsx("button", {
    onClick: c,
    className: "bg-red-500 text-white px-4 py-2 rounded",
    children: "Logout",
  });
}
var zf = { exports: {} },
  _f,
  Yd;
function cv() {
  if (Yd) return _f;
  Yd = 1;
  var c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (_f = c), _f;
}
var Df, Ld;
function fv() {
  if (Ld) return Df;
  Ld = 1;
  var c = cv();
  function s() {}
  function o() {}
  return (
    (o.resetWarningCache = s),
    (Df = function () {
      function f(x, A, b, m, M, B) {
        if (B !== c) {
          var D = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((D.name = "Invariant Violation"), D);
        }
      }
      f.isRequired = f;
      function d() {
        return f;
      }
      var v = {
        array: f,
        bigint: f,
        bool: f,
        func: f,
        number: f,
        object: f,
        string: f,
        symbol: f,
        any: f,
        arrayOf: d,
        element: f,
        elementType: f,
        instanceOf: d,
        node: f,
        objectOf: d,
        oneOf: d,
        oneOfType: d,
        shape: d,
        exact: d,
        checkPropTypes: o,
        resetWarningCache: s,
      };
      return (v.PropTypes = v), v;
    }),
    Df
  );
}
var wd;
function rv() {
  return wd || ((wd = 1), (zf.exports = fv()())), zf.exports;
}
var sv = rv();
const Rl = O0(sv);
function Yf({ books: c = [] }) {
  return O.jsxs("div", {
    className: "max-w-6xl mx-auto mt-10 p-6 bg-white",
    children: [
      O.jsx("h2", { className: "text-2xl font-bold text-center mb-6", children: "Book List" }),
      O.jsx("div", {
        className: "overflow-x-auto",
        children: O.jsxs("table", {
          className: "min-w-full border-collapse border border-gray-300",
          children: [
            O.jsx("thead", {
              children: O.jsxs("tr", {
                className: "bg-gray-800 text-white",
                children: [
                  O.jsx("th", {
                    className: "p-4 border border-gray-600 text-left",
                    children: "Gutenberg ID",
                  }),
                  O.jsx("th", {
                    className: "p-4 border border-gray-600 text-left",
                    children: "Title",
                  }),
                  O.jsx("th", {
                    className: "p-4 border border-gray-600 text-left",
                    children: "Author",
                  }),
                  O.jsx("th", {
                    className: "p-4 border border-gray-600 text-left",
                    children: "Language",
                  }),
                  O.jsx("th", {
                    className: "p-4 border border-gray-600 text-left",
                    children: "Category",
                  }),
                  O.jsx("th", {
                    className: "p-4 border border-gray-600 text-left",
                    children: "Read",
                  }),
                  O.jsx("th", {
                    className: "p-4 border border-gray-600 text-left",
                    children: "Analysis",
                  }),
                ],
              }),
            }),
            O.jsx("tbody", {
              children:
                c.length === 0
                  ? O.jsx("tr", {
                      children: O.jsx("td", {
                        colSpan: "7",
                        className: "p-4 text-center text-gray-600",
                        children: "No books available.",
                      }),
                    })
                  : c.map((s, o) =>
                      O.jsxs(
                        "tr",
                        {
                          className: o % 2 === 0 ? "bg-gray-50" : "bg-white",
                          children: [
                            O.jsx("td", {
                              className: "p-4 border border-gray-300",
                              children: s.gutenberg_id,
                            }),
                            O.jsx("td", {
                              className: "p-4 border border-gray-300",
                              children: s.title,
                            }),
                            O.jsx("td", {
                              className: "p-4 border border-gray-300",
                              children: s.author || "Unknown",
                            }),
                            O.jsx("td", {
                              className: "p-4 border border-gray-300",
                              children: s.language || "N/A",
                            }),
                            O.jsx("td", {
                              className: "p-4 border border-gray-300",
                              children: s.category || "N/A",
                            }),
                            O.jsx("td", {
                              className: "p-4 border border-gray-300",
                              children: O.jsx(ii, {
                                to: `/books/${s.id}/read`,
                                className: "text-blue-500 hover:underline",
                                children: "Read",
                              }),
                            }),
                            O.jsx("td", {
                              className: "p-4 border border-gray-300",
                              children: O.jsx(ii, {
                                to: `/books/${s.id}/analysis`,
                                className: "text-blue-500 hover:underline",
                                children: "Analysis",
                              }),
                            }),
                          ],
                        },
                        s.gutenberg_id
                      )
                    ),
            }),
          ],
        }),
      }),
    ],
  });
}
Yf.propTypes = {
  books: Rl.arrayOf(
    Rl.shape({
      id: Rl.number.isRequired,
      gutenberg_id: Rl.number.isRequired,
      title: Rl.string.isRequired,
      author: Rl.string,
      language: Rl.string,
      category: Rl.string,
    })
  ),
};
function ov() {
  const [c, s] = R.useState([]),
    [o, f] = R.useState(!0),
    [d, v] = R.useState(null);
  R.useEffect(() => {
    x();
  }, []);
  const x = async () => {
    try {
      const A = await fetch("/api/books/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!A.ok) throw new Error("Failed to fetch books");
      const b = await A.json();
      s(b);
    } catch (A) {
      v(A.message);
    } finally {
      f(!1);
    }
  };
  return o
    ? O.jsx("p", { className: "text-center mt-10 text-gray-700", children: "Loading books..." })
    : d
      ? O.jsxs("p", { className: "text-center mt-10 text-red-500", children: ["Error: ", d] })
      : O.jsx(Yf, { books: c });
}
function dv() {
  const [c, s] = R.useState([]),
    [o, f] = R.useState(!0),
    [d, v] = R.useState(null);
  R.useEffect(() => {
    x();
  }, []);
  const x = async () => {
    try {
      const A = await fetch("/api/user-books/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!A.ok) throw new Error("Failed to fetch books");
      const b = await A.json();
      s(b);
    } catch (A) {
      v(A.message);
    } finally {
      f(!1);
    }
  };
  return o
    ? O.jsx("p", { className: "text-center mt-10 text-gray-700", children: "Loading books..." })
    : d
      ? O.jsxs("p", { className: "text-center mt-10 text-red-500", children: ["Error: ", d] })
      : O.jsx(Yf, { books: c });
}
function ah() {
  const c = document.cookie.split("; ").find((s) => s.startsWith("csrftoken="));
  return c ? c.split("=")[1] : "";
}
function hv() {
  const [c, s] = R.useState(""),
    [o, f] = R.useState(null),
    [d, v] = R.useState(!1),
    [x, A] = R.useState(null),
    b = async () => {
      v(!0), A(null), f(null);
      try {
        const m = await fetch("/api/fetch-book/", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json", "X-CSRFToken": ah() },
            body: JSON.stringify({ book_id: c }),
          }),
          M = await m.json();
        if (!m.ok) throw new Error(M.error || "Failed to fetch book");
        f(M.book);
      } catch (m) {
        A(m.message);
      } finally {
        v(!1);
      }
    };
  return O.jsxs("div", {
    className: "max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg",
    children: [
      O.jsx("h2", { className: "text-2xl font-bold text-center mb-4", children: "Fetch a Book" }),
      O.jsxs("div", {
        className: "flex items-center space-x-2",
        children: [
          O.jsx("input", {
            type: "text",
            className:
              "border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full",
            placeholder: "Enter Book ID...",
            value: c,
            onChange: (m) => s(m.target.value),
          }),
          O.jsx("button", {
            onClick: b,
            className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
            children: "Search",
          }),
        ],
      }),
      d &&
        O.jsx("p", { className: "text-center mt-4 text-gray-700", children: "Fetching book..." }),
      x && O.jsx("p", { className: "text-center mt-4 text-red-500", children: x }),
      o &&
        O.jsxs("div", {
          className: "max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg",
          children: [
            O.jsx("h2", {
              className: "text-2xl font-bold text-center mb-6",
              children: "Book Details",
            }),
            O.jsx("div", {
              className: "overflow-x-auto",
              children: O.jsx("table", {
                className: "min-w-full border-collapse border border-gray-300",
                children: O.jsxs("tbody", {
                  children: [
                    O.jsxs("tr", {
                      className: "bg-gray-200",
                      children: [
                        O.jsx("td", {
                          className: "p-3 border border-gray-300 font-bold",
                          children: "Title",
                        }),
                        O.jsx("td", { className: "p-3 border border-gray-300", children: o.title }),
                      ],
                    }),
                    O.jsxs("tr", {
                      className: "bg-gray-50",
                      children: [
                        O.jsx("td", {
                          className: "p-3 border border-gray-300 font-bold",
                          children: "Author",
                        }),
                        O.jsx("td", {
                          className: "p-3 border border-gray-300",
                          children: o.author || "Unknown",
                        }),
                      ],
                    }),
                    O.jsxs("tr", {
                      className: "bg-gray-200",
                      children: [
                        O.jsx("td", {
                          className: "p-3 border border-gray-300 font-bold",
                          children: "Language",
                        }),
                        O.jsx("td", {
                          className: "p-3 border border-gray-300",
                          children: o.language || "N/A",
                        }),
                      ],
                    }),
                    O.jsxs("tr", {
                      className: "bg-gray-50",
                      children: [
                        O.jsx("td", {
                          className: "p-3 border border-gray-300 font-bold",
                          children: "Category",
                        }),
                        O.jsx("td", {
                          className: "p-3 border border-gray-300",
                          children: o.category || "N/A",
                        }),
                      ],
                    }),
                    O.jsxs("tr", {
                      className: "bg-gray-200",
                      children: [
                        O.jsx("td", {
                          className: "p-3 border border-gray-300 font-bold",
                          children: "Summary",
                        }),
                        O.jsx("td", {
                          className: "p-3 border border-gray-300",
                          children: o.summary || "No summary available",
                        }),
                      ],
                    }),
                    O.jsxs("tr", {
                      className: "bg-gray-50",
                      children: [
                        O.jsx("td", {
                          className: "p-3 border border-gray-300 font-bold",
                          children: "Created At",
                        }),
                        O.jsx("td", {
                          className: "p-3 border border-gray-300",
                          children: new Date(o.created_at).toLocaleDateString(),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
    ],
  });
}
function mv() {
  const { bookId: c } = Wd(),
    [s, o] = R.useState(null),
    [f, d] = R.useState(!0),
    [v, x] = R.useState(null),
    A = R.useCallback(async () => {
      d(!0), x(null);
      try {
        const b = await fetch(`/api/books/${c}/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!b.ok) throw new Error("Failed to fetch book");
        const m = await b.json();
        o(m);
      } catch (b) {
        x(b.message);
      } finally {
        d(!1);
      }
    }, [c]);
  return (
    R.useEffect(() => {
      A();
    }, [A]),
    f
      ? O.jsx("p", { className: "text-center mt-10 text-gray-700", children: "Loading book..." })
      : v
        ? O.jsxs("p", { className: "text-center mt-10 text-red-500", children: ["Error: ", v] })
        : O.jsxs("div", {
            className: "max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg",
            children: [
              O.jsx("h2", { className: "text-2xl font-bold text-center mb-4", children: s.title }),
              s.author &&
                O.jsxs("p", {
                  className: "text-center text-gray-700 mb-4",
                  children: ["By ", s.author],
                }),
              O.jsx("div", {
                className:
                  "h-[500px] overflow-y-auto p-4 border border-gray-300 bg-gray-100 rounded-lg",
                children: O.jsx("pre", {
                  className: "whitespace-pre-wrap text-gray-800 text-lg leading-relaxed",
                  children: s.text,
                }),
              }),
            ],
          })
  );
}
function yv() {
  var B;
  const { bookId: c } = Wd(),
    [s, o] = R.useState(null),
    [f, d] = R.useState(!0),
    [v, x] = R.useState(null),
    [A, b] = R.useState(!1),
    m = R.useCallback(async () => {
      d(!0), x(null);
      try {
        const D = await fetch(`/api/books/${c}/analysis/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (D.status === 404) {
          o(null), d(!1);
          return;
        }
        if (!D.ok) throw new Error("Failed to fetch analysis data");
        const C = await D.json();
        o(C);
      } catch (D) {
        x(D.message);
      } finally {
        d(!1);
      }
    }, [c]);
  R.useEffect(() => {
    m();
  }, [m]);
  const M = async () => {
    b(!0), x(null);
    try {
      const D = await fetch(`/api/books/${c}/analysis/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-CSRFToken": ah() },
        credentials: "include",
      });
      if (D.status === 400) {
        const C = await D.json();
        throw new Error(C.error);
      }
      if (!D.ok) throw new Error("Failed to start analysis");
      await m();
    } catch (D) {
      x(D.message);
    } finally {
      b(!1);
    }
  };
  return f
    ? O.jsx("p", {
        className: "text-center mt-10 text-gray-700",
        children: "Loading book analysis...",
      })
    : v
      ? O.jsxs("p", { className: "text-center mt-10 text-red-500", children: ["Error: ", v] })
      : O.jsxs("div", {
          className: "max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg",
          children: [
            O.jsx("h2", {
              className: "text-2xl font-bold text-center mb-6",
              children: (B = s == null ? void 0 : s.book) == null ? void 0 : B.title,
            }),
            O.jsx("div", {
              className: "p-4 border border-gray-300 rounded-lg bg-gray-100 mb-6",
              children: s
                ? O.jsxs("p", {
                    className: "text-center text-green-600 font-bold",
                    children: ["Analysis completed for ", s.percent_complete, "% of the book."],
                  })
                : O.jsxs("div", {
                    className: "text-center",
                    children: [
                      O.jsx("p", {
                        className: "text-gray-700 mb-3",
                        children: "This book has not been analyzed yet.",
                      }),
                      O.jsx("button", {
                        onClick: M,
                        className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
                        disabled: A,
                        children: A ? "Starting Analysis..." : "Start Analysis",
                      }),
                    ],
                  }),
            }),
            s && s.characters && Object.keys(s.characters).length > 0
              ? O.jsxs("div", {
                  children: [
                    O.jsx("h3", {
                      className: "text-xl font-bold mb-4",
                      children: "Character Analysis",
                    }),
                    O.jsx("ul", {
                      className: "space-y-4",
                      children: Object.entries(s.characters).map(([D, C]) =>
                        O.jsxs(
                          "li",
                          {
                            className: "p-4 border border-gray-300 rounded-lg",
                            children: [
                              O.jsx("h4", {
                                className: "text-lg font-semibold text-blue-600",
                                children: D,
                              }),
                              C.arc &&
                                O.jsxs("div", {
                                  className: "mt-2",
                                  children: [
                                    O.jsx("h5", {
                                      className: "text-md font-semibold text-red-600",
                                      children: "Arc:",
                                    }),
                                    O.jsx("p", { className: "text-gray-700", children: C.arc }),
                                  ],
                                }),
                              C.personality &&
                                O.jsxs("div", {
                                  className: "mt-2",
                                  children: [
                                    O.jsx("h5", {
                                      className: "text-md font-semibold text-red-600",
                                      children: "Personality:",
                                    }),
                                    O.jsx("p", {
                                      className: "text-gray-700",
                                      children: C.personality,
                                    }),
                                  ],
                                }),
                              C.strengths &&
                                C.strengths.length > 0 &&
                                O.jsxs("div", {
                                  className: "mt-2",
                                  children: [
                                    O.jsx("h5", {
                                      className: "text-md font-semibold text-green-600",
                                      children: "Strengths:",
                                    }),
                                    O.jsx("ul", {
                                      className: "list-disc ml-6 text-gray-700",
                                      children: C.strengths.map((j, Z) =>
                                        O.jsx("li", { children: j }, Z)
                                      ),
                                    }),
                                  ],
                                }),
                              C.weaknesses &&
                                C.weaknesses.length > 0 &&
                                O.jsxs("div", {
                                  className: "mt-2",
                                  children: [
                                    O.jsx("h5", {
                                      className: "text-md font-semibold text-red-600",
                                      children: "Weaknesses:",
                                    }),
                                    O.jsx("ul", {
                                      className: "list-disc ml-6 text-gray-700",
                                      children: C.weaknesses.map((j, Z) =>
                                        O.jsx("li", { children: j }, Z)
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          },
                          D
                        )
                      ),
                    }),
                  ],
                })
              : O.jsx("p", {
                  className: "text-center text-gray-600",
                  children: "No character analysis available yet.",
                }),
          ],
        });
}
function vv() {
  return O.jsxs("div", {
    className: "flex bg-gray-100",
    children: [
      O.jsx("aside", {
        className: "bg-gray-800 text-white w-64 p-4 fixed h-full",
        children: O.jsxs("ul", {
          children: [
            O.jsx("li", {
              className: "py-2 p-2 rounded",
              children: O.jsx(ui, {
                to: "/",
                className: ({ isActive: c }) =>
                  c
                    ? "bg-gray-700 block px-4 py-2 rounded text-yellow-400"
                    : "hover:bg-gray-700 block px-4 py-2 rounded",
                children: "Search",
              }),
            }),
            O.jsx("li", {
              className: "py-2 p-2 rounded",
              children: O.jsx(ui, {
                to: "/my-books",
                className: ({ isActive: c }) =>
                  c
                    ? "bg-gray-700 block px-4 py-2 rounded text-yellow-400"
                    : "hover:bg-gray-700 block px-4 py-2 rounded",
                children: "My Books",
              }),
            }),
            O.jsx("li", {
              className: "py-2 p-2 rounded",
              children: O.jsx(ui, {
                to: "/books",
                className: ({ isActive: c }) =>
                  c
                    ? "bg-gray-700 block px-4 py-2 rounded text-yellow-400"
                    : "hover:bg-gray-700 block px-4 py-2 rounded",
                children: "All Books",
              }),
            }),
          ],
        }),
      }),
      O.jsxs("div", {
        className: "flex flex-col flex-1 ml-64",
        children: [
          O.jsxs("header", {
            className: "bg-white shadow-md p-4 flex justify-between items-center",
            children: [
              O.jsx("h1", { className: "text-lg font-bold", children: "SmartBook" }),
              O.jsx(iv, {}),
            ],
          }),
          O.jsx("main", {
            className: "flex-1 p-6 bg-white rounded-lg shadow-md m-4",
            children: O.jsxs(zy, {
              children: [
                O.jsx(Ua, { path: "/", element: O.jsx(hv, {}) }),
                O.jsx(Ua, { path: "/my-books", element: O.jsx(dv, {}) }),
                O.jsx(Ua, { path: "/books", element: O.jsx(ov, {}) }),
                O.jsx(Ua, { path: "/books/:bookId/read", element: O.jsx(mv, {}) }),
                O.jsx(Ua, { path: "/books/:bookId/analysis", element: O.jsx(yv, {}) }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
B0.createRoot(document.getElementById("root")).render(
  O.jsx(R.StrictMode, { children: O.jsx(Fy, { children: O.jsx(vv, {}) }) })
);
