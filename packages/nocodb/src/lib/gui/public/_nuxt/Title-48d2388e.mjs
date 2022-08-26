import { d as defineComponent, r as ref, s as onMounted, aC as _extends, g as createVNode, aK as _objectSpread2, aX as KeyCode, bd as AntdIcon, n as reactive, w as watch, e as computed, aJ as _defineProperty$3, dw as createApp, aE as useConfigInject, aD as classNames, di as isStyleSupport, aN as _typeof, a_ as onBeforeUnmount, aY as wrapperRaf, P as nextTick, a6 as watchEffect, ba as warning, b0 as _slicedToArray, X as __unplugin_components_1, F as Fragment, cT as toRaw, co as ResizeObserver, dx as LocaleReceiver, dy as tupleNum } from "./entry-d9bc2aad.mjs";
import { o as omit } from "./omit-79be01c9.mjs";
import { _ as __unplugin_components_13 } from "./TextArea-aec9452a.mjs";
import { C as CheckOutlined } from "./index-0b813702.mjs";
import { u as useMergedState } from "./useState-7c8b49a7.mjs";
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
var inlineStyle = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-block"
};
var TransButton = defineComponent({
  name: "TransButton",
  inheritAttrs: false,
  props: {
    noStyle: {
      type: Boolean,
      default: void 0
    },
    onClick: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots, emit = _ref.emit, attrs = _ref.attrs, expose = _ref.expose;
    var domRef = ref();
    var onKeyDown = function onKeyDown2(event) {
      var keyCode = event.keyCode;
      if (keyCode === KeyCode.ENTER) {
        event.preventDefault();
      }
    };
    var onKeyUp = function onKeyUp2(event) {
      var keyCode = event.keyCode;
      if (keyCode === KeyCode.ENTER) {
        emit("click", event);
      }
    };
    var onClick = function onClick2(e) {
      emit("click", e);
    };
    var focus = function focus2() {
      if (domRef.value) {
        domRef.value.focus();
      }
    };
    var blur = function blur2() {
      if (domRef.value) {
        domRef.value.blur();
      }
    };
    onMounted(function() {
      if (props.autofocus) {
        focus();
      }
    });
    expose({
      focus,
      blur
    });
    return function() {
      var _a;
      var noStyle = props.noStyle, disabled = props.disabled, restProps = __rest$3(props, ["noStyle", "disabled"]);
      var mergedStyle = {};
      if (!noStyle) {
        mergedStyle = _extends({}, inlineStyle);
      }
      if (disabled) {
        mergedStyle.pointerEvents = "none";
      }
      return createVNode("div", _objectSpread2(_objectSpread2(_objectSpread2({
        "role": "button",
        "tabindex": 0,
        "ref": domRef
      }, restProps), attrs), {}, {
        "onClick": onClick,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp,
        "style": _extends(_extends({}, mergedStyle), attrs.style || {})
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var TransButton$1 = TransButton;
var EnterOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, "name": "enter", "theme": "outlined" };
var EnterOutlinedSvg = EnterOutlined$2;
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
var EnterOutlined = function EnterOutlined2(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": EnterOutlinedSvg
  }), null);
};
EnterOutlined.displayName = "EnterOutlined";
EnterOutlined.inheritAttrs = false;
var EnterOutlined$1 = EnterOutlined;
var editableProps = function editableProps2() {
  return {
    prefixCls: String,
    value: String,
    maxlength: Number,
    autoSize: {
      type: [Boolean, Object]
    },
    onSave: Function,
    onCancel: Function,
    onEnd: Function,
    onChange: Function,
    originContent: String,
    direction: String
  };
};
var Editable = defineComponent({
  name: "Editable",
  props: editableProps(),
  setup: function setup2(props, _ref) {
    var emit = _ref.emit, slots = _ref.slots;
    var state = reactive({
      current: props.value || "",
      lastKeyCode: void 0,
      inComposition: false,
      cancelFlag: false
    });
    watch(function() {
      return props.value;
    }, function(current) {
      state.current = current;
    });
    var textArea = ref();
    onMounted(function() {
      var _a;
      if (textArea.value) {
        var resizableTextArea = (_a = textArea.value) === null || _a === void 0 ? void 0 : _a.resizableTextArea;
        var innerTextArea = resizableTextArea === null || resizableTextArea === void 0 ? void 0 : resizableTextArea.textArea;
        innerTextArea.focus();
        var length = innerTextArea.value.length;
        innerTextArea.setSelectionRange(length, length);
      }
    });
    function saveTextAreaRef(node) {
      textArea.value = node;
    }
    function onChange(_ref2) {
      var value = _ref2.target.value;
      state.current = value.replace(/[\r\n]/g, "");
      emit("change", state.current);
    }
    function onCompositionStart() {
      state.inComposition = true;
    }
    function onCompositionEnd() {
      state.inComposition = false;
    }
    function onKeyDown(e) {
      var keyCode = e.keyCode;
      if (keyCode === KeyCode.ENTER) {
        e.preventDefault();
      }
      if (state.inComposition)
        return;
      state.lastKeyCode = keyCode;
    }
    function onKeyUp(e) {
      var keyCode = e.keyCode, ctrlKey = e.ctrlKey, altKey = e.altKey, metaKey = e.metaKey, shiftKey = e.shiftKey;
      if (state.lastKeyCode === keyCode && !state.inComposition && !ctrlKey && !altKey && !metaKey && !shiftKey) {
        if (keyCode === KeyCode.ENTER) {
          confirmChange();
          emit("end");
        } else if (keyCode === KeyCode.ESC) {
          state.current = props.originContent;
          emit("cancel");
        }
      }
    }
    function onBlur() {
      confirmChange();
    }
    function confirmChange() {
      emit("save", state.current.trim());
    }
    var textAreaClassName = computed(function() {
      var _ref3;
      return _ref3 = {}, _defineProperty$3(_ref3, "".concat(props.prefixCls), true), _defineProperty$3(_ref3, "".concat(props.prefixCls, "-edit-content"), true), _defineProperty$3(_ref3, "".concat(props.prefixCls, "-rtl"), props.direction === "rtl"), _ref3;
    });
    return function() {
      return createVNode("div", {
        "class": textAreaClassName.value
      }, [createVNode(__unplugin_components_13, {
        "ref": saveTextAreaRef,
        "maxlength": props.maxlength,
        "value": state.current,
        "onChange": onChange,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp,
        "onCompositionstart": onCompositionStart,
        "onCompositionend": onCompositionEnd,
        "onBlur": onBlur,
        "rows": 1,
        "autoSize": props.autoSize === void 0 || props.autoSize
      }, null), slots.enterIcon ? slots.enterIcon({
        className: "".concat(props.prefixCls, "-edit-content-confirm")
      }) : createVNode(EnterOutlined$1, {
        "class": "".concat(props.prefixCls, "-edit-content-confirm")
      }, null)]);
    };
  }
});
var Editable$1 = Editable;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var ellipsisContainer;
var wrapperStyle = {
  padding: 0,
  margin: 0,
  display: "inline",
  lineHeight: "inherit"
};
function styleToString(style) {
  var styleNames = Array.prototype.slice.apply(style);
  return styleNames.map(function(name) {
    return "".concat(name, ": ").concat(style.getPropertyValue(name), ";");
  }).join("");
}
function resetDomStyles(target, origin) {
  target.setAttribute("aria-hidden", "true");
  var originStyle = window.getComputedStyle(origin);
  var originCSS = styleToString(originStyle);
  target.setAttribute("style", originCSS);
  target.style.position = "fixed";
  target.style.left = "0";
  target.style.height = "auto";
  target.style.minHeight = "auto";
  target.style.maxHeight = "auto";
  target.style.paddingTop = "0";
  target.style.paddingBottom = "0";
  target.style.borderTopWidth = "0";
  target.style.borderBottomWidth = "0";
  target.style.top = "-999999px";
  target.style.zIndex = "-1000";
  target.style.textOverflow = "clip";
  target.style.whiteSpace = "normal";
  target.style.webkitLineClamp = "none";
}
function getRealLineHeight(originElement) {
  var heightContainer = document.createElement("div");
  resetDomStyles(heightContainer, originElement);
  heightContainer.appendChild(document.createTextNode("text"));
  document.body.appendChild(heightContainer);
  var realHeight = heightContainer.getBoundingClientRect().height;
  document.body.removeChild(heightContainer);
  return realHeight;
}
var measure = function(originElement, option, content, fixedContent, ellipsisStr) {
  if (!ellipsisContainer) {
    ellipsisContainer = document.createElement("div");
    ellipsisContainer.setAttribute("aria-hidden", "true");
    document.body.appendChild(ellipsisContainer);
  }
  var rows = option.rows, _option$suffix = option.suffix, suffix = _option$suffix === void 0 ? "" : _option$suffix;
  var lineHeight = getRealLineHeight(originElement);
  var maxHeight = Math.round(lineHeight * rows * 100) / 100;
  resetDomStyles(ellipsisContainer, originElement);
  var vm = createApp({
    render: function render() {
      return createVNode("div", {
        "style": wrapperStyle
      }, [createVNode("span", {
        "style": wrapperStyle
      }, [content, suffix]), createVNode("span", {
        "style": wrapperStyle
      }, [fixedContent])]);
    }
  });
  vm.mount(ellipsisContainer);
  function inRange() {
    var currentHeight = Math.round(ellipsisContainer.getBoundingClientRect().height * 100) / 100;
    return currentHeight - 0.1 <= maxHeight;
  }
  if (inRange()) {
    vm.unmount();
    return {
      content,
      text: ellipsisContainer.innerHTML,
      ellipsis: false
    };
  }
  var childNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes).filter(function(_ref) {
    var nodeType = _ref.nodeType, data = _ref.data;
    return nodeType !== COMMENT_NODE && data !== "";
  });
  var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
  vm.unmount();
  var ellipsisChildren = [];
  ellipsisContainer.innerHTML = "";
  var ellipsisContentHolder = document.createElement("span");
  ellipsisContainer.appendChild(ellipsisContentHolder);
  var ellipsisTextNode = document.createTextNode(ellipsisStr + suffix);
  ellipsisContentHolder.appendChild(ellipsisTextNode);
  fixedNodes.forEach(function(childNode) {
    ellipsisContainer.appendChild(childNode);
  });
  function appendChildNode(node) {
    ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
  }
  function measureText(textNode, fullText) {
    var startLoc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    var endLoc = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : fullText.length;
    var lastSuccessLoc = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    var midLoc = Math.floor((startLoc + endLoc) / 2);
    var currentText = fullText.slice(0, midLoc);
    textNode.textContent = currentText;
    if (startLoc >= endLoc - 1) {
      for (var step = endLoc; step >= startLoc; step -= 1) {
        var currentStepText = fullText.slice(0, step);
        textNode.textContent = currentStepText;
        if (inRange() || !currentStepText) {
          return step === fullText.length ? {
            finished: false,
            vNode: fullText
          } : {
            finished: true,
            vNode: currentStepText
          };
        }
      }
    }
    if (inRange()) {
      return measureText(textNode, fullText, midLoc, endLoc, midLoc);
    }
    return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
  }
  function measureNode(childNode) {
    var type = childNode.nodeType;
    if (type === TEXT_NODE) {
      var fullText = childNode.textContent || "";
      var textNode = document.createTextNode(fullText);
      appendChildNode(textNode);
      return measureText(textNode, fullText);
    }
    return {
      finished: false,
      vNode: null
    };
  }
  childNodes.some(function(childNode) {
    var _measureNode = measureNode(childNode), finished = _measureNode.finished, vNode = _measureNode.vNode;
    if (vNode) {
      ellipsisChildren.push(vNode);
    }
    return finished;
  });
  return {
    content: ellipsisChildren,
    text: ellipsisContainer.innerHTML,
    ellipsis: true
  };
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
var typographyProps = function typographyProps2() {
  return {
    prefixCls: String,
    direction: String,
    component: String
  };
};
var Typography = defineComponent({
  name: "ATypography",
  inheritAttrs: false,
  props: typographyProps(),
  setup: function setup3(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var _useConfigInject = useConfigInject("typography", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    return function() {
      var _a;
      var _b = _extends(_extends({}, props), attrs);
      _b.prefixCls;
      _b.class;
      _b.direction;
      var _b$component = _b.component, Component = _b$component === void 0 ? "article" : _b$component, restProps = __rest$2(_b, ["prefixCls", "class", "direction", "component"]);
      return createVNode(Component, _objectSpread2({
        "class": classNames(prefixCls.value, _defineProperty$3({}, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), attrs.class)
      }, restProps), {
        default: function _default() {
          return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
var Typography$1 = Typography;
var deselectCurrent = function deselectCurrent2() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent$1 = deselectCurrent;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
  var message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  var debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent$1();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text;
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var _format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(_format, text);
        } else {
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var CopyOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, "name": "copy", "theme": "outlined" };
var CopyOutlinedSvg = CopyOutlined$2;
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
var CopyOutlined = function CopyOutlined2(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": CopyOutlinedSvg
  }), null);
};
CopyOutlined.displayName = "CopyOutlined";
CopyOutlined.inheritAttrs = false;
var CopyOutlined$1 = CopyOutlined;
var EditOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, "name": "edit", "theme": "outlined" };
var EditOutlinedSvg = EditOutlined$2;
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
var EditOutlined = function EditOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": EditOutlinedSvg
  }), null);
};
EditOutlined.displayName = "EditOutlined";
EditOutlined.inheritAttrs = false;
var EditOutlined$1 = EditOutlined;
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
var isLineClampSupport = isStyleSupport("webkitLineClamp");
var isTextOverflowSupport = isStyleSupport("textOverflow");
var ELLIPSIS_STR = "...";
var baseProps = function baseProps2() {
  return {
    editable: {
      type: [Boolean, Object],
      default: void 0
    },
    copyable: {
      type: [Boolean, Object],
      default: void 0
    },
    prefixCls: String,
    component: String,
    type: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    ellipsis: {
      type: [Boolean, Object],
      default: void 0
    },
    code: {
      type: Boolean,
      default: void 0
    },
    mark: {
      type: Boolean,
      default: void 0
    },
    underline: {
      type: Boolean,
      default: void 0
    },
    delete: {
      type: Boolean,
      default: void 0
    },
    strong: {
      type: Boolean,
      default: void 0
    },
    keyboard: {
      type: Boolean,
      default: void 0
    },
    content: String,
    "onUpdate:content": Function
  };
};
var Base = defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: baseProps(),
  setup: function setup4(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, emit = _ref.emit;
    var _useConfigInject = useConfigInject("typography", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var state = reactive({
      copied: false,
      ellipsisText: "",
      ellipsisContent: null,
      isEllipsis: false,
      expanded: false,
      clientRendered: false,
      expandStr: "",
      copyStr: "",
      copiedStr: "",
      editStr: "",
      copyId: void 0,
      rafId: void 0,
      prevProps: void 0,
      originContent: ""
    });
    var contentRef = ref();
    var editIcon = ref();
    var ellipsis = computed(function() {
      var ellipsis2 = props.ellipsis;
      if (!ellipsis2)
        return {};
      return _extends({
        rows: 1,
        expandable: false
      }, _typeof(ellipsis2) === "object" ? ellipsis2 : null);
    });
    onMounted(function() {
      state.clientRendered = true;
    });
    onBeforeUnmount(function() {
      clearTimeout(state.copyId);
      wrapperRaf.cancel(state.rafId);
    });
    watch([function() {
      return ellipsis.value.rows;
    }, function() {
      return props.content;
    }], function() {
      nextTick(function() {
        resizeOnNextFrame();
      });
    }, {
      flush: "post",
      deep: true,
      immediate: true
    });
    watchEffect(function() {
      if (props.content === void 0) {
        warning(!props.editable, "Typography", "When `editable` is enabled, please use `content` instead of children");
        warning(!props.ellipsis, "Typography", "When `ellipsis` is enabled, please use `content` instead of children");
      }
    });
    function getChildrenText() {
      var _a, _b;
      return props.ellipsis || props.editable ? props.content : (_b = (_a = contentRef.value) === null || _a === void 0 ? void 0 : _a.$el) === null || _b === void 0 ? void 0 : _b.innerText;
    }
    function onExpandClick(e) {
      var onExpand = ellipsis.value.onExpand;
      state.expanded = true;
      onExpand === null || onExpand === void 0 ? void 0 : onExpand(e);
    }
    function onEditClick(e) {
      e.preventDefault();
      state.originContent = props.content;
      triggerEdit(true);
    }
    function onEditChange(value) {
      onContentChange(value);
      triggerEdit(false);
    }
    function onContentChange(value) {
      var onChange = editable.value.onChange;
      if (value !== props.content) {
        emit("update:content", value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
      }
    }
    function onEditCancel() {
      var _a, _b;
      (_b = (_a = editable.value).onCancel) === null || _b === void 0 ? void 0 : _b.call(_a);
      triggerEdit(false);
    }
    function onCopyClick(e) {
      e.preventDefault();
      var copyable = props.copyable;
      var copyConfig = _extends({}, _typeof(copyable) === "object" ? copyable : null);
      if (copyConfig.text === void 0) {
        copyConfig.text = getChildrenText();
      }
      copy(copyConfig.text || "");
      state.copied = true;
      nextTick(function() {
        if (copyConfig.onCopy) {
          copyConfig.onCopy();
        }
        state.copyId = setTimeout(function() {
          state.copied = false;
        }, 3e3);
      });
    }
    var editable = computed(function() {
      var editable2 = props.editable;
      if (!editable2)
        return {
          editing: false
        };
      return _extends({}, _typeof(editable2) === "object" ? editable2 : null);
    });
    var _useMergedState = useMergedState(false, {
      value: computed(function() {
        return editable.value.editing;
      })
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), editing = _useMergedState2[0], setEditing = _useMergedState2[1];
    function triggerEdit(edit) {
      var onStart = editable.value.onStart;
      if (edit && onStart) {
        onStart();
      }
      setEditing(edit);
    }
    watch(editing, function(val) {
      var _a;
      if (!val) {
        (_a = editIcon.value) === null || _a === void 0 ? void 0 : _a.focus();
      }
    }, {
      flush: "post"
    });
    function resizeOnNextFrame() {
      wrapperRaf.cancel(state.rafId);
      state.rafId = wrapperRaf(function() {
        syncEllipsis();
      });
    }
    var canUseCSSEllipsis = computed(function() {
      var _ellipsis$value = ellipsis.value, rows = _ellipsis$value.rows, expandable = _ellipsis$value.expandable, suffix = _ellipsis$value.suffix, onEllipsis = _ellipsis$value.onEllipsis, tooltip = _ellipsis$value.tooltip;
      if (suffix || tooltip)
        return false;
      if (props.editable || props.copyable || expandable || onEllipsis) {
        return false;
      }
      if (rows === 1) {
        return isTextOverflowSupport;
      }
      return isLineClampSupport;
    });
    var syncEllipsis = function syncEllipsis2() {
      var _a, _b;
      var ellipsisText = state.ellipsisText, isEllipsis = state.isEllipsis;
      var _ellipsis$value2 = ellipsis.value, rows = _ellipsis$value2.rows, suffix = _ellipsis$value2.suffix, onEllipsis = _ellipsis$value2.onEllipsis;
      if (!rows || rows < 0 || !((_a = contentRef.value) === null || _a === void 0 ? void 0 : _a.$el) || state.expanded || props.content === void 0)
        return;
      if (canUseCSSEllipsis.value)
        return;
      var _measure = measure((_b = contentRef.value) === null || _b === void 0 ? void 0 : _b.$el, {
        rows,
        suffix
      }, props.content, renderOperations(true), ELLIPSIS_STR), content = _measure.content, text = _measure.text, ell = _measure.ellipsis;
      if (ellipsisText !== text || state.isEllipsis !== ell) {
        state.ellipsisText = text;
        state.ellipsisContent = content;
        state.isEllipsis = ell;
        if (isEllipsis !== ell && onEllipsis) {
          onEllipsis(ell);
        }
      }
    };
    function wrapperDecorations(_ref2, content) {
      var mark = _ref2.mark, code = _ref2.code, underline = _ref2.underline, del = _ref2.delete, strong = _ref2.strong, keyboard = _ref2.keyboard;
      var currentContent = content;
      function wrap(needed, Tag) {
        if (!needed)
          return;
        var _currentContent = function() {
          return currentContent;
        }();
        currentContent = createVNode(Tag, null, {
          default: function _default() {
            return [_currentContent];
          }
        });
      }
      wrap(strong, "strong");
      wrap(underline, "u");
      wrap(del, "del");
      wrap(code, "code");
      wrap(mark, "mark");
      wrap(keyboard, "kbd");
      return currentContent;
    }
    function renderExpand(forceRender) {
      var _ellipsis$value3 = ellipsis.value, expandable = _ellipsis$value3.expandable, symbol = _ellipsis$value3.symbol;
      if (!expandable)
        return null;
      if (!forceRender && (state.expanded || !state.isEllipsis))
        return null;
      var expandContent = (slots.ellipsisSymbol ? slots.ellipsisSymbol() : symbol) || state.expandStr;
      return createVNode("a", {
        "key": "expand",
        "class": "".concat(prefixCls.value, "-expand"),
        "onClick": onExpandClick,
        "aria-label": state.expandStr
      }, [expandContent]);
    }
    function renderEdit() {
      if (!props.editable)
        return;
      var _props$editable = props.editable, tooltip = _props$editable.tooltip, _props$editable$trigg = _props$editable.triggerType, triggerType = _props$editable$trigg === void 0 ? ["icon"] : _props$editable$trigg;
      var icon = slots.editableIcon ? slots.editableIcon() : createVNode(EditOutlined$1, {
        "role": "button"
      }, null);
      var title = slots.editableTooltip ? slots.editableTooltip() : state.editStr;
      var ariaLabel = typeof title === "string" ? title : "";
      return triggerType.indexOf("icon") !== -1 ? createVNode(__unplugin_components_1, {
        "key": "edit",
        "title": tooltip === false ? "" : title
      }, {
        default: function _default() {
          return [createVNode(TransButton$1, {
            "ref": editIcon,
            "class": "".concat(prefixCls.value, "-edit"),
            "onClick": onEditClick,
            "aria-label": ariaLabel
          }, {
            default: function _default2() {
              return [icon];
            }
          })];
        }
      }) : null;
    }
    function renderCopy() {
      if (!props.copyable)
        return;
      var tooltip = props.copyable.tooltip;
      var defaultTitle = state.copied ? state.copiedStr : state.copyStr;
      var title = slots.copyableTooltip ? slots.copyableTooltip({
        copied: state.copied
      }) : defaultTitle;
      var ariaLabel = typeof title === "string" ? title : "";
      var defaultIcon = state.copied ? createVNode(CheckOutlined, null, null) : createVNode(CopyOutlined$1, null, null);
      var icon = slots.copyableIcon ? slots.copyableIcon({
        copied: !!state.copied
      }) : defaultIcon;
      return createVNode(__unplugin_components_1, {
        "key": "copy",
        "title": tooltip === false ? "" : title
      }, {
        default: function _default() {
          return [createVNode(TransButton$1, {
            "class": ["".concat(prefixCls.value, "-copy"), _defineProperty$3({}, "".concat(prefixCls.value, "-copy-success"), state.copied)],
            "onClick": onCopyClick,
            "aria-label": ariaLabel
          }, {
            default: function _default2() {
              return [icon];
            }
          })];
        }
      });
    }
    function renderEditInput() {
      var className = attrs.class, style = attrs.style;
      var _editable$value = editable.value, maxlength = _editable$value.maxlength, autoSize = _editable$value.autoSize, onEnd = _editable$value.onEnd;
      return createVNode(Editable$1, {
        "class": className,
        "style": style,
        "prefixCls": prefixCls.value,
        "value": props.content,
        "originContent": state.originContent,
        "maxlength": maxlength,
        "autoSize": autoSize,
        "onSave": onEditChange,
        "onChange": onContentChange,
        "onCancel": onEditCancel,
        "onEnd": onEnd,
        "direction": direction.value
      }, {
        enterIcon: slots.editableEnterIcon
      });
    }
    function renderOperations(forceRenderExpanded) {
      return [renderExpand(forceRenderExpanded), renderEdit(), renderCopy()].filter(function(node) {
        return node;
      });
    }
    return function() {
      var _a;
      var _editable$value$trigg = editable.value.triggerType, triggerType = _editable$value$trigg === void 0 ? ["icon"] : _editable$value$trigg;
      var _children = props.ellipsis || props.editable ? props.content !== void 0 ? props.content : (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots) : slots.default ? slots.default() : props.content;
      if (editing.value) {
        return renderEditInput();
      }
      return createVNode(LocaleReceiver, {
        "componentName": "Text",
        "children": function children(locale) {
          var _ref4;
          var _a2 = _extends(_extends({}, props), attrs), type = _a2.type, disabled = _a2.disabled;
          _a2.content;
          var className = _a2.class, style = _a2.style, restProps = __rest$1(_a2, ["type", "disabled", "content", "class", "style"]);
          var _ellipsis$value4 = ellipsis.value, rows = _ellipsis$value4.rows, suffix = _ellipsis$value4.suffix, tooltip = _ellipsis$value4.tooltip;
          var edit = locale.edit, copyStr = locale.copy, copied = locale.copied, expand = locale.expand;
          state.editStr = edit;
          state.copyStr = copyStr;
          state.copiedStr = copied;
          state.expandStr = expand;
          var textProps = omit(restProps, ["prefixCls", "editable", "copyable", "ellipsis", "mark", "code", "delete", "underline", "strong", "keyboard", "onUpdate:content"]);
          var cssEllipsis = canUseCSSEllipsis.value;
          var cssTextOverflow = rows === 1 && cssEllipsis;
          var cssLineClamp = rows && rows > 1 && cssEllipsis;
          var textNode = _children;
          var ariaLabel;
          if (rows && state.isEllipsis && !state.expanded && !cssEllipsis) {
            var _title = restProps.title;
            var restContent = _title || "";
            if (!_title && (typeof _children === "string" || typeof _children === "number")) {
              restContent = String(_children);
            }
            restContent = restContent === null || restContent === void 0 ? void 0 : restContent.slice(String(state.ellipsisContent || "").length);
            textNode = createVNode(Fragment, null, [toRaw(state.ellipsisContent), createVNode("span", {
              "title": restContent,
              "aria-hidden": "true"
            }, [ELLIPSIS_STR]), suffix]);
          } else {
            textNode = createVNode(Fragment, null, [_children, suffix]);
          }
          textNode = wrapperDecorations(props, textNode);
          var showTooltip = tooltip && rows && state.isEllipsis && !state.expanded && !cssEllipsis;
          var title = slots.ellipsisTooltip ? slots.ellipsisTooltip() : tooltip;
          return createVNode(ResizeObserver, {
            "onResize": resizeOnNextFrame,
            "disabled": !rows
          }, {
            default: function _default() {
              return [createVNode(Typography$1, _objectSpread2({
                "ref": contentRef,
                "class": [(_ref4 = {}, _defineProperty$3(_ref4, "".concat(prefixCls.value, "-").concat(type), type), _defineProperty$3(_ref4, "".concat(prefixCls.value, "-disabled"), disabled), _defineProperty$3(_ref4, "".concat(prefixCls.value, "-ellipsis"), rows), _defineProperty$3(_ref4, "".concat(prefixCls.value, "-single-line"), rows === 1 && !state.isEllipsis), _defineProperty$3(_ref4, "".concat(prefixCls.value, "-ellipsis-single-line"), cssTextOverflow), _defineProperty$3(_ref4, "".concat(prefixCls.value, "-ellipsis-multiple-line"), cssLineClamp), _ref4), className],
                "style": _extends(_extends({}, style), {
                  WebkitLineClamp: cssLineClamp ? rows : void 0
                }),
                "aria-label": ariaLabel,
                "direction": direction.value,
                "onClick": triggerType.indexOf("text") !== -1 ? onEditClick : function() {
                }
              }, textProps), {
                default: function _default2() {
                  return [showTooltip ? createVNode(__unplugin_components_1, {
                    "title": tooltip === true ? _children : title
                  }, {
                    default: function _default3() {
                      return [createVNode("span", null, [textNode])];
                    }
                  }) : textNode, renderOperations()];
                }
              })];
            }
          });
        }
      }, null);
    };
  }
});
var Base$1 = Base;
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
var TITLE_ELE_LIST = tupleNum(1, 2, 3, 4, 5);
var titleProps = function titleProps2() {
  return _extends(_extends({}, omit(baseProps(), ["component", "strong"])), {
    level: Number
  });
};
var Title = function Title2(props, _ref) {
  var slots = _ref.slots, attrs = _ref.attrs;
  var _props$level = props.level, level = _props$level === void 0 ? 1 : _props$level, restProps = __rest(props, ["level"]);
  var component;
  if (TITLE_ELE_LIST.indexOf(level) !== -1) {
    component = "h".concat(level);
  } else {
    warning(false, "Typography", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value.");
    component = "h1";
  }
  var titleProps3 = _extends(_extends(_extends({}, restProps), {
    component
  }), attrs);
  return createVNode(Base$1, titleProps3, slots);
};
Title.displayName = "ATypographyTitle";
Title.inheritAttrs = false;
Title.props = titleProps();
var __unplugin_components_2 = Title;
export { __unplugin_components_2 as _ };
