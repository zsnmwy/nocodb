import { aH as PropTypes, aC as _extends, aD as classNames, aJ as _defineProperty, aF as filterEmpty, d as defineComponent, c8 as tuple, r as ref, aG as cloneElement, g as createVNode, bi as CloseCircleFilled, be as useInjectFormItemContext, aE as useConfigInject, w as watch, s as onMounted, a_ as onBeforeUnmount, aK as _objectSpread2, B as withDirectives, aW as _toConsumableArray, aN as _typeof, F as Fragment, P as nextTick, cm as getCurrentInstance } from "./entry-3fb260b7.mjs";
import { a as antInputDirective } from "./antInputDirective-04640d14.mjs";
import { o as omit } from "./omit-e185a391.mjs";
var inputProps = function inputProps2() {
  return {
    id: String,
    prefixCls: String,
    inputPrefixCls: String,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: {
      type: [String, Number, Symbol],
      default: void 0
    },
    placeholder: {
      type: [String, Number]
    },
    autocomplete: String,
    type: {
      type: String,
      default: "text"
    },
    name: String,
    size: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    readonly: {
      type: Boolean,
      default: void 0
    },
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    allowClear: {
      type: Boolean,
      default: void 0
    },
    lazy: {
      type: Boolean,
      default: true
    },
    maxlength: Number,
    loading: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: void 0
    },
    showCount: {
      type: [Boolean, Object]
    },
    htmlSize: Number,
    onPressEnter: Function,
    onKeydown: Function,
    onKeyup: Function,
    onFocus: Function,
    onBlur: Function,
    onChange: Function,
    onInput: Function,
    "onUpdate:value": Function,
    valueModifiers: Object,
    hidden: Boolean
  };
};
var inputProps$1 = inputProps;
var textAreaProps = function textAreaProps2() {
  return _extends(_extends({}, omit(inputProps(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
    rows: Number,
    autosize: {
      type: [Boolean, Object],
      default: void 0
    },
    autoSize: {
      type: [Boolean, Object],
      default: void 0
    },
    onResize: {
      type: Function
    },
    onCompositionstart: Function,
    onCompositionend: Function,
    valueModifiers: Object
  });
};
function getInputClassName(prefixCls, bordered, size, disabled, direction) {
  var _classNames;
  return classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === "small"), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === "large"), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), _defineProperty(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames));
}
var isValid = function isValid2(value) {
  return value !== void 0 && value !== null && (Array.isArray(value) ? filterEmpty(value).length : true);
};
function hasPrefixSuffix(propsAndSlots) {
  return isValid(propsAndSlots.prefix) || isValid(propsAndSlots.suffix) || isValid(propsAndSlots.allowClear);
}
function hasAddon(propsAndSlots) {
  return isValid(propsAndSlots.addonBefore) || isValid(propsAndSlots.addonAfter);
}
var ClearableInputType = ["text", "input"];
var ClearableLabeledInput = defineComponent({
  name: "ClearableLabeledInput",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    inputType: PropTypes.oneOf(tuple("text", "input")),
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    allowClear: {
      type: Boolean,
      default: void 0
    },
    element: PropTypes.any,
    handleReset: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    },
    size: {
      type: String
    },
    suffix: PropTypes.any,
    prefix: PropTypes.any,
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
    readonly: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: true
    },
    triggerFocus: {
      type: Function
    },
    hidden: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var containerRef = ref();
    var onInputMouseUp = function onInputMouseUp2(e) {
      var _a;
      if ((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        var triggerFocus2 = props.triggerFocus;
        triggerFocus2 === null || triggerFocus2 === void 0 ? void 0 : triggerFocus2();
      }
    };
    var renderClearIcon = function renderClearIcon2(prefixCls) {
      var _classNames;
      var allowClear = props.allowClear, value = props.value, disabled = props.disabled, readonly = props.readonly, handleReset = props.handleReset, _props$suffix = props.suffix, suffix = _props$suffix === void 0 ? slots.suffix : _props$suffix;
      if (!allowClear) {
        return null;
      }
      var needClear = !disabled && !readonly && value;
      var className = "".concat(prefixCls, "-clear-icon");
      return createVNode(CloseCircleFilled, {
        "onClick": handleReset,
        "onMousedown": function onMousedown(e) {
          return e.preventDefault();
        },
        "class": classNames((_classNames = {}, _defineProperty(_classNames, "".concat(className, "-hidden"), !needClear), _defineProperty(_classNames, "".concat(className, "-has-suffix"), !!suffix), _classNames), className),
        "role": "button"
      }, null);
    };
    var renderSuffix = function renderSuffix2(prefixCls) {
      var _a;
      var _props$suffix2 = props.suffix, suffix = _props$suffix2 === void 0 ? (_a = slots.suffix) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$suffix2, allowClear = props.allowClear;
      if (suffix || allowClear) {
        return createVNode("span", {
          "class": "".concat(prefixCls, "-suffix")
        }, [renderClearIcon(prefixCls), suffix]);
      }
      return null;
    };
    var renderLabeledIcon = function renderLabeledIcon2(prefixCls, element) {
      var _classNames2;
      var _a, _b;
      var focused = props.focused, value = props.value, _props$prefix = props.prefix, prefix = _props$prefix === void 0 ? (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$prefix, size = props.size, _props$suffix3 = props.suffix, suffix = _props$suffix3 === void 0 ? (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$suffix3, disabled = props.disabled, allowClear = props.allowClear, direction = props.direction, readonly = props.readonly, bordered = props.bordered, hidden = props.hidden, _props$addonAfter = props.addonAfter, addonAfter = _props$addonAfter === void 0 ? slots.addonAfter : _props$addonAfter, _props$addonBefore = props.addonBefore, addonBefore = _props$addonBefore === void 0 ? slots.addonBefore : _props$addonBefore;
      var suffixNode = renderSuffix(prefixCls);
      if (!hasPrefixSuffix({
        prefix,
        suffix,
        allowClear
      })) {
        return cloneElement(element, {
          value
        });
      }
      var prefixNode = prefix ? createVNode("span", {
        "class": "".concat(prefixCls, "-prefix")
      }, [prefix]) : null;
      var affixWrapperCls = classNames("".concat(prefixCls, "-affix-wrapper"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), focused), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), size === "small"), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), size === "large"), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-input-with-clear-btn"), suffix && allowClear && value), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === "rtl"), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-readonly"), readonly), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _defineProperty(_classNames2, "".concat(attrs.class), !hasAddon({
        addonAfter,
        addonBefore
      }) && attrs.class), _classNames2));
      return createVNode("span", {
        "ref": containerRef,
        "class": affixWrapperCls,
        "style": attrs.style,
        "onMouseup": onInputMouseUp,
        "hidden": hidden
      }, [prefixNode, cloneElement(element, {
        style: null,
        value,
        class: getInputClassName(prefixCls, bordered, size, disabled)
      }), suffixNode]);
    };
    var renderInputWithLabel = function renderInputWithLabel2(prefixCls, labeledElement) {
      var _classNames4;
      var _a, _b;
      var _props$addonBefore2 = props.addonBefore, addonBefore = _props$addonBefore2 === void 0 ? (_a = slots.addonBefore) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$addonBefore2, _props$addonAfter2 = props.addonAfter, addonAfter = _props$addonAfter2 === void 0 ? (_b = slots.addonAfter) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$addonAfter2, size = props.size, direction = props.direction, hidden = props.hidden;
      if (!hasAddon({
        addonBefore,
        addonAfter
      })) {
        return labeledElement;
      }
      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? createVNode("span", {
        "class": addonClassName
      }, [addonBefore]) : null;
      var addonAfterNode = addonAfter ? createVNode("span", {
        "class": addonClassName
      }, [addonAfter]) : null;
      var mergedWrapperClassName = classNames("".concat(prefixCls, "-wrapper"), wrapperClassName, _defineProperty({}, "".concat(wrapperClassName, "-rtl"), direction === "rtl"));
      var mergedGroupClassName = classNames("".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === "small"), _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === "large"), _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === "rtl"), _classNames4), attrs.class);
      return createVNode("span", {
        "class": mergedGroupClassName,
        "style": attrs.style,
        "hidden": hidden
      }, [createVNode("span", {
        "class": mergedWrapperClassName
      }, [addonBeforeNode, cloneElement(labeledElement, {
        style: null
      }), addonAfterNode])]);
    };
    var renderTextAreaWithClearIcon = function renderTextAreaWithClearIcon2(prefixCls, element) {
      var _classNames5;
      var value = props.value, allowClear = props.allowClear, direction = props.direction, bordered = props.bordered, hidden = props.hidden, _props$addonAfter3 = props.addonAfter, addonAfter = _props$addonAfter3 === void 0 ? slots.addonAfter : _props$addonAfter3, _props$addonBefore3 = props.addonBefore, addonBefore = _props$addonBefore3 === void 0 ? slots.addonBefore : _props$addonBefore3;
      if (!allowClear) {
        return cloneElement(element, {
          value
        });
      }
      var affixWrapperCls = classNames("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (_classNames5 = {}, _defineProperty(_classNames5, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === "rtl"), _defineProperty(_classNames5, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _defineProperty(_classNames5, "".concat(attrs.class), !hasAddon({
        addonAfter,
        addonBefore
      }) && attrs.class), _classNames5));
      return createVNode("span", {
        "class": affixWrapperCls,
        "style": attrs.style,
        "hidden": hidden
      }, [cloneElement(element, {
        style: null,
        value
      }), renderClearIcon(prefixCls)]);
    };
    return function() {
      var _a;
      var prefixCls = props.prefixCls, inputType = props.inputType, _props$element = props.element, element = _props$element === void 0 ? (_a = slots.element) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$element;
      if (inputType === ClearableInputType[0]) {
        return renderTextAreaWithClearIcon(prefixCls, element);
      }
      return renderInputWithLabel(prefixCls, renderLabeledIcon(prefixCls, element));
    };
  }
});
function fixControlledValue(value) {
  if (typeof value === "undefined" || value === null) {
    return "";
  }
  return String(value);
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  var event = e;
  if (e.type === "click") {
    Object.defineProperty(event, "target", {
      writable: true
    });
    Object.defineProperty(event, "currentTarget", {
      writable: true
    });
    var currentTarget = target.cloneNode(true);
    event.target = currentTarget;
    event.currentTarget = currentTarget;
    currentTarget.value = "";
    onChange(event);
    return;
  }
  if (targetValue !== void 0) {
    Object.defineProperty(event, "target", {
      writable: true
    });
    Object.defineProperty(event, "currentTarget", {
      writable: true
    });
    event.target = target;
    event.currentTarget = target;
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus(element, option) {
  if (!element)
    return;
  element.focus(option);
  var _ref = option || {}, cursor = _ref.cursor;
  if (cursor) {
    var len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
var Input = defineComponent({
  name: "AInput",
  inheritAttrs: false,
  props: inputProps$1(),
  setup: function setup2(props, _ref2) {
    var slots = _ref2.slots, attrs = _ref2.attrs, expose = _ref2.expose, emit = _ref2.emit;
    var inputRef = ref();
    var clearableInputRef = ref();
    var removePasswordTimeout;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject("input", props), direction = _useConfigInject.direction, prefixCls = _useConfigInject.prefixCls, size = _useConfigInject.size, autocomplete = _useConfigInject.autocomplete;
    var stateValue = ref(props.value === void 0 ? props.defaultValue : props.value);
    var focused = ref(false);
    watch(function() {
      return props.value;
    }, function() {
      stateValue.value = props.value;
    });
    watch(function() {
      return props.disabled;
    }, function() {
      if (props.value !== void 0) {
        stateValue.value = props.value;
      }
      if (props.disabled) {
        focused.value = false;
      }
    });
    var clearPasswordValueAttribute = function clearPasswordValueAttribute2() {
      removePasswordTimeout = setTimeout(function() {
        var _a;
        if (((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.getAttribute("type")) === "password" && inputRef.value.hasAttribute("value")) {
          inputRef.value.removeAttribute("value");
        }
      });
    };
    var focus = function focus2(option) {
      triggerFocus(inputRef.value, option);
    };
    var blur = function blur2() {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    var setSelectionRange = function setSelectionRange2(start, end, direction2) {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction2);
    };
    var select = function select2() {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.select();
    };
    expose({
      focus,
      blur,
      input: inputRef,
      stateValue,
      setSelectionRange,
      select
    });
    var onFocus = function onFocus2(e) {
      var onFocus3 = props.onFocus;
      focused.value = true;
      onFocus3 === null || onFocus3 === void 0 ? void 0 : onFocus3(e);
      nextTick(function() {
        clearPasswordValueAttribute();
      });
    };
    var onBlur = function onBlur2(e) {
      var onBlur3 = props.onBlur;
      focused.value = false;
      onBlur3 === null || onBlur3 === void 0 ? void 0 : onBlur3(e);
      formItemContext.onFieldBlur();
      nextTick(function() {
        clearPasswordValueAttribute();
      });
    };
    var triggerChange = function triggerChange2(e) {
      emit("update:value", e.target.value);
      emit("change", e);
      emit("input", e);
      formItemContext.onFieldChange();
    };
    var instance = getCurrentInstance();
    var setValue = function setValue2(value, callback) {
      if (stateValue.value === value) {
        return;
      }
      if (props.value === void 0) {
        stateValue.value = value;
      } else {
        nextTick(function() {
          if (inputRef.value.value !== stateValue.value) {
            instance.update();
          }
        });
      }
      nextTick(function() {
        callback && callback();
      });
    };
    var handleReset = function handleReset2(e) {
      resolveOnChange(inputRef.value, e, triggerChange);
      setValue("", function() {
        focus();
      });
    };
    var handleChange = function handleChange2(e) {
      var _e$target = e.target, value = _e$target.value, composing = _e$target.composing;
      if ((e.isComposing || composing) && props.lazy || stateValue.value === value)
        return;
      var newVal = e.target.value;
      resolveOnChange(inputRef.value, e, triggerChange);
      setValue(newVal, function() {
        clearPasswordValueAttribute();
      });
    };
    var handleKeyDown = function handleKeyDown2(e) {
      if (e.keyCode === 13) {
        emit("pressEnter", e);
      }
      emit("keydown", e);
    };
    onMounted(function() {
      clearPasswordValueAttribute();
    });
    onBeforeUnmount(function() {
      clearTimeout(removePasswordTimeout);
    });
    var renderInput = function renderInput2() {
      var _a;
      var _props$addonBefore = props.addonBefore, addonBefore = _props$addonBefore === void 0 ? slots.addonBefore : _props$addonBefore, _props$addonAfter = props.addonAfter, addonAfter = _props$addonAfter === void 0 ? slots.addonAfter : _props$addonAfter, disabled = props.disabled, _props$bordered = props.bordered, bordered = _props$bordered === void 0 ? true : _props$bordered, _props$valueModifiers = props.valueModifiers, valueModifiers = _props$valueModifiers === void 0 ? {} : _props$valueModifiers, htmlSize = props.htmlSize;
      var otherProps = omit(props, [
        "prefixCls",
        "onPressEnter",
        "addonBefore",
        "addonAfter",
        "prefix",
        "suffix",
        "allowClear",
        "defaultValue",
        "size",
        "bordered",
        "htmlSize",
        "lazy",
        "showCount",
        "valueModifiers"
      ]);
      var inputProps3 = _extends(_extends(_extends({}, otherProps), attrs), {
        autocomplete: autocomplete.value,
        onChange: handleChange,
        onInput: handleChange,
        onFocus,
        onBlur,
        onKeydown: handleKeyDown,
        class: classNames(getInputClassName(prefixCls.value, bordered, size.value, disabled, direction.value), _defineProperty({}, attrs.class, attrs.class && !addonBefore && !addonAfter)),
        ref: inputRef,
        key: "ant-input",
        size: htmlSize,
        id: (_a = otherProps.id) !== null && _a !== void 0 ? _a : formItemContext.id.value
      });
      if (valueModifiers.lazy) {
        delete inputProps3.onInput;
      }
      if (!inputProps3.autofocus) {
        delete inputProps3.autofocus;
      }
      var inputNode = createVNode("input", omit(inputProps3, ["size"]), null);
      return withDirectives(inputNode, [[antInputDirective]]);
    };
    var renderShowCountSuffix = function renderShowCountSuffix2() {
      var _a;
      var value = stateValue.value;
      var maxlength = props.maxlength, _props$suffix = props.suffix, suffix = _props$suffix === void 0 ? (_a = slots.suffix) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$suffix, showCount = props.showCount;
      var hasMaxLength = Number(maxlength) > 0;
      if (suffix || showCount) {
        var valueLength = _toConsumableArray(fixControlledValue(value)).length;
        var dataCount = null;
        if (_typeof(showCount) === "object") {
          dataCount = showCount.formatter({
            count: valueLength,
            maxlength
          });
        } else {
          dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxlength) : "");
        }
        return createVNode(Fragment, null, [!!showCount && createVNode("span", {
          "class": classNames("".concat(prefixCls.value, "-show-count-suffix"), _defineProperty({}, "".concat(prefixCls.value, "-show-count-has-suffix"), !!suffix))
        }, [dataCount]), suffix]);
      }
      return null;
    };
    return function() {
      var inputProps3 = _extends(_extends(_extends({}, attrs), props), {
        prefixCls: prefixCls.value,
        inputType: "input",
        value: fixControlledValue(stateValue.value),
        handleReset,
        focused: focused.value && !props.disabled
      });
      return createVNode(ClearableLabeledInput, _objectSpread2(_objectSpread2({}, omit(inputProps3, ["element", "valueModifiers", "suffix", "showCount"])), {}, {
        "ref": clearableInputRef
      }), _extends(_extends({}, slots), {
        element: renderInput,
        suffix: renderShowCountSuffix
      }));
    };
  }
});
export { ClearableLabeledInput as C, Input as I, triggerFocus as a, fixControlledValue as f, inputProps$1 as i, resolveOnChange as r, textAreaProps as t };
