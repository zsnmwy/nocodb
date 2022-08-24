import { d as defineComponent, aE as useConfigInject, s as onMounted, P as nextTick, bk as findDOMNode, a_ as onBeforeUnmount, cm as getCurrentInstance, aY as wrapperRaf } from "./entry-3fb260b7.mjs";
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: "transitionstart",
    WebkitTransition: "webkitTransitionStart",
    MozTransition: "mozTransitionStart",
    OTransition: "oTransitionStart",
    msTransition: "MSTransitionStart"
  },
  animationstart: {
    animation: "animationstart",
    WebkitAnimation: "webkitAnimationStart",
    MozAnimation: "mozAnimationStart",
    OAnimation: "oAnimationStart",
    msAnimation: "MSAnimationStart"
  }
};
var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "mozTransitionEnd",
    OTransition: "oTransitionEnd",
    msTransition: "MSTransitionEnd"
  },
  animationend: {
    animation: "animationend",
    WebkitAnimation: "webkitAnimationEnd",
    MozAnimation: "mozAnimationEnd",
    OAnimation: "oAnimationEnd",
    msAnimation: "MSAnimationEnd"
  }
};
var startEvents = [];
var endEvents = [];
function detectEvents() {
  var testEl = document.createElement("div");
  var style = testEl.style;
  if (!("AnimationEvent" in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }
  if (!("TransitionEvent" in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }
  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }
  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}
if (typeof window !== "undefined" && typeof document !== "undefined") {
  detectEvents();
}
function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}
function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}
var TransitionEvents = {
  startEvents,
  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function(startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function(startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },
  endEvents,
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function(endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function(endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};
var TransitionEvents$1 = TransitionEvents;
var styleForPesudo;
function isHidden(element) {
  return !element || element.offsetParent === null;
}
function isNotGrey(color) {
  var match = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
var Wave = defineComponent({
  name: "Wave",
  props: {
    insertExtraNode: Boolean,
    disabled: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots, expose = _ref.expose;
    var instance = getCurrentInstance();
    var _useConfigInject = useConfigInject("", props), csp = _useConfigInject.csp, prefixCls = _useConfigInject.prefixCls;
    expose({
      csp
    });
    var eventIns = null;
    var clickWaveTimeoutId = null;
    var animationStartId = null;
    var animationStart = false;
    var extraNode = null;
    var isUnmounted = false;
    var onTransitionStart = function onTransitionStart2(e) {
      if (isUnmounted)
        return;
      var node = findDOMNode(instance);
      if (!e || e.target !== node) {
        return;
      }
      if (!animationStart) {
        resetEffect(node);
      }
    };
    var onTransitionEnd = function onTransitionEnd2(e) {
      if (!e || e.animationName !== "fadeEffect") {
        return;
      }
      resetEffect(e.target);
    };
    var getAttributeName = function getAttributeName2() {
      var insertExtraNode = props.insertExtraNode;
      return insertExtraNode ? "".concat(prefixCls.value, "-click-animating") : "".concat(prefixCls.value, "-click-animating-without-extra-node");
    };
    var onClick = function onClick2(node, waveColor) {
      var _a;
      var insertExtraNode = props.insertExtraNode, disabled = props.disabled;
      if (disabled || !node || isHidden(node) || node.className.indexOf("-leave") >= 0) {
        return;
      }
      extraNode = document.createElement("div");
      extraNode.className = "".concat(prefixCls.value, "-click-animating-node");
      var attributeName = getAttributeName();
      node.removeAttribute(attributeName);
      node.setAttribute(attributeName, "true");
      styleForPesudo = styleForPesudo || document.createElement("style");
      if (waveColor && waveColor !== "#ffffff" && waveColor !== "rgb(255, 255, 255)" && isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) && waveColor !== "transparent") {
        if ((_a = csp.value) === null || _a === void 0 ? void 0 : _a.nonce) {
          styleForPesudo.nonce = csp.value.nonce;
        }
        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = "\n        [".concat(prefixCls.value, "-click-animating-without-extra-node='true']::after, .").concat(prefixCls.value, "-click-animating-node {\n          --antd-wave-shadow-color: ").concat(waveColor, ";\n        }");
        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }
      if (insertExtraNode) {
        node.appendChild(extraNode);
      }
      TransitionEvents$1.addStartEventListener(node, onTransitionStart);
      TransitionEvents$1.addEndEventListener(node, onTransitionEnd);
    };
    var resetEffect = function resetEffect2(node) {
      if (!node || node === extraNode || !(node instanceof Element)) {
        return;
      }
      var insertExtraNode = props.insertExtraNode;
      var attributeName = getAttributeName();
      node.setAttribute(attributeName, "false");
      if (styleForPesudo) {
        styleForPesudo.innerHTML = "";
      }
      if (insertExtraNode && extraNode && node.contains(extraNode)) {
        node.removeChild(extraNode);
      }
      TransitionEvents$1.removeStartEventListener(node, onTransitionStart);
      TransitionEvents$1.removeEndEventListener(node, onTransitionEnd);
    };
    var bindAnimationEvent = function bindAnimationEvent2(node) {
      if (!node || !node.getAttribute || node.getAttribute("disabled") || node.className.indexOf("disabled") >= 0) {
        return;
      }
      var newClick = function newClick2(e) {
        if (e.target.tagName === "INPUT" || isHidden(e.target)) {
          return;
        }
        resetEffect(node);
        var waveColor = getComputedStyle(node).getPropertyValue("border-top-color") || getComputedStyle(node).getPropertyValue("border-color") || getComputedStyle(node).getPropertyValue("background-color");
        clickWaveTimeoutId = setTimeout(function() {
          return onClick(node, waveColor);
        }, 0);
        wrapperRaf.cancel(animationStartId);
        animationStart = true;
        animationStartId = wrapperRaf(function() {
          animationStart = false;
        }, 10);
      };
      node.addEventListener("click", newClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener("click", newClick, true);
        }
      };
    };
    onMounted(function() {
      nextTick(function() {
        var node = findDOMNode(instance);
        if (node.nodeType !== 1) {
          return;
        }
        eventIns = bindAnimationEvent(node);
      });
    });
    onBeforeUnmount(function() {
      if (eventIns) {
        eventIns.cancel();
      }
      clearTimeout(clickWaveTimeoutId);
      isUnmounted = true;
    });
    return function() {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
    };
  }
});
export { Wave as W };
