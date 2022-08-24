import { d as defineComponent, g as createVNode, aE as useConfigInject, r as ref, p as provide, cp as SiderHookProviderKey, e as computed, aJ as _defineProperty$1, aC as _extends, aW as _toConsumableArray, bd as AntdIcon, bj as initDefaultProps, i as inject, w as watch, cq as SiderCollapsedKey, s as onMounted, a_ as onBeforeUnmount, aD as classNames, aK as _objectSpread2, aH as PropTypes, c8 as tuple } from "./entry-3fb260b7.mjs";
import { i as isNumeric } from "./isNumeric-1b2178ad.mjs";
import { R as RightOutlined } from "./RightOutlined-bc158d3e.mjs";
import { L as LeftOutlined } from "./LeftOutlined-04561eeb.mjs";
var basicProps = function basicProps2() {
  return {
    prefixCls: String,
    hasSider: {
      type: Boolean,
      default: void 0
    },
    tagName: String
  };
};
function generator(_ref) {
  var suffixCls = _ref.suffixCls, tagName = _ref.tagName, name = _ref.name;
  return function(BasicComponent) {
    var Adapter = defineComponent({
      name,
      props: basicProps(),
      setup: function setup4(props, _ref2) {
        var slots = _ref2.slots;
        var _useConfigInject = useConfigInject(suffixCls, props), prefixCls = _useConfigInject.prefixCls;
        return function() {
          var basicComponentProps = _extends(_extends({}, props), {
            prefixCls: prefixCls.value,
            tagName
          });
          return createVNode(BasicComponent, basicComponentProps, slots);
        };
      }
    });
    return Adapter;
  };
}
var Basic = defineComponent({
  props: basicProps(),
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    return function() {
      return createVNode(props.tagName, {
        class: props.prefixCls
      }, slots);
    };
  }
});
var BasicLayout = defineComponent({
  props: basicProps(),
  setup: function setup2(props, _ref4) {
    var slots = _ref4.slots;
    var _useConfigInject2 = useConfigInject("", props), direction = _useConfigInject2.direction;
    var siders = ref([]);
    var siderHookProvider = {
      addSider: function addSider(id) {
        siders.value = [].concat(_toConsumableArray(siders.value), [id]);
      },
      removeSider: function removeSider(id) {
        siders.value = siders.value.filter(function(currentId) {
          return currentId !== id;
        });
      }
    };
    provide(SiderHookProviderKey, siderHookProvider);
    var divCls = computed(function() {
      var _ref5;
      var prefixCls = props.prefixCls, hasSider = props.hasSider;
      return _ref5 = {}, _defineProperty$1(_ref5, "".concat(prefixCls), true), _defineProperty$1(_ref5, "".concat(prefixCls, "-has-sider"), typeof hasSider === "boolean" ? hasSider : siders.value.length > 0), _defineProperty$1(_ref5, "".concat(prefixCls, "-rtl"), direction.value === "rtl"), _ref5;
    });
    return function() {
      var tagName = props.tagName;
      return createVNode(tagName, {
        class: divCls.value
      }, slots);
    };
  }
});
var Layout = generator({
  suffixCls: "layout",
  tagName: "section",
  name: "ALayout"
})(BasicLayout);
var Header = generator({
  suffixCls: "layout-header",
  tagName: "header",
  name: "ALayoutHeader"
})(Basic);
var Footer = generator({
  suffixCls: "layout-footer",
  tagName: "footer",
  name: "ALayoutFooter"
})(Basic);
var Content = generator({
  suffixCls: "layout-content",
  tagName: "main",
  name: "ALayoutContent"
})(Basic);
var Layout$1 = Layout;
var BarsOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };
var BarsOutlinedSvg = BarsOutlined$2;
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
var BarsOutlined = function BarsOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": BarsOutlinedSvg
  }), null);
};
BarsOutlined.displayName = "BarsOutlined";
BarsOutlined.inheritAttrs = false;
var BarsOutlined$1 = BarsOutlined;
var dimensionMaxMap = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px",
  xxxl: "1999.98px"
};
var siderProps = function siderProps2() {
  return {
    prefixCls: String,
    collapsible: {
      type: Boolean,
      default: void 0
    },
    collapsed: {
      type: Boolean,
      default: void 0
    },
    defaultCollapsed: {
      type: Boolean,
      default: void 0
    },
    reverseArrow: {
      type: Boolean,
      default: void 0
    },
    zeroWidthTriggerStyle: {
      type: Object,
      default: void 0
    },
    trigger: PropTypes.any,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    breakpoint: PropTypes.oneOf(tuple("xs", "sm", "md", "lg", "xl", "xxl", "xxxl")),
    theme: PropTypes.oneOf(tuple("light", "dark")).def("dark"),
    onBreakpoint: Function,
    onCollapse: Function
  };
};
var generateId = function() {
  var i = 0;
  return function() {
    var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();
var Sider = defineComponent({
  name: "ALayoutSider",
  inheritAttrs: false,
  props: initDefaultProps(siderProps(), {
    collapsible: false,
    defaultCollapsed: false,
    reverseArrow: false,
    width: 200,
    collapsedWidth: 80
  }),
  emits: ["breakpoint", "update:collapsed", "collapse"],
  setup: function setup3(props, _ref) {
    var emit = _ref.emit, attrs = _ref.attrs, slots = _ref.slots;
    var _useConfigInject = useConfigInject("layout-sider", props), prefixCls = _useConfigInject.prefixCls;
    var siderHook = inject(SiderHookProviderKey, void 0);
    var collapsed = ref(!!(props.collapsed !== void 0 ? props.collapsed : props.defaultCollapsed));
    var below = ref(false);
    watch(function() {
      return props.collapsed;
    }, function() {
      collapsed.value = !!props.collapsed;
    });
    provide(SiderCollapsedKey, collapsed);
    var handleSetCollapsed = function handleSetCollapsed2(value, type) {
      if (props.collapsed === void 0) {
        collapsed.value = value;
      }
      emit("update:collapsed", value);
      emit("collapse", value, type);
    };
    var responsiveHandlerRef = ref(function(mql2) {
      below.value = mql2.matches;
      emit("breakpoint", mql2.matches);
      if (collapsed.value !== mql2.matches) {
        handleSetCollapsed(mql2.matches, "responsive");
      }
    });
    var mql;
    function responsiveHandler(mql2) {
      return responsiveHandlerRef.value(mql2);
    }
    var uniqueId = generateId("ant-sider-");
    siderHook && siderHook.addSider(uniqueId);
    onMounted(function() {
      watch(function() {
        return props.breakpoint;
      }, function() {
        try {
          mql === null || mql === void 0 ? void 0 : mql.removeEventListener("change", responsiveHandler);
        } catch (error) {
          mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
        }
        if (typeof window !== "undefined") {
          var _window = window, matchMedia = _window.matchMedia;
          if (matchMedia && props.breakpoint && props.breakpoint in dimensionMaxMap) {
            mql = matchMedia("(max-width: ".concat(dimensionMaxMap[props.breakpoint], ")"));
            try {
              mql.addEventListener("change", responsiveHandler);
            } catch (error) {
              mql.addListener(responsiveHandler);
            }
            responsiveHandler(mql);
          }
        }
      }, {
        immediate: true
      });
    });
    onBeforeUnmount(function() {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener("change", responsiveHandler);
      } catch (error) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
      siderHook && siderHook.removeSider(uniqueId);
    });
    var toggle = function toggle2() {
      handleSetCollapsed(!collapsed.value, "clickTrigger");
    };
    return function() {
      var _classNames;
      var _a, _b;
      var pre = prefixCls.value;
      var collapsedWidth = props.collapsedWidth, width = props.width, reverseArrow = props.reverseArrow, zeroWidthTriggerStyle = props.zeroWidthTriggerStyle, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? (_a = slots.trigger) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$trigger, collapsible = props.collapsible, theme = props.theme;
      var rawWidth = collapsed.value ? collapsedWidth : width;
      var siderWidth = isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth);
      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? createVNode("span", {
        "onClick": toggle,
        "class": classNames("".concat(pre, "-zero-width-trigger"), "".concat(pre, "-zero-width-trigger-").concat(reverseArrow ? "right" : "left")),
        "style": zeroWidthTriggerStyle
      }, [trigger || createVNode(BarsOutlined$1, null, null)]) : null;
      var iconObj = {
        expanded: reverseArrow ? createVNode(RightOutlined, null, null) : createVNode(LeftOutlined, null, null),
        collapsed: reverseArrow ? createVNode(LeftOutlined, null, null) : createVNode(RightOutlined, null, null)
      };
      var status = collapsed.value ? "collapsed" : "expanded";
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || createVNode("div", {
        "class": "".concat(pre, "-trigger"),
        "onClick": toggle,
        "style": {
          width: siderWidth
        }
      }, [trigger || defaultTrigger]) : null;
      var divStyle = [attrs.style, {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      }];
      var siderCls = classNames(pre, "".concat(pre, "-").concat(theme), (_classNames = {}, _defineProperty$1(_classNames, "".concat(pre, "-collapsed"), !!collapsed.value), _defineProperty$1(_classNames, "".concat(pre, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), _defineProperty$1(_classNames, "".concat(pre, "-below"), !!below.value), _defineProperty$1(_classNames, "".concat(pre, "-zero-width"), parseFloat(siderWidth) === 0), _classNames), attrs.class);
      return createVNode("aside", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": siderCls,
        "style": divStyle
      }), [createVNode("div", {
        "class": "".concat(pre, "-children")
      }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)]), collapsible || below.value && zeroWidthTrigger ? triggerDom : null]);
    };
  }
});
var LayoutHeader = Header;
var LayoutFooter = Footer;
var LayoutSider = Sider;
var LayoutContent = Content;
var __unplugin_components_2 = _extends(Layout$1, {
  Header,
  Footer,
  Content,
  Sider,
  install: function install(app) {
    app.component(Layout$1.name, Layout$1);
    app.component(Header.name, Header);
    app.component(Footer.name, Footer);
    app.component(Sider.name, Sider);
    app.component(Content.name, Content);
    return app;
  }
});
export { LayoutSider as L, __unplugin_components_2 as _, LayoutContent as a, LayoutFooter as b, LayoutHeader as c };
