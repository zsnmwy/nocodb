import { i as inputProps, I as Input } from "./Input-081ff014.mjs";
import { d as defineComponent, aE as useConfigInject, e as computed, aJ as _defineProperty, g as createVNode, aC as _extends, b0 as _slicedToArray, aH as PropTypes, r as ref, c5 as isPlainObject, aG as cloneElement, aD as classNames, aK as _objectSpread2 } from "./entry-61ceea7f.mjs";
import { S as SearchOutlined } from "./SearchOutlined-66b33d9a.mjs";
import "./index-cfa50bee.mjs";
import { o as omit } from "./omit-173fd1c5.mjs";
import { B as Button } from "./button-da542739.mjs";
import { _ as __unplugin_components_13 } from "./TextArea-4c687bd9.mjs";
import { _ as __unplugin_components_3 } from "./Password-b51c8941.mjs";
var Group = defineComponent({
  name: "AInputGroup",
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: void 0
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("input-group", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var cls = computed(function() {
      var _ref2;
      var pre = prefixCls.value;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(pre), true), _defineProperty(_ref2, "".concat(pre, "-lg"), props.size === "large"), _defineProperty(_ref2, "".concat(pre, "-sm"), props.size === "small"), _defineProperty(_ref2, "".concat(pre, "-compact"), props.compact), _defineProperty(_ref2, "".concat(pre, "-rtl"), direction.value === "rtl"), _ref2;
    });
    return function() {
      var _a;
      return createVNode("span", {
        "class": cls.value,
        "onMouseenter": props.onMouseEnter,
        "onMouseleave": props.onMouseLeave,
        "onFocus": props.onFocus,
        "onBlur": props.onBlur
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var applePhone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /\bAndroid(?:.+)SD4930UR\b/i;
var amazonTablet = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackberry = /BlackBerry/i;
var otherBlackberry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
function match(regex, userAgent) {
  return regex.test(userAgent);
}
function isMobile(userAgent) {
  var ua = userAgent || (typeof navigator !== "undefined" ? navigator.userAgent : "");
  var tmp = ua.split("[FBAN");
  if (typeof tmp[1] !== "undefined") {
    var _tmp = tmp;
    var _tmp2 = _slicedToArray(_tmp, 1);
    ua = _tmp2[0];
  }
  tmp = ua.split("Twitter");
  if (typeof tmp[1] !== "undefined") {
    var _tmp3 = tmp;
    var _tmp4 = _slicedToArray(_tmp3, 1);
    ua = _tmp4[0];
  }
  var result = {
    apple: {
      phone: match(applePhone, ua) && !match(windowsPhone, ua),
      ipod: match(appleIpod, ua),
      tablet: !match(applePhone, ua) && match(appleTablet, ua) && !match(windowsPhone, ua),
      device: (match(applePhone, ua) || match(appleIpod, ua) || match(appleTablet, ua)) && !match(windowsPhone, ua)
    },
    amazon: {
      phone: match(amazonPhone, ua),
      tablet: !match(amazonPhone, ua) && match(amazonTablet, ua),
      device: match(amazonPhone, ua) || match(amazonTablet, ua)
    },
    android: {
      phone: !match(windowsPhone, ua) && match(amazonPhone, ua) || !match(windowsPhone, ua) && match(androidPhone, ua),
      tablet: !match(windowsPhone, ua) && !match(amazonPhone, ua) && !match(androidPhone, ua) && (match(amazonTablet, ua) || match(androidTablet, ua)),
      device: !match(windowsPhone, ua) && (match(amazonPhone, ua) || match(amazonTablet, ua) || match(androidPhone, ua) || match(androidTablet, ua)) || match(/\bokhttp\b/i, ua)
    },
    windows: {
      phone: match(windowsPhone, ua),
      tablet: match(windowsTablet, ua),
      device: match(windowsPhone, ua) || match(windowsTablet, ua)
    },
    other: {
      blackberry: match(otherBlackberry, ua),
      blackberry10: match(otherBlackberry10, ua),
      opera: match(otherOpera, ua),
      firefox: match(otherFirefox, ua),
      chrome: match(otherChrome, ua),
      device: match(otherBlackberry, ua) || match(otherBlackberry10, ua) || match(otherOpera, ua) || match(otherFirefox, ua) || match(otherChrome, ua)
    },
    any: null,
    phone: null,
    tablet: null
  };
  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device;
  result.phone = result.apple.phone || result.android.phone || result.windows.phone;
  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;
  return result;
}
var defaultResult = _extends(_extends({}, isMobile()), {
  isMobile
});
var isMobile$1 = defaultResult;
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
var __unplugin_components_2 = defineComponent({
  name: "AInputSearch",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps()), {
    inputPrefixCls: String,
    enterButton: PropTypes.any,
    onSearch: {
      type: Function
    }
  }),
  setup: function setup2(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose, emit = _ref.emit;
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
    var onChange = function onChange2(e) {
      emit("update:value", e.target.value);
      if (e && e.target && e.type === "click") {
        emit("search", e.target.value, e);
      }
      emit("change", e);
    };
    var onMousedown = function onMousedown2(e) {
      var _a;
      if (document.activeElement === ((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input)) {
        e.preventDefault();
      }
    };
    var onSearch = function onSearch2(e) {
      var _a;
      emit("search", (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.stateValue, e);
      if (!isMobile$1.tablet) {
        inputRef.value.focus();
      }
    };
    var _useConfigInject = useConfigInject("input-search", props), prefixCls = _useConfigInject.prefixCls, getPrefixCls = _useConfigInject.getPrefixCls, direction = _useConfigInject.direction, size = _useConfigInject.size;
    var inputPrefixCls = computed(function() {
      return getPrefixCls("input", props.inputPrefixCls);
    });
    return function() {
      var _classNames;
      var _a, _b, _c, _d;
      var disabled = props.disabled, loading = props.loading, _props$addonAfter = props.addonAfter, addonAfter = _props$addonAfter === void 0 ? (_a = slots.addonAfter) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$addonAfter, _props$suffix = props.suffix, suffix = _props$suffix === void 0 ? (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$suffix, restProps = __rest(props, ["disabled", "loading", "addonAfter", "suffix"]);
      var _props$enterButton = props.enterButton, enterButton = _props$enterButton === void 0 ? (_d = (_c = slots.enterButton) === null || _c === void 0 ? void 0 : _c.call(slots)) !== null && _d !== void 0 ? _d : false : _props$enterButton;
      enterButton = enterButton || enterButton === "";
      var searchIcon = typeof enterButton === "boolean" ? createVNode(SearchOutlined, null, null) : null;
      var btnClassName = "".concat(prefixCls.value, "-button");
      var enterButtonAsElement = Array.isArray(enterButton) ? enterButton[0] : enterButton;
      var button;
      var isAntdButton = enterButtonAsElement.type && isPlainObject(enterButtonAsElement.type) && enterButtonAsElement.type.__ANT_BUTTON;
      if (isAntdButton || enterButtonAsElement.tagName === "button") {
        button = cloneElement(enterButtonAsElement, _extends({
          onMousedown,
          onClick: onSearch,
          key: "enterButton"
        }, isAntdButton ? {
          class: btnClassName,
          size: size.value
        } : {}), false);
      } else {
        var iconOnly = searchIcon && !enterButton;
        button = createVNode(Button, {
          "class": btnClassName,
          "type": enterButton ? "primary" : void 0,
          "size": size.value,
          "disabled": disabled,
          "key": "enterButton",
          "onMousedown": onMousedown,
          "onClick": onSearch,
          "loading": loading,
          "icon": iconOnly ? searchIcon : null
        }, {
          default: function _default() {
            return [iconOnly ? null : searchIcon || enterButton];
          }
        });
      }
      if (addonAfter) {
        button = [button, addonAfter];
      }
      var cls = classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(size.value), !!size.value), _defineProperty(_classNames, "".concat(prefixCls.value, "-with-button"), !!enterButton), _classNames), attrs.class);
      return createVNode(Input, _objectSpread2(_objectSpread2(_objectSpread2({
        "ref": inputRef
      }, omit(restProps, ["onUpdate:value", "onSearch", "enterButton"])), attrs), {}, {
        "onPressEnter": onSearch,
        "size": size.value,
        "prefixCls": inputPrefixCls.value,
        "addonAfter": button,
        "suffix": suffix,
        "onChange": onChange,
        "class": cls,
        "disabled": disabled
      }), slots);
    };
  }
});
Input.Group = Group;
Input.Search = __unplugin_components_2;
Input.TextArea = __unplugin_components_13;
Input.Password = __unplugin_components_3;
Input.install = function(app) {
  app.component(Input.name, Input);
  app.component(Input.Group.name, Input.Group);
  app.component(Input.Search.name, Input.Search);
  app.component(Input.TextArea.name, Input.TextArea);
  app.component(Input.Password.name, Input.Password);
  return app;
};
export { __unplugin_components_2 as _ };
