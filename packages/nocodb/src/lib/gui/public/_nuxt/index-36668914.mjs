import { b9 as withInstall, c8 as tuple, d as defineComponent, aH as PropTypes, be as useInjectFormItemContext, cn as onBeforeMount, ba as warning, r as ref, e as computed, w as watch, aE as useConfigInject, s as onMounted, P as nextTick, aJ as _defineProperty, g as createVNode, aK as _objectSpread2, ch as LoadingOutlined, aL as getPropsSlot, aX as KeyCode } from "./entry-649fbf77.mjs";
import { W as Wave } from "./wave-1595a9a4.mjs";
import { o as omit } from "./omit-52a539d6.mjs";
var SwitchSizes = tuple("small", "default");
var switchProps = function switchProps2() {
  return {
    id: String,
    prefixCls: String,
    size: PropTypes.oneOf(SwitchSizes),
    disabled: {
      type: Boolean,
      default: void 0
    },
    checkedChildren: PropTypes.any,
    unCheckedChildren: PropTypes.any,
    tabindex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    autofocus: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    checked: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]),
    checkedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]).def(true),
    unCheckedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.looseBool]).def(false),
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onMouseup: {
      type: Function
    },
    "onUpdate:checked": {
      type: Function
    },
    onBlur: Function,
    onFocus: Function
  };
};
var Switch = defineComponent({
  name: "ASwitch",
  __ANT_SWITCH: true,
  inheritAttrs: false,
  props: switchProps(),
  slots: ["checkedChildren", "unCheckedChildren"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, expose = _ref.expose, emit = _ref.emit;
    var formItemContext = useInjectFormItemContext();
    onBeforeMount(function() {
      warning(!("defaultChecked" in attrs), "Switch", "'defaultChecked' is deprecated, please use 'v-model:checked'");
      warning(!("value" in attrs), "Switch", "`value` is not validate prop, do you mean `checked`?");
    });
    var checked = ref(props.checked !== void 0 ? props.checked : attrs.defaultChecked);
    var checkedStatus = computed(function() {
      return checked.value === props.checkedValue;
    });
    watch(function() {
      return props.checked;
    }, function() {
      checked.value = props.checked;
    });
    var _useConfigInject = useConfigInject("switch", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, size = _useConfigInject.size;
    var refSwitchNode = ref();
    var focus = function focus2() {
      var _a;
      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var blur = function blur2() {
      var _a;
      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    onMounted(function() {
      nextTick(function() {
        if (props.autofocus && !props.disabled) {
          refSwitchNode.value.focus();
        }
      });
    });
    var setChecked = function setChecked2(check, e) {
      if (props.disabled) {
        return;
      }
      emit("update:checked", check);
      emit("change", check, e);
      formItemContext.onFieldChange();
    };
    var handleBlur = function handleBlur2(e) {
      emit("blur", e);
    };
    var handleClick = function handleClick2(e) {
      focus();
      var newChecked = checkedStatus.value ? props.unCheckedValue : props.checkedValue;
      setChecked(newChecked, e);
      emit("click", newChecked, e);
    };
    var handleKeyDown = function handleKeyDown2(e) {
      if (e.keyCode === KeyCode.LEFT) {
        setChecked(props.unCheckedValue, e);
      } else if (e.keyCode === KeyCode.RIGHT) {
        setChecked(props.checkedValue, e);
      }
      emit("keydown", e);
    };
    var handleMouseUp = function handleMouseUp2(e) {
      var _a;
      (_a = refSwitchNode.value) === null || _a === void 0 ? void 0 : _a.blur();
      emit("mouseup", e);
    };
    var classNames = computed(function() {
      var _ref2;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-small"), size.value === "small"), _defineProperty(_ref2, "".concat(prefixCls.value, "-loading"), props.loading), _defineProperty(_ref2, "".concat(prefixCls.value, "-checked"), checkedStatus.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-disabled"), props.disabled), _defineProperty(_ref2, prefixCls.value, true), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _ref2;
    });
    return function() {
      var _a;
      return createVNode(Wave, {
        "insertExtraNode": true
      }, {
        default: function _default() {
          return [createVNode("button", _objectSpread2(_objectSpread2(_objectSpread2({}, omit(props, ["prefixCls", "checkedChildren", "unCheckedChildren", "checked", "autofocus", "checkedValue", "unCheckedValue", "id", "onChange", "onUpdate:checked"])), attrs), {}, {
            "id": (_a = props.id) !== null && _a !== void 0 ? _a : formItemContext.id.value,
            "onKeydown": handleKeyDown,
            "onClick": handleClick,
            "onBlur": handleBlur,
            "onMouseup": handleMouseUp,
            "type": "button",
            "role": "switch",
            "aria-checked": checked.value,
            "disabled": props.disabled || props.loading,
            "class": [attrs.class, classNames.value],
            "ref": refSwitchNode
          }), [createVNode("div", {
            "class": "".concat(prefixCls.value, "-handle")
          }, [props.loading ? createVNode(LoadingOutlined, {
            "class": "".concat(prefixCls.value, "-loading-icon")
          }, null) : null]), createVNode("span", {
            "class": "".concat(prefixCls.value, "-inner")
          }, [checkedStatus.value ? getPropsSlot(slots, props, "checkedChildren") : getPropsSlot(slots, props, "unCheckedChildren")])])];
        }
      });
    };
  }
});
var __unplugin_components_6 = withInstall(Switch);
export { __unplugin_components_6 as _ };
