import { C as Collapse, _ as __unplugin_components_9 } from "./CollapsePanel-16b55852.mjs";
import { g as createVNode, bd as AntdIcon, d as defineComponent, r as ref, a_ as onBeforeUnmount, aD as classNames, aJ as _defineProperty$1, aK as _objectSpread2, dg as warning, aY as wrapperRaf, aC as _extends, aN as _typeof, e as computed, b0 as _slicedToArray, w as watch, aX as KeyCode, aH as PropTypes, be as useInjectFormItemContext, aE as useConfigInject, aG as cloneElement } from "./entry-3fb260b7.mjs";
import { D as DownOutlined } from "./index-0190fa17.mjs";
import { _ as _createClass, a as _classCallCheck } from "./index-fbd19973.mjs";
import { i as isMobile } from "./useState-8faa8040.mjs";
import { o as omit } from "./omit-e185a391.mjs";
Collapse.Panel = __unplugin_components_9;
Collapse.install = function(app) {
  app.component(Collapse.name, Collapse);
  app.component(__unplugin_components_9.name, __unplugin_components_9);
  return app;
};
var UpOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, "name": "up", "theme": "outlined" };
var UpOutlinedSvg = UpOutlined$2;
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var UpOutlined = function UpOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": UpOutlinedSvg
  }), null);
};
UpOutlined.displayName = "UpOutlined";
UpOutlined.inheritAttrs = false;
var UpOutlined$1 = UpOutlined;
function supportBigInt() {
  return typeof BigInt === "function";
}
function trimNumber(numStr) {
  var str = numStr.trim();
  var negative = str.startsWith("-");
  if (negative) {
    str = str.slice(1);
  }
  str = str.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, "");
  if (str.startsWith(".")) {
    str = "0".concat(str);
  }
  var trimStr = str || "0";
  var splitNumber = trimStr.split(".");
  var integerStr = splitNumber[0] || "0";
  var decimalStr = splitNumber[1] || "0";
  if (integerStr === "0" && decimalStr === "0") {
    negative = false;
  }
  var negativeStr = negative ? "-" : "";
  return {
    negative,
    negativeStr,
    trimStr,
    integerStr,
    decimalStr,
    fullStr: "".concat(negativeStr).concat(trimStr)
  };
}
function isE(number) {
  var str = String(number);
  return !Number.isNaN(Number(str)) && str.includes("e");
}
function getNumberPrecision(number) {
  var numStr = String(number);
  if (isE(number)) {
    var precision = Number(numStr.slice(numStr.indexOf("e-") + 2));
    var decimalMatch = numStr.match(/\.(\d+)/);
    if (decimalMatch === null || decimalMatch === void 0 ? void 0 : decimalMatch[1]) {
      precision += decimalMatch[1].length;
    }
    return precision;
  }
  return numStr.includes(".") && validateNumber(numStr) ? numStr.length - numStr.indexOf(".") - 1 : 0;
}
function num2str(number) {
  var numStr = String(number);
  if (isE(number)) {
    if (number > Number.MAX_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MAX_SAFE_INTEGER);
    }
    if (number < Number.MIN_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MIN_SAFE_INTEGER);
    }
    numStr = number.toFixed(getNumberPrecision(numStr));
  }
  return trimNumber(numStr).fullStr;
}
function validateNumber(num) {
  if (typeof num === "number") {
    return !Number.isNaN(num);
  }
  if (!num) {
    return false;
  }
  return /^\s*-?\d+(\.\d+)?\s*$/.test(num) || /^\s*-?\d+\.\s*$/.test(num) || /^\s*-?\.\d+\s*$/.test(num);
}
var NumberDecimal = /* @__PURE__ */ function() {
  function NumberDecimal2(value) {
    _classCallCheck(this, NumberDecimal2);
    this.origin = "";
    if (!value && value !== 0 || !String(value).trim()) {
      this.empty = true;
      return;
    }
    this.origin = String(value);
    this.number = Number(value);
  }
  _createClass(NumberDecimal2, [{
    key: "negate",
    value: function negate() {
      return new NumberDecimal2(-this.toNumber());
    }
  }, {
    key: "add",
    value: function add(value) {
      if (this.isInvalidate()) {
        return new NumberDecimal2(value);
      }
      var target = Number(value);
      if (Number.isNaN(target)) {
        return this;
      }
      var number = this.number + target;
      if (number > Number.MAX_SAFE_INTEGER) {
        return new NumberDecimal2(Number.MAX_SAFE_INTEGER);
      }
      if (number < Number.MIN_SAFE_INTEGER) {
        return new NumberDecimal2(Number.MIN_SAFE_INTEGER);
      }
      var maxPrecision = Math.max(getNumberPrecision(this.number), getNumberPrecision(target));
      return new NumberDecimal2(number.toFixed(maxPrecision));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return Number.isNaN(this.number);
    }
  }, {
    key: "isInvalidate",
    value: function isInvalidate() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function equals(target) {
      return this.toNumber() === (target === null || target === void 0 ? void 0 : target.toNumber());
    }
  }, {
    key: "lessEquals",
    value: function lessEquals(target) {
      return this.add(target.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      return this.number;
    }
  }, {
    key: "toString",
    value: function toString() {
      var safe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (!safe) {
        return this.origin;
      }
      if (this.isInvalidate()) {
        return "";
      }
      return num2str(this.number);
    }
  }]);
  return NumberDecimal2;
}();
var BigIntDecimal = /* @__PURE__ */ function() {
  function BigIntDecimal2(value) {
    _classCallCheck(this, BigIntDecimal2);
    this.origin = "";
    if (!value && value !== 0 || !String(value).trim()) {
      this.empty = true;
      return;
    }
    this.origin = String(value);
    if (value === "-") {
      this.nan = true;
      return;
    }
    var mergedValue = value;
    if (isE(mergedValue)) {
      mergedValue = Number(mergedValue);
    }
    mergedValue = typeof mergedValue === "string" ? mergedValue : num2str(mergedValue);
    if (validateNumber(mergedValue)) {
      var trimRet = trimNumber(mergedValue);
      this.negative = trimRet.negative;
      var numbers = trimRet.trimStr.split(".");
      this.integer = BigInt(numbers[0]);
      var decimalStr = numbers[1] || "0";
      this.decimal = BigInt(decimalStr);
      this.decimalLen = decimalStr.length;
    } else {
      this.nan = true;
    }
  }
  _createClass(BigIntDecimal2, [{
    key: "getMark",
    value: function getMark() {
      return this.negative ? "-" : "";
    }
  }, {
    key: "getIntegerStr",
    value: function getIntegerStr() {
      return this.integer.toString();
    }
  }, {
    key: "getDecimalStr",
    value: function getDecimalStr() {
      return this.decimal.toString().padStart(this.decimalLen, "0");
    }
  }, {
    key: "alignDecimal",
    value: function alignDecimal(decimalLength) {
      var str = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(decimalLength, "0"));
      return BigInt(str);
    }
  }, {
    key: "negate",
    value: function negate() {
      var clone = new BigIntDecimal2(this.toString());
      clone.negative = !clone.negative;
      return clone;
    }
  }, {
    key: "add",
    value: function add(value) {
      if (this.isInvalidate()) {
        return new BigIntDecimal2(value);
      }
      var offset = new BigIntDecimal2(value);
      if (offset.isInvalidate()) {
        return this;
      }
      var maxDecimalLength = Math.max(this.getDecimalStr().length, offset.getDecimalStr().length);
      var myAlignedDecimal = this.alignDecimal(maxDecimalLength);
      var offsetAlignedDecimal = offset.alignDecimal(maxDecimalLength);
      var valueStr = (myAlignedDecimal + offsetAlignedDecimal).toString();
      var _trimNumber = trimNumber(valueStr), negativeStr = _trimNumber.negativeStr, trimStr = _trimNumber.trimStr;
      var hydrateValueStr = "".concat(negativeStr).concat(trimStr.padStart(maxDecimalLength + 1, "0"));
      return new BigIntDecimal2("".concat(hydrateValueStr.slice(0, -maxDecimalLength), ".").concat(hydrateValueStr.slice(-maxDecimalLength)));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return this.nan;
    }
  }, {
    key: "isInvalidate",
    value: function isInvalidate() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function equals(target) {
      return this.toString() === (target === null || target === void 0 ? void 0 : target.toString());
    }
  }, {
    key: "lessEquals",
    value: function lessEquals(target) {
      return this.add(target.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      if (this.isNaN()) {
        return NaN;
      }
      return Number(this.toString());
    }
  }, {
    key: "toString",
    value: function toString() {
      var safe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (!safe) {
        return this.origin;
      }
      if (this.isInvalidate()) {
        return "";
      }
      return trimNumber("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr;
    }
  }]);
  return BigIntDecimal2;
}();
function getMiniDecimal(value) {
  if (supportBigInt()) {
    return new BigIntDecimal(value);
  }
  return new NumberDecimal(value);
}
function toFixed(numStr, separatorStr, precision) {
  if (numStr === "") {
    return "";
  }
  var _trimNumber4 = trimNumber(numStr), negativeStr = _trimNumber4.negativeStr, integerStr = _trimNumber4.integerStr, decimalStr = _trimNumber4.decimalStr;
  var precisionDecimalStr = "".concat(separatorStr).concat(decimalStr);
  var numberWithoutDecimal = "".concat(negativeStr).concat(integerStr);
  if (precision >= 0) {
    var advancedNum = Number(decimalStr[precision]);
    if (advancedNum >= 5) {
      var advancedDecimal = getMiniDecimal(numStr).add("".concat(negativeStr, "0.").concat("0".repeat(precision)).concat(10 - advancedNum));
      return toFixed(advancedDecimal.toString(), separatorStr, precision);
    }
    if (precision === 0) {
      return numberWithoutDecimal;
    }
    return "".concat(numberWithoutDecimal).concat(separatorStr).concat(decimalStr.padEnd(precision, "0").slice(0, precision));
  }
  if (precisionDecimalStr === ".0") {
    return numberWithoutDecimal;
  }
  return "".concat(numberWithoutDecimal).concat(precisionDecimalStr);
}
var STEP_INTERVAL = 200;
var STEP_DELAY = 600;
var StepHandler = defineComponent({
  name: "StepHandler",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    upDisabled: Boolean,
    downDisabled: Boolean,
    onStep: {
      type: Function
    }
  },
  slots: ["upNode", "downNode"],
  setup: function setup(props, _ref) {
    var slots = _ref.slots, emit = _ref.emit;
    var stepTimeoutRef = ref();
    var onStepMouseDown = function onStepMouseDown2(e, up) {
      e.preventDefault();
      emit("step", up);
      function loopStep() {
        emit("step", up);
        stepTimeoutRef.value = setTimeout(loopStep, STEP_INTERVAL);
      }
      stepTimeoutRef.value = setTimeout(loopStep, STEP_DELAY);
    };
    var onStopStep = function onStopStep2() {
      clearTimeout(stepTimeoutRef.value);
    };
    onBeforeUnmount(function() {
      onStopStep();
    });
    return function() {
      if (isMobile()) {
        return null;
      }
      var prefixCls = props.prefixCls, upDisabled = props.upDisabled, downDisabled = props.downDisabled;
      var handlerClassName = "".concat(prefixCls, "-handler");
      var upClassName = classNames(handlerClassName, "".concat(handlerClassName, "-up"), _defineProperty$1({}, "".concat(handlerClassName, "-up-disabled"), upDisabled));
      var downClassName = classNames(handlerClassName, "".concat(handlerClassName, "-down"), _defineProperty$1({}, "".concat(handlerClassName, "-down-disabled"), downDisabled));
      var sharedHandlerProps = {
        unselectable: "on",
        role: "button",
        onMouseup: onStopStep,
        onMouseleave: onStopStep
      };
      var upNode = slots.upNode, downNode = slots.downNode;
      return createVNode("div", {
        "class": "".concat(handlerClassName, "-wrap")
      }, [createVNode("span", _objectSpread2(_objectSpread2({}, sharedHandlerProps), {}, {
        "onMousedown": function onMousedown(e) {
          onStepMouseDown(e, true);
        },
        "aria-label": "Increase Value",
        "aria-disabled": upDisabled,
        "class": upClassName
      }), [(upNode === null || upNode === void 0 ? void 0 : upNode()) || createVNode("span", {
        "unselectable": "on",
        "class": "".concat(prefixCls, "-handler-up-inner")
      }, null)]), createVNode("span", _objectSpread2(_objectSpread2({}, sharedHandlerProps), {}, {
        "onMousedown": function onMousedown(e) {
          onStepMouseDown(e, false);
        },
        "aria-label": "Decrease Value",
        "aria-disabled": downDisabled,
        "class": downClassName
      }), [(downNode === null || downNode === void 0 ? void 0 : downNode()) || createVNode("span", {
        "unselectable": "on",
        "class": "".concat(prefixCls, "-handler-down-inner")
      }, null)])]);
    };
  }
});
function useCursor(inputRef, focused) {
  var selectionRef = ref(null);
  function recordCursor() {
    try {
      var _inputRef$value = inputRef.value, start = _inputRef$value.selectionStart, end = _inputRef$value.selectionEnd, value = _inputRef$value.value;
      var beforeTxt = value.substring(0, start);
      var afterTxt = value.substring(end);
      selectionRef.value = {
        start,
        end,
        value,
        beforeTxt,
        afterTxt
      };
    } catch (e) {
    }
  }
  function restoreCursor() {
    if (inputRef.value && selectionRef.value && focused.value) {
      try {
        var value = inputRef.value.value;
        var _selectionRef$value = selectionRef.value, beforeTxt = _selectionRef$value.beforeTxt, afterTxt = _selectionRef$value.afterTxt, start = _selectionRef$value.start;
        var startPos = value.length;
        if (value.endsWith(afterTxt)) {
          startPos = value.length - selectionRef.value.afterTxt.length;
        } else if (value.startsWith(beforeTxt)) {
          startPos = beforeTxt.length;
        } else {
          var beforeLastChar = beforeTxt[start - 1];
          var newIndex = value.indexOf(beforeLastChar, start - 1);
          if (newIndex !== -1) {
            startPos = newIndex + 1;
          }
        }
        inputRef.value.setSelectionRange(startPos, startPos);
      } catch (e) {
        warning(false, "Something warning of cursor restore. Please fire issue about this: ".concat(e.message));
      }
    }
  }
  return [recordCursor, restoreCursor];
}
var useFrame = function() {
  var idRef = ref(0);
  var cleanUp = function cleanUp2() {
    wrapperRaf.cancel(idRef.value);
  };
  onBeforeUnmount(function() {
    cleanUp();
  });
  return function(callback) {
    cleanUp();
    idRef.value = wrapperRaf(function() {
      callback();
    });
  };
};
var __rest$1 = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var getDecimalValue = function getDecimalValue2(stringMode, decimalValue) {
  if (stringMode || decimalValue.isEmpty()) {
    return decimalValue.toString();
  }
  return decimalValue.toNumber();
};
var getDecimalIfValidate = function getDecimalIfValidate2(value) {
  var decimal = getMiniDecimal(value);
  return decimal.isInvalidate() ? null : decimal;
};
var inputNumberProps$1 = function inputNumberProps() {
  return {
    stringMode: {
      type: Boolean
    },
    defaultValue: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    },
    prefixCls: {
      type: String
    },
    min: {
      type: [String, Number]
    },
    max: {
      type: [String, Number]
    },
    step: {
      type: [String, Number],
      default: 1
    },
    tabindex: {
      type: Number
    },
    controls: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    autofocus: {
      type: Boolean
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    parser: {
      type: Function
    },
    formatter: {
      type: Function
    },
    precision: {
      type: Number
    },
    decimalSeparator: {
      type: String
    },
    onInput: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onPressEnter: {
      type: Function
    },
    onStep: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    }
  };
};
var VcInputNumber = defineComponent({
  name: "InnerInputNumber",
  inheritAttrs: false,
  props: _extends(_extends({}, inputNumberProps$1()), {
    lazy: Boolean
  }),
  slots: ["upHandler", "downHandler"],
  setup: function setup2(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, emit = _ref.emit, expose = _ref.expose;
    var inputRef = ref();
    var focus = ref(false);
    var userTypingRef = ref(false);
    var compositionRef = ref(false);
    var decimalValue = ref(getMiniDecimal(props.value));
    function setUncontrolledDecimalValue(newDecimal) {
      if (props.value === void 0) {
        decimalValue.value = newDecimal;
      }
    }
    var getPrecision = function getPrecision2(numStr, userTyping) {
      if (userTyping) {
        return void 0;
      }
      if (props.precision >= 0) {
        return props.precision;
      }
      return Math.max(getNumberPrecision(numStr), getNumberPrecision(props.step));
    };
    var mergedParser = function mergedParser2(num) {
      var numStr = String(num);
      if (props.parser) {
        return props.parser(numStr);
      }
      var parsedStr = numStr;
      if (props.decimalSeparator) {
        parsedStr = parsedStr.replace(props.decimalSeparator, ".");
      }
      return parsedStr.replace(/[^\w.-]+/g, "");
    };
    var inputValue = ref("");
    var mergedFormatter = function mergedFormatter2(number, userTyping) {
      if (props.formatter) {
        return props.formatter(number, {
          userTyping,
          input: String(inputValue.value)
        });
      }
      var str = typeof number === "number" ? num2str(number) : number;
      if (!userTyping) {
        var mergedPrecision = getPrecision(str, userTyping);
        if (validateNumber(str) && (props.decimalSeparator || mergedPrecision >= 0)) {
          var separatorStr = props.decimalSeparator || ".";
          str = toFixed(str, separatorStr, mergedPrecision);
        }
      }
      return str;
    };
    var initValue = function() {
      var initValue2 = props.value;
      if (decimalValue.value.isInvalidate() && ["string", "number"].includes(_typeof(initValue2))) {
        return Number.isNaN(initValue2) ? "" : initValue2;
      }
      return mergedFormatter(decimalValue.value.toString(), false);
    }();
    inputValue.value = initValue;
    function setInputValue(newValue, userTyping) {
      inputValue.value = mergedFormatter(newValue.isInvalidate() ? newValue.toString(false) : newValue.toString(!userTyping), userTyping);
    }
    var maxDecimal = computed(function() {
      return getDecimalIfValidate(props.max);
    });
    var minDecimal = computed(function() {
      return getDecimalIfValidate(props.min);
    });
    var upDisabled = computed(function() {
      if (!maxDecimal.value || !decimalValue.value || decimalValue.value.isInvalidate()) {
        return false;
      }
      return maxDecimal.value.lessEquals(decimalValue.value);
    });
    var downDisabled = computed(function() {
      if (!minDecimal.value || !decimalValue.value || decimalValue.value.isInvalidate()) {
        return false;
      }
      return decimalValue.value.lessEquals(minDecimal.value);
    });
    var _useCursor = useCursor(inputRef, focus), _useCursor2 = _slicedToArray(_useCursor, 2), recordCursor = _useCursor2[0], restoreCursor = _useCursor2[1];
    var getRangeValue = function getRangeValue2(target) {
      if (maxDecimal.value && !target.lessEquals(maxDecimal.value)) {
        return maxDecimal.value;
      }
      if (minDecimal.value && !minDecimal.value.lessEquals(target)) {
        return minDecimal.value;
      }
      return null;
    };
    var isInRange = function isInRange2(target) {
      return !getRangeValue(target);
    };
    var triggerValueUpdate = function triggerValueUpdate2(newValue, userTyping) {
      var _a;
      var updateValue = newValue;
      var isRangeValidate = isInRange(updateValue) || updateValue.isEmpty();
      if (!updateValue.isEmpty() && !userTyping) {
        updateValue = getRangeValue(updateValue) || updateValue;
        isRangeValidate = true;
      }
      if (!props.readonly && !props.disabled && isRangeValidate) {
        var numStr = updateValue.toString();
        var mergedPrecision = getPrecision(numStr, userTyping);
        if (mergedPrecision >= 0) {
          updateValue = getMiniDecimal(toFixed(numStr, ".", mergedPrecision));
        }
        if (!updateValue.equals(decimalValue.value)) {
          setUncontrolledDecimalValue(updateValue);
          (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, updateValue.isEmpty() ? null : getDecimalValue(props.stringMode, updateValue));
          if (props.value === void 0) {
            setInputValue(updateValue, userTyping);
          }
        }
        return updateValue;
      }
      return decimalValue.value;
    };
    var onNextPromise = useFrame();
    var collectInputValue = function collectInputValue2(inputStr) {
      var _a;
      recordCursor();
      inputValue.value = inputStr;
      if (!compositionRef.value) {
        var finalValue = mergedParser(inputStr);
        var finalDecimal = getMiniDecimal(finalValue);
        if (!finalDecimal.isNaN()) {
          triggerValueUpdate(finalDecimal, true);
        }
      }
      (_a = props.onInput) === null || _a === void 0 ? void 0 : _a.call(props, inputStr);
      onNextPromise(function() {
        var nextInputStr = inputStr;
        if (!props.parser) {
          nextInputStr = inputStr.replace(/。/g, ".");
        }
        if (nextInputStr !== inputStr) {
          collectInputValue2(nextInputStr);
        }
      });
    };
    var onCompositionStart = function onCompositionStart2() {
      compositionRef.value = true;
    };
    var onCompositionEnd = function onCompositionEnd2() {
      compositionRef.value = false;
      collectInputValue(inputRef.value.value);
    };
    var onInternalInput = function onInternalInput2(e) {
      collectInputValue(e.target.value);
    };
    var onInternalStep = function onInternalStep2(up) {
      var _a, _b;
      if (up && upDisabled.value || !up && downDisabled.value) {
        return;
      }
      userTypingRef.value = false;
      var stepDecimal = getMiniDecimal(props.step);
      if (!up) {
        stepDecimal = stepDecimal.negate();
      }
      var target = (decimalValue.value || getMiniDecimal(0)).add(stepDecimal.toString());
      var updatedValue = triggerValueUpdate(target, false);
      (_a = props.onStep) === null || _a === void 0 ? void 0 : _a.call(props, getDecimalValue(props.stringMode, updatedValue), {
        offset: props.step,
        type: up ? "up" : "down"
      });
      (_b = inputRef.value) === null || _b === void 0 ? void 0 : _b.focus();
    };
    var flushInputValue = function flushInputValue2(userTyping) {
      var parsedValue = getMiniDecimal(mergedParser(inputValue.value));
      var formatValue = parsedValue;
      if (!parsedValue.isNaN()) {
        formatValue = triggerValueUpdate(parsedValue, userTyping);
      } else {
        formatValue = decimalValue.value;
      }
      if (props.value !== void 0) {
        setInputValue(decimalValue.value, false);
      } else if (!formatValue.isNaN()) {
        setInputValue(formatValue, false);
      }
    };
    var onKeyDown = function onKeyDown2(event) {
      var _a;
      var which = event.which;
      userTypingRef.value = true;
      if (which === KeyCode.ENTER) {
        if (!compositionRef.value) {
          userTypingRef.value = false;
        }
        flushInputValue(false);
        (_a = props.onPressEnter) === null || _a === void 0 ? void 0 : _a.call(props, event);
      }
      if (props.keyboard === false) {
        return;
      }
      if (!compositionRef.value && [KeyCode.UP, KeyCode.DOWN].includes(which)) {
        onInternalStep(KeyCode.UP === which);
        event.preventDefault();
      }
    };
    var onKeyUp = function onKeyUp2() {
      userTypingRef.value = false;
    };
    var onBlur = function onBlur2(e) {
      flushInputValue(false);
      focus.value = false;
      userTypingRef.value = false;
      emit("blur", e);
    };
    watch(function() {
      return props.precision;
    }, function() {
      if (!decimalValue.value.isInvalidate()) {
        setInputValue(decimalValue.value, false);
      }
    }, {
      flush: "post"
    });
    watch(function() {
      return props.value;
    }, function() {
      var newValue = getMiniDecimal(props.value);
      decimalValue.value = newValue;
      var currentParsedValue = getMiniDecimal(mergedParser(inputValue.value));
      if (!newValue.equals(currentParsedValue) || !userTypingRef.value || props.formatter) {
        setInputValue(newValue, userTypingRef.value);
      }
    }, {
      flush: "post"
    });
    watch(inputValue, function() {
      if (props.formatter) {
        restoreCursor();
      }
    }, {
      flush: "post"
    });
    watch(function() {
      return props.disabled;
    }, function(val) {
      if (val) {
        focus.value = false;
      }
    });
    expose({
      focus: function focus2() {
        var _a;
        (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: function blur() {
        var _a;
        (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    });
    return function() {
      var _classNames;
      var _a = _extends(_extends({}, attrs), props), _a$prefixCls = _a.prefixCls, prefixCls = _a$prefixCls === void 0 ? "rc-input-number" : _a$prefixCls, min = _a.min, max = _a.max, _a$step = _a.step, step = _a$step === void 0 ? 1 : _a$step;
      _a.defaultValue;
      _a.value;
      var disabled = _a.disabled, readonly = _a.readonly;
      _a.keyboard;
      var _a$controls = _a.controls, controls = _a$controls === void 0 ? true : _a$controls, autofocus = _a.autofocus;
      _a.stringMode;
      _a.parser;
      _a.formatter;
      _a.precision;
      _a.decimalSeparator;
      _a.onChange;
      _a.onInput;
      _a.onPressEnter;
      _a.onStep;
      var lazy = _a.lazy, className = _a.class, style = _a.style, inputProps = __rest$1(_a, ["prefixCls", "min", "max", "step", "defaultValue", "value", "disabled", "readonly", "keyboard", "controls", "autofocus", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "lazy", "class", "style"]);
      var upHandler = slots.upHandler, downHandler = slots.downHandler;
      var inputClassName = "".concat(prefixCls, "-input");
      var eventProps = {};
      if (lazy) {
        eventProps.onChange = onInternalInput;
      } else {
        eventProps.onInput = onInternalInput;
      }
      return createVNode("div", {
        "class": classNames(prefixCls, className, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-focused"), focus.value), _defineProperty$1(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$1(_classNames, "".concat(prefixCls, "-readonly"), readonly), _defineProperty$1(_classNames, "".concat(prefixCls, "-not-a-number"), decimalValue.value.isNaN()), _defineProperty$1(_classNames, "".concat(prefixCls, "-out-of-range"), !decimalValue.value.isInvalidate() && !isInRange(decimalValue.value)), _classNames)),
        "style": style,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp
      }, [controls && createVNode(StepHandler, {
        "prefixCls": prefixCls,
        "upDisabled": upDisabled.value,
        "downDisabled": downDisabled.value,
        "onStep": onInternalStep
      }, {
        upNode: upHandler,
        downNode: downHandler
      }), createVNode("div", {
        "class": "".concat(inputClassName, "-wrap")
      }, [createVNode("input", _objectSpread2(_objectSpread2(_objectSpread2({
        "autofocus": autofocus,
        "autocomplete": "off",
        "role": "spinbutton",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": decimalValue.value.isInvalidate() ? null : decimalValue.value.toString(),
        "step": step
      }, inputProps), {}, {
        "ref": inputRef,
        "class": inputClassName,
        "value": inputValue.value,
        "disabled": disabled,
        "readonly": readonly,
        "onFocus": function onFocus(e) {
          focus.value = true;
          emit("focus", e);
        }
      }, eventProps), {}, {
        "onBlur": onBlur,
        "onCompositionstart": onCompositionStart,
        "onCompositionend": onCompositionEnd
      }), null)])]);
    };
  }
});
function isValidValue(val) {
  return val !== void 0 && val !== null;
}
var __rest = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var baseProps = inputNumberProps$1();
var inputNumberProps2 = function inputNumberProps3() {
  return _extends(_extends({}, baseProps), {
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: true
    },
    placeholder: String,
    name: String,
    id: String,
    type: String,
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
    prefix: PropTypes.any,
    "onUpdate:value": baseProps.onChange,
    valueModifiers: Object
  });
};
var InputNumber = defineComponent({
  name: "AInputNumber",
  inheritAttrs: false,
  props: inputNumberProps2(),
  slots: ["addonBefore", "addonAfter", "prefix"],
  setup: function setup3(props, _ref) {
    var emit = _ref.emit, expose = _ref.expose, attrs = _ref.attrs, slots = _ref.slots;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject("input-number", props), prefixCls = _useConfigInject.prefixCls, size = _useConfigInject.size, direction = _useConfigInject.direction;
    var mergedValue = ref(props.value === void 0 ? props.defaultValue : props.value);
    var focused = ref(false);
    watch(function() {
      return props.value;
    }, function() {
      mergedValue.value = props.value;
    });
    var inputNumberRef = ref(null);
    var focus = function focus2() {
      var _a;
      (_a = inputNumberRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var blur = function blur2() {
      var _a;
      (_a = inputNumberRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    var handleChange = function handleChange2(val) {
      if (props.value === void 0) {
        mergedValue.value = val;
      }
      emit("update:value", val);
      emit("change", val);
      formItemContext.onFieldChange();
    };
    var handleBlur = function handleBlur2(e) {
      focused.value = false;
      emit("blur", e);
      formItemContext.onFieldBlur();
    };
    var handleFocus = function handleFocus2(e) {
      focused.value = true;
      emit("focus", e);
    };
    return function() {
      var _classNames;
      var _a, _b, _c;
      var _d = _extends(_extends({}, attrs), props), className = _d.class, bordered = _d.bordered, readonly = _d.readonly, style = _d.style, _d$addonBefore = _d.addonBefore, addonBefore = _d$addonBefore === void 0 ? (_a = slots.addonBefore) === null || _a === void 0 ? void 0 : _a.call(slots) : _d$addonBefore, _d$addonAfter = _d.addonAfter, addonAfter = _d$addonAfter === void 0 ? (_b = slots.addonAfter) === null || _b === void 0 ? void 0 : _b.call(slots) : _d$addonAfter, _d$prefix = _d.prefix, prefix = _d$prefix === void 0 ? (_c = slots.prefix) === null || _c === void 0 ? void 0 : _c.call(slots) : _d$prefix, _d$valueModifiers = _d.valueModifiers, valueModifiers = _d$valueModifiers === void 0 ? {} : _d$valueModifiers, others = __rest(_d, ["class", "bordered", "readonly", "style", "addonBefore", "addonAfter", "prefix", "valueModifiers"]);
      var preCls = prefixCls.value;
      var mergeSize = size.value;
      var inputNumberClass = classNames((_classNames = {}, _defineProperty$1(_classNames, "".concat(preCls, "-lg"), mergeSize === "large"), _defineProperty$1(_classNames, "".concat(preCls, "-sm"), mergeSize === "small"), _defineProperty$1(_classNames, "".concat(preCls, "-rtl"), direction.value === "rtl"), _defineProperty$1(_classNames, "".concat(preCls, "-readonly"), readonly), _defineProperty$1(_classNames, "".concat(preCls, "-borderless"), !bordered), _classNames), className);
      var element = createVNode(VcInputNumber, _objectSpread2(_objectSpread2({}, omit(others, ["size", "defaultValue"])), {}, {
        "ref": inputNumberRef,
        "lazy": !!valueModifiers.lazy,
        "value": mergedValue.value,
        "class": inputNumberClass,
        "prefixCls": preCls,
        "readonly": readonly,
        "onChange": handleChange,
        "onBlur": handleBlur,
        "onFocus": handleFocus
      }), {
        upHandler: function upHandler() {
          return createVNode(UpOutlined$1, {
            "class": "".concat(preCls, "-handler-up-inner")
          }, null);
        },
        downHandler: function downHandler() {
          return createVNode(DownOutlined, {
            "class": "".concat(preCls, "-handler-down-inner")
          }, null);
        }
      });
      var hasAddon = isValidValue(addonBefore) || isValidValue(addonAfter);
      if (isValidValue(prefix)) {
        var _classNames2;
        var affixWrapperCls = classNames("".concat(preCls, "-affix-wrapper"), (_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(preCls, "-affix-wrapper-focused"), focused.value), _defineProperty$1(_classNames2, "".concat(preCls, "-affix-wrapper-disabled"), props.disabled), _defineProperty$1(_classNames2, "".concat(preCls, "-affix-wrapper-rtl"), direction.value === "rtl"), _defineProperty$1(_classNames2, "".concat(preCls, "-affix-wrapper-readonly"), readonly), _defineProperty$1(_classNames2, "".concat(preCls, "-affix-wrapper-borderless"), !bordered), _defineProperty$1(_classNames2, "".concat(className), !hasAddon && className), _classNames2));
        element = createVNode("div", {
          "class": affixWrapperCls,
          "style": style,
          "onMouseup": function onMouseup() {
            return inputNumberRef.value.focus();
          }
        }, [createVNode("span", {
          "class": "".concat(preCls, "-prefix")
        }, [prefix]), element]);
      }
      if (hasAddon) {
        var _classNames4;
        var wrapperClassName = "".concat(preCls, "-group");
        var addonClassName = "".concat(wrapperClassName, "-addon");
        var addonBeforeNode = addonBefore ? createVNode("div", {
          "class": addonClassName
        }, [addonBefore]) : null;
        var addonAfterNode = addonAfter ? createVNode("div", {
          "class": addonClassName
        }, [addonAfter]) : null;
        var mergedWrapperClassName = classNames("".concat(preCls, "-wrapper"), wrapperClassName, _defineProperty$1({}, "".concat(wrapperClassName, "-rtl"), direction.value === "rtl"));
        var mergedGroupClassName = classNames("".concat(preCls, "-group-wrapper"), (_classNames4 = {}, _defineProperty$1(_classNames4, "".concat(preCls, "-group-wrapper-sm"), mergeSize === "small"), _defineProperty$1(_classNames4, "".concat(preCls, "-group-wrapper-lg"), mergeSize === "large"), _defineProperty$1(_classNames4, "".concat(preCls, "-group-wrapper-rtl"), direction.value === "rtl"), _classNames4), className);
        element = createVNode("div", {
          "class": mergedGroupClassName,
          "style": style
        }, [createVNode("div", {
          "class": mergedWrapperClassName
        }, [addonBeforeNode, element, addonAfterNode])]);
      }
      return cloneElement(element, {
        style
      });
    };
  }
});
var __unplugin_components_5 = _extends(InputNumber, {
  install: function install(app) {
    app.component(InputNumber.name, InputNumber);
    return app;
  }
});
export { __unplugin_components_5 as _ };
