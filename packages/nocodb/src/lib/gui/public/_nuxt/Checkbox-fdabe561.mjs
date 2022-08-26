import { d as defineComponent, bj as initDefaultProps, r as ref, w as watch, aC as _extends, aD as classNames, aJ as _defineProperty, g as createVNode, aK as _objectSpread2, aH as PropTypes, be as useInjectFormItemContext, i as inject, aE as useConfigInject, p as provide, c8 as tuple, P as nextTick, a6 as watchEffect, a_ as onBeforeUnmount, s as onMounted, ba as warning, aM as flattenChildren } from "./entry-fe2e349d.mjs";
import { o as omit } from "./omit-bb2337ec.mjs";
var __rest$2 = globalThis && globalThis.__rest || function(s, e) {
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
var checkboxProps$1 = {
  prefixCls: String,
  name: String,
  id: String,
  type: String,
  defaultChecked: {
    type: [Boolean, Number],
    default: void 0
  },
  checked: {
    type: [Boolean, Number],
    default: void 0
  },
  disabled: Boolean,
  tabindex: {
    type: [Number, String]
  },
  readonly: Boolean,
  autofocus: Boolean,
  value: PropTypes.any,
  required: Boolean
};
var VcCheckbox = defineComponent({
  name: "Checkbox",
  inheritAttrs: false,
  props: initDefaultProps(checkboxProps$1, {
    prefixCls: "rc-checkbox",
    type: "checkbox",
    defaultChecked: false
  }),
  emits: ["click", "change"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs, emit = _ref.emit, expose = _ref.expose;
    var checked = ref(props.checked === void 0 ? props.defaultChecked : props.checked);
    var inputRef = ref();
    watch(function() {
      return props.checked;
    }, function() {
      checked.value = props.checked;
    });
    expose({
      focus: function focus() {
        var _a;
        (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: function blur() {
        var _a;
        (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    });
    var eventShiftKey = ref();
    var handleChange = function handleChange2(e) {
      if (props.disabled) {
        return;
      }
      if (props.checked === void 0) {
        checked.value = e.target.checked;
      }
      e.shiftKey = eventShiftKey.value;
      var eventObj = {
        target: _extends(_extends({}, props), {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e
      };
      if (props.checked !== void 0) {
        inputRef.value.checked = !!props.checked;
      }
      emit("change", eventObj);
      eventShiftKey.value = false;
    };
    var onClick = function onClick2(e) {
      emit("click", e);
      eventShiftKey.value = e.shiftKey;
    };
    return function() {
      var _classNames;
      var prefixCls = props.prefixCls, name = props.name, id = props.id, type = props.type, disabled = props.disabled, readonly = props.readonly, tabindex = props.tabindex, autofocus = props.autofocus, value = props.value, required = props.required, others = __rest$2(props, ["prefixCls", "name", "id", "type", "disabled", "readonly", "tabindex", "autofocus", "value", "required"]);
      var className = attrs.class, onFocus = attrs.onFocus, onBlur = attrs.onBlur, onKeydown = attrs.onKeydown, onKeypress = attrs.onKeypress, onKeyup = attrs.onKeyup;
      var othersAndAttrs = _extends(_extends({}, others), attrs);
      var globalProps = Object.keys(othersAndAttrs).reduce(function(prev, key) {
        if (key.substr(0, 5) === "aria-" || key.substr(0, 5) === "data-" || key === "role") {
          prev[key] = othersAndAttrs[key];
        }
        return prev;
      }, {});
      var classString = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checked"), checked.value), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      var inputProps = _extends(_extends({
        name,
        id,
        type,
        readonly,
        disabled,
        tabindex,
        class: "".concat(prefixCls, "-input"),
        checked: !!checked.value,
        autofocus,
        value
      }, globalProps), {
        onChange: handleChange,
        onClick,
        onFocus,
        onBlur,
        onKeydown,
        onKeypress,
        onKeyup,
        required
      });
      return createVNode("span", {
        "class": classString
      }, [createVNode("input", _objectSpread2({
        "ref": inputRef
      }, inputProps), null), createVNode("span", {
        "class": "".concat(prefixCls, "-inner")
      }, null)]);
    };
  }
});
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
var radioProps = function radioProps2() {
  return {
    prefixCls: String,
    checked: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    isGroup: {
      type: Boolean,
      default: void 0
    },
    value: PropTypes.any,
    name: String,
    id: String,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    onFocus: Function,
    onBlur: Function,
    onClick: Function,
    "onUpdate:checked": Function,
    "onUpdate:value": Function
  };
};
var Radio = defineComponent({
  name: "ARadio",
  props: radioProps(),
  setup: function setup2(props, _ref) {
    var emit = _ref.emit, expose = _ref.expose, slots = _ref.slots;
    var formItemContext = useInjectFormItemContext();
    var vcCheckbox = ref();
    var radioGroupContext = inject("radioGroupContext", void 0);
    var _useConfigInject = useConfigInject("radio", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var focus = function focus2() {
      vcCheckbox.value.focus();
    };
    var blur = function blur2() {
      vcCheckbox.value.blur();
    };
    expose({
      focus,
      blur
    });
    var handleChange = function handleChange2(event) {
      var targetChecked = event.target.checked;
      emit("update:checked", targetChecked);
      emit("update:value", targetChecked);
      emit("change", event);
      formItemContext.onFieldChange();
    };
    var onChange = function onChange2(e) {
      emit("change", e);
      if (radioGroupContext && radioGroupContext.onRadioChange) {
        radioGroupContext.onRadioChange(e);
      }
    };
    return function() {
      var _classNames;
      var radioGroup = radioGroupContext;
      props.prefixCls;
      var _props$id = props.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id, restProps = __rest$1(props, ["prefixCls", "id"]);
      var rProps = _extends({
        prefixCls: prefixCls.value,
        id
      }, omit(restProps, ["onUpdate:checked", "onUpdate:value"]));
      if (radioGroup) {
        rProps.name = radioGroup.props.name;
        rProps.onChange = onChange;
        rProps.checked = props.value === radioGroup.stateValue.value;
        rProps.disabled = props.disabled || radioGroup.props.disabled;
      } else {
        rProps.onChange = handleChange;
      }
      var wrapperClassString = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-checked"), rProps.checked), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-disabled"), rProps.disabled), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-rtl"), direction.value === "rtl"), _classNames));
      return createVNode("label", {
        "class": wrapperClassString
      }, [createVNode(VcCheckbox, _objectSpread2(_objectSpread2({}, rProps), {}, {
        "type": "radio",
        "ref": vcCheckbox
      }), null), slots.default && createVNode("span", null, [slots.default()])]);
    };
  }
});
var RadioGroupSizeTypes = tuple("large", "default", "small");
var radioGroupProps = function radioGroupProps2() {
  return {
    prefixCls: String,
    value: PropTypes.any,
    size: PropTypes.oneOf(RadioGroupSizeTypes),
    options: {
      type: Array
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    name: String,
    buttonStyle: {
      type: String,
      default: "outline"
    },
    id: String,
    optionType: {
      type: String,
      default: "default"
    },
    onChange: Function,
    "onUpdate:value": Function
  };
};
var __unplugin_components_1 = defineComponent({
  name: "ARadioGroup",
  props: radioGroupProps(),
  setup: function setup3(props, _ref) {
    var slots = _ref.slots, emit = _ref.emit;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject("radio", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, size = _useConfigInject.size;
    var stateValue = ref(props.value);
    var updatingValue = ref(false);
    watch(function() {
      return props.value;
    }, function(val) {
      stateValue.value = val;
      updatingValue.value = false;
    });
    var onRadioChange = function onRadioChange2(ev) {
      var lastValue = stateValue.value;
      var value = ev.target.value;
      if (!("value" in props)) {
        stateValue.value = value;
      }
      if (!updatingValue.value && value !== lastValue) {
        updatingValue.value = true;
        emit("update:value", value);
        emit("change", ev);
        formItemContext.onFieldChange();
      }
      nextTick(function() {
        updatingValue.value = false;
      });
    };
    provide("radioGroupContext", {
      onRadioChange,
      stateValue,
      props
    });
    return function() {
      var _classNames;
      var _a;
      var options = props.options, optionType = props.optionType, buttonStyle = props.buttonStyle, _props$id = props.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      var groupPrefixCls = "".concat(prefixCls.value, "-group");
      var classString = classNames(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, _defineProperty(_classNames, "".concat(groupPrefixCls, "-").concat(size.value), size.value), _defineProperty(_classNames, "".concat(groupPrefixCls, "-rtl"), direction.value === "rtl"), _classNames));
      var children = null;
      if (options && options.length > 0) {
        var optionsPrefixCls = optionType === "button" ? "".concat(prefixCls.value, "-button") : prefixCls.value;
        children = options.map(function(option) {
          if (typeof option === "string" || typeof option === "number") {
            return createVNode(Radio, {
              "key": option,
              "prefixCls": optionsPrefixCls,
              "disabled": props.disabled,
              "value": option,
              "checked": stateValue.value === option
            }, {
              default: function _default() {
                return [option];
              }
            });
          }
          var value = option.value, disabled = option.disabled, label = option.label;
          return createVNode(Radio, {
            "key": "radio-group-value-options-".concat(value),
            "prefixCls": optionsPrefixCls,
            "disabled": disabled || props.disabled,
            "value": value,
            "checked": stateValue.value === value
          }, {
            default: function _default() {
              return [label];
            }
          });
        });
      } else {
        children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      }
      return createVNode("div", {
        "class": classString,
        "id": id
      }, [children]);
    };
  }
});
var abstractCheckboxGroupProps = function abstractCheckboxGroupProps2() {
  return {
    name: String,
    prefixCls: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: Boolean,
    id: String
  };
};
var checkboxGroupProps = function checkboxGroupProps2() {
  return _extends(_extends({}, abstractCheckboxGroupProps()), {
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    onChange: {
      type: Function
    },
    "onUpdate:value": {
      type: Function
    }
  });
};
var abstractCheckboxProps = function abstractCheckboxProps2() {
  return {
    prefixCls: String,
    defaultChecked: {
      type: Boolean,
      default: void 0
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    isGroup: {
      type: Boolean,
      default: void 0
    },
    value: PropTypes.any,
    name: String,
    id: String,
    indeterminate: {
      type: Boolean,
      default: void 0
    },
    type: {
      type: String,
      default: "checkbox"
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    "onUpdate:checked": Function,
    onClick: Function,
    skipGroup: {
      type: Boolean,
      default: false
    }
  };
};
var checkboxProps = function checkboxProps2() {
  return _extends(_extends({}, abstractCheckboxProps()), {
    indeterminate: {
      type: Boolean,
      default: false
    }
  });
};
var CheckboxGroupContextKey = Symbol("CheckboxGroupContext");
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
var Checkbox = defineComponent({
  name: "ACheckbox",
  inheritAttrs: false,
  __ANT_CHECKBOX: true,
  props: checkboxProps(),
  setup: function setup4(props, _ref) {
    var emit = _ref.emit, attrs = _ref.attrs, slots = _ref.slots, expose = _ref.expose;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject("checkbox", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var checkboxGroup = inject(CheckboxGroupContextKey, void 0);
    var uniId = Symbol("checkboxUniId");
    watchEffect(function() {
      if (!props.skipGroup && checkboxGroup) {
        checkboxGroup.registerValue(uniId, props.value);
      }
    });
    onBeforeUnmount(function() {
      if (checkboxGroup) {
        checkboxGroup.cancelValue(uniId);
      }
    });
    onMounted(function() {
      warning(props.checked !== void 0 || checkboxGroup || props.value === void 0, "Checkbox", "`value` is not validate prop, do you mean `checked`?");
    });
    var handleChange = function handleChange2(event) {
      var targetChecked = event.target.checked;
      emit("update:checked", targetChecked);
      emit("change", event);
    };
    var checkboxRef = ref();
    var focus = function focus2() {
      var _a;
      (_a = checkboxRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var blur = function blur2() {
      var _a;
      (_a = checkboxRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    return function() {
      var _classNames;
      var _a;
      var children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      var indeterminate = props.indeterminate, skipGroup = props.skipGroup, _props$id = props.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id, restProps = __rest(props, ["indeterminate", "skipGroup", "id"]);
      var onMouseenter = attrs.onMouseenter, onMouseleave = attrs.onMouseleave;
      attrs.onInput;
      var className = attrs.class, style = attrs.style, restAttrs = __rest(attrs, ["onMouseenter", "onMouseleave", "onInput", "class", "style"]);
      var checkboxProps3 = _extends(_extends(_extends({}, restProps), {
        id,
        prefixCls: prefixCls.value
      }), restAttrs);
      if (checkboxGroup && !skipGroup) {
        checkboxProps3.onChange = function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          emit.apply(void 0, ["change"].concat(args));
          checkboxGroup.toggleOption({
            label: children,
            value: props.value
          });
        };
        checkboxProps3.name = checkboxGroup.name.value;
        checkboxProps3.checked = checkboxGroup.mergedValue.value.indexOf(props.value) !== -1;
        checkboxProps3.disabled = props.disabled || checkboxGroup.disabled.value;
        checkboxProps3.indeterminate = indeterminate;
      } else {
        checkboxProps3.onChange = handleChange;
      }
      var classString = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-checked"), checkboxProps3.checked), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrapper-disabled"), checkboxProps3.disabled), _classNames), className);
      var checkboxClass = classNames(_defineProperty({}, "".concat(prefixCls.value, "-indeterminate"), indeterminate));
      return createVNode("label", {
        "class": classString,
        "style": style,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave
      }, [createVNode(VcCheckbox, _objectSpread2(_objectSpread2({}, checkboxProps3), {}, {
        "class": checkboxClass,
        "ref": checkboxRef
      }), null), children.length ? createVNode("span", null, [children]) : null]);
    };
  }
});
export { Checkbox as C, Radio as R, __unplugin_components_1 as _, CheckboxGroupContextKey as a, checkboxGroupProps as c, radioProps as r };
