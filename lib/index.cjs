'use strict';

var React = require('react');
var scrollama = require('scrollama');

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

/**
 * @typedef {(ref: import("react").RefObject<HTMLElement | null>) => void | (() => void)} RegisterStep
 */

var ScrollamaContext = /*#__PURE__*/React.createContext(/** @type {RegisterStep | undefined} */undefined);

/**
 * @returns {RegisterStep}
 */
var useScrollamaContext = function useScrollamaContext() {
  var context = React.useContext(ScrollamaContext);
  if (typeof context !== "function") {
    throw new Error("useScrollamaContext must be used within a ScrollamaProvider");
  }
  return context;
};

var _excluded$1 = ["children", "offset", "progress", "debug", "onStepEnter", "onStepExit", "onStepProgress", "threshold", "once", "parent"];

/**
 * @typedef {object} ScrollamaInstance
 * @property {(options: object) => ScrollamaInstance} setup
 * @property {(callback: Function) => ScrollamaInstance} onStepEnter
 * @property {(callback: Function) => ScrollamaInstance} onStepExit
 * @property {(callback: Function) => ScrollamaInstance} onStepProgress
 * @property {() => ScrollamaInstance} resize
 * @property {() => ScrollamaInstance} destroy
 */

var createScrollama = /** @type {() => ScrollamaInstance} */
/** @type {unknown} */scrollama;

/**
 * @typedef {object} StepCallbackResponse
 * @property {HTMLElement} element
 * @property {number} index
 * @property {"up" | "down"} direction
 */

/**
 * @typedef {object} StepProgressCallbackResponse
 * @property {HTMLElement} element
 * @property {number} index
 * @property {number} progress
 * @property {"up" | "down"} [direction]
 */

/**
 * @typedef {import("react").HTMLAttributes<HTMLDivElement> & {
 *   children?: import("react").ReactNode,
 *   offset?: number | `${number}px`,
 *   progress?: boolean,
 *   debug?: boolean,
 *   onStepEnter?: (response: StepCallbackResponse) => void,
 *   onStepExit?: (response: StepCallbackResponse) => void,
 *   onStepProgress?: (response: StepProgressCallbackResponse) => void,
 *   threshold?: number,
 *   once?: boolean,
 *   parent?: HTMLElement | Document
 * }} ScrollamaProps
 */

/**
 * @param {ScrollamaProps} props
 */
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
  var scrollerRef = React.useRef(null);
  var stepsRef = React.useRef([]);
  var hasSetupRef = React.useRef(false);
  var getScroller = React.useCallback(function () {
    if (!scrollerRef.current) {
      scrollerRef.current = createScrollama();
    }
    return scrollerRef.current;
  }, []);
  var initialize = React.useCallback(function () {
    if (typeof window === "undefined") {
      return;
    }
    var scroller = getScroller();
    if (hasSetupRef.current) {
      scroller.destroy();
      hasSetupRef.current = false;
    }
    if (stepsRef.current.length === 0) {
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
    hasSetupRef.current = true;
  }, [getScroller, offset, progress, debug, threshold, once, parent, onStepEnter, onStepExit, onStepProgress]);
  var setupRef = React.useCallback(
  /**
   * @param {import("react").RefObject<HTMLElement | null>} ref
   */
  function (ref) {
    if (!ref || !ref.current) {
      return undefined;
    }
    var element = ref.current;
    if (!stepsRef.current.includes(element)) {
      stepsRef.current.push(element);
    }
    initialize();
    return function () {
      stepsRef.current = stepsRef.current.filter(function (step) {
        return step !== element;
      });
      initialize();
    };
  }, [initialize]);
  React.useEffect(function () {
    initialize();
  }, [initialize]);
  React.useEffect(function () {
    if (typeof window === "undefined") {
      return undefined;
    }
    var scroller = getScroller();
    window.addEventListener("resize", scroller.resize);
    return function () {
      window.removeEventListener("resize", scroller.resize);
      scroller.destroy();
      scrollerRef.current = null;
      hasSetupRef.current = false;
    };
  }, [getScroller]);
  return /*#__PURE__*/React.createElement("div", primitiveProps, /*#__PURE__*/React.createElement(ScrollamaContext.Provider, {
    value: setupRef
  }, children));
};

var _excluded = ["children"];

/**
 * @typedef {import("react").HTMLAttributes<HTMLDivElement> & {
 *   children?: import("react").ReactNode
 * }} StepProps
 */

/**
 * @param {StepProps} props
 */
var Step = function Step(_ref) {
  var children = _ref.children,
    primitiveProps = _objectWithoutProperties(_ref, _excluded);
  /** @type {import("react").RefObject<HTMLDivElement | null>} */
  var stepRef = React.useRef(null);
  var registerStep = useScrollamaContext();
  React.useEffect(function () {
    var remove = registerStep(stepRef);
    return function () {
      if (typeof remove === "function") {
        remove();
      }
    };
  }, [registerStep]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: stepRef
  }, primitiveProps), children);
};

exports.Scrollama = Scrollama;
exports.ScrollamaContext = ScrollamaContext;
exports.Step = Step;
exports.useScrollamaContext = useScrollamaContext;
//# sourceMappingURL=index.cjs.map
