import { aH as PropTypes, c8 as tuple, d as defineComponent, bj as initDefaultProps, cx as collapseMotion, r as ref, cU as firstNotUndefined, w as watch, aE as useConfigInject, e as computed, aD as classNames, aJ as _defineProperty, g as createVNode, aM as flattenChildren, aK as _objectSpread2, cV as getDataAndAriaProps, aN as _typeof, c4 as isEmptyElement, aG as cloneElement, c9 as isValidElement, aW as _toConsumableArray, a6 as watchEffect, bf as devWarning, B as withDirectives, aq as vShow, aC as _extends, aP as Transition } from "./entry-3fb260b7.mjs";
import { R as RightOutlined } from "./RightOutlined-bc158d3e.mjs";
var collapseProps = function collapseProps2() {
  return {
    prefixCls: String,
    activeKey: {
      type: [Array, Number, String]
    },
    defaultActiveKey: {
      type: [Array, Number, String]
    },
    accordion: {
      type: Boolean,
      default: void 0
    },
    destroyInactivePanel: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: void 0
    },
    expandIcon: Function,
    openAnimation: PropTypes.object,
    expandIconPosition: PropTypes.oneOf(tuple("left", "right")),
    collapsible: {
      type: String
    },
    ghost: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    "onUpdate:activeKey": Function
  };
};
var collapsePanelProps = function collapsePanelProps2() {
  return {
    openAnimation: PropTypes.object,
    prefixCls: String,
    header: PropTypes.any,
    headerClass: String,
    showArrow: {
      type: Boolean,
      default: void 0
    },
    isActive: {
      type: Boolean,
      default: void 0
    },
    destroyInactivePanel: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    accordion: {
      type: Boolean,
      default: void 0
    },
    forceRender: {
      type: Boolean,
      default: void 0
    },
    expandIcon: Function,
    extra: PropTypes.any,
    panelKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    collapsible: {
      type: String
    },
    role: String,
    onItemClick: {
      type: Function
    }
  };
};
function getActiveKeysArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = _typeof(currentActiveKey);
    currentActiveKey = activeKeyType === "number" || activeKeyType === "string" ? [currentActiveKey] : [];
  }
  return currentActiveKey.map(function(key) {
    return String(key);
  });
}
var Collapse = defineComponent({
  name: "ACollapse",
  inheritAttrs: false,
  props: initDefaultProps(collapseProps(), {
    accordion: false,
    destroyInactivePanel: false,
    bordered: true,
    openAnimation: collapseMotion("ant-motion-collapse", false),
    expandIconPosition: "left"
  }),
  slots: ["expandIcon"],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, emit = _ref.emit;
    var stateActiveKey = ref(getActiveKeysArray(firstNotUndefined([props.activeKey, props.defaultActiveKey])));
    watch(function() {
      return props.activeKey;
    }, function() {
      stateActiveKey.value = getActiveKeysArray(props.activeKey);
    }, {
      deep: true
    });
    var _useConfigInject = useConfigInject("collapse", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var iconPosition = computed(function() {
      var expandIconPosition = props.expandIconPosition;
      if (expandIconPosition !== void 0) {
        return expandIconPosition;
      }
      return direction.value === "rtl" ? "right" : "left";
    });
    var renderExpandIcon = function renderExpandIcon2(panelProps) {
      var _props$expandIcon = props.expandIcon, expandIcon = _props$expandIcon === void 0 ? slots.expandIcon : _props$expandIcon;
      var icon = expandIcon ? expandIcon(panelProps) : createVNode(RightOutlined, {
        "rotate": panelProps.isActive ? 90 : void 0
      }, null);
      return createVNode("div", null, [isValidElement(Array.isArray(expandIcon) ? icon[0] : icon) ? cloneElement(icon, {
        class: "".concat(prefixCls.value, "-arrow")
      }, false) : icon]);
    };
    var setActiveKey = function setActiveKey2(activeKey) {
      if (props.activeKey === void 0) {
        stateActiveKey.value = activeKey;
      }
      var newKey = props.accordion ? activeKey[0] : activeKey;
      emit("update:activeKey", newKey);
      emit("change", newKey);
    };
    var onClickItem = function onClickItem2(key) {
      var activeKey = stateActiveKey.value;
      if (props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = _toConsumableArray(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;
        if (isActive) {
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }
      setActiveKey(activeKey);
    };
    var getNewChild = function getNewChild2(child, index) {
      var _a, _b, _c;
      if (isEmptyElement(child))
        return;
      var activeKey = stateActiveKey.value;
      var accordion = props.accordion, destroyInactivePanel = props.destroyInactivePanel, collapsible = props.collapsible, openAnimation = props.openAnimation;
      var key = String((_a = child.key) !== null && _a !== void 0 ? _a : index);
      var _ref2 = child.props || {}, _ref2$header = _ref2.header, header = _ref2$header === void 0 ? (_c = (_b = child.children) === null || _b === void 0 ? void 0 : _b.header) === null || _c === void 0 ? void 0 : _c.call(_b) : _ref2$header, headerClass = _ref2.headerClass, childCollapsible = _ref2.collapsible, disabled = _ref2.disabled;
      var isActive = false;
      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }
      var mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
      if (disabled || disabled === "") {
        mergeCollapsible = "disabled";
      }
      var newProps = {
        key,
        panelKey: key,
        header,
        headerClass,
        isActive,
        prefixCls: prefixCls.value,
        destroyInactivePanel,
        openAnimation,
        accordion,
        onItemClick: mergeCollapsible === "disabled" ? null : onClickItem,
        expandIcon: renderExpandIcon,
        collapsible: mergeCollapsible
      };
      return cloneElement(child, newProps);
    };
    var getItems = function getItems2() {
      var _a;
      return flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)).map(getNewChild);
    };
    return function() {
      var _classNames;
      var accordion = props.accordion, bordered = props.bordered, ghost = props.ghost;
      var collapseClassName = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls.value, true), _defineProperty(_classNames, "".concat(prefixCls.value, "-borderless"), !bordered), _defineProperty(_classNames, "".concat(prefixCls.value, "-icon-position-").concat(iconPosition.value), true), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty(_classNames, "".concat(prefixCls.value, "-ghost"), !!ghost), _defineProperty(_classNames, attrs.class, !!attrs.class), _classNames));
      return createVNode("div", _objectSpread2(_objectSpread2({
        "class": collapseClassName
      }, getDataAndAriaProps(attrs)), {}, {
        "style": attrs.style,
        "role": accordion ? "tablist" : null
      }), [getItems()]);
    };
  }
});
var PanelContent = defineComponent({
  name: "PanelContent",
  props: collapsePanelProps(),
  setup: function setup2(props, _ref) {
    var slots = _ref.slots;
    var rendered = ref(false);
    watchEffect(function() {
      if (props.isActive || props.forceRender) {
        rendered.value = true;
      }
    });
    return function() {
      var _classNames;
      var _a;
      if (!rendered.value)
        return null;
      var prefixCls = props.prefixCls, isActive = props.isActive, role = props.role;
      return createVNode("div", {
        "ref": ref,
        "class": classNames("".concat(prefixCls, "-content"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-content-active"), isActive), _defineProperty(_classNames, "".concat(prefixCls, "-content-inactive"), !isActive), _classNames)),
        "role": role
      }, [createVNode("div", {
        "class": "".concat(prefixCls, "-content-box")
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
    };
  }
});
var __unplugin_components_9 = defineComponent({
  name: "ACollapsePanel",
  inheritAttrs: false,
  props: initDefaultProps(collapsePanelProps(), {
    showArrow: true,
    isActive: false,
    onItemClick: function onItemClick() {
    },
    headerClass: "",
    forceRender: false
  }),
  slots: ["expandIcon", "extra", "header"],
  setup: function setup3(props, _ref) {
    var slots = _ref.slots, emit = _ref.emit, attrs = _ref.attrs;
    devWarning(props.disabled === void 0, "Collapse.Panel", '`disabled` is deprecated. Please use `collapsible="disabled"` instead.');
    var _useConfigInject = useConfigInject("collapse", props), prefixCls = _useConfigInject.prefixCls;
    var handleItemClick = function handleItemClick2() {
      emit("itemClick", props.panelKey);
    };
    var handleKeyPress = function handleKeyPress2(e) {
      if (e.key === "Enter" || e.keyCode === 13 || e.which === 13) {
        handleItemClick();
      }
    };
    return function() {
      var _classNames, _classNames2;
      var _a, _b;
      var _props$header = props.header, header = _props$header === void 0 ? (_a = slots.header) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$header, headerClass = props.headerClass, isActive = props.isActive, showArrow = props.showArrow, destroyInactivePanel = props.destroyInactivePanel, accordion = props.accordion, forceRender = props.forceRender, openAnimation = props.openAnimation, _props$expandIcon = props.expandIcon, expandIcon = _props$expandIcon === void 0 ? slots.expandIcon : _props$expandIcon, _props$extra = props.extra, extra = _props$extra === void 0 ? (_b = slots.extra) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$extra, collapsible = props.collapsible;
      var disabled = collapsible === "disabled";
      var prefixClsValue = prefixCls.value;
      var headerCls = classNames("".concat(prefixClsValue, "-header"), (_classNames = {}, _defineProperty(_classNames, headerClass, headerClass), _defineProperty(_classNames, "".concat(prefixClsValue, "-header-collapsible-only"), collapsible === "header"), _classNames));
      var itemCls = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixClsValue, "-item"), true), _defineProperty(_classNames2, "".concat(prefixClsValue, "-item-active"), isActive), _defineProperty(_classNames2, "".concat(prefixClsValue, "-item-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixClsValue, "-no-arrow"), !showArrow), _defineProperty(_classNames2, "".concat(attrs.class), !!attrs.class), _classNames2));
      var icon = createVNode("i", {
        "class": "arrow"
      }, null);
      if (showArrow && typeof expandIcon === "function") {
        icon = expandIcon(props);
      }
      var panelContent = withDirectives(createVNode(PanelContent, {
        "prefixCls": prefixClsValue,
        "isActive": isActive,
        "forceRender": forceRender,
        "role": accordion ? "tabpanel" : null
      }, {
        default: slots.default
      }), [[vShow, isActive]]);
      var transitionProps = _extends({
        appear: false,
        css: false
      }, openAnimation);
      return createVNode("div", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": itemCls
      }), [createVNode("div", {
        "class": headerCls,
        "onClick": function onClick() {
          return collapsible !== "header" && handleItemClick();
        },
        "role": accordion ? "tab" : "button",
        "tabindex": disabled ? -1 : 0,
        "aria-expanded": isActive,
        "onKeypress": handleKeyPress
      }, [showArrow && icon, collapsible === "header" ? createVNode("span", {
        "onClick": handleItemClick,
        "class": "".concat(prefixClsValue, "-header-text")
      }, [header]) : header, extra && createVNode("div", {
        "class": "".concat(prefixClsValue, "-extra")
      }, [extra])]), createVNode(Transition, transitionProps, {
        default: function _default() {
          return [!destroyInactivePanel || isActive ? panelContent : null];
        }
      })]);
    };
  }
});
export { Collapse as C, __unplugin_components_9 as _ };
