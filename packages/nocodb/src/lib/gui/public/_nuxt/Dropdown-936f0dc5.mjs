import { d as defineComponent, aH as PropTypes, r as ref, w as watch, e as computed, g as createVNode, aK as _objectSpread2, aD as classNames, aJ as _defineProperty, b1 as Trigger, aG as cloneElement, F as Fragment } from "./entry-3fb260b7.mjs";
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  }
};
var placements$1 = placements;
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
var Dropdown = defineComponent({
  props: {
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    arrow: {
      type: Boolean,
      default: false
    },
    prefixCls: PropTypes.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: PropTypes.string.def(""),
    openClassName: String,
    animation: PropTypes.any,
    align: PropTypes.object,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    placement: PropTypes.string.def("bottomLeft"),
    overlay: PropTypes.any,
    trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).def("hover"),
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    showAction: PropTypes.array,
    hideAction: PropTypes.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    mouseEnterDelay: PropTypes.number.def(0.15),
    mouseLeaveDelay: PropTypes.number.def(0.1)
  },
  emits: ["visibleChange", "overlayClick"],
  slots: ["overlay"],
  setup: function setup(props, _ref) {
    var slots = _ref.slots, emit = _ref.emit, expose = _ref.expose;
    var triggerVisible = ref(!!props.visible);
    watch(function() {
      return props.visible;
    }, function(val) {
      if (val !== void 0) {
        triggerVisible.value = val;
      }
    });
    var triggerRef = ref();
    expose({
      triggerRef
    });
    var onClick = function onClick2(e) {
      if (props.visible === void 0) {
        triggerVisible.value = false;
      }
      emit("overlayClick", e);
    };
    var onVisibleChange = function onVisibleChange2(visible) {
      if (props.visible === void 0) {
        triggerVisible.value = visible;
      }
      emit("visibleChange", visible);
    };
    var getMenuElement = function getMenuElement2() {
      var _a;
      var overlayElement = (_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots);
      var extraOverlayProps = {
        prefixCls: "".concat(props.prefixCls, "-menu"),
        onClick,
        getPopupContainer: function getPopupContainer() {
          return triggerRef.value.getPopupDomNode();
        }
      };
      return createVNode(Fragment, null, [props.arrow && createVNode("div", {
        "class": "".concat(props.prefixCls, "-arrow")
      }, null), cloneElement(overlayElement, extraOverlayProps, false)]);
    };
    var minOverlayWidthMatchTrigger = computed(function() {
      var _props$minOverlayWidt = props.minOverlayWidthMatchTrigger, matchTrigger = _props$minOverlayWidt === void 0 ? !props.alignPoint : _props$minOverlayWidt;
      return matchTrigger;
    });
    var renderChildren = function renderChildren2() {
      var _a;
      var children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      return triggerVisible.value && children ? cloneElement(children[0], {
        class: props.openClassName || "".concat(props.prefixCls, "-open")
      }, false) : children;
    };
    var triggerHideAction = computed(function() {
      if (!props.hideAction && props.trigger.indexOf("contextmenu") !== -1) {
        return ["click"];
      }
      return props.hideAction;
    });
    return function() {
      var prefixCls = props.prefixCls, arrow = props.arrow, showAction = props.showAction, overlayStyle = props.overlayStyle, trigger = props.trigger, placement = props.placement, align = props.align, getPopupContainer = props.getPopupContainer, transitionName = props.transitionName, animation = props.animation, overlayClassName = props.overlayClassName, otherProps = __rest(props, ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"]);
      return createVNode(Trigger, _objectSpread2(_objectSpread2({}, otherProps), {}, {
        "prefixCls": prefixCls,
        "ref": triggerRef,
        "popupClassName": classNames(overlayClassName, _defineProperty({}, "".concat(prefixCls, "-show-arrow"), arrow)),
        "popupStyle": overlayStyle,
        "builtinPlacements": placements$1,
        "action": trigger,
        "showAction": showAction,
        "hideAction": triggerHideAction.value || [],
        "popupPlacement": placement,
        "popupAlign": align,
        "popupTransitionName": transitionName,
        "popupAnimation": animation,
        "popupVisible": triggerVisible.value,
        "stretch": minOverlayWidthMatchTrigger.value ? "minWidth" : "",
        "onPopupVisibleChange": onVisibleChange,
        "getPopupContainer": getPopupContainer
      }), {
        popup: getMenuElement,
        default: renderChildren
      });
    };
  }
});
export { Dropdown as D };
