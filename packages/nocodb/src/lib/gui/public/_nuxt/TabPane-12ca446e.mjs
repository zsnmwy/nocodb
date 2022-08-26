import { r as ref, aY as wrapperRaf, a_ as onBeforeUnmount, d as defineComponent, e as computed, g as createVNode, aX as KeyCode, aD as classNames, aJ as _defineProperty$1, a6 as watchEffect, aC as _extends, b0 as _slicedToArray, s as onMounted, w as watch, ck as EllipsisOutlined, a1 as Menu, Y as __unplugin_components_0, aH as PropTypes, p as provide, i as inject, ax as toRefs, a$ as onBeforeUpdate, c7 as isObject, d0 as castPath, d1 as toKey, d2 as isIndex, d3 as assignValue, d4 as baseGet, d5 as hasIn, d6 as flatRest, aW as _toConsumableArray, d7 as toPx, co as ResizeObserver, aK as _objectSpread2, aG as cloneElement, bd as AntdIcon, bj as initDefaultProps, aM as flattenChildren, c9 as isValidElement, d8 as camelize, bf as devWarning, aE as useConfigInject, aN as _typeof, bc as CloseOutlined } from "./entry-61ceea7f.mjs";
import { D as Dropdown } from "./Dropdown-9f66da27.mjs";
import { a as useState, i as isMobile, u as useMergedState } from "./useState-068748ba.mjs";
import { o as omit } from "./omit-173fd1c5.mjs";
function useRaf(callback) {
  var rafRef = ref();
  var removedRef = ref(false);
  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!removedRef.value) {
      wrapperRaf.cancel(rafRef.value);
      rafRef.value = wrapperRaf(function() {
        callback.apply(void 0, args);
      });
    }
  }
  onBeforeUnmount(function() {
    removedRef.value = true;
    wrapperRaf.cancel(rafRef.value);
  });
  return trigger;
}
function useRafState(defaultState) {
  var batchRef = ref([]);
  var state = ref(typeof defaultState === "function" ? defaultState() : defaultState);
  var flushUpdate = useRaf(function() {
    var value = state.value;
    batchRef.value.forEach(function(callback) {
      value = callback(value);
    });
    batchRef.value = [];
    state.value = value;
  });
  function updater(callback) {
    batchRef.value.push(callback);
    flushUpdate();
  }
  return [state, updater];
}
var TabNode = defineComponent({
  name: "TabNode",
  props: {
    id: {
      type: String
    },
    prefixCls: {
      type: String
    },
    tab: {
      type: Object
    },
    active: {
      type: Boolean
    },
    closable: {
      type: Boolean
    },
    editable: {
      type: Object
    },
    onClick: {
      type: Function
    },
    onResize: {
      type: Function
    },
    renderWrapper: {
      type: Function
    },
    removeAriaLabel: {
      type: String
    },
    onFocus: {
      type: Function
    }
  },
  emits: ["click", "resize", "remove", "focus"],
  setup: function setup(props, _ref) {
    var expose = _ref.expose, attrs = _ref.attrs;
    var domRef = ref();
    function onInternalClick(e) {
      var _a;
      if ((_a = props.tab) === null || _a === void 0 ? void 0 : _a.disabled) {
        return;
      }
      props.onClick(e);
    }
    expose({
      domRef
    });
    function onRemoveTab(event) {
      var _a;
      event.preventDefault();
      event.stopPropagation();
      props.editable.onEdit("remove", {
        key: (_a = props.tab) === null || _a === void 0 ? void 0 : _a.key,
        event
      });
    }
    var removable = computed(function() {
      var _a;
      return props.editable && props.closable !== false && !((_a = props.tab) === null || _a === void 0 ? void 0 : _a.disabled);
    });
    return function() {
      var _classNames;
      var _a;
      var prefixCls = props.prefixCls, id = props.id, active = props.active, _props$tab = props.tab, key = _props$tab.key, tab = _props$tab.tab, disabled = _props$tab.disabled, closeIcon = _props$tab.closeIcon, renderWrapper = props.renderWrapper, removeAriaLabel = props.removeAriaLabel, editable = props.editable, onFocus = props.onFocus;
      var tabPrefix = "".concat(prefixCls, "-tab");
      var node = createVNode("div", {
        "key": key,
        "ref": domRef,
        "class": classNames(tabPrefix, (_classNames = {}, _defineProperty$1(_classNames, "".concat(tabPrefix, "-with-remove"), removable.value), _defineProperty$1(_classNames, "".concat(tabPrefix, "-active"), active), _defineProperty$1(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
        "style": attrs.style,
        "onClick": onInternalClick
      }, [createVNode("div", {
        "role": "tab",
        "aria-selected": active,
        "id": id && "".concat(id, "-tab-").concat(key),
        "class": "".concat(tabPrefix, "-btn"),
        "aria-controls": id && "".concat(id, "-panel-").concat(key),
        "aria-disabled": disabled,
        "tabindex": disabled ? null : 0,
        "onClick": function onClick(e) {
          e.stopPropagation();
          onInternalClick(e);
        },
        "onKeydown": function onKeydown(e) {
          if ([KeyCode.SPACE, KeyCode.ENTER].includes(e.which)) {
            e.preventDefault();
            onInternalClick(e);
          }
        },
        "onFocus": onFocus
      }, [typeof tab === "function" ? tab() : tab]), removable.value && createVNode("button", {
        "type": "button",
        "aria-label": removeAriaLabel || "remove",
        "tabindex": 0,
        "class": "".concat(tabPrefix, "-remove"),
        "onClick": function onClick(e) {
          e.stopPropagation();
          onRemoveTab(e);
        }
      }, [(closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon()) || ((_a = editable.removeIcon) === null || _a === void 0 ? void 0 : _a.call(editable)) || "\xD7"])]);
      return renderWrapper ? renderWrapper(node) : node;
    };
  }
});
var DEFAULT_SIZE$1 = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes) {
  var offsetMap = ref(/* @__PURE__ */ new Map());
  watchEffect(function() {
    var _a, _b;
    var map = /* @__PURE__ */ new Map();
    var tabsValue = tabs.value;
    var lastOffset = tabSizes.value.get((_a = tabsValue[0]) === null || _a === void 0 ? void 0 : _a.key) || DEFAULT_SIZE$1;
    var rightOffset = lastOffset.left + lastOffset.width;
    for (var i = 0; i < tabsValue.length; i += 1) {
      var key = tabsValue[i].key;
      var data = tabSizes.value.get(key);
      if (!data) {
        data = tabSizes.value.get((_b = tabsValue[i - 1]) === null || _b === void 0 ? void 0 : _b.key) || DEFAULT_SIZE$1;
      }
      var entity = map.get(key) || _extends({}, data);
      entity.right = rightOffset - entity.left - entity.width;
      map.set(key, entity);
    }
    offsetMap.value = new Map(map);
  });
  return offsetMap;
}
var AddButton = defineComponent({
  name: "AddButton",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    editable: {
      type: Object
    },
    locale: {
      type: Object,
      default: void 0
    }
  },
  setup: function setup2(props, _ref) {
    var expose = _ref.expose, attrs = _ref.attrs;
    var domRef = ref();
    expose({
      domRef
    });
    return function() {
      var prefixCls = props.prefixCls, editable = props.editable, locale = props.locale;
      if (!editable || editable.showAdd === false) {
        return null;
      }
      return createVNode("button", {
        "ref": domRef,
        "type": "button",
        "class": "".concat(prefixCls, "-nav-add"),
        "style": attrs.style,
        "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || "Add tab",
        "onClick": function onClick(event) {
          editable.onEdit("add", {
            event
          });
        }
      }, [editable.addIcon ? editable.addIcon() : "+"]);
    };
  }
});
var operationNodeProps = {
  prefixCls: {
    type: String
  },
  id: {
    type: String
  },
  tabs: {
    type: Object
  },
  rtl: {
    type: Boolean
  },
  tabBarGutter: {
    type: Number
  },
  activeKey: {
    type: [String, Number]
  },
  mobile: {
    type: Boolean
  },
  moreIcon: PropTypes.any,
  moreTransitionName: {
    type: String
  },
  editable: {
    type: Object
  },
  locale: {
    type: Object,
    default: void 0
  },
  removeAriaLabel: String,
  onTabClick: {
    type: Function
  }
};
var OperationNode = defineComponent({
  name: "OperationNode",
  inheritAttrs: false,
  props: operationNodeProps,
  emits: ["tabClick"],
  slots: ["moreIcon"],
  setup: function setup3(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), open = _useState2[0], setOpen = _useState2[1];
    var _useState3 = useState(null), _useState4 = _slicedToArray(_useState3, 2), selectedKey = _useState4[0], setSelectedKey = _useState4[1];
    var selectOffset = function selectOffset2(offset) {
      var enabledTabs = props.tabs.filter(function(tab2) {
        return !tab2.disabled;
      });
      var selectedIndex = enabledTabs.findIndex(function(tab2) {
        return tab2.key === selectedKey.value;
      }) || 0;
      var len = enabledTabs.length;
      for (var i = 0; i < len; i += 1) {
        selectedIndex = (selectedIndex + offset + len) % len;
        var tab = enabledTabs[selectedIndex];
        if (!tab.disabled) {
          setSelectedKey(tab.key);
          return;
        }
      }
    };
    var onKeyDown = function onKeyDown2(e) {
      var which = e.which;
      if (!open.value) {
        if ([KeyCode.DOWN, KeyCode.SPACE, KeyCode.ENTER].includes(which)) {
          setOpen(true);
          e.preventDefault();
        }
        return;
      }
      switch (which) {
        case KeyCode.UP:
          selectOffset(-1);
          e.preventDefault();
          break;
        case KeyCode.DOWN:
          selectOffset(1);
          e.preventDefault();
          break;
        case KeyCode.ESC:
          setOpen(false);
          break;
        case KeyCode.SPACE:
        case KeyCode.ENTER:
          if (selectedKey.value !== null)
            props.onTabClick(selectedKey.value, e);
          break;
      }
    };
    var popupId = computed(function() {
      return "".concat(props.id, "-more-popup");
    });
    var selectedItemId = computed(function() {
      return selectedKey.value !== null ? "".concat(popupId.value, "-").concat(selectedKey.value) : null;
    });
    var onRemoveTab = function onRemoveTab2(event, key) {
      event.preventDefault();
      event.stopPropagation();
      props.editable.onEdit("remove", {
        key,
        event
      });
    };
    onMounted(function() {
      watch(selectedKey, function() {
        var ele = document.getElementById(selectedItemId.value);
        if (ele && ele.scrollIntoView) {
          ele.scrollIntoView(false);
        }
      }, {
        flush: "post",
        immediate: true
      });
    });
    watch(open, function() {
      if (!open.value) {
        setSelectedKey(null);
      }
    });
    return function() {
      var _a;
      var prefixCls = props.prefixCls, id = props.id, tabs = props.tabs, locale = props.locale, mobile = props.mobile, _props$moreIcon = props.moreIcon, moreIcon = _props$moreIcon === void 0 ? ((_a = slots.moreIcon) === null || _a === void 0 ? void 0 : _a.call(slots)) || createVNode(EllipsisOutlined, null, null) : _props$moreIcon, moreTransitionName = props.moreTransitionName, editable = props.editable, tabBarGutter = props.tabBarGutter, rtl = props.rtl, onTabClick = props.onTabClick;
      var dropdownPrefix = "".concat(prefixCls, "-dropdown");
      var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
      var moreStyle = _defineProperty$1({}, rtl ? "marginRight" : "marginLeft", tabBarGutter);
      if (!tabs.length) {
        moreStyle.visibility = "hidden";
        moreStyle.order = 1;
      }
      var overlayClassName = classNames(_defineProperty$1({}, "".concat(dropdownPrefix, "-rtl"), rtl));
      var moreNode = mobile ? null : createVNode(Dropdown, {
        "prefixCls": dropdownPrefix,
        "trigger": ["hover"],
        "visible": open.value,
        "transitionName": moreTransitionName,
        "onVisibleChange": setOpen,
        "overlayClassName": overlayClassName,
        "mouseEnterDelay": 0.1,
        "mouseLeaveDelay": 0.1
      }, {
        overlay: function overlay() {
          return createVNode(Menu, {
            "onClick": function onClick(_ref2) {
              var key = _ref2.key, domEvent = _ref2.domEvent;
              onTabClick(key, domEvent);
              setOpen(false);
            },
            "id": popupId.value,
            "tabindex": -1,
            "role": "listbox",
            "aria-activedescendant": selectedItemId.value,
            "selectedKeys": [selectedKey.value],
            "aria-label": dropdownAriaLabel !== void 0 ? dropdownAriaLabel : "expanded dropdown"
          }, {
            default: function _default() {
              return [tabs.map(function(tab) {
                var _a2, _b;
                var removable = editable && tab.closable !== false && !tab.disabled;
                return createVNode(__unplugin_components_0, {
                  "key": tab.key,
                  "id": "".concat(popupId.value, "-").concat(tab.key),
                  "role": "option",
                  "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
                  "disabled": tab.disabled
                }, {
                  default: function _default2() {
                    return [createVNode("span", null, [typeof tab.tab === "function" ? tab.tab() : tab.tab]), removable && createVNode("button", {
                      "type": "button",
                      "aria-label": props.removeAriaLabel || "remove",
                      "tabindex": 0,
                      "class": "".concat(dropdownPrefix, "-menu-item-remove"),
                      "onClick": function onClick(e) {
                        e.stopPropagation();
                        onRemoveTab(e, tab.key);
                      }
                    }, [((_a2 = tab.closeIcon) === null || _a2 === void 0 ? void 0 : _a2.call(tab)) || ((_b = editable.removeIcon) === null || _b === void 0 ? void 0 : _b.call(editable)) || "\xD7"])];
                  }
                });
              })];
            }
          });
        },
        default: function _default() {
          return createVNode("button", {
            "type": "button",
            "class": "".concat(prefixCls, "-nav-more"),
            "style": moreStyle,
            "tabindex": -1,
            "aria-hidden": "true",
            "aria-haspopup": "listbox",
            "aria-controls": popupId.value,
            "id": "".concat(id, "-more"),
            "aria-expanded": open.value,
            "onKeydown": onKeyDown
          }, [moreIcon]);
        }
      });
      return createVNode("div", {
        "class": classNames("".concat(prefixCls, "-nav-operations"), attrs.class),
        "style": attrs.style
      }, [moreNode, createVNode(AddButton, {
        "prefixCls": prefixCls,
        "locale": locale,
        "editable": editable
      }, null)]);
    };
  }
});
var TabsContextKey = Symbol("tabsContextKey");
var useProvideTabs = function useProvideTabs2(props) {
  provide(TabsContextKey, props);
};
var useInjectTabs = function useInjectTabs2() {
  return inject(TabsContextKey, {
    tabs: ref([]),
    prefixCls: ref()
  });
};
defineComponent({
  name: "TabsContextProvider",
  inheritAttrs: false,
  props: {
    tabs: {
      type: Object,
      default: void 0
    },
    prefixCls: {
      type: String,
      default: void 0
    }
  },
  setup: function setup4(props, _ref) {
    var slots = _ref.slots;
    useProvideTabs(toRefs(props));
    return function() {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
function useTouchMove(domRef, onOffset) {
  var _useState = useState(), _useState2 = _slicedToArray(_useState, 2), touchPosition = _useState2[0], setTouchPosition = _useState2[1];
  var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), lastTimestamp = _useState4[0], setLastTimestamp = _useState4[1];
  var _useState5 = useState(0), _useState6 = _slicedToArray(_useState5, 2), lastTimeDiff = _useState6[0], setLastTimeDiff = _useState6[1];
  var _useState7 = useState(), _useState8 = _slicedToArray(_useState7, 2), lastOffset = _useState8[0], setLastOffset = _useState8[1];
  var motionInterval = ref();
  function onTouchStart(e) {
    var _e$touches$ = e.touches[0], screenX = _e$touches$.screenX, screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    clearInterval(motionInterval.value);
  }
  function onTouchMove(e) {
    if (!touchPosition.value)
      return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0], screenX = _e$touches$2.screenX, screenY = _e$touches$2.screenY;
    var offsetX = screenX - touchPosition.value.x;
    var offsetY = screenY - touchPosition.value.y;
    onOffset(offsetX, offsetY);
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var now = Date.now();
    setLastTimeDiff(now - lastTimestamp.value);
    setLastTimestamp(now);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition.value)
      return;
    var lastOffsetValue = lastOffset.value;
    setTouchPosition(null);
    setLastOffset(null);
    if (lastOffsetValue) {
      var distanceX = lastOffsetValue.x / lastTimeDiff.value;
      var distanceY = lastOffsetValue.y / lastTimeDiff.value;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY);
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE)
        return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionInterval.value = setInterval(function() {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          clearInterval(motionInterval.value);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }
  var lastWheelDirectionRef = ref();
  function onWheel(e) {
    var deltaX = e.deltaX, deltaY = e.deltaY;
    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.value === "x" ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.value = "x";
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.value = "y";
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }
  var touchEventsRef = ref({
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onWheel
  });
  function onProxyTouchStart(e) {
    touchEventsRef.value.onTouchStart(e);
  }
  function onProxyTouchMove(e) {
    touchEventsRef.value.onTouchMove(e);
  }
  function onProxyTouchEnd(e) {
    touchEventsRef.value.onTouchEnd(e);
  }
  function onProxyWheel(e) {
    touchEventsRef.value.onWheel(e);
  }
  onMounted(function() {
    var _a, _b;
    document.addEventListener("touchmove", onProxyTouchMove, {
      passive: false
    });
    document.addEventListener("touchend", onProxyTouchEnd, {
      passive: false
    });
    (_a = domRef.value) === null || _a === void 0 ? void 0 : _a.addEventListener("touchstart", onProxyTouchStart, {
      passive: false
    });
    (_b = domRef.value) === null || _b === void 0 ? void 0 : _b.addEventListener("wheel", onProxyWheel, {
      passive: false
    });
  });
  onBeforeUnmount(function() {
    document.removeEventListener("touchmove", onProxyTouchMove);
    document.removeEventListener("touchend", onProxyTouchEnd);
  });
}
function useSyncState(defaultState, onChange) {
  var stateRef = ref(defaultState);
  function setState(updater) {
    var newValue = typeof updater === "function" ? updater(stateRef.value) : updater;
    if (newValue !== stateRef.value) {
      onChange(newValue, stateRef.value);
    }
    stateRef.value = newValue;
  }
  return [stateRef, setState];
}
var useRefs = function useRefs2() {
  var refs = ref(/* @__PURE__ */ new Map());
  var setRef = function setRef2(key) {
    return function(el) {
      refs.value.set(key, el);
    };
  };
  onBeforeUpdate(function() {
    refs.value = /* @__PURE__ */ new Map();
  });
  return [setRef, refs];
};
var useRefs$1 = useRefs;
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
var pick$1 = pick;
var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
var tabNavListProps = function tabNavListProps2() {
  return {
    id: {
      type: String
    },
    tabPosition: {
      type: String
    },
    activeKey: {
      type: [String, Number]
    },
    rtl: {
      type: Boolean
    },
    animated: {
      type: Object,
      default: void 0
    },
    editable: {
      type: Object
    },
    moreIcon: PropTypes.any,
    moreTransitionName: {
      type: String
    },
    mobile: {
      type: Boolean
    },
    tabBarGutter: {
      type: Number
    },
    renderTabBar: {
      type: Function
    },
    locale: {
      type: Object,
      default: void 0
    },
    onTabClick: {
      type: Function
    },
    onTabScroll: {
      type: Function
    }
  };
};
var TabNavList = defineComponent({
  name: "TabNavList",
  inheritAttrs: false,
  props: tabNavListProps(),
  slots: ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"],
  emits: ["tabClick", "tabScroll"],
  setup: function setup5(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var _useInjectTabs = useInjectTabs(), tabs = _useInjectTabs.tabs, prefixCls = _useInjectTabs.prefixCls;
    var tabsWrapperRef = ref();
    var tabListRef = ref();
    var operationsRef = ref();
    var innerAddButtonRef = ref();
    var _useRefs = useRefs$1(), _useRefs2 = _slicedToArray(_useRefs, 2), setRef = _useRefs2[0], btnRefs = _useRefs2[1];
    var tabPositionTopOrBottom = computed(function() {
      return props.tabPosition === "top" || props.tabPosition === "bottom";
    });
    var _useSyncState = useSyncState(0, function(next, prev) {
      if (tabPositionTopOrBottom.value && props.onTabScroll) {
        props.onTabScroll({
          direction: next > prev ? "left" : "right"
        });
      }
    }), _useSyncState2 = _slicedToArray(_useSyncState, 2), transformLeft = _useSyncState2[0], setTransformLeft = _useSyncState2[1];
    var _useSyncState3 = useSyncState(0, function(next, prev) {
      if (!tabPositionTopOrBottom.value && props.onTabScroll) {
        props.onTabScroll({
          direction: next > prev ? "top" : "bottom"
        });
      }
    }), _useSyncState4 = _slicedToArray(_useSyncState3, 2), transformTop = _useSyncState4[0], setTransformTop = _useSyncState4[1];
    var _useState = useState(0), _useState2 = _slicedToArray(_useState, 2), wrapperScrollWidth = _useState2[0], setWrapperScrollWidth = _useState2[1];
    var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), wrapperScrollHeight = _useState4[0], setWrapperScrollHeight = _useState4[1];
    var _useState5 = useState(null), _useState6 = _slicedToArray(_useState5, 2), wrapperWidth = _useState6[0], setWrapperWidth = _useState6[1];
    var _useState7 = useState(null), _useState8 = _slicedToArray(_useState7, 2), wrapperHeight = _useState8[0], setWrapperHeight = _useState8[1];
    var _useState9 = useState(0), _useState10 = _slicedToArray(_useState9, 2), addWidth = _useState10[0], setAddWidth = _useState10[1];
    var _useState11 = useState(0), _useState12 = _slicedToArray(_useState11, 2), addHeight = _useState12[0], setAddHeight = _useState12[1];
    var _useRafState = useRafState(/* @__PURE__ */ new Map()), _useRafState2 = _slicedToArray(_useRafState, 2), tabSizes = _useRafState2[0], setTabSizes = _useRafState2[1];
    var tabOffsets = useOffsets(tabs, tabSizes);
    var operationsHiddenClassName = computed(function() {
      return "".concat(prefixCls.value, "-nav-operations-hidden");
    });
    var transformMin = ref(0);
    var transformMax = ref(0);
    watchEffect(function() {
      if (!tabPositionTopOrBottom.value) {
        transformMin.value = Math.min(0, wrapperHeight.value - wrapperScrollHeight.value);
        transformMax.value = 0;
      } else if (props.rtl) {
        transformMin.value = 0;
        transformMax.value = Math.max(0, wrapperScrollWidth.value - wrapperWidth.value);
      } else {
        transformMin.value = Math.min(0, wrapperWidth.value - wrapperScrollWidth.value);
        transformMax.value = 0;
      }
    });
    var alignInRange = function alignInRange2(value) {
      if (value < transformMin.value) {
        return transformMin.value;
      }
      if (value > transformMax.value) {
        return transformMax.value;
      }
      return value;
    };
    var touchMovingRef = ref();
    var _useState13 = useState(), _useState14 = _slicedToArray(_useState13, 2), lockAnimation = _useState14[0], setLockAnimation = _useState14[1];
    var doLockAnimation = function doLockAnimation2() {
      setLockAnimation(Date.now());
    };
    var clearTouchMoving = function clearTouchMoving2() {
      clearTimeout(touchMovingRef.value);
    };
    var doMove = function doMove2(setState, offset) {
      setState(function(value) {
        var newValue = alignInRange(value + offset);
        return newValue;
      });
    };
    useTouchMove(tabsWrapperRef, function(offsetX, offsetY) {
      if (tabPositionTopOrBottom.value) {
        if (wrapperWidth.value >= wrapperScrollWidth.value) {
          return false;
        }
        doMove(setTransformLeft, offsetX);
      } else {
        if (wrapperHeight.value >= wrapperScrollHeight.value) {
          return false;
        }
        doMove(setTransformTop, offsetY);
      }
      clearTouchMoving();
      doLockAnimation();
      return true;
    });
    watch(lockAnimation, function() {
      clearTouchMoving();
      if (lockAnimation.value) {
        touchMovingRef.value = setTimeout(function() {
          setLockAnimation(0);
        }, 100);
      }
    });
    var scrollToTab = function scrollToTab2() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props.activeKey;
      var tabOffset = tabOffsets.value.get(key) || {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0
      };
      if (tabPositionTopOrBottom.value) {
        var newTransform = transformLeft.value;
        if (props.rtl) {
          if (tabOffset.right < transformLeft.value) {
            newTransform = tabOffset.right;
          } else if (tabOffset.right + tabOffset.width > transformLeft.value + wrapperWidth.value) {
            newTransform = tabOffset.right + tabOffset.width - wrapperWidth.value;
          }
        } else if (tabOffset.left < -transformLeft.value) {
          newTransform = -tabOffset.left;
        } else if (tabOffset.left + tabOffset.width > -transformLeft.value + wrapperWidth.value) {
          newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth.value);
        }
        setTransformTop(0);
        setTransformLeft(alignInRange(newTransform));
      } else {
        var _newTransform = transformTop.value;
        if (tabOffset.top < -transformTop.value) {
          _newTransform = -tabOffset.top;
        } else if (tabOffset.top + tabOffset.height > -transformTop.value + wrapperHeight.value) {
          _newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight.value);
        }
        setTransformLeft(0);
        setTransformTop(alignInRange(_newTransform));
      }
    };
    var visibleStart = ref(0);
    var visibleEnd = ref(0);
    watchEffect(function() {
      var _ref3;
      var unit;
      var position;
      var transformSize;
      var basicSize;
      var tabContentSize;
      var addSize;
      var tabOffsetsValue = tabOffsets.value;
      if (["top", "bottom"].includes(props.tabPosition)) {
        unit = "width";
        basicSize = wrapperWidth.value;
        tabContentSize = wrapperScrollWidth.value;
        addSize = addWidth.value;
        position = props.rtl ? "right" : "left";
        transformSize = Math.abs(transformLeft.value);
      } else {
        unit = "height";
        basicSize = wrapperHeight.value;
        tabContentSize = wrapperScrollWidth.value;
        addSize = addHeight.value;
        position = "top";
        transformSize = -transformTop.value;
      }
      var mergedBasicSize = basicSize;
      if (tabContentSize + addSize > basicSize && tabContentSize < basicSize) {
        mergedBasicSize = basicSize - addSize;
      }
      var tabsVal = tabs.value;
      if (!tabsVal.length) {
        var _ref2;
        return _ref2 = [0, 0], visibleStart.value = _ref2[0], visibleEnd.value = _ref2[1], _ref2;
      }
      var len = tabsVal.length;
      var endIndex = len;
      for (var i = 0; i < len; i += 1) {
        var offset = tabOffsetsValue.get(tabsVal[i].key) || DEFAULT_SIZE;
        if (offset[position] + offset[unit] > transformSize + mergedBasicSize) {
          endIndex = i - 1;
          break;
        }
      }
      var startIndex = 0;
      for (var _i = len - 1; _i >= 0; _i -= 1) {
        var _offset = tabOffsetsValue.get(tabsVal[_i].key) || DEFAULT_SIZE;
        if (_offset[position] < transformSize) {
          startIndex = _i + 1;
          break;
        }
      }
      return _ref3 = [startIndex, endIndex], visibleStart.value = _ref3[0], visibleEnd.value = _ref3[1], _ref3;
    });
    var onListHolderResize = function onListHolderResize2() {
      var _a, _b, _c, _d, _e;
      var offsetWidth = ((_a = tabsWrapperRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
      var offsetHeight = ((_b = tabsWrapperRef.value) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
      var addDom = ((_c = innerAddButtonRef.value) === null || _c === void 0 ? void 0 : _c.$el) || {};
      var newAddWidth = addDom.offsetWidth || 0;
      var newAddHeight = addDom.offsetHeight || 0;
      setWrapperWidth(offsetWidth);
      setWrapperHeight(offsetHeight);
      setAddWidth(newAddWidth);
      setAddHeight(newAddHeight);
      var newWrapperScrollWidth = (((_d = tabListRef.value) === null || _d === void 0 ? void 0 : _d.offsetWidth) || 0) - newAddWidth;
      var newWrapperScrollHeight = (((_e = tabListRef.value) === null || _e === void 0 ? void 0 : _e.offsetHeight) || 0) - newAddHeight;
      setWrapperScrollWidth(newWrapperScrollWidth);
      setWrapperScrollHeight(newWrapperScrollHeight);
      setTabSizes(function() {
        var newSizes = /* @__PURE__ */ new Map();
        tabs.value.forEach(function(_ref4) {
          var key = _ref4.key;
          var _a2;
          var btnRef = btnRefs.value.get(key);
          var btnNode = ((_a2 = btnRef) === null || _a2 === void 0 ? void 0 : _a2.$el) || btnRef;
          if (btnNode) {
            newSizes.set(key, {
              width: btnNode.offsetWidth,
              height: btnNode.offsetHeight,
              left: btnNode.offsetLeft,
              top: btnNode.offsetTop
            });
          }
        });
        return newSizes;
      });
    };
    var hiddenTabs = computed(function() {
      return [].concat(_toConsumableArray(tabs.value.slice(0, visibleStart.value)), _toConsumableArray(tabs.value.slice(visibleEnd.value + 1)));
    });
    var _useState15 = useState(), _useState16 = _slicedToArray(_useState15, 2), inkStyle = _useState16[0], setInkStyle = _useState16[1];
    var activeTabOffset = computed(function() {
      return tabOffsets.value.get(props.activeKey);
    });
    var inkBarRafRef = ref();
    var cleanInkBarRaf = function cleanInkBarRaf2() {
      wrapperRaf.cancel(inkBarRafRef.value);
    };
    watch([activeTabOffset, tabPositionTopOrBottom, function() {
      return props.rtl;
    }], function() {
      var newInkStyle = {};
      if (activeTabOffset.value) {
        if (tabPositionTopOrBottom.value) {
          if (props.rtl) {
            newInkStyle.right = toPx(activeTabOffset.value.right);
          } else {
            newInkStyle.left = toPx(activeTabOffset.value.left);
          }
          newInkStyle.width = toPx(activeTabOffset.value.width);
        } else {
          newInkStyle.top = toPx(activeTabOffset.value.top);
          newInkStyle.height = toPx(activeTabOffset.value.height);
        }
      }
      cleanInkBarRaf();
      inkBarRafRef.value = wrapperRaf(function() {
        setInkStyle(newInkStyle);
      });
    });
    watch([function() {
      return props.activeKey;
    }, activeTabOffset, tabOffsets, tabPositionTopOrBottom], function() {
      scrollToTab();
    }, {
      flush: "post"
    });
    watch([function() {
      return props.rtl;
    }, function() {
      return props.tabBarGutter;
    }, function() {
      return props.activeKey;
    }, function() {
      return tabs.value;
    }], function() {
      onListHolderResize();
    }, {
      flush: "post"
    });
    var ExtraContent = function ExtraContent2(_ref5) {
      var position = _ref5.position, prefixCls2 = _ref5.prefixCls, extra = _ref5.extra;
      if (!extra)
        return null;
      var content = extra === null || extra === void 0 ? void 0 : extra({
        position
      });
      return content ? createVNode("div", {
        "class": "".concat(prefixCls2, "-extra-content")
      }, [content]) : null;
    };
    onBeforeUnmount(function() {
      clearTouchMoving();
      cleanInkBarRaf();
    });
    return function() {
      var _classNames;
      var id = props.id, animated = props.animated, activeKey = props.activeKey, rtl = props.rtl, editable = props.editable, locale = props.locale, tabPosition = props.tabPosition, tabBarGutter = props.tabBarGutter, onTabClick = props.onTabClick;
      var className = attrs.class, style = attrs.style;
      var pre = prefixCls.value;
      var hasDropdown = !!hiddenTabs.value.length;
      var wrapPrefix = "".concat(pre, "-nav-wrap");
      var pingLeft;
      var pingRight;
      var pingTop;
      var pingBottom;
      if (tabPositionTopOrBottom.value) {
        if (rtl) {
          pingRight = transformLeft.value > 0;
          pingLeft = transformLeft.value + wrapperWidth.value < wrapperScrollWidth.value;
        } else {
          pingLeft = transformLeft.value < 0;
          pingRight = -transformLeft.value + wrapperWidth.value < wrapperScrollWidth.value;
        }
      } else {
        pingTop = transformTop.value < 0;
        pingBottom = -transformTop.value + wrapperHeight.value < wrapperScrollHeight.value;
      }
      var tabNodeStyle = {};
      if (tabPosition === "top" || tabPosition === "bottom") {
        tabNodeStyle[rtl ? "marginRight" : "marginLeft"] = typeof tabBarGutter === "number" ? "".concat(tabBarGutter, "px") : tabBarGutter;
      } else {
        tabNodeStyle.marginTop = typeof tabBarGutter === "number" ? "".concat(tabBarGutter, "px") : tabBarGutter;
      }
      var tabNodes = tabs.value.map(function(tab, i) {
        var key = tab.key;
        return createVNode(TabNode, {
          "id": id,
          "prefixCls": pre,
          "key": key,
          "tab": tab,
          "style": i === 0 ? void 0 : tabNodeStyle,
          "closable": tab.closable,
          "editable": editable,
          "active": key === activeKey,
          "removeAriaLabel": locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
          "ref": setRef(key),
          "onClick": function onClick(e) {
            onTabClick(key, e);
          },
          "onFocus": function onFocus() {
            scrollToTab(key);
            doLockAnimation();
            if (!tabsWrapperRef.value) {
              return;
            }
            if (!rtl) {
              tabsWrapperRef.value.scrollLeft = 0;
            }
            tabsWrapperRef.value.scrollTop = 0;
          }
        }, slots);
      });
      return createVNode("div", {
        "role": "tablist",
        "class": classNames("".concat(pre, "-nav"), className),
        "style": style,
        "onKeydown": function onKeydown() {
          doLockAnimation();
        }
      }, [createVNode(ExtraContent, {
        "position": "left",
        "prefixCls": pre,
        "extra": slots.leftExtra
      }, null), createVNode(ResizeObserver, {
        "onResize": onListHolderResize
      }, {
        default: function _default() {
          return [createVNode("div", {
            "class": classNames(wrapPrefix, (_classNames = {}, _defineProperty$1(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), _defineProperty$1(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), _defineProperty$1(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), _defineProperty$1(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
            "ref": tabsWrapperRef
          }, [createVNode(ResizeObserver, {
            "onResize": onListHolderResize
          }, {
            default: function _default2() {
              return [createVNode("div", {
                "ref": tabListRef,
                "class": "".concat(pre, "-nav-list"),
                "style": {
                  transform: "translate(".concat(transformLeft.value, "px, ").concat(transformTop.value, "px)"),
                  transition: lockAnimation.value ? "none" : void 0
                }
              }, [tabNodes, createVNode(AddButton, {
                "ref": innerAddButtonRef,
                "prefixCls": pre,
                "locale": locale,
                "editable": editable,
                "style": _extends(_extends({}, tabNodes.length === 0 ? void 0 : tabNodeStyle), {
                  visibility: hasDropdown ? "hidden" : null
                })
              }, null), createVNode("div", {
                "class": classNames("".concat(pre, "-ink-bar"), _defineProperty$1({}, "".concat(pre, "-ink-bar-animated"), animated.inkBar)),
                "style": inkStyle.value
              }, null)])];
            }
          })])];
        }
      }), createVNode(OperationNode, _objectSpread2(_objectSpread2({}, props), {}, {
        "removeAriaLabel": locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
        "ref": operationsRef,
        "prefixCls": pre,
        "tabs": hiddenTabs.value,
        "class": !hasDropdown && operationsHiddenClassName.value
      }), pick$1(slots, ["moreIcon"])), createVNode(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.rightExtra
      }, null), createVNode(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.tabBarExtraContent
      }, null)]);
    };
  }
});
var TabPanelList = defineComponent({
  name: "TabPanelList",
  inheritAttrs: false,
  props: {
    activeKey: {
      type: [String, Number]
    },
    id: {
      type: String
    },
    rtl: {
      type: Boolean
    },
    animated: {
      type: Object,
      default: void 0
    },
    tabPosition: {
      type: String
    },
    destroyInactiveTabPane: {
      type: Boolean
    }
  },
  setup: function setup6(props) {
    var _useInjectTabs = useInjectTabs(), tabs = _useInjectTabs.tabs, prefixCls = _useInjectTabs.prefixCls;
    return function() {
      var id = props.id, activeKey = props.activeKey, animated = props.animated, tabPosition = props.tabPosition, rtl = props.rtl, destroyInactiveTabPane = props.destroyInactiveTabPane;
      var tabPaneAnimated = animated.tabPane;
      var pre = prefixCls.value;
      var activeIndex = tabs.value.findIndex(function(tab) {
        return tab.key === activeKey;
      });
      return createVNode("div", {
        "class": "".concat(pre, "-content-holder")
      }, [createVNode("div", {
        "class": ["".concat(pre, "-content"), "".concat(pre, "-content-").concat(tabPosition), _defineProperty$1({}, "".concat(pre, "-content-animated"), tabPaneAnimated)],
        "style": activeIndex && tabPaneAnimated ? _defineProperty$1({}, rtl ? "marginRight" : "marginLeft", "-".concat(activeIndex, "00%")) : null
      }, [tabs.value.map(function(tab) {
        return cloneElement(tab.node, {
          key: tab.key,
          prefixCls: pre,
          tabKey: tab.key,
          id,
          animated: tabPaneAnimated,
          active: tab.key === activeKey,
          destroyInactiveTabPane
        });
      })])]);
    };
  }
});
var PlusOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
var PlusOutlinedSvg = PlusOutlined$2;
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
var PlusOutlined = function PlusOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": PlusOutlinedSvg
  }), null);
};
PlusOutlined.displayName = "PlusOutlined";
PlusOutlined.inheritAttrs = false;
var PlusOutlined$1 = PlusOutlined;
var uuid = 0;
var tabsProps = function tabsProps2() {
  return {
    prefixCls: {
      type: String
    },
    id: {
      type: String
    },
    activeKey: {
      type: [String, Number]
    },
    defaultActiveKey: {
      type: [String, Number]
    },
    direction: {
      type: String
    },
    animated: {
      type: [Boolean, Object]
    },
    renderTabBar: {
      type: Function
    },
    tabBarGutter: {
      type: Number
    },
    tabBarStyle: {
      type: Object
    },
    tabPosition: {
      type: String
    },
    destroyInactiveTabPane: {
      type: Boolean
    },
    hideAdd: Boolean,
    type: {
      type: String
    },
    size: {
      type: String
    },
    centered: Boolean,
    onEdit: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onTabClick: {
      type: Function
    },
    onTabScroll: {
      type: Function
    },
    "onUpdate:activeKey": {
      type: Function
    },
    locale: {
      type: Object,
      default: void 0
    },
    onPrevClick: Function,
    onNextClick: Function,
    tabBarExtraContent: PropTypes.any
  };
};
function parseTabList(children) {
  return children.map(function(node) {
    if (isValidElement(node)) {
      var props = _extends({}, node.props || {});
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
        delete props[k];
        props[camelize(k)] = v;
      }
      var slots = node.children || {};
      var key = node.key !== void 0 ? node.key : void 0;
      var _props$tab = props.tab, tab = _props$tab === void 0 ? slots.tab : _props$tab, disabled = props.disabled, forceRender = props.forceRender, closable = props.closable, animated = props.animated, active = props.active, destroyInactiveTabPane = props.destroyInactiveTabPane;
      return _extends(_extends({
        key
      }, props), {
        node,
        closeIcon: slots.closeIcon,
        tab,
        disabled: disabled === "" || disabled,
        forceRender: forceRender === "" || forceRender,
        closable: closable === "" || closable,
        animated: animated === "" || animated,
        active: active === "" || active,
        destroyInactiveTabPane: destroyInactiveTabPane === "" || destroyInactiveTabPane
      });
    }
    return null;
  }).filter(function(tab) {
    return tab;
  });
}
var InternalTabs = defineComponent({
  name: "InternalTabs",
  inheritAttrs: false,
  props: _extends(_extends({}, initDefaultProps(tabsProps(), {
    tabPosition: "top",
    animated: {
      inkBar: true,
      tabPane: false
    }
  })), {
    tabs: {
      type: Array
    }
  }),
  slots: ["tabBarExtraContent", "leftExtra", "rightExtra", "moreIcon", "addIcon", "removeIcon", "renderTabBar"],
  setup: function setup7(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    devWarning(!(props.onPrevClick !== void 0) && !(props.onNextClick !== void 0), "Tabs", "`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead.");
    devWarning(!(props.tabBarExtraContent !== void 0), "Tabs", "`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead.");
    devWarning(!(slots.tabBarExtraContent !== void 0), "Tabs", "`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");
    var _useConfigInject = useConfigInject("tabs", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, size = _useConfigInject.size, rootPrefixCls = _useConfigInject.rootPrefixCls;
    var rtl = computed(function() {
      return direction.value === "rtl";
    });
    var mergedAnimated = computed(function() {
      var animated = props.animated, tabPosition = props.tabPosition;
      if (animated === false || ["left", "right"].includes(tabPosition)) {
        return {
          inkBar: false,
          tabPane: false
        };
      } else if (animated === true) {
        return {
          inkBar: true,
          tabPane: true
        };
      } else {
        return _extends({
          inkBar: true,
          tabPane: false
        }, _typeof(animated) === "object" ? animated : {});
      }
    });
    var _useState = useState(false), _useState2 = _slicedToArray(_useState, 2), mobile = _useState2[0], setMobile = _useState2[1];
    onMounted(function() {
      setMobile(isMobile());
    });
    var _useMergedState = useMergedState(function() {
      var _a;
      return (_a = props.tabs[0]) === null || _a === void 0 ? void 0 : _a.key;
    }, {
      value: computed(function() {
        return props.activeKey;
      }),
      defaultValue: props.defaultActiveKey
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedActiveKey = _useMergedState2[0], setMergedActiveKey = _useMergedState2[1];
    var _useState3 = useState(function() {
      return props.tabs.findIndex(function(tab) {
        return tab.key === mergedActiveKey.value;
      });
    }), _useState4 = _slicedToArray(_useState3, 2), activeIndex = _useState4[0], setActiveIndex = _useState4[1];
    watchEffect(function() {
      var _a;
      var newActiveIndex = props.tabs.findIndex(function(tab) {
        return tab.key === mergedActiveKey.value;
      });
      if (newActiveIndex === -1) {
        newActiveIndex = Math.max(0, Math.min(activeIndex.value, props.tabs.length - 1));
        setMergedActiveKey((_a = props.tabs[newActiveIndex]) === null || _a === void 0 ? void 0 : _a.key);
      }
      setActiveIndex(newActiveIndex);
    });
    var _useMergedState3 = useMergedState(null, {
      value: computed(function() {
        return props.id;
      })
    }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), mergedId = _useMergedState4[0], setMergedId = _useMergedState4[1];
    var mergedTabPosition = computed(function() {
      if (mobile.value && !["left", "right"].includes(props.tabPosition)) {
        return "top";
      } else {
        return props.tabPosition;
      }
    });
    onMounted(function() {
      if (!props.id) {
        setMergedId("rc-tabs-".concat(uuid));
        uuid += 1;
      }
    });
    var onInternalTabClick = function onInternalTabClick2(key, e) {
      var _a, _b;
      (_a = props.onTabClick) === null || _a === void 0 ? void 0 : _a.call(props, key, e);
      var isActiveChanged = key !== mergedActiveKey.value;
      setMergedActiveKey(key);
      if (isActiveChanged) {
        (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, key);
      }
    };
    useProvideTabs({
      tabs: computed(function() {
        return props.tabs;
      }),
      prefixCls
    });
    return function() {
      var _classNames;
      var id = props.id, type = props.type, tabBarGutter = props.tabBarGutter, tabBarStyle = props.tabBarStyle, locale = props.locale, destroyInactiveTabPane = props.destroyInactiveTabPane, _props$renderTabBar = props.renderTabBar, renderTabBar = _props$renderTabBar === void 0 ? slots.renderTabBar : _props$renderTabBar, onTabScroll = props.onTabScroll, hideAdd = props.hideAdd, centered = props.centered;
      var sharedProps = {
        id: mergedId.value,
        activeKey: mergedActiveKey.value,
        animated: mergedAnimated.value,
        tabPosition: mergedTabPosition.value,
        rtl: rtl.value,
        mobile: mobile.value
      };
      var editable;
      if (type === "editable-card") {
        editable = {
          onEdit: function onEdit(editType, _ref2) {
            var key = _ref2.key, event = _ref2.event;
            var _a;
            (_a = props.onEdit) === null || _a === void 0 ? void 0 : _a.call(props, editType === "add" ? event : key, editType);
          },
          removeIcon: function removeIcon() {
            return createVNode(CloseOutlined, null, null);
          },
          addIcon: slots.addIcon ? slots.addIcon : function() {
            return createVNode(PlusOutlined$1, null, null);
          },
          showAdd: hideAdd !== true
        };
      }
      var tabNavBar;
      var tabNavBarProps = _extends(_extends({}, sharedProps), {
        moreTransitionName: "".concat(rootPrefixCls.value, "-slide-up"),
        editable,
        locale,
        tabBarGutter,
        onTabClick: onInternalTabClick,
        onTabScroll,
        style: tabBarStyle
      });
      if (renderTabBar) {
        tabNavBar = renderTabBar(_extends(_extends({}, tabNavBarProps), {
          DefaultTabBar: TabNavList
        }));
      } else {
        tabNavBar = createVNode(TabNavList, tabNavBarProps, pick$1(slots, ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"]));
      }
      var pre = prefixCls.value;
      return createVNode("div", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "id": id,
        "class": classNames(pre, "".concat(pre, "-").concat(mergedTabPosition.value), (_classNames = {}, _defineProperty$1(_classNames, "".concat(pre, "-").concat(size.value), size.value), _defineProperty$1(_classNames, "".concat(pre, "-card"), ["card", "editable-card"].includes(type)), _defineProperty$1(_classNames, "".concat(pre, "-editable-card"), type === "editable-card"), _defineProperty$1(_classNames, "".concat(pre, "-centered"), centered), _defineProperty$1(_classNames, "".concat(pre, "-mobile"), mobile.value), _defineProperty$1(_classNames, "".concat(pre, "-editable"), type === "editable-card"), _defineProperty$1(_classNames, "".concat(pre, "-rtl"), rtl.value), _classNames), attrs.class)
      }), [tabNavBar, createVNode(TabPanelList, _objectSpread2(_objectSpread2({
        "destroyInactiveTabPane": destroyInactiveTabPane
      }, sharedProps), {}, {
        "animated": mergedAnimated.value
      }), null)]);
    };
  }
});
var Tabs = defineComponent({
  name: "ATabs",
  inheritAttrs: false,
  props: initDefaultProps(tabsProps(), {
    tabPosition: "top",
    animated: {
      inkBar: true,
      tabPane: false
    }
  }),
  slots: ["tabBarExtraContent", "leftExtra", "rightExtra", "moreIcon", "addIcon", "removeIcon", "renderTabBar"],
  setup: function setup8(props, _ref3) {
    var attrs = _ref3.attrs, slots = _ref3.slots, emit = _ref3.emit;
    var handleChange = function handleChange2(key) {
      emit("update:activeKey", key);
      emit("change", key);
    };
    return function() {
      var _a;
      var tabs = parseTabList(flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)));
      return createVNode(InternalTabs, _objectSpread2(_objectSpread2(_objectSpread2({}, omit(props, ["onUpdate:activeKey"])), attrs), {}, {
        "onChange": handleChange,
        "tabs": tabs
      }), slots);
    };
  }
});
var tabPaneProps = function tabPaneProps2() {
  return {
    tab: PropTypes.any,
    disabled: {
      type: Boolean
    },
    forceRender: {
      type: Boolean
    },
    closable: {
      type: Boolean
    },
    animated: {
      type: Boolean
    },
    active: {
      type: Boolean
    },
    destroyInactiveTabPane: {
      type: Boolean
    },
    prefixCls: {
      type: String
    },
    tabKey: {
      type: [String, Number]
    },
    id: {
      type: String
    }
  };
};
var __unplugin_components_1 = defineComponent({
  name: "ATabPane",
  inheritAttrs: false,
  __ANT_TAB_PANE: true,
  props: tabPaneProps(),
  slots: ["closeIcon", "tab"],
  setup: function setup9(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var visited = ref(props.forceRender);
    watch([function() {
      return props.active;
    }, function() {
      return props.destroyInactiveTabPane;
    }], function() {
      if (props.active) {
        visited.value = true;
      } else if (props.destroyInactiveTabPane) {
        visited.value = false;
      }
    }, {
      immediate: true
    });
    var mergedStyle = computed(function() {
      if (!props.active) {
        if (props.animated) {
          return {
            visibility: "hidden",
            height: 0,
            overflowY: "hidden"
          };
        } else {
          return {
            display: "none"
          };
        }
      }
      return {};
    });
    return function() {
      var _a;
      var prefixCls = props.prefixCls, forceRender = props.forceRender, id = props.id, active = props.active, tabKey = props.tabKey;
      return createVNode("div", {
        "id": id && "".concat(id, "-panel-").concat(tabKey),
        "role": "tabpanel",
        "tabindex": active ? 0 : -1,
        "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
        "aria-hidden": !active,
        "style": [mergedStyle.value, attrs.style],
        "class": ["".concat(prefixCls, "-tabpane"), active && "".concat(prefixCls, "-tabpane-active"), attrs.class]
      }, [(active || visited.value || forceRender) && ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});
export { Tabs as T, __unplugin_components_1 as _, useRefs$1 as u };
