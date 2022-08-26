import { aH as PropTypes, d as defineComponent, g as createVNode, ch as LoadingOutlined, aP as Transition, P as nextTick, bj as initDefaultProps, aE as useConfigInject, r as ref, e as computed, w as watch, a6 as watchEffect, s as onMounted, ci as onUpdated, a_ as onBeforeUnmount, aM as flattenChildren, aC as _extends, aJ as _defineProperty, aK as _objectSpread2, aN as _typeof, cj as Text, bf as devWarning } from "./entry-649fbf77.mjs";
import { W as Wave } from "./wave-1595a9a4.mjs";
function convertLegacyProps(type) {
  if (type === "danger") {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
var buttonProps = function buttonProps2() {
  return {
    prefixCls: String,
    type: String,
    htmlType: {
      type: String,
      default: "button"
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    loading: {
      type: [Boolean, Object],
      default: function _default() {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    ghost: {
      type: Boolean,
      default: void 0
    },
    block: {
      type: Boolean,
      default: void 0
    },
    danger: {
      type: Boolean,
      default: void 0
    },
    icon: PropTypes.any,
    href: String,
    target: String,
    title: String,
    onClick: {
      type: Function
    },
    onMousedown: {
      type: Function
    }
  };
};
var buttonTypes = buttonProps;
var getCollapsedWidth = function getCollapsedWidth2(node) {
  if (node) {
    node.style.width = "0px";
    node.style.opacity = "0";
    node.style.transform = "scale(0)";
  }
};
var getRealWidth = function getRealWidth2(node) {
  nextTick(function() {
    if (node) {
      node.style.width = "".concat(node.scrollWidth, "px");
      node.style.opacity = "1";
      node.style.transform = "scale(1)";
    }
  });
};
var resetStyle = function resetStyle2(node) {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};
var LoadingIcon = defineComponent({
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup: function setup(props) {
    return function() {
      var existIcon = props.existIcon, prefixCls = props.prefixCls, loading = props.loading;
      if (existIcon) {
        return createVNode("span", {
          "class": "".concat(prefixCls, "-loading-icon")
        }, [createVNode(LoadingOutlined, null, null)]);
      }
      var visible = !!loading;
      return createVNode(Transition, {
        "name": "".concat(prefixCls, "-loading-icon-motion"),
        "onBeforeEnter": getCollapsedWidth,
        "onEnter": getRealWidth,
        "onAfterEnter": resetStyle,
        "onBeforeLeave": getRealWidth,
        "onLeave": function onLeave(node) {
          setTimeout(function() {
            getCollapsedWidth(node);
          });
        },
        "onAfterLeave": resetStyle
      }, {
        default: function _default() {
          return [visible ? createVNode("span", {
            "class": "".concat(prefixCls, "-loading-icon")
          }, [createVNode(LoadingOutlined, null, null)]) : null];
        }
      });
    };
  }
});
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isUnborderedButtonType(type) {
  return type === "text" || type === "link";
}
var Button = defineComponent({
  name: "AButton",
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps(buttonTypes(), {
    type: "default"
  }),
  slots: ["icon"],
  setup: function setup2(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, emit = _ref.emit;
    var _useConfigInject = useConfigInject("btn", props), prefixCls = _useConfigInject.prefixCls, autoInsertSpaceInButton = _useConfigInject.autoInsertSpaceInButton, direction = _useConfigInject.direction, size = _useConfigInject.size;
    var buttonNodeRef = ref(null);
    var delayTimeoutRef = ref(void 0);
    var isNeedInserted = false;
    var innerLoading = ref(false);
    var hasTwoCNChar = ref(false);
    var autoInsertSpace = computed(function() {
      return autoInsertSpaceInButton.value !== false;
    });
    var loadingOrDelay = computed(function() {
      return _typeof(props.loading) === "object" && props.loading.delay ? props.loading.delay || true : !!props.loading;
    });
    watch(loadingOrDelay, function(val) {
      clearTimeout(delayTimeoutRef.value);
      if (typeof loadingOrDelay.value === "number") {
        delayTimeoutRef.value = setTimeout(function() {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    var classes = computed(function() {
      var _ref2;
      var type = props.type, _props$shape = props.shape, shape = _props$shape === void 0 ? "default" : _props$shape, ghost = props.ghost, block = props.block, danger = props.danger;
      var pre = prefixCls.value;
      var sizeClassNameMap = {
        large: "lg",
        small: "sm",
        middle: void 0
      };
      var sizeFullname = size.value;
      var sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || "" : "";
      return _ref2 = {}, _defineProperty(_ref2, "".concat(pre), true), _defineProperty(_ref2, "".concat(pre, "-").concat(type), type), _defineProperty(_ref2, "".concat(pre, "-").concat(shape), shape !== "default" && shape), _defineProperty(_ref2, "".concat(pre, "-").concat(sizeCls), sizeCls), _defineProperty(_ref2, "".concat(pre, "-loading"), innerLoading.value), _defineProperty(_ref2, "".concat(pre, "-background-ghost"), ghost && !isUnborderedButtonType(type)), _defineProperty(_ref2, "".concat(pre, "-two-chinese-chars"), hasTwoCNChar.value && autoInsertSpace.value), _defineProperty(_ref2, "".concat(pre, "-block"), block), _defineProperty(_ref2, "".concat(pre, "-dangerous"), !!danger), _defineProperty(_ref2, "".concat(pre, "-rtl"), direction.value === "rtl"), _ref2;
    });
    var fixTwoCNChar = function fixTwoCNChar2() {
      var node = buttonNodeRef.value;
      if (!node || autoInsertSpaceInButton.value === false) {
        return;
      }
      var buttonText = node.textContent;
      if (isNeedInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar.value) {
          hasTwoCNChar.value = true;
        }
      } else if (hasTwoCNChar.value) {
        hasTwoCNChar.value = false;
      }
    };
    var handleClick = function handleClick2(event) {
      if (innerLoading.value || props.disabled) {
        event.preventDefault();
        return;
      }
      emit("click", event);
    };
    var insertSpace = function insertSpace2(child, needInserted) {
      var SPACE = needInserted ? " " : "";
      if (child.type === Text) {
        var text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split("").join(SPACE);
        }
        return createVNode("span", null, [text]);
      }
      return child;
    };
    watchEffect(function() {
      devWarning(!(props.ghost && isUnborderedButtonType(props.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    });
    onMounted(fixTwoCNChar);
    onUpdated(fixTwoCNChar);
    onBeforeUnmount(function() {
      delayTimeoutRef.value && clearTimeout(delayTimeoutRef.value);
    });
    return function() {
      var _a, _b;
      var _props$icon = props.icon, icon = _props$icon === void 0 ? (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$icon;
      var children = flattenChildren((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
      isNeedInserted = children.length === 1 && !icon && !isUnborderedButtonType(props.type);
      var type = props.type, htmlType = props.htmlType, disabled = props.disabled, href = props.href, title = props.title, target = props.target, onMousedown = props.onMousedown;
      var iconType = innerLoading.value ? "loading" : icon;
      var buttonProps3 = _extends(_extends({}, attrs), {
        title,
        disabled,
        class: [classes.value, attrs.class, _defineProperty({}, "".concat(prefixCls.value, "-icon-only"), children.length === 0 && !!iconType)],
        onClick: handleClick,
        onMousedown
      });
      if (!disabled) {
        delete buttonProps3.disabled;
      }
      var iconNode = icon && !innerLoading.value ? icon : createVNode(LoadingIcon, {
        "existIcon": !!icon,
        "prefixCls": prefixCls.value,
        "loading": !!innerLoading.value
      }, null);
      var kids = children.map(function(child) {
        return insertSpace(child, isNeedInserted && autoInsertSpace.value);
      });
      if (href !== void 0) {
        return createVNode("a", _objectSpread2(_objectSpread2({}, buttonProps3), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]);
      }
      var buttonNode = createVNode("button", _objectSpread2(_objectSpread2({}, buttonProps3), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);
      if (isUnborderedButtonType(type)) {
        return buttonNode;
      }
      return createVNode(Wave, {
        "ref": "wave",
        "disabled": !!innerLoading.value
      }, {
        default: function _default() {
          return [buttonNode];
        }
      });
    };
  }
});
export { Button as B, buttonTypes as b, convertLegacyProps as c };
