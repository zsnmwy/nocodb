import { g as createVNode, bd as AntdIcon, d as defineComponent, aC as _extends, r as ref, aE as useConfigInject, e as computed, aG as cloneElement, c9 as isValidElement, aD as classNames, aJ as _defineProperty$2, aK as _objectSpread2 } from "./entry-3fb260b7.mjs";
import { i as inputProps, I as Input } from "./Input-131cc256.mjs";
import { o as omit } from "./omit-e185a391.mjs";
var EyeOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
var EyeOutlinedSvg = EyeOutlined$2;
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var EyeOutlined = function EyeOutlined2(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": EyeOutlinedSvg
  }), null);
};
EyeOutlined.displayName = "EyeOutlined";
EyeOutlined.inheritAttrs = false;
var EyeOutlined$1 = EyeOutlined;
var EyeInvisibleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, "name": "eye-invisible", "theme": "outlined" };
var EyeInvisibleOutlinedSvg = EyeInvisibleOutlined$2;
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
var EyeInvisibleOutlined = function EyeInvisibleOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": EyeInvisibleOutlinedSvg
  }), null);
};
EyeInvisibleOutlined.displayName = "EyeInvisibleOutlined";
EyeInvisibleOutlined.inheritAttrs = false;
var EyeInvisibleOutlined$1 = EyeInvisibleOutlined;
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
var ActionMap = {
  click: "onClick",
  hover: "onMouseover"
};
var defaultIconRender = function defaultIconRender2(visible) {
  return visible ? createVNode(EyeOutlined$1, null, null) : createVNode(EyeInvisibleOutlined$1, null, null);
};
var __unplugin_components_3 = defineComponent({
  name: "AInputPassword",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps()), {
    prefixCls: String,
    inputPrefixCls: String,
    action: {
      type: String,
      default: "click"
    },
    visibilityToggle: {
      type: Boolean,
      default: true
    },
    iconRender: Function
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var visible = ref(false);
    var onVisibleChange = function onVisibleChange2() {
      var disabled = props.disabled;
      if (disabled) {
        return;
      }
      visible.value = !visible.value;
    };
    var inputRef = ref();
    var focus = function focus2() {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var blur = function blur2() {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    var getIcon = function getIcon2(prefixCls2) {
      var _iconProps;
      var action = props.action, _props$iconRender = props.iconRender, iconRender = _props$iconRender === void 0 ? slots.iconRender || defaultIconRender : _props$iconRender;
      var iconTrigger = ActionMap[action] || "";
      var icon = iconRender(visible.value);
      var iconProps = (_iconProps = {}, _defineProperty$2(_iconProps, iconTrigger, onVisibleChange), _defineProperty$2(_iconProps, "class", "".concat(prefixCls2, "-icon")), _defineProperty$2(_iconProps, "key", "passwordIcon"), _defineProperty$2(_iconProps, "onMousedown", function onMousedown(e) {
        e.preventDefault();
      }), _defineProperty$2(_iconProps, "onMouseup", function onMouseup(e) {
        e.preventDefault();
      }), _iconProps);
      return cloneElement(isValidElement(icon) ? icon : createVNode("span", null, [icon]), iconProps);
    };
    var _useConfigInject = useConfigInject("input-password", props), prefixCls = _useConfigInject.prefixCls, getPrefixCls = _useConfigInject.getPrefixCls;
    var inputPrefixCls = computed(function() {
      return getPrefixCls("input", props.inputPrefixCls);
    });
    var renderPassword = function renderPassword2() {
      var size = props.size, visibilityToggle = props.visibilityToggle, restProps = __rest(props, ["size", "visibilityToggle"]);
      var suffixIcon = visibilityToggle && getIcon(prefixCls.value);
      var inputClassName = classNames(prefixCls.value, attrs.class, _defineProperty$2({}, "".concat(prefixCls.value, "-").concat(size), !!size));
      var omittedProps = _extends(_extends(_extends({}, omit(restProps, ["suffix", "iconRender", "action"])), attrs), {
        type: visible.value ? "text" : "password",
        class: inputClassName,
        prefixCls: inputPrefixCls.value,
        suffix: suffixIcon
      });
      if (size) {
        omittedProps.size = size;
      }
      return createVNode(Input, _objectSpread2({
        "ref": inputRef
      }, omittedProps), slots);
    };
    return function() {
      return renderPassword();
    };
  }
});
export { EyeOutlined$1 as E, __unplugin_components_3 as _ };
