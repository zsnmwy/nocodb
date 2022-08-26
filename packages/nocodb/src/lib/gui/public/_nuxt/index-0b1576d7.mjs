import { r as ref, s as onMounted, cW as ResponsiveObserve, aB as onUnmounted, d as defineComponent, bj as initDefaultProps, i as inject, cX as defaultConfigProvider, P as nextTick, b6 as debounce, cY as getComponent, c3 as isVNode, cR as cloneVNode, g as createVNode, aJ as _defineProperty$2, aK as _objectSpread2, b8 as getSlot, aH as PropTypes, bd as AntdIcon, aC as _extends, aD as classNames, e as computed, B as withDirectives, b4 as BaseMixin, cU as firstNotUndefined, cZ as hasProp, c9 as isValidElement, aG as cloneElement, c_ as splitAttrs, y as createTextVNode, aE as useConfigInject, bg as useLocaleReceiver, a4 as toRef, c$ as enUS, b0 as _slicedToArray, b9 as withInstall } from "./entry-61ceea7f.mjs";
import { L as LeftOutlined } from "./LeftOutlined-f246f0cb.mjs";
import { R as RightOutlined } from "./RightOutlined-4a9f51db.mjs";
import { s as selectProps, _ as __unplugin_components_4 } from "./index-3935e1b2.mjs";
import { a as antInputDirective } from "./antInputDirective-04640d14.mjs";
function useBreakpoint() {
  var screens = ref({});
  var token = null;
  onMounted(function() {
    token = ResponsiveObserve.subscribe(function(supportScreens) {
      screens.value = supportScreens;
    });
  });
  onUnmounted(function() {
    ResponsiveObserve.unsubscribe(token);
  });
  return screens;
}
var __rest$2 = globalThis && globalThis.__rest || function(s, e) {
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
var spinProps = function spinProps2() {
  return {
    prefixCls: String,
    spinning: {
      type: Boolean,
      default: void 0
    },
    size: String,
    wrapperClassName: String,
    tip: PropTypes.any,
    delay: Number,
    indicator: PropTypes.any
  };
};
var defaultIndicator = null;
function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
function setDefaultIndicator(Content) {
  var Indicator = Content.indicator;
  defaultIndicator = typeof Indicator === "function" ? Indicator : function() {
    return createVNode(Indicator, null, null);
  };
}
var Spin = defineComponent({
  name: "ASpin",
  inheritAttrs: false,
  props: initDefaultProps(spinProps(), {
    size: "default",
    spinning: true,
    wrapperClassName: ""
  }),
  setup: function setup() {
    return {
      originalUpdateSpinning: null,
      configProvider: inject("configProvider", defaultConfigProvider)
    };
  },
  data: function data() {
    var spinning = this.spinning, delay = this.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    return {
      sSpinning: spinning && !shouldBeDelayed
    };
  },
  created: function created() {
    this.originalUpdateSpinning = this.updateSpinning;
    this.debouncifyUpdateSpinning(this.$props);
  },
  mounted: function mounted() {
    this.updateSpinning();
  },
  updated: function updated() {
    var _this = this;
    nextTick(function() {
      _this.debouncifyUpdateSpinning();
      _this.updateSpinning();
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.cancelExistingSpin();
  },
  methods: {
    debouncifyUpdateSpinning: function debouncifyUpdateSpinning(props) {
      var _ref = props || this.$props, delay = _ref.delay;
      if (delay) {
        this.cancelExistingSpin();
        this.updateSpinning = debounce(this.originalUpdateSpinning, delay);
      }
    },
    updateSpinning: function updateSpinning() {
      var spinning = this.spinning, sSpinning = this.sSpinning;
      if (sSpinning !== spinning) {
        this.sSpinning = spinning;
      }
    },
    cancelExistingSpin: function cancelExistingSpin() {
      var updateSpinning2 = this.updateSpinning;
      if (updateSpinning2 && updateSpinning2.cancel) {
        updateSpinning2.cancel();
      }
    },
    renderIndicator: function renderIndicator(prefixCls) {
      var dotClassName = "".concat(prefixCls, "-dot");
      var indicator = getComponent(this, "indicator");
      if (indicator === null) {
        return null;
      }
      if (Array.isArray(indicator)) {
        indicator = indicator.length === 1 ? indicator[0] : indicator;
      }
      if (isVNode(indicator)) {
        return cloneVNode(indicator, {
          class: dotClassName
        });
      }
      if (defaultIndicator && isVNode(defaultIndicator())) {
        return cloneVNode(defaultIndicator(), {
          class: dotClassName
        });
      }
      return createVNode("span", {
        "class": "".concat(dotClassName, " ").concat(prefixCls, "-dot-spin")
      }, [createVNode("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), createVNode("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), createVNode("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null), createVNode("i", {
        "class": "".concat(prefixCls, "-dot-item")
      }, null)]);
    }
  },
  render: function render() {
    var _spinClassName;
    var _a, _b;
    var _this$$props = this.$props, size = _this$$props.size, customizePrefixCls = _this$$props.prefixCls, _this$$props$tip = _this$$props.tip, tip = _this$$props$tip === void 0 ? (_b = (_a = this.$slots).tip) === null || _b === void 0 ? void 0 : _b.call(_a) : _this$$props$tip, wrapperClassName = _this$$props.wrapperClassName;
    var _c = this.$attrs, cls = _c.class, style = _c.style, divProps = __rest$2(_c, ["class", "style"]);
    var _this$configProvider = this.configProvider, getPrefixCls = _this$configProvider.getPrefixCls, direction = _this$configProvider.direction;
    var prefixCls = getPrefixCls("spin", customizePrefixCls);
    var sSpinning = this.sSpinning;
    var spinClassName = (_spinClassName = {}, _defineProperty$2(_spinClassName, prefixCls, true), _defineProperty$2(_spinClassName, "".concat(prefixCls, "-sm"), size === "small"), _defineProperty$2(_spinClassName, "".concat(prefixCls, "-lg"), size === "large"), _defineProperty$2(_spinClassName, "".concat(prefixCls, "-spinning"), sSpinning), _defineProperty$2(_spinClassName, "".concat(prefixCls, "-show-text"), !!tip), _defineProperty$2(_spinClassName, "".concat(prefixCls, "-rtl"), direction === "rtl"), _defineProperty$2(_spinClassName, cls, !!cls), _spinClassName);
    var spinElement = createVNode("div", _objectSpread2(_objectSpread2({}, divProps), {}, {
      "style": style,
      "class": spinClassName
    }), [this.renderIndicator(prefixCls), tip ? createVNode("div", {
      "class": "".concat(prefixCls, "-text")
    }, [tip]) : null]);
    var children = getSlot(this);
    if (children && children.length) {
      var _containerClassName;
      var containerClassName = (_containerClassName = {}, _defineProperty$2(_containerClassName, "".concat(prefixCls, "-container"), true), _defineProperty$2(_containerClassName, "".concat(prefixCls, "-blur"), sSpinning), _containerClassName);
      return createVNode("div", {
        "class": ["".concat(prefixCls, "-nested-loading"), wrapperClassName]
      }, [sSpinning && createVNode("div", {
        "key": "loading"
      }, [spinElement]), createVNode("div", {
        "class": containerClassName,
        "key": "container"
      }, [children])]);
    }
    return spinElement;
  }
});
var DoubleLeftOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, "name": "double-left", "theme": "outlined" };
var DoubleLeftOutlinedSvg = DoubleLeftOutlined$2;
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
var DoubleLeftOutlined = function DoubleLeftOutlined2(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": DoubleLeftOutlinedSvg
  }), null);
};
DoubleLeftOutlined.displayName = "DoubleLeftOutlined";
DoubleLeftOutlined.inheritAttrs = false;
var DoubleLeftOutlined$1 = DoubleLeftOutlined;
var DoubleRightOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, "name": "double-right", "theme": "outlined" };
var DoubleRightOutlinedSvg = DoubleRightOutlined$2;
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
var DoubleRightOutlined = function DoubleRightOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": DoubleRightOutlinedSvg
  }), null);
};
DoubleRightOutlined.displayName = "DoubleRightOutlined";
DoubleRightOutlined.inheritAttrs = false;
var DoubleRightOutlined$1 = DoubleRightOutlined;
var MiniSelect = defineComponent({
  inheritAttrs: false,
  props: selectProps(),
  Option: __unplugin_components_4.Option,
  setup: function setup2(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    return function() {
      var selelctProps = _extends(_extends(_extends({}, props), {
        size: "small"
      }), attrs);
      return createVNode(__unplugin_components_4, selelctProps, slots);
    };
  }
});
var Pager = defineComponent({
  name: "Pager",
  inheritAttrs: false,
  props: {
    rootPrefixCls: String,
    page: Number,
    active: {
      type: Boolean,
      default: void 0
    },
    last: {
      type: Boolean,
      default: void 0
    },
    locale: PropTypes.object,
    showTitle: {
      type: Boolean,
      default: void 0
    },
    itemRender: {
      type: Function,
      default: function _default() {
      }
    },
    onClick: {
      type: Function
    },
    onKeypress: {
      type: Function
    }
  },
  eimt: ["click", "keypress"],
  setup: function setup3(props, _ref) {
    var emit = _ref.emit, attrs = _ref.attrs;
    var handleClick = function handleClick2() {
      emit("click", props.page);
    };
    var handleKeyPress = function handleKeyPress2(event) {
      emit("keypress", event, handleClick, props.page);
    };
    return function() {
      var _classNames;
      var showTitle = props.showTitle, page = props.page, itemRender = props.itemRender;
      var _cls = attrs.class, style = attrs.style;
      var prefixCls = "".concat(props.rootPrefixCls, "-item");
      var cls = classNames(prefixCls, "".concat(prefixCls, "-").concat(props.page), (_classNames = {}, _defineProperty$2(_classNames, "".concat(prefixCls, "-active"), props.active), _defineProperty$2(_classNames, "".concat(prefixCls, "-disabled"), !props.page), _classNames), _cls);
      return createVNode("li", {
        "onClick": handleClick,
        "onKeypress": handleKeyPress,
        "title": showTitle ? String(page) : null,
        "tabindex": "0",
        "class": cls,
        "style": style
      }, [itemRender({
        page,
        type: "page",
        originalElement: createVNode("a", {
          "rel": "nofollow"
        }, [page])
      })]);
    };
  }
});
var KEYCODE = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};
var Options = defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    changeSize: Function,
    quickGo: Function,
    selectComponentClass: PropTypes.any,
    current: Number,
    pageSizeOptions: PropTypes.array.def(["10", "20", "50", "100"]),
    pageSize: Number,
    buildOptionText: Function,
    locale: PropTypes.object,
    rootPrefixCls: String,
    selectPrefixCls: String,
    goButton: PropTypes.any
  },
  setup: function setup4(props) {
    var goInputText = ref("");
    var validValue = computed(function() {
      return !goInputText.value || isNaN(goInputText.value) ? void 0 : Number(goInputText.value);
    });
    var defaultBuildOptionText = function defaultBuildOptionText2(opt) {
      return "".concat(opt.value, " ").concat(props.locale.items_per_page);
    };
    var handleChange2 = function handleChange3(e) {
      var _e$target = e.target, value = _e$target.value, composing = _e$target.composing;
      if (e.isComposing || composing || goInputText.value === value)
        return;
      goInputText.value = value;
    };
    var handleBlur = function handleBlur2(e) {
      var goButton = props.goButton, quickGo = props.quickGo, rootPrefixCls = props.rootPrefixCls;
      if (goButton || goInputText.value === "") {
        return;
      }
      if (e.relatedTarget && (e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item-link")) >= 0 || e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item")) >= 0)) {
        goInputText.value = "";
        return;
      } else {
        quickGo(validValue.value);
        goInputText.value = "";
      }
    };
    var go = function go2(e) {
      if (goInputText.value === "") {
        return;
      }
      if (e.keyCode === KEYCODE.ENTER || e.type === "click") {
        props.quickGo(validValue.value);
        goInputText.value = "";
      }
    };
    var pageSizeOptions = computed(function() {
      var pageSize2 = props.pageSize, pageSizeOptions2 = props.pageSizeOptions;
      if (pageSizeOptions2.some(function(option) {
        return option.toString() === pageSize2.toString();
      })) {
        return pageSizeOptions2;
      }
      return pageSizeOptions2.concat([pageSize2.toString()]).sort(function(a, b) {
        var numberA = isNaN(Number(a)) ? 0 : Number(a);
        var numberB = isNaN(Number(b)) ? 0 : Number(b);
        return numberA - numberB;
      });
    });
    return function() {
      var rootPrefixCls = props.rootPrefixCls, locale = props.locale, changeSize = props.changeSize, quickGo = props.quickGo, goButton = props.goButton, Select = props.selectComponentClass, selectPrefixCls = props.selectPrefixCls, pageSize2 = props.pageSize, disabled = props.disabled;
      var prefixCls = "".concat(rootPrefixCls, "-options");
      var changeSelect = null;
      var goInput = null;
      var gotoButton = null;
      if (!changeSize && !quickGo) {
        return null;
      }
      if (changeSize && Select) {
        var buildOptionText = props.buildOptionText || defaultBuildOptionText;
        var options = pageSizeOptions.value.map(function(opt, i) {
          return createVNode(Select.Option, {
            "key": i,
            "value": opt
          }, {
            default: function _default2() {
              return [buildOptionText({
                value: opt
              })];
            }
          });
        });
        changeSelect = createVNode(Select, {
          "disabled": disabled,
          "prefixCls": selectPrefixCls,
          "showSearch": false,
          "class": "".concat(prefixCls, "-size-changer"),
          "optionLabelProp": "children",
          "value": (pageSize2 || pageSizeOptions.value[0]).toString(),
          "onChange": function onChange(value) {
            return changeSize(Number(value));
          },
          "getPopupContainer": function getPopupContainer(triggerNode) {
            return triggerNode.parentNode;
          }
        }, {
          default: function _default2() {
            return [options];
          }
        });
      }
      if (quickGo) {
        if (goButton) {
          gotoButton = typeof goButton === "boolean" ? createVNode("button", {
            "type": "button",
            "onClick": go,
            "onKeyup": go,
            "disabled": disabled,
            "class": "".concat(prefixCls, "-quick-jumper-button")
          }, [locale.jump_to_confirm]) : createVNode("span", {
            "onClick": go,
            "onKeyup": go
          }, [goButton]);
        }
        goInput = createVNode("div", {
          "class": "".concat(prefixCls, "-quick-jumper")
        }, [locale.jump_to, withDirectives(createVNode("input", {
          "disabled": disabled,
          "type": "text",
          "value": goInputText.value,
          "onInput": handleChange2,
          "onChange": handleChange2,
          "onKeyup": go,
          "onBlur": handleBlur
        }, null), [[antInputDirective]]), locale.page, gotoButton]);
      }
      return createVNode("li", {
        "class": "".concat(prefixCls)
      }, [changeSelect, goInput]);
    };
  }
});
var LOCALE = {
  items_per_page: "\u6761/\u9875",
  jump_to: "\u8DF3\u81F3",
  jump_to_confirm: "\u786E\u5B9A",
  page: "\u9875",
  prev_page: "\u4E0A\u4E00\u9875",
  next_page: "\u4E0B\u4E00\u9875",
  prev_5: "\u5411\u524D 5 \u9875",
  next_5: "\u5411\u540E 5 \u9875",
  prev_3: "\u5411\u524D 3 \u9875",
  next_3: "\u5411\u540E 3 \u9875"
};
var __rest$1 = globalThis && globalThis.__rest || function(s, e) {
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
function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function defaultItemRender(_ref) {
  var originalElement = _ref.originalElement;
  return originalElement;
}
function calculatePage(p, state, props) {
  var pageSize2 = typeof p === "undefined" ? state.statePageSize : p;
  return Math.floor((props.total - 1) / pageSize2) + 1;
}
var VcPagination = defineComponent({
  name: "Pagination",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: PropTypes.string.def("rc-pagination"),
    selectPrefixCls: PropTypes.string.def("rc-select"),
    current: Number,
    defaultCurrent: PropTypes.number.def(1),
    total: PropTypes.number.def(0),
    pageSize: Number,
    defaultPageSize: PropTypes.number.def(10),
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    showSizeChanger: {
      type: Boolean,
      default: void 0
    },
    showLessItems: {
      type: Boolean,
      default: false
    },
    selectComponentClass: PropTypes.any,
    showPrevNextJumpers: {
      type: Boolean,
      default: true
    },
    showQuickJumper: PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object]).def(false),
    showTitle: {
      type: Boolean,
      default: true
    },
    pageSizeOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    buildOptionText: Function,
    showTotal: Function,
    simple: {
      type: Boolean,
      default: void 0
    },
    locale: PropTypes.object.def(LOCALE),
    itemRender: PropTypes.func.def(defaultItemRender),
    prevIcon: PropTypes.any,
    nextIcon: PropTypes.any,
    jumpPrevIcon: PropTypes.any,
    jumpNextIcon: PropTypes.any,
    totalBoundaryShowSizeChanger: PropTypes.number.def(50)
  },
  data: function data2() {
    var props = this.$props;
    var current2 = firstNotUndefined([this.current, this.defaultCurrent]);
    var pageSize2 = firstNotUndefined([this.pageSize, this.defaultPageSize]);
    current2 = Math.min(current2, calculatePage(pageSize2, void 0, props));
    return {
      stateCurrent: current2,
      stateCurrentInputValue: current2,
      statePageSize: pageSize2
    };
  },
  watch: {
    current: function current(val) {
      this.setState({
        stateCurrent: val,
        stateCurrentInputValue: val
      });
    },
    pageSize: function pageSize(val) {
      var newState = {};
      var current2 = this.stateCurrent;
      var newCurrent = calculatePage(val, this.$data, this.$props);
      current2 = current2 > newCurrent ? newCurrent : current2;
      if (!hasProp(this, "current")) {
        newState.stateCurrent = current2;
        newState.stateCurrentInputValue = current2;
      }
      newState.statePageSize = val;
      this.setState(newState);
    },
    stateCurrent: function stateCurrent(_val, oldValue) {
      var _this = this;
      this.$nextTick(function() {
        if (_this.$refs.paginationNode) {
          var lastCurrentNode = _this.$refs.paginationNode.querySelector(".".concat(_this.prefixCls, "-item-").concat(oldValue));
          if (lastCurrentNode && document.activeElement === lastCurrentNode) {
            lastCurrentNode.blur();
          }
        }
      });
    },
    total: function total() {
      var newState = {};
      var newCurrent = calculatePage(this.pageSize, this.$data, this.$props);
      if (hasProp(this, "current")) {
        var current2 = Math.min(this.current, newCurrent);
        newState.stateCurrent = current2;
        newState.stateCurrentInputValue = current2;
      } else {
        var _current = this.stateCurrent;
        if (_current === 0 && newCurrent > 0) {
          _current = 1;
        } else {
          _current = Math.min(this.stateCurrent, newCurrent);
        }
        newState.stateCurrent = _current;
      }
      this.setState(newState);
    }
  },
  methods: {
    getJumpPrevPage: function getJumpPrevPage() {
      return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
    },
    getJumpNextPage: function getJumpNextPage() {
      return Math.min(calculatePage(void 0, this.$data, this.$props), this.stateCurrent + (this.showLessItems ? 3 : 5));
    },
    getItemIcon: function getItemIcon(icon, label) {
      var prefixCls = this.$props.prefixCls;
      var iconNode = getComponent(this, icon, this.$props) || createVNode("button", {
        "type": "button",
        "aria-label": label,
        "class": "".concat(prefixCls, "-item-link")
      }, null);
      return iconNode;
    },
    getValidValue: function getValidValue(e) {
      var inputValue = e.target.value;
      var allPages = calculatePage(void 0, this.$data, this.$props);
      var stateCurrentInputValue = this.$data.stateCurrentInputValue;
      var value;
      if (inputValue === "") {
        value = inputValue;
      } else if (isNaN(Number(inputValue))) {
        value = stateCurrentInputValue;
      } else if (inputValue >= allPages) {
        value = allPages;
      } else {
        value = Number(inputValue);
      }
      return value;
    },
    isValid: function isValid(page) {
      return isInteger(page) && page !== this.stateCurrent;
    },
    shouldDisplayQuickJumper: function shouldDisplayQuickJumper() {
      var _this$$props = this.$props, showQuickJumper = _this$$props.showQuickJumper, pageSize2 = _this$$props.pageSize, total2 = _this$$props.total;
      if (total2 <= pageSize2) {
        return false;
      }
      return showQuickJumper;
    },
    handleKeyDown: function handleKeyDown(event) {
      if (event.keyCode === KEYCODE.ARROW_UP || event.keyCode === KEYCODE.ARROW_DOWN) {
        event.preventDefault();
      }
    },
    handleKeyUp: function handleKeyUp(e) {
      if (e.isComposing || e.target.composing)
        return;
      var value = this.getValidValue(e);
      var stateCurrentInputValue = this.stateCurrentInputValue;
      if (value !== stateCurrentInputValue) {
        this.setState({
          stateCurrentInputValue: value
        });
      }
      if (e.keyCode === KEYCODE.ENTER) {
        this.handleChange(value);
      } else if (e.keyCode === KEYCODE.ARROW_UP) {
        this.handleChange(value - 1);
      } else if (e.keyCode === KEYCODE.ARROW_DOWN) {
        this.handleChange(value + 1);
      }
    },
    changePageSize: function changePageSize(size) {
      var current2 = this.stateCurrent;
      var preCurrent = current2;
      var newCurrent = calculatePage(size, this.$data, this.$props);
      current2 = current2 > newCurrent ? newCurrent : current2;
      if (newCurrent === 0) {
        current2 = this.stateCurrent;
      }
      if (typeof size === "number") {
        if (!hasProp(this, "pageSize")) {
          this.setState({
            statePageSize: size
          });
        }
        if (!hasProp(this, "current")) {
          this.setState({
            stateCurrent: current2,
            stateCurrentInputValue: current2
          });
        }
      }
      this.__emit("update:pageSize", size);
      if (current2 !== preCurrent) {
        this.__emit("update:current", current2);
      }
      this.__emit("showSizeChange", current2, size);
      this.__emit("change", current2, size);
    },
    handleChange: function handleChange(p) {
      var disabled = this.$props.disabled;
      var page = p;
      if (this.isValid(page) && !disabled) {
        var currentPage = calculatePage(void 0, this.$data, this.$props);
        if (page > currentPage) {
          page = currentPage;
        } else if (page < 1) {
          page = 1;
        }
        if (!hasProp(this, "current")) {
          this.setState({
            stateCurrent: page,
            stateCurrentInputValue: page
          });
        }
        this.__emit("update:current", page);
        this.__emit("change", page, this.statePageSize);
        return page;
      }
      return this.stateCurrent;
    },
    prev: function prev() {
      if (this.hasPrev()) {
        this.handleChange(this.stateCurrent - 1);
      }
    },
    next: function next() {
      if (this.hasNext()) {
        this.handleChange(this.stateCurrent + 1);
      }
    },
    jumpPrev: function jumpPrev() {
      this.handleChange(this.getJumpPrevPage());
    },
    jumpNext: function jumpNext() {
      this.handleChange(this.getJumpNextPage());
    },
    hasPrev: function hasPrev() {
      return this.stateCurrent > 1;
    },
    hasNext: function hasNext() {
      return this.stateCurrent < calculatePage(void 0, this.$data, this.$props);
    },
    getShowSizeChanger: function getShowSizeChanger() {
      var _this$$props2 = this.$props, showSizeChanger = _this$$props2.showSizeChanger, total2 = _this$$props2.total, totalBoundaryShowSizeChanger = _this$$props2.totalBoundaryShowSizeChanger;
      if (typeof showSizeChanger !== "undefined") {
        return showSizeChanger;
      }
      return total2 > totalBoundaryShowSizeChanger;
    },
    runIfEnter: function runIfEnter(event, callback) {
      if (event.key === "Enter" || event.charCode === 13) {
        for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParams[_key - 2] = arguments[_key];
        }
        callback.apply(void 0, restParams);
      }
    },
    runIfEnterPrev: function runIfEnterPrev(event) {
      this.runIfEnter(event, this.prev);
    },
    runIfEnterNext: function runIfEnterNext(event) {
      this.runIfEnter(event, this.next);
    },
    runIfEnterJumpPrev: function runIfEnterJumpPrev(event) {
      this.runIfEnter(event, this.jumpPrev);
    },
    runIfEnterJumpNext: function runIfEnterJumpNext(event) {
      this.runIfEnter(event, this.jumpNext);
    },
    handleGoTO: function handleGoTO(event) {
      if (event.keyCode === KEYCODE.ENTER || event.type === "click") {
        this.handleChange(this.stateCurrentInputValue);
      }
    },
    renderPrev: function renderPrev(prevPage) {
      var itemRender = this.$props.itemRender;
      var prevButton = itemRender({
        page: prevPage,
        type: "prev",
        originalElement: this.getItemIcon("prevIcon", "prev page")
      });
      var disabled = !this.hasPrev();
      return isValidElement(prevButton) ? cloneElement(prevButton, disabled ? {
        disabled
      } : {}) : prevButton;
    },
    renderNext: function renderNext(nextPage) {
      var itemRender = this.$props.itemRender;
      var nextButton = itemRender({
        page: nextPage,
        type: "next",
        originalElement: this.getItemIcon("nextIcon", "next page")
      });
      var disabled = !this.hasNext();
      return isValidElement(nextButton) ? cloneElement(nextButton, disabled ? {
        disabled
      } : {}) : nextButton;
    }
  },
  render: function render2() {
    var _classNames6;
    var _this$$props3 = this.$props, prefixCls = _this$$props3.prefixCls, disabled = _this$$props3.disabled, hideOnSinglePage = _this$$props3.hideOnSinglePage, total2 = _this$$props3.total, locale = _this$$props3.locale, showQuickJumper = _this$$props3.showQuickJumper, showLessItems = _this$$props3.showLessItems, showTitle = _this$$props3.showTitle, showTotal = _this$$props3.showTotal, simple = _this$$props3.simple, itemRender = _this$$props3.itemRender, showPrevNextJumpers = _this$$props3.showPrevNextJumpers, jumpPrevIcon = _this$$props3.jumpPrevIcon, jumpNextIcon = _this$$props3.jumpNextIcon, selectComponentClass = _this$$props3.selectComponentClass, selectPrefixCls = _this$$props3.selectPrefixCls, pageSizeOptions = _this$$props3.pageSizeOptions;
    var stateCurrent2 = this.stateCurrent, statePageSize = this.statePageSize;
    var _a = splitAttrs(this.$attrs).extraAttrs, className = _a.class, restAttrs = __rest$1(_a, ["class"]);
    if (hideOnSinglePage === true && this.total <= statePageSize) {
      return null;
    }
    var allPages = calculatePage(void 0, this.$data, this.$props);
    var pagerList = [];
    var jumpPrev2 = null;
    var jumpNext2 = null;
    var firstPager = null;
    var lastPager = null;
    var gotoButton = null;
    var goButton = showQuickJumper && showQuickJumper.goButton;
    var pageBufferSize = showLessItems ? 1 : 2;
    var prevPage = stateCurrent2 - 1 > 0 ? stateCurrent2 - 1 : 0;
    var nextPage = stateCurrent2 + 1 < allPages ? stateCurrent2 + 1 : allPages;
    var hasPrev2 = this.hasPrev();
    var hasNext2 = this.hasNext();
    if (simple) {
      if (goButton) {
        if (typeof goButton === "boolean") {
          gotoButton = createVNode("button", {
            "type": "button",
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [locale.jump_to_confirm]);
        } else {
          gotoButton = createVNode("span", {
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [goButton]);
        }
        gotoButton = createVNode("li", {
          "title": showTitle ? "".concat(locale.jump_to).concat(stateCurrent2, "/").concat(allPages) : null,
          "class": "".concat(prefixCls, "-simple-pager")
        }, [gotoButton]);
      }
      return createVNode("ul", _objectSpread2({
        "class": classNames("".concat(prefixCls, " ").concat(prefixCls, "-simple"), _defineProperty$2({}, "".concat(prefixCls, "-disabled"), disabled), className)
      }, restAttrs), [createVNode("li", {
        "title": showTitle ? locale.prev_page : null,
        "onClick": this.prev,
        "tabindex": hasPrev2 ? 0 : null,
        "onKeypress": this.runIfEnterPrev,
        "class": classNames("".concat(prefixCls, "-prev"), _defineProperty$2({}, "".concat(prefixCls, "-disabled"), !hasPrev2)),
        "aria-disabled": !hasPrev2
      }, [this.renderPrev(prevPage)]), createVNode("li", {
        "title": showTitle ? "".concat(stateCurrent2, "/").concat(allPages) : null,
        "class": "".concat(prefixCls, "-simple-pager")
      }, [withDirectives(createVNode("input", {
        "type": "text",
        "value": this.stateCurrentInputValue,
        "disabled": disabled,
        "onKeydown": this.handleKeyDown,
        "onKeyup": this.handleKeyUp,
        "onInput": this.handleKeyUp,
        "onChange": this.handleKeyUp,
        "size": "3"
      }, null), [[antInputDirective]]), createVNode("span", {
        "class": "".concat(prefixCls, "-slash")
      }, [createTextVNode("\uFF0F")]), allPages]), createVNode("li", {
        "title": showTitle ? locale.next_page : null,
        "onClick": this.next,
        "tabindex": hasNext2 ? 0 : null,
        "onKeypress": this.runIfEnterNext,
        "class": classNames("".concat(prefixCls, "-next"), _defineProperty$2({}, "".concat(prefixCls, "-disabled"), !hasNext2)),
        "aria-disabled": !hasNext2
      }, [this.renderNext(nextPage)]), gotoButton]);
    }
    if (allPages <= 3 + pageBufferSize * 2) {
      var pagerProps = {
        locale,
        rootPrefixCls: prefixCls,
        showTitle,
        itemRender,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter
      };
      if (!allPages) {
        pagerList.push(createVNode(Pager, _objectSpread2(_objectSpread2({}, pagerProps), {}, {
          "key": "noPager",
          "page": 1,
          "class": "".concat(prefixCls, "-item-disabled")
        }), null));
      }
      for (var i = 1; i <= allPages; i += 1) {
        var active = stateCurrent2 === i;
        pagerList.push(createVNode(Pager, _objectSpread2(_objectSpread2({}, pagerProps), {}, {
          "key": i,
          "page": i,
          "active": active
        }), null));
      }
    } else {
      var prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
      var nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;
      if (showPrevNextJumpers) {
        jumpPrev2 = createVNode("li", {
          "title": this.showTitle ? prevItemTitle : null,
          "key": "prev",
          "onClick": this.jumpPrev,
          "tabindex": "0",
          "onKeypress": this.runIfEnterJumpPrev,
          "class": classNames("".concat(prefixCls, "-jump-prev"), _defineProperty$2({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
        }, [itemRender({
          page: this.getJumpPrevPage(),
          type: "jump-prev",
          originalElement: this.getItemIcon("jumpPrevIcon", "prev page")
        })]);
        jumpNext2 = createVNode("li", {
          "title": this.showTitle ? nextItemTitle : null,
          "key": "next",
          "tabindex": "0",
          "onClick": this.jumpNext,
          "onKeypress": this.runIfEnterJumpNext,
          "class": classNames("".concat(prefixCls, "-jump-next"), _defineProperty$2({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
        }, [itemRender({
          page: this.getJumpNextPage(),
          type: "jump-next",
          originalElement: this.getItemIcon("jumpNextIcon", "next page")
        })]);
      }
      lastPager = createVNode(Pager, {
        "locale": locale,
        "last": true,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": allPages,
        "page": allPages,
        "active": false,
        "showTitle": showTitle,
        "itemRender": itemRender
      }, null);
      firstPager = createVNode(Pager, {
        "locale": locale,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": 1,
        "page": 1,
        "active": false,
        "showTitle": showTitle,
        "itemRender": itemRender
      }, null);
      var left = Math.max(1, stateCurrent2 - pageBufferSize);
      var right = Math.min(stateCurrent2 + pageBufferSize, allPages);
      if (stateCurrent2 - 1 <= pageBufferSize) {
        right = 1 + pageBufferSize * 2;
      }
      if (allPages - stateCurrent2 <= pageBufferSize) {
        left = allPages - pageBufferSize * 2;
      }
      for (var _i = left; _i <= right; _i += 1) {
        var _active = stateCurrent2 === _i;
        pagerList.push(createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": _i,
          "page": _i,
          "active": _active,
          "showTitle": showTitle,
          "itemRender": itemRender
        }, null));
      }
      if (stateCurrent2 - 1 >= pageBufferSize * 2 && stateCurrent2 !== 1 + 2) {
        pagerList[0] = createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": left,
          "page": left,
          "class": "".concat(prefixCls, "-item-after-jump-prev"),
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.unshift(jumpPrev2);
      }
      if (allPages - stateCurrent2 >= pageBufferSize * 2 && stateCurrent2 !== allPages - 2) {
        pagerList[pagerList.length - 1] = createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": right,
          "page": right,
          "class": "".concat(prefixCls, "-item-before-jump-next"),
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.push(jumpNext2);
      }
      if (left !== 1) {
        pagerList.unshift(firstPager);
      }
      if (right !== allPages) {
        pagerList.push(lastPager);
      }
    }
    var totalText = null;
    if (showTotal) {
      totalText = createVNode("li", {
        "class": "".concat(prefixCls, "-total-text")
      }, [showTotal(total2, [total2 === 0 ? 0 : (stateCurrent2 - 1) * statePageSize + 1, stateCurrent2 * statePageSize > total2 ? total2 : stateCurrent2 * statePageSize])]);
    }
    var prevDisabled = !hasPrev2 || !allPages;
    var nextDisabled = !hasNext2 || !allPages;
    var buildOptionText = this.buildOptionText || this.$slots.buildOptionText;
    return createVNode("ul", _objectSpread2(_objectSpread2({
      "unselectable": "on",
      "ref": "paginationNode"
    }, restAttrs), {}, {
      "class": classNames((_classNames6 = {}, _defineProperty$2(_classNames6, "".concat(prefixCls), true), _defineProperty$2(_classNames6, "".concat(prefixCls, "-disabled"), disabled), _classNames6), className)
    }), [totalText, createVNode("li", {
      "title": showTitle ? locale.prev_page : null,
      "onClick": this.prev,
      "tabindex": prevDisabled ? null : 0,
      "onKeypress": this.runIfEnterPrev,
      "class": classNames("".concat(prefixCls, "-prev"), _defineProperty$2({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
      "aria-disabled": prevDisabled
    }, [this.renderPrev(prevPage)]), pagerList, createVNode("li", {
      "title": showTitle ? locale.next_page : null,
      "onClick": this.next,
      "tabindex": nextDisabled ? null : 0,
      "onKeypress": this.runIfEnterNext,
      "class": classNames("".concat(prefixCls, "-next"), _defineProperty$2({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
      "aria-disabled": nextDisabled
    }, [this.renderNext(nextPage)]), createVNode(Options, {
      "disabled": disabled,
      "locale": locale,
      "rootPrefixCls": prefixCls,
      "selectComponentClass": selectComponentClass,
      "selectPrefixCls": selectPrefixCls,
      "changeSize": this.getShowSizeChanger() ? this.changePageSize : null,
      "current": stateCurrent2,
      "pageSize": statePageSize,
      "pageSizeOptions": pageSizeOptions,
      "buildOptionText": buildOptionText || null,
      "quickGo": this.shouldDisplayQuickJumper() ? this.handleChange : null,
      "goButton": goButton
    }, null)]);
  }
});
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
var paginationProps = function paginationProps2() {
  return {
    total: Number,
    defaultCurrent: Number,
    disabled: {
      type: Boolean,
      default: void 0
    },
    current: Number,
    defaultPageSize: Number,
    pageSize: Number,
    hideOnSinglePage: {
      type: Boolean,
      default: void 0
    },
    showSizeChanger: {
      type: Boolean,
      default: void 0
    },
    pageSizeOptions: Array,
    buildOptionText: Function,
    showQuickJumper: {
      type: [Boolean, Object],
      default: void 0
    },
    showTotal: Function,
    size: String,
    simple: {
      type: Boolean,
      default: void 0
    },
    locale: Object,
    prefixCls: String,
    selectPrefixCls: String,
    totalBoundaryShowSizeChanger: Number,
    selectComponentClass: String,
    itemRender: Function,
    role: String,
    responsive: Boolean,
    showLessItems: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    onShowSizeChange: Function,
    "onUpdate:current": Function,
    "onUpdate:pageSize": Function
  };
};
var Pagination = defineComponent({
  name: "APagination",
  inheritAttrs: false,
  props: paginationProps(),
  setup: function setup5(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var _useConfigInject = useConfigInject("pagination", props), prefixCls = _useConfigInject.prefixCls, configProvider = _useConfigInject.configProvider, direction = _useConfigInject.direction;
    var selectPrefixCls = computed(function() {
      return configProvider.getPrefixCls("select", props.selectPrefixCls);
    });
    var breakpoint = useBreakpoint();
    var _useLocaleReceiver = useLocaleReceiver("Pagination", enUS, toRef(props, "locale")), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), locale = _useLocaleReceiver2[0];
    var getIconsProps = function getIconsProps2(pre) {
      var ellipsis = createVNode("span", {
        "class": "".concat(pre, "-item-ellipsis")
      }, [createTextVNode("\u2022\u2022\u2022")]);
      var prevIcon = createVNode("button", {
        "class": "".concat(pre, "-item-link"),
        "type": "button",
        "tabindex": -1
      }, [createVNode(LeftOutlined, null, null)]);
      var nextIcon = createVNode("button", {
        "class": "".concat(pre, "-item-link"),
        "type": "button",
        "tabindex": -1
      }, [createVNode(RightOutlined, null, null)]);
      var jumpPrevIcon = createVNode("a", {
        "rel": "nofollow",
        "class": "".concat(pre, "-item-link")
      }, [createVNode("div", {
        "class": "".concat(pre, "-item-container")
      }, [createVNode(DoubleLeftOutlined$1, {
        "class": "".concat(pre, "-item-link-icon")
      }, null), ellipsis])]);
      var jumpNextIcon = createVNode("a", {
        "rel": "nofollow",
        "class": "".concat(pre, "-item-link")
      }, [createVNode("div", {
        "class": "".concat(pre, "-item-container")
      }, [createVNode(DoubleRightOutlined$1, {
        "class": "".concat(pre, "-item-link-icon")
      }, null), ellipsis])]);
      if (direction.value === "rtl") {
        var _ref2 = [nextIcon, prevIcon];
        prevIcon = _ref2[0];
        nextIcon = _ref2[1];
        var _ref3 = [jumpNextIcon, jumpPrevIcon];
        jumpPrevIcon = _ref3[0];
        jumpNextIcon = _ref3[1];
      }
      return {
        prevIcon,
        nextIcon,
        jumpPrevIcon,
        jumpNextIcon
      };
    };
    return function() {
      var _a;
      var size = props.size, _props$itemRender = props.itemRender, itemRender = _props$itemRender === void 0 ? slots.itemRender : _props$itemRender, _props$buildOptionTex = props.buildOptionText, buildOptionText = _props$buildOptionTex === void 0 ? slots.buildOptionText : _props$buildOptionTex, selectComponentClass = props.selectComponentClass, responsive = props.responsive, restProps = __rest(props, ["size", "itemRender", "buildOptionText", "selectComponentClass", "responsive"]);
      var isSmall = size === "small" || !!(((_a = breakpoint.value) === null || _a === void 0 ? void 0 : _a.xs) && !size && responsive);
      var paginationProps3 = _extends(_extends(_extends(_extends(_extends({}, restProps), getIconsProps(prefixCls.value)), {
        prefixCls: prefixCls.value,
        selectPrefixCls: selectPrefixCls.value,
        selectComponentClass: selectComponentClass || (isSmall ? MiniSelect : __unplugin_components_4),
        locale: locale.value,
        buildOptionText
      }), attrs), {
        class: classNames(_defineProperty$2({
          mini: isSmall
        }, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), attrs.class),
        itemRender
      });
      return createVNode(VcPagination, paginationProps3, null);
    };
  }
});
var __unplugin_components_5 = withInstall(Pagination);
export { Spin as S, __unplugin_components_5 as _, setDefaultIndicator as s, useBreakpoint as u };
