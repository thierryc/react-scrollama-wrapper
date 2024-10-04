'use strict';

var React = require('react');
var scrollama = require('scrollama');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var ScrollamaContext = /*#__PURE__*/React.createContext(null);
var useScrollamaContext = function useScrollamaContext() {
  var context = React.useContext(ScrollamaContext);
  if (context === undefined) {
    throw new Error("useScrollamaContext must be used within a ScrollamaProvider");
  }
  return context;
};

var _excluded$1 = ["children", "offset", "progress", "debug", "onStepEnter", "onStepExit", "onStepProgress", "threshold", "once", "parent"];
var Scrollama = function Scrollama(_ref) {
  var children = _ref.children,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 0.5 : _ref$offset,
    _ref$progress = _ref.progress,
    progress = _ref$progress === void 0 ? false : _ref$progress,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug,
    _ref$onStepEnter = _ref.onStepEnter,
    onStepEnter = _ref$onStepEnter === void 0 ? function () {} : _ref$onStepEnter,
    _ref$onStepExit = _ref.onStepExit,
    onStepExit = _ref$onStepExit === void 0 ? function () {} : _ref$onStepExit,
    _ref$onStepProgress = _ref.onStepProgress,
    onStepProgress = _ref$onStepProgress === void 0 ? function () {} : _ref$onStepProgress,
    _ref$threshold = _ref.threshold,
    threshold = _ref$threshold === void 0 ? 4 : _ref$threshold,
    _ref$once = _ref.once,
    once = _ref$once === void 0 ? false : _ref$once,
    _ref$parent = _ref.parent,
    parent = _ref$parent === void 0 ? undefined : _ref$parent,
    primitiveProps = _objectWithoutProperties(_ref, _excluded$1);
  var _useState = React.useState(function () {
      return scrollama();
    }),
    _useState2 = _slicedToArray(_useState, 1),
    scroller = _useState2[0];
  var stepsRef = React.useRef([]);
  var reset = React.useCallback(function () {
    window.removeEventListener("resize", scroller.resize);
    scroller.destroy();
    initialize();
    window.addEventListener("resize", scroller.resize);
  }, [scroller]);
  var setupRef = React.useCallback(function (ref) {
    if (ref && ref.current) {
      stepsRef.current.push(ref.current);
      reset();
      return function () {
        stepsRef.current = stepsRef.current.filter(function (step) {
          return step !== ref.current;
        });
        reset();
      };
    }
  }, [reset]);
  var initialize = React.useCallback(function () {
    if (stepsRef.current.length <= 0) {
      return;
    }
    scroller.setup({
      step: stepsRef.current,
      offset: offset,
      progress: progress ? true : false,
      debug: debug ? true : false,
      threshold: threshold,
      once: once,
      parent: parent
    }).onStepEnter(onStepEnter).onStepExit(onStepExit).onStepProgress(onStepProgress);
  }, [scroller, offset, progress, debug, threshold, once, parent, onStepEnter, onStepExit, onStepProgress]);
  React.useEffect(function () {
    initialize();
    window.addEventListener("resize", scroller.resize);
    return function () {
      scroller.destroy();
      window.removeEventListener("resize", scroller.resize);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", primitiveProps, /*#__PURE__*/React.createElement(ScrollamaContext.Provider, {
    value: setupRef
  }, children));
};

var _excluded = ["children"];
var Step = function Step(_ref) {
  var children = _ref.children,
    primitiveProps = _objectWithoutProperties(_ref, _excluded);
  var stepRef = React.useRef(null);
  var context = React.useContext(ScrollamaContext);
  React.useEffect(function () {
    var remove = context(stepRef);
    return function () {
      remove();
    };
  }, [context]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: stepRef
  }, primitiveProps), children);
};

exports.Scrollama = Scrollama;
exports.ScrollamaContext = ScrollamaContext;
exports.Step = Step;
exports.useScrollamaContext = useScrollamaContext;
//# sourceMappingURL=index.js.map
