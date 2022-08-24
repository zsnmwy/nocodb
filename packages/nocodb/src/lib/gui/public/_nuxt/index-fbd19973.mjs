import { B as Button } from "./button-b581df9e.mjs";
import { d as defineComponent, aE as useConfigInject, e as computed, aJ as _defineProperty, g as createVNode, aM as flattenChildren } from "./entry-3fb260b7.mjs";
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var UnreachableException = /* @__PURE__ */ _createClass(function UnreachableException2(value) {
  _classCallCheck(this, UnreachableException2);
  this.error = new Error("unreachable case: ".concat(JSON.stringify(value)));
});
var buttonGroupProps = function buttonGroupProps2() {
  return {
    prefixCls: String,
    size: {
      type: String
    }
  };
};
var ButtonGroup = defineComponent({
  name: "AButtonGroup",
  props: buttonGroupProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("btn-group", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var classes = computed(function() {
      var _ref2;
      var size = props.size;
      var sizeCls = "";
      switch (size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          console.warn(new UnreachableException(size).error);
      }
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(sizeCls), sizeCls), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _ref2;
    });
    return function() {
      var _a;
      return createVNode("div", {
        "class": classes.value
      }, [flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});
Button.Group = ButtonGroup;
Button.install = function(app) {
  app.component(Button.name, Button);
  app.component(ButtonGroup.name, ButtonGroup);
  return app;
};
export { _createClass as _, _classCallCheck as a };
