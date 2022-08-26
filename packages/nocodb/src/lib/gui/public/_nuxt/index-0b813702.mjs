import { aC as _extends, cO as _toArray, aW as _toConsumableArray, d as defineComponent, aH as PropTypes, e as computed, r as ref, g as createVNode, aK as _objectSpread2, aD as classNames, aJ as _defineProperty$2, b1 as Trigger, i as inject, B as withDirectives, aG as cloneElement, s as onMounted, w as watch, y as createTextVNode, cP as Overflow, F as Fragment, aX as KeyCode, a_ as onBeforeUnmount, b0 as _slicedToArray, p as provide, cQ as isRef, n as reactive, bj as initDefaultProps, a6 as watchEffect, ax as toRefs, c9 as isValidElement, aN as _typeof, cm as getCurrentInstance, co as ResizeObserver, aM as flattenChildren, cR as cloneVNode, b7 as supportsPassive, aY as wrapperRaf, cS as shallowRef, cT as toRaw, P as nextTick, ci as onUpdated, cI as canUseDom, a4 as toRef, bd as AntdIcon, bi as CloseCircleFilled, ch as LoadingOutlined, bc as CloseOutlined, be as useInjectFormItemContext, aE as useConfigInject, cL as getTransitionName } from "./entry-d9bc2aad.mjs";
import { a as antInputDirective } from "./antInputDirective-04640d14.mjs";
import { p as pickAttrs } from "./pickAttrs-fc04d54e.mjs";
import { i as isMobile, u as useMergedState, a as useState } from "./useState-7c8b49a7.mjs";
import { o as omit } from "./omit-79be01c9.mjs";
import { S as SearchOutlined } from "./SearchOutlined-8238e142.mjs";
function getKey(data, index) {
  var key = data.key;
  var value;
  if ("value" in data) {
    value = data.value;
  }
  if (key !== null && key !== void 0) {
    return key;
  }
  if (value !== void 0) {
    return value;
  }
  return "rc-index-key-".concat(index);
}
function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {}, label = _ref.label, value = _ref.value, options = _ref.options;
  return {
    label: label || (childrenAsData ? "children" : "label"),
    value: value || "value",
    options: options || "options"
  };
}
function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fieldNames = _ref2.fieldNames, childrenAsData = _ref2.childrenAsData;
  var flattenList = [];
  var _fillFieldNames = fillFieldNames(fieldNames, false), fieldLabel = _fillFieldNames.label, fieldValue = _fillFieldNames.value, fieldOptions = _fillFieldNames.options;
  function dig(list, isGroupOption) {
    list.forEach(function(data) {
      var label = data[fieldLabel];
      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue];
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data,
          label,
          value
        });
      } else {
        var grpLabel = label;
        if (grpLabel === void 0 && childrenAsData) {
          grpLabel = data.label;
        }
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}
function injectPropsWithOption(option) {
  var newOption = _extends({}, option);
  if (!("props" in newOption)) {
    Object.defineProperty(newOption, "props", {
      get: function get() {
        return newOption;
      }
    });
  }
  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  var match = false;
  function separate(str, _ref3) {
    var _ref4 = _toArray(_ref3), token = _ref4[0], restTokens = _ref4.slice(1);
    if (!token) {
      return [str];
    }
    var list2 = str.split(token);
    match = match || list2.length > 1;
    return list2.reduce(function(prevList, unitStr) {
      return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
    }, []).filter(function(unit) {
      return unit;
    });
  }
  var list = separate(text, tokens);
  return match ? list : null;
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
var getBuiltInPlacements = function getBuiltInPlacements2(dropdownMatchSelectWidth) {
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    }
  };
};
var SelectTrigger = defineComponent({
  name: "SelectTrigger",
  inheritAttrs: false,
  props: {
    dropdownAlign: Object,
    visible: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    dropdownClassName: String,
    dropdownStyle: PropTypes.object,
    placement: String,
    empty: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    popupClassName: String,
    animation: String,
    transitionName: String,
    getPopupContainer: Function,
    dropdownRender: Function,
    containerWidth: Number,
    dropdownMatchSelectWidth: PropTypes.oneOfType([Number, Boolean]).def(true),
    popupElement: PropTypes.any,
    direction: String,
    getTriggerDOMNode: Function,
    onPopupVisibleChange: Function,
    onPopupMouseEnter: Function
  },
  setup: function setup(props2, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var builtInPlacements = computed(function() {
      var dropdownMatchSelectWidth = props2.dropdownMatchSelectWidth;
      return getBuiltInPlacements(dropdownMatchSelectWidth);
    });
    var popupRef = ref();
    expose({
      getPopupElement: function getPopupElement() {
        return popupRef.value;
      }
    });
    return function() {
      var _a = _extends(_extends({}, props2), attrs), _a$empty = _a.empty, empty = _a$empty === void 0 ? false : _a$empty, restProps = __rest$4(_a, ["empty"]);
      var visible = restProps.visible, dropdownAlign = restProps.dropdownAlign, prefixCls = restProps.prefixCls, popupElement = restProps.popupElement, dropdownClassName = restProps.dropdownClassName, dropdownStyle = restProps.dropdownStyle, _restProps$direction = restProps.direction, direction = _restProps$direction === void 0 ? "ltr" : _restProps$direction, placement = restProps.placement, dropdownMatchSelectWidth = restProps.dropdownMatchSelectWidth, containerWidth = restProps.containerWidth, dropdownRender = restProps.dropdownRender, animation = restProps.animation, transitionName = restProps.transitionName, getPopupContainer = restProps.getPopupContainer, getTriggerDOMNode = restProps.getTriggerDOMNode, onPopupVisibleChange = restProps.onPopupVisibleChange, onPopupMouseEnter = restProps.onPopupMouseEnter;
      var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
      var popupNode = popupElement;
      if (dropdownRender) {
        popupNode = dropdownRender({
          menuNode: popupElement,
          props: props2
        });
      }
      var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;
      var popupStyle = _extends({
        minWidth: "".concat(containerWidth, "px")
      }, dropdownStyle);
      if (typeof dropdownMatchSelectWidth === "number") {
        popupStyle.width = "".concat(dropdownMatchSelectWidth, "px");
      } else if (dropdownMatchSelectWidth) {
        popupStyle.width = "".concat(containerWidth, "px");
      }
      return createVNode(Trigger, _objectSpread2(_objectSpread2({}, props2), {}, {
        "showAction": onPopupVisibleChange ? ["click"] : [],
        "hideAction": onPopupVisibleChange ? ["click"] : [],
        "popupPlacement": placement || (direction === "rtl" ? "bottomRight" : "bottomLeft"),
        "builtinPlacements": builtInPlacements.value,
        "prefixCls": dropdownPrefixCls,
        "popupTransitionName": mergedTransitionName,
        "popupAlign": dropdownAlign,
        "popupVisible": visible,
        "getPopupContainer": getPopupContainer,
        "popupClassName": classNames(dropdownClassName, _defineProperty$2({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
        "popupStyle": popupStyle,
        "getTriggerDOMNode": getTriggerDOMNode,
        "onPopupVisibleChange": onPopupVisibleChange
      }), {
        default: slots.default,
        popup: function popup() {
          return createVNode("div", {
            "ref": popupRef,
            "onMouseenter": onPopupMouseEnter
          }, [popupNode]);
        }
      });
    };
  }
});
var SelectTrigger$1 = SelectTrigger;
var TransBtn = function TransBtn2(props2, _ref) {
  var slots = _ref.slots;
  var _a;
  var className = props2.class, customizeIcon = props2.customizeIcon, customizeIconProps = props2.customizeIconProps, _onMousedown = props2.onMousedown, onClick = props2.onClick;
  var icon;
  if (typeof customizeIcon === "function") {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return createVNode("span", {
    "class": className,
    "onMousedown": function onMousedown(event) {
      event.preventDefault();
      if (_onMousedown) {
        _onMousedown(event);
      }
    },
    "style": {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    "unselectable": "on",
    "onClick": onClick,
    "aria-hidden": true
  }, [icon !== void 0 ? icon : createVNode("span", {
    "class": className.split(/\s+/).map(function(cls) {
      return "".concat(cls, "-icon");
    })
  }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
};
TransBtn.inheritAttrs = false;
TransBtn.displayName = "TransBtn";
TransBtn.props = {
  class: String,
  customizeIcon: PropTypes.any,
  customizeIconProps: PropTypes.any,
  onMousedown: Function,
  onClick: Function
};
var TransBtn$1 = TransBtn;
var inputProps = {
  inputRef: PropTypes.any,
  prefixCls: String,
  id: String,
  inputElement: PropTypes.VueNode,
  disabled: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  editable: {
    type: Boolean,
    default: void 0
  },
  activeDescendantId: String,
  value: String,
  open: {
    type: Boolean,
    default: void 0
  },
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  attrs: PropTypes.object,
  onKeydown: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPaste: {
    type: Function
  },
  onCompositionstart: {
    type: Function
  },
  onCompositionend: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  }
};
var Input = defineComponent({
  name: "Input",
  inheritAttrs: false,
  props: inputProps,
  setup: function setup2(props2) {
    var blurTimeout = null;
    var VCSelectContainerEvent = inject("VCSelectContainerEvent");
    return function() {
      var _a;
      var prefixCls = props2.prefixCls, id = props2.id, inputElement = props2.inputElement, disabled = props2.disabled, tabindex = props2.tabindex, autofocus = props2.autofocus, autocomplete = props2.autocomplete, editable = props2.editable, activeDescendantId = props2.activeDescendantId, value = props2.value, _onKeydown = props2.onKeydown, _onMousedown = props2.onMousedown, onChange = props2.onChange, onPaste = props2.onPaste, _onCompositionstart = props2.onCompositionstart, _onCompositionend = props2.onCompositionend, _onFocus = props2.onFocus, _onBlur = props2.onBlur, open2 = props2.open, inputRef = props2.inputRef, attrs = props2.attrs;
      var inputNode = inputElement || withDirectives(createVNode("input", null, null), [[antInputDirective]]);
      var inputProps2 = inputNode.props || {};
      var onOriginKeyDown = inputProps2.onKeydown, onOriginInput = inputProps2.onInput, onOriginFocus = inputProps2.onFocus, onOriginBlur = inputProps2.onBlur, onOriginMouseDown = inputProps2.onMousedown, onOriginCompositionStart = inputProps2.onCompositionstart, onOriginCompositionEnd = inputProps2.onCompositionend, style = inputProps2.style;
      inputNode = cloneElement(inputNode, _extends(_extends(_extends(_extends(_extends({
        type: "search"
      }, inputProps2), {
        id,
        ref: inputRef,
        disabled,
        tabindex,
        autocomplete: autocomplete || "off",
        autofocus,
        class: classNames("".concat(prefixCls, "-selection-search-input"), (_a = inputNode === null || inputNode === void 0 ? void 0 : inputNode.props) === null || _a === void 0 ? void 0 : _a.class),
        role: "combobox",
        "aria-expanded": open2,
        "aria-haspopup": "listbox",
        "aria-owns": "".concat(id, "_list"),
        "aria-autocomplete": "list",
        "aria-controls": "".concat(id, "_list"),
        "aria-activedescendant": activeDescendantId
      }), attrs), {
        value: editable ? value : "",
        readonly: !editable,
        unselectable: !editable ? "on" : null,
        style: _extends(_extends({}, style), {
          opacity: editable ? null : 0
        }),
        onKeydown: function onKeydown(event) {
          _onKeydown(event);
          if (onOriginKeyDown) {
            onOriginKeyDown(event);
          }
        },
        onMousedown: function onMousedown(event) {
          _onMousedown(event);
          if (onOriginMouseDown) {
            onOriginMouseDown(event);
          }
        },
        onInput: function onInput(event) {
          onChange(event);
          if (onOriginInput) {
            onOriginInput(event);
          }
        },
        onCompositionstart: function onCompositionstart(event) {
          _onCompositionstart(event);
          if (onOriginCompositionStart) {
            onOriginCompositionStart(event);
          }
        },
        onCompositionend: function onCompositionend(event) {
          _onCompositionend(event);
          if (onOriginCompositionEnd) {
            onOriginCompositionEnd(event);
          }
        },
        onPaste,
        onFocus: function onFocus() {
          clearTimeout(blurTimeout);
          onOriginFocus && onOriginFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          _onFocus && _onFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.focus(arguments.length <= 0 ? void 0 : arguments[0]);
        },
        onBlur: function onBlur() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          blurTimeout = setTimeout(function() {
            onOriginBlur && onOriginBlur(args[0]);
            _onBlur && _onBlur(args[0]);
            VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.blur(args[0]);
          }, 100);
        }
      }), inputNode.type === "textarea" ? {} : {
        type: "search"
      }), true, true);
      return inputNode;
    };
  }
});
var Input$1 = Input;
var TreeSelectLegacyContextPropsKey = Symbol("TreeSelectLegacyContextPropsKey");
function useInjectLegacySelectContext() {
  return inject(TreeSelectLegacyContextPropsKey, {});
}
var props$1 = {
  id: String,
  prefixCls: String,
  values: PropTypes.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: PropTypes.any,
  placeholder: PropTypes.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  removeIcon: PropTypes.any,
  choiceTransitionName: String,
  maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: PropTypes.any.def(function() {
    return function(omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    };
  }),
  tagRender: Function,
  onToggleOpen: {
    type: Function
  },
  onRemove: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
var onPreventMouseDown = function onPreventMouseDown2(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = defineComponent({
  name: "MultipleSelectSelector",
  inheritAttrs: false,
  props: props$1,
  setup: function setup3(props2) {
    var measureRef = ref();
    var inputWidth = ref(0);
    var focused = ref(false);
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    var selectionPrefixCls = computed(function() {
      return "".concat(props2.prefixCls, "-selection");
    });
    var inputValue = computed(function() {
      return props2.open || props2.mode === "tags" ? props2.searchValue : "";
    });
    var inputEditable = computed(function() {
      return props2.mode === "tags" || props2.showSearch && (props2.open || focused.value);
    });
    onMounted(function() {
      watch(inputValue, function() {
        inputWidth.value = measureRef.value.scrollWidth;
      }, {
        flush: "post",
        immediate: true
      });
    });
    function defaultRenderSelector(title, content, itemDisabled, closable, onClose) {
      return createVNode("span", {
        "class": classNames("".concat(selectionPrefixCls.value, "-item"), _defineProperty$2({}, "".concat(selectionPrefixCls.value, "-item-disabled"), itemDisabled)),
        "title": typeof title === "string" || typeof title === "number" ? title.toString() : void 0
      }, [createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-item-content")
      }, [content]), closable && createVNode(TransBtn$1, {
        "class": "".concat(selectionPrefixCls.value, "-item-remove"),
        "onMousedown": onPreventMouseDown,
        "onClick": onClose,
        "customizeIcon": props2.removeIcon
      }, {
        default: function _default2() {
          return [createTextVNode("\xD7")];
        }
      })]);
    }
    function customizeRenderSelector(value, content, itemDisabled, closable, onClose, option) {
      var _a;
      var onMouseDown2 = function onMouseDown3(e) {
        onPreventMouseDown(e);
        props2.onToggleOpen(!open);
      };
      var originData = option;
      if (legacyTreeSelectContext.keyEntities) {
        originData = ((_a = legacyTreeSelectContext.keyEntities[value]) === null || _a === void 0 ? void 0 : _a.node) || {};
      }
      return createVNode("span", {
        "key": value,
        "onMousedown": onMouseDown2
      }, [props2.tagRender({
        label: content,
        value,
        disabled: itemDisabled,
        closable,
        onClose,
        option: originData
      })]);
    }
    function renderItem(valueItem) {
      var itemDisabled = valueItem.disabled, label = valueItem.label, value = valueItem.value, option = valueItem.option;
      var closable = !props2.disabled && !itemDisabled;
      var displayLabel = label;
      if (typeof props2.maxTagTextLength === "number") {
        if (typeof label === "string" || typeof label === "number") {
          var strLabel = String(displayLabel);
          if (strLabel.length > props2.maxTagTextLength) {
            displayLabel = "".concat(strLabel.slice(0, props2.maxTagTextLength), "...");
          }
        }
      }
      var onClose = function onClose2(event) {
        var _a;
        if (event)
          event.stopPropagation();
        (_a = props2.onRemove) === null || _a === void 0 ? void 0 : _a.call(props2, valueItem);
      };
      return typeof props2.tagRender === "function" ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose, option) : defaultRenderSelector(label, displayLabel, itemDisabled, closable, onClose);
    }
    function renderRest(omittedValues) {
      var _props$maxTagPlacehol = props2.maxTagPlaceholder, maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function(omittedValues2) {
        return "+ ".concat(omittedValues2.length, " ...");
      } : _props$maxTagPlacehol;
      var content = typeof maxTagPlaceholder === "function" ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
      return defaultRenderSelector(content, content, false);
    }
    return function() {
      var id = props2.id, prefixCls = props2.prefixCls, values = props2.values, open2 = props2.open, inputRef = props2.inputRef, placeholder = props2.placeholder, disabled = props2.disabled, autofocus = props2.autofocus, autocomplete = props2.autocomplete, activeDescendantId = props2.activeDescendantId, tabindex = props2.tabindex, onInputChange = props2.onInputChange, onInputPaste = props2.onInputPaste, onInputKeyDown = props2.onInputKeyDown, onInputMouseDown = props2.onInputMouseDown, onInputCompositionStart = props2.onInputCompositionStart, onInputCompositionEnd = props2.onInputCompositionEnd;
      var inputNode = createVNode("div", {
        "class": "".concat(selectionPrefixCls.value, "-search"),
        "style": {
          width: inputWidth.value + "px"
        },
        "key": "input"
      }, [createVNode(Input$1, {
        "inputRef": inputRef,
        "open": open2,
        "prefixCls": prefixCls,
        "id": id,
        "inputElement": null,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": onInputChange,
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true),
        "onFocus": function onFocus() {
          return focused.value = true;
        },
        "onBlur": function onBlur() {
          return focused.value = false;
        }
      }, null), createVNode("span", {
        "ref": measureRef,
        "class": "".concat(selectionPrefixCls.value, "-search-mirror"),
        "aria-hidden": true
      }, [inputValue.value, createTextVNode("\xA0")])]);
      var selectionNode = createVNode(Overflow, {
        "prefixCls": "".concat(selectionPrefixCls.value, "-overflow"),
        "data": values,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "suffix": inputNode,
        "itemKey": "key",
        "maxCount": props2.maxTagCount,
        "key": "overflow"
      }, null);
      return createVNode(Fragment, null, [selectionNode, !values.length && !inputValue.value && createVNode("span", {
        "class": "".concat(selectionPrefixCls.value, "-placeholder")
      }, [placeholder])]);
    };
  }
});
var MultipleSelector = SelectSelector;
var props = {
  inputElement: PropTypes.any,
  id: String,
  prefixCls: String,
  values: PropTypes.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: PropTypes.any,
  placeholder: PropTypes.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  activeValue: String,
  backfill: {
    type: Boolean,
    default: void 0
  },
  optionLabelRender: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
var SingleSelector = defineComponent({
  name: "SingleSelector",
  setup: function setup4(props2) {
    var inputChanged = ref(false);
    var combobox = computed(function() {
      return props2.mode === "combobox";
    });
    var inputEditable = computed(function() {
      return combobox.value || props2.showSearch;
    });
    var inputValue = computed(function() {
      var inputValue2 = props2.searchValue || "";
      if (combobox.value && props2.activeValue && !inputChanged.value) {
        inputValue2 = props2.activeValue;
      }
      return inputValue2;
    });
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    watch([combobox, function() {
      return props2.activeValue;
    }], function() {
      if (combobox.value) {
        inputChanged.value = false;
      }
    }, {
      immediate: true
    });
    var hasTextInput = computed(function() {
      return props2.mode !== "combobox" && !props2.open && !props2.showSearch ? false : !!inputValue.value;
    });
    var title = computed(function() {
      var item = props2.values[0];
      return item && (typeof item.label === "string" || typeof item.label === "number") ? item.label.toString() : void 0;
    });
    var renderPlaceholder = function renderPlaceholder2() {
      if (props2.values[0]) {
        return null;
      }
      var hiddenStyle = hasTextInput.value ? {
        visibility: "hidden"
      } : void 0;
      return createVNode("span", {
        "class": "".concat(props2.prefixCls, "-selection-placeholder"),
        "style": hiddenStyle
      }, [props2.placeholder]);
    };
    return function() {
      var _a, _b, _c, _d;
      var inputElement = props2.inputElement, prefixCls = props2.prefixCls, id = props2.id, values = props2.values, inputRef = props2.inputRef, disabled = props2.disabled, autofocus = props2.autofocus, autocomplete = props2.autocomplete, activeDescendantId = props2.activeDescendantId, open2 = props2.open, tabindex = props2.tabindex, optionLabelRender = props2.optionLabelRender, onInputKeyDown = props2.onInputKeyDown, onInputMouseDown = props2.onInputMouseDown, onInputChange = props2.onInputChange, onInputPaste = props2.onInputPaste, onInputCompositionStart = props2.onInputCompositionStart, onInputCompositionEnd = props2.onInputCompositionEnd;
      var item = values[0];
      var titleNode = null;
      if (item && legacyTreeSelectContext.customSlots) {
        var key = (_a = item.key) !== null && _a !== void 0 ? _a : item.value;
        var originData = ((_b = legacyTreeSelectContext.keyEntities[key]) === null || _b === void 0 ? void 0 : _b.node) || {};
        titleNode = legacyTreeSelectContext.customSlots[(_c = originData.slots) === null || _c === void 0 ? void 0 : _c.title] || legacyTreeSelectContext.customSlots.title || item.label;
        if (typeof titleNode === "function") {
          titleNode = titleNode(originData);
        }
      } else {
        titleNode = optionLabelRender && item ? optionLabelRender(item.option) : item === null || item === void 0 ? void 0 : item.label;
      }
      return createVNode(Fragment, null, [createVNode("span", {
        "class": "".concat(prefixCls, "-selection-search")
      }, [createVNode(Input$1, {
        "inputRef": inputRef,
        "prefixCls": prefixCls,
        "id": id,
        "open": open2,
        "inputElement": inputElement,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": function onChange(e) {
          inputChanged.value = true;
          onInputChange(e);
        },
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true)
      }, null)]), !combobox.value && item && !hasTextInput.value && createVNode("span", {
        "class": "".concat(prefixCls, "-selection-item"),
        "title": title.value
      }, [createVNode(Fragment, {
        "key": (_d = item.key) !== null && _d !== void 0 ? _d : item.value
      }, [titleNode])]), renderPlaceholder()]);
    };
  }
});
SingleSelector.props = props;
SingleSelector.inheritAttrs = false;
var SingleSelector$1 = SingleSelector;
function isValidateOpenKey(currentKeyCode) {
  return ![
    KeyCode.ESC,
    KeyCode.SHIFT,
    KeyCode.BACKSPACE,
    KeyCode.TAB,
    KeyCode.WIN_KEY,
    KeyCode.ALT,
    KeyCode.META,
    KeyCode.WIN_KEY_RIGHT,
    KeyCode.CTRL,
    KeyCode.SEMICOLON,
    KeyCode.EQUALS,
    KeyCode.CAPS_LOCK,
    KeyCode.CONTEXT_MENU,
    KeyCode.F1,
    KeyCode.F2,
    KeyCode.F3,
    KeyCode.F4,
    KeyCode.F5,
    KeyCode.F6,
    KeyCode.F7,
    KeyCode.F8,
    KeyCode.F9,
    KeyCode.F10,
    KeyCode.F11,
    KeyCode.F12
  ].includes(currentKeyCode);
}
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
  var lock = null;
  var timeout;
  onBeforeUnmount(function() {
    clearTimeout(timeout);
  });
  function doLock(locked) {
    if (locked || lock === null) {
      lock = locked;
    }
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      lock = null;
    }, duration);
  }
  return [function() {
    return lock;
  }, doLock];
}
function createRef() {
  var func = function func2(node) {
    func2.current = node;
  };
  return func;
}
var Selector = defineComponent({
  name: "Selector",
  inheritAttrs: false,
  props: {
    id: String,
    prefixCls: String,
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    values: PropTypes.array,
    multiple: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: PropTypes.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    activeDescendantId: String,
    tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: PropTypes.any,
    removeIcon: PropTypes.any,
    maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: PropTypes.any,
    tagRender: Function,
    optionLabelRender: Function,
    tokenWithEnter: {
      type: Boolean,
      default: void 0
    },
    choiceTransitionName: String,
    onToggleOpen: {
      type: Function
    },
    onSearch: Function,
    onSearchSubmit: Function,
    onRemove: Function,
    onInputKeyDown: {
      type: Function
    },
    domRef: Function
  },
  setup: function setup5(props2, _ref) {
    var expose = _ref.expose;
    var inputRef = createRef();
    var compositionStatus = false;
    var _useLock = useLock(0), _useLock2 = _slicedToArray(_useLock, 2), getInputMouseDown = _useLock2[0], setInputMouseDown = _useLock2[1];
    var onInternalInputKeyDown = function onInternalInputKeyDown2(event) {
      var which = event.which;
      if (which === KeyCode.UP || which === KeyCode.DOWN) {
        event.preventDefault();
      }
      if (props2.onInputKeyDown) {
        props2.onInputKeyDown(event);
      }
      if (which === KeyCode.ENTER && props2.mode === "tags" && !compositionStatus && !props2.open) {
        props2.onSearchSubmit(event.target.value);
      }
      if (isValidateOpenKey(which)) {
        props2.onToggleOpen(true);
      }
    };
    var onInternalInputMouseDown = function onInternalInputMouseDown2() {
      setInputMouseDown(true);
    };
    var pastedText = null;
    var triggerOnSearch = function triggerOnSearch2(value) {
      if (props2.onSearch(value, true, compositionStatus) !== false) {
        props2.onToggleOpen(true);
      }
    };
    var onInputCompositionStart = function onInputCompositionStart2() {
      compositionStatus = true;
    };
    var onInputCompositionEnd = function onInputCompositionEnd2(e) {
      compositionStatus = false;
      if (props2.mode !== "combobox") {
        triggerOnSearch(e.target.value);
      }
    };
    var onInputChange = function onInputChange2(event) {
      var value = event.target.value;
      if (props2.tokenWithEnter && pastedText && /[\r\n]/.test(pastedText)) {
        var replacedText = pastedText.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        value = value.replace(replacedText, pastedText);
      }
      pastedText = null;
      triggerOnSearch(value);
    };
    var onInputPaste = function onInputPaste2(e) {
      var clipboardData = e.clipboardData;
      var value = clipboardData.getData("text");
      pastedText = value;
    };
    var onClick = function onClick2(_ref2) {
      var target = _ref2.target;
      if (target !== inputRef.current) {
        var isIE = document.body.style.msTouchAction !== void 0;
        if (isIE) {
          setTimeout(function() {
            inputRef.current.focus();
          });
        } else {
          inputRef.current.focus();
        }
      }
    };
    var onMousedown = function onMousedown2(event) {
      var inputMouseDown = getInputMouseDown();
      if (event.target !== inputRef.current && !inputMouseDown) {
        event.preventDefault();
      }
      if (props2.mode !== "combobox" && (!props2.showSearch || !inputMouseDown) || !props2.open) {
        if (props2.open) {
          props2.onSearch("", true, false);
        }
        props2.onToggleOpen();
      }
    };
    expose({
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    });
    return function() {
      var prefixCls = props2.prefixCls, domRef = props2.domRef, mode = props2.mode;
      var sharedProps = {
        inputRef,
        onInputKeyDown: onInternalInputKeyDown,
        onInputMouseDown: onInternalInputMouseDown,
        onInputChange,
        onInputPaste,
        onInputCompositionStart,
        onInputCompositionEnd
      };
      var selectNode = mode === "multiple" || mode === "tags" ? createVNode(MultipleSelector, _objectSpread2(_objectSpread2({}, props2), sharedProps), null) : createVNode(SingleSelector$1, _objectSpread2(_objectSpread2({}, props2), sharedProps), null);
      return createVNode("div", {
        "ref": domRef,
        "class": "".concat(prefixCls, "-selector"),
        "onClick": onClick,
        "onMousedown": onMousedown
      }, [selectNode]);
    };
  }
});
var Selector$1 = Selector;
function useSelectTriggerControl(refs, open2, triggerOpen) {
  function onGlobalMouseDown(event) {
    var _a, _b, _c;
    var target = event.target;
    if (target.shadowRoot && event.composed) {
      target = event.composedPath()[0] || target;
    }
    var elements = [(_a = refs[0]) === null || _a === void 0 ? void 0 : _a.value, (_c = (_b = refs[1]) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.getPopupElement()];
    if (open2.value && elements.every(function(element) {
      return element && !element.contains(target) && element !== target;
    })) {
      triggerOpen(false);
    }
  }
  onMounted(function() {
    window.addEventListener("mousedown", onGlobalMouseDown);
  });
  onBeforeUnmount(function() {
    window.removeEventListener("mousedown", onGlobalMouseDown);
  });
}
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  var bool = ref(false);
  var delay;
  var cancelLatest = function cancelLatest2() {
    clearTimeout(delay);
  };
  onMounted(function() {
    cancelLatest();
  });
  var delaySetBool = function delaySetBool2(value, callback) {
    cancelLatest();
    delay = setTimeout(function() {
      bool.value = value;
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}
var BaseSelectContextKey = Symbol("BaseSelectContextKey");
function useProvideBaseSelectProps(props2) {
  return provide(BaseSelectContextKey, props2);
}
function useBaseProps() {
  return inject(BaseSelectContextKey, {});
}
function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  var proxy = new Proxy({}, {
    get: function get(_, p, receiver) {
      return Reflect.get(objectRef.value, p, receiver);
    },
    set: function set(_, p, value) {
      objectRef.value[p] = value;
      return true;
    },
    deleteProperty: function deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has: function has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys: function ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}
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
var DEFAULT_OMIT_PROPS = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"];
var baseSelectPrivateProps = function baseSelectPrivateProps2() {
  return {
    prefixCls: String,
    id: String,
    omitDomProps: Array,
    displayValues: Array,
    onDisplayValuesChange: Function,
    activeValue: String,
    activeDescendantId: String,
    onActiveValueChange: Function,
    searchValue: String,
    onSearch: Function,
    onSearchSplit: Function,
    maxLength: Number,
    OptionList: PropTypes.any,
    emptyOptions: Boolean
  };
};
var baseSelectPropsWithoutPrivate = function baseSelectPropsWithoutPrivate2() {
  return {
    showSearch: {
      type: Boolean,
      default: void 0
    },
    tagRender: {
      type: Function
    },
    optionLabelRender: {
      type: Function
    },
    direction: {
      type: String
    },
    tabindex: Number,
    autofocus: Boolean,
    notFoundContent: PropTypes.any,
    placeholder: PropTypes.any,
    onClear: Function,
    choiceTransitionName: String,
    mode: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    onDropdownVisibleChange: {
      type: Function
    },
    getInputElement: {
      type: Function
    },
    getRawInputElement: {
      type: Function
    },
    maxTagTextLength: Number,
    maxTagCount: {
      type: [String, Number]
    },
    maxTagPlaceholder: PropTypes.any,
    tokenSeparators: {
      type: Array
    },
    allowClear: {
      type: Boolean,
      default: void 0
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    inputIcon: PropTypes.any,
    clearIcon: PropTypes.any,
    removeIcon: PropTypes.any,
    animation: String,
    transitionName: String,
    dropdownStyle: {
      type: Object
    },
    dropdownClassName: String,
    dropdownMatchSelectWidth: {
      type: [Boolean, Number],
      default: void 0
    },
    dropdownRender: {
      type: Function
    },
    dropdownAlign: Object,
    placement: {
      type: String
    },
    getPopupContainer: {
      type: Function
    },
    showAction: {
      type: Array
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onKeyup: Function,
    onKeydown: Function,
    onMousedown: Function,
    onPopupScroll: Function,
    onInputKeyDown: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function
  };
};
var baseSelectProps = function baseSelectProps2() {
  return _extends(_extends({}, baseSelectPrivateProps()), baseSelectPropsWithoutPrivate());
};
function isMultiple(mode) {
  return mode === "tags" || mode === "multiple";
}
var BaseSelect = defineComponent({
  name: "BaseSelect",
  inheritAttrs: false,
  props: initDefaultProps(baseSelectProps(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup: function setup6(props2, _ref) {
    var attrs = _ref.attrs, expose = _ref.expose, slots = _ref.slots;
    var multiple = computed(function() {
      return isMultiple(props2.mode);
    });
    var mergedShowSearch = computed(function() {
      return props2.showSearch !== void 0 ? props2.showSearch : multiple.value || props2.mode === "combobox";
    });
    var mobile = ref(false);
    onMounted(function() {
      mobile.value = isMobile();
    });
    var legacyTreeSelectContext = useInjectLegacySelectContext();
    var containerRef = ref(null);
    var selectorDomRef = createRef();
    var triggerRef = ref(null);
    var selectorRef = ref(null);
    var listRef = ref(null);
    var _useDelayReset = useDelayReset(), _useDelayReset2 = _slicedToArray(_useDelayReset, 3), mockFocused = _useDelayReset2[0], setMockFocused = _useDelayReset2[1], cancelSetMockFocused = _useDelayReset2[2];
    var focus = function focus2() {
      var _a;
      (_a = selectorRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var blur = function blur2() {
      var _a;
      (_a = selectorRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur,
      scrollTo: function scrollTo(arg) {
        var _a;
        return (_a = listRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg);
      }
    });
    var mergedSearchValue = computed(function() {
      var _a;
      if (props2.mode !== "combobox") {
        return props2.searchValue;
      }
      var val = (_a = props2.displayValues[0]) === null || _a === void 0 ? void 0 : _a.value;
      return typeof val === "string" || typeof val === "number" ? String(val) : "";
    });
    var initOpen = props2.open !== void 0 ? props2.open : props2.defaultOpen;
    var innerOpen = ref(initOpen);
    var mergedOpen = ref(initOpen);
    var setInnerOpen = function setInnerOpen2(val) {
      innerOpen.value = props2.open !== void 0 ? props2.open : val;
      mergedOpen.value = innerOpen.value;
    };
    watch(function() {
      return props2.open;
    }, function() {
      setInnerOpen(props2.open);
    });
    var emptyListContent = computed(function() {
      return !props2.notFoundContent && props2.emptyOptions;
    });
    watchEffect(function() {
      mergedOpen.value = innerOpen.value;
      if (props2.disabled || emptyListContent.value && mergedOpen.value && props2.mode === "combobox") {
        mergedOpen.value = false;
      }
    });
    var triggerOpen = computed(function() {
      return emptyListContent.value ? false : mergedOpen.value;
    });
    var onToggleOpen = function onToggleOpen2(newOpen) {
      var nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen.value;
      if (innerOpen.value !== nextOpen && !props2.disabled) {
        setInnerOpen(nextOpen);
        if (props2.onDropdownVisibleChange) {
          props2.onDropdownVisibleChange(nextOpen);
        }
      }
    };
    var tokenWithEnter = computed(function() {
      return (props2.tokenSeparators || []).some(function(tokenSeparator) {
        return ["\n", "\r\n"].includes(tokenSeparator);
      });
    });
    var onInternalSearch = function onInternalSearch2(searchText, fromTyping, isCompositing) {
      var _a, _b;
      var ret = true;
      var newSearchText = searchText;
      (_a = props2.onActiveValueChange) === null || _a === void 0 ? void 0 : _a.call(props2, null);
      var patchLabels = isCompositing ? null : getSeparatedContent(searchText, props2.tokenSeparators);
      if (props2.mode !== "combobox" && patchLabels) {
        newSearchText = "";
        (_b = props2.onSearchSplit) === null || _b === void 0 ? void 0 : _b.call(props2, patchLabels);
        onToggleOpen(false);
        ret = false;
      }
      if (props2.onSearch && mergedSearchValue.value !== newSearchText) {
        props2.onSearch(newSearchText, {
          source: fromTyping ? "typing" : "effect"
        });
      }
      return ret;
    };
    var onInternalSearchSubmit = function onInternalSearchSubmit2(searchText) {
      var _a;
      if (!searchText || !searchText.trim()) {
        return;
      }
      (_a = props2.onSearch) === null || _a === void 0 ? void 0 : _a.call(props2, searchText, {
        source: "submit"
      });
    };
    watch(mergedOpen, function() {
      if (!mergedOpen.value && !multiple.value && props2.mode !== "combobox") {
        onInternalSearch("", false, false);
      }
    }, {
      immediate: true,
      flush: "post"
    });
    watch(function() {
      return props2.disabled;
    }, function() {
      if (innerOpen.value && !!props2.disabled) {
        setInnerOpen(false);
      }
    }, {
      immediate: true
    });
    var _useLock = useLock(), _useLock2 = _slicedToArray(_useLock, 2), getClearLock = _useLock2[0], setClearLock = _useLock2[1];
    var onInternalKeyDown = function onInternalKeyDown2(event) {
      var _a2;
      var _a;
      var clearLock = getClearLock();
      var which = event.which;
      if (which === KeyCode.ENTER) {
        if (props2.mode !== "combobox") {
          event.preventDefault();
        }
        if (!mergedOpen.value) {
          onToggleOpen(true);
        }
      }
      setClearLock(!!mergedSearchValue.value);
      if (which === KeyCode.BACKSPACE && !clearLock && multiple.value && !mergedSearchValue.value && props2.displayValues.length) {
        var cloneDisplayValues = _toConsumableArray(props2.displayValues);
        var removedDisplayValue = null;
        for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
          var current = cloneDisplayValues[i];
          if (!current.disabled) {
            cloneDisplayValues.splice(i, 1);
            removedDisplayValue = current;
            break;
          }
        }
        if (removedDisplayValue) {
          props2.onDisplayValuesChange(cloneDisplayValues, {
            type: "remove",
            values: [removedDisplayValue]
          });
        }
      }
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      if (mergedOpen.value && listRef.value) {
        var _listRef$value;
        (_listRef$value = listRef.value).onKeydown.apply(_listRef$value, [event].concat(rest));
      }
      (_a = props2.onKeydown) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [props2, event].concat(rest));
    };
    var onInternalKeyUp = function onInternalKeyUp2(event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      if (mergedOpen.value && listRef.value) {
        var _listRef$value2;
        (_listRef$value2 = listRef.value).onKeyup.apply(_listRef$value2, [event].concat(rest));
      }
      if (props2.onKeyup) {
        props2.onKeyup.apply(props2, [event].concat(rest));
      }
    };
    var onSelectorRemove = function onSelectorRemove2(val) {
      var newValues = props2.displayValues.filter(function(i) {
        return i !== val;
      });
      props2.onDisplayValuesChange(newValues, {
        type: "remove",
        values: [val]
      });
    };
    var focusRef = ref(false);
    var onContainerFocus = function onContainerFocus2() {
      setMockFocused(true);
      if (!props2.disabled) {
        if (props2.onFocus && !focusRef.value) {
          props2.onFocus.apply(props2, arguments);
        }
        if (props2.showAction && props2.showAction.includes("focus")) {
          onToggleOpen(true);
        }
      }
      focusRef.value = true;
    };
    var onContainerBlur = function onContainerBlur2() {
      setMockFocused(false, function() {
        focusRef.value = false;
        onToggleOpen(false);
      });
      if (props2.disabled) {
        return;
      }
      var searchVal = mergedSearchValue.value;
      if (searchVal) {
        if (props2.mode === "tags") {
          props2.onSearch(searchVal, {
            source: "submit"
          });
        } else if (props2.mode === "multiple") {
          props2.onSearch("", {
            source: "blur"
          });
        }
      }
      if (props2.onBlur) {
        props2.onBlur.apply(props2, arguments);
      }
    };
    provide("VCSelectContainerEvent", {
      focus: onContainerFocus,
      blur: onContainerBlur
    });
    var activeTimeoutIds = [];
    onMounted(function() {
      activeTimeoutIds.forEach(function(timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    });
    onBeforeUnmount(function() {
      activeTimeoutIds.forEach(function(timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    });
    var onInternalMouseDown = function onInternalMouseDown2(event) {
      var _b2;
      var _a, _b;
      var target = event.target;
      var popupElement = (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.getPopupElement();
      if (popupElement && popupElement.contains(target)) {
        var timeoutId = setTimeout(function() {
          var _a2;
          var index = activeTimeoutIds.indexOf(timeoutId);
          if (index !== -1) {
            activeTimeoutIds.splice(index, 1);
          }
          cancelSetMockFocused();
          if (!mobile.value && !popupElement.contains(document.activeElement)) {
            (_a2 = selectorRef.value) === null || _a2 === void 0 ? void 0 : _a2.focus();
          }
        });
        activeTimeoutIds.push(timeoutId);
      }
      for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        restArgs[_key3 - 1] = arguments[_key3];
      }
      (_b = props2.onMousedown) === null || _b === void 0 ? void 0 : (_b2 = _b).call.apply(_b2, [props2, event].concat(restArgs));
    };
    var containerWidth = ref(null);
    var instance = getCurrentInstance();
    var onPopupMouseEnter = function onPopupMouseEnter2() {
      instance.update();
    };
    onMounted(function() {
      watch(triggerOpen, function() {
        var _a;
        if (triggerOpen.value) {
          var newWidth = Math.ceil((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth);
          if (containerWidth.value !== newWidth && !Number.isNaN(newWidth)) {
            containerWidth.value = newWidth;
          }
        }
      }, {
        immediate: true,
        flush: "post"
      });
    });
    useSelectTriggerControl([containerRef, triggerRef], triggerOpen, onToggleOpen);
    useProvideBaseSelectProps(toReactive(_extends(_extends({}, toRefs(props2)), {
      open: mergedOpen,
      triggerOpen,
      showSearch: mergedShowSearch,
      multiple,
      toggleOpen: onToggleOpen
    })));
    return function() {
      var _classNames2;
      var _a = _extends(_extends({}, props2), attrs), prefixCls = _a.prefixCls, id = _a.id;
      _a.open;
      _a.defaultOpen;
      var mode = _a.mode;
      _a.showSearch;
      _a.searchValue;
      _a.onSearch;
      var allowClear = _a.allowClear, clearIcon = _a.clearIcon, showArrow = _a.showArrow, inputIcon = _a.inputIcon, disabled = _a.disabled, loading = _a.loading, getInputElement = _a.getInputElement, getPopupContainer = _a.getPopupContainer, placement = _a.placement, animation = _a.animation, transitionName = _a.transitionName, dropdownStyle = _a.dropdownStyle, dropdownClassName = _a.dropdownClassName, dropdownMatchSelectWidth = _a.dropdownMatchSelectWidth, dropdownRender = _a.dropdownRender, dropdownAlign = _a.dropdownAlign;
      _a.showAction;
      var direction = _a.direction;
      _a.tokenSeparators;
      var tagRender = _a.tagRender, optionLabelRender = _a.optionLabelRender;
      _a.onPopupScroll;
      _a.onDropdownVisibleChange;
      _a.onFocus;
      _a.onBlur;
      _a.onKeyup;
      _a.onKeydown;
      _a.onMousedown;
      var onClear = _a.onClear, omitDomProps = _a.omitDomProps, getRawInputElement = _a.getRawInputElement, displayValues = _a.displayValues, onDisplayValuesChange = _a.onDisplayValuesChange, emptyOptions = _a.emptyOptions, activeDescendantId = _a.activeDescendantId, activeValue = _a.activeValue, OptionList2 = _a.OptionList, restProps = __rest$3(_a, ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"]);
      var customizeInputElement = mode === "combobox" && getInputElement && getInputElement() || null;
      var customizeRawInputElement = typeof getRawInputElement === "function" && getRawInputElement();
      var domProps = _extends({}, restProps);
      var onTriggerVisibleChange;
      if (customizeRawInputElement) {
        onTriggerVisibleChange = function onTriggerVisibleChange2(newOpen) {
          onToggleOpen(newOpen);
        };
      }
      DEFAULT_OMIT_PROPS.forEach(function(propName) {
        delete domProps[propName];
      });
      omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function(propName) {
        delete domProps[propName];
      });
      var mergedShowArrow = showArrow !== void 0 ? showArrow : loading || !multiple.value && mode !== "combobox";
      var arrowNode;
      if (mergedShowArrow) {
        arrowNode = createVNode(TransBtn$1, {
          "class": classNames("".concat(prefixCls, "-arrow"), _defineProperty$2({}, "".concat(prefixCls, "-arrow-loading"), loading)),
          "customizeIcon": inputIcon,
          "customizeIconProps": {
            loading,
            searchValue: mergedSearchValue.value,
            open: mergedOpen.value,
            focused: mockFocused.value,
            showSearch: mergedShowSearch.value
          }
        }, null);
      }
      var clearNode;
      var onClearMouseDown = function onClearMouseDown2() {
        onClear === null || onClear === void 0 ? void 0 : onClear();
        onDisplayValuesChange([], {
          type: "clear",
          values: displayValues
        });
        onInternalSearch("", false, false);
      };
      if (!disabled && allowClear && (displayValues.length || mergedSearchValue.value)) {
        clearNode = createVNode(TransBtn$1, {
          "class": "".concat(prefixCls, "-clear"),
          "onMousedown": onClearMouseDown,
          "customizeIcon": clearIcon
        }, {
          default: function _default2() {
            return [createTextVNode("\xD7")];
          }
        });
      }
      var optionList = createVNode(OptionList2, {
        "ref": listRef
      }, _extends(_extends({}, legacyTreeSelectContext.customSlots), {
        option: slots.option
      }));
      var mergedClassName = classNames(prefixCls, attrs.class, (_classNames2 = {}, _defineProperty$2(_classNames2, "".concat(prefixCls, "-focused"), mockFocused.value), _defineProperty$2(_classNames2, "".concat(prefixCls, "-multiple"), multiple.value), _defineProperty$2(_classNames2, "".concat(prefixCls, "-single"), !multiple.value), _defineProperty$2(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), _defineProperty$2(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), _defineProperty$2(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$2(_classNames2, "".concat(prefixCls, "-loading"), loading), _defineProperty$2(_classNames2, "".concat(prefixCls, "-open"), mergedOpen.value), _defineProperty$2(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), _defineProperty$2(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch.value), _classNames2));
      var selectorNode = createVNode(SelectTrigger$1, {
        "ref": triggerRef,
        "disabled": disabled,
        "prefixCls": prefixCls,
        "visible": triggerOpen.value,
        "popupElement": optionList,
        "containerWidth": containerWidth.value,
        "animation": animation,
        "transitionName": transitionName,
        "dropdownStyle": dropdownStyle,
        "dropdownClassName": dropdownClassName,
        "direction": direction,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth,
        "dropdownRender": dropdownRender,
        "dropdownAlign": dropdownAlign,
        "placement": placement,
        "getPopupContainer": getPopupContainer,
        "empty": emptyOptions,
        "getTriggerDOMNode": function getTriggerDOMNode() {
          return selectorDomRef.current;
        },
        "onPopupVisibleChange": onTriggerVisibleChange,
        "onPopupMouseEnter": onPopupMouseEnter
      }, {
        default: function _default2() {
          return customizeRawInputElement ? isValidElement(customizeRawInputElement) && cloneElement(customizeRawInputElement, {
            ref: selectorDomRef
          }, false, true) : createVNode(Selector$1, _objectSpread2(_objectSpread2({}, props2), {}, {
            "domRef": selectorDomRef,
            "prefixCls": prefixCls,
            "inputElement": customizeInputElement,
            "ref": selectorRef,
            "id": id,
            "showSearch": mergedShowSearch.value,
            "mode": mode,
            "activeDescendantId": activeDescendantId,
            "tagRender": tagRender,
            "optionLabelRender": optionLabelRender,
            "values": displayValues,
            "open": mergedOpen.value,
            "onToggleOpen": onToggleOpen,
            "activeValue": activeValue,
            "searchValue": mergedSearchValue.value,
            "onSearch": onInternalSearch,
            "onSearchSubmit": onInternalSearchSubmit,
            "onRemove": onSelectorRemove,
            "tokenWithEnter": tokenWithEnter.value
          }), null);
        }
      });
      var renderNode;
      if (customizeRawInputElement) {
        renderNode = selectorNode;
      } else {
        renderNode = createVNode("div", _objectSpread2(_objectSpread2({}, domProps), {}, {
          "class": mergedClassName,
          "ref": containerRef,
          "onMousedown": onInternalMouseDown,
          "onKeydown": onInternalKeyDown,
          "onKeyup": onInternalKeyUp
        }), [mockFocused.value && !mergedOpen.value && createVNode("span", {
          "style": {
            width: 0,
            height: 0,
            display: "flex",
            overflow: "hidden",
            opacity: 0
          },
          "aria-live": "polite"
        }, ["".concat(displayValues.map(function(_ref2) {
          var label = _ref2.label, value = _ref2.value;
          return ["number", "string"].includes(_typeof(label)) ? label : value;
        }).join(", "))]), selectorNode, arrowNode, clearNode]);
      }
      return renderNode;
    };
  }
});
var Filter = function Filter2(_ref, _ref2) {
  var height = _ref.height, offset = _ref.offset, prefixCls = _ref.prefixCls, onInnerResize = _ref.onInnerResize;
  var slots = _ref2.slots;
  var _a;
  var outerStyle = {};
  var innerStyle = {
    display: "flex",
    flexDirection: "column"
  };
  if (offset !== void 0) {
    outerStyle = {
      height: "".concat(height, "px"),
      position: "relative",
      overflow: "hidden"
    };
    innerStyle = _extends(_extends({}, innerStyle), {
      transform: "translateY(".concat(offset, "px)"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    });
  }
  return createVNode("div", {
    "style": outerStyle
  }, [createVNode(ResizeObserver, {
    "onResize": function onResize(_ref3) {
      var offsetHeight = _ref3.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, {
    default: function _default2() {
      return [createVNode("div", {
        "style": innerStyle,
        "class": classNames(_defineProperty$2({}, "".concat(prefixCls, "-holder-inner"), prefixCls))
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])];
    }
  })]);
};
Filter.displayName = "Filter";
Filter.inheritAttrs = false;
Filter.props = {
  prefixCls: String,
  height: Number,
  offset: Number,
  onInnerResize: Function
};
var Filler = Filter;
var Item = function Item2(_ref, _ref2) {
  var setRef = _ref.setRef;
  var slots = _ref2.slots;
  var _a;
  var children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
  return children && children.length ? cloneVNode(children[0], {
    ref: setRef
  }) : children;
};
Item.props = {
  setRef: {
    type: Function,
    default: function _default() {
    }
  }
};
var Item$1 = Item;
var MIN_SIZE = 20;
function getPageY(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
var ScrollBar = defineComponent({
  name: "ScrollBar",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup: function setup7() {
    return {
      moveRaf: null,
      scrollbarRef: createRef(),
      thumbRef: createRef(),
      visibleTimeout: null,
      state: reactive({
        dragging: false,
        pageY: null,
        startTop: null,
        visible: false
      })
    };
  },
  watch: {
    scrollTop: {
      handler: function handler() {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted: function mounted() {
    var _a, _b;
    (_a = this.scrollbarRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive ? {
      passive: false
    } : false);
    (_b = this.thumbRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener("touchstart", this.onMouseDown, supportsPassive ? {
      passive: false
    } : false);
  },
  beforeUnmount: function beforeUnmount() {
    this.removeEvents();
    clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden: function delayHidden() {
      var _this = this;
      clearTimeout(this.visibleTimeout);
      this.state.visible = true;
      this.visibleTimeout = setTimeout(function() {
        _this.state.visible = false;
      }, 2e3);
    },
    onScrollbarTouchStart: function onScrollbarTouchStart(e) {
      e.preventDefault();
    },
    onContainerMouseDown: function onContainerMouseDown(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    patchEvents: function patchEvents() {
      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("mouseup", this.onMouseUp);
      this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, supportsPassive ? {
        passive: false
      } : false);
      this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents: function removeEvents() {
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("mouseup", this.onMouseUp);
      this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, supportsPassive ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, supportsPassive ? {
        passive: false
      } : false);
      this.thumbRef.current.removeEventListener("touchend", this.onMouseUp);
      wrapperRaf.cancel(this.moveRaf);
    },
    onMouseDown: function onMouseDown(e) {
      var onStartMove = this.$props.onStartMove;
      _extends(this.state, {
        dragging: true,
        pageY: getPageY(e),
        startTop: this.getTop()
      });
      onStartMove();
      this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    },
    onMouseMove: function onMouseMove(e) {
      var _this$state = this.state, dragging = _this$state.dragging, pageY = _this$state.pageY, startTop = _this$state.startTop;
      var onScroll = this.$props.onScroll;
      wrapperRaf.cancel(this.moveRaf);
      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = this.getEnableScrollRange();
        var enableHeightRange = this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        this.moveRaf = wrapperRaf(function() {
          onScroll(newScrollTop);
        });
      }
    },
    onMouseUp: function onMouseUp() {
      var onStopMove = this.$props.onStopMove;
      this.state.dragging = false;
      onStopMove();
      this.removeEvents();
    },
    getSpinHeight: function getSpinHeight() {
      var _this$$props = this.$props, height = _this$$props.height, count = _this$$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    },
    getEnableScrollRange: function getEnableScrollRange() {
      var _this$$props2 = this.$props, scrollHeight = _this$$props2.scrollHeight, height = _this$$props2.height;
      return scrollHeight - height || 0;
    },
    getEnableHeightRange: function getEnableHeightRange() {
      var height = this.$props.height;
      var spinHeight = this.getSpinHeight();
      return height - spinHeight || 0;
    },
    getTop: function getTop() {
      var scrollTop = this.$props.scrollTop;
      var enableScrollRange = this.getEnableScrollRange();
      var enableHeightRange = this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    },
    showScroll: function showScroll() {
      var _this$$props3 = this.$props, height = _this$$props3.height, scrollHeight = _this$$props3.scrollHeight;
      return scrollHeight > height;
    }
  },
  render: function render() {
    var _this$state2 = this.state, dragging = _this$state2.dragging, visible = _this$state2.visible;
    var prefixCls = this.$props.prefixCls;
    var spinHeight = this.getSpinHeight() + "px";
    var top = this.getTop() + "px";
    var canScroll = this.showScroll();
    var mergedVisible = canScroll && visible;
    return createVNode("div", {
      "ref": this.scrollbarRef,
      "class": classNames("".concat(prefixCls, "-scrollbar"), _defineProperty$2({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
      "style": {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: mergedVisible ? void 0 : "none"
      },
      "onMousedown": this.onContainerMouseDown,
      "onMousemove": this.delayHidden
    }, [createVNode("div", {
      "ref": this.thumbRef,
      "class": classNames("".concat(prefixCls, "-scrollbar-thumb"), _defineProperty$2({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
      "style": {
        width: "100%",
        height: spinHeight,
        top,
        left: 0,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "99px",
        cursor: "pointer",
        userSelect: "none"
      },
      "onMousedown": this.onMouseDown
    }, null)]);
  }
});
function useHeights(mergedData, getKey2, onItemAdd, onItemRemove) {
  var instance = /* @__PURE__ */ new Map();
  var heights = /* @__PURE__ */ new Map();
  var updatedMark = ref(Symbol("update"));
  watch(mergedData, function() {
    updatedMark.value = Symbol("update");
  });
  var heightUpdateId = 0;
  function collectHeight() {
    heightUpdateId += 1;
    var currentId = heightUpdateId;
    Promise.resolve().then(function() {
      if (currentId !== heightUpdateId)
        return;
      instance.forEach(function(element, key) {
        if (element && element.offsetParent) {
          var offsetHeight = element.offsetHeight;
          if (heights.get(key) !== offsetHeight) {
            updatedMark.value = Symbol("update");
            heights.set(key, element.offsetHeight);
          }
        }
      });
    });
  }
  function setInstance(item, ins) {
    var key = getKey2(item);
    var origin = instance.get(key);
    if (ins) {
      instance.set(key, ins.$el || ins);
      collectHeight();
    } else {
      instance.delete(key);
    }
    if (!origin !== !ins) {
      if (ins) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  return [setInstance, collectHeight, heights, updatedMark];
}
function useScrollTo(containerRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, triggerFlash) {
  var scroll;
  return function(arg) {
    if (arg === null || arg === void 0) {
      triggerFlash();
      return;
    }
    wrapperRaf.cancel(scroll);
    var data = mergedData.value;
    var itemHeight = props2.itemHeight;
    if (typeof arg === "number") {
      syncScrollTop(arg);
    } else if (arg && _typeof(arg) === "object") {
      var index;
      var align = arg.align;
      if ("index" in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function(item) {
          return getKey2(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset, offset = _arg$offset === void 0 ? 0 : _arg$offset;
      var syncScroll = function syncScroll2(times, targetAlign) {
        if (times < 0 || !containerRef.value)
          return;
        var height = containerRef.value.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        if (height) {
          var mergedAlign = targetAlign || align;
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);
          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey2(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index && cacheHeight === void 0) {
              needCollectHeight = true;
            }
          }
          var scrollTop = containerRef.value.scrollTop;
          var targetTop = null;
          switch (mergedAlign) {
            case "top":
              targetTop = itemTop - offset;
              break;
            case "bottom":
              targetTop = itemBottom - height + offset;
              break;
            default: {
              var scrollBottom = scrollTop + height;
              if (itemTop < scrollTop) {
                newTargetAlign = "top";
              } else if (itemBottom > scrollBottom) {
                newTargetAlign = "bottom";
              }
            }
          }
          if (targetTop !== null && targetTop !== scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        scroll = wrapperRaf(function() {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll2(times - 1, newTargetAlign);
        });
      };
      syncScroll(5);
    }
  };
}
var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
var isFF$1 = isFF;
var useOriginScroll = function(isScrollAtTop, isScrollAtBottom) {
  var lock = false;
  var lockTimeout = null;
  function lockScroll() {
    clearTimeout(lockTimeout);
    lock = true;
    lockTimeout = setTimeout(function() {
      lock = false;
    }, 50);
  }
  return function(deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var originScroll = deltaY < 0 && isScrollAtTop.value || deltaY > 0 && isScrollAtBottom.value;
    if (smoothOffset && originScroll) {
      clearTimeout(lockTimeout);
      lock = false;
    } else if (!originScroll || lock) {
      lockScroll();
    }
    return !lock && originScroll;
  };
};
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = 0;
  var nextFrame = null;
  var wheelValue = null;
  var isMouseScroll = false;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual.value)
      return;
    wrapperRaf.cancel(nextFrame);
    var deltaY = event.deltaY;
    offsetRef += deltaY;
    wheelValue = deltaY;
    if (originScroll(deltaY))
      return;
    if (!isFF$1) {
      event.preventDefault();
    }
    nextFrame = wrapperRaf(function() {
      var patchMultiple = isMouseScroll ? 10 : 1;
      onWheelDelta(offsetRef * patchMultiple);
      offsetRef = 0;
    });
  }
  function onFireFoxScroll(event) {
    if (!inVirtual.value)
      return;
    isMouseScroll = event.detail === wheelValue;
  }
  return [onWheel, onFireFoxScroll];
}
var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touched = false;
  var touchY = 0;
  var element = null;
  var interval = null;
  var cleanUpEvents = function cleanUpEvents2() {
    if (element) {
      element.removeEventListener("touchmove", onTouchMove);
      element.removeEventListener("touchend", onTouchEnd);
    }
  };
  var onTouchMove = function onTouchMove2(e) {
    if (touched) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchY - currentY;
      touchY = currentY;
      if (callback(offsetY)) {
        e.preventDefault();
      }
      clearInterval(interval);
      interval = setInterval(function() {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(interval);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd2() {
    touched = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart2(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touched) {
      touched = true;
      touchY = Math.ceil(e.touches[0].pageY);
      element = e.target;
      element.addEventListener("touchmove", onTouchMove, {
        passive: false
      });
      element.addEventListener("touchend", onTouchEnd);
    }
  };
  var noop = function noop2() {
  };
  onMounted(function() {
    document.addEventListener("touchmove", noop, {
      passive: false
    });
    watch(inVirtual, function(val) {
      listRef.value.removeEventListener("touchstart", onTouchStart);
      cleanUpEvents();
      clearInterval(interval);
      if (val) {
        listRef.value.addEventListener("touchstart", onTouchStart, {
          passive: false
        });
      }
    }, {
      immediate: true
    });
  });
  onBeforeUnmount(function() {
    document.removeEventListener("touchmove", noop);
  });
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
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function renderChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey2 = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function(item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {});
    var key = getKey2(item);
    return createVNode(Item$1, {
      "key": key,
      "setRef": function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, {
      default: function _default2() {
        return [node];
      }
    });
  });
}
var List = defineComponent({
  name: "List",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    data: PropTypes.array,
    height: Number,
    itemHeight: Number,
    fullHeight: {
      type: Boolean,
      default: void 0
    },
    itemKey: {
      type: [String, Number, Function],
      required: true
    },
    component: {
      type: [String, Object]
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    children: Function,
    onScroll: Function,
    onMousedown: Function,
    onMouseenter: Function,
    onVisibleChange: Function
  },
  setup: function setup8(props2, _ref2) {
    var expose = _ref2.expose;
    var useVirtual = computed(function() {
      var height = props2.height, itemHeight = props2.itemHeight, virtual = props2.virtual;
      return !!(virtual !== false && height && itemHeight);
    });
    var inVirtual = computed(function() {
      var height = props2.height, itemHeight = props2.itemHeight, data2 = props2.data;
      return useVirtual.value && data2 && itemHeight * data2.length > height;
    });
    var state = reactive({
      scrollTop: 0,
      scrollMoving: false
    });
    var data = computed(function() {
      return props2.data || EMPTY_DATA;
    });
    var mergedData = shallowRef([]);
    watch(data, function() {
      mergedData.value = toRaw(data.value).slice();
    }, {
      immediate: true
    });
    var itemKey = shallowRef(function(_item) {
      return void 0;
    });
    watch(function() {
      return props2.itemKey;
    }, function(val) {
      if (typeof val === "function") {
        itemKey.value = val;
      } else {
        itemKey.value = function(item) {
          return item === null || item === void 0 ? void 0 : item[val];
        };
      }
    }, {
      immediate: true
    });
    var componentRef = ref();
    var fillerInnerRef = ref();
    var scrollBarRef = ref();
    var getKey2 = function getKey3(item) {
      return itemKey.value(item);
    };
    var sharedConfig = {
      getKey: getKey2
    };
    function syncScrollTop(newTop) {
      var value;
      if (typeof newTop === "function") {
        value = newTop(state.scrollTop);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      if (componentRef.value) {
        componentRef.value.scrollTop = alignedTop;
      }
      state.scrollTop = alignedTop;
    }
    var _useHeights = useHeights(mergedData, getKey2, null, null), _useHeights2 = _slicedToArray(_useHeights, 4), setInstance = _useHeights2[0], collectHeight = _useHeights2[1], heights = _useHeights2[2], updatedMark = _useHeights2[3];
    var calRes = reactive({
      scrollHeight: void 0,
      start: 0,
      end: 0,
      offset: void 0
    });
    var offsetHeight = ref(0);
    onMounted(function() {
      nextTick(function() {
        var _a;
        offsetHeight.value = ((_a = fillerInnerRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
      });
    });
    onUpdated(function() {
      nextTick(function() {
        var _a;
        offsetHeight.value = ((_a = fillerInnerRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
      });
    });
    watch([useVirtual, mergedData], function() {
      if (!useVirtual.value) {
        _extends(calRes, {
          scrollHeight: void 0,
          start: 0,
          end: mergedData.value.length - 1,
          offset: void 0
        });
      }
    }, {
      immediate: true
    });
    watch([useVirtual, mergedData, offsetHeight, inVirtual], function() {
      if (useVirtual.value && !inVirtual.value) {
        _extends(calRes, {
          scrollHeight: offsetHeight.value,
          start: 0,
          end: mergedData.value.length - 1,
          offset: void 0
        });
      }
    }, {
      immediate: true
    });
    watch([inVirtual, useVirtual, function() {
      return state.scrollTop;
    }, mergedData, updatedMark, function() {
      return props2.height;
    }, offsetHeight], function() {
      if (!useVirtual.value || !inVirtual.value) {
        return;
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.value.length;
      var data2 = mergedData.value;
      var scrollTop = state.scrollTop;
      var itemHeight = props2.itemHeight, height = props2.height;
      var scrollTopHeight = scrollTop + height;
      for (var i = 0; i < dataLen; i += 1) {
        var item = data2[i];
        var key = getKey2(item);
        var cacheHeight = heights.get(key);
        if (cacheHeight === void 0) {
          cacheHeight = itemHeight;
        }
        var currentItemBottom = itemTop + cacheHeight;
        if (startIndex === void 0 && currentItemBottom >= scrollTop) {
          startIndex = i;
          startOffset = itemTop;
        }
        if (endIndex === void 0 && currentItemBottom > scrollTopHeight) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      if (startIndex === void 0) {
        startIndex = 0;
        startOffset = 0;
      }
      if (endIndex === void 0) {
        endIndex = dataLen - 1;
      }
      endIndex = Math.min(endIndex + 1, dataLen);
      _extends(calRes, {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      });
    }, {
      immediate: true
    });
    var maxScrollHeight = computed(function() {
      return calRes.scrollHeight - props2.height;
    });
    function keepInRange(newScrollTop) {
      var newTop = newScrollTop;
      if (!Number.isNaN(maxScrollHeight.value)) {
        newTop = Math.min(newTop, maxScrollHeight.value);
      }
      newTop = Math.max(newTop, 0);
      return newTop;
    }
    var isScrollAtTop = computed(function() {
      return state.scrollTop <= 0;
    });
    var isScrollAtBottom = computed(function() {
      return state.scrollTop >= maxScrollHeight.value;
    });
    var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
    function onScrollBar(newScrollTop) {
      var newTop = newScrollTop;
      syncScrollTop(newTop);
    }
    function onFallbackScroll(e) {
      var _a;
      var newScrollTop = e.currentTarget.scrollTop;
      if (Math.abs(newScrollTop - state.scrollTop) >= 1) {
        syncScrollTop(newScrollTop);
      }
      (_a = props2.onScroll) === null || _a === void 0 ? void 0 : _a.call(props2, e);
    }
    var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function(offsetY) {
      syncScrollTop(function(top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }), _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2), onRawWheel = _useFrameWheel2[0], onFireFoxScroll = _useFrameWheel2[1];
    useMobileTouchMove(useVirtual, componentRef, function(deltaY, smoothOffset) {
      if (originScroll(deltaY, smoothOffset)) {
        return false;
      }
      onRawWheel({
        preventDefault: function preventDefault() {
        },
        deltaY
      });
      return true;
    });
    function onMozMousePixelScroll(e) {
      if (useVirtual.value) {
        e.preventDefault();
      }
    }
    var removeEventListener = function removeEventListener2() {
      if (componentRef.value) {
        componentRef.value.removeEventListener("wheel", onRawWheel, supportsPassive ? {
          passive: false
        } : false);
        componentRef.value.removeEventListener("DOMMouseScroll", onFireFoxScroll);
        componentRef.value.removeEventListener("MozMousePixelScroll", onMozMousePixelScroll);
      }
    };
    watchEffect(function() {
      nextTick(function() {
        if (componentRef.value) {
          removeEventListener();
          componentRef.value.addEventListener("wheel", onRawWheel, supportsPassive ? {
            passive: false
          } : false);
          componentRef.value.addEventListener("DOMMouseScroll", onFireFoxScroll);
          componentRef.value.addEventListener("MozMousePixelScroll", onMozMousePixelScroll);
        }
      });
    });
    onBeforeUnmount(function() {
      removeEventListener();
    });
    var scrollTo = useScrollTo(componentRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, function() {
      var _a;
      (_a = scrollBarRef.value) === null || _a === void 0 ? void 0 : _a.delayHidden();
    });
    expose({
      scrollTo
    });
    var componentStyle = computed(function() {
      var cs = null;
      if (props2.height) {
        cs = _extends(_defineProperty$2({}, props2.fullHeight ? "height" : "maxHeight", props2.height + "px"), ScrollStyle);
        if (useVirtual.value) {
          cs.overflowY = "hidden";
          if (state.scrollMoving) {
            cs.pointerEvents = "none";
          }
        }
      }
      return cs;
    });
    watch([function() {
      return calRes.start;
    }, function() {
      return calRes.end;
    }, mergedData], function() {
      if (props2.onVisibleChange) {
        var renderList = mergedData.value.slice(calRes.start, calRes.end + 1);
        props2.onVisibleChange(renderList, mergedData.value);
      }
    }, {
      flush: "post"
    });
    return {
      state,
      mergedData,
      componentStyle,
      onFallbackScroll,
      onScrollBar,
      componentRef,
      useVirtual,
      calRes,
      collectHeight,
      setInstance,
      sharedConfig,
      scrollBarRef,
      fillerInnerRef
    };
  },
  render: function render2() {
    var _this = this;
    var _a = _extends(_extends({}, this.$props), this.$attrs), _a$prefixCls = _a.prefixCls, prefixCls = _a$prefixCls === void 0 ? "rc-virtual-list" : _a$prefixCls, height = _a.height;
    _a.itemHeight;
    _a.fullHeight;
    _a.data;
    _a.itemKey;
    _a.virtual;
    var _a$component = _a.component, Component = _a$component === void 0 ? "div" : _a$component;
    _a.onScroll;
    var _a$children = _a.children, children = _a$children === void 0 ? this.$slots.default : _a$children, style = _a.style, className = _a.class, restProps = __rest$2(_a, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]);
    var mergedClassName = classNames(prefixCls, className);
    var scrollTop = this.state.scrollTop;
    var _this$calRes = this.calRes, scrollHeight = _this$calRes.scrollHeight, offset = _this$calRes.offset, start = _this$calRes.start, end = _this$calRes.end;
    var componentStyle = this.componentStyle, onFallbackScroll = this.onFallbackScroll, onScrollBar = this.onScrollBar, useVirtual = this.useVirtual, collectHeight = this.collectHeight, sharedConfig = this.sharedConfig, setInstance = this.setInstance, mergedData = this.mergedData;
    return createVNode("div", _objectSpread2({
      "style": _extends(_extends({}, style), {
        position: "relative"
      }),
      "class": mergedClassName
    }, restProps), [createVNode(Component, {
      "class": "".concat(prefixCls, "-holder"),
      "style": componentStyle,
      "ref": "componentRef",
      "onScroll": onFallbackScroll
    }, {
      default: function _default2() {
        return [createVNode(Filler, {
          "prefixCls": prefixCls,
          "height": scrollHeight,
          "offset": offset,
          "onInnerResize": collectHeight,
          "ref": "fillerInnerRef"
        }, {
          default: function _default3() {
            return renderChildren(mergedData, start, end, setInstance, children, sharedConfig);
          }
        })];
      }
    }), useVirtual && createVNode(ScrollBar, {
      "ref": "scrollBarRef",
      "prefixCls": prefixCls,
      "scrollTop": scrollTop,
      "height": height,
      "scrollHeight": scrollHeight,
      "count": mergedData.length,
      "onScroll": onScrollBar,
      "onStartMove": function onStartMove() {
        _this.state.scrollMoving = true;
      },
      "onStopMove": function onStopMove() {
        _this.state.scrollMoving = false;
      }
    }, null)]);
  }
});
var List$1 = List;
function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = ref(getValue());
  watch(condition, function(next, pre) {
    if (shouldUpdate) {
      if (shouldUpdate(next, pre)) {
        cacheRef.value = getValue();
      }
    } else {
      cacheRef.value = getValue();
    }
  });
  return cacheRef;
}
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var SelectContextKey = Symbol("SelectContextKey");
function useProvideSelectProps(props2) {
  return provide(SelectContextKey, props2);
}
function useSelectProps() {
  return inject(SelectContextKey, {});
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
function isTitleType(content) {
  return typeof content === "string" || typeof content === "number";
}
var OptionList = defineComponent({
  name: "OptionList",
  inheritAttrs: false,
  slots: ["option"],
  setup: function setup9(_, _ref) {
    var expose = _ref.expose, slots = _ref.slots;
    var baseProps = useBaseProps();
    var props2 = useSelectProps();
    var itemPrefixCls = computed(function() {
      return "".concat(baseProps.prefixCls, "-item");
    });
    var memoFlattenOptions = useMemo(function() {
      return props2.flattenOptions;
    }, [function() {
      return baseProps.open;
    }, function() {
      return props2.flattenOptions;
    }], function(next) {
      return next[0];
    });
    var listRef = createRef();
    var onListMouseDown = function onListMouseDown2(event) {
      event.preventDefault();
    };
    var scrollIntoView = function scrollIntoView2(args) {
      if (listRef.current) {
        listRef.current.scrollTo(typeof args === "number" ? {
          index: args
        } : args);
      }
    };
    var getEnabledActiveIndex = function getEnabledActiveIndex2(index) {
      var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      var len = memoFlattenOptions.value.length;
      for (var i = 0; i < len; i += 1) {
        var current = (index + i * offset + len) % len;
        var _memoFlattenOptions$v = memoFlattenOptions.value[current], group = _memoFlattenOptions$v.group, data = _memoFlattenOptions$v.data;
        if (!group && !data.disabled) {
          return current;
        }
      }
      return -1;
    };
    var state = reactive({
      activeIndex: getEnabledActiveIndex(0)
    });
    var setActive = function setActive2(index) {
      var fromKeyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      state.activeIndex = index;
      var info = {
        source: fromKeyboard ? "keyboard" : "mouse"
      };
      var flattenItem = memoFlattenOptions.value[index];
      if (!flattenItem) {
        props2.onActiveValue(null, -1, info);
        return;
      }
      props2.onActiveValue(flattenItem.value, index, info);
    };
    watch([function() {
      return memoFlattenOptions.value.length;
    }, function() {
      return baseProps.searchValue;
    }], function() {
      setActive(props2.defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, {
      immediate: true
    });
    var isSelected = function isSelected2(value) {
      return props2.rawValues.has(value) && baseProps.mode !== "combobox";
    };
    watch([function() {
      return baseProps.open;
    }, function() {
      return baseProps.searchValue;
    }], function() {
      if (!baseProps.multiple && baseProps.open && props2.rawValues.size === 1) {
        var value = Array.from(props2.rawValues)[0];
        var index = toRaw(memoFlattenOptions.value).findIndex(function(_ref2) {
          var data = _ref2.data;
          return data[props2.fieldNames.value] === value;
        });
        if (index !== -1) {
          setActive(index);
          nextTick(function() {
            scrollIntoView(index);
          });
        }
      }
      if (baseProps.open) {
        nextTick(function() {
          var _a;
          (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(void 0);
        });
      }
    }, {
      immediate: true,
      flush: "post"
    });
    var onSelectValue = function onSelectValue2(value) {
      if (value !== void 0) {
        props2.onSelect(value, {
          selected: !props2.rawValues.has(value)
        });
      }
      if (!baseProps.multiple) {
        baseProps.toggleOpen(false);
      }
    };
    var getLabel = function getLabel2(item) {
      return typeof item.label === "function" ? item.label() : item.label;
    };
    function renderItem(index) {
      var item = memoFlattenOptions.value[index];
      if (!item)
        return null;
      var itemData = item.data || {};
      var value = itemData.value;
      var group = item.group;
      var attrs = pickAttrs(itemData, true);
      var mergedLabel = getLabel(item);
      return item ? createVNode("div", _objectSpread2(_objectSpread2({
        "aria-label": typeof mergedLabel === "string" && !group ? mergedLabel : null
      }, attrs), {}, {
        "key": index,
        "role": group ? "presentation" : "option",
        "id": "".concat(baseProps.id, "_list_").concat(index),
        "aria-selected": isSelected(value)
      }), [value]) : null;
    }
    var onKeydown = function onKeydown2(event) {
      var which = event.which, ctrlKey = event.ctrlKey;
      switch (which) {
        case KeyCode.N:
        case KeyCode.P:
        case KeyCode.UP:
        case KeyCode.DOWN: {
          var offset = 0;
          if (which === KeyCode.UP) {
            offset = -1;
          } else if (which === KeyCode.DOWN) {
            offset = 1;
          } else if (isPlatformMac() && ctrlKey) {
            if (which === KeyCode.N) {
              offset = 1;
            } else if (which === KeyCode.P) {
              offset = -1;
            }
          }
          if (offset !== 0) {
            var nextActiveIndex = getEnabledActiveIndex(state.activeIndex + offset, offset);
            scrollIntoView(nextActiveIndex);
            setActive(nextActiveIndex, true);
          }
          break;
        }
        case KeyCode.ENTER: {
          var item = memoFlattenOptions.value[state.activeIndex];
          if (item && !item.data.disabled) {
            onSelectValue(item.value);
          } else {
            onSelectValue(void 0);
          }
          if (baseProps.open) {
            event.preventDefault();
          }
          break;
        }
        case KeyCode.ESC: {
          baseProps.toggleOpen(false);
          if (baseProps.open) {
            event.stopPropagation();
          }
        }
      }
    };
    var onKeyup = function onKeyup2() {
    };
    var scrollTo = function scrollTo2(index) {
      scrollIntoView(index);
    };
    expose({
      onKeydown,
      onKeyup,
      scrollTo
    });
    return function() {
      var id = baseProps.id, notFoundContent = baseProps.notFoundContent, onPopupScroll = baseProps.onPopupScroll;
      var menuItemSelectedIcon = props2.menuItemSelectedIcon, fieldNames = props2.fieldNames, virtual = props2.virtual, listHeight = props2.listHeight, listItemHeight = props2.listItemHeight;
      var renderOption = slots.option;
      var activeIndex = state.activeIndex;
      var omitFieldNameList = Object.keys(fieldNames).map(function(key) {
        return fieldNames[key];
      });
      if (memoFlattenOptions.value.length === 0) {
        return createVNode("div", {
          "role": "listbox",
          "id": "".concat(id, "_list"),
          "class": "".concat(itemPrefixCls.value, "-empty"),
          "onMousedown": onListMouseDown
        }, [notFoundContent]);
      }
      return createVNode(Fragment, null, [createVNode("div", {
        "role": "listbox",
        "id": "".concat(id, "_list"),
        "style": {
          height: 0,
          width: 0,
          overflow: "hidden"
        }
      }, [renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)]), createVNode(List$1, {
        "itemKey": "key",
        "ref": listRef,
        "data": memoFlattenOptions.value,
        "height": listHeight,
        "itemHeight": listItemHeight,
        "fullHeight": false,
        "onMousedown": onListMouseDown,
        "onScroll": onPopupScroll,
        "virtual": virtual
      }, {
        default: function _default2(item, itemIndex) {
          var _classNames;
          var _a;
          var group = item.group, groupOption = item.groupOption, data = item.data, value = item.value;
          var key = data.key;
          var label = typeof item.label === "function" ? item.label() : item.label;
          if (group) {
            var groupTitle = (_a = data.title) !== null && _a !== void 0 ? _a : isTitleType(label) && label;
            return createVNode("div", {
              "class": classNames(itemPrefixCls.value, "".concat(itemPrefixCls.value, "-group")),
              "title": groupTitle
            }, [renderOption ? renderOption(data) : label !== void 0 ? label : key]);
          }
          var disabled = data.disabled, title = data.title;
          data.children;
          var style = data.style, cls = data.class, className = data.className, otherProps = __rest$1(data, ["disabled", "title", "children", "style", "class", "className"]);
          var passedProps = omit(otherProps, omitFieldNameList);
          var selected = isSelected(value);
          var optionPrefixCls = "".concat(itemPrefixCls.value, "-option");
          var optionClassName = classNames(itemPrefixCls.value, optionPrefixCls, cls, className, (_classNames = {}, _defineProperty$2(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), _defineProperty$2(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), _defineProperty$2(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), _defineProperty$2(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
          var mergedLabel = getLabel(item);
          var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === "function" || selected;
          var content = typeof mergedLabel === "number" ? mergedLabel : mergedLabel || value;
          var optionTitle = isTitleType(content) ? content.toString() : void 0;
          if (title !== void 0) {
            optionTitle = title;
          }
          return createVNode("div", _objectSpread2(_objectSpread2({}, passedProps), {}, {
            "aria-selected": selected,
            "class": optionClassName,
            "title": optionTitle,
            "onMousemove": function onMousemove(e) {
              if (otherProps.onMousemove) {
                otherProps.onMousemove(e);
              }
              if (activeIndex === itemIndex || disabled) {
                return;
              }
              setActive(itemIndex);
            },
            "onClick": function onClick(e) {
              if (!disabled) {
                onSelectValue(value);
              }
              if (otherProps.onClick) {
                otherProps.onClick(e);
              }
            },
            "style": style
          }), [createVNode("div", {
            "class": "".concat(optionPrefixCls, "-content")
          }, [renderOption ? renderOption(data) : content]), isValidElement(menuItemSelectedIcon) || selected, iconVisible && createVNode(TransBtn$1, {
            "class": "".concat(itemPrefixCls.value, "-option-state"),
            "customizeIcon": menuItemSelectedIcon,
            "customizeIconProps": {
              isSelected: selected
            }
          }, {
            default: function _default3() {
              return [selected ? "\u2713" : null];
            }
          })]);
        }
      })]);
    };
  }
});
var OptionList$1 = OptionList;
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
function convertNodeToOption(node) {
  var _a = node, key = _a.key, children = _a.children, _b = _a.props, value = _b.value, disabled = _b.disabled, restProps = __rest(_b, ["value", "disabled"]);
  var child = children === null || children === void 0 ? void 0 : children.default;
  return _extends({
    key,
    value: value !== void 0 ? value : key,
    children: child,
    disabled: disabled || disabled === ""
  }, restProps);
}
function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var dd = flattenChildren(nodes).map(function(node, index) {
    var _a;
    if (!isValidElement(node) || !node.type) {
      return null;
    }
    var isSelectOptGroup = node.type.isSelectOptGroup, key = node.key, children = node.children, props2 = node.props;
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    var child = children && children.default ? children.default() : void 0;
    var label = (props2 === null || props2 === void 0 ? void 0 : props2.label) || ((_a = children.label) === null || _a === void 0 ? void 0 : _a.call(children)) || key;
    return _extends(_extends({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : String(key), "__")
    }, props2), {
      label,
      options: convertChildrenToData(child || [])
    });
  }).filter(function(data) {
    return data;
  });
  return dd;
}
function useOptions(options, children, fieldNames) {
  var mergedOptions = shallowRef();
  var valueOptions = shallowRef();
  var labelOptions = shallowRef();
  var tempMergedOptions = shallowRef([]);
  watch([options, children], function() {
    if (options.value) {
      tempMergedOptions.value = toRaw(options.value).slice();
    } else {
      tempMergedOptions.value = convertChildrenToData(children.value);
    }
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(function() {
    var newOptions = tempMergedOptions.value;
    var newValueOptions = /* @__PURE__ */ new Map();
    var newLabelOptions = /* @__PURE__ */ new Map();
    var fieldNamesValue = fieldNames.value;
    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];
        if (!option[fieldNamesValue.options] || isChildren) {
          newValueOptions.set(option[fieldNamesValue.value], option);
          newLabelOptions.set(option[fieldNamesValue.label], option);
        } else {
          dig(option[fieldNamesValue.options], true);
        }
      }
    }
    dig(newOptions);
    mergedOptions.value = newOptions;
    valueOptions.value = newValueOptions;
    labelOptions.value = newLabelOptions;
  });
  return {
    options: mergedOptions,
    valueOptions,
    labelOptions
  };
}
var uuid = 0;
var isBrowserClient = canUseDom();
function getUUID() {
  var retId;
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = "TEST_OR_SSR";
  }
  return retId;
}
function useId() {
  var id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ref("");
  var innerId = "rc_select_".concat(getUUID());
  return id.value || innerId;
}
function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== void 0 ? [value] : [];
}
function includes(test, search) {
  return toArray(test).join("").toUpperCase().includes(search);
}
var useFilterOptions = function(options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return computed(function() {
    var searchValueVal = searchValue.value;
    var optionFilterPropValue = optionFilterProp === null || optionFilterProp === void 0 ? void 0 : optionFilterProp.value;
    var filterOptionValue = filterOption === null || filterOption === void 0 ? void 0 : filterOption.value;
    if (!searchValueVal || filterOptionValue === false) {
      return options.value;
    }
    var _fieldNames$value = fieldNames.value, fieldOptions = _fieldNames$value.options, fieldLabel = _fieldNames$value.label, fieldValue = _fieldNames$value.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOptionValue === "function";
    var upperSearch = searchValueVal.toUpperCase();
    var filterFunc = customizeFilter ? filterOptionValue : function(_, option) {
      if (optionFilterPropValue) {
        return includes(option[optionFilterPropValue], upperSearch);
      }
      if (option[fieldOptions]) {
        return includes(option[fieldLabel !== "children" ? fieldLabel : "label"], upperSearch);
      }
      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function(opt) {
      return injectPropsWithOption(opt);
    } : function(opt) {
      return opt;
    };
    options.value.forEach(function(item) {
      if (item[fieldOptions]) {
        var matchGroup = filterFunc(searchValueVal, wrapOption(item));
        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          var subOptions = item[fieldOptions].filter(function(subItem) {
            return filterFunc(searchValueVal, wrapOption(subItem));
          });
          if (subOptions.length) {
            filteredOptions.push(_extends(_extends({}, item), _defineProperty$2({}, fieldOptions, subOptions)));
          }
        }
        return;
      }
      if (filterFunc(searchValueVal, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  });
};
var useCache = function(labeledValues, valueOptions) {
  var cacheRef = shallowRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  });
  var filledLabeledValues = computed(function() {
    var _cacheRef$value = cacheRef.value, prevValueCache = _cacheRef$value.values, prevOptionCache = _cacheRef$value.options;
    var patchedValues = labeledValues.value.map(function(item) {
      var _a;
      if (item.label === void 0) {
        return _extends(_extends({}, item), {
          label: (_a = prevValueCache.get(item.value)) === null || _a === void 0 ? void 0 : _a.label
        });
      }
      return item;
    });
    var valueCache = /* @__PURE__ */ new Map();
    var optionCache = /* @__PURE__ */ new Map();
    patchedValues.forEach(function(item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.value.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.value.values = valueCache;
    cacheRef.value.options = optionCache;
    return patchedValues;
  });
  var getOption = function getOption2(val) {
    return valueOptions.value.get(val) || cacheRef.value.options.get(val);
  };
  return [filledLabeledValues, getOption];
};
var OMIT_DOM_PROPS = ["inputValue"];
function selectProps$1() {
  return _extends(_extends({}, baseSelectPropsWithoutPrivate()), {
    prefixCls: String,
    id: String,
    backfill: {
      type: Boolean,
      default: void 0
    },
    fieldNames: Object,
    inputValue: String,
    searchValue: String,
    onSearch: Function,
    autoClearSearchValue: {
      type: Boolean,
      default: void 0
    },
    onSelect: Function,
    onDeselect: Function,
    filterOption: {
      type: [Boolean, Function],
      default: void 0
    },
    filterSort: Function,
    optionFilterProp: String,
    optionLabelProp: String,
    options: Array,
    defaultActiveFirstOption: {
      type: Boolean,
      default: void 0
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    listHeight: Number,
    listItemHeight: Number,
    menuItemSelectedIcon: PropTypes.any,
    mode: String,
    labelInValue: {
      type: Boolean,
      default: void 0
    },
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    onChange: Function,
    children: Array
  });
}
function isRawValue(value) {
  return !value || _typeof(value) !== "object";
}
var Select$1 = defineComponent({
  name: "Select",
  inheritAttrs: false,
  props: initDefaultProps(selectProps$1(), {
    prefixCls: "vc-select",
    autoClearSearchValue: true,
    listHeight: 200,
    listItemHeight: 20,
    dropdownMatchSelectWidth: true
  }),
  setup: function setup10(props2, _ref) {
    var expose = _ref.expose, attrs = _ref.attrs, slots = _ref.slots;
    var mergedId = useId(toRef(props2, "id"));
    var multiple = computed(function() {
      return isMultiple(props2.mode);
    });
    var childrenAsData = computed(function() {
      return !!(!props2.options && props2.children);
    });
    var mergedFilterOption = computed(function() {
      if (props2.filterOption === void 0 && props2.mode === "combobox") {
        return false;
      }
      return props2.filterOption;
    });
    var mergedFieldNames = computed(function() {
      return fillFieldNames(props2.fieldNames, childrenAsData.value);
    });
    var _useMergedState = useMergedState("", {
      value: computed(function() {
        return props2.searchValue !== void 0 ? props2.searchValue : props2.inputValue;
      }),
      postState: function postState(search) {
        return search || "";
      }
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedSearchValue = _useMergedState2[0], setSearchValue = _useMergedState2[1];
    var parsedOptions = useOptions(toRef(props2, "options"), toRef(props2, "children"), mergedFieldNames);
    var valueOptions = parsedOptions.valueOptions, labelOptions = parsedOptions.labelOptions, mergedOptions = parsedOptions.options;
    var convert2LabelValues = function convert2LabelValues2(draftValues) {
      var valueList = toArray(draftValues);
      return valueList.map(function(val) {
        var _a, _b;
        var rawValue;
        var rawLabel;
        var rawKey;
        var rawDisabled;
        if (isRawValue(val)) {
          rawValue = val;
        } else {
          rawKey = val.key;
          rawLabel = val.label;
          rawValue = (_a = val.value) !== null && _a !== void 0 ? _a : rawKey;
        }
        var option = valueOptions.value.get(rawValue);
        if (option) {
          if (rawLabel === void 0)
            rawLabel = option === null || option === void 0 ? void 0 : option[props2.optionLabelProp || mergedFieldNames.value.label];
          if (rawKey === void 0)
            rawKey = (_b = option === null || option === void 0 ? void 0 : option.key) !== null && _b !== void 0 ? _b : rawValue;
          rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        }
        return {
          label: rawLabel,
          value: rawValue,
          key: rawKey,
          disabled: rawDisabled,
          option
        };
      });
    };
    var _useMergedState3 = useMergedState(props2.defaultValue, {
      value: toRef(props2, "value")
    }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), internalValue = _useMergedState4[0], setInternalValue = _useMergedState4[1];
    var rawLabeledValues = computed(function() {
      var _a;
      var values = convert2LabelValues(internalValue.value);
      if (props2.mode === "combobox" && !((_a = values[0]) === null || _a === void 0 ? void 0 : _a.value)) {
        return [];
      }
      return values;
    });
    var _useCache = useCache(rawLabeledValues, valueOptions), _useCache2 = _slicedToArray(_useCache, 2), mergedValues = _useCache2[0], getMixedOption = _useCache2[1];
    var displayValues = computed(function() {
      if (!props2.mode && mergedValues.value.length === 1) {
        var firstValue = mergedValues.value[0];
        if (firstValue.value === null && (firstValue.label === null || firstValue.label === void 0)) {
          return [];
        }
      }
      return mergedValues.value.map(function(item) {
        var _a;
        return _extends(_extends({}, item), {
          label: (_a = typeof item.label === "function" ? item.label() : item.label) !== null && _a !== void 0 ? _a : item.value
        });
      });
    });
    var rawValues = computed(function() {
      return new Set(mergedValues.value.map(function(val) {
        return val.value;
      }));
    });
    watchEffect(function() {
      var _a;
      if (props2.mode === "combobox") {
        var strValue = (_a = mergedValues.value[0]) === null || _a === void 0 ? void 0 : _a.value;
        if (strValue !== void 0 && strValue !== null) {
          setSearchValue(String(strValue));
        }
      }
    }, {
      flush: "post"
    });
    var createTagOption = function createTagOption2(val, label) {
      var _ref2;
      var mergedLabel = label !== null && label !== void 0 ? label : val;
      return _ref2 = {}, _defineProperty$2(_ref2, mergedFieldNames.value.value, val), _defineProperty$2(_ref2, mergedFieldNames.value.label, mergedLabel), _ref2;
    };
    var filledTagOptions = shallowRef();
    watchEffect(function() {
      if (props2.mode !== "tags") {
        filledTagOptions.value = mergedOptions.value;
        return;
      }
      var cloneOptions = mergedOptions.value.slice();
      var existOptions = function existOptions2(val) {
        return valueOptions.value.has(val);
      };
      _toConsumableArray(mergedValues.value).sort(function(a, b) {
        return a.value < b.value ? -1 : 1;
      }).forEach(function(item) {
        var val = item.value;
        if (!existOptions(val)) {
          cloneOptions.push(createTagOption(val, item.label));
        }
      });
      filledTagOptions.value = cloneOptions;
    });
    var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, toRef(props2, "optionFilterProp"));
    var filledSearchOptions = computed(function() {
      if (props2.mode !== "tags" || !mergedSearchValue.value || filteredOptions.value.some(function(item) {
        return item[props2.optionFilterProp || "value"] === mergedSearchValue.value;
      })) {
        return filteredOptions.value;
      }
      return [createTagOption(mergedSearchValue.value)].concat(_toConsumableArray(filteredOptions.value));
    });
    var orderedFilteredOptions = computed(function() {
      if (!props2.filterSort) {
        return filledSearchOptions.value;
      }
      return _toConsumableArray(filledSearchOptions.value).sort(function(a, b) {
        return props2.filterSort(a, b);
      });
    });
    var displayOptions = computed(function() {
      return flattenOptions(orderedFilteredOptions.value, {
        fieldNames: mergedFieldNames.value,
        childrenAsData: childrenAsData.value
      });
    });
    var triggerChange = function triggerChange2(values) {
      var labeledValues = convert2LabelValues(values);
      setInternalValue(labeledValues);
      if (props2.onChange && (labeledValues.length !== mergedValues.value.length || labeledValues.some(function(newVal, index) {
        var _a;
        return ((_a = mergedValues.value[index]) === null || _a === void 0 ? void 0 : _a.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
      }))) {
        var returnValues = props2.labelInValue ? labeledValues.map(function(v) {
          return _extends(_extends({}, v), {
            originLabel: v.label,
            label: typeof v.label === "function" ? v.label() : v.label
          });
        }) : labeledValues.map(function(v) {
          return v.value;
        });
        var returnOptions = labeledValues.map(function(v) {
          return injectPropsWithOption(getMixedOption(v.value));
        });
        props2.onChange(multiple.value ? returnValues : returnValues[0], multiple.value ? returnOptions : returnOptions[0]);
      }
    };
    var _useState = useState(null), _useState2 = _slicedToArray(_useState, 2), activeValue = _useState2[0], setActiveValue = _useState2[1];
    var _useState3 = useState(0), _useState4 = _slicedToArray(_useState3, 2), accessibilityIndex = _useState4[0], setAccessibilityIndex = _useState4[1];
    var mergedDefaultActiveFirstOption = computed(function() {
      return props2.defaultActiveFirstOption !== void 0 ? props2.defaultActiveFirstOption : props2.mode !== "combobox";
    });
    var onActiveValue = function onActiveValue2(active, index) {
      var _ref3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref3$source = _ref3.source, source = _ref3$source === void 0 ? "keyboard" : _ref3$source;
      setAccessibilityIndex(index);
      if (props2.backfill && props2.mode === "combobox" && active !== null && source === "keyboard") {
        setActiveValue(String(active));
      }
    };
    var triggerSelect = function triggerSelect2(val, selected) {
      var getSelectEnt = function getSelectEnt2() {
        var _a;
        var option2 = getMixedOption(val);
        var originLabel = option2 === null || option2 === void 0 ? void 0 : option2[mergedFieldNames.value.label];
        return [props2.labelInValue ? {
          label: typeof originLabel === "function" ? originLabel() : originLabel,
          originLabel,
          value: val,
          key: (_a = option2 === null || option2 === void 0 ? void 0 : option2.key) !== null && _a !== void 0 ? _a : val
        } : val, injectPropsWithOption(option2)];
      };
      if (selected && props2.onSelect) {
        var _getSelectEnt = getSelectEnt(), _getSelectEnt2 = _slicedToArray(_getSelectEnt, 2), wrappedValue = _getSelectEnt2[0], option = _getSelectEnt2[1];
        props2.onSelect(wrappedValue, option);
      } else if (!selected && props2.onDeselect) {
        var _getSelectEnt3 = getSelectEnt(), _getSelectEnt4 = _slicedToArray(_getSelectEnt3, 2), _wrappedValue = _getSelectEnt4[0], _option = _getSelectEnt4[1];
        props2.onDeselect(_wrappedValue, _option);
      }
    };
    var onInternalSelect = function onInternalSelect2(val, info) {
      var cloneValues;
      var mergedSelect = multiple.value ? info.selected : true;
      if (mergedSelect) {
        cloneValues = multiple.value ? [].concat(_toConsumableArray(mergedValues.value), [val]) : [val];
      } else {
        cloneValues = mergedValues.value.filter(function(v) {
          return v.value !== val;
        });
      }
      triggerChange(cloneValues);
      triggerSelect(val, mergedSelect);
      if (props2.mode === "combobox") {
        setActiveValue("");
      } else if (!multiple.value || props2.autoClearSearchValue) {
        setSearchValue("");
        setActiveValue("");
      }
    };
    var onDisplayValuesChange = function onDisplayValuesChange2(nextValues, info) {
      triggerChange(nextValues);
      if (info.type === "remove" || info.type === "clear") {
        info.values.forEach(function(item) {
          triggerSelect(item.value, false);
        });
      }
    };
    var onInternalSearch = function onInternalSearch2(searchText, info) {
      var _a;
      setSearchValue(searchText);
      setActiveValue(null);
      if (info.source === "submit") {
        var formatted = (searchText || "").trim();
        if (formatted) {
          var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues.value), [formatted])));
          triggerChange(newRawValues);
          triggerSelect(formatted, true);
          setSearchValue("");
        }
        return;
      }
      if (info.source !== "blur") {
        if (props2.mode === "combobox") {
          triggerChange(searchText);
        }
        (_a = props2.onSearch) === null || _a === void 0 ? void 0 : _a.call(props2, searchText);
      }
    };
    var onInternalSearchSplit = function onInternalSearchSplit2(words) {
      var patchValues = words;
      if (props2.mode !== "tags") {
        patchValues = words.map(function(word) {
          var opt = labelOptions.value.get(word);
          return opt === null || opt === void 0 ? void 0 : opt.value;
        }).filter(function(val) {
          return val !== void 0;
        });
      }
      var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues.value), _toConsumableArray(patchValues))));
      triggerChange(newRawValues);
      newRawValues.forEach(function(newRawValue) {
        triggerSelect(newRawValue, true);
      });
    };
    var realVirtual = computed(function() {
      return props2.virtual !== false && props2.dropdownMatchSelectWidth !== false;
    });
    useProvideSelectProps(toReactive(_extends(_extends({}, parsedOptions), {
      flattenOptions: displayOptions,
      onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: toRef(props2, "menuItemSelectedIcon"),
      rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      listHeight: toRef(props2, "listHeight"),
      listItemHeight: toRef(props2, "listItemHeight"),
      childrenAsData
    })));
    var selectRef = ref();
    expose({
      focus: function focus() {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: function blur() {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      },
      scrollTo: function scrollTo(arg) {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg);
      }
    });
    var pickProps = computed(function() {
      return omit(props2, [
        "id",
        "mode",
        "prefixCls",
        "backfill",
        "fieldNames",
        "inputValue",
        "searchValue",
        "onSearch",
        "autoClearSearchValue",
        "onSelect",
        "onDeselect",
        "dropdownMatchSelectWidth",
        "filterOption",
        "filterSort",
        "optionFilterProp",
        "optionLabelProp",
        "options",
        "children",
        "defaultActiveFirstOption",
        "menuItemSelectedIcon",
        "virtual",
        "listHeight",
        "listItemHeight",
        "value",
        "defaultValue",
        "labelInValue",
        "onChange"
      ]);
    });
    return function() {
      return createVNode(BaseSelect, _objectSpread2(_objectSpread2(_objectSpread2({}, pickProps.value), attrs), {}, {
        "id": mergedId,
        "prefixCls": props2.prefixCls,
        "ref": selectRef,
        "omitDomProps": OMIT_DOM_PROPS,
        "mode": props2.mode,
        "displayValues": displayValues.value,
        "onDisplayValuesChange": onDisplayValuesChange,
        "searchValue": mergedSearchValue.value,
        "onSearch": onInternalSearch,
        "onSearchSplit": onInternalSearchSplit,
        "dropdownMatchSelectWidth": props2.dropdownMatchSelectWidth,
        "OptionList": OptionList$1,
        "emptyOptions": !displayOptions.value.length,
        "activeValue": activeValue.value,
        "activeDescendantId": "".concat(mergedId, "_list_").concat(accessibilityIndex.value)
      }), slots);
    };
  }
});
var Option = function Option2() {
  return null;
};
Option.isSelectOption = true;
Option.displayName = "ASelectOption";
var Option$1 = Option;
var OptGroup = function OptGroup2() {
  return null;
};
OptGroup.isSelectOptGroup = true;
OptGroup.displayName = "ASelectOptGroup";
var OptGroup$1 = OptGroup;
var DownOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
var DownOutlinedSvg = DownOutlined$2;
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
var DownOutlined = function DownOutlined2(props2, context) {
  var p = _objectSpread$1({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": DownOutlinedSvg
  }), null);
};
DownOutlined.displayName = "DownOutlined";
DownOutlined.inheritAttrs = false;
var DownOutlined$1 = DownOutlined;
var CheckOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
var CheckOutlinedSvg = CheckOutlined$2;
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
var CheckOutlined = function CheckOutlined2(props2, context) {
  var p = _objectSpread({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": CheckOutlinedSvg
  }), null);
};
CheckOutlined.displayName = "CheckOutlined";
CheckOutlined.inheritAttrs = false;
var CheckOutlined$1 = CheckOutlined;
function getIcons(props2) {
  var slots = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var loading = props2.loading, multiple = props2.multiple, prefixCls = props2.prefixCls;
  var suffixIcon = props2.suffixIcon || slots.suffixIcon && slots.suffixIcon();
  var clearIcon = props2.clearIcon || slots.clearIcon && slots.clearIcon();
  var menuItemSelectedIcon = props2.menuItemSelectedIcon || slots.menuItemSelectedIcon && slots.menuItemSelectedIcon();
  var removeIcon = props2.removeIcon || slots.removeIcon && slots.removeIcon();
  var mergedClearIcon = clearIcon;
  if (!clearIcon) {
    mergedClearIcon = createVNode(CloseCircleFilled, null, null);
  }
  var mergedSuffixIcon = null;
  if (suffixIcon !== void 0) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = createVNode(LoadingOutlined, {
      "spin": true
    }, null);
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");
    mergedSuffixIcon = function mergedSuffixIcon2(_ref) {
      var open2 = _ref.open, showSearch = _ref.showSearch;
      if (open2 && showSearch) {
        return createVNode(SearchOutlined, {
          "class": iconCls
        }, null);
      }
      return createVNode(DownOutlined$1, {
        "class": iconCls
      }, null);
    };
  }
  var mergedItemIcon = null;
  if (menuItemSelectedIcon !== void 0) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = createVNode(CheckOutlined$1, null, null);
  } else {
    mergedItemIcon = null;
  }
  var mergedRemoveIcon = null;
  if (removeIcon !== void 0) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = createVNode(CloseOutlined, null, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
var selectProps = function selectProps2() {
  return _extends(_extends({}, omit(selectProps$1(), ["inputIcon", "mode", "getInputElement", "getRawInputElement", "backfill"])), {
    value: {
      type: [Array, Object, String, Number]
    },
    defaultValue: {
      type: [Array, Object, String, Number]
    },
    notFoundContent: PropTypes.any,
    suffixIcon: PropTypes.any,
    itemIcon: PropTypes.any,
    size: String,
    mode: String,
    bordered: {
      type: Boolean,
      default: true
    },
    transitionName: String,
    choiceTransitionName: {
      type: String,
      default: ""
    },
    "onUpdate:value": Function
  });
};
var SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";
var Select = defineComponent({
  name: "ASelect",
  Option: Option$1,
  OptGroup: OptGroup$1,
  inheritAttrs: false,
  props: initDefaultProps(selectProps(), {
    listHeight: 256,
    listItemHeight: 24
  }),
  SECRET_COMBOBOX_MODE_DO_NOT_USE,
  slots: [
    "notFoundContent",
    "suffixIcon",
    "itemIcon",
    "removeIcon",
    "clearIcon",
    "dropdownRender",
    "option",
    "placeholder",
    "tagRender",
    "maxTagPlaceholder",
    "optionLabel"
  ],
  setup: function setup11(props2, _ref) {
    var attrs = _ref.attrs, emit = _ref.emit, slots = _ref.slots, expose = _ref.expose;
    var selectRef = ref();
    var formItemContext = useInjectFormItemContext();
    var focus = function focus2() {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var blur = function blur2() {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    var scrollTo = function scrollTo2(arg) {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg);
    };
    var mode = computed(function() {
      var mode2 = props2.mode;
      if (mode2 === "combobox") {
        return void 0;
      }
      if (mode2 === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return "combobox";
      }
      return mode2;
    });
    var _useConfigInject = useConfigInject("select", props2), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, configProvider = _useConfigInject.configProvider, size = _useConfigInject.size, getPrefixCls = _useConfigInject.getPrefixCls;
    var rootPrefixCls = computed(function() {
      return getPrefixCls();
    });
    var transitionName = computed(function() {
      return getTransitionName(rootPrefixCls.value, "slide-up", props2.transitionName);
    });
    var mergedClassName = computed(function() {
      var _classNames;
      return classNames((_classNames = {}, _defineProperty$2(_classNames, "".concat(prefixCls.value, "-lg"), size.value === "large"), _defineProperty$2(_classNames, "".concat(prefixCls.value, "-sm"), size.value === "small"), _defineProperty$2(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _defineProperty$2(_classNames, "".concat(prefixCls.value, "-borderless"), !props2.bordered), _classNames));
    });
    var triggerChange = function triggerChange2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      emit("update:value", args[0]);
      emit.apply(void 0, ["change"].concat(args));
      formItemContext.onFieldChange();
    };
    var handleBlur = function handleBlur2(e) {
      emit("blur", e);
      formItemContext.onFieldBlur();
    };
    expose({
      blur,
      focus,
      scrollTo
    });
    var isMultiple2 = computed(function() {
      return mode.value === "multiple" || mode.value === "tags";
    });
    return function() {
      var _a, _b;
      var notFoundContent = props2.notFoundContent, _props$listHeight = props2.listHeight, listHeight = _props$listHeight === void 0 ? 256 : _props$listHeight, _props$listItemHeight = props2.listItemHeight, listItemHeight = _props$listItemHeight === void 0 ? 24 : _props$listItemHeight, getPopupContainer = props2.getPopupContainer, dropdownClassName = props2.dropdownClassName, virtual = props2.virtual, dropdownMatchSelectWidth = props2.dropdownMatchSelectWidth, _props$id = props2.id, id = _props$id === void 0 ? formItemContext.id.value : _props$id, _props$placeholder = props2.placeholder, placeholder = _props$placeholder === void 0 ? (_a = slots.placeholder) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$placeholder;
      var renderEmpty = configProvider.renderEmpty, getContextPopupContainer = configProvider.getPopupContainer;
      var mergedNotFound;
      if (notFoundContent !== void 0) {
        mergedNotFound = notFoundContent;
      } else if (slots.notFoundContent) {
        mergedNotFound = slots.notFoundContent();
      } else if (mode.value === "combobox") {
        mergedNotFound = null;
      } else {
        mergedNotFound = renderEmpty("Select");
      }
      var _getIcons = getIcons(_extends(_extends({}, props2), {
        multiple: isMultiple2.value,
        prefixCls: prefixCls.value
      }), slots), suffixIcon = _getIcons.suffixIcon, itemIcon = _getIcons.itemIcon, removeIcon = _getIcons.removeIcon, clearIcon = _getIcons.clearIcon;
      var selectProps3 = omit(props2, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered"]);
      var rcSelectRtlDropDownClassName = classNames(dropdownClassName, _defineProperty$2({}, "".concat(prefixCls.value, "-dropdown-").concat(direction.value), direction.value === "rtl"));
      return createVNode(Select$1, _objectSpread2(_objectSpread2(_objectSpread2({
        "ref": selectRef,
        "virtual": virtual,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth
      }, selectProps3), attrs), {}, {
        "placeholder": placeholder,
        "listHeight": listHeight,
        "listItemHeight": listItemHeight,
        "mode": mode.value,
        "prefixCls": prefixCls.value,
        "direction": direction.value,
        "inputIcon": suffixIcon,
        "menuItemSelectedIcon": itemIcon,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "notFoundContent": mergedNotFound,
        "class": [mergedClassName.value, attrs.class],
        "getPopupContainer": getPopupContainer || getContextPopupContainer,
        "dropdownClassName": rcSelectRtlDropDownClassName,
        "onChange": triggerChange,
        "onBlur": handleBlur,
        "id": id,
        "dropdownRender": selectProps3.dropdownRender || slots.dropdownRender,
        "transitionName": transitionName.value,
        "children": (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots),
        "tagRender": props2.tagRender || slots.tagRender,
        "optionLabelRender": slots.optionLabel,
        "maxTagPlaceholder": props2.maxTagPlaceholder || slots.maxTagPlaceholder
      }), {
        option: slots.option
      });
    };
  }
});
Select.install = function(app) {
  app.component(Select.name, Select);
  app.component(Select.Option.displayName, Select.Option);
  app.component(Select.OptGroup.displayName, Select.OptGroup);
  return app;
};
var SelectOption = Select.Option;
Select.OptGroup;
var __unplugin_components_4 = Select;
export { CheckOutlined$1 as C, DownOutlined$1 as D, List$1 as L, SelectOption as S, __unplugin_components_4 as _, selectProps as s, useMemo as u };
