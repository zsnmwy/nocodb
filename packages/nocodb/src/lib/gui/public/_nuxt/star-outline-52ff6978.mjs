import { d as defineComponent, aE as useConfigInject, g as createVNode, aH as PropTypes, i as inject, r as ref, aM as flattenChildren, aG as cloneElement, aK as _objectSpread2, aD as classNames, aJ as _defineProperty, c1 as Col, dq as isStringElement, c4 as isEmptyElement, bj as initDefaultProps, p as provide, a4 as toRef, e as computed, aN as _typeof, w as watch, aC as _extends, aW as _toConsumableArray, dr as responsiveArray, c0 as Row, o as openBlock, c as createElementBlock, b as createBaseVNode } from "./entry-649fbf77.mjs";
import { e as eagerComputed } from "./index-60a073f2.mjs";
import { u as useBreakpoint, _ as __unplugin_components_5, S as Spin } from "./index-90e3ebc3.mjs";
var listItemMetaProps = function listItemMetaProps2() {
  return {
    avatar: PropTypes.any,
    description: PropTypes.any,
    prefixCls: String,
    title: PropTypes.any
  };
};
var __unplugin_components_6 = defineComponent({
  name: "AListItemMeta",
  props: listItemMetaProps(),
  displayName: "AListItemMeta",
  __ANT_LIST_ITEM_META: true,
  slots: ["avatar", "description", "title"],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("list", props), prefixCls = _useConfigInject.prefixCls;
    return function() {
      var _a, _b, _c, _d, _e, _f;
      var classString = "".concat(prefixCls.value, "-item-meta");
      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var description = (_c = props.description) !== null && _c !== void 0 ? _c : (_d = slots.description) === null || _d === void 0 ? void 0 : _d.call(slots);
      var avatar = (_e = props.avatar) !== null && _e !== void 0 ? _e : (_f = slots.avatar) === null || _f === void 0 ? void 0 : _f.call(slots);
      var content = createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-meta-content")
      }, [title && createVNode("h4", {
        "class": "".concat(prefixCls.value, "-item-meta-title")
      }, [title]), description && createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-meta-description")
      }, [description])]);
      return createVNode("div", {
        "class": classString
      }, [avatar && createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-meta-avatar")
      }, [avatar]), (title || description) && content]);
    };
  }
});
var ListContextKey = Symbol("ListContextKey");
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
var listItemProps = function listItemProps2() {
  return {
    prefixCls: String,
    extra: PropTypes.any,
    actions: PropTypes.array,
    grid: Object,
    colStyle: {
      type: Object,
      default: void 0
    }
  };
};
var __unplugin_components_7 = defineComponent({
  name: "AListItem",
  inheritAttrs: false,
  Meta: __unplugin_components_6,
  props: listItemProps(),
  slots: ["actions", "extra"],
  setup: function setup2(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var _inject = inject(ListContextKey, {
      grid: ref(),
      itemLayout: ref()
    }), itemLayout = _inject.itemLayout, grid = _inject.grid;
    var _useConfigInject = useConfigInject("list", props), prefixCls = _useConfigInject.prefixCls;
    var isItemContainsTextNodeAndNotSingular = function isItemContainsTextNodeAndNotSingular2() {
      var _a;
      var children = ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || [];
      var result;
      children.forEach(function(element) {
        if (isStringElement(element) && !isEmptyElement(element)) {
          result = true;
        }
      });
      return result && children.length > 1;
    };
    var isFlexMode = function isFlexMode2() {
      var _a, _b;
      var extra = (_a = props.extra) !== null && _a !== void 0 ? _a : (_b = slots.extra) === null || _b === void 0 ? void 0 : _b.call(slots);
      if (itemLayout.value === "vertical") {
        return !!extra;
      }
      return !isItemContainsTextNodeAndNotSingular();
    };
    return function() {
      var _a, _b, _c, _d, _e;
      var className = attrs.class, restAttrs = __rest(attrs, ["class"]);
      var pre = prefixCls.value;
      var extra = (_a = props.extra) !== null && _a !== void 0 ? _a : (_b = slots.extra) === null || _b === void 0 ? void 0 : _b.call(slots);
      var children = (_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots);
      var actions = (_d = props.actions) !== null && _d !== void 0 ? _d : flattenChildren((_e = slots.actions) === null || _e === void 0 ? void 0 : _e.call(slots));
      actions = actions && !Array.isArray(actions) ? [actions] : actions;
      var actionsContent = actions && actions.length > 0 && createVNode("ul", {
        "class": "".concat(pre, "-item-action"),
        "key": "actions"
      }, [actions.map(function(action, i) {
        return createVNode("li", {
          "key": "".concat(pre, "-item-action-").concat(i)
        }, [action, i !== actions.length - 1 && createVNode("em", {
          "class": "".concat(pre, "-item-action-split")
        }, null)]);
      })]);
      var Element = grid.value ? "div" : "li";
      var itemChildren = createVNode(Element, _objectSpread2(_objectSpread2({}, restAttrs), {}, {
        "class": classNames("".concat(pre, "-item"), _defineProperty({}, "".concat(pre, "-item-no-flex"), !isFlexMode()), className)
      }), {
        default: function _default() {
          return [itemLayout.value === "vertical" && extra ? [createVNode("div", {
            "class": "".concat(pre, "-item-main"),
            "key": "content"
          }, [children, actionsContent]), createVNode("div", {
            "class": "".concat(pre, "-item-extra"),
            "key": "extra"
          }, [extra])] : [children, actionsContent, cloneElement(extra, {
            key: "extra"
          })]];
        }
      });
      return grid.value ? createVNode(Col, {
        "flex": 1,
        "style": props.colStyle
      }, {
        default: function _default() {
          return [itemChildren];
        }
      }) : itemChildren;
    };
  }
});
var listProps = function listProps2() {
  return {
    bordered: {
      type: Boolean,
      default: void 0
    },
    dataSource: PropTypes.array,
    extra: PropTypes.any,
    grid: {
      type: Object,
      default: void 0
    },
    itemLayout: String,
    loading: {
      type: [Boolean, Object],
      default: void 0
    },
    loadMore: PropTypes.any,
    pagination: {
      type: [Boolean, Object],
      default: void 0
    },
    prefixCls: String,
    rowKey: [String, Number, Function],
    renderItem: Function,
    size: String,
    split: {
      type: Boolean,
      default: void 0
    },
    header: PropTypes.any,
    footer: PropTypes.any,
    locale: {
      type: Object
    }
  };
};
var List = defineComponent({
  name: "AList",
  Item: __unplugin_components_7,
  props: initDefaultProps(listProps(), {
    dataSource: [],
    bordered: false,
    split: true,
    loading: false,
    pagination: false
  }),
  slots: ["extra", "loadMore", "renderItem", "header", "footer"],
  setup: function setup3(props, _ref) {
    var slots = _ref.slots;
    var _a, _b;
    provide(ListContextKey, {
      grid: toRef(props, "grid"),
      itemLayout: toRef(props, "itemLayout")
    });
    var defaultPaginationProps = {
      current: 1,
      total: 0
    };
    var _useConfigInject = useConfigInject("list", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, renderEmpty = _useConfigInject.renderEmpty;
    var paginationObj = computed(function() {
      return props.pagination && _typeof(props.pagination) === "object" ? props.pagination : {};
    });
    var paginationCurrent = ref((_a = paginationObj.value.defaultCurrent) !== null && _a !== void 0 ? _a : 1);
    var paginationSize = ref((_b = paginationObj.value.defaultPageSize) !== null && _b !== void 0 ? _b : 10);
    watch(paginationObj, function() {
      if ("current" in paginationObj.value) {
        paginationCurrent.value = paginationObj.value.current;
      }
      if ("pageSize" in paginationObj.value) {
        paginationSize.value = paginationObj.value.pageSize;
      }
    });
    var listItemsKeys = [];
    var triggerPaginationEvent = function triggerPaginationEvent2(eventName) {
      return function(page, pageSize) {
        paginationCurrent.value = page;
        paginationSize.value = pageSize;
        if (paginationObj.value[eventName]) {
          paginationObj.value[eventName](page, pageSize);
        }
      };
    };
    var onPaginationChange = triggerPaginationEvent("onChange");
    var onPaginationShowSizeChange = triggerPaginationEvent("onShowSizeChange");
    var renderEmptyFunc = function renderEmptyFunc2(renderEmptyHandler) {
      var _a2;
      return createVNode("div", {
        "class": "".concat(prefixCls.value, "-empty-text")
      }, [((_a2 = props.locale) === null || _a2 === void 0 ? void 0 : _a2.emptyText) || renderEmptyHandler("List")]);
    };
    var loadingProp = computed(function() {
      if (typeof props.loading === "boolean") {
        return {
          spinning: props.loading
        };
      } else {
        return props.loading;
      }
    });
    var isLoading = computed(function() {
      return loadingProp.value && loadingProp.value.spinning;
    });
    var sizeCls = computed(function() {
      var size = "";
      switch (props.size) {
        case "large":
          size = "lg";
          break;
        case "small":
          size = "sm";
          break;
      }
      return size;
    });
    var classObj = computed(function() {
      var _ref2;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-vertical"), props.itemLayout === "vertical"), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(sizeCls.value), sizeCls.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-split"), props.split), _defineProperty(_ref2, "".concat(prefixCls.value, "-bordered"), props.bordered), _defineProperty(_ref2, "".concat(prefixCls.value, "-loading"), isLoading.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-grid"), !!props.grid), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _ref2;
    });
    var paginationProps = computed(function() {
      var pp = _extends(_extends(_extends({}, defaultPaginationProps), {
        total: props.dataSource.length,
        current: paginationCurrent.value,
        pageSize: paginationSize.value
      }), props.pagination || {});
      var largestPage = Math.ceil(pp.total / pp.pageSize);
      if (pp.current > largestPage) {
        pp.current = largestPage;
      }
      return pp;
    });
    var splitDataSource = computed(function() {
      var dd = _toConsumableArray(props.dataSource);
      if (props.pagination) {
        if (props.dataSource.length > (paginationProps.value.current - 1) * paginationProps.value.pageSize) {
          dd = _toConsumableArray(props.dataSource).splice((paginationProps.value.current - 1) * paginationProps.value.pageSize, paginationProps.value.pageSize);
        }
      }
      return dd;
    });
    var screens = useBreakpoint();
    var currentBreakpoint = eagerComputed(function() {
      for (var i = 0; i < responsiveArray.length; i += 1) {
        var breakpoint = responsiveArray[i];
        if (screens.value[breakpoint]) {
          return breakpoint;
        }
      }
      return void 0;
    });
    var colStyle = computed(function() {
      if (!props.grid) {
        return void 0;
      }
      var columnCount = currentBreakpoint.value && props.grid[currentBreakpoint.value] ? props.grid[currentBreakpoint.value] : props.grid.column;
      if (columnCount) {
        return {
          width: "".concat(100 / columnCount, "%"),
          maxWidth: "".concat(100 / columnCount, "%")
        };
      }
      return void 0;
    });
    var renderInnerItem = function renderInnerItem2(item, index) {
      var _a2;
      var renderItem = (_a2 = props.renderItem) !== null && _a2 !== void 0 ? _a2 : slots.renderItem;
      if (!renderItem)
        return null;
      var key;
      var rowKeyType = _typeof(props.rowKey);
      if (rowKeyType === "function") {
        key = props.rowKey(item);
      } else if (rowKeyType === "string" || rowKeyType === "number") {
        key = item[props.rowKey];
      } else {
        key = item.key;
      }
      if (!key) {
        key = "list-item-".concat(index);
      }
      listItemsKeys[index] = key;
      return renderItem({
        item,
        index
      });
    };
    return function() {
      var _a2, _b2, _c, _d, _e, _f, _g;
      var loadMore = (_a2 = props.loadMore) !== null && _a2 !== void 0 ? _a2 : (_b2 = slots.loadMore) === null || _b2 === void 0 ? void 0 : _b2.call(slots);
      var footer = (_c = props.footer) !== null && _c !== void 0 ? _c : (_d = slots.footer) === null || _d === void 0 ? void 0 : _d.call(slots);
      var header = (_e = props.header) !== null && _e !== void 0 ? _e : (_f = slots.header) === null || _f === void 0 ? void 0 : _f.call(slots);
      var children = flattenChildren((_g = slots.default) === null || _g === void 0 ? void 0 : _g.call(slots));
      var isSomethingAfterLastItem = !!(loadMore || props.pagination || footer);
      var classString = _extends(_extends({}, classObj.value), _defineProperty({}, "".concat(prefixCls.value, "-something-after-last-item"), isSomethingAfterLastItem));
      var paginationContent = props.pagination ? createVNode("div", {
        "class": "".concat(prefixCls.value, "-pagination")
      }, [createVNode(__unplugin_components_5, _objectSpread2(_objectSpread2({}, paginationProps.value), {}, {
        "onChange": onPaginationChange,
        "onShowSizeChange": onPaginationShowSizeChange
      }), null)]) : null;
      var childrenContent = isLoading.value && createVNode("div", {
        "style": {
          minHeight: "53px"
        }
      }, null);
      if (splitDataSource.value.length > 0) {
        listItemsKeys.length = 0;
        var items = splitDataSource.value.map(function(item, index) {
          return renderInnerItem(item, index);
        });
        var childrenList = items.map(function(child, index) {
          return createVNode("div", {
            "key": listItemsKeys[index],
            "style": colStyle.value
          }, [child]);
        });
        childrenContent = props.grid ? createVNode(Row, {
          "gutter": props.grid.gutter
        }, {
          default: function _default() {
            return [childrenList];
          }
        }) : createVNode("ul", {
          "class": "".concat(prefixCls.value, "-items")
        }, [items]);
      } else if (!children.length && !isLoading.value) {
        childrenContent = renderEmptyFunc(renderEmpty.value);
      }
      var paginationPosition = paginationProps.value.position || "bottom";
      return createVNode("div", {
        "class": classString
      }, [(paginationPosition === "top" || paginationPosition === "both") && paginationContent, header && createVNode("div", {
        "class": "".concat(prefixCls.value, "-header")
      }, [header]), createVNode(Spin, loadingProp.value, {
        default: function _default() {
          return [childrenContent, children];
        }
      }), footer && createVNode("div", {
        "class": "".concat(prefixCls.value, "-footer")
      }, [footer]), loadMore || (paginationPosition === "bottom" || paginationPosition === "both") && paginationContent]);
    };
  }
});
List.install = function(app) {
  app.component(List.name, List);
  app.component(List.Item.name, List.Item);
  app.component(List.Item.Meta.name, List.Item.Meta);
  return app;
};
var __unplugin_components_8 = List;
const _hoisted_1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var __unplugin_components_4 = { name: "mdi-star-outline", render };
export { __unplugin_components_6 as _, __unplugin_components_7 as a, __unplugin_components_8 as b, __unplugin_components_4 as c };
