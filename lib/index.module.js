import React, { createContext, useContext } from 'react';
import scrollama from 'scrollama';

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
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
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
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
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var ScrollamaContext = /*#__PURE__*/createContext();
var useScrollamaContext = function useScrollamaContext() {
  return useContext(ScrollamaContext);
};

var _excluded$1 = ["children", "offset", "progress", "threshold", "onStepProgress", "onStepEnter", "onStepExit", "debug"];
var Scrollama = /*#__PURE__*/function (_React$Component) {
  function Scrollama(props) {
    var _this;
    _classCallCheck(this, Scrollama);
    _this = _callSuper(this, Scrollama, [props]);
    _this.scroller = scrollama();
    _this.steps = [];
    return _this;
  }
  _inherits(Scrollama, _React$Component);
  return _createClass(Scrollama, [{
    key: "reset",
    value: function reset() {
      window.removeEventListener("resize", this.scroller.resize);
      this.scroller.destroy();
      this.initialize();
      window.addEventListener("resize", this.scroller.resize);
    }
  }, {
    key: "setupRef",
    value: function setupRef(ref) {
      var _this2 = this;
      this.steps.push(ref.current);
      this.reset();
      return function () {
        _this2.steps.splice(_this2.steps.indexOf(ref.current), 1);
        _this2.reset();
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this$props = this.props,
        _this$props$offset = _this$props.offset,
        offset = _this$props$offset === void 0 ? 0.5 : _this$props$offset,
        _this$props$progress = _this$props.progress,
        progress = _this$props$progress === void 0 ? false : _this$props$progress,
        _this$props$debug = _this$props.debug,
        debug = _this$props$debug === void 0 ? false : _this$props$debug,
        _this$props$onStepEnt = _this$props.onStepEnter,
        onStepEnter = _this$props$onStepEnt === void 0 ? function () {} : _this$props$onStepEnt,
        _this$props$onStepExi = _this$props.onStepExit,
        onStepExit = _this$props$onStepExi === void 0 ? function () {} : _this$props$onStepExi,
        _this$props$onStepPro = _this$props.onStepProgress,
        onStepProgress = _this$props$onStepPro === void 0 ? function () {} : _this$props$onStepPro,
        _this$props$threshold = _this$props.threshold,
        threshold = _this$props$threshold === void 0 ? 4 : _this$props$threshold,
        _this$props$once = _this$props.once,
        once = _this$props$once === void 0 ? false : _this$props$once,
        _this$props$parent = _this$props.parent,
        parent = _this$props$parent === void 0 ? undefined : _this$props$parent;
      this.scroller.setup({
        step: this.steps,
        offset: offset,
        progress: progress ? true : false,
        debug: debug ? true : false,
        threshold: threshold,
        // the percentage of the viewport that must be visible
        once: once,
        parent: parent
      }).onStepEnter(function (response) {
        onStepEnter(response);
      }).onStepExit(function (response) {
        onStepExit(response);
      }).onStepProgress(function (response) {
        onStepProgress(response);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize();
      window.addEventListener("resize", this.scroller.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.scroller.destroy();
      window.removeEventListener("resize", this.scroller.resize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props2 = this.props,
        children = _this$props2.children;
        _this$props2.offset;
        _this$props2.progress;
        _this$props2.threshold;
        _this$props2.onStepProgress;
        _this$props2.onStepEnter;
        _this$props2.onStepExit;
        _this$props2.debug;
        var primitiveProps = _objectWithoutProperties(_this$props2, _excluded$1);
      return /*#__PURE__*/React.createElement("div", primitiveProps, /*#__PURE__*/React.createElement(ScrollamaContext.Provider, {
        value: function value(ref) {
          return _this3.setupRef(ref);
        }
      }, children));
    }
  }]);
}(React.Component);
_defineProperty(Scrollama, "contextType", ScrollamaContext);

var _excluded = ["children"];
var Step = /*#__PURE__*/function (_React$Component) {
  function Step(props) {
    var _this;
    _classCallCheck(this, Step);
    _this = _callSuper(this, Step, [props]);
    _this.stepRef = /*#__PURE__*/React.createRef();
    _this.remove = null;
    return _this;
  }
  _inherits(Step, _React$Component);
  return _createClass(Step, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.remove = this.context(this.stepRef);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.remove();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        primitiveProps = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/React.createElement("div", _extends({
        ref: this.stepRef
      }, primitiveProps), children);
    }
  }]);
}(React.Component);
_defineProperty(Step, "contextType", ScrollamaContext);

export { Scrollama, ScrollamaContext, Step, useScrollamaContext };
//# sourceMappingURL=index.module.js.map
