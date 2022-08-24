import { aW as _toConsumableArray, d as defineComponent, aH as PropTypes, r as ref, ci as onUpdated, s as onMounted, w as watch, b0 as _slicedToArray, P as nextTick, aY as wrapperRaf, a_ as onBeforeUnmount, g as createVNode, cH as Portal$1, cI as canUseDom, aN as _typeof, cm as getCurrentInstance, aC as _extends, e as computed, aK as _objectSpread2, aO as getTransitionProps, B as withDirectives, aq as vShow, aP as Transition, bj as initDefaultProps, a6 as watchEffect, aD as classNames, cJ as contains, aX as KeyCode, cK as useProvidePortal, bg as useLocaleReceiver, aE as useConfigInject, aJ as _defineProperty, bc as CloseOutlined, cL as getTransitionName, cM as canUseDocElement, cN as addEventListenerWrap, F as Fragment } from "./entry-3fb260b7.mjs";
import { o as omit } from "./omit-e185a391.mjs";
import { p as pickAttrs } from "./pickAttrs-557680ad.mjs";
import { _ as _createClass, a as _classCallCheck } from "./index-fbd19973.mjs";
import { B as Button, c as convertLegacyProps } from "./button-b581df9e.mjs";
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === "undefined") {
    return 0;
  }
  if (fresh || cached === void 0) {
    var inner = document.createElement("div");
    inner.style.width = "100%";
    inner.style.height = "200px";
    var outer = document.createElement("div");
    var outerStyle = outer.style;
    outerStyle.position = "absolute";
    outerStyle.top = "0";
    outerStyle.left = "0";
    outerStyle.pointerEvents = "none";
    outerStyle.visibility = "hidden";
    outerStyle.width = "200px";
    outerStyle.height = "150px";
    outerStyle.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = "scroll";
    var widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}
