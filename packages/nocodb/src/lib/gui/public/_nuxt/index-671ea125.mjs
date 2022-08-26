import { b9 as withInstall, c8 as tuple, d as defineComponent, aH as PropTypes, aE as useConfigInject, r as ref, aL as getPropsSlot, aD as classNames, aJ as _defineProperty, g as createVNode, bc as CloseOutlined, c9 as isValidElement, aG as cloneElement, aO as getTransitionProps, B as withDirectives, aq as vShow, aK as _objectSpread2, aP as Transition, ca as CheckCircleFilled, cb as InfoCircleFilled, bi as CloseCircleFilled, cc as ExclamationCircleFilled, cd as CheckCircleOutlined, ce as InfoCircleOutlined, cf as CloseCircleOutlined, cg as ExclamationCircleOutlined } from "./entry-61ceea7f.mjs";
var iconMapFilled = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled
};
var iconMapOutlined = {
  success: CheckCircleOutlined,
  info: InfoCircleOutlined,
  error: CloseCircleOutlined,
  warning: ExclamationCircleOutlined
};
var AlertTypes = tuple("success", "info", "warning", "error");
var alertProps = function alertProps2() {
  return {
    type: PropTypes.oneOf(AlertTypes),
    closable: {
      type: Boolean,
      default: void 0
    },
    closeText: PropTypes.any,
    message: PropTypes.any,
    description: PropTypes.any,
    afterClose: Function,
    showIcon: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    banner: {
      type: Boolean,
      default: void 0
    },
    icon: PropTypes.any,
    closeIcon: PropTypes.any,
    onClose: Function
  };
};
var Alert = defineComponent({
  name: "AAlert",
  inheritAttrs: false,
  props: alertProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots, emit = _ref.emit, attrs = _ref.attrs, expose = _ref.expose;
    var _useConfigInject = useConfigInject("alert", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var closing = ref(false);
    var closed = ref(false);
    var alertNode = ref();
    var handleClose = function handleClose2(e) {
      e.preventDefault();
      var dom = alertNode.value;
      dom.style.height = "".concat(dom.offsetHeight, "px");
      dom.style.height = "".concat(dom.offsetHeight, "px");
      closing.value = true;
      emit("close", e);
    };
    var animationEnd = function animationEnd2() {
      var _a;
      closing.value = false;
      closed.value = true;
      (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
    };
    expose({
      animationEnd
    });
    var motionStyle = ref({});
    return function() {
      var _classNames;
      var _a;
      var banner = props.banner, _props$closeIcon = props.closeIcon, customCloseIcon = _props$closeIcon === void 0 ? (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$closeIcon;
      var closable = props.closable, type = props.type, showIcon = props.showIcon;
      var closeText = getPropsSlot(slots, props, "closeText");
      var description = getPropsSlot(slots, props, "description");
      var message = getPropsSlot(slots, props, "message");
      var icon = getPropsSlot(slots, props, "icon");
      showIcon = banner && showIcon === void 0 ? true : showIcon;
      type = banner && type === void 0 ? "warning" : type || "info";
      var IconType = (description ? iconMapOutlined : iconMapFilled)[type] || null;
      if (closeText) {
        closable = true;
      }
      var prefixClsValue = prefixCls.value;
      var alertCls = classNames(prefixClsValue, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixClsValue, "-").concat(type), true), _defineProperty(_classNames, "".concat(prefixClsValue, "-closing"), closing.value), _defineProperty(_classNames, "".concat(prefixClsValue, "-with-description"), !!description), _defineProperty(_classNames, "".concat(prefixClsValue, "-no-icon"), !showIcon), _defineProperty(_classNames, "".concat(prefixClsValue, "-banner"), !!banner), _defineProperty(_classNames, "".concat(prefixClsValue, "-closable"), closable), _defineProperty(_classNames, "".concat(prefixClsValue, "-rtl"), direction.value === "rtl"), _classNames));
      var closeIcon = closable ? createVNode("button", {
        "type": "button",
        "onClick": handleClose,
        "class": "".concat(prefixClsValue, "-close-icon"),
        "tabindex": 0
      }, [closeText ? createVNode("span", {
        "class": "".concat(prefixClsValue, "-close-text")
      }, [closeText]) : customCloseIcon === void 0 ? createVNode(CloseOutlined, null, null) : customCloseIcon]) : null;
      var iconNode = icon && (isValidElement(icon) ? cloneElement(icon, {
        class: "".concat(prefixClsValue, "-icon")
      }) : createVNode("span", {
        "class": "".concat(prefixClsValue, "-icon")
      }, [icon])) || createVNode(IconType, {
        "class": "".concat(prefixClsValue, "-icon")
      }, null);
      var transitionProps = getTransitionProps("".concat(prefixClsValue, "-motion"), {
        appear: false,
        css: true,
        onAfterLeave: animationEnd,
        onBeforeLeave: function onBeforeLeave(node) {
          node.style.maxHeight = "".concat(node.offsetHeight, "px");
        },
        onLeave: function onLeave(node) {
          node.style.maxHeight = "0px";
        }
      });
      return closed.value ? null : createVNode(Transition, transitionProps, {
        default: function _default() {
          return [withDirectives(createVNode("div", _objectSpread2(_objectSpread2({
            "role": "alert"
          }, attrs), {}, {
            "style": [attrs.style, motionStyle.value],
            "class": [attrs.class, alertCls],
            "data-show": !closing.value,
            "ref": alertNode
          }), [showIcon ? iconNode : null, createVNode("div", {
            "class": "".concat(prefixClsValue, "-content")
          }, [message ? createVNode("div", {
            "class": "".concat(prefixClsValue, "-message")
          }, [message]) : null, description ? createVNode("div", {
            "class": "".concat(prefixClsValue, "-description")
          }, [description]) : null]), closeIcon]), [[vShow, !closing.value]])];
        }
      });
    };
  }
});
var __unplugin_components_0 = withInstall(Alert);
export { __unplugin_components_0 as _ };
