import { aY as wrapperRaf, d as defineComponent, aE as useConfigInject, i as inject, aC as _extends, g as createVNode, p as provide, e as computed, cS as shallowRef, aJ as _defineProperty$9, aH as PropTypes, dg as warning, r as ref, n as reactive, s as onMounted, ci as onUpdated, aD as classNames, aK as _objectSpread2, cm as getCurrentInstance, aW as _toConsumableArray, aN as _typeof, b0 as _slicedToArray, d8 as camelize, aF as filterEmpty, a6 as watchEffect, dh as _unsupportedIterableToArray, be as useInjectFormItemContext, w as watch, di as isStyleSupport, c3 as isVNode, a5 as renderSlot, c9 as isValidElement, aM as flattenChildren, dj as parseStyleText, cj as Text, aB as onUnmounted, bf as devWarning, b7 as supportsPassive, cN as addEventListenerWrap, y as createTextVNode, co as ResizeObserver, F as Fragment, a4 as toRef, a_ as onBeforeUnmount, dk as onActivated, P as nextTick, cI as canUseDom, ax as toRefs, d7 as toPx, aZ as isVisible, a1 as Menu, cO as _toArray, bd as AntdIcon, X as __unplugin_components_1$1, cx as collapseMotion, B as withDirectives, aq as vShow, aP as Transition, bj as initDefaultProps, cT as toRaw, aX as KeyCode, ch as LoadingOutlined, cR as cloneVNode, b6 as debounce, dl as __unplugin_components_6$1, dm as isEqual, bg as useLocaleReceiver, cA as defaultLocale } from "./entry-649fbf77.mjs";
import { e as eagerComputed } from "./index-60a073f2.mjs";
import { g as getScrollBarSize, a as getTargetScrollBarSize } from "./Modal-affdb140.mjs";
import { a as useState, u as useMergedState } from "./useState-288afe6d.mjs";
import { p as pickAttrs } from "./pickAttrs-4efb0b19.mjs";
import { u as useBreakpoint, S as Spin, _ as __unplugin_components_5 } from "./index-90e3ebc3.mjs";
import { D as DownOutlined, L as List } from "./index-872b715c.mjs";
import { o as omit } from "./omit-52a539d6.mjs";
import { r as radioProps, R as Radio, _ as __unplugin_components_1, c as checkboxGroupProps, a as CheckboxGroupContextKey, C as Checkbox } from "./Checkbox-40a38f26.mjs";
import "./index-cfa33e99.mjs";
import { D as Dropdown } from "./dropdown-7a7d5830.mjs";
import "./index-a2900c1e.mjs";
import { S as SearchOutlined } from "./SearchOutlined-df5cb6c4.mjs";
import "./index-7f1b7214.mjs";
import { I as Input } from "./Input-35ebc16c.mjs";
import { B as Button$1 } from "./button-65b4020b.mjs";
function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj === obj.window;
}
function getScroll(target, top) {
  var _a;
  if (typeof window === "undefined") {
    return 0;
  }
  var method = top ? "scrollTop" : "scrollLeft";
  var result = 0;
  if (isWindow(target)) {
    result = target[top ? "pageYOffset" : "pageXOffset"];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target) {
    result = target[method];
  }
  if (target && !isWindow(target) && typeof result !== "number") {
    result = (_a = (target.ownerDocument || target).documentElement) === null || _a === void 0 ? void 0 : _a[method];
  }
  return result;
}
function easeInOutCubic(t, b, c, d) {
  var cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
function scrollTo(y) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _options$getContainer = options.getContainer, getContainer = _options$getContainer === void 0 ? function() {
    return window;
  } : _options$getContainer, callback = options.callback, _options$duration = options.duration, duration = _options$duration === void 0 ? 450 : _options$duration;
  var container = getContainer();
  var scrollTop = getScroll(container, true);
  var startTime = Date.now();
  var frameFunc = function frameFunc2() {
    var timestamp = Date.now();
    var time = timestamp - startTime;
    var nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration);
    if (isWindow(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop);
    } else if (container instanceof HTMLDocument || container.constructor.name === "HTMLDocument") {
      container.documentElement.scrollTop = nextScrollTop;
    } else {
      container.scrollTop = nextScrollTop;
    }
    if (time < duration) {
      wrapperRaf(frameFunc2);
    } else if (typeof callback === "function") {
      callback();
    }
  };
  wrapperRaf(frameFunc);
}
var Button = defineComponent({
  name: "ARadioButton",
  props: radioProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("radio-button", props), prefixCls = _useConfigInject.prefixCls;
    var radioGroupContext = inject("radioGroupContext", void 0);
    return function() {
      var _a;
      var rProps = _extends(_extends({}, props), {
        prefixCls: prefixCls.value
      });
      if (radioGroupContext) {
        rProps.onChange = radioGroupContext.onRadioChange;
        rProps.checked = rProps.value === radioGroupContext.stateValue.value;
        rProps.disabled = rProps.disabled || radioGroupContext.props.disabled;
      }
      return createVNode(Radio, rProps, {
        default: function _default() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
Radio.Group = __unplugin_components_1;
Radio.Button = Button;
Radio.install = function(app) {
  app.component(Radio.name, Radio);
  app.component(Radio.Group.name, Radio.Group);
  app.component(Radio.Button.name, Radio.Button);
  return app;
};
var TreeContextKey = Symbol("TreeContextKey");
var TreeContext = defineComponent({
  name: "TreeContext",
  props: {
    value: {
      type: Object
    }
  },
  setup: function setup2(props, _ref) {
    var slots = _ref.slots;
    provide(TreeContextKey, computed(function() {
      return props.value;
    }));
    return function() {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
var useInjectTreeContext = function useInjectTreeContext2() {
  return inject(TreeContextKey, computed(function() {
    return {};
  }));
};
var KeysStateKey = Symbol("KeysStateKey");
var useProvideKeysState = function useProvideKeysState2(state) {
  provide(KeysStateKey, state);
};
var useInjectKeysState = function useInjectKeysState2() {
  return inject(KeysStateKey, {
    expandedKeys: shallowRef([]),
    selectedKeys: shallowRef([]),
    loadedKeys: shallowRef([]),
    loadingKeys: shallowRef([]),
    checkedKeys: shallowRef([]),
    halfCheckedKeys: shallowRef([]),
    expandedKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    selectedKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    loadedKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    loadingKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    checkedKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    halfCheckedKeysSet: computed(function() {
      return /* @__PURE__ */ new Set();
    }),
    flattenNodes: shallowRef([])
  });
};
var Indent = function Indent2(_ref) {
  var prefixCls = _ref.prefixCls, level = _ref.level, isStart = _ref.isStart, isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];
  for (var i = 0; i < level; i += 1) {
    var _ref2;
    list.push(createVNode("span", {
      "key": i,
      "class": (_ref2 = {}, _defineProperty$9(_ref2, baseClassName, true), _defineProperty$9(_ref2, "".concat(baseClassName, "-start"), isStart[i]), _defineProperty$9(_ref2, "".concat(baseClassName, "-end"), isEnd[i]), _ref2)
    }, null));
  }
  return createVNode("span", {
    "aria-hidden": "true",
    "class": "".concat(prefixCls, "-indent")
  }, [list]);
};
var Indent$1 = Indent;
var treeNodeProps = {
  eventKey: [String, Number],
  prefixCls: String,
  title: PropTypes.any,
  data: {
    type: Object,
    default: void 0
  },
  parent: {
    type: Object,
    default: void 0
  },
  isStart: {
    type: Array
  },
  isEnd: {
    type: Array
  },
  active: {
    type: Boolean,
    default: void 0
  },
  onMousemove: {
    type: Function
  },
  isLeaf: {
    type: Boolean,
    default: void 0
  },
  checkable: {
    type: Boolean,
    default: void 0
  },
  selectable: {
    type: Boolean,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  disableCheckbox: {
    type: Boolean,
    default: void 0
  },
  icon: PropTypes.any,
  switcherIcon: PropTypes.any,
  domRef: {
    type: Function
  }
};
var nodeListProps = {
  prefixCls: {
    type: String
  },
  motion: {
    type: Object
  },
  focusable: {
    type: Boolean
  },
  activeItem: {
    type: Object
  },
  focused: {
    type: Boolean
  },
  tabindex: {
    type: Number
  },
  checkable: {
    type: Boolean
  },
  selectable: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  height: {
    type: Number
  },
  itemHeight: {
    type: Number
  },
  virtual: {
    type: Boolean
  },
  onScroll: {
    type: Function
  },
  onKeydown: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onActiveChange: {
    type: Function
  },
  onContextmenu: {
    type: Function
  },
  onListChangeStart: {
    type: Function
  },
  onListChangeEnd: {
    type: Function
  }
};
var treeProps$1 = function treeProps() {
  return {
    prefixCls: String,
    focusable: {
      type: Boolean,
      default: void 0
    },
    activeKey: [Number, String],
    tabindex: Number,
    children: PropTypes.any,
    treeData: {
      type: Array
    },
    fieldNames: {
      type: Object
    },
    showLine: {
      type: [Boolean, Object],
      default: void 0
    },
    showIcon: {
      type: Boolean,
      default: void 0
    },
    icon: PropTypes.any,
    selectable: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    multiple: {
      type: Boolean,
      default: void 0
    },
    checkable: {
      type: Boolean,
      default: void 0
    },
    checkStrictly: {
      type: Boolean,
      default: void 0
    },
    draggable: {
      type: [Function, Boolean]
    },
    defaultExpandParent: {
      type: Boolean,
      default: void 0
    },
    autoExpandParent: {
      type: Boolean,
      default: void 0
    },
    defaultExpandAll: {
      type: Boolean,
      default: void 0
    },
    defaultExpandedKeys: {
      type: Array
    },
    expandedKeys: {
      type: Array
    },
    defaultCheckedKeys: {
      type: Array
    },
    checkedKeys: {
      type: [Object, Array]
    },
    defaultSelectedKeys: {
      type: Array
    },
    selectedKeys: {
      type: Array
    },
    allowDrop: {
      type: Function
    },
    dropIndicatorRender: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onContextmenu: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onDblclick: {
      type: Function
    },
    onScroll: {
      type: Function
    },
    onExpand: {
      type: Function
    },
    onCheck: {
      type: Function
    },
    onSelect: {
      type: Function
    },
    onLoad: {
      type: Function
    },
    loadData: {
      type: Function
    },
    loadedKeys: {
      type: Array
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onRightClick: {
      type: Function
    },
    onDragstart: {
      type: Function
    },
    onDragenter: {
      type: Function
    },
    onDragover: {
      type: Function
    },
    onDragleave: {
      type: Function
    },
    onDragend: {
      type: Function
    },
    onDrop: {
      type: Function
    },
    onActiveChange: {
      type: Function
    },
    filterTreeNode: {
      type: Function
    },
    motion: PropTypes.any,
    switcherIcon: PropTypes.any,
    height: Number,
    itemHeight: Number,
    virtual: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    }
  };
};
var __rest$8 = globalThis && globalThis.__rest || function(s, e) {
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
var ICON_OPEN = "open";
var ICON_CLOSE = "close";
var defaultTitle = "---";
var VcTreeNode = defineComponent({
  name: "TreeNode",
  inheritAttrs: false,
  props: treeNodeProps,
  isTreeNode: 1,
  slots: ["title", "icon", "switcherIcon"],
  setup: function setup3(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, expose = _ref.expose;
    warning(!("slots" in props.data), "treeData slots is deprecated, please use ".concat(Object.keys(props.data.slots || {}).map(function(key) {
      return "`v-slot:" + key + "` ";
    }), "instead"));
    var dragNodeHighlight = ref(false);
    var context = useInjectTreeContext();
    var _useInjectKeysState = useInjectKeysState(), expandedKeysSet = _useInjectKeysState.expandedKeysSet, selectedKeysSet = _useInjectKeysState.selectedKeysSet, loadedKeysSet = _useInjectKeysState.loadedKeysSet, loadingKeysSet = _useInjectKeysState.loadingKeysSet, checkedKeysSet = _useInjectKeysState.checkedKeysSet, halfCheckedKeysSet = _useInjectKeysState.halfCheckedKeysSet;
    var _context$value = context.value, dragOverNodeKey = _context$value.dragOverNodeKey, dropPosition = _context$value.dropPosition, keyEntities = _context$value.keyEntities;
    var mergedTreeNodeProps = computed(function() {
      return getTreeNodeProps(props.eventKey, {
        expandedKeysSet: expandedKeysSet.value,
        selectedKeysSet: selectedKeysSet.value,
        loadedKeysSet: loadedKeysSet.value,
        loadingKeysSet: loadingKeysSet.value,
        checkedKeysSet: checkedKeysSet.value,
        halfCheckedKeysSet: halfCheckedKeysSet.value,
        dragOverNodeKey,
        dropPosition,
        keyEntities
      });
    });
    var expanded = eagerComputed(function() {
      return mergedTreeNodeProps.value.expanded;
    });
    var selected = eagerComputed(function() {
      return mergedTreeNodeProps.value.selected;
    });
    var checked = eagerComputed(function() {
      return mergedTreeNodeProps.value.checked;
    });
    var loaded = eagerComputed(function() {
      return mergedTreeNodeProps.value.loaded;
    });
    var loading = eagerComputed(function() {
      return mergedTreeNodeProps.value.loading;
    });
    var halfChecked = eagerComputed(function() {
      return mergedTreeNodeProps.value.halfChecked;
    });
    var dragOver = eagerComputed(function() {
      return mergedTreeNodeProps.value.dragOver;
    });
    var dragOverGapTop = eagerComputed(function() {
      return mergedTreeNodeProps.value.dragOverGapTop;
    });
    var dragOverGapBottom = eagerComputed(function() {
      return mergedTreeNodeProps.value.dragOverGapBottom;
    });
    var pos = eagerComputed(function() {
      return mergedTreeNodeProps.value.pos;
    });
    var selectHandle = ref();
    var hasChildren = computed(function() {
      var eventKey = props.eventKey;
      var keyEntities2 = context.value.keyEntities;
      var _ref2 = keyEntities2[eventKey] || {}, children = _ref2.children;
      return !!(children || []).length;
    });
    var isLeaf = computed(function() {
      var isLeaf2 = props.isLeaf;
      var loadData = context.value.loadData;
      var has = hasChildren.value;
      if (isLeaf2 === false) {
        return false;
      }
      return isLeaf2 || !loadData && !has || loadData && loaded.value && !has;
    });
    var nodeState = computed(function() {
      if (isLeaf.value) {
        return null;
      }
      return expanded.value ? ICON_OPEN : ICON_CLOSE;
    });
    var isDisabled = computed(function() {
      var disabled = props.disabled;
      var treeDisabled = context.value.disabled;
      return !!(treeDisabled || disabled);
    });
    var isCheckable = computed(function() {
      var checkable = props.checkable;
      var treeCheckable = context.value.checkable;
      if (!treeCheckable || checkable === false)
        return false;
      return treeCheckable;
    });
    var isSelectable = computed(function() {
      var selectable = props.selectable;
      var treeSelectable = context.value.selectable;
      if (typeof selectable === "boolean") {
        return selectable;
      }
      return treeSelectable;
    });
    var renderArgsData = computed(function() {
      var data = props.data, active = props.active, checkable = props.checkable, disableCheckbox = props.disableCheckbox, disabled = props.disabled, selectable = props.selectable;
      return _extends(_extends({
        active,
        checkable,
        disableCheckbox,
        disabled,
        selectable
      }, data), {
        dataRef: data,
        data,
        isLeaf: isLeaf.value,
        checked: checked.value,
        expanded: expanded.value,
        loading: loading.value,
        selected: selected.value,
        halfChecked: halfChecked.value
      });
    });
    var instance = getCurrentInstance();
    var eventData = computed(function() {
      var eventKey = props.eventKey;
      var keyEntities2 = context.value.keyEntities;
      var _ref3 = keyEntities2[eventKey] || {}, parent = _ref3.parent;
      return _extends(_extends({}, convertNodePropsToEventData(_extends({}, props, mergedTreeNodeProps.value))), {
        parent
      });
    });
    var dragNodeEvent = reactive({
      eventData,
      eventKey: computed(function() {
        return props.eventKey;
      }),
      selectHandle,
      pos,
      key: instance.vnode.key
    });
    expose(dragNodeEvent);
    var onSelectorDoubleClick = function onSelectorDoubleClick2(e) {
      var onNodeDoubleClick = context.value.onNodeDoubleClick;
      onNodeDoubleClick(e, eventData.value);
    };
    var onSelect = function onSelect2(e) {
      if (isDisabled.value)
        return;
      var onNodeSelect = context.value.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, eventData.value);
    };
    var onCheck = function onCheck2(e) {
      if (isDisabled.value)
        return;
      var disableCheckbox = props.disableCheckbox;
      var onNodeCheck = context.value.onNodeCheck;
      if (!isCheckable.value || disableCheckbox)
        return;
      e.preventDefault();
      var targetChecked = !checked.value;
      onNodeCheck(e, eventData.value, targetChecked);
    };
    var onSelectorClick = function onSelectorClick2(e) {
      var onNodeClick = context.value.onNodeClick;
      onNodeClick(e, eventData.value);
      if (isSelectable.value) {
        onSelect(e);
      } else {
        onCheck(e);
      }
    };
    var onMouseEnter = function onMouseEnter2(e) {
      var onNodeMouseEnter = context.value.onNodeMouseEnter;
      onNodeMouseEnter(e, eventData.value);
    };
    var onMouseLeave = function onMouseLeave2(e) {
      var onNodeMouseLeave = context.value.onNodeMouseLeave;
      onNodeMouseLeave(e, eventData.value);
    };
    var onContextmenu = function onContextmenu2(e) {
      var onNodeContextMenu = context.value.onNodeContextMenu;
      onNodeContextMenu(e, eventData.value);
    };
    var onDragStart = function onDragStart2(e) {
      var onNodeDragStart = context.value.onNodeDragStart;
      e.stopPropagation();
      dragNodeHighlight.value = true;
      onNodeDragStart(e, dragNodeEvent);
      try {
        e.dataTransfer.setData("text/plain", "");
      } catch (error) {
      }
    };
    var onDragEnter = function onDragEnter2(e) {
      var onNodeDragEnter = context.value.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, dragNodeEvent);
    };
    var onDragOver = function onDragOver2(e) {
      var onNodeDragOver = context.value.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, dragNodeEvent);
    };
    var onDragLeave = function onDragLeave2(e) {
      var onNodeDragLeave = context.value.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, dragNodeEvent);
    };
    var onDragEnd = function onDragEnd2(e) {
      var onNodeDragEnd = context.value.onNodeDragEnd;
      e.stopPropagation();
      dragNodeHighlight.value = false;
      onNodeDragEnd(e, dragNodeEvent);
    };
    var onDrop = function onDrop2(e) {
      var onNodeDrop = context.value.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();
      dragNodeHighlight.value = false;
      onNodeDrop(e, dragNodeEvent);
    };
    var onExpand = function onExpand2(e) {
      var onNodeExpand = context.value.onNodeExpand;
      if (loading.value)
        return;
      onNodeExpand(e, eventData.value);
    };
    var isDraggable = function isDraggable2() {
      var data = props.data;
      var draggable = context.value.draggable;
      return !!(draggable && (!draggable.nodeDraggable || draggable.nodeDraggable(data)));
    };
    var renderDragHandler = function renderDragHandler2() {
      var _context$value2 = context.value, draggable = _context$value2.draggable, prefixCls = _context$value2.prefixCls;
      return (draggable === null || draggable === void 0 ? void 0 : draggable.icon) ? createVNode("span", {
        "class": "".concat(prefixCls, "-draggable-icon")
      }, [draggable.icon]) : null;
    };
    var renderSwitcherIconDom = function renderSwitcherIconDom2() {
      var _a, _b, _c;
      var _props$switcherIcon = props.switcherIcon, switcherIconFromProps = _props$switcherIcon === void 0 ? slots.switcherIcon || ((_a = context.value.slots) === null || _a === void 0 ? void 0 : _a[(_c = (_b = props.data) === null || _b === void 0 ? void 0 : _b.slots) === null || _c === void 0 ? void 0 : _c.switcherIcon]) : _props$switcherIcon;
      var switcherIconFromCtx = context.value.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;
      if (typeof switcherIcon === "function") {
        return switcherIcon(renderArgsData.value);
      }
      return switcherIcon;
    };
    var syncLoadData = function syncLoadData2() {
      var _context$value3 = context.value, loadData = _context$value3.loadData, onNodeLoad = _context$value3.onNodeLoad;
      if (loading.value) {
        return;
      }
      if (loadData && expanded.value && !isLeaf.value) {
        if (!hasChildren.value && !loaded.value) {
          onNodeLoad(eventData.value);
        }
      }
    };
    onMounted(function() {
      syncLoadData();
    });
    onUpdated(function() {
      syncLoadData();
    });
    var renderSwitcher = function renderSwitcher2() {
      var prefixCls = context.value.prefixCls;
      var switcherIconDom = renderSwitcherIconDom();
      if (isLeaf.value) {
        return switcherIconDom !== false ? createVNode("span", {
          "class": classNames("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, [switcherIconDom]) : null;
      }
      var switcherCls = classNames("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded.value ? ICON_OPEN : ICON_CLOSE));
      return switcherIconDom !== false ? createVNode("span", {
        "onClick": onExpand,
        "class": switcherCls
      }, [switcherIconDom]) : null;
    };
    var renderCheckbox = function renderCheckbox2() {
      var _a, _b;
      var disableCheckbox = props.disableCheckbox;
      var prefixCls = context.value.prefixCls;
      var disabled = isDisabled.value;
      var checkable = isCheckable.value;
      if (!checkable)
        return null;
      return createVNode("span", {
        "class": classNames("".concat(prefixCls, "-checkbox"), checked.value && "".concat(prefixCls, "-checkbox-checked"), !checked.value && halfChecked.value && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        "onClick": onCheck
      }, [(_b = (_a = context.value).customCheckable) === null || _b === void 0 ? void 0 : _b.call(_a)]);
    };
    var renderIcon = function renderIcon2() {
      var prefixCls = context.value.prefixCls;
      return createVNode("span", {
        "class": classNames("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(nodeState.value || "docu"), loading.value && "".concat(prefixCls, "-icon_loading"))
      }, null);
    };
    var renderDropIndicator = function renderDropIndicator2() {
      var disabled = props.disabled, eventKey = props.eventKey;
      var _context$value4 = context.value, draggable = _context$value4.draggable, dropLevelOffset = _context$value4.dropLevelOffset, dropPosition2 = _context$value4.dropPosition, prefixCls = _context$value4.prefixCls, indent = _context$value4.indent, dropIndicatorRender2 = _context$value4.dropIndicatorRender, dragOverNodeKey2 = _context$value4.dragOverNodeKey, direction = _context$value4.direction;
      var rootDraggable = draggable !== false;
      var showIndicator = !disabled && rootDraggable && dragOverNodeKey2 === eventKey;
      return showIndicator ? dropIndicatorRender2({
        dropPosition: dropPosition2,
        dropLevelOffset,
        indent,
        prefixCls,
        direction
      }) : null;
    };
    var renderSelector = function renderSelector2() {
      var _a, _b, _c, _d, _e, _f;
      var _props$icon = props.icon, icon = _props$icon === void 0 ? slots.icon : _props$icon, data = props.data;
      var title = slots.title || ((_a = context.value.slots) === null || _a === void 0 ? void 0 : _a[(_c = (_b = props.data) === null || _b === void 0 ? void 0 : _b.slots) === null || _c === void 0 ? void 0 : _c.title]) || ((_d = context.value.slots) === null || _d === void 0 ? void 0 : _d.title) || props.title;
      var _context$value5 = context.value, prefixCls = _context$value5.prefixCls, showIcon = _context$value5.showIcon, treeIcon = _context$value5.icon, loadData = _context$value5.loadData;
      var disabled = isDisabled.value;
      var wrapClass = "".concat(prefixCls, "-node-content-wrapper");
      var $icon;
      if (showIcon) {
        var currentIcon = icon || ((_e = context.value.slots) === null || _e === void 0 ? void 0 : _e[(_f = data === null || data === void 0 ? void 0 : data.slots) === null || _f === void 0 ? void 0 : _f.icon]) || treeIcon;
        $icon = currentIcon ? createVNode("span", {
          "class": classNames("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, [typeof currentIcon === "function" ? currentIcon(renderArgsData.value) : currentIcon]) : renderIcon();
      } else if (loadData && loading.value) {
        $icon = renderIcon();
      }
      var titleNode;
      if (typeof title === "function") {
        titleNode = title(renderArgsData.value);
      } else {
        titleNode = title;
      }
      titleNode = titleNode === void 0 ? defaultTitle : titleNode;
      var $title = createVNode("span", {
        "class": "".concat(prefixCls, "-title")
      }, [titleNode]);
      return createVNode("span", {
        "ref": selectHandle,
        "title": typeof title === "string" ? title : "",
        "class": classNames("".concat(wrapClass), "".concat(wrapClass, "-").concat(nodeState.value || "normal"), !disabled && (selected.value || dragNodeHighlight.value) && "".concat(prefixCls, "-node-selected")),
        "onMouseenter": onMouseEnter,
        "onMouseleave": onMouseLeave,
        "onContextmenu": onContextmenu,
        "onClick": onSelectorClick,
        "onDblclick": onSelectorDoubleClick
      }, [$icon, $title, renderDropIndicator()]);
    };
    return function() {
      var _classNames;
      var _a = _extends(_extends({}, props), attrs), eventKey = _a.eventKey, isLeaf2 = _a.isLeaf, isStart = _a.isStart, isEnd = _a.isEnd, domRef = _a.domRef, active = _a.active;
      _a.data;
      var onMousemove = _a.onMousemove, selectable = _a.selectable, otherProps = __rest$8(_a, ["eventKey", "isLeaf", "isStart", "isEnd", "domRef", "active", "data", "onMousemove", "selectable"]);
      var _context$value6 = context.value, prefixCls = _context$value6.prefixCls, filterTreeNode = _context$value6.filterTreeNode, keyEntities2 = _context$value6.keyEntities, dropContainerKey = _context$value6.dropContainerKey, dropTargetKey = _context$value6.dropTargetKey, draggingNodeKey = _context$value6.draggingNodeKey;
      var disabled = isDisabled.value;
      var dataOrAriaAttributeProps = pickAttrs(otherProps, {
        aria: true,
        data: true
      });
      var _ref4 = keyEntities2[eventKey] || {}, level = _ref4.level;
      var isEndNode = isEnd[isEnd.length - 1];
      var mergedDraggable = isDraggable();
      var draggableWithoutDisabled = !disabled && mergedDraggable;
      var dragging = draggingNodeKey === eventKey;
      var ariaSelected = selectable !== void 0 ? {
        "aria-selected": !!selectable
      } : void 0;
      return createVNode("div", _objectSpread2(_objectSpread2({
        "ref": domRef,
        "class": classNames(attrs.class, "".concat(prefixCls, "-treenode"), (_classNames = {}, _defineProperty$9(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), _defineProperty$9(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded.value ? "open" : "close"), !isLeaf2), _defineProperty$9(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked.value), _defineProperty$9(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked.value), _defineProperty$9(_classNames, "".concat(prefixCls, "-treenode-selected"), selected.value), _defineProperty$9(_classNames, "".concat(prefixCls, "-treenode-loading"), loading.value), _defineProperty$9(_classNames, "".concat(prefixCls, "-treenode-active"), active), _defineProperty$9(_classNames, "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), _defineProperty$9(_classNames, "".concat(prefixCls, "-treenode-draggable"), draggableWithoutDisabled), _defineProperty$9(_classNames, "dragging", dragging), _defineProperty$9(_classNames, "drop-target", dropTargetKey === eventKey), _defineProperty$9(_classNames, "drop-container", dropContainerKey === eventKey), _defineProperty$9(_classNames, "drag-over", !disabled && dragOver.value), _defineProperty$9(_classNames, "drag-over-gap-top", !disabled && dragOverGapTop.value), _defineProperty$9(_classNames, "drag-over-gap-bottom", !disabled && dragOverGapBottom.value), _defineProperty$9(_classNames, "filter-node", filterTreeNode && filterTreeNode(eventData.value)), _classNames)),
        "style": attrs.style,
        "draggable": draggableWithoutDisabled,
        "aria-grabbed": dragging,
        "onDragstart": draggableWithoutDisabled ? onDragStart : void 0,
        "onDragenter": mergedDraggable ? onDragEnter : void 0,
        "onDragover": mergedDraggable ? onDragOver : void 0,
        "onDragleave": mergedDraggable ? onDragLeave : void 0,
        "onDrop": mergedDraggable ? onDrop : void 0,
        "onDragend": mergedDraggable ? onDragEnd : void 0,
        "onMousemove": onMousemove
      }, ariaSelected), dataOrAriaAttributeProps), [createVNode(Indent$1, {
        "prefixCls": prefixCls,
        "level": level,
        "isStart": isStart,
        "isEnd": isEnd
      }, null), renderDragHandler(), renderSwitcher(), renderCheckbox(), renderSelector()]);
    };
  }
});
globalThis && globalThis.__rest || function(s, e) {
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
function arrDel(list, value) {
  if (!list)
    return [];
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}
function arrAdd(list, value) {
  var clone = (list || []).slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}
function posToArr(pos) {
  return pos.split("-");
}
function getPosition(level, index) {
  return "".concat(level, "-").concat(index);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
  var dragChildrenKeys = [];
  var entity = keyEntities[dragNodeKey];
  function dig() {
    var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    list.forEach(function(_ref) {
      var key = _ref.key, children = _ref.children;
      dragChildrenKeys.push(key);
      dig(children);
    });
  }
  dig(entity.children);
  return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
  if (treeNodeEntity.parent) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
  }
  return false;
}
function isFirstChild(treeNodeEntity) {
  var posArr = posToArr(treeNodeEntity.pos);
  return Number(posArr[posArr.length - 1]) === 0;
}
function calcDropPosition(event, dragNode, targetNode, indent, startMousePosition, allowDrop2, flattenedNodes, keyEntities, expandKeysSet, direction) {
  var _a;
  var clientX = event.clientX, clientY = event.clientY;
  var _event$target$getBoun = event.target.getBoundingClientRect(), top = _event$target$getBoun.top, height = _event$target$getBoun.height;
  var horizontalMouseOffset = (direction === "rtl" ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
  var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent;
  var abstractDropNodeEntity = keyEntities[targetNode.eventKey];
  if (clientY < top + height / 2) {
    var nodeIndex = flattenedNodes.findIndex(function(flattenedNode) {
      return flattenedNode.key === abstractDropNodeEntity.key;
    });
    var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
    var prevNodeKey = flattenedNodes[prevNodeIndex].key;
    abstractDropNodeEntity = keyEntities[prevNodeKey];
  }
  var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
  var abstractDragOverEntity = abstractDropNodeEntity;
  var dragOverNodeKey = abstractDropNodeEntity.key;
  var dropPosition = 0;
  var dropLevelOffset = 0;
  if (!expandKeysSet.has(initialAbstractDropNodeKey)) {
    for (var i = 0; i < rawDropLevelOffset; i += 1) {
      if (isLastChild(abstractDropNodeEntity)) {
        abstractDropNodeEntity = abstractDropNodeEntity.parent;
        dropLevelOffset += 1;
      } else {
        break;
      }
    }
  }
  var abstractDragDataNode = dragNode.eventData;
  var abstractDropDataNode = abstractDropNodeEntity.node;
  var dropAllowed = true;
  if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop2({
    dragNode: abstractDragDataNode,
    dropNode: abstractDropDataNode,
    dropPosition: -1
  }) && abstractDropNodeEntity.key === targetNode.eventKey) {
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && expandKeysSet.has(dragOverNodeKey)) {
    if (allowDrop2({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 0
    })) {
      dropPosition = 0;
    } else {
      dropAllowed = false;
    }
  } else if (dropLevelOffset === 0) {
    if (rawDropLevelOffset > -1.5) {
      if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    } else {
      if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 0
      })) {
        dropPosition = 0;
      } else if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    }
  } else {
    if (allowDrop2({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 1
    })) {
      dropPosition = 1;
    } else {
      dropAllowed = false;
    }
  }
  return {
    dropPosition,
    dropLevelOffset,
    dropTargetKey: abstractDropNodeEntity.key,
    dropTargetPos: abstractDropNodeEntity.pos,
    dragOverNodeKey,
    dropContainerKey: dropPosition === 0 ? null : ((_a = abstractDropNodeEntity.parent) === null || _a === void 0 ? void 0 : _a.key) || null,
    dropAllowed
  };
}
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys)
    return void 0;
  var multiple = props.multiple;
  if (multiple) {
    return selectedKeys.slice();
  }
  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }
  var keyProps;
  if (Array.isArray(keys)) {
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: void 0
    };
  } else if (_typeof(keys) === "object") {
    keyProps = {
      checkedKeys: keys.checked || void 0,
      halfCheckedKeys: keys.halfChecked || void 0
    };
  } else {
    return null;
  }
  return keyProps;
}
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = /* @__PURE__ */ new Set();
  function conductUp(key) {
    if (expandedKeys.has(key))
      return;
    var entity = keyEntities[key];
    if (!entity)
      return;
    expandedKeys.add(key);
    var parent = entity.parent, node = entity.node;
    if (node.disabled)
      return;
    if (parent) {
      conductUp(parent.key);
    }
  }
  (keyList || []).forEach(function(key) {
    conductUp(key);
  });
  return _toConsumableArray(expandedKeys);
}
var __rest$7 = globalThis && globalThis.__rest || function(s, e) {
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
function getKey(key, pos) {
  if (key !== null && key !== void 0) {
    return key;
  }
  return pos;
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {}, title = _ref.title, _title = _ref._title, key = _ref.key, children = _ref.children;
  var mergedTitle = title || "title";
  return {
    title: mergedTitle,
    _title: _title || [mergedTitle],
    key: key || "key",
    children: children || "children"
  };
}
function convertTreeToData(rootNodes) {
  function dig() {
    var node = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var treeNodes = filterEmpty(node);
    return treeNodes.map(function(treeNode) {
      var _a, _b, _c, _d;
      if (!isTreeNode(treeNode)) {
        return null;
      }
      var slots = treeNode.children || {};
      var key = treeNode.key;
      var props = {};
      for (var _i = 0, _Object$entries = Object.entries(treeNode.props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
        props[camelize(k)] = v;
      }
      var isLeaf = props.isLeaf, checkable = props.checkable, selectable = props.selectable, disabled = props.disabled, disableCheckbox = props.disableCheckbox;
      var newProps = {
        isLeaf: isLeaf || isLeaf === "" || void 0,
        checkable: checkable || checkable === "" || void 0,
        selectable: selectable || selectable === "" || void 0,
        disabled: disabled || disabled === "" || void 0,
        disableCheckbox: disableCheckbox || disableCheckbox === "" || void 0
      };
      var slotsProps = _extends(_extends({}, props), newProps);
      var _props$title = props.title, title = _props$title === void 0 ? (_a = slots.title) === null || _a === void 0 ? void 0 : _a.call(slots, slotsProps) : _props$title, _props$icon = props.icon, icon = _props$icon === void 0 ? (_b = slots.icon) === null || _b === void 0 ? void 0 : _b.call(slots, slotsProps) : _props$icon, _props$switcherIcon = props.switcherIcon, switcherIcon = _props$switcherIcon === void 0 ? (_c = slots.switcherIcon) === null || _c === void 0 ? void 0 : _c.call(slots, slotsProps) : _props$switcherIcon, rest = __rest$7(props, ["title", "icon", "switcherIcon"]);
      var children = (_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots);
      var dataNode = _extends(_extends(_extends({}, rest), {
        title,
        icon,
        switcherIcon,
        key,
        isLeaf
      }), newProps);
      var parsedChildren = dig(children);
      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }
      return dataNode;
    });
  }
  return dig(rootNodes);
}
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
  var _fillFieldNames = fillFieldNames(fieldNames), fieldTitles = _fillFieldNames._title, fieldKey = _fillFieldNames.key, fieldChildren = _fillFieldNames.children;
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];
  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return list.map(function(treeNode, index) {
      var pos = getPosition(parent ? parent.pos : "0", index);
      var mergedKey = getKey(treeNode[fieldKey], pos);
      var mergedTitle;
      for (var i = 0; i < fieldTitles.length; i += 1) {
        var fieldTitle = fieldTitles[i];
        if (treeNode[fieldTitle] !== void 0) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }
      var flattenNode = _extends(_extends({}, omit(treeNode, [].concat(_toConsumableArray(fieldTitles), [fieldKey, fieldChildren]))), {
        title: mergedTitle,
        key: mergedKey,
        parent,
        pos,
        children: null,
        data: treeNode,
        isStart: [].concat(_toConsumableArray(parent ? parent.isStart : []), [index === 0]),
        isEnd: [].concat(_toConsumableArray(parent ? parent.isEnd : []), [index === list.length - 1])
      });
      flattenList.push(flattenNode);
      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
function traverseDataNodes(dataNodes, callback, config) {
  var mergedConfig = {};
  if (_typeof(config) === "object") {
    mergedConfig = config;
  } else {
    mergedConfig = {
      externalGetKey: config
    };
  }
  mergedConfig = mergedConfig || {};
  var _mergedConfig = mergedConfig, childrenPropName = _mergedConfig.childrenPropName, externalGetKey = _mergedConfig.externalGetKey, fieldNames = _mergedConfig.fieldNames;
  var _fillFieldNames2 = fillFieldNames(fieldNames), fieldKey = _fillFieldNames2.key, fieldChildren = _fillFieldNames2.children;
  var mergeChildrenPropName = childrenPropName || fieldChildren;
  var syntheticGetKey;
  if (externalGetKey) {
    if (typeof externalGetKey === "string") {
      syntheticGetKey = function syntheticGetKey2(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === "function") {
      syntheticGetKey = function syntheticGetKey2(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey2(node, pos) {
      return getKey(node[fieldKey], pos);
    };
  }
  function processNode(node, index, parent, pathNodes) {
    var children = node ? node[mergeChildrenPropName] : dataNodes;
    var pos = node ? getPosition(parent.pos, index) : "0";
    var connectNodes = node ? [].concat(_toConsumableArray(pathNodes), [node]) : [];
    if (node) {
      var key = syntheticGetKey(node, pos);
      var data = {
        node,
        index,
        pos,
        key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1,
        nodes: connectNodes
      };
      callback(data);
    }
    if (children) {
      children.forEach(function(subNode, subIndex) {
        processNode(subNode, subIndex, {
          node,
          pos,
          level: parent ? parent.level + 1 : -1
        }, connectNodes);
      });
    }
  }
  processNode(null);
}
function convertDataToEntities(dataNodes) {
  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, initWrapper = _ref2.initWrapper, processEntity = _ref2.processEntity, onProcessFinished = _ref2.onProcessFinished, externalGetKey = _ref2.externalGetKey, childrenPropName = _ref2.childrenPropName, fieldNames = _ref2.fieldNames;
  var legacyExternalGetKey = arguments.length > 2 ? arguments[2] : void 0;
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities,
    keyEntities
  };
  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }
  traverseDataNodes(dataNodes, function(item) {
    var node = item.node, index = item.index, pos = item.pos, key = item.key, parentPos = item.parentPos, level = item.level, nodes = item.nodes;
    var entity = {
      node,
      nodes,
      index,
      key,
      pos,
      level
    };
    var mergedKey = getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity;
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }
    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, {
    externalGetKey: mergedExternalGetKey,
    childrenPropName,
    fieldNames
  });
  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }
  return wrapper;
}
function getTreeNodeProps(key, _ref3) {
  var expandedKeysSet = _ref3.expandedKeysSet, selectedKeysSet = _ref3.selectedKeysSet, loadedKeysSet = _ref3.loadedKeysSet, loadingKeysSet = _ref3.loadingKeysSet, checkedKeysSet = _ref3.checkedKeysSet, halfCheckedKeysSet = _ref3.halfCheckedKeysSet, dragOverNodeKey = _ref3.dragOverNodeKey, dropPosition = _ref3.dropPosition, keyEntities = _ref3.keyEntities;
  var entity = keyEntities[key];
  var treeNodeProps2 = {
    eventKey: key,
    expanded: expandedKeysSet.has(key),
    selected: selectedKeysSet.has(key),
    loaded: loadedKeysSet.has(key),
    loading: loadingKeysSet.has(key),
    checked: checkedKeysSet.has(key),
    halfChecked: halfCheckedKeysSet.has(key),
    pos: String(entity ? entity.pos : ""),
    parent: entity.parent,
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps2;
}
function convertNodePropsToEventData(props) {
  var data = props.data, expanded = props.expanded, selected = props.selected, checked = props.checked, loaded = props.loaded, loading = props.loading, halfChecked = props.halfChecked, dragOver = props.dragOver, dragOverGapTop = props.dragOverGapTop, dragOverGapBottom = props.dragOverGapBottom, pos = props.pos, active = props.active, eventKey = props.eventKey;
  var eventData = _extends(_extends({
    dataRef: data
  }, data), {
    expanded,
    selected,
    checked,
    loaded,
    loading,
    halfChecked,
    dragOver,
    dragOverGapTop,
    dragOverGapBottom,
    pos,
    active,
    eventKey,
    key: eventKey
  });
  if (!("props" in eventData)) {
    Object.defineProperty(eventData, "props", {
      get: function get() {
        return props;
      }
    });
  }
  return eventData;
}
function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = /* @__PURE__ */ new Set();
  halfCheckedKeys.forEach(function(key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}
function isCheckDisabled(node) {
  var _ref = node || {}, disabled = _ref.disabled, disableCheckbox = _ref.disableCheckbox, checkable = _ref.checkable;
  return !!(disabled || disableCheckbox) || checkable === false;
}
function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = /* @__PURE__ */ new Set();
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || /* @__PURE__ */ new Set();
    entities.forEach(function(entity) {
      var key = entity.key, node = entity.node, _entity$children = entity.children, children = _entity$children === void 0 ? [] : _entity$children;
      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function(childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function(childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  }
  var visitedKeys = /* @__PURE__ */ new Set();
  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || /* @__PURE__ */ new Set();
    _entities.forEach(function(entity) {
      var parent = entity.parent, node = entity.node;
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function(childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function(_ref2) {
        var key = _ref2.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (allChecked) {
        checkedKeys.add(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys);
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || /* @__PURE__ */ new Set();
    entities.forEach(function(entity) {
      var key = entity.key, node = entity.node, _entity$children2 = entity.children, children = _entity$children2 === void 0 ? [] : _entity$children2;
      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function(childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function(childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  }
  halfCheckedKeys = /* @__PURE__ */ new Set();
  var visitedKeys = /* @__PURE__ */ new Set();
  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || /* @__PURE__ */ new Set();
    _entities2.forEach(function(entity) {
      var parent = entity.parent, node = entity.node;
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function(childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function(_ref3) {
        var key = _ref3.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
function conductCheck(keyList, checked, keyEntities, maxLevel, levelEntities, getCheckDisabled) {
  var syntheticGetCheckDisabled;
  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  }
  var keys = new Set(keyList.filter(function(key) {
    var hasEntity = !!keyEntities[key];
    return hasEntity;
  }));
  var result;
  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }
  return result;
}
function useMaxLevel(keyEntities) {
  var maxLevel = ref(0);
  var levelEntities = shallowRef();
  watchEffect(function() {
    var newLevelEntities = /* @__PURE__ */ new Map();
    var newMaxLevel = 0;
    var keyEntitiesValue = keyEntities.value || {};
    for (var key in keyEntitiesValue) {
      if (Object.prototype.hasOwnProperty.call(keyEntitiesValue, key)) {
        var entity = keyEntitiesValue[key];
        var level = entity.level;
        var levelSet = newLevelEntities.get(level);
        if (!levelSet) {
          levelSet = /* @__PURE__ */ new Set();
          newLevelEntities.set(level, levelSet);
        }
        levelSet.add(entity);
        newMaxLevel = Math.max(newMaxLevel, level);
      }
    }
    maxLevel.value = newMaxLevel;
    levelEntities.value = newLevelEntities;
  });
  return {
    maxLevel,
    levelEntities
  };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return {
        s: F,
        n: function n() {
          if (i >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}
var __unplugin_components_6 = defineComponent({
  name: "ACheckboxGroup",
  props: checkboxGroupProps(),
  setup: function setup4(props, _ref) {
    var slots = _ref.slots, emit = _ref.emit, expose = _ref.expose;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject("checkbox", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var mergedValue = ref((props.value === void 0 ? props.defaultValue : props.value) || []);
    watch(function() {
      return props.value;
    }, function() {
      mergedValue.value = props.value || [];
    });
    var options = computed(function() {
      return props.options.map(function(option) {
        if (typeof option === "string" || typeof option === "number") {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    });
    var triggerUpdate = ref(Symbol());
    var registeredValuesMap = ref(/* @__PURE__ */ new Map());
    var cancelValue = function cancelValue2(id) {
      registeredValuesMap.value.delete(id);
      triggerUpdate.value = Symbol();
    };
    var registerValue = function registerValue2(id, value) {
      registeredValuesMap.value.set(id, value);
      triggerUpdate.value = Symbol();
    };
    var registeredValues = ref(/* @__PURE__ */ new Map());
    watch(triggerUpdate, function() {
      var valuseMap = /* @__PURE__ */ new Map();
      var _iterator = _createForOfIteratorHelper(registeredValuesMap.value.values()), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var value = _step.value;
          valuseMap.set(value, true);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      registeredValues.value = valuseMap;
    });
    var toggleOption = function toggleOption2(option) {
      var optionIndex = mergedValue.value.indexOf(option.value);
      var value = _toConsumableArray(mergedValue.value);
      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }
      if (props.value === void 0) {
        mergedValue.value = value;
      }
      var val = value.filter(function(val2) {
        return registeredValues.value.has(val2);
      }).sort(function(a, b) {
        var indexA = options.value.findIndex(function(opt) {
          return opt.value === a;
        });
        var indexB = options.value.findIndex(function(opt) {
          return opt.value === b;
        });
        return indexA - indexB;
      });
      emit("update:value", val);
      emit("change", val);
      formItemContext.onFieldChange();
    };
    provide(CheckboxGroupContextKey, {
      cancelValue,
      registerValue,
      toggleOption,
      mergedValue,
      name: computed(function() {
        return props.name;
      }),
      disabled: computed(function() {
        return props.disabled;
      })
    });
    expose({
      mergedValue
    });
    return function() {
      var _a;
      var _props$id = props.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      var children = null;
      var groupPrefixCls = "".concat(prefixCls.value, "-group");
      if (options.value && options.value.length > 0) {
        children = options.value.map(function(option) {
          var _a2;
          return createVNode(Checkbox, {
            "prefixCls": prefixCls.value,
            "key": option.value.toString(),
            "disabled": "disabled" in option ? option.disabled : props.disabled,
            "indeterminate": option.indeterminate,
            "value": option.value,
            "checked": mergedValue.value.indexOf(option.value) !== -1,
            "onChange": option.onChange,
            "class": "".concat(groupPrefixCls, "-item")
          }, {
            default: function _default() {
              return [option.label === void 0 ? (_a2 = slots.label) === null || _a2 === void 0 ? void 0 : _a2.call(slots, option) : option.label];
            }
          });
        });
      }
      return createVNode("div", {
        "class": [groupPrefixCls, _defineProperty$9({}, "".concat(groupPrefixCls, "-rtl"), direction.value === "rtl")],
        "id": id
      }, [children || ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});
Checkbox.Group = __unplugin_components_6;
Checkbox.install = function(app) {
  app.component(Checkbox.name, Checkbox);
  app.component(__unplugin_components_6.name, __unplugin_components_6);
  return app;
};
function getOffset(node) {
  var box = node.getBoundingClientRect();
  var docElem = document.documentElement;
  return {
    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
  };
}
var TableContextKey = Symbol("TableContextProps");
var useProvideTable = function useProvideTable2(props) {
  provide(TableContextKey, props);
};
var useInjectTable = function useInjectTable2() {
  return inject(TableContextKey, {});
};
var INTERNAL_KEY_PREFIX = "RC_TABLE_KEY";
function toArray(arr) {
  if (arr === void 0 || arr === null) {
    return [];
  }
  return Array.isArray(arr) ? arr : [arr];
}
function getPathValue(record, path) {
  if (!path && typeof path !== "number") {
    return record;
  }
  var pathList = toArray(path);
  var current = record;
  for (var i = 0; i < pathList.length; i += 1) {
    if (!current) {
      return null;
    }
    var prop = pathList[i];
    current = current[prop];
  }
  return current;
}
function getColumnsKey(columns) {
  var columnKeys = [];
  var keys = {};
  columns.forEach(function(column) {
    var _ref = column || {}, key = _ref.key, dataIndex = _ref.dataIndex;
    var mergedKey = key || toArray(dataIndex).join("-") || INTERNAL_KEY_PREFIX;
    while (keys[mergedKey]) {
      mergedKey = "".concat(mergedKey, "_next");
    }
    keys[mergedKey] = true;
    columnKeys.push(mergedKey);
  });
  return columnKeys;
}
function mergeObject() {
  var merged = {};
  function fillProps(obj, clone) {
    if (clone) {
      Object.keys(clone).forEach(function(key) {
        var value = clone[key];
        if (value && _typeof(value) === "object") {
          obj[key] = obj[key] || {};
          fillProps(obj[key], value);
        } else {
          obj[key] = value;
        }
      });
    }
  }
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }
  objects.forEach(function(clone) {
    fillProps(merged, clone);
  });
  return merged;
}
function validateValue(val) {
  return val !== null && val !== void 0;
}
var SlotsContextKey = Symbol("SlotsContextProps");
var useProvideSlots = function useProvideSlots2(props) {
  provide(SlotsContextKey, props);
};
var useInjectSlots = function useInjectSlots2() {
  return inject(SlotsContextKey, computed(function() {
    return {};
  }));
};
var ContextKey = Symbol("ContextProps");
var useProvideTableContext = function useProvideTableContext2(props) {
  provide(ContextKey, props);
};
var useInjectTableContext = function useInjectTableContext2() {
  return inject(ContextKey, {
    onResizeColumn: function onResizeColumn() {
    }
  });
};
globalThis && globalThis.__rest || function(s, e) {
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
var INTERNAL_COL_DEFINE = "RC_TABLE_INTERNAL_COL_DEFINE";
var HoverContextKey = Symbol("HoverContextProps");
var useProvideHover = function useProvideHover2(props) {
  provide(HoverContextKey, props);
};
var useInjectHover = function useInjectHover2() {
  return inject(HoverContextKey, {
    startRow: ref(-1),
    endRow: ref(-1),
    onHover: function onHover() {
    }
  });
};
var supportSticky = ref(false);
var useProvideSticky = function useProvideSticky2() {
  onMounted(function() {
    supportSticky.value = supportSticky.value || isStyleSupport("position", "sticky");
  });
};
var useInjectSticky = function useInjectSticky2() {
  return supportSticky;
};
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
function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  var cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}
function isRenderCell(data) {
  return data && _typeof(data) === "object" && !Array.isArray(data) && !isVNode(data);
}
var Cell = defineComponent({
  name: "Cell",
  props: ["prefixCls", "record", "index", "renderIndex", "dataIndex", "customRender", "component", "colSpan", "rowSpan", "fixLeft", "fixRight", "firstFixLeft", "lastFixLeft", "firstFixRight", "lastFixRight", "appendNode", "additionalProps", "ellipsis", "align", "rowType", "isSticky", "column", "cellType", "transformCellText"],
  slots: ["appendNode"],
  setup: function setup5(props, _ref) {
    var slots = _ref.slots;
    var contextSlots = useInjectSlots();
    var _useInjectHover = useInjectHover(), onHover = _useInjectHover.onHover, startRow = _useInjectHover.startRow, endRow = _useInjectHover.endRow;
    var colSpan = computed(function() {
      var _a, _b, _c, _d;
      return (_c = (_a = props.colSpan) !== null && _a !== void 0 ? _a : (_b = props.additionalProps) === null || _b === void 0 ? void 0 : _b.colSpan) !== null && _c !== void 0 ? _c : (_d = props.additionalProps) === null || _d === void 0 ? void 0 : _d.colspan;
    });
    var rowSpan = computed(function() {
      var _a, _b, _c, _d;
      return (_c = (_a = props.rowSpan) !== null && _a !== void 0 ? _a : (_b = props.additionalProps) === null || _b === void 0 ? void 0 : _b.rowSpan) !== null && _c !== void 0 ? _c : (_d = props.additionalProps) === null || _d === void 0 ? void 0 : _d.rowspan;
    });
    var hovering = eagerComputed(function() {
      var index = props.index;
      return inHoverRange(index, rowSpan.value || 1, startRow.value, endRow.value);
    });
    var supportSticky2 = useInjectSticky();
    var _onMouseenter = function onMouseenter(event, mergedRowSpan) {
      var _a;
      var record = props.record, index = props.index, additionalProps = props.additionalProps;
      if (record) {
        onHover(index, index + mergedRowSpan - 1);
      }
      (_a = additionalProps === null || additionalProps === void 0 ? void 0 : additionalProps.onMouseenter) === null || _a === void 0 ? void 0 : _a.call(additionalProps, event);
    };
    var onMouseleave = function onMouseleave2(event) {
      var _a;
      var record = props.record, additionalProps = props.additionalProps;
      if (record) {
        onHover(-1, -1);
      }
      (_a = additionalProps === null || additionalProps === void 0 ? void 0 : additionalProps.onMouseleave) === null || _a === void 0 ? void 0 : _a.call(additionalProps, event);
    };
    var getTitle = function getTitle2(vnodes) {
      var vnode = filterEmpty(vnodes)[0];
      if (isVNode(vnode)) {
        if (vnode.type === Text) {
          return vnode.children;
        } else {
          return Array.isArray(vnode.children) ? getTitle2(vnode.children) : void 0;
        }
      } else {
        return vnode;
      }
    };
    return function() {
      var _classNames;
      var _a, _b, _c, _d, _e, _f;
      var prefixCls = props.prefixCls, record = props.record, index = props.index, renderIndex = props.renderIndex, dataIndex = props.dataIndex, customRender = props.customRender, _props$component = props.component, Component = _props$component === void 0 ? "td" : _props$component, fixLeft = props.fixLeft, fixRight = props.fixRight, firstFixLeft = props.firstFixLeft, lastFixLeft = props.lastFixLeft, firstFixRight = props.firstFixRight, lastFixRight = props.lastFixRight, _props$appendNode = props.appendNode, appendNode = _props$appendNode === void 0 ? (_a = slots.appendNode) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$appendNode, _props$additionalProp = props.additionalProps, additionalProps = _props$additionalProp === void 0 ? {} : _props$additionalProp, ellipsis = props.ellipsis, align = props.align, rowType = props.rowType, isSticky = props.isSticky, _props$column = props.column, column = _props$column === void 0 ? {} : _props$column, cellType = props.cellType;
      var cellPrefixCls = "".concat(prefixCls, "-cell");
      var cellProps;
      var childNode;
      var children = (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots);
      if (validateValue(children) || cellType === "header") {
        childNode = children;
      } else {
        var value = getPathValue(record, dataIndex);
        childNode = value;
        if (customRender) {
          var renderData = customRender({
            text: value,
            value,
            record,
            index,
            renderIndex,
            column: column.__originColumn__
          });
          if (isRenderCell(renderData)) {
            childNode = renderData.children;
            cellProps = renderData.props;
          } else {
            childNode = renderData;
          }
        }
        if (!(INTERNAL_COL_DEFINE in column) && cellType === "body" && contextSlots.value.bodyCell && !((_c = column.slots) === null || _c === void 0 ? void 0 : _c.customRender)) {
          var child = renderSlot(contextSlots.value, "bodyCell", {
            text: value,
            value,
            record,
            index,
            column: column.__originColumn__
          }, function() {
            var fallback = childNode === void 0 ? value : childNode;
            return [_typeof(fallback) === "object" && isValidElement(fallback) || _typeof(fallback) !== "object" ? fallback : null];
          });
          childNode = flattenChildren(child);
        }
        if (props.transformCellText) {
          childNode = props.transformCellText({
            text: childNode,
            record,
            index,
            column: column.__originColumn__
          });
        }
      }
      if (_typeof(childNode) === "object" && !Array.isArray(childNode) && !isVNode(childNode)) {
        childNode = null;
      }
      if (ellipsis && (lastFixLeft || firstFixRight)) {
        childNode = createVNode("span", {
          "class": "".concat(cellPrefixCls, "-content")
        }, [childNode]);
      }
      if (Array.isArray(childNode) && childNode.length === 1) {
        childNode = childNode[0];
      }
      var _g = cellProps || {}, cellColSpan = _g.colSpan, cellRowSpan = _g.rowSpan, cellStyle = _g.style, cellClassName = _g.class, restCellProps = __rest$6(_g, ["colSpan", "rowSpan", "style", "class"]);
      var mergedColSpan = (_d = cellColSpan !== void 0 ? cellColSpan : colSpan.value) !== null && _d !== void 0 ? _d : 1;
      var mergedRowSpan = (_e = cellRowSpan !== void 0 ? cellRowSpan : rowSpan.value) !== null && _e !== void 0 ? _e : 1;
      if (mergedColSpan === 0 || mergedRowSpan === 0) {
        return null;
      }
      var fixedStyle = {};
      var isFixLeft = typeof fixLeft === "number" && supportSticky2.value;
      var isFixRight = typeof fixRight === "number" && supportSticky2.value;
      if (isFixLeft) {
        fixedStyle.position = "sticky";
        fixedStyle.left = "".concat(fixLeft, "px");
      }
      if (isFixRight) {
        fixedStyle.position = "sticky";
        fixedStyle.right = "".concat(fixRight, "px");
      }
      var alignStyle = {};
      if (align) {
        alignStyle.textAlign = align;
      }
      var title;
      var ellipsisConfig = ellipsis === true ? {
        showTitle: true
      } : ellipsis;
      if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === "header")) {
        if (typeof childNode === "string" || typeof childNode === "number") {
          title = childNode.toString();
        } else if (isVNode(childNode)) {
          title = getTitle([childNode]);
        }
      }
      var componentProps = _extends(_extends(_extends({
        title
      }, restCellProps), additionalProps), {
        colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
        rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null,
        class: classNames(cellPrefixCls, (_classNames = {}, _defineProperty$9(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft && supportSticky2.value), _defineProperty$9(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft && supportSticky2.value), _defineProperty$9(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft && supportSticky2.value), _defineProperty$9(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight && supportSticky2.value), _defineProperty$9(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight && supportSticky2.value), _defineProperty$9(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight && supportSticky2.value), _defineProperty$9(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), _defineProperty$9(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), _defineProperty$9(_classNames, "".concat(cellPrefixCls, "-fix-sticky"), (isFixLeft || isFixRight) && isSticky && supportSticky2.value), _defineProperty$9(_classNames, "".concat(cellPrefixCls, "-row-hover"), !cellProps && hovering.value), _classNames), additionalProps.class, cellClassName),
        onMouseenter: function onMouseenter(e) {
          _onMouseenter(e, mergedRowSpan);
        },
        onMouseleave,
        style: _extends(_extends(_extends(_extends({}, parseStyleText(additionalProps.style)), alignStyle), fixedStyle), cellStyle)
      });
      return createVNode(Component, componentProps, {
        default: function _default() {
          return [appendNode, childNode, (_f = slots.dragHandle) === null || _f === void 0 ? void 0 : _f.call(slots)];
        }
      });
    };
  }
});
function getCellFixedInfo(colStart, colEnd, columns, stickyOffsets, direction) {
  var startColumn = columns[colStart] || {};
  var endColumn = columns[colEnd] || {};
  var fixLeft;
  var fixRight;
  if (startColumn.fixed === "left") {
    fixLeft = stickyOffsets.left[colStart];
  } else if (endColumn.fixed === "right") {
    fixRight = stickyOffsets.right[colEnd];
  }
  var lastFixLeft = false;
  var firstFixRight = false;
  var lastFixRight = false;
  var firstFixLeft = false;
  var nextColumn = columns[colEnd + 1];
  var prevColumn = columns[colStart - 1];
  if (direction === "rtl") {
    if (fixLeft !== void 0) {
      var prevFixLeft = prevColumn && prevColumn.fixed === "left";
      firstFixLeft = !prevFixLeft;
    } else if (fixRight !== void 0) {
      var nextFixRight = nextColumn && nextColumn.fixed === "right";
      lastFixRight = !nextFixRight;
    }
  } else if (fixLeft !== void 0) {
    var nextFixLeft = nextColumn && nextColumn.fixed === "left";
    lastFixLeft = !nextFixLeft;
  } else if (fixRight !== void 0) {
    var prevFixRight = prevColumn && prevColumn.fixed === "right";
    firstFixRight = !prevFixRight;
  }
  return {
    fixLeft,
    fixRight,
    lastFixLeft,
    firstFixRight,
    lastFixRight,
    firstFixLeft,
    isSticky: stickyOffsets.isSticky
  };
}
var events = {
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  },
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  }
};
var defaultMinWidth = 50;
var DragHandleVue = defineComponent({
  name: "DragHandle",
  props: {
    prefixCls: String,
    width: {
      type: Number,
      required: true
    },
    minWidth: {
      type: Number,
      default: defaultMinWidth
    },
    maxWidth: {
      type: Number,
      default: Infinity
    },
    column: {
      type: Object,
      default: void 0
    }
  },
  setup: function setup6(props) {
    var startX = 0;
    var moveEvent = {
      remove: function remove() {
      }
    };
    var stopEvent = {
      remove: function remove() {
      }
    };
    var removeEvents = function removeEvents2() {
      moveEvent.remove();
      stopEvent.remove();
    };
    onUnmounted(function() {
      removeEvents();
    });
    watchEffect(function() {
      devWarning(!isNaN(props.width), "Table", "width must be a number when use resizable");
    });
    var _useInjectTableContex = useInjectTableContext(), onResizeColumn = _useInjectTableContex.onResizeColumn;
    var minWidth = computed(function() {
      return typeof props.minWidth === "number" && !isNaN(props.minWidth) ? props.minWidth : defaultMinWidth;
    });
    var maxWidth = computed(function() {
      return typeof props.maxWidth === "number" && !isNaN(props.maxWidth) ? props.maxWidth : Infinity;
    });
    var instance = getCurrentInstance();
    var baseWidth = 0;
    var dragging = ref(false);
    var rafId;
    var updateWidth = function updateWidth2(e) {
      var pageX = 0;
      if (e.touches) {
        if (e.touches.length) {
          pageX = e.touches[0].pageX;
        } else {
          pageX = e.changedTouches[0].pageX;
        }
      } else {
        pageX = e.pageX;
      }
      var tmpDeltaX = startX - pageX;
      var w = Math.max(baseWidth - tmpDeltaX, minWidth.value);
      w = Math.min(w, maxWidth.value);
      wrapperRaf.cancel(rafId);
      rafId = wrapperRaf(function() {
        onResizeColumn(w, props.column.__originColumn__);
      });
    };
    var handleMove = function handleMove2(e) {
      updateWidth(e);
    };
    var handleStop = function handleStop2(e) {
      dragging.value = false;
      updateWidth(e);
      removeEvents();
    };
    var handleStart = function handleStart2(e, eventsFor) {
      dragging.value = true;
      removeEvents();
      baseWidth = instance.vnode.el.parentNode.getBoundingClientRect().width;
      if (e instanceof MouseEvent && e.which !== 1) {
        return;
      }
      if (e.stopPropagation)
        e.stopPropagation();
      startX = e.touches ? e.touches[0].pageX : e.pageX;
      moveEvent = addEventListenerWrap(document.documentElement, eventsFor.move, handleMove);
      stopEvent = addEventListenerWrap(document.documentElement, eventsFor.stop, handleStop);
    };
    var handleDown = function handleDown2(e) {
      e.stopPropagation();
      e.preventDefault();
      handleStart(e, events.mouse);
    };
    var handleTouchDown = function handleTouchDown2(e) {
      e.stopPropagation();
      e.preventDefault();
      handleStart(e, events.touch);
    };
    var handleClick = function handleClick2(e) {
      e.stopPropagation();
      e.preventDefault();
    };
    return function() {
      var prefixCls = props.prefixCls;
      var touchEvents = _defineProperty$9({}, supportsPassive ? "onTouchstartPassive" : "onTouchstart", function(e) {
        return handleTouchDown(e);
      });
      return createVNode("div", _objectSpread2(_objectSpread2({
        "class": "".concat(prefixCls, "-resize-handle ").concat(dragging.value ? "dragging" : ""),
        "onMousedown": handleDown
      }, touchEvents), {}, {
        "onClick": handleClick
      }), [createVNode("div", {
        "class": "".concat(prefixCls, "-resize-handle-line")
      }, null)]);
    };
  }
});
var HeaderRow = defineComponent({
  name: "HeaderRow",
  props: ["cells", "stickyOffsets", "flattenColumns", "rowComponent", "cellComponent", "index", "customHeaderRow"],
  setup: function setup7(props) {
    var tableContext = useInjectTable();
    return function() {
      var prefixCls = tableContext.prefixCls, direction = tableContext.direction;
      var cells = props.cells, stickyOffsets = props.stickyOffsets, flattenColumns = props.flattenColumns, RowComponent = props.rowComponent, CellComponent = props.cellComponent, customHeaderRow = props.customHeaderRow, index = props.index;
      var rowProps;
      if (customHeaderRow) {
        rowProps = customHeaderRow(cells.map(function(cell) {
          return cell.column;
        }), index);
      }
      var columnsKey = getColumnsKey(cells.map(function(cell) {
        return cell.column;
      }));
      return createVNode(RowComponent, rowProps, {
        default: function _default() {
          return [cells.map(function(cell, cellIndex) {
            var column = cell.column;
            var fixedInfo = getCellFixedInfo(cell.colStart, cell.colEnd, flattenColumns, stickyOffsets, direction);
            var additionalProps;
            if (column && column.customHeaderCell) {
              additionalProps = cell.column.customHeaderCell(column);
            }
            var col = column;
            return createVNode(Cell, _objectSpread2(_objectSpread2(_objectSpread2({}, cell), {}, {
              "cellType": "header",
              "ellipsis": column.ellipsis,
              "align": column.align,
              "component": CellComponent,
              "prefixCls": prefixCls,
              "key": columnsKey[cellIndex]
            }, fixedInfo), {}, {
              "additionalProps": additionalProps,
              "rowType": "header",
              "column": column
            }), {
              default: function _default2() {
                return column.title;
              },
              dragHandle: function dragHandle() {
                return col.resizable ? createVNode(DragHandleVue, {
                  "prefixCls": prefixCls,
                  "width": col.width,
                  "minWidth": col.minWidth,
                  "maxWidth": col.maxWidth,
                  "column": col
                }, null) : null;
              }
            });
          })];
        }
      });
    };
  }
});
function parseHeaderRows(rootColumns) {
  var rows = [];
  function fillRowCells(columns, colIndex) {
    var rowIndex2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    rows[rowIndex2] = rows[rowIndex2] || [];
    var currentColIndex = colIndex;
    var colSpans = columns.filter(Boolean).map(function(column) {
      var cell = {
        key: column.key,
        class: classNames(column.className, column.class),
        column,
        colStart: currentColIndex
      };
      var colSpan = 1;
      var subColumns = column.children;
      if (subColumns && subColumns.length > 0) {
        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex2 + 1).reduce(function(total, count) {
          return total + count;
        }, 0);
        cell.hasSubColumns = true;
      }
      if ("colSpan" in column) {
        colSpan = column.colSpan;
      }
      if ("rowSpan" in column) {
        cell.rowSpan = column.rowSpan;
      }
      cell.colSpan = colSpan;
      cell.colEnd = cell.colStart + colSpan - 1;
      rows[rowIndex2].push(cell);
      currentColIndex += colSpan;
      return colSpan;
    });
    return colSpans;
  }
  fillRowCells(rootColumns, 0);
  var rowCount = rows.length;
  var _loop = function _loop2(rowIndex2) {
    rows[rowIndex2].forEach(function(cell) {
      if (!("rowSpan" in cell) && !cell.hasSubColumns) {
        cell.rowSpan = rowCount - rowIndex2;
      }
    });
  };
  for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    _loop(rowIndex);
  }
  return rows;
}
var Header = defineComponent({
  name: "Header",
  inheritAttrs: false,
  props: ["columns", "flattenColumns", "stickyOffsets", "customHeaderRow"],
  setup: function setup8(props) {
    var tableContext = useInjectTable();
    var rows = computed(function() {
      return parseHeaderRows(props.columns);
    });
    return function() {
      var prefixCls = tableContext.prefixCls, getComponent = tableContext.getComponent;
      var stickyOffsets = props.stickyOffsets, flattenColumns = props.flattenColumns, customHeaderRow = props.customHeaderRow;
      var WrapperComponent = getComponent(["header", "wrapper"], "thead");
      var trComponent = getComponent(["header", "row"], "tr");
      var thComponent = getComponent(["header", "cell"], "th");
      return createVNode(WrapperComponent, {
        "class": "".concat(prefixCls, "-thead")
      }, {
        default: function _default() {
          return [rows.value.map(function(row, rowIndex) {
            var rowNode = createVNode(HeaderRow, {
              "key": rowIndex,
              "flattenColumns": flattenColumns,
              "cells": row,
              "stickyOffsets": stickyOffsets,
              "rowComponent": trComponent,
              "cellComponent": thComponent,
              "customHeaderRow": customHeaderRow,
              "index": rowIndex
            }, null);
            return rowNode;
          })];
        }
      });
    };
  }
});
var ExpandedRowContextKey = Symbol("ExpandedRowProps");
var useProvideExpandedRow = function useProvideExpandedRow2(props) {
  provide(ExpandedRowContextKey, props);
};
var useInjectExpandedRow = function useInjectExpandedRow2() {
  return inject(ExpandedRowContextKey, {});
};
var ExpandedRow = defineComponent({
  name: "ExpandedRow",
  inheritAttrs: false,
  props: ["prefixCls", "component", "cellComponent", "expanded", "colSpan", "isEmpty"],
  setup: function setup9(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var tableContext = useInjectTable();
    var expandedRowContext = useInjectExpandedRow();
    var fixHeader = expandedRowContext.fixHeader, fixColumn = expandedRowContext.fixColumn, componentWidth = expandedRowContext.componentWidth, horizonScroll = expandedRowContext.horizonScroll;
    return function() {
      var prefixCls = props.prefixCls, Component = props.component, cellComponent = props.cellComponent, expanded = props.expanded, colSpan = props.colSpan, isEmpty = props.isEmpty;
      return createVNode(Component, {
        "class": attrs.class,
        "style": {
          display: expanded ? null : "none"
        }
      }, {
        default: function _default() {
          return [createVNode(Cell, {
            "component": cellComponent,
            "prefixCls": prefixCls,
            "colSpan": colSpan
          }, {
            default: function _default2() {
              var _a;
              var contentNode = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
              if (isEmpty ? horizonScroll.value : fixColumn.value) {
                contentNode = createVNode("div", {
                  "style": {
                    width: "".concat(componentWidth.value - (fixHeader.value ? tableContext.scrollbarSize : 0), "px"),
                    position: "sticky",
                    left: 0,
                    overflow: "hidden"
                  },
                  "class": "".concat(prefixCls, "-expanded-row-fixed")
                }, [contentNode]);
              }
              return contentNode;
            }
          })];
        }
      });
    };
  }
});
var MeasureCell = defineComponent({
  name: "MeasureCell",
  props: ["columnKey"],
  setup: function setup10(props, _ref) {
    var emit = _ref.emit;
    var tdRef = ref();
    onMounted(function() {
      if (tdRef.value) {
        emit("columnResize", props.columnKey, tdRef.value.offsetWidth);
      }
    });
    return function() {
      return createVNode(ResizeObserver, {
        "onResize": function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          emit("columnResize", props.columnKey, offsetWidth);
        }
      }, {
        default: function _default() {
          return [createVNode("td", {
            "ref": tdRef,
            "style": {
              padding: 0,
              border: 0,
              height: 0
            }
          }, [createVNode("div", {
            "style": {
              height: 0,
              overflow: "hidden"
            }
          }, [createTextVNode("\xA0")])])];
        }
      });
    };
  }
});
var BodyContextKey = Symbol("BodyContextProps");
var useProvideBody = function useProvideBody2(props) {
  provide(BodyContextKey, props);
};
var useInjectBody = function useInjectBody2() {
  return inject(BodyContextKey, {});
};
var BodyRow = defineComponent({
  name: "BodyRow",
  inheritAttrs: false,
  props: ["record", "index", "renderIndex", "recordKey", "expandedKeys", "rowComponent", "cellComponent", "customRow", "rowExpandable", "indent", "rowKey", "getRowKey", "childrenColumnName"],
  setup: function setup11(props, _ref) {
    var attrs = _ref.attrs;
    var tableContext = useInjectTable();
    var bodyContext = useInjectBody();
    var expandRended = ref(false);
    var expanded = computed(function() {
      return props.expandedKeys && props.expandedKeys.has(props.recordKey);
    });
    watchEffect(function() {
      if (expanded.value) {
        expandRended.value = true;
      }
    });
    var rowSupportExpand = computed(function() {
      return bodyContext.expandableType === "row" && (!props.rowExpandable || props.rowExpandable(props.record));
    });
    var nestExpandable = computed(function() {
      return bodyContext.expandableType === "nest";
    });
    var hasNestChildren = computed(function() {
      return props.childrenColumnName && props.record && props.record[props.childrenColumnName];
    });
    var mergedExpandable = computed(function() {
      return rowSupportExpand.value || nestExpandable.value;
    });
    var onInternalTriggerExpand = function onInternalTriggerExpand2(record, event) {
      bodyContext.onTriggerExpand(record, event);
    };
    var additionalProps = computed(function() {
      var _a;
      return ((_a = props.customRow) === null || _a === void 0 ? void 0 : _a.call(props, props.record, props.index)) || {};
    });
    var onClick = function onClick2(event) {
      var _b2;
      var _a, _b;
      if (bodyContext.expandRowByClick && mergedExpandable.value) {
        onInternalTriggerExpand(props.record, event);
      }
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      (_b = (_a = additionalProps.value) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : (_b2 = _b).call.apply(_b2, [_a, event].concat(args));
    };
    var computeRowClassName = computed(function() {
      var record = props.record, index = props.index, indent = props.indent;
      var rowClassName = bodyContext.rowClassName;
      if (typeof rowClassName === "string") {
        return rowClassName;
      } else if (typeof rowClassName === "function") {
        return rowClassName(record, index, indent);
      }
      return "";
    });
    var columnsKey = computed(function() {
      return getColumnsKey(bodyContext.flattenColumns);
    });
    return function() {
      var className = attrs.class, style = attrs.style;
      var record = props.record, index = props.index, rowKey = props.rowKey, _props$indent = props.indent, indent = _props$indent === void 0 ? 0 : _props$indent, RowComponent = props.rowComponent, cellComponent = props.cellComponent;
      var prefixCls = tableContext.prefixCls, fixedInfoList = tableContext.fixedInfoList, transformCellText = tableContext.transformCellText;
      var flattenColumns = bodyContext.flattenColumns, expandedRowClassName = bodyContext.expandedRowClassName, indentSize = bodyContext.indentSize, expandIcon = bodyContext.expandIcon, expandedRowRender = bodyContext.expandedRowRender, expandIconColumnIndex = bodyContext.expandIconColumnIndex;
      var baseRowNode = createVNode(RowComponent, _objectSpread2(_objectSpread2({}, additionalProps.value), {}, {
        "data-row-key": rowKey,
        "class": classNames(className, "".concat(prefixCls, "-row"), "".concat(prefixCls, "-row-level-").concat(indent), computeRowClassName.value, additionalProps.value.class),
        "style": _extends(_extends({}, style), parseStyleText(additionalProps.value.style)),
        "onClick": onClick
      }), {
        default: function _default() {
          return [flattenColumns.map(function(column, colIndex) {
            var customRender = column.customRender, dataIndex = column.dataIndex, columnClassName = column.className;
            var key = columnsKey[colIndex];
            var fixedInfo = fixedInfoList[colIndex];
            var additionalCellProps;
            if (column.customCell) {
              additionalCellProps = column.customCell(record, index, column);
            }
            var appendNode = colIndex === (expandIconColumnIndex || 0) && nestExpandable.value ? createVNode(Fragment, null, [createVNode("span", {
              "style": {
                paddingLeft: "".concat(indentSize * indent, "px")
              },
              "class": "".concat(prefixCls, "-row-indent indent-level-").concat(indent)
            }, null), expandIcon({
              prefixCls,
              expanded: expanded.value,
              expandable: hasNestChildren.value,
              record,
              onExpand: onInternalTriggerExpand
            })]) : null;
            return createVNode(Cell, _objectSpread2(_objectSpread2({
              "cellType": "body",
              "class": columnClassName,
              "ellipsis": column.ellipsis,
              "align": column.align,
              "component": cellComponent,
              "prefixCls": prefixCls,
              "key": key,
              "record": record,
              "index": index,
              "renderIndex": props.renderIndex,
              "dataIndex": dataIndex,
              "customRender": customRender
            }, fixedInfo), {}, {
              "additionalProps": additionalCellProps,
              "column": column,
              "transformCellText": transformCellText,
              "appendNode": appendNode
            }), null);
          })];
        }
      });
      var expandRowNode;
      if (rowSupportExpand.value && (expandRended.value || expanded.value)) {
        var expandContent = expandedRowRender({
          record,
          index,
          indent: indent + 1,
          expanded: expanded.value
        });
        var computedExpandedRowClassName = expandedRowClassName && expandedRowClassName(record, index, indent);
        expandRowNode = createVNode(ExpandedRow, {
          "expanded": expanded.value,
          "class": classNames("".concat(prefixCls, "-expanded-row"), "".concat(prefixCls, "-expanded-row-level-").concat(indent + 1), computedExpandedRowClassName),
          "prefixCls": prefixCls,
          "component": RowComponent,
          "cellComponent": cellComponent,
          "colSpan": flattenColumns.length,
          "isEmpty": false
        }, {
          default: function _default() {
            return [expandContent];
          }
        });
      }
      return createVNode(Fragment, null, [baseRowNode, expandRowNode]);
    };
  }
});
function flatRecord(record, indent, childrenColumnName, expandedKeys, getRowKey, index) {
  var arr = [];
  arr.push({
    record,
    indent,
    index
  });
  var key = getRowKey(record);
  var expanded = expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(key);
  if (record && Array.isArray(record[childrenColumnName]) && expanded) {
    for (var i = 0; i < record[childrenColumnName].length; i += 1) {
      var tempArr = flatRecord(record[childrenColumnName][i], indent + 1, childrenColumnName, expandedKeys, getRowKey, i);
      arr.push.apply(arr, _toConsumableArray(tempArr));
    }
  }
  return arr;
}
function useFlattenRecords(dataRef, childrenColumnNameRef, expandedKeysRef, getRowKey) {
  var arr = computed(function() {
    var childrenColumnName = childrenColumnNameRef.value;
    var expandedKeys = expandedKeysRef.value;
    var data = dataRef.value;
    if (expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.size) {
      var temp = [];
      for (var i = 0; i < (data === null || data === void 0 ? void 0 : data.length); i += 1) {
        var record = data[i];
        temp.push.apply(temp, _toConsumableArray(flatRecord(record, 0, childrenColumnName, expandedKeys, getRowKey.value, i)));
      }
      return temp;
    }
    return data === null || data === void 0 ? void 0 : data.map(function(item, index) {
      return {
        record: item,
        indent: 0,
        index
      };
    });
  });
  return arr;
}
var ResizeContextKey = Symbol("ResizeContextProps");
var useProvideResize = function useProvideResize2(props) {
  provide(ResizeContextKey, props);
};
var useInjectResize = function useInjectResize2() {
  return inject(ResizeContextKey, {
    onColumnResize: function onColumnResize() {
    }
  });
};
var Body = defineComponent({
  name: "Body",
  props: ["data", "getRowKey", "measureColumnWidth", "expandedKeys", "customRow", "rowExpandable", "childrenColumnName"],
  slots: ["emptyNode"],
  setup: function setup12(props, _ref) {
    var slots = _ref.slots;
    var resizeContext = useInjectResize();
    var tableContext = useInjectTable();
    var bodyContext = useInjectBody();
    var flattenData2 = useFlattenRecords(toRef(props, "data"), toRef(props, "childrenColumnName"), toRef(props, "expandedKeys"), toRef(props, "getRowKey"));
    var startRow = ref(-1);
    var endRow = ref(-1);
    var timeoutId;
    useProvideHover({
      startRow,
      endRow,
      onHover: function onHover(start, end) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
          startRow.value = start;
          endRow.value = end;
        }, 100);
      }
    });
    return function() {
      var _a;
      var data = props.data, getRowKey = props.getRowKey, measureColumnWidth = props.measureColumnWidth, expandedKeys = props.expandedKeys, customRow = props.customRow, rowExpandable = props.rowExpandable, childrenColumnName = props.childrenColumnName;
      var onColumnResize = resizeContext.onColumnResize;
      var prefixCls = tableContext.prefixCls, getComponent = tableContext.getComponent;
      var flattenColumns = bodyContext.flattenColumns;
      var WrapperComponent = getComponent(["body", "wrapper"], "tbody");
      var trComponent = getComponent(["body", "row"], "tr");
      var tdComponent = getComponent(["body", "cell"], "td");
      var rows;
      if (data.length) {
        rows = flattenData2.value.map(function(item, idx) {
          var record = item.record, indent = item.indent, renderIndex = item.index;
          var key = getRowKey(record, idx);
          return createVNode(BodyRow, {
            "key": key,
            "rowKey": key,
            "record": record,
            "recordKey": key,
            "index": idx,
            "renderIndex": renderIndex,
            "rowComponent": trComponent,
            "cellComponent": tdComponent,
            "expandedKeys": expandedKeys,
            "customRow": customRow,
            "getRowKey": getRowKey,
            "rowExpandable": rowExpandable,
            "childrenColumnName": childrenColumnName,
            "indent": indent
          }, null);
        });
      } else {
        rows = createVNode(ExpandedRow, {
          "expanded": true,
          "class": "".concat(prefixCls, "-placeholder"),
          "prefixCls": prefixCls,
          "component": trComponent,
          "cellComponent": tdComponent,
          "colSpan": flattenColumns.length,
          "isEmpty": true
        }, {
          default: function _default() {
            return [(_a = slots.emptyNode) === null || _a === void 0 ? void 0 : _a.call(slots)];
          }
        });
      }
      var columnsKey = getColumnsKey(flattenColumns);
      return createVNode(WrapperComponent, {
        "class": "".concat(prefixCls, "-tbody")
      }, {
        default: function _default() {
          return [measureColumnWidth && createVNode("tr", {
            "aria-hidden": "true",
            "class": "".concat(prefixCls, "-measure-row"),
            "style": {
              height: 0,
              fontSize: 0
            }
          }, [columnsKey.map(function(columnKey) {
            return createVNode(MeasureCell, {
              "key": columnKey,
              "columnKey": columnKey,
              "onColumnResize": onColumnResize
            }, null);
          })]), rows];
        }
      });
    };
  }
});
var EXPAND_COLUMN = {};
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
function flatColumns(columns) {
  return columns.reduce(function(list, column) {
    var fixed = column.fixed;
    var parsedFixed = fixed === true ? "left" : fixed;
    var subColumns = column.children;
    if (subColumns && subColumns.length > 0) {
      return [].concat(_toConsumableArray(list), _toConsumableArray(flatColumns(subColumns).map(function(subColum) {
        return _extends({
          fixed: parsedFixed
        }, subColum);
      })));
    }
    return [].concat(_toConsumableArray(list), [_extends(_extends({}, column), {
      fixed: parsedFixed
    })]);
  }, []);
}
function revertForRtl(columns) {
  return columns.map(function(column) {
    var fixed = column.fixed, restProps = __rest$5(column, ["fixed"]);
    var parsedFixed = fixed;
    if (fixed === "left") {
      parsedFixed = "right";
    } else if (fixed === "right") {
      parsedFixed = "left";
    }
    return _extends({
      fixed: parsedFixed
    }, restProps);
  });
}
function useColumns$1(_ref, transformColumns) {
  var prefixCls = _ref.prefixCls, baseColumns = _ref.columns, expandable = _ref.expandable, expandedKeys = _ref.expandedKeys, getRowKey = _ref.getRowKey, onTriggerExpand = _ref.onTriggerExpand, expandIcon = _ref.expandIcon, rowExpandable = _ref.rowExpandable, expandIconColumnIndex = _ref.expandIconColumnIndex, direction = _ref.direction, expandRowByClick = _ref.expandRowByClick, expandColumnWidth = _ref.expandColumnWidth, expandFixed = _ref.expandFixed;
  var withExpandColumns = computed(function() {
    if (expandable.value) {
      var _expandColumn;
      var cloneColumns = baseColumns.value.slice();
      if (!cloneColumns.includes(EXPAND_COLUMN)) {
        var expandColIndex = expandIconColumnIndex.value || 0;
        if (expandColIndex >= 0) {
          cloneColumns.splice(expandColIndex, 0, EXPAND_COLUMN);
        }
      }
      var expandColumnIndex = cloneColumns.indexOf(EXPAND_COLUMN);
      cloneColumns = cloneColumns.filter(function(column, index) {
        return column !== EXPAND_COLUMN || index === expandColumnIndex;
      });
      var prevColumn = baseColumns.value[expandColumnIndex];
      var fixedColumn;
      if ((expandFixed.value === "left" || expandFixed.value) && !expandIconColumnIndex.value) {
        fixedColumn = "left";
      } else if ((expandFixed.value === "right" || expandFixed.value) && expandIconColumnIndex.value === baseColumns.value.length) {
        fixedColumn = "right";
      } else {
        fixedColumn = prevColumn ? prevColumn.fixed : null;
      }
      var expandedKeysValue = expandedKeys.value;
      var rowExpandableValue = rowExpandable.value;
      var expandIconValue = expandIcon.value;
      var prefixClsValue = prefixCls.value;
      var expandRowByClickValue = expandRowByClick.value;
      var expandColumn = (_expandColumn = {}, _defineProperty$9(_expandColumn, INTERNAL_COL_DEFINE, {
        class: "".concat(prefixCls.value, "-expand-icon-col"),
        columnType: "EXPAND_COLUMN"
      }), _defineProperty$9(_expandColumn, "title", ""), _defineProperty$9(_expandColumn, "fixed", fixedColumn), _defineProperty$9(_expandColumn, "class", "".concat(prefixCls.value, "-row-expand-icon-cell")), _defineProperty$9(_expandColumn, "width", expandColumnWidth.value), _defineProperty$9(_expandColumn, "customRender", function customRender(_ref2) {
        var record = _ref2.record, index = _ref2.index;
        var rowKey = getRowKey.value(record, index);
        var expanded = expandedKeysValue.has(rowKey);
        var recordExpandable = rowExpandableValue ? rowExpandableValue(record) : true;
        var icon = expandIconValue({
          prefixCls: prefixClsValue,
          expanded,
          expandable: recordExpandable,
          record,
          onExpand: onTriggerExpand
        });
        if (expandRowByClickValue) {
          return createVNode("span", {
            "onClick": function onClick(e) {
              return e.stopPropagation();
            }
          }, [icon]);
        }
        return icon;
      }), _expandColumn);
      return cloneColumns.map(function(col) {
        return col === EXPAND_COLUMN ? expandColumn : col;
      });
    }
    return baseColumns.value.filter(function(col) {
      return col !== EXPAND_COLUMN;
    });
  });
  var mergedColumns = computed(function() {
    var finalColumns = withExpandColumns.value;
    if (transformColumns.value) {
      finalColumns = transformColumns.value(finalColumns);
    }
    if (!finalColumns.length) {
      finalColumns = [{
        customRender: function customRender() {
          return null;
        }
      }];
    }
    return finalColumns;
  });
  var flattenColumns = computed(function() {
    if (direction.value === "rtl") {
      return revertForRtl(flatColumns(mergedColumns.value));
    }
    return flatColumns(mergedColumns.value);
  });
  return [mergedColumns, flattenColumns];
}
function useLayoutState(defaultState) {
  var stateRef = shallowRef(defaultState);
  var rafId;
  var updateBatchRef = shallowRef([]);
  function setFrameState(updater) {
    updateBatchRef.value.push(updater);
    wrapperRaf.cancel(rafId);
    rafId = wrapperRaf(function() {
      var prevBatch = updateBatchRef.value;
      updateBatchRef.value = [];
      prevBatch.forEach(function(batchUpdater) {
        stateRef.value = batchUpdater(stateRef.value);
      });
    });
  }
  onBeforeUnmount(function() {
    wrapperRaf.cancel(rafId);
  });
  return [stateRef, setFrameState];
}
function useTimeoutLock(defaultState) {
  var frameRef = ref(defaultState || null);
  var timeoutRef = ref();
  function cleanUp() {
    clearTimeout(timeoutRef.value);
  }
  function setState(newState) {
    frameRef.value = newState;
    cleanUp();
    timeoutRef.value = setTimeout(function() {
      frameRef.value = null;
      timeoutRef.value = void 0;
    }, 100);
  }
  function getState() {
    return frameRef.value;
  }
  onBeforeUnmount(function() {
    cleanUp();
  });
  return [setState, getState];
}
function useStickyOffsets(colWidthsRef, columnCountRef, directionRef) {
  var stickyOffsets = computed(function() {
    var leftOffsets = [];
    var rightOffsets = [];
    var left = 0;
    var right = 0;
    var colWidths = colWidthsRef.value;
    var columnCount = columnCountRef.value;
    var direction = directionRef.value;
    for (var start = 0; start < columnCount; start += 1) {
      if (direction === "rtl") {
        rightOffsets[start] = right;
        right += colWidths[start] || 0;
        var end = columnCount - start - 1;
        leftOffsets[end] = left;
        left += colWidths[end] || 0;
      } else {
        leftOffsets[start] = left;
        left += colWidths[start] || 0;
        var _end = columnCount - start - 1;
        rightOffsets[_end] = right;
        right += colWidths[_end] || 0;
      }
    }
    return {
      left: leftOffsets,
      right: rightOffsets
    };
  });
  return stickyOffsets;
}
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
function ColGroup(_ref) {
  var colWidths = _ref.colWidths, columns = _ref.columns, columCount = _ref.columCount;
  var cols = [];
  var len = columCount || columns.length;
  var mustInsert = false;
  for (var i = len - 1; i >= 0; i -= 1) {
    var width = colWidths[i];
    var column = columns && columns[i];
    var additionalProps = column && column[INTERNAL_COL_DEFINE];
    if (width || additionalProps || mustInsert) {
      var _a = additionalProps || {};
      _a.columnType;
      var restAdditionalProps = __rest$4(_a, ["columnType"]);
      cols.unshift(createVNode("col", _objectSpread2({
        "key": i,
        "style": {
          width: typeof width === "number" ? "".concat(width, "px") : width
        }
      }, restAdditionalProps), null));
      mustInsert = true;
    }
  }
  return createVNode("colgroup", null, [cols]);
}
function Panel(_, _ref) {
  var slots = _ref.slots;
  var _a;
  return createVNode("div", null, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
}
Panel.displayName = "Panel";
var indexGuid = 0;
var Summary = defineComponent({
  name: "Summary",
  props: ["fixed"],
  setup: function setup13(props, _ref) {
    var slots = _ref.slots;
    var tableContext = useInjectTable();
    var uniKey = "table-summary-uni-key-".concat(++indexGuid);
    var fixed = computed(function() {
      return props.fixed === "" || props.fixed;
    });
    watchEffect(function() {
      tableContext.summaryCollect(uniKey, fixed.value);
    });
    onBeforeUnmount(function() {
      tableContext.summaryCollect(uniKey, false);
    });
    return function() {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
var Summary$1 = Summary;
var SummaryRow = defineComponent({
  name: "FooterRow",
  setup: function setup14(_props, _ref) {
    var slots = _ref.slots;
    return function() {
      var _a;
      return createVNode("tr", null, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var SummaryContextKey = Symbol("SummaryContextProps");
var useProvideSummary = function useProvideSummary2(props) {
  provide(SummaryContextKey, props);
};
var useInjectSummary = function useInjectSummary2() {
  return inject(SummaryContextKey, {});
};
var SummaryCell = defineComponent({
  name: "SummaryCell",
  props: ["index", "colSpan", "rowSpan", "align"],
  setup: function setup15(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var tableContext = useInjectTable();
    var summaryContext = useInjectSummary();
    return function() {
      var index = props.index, _props$colSpan = props.colSpan, colSpan = _props$colSpan === void 0 ? 1 : _props$colSpan, rowSpan = props.rowSpan, align = props.align;
      var prefixCls = tableContext.prefixCls, direction = tableContext.direction;
      var scrollColumnIndex = summaryContext.scrollColumnIndex, stickyOffsets = summaryContext.stickyOffsets, flattenColumns = summaryContext.flattenColumns;
      var lastIndex = index + colSpan - 1;
      var mergedColSpan = lastIndex + 1 === scrollColumnIndex ? colSpan + 1 : colSpan;
      var fixedInfo = getCellFixedInfo(index, index + mergedColSpan - 1, flattenColumns, stickyOffsets, direction);
      return createVNode(Cell, _objectSpread2({
        "class": attrs.class,
        "index": index,
        "component": "td",
        "prefixCls": prefixCls,
        "record": null,
        "dataIndex": null,
        "align": align,
        "colSpan": mergedColSpan,
        "rowSpan": rowSpan,
        "customRender": function customRender() {
          var _a;
          return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
        }
      }, fixedInfo), null);
    };
  }
});
var Footer = defineComponent({
  name: "Footer",
  inheritAttrs: false,
  props: ["stickyOffsets", "flattenColumns"],
  setup: function setup16(props, _ref) {
    var slots = _ref.slots;
    var tableContext = useInjectTable();
    useProvideSummary(reactive({
      stickyOffsets: toRef(props, "stickyOffsets"),
      flattenColumns: toRef(props, "flattenColumns"),
      scrollColumnIndex: computed(function() {
        var lastColumnIndex = props.flattenColumns.length - 1;
        var scrollColumn = props.flattenColumns[lastColumnIndex];
        return (scrollColumn === null || scrollColumn === void 0 ? void 0 : scrollColumn.scrollbar) ? lastColumnIndex : null;
      })
    }));
    return function() {
      var _a;
      var prefixCls = tableContext.prefixCls;
      return createVNode("tfoot", {
        "class": "".concat(prefixCls, "-summary")
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var FooterComponents = Summary$1;
function renderExpandIcon$1(_ref) {
  var _ref2;
  var prefixCls = _ref.prefixCls, record = _ref.record, onExpand = _ref.onExpand, expanded = _ref.expanded, expandable = _ref.expandable;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");
  if (!expandable) {
    return createVNode("span", {
      "class": [expandClassName, "".concat(prefixCls, "-row-spaced")]
    }, null);
  }
  var onClick = function onClick2(event) {
    onExpand(record, event);
    event.stopPropagation();
  };
  return createVNode("span", {
    "class": (_ref2 = {}, _defineProperty$9(_ref2, expandClassName, true), _defineProperty$9(_ref2, "".concat(prefixCls, "-row-expanded"), expanded), _defineProperty$9(_ref2, "".concat(prefixCls, "-row-collapsed"), !expanded), _ref2),
    "onClick": onClick
  }, null);
}
function findAllChildrenKeys(data, getRowKey, childrenColumnName) {
  var keys = [];
  function dig(list) {
    (list || []).forEach(function(item, index) {
      keys.push(getRowKey(item, index));
      dig(item[childrenColumnName]);
    });
  }
  dig(data);
  return keys;
}
var StickyScrollBar = defineComponent({
  name: "StickyScrollBar",
  inheritAttrs: false,
  props: ["offsetScroll", "container", "scrollBodyRef", "scrollBodySizeInfo"],
  emits: ["scroll"],
  setup: function setup17(props, _ref) {
    var emit = _ref.emit, expose = _ref.expose;
    var tableContext = useInjectTable();
    var bodyScrollWidth = ref(0);
    var bodyWidth = ref(0);
    var scrollBarWidth = ref(0);
    watchEffect(function() {
      bodyScrollWidth.value = props.scrollBodySizeInfo.scrollWidth || 0;
      bodyWidth.value = props.scrollBodySizeInfo.clientWidth || 0;
      scrollBarWidth.value = bodyScrollWidth.value && bodyWidth.value * (bodyWidth.value / bodyScrollWidth.value);
    }, {
      flush: "post"
    });
    var scrollBarRef = ref();
    var _useLayoutState = useLayoutState({
      scrollLeft: 0,
      isHiddenScrollBar: true
    }), _useLayoutState2 = _slicedToArray(_useLayoutState, 2), scrollState = _useLayoutState2[0], setScrollState = _useLayoutState2[1];
    var refState = ref({
      delta: 0,
      x: 0
    });
    var isActive = ref(false);
    var onMouseUp = function onMouseUp2() {
      isActive.value = false;
    };
    var onMouseDown = function onMouseDown2(event) {
      refState.value = {
        delta: event.pageX - scrollState.value.scrollLeft,
        x: 0
      };
      isActive.value = true;
      event.preventDefault();
    };
    var onMouseMove = function onMouseMove2(event) {
      var _ref2 = event || (window === null || window === void 0 ? void 0 : window.event), buttons = _ref2.buttons;
      if (!isActive.value || buttons === 0) {
        if (isActive.value) {
          isActive.value = false;
        }
        return;
      }
      var left = refState.value.x + event.pageX - refState.value.x - refState.value.delta;
      if (left <= 0) {
        left = 0;
      }
      if (left + scrollBarWidth.value >= bodyWidth.value) {
        left = bodyWidth.value - scrollBarWidth.value;
      }
      emit("scroll", {
        scrollLeft: left / bodyWidth.value * (bodyScrollWidth.value + 2)
      });
      refState.value.x = event.pageX;
    };
    var onContainerScroll = function onContainerScroll2() {
      if (!props.scrollBodyRef.value) {
        return;
      }
      var tableOffsetTop = getOffset(props.scrollBodyRef.value).top;
      var tableBottomOffset = tableOffsetTop + props.scrollBodyRef.value.offsetHeight;
      var currentClientOffset = props.container === window ? document.documentElement.scrollTop + window.innerHeight : getOffset(props.container).top + props.container.clientHeight;
      if (tableBottomOffset - getScrollBarSize() <= currentClientOffset || tableOffsetTop >= currentClientOffset - props.offsetScroll) {
        setScrollState(function(state) {
          return _extends(_extends({}, state), {
            isHiddenScrollBar: true
          });
        });
      } else {
        setScrollState(function(state) {
          return _extends(_extends({}, state), {
            isHiddenScrollBar: false
          });
        });
      }
    };
    var setScrollLeft = function setScrollLeft2(left) {
      setScrollState(function(state) {
        return _extends(_extends({}, state), {
          scrollLeft: left / bodyScrollWidth.value * bodyWidth.value || 0
        });
      });
    };
    expose({
      setScrollLeft
    });
    var onMouseUpListener = null;
    var onMouseMoveListener = null;
    var onResizeListener = null;
    var onScrollListener = null;
    onMounted(function() {
      onMouseUpListener = addEventListenerWrap(document.body, "mouseup", onMouseUp, false);
      onMouseMoveListener = addEventListenerWrap(document.body, "mousemove", onMouseMove, false);
      onResizeListener = addEventListenerWrap(window, "resize", onContainerScroll, false);
    });
    onActivated(function() {
      nextTick(function() {
        onContainerScroll();
      });
    });
    onMounted(function() {
      setTimeout(function() {
        watch([scrollBarWidth, isActive], function() {
          onContainerScroll();
        }, {
          immediate: true,
          flush: "post"
        });
      });
    });
    watch(function() {
      return props.container;
    }, function() {
      onScrollListener === null || onScrollListener === void 0 ? void 0 : onScrollListener.remove();
      onScrollListener = addEventListenerWrap(props.container, "scroll", onContainerScroll, false);
    }, {
      immediate: true,
      flush: "post"
    });
    onBeforeUnmount(function() {
      onMouseUpListener === null || onMouseUpListener === void 0 ? void 0 : onMouseUpListener.remove();
      onMouseMoveListener === null || onMouseMoveListener === void 0 ? void 0 : onMouseMoveListener.remove();
      onScrollListener === null || onScrollListener === void 0 ? void 0 : onScrollListener.remove();
      onResizeListener === null || onResizeListener === void 0 ? void 0 : onResizeListener.remove();
    });
    watch(function() {
      return _extends({}, scrollState.value);
    }, function(newState, preState) {
      if (newState.isHiddenScrollBar !== (preState === null || preState === void 0 ? void 0 : preState.isHiddenScrollBar) && !newState.isHiddenScrollBar) {
        setScrollState(function(state) {
          var bodyNode = props.scrollBodyRef.value;
          if (!bodyNode) {
            return state;
          }
          return _extends(_extends({}, state), {
            scrollLeft: bodyNode.scrollLeft / bodyNode.scrollWidth * bodyNode.clientWidth
          });
        });
      }
    }, {
      immediate: true
    });
    var scrollbarSize = getScrollBarSize();
    return function() {
      if (bodyScrollWidth.value <= bodyWidth.value || !scrollBarWidth.value || scrollState.value.isHiddenScrollBar) {
        return null;
      }
      var prefixCls = tableContext.prefixCls;
      return createVNode("div", {
        "style": {
          height: "".concat(scrollbarSize, "px"),
          width: "".concat(bodyWidth.value, "px"),
          bottom: "".concat(props.offsetScroll, "px")
        },
        "class": "".concat(prefixCls, "-sticky-scroll")
      }, [createVNode("div", {
        "onMousedown": onMouseDown,
        "ref": scrollBarRef,
        "class": classNames("".concat(prefixCls, "-sticky-scroll-bar"), _defineProperty$9({}, "".concat(prefixCls, "-sticky-scroll-bar-active"), isActive)),
        "style": {
          width: "".concat(scrollBarWidth.value, "px"),
          transform: "translate3d(".concat(scrollState.value.scrollLeft, "px, 0, 0)")
        }
      }, null)]);
    };
  }
});
var defaultContainer = canUseDom() ? window : null;
function useSticky(stickyRef, prefixClsRef) {
  return computed(function() {
    var _ref = _typeof(stickyRef.value) === "object" ? stickyRef.value : {}, _ref$offsetHeader = _ref.offsetHeader, offsetHeader = _ref$offsetHeader === void 0 ? 0 : _ref$offsetHeader, _ref$offsetSummary = _ref.offsetSummary, offsetSummary = _ref$offsetSummary === void 0 ? 0 : _ref$offsetSummary, _ref$offsetScroll = _ref.offsetScroll, offsetScroll = _ref$offsetScroll === void 0 ? 0 : _ref$offsetScroll, _ref$getContainer = _ref.getContainer, getContainer = _ref$getContainer === void 0 ? function() {
      return defaultContainer;
    } : _ref$getContainer;
    var container = getContainer() || defaultContainer;
    var isSticky = !!stickyRef.value;
    return {
      isSticky,
      stickyClassName: isSticky ? "".concat(prefixClsRef.value, "-sticky-holder") : "",
      offsetHeader,
      offsetSummary,
      offsetScroll,
      container
    };
  });
}
function useColumnWidth(colWidthsRef, columCountRef) {
  return computed(function() {
    var cloneColumns = [];
    var colWidths = colWidthsRef.value;
    var columCount = columCountRef.value;
    for (var i = 0; i < columCount; i += 1) {
      var val = colWidths[i];
      if (val !== void 0) {
        cloneColumns[i] = val;
      } else {
        return null;
      }
    }
    return cloneColumns;
  });
}
var FixedHolder = defineComponent({
  name: "FixedHolder",
  inheritAttrs: false,
  props: ["columns", "flattenColumns", "stickyOffsets", "customHeaderRow", "noData", "maxContentScroll", "colWidths", "columCount", "direction", "fixHeader", "stickyTopOffset", "stickyBottomOffset", "stickyClassName"],
  emits: ["scroll"],
  setup: function setup18(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, emit = _ref.emit;
    var tableContext = useInjectTable();
    var combinationScrollBarSize = computed(function() {
      return tableContext.isSticky && !props.fixHeader ? 0 : tableContext.scrollbarSize;
    });
    var scrollRef = ref();
    var onWheel = function onWheel2(e) {
      var currentTarget = e.currentTarget, deltaX = e.deltaX;
      if (deltaX) {
        emit("scroll", {
          currentTarget,
          scrollLeft: currentTarget.scrollLeft + deltaX
        });
        e.preventDefault();
      }
    };
    var wheelEvent = ref();
    onMounted(function() {
      nextTick(function() {
        wheelEvent.value = addEventListenerWrap(scrollRef.value, "wheel", onWheel);
      });
    });
    onBeforeUnmount(function() {
      var _a;
      (_a = wheelEvent.value) === null || _a === void 0 ? void 0 : _a.remove();
    });
    var allFlattenColumnsWithWidth = computed(function() {
      return props.flattenColumns.every(function(column) {
        return column.width && column.width !== 0 && column.width !== "0px";
      });
    });
    var columnsWithScrollbar = ref([]);
    var flattenColumnsWithScrollbar = ref([]);
    watchEffect(function() {
      var lastColumn = props.flattenColumns[props.flattenColumns.length - 1];
      var ScrollBarColumn = {
        fixed: lastColumn ? lastColumn.fixed : null,
        scrollbar: true,
        customHeaderCell: function customHeaderCell() {
          return {
            class: "".concat(tableContext.prefixCls, "-cell-scrollbar")
          };
        }
      };
      columnsWithScrollbar.value = combinationScrollBarSize.value ? [].concat(_toConsumableArray(props.columns), [ScrollBarColumn]) : props.columns;
      flattenColumnsWithScrollbar.value = combinationScrollBarSize.value ? [].concat(_toConsumableArray(props.flattenColumns), [ScrollBarColumn]) : props.flattenColumns;
    });
    var headerStickyOffsets = computed(function() {
      var stickyOffsets = props.stickyOffsets, direction = props.direction;
      var right = stickyOffsets.right, left = stickyOffsets.left;
      return _extends(_extends({}, stickyOffsets), {
        left: direction === "rtl" ? [].concat(_toConsumableArray(left.map(function(width) {
          return width + combinationScrollBarSize.value;
        })), [0]) : left,
        right: direction === "rtl" ? right : [].concat(_toConsumableArray(right.map(function(width) {
          return width + combinationScrollBarSize.value;
        })), [0]),
        isSticky: tableContext.isSticky
      });
    });
    var mergedColumnWidth = useColumnWidth(toRef(props, "colWidths"), toRef(props, "columCount"));
    return function() {
      var _a;
      var noData = props.noData, columCount = props.columCount, stickyTopOffset = props.stickyTopOffset, stickyBottomOffset = props.stickyBottomOffset, stickyClassName = props.stickyClassName, maxContentScroll = props.maxContentScroll;
      var isSticky = tableContext.isSticky;
      return createVNode("div", {
        "style": _extends({
          overflow: "hidden"
        }, isSticky ? {
          top: "".concat(stickyTopOffset, "px"),
          bottom: "".concat(stickyBottomOffset, "px")
        } : {}),
        "ref": scrollRef,
        "class": classNames(attrs.class, _defineProperty$9({}, stickyClassName, !!stickyClassName))
      }, [createVNode("table", {
        "style": {
          tableLayout: "fixed",
          visibility: noData || mergedColumnWidth.value ? null : "hidden"
        }
      }, [(!noData || !maxContentScroll || allFlattenColumnsWithWidth.value) && createVNode(ColGroup, {
        "colWidths": mergedColumnWidth.value ? [].concat(_toConsumableArray(mergedColumnWidth.value), [combinationScrollBarSize.value]) : [],
        "columCount": columCount + 1,
        "columns": flattenColumnsWithScrollbar.value
      }, null), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, _extends(_extends({}, props), {
        stickyOffsets: headerStickyOffsets.value,
        columns: columnsWithScrollbar.value,
        flattenColumns: flattenColumnsWithScrollbar.value
      }))])]);
    };
  }
});
function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}
function reactivePick(obj) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }
  return reactive(fromPairs(keys.map(function(k) {
    return [k, toRef(obj, k)];
  })));
}
var EMPTY_DATA = [];
var EMPTY_SCROLL_TARGET = {};
var INTERNAL_HOOKS = "rc-table-internal-hook";
var Table$2 = defineComponent({
  name: "Table",
  inheritAttrs: false,
  props: ["prefixCls", "data", "columns", "rowKey", "tableLayout", "scroll", "rowClassName", "title", "footer", "id", "showHeader", "components", "customRow", "customHeaderRow", "direction", "expandFixed", "expandColumnWidth", "expandedRowKeys", "defaultExpandedRowKeys", "expandedRowRender", "expandRowByClick", "expandIcon", "onExpand", "onExpandedRowsChange", "onUpdate:expandedRowKeys", "defaultExpandAllRows", "indentSize", "expandIconColumnIndex", "expandedRowClassName", "childrenColumnName", "rowExpandable", "sticky", "transformColumns", "internalHooks", "internalRefs", "canExpandable", "onUpdateInternalRefs", "transformCellText"],
  slots: ["title", "footer", "summary", "emptyText"],
  emits: ["expand", "expandedRowsChange", "updateInternalRefs", "update:expandedRowKeys"],
  setup: function setup19(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, emit = _ref.emit;
    var mergedData = computed(function() {
      return props.data || EMPTY_DATA;
    });
    var hasData = computed(function() {
      return !!mergedData.value.length;
    });
    var mergedComponents = computed(function() {
      return mergeObject(props.components, {});
    });
    var getComponent = function getComponent2(path, defaultComponent) {
      return getPathValue(mergedComponents.value, path) || defaultComponent;
    };
    var getRowKey = computed(function() {
      var rowKey = props.rowKey;
      if (typeof rowKey === "function") {
        return rowKey;
      }
      return function(record) {
        var key = record && record[rowKey];
        return key;
      };
    });
    var mergedExpandIcon = computed(function() {
      return props.expandIcon || renderExpandIcon$1;
    });
    var mergedChildrenColumnName = computed(function() {
      return props.childrenColumnName || "children";
    });
    var expandableType = computed(function() {
      if (props.expandedRowRender) {
        return "row";
      }
      if (props.canExpandable || mergedData.value.some(function(record) {
        return record && _typeof(record) === "object" && record[mergedChildrenColumnName.value];
      })) {
        return "nest";
      }
      return false;
    });
    var innerExpandedKeys = shallowRef([]);
    var stop = watchEffect(function() {
      if (props.defaultExpandedRowKeys) {
        innerExpandedKeys.value = props.defaultExpandedRowKeys;
      }
      if (props.defaultExpandAllRows) {
        innerExpandedKeys.value = findAllChildrenKeys(mergedData.value, getRowKey.value, mergedChildrenColumnName.value);
      }
    });
    stop();
    var mergedExpandedKeys = computed(function() {
      return new Set(props.expandedRowKeys || innerExpandedKeys.value || []);
    });
    var onTriggerExpand = function onTriggerExpand2(record) {
      var key = getRowKey.value(record, mergedData.value.indexOf(record));
      var newExpandedKeys;
      var hasKey = mergedExpandedKeys.value.has(key);
      if (hasKey) {
        mergedExpandedKeys.value.delete(key);
        newExpandedKeys = _toConsumableArray(mergedExpandedKeys.value);
      } else {
        newExpandedKeys = [].concat(_toConsumableArray(mergedExpandedKeys.value), [key]);
      }
      innerExpandedKeys.value = newExpandedKeys;
      emit("expand", !hasKey, record);
      emit("update:expandedRowKeys", newExpandedKeys);
      emit("expandedRowsChange", newExpandedKeys);
    };
    var componentWidth = ref(0);
    var _useColumns = useColumns$1(_extends(_extends({}, toRefs(props)), {
      expandable: computed(function() {
        return !!props.expandedRowRender;
      }),
      expandedKeys: mergedExpandedKeys,
      getRowKey,
      onTriggerExpand,
      expandIcon: mergedExpandIcon
    }), computed(function() {
      return props.internalHooks === INTERNAL_HOOKS ? props.transformColumns : null;
    })), _useColumns2 = _slicedToArray(_useColumns, 2), columns = _useColumns2[0], flattenColumns = _useColumns2[1];
    var columnContext = computed(function() {
      return {
        columns: columns.value,
        flattenColumns: flattenColumns.value
      };
    });
    var fullTableRef = ref();
    var scrollHeaderRef = ref();
    var scrollBodyRef = ref();
    var scrollBodySizeInfo = ref({
      scrollWidth: 0,
      clientWidth: 0
    });
    var scrollSummaryRef = ref();
    var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), pingedLeft = _useState2[0], setPingedLeft = _useState2[1];
    var _useState3 = useState(false), _useState4 = _slicedToArray(_useState3, 2), pingedRight = _useState4[0], setPingedRight = _useState4[1];
    var _useLayoutState = useLayoutState(/* @__PURE__ */ new Map()), _useLayoutState2 = _slicedToArray(_useLayoutState, 2), colsWidths = _useLayoutState2[0], updateColsWidths = _useLayoutState2[1];
    var colsKeys = computed(function() {
      return getColumnsKey(flattenColumns.value);
    });
    var colWidths = computed(function() {
      return colsKeys.value.map(function(columnKey) {
        return colsWidths.value.get(columnKey);
      });
    });
    var columnCount = computed(function() {
      return flattenColumns.value.length;
    });
    var stickyOffsets = useStickyOffsets(colWidths, columnCount, toRef(props, "direction"));
    var fixHeader = computed(function() {
      return props.scroll && validateValue(props.scroll.y);
    });
    var horizonScroll = computed(function() {
      return props.scroll && validateValue(props.scroll.x) || Boolean(props.expandFixed);
    });
    var fixColumn = computed(function() {
      return horizonScroll.value && flattenColumns.value.some(function(_ref2) {
        var fixed = _ref2.fixed;
        return fixed;
      });
    });
    var stickyRef = ref();
    var stickyState = useSticky(toRef(props, "sticky"), toRef(props, "prefixCls"));
    var summaryFixedInfos = reactive({});
    var fixFooter = computed(function() {
      var info = Object.values(summaryFixedInfos)[0];
      return (fixHeader.value || stickyState.value.isSticky) && info;
    });
    var summaryCollect = function summaryCollect2(uniKey, fixed) {
      if (fixed) {
        summaryFixedInfos[uniKey] = fixed;
      } else {
        delete summaryFixedInfos[uniKey];
      }
    };
    var scrollXStyle = ref({});
    var scrollYStyle = ref({});
    var scrollTableStyle = ref({});
    watchEffect(function() {
      if (fixHeader.value) {
        scrollYStyle.value = {
          overflowY: "scroll",
          maxHeight: toPx(props.scroll.y)
        };
      }
      if (horizonScroll.value) {
        scrollXStyle.value = {
          overflowX: "auto"
        };
        if (!fixHeader.value) {
          scrollYStyle.value = {
            overflowY: "hidden"
          };
        }
        scrollTableStyle.value = {
          width: props.scroll.x === true ? "auto" : toPx(props.scroll.x),
          minWidth: "100%"
        };
      }
    });
    var onColumnResize = function onColumnResize2(columnKey, width) {
      if (isVisible(fullTableRef.value)) {
        updateColsWidths(function(widths) {
          if (widths.get(columnKey) !== width) {
            var newWidths = new Map(widths);
            newWidths.set(columnKey, width);
            return newWidths;
          }
          return widths;
        });
      }
    };
    var _useTimeoutLock = useTimeoutLock(null), _useTimeoutLock2 = _slicedToArray(_useTimeoutLock, 2), setScrollTarget = _useTimeoutLock2[0], getScrollTarget = _useTimeoutLock2[1];
    function forceScroll(scrollLeft, target) {
      if (!target) {
        return;
      }
      if (typeof target === "function") {
        target(scrollLeft);
        return;
      }
      var domTarget = target.$el || target;
      if (domTarget.scrollLeft !== scrollLeft) {
        domTarget.scrollLeft = scrollLeft;
      }
    }
    var onScroll = function onScroll2(_ref3) {
      var currentTarget = _ref3.currentTarget, scrollLeft = _ref3.scrollLeft;
      var _a;
      var isRTL = props.direction === "rtl";
      var mergedScrollLeft = typeof scrollLeft === "number" ? scrollLeft : currentTarget.scrollLeft;
      var compareTarget = currentTarget || EMPTY_SCROLL_TARGET;
      if (!getScrollTarget() || getScrollTarget() === compareTarget) {
        setScrollTarget(compareTarget);
        forceScroll(mergedScrollLeft, scrollHeaderRef.value);
        forceScroll(mergedScrollLeft, scrollBodyRef.value);
        forceScroll(mergedScrollLeft, scrollSummaryRef.value);
        forceScroll(mergedScrollLeft, (_a = stickyRef.value) === null || _a === void 0 ? void 0 : _a.setScrollLeft);
      }
      if (currentTarget) {
        var scrollWidth = currentTarget.scrollWidth, clientWidth = currentTarget.clientWidth;
        if (isRTL) {
          setPingedLeft(-mergedScrollLeft < scrollWidth - clientWidth);
          setPingedRight(-mergedScrollLeft > 0);
        } else {
          setPingedLeft(mergedScrollLeft > 0);
          setPingedRight(mergedScrollLeft < scrollWidth - clientWidth);
        }
      }
    };
    var triggerOnScroll = function triggerOnScroll2() {
      if (horizonScroll.value && scrollBodyRef.value) {
        onScroll({
          currentTarget: scrollBodyRef.value
        });
      } else {
        setPingedLeft(false);
        setPingedRight(false);
      }
    };
    var timtout;
    var updateWidth = function updateWidth2(width) {
      if (width !== componentWidth.value) {
        triggerOnScroll();
        componentWidth.value = fullTableRef.value ? fullTableRef.value.offsetWidth : width;
      }
    };
    var onFullTableResize = function onFullTableResize2(_ref4) {
      var width = _ref4.width;
      clearTimeout(timtout);
      if (componentWidth.value === 0) {
        updateWidth(width);
        return;
      }
      timtout = setTimeout(function() {
        updateWidth(width);
      }, 100);
    };
    watch([horizonScroll, function() {
      return props.data;
    }, function() {
      return props.columns;
    }], function() {
      if (horizonScroll.value) {
        triggerOnScroll();
      }
    });
    var _useState5 = useState(0), _useState6 = _slicedToArray(_useState5, 2), scrollbarSize = _useState6[0], setScrollbarSize = _useState6[1];
    useProvideSticky();
    onMounted(function() {
      nextTick(function() {
        var _a, _b;
        triggerOnScroll();
        setScrollbarSize(getTargetScrollBarSize(scrollBodyRef.value).width);
        scrollBodySizeInfo.value = {
          scrollWidth: ((_a = scrollBodyRef.value) === null || _a === void 0 ? void 0 : _a.scrollWidth) || 0,
          clientWidth: ((_b = scrollBodyRef.value) === null || _b === void 0 ? void 0 : _b.clientWidth) || 0
        };
      });
    });
    onUpdated(function() {
      nextTick(function() {
        var _a, _b;
        var scrollWidth = ((_a = scrollBodyRef.value) === null || _a === void 0 ? void 0 : _a.scrollWidth) || 0;
        var clientWidth = ((_b = scrollBodyRef.value) === null || _b === void 0 ? void 0 : _b.clientWidth) || 0;
        if (scrollBodySizeInfo.value.scrollWidth !== scrollWidth || scrollBodySizeInfo.value.clientWidth !== clientWidth) {
          scrollBodySizeInfo.value = {
            scrollWidth,
            clientWidth
          };
        }
      });
    });
    watchEffect(function() {
      if (props.internalHooks === INTERNAL_HOOKS && props.internalRefs) {
        props.onUpdateInternalRefs({
          body: scrollBodyRef.value ? scrollBodyRef.value.$el || scrollBodyRef.value : null
        });
      }
    }, {
      flush: "post"
    });
    var mergedTableLayout = computed(function() {
      if (props.tableLayout) {
        return props.tableLayout;
      }
      if (fixColumn.value) {
        return props.scroll.x === "max-content" ? "auto" : "fixed";
      }
      if (fixHeader.value || stickyState.value.isSticky || flattenColumns.value.some(function(_ref5) {
        var ellipsis = _ref5.ellipsis;
        return ellipsis;
      })) {
        return "fixed";
      }
      return "auto";
    });
    var emptyNode = function emptyNode2() {
      var _a;
      return hasData.value ? null : ((_a = slots.emptyText) === null || _a === void 0 ? void 0 : _a.call(slots)) || "No Data";
    };
    useProvideTable(reactive(_extends(_extends({}, toRefs(reactivePick(props, "prefixCls", "direction", "transformCellText"))), {
      getComponent,
      scrollbarSize,
      fixedInfoList: computed(function() {
        return flattenColumns.value.map(function(_, colIndex) {
          return getCellFixedInfo(colIndex, colIndex, flattenColumns.value, stickyOffsets.value, props.direction);
        });
      }),
      isSticky: computed(function() {
        return stickyState.value.isSticky;
      }),
      summaryCollect
    })));
    useProvideBody(reactive(_extends(_extends({}, toRefs(reactivePick(props, "rowClassName", "expandedRowClassName", "expandRowByClick", "expandedRowRender", "expandIconColumnIndex", "indentSize"))), {
      columns,
      flattenColumns,
      tableLayout: mergedTableLayout,
      expandIcon: mergedExpandIcon,
      expandableType,
      onTriggerExpand
    })));
    useProvideResize({
      onColumnResize
    });
    useProvideExpandedRow({
      componentWidth,
      fixHeader,
      fixColumn,
      horizonScroll
    });
    var bodyTable = function bodyTable2() {
      return createVNode(Body, {
        "data": mergedData.value,
        "measureColumnWidth": fixHeader.value || horizonScroll.value || stickyState.value.isSticky,
        "expandedKeys": mergedExpandedKeys.value,
        "rowExpandable": props.rowExpandable,
        "getRowKey": getRowKey.value,
        "customRow": props.customRow,
        "childrenColumnName": mergedChildrenColumnName.value
      }, {
        emptyNode
      });
    };
    var bodyColGroup = function bodyColGroup2() {
      return createVNode(ColGroup, {
        "colWidths": flattenColumns.value.map(function(_ref6) {
          var width = _ref6.width;
          return width;
        }),
        "columns": flattenColumns.value
      }, null);
    };
    return function() {
      var _a;
      var prefixCls = props.prefixCls, scroll = props.scroll, tableLayout = props.tableLayout, direction = props.direction, _props$title = props.title, title = _props$title === void 0 ? slots.title : _props$title, _props$footer = props.footer, footer = _props$footer === void 0 ? slots.footer : _props$footer, id = props.id, showHeader = props.showHeader, customHeaderRow = props.customHeaderRow;
      var _stickyState$value = stickyState.value, isSticky = _stickyState$value.isSticky, offsetHeader = _stickyState$value.offsetHeader, offsetSummary = _stickyState$value.offsetSummary, offsetScroll = _stickyState$value.offsetScroll, stickyClassName = _stickyState$value.stickyClassName, container = _stickyState$value.container;
      var TableComponent = getComponent(["table"], "table");
      var customizeScrollBody = getComponent(["body"]);
      var summaryNode = (_a = slots.summary) === null || _a === void 0 ? void 0 : _a.call(slots, {
        pageData: mergedData.value
      });
      var groupTableNode = function groupTableNode2() {
        return null;
      };
      var headerProps = {
        colWidths: colWidths.value,
        columCount: flattenColumns.value.length,
        stickyOffsets: stickyOffsets.value,
        customHeaderRow,
        fixHeader: fixHeader.value,
        scroll
      };
      if (fixHeader.value || isSticky) {
        var bodyContent = function bodyContent2() {
          return null;
        };
        if (typeof customizeScrollBody === "function") {
          bodyContent = function bodyContent2() {
            return customizeScrollBody(mergedData.value, {
              scrollbarSize: scrollbarSize.value,
              ref: scrollBodyRef,
              onScroll
            });
          };
          headerProps.colWidths = flattenColumns.value.map(function(_ref7, index) {
            var width = _ref7.width;
            var colWidth = index === columns.value.length - 1 ? width - scrollbarSize.value : width;
            if (typeof colWidth === "number" && !Number.isNaN(colWidth)) {
              return colWidth;
            }
            return 0;
          });
        } else {
          bodyContent = function bodyContent2() {
            return createVNode("div", {
              "style": _extends(_extends({}, scrollXStyle.value), scrollYStyle.value),
              "onScroll": onScroll,
              "ref": scrollBodyRef,
              "class": classNames("".concat(prefixCls, "-body"))
            }, [createVNode(TableComponent, {
              "style": _extends(_extends({}, scrollTableStyle.value), {
                tableLayout: mergedTableLayout.value
              })
            }, {
              default: function _default() {
                return [bodyColGroup(), bodyTable(), !fixFooter.value && summaryNode && createVNode(Footer, {
                  "stickyOffsets": stickyOffsets.value,
                  "flattenColumns": flattenColumns.value
                }, {
                  default: function _default2() {
                    return [summaryNode];
                  }
                })];
              }
            })]);
          };
        }
        var fixedHolderProps = _extends(_extends(_extends({
          noData: !mergedData.value.length,
          maxContentScroll: horizonScroll.value && scroll.x === "max-content"
        }, headerProps), columnContext.value), {
          direction,
          stickyClassName,
          onScroll
        });
        groupTableNode = function groupTableNode2() {
          return createVNode(Fragment, null, [showHeader !== false && createVNode(FixedHolder, _objectSpread2(_objectSpread2({}, fixedHolderProps), {}, {
            "stickyTopOffset": offsetHeader,
            "class": "".concat(prefixCls, "-header"),
            "ref": scrollHeaderRef
          }), {
            default: function _default(fixedHolderPassProps) {
              return createVNode(Fragment, null, [createVNode(Header, fixedHolderPassProps, null), fixFooter.value === "top" && createVNode(Footer, fixedHolderPassProps, {
                default: function _default2() {
                  return [summaryNode];
                }
              })]);
            }
          }), bodyContent(), fixFooter.value && fixFooter.value !== "top" && createVNode(FixedHolder, _objectSpread2(_objectSpread2({}, fixedHolderProps), {}, {
            "stickyBottomOffset": offsetSummary,
            "class": "".concat(prefixCls, "-summary"),
            "ref": scrollSummaryRef
          }), {
            default: function _default(fixedHolderPassProps) {
              return createVNode(Footer, fixedHolderPassProps, {
                default: function _default2() {
                  return [summaryNode];
                }
              });
            }
          }), isSticky && scrollBodyRef.value && createVNode(StickyScrollBar, {
            "ref": stickyRef,
            "offsetScroll": offsetScroll,
            "scrollBodyRef": scrollBodyRef,
            "onScroll": onScroll,
            "container": container,
            "scrollBodySizeInfo": scrollBodySizeInfo.value
          }, null)]);
        };
      } else {
        groupTableNode = function groupTableNode2() {
          return createVNode("div", {
            "style": _extends(_extends({}, scrollXStyle.value), scrollYStyle.value),
            "class": classNames("".concat(prefixCls, "-content")),
            "onScroll": onScroll,
            "ref": scrollBodyRef
          }, [createVNode(TableComponent, {
            "style": _extends(_extends({}, scrollTableStyle.value), {
              tableLayout: mergedTableLayout.value
            })
          }, {
            default: function _default() {
              return [bodyColGroup(), showHeader !== false && createVNode(Header, _objectSpread2(_objectSpread2({}, headerProps), columnContext.value), null), bodyTable(), summaryNode && createVNode(Footer, {
                "stickyOffsets": stickyOffsets.value,
                "flattenColumns": flattenColumns.value
              }, {
                default: function _default2() {
                  return [summaryNode];
                }
              })];
            }
          })]);
        };
      }
      var ariaProps = pickAttrs(attrs, {
        aria: true,
        data: true
      });
      var fullTable = function fullTable2() {
        var _classNames;
        return createVNode("div", _objectSpread2(_objectSpread2({}, ariaProps), {}, {
          "class": classNames(prefixCls, (_classNames = {}, _defineProperty$9(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), _defineProperty$9(_classNames, "".concat(prefixCls, "-ping-left"), pingedLeft.value), _defineProperty$9(_classNames, "".concat(prefixCls, "-ping-right"), pingedRight.value), _defineProperty$9(_classNames, "".concat(prefixCls, "-layout-fixed"), tableLayout === "fixed"), _defineProperty$9(_classNames, "".concat(prefixCls, "-fixed-header"), fixHeader.value), _defineProperty$9(_classNames, "".concat(prefixCls, "-fixed-column"), fixColumn.value), _defineProperty$9(_classNames, "".concat(prefixCls, "-scroll-horizontal"), horizonScroll.value), _defineProperty$9(_classNames, "".concat(prefixCls, "-has-fix-left"), flattenColumns.value[0] && flattenColumns.value[0].fixed), _defineProperty$9(_classNames, "".concat(prefixCls, "-has-fix-right"), flattenColumns.value[columnCount.value - 1] && flattenColumns.value[columnCount.value - 1].fixed === "right"), _defineProperty$9(_classNames, attrs.class, attrs.class), _classNames)),
          "style": attrs.style,
          "id": id,
          "ref": fullTableRef
        }), [title && createVNode(Panel, {
          "class": "".concat(prefixCls, "-title")
        }, {
          default: function _default() {
            return [title(mergedData.value)];
          }
        }), createVNode("div", {
          "class": "".concat(prefixCls, "-container")
        }, [groupTableNode()]), footer && createVNode(Panel, {
          "class": "".concat(prefixCls, "-footer")
        }, {
          default: function _default() {
            return [footer(mergedData.value)];
          }
        })]);
      };
      if (horizonScroll.value) {
        return createVNode(ResizeObserver, {
          "onResize": onFullTableResize
        }, {
          default: fullTable
        });
      }
      return fullTable();
    };
  }
});
var DEFAULT_PAGE_SIZE = 10;
function getPaginationParam(pagination, mergedPagination) {
  var param = {
    current: mergedPagination.current,
    pageSize: mergedPagination.pageSize
  };
  var paginationObj = pagination && _typeof(pagination) === "object" ? pagination : {};
  Object.keys(paginationObj).forEach(function(pageProp) {
    var value = mergedPagination[pageProp];
    if (typeof value !== "function") {
      param[pageProp] = value;
    }
  });
  return param;
}
function extendsObject() {
  var result = {};
  for (var _len = arguments.length, list = new Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }
  list.forEach(function(obj) {
    if (obj) {
      Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        if (val !== void 0) {
          result[key] = val;
        }
      });
    }
  });
  return result;
}
function usePagination(totalRef, paginationRef, onChange) {
  var pagination = computed(function() {
    return paginationRef.value && _typeof(paginationRef.value) === "object" ? paginationRef.value : {};
  });
  var paginationTotal = computed(function() {
    return pagination.value.total || 0;
  });
  var _useState = useState(function() {
    return {
      current: "defaultCurrent" in pagination.value ? pagination.value.defaultCurrent : 1,
      pageSize: "defaultPageSize" in pagination.value ? pagination.value.defaultPageSize : DEFAULT_PAGE_SIZE
    };
  }), _useState2 = _slicedToArray(_useState, 2), innerPagination = _useState2[0], setInnerPagination = _useState2[1];
  var mergedPagination = computed(function() {
    var mP = extendsObject(innerPagination.value, pagination.value, {
      total: paginationTotal.value > 0 ? paginationTotal.value : totalRef.value
    });
    var maxPage = Math.ceil((paginationTotal.value || totalRef.value) / mP.pageSize);
    if (mP.current > maxPage) {
      mP.current = maxPage || 1;
    }
    return mP;
  });
  var refreshPagination = function refreshPagination2(current, pageSize) {
    if (pagination.value === false)
      return;
    setInnerPagination({
      current: current !== null && current !== void 0 ? current : 1,
      pageSize: pageSize || mergedPagination.value.pageSize
    });
  };
  var onInternalChange = function onInternalChange2(current, pageSize) {
    var _a, _b;
    if (pagination.value) {
      (_b = (_a = pagination.value).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, current, pageSize);
    }
    refreshPagination(current, pageSize);
    onChange(current, pageSize || mergedPagination.value.pageSize);
  };
  return [computed(function() {
    return pagination.value === false ? {} : _extends(_extends({}, mergedPagination.value), {
      onChange: onInternalChange
    });
  }), refreshPagination];
}
function useLazyKVMap(dataRef, childrenColumnNameRef, getRowKeyRef) {
  var mapCacheRef = shallowRef({});
  watch([dataRef, childrenColumnNameRef, getRowKeyRef], function() {
    var kvMap = /* @__PURE__ */ new Map();
    var getRowKey = getRowKeyRef.value;
    var childrenColumnName = childrenColumnNameRef.value;
    function dig(records) {
      records.forEach(function(record, index) {
        var rowKey = getRowKey(record, index);
        kvMap.set(rowKey, record);
        if (record && _typeof(record) === "object" && childrenColumnName in record) {
          dig(record[childrenColumnName] || []);
        }
      });
    }
    dig(dataRef.value);
    mapCacheRef.value = {
      kvMap
    };
  }, {
    deep: true,
    immediate: true
  });
  function getRecordByKey(key) {
    return mapCacheRef.value.kvMap.get(key);
  }
  return [getRecordByKey];
}
var SELECTION_COLUMN = {};
var SELECTION_ALL = "SELECT_ALL";
var SELECTION_INVERT = "SELECT_INVERT";
var SELECTION_NONE = "SELECT_NONE";
var EMPTY_LIST$1 = [];
function flattenData(data, childrenColumnName) {
  var list = [];
  (data || []).forEach(function(record) {
    list.push(record);
    if (record && _typeof(record) === "object" && childrenColumnName in record) {
      list = [].concat(_toConsumableArray(list), _toConsumableArray(flattenData(record[childrenColumnName], childrenColumnName)));
    }
  });
  return list;
}
function useSelection(rowSelectionRef, configRef) {
  var mergedRowSelection = computed(function() {
    var temp = rowSelectionRef.value || {};
    var _temp$checkStrictly = temp.checkStrictly, checkStrictly = _temp$checkStrictly === void 0 ? true : _temp$checkStrictly;
    return _extends(_extends({}, temp), {
      checkStrictly
    });
  });
  var _useMergedState = useMergedState(mergedRowSelection.value.selectedRowKeys || mergedRowSelection.value.defaultSelectedRowKeys || EMPTY_LIST$1, {
    value: computed(function() {
      return mergedRowSelection.value.selectedRowKeys;
    })
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedSelectedKeys = _useMergedState2[0], setMergedSelectedKeys = _useMergedState2[1];
  var preserveRecordsRef = shallowRef(/* @__PURE__ */ new Map());
  var updatePreserveRecordsCache = function updatePreserveRecordsCache2(keys) {
    if (mergedRowSelection.value.preserveSelectedRowKeys) {
      var newCache = /* @__PURE__ */ new Map();
      keys.forEach(function(key) {
        var record = configRef.getRecordByKey(key);
        if (!record && preserveRecordsRef.value.has(key)) {
          record = preserveRecordsRef.value.get(key);
        }
        newCache.set(key, record);
      });
      preserveRecordsRef.value = newCache;
    }
  };
  watchEffect(function() {
    updatePreserveRecordsCache(mergedSelectedKeys.value);
  });
  var keyEntities = computed(function() {
    return mergedRowSelection.value.checkStrictly ? null : convertDataToEntities(configRef.data.value, {
      externalGetKey: configRef.getRowKey.value,
      childrenPropName: configRef.childrenColumnName.value
    }).keyEntities;
  });
  var flattedData = computed(function() {
    return flattenData(configRef.pageData.value, configRef.childrenColumnName.value);
  });
  var checkboxPropsMap = computed(function() {
    var map = /* @__PURE__ */ new Map();
    var getRowKey = configRef.getRowKey.value;
    var getCheckboxProps = mergedRowSelection.value.getCheckboxProps;
    flattedData.value.forEach(function(record, index) {
      var key = getRowKey(record, index);
      var checkboxProps = (getCheckboxProps ? getCheckboxProps(record) : null) || {};
      map.set(key, checkboxProps);
    });
    return map;
  });
  var _useMaxLevel = useMaxLevel(keyEntities), maxLevel = _useMaxLevel.maxLevel, levelEntities = _useMaxLevel.levelEntities;
  var isCheckboxDisabled = function isCheckboxDisabled2(r) {
    var _a;
    return !!((_a = checkboxPropsMap.value.get(configRef.getRowKey.value(r))) === null || _a === void 0 ? void 0 : _a.disabled);
  };
  var selectKeysState = computed(function() {
    if (mergedRowSelection.value.checkStrictly) {
      return [mergedSelectedKeys.value || [], []];
    }
    var _conductCheck = conductCheck(mergedSelectedKeys.value, true, keyEntities.value, maxLevel.value, levelEntities.value, isCheckboxDisabled), checkedKeys = _conductCheck.checkedKeys, halfCheckedKeys = _conductCheck.halfCheckedKeys;
    return [checkedKeys || [], halfCheckedKeys];
  });
  var derivedSelectedKeys = computed(function() {
    return selectKeysState.value[0];
  });
  var derivedHalfSelectedKeys = computed(function() {
    return selectKeysState.value[1];
  });
  var derivedSelectedKeySet = computed(function() {
    var keys = mergedRowSelection.value.type === "radio" ? derivedSelectedKeys.value.slice(0, 1) : derivedSelectedKeys.value;
    return new Set(keys);
  });
  var derivedHalfSelectedKeySet = computed(function() {
    return mergedRowSelection.value.type === "radio" ? /* @__PURE__ */ new Set() : new Set(derivedHalfSelectedKeys.value);
  });
  var _useState = useState(null), _useState2 = _slicedToArray(_useState, 2), lastSelectedKey = _useState2[0], setLastSelectedKey = _useState2[1];
  var setSelectedKeys = function setSelectedKeys2(keys) {
    var availableKeys;
    var records;
    updatePreserveRecordsCache(keys);
    var _mergedRowSelection$v = mergedRowSelection.value, preserveSelectedRowKeys = _mergedRowSelection$v.preserveSelectedRowKeys, onSelectionChange = _mergedRowSelection$v.onChange;
    var getRecordByKey = configRef.getRecordByKey;
    if (preserveSelectedRowKeys) {
      availableKeys = keys;
      records = keys.map(function(key) {
        return preserveRecordsRef.value.get(key);
      });
    } else {
      availableKeys = [];
      records = [];
      keys.forEach(function(key) {
        var record = getRecordByKey(key);
        if (record !== void 0) {
          availableKeys.push(key);
          records.push(record);
        }
      });
    }
    setMergedSelectedKeys(availableKeys);
    onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(availableKeys, records);
  };
  var triggerSingleSelection = function triggerSingleSelection2(key, selected, keys, event) {
    var onSelect = mergedRowSelection.value.onSelect;
    var _ref = configRef || {}, getRecordByKey = _ref.getRecordByKey;
    if (onSelect) {
      var rows = keys.map(function(k) {
        return getRecordByKey(k);
      });
      onSelect(getRecordByKey(key), selected, rows, event);
    }
    setSelectedKeys(keys);
  };
  var mergedSelections = computed(function() {
    var _mergedRowSelection$v2 = mergedRowSelection.value, onSelectInvert = _mergedRowSelection$v2.onSelectInvert, onSelectNone = _mergedRowSelection$v2.onSelectNone, selections = _mergedRowSelection$v2.selections, hideSelectAll = _mergedRowSelection$v2.hideSelectAll;
    var data = configRef.data, pageData = configRef.pageData, getRowKey = configRef.getRowKey, tableLocale = configRef.locale;
    if (!selections || hideSelectAll) {
      return null;
    }
    var selectionList = selections === true ? [SELECTION_ALL, SELECTION_INVERT, SELECTION_NONE] : selections;
    return selectionList.map(function(selection) {
      if (selection === SELECTION_ALL) {
        return {
          key: "all",
          text: tableLocale.value.selectionAll,
          onSelect: function onSelect() {
            setSelectedKeys(data.value.map(function(record, index) {
              return getRowKey.value(record, index);
            }).filter(function(key) {
              var checkProps = checkboxPropsMap.value.get(key);
              return !(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled) || derivedSelectedKeySet.value.has(key);
            }));
          }
        };
      }
      if (selection === SELECTION_INVERT) {
        return {
          key: "invert",
          text: tableLocale.value.selectInvert,
          onSelect: function onSelect() {
            var keySet = new Set(derivedSelectedKeySet.value);
            pageData.value.forEach(function(record, index) {
              var key = getRowKey.value(record, index);
              var checkProps = checkboxPropsMap.value.get(key);
              if (!(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled)) {
                if (keySet.has(key)) {
                  keySet.delete(key);
                } else {
                  keySet.add(key);
                }
              }
            });
            var keys = Array.from(keySet);
            if (onSelectInvert) {
              devWarning(false, "Table", "`onSelectInvert` will be removed in future. Please use `onChange` instead.");
              onSelectInvert(keys);
            }
            setSelectedKeys(keys);
          }
        };
      }
      if (selection === SELECTION_NONE) {
        return {
          key: "none",
          text: tableLocale.value.selectNone,
          onSelect: function onSelect() {
            onSelectNone === null || onSelectNone === void 0 ? void 0 : onSelectNone();
            setSelectedKeys(Array.from(derivedSelectedKeySet.value).filter(function(key) {
              var checkProps = checkboxPropsMap.value.get(key);
              return checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled;
            }));
          }
        };
      }
      return selection;
    });
  });
  var flattedDataLength = computed(function() {
    return flattedData.value.length;
  });
  var transformColumns = function transformColumns2(columns) {
    var _a;
    var _mergedRowSelection$v3 = mergedRowSelection.value, onSelectAll = _mergedRowSelection$v3.onSelectAll, onSelectMultiple = _mergedRowSelection$v3.onSelectMultiple, selectionColWidth = _mergedRowSelection$v3.columnWidth, selectionType = _mergedRowSelection$v3.type, fixed = _mergedRowSelection$v3.fixed, customizeRenderCell = _mergedRowSelection$v3.renderCell, hideSelectAll = _mergedRowSelection$v3.hideSelectAll, checkStrictly = _mergedRowSelection$v3.checkStrictly;
    var prefixCls = configRef.prefixCls, getRecordByKey = configRef.getRecordByKey, getRowKey = configRef.getRowKey, expandType = configRef.expandType, getPopupContainer = configRef.getPopupContainer;
    if (!rowSelectionRef.value) {
      return columns.filter(function(col) {
        return col !== SELECTION_COLUMN;
      });
    }
    var cloneColumns = columns.slice();
    var keySet = new Set(derivedSelectedKeySet.value);
    var recordKeys = flattedData.value.map(getRowKey.value).filter(function(key) {
      return !checkboxPropsMap.value.get(key).disabled;
    });
    var checkedCurrentAll = recordKeys.every(function(key) {
      return keySet.has(key);
    });
    var checkedCurrentSome = recordKeys.some(function(key) {
      return keySet.has(key);
    });
    var onSelectAllChange = function onSelectAllChange2() {
      var changeKeys = [];
      if (checkedCurrentAll) {
        recordKeys.forEach(function(key) {
          keySet.delete(key);
          changeKeys.push(key);
        });
      } else {
        recordKeys.forEach(function(key) {
          if (!keySet.has(key)) {
            keySet.add(key);
            changeKeys.push(key);
          }
        });
      }
      var keys = Array.from(keySet);
      onSelectAll === null || onSelectAll === void 0 ? void 0 : onSelectAll(!checkedCurrentAll, keys.map(function(k) {
        return getRecordByKey(k);
      }), changeKeys.map(function(k) {
        return getRecordByKey(k);
      }));
      setSelectedKeys(keys);
    };
    var title;
    if (selectionType !== "radio") {
      var customizeSelections;
      if (mergedSelections.value) {
        var menu = createVNode(Menu, {
          "getPopupContainer": getPopupContainer.value
        }, {
          default: function _default() {
            return [mergedSelections.value.map(function(selection, index) {
              var key = selection.key, text = selection.text, onSelectionClick = selection.onSelect;
              return createVNode(Menu.Item, {
                "key": key || index,
                "onClick": function onClick() {
                  onSelectionClick === null || onSelectionClick === void 0 ? void 0 : onSelectionClick(recordKeys);
                }
              }, {
                default: function _default2() {
                  return [text];
                }
              });
            })];
          }
        });
        customizeSelections = createVNode("div", {
          "class": "".concat(prefixCls.value, "-selection-extra")
        }, [createVNode(Dropdown, {
          "overlay": menu,
          "getPopupContainer": getPopupContainer.value
        }, {
          default: function _default() {
            return [createVNode("span", null, [createVNode(DownOutlined, null, null)])];
          }
        })]);
      }
      var allDisabledData = flattedData.value.map(function(record, index) {
        var key = getRowKey.value(record, index);
        var checkboxProps = checkboxPropsMap.value.get(key) || {};
        return _extends({
          checked: keySet.has(key)
        }, checkboxProps);
      }).filter(function(_ref2) {
        var disabled = _ref2.disabled;
        return disabled;
      });
      var allDisabled = !!allDisabledData.length && allDisabledData.length === flattedDataLength.value;
      var allDisabledAndChecked = allDisabled && allDisabledData.every(function(_ref3) {
        var checked = _ref3.checked;
        return checked;
      });
      var allDisabledSomeChecked = allDisabled && allDisabledData.some(function(_ref4) {
        var checked = _ref4.checked;
        return checked;
      });
      title = !hideSelectAll && createVNode("div", {
        "class": "".concat(prefixCls.value, "-selection")
      }, [createVNode(Checkbox, {
        "checked": !allDisabled ? !!flattedDataLength.value && checkedCurrentAll : allDisabledAndChecked,
        "indeterminate": !allDisabled ? !checkedCurrentAll && checkedCurrentSome : !allDisabledAndChecked && allDisabledSomeChecked,
        "onChange": onSelectAllChange,
        "disabled": flattedDataLength.value === 0 || allDisabled,
        "skipGroup": true
      }, null), customizeSelections]);
    }
    var renderCell;
    if (selectionType === "radio") {
      renderCell = function renderCell2(_ref5) {
        var record = _ref5.record, index = _ref5.index;
        var key = getRowKey.value(record, index);
        var checked = keySet.has(key);
        return {
          node: createVNode(Radio, _objectSpread2(_objectSpread2({}, checkboxPropsMap.value.get(key)), {}, {
            "checked": checked,
            "onClick": function onClick(e) {
              return e.stopPropagation();
            },
            "onChange": function onChange(event) {
              if (!keySet.has(key)) {
                triggerSingleSelection(key, true, [key], event.nativeEvent);
              }
            }
          }), null),
          checked
        };
      };
    } else {
      renderCell = function renderCell2(_ref6) {
        var record = _ref6.record, index = _ref6.index;
        var _a2;
        var key = getRowKey.value(record, index);
        var checked = keySet.has(key);
        var indeterminate = derivedHalfSelectedKeySet.value.has(key);
        var checkboxProps = checkboxPropsMap.value.get(key);
        var mergedIndeterminate;
        if (expandType.value === "nest") {
          mergedIndeterminate = indeterminate;
          devWarning(typeof (checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== "boolean", "Table", "set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource.");
        } else {
          mergedIndeterminate = (_a2 = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== null && _a2 !== void 0 ? _a2 : indeterminate;
        }
        return {
          node: createVNode(Checkbox, _objectSpread2(_objectSpread2({}, checkboxProps), {}, {
            "indeterminate": mergedIndeterminate,
            "checked": checked,
            "skipGroup": true,
            "onClick": function onClick(e) {
              return e.stopPropagation();
            },
            "onChange": function onChange(_ref7) {
              var nativeEvent = _ref7.nativeEvent;
              var shiftKey = nativeEvent.shiftKey;
              var startIndex = -1;
              var endIndex = -1;
              if (shiftKey && checkStrictly) {
                var pointKeys = /* @__PURE__ */ new Set([lastSelectedKey.value, key]);
                recordKeys.some(function(recordKey, recordIndex) {
                  if (pointKeys.has(recordKey)) {
                    if (startIndex === -1) {
                      startIndex = recordIndex;
                    } else {
                      endIndex = recordIndex;
                      return true;
                    }
                  }
                  return false;
                });
              }
              if (endIndex !== -1 && startIndex !== endIndex && checkStrictly) {
                var rangeKeys = recordKeys.slice(startIndex, endIndex + 1);
                var changedKeys = [];
                if (checked) {
                  rangeKeys.forEach(function(recordKey) {
                    if (keySet.has(recordKey)) {
                      changedKeys.push(recordKey);
                      keySet.delete(recordKey);
                    }
                  });
                } else {
                  rangeKeys.forEach(function(recordKey) {
                    if (!keySet.has(recordKey)) {
                      changedKeys.push(recordKey);
                      keySet.add(recordKey);
                    }
                  });
                }
                var keys = Array.from(keySet);
                onSelectMultiple === null || onSelectMultiple === void 0 ? void 0 : onSelectMultiple(!checked, keys.map(function(recordKey) {
                  return getRecordByKey(recordKey);
                }), changedKeys.map(function(recordKey) {
                  return getRecordByKey(recordKey);
                }));
                setSelectedKeys(keys);
              } else {
                var originCheckedKeys = derivedSelectedKeys.value;
                if (checkStrictly) {
                  var checkedKeys = checked ? arrDel(originCheckedKeys, key) : arrAdd(originCheckedKeys, key);
                  triggerSingleSelection(key, !checked, checkedKeys, nativeEvent);
                } else {
                  var result = conductCheck([].concat(_toConsumableArray(originCheckedKeys), [key]), true, keyEntities.value, maxLevel.value, levelEntities.value, isCheckboxDisabled);
                  var _checkedKeys = result.checkedKeys, halfCheckedKeys = result.halfCheckedKeys;
                  var nextCheckedKeys = _checkedKeys;
                  if (checked) {
                    var tempKeySet = new Set(_checkedKeys);
                    tempKeySet.delete(key);
                    nextCheckedKeys = conductCheck(Array.from(tempKeySet), {
                      checked: false,
                      halfCheckedKeys
                    }, keyEntities.value, maxLevel.value, levelEntities.value, isCheckboxDisabled).checkedKeys;
                  }
                  triggerSingleSelection(key, !checked, nextCheckedKeys, nativeEvent);
                }
              }
              setLastSelectedKey(key);
            }
          }), null),
          checked
        };
      };
    }
    var renderSelectionCell = function renderSelectionCell2(_ref8) {
      var record = _ref8.record, index = _ref8.index;
      var _renderCell = renderCell({
        record,
        index
      }), node = _renderCell.node, checked = _renderCell.checked;
      if (customizeRenderCell) {
        return customizeRenderCell(checked, record, index, node);
      }
      return node;
    };
    if (!cloneColumns.includes(SELECTION_COLUMN)) {
      if (cloneColumns.findIndex(function(col) {
        var _a2;
        return ((_a2 = col[INTERNAL_COL_DEFINE]) === null || _a2 === void 0 ? void 0 : _a2.columnType) === "EXPAND_COLUMN";
      }) === 0) {
        var _cloneColumns = cloneColumns, _cloneColumns2 = _toArray(_cloneColumns), expandColumn = _cloneColumns2[0], restColumns = _cloneColumns2.slice(1);
        cloneColumns = [expandColumn, SELECTION_COLUMN].concat(_toConsumableArray(restColumns));
      } else {
        cloneColumns = [SELECTION_COLUMN].concat(_toConsumableArray(cloneColumns));
      }
    }
    var selectionColumnIndex = cloneColumns.indexOf(SELECTION_COLUMN);
    cloneColumns = cloneColumns.filter(function(column, index) {
      return column !== SELECTION_COLUMN || index === selectionColumnIndex;
    });
    var prevCol = cloneColumns[selectionColumnIndex - 1];
    var nextCol = cloneColumns[selectionColumnIndex + 1];
    var mergedFixed = fixed;
    if (mergedFixed === void 0) {
      if ((nextCol === null || nextCol === void 0 ? void 0 : nextCol.fixed) !== void 0) {
        mergedFixed = nextCol.fixed;
      } else if ((prevCol === null || prevCol === void 0 ? void 0 : prevCol.fixed) !== void 0) {
        mergedFixed = prevCol.fixed;
      }
    }
    if (mergedFixed && prevCol && ((_a = prevCol[INTERNAL_COL_DEFINE]) === null || _a === void 0 ? void 0 : _a.columnType) === "EXPAND_COLUMN" && prevCol.fixed === void 0) {
      prevCol.fixed = mergedFixed;
    }
    var selectionColumn = _defineProperty$9({
      fixed: mergedFixed,
      width: selectionColWidth,
      className: "".concat(prefixCls.value, "-selection-column"),
      title: mergedRowSelection.value.columnTitle || title,
      customRender: renderSelectionCell
    }, INTERNAL_COL_DEFINE, {
      class: "".concat(prefixCls.value, "-selection-col")
    });
    return cloneColumns.map(function(col) {
      return col === SELECTION_COLUMN ? selectionColumn : col;
    });
  };
  return [transformColumns, derivedSelectedKeySet];
}
var CaretDownOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, "name": "caret-down", "theme": "outlined" };
var CaretDownOutlinedSvg = CaretDownOutlined$2;
function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$8(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CaretDownOutlined = function CaretDownOutlined2(props, context) {
  var p = _objectSpread$8({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$8({}, p, {
    "icon": CaretDownOutlinedSvg
  }), null);
};
CaretDownOutlined.displayName = "CaretDownOutlined";
CaretDownOutlined.inheritAttrs = false;
var CaretDownOutlined$1 = CaretDownOutlined;
var CaretUpOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" } }] }, "name": "caret-up", "theme": "outlined" };
var CaretUpOutlinedSvg = CaretUpOutlined$2;
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$7(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CaretUpOutlined = function CaretUpOutlined2(props, context) {
  var p = _objectSpread$7({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$7({}, p, {
    "icon": CaretUpOutlinedSvg
  }), null);
};
CaretUpOutlined.displayName = "CaretUpOutlined";
CaretUpOutlined.inheritAttrs = false;
var CaretUpOutlined$1 = CaretUpOutlined;
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
function getColumnKey(column, defaultKey) {
  if ("key" in column && column.key !== void 0 && column.key !== null) {
    return column.key;
  }
  if (column.dataIndex) {
    return Array.isArray(column.dataIndex) ? column.dataIndex.join(".") : column.dataIndex;
  }
  return defaultKey;
}
function getColumnPos(index, pos) {
  return pos ? "".concat(pos, "-").concat(index) : "".concat(index);
}
function renderColumnTitle(title, props) {
  if (typeof title === "function") {
    return title(props);
  }
  return title;
}
function convertChildrenToColumns() {
  var elements = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var flattenElements = flattenChildren(elements);
  var columns = [];
  flattenElements.forEach(function(element) {
    var _a, _b, _c, _d;
    if (!element) {
      return;
    }
    var key = element.key;
    var style = ((_a = element.props) === null || _a === void 0 ? void 0 : _a.style) || {};
    var cls = ((_b = element.props) === null || _b === void 0 ? void 0 : _b.class) || "";
    var props = element.props || {};
    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
      props[camelize(k)] = v;
    }
    var _e = element.children || {}, children = _e.default, restSlots = __rest$3(_e, ["default"]);
    var column = _extends(_extends(_extends({}, restSlots), props), {
      style,
      class: cls
    });
    if (key) {
      column.key = key;
    }
    if ((_c = element.type) === null || _c === void 0 ? void 0 : _c.__ANT_TABLE_COLUMN_GROUP) {
      column.children = convertChildrenToColumns(typeof children === "function" ? children() : children);
    } else {
      var customRender = (_d = element.children) === null || _d === void 0 ? void 0 : _d.default;
      column.customRender = column.customRender || customRender;
    }
    columns.push(column);
  });
  return columns;
}
var ASCEND = "ascend";
var DESCEND = "descend";
function getMultiplePriority(column) {
  if (_typeof(column.sorter) === "object" && typeof column.sorter.multiple === "number") {
    return column.sorter.multiple;
  }
  return false;
}
function getSortFunction(sorter) {
  if (typeof sorter === "function") {
    return sorter;
  }
  if (sorter && _typeof(sorter) === "object" && sorter.compare) {
    return sorter.compare;
  }
  return false;
}
function nextSortDirection(sortDirections, current) {
  if (!current) {
    return sortDirections[0];
  }
  return sortDirections[sortDirections.indexOf(current) + 1];
}
function collectSortStates(columns, init, pos) {
  var sortStates = [];
  function pushState(column, columnPos) {
    sortStates.push({
      column,
      key: getColumnKey(column, columnPos),
      multiplePriority: getMultiplePriority(column),
      sortOrder: column.sortOrder
    });
  }
  (columns || []).forEach(function(column, index) {
    var columnPos = getColumnPos(index, pos);
    if (column.children) {
      if ("sortOrder" in column) {
        pushState(column, columnPos);
      }
      sortStates = [].concat(_toConsumableArray(sortStates), _toConsumableArray(collectSortStates(column.children, init, columnPos)));
    } else if (column.sorter) {
      if ("sortOrder" in column) {
        pushState(column, columnPos);
      } else if (init && column.defaultSortOrder) {
        sortStates.push({
          column,
          key: getColumnKey(column, columnPos),
          multiplePriority: getMultiplePriority(column),
          sortOrder: column.defaultSortOrder
        });
      }
    }
  });
  return sortStates;
}
function injectSorter(prefixCls, columns, sorterSates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, pos) {
  return (columns || []).map(function(column, index) {
    var columnPos = getColumnPos(index, pos);
    var newColumn = column;
    if (newColumn.sorter) {
      var sortDirections = newColumn.sortDirections || defaultSortDirections;
      var showSorterTooltip = newColumn.showSorterTooltip === void 0 ? tableShowSorterTooltip : newColumn.showSorterTooltip;
      var columnKey = getColumnKey(newColumn, columnPos);
      var sorterState = sorterSates.find(function(_ref) {
        var key = _ref.key;
        return key === columnKey;
      });
      var sorterOrder = sorterState ? sorterState.sortOrder : null;
      var nextSortOrder = nextSortDirection(sortDirections, sorterOrder);
      var upNode = sortDirections.includes(ASCEND) && createVNode(CaretUpOutlined$1, {
        "class": classNames("".concat(prefixCls, "-column-sorter-up"), {
          active: sorterOrder === ASCEND
        })
      }, null);
      var downNode = sortDirections.includes(DESCEND) && createVNode(CaretDownOutlined$1, {
        "class": classNames("".concat(prefixCls, "-column-sorter-down"), {
          active: sorterOrder === DESCEND
        })
      }, null);
      var _ref2 = tableLocale || {}, cancelSort = _ref2.cancelSort, triggerAsc = _ref2.triggerAsc, triggerDesc = _ref2.triggerDesc;
      var sortTip = cancelSort;
      if (nextSortOrder === DESCEND) {
        sortTip = triggerDesc;
      } else if (nextSortOrder === ASCEND) {
        sortTip = triggerAsc;
      }
      var tooltipProps = _typeof(showSorterTooltip) === "object" ? showSorterTooltip : {
        title: sortTip
      };
      newColumn = _extends(_extends({}, newColumn), {
        className: classNames(newColumn.className, _defineProperty$9({}, "".concat(prefixCls, "-column-sort"), sorterOrder)),
        title: function title(renderProps) {
          var renderSortTitle = createVNode("div", {
            "class": "".concat(prefixCls, "-column-sorters")
          }, [createVNode("span", {
            "class": "".concat(prefixCls, "-column-title")
          }, [renderColumnTitle(column.title, renderProps)]), createVNode("span", {
            "class": classNames("".concat(prefixCls, "-column-sorter"), _defineProperty$9({}, "".concat(prefixCls, "-column-sorter-full"), !!(upNode && downNode)))
          }, [createVNode("span", {
            "class": "".concat(prefixCls, "-column-sorter-inner")
          }, [upNode, downNode])])]);
          return showSorterTooltip ? createVNode(__unplugin_components_1$1, tooltipProps, {
            default: function _default() {
              return [renderSortTitle];
            }
          }) : renderSortTitle;
        },
        customHeaderCell: function customHeaderCell(col) {
          var cell = column.customHeaderCell && column.customHeaderCell(col) || {};
          var originOnClick = cell.onClick;
          cell.onClick = function(event) {
            triggerSorter({
              column,
              key: columnKey,
              sortOrder: nextSortOrder,
              multiplePriority: getMultiplePriority(column)
            });
            if (originOnClick) {
              originOnClick(event);
            }
          };
          cell.class = classNames(cell.class, "".concat(prefixCls, "-column-has-sorters"));
          return cell;
        }
      });
    }
    if ("children" in newColumn) {
      newColumn = _extends(_extends({}, newColumn), {
        children: injectSorter(prefixCls, newColumn.children, sorterSates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, columnPos)
      });
    }
    return newColumn;
  });
}
function stateToInfo(sorterStates) {
  var column = sorterStates.column, sortOrder = sorterStates.sortOrder;
  return {
    column,
    order: sortOrder,
    field: column.dataIndex,
    columnKey: column.key
  };
}
function generateSorterInfo(sorterStates) {
  var list = sorterStates.filter(function(_ref3) {
    var sortOrder = _ref3.sortOrder;
    return sortOrder;
  }).map(stateToInfo);
  if (list.length === 0 && sorterStates.length) {
    return _extends(_extends({}, stateToInfo(sorterStates[sorterStates.length - 1])), {
      column: void 0
    });
  }
  if (list.length <= 1) {
    return list[0] || {};
  }
  return list;
}
function getSortData(data, sortStates, childrenColumnName) {
  var innerSorterStates = sortStates.slice().sort(function(a, b) {
    return b.multiplePriority - a.multiplePriority;
  });
  var cloneData = data.slice();
  var runningSorters = innerSorterStates.filter(function(_ref4) {
    var sorter = _ref4.column.sorter, sortOrder = _ref4.sortOrder;
    return getSortFunction(sorter) && sortOrder;
  });
  if (!runningSorters.length) {
    return cloneData;
  }
  return cloneData.sort(function(record1, record2) {
    for (var i = 0; i < runningSorters.length; i += 1) {
      var sorterState = runningSorters[i];
      var sorter = sorterState.column.sorter, sortOrder = sorterState.sortOrder;
      var compareFn = getSortFunction(sorter);
      if (compareFn && sortOrder) {
        var compareResult = compareFn(record1, record2, sortOrder);
        if (compareResult !== 0) {
          return sortOrder === ASCEND ? compareResult : -compareResult;
        }
      }
    }
    return 0;
  }).map(function(record) {
    var subRecords = record[childrenColumnName];
    if (subRecords) {
      return _extends(_extends({}, record), _defineProperty$9({}, childrenColumnName, getSortData(subRecords, sortStates, childrenColumnName)));
    }
    return record;
  });
}
function useFilterSorter(_ref5) {
  var prefixCls = _ref5.prefixCls, mergedColumns = _ref5.mergedColumns, onSorterChange = _ref5.onSorterChange, sortDirections = _ref5.sortDirections, tableLocale = _ref5.tableLocale, showSorterTooltip = _ref5.showSorterTooltip;
  var _useState = useState(collectSortStates(mergedColumns.value, true)), _useState2 = _slicedToArray(_useState, 2), sortStates = _useState2[0], setSortStates = _useState2[1];
  var mergedSorterStates = computed(function() {
    var validate = true;
    var collectedStates = collectSortStates(mergedColumns.value, false);
    if (!collectedStates.length) {
      return sortStates.value;
    }
    var validateStates = [];
    function patchStates(state) {
      if (validate) {
        validateStates.push(state);
      } else {
        validateStates.push(_extends(_extends({}, state), {
          sortOrder: null
        }));
      }
    }
    var multipleMode = null;
    collectedStates.forEach(function(state) {
      if (multipleMode === null) {
        patchStates(state);
        if (state.sortOrder) {
          if (state.multiplePriority === false) {
            validate = false;
          } else {
            multipleMode = true;
          }
        }
      } else if (multipleMode && state.multiplePriority !== false) {
        patchStates(state);
      } else {
        validate = false;
        patchStates(state);
      }
    });
    return validateStates;
  });
  var columnTitleSorterProps = computed(function() {
    var sortColumns = mergedSorterStates.value.map(function(_ref6) {
      var column = _ref6.column, sortOrder = _ref6.sortOrder;
      return {
        column,
        order: sortOrder
      };
    });
    return {
      sortColumns,
      sortColumn: sortColumns[0] && sortColumns[0].column,
      sortOrder: sortColumns[0] && sortColumns[0].order
    };
  });
  function triggerSorter(sortState) {
    var newSorterStates;
    if (sortState.multiplePriority === false || !mergedSorterStates.value.length || mergedSorterStates.value[0].multiplePriority === false) {
      newSorterStates = [sortState];
    } else {
      newSorterStates = [].concat(_toConsumableArray(mergedSorterStates.value.filter(function(_ref7) {
        var key = _ref7.key;
        return key !== sortState.key;
      })), [sortState]);
    }
    setSortStates(newSorterStates);
    onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
  }
  var transformColumns = function transformColumns2(innerColumns) {
    return injectSorter(prefixCls.value, innerColumns, mergedSorterStates.value, triggerSorter, sortDirections.value, tableLocale.value, showSorterTooltip.value);
  };
  var sorters = computed(function() {
    return generateSorterInfo(mergedSorterStates.value);
  });
  return [transformColumns, mergedSorterStates, columnTitleSorterProps, sorters];
}
var FilterFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z" } }] }, "name": "filter", "theme": "filled" };
var FilterFilledSvg = FilterFilled$2;
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$6(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var FilterFilled = function FilterFilled2(props, context) {
  var p = _objectSpread$6({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$6({}, p, {
    "icon": FilterFilledSvg
  }), null);
};
FilterFilled.displayName = "FilterFilled";
FilterFilled.inheritAttrs = false;
var FilterFilled$1 = FilterFilled;
var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper2(_props, _ref) {
  var slots = _ref.slots;
  var _a;
  return createVNode("div", {
    "onClick": function onClick(e) {
      return e.stopPropagation();
    }
  }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
var FilterDropdownMenuWrapper$1 = FilterDropdownMenuWrapper;
var FilterSearch = defineComponent({
  name: "FilterSearch",
  inheritAttrs: false,
  props: {
    value: String,
    onChange: Function,
    filterSearch: Boolean,
    tablePrefixCls: String,
    locale: {
      type: Object,
      default: void 0
    }
  },
  setup: function setup20(props) {
    return function() {
      var value = props.value, onChange = props.onChange, filterSearch = props.filterSearch, tablePrefixCls = props.tablePrefixCls, locale = props.locale;
      if (!filterSearch) {
        return null;
      }
      return createVNode("div", {
        "class": "".concat(tablePrefixCls, "-filter-dropdown-search")
      }, [createVNode(Input, {
        "placeholder": locale.filterSearchPlaceholder,
        "onChange": onChange,
        "value": value,
        "htmlSize": 1,
        "class": "".concat(tablePrefixCls, "-filter-dropdown-search-input")
      }, {
        prefix: function prefix() {
          return createVNode(SearchOutlined, null, null);
        }
      })]);
    };
  }
});
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
var MotionTreeNode = defineComponent({
  name: "MotionTreeNode",
  inheritAttrs: false,
  props: _extends(_extends({}, treeNodeProps), {
    active: Boolean,
    motion: Object,
    motionNodes: {
      type: Array
    },
    onMotionStart: Function,
    onMotionEnd: Function,
    motionType: String
  }),
  slots: ["title", "icon", "switcherIcon", "checkable"],
  setup: function setup21(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var visible = ref(true);
    var context = useInjectTreeContext();
    var motionedRef = ref(false);
    var transitionProps = computed(function() {
      if (props.motion) {
        return props.motion;
      } else {
        return collapseMotion();
      }
    });
    var onMotionEnd = function onMotionEnd2(node, type) {
      var _a, _b, _c, _d;
      if (type === "appear") {
        (_b = (_a = transitionProps.value) === null || _a === void 0 ? void 0 : _a.onAfterEnter) === null || _b === void 0 ? void 0 : _b.call(_a, node);
      } else if (type === "leave") {
        (_d = (_c = transitionProps.value) === null || _c === void 0 ? void 0 : _c.onAfterLeave) === null || _d === void 0 ? void 0 : _d.call(_c, node);
      }
      if (!motionedRef.value) {
        props.onMotionEnd();
      }
      motionedRef.value = true;
    };
    watch(function() {
      return props.motionNodes;
    }, function() {
      if (props.motionNodes && props.motionType === "hide" && visible.value) {
        nextTick(function() {
          visible.value = false;
        });
      }
    }, {
      immediate: true,
      flush: "post"
    });
    onMounted(function() {
      props.motionNodes && props.onMotionStart();
    });
    onBeforeUnmount(function() {
      props.motionNodes && onMotionEnd();
    });
    return function() {
      props.motion;
      var motionNodes = props.motionNodes, motionType = props.motionType, active = props.active, eventKey = props.eventKey, otherProps = __rest$2(props, ["motion", "motionNodes", "motionType", "active", "eventKey"]);
      if (motionNodes) {
        return createVNode(Transition, _objectSpread2(_objectSpread2({}, transitionProps.value), {}, {
          "appear": motionType === "show",
          "onAfterAppear": function onAfterAppear(node) {
            return onMotionEnd(node, "appear");
          },
          "onAfterLeave": function onAfterLeave(node) {
            return onMotionEnd(node, "leave");
          }
        }), {
          default: function _default() {
            return [withDirectives(createVNode("div", {
              "class": "".concat(context.value.prefixCls, "-treenode-motion")
            }, [motionNodes.map(function(treeNode) {
              var restProps = __rest$2(treeNode.data, []), title = treeNode.title, key = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
              delete restProps.children;
              return createVNode(VcTreeNode, _objectSpread2(_objectSpread2({}, restProps), {}, {
                "title": title,
                "active": active,
                "data": treeNode.data,
                "key": key,
                "eventKey": key,
                "isStart": isStart,
                "isEnd": isEnd
              }), slots);
            })]), [[vShow, visible.value]])];
          }
        });
      }
      return createVNode(VcTreeNode, _objectSpread2(_objectSpread2({
        "domRef": ref,
        "class": attrs.class,
        "style": attrs.style
      }, otherProps), {}, {
        "active": active,
        "eventKey": eventKey
      }), slots);
    };
  }
});
function findExpandedKeys() {
  var prev = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var next = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var prevLen = prev.length;
  var nextLen = next.length;
  if (Math.abs(prevLen - nextLen) !== 1) {
    return {
      add: false,
      key: null
    };
  }
  function find(shorter, longer) {
    var cache = /* @__PURE__ */ new Map();
    shorter.forEach(function(key) {
      cache.set(key, true);
    });
    var keys = longer.filter(function(key) {
      return !cache.has(key);
    });
    return keys.length === 1 ? keys[0] : null;
  }
  if (prevLen < nextLen) {
    return {
      add: true,
      key: find(prev, next)
    };
  }
  return {
    add: false,
    key: find(next, prev)
  };
}
function getExpandRange(shorter, longer, key) {
  var shorterStartIndex = shorter.findIndex(function(item) {
    return item.key === key;
  });
  var shorterEndNode = shorter[shorterStartIndex + 1];
  var longerStartIndex = longer.findIndex(function(item) {
    return item.key === key;
  });
  if (shorterEndNode) {
    var longerEndIndex = longer.findIndex(function(item) {
      return item.key === shorterEndNode.key;
    });
    return longer.slice(longerStartIndex + 1, longerEndIndex);
  }
  return longer.slice(longerStartIndex + 1);
}
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
var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
var noop = function noop2() {
};
var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
var MotionNode = {
  key: MOTION_KEY
};
var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: "0",
  node: MotionNode,
  nodes: [MotionNode]
};
var MotionFlattenData = {
  parent: null,
  children: [],
  pos: MotionEntity.pos,
  data: MotionNode,
  title: null,
  key: MOTION_KEY,
  isStart: [],
  isEnd: []
};
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }
  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
  var key = item.key, pos = item.pos;
  return getKey(key, pos);
}
function getAccessibilityPath(item) {
  var path = String(item.key);
  var current = item;
  while (current.parent) {
    current = current.parent;
    path = "".concat(current.key, " > ").concat(path);
  }
  return path;
}
var NodeList = defineComponent({
  name: "NodeList",
  inheritAttrs: false,
  props: nodeListProps,
  setup: function setup22(props, _ref) {
    var expose = _ref.expose, attrs = _ref.attrs;
    var listRef = ref();
    var indentMeasurerRef = ref();
    var _useInjectKeysState = useInjectKeysState(), expandedKeys = _useInjectKeysState.expandedKeys, flattenNodes = _useInjectKeysState.flattenNodes;
    expose({
      scrollTo: function scrollTo2(scroll) {
        listRef.value.scrollTo(scroll);
      },
      getIndentWidth: function getIndentWidth() {
        return indentMeasurerRef.value.offsetWidth;
      }
    });
    var transitionData = shallowRef(flattenNodes.value);
    var transitionRange = shallowRef([]);
    var motionType = ref(null);
    function onMotionEnd() {
      transitionData.value = flattenNodes.value;
      transitionRange.value = [];
      motionType.value = null;
      props.onListChangeEnd();
    }
    var context = useInjectTreeContext();
    watch([function() {
      return expandedKeys.value.slice();
    }, flattenNodes], function(_ref2, _ref3) {
      var _ref4 = _slicedToArray(_ref2, 2), expandedKeys2 = _ref4[0], data = _ref4[1];
      var _ref5 = _slicedToArray(_ref3, 2), prevExpandedKeys = _ref5[0], prevData = _ref5[1];
      var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys2);
      if (diffExpanded.key !== null) {
        var virtual = props.virtual, height = props.height, itemHeight = props.itemHeight;
        if (diffExpanded.add) {
          var keyIndex = prevData.findIndex(function(_ref6) {
            var key = _ref6.key;
            return key === diffExpanded.key;
          });
          var rangeNodes = getMinimumRangeTransitionRange(getExpandRange(prevData, data, diffExpanded.key), virtual, height, itemHeight);
          var newTransitionData = prevData.slice();
          newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
          transitionData.value = newTransitionData;
          transitionRange.value = rangeNodes;
          motionType.value = "show";
        } else {
          var _keyIndex = data.findIndex(function(_ref7) {
            var key = _ref7.key;
            return key === diffExpanded.key;
          });
          var _rangeNodes = getMinimumRangeTransitionRange(getExpandRange(data, prevData, diffExpanded.key), virtual, height, itemHeight);
          var _newTransitionData = data.slice();
          _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
          transitionData.value = _newTransitionData;
          transitionRange.value = _rangeNodes;
          motionType.value = "hide";
        }
      } else if (prevData !== data) {
        transitionData.value = data;
      }
    });
    watch(function() {
      return context.value.dragging;
    }, function(dragging) {
      if (!dragging) {
        onMotionEnd();
      }
    });
    var mergedData = computed(function() {
      return props.motion === void 0 ? transitionData.value : flattenNodes.value;
    });
    var onActiveChange = function onActiveChange2() {
      props.onActiveChange(null);
    };
    return function() {
      var _a = _extends(_extends({}, props), attrs), prefixCls = _a.prefixCls;
      _a.selectable;
      _a.checkable;
      var disabled = _a.disabled, motion = _a.motion, height = _a.height, itemHeight = _a.itemHeight, virtual = _a.virtual, focusable = _a.focusable, activeItem = _a.activeItem, focused = _a.focused, tabindex = _a.tabindex, onKeydown = _a.onKeydown, onFocus = _a.onFocus, onBlur = _a.onBlur, onListChangeStart = _a.onListChangeStart;
      _a.onListChangeEnd;
      var domProps = __rest$1(_a, ["prefixCls", "selectable", "checkable", "disabled", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabindex", "onKeydown", "onFocus", "onBlur", "onListChangeStart", "onListChangeEnd"]);
      return createVNode(Fragment, null, [focused && activeItem && createVNode("span", {
        "style": HIDDEN_STYLE,
        "aria-live": "assertive"
      }, [getAccessibilityPath(activeItem)]), createVNode("div", null, [createVNode("input", {
        "style": HIDDEN_STYLE,
        "disabled": focusable === false || disabled,
        "tabindex": focusable !== false ? tabindex : null,
        "onKeydown": onKeydown,
        "onFocus": onFocus,
        "onBlur": onBlur,
        "value": "",
        "onChange": noop,
        "aria-label": "for screen reader"
      }, null)]), createVNode("div", {
        "class": "".concat(prefixCls, "-treenode"),
        "aria-hidden": true,
        "style": {
          position: "absolute",
          pointerEvents: "none",
          visibility: "hidden",
          height: 0,
          overflow: "hidden"
        }
      }, [createVNode("div", {
        "class": "".concat(prefixCls, "-indent")
      }, [createVNode("div", {
        "ref": indentMeasurerRef,
        "class": "".concat(prefixCls, "-indent-unit")
      }, null)])]), createVNode(List, _objectSpread2(_objectSpread2({}, omit(domProps, ["onActiveChange"])), {}, {
        "data": mergedData.value,
        "itemKey": itemKey,
        "height": height,
        "fullHeight": false,
        "virtual": virtual,
        "itemHeight": itemHeight,
        "prefixCls": "".concat(prefixCls, "-list"),
        "ref": listRef,
        "onVisibleChange": function onVisibleChange(originList, fullList) {
          var originSet = new Set(originList);
          var restList = fullList.filter(function(item) {
            return !originSet.has(item);
          });
          if (restList.some(function(item) {
            return itemKey(item) === MOTION_KEY;
          })) {
            onMotionEnd();
          }
        }
      }), {
        default: function _default(treeNode) {
          var pos = treeNode.pos, restProps = __rest$1(treeNode.data, []), title = treeNode.title, key = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
          var mergedKey = getKey(key, pos);
          delete restProps.key;
          delete restProps.children;
          return createVNode(MotionTreeNode, _objectSpread2(_objectSpread2({}, restProps), {}, {
            "eventKey": mergedKey,
            "title": title,
            "active": !!activeItem && key === activeItem.key,
            "data": treeNode.data,
            "isStart": isStart,
            "isEnd": isEnd,
            "motion": motion,
            "motionNodes": key === MOTION_KEY ? transitionRange.value : null,
            "motionType": motionType.value,
            "onMotionStart": onListChangeStart,
            "onMotionEnd": onMotionEnd,
            "onMousemove": onActiveChange
          }), null);
        }
      })]);
    };
  }
});
function DropIndicator(_ref) {
  var dropPosition = _ref.dropPosition, dropLevelOffset = _ref.dropLevelOffset, indent = _ref.indent;
  var style = {
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: "".concat(2, "px")
  };
  switch (dropPosition) {
    case -1:
      style.top = 0;
      style.left = "".concat(-dropLevelOffset * indent, "px");
      break;
    case 1:
      style.bottom = 0;
      style.left = "".concat(-dropLevelOffset * indent, "px");
      break;
    case 0:
      style.bottom = 0;
      style.left = "".concat(indent);
      break;
  }
  return createVNode("div", {
    "style": style
  }, null);
}
var MAX_RETRY_TIMES = 10;
var Tree$2 = defineComponent({
  name: "Tree",
  inheritAttrs: false,
  slots: ["checkable", "title", "icon", "titleRender"],
  props: initDefaultProps(treeProps$1(), {
    prefixCls: "vc-tree",
    showLine: false,
    showIcon: true,
    selectable: true,
    multiple: false,
    checkable: false,
    disabled: false,
    checkStrictly: false,
    draggable: false,
    defaultExpandParent: true,
    autoExpandParent: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: DropIndicator,
    allowDrop: function allowDrop() {
      return true;
    }
  }),
  setup: function setup23(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, expose = _ref.expose;
    var destroyed = ref(false);
    var delayedDragEnterLogic = {};
    var indent = ref();
    var selectedKeys = shallowRef([]);
    var checkedKeys = shallowRef([]);
    var halfCheckedKeys = shallowRef([]);
    var loadedKeys = shallowRef([]);
    var loadingKeys = shallowRef([]);
    var expandedKeys = shallowRef([]);
    var loadingRetryTimes = {};
    var dragState = reactive({
      draggingNodeKey: null,
      dragChildrenKeys: [],
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: true,
      dragOverNodeKey: null
    });
    var treeData = shallowRef([]);
    watch([function() {
      return props.treeData;
    }, function() {
      return props.children;
    }], function() {
      treeData.value = props.treeData !== void 0 ? toRaw(props.treeData).slice() : convertTreeToData(toRaw(props.children));
    }, {
      immediate: true,
      deep: true
    });
    var keyEntities = shallowRef({});
    var focused = ref(false);
    var activeKey = ref(null);
    var listChanging = ref(false);
    var fieldNames = computed(function() {
      return fillFieldNames(props.fieldNames);
    });
    var listRef = ref();
    var dragStartMousePosition = null;
    var dragNode = null;
    var currentMouseOverDroppableNodeKey = null;
    var treeNodeRequiredProps = computed(function() {
      return {
        expandedKeysSet: expandedKeysSet.value,
        selectedKeysSet: selectedKeysSet.value,
        loadedKeysSet: loadedKeysSet.value,
        loadingKeysSet: loadingKeysSet.value,
        checkedKeysSet: checkedKeysSet.value,
        halfCheckedKeysSet: halfCheckedKeysSet.value,
        dragOverNodeKey: dragState.dragOverNodeKey,
        dropPosition: dragState.dropPosition,
        keyEntities: keyEntities.value
      };
    });
    var expandedKeysSet = computed(function() {
      return new Set(expandedKeys.value);
    });
    var selectedKeysSet = computed(function() {
      return new Set(selectedKeys.value);
    });
    var loadedKeysSet = computed(function() {
      return new Set(loadedKeys.value);
    });
    var loadingKeysSet = computed(function() {
      return new Set(loadingKeys.value);
    });
    var checkedKeysSet = computed(function() {
      return new Set(checkedKeys.value);
    });
    var halfCheckedKeysSet = computed(function() {
      return new Set(halfCheckedKeys.value);
    });
    watchEffect(function() {
      if (treeData.value) {
        var entitiesMap = convertDataToEntities(treeData.value, {
          fieldNames: fieldNames.value
        });
        keyEntities.value = _extends(_defineProperty$9({}, MOTION_KEY, MotionEntity), entitiesMap.keyEntities);
      }
    });
    var init = false;
    watch([function() {
      return props.expandedKeys;
    }, function() {
      return props.autoExpandParent;
    }, keyEntities], function(_ref2, _ref3) {
      var _ref4 = _slicedToArray(_ref2, 2);
      _ref4[0];
      var newAutoExpandParent = _ref4[1];
      var _ref5 = _slicedToArray(_ref3, 2);
      _ref5[0];
      var oldAutoExpandParent = _ref5[1];
      var keys = expandedKeys.value;
      if (props.expandedKeys !== void 0 || init && newAutoExpandParent !== oldAutoExpandParent) {
        keys = props.autoExpandParent || !init && props.defaultExpandParent ? conductExpandParent(props.expandedKeys, keyEntities.value) : props.expandedKeys;
      } else if (!init && props.defaultExpandAll) {
        var cloneKeyEntities = _extends({}, keyEntities.value);
        delete cloneKeyEntities[MOTION_KEY];
        keys = Object.keys(cloneKeyEntities).map(function(key) {
          return cloneKeyEntities[key].key;
        });
      } else if (!init && props.defaultExpandedKeys) {
        keys = props.autoExpandParent || props.defaultExpandParent ? conductExpandParent(props.defaultExpandedKeys, keyEntities.value) : props.defaultExpandedKeys;
      }
      if (keys) {
        expandedKeys.value = keys;
      }
      init = true;
    }, {
      immediate: true
    });
    var flattenNodes = shallowRef([]);
    watchEffect(function() {
      flattenNodes.value = flattenTreeData(treeData.value, expandedKeys.value, fieldNames.value);
    });
    watchEffect(function() {
      if (props.selectable) {
        if (props.selectedKeys !== void 0) {
          selectedKeys.value = calcSelectedKeys(props.selectedKeys, props);
        } else if (!init && props.defaultSelectedKeys) {
          selectedKeys.value = calcSelectedKeys(props.defaultSelectedKeys, props);
        }
      }
    });
    var _useMaxLevel = useMaxLevel(keyEntities), maxLevel = _useMaxLevel.maxLevel, levelEntities = _useMaxLevel.levelEntities;
    watchEffect(function() {
      if (props.checkable) {
        var checkedKeyEntity;
        if (props.checkedKeys !== void 0) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
        } else if (!init && props.defaultCheckedKeys) {
          checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
        } else if (treeData.value) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {
            checkedKeys: checkedKeys.value,
            halfCheckedKeys: halfCheckedKeys.value
          };
        }
        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity, _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys, newCheckedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che, _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys, newHalfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
          if (!props.checkStrictly) {
            var conductKeys = conductCheck(newCheckedKeys, true, keyEntities.value, maxLevel.value, levelEntities.value);
            newCheckedKeys = conductKeys.checkedKeys;
            newHalfCheckedKeys = conductKeys.halfCheckedKeys;
          }
          checkedKeys.value = newCheckedKeys;
          halfCheckedKeys.value = newHalfCheckedKeys;
        }
      }
    });
    watchEffect(function() {
      if (props.loadedKeys) {
        loadedKeys.value = props.loadedKeys;
      }
    });
    var resetDragState = function resetDragState2() {
      _extends(dragState, {
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: false
      });
    };
    var scrollTo2 = function scrollTo3(scroll) {
      listRef.value.scrollTo(scroll);
    };
    watch(function() {
      return props.activeKey;
    }, function() {
      if (props.activeKey !== void 0) {
        activeKey.value = props.activeKey;
      }
    }, {
      immediate: true
    });
    watch(activeKey, function(val) {
      nextTick(function() {
        if (val !== null) {
          scrollTo2({
            key: val
          });
        }
      });
    }, {
      immediate: true,
      flush: "post"
    });
    var setExpandedKeys = function setExpandedKeys2(keys) {
      if (props.expandedKeys === void 0) {
        expandedKeys.value = keys;
      }
    };
    var cleanDragState = function cleanDragState2() {
      if (dragState.draggingNodeKey !== null) {
        _extends(dragState, {
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        });
      }
      dragStartMousePosition = null;
      currentMouseOverDroppableNodeKey = null;
    };
    var onNodeDragEnd = function onNodeDragEnd2(event, node) {
      var onDragend = props.onDragend;
      dragState.dragOverNodeKey = null;
      cleanDragState();
      onDragend === null || onDragend === void 0 ? void 0 : onDragend({
        event,
        node: node.eventData
      });
      dragNode = null;
    };
    var onWindowDragEnd = function onWindowDragEnd2(event) {
      onNodeDragEnd(event, null);
      window.removeEventListener("dragend", onWindowDragEnd2);
    };
    var onNodeDragStart = function onNodeDragStart2(event, node) {
      var onDragstart = props.onDragstart;
      var eventKey = node.eventKey, eventData = node.eventData;
      dragNode = node;
      dragStartMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var newExpandedKeys = arrDel(expandedKeys.value, eventKey);
      dragState.draggingNodeKey = eventKey;
      dragState.dragChildrenKeys = getDragChildrenKeys(eventKey, keyEntities.value);
      indent.value = listRef.value.getIndentWidth();
      setExpandedKeys(newExpandedKeys);
      window.addEventListener("dragend", onWindowDragEnd);
      if (onDragstart) {
        onDragstart({
          event,
          node: eventData
        });
      }
    };
    var onNodeDragEnter = function onNodeDragEnter2(event, node) {
      var onDragenter = props.onDragenter, onExpand = props.onExpand, allowDrop2 = props.allowDrop, direction = props.direction;
      var pos = node.pos, eventKey = node.eventKey;
      if (currentMouseOverDroppableNodeKey !== eventKey) {
        currentMouseOverDroppableNodeKey = eventKey;
      }
      if (!dragNode) {
        resetDragState();
        return;
      }
      var _calcDropPosition = calcDropPosition(event, dragNode, node, indent.value, dragStartMousePosition, allowDrop2, flattenNodes.value, keyEntities.value, expandedKeysSet.value, direction), dropPosition = _calcDropPosition.dropPosition, dropLevelOffset = _calcDropPosition.dropLevelOffset, dropTargetKey = _calcDropPosition.dropTargetKey, dropContainerKey = _calcDropPosition.dropContainerKey, dropTargetPos = _calcDropPosition.dropTargetPos, dropAllowed = _calcDropPosition.dropAllowed, dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
      if (dragState.dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        resetDragState();
        return;
      }
      if (!delayedDragEnterLogic) {
        delayedDragEnterLogic = {};
      }
      Object.keys(delayedDragEnterLogic).forEach(function(key) {
        clearTimeout(delayedDragEnterLogic[key]);
      });
      if (dragNode.eventKey !== node.eventKey) {
        delayedDragEnterLogic[pos] = window.setTimeout(function() {
          if (dragState.draggingNodeKey === null)
            return;
          var newExpandedKeys = expandedKeys.value.slice();
          var entity = keyEntities.value[node.eventKey];
          if (entity && (entity.children || []).length) {
            newExpandedKeys = arrAdd(expandedKeys.value, node.eventKey);
          }
          setExpandedKeys(newExpandedKeys);
          if (onExpand) {
            onExpand(newExpandedKeys, {
              node: node.eventData,
              expanded: true,
              nativeEvent: event
            });
          }
        }, 800);
      }
      if (dragNode.eventKey === dropTargetKey && dropLevelOffset === 0) {
        resetDragState();
        return;
      }
      _extends(dragState, {
        dragOverNodeKey,
        dropPosition,
        dropLevelOffset,
        dropTargetKey,
        dropContainerKey,
        dropTargetPos,
        dropAllowed
      });
      if (onDragenter) {
        onDragenter({
          event,
          node: node.eventData,
          expandedKeys: expandedKeys.value
        });
      }
    };
    var onNodeDragOver = function onNodeDragOver2(event, node) {
      var onDragover = props.onDragover, allowDrop2 = props.allowDrop, direction = props.direction;
      if (!dragNode) {
        return;
      }
      var _calcDropPosition2 = calcDropPosition(event, dragNode, node, indent.value, dragStartMousePosition, allowDrop2, flattenNodes.value, keyEntities.value, expandedKeysSet.value, direction), dropPosition = _calcDropPosition2.dropPosition, dropLevelOffset = _calcDropPosition2.dropLevelOffset, dropTargetKey = _calcDropPosition2.dropTargetKey, dropContainerKey = _calcDropPosition2.dropContainerKey, dropAllowed = _calcDropPosition2.dropAllowed, dropTargetPos = _calcDropPosition2.dropTargetPos, dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
      if (dragState.dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        return;
      }
      if (dragNode.eventKey === dropTargetKey && dropLevelOffset === 0) {
        if (!(dragState.dropPosition === null && dragState.dropLevelOffset === null && dragState.dropTargetKey === null && dragState.dropContainerKey === null && dragState.dropTargetPos === null && dragState.dropAllowed === false && dragState.dragOverNodeKey === null)) {
          resetDragState();
        }
      } else if (!(dropPosition === dragState.dropPosition && dropLevelOffset === dragState.dropLevelOffset && dropTargetKey === dragState.dropTargetKey && dropContainerKey === dragState.dropContainerKey && dropTargetPos === dragState.dropTargetPos && dropAllowed === dragState.dropAllowed && dragOverNodeKey === dragState.dragOverNodeKey)) {
        _extends(dragState, {
          dropPosition,
          dropLevelOffset,
          dropTargetKey,
          dropContainerKey,
          dropTargetPos,
          dropAllowed,
          dragOverNodeKey
        });
      }
      if (onDragover) {
        onDragover({
          event,
          node: node.eventData
        });
      }
    };
    var onNodeDragLeave = function onNodeDragLeave2(event, node) {
      if (currentMouseOverDroppableNodeKey === node.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
        resetDragState();
        currentMouseOverDroppableNodeKey = null;
      }
      var onDragleave = props.onDragleave;
      if (onDragleave) {
        onDragleave({
          event,
          node: node.eventData
        });
      }
    };
    var onNodeDrop = function onNodeDrop2(event, _node) {
      var outsideTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var _a;
      var dragChildrenKeys = dragState.dragChildrenKeys, dropPosition = dragState.dropPosition, dropTargetKey = dragState.dropTargetKey, dropTargetPos = dragState.dropTargetPos, dropAllowed = dragState.dropAllowed;
      if (!dropAllowed)
        return;
      var onDrop = props.onDrop;
      dragState.dragOverNodeKey = null;
      cleanDragState();
      if (dropTargetKey === null)
        return;
      var abstractDropNodeProps = _extends(_extends({}, getTreeNodeProps(dropTargetKey, toRaw(treeNodeRequiredProps.value))), {
        active: ((_a = activeItem.value) === null || _a === void 0 ? void 0 : _a.key) === dropTargetKey,
        data: keyEntities.value[dropTargetKey].node
      });
      dragChildrenKeys.indexOf(dropTargetKey) !== -1;
      var posArr = posToArr(dropTargetPos);
      var dropResult = {
        event,
        node: convertNodePropsToEventData(abstractDropNodeProps),
        dragNode: dragNode ? dragNode.eventData : null,
        dragNodesKeys: [dragNode.eventKey].concat(dragChildrenKeys),
        dropToGap: dropPosition !== 0,
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };
      if (!outsideTree) {
        onDrop === null || onDrop === void 0 ? void 0 : onDrop(dropResult);
      }
      dragNode = null;
    };
    var onNodeClick = function onNodeClick2(e, treeNode) {
      var onClick = props.onClick;
      if (onClick) {
        onClick(e, treeNode);
      }
    };
    var onNodeDoubleClick = function onNodeDoubleClick2(e, treeNode) {
      var onDblclick = props.onDblclick;
      if (onDblclick) {
        onDblclick(e, treeNode);
      }
    };
    var onNodeSelect = function onNodeSelect2(e, treeNode) {
      var newSelectedKeys = selectedKeys.value;
      var onSelect = props.onSelect, multiple = props.multiple;
      var selected = treeNode.selected;
      var key = treeNode[fieldNames.value.key];
      var targetSelected = !selected;
      if (!targetSelected) {
        newSelectedKeys = arrDel(newSelectedKeys, key);
      } else if (!multiple) {
        newSelectedKeys = [key];
      } else {
        newSelectedKeys = arrAdd(newSelectedKeys, key);
      }
      var keyEntitiesValue = keyEntities.value;
      var selectedNodes = newSelectedKeys.map(function(selectedKey) {
        var entity = keyEntitiesValue[selectedKey];
        if (!entity)
          return null;
        return entity.node;
      }).filter(function(node) {
        return node;
      });
      if (props.selectedKeys === void 0) {
        selectedKeys.value = newSelectedKeys;
      }
      if (onSelect) {
        onSelect(newSelectedKeys, {
          event: "select",
          selected: targetSelected,
          node: treeNode,
          selectedNodes,
          nativeEvent: e
        });
      }
    };
    var onNodeCheck = function onNodeCheck2(e, treeNode, checked) {
      var checkStrictly = props.checkStrictly, onCheck = props.onCheck;
      var key = treeNode[fieldNames.value.key];
      var checkedObj;
      var eventObj = {
        event: "check",
        node: treeNode,
        checked,
        nativeEvent: e
      };
      var keyEntitiesValue = keyEntities.value;
      if (checkStrictly) {
        var newCheckedKeys = checked ? arrAdd(checkedKeys.value, key) : arrDel(checkedKeys.value, key);
        var newHalfCheckedKeys = arrDel(halfCheckedKeys.value, key);
        checkedObj = {
          checked: newCheckedKeys,
          halfChecked: newHalfCheckedKeys
        };
        eventObj.checkedNodes = newCheckedKeys.map(function(checkedKey) {
          return keyEntitiesValue[checkedKey];
        }).filter(function(entity) {
          return entity;
        }).map(function(entity) {
          return entity.node;
        });
        if (props.checkedKeys === void 0) {
          checkedKeys.value = newCheckedKeys;
        }
      } else {
        var _conductCheck = conductCheck([].concat(_toConsumableArray(checkedKeys.value), [key]), true, keyEntitiesValue, maxLevel.value, levelEntities.value), _newCheckedKeys = _conductCheck.checkedKeys, _newHalfCheckedKeys = _conductCheck.halfCheckedKeys;
        if (!checked) {
          var keySet = new Set(_newCheckedKeys);
          keySet.delete(key);
          var _conductCheck2 = conductCheck(Array.from(keySet), {
            checked: false,
            halfCheckedKeys: _newHalfCheckedKeys
          }, keyEntitiesValue, maxLevel.value, levelEntities.value);
          _newCheckedKeys = _conductCheck2.checkedKeys;
          _newHalfCheckedKeys = _conductCheck2.halfCheckedKeys;
        }
        checkedObj = _newCheckedKeys;
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _newHalfCheckedKeys;
        _newCheckedKeys.forEach(function(checkedKey) {
          var entity = keyEntitiesValue[checkedKey];
          if (!entity)
            return;
          var node = entity.node, pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node,
            pos
          });
        });
        if (props.checkedKeys === void 0) {
          checkedKeys.value = _newCheckedKeys;
          halfCheckedKeys.value = _newHalfCheckedKeys;
        }
      }
      if (onCheck) {
        onCheck(checkedObj, eventObj);
      }
    };
    var onNodeLoad = function onNodeLoad2(treeNode) {
      var key = treeNode[fieldNames.value.key];
      var loadPromise = new Promise(function(resolve, reject) {
        var loadData = props.loadData, onLoad = props.onLoad;
        if (!loadData || loadedKeysSet.value.has(key) || loadingKeysSet.value.has(key)) {
          return null;
        }
        var promise = loadData(treeNode);
        promise.then(function() {
          var newLoadedKeys = arrAdd(loadedKeys.value, key);
          var newLoadingKeys = arrDel(loadingKeys.value, key);
          if (onLoad) {
            onLoad(newLoadedKeys, {
              event: "load",
              node: treeNode
            });
          }
          if (props.loadedKeys === void 0) {
            loadedKeys.value = newLoadedKeys;
          }
          loadingKeys.value = newLoadingKeys;
          resolve();
        }).catch(function(e) {
          var newLoadingKeys = arrDel(loadingKeys.value, key);
          loadingKeys.value = newLoadingKeys;
          loadingRetryTimes[key] = (loadingRetryTimes[key] || 0) + 1;
          if (loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
            var newLoadedKeys = arrAdd(loadedKeys.value, key);
            if (props.loadedKeys === void 0) {
              loadedKeys.value = newLoadedKeys;
            }
            resolve();
          }
          reject(e);
        });
        loadingKeys.value = arrAdd(loadingKeys.value, key);
      });
      loadPromise.catch(function() {
      });
      return loadPromise;
    };
    var onNodeMouseEnter = function onNodeMouseEnter2(event, node) {
      var onMouseenter = props.onMouseenter;
      if (onMouseenter) {
        onMouseenter({
          event,
          node
        });
      }
    };
    var onNodeMouseLeave = function onNodeMouseLeave2(event, node) {
      var onMouseleave = props.onMouseleave;
      if (onMouseleave) {
        onMouseleave({
          event,
          node
        });
      }
    };
    var onNodeContextMenu = function onNodeContextMenu2(event, node) {
      var onRightClick = props.onRightClick;
      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event,
          node
        });
      }
    };
    var onFocus = function onFocus2(e) {
      var onFocus3 = props.onFocus;
      focused.value = true;
      if (onFocus3) {
        onFocus3(e);
      }
    };
    var onBlur = function onBlur2(e) {
      var onBlur3 = props.onBlur;
      focused.value = false;
      onActiveChange(null);
      if (onBlur3) {
        onBlur3(e);
      }
    };
    var onNodeExpand = function onNodeExpand2(e, treeNode) {
      var newExpandedKeys = expandedKeys.value;
      var onExpand = props.onExpand, loadData = props.loadData;
      var expanded = treeNode.expanded;
      var key = treeNode[fieldNames.value.key];
      if (listChanging.value) {
        return;
      }
      newExpandedKeys.indexOf(key);
      var targetExpanded = !expanded;
      if (targetExpanded) {
        newExpandedKeys = arrAdd(newExpandedKeys, key);
      } else {
        newExpandedKeys = arrDel(newExpandedKeys, key);
      }
      setExpandedKeys(newExpandedKeys);
      if (onExpand) {
        onExpand(newExpandedKeys, {
          node: treeNode,
          expanded: targetExpanded,
          nativeEvent: e
        });
      }
      if (targetExpanded && loadData) {
        var loadPromise = onNodeLoad(treeNode);
        if (loadPromise) {
          loadPromise.then(function() {
          }).catch(function(e2) {
            var expandedKeysToRestore = arrDel(expandedKeys.value, key);
            setExpandedKeys(expandedKeysToRestore);
            Promise.reject(e2);
          });
        }
      }
    };
    var onListChangeStart = function onListChangeStart2() {
      listChanging.value = true;
    };
    var onListChangeEnd = function onListChangeEnd2() {
      setTimeout(function() {
        listChanging.value = false;
      });
    };
    var onActiveChange = function onActiveChange2(newActiveKey) {
      var onActiveChange3 = props.onActiveChange;
      if (activeKey.value === newActiveKey) {
        return;
      }
      if (props.activeKey !== void 0) {
        activeKey.value = newActiveKey;
      }
      if (newActiveKey !== null) {
        scrollTo2({
          key: newActiveKey
        });
      }
      if (onActiveChange3) {
        onActiveChange3(newActiveKey);
      }
    };
    var activeItem = computed(function() {
      if (activeKey.value === null) {
        return null;
      }
      return flattenNodes.value.find(function(_ref6) {
        var key = _ref6.key;
        return key === activeKey.value;
      }) || null;
    });
    var offsetActiveKey = function offsetActiveKey2(offset2) {
      var index = flattenNodes.value.findIndex(function(_ref7) {
        var key2 = _ref7.key;
        return key2 === activeKey.value;
      });
      if (index === -1 && offset2 < 0) {
        index = flattenNodes.value.length;
      }
      index = (index + offset2 + flattenNodes.value.length) % flattenNodes.value.length;
      var item = flattenNodes.value[index];
      if (item) {
        var key = item.key;
        onActiveChange(key);
      } else {
        onActiveChange(null);
      }
    };
    var activeItemEventNode = computed(function() {
      return convertNodePropsToEventData(_extends(_extends({}, getTreeNodeProps(activeKey.value, treeNodeRequiredProps.value)), {
        data: activeItem.value.data,
        active: true
      }));
    });
    var onKeydown = function onKeydown2(event) {
      var onKeydown3 = props.onKeydown, checkable = props.checkable, selectable = props.selectable;
      switch (event.which) {
        case KeyCode.UP: {
          offsetActiveKey(-1);
          event.preventDefault();
          break;
        }
        case KeyCode.DOWN: {
          offsetActiveKey(1);
          event.preventDefault();
          break;
        }
      }
      var item = activeItem.value;
      if (item && item.data) {
        var expandable = item.data.isLeaf === false || !!(item.data.children || []).length;
        var eventNode = activeItemEventNode.value;
        switch (event.which) {
          case KeyCode.LEFT: {
            if (expandable && expandedKeysSet.value.has(activeKey.value)) {
              onNodeExpand({}, eventNode);
            } else if (item.parent) {
              onActiveChange(item.parent.key);
            }
            event.preventDefault();
            break;
          }
          case KeyCode.RIGHT: {
            if (expandable && !expandedKeysSet.value.has(activeKey.value)) {
              onNodeExpand({}, eventNode);
            } else if (item.children && item.children.length) {
              onActiveChange(item.children[0].key);
            }
            event.preventDefault();
            break;
          }
          case KeyCode.ENTER:
          case KeyCode.SPACE: {
            if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
              onNodeCheck({}, eventNode, !checkedKeysSet.value.has(activeKey.value));
            } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
              onNodeSelect({}, eventNode);
            }
            break;
          }
        }
      }
      if (onKeydown3) {
        onKeydown3(event);
      }
    };
    expose({
      onNodeExpand,
      scrollTo: scrollTo2,
      onKeydown,
      selectedKeys: computed(function() {
        return selectedKeys.value;
      }),
      checkedKeys: computed(function() {
        return checkedKeys.value;
      }),
      halfCheckedKeys: computed(function() {
        return halfCheckedKeys.value;
      }),
      loadedKeys: computed(function() {
        return loadedKeys.value;
      }),
      loadingKeys: computed(function() {
        return loadingKeys.value;
      }),
      expandedKeys: computed(function() {
        return expandedKeys.value;
      })
    });
    onUnmounted(function() {
      window.removeEventListener("dragend", onWindowDragEnd);
      destroyed.value = true;
    });
    useProvideKeysState({
      expandedKeys,
      selectedKeys,
      loadedKeys,
      loadingKeys,
      checkedKeys,
      halfCheckedKeys,
      expandedKeysSet,
      selectedKeysSet,
      loadedKeysSet,
      loadingKeysSet,
      checkedKeysSet,
      halfCheckedKeysSet,
      flattenNodes
    });
    return function() {
      var _classNames;
      var draggingNodeKey = dragState.draggingNodeKey, dropLevelOffset = dragState.dropLevelOffset, dropContainerKey = dragState.dropContainerKey, dropTargetKey = dragState.dropTargetKey, dropPosition = dragState.dropPosition, dragOverNodeKey = dragState.dragOverNodeKey;
      var prefixCls = props.prefixCls, showLine = props.showLine, focusable = props.focusable, _props$tabindex = props.tabindex, tabindex = _props$tabindex === void 0 ? 0 : _props$tabindex, selectable = props.selectable, showIcon = props.showIcon, _props$icon = props.icon, icon = _props$icon === void 0 ? slots.icon : _props$icon, switcherIcon = props.switcherIcon, draggable = props.draggable, checkable = props.checkable, checkStrictly = props.checkStrictly, disabled = props.disabled, motion = props.motion, loadData = props.loadData, filterTreeNode = props.filterTreeNode, height = props.height, itemHeight = props.itemHeight, virtual = props.virtual, dropIndicatorRender2 = props.dropIndicatorRender, onContextmenu = props.onContextmenu, onScroll = props.onScroll, direction = props.direction;
      var className = attrs.class, style = attrs.style;
      var domProps = pickAttrs(_extends(_extends({}, props), attrs), {
        aria: true,
        data: true
      });
      var draggableConfig;
      if (draggable) {
        if (_typeof(draggable) === "object") {
          draggableConfig = draggable;
        } else if (typeof draggable === "function") {
          draggableConfig = {
            nodeDraggable: draggable
          };
        } else {
          draggableConfig = {};
        }
      }
      return createVNode(TreeContext, {
        "value": {
          prefixCls,
          selectable,
          showIcon,
          icon,
          switcherIcon,
          draggable: draggableConfig,
          draggingNodeKey,
          checkable,
          customCheckable: slots.checkable,
          checkStrictly,
          disabled,
          keyEntities: keyEntities.value,
          dropLevelOffset,
          dropContainerKey,
          dropTargetKey,
          dropPosition,
          dragOverNodeKey,
          dragging: draggingNodeKey !== null,
          indent: indent.value,
          direction,
          dropIndicatorRender: dropIndicatorRender2,
          loadData,
          filterTreeNode,
          onNodeClick,
          onNodeDoubleClick,
          onNodeExpand,
          onNodeSelect,
          onNodeCheck,
          onNodeLoad,
          onNodeMouseEnter,
          onNodeMouseLeave,
          onNodeContextMenu,
          onNodeDragStart,
          onNodeDragEnter,
          onNodeDragOver,
          onNodeDragLeave,
          onNodeDragEnd,
          onNodeDrop,
          slots
        }
      }, {
        default: function _default() {
          return [createVNode("div", {
            "role": "tree",
            "class": classNames(prefixCls, className, (_classNames = {}, _defineProperty$9(_classNames, "".concat(prefixCls, "-show-line"), showLine), _defineProperty$9(_classNames, "".concat(prefixCls, "-focused"), focused.value), _defineProperty$9(_classNames, "".concat(prefixCls, "-active-focused"), activeKey.value !== null), _classNames))
          }, [createVNode(NodeList, _objectSpread2({
            "ref": listRef,
            "prefixCls": prefixCls,
            "style": style,
            "disabled": disabled,
            "selectable": selectable,
            "checkable": !!checkable,
            "motion": motion,
            "height": height,
            "itemHeight": itemHeight,
            "virtual": virtual,
            "focusable": focusable,
            "focused": focused.value,
            "tabindex": tabindex,
            "activeItem": activeItem.value,
            "onFocus": onFocus,
            "onBlur": onBlur,
            "onKeydown": onKeydown,
            "onActiveChange": onActiveChange,
            "onListChangeStart": onListChangeStart,
            "onListChangeEnd": onListChangeEnd,
            "onContextmenu": onContextmenu,
            "onScroll": onScroll
          }, domProps), null)])];
        }
      });
    };
  }
});
var FileOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, "name": "file", "theme": "outlined" };
var FileOutlinedSvg = FileOutlined$2;
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$5(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var FileOutlined = function FileOutlined2(props, context) {
  var p = _objectSpread$5({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$5({}, p, {
    "icon": FileOutlinedSvg
  }), null);
};
FileOutlined.displayName = "FileOutlined";
FileOutlined.inheritAttrs = false;
var FileOutlined$1 = FileOutlined;
var MinusSquareOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "minus-square", "theme": "outlined" };
var MinusSquareOutlinedSvg = MinusSquareOutlined$2;
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var MinusSquareOutlined = function MinusSquareOutlined2(props, context) {
  var p = _objectSpread$4({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$4({}, p, {
    "icon": MinusSquareOutlinedSvg
  }), null);
};
MinusSquareOutlined.displayName = "MinusSquareOutlined";
MinusSquareOutlined.inheritAttrs = false;
var MinusSquareOutlined$1 = MinusSquareOutlined;
var PlusSquareOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "plus-square", "theme": "outlined" };
var PlusSquareOutlinedSvg = PlusSquareOutlined$2;
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
var PlusSquareOutlined = function PlusSquareOutlined2(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$3({}, p, {
    "icon": PlusSquareOutlinedSvg
  }), null);
};
PlusSquareOutlined.displayName = "PlusSquareOutlined";
PlusSquareOutlined.inheritAttrs = false;
var PlusSquareOutlined$1 = PlusSquareOutlined;
var CaretDownFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, "name": "caret-down", "theme": "filled" };
var CaretDownFilledSvg = CaretDownFilled$2;
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
var CaretDownFilled = function CaretDownFilled2(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": CaretDownFilledSvg
  }), null);
};
CaretDownFilled.displayName = "CaretDownFilled";
CaretDownFilled.inheritAttrs = false;
var CaretDownFilled$1 = CaretDownFilled;
function renderSwitcherIcon(prefixCls, switcherIcon, showLine, props) {
  var isLeaf = props.isLeaf, expanded = props.expanded, loading = props.loading;
  var icon = switcherIcon;
  if (loading) {
    return createVNode(LoadingOutlined, {
      "class": "".concat(prefixCls, "-switcher-loading-icon")
    }, null);
  }
  var showLeafIcon;
  if (showLine && _typeof(showLine) === "object") {
    showLeafIcon = showLine.showLeafIcon;
  }
  var defaultIcon = null;
  var switcherCls = "".concat(prefixCls, "-switcher-icon");
  if (isLeaf) {
    if (showLine) {
      if (_typeof(showLine) === "object" && !showLeafIcon) {
        defaultIcon = createVNode("span", {
          "class": "".concat(prefixCls, "-switcher-leaf-line")
        }, null);
      } else {
        defaultIcon = createVNode(FileOutlined$1, {
          "class": "".concat(prefixCls, "-switcher-line-icon")
        }, null);
      }
    }
    return defaultIcon;
  } else {
    defaultIcon = createVNode(CaretDownFilled$1, {
      "class": switcherCls
    }, null);
    if (showLine) {
      defaultIcon = expanded ? createVNode(MinusSquareOutlined$1, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : createVNode(PlusSquareOutlined$1, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null);
    }
  }
  if (typeof switcherIcon === "function") {
    icon = switcherIcon(_extends(_extends({}, props), {
      defaultIcon,
      switcherCls
    }));
  } else if (isValidElement(icon)) {
    icon = cloneVNode(icon, {
      class: switcherCls
    });
  }
  return icon || defaultIcon;
}
var offset = 4;
function dropIndicatorRender(props) {
  var _style;
  var dropPosition = props.dropPosition, dropLevelOffset = props.dropLevelOffset, prefixCls = props.prefixCls, indent = props.indent, _props$direction = props.direction, direction = _props$direction === void 0 ? "ltr" : _props$direction;
  var startPosition = direction === "ltr" ? "left" : "right";
  var endPosition = direction === "ltr" ? "right" : "left";
  var style = (_style = {}, _defineProperty$9(_style, startPosition, "".concat(-dropLevelOffset * indent + offset, "px")), _defineProperty$9(_style, endPosition, 0), _style);
  switch (dropPosition) {
    case -1:
      style.top = "".concat(-3, "px");
      break;
    case 1:
      style.bottom = "".concat(-3, "px");
      break;
    default:
      style.bottom = "".concat(-3, "px");
      style[startPosition] = "".concat(indent + offset, "px");
      break;
  }
  return createVNode("div", {
    "style": style,
    "class": "".concat(prefixCls, "-drop-indicator")
  }, null);
}
var treeProps2 = function treeProps3() {
  var baseTreeProps = treeProps$1();
  return _extends(_extends({}, baseTreeProps), {
    showLine: {
      type: [Boolean, Object],
      default: void 0
    },
    multiple: {
      type: Boolean,
      default: void 0
    },
    autoExpandParent: {
      type: Boolean,
      default: void 0
    },
    checkStrictly: {
      type: Boolean,
      default: void 0
    },
    checkable: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    defaultExpandAll: {
      type: Boolean,
      default: void 0
    },
    defaultExpandParent: {
      type: Boolean,
      default: void 0
    },
    defaultExpandedKeys: {
      type: Array
    },
    expandedKeys: {
      type: Array
    },
    checkedKeys: {
      type: [Array, Object]
    },
    defaultCheckedKeys: {
      type: Array
    },
    selectedKeys: {
      type: Array
    },
    defaultSelectedKeys: {
      type: Array
    },
    selectable: {
      type: Boolean,
      default: void 0
    },
    loadedKeys: {
      type: Array
    },
    draggable: {
      type: Boolean,
      default: void 0
    },
    showIcon: {
      type: Boolean,
      default: void 0
    },
    icon: {
      type: Function
    },
    switcherIcon: PropTypes.any,
    prefixCls: String,
    replaceFields: {
      type: Object
    },
    blockNode: {
      type: Boolean,
      default: void 0
    },
    openAnimation: PropTypes.any,
    onDoubleclick: baseTreeProps.onDblclick,
    "onUpdate:selectedKeys": Function,
    "onUpdate:checkedKeys": Function,
    "onUpdate:expandedKeys": Function
  });
};
var Tree$1 = defineComponent({
  name: "ATree",
  inheritAttrs: false,
  props: initDefaultProps(treeProps2(), {
    checkable: false,
    selectable: true,
    showIcon: false,
    blockNode: false
  }),
  slots: ["icon", "title", "switcherIcon", "titleRender"],
  setup: function setup24(props, _ref) {
    var attrs = _ref.attrs, expose = _ref.expose, emit = _ref.emit, slots = _ref.slots;
    warning(!(props.treeData === void 0 && slots.default));
    var _useConfigInject = useConfigInject("tree", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, virtual = _useConfigInject.virtual;
    var treeRef = ref();
    var scrollTo2 = function scrollTo3(scroll) {
      var _a;
      (_a = treeRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(scroll);
    };
    expose({
      treeRef,
      onNodeExpand: function onNodeExpand() {
        var _a2;
        var _a;
        (_a = treeRef.value) === null || _a === void 0 ? void 0 : (_a2 = _a).onNodeExpand.apply(_a2, arguments);
      },
      scrollTo: scrollTo2,
      selectedKeys: computed(function() {
        var _a;
        return (_a = treeRef.value) === null || _a === void 0 ? void 0 : _a.selectedKeys;
      }),
      checkedKeys: computed(function() {
        var _a;
        return (_a = treeRef.value) === null || _a === void 0 ? void 0 : _a.checkedKeys;
      }),
      halfCheckedKeys: computed(function() {
        var _a;
        return (_a = treeRef.value) === null || _a === void 0 ? void 0 : _a.halfCheckedKeys;
      }),
      loadedKeys: computed(function() {
        var _a;
        return (_a = treeRef.value) === null || _a === void 0 ? void 0 : _a.loadedKeys;
      }),
      loadingKeys: computed(function() {
        var _a;
        return (_a = treeRef.value) === null || _a === void 0 ? void 0 : _a.loadingKeys;
      }),
      expandedKeys: computed(function() {
        var _a;
        return (_a = treeRef.value) === null || _a === void 0 ? void 0 : _a.expandedKeys;
      })
    });
    watchEffect(function() {
      devWarning(props.replaceFields === void 0, "Tree", "`replaceFields` is deprecated, please use fieldNames instead");
    });
    var handleCheck = function handleCheck2(checkedObjOrKeys, eventObj) {
      emit("update:checkedKeys", checkedObjOrKeys);
      emit("check", checkedObjOrKeys, eventObj);
    };
    var handleExpand = function handleExpand2(expandedKeys, eventObj) {
      emit("update:expandedKeys", expandedKeys);
      emit("expand", expandedKeys, eventObj);
    };
    var handleSelect = function handleSelect2(selectedKeys, eventObj) {
      emit("update:selectedKeys", selectedKeys);
      emit("select", selectedKeys, eventObj);
    };
    return function() {
      var _classNames;
      var showIcon = props.showIcon, showLine = props.showLine, _props$switcherIcon = props.switcherIcon, _switcherIcon = _props$switcherIcon === void 0 ? slots.switcherIcon : _props$switcherIcon, _props$icon = props.icon, icon = _props$icon === void 0 ? slots.icon : _props$icon, blockNode = props.blockNode, checkable = props.checkable, selectable = props.selectable, _props$fieldNames = props.fieldNames, fieldNames = _props$fieldNames === void 0 ? props.replaceFields : _props$fieldNames, _props$motion = props.motion, motion = _props$motion === void 0 ? props.openAnimation : _props$motion, _props$itemHeight = props.itemHeight, itemHeight = _props$itemHeight === void 0 ? 28 : _props$itemHeight, onDoubleclick = props.onDoubleclick, onDblclick = props.onDblclick;
      var newProps = _extends(_extends(_extends({}, attrs), omit(props, ["onUpdate:checkedKeys", "onUpdate:expandedKeys", "onUpdate:selectedKeys", "onDoubleclick"])), {
        showLine: Boolean(showLine),
        dropIndicatorRender,
        fieldNames,
        icon,
        itemHeight
      });
      var children = slots.default ? filterEmpty(slots.default()) : void 0;
      return createVNode(Tree$2, _objectSpread2(_objectSpread2({}, newProps), {}, {
        "virtual": virtual.value,
        "motion": motion,
        "ref": treeRef,
        "prefixCls": prefixCls.value,
        "class": classNames((_classNames = {}, _defineProperty$9(_classNames, "".concat(prefixCls.value, "-icon-hide"), !showIcon), _defineProperty$9(_classNames, "".concat(prefixCls.value, "-block-node"), blockNode), _defineProperty$9(_classNames, "".concat(prefixCls.value, "-unselectable"), !selectable), _defineProperty$9(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _classNames), attrs.class),
        "direction": direction.value,
        "checkable": checkable,
        "selectable": selectable,
        "switcherIcon": function switcherIcon(nodeProps) {
          return renderSwitcherIcon(prefixCls.value, _switcherIcon, showLine, nodeProps);
        },
        "onCheck": handleCheck,
        "onExpand": handleExpand,
        "onSelect": handleSelect,
        "onDblclick": onDblclick || onDoubleclick,
        "children": children
      }), _extends(_extends({}, slots), {
        checkable: function checkable2() {
          return createVNode("span", {
            "class": "".concat(prefixCls.value, "-checkbox-inner")
          }, null);
        }
      }));
    };
  }
});
var FolderOpenOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" } }] }, "name": "folder-open", "theme": "outlined" };
var FolderOpenOutlinedSvg = FolderOpenOutlined$2;
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
var FolderOpenOutlined = function FolderOpenOutlined2(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": FolderOpenOutlinedSvg
  }), null);
};
FolderOpenOutlined.displayName = "FolderOpenOutlined";
FolderOpenOutlined.inheritAttrs = false;
var FolderOpenOutlined$1 = FolderOpenOutlined;
var FolderOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z" } }] }, "name": "folder", "theme": "outlined" };
var FolderOutlinedSvg = FolderOutlined$2;
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
var FolderOutlined = function FolderOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": FolderOutlinedSvg
  }), null);
};
FolderOutlined.displayName = "FolderOutlined";
FolderOutlined.inheritAttrs = false;
var FolderOutlined$1 = FolderOutlined;
var Record;
(function(Record2) {
  Record2[Record2["None"] = 0] = "None";
  Record2[Record2["Start"] = 1] = "Start";
  Record2[Record2["End"] = 2] = "End";
})(Record || (Record = {}));
function traverseNodesKey(treeData, fieldNames, callback) {
  function processNode(dataNode) {
    var key = dataNode[fieldNames.key];
    var children = dataNode[fieldNames.children];
    if (callback(key, dataNode) !== false) {
      traverseNodesKey(children || [], fieldNames, callback);
    }
  }
  treeData.forEach(processNode);
}
function calcRangeKeys(_ref) {
  var treeData = _ref.treeData, expandedKeys = _ref.expandedKeys, startKey = _ref.startKey, endKey = _ref.endKey, _ref$fieldNames = _ref.fieldNames, fieldNames = _ref$fieldNames === void 0 ? {
    title: "title",
    key: "key",
    children: "children"
  } : _ref$fieldNames;
  var keys = [];
  var record = Record.None;
  if (startKey && startKey === endKey) {
    return [startKey];
  }
  if (!startKey || !endKey) {
    return [];
  }
  function matchKey(key) {
    return key === startKey || key === endKey;
  }
  traverseNodesKey(treeData, fieldNames, function(key) {
    if (record === Record.End) {
      return false;
    }
    if (matchKey(key)) {
      keys.push(key);
      if (record === Record.None) {
        record = Record.Start;
      } else if (record === Record.Start) {
        record = Record.End;
        return false;
      }
    } else if (record === Record.Start) {
      keys.push(key);
    }
    if (expandedKeys.indexOf(key) === -1) {
      return false;
    }
    return true;
  });
  return keys;
}
function convertDirectoryKeysToNodes(treeData, keys, fieldNames) {
  var restKeys = _toConsumableArray(keys);
  var nodes = [];
  traverseNodesKey(treeData, fieldNames, function(key, node) {
    var index = restKeys.indexOf(key);
    if (index !== -1) {
      nodes.push(node);
      restKeys.splice(index, 1);
    }
    return !!restKeys.length;
  });
  return nodes;
}
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
var directoryTreeProps = function directoryTreeProps2() {
  return _extends(_extends({}, treeProps2()), {
    expandAction: {
      type: [Boolean, String]
    }
  });
};
function getIcon(props) {
  var isLeaf = props.isLeaf, expanded = props.expanded;
  if (isLeaf) {
    return createVNode(FileOutlined$1, null, null);
  }
  return expanded ? createVNode(FolderOpenOutlined$1, null, null) : createVNode(FolderOutlined$1, null, null);
}
var DirectoryTree = defineComponent({
  name: "ADirectoryTree",
  inheritAttrs: false,
  props: initDefaultProps(directoryTreeProps(), {
    showIcon: true,
    expandAction: "click"
  }),
  slots: ["icon", "title", "switcherIcon", "titleRender"],
  setup: function setup25(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, emit = _ref.emit, expose = _ref.expose;
    var _a;
    var treeData = ref(props.treeData || convertTreeToData(filterEmpty((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))));
    watch(function() {
      return props.treeData;
    }, function() {
      treeData.value = props.treeData;
    });
    onUpdated(function() {
      nextTick(function() {
        var _a2;
        if (props.treeData === void 0 && slots.default) {
          treeData.value = convertTreeToData(filterEmpty((_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots)));
        }
      });
    });
    var lastSelectedKey = ref();
    var cachedSelectedKeys = ref();
    var treeRef = ref();
    expose({
      selectedKeys: computed(function() {
        var _a2;
        return (_a2 = treeRef.value) === null || _a2 === void 0 ? void 0 : _a2.selectedKeys;
      }),
      checkedKeys: computed(function() {
        var _a2;
        return (_a2 = treeRef.value) === null || _a2 === void 0 ? void 0 : _a2.checkedKeys;
      }),
      halfCheckedKeys: computed(function() {
        var _a2;
        return (_a2 = treeRef.value) === null || _a2 === void 0 ? void 0 : _a2.halfCheckedKeys;
      }),
      loadedKeys: computed(function() {
        var _a2;
        return (_a2 = treeRef.value) === null || _a2 === void 0 ? void 0 : _a2.loadedKeys;
      }),
      loadingKeys: computed(function() {
        var _a2;
        return (_a2 = treeRef.value) === null || _a2 === void 0 ? void 0 : _a2.loadingKeys;
      }),
      expandedKeys: computed(function() {
        var _a2;
        return (_a2 = treeRef.value) === null || _a2 === void 0 ? void 0 : _a2.expandedKeys;
      })
    });
    var getInitExpandedKeys = function getInitExpandedKeys2() {
      var _convertDataToEntitie = convertDataToEntities(treeData.value), keyEntities = _convertDataToEntitie.keyEntities;
      var initExpandedKeys;
      if (props.defaultExpandAll) {
        initExpandedKeys = Object.keys(keyEntities);
      } else if (props.defaultExpandParent) {
        initExpandedKeys = conductExpandParent(props.expandedKeys || props.defaultExpandedKeys || [], keyEntities);
      } else {
        initExpandedKeys = props.expandedKeys || props.defaultExpandedKeys;
      }
      return initExpandedKeys;
    };
    var selectedKeys = ref(props.selectedKeys || props.defaultSelectedKeys || []);
    var expandedKeys = ref(getInitExpandedKeys());
    watch(function() {
      return props.selectedKeys;
    }, function() {
      if (props.selectedKeys !== void 0) {
        selectedKeys.value = props.selectedKeys;
      }
    }, {
      immediate: true
    });
    watch(function() {
      return props.expandedKeys;
    }, function() {
      if (props.expandedKeys !== void 0) {
        expandedKeys.value = props.expandedKeys;
      }
    }, {
      immediate: true
    });
    var expandFolderNode = function expandFolderNode2(event, node) {
      var isLeaf = node.isLeaf;
      if (isLeaf || event.shiftKey || event.metaKey || event.ctrlKey) {
        return;
      }
      treeRef.value.onNodeExpand(event, node);
    };
    var onDebounceExpand = debounce(expandFolderNode, 200, {
      leading: true
    });
    var onExpand = function onExpand2(keys, info) {
      if (props.expandedKeys === void 0) {
        expandedKeys.value = keys;
      }
      emit("update:expandedKeys", keys);
      emit("expand", keys, info);
    };
    var onClick = function onClick2(event, node) {
      var expandAction = props.expandAction;
      if (expandAction === "click") {
        onDebounceExpand(event, node);
      }
      emit("click", event, node);
    };
    var onDoubleClick = function onDoubleClick2(event, node) {
      var expandAction = props.expandAction;
      if (expandAction === "dblclick" || expandAction === "doubleclick") {
        onDebounceExpand(event, node);
      }
      emit("doubleclick", event, node);
      emit("dblclick", event, node);
    };
    var fieldNames = computed(function() {
      return fillFieldNames(props.fieldNames);
    });
    var onSelect = function onSelect2(keys, event) {
      var multiple = props.multiple;
      var node = event.node, nativeEvent = event.nativeEvent;
      var key = node[fieldNames.value.key];
      var newEvent = _extends(_extends({}, event), {
        selected: true
      });
      var ctrlPick = (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.ctrlKey) || (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.metaKey);
      var shiftPick = nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.shiftKey;
      var newSelectedKeys;
      if (multiple && ctrlPick) {
        newSelectedKeys = keys;
        lastSelectedKey.value = key;
        cachedSelectedKeys.value = newSelectedKeys;
        newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData.value, newSelectedKeys, fieldNames.value);
      } else if (multiple && shiftPick) {
        newSelectedKeys = Array.from(new Set([].concat(_toConsumableArray(cachedSelectedKeys.value || []), _toConsumableArray(calcRangeKeys({
          treeData: treeData.value,
          expandedKeys: expandedKeys.value,
          startKey: key,
          endKey: lastSelectedKey.value,
          fieldNames: fieldNames.value
        })))));
        newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData.value, newSelectedKeys, fieldNames.value);
      } else {
        newSelectedKeys = [key];
        lastSelectedKey.value = key;
        cachedSelectedKeys.value = newSelectedKeys;
        newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData.value, newSelectedKeys, fieldNames.value);
      }
      emit("update:selectedKeys", newSelectedKeys);
      emit("select", newSelectedKeys, newEvent);
      if (props.selectedKeys === void 0) {
        selectedKeys.value = newSelectedKeys;
      }
    };
    var onCheck = function onCheck2(checkedObjOrKeys, eventObj) {
      emit("update:checkedKeys", checkedObjOrKeys);
      emit("check", checkedObjOrKeys, eventObj);
    };
    var _useConfigInject = useConfigInject("tree", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    return function() {
      var connectClassName = classNames("".concat(prefixCls.value, "-directory"), _defineProperty$9({}, "".concat(prefixCls.value, "-directory-rtl"), direction.value === "rtl"), attrs.class);
      var _props$icon = props.icon, icon = _props$icon === void 0 ? slots.icon : _props$icon, _props$blockNode = props.blockNode, blockNode = _props$blockNode === void 0 ? true : _props$blockNode, otherProps = __rest(props, ["icon", "blockNode"]);
      return createVNode(Tree$1, _objectSpread2(_objectSpread2(_objectSpread2({}, attrs), {}, {
        "icon": icon || getIcon,
        "ref": treeRef,
        "blockNode": blockNode
      }, otherProps), {}, {
        "prefixCls": prefixCls.value,
        "class": connectClassName,
        "expandedKeys": expandedKeys.value,
        "selectedKeys": selectedKeys.value,
        "onSelect": onSelect,
        "onClick": onClick,
        "onDblclick": onDoubleClick,
        "onExpand": onExpand,
        "onCheck": onCheck
      }), slots);
    };
  }
});
var TreeNode = defineComponent(_extends(_extends({}, VcTreeNode), {
  name: "ATreeNode",
  props: treeNodeProps
}));
var Tree = _extends(Tree$1, {
  DirectoryTree,
  TreeNode,
  install: function install(app) {
    app.component(Tree$1.name, Tree$1);
    app.component(TreeNode.name, TreeNode);
    app.component(DirectoryTree.name, DirectoryTree);
    return app;
  }
});
var SubMenu = Menu.SubMenu, MenuItem = Menu.Item;
function hasSubMenu(filters) {
  return filters.some(function(_ref) {
    var children = _ref.children;
    return children && children.length > 0;
  });
}
function searchValueMatched(searchValue, text) {
  if (typeof text === "string" || typeof text === "number") {
    return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().includes(searchValue.trim().toLowerCase());
  }
  return false;
}
function renderFilterItems(_ref2) {
  var filters = _ref2.filters, prefixCls = _ref2.prefixCls, filteredKeys = _ref2.filteredKeys, filterMultiple = _ref2.filterMultiple, searchValue = _ref2.searchValue, filterSearch = _ref2.filterSearch;
  return filters.map(function(filter, index) {
    var key = String(filter.value);
    if (filter.children) {
      return createVNode(SubMenu, {
        "key": key || index,
        "title": filter.text,
        "popupClassName": "".concat(prefixCls, "-dropdown-submenu")
      }, {
        default: function _default() {
          return [renderFilterItems({
            filters: filter.children,
            prefixCls,
            filteredKeys,
            filterMultiple,
            searchValue,
            filterSearch
          })];
        }
      });
    }
    var Component = filterMultiple ? Checkbox : Radio;
    var item = createVNode(MenuItem, {
      "key": filter.value !== void 0 ? key : index
    }, {
      default: function _default() {
        return [createVNode(Component, {
          "checked": filteredKeys.includes(key)
        }, null), createVNode("span", null, [filter.text])];
      }
    });
    if (searchValue.trim()) {
      if (typeof filterSearch === "function") {
        return filterSearch(searchValue, filter) ? item : void 0;
      }
      return searchValueMatched(searchValue, filter.text) ? item : void 0;
    }
    return item;
  });
}
var FilterDropdown = defineComponent({
  name: "FilterDropdown",
  props: ["tablePrefixCls", "prefixCls", "dropdownPrefixCls", "column", "filterState", "filterMultiple", "filterMode", "filterSearch", "columnKey", "triggerFilter", "locale", "getPopupContainer"],
  setup: function setup26(props, _ref3) {
    var slots = _ref3.slots;
    var contextSlots = useInjectSlots();
    var filterMode = computed(function() {
      var _a;
      return (_a = props.filterMode) !== null && _a !== void 0 ? _a : "menu";
    });
    var filterSearch = computed(function() {
      var _a;
      return (_a = props.filterSearch) !== null && _a !== void 0 ? _a : false;
    });
    var filterDropdownVisible = computed(function() {
      return props.column.filterDropdownVisible;
    });
    var visible = ref(false);
    var filtered = computed(function() {
      var _a;
      return !!(props.filterState && (((_a = props.filterState.filteredKeys) === null || _a === void 0 ? void 0 : _a.length) || props.filterState.forceFiltered));
    });
    var filterFlattenKeys = computed(function() {
      var _a;
      return flattenKeys((_a = props.column) === null || _a === void 0 ? void 0 : _a.filters);
    });
    var filterDropdownRef = computed(function() {
      var _props$column = props.column, filterDropdown = _props$column.filterDropdown, _props$column$slots = _props$column.slots, slots2 = _props$column$slots === void 0 ? {} : _props$column$slots, customFilterDropdown = _props$column.customFilterDropdown;
      return filterDropdown || slots2.filterDropdown && contextSlots.value[slots2.filterDropdown] || customFilterDropdown && contextSlots.value.customFilterDropdown;
    });
    var filterIconRef = computed(function() {
      var _props$column2 = props.column, filterIcon = _props$column2.filterIcon, _props$column2$slots = _props$column2.slots, slots2 = _props$column2$slots === void 0 ? {} : _props$column2$slots;
      return filterIcon || slots2.filterIcon && contextSlots.value[slots2.filterIcon] || contextSlots.value.customFilterIcon;
    });
    var triggerVisible = function triggerVisible2(newVisible) {
      var _a, _b;
      visible.value = newVisible;
      (_b = (_a = props.column).onFilterDropdownVisibleChange) === null || _b === void 0 ? void 0 : _b.call(_a, newVisible);
    };
    var mergedVisible = computed(function() {
      return typeof filterDropdownVisible.value === "boolean" ? filterDropdownVisible.value : visible.value;
    });
    var propFilteredKeys = computed(function() {
      var _a;
      return (_a = props.filterState) === null || _a === void 0 ? void 0 : _a.filteredKeys;
    });
    var filteredKeys = shallowRef([]);
    var onSelectKeys = function onSelectKeys2(_ref4) {
      var selectedKeys = _ref4.selectedKeys;
      filteredKeys.value = selectedKeys;
    };
    var onCheck = function onCheck2(keys, _ref5) {
      var node = _ref5.node, checked = _ref5.checked;
      if (!props.filterMultiple) {
        onSelectKeys({
          selectedKeys: checked && node.key ? [node.key] : []
        });
      } else {
        onSelectKeys({
          selectedKeys: keys
        });
      }
    };
    watch(propFilteredKeys, function() {
      if (!visible.value) {
        return;
      }
      onSelectKeys({
        selectedKeys: propFilteredKeys.value || []
      });
    }, {
      immediate: true
    });
    var openKeys = shallowRef([]);
    var openRef = ref();
    var onOpenChange = function onOpenChange2(keys) {
      openRef.value = setTimeout(function() {
        openKeys.value = keys;
      });
    };
    var onMenuClick = function onMenuClick2() {
      clearTimeout(openRef.value);
    };
    onBeforeUnmount(function() {
      clearTimeout(openRef.value);
    });
    var searchValue = ref("");
    var onSearch = function onSearch2(e) {
      var value = e.target.value;
      searchValue.value = value;
    };
    watch(visible, function() {
      if (!visible.value) {
        searchValue.value = "";
      }
    });
    var internalTriggerFilter = function internalTriggerFilter2(keys) {
      var column = props.column, columnKey = props.columnKey, filterState = props.filterState;
      var mergedKeys = keys && keys.length ? keys : null;
      if (mergedKeys === null && (!filterState || !filterState.filteredKeys)) {
        return null;
      }
      if (isEqual(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys)) {
        return null;
      }
      props.triggerFilter({
        column,
        key: columnKey,
        filteredKeys: mergedKeys
      });
    };
    var onConfirm = function onConfirm2() {
      triggerVisible(false);
      internalTriggerFilter(filteredKeys.value);
    };
    var onReset = function onReset2() {
      var _ref6 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        confirm: false,
        closeDropdown: false
      }, confirm = _ref6.confirm, closeDropdown = _ref6.closeDropdown;
      if (confirm) {
        internalTriggerFilter([]);
      }
      if (closeDropdown) {
        triggerVisible(false);
      }
      searchValue.value = "";
      filteredKeys.value = [];
    };
    var doFilter = function doFilter2() {
      var _ref7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        closeDropdown: true
      }, closeDropdown = _ref7.closeDropdown;
      if (closeDropdown) {
        triggerVisible(false);
      }
      internalTriggerFilter(filteredKeys.value);
    };
    var onVisibleChange = function onVisibleChange2(newVisible) {
      if (newVisible && propFilteredKeys.value !== void 0) {
        filteredKeys.value = propFilteredKeys.value || [];
      }
      triggerVisible(newVisible);
      if (!newVisible && !filterDropdownRef.value) {
        onConfirm();
      }
    };
    var _useConfigInject = useConfigInject("", props), direction = _useConfigInject.direction;
    var onCheckAll = function onCheckAll2(e) {
      if (e.target.checked) {
        var allFilterKeys = filterFlattenKeys.value;
        filteredKeys.value = allFilterKeys;
      } else {
        filteredKeys.value = [];
      }
    };
    var getTreeData = function getTreeData2(_ref8) {
      var filters = _ref8.filters;
      return (filters || []).map(function(filter, index) {
        var key = String(filter.value);
        var item = {
          title: filter.text,
          key: filter.value !== void 0 ? key : index
        };
        if (filter.children) {
          item.children = getTreeData2({
            filters: filter.children
          });
        }
        return item;
      });
    };
    var treeData = computed(function() {
      return getTreeData({
        filters: props.column.filters
      });
    });
    var dropdownMenuClass = computed(function() {
      return classNames(_defineProperty$9({}, "".concat(props.dropdownPrefixCls, "-menu-without-submenu"), !hasSubMenu(props.column.filters || [])));
    });
    var getFilterComponent = function getFilterComponent2() {
      var selectedKeys = filteredKeys.value;
      var column = props.column, locale = props.locale, tablePrefixCls = props.tablePrefixCls, filterMultiple = props.filterMultiple, dropdownPrefixCls = props.dropdownPrefixCls, getPopupContainer = props.getPopupContainer, prefixCls = props.prefixCls;
      if ((column.filters || []).length === 0) {
        return createVNode(__unplugin_components_6$1, {
          "image": __unplugin_components_6$1.PRESENTED_IMAGE_SIMPLE,
          "description": locale.filterEmptyText,
          "imageStyle": {
            height: 24
          },
          "style": {
            margin: 0,
            padding: "16px 0"
          }
        }, null);
      }
      if (filterMode.value === "tree") {
        return createVNode(Fragment, null, [createVNode(FilterSearch, {
          "filterSearch": filterSearch.value,
          "value": searchValue.value,
          "onChange": onSearch,
          "tablePrefixCls": tablePrefixCls,
          "locale": locale
        }, null), createVNode("div", {
          "class": "".concat(tablePrefixCls, "-filter-dropdown-tree")
        }, [filterMultiple ? createVNode(Checkbox, {
          "class": "".concat(tablePrefixCls, "-filter-dropdown-checkall"),
          "onChange": onCheckAll,
          "checked": selectedKeys.length === filterFlattenKeys.value.length,
          "indeterminate": selectedKeys.length > 0 && selectedKeys.length < filterFlattenKeys.value.length
        }, {
          default: function _default() {
            return [locale.filterCheckall];
          }
        }) : null, createVNode(Tree, {
          "checkable": true,
          "selectable": false,
          "blockNode": true,
          "multiple": filterMultiple,
          "checkStrictly": !filterMultiple,
          "class": "".concat(dropdownPrefixCls, "-menu"),
          "onCheck": onCheck,
          "checkedKeys": selectedKeys,
          "selectedKeys": selectedKeys,
          "showIcon": false,
          "treeData": treeData.value,
          "autoExpandParent": true,
          "defaultExpandAll": true,
          "filterTreeNode": searchValue.value.trim() ? function(node) {
            return searchValueMatched(searchValue.value, node.title);
          } : void 0
        }, null)])]);
      }
      return createVNode(Fragment, null, [createVNode(FilterSearch, {
        "filterSearch": filterSearch.value,
        "value": searchValue.value,
        "onChange": onSearch,
        "tablePrefixCls": tablePrefixCls,
        "locale": locale
      }, null), createVNode(Menu, {
        "multiple": filterMultiple,
        "prefixCls": "".concat(dropdownPrefixCls, "-menu"),
        "class": dropdownMenuClass.value,
        "onClick": onMenuClick,
        "onSelect": onSelectKeys,
        "onDeselect": onSelectKeys,
        "selectedKeys": selectedKeys,
        "getPopupContainer": getPopupContainer,
        "openKeys": openKeys.value,
        "onOpenChange": onOpenChange
      }, {
        default: function _default() {
          return renderFilterItems({
            filters: column.filters || [],
            filterSearch: filterSearch.value,
            prefixCls,
            filteredKeys: filteredKeys.value,
            filterMultiple,
            searchValue: searchValue.value
          });
        }
      })]);
    };
    return function() {
      var _a;
      var tablePrefixCls = props.tablePrefixCls, prefixCls = props.prefixCls, column = props.column, dropdownPrefixCls = props.dropdownPrefixCls, locale = props.locale, getPopupContainer = props.getPopupContainer;
      var dropdownContent;
      if (typeof filterDropdownRef.value === "function") {
        dropdownContent = filterDropdownRef.value({
          prefixCls: "".concat(dropdownPrefixCls, "-custom"),
          setSelectedKeys: function setSelectedKeys(selectedKeys2) {
            return onSelectKeys({
              selectedKeys: selectedKeys2
            });
          },
          selectedKeys: filteredKeys.value,
          confirm: doFilter,
          clearFilters: onReset,
          filters: column.filters,
          visible: mergedVisible.value,
          column: column.__originColumn__
        });
      } else if (filterDropdownRef.value) {
        dropdownContent = filterDropdownRef.value;
      } else {
        var selectedKeys = filteredKeys.value;
        dropdownContent = createVNode(Fragment, null, [getFilterComponent(), createVNode("div", {
          "class": "".concat(prefixCls, "-dropdown-btns")
        }, [createVNode(Button$1, {
          "type": "link",
          "size": "small",
          "disabled": selectedKeys.length === 0,
          "onClick": function onClick() {
            return onReset();
          }
        }, {
          default: function _default() {
            return [locale.filterReset];
          }
        }), createVNode(Button$1, {
          "type": "primary",
          "size": "small",
          "onClick": onConfirm
        }, {
          default: function _default() {
            return [locale.filterConfirm];
          }
        })])]);
      }
      var menu = createVNode(FilterDropdownMenuWrapper$1, {
        "class": "".concat(prefixCls, "-dropdown")
      }, {
        default: function _default() {
          return [dropdownContent];
        }
      });
      var filterIcon;
      if (typeof filterIconRef.value === "function") {
        filterIcon = filterIconRef.value({
          filtered: filtered.value,
          column: column.__originColumn__
        });
      } else if (filterIconRef.value) {
        filterIcon = filterIconRef.value;
      } else {
        filterIcon = createVNode(FilterFilled$1, null, null);
      }
      return createVNode("div", {
        "class": "".concat(prefixCls, "-column")
      }, [createVNode("span", {
        "class": "".concat(tablePrefixCls, "-column-title")
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), createVNode(Dropdown, {
        "overlay": menu,
        "trigger": ["click"],
        "visible": mergedVisible.value,
        "onVisibleChange": onVisibleChange,
        "getPopupContainer": getPopupContainer,
        "placement": direction.value === "rtl" ? "bottomLeft" : "bottomRight"
      }, {
        default: function _default() {
          return [createVNode("span", {
            "role": "button",
            "tabindex": -1,
            "class": classNames("".concat(prefixCls, "-trigger"), {
              active: filtered.value
            }),
            "onClick": function onClick(e) {
              e.stopPropagation();
            }
          }, [filterIcon])];
        }
      })]);
    };
  }
});
function collectFilterStates(columns, init, pos) {
  var filterStates = [];
  (columns || []).forEach(function(column, index) {
    var _a, _b;
    var columnPos = getColumnPos(index, pos);
    var hasFilterDropdown = column.filterDropdown || ((_a = column === null || column === void 0 ? void 0 : column.slots) === null || _a === void 0 ? void 0 : _a.filterDropdown) || column.customFilterDropdown;
    if (column.filters || hasFilterDropdown || "onFilter" in column) {
      if ("filteredValue" in column) {
        var filteredValues = column.filteredValue;
        if (!hasFilterDropdown) {
          filteredValues = (_b = filteredValues === null || filteredValues === void 0 ? void 0 : filteredValues.map(String)) !== null && _b !== void 0 ? _b : filteredValues;
        }
        filterStates.push({
          column,
          key: getColumnKey(column, columnPos),
          filteredKeys: filteredValues,
          forceFiltered: column.filtered
        });
      } else {
        filterStates.push({
          column,
          key: getColumnKey(column, columnPos),
          filteredKeys: init && column.defaultFilteredValue ? column.defaultFilteredValue : void 0,
          forceFiltered: column.filtered
        });
      }
    }
    if ("children" in column) {
      filterStates = [].concat(_toConsumableArray(filterStates), _toConsumableArray(collectFilterStates(column.children, init, columnPos)));
    }
  });
  return filterStates;
}
function injectFilter(prefixCls, dropdownPrefixCls, columns, filterStates, triggerFilter, getPopupContainer, locale, pos) {
  return columns.map(function(column, index) {
    var _a;
    var columnPos = getColumnPos(index, pos);
    var _column$filterMultipl = column.filterMultiple, filterMultiple = _column$filterMultipl === void 0 ? true : _column$filterMultipl, filterMode = column.filterMode, filterSearch = column.filterSearch;
    var newColumn = column;
    var hasFilterDropdown = column.filterDropdown || ((_a = column === null || column === void 0 ? void 0 : column.slots) === null || _a === void 0 ? void 0 : _a.filterDropdown) || column.customFilterDropdown;
    if (newColumn.filters || hasFilterDropdown) {
      var columnKey = getColumnKey(newColumn, columnPos);
      var filterState = filterStates.find(function(_ref) {
        var key = _ref.key;
        return columnKey === key;
      });
      newColumn = _extends(_extends({}, newColumn), {
        title: function title(renderProps) {
          return createVNode(FilterDropdown, {
            "tablePrefixCls": prefixCls,
            "prefixCls": "".concat(prefixCls, "-filter"),
            "dropdownPrefixCls": dropdownPrefixCls,
            "column": newColumn,
            "columnKey": columnKey,
            "filterState": filterState,
            "filterMultiple": filterMultiple,
            "filterMode": filterMode,
            "filterSearch": filterSearch,
            "triggerFilter": triggerFilter,
            "locale": locale,
            "getPopupContainer": getPopupContainer
          }, {
            default: function _default() {
              return [renderColumnTitle(column.title, renderProps)];
            }
          });
        }
      });
    }
    if ("children" in newColumn) {
      newColumn = _extends(_extends({}, newColumn), {
        children: injectFilter(prefixCls, dropdownPrefixCls, newColumn.children, filterStates, triggerFilter, getPopupContainer, locale, columnPos)
      });
    }
    return newColumn;
  });
}
function flattenKeys(filters) {
  var keys = [];
  (filters || []).forEach(function(_ref2) {
    var value = _ref2.value, children = _ref2.children;
    keys.push(value);
    if (children) {
      keys = [].concat(_toConsumableArray(keys), _toConsumableArray(flattenKeys(children)));
    }
  });
  return keys;
}
function generateFilterInfo(filterStates) {
  var currentFilters = {};
  filterStates.forEach(function(_ref3) {
    var key = _ref3.key, filteredKeys = _ref3.filteredKeys, column = _ref3.column;
    var _a;
    var hasFilterDropdown = column.filterDropdown || ((_a = column === null || column === void 0 ? void 0 : column.slots) === null || _a === void 0 ? void 0 : _a.filterDropdown) || column.customFilterDropdown;
    var filters = column.filters;
    if (hasFilterDropdown) {
      currentFilters[key] = filteredKeys || null;
    } else if (Array.isArray(filteredKeys)) {
      var keys = flattenKeys(filters);
      currentFilters[key] = keys.filter(function(originKey) {
        return filteredKeys.includes(String(originKey));
      });
    } else {
      currentFilters[key] = null;
    }
  });
  return currentFilters;
}
function getFilterData(data, filterStates) {
  return filterStates.reduce(function(currentData, filterState) {
    var _filterState$column = filterState.column, onFilter = _filterState$column.onFilter, filters = _filterState$column.filters, filteredKeys = filterState.filteredKeys;
    if (onFilter && filteredKeys && filteredKeys.length) {
      return currentData.filter(function(record) {
        return filteredKeys.some(function(key) {
          var keys = flattenKeys(filters);
          var keyIndex = keys.findIndex(function(k) {
            return String(k) === String(key);
          });
          var realKey = keyIndex !== -1 ? keys[keyIndex] : key;
          return onFilter(realKey, record);
        });
      });
    }
    return currentData;
  }, data);
}
function useFilter(_ref4) {
  var prefixCls = _ref4.prefixCls, dropdownPrefixCls = _ref4.dropdownPrefixCls, mergedColumns = _ref4.mergedColumns, locale = _ref4.locale, onFilterChange = _ref4.onFilterChange, getPopupContainer = _ref4.getPopupContainer;
  var _useState = useState(collectFilterStates(mergedColumns.value, true)), _useState2 = _slicedToArray(_useState, 2), filterStates = _useState2[0], setFilterStates = _useState2[1];
  var mergedFilterStates = computed(function() {
    var collectedStates = collectFilterStates(mergedColumns.value, false);
    var filteredKeysIsNotControlled = collectedStates.every(function(_ref5) {
      var filteredKeys = _ref5.filteredKeys;
      return filteredKeys === void 0;
    });
    if (filteredKeysIsNotControlled) {
      return filterStates.value;
    }
    var filteredKeysIsAllControlled = collectedStates.every(function(_ref6) {
      var filteredKeys = _ref6.filteredKeys;
      return filteredKeys !== void 0;
    });
    devWarning(filteredKeysIsNotControlled || filteredKeysIsAllControlled, "Table", "`FilteredKeys` should all be controlled or not controlled.");
    return collectedStates;
  });
  var filters = computed(function() {
    return generateFilterInfo(mergedFilterStates.value);
  });
  var triggerFilter = function triggerFilter2(filterState) {
    var newFilterStates = mergedFilterStates.value.filter(function(_ref7) {
      var key = _ref7.key;
      return key !== filterState.key;
    });
    newFilterStates.push(filterState);
    setFilterStates(newFilterStates);
    onFilterChange(generateFilterInfo(newFilterStates), newFilterStates);
  };
  var transformColumns = function transformColumns2(innerColumns) {
    return injectFilter(prefixCls.value, dropdownPrefixCls.value, innerColumns, mergedFilterStates.value, triggerFilter, getPopupContainer.value, locale.value);
  };
  return [transformColumns, mergedFilterStates, filters];
}
function fillTitle(columns, columnTitleProps) {
  return columns.map(function(column) {
    var cloneColumn = _extends({}, column);
    cloneColumn.title = renderColumnTitle(cloneColumn.title, columnTitleProps);
    if ("children" in cloneColumn) {
      cloneColumn.children = fillTitle(cloneColumn.children, columnTitleProps);
    }
    return cloneColumn;
  });
}
function useTitleColumns(columnTitleProps) {
  var filledColumns = function filledColumns2(columns) {
    return fillTitle(columns, columnTitleProps.value);
  };
  return [filledColumns];
}
function renderExpandIcon(locale) {
  return function expandIcon(_ref) {
    var _classNames;
    var prefixCls = _ref.prefixCls, onExpand = _ref.onExpand, record = _ref.record, expanded = _ref.expanded, expandable = _ref.expandable;
    var iconPrefix = "".concat(prefixCls, "-row-expand-icon");
    return createVNode("button", {
      "type": "button",
      "onClick": function onClick(e) {
        onExpand(record, e);
        e.stopPropagation();
      },
      "class": classNames(iconPrefix, (_classNames = {}, _defineProperty$9(_classNames, "".concat(iconPrefix, "-spaced"), !expandable), _defineProperty$9(_classNames, "".concat(iconPrefix, "-expanded"), expandable && expanded), _defineProperty$9(_classNames, "".concat(iconPrefix, "-collapsed"), expandable && !expanded), _classNames)),
      "aria-label": expanded ? locale.collapse : locale.expand
    }, null);
  };
}
function fillSlots(columns, contextSlots) {
  var $slots = contextSlots.value;
  return columns.map(function(column) {
    var _a;
    if (column === SELECTION_COLUMN || column === EXPAND_COLUMN)
      return column;
    var cloneColumn = _extends({}, column);
    var _cloneColumn$slots = cloneColumn.slots, slots = _cloneColumn$slots === void 0 ? {} : _cloneColumn$slots;
    cloneColumn.__originColumn__ = column;
    devWarning(!("slots" in cloneColumn), "Table", "`column.slots` is deprecated. Please use `v-slot:headerCell` `v-slot:bodyCell` instead.");
    Object.keys(slots).forEach(function(key) {
      var name = slots[key];
      if (cloneColumn[key] === void 0 && $slots[name]) {
        cloneColumn[key] = $slots[name];
      }
    });
    if (contextSlots.value.headerCell && !((_a = column.slots) === null || _a === void 0 ? void 0 : _a.title)) {
      cloneColumn.title = renderSlot(contextSlots.value, "headerCell", {
        title: column.title,
        column
      }, function() {
        return [column.title];
      });
    }
    if ("children" in cloneColumn) {
      cloneColumn.children = fillSlots(cloneColumn.children, contextSlots);
    }
    return cloneColumn;
  });
}
function useColumns(contextSlots) {
  var filledColumns = function filledColumns2(columns) {
    return fillSlots(columns, contextSlots);
  };
  return [filledColumns];
}
var EMPTY_LIST = [];
var tableProps = function tableProps2() {
  return {
    prefixCls: {
      type: String,
      default: void 0
    },
    columns: {
      type: Array,
      default: void 0
    },
    rowKey: {
      type: [String, Function],
      default: void 0
    },
    tableLayout: {
      type: String,
      default: void 0
    },
    rowClassName: {
      type: [String, Function],
      default: void 0
    },
    title: {
      type: Function,
      default: void 0
    },
    footer: {
      type: Function,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    showHeader: {
      type: Boolean,
      default: void 0
    },
    components: {
      type: Object,
      default: void 0
    },
    customRow: {
      type: Function,
      default: void 0
    },
    customHeaderRow: {
      type: Function,
      default: void 0
    },
    direction: {
      type: String,
      default: void 0
    },
    expandFixed: {
      type: [Boolean, String],
      default: void 0
    },
    expandColumnWidth: {
      type: Number,
      default: void 0
    },
    expandedRowKeys: {
      type: Array,
      default: void 0
    },
    defaultExpandedRowKeys: {
      type: Array,
      default: void 0
    },
    expandedRowRender: {
      type: Function,
      default: void 0
    },
    expandRowByClick: {
      type: Boolean,
      default: void 0
    },
    expandIcon: {
      type: Function,
      default: void 0
    },
    onExpand: {
      type: Function,
      default: void 0
    },
    onExpandedRowsChange: {
      type: Function,
      default: void 0
    },
    "onUpdate:expandedRowKeys": {
      type: Function,
      default: void 0
    },
    defaultExpandAllRows: {
      type: Boolean,
      default: void 0
    },
    indentSize: {
      type: Number,
      default: void 0
    },
    expandIconColumnIndex: {
      type: Number,
      default: void 0
    },
    showExpandColumn: {
      type: Boolean,
      default: void 0
    },
    expandedRowClassName: {
      type: Function,
      default: void 0
    },
    childrenColumnName: {
      type: String,
      default: void 0
    },
    rowExpandable: {
      type: Function,
      default: void 0
    },
    sticky: {
      type: [Boolean, Object],
      default: void 0
    },
    dropdownPrefixCls: String,
    dataSource: {
      type: Array,
      default: void 0
    },
    pagination: {
      type: [Boolean, Object],
      default: void 0
    },
    loading: {
      type: [Boolean, Object],
      default: void 0
    },
    size: {
      type: String,
      default: void 0
    },
    bordered: Boolean,
    locale: {
      type: Object,
      default: void 0
    },
    onChange: {
      type: Function,
      default: void 0
    },
    onResizeColumn: {
      type: Function,
      default: void 0
    },
    rowSelection: {
      type: Object,
      default: void 0
    },
    getPopupContainer: {
      type: Function,
      default: void 0
    },
    scroll: {
      type: Object,
      default: void 0
    },
    sortDirections: {
      type: Array,
      default: void 0
    },
    showSorterTooltip: {
      type: [Boolean, Object],
      default: true
    },
    contextSlots: {
      type: Object
    },
    transformCellText: {
      type: Function
    }
  };
};
var InteralTable = defineComponent({
  name: "InteralTable",
  inheritAttrs: false,
  props: initDefaultProps(tableProps(), {
    rowKey: "key"
  }),
  slots: ["emptyText", "expandIcon", "title", "footer", "summary", "expandedRowRender", "bodyCell", "headerCell", "customFilterIcon", "customFilterDropdown"],
  setup: function setup27(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots, expose = _ref.expose, emit = _ref.emit;
    devWarning(!(typeof props.rowKey === "function" && props.rowKey.length > 1), "Table", "`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected.");
    useProvideSlots(computed(function() {
      return props.contextSlots;
    }));
    useProvideTableContext({
      onResizeColumn: function onResizeColumn(w, col) {
        emit("resizeColumn", w, col);
      }
    });
    var screens = useBreakpoint();
    var mergedColumns = computed(function() {
      var matched = new Set(Object.keys(screens.value).filter(function(m) {
        return screens.value[m];
      }));
      return props.columns.filter(function(c) {
        return !c.responsive || c.responsive.some(function(r) {
          return matched.has(r);
        });
      });
    });
    var _useConfigInject = useConfigInject("table", props), mergedSize = _useConfigInject.size, renderEmpty = _useConfigInject.renderEmpty, direction = _useConfigInject.direction, prefixCls = _useConfigInject.prefixCls, configProvider = _useConfigInject.configProvider;
    var transformCellText = computed(function() {
      return props.transformCellText || configProvider.transformCellText;
    });
    var _useLocaleReceiver = useLocaleReceiver("Table", defaultLocale.Table, toRef(props, "locale")), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), tableLocale = _useLocaleReceiver2[0];
    var rawData = computed(function() {
      return props.dataSource || EMPTY_LIST;
    });
    var dropdownPrefixCls = computed(function() {
      return configProvider.getPrefixCls("dropdown", props.dropdownPrefixCls);
    });
    var childrenColumnName = computed(function() {
      return props.childrenColumnName || "children";
    });
    var expandType = computed(function() {
      if (rawData.value.some(function(item) {
        var _a;
        return (_a = item) === null || _a === void 0 ? void 0 : _a[childrenColumnName.value];
      })) {
        return "nest";
      }
      if (props.expandedRowRender) {
        return "row";
      }
      return null;
    });
    var internalRefs = reactive({
      body: null
    });
    var updateInternalRefs = function updateInternalRefs2(refs) {
      _extends(internalRefs, refs);
    };
    var getRowKey = computed(function() {
      if (typeof props.rowKey === "function") {
        return props.rowKey;
      }
      return function(record) {
        var _a;
        return (_a = record) === null || _a === void 0 ? void 0 : _a[props.rowKey];
      };
    });
    var _useLazyKVMap = useLazyKVMap(rawData, childrenColumnName, getRowKey), _useLazyKVMap2 = _slicedToArray(_useLazyKVMap, 1), getRecordByKey = _useLazyKVMap2[0];
    var changeEventInfo = {};
    var triggerOnChange = function triggerOnChange2(info, action) {
      var reset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var pagination = props.pagination, scroll = props.scroll, onChange = props.onChange;
      var changeInfo = _extends(_extends({}, changeEventInfo), info);
      if (reset) {
        changeEventInfo.resetPagination();
        if (changeInfo.pagination.current) {
          changeInfo.pagination.current = 1;
        }
        if (pagination && pagination.onChange) {
          pagination.onChange(1, changeInfo.pagination.pageSize);
        }
      }
      if (scroll && scroll.scrollToFirstRowOnChange !== false && internalRefs.body) {
        scrollTo(0, {
          getContainer: function getContainer() {
            return internalRefs.body;
          }
        });
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo.pagination, changeInfo.filters, changeInfo.sorter, {
        currentDataSource: getFilterData(getSortData(rawData.value, changeInfo.sorterStates, childrenColumnName.value), changeInfo.filterStates),
        action
      });
    };
    var onSorterChange = function onSorterChange2(sorter, sorterStates) {
      triggerOnChange({
        sorter,
        sorterStates
      }, "sort", false);
    };
    var _useSorter = useFilterSorter({
      prefixCls,
      mergedColumns,
      onSorterChange,
      sortDirections: computed(function() {
        return props.sortDirections || ["ascend", "descend"];
      }),
      tableLocale,
      showSorterTooltip: toRef(props, "showSorterTooltip")
    }), _useSorter2 = _slicedToArray(_useSorter, 4), transformSorterColumns = _useSorter2[0], sortStates = _useSorter2[1], sorterTitleProps = _useSorter2[2], sorters = _useSorter2[3];
    var sortedData = computed(function() {
      return getSortData(rawData.value, sortStates.value, childrenColumnName.value);
    });
    var onFilterChange = function onFilterChange2(filters2, filterStates2) {
      triggerOnChange({
        filters: filters2,
        filterStates: filterStates2
      }, "filter", true);
    };
    var _useFilter = useFilter({
      prefixCls,
      locale: tableLocale,
      dropdownPrefixCls,
      mergedColumns,
      onFilterChange,
      getPopupContainer: toRef(props, "getPopupContainer")
    }), _useFilter2 = _slicedToArray(_useFilter, 3), transformFilterColumns = _useFilter2[0], filterStates = _useFilter2[1], filters = _useFilter2[2];
    var mergedData = computed(function() {
      return getFilterData(sortedData.value, filterStates.value);
    });
    var _useColumns = useColumns(toRef(props, "contextSlots")), _useColumns2 = _slicedToArray(_useColumns, 1), transformBasicColumns = _useColumns2[0];
    var columnTitleProps = computed(function() {
      return _extends({}, sorterTitleProps.value);
    });
    var _useTitleColumns = useTitleColumns(columnTitleProps), _useTitleColumns2 = _slicedToArray(_useTitleColumns, 1), transformTitleColumns = _useTitleColumns2[0];
    var onPaginationChange = function onPaginationChange2(current, pageSize) {
      triggerOnChange({
        pagination: _extends(_extends({}, changeEventInfo.pagination), {
          current,
          pageSize
        })
      }, "paginate");
    };
    var _usePagination = usePagination(computed(function() {
      return mergedData.value.length;
    }), toRef(props, "pagination"), onPaginationChange), _usePagination2 = _slicedToArray(_usePagination, 2), mergedPagination = _usePagination2[0], resetPagination = _usePagination2[1];
    watchEffect(function() {
      changeEventInfo.sorter = sorters.value;
      changeEventInfo.sorterStates = sortStates.value;
      changeEventInfo.filters = filters.value;
      changeEventInfo.filterStates = filterStates.value;
      changeEventInfo.pagination = props.pagination === false ? {} : getPaginationParam(props.pagination, mergedPagination.value);
      changeEventInfo.resetPagination = resetPagination;
    });
    var pageData = computed(function() {
      if (props.pagination === false || !mergedPagination.value.pageSize) {
        return mergedData.value;
      }
      var _mergedPagination$val = mergedPagination.value, _mergedPagination$val2 = _mergedPagination$val.current, current = _mergedPagination$val2 === void 0 ? 1 : _mergedPagination$val2, total = _mergedPagination$val.total, _mergedPagination$val3 = _mergedPagination$val.pageSize, pageSize = _mergedPagination$val3 === void 0 ? DEFAULT_PAGE_SIZE : _mergedPagination$val3;
      devWarning(current > 0, "Table", "`current` should be positive number.");
      if (mergedData.value.length < total) {
        if (mergedData.value.length > pageSize) {
          return mergedData.value.slice((current - 1) * pageSize, current * pageSize);
        }
        return mergedData.value;
      }
      return mergedData.value.slice((current - 1) * pageSize, current * pageSize);
    });
    watchEffect(function() {
      nextTick(function() {
        var _mergedPagination$val4 = mergedPagination.value, total = _mergedPagination$val4.total, _mergedPagination$val5 = _mergedPagination$val4.pageSize, pageSize = _mergedPagination$val5 === void 0 ? DEFAULT_PAGE_SIZE : _mergedPagination$val5;
        if (mergedData.value.length < total) {
          if (mergedData.value.length > pageSize) {
            devWarning(false, "Table", "`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode.");
          }
        }
      });
    }, {
      flush: "post"
    });
    var expandIconColumnIndex = computed(function() {
      if (props.showExpandColumn === false)
        return -1;
      if (expandType.value === "nest" && props.expandIconColumnIndex === void 0) {
        return props.rowSelection ? 1 : 0;
      } else if (props.expandIconColumnIndex > 0 && props.rowSelection) {
        return props.expandIconColumnIndex - 1;
      }
      return props.expandIconColumnIndex;
    });
    var rowSelection = ref();
    watch(function() {
      return props.rowSelection;
    }, function() {
      rowSelection.value = props.rowSelection ? _extends({}, props.rowSelection) : props.rowSelection;
    }, {
      deep: true,
      immediate: true
    });
    var _useSelection = useSelection(rowSelection, {
      prefixCls,
      data: mergedData,
      pageData,
      getRowKey,
      getRecordByKey,
      expandType,
      childrenColumnName,
      locale: tableLocale,
      getPopupContainer: computed(function() {
        return props.getPopupContainer;
      })
    }), _useSelection2 = _slicedToArray(_useSelection, 2), transformSelectionColumns = _useSelection2[0], selectedKeySet = _useSelection2[1];
    var internalRowClassName = function internalRowClassName2(record, index, indent) {
      var mergedRowClassName;
      var rowClassName = props.rowClassName;
      if (typeof rowClassName === "function") {
        mergedRowClassName = classNames(rowClassName(record, index, indent));
      } else {
        mergedRowClassName = classNames(rowClassName);
      }
      return classNames(_defineProperty$9({}, "".concat(prefixCls.value, "-row-selected"), selectedKeySet.value.has(getRowKey.value(record, index))), mergedRowClassName);
    };
    expose({
      selectedKeySet
    });
    var indentSize = computed(function() {
      return typeof props.indentSize === "number" ? props.indentSize : 15;
    });
    var transformColumns = function transformColumns2(innerColumns) {
      var res = transformTitleColumns(transformSelectionColumns(transformFilterColumns(transformSorterColumns(transformBasicColumns(innerColumns)))));
      return res;
    };
    return function() {
      var _classNames3;
      var _a;
      var _props$expandIcon = props.expandIcon, expandIcon = _props$expandIcon === void 0 ? slots.expandIcon || renderExpandIcon(tableLocale.value) : _props$expandIcon, pagination = props.pagination, loading = props.loading, bordered = props.bordered;
      var topPaginationNode;
      var bottomPaginationNode;
      if (pagination !== false && ((_a = mergedPagination.value) === null || _a === void 0 ? void 0 : _a.total)) {
        var paginationSize;
        if (mergedPagination.value.size) {
          paginationSize = mergedPagination.value.size;
        } else {
          paginationSize = mergedSize.value === "small" || mergedSize.value === "middle" ? "small" : void 0;
        }
        var renderPagination = function renderPagination2(position2) {
          return createVNode(__unplugin_components_5, _objectSpread2(_objectSpread2({}, mergedPagination.value), {}, {
            "class": ["".concat(prefixCls.value, "-pagination ").concat(prefixCls.value, "-pagination-").concat(position2), mergedPagination.value.class],
            "size": paginationSize
          }), null);
        };
        var defaultPosition = direction.value === "rtl" ? "left" : "right";
        var position = mergedPagination.value.position;
        if (position !== null && Array.isArray(position)) {
          var topPos = position.find(function(p) {
            return p.indexOf("top") !== -1;
          });
          var bottomPos = position.find(function(p) {
            return p.indexOf("bottom") !== -1;
          });
          var isDisable = position.every(function(p) {
            return "".concat(p) === "none";
          });
          if (!topPos && !bottomPos && !isDisable) {
            bottomPaginationNode = renderPagination(defaultPosition);
          }
          if (topPos) {
            topPaginationNode = renderPagination(topPos.toLowerCase().replace("top", ""));
          }
          if (bottomPos) {
            bottomPaginationNode = renderPagination(bottomPos.toLowerCase().replace("bottom", ""));
          }
        } else {
          bottomPaginationNode = renderPagination(defaultPosition);
        }
      }
      var spinProps;
      if (typeof loading === "boolean") {
        spinProps = {
          spinning: loading
        };
      } else if (_typeof(loading) === "object") {
        spinProps = _extends({
          spinning: true
        }, loading);
      }
      var wrapperClassNames = classNames("".concat(prefixCls.value, "-wrapper"), _defineProperty$9({}, "".concat(prefixCls.value, "-wrapper-rtl"), direction.value === "rtl"), attrs.class);
      var tableProps3 = omit(props, ["columns"]);
      return createVNode("div", {
        "class": wrapperClassNames,
        "style": attrs.style
      }, [createVNode(Spin, _objectSpread2({
        "spinning": false
      }, spinProps), {
        default: function _default() {
          return [topPaginationNode, createVNode(Table$2, _objectSpread2(_objectSpread2(_objectSpread2({}, attrs), tableProps3), {}, {
            "expandedRowKeys": props.expandedRowKeys,
            "defaultExpandedRowKeys": props.defaultExpandedRowKeys,
            "expandIconColumnIndex": expandIconColumnIndex.value,
            "indentSize": indentSize.value,
            "expandIcon": expandIcon,
            "columns": mergedColumns.value,
            "direction": direction.value,
            "prefixCls": prefixCls.value,
            "class": classNames((_classNames3 = {}, _defineProperty$9(_classNames3, "".concat(prefixCls.value, "-middle"), mergedSize.value === "middle"), _defineProperty$9(_classNames3, "".concat(prefixCls.value, "-small"), mergedSize.value === "small"), _defineProperty$9(_classNames3, "".concat(prefixCls.value, "-bordered"), bordered), _defineProperty$9(_classNames3, "".concat(prefixCls.value, "-empty"), rawData.value.length === 0), _classNames3)),
            "data": pageData.value,
            "rowKey": getRowKey.value,
            "rowClassName": internalRowClassName,
            "internalHooks": INTERNAL_HOOKS,
            "internalRefs": internalRefs,
            "onUpdateInternalRefs": updateInternalRefs,
            "transformColumns": transformColumns,
            "transformCellText": transformCellText.value
          }), _extends(_extends({}, slots), {
            emptyText: function emptyText() {
              var _a2, _b;
              return ((_a2 = slots.emptyText) === null || _a2 === void 0 ? void 0 : _a2.call(slots)) || ((_b = props.locale) === null || _b === void 0 ? void 0 : _b.emptyText) || renderEmpty.value("Table");
            }
          })), bottomPaginationNode];
        }
      })]);
    };
  }
});
var Table = defineComponent({
  name: "ATable",
  inheritAttrs: false,
  setup: function setup28(_props, _ref2) {
    var attrs = _ref2.attrs, slots = _ref2.slots, expose = _ref2.expose;
    var table = ref();
    expose({
      table
    });
    return function() {
      var _a;
      var props = attrs;
      var columns = props.columns || convertChildrenToColumns((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      return createVNode(InteralTable, _objectSpread2(_objectSpread2({
        "ref": table
      }, attrs), {}, {
        "columns": columns || [],
        "expandedRowRender": slots.expandedRowRender,
        "contextSlots": _extends({}, slots)
      }), slots);
    };
  }
});
var Table$1 = Table;
var __unplugin_components_10 = defineComponent({
  name: "ATableColumn",
  slots: ["title", "filterIcon"],
  render: function render() {
    return null;
  }
});
var ColumnGroup = defineComponent({
  name: "ATableColumnGroup",
  slots: ["title"],
  __ANT_TABLE_COLUMN_GROUP: true,
  render: function render2() {
    return null;
  }
});
var TableSummaryRow = defineComponent(_extends(_extends({}, SummaryRow), {
  name: "ATableSummaryRow"
}));
var TableSummaryCell = defineComponent(_extends(_extends({}, SummaryCell), {
  name: "ATableSummaryCell"
}));
var TableSummary = _extends(FooterComponents, {
  Cell: TableSummaryCell,
  Row: TableSummaryRow,
  name: "ATableSummary"
});
var __unplugin_components_13 = _extends(Table$1, {
  SELECTION_ALL,
  SELECTION_INVERT,
  SELECTION_NONE,
  SELECTION_COLUMN,
  EXPAND_COLUMN,
  Column: __unplugin_components_10,
  ColumnGroup,
  Summary: TableSummary,
  install: function install2(app) {
    app.component(TableSummary.name, TableSummary);
    app.component(TableSummaryCell.name, TableSummaryCell);
    app.component(TableSummaryRow.name, TableSummaryRow);
    app.component(Table$1.name, Table$1);
    app.component(__unplugin_components_10.name, __unplugin_components_10);
    app.component(ColumnGroup.name, ColumnGroup);
    return app;
  }
});
export { __unplugin_components_10 as _, __unplugin_components_13 as a, __unplugin_components_6 as b };
