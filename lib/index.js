'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var scrollama = require('scrollama');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var scrollama__default = /*#__PURE__*/_interopDefaultLegacy(scrollama);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var ScrollamaContext = /*#__PURE__*/React.createContext(function () {});
var useScrollamaContext = function useScrollamaContext() {
  return React.useContext(ScrollamaContext);
};

var _excluded$1 = ["children", "offset", "progress", "threshold", "onStepProgress", "onStepEnter", "onStepExit", "debug"];
var Scrollama = /*#__PURE__*/function (_React$Component) {
  _inherits(Scrollama, _React$Component);
  var _super = _createSuper(Scrollama);
  function Scrollama(props) {
    var _this;
    _classCallCheck(this, Scrollama);
    _this = _super.call(this, props);
    _this.scroller = scrollama__default["default"]();
    _this.steps = [];
    return _this;
  }
  _createClass(Scrollama, [{
    key: "setupRef",
    value: function setupRef(ref) {
      var _this2 = this;
      this.steps.push(ref.current);
      return function () {
        _this2.steps.splice(_this2.steps.indexOf(ref.current), 1);
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
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
      return /*#__PURE__*/React__default["default"].createElement("div", primitiveProps, /*#__PURE__*/React__default["default"].createElement(ScrollamaContext.Provider, {
        value: function value(ref) {
          return _this3.setupRef(ref);
        }
      }, children));
    }
  }]);
  return Scrollama;
}(React__default["default"].Component);
_defineProperty(Scrollama, "contextType", ScrollamaContext);

var _excluded = ["children"];
var Step = /*#__PURE__*/function (_React$Component) {
  _inherits(Step, _React$Component);
  var _super = _createSuper(Step);
  function Step(props) {
    var _this;
    _classCallCheck(this, Step);
    _this = _super.call(this, props);
    _this.stepRef = /*#__PURE__*/React__default["default"].createRef();
    _this.remove = null;
    return _this;
  }
  _createClass(Step, [{
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
      return /*#__PURE__*/React__default["default"].createElement("div", _extends({
        ref: this.stepRef
      }, primitiveProps), children);
    }
  }]);
  return Step;
}(React__default["default"].Component);
_defineProperty(Step, "contextType", ScrollamaContext);

exports.Scrollama = Scrollama;
exports.ScrollamaContext = ScrollamaContext;
exports.Step = Step;
exports.useScrollamaContext = useScrollamaContext;
//# sourceMappingURL=index.js.map