function getTargetScrollBarSize(target) {
  if (typeof document === "undefined" || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  var _getComputedStyle = getComputedStyle(target, "::-webkit-scrollbar"), width = _getComputedStyle.width, height = _getComputedStyle.height;
  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _options$element = options.element, element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style);
  styleKeys.forEach(function(key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function(key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var cacheStyle$1 = {};
var switchScrollingEffect = function(close) {
  if (!isBodyOverflowing() && !close) {
    return;
  }
  var scrollingEffectClassName2 = "ant-scrolling-effect";
  var scrollingEffectClassNameReg2 = new RegExp("".concat(scrollingEffectClassName2), "g");
  var bodyClassName = document.body.className;
  if (close) {
    if (!scrollingEffectClassNameReg2.test(bodyClassName))
      return;
    setStyle(cacheStyle$1);
    cacheStyle$1 = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg2, "").trim();
    return;
  }
  var scrollBarSize = getScrollBarSize();
  if (scrollBarSize) {
    cacheStyle$1 = setStyle({
      position: "relative",
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });
    if (!scrollingEffectClassNameReg2.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName2);
      document.body.className = addClassName.trim();
    }
  }
};
var locks = [];
var scrollingEffectClassName = "ant-scrolling-effect";
var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), "g");
var uuid$1 = 0;
var cacheStyle = /* @__PURE__ */ new Map();
var ScrollLocker = /* @__PURE__ */ _createClass(function ScrollLocker2(options) {
  var _this = this;
  _classCallCheck(this, ScrollLocker2);
  this.getContainer = function() {
    var _a;
    return (_a = _this.options) === null || _a === void 0 ? void 0 : _a.container;
  };
  this.reLock = function(options2) {
    var findLock = locks.find(function(_ref) {
      var target = _ref.target;
      return target === _this.lockTarget;
    });
    if (findLock) {
      _this.unLock();
    }
    _this.options = options2;
    if (findLock) {
      findLock.options = options2;
      _this.lock();
    }
  };
  this.lock = function() {
    var _a;
    if (locks.some(function(_ref2) {
      var target = _ref2.target;
      return target === _this.lockTarget;
    })) {
      return;
    }
    if (locks.some(function(_ref3) {
      var options2 = _ref3.options;
      var _a2;
      return (options2 === null || options2 === void 0 ? void 0 : options2.container) === ((_a2 = _this.options) === null || _a2 === void 0 ? void 0 : _a2.container);
    })) {
      locks = [].concat(_toConsumableArray(locks), [{
        target: _this.lockTarget,
        options: _this.options
      }]);
      return;
    }
    var scrollBarSize = 0;
    var container = ((_a = _this.options) === null || _a === void 0 ? void 0 : _a.container) || document.body;
    if (container === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || container.scrollHeight > container.clientHeight) {
      scrollBarSize = getScrollBarSize();
    }
    var containerClassName = container.className;
    if (locks.filter(function(_ref4) {
      var options2 = _ref4.options;
      var _a2;
      return (options2 === null || options2 === void 0 ? void 0 : options2.container) === ((_a2 = _this.options) === null || _a2 === void 0 ? void 0 : _a2.container);
    }).length === 0) {
      cacheStyle.set(container, setStyle({
        width: scrollBarSize !== 0 ? "calc(100% - ".concat(scrollBarSize, "px)") : void 0,
        overflow: "hidden",
        overflowX: "hidden",
        overflowY: "hidden"
      }, {
        element: container
      }));
    }
    if (!scrollingEffectClassNameReg.test(containerClassName)) {
      var addClassName = "".concat(containerClassName, " ").concat(scrollingEffectClassName);
      container.className = addClassName.trim();
    }
    locks = [].concat(_toConsumableArray(locks), [{
      target: _this.lockTarget,
      options: _this.options
    }]);
  };
  this.unLock = function() {
    var _a;
    var findLock = locks.find(function(_ref5) {
      var target = _ref5.target;
      return target === _this.lockTarget;
    });
    locks = locks.filter(function(_ref6) {
      var target = _ref6.target;
      return target !== _this.lockTarget;
    });
    if (!findLock || locks.some(function(_ref7) {
      var options2 = _ref7.options;
      var _a2;
      return (options2 === null || options2 === void 0 ? void 0 : options2.container) === ((_a2 = findLock.options) === null || _a2 === void 0 ? void 0 : _a2.container);
    })) {
      return;
    }
    var container = ((_a = _this.options) === null || _a === void 0 ? void 0 : _a.container) || document.body;
    var containerClassName = container.className;
    if (!scrollingEffectClassNameReg.test(containerClassName))
      return;
    setStyle(cacheStyle.get(container), {
      element: container
    });
    cacheStyle.delete(container);
    container.className = container.className.replace(scrollingEffectClassNameReg, "").trim();
  };
  this.lockTarget = uuid$1++;
  this.options = options;
});
var openCount = 0;
var supportDom = canUseDom();
var cacheOverflow = {};
var getParent = function getParent2(getContainer) {
  if (!supportDom) {
    return null;
  }
  if (getContainer) {
    if (typeof getContainer === "string") {
      return document.querySelectorAll(getContainer)[0];
    }
    if (typeof getContainer === "function") {
      return getContainer();
    }
    if (_typeof(getContainer) === "object" && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }
  return document.body;
};
var Portal = defineComponent({
  name: "PortalWrapper",
  inheritAttrs: false,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: PropTypes.any,
    visible: {
      type: Boolean,
      default: void 0
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var container = ref();
    var componentRef = ref();
    var rafId = ref();
    var scrollLocker = new ScrollLocker({
      container: getParent(props.getContainer)
    });
    var removeCurrentContainer = function removeCurrentContainer2() {
      var _a, _b;
      (_b = (_a = container.value) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(container.value);
    };
    var attachToParent = function attachToParent2() {
      var force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (force || container.value && !container.value.parentNode) {
        var parent = getParent(props.getContainer);
        if (parent) {
          parent.appendChild(container.value);
          return true;
        }
        return false;
      }
      return true;
    };
    var getContainer = function getContainer2() {
      if (!supportDom) {
        return null;
      }
      if (!container.value) {
        container.value = document.createElement("div");
        attachToParent(true);
      }
      setWrapperClassName();
      return container.value;
    };
    var setWrapperClassName = function setWrapperClassName2() {
      var wrapperClassName = props.wrapperClassName;
      if (container.value && wrapperClassName && wrapperClassName !== container.value.className) {
        container.value.className = wrapperClassName;
      }
    };
    onUpdated(function() {
      setWrapperClassName();
      attachToParent();
    });
    var switchScrolling = function switchScrolling2() {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        switchScrollingEffect();
        cacheOverflow = setStyle({
          overflow: "hidden",
          overflowX: "hidden",
          overflowY: "hidden"
        });
      } else if (!openCount) {
        setStyle(cacheOverflow);
        cacheOverflow = {};
        switchScrollingEffect(true);
      }
    };
    var instance = getCurrentInstance();
    onMounted(function() {
      var init = false;
      watch([function() {
        return props.visible;
      }, function() {
        return props.getContainer;
      }], function(_ref2, _ref3) {
        var _ref4 = _slicedToArray(_ref2, 2), visible = _ref4[0], getContainer2 = _ref4[1];
        var _ref5 = _slicedToArray(_ref3, 2), prevVisible = _ref5[0], prevGetContainer = _ref5[1];
        if (supportDom && getParent(props.getContainer) === document.body) {
          if (visible && !prevVisible) {
            openCount += 1;
          } else if (init) {
            openCount -= 1;
          }
        }
        if (init) {
          var getContainerIsFunc = typeof getContainer2 === "function" && typeof prevGetContainer === "function";
          if (getContainerIsFunc ? getContainer2.toString() !== prevGetContainer.toString() : getContainer2 !== prevGetContainer) {
            removeCurrentContainer();
          }
          if (visible && visible !== prevVisible && supportDom && getParent(getContainer2) !== scrollLocker.getContainer()) {
            scrollLocker.reLock({
              container: getParent(getContainer2)
            });
          }
        }
        init = true;
      }, {
        immediate: true,
        flush: "post"
      });
      nextTick(function() {
        if (!attachToParent()) {
          rafId.value = wrapperRaf(function() {
            instance.update();
          });
        }
      });
    });
    onBeforeUnmount(function() {
      var visible = props.visible, getContainer2 = props.getContainer;
      if (supportDom && getParent(getContainer2) === document.body) {
        openCount = visible && openCount ? openCount - 1 : openCount;
      }
      removeCurrentContainer();
      wrapperRaf.cancel(rafId.value);
    });
    return function() {
      var forceRender = props.forceRender, visible = props.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount2() {
          return openCount;
        },
        getContainer,
        switchScrollingEffect: switchScrolling,
        scrollLocker
      };
      if (forceRender || visible || componentRef.value) {
        portal = createVNode(Portal$1, {
          "getContainer": getContainer,
          "ref": componentRef
        }, {
          default: function _default() {
            var _a;
            return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, childProps);
          }
        });
      }
      return portal;
    };
  }
});
function dialogPropTypes() {
  return {
    keyboard: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    afterClose: Function,
    closable: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    mousePosition: PropTypes.shape({
      x: Number,
      y: Number
    }).loose,
    title: PropTypes.any,
    footer: PropTypes.any,
    transitionName: String,
    maskTransitionName: String,
    animation: PropTypes.any,
    maskAnimation: PropTypes.any,
    wrapStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: PropTypes.any,
    maskProps: PropTypes.any,
    wrapProps: PropTypes.any,
    getContainer: PropTypes.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: PropTypes.any,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getOpenCount: Function,
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    onClose: Function,
    modalRender: Function
  };
}
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;
  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }
  return motionName;
}
var uuid = -1;
function getUUID() {
  uuid += 1;
  return uuid;
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? "Y" : "X", "Offset")];
  var method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
};
var Content = defineComponent({
  name: "Content",
  inheritAttrs: false,
  props: _extends(_extends({}, dialogPropTypes()), {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup: function setup2(props, _ref) {
    var expose = _ref.expose, slots = _ref.slots, attrs = _ref.attrs;
    var sentinelStartRef = ref();
    var sentinelEndRef = ref();
    var dialogRef = ref();
    expose({
      focus: function focus() {
        var _a;
        (_a = sentinelStartRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document, activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.value) {
          sentinelStartRef.value.focus();
        } else if (!next && activeElement === sentinelStartRef.value) {
          sentinelEndRef.value.focus();
        }
      }
    });
    var transformOrigin = ref();
    var contentStyleRef = computed(function() {
      var width = props.width, height = props.height;
      var contentStyle = {};
      if (width !== void 0) {
        contentStyle.width = typeof width === "number" ? "".concat(width, "px") : width;
      }
      if (height !== void 0) {
        contentStyle.height = typeof height === "number" ? "".concat(height, "px") : height;
      }
      if (transformOrigin.value) {
        contentStyle.transformOrigin = transformOrigin.value;
      }
      return contentStyle;
    });
    var onPrepare = function onPrepare2() {
      nextTick(function() {
        if (dialogRef.value) {
          var elementOffset = offset(dialogRef.value);
          transformOrigin.value = props.mousePosition ? "".concat(props.mousePosition.x - elementOffset.left, "px ").concat(props.mousePosition.y - elementOffset.top, "px") : "";
        }
      });
    };
    var onVisibleChanged = function onVisibleChanged2(visible) {
      props.onVisibleChanged(visible);
    };
    return function() {
      var _a, _b, _c, _d;
      var prefixCls = props.prefixCls, _props$footer = props.footer, footer = _props$footer === void 0 ? (_a = slots.footer) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$footer, _props$title = props.title, title = _props$title === void 0 ? (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$title, ariaId = props.ariaId, closable = props.closable, _props$closeIcon = props.closeIcon, closeIcon = _props$closeIcon === void 0 ? (_c = slots.closeIcon) === null || _c === void 0 ? void 0 : _c.call(slots) : _props$closeIcon, onClose = props.onClose, bodyStyle = props.bodyStyle, bodyProps = props.bodyProps, onMousedown = props.onMousedown, onMouseup = props.onMouseup, visible = props.visible, _props$modalRender = props.modalRender, modalRender = _props$modalRender === void 0 ? slots.modalRender : _props$modalRender, destroyOnClose = props.destroyOnClose, motionName = props.motionName;
      var footerNode;
      if (footer) {
        footerNode = createVNode("div", {
          "class": "".concat(prefixCls, "-footer")
        }, [footer]);
      }
      var headerNode;
      if (title) {
        headerNode = createVNode("div", {
          "class": "".concat(prefixCls, "-header")
        }, [createVNode("div", {
          "class": "".concat(prefixCls, "-title"),
          "id": ariaId
        }, [title])]);
      }
      var closer;
      if (closable) {
        closer = createVNode("button", {
          "type": "button",
          "onClick": onClose,
          "aria-label": "Close",
          "class": "".concat(prefixCls, "-close")
        }, [closeIcon || createVNode("span", {
          "class": "".concat(prefixCls, "-close-x")
        }, null)]);
      }
      var content = createVNode("div", {
        "class": "".concat(prefixCls, "-content")
      }, [closer, headerNode, createVNode("div", _objectSpread2({
        "class": "".concat(prefixCls, "-body"),
        "style": bodyStyle
      }, bodyProps), [(_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots)]), footerNode]);
      var transitionProps = getTransitionProps(motionName);
      return createVNode(Transition, _objectSpread2(_objectSpread2({}, transitionProps), {}, {
        "onBeforeEnter": onPrepare,
        "onAfterEnter": function onAfterEnter() {
          return onVisibleChanged(true);
        },
        "onAfterLeave": function onAfterLeave() {
          return onVisibleChanged(false);
        }
      }), {
        default: function _default() {
          return [visible || !destroyOnClose ? withDirectives(createVNode("div", _objectSpread2(_objectSpread2({}, attrs), {}, {
            "ref": dialogRef,
            "key": "dialog-element",
            "role": "document",
            "style": [contentStyleRef.value, attrs.style],
            "class": [prefixCls, attrs.class],
            "onMousedown": onMousedown,
            "onMouseup": onMouseup
          }), [createVNode("div", {
            "tabindex": 0,
            "ref": sentinelStartRef,
            "style": sentinelStyle,
            "aria-hidden": "true"
          }, null), modalRender ? modalRender({
            originVNode: content
          }) : content, createVNode("div", {
            "tabindex": 0,
            "ref": sentinelEndRef,
            "style": sentinelStyle,
            "aria-hidden": "true"
          }, null)]), [[vShow, visible]]) : null];
        }
      });
    };
  }
});
function _objectDestructuringEmpty(obj) {
  if (obj == null)
    throw new TypeError("Cannot destructure undefined");
}
var Mask = defineComponent({
  name: "Mask",
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup: function setup3(props, _ref) {
    _objectDestructuringEmpty(_ref);
    return function() {
      var prefixCls = props.prefixCls, visible = props.visible, maskProps = props.maskProps, motionName = props.motionName;
      var transitionProps = getTransitionProps(motionName);
      return createVNode(Transition, transitionProps, {
        default: function _default() {
          return [withDirectives(createVNode("div", _objectSpread2({
            "class": "".concat(prefixCls, "-mask")
          }, maskProps), null), [[vShow, visible]])];
        }
      });
    };
  }
});
var Dialog = defineComponent({
  name: "Dialog",
  inheritAttrs: false,
  props: initDefaultProps(_extends(_extends({}, dialogPropTypes()), {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: "rc-dialog",
    getOpenCount: function getOpenCount() {
      return null;
    },
    focusTriggerAfterClose: true
  }),
  setup: function setup4(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var lastOutSideActiveElementRef = ref();
    var wrapperRef = ref();
    var contentRef = ref();
    var animatedVisible = ref(props.visible);
    var ariaIdRef = ref("vcDialogTitle".concat(getUUID()));
    var onDialogVisibleChanged = function onDialogVisibleChanged2(newVisible) {
      var _a, _b;
      if (newVisible) {
        if (!contains(wrapperRef.value, document.activeElement)) {
          lastOutSideActiveElementRef.value = document.activeElement;
          (_a = contentRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
      } else {
        var preAnimatedVisible = animatedVisible.value;
        animatedVisible.value = false;
        if (props.mask && lastOutSideActiveElementRef.value && props.focusTriggerAfterClose) {
          try {
            lastOutSideActiveElementRef.value.focus({
              preventScroll: true
            });
          } catch (e) {
          }
          lastOutSideActiveElementRef.value = null;
        }
        if (preAnimatedVisible) {
          (_b = props.afterClose) === null || _b === void 0 ? void 0 : _b.call(props);
        }
      }
    };
    var onInternalClose = function onInternalClose2(e) {
      var _a;
      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    var contentClickRef = ref(false);
    var contentTimeoutRef = ref();
    var onContentMouseDown = function onContentMouseDown2() {
      clearTimeout(contentTimeoutRef.value);
      contentClickRef.value = true;
    };
    var onContentMouseUp = function onContentMouseUp2() {
      contentTimeoutRef.value = setTimeout(function() {
        contentClickRef.value = false;
      });
    };
    var onWrapperClick = function onWrapperClick2(e) {
      if (!props.maskClosable)
        return null;
      if (contentClickRef.value) {
        contentClickRef.value = false;
      } else if (wrapperRef.value === e.target) {
        onInternalClose(e);
      }
    };
    var onWrapperKeyDown = function onWrapperKeyDown2(e) {
      if (props.keyboard && e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        onInternalClose(e);
        return;
      }
      if (props.visible) {
        if (e.keyCode === KeyCode.TAB) {
          contentRef.value.changeActive(!e.shiftKey);
        }
      }
    };
    watch(function() {
      return props.visible;
    }, function() {
      if (props.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: "post"
    });
    onBeforeUnmount(function() {
      var _a;
      clearTimeout(contentTimeoutRef.value);
      (_a = props.scrollLocker) === null || _a === void 0 ? void 0 : _a.unLock();
    });
    watchEffect(function() {
      var _a, _b;
      (_a = props.scrollLocker) === null || _a === void 0 ? void 0 : _a.unLock();
      if (animatedVisible.value) {
        (_b = props.scrollLocker) === null || _b === void 0 ? void 0 : _b.lock();
      }
    });
    return function() {
      var prefixCls = props.prefixCls, mask = props.mask, visible = props.visible, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, zIndex = props.zIndex, wrapClassName = props.wrapClassName, rootClassName = props.rootClassName, wrapStyle = props.wrapStyle, closable = props.closable, maskProps = props.maskProps, maskStyle = props.maskStyle, transitionName = props.transitionName, animation = props.animation, wrapProps = props.wrapProps, _props$title = props.title, title = _props$title === void 0 ? slots.title : _props$title;
      var style = attrs.style, className = attrs.class;
      return createVNode("div", _objectSpread2({
        "class": ["".concat(prefixCls, "-root"), rootClassName]
      }, pickAttrs(props, {
        data: true
      })), [createVNode(Mask, {
        "prefixCls": prefixCls,
        "visible": mask && visible,
        "motionName": getMotionName(prefixCls, maskTransitionName, maskAnimation),
        "style": _extends({
          zIndex
        }, maskStyle),
        "maskProps": maskProps
      }, null), createVNode("div", _objectSpread2({
        "tabIndex": -1,
        "onKeydown": onWrapperKeyDown,
        "class": classNames("".concat(prefixCls, "-wrap"), wrapClassName),
        "ref": wrapperRef,
        "onClick": onWrapperClick,
        "role": "dialog",
        "aria-labelledby": title ? ariaIdRef.value : null,
        "style": _extends(_extends({
          zIndex
        }, wrapStyle), {
          display: !animatedVisible.value ? "none" : null
        })
      }, wrapProps), [createVNode(Content, _objectSpread2(_objectSpread2({}, omit(props, ["scrollLocker"])), {}, {
        "style": style,
        "class": className,
        "onMousedown": onContentMouseDown,
        "onMouseup": onContentMouseUp,
        "ref": contentRef,
        "closable": closable,
        "ariaId": ariaIdRef.value,
        "prefixCls": prefixCls,
        "visible": visible,
        "onClose": onInternalClose,
        "onVisibleChanged": onDialogVisibleChanged,
        "motionName": getMotionName(prefixCls, transitionName, animation)
      }), slots)])]);
    };
  }
});
var IDialogPropTypes = dialogPropTypes();
var DialogWrap = defineComponent({
  name: "DialogWrap",
  inheritAttrs: false,
  props: initDefaultProps(IDialogPropTypes, {
    visible: false
  }),
  setup: function setup5(props, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var animatedVisible = ref(props.visible);
    useProvidePortal({}, {
      inTriggerContext: false
    });
    watch(function() {
      return props.visible;
    }, function() {
      if (props.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: "post"
    });
    return function() {
      var visible = props.visible, getContainer = props.getContainer, forceRender = props.forceRender, _props$destroyOnClose = props.destroyOnClose, destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose, _afterClose = props.afterClose;
      var dialogProps = _extends(_extends(_extends({}, props), attrs), {
        ref: "_component",
        key: "dialog"
      });
      if (getContainer === false) {
        return createVNode(Dialog, _objectSpread2(_objectSpread2({}, dialogProps), {}, {
          "getOpenCount": function getOpenCount2() {
            return 2;
          }
        }), slots);
      }
      if (!forceRender && destroyOnClose && !animatedVisible.value) {
        return null;
      }
      return createVNode(Portal, {
        "visible": visible,
        "forceRender": forceRender,
        "getContainer": getContainer
      }, {
        default: function _default(childProps) {
          dialogProps = _extends(_extends(_extends({}, dialogProps), childProps), {
            afterClose: function afterClose() {
              _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
              animatedVisible.value = false;
            }
          });
          return createVNode(Dialog, dialogProps, slots);
        }
      });
    };
  }
});
var DialogWrap$1 = DialogWrap;
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
var mousePosition = null;
var getClickPosition = function getClickPosition2(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  setTimeout(function() {
    return mousePosition = null;
  }, 100);
};
if (canUseDocElement()) {
  addEventListenerWrap(document.documentElement, "click", getClickPosition, true);
}
var modalProps = function modalProps2() {
  return {
    prefixCls: String,
    visible: {
      type: Boolean,
      default: void 0
    },
    confirmLoading: {
      type: Boolean,
      default: void 0
    },
    title: PropTypes.any,
    closable: {
      type: Boolean,
      default: void 0
    },
    closeIcon: PropTypes.any,
    onOk: Function,
    onCancel: Function,
    "onUpdate:visible": Function,
    onChange: Function,
    afterClose: Function,
    centered: {
      type: Boolean,
      default: void 0
    },
    width: [String, Number],
    footer: PropTypes.any,
    okText: PropTypes.any,
    okType: String,
    cancelText: PropTypes.any,
    icon: PropTypes.any,
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    forceRender: {
      type: Boolean,
      default: void 0
    },
    okButtonProps: Object,
    cancelButtonProps: Object,
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    wrapClassName: String,
    maskTransitionName: String,
    transitionName: String,
    getContainer: {
      type: [String, Function, Boolean, Object],
      default: void 0
    },
    zIndex: Number,
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    keyboard: {
      type: Boolean,
      default: void 0
    },
    wrapProps: Object,
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    modalRender: Function
  };
};
var destroyFns = [];
var Modal = defineComponent({
  name: "AModal",
  inheritAttrs: false,
  props: initDefaultProps(modalProps(), {
    width: 520,
    transitionName: "zoom",
    maskTransitionName: "fade",
    confirmLoading: false,
    visible: false,
    okType: "primary"
  }),
  setup: function setup6(props, _ref) {
    var emit = _ref.emit, slots = _ref.slots, attrs = _ref.attrs;
    var _useLocaleReceiver = useLocaleReceiver("Modal"), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), locale = _useLocaleReceiver2[0];
    var _useConfigInject = useConfigInject("modal", props), prefixCls = _useConfigInject.prefixCls, rootPrefixCls = _useConfigInject.rootPrefixCls, direction = _useConfigInject.direction, getPopupContainer = _useConfigInject.getPopupContainer;
    var handleCancel = function handleCancel2(e) {
      emit("update:visible", false);
      emit("cancel", e);
      emit("change", false);
    };
    var handleOk = function handleOk2(e) {
      emit("ok", e);
    };
    var renderFooter = function renderFooter2() {
      var _a, _b;
      var _props$okText = props.okText, okText = _props$okText === void 0 ? (_a = slots.okText) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$okText, okType = props.okType, _props$cancelText = props.cancelText, cancelText = _props$cancelText === void 0 ? (_b = slots.cancelText) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$cancelText, confirmLoading = props.confirmLoading;
      return createVNode(Fragment, null, [createVNode(Button, _objectSpread2({
        "onClick": handleCancel
      }, props.cancelButtonProps), {
        default: function _default() {
          return [cancelText || locale.value.cancelText];
        }
      }), createVNode(Button, _objectSpread2(_objectSpread2({}, convertLegacyProps(okType)), {}, {
        "loading": confirmLoading,
        "onClick": handleOk
      }, props.okButtonProps), {
        default: function _default() {
          return [okText || locale.value.okText];
        }
      })]);
    };
    return function() {
      var _classNames;
      var _a;
      props.prefixCls;
      var visible = props.visible, wrapClassName = props.wrapClassName, centered = props.centered, getContainer = props.getContainer, _props$closeIcon = props.closeIcon, _closeIcon = _props$closeIcon === void 0 ? (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$closeIcon, _props$focusTriggerAf = props.focusTriggerAfterClose, focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf, restProps = __rest(props, ["prefixCls", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]);
      var wrapClassNameExtended = classNames(wrapClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-centered"), !!centered), _defineProperty(_classNames, "".concat(prefixCls.value, "-wrap-rtl"), direction.value === "rtl"), _classNames));
      return createVNode(DialogWrap$1, _objectSpread2(_objectSpread2(_objectSpread2({}, restProps), attrs), {}, {
        "getContainer": getContainer || getPopupContainer.value,
        "prefixCls": prefixCls.value,
        "wrapClassName": wrapClassNameExtended,
        "visible": visible,
        "mousePosition": mousePosition,
        "onClose": handleCancel,
        "focusTriggerAfterClose": focusTriggerAfterClose,
        "transitionName": getTransitionName(rootPrefixCls.value, "zoom", props.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls.value, "fade", props.maskTransitionName)
      }), _extends(_extends({}, slots), {
        footer: slots.footer || renderFooter,
        closeIcon: function closeIcon() {
          return createVNode("span", {
            "class": "".concat(prefixCls.value, "-close-x")
          }, [_closeIcon || createVNode(CloseOutlined, {
            "class": "".concat(prefixCls.value, "-close-icon")
          }, null)]);
        }
      }));
    };
  }
});
export { Modal as M, Portal as P, getTargetScrollBarSize as a, destroyFns as d, getScrollBarSize as g };
