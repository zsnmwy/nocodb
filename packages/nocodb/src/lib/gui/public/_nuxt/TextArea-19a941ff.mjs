import { d as defineComponent, r as ref, a_ as onBeforeUnmount, aY as wrapperRaf, ba as warning, w as watch, P as nextTick, s as onMounted, aD as classNames, aJ as _defineProperty, aC as _extends, g as createVNode, B as withDirectives, aK as _objectSpread2, co as ResizeObserver, cm as getCurrentInstance, be as useInjectFormItemContext, aE as useConfigInject, e as computed, a6 as watchEffect, aW as _toConsumableArray, aN as _typeof } from "./entry-fe2e349d.mjs";
import { t as textAreaProps, f as fixControlledValue, C as ClearableLabeledInput, a as triggerFocus, r as resolveOnChange } from "./Input-a826c0f4.mjs";
import { a as antInputDirective } from "./antInputDirective-04640d14.mjs";
import { o as omit } from "./omit-bb2337ec.mjs";
var HIDDEN_TEXTAREA_STYLE = "\n min-height:0 !important;\n max-height:none !important;\n height:0 !important;\n visibility:hidden !important;\n overflow:hidden !important;\n position:absolute !important;\n z-index:-1000 !important;\n top:0 !important;\n right:0 !important\n";
var SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break"];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var nodeRef = node.getAttribute("id") || node.getAttribute("data-reactid") || node.getAttribute("name");
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
  var paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  var borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  var sizingStyle = SIZING_STYLE.map(function(name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(";");
  var nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateNodeHeight(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tab-index", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    document.body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache), paddingSize = _calculateNodeStyling.paddingSize, borderSize = _calculateNodeStyling.borderSize, boxSizing = _calculateNodeStyling.boxSizing, sizingStyle = _calculateNodeStyling.sizingStyle;
  hiddenTextarea.setAttribute("style", "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  var minHeight = Number.MIN_SAFE_INTEGER;
  var maxHeight = Number.MAX_SAFE_INTEGER;
  var height = hiddenTextarea.scrollHeight;
  var overflowY;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  return {
    height: "".concat(height, "px"),
    minHeight: "".concat(minHeight, "px"),
    maxHeight: "".concat(maxHeight, "px"),
    overflowY,
    resize: "none"
  };
}
var RESIZE_STATUS_NONE = 0;
var RESIZE_STATUS_RESIZING = 1;
var RESIZE_STATUS_RESIZED = 2;
var ResizableTextArea = defineComponent({
  name: "ResizableTextArea",
  inheritAttrs: false,
  props: textAreaProps(),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs, emit = _ref.emit, expose = _ref.expose;
    var nextFrameActionId;
    var resizeFrameId;
    var textAreaRef = ref();
    var textareaStyles = ref({});
    var resizeStatus = ref(RESIZE_STATUS_NONE);
    onBeforeUnmount(function() {
      wrapperRaf.cancel(nextFrameActionId);
      wrapperRaf.cancel(resizeFrameId);
    });
    var fixFirefoxAutoScroll = function fixFirefoxAutoScroll2() {
      try {
        if (document.activeElement === textAreaRef.value) {
          var currentStart = textAreaRef.value.selectionStart;
          var currentEnd = textAreaRef.value.selectionEnd;
          textAreaRef.value.setSelectionRange(currentStart, currentEnd);
        }
      } catch (e) {
      }
    };
    var resizeTextarea = function resizeTextarea2() {
      var autoSize = props.autoSize || props.autosize;
      if (!autoSize || !textAreaRef.value) {
        return;
      }
      var minRows = autoSize.minRows, maxRows = autoSize.maxRows;
      textareaStyles.value = calculateNodeHeight(textAreaRef.value, false, minRows, maxRows);
      resizeStatus.value = RESIZE_STATUS_RESIZING;
      wrapperRaf.cancel(resizeFrameId);
      resizeFrameId = wrapperRaf(function() {
        resizeStatus.value = RESIZE_STATUS_RESIZED;
        resizeFrameId = wrapperRaf(function() {
          resizeStatus.value = RESIZE_STATUS_NONE;
          fixFirefoxAutoScroll();
        });
      });
    };
    var resizeOnNextFrame = function resizeOnNextFrame2() {
      wrapperRaf.cancel(nextFrameActionId);
      nextFrameActionId = wrapperRaf(resizeTextarea);
    };
    var handleResize = function handleResize2(size) {
      if (resizeStatus.value !== RESIZE_STATUS_NONE) {
        return;
      }
      emit("resize", size);
      var autoSize = props.autoSize || props.autosize;
      if (autoSize) {
        resizeOnNextFrame();
      }
    };
    warning(props.autosize === void 0, "Input.TextArea", "autosize is deprecated, please use autoSize instead.");
    var renderTextArea = function renderTextArea2() {
      var prefixCls = props.prefixCls, autoSize = props.autoSize, autosize = props.autosize, disabled = props.disabled;
      var otherProps = omit(props, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "lazy", "maxlength", "valueModifiers"]);
      var cls = classNames(prefixCls, attrs.class, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled));
      var style = [attrs.style, textareaStyles.value, resizeStatus.value === RESIZE_STATUS_RESIZING ? {
        overflowX: "hidden",
        overflowY: "hidden"
      } : null];
      var textareaProps = _extends(_extends(_extends({}, otherProps), attrs), {
        style,
        class: cls
      });
      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }
      if (textareaProps.rows === 0) {
        delete textareaProps.rows;
      }
      return createVNode(ResizeObserver, {
        "onResize": handleResize,
        "disabled": !(autoSize || autosize)
      }, {
        default: function _default() {
          return [withDirectives(createVNode("textarea", _objectSpread2(_objectSpread2({}, textareaProps), {}, {
            "ref": textAreaRef
          }), null), [[antInputDirective]])];
        }
      });
    };
    watch(function() {
      return props.value;
    }, function() {
      nextTick(function() {
        resizeTextarea();
      });
    });
    onMounted(function() {
      nextTick(function() {
        resizeTextarea();
      });
    });
    var instance = getCurrentInstance();
    expose({
      resizeTextarea,
      textArea: textAreaRef,
      instance
    });
    return function() {
      return renderTextArea();
    };
  }
});
var ResizableTextArea$1 = ResizableTextArea;
function fixEmojiLength(value, maxLength) {
  return _toConsumableArray(value || "").slice(0, maxLength).join("");
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  var newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if (_toConsumableArray(preValue || "").length < triggerValue.length && _toConsumableArray(triggerValue || "").length > maxLength) {
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
var __unplugin_components_13 = defineComponent({
  name: "ATextarea",
  inheritAttrs: false,
  props: textAreaProps(),
  setup: function setup2(props, _ref) {
    var attrs = _ref.attrs, expose = _ref.expose, emit = _ref.emit;
    var formItemContext = useInjectFormItemContext();
    var stateValue = ref(props.value === void 0 ? props.defaultValue : props.value);
    var resizableTextArea = ref();
    var mergedValue = ref("");
    var _useConfigInject = useConfigInject("input", props), prefixCls = _useConfigInject.prefixCls, size = _useConfigInject.size, direction = _useConfigInject.direction;
    var showCount = computed(function() {
      return props.showCount === "" || props.showCount || false;
    });
    var hasMaxLength = computed(function() {
      return Number(props.maxlength) > 0;
    });
    var compositing = ref(false);
    var oldCompositionValueRef = ref();
    var oldSelectionStartRef = ref(0);
    var onInternalCompositionStart = function onInternalCompositionStart2(e) {
      compositing.value = true;
      oldCompositionValueRef.value = mergedValue.value;
      oldSelectionStartRef.value = e.currentTarget.selectionStart;
      emit("compositionstart", e);
    };
    var onInternalCompositionEnd = function onInternalCompositionEnd2(e) {
      var _a;
      compositing.value = false;
      var triggerValue = e.currentTarget.value;
      if (hasMaxLength.value) {
        var isCursorInEnd = oldSelectionStartRef.value >= props.maxlength + 1 || oldSelectionStartRef.value === ((_a = oldCompositionValueRef.value) === null || _a === void 0 ? void 0 : _a.length);
        triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.value, triggerValue, props.maxlength);
      }
      if (triggerValue !== mergedValue.value) {
        setValue(triggerValue);
        resolveOnChange(e.currentTarget, e, triggerChange, triggerValue);
      }
      emit("compositionend", e);
    };
    var instance = getCurrentInstance();
    watch(function() {
      return props.value;
    }, function() {
      var _a;
      if ("value" in instance.vnode.props || {}) {
        stateValue.value = (_a = props.value) !== null && _a !== void 0 ? _a : "";
      }
    });
    var focus = function focus2(option) {
      var _a;
      triggerFocus((_a = resizableTextArea.value) === null || _a === void 0 ? void 0 : _a.textArea, option);
    };
    var blur = function blur2() {
      var _a, _b;
      (_b = (_a = resizableTextArea.value) === null || _a === void 0 ? void 0 : _a.textArea) === null || _b === void 0 ? void 0 : _b.blur();
    };
    var setValue = function setValue2(value, callback) {
      if (stateValue.value === value) {
        return;
      }
      if (props.value === void 0) {
        stateValue.value = value;
      } else {
        nextTick(function() {
          var _a, _b, _c;
          if (resizableTextArea.value.textArea.value !== mergedValue.value) {
            (_c = (_a = resizableTextArea.value) === null || _a === void 0 ? void 0 : (_b = _a.instance).update) === null || _c === void 0 ? void 0 : _c.call(_b);
          }
        });
      }
      nextTick(function() {
        callback && callback();
      });
    };
    var handleKeyDown = function handleKeyDown2(e) {
      if (e.keyCode === 13) {
        emit("pressEnter", e);
      }
      emit("keydown", e);
    };
    var onBlur = function onBlur2(e) {
      var onBlur3 = props.onBlur;
      onBlur3 === null || onBlur3 === void 0 ? void 0 : onBlur3(e);
      formItemContext.onFieldBlur();
    };
    var triggerChange = function triggerChange2(e) {
      emit("update:value", e.target.value);
      emit("change", e);
      emit("input", e);
      formItemContext.onFieldChange();
    };
    var handleReset = function handleReset2(e) {
      resolveOnChange(resizableTextArea.value.textArea, e, triggerChange);
      setValue("", function() {
        focus();
      });
    };
    var handleChange = function handleChange2(e) {
      var composing = e.target.composing;
      var triggerValue = e.target.value;
      compositing.value = !!(e.isComposing || composing);
      if (compositing.value && props.lazy || stateValue.value === triggerValue)
        return;
      if (hasMaxLength.value) {
        var target = e.target;
        var isCursorInEnd = target.selectionStart >= props.maxlength + 1 || target.selectionStart === triggerValue.length || !target.selectionStart;
        triggerValue = setTriggerValue(isCursorInEnd, mergedValue.value, triggerValue, props.maxlength);
      }
      resolveOnChange(e.currentTarget, e, triggerChange, triggerValue);
      setValue(triggerValue);
    };
    var renderTextArea = function renderTextArea2() {
      var _class;
      var _a, _b;
      var style = attrs.style, customClass = attrs.class;
      var _props$bordered = props.bordered, bordered = _props$bordered === void 0 ? true : _props$bordered;
      var resizeProps = _extends(_extends(_extends({}, omit(props, ["allowClear"])), attrs), {
        style: showCount.value ? {} : style,
        class: (_class = {}, _defineProperty(_class, "".concat(prefixCls.value, "-borderless"), !bordered), _defineProperty(_class, "".concat(customClass), customClass && !showCount.value), _defineProperty(_class, "".concat(prefixCls.value, "-sm"), size.value === "small"), _defineProperty(_class, "".concat(prefixCls.value, "-lg"), size.value === "large"), _class),
        showCount: null,
        prefixCls: prefixCls.value,
        onInput: handleChange,
        onChange: handleChange,
        onBlur,
        onKeydown: handleKeyDown,
        onCompositionstart: onInternalCompositionStart,
        onCompositionend: onInternalCompositionEnd
      });
      if ((_a = props.valueModifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
        delete resizeProps.onInput;
      }
      return createVNode(ResizableTextArea$1, _objectSpread2(_objectSpread2({}, resizeProps), {}, {
        "id": (_b = resizeProps.id) !== null && _b !== void 0 ? _b : formItemContext.id.value,
        "ref": resizableTextArea,
        "maxlength": props.maxlength
      }), null);
    };
    expose({
      focus,
      blur,
      resizableTextArea
    });
    watchEffect(function() {
      var val = fixControlledValue(stateValue.value);
      if (!compositing.value && hasMaxLength.value && (props.value === null || props.value === void 0)) {
        val = fixEmojiLength(val, props.maxlength);
      }
      mergedValue.value = val;
    });
    return function() {
      var maxlength = props.maxlength, _props$bordered2 = props.bordered, bordered = _props$bordered2 === void 0 ? true : _props$bordered2, hidden = props.hidden;
      var style = attrs.style, customClass = attrs.class;
      var inputProps = _extends(_extends(_extends({}, props), attrs), {
        prefixCls: prefixCls.value,
        inputType: "text",
        handleReset,
        direction: direction.value,
        bordered,
        style: showCount.value ? void 0 : style
      });
      var textareaNode = createVNode(ClearableLabeledInput, _objectSpread2(_objectSpread2({}, inputProps), {}, {
        "value": mergedValue.value
      }), {
        element: renderTextArea
      });
      if (showCount.value) {
        var valueLength = _toConsumableArray(mergedValue.value).length;
        var dataCount = "";
        if (_typeof(showCount.value) === "object") {
          dataCount = showCount.value.formatter({
            count: valueLength,
            maxlength
          });
        } else {
          dataCount = "".concat(valueLength).concat(hasMaxLength.value ? " / ".concat(maxlength) : "");
        }
        textareaNode = createVNode("div", {
          "hidden": hidden,
          "class": classNames("".concat(prefixCls.value, "-textarea"), _defineProperty({}, "".concat(prefixCls.value, "-textarea-rtl"), direction.value === "rtl"), "".concat(prefixCls.value, "-textarea-show-count"), customClass),
          "style": style,
          "data-count": _typeof(dataCount) !== "object" ? dataCount : void 0
        }, [textareaNode]);
      }
      return textareaNode;
    };
  }
});
export { __unplugin_components_13 as _ };
