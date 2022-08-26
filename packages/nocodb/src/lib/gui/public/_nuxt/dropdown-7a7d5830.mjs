import { aH as PropTypes, aC as _extends, d as defineComponent, bj as initDefaultProps, aE as useConfigInject, g as createVNode, ck as EllipsisOutlined, aK as _objectSpread2, aD as classNames, e as computed, bf as devWarning, aG as cloneElement, aJ as _defineProperty, cl as getPlacements, aN as _typeof, c9 as isValidElement } from "./entry-649fbf77.mjs";
import { D as Dropdown$2 } from "./Dropdown-e42ed6e8.mjs";
import "./index-a2900c1e.mjs";
import { b as buttonTypes, B as Button } from "./button-65b4020b.mjs";
import { R as RightOutlined } from "./RightOutlined-d6864b4a.mjs";
import { o as omit } from "./omit-52a539d6.mjs";
var dropdownProps = function dropdownProps2() {
  return {
    arrow: {
      type: [Boolean, Object],
      default: void 0
    },
    trigger: {
      type: [Array, String]
    },
    overlay: PropTypes.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    align: {
      type: Object
    },
    getPopupContainer: Function,
    prefixCls: String,
    transitionName: String,
    placement: String,
    overlayClassName: String,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    forceRender: {
      type: Boolean,
      default: void 0
    },
    mouseEnterDelay: Number,
    mouseLeaveDelay: Number,
    openClassName: String,
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    destroyPopupOnHide: {
      type: Boolean,
      default: void 0
    },
    onVisibleChange: {
      type: Function
    },
    "onUpdate:visible": {
      type: Function
    }
  };
};
var buttonTypesProps = buttonTypes();
var dropdownButtonProps = function dropdownButtonProps2() {
  return _extends(_extends({}, dropdownProps()), {
    type: buttonTypesProps.type,
    size: String,
    htmlType: buttonTypesProps.htmlType,
    href: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    icon: PropTypes.any,
    title: String,
    loading: buttonTypesProps.loading,
    onClick: {
      type: Function
    }
  });
};
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
var ButtonGroup = Button.Group;
var DropdownButton = defineComponent({
  name: "ADropdownButton",
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps(dropdownButtonProps(), {
    trigger: "hover",
    placement: "bottomRight",
    type: "default"
  }),
  slots: ["icon", "leftButton", "rightButton", "overlay"],
  setup: function setup(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, emit = _ref.emit;
    var handleVisibleChange = function handleVisibleChange2(val) {
      emit("update:visible", val);
      emit("visibleChange", val);
    };
    var _useConfigInject = useConfigInject("dropdown-button", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, getPopupContainer = _useConfigInject.getPopupContainer;
    return function() {
      var _a, _b;
      var _c = _extends(_extends({}, props), attrs), _c$type = _c.type, type = _c$type === void 0 ? "default" : _c$type, disabled = _c.disabled, loading = _c.loading, htmlType = _c.htmlType, _c$class = _c.class, className = _c$class === void 0 ? "" : _c$class, _c$overlay = _c.overlay, _overlay = _c$overlay === void 0 ? (_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots) : _c$overlay, trigger = _c.trigger, align = _c.align, visible = _c.visible;
      _c.onVisibleChange;
      var _c$placement = _c.placement, placement = _c$placement === void 0 ? direction.value === "rtl" ? "bottomLeft" : "bottomRight" : _c$placement, href = _c.href, title = _c.title, _c$icon = _c.icon, icon = _c$icon === void 0 ? ((_b = slots.icon) === null || _b === void 0 ? void 0 : _b.call(slots)) || createVNode(EllipsisOutlined, null, null) : _c$icon, mouseEnterDelay = _c.mouseEnterDelay, mouseLeaveDelay = _c.mouseLeaveDelay, overlayClassName = _c.overlayClassName, overlayStyle = _c.overlayStyle, destroyPopupOnHide = _c.destroyPopupOnHide, onClick = _c.onClick;
      _c["onUpdate:visible"];
      var restProps = __rest(_c, ["type", "disabled", "loading", "htmlType", "class", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "href", "title", "icon", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "onClick", "onUpdate:visible"]);
      var dropdownProps3 = {
        align,
        disabled,
        trigger: disabled ? [] : trigger,
        placement,
        getPopupContainer: getPopupContainer.value,
        onVisibleChange: handleVisibleChange,
        mouseEnterDelay,
        mouseLeaveDelay,
        visible,
        overlayClassName,
        overlayStyle,
        destroyPopupOnHide
      };
      var leftButton = createVNode(Button, {
        "type": type,
        "disabled": disabled,
        "loading": loading,
        "onClick": onClick,
        "htmlType": htmlType,
        "href": href,
        "title": title
      }, {
        default: slots.default
      });
      var rightButton = createVNode(Button, {
        "type": type,
        "icon": icon
      }, null);
      return createVNode(ButtonGroup, _objectSpread2(_objectSpread2({}, restProps), {}, {
        "class": classNames(prefixCls.value, className)
      }), {
        default: function _default() {
          return [slots.leftButton ? slots.leftButton({
            button: leftButton
          }) : leftButton, createVNode(Dropdown$1, dropdownProps3, {
            default: function _default2() {
              return [slots.rightButton ? slots.rightButton({
                button: rightButton
              }) : rightButton];
            },
            overlay: function overlay() {
              return _overlay;
            }
          })];
        }
      });
    };
  }
});
var Dropdown = defineComponent({
  name: "ADropdown",
  inheritAttrs: false,
  props: initDefaultProps(dropdownProps(), {
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: "bottomLeft",
    trigger: "hover"
  }),
  slots: ["overlay"],
  setup: function setup2(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, emit = _ref.emit;
    var _useConfigInject = useConfigInject("dropdown", props), prefixCls = _useConfigInject.prefixCls, rootPrefixCls = _useConfigInject.rootPrefixCls, direction = _useConfigInject.direction, getPopupContainer = _useConfigInject.getPopupContainer;
    var transitionName = computed(function() {
      var _props$placement = props.placement, placement2 = _props$placement === void 0 ? "" : _props$placement, transitionName2 = props.transitionName;
      if (transitionName2 !== void 0) {
        return transitionName2;
      }
      if (placement2.indexOf("top") >= 0) {
        return "".concat(rootPrefixCls.value, "-slide-down");
      }
      return "".concat(rootPrefixCls.value, "-slide-up");
    });
    var renderOverlay = function renderOverlay2() {
      var _a, _b, _c;
      var overlay = props.overlay || ((_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots));
      var overlayNode = Array.isArray(overlay) ? overlay[0] : overlay;
      if (!overlayNode)
        return null;
      var overlayProps = overlayNode.props || {};
      devWarning(!overlayProps.mode || overlayProps.mode === "vertical", "Dropdown", 'mode="'.concat(overlayProps.mode, `" is not supported for Dropdown's Menu.`));
      var _overlayProps$selecta = overlayProps.selectable, selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta, _overlayProps$expandI = overlayProps.expandIcon, expandIcon = _overlayProps$expandI === void 0 ? (_c = (_b = overlayNode.children) === null || _b === void 0 ? void 0 : _b.expandIcon) === null || _c === void 0 ? void 0 : _c.call(_b) : _overlayProps$expandI;
      var overlayNodeExpandIcon = typeof expandIcon !== "undefined" && isValidElement(expandIcon) ? expandIcon : createVNode("span", {
        "class": "".concat(prefixCls.value, "-menu-submenu-arrow")
      }, [createVNode(RightOutlined, {
        "class": "".concat(prefixCls.value, "-menu-submenu-arrow-icon")
      }, null)]);
      var fixedModeOverlay = isValidElement(overlayNode) ? cloneElement(overlayNode, {
        mode: "vertical",
        selectable,
        expandIcon: function expandIcon2() {
          return overlayNodeExpandIcon;
        }
      }) : overlayNode;
      return fixedModeOverlay;
    };
    var placement = computed(function() {
      var placement2 = props.placement;
      if (!placement2) {
        return direction.value === "rtl" ? "bottomRight" : "bottomLeft";
      }
      if (placement2.includes("Center")) {
        var newPlacement = placement2.slice(0, placement2.indexOf("Center"));
        devWarning(!placement2.includes("Center"), "Dropdown", "You are using '".concat(placement2, "' placement in Dropdown, which is deprecated. Try to use '").concat(newPlacement, "' instead."));
        return newPlacement;
      }
      return placement2;
    });
    var handleVisibleChange = function handleVisibleChange2(val) {
      emit("update:visible", val);
      emit("visibleChange", val);
    };
    return function() {
      var _a, _b;
      var arrow = props.arrow, trigger = props.trigger, disabled = props.disabled, overlayClassName = props.overlayClassName;
      var child = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
      var dropdownTrigger = cloneElement(child, _extends({
        class: classNames((_b = child === null || child === void 0 ? void 0 : child.props) === null || _b === void 0 ? void 0 : _b.class, _defineProperty({}, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), "".concat(prefixCls.value, "-trigger"))
      }, disabled ? {
        disabled
      } : {}));
      var overlayClassNameCustomized = classNames(overlayClassName, _defineProperty({}, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"));
      var triggerActions = disabled ? [] : trigger;
      var alignPoint;
      if (triggerActions && triggerActions.indexOf("contextmenu") !== -1) {
        alignPoint = true;
      }
      var builtinPlacements = getPlacements({
        arrowPointAtCenter: _typeof(arrow) === "object" && arrow.pointAtCenter,
        autoAdjustOverflow: true
      });
      var dropdownProps3 = omit(_extends(_extends(_extends({}, props), attrs), {
        builtinPlacements,
        overlayClassName: overlayClassNameCustomized,
        arrow,
        alignPoint,
        prefixCls: prefixCls.value,
        getPopupContainer: getPopupContainer.value,
        transitionName: transitionName.value,
        trigger: triggerActions,
        onVisibleChange: handleVisibleChange,
        placement: placement.value
      }), ["overlay", "onUpdate:visible"]);
      return createVNode(Dropdown$2, dropdownProps3, {
        default: function _default() {
          return [dropdownTrigger];
        },
        overlay: renderOverlay
      });
    };
  }
});
Dropdown.Button = DropdownButton;
var Dropdown$1 = Dropdown;
export { Dropdown$1 as D, DropdownButton as a };
