import { c as useVirtualCell, b as useSmartsheetStoreOrThrow, d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-c8c479be.mjs";
import { e as ColumnInj, M as MetaInj, c as IsLockedInj, R as ReloadViewDataHookInj, I as IsFormInj, f as ActiveCellInj, g as RowInj, h as CellValueInj, E as EditModeInj, b as ReadonlyInj, d as IsPublicInj } from "./index-c79a04bb.mjs";
import { d as defineComponent, e as computed, n as reactive, r as ref, w as watch, aB as onUnmounted, aC as _extends, g as createVNode, aD as classNames, aE as useConfigInject, aF as filterEmpty, aG as cloneElement, aH as PropTypes, aI as PresetColorTypes, aJ as _defineProperty$4, aK as _objectSpread2, aL as getPropsSlot, aM as flattenChildren, aN as _typeof, aO as getTransitionProps, aP as Transition, B as withDirectives, aq as vShow, aQ as commonjsGlobal, aR as dayjs, aS as customParseFormat, aT as weekday, aU as noteOnce, aV as useAttrs, p as provide, i as inject, y as createTextVNode, aW as _toConsumableArray, aX as KeyCode, aY as wrapperRaf, aZ as isVisible, a_ as onBeforeUnmount, P as nextTick, a$ as onBeforeUpdate, a6 as watchEffect, F as Fragment, a4 as toRef, b0 as _slicedToArray, b1 as Trigger, s as onMounted, b2 as shallowequal, b3 as useProviderTrigger, b4 as BaseMixin, b5 as index, b6 as debounce, b7 as supportsPassive, b8 as getSlot, b9 as withInstall, ba as warning, bb as PresetStatusColorTypes, bc as CloseOutlined, bd as AntdIcon, be as useInjectFormItemContext, bf as devWarning, bg as useLocaleReceiver, bh as enUS, bi as CloseCircleFilled, bj as initDefaultProps, X as __unplugin_components_1$4, bk as findDOMNode, U as UITypes, o as openBlock, c as createElementBlock, b as createBaseVNode, bl as __unplugin_components_0$4, bm as localeCodes, _ as _export_sfc, bn as CountIcon, R as RelationTypes, bo as RollupIcon, bp as TableColumnPlusBefore, bq as FormulaIcon, br as SpecificDBTypeIcon, j as createBlock, A as normalizeClass, S as resolveDynamicComponent, bs as useColumn, bt as JSONIcon, bu as CalendarIcon, bv as DatetimeIcon, ak as __unplugin_components_12, bw as DecimalIcon, bx as FilePhoneIcon, by as WebIcon, bz as CurrencyIcon, bA as PercentIcon, bB as NumericIcon, u as useNuxtApp, M as useI18n, a3 as useMetas, h as withCtx, v as toDisplayString, k as createCommentVNode, Y as __unplugin_components_0$5, a1 as Menu, ab as h, I as message, K as extractSdkResponseErrorMsg, L as useVModel, bC as useColumnCreateStoreOrThrow, bD as getUIDTIcon, bE as jsep, bF as jsepCurlyHook, z as withKeys, x as withModifiers, aj as mergeProps, f as renderList, G as __unplugin_components_2$3, J as useDebounceFn, a9 as useProject, at as enumColor, T as normalizeStyle, l as isVirtualCol, bG as MssqlUi, bH as SqliteUi, bI as ModelTypes, ah as normalizeProps, ai as guardReactiveProps, D as Draggable, bJ as MdiArrowDownDropCircle, bK as uiTypes, bL as MdiIdentifierIcon, ar as useEventListener, H as Form, bM as useProvideColumnCreateStore, bN as substituteColumnIdWithAliasInFormula, C as pushScopeId, E as popScopeId, bO as defineAsyncComponent, bP as __vitePreload, au as NavigateDir, bQ as vModelText, av as useInjectionState, N as useApi, bR as useFileDialog, aa as NOCO, a2 as FileSaver, a0 as Sortable, bS as watchPostEffect, a as unref, bT as useDropZone, bU as onKeyDown, bV as openLink, q as onClickOutside, bW as __nuxt_component_1$4, bX as isEmail, bY as isValidURL, am as __nuxt_component_1$5 } from "./entry-61ceea7f.mjs";
import { u as useUIPermission } from "./index-2b41c829.mjs";
import { D as Dropdown } from "./dropdown-ba657059.mjs";
import { _ as __unplugin_components_3$2 } from "./delete-outline-e19db0b9.mjs";
import { M as MdiMenuDown } from "./menu-down-57034c65.mjs";
import { M as Modal$1 } from "./Modal-d5a36a0f.mjs";
import { v as validateDateWithUnknownFormat, s as script, d as dateFormats, _ as __unplugin_components_4$6 } from "./index-1f166877.mjs";
import { i as isNumeric } from "./isNumeric-1b2178ad.mjs";
import { _ as __unplugin_components_13 } from "./TextArea-4c687bd9.mjs";
import { _ as __unplugin_components_2$4, a as __unplugin_components_3$3, C as Card } from "./Card-637b0d8a.mjs";
import { c as __unplugin_components_4$4, _ as __unplugin_components_6, a as __unplugin_components_7, b as __unplugin_components_8 } from "./star-outline-35a0d043.mjs";
import { u as useMemo, S as SelectOption, _ as __unplugin_components_4$5 } from "./index-3935e1b2.mjs";
import { B as Button } from "./button-da542739.mjs";
import { _ as __unplugin_components_9, C as Collapse } from "./CollapsePanel-3cbe710e.mjs";
import { M as MdiPlusIcon, a as MdiMinusIcon, _ as __nuxt_component_0$7 } from "./minus-circle-outline-fe5ab5b7.mjs";
import { R as Radio, _ as __unplugin_components_1$5, C as Checkbox } from "./Checkbox-99b125b8.mjs";
import { _ as __unplugin_components_5$2 } from "./close-f98de9d8.mjs";
import { M as MdiPlus } from "./plus-15c52e39.mjs";
import { I as Input } from "./Input-081ff014.mjs";
import { _ as __unplugin_components_0$6, a as __nuxt_component_0$6 } from "./file-copy-outline-b0187a2b.mjs";
import { _ as __unplugin_components_0$7 } from "./reload-23e1ac74.mjs";
import { i as isImage } from "./fileUtils-f5868683.mjs";
import { _ as __unplugin_components_7$1 } from "./index-c5e00eea.mjs";
import { W as Wave } from "./wave-52b13188.mjs";
import "./index-cfa50bee.mjs";
import { u as useMergedState, a as useState } from "./useState-068748ba.mjs";
import { o as omit } from "./omit-173fd1c5.mjs";
import { u as useRefs } from "./TabPane-12ca446e.mjs";
function UnitNumber(_ref) {
  var prefixCls = _ref.prefixCls, value = _ref.value, current = _ref.current, _ref$offset = _ref.offset, offset = _ref$offset === void 0 ? 0 : _ref$offset;
  var style;
  if (offset) {
    style = {
      position: "absolute",
      top: "".concat(offset, "00%"),
      left: 0
    };
  }
  return createVNode("p", {
    "style": style,
    "class": classNames("".concat(prefixCls, "-only-unit"), {
      current
    })
  }, [value]);
}
function getOffset(start, end, unit) {
  var index2 = start;
  var offset = 0;
  while ((index2 + 10) % 10 !== end) {
    index2 += unit;
    offset += unit;
  }
  return offset;
}
var SingleNumber = defineComponent({
  name: "SingleNumber",
  props: {
    prefixCls: String,
    value: String,
    count: Number
  },
  setup: function setup(props) {
    var originValue = computed(function() {
      return Number(props.value);
    });
    var originCount = computed(function() {
      return Math.abs(props.count);
    });
    var state = reactive({
      prevValue: originValue.value,
      prevCount: originCount.value
    });
    var onTransitionEnd = function onTransitionEnd2() {
      state.prevValue = originValue.value;
      state.prevCount = originCount.value;
    };
    var timeout = ref();
    watch(originValue, function() {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(function() {
        onTransitionEnd();
      }, 1e3);
    }, {
      flush: "post"
    });
    onUnmounted(function() {
      clearTimeout(timeout.value);
    });
    return function() {
      var unitNodes;
      var offsetStyle = {};
      var value = originValue.value;
      if (state.prevValue === value || Number.isNaN(value) || Number.isNaN(state.prevValue)) {
        unitNodes = [UnitNumber(_extends(_extends({}, props), {
          current: true
        }))];
        offsetStyle = {
          transition: "none"
        };
      } else {
        unitNodes = [];
        var end = value + 10;
        var unitNumberList = [];
        for (var index2 = value; index2 <= end; index2 += 1) {
          unitNumberList.push(index2);
        }
        var prevIndex = unitNumberList.findIndex(function(n) {
          return n % 10 === state.prevValue;
        });
        unitNodes = unitNumberList.map(function(n, index3) {
          var singleUnit = n % 10;
          return UnitNumber(_extends(_extends({}, props), {
            value: singleUnit,
            offset: index3 - prevIndex,
            current: index3 === prevIndex
          }));
        });
        var unit = state.prevCount < originCount.value ? 1 : -1;
        offsetStyle = {
          transform: "translateY(".concat(-getOffset(state.prevValue, value, unit), "00%)")
        };
      }
      return createVNode("span", {
        "class": "".concat(props.prefixCls, "-only"),
        "style": offsetStyle,
        "onTransitionend": function onTransitionend() {
          return onTransitionEnd();
        }
      }, [unitNodes]);
    };
  }
});
var __rest$6 = globalThis && globalThis.__rest || function(s, e) {
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
var scrollNumberProps = {
  prefixCls: String,
  count: PropTypes.any,
  component: String,
  title: PropTypes.any,
  show: Boolean
};
var ScrollNumber = defineComponent({
  name: "ScrollNumber",
  inheritAttrs: false,
  props: scrollNumberProps,
  setup: function setup2(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var _useConfigInject = useConfigInject("scroll-number", props), prefixCls = _useConfigInject.prefixCls;
    return function() {
      var _a;
      var _b = _extends(_extends({}, props), attrs);
      _b.prefixCls;
      var count = _b.count, title = _b.title;
      _b.show;
      var _b$component = _b.component, Tag2 = _b$component === void 0 ? "sup" : _b$component, className = _b.class, style = _b.style, restProps = __rest$6(_b, ["prefixCls", "count", "title", "show", "component", "class", "style"]);
      var newProps = _extends(_extends({}, restProps), {
        style,
        "data-show": props.show,
        class: classNames(prefixCls.value, className),
        title
      });
      var numberNodes = count;
      if (count && Number(count) % 1 === 0) {
        var numberList = String(count).split("");
        numberNodes = numberList.map(function(num, i) {
          return createVNode(SingleNumber, {
            "prefixCls": prefixCls.value,
            "count": Number(count),
            "value": num,
            "key": numberList.length - i
          }, null);
        });
      }
      if (style && style.borderColor) {
        newProps.style = _extends(_extends({}, style), {
          boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
        });
      }
      var children = filterEmpty((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      if (children && children.length) {
        return cloneElement(children, {
          class: classNames("".concat(prefixCls.value, "-custom-component"))
        }, false);
      }
      return createVNode(Tag2, newProps, {
        default: function _default2() {
          return [numberNodes];
        }
      });
    };
  }
});
function isPresetColor(color) {
  return PresetColorTypes.indexOf(color) !== -1;
}
var __rest$5 = globalThis && globalThis.__rest || function(s, e) {
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
var ribbonProps = function ribbonProps2() {
  return {
    prefix: String,
    color: {
      type: String
    },
    text: PropTypes.any,
    placement: {
      type: String,
      default: "end"
    }
  };
};
var __unplugin_components_3$1 = defineComponent({
  name: "ABadgeRibbon",
  inheritAttrs: false,
  props: ribbonProps(),
  slots: ["text"],
  setup: function setup3(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var _useConfigInject = useConfigInject("ribbon", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var colorInPreset = computed(function() {
      return isPresetColor(props.color);
    });
    var ribbonCls = computed(function() {
      var _ref2;
      return [prefixCls.value, "".concat(prefixCls.value, "-placement-").concat(props.placement), (_ref2 = {}, _defineProperty$4(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty$4(_ref2, "".concat(prefixCls.value, "-color-").concat(props.color), colorInPreset.value), _ref2)];
    });
    return function() {
      var _a, _b;
      var className = attrs.class, style = attrs.style, restAttrs = __rest$5(attrs, ["class", "style"]);
      var colorStyle = {};
      var cornerColorStyle = {};
      if (props.color && !colorInPreset.value) {
        colorStyle.background = props.color;
        cornerColorStyle.color = props.color;
      }
      return createVNode("div", _objectSpread2({
        "class": "".concat(prefixCls.value, "-wrapper")
      }, restAttrs), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots), createVNode("div", {
        "class": [ribbonCls.value, className],
        "style": _extends(_extends({}, colorStyle), style)
      }, [createVNode("span", {
        "class": "".concat(prefixCls.value, "-text")
      }, [props.text || ((_b = slots.text) === null || _b === void 0 ? void 0 : _b.call(slots))]), createVNode("div", {
        "class": "".concat(prefixCls.value, "-corner"),
        "style": cornerColorStyle
      }, null)])]);
    };
  }
});
var badgeProps = function badgeProps2() {
  return {
    count: PropTypes.any,
    showZero: {
      type: Boolean,
      default: void 0
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    scrollNumberPrefixCls: String,
    status: {
      type: String
    },
    size: {
      type: String,
      default: "default"
    },
    color: String,
    text: PropTypes.any,
    offset: Array,
    numberStyle: {
      type: Object,
      default: void 0
    },
    title: String
  };
};
var Badge = defineComponent({
  name: "ABadge",
  Ribbon: __unplugin_components_3$1,
  inheritAttrs: false,
  props: badgeProps(),
  slots: ["text", "count"],
  setup: function setup4(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var _useConfigInject = useConfigInject("badge", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var numberedDisplayCount = computed(function() {
      return props.count > props.overflowCount ? "".concat(props.overflowCount, "+") : props.count;
    });
    var hasStatus = computed(function() {
      return props.status !== null && props.status !== void 0 || props.color !== null && props.color !== void 0;
    });
    var isZero = computed(function() {
      return numberedDisplayCount.value === "0" || numberedDisplayCount.value === 0;
    });
    var showAsDot = computed(function() {
      return props.dot && !isZero.value;
    });
    var mergedCount = computed(function() {
      return showAsDot.value ? "" : numberedDisplayCount.value;
    });
    var isHidden = computed(function() {
      var isEmpty = mergedCount.value === null || mergedCount.value === void 0 || mergedCount.value === "";
      return (isEmpty || isZero.value && !props.showZero) && !showAsDot.value;
    });
    var livingCount = ref(props.count);
    var displayCount = ref(mergedCount.value);
    var isDotRef = ref(showAsDot.value);
    watch([function() {
      return props.count;
    }, mergedCount, showAsDot], function() {
      if (!isHidden.value) {
        livingCount.value = props.count;
        displayCount.value = mergedCount.value;
        isDotRef.value = showAsDot.value;
      }
    }, {
      immediate: true
    });
    var statusCls = computed(function() {
      var _ref2;
      return _ref2 = {}, _defineProperty$4(_ref2, "".concat(prefixCls.value, "-status-dot"), hasStatus.value), _defineProperty$4(_ref2, "".concat(prefixCls.value, "-status-").concat(props.status), !!props.status), _defineProperty$4(_ref2, "".concat(prefixCls.value, "-status-").concat(props.color), isPresetColor(props.color)), _ref2;
    });
    var statusStyle = computed(function() {
      if (props.color && !isPresetColor(props.color)) {
        return {
          background: props.color
        };
      } else {
        return {};
      }
    });
    var scrollNumberCls = computed(function() {
      var _ref3;
      return _ref3 = {}, _defineProperty$4(_ref3, "".concat(prefixCls.value, "-dot"), isDotRef.value), _defineProperty$4(_ref3, "".concat(prefixCls.value, "-count"), !isDotRef.value), _defineProperty$4(_ref3, "".concat(prefixCls.value, "-count-sm"), props.size === "small"), _defineProperty$4(_ref3, "".concat(prefixCls.value, "-multiple-words"), !isDotRef.value && displayCount.value && displayCount.value.toString().length > 1), _defineProperty$4(_ref3, "".concat(prefixCls.value, "-status-").concat(props.status), !!props.status), _defineProperty$4(_ref3, "".concat(prefixCls.value, "-status-").concat(props.color), isPresetColor(props.color)), _ref3;
    });
    return function() {
      var _classNames;
      var _a, _b;
      var offset = props.offset, title = props.title, color = props.color;
      var style = attrs.style;
      var text = getPropsSlot(slots, props, "text");
      var pre = prefixCls.value;
      var count = livingCount.value;
      var children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      children = children.length ? children : null;
      var visible = !!(!isHidden.value || slots.count);
      var mergedStyle = function() {
        if (!offset) {
          return _extends({}, style);
        }
        var offsetStyle = {
          marginTop: isNumeric(offset[1]) ? "".concat(offset[1], "px") : offset[1]
        };
        if (direction.value === "rtl") {
          offsetStyle.left = "".concat(parseInt(offset[0], 10), "px");
        } else {
          offsetStyle.right = "".concat(-parseInt(offset[0], 10), "px");
        }
        return _extends(_extends({}, offsetStyle), style);
      }();
      var titleNode = title !== null && title !== void 0 ? title : typeof count === "string" || typeof count === "number" ? count : void 0;
      var statusTextNode = visible || !text ? null : createVNode("span", {
        "class": "".concat(pre, "-status-text")
      }, [text]);
      var displayNode = _typeof(count) === "object" || count === void 0 && slots.count ? cloneElement(count !== null && count !== void 0 ? count : (_b = slots.count) === null || _b === void 0 ? void 0 : _b.call(slots), {
        style: mergedStyle
      }, false) : null;
      var badgeClassName = classNames(pre, (_classNames = {}, _defineProperty$4(_classNames, "".concat(pre, "-status"), hasStatus.value), _defineProperty$4(_classNames, "".concat(pre, "-not-a-wrapper"), !children), _defineProperty$4(_classNames, "".concat(pre, "-rtl"), direction.value === "rtl"), _classNames), attrs.class);
      if (!children && hasStatus.value) {
        var statusTextColor = mergedStyle.color;
        return createVNode("span", _objectSpread2(_objectSpread2({}, attrs), {}, {
          "class": badgeClassName,
          "style": mergedStyle
        }), [createVNode("span", {
          "class": statusCls.value,
          "style": statusStyle.value
        }, null), createVNode("span", {
          "style": {
            color: statusTextColor
          },
          "class": "".concat(pre, "-status-text")
        }, [text])]);
      }
      var transitionProps = getTransitionProps(children ? "".concat(pre, "-zoom") : "", {
        appear: false
      });
      var scrollNumberStyle = _extends(_extends({}, mergedStyle), props.numberStyle);
      if (color && !isPresetColor(color)) {
        scrollNumberStyle = scrollNumberStyle || {};
        scrollNumberStyle.background = color;
      }
      return createVNode("span", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": badgeClassName
      }), [children, createVNode(Transition, transitionProps, {
        default: function _default2() {
          return [withDirectives(createVNode(ScrollNumber, {
            "prefixCls": props.scrollNumberPrefixCls,
            "show": visible,
            "class": scrollNumberCls.value,
            "count": displayCount.value,
            "title": titleNode,
            "style": scrollNumberStyle,
            "key": "scrollNumber"
          }, {
            default: function _default3() {
              return [displayNode];
            }
          }), [[vShow, visible]])];
        }
      }), statusTextNode]);
    };
  }
});
Badge.install = function(app) {
  app.component(Badge.name, Badge);
  app.component(__unplugin_components_3$1.name, __unplugin_components_3$1);
  return app;
};
var localeData$1 = { exports: {} };
(function(module, exports) {
  !function(n, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    return function(n, e, t) {
      var r = e.prototype, o = function(n2) {
        return n2 && (n2.indexOf ? n2 : n2.s);
      }, u = function(n2, e2, t2, r2, u2) {
        var i2 = n2.name ? n2 : n2.$locale(), a2 = o(i2[e2]), s2 = o(i2[t2]), f = a2 || s2.map(function(n3) {
          return n3.slice(0, r2);
        });
        if (!u2)
          return f;
        var d = i2.weekStart;
        return f.map(function(n3, e3) {
          return f[(e3 + (d || 0)) % 7];
        });
      }, i = function() {
        return t.Ls[t.locale()];
      }, a = function(n2, e2) {
        return n2.formats[e2] || function(n3) {
          return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
            return e3 || t2.slice(1);
          });
        }(n2.formats[e2.toUpperCase()]);
      }, s = function() {
        var n2 = this;
        return { months: function(e2) {
          return e2 ? e2.format("MMMM") : u(n2, "months");
        }, monthsShort: function(e2) {
          return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return n2.$locale().weekStart || 0;
        }, weekdays: function(e2) {
          return e2 ? e2.format("dddd") : u(n2, "weekdays");
        }, weekdaysMin: function(e2) {
          return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(e2) {
          return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(e2) {
          return a(n2.$locale(), e2);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      r.localeData = function() {
        return s.bind(this)();
      }, t.localeData = function() {
        var n2 = i();
        return { firstDayOfWeek: function() {
          return n2.weekStart || 0;
        }, weekdays: function() {
          return t.weekdays();
        }, weekdaysShort: function() {
          return t.weekdaysShort();
        }, weekdaysMin: function() {
          return t.weekdaysMin();
        }, months: function() {
          return t.months();
        }, monthsShort: function() {
          return t.monthsShort();
        }, longDateFormat: function(e2) {
          return a(n2, e2);
        }, meridiem: n2.meridiem, ordinal: n2.ordinal };
      }, t.months = function() {
        return u(i(), "months");
      }, t.monthsShort = function() {
        return u(i(), "monthsShort", "months", 3);
      }, t.weekdays = function(n2) {
        return u(i(), "weekdays", null, null, n2);
      }, t.weekdaysShort = function(n2) {
        return u(i(), "weekdaysShort", "weekdays", 3, n2);
      }, t.weekdaysMin = function(n2) {
        return u(i(), "weekdaysMin", "weekdays", 2, n2);
      };
    };
  });
})(localeData$1);
var localeData = localeData$1.exports;
var weekOfYear$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var e = "week", t = "year";
    return function(i, n, r) {
      var f = n.prototype;
      f.week = function(i2) {
        if (i2 === void 0 && (i2 = null), i2 !== null)
          return this.add(7 * (i2 - this.week()), "day");
        var n2 = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
          if (f2.isBefore(s))
            return 1;
        }
        var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
        return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
      }, f.weeks = function(e2) {
        return e2 === void 0 && (e2 = null), this.week(e2);
      };
    };
  });
})(weekOfYear$1);
var weekOfYear = weekOfYear$1.exports;
var weekYear$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.weekYear = function() {
        var e2 = this.month(), t2 = this.week(), n = this.year();
        return t2 === 1 && e2 === 11 ? n + 1 : e2 === 0 && t2 >= 52 ? n - 1 : n;
      };
    };
  });
})(weekYear$1);
var weekYear = weekYear$1.exports;
var advancedFormat$1 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t, r) {
      var n = t.prototype, s = n.format;
      r.en.ordinal = function(e2) {
        var t2 = ["th", "st", "nd", "rd"], r2 = e2 % 100;
        return "[" + e2 + (t2[(r2 - 20) % 10] || t2[r2] || t2[0]) + "]";
      }, n.format = function(e2) {
        var t2 = this, r2 = this.$locale();
        if (!this.isValid())
          return s.bind(this)(e2);
        var n2 = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e3) {
          switch (e3) {
            case "Q":
              return Math.ceil((t2.$M + 1) / 3);
            case "Do":
              return r2.ordinal(t2.$D);
            case "gggg":
              return t2.weekYear();
            case "GGGG":
              return t2.isoWeekYear();
            case "wo":
              return r2.ordinal(t2.week(), "W");
            case "w":
            case "ww":
              return n2.s(t2.week(), e3 === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return n2.s(t2.isoWeek(), e3 === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return n2.s(String(t2.$H === 0 ? 24 : t2.$H), e3 === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(t2.$d.getTime() / 1e3);
            case "x":
              return t2.$d.getTime();
            case "z":
              return "[" + t2.offsetName() + "]";
            case "zzz":
              return "[" + t2.offsetName("long") + "]";
            default:
              return e3;
          }
        });
        return s.bind(this)(a);
      };
    };
  });
})(advancedFormat$1);
var advancedFormat = advancedFormat$1.exports;
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(function(_o, c) {
  var proto = c.prototype;
  var oldFormat = proto.format;
  proto.format = function f(formatStr) {
    var str = (formatStr || "").replace("Wo", "wo");
    return oldFormat.bind(this)(str);
  };
});
var localeMap = {
  bn_BD: "bn-bd",
  by_BY: "be",
  en_GB: "en-gb",
  en_US: "en",
  fr_BE: "fr",
  fr_CA: "fr-ca",
  hy_AM: "hy-am",
  kmr_IQ: "ku",
  nl_BE: "nl-be",
  pt_BR: "pt-br",
  zh_CN: "zh-cn",
  zh_HK: "zh-hk",
  zh_TW: "zh-tw"
};
var parseLocale = function parseLocale2(locale) {
  var mapLocale = localeMap[locale];
  return mapLocale || locale.split("_")[0];
};
var parseNoMatchNotice = function parseNoMatchNotice2() {
  noteOnce(false, "Not match any format. Please help to fire a issue about this.");
};
var generateConfig = {
  getNow: function getNow() {
    return dayjs();
  },
  getFixedDate: function getFixedDate(string) {
    return dayjs(string, ["YYYY-M-DD", "YYYY-MM-DD"]);
  },
  getEndDate: function getEndDate(date) {
    return date.endOf("month");
  },
  getWeekDay: function getWeekDay(date) {
    var clone = date.locale("en");
    return clone.weekday() + clone.localeData().firstDayOfWeek();
  },
  getYear: function getYear(date) {
    return date.year();
  },
  getMonth: function getMonth(date) {
    return date.month();
  },
  getDate: function getDate(date) {
    return date.date();
  },
  getHour: function getHour(date) {
    return date.hour();
  },
  getMinute: function getMinute(date) {
    return date.minute();
  },
  getSecond: function getSecond(date) {
    return date.second();
  },
  addYear: function addYear(date, diff) {
    return date.add(diff, "year");
  },
  addMonth: function addMonth(date, diff) {
    return date.add(diff, "month");
  },
  addDate: function addDate(date, diff) {
    return date.add(diff, "day");
  },
  setYear: function setYear(date, year) {
    return date.year(year);
  },
  setMonth: function setMonth(date, month) {
    return date.month(month);
  },
  setDate: function setDate(date, num) {
    return date.date(num);
  },
  setHour: function setHour(date, hour) {
    return date.hour(hour);
  },
  setMinute: function setMinute(date, minute) {
    return date.minute(minute);
  },
  setSecond: function setSecond(date, second) {
    return date.second(second);
  },
  isAfter: function isAfter(date1, date2) {
    return date1.isAfter(date2);
  },
  isValidate: function isValidate(date) {
    return date.isValid();
  },
  locale: {
    getWeekFirstDay: function getWeekFirstDay(locale) {
      return dayjs().locale(parseLocale(locale)).localeData().firstDayOfWeek();
    },
    getWeekFirstDate: function getWeekFirstDate(locale, date) {
      return date.locale(parseLocale(locale)).weekday(0);
    },
    getWeek: function getWeek(locale, date) {
      return date.locale(parseLocale(locale)).week();
    },
    getShortWeekDays: function getShortWeekDays(locale) {
      return dayjs().locale(parseLocale(locale)).localeData().weekdaysMin();
    },
    getShortMonths: function getShortMonths(locale) {
      return dayjs().locale(parseLocale(locale)).localeData().monthsShort();
    },
    format: function format(locale, date, _format) {
      return date.locale(parseLocale(locale)).format(_format);
    },
    parse: function parse(locale, text, formats) {
      var localeStr = parseLocale(locale);
      for (var i = 0; i < formats.length; i += 1) {
        var format2 = formats[i];
        var formatText = text;
        if (format2.includes("wo") || format2.includes("Wo")) {
          var year = formatText.split("-")[0];
          var weekStr = formatText.split("-")[1];
          var firstWeek = dayjs(year, "YYYY").startOf("year").locale(localeStr);
          for (var j = 0; j <= 52; j += 1) {
            var nextWeek = firstWeek.add(j, "week");
            if (nextWeek.format("Wo") === weekStr) {
              return nextWeek;
            }
          }
          parseNoMatchNotice();
          return null;
        }
        var date = dayjs(formatText, format2, true).locale(localeStr);
        if (date.isValid()) {
          return date;
        }
      }
      if (!text) {
        parseNoMatchNotice();
      }
      return null;
    }
  },
  toDate: function toDate(value, valueFormat) {
    if (Array.isArray(value)) {
      return value.map(function(val) {
        return typeof val === "string" && val ? dayjs(val, valueFormat) : val || null;
      });
    } else {
      return typeof value === "string" && value ? dayjs(value, valueFormat) : value || null;
    }
  },
  toString: function toString(value, valueFormat) {
    if (Array.isArray(value)) {
      return value.map(function(val) {
        return dayjs.isDayjs(val) ? val.format(valueFormat) : val;
      });
    } else {
      return dayjs.isDayjs(value) ? value.format(valueFormat) : value;
    }
  }
};
var dayjsGenerateConfig = generateConfig;
function useMergeProps(props) {
  var attrs = useAttrs();
  return _extends(_extends({}, props), attrs);
}
var PanelContextKey = Symbol("PanelContextProps");
var useProvidePanel = function useProvidePanel2(props) {
  provide(PanelContextKey, props);
};
var useInjectPanel = function useInjectPanel2() {
  return inject(PanelContextKey, {});
};
var HIDDEN_STYLE = {
  visibility: "hidden"
};
function Header(_props, _ref) {
  var slots = _ref.slots;
  var _a;
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, _props$prevIcon = props.prevIcon, prevIcon = _props$prevIcon === void 0 ? "\u2039" : _props$prevIcon, _props$nextIcon = props.nextIcon, nextIcon = _props$nextIcon === void 0 ? "\u203A" : _props$nextIcon, _props$superPrevIcon = props.superPrevIcon, superPrevIcon = _props$superPrevIcon === void 0 ? "\xAB" : _props$superPrevIcon, _props$superNextIcon = props.superNextIcon, superNextIcon = _props$superNextIcon === void 0 ? "\xBB" : _props$superNextIcon, onSuperPrev = props.onSuperPrev, onSuperNext = props.onSuperNext, onPrev = props.onPrev, onNext = props.onNext;
  var _useInjectPanel = useInjectPanel(), hideNextBtn = _useInjectPanel.hideNextBtn, hidePrevBtn = _useInjectPanel.hidePrevBtn;
  return createVNode("div", {
    "class": prefixCls
  }, [onSuperPrev && createVNode("button", {
    "type": "button",
    "onClick": onSuperPrev,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-super-prev-btn"),
    "style": hidePrevBtn.value ? HIDDEN_STYLE : {}
  }, [superPrevIcon]), onPrev && createVNode("button", {
    "type": "button",
    "onClick": onPrev,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-prev-btn"),
    "style": hidePrevBtn.value ? HIDDEN_STYLE : {}
  }, [prevIcon]), createVNode("div", {
    "class": "".concat(prefixCls, "-view")
  }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), onNext && createVNode("button", {
    "type": "button",
    "onClick": onNext,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-next-btn"),
    "style": hideNextBtn.value ? HIDDEN_STYLE : {}
  }, [nextIcon]), onSuperNext && createVNode("button", {
    "type": "button",
    "onClick": onSuperNext,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-super-next-btn"),
    "style": hideNextBtn.value ? HIDDEN_STYLE : {}
  }, [superNextIcon])]);
}
Header.displayName = "Header";
Header.inheritAttrs = false;
function DecadeHeader(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, viewDate = props.viewDate, onPrevDecades = props.onPrevDecades, onNextDecades = props.onNextDecades;
  var _useInjectPanel = useInjectPanel(), hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig2.getYear(viewDate);
  var startYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endYear = startYear + DECADE_DISTANCE_COUNT - 1;
  return createVNode(Header, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevDecades,
    "onSuperNext": onNextDecades
  }), {
    default: function _default2() {
      return [startYear, createTextVNode("-"), endYear];
    }
  });
}
DecadeHeader.displayName = "DecadeHeader";
DecadeHeader.inheritAttrs = false;
function setTime(generateConfig2, date, hour, minute, second) {
  var nextTime = generateConfig2.setHour(date, hour);
  nextTime = generateConfig2.setMinute(nextTime, minute);
  nextTime = generateConfig2.setSecond(nextTime, second);
  return nextTime;
}
function setDateTime(generateConfig2, date, defaultDate) {
  if (!defaultDate) {
    return date;
  }
  var newDate = date;
  newDate = generateConfig2.setHour(newDate, generateConfig2.getHour(defaultDate));
  newDate = generateConfig2.setMinute(newDate, generateConfig2.getMinute(defaultDate));
  newDate = generateConfig2.setSecond(newDate, generateConfig2.getSecond(defaultDate));
  return newDate;
}
function getLowerBoundTime(hour, minute, second, hourStep, minuteStep, secondStep) {
  var lowerBoundHour = Math.floor(hour / hourStep) * hourStep;
  if (lowerBoundHour < hour) {
    return [lowerBoundHour, 60 - minuteStep, 60 - secondStep];
  }
  var lowerBoundMinute = Math.floor(minute / minuteStep) * minuteStep;
  if (lowerBoundMinute < minute) {
    return [lowerBoundHour, lowerBoundMinute, 60 - secondStep];
  }
  var lowerBoundSecond = Math.floor(second / secondStep) * secondStep;
  return [lowerBoundHour, lowerBoundMinute, lowerBoundSecond];
}
function getLastDay(generateConfig2, date) {
  var year = generateConfig2.getYear(date);
  var month = generateConfig2.getMonth(date) + 1;
  var endDate = generateConfig2.getEndDate(generateConfig2.getFixedDate("".concat(year, "-").concat(month, "-01")));
  var lastDay = generateConfig2.getDate(endDate);
  var monthShow = month < 10 ? "0".concat(month) : "".concat(month);
  return "".concat(year, "-").concat(monthShow, "-").concat(lastDay);
}
function PanelBody(_props) {
  var _useMergeProps = useMergeProps(_props), prefixCls = _useMergeProps.prefixCls, disabledDate = _useMergeProps.disabledDate, onSelect = _useMergeProps.onSelect, picker = _useMergeProps.picker, rowNum = _useMergeProps.rowNum, colNum = _useMergeProps.colNum, prefixColumn = _useMergeProps.prefixColumn, rowClassName = _useMergeProps.rowClassName, baseDate = _useMergeProps.baseDate, getCellClassName = _useMergeProps.getCellClassName, getCellText = _useMergeProps.getCellText, getCellNode = _useMergeProps.getCellNode, getCellDate = _useMergeProps.getCellDate, generateConfig2 = _useMergeProps.generateConfig, titleCell = _useMergeProps.titleCell, headerCells = _useMergeProps.headerCells;
  var _useInjectPanel = useInjectPanel(), onDateMouseenter = _useInjectPanel.onDateMouseenter, onDateMouseleave = _useInjectPanel.onDateMouseleave, mode = _useInjectPanel.mode;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var rows = [];
  for (var i = 0; i < rowNum; i += 1) {
    var row = [];
    var rowStartDate = void 0;
    var _loop = function _loop2(j2) {
      var _extends2;
      var offset = i * colNum + j2;
      var currentDate = getCellDate(baseDate, offset);
      var disabled = getCellDateDisabled({
        cellDate: currentDate,
        mode: mode.value,
        disabledDate,
        generateConfig: generateConfig2
      });
      if (j2 === 0) {
        rowStartDate = currentDate;
        if (prefixColumn) {
          row.push(prefixColumn(rowStartDate));
        }
      }
      var title = titleCell && titleCell(currentDate);
      row.push(createVNode("td", {
        "key": j2,
        "title": title,
        "class": classNames(cellPrefixCls, _extends((_extends2 = {}, _defineProperty$4(_extends2, "".concat(cellPrefixCls, "-disabled"), disabled), _defineProperty$4(_extends2, "".concat(cellPrefixCls, "-start"), getCellText(currentDate) === 1 || picker === "year" && Number(title) % 10 === 0), _defineProperty$4(_extends2, "".concat(cellPrefixCls, "-end"), title === getLastDay(generateConfig2, currentDate) || picker === "year" && Number(title) % 10 === 9), _extends2), getCellClassName(currentDate))),
        "onClick": function onClick() {
          if (!disabled) {
            onSelect(currentDate);
          }
        },
        "onMouseenter": function onMouseenter() {
          if (!disabled && onDateMouseenter) {
            onDateMouseenter(currentDate);
          }
        },
        "onMouseleave": function onMouseleave() {
          if (!disabled && onDateMouseleave) {
            onDateMouseleave(currentDate);
          }
        }
      }, [getCellNode ? getCellNode(currentDate) : createVNode("div", {
        "class": "".concat(cellPrefixCls, "-inner")
      }, [getCellText(currentDate)])]));
    };
    for (var j = 0; j < colNum; j += 1) {
      _loop(j);
    }
    rows.push(createVNode("tr", {
      "key": i,
      "class": rowClassName && rowClassName(rowStartDate)
    }, [row]));
  }
  return createVNode("div", {
    "class": "".concat(prefixCls, "-body")
  }, [createVNode("table", {
    "class": "".concat(prefixCls, "-content")
  }, [headerCells && createVNode("thead", null, [createVNode("tr", null, [headerCells])]), createVNode("tbody", null, [rows])])]);
}
PanelBody.displayName = "PanelBody";
PanelBody.inheritAttrs = false;
var DECADE_COL_COUNT = 3;
var DECADE_ROW_COUNT = 4;
function DecadeBody(_props) {
  var props = useMergeProps(_props);
  var DECADE_UNIT_DIFF_DES = DECADE_UNIT_DIFF - 1;
  var prefixCls = props.prefixCls, viewDate = props.viewDate, generateConfig2 = props.generateConfig;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var yearNumber = generateConfig2.getYear(viewDate);
  var decadeYearNumber = Math.floor(yearNumber / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
  var startDecadeYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endDecadeYear = startDecadeYear + DECADE_DISTANCE_COUNT - 1;
  var baseDecadeYear = generateConfig2.setYear(viewDate, startDecadeYear - Math.ceil((DECADE_COL_COUNT * DECADE_ROW_COUNT * DECADE_UNIT_DIFF - DECADE_DISTANCE_COUNT) / 2));
  var getCellClassName = function getCellClassName2(date) {
    var _ref;
    var startDecadeNumber = generateConfig2.getYear(date);
    var endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;
    return _ref = {}, _defineProperty$4(_ref, "".concat(cellPrefixCls, "-in-view"), startDecadeYear <= startDecadeNumber && endDecadeNumber <= endDecadeYear), _defineProperty$4(_ref, "".concat(cellPrefixCls, "-selected"), startDecadeNumber === decadeYearNumber), _ref;
  };
  return createVNode(PanelBody, _objectSpread2(_objectSpread2({}, props), {}, {
    "rowNum": DECADE_ROW_COUNT,
    "colNum": DECADE_COL_COUNT,
    "baseDate": baseDecadeYear,
    "getCellText": function getCellText(date) {
      var startDecadeNumber = generateConfig2.getYear(date);
      return "".concat(startDecadeNumber, "-").concat(startDecadeNumber + DECADE_UNIT_DIFF_DES);
    },
    "getCellClassName": getCellClassName,
    "getCellDate": function getCellDate(date, offset) {
      return generateConfig2.addYear(date, offset * DECADE_UNIT_DIFF);
    }
  }), null);
}
DecadeBody.displayName = "DecadeBody";
DecadeBody.inheritAttrs = false;
var scrollIds = /* @__PURE__ */ new Map();
function waitElementReady(element, callback) {
  var id;
  function tryOrNextFrame() {
    if (isVisible(element)) {
      callback();
    } else {
      id = wrapperRaf(function() {
        tryOrNextFrame();
      });
    }
  }
  tryOrNextFrame();
  return function() {
    wrapperRaf.cancel(id);
  };
}
function scrollTo(element, to, duration) {
  if (scrollIds.get(element)) {
    wrapperRaf.cancel(scrollIds.get(element));
  }
  if (duration <= 0) {
    scrollIds.set(element, wrapperRaf(function() {
      element.scrollTop = to;
    }));
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  scrollIds.set(element, wrapperRaf(function() {
    element.scrollTop += perTick;
    if (element.scrollTop !== to) {
      scrollTo(element, to, duration - 10);
    }
  }));
}
function createKeydownHandler(event, _ref) {
  var onLeftRight = _ref.onLeftRight, onCtrlLeftRight = _ref.onCtrlLeftRight, onUpDown = _ref.onUpDown, onPageUpDown = _ref.onPageUpDown, onEnter = _ref.onEnter;
  var which = event.which, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
  switch (which) {
    case KeyCode.LEFT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(-1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(-1);
        return true;
      }
      break;
    case KeyCode.RIGHT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(1);
        return true;
      }
      break;
    case KeyCode.UP:
      if (onUpDown) {
        onUpDown(-1);
        return true;
      }
      break;
    case KeyCode.DOWN:
      if (onUpDown) {
        onUpDown(1);
        return true;
      }
      break;
    case KeyCode.PAGE_UP:
      if (onPageUpDown) {
        onPageUpDown(-1);
        return true;
      }
      break;
    case KeyCode.PAGE_DOWN:
      if (onPageUpDown) {
        onPageUpDown(1);
        return true;
      }
      break;
    case KeyCode.ENTER:
      if (onEnter) {
        onEnter();
        return true;
      }
      break;
  }
  return false;
}
function getDefaultFormat(format2, picker, showTime, use12Hours) {
  var mergedFormat = format2;
  if (!mergedFormat) {
    switch (picker) {
      case "time":
        mergedFormat = use12Hours ? "hh:mm:ss a" : "HH:mm:ss";
        break;
      case "week":
        mergedFormat = "gggg-wo";
        break;
      case "month":
        mergedFormat = "YYYY-MM";
        break;
      case "quarter":
        mergedFormat = "YYYY-[Q]Q";
        break;
      case "year":
        mergedFormat = "YYYY";
        break;
      default:
        mergedFormat = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
    }
  }
  return mergedFormat;
}
function getInputSize(picker, format2, generateConfig2) {
  var defaultSize = picker === "time" ? 8 : 10;
  var length = typeof format2 === "function" ? format2(generateConfig2.getNow()).length : format2.length;
  return Math.max(defaultSize, length) + 2;
}
var globalClickFunc = null;
var clickCallbacks = /* @__PURE__ */ new Set();
function addGlobalMousedownEvent(callback) {
  if (!globalClickFunc && typeof window !== "undefined" && window.addEventListener) {
    globalClickFunc = function globalClickFunc2(e) {
      _toConsumableArray(clickCallbacks).forEach(function(queueFunc) {
        queueFunc(e);
      });
    };
    window.addEventListener("mousedown", globalClickFunc);
  }
  clickCallbacks.add(callback);
  return function() {
    clickCallbacks.delete(callback);
    if (clickCallbacks.size === 0) {
      window.removeEventListener("mousedown", globalClickFunc);
      globalClickFunc = null;
    }
  };
}
function getTargetFromEvent(e) {
  var _a;
  var target = e.target;
  if (e.composed && target.shadowRoot) {
    return ((_a = e.composedPath) === null || _a === void 0 ? void 0 : _a.call(e)[0]) || target;
  }
  return target;
}
var getYearNextMode = function getYearNextMode2(next) {
  if (next === "month" || next === "date") {
    return "year";
  }
  return next;
};
var getMonthNextMode = function getMonthNextMode2(next) {
  if (next === "date") {
    return "month";
  }
  return next;
};
var getQuarterNextMode = function getQuarterNextMode2(next) {
  if (next === "month" || next === "date") {
    return "quarter";
  }
  return next;
};
var getWeekNextMode = function getWeekNextMode2(next) {
  if (next === "date") {
    return "week";
  }
  return next;
};
var PickerModeMap = {
  year: getYearNextMode,
  month: getMonthNextMode,
  quarter: getQuarterNextMode,
  week: getWeekNextMode,
  time: null,
  date: null
};
function elementsContains(elements, target) {
  return elements.some(function(ele) {
    return ele && ele.contains(target);
  });
}
var DECADE_UNIT_DIFF = 10;
var DECADE_DISTANCE_COUNT = DECADE_UNIT_DIFF * 10;
function DecadePanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, onViewDateChange = props.onViewDateChange, generateConfig2 = props.generateConfig, viewDate = props.viewDate, operationRef = props.operationRef, onSelect = props.onSelect, onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-decade-panel");
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          onSelect(generateConfig2.addYear(viewDate, diff * DECADE_UNIT_DIFF), "key");
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          onSelect(generateConfig2.addYear(viewDate, diff * DECADE_DISTANCE_COUNT), "key");
        },
        onUpDown: function onUpDown(diff) {
          onSelect(generateConfig2.addYear(viewDate, diff * DECADE_UNIT_DIFF * DECADE_COL_COUNT), "key");
        },
        onEnter: function onEnter() {
          onPanelChange("year", viewDate);
        }
      });
    }
  };
  var onDecadesChange = function onDecadesChange2(diff) {
    var newDate = generateConfig2.addYear(viewDate, diff * DECADE_DISTANCE_COUNT);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  var onInternalSelect = function onInternalSelect2(date) {
    onSelect(date, "mouse");
    onPanelChange("year", date);
  };
  return createVNode("div", {
    "class": panelPrefixCls
  }, [createVNode(DecadeHeader, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevDecades": function onPrevDecades() {
      onDecadesChange(-1);
    },
    "onNextDecades": function onNextDecades() {
      onDecadesChange(1);
    }
  }), null), createVNode(DecadeBody, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": onInternalSelect
  }), null)]);
}
DecadePanel.displayName = "DecadePanel";
DecadePanel.inheritAttrs = false;
var WEEK_DAY_COUNT = 7;
function isNullEqual(value1, value2) {
  if (!value1 && !value2) {
    return true;
  }
  if (!value1 || !value2) {
    return false;
  }
  return void 0;
}
function isSameDecade(generateConfig2, decade1, decade2) {
  var equal = isNullEqual(decade1, decade2);
  if (typeof equal === "boolean") {
    return equal;
  }
  var num1 = Math.floor(generateConfig2.getYear(decade1) / 10);
  var num2 = Math.floor(generateConfig2.getYear(decade2) / 10);
  return num1 === num2;
}
function isSameYear(generateConfig2, year1, year2) {
  var equal = isNullEqual(year1, year2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.getYear(year1) === generateConfig2.getYear(year2);
}
function getQuarter(generateConfig2, date) {
  var quota = Math.floor(generateConfig2.getMonth(date) / 3);
  return quota + 1;
}
function isSameQuarter(generateConfig2, quarter1, quarter2) {
  var equal = isNullEqual(quarter1, quarter2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return isSameYear(generateConfig2, quarter1, quarter2) && getQuarter(generateConfig2, quarter1) === getQuarter(generateConfig2, quarter2);
}
function isSameMonth(generateConfig2, month1, month2) {
  var equal = isNullEqual(month1, month2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return isSameYear(generateConfig2, month1, month2) && generateConfig2.getMonth(month1) === generateConfig2.getMonth(month2);
}
function isSameDate(generateConfig2, date1, date2) {
  var equal = isNullEqual(date1, date2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.getYear(date1) === generateConfig2.getYear(date2) && generateConfig2.getMonth(date1) === generateConfig2.getMonth(date2) && generateConfig2.getDate(date1) === generateConfig2.getDate(date2);
}
function isSameTime(generateConfig2, time1, time2) {
  var equal = isNullEqual(time1, time2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.getHour(time1) === generateConfig2.getHour(time2) && generateConfig2.getMinute(time1) === generateConfig2.getMinute(time2) && generateConfig2.getSecond(time1) === generateConfig2.getSecond(time2);
}
function isSameWeek(generateConfig2, locale, date1, date2) {
  var equal = isNullEqual(date1, date2);
  if (typeof equal === "boolean") {
    return equal;
  }
  return generateConfig2.locale.getWeek(locale, date1) === generateConfig2.locale.getWeek(locale, date2);
}
function isEqual(generateConfig2, value1, value2) {
  return isSameDate(generateConfig2, value1, value2) && isSameTime(generateConfig2, value1, value2);
}
function isInRange(generateConfig2, startDate, endDate, current) {
  if (!startDate || !endDate || !current) {
    return false;
  }
  return !isSameDate(generateConfig2, startDate, current) && !isSameDate(generateConfig2, endDate, current) && generateConfig2.isAfter(current, startDate) && generateConfig2.isAfter(endDate, current);
}
function getWeekStartDate(locale, generateConfig2, value) {
  var weekFirstDay = generateConfig2.locale.getWeekFirstDay(locale);
  var monthStartDate = generateConfig2.setDate(value, 1);
  var startDateWeekDay = generateConfig2.getWeekDay(monthStartDate);
  var alignStartDate = generateConfig2.addDate(monthStartDate, weekFirstDay - startDateWeekDay);
  if (generateConfig2.getMonth(alignStartDate) === generateConfig2.getMonth(value) && generateConfig2.getDate(alignStartDate) > 1) {
    alignStartDate = generateConfig2.addDate(alignStartDate, -7);
  }
  return alignStartDate;
}
function getClosingViewDate(viewDate, picker, generateConfig2) {
  var offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  switch (picker) {
    case "year":
      return generateConfig2.addYear(viewDate, offset * 10);
    case "quarter":
    case "month":
      return generateConfig2.addYear(viewDate, offset);
    default:
      return generateConfig2.addMonth(viewDate, offset);
  }
}
function formatValue(value, _ref) {
  var generateConfig2 = _ref.generateConfig, locale = _ref.locale, format2 = _ref.format;
  return typeof format2 === "function" ? format2(value) : generateConfig2.locale.format(locale.locale, value, format2);
}
function parseValue(value, _ref2) {
  var generateConfig2 = _ref2.generateConfig, locale = _ref2.locale, formatList = _ref2.formatList;
  if (!value || typeof formatList[0] === "function") {
    return null;
  }
  return generateConfig2.locale.parse(locale.locale, value, formatList);
}
function getCellDateDisabled(_ref3) {
  var cellDate = _ref3.cellDate, mode = _ref3.mode, disabledDate = _ref3.disabledDate, generateConfig2 = _ref3.generateConfig;
  if (!disabledDate)
    return false;
  var getDisabledFromRange = function getDisabledFromRange2(currentMode, start, end) {
    var current = start;
    while (current <= end) {
      var date = void 0;
      switch (currentMode) {
        case "date": {
          date = generateConfig2.setDate(cellDate, current);
          if (!disabledDate(date)) {
            return false;
          }
          break;
        }
        case "month": {
          date = generateConfig2.setMonth(cellDate, current);
          if (!getCellDateDisabled({
            cellDate: date,
            mode: "month",
            generateConfig: generateConfig2,
            disabledDate
          })) {
            return false;
          }
          break;
        }
        case "year": {
          date = generateConfig2.setYear(cellDate, current);
          if (!getCellDateDisabled({
            cellDate: date,
            mode: "year",
            generateConfig: generateConfig2,
            disabledDate
          })) {
            return false;
          }
          break;
        }
      }
      current += 1;
    }
    return true;
  };
  switch (mode) {
    case "date":
    case "week": {
      return disabledDate(cellDate);
    }
    case "month": {
      var startDate = 1;
      var endDate = generateConfig2.getDate(generateConfig2.getEndDate(cellDate));
      return getDisabledFromRange("date", startDate, endDate);
    }
    case "quarter": {
      var startMonth = Math.floor(generateConfig2.getMonth(cellDate) / 3) * 3;
      var endMonth = startMonth + 2;
      return getDisabledFromRange("month", startMonth, endMonth);
    }
    case "year": {
      return getDisabledFromRange("month", 0, 11);
    }
    case "decade": {
      var year = generateConfig2.getYear(cellDate);
      var startYear = Math.floor(year / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
      var endYear = startYear + DECADE_UNIT_DIFF - 1;
      return getDisabledFromRange("year", startYear, endYear);
    }
  }
}
function TimeHeader(_props) {
  var props = useMergeProps(_props);
  var _useInjectPanel = useInjectPanel(), hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, locale = props.locale, value = props.value, format2 = props.format;
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return createVNode(Header, {
    "prefixCls": headerPrefixCls
  }, {
    default: function _default2() {
      return [value ? formatValue(value, {
        locale,
        format: format2,
        generateConfig: generateConfig2
      }) : "\xA0"];
    }
  });
}
TimeHeader.displayName = "TimeHeader";
TimeHeader.inheritAttrs = false;
var TimeUnitColumn = defineComponent({
  name: "TimeUnitColumn",
  props: ["prefixCls", "units", "onSelect", "value", "active", "hideDisabledOptions"],
  setup: function setup5(props) {
    var _useInjectPanel = useInjectPanel(), open = _useInjectPanel.open;
    var ulRef = ref(null);
    var liRefs = ref(/* @__PURE__ */ new Map());
    var scrollRef = ref();
    watch(function() {
      return props.value;
    }, function() {
      var li = liRefs.value.get(props.value);
      if (li && open.value !== false) {
        scrollTo(ulRef.value, li.offsetTop, 120);
      }
    });
    onBeforeUnmount(function() {
      var _a;
      (_a = scrollRef.value) === null || _a === void 0 ? void 0 : _a.call(scrollRef);
    });
    watch(open, function() {
      var _a;
      (_a = scrollRef.value) === null || _a === void 0 ? void 0 : _a.call(scrollRef);
      nextTick(function() {
        if (open.value) {
          var li = liRefs.value.get(props.value);
          if (li) {
            scrollRef.value = waitElementReady(li, function() {
              scrollTo(ulRef.value, li.offsetTop, 0);
            });
          }
        }
      });
    }, {
      immediate: true,
      flush: "post"
    });
    return function() {
      var prefixCls = props.prefixCls, units = props.units, onSelect = props.onSelect, value = props.value, active = props.active, hideDisabledOptions = props.hideDisabledOptions;
      var cellPrefixCls = "".concat(prefixCls, "-cell");
      return createVNode("ul", {
        "class": classNames("".concat(prefixCls, "-column"), _defineProperty$4({}, "".concat(prefixCls, "-column-active"), active)),
        "ref": ulRef,
        "style": {
          position: "relative"
        }
      }, [units.map(function(unit) {
        var _classNames2;
        if (hideDisabledOptions && unit.disabled) {
          return null;
        }
        return createVNode("li", {
          "key": unit.value,
          "ref": function ref2(element) {
            liRefs.value.set(unit.value, element);
          },
          "class": classNames(cellPrefixCls, (_classNames2 = {}, _defineProperty$4(_classNames2, "".concat(cellPrefixCls, "-disabled"), unit.disabled), _defineProperty$4(_classNames2, "".concat(cellPrefixCls, "-selected"), value === unit.value), _classNames2)),
          "onClick": function onClick() {
            if (unit.disabled) {
              return;
            }
            onSelect(unit.value);
          }
        }, [createVNode("div", {
          "class": "".concat(cellPrefixCls, "-inner")
        }, [unit.label])]);
      })]);
    };
  }
});
function leftPad(str, length) {
  var fill = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  var current = String(str);
  while (current.length < length) {
    current = "".concat(fill).concat(str);
  }
  return current;
}
var tuple = function tuple2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
function toArray$1(val) {
  if (val === null || val === void 0) {
    return [];
  }
  return Array.isArray(val) ? val : [val];
}
function getDataOrAriaProps(props) {
  var retProps = {};
  Object.keys(props).forEach(function(key) {
    if ((key.substr(0, 5) === "data-" || key.substr(0, 5) === "aria-" || key === "role" || key === "name") && key.substr(0, 7) !== "data-__") {
      retProps[key] = props[key];
    }
  });
  return retProps;
}
function getValue(values, index2) {
  return values ? values[index2] : null;
}
function updateValues(values, value, index2) {
  var newValues = [getValue(values, 0), getValue(values, 1)];
  newValues[index2] = typeof value === "function" ? value(newValues[index2]) : value;
  if (!newValues[0] && !newValues[1]) {
    return null;
  }
  return newValues;
}
function generateUnits(start, end, step, disabledUnits) {
  var units = [];
  for (var i = start; i <= end; i += step) {
    units.push({
      label: leftPad(i, 2),
      value: i,
      disabled: (disabledUnits || []).includes(i)
    });
  }
  return units;
}
var TimeBody = defineComponent({
  name: "TimeBody",
  inheritAttrs: false,
  props: ["generateConfig", "prefixCls", "operationRef", "activeColumnIndex", "value", "showHour", "showMinute", "showSecond", "use12Hours", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "disabledTime", "hideDisabledOptions", "onSelect"],
  setup: function setup6(props) {
    var originHour = computed(function() {
      return props.value ? props.generateConfig.getHour(props.value) : -1;
    });
    var isPM = computed(function() {
      if (props.use12Hours) {
        return originHour.value >= 12;
      } else {
        return false;
      }
    });
    var hour = computed(function() {
      if (props.use12Hours) {
        return originHour.value % 12;
      } else {
        return originHour.value;
      }
    });
    var minute = computed(function() {
      return props.value ? props.generateConfig.getMinute(props.value) : -1;
    });
    var second = computed(function() {
      return props.value ? props.generateConfig.getSecond(props.value) : -1;
    });
    var now = ref(props.generateConfig.getNow());
    var mergedDisabledHours = ref();
    var mergedDisabledMinutes = ref();
    var mergedDisabledSeconds = ref();
    onBeforeUpdate(function() {
      now.value = props.generateConfig.getNow();
    });
    watchEffect(function() {
      if (props.disabledTime) {
        var disabledConfig = props.disabledTime(now);
        var _ref = [disabledConfig.disabledHours, disabledConfig.disabledMinutes, disabledConfig.disabledSeconds];
        mergedDisabledHours.value = _ref[0];
        mergedDisabledMinutes.value = _ref[1];
        mergedDisabledSeconds.value = _ref[2];
      } else {
        var _ref2 = [props.disabledHours, props.disabledMinutes, props.disabledSeconds];
        mergedDisabledHours.value = _ref2[0];
        mergedDisabledMinutes.value = _ref2[1];
        mergedDisabledSeconds.value = _ref2[2];
      }
    });
    var setTime$1 = function setTime$12(isNewPM, newHour, newMinute, newSecond) {
      var newDate = props.value || props.generateConfig.getNow();
      var mergedHour = Math.max(0, newHour);
      var mergedMinute = Math.max(0, newMinute);
      var mergedSecond = Math.max(0, newSecond);
      newDate = setTime(props.generateConfig, newDate, !props.use12Hours || !isNewPM ? mergedHour : mergedHour + 12, mergedMinute, mergedSecond);
      return newDate;
    };
    var rawHours = computed(function() {
      var _a;
      return generateUnits(0, 23, (_a = props.hourStep) !== null && _a !== void 0 ? _a : 1, mergedDisabledHours.value && mergedDisabledHours.value());
    });
    var AMPMDisabled = computed(function() {
      if (!props.use12Hours) {
        return [false, false];
      }
      var AMPMDisabled2 = [true, true];
      rawHours.value.forEach(function(_ref3) {
        var disabled = _ref3.disabled, hourValue = _ref3.value;
        if (disabled)
          return;
        if (hourValue >= 12) {
          AMPMDisabled2[1] = false;
        } else {
          AMPMDisabled2[0] = false;
        }
      });
      return AMPMDisabled2;
    });
    var hours = computed(function() {
      if (!props.use12Hours)
        return rawHours.value;
      return rawHours.value.filter(isPM.value ? function(hourMeta) {
        return hourMeta.value >= 12;
      } : function(hourMeta) {
        return hourMeta.value < 12;
      }).map(function(hourMeta) {
        var hourValue = hourMeta.value % 12;
        var hourLabel = hourValue === 0 ? "12" : leftPad(hourValue, 2);
        return _extends(_extends({}, hourMeta), {
          label: hourLabel,
          value: hourValue
        });
      });
    });
    var minutes = computed(function() {
      var _a;
      return generateUnits(0, 59, (_a = props.minuteStep) !== null && _a !== void 0 ? _a : 1, mergedDisabledMinutes.value && mergedDisabledMinutes.value(originHour.value));
    });
    var seconds = computed(function() {
      var _a;
      return generateUnits(0, 59, (_a = props.secondStep) !== null && _a !== void 0 ? _a : 1, mergedDisabledSeconds.value && mergedDisabledSeconds.value(originHour.value, minute));
    });
    return function() {
      var prefixCls = props.prefixCls, operationRef = props.operationRef, activeColumnIndex = props.activeColumnIndex, showHour = props.showHour, showMinute = props.showMinute, showSecond = props.showSecond, use12Hours = props.use12Hours, hideDisabledOptions = props.hideDisabledOptions, onSelect = props.onSelect;
      var columns = [];
      var contentPrefixCls = "".concat(prefixCls, "-content");
      var columnPrefixCls = "".concat(prefixCls, "-time-panel");
      operationRef.value = {
        onUpDown: function onUpDown(diff) {
          var column = columns[activeColumnIndex];
          if (column) {
            var valueIndex = column.units.findIndex(function(unit) {
              return unit.value === column.value;
            });
            var unitLen = column.units.length;
            for (var i = 1; i < unitLen; i += 1) {
              var nextUnit = column.units[(valueIndex + diff * i + unitLen) % unitLen];
              if (nextUnit.disabled !== true) {
                column.onSelect(nextUnit.value);
                break;
              }
            }
          }
        }
      };
      function addColumnNode(condition, node, columnValue, units, onColumnSelect) {
        if (condition !== false) {
          columns.push({
            node: cloneElement(node, {
              prefixCls: columnPrefixCls,
              value: columnValue,
              active: activeColumnIndex === columns.length,
              onSelect: onColumnSelect,
              units,
              hideDisabledOptions
            }),
            onSelect: onColumnSelect,
            value: columnValue,
            units
          });
        }
      }
      addColumnNode(showHour, createVNode(TimeUnitColumn, {
        "key": "hour"
      }, null), hour.value, hours.value, function(num) {
        onSelect(setTime$1(isPM.value, num, minute.value, second.value), "mouse");
      });
      addColumnNode(showMinute, createVNode(TimeUnitColumn, {
        "key": "minute"
      }, null), minute.value, minutes.value, function(num) {
        onSelect(setTime$1(isPM.value, hour.value, num, second.value), "mouse");
      });
      addColumnNode(showSecond, createVNode(TimeUnitColumn, {
        "key": "second"
      }, null), second.value, seconds.value, function(num) {
        onSelect(setTime$1(isPM.value, hour.value, minute.value, num), "mouse");
      });
      var PMIndex = -1;
      if (typeof isPM.value === "boolean") {
        PMIndex = isPM.value ? 1 : 0;
      }
      addColumnNode(use12Hours === true, createVNode(TimeUnitColumn, {
        "key": "12hours"
      }, null), PMIndex, [{
        label: "AM",
        value: 0,
        disabled: AMPMDisabled.value[0]
      }, {
        label: "PM",
        value: 1,
        disabled: AMPMDisabled.value[1]
      }], function(num) {
        onSelect(setTime$1(!!num, hour.value, minute.value, second.value), "mouse");
      });
      return createVNode("div", {
        "class": contentPrefixCls
      }, [columns.map(function(_ref4) {
        var node = _ref4.node;
        return node;
      })]);
    };
  }
});
var TimeBody$1 = TimeBody;
var countBoolean = function countBoolean2(boolList) {
  return boolList.filter(function(bool) {
    return bool !== false;
  }).length;
};
function TimePanel(_props) {
  var props = useMergeProps(_props);
  var generateConfig2 = props.generateConfig, _props$format = props.format, format2 = _props$format === void 0 ? "HH:mm:ss" : _props$format, prefixCls = props.prefixCls, active = props.active, operationRef = props.operationRef, showHour = props.showHour, showMinute = props.showMinute, showSecond = props.showSecond, _props$use12Hours = props.use12Hours, use12Hours = _props$use12Hours === void 0 ? false : _props$use12Hours, onSelect = props.onSelect, value = props.value;
  var panelPrefixCls = "".concat(prefixCls, "-time-panel");
  var bodyOperationRef = ref();
  var activeColumnIndex = ref(-1);
  var columnsCount = countBoolean([showHour, showMinute, showSecond, use12Hours]);
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          activeColumnIndex.value = (activeColumnIndex.value + diff + columnsCount) % columnsCount;
        },
        onUpDown: function onUpDown(diff) {
          if (activeColumnIndex.value === -1) {
            activeColumnIndex.value = 0;
          } else if (bodyOperationRef.value) {
            bodyOperationRef.value.onUpDown(diff);
          }
        },
        onEnter: function onEnter() {
          onSelect(value || generateConfig2.getNow(), "key");
          activeColumnIndex.value = -1;
        }
      });
    },
    onBlur: function onBlur() {
      activeColumnIndex.value = -1;
    }
  };
  return createVNode("div", {
    "class": classNames(panelPrefixCls, _defineProperty$4({}, "".concat(panelPrefixCls, "-active"), active))
  }, [createVNode(TimeHeader, _objectSpread2(_objectSpread2({}, props), {}, {
    "format": format2,
    "prefixCls": prefixCls
  }), null), createVNode(TimeBody$1, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": prefixCls,
    "activeColumnIndex": activeColumnIndex.value,
    "operationRef": bodyOperationRef
  }), null)]);
}
TimePanel.displayName = "TimePanel";
TimePanel.inheritAttrs = false;
function useCellClassName(_ref) {
  var cellPrefixCls = _ref.cellPrefixCls, generateConfig2 = _ref.generateConfig, rangedValue = _ref.rangedValue, hoverRangedValue = _ref.hoverRangedValue, isInView = _ref.isInView, isSameCell = _ref.isSameCell, offsetCell = _ref.offsetCell, today = _ref.today, value = _ref.value;
  function getClassName(currentDate) {
    var _ref2;
    var prevDate = offsetCell(currentDate, -1);
    var nextDate = offsetCell(currentDate, 1);
    var rangeStart = getValue(rangedValue, 0);
    var rangeEnd = getValue(rangedValue, 1);
    var hoverStart = getValue(hoverRangedValue, 0);
    var hoverEnd = getValue(hoverRangedValue, 1);
    var isRangeHovered = isInRange(generateConfig2, hoverStart, hoverEnd, currentDate);
    function isRangeStart(date) {
      return isSameCell(rangeStart, date);
    }
    function isRangeEnd(date) {
      return isSameCell(rangeEnd, date);
    }
    var isHoverStart = isSameCell(hoverStart, currentDate);
    var isHoverEnd = isSameCell(hoverEnd, currentDate);
    var isHoverEdgeStart = (isRangeHovered || isHoverEnd) && (!isInView(prevDate) || isRangeEnd(prevDate));
    var isHoverEdgeEnd = (isRangeHovered || isHoverStart) && (!isInView(nextDate) || isRangeStart(nextDate));
    return _ref2 = {}, _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-in-view"), isInView(currentDate)), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-in-range"), isInRange(generateConfig2, rangeStart, rangeEnd, currentDate)), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-start"), isRangeStart(currentDate)), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-end"), isRangeEnd(currentDate)), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-start-single"), isRangeStart(currentDate) && !rangeEnd), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-end-single"), isRangeEnd(currentDate) && !rangeStart), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-start-near-hover"), isRangeStart(currentDate) && (isSameCell(prevDate, hoverStart) || isInRange(generateConfig2, hoverStart, hoverEnd, prevDate))), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-end-near-hover"), isRangeEnd(currentDate) && (isSameCell(nextDate, hoverEnd) || isInRange(generateConfig2, hoverStart, hoverEnd, nextDate))), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-hover"), isRangeHovered), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-hover-start"), isHoverStart), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-hover-end"), isHoverEnd), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-start"), isHoverEdgeStart), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-end"), isHoverEdgeEnd), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-start-near-range"), isHoverEdgeStart && isSameCell(prevDate, rangeEnd)), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-end-near-range"), isHoverEdgeEnd && isSameCell(nextDate, rangeStart)), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-today"), isSameCell(today, currentDate)), _defineProperty$4(_ref2, "".concat(cellPrefixCls, "-selected"), isSameCell(value, currentDate)), _ref2;
  }
  return getClassName;
}
var RangeContextKey = Symbol("RangeContextProps");
var useProvideRange = function useProvideRange2(props) {
  provide(RangeContextKey, props);
};
var useInjectRange = function useInjectRange2() {
  return inject(RangeContextKey, {
    rangedValue: ref(),
    hoverRangedValue: ref(),
    inRange: ref(),
    panelPosition: ref()
  });
};
var RangeContextProvider = defineComponent({
  name: "PanelContextProvider",
  inheritAttrs: false,
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  setup: function setup7(props, _ref) {
    var slots = _ref.slots;
    var value = {
      rangedValue: ref(props.value.rangedValue),
      hoverRangedValue: ref(props.value.hoverRangedValue),
      inRange: ref(props.value.inRange),
      panelPosition: ref(props.value.panelPosition)
    };
    useProvideRange(value);
    watch(function() {
      return props.value;
    }, function() {
      Object.keys(props.value).forEach(function(key) {
        if (value[key]) {
          value[key].value = props.value[key];
        }
      });
    });
    return function() {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
function DateBody(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, prefixColumn = props.prefixColumn, locale = props.locale, rowCount = props.rowCount, viewDate = props.viewDate, value = props.value, dateRender = props.dateRender;
  var _useInjectRange = useInjectRange(), rangedValue = _useInjectRange.rangedValue, hoverRangedValue = _useInjectRange.hoverRangedValue;
  var baseDate = getWeekStartDate(locale.locale, generateConfig2, viewDate);
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var weekFirstDay = generateConfig2.locale.getWeekFirstDay(locale.locale);
  var today = generateConfig2.getNow();
  var headerCells = [];
  var weekDaysLocale = locale.shortWeekDays || (generateConfig2.locale.getShortWeekDays ? generateConfig2.locale.getShortWeekDays(locale.locale) : []);
  if (prefixColumn) {
    headerCells.push(createVNode("th", {
      "key": "empty",
      "aria-label": "empty cell"
    }, null));
  }
  for (var i = 0; i < WEEK_DAY_COUNT; i += 1) {
    headerCells.push(createVNode("th", {
      "key": i
    }, [weekDaysLocale[(i + weekFirstDay) % WEEK_DAY_COUNT]]));
  }
  var getCellClassName = useCellClassName({
    cellPrefixCls,
    today,
    value,
    generateConfig: generateConfig2,
    rangedValue: prefixColumn ? null : rangedValue.value,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue.value,
    isSameCell: function isSameCell(current, target) {
      return isSameDate(generateConfig2, current, target);
    },
    isInView: function isInView(date) {
      return isSameMonth(generateConfig2, date, viewDate);
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig2.addDate(date, offset);
    }
  });
  var getCellNode = dateRender ? function(date) {
    return dateRender({
      current: date,
      today
    });
  } : void 0;
  return createVNode(PanelBody, _objectSpread2(_objectSpread2({}, props), {}, {
    "rowNum": rowCount,
    "colNum": WEEK_DAY_COUNT,
    "baseDate": baseDate,
    "getCellNode": getCellNode,
    "getCellText": generateConfig2.getDate,
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig2.addDate,
    "titleCell": function titleCell(date) {
      return formatValue(date, {
        locale,
        format: "YYYY-MM-DD",
        generateConfig: generateConfig2
      });
    },
    "headerCells": headerCells
  }), null);
}
DateBody.displayName = "DateBody";
DateBody.inheritAttrs = false;
DateBody.props = [
  "prefixCls",
  "generateConfig",
  "value?",
  "viewDate",
  "locale",
  "rowCount",
  "onSelect",
  "dateRender?",
  "disabledDate?",
  "prefixColumn?",
  "rowClassName?"
];
function DateHeader(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, locale = props.locale, viewDate = props.viewDate, onNextMonth = props.onNextMonth, onPrevMonth = props.onPrevMonth, onNextYear = props.onNextYear, onPrevYear = props.onPrevYear, onYearClick = props.onYearClick, onMonthClick = props.onMonthClick;
  var _useInjectPanel = useInjectPanel(), hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var monthsLocale = locale.shortMonths || (generateConfig2.locale.getShortMonths ? generateConfig2.locale.getShortMonths(locale.locale) : []);
  var month = generateConfig2.getMonth(viewDate);
  var yearNode = createVNode("button", {
    "type": "button",
    "key": "year",
    "onClick": onYearClick,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-year-btn")
  }, [formatValue(viewDate, {
    locale,
    format: locale.yearFormat,
    generateConfig: generateConfig2
  })]);
  var monthNode = createVNode("button", {
    "type": "button",
    "key": "month",
    "onClick": onMonthClick,
    "tabindex": -1,
    "class": "".concat(prefixCls, "-month-btn")
  }, [locale.monthFormat ? formatValue(viewDate, {
    locale,
    format: locale.monthFormat,
    generateConfig: generateConfig2
  }) : monthsLocale[month]]);
  var monthYearNodes = locale.monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
  return createVNode(Header, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevYear,
    "onPrev": onPrevMonth,
    "onNext": onNextMonth,
    "onSuperNext": onNextYear
  }), {
    default: function _default2() {
      return [monthYearNodes];
    }
  });
}
DateHeader.displayName = "DateHeader";
DateHeader.inheritAttrs = false;
var DATE_ROW_COUNT = 6;
function DatePanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, _props$panelName = props.panelName, panelName = _props$panelName === void 0 ? "date" : _props$panelName, keyboardConfig = props.keyboardConfig, active = props.active, operationRef = props.operationRef, generateConfig2 = props.generateConfig, value = props.value, viewDate = props.viewDate, onViewDateChange = props.onViewDateChange, onPanelChange = props.onPanelChange, _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-").concat(panelName, "-panel");
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, _extends({
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig2.addDate(value || viewDate, diff), "key");
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig2.addDate(value || viewDate, diff * WEEK_DAY_COUNT), "key");
        },
        onPageUpDown: function onPageUpDown(diff) {
          _onSelect(generateConfig2.addMonth(value || viewDate, diff), "key");
        }
      }, keyboardConfig));
    }
  };
  var onYearChange = function onYearChange2(diff) {
    var newDate = generateConfig2.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  var onMonthChange = function onMonthChange2(diff) {
    var newDate = generateConfig2.addMonth(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return createVNode("div", {
    "class": classNames(panelPrefixCls, _defineProperty$4({}, "".concat(panelPrefixCls, "-active"), active))
  }, [createVNode(DateHeader, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": prefixCls,
    "value": value,
    "viewDate": viewDate,
    "onPrevYear": function onPrevYear() {
      onYearChange(-1);
    },
    "onNextYear": function onNextYear() {
      onYearChange(1);
    },
    "onPrevMonth": function onPrevMonth() {
      onMonthChange(-1);
    },
    "onNextMonth": function onNextMonth() {
      onMonthChange(1);
    },
    "onMonthClick": function onMonthClick() {
      onPanelChange("month", viewDate);
    },
    "onYearClick": function onYearClick() {
      onPanelChange("year", viewDate);
    }
  }), null), createVNode(DateBody, _objectSpread2(_objectSpread2({}, props), {}, {
    "onSelect": function onSelect(date) {
      return _onSelect(date, "mouse");
    },
    "prefixCls": prefixCls,
    "value": value,
    "viewDate": viewDate,
    "rowCount": DATE_ROW_COUNT
  }), null)]);
}
DatePanel.displayName = "DatePanel";
DatePanel.inheritAttrs = false;
var ACTIVE_PANEL = tuple("date", "time");
function DatetimePanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, operationRef = props.operationRef, generateConfig2 = props.generateConfig, value = props.value, defaultValue = props.defaultValue, disabledTime = props.disabledTime, showTime = props.showTime, onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-datetime-panel");
  var activePanel = ref(null);
  var dateOperationRef = ref({});
  var timeOperationRef = ref({});
  var timeProps = _typeof(showTime) === "object" ? _extends({}, showTime) : {};
  function getNextActive(offset) {
    var activeIndex = ACTIVE_PANEL.indexOf(activePanel.value) + offset;
    var nextActivePanel = ACTIVE_PANEL[activeIndex] || null;
    return nextActivePanel;
  }
  var onBlur = function onBlur2(e) {
    if (timeOperationRef.value.onBlur) {
      timeOperationRef.value.onBlur(e);
    }
    activePanel.value = null;
  };
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      if (event.which === KeyCode.TAB) {
        var nextActivePanel = getNextActive(event.shiftKey ? -1 : 1);
        activePanel.value = nextActivePanel;
        if (nextActivePanel) {
          event.preventDefault();
        }
        return true;
      }
      if (activePanel.value) {
        var _ref = activePanel.value === "date" ? dateOperationRef : timeOperationRef;
        if (_ref.value && _ref.value.onKeydown) {
          _ref.value.onKeydown(event);
        }
        return true;
      }
      if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN].includes(event.which)) {
        activePanel.value = "date";
        return true;
      }
      return false;
    },
    onBlur,
    onClose: onBlur
  };
  var onInternalSelect = function onInternalSelect2(date, source) {
    var selectedDate = date;
    if (source === "date" && !value && timeProps.defaultValue) {
      selectedDate = generateConfig2.setHour(selectedDate, generateConfig2.getHour(timeProps.defaultValue));
      selectedDate = generateConfig2.setMinute(selectedDate, generateConfig2.getMinute(timeProps.defaultValue));
      selectedDate = generateConfig2.setSecond(selectedDate, generateConfig2.getSecond(timeProps.defaultValue));
    } else if (source === "time" && !value && defaultValue) {
      selectedDate = generateConfig2.setYear(selectedDate, generateConfig2.getYear(defaultValue));
      selectedDate = generateConfig2.setMonth(selectedDate, generateConfig2.getMonth(defaultValue));
      selectedDate = generateConfig2.setDate(selectedDate, generateConfig2.getDate(defaultValue));
    }
    if (onSelect) {
      onSelect(selectedDate, "mouse");
    }
  };
  var disabledTimes = disabledTime ? disabledTime(value || null) : {};
  return createVNode("div", {
    "class": classNames(panelPrefixCls, _defineProperty$4({}, "".concat(panelPrefixCls, "-active"), activePanel.value))
  }, [createVNode(DatePanel, _objectSpread2(_objectSpread2({}, props), {}, {
    "operationRef": dateOperationRef,
    "active": activePanel.value === "date",
    "onSelect": function onSelect2(date) {
      onInternalSelect(setDateTime(generateConfig2, date, !value && _typeof(showTime) === "object" ? showTime.defaultValue : null), "date");
    }
  }), null), createVNode(TimePanel, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, props), {}, {
    "format": void 0
  }, timeProps), disabledTimes), {}, {
    "disabledTime": null,
    "defaultValue": void 0,
    "operationRef": timeOperationRef,
    "active": activePanel.value === "time",
    "onSelect": function onSelect2(date) {
      onInternalSelect(date, "time");
    }
  }), null)]);
}
DatetimePanel.displayName = "DatetimePanel";
DatetimePanel.inheritAttrs = false;
function WeekPanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, locale = props.locale, value = props.value;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var prefixColumn = function prefixColumn2(date) {
    return createVNode("td", {
      "key": "week",
      "class": classNames(cellPrefixCls, "".concat(cellPrefixCls, "-week"))
    }, [generateConfig2.locale.getWeek(locale.locale, date)]);
  };
  var rowPrefixCls = "".concat(prefixCls, "-week-panel-row");
  var rowClassName = function rowClassName2(date) {
    return classNames(rowPrefixCls, _defineProperty$4({}, "".concat(rowPrefixCls, "-selected"), isSameWeek(generateConfig2, locale.locale, value, date)));
  };
  return createVNode(DatePanel, _objectSpread2(_objectSpread2({}, props), {}, {
    "panelName": "week",
    "prefixColumn": prefixColumn,
    "rowClassName": rowClassName,
    "keyboardConfig": {
      onLeftRight: null
    }
  }), null);
}
WeekPanel.displayName = "WeekPanel";
WeekPanel.inheritAttrs = false;
function MonthHeader(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, locale = props.locale, viewDate = props.viewDate, onNextYear = props.onNextYear, onPrevYear = props.onPrevYear, onYearClick = props.onYearClick;
  var _useInjectPanel = useInjectPanel(), hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return createVNode(Header, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevYear,
    "onSuperNext": onNextYear
  }), {
    default: function _default2() {
      return [createVNode("button", {
        "type": "button",
        "onClick": onYearClick,
        "class": "".concat(prefixCls, "-year-btn")
      }, [formatValue(viewDate, {
        locale,
        format: locale.yearFormat,
        generateConfig: generateConfig2
      })])];
    }
  });
}
MonthHeader.displayName = "MonthHeader";
MonthHeader.inheritAttrs = false;
var MONTH_COL_COUNT = 3;
var MONTH_ROW_COUNT = 4;
function MonthBody(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, locale = props.locale, value = props.value, viewDate = props.viewDate, generateConfig2 = props.generateConfig, monthCellRender = props.monthCellRender;
  var _useInjectRange = useInjectRange(), rangedValue = _useInjectRange.rangedValue, hoverRangedValue = _useInjectRange.hoverRangedValue;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = useCellClassName({
    cellPrefixCls,
    value,
    generateConfig: generateConfig2,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: function isSameCell(current, target) {
      return isSameMonth(generateConfig2, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig2.addMonth(date, offset);
    }
  });
  var monthsLocale = locale.shortMonths || (generateConfig2.locale.getShortMonths ? generateConfig2.locale.getShortMonths(locale.locale) : []);
  var baseMonth = generateConfig2.setMonth(viewDate, 0);
  var getCellNode = monthCellRender ? function(date) {
    return monthCellRender({
      current: date,
      locale
    });
  } : void 0;
  return createVNode(PanelBody, _objectSpread2(_objectSpread2({}, props), {}, {
    "rowNum": MONTH_ROW_COUNT,
    "colNum": MONTH_COL_COUNT,
    "baseDate": baseMonth,
    "getCellNode": getCellNode,
    "getCellText": function getCellText(date) {
      return locale.monthFormat ? formatValue(date, {
        locale,
        format: locale.monthFormat,
        generateConfig: generateConfig2
      }) : monthsLocale[generateConfig2.getMonth(date)];
    },
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig2.addMonth,
    "titleCell": function titleCell(date) {
      return formatValue(date, {
        locale,
        format: "YYYY-MM",
        generateConfig: generateConfig2
      });
    }
  }), null);
}
MonthBody.displayName = "MonthBody";
MonthBody.inheritAttrs = false;
function MonthPanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, operationRef = props.operationRef, onViewDateChange = props.onViewDateChange, generateConfig2 = props.generateConfig, value = props.value, viewDate = props.viewDate, onPanelChange = props.onPanelChange, _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-month-panel");
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig2.addMonth(value || viewDate, diff), "key");
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig2.addMonth(value || viewDate, diff * MONTH_COL_COUNT), "key");
        },
        onEnter: function onEnter() {
          onPanelChange("date", value || viewDate);
        }
      });
    }
  };
  var onYearChange = function onYearChange2(diff) {
    var newDate = generateConfig2.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return createVNode("div", {
    "class": panelPrefixCls
  }, [createVNode(MonthHeader, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevYear": function onPrevYear() {
      onYearChange(-1);
    },
    "onNextYear": function onNextYear() {
      onYearChange(1);
    },
    "onYearClick": function onYearClick() {
      onPanelChange("year", viewDate);
    }
  }), null), createVNode(MonthBody, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": function onSelect(date) {
      _onSelect(date, "mouse");
      onPanelChange("date", date);
    }
  }), null)]);
}
MonthPanel.displayName = "MonthPanel";
MonthPanel.inheritAttrs = false;
function QuarterHeader(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, locale = props.locale, viewDate = props.viewDate, onNextYear = props.onNextYear, onPrevYear = props.onPrevYear, onYearClick = props.onYearClick;
  var _useInjectPanel = useInjectPanel(), hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return createVNode(Header, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevYear,
    "onSuperNext": onNextYear
  }), {
    default: function _default2() {
      return [createVNode("button", {
        "type": "button",
        "onClick": onYearClick,
        "class": "".concat(prefixCls, "-year-btn")
      }, [formatValue(viewDate, {
        locale,
        format: locale.yearFormat,
        generateConfig: generateConfig2
      })])];
    }
  });
}
QuarterHeader.displayName = "QuarterHeader";
QuarterHeader.inheritAttrs = false;
var QUARTER_COL_COUNT = 4;
var QUARTER_ROW_COUNT = 1;
function QuarterBody(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, locale = props.locale, value = props.value, viewDate = props.viewDate, generateConfig2 = props.generateConfig;
  var _useInjectRange = useInjectRange(), rangedValue = _useInjectRange.rangedValue, hoverRangedValue = _useInjectRange.hoverRangedValue;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = useCellClassName({
    cellPrefixCls,
    value,
    generateConfig: generateConfig2,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: function isSameCell(current, target) {
      return isSameQuarter(generateConfig2, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig2.addMonth(date, offset * 3);
    }
  });
  var baseQuarter = generateConfig2.setDate(generateConfig2.setMonth(viewDate, 0), 1);
  return createVNode(PanelBody, _objectSpread2(_objectSpread2({}, props), {}, {
    "rowNum": QUARTER_ROW_COUNT,
    "colNum": QUARTER_COL_COUNT,
    "baseDate": baseQuarter,
    "getCellText": function getCellText(date) {
      return formatValue(date, {
        locale,
        format: locale.quarterFormat || "[Q]Q",
        generateConfig: generateConfig2
      });
    },
    "getCellClassName": getCellClassName,
    "getCellDate": function getCellDate(date, offset) {
      return generateConfig2.addMonth(date, offset * 3);
    },
    "titleCell": function titleCell(date) {
      return formatValue(date, {
        locale,
        format: "YYYY-[Q]Q",
        generateConfig: generateConfig2
      });
    }
  }), null);
}
QuarterBody.displayName = "QuarterBody";
QuarterBody.inheritAttrs = false;
function QuarterPanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, operationRef = props.operationRef, onViewDateChange = props.onViewDateChange, generateConfig2 = props.generateConfig, value = props.value, viewDate = props.viewDate, onPanelChange = props.onPanelChange, _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-quarter-panel");
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig2.addMonth(value || viewDate, diff * 3), "key");
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
        }
      });
    }
  };
  var onYearChange = function onYearChange2(diff) {
    var newDate = generateConfig2.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return createVNode("div", {
    "class": panelPrefixCls
  }, [createVNode(QuarterHeader, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevYear": function onPrevYear() {
      onYearChange(-1);
    },
    "onNextYear": function onNextYear() {
      onYearChange(1);
    },
    "onYearClick": function onYearClick() {
      onPanelChange("year", viewDate);
    }
  }), null), createVNode(QuarterBody, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": function onSelect(date) {
      _onSelect(date, "mouse");
    }
  }), null)]);
}
QuarterPanel.displayName = "QuarterPanel";
QuarterPanel.inheritAttrs = false;
function YearHeader(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, generateConfig2 = props.generateConfig, viewDate = props.viewDate, onPrevDecade = props.onPrevDecade, onNextDecade = props.onNextDecade, onDecadeClick = props.onDecadeClick;
  var _useInjectPanel = useInjectPanel(), hideHeader = _useInjectPanel.hideHeader;
  if (hideHeader.value) {
    return null;
  }
  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig2.getYear(viewDate);
  var startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  return createVNode(Header, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": headerPrefixCls,
    "onSuperPrev": onPrevDecade,
    "onSuperNext": onNextDecade
  }), {
    default: function _default2() {
      return [createVNode("button", {
        "type": "button",
        "onClick": onDecadeClick,
        "class": "".concat(prefixCls, "-decade-btn")
      }, [startYear, createTextVNode("-"), endYear])];
    }
  });
}
YearHeader.displayName = "YearHeader";
YearHeader.inheritAttrs = false;
var YEAR_COL_COUNT = 3;
var YEAR_ROW_COUNT = 4;
function YearBody(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, value = props.value, viewDate = props.viewDate, locale = props.locale, generateConfig2 = props.generateConfig;
  var _useInjectRange = useInjectRange(), rangedValue = _useInjectRange.rangedValue, hoverRangedValue = _useInjectRange.hoverRangedValue;
  var yearPrefixCls = "".concat(prefixCls, "-cell");
  var yearNumber = generateConfig2.getYear(viewDate);
  var startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  var baseYear = generateConfig2.setYear(viewDate, startYear - Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - YEAR_DECADE_COUNT) / 2));
  var isInView = function isInView2(date) {
    var currentYearNumber = generateConfig2.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };
  var getCellClassName = useCellClassName({
    cellPrefixCls: yearPrefixCls,
    value,
    generateConfig: generateConfig2,
    rangedValue: rangedValue.value,
    hoverRangedValue: hoverRangedValue.value,
    isSameCell: function isSameCell(current, target) {
      return isSameYear(generateConfig2, current, target);
    },
    isInView,
    offsetCell: function offsetCell(date, offset) {
      return generateConfig2.addYear(date, offset);
    }
  });
  return createVNode(PanelBody, _objectSpread2(_objectSpread2({}, props), {}, {
    "rowNum": YEAR_ROW_COUNT,
    "colNum": YEAR_COL_COUNT,
    "baseDate": baseYear,
    "getCellText": generateConfig2.getYear,
    "getCellClassName": getCellClassName,
    "getCellDate": generateConfig2.addYear,
    "titleCell": function titleCell(date) {
      return formatValue(date, {
        locale,
        format: "YYYY",
        generateConfig: generateConfig2
      });
    }
  }), null);
}
YearBody.displayName = "YearBody";
YearBody.inheritAttrs = false;
var YEAR_DECADE_COUNT = 10;
function YearPanel(_props) {
  var props = useMergeProps(_props);
  var prefixCls = props.prefixCls, operationRef = props.operationRef, onViewDateChange = props.onViewDateChange, generateConfig2 = props.generateConfig, value = props.value, viewDate = props.viewDate, sourceMode = props.sourceMode, _onSelect = props.onSelect, onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-year-panel");
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff), "key");
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff * YEAR_DECADE_COUNT), "key");
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig2.addYear(value || viewDate, diff * YEAR_COL_COUNT), "key");
        },
        onEnter: function onEnter() {
          onPanelChange(sourceMode === "date" ? "date" : "month", value || viewDate);
        }
      });
    }
  };
  var onDecadeChange = function onDecadeChange2(diff) {
    var newDate = generateConfig2.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return createVNode("div", {
    "class": panelPrefixCls
  }, [createVNode(YearHeader, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevDecade": function onPrevDecade() {
      onDecadeChange(-1);
    },
    "onNextDecade": function onNextDecade() {
      onDecadeChange(1);
    },
    "onDecadeClick": function onDecadeClick() {
      onPanelChange("decade", viewDate);
    }
  }), null), createVNode(YearBody, _objectSpread2(_objectSpread2({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": function onSelect(date) {
      onPanelChange(sourceMode === "date" ? "date" : "month", date);
      _onSelect(date, "mouse");
    }
  }), null)]);
}
YearPanel.displayName = "YearPanel";
YearPanel.inheritAttrs = false;
function getExtraFooter(prefixCls, mode, renderExtraFooter) {
  if (!renderExtraFooter) {
    return null;
  }
  return createVNode("div", {
    "class": "".concat(prefixCls, "-footer-extra")
  }, [renderExtraFooter(mode)]);
}
function getRanges(_ref) {
  var prefixCls = _ref.prefixCls, _ref$rangeList = _ref.rangeList, rangeList = _ref$rangeList === void 0 ? [] : _ref$rangeList, _ref$components = _ref.components, components = _ref$components === void 0 ? {} : _ref$components, needConfirmButton = _ref.needConfirmButton, onNow = _ref.onNow, onOk = _ref.onOk, okDisabled = _ref.okDisabled, showNow = _ref.showNow, locale = _ref.locale;
  var presetNode;
  var okNode;
  if (rangeList.length) {
    var Item = components.rangeItem || "span";
    presetNode = createVNode(Fragment, null, [rangeList.map(function(_ref2) {
      var label = _ref2.label, onClick = _ref2.onClick, onMouseenter = _ref2.onMouseenter, onMouseleave = _ref2.onMouseleave;
      return createVNode("li", {
        "key": label,
        "class": "".concat(prefixCls, "-preset")
      }, [createVNode(Item, {
        "onClick": onClick,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave
      }, {
        default: function _default2() {
          return [label];
        }
      })]);
    })]);
  }
  if (needConfirmButton) {
    var Button2 = components.button || "button";
    if (onNow && !presetNode && showNow !== false) {
      presetNode = createVNode("li", {
        "class": "".concat(prefixCls, "-now")
      }, [createVNode("a", {
        "class": "".concat(prefixCls, "-now-btn"),
        "onClick": onNow
      }, [locale.now])]);
    }
    okNode = needConfirmButton && createVNode("li", {
      "class": "".concat(prefixCls, "-ok")
    }, [createVNode(Button2, {
      "disabled": okDisabled,
      "onClick": onOk
    }, {
      default: function _default2() {
        return [locale.ok];
      }
    })]);
  }
  if (!presetNode && !okNode) {
    return null;
  }
  return createVNode("ul", {
    "class": "".concat(prefixCls, "-ranges")
  }, [presetNode, okNode]);
}
function PickerPanel() {
  return defineComponent({
    name: "PickerPanel",
    inheritAttrs: false,
    props: {
      prefixCls: String,
      locale: Object,
      generateConfig: Object,
      value: Object,
      defaultValue: Object,
      pickerValue: Object,
      defaultPickerValue: Object,
      disabledDate: Function,
      mode: String,
      picker: {
        type: String,
        default: "date"
      },
      tabindex: {
        type: [Number, String],
        default: 0
      },
      showNow: {
        type: Boolean,
        default: void 0
      },
      showTime: [Boolean, Object],
      showToday: Boolean,
      renderExtraFooter: Function,
      dateRender: Function,
      hideHeader: {
        type: Boolean,
        default: void 0
      },
      onSelect: Function,
      onChange: Function,
      onPanelChange: Function,
      onMousedown: Function,
      onPickerValueChange: Function,
      onOk: Function,
      components: Object,
      direction: String,
      hourStep: {
        type: Number,
        default: 1
      },
      minuteStep: {
        type: Number,
        default: 1
      },
      secondStep: {
        type: Number,
        default: 1
      }
    },
    setup: function setup13(props, _ref) {
      var attrs = _ref.attrs;
      var needConfirmButton = computed(function() {
        return props.picker === "date" && !!props.showTime || props.picker === "time";
      });
      var isHourStepValid = computed(function() {
        return 24 % props.hourStep === 0;
      });
      var isMinuteStepValid = computed(function() {
        return 60 % props.minuteStep === 0;
      });
      var isSecondStepValid = computed(function() {
        return 60 % props.secondStep === 0;
      });
      var panelContext = useInjectPanel();
      var operationRef = panelContext.operationRef, panelDivRef = panelContext.panelRef, onContextSelect = panelContext.onSelect, hideRanges = panelContext.hideRanges, defaultOpenValue = panelContext.defaultOpenValue;
      var _useInjectRange = useInjectRange(), inRange = _useInjectRange.inRange, panelPosition = _useInjectRange.panelPosition, rangedValue = _useInjectRange.rangedValue, hoverRangedValue = _useInjectRange.hoverRangedValue;
      var panelRef = ref({});
      var _useMergedState = useMergedState(null, {
        value: toRef(props, "value"),
        defaultValue: props.defaultValue,
        postState: function postState(val) {
          if (!val && (defaultOpenValue === null || defaultOpenValue === void 0 ? void 0 : defaultOpenValue.value) && props.picker === "time") {
            return defaultOpenValue.value;
          }
          return val;
        }
      }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedValue = _useMergedState2[0], setInnerValue = _useMergedState2[1];
      var _useMergedState3 = useMergedState(null, {
        value: toRef(props, "pickerValue"),
        defaultValue: props.defaultPickerValue || mergedValue.value,
        postState: function postState(date) {
          var generateConfig2 = props.generateConfig, showTime = props.showTime, defaultValue = props.defaultValue;
          var now = generateConfig2.getNow();
          if (!date)
            return now;
          if (!mergedValue.value && props.showTime) {
            if (_typeof(showTime) === "object") {
              return setDateTime(generateConfig2, Array.isArray(date) ? date[0] : date, showTime.defaultValue || now);
            }
            if (defaultValue) {
              return setDateTime(generateConfig2, Array.isArray(date) ? date[0] : date, defaultValue);
            }
            return setDateTime(generateConfig2, Array.isArray(date) ? date[0] : date, now);
          }
          return date;
        }
      }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), viewDate = _useMergedState4[0], setInnerViewDate = _useMergedState4[1];
      var setViewDate = function setViewDate2(date) {
        setInnerViewDate(date);
        if (props.onPickerValueChange) {
          props.onPickerValueChange(date);
        }
      };
      var getInternalNextMode = function getInternalNextMode2(nextMode) {
        var getNextMode = PickerModeMap[props.picker];
        if (getNextMode) {
          return getNextMode(nextMode);
        }
        return nextMode;
      };
      var _useMergedState5 = useMergedState(function() {
        if (props.picker === "time") {
          return "time";
        }
        return getInternalNextMode("date");
      }, {
        value: toRef(props, "mode")
      }), _useMergedState6 = _slicedToArray(_useMergedState5, 2), mergedMode = _useMergedState6[0], setInnerMode = _useMergedState6[1];
      watch(function() {
        return props.picker;
      }, function() {
        setInnerMode(props.picker);
      });
      var sourceMode = ref(mergedMode.value);
      var setSourceMode = function setSourceMode2(val) {
        sourceMode.value = val;
      };
      var onInternalPanelChange = function onInternalPanelChange2(newMode, viewValue) {
        var onPanelChange = props.onPanelChange, generateConfig2 = props.generateConfig;
        var nextMode = getInternalNextMode(newMode || mergedMode.value);
        setSourceMode(mergedMode.value);
        setInnerMode(nextMode);
        if (onPanelChange && (mergedMode.value !== nextMode || isEqual(generateConfig2, viewDate.value, viewDate.value))) {
          onPanelChange(viewValue, nextMode);
        }
      };
      var triggerSelect = function triggerSelect2(date, type) {
        var forceTriggerSelect = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        var picker = props.picker, generateConfig2 = props.generateConfig, onSelect = props.onSelect, onChange = props.onChange, disabledDate = props.disabledDate;
        if (mergedMode.value === picker || forceTriggerSelect) {
          setInnerValue(date);
          if (onSelect) {
            onSelect(date);
          }
          if (onContextSelect) {
            onContextSelect(date, type);
          }
          if (onChange && !isEqual(generateConfig2, date, mergedValue.value) && !(disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date))) {
            onChange(date);
          }
        }
      };
      var onInternalKeydown = function onInternalKeydown2(e) {
        if (panelRef.value && panelRef.value.onKeydown) {
          if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN, KeyCode.PAGE_UP, KeyCode.PAGE_DOWN, KeyCode.ENTER].includes(e.which)) {
            e.preventDefault();
          }
          return panelRef.value.onKeydown(e);
        }
        {
          return false;
        }
      };
      var onInternalBlur = function onInternalBlur2(e) {
        if (panelRef.value && panelRef.value.onBlur) {
          panelRef.value.onBlur(e);
        }
      };
      var onNow = function onNow2() {
        var generateConfig2 = props.generateConfig, hourStep = props.hourStep, minuteStep = props.minuteStep, secondStep = props.secondStep;
        var now = generateConfig2.getNow();
        var lowerBoundTime = getLowerBoundTime(generateConfig2.getHour(now), generateConfig2.getMinute(now), generateConfig2.getSecond(now), isHourStepValid.value ? hourStep : 1, isMinuteStepValid.value ? minuteStep : 1, isSecondStepValid.value ? secondStep : 1);
        var adjustedNow = setTime(generateConfig2, now, lowerBoundTime[0], lowerBoundTime[1], lowerBoundTime[2]);
        triggerSelect(adjustedNow, "submit");
      };
      var classString = computed(function() {
        var _classNames;
        var prefixCls = props.prefixCls, direction = props.direction;
        return classNames("".concat(prefixCls, "-panel"), (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-panel-has-range"), rangedValue && rangedValue.value && rangedValue.value[0] && rangedValue.value[1]), _defineProperty$4(_classNames, "".concat(prefixCls, "-panel-has-range-hover"), hoverRangedValue && hoverRangedValue.value && hoverRangedValue.value[0] && hoverRangedValue.value[1]), _defineProperty$4(_classNames, "".concat(prefixCls, "-panel-rtl"), direction === "rtl"), _classNames));
      });
      useProvidePanel(_extends(_extends({}, panelContext), {
        mode: mergedMode,
        hideHeader: computed(function() {
          var _a;
          return props.hideHeader !== void 0 ? props.hideHeader : (_a = panelContext.hideHeader) === null || _a === void 0 ? void 0 : _a.value;
        }),
        hidePrevBtn: computed(function() {
          return inRange.value && panelPosition.value === "right";
        }),
        hideNextBtn: computed(function() {
          return inRange.value && panelPosition.value === "left";
        })
      }));
      watch(function() {
        return props.value;
      }, function() {
        if (props.value) {
          setInnerViewDate(props.value);
        }
      });
      return function() {
        var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "ant-picker" : _props$prefixCls, locale = props.locale, generateConfig2 = props.generateConfig, disabledDate = props.disabledDate, _props$picker = props.picker, picker = _props$picker === void 0 ? "date" : _props$picker, _props$tabindex = props.tabindex, tabindex = _props$tabindex === void 0 ? 0 : _props$tabindex, showNow = props.showNow, showTime = props.showTime, showToday = props.showToday, renderExtraFooter = props.renderExtraFooter, onMousedown = props.onMousedown, _onOk = props.onOk, components = props.components;
        if (operationRef && panelPosition.value !== "right") {
          operationRef.value = {
            onKeydown: onInternalKeydown,
            onClose: function onClose() {
              if (panelRef.value && panelRef.value.onClose) {
                panelRef.value.onClose();
              }
            }
          };
        }
        var panelNode;
        var pickerProps = _extends(_extends(_extends({}, attrs), props), {
          operationRef: panelRef,
          prefixCls,
          viewDate: viewDate.value,
          value: mergedValue.value,
          onViewDateChange: setViewDate,
          sourceMode: sourceMode.value,
          onPanelChange: onInternalPanelChange,
          disabledDate
        });
        delete pickerProps.onChange;
        delete pickerProps.onSelect;
        switch (mergedMode.value) {
          case "decade":
            panelNode = createVNode(DecadePanel, _objectSpread2(_objectSpread2({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case "year":
            panelNode = createVNode(YearPanel, _objectSpread2(_objectSpread2({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case "month":
            panelNode = createVNode(MonthPanel, _objectSpread2(_objectSpread2({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case "quarter":
            panelNode = createVNode(QuarterPanel, _objectSpread2(_objectSpread2({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case "week":
            panelNode = createVNode(WeekPanel, _objectSpread2(_objectSpread2({}, pickerProps), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          case "time":
            delete pickerProps.showTime;
            panelNode = createVNode(TimePanel, _objectSpread2(_objectSpread2(_objectSpread2({}, pickerProps), _typeof(showTime) === "object" ? showTime : null), {}, {
              "onSelect": function onSelect(date, type) {
                setViewDate(date);
                triggerSelect(date, type);
              }
            }), null);
            break;
          default:
            if (showTime) {
              panelNode = createVNode(DatetimePanel, _objectSpread2(_objectSpread2({}, pickerProps), {}, {
                "onSelect": function onSelect(date, type) {
                  setViewDate(date);
                  triggerSelect(date, type);
                }
              }), null);
            } else {
              panelNode = createVNode(DatePanel, _objectSpread2(_objectSpread2({}, pickerProps), {}, {
                "onSelect": function onSelect(date, type) {
                  setViewDate(date);
                  triggerSelect(date, type);
                }
              }), null);
            }
        }
        var extraFooter;
        var rangesNode;
        if (!(hideRanges === null || hideRanges === void 0 ? void 0 : hideRanges.value)) {
          extraFooter = getExtraFooter(prefixCls, mergedMode.value, renderExtraFooter);
          rangesNode = getRanges({
            prefixCls,
            components,
            needConfirmButton: needConfirmButton.value,
            okDisabled: !mergedValue.value || disabledDate && disabledDate(mergedValue.value),
            locale,
            showNow,
            onNow: needConfirmButton.value && onNow,
            onOk: function onOk() {
              if (mergedValue.value) {
                triggerSelect(mergedValue.value, "submit", true);
                if (_onOk) {
                  _onOk(mergedValue.value);
                }
              }
            }
          });
        }
        var todayNode;
        if (showToday && mergedMode.value === "date" && picker === "date" && !showTime) {
          var now = generateConfig2.getNow();
          var todayCls = "".concat(prefixCls, "-today-btn");
          var disabled = disabledDate && disabledDate(now);
          todayNode = createVNode("a", {
            "class": classNames(todayCls, disabled && "".concat(todayCls, "-disabled")),
            "aria-disabled": disabled,
            "onClick": function onClick() {
              if (!disabled) {
                triggerSelect(now, "mouse", true);
              }
            }
          }, [locale.today]);
        }
        return createVNode("div", {
          "tabindex": tabindex,
          "class": classNames(classString.value, attrs.class),
          "style": attrs.style,
          "onKeydown": onInternalKeydown,
          "onBlur": onInternalBlur,
          "onMousedown": onMousedown,
          "ref": panelDivRef
        }, [panelNode, extraFooter || rangesNode || todayNode ? createVNode("div", {
          "class": "".concat(prefixCls, "-footer")
        }, [extraFooter, rangesNode, todayNode]) : null]);
      };
    }
  });
}
var InterPickerPanel = PickerPanel();
var PickerPanel$1 = function(props) {
  return createVNode(InterPickerPanel, props);
};
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ["tl", "bl"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ["tr", "br"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ["bl", "tl"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ["br", "tr"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
function PickerTrigger(props, _ref) {
  var _classNames;
  var slots = _ref.slots;
  var _useMergeProps = useMergeProps(props), prefixCls = _useMergeProps.prefixCls, popupStyle = _useMergeProps.popupStyle, visible = _useMergeProps.visible, dropdownClassName = _useMergeProps.dropdownClassName, dropdownAlign = _useMergeProps.dropdownAlign, transitionName = _useMergeProps.transitionName, getPopupContainer = _useMergeProps.getPopupContainer, range = _useMergeProps.range, popupPlacement = _useMergeProps.popupPlacement, direction = _useMergeProps.direction;
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var getPopupPlacement = function getPopupPlacement2() {
    if (popupPlacement !== void 0) {
      return popupPlacement;
    }
    return direction === "rtl" ? "bottomRight" : "bottomLeft";
  };
  return createVNode(Trigger, {
    "showAction": [],
    "hideAction": [],
    "popupPlacement": getPopupPlacement(),
    "builtinPlacements": BUILT_IN_PLACEMENTS,
    "prefixCls": dropdownPrefixCls,
    "popupTransitionName": transitionName,
    "popupAlign": dropdownAlign,
    "popupVisible": visible,
    "popupClassName": classNames(dropdownClassName, (_classNames = {}, _defineProperty$4(_classNames, "".concat(dropdownPrefixCls, "-range"), range), _defineProperty$4(_classNames, "".concat(dropdownPrefixCls, "-rtl"), direction === "rtl"), _classNames)),
    "popupStyle": popupStyle,
    "getPopupContainer": getPopupContainer
  }, {
    default: slots.default,
    popup: slots.popupElement
  });
}
function usePickerInput(_ref) {
  var open = _ref.open, value = _ref.value, isClickOutside = _ref.isClickOutside, triggerOpen = _ref.triggerOpen, forwardKeydown = _ref.forwardKeydown, _onKeydown = _ref.onKeydown, blurToCancel = _ref.blurToCancel, onSubmit = _ref.onSubmit, onCancel = _ref.onCancel, _onFocus = _ref.onFocus, _onBlur = _ref.onBlur;
  var typing = ref(false);
  var focused = ref(false);
  var preventBlurRef = ref(false);
  var valueChangedRef = ref(false);
  var preventDefaultRef = ref(false);
  var inputProps = computed(function() {
    return {
      onMousedown: function onMousedown() {
        typing.value = true;
        triggerOpen(true);
      },
      onKeydown: function onKeydown(e) {
        var preventDefault = function preventDefault2() {
          preventDefaultRef.value = true;
        };
        _onKeydown(e, preventDefault);
        if (preventDefaultRef.value)
          return;
        switch (e.which) {
          case KeyCode.ENTER: {
            if (!open.value) {
              triggerOpen(true);
            } else if (onSubmit() !== false) {
              typing.value = true;
            }
            e.preventDefault();
            return;
          }
          case KeyCode.TAB: {
            if (typing.value && open.value && !e.shiftKey) {
              typing.value = false;
              e.preventDefault();
            } else if (!typing.value && open.value) {
              if (!forwardKeydown(e) && e.shiftKey) {
                typing.value = true;
                e.preventDefault();
              }
            }
            return;
          }
          case KeyCode.ESC: {
            typing.value = true;
            onCancel();
            return;
          }
        }
        if (!open.value && ![KeyCode.SHIFT].includes(e.which)) {
          triggerOpen(true);
        } else if (!typing.value) {
          forwardKeydown(e);
        }
      },
      onFocus: function onFocus(e) {
        typing.value = true;
        focused.value = true;
        if (_onFocus) {
          _onFocus(e);
        }
      },
      onBlur: function onBlur(e) {
        if (preventBlurRef.value || !isClickOutside(document.activeElement)) {
          preventBlurRef.value = false;
          return;
        }
        if (blurToCancel.value) {
          setTimeout(function() {
            var _document = document, activeElement = _document.activeElement;
            while (activeElement && activeElement.shadowRoot) {
              activeElement = activeElement.shadowRoot.activeElement;
            }
            if (isClickOutside(activeElement)) {
              onCancel();
            }
          }, 0);
        } else if (open.value) {
          triggerOpen(false);
          if (valueChangedRef.value) {
            onSubmit();
          }
        }
        focused.value = false;
        if (_onBlur) {
          _onBlur(e);
        }
      }
    };
  });
  watch(open, function() {
    valueChangedRef.value = false;
  });
  watch(value, function() {
    valueChangedRef.value = true;
  });
  var globalMousedownEvent = ref();
  onMounted(function() {
    globalMousedownEvent.value = addGlobalMousedownEvent(function(e) {
      var target = getTargetFromEvent(e);
      if (open.value) {
        var clickedOutside = isClickOutside(target);
        if (!clickedOutside) {
          preventBlurRef.value = true;
          wrapperRaf(function() {
            preventBlurRef.value = false;
          });
        } else if (!focused.value || clickedOutside) {
          triggerOpen(false);
        }
      }
    });
  });
  onBeforeUnmount(function() {
    globalMousedownEvent.value && globalMousedownEvent.value();
  });
  return [inputProps, {
    focused,
    typing
  }];
}
function useTextValueMapping(_ref) {
  var valueTexts = _ref.valueTexts, onTextChange = _ref.onTextChange;
  var text = ref("");
  function triggerTextChange(value) {
    text.value = value;
    onTextChange(value);
  }
  function resetText() {
    text.value = valueTexts.value[0];
  }
  watch(function() {
    return _toConsumableArray(valueTexts.value);
  }, function(cur) {
    var pre = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (cur.join("||") !== pre.join("||") && valueTexts.value.every(function(valText) {
      return valText !== text.value;
    })) {
      resetText();
    }
  }, {
    immediate: true
  });
  return [text, triggerTextChange, resetText];
}
function useValueTexts(value, _ref) {
  var formatList = _ref.formatList, generateConfig2 = _ref.generateConfig, locale = _ref.locale;
  var texts = useMemo(function() {
    if (!value.value) {
      return [[""], ""];
    }
    var firstValueText2 = "";
    var fullValueTexts2 = [];
    for (var i = 0; i < formatList.value.length; i += 1) {
      var format2 = formatList.value[i];
      var formatStr = formatValue(value.value, {
        generateConfig: generateConfig2.value,
        locale: locale.value,
        format: format2
      });
      fullValueTexts2.push(formatStr);
      if (i === 0) {
        firstValueText2 = formatStr;
      }
    }
    return [fullValueTexts2, firstValueText2];
  }, [value, formatList], function(next, prev) {
    return prev[0] !== next[0] || !shallowequal(prev[1], next[1]);
  });
  var fullValueTexts = computed(function() {
    return texts.value[0];
  });
  var firstValueText = computed(function() {
    return texts.value[1];
  });
  return [fullValueTexts, firstValueText];
}
function useHoverValue(valueText, _ref) {
  var formatList = _ref.formatList, generateConfig2 = _ref.generateConfig, locale = _ref.locale;
  var innerValue = ref(null);
  var rafId;
  function setValue(val) {
    var immediately = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    wrapperRaf.cancel(rafId);
    if (immediately) {
      innerValue.value = val;
      return;
    }
    rafId = wrapperRaf(function() {
      innerValue.value = val;
    });
  }
  var _useValueTexts = useValueTexts(innerValue, {
    formatList,
    generateConfig: generateConfig2,
    locale
  }), _useValueTexts2 = _slicedToArray(_useValueTexts, 2), firstText = _useValueTexts2[1];
  function onEnter(date) {
    setValue(date);
  }
  function onLeave() {
    var immediately = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    setValue(null, immediately);
  }
  watch(valueText, function() {
    onLeave(true);
  });
  onBeforeUnmount(function() {
    wrapperRaf.cancel(rafId);
  });
  return [firstText, onEnter, onLeave];
}
function Picker() {
  return defineComponent({
    name: "Picker",
    inheritAttrs: false,
    props: ["prefixCls", "id", "tabindex", "dropdownClassName", "dropdownAlign", "popupStyle", "transitionName", "generateConfig", "locale", "inputReadOnly", "allowClear", "autofocus", "showTime", "showNow", "showHour", "showMinute", "showSecond", "picker", "format", "use12Hours", "value", "defaultValue", "open", "defaultOpen", "defaultOpenValue", "suffixIcon", "clearIcon", "disabled", "disabledDate", "placeholder", "getPopupContainer", "panelRender", "inputRender", "onChange", "onOpenChange", "onFocus", "onBlur", "onMousedown", "onMouseup", "onMouseenter", "onMouseleave", "onContextmenu", "onClick", "onKeydown", "onSelect", "direction", "autocomplete", "showToday", "renderExtraFooter", "dateRender", "minuteStep", "hourStep", "secondStep", "hideDisabledOptions"],
    setup: function setup13(props, _ref) {
      var attrs = _ref.attrs, expose = _ref.expose;
      var inputRef = ref(null);
      var picker = computed(function() {
        var _a;
        return (_a = props.picker) !== null && _a !== void 0 ? _a : "date";
      });
      var needConfirmButton = computed(function() {
        return picker.value === "date" && !!props.showTime || picker.value === "time";
      });
      var formatList = computed(function() {
        return toArray$1(getDefaultFormat(props.format, picker.value, props.showTime, props.use12Hours));
      });
      var panelDivRef = ref(null);
      var inputDivRef = ref(null);
      var containerRef = ref(null);
      var _useMergedState = useMergedState(null, {
        value: toRef(props, "value"),
        defaultValue: props.defaultValue
      }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedValue = _useMergedState2[0], setInnerValue = _useMergedState2[1];
      var selectedValue = ref(mergedValue.value);
      var setSelectedValue = function setSelectedValue2(val) {
        selectedValue.value = val;
      };
      var operationRef = ref(null);
      var _useMergedState3 = useMergedState(false, {
        value: toRef(props, "open"),
        defaultValue: props.defaultOpen,
        postState: function postState(postOpen) {
          return props.disabled ? false : postOpen;
        },
        onChange: function onChange(newOpen) {
          if (props.onOpenChange) {
            props.onOpenChange(newOpen);
          }
          if (!newOpen && operationRef.value && operationRef.value.onClose) {
            operationRef.value.onClose();
          }
        }
      }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), mergedOpen = _useMergedState4[0], triggerInnerOpen = _useMergedState4[1];
      var _useValueTexts = useValueTexts(selectedValue, {
        formatList,
        generateConfig: toRef(props, "generateConfig"),
        locale: toRef(props, "locale")
      }), _useValueTexts2 = _slicedToArray(_useValueTexts, 2), valueTexts = _useValueTexts2[0], firstValueText = _useValueTexts2[1];
      var _useTextValueMapping = useTextValueMapping({
        valueTexts,
        onTextChange: function onTextChange(newText) {
          var inputDate = parseValue(newText, {
            locale: props.locale,
            formatList: formatList.value,
            generateConfig: props.generateConfig
          });
          if (inputDate && (!props.disabledDate || !props.disabledDate(inputDate))) {
            setSelectedValue(inputDate);
          }
        }
      }), _useTextValueMapping2 = _slicedToArray(_useTextValueMapping, 3), text = _useTextValueMapping2[0], triggerTextChange = _useTextValueMapping2[1], resetText = _useTextValueMapping2[2];
      var triggerChange = function triggerChange2(newValue) {
        var onChange = props.onChange, generateConfig2 = props.generateConfig, locale = props.locale;
        setSelectedValue(newValue);
        setInnerValue(newValue);
        if (onChange && !isEqual(generateConfig2, mergedValue.value, newValue)) {
          onChange(newValue, newValue ? formatValue(newValue, {
            generateConfig: generateConfig2,
            locale,
            format: formatList.value[0]
          }) : "");
        }
      };
      var triggerOpen = function triggerOpen2(newOpen) {
        if (props.disabled && newOpen) {
          return;
        }
        triggerInnerOpen(newOpen);
      };
      var forwardKeydown = function forwardKeydown2(e) {
        if (mergedOpen.value && operationRef.value && operationRef.value.onKeydown) {
          return operationRef.value.onKeydown(e);
        }
        {
          return false;
        }
      };
      var onInternalMouseup = function onInternalMouseup2() {
        if (props.onMouseup) {
          props.onMouseup.apply(props, arguments);
        }
        if (inputRef.value) {
          inputRef.value.focus();
          triggerOpen(true);
        }
      };
      var _usePickerInput = usePickerInput({
        blurToCancel: needConfirmButton,
        open: mergedOpen,
        value: text,
        triggerOpen,
        forwardKeydown,
        isClickOutside: function isClickOutside(target) {
          return !elementsContains([panelDivRef.value, inputDivRef.value, containerRef.value], target);
        },
        onSubmit: function onSubmit() {
          if (!selectedValue.value || props.disabledDate && props.disabledDate(selectedValue.value)) {
            return false;
          }
          triggerChange(selectedValue.value);
          triggerOpen(false);
          resetText();
          return true;
        },
        onCancel: function onCancel() {
          triggerOpen(false);
          setSelectedValue(mergedValue.value);
          resetText();
        },
        onKeydown: function onKeydown(e, preventDefault) {
          var _a;
          (_a = props.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props, e, preventDefault);
        },
        onFocus: function onFocus(e) {
          var _a;
          (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
        },
        onBlur: function onBlur(e) {
          var _a;
          (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }
      }), _usePickerInput2 = _slicedToArray(_usePickerInput, 2), inputProps = _usePickerInput2[0], _usePickerInput2$ = _usePickerInput2[1], focused = _usePickerInput2$.focused, typing = _usePickerInput2$.typing;
      watch([mergedOpen, valueTexts], function() {
        if (!mergedOpen.value) {
          setSelectedValue(mergedValue.value);
          if (!valueTexts.value.length || valueTexts.value[0] === "") {
            triggerTextChange("");
          } else if (firstValueText.value !== text.value) {
            resetText();
          }
        }
      });
      watch(picker, function() {
        if (!mergedOpen.value) {
          resetText();
        }
      });
      watch(mergedValue, function() {
        setSelectedValue(mergedValue.value);
      });
      var _useHoverValue = useHoverValue(text, {
        formatList,
        generateConfig: toRef(props, "generateConfig"),
        locale: toRef(props, "locale")
      }), _useHoverValue2 = _slicedToArray(_useHoverValue, 3), hoverValue = _useHoverValue2[0], onEnter = _useHoverValue2[1], onLeave = _useHoverValue2[2];
      var onContextSelect = function onContextSelect2(date, type) {
        if (type === "submit" || type !== "key" && !needConfirmButton.value) {
          triggerChange(date);
          triggerOpen(false);
        }
      };
      useProvidePanel({
        operationRef,
        hideHeader: computed(function() {
          return picker.value === "time";
        }),
        panelRef: panelDivRef,
        onSelect: onContextSelect,
        open: mergedOpen,
        defaultOpenValue: toRef(props, "defaultOpenValue"),
        onDateMouseenter: onEnter,
        onDateMouseleave: onLeave
      });
      expose({
        focus: function focus() {
          if (inputRef.value) {
            inputRef.value.focus();
          }
        },
        blur: function blur() {
          if (inputRef.value) {
            inputRef.value.blur();
          }
        }
      });
      var getPortal = useProviderTrigger();
      return function() {
        var _classNames2;
        var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-picker" : _props$prefixCls, id = props.id, tabindex = props.tabindex, dropdownClassName = props.dropdownClassName, dropdownAlign = props.dropdownAlign, popupStyle = props.popupStyle, transitionName = props.transitionName, generateConfig2 = props.generateConfig, locale = props.locale, inputReadOnly = props.inputReadOnly, allowClear = props.allowClear, autofocus = props.autofocus, _props$picker = props.picker, picker2 = _props$picker === void 0 ? "date" : _props$picker;
        props.defaultOpenValue;
        var suffixIcon = props.suffixIcon, clearIcon = props.clearIcon, disabled = props.disabled, placeholder = props.placeholder, getPopupContainer = props.getPopupContainer, panelRender = props.panelRender, onMousedown = props.onMousedown, onMouseenter = props.onMouseenter, onMouseleave = props.onMouseleave, onContextmenu = props.onContextmenu, onClick = props.onClick, _onSelect = props.onSelect, direction = props.direction, _props$autocomplete = props.autocomplete, autocomplete = _props$autocomplete === void 0 ? "off" : _props$autocomplete;
        var panelProps = _extends(_extends(_extends({}, props), attrs), {
          class: classNames(_defineProperty$4({}, "".concat(prefixCls, "-panel-focused"), !typing.value)),
          style: void 0,
          pickerValue: void 0,
          onPickerValueChange: void 0,
          onChange: null
        });
        var panelNode = createVNode(PickerPanel$1, _objectSpread2(_objectSpread2({}, panelProps), {}, {
          "generateConfig": generateConfig2,
          "value": selectedValue.value,
          "locale": locale,
          "tabindex": -1,
          "onSelect": function onSelect(date) {
            _onSelect === null || _onSelect === void 0 ? void 0 : _onSelect(date);
            setSelectedValue(date);
          },
          "direction": direction,
          "onPanelChange": function onPanelChange(viewDate, mode) {
            var onPanelChange2 = props.onPanelChange;
            onLeave(true);
            onPanelChange2 === null || onPanelChange2 === void 0 ? void 0 : onPanelChange2(viewDate, mode);
          }
        }), null);
        if (panelRender) {
          panelNode = panelRender(panelNode);
        }
        var panel = createVNode("div", {
          "class": "".concat(prefixCls, "-panel-container"),
          "onMousedown": function onMousedown2(e) {
            e.preventDefault();
          }
        }, [panelNode]);
        var suffixNode;
        if (suffixIcon) {
          suffixNode = createVNode("span", {
            "class": "".concat(prefixCls, "-suffix")
          }, [suffixIcon]);
        }
        var clearNode;
        if (allowClear && mergedValue.value && !disabled) {
          clearNode = createVNode("span", {
            "onMousedown": function onMousedown2(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            "onMouseup": function onMouseup(e) {
              e.preventDefault();
              e.stopPropagation();
              triggerChange(null);
              triggerOpen(false);
            },
            "class": "".concat(prefixCls, "-clear"),
            "role": "button"
          }, [clearIcon || createVNode("span", {
            "class": "".concat(prefixCls, "-clear-btn")
          }, null)]);
        }
        var mergedInputProps = _extends(_extends(_extends(_extends({
          id,
          tabindex,
          disabled,
          readonly: inputReadOnly || typeof formatList.value[0] === "function" || !typing.value,
          value: hoverValue.value || text.value,
          onInput: function onInput(e) {
            triggerTextChange(e.target.value);
          },
          autofocus,
          placeholder,
          ref: inputRef,
          title: text.value
        }, inputProps.value), {
          size: getInputSize(picker2, formatList.value[0], generateConfig2)
        }), getDataOrAriaProps(props)), {
          autocomplete
        });
        var inputNode = props.inputRender ? props.inputRender(mergedInputProps) : createVNode("input", mergedInputProps, null);
        var popupPlacement = direction === "rtl" ? "bottomRight" : "bottomLeft";
        return createVNode(PickerTrigger, {
          "visible": mergedOpen.value,
          "popupStyle": popupStyle,
          "prefixCls": prefixCls,
          "dropdownClassName": dropdownClassName,
          "dropdownAlign": dropdownAlign,
          "getPopupContainer": getPopupContainer,
          "transitionName": transitionName,
          "popupPlacement": popupPlacement,
          "direction": direction
        }, {
          default: function _default2() {
            return [createVNode("div", {
              "ref": containerRef,
              "class": classNames(prefixCls, attrs.class, (_classNames2 = {}, _defineProperty$4(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$4(_classNames2, "".concat(prefixCls, "-focused"), focused.value), _defineProperty$4(_classNames2, "".concat(prefixCls, "-rtl"), direction === "rtl"), _classNames2)),
              "style": attrs.style,
              "onMousedown": onMousedown,
              "onMouseup": onInternalMouseup,
              "onMouseenter": onMouseenter,
              "onMouseleave": onMouseleave,
              "onContextmenu": onContextmenu,
              "onClick": onClick
            }, [createVNode("div", {
              "class": classNames("".concat(prefixCls, "-input"), _defineProperty$4({}, "".concat(prefixCls, "-input-placeholder"), !!hoverValue.value)),
              "ref": inputDivRef
            }, [inputNode, suffixNode, clearNode]), getPortal()])];
          },
          popupElement: function popupElement() {
            return panel;
          }
        });
      };
    }
  });
}
var Picker$1 = Picker();
function useRangeDisabled(_ref, openRecordsRef) {
  var picker = _ref.picker, locale = _ref.locale, selectedValue = _ref.selectedValue, disabledDate = _ref.disabledDate, disabled = _ref.disabled, generateConfig2 = _ref.generateConfig;
  var startDate = computed(function() {
    return getValue(selectedValue.value, 0);
  });
  var endDate = computed(function() {
    return getValue(selectedValue.value, 1);
  });
  function weekFirstDate(date) {
    return generateConfig2.value.locale.getWeekFirstDate(locale.value.locale, date);
  }
  function monthNumber(date) {
    var year = generateConfig2.value.getYear(date);
    var month = generateConfig2.value.getMonth(date);
    return year * 100 + month;
  }
  function quarterNumber(date) {
    var year = generateConfig2.value.getYear(date);
    var quarter = getQuarter(generateConfig2.value, date);
    return year * 10 + quarter;
  }
  var disabledStartDate = function disabledStartDate2(date) {
    var _a;
    if (disabledDate && ((_a = disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate.value) === null || _a === void 0 ? void 0 : _a.call(disabledDate, date))) {
      return true;
    }
    if (disabled[1] && endDate) {
      return !isSameDate(generateConfig2.value, date, endDate.value) && generateConfig2.value.isAfter(date, endDate.value);
    }
    if (openRecordsRef.value[1] && endDate.value) {
      switch (picker.value) {
        case "quarter":
          return quarterNumber(date) > quarterNumber(endDate.value);
        case "month":
          return monthNumber(date) > monthNumber(endDate.value);
        case "week":
          return weekFirstDate(date) > weekFirstDate(endDate.value);
        default:
          return !isSameDate(generateConfig2.value, date, endDate.value) && generateConfig2.value.isAfter(date, endDate.value);
      }
    }
    return false;
  };
  var disabledEndDate = function disabledEndDate2(date) {
    var _a;
    if ((_a = disabledDate.value) === null || _a === void 0 ? void 0 : _a.call(disabledDate, date)) {
      return true;
    }
    if (disabled[0] && startDate) {
      return !isSameDate(generateConfig2.value, date, endDate.value) && generateConfig2.value.isAfter(startDate.value, date);
    }
    if (openRecordsRef.value[0] && startDate.value) {
      switch (picker.value) {
        case "quarter":
          return quarterNumber(date) < quarterNumber(startDate.value);
        case "month":
          return monthNumber(date) < monthNumber(startDate.value);
        case "week":
          return weekFirstDate(date) < weekFirstDate(startDate.value);
        default:
          return !isSameDate(generateConfig2.value, date, startDate.value) && generateConfig2.value.isAfter(startDate.value, date);
      }
    }
    return false;
  };
  return [disabledStartDate, disabledEndDate];
}
function getStartEndDistance(startDate, endDate, picker, generateConfig2) {
  var startNext = getClosingViewDate(startDate, picker, generateConfig2, 1);
  function getDistance(compareFunc) {
    if (compareFunc(startDate, endDate)) {
      return "same";
    }
    if (compareFunc(startNext, endDate)) {
      return "closing";
    }
    return "far";
  }
  switch (picker) {
    case "year":
      return getDistance(function(start, end) {
        return isSameDecade(generateConfig2, start, end);
      });
    case "quarter":
    case "month":
      return getDistance(function(start, end) {
        return isSameYear(generateConfig2, start, end);
      });
    default:
      return getDistance(function(start, end) {
        return isSameMonth(generateConfig2, start, end);
      });
  }
}
function getRangeViewDate(values, index2, picker, generateConfig2) {
  var startDate = getValue(values, 0);
  var endDate = getValue(values, 1);
  if (index2 === 0) {
    return startDate;
  }
  if (startDate && endDate) {
    var distance = getStartEndDistance(startDate, endDate, picker, generateConfig2);
    switch (distance) {
      case "same":
        return startDate;
      case "closing":
        return startDate;
      default:
        return getClosingViewDate(endDate, picker, generateConfig2, -1);
    }
  }
  return startDate;
}
function useRangeViewDates(_ref) {
  var values = _ref.values, picker = _ref.picker, defaultDates = _ref.defaultDates, generateConfig2 = _ref.generateConfig;
  var defaultViewDates = ref([getValue(defaultDates, 0), getValue(defaultDates, 1)]);
  var viewDates = ref(null);
  var startDate = computed(function() {
    return getValue(values.value, 0);
  });
  var endDate = computed(function() {
    return getValue(values.value, 1);
  });
  var getViewDate = function getViewDate2(index2) {
    if (defaultViewDates.value[index2]) {
      return defaultViewDates.value[index2];
    }
    return getValue(viewDates.value, index2) || getRangeViewDate(values.value, index2, picker.value, generateConfig2.value) || startDate.value || endDate.value || generateConfig2.value.getNow();
  };
  var startViewDate = ref(null);
  var endViewDate = ref(null);
  watchEffect(function() {
    startViewDate.value = getViewDate(0);
    endViewDate.value = getViewDate(1);
  });
  function setViewDate(viewDate, index2) {
    if (viewDate) {
      var newViewDates = updateValues(viewDates.value, viewDate, index2);
      defaultViewDates.value = updateValues(defaultViewDates.value, null, index2) || [null, null];
      var anotherIndex = (index2 + 1) % 2;
      if (!getValue(values.value, anotherIndex)) {
        newViewDates = updateValues(newViewDates, viewDate, anotherIndex);
      }
      viewDates.value = newViewDates;
    } else if (startDate.value || endDate.value) {
      viewDates.value = null;
    }
  }
  return [startViewDate, endViewDate, setViewDate];
}
function reorderValues(values, generateConfig2) {
  if (values && values[0] && values[1] && generateConfig2.isAfter(values[0], values[1])) {
    return [values[1], values[0]];
  }
  return values;
}
function canValueTrigger(value, index2, disabled, allowEmpty) {
  if (value) {
    return true;
  }
  if (allowEmpty && allowEmpty[index2]) {
    return true;
  }
  if (disabled[(index2 + 1) % 2]) {
    return true;
  }
  return false;
}
function RangerPicker() {
  return defineComponent({
    name: "RangerPicker",
    inheritAttrs: false,
    props: ["prefixCls", "id", "popupStyle", "dropdownClassName", "transitionName", "dropdownAlign", "getPopupContainer", "generateConfig", "locale", "placeholder", "autofocus", "disabled", "format", "picker", "showTime", "showNow", "showHour", "showMinute", "showSecond", "use12Hours", "separator", "value", "defaultValue", "defaultPickerValue", "open", "defaultOpen", "disabledDate", "disabledTime", "dateRender", "panelRender", "ranges", "allowEmpty", "allowClear", "suffixIcon", "clearIcon", "pickerRef", "inputReadOnly", "mode", "renderExtraFooter", "onChange", "onOpenChange", "onPanelChange", "onCalendarChange", "onFocus", "onBlur", "onMousedown", "onMouseup", "onMouseenter", "onMouseleave", "onClick", "onOk", "onKeydown", "components", "order", "direction", "activePickerIndex", "autocomplete", "minuteStep", "hourStep", "secondStep", "hideDisabledOptions", "disabledMinutes"],
    setup: function setup13(props, _ref) {
      var attrs = _ref.attrs, expose = _ref.expose;
      var needConfirmButton = computed(function() {
        return props.picker === "date" && !!props.showTime || props.picker === "time";
      });
      var getPortal = useProviderTrigger();
      var openRecordsRef = ref({});
      var containerRef = ref(null);
      var panelDivRef = ref(null);
      var startInputDivRef = ref(null);
      var endInputDivRef = ref(null);
      var separatorRef = ref(null);
      var startInputRef = ref(null);
      var endInputRef = ref(null);
      var arrowRef = ref(null);
      var formatList = computed(function() {
        return toArray$1(getDefaultFormat(props.format, props.picker, props.showTime, props.use12Hours));
      });
      var _useMergedState = useMergedState(0, {
        value: toRef(props, "activePickerIndex")
      }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedActivePickerIndex = _useMergedState2[0], setMergedActivePickerIndex = _useMergedState2[1];
      var operationRef = ref(null);
      var mergedDisabled = computed(function() {
        var disabled = props.disabled;
        if (Array.isArray(disabled)) {
          return disabled;
        }
        return [disabled || false, disabled || false];
      });
      var _useMergedState3 = useMergedState(null, {
        value: toRef(props, "value"),
        defaultValue: props.defaultValue,
        postState: function postState(values) {
          return props.picker === "time" && !props.order ? values : reorderValues(values, props.generateConfig);
        }
      }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), mergedValue = _useMergedState4[0], setInnerValue = _useMergedState4[1];
      var _useRangeViewDates = useRangeViewDates({
        values: mergedValue,
        picker: toRef(props, "picker"),
        defaultDates: props.defaultPickerValue,
        generateConfig: toRef(props, "generateConfig")
      }), _useRangeViewDates2 = _slicedToArray(_useRangeViewDates, 3), startViewDate = _useRangeViewDates2[0], endViewDate = _useRangeViewDates2[1], setViewDate = _useRangeViewDates2[2];
      var _useMergedState5 = useMergedState(mergedValue.value, {
        postState: function postState(values) {
          var postValues = values;
          if (mergedDisabled.value[0] && mergedDisabled.value[1]) {
            return postValues;
          }
          for (var i = 0; i < 2; i += 1) {
            if (mergedDisabled[i] && !getValue(postValues, i) && !getValue(props.allowEmpty, i)) {
              postValues = updateValues(postValues, props.generateConfig.getNow(), i);
            }
          }
          return postValues;
        }
      }), _useMergedState6 = _slicedToArray(_useMergedState5, 2), selectedValue = _useMergedState6[0], setSelectedValue = _useMergedState6[1];
      var _useMergedState7 = useMergedState([props.picker, props.picker], {
        value: toRef(props, "mode")
      }), _useMergedState8 = _slicedToArray(_useMergedState7, 2), mergedModes = _useMergedState8[0], setInnerModes = _useMergedState8[1];
      watch(function() {
        return props.picker;
      }, function() {
        setInnerModes([props.picker, props.picker]);
      });
      var triggerModesChange = function triggerModesChange2(modes, values) {
        var _a;
        setInnerModes(modes);
        (_a = props.onPanelChange) === null || _a === void 0 ? void 0 : _a.call(props, values, modes);
      };
      var _useRangeDisabled = useRangeDisabled({
        picker: toRef(props, "picker"),
        selectedValue,
        locale: toRef(props, "locale"),
        disabled: mergedDisabled,
        disabledDate: toRef(props, "disabledDate"),
        generateConfig: toRef(props, "generateConfig")
      }, openRecordsRef), _useRangeDisabled2 = _slicedToArray(_useRangeDisabled, 2), disabledStartDate = _useRangeDisabled2[0], disabledEndDate = _useRangeDisabled2[1];
      var _useMergedState9 = useMergedState(false, {
        value: toRef(props, "open"),
        defaultValue: props.defaultOpen,
        postState: function postState(postOpen) {
          return mergedDisabled.value[mergedActivePickerIndex.value] ? false : postOpen;
        },
        onChange: function onChange(newOpen) {
          var _a;
          (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, newOpen);
          if (!newOpen && operationRef.value && operationRef.value.onClose) {
            operationRef.value.onClose();
          }
        }
      }), _useMergedState10 = _slicedToArray(_useMergedState9, 2), mergedOpen = _useMergedState10[0], triggerInnerOpen = _useMergedState10[1];
      var startOpen = computed(function() {
        return mergedOpen.value && mergedActivePickerIndex.value === 0;
      });
      var endOpen = computed(function() {
        return mergedOpen.value && mergedActivePickerIndex.value === 1;
      });
      var popupMinWidth = ref(0);
      watch(mergedOpen, function() {
        if (!mergedOpen.value && containerRef.value) {
          popupMinWidth.value = containerRef.value.offsetWidth;
        }
      });
      var triggerRef = ref();
      function _triggerOpen(newOpen, index2) {
        if (newOpen) {
          clearTimeout(triggerRef.value);
          openRecordsRef.value[index2] = true;
          setMergedActivePickerIndex(index2);
          triggerInnerOpen(newOpen);
          if (!mergedOpen.value) {
            setViewDate(null, index2);
          }
        } else if (mergedActivePickerIndex.value === index2) {
          triggerInnerOpen(newOpen);
          var openRecords = openRecordsRef.value;
          triggerRef.value = setTimeout(function() {
            if (openRecords === openRecordsRef.value) {
              openRecordsRef.value = {};
            }
          });
        }
      }
      function triggerOpenAndFocus(index2) {
        _triggerOpen(true, index2);
        setTimeout(function() {
          var inputRef = [startInputRef, endInputRef][index2];
          if (inputRef.value) {
            inputRef.value.focus();
          }
        }, 0);
      }
      function triggerChange(newValue, sourceIndex) {
        var values = newValue;
        var startValue = getValue(values, 0);
        var endValue = getValue(values, 1);
        var generateConfig2 = props.generateConfig, locale = props.locale, picker = props.picker, order = props.order, onCalendarChange = props.onCalendarChange, allowEmpty = props.allowEmpty, onChange = props.onChange, showTime = props.showTime;
        if (startValue && endValue && generateConfig2.isAfter(startValue, endValue)) {
          if (picker === "week" && !isSameWeek(generateConfig2, locale.locale, startValue, endValue) || picker === "quarter" && !isSameQuarter(generateConfig2, startValue, endValue) || picker !== "week" && picker !== "quarter" && picker !== "time" && !(showTime ? isEqual(generateConfig2, startValue, endValue) : isSameDate(generateConfig2, startValue, endValue))) {
            if (sourceIndex === 0) {
              values = [startValue, null];
              endValue = null;
            } else {
              startValue = null;
              values = [null, endValue];
            }
            openRecordsRef.value = _defineProperty$4({}, sourceIndex, true);
          } else if (picker !== "time" || order !== false) {
            values = reorderValues(values, generateConfig2);
          }
        }
        setSelectedValue(values);
        var startStr2 = values && values[0] ? formatValue(values[0], {
          generateConfig: generateConfig2,
          locale,
          format: formatList.value[0]
        }) : "";
        var endStr2 = values && values[1] ? formatValue(values[1], {
          generateConfig: generateConfig2,
          locale,
          format: formatList.value[0]
        }) : "";
        if (onCalendarChange) {
          var info = {
            range: sourceIndex === 0 ? "start" : "end"
          };
          onCalendarChange(values, [startStr2, endStr2], info);
        }
        var canStartValueTrigger = canValueTrigger(startValue, 0, mergedDisabled.value, allowEmpty);
        var canEndValueTrigger = canValueTrigger(endValue, 1, mergedDisabled.value, allowEmpty);
        var canTrigger = values === null || canStartValueTrigger && canEndValueTrigger;
        if (canTrigger) {
          setInnerValue(values);
          if (onChange && (!isEqual(generateConfig2, getValue(mergedValue.value, 0), startValue) || !isEqual(generateConfig2, getValue(mergedValue.value, 1), endValue))) {
            onChange(values, [startStr2, endStr2]);
          }
        }
        var nextOpenIndex = null;
        if (sourceIndex === 0 && !mergedDisabled.value[1]) {
          nextOpenIndex = 1;
        } else if (sourceIndex === 1 && !mergedDisabled.value[0]) {
          nextOpenIndex = 0;
        }
        if (nextOpenIndex !== null && nextOpenIndex !== mergedActivePickerIndex.value && (!openRecordsRef.value[nextOpenIndex] || !getValue(values, nextOpenIndex)) && getValue(values, sourceIndex)) {
          triggerOpenAndFocus(nextOpenIndex);
        } else {
          _triggerOpen(false, sourceIndex);
        }
      }
      var forwardKeydown = function forwardKeydown2(e) {
        if (mergedOpen && operationRef.value && operationRef.value.onKeydown) {
          return operationRef.value.onKeydown(e);
        }
        {
          return false;
        }
      };
      var sharedTextHooksProps = {
        formatList,
        generateConfig: toRef(props, "generateConfig"),
        locale: toRef(props, "locale")
      };
      var _useValueTexts = useValueTexts(computed(function() {
        return getValue(selectedValue.value, 0);
      }), sharedTextHooksProps), _useValueTexts2 = _slicedToArray(_useValueTexts, 2), startValueTexts = _useValueTexts2[0], firstStartValueText = _useValueTexts2[1];
      var _useValueTexts3 = useValueTexts(computed(function() {
        return getValue(selectedValue.value, 1);
      }), sharedTextHooksProps), _useValueTexts4 = _slicedToArray(_useValueTexts3, 2), endValueTexts = _useValueTexts4[0], firstEndValueText = _useValueTexts4[1];
      var _onTextChange = function onTextChange(newText, index2) {
        var inputDate = parseValue(newText, {
          locale: props.locale,
          formatList: formatList.value,
          generateConfig: props.generateConfig
        });
        var disabledFunc = index2 === 0 ? disabledStartDate : disabledEndDate;
        if (inputDate && !disabledFunc(inputDate)) {
          setSelectedValue(updateValues(selectedValue.value, inputDate, index2));
          setViewDate(inputDate, index2);
        }
      };
      var _useTextValueMapping = useTextValueMapping({
        valueTexts: startValueTexts,
        onTextChange: function onTextChange(newText) {
          return _onTextChange(newText, 0);
        }
      }), _useTextValueMapping2 = _slicedToArray(_useTextValueMapping, 3), startText = _useTextValueMapping2[0], triggerStartTextChange = _useTextValueMapping2[1], resetStartText = _useTextValueMapping2[2];
      var _useTextValueMapping3 = useTextValueMapping({
        valueTexts: endValueTexts,
        onTextChange: function onTextChange(newText) {
          return _onTextChange(newText, 1);
        }
      }), _useTextValueMapping4 = _slicedToArray(_useTextValueMapping3, 3), endText = _useTextValueMapping4[0], triggerEndTextChange = _useTextValueMapping4[1], resetEndText = _useTextValueMapping4[2];
      var _useState = useState(null), _useState2 = _slicedToArray(_useState, 2), rangeHoverValue = _useState2[0], setRangeHoverValue = _useState2[1];
      var _useState3 = useState(null), _useState4 = _slicedToArray(_useState3, 2), hoverRangedValue = _useState4[0], setHoverRangedValue = _useState4[1];
      var _useHoverValue = useHoverValue(startText, sharedTextHooksProps), _useHoverValue2 = _slicedToArray(_useHoverValue, 3), startHoverValue = _useHoverValue2[0], onStartEnter = _useHoverValue2[1], onStartLeave = _useHoverValue2[2];
      var _useHoverValue3 = useHoverValue(endText, sharedTextHooksProps), _useHoverValue4 = _slicedToArray(_useHoverValue3, 3), endHoverValue = _useHoverValue4[0], onEndEnter = _useHoverValue4[1], onEndLeave = _useHoverValue4[2];
      var onDateMouseenter = function onDateMouseenter2(date) {
        setHoverRangedValue(updateValues(selectedValue.value, date, mergedActivePickerIndex.value));
        if (mergedActivePickerIndex.value === 0) {
          onStartEnter(date);
        } else {
          onEndEnter(date);
        }
      };
      var onDateMouseleave = function onDateMouseleave2() {
        setHoverRangedValue(updateValues(selectedValue.value, null, mergedActivePickerIndex.value));
        if (mergedActivePickerIndex.value === 0) {
          onStartLeave();
        } else {
          onEndLeave();
        }
      };
      var getSharedInputHookProps = function getSharedInputHookProps2(index2, resetText) {
        return {
          forwardKeydown,
          onBlur: function onBlur(e) {
            var _a;
            (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
          },
          isClickOutside: function isClickOutside(target) {
            return !elementsContains([panelDivRef.value, startInputDivRef.value, endInputDivRef.value, containerRef.value], target);
          },
          onFocus: function onFocus(e) {
            var _a;
            setMergedActivePickerIndex(index2);
            (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
          },
          triggerOpen: function triggerOpen(newOpen) {
            _triggerOpen(newOpen, index2);
          },
          onSubmit: function onSubmit() {
            if (!selectedValue.value || props.disabledDate && props.disabledDate(selectedValue.value[index2])) {
              return false;
            }
            triggerChange(selectedValue.value, index2);
            resetText();
          },
          onCancel: function onCancel() {
            _triggerOpen(false, index2);
            setSelectedValue(mergedValue.value);
            resetText();
          }
        };
      };
      var _usePickerInput = usePickerInput(_extends(_extends({}, getSharedInputHookProps(0, resetStartText)), {
        blurToCancel: needConfirmButton,
        open: startOpen,
        value: startText,
        onKeydown: function onKeydown(e, preventDefault) {
          var _a;
          (_a = props.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props, e, preventDefault);
        }
      })), _usePickerInput2 = _slicedToArray(_usePickerInput, 2), startInputProps = _usePickerInput2[0], _usePickerInput2$ = _usePickerInput2[1], startFocused = _usePickerInput2$.focused, startTyping = _usePickerInput2$.typing;
      var _usePickerInput3 = usePickerInput(_extends(_extends({}, getSharedInputHookProps(1, resetEndText)), {
        blurToCancel: needConfirmButton,
        open: endOpen,
        value: endText,
        onKeydown: function onKeydown(e, preventDefault) {
          var _a;
          (_a = props.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props, e, preventDefault);
        }
      })), _usePickerInput4 = _slicedToArray(_usePickerInput3, 2), endInputProps = _usePickerInput4[0], _usePickerInput4$ = _usePickerInput4[1], endFocused = _usePickerInput4$.focused, endTyping = _usePickerInput4$.typing;
      var onPickerClick = function onPickerClick2(e) {
        var _a;
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        if (!mergedOpen.value && !startInputRef.value.contains(e.target) && !endInputRef.value.contains(e.target)) {
          if (!mergedDisabled.value[0]) {
            triggerOpenAndFocus(0);
          } else if (!mergedDisabled.value[1]) {
            triggerOpenAndFocus(1);
          }
        }
      };
      var onPickerMousedown = function onPickerMousedown2(e) {
        var _a;
        (_a = props.onMousedown) === null || _a === void 0 ? void 0 : _a.call(props, e);
        if (mergedOpen.value && (startFocused.value || endFocused.value) && !startInputRef.value.contains(e.target) && !endInputRef.value.contains(e.target)) {
          e.preventDefault();
        }
      };
      var startStr = computed(function() {
        var _a;
        return ((_a = mergedValue.value) === null || _a === void 0 ? void 0 : _a[0]) ? formatValue(mergedValue.value[0], {
          locale: props.locale,
          format: "YYYYMMDDHHmmss",
          generateConfig: props.generateConfig
        }) : "";
      });
      var endStr = computed(function() {
        var _a;
        return ((_a = mergedValue.value) === null || _a === void 0 ? void 0 : _a[1]) ? formatValue(mergedValue.value[1], {
          locale: props.locale,
          format: "YYYYMMDDHHmmss",
          generateConfig: props.generateConfig
        }) : "";
      });
      watch([mergedOpen, startValueTexts, endValueTexts], function() {
        if (!mergedOpen.value) {
          setSelectedValue(mergedValue.value);
          if (!startValueTexts.value.length || startValueTexts.value[0] === "") {
            triggerStartTextChange("");
          } else if (firstStartValueText.value !== startText.value) {
            resetStartText();
          }
          if (!endValueTexts.value.length || endValueTexts.value[0] === "") {
            triggerEndTextChange("");
          } else if (firstEndValueText.value !== endText.value) {
            resetEndText();
          }
        }
      });
      watch([startStr, endStr], function() {
        setSelectedValue(mergedValue.value);
      });
      expose({
        focus: function focus() {
          if (startInputRef.value) {
            startInputRef.value.focus();
          }
        },
        blur: function blur() {
          if (startInputRef.value) {
            startInputRef.value.blur();
          }
          if (endInputRef.value) {
            endInputRef.value.blur();
          }
        }
      });
      var rangeList = computed(function() {
        return Object.keys(props.ranges || {}).map(function(label) {
          var range = props.ranges[label];
          var newValues = typeof range === "function" ? range() : range;
          return {
            label,
            onClick: function onClick() {
              triggerChange(newValues, null);
              _triggerOpen(false, mergedActivePickerIndex.value);
            },
            onMouseenter: function onMouseenter() {
              setRangeHoverValue(newValues);
            },
            onMouseleave: function onMouseleave() {
              setRangeHoverValue(null);
            }
          };
        });
      });
      var panelHoverRangedValue = computed(function() {
        if (mergedOpen.value && hoverRangedValue.value && hoverRangedValue.value[0] && hoverRangedValue.value[1] && props.generateConfig.isAfter(hoverRangedValue.value[1], hoverRangedValue.value[0])) {
          return hoverRangedValue.value;
        } else {
          return null;
        }
      });
      function renderPanel() {
        var panelPosition = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        var panelProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var generateConfig2 = props.generateConfig, showTime = props.showTime, dateRender = props.dateRender, direction = props.direction, _disabledTime = props.disabledTime, prefixCls = props.prefixCls, locale = props.locale;
        var panelShowTime = showTime;
        if (showTime && _typeof(showTime) === "object" && showTime.defaultValue) {
          var timeDefaultValues = showTime.defaultValue;
          panelShowTime = _extends(_extends({}, showTime), {
            defaultValue: getValue(timeDefaultValues, mergedActivePickerIndex.value) || void 0
          });
        }
        var panelDateRender = null;
        if (dateRender) {
          panelDateRender = function panelDateRender2(_ref2) {
            var date = _ref2.current, today = _ref2.today;
            return dateRender({
              current: date,
              today,
              info: {
                range: mergedActivePickerIndex.value ? "end" : "start"
              }
            });
          };
        }
        return createVNode(RangeContextProvider, {
          "value": {
            inRange: true,
            panelPosition,
            rangedValue: rangeHoverValue.value || selectedValue.value,
            hoverRangedValue: panelHoverRangedValue.value
          }
        }, {
          default: function _default2() {
            return [createVNode(PickerPanel$1, _objectSpread2(_objectSpread2(_objectSpread2({}, props), panelProps), {}, {
              "dateRender": panelDateRender,
              "showTime": panelShowTime,
              "mode": mergedModes.value[mergedActivePickerIndex.value],
              "generateConfig": generateConfig2,
              "style": void 0,
              "direction": direction,
              "disabledDate": mergedActivePickerIndex.value === 0 ? disabledStartDate : disabledEndDate,
              "disabledTime": function disabledTime(date) {
                if (_disabledTime) {
                  return _disabledTime(date, mergedActivePickerIndex.value === 0 ? "start" : "end");
                }
                return false;
              },
              "class": classNames(_defineProperty$4({}, "".concat(prefixCls, "-panel-focused"), mergedActivePickerIndex.value === 0 ? !startTyping.value : !endTyping.value)),
              "value": getValue(selectedValue.value, mergedActivePickerIndex.value),
              "locale": locale,
              "tabIndex": -1,
              "onPanelChange": function onPanelChange(date, newMode) {
                if (mergedActivePickerIndex.value === 0) {
                  onStartLeave(true);
                }
                if (mergedActivePickerIndex.value === 1) {
                  onEndLeave(true);
                }
                triggerModesChange(updateValues(mergedModes.value, newMode, mergedActivePickerIndex.value), updateValues(selectedValue.value, date, mergedActivePickerIndex.value));
                var viewDate = date;
                if (panelPosition === "right" && mergedModes.value[mergedActivePickerIndex.value] === newMode) {
                  viewDate = getClosingViewDate(viewDate, newMode, generateConfig2, -1);
                }
                setViewDate(viewDate, mergedActivePickerIndex.value);
              },
              "onOk": null,
              "onSelect": void 0,
              "onChange": void 0,
              "defaultValue": mergedActivePickerIndex.value === 0 ? getValue(selectedValue.value, 1) : getValue(selectedValue.value, 0)
            }), null)];
          }
        });
      }
      var onContextSelect = function onContextSelect2(date, type) {
        var values = updateValues(selectedValue.value, date, mergedActivePickerIndex.value);
        if (type === "submit" || type !== "key" && !needConfirmButton.value) {
          triggerChange(values, mergedActivePickerIndex.value);
          if (mergedActivePickerIndex.value === 0) {
            onStartLeave();
          } else {
            onEndLeave();
          }
        } else {
          setSelectedValue(values);
        }
      };
      useProvidePanel({
        operationRef,
        hideHeader: computed(function() {
          return props.picker === "time";
        }),
        onDateMouseenter,
        onDateMouseleave,
        hideRanges: computed(function() {
          return true;
        }),
        onSelect: onContextSelect,
        open: mergedOpen
      });
      return function() {
        var _classNames2, _classNames3, _classNames4;
        var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-picker" : _props$prefixCls, id = props.id, popupStyle = props.popupStyle, dropdownClassName = props.dropdownClassName, transitionName = props.transitionName, dropdownAlign = props.dropdownAlign, getPopupContainer = props.getPopupContainer, generateConfig2 = props.generateConfig, locale = props.locale, placeholder = props.placeholder, autofocus = props.autofocus, _props$picker = props.picker, picker = _props$picker === void 0 ? "date" : _props$picker, showTime = props.showTime, _props$separator = props.separator, separator = _props$separator === void 0 ? "~" : _props$separator, disabledDate = props.disabledDate, panelRender = props.panelRender, allowClear = props.allowClear, suffixIcon = props.suffixIcon, clearIcon = props.clearIcon, inputReadOnly = props.inputReadOnly, renderExtraFooter = props.renderExtraFooter, onMouseenter = props.onMouseenter, onMouseleave = props.onMouseleave, onMouseup = props.onMouseup, _onOk = props.onOk, components = props.components, direction = props.direction, _props$autocomplete = props.autocomplete, autocomplete = _props$autocomplete === void 0 ? "off" : _props$autocomplete;
        var arrowLeft = 0;
        var panelLeft = 0;
        if (mergedActivePickerIndex.value && startInputDivRef.value && separatorRef.value && panelDivRef.value) {
          arrowLeft = startInputDivRef.value.offsetWidth + separatorRef.value.offsetWidth;
          if (panelDivRef.value.offsetWidth && arrowRef.value.offsetWidth && arrowLeft > panelDivRef.value.offsetWidth - arrowRef.value.offsetWidth - (direction === "rtl" || arrowRef.value.offsetLeft > arrowLeft ? 0 : arrowRef.value.offsetLeft)) {
            panelLeft = arrowLeft;
          }
        }
        var arrowPositionStyle = direction === "rtl" ? {
          right: "".concat(arrowLeft, "px")
        } : {
          left: "".concat(arrowLeft, "px")
        };
        function renderPanels() {
          var panels;
          var extraNode = getExtraFooter(prefixCls, mergedModes.value[mergedActivePickerIndex.value], renderExtraFooter);
          var rangesNode = getRanges({
            prefixCls,
            components,
            needConfirmButton: needConfirmButton.value,
            okDisabled: !getValue(selectedValue.value, mergedActivePickerIndex.value) || disabledDate && disabledDate(selectedValue.value[mergedActivePickerIndex.value]),
            locale,
            rangeList: rangeList.value,
            onOk: function onOk() {
              if (getValue(selectedValue.value, mergedActivePickerIndex.value)) {
                triggerChange(selectedValue.value, mergedActivePickerIndex.value);
                if (_onOk) {
                  _onOk(selectedValue.value);
                }
              }
            }
          });
          if (picker !== "time" && !showTime) {
            var viewDate = mergedActivePickerIndex.value === 0 ? startViewDate.value : endViewDate.value;
            var nextViewDate = getClosingViewDate(viewDate, picker, generateConfig2);
            var currentMode = mergedModes.value[mergedActivePickerIndex.value];
            var showDoublePanel = currentMode === picker;
            var leftPanel = renderPanel(showDoublePanel ? "left" : false, {
              pickerValue: viewDate,
              onPickerValueChange: function onPickerValueChange(newViewDate) {
                setViewDate(newViewDate, mergedActivePickerIndex.value);
              }
            });
            var rightPanel = renderPanel("right", {
              pickerValue: nextViewDate,
              onPickerValueChange: function onPickerValueChange(newViewDate) {
                setViewDate(getClosingViewDate(newViewDate, picker, generateConfig2, -1), mergedActivePickerIndex.value);
              }
            });
            if (direction === "rtl") {
              panels = createVNode(Fragment, null, [rightPanel, showDoublePanel && leftPanel]);
            } else {
              panels = createVNode(Fragment, null, [leftPanel, showDoublePanel && rightPanel]);
            }
          } else {
            panels = renderPanel();
          }
          var mergedNodes = createVNode(Fragment, null, [createVNode("div", {
            "class": "".concat(prefixCls, "-panels")
          }, [panels]), (extraNode || rangesNode) && createVNode("div", {
            "class": "".concat(prefixCls, "-footer")
          }, [extraNode, rangesNode])]);
          if (panelRender) {
            mergedNodes = panelRender(mergedNodes);
          }
          return createVNode("div", {
            "class": "".concat(prefixCls, "-panel-container"),
            "style": {
              marginLeft: "".concat(panelLeft, "px")
            },
            "ref": panelDivRef,
            "onMousedown": function onMousedown(e) {
              e.preventDefault();
            }
          }, [mergedNodes]);
        }
        var rangePanel = createVNode("div", {
          "class": classNames("".concat(prefixCls, "-range-wrapper"), "".concat(prefixCls, "-").concat(picker, "-range-wrapper")),
          "style": {
            minWidth: "".concat(popupMinWidth.value, "px")
          }
        }, [createVNode("div", {
          "ref": arrowRef,
          "class": "".concat(prefixCls, "-range-arrow"),
          "style": arrowPositionStyle
        }, null), renderPanels()]);
        var suffixNode;
        if (suffixIcon) {
          suffixNode = createVNode("span", {
            "class": "".concat(prefixCls, "-suffix")
          }, [suffixIcon]);
        }
        var clearNode;
        if (allowClear && (getValue(mergedValue.value, 0) && !mergedDisabled.value[0] || getValue(mergedValue.value, 1) && !mergedDisabled.value[1])) {
          clearNode = createVNode("span", {
            "onMousedown": function onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            "onMouseup": function onMouseup2(e) {
              e.preventDefault();
              e.stopPropagation();
              var values = mergedValue.value;
              if (!mergedDisabled.value[0]) {
                values = updateValues(values, null, 0);
              }
              if (!mergedDisabled.value[1]) {
                values = updateValues(values, null, 1);
              }
              triggerChange(values, null);
              _triggerOpen(false, mergedActivePickerIndex.value);
            },
            "class": "".concat(prefixCls, "-clear")
          }, [clearIcon || createVNode("span", {
            "class": "".concat(prefixCls, "-clear-btn")
          }, null)]);
        }
        var inputSharedProps = {
          size: getInputSize(picker, formatList.value[0], generateConfig2)
        };
        var activeBarLeft = 0;
        var activeBarWidth = 0;
        if (startInputDivRef.value && endInputDivRef.value && separatorRef.value) {
          if (mergedActivePickerIndex.value === 0) {
            activeBarWidth = startInputDivRef.value.offsetWidth;
          } else {
            activeBarLeft = arrowLeft;
            activeBarWidth = endInputDivRef.value.offsetWidth;
          }
        }
        var activeBarPositionStyle = direction === "rtl" ? {
          right: "".concat(activeBarLeft, "px")
        } : {
          left: "".concat(activeBarLeft, "px")
        };
        return createVNode(PickerTrigger, {
          "visible": mergedOpen.value,
          "popupStyle": popupStyle,
          "prefixCls": prefixCls,
          "dropdownClassName": dropdownClassName,
          "dropdownAlign": dropdownAlign,
          "getPopupContainer": getPopupContainer,
          "transitionName": transitionName,
          "range": true,
          "direction": direction
        }, {
          default: function _default2() {
            return [createVNode("div", _objectSpread2({
              "ref": containerRef,
              "class": classNames(prefixCls, "".concat(prefixCls, "-range"), attrs.class, (_classNames2 = {}, _defineProperty$4(_classNames2, "".concat(prefixCls, "-disabled"), mergedDisabled.value[0] && mergedDisabled.value[1]), _defineProperty$4(_classNames2, "".concat(prefixCls, "-focused"), mergedActivePickerIndex.value === 0 ? startFocused.value : endFocused.value), _defineProperty$4(_classNames2, "".concat(prefixCls, "-rtl"), direction === "rtl"), _classNames2)),
              "style": attrs.style,
              "onClick": onPickerClick,
              "onMouseenter": onMouseenter,
              "onMouseleave": onMouseleave,
              "onMousedown": onPickerMousedown,
              "onMouseup": onMouseup
            }, getDataOrAriaProps(props)), [createVNode("div", {
              "class": classNames("".concat(prefixCls, "-input"), (_classNames3 = {}, _defineProperty$4(_classNames3, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex.value === 0), _defineProperty$4(_classNames3, "".concat(prefixCls, "-input-placeholder"), !!startHoverValue.value), _classNames3)),
              "ref": startInputDivRef
            }, [createVNode("input", _objectSpread2(_objectSpread2(_objectSpread2({
              "id": id,
              "disabled": mergedDisabled.value[0],
              "readonly": inputReadOnly || typeof formatList.value[0] === "function" || !startTyping.value,
              "value": startHoverValue.value || startText.value,
              "onInput": function onInput(e) {
                triggerStartTextChange(e.target.value);
              },
              "autofocus": autofocus,
              "placeholder": getValue(placeholder, 0) || "",
              "ref": startInputRef
            }, startInputProps.value), inputSharedProps), {}, {
              "autocomplete": autocomplete
            }), null)]), createVNode("div", {
              "class": "".concat(prefixCls, "-range-separator"),
              "ref": separatorRef
            }, [separator]), createVNode("div", {
              "class": classNames("".concat(prefixCls, "-input"), (_classNames4 = {}, _defineProperty$4(_classNames4, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex.value === 1), _defineProperty$4(_classNames4, "".concat(prefixCls, "-input-placeholder"), !!endHoverValue.value), _classNames4)),
              "ref": endInputDivRef
            }, [createVNode("input", _objectSpread2(_objectSpread2(_objectSpread2({
              "disabled": mergedDisabled.value[1],
              "readonly": inputReadOnly || typeof formatList.value[0] === "function" || !endTyping.value,
              "value": endHoverValue.value || endText.value,
              "onInput": function onInput(e) {
                triggerEndTextChange(e.target.value);
              },
              "placeholder": getValue(placeholder, 1) || "",
              "ref": endInputRef
            }, endInputProps.value), inputSharedProps), {}, {
              "autocomplete": autocomplete
            }), null)]), createVNode("div", {
              "class": "".concat(prefixCls, "-active-bar"),
              "style": _extends(_extends({}, activeBarPositionStyle), {
                width: "".concat(activeBarWidth, "px"),
                position: "absolute"
              })
            }, null), suffixNode, clearNode, getPortal()])];
          },
          popupElement: function popupElement() {
            return rangePanel;
          }
        });
      };
    }
  });
}
var InterRangerPicker = RangerPicker();
var VCRangePicker = InterRangerPicker;
var camel2hyphen = function camel2hyphen2(str) {
  return str.replace(/[A-Z]/g, function(match) {
    return "-" + match.toLowerCase();
  }).toLowerCase();
};
var isDimension = function isDimension2(feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};
var obj2mq = function obj2mq2(obj) {
  var mq = "";
  var features = Object.keys(obj);
  features.forEach(function(feature, index2) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    if (isDimension(feature) && typeof value === "number") {
      value = value + "px";
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += "not " + feature;
    } else {
      mq += "(" + feature + ": " + value + ")";
    }
    if (index2 < features.length - 1) {
      mq += " and ";
    }
  });
  return mq;
};
function json2mq(query) {
  var mq = "";
  if (typeof query === "string") {
    return query;
  }
  if (query instanceof Array) {
    query.forEach(function(q, index2) {
      mq += obj2mq(q);
      if (index2 < query.length - 1) {
        mq += ", ";
      }
    });
    return mq;
  }
  return obj2mq(query);
}
var defaultProps = {
  accessibility: {
    type: Boolean,
    default: true
  },
  adaptiveHeight: {
    type: Boolean,
    default: false
  },
  afterChange: PropTypes.any.def(null),
  arrows: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  autoplaySpeed: PropTypes.number.def(3e3),
  beforeChange: PropTypes.any.def(null),
  centerMode: {
    type: Boolean,
    default: false
  },
  centerPadding: PropTypes.string.def("50px"),
  cssEase: PropTypes.string.def("ease"),
  dots: {
    type: Boolean,
    default: false
  },
  dotsClass: PropTypes.string.def("slick-dots"),
  draggable: {
    type: Boolean,
    default: true
  },
  unslick: {
    type: Boolean,
    default: false
  },
  easing: PropTypes.string.def("linear"),
  edgeFriction: PropTypes.number.def(0.35),
  fade: {
    type: Boolean,
    default: false
  },
  focusOnSelect: {
    type: Boolean,
    default: false
  },
  infinite: {
    type: Boolean,
    default: true
  },
  initialSlide: PropTypes.number.def(0),
  lazyLoad: PropTypes.any.def(null),
  verticalSwiping: {
    type: Boolean,
    default: false
  },
  asNavFor: PropTypes.any.def(null),
  pauseOnDotsHover: {
    type: Boolean,
    default: false
  },
  pauseOnFocus: {
    type: Boolean,
    default: false
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  responsive: PropTypes.array,
  rows: PropTypes.number.def(1),
  rtl: {
    type: Boolean,
    default: false
  },
  slide: PropTypes.string.def("div"),
  slidesPerRow: PropTypes.number.def(1),
  slidesToScroll: PropTypes.number.def(1),
  slidesToShow: PropTypes.number.def(1),
  speed: PropTypes.number.def(500),
  swipe: {
    type: Boolean,
    default: true
  },
  swipeEvent: PropTypes.any.def(null),
  swipeToSlide: {
    type: Boolean,
    default: false
  },
  touchMove: {
    type: Boolean,
    default: true
  },
  touchThreshold: PropTypes.number.def(5),
  useCSS: {
    type: Boolean,
    default: true
  },
  useTransform: {
    type: Boolean,
    default: true
  },
  variableWidth: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  waitForAnimate: {
    type: Boolean,
    default: true
  },
  children: PropTypes.array,
  __propsSymbol__: PropTypes.any
};
var defaultProps$1 = defaultProps;
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0,
  targetSlide: 0
};
var initialState$1 = initialState;
function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}
var safePreventDefault = function safePreventDefault2(event) {
  var passiveEvents = ["touchstart", "touchmove", "wheel"];
  if (!passiveEvents.includes(event.type)) {
    event.preventDefault();
  }
};
var getOnDemandLazySlides = function getOnDemandLazySlides2(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }
  return onDemandSlides;
};
var lazyStartIndex = function lazyStartIndex2(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};
var lazyEndIndex = function lazyEndIndex2(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};
var lazySlidesOnLeft = function lazySlidesOnLeft2(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};
var lazySlidesOnRight = function lazySlidesOnRight2(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
};
var getWidth = function getWidth2(elem) {
  return elem && elem.offsetWidth || 0;
};
var getHeight = function getHeight2(elem) {
  return elem && elem.offsetHeight || 0;
};
var getSwipeDirection = function getSwipeDirection2(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var swipeAngle;
  var xDist = touchObject.startX - touchObject.curX;
  var yDist = touchObject.startY - touchObject.curY;
  var r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);
  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }
  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }
  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }
  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }
  return "vertical";
};
var canGoNext = function canGoNext2(spec) {
  var canGo = true;
  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }
  return canGo;
};
var extractObject = function extractObject2(spec, keys) {
  var newObject = {};
  keys.forEach(function(key) {
    return newObject[key] = spec[key];
  });
  return newObject;
};
var initializedState = function initializedState2(spec) {
  var slideCount = spec.children.length;
  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;
  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }
    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }
  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === void 0 ? spec.initialSlide : spec.currentSlide;
  if (spec.rtl && spec.currentSlide === void 0) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }
  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(_extends(_extends({}, spec), {
    currentSlide,
    lazyLoadedList
  }));
  lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount,
    slideWidth,
    listWidth,
    trackWidth,
    currentSlide,
    slideHeight,
    listHeight,
    lazyLoadedList
  };
  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }
  return state;
};
var slideHandler = function slideHandler2(spec) {
  var waitForAnimate = spec.waitForAnimate, animating = spec.animating, fade = spec.fade, infinite = spec.infinite, index2 = spec.index, slideCount = spec.slideCount, lazyLoad = spec.lazyLoad, currentSlide = spec.currentSlide, centerMode = spec.centerMode, slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, useCSS = spec.useCSS;
  var lazyLoadedList = spec.lazyLoadedList;
  if (waitForAnimate && animating)
    return {};
  var animationSlide = index2;
  var finalSlide;
  var animationLeft;
  var finalLeft;
  var state = {};
  var nextState = {};
  var targetSlide = infinite ? index2 : clamp(index2, 0, slideCount - 1);
  if (fade) {
    if (!infinite && (index2 < 0 || index2 >= slideCount))
      return {};
    if (index2 < 0) {
      animationSlide = index2 + slideCount;
    } else if (index2 >= slideCount) {
      animationSlide = index2 - slideCount;
    }
    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList = lazyLoadedList.concat(animationSlide);
    }
    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;
    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite)
        finalSlide = 0;
      else if (slideCount % slidesToScroll !== 0) {
        finalSlide = slideCount - slideCount % slidesToScroll;
      }
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite)
        finalSlide = slideCount - slidesToShow;
      else if (slideCount % slidesToScroll !== 0)
        finalSlide = 0;
    }
    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }
    animationLeft = getTrackLeft(_extends(_extends({}, spec), {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_extends(_extends({}, spec), {
      slideIndex: finalSlide
    }));
    if (!infinite) {
      if (animationLeft === finalLeft)
        animationSlide = finalSlide;
      animationLeft = finalLeft;
    }
    if (lazyLoad) {
      lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_extends(_extends({}, spec), {
        currentSlide: animationSlide
      })));
    }
    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_extends(_extends({}, spec), {
          left: finalLeft
        })),
        lazyLoadedList,
        targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_extends(_extends({}, spec), {
          left: animationLeft
        })),
        lazyLoadedList,
        targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_extends(_extends({}, spec), {
          left: finalLeft
        })),
        swipeLeft: null,
        targetSlide
      };
    }
  }
  return {
    state,
    nextState
  };
};
var changeSlide = function changeSlide2(spec, options) {
  var previousInt, slideOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, slideCount = spec.slideCount, currentSlide = spec.currentSlide, previousTargetSlide = spec.targetSlide, lazyLoad = spec.lazyLoad, infinite = spec.infinite;
  var unevenOffset = slideCount % slidesToScroll !== 0;
  var indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;
    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;
    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === "dots") {
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === "children") {
    targetSlide = options.index;
    if (infinite) {
      var direction = siblingDirection(_extends(_extends({}, spec), {
        targetSlide
      }));
      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);
  }
  return targetSlide;
};
var keyHandler = function keyHandler2(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) {
    return "";
  }
  if (e.keyCode === 37)
    return rtl ? "next" : "previous";
  if (e.keyCode === 39)
    return rtl ? "previous" : "next";
  return "";
};
var swipeStart = function swipeStart2(e, swipe, draggable) {
  e.target.tagName === "IMG" && safePreventDefault(e);
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1)
    return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};
var swipeMove = function swipeMove2(e, spec) {
  var scrolling = spec.scrolling, animating = spec.animating, vertical = spec.vertical, swipeToSlide = spec.swipeToSlide, verticalSwiping = spec.verticalSwiping, rtl = spec.rtl, currentSlide = spec.currentSlide, edgeFriction = spec.edgeFriction, edgeDragged = spec.edgeDragged, onEdge = spec.onEdge, swiped = spec.swiped, swiping = spec.swiping, slideCount = spec.slideCount, slidesToScroll = spec.slidesToScroll, infinite = spec.infinite, touchObject = spec.touchObject, swipeEvent = spec.swipeEvent, listHeight = spec.listHeight, listWidth = spec.listWidth;
  if (scrolling)
    return;
  if (animating)
    return safePreventDefault(e);
  if (vertical && swipeToSlide && verticalSwiping)
    safePreventDefault(e);
  var swipeLeft;
  var state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }
  if (verticalSwiping)
    touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) {
    positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  }
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;
  if (!infinite) {
    if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;
      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }
  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }
  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }
  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }
  state = _extends(_extends({}, state), {
    touchObject,
    swipeLeft,
    trackStyle: getTrackCSS(_extends(_extends({}, spec), {
      left: swipeLeft
    }))
  });
  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }
  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    safePreventDefault(e);
  }
  return state;
};
var swipeEnd = function swipeEnd2(e, spec) {
  var dragging = spec.dragging, swipe = spec.swipe, touchObject = spec.touchObject, listWidth = spec.listWidth, touchThreshold = spec.touchThreshold, verticalSwiping = spec.verticalSwiping, listHeight = spec.listHeight, swipeToSlide = spec.swipeToSlide, scrolling = spec.scrolling, onSwipe = spec.onSwipe, targetSlide = spec.targetSlide, currentSlide = spec.currentSlide, infinite = spec.infinite;
  if (!dragging) {
    if (swipe)
      safePreventDefault(e);
    return {};
  }
  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };
  if (scrolling) {
    return state;
  }
  if (!touchObject.swipeLength) {
    return state;
  }
  if (touchObject.swipeLength > minSwipe) {
    safePreventDefault(e);
    if (onSwipe) {
      onSwipe(swipeDirection);
    }
    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;
    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;
      case "right":
      case "down":
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;
      default:
        slideCount = activeSlide;
    }
    state["triggerSlideHandler"] = slideCount;
  } else {
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_extends(_extends({}, spec), {
      left: currentLeft
    }));
  }
  return state;
};
var getNavigableIndexes = function getNavigableIndexes2(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];
  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }
  return indexes;
};
var checkNavigable = function checkNavigable2(spec, index2) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;
  if (index2 > navigables[navigables.length - 1]) {
    index2 = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index2 < navigables[n]) {
        index2 = prevNavigable;
        break;
      }
      prevNavigable = navigables[n];
    }
  }
  return index2;
};
var getSlideCount = function getSlideCount2(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
    Array.from(slides).every(function(slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }
      return true;
    });
    if (!swipedSlide) {
      return 0;
    }
    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};
var checkSpecKeys = function checkSpecKeys2(spec, keysArray) {
  return keysArray.reduce(function(value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};
var getTrackCSS = function getTrackCSS2(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;
  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }
  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };
  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _extends(_extends({}, style), {
      WebkitTransform,
      transform,
      msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }
  if (spec.fade)
    style = {
      opacity: 1
    };
  if (trackWidth)
    style.width = trackWidth + "px";
  if (trackHeight)
    style.height = trackHeight + "px";
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }
  return style;
};
var getTrackAnimateCSS = function getTrackAnimateCSS2(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec);
  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getTrackLeft = function getTrackLeft2(spec) {
  if (spec.unslick) {
    return 0;
  }
  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex, trackRef = spec.trackRef, infinite = spec.infinite, centerMode = spec.centerMode, slideCount = spec.slideCount, slidesToShow = spec.slidesToShow, slidesToScroll = spec.slidesToScroll, slideWidth = spec.slideWidth, listWidth = spec.listWidth, variableWidth = spec.variableWidth, slideHeight = spec.slideHeight, fade = spec.fade, vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;
  if (fade || spec.slideCount === 1) {
    return 0;
  }
  var slidesToOffset = 0;
  if (infinite) {
    slidesToOffset = -getPreClones(spec);
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    }
    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }
    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }
  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;
  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }
  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;
      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }
      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }
  return targetLeft;
};
var getPreClones = function getPreClones2(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  if (spec.variableWidth) {
    return spec.slideCount;
  }
  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getPostClones = function getPostClones2(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  return spec.slideCount;
};
var getTotalSlides = function getTotalSlides2(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};
var siblingDirection = function siblingDirection2(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }
    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }
    return "left";
  }
};
var slidesOnRight = function slidesOnRight2(_ref) {
  var slidesToShow = _ref.slidesToShow, centerMode = _ref.centerMode, rtl = _ref.rtl, centerPadding = _ref.centerPadding;
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0)
      right += 1;
    if (rtl && slidesToShow % 2 === 0)
      right += 1;
    return right;
  }
  if (rtl) {
    return 0;
  }
  return slidesToShow - 1;
};
var slidesOnLeft = function slidesOnLeft2(_ref2) {
  var slidesToShow = _ref2.slidesToShow, centerMode = _ref2.centerMode, rtl = _ref2.rtl, centerPadding = _ref2.centerPadding;
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0)
      left += 1;
    if (!rtl && slidesToShow % 2 === 0)
      left += 1;
    return left;
  }
  if (rtl) {
    return slidesToShow - 1;
  }
  return 0;
};
var canUseDOM = function canUseDOM2() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};
var getSlideClasses = function getSlideClasses2(spec) {
  var slickActive, slickCenter;
  var centerOffset, index2;
  if (spec.rtl) {
    index2 = spec.slideCount - 1 - spec.index;
  } else {
    index2 = spec.index;
  }
  var slickCloned = index2 < 0 || index2 >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index2 - spec.currentSlide) % spec.slideCount === 0;
    if (index2 > spec.currentSlide - centerOffset - 1 && index2 <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index2 && index2 < spec.currentSlide + spec.slidesToShow;
  }
  var focusedSlide;
  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }
  var slickCurrent = index2 === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent
  };
};
var getSlideStyle = function getSlideStyle2(spec) {
  var style = {};
  if (spec.variableWidth === void 0 || spec.variableWidth === false) {
    style.width = spec.slideWidth + (typeof spec.slideWidth === "number" ? "px" : "");
  }
  if (spec.fade) {
    style.position = "relative";
    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight) + "px";
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth) + "px";
    }
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    if (spec.useCSS) {
      style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", visibility " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getKey = function getKey2(child, fallbackKey) {
  return child.key + "-" + fallbackKey;
};
var renderSlides = function renderSlides2(spec, children) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = children.length;
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  children.forEach(function(elem, index2) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index2,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };
    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index2) >= 0) {
      child = elem;
    } else {
      child = createVNode("div");
    }
    var childStyle = getSlideStyle(_extends(_extends({}, spec), {
      index: index2
    }));
    var slideClass = child.props.class || "";
    var slideClasses = getSlideClasses(_extends(_extends({}, spec), {
      index: index2
    }));
    slides.push(cloneElement(child, {
      key: "original" + getKey(child, index2),
      tabindex: "-1",
      "data-index": index2,
      "aria-hidden": !slideClasses["slick-active"],
      class: classNames(slideClasses, slideClass),
      style: _extends(_extends({
        outline: "none"
      }, child.props.style || {}), childStyle),
      onClick: function onClick() {
        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    }));
    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index2;
      if (preCloneNo <= getPreClones(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;
        if (key >= startIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(_extends(_extends({}, spec), {
          index: key
        }));
        preCloneSlides.push(cloneElement(child, {
          key: "precloned" + getKey(child, key),
          class: classNames(slideClasses, slideClass),
          tabindex: "-1",
          "data-index": key,
          "aria-hidden": !slideClasses["slick-active"],
          style: _extends(_extends({}, child.props.style || {}), childStyle),
          onClick: function onClick() {
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index2;
        if (key < endIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(_extends(_extends({}, spec), {
          index: key
        }));
        postCloneSlides.push(cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          tabindex: "-1",
          "data-index": key,
          "aria-hidden": !slideClasses["slick-active"],
          class: classNames(slideClasses, slideClass),
          style: _extends(_extends({}, child.props.style || {}), childStyle),
          onClick: function onClick() {
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });
  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};
var Track = function Track2(_, _ref) {
  var attrs = _ref.attrs, slots = _ref.slots;
  var slides = renderSlides(attrs, flattenChildren(slots === null || slots === void 0 ? void 0 : slots.default()));
  var onMouseenter = attrs.onMouseenter, onMouseover = attrs.onMouseover, onMouseleave = attrs.onMouseleave;
  var mouseEvents = {
    onMouseenter,
    onMouseover,
    onMouseleave
  };
  var trackProps = _extends({
    class: "slick-track",
    style: attrs.trackStyle
  }, mouseEvents);
  return createVNode("div", trackProps, [slides]);
};
Track.inheritAttrs = false;
var Track$1 = Track;
var getDotCount = function getDotCount2(spec) {
  var dots;
  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }
  return dots;
};
var Dots = function Dots2(_, _ref) {
  var attrs = _ref.attrs;
  var slideCount = attrs.slideCount, slidesToScroll = attrs.slidesToScroll, slidesToShow = attrs.slidesToShow, infinite = attrs.infinite, currentSlide = attrs.currentSlide, appendDots2 = attrs.appendDots, customPaging2 = attrs.customPaging, clickHandler2 = attrs.clickHandler, dotsClass = attrs.dotsClass, onMouseenter = attrs.onMouseenter, onMouseover = attrs.onMouseover, onMouseleave = attrs.onMouseleave;
  var dotCount = getDotCount({
    slideCount,
    slidesToScroll,
    slidesToShow,
    infinite
  });
  var mouseEvents = {
    onMouseenter,
    onMouseover,
    onMouseleave
  };
  var dots = [];
  var _loop = function _loop2(i2) {
    var _rightBound = (i2 + 1) * slidesToScroll - 1;
    var rightBound = infinite ? _rightBound : clamp(_rightBound, 0, slideCount - 1);
    var _leftBound = rightBound - (slidesToScroll - 1);
    var leftBound = infinite ? _leftBound : clamp(_leftBound, 0, slideCount - 1);
    var className = classNames({
      "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
    });
    var dotOptions = {
      message: "dots",
      index: i2,
      slidesToScroll,
      currentSlide
    };
    function onClick(e) {
      if (e) {
        e.preventDefault();
      }
      clickHandler2(dotOptions);
    }
    dots = dots.concat(createVNode("li", {
      "key": i2,
      "class": className
    }, [cloneElement(customPaging2({
      i: i2
    }), {
      onClick
    })]));
  };
  for (var i = 0; i < dotCount; i++) {
    _loop(i);
  }
  return cloneElement(appendDots2({
    dots
  }), _extends({
    class: dotsClass
  }, mouseEvents));
};
Dots.inheritAttrs = false;
var Dots$1 = Dots;
function noop$1() {
}
function handler(options, handle, e) {
  if (e) {
    e.preventDefault();
  }
  handle(options, e);
}
var PrevArrow = function PrevArrow2(_, _ref) {
  var attrs = _ref.attrs;
  var clickHandler2 = attrs.clickHandler, infinite = attrs.infinite, currentSlide = attrs.currentSlide, slideCount = attrs.slideCount, slidesToShow = attrs.slidesToShow;
  var prevClasses = {
    "slick-arrow": true,
    "slick-prev": true
  };
  var prevHandler = function prevHandler2(e) {
    handler({
      message: "previous"
    }, clickHandler2, e);
  };
  if (!infinite && (currentSlide === 0 || slideCount <= slidesToShow)) {
    prevClasses["slick-disabled"] = true;
    prevHandler = noop$1;
  }
  var prevArrowProps = {
    key: "0",
    "data-role": "none",
    class: prevClasses,
    style: {
      display: "block"
    },
    onClick: prevHandler
  };
  var customProps = {
    currentSlide,
    slideCount
  };
  var prevArrow;
  if (attrs.prevArrow) {
    prevArrow = cloneElement(attrs.prevArrow(_extends(_extends({}, prevArrowProps), customProps)), {
      key: "0",
      class: prevClasses,
      style: {
        display: "block"
      },
      onClick: prevHandler
    }, false);
  } else {
    prevArrow = createVNode("button", _objectSpread2({
      "key": "0",
      "type": "button"
    }, prevArrowProps), [" ", createTextVNode("Previous")]);
  }
  return prevArrow;
};
PrevArrow.inheritAttrs = false;
var NextArrow = function NextArrow2(_, _ref2) {
  var attrs = _ref2.attrs;
  var clickHandler2 = attrs.clickHandler, currentSlide = attrs.currentSlide, slideCount = attrs.slideCount;
  var nextClasses = {
    "slick-arrow": true,
    "slick-next": true
  };
  var nextHandler = function nextHandler2(e) {
    handler({
      message: "next"
    }, clickHandler2, e);
  };
  if (!canGoNext(attrs)) {
    nextClasses["slick-disabled"] = true;
    nextHandler = noop$1;
  }
  var nextArrowProps = {
    key: "1",
    "data-role": "none",
    class: classNames(nextClasses),
    style: {
      display: "block"
    },
    onClick: nextHandler
  };
  var customProps = {
    currentSlide,
    slideCount
  };
  var nextArrow;
  if (attrs.nextArrow) {
    nextArrow = cloneElement(attrs.nextArrow(_extends(_extends({}, nextArrowProps), customProps)), {
      key: "1",
      class: classNames(nextClasses),
      style: {
        display: "block"
      },
      onClick: nextHandler
    }, false);
  } else {
    nextArrow = createVNode("button", _objectSpread2({
      "key": "1",
      "type": "button"
    }, nextArrowProps), [" ", createTextVNode("Next")]);
  }
  return nextArrow;
};
NextArrow.inheritAttrs = false;
var __rest$4 = globalThis && globalThis.__rest || function(s, e) {
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
function noop() {
}
var InnerSlider = {
  name: "InnerSlider",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: _extends({}, defaultProps$1),
  data: function data() {
    this.preProps = _extends({}, this.$props);
    this.list = null;
    this.track = null;
    this.callbackTimers = [];
    this.clickable = true;
    this.debouncedResize = null;
    var ssrState = this.ssrInit();
    return _extends(_extends(_extends({}, initialState$1), {
      currentSlide: this.initialSlide,
      slideCount: this.children.length
    }), ssrState);
  },
  watch: {
    __propsSymbol__: function __propsSymbol__() {
      var _this = this;
      var nextProps = this.$props;
      var spec = _extends(_extends({
        listRef: this.list,
        trackRef: this.track
      }, nextProps), this.$data);
      var setTrackStyle = false;
      for (var _i = 0, _Object$keys = Object.keys(this.preProps); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        if (!nextProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }
        if (_typeof(nextProps[key]) === "object" || typeof nextProps[key] === "function" || _typeof(nextProps[key]) === "symbol") {
          continue;
        }
        if (nextProps[key] !== this.preProps[key]) {
          setTrackStyle = true;
          break;
        }
      }
      this.updateState(spec, setTrackStyle, function() {
        if (_this.currentSlide >= nextProps.children.length) {
          _this.changeSlide({
            message: "index",
            index: nextProps.children.length - nextProps.slidesToShow,
            currentSlide: _this.currentSlide
          });
        }
        if (!_this.preProps.autoplay && nextProps.autoplay) {
          _this.handleAutoPlay("playing");
        } else if (nextProps.autoplay) {
          _this.handleAutoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
      this.preProps = _extends({}, nextProps);
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.__emit("init");
    if (this.lazyLoad) {
      var slidesToLoad = getOnDemandLazySlides(_extends(_extends({}, this.$props), this.$data));
      if (slidesToLoad.length > 0) {
        this.setState(function(prevState) {
          return {
            lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
          };
        });
        this.__emit("lazyLoad", slidesToLoad);
      }
    }
    this.$nextTick(function() {
      var spec = _extends({
        listRef: _this2.list,
        trackRef: _this2.track,
        children: _this2.children
      }, _this2.$props);
      _this2.updateState(spec, true, function() {
        _this2.adaptHeight();
        _this2.autoplay && _this2.handleAutoPlay("playing");
      });
      if (_this2.lazyLoad === "progressive") {
        _this2.lazyLoadTimer = setInterval(_this2.progressiveLazyLoad, 1e3);
      }
      _this2.ro = new index(function() {
        if (_this2.animating) {
          _this2.onWindowResized(false);
          _this2.callbackTimers.push(setTimeout(function() {
            return _this2.onWindowResized();
          }, _this2.speed));
        } else {
          _this2.onWindowResized();
        }
      });
      _this2.ro.observe(_this2.list);
      document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
        slide.onfocus = _this2.$props.pauseOnFocus ? _this2.onSlideFocus : null;
        slide.onblur = _this2.$props.pauseOnFocus ? _this2.onSlideBlur : null;
      });
      if (window.addEventListener) {
        window.addEventListener("resize", _this2.onWindowResized);
      } else {
        window.attachEvent("onresize", _this2.onWindowResized);
      }
    });
  },
  beforeUnmount: function beforeUnmount() {
    var _a;
    if (this.animationEndCallback) {
      clearTimeout(this.animationEndCallback);
    }
    if (this.lazyLoadTimer) {
      clearInterval(this.lazyLoadTimer);
    }
    if (this.callbackTimers.length) {
      this.callbackTimers.forEach(function(timer) {
        return clearTimeout(timer);
      });
      this.callbackTimers = [];
    }
    if (window.addEventListener) {
      window.removeEventListener("resize", this.onWindowResized);
    } else {
      window.detachEvent("onresize", this.onWindowResized);
    }
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
    (_a = this.ro) === null || _a === void 0 ? void 0 : _a.disconnect();
  },
  updated: function updated() {
    this.checkImagesLoad();
    this.__emit("reInit");
    if (this.lazyLoad) {
      var slidesToLoad = getOnDemandLazySlides(_extends(_extends({}, this.$props), this.$data));
      if (slidesToLoad.length > 0) {
        this.setState(function(prevState) {
          return {
            lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
          };
        });
        this.__emit("lazyLoad");
      }
    }
    this.adaptHeight();
  },
  methods: {
    listRefHandler: function listRefHandler(ref2) {
      this.list = ref2;
    },
    trackRefHandler: function trackRefHandler(ref2) {
      this.track = ref2;
    },
    adaptHeight: function adaptHeight() {
      if (this.adaptiveHeight && this.list) {
        var elem = this.list.querySelector('[data-index="'.concat(this.currentSlide, '"]'));
        this.list.style.height = getHeight(elem) + "px";
      }
    },
    onWindowResized: function onWindowResized(setTrackStyle) {
      var _this3 = this;
      if (this.debouncedResize)
        this.debouncedResize.cancel();
      this.debouncedResize = debounce(function() {
        return _this3.resizeWindow(setTrackStyle);
      }, 50);
      this.debouncedResize();
    },
    resizeWindow: function resizeWindow() {
      var _this4 = this;
      var setTrackStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      var isTrackMounted = Boolean(this.track);
      if (!isTrackMounted)
        return;
      var spec = _extends(_extends({
        listRef: this.list,
        trackRef: this.track,
        children: this.children
      }, this.$props), this.$data);
      this.updateState(spec, setTrackStyle, function() {
        if (_this4.autoplay) {
          _this4.handleAutoPlay("update");
        } else {
          _this4.pause("paused");
        }
      });
      this.setState({
        animating: false
      });
      clearTimeout(this.animationEndCallback);
      delete this.animationEndCallback;
    },
    updateState: function updateState(spec, setTrackStyle, callback) {
      var updatedState = initializedState(spec);
      spec = _extends(_extends(_extends({}, spec), updatedState), {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = getTrackLeft(spec);
      spec = _extends(_extends({}, spec), {
        left: targetLeft
      });
      var trackStyle = getTrackCSS(spec);
      if (setTrackStyle || this.children.length !== spec.children.length) {
        updatedState["trackStyle"] = trackStyle;
      }
      this.setState(updatedState, callback);
    },
    ssrInit: function ssrInit() {
      var children = this.children;
      if (this.variableWidth) {
        var _trackWidth = 0;
        var _trackLeft = 0;
        var childrenWidths = [];
        var preClones = getPreClones(_extends(_extends(_extends({}, this.$props), this.$data), {
          slideCount: children.length
        }));
        var postClones = getPostClones(_extends(_extends(_extends({}, this.$props), this.$data), {
          slideCount: children.length
        }));
        children.forEach(function(child) {
          var _a, _b;
          var childWidth = ((_b = (_a = child.props.style) === null || _a === void 0 ? void 0 : _a.width) === null || _b === void 0 ? void 0 : _b.split("px")[0]) || 0;
          childrenWidths.push(childWidth);
          _trackWidth += childWidth;
        });
        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }
        for (var _i2 = 0; _i2 < postClones; _i2++) {
          _trackWidth += childrenWidths[_i2];
        }
        for (var _i3 = 0; _i3 < this.currentSlide; _i3++) {
          _trackLeft += childrenWidths[_i3];
        }
        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };
        if (this.centerMode) {
          var currentWidth = "".concat(childrenWidths[this.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }
        return {
          trackStyle: _trackStyle
        };
      }
      var childrenCount = children.length;
      var spec = _extends(_extends(_extends({}, this.$props), this.$data), {
        slideCount: childrenCount
      });
      var slideCount = getPreClones(spec) + getPostClones(spec) + childrenCount;
      var trackWidth = 100 / this.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * (getPreClones(spec) + this.currentSlide) * trackWidth / 100;
      if (this.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }
      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      return {
        slideWidth: slideWidth + "%",
        trackStyle
      };
    },
    checkImagesLoad: function checkImagesLoad() {
      var _this5 = this;
      var images = this.list && this.list.querySelectorAll && this.list.querySelectorAll(".slick-slide img") || [];
      var imagesCount = images.length;
      var loadedCount = 0;
      Array.prototype.forEach.call(images, function(image) {
        var handler2 = function handler3() {
          return ++loadedCount && loadedCount >= imagesCount && _this5.onWindowResized();
        };
        if (!image.onclick) {
          image.onclick = function() {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;
          image.onclick = function() {
            prevClickHandler();
            image.parentNode.focus();
          };
        }
        if (!image.onload) {
          if (_this5.$props.lazyLoad) {
            image.onload = function() {
              _this5.adaptHeight();
              _this5.callbackTimers.push(setTimeout(_this5.onWindowResized, _this5.speed));
            };
          } else {
            image.onload = handler2;
            image.onerror = function() {
              handler2();
              _this5.__emit("lazyLoadError");
            };
          }
        }
      });
    },
    progressiveLazyLoad: function progressiveLazyLoad() {
      var slidesToLoad = [];
      var spec = _extends(_extends({}, this.$props), this.$data);
      for (var index2 = this.currentSlide; index2 < this.slideCount + getPostClones(spec); index2++) {
        if (this.lazyLoadedList.indexOf(index2) < 0) {
          slidesToLoad.push(index2);
          break;
        }
      }
      for (var _index = this.currentSlide - 1; _index >= -getPreClones(spec); _index--) {
        if (this.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }
      if (slidesToLoad.length > 0) {
        this.setState(function(state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });
        this.__emit("lazyLoad", slidesToLoad);
      } else {
        if (this.lazyLoadTimer) {
          clearInterval(this.lazyLoadTimer);
          delete this.lazyLoadTimer;
        }
      }
    },
    slideHandler: function slideHandler$1(index2) {
      var _this6 = this;
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var _this$$props = this.$props, asNavFor = _this$$props.asNavFor, currentSlide = _this$$props.currentSlide, beforeChange = _this$$props.beforeChange, speed = _this$$props.speed, afterChange = _this$$props.afterChange;
      var _slideHandler2 = slideHandler(_extends(_extends(_extends({
        index: index2
      }, this.$props), this.$data), {
        trackRef: this.track,
        useCSS: this.useCSS && !dontAnimate
      })), state = _slideHandler2.state, nextState = _slideHandler2.nextState;
      if (!state)
        return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function(value) {
        return _this6.lazyLoadedList.indexOf(value) < 0;
      });
      if (this.$attrs.onLazyLoad && slidesToLoad.length > 0) {
        this.__emit("lazyLoad", slidesToLoad);
      }
      if (!this.$props.waitForAnimate && this.animationEndCallback) {
        clearTimeout(this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete this.animationEndCallback;
      }
      this.setState(state, function() {
        if (asNavFor && _this6.asNavForIndex !== index2) {
          _this6.asNavForIndex = index2;
          asNavFor.innerSlider.slideHandler(index2);
        }
        if (!nextState)
          return;
        _this6.animationEndCallback = setTimeout(function() {
          var animating = nextState.animating, firstBatch = __rest$4(nextState, ["animating"]);
          _this6.setState(firstBatch, function() {
            _this6.callbackTimers.push(setTimeout(function() {
              return _this6.setState({
                animating
              });
            }, 10));
            afterChange && afterChange(state.currentSlide);
            delete _this6.animationEndCallback;
          });
        }, speed);
      });
    },
    changeSlide: function changeSlide$1(options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var spec = _extends(_extends({}, this.$props), this.$data);
      var targetSlide = changeSlide(spec, options);
      if (targetSlide !== 0 && !targetSlide)
        return;
      if (dontAnimate === true) {
        this.slideHandler(targetSlide, dontAnimate);
      } else {
        this.slideHandler(targetSlide);
      }
      this.$props.autoplay && this.handleAutoPlay("update");
      if (this.$props.focusOnSelect) {
        var nodes = this.list.querySelectorAll(".slick-current");
        nodes[0] && nodes[0].focus();
      }
    },
    clickHandler: function clickHandler(e) {
      if (this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.clickable = true;
    },
    keyHandler: function keyHandler$1(e) {
      var dir = keyHandler(e, this.accessibility, this.rtl);
      dir !== "" && this.changeSlide({
        message: dir
      });
    },
    selectHandler: function selectHandler(options) {
      this.changeSlide(options);
    },
    disableBodyScroll: function disableBodyScroll() {
      var preventDefault = function preventDefault2(e) {
        e = e || window.event;
        if (e.preventDefault)
          e.preventDefault();
        e.returnValue = false;
      };
      window.ontouchmove = preventDefault;
    },
    enableBodyScroll: function enableBodyScroll() {
      window.ontouchmove = null;
    },
    swipeStart: function swipeStart$1(e) {
      if (this.verticalSwiping) {
        this.disableBodyScroll();
      }
      var state = swipeStart(e, this.swipe, this.draggable);
      state !== "" && this.setState(state);
    },
    swipeMove: function swipeMove$1(e) {
      var state = swipeMove(e, _extends(_extends(_extends({}, this.$props), this.$data), {
        trackRef: this.track,
        listRef: this.list,
        slideIndex: this.currentSlide
      }));
      if (!state)
        return;
      if (state["swiping"]) {
        this.clickable = false;
      }
      this.setState(state);
    },
    swipeEnd: function swipeEnd$1(e) {
      var state = swipeEnd(e, _extends(_extends(_extends({}, this.$props), this.$data), {
        trackRef: this.track,
        listRef: this.list,
        slideIndex: this.currentSlide
      }));
      if (!state)
        return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];
      this.setState(state);
      if (triggerSlideHandler === void 0)
        return;
      this.slideHandler(triggerSlideHandler);
      if (this.$props.verticalSwiping) {
        this.enableBodyScroll();
      }
    },
    touchEnd: function touchEnd(e) {
      this.swipeEnd(e);
      this.clickable = true;
    },
    slickPrev: function slickPrev() {
      var _this7 = this;
      this.callbackTimers.push(setTimeout(function() {
        return _this7.changeSlide({
          message: "previous"
        });
      }, 0));
    },
    slickNext: function slickNext() {
      var _this8 = this;
      this.callbackTimers.push(setTimeout(function() {
        return _this8.changeSlide({
          message: "next"
        });
      }, 0));
    },
    slickGoTo: function slickGoTo(slide) {
      var _this9 = this;
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide))
        return "";
      this.callbackTimers.push(setTimeout(function() {
        return _this9.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this9.currentSlide
        }, dontAnimate);
      }, 0));
    },
    play: function play() {
      var nextIndex;
      if (this.rtl) {
        nextIndex = this.currentSlide - this.slidesToScroll;
      } else {
        if (canGoNext(_extends(_extends({}, this.$props), this.$data))) {
          nextIndex = this.currentSlide + this.slidesToScroll;
        } else {
          return false;
        }
      }
      this.slideHandler(nextIndex);
    },
    handleAutoPlay: function handleAutoPlay(playType) {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
      }
      var autoplaying = this.autoplaying;
      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }
      this.autoplayTimer = setInterval(this.play, this.autoplaySpeed + 50);
      this.setState({
        autoplaying: "playing"
      });
    },
    pause: function pause(pauseType) {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
      }
      var autoplaying = this.autoplaying;
      if (pauseType === "paused") {
        this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        if (autoplaying === "playing") {
          this.setState({
            autoplaying: "hovered"
          });
        }
      }
    },
    onDotsOver: function onDotsOver() {
      this.autoplay && this.pause("hovered");
    },
    onDotsLeave: function onDotsLeave() {
      this.autoplay && this.autoplaying === "hovered" && this.handleAutoPlay("leave");
    },
    onTrackOver: function onTrackOver() {
      this.autoplay && this.pause("hovered");
    },
    onTrackLeave: function onTrackLeave() {
      this.autoplay && this.autoplaying === "hovered" && this.handleAutoPlay("leave");
    },
    onSlideFocus: function onSlideFocus() {
      this.autoplay && this.pause("focused");
    },
    onSlideBlur: function onSlideBlur() {
      this.autoplay && this.autoplaying === "focused" && this.handleAutoPlay("blur");
    },
    customPaging: function customPaging(_ref) {
      var i = _ref.i;
      return createVNode("button", null, [i + 1]);
    },
    appendDots: function appendDots(_ref2) {
      var dots = _ref2.dots;
      return createVNode("ul", {
        "style": {
          display: "block"
        }
      }, [dots]);
    }
  },
  render: function render() {
    var _listProps, _this10 = this;
    var className = classNames("slick-slider", this.$attrs.class, {
      "slick-vertical": this.vertical,
      "slick-initialized": true
    });
    var spec = _extends(_extends({}, this.$props), this.$data);
    var trackProps = extractObject(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
    var pauseOnHover = this.$props.pauseOnHover;
    trackProps = _extends(_extends({}, trackProps), {
      focusOnSelect: this.focusOnSelect && this.clickable ? this.selectHandler : null,
      ref: this.trackRefHandler,
      onMouseleave: pauseOnHover ? this.onTrackLeave : noop,
      onMouseover: pauseOnHover ? this.onTrackOver : noop
    });
    var dots;
    if (this.dots === true && this.slideCount >= this.slidesToShow) {
      var dotProps = extractObject(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "infinite", "appendDots"]);
      dotProps.customPaging = this.customPaging;
      dotProps.appendDots = this.appendDots;
      var _this$$slots = this.$slots, customPaging2 = _this$$slots.customPaging, appendDots2 = _this$$slots.appendDots;
      if (customPaging2) {
        dotProps.customPaging = customPaging2;
      }
      if (appendDots2) {
        dotProps.appendDots = appendDots2;
      }
      var pauseOnDotsHover = this.$props.pauseOnDotsHover;
      dotProps = _extends(_extends({}, dotProps), {
        clickHandler: this.changeSlide,
        onMouseover: pauseOnDotsHover ? this.onDotsOver : noop,
        onMouseleave: pauseOnDotsHover ? this.onDotsLeave : noop
      });
      dots = createVNode(Dots$1, dotProps, null);
    }
    var prevArrow, nextArrow;
    var arrowProps = extractObject(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow"]);
    arrowProps.clickHandler = this.changeSlide;
    var _this$$slots2 = this.$slots, prevArrowCustom = _this$$slots2.prevArrow, nextArrowCustom = _this$$slots2.nextArrow;
    if (prevArrowCustom) {
      arrowProps.prevArrow = prevArrowCustom;
    }
    if (nextArrowCustom) {
      arrowProps.nextArrow = nextArrowCustom;
    }
    if (this.arrows) {
      prevArrow = createVNode(PrevArrow, arrowProps, null);
      nextArrow = createVNode(NextArrow, arrowProps, null);
    }
    var verticalHeightStyle = null;
    if (this.vertical) {
      verticalHeightStyle = {
        height: typeof this.listHeight === "number" ? "".concat(this.listHeight, "px") : this.listHeight
      };
    }
    var centerPaddingStyle = null;
    if (this.vertical === false) {
      if (this.centerMode === true) {
        centerPaddingStyle = {
          padding: "0px " + this.centerPadding
        };
      }
    } else {
      if (this.centerMode === true) {
        centerPaddingStyle = {
          padding: this.centerPadding + " 0px"
        };
      }
    }
    var listStyle = _extends(_extends({}, verticalHeightStyle), centerPaddingStyle);
    var touchMove = this.touchMove;
    var listProps = (_listProps = {
      ref: this.listRefHandler,
      class: "slick-list",
      style: listStyle,
      onClick: this.clickHandler,
      onMousedown: touchMove ? this.swipeStart : noop,
      onMousemove: this.dragging && touchMove ? this.swipeMove : noop,
      onMouseup: touchMove ? this.swipeEnd : noop,
      onMouseleave: this.dragging && touchMove ? this.swipeEnd : noop
    }, _defineProperty$4(_listProps, supportsPassive ? "onTouchstartPassive" : "onTouchstart", touchMove ? this.swipeStart : noop), _defineProperty$4(_listProps, supportsPassive ? "onTouchmovePassive" : "onTouchmove", this.dragging && touchMove ? this.swipeMove : noop), _defineProperty$4(_listProps, "onTouchend", touchMove ? this.touchEnd : noop), _defineProperty$4(_listProps, "onTouchcancel", this.dragging && touchMove ? this.swipeEnd : noop), _defineProperty$4(_listProps, "onKeydown", this.accessibility ? this.keyHandler : noop), _listProps);
    var innerSliderProps = {
      class: className,
      dir: "ltr",
      style: this.$attrs.style
    };
    if (this.unslick) {
      listProps = {
        class: "slick-list",
        ref: this.listRefHandler
      };
      innerSliderProps = {
        class: className
      };
    }
    return createVNode("div", innerSliderProps, [!this.unslick ? prevArrow : "", createVNode("div", listProps, [createVNode(Track$1, trackProps, {
      default: function _default2() {
        return [_this10.children];
      }
    })]), !this.unslick ? nextArrow : "", !this.unslick ? dots : ""]);
  }
};
var Slider = defineComponent({
  name: "Slider",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: _extends({}, defaultProps$1),
  data: function data2() {
    this._responsiveMediaHandlers = [];
    return {
      breakpoint: null
    };
  },
  mounted: function mounted2() {
    var _this = this;
    if (this.responsive) {
      var breakpoints = this.responsive.map(function(breakpt) {
        return breakpt.breakpoint;
      });
      breakpoints.sort(function(x, y) {
        return x - y;
      });
      breakpoints.forEach(function(breakpoint, index2) {
        var bQuery;
        if (index2 === 0) {
          bQuery = json2mq({
            minWidth: 0,
            maxWidth: breakpoint
          });
        } else {
          bQuery = json2mq({
            minWidth: breakpoints[index2 - 1] + 1,
            maxWidth: breakpoint
          });
        }
        canUseDOM() && _this.media(bQuery, function() {
          _this.setState({
            breakpoint
          });
        });
      });
      var query = json2mq({
        minWidth: breakpoints.slice(-1)[0]
      });
      canUseDOM() && this.media(query, function() {
        _this.setState({
          breakpoint: null
        });
      });
    }
  },
  beforeUnmount: function beforeUnmount2() {
    this._responsiveMediaHandlers.forEach(function(obj) {
      obj.mql.removeListener(obj.listener);
    });
  },
  methods: {
    innerSliderRefHandler: function innerSliderRefHandler(ref2) {
      this.innerSlider = ref2;
    },
    media: function media(query, handler2) {
      var mql = window.matchMedia(query);
      var listener = function listener2(_ref) {
        var matches = _ref.matches;
        if (matches) {
          handler2();
        }
      };
      mql.addListener(listener);
      listener(mql);
      this._responsiveMediaHandlers.push({
        mql,
        query,
        listener
      });
    },
    slickPrev: function slickPrev2() {
      var _a;
      (_a = this.innerSlider) === null || _a === void 0 ? void 0 : _a.slickPrev();
    },
    slickNext: function slickNext2() {
      var _a;
      (_a = this.innerSlider) === null || _a === void 0 ? void 0 : _a.slickNext();
    },
    slickGoTo: function slickGoTo2(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var _a;
      (_a = this.innerSlider) === null || _a === void 0 ? void 0 : _a.slickGoTo(slide, dontAnimate);
    },
    slickPause: function slickPause() {
      var _a;
      (_a = this.innerSlider) === null || _a === void 0 ? void 0 : _a.pause("paused");
    },
    slickPlay: function slickPlay() {
      var _a;
      (_a = this.innerSlider) === null || _a === void 0 ? void 0 : _a.handleAutoPlay("play");
    }
  },
  render: function render2() {
    var _this2 = this;
    var _a;
    var settings;
    var newProps;
    if (this.breakpoint) {
      newProps = this.responsive.filter(function(resp) {
        return resp.breakpoint === _this2.breakpoint;
      });
      settings = newProps[0].settings === "unslick" ? "unslick" : _extends(_extends({}, this.$props), newProps[0].settings);
    } else {
      settings = _extends({}, this.$props);
    }
    if (settings.centerMode) {
      if (settings.slidesToScroll > 1 && false) {
        console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
      }
      settings.slidesToScroll = 1;
    }
    if (settings.fade) {
      if (settings.slidesToShow > 1 && false) {
        console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
      }
      if (settings.slidesToScroll > 1 && false) {
        console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
      }
      settings.slidesToShow = 1;
      settings.slidesToScroll = 1;
    }
    var children = getSlot(this) || [];
    children = children.filter(function(child) {
      if (typeof child === "string") {
        return !!child.trim();
      }
      return !!child;
    });
    if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
      console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
      settings.variableWidth = false;
    }
    var newChildren = [];
    var currentWidth = null;
    for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
      var newSlide = [];
      for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
        var row = [];
        for (var k = j; k < j + settings.slidesPerRow; k += 1) {
          if (settings.variableWidth && ((_a = children[k].props) === null || _a === void 0 ? void 0 : _a.style)) {
            currentWidth = children[k].props.style.width;
          }
          if (k >= children.length)
            break;
          row.push(cloneElement(children[k], {
            key: 100 * i + 10 * j + k,
            tabindex: -1,
            style: {
              width: "".concat(100 / settings.slidesPerRow, "%"),
              display: "inline-block"
            }
          }));
        }
        newSlide.push(createVNode("div", {
          "key": 10 * i + j
        }, [row]));
      }
      if (settings.variableWidth) {
        newChildren.push(createVNode("div", {
          "key": i,
          "style": {
            width: currentWidth
          }
        }, [newSlide]));
      } else {
        newChildren.push(createVNode("div", {
          "key": i
        }, [newSlide]));
      }
    }
    if (settings === "unslick") {
      var className = "regular slider " + (this.className || "");
      return createVNode("div", {
        "class": className
      }, [children]);
    } else if (newChildren.length <= settings.slidesToShow) {
      settings.unslick = true;
    }
    var sliderProps = _extends(_extends(_extends({}, this.$attrs), settings), {
      children: newChildren,
      ref: this.innerSliderRefHandler
    });
    return createVNode(InnerSlider, _objectSpread2(_objectSpread2({}, sliderProps), {}, {
      "__propsSymbol__": []
    }), this.$slots);
  }
});
var __rest$3 = globalThis && globalThis.__rest || function(s, e) {
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
var carouselProps = function carouselProps2() {
  return {
    effect: String,
    dots: {
      type: Boolean,
      default: true
    },
    vertical: {
      type: Boolean,
      default: void 0
    },
    autoplay: {
      type: Boolean,
      default: void 0
    },
    easing: String,
    beforeChange: Function,
    afterChange: Function,
    prefixCls: String,
    accessibility: {
      type: Boolean,
      default: void 0
    },
    nextArrow: PropTypes.any,
    prevArrow: PropTypes.any,
    pauseOnHover: {
      type: Boolean,
      default: void 0
    },
    adaptiveHeight: {
      type: Boolean,
      default: void 0
    },
    arrows: {
      type: Boolean,
      default: false
    },
    autoplaySpeed: Number,
    centerMode: {
      type: Boolean,
      default: void 0
    },
    centerPadding: String,
    cssEase: String,
    dotsClass: String,
    draggable: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: void 0
    },
    focusOnSelect: {
      type: Boolean,
      default: void 0
    },
    infinite: {
      type: Boolean,
      default: void 0
    },
    initialSlide: Number,
    lazyLoad: String,
    rtl: {
      type: Boolean,
      default: void 0
    },
    slide: String,
    slidesToShow: Number,
    slidesToScroll: Number,
    speed: Number,
    swipe: {
      type: Boolean,
      default: void 0
    },
    swipeToSlide: {
      type: Boolean,
      default: void 0
    },
    swipeEvent: Function,
    touchMove: {
      type: Boolean,
      default: void 0
    },
    touchThreshold: Number,
    variableWidth: {
      type: Boolean,
      default: void 0
    },
    useCSS: {
      type: Boolean,
      default: void 0
    },
    slickGoTo: Number,
    responsive: Array,
    dotPosition: {
      type: String,
      default: void 0
    },
    verticalSwiping: {
      type: Boolean,
      default: false
    }
  };
};
var Carousel$1 = defineComponent({
  name: "ACarousel",
  inheritAttrs: false,
  props: carouselProps(),
  setup: function setup8(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var slickRef = ref();
    var goTo = function goTo2(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var _a;
      (_a = slickRef.value) === null || _a === void 0 ? void 0 : _a.slickGoTo(slide, dontAnimate);
    };
    expose({
      goTo,
      autoplay: function autoplay(palyType) {
        var _a, _b;
        (_b = (_a = slickRef.value) === null || _a === void 0 ? void 0 : _a.innerSlider) === null || _b === void 0 ? void 0 : _b.handleAutoPlay(palyType);
      },
      prev: function prev() {
        var _a;
        (_a = slickRef.value) === null || _a === void 0 ? void 0 : _a.slickPrev();
      },
      next: function next() {
        var _a;
        (_a = slickRef.value) === null || _a === void 0 ? void 0 : _a.slickNext();
      },
      innerSlider: computed(function() {
        var _a;
        return (_a = slickRef.value) === null || _a === void 0 ? void 0 : _a.innerSlider;
      })
    });
    watchEffect(function() {
      warning(props.vertical === void 0, "Carousel", "`vertical` is deprecated, please use `dotPosition` instead.");
    });
    var _useConfigInject = useConfigInject("carousel", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var dotPosition = computed(function() {
      if (props.dotPosition)
        return props.dotPosition;
      if (props.vertical !== void 0)
        return props.vertical ? "right" : "bottom";
      return "bottom";
    });
    var vertical = computed(function() {
      return dotPosition.value === "left" || dotPosition.value === "right";
    });
    var dsClass = computed(function() {
      var _classNames;
      var dotsClass = "slick-dots";
      return classNames((_classNames = {}, _defineProperty$4(_classNames, dotsClass, true), _defineProperty$4(_classNames, "".concat(dotsClass, "-").concat(dotPosition.value), true), _defineProperty$4(_classNames, "".concat(props.dotsClass), !!props.dotsClass), _classNames));
    });
    return function() {
      var _classNames2;
      var dots = props.dots, arrows = props.arrows, draggable = props.draggable, effect = props.effect;
      var cls = attrs.class, style = attrs.style, restAttrs = __rest$3(attrs, ["class", "style"]);
      var fade = effect === "fade" ? true : props.fade;
      var className = classNames(prefixCls.value, (_classNames2 = {}, _defineProperty$4(_classNames2, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty$4(_classNames2, "".concat(prefixCls.value, "-vertical"), vertical.value), _defineProperty$4(_classNames2, "".concat(cls), !!cls), _classNames2));
      return createVNode("div", {
        "class": className,
        "style": style
      }, [createVNode(Slider, _objectSpread2(_objectSpread2(_objectSpread2({
        "ref": slickRef
      }, props), restAttrs), {}, {
        "dots": !!dots,
        "dotsClass": dsClass.value,
        "arrows": arrows,
        "draggable": draggable,
        "fade": fade,
        "vertical": vertical.value
      }), slots)]);
    };
  }
});
var __unplugin_components_0$3 = withInstall(Carousel$1);
var PickerButton = function PickerButton2(props, _ref) {
  var attrs = _ref.attrs, slots = _ref.slots;
  return createVNode(Button, _objectSpread2(_objectSpread2({
    "size": "small",
    "type": "primary"
  }, props), attrs), slots);
};
var PickerButton$1 = PickerButton;
var checkableTagProps = function checkableTagProps2() {
  return {
    prefixCls: String,
    checked: {
      type: Boolean,
      default: void 0
    },
    onChange: {
      type: Function
    },
    onClick: {
      type: Function
    },
    "onUpdate:checked": Function
  };
};
var CheckableTag = defineComponent({
  name: "ACheckableTag",
  props: checkableTagProps(),
  setup: function setup9(props, _ref) {
    var slots = _ref.slots, emit = _ref.emit;
    var _useConfigInject = useConfigInject("tag", props), prefixCls = _useConfigInject.prefixCls;
    var handleClick = function handleClick2(e) {
      var checked = props.checked;
      emit("update:checked", !checked);
      emit("change", !checked);
      emit("click", e);
    };
    var cls = computed(function() {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls.value, "-checkable"), true), _defineProperty$4(_classNames, "".concat(prefixCls.value, "-checkable-checked"), props.checked), _classNames));
    });
    return function() {
      var _a;
      return createVNode("span", {
        "class": cls.value,
        "onClick": handleClick
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var CheckableTag$1 = CheckableTag;
var PresetColorRegex = new RegExp("^(".concat(PresetColorTypes.join("|"), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(PresetStatusColorTypes.join("|"), ")$"));
var tagProps = function tagProps2() {
  return {
    prefixCls: String,
    color: {
      type: String
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeIcon: PropTypes.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    onClose: {
      type: Function
    },
    "onUpdate:visible": Function,
    icon: PropTypes.any
  };
};
var Tag = defineComponent({
  name: "ATag",
  props: tagProps(),
  slots: ["closeIcon", "icon"],
  setup: function setup10(props, _ref) {
    var slots = _ref.slots, emit = _ref.emit, attrs = _ref.attrs;
    var _useConfigInject = useConfigInject("tag", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var visible = ref(true);
    watchEffect(function() {
      if (props.visible !== void 0) {
        visible.value = props.visible;
      }
    });
    var handleCloseClick = function handleCloseClick2(e) {
      e.stopPropagation();
      emit("update:visible", false);
      emit("close", e);
      if (e.defaultPrevented) {
        return;
      }
      if (props.visible === void 0) {
        visible.value = false;
      }
    };
    var isPresetColor2 = computed(function() {
      var color = props.color;
      if (!color) {
        return false;
      }
      return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
    });
    var tagClassName = computed(function() {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls.value, "-").concat(props.color), isPresetColor2.value), _defineProperty$4(_classNames, "".concat(prefixCls.value, "-has-color"), props.color && !isPresetColor2.value), _defineProperty$4(_classNames, "".concat(prefixCls.value, "-hidden"), !visible.value), _defineProperty$4(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _classNames));
    });
    return function() {
      var _a, _b, _c;
      var _props$icon = props.icon, icon = _props$icon === void 0 ? (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$icon, color = props.color, _props$closeIcon = props.closeIcon, closeIcon = _props$closeIcon === void 0 ? (_b = slots.closeIcon) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$closeIcon, _props$closable = props.closable, closable = _props$closable === void 0 ? false : _props$closable;
      var renderCloseIcon = function renderCloseIcon2() {
        if (closable) {
          return closeIcon ? createVNode("div", {
            "class": "".concat(prefixCls.value, "-close-icon"),
            "onClick": handleCloseClick
          }, [closeIcon]) : createVNode(CloseOutlined, {
            "class": "".concat(prefixCls.value, "-close-icon"),
            "onClick": handleCloseClick
          }, null);
        }
        return null;
      };
      var tagStyle = {
        backgroundColor: color && !isPresetColor2.value ? color : void 0
      };
      var iconNode = icon || null;
      var children = (_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots);
      var kids = iconNode ? createVNode(Fragment, null, [iconNode, createVNode("span", null, [children])]) : children;
      var isNeedWave = "onClick" in attrs;
      var tagNode = createVNode("span", {
        "class": tagClassName.value,
        "style": tagStyle
      }, [kids, renderCloseIcon()]);
      return isNeedWave ? createVNode(Wave, null, {
        default: function _default2() {
          return [tagNode];
        }
      }) : tagNode;
    };
  }
});
Tag.CheckableTag = CheckableTag$1;
Tag.install = function(app) {
  app.component(Tag.name, Tag);
  app.component(CheckableTag$1.name, CheckableTag$1);
  return app;
};
var __unplugin_components_0$2 = Tag;
function PickerTag(props, _ref) {
  var slots = _ref.slots, attrs = _ref.attrs;
  return createVNode(__unplugin_components_0$2, _objectSpread2(_objectSpread2({
    "color": "blue"
  }, props), attrs), slots);
}
var CalendarOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, "name": "calendar", "theme": "outlined" };
var CalendarOutlinedSvg = CalendarOutlined$2;
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CalendarOutlined = function CalendarOutlined2(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$3({}, p, {
    "icon": CalendarOutlinedSvg
  }), null);
};
CalendarOutlined.displayName = "CalendarOutlined";
CalendarOutlined.inheritAttrs = false;
var CalendarOutlined$1 = CalendarOutlined;
var ClockCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, "name": "clock-circle", "theme": "outlined" };
var ClockCircleOutlinedSvg = ClockCircleOutlined$2;
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ClockCircleOutlined = function ClockCircleOutlined2(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": ClockCircleOutlinedSvg
  }), null);
};
ClockCircleOutlined.displayName = "ClockCircleOutlined";
ClockCircleOutlined.inheritAttrs = false;
var ClockCircleOutlined$1 = ClockCircleOutlined;
function getPlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== void 0) {
    return customizePlaceholder;
  }
  if (picker === "year" && locale.lang.yearPlaceholder) {
    return locale.lang.yearPlaceholder;
  }
  if (picker === "quarter" && locale.lang.quarterPlaceholder) {
    return locale.lang.quarterPlaceholder;
  }
  if (picker === "month" && locale.lang.monthPlaceholder) {
    return locale.lang.monthPlaceholder;
  }
  if (picker === "week" && locale.lang.weekPlaceholder) {
    return locale.lang.weekPlaceholder;
  }
  if (picker === "time" && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.placeholder;
  }
  return locale.lang.placeholder;
}
function getRangePlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== void 0) {
    return customizePlaceholder;
  }
  if (picker === "year" && locale.lang.yearPlaceholder) {
    return locale.lang.rangeYearPlaceholder;
  }
  if (picker === "month" && locale.lang.monthPlaceholder) {
    return locale.lang.rangeMonthPlaceholder;
  }
  if (picker === "week" && locale.lang.weekPlaceholder) {
    return locale.lang.rangeWeekPlaceholder;
  }
  if (picker === "time" && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.rangePlaceholder;
  }
  return locale.lang.rangePlaceholder;
}
function commonProps() {
  return {
    id: String,
    dropdownClassName: String,
    dropdownAlign: {
      type: Object
    },
    popupStyle: {
      type: Object
    },
    transitionName: String,
    placeholder: String,
    allowClear: {
      type: Boolean,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    tabindex: Number,
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    inputReadOnly: {
      type: Boolean,
      default: void 0
    },
    getPopupContainer: {
      type: Function
    },
    panelRender: {
      type: Function
    },
    onChange: {
      type: Function
    },
    "onUpdate:value": {
      type: Function
    },
    onOk: {
      type: Function
    },
    onOpenChange: {
      type: Function
    },
    "onUpdate:open": {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onMousedown: {
      type: Function
    },
    onMouseup: {
      type: Function
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onContextmenu: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    role: String,
    name: String,
    autocomplete: String,
    direction: {
      type: String
    },
    showToday: {
      type: Boolean,
      default: void 0
    },
    showTime: {
      type: [Boolean, Object],
      default: void 0
    },
    locale: {
      type: Object
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: void 0
    },
    dateRender: {
      type: Function
    },
    disabledDate: {
      type: Function
    },
    mode: {
      type: String
    },
    picker: {
      type: String
    },
    valueFormat: String,
    disabledHours: Function,
    disabledMinutes: Function,
    disabledSeconds: Function
  };
}
function datePickerProps() {
  return {
    defaultPickerValue: {
      type: [String, Object]
    },
    defaultValue: {
      type: [String, Object]
    },
    value: {
      type: [String, Object]
    },
    disabledTime: {
      type: Function
    },
    format: {
      type: [String, Function, Array]
    },
    renderExtraFooter: {
      type: Function
    },
    showNow: {
      type: Boolean,
      default: void 0
    },
    monthCellRender: {
      type: Function
    },
    monthCellContentRender: {
      type: Function
    }
  };
}
function rangePickerProps() {
  return {
    allowEmpty: {
      type: Array
    },
    dateRender: {
      type: Function
    },
    defaultPickerValue: {
      type: Array
    },
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    disabledTime: {
      type: Function
    },
    disabled: {
      type: [Boolean, Array]
    },
    format: String,
    renderExtraFooter: {
      type: Function
    },
    separator: {
      type: String
    },
    ranges: {
      type: Object
    },
    placeholder: Array,
    mode: {
      type: Array
    },
    onChange: {
      type: Function
    },
    "onUpdate:value": {
      type: Function
    },
    onCalendarChange: {
      type: Function
    },
    onPanelChange: {
      type: Function
    },
    onOk: {
      type: Function
    }
  };
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
function generateSinglePicker(generateConfig2, extraProps) {
  function getPicker(picker, displayName) {
    var comProps = _extends(_extends(_extends({}, commonProps()), datePickerProps()), extraProps);
    return defineComponent({
      name: displayName,
      inheritAttrs: false,
      props: comProps,
      slots: [
        "suffixIcon",
        "prevIcon",
        "nextIcon",
        "superPrevIcon",
        "superNextIcon",
        "dateRender",
        "renderExtraFooter",
        "monthCellRender"
      ],
      setup: function setup13(_props, _ref) {
        var slots = _ref.slots, expose = _ref.expose, attrs = _ref.attrs, emit = _ref.emit;
        var props = _props;
        var formItemContext = useInjectFormItemContext();
        devWarning(!(props.monthCellContentRender || slots.monthCellContentRender), "DatePicker", '`monthCellContentRender` is deprecated. Please use `monthCellRender"` instead.');
        devWarning(!attrs.getCalendarContainer, "DatePicker", '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.');
        var _useConfigInject = useConfigInject("picker", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, getPopupContainer = _useConfigInject.getPopupContainer, size = _useConfigInject.size, rootPrefixCls = _useConfigInject.rootPrefixCls;
        var pickerRef = ref();
        expose({
          focus: function focus() {
            var _a;
            (_a = pickerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
          },
          blur: function blur() {
            var _a;
            (_a = pickerRef.value) === null || _a === void 0 ? void 0 : _a.blur();
          }
        });
        var maybeToString = function maybeToString2(date) {
          return props.valueFormat ? generateConfig2.toString(date, props.valueFormat) : date;
        };
        var onChange = function onChange2(date, dateString) {
          var value2 = maybeToString(date);
          emit("update:value", value2);
          emit("change", value2, dateString);
          formItemContext.onFieldChange();
        };
        var onOpenChange = function onOpenChange2(open) {
          emit("update:open", open);
          emit("openChange", open);
        };
        var onFocus = function onFocus2(e) {
          emit("focus", e);
        };
        var onBlur = function onBlur2(e) {
          emit("blur", e);
          formItemContext.onFieldBlur();
        };
        var onPanelChange = function onPanelChange2(date, mode) {
          var value2 = maybeToString(date);
          emit("panelChange", value2, mode);
        };
        var onOk = function onOk2(date) {
          var value2 = maybeToString(date);
          emit("ok", value2);
        };
        var _useLocaleReceiver = useLocaleReceiver("DatePicker", enUS), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), contextLocale = _useLocaleReceiver2[0];
        var value = computed(function() {
          if (props.value) {
            return props.valueFormat ? generateConfig2.toDate(props.value, props.valueFormat) : props.value;
          }
          return props.value === "" ? void 0 : props.value;
        });
        var defaultValue = computed(function() {
          if (props.defaultValue) {
            return props.valueFormat ? generateConfig2.toDate(props.defaultValue, props.valueFormat) : props.defaultValue;
          }
          return props.defaultValue === "" ? void 0 : props.defaultValue;
        });
        var defaultPickerValue = computed(function() {
          if (props.defaultPickerValue) {
            return props.valueFormat ? generateConfig2.toDate(props.defaultPickerValue, props.valueFormat) : props.defaultPickerValue;
          }
          return props.defaultPickerValue === "" ? void 0 : props.defaultPickerValue;
        });
        return function() {
          var _classNames;
          var _a, _b, _c, _d, _e, _f;
          var locale = _extends(_extends({}, contextLocale.value), props.locale);
          var p = _extends(_extends({}, props), attrs);
          var _p$bordered = p.bordered, bordered = _p$bordered === void 0 ? true : _p$bordered, placeholder = p.placeholder, _p$suffixIcon = p.suffixIcon, suffixIcon = _p$suffixIcon === void 0 ? (_a = slots.suffixIcon) === null || _a === void 0 ? void 0 : _a.call(slots) : _p$suffixIcon, _p$showToday = p.showToday, showToday = _p$showToday === void 0 ? true : _p$showToday, transitionName = p.transitionName, _p$allowClear = p.allowClear, allowClear = _p$allowClear === void 0 ? true : _p$allowClear, _p$dateRender = p.dateRender, dateRender = _p$dateRender === void 0 ? slots.dateRender : _p$dateRender, _p$renderExtraFooter = p.renderExtraFooter, renderExtraFooter = _p$renderExtraFooter === void 0 ? slots.renderExtraFooter : _p$renderExtraFooter, _p$monthCellRender = p.monthCellRender, monthCellRender = _p$monthCellRender === void 0 ? slots.monthCellRender || props.monthCellContentRender || slots.monthCellContentRender : _p$monthCellRender, _p$clearIcon = p.clearIcon, clearIcon = _p$clearIcon === void 0 ? (_b = slots.clearIcon) === null || _b === void 0 ? void 0 : _b.call(slots) : _p$clearIcon, _p$id = p.id, id = _p$id === void 0 ? formItemContext.id.value : _p$id, restProps = __rest$2(p, ["bordered", "placeholder", "suffixIcon", "showToday", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "monthCellRender", "clearIcon", "id"]);
          var showTime = p.showTime === "" ? true : p.showTime;
          var format2 = p.format;
          var additionalOverrideProps = {};
          if (picker) {
            additionalOverrideProps.picker = picker;
          }
          var mergedPicker = picker || p.picker || "date";
          additionalOverrideProps = _extends(_extends(_extends({}, additionalOverrideProps), showTime ? getTimeProps(_extends({
            format: format2,
            picker: mergedPicker
          }, _typeof(showTime) === "object" ? showTime : {})) : {}), mergedPicker === "time" ? getTimeProps(_extends(_extends({
            format: format2
          }, restProps), {
            picker: mergedPicker
          })) : {});
          var pre = prefixCls.value;
          return createVNode(Picker$1, _objectSpread2(_objectSpread2(_objectSpread2({
            "monthCellRender": monthCellRender,
            "dateRender": dateRender,
            "renderExtraFooter": renderExtraFooter,
            "ref": pickerRef,
            "placeholder": getPlaceholder(mergedPicker, locale, placeholder),
            "suffixIcon": suffixIcon || (mergedPicker === "time" ? createVNode(ClockCircleOutlined$1, null, null) : createVNode(CalendarOutlined$1, null, null)),
            "clearIcon": clearIcon || createVNode(CloseCircleFilled, null, null),
            "allowClear": allowClear,
            "transitionName": transitionName || "".concat(rootPrefixCls.value, "-slide-up")
          }, restProps), additionalOverrideProps), {}, {
            "id": id,
            "picker": mergedPicker,
            "value": value.value,
            "defaultValue": defaultValue.value,
            "defaultPickerValue": defaultPickerValue.value,
            "showToday": showToday,
            "locale": locale.lang,
            "class": classNames((_classNames = {}, _defineProperty$4(_classNames, "".concat(pre, "-").concat(size.value), size.value), _defineProperty$4(_classNames, "".concat(pre, "-borderless"), !bordered), _classNames), attrs.class),
            "prefixCls": pre,
            "getPopupContainer": attrs.getCalendarContainer || getPopupContainer.value,
            "generateConfig": generateConfig2,
            "prevIcon": ((_c = slots.prevIcon) === null || _c === void 0 ? void 0 : _c.call(slots)) || createVNode("span", {
              "class": "".concat(pre, "-prev-icon")
            }, null),
            "nextIcon": ((_d = slots.nextIcon) === null || _d === void 0 ? void 0 : _d.call(slots)) || createVNode("span", {
              "class": "".concat(pre, "-next-icon")
            }, null),
            "superPrevIcon": ((_e = slots.superPrevIcon) === null || _e === void 0 ? void 0 : _e.call(slots)) || createVNode("span", {
              "class": "".concat(pre, "-super-prev-icon")
            }, null),
            "superNextIcon": ((_f = slots.superNextIcon) === null || _f === void 0 ? void 0 : _f.call(slots)) || createVNode("span", {
              "class": "".concat(pre, "-super-next-icon")
            }, null),
            "components": Components,
            "direction": direction.value,
            "onChange": onChange,
            "onOpenChange": onOpenChange,
            "onFocus": onFocus,
            "onBlur": onBlur,
            "onPanelChange": onPanelChange,
            "onOk": onOk
          }), null);
        };
      }
    });
  }
  var DatePicker2 = getPicker(void 0, "ADatePicker");
  var WeekPicker2 = getPicker("week", "AWeekPicker");
  var MonthPicker2 = getPicker("month", "AMonthPicker");
  var YearPicker2 = getPicker("year", "AYearPicker");
  var TimePicker2 = getPicker("time", "TimePicker");
  var QuarterPicker2 = getPicker("quarter", "AQuarterPicker");
  return {
    DatePicker: DatePicker2,
    WeekPicker: WeekPicker2,
    MonthPicker: MonthPicker2,
    YearPicker: YearPicker2,
    TimePicker: TimePicker2,
    QuarterPicker: QuarterPicker2
  };
}
var SwapRightOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" } }] }, "name": "swap-right", "theme": "outlined" };
var SwapRightOutlinedSvg = SwapRightOutlined$2;
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
var SwapRightOutlined = function SwapRightOutlined2(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": SwapRightOutlinedSvg
  }), null);
};
SwapRightOutlined.displayName = "SwapRightOutlined";
SwapRightOutlined.inheritAttrs = false;
var SwapRightOutlined$1 = SwapRightOutlined;
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
function generateRangePicker(generateConfig2, extraProps) {
  var RangePicker2 = defineComponent({
    name: "ARangePicker",
    inheritAttrs: false,
    props: _extends(_extends(_extends({}, commonProps()), rangePickerProps()), extraProps),
    slots: [
      "suffixIcon",
      "prevIcon",
      "nextIcon",
      "superPrevIcon",
      "superNextIcon",
      "dateRender",
      "renderExtraFooter"
    ],
    setup: function setup13(_props, _ref) {
      var expose = _ref.expose, slots = _ref.slots, attrs = _ref.attrs, emit = _ref.emit;
      var props = _props;
      var formItemContext = useInjectFormItemContext();
      devWarning(!attrs.getCalendarContainer, "DatePicker", '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.');
      var _useConfigInject = useConfigInject("picker", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, getPopupContainer = _useConfigInject.getPopupContainer, size = _useConfigInject.size, rootPrefixCls = _useConfigInject.rootPrefixCls;
      var pickerRef = ref();
      expose({
        focus: function focus() {
          var _a;
          (_a = pickerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        },
        blur: function blur() {
          var _a;
          (_a = pickerRef.value) === null || _a === void 0 ? void 0 : _a.blur();
        }
      });
      var maybeToStrings = function maybeToStrings2(dates) {
        return props.valueFormat ? generateConfig2.toString(dates, props.valueFormat) : dates;
      };
      var onChange = function onChange2(dates, dateStrings) {
        var values = maybeToStrings(dates);
        emit("update:value", values);
        emit("change", values, dateStrings);
        formItemContext.onFieldChange();
      };
      var onOpenChange = function onOpenChange2(open) {
        emit("update:open", open);
        emit("openChange", open);
      };
      var onFocus = function onFocus2(e) {
        emit("focus", e);
      };
      var onBlur = function onBlur2(e) {
        emit("blur", e);
        formItemContext.onFieldBlur();
      };
      var onPanelChange = function onPanelChange2(dates, modes) {
        var values = maybeToStrings(dates);
        emit("panelChange", values, modes);
      };
      var onOk = function onOk2(dates) {
        var value2 = maybeToStrings(dates);
        emit("ok", value2);
      };
      var onCalendarChange = function onCalendarChange2(dates, dateStrings, info) {
        var values = maybeToStrings(dates);
        emit("calendarChange", values, dateStrings, info);
      };
      var _useLocaleReceiver = useLocaleReceiver("DatePicker", enUS), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), contextLocale = _useLocaleReceiver2[0];
      var value = computed(function() {
        if (props.value) {
          return props.valueFormat ? generateConfig2.toDate(props.value, props.valueFormat) : props.value;
        }
        return props.value;
      });
      var defaultValue = computed(function() {
        if (props.defaultValue) {
          return props.valueFormat ? generateConfig2.toDate(props.defaultValue, props.valueFormat) : props.defaultValue;
        }
        return props.defaultValue;
      });
      var defaultPickerValue = computed(function() {
        if (props.defaultPickerValue) {
          return props.valueFormat ? generateConfig2.toDate(props.defaultPickerValue, props.valueFormat) : props.defaultPickerValue;
        }
        return props.defaultPickerValue;
      });
      return function() {
        var _classNames;
        var _a, _b, _c, _d, _e, _f, _g;
        var locale = _extends(_extends({}, contextLocale.value), props.locale);
        var p = _extends(_extends({}, props), attrs);
        p.prefixCls;
        var _p$bordered = p.bordered, bordered = _p$bordered === void 0 ? true : _p$bordered, placeholder = p.placeholder, _p$suffixIcon = p.suffixIcon, suffixIcon = _p$suffixIcon === void 0 ? (_a = slots.suffixIcon) === null || _a === void 0 ? void 0 : _a.call(slots) : _p$suffixIcon, _p$picker = p.picker, picker = _p$picker === void 0 ? "date" : _p$picker, transitionName = p.transitionName, _p$allowClear = p.allowClear, allowClear = _p$allowClear === void 0 ? true : _p$allowClear, _p$dateRender = p.dateRender, dateRender = _p$dateRender === void 0 ? slots.dateRender : _p$dateRender, _p$renderExtraFooter = p.renderExtraFooter, renderExtraFooter = _p$renderExtraFooter === void 0 ? slots.renderExtraFooter : _p$renderExtraFooter, _p$separator = p.separator, separator = _p$separator === void 0 ? (_b = slots.separator) === null || _b === void 0 ? void 0 : _b.call(slots) : _p$separator, _p$clearIcon = p.clearIcon, clearIcon = _p$clearIcon === void 0 ? (_c = slots.clearIcon) === null || _c === void 0 ? void 0 : _c.call(slots) : _p$clearIcon, _p$id = p.id, id = _p$id === void 0 ? formItemContext.id.value : _p$id, restProps = __rest$1(p, ["prefixCls", "bordered", "placeholder", "suffixIcon", "picker", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "separator", "clearIcon", "id"]);
        delete restProps["onUpdate:value"];
        delete restProps["onUpdate:open"];
        var format2 = p.format, showTime = p.showTime;
        var additionalOverrideProps = {};
        additionalOverrideProps = _extends(_extends(_extends({}, additionalOverrideProps), showTime ? getTimeProps(_extends({
          format: format2,
          picker
        }, showTime)) : {}), picker === "time" ? getTimeProps(_extends(_extends({
          format: format2
        }, omit(restProps, ["disabledTime"])), {
          picker
        })) : {});
        var pre = prefixCls.value;
        return createVNode(VCRangePicker, _objectSpread2(_objectSpread2(_objectSpread2({
          "dateRender": dateRender,
          "renderExtraFooter": renderExtraFooter,
          "separator": separator || createVNode("span", {
            "aria-label": "to",
            "class": "".concat(pre, "-separator")
          }, [createVNode(SwapRightOutlined$1, null, null)]),
          "ref": pickerRef,
          "placeholder": getRangePlaceholder(picker, locale, placeholder),
          "suffixIcon": suffixIcon || (picker === "time" ? createVNode(ClockCircleOutlined$1, null, null) : createVNode(CalendarOutlined$1, null, null)),
          "clearIcon": clearIcon || createVNode(CloseCircleFilled, null, null),
          "allowClear": allowClear,
          "transitionName": transitionName || "".concat(rootPrefixCls.value, "-slide-up")
        }, restProps), additionalOverrideProps), {}, {
          "id": id,
          "value": value.value,
          "defaultValue": defaultValue.value,
          "defaultPickerValue": defaultPickerValue.value,
          "picker": picker,
          "class": classNames((_classNames = {}, _defineProperty$4(_classNames, "".concat(pre, "-").concat(size.value), size.value), _defineProperty$4(_classNames, "".concat(pre, "-borderless"), !bordered), _classNames), attrs.class),
          "locale": locale.lang,
          "prefixCls": pre,
          "getPopupContainer": attrs.getCalendarContainer || getPopupContainer.value,
          "generateConfig": generateConfig2,
          "prevIcon": ((_d = slots.prevIcon) === null || _d === void 0 ? void 0 : _d.call(slots)) || createVNode("span", {
            "class": "".concat(pre, "-prev-icon")
          }, null),
          "nextIcon": ((_e = slots.nextIcon) === null || _e === void 0 ? void 0 : _e.call(slots)) || createVNode("span", {
            "class": "".concat(pre, "-next-icon")
          }, null),
          "superPrevIcon": ((_f = slots.superPrevIcon) === null || _f === void 0 ? void 0 : _f.call(slots)) || createVNode("span", {
            "class": "".concat(pre, "-super-prev-icon")
          }, null),
          "superNextIcon": ((_g = slots.superNextIcon) === null || _g === void 0 ? void 0 : _g.call(slots)) || createVNode("span", {
            "class": "".concat(pre, "-super-next-icon")
          }, null),
          "components": Components,
          "direction": direction.value,
          "onChange": onChange,
          "onOpenChange": onOpenChange,
          "onFocus": onFocus,
          "onBlur": onBlur,
          "onPanelChange": onPanelChange,
          "onOk": onOk,
          "onCalendarChange": onCalendarChange
        }), null);
      };
    }
  });
  return RangePicker2;
}
var Components = {
  button: PickerButton$1,
  rangeItem: PickerTag
};
function toArray(list) {
  if (!list) {
    return [];
  }
  return Array.isArray(list) ? list : [list];
}
function getTimeProps(props) {
  var format2 = props.format, picker = props.picker, showHour = props.showHour, showMinute = props.showMinute, showSecond = props.showSecond, use12Hours = props.use12Hours;
  var firstFormat = toArray(format2)[0];
  var showTimeObj = _extends({}, props);
  if (firstFormat && typeof firstFormat === "string") {
    if (!firstFormat.includes("s") && showSecond === void 0) {
      showTimeObj.showSecond = false;
    }
    if (!firstFormat.includes("m") && showMinute === void 0) {
      showTimeObj.showMinute = false;
    }
    if (!firstFormat.includes("H") && !firstFormat.includes("h") && showHour === void 0) {
      showTimeObj.showHour = false;
    }
    if ((firstFormat.includes("a") || firstFormat.includes("A")) && use12Hours === void 0) {
      showTimeObj.use12Hours = true;
    }
  }
  if (picker === "time") {
    return showTimeObj;
  }
  if (typeof firstFormat === "function") {
    delete showTimeObj.format;
  }
  return {
    showTime: showTimeObj
  };
}
function generatePicker(generateConfig2, extraProps) {
  var _generateSinglePicker = generateSinglePicker(generateConfig2, extraProps), DatePicker2 = _generateSinglePicker.DatePicker, WeekPicker2 = _generateSinglePicker.WeekPicker, MonthPicker2 = _generateSinglePicker.MonthPicker, YearPicker2 = _generateSinglePicker.YearPicker, TimePicker2 = _generateSinglePicker.TimePicker, QuarterPicker2 = _generateSinglePicker.QuarterPicker;
  var RangePicker2 = generateRangePicker(generateConfig2, extraProps);
  return {
    DatePicker: DatePicker2,
    WeekPicker: WeekPicker2,
    MonthPicker: MonthPicker2,
    YearPicker: YearPicker2,
    TimePicker: TimePicker2,
    QuarterPicker: QuarterPicker2,
    RangePicker: RangePicker2
  };
}
var _generatePicker = generatePicker(dayjsGenerateConfig), DatePicker = _generatePicker.DatePicker, WeekPicker = _generatePicker.WeekPicker, MonthPicker = _generatePicker.MonthPicker, YearPicker = _generatePicker.YearPicker, TimePicker$2 = _generatePicker.TimePicker, QuarterPicker = _generatePicker.QuarterPicker, RangePicker = _generatePicker.RangePicker;
var DatePicker$1 = _extends(DatePicker, {
  WeekPicker,
  MonthPicker,
  YearPicker,
  RangePicker,
  TimePicker: TimePicker$2,
  QuarterPicker,
  install: function install(app) {
    app.component(DatePicker.name, DatePicker);
    app.component(RangePicker.name, RangePicker);
    app.component(MonthPicker.name, MonthPicker);
    app.component(WeekPicker.name, WeekPicker);
    app.component(QuarterPicker.name, QuarterPicker);
    return app;
  }
});
function getScroll(w) {
  var ret = w.pageXOffset;
  var method = "scrollLeft";
  if (typeof ret !== "number") {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function getClientPosition(elem) {
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  var box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}
function getOffsetLeft(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  return pos.left;
}
var StarFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" } }] }, "name": "star", "theme": "filled" };
var StarFilledSvg = StarFilled$2;
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
var StarFilled = function StarFilled2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": StarFilledSvg
  }), null);
};
StarFilled.displayName = "StarFilled";
StarFilled.inheritAttrs = false;
var StarFilled$1 = StarFilled;
var starProps = {
  value: Number,
  index: Number,
  prefixCls: String,
  allowHalf: {
    type: Boolean,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  character: PropTypes.any,
  characterRender: Function,
  focused: {
    type: Boolean,
    default: void 0
  },
  count: Number,
  onClick: Function,
  onHover: Function
};
var Star = defineComponent({
  name: "Star",
  inheritAttrs: false,
  props: starProps,
  emits: ["hover", "click"],
  setup: function setup11(props, _ref) {
    var slots = _ref.slots, emit = _ref.emit;
    var onHover = function onHover2(e) {
      var index2 = props.index;
      emit("hover", e, index2);
    };
    var onClick = function onClick2(e) {
      var index2 = props.index;
      emit("click", e, index2);
    };
    var onKeyDown2 = function onKeyDown3(e) {
      var index2 = props.index;
      if (e.keyCode === 13) {
        emit("click", e, index2);
      }
    };
    var cls = computed(function() {
      var prefixCls = props.prefixCls, index2 = props.index, value = props.value, allowHalf = props.allowHalf, focused = props.focused;
      var starValue = index2 + 1;
      var className = prefixCls;
      if (value === 0 && index2 === 0 && focused) {
        className += " ".concat(prefixCls, "-focused");
      } else if (allowHalf && value + 0.5 >= starValue && value < starValue) {
        className += " ".concat(prefixCls, "-half ").concat(prefixCls, "-active");
        if (focused) {
          className += " ".concat(prefixCls, "-focused");
        }
      } else {
        className += starValue <= value ? " ".concat(prefixCls, "-full") : " ".concat(prefixCls, "-zero");
        if (starValue === value && focused) {
          className += " ".concat(prefixCls, "-focused");
        }
      }
      return className;
    });
    return function() {
      var disabled = props.disabled, prefixCls = props.prefixCls, characterRender = props.characterRender, index2 = props.index, count = props.count, value = props.value;
      var character = getPropsSlot(slots, props, "character");
      var star = createVNode("li", {
        "class": cls.value
      }, [createVNode("div", {
        "onClick": disabled ? null : onClick,
        "onKeydown": disabled ? null : onKeyDown2,
        "onMousemove": disabled ? null : onHover,
        "role": "radio",
        "aria-checked": value > index2 ? "true" : "false",
        "aria-posinset": index2 + 1,
        "aria-setsize": count,
        "tabindex": disabled ? -1 : 0
      }, [createVNode("div", {
        "class": "".concat(prefixCls, "-first")
      }, [character]), createVNode("div", {
        "class": "".concat(prefixCls, "-second")
      }, [character])])]);
      if (characterRender) {
        star = characterRender(star, props);
      }
      return star;
    };
  }
});
var rateProps = function rateProps2() {
  return {
    prefixCls: String,
    count: Number,
    value: Number,
    allowHalf: {
      type: Boolean,
      default: void 0
    },
    allowClear: {
      type: Boolean,
      default: void 0
    },
    tooltips: Array,
    disabled: {
      type: Boolean,
      default: void 0
    },
    character: PropTypes.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    direction: String,
    id: String,
    onChange: Function,
    onHoverChange: Function,
    "onUpdate:value": Function,
    onFocus: Function,
    onBlur: Function,
    onKeydown: Function
  };
};
var Rate = defineComponent({
  name: "ARate",
  inheritAttrs: false,
  props: initDefaultProps(rateProps(), {
    value: 0,
    count: 5,
    allowHalf: false,
    allowClear: true,
    tabindex: 0,
    direction: "ltr"
  }),
  setup: function setup12(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, emit = _ref.emit, expose = _ref.expose;
    var _useConfigInject = useConfigInject("rate", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var formItemContext = useInjectFormItemContext();
    var rateRef = ref();
    var _useRefs = useRefs(), _useRefs2 = _slicedToArray(_useRefs, 2), setRef = _useRefs2[0], starRefs = _useRefs2[1];
    var state = reactive({
      value: props.value,
      focused: false,
      cleanedValue: null,
      hoverValue: void 0
    });
    watch(function() {
      return props.value;
    }, function() {
      state.value = props.value;
    });
    var getStarDOM = function getStarDOM2(index2) {
      return findDOMNode(starRefs.value.get(index2));
    };
    var getStarValue = function getStarValue2(index2, x) {
      var reverse = direction.value === "rtl";
      var value = index2 + 1;
      if (props.allowHalf) {
        var starEle = getStarDOM(index2);
        var leftDis = getOffsetLeft(starEle);
        var width = starEle.clientWidth;
        if (reverse && x - leftDis > width / 2) {
          value -= 0.5;
        } else if (!reverse && x - leftDis < width / 2) {
          value -= 0.5;
        }
      }
      return value;
    };
    var changeValue = function changeValue2(value) {
      if (props.value === void 0) {
        state.value = value;
      }
      emit("update:value", value);
      emit("change", value);
      formItemContext.onFieldChange();
    };
    var onHover = function onHover2(e, index2) {
      var hoverValue = getStarValue(index2, e.pageX);
      if (hoverValue !== state.cleanedValue) {
        state.hoverValue = hoverValue;
        state.cleanedValue = null;
      }
      emit("hoverChange", hoverValue);
    };
    var onMouseLeave = function onMouseLeave2() {
      state.hoverValue = void 0;
      state.cleanedValue = null;
      emit("hoverChange", void 0);
    };
    var onClick = function onClick2(event, index2) {
      var allowClear = props.allowClear;
      var newValue = getStarValue(index2, event.pageX);
      var isReset = false;
      if (allowClear) {
        isReset = newValue === state.value;
      }
      onMouseLeave();
      changeValue(isReset ? 0 : newValue);
      state.cleanedValue = isReset ? newValue : null;
    };
    var onFocus = function onFocus2(e) {
      state.focused = true;
      emit("focus", e);
    };
    var onBlur = function onBlur2(e) {
      state.focused = false;
      emit("blur", e);
      formItemContext.onFieldBlur();
    };
    var onKeyDown2 = function onKeyDown3(event) {
      var keyCode = event.keyCode;
      var count = props.count, allowHalf = props.allowHalf;
      var reverse = direction.value === "rtl";
      if (keyCode === KeyCode.RIGHT && state.value < count && !reverse) {
        if (allowHalf) {
          state.value += 0.5;
        } else {
          state.value += 1;
        }
        changeValue(state.value);
        event.preventDefault();
      } else if (keyCode === KeyCode.LEFT && state.value > 0 && !reverse) {
        if (allowHalf) {
          state.value -= 0.5;
        } else {
          state.value -= 1;
        }
        changeValue(state.value);
        event.preventDefault();
      } else if (keyCode === KeyCode.RIGHT && state.value > 0 && reverse) {
        if (allowHalf) {
          state.value -= 0.5;
        } else {
          state.value -= 1;
        }
        changeValue(state.value);
        event.preventDefault();
      } else if (keyCode === KeyCode.LEFT && state.value < count && reverse) {
        if (allowHalf) {
          state.value += 0.5;
        } else {
          state.value += 1;
        }
        changeValue(state.value);
        event.preventDefault();
      }
      emit("keydown", event);
    };
    var focus = function focus2() {
      if (!props.disabled) {
        rateRef.value.focus();
      }
    };
    var blur = function blur2() {
      if (!props.disabled) {
        rateRef.value.blur();
      }
    };
    expose({
      focus,
      blur
    });
    onMounted(function() {
      var autofocus = props.autofocus, disabled = props.disabled;
      if (autofocus && !disabled) {
        focus();
      }
    });
    var characterRender = function characterRender2(node, _ref2) {
      var index2 = _ref2.index;
      var tooltips = props.tooltips;
      if (!tooltips)
        return node;
      return createVNode(__unplugin_components_1$4, {
        "title": tooltips[index2]
      }, {
        default: function _default2() {
          return [node];
        }
      });
    };
    var character = getPropsSlot(slots, props, "character") || createVNode(StarFilled$1, null, null);
    return function() {
      var count = props.count, allowHalf = props.allowHalf, disabled = props.disabled, tabindex = props.tabindex, _props$id = props.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      var className = attrs.class, style = attrs.style;
      var stars = [];
      var disabledClass = disabled ? "".concat(prefixCls.value, "-disabled") : "";
      for (var index2 = 0; index2 < count; index2++) {
        stars.push(createVNode(Star, {
          "ref": setRef(index2),
          "key": index2,
          "index": index2,
          "count": count,
          "disabled": disabled,
          "prefixCls": "".concat(prefixCls.value, "-star"),
          "allowHalf": allowHalf,
          "value": state.hoverValue === void 0 ? state.value : state.hoverValue,
          "onClick": onClick,
          "onHover": onHover,
          "character": character,
          "characterRender": characterRender,
          "focused": state.focused
        }, null));
      }
      var rateClassName = classNames(prefixCls.value, disabledClass, className, _defineProperty$4({}, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"));
      return createVNode("ul", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "id": id,
        "class": rateClassName,
        "style": style,
        "onMouseleave": disabled ? null : onMouseLeave,
        "tabindex": disabled ? -1 : tabindex,
        "onFocus": disabled ? null : onFocus,
        "onBlur": disabled ? null : onBlur,
        "onKeydown": disabled ? null : onKeyDown2,
        "ref": rateRef,
        "role": "radiogroup"
      }), [stars]);
    };
  }
});
var __unplugin_components_5$1 = withInstall(Rate);
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
var timePickerProps = function timePickerProps2() {
  return {
    format: String,
    showNow: {
      type: Boolean,
      default: void 0
    },
    showHour: {
      type: Boolean,
      default: void 0
    },
    showMinute: {
      type: Boolean,
      default: void 0
    },
    showSecond: {
      type: Boolean,
      default: void 0
    },
    use12Hours: {
      type: Boolean,
      default: void 0
    },
    hourStep: Number,
    minuteStep: Number,
    secondStep: Number,
    hideDisabledOptions: {
      type: Boolean,
      default: void 0
    },
    popupClassName: String
  };
};
function createTimePicker(generateConfig2) {
  var DatePicker2 = generatePicker(generateConfig2, _extends(_extends({}, timePickerProps()), {
    order: {
      type: Boolean,
      default: true
    }
  }));
  var InternalTimePicker = DatePicker2.TimePicker, InternalRangePicker = DatePicker2.RangePicker;
  var TimePicker2 = defineComponent({
    name: "ATimePicker",
    inheritAttrs: false,
    props: _extends(_extends(_extends(_extends({}, commonProps()), datePickerProps()), timePickerProps()), {
      addon: {
        type: Function
      }
    }),
    slot: ["addon", "renderExtraFooter", "suffixIcon", "clearIcon"],
    setup: function setup13(props, _ref) {
      var slots = _ref.slots, expose = _ref.expose, emit = _ref.emit, attrs = _ref.attrs;
      var formItemContext = useInjectFormItemContext();
      devWarning(!(slots.addon || props.addon), "TimePicker", "`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.");
      var pickerRef = ref();
      expose({
        focus: function focus() {
          var _a;
          (_a = pickerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        },
        blur: function blur() {
          var _a;
          (_a = pickerRef.value) === null || _a === void 0 ? void 0 : _a.blur();
        }
      });
      var onChange = function onChange2(value, dateString) {
        emit("update:value", value);
        emit("change", value, dateString);
        formItemContext.onFieldChange();
      };
      var onOpenChange = function onOpenChange2(open) {
        emit("update:open", open);
        emit("openChange", open);
      };
      var onFocus = function onFocus2(e) {
        emit("focus", e);
      };
      var onBlur = function onBlur2(e) {
        emit("blur", e);
        formItemContext.onFieldBlur();
      };
      var onOk = function onOk2(value) {
        emit("ok", value);
      };
      return function() {
        var _props$id = props.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id, restProps = __rest(props, ["id"]);
        return createVNode(InternalTimePicker, _objectSpread2(_objectSpread2(_objectSpread2({}, attrs), omit(restProps, ["onUpdate:value", "onUpdate:open"])), {}, {
          "id": id,
          "dropdownClassName": props.popupClassName,
          "mode": void 0,
          "ref": pickerRef,
          "renderExtraFooter": props.addon || slots.addon || props.renderExtraFooter || slots.renderExtraFooter,
          "onChange": onChange,
          "onOpenChange": onOpenChange,
          "onFocus": onFocus,
          "onBlur": onBlur,
          "onOk": onOk
        }), slots);
      };
    }
  });
  var TimeRangePicker2 = defineComponent({
    name: "ATimeRangePicker",
    inheritAttrs: false,
    props: _extends(_extends(_extends(_extends({}, commonProps()), rangePickerProps()), timePickerProps()), {
      order: {
        type: Boolean,
        default: true
      }
    }),
    slot: ["renderExtraFooter", "suffixIcon", "clearIcon"],
    setup: function setup13(props, _ref2) {
      var slots = _ref2.slots, expose = _ref2.expose, emit = _ref2.emit, attrs = _ref2.attrs;
      var pickerRef = ref();
      var formItemContext = useInjectFormItemContext();
      expose({
        focus: function focus() {
          var _a;
          (_a = pickerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        },
        blur: function blur() {
          var _a;
          (_a = pickerRef.value) === null || _a === void 0 ? void 0 : _a.blur();
        }
      });
      var onChange = function onChange2(values, dateStrings) {
        emit("update:value", values);
        emit("change", values, dateStrings);
        formItemContext.onFieldChange();
      };
      var onOpenChange = function onOpenChange2(open) {
        emit("update:open", open);
        emit("openChange", open);
      };
      var onFocus = function onFocus2(e) {
        emit("focus", e);
      };
      var onBlur = function onBlur2(e) {
        emit("blur", e);
        formItemContext.onFieldBlur();
      };
      var onPanelChange = function onPanelChange2(values, modes) {
        emit("panelChange", values, modes);
      };
      var onOk = function onOk2(values) {
        emit("ok", values);
      };
      var onCalendarChange = function onCalendarChange2(values, dateStrings, info) {
        emit("calendarChange", values, dateStrings, info);
      };
      return function() {
        var _props$id2 = props.id, id = _props$id2 === void 0 ? formItemContext.id.value : _props$id2, restProps = __rest(props, ["id"]);
        return createVNode(InternalRangePicker, _objectSpread2(_objectSpread2(_objectSpread2({}, attrs), omit(restProps, ["onUpdate:open", "onUpdate:value"])), {}, {
          "id": id,
          "dropdownClassName": props.popupClassName,
          "picker": "time",
          "mode": void 0,
          "ref": pickerRef,
          "onChange": onChange,
          "onOpenChange": onOpenChange,
          "onFocus": onFocus,
          "onBlur": onBlur,
          "onPanelChange": onPanelChange,
          "onOk": onOk,
          "onCalendarChange": onCalendarChange
        }), slots);
      };
    }
  });
  return {
    TimePicker: TimePicker2,
    TimeRangePicker: TimeRangePicker2
  };
}
var _createTimePicker = createTimePicker(dayjsGenerateConfig), TimePicker = _createTimePicker.TimePicker, TimeRangePicker = _createTimePicker.TimeRangePicker;
var TimePicker$1 = _extends(TimePicker, {
  TimePicker,
  TimeRangePicker,
  install: function install2(app) {
    app.component(TimePicker.name, TimePicker);
    app.component(TimeRangePicker.name, TimeRangePicker);
    return app;
  }
});
const getSystemColumns = (columns) => columns.filter(isSystemColumn) || [];
const isSystemColumn = (col) => col && (col.uidt === UITypes.ForeignKey || col.column_name === "created_at" || col.column_name === "updated_at" || col.pk && (col.ai || col.cdf) || col.pk && col.meta && col.meta.ag || col.system);
class NcAutocompleteTree {
  constructor() {
    this.trie = {};
    this.suggestions = [];
  }
  newNode() {
    return {
      value: [],
      isLeaf: false,
      children: {}
    };
  }
  add(word) {
    if (Object.keys(this.trie).length === 0) {
      this.trie = this.newNode();
    }
    let root = this.trie;
    for (const letter of word.text.toLowerCase()) {
      if (!(letter in root.children)) {
        root.children[letter] = this.newNode();
      }
      root = root.children[letter];
    }
    root.value = root.value || [];
    root.value.push(word);
    root.isLeaf = true;
  }
  find(word) {
    let root = this.trie;
    for (const letter of word) {
      if (letter in root.children) {
        root = root.children[letter];
      } else {
        return null;
      }
    }
    return root;
  }
  traverse(root) {
    if (root.isLeaf) {
      this.suggestions.push(...root.value);
    }
    for (const letter in root.children) {
      this.traverse(root.children[letter]);
    }
  }
  complete(word, CHILDREN = null) {
    this.suggestions = [];
    const root = this.find(word.toLowerCase());
    if (!root) {
      return this.suggestions;
    }
    this.suggestions.push(...root.value);
    const children = root.children;
    let spread = 0;
    for (const letter in children) {
      this.traverse(children[letter]);
      spread++;
      if (CHILDREN && spread === CHILDREN) {
        break;
      }
    }
    return this.suggestions;
  }
}
const formulaTypes = {
  NUMERIC: "numeric",
  STRING: "string",
  DATE: "date",
  LOGICAL: "logical",
  COND_EXP: "conditional_expression"
};
const formulas = {
  AVG: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        min: 1
      }
    },
    description: "Average of input parameters",
    syntax: "AVG(value1, [value2, ...])",
    examples: ["AVG(10, 5) => 7.5", "AVG({column1}, {column2})", "AVG({column1}, {column2}, {column3})"]
  },
  ADD: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        min: 1
      }
    },
    description: "Sum of input parameters",
    syntax: "ADD(value1, [value2, ...])",
    examples: ["ADD(5, 5) => 10", "ADD({column1}, {column2})", "ADD({column1}, {column2}, {column3})"]
  },
  DATEADD: {
    type: formulaTypes.DATE,
    validation: {
      args: {
        rqd: 3
      }
    },
    description: 'Adds a "count" units to Datetime.',
    syntax: 'DATEADD(date | datetime, value, ["day" | "week" | "month" | "year"])',
    examples: [
      'DATEADD({column1}, 2, "day")',
      'DATEADD({column1}, -2, "day")',
      'DATEADD({column1}, 2, "week")',
      'DATEADD({column1}, -2, "week")',
      'DATEADD({column1}, 2, "month")',
      'DATEADD({column1}, -2, "month")',
      'DATEADD({column1}, 2, "year")',
      'DATEADD({column1}, -2, "year")'
    ]
  },
  AND: {
    type: formulaTypes.COND_EXP,
    validation: {
      args: {
        min: 1
      }
    },
    description: "TRUE if all expr evaluate to TRUE",
    syntax: "AND(expr1, [expr2, ...])",
    examples: ["AND(5 > 2, 5 < 10) => 1", "AND({column1} > 2, {column2} < 10)"]
  },
  OR: {
    type: formulaTypes.COND_EXP,
    validation: {
      args: {
        min: 1
      }
    },
    description: "TRUE if at least one expr evaluates to TRUE",
    syntax: "OR(expr1, [expr2, ...])",
    examples: ["OR(5 > 2, 5 < 10) => 1", "OR({column1} > 2, {column2} < 10)"]
  },
  CONCAT: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        min: 1
      }
    },
    description: "Concatenated string of input parameters",
    syntax: "CONCAT(str1, [str2, ...])",
    examples: ['CONCAT("AA", "BB", "CC") => "AABBCC"', "CONCAT({column1}, {column2}, {column3})"]
  },
  TRIM: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Remove trailing and leading whitespaces from input parameter",
    syntax: "TRIM(str)",
    examples: ['TRIM("         HELLO WORLD  ") => "HELLO WORLD"', "TRIM({column1})"]
  },
  UPPER: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Upper case converted string of input parameter",
    syntax: "UPPER(str)",
    examples: ['UPPER("nocodb") => "NOCODB"', "UPPER({column1})"]
  },
  LOWER: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Lower case converted string of input parameter",
    syntax: "LOWER(str)",
    examples: ['LOWER("NOCODB") => "nocodb"', "LOWER({column1})"]
  },
  LEN: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Input parameter character length",
    syntax: "LEN(value)",
    examples: ['LEN("NocoDB") => 6', "LEN({column1})"]
  },
  MIN: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        min: 1
      }
    },
    description: "Minimum value amongst input parameters",
    syntax: "MIN(value1, [value2, ...])",
    examples: ["MIN(1000, 2000) => 1000", "MIN({column1}, {column2})"]
  },
  MAX: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        min: 1
      }
    },
    description: "Maximum value amongst input parameters",
    syntax: "MAX(value1, [value2, ...])",
    examples: ["MAX(1000, 2000) => 2000", "MAX({column1}, {column2})"]
  },
  CEILING: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Rounded next largest integer value of input parameter",
    syntax: "CEILING(value)",
    examples: ["CEILING(1.01) => 2", "CEILING({column1})"]
  },
  FLOOR: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Rounded largest integer less than or equal to input parameter",
    syntax: "FLOOR(value)",
    examples: ["FLOOR(3.1415) => 3", "FLOOR({column1})"]
  },
  ROUND: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Nearest integer to the input parameter",
    syntax: "ROUND(value)",
    examples: ["ROUND(3.1415) => 3", "ROUND({column1})"]
  },
  MOD: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        rqd: 2
      }
    },
    description: "Remainder after integer division of input parameters",
    syntax: "MOD(value1, value2)",
    examples: ["MOD(1024, 1000) => 24", "MOD({column}, 2)"]
  },
  REPEAT: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 2
      }
    },
    description: "Specified copies of the input parameter string concatenated together",
    syntax: "REPEAT(str, count)",
    examples: ['REPEAT("A", 5) => "AAAAA"', "REPEAT({column}, 5)"]
  },
  LOG: {
    type: formulaTypes.NUMERIC,
    validation: {},
    description: "Logarithm of input parameter to the base (default = e) specified",
    syntax: "LOG([base], value)",
    examples: ["LOG(2, 1024) => 10", "LOG(2, {column1})"]
  },
  EXP: {
    type: formulaTypes.NUMERIC,
    validation: {},
    description: "Exponential value of input parameter (e ^ power)",
    syntax: "EXP(power)",
    examples: ["EXP(1) => 2.718281828459045", "EXP({column1})"]
  },
  POWER: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        rqd: 2
      }
    },
    description: "base to the exponent power, as in base ^ exponent",
    syntax: "POWER(base, exponent)",
    examples: ["POWER(2, 10) => 1024", "POWER({column1}, 10)"]
  },
  SQRT: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Square root of the input parameter",
    syntax: "SQRT(value)",
    examples: ["SQRT(100) => 10", "SQRT({column1})"]
  },
  ABS: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Absolute value of the input parameter",
    syntax: "ABS(value)",
    examples: ["ABS({column1})"]
  },
  NOW: {
    type: formulaTypes.DATE,
    validation: {
      args: {
        rqd: 0
      }
    },
    description: "Returns the current time and day",
    syntax: "NOW()",
    examples: ["NOW() => 2022-05-19 17:20:43"]
  },
  REPLACE: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 3
      }
    },
    description: "String, after replacing all occurrences of srchStr with rplcStr",
    syntax: "REPLACE(str, srchStr, rplcStr)",
    examples: ['REPLACE("AABBCC", "AA", "BB") => "BBBBCC"', "REPLACE({column1}, {column2}, {column3})"]
  },
  SEARCH: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 2
      }
    },
    description: "Index of srchStr specified if found, 0 otherwise",
    syntax: "SEARCH(str, srchStr)",
    examples: ['SEARCH("HELLO WORLD", "WORLD") => 7', 'SEARCH({column1}, "abc")']
  },
  INT: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Integer value of input parameter",
    syntax: "INT(value)",
    examples: ["INT(3.1415) => 3", "INT({column1})"]
  },
  RIGHT: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 2
      }
    },
    description: "n characters from the end of input parameter",
    syntax: "RIGHT(str, n)",
    examples: ['RIGHT("HELLO WORLD", 5) => WORLD', "RIGHT({column1}, 3)"]
  },
  LEFT: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 2
      }
    },
    description: "n characters from the beginning of input parameter",
    syntax: "LEFT(str, n)",
    examples: ["LEFT({column1}, 2)", 'LEFT("ABCD", 2) => "AB"']
  },
  SUBSTR: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        min: 2,
        max: 3
      }
    },
    description: "Substring of length n of input string from the postition specified",
    syntax: "	SUBTR(str, position, [n])",
    examples: ['SUBSTR("HELLO WORLD", 7) => WORLD', 'SUBSTR("HELLO WORLD", 7, 3) => WOR', "SUBSTR({column1}, 7, 5)"]
  },
  MID: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 3
      }
    },
    description: "Alias for SUBSTR",
    syntax: "MID(str, position, [count])",
    examples: ['MID("NocoDB", 3, 2) => "co"', "MID({column1}, 3, 2)"]
  },
  IF: {
    type: formulaTypes.COND_EXP,
    validation: {
      args: {
        min: 2,
        max: 3
      }
    },
    description: "SuccessCase if expr evaluates to TRUE, elseCase otherwise",
    syntax: "IF(expr, successCase, elseCase)",
    examples: ['IF(5 > 1, "YES", "NO") => "YES"', 'IF({column} > 1, "YES", "NO")']
  },
  SWITCH: {
    type: formulaTypes.COND_EXP,
    validation: {
      args: {
        min: 3
      }
    },
    description: "Switch case value based on expr output",
    syntax: "SWITCH(expr, [pattern, value, ..., default])",
    examples: [
      'SWITCH(1, 1, "One", 2, "Two", "N/A") => "One""',
      'SWITCH(2, 1, "One", 2, "Two", "N/A") => "Two"',
      'SWITCH(3, 1, "One", 2, "Two", "N/A") => "N/A"',
      'SWITCH({column1}, 1, "One", 2, "Two", "N/A")'
    ]
  },
  URL: {
    type: formulaTypes.STRING,
    validation: {
      args: {
        rqd: 1
      }
    },
    description: "Convert to a hyperlink if it is a valid URL",
    syntax: "URL(str)",
    examples: ['URL("https://github.com/nocodb/nocodb")', "URL({column1})"]
  },
  WEEKDAY: {
    type: formulaTypes.NUMERIC,
    validation: {
      args: {
        min: 1,
        max: 2
      }
    },
    description: "Returns the day of the week as an integer between 0 and 6 inclusive starting from Monday by default",
    syntax: "WEEKDAY(date, [startDayOfWeek])",
    examples: ['WEEKDAY("2021-06-09")', 'WEEKDAY(NOW(), "sunday")']
  }
};
const formulaList = Object.keys(formulas);
function insertAtCursor(myField, myValue, len = 0, b = 0) {
  if (myField.selectionStart || myField.selectionStart === 0) {
    const startPos = myField.selectionStart;
    const endPos = myField.selectionEnd;
    myField.value = myField.value.substring(0, startPos - len) + myValue + myField.value.substring(endPos, myField.value.length);
    const pos = +startPos - len + myValue.length - b;
    if (myField.setSelectionRange) {
      myField.focus();
      myField.setSelectionRange(pos, pos);
    } else if (myField.createTextRange) {
      const range = myField.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  } else {
    myField.value += myValue;
  }
  return myField.value;
}
function ReturnWord(text, caretPos) {
  const preText = text.substring(0, caretPos);
  if (preText.indexOf(" ") > 0) {
    const words = preText.split(" ");
    return words[words.length - 1];
  } else {
    return preText;
  }
}
function getWordUntilCaret(ctrl) {
  const caretPos = GetCaretPosition(ctrl);
  const word = ReturnWord(ctrl.value, caretPos);
  return word || "";
}
function GetCaretPosition(ctrl) {
  let CaretPos = 0;
  if (ctrl.selectionStart || ctrl.selectionStart === 0) {
    CaretPos = ctrl.selectionStart;
  }
  return CaretPos;
}
const durationOptions = [
  {
    id: 0,
    title: "h:mm",
    example: "(e.g. 1:23)",
    regex: /(\d+)(?::(\d+))?/
  },
  {
    id: 1,
    title: "h:mm:ss",
    example: "(e.g. 3:45, 1:23:40)",
    regex: /(\d+)?(?::(\d+))?(?::(\d+))?/
  },
  {
    id: 2,
    title: "h:mm:ss.s",
    example: "(e.g. 3:34.6, 1:23:40.0)",
    regex: /(\d+)?(?::(\d+))?(?::(\d+))?(?:.(\d{0,4})?)?/
  },
  {
    id: 3,
    title: "h:mm:ss.ss",
    example: "(e.g. 3.45.67, 1:23:40.00)",
    regex: /(\d+)?(?::(\d+))?(?::(\d+))?(?:.(\d{0,4})?)?/
  },
  {
    id: 4,
    title: "h:mm:ss.sss",
    example: "(e.g. 3.45.678, 1:23:40.000)",
    regex: /(\d+)?(?::(\d+))?(?::(\d+))?(?:.(\d{0,4})?)?/
  }
];
const padZero = (val, isSSS = false) => {
  return `${val}`.padStart(isSSS ? 3 : 2, "0");
};
const convertMS2Duration = (val, durationType) => {
  if (val === "" || val === null || val === void 0) {
    return val;
  }
  const milliseconds = Math.round(val % 1 * 1e3);
  const centiseconds = Math.round(milliseconds / 10);
  const deciseconds = Math.round(centiseconds / 10);
  const hours = Math.floor(parseInt(val, 10) / (60 * 60));
  const minutes = Math.floor((parseInt(val, 10) - hours * 60 * 60) / 60);
  const seconds = parseInt(val, 10) - hours * 60 * 60 - minutes * 60;
  if (durationType === 0) {
    return `${padZero(hours)}:${padZero(minutes + (seconds >= 30 ? 1 : 0))}`;
  } else if (durationType === 1) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  } else if (durationType === 2) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${deciseconds}`;
  } else if (durationType === 3) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(centiseconds)}`;
  } else if (durationType === 4) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds, true)}`;
  }
  return val;
};
const convertDurationToSeconds = (val, durationType) => {
  const res = {
    _sec: 0,
    _isValid: true
  };
  const durationRegex = durationOptions[durationType].regex;
  if (durationRegex.test(val)) {
    let h2, mm, ss;
    const groups = val.match(durationRegex);
    if (groups[0] && groups[1] && !groups[2] && !groups[3] && !groups[4]) {
      const val2 = parseInt(groups[1], 10);
      if (groups.input.slice(-1) === ":") {
        h2 = groups[1];
        mm = 0;
        ss = 0;
      } else if (durationType === 0) {
        h2 = Math.floor(val2 / 60);
        mm = Math.floor(val2 - h2 * 3600 / 60);
        ss = 0;
      } else {
        h2 = Math.floor(groups[1] / 3600);
        mm = Math.floor(groups[1] / 60) % 60;
        ss = val2 % 60;
      }
    } else if (durationType !== 0 && groups[1] && groups[2] && !groups[3]) {
      h2 = 0;
      mm = groups[1];
      ss = groups[2];
    } else {
      h2 = groups[1] || 0;
      mm = groups[2] || 0;
      ss = groups[3] || 0;
    }
    if (durationType === 0) {
      res._sec = h2 * 3600 + mm * 60;
    } else if (durationType === 1) {
      res._sec = h2 * 3600 + mm * 60 + ss * 1;
    } else if (durationType === 2) {
      const ds = groups[4] || 0;
      const len = Math.log(ds) * Math.LOG10E + 1 | 0;
      const ms = (len === 4 ? Math.round(ds / 1e3) : len === 3 ? Math.round(ds / 100) : len === 2 ? Math.round(ds / 10) : ds) * 100;
      res._sec = h2 * 3600 + mm * 60 + ss * 1 + ms / 1e3;
    } else if (durationType === 3) {
      const cs = groups[4] || 0;
      const len = Math.log(cs) * Math.LOG10E + 1 | 0;
      const ms = (len === 4 ? Math.round(cs / 100) : len === 3 ? Math.round(cs / 10) : cs) * 10;
      res._sec = h2 * 3600 + mm * 60 + ss * 1 + ms / 1e3;
    } else if (durationType === 4) {
      let ms = groups[4] || 0;
      const len = Math.log(ms) * Math.LOG10E + 1 | 0;
      ms = (len === 4 ? Math.round(ms / 10) : ms) * 1;
      res._sec = h2 * 3600 + mm * 60 + ss * 1 + ms / 1e3;
    }
  } else {
    res._isValid = false;
  }
  return res;
};
/**
 * @copyright Copyright (c) 2021, Xgene Cloud Ltd
 *
 * @author Wing-Kam Wong <wingkwong.code@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
const _hoisted_1$19 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$Z = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"
}, null, -1);
const _hoisted_3$V = [
  _hoisted_2$Z
];
function render$E(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$19, _hoisted_3$V);
}
var MdiCheckBold = { name: "mdi-check-bold", render: render$E };
const _hoisted_1$18 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$Y = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
}, null, -1);
const _hoisted_3$U = [
  _hoisted_2$Y
];
function render$D(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$18, _hoisted_3$U);
}
var MdiCropSquare = { name: "mdi-crop-square", render: render$D };
const _hoisted_1$17 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$X = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"
}, null, -1);
const _hoisted_3$T = [
  _hoisted_2$X
];
function render$C(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$17, _hoisted_3$T);
}
var MdiCheckCircleOutline = { name: "mdi-check-circle-outline", render: render$C };
const _hoisted_1$16 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$W = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
}, null, -1);
const _hoisted_3$S = [
  _hoisted_2$W
];
function render$B(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$16, _hoisted_3$S);
}
var MdiCheckboxBlankCircleOutline = { name: "mdi-checkbox-blank-circle-outline", render: render$B };
const _hoisted_1$15 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$V = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
}, null, -1);
const _hoisted_3$R = [
  _hoisted_2$V
];
function render$A(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$15, _hoisted_3$R);
}
var __unplugin_components_1$3 = { name: "mdi-heart", render: render$A };
const _hoisted_1$14 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$U = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
}, null, -1);
const _hoisted_3$Q = [
  _hoisted_2$U
];
function render$z(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$14, _hoisted_3$Q);
}
var MdiHeartOutline = { name: "mdi-heart-outline", render: render$z };
const _hoisted_1$13 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$T = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z"
}, null, -1);
const _hoisted_3$P = [
  _hoisted_2$T
];
function render$y(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$13, _hoisted_3$P);
}
var __unplugin_components_2$2 = { name: "mdi-moon-full", render: render$y };
const _hoisted_1$12 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$S = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 20a8 8 0 1 1 8-8a8 8 0 0 1-8 8m0-18a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"
}, null, -1);
const _hoisted_3$O = [
  _hoisted_2$S
];
function render$x(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$12, _hoisted_3$O);
}
var MdiMoonNew = { name: "mdi-moon-new", render: render$x };
const _hoisted_1$11 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$R = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12Z"
}, null, -1);
const _hoisted_3$N = [
  _hoisted_2$R
];
function render$w(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$11, _hoisted_3$N);
}
var __unplugin_components_3 = { name: "mdi-thumb-up", render: render$w };
const _hoisted_1$10 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$Q = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M5 9v12H1V9h4m4 12a2 2 0 0 1-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.06c.27.27.44.64.44 1.05l-.03.32L14.69 8H21a2 2 0 0 1 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H9m0-2h9.03L21 12v-2h-8.79l1.13-5.32L9 9.03V19Z"
}, null, -1);
const _hoisted_3$M = [
  _hoisted_2$Q
];
function render$v(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$10, _hoisted_3$M);
}
var MdiThumbUpOutline = { name: "mdi-thumb-up-outline", render: render$v };
const _hoisted_1$$ = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$P = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6Z"
}, null, -1);
const _hoisted_3$L = [
  _hoisted_2$P
];
function render$u(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$$, _hoisted_3$L);
}
var __unplugin_components_4$3 = { name: "mdi-flag", render: render$u };
const _hoisted_1$_ = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$O = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m12.36 6l.4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6"
}, null, -1);
const _hoisted_3$K = [
  _hoisted_2$O
];
function render$t(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$_, _hoisted_3$K);
}
var MdiFlagOutline = { name: "mdi-flag-outline", render: render$t };
const getMdiIcon = (type) => {
  switch (type) {
    case "mdi-check-bold":
      return MdiCheckBold;
    case "mdi-crop-square":
      return MdiCropSquare;
    case "mdi-check-circle-outline":
      return MdiCheckCircleOutline;
    case "mdi-checkbox-blank-circle-outline":
      return MdiCheckboxBlankCircleOutline;
    case "mdi-star":
      return __unplugin_components_0$4;
    case "mdi-star-outline":
      return __unplugin_components_4$4;
    case "mdi-heart":
      return __unplugin_components_1$3;
    case "mdi-heart-outline":
      return MdiHeartOutline;
    case "mdi-moon-full":
      return __unplugin_components_2$2;
    case "mdi-moon-new":
      return MdiMoonNew;
    case "mdi-thumb-up":
      return __unplugin_components_3;
    case "mdi-thumb-up-outline":
      return MdiThumbUpOutline;
    case "mdi-flag":
      return __unplugin_components_4$3;
    case "mdi-flag-outline":
      return MdiFlagOutline;
  }
};
const currencyCodes = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BOV",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYR",
  "BZD",
  "CAD",
  "CDF",
  "CHE",
  "CHF",
  "CHW",
  "CLF",
  "CLP",
  "CNY",
  "COP",
  "COU",
  "CRC",
  "CUP",
  "CVE",
  "CYP",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EEK",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GHC",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LTL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRO",
  "MTL",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MXV",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "ROL",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDD",
  "SEK",
  "SGD",
  "SHP",
  "SIT",
  "SKK",
  "SLL",
  "SOS",
  "SRD",
  "STD",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMM",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "USN",
  "USS",
  "UYU",
  "UZS",
  "VEB",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XAG",
  "XAU",
  "XBA",
  "XBB",
  "XBC",
  "XBD",
  "XCD",
  "XDR",
  "XFO",
  "XFU",
  "XOF",
  "XPD",
  "XPF",
  "XPT",
  "XTS",
  "XXX",
  "YER",
  "ZAR",
  "ZMK",
  "ZWD"
];
function validateCurrencyCode(v) {
  return currencyCodes.includes(v);
}
function currencyLocales() {
  const localeList = localeCodes.all.filter((l) => {
    try {
      if (Intl.NumberFormat.supportedLocalesOf(l.tag).length > 0) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }).map((l) => {
    return {
      text: `${l.name} (${l.tag})`,
      value: l.tag
    };
  });
  return localeList;
}
function validateCurrencyLocale(v) {
  try {
    return Intl.NumberFormat.supportedLocalesOf(v).length > 0;
  } catch (e) {
    return false;
  }
}
const _hoisted_1$Z = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$N = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M8 3h8c2.76 0 5 2.24 5 5v8c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5V8c0-2.76 2.24-5 5-5Z"
}, null, -1);
const _hoisted_3$J = [
  _hoisted_2$N
];
function render$s(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$Z, _hoisted_3$J);
}
var GenericIcon = { name: "mdi-square-rounded", render: render$s };
const _hoisted_1$Y = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$M = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M4 3h14a2 2 0 0 1 2 2v7.08a6.01 6.01 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7H4m8 0v4h6V7h-6m-8 6v4h6v-4H4m15.44 8v-2h-4v-2h4v-2l3 3l-3 3"
}, null, -1);
const _hoisted_3$I = [
  _hoisted_2$M
];
function render$r(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$Y, _hoisted_3$I);
}
var __unplugin_components_0$1 = { name: "mdi-table-arrow-right", render: render$r };
const _hoisted_1$X = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$L = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M4 3h14a2 2 0 0 1 2 2v7.08a6.01 6.01 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7H4m8 0v4h6V7h-6m-8 6v4h6v-4H4m14.44 2v2h4v2h-4v2l-3-3l3-3"
}, null, -1);
const _hoisted_3$H = [
  _hoisted_2$L
];
function render$q(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$X, _hoisted_3$H);
}
var BTIcon = { name: "mdi-table-arrow-left", render: render$q };
const _hoisted_1$W = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$K = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M15 20c0-.55-.45-1-1-1h-1v-2h6c1.11 0 2-.89 2-2V3a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h6v2h-1c-.55 0-1 .45-1 1H2v2h7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1h7v-2h-7M13 5h6v4h-6V5m0 6h6v4h-6v-4M5 5h6v4H5V5m0 10v-4h6v4H5Z"
}, null, -1);
const _hoisted_3$G = [
  _hoisted_2$K
];
function render$p(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$W, _hoisted_3$G);
}
var MMIcon = { name: "mdi-table-network", render: render$p };
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VirtualCellIcon",
  props: {
    columnMeta: null
  },
  setup(__props, { expose }) {
    var _a;
    expose();
    const props = __props;
    const columnMeta = toRef(props, "columnMeta");
    const column = inject(ColumnInj, ref(columnMeta));
    let relationColumn;
    if (column) {
      const { isLookup, isBt, isRollup, isMm, isHm } = useVirtualCell(column);
      if (isLookup || isBt || isRollup || isMm || isHm) {
        const meta = inject(MetaInj);
        relationColumn = (_a = meta == null ? void 0 : meta.value.columns) == null ? void 0 : _a.find((c) => {
          var _a2, _b;
          return c.id === ((_b = (_a2 = column.value) == null ? void 0 : _a2.colOptions) == null ? void 0 : _b.fk_relation_column_id);
        });
      }
    }
    const icon = computed(() => {
      var _a2, _b, _c, _d, _e;
      switch ((_a2 = column == null ? void 0 : column.value) == null ? void 0 : _a2.uidt) {
        case UITypes.LinkToAnotherRecord:
          switch ((_c = (_b = column == null ? void 0 : column.value) == null ? void 0 : _b.colOptions) == null ? void 0 : _c.type) {
            case RelationTypes.MANY_TO_MANY:
              return { icon: MMIcon, color: "text-accent" };
            case RelationTypes.HAS_MANY:
              return { icon: __unplugin_components_0$1, color: "text-yellow-500" };
            case RelationTypes.BELONGS_TO:
              return { icon: BTIcon, color: "text-sky-500" };
          }
          break;
        case UITypes.SpecificDBType:
          return { icon: SpecificDBTypeIcon, color: "text-grey" };
        case UITypes.Formula:
          return { icon: FormulaIcon, color: "text-grey" };
        case UITypes.Lookup:
          switch ((_d = relationColumn == null ? void 0 : relationColumn.colOptions) == null ? void 0 : _d.type) {
            case RelationTypes.MANY_TO_MANY:
              return { icon: TableColumnPlusBefore, color: "text-accent" };
            case RelationTypes.HAS_MANY:
              return { icon: TableColumnPlusBefore, color: "text-yellow-500" };
            case RelationTypes.BELONGS_TO:
              return { icon: TableColumnPlusBefore, color: "text-sky-500" };
          }
          return { icon: TableColumnPlusBefore, color: "text-grey" };
        case UITypes.Rollup:
          switch ((_e = relationColumn == null ? void 0 : relationColumn.colOptions) == null ? void 0 : _e.type) {
            case RelationTypes.MANY_TO_MANY:
              return { icon: RollupIcon, color: "text-accent" };
            case RelationTypes.HAS_MANY:
              return { icon: RollupIcon, color: "text-yellow-500" };
            case RelationTypes.BELONGS_TO:
              return { icon: RollupIcon, color: "text-sky-500" };
          }
          return { icon: RollupIcon, color: "text-grey" };
        case UITypes.Count:
          return { icon: CountIcon, color: "text-grey" };
      }
      return { icon: GenericIcon, color: "text-grey" };
    });
    const __returned__ = { props, columnMeta, column, relationColumn, icon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($setup.icon.icon), {
    class: normalizeClass(["mx-1 !text-sm", $setup.icon.color])
  }, null, 8, ["class"]);
}
var __nuxt_component_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$I]]);
const _hoisted_1$V = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$J = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M22 18v4h-4v-3h-3v-3h-3l-2.26-2.26c-.55.17-1.13.26-1.74.26a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 .61-.09 1.19-.26 1.74L22 18M7 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
}, null, -1);
const _hoisted_3$F = [
  _hoisted_2$J
];
function render$o(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$V, _hoisted_3$F);
}
var KeyIcon = { name: "mdi-key-variant", render: render$o };
const _hoisted_1$U = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$I = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m2 15l-3-5.2V7h1.5v4.4l2.8 4.9l-1.3.7Z"
}, null, -1);
const _hoisted_3$E = [
  _hoisted_2$I
];
function render$n(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$U, _hoisted_3$E);
}
var ClockIcon = { name: "mdi-clock-time-five", render: render$n };
const _hoisted_1$T = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$H = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 6v12h16V6H4m2 3h12v2H6V9m0 4h10v2H6v-2Z"
}, null, -1);
const _hoisted_3$D = [
  _hoisted_2$H
];
function render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$T, _hoisted_3$D);
}
var TextAreaIcon = { name: "mdi-card-text-outline", render: render$m };
const _hoisted_1$S = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$G = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5m2 0v14h14V5H5m6 2h2a2 2 0 0 1 2 2v8h-2v-4h-2v4H9V9a2 2 0 0 1 2-2m0 2v2h2V9h-2Z"
}, null, -1);
const _hoisted_3$C = [
  _hoisted_2$G
];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$S, _hoisted_3$C);
}
var StringIcon = { name: "mdi-alpha-a-box-outline", render: render$l };
const _hoisted_1$R = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$F = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14m-9 12l-4-4l1.41-1.42L10 14.17l6.59-6.59L18 9"
}, null, -1);
const _hoisted_3$B = [
  _hoisted_2$F
];
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$R, _hoisted_3$B);
}
var BooleanIcon = { name: "mdi-check-box-outline", render: render$k };
const _hoisted_1$Q = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$E = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"
}, null, -1);
const _hoisted_3$A = [
  _hoisted_2$E
];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$Q, _hoisted_3$A);
}
var SingleSelectIcon = { name: "mdi-radiobox-marked", render: render$j };
const _hoisted_1$P = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$D = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M22 16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h12a2 2 0 0 1 2 2v12m-6 4v2H4a2 2 0 0 1-2-2V7h2v13h12m-3-6l7-7l-1.41-1.41L13 11.17L9.91 8.09L8.5 9.5L13 14Z"
}, null, -1);
const _hoisted_3$z = [
  _hoisted_2$D
];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$P, _hoisted_3$z);
}
var MultiSelectIcon = { name: "mdi-checkbox-multiple-marked", render: render$i };
const _hoisted_1$O = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$C = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M21 17H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3m12.96-10.71l-2.75 3.54l-1.96-2.36L8.5 15h11l-3.54-4.71Z"
}, null, -1);
const _hoisted_3$y = [
  _hoisted_2$C
];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$O, _hoisted_3$y);
}
var AttachmentIcon = { name: "mdi-image-multiple-outline", render: render$h };
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "CellIcon",
  props: {
    columnMeta: null
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const columnMeta = toRef(props, "columnMeta");
    const column = inject(ColumnInj, columnMeta);
    const additionalColMeta = useColumn(column);
    const icon = computed(() => {
      var _a;
      if ((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.pk) {
        return KeyIcon;
      } else if (additionalColMeta.isJSON.value) {
        return JSONIcon;
      } else if (additionalColMeta.isDate.value) {
        return CalendarIcon;
      } else if (additionalColMeta.isDateTime.value) {
        return DatetimeIcon;
      } else if (additionalColMeta.isSet.value) {
        return MultiSelectIcon;
      } else if (additionalColMeta.isSingleSelect.value) {
        return SingleSelectIcon;
      } else if (additionalColMeta.isBoolean.value) {
        return BooleanIcon;
      } else if (additionalColMeta.isTextArea.value) {
        return TextAreaIcon;
      } else if (additionalColMeta.isEmail.value) {
        return __unplugin_components_12;
      } else if (additionalColMeta.isYear.value) {
        return CalendarIcon;
      } else if (additionalColMeta.isTime.value) {
        return ClockIcon;
      } else if (additionalColMeta.isRating.value) {
        return __unplugin_components_0$4;
      } else if (additionalColMeta.isAttachment.value) {
        return AttachmentIcon;
      } else if (additionalColMeta.isDecimal.value) {
        return DecimalIcon;
      } else if (additionalColMeta.isPhoneNumber.value) {
        return FilePhoneIcon;
      } else if (additionalColMeta.isURL.value) {
        return WebIcon;
      } else if (additionalColMeta.isCurrency.value) {
        return CurrencyIcon;
      } else if (additionalColMeta.isPercent.value) {
        return PercentIcon;
      } else if (additionalColMeta.isInt.value || additionalColMeta.isFloat.value) {
        return NumericIcon;
      } else if (additionalColMeta.isString.value) {
        return StringIcon;
      } else {
        return GenericIcon;
      }
    });
    const __returned__ = { props, columnMeta, column, additionalColMeta, icon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($setup.icon), { class: "text-grey mx-1 !text-sm" });
}
var __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$H]]);
const _hoisted_1$N = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$B = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7l7-7Z"
}, null, -1);
const _hoisted_3$x = [
  _hoisted_2$B
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$N, _hoisted_3$x);
}
var __unplugin_components_4$2 = { name: "mdi-download", render: render$g };
const _hoisted_1$M = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$A = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"
}, null, -1);
const _hoisted_3$w = [
  _hoisted_2$A
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$M, _hoisted_3$w);
}
var __unplugin_components_1$2 = { name: "mdi-pencil", render: render$f };
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  props: {
    virtual: { type: Boolean, default: false }
  },
  emits: ["edit"],
  setup(__props, { expose, emit }) {
    expose();
    const column = inject(ColumnInj);
    const meta = inject(MetaInj);
    const isLocked = inject(IsLockedInj);
    const { $api, $e } = useNuxtApp();
    const { t } = useI18n();
    const { getMeta } = useMetas();
    const deleteColumn = () => {
      var _a;
      return Modal$1.confirm({
        title: h("div", ["Do you want to delete ", h("span", { class: "font-weight-bold" }, [(_a = column == null ? void 0 : column.value) == null ? void 0 : _a.title]), " column ?"]),
        okText: t("general.delete"),
        okType: "danger",
        cancelText: t("general.cancel"),
        async onOk() {
          var _a2, _b;
          try {
            await $api.dbTableColumn.delete((_a2 = column == null ? void 0 : column.value) == null ? void 0 : _a2.id);
            await getMeta((_b = meta == null ? void 0 : meta.value) == null ? void 0 : _b.id, true);
          } catch (e) {
            message.error(await extractSdkResponseErrorMsg(e));
          }
        }
      });
    };
    const setAsPrimaryValue = async () => {
      var _a, _b;
      try {
        await $api.dbTableColumn.primaryColumnSet((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.id);
        await getMeta((_b = meta == null ? void 0 : meta.value) == null ? void 0 : _b.id, true);
        message.success("Successfully updated as primary column");
        $e("a:column:set-primary");
      } catch (e) {
        message.error("Failed to update primary column");
      }
    };
    const __returned__ = { emit, column, meta, isLocked, $api, $e, t, getMeta, deleteColumn, setAsPrimaryValue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$L = { class: "nc-column-edit nc-header-menu-item" };
const _hoisted_2$z = { class: "nc-column-set-primary nc-header-menu-item" };
const _hoisted_3$v = { class: "nc-column-delete nc-header-menu-item" };
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiMenuDown = MdiMenuDown;
  const _component_MdiPencil = __unplugin_components_1$2;
  const _component_a_menu_item = __unplugin_components_0$5;
  const _component_MdiStar = __unplugin_components_0$4;
  const _component_MdiDeleteOutline = __unplugin_components_3$2;
  const _component_a_menu = Menu;
  const _component_a_dropdown = Dropdown;
  return !$setup.isLocked ? (openBlock(), createBlock(_component_a_dropdown, {
    key: 0,
    placement: "bottomRight",
    trigger: ["click"]
  }, {
    overlay: withCtx(() => [
      createVNode(_component_a_menu, { class: "shadow bg-white" }, {
        default: withCtx(() => [
          createVNode(_component_a_menu_item, {
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("edit"))
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$L, [
                createVNode(_component_MdiPencil, { class: "text-primary" }),
                createTextVNode(toDisplayString(_ctx.$t("general.edit")), 1)
              ])
            ]),
            _: 1
          }),
          !$props.virtual ? (openBlock(), createBlock(_component_a_menu_item, {
            key: 0,
            onClick: $setup.setAsPrimaryValue
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$z, [
                createVNode(_component_MdiStar, { class: "text-primary" }),
                createTextVNode(toDisplayString(_ctx.$t("activity.setPrimary")), 1)
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_a_menu_item, { onClick: $setup.deleteColumn }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3$v, [
                createVNode(_component_MdiDeleteOutline, { class: "text-error" }),
                createTextVNode(toDisplayString(_ctx.$t("general.delete")), 1)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      createVNode(_component_MdiMenuDown, { class: "h-full text-grey nc-ui-dt-dropdown cursor-pointer outline-0" })
    ]),
    _: 1
  })) : createCommentVNode("", true);
}
var __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$G], ["__scopeId", "data-v-3f322cca"]]);
const _hoisted_1$K = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$y = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h10V4H7m0 6v2h2v-2H7m4 0v2h2v-2h-2m4 0v2h2v-2h-2m-8 4v2h2v-2H7m4 0v2h2v-2h-2m4 0v2h2v-2h-2m-8 4v2h2v-2H7m4 0v2h2v-2h-2m4 0v2h2v-2h-2Z"
}, null, -1);
const _hoisted_3$u = [
  _hoisted_2$y
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$K, _hoisted_3$u);
}
var __unplugin_components_5 = { name: "mdi-calculator", render: render$e };
const _hoisted_1$J = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$x = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M15.6 5.29c-1.1-.1-2.07.71-2.17 1.82L13.18 10H16v2h-3l-.44 5.07a3.986 3.986 0 0 1-4.33 3.63a4.007 4.007 0 0 1-3.06-1.87l1.5-1.5c.24.74.9 1.31 1.73 1.38c1.1.1 2.07-.71 2.17-1.82L11 12H8v-2h3.17l.27-3.07c.19-2.2 2.13-3.83 4.33-3.63c1.31.11 2.41.84 3.06 1.87l-1.5 1.5c-.24-.74-.9-1.31-1.73-1.38Z"
}, null, -1);
const _hoisted_3$t = [
  _hoisted_2$x
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$J, _hoisted_3$t);
}
var __unplugin_components_4$1 = { name: "mdi-function", render: render$d };
var JSEPNode = /* @__PURE__ */ ((JSEPNode2) => {
  JSEPNode2["COMPOUND"] = "Compound";
  JSEPNode2["IDENTIFIER"] = "Identifier";
  JSEPNode2["MEMBER_EXP"] = "MemberExpression";
  JSEPNode2["LITERAL"] = "Literal";
  JSEPNode2["THIS_EXP"] = "ThisExpression";
  JSEPNode2["CALL_EXP"] = "CallExpression";
  JSEPNode2["UNARY_EXP"] = "UnaryExpression";
  JSEPNode2["BINARY_EXP"] = "BinaryExpression";
  JSEPNode2["ARRAY_EXP"] = "ArrayExpression";
  return JSEPNode2;
})(JSEPNode || {});
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "FormulaOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    var _a, _b;
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    const { setAdditionalValidations, validateInfos, sqlUi, column } = useColumnCreateStoreOrThrow();
    const meta = inject(MetaInj);
    const columns = computed(() => {
      var _a2;
      return ((_a2 = meta == null ? void 0 : meta.value) == null ? void 0 : _a2.columns) || [];
    });
    const validators = {
      formula_raw: [
        {
          validator: (_, formula) => {
            return new Promise((resolve, reject) => {
              const res = parseAndValidateFormula(formula);
              if (res !== true) {
                return reject(new Error(res));
              }
              resolve();
            });
          }
        }
      ]
    };
    const availableFunctions = formulaList;
    const availableBinOps = ["+", "-", "*", "/", ">", "<", "==", "<=", ">=", "!="];
    const autocomplete = ref(false);
    const formulaRef = ref();
    const sugListRef = ref();
    const sugOptionsRef = ref([]);
    const wordToComplete = ref("");
    const selected = ref(0);
    const sortOrder = {
      column: 0,
      function: 1,
      op: 2
    };
    const suggestionsList = computed(() => {
      const unsupportedFnList = sqlUi.value.getUnsupportedFnList();
      return [
        ...availableFunctions.filter((fn) => !unsupportedFnList.includes(fn)).map((fn) => ({
          text: `${fn}()`,
          type: "function",
          description: formulas[fn].description,
          syntax: formulas[fn].syntax,
          examples: formulas[fn].examples
        })),
        ...columns.value.filter((c) => !column || column.value.id !== c.id && !(c.uidt === UITypes.LinkToAnotherRecord && c.system === 1)).map((c) => ({
          text: c.title,
          type: "column",
          icon: getUIDTIcon(c.uidt),
          uidt: c.uidt
        })),
        ...availableBinOps.map((op) => ({
          text: op,
          type: "op"
        }))
      ];
    });
    const suggestion = ref(suggestionsList.value);
    const acTree = computed(() => {
      const ref2 = new NcAutocompleteTree();
      for (const sug of suggestionsList.value) {
        ref2.add(sug);
      }
      return ref2;
    });
    function parseAndValidateFormula(formula) {
      try {
        const parsedTree = jsep(formula);
        const metaErrors = validateAgainstMeta(parsedTree);
        if (metaErrors.size) {
          return [...metaErrors].join(", ");
        }
        return true;
      } catch (e) {
        return e.message;
      }
    }
    function validateAgainstMeta(parsedTree, errors = /* @__PURE__ */ new Set(), typeErrors = /* @__PURE__ */ new Set()) {
      var _a2;
      if (parsedTree.type === "CallExpression") {
        if (!availableFunctions.includes(parsedTree.callee.name)) {
          errors.add(`'${parsedTree.callee.name}' function is not available`);
        }
        const validation = formulas[parsedTree.callee.name] && formulas[parsedTree.callee.name].validation;
        if (validation && validation.args) {
          if (validation.args.rqd !== void 0 && validation.args.rqd !== parsedTree.arguments.length) {
            errors.add(`'${parsedTree.callee.name}' required ${validation.args.rqd} arguments`);
          } else if (validation.args.min !== void 0 && validation.args.min > parsedTree.arguments.length) {
            errors.add(`'${parsedTree.callee.name}' required minimum ${validation.args.min} arguments`);
          } else if (validation.args.max !== void 0 && validation.args.max < parsedTree.arguments.length) {
            errors.add(`'${parsedTree.callee.name}' required maximum ${validation.args.max} arguments`);
          }
        }
        parsedTree.arguments.map((arg) => validateAgainstMeta(arg, errors));
        if (parsedTree.callee.type === "Identifier") {
          const expectedType = formulas[parsedTree.callee.name].type;
          if (expectedType === formulaTypes.NUMERIC) {
            if (parsedTree.callee.name === "WEEKDAY") {
              validateAgainstType(parsedTree.arguments[0], formulaTypes.DATE, (v) => {
                if (!validateDateWithUnknownFormat(v)) {
                  typeErrors.add("The first parameter of WEEKDAY() should have date value");
                }
              }, typeErrors);
              validateAgainstType(parsedTree.arguments[1], formulaTypes.STRING, (v) => {
                if (typeof v !== "string" || !["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].includes(v.toLowerCase())) {
                  typeErrors.add('The second parameter of WEEKDAY() should have the value either "sunday", "monday", "tuesday", "wednesday", "thursday", "friday" or "saturday"');
                }
              }, typeErrors);
            } else {
              parsedTree.arguments.map((arg) => validateAgainstType(arg, expectedType, null, typeErrors));
            }
          } else if (expectedType === formulaTypes.DATE) {
            if (parsedTree.callee.name === "DATEADD") {
              validateAgainstType(parsedTree.arguments[0], formulaTypes.DATE, (v) => {
                if (!validateDateWithUnknownFormat(v)) {
                  typeErrors.add("The first parameter of DATEADD() should have date value");
                }
              }, typeErrors);
              validateAgainstType(parsedTree.arguments[1], formulaTypes.NUMERIC, (v) => {
                if (typeof v !== "number") {
                  typeErrors.add("The second parameter of DATEADD() should have numeric value");
                }
              }, typeErrors);
              validateAgainstType(parsedTree.arguments[2], formulaTypes.STRING, (v) => {
                if (!["day", "week", "month", "year"].includes(v)) {
                  typeErrors.add('The third parameter of DATEADD() should have the value either "day", "week", "month" or "year"');
                }
              }, typeErrors);
            }
          }
        }
        errors = /* @__PURE__ */ new Set([...errors, ...typeErrors]);
      } else if (parsedTree.type === "Identifier") {
        if (columns.value.filter((c) => !column || column.value.id !== c.id).every((c) => c.title !== parsedTree.name)) {
          errors.add(`Column '${parsedTree.name}' is not available`);
        }
        const formulaPaths = columns.value.filter((c) => c.id !== (column == null ? void 0 : column.value.id) && c.uidt === UITypes.Formula).reduce((res, c) => {
          const neighbours = (c.colOptions.formula.match(/cl_\w{14}/g) || []).filter((colId) => columns.value.filter((col) => col.id === colId && col.uidt === UITypes.Formula).length);
          if (neighbours.length > 0) {
            res.push({ [c.id]: neighbours });
          }
          return res;
        }, []);
        const targetFormulaCol = columns.value.find((c) => c.title === parsedTree.name && c.uidt === UITypes.Formula);
        if (targetFormulaCol && (column == null ? void 0 : column.value.id)) {
          formulaPaths.push({
            [(_a2 = column == null ? void 0 : column.value) == null ? void 0 : _a2.id]: [targetFormulaCol.id]
          });
        }
        const vertices = formulaPaths.length;
        if (vertices > 0) {
          const adj = /* @__PURE__ */ new Map();
          const inDegrees = /* @__PURE__ */ new Map();
          for (const [_, v] of Object.entries(formulaPaths)) {
            const src = Object.keys(v)[0];
            const neighbours = v[src];
            inDegrees.set(src, inDegrees.get(src) || 0);
            for (const neighbour of neighbours) {
              adj.set(src, (adj.get(src) || /* @__PURE__ */ new Set()).add(neighbour));
              inDegrees.set(neighbour, (inDegrees.get(neighbour) || 0) + 1);
            }
          }
          const queue = [];
          inDegrees.forEach((inDegree, col) => {
            if (inDegree === 0) {
              queue.push(col);
            }
          });
          let visited = 0;
          while (queue.length !== 0) {
            const src = queue.shift();
            const neighbours = adj.get(src) || /* @__PURE__ */ new Set();
            if (neighbours.size > 0) {
              visited += 1;
            }
            neighbours.forEach((neighbour) => {
              inDegrees.set(neighbour, inDegrees.get(neighbour) - 1);
              if (inDegrees.get(neighbour) === 0) {
                queue.push(neighbour);
              }
            });
          }
          if (vertices !== visited) {
            errors.add("Can\u2019t save field because it causes a circular reference");
          }
        }
      } else if (parsedTree.type === "BinaryExpression") {
        if (!availableBinOps.includes(parsedTree.operator)) {
          errors.add(`'${parsedTree.operator}' operation is not available`);
        }
        validateAgainstMeta(parsedTree.left, errors);
        validateAgainstMeta(parsedTree.right, errors);
      } else if (parsedTree.type === "Literal" || parsedTree.type === "UnaryExpression")
        ;
      else if (parsedTree.type === "Compound") {
        if (parsedTree.body.length) {
          errors.add("Can\u2019t save field because the formula is invalid");
        }
      } else {
        errors.add("Can\u2019t save field because the formula is invalid");
      }
      return errors;
    }
    function validateAgainstType(parsedTree, expectedType, func, typeErrors = /* @__PURE__ */ new Set()) {
      var _a2;
      if (parsedTree === false || typeof parsedTree === "undefined") {
        return typeErrors;
      }
      if (parsedTree.type === "Literal") {
        if (typeof func === "function") {
          func(parsedTree.value);
        } else if (expectedType === formulaTypes.NUMERIC) {
          if (typeof parsedTree.value !== "number") {
            typeErrors.add("Numeric type is expected");
          }
        } else if (expectedType === formulaTypes.STRING) {
          if (typeof parsedTree.value !== "string") {
            typeErrors.add("string type is expected");
          }
        }
      } else if (parsedTree.type === "Identifier") {
        const col = columns.value.find((c) => c.title === parsedTree.name);
        if (col === void 0) {
          return;
        }
        if (col.uidt === UITypes.Formula) {
          const foundType = getRootDataType(jsep(col.formula_raw));
          if (foundType === "N/A") {
            typeErrors.add(`Not supported to reference column ${col.title}`);
          } else if (expectedType !== foundType) {
            typeErrors.add(`Type ${expectedType} is expected but found Type ${foundType}`);
          }
        } else {
          switch (col.uidt) {
            case UITypes.SingleLineText:
            case UITypes.LongText:
            case UITypes.MultiSelect:
            case UITypes.SingleSelect:
            case UITypes.PhoneNumber:
            case UITypes.Email:
            case UITypes.URL:
              if (expectedType !== formulaTypes.STRING) {
                typeErrors.add(`Column '${parsedTree.name}' with ${formulaTypes.STRING} type is found but ${expectedType} type is expected`);
              }
              break;
            case UITypes.Year:
            case UITypes.Number:
            case UITypes.Decimal:
            case UITypes.Rating:
            case UITypes.Count:
            case UITypes.AutoNumber:
            case UITypes.Currency:
              if (expectedType !== formulaTypes.NUMERIC) {
                typeErrors.add(`Column '${parsedTree.name}' with ${formulaTypes.NUMERIC} type is found but ${expectedType} type is expected`);
              }
              break;
            case UITypes.Date:
            case UITypes.DateTime:
            case UITypes.CreateTime:
            case UITypes.LastModifiedTime:
              if (expectedType !== formulaTypes.DATE) {
                typeErrors.add(`Column '${parsedTree.name}' with ${formulaTypes.DATE} type is found but ${expectedType} type is expected`);
              }
              break;
            case UITypes.ForeignKey:
            case UITypes.Attachment:
            case UITypes.ID:
            case UITypes.Time:
            case UITypes.Percent:
            case UITypes.Duration:
            case UITypes.Rollup:
            case UITypes.Lookup:
            case UITypes.Barcode:
            case UITypes.Button:
            case UITypes.Checkbox:
            case UITypes.Collaborator:
            default:
              typeErrors.add(`Not supported to reference column '${parsedTree.name}'`);
              break;
          }
        }
      } else if (parsedTree.type === "UnaryExpression" || parsedTree.type === "BinaryExpression") {
        if (expectedType !== formulaTypes.NUMERIC) {
          typeErrors.add(`${formulaTypes.NUMERIC} type is found but ${expectedType} type is expected`);
        }
      } else if (parsedTree.type === "CallExpression") {
        if (((_a2 = formulas[parsedTree.callee.name]) == null ? void 0 : _a2.type) && expectedType !== formulas[parsedTree.callee.name].type) {
          typeErrors.add(`${expectedType} not matched with ${formulas[parsedTree.callee.name].type}`);
        }
      }
      return typeErrors;
    }
    function getRootDataType(parsedTree) {
      if (parsedTree.type === "CallExpression") {
        return formulas[parsedTree.callee.name].type;
      } else if (parsedTree.type === "Identifier") {
        const col = columns.value.find((c) => c.title === parsedTree.name);
        if ((col == null ? void 0 : col.uidt) === UITypes.Formula) {
          return getRootDataType(jsep(col == null ? void 0 : col.formula_raw));
        } else {
          switch (col == null ? void 0 : col.uidt) {
            case UITypes.SingleLineText:
            case UITypes.LongText:
            case UITypes.MultiSelect:
            case UITypes.SingleSelect:
            case UITypes.PhoneNumber:
            case UITypes.Email:
            case UITypes.URL:
              return formulaTypes.STRING;
            case UITypes.Year:
            case UITypes.Number:
            case UITypes.Decimal:
            case UITypes.Rating:
            case UITypes.Count:
            case UITypes.AutoNumber:
              return formulaTypes.NUMERIC;
            case UITypes.Date:
            case UITypes.DateTime:
            case UITypes.CreateTime:
            case UITypes.LastModifiedTime:
              return formulaTypes.DATE;
            case UITypes.ForeignKey:
            case UITypes.Attachment:
            case UITypes.ID:
            case UITypes.Time:
            case UITypes.Currency:
            case UITypes.Percent:
            case UITypes.Duration:
            case UITypes.Rollup:
            case UITypes.Lookup:
            case UITypes.Barcode:
            case UITypes.Button:
            case UITypes.Checkbox:
            case UITypes.Collaborator:
            default:
              return "N/A";
          }
        }
      } else if (parsedTree.type === "BinaryExpression" || parsedTree.type === "UnaryExpression") {
        return formulaTypes.NUMERIC;
      } else if (parsedTree.type === "Literal") {
        return typeof parsedTree.value;
      } else {
        return "N/A";
      }
    }
    function isCurlyBracketBalanced() {
      const cntCurlyBrackets = (formulaRef.value.$el.value.match(/\{|}/g) || []).reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {});
      return (cntCurlyBrackets["{"] || 0) === (cntCurlyBrackets["}"] || 0);
    }
    function appendText(item) {
      var _a2;
      const text = item.text;
      const len = ((_a2 = wordToComplete.value) == null ? void 0 : _a2.length) || 0;
      if (item.type === "function") {
        vModel.value.formula_raw = insertAtCursor(formulaRef.value.$el, text, len, 1);
      } else if (item.type === "column") {
        vModel.value.formula_raw = insertAtCursor(formulaRef.value.$el, `{${text}}`, len + +!isCurlyBracketBalanced());
      } else {
        vModel.value.formula_raw = insertAtCursor(formulaRef.value.$el, text, len);
      }
      autocomplete.value = false;
      wordToComplete.value = "";
      if (item.type === "function" || item.type === "op") {
        suggestion.value = suggestionsList.value.filter((f) => f.type === "column");
      } else {
        suggestion.value = suggestionsList.value;
      }
    }
    const handleInputDeb = useDebounceFn(function() {
      handleInput();
    }, 250);
    function handleInput() {
      var _a2;
      selected.value = 0;
      suggestion.value = [];
      const query = getWordUntilCaret(formulaRef.value.$el);
      const parts = query.split(/\W+/);
      wordToComplete.value = parts.pop() || "";
      suggestion.value = (_a2 = acTree.value.complete(wordToComplete.value)) == null ? void 0 : _a2.sort((x, y) => sortOrder[x.type] - sortOrder[y.type]);
      if (!isCurlyBracketBalanced()) {
        suggestion.value = suggestion.value.filter((v) => v.type === "column");
      }
      autocomplete.value = !!suggestion.value.length;
    }
    function selectText() {
      if (suggestion.value && selected.value > -1 && selected.value < suggestion.value.length) {
        appendText(suggestion.value[selected.value]);
      }
    }
    function suggestionListUp() {
      if (suggestion.value) {
        selected.value = --selected.value > -1 ? selected.value : suggestion.value.length - 1;
        scrollToSelectedOption();
      }
    }
    function suggestionListDown() {
      if (suggestion.value) {
        selected.value = ++selected.value % suggestion.value.length;
        scrollToSelectedOption();
      }
    }
    function scrollToSelectedOption() {
      nextTick(() => {
        if (sugOptionsRef.value[selected.value]) {
          try {
            sugListRef.value.$el.scrollTo({
              top: sugOptionsRef.value[selected.value].$el.offsetTop,
              behavior: "smooth"
            });
          } catch (e) {
          }
        }
      });
    }
    vModel.value.formula_raw = ((_b = (_a = column == null ? void 0 : column.value) == null ? void 0 : _a.colOptions) == null ? void 0 : _b.formula_raw) || "";
    setAdditionalValidations({
      ...validators
    });
    onMounted(() => {
      jsep.plugins.register(jsepCurlyHook);
    });
    const __returned__ = { props, emit, vModel, setAdditionalValidations, validateInfos, sqlUi, column, JSEPNode, meta, columns, validators, availableFunctions, availableBinOps, autocomplete, formulaRef, sugListRef, sugOptionsRef, wordToComplete, selected, sortOrder, suggestionsList, suggestion, acTree, parseAndValidateFormula, validateAgainstMeta, validateAgainstType, getRootDataType, isCurlyBracketBalanced, appendText, handleInputDeb, handleInput, selectText, suggestionListUp, suggestionListDown, scrollToSelectedOption };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$I = { class: "formula-wrapper" };
const _hoisted_2$w = /* @__PURE__ */ createBaseVNode("div", { class: "text-gray-600 mt-2 mb-4 prose-sm" }, [
  /* @__PURE__ */ createTextVNode(" Hint: Use {} to reference columns, e.g: {column_name}. For more, please check out "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "prose-sm",
    href: "https://docs.nocodb.com/setup-and-usages/formulas#available-formula-features",
    target: "_blank"
  }, " Formulas. ")
], -1);
const _hoisted_3$s = { class: "h-[250px] overflow-auto scrollbar-thin-primary" };
const _hoisted_4$e = { class: "flex" };
const _hoisted_5$8 = { class: "prose-sm text-gray-600" };
const _hoisted_6$4 = {
  key: 0,
  class: "text-xs text-gray-500"
};
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_9$2 = /* @__PURE__ */ createTextVNode(" Syntax: ");
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_13$1 = /* @__PURE__ */ createTextVNode(" Examples: ");
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_15$1 = {
  key: 1,
  class: "float-right mr-5 -mt-2"
};
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_textarea = __unplugin_components_13;
  const _component_a_form_item = __unplugin_components_2$3;
  const _component_a_col = __unplugin_components_2$4;
  const _component_a_badge_ribbon = __unplugin_components_3$1;
  const _component_mdi_function = __unplugin_components_4$1;
  const _component_mdi_calculator = __unplugin_components_5;
  const _component_a_list_item_meta = __unplugin_components_6;
  const _component_a_list_item = __unplugin_components_7;
  const _component_a_list = __unplugin_components_8;
  return openBlock(), createElementBlock("div", _hoisted_1$I, [
    createVNode(_component_a_form_item, mergeProps($setup.validateInfos.formula_raw, { label: "Formula" }), {
      default: withCtx(() => [
        createVNode(_component_a_textarea, {
          ref: "formulaRef",
          value: $setup.vModel.formula_raw,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.vModel.formula_raw = $event),
          class: "mb-2 nc-formula-input",
          onKeydown: [
            withKeys(withModifiers($setup.suggestionListDown, ["prevent"]), ["down"]),
            withKeys(withModifiers($setup.suggestionListUp, ["prevent"]), ["up"]),
            withKeys(withModifiers($setup.selectText, ["prevent"]), ["enter"])
          ],
          onChange: $setup.handleInputDeb
        }, null, 8, ["value", "onKeydown", "onChange"])
      ]),
      _: 1
    }, 16),
    _hoisted_2$w,
    createBaseVNode("div", _hoisted_3$s, [
      createVNode(_component_a_list, {
        ref: "sugListRef",
        "data-source": $setup.suggestion,
        locale: { emptyText: "No suggested formula was found" }
      }, {
        renderItem: withCtx(({ item, index: index2 }) => [
          createVNode(_component_a_list_item, {
            ref: (el) => {
              $setup.sugOptionsRef[index2] = el;
            },
            class: "cursor-pointer",
            onClick: withModifiers(($event) => $setup.appendText(item), ["prevent", "stop"])
          }, {
            default: withCtx(() => [
              createVNode(_component_a_list_item_meta, null, {
                title: withCtx(() => [
                  createBaseVNode("div", _hoisted_4$e, [
                    createVNode(_component_a_col, { span: 6 }, {
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_5$8, toDisplayString(item.text), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_a_col, { span: 18 }, {
                      default: withCtx(() => [
                        item.type === "function" ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
                          createTextVNode(toDisplayString(item.description) + " ", 1),
                          _hoisted_7$3,
                          _hoisted_8$3,
                          _hoisted_9$2,
                          _hoisted_10$1,
                          createTextVNode(" " + toDisplayString(item.syntax) + " ", 1),
                          _hoisted_11$1,
                          _hoisted_12$1,
                          _hoisted_13$1,
                          _hoisted_14$1,
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.examples, (example, idx) => {
                            return openBlock(), createElementBlock("div", { key: idx }, [
                              createBaseVNode("div", null, "(" + toDisplayString(idx + 1) + "): " + toDisplayString(example), 1)
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        item.type === "column" ? (openBlock(), createElementBlock("div", _hoisted_15$1, [
                          createVNode(_component_a_badge_ribbon, {
                            text: item.uidt,
                            color: "gray"
                          }, null, 8, ["text"])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ]),
                avatar: withCtx(() => [
                  item.type === "function" ? (openBlock(), createBlock(_component_mdi_function, {
                    key: 0,
                    class: "text-lg"
                  })) : createCommentVNode("", true),
                  item.type === "op" ? (openBlock(), createBlock(_component_mdi_calculator, {
                    key: 1,
                    class: "text-lg"
                  })) : createCommentVNode("", true),
                  item.type === "column" ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                    key: 2,
                    class: "text-lg"
                  })) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        _: 1
      }, 8, ["data-source"])
    ])
  ]);
}
var __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$F]]);
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "CurrencyOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    const validators = {
      "meta.currency_locale": [
        {
          validator: (_, locale) => {
            return new Promise((resolve, reject) => {
              if (!validateCurrencyLocale(locale)) {
                return reject(new Error("Invalid locale"));
              }
              resolve();
            });
          }
        }
      ],
      "meta.currency_code": [
        {
          validator: (_, currencyCode) => {
            return new Promise((resolve, reject) => {
              if (!validateCurrencyCode(currencyCode)) {
                return reject(new Error("Invalid Currency Code"));
              }
              resolve();
            });
          }
        }
      ]
    };
    const { setAdditionalValidations, validateInfos } = useColumnCreateStoreOrThrow();
    setAdditionalValidations({
      ...validators
    });
    const { isPg } = useProject();
    const currencyList = currencyCodes || [];
    const currencyLocaleList = currencyLocales() || [];
    const isMoney = computed(() => vModel.value.dt === "money");
    const message2 = computed(() => {
      if (isMoney.value && isPg)
        return "PostgreSQL 'money' type has own currency settings";
      return "";
    });
    function filterOption(input, option) {
      return option.value.toUpperCase().includes(input.toUpperCase());
    }
    vModel.value.meta = {
      currency_locale: "en-US",
      currency_code: "USD",
      ...vModel.value.meta
    };
    const __returned__ = { props, emit, vModel, validators, setAdditionalValidations, validateInfos, isPg, currencyList, currencyLocaleList, isMoney, message: message2, filterOption };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$H = { class: "text-[#FB8C00]" };
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  const _component_a_form_item = __unplugin_components_2$3;
  const _component_a_col = __unplugin_components_2$4;
  const _component_a_row = __unplugin_components_3$3;
  return openBlock(), createBlock(_component_a_row, { gutter: "8" }, {
    default: withCtx(() => [
      createVNode(_component_a_col, { span: 12 }, {
        default: withCtx(() => [
          createVNode(_component_a_form_item, mergeProps($setup.validateInfos["meta.currency_locale"], { label: "Currency Locale" }), {
            default: withCtx(() => [
              createVNode(_component_a_select, {
                value: $setup.vModel.meta.currency_locale,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.vModel.meta.currency_locale = $event),
                class: "w-52",
                "show-search": "",
                "filter-option": $setup.filterOption,
                disabled: $setup.isMoney && $setup.isPg
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.currencyLocaleList, (currencyLocale, i) => {
                    return openBlock(), createBlock(_component_a_select_option, {
                      key: i,
                      value: currencyLocale.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(currencyLocale.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["value", "disabled"])
            ]),
            _: 1
          }, 16)
        ]),
        _: 1
      }),
      createVNode(_component_a_col, { span: 12 }, {
        default: withCtx(() => [
          createVNode(_component_a_form_item, mergeProps($setup.validateInfos["meta.currency_code"], { label: "Currency Code" }), {
            default: withCtx(() => [
              createVNode(_component_a_select, {
                value: $setup.vModel.meta.currency_code,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.vModel.meta.currency_code = $event),
                class: "w-52",
                "show-search": "",
                "filter-option": $setup.filterOption,
                disabled: $setup.isMoney && $setup.isPg
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.currencyList, (currencyCode, i) => {
                    return openBlock(), createBlock(_component_a_select_option, {
                      key: i,
                      value: currencyCode
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(currencyCode), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["value", "disabled"])
            ]),
            _: 1
          }, 16)
        ]),
        _: 1
      }),
      $setup.isMoney && $setup.isPg ? (openBlock(), createBlock(_component_a_col, { key: 0 }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1$H, toDisplayString($setup.message), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
var __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$E]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "DurationOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    const durationOptionList = durationOptions.map((o) => ({
      ...o,
      title: `${o.title} ${o.example}`
    })) || [];
    vModel.value.meta = {
      duration: 0,
      ...vModel.value.meta
    };
    const __returned__ = { props, emit, vModel, durationOptionList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$G = /* @__PURE__ */ createBaseVNode("span", { class: "prose-sm mt-2" }, "A duration of time in minutes or seconds (e.g. 1:23).", -1);
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_col = __unplugin_components_2$4;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  const _component_a_form_item = __unplugin_components_2$3;
  const _component_a_row = __unplugin_components_3$3;
  return openBlock(), createBlock(_component_a_row, null, {
    default: withCtx(() => [
      createVNode(_component_a_col, { span: 24 }, {
        default: withCtx(() => [
          _hoisted_1$G
        ]),
        _: 1
      }),
      createVNode(_component_a_col, { span: 24 }, {
        default: withCtx(() => [
          createVNode(_component_a_form_item, { label: "Duration Format" }, {
            default: withCtx(() => [
              createVNode(_component_a_select, {
                value: $setup.vModel.meta.duration,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.vModel.meta.duration = $event),
                class: "w-52"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.durationOptionList, (duration, i) => {
                    return openBlock(), createBlock(_component_a_select_option, {
                      key: i,
                      value: duration.id
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(duration.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var __nuxt_component_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$D]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "ColorPicker",
  props: {
    modelValue: { default: () => enumColor.light[0] },
    colors: { default: () => enumColor.light.concat(enumColor.dark) },
    rowSize: { default: 10 },
    advanced: { type: Boolean, default: true },
    pickButton: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const vModel = computed({
      get: () => props.modelValue,
      set: (val) => {
        emit("update:modelValue", val.hex ? val.hex : val || null);
      }
    });
    const picked = ref(props.modelValue || enumColor.light[0]);
    const selectColor = (color) => {
      picked.value = typeof color === "string" ? color : color.hex ? color.hex : color;
      vModel.value = typeof color === "string" ? color : color.hex ? color.hex : color;
    };
    const compare = (colorA, colorB) => colorA.toLowerCase() === colorB.toLowerCase();
    watch(picked, (n, _o) => {
      if (!props.pickButton) {
        vModel.value = typeof n === "string" ? n : n.hex ? n.hex : n;
      }
    });
    const __returned__ = { props, emit, vModel, picked, selectColor, compare, Chrome: script };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$F = { class: "color-picker" };
const _hoisted_2$v = ["onClick"];
const _hoisted_3$r = /* @__PURE__ */ createTextVNode(" Pick Color ");
const _hoisted_4$d = { class: "flex justify-center py-4" };
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = Button;
  const _component_a_collapse_panel = __unplugin_components_9;
  const _component_a_collapse = Collapse;
  const _component_a_card = Card;
  return openBlock(), createElementBlock("div", _hoisted_1$F, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(Math.ceil($setup.props.colors.length / $setup.props.rowSize), (colId) => {
      return openBlock(), createElementBlock("div", {
        key: colId,
        class: "color-picker-row"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.colors.slice((colId - 1) * $props.rowSize, colId * $props.rowSize), (color, i) => {
          return openBlock(), createElementBlock("button", {
            key: `color-${colId}-${i}`,
            class: normalizeClass(["color-selector", $setup.compare($setup.picked, color) ? "selected" : ""]),
            style: normalizeStyle({ "background-color": `${color}` }),
            onClick: ($event) => $setup.selectColor(color)
          }, toDisplayString($setup.compare($setup.picked, color) ? "\u2713" : ""), 15, _hoisted_2$v);
        }), 128))
      ]);
    }), 128)),
    $setup.props.advanced ? (openBlock(), createBlock(_component_a_card, {
      key: 0,
      class: "w-full mt-2",
      "body-style": { padding: "0px" },
      bordered: false
    }, {
      default: withCtx(() => [
        createVNode(_component_a_collapse, {
          accordion: "",
          ghost: "",
          "expand-icon-position": "right"
        }, {
          default: withCtx(() => [
            createVNode(_component_a_collapse_panel, {
              key: "1",
              header: "Advanced",
              class: ""
            }, {
              default: withCtx(() => [
                $setup.props.pickButton ? (openBlock(), createBlock(_component_a_button, {
                  key: 0,
                  class: "!bg-primary text-white w-full",
                  onClick: _cache[0] || (_cache[0] = ($event) => $setup.selectColor($setup.picked))
                }, {
                  default: withCtx(() => [
                    _hoisted_3$r
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_4$d, [
                  createVNode($setup["Chrome"], {
                    modelValue: $setup.picked,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.picked = $event),
                    class: "!w-full !shadow-none"
                  }, null, 8, ["modelValue"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
var __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$C], ["__scopeId", "data-v-5c7d4c72"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "RatingOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    const iconList = [
      {
        full: "mdi-star",
        empty: "mdi-star-outline"
      },
      {
        full: "mdi-heart",
        empty: "mdi-heart-outline"
      },
      {
        full: "mdi-moon-full",
        empty: "mdi-moon-new"
      },
      {
        full: "mdi-thumb-up",
        empty: "mdi-thumb-up-outline"
      },
      {
        full: "mdi-flag",
        empty: "mdi-flag-outline"
      }
    ];
    const picked = computed({
      get: () => vModel.value.meta.color,
      set: (val) => {
        vModel.value.meta.color = val;
      }
    });
    vModel.value.meta = {
      iconIdx: 0,
      icon: {
        full: "mdi-star",
        empty: "mdi-star-outline"
      },
      color: "#fcb401",
      max: 5,
      ...vModel.value.meta
    };
    const iconIdx = iconList.findIndex((ele) => ele.full === vModel.value.meta.icon.full && ele.empty === vModel.value.meta.icon.empty);
    vModel.value.meta.iconIdx = iconIdx === -1 ? 0 : iconIdx;
    watch(() => vModel.value.meta.iconIdx, (v) => {
      vModel.value.meta.icon = iconList[v];
    });
    const __returned__ = { props, emit, vModel, iconList, picked, iconIdx, getMdiIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$E = { class: "flex items-center" };
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  const _component_a_form_item = __unplugin_components_2$3;
  const _component_a_col = __unplugin_components_2$4;
  const _component_a_row = __unplugin_components_3$3;
  const _component_GeneralColorPicker = __nuxt_component_0$2;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_a_row, { gutter: 8 }, {
      default: withCtx(() => [
        createVNode(_component_a_col, { span: 12 }, {
          default: withCtx(() => [
            createVNode(_component_a_form_item, { label: "Icon" }, {
              default: withCtx(() => [
                createVNode(_component_a_select, {
                  value: $setup.vModel.meta.iconIdx,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.vModel.meta.iconIdx = $event),
                  class: "w-52"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList($setup.iconList, (icon, i) => {
                      return createVNode(_component_a_select_option, {
                        key: i,
                        value: i
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_1$E, [
                            (openBlock(), createBlock(resolveDynamicComponent($setup.getMdiIcon(icon.full)), {
                              class: "mx-1",
                              style: normalizeStyle({
                                color: $setup.vModel.meta.color
                              })
                            }, null, 8, ["style"])),
                            (openBlock(), createBlock(resolveDynamicComponent($setup.getMdiIcon(icon.empty)), {
                              style: normalizeStyle({
                                color: $setup.vModel.meta.color
                              })
                            }, null, 8, ["style"]))
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_a_col, { span: 12 }, {
          default: withCtx(() => [
            createVNode(_component_a_form_item, { label: "Max" }, {
              default: withCtx(() => [
                createVNode(_component_a_select, {
                  value: $setup.vModel.meta.max,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.vModel.meta.max = $event),
                  class: "w-52"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (v, i) => {
                      return createVNode(_component_a_select_option, {
                        key: i,
                        value: v
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(v), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_a_row, { class: "w-full justify-center" }, {
      default: withCtx(() => [
        createVNode(_component_GeneralColorPicker, {
          modelValue: $setup.picked,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.picked = $event),
          "row-size": 8,
          colors: ["#fcb401", "#faa307", "#f48c06", "#e85d04", "#dc2f02", "#d00000", "#9d0208", "#777"]
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })
  ], 64);
}
var __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$B], ["__scopeId", "data-v-dca4ed3c"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "CheckboxOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    const iconList = [
      {
        checked: "mdi-check-bold",
        unchecked: "mdi-crop-square"
      },
      {
        checked: "mdi-check-circle-outline",
        unchecked: "mdi-checkbox-blank-circle-outline"
      },
      {
        checked: "mdi-star",
        unchecked: "mdi-star-outline"
      },
      {
        checked: "mdi-heart",
        unchecked: "mdi-heart-outline"
      },
      {
        checked: "mdi-moon-full",
        unchecked: "mdi-moon-new"
      },
      {
        checked: "mdi-thumb-up",
        unchecked: "mdi-thumb-up-outline"
      },
      {
        checked: "mdi-flag",
        unchecked: "mdi-flag-outline"
      }
    ];
    const picked = computed({
      get: () => vModel.value.meta.color,
      set: (val) => {
        vModel.value.meta.color = val;
      }
    });
    vModel.value.meta = {
      icon: {
        checked: "mdi-check-bold",
        unchecked: "mdi-crop-square"
      },
      color: "#777",
      ...vModel.value.meta
    };
    const iconIdx = iconList.findIndex((ele) => ele.checked === vModel.value.meta.icon.checked && ele.unchecked === vModel.value.meta.icon.unchecked);
    vModel.value.meta.iconIdx = iconIdx === -1 ? 0 : iconIdx;
    watch(() => vModel.value.meta.iconIdx, (v) => {
      vModel.value.meta.icon = iconList[v];
    });
    const __returned__ = { props, emit, vModel, iconList, picked, iconIdx, getMdiIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$D = { class: "flex items-center" };
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  const _component_a_form_item = __unplugin_components_2$3;
  const _component_a_col = __unplugin_components_2$4;
  const _component_a_row = __unplugin_components_3$3;
  const _component_GeneralColorPicker = __nuxt_component_0$2;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_a_row, null, {
      default: withCtx(() => [
        createVNode(_component_a_col, { span: 24 }, {
          default: withCtx(() => [
            createVNode(_component_a_form_item, { label: "Icon" }, {
              default: withCtx(() => [
                createVNode(_component_a_select, {
                  value: $setup.vModel.meta.iconIdx,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.vModel.meta.iconIdx = $event),
                  class: "w-52"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList($setup.iconList, (icon, i) => {
                      return createVNode(_component_a_select_option, {
                        key: i,
                        value: i
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_1$D, [
                            (openBlock(), createBlock(resolveDynamicComponent($setup.getMdiIcon(icon.checked)), {
                              class: "mx-1",
                              style: normalizeStyle({
                                color: $setup.vModel.meta.color
                              })
                            }, null, 8, ["style"])),
                            (openBlock(), createBlock(resolveDynamicComponent($setup.getMdiIcon(icon.unchecked)), {
                              style: normalizeStyle({
                                color: $setup.vModel.meta.color
                              })
                            }, null, 8, ["style"]))
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_a_row, { class: "w-full justify-center" }, {
      default: withCtx(() => [
        createVNode(_component_GeneralColorPicker, {
          modelValue: $setup.picked,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.picked = $event),
          "row-size": 8,
          colors: ["#fcb401", "#faa307", "#f48c06", "#e85d04", "#dc2f02", "#d00000", "#9d0208", "#777"]
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    })
  ], 64);
}
var __nuxt_component_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$A], ["__scopeId", "data-v-801e07ce"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "LookupOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    const meta = inject(MetaInj);
    const { setAdditionalValidations, validateInfos, onDataTypeChange } = useColumnCreateStoreOrThrow();
    const __$temp_1 = useProject(), tables = toRef(__$temp_1, "tables");
    const __$temp_2 = useMetas(), metas = toRef(__$temp_2, "metas");
    setAdditionalValidations({
      fk_relation_column_id: [{ required: true, message: "Required" }],
      fk_lookup_column_id: [{ required: true, message: "Required" }]
    });
    if (!vModel.value.fk_relation_column_id)
      vModel.value.fk_relation_column_id = null;
    if (!vModel.value.fk_lookup_column_id)
      vModel.value.fk_lookup_column_id = null;
    const relationNames = {
      mm: "Many To Many",
      hm: "Has Many",
      bt: "Belongs To"
    };
    const refTables = computed(() => {
      var _a;
      if (!tables.value || !tables.value.length) {
        return [];
      }
      return (_a = meta.value.columns) == null ? void 0 : _a.filter((c) => c.uidt === UITypes.LinkToAnotherRecord && !c.system).map((c) => ({
        col: c.colOptions,
        column: c,
        ...tables.value.find((t) => t.id === c.colOptions.fk_related_model_id)
      })).filter((table) => table.col.fk_related_model_id === table.id && !table.mm);
    });
    const columns = computed(() => {
      var _a;
      const selectedTable = (_a = refTables.value) == null ? void 0 : _a.find((t) => t.column.id === vModel.value.fk_relation_column_id);
      if (!(selectedTable == null ? void 0 : selectedTable.id)) {
        return [];
      }
      return metas.value[selectedTable.id].columns.filter((c) => !isSystemColumn(c));
    });
    const __returned__ = { props, emit, vModel, meta, setAdditionalValidations, validateInfos, onDataTypeChange, tables, metas, relationNames, refTables, columns };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$C = { class: "p-6 w-full flex flex-col border-2 mb-2 mt-4" };
const _hoisted_2$u = { class: "w-full flex flex-row space-x-2" };
const _hoisted_3$q = { class: "flex flex-row space-x-0.5 h-full pb-0.5 items-center justify-between" };
const _hoisted_4$c = { class: "font-semibold text-xs" };
const _hoisted_5$7 = { class: "text-[0.65rem] text-gray-600" };
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  const _component_a_form_item = __unplugin_components_2$3;
  return openBlock(), createElementBlock("div", _hoisted_1$C, [
    createBaseVNode("div", _hoisted_2$u, [
      createVNode(_component_a_form_item, mergeProps({
        class: "flex w-1/2 pb-2",
        label: _ctx.$t("labels.childTable")
      }, $setup.validateInfos.fk_relation_column_id), {
        default: withCtx(() => [
          createVNode(_component_a_select, {
            value: $setup.vModel.fk_relation_column_id,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.vModel.fk_relation_column_id = $event),
            "dropdown-class-name": "!w-64",
            onChange: $setup.onDataTypeChange
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.refTables, (table, index2) => {
                return openBlock(), createBlock(_component_a_select_option, {
                  key: index2,
                  value: table.col.fk_column_id
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3$q, [
                      createBaseVNode("div", _hoisted_4$c, toDisplayString(table.column.title), 1),
                      createBaseVNode("div", _hoisted_5$7, toDisplayString($setup.relationNames[table.col.type]) + " " + toDisplayString(table.title || table.table_name), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["value", "onChange"])
        ]),
        _: 1
      }, 16, ["label"]),
      createVNode(_component_a_form_item, mergeProps({
        class: "flex w-1/2",
        label: _ctx.$t("labels.childColumn")
      }, $setup.validateInfos.fk_lookup_column_id), {
        default: withCtx(() => [
          createVNode(_component_a_select, {
            value: $setup.vModel.fk_lookup_column_id,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.vModel.fk_lookup_column_id = $event),
            name: "fk_lookup_column_id",
            onChange: $setup.onDataTypeChange
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.columns, (column, index2) => {
                return openBlock(), createBlock(_component_a_select_option, {
                  key: index2,
                  value: column.id
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(column.title), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["value", "onChange"])
        ]),
        _: 1
      }, 16, ["label"])
    ])
  ]);
}
var __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "DateOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    var _a;
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    if (!((_a = vModel.value.meta) == null ? void 0 : _a.date_format)) {
      if (!vModel.value.meta)
        vModel.value.meta = {};
      vModel.value.meta.date_format = dateFormats[0];
    }
    const __returned__ = { props, emit, vModel, dateFormats };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$B = { class: "flex flex-row items-center" };
const _hoisted_2$t = { class: "text-xs" };
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  const _component_a_form_item = __unplugin_components_2$3;
  return openBlock(), createBlock(_component_a_form_item, { label: "Date Format" }, {
    default: withCtx(() => [
      createVNode(_component_a_select, {
        value: $setup.vModel.meta.date_format,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.vModel.meta.date_format = $event)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.dateFormats, (format2, i) => {
            return openBlock(), createBlock(_component_a_select_option, {
              key: i,
              value: format2
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1$B, [
                  createBaseVNode("div", _hoisted_2$t, toDisplayString(format2), 1)
                ])
              ]),
              _: 2
            }, 1032, ["value"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["value"])
    ]),
    _: 1
  });
}
var __nuxt_component_6$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "RollupOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    const meta = inject(MetaInj);
    const { setAdditionalValidations, validateInfos, onDataTypeChange } = useColumnCreateStoreOrThrow();
    const __$temp_1 = useProject(), tables = toRef(__$temp_1, "tables");
    const __$temp_2 = useMetas(), metas = toRef(__$temp_2, "metas");
    setAdditionalValidations({
      fk_relation_column_id: [{ required: true, message: "Required" }],
      fk_rollup_column_id: [{ required: true, message: "Required" }],
      rollup_function: [{ required: true, message: "Required" }]
    });
    const relationNames = {
      mm: "Many To Many",
      hm: "Has Many"
    };
    const aggrFunctionsList = [
      { text: "count", value: "count" },
      { text: "min", value: "min" },
      { text: "max", value: "max" },
      { text: "avg", value: "avg" },
      { text: "min", value: "min" },
      { text: "sum", value: "sum" },
      { text: "countDistinct", value: "countDistinct" },
      { text: "sumDistinct", value: "sumDistinct" },
      { text: "avgDistinct", value: "avgDistinct" }
    ];
    if (!vModel.value.fk_relation_column_id)
      vModel.value.fk_relation_column_id = null;
    if (!vModel.value.fk_rollup_column_id)
      vModel.value.fk_rollup_column_id = null;
    if (!vModel.value.rollup_function)
      vModel.value.rollup_function = null;
    const refTables = computed(() => {
      var _a, _b;
      if (!tables.value || !tables.value.length) {
        return [];
      }
      return (_b = (_a = meta.value.columns) == null ? void 0 : _a.filter((c) => c.uidt === UITypes.LinkToAnotherRecord && c.colOptions.type !== "bt" && !c.system).map((c) => ({
        col: c.colOptions,
        column: c,
        ...tables.value.find((t) => {
          var _a2;
          return t.id === ((_a2 = c.colOptions) == null ? void 0 : _a2.fk_related_model_id);
        })
      }))) != null ? _b : [];
    });
    const columns = computed(() => {
      const selectedTable = refTables.value.find((t) => t.column.id === vModel.value.fk_relation_column_id);
      if (!(selectedTable == null ? void 0 : selectedTable.id)) {
        return [];
      }
      return metas.value[selectedTable.id].columns.filter((c) => !isVirtualCol(c.uidt) && !isSystemColumn(c));
    });
    const __returned__ = { props, emit, vModel, meta, setAdditionalValidations, validateInfos, onDataTypeChange, tables, metas, relationNames, aggrFunctionsList, refTables, columns };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$A = { class: "p-6 w-full flex flex-col border-2 mb-2 mt-4" };
const _hoisted_2$s = { class: "w-full flex flex-row space-x-2" };
const _hoisted_3$p = { class: "flex flex-row space-x-0.5 h-full pb-0.5 items-center justify-between" };
const _hoisted_4$b = { class: "font-semibold text-xs" };
const _hoisted_5$6 = { class: "text-[0.65rem] text-gray-600" };
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  const _component_a_form_item = __unplugin_components_2$3;
  return openBlock(), createElementBlock("div", _hoisted_1$A, [
    createBaseVNode("div", _hoisted_2$s, [
      createVNode(_component_a_form_item, mergeProps({
        class: "flex w-1/2 pb-2",
        label: _ctx.$t("labels.childTable")
      }, $setup.validateInfos.fk_relation_column_id), {
        default: withCtx(() => [
          createVNode(_component_a_select, {
            value: $setup.vModel.fk_relation_column_id,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.vModel.fk_relation_column_id = $event),
            "dropdown-class-name": "!w-64",
            onChange: $setup.onDataTypeChange
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.refTables, (table, index2) => {
                return openBlock(), createBlock(_component_a_select_option, {
                  key: index2,
                  value: table.col.fk_column_id
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3$p, [
                      createBaseVNode("div", _hoisted_4$b, toDisplayString(table.column.title), 1),
                      createBaseVNode("div", _hoisted_5$6, " (" + toDisplayString($setup.relationNames[table.col.type]) + " " + toDisplayString(table.title || table.table_name) + ") ", 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["value", "onChange"])
        ]),
        _: 1
      }, 16, ["label"]),
      createVNode(_component_a_form_item, mergeProps({
        class: "flex w-1/2",
        label: _ctx.$t("labels.childColumn")
      }, $setup.validateInfos.fk_rollup_column_id), {
        default: withCtx(() => [
          createVNode(_component_a_select, {
            value: $setup.vModel.fk_rollup_column_id,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.vModel.fk_rollup_column_id = $event),
            name: "fk_rollup_column_id",
            onChange: $setup.onDataTypeChange
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.columns, (column, index2) => {
                return openBlock(), createBlock(_component_a_select_option, {
                  key: index2,
                  value: column.id
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(column.title), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["value", "onChange"])
        ]),
        _: 1
      }, 16, ["label"])
    ]),
    createVNode(_component_a_form_item, mergeProps({ label: "Aggregate function" }, $setup.validateInfos.rollup_function), {
      default: withCtx(() => [
        createVNode(_component_a_select, {
          value: $setup.vModel.rollup_function,
          "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.vModel.rollup_function = $event),
          onChange: $setup.onDataTypeChange
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList($setup.aggrFunctionsList, (func, index2) => {
              return createVNode(_component_a_select_option, {
                key: index2,
                value: func.value
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(func.text), 1)
                ]),
                _: 2
              }, 1032, ["value"]);
            }), 64))
          ]),
          _: 1
        }, 8, ["value", "onChange"])
      ]),
      _: 1
    }, 16)
  ]);
}
var __nuxt_component_7$1 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "LinkedToAnotherRecordOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    const meta = inject(MetaInj);
    const { setAdditionalValidations, validateInfos, onDataTypeChange } = useColumnCreateStoreOrThrow();
    const __$temp_1 = useProject(), tables = toRef(__$temp_1, "tables"), sqlUi = toRef(__$temp_1, "sqlUi");
    setAdditionalValidations({
      childId: [{ required: true, message: "Required" }]
    });
    const onUpdateDeleteOptions = sqlUi.value === MssqlUi ? ["NO ACTION"] : ["NO ACTION", "CASCADE", "RESTRICT", "SET NULL", "SET DEFAULT"];
    if (!vModel.value.parentId)
      vModel.value.parentId = meta.value.id;
    if (!vModel.value.childId)
      vModel.value.childId = null;
    if (!vModel.value.childColumn)
      vModel.value.childColumn = `${meta.value.table_name}_id`;
    if (!vModel.value.childTable)
      vModel.value.childTable = meta.value.table_name;
    if (!vModel.value.parentTable)
      vModel.value.parentTable = vModel.value.rtn || "";
    if (!vModel.value.parentColumn)
      vModel.value.parentColumn = vModel.value.rcn || "";
    if (!vModel.value.type)
      vModel.value.type = "hm";
    if (!vModel.value.onUpdate)
      vModel.value.onUpdate = onUpdateDeleteOptions[0];
    if (!vModel.value.onDelete)
      vModel.value.onDelete = onUpdateDeleteOptions[0];
    if (!vModel.value.virtual)
      vModel.value.virtual = sqlUi.value === SqliteUi;
    if (!vModel.value.alias)
      vModel.value.alias = vModel.value.column_name;
    const advancedOptions = ref(false);
    const refTables = computed(() => {
      if (!tables.value || !tables.value.length) {
        return [];
      }
      return tables.value.filter((t) => t.type === ModelTypes.TABLE);
    });
    const __returned__ = { props, emit, vModel, meta, setAdditionalValidations, validateInfos, onDataTypeChange, tables, sqlUi, onUpdateDeleteOptions, advancedOptions, refTables, MdiPlusIcon, MdiMinusIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$z = { class: "w-full flex flex-col mb-2 mt-4" };
const _hoisted_2$r = { class: "border-2 p-6" };
const _hoisted_3$o = /* @__PURE__ */ createTextVNode("Has Many");
const _hoisted_4$a = /* @__PURE__ */ createTextVNode("Many To Many");
const _hoisted_5$5 = {
  key: 0,
  class: "flex flex-col p-6 gap-4 border-2 mt-2"
};
const _hoisted_6$3 = { class: "flex flex-row space-x-2" };
const _hoisted_7$2 = { class: "flex flex-row" };
const _hoisted_8$2 = /* @__PURE__ */ createTextVNode("Virtual Relation");
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_radio = Radio;
  const _component_a_radio_group = __unplugin_components_1$5;
  const _component_a_form_item = __unplugin_components_2$3;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  const _component_a_checkbox = Checkbox;
  return openBlock(), createElementBlock("div", _hoisted_1$z, [
    createBaseVNode("div", _hoisted_2$r, [
      createVNode(_component_a_form_item, normalizeProps(guardReactiveProps($setup.validateInfos.type)), {
        default: withCtx(() => [
          createVNode(_component_a_radio_group, mergeProps({
            value: $setup.vModel.type,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.vModel.type = $event),
            name: "type"
          }, $setup.validateInfos.type), {
            default: withCtx(() => [
              createVNode(_component_a_radio, { value: "hm" }, {
                default: withCtx(() => [
                  _hoisted_3$o
                ]),
                _: 1
              }),
              createVNode(_component_a_radio, { value: "mm" }, {
                default: withCtx(() => [
                  _hoisted_4$a
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 16, ["value"])
        ]),
        _: 1
      }, 16),
      createVNode(_component_a_form_item, mergeProps({
        class: "flex w-full pb-2 mt-4",
        label: _ctx.$t("labels.childTable")
      }, $setup.validateInfos.childId), {
        default: withCtx(() => [
          createVNode(_component_a_select, {
            value: $setup.vModel.childId,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.vModel.childId = $event),
            onChange: $setup.onDataTypeChange
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.refTables, (table, index2) => {
                return openBlock(), createBlock(_component_a_select_option, {
                  key: index2,
                  value: table.id
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(table.title), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["value", "onChange"])
        ]),
        _: 1
      }, 16, ["label"])
    ]),
    createBaseVNode("div", {
      class: "text-xs cursor-pointer text-grey nc-more-options my-2 flex items-center gap-1 justify-end",
      onClick: _cache[2] || (_cache[2] = ($event) => $setup.advancedOptions = !$setup.advancedOptions)
    }, [
      createTextVNode(toDisplayString($setup.advancedOptions ? _ctx.$t("general.hideAll") : _ctx.$t("general.showMore")) + " ", 1),
      (openBlock(), createBlock(resolveDynamicComponent($setup.advancedOptions ? $setup.MdiMinusIcon : $setup.MdiPlusIcon)))
    ]),
    $setup.advancedOptions ? (openBlock(), createElementBlock("div", _hoisted_5$5, [
      createBaseVNode("div", _hoisted_6$3, [
        createVNode(_component_a_form_item, {
          class: "flex w-1/2",
          label: _ctx.$t("labels.onUpdate")
        }, {
          default: withCtx(() => [
            createVNode(_component_a_select, {
              value: $setup.vModel.onUpdate,
              "onUpdate:value": _cache[3] || (_cache[3] = ($event) => $setup.vModel.onUpdate = $event),
              disabled: $setup.vModel.virtual,
              name: "onUpdate",
              onChange: $setup.onDataTypeChange
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.onUpdateDeleteOptions, (option, index2) => {
                  return openBlock(), createBlock(_component_a_select_option, {
                    key: index2,
                    value: option
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(option), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["value", "disabled", "onChange"])
          ]),
          _: 1
        }, 8, ["label"]),
        createVNode(_component_a_form_item, {
          class: "flex w-1/2",
          label: _ctx.$t("labels.onDelete")
        }, {
          default: withCtx(() => [
            createVNode(_component_a_select, {
              value: $setup.vModel.onDelete,
              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.vModel.onDelete = $event),
              disabled: $setup.vModel.virtual,
              name: "onDelete",
              onChange: $setup.onDataTypeChange
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.onUpdateDeleteOptions, (option, index2) => {
                  return openBlock(), createBlock(_component_a_select_option, {
                    key: index2,
                    value: option
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(option), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["value", "disabled", "onChange"])
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      createBaseVNode("div", _hoisted_7$2, [
        createVNode(_component_a_form_item, null, {
          default: withCtx(() => [
            createVNode(_component_a_checkbox, {
              checked: $setup.vModel.virtual,
              "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => $setup.vModel.virtual = $event),
              name: "virtual",
              onChange: $setup.onDataTypeChange
            }, {
              default: withCtx(() => [
                _hoisted_8$2
              ]),
              _: 1
            }, 8, ["checked", "onChange"])
          ]),
          _: 1
        })
      ])
    ])) : createCommentVNode("", true)
  ]);
}
var __nuxt_component_8$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
const _sfc_main$v = {};
const _hoisted_1$y = { class: "mt-4 mb-2" };
function _sfc_render$v(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$y);
}
var __nuxt_component_9$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "SelectOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    const { setAdditionalValidations } = useColumnCreateStoreOrThrow();
    let options = ref([]);
    const colorMenus = ref({});
    const colors = ref(enumColor.light);
    const inputs = ref();
    const validators = {
      "colOptions.options": [
        {
          validator: (_, _opt) => {
            return new Promise((resolve, reject) => {
              for (const opt of options.value) {
                if (!opt.title.length) {
                  return reject(new Error("Select options can't be null"));
                }
                if (vModel.value.uidt === UITypes.MultiSelect && opt.title.includes(",")) {
                  return reject(new Error("MultiSelect columns can't have commas(',')"));
                }
                if (options.value.filter((el) => el.title === opt.title).length !== 1) {
                  return reject(new Error("Select options can't have duplicates"));
                }
              }
              resolve();
            });
          }
        }
      ]
    };
    setAdditionalValidations({
      ...validators
    });
    const getNextColor = () => {
      let tempColor = colors.value[0];
      if (options.value.length && options.value[options.value.length - 1].color) {
        const lastColor = colors.value.indexOf(options.value[options.value.length - 1].color);
        tempColor = colors.value[(lastColor + 1) % colors.value.length];
      }
      return tempColor;
    };
    const addNewOption = () => {
      const tempOption = {
        title: "",
        color: getNextColor()
      };
      options.value.push(tempOption);
    };
    const removeOption = (index2) => {
      options.value.splice(index2, 1);
    };
    onMounted(() => {
      var _a;
      if (!((_a = vModel.value.colOptions) == null ? void 0 : _a.options)) {
        vModel.value.colOptions = {
          options: []
        };
      }
      options.value = vModel.value.colOptions.options;
      for (const op of options.value.filter((el) => el.order === null)) {
        op.title = op.title.replace(/^'/, "").replace(/'$/, "");
      }
    });
    watch(inputs, () => {
      var _a;
      if ((_a = inputs.value) == null ? void 0 : _a.$el) {
        inputs.value.$el.focus();
      }
    });
    const __returned__ = { props, emit, vModel, setAdditionalValidations, options, colorMenus, colors, inputs, validators, getNextColor, addNewOption, removeOption, Draggable, MdiDragIcon: __unplugin_components_4$6, MdiArrowDownDropCircle, MdiClose: __unplugin_components_5$2, MdiPlusIcon: MdiPlus };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$x = { class: "w-full" };
const _hoisted_2$q = { class: "flex py-1 items-center" };
const _hoisted_3$n = { class: "flex items-center" };
const _hoisted_4$9 = /* @__PURE__ */ createBaseVNode("span", { class: "flex-auto" }, "Add option", -1);
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GeneralColorPicker = __nuxt_component_0$2;
  const _component_a_dropdown = Dropdown;
  const _component_a_input = Input;
  const _component_a_button = Button;
  return openBlock(), createElementBlock("div", _hoisted_1$x, [
    createVNode($setup["Draggable"], {
      list: $setup.options,
      "item-key": "id",
      handle: ".nc-child-draggable-icon"
    }, {
      item: withCtx(({ element, index: index2 }) => [
        createBaseVNode("div", _hoisted_2$q, [
          createVNode($setup["MdiDragIcon"], {
            small: "",
            class: "nc-child-draggable-icon handle"
          }),
          createVNode(_component_a_dropdown, {
            visible: $setup.colorMenus[index2],
            "onUpdate:visible": ($event) => $setup.colorMenus[index2] = $event,
            trigger: ["click"]
          }, {
            overlay: withCtx(() => [
              createVNode(_component_GeneralColorPicker, {
                modelValue: element.color,
                "onUpdate:modelValue": [($event) => element.color = $event, ($event) => $setup.colorMenus[index2] = false],
                "pick-button": true
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            default: withCtx(() => [
              createVNode($setup["MdiArrowDownDropCircle"], {
                style: normalizeStyle({ "font-size": "1.5em", "color": element.color }),
                class: "mr-2"
              }, null, 8, ["style"])
            ]),
            _: 2
          }, 1032, ["visible", "onUpdate:visible"]),
          createVNode(_component_a_input, {
            ref: "inputs",
            value: element.title,
            "onUpdate:value": ($event) => element.title = $event,
            class: "caption"
          }, null, 8, ["value", "onUpdate:value"]),
          createVNode($setup["MdiClose"], {
            class: "ml-2",
            style: { color: "red" },
            onClick: ($event) => $setup.removeOption(index2)
          }, null, 8, ["onClick"])
        ])
      ]),
      footer: withCtx(() => [
        createVNode(_component_a_button, {
          type: "dashed",
          class: "w-full caption mt-2",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.addNewOption())
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3$n, [
              createVNode($setup["MdiPlusIcon"]),
              _hoisted_4$9
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["list"])
  ]);
}
var __nuxt_component_10$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u]]);
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "AdvancedOptions",
  props: {
    value: null
  },
  emits: ["update:value"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "value", emit);
    const { sqlUi } = useProject();
    const { onAlter, onDataTypeChange, validateInfos } = useColumnCreateStoreOrThrow();
    const dataTypes = computed(() => {
      var _a;
      return (_a = sqlUi == null ? void 0 : sqlUi.value) == null ? void 0 : _a.getDataTypeListForUiType(vModel.value, "");
    });
    vModel.value.rqd = !!vModel.value.rqd;
    vModel.value.pk = !!vModel.value.pk;
    vModel.value.un = !!vModel.value.un;
    vModel.value.ai = !!vModel.value.ai;
    vModel.value.au = !!vModel.value.au;
    const __returned__ = { props, emit, vModel, sqlUi, onAlter, onDataTypeChange, validateInfos, dataTypes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$w = { class: "p-4 border-[2px] radius-1 border-grey w-full flex flex-col gap-2" };
const _hoisted_2$p = { class: "flex justify-space-between" };
const _hoisted_3$m = { class: "text-gray-400 text-xs" };
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_checkbox = Checkbox;
  const _component_a_form_item = __unplugin_components_2$3;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  const _component_a_input = Input;
  const _component_a_textarea = __unplugin_components_13;
  return openBlock(), createElementBlock("div", _hoisted_1$w, [
    createBaseVNode("div", _hoisted_2$p, [
      createVNode(_component_a_form_item, { label: "NN" }, {
        default: withCtx(() => [
          createVNode(_component_a_checkbox, {
            checked: $setup.vModel.rqd,
            "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => $setup.vModel.rqd = $event),
            disabled: $setup.vModel.pk || !$setup.sqlUi.columnEditable($setup.vModel),
            class: "nc-column-checkbox-NN",
            onChange: $setup.onAlter
          }, null, 8, ["checked", "disabled", "onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_a_form_item, { label: "PK" }, {
        default: withCtx(() => [
          createVNode(_component_a_checkbox, {
            checked: $setup.vModel.pk,
            "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => $setup.vModel.pk = $event),
            disabled: !$setup.sqlUi.columnEditable($setup.vModel),
            class: "nc-column-checkbox-PK",
            onChange: $setup.onAlter
          }, null, 8, ["checked", "disabled", "onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_a_form_item, { label: "AI" }, {
        default: withCtx(() => [
          createVNode(_component_a_checkbox, {
            checked: $setup.vModel.ai,
            "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => $setup.vModel.ai = $event),
            disabled: $setup.sqlUi.colPropUNDisabled($setup.vModel) || !$setup.sqlUi.columnEditable($setup.vModel),
            class: "nc-column-checkbox-AI",
            onChange: $setup.onAlter
          }, null, 8, ["checked", "disabled", "onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_a_form_item, {
        label: "UN",
        disabled: $setup.sqlUi.colPropUNDisabled($setup.vModel) || !$setup.sqlUi.columnEditable($setup.vModel),
        onChange: $setup.onAlter
      }, {
        default: withCtx(() => [
          createVNode(_component_a_checkbox, {
            checked: $setup.vModel.un,
            "onUpdate:checked": _cache[3] || (_cache[3] = ($event) => $setup.vModel.un = $event),
            class: "nc-column-checkbox-UN"
          }, null, 8, ["checked"])
        ]),
        _: 1
      }, 8, ["disabled", "onChange"]),
      createVNode(_component_a_form_item, {
        label: "AU",
        disabled: $setup.sqlUi.colPropAuDisabled($setup.vModel) || !$setup.sqlUi.columnEditable($setup.vModel),
        onChange: $setup.onAlter
      }, {
        default: withCtx(() => [
          createVNode(_component_a_checkbox, {
            checked: $setup.vModel.au,
            "onUpdate:checked": _cache[4] || (_cache[4] = ($event) => $setup.vModel.au = $event),
            class: "nc-column-checkbox-AU"
          }, null, 8, ["checked"])
        ]),
        _: 1
      }, 8, ["disabled", "onChange"])
    ]),
    createVNode(_component_a_form_item, mergeProps({
      label: _ctx.$t("labels.databaseType")
    }, $setup.validateInfos.dt), {
      default: withCtx(() => [
        createVNode(_component_a_select, {
          value: $setup.vModel.dt,
          "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.vModel.dt = $event),
          onChange: $setup.onDataTypeChange
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.dataTypes, (type) => {
              return openBlock(), createBlock(_component_a_select_option, {
                key: type,
                value: type
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(type), 1)
                ]),
                _: 2
              }, 1032, ["value"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["value", "onChange"])
      ]),
      _: 1
    }, 16, ["label"]),
    createVNode(_component_a_form_item, {
      label: _ctx.$t("labels.lengthValue")
    }, {
      default: withCtx(() => [
        createVNode(_component_a_input, {
          value: $setup.vModel.dtxp,
          "onUpdate:value": _cache[6] || (_cache[6] = ($event) => $setup.vModel.dtxp = $event),
          disabled: $setup.sqlUi.getDefaultLengthIsDisabled($setup.vModel.dt) || !$setup.sqlUi.columnEditable($setup.vModel),
          onInput: $setup.onAlter
        }, null, 8, ["value", "disabled", "onInput"])
      ]),
      _: 1
    }, 8, ["label"]),
    $setup.sqlUi.showScale($setup.vModel) ? (openBlock(), createBlock(_component_a_form_item, {
      key: 0,
      label: "Scale"
    }, {
      default: withCtx(() => [
        createVNode(_component_a_input, {
          modelValue: $setup.vModel.dtxs,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.vModel.dtxs = $event),
          disabled: !$setup.sqlUi.columnEditable($setup.vModel),
          onInput: $setup.onAlter
        }, null, 8, ["modelValue", "disabled", "onInput"])
      ]),
      _: 1
    })) : createCommentVNode("", true),
    createVNode(_component_a_form_item, {
      label: _ctx.$t("placeholder.defaultValue")
    }, {
      default: withCtx(() => [
        createVNode(_component_a_textarea, {
          value: $setup.vModel.cdf,
          "onUpdate:value": _cache[8] || (_cache[8] = ($event) => $setup.vModel.cdf = $event),
          "auto-size": "",
          onInput: _cache[9] || (_cache[9] = ($event) => $setup.onAlter(2, true))
        }, null, 8, ["value"]),
        createBaseVNode("span", _hoisted_3$m, toDisplayString($setup.sqlUi.getDefaultValueForDatatype($setup.vModel.dt)), 1)
      ]),
      _: 1
    }, 8, ["label"])
  ]);
}
var __nuxt_component_11$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "EditOrAdd",
  emits: ["submit", "cancel"],
  setup(__props, { expose, emit }) {
    expose();
    const meta = inject(MetaInj);
    const { formState, generateNewColumnMeta, addOrUpdate, onAlter, onUidtOrIdTypeChange, validateInfos, isEdit } = useColumnCreateStoreOrThrow();
    const reloadDataTrigger = inject(ReloadViewDataHookInj);
    const advancedOptions = ref(false);
    const { getMeta } = useMetas();
    const editOrAddRef = ref();
    const columnToValidate = [UITypes.Email, UITypes.URL, UITypes.PhoneNumber];
    const onlyNameUpdateOnEditColumns = [UITypes.LinkToAnotherRecord, UITypes.Lookup, UITypes.Rollup];
    const uiTypesOptions = computed(() => {
      var _a, _b;
      return [
        ...uiTypes.filter((t) => !isEdit.value || !t.virtual),
        ...!isEdit.value && ((_b = (_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.every((c) => !c.pk)) ? [
          {
            name: UITypes.ID,
            icon: MdiIdentifierIcon,
            virtual: 0
          }
        ] : []
      ];
    });
    const reloadMetaAndData = async () => {
      await getMeta(meta == null ? void 0 : meta.value.id, true);
      reloadDataTrigger == null ? void 0 : reloadDataTrigger.trigger();
    };
    async function onSubmit() {
      await addOrUpdate(reloadMetaAndData);
      setTimeout(() => {
        advancedOptions.value = false;
      }, 500);
      emit("submit");
    }
    const antInput = ref();
    watchEffect(() => {
      if (antInput.value && formState.value) {
        setTimeout(() => {
          var _a, _b;
          (_a = antInput.value) == null ? void 0 : _a.focus();
          (_b = antInput.value) == null ? void 0 : _b.select();
        }, 300);
      }
      advancedOptions.value = false;
    });
    onMounted(() => {
      var _a;
      if (isEdit.value === false) {
        generateNewColumnMeta();
      }
      if (formState.value && !formState.value.column_name) {
        formState.value.column_name = (_a = formState.value) == null ? void 0 : _a.title;
      }
    });
    const handleClose = (e) => {
      const target = e.target;
      if (target && (editOrAddRef == null ? void 0 : editOrAddRef.value) && !editOrAddRef.value.contains(target) && !target.closest(".ant-dropdown") && !target.closest(".ant-select") && !target.closest(".ant-select-item")) {
        emit("cancel");
      }
    };
    useEventListener(document, "click", handleClose);
    const __returned__ = { emit, meta, formState, generateNewColumnMeta, addOrUpdate, onAlter, onUidtOrIdTypeChange, validateInfos, isEdit, reloadDataTrigger, advancedOptions, getMeta, editOrAddRef, columnToValidate, onlyNameUpdateOnEditColumns, uiTypesOptions, reloadMetaAndData, onSubmit, antInput, handleClose, UITypes, isVirtualCol, MdiPlusIcon, MdiMinusIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$v = { class: "flex flex-col gap-2" };
const _hoisted_2$o = { class: "flex gap-1 items-center" };
const _hoisted_3$l = { class: "text-[10px] text-gray-600" };
const _hoisted_4$8 = { class: "flex justify-end gap-1 mt-4" };
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2$3;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  const _component_SmartsheetColumnFormulaOptions = __nuxt_component_0$3;
  const _component_SmartsheetColumnCurrencyOptions = __nuxt_component_1$2;
  const _component_SmartsheetColumnDurationOptions = __nuxt_component_2$3;
  const _component_SmartsheetColumnRatingOptions = __nuxt_component_3$2;
  const _component_SmartsheetColumnCheckboxOptions = __nuxt_component_4$2;
  const _component_SmartsheetColumnLookupOptions = __nuxt_component_5$1;
  const _component_SmartsheetColumnDateOptions = __nuxt_component_6$1;
  const _component_SmartsheetColumnRollupOptions = __nuxt_component_7$1;
  const _component_SmartsheetColumnLinkedToAnotherRecordOptions = __nuxt_component_8$1;
  const _component_SmartsheetColumnSpecificDBTypeOptions = __nuxt_component_9$1;
  const _component_SmartsheetColumnSelectOptions = __nuxt_component_10$1;
  const _component_a_checkbox = Checkbox;
  const _component_SmartsheetColumnAdvancedOptions = __nuxt_component_11$1;
  const _component_a_button = Button;
  const _component_a_form = Form;
  return openBlock(), createElementBlock("div", {
    ref: "editOrAddRef",
    class: normalizeClass(["w-[400px] max-h-[95vh] bg-gray-50 shadow-lg p-6 overflow-auto !border", { "!w-[600px]": $setup.formState.uidt === $setup.UITypes.Formula }]),
    onClick: _cache[18] || (_cache[18] = withModifiers(() => {
    }, ["stop"]))
  }, [
    $setup.formState ? (openBlock(), createBlock(_component_a_form, {
      key: 0,
      modelValue: $setup.formState,
      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.formState = $event),
      name: "column-create-or-edit",
      layout: "vertical"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$v, [
          createVNode(_component_a_form_item, mergeProps({
            label: _ctx.$t("labels.columnName")
          }, $setup.validateInfos.title), {
            default: withCtx(() => [
              createVNode(_component_a_input, {
                ref: "antInput",
                value: $setup.formState.title,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.formState.title = $event),
                class: "nc-column-name-input",
                onInput: _cache[1] || (_cache[1] = ($event) => $setup.onAlter(8))
              }, null, 8, ["value"])
            ]),
            _: 1
          }, 16, ["label"]),
          !($setup.isEdit && !!$setup.onlyNameUpdateOnEditColumns.find((col) => col === $setup.formState.uidt)) ? (openBlock(), createBlock(_component_a_form_item, {
            key: 0,
            label: _ctx.$t("labels.columnType")
          }, {
            default: withCtx(() => [
              createVNode(_component_a_select, {
                value: $setup.formState.uidt,
                "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.formState.uidt = $event),
                "show-search": "",
                class: "nc-column-type-input",
                onChange: $setup.onUidtOrIdTypeChange
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.uiTypesOptions, (opt) => {
                    return openBlock(), createBlock(_component_a_select_option, mergeProps({
                      key: opt.name,
                      value: opt.name
                    }, $setup.validateInfos.uidt), {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_2$o, [
                          (openBlock(), createBlock(resolveDynamicComponent(opt.icon), { class: "text-grey" })),
                          createTextVNode(" " + toDisplayString(opt.name), 1)
                        ])
                      ]),
                      _: 2
                    }, 1040, ["value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["value", "onChange"])
            ]),
            _: 1
          }, 8, ["label"])) : createCommentVNode("", true),
          $setup.formState.uidt === $setup.UITypes.Formula ? (openBlock(), createBlock(_component_SmartsheetColumnFormulaOptions, {
            key: 1,
            value: $setup.formState,
            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          $setup.formState.uidt === $setup.UITypes.Currency ? (openBlock(), createBlock(_component_SmartsheetColumnCurrencyOptions, {
            key: 2,
            value: $setup.formState,
            "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          $setup.formState.uidt === $setup.UITypes.Duration ? (openBlock(), createBlock(_component_SmartsheetColumnDurationOptions, {
            key: 3,
            value: $setup.formState,
            "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          $setup.formState.uidt === $setup.UITypes.Rating ? (openBlock(), createBlock(_component_SmartsheetColumnRatingOptions, {
            key: 4,
            value: $setup.formState,
            "onUpdate:value": _cache[6] || (_cache[6] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          $setup.formState.uidt === $setup.UITypes.Checkbox ? (openBlock(), createBlock(_component_SmartsheetColumnCheckboxOptions, {
            key: 5,
            value: $setup.formState,
            "onUpdate:value": _cache[7] || (_cache[7] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          !$setup.isEdit && $setup.formState.uidt === $setup.UITypes.Lookup ? (openBlock(), createBlock(_component_SmartsheetColumnLookupOptions, {
            key: 6,
            value: $setup.formState,
            "onUpdate:value": _cache[8] || (_cache[8] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          $setup.formState.uidt === $setup.UITypes.Date ? (openBlock(), createBlock(_component_SmartsheetColumnDateOptions, {
            key: 7,
            value: $setup.formState,
            "onUpdate:value": _cache[9] || (_cache[9] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          !$setup.isEdit && $setup.formState.uidt === $setup.UITypes.Rollup ? (openBlock(), createBlock(_component_SmartsheetColumnRollupOptions, {
            key: 8,
            value: $setup.formState,
            "onUpdate:value": _cache[10] || (_cache[10] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          !$setup.isEdit && $setup.formState.uidt === $setup.UITypes.LinkToAnotherRecord ? (openBlock(), createBlock(_component_SmartsheetColumnLinkedToAnotherRecordOptions, {
            key: 9,
            value: $setup.formState,
            "onUpdate:value": _cache[11] || (_cache[11] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          $setup.formState.uidt === $setup.UITypes.SpecificDBType ? (openBlock(), createBlock(_component_SmartsheetColumnSpecificDBTypeOptions, { key: 10 })) : createCommentVNode("", true),
          $setup.formState.uidt === $setup.UITypes.SingleSelect || $setup.formState.uidt === $setup.UITypes.MultiSelect ? (openBlock(), createBlock(_component_SmartsheetColumnSelectOptions, {
            key: 11,
            value: $setup.formState,
            "onUpdate:value": _cache[12] || (_cache[12] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true)
        ]),
        !$setup.isVirtualCol($setup.formState.uidt) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "text-xs cursor-pointer text-grey nc-more-options mb-1 mt-4 flex items-center gap-1 justify-end",
          onClick: _cache[13] || (_cache[13] = ($event) => $setup.advancedOptions = !$setup.advancedOptions)
        }, [
          createTextVNode(toDisplayString($setup.advancedOptions ? _ctx.$t("general.hideAll") : _ctx.$t("general.showMore")) + " ", 1),
          (openBlock(), createBlock(resolveDynamicComponent($setup.advancedOptions ? $setup.MdiMinusIcon : $setup.MdiPlusIcon)))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(["overflow-hidden", $setup.advancedOptions ? "h-min mb-2" : "h-0"])
        }, [
          $setup.formState.meta && $setup.columnToValidate.includes($setup.formState.uidt) ? (openBlock(), createBlock(_component_a_checkbox, {
            key: 0,
            checked: $setup.formState.meta.validate,
            "onUpdate:checked": _cache[14] || (_cache[14] = ($event) => $setup.formState.meta.validate = $event),
            class: "ml-1 mb-1"
          }, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_3$l, toDisplayString(`Accept only valid ${$setup.formState.uidt}`), 1)
            ]),
            _: 1
          }, 8, ["checked"])) : createCommentVNode("", true),
          createVNode(_component_SmartsheetColumnAdvancedOptions, {
            value: $setup.formState,
            "onUpdate:value": _cache[15] || (_cache[15] = ($event) => $setup.formState = $event)
          }, null, 8, ["value"])
        ], 2),
        createVNode(_component_a_form_item, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_4$8, [
              createVNode(_component_a_button, {
                "html-type": "button",
                onClick: _cache[16] || (_cache[16] = ($event) => $setup.emit("cancel"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("general.cancel")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_button, {
                "html-type": "submit",
                type: "primary",
                onClick: withModifiers($setup.onSubmit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("general.save")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])) : createCommentVNode("", true)
  ], 2);
}
var __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s], ["__scopeId", "data-v-c128b8cc"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "EditOrAddProvider",
  props: {
    column: null
  },
  emits: ["submit", "cancel"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const meta = inject(MetaInj);
    if (props == null ? void 0 : props.column) {
      const column = toRef(props, "column");
      useProvideColumnCreateStore(meta, column);
    } else {
      useProvideColumnCreateStore(meta);
    }
    const __returned__ = { props, emit, meta };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SmartsheetColumnEditOrAdd = __nuxt_component_0$1;
  return openBlock(), createBlock(_component_SmartsheetColumnEditOrAdd, {
    onSubmit: _cache[0] || (_cache[0] = ($event) => $setup.emit("submit")),
    onCancel: _cache[1] || (_cache[1] = ($event) => $setup.emit("cancel"))
  });
}
var __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VirtualCell",
  props: {
    column: null,
    hideMenu: { type: Boolean },
    required: { type: Boolean }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const column = toRef(props, "column");
    const hideMenu = toRef(props, "hideMenu");
    const editColumnDropdown = ref(false);
    provide(ColumnInj, column);
    const { metas } = useMetas();
    const { isUIAllowed } = useUIPermission();
    const meta = inject(MetaInj);
    const isForm = inject(IsFormInj, ref(false));
    const { isLookup, isBt, isRollup, isMm, isHm, isFormula } = useVirtualCell(column);
    const colOptions = computed(() => {
      var _a;
      return (_a = column.value) == null ? void 0 : _a.colOptions;
    });
    const tableTile = computed(() => {
      var _a;
      return (_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.title;
    });
    const relationColumnOptions = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      if (isMm.value || isHm.value || isBt.value) {
        return (_a = column.value) == null ? void 0 : _a.colOptions;
      } else if ((_c = (_b = column == null ? void 0 : column.value) == null ? void 0 : _b.colOptions) == null ? void 0 : _c.fk_relation_column_id) {
        return (_f = (_e = (_d = meta == null ? void 0 : meta.value) == null ? void 0 : _d.columns) == null ? void 0 : _e.find((c) => {
          var _a2, _b2;
          return c.id === ((_b2 = (_a2 = column == null ? void 0 : column.value) == null ? void 0 : _a2.colOptions) == null ? void 0 : _b2.fk_relation_column_id);
        })) == null ? void 0 : _f.colOptions;
      }
      return null;
    });
    const relatedTableMeta = computed(() => {
      var _a, _b, _c;
      return ((_a = relationColumnOptions.value) == null ? void 0 : _a.fk_related_model_id) && ((_c = metas.value) == null ? void 0 : _c[(_b = relationColumnOptions.value) == null ? void 0 : _b.fk_related_model_id]);
    });
    const relatedTableTitle = computed(() => {
      var _a;
      return (_a = relatedTableMeta.value) == null ? void 0 : _a.title;
    });
    const childColumn = computed(() => {
      var _a, _b, _c;
      if ((_a = relatedTableMeta.value) == null ? void 0 : _a.columns) {
        if (isRollup.value) {
          return (_b = relatedTableMeta.value) == null ? void 0 : _b.columns.find((c) => c.id === colOptions.value.fk_rollup_column_id);
        }
        if (isLookup.value) {
          return (_c = relatedTableMeta.value) == null ? void 0 : _c.columns.find((c) => c.id === colOptions.value.fk_lookup_column_id);
        }
      }
      return "";
    });
    const tooltipMsg = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      if (!column.value) {
        return "";
      }
      if (isHm.value) {
        return `'${tableTile.value}' has many '${relatedTableTitle.value}'`;
      } else if (isMm.value) {
        return `'${tableTile.value}' & '${relatedTableTitle.value}' have many to many relation`;
      } else if (isBt.value) {
        return `'${(_a = column == null ? void 0 : column.value) == null ? void 0 : _a.title}' belongs to '${relatedTableTitle.value}'`;
      } else if (isLookup.value) {
        return `'${childColumn.value.title}' from '${relatedTableTitle.value}' (${childColumn.value.uidt})`;
      } else if (isFormula.value) {
        const formula = substituteColumnIdWithAliasInFormula((_c = (_b = column.value) == null ? void 0 : _b.colOptions) == null ? void 0 : _c.formula, (_d = meta == null ? void 0 : meta.value) == null ? void 0 : _d.columns, (_f = (_e = column.value) == null ? void 0 : _e.colOptions) == null ? void 0 : _f.formula_raw);
        return `Formula - ${formula}`;
      } else if (isRollup.value) {
        return `'${childColumn.value.title}' of '${relatedTableTitle.value}' (${childColumn.value.uidt})`;
      }
      return "";
    });
    function onVisibleChange() {
      editColumnDropdown.value = true;
    }
    const __returned__ = { props, column, hideMenu, editColumnDropdown, metas, isUIAllowed, meta, isForm, isLookup, isBt, isRollup, isMm, isHm, isFormula, colOptions, tableTile, relationColumnOptions, relatedTableMeta, relatedTableTitle, childColumn, tooltipMsg, onVisibleChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId$2 = (n) => (pushScopeId("data-v-0b2d2d54"), n = n(), popScopeId(), n);
const _hoisted_1$u = ["title"];
const _hoisted_2$n = {
  key: 1,
  class: "text-red-500"
};
const _hoisted_3$k = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_4$7 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SmartsheetHeaderVirtualCellIcon = __nuxt_component_0$5;
  const _component_a_tooltip = __unplugin_components_1$4;
  const _component_SmartsheetHeaderMenu = __nuxt_component_1$3;
  const _component_SmartsheetColumnEditOrAddProvider = __nuxt_component_2$2;
  const _component_a_dropdown = Dropdown;
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["flex items-center w-full text-xs text-gray-500 font-weight-medium", { "h-full": $setup.column }])
  }, [
    $setup.column ? (openBlock(), createBlock(_component_SmartsheetHeaderVirtualCellIcon, { key: 0 })) : createCommentVNode("", true),
    createVNode(_component_a_tooltip, { placement: "bottom" }, {
      title: withCtx(() => [
        createTextVNode(toDisplayString($setup.tooltipMsg), 1)
      ]),
      default: withCtx(() => [
        createBaseVNode("span", {
          class: "name",
          style: { "white-space": "nowrap" },
          title: $setup.column.title
        }, toDisplayString($setup.column.title), 9, _hoisted_1$u)
      ]),
      _: 1
    }),
    $setup.column.rqd || $props.required ? (openBlock(), createElementBlock("span", _hoisted_2$n, "\xA0*")) : createCommentVNode("", true),
    !$setup.hideMenu ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      _hoisted_3$k,
      !$setup.isForm && $setup.isUIAllowed("edit-column") ? (openBlock(), createBlock(_component_SmartsheetHeaderMenu, {
        key: 0,
        virtual: true,
        onEdit: _cache[0] || (_cache[0] = ($event) => $setup.editColumnDropdown = true)
      })) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true),
    createVNode(_component_a_dropdown, {
      visible: $setup.editColumnDropdown,
      "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => $setup.editColumnDropdown = $event),
      class: "h-full",
      trigger: ["click"],
      placement: "bottomRight",
      onVisibleChange: $setup.onVisibleChange
    }, {
      overlay: withCtx(() => [
        $setup.editColumnDropdown ? (openBlock(), createBlock(_component_SmartsheetColumnEditOrAddProvider, {
          key: 0,
          column: $setup.column,
          class: "w-full",
          onSubmit: _cache[1] || (_cache[1] = ($event) => $setup.editColumnDropdown = false),
          onCancel: _cache[2] || (_cache[2] = ($event) => $setup.editColumnDropdown = false),
          onClick: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"])),
          onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["stop"]))
        }, null, 8, ["column"])) : createCommentVNode("", true)
      ]),
      default: withCtx(() => [
        _hoisted_4$7
      ]),
      _: 1
    }, 8, ["visible"])
  ], 2);
}
var __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q], ["__scopeId", "data-v-0b2d2d54"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "Cell",
  props: {
    column: null,
    required: { type: Boolean },
    hideMenu: { type: Boolean }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const hideMenu = toRef(props, "hideMenu");
    const isForm = inject(IsFormInj, ref(false));
    const column = toRef(props, "column");
    const { isUIAllowed } = useUIPermission();
    provide(ColumnInj, column);
    const editColumnDropdown = ref(false);
    function onVisibleChange() {
      editColumnDropdown.value = true;
    }
    const __returned__ = { props, hideMenu, isForm, column, isUIAllowed, editColumnDropdown, onVisibleChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-631cb8e4"), n = n(), popScopeId(), n);
const _hoisted_1$t = ["title"];
const _hoisted_2$m = {
  key: 2,
  class: "text-red-500"
};
const _hoisted_3$j = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_4$6 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SmartsheetHeaderCellIcon = __nuxt_component_0$4;
  const _component_SmartsheetHeaderMenu = __nuxt_component_1$3;
  const _component_SmartsheetColumnEditOrAddProvider = __nuxt_component_2$2;
  const _component_a_dropdown = Dropdown;
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["flex items-center w-full text-xs text-normal text-gray-500 font-weight-medium", { "h-full": $setup.column }])
  }, [
    $setup.column ? (openBlock(), createBlock(_component_SmartsheetHeaderCellIcon, { key: 0 })) : createCommentVNode("", true),
    $setup.column ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: "name",
      style: { "white-space": "nowrap" },
      title: $setup.column.title
    }, toDisplayString($setup.column.title), 9, _hoisted_1$t)) : createCommentVNode("", true),
    $setup.column.rqd && !$setup.column.cdf || $props.required ? (openBlock(), createElementBlock("span", _hoisted_2$m, "\xA0*")) : createCommentVNode("", true),
    !$setup.hideMenu ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      _hoisted_3$j,
      !$setup.isForm && $setup.isUIAllowed("edit-column") ? (openBlock(), createBlock(_component_SmartsheetHeaderMenu, {
        key: 0,
        onEdit: _cache[0] || (_cache[0] = ($event) => $setup.editColumnDropdown = true)
      })) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true),
    createVNode(_component_a_dropdown, {
      visible: $setup.editColumnDropdown,
      "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => $setup.editColumnDropdown = $event),
      class: "h-full",
      trigger: ["click"],
      placement: "bottomRight",
      onVisibleChange: $setup.onVisibleChange
    }, {
      overlay: withCtx(() => [
        $setup.editColumnDropdown ? (openBlock(), createBlock(_component_SmartsheetColumnEditOrAddProvider, {
          key: 0,
          column: $setup.column,
          class: "w-full",
          onSubmit: _cache[1] || (_cache[1] = ($event) => $setup.editColumnDropdown = false),
          onCancel: _cache[2] || (_cache[2] = ($event) => $setup.editColumnDropdown = false),
          onClick: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"])),
          onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["stop"]))
        }, null, 8, ["column"])) : createCommentVNode("", true)
      ]),
      default: withCtx(() => [
        _hoisted_4$6
      ]),
      _: 1
    }, 8, ["visible"])
  ], 2);
}
var __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p], ["__scopeId", "data-v-631cb8e4"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VirtualCell",
  props: {
    column: null,
    modelValue: null,
    row: null,
    active: { type: Boolean }
  },
  emits: ["update:modelValue", "navigate"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const HasMany = defineAsyncComponent(() => __vitePreload(() => import("./HasMany-79662a30.mjs"), true ? ["HasMany-79662a30.mjs","HasMany.8de83f26.css","entry-61ceea7f.mjs","entry.05e9f68d.css","plus-15c52e39.mjs","index-2b41c829.mjs","index-c79a04bb.mjs","useLTARStore-f0967bf9.mjs","index-3e429aeb.mjs","Modal-d5a36a0f.mjs","omit-173fd1c5.mjs","pickAttrs-ba132318.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs","useVirtualCell-c8c479be.mjs","deepCompare-c3a57270.mjs","dropdown-ba657059.mjs","Dropdown-9f66da27.mjs","RightOutlined-4a9f51db.mjs","delete-outline-e19db0b9.mjs","menu-down-57034c65.mjs","index-1f166877.mjs","isNumeric-1b2178ad.mjs","TextArea-4c687bd9.mjs","Input-081ff014.mjs","antInputDirective-04640d14.mjs","Card-637b0d8a.mjs","index-7349112e.mjs","TabPane-12ca446e.mjs","useState-068748ba.mjs","star-outline-35a0d043.mjs","index-ae866fde.mjs","index-0b1576d7.mjs","LeftOutlined-f246f0cb.mjs","index-3935e1b2.mjs","SearchOutlined-66b33d9a.mjs","CollapsePanel-3cbe710e.mjs","minus-circle-outline-fe5ab5b7.mjs","Checkbox-99b125b8.mjs","close-f98de9d8.mjs","file-copy-outline-b0187a2b.mjs","reload-23e1ac74.mjs","fileUtils-f5868683.mjs","index-c5e00eea.mjs"] : void 0));
    const ManyToMany = defineAsyncComponent(() => __vitePreload(() => import("./ManyToMany-1a0e8272.mjs"), true ? ["ManyToMany-1a0e8272.mjs","ManyToMany.75bf82f2.css","entry-61ceea7f.mjs","entry.05e9f68d.css","plus-15c52e39.mjs","index-2b41c829.mjs","index-c79a04bb.mjs","useLTARStore-f0967bf9.mjs","index-3e429aeb.mjs","Modal-d5a36a0f.mjs","omit-173fd1c5.mjs","pickAttrs-ba132318.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs","useVirtualCell-c8c479be.mjs","deepCompare-c3a57270.mjs","dropdown-ba657059.mjs","Dropdown-9f66da27.mjs","RightOutlined-4a9f51db.mjs","delete-outline-e19db0b9.mjs","menu-down-57034c65.mjs","index-1f166877.mjs","isNumeric-1b2178ad.mjs","TextArea-4c687bd9.mjs","Input-081ff014.mjs","antInputDirective-04640d14.mjs","Card-637b0d8a.mjs","index-7349112e.mjs","TabPane-12ca446e.mjs","useState-068748ba.mjs","star-outline-35a0d043.mjs","index-ae866fde.mjs","index-0b1576d7.mjs","LeftOutlined-f246f0cb.mjs","index-3935e1b2.mjs","SearchOutlined-66b33d9a.mjs","CollapsePanel-3cbe710e.mjs","minus-circle-outline-fe5ab5b7.mjs","Checkbox-99b125b8.mjs","close-f98de9d8.mjs","file-copy-outline-b0187a2b.mjs","reload-23e1ac74.mjs","fileUtils-f5868683.mjs","index-c5e00eea.mjs"] : void 0));
    const BelongsTo = defineAsyncComponent(() => __vitePreload(() => import("./BelongsTo-a4025f8a.mjs"), true ? ["BelongsTo-a4025f8a.mjs","BelongsTo.0969c5a7.css","entry-61ceea7f.mjs","entry.05e9f68d.css","index-c79a04bb.mjs","index-2b41c829.mjs","useLTARStore-f0967bf9.mjs","index-3e429aeb.mjs","Modal-d5a36a0f.mjs","omit-173fd1c5.mjs","pickAttrs-ba132318.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs","useVirtualCell-c8c479be.mjs","deepCompare-c3a57270.mjs","plus-15c52e39.mjs","dropdown-ba657059.mjs","Dropdown-9f66da27.mjs","RightOutlined-4a9f51db.mjs","delete-outline-e19db0b9.mjs","menu-down-57034c65.mjs","index-1f166877.mjs","isNumeric-1b2178ad.mjs","TextArea-4c687bd9.mjs","Input-081ff014.mjs","antInputDirective-04640d14.mjs","Card-637b0d8a.mjs","index-7349112e.mjs","TabPane-12ca446e.mjs","useState-068748ba.mjs","star-outline-35a0d043.mjs","index-ae866fde.mjs","index-0b1576d7.mjs","LeftOutlined-f246f0cb.mjs","index-3935e1b2.mjs","SearchOutlined-66b33d9a.mjs","CollapsePanel-3cbe710e.mjs","minus-circle-outline-fe5ab5b7.mjs","Checkbox-99b125b8.mjs","close-f98de9d8.mjs","file-copy-outline-b0187a2b.mjs","reload-23e1ac74.mjs","fileUtils-f5868683.mjs","index-c5e00eea.mjs"] : void 0));
    const Rollup = defineAsyncComponent(() => __vitePreload(() => import("./Rollup-c7beb502.mjs"), true ? ["Rollup-c7beb502.mjs","entry-61ceea7f.mjs","entry.05e9f68d.css","index-c79a04bb.mjs"] : void 0));
    const Formula = defineAsyncComponent(() => __vitePreload(() => import("./Formula-616669e3.mjs"), true ? ["Formula-616669e3.mjs","entry-61ceea7f.mjs","entry.05e9f68d.css","index-1f166877.mjs","index-c79a04bb.mjs"] : void 0));
    const Count = defineAsyncComponent(() => __vitePreload(() => import("./Count-d28a0a28.mjs"), true ? ["Count-d28a0a28.mjs","entry-61ceea7f.mjs","entry.05e9f68d.css"] : void 0));
    const Lookup = defineAsyncComponent(() => __vitePreload(() => import("./Lookup-cd9501e3.mjs"), true ? ["Lookup-cd9501e3.mjs","entry-61ceea7f.mjs","entry.05e9f68d.css","index-c79a04bb.mjs","useVirtualCell-c8c479be.mjs","deepCompare-c3a57270.mjs","index-2b41c829.mjs","dropdown-ba657059.mjs","Dropdown-9f66da27.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs","RightOutlined-4a9f51db.mjs","omit-173fd1c5.mjs","delete-outline-e19db0b9.mjs","menu-down-57034c65.mjs","Modal-d5a36a0f.mjs","pickAttrs-ba132318.mjs","index-1f166877.mjs","isNumeric-1b2178ad.mjs","TextArea-4c687bd9.mjs","Input-081ff014.mjs","antInputDirective-04640d14.mjs","Card-637b0d8a.mjs","index-7349112e.mjs","TabPane-12ca446e.mjs","useState-068748ba.mjs","star-outline-35a0d043.mjs","index-ae866fde.mjs","index-0b1576d7.mjs","LeftOutlined-f246f0cb.mjs","index-3935e1b2.mjs","SearchOutlined-66b33d9a.mjs","CollapsePanel-3cbe710e.mjs","minus-circle-outline-fe5ab5b7.mjs","Checkbox-99b125b8.mjs","close-f98de9d8.mjs","plus-15c52e39.mjs","file-copy-outline-b0187a2b.mjs","reload-23e1ac74.mjs","fileUtils-f5868683.mjs","index-c5e00eea.mjs"] : void 0));
    const column = toRef(props, "column");
    const active = toRef(props, "active", false);
    const row = toRef(props, "row");
    provide(ColumnInj, column);
    provide(ActiveCellInj, active);
    provide(RowInj, row);
    provide(CellValueInj, toRef(props, "modelValue"));
    const { isLookup, isBt, isRollup, isMm, isHm, isFormula, isCount } = useVirtualCell(column);
    const __returned__ = { props, emit, HasMany, ManyToMany, BelongsTo, Rollup, Formula, Count, Lookup, column, active, row, isLookup, isBt, isRollup, isMm, isHm, isFormula, isCount, NavigateDir };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "nc-virtual-cell w-full",
    onKeydown: [
      _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => $setup.emit("navigate", $setup.NavigateDir.NEXT), ["stop", "exact"]), ["enter"])),
      _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => $setup.emit("navigate", $setup.NavigateDir.PREV), ["stop", "shift", "exact"]), ["enter"]))
    ]
  }, [
    $setup.isHm ? (openBlock(), createBlock($setup["HasMany"], { key: 0 })) : $setup.isMm ? (openBlock(), createBlock($setup["ManyToMany"], { key: 1 })) : $setup.isBt ? (openBlock(), createBlock($setup["BelongsTo"], { key: 2 })) : $setup.isRollup ? (openBlock(), createBlock($setup["Rollup"], { key: 3 })) : $setup.isFormula ? (openBlock(), createBlock($setup["Formula"], { key: 4 })) : $setup.isCount ? (openBlock(), createBlock($setup["Count"], { key: 5 })) : $setup.isLookup ? (openBlock(), createBlock($setup["Lookup"], { key: 6 })) : createCommentVNode("", true)
  ], 32);
}
var __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "TextArea",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const editEnabled = inject(EditModeInj);
    const vModel = computed({
      get: () => {
        var _a;
        return (_a = __props.modelValue) != null ? _a : "";
      },
      set: (value) => emits("update:modelValue", value)
    });
    const focus = (el) => el == null ? void 0 : el.focus();
    const __returned__ = { emits, editEnabled, vModel, focus };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$s = { key: 1 };
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.editEnabled ? withDirectives((openBlock(), createElementBlock("textarea", {
    key: 0,
    ref: $setup.focus,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event),
    rows: "4",
    class: "h-full w-full min-h-[60px] outline-none",
    onBlur: _cache[1] || (_cache[1] = ($event) => $setup.editEnabled = false),
    onKeydown: [
      _cache[2] || (_cache[2] = withKeys(withModifiers(() => {
      }, ["alt", "stop"]), ["enter"])),
      _cache[3] || (_cache[3] = withKeys(withModifiers(() => {
      }, ["shift", "stop"]), ["enter"]))
    ]
  }, null, 544)), [
    [vModelText, $setup.vModel]
  ]) : (openBlock(), createElementBlock("span", _hoisted_1$s, toDisplayString($setup.vModel), 1));
}
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  props: {
    modelValue: { type: [Boolean, null, Number] }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    let vModel = useVModel(props, "modelValue", emits);
    const column = inject(ColumnInj);
    const isForm = inject(IsFormInj);
    const readOnly = inject(ReadonlyInj);
    const checkboxMeta = computed(() => {
      var _a;
      return {
        icon: {
          checked: "mdi-check-circle-outline",
          unchecked: "mdi-checkbox-blank-circle-outline"
        },
        color: "primary",
        ...((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.meta) || {}
      };
    });
    function onClick() {
      if (!readOnly) {
        vModel.value = !vModel.value;
      }
    }
    const __returned__ = { props, emits, vModel, column, isForm, readOnly, checkboxMeta, onClick, getMdiIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["flex", { "justify-center": !$setup.isForm, "nc-cell-hover-show": !$setup.vModel && !$setup.readOnly, "opacity-0": $setup.readOnly && !$setup.vModel }])
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["px-1 pt-1 rounded-full items-center", { "bg-gray-100": !$setup.vModel }]),
      onClick: $setup.onClick
    }, [
      (openBlock(), createBlock(resolveDynamicComponent($setup.getMdiIcon($setup.vModel ? $setup.checkboxMeta.icon.checked : $setup.checkboxMeta.icon.unchecked)), {
        style: normalizeStyle({
          color: $setup.checkboxMeta.color
        })
      }, null, 8, ["style"]))
    ], 2)
  ], 2);
}
var __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m], ["__scopeId", "data-v-5bb9ac39"]]);
const _hoisted_1$r = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$l = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M10 21v-2H6.41l4.5-4.5l-1.41-1.41l-4.5 4.5V14H3v7h7m4.5-10.09l4.5-4.5V10h2V3h-7v2h3.59l-4.5 4.5l1.41 1.41Z"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$l
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, _hoisted_3$i);
}
var MdiArrowExpand = { name: "mdi-arrow-expand", render: render$c };
const _hoisted_1$q = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$k = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$k
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_3$h);
}
var __unplugin_components_4 = { name: "ic-outline-insert-drive-file", render: render$b };
const _hoisted_1$p = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$j = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825Q8.35 2 10 2q1.65 0 2.825 1.175Q14 4.35 14 6v9.5q0 1.05-.725 1.775Q12.55 18 11.5 18q-1.05 0-1.775-.725Q9 16.55 9 15.5V6h1.5v9.5q0 .425.288.712q.287.288.712.288t.713-.288q.287-.287.287-.712V6q0-1.05-.725-1.775Q11.05 3.5 10 3.5q-1.05 0-1.775.725Q7.5 4.95 7.5 6v10.5q0 1.65 1.175 2.825Q9.85 20.5 11.5 20.5q1.65 0 2.825-1.175Q15.5 18.15 15.5 16.5V6H17v10.5q0 2.3-1.6 3.9T11.5 22Z"
}, null, -1);
const _hoisted_3$g = [
  _hoisted_2$j
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_3$g);
}
var __unplugin_components_2$1 = { name: "material-symbols-attach-file", render: render$a };
const _hoisted_1$o = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$i = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9.5 8.5c0 .8-.7 1.5-1.5 1.5H7v2H5.5V9H8c.8 0 1.5.7 1.5 1.5v1m5 2c0 .8-.7 1.5-1.5 1.5h-2.5V9H13c.8 0 1.5.7 1.5 1.5v3m4-3H17v1h1.5V13H17v2h-1.5V9h3v1.5m-6.5 0h1v3h-1v-3m-5 0h1v1H7v-1Z"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$i
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_3$f);
}
var MdiPdfBox = { name: "mdi-pdf-box", render: render$9 };
const _hoisted_1$n = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$h = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6m4 18H6V4h7v5h5v11m-.65-10l-2.1 9h-1.4l-1.8-6.79l-1.8 6.79h-1.4l-2.2-9h1.5l1.4 6.81l1.8-6.81h1.3l1.8 6.81l1.4-6.81h1.5Z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$h
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_3$e);
}
var MdiFileWordOutline = { name: "mdi-file-word-outline", render: render$8 };
const _hoisted_1$m = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$g = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M9.8 13.4h2.5c1.5 0 2.16-.28 2.8-.82c.64-.55.9-1.33.9-2.35c0-.97-.25-1.73-.9-2.35c-.65-.59-1.27-.88-2.8-.88H8v10h1.8v-3.6M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-9.2 9V8.4h2.3c.66 0 1.17.25 1.5.6c.33.35.5.72.5 1.24c0 .56-.18.95-.5 1.26c-.32.31-.7.5-1.38.5H9.8Z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$g
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$d);
}
var MdiFilePowerpointBox = { name: "mdi-file-powerpoint-box", render: render$7 };
const _hoisted_1$l = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6m4 18H6V4h7v5h5v11m-5.1-5.5l2.9 4.5H14l-2-3.4l-2 3.4H8.2l2.9-4.5L8.2 10H10l2 3.4l2-3.4h1.8l-2.9 4.5Z"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$f
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$c);
}
var MdiFileExcelOutline = { name: "mdi-file-excel-outline", render: render$6 };
const [useProvideAttachmentCell, useAttachmentCell] = useInjectionState((updateModelValue) => {
  const isReadonly = inject(ReadonlyInj, false);
  const isPublic = inject(IsPublicInj, ref(false));
  const meta = inject(MetaInj);
  const column = inject(ColumnInj);
  const editEnabled = inject(EditModeInj, ref(false));
  const storedFiles = ref([]);
  const attachments = ref([]);
  const modalVisible = ref(false);
  const selectedImage = ref();
  const { project } = useProject();
  const { api, isLoading } = useApi();
  const { files, open } = useFileDialog();
  function removeFile(i) {
    if (isPublic.value) {
      storedFiles.value.splice(i, 1);
      updateModelValue(storedFiles.value.map((stored) => stored.file));
    } else {
      attachments.value.splice(i, 1);
      updateModelValue(attachments.value);
    }
  }
  async function onFileSelect(selectedFiles) {
    if (!selectedFiles.length)
      return;
    if (isPublic.value) {
      storedFiles.value.push(...await Promise.all(Array.from(selectedFiles).map((file) => new Promise((resolve) => {
        var _a;
        const res = { ...file, file, title: file.name, mimetype: file.type };
        if (isImage(file.name, (_a = file.mimetype) != null ? _a : file.type)) {
          const reader = new FileReader();
          reader.onload = (e) => {
            var _a2;
            res.data = (_a2 = e.target) == null ? void 0 : _a2.result;
            resolve(res);
          };
          reader.onerror = () => {
            resolve(res);
          };
          reader.readAsDataURL(file);
        } else {
          resolve(res);
        }
      }))));
      return updateModelValue(storedFiles.value.map((stored) => stored.file));
    }
    const newAttachments = [];
    for (const file of selectedFiles) {
      try {
        const data3 = await api.storage.upload({
          path: [NOCO, project.value.title, meta.value.title, column.value.title].join("/")
        }, {
          files: file,
          json: "{}"
        });
        newAttachments.push(...data3);
      } catch (e) {
        message.error(e.message || "Some internal error occurred");
      }
    }
    updateModelValue([...attachments.value, ...newAttachments]);
  }
  async function onDrop(droppedFiles) {
    if (droppedFiles) {
      await onFileSelect(droppedFiles);
    }
  }
  async function downloadFile(item) {
    FileSaver.saveAs(item.url || item.data, item.title);
  }
  const FileIcon = (icon) => {
    switch (icon) {
      case "mdi-pdf-box":
        return MdiPdfBox;
      case "mdi-file-word-outline":
        return MdiFileWordOutline;
      case "mdi-file-powerpoint-box":
        return MdiFilePowerpointBox;
      case "mdi-file-excel-outline":
        return MdiFileExcelOutline;
      default:
        return __unplugin_components_4;
    }
  };
  const visibleItems = computed(() => isPublic.value ? storedFiles.value : attachments.value);
  watch(files, (nextFiles) => nextFiles && onFileSelect(nextFiles));
  return {
    attachments,
    visibleItems,
    isPublic,
    isReadonly,
    meta,
    column,
    editEnabled,
    isLoading,
    api,
    open: () => open(),
    onDrop,
    modalVisible,
    FileIcon,
    removeFile,
    downloadFile,
    updateModelValue,
    selectedImage,
    storedFiles
  };
}, "useAttachmentCell");
function useSortable(element, items, updateModelValue, isReadonly = false) {
  let dragging = ref(false);
  function onSortStart(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    dragging.value = true;
  }
  async function onSortEnd(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    dragging.value = false;
    const _items = unref(items);
    if (_items.length < 2)
      return;
    const { newIndex = 0, oldIndex = 0 } = evt;
    if (newIndex === oldIndex)
      return;
    _items.splice(newIndex, 0, ..._items.splice(oldIndex, 1));
    updateModelValue(_items);
  }
  let sortable;
  const initSortable = (el) => {
    sortable = new Sortable(el, {
      handle: ".nc-attachment",
      ghostClass: "ghost",
      onStart: onSortStart,
      onEnd: onSortEnd
    });
  };
  watchPostEffect((onCleanup) => {
    const _element = unref(element);
    onCleanup(() => {
      if (_element && sortable)
        sortable.destroy();
    });
    if (_element && !unref(isReadonly))
      initSortable(_element);
  });
  return {
    dragging,
    initSortable
  };
}
const _hoisted_1$k = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$e = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$e
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_3$b);
}
var MdiCloseCircle = { name: "mdi-close-circle", render: render$5 };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  setup(__props, { expose }) {
    expose();
    const { isUIAllowed } = useUIPermission();
    const {
      open,
      isLoading,
      isPublicGrid,
      isReadonly,
      visibleItems,
      modalVisible,
      column,
      FileIcon,
      removeFile,
      onDrop,
      downloadFile,
      updateModelValue,
      selectedImage
    } = useAttachmentCell();
    const isLocked = ref(false);
    const dropZoneRef = ref();
    const sortableRef = ref();
    const { dragging } = useSortable(sortableRef, visibleItems, updateModelValue, isReadonly);
    const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
    const { isSharedForm } = useSmartsheetStoreOrThrow();
    onKeyDown("Escape", () => {
      modalVisible.value = false;
      isOverDropZone.value = false;
    });
    function onClick(item) {
      selectedImage.value = item;
      modalVisible.value = false;
      const stopHandle = watch(selectedImage, (nextImage, _, onCleanup) => {
        if (!nextImage) {
          setTimeout(() => {
            modalVisible.value = true;
          }, 50);
          stopHandle == null ? void 0 : stopHandle();
        }
        onCleanup(() => stopHandle == null ? void 0 : stopHandle());
      });
    }
    const __returned__ = { isUIAllowed, open, isLoading, isPublicGrid, isReadonly, visibleItems, modalVisible, column, FileIcon, removeFile, onDrop, downloadFile, updateModelValue, selectedImage, isLocked, dropZoneRef, sortableRef, dragging, isOverDropZone, isSharedForm, onClick, isImage, openLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$j = { class: "flex gap-4" };
const _hoisted_2$d = /* @__PURE__ */ createTextVNode(" Attach File ");
const _hoisted_3$a = { class: "flex items-center gap-2" };
const _hoisted_4$5 = {
  key: 0,
  class: "text-gray-400"
};
const _hoisted_5$4 = /* @__PURE__ */ createTextVNode(" Viewing Attachments of ");
const _hoisted_6$2 = { class: "font-semibold underline" };
const _hoisted_7$1 = { ref: "dropZoneRef" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-white text-3xl" }, "Drop here", -1);
const _hoisted_9$1 = /* @__PURE__ */ createTextVNode(" Remove File ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Download file ");
const _hoisted_11 = { class: "nc-attachment-download group-hover:opacity-100" };
const _hoisted_12 = ["onClick"];
const _hoisted_13 = ["title"];
const _hoisted_14 = {
  key: 0,
  class: "flex flex-col gap-1"
};
const _hoisted_15 = { class: "nc-attachment h-full w-full flex items-center justify-center" };
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MaterialSymbolsAttachFile = __unplugin_components_2$1;
  const _component_MaterialSymbolsFileCopyOutline = __unplugin_components_0$6;
  const _component_general_overlay = __nuxt_component_0$6;
  const _component_MdiCloseCircle = MdiCloseCircle;
  const _component_a_tooltip = __unplugin_components_1$4;
  const _component_MdiDownload = __unplugin_components_4$2;
  const _component_IcOutlineInsertDriveFile = __unplugin_components_4;
  const _component_a_card = Card;
  const _component_a_skeleton_image = __unplugin_components_7$1;
  const _component_a_modal = Modal$1;
  return openBlock(), createBlock(_component_a_modal, {
    visible: $setup.modalVisible,
    "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => $setup.modalVisible = $event),
    class: "nc-attachment-modal",
    width: "80%",
    footer: null
  }, {
    title: withCtx(() => [
      createBaseVNode("div", _hoisted_1$j, [
        $setup.isSharedForm || !$setup.isReadonly && $setup.isUIAllowed("tableAttachment") && !$setup.isPublicGrid && !$setup.isLocked ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "nc-attach-file group",
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.open && $setup.open(...args))
        }, [
          createVNode(_component_MaterialSymbolsAttachFile, { class: "transform group-hover:text-accent group-hover:scale-120" }),
          _hoisted_2$d
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$a, [
          $setup.isReadonly ? (openBlock(), createElementBlock("div", _hoisted_4$5, "[Readonly]")) : createCommentVNode("", true),
          _hoisted_5$4,
          createBaseVNode("div", _hoisted_6$2, toDisplayString($setup.column.title), 1)
        ])
      ])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_7$1, [
        $setup.isSharedForm || !$setup.isReadonly && !$setup.dragging ? (openBlock(), createBlock(_component_general_overlay, {
          key: 0,
          modelValue: $setup.isOverDropZone,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.isOverDropZone = $event),
          inline: "",
          class: "text-white ring ring-accent bg-gray-700/75 flex items-center justify-center gap-2 backdrop-blur-xl"
        }, {
          default: withCtx(() => [
            createVNode(_component_MaterialSymbolsFileCopyOutline, {
              class: "text-accent",
              height: "35",
              width: "35"
            }),
            _hoisted_8$1
          ]),
          _: 1
        }, 8, ["modelValue"])) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref: "sortableRef",
          class: normalizeClass([{ dragging: $setup.dragging }, "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 relative p-6"])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.visibleItems, (item, i) => {
            return openBlock(), createElementBlock("div", {
              key: `${item.title}-${i}`,
              class: "flex flex-col gap-1"
            }, [
              createVNode(_component_a_card, { class: "nc-attachment-item group" }, {
                default: withCtx(() => [
                  !$setup.isReadonly ? (openBlock(), createBlock(_component_a_tooltip, { key: 0 }, {
                    title: withCtx(() => [
                      _hoisted_9$1
                    ]),
                    default: withCtx(() => [
                      $setup.isSharedForm || $setup.isUIAllowed("tableAttachment") && !$setup.isPublicGrid && !$setup.isLocked ? (openBlock(), createBlock(_component_MdiCloseCircle, {
                        key: 0,
                        class: "nc-attachment-remove",
                        onClick: withModifiers(($event) => $setup.removeFile(i), ["stop"])
                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true),
                  createVNode(_component_a_tooltip, { placement: "bottom" }, {
                    title: withCtx(() => [
                      _hoisted_10
                    ]),
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_11, [
                        createVNode(_component_MdiDownload, {
                          onClick: withModifiers(($event) => $setup.downloadFile(item), ["stop"])
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createBaseVNode("div", {
                    class: normalizeClass([[$setup.dragging ? "cursor-move" : "cursor-pointer"], "nc-attachment h-full w-full flex items-center justify-center"])
                  }, [
                    $setup.isImage(item.title, item.mimetype) ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      style: normalizeStyle({ backgroundImage: `url('${item.url || item.data}')` }),
                      class: "w-full h-full bg-contain bg-center bg-no-repeat",
                      onClick: withModifiers(($event) => $setup.onClick(item), ["stop"])
                    }, null, 12, _hoisted_12)) : item.icon ? (openBlock(), createBlock(resolveDynamicComponent($setup.FileIcon(item.icon)), {
                      key: 1,
                      height: "150",
                      width: "150",
                      onClick: withModifiers(($event) => $setup.openLink(item.url || item.data), ["stop"])
                    }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_IcOutlineInsertDriveFile, {
                      key: 2,
                      height: "150",
                      width: "150",
                      onClick: withModifiers(($event) => $setup.openLink(item.url || item.data), ["stop"])
                    }, null, 8, ["onClick"]))
                  ], 2)
                ]),
                _: 2
              }, 1024),
              createBaseVNode("div", {
                class: "truncate",
                title: item.title
              }, toDisplayString(item.title), 9, _hoisted_13)
            ]);
          }), 128)),
          $setup.isLoading ? (openBlock(), createElementBlock("div", _hoisted_14, [
            createVNode(_component_a_card, { class: "nc-attachment-item group" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_15, [
                  createVNode(_component_a_skeleton_image, { class: "" })
                ])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ], 2)
      ], 512)
    ]),
    _: 1
  }, 8, ["visible"]);
}
var Modal = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
const _hoisted_1$i = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$c = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m12.7 15.3l2.6-2.6q.275-.275.275-.7q0-.425-.275-.7l-2.625-2.625q-.275-.275-.687-.263q-.413.013-.688.288q-.275.275-.275.7q0 .425.275.7l.9.9H8.975q-.425 0-.7.287Q8 11.575 8 12t.288.712Q8.575 13 9 13h3.2l-.925.925q-.275.275-.263.688q.013.412.288.687q.275.275.7.275q.425 0 .7-.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$c
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$9);
}
var __unplugin_components_2 = { name: "material-symbols-arrow-circle-right-rounded", render: render$4 };
const _hoisted_1$h = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M11.325 15.325q.275.275.688.262q.412-.012.687-.287q.275-.275.275-.7q0-.425-.275-.7l-.9-.9h3.225q.425 0 .7-.288Q16 12.425 16 12t-.287-.713Q15.425 11 15 11h-3.2l.925-.925q.275-.275.263-.688q-.013-.412-.288-.687q-.275-.275-.7-.275q-.425 0-.7.275l-2.6 2.6q-.275.275-.275.7q0 .425.275.7ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$b
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$8);
}
var __unplugin_components_1$1 = { name: "material-symbols-arrow-circle-left-rounded", render: render$3 };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  setup(__props, { expose }) {
    expose();
    const { selectedImage, visibleItems, downloadFile } = useAttachmentCell();
    const carouselRef = ref();
    const imageItems = computed(() => visibleItems.value.filter((item) => isImage(item.title, item.mimetype)));
    onKeyDown((e) => ["Left", "ArrowLeft", "A"].includes(e.key), () => {
      if (carouselRef.value)
        carouselRef.value.prev();
    });
    onKeyDown((e) => ["Right", "ArrowRight", "D"].includes(e.key), () => {
      if (carouselRef.value)
        carouselRef.value.next();
    });
    function onSlideChange(index2) {
      selectedImage.value = imageItems.value[index2];
    }
    const setCarouselRef = (el) => {
      var _a;
      carouselRef.value = el;
      (_a = carouselRef.value) == null ? void 0 : _a.goTo(imageItems.value.findIndex((item) => item === selectedImage.value), true);
    };
    onClickOutside(carouselRef, () => {
      selectedImage.value = false;
    });
    const __returned__ = { selectedImage, visibleItems, downloadFile, carouselRef, imageItems, onSlideChange, setCarouselRef };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$g = {
  key: 0,
  class: "overflow-hidden p-12 text-center relative"
};
const _hoisted_2$a = { class: "text-white group absolute top-5 right-5" };
const _hoisted_3$7 = { class: "group-hover:text-primary" };
const _hoisted_4$4 = { class: "custom-slick-arrow left-2 z-1" };
const _hoisted_5$3 = { class: "custom-slick-arrow !right-2 z-1" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiCloseCircle = MdiCloseCircle;
  const _component_MaterialSymbolsArrowCircleLeftRounded = __unplugin_components_1$1;
  const _component_MaterialSymbolsArrowCircleRightRounded = __unplugin_components_2;
  const _component_nuxt_img = __nuxt_component_1$4;
  const _component_a_carousel = __unplugin_components_0$3;
  const _component_general_overlay = __nuxt_component_0$6;
  return openBlock(), createBlock(_component_general_overlay, {
    modelValue: $setup.selectedImage,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.selectedImage = $event)
  }, {
    default: withCtx(() => [
      $setup.selectedImage ? (openBlock(), createElementBlock("div", _hoisted_1$g, [
        createBaseVNode("div", _hoisted_2$a, [
          createVNode(_component_MdiCloseCircle, {
            class: "group-hover:text-red-500 cursor-pointer text-4xl",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.selectedImage = false, ["stop"]))
          })
        ]),
        createBaseVNode("div", {
          class: "select-none group hover:ring active:ring-accent cursor-pointer leading-8 inline-block px-3 py-1 bg-gray-300 text-white mb-4 text-center rounded shadow",
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.downloadFile($setup.selectedImage), ["stop"]))
        }, [
          createBaseVNode("h3", _hoisted_3$7, toDisplayString($setup.selectedImage && $setup.selectedImage.title), 1)
        ]),
        !!$setup.selectedImage ? (openBlock(), createBlock(_component_a_carousel, {
          key: 0,
          ref: $setup.setCarouselRef,
          "dots-class": "slick-dots slick-thumb",
          "after-change": $setup.onSlideChange,
          arrows: ""
        }, {
          prevArrow: withCtx(() => [
            createBaseVNode("div", _hoisted_4$4, [
              createVNode(_component_MaterialSymbolsArrowCircleLeftRounded, { class: "bg-white rounded-full" })
            ])
          ]),
          nextArrow: withCtx(() => [
            createBaseVNode("div", _hoisted_5$3, [
              createVNode(_component_MaterialSymbolsArrowCircleRightRounded, { class: "bg-white rounded-full" })
            ])
          ]),
          customPaging: withCtx((props) => [
            createBaseVNode("a", null, [
              createVNode(_component_nuxt_img, {
                class: "!block",
                alt: $setup.imageItems[props.i].title || `#${props.i}`,
                src: $setup.imageItems[props.i].url || $setup.imageItems[props.i].data
              }, null, 8, ["alt", "src"])
            ])
          ]),
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.imageItems, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.url
              }, [
                createBaseVNode("div", {
                  style: normalizeStyle({ backgroundImage: `url('${item.url || item.data}')` }),
                  class: "min-w-70vw min-h-70vh w-full h-full bg-contain bg-center bg-no-repeat"
                }, null, 4)
              ]);
            }), 128))
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
var Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__scopeId", "data-v-1782278a"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: null,
    rowIndex: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const isForm = inject(IsFormInj, ref(false));
    const attachmentCellRef = ref();
    const sortableRef = ref();
    const { cellRefs } = useSmartsheetStoreOrThrow();
    const {
      column,
      modalVisible,
      attachments,
      visibleItems,
      onDrop,
      isLoading,
      open,
      FileIcon,
      selectedImage,
      isReadonly,
      storedFiles
    } = useProvideAttachmentCell(updateModelValue);
    const currentCellRef = computed(() => !__props.rowIndex && isForm.value ? attachmentCellRef.value : cellRefs.value.find((cell) => cell.dataset.key === `${__props.rowIndex}${column.value.id}`));
    const { dragging } = useSortable(sortableRef, visibleItems, updateModelValue, isReadonly);
    const { state: rowState } = useSmartsheetRowStoreOrThrow();
    const { isOverDropZone } = useDropZone(currentCellRef, onDrop);
    watch(() => __props.modelValue, (nextModel) => {
      if (nextModel) {
        try {
          attachments.value = ((typeof nextModel === "string" ? JSON.parse(nextModel) : nextModel) || []).filter(Boolean);
        } catch (e) {
          console.error(e);
          attachments.value = [];
        }
      }
    }, { immediate: true });
    function updateModelValue(data3) {
      emits("update:modelValue", typeof data3 !== "string" ? JSON.stringify(data3) : data3);
    }
    onKeyDown("Escape", () => {
      modalVisible.value = false;
      isOverDropZone.value = false;
    });
    watch(() => storedFiles.value.length || 0, () => {
      rowState.value[column.value.title] = storedFiles.value;
    });
    const { isSharedForm } = useSmartsheetStoreOrThrow();
    const __returned__ = { emits, isForm, attachmentCellRef, sortableRef, cellRefs, column, modalVisible, attachments, visibleItems, onDrop, isLoading, open, FileIcon, selectedImage, isReadonly, storedFiles, currentCellRef, dragging, rowState, isOverDropZone, updateModelValue, isSharedForm, Modal, Carousel, isImage, openLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$f = {
  ref: "attachmentCellRef",
  class: "nc-attachment-cell relative flex-1 color-transition flex items-center justify-between gap-1"
};
const _hoisted_2$9 = /* @__PURE__ */ createTextVNode(" Drop here ");
const _hoisted_3$6 = /* @__PURE__ */ createTextVNode(" Click or drop a file into cell ");
const _hoisted_4$3 = { class: "flex items-center gap-2" };
const _hoisted_5$2 = {
  key: 0,
  class: "group-hover:text-primary text-gray-500 text-xs"
};
const _hoisted_6$1 = {
  key: 2,
  class: "flex"
};
const _hoisted_7 = { class: "text-center w-full" };
const _hoisted_8 = { class: "group flex gap-1 items-center border-1 active:ring rounded p-1 hover:bg-primary hover:bg-opacity-10" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" View attachments ");
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MaterialSymbolsFileCopyOutline = __unplugin_components_0$6;
  const _component_general_overlay = __nuxt_component_0$6;
  const _component_MdiReload = __unplugin_components_0$7;
  const _component_MaterialSymbolsAttachFile = __unplugin_components_2$1;
  const _component_a_tooltip = __unplugin_components_1$4;
  const _component_nuxt_img = __nuxt_component_1$4;
  const _component_IcOutlineInsertDriveFile = __unplugin_components_4;
  const _component_MdiArrowExpand = MdiArrowExpand;
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    createVNode($setup["Carousel"]),
    $setup.isSharedForm || !$setup.isReadonly && !$setup.dragging && !!$setup.currentCellRef ? (openBlock(), createBlock(_component_general_overlay, {
      key: 0,
      modelValue: $setup.isOverDropZone,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.isOverDropZone = $event),
      inline: "",
      target: $setup.currentCellRef,
      class: "text-white text-lg ring ring-accent bg-gray-700/75 flex items-center justify-center gap-2 backdrop-blur-xl"
    }, {
      default: withCtx(() => [
        createVNode(_component_MaterialSymbolsFileCopyOutline, { class: "text-accent" }),
        _hoisted_2$9
      ]),
      _: 1
    }, 8, ["modelValue", "target"])) : createCommentVNode("", true),
    !$setup.isReadonly ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass([{ "mx-auto px-4": !$setup.visibleItems.length }, "group flex gap-1 items-center active:ring rounded border-1 p-1 hover:bg-primary hover:bg-opacity-10"]),
      onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $setup.open && $setup.open(...args), ["stop"]))
    }, [
      $setup.isLoading ? (openBlock(), createBlock(_component_MdiReload, {
        key: 0,
        class: normalizeClass({ "animate-infinite animate-spin": $setup.isLoading })
      }, null, 8, ["class"])) : (openBlock(), createBlock(_component_a_tooltip, {
        key: 1,
        placement: "bottom"
      }, {
        title: withCtx(() => [
          _hoisted_3$6
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4$3, [
            createVNode(_component_MaterialSymbolsAttachFile, { class: "transform group-hover:text-accent group-hover:scale-120 text-gray-500 text-[10px]" }),
            !$setup.visibleItems.length ? (openBlock(), createElementBlock("div", _hoisted_5$2, "Add file(s)")) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }))
    ], 2)) : (openBlock(), createElementBlock("div", _hoisted_6$1)),
    $setup.visibleItems.length ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      createBaseVNode("div", {
        ref: "sortableRef",
        class: normalizeClass([{ dragging: $setup.dragging }, "flex justify-center items-center flex-wrap gap-2 p-1 scrollbar-thin-dull max-h-[150px] overflow-auto"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.visibleItems, (item, i) => {
          var _a;
          return openBlock(), createElementBlock("div", {
            key: item.url || item.title,
            class: normalizeClass([$setup.isImage(item.title, (_a = item.mimetype) != null ? _a : item.type) ? "" : "border-1 rounded", "nc-attachment flex items-center justify-center min-h-[50px]"])
          }, [
            createVNode(_component_a_tooltip, { placement: "bottom" }, {
              title: withCtx(() => [
                createBaseVNode("div", _hoisted_7, toDisplayString(item.title), 1)
              ]),
              default: withCtx(() => {
                var _a2;
                return [
                  $setup.isImage(item.title, (_a2 = item.mimetype) != null ? _a2 : item.type) && (item.url || item.data) ? (openBlock(), createBlock(_component_nuxt_img, {
                    key: 0,
                    quality: "75",
                    placeholder: "",
                    alt: item.title || `#${i}`,
                    src: item.url || item.data,
                    class: "ring-1 ring-gray-300 rounded max-h-[50px] max-w-[50px]",
                    onClick: ($event) => $setup.selectedImage = item
                  }, null, 8, ["alt", "src", "onClick"])) : item.icon ? (openBlock(), createBlock(resolveDynamicComponent($setup.FileIcon(item.icon)), {
                    key: 1,
                    onClick: ($event) => $setup.openLink(item.url || item.data)
                  }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_IcOutlineInsertDriveFile, {
                    key: 2,
                    onClick: withModifiers(($event) => $setup.openLink(item.url || item.data), ["stop"])
                  }, null, 8, ["onClick"]))
                ];
              }),
              _: 2
            }, 1024)
          ], 2);
        }), 128))
      ], 2),
      createBaseVNode("div", _hoisted_8, [
        $setup.isLoading ? (openBlock(), createBlock(_component_MdiReload, {
          key: 0,
          class: normalizeClass({ "animate-infinite animate-spin": $setup.isLoading })
        }, null, 8, ["class"])) : (openBlock(), createBlock(_component_a_tooltip, {
          key: 1,
          placement: "bottom"
        }, {
          title: withCtx(() => [
            _hoisted_9
          ]),
          default: withCtx(() => [
            createVNode(_component_MdiArrowExpand, {
              class: "select-none transform group-hover:text-accent group-hover:scale-120 text-[10px] text-gray-500",
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.modalVisible = true, ["stop"]))
            })
          ]),
          _: 1
        }))
      ])
    ], 64)) : createCommentVNode("", true),
    createVNode($setup["Modal"])
  ], 512);
}
var __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SingleSelect",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const column = inject(ColumnInj);
    const readOnly = inject(ReadonlyInj);
    const active = inject(ActiveCellInj, ref(false));
    const aselect = ref();
    const isOpen = ref(false);
    const vModel = computed({
      get: () => __props.modelValue,
      set: (val) => emit("update:modelValue", val || null)
    });
    const options = computed(() => {
      if (column == null ? void 0 : column.value.colOptions) {
        const opts = column.value.colOptions ? column.value.colOptions.options.filter((el) => el.title !== "") || [] : [];
        for (const op of opts.filter((el) => el.order === null)) {
          op.title = op.title.replace(/^'/, "").replace(/'$/, "");
        }
        return opts;
      }
      return [];
    });
    const handleKeys = (e) => {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          isOpen.value = false;
          break;
      }
    };
    const handleClose = (e) => {
      if (aselect.value && !aselect.value.$el.contains(e.target)) {
        isOpen.value = false;
        aselect.value.blur();
      }
    };
    useEventListener(document, "click", handleClose);
    watch(isOpen, (n, _o) => {
      var _a;
      if (!n)
        (_a = aselect.value) == null ? void 0 : _a.$el.blur();
    });
    const __returned__ = { emit, column, readOnly, active, aselect, isOpen, vModel, options, handleKeys, handleClose };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$e = { class: "text-slate-500" };
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_tag = __unplugin_components_0$2;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  return openBlock(), createBlock(_component_a_select, {
    ref: "aselect",
    value: $setup.vModel,
    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.vModel = $event),
    class: "w-full",
    "allow-clear": !$setup.column.rqd && $setup.active,
    bordered: false,
    open: $setup.isOpen,
    disabled: $setup.readOnly,
    "show-arrow": !$setup.readOnly && ($setup.active || $setup.vModel === null),
    onSelect: _cache[2] || (_cache[2] = ($event) => $setup.isOpen = false),
    onKeydown: $setup.handleKeys,
    onClick: _cache[3] || (_cache[3] = ($event) => $setup.isOpen = !$setup.isOpen)
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.options, (op) => {
        return openBlock(), createBlock(_component_a_select_option, {
          key: op.title,
          value: op.title,
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, {
          default: withCtx(() => [
            createVNode(_component_a_tag, {
              class: "rounded-tag",
              color: op.color
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_1$e, toDisplayString(op.title), 1)
              ]),
              _: 2
            }, 1032, ["color"])
          ]),
          _: 2
        }, 1032, ["value"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["value", "allow-clear", "open", "disabled", "show-arrow"]);
}
var __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__scopeId", "data-v-8b8f5e24"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "MultiSelect",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const { isMysql } = useProject();
    const column = inject(ColumnInj);
    const readOnly = inject(ReadonlyInj);
    const active = inject(ActiveCellInj, ref(false));
    const selectedIds = ref([]);
    const aselect = ref();
    const isOpen = ref(false);
    const options = computed(() => {
      if (column == null ? void 0 : column.value.colOptions) {
        const opts = column.value.colOptions ? column.value.colOptions.options.filter((el) => el.title !== "") || [] : [];
        for (const op of opts.filter((el) => el.order === null)) {
          op.title = op.title.replace(/^'/, "").replace(/'$/, "");
        }
        return opts;
      }
      return [];
    });
    const vModel = computed({
      get: () => selectedIds.value.map((el) => {
        var _a;
        return (_a = options.value.find((op) => op.id === el)) == null ? void 0 : _a.title;
      }),
      set: (val) => emit("update:modelValue", val.length === 0 ? null : val.join(","))
    });
    const selectedTitles = computed(() => __props.modelValue ? typeof __props.modelValue === "string" ? isMysql ? __props.modelValue.split(",").sort((a, b) => {
      const opa = options.value.find((el) => el.title === a);
      const opb = options.value.find((el) => el.title === b);
      if (opa && opb) {
        return opa.order - opb.order;
      }
      return 0;
    }) : __props.modelValue.split(",") : __props.modelValue : []);
    const handleKeys = (e) => {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          isOpen.value = false;
          break;
        case "Enter":
          e.stopPropagation();
          break;
      }
    };
    const handleClose = (e) => {
      if (aselect.value && !aselect.value.$el.contains(e.target)) {
        isOpen.value = false;
      }
    };
    onMounted(() => {
      selectedIds.value = selectedTitles.value.flatMap((el) => {
        var _a;
        const item = (_a = options.value.find((op) => op.title === el)) == null ? void 0 : _a.id;
        if (item) {
          return [item];
        }
        return [];
      });
    });
    useEventListener(document, "click", handleClose);
    watch(() => __props.modelValue, () => {
      selectedIds.value = selectedIds.value = selectedTitles.value.flatMap((el) => {
        var _a;
        const item = (_a = options.value.find((op) => op.title === el)) == null ? void 0 : _a.id;
        if (item) {
          return [item];
        }
        return [];
      });
    });
    watch(isOpen, (n, _o) => {
      var _a;
      if (!n)
        (_a = aselect.value) == null ? void 0 : _a.$el.blur();
    });
    const __returned__ = { emit, isMysql, column, readOnly, active, selectedIds, aselect, isOpen, options, vModel, selectedTitles, handleKeys, handleClose, h, MdiCloseCircle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$d = { class: "text-slate-500" };
const _hoisted_2$8 = { class: "w-full text-slate-500" };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_tag = __unplugin_components_0$2;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4$5;
  return openBlock(), createBlock(_component_a_select, {
    ref: "aselect",
    value: $setup.vModel,
    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.vModel = $event),
    mode: "multiple",
    class: "w-full",
    bordered: false,
    "show-arrow": !$setup.readOnly,
    "show-search": false,
    open: $setup.isOpen,
    disabled: $setup.readOnly,
    onKeydown: $setup.handleKeys,
    onClick: _cache[2] || (_cache[2] = ($event) => $setup.isOpen = !$setup.isOpen)
  }, {
    tagRender: withCtx(({ value: val, onClose }) => {
      var _a;
      return [
        $setup.options.find((el) => el.title === val) ? (openBlock(), createBlock(_component_a_tag, {
          key: 0,
          class: "rounded-tag",
          style: { display: "flex", alignItems: "center" },
          color: $setup.options.find((el) => el.title === val).color,
          closable: $setup.active && ($setup.vModel.length > 1 || !((_a = $setup.column) == null ? void 0 : _a.rqd)),
          "close-icon": $setup.h($setup.MdiCloseCircle, { class: ["ms-close-icon"] }),
          onClose
        }, {
          default: withCtx(() => [
            createBaseVNode("span", _hoisted_2$8, toDisplayString(val), 1)
          ]),
          _: 2
        }, 1032, ["color", "closable", "close-icon", "onClose"])) : createCommentVNode("", true)
      ];
    }),
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.options, (op) => {
        return openBlock(), createBlock(_component_a_select_option, {
          key: op.id,
          value: op.title,
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, {
          default: withCtx(() => [
            createVNode(_component_a_tag, {
              class: "rounded-tag",
              color: op.color
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_1$d, toDisplayString(op.title), 1)
              ]),
              _: 2
            }, 1032, ["color"])
          ]),
          _: 2
        }, 1032, ["value"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["value", "show-arrow", "open", "disabled"]);
}
var __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__scopeId", "data-v-044c8e86"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "DatePicker",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    var _a, _b, _c;
    expose();
    const columnMeta = inject(ColumnInj, null);
    const readOnly = inject(ReadonlyInj, false);
    let isDateInvalid = ref(false);
    const dateFormat = (_c = (_b = (_a = columnMeta == null ? void 0 : columnMeta.value) == null ? void 0 : _a.meta) == null ? void 0 : _b.date_format) != null ? _c : "YYYY-MM-DD";
    const localState = computed({
      get() {
        if (!__props.modelValue) {
          return void 0;
        }
        if (!dayjs(__props.modelValue).isValid()) {
          isDateInvalid.value = true;
          return void 0;
        }
        return /^\d+$/.test(__props.modelValue) ? dayjs(+__props.modelValue) : dayjs(__props.modelValue);
      },
      set(val) {
        if (!val) {
          emit("update:modelValue", null);
          return;
        }
        if (val.isValid()) {
          emit("update:modelValue", val == null ? void 0 : val.format("YYYY-MM-DD"));
        }
      }
    });
    const open = ref(false);
    const randomClass = `picker_${Math.floor(Math.random() * 99999)}`;
    watch(open, (next) => {
      if (next) {
        onClickOutside(document.querySelector(`.${randomClass}`), () => open.value = false);
      }
    }, { flush: "post" });
    const placeholder = computed(() => isDateInvalid.value ? "Invalid date" : "");
    const __returned__ = { emit, columnMeta, readOnly, isDateInvalid, dateFormat, localState, open, randomClass, placeholder };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_date_picker = DatePicker$1;
  return openBlock(), createBlock(_component_a_date_picker, {
    value: $setup.localState,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.localState = $event),
    bordered: false,
    class: "!w-full px-1",
    format: $setup.dateFormat,
    placeholder: $setup.placeholder,
    "allow-clear": !$setup.readOnly,
    "input-read-only": true,
    "dropdown-class-name": $setup.randomClass,
    open: $setup.readOnly ? false : $setup.open,
    onClick: _cache[1] || (_cache[1] = ($event) => $setup.open = !$setup.open)
  }, {
    suffixIcon: withCtx(() => []),
    _: 1
  }, 8, ["value", "format", "placeholder", "allow-clear", "open"]);
}
var __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "YearPicker",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const readOnly = inject(ReadonlyInj, false);
    let isYearInvalid = ref(false);
    const localState = computed({
      get() {
        if (!__props.modelValue) {
          return void 0;
        }
        const yearDate = dayjs(__props.modelValue.toString(), "YYYY");
        if (!yearDate.isValid()) {
          isYearInvalid.value = true;
          return void 0;
        }
        return yearDate;
      },
      set(val) {
        if (!val) {
          emit("update:modelValue", null);
          return;
        }
        if (val == null ? void 0 : val.isValid()) {
          emit("update:modelValue", Number(val.format("YYYY")));
        }
      }
    });
    const open = ref(false);
    const randomClass = `picker_${Math.floor(Math.random() * 99999)}`;
    watch(open, (next) => {
      if (next) {
        onClickOutside(document.querySelector(`.${randomClass}`), () => open.value = false);
      }
    }, { flush: "post" });
    const placeholder = computed(() => isYearInvalid.value ? "Invalid year" : "");
    const __returned__ = { emit, readOnly, isYearInvalid, localState, open, randomClass, placeholder };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_date_picker = DatePicker$1;
  return openBlock(), createBlock(_component_a_date_picker, {
    value: $setup.localState,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.localState = $event),
    picker: "year",
    bordered: false,
    class: "!w-full px-1",
    placeholder: $setup.placeholder,
    "allow-clear": !$setup.readOnly,
    "input-read-only": true,
    open: $setup.readOnly ? false : $setup.open,
    "dropdown-class-name": $setup.randomClass,
    onClick: _cache[1] || (_cache[1] = ($event) => $setup.open = !$setup.open),
    onChange: _cache[2] || (_cache[2] = ($event) => $setup.open = !$setup.open)
  }, {
    suffixIcon: withCtx(() => []),
    _: 1
  }, 8, ["value", "placeholder", "allow-clear", "open"]);
}
var __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DateTimePicker",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const { isMysql } = useProject();
    const readOnly = inject(ReadonlyInj, false);
    let isDateInvalid = ref(false);
    const dateFormat = isMysql ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm:ssZ";
    const localState = computed({
      get() {
        if (!__props.modelValue) {
          return void 0;
        }
        if (!dayjs(__props.modelValue).isValid()) {
          isDateInvalid.value = true;
          return void 0;
        }
        return /^\d+$/.test(__props.modelValue) ? dayjs(+__props.modelValue) : dayjs(__props.modelValue);
      },
      set(val) {
        if (!val) {
          emit("update:modelValue", null);
          return;
        }
        if (val.isValid()) {
          emit("update:modelValue", val == null ? void 0 : val.format(dateFormat));
        }
      }
    });
    const open = ref(false);
    const randomClass = `picker_${Math.floor(Math.random() * 99999)}`;
    watch(open, (next) => {
      if (next) {
        onClickOutside(document.querySelector(`.${randomClass}`), () => open.value = false);
      }
    }, { flush: "post" });
    const __returned__ = { emit, isMysql, readOnly, isDateInvalid, dateFormat, localState, open, randomClass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_date_picker = DatePicker$1;
  return openBlock(), createBlock(_component_a_date_picker, {
    value: $setup.localState,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.localState = $event),
    "show-time": true,
    bordered: false,
    class: "!w-full px-1",
    format: "YYYY-MM-DD HH:mm",
    placeholder: $setup.isDateInvalid ? "Invalid date" : "",
    "allow-clear": !$setup.readOnly,
    "input-read-only": true,
    "dropdown-class-name": $setup.randomClass,
    open: $setup.readOnly ? false : $setup.open,
    disabled: $setup.readOnly,
    onClick: _cache[1] || (_cache[1] = ($event) => $setup.open = !$setup.open),
    onOk: _cache[2] || (_cache[2] = ($event) => $setup.open = !$setup.open)
  }, {
    suffixIcon: withCtx(() => []),
    _: 1
  }, 8, ["value", "placeholder", "allow-clear", "open", "disabled"]);
}
var __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "TimePicker",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const { isMysql } = useProject();
    const readOnly = inject(ReadonlyInj, false);
    let isTimeInvalid = ref(false);
    const dateFormat = isMysql ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm:ssZ";
    const localState = computed({
      get() {
        if (!__props.modelValue) {
          return void 0;
        }
        let dateTime = dayjs(__props.modelValue);
        if (!dateTime.isValid()) {
          dateTime = dayjs(__props.modelValue, "HH:mm:ss");
        }
        if (!dateTime.isValid()) {
          dateTime = dayjs(`1999-01-01 ${__props.modelValue}`);
        }
        if (!dateTime.isValid()) {
          isTimeInvalid.value = true;
          return void 0;
        }
        return dateTime;
      },
      set(val) {
        if (!val) {
          emit("update:modelValue", null);
          return;
        }
        if (val.isValid()) {
          const time = val.format("HH:mm");
          const date = dayjs(`1999-01-01 ${time}:00`);
          emit("update:modelValue", date.format(dateFormat));
        }
      }
    });
    const open = ref(false);
    const randomClass = `picker_${Math.floor(Math.random() * 99999)}`;
    watch(open, (next) => {
      if (next) {
        onClickOutside(document.querySelector(`.${randomClass}`), () => open.value = false);
      }
    }, { flush: "post" });
    const __returned__ = { emit, isMysql, readOnly, isTimeInvalid, dateFormat, localState, open, randomClass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_time_picker = TimePicker$1;
  return openBlock(), createBlock(_component_a_time_picker, {
    value: $setup.localState,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.localState = $event),
    autofocus: "",
    "show-time": true,
    bordered: false,
    "use12-hours": "",
    format: "HH:mm",
    class: "!w-full px-1",
    placeholder: $setup.isTimeInvalid ? "Invalid time" : "",
    "allow-clear": !$setup.readOnly,
    "input-read-only": true,
    open: $setup.readOnly ? false : $setup.open,
    "popup-class-name": $setup.randomClass,
    onClick: _cache[1] || (_cache[1] = ($event) => $setup.open = !$setup.open),
    onOk: _cache[2] || (_cache[2] = ($event) => $setup.open = !$setup.open)
  }, {
    suffixIcon: withCtx(() => []),
    _: 1
  }, 8, ["value", "placeholder", "allow-clear", "open"]);
}
var __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Rating",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const column = inject(ColumnInj);
    const editEnabled = inject(EditModeInj);
    const ratingMeta = computed(() => {
      var _a;
      return {
        icon: {
          full: "mdi-star",
          empty: "mdi-star-outline"
        },
        color: "#fcb401",
        max: 5,
        ...((_a = column.value) == null ? void 0 : _a.meta) || {}
      };
    });
    const vModel = computed({
      get: () => {
        var _a;
        return (_a = __props.modelValue) != null ? _a : NaN;
      },
      set: (val) => emits("update:modelValue", val)
    });
    const __returned__ = { emits, column, editEnabled, ratingMeta, vModel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiStar = __unplugin_components_0$4;
  const _component_MdiHeart = __unplugin_components_1$3;
  const _component_MdiMoonFull = __unplugin_components_2$2;
  const _component_MdiThumbUp = __unplugin_components_3;
  const _component_MdiFlag = __unplugin_components_4$3;
  const _component_a_rate = __unplugin_components_5$1;
  return openBlock(), createBlock(_component_a_rate, {
    value: $setup.vModel,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event),
    count: $setup.ratingMeta.max,
    style: normalizeStyle(`color: ${$setup.ratingMeta.color}`),
    disabled: !$setup.editEnabled
  }, {
    character: withCtx(() => [
      $setup.ratingMeta.icon.full === "mdi-star" ? (openBlock(), createBlock(_component_MdiStar, {
        key: 0,
        class: "text-sm"
      })) : createCommentVNode("", true),
      $setup.ratingMeta.icon.full === "mdi-heart" ? (openBlock(), createBlock(_component_MdiHeart, {
        key: 1,
        class: "text-sm"
      })) : createCommentVNode("", true),
      $setup.ratingMeta.icon.full === "mdi-moon-full" ? (openBlock(), createBlock(_component_MdiMoonFull, {
        key: 2,
        class: "text-sm"
      })) : createCommentVNode("", true),
      $setup.ratingMeta.icon.full === "mdi-thumb-up" ? (openBlock(), createBlock(_component_MdiThumbUp, {
        key: 3,
        class: "text-sm"
      })) : createCommentVNode("", true),
      $setup.ratingMeta.icon.full === "mdi-flag" ? (openBlock(), createBlock(_component_MdiFlag, {
        key: 4,
        class: "text-sm"
      })) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["value", "count", "style", "disabled"]);
}
var __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Duration",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    var _a, _b;
    expose();
    const column = inject(ColumnInj);
    const editEnabled = inject(EditModeInj);
    const showWarningMessage = ref(false);
    const durationInMS = ref(0);
    const isEdited = ref(false);
    const durationType = ref(((_b = (_a = column == null ? void 0 : column.value) == null ? void 0 : _a.meta) == null ? void 0 : _b.duration) || 0);
    const durationPlaceholder = computed(() => durationOptions[durationType.value].title);
    const localState = computed({
      get: () => convertMS2Duration(__props.modelValue, durationType.value),
      set: (val) => {
        isEdited.value = true;
        const res = convertDurationToSeconds(val, durationType.value);
        if (res._isValid) {
          durationInMS.value = res._sec;
        }
      }
    });
    const checkDurationFormat = (evt) => {
      evt = evt || window.event;
      const charCode = evt.which ? evt.which : evt.keyCode;
      const PRINTABLE_CTL_RANGE = charCode > 31;
      const NON_DIGIT = charCode < 48 || charCode > 57;
      const NON_COLON = charCode !== 58;
      const NON_PERIOD = charCode !== 46;
      if (PRINTABLE_CTL_RANGE && NON_DIGIT && NON_COLON && NON_PERIOD) {
        showWarningMessage.value = true;
        evt.preventDefault();
      } else {
        showWarningMessage.value = false;
        return true;
      }
    };
    const submitDuration = () => {
      if (isEdited.value) {
        emit("update:modelValue", durationInMS.value);
      }
      isEdited.value = false;
    };
    const __returned__ = { emit, column, editEnabled, showWarningMessage, durationInMS, isEdited, durationType, durationPlaceholder, localState, checkDurationFormat, submitDuration };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$c = { class: "duration-cell-wrapper" };
const _hoisted_2$7 = ["placeholder", "onKeydown"];
const _hoisted_3$5 = { key: 1 };
const _hoisted_4$2 = {
  key: 2,
  class: "duration-warning"
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$c, [
    $setup.editEnabled ? withDirectives((openBlock(), createElementBlock("input", {
      key: 0,
      ref: "durationInput",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.localState = $event),
      placeholder: $setup.durationPlaceholder,
      onBlur: $setup.submitDuration,
      onKeypress: _cache[1] || (_cache[1] = ($event) => $setup.checkDurationFormat($event)),
      onKeydown: withKeys($setup.submitDuration, ["enter"])
    }, null, 40, _hoisted_2$7)), [
      [vModelText, $setup.localState]
    ]) : (openBlock(), createElementBlock("span", _hoisted_3$5, toDisplayString($setup.localState), 1)),
    $setup.showWarningMessage ? (openBlock(), createElementBlock("div", _hoisted_4$2, " Please enter a number ")) : createCommentVNode("", true)
  ]);
}
var __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-31a2e1d4"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Email",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const editEnabled = inject(EditModeInj);
    const vModel = useVModel(props, "modelValue", emits);
    const validEmail = computed(() => vModel.value && isEmail(vModel.value));
    const focus = (el) => el == null ? void 0 : el.focus();
    const __returned__ = { props, emits, editEnabled, vModel, validEmail, focus };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$b = ["href"];
const _hoisted_2$6 = { key: 2 };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.editEnabled ? withDirectives((openBlock(), createElementBlock("input", {
    key: 0,
    ref: $setup.focus,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event),
    class: "outline-none text-sm",
    onBlur: _cache[1] || (_cache[1] = ($event) => $setup.editEnabled = false)
  }, null, 544)), [
    [vModelText, $setup.vModel]
  ]) : $setup.validEmail ? (openBlock(), createElementBlock("a", {
    key: 1,
    class: "text-sm underline hover:opacity-75",
    href: `mailto:${$setup.vModel}`,
    target: "_blank"
  }, toDisplayString($setup.vModel), 9, _hoisted_1$b)) : (openBlock(), createElementBlock("span", _hoisted_2$6, toDisplayString($setup.vModel), 1));
}
var __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const _hoisted_1$a = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("g", { fill: "currentColor" }, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" }),
  /* @__PURE__ */ createBaseVNode("path", { d: "M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1zm-1.5 2.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" })
], -1);
const _hoisted_3$4 = [
  _hoisted_2$5
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$4);
}
var MiCircleWarning = { name: "mi-circle-warning", render: render$2 };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Url",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const column = inject(ColumnInj);
    const editEnabled = inject(EditModeInj);
    const localState = ref(__props.modelValue);
    const vModel = computed({
      get: () => __props.modelValue,
      set: (val) => {
        var _a;
        localState.value = val;
        if (!((_a = column.value.meta) == null ? void 0 : _a.validate) || val && isValidURL(val) || !val) {
          emit("update:modelValue", val);
        }
      }
    });
    const isValid = computed(() => __props.modelValue && isValidURL(__props.modelValue));
    const url = computed(() => {
      if (!__props.modelValue || !isValidURL(__props.modelValue))
        return "";
      if (/^https?:\/\//.test(__props.modelValue))
        return __props.modelValue;
      return `https://${__props.modelValue}`;
    });
    const focus = (el) => el == null ? void 0 : el.focus();
    watch(() => editEnabled.value, () => {
      var _a;
      if (((_a = column.value.meta) == null ? void 0 : _a.validate) && !editEnabled.value && localState.value && !isValidURL(localState.value)) {
        message.error("Invalid URL");
        localState.value = void 0;
        return;
      }
      localState.value = __props.modelValue;
    });
    const __returned__ = { emit, column, editEnabled, localState, vModel, isValid, url, focus, MiCircleWarning };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$9 = { class: "flex flex-row items-center justify-between" };
const _hoisted_2$4 = {
  key: 2,
  class: "w-9/10 overflow-ellipsis overflow-hidden"
};
const _hoisted_3$3 = {
  key: 3,
  class: "mr-1 w-1/10"
};
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode(" Invalid URL ");
const _hoisted_5$1 = { class: "flex flex-row items-center" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_nuxt_link = __nuxt_component_1$5;
  const _component_a_tooltip = __unplugin_components_1$4;
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    $setup.editEnabled ? withDirectives((openBlock(), createElementBlock("input", {
      key: 0,
      ref: $setup.focus,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event),
      class: "outline-none text-sm w-full",
      onBlur: _cache[1] || (_cache[1] = ($event) => $setup.editEnabled = false)
    }, null, 544)), [
      [vModelText, $setup.vModel]
    ]) : $setup.isValid ? (openBlock(), createBlock(_component_nuxt_link, {
      key: 1,
      class: "text-sm underline hover:opacity-75",
      to: $setup.url,
      target: "_blank"
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props["modelValue"]), 1)
      ]),
      _: 1
    }, 8, ["to"])) : (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString($props["modelValue"]), 1)),
    ((_a = $setup.column.meta) == null ? void 0 : _a.validate) && !$setup.isValid && ((_b = $props["modelValue"]) == null ? void 0 : _b.length) && !$setup.editEnabled ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
      createVNode(_component_a_tooltip, { placement: "top" }, {
        title: withCtx(() => [
          _hoisted_4$1
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5$1, [
            createVNode($setup["MiCircleWarning"], { class: "text-red-400 h-4" })
          ])
        ]),
        _: 1
      })
    ])) : createCommentVNode("", true)
  ]);
}
var __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Text",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const editEnabled = inject(EditModeInj);
    const vModel = useVModel(props, "modelValue", emits);
    const focus = (el) => el == null ? void 0 : el.focus();
    const __returned__ = { props, emits, editEnabled, vModel, focus };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$8 = { key: 1 };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.editEnabled ? withDirectives((openBlock(), createElementBlock("input", {
    key: 0,
    ref: $setup.focus,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event),
    class: "h-full w-full outline-none bg-transparent",
    onBlur: _cache[1] || (_cache[1] = ($event) => $setup.editEnabled = false)
  }, null, 544)), [
    [vModelText, $setup.vModel]
  ]) : (openBlock(), createElementBlock("span", _hoisted_1$8, toDisplayString($setup.vModel), 1));
}
var __nuxt_component_19 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PhoneNumber",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "modelValue", emits);
    const __returned__ = { props, emits, vModel, Text: __nuxt_component_19 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Text"], {
    modelValue: $setup.vModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event)
  }, null, 8, ["modelValue"]);
}
var __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Percent",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const editEnabled = inject(EditModeInj);
    const vModel = useVModel(props, "modelValue", emits);
    const __returned__ = { props, emits, editEnabled, vModel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = { key: 1 };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.editEnabled ? withDirectives((openBlock(), createElementBlock("input", {
    key: 0,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event),
    type: "number"
  }, null, 512)), [
    [vModelText, $setup.vModel]
  ]) : (openBlock(), createElementBlock("span", _hoisted_1$7, toDisplayString($setup.vModel), 1));
}
var __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Currency",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const column = inject(ColumnInj);
    const editEnabled = inject(EditModeInj);
    const vModel = useVModel(props, "modelValue", emit);
    const currencyMeta = computed(() => {
      return {
        currency_locale: "en-US",
        currency_code: "USD",
        ...column.value.meta ? column.value.meta : {}
      };
    });
    const currency = computed(() => {
      try {
        return !vModel.value || isNaN(vModel.value) ? vModel.value : new Intl.NumberFormat(currencyMeta.value.currency_locale || "en-US", {
          style: "currency",
          currency: currencyMeta.value.currency_code || "USD"
        }).format(vModel.value);
      } catch (e) {
        return vModel.value;
      }
    });
    const focus = (el) => el == null ? void 0 : el.focus();
    const __returned__ = { props, emit, column, editEnabled, vModel, currencyMeta, currency, focus };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = { key: 1 };
const _hoisted_2$3 = { key: 2 };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.editEnabled ? withDirectives((openBlock(), createElementBlock("input", {
    key: 0,
    ref: $setup.focus,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event),
    class: "w-full h-full border-none outline-none",
    onBlur: _cache[1] || (_cache[1] = ($event) => $setup.editEnabled = false)
  }, null, 544)), [
    [vModelText, $setup.vModel]
  ]) : $setup.vModel ? (openBlock(), createElementBlock("span", _hoisted_1$6, toDisplayString($setup.currency), 1)) : (openBlock(), createElementBlock("span", _hoisted_2$3));
}
var __nuxt_component_15 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Decimal",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const editEnabled = inject(EditModeInj);
    const vModel = useVModel(props, "modelValue", emits);
    const focus = (el) => el == null ? void 0 : el.focus();
    const __returned__ = { props, emits, editEnabled, vModel, focus };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = {
  key: 1,
  class: "prose-sm"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.editEnabled ? withDirectives((openBlock(), createElementBlock("input", {
    key: 0,
    ref: $setup.focus,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event),
    class: "outline-none p-0 border-none w-full h-full prose-sm",
    type: "number",
    step: "0.1",
    onBlur: _cache[1] || (_cache[1] = ($event) => $setup.editEnabled = false)
  }, null, 544)), [
    [vModelText, $setup.vModel]
  ]) : (openBlock(), createElementBlock("span", _hoisted_1$5, toDisplayString($setup.vModel), 1));
}
var __nuxt_component_16 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-e7131430"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Integer",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const editEnabled = inject(EditModeInj);
    const vModel = useVModel(props, "modelValue", emits);
    const focus = (el) => el == null ? void 0 : el.focus();
    function onKeyDown2(evt) {
      return evt.key === "." && evt.preventDefault();
    }
    const __returned__ = { props, emits, editEnabled, vModel, focus, onKeyDown: onKeyDown2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = {
  key: 1,
  class: "prose-sm"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.editEnabled ? withDirectives((openBlock(), createElementBlock("input", {
    key: 0,
    ref: $setup.focus,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event),
    class: "outline-none p-0 border-none w-full h-full prose-sm",
    type: "number",
    onBlur: _cache[1] || (_cache[1] = ($event) => $setup.editEnabled = false),
    onKeydown: $setup.onKeyDown
  }, null, 544)), [
    [vModelText, $setup.vModel]
  ]) : (openBlock(), createElementBlock("span", _hoisted_1$4, toDisplayString($setup.vModel), 1));
}
var __nuxt_component_17 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-5f498b9e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Float",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const editEnabled = inject(EditModeInj);
    const vModel = useVModel(props, "modelValue", emits);
    const focus = (el) => el == null ? void 0 : el.focus();
    const __returned__ = { props, emits, editEnabled, vModel, focus };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = {
  key: 1,
  class: "prose-sm"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.editEnabled ? withDirectives((openBlock(), createElementBlock("input", {
    key: 0,
    ref: $setup.focus,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event),
    class: "outline-none p-0 border-none w-full h-full prose-sm",
    type: "number",
    step: "0.1",
    onBlur: _cache[1] || (_cache[1] = ($event) => $setup.editEnabled = false)
  }, null, 544)), [
    [vModelText, $setup.vModel]
  ]) : (openBlock(), createElementBlock("span", _hoisted_1$3, toDisplayString($setup.vModel), 1));
}
var __nuxt_component_18 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-d54f0794"]]);
const _hoisted_1$2 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M208 48V16H16v192h32V70.627l160.687 160.686l22.626-22.626L70.627 48H208zm256 256v137.373L299.313 276.687l-22.626 22.626L441.373 464H304v32h192V304h-32z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var __unplugin_components_1 = { name: "cil-fullscreen", render: render$1 };
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M204 181.372L38.628 16H16v22.628L181.372 204H44v32h192V44h-32v137.372zM326.628 304H464v-32H272v192h32V326.628L473.372 496H496v-22.628L326.628 304z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_0 = { name: "cil-fullscreen-exit", render: render3 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Json",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const editEnabled = inject(EditModeInj, ref(false));
    const isForm = inject(IsFormInj, ref(false));
    const readonly = inject(ReadonlyInj);
    const vModel = useVModel(props, "modelValue", emits);
    const localValueState = ref();
    let error = ref();
    let isExpanded = ref(false);
    const localValue = computed({
      get: () => localValueState.value,
      set: (val) => {
        localValueState.value = typeof val === "object" ? JSON.stringify(val, null, 2) : val;
        if (isForm.value && !isExpanded.value) {
          vModel.value = val;
        }
      }
    });
    const clear = () => {
      error.value = void 0;
      isExpanded.value = false;
      editEnabled.value = false;
      localValue.value = vModel.value;
    };
    const formatJson = (json) => {
      try {
        return JSON.stringify(JSON.parse(json), null, 2);
      } catch (e) {
        return json;
      }
    };
    const onSave = () => {
      isExpanded.value = false;
      editEnabled.value = false;
      localValue.value = localValue ? formatJson(localValue.value) : localValue;
      vModel.value = localValue.value;
    };
    watch(vModel, (val) => {
      localValue.value = val;
    }, { immediate: true });
    watch(localValue, (val) => {
      try {
        JSON.parse(val);
        error.value = void 0;
      } catch (e) {
        error.value = e;
      }
    });
    watch(editEnabled, () => {
      isExpanded.value = false;
      localValue.value = vModel.value;
    });
    const __returned__ = { props, emits, editEnabled, isForm, readonly, vModel, localValueState, error, isExpanded, localValue, clear, formatJson, onSave, AModal: Modal$1, Editor: __nuxt_component_0$7 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-1b9614d9"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "flex flex-col w-full"
};
const _hoisted_2 = { class: "flex flex-row justify-between pt-1 pb-2" };
const _hoisted_3 = {
  key: 0,
  class: "flex flex-row"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-xs" }, "Cancel", -1));
const _hoisted_5 = {
  key: 0,
  class: "text-xs w-full py-1 text-red-500"
};
const _hoisted_6 = { key: 1 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CilFullscreenExit = __unplugin_components_0;
  const _component_CilFullscreen = __unplugin_components_1;
  const _component_a_button = Button;
  return openBlock(), createBlock(resolveDynamicComponent($setup.isExpanded ? $setup.AModal : "div"), {
    visible: $setup.isExpanded,
    "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => $setup.isExpanded = $event),
    closable: false,
    centered: "",
    footer: null
  }, {
    default: withCtx(() => [
      $setup.editEnabled && !$setup.readonly ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_a_button, {
            type: "text",
            size: "small",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.isExpanded = !$setup.isExpanded)
          }, {
            default: withCtx(() => [
              $setup.isExpanded ? (openBlock(), createBlock(_component_CilFullscreenExit, {
                key: 0,
                class: "h-2.5"
              })) : (openBlock(), createBlock(_component_CilFullscreen, {
                key: 1,
                class: "h-2.5"
              }))
            ]),
            _: 1
          }),
          !$setup.isForm || $setup.isExpanded ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(_component_a_button, {
              type: "text",
              size: "small",
              onclick: $setup.clear
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            }),
            createVNode(_component_a_button, {
              type: "primary",
              size: "small",
              disabled: !!$setup.error || $setup.localValue === $setup.vModel
            }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: "text-xs",
                  onclick: $setup.onSave
                }, "Save")
              ]),
              _: 1
            }, 8, ["disabled"])
          ])) : createCommentVNode("", true)
        ]),
        createVNode($setup["Editor"], {
          "model-value": $setup.localValue,
          class: normalizeClass(["min-w-full w-80", { "expanded-editor": $setup.isExpanded, "editor": !$setup.isExpanded }]),
          "hide-minimap": true,
          "disable-deep-compare": true,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.localValue = $event)
        }, null, 8, ["model-value", "class"]),
        $setup.error ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString($setup.error.toString()), 1)) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString($setup.vModel), 1))
    ]),
    _: 1
  }, 40, ["visible"]);
}
var __nuxt_component_20 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-1b9614d9"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Cell",
  props: {
    column: null,
    modelValue: null,
    editEnabled: { type: Boolean },
    readOnly: { type: Boolean },
    rowIndex: null,
    active: { type: Boolean },
    virtual: { type: Boolean }
  },
  emits: ["update:modelValue", "save", "navigate", "update:editEnabled"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const column = toRef(props, "column");
    const active = toRef(props, "active", false);
    const virtual = toRef(props, "virtual", false);
    const readOnly = toRef(props, "readOnly", void 0);
    provide(ColumnInj, column);
    provide(EditModeInj, useVModel(props, "editEnabled", emit));
    provide(ActiveCellInj, active);
    if (readOnly == null ? void 0 : readOnly.value) {
      provide(ReadonlyInj, readOnly.value);
    }
    const isForm = inject(IsFormInj, ref(false));
    const isPublic = inject(IsPublicInj, ref(false));
    const isLocked = inject(IsLockedInj, ref(false));
    let changed = ref(false);
    const syncValue = useDebounceFn(function() {
      changed.value = false;
      emit("save");
    }, 1e3);
    const isAutoSaved = computed(() => {
      var _a;
      return [
        UITypes.SingleLineText,
        UITypes.LongText,
        UITypes.PhoneNumber,
        UITypes.Email,
        UITypes.URL,
        UITypes.Number,
        UITypes.Decimal,
        UITypes.Percent,
        UITypes.Count,
        UITypes.AutoNumber,
        UITypes.SpecificDBType,
        UITypes.Geometry
      ].includes((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.uidt);
    });
    const isManualSaved = computed(() => {
      var _a;
      return [UITypes.Currency, UITypes.Duration].includes((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.uidt);
    });
    const vModel = computed({
      get: () => props.modelValue,
      set: (val) => {
        if (val !== props.modelValue) {
          changed.value = true;
          emit("update:modelValue", val);
          if (isAutoSaved.value) {
            syncValue();
          } else if (!isManualSaved.value) {
            emit("save");
            changed.value = true;
          }
        }
      }
    });
    const {
      isPrimary,
      isURL,
      isEmail: isEmail2,
      isJSON,
      isDate,
      isYear,
      isDateTime,
      isTime,
      isBoolean,
      isDuration,
      isRating,
      isCurrency,
      isAttachment,
      isTextArea,
      isString,
      isInt,
      isFloat,
      isDecimal,
      isSingleSelect,
      isMultiSelect,
      isPercent,
      isPhoneNumber
    } = useColumn(column);
    const syncAndNavigate = (dir) => {
      if (isJSON.value)
        return;
      if (changed.value) {
        emit("save");
        changed.value = false;
      }
      emit("navigate", dir);
    };
    const __returned__ = { props, emit, column, active, virtual, readOnly, isForm, isPublic, isLocked, changed, syncValue, isAutoSaved, isManualSaved, vModel, isPrimary, isURL, isEmail: isEmail2, isJSON, isDate, isYear, isDateTime, isTime, isBoolean, isDuration, isRating, isCurrency, isAttachment, isTextArea, isString, isInt, isFloat, isDecimal, isSingleSelect, isMultiSelect, isPercent, isPhoneNumber, syncAndNavigate, NavigateDir };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CellTextArea = __nuxt_component_0;
  const _component_CellCheckbox = __nuxt_component_1;
  const _component_CellAttachment = __nuxt_component_2;
  const _component_CellSingleSelect = __nuxt_component_3;
  const _component_CellMultiSelect = __nuxt_component_4$1;
  const _component_CellDatePicker = __nuxt_component_5;
  const _component_CellYearPicker = __nuxt_component_6;
  const _component_CellDateTimePicker = __nuxt_component_7;
  const _component_CellTimePicker = __nuxt_component_8;
  const _component_CellRating = __nuxt_component_9;
  const _component_CellDuration = __nuxt_component_10;
  const _component_CellEmail = __nuxt_component_11;
  const _component_CellUrl = __nuxt_component_12;
  const _component_CellPhoneNumber = __nuxt_component_13;
  const _component_CellPercent = __nuxt_component_14;
  const _component_CellCurrency = __nuxt_component_15;
  const _component_CellDecimal = __nuxt_component_16;
  const _component_CellInteger = __nuxt_component_17;
  const _component_CellFloat = __nuxt_component_18;
  const _component_CellText = __nuxt_component_19;
  const _component_CellJson = __nuxt_component_20;
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["nc-cell w-full h-full", { "text-blue-600": $setup.isPrimary && !$setup.virtual && !$setup.isForm }]),
    onKeydown: [
      _cache[23] || (_cache[23] = withKeys(withModifiers(() => {
      }, ["stop"]), ["left"])),
      _cache[24] || (_cache[24] = withKeys(withModifiers(() => {
      }, ["stop"]), ["right"])),
      _cache[25] || (_cache[25] = withKeys(withModifiers(() => {
      }, ["stop"]), ["up"])),
      _cache[26] || (_cache[26] = withKeys(withModifiers(() => {
      }, ["stop"]), ["down"])),
      _cache[27] || (_cache[27] = withKeys(withModifiers(($event) => $setup.syncAndNavigate($setup.NavigateDir.NEXT), ["stop", "exact"]), ["enter"])),
      _cache[28] || (_cache[28] = withKeys(withModifiers(($event) => $setup.syncAndNavigate($setup.NavigateDir.PREV), ["stop", "shift", "exact"]), ["enter"]))
    ]
  }, [
    $setup.isTextArea ? (openBlock(), createBlock(_component_CellTextArea, {
      key: 0,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isBoolean ? (openBlock(), createBlock(_component_CellCheckbox, {
      key: 1,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isAttachment ? (openBlock(), createBlock(_component_CellAttachment, {
      key: 2,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.vModel = $event),
      "row-index": $setup.props.rowIndex
    }, null, 8, ["modelValue", "row-index"])) : $setup.isSingleSelect ? (openBlock(), createBlock(_component_CellSingleSelect, {
      key: 3,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isMultiSelect ? (openBlock(), createBlock(_component_CellMultiSelect, {
      key: 4,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isDate ? (openBlock(), createBlock(_component_CellDatePicker, {
      key: 5,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isYear ? (openBlock(), createBlock(_component_CellYearPicker, {
      key: 6,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isDateTime ? (openBlock(), createBlock(_component_CellDateTimePicker, {
      key: 7,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isTime ? (openBlock(), createBlock(_component_CellTimePicker, {
      key: 8,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isRating ? (openBlock(), createBlock(_component_CellRating, {
      key: 9,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isDuration ? (openBlock(), createBlock(_component_CellDuration, {
      key: 10,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isEmail ? (openBlock(), createBlock(_component_CellEmail, {
      key: 11,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isURL ? (openBlock(), createBlock(_component_CellUrl, {
      key: 12,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isPhoneNumber ? (openBlock(), createBlock(_component_CellPhoneNumber, {
      key: 13,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isPercent ? (openBlock(), createBlock(_component_CellPercent, {
      key: 14,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isCurrency ? (openBlock(), createBlock(_component_CellCurrency, {
      key: 15,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isDecimal ? (openBlock(), createBlock(_component_CellDecimal, {
      key: 16,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isInt ? (openBlock(), createBlock(_component_CellInteger, {
      key: 17,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isFloat ? (openBlock(), createBlock(_component_CellFloat, {
      key: 18,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isString ? (openBlock(), createBlock(_component_CellText, {
      key: 19,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : $setup.isJSON ? (openBlock(), createBlock(_component_CellJson, {
      key: 20,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])) : (openBlock(), createBlock(_component_CellText, {
      key: 21,
      modelValue: $setup.vModel,
      "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $setup.vModel = $event)
    }, null, 8, ["modelValue"])),
    ($setup.isLocked || $setup.isPublic && !$setup.isForm) && !$setup.isAttachment ? (openBlock(), createElementBlock("div", {
      key: 22,
      class: "nc-locked-overlay",
      onClick: _cache[22] || (_cache[22] = withModifiers(() => {
      }, ["stop", "prevent"]))
    })) : createCommentVNode("", true)
  ], 34);
}
var __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { MdiArrowExpand as M, __unplugin_components_0$3 as _, __nuxt_component_1$1 as a, __nuxt_component_2$1 as b, __nuxt_component_3$1 as c, __nuxt_component_4 as d, __nuxt_component_2$2 as e, __nuxt_component_0$5 as f, getSystemColumns as g, __nuxt_component_0$4 as h, isSystemColumn as i, __unplugin_components_4$2 as j, __unplugin_components_0$1 as k };
