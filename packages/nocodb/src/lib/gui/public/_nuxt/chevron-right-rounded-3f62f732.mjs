import { aC as _extends, aH as PropTypes, d as defineComponent, n as reactive, r as ref, s as onMounted, P as nextTick, w as watch, aB as onUnmounted, e as computed, aD as classNames, aJ as _defineProperty, g as createVNode, aK as _objectSpread2, aX as KeyCode, b7 as supportsPassive, bj as initDefaultProps, b9 as withInstall, c8 as tuple, i as inject, aE as useConfigInject, bf as devWarning, p as provide, aL as getPropsSlot, bc as CloseOutlined, o as openBlock, c as createElementBlock, b as createBaseVNode } from "./entry-fe2e349d.mjs";
import { g as getScrollBarSize, P as Portal } from "./Modal-6ec32f67.mjs";
import { o as omit } from "./omit-bb2337ec.mjs";
var props = function props2() {
  return {
    prefixCls: String,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: {
      type: Object,
      default: void 0
    },
    class: String,
    placement: {
      type: String
    },
    wrapperClassName: String,
    level: {
      type: [String, Array]
    },
    levelMove: {
      type: [Number, Function, Array]
    },
    duration: String,
    ease: String,
    showMask: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    afterVisibleChange: Function,
    keyboard: {
      type: Boolean,
      default: void 0
    },
    contentWrapperStyle: {
      type: Object,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    }
  };
};
var drawerProps$1 = function drawerProps() {
  return _extends(_extends({}, props()), {
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object, PropTypes.looseBool])
  });
};
var drawerChildProps = function drawerChildProps2() {
  return _extends(_extends({}, props()), {
    getContainer: Function,
    getOpenCount: Function,
    scrollLocker: PropTypes.any,
    switchScrollingEffect: Function
  });
};
function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}
var transitionEndObject = {
  transition: "transitionend",
  WebkitTransition: "webkitTransitionEnd",
  MozTransition: "transitionend",
  OTransition: "oTransitionEnd otransitionend"
};
var transitionStr = Object.keys(transitionEndObject).filter(function(key) {
  if (typeof document === "undefined") {
    return false;
  }
  var html = document.getElementsByTagName("html")[0];
  return key in (html ? html.style : {});
})[0];
var transitionEndFun = transitionEndObject[transitionStr];
function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    target.attachEvent("on".concat(eventType), callback);
  }
}
function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    target.detachEvent("on".concat(eventType), callback);
  }
}
function transformArguments(arg, cb) {
  var result = typeof arg === "function" ? arg(cb) : arg;
  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }
    return [result[0], result[1]];
  }
  return [result];
}
var isNumeric = function isNumeric2(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
var windowIsUndefined = !(typeof window !== "undefined" && window.document && window.document.createElement);
var getTouchParentScroll = function getTouchParentScroll2(root, currentTarget, differX, differY) {
  if (!currentTarget || currentTarget === document || currentTarget instanceof Document) {
    return false;
  }
  if (currentTarget === root.parentNode) {
    return true;
  }
  var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
  var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
  var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
  var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
  var style = document.defaultView.getComputedStyle(currentTarget);
  var overflowY = style.overflowY === "auto" || style.overflowY === "scroll";
  var overflowX = style.overflowX === "auto" || style.overflowX === "scroll";
  var y = scrollY && overflowY;
  var x = scrollX && overflowX;
  if (isY && (!y || y && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!x || x && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
    return getTouchParentScroll2(root, currentTarget.parentNode, differX, differY);
  }
  return false;
};
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
var currentDrawer = {};
var DrawerChild = defineComponent({
  inheritAttrs: false,
  props: drawerChildProps(),
  emits: ["close", "handleClick", "change"],
  setup: function setup(props3, _ref) {
    var emit = _ref.emit, slots = _ref.slots;
    var state = reactive({
      startPos: {
        x: null,
        y: null
      }
    });
    var timeout;
    var contentWrapper = ref();
    var dom = ref();
    var maskDom = ref();
    var handlerDom = ref();
    var contentDom = ref();
    var levelDom = [];
    var drawerId = "drawer_id_".concat(Number((Date.now() + Math.random()).toString().replace(".", Math.round(Math.random() * 9).toString())).toString(16));
    var passive = !windowIsUndefined && supportsPassive ? {
      passive: false
    } : false;
    onMounted(function() {
      nextTick(function() {
        var _a;
        var open = props3.open, getContainer = props3.getContainer, showMask = props3.showMask, autofocus = props3.autofocus;
        var container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
        getLevelDom(props3);
        if (open) {
          if (container && container.parentNode === document.body) {
            currentDrawer[drawerId] = open;
          }
          openLevelTransition();
          nextTick(function() {
            if (autofocus) {
              domFocus();
            }
          });
          if (showMask) {
            (_a = props3.scrollLocker) === null || _a === void 0 ? void 0 : _a.lock();
          }
        }
      });
    });
    watch(function() {
      return props3.level;
    }, function() {
      getLevelDom(props3);
    }, {
      flush: "post"
    });
    watch(function() {
      return props3.open;
    }, function() {
      var open = props3.open, getContainer = props3.getContainer, scrollLocker = props3.scrollLocker, showMask = props3.showMask, autofocus = props3.autofocus;
      var container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
      if (container && container.parentNode === document.body) {
        currentDrawer[drawerId] = !!open;
      }
      openLevelTransition();
      if (open) {
        if (autofocus) {
          domFocus();
        }
        if (showMask) {
          scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
        }
      } else {
        scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
      }
    }, {
      flush: "post"
    });
    onUnmounted(function() {
      var _a;
      var open = props3.open;
      delete currentDrawer[drawerId];
      if (open) {
        setLevelTransform(false);
        document.body.style.touchAction = "";
      }
      (_a = props3.scrollLocker) === null || _a === void 0 ? void 0 : _a.unLock();
    });
    watch(function() {
      return props3.placement;
    }, function(val) {
      if (val) {
        contentDom.value = null;
      }
    });
    var domFocus = function domFocus2() {
      var _a, _b;
      (_b = (_a = dom.value) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    var removeStartHandler = function removeStartHandler2(e) {
      if (e.touches.length > 1) {
        return;
      }
      state.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };
    var removeMoveHandler = function removeMoveHandler2(e) {
      if (e.changedTouches.length > 1) {
        return;
      }
      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - state.startPos.x;
      var differY = e.changedTouches[0].clientY - state.startPos.y;
      if ((currentTarget === maskDom.value || currentTarget === handlerDom.value || currentTarget === contentDom.value && getTouchParentScroll(currentTarget, e.target, differX, differY)) && e.cancelable) {
        e.preventDefault();
      }
    };
    var transitionEnd = function transitionEnd2(e) {
      var dom2 = e.target;
      removeEventListener(dom2, transitionEndFun, transitionEnd2);
      dom2.style.transition = "";
    };
    var onClose = function onClose2(e) {
      emit("close", e);
    };
    var onKeyDown = function onKeyDown2(e) {
      if (e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        onClose(e);
      }
    };
    var onWrapperTransitionEnd = function onWrapperTransitionEnd2(e) {
      var open = props3.open, afterVisibleChange2 = props3.afterVisibleChange;
      if (e.target === contentWrapper.value && e.propertyName.match(/transform$/)) {
        dom.value.style.transition = "";
        if (!open && getCurrentDrawerSome()) {
          document.body.style.overflowX = "";
          if (maskDom.value) {
            maskDom.value.style.left = "";
            maskDom.value.style.width = "";
          }
        }
        if (afterVisibleChange2) {
          afterVisibleChange2(!!open);
        }
      }
    };
    var horizontalBoolAndPlacementName = computed(function() {
      var placement = props3.placement;
      var isHorizontal = placement === "left" || placement === "right";
      var placementName = "translate".concat(isHorizontal ? "X" : "Y");
      return {
        isHorizontal,
        placementName
      };
    });
    var openLevelTransition = function openLevelTransition2() {
      var open = props3.open, width = props3.width, height = props3.height;
      var _horizontalBoolAndPla = horizontalBoolAndPlacementName.value, isHorizontal = _horizontalBoolAndPla.isHorizontal, placementName = _horizontalBoolAndPla.placementName;
      var contentValue = contentDom.value ? contentDom.value.getBoundingClientRect()[isHorizontal ? "width" : "height"] : 0;
      var value = (isHorizontal ? width : height) || contentValue;
      setLevelAndScrolling(open, placementName, value);
    };
    var setLevelTransform = function setLevelTransform2(open, placementName, value, right) {
      var placement = props3.placement, levelMove = props3.levelMove, duration = props3.duration, ease = props3.ease, showMask = props3.showMask;
      levelDom.forEach(function(dom2) {
        dom2.style.transition = "transform ".concat(duration, " ").concat(ease);
        addEventListener(dom2, transitionEndFun, transitionEnd);
        var levelValue = open ? value : 0;
        if (levelMove) {
          var $levelMove = transformArguments(levelMove, {
            target: dom2,
            open
          });
          levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
        }
        var $value = typeof levelValue === "number" ? "".concat(levelValue, "px") : levelValue;
        var placementPos = placement === "left" || placement === "top" ? $value : "-".concat($value);
        placementPos = showMask && placement === "right" && right ? "calc(".concat(placementPos, " + ").concat(right, "px)") : placementPos;
        dom2.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : "";
      });
    };
    var setLevelAndScrolling = function setLevelAndScrolling2(open, placementName, value) {
      if (!windowIsUndefined) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? getScrollBarSize(true) : 0;
        setLevelTransform(open, placementName, value, right);
        toggleScrollingToDrawerAndBody(right);
      }
      emit("change", open);
    };
    var toggleScrollingToDrawerAndBody = function toggleScrollingToDrawerAndBody2(right) {
      var getContainer = props3.getContainer, showMask = props3.showMask, open = props3.open;
      var container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
      if (container && container.parentNode === document.body && showMask) {
        var eventArray = ["touchstart"];
        var domArray = [document.body, maskDom.value, handlerDom.value, contentDom.value];
        if (open && document.body.style.overflow !== "hidden") {
          if (right) {
            addScrollingEffect(right);
          }
          document.body.style.touchAction = "none";
          domArray.forEach(function(item, i) {
            if (!item) {
              return;
            }
            addEventListener(item, eventArray[i] || "touchmove", i ? removeMoveHandler : removeStartHandler, passive);
          });
        } else if (getCurrentDrawerSome()) {
          document.body.style.touchAction = "";
          if (right) {
            remScrollingEffect(right);
          }
          domArray.forEach(function(item, i) {
            if (!item) {
              return;
            }
            removeEventListener(item, eventArray[i] || "touchmove", i ? removeMoveHandler : removeStartHandler, passive);
          });
        }
      }
    };
    var addScrollingEffect = function addScrollingEffect2(right) {
      var placement = props3.placement, duration = props3.duration, ease = props3.ease;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      dom.value.style.transition = "none";
      switch (placement) {
        case "right":
          dom.value.style.transform = "translateX(-".concat(right, "px)");
          break;
        case "top":
        case "bottom":
          dom.value.style.width = "calc(100% - ".concat(right, "px)");
          dom.value.style.transform = "translateZ(0)";
          break;
      }
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (dom.value) {
          dom.value.style.transition = "".concat(transformTransition, ",").concat(widthTransition);
          dom.value.style.width = "";
          dom.value.style.transform = "";
        }
      });
    };
    var remScrollingEffect = function remScrollingEffect2(right) {
      var placement = props3.placement, duration = props3.duration, ease = props3.ease;
      dom.value.style.transition = "none";
      var heightTransition;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      switch (placement) {
        case "left": {
          dom.value.style.width = "100%";
          widthTransition = "width 0s ".concat(ease, " ").concat(duration);
          break;
        }
        case "right": {
          dom.value.style.transform = "translateX(".concat(right, "px)");
          dom.value.style.width = "100%";
          widthTransition = "width 0s ".concat(ease, " ").concat(duration);
          if (maskDom.value) {
            maskDom.value.style.left = "-".concat(right, "px");
            maskDom.value.style.width = "calc(100% + ".concat(right, "px)");
          }
          break;
        }
        case "top":
        case "bottom": {
          dom.value.style.width = "calc(100% + ".concat(right, "px)");
          dom.value.style.height = "100%";
          dom.value.style.transform = "translateZ(0)";
          heightTransition = "height 0s ".concat(ease, " ").concat(duration);
          break;
        }
      }
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (dom.value) {
          dom.value.style.transition = "".concat(transformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : "").concat(widthTransition);
          dom.value.style.transform = "";
          dom.value.style.width = "";
          dom.value.style.height = "";
        }
      });
    };
    var getCurrentDrawerSome = function getCurrentDrawerSome2() {
      return !Object.keys(currentDrawer).some(function(key) {
        return currentDrawer[key];
      });
    };
    var getLevelDom = function getLevelDom2(_ref2) {
      var level = _ref2.level, getContainer = _ref2.getContainer;
      if (windowIsUndefined) {
        return;
      }
      var container = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
      var parent = container ? container.parentNode : null;
      levelDom = [];
      if (level === "all") {
        var children = parent ? Array.prototype.slice.call(parent.children) : [];
        children.forEach(function(child) {
          if (child.nodeName !== "SCRIPT" && child.nodeName !== "STYLE" && child.nodeName !== "LINK" && child !== container) {
            levelDom.push(child);
          }
        });
      } else if (level) {
        dataToArray(level).forEach(function(key) {
          document.querySelectorAll(key).forEach(function(item) {
            levelDom.push(item);
          });
        });
      }
    };
    var onHandleClick = function onHandleClick2(e) {
      emit("handleClick", e);
    };
    var canOpen = ref(false);
    watch(dom, function() {
      nextTick(function() {
        canOpen.value = true;
      });
    });
    return function() {
      var _classnames;
      var _a, _b;
      var width = props3.width, height = props3.height, $open = props3.open, prefixCls = props3.prefixCls, placement = props3.placement;
      props3.level;
      props3.levelMove;
      props3.ease;
      props3.duration;
      props3.getContainer;
      props3.onChange;
      props3.afterVisibleChange;
      var showMask = props3.showMask, maskClosable = props3.maskClosable, maskStyle = props3.maskStyle, keyboard = props3.keyboard;
      props3.getOpenCount;
      props3.scrollLocker;
      var contentWrapperStyle = props3.contentWrapperStyle, style = props3.style, className = props3.class, otherProps = __rest$2(props3, ["width", "height", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "keyboard", "getOpenCount", "scrollLocker", "contentWrapperStyle", "style", "class"]);
      var open = $open && canOpen.value;
      var wrapperClassName = classNames(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-").concat(placement), true), _defineProperty(_classnames, "".concat(prefixCls, "-open"), open), _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, "no-mask", !showMask), _classnames));
      var placementName = horizontalBoolAndPlacementName.value.placementName;
      var placementPos = placement === "left" || placement === "top" ? "-100%" : "100%";
      var transform = open ? "" : "".concat(placementName, "(").concat(placementPos, ")");
      return createVNode("div", _objectSpread2(_objectSpread2({}, omit(otherProps, ["switchScrollingEffect", "autofocus"])), {}, {
        "tabindex": -1,
        "class": wrapperClassName,
        "style": style,
        "ref": dom,
        "onKeydown": open && keyboard ? onKeyDown : void 0,
        "onTransitionend": onWrapperTransitionEnd
      }), [showMask && createVNode("div", {
        "class": "".concat(prefixCls, "-mask"),
        "onClick": maskClosable ? onClose : void 0,
        "style": maskStyle,
        "ref": maskDom
      }, null), createVNode("div", {
        "class": "".concat(prefixCls, "-content-wrapper"),
        "style": _extends({
          transform,
          msTransform: transform,
          width: isNumeric(width) ? "".concat(width, "px") : width,
          height: isNumeric(height) ? "".concat(height, "px") : height
        }, contentWrapperStyle),
        "ref": contentWrapper
      }, [createVNode("div", {
        "class": "".concat(prefixCls, "-content"),
        "ref": contentDom
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), slots.handler ? createVNode("div", {
        "onClick": onHandleClick,
        "ref": handlerDom
      }, [(_b = slots.handler) === null || _b === void 0 ? void 0 : _b.call(slots)]) : null])]);
    };
  }
});
var Child = DrawerChild;
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
var DrawerWrapper = defineComponent({
  inheritAttrs: false,
  props: initDefaultProps(drawerProps$1(), {
    prefixCls: "drawer",
    placement: "left",
    getContainer: "body",
    level: "all",
    duration: ".3s",
    ease: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    afterVisibleChange: function afterVisibleChange() {
    },
    showMask: true,
    maskClosable: true,
    maskStyle: {},
    wrapperClassName: "",
    keyboard: true,
    forceRender: false,
    autofocus: true
  }),
  emits: ["handleClick", "close"],
  slots: ["handler"],
  setup: function setup2(props3, _ref) {
    var emit = _ref.emit, slots = _ref.slots;
    var dom = ref(null);
    var onHandleClick = function onHandleClick2(e) {
      emit("handleClick", e);
    };
    var onClose = function onClose2(e) {
      emit("close", e);
    };
    return function() {
      props3.afterVisibleChange;
      var getContainer = props3.getContainer, wrapperClassName = props3.wrapperClassName, forceRender = props3.forceRender, otherProps = __rest$1(props3, ["afterVisibleChange", "getContainer", "wrapperClassName", "forceRender"]);
      var portal = null;
      if (!getContainer) {
        return createVNode("div", {
          "class": wrapperClassName,
          "ref": dom
        }, [createVNode(Child, _objectSpread2(_objectSpread2({}, otherProps), {}, {
          "open": props3.open,
          "getContainer": function getContainer2() {
            return dom.value;
          },
          "onClose": onClose,
          "onHandleClick": onHandleClick
        }), slots)]);
      }
      var $forceRender = !!slots.handler || forceRender;
      if ($forceRender || props3.open || dom.value) {
        portal = createVNode(Portal, {
          "visible": props3.open,
          "forceRender": $forceRender,
          "getContainer": getContainer,
          "wrapperClassName": wrapperClassName
        }, {
          default: function _default(_a) {
            var visible = _a.visible, afterClose = _a.afterClose, rest = __rest$1(_a, ["visible", "afterClose"]);
            return createVNode(Child, _objectSpread2(_objectSpread2(_objectSpread2({
              "ref": dom
            }, otherProps), rest), {}, {
              "open": visible !== void 0 ? visible : props3.open,
              "afterVisibleChange": afterClose !== void 0 ? afterClose : props3.afterVisibleChange,
              "onClose": onClose,
              "onHandleClick": onHandleClick
            }), slots);
          }
        });
      }
      return portal;
    };
  }
});
var Drawer$1 = DrawerWrapper;
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
var PlacementTypes = tuple("top", "right", "bottom", "left");
tuple("default", "large");
var defaultPushState = {
  distance: 180
};
var drawerProps2 = function drawerProps3() {
  return {
    autofocus: {
      type: Boolean,
      default: void 0
    },
    closable: {
      type: Boolean,
      default: void 0
    },
    closeIcon: PropTypes.any,
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: PropTypes.any,
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    wrapStyle: {
      type: Object,
      default: void 0
    },
    style: {
      type: Object,
      default: void 0
    },
    class: PropTypes.any,
    wrapClassName: String,
    size: {
      type: String
    },
    drawerStyle: {
      type: Object,
      default: void 0
    },
    headerStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    contentWrapperStyle: {
      type: Object,
      default: void 0
    },
    title: PropTypes.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    zIndex: Number,
    prefixCls: String,
    push: PropTypes.oneOfType([PropTypes.looseBool, {
      type: Object
    }]),
    placement: PropTypes.oneOf(PlacementTypes),
    keyboard: {
      type: Boolean,
      default: void 0
    },
    extra: PropTypes.any,
    footer: PropTypes.any,
    footerStyle: {
      type: Object,
      default: void 0
    },
    level: PropTypes.any,
    levelMove: {
      type: [Number, Array, Function]
    },
    handle: PropTypes.any,
    afterVisibleChange: Function,
    onAfterVisibleChange: Function,
    "onUpdate:visible": Function,
    onClose: Function
  };
};
var Drawer = defineComponent({
  name: "ADrawer",
  inheritAttrs: false,
  props: initDefaultProps(drawerProps2(), {
    closable: true,
    placement: "right",
    maskClosable: true,
    mask: true,
    level: null,
    keyboard: true,
    push: defaultPushState
  }),
  slots: ["closeIcon", "title", "extra", "footer", "handle"],
  setup: function setup3(props3, _ref) {
    var emit = _ref.emit, slots = _ref.slots, attrs = _ref.attrs;
    var sPush = ref(false);
    var destroyClose = ref(false);
    var vcDrawer = ref(null);
    var parentDrawerOpts = inject("parentDrawerOpts", null);
    var _useConfigInject = useConfigInject("drawer", props3), prefixCls = _useConfigInject.prefixCls;
    devWarning(!props3.afterVisibleChange, "Drawer", "`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead");
    devWarning(props3.wrapStyle === void 0, "Drawer", "`wrapStyle` prop is deprecated, please use `style` instead");
    devWarning(props3.wrapClassName === void 0, "Drawer", "`wrapClassName` prop is deprecated, please use `class` instead");
    var setPush = function setPush2() {
      sPush.value = true;
    };
    var setPull = function setPull2() {
      sPush.value = false;
      nextTick(function() {
        domFocus();
      });
    };
    provide("parentDrawerOpts", {
      setPush,
      setPull
    });
    onMounted(function() {
      var visible = props3.visible;
      if (visible && parentDrawerOpts) {
        parentDrawerOpts.setPush();
      }
    });
    onUnmounted(function() {
      if (parentDrawerOpts) {
        parentDrawerOpts.setPull();
      }
    });
    watch(function() {
      return props3.visible;
    }, function(visible) {
      if (parentDrawerOpts) {
        if (visible) {
          parentDrawerOpts.setPush();
        } else {
          parentDrawerOpts.setPull();
        }
      }
    }, {
      flush: "post"
    });
    var domFocus = function domFocus2() {
      var _a, _b;
      (_b = (_a = vcDrawer.value) === null || _a === void 0 ? void 0 : _a.domFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    var close = function close2(e) {
      emit("update:visible", false);
      emit("close", e);
    };
    var afterVisibleChange2 = function afterVisibleChange3(visible) {
      var _a;
      (_a = props3.afterVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props3, visible);
      emit("afterVisibleChange", visible);
    };
    var destroyOnClose = computed(function() {
      return props3.destroyOnClose && !props3.visible;
    });
    var onDestroyTransitionEnd = function onDestroyTransitionEnd2() {
      var isDestroyOnClose = destroyOnClose.value;
      if (!isDestroyOnClose) {
        return;
      }
      if (!props3.visible) {
        destroyClose.value = true;
      }
    };
    var pushTransform = computed(function() {
      var push = props3.push, placement = props3.placement;
      var distance;
      if (typeof push === "boolean") {
        distance = push ? defaultPushState.distance : 0;
      } else {
        distance = push.distance;
      }
      distance = parseFloat(String(distance || 0));
      if (placement === "left" || placement === "right") {
        return "translateX(".concat(placement === "left" ? distance : -distance, "px)");
      }
      if (placement === "top" || placement === "bottom") {
        return "translateY(".concat(placement === "top" ? distance : -distance, "px)");
      }
      return null;
    });
    var offsetStyle = computed(function() {
      var visible = props3.visible, mask = props3.mask, placement = props3.placement, _props$size = props3.size, size = _props$size === void 0 ? "default" : _props$size, width = props3.width, height = props3.height;
      if (!visible && !mask) {
        return {};
      }
      var val = {};
      if (placement === "left" || placement === "right") {
        var defaultWidth = size === "large" ? 736 : 378;
        val.width = typeof width === "undefined" ? defaultWidth : width;
        val.width = typeof val.width === "string" ? val.width : "".concat(val.width, "px");
      } else {
        var defaultHeight = size === "large" ? 736 : 378;
        val.height = typeof height === "undefined" ? defaultHeight : height;
        val.height = typeof val.height === "string" ? val.height : "".concat(val.height, "px");
      }
      return val;
    });
    var drawerStyle = computed(function() {
      var zIndex = props3.zIndex, wrapStyle = props3.wrapStyle, mask = props3.mask, style = props3.style;
      var val = mask ? {} : offsetStyle.value;
      return _extends(_extends(_extends({
        zIndex,
        transform: sPush.value ? pushTransform.value : void 0
      }, val), wrapStyle), style);
    });
    var renderHeader = function renderHeader2(prefixCls2) {
      var closable = props3.closable, headerStyle = props3.headerStyle;
      var extra = getPropsSlot(slots, props3, "extra");
      var title = getPropsSlot(slots, props3, "title");
      if (!title && !closable) {
        return null;
      }
      return createVNode("div", {
        "class": classNames("".concat(prefixCls2, "-header"), _defineProperty({}, "".concat(prefixCls2, "-header-close-only"), closable && !title && !extra)),
        "style": headerStyle
      }, [createVNode("div", {
        "class": "".concat(prefixCls2, "-header-title")
      }, [renderCloseIcon(prefixCls2), title && createVNode("div", {
        "class": "".concat(prefixCls2, "-title")
      }, [title])]), extra && createVNode("div", {
        "class": "".concat(prefixCls2, "-extra")
      }, [extra])]);
    };
    var renderCloseIcon = function renderCloseIcon2(prefixCls2) {
      var _a;
      var closable = props3.closable;
      var $closeIcon = slots.closeIcon ? (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots) : props3.closeIcon;
      return closable && createVNode("button", {
        "key": "closer",
        "onClick": close,
        "aria-label": "Close",
        "class": "".concat(prefixCls2, "-close")
      }, [$closeIcon === void 0 ? createVNode(CloseOutlined, null, null) : $closeIcon]);
    };
    var renderBody = function renderBody2(prefixCls2) {
      var _a;
      if (destroyClose.value && !props3.visible) {
        return null;
      }
      destroyClose.value = false;
      var bodyStyle = props3.bodyStyle, drawerStyle2 = props3.drawerStyle;
      var containerStyle = {};
      var isDestroyOnClose = destroyOnClose.value;
      if (isDestroyOnClose) {
        containerStyle.opacity = 0;
        containerStyle.transition = "opacity .3s";
      }
      return createVNode("div", {
        "class": "".concat(prefixCls2, "-wrapper-body"),
        "style": _extends(_extends({}, containerStyle), drawerStyle2),
        "onTransitionend": onDestroyTransitionEnd
      }, [renderHeader(prefixCls2), createVNode("div", {
        "key": "body",
        "class": "".concat(prefixCls2, "-body"),
        "style": bodyStyle
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]), renderFooter(prefixCls2)]);
    };
    var renderFooter = function renderFooter2(prefixCls2) {
      var footer = getPropsSlot(slots, props3, "footer");
      if (!footer) {
        return null;
      }
      var footerClassName = "".concat(prefixCls2, "-footer");
      return createVNode("div", {
        "class": footerClassName,
        "style": props3.footerStyle
      }, [footer]);
    };
    return function() {
      var _classnames2;
      props3.width;
      props3.height;
      var visible = props3.visible, placement = props3.placement, mask = props3.mask, wrapClassName = props3.wrapClassName, className = props3.class, rest = __rest(props3, ["width", "height", "visible", "placement", "mask", "wrapClassName", "class"]);
      var val = mask ? offsetStyle.value : {};
      var haveMask = mask ? "" : "no-mask";
      var vcDrawerProps = _extends(_extends(_extends(_extends({}, attrs), omit(rest, ["size", "closeIcon", "closable", "destroyOnClose", "drawerStyle", "headerStyle", "bodyStyle", "title", "push", "wrapStyle", "onAfterVisibleChange", "onClose", "onUpdate:visible"])), val), {
        onClose: close,
        afterVisibleChange: afterVisibleChange2,
        handler: false,
        prefixCls: prefixCls.value,
        open: visible,
        showMask: mask,
        placement,
        class: classNames((_classnames2 = {}, _defineProperty(_classnames2, className, className), _defineProperty(_classnames2, wrapClassName, !!wrapClassName), _defineProperty(_classnames2, haveMask, !!haveMask), _classnames2)),
        style: drawerStyle.value,
        ref: vcDrawer
      });
      return createVNode(Drawer$1, vcDrawerProps, {
        handler: props3.handle ? function() {
          return props3.handle;
        } : slots.handle,
        default: function _default() {
          return renderBody(prefixCls.value);
        }
      });
    };
  }
});
var __unplugin_components_4 = withInstall(Drawer);
const _hoisted_1$4 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M7 19v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4v-2h2v2H7m4 0v-2h2v2h-2m4 0v-2h2v2h-2m-8-4V9h2v2H7m4 0V9h2v2h-2m4 0V9h2v2h-2M7 7V5h2v2H7m4 0V5h2v2h-2m4 0V5h2v2h-2Z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var __unplugin_components_0$1 = { name: "mdi-drag", render: render$4 };
const _hoisted_1$3 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var __unplugin_components_3 = { name: "mdi-content-save", render: render$3 };
const _hoisted_1$2 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var __unplugin_components_0 = { name: "mdi-magnify", render: render$2 };
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_13 = { name: "mdi-account", render: render$1 };
const _hoisted_1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M8.7 17.3q-.275-.275-.275-.7q0-.425.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275q-.425 0-.7-.275Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var __unplugin_components_10 = { name: "material-symbols-chevron-right-rounded", render };
export { __unplugin_components_0$1 as _, __unplugin_components_13 as a, __unplugin_components_3 as b, __unplugin_components_4 as c, __unplugin_components_10 as d, __unplugin_components_0 as e };
