import { M as MdiPlus } from "./plus-e8140861.mjs";
import { c8 as tuple, aH as PropTypes, bf as devWarning, d as defineComponent, e as computed, aC as _extends, g as createVNode, F as Fragment, cr as presetPrimaryColors, r as ref, ci as onUpdated, bj as initDefaultProps, b0 as _slicedToArray, aK as _objectSpread2, aJ as _defineProperty$5, aE as useConfigInject, bi as CloseCircleFilled, bc as CloseOutlined, ca as CheckCircleFilled, b9 as withInstall, bd as AntdIcon, cs as keys, ct as isArrayLike, cu as isArray, cv as baseIteratee, s as onMounted, a_ as onBeforeUnmount, aW as _toConsumableArray, cw as regenerator, aN as _typeof, aO as getTransitionProps, aP as Transition, B as withDirectives, aq as vShow, X as __unplugin_components_1$2, a6 as watchEffect, cx as collapseMotion, cy as getTransitionGroupProps, cz as TransitionGroup, aF as filterEmpty, cm as getCurrentInstance, ch as LoadingOutlined, c9 as isValidElement, be as useInjectFormItemContext, a4 as toRef, bg as useLocaleReceiver, cA as defaultLocale, aD as classNames, aM as flattenChildren, cB as JSONTemplateAdapter, u as useNuxtApp, cC as ExcelTemplateAdapter, o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, i as inject, a7 as createEventHook, H as Form, a9 as useProject, aw as useTemplateRefsList, U as UITypes, l as isVirtualCol, n as reactive, ag as fieldRequiredValidator, P as nextTick, I as message, j as createBlock, h as withCtx, v as toDisplayString, k as createCommentVNode, f as renderList, y as createTextVNode, S as resolveDynamicComponent, aj as mergeProps, z as withKeys, x as withModifiers, ah as normalizeProps, K as extractSdkResponseErrorMsg, bD as getUIDTIcon, C as pushScopeId, E as popScopeId, G as __unplugin_components_2, bB as NumericIcon, af as createPropsRestProxy, M as useI18n, cD as importUrlValidator, cE as importCsvUrlValidator, cF as importExcelUrlValidator, L as useVModel, bt as JSONIcon, cG as __unplugin_components_5 } from "./entry-d9bc2aad.mjs";
import { _ as __unplugin_components_3 } from "./delete-outline-29401aa6.mjs";
import { M as MetaInj, R as ReloadViewDataHookInj } from "./index-c79a04bb.mjs";
import { u as useTabs, T as TabType } from "./useTabs-12375259.mjs";
import { a as __unplugin_components_13$1 } from "./index-ad6f0376.mjs";
import { _ as __unplugin_components_9, C as Collapse } from "./CollapsePanel-35d20477.mjs";
import { _ as __unplugin_components_5$1 } from "./index-7b32c79f.mjs";
import "./index-44e9a035.mjs";
import { C as CheckOutlined, S as SelectOption, _ as __unplugin_components_4 } from "./index-0b813702.mjs";
import { C as Checkbox } from "./Checkbox-4ea45600.mjs";
import { C as Card } from "./Card-59408c6a.mjs";
import { I as Input } from "./Input-11f8ddea.mjs";
import { B as Button } from "./button-3d871114.mjs";
import { S as Spin } from "./index-c696756a.mjs";
import { _ as __nuxt_component_0$1 } from "./minus-circle-outline-f6556adb.mjs";
import { p as pickAttrs } from "./pickAttrs-fc04d54e.mjs";
import "./index-16f90ce9.mjs";
import { E as EyeOutlined } from "./Password-e454255a.mjs";
import { u as useRefs, _ as __unplugin_components_1$3, T as Tabs } from "./TabPane-b435e2ca.mjs";
import { u as useMergedState } from "./useState-7c8b49a7.mjs";
import "./index-fd7ac4f7.mjs";
import { _ as __unplugin_components_2$1 } from "./index-af437c52.mjs";
import { M as Modal } from "./Modal-3070863e.mjs";
var progressStatuses = tuple("normal", "exception", "active", "success");
var ProgressType = tuple("line", "circle", "dashboard");
var ProgressSize = tuple("default", "small");
var progressProps = function progressProps2() {
  return {
    prefixCls: String,
    type: PropTypes.oneOf(ProgressType),
    percent: Number,
    format: {
      type: Function
    },
    status: PropTypes.oneOf(progressStatuses),
    showInfo: {
      type: Boolean,
      default: void 0
    },
    strokeWidth: Number,
    strokeLinecap: String,
    strokeColor: {
      type: [String, Object],
      default: void 0
    },
    trailColor: String,
    width: Number,
    success: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    gapDegree: Number,
    gapPosition: String,
    size: PropTypes.oneOf(ProgressSize),
    steps: Number,
    successPercent: Number,
    title: String
  };
};
function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}
function getSuccessPercent(_ref) {
  var success = _ref.success, successPercent = _ref.successPercent;
  var percent = successPercent;
  if (success && "progress" in success) {
    devWarning(false, "Progress", "`success.progress` is deprecated. Please use `success.percent` instead.");
    percent = success.progress;
  }
  if (success && "percent" in success) {
    percent = success.percent;
  }
  return percent;
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
var lineProps = function lineProps2() {
  return _extends(_extends({}, progressProps()), {
    prefixCls: String,
    direction: {
      type: String
    }
  });
};
var sortGradient = function sortGradient2(gradients) {
  var tempArr = [];
  Object.keys(gradients).forEach(function(key) {
    var formattedKey = parseFloat(key.replace(/%/g, ""));
    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort(function(a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function(_ref) {
    var key = _ref.key, value = _ref.value;
    return "".concat(value, " ").concat(key, "%");
  }).join(", ");
};
var handleGradient = function handleGradient2(strokeColor, directionConfig) {
  var _strokeColor$from = strokeColor.from, from = _strokeColor$from === void 0 ? presetPrimaryColors.blue : _strokeColor$from, _strokeColor$to = strokeColor.to, to = _strokeColor$to === void 0 ? presetPrimaryColors.blue : _strokeColor$to, _strokeColor$directio = strokeColor.direction, direction = _strokeColor$directio === void 0 ? directionConfig === "rtl" ? "to left" : "to right" : _strokeColor$directio, rest = __rest$4(strokeColor, ["from", "to", "direction"]);
  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }
  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};
var Line = defineComponent({
  name: "Line",
  props: lineProps(),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;
    var backgroundProps = computed(function() {
      var strokeColor = props.strokeColor, direction = props.direction;
      return strokeColor && typeof strokeColor !== "string" ? handleGradient(strokeColor, direction) : {
        background: strokeColor
      };
    });
    var trailStyle = computed(function() {
      return props.trailColor ? {
        backgroundColor: props.trailColor
      } : void 0;
    });
    var percentStyle = computed(function() {
      var percent = props.percent, strokeWidth = props.strokeWidth, strokeLinecap = props.strokeLinecap, size = props.size;
      return _extends({
        width: "".concat(validProgress(percent), "%"),
        height: "".concat(strokeWidth || (size === "small" ? 6 : 8), "px"),
        borderRadius: strokeLinecap === "square" ? 0 : ""
      }, backgroundProps.value);
    });
    var successPercent = computed(function() {
      return getSuccessPercent(props);
    });
    var successPercentStyle = computed(function() {
      var strokeWidth = props.strokeWidth, size = props.size, strokeLinecap = props.strokeLinecap, success = props.success;
      return {
        width: "".concat(validProgress(successPercent.value), "%"),
        height: "".concat(strokeWidth || (size === "small" ? 6 : 8), "px"),
        borderRadius: strokeLinecap === "square" ? 0 : "",
        backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
      };
    });
    return function() {
      var _a;
      return createVNode(Fragment, null, [createVNode("div", {
        "class": "".concat(props.prefixCls, "-outer")
      }, [createVNode("div", {
        "class": "".concat(props.prefixCls, "-inner"),
        "style": trailStyle.value
      }, [createVNode("div", {
        "class": "".concat(props.prefixCls, "-bg"),
        "style": percentStyle.value
      }, null), successPercent.value !== void 0 ? createVNode("div", {
        "class": "".concat(props.prefixCls, "-success-bg"),
        "style": successPercentStyle.value
      }, null) : null])]), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var defaultProps = {
  percent: 0,
  prefixCls: "vc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1
};
var useTransitionDuration = function useTransitionDuration2(paths) {
  var prevTimeStamp = ref(null);
  onUpdated(function() {
    var now2 = Date.now();
    var updated = false;
    paths.value.forEach(function(val) {
      var _a;
      var path = ((_a = val) === null || _a === void 0 ? void 0 : _a.$el) || val;
      if (!path) {
        return;
      }
      updated = true;
      var pathStyle = path.style;
      pathStyle.transitionDuration = ".3s, .3s, .3s, .06s";
      if (prevTimeStamp.value && now2 - prevTimeStamp.value < 100) {
        pathStyle.transitionDuration = "0s, 0s";
      }
    });
    if (updated) {
      prevTimeStamp.value = Date.now();
    }
  });
  return paths;
};
var propTypes = {
  gapDegree: Number,
  gapPosition: {
    type: String
  },
  percent: {
    type: [Array, Number]
  },
  prefixCls: String,
  strokeColor: {
    type: [Object, String, Array]
  },
  strokeLinecap: {
    type: String
  },
  strokeWidth: Number,
  trailColor: String,
  trailWidth: Number,
  transition: String
};
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
var gradientSeed = 0;
function stripPercentToNumber(percent) {
  return +percent.replace("%", "");
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getPathStyles(offset, percent, strokeColor, strokeWidth) {
  var gapDegree = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  var gapPosition = arguments.length > 5 ? arguments[5] : void 0;
  var radius = 50 - strokeWidth / 2;
  var beginPositionX = 0;
  var beginPositionY = -radius;
  var endPositionX = 0;
  var endPositionY = -2 * radius;
  switch (gapPosition) {
    case "left":
      beginPositionX = -radius;
      beginPositionY = 0;
      endPositionX = 2 * radius;
      endPositionY = 0;
      break;
    case "right":
      beginPositionX = radius;
      beginPositionY = 0;
      endPositionX = -2 * radius;
      endPositionY = 0;
      break;
    case "bottom":
      beginPositionY = radius;
      endPositionY = 2 * radius;
      break;
  }
  var pathString = "M 50,50 m ".concat(beginPositionX, ",").concat(beginPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(endPositionX, ",").concat(-endPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(-endPositionX, ",").concat(endPositionY);
  var len = Math.PI * 2 * radius;
  var pathStyle = {
    stroke: strokeColor,
    strokeDasharray: "".concat(percent / 100 * (len - gapDegree), "px ").concat(len, "px"),
    strokeDashoffset: "-".concat(gapDegree / 2 + offset / 100 * (len - gapDegree), "px"),
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"
  };
  return {
    pathString,
    pathStyle
  };
}
var VCCircle = defineComponent({
  name: "VCCircle",
  props: initDefaultProps(propTypes, defaultProps),
  setup: function setup2(props) {
    gradientSeed += 1;
    var gradientId = ref(gradientSeed);
    var percentList = computed(function() {
      return toArray(props.percent);
    });
    var strokeColorList = computed(function() {
      return toArray(props.strokeColor);
    });
    var _useRefs = useRefs(), _useRefs2 = _slicedToArray(_useRefs, 2), setRef = _useRefs2[0], paths = _useRefs2[1];
    useTransitionDuration(paths);
    var getStokeList = function getStokeList2() {
      var prefixCls = props.prefixCls, strokeWidth = props.strokeWidth, strokeLinecap = props.strokeLinecap, gapDegree = props.gapDegree, gapPosition = props.gapPosition;
      var stackPtg = 0;
      return percentList.value.map(function(ptg, index2) {
        var color = strokeColorList.value[index2] || strokeColorList.value[strokeColorList.value.length - 1];
        var stroke = Object.prototype.toString.call(color) === "[object Object]" ? "url(#".concat(prefixCls, "-gradient-").concat(gradientId.value, ")") : "";
        var _getPathStyles = getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition), pathString = _getPathStyles.pathString, pathStyle = _getPathStyles.pathStyle;
        stackPtg += ptg;
        var pathProps = {
          key: index2,
          d: pathString,
          stroke,
          "stroke-linecap": strokeLinecap,
          "stroke-width": strokeWidth,
          opacity: ptg === 0 ? 0 : 1,
          "fill-opacity": "0",
          class: "".concat(prefixCls, "-circle-path"),
          style: pathStyle
        };
        return createVNode("path", _objectSpread2({
          "ref": setRef(index2)
        }, pathProps), null);
      });
    };
    return function() {
      var prefixCls = props.prefixCls, strokeWidth = props.strokeWidth, trailWidth = props.trailWidth, gapDegree = props.gapDegree, gapPosition = props.gapPosition, trailColor = props.trailColor, strokeLinecap = props.strokeLinecap;
      props.strokeColor;
      var restProps = __rest$3(props, ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "strokeColor"]);
      var _getPathStyles2 = getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition), pathString = _getPathStyles2.pathString, pathStyle = _getPathStyles2.pathStyle;
      delete restProps.percent;
      var gradient = strokeColorList.value.find(function(color) {
        return Object.prototype.toString.call(color) === "[object Object]";
      });
      var pathFirst = {
        d: pathString,
        stroke: trailColor,
        "stroke-linecap": strokeLinecap,
        "stroke-width": trailWidth || strokeWidth,
        "fill-opacity": "0",
        class: "".concat(prefixCls, "-circle-trail"),
        style: pathStyle
      };
      return createVNode("svg", _objectSpread2({
        "class": "".concat(prefixCls, "-circle"),
        "viewBox": "0 0 100 100"
      }, restProps), [gradient && createVNode("defs", null, [createVNode("linearGradient", {
        "id": "".concat(prefixCls, "-gradient-").concat(gradientId.value),
        "x1": "100%",
        "y1": "0%",
        "x2": "0%",
        "y2": "0%"
      }, [Object.keys(gradient).sort(function(a, b) {
        return stripPercentToNumber(a) - stripPercentToNumber(b);
      }).map(function(key, index2) {
        return createVNode("stop", {
          "key": index2,
          "offset": key,
          "stop-color": gradient[key]
        }, null);
      })])]), createVNode("path", pathFirst, null), getStokeList().reverse()]);
    };
  }
});
function getPercentage(_ref) {
  var percent = _ref.percent, success = _ref.success, successPercent = _ref.successPercent;
  var realSuccessPercent = validProgress(getSuccessPercent({
    success,
    successPercent
  }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
}
function getStrokeColor(_ref2) {
  var _ref2$success = _ref2.success, success = _ref2$success === void 0 ? {} : _ref2$success, strokeColor = _ref2.strokeColor;
  var successColor = success.strokeColor;
  return [successColor || presetPrimaryColors.green, strokeColor || null];
}
var Circle = defineComponent({
  name: "Circle",
  inheritAttrs: false,
  props: progressProps(),
  setup: function setup3(props, _ref3) {
    var slots = _ref3.slots;
    var gapDeg = computed(function() {
      if (props.gapDegree || props.gapDegree === 0) {
        return props.gapDegree;
      }
      if (props.type === "dashboard") {
        return 75;
      }
      return void 0;
    });
    var circleStyle = computed(function() {
      var circleSize = props.width || 120;
      return {
        width: typeof circleSize === "number" ? "".concat(circleSize, "px") : circleSize,
        height: typeof circleSize === "number" ? "".concat(circleSize, "px") : circleSize,
        fontSize: "".concat(circleSize * 0.15 + 6, "px")
      };
    });
    var circleWidth = computed(function() {
      return props.strokeWidth || 6;
    });
    var gapPos = computed(function() {
      return props.gapPosition || props.type === "dashboard" && "bottom" || "top";
    });
    var percent = computed(function() {
      return getPercentage(props);
    });
    var isGradient = computed(function() {
      return Object.prototype.toString.call(props.strokeColor) === "[object Object]";
    });
    var strokeColor = computed(function() {
      return getStrokeColor({
        success: props.success,
        strokeColor: props.strokeColor
      });
    });
    var wrapperClassName = computed(function() {
      var _ref4;
      return _ref4 = {}, _defineProperty$5(_ref4, "".concat(props.prefixCls, "-inner"), true), _defineProperty$5(_ref4, "".concat(props.prefixCls, "-circle-gradient"), isGradient.value), _ref4;
    });
    return function() {
      var _a;
      return createVNode("div", {
        "class": wrapperClassName.value,
        "style": circleStyle.value
      }, [createVNode(VCCircle, {
        "percent": percent.value,
        "strokeWidth": circleWidth.value,
        "trailWidth": circleWidth.value,
        "strokeColor": strokeColor.value,
        "strokeLinecap": props.strokeLinecap,
        "trailColor": props.trailColor,
        "prefixCls": props.prefixCls,
        "gapDegree": gapDeg.value,
        "gapPosition": gapPos.value
      }, null), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var stepsProps = function stepsProps2() {
  return _extends(_extends({}, progressProps()), {
    steps: Number,
    size: {
      type: String
    },
    strokeColor: String,
    trailColor: String
  });
};
var Steps = defineComponent({
  name: "Steps",
  props: stepsProps(),
  setup: function setup4(props, _ref) {
    var slots = _ref.slots;
    var current = computed(function() {
      return Math.round(props.steps * ((props.percent || 0) / 100));
    });
    var stepWidth = computed(function() {
      return props.size === "small" ? 2 : 14;
    });
    var styledSteps = computed(function() {
      var steps = props.steps, _props$strokeWidth = props.strokeWidth, strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth, strokeColor = props.strokeColor, trailColor = props.trailColor, prefixCls = props.prefixCls;
      var temp = [];
      for (var i = 0; i < steps; i += 1) {
        var _cls;
        var cls = (_cls = {}, _defineProperty$5(_cls, "".concat(prefixCls, "-steps-item"), true), _defineProperty$5(_cls, "".concat(prefixCls, "-steps-item-active"), i <= current.value - 1), _cls);
        temp.push(createVNode("div", {
          "key": i,
          "class": cls,
          "style": {
            backgroundColor: i <= current.value - 1 ? strokeColor : trailColor,
            width: "".concat(stepWidth.value, "px"),
            height: "".concat(strokeWidth, "px")
          }
        }, null));
      }
      return temp;
    });
    return function() {
      var _a;
      return createVNode("div", {
        "class": "".concat(props.prefixCls, "-steps-outer")
      }, [styledSteps.value, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var Progress$1 = defineComponent({
  name: "AProgress",
  props: initDefaultProps(progressProps(), {
    type: "line",
    percent: 0,
    showInfo: true,
    trailColor: null,
    size: "default",
    strokeLinecap: "round"
  }),
  slots: ["format"],
  setup: function setup5(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("progress", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    devWarning(props.successPercent == void 0, "Progress", "`successPercent` is deprecated. Please use `success.percent` instead.");
    var classString = computed(function() {
      var _ref2;
      var type = props.type, showInfo = props.showInfo, size = props.size;
      var pre = prefixCls.value;
      return _ref2 = {}, _defineProperty$5(_ref2, pre, true), _defineProperty$5(_ref2, "".concat(pre, "-").concat(type === "dashboard" && "circle" || type), true), _defineProperty$5(_ref2, "".concat(pre, "-show-info"), showInfo), _defineProperty$5(_ref2, "".concat(pre, "-").concat(size), size), _defineProperty$5(_ref2, "".concat(pre, "-rtl"), direction.value === "rtl"), _ref2;
    });
    var percentNumber = computed(function() {
      var _props$percent = props.percent, percent = _props$percent === void 0 ? 0 : _props$percent;
      var successPercent = getSuccessPercent(props);
      return parseInt(successPercent !== void 0 ? successPercent.toString() : percent.toString(), 10);
    });
    var progressStatus = computed(function() {
      var status = props.status;
      if (progressStatuses.indexOf(status) < 0 && percentNumber.value >= 100) {
        return "success";
      }
      return status || "normal";
    });
    var renderProcessInfo = function renderProcessInfo2() {
      var showInfo = props.showInfo, format = props.format, type = props.type, percent = props.percent, title = props.title;
      var successPercent = getSuccessPercent(props);
      if (!showInfo)
        return null;
      var text;
      var textFormatter = format || (slots === null || slots === void 0 ? void 0 : slots.format) || function(val) {
        return "".concat(val, "%");
      };
      var isLineType = type === "line";
      if (format || (slots === null || slots === void 0 ? void 0 : slots.format) || progressStatus.value !== "exception" && progressStatus.value !== "success") {
        text = textFormatter(validProgress(percent), validProgress(successPercent));
      } else if (progressStatus.value === "exception") {
        text = isLineType ? createVNode(CloseCircleFilled, null, null) : createVNode(CloseOutlined, null, null);
      } else if (progressStatus.value === "success") {
        text = isLineType ? createVNode(CheckCircleFilled, null, null) : createVNode(CheckOutlined, null, null);
      }
      return createVNode("span", {
        "class": "".concat(prefixCls.value, "-text"),
        "title": title === void 0 && typeof text === "string" ? text : void 0
      }, [text]);
    };
    return function() {
      var type = props.type, steps = props.steps, strokeColor = props.strokeColor, title = props.title;
      var progressInfo = renderProcessInfo();
      var progress;
      if (type === "line") {
        progress = steps ? createVNode(Steps, _objectSpread2(_objectSpread2({}, props), {}, {
          "strokeColor": typeof strokeColor === "string" ? strokeColor : void 0,
          "prefixCls": prefixCls.value,
          "steps": steps
        }), {
          default: function _default() {
            return [progressInfo];
          }
        }) : createVNode(Line, _objectSpread2(_objectSpread2({}, props), {}, {
          "prefixCls": prefixCls.value
        }), {
          default: function _default() {
            return [progressInfo];
          }
        });
      } else if (type === "circle" || type === "dashboard") {
        progress = createVNode(Circle, _objectSpread2(_objectSpread2({}, props), {}, {
          "prefixCls": prefixCls.value
        }), {
          default: function _default() {
            return [progressInfo];
          }
        });
      }
      var classNames2 = _extends(_extends({}, classString.value), _defineProperty$5({}, "".concat(prefixCls.value, "-status-").concat(progressStatus.value), true));
      return createVNode("div", {
        "class": classNames2,
        "title": title
      }, [progress]);
    };
  }
});
var Progress = withInstall(Progress$1);
var DeleteOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, "name": "delete", "theme": "outlined" };
var DeleteOutlinedSvg = DeleteOutlined$2;
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
var DeleteOutlined = function DeleteOutlined2(props, context) {
  var p = _objectSpread$4({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$4({}, p, {
    "icon": DeleteOutlinedSvg
  }), null);
};
DeleteOutlined.displayName = "DeleteOutlined";
DeleteOutlined.inheritAttrs = false;
var DeleteOutlined$1 = DeleteOutlined;
function getError(option, xhr) {
  var msg = "cannot ".concat(option.method, " ").concat(option.action, " ").concat(xhr.status, "'");
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}
function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
function upload(option) {
  var xhr = new XMLHttpRequest();
  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }
  var formData = new FormData();
  if (option.data) {
    Object.keys(option.data).forEach(function(key) {
      var value = option.data[key];
      if (Array.isArray(value)) {
        value.forEach(function(item) {
          formData.append("".concat(key, "[]"), item);
        });
        return;
      }
      formData.append(key, value);
    });
  }
  if (option.file instanceof Blob) {
    formData.append(option.filename, option.file, option.file.name);
  } else {
    formData.append(option.filename, option.file);
  }
  xhr.onerror = function error(e) {
    option.onError(e);
  };
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }
    return option.onSuccess(getBody(xhr), xhr);
  };
  xhr.open(option.method, option.action, true);
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  var headers = option.headers || {};
  if (headers["X-Requested-With"] !== null) {
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  }
  Object.keys(headers).forEach(function(h) {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  });
  xhr.send(formData);
  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}
var now = +new Date();
var index = 0;
function uid() {
  return "vc-upload-".concat(now, "-").concat(++index);
}
var attrAccept = function(file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
    var fileName = file.name || "";
    var mimeType = file.type || "";
    var baseMimeType = mimeType.replace(/\/.*$/, "");
    return acceptedFilesArray.some(function(type) {
      var validType = type.trim();
      if (/^\*(\/\*)?$/.test(type)) {
        return true;
      }
      if (validType.charAt(0) === ".") {
        var lowerFileName = fileName.toLowerCase();
        var lowerType = validType.toLowerCase();
        var affixList = [lowerType];
        if (lowerType === ".jpg" || lowerType === ".jpeg") {
          affixList = [".jpg", ".jpeg"];
        }
        return affixList.some(function(affix) {
          return lowerFileName.endsWith(affix);
        });
      }
      if (/\/\*$/.test(validType)) {
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      if (mimeType === validType) {
        return true;
      }
      if (/^\w+$/.test(validType)) {
        return true;
      }
      return false;
    });
  }
  return true;
};
function loopFiles(item, callback) {
  var dirReader = item.createReader();
  var fileList = [];
  function sequence() {
    dirReader.readEntries(function(entries) {
      var entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList);
      var isFinished = !entryList.length;
      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }
  sequence();
}
var traverseFileTree = function traverseFileTree2(files, callback, isAccepted) {
  var _traverseFileTree = function _traverseFileTree2(item, path) {
    item.path = path || "";
    if (item.isFile) {
      item.file(function(file) {
        if (isAccepted(file)) {
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            });
            file.webkitRelativePath = item.fullPath.replace(/^\//, "");
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }
          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, function(entries) {
        entries.forEach(function(entryItem) {
          _traverseFileTree2(entryItem, "".concat(path).concat(item.name, "/"));
        });
      });
    }
  };
  files.forEach(function(file) {
    _traverseFileTree(file.webkitGetAsEntry());
  });
};
var traverseFileTree$1 = traverseFileTree;
var uploadProps$1 = function uploadProps() {
  return {
    capture: [Boolean, String],
    multipart: {
      type: Boolean,
      default: void 0
    },
    name: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    componentTag: String,
    action: [String, Function],
    method: String,
    directory: {
      type: Boolean,
      default: void 0
    },
    data: [Object, Function],
    headers: Object,
    accept: String,
    multiple: {
      type: Boolean,
      default: void 0
    },
    onBatchStart: Function,
    onReject: Function,
    onStart: Function,
    onError: Function,
    onSuccess: Function,
    onProgress: Function,
    beforeUpload: Function,
    customRequest: Function,
    withCredentials: {
      type: Boolean,
      default: void 0
    },
    openFileDialogOnClick: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    id: String,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function
  };
};
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    var value = array[index2];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
var baseFor$1 = baseFor;
function baseForOwn(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index2-- : ++index2 < length) {
      if (iteratee(iterable[index2], index2, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
var baseEach$1 = baseEach;
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach$1(collection, function(value, key, collection2) {
    setter(accumulator, value, iteratee(value), collection2);
  });
  return accumulator;
}
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
    return func(collection, setter, baseIteratee(iteratee), accumulator);
  };
}
var partition = createAggregator(function(result, value, key) {
  result[key ? 0 : 1].push(value);
}, function() {
  return [[], []];
});
var partition$1 = partition;
var __awaiter$1 = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
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
var AjaxUpload = defineComponent({
  name: "AjaxUploader",
  inheritAttrs: false,
  props: uploadProps$1(),
  setup: function setup6(props, _ref) {
    var _this = this;
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var uid$1 = ref(uid());
    var reqs = {};
    var fileInput = ref();
    var isMounted = false;
    var processFile = function processFile2(file, fileList) {
      return __awaiter$1(_this, void 0, void 0, /* @__PURE__ */ regenerator.mark(function _callee() {
        var beforeUpload, transformedFile, action, mergedAction, data, mergedData, parsedData, parsedFile, mergedParsedFile;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                beforeUpload = props.beforeUpload;
                transformedFile = file;
                if (!beforeUpload) {
                  _context.next = 14;
                  break;
                }
                _context.prev = 3;
                _context.next = 6;
                return beforeUpload(file, fileList);
              case 6:
                transformedFile = _context.sent;
                _context.next = 12;
                break;
              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                transformedFile = false;
              case 12:
                if (!(transformedFile === false)) {
                  _context.next = 14;
                  break;
                }
                return _context.abrupt("return", {
                  origin: file,
                  parsedFile: null,
                  action: null,
                  data: null
                });
              case 14:
                action = props.action;
                if (!(typeof action === "function")) {
                  _context.next = 21;
                  break;
                }
                _context.next = 18;
                return action(file);
              case 18:
                mergedAction = _context.sent;
                _context.next = 22;
                break;
              case 21:
                mergedAction = action;
              case 22:
                data = props.data;
                if (!(typeof data === "function")) {
                  _context.next = 29;
                  break;
                }
                _context.next = 26;
                return data(file);
              case 26:
                mergedData = _context.sent;
                _context.next = 30;
                break;
              case 29:
                mergedData = data;
              case 30:
                parsedData = (_typeof(transformedFile) === "object" || typeof transformedFile === "string") && transformedFile ? transformedFile : file;
                if (parsedData instanceof File) {
                  parsedFile = parsedData;
                } else {
                  parsedFile = new File([parsedData], file.name, {
                    type: file.type
                  });
                }
                mergedParsedFile = parsedFile;
                mergedParsedFile.uid = file.uid;
                return _context.abrupt("return", {
                  origin: file,
                  data: mergedData,
                  parsedFile: mergedParsedFile,
                  action: mergedAction
                });
              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 9]]);
      }));
    };
    var post = function post2(_ref2) {
      var data = _ref2.data, origin = _ref2.origin, action = _ref2.action, parsedFile = _ref2.parsedFile;
      if (!isMounted) {
        return;
      }
      var onStart = props.onStart, customRequest = props.customRequest, name = props.name, headers = props.headers, withCredentials = props.withCredentials, method = props.method;
      var uid2 = origin.uid;
      var request = customRequest || upload;
      var requestOption = {
        action,
        filename: name,
        data,
        file: parsedFile,
        headers,
        withCredentials,
        method: method || "post",
        onProgress: function onProgress(e) {
          var onProgress2 = props.onProgress;
          onProgress2 === null || onProgress2 === void 0 ? void 0 : onProgress2(e, parsedFile);
        },
        onSuccess: function onSuccess(ret, xhr) {
          var onSuccess2 = props.onSuccess;
          onSuccess2 === null || onSuccess2 === void 0 ? void 0 : onSuccess2(ret, parsedFile, xhr);
          delete reqs[uid2];
        },
        onError: function onError(err, ret) {
          var onError2 = props.onError;
          onError2 === null || onError2 === void 0 ? void 0 : onError2(err, ret, parsedFile);
          delete reqs[uid2];
        }
      };
      onStart(origin);
      reqs[uid2] = request(requestOption);
    };
    var reset = function reset2() {
      uid$1.value = uid();
    };
    var abort = function abort2(file) {
      if (file) {
        var _uid = file.uid ? file.uid : file;
        if (reqs[_uid] && reqs[_uid].abort) {
          reqs[_uid].abort();
        }
        delete reqs[_uid];
      } else {
        Object.keys(reqs).forEach(function(uid2) {
          if (reqs[uid2] && reqs[uid2].abort) {
            reqs[uid2].abort();
          }
          delete reqs[uid2];
        });
      }
    };
    onMounted(function() {
      isMounted = true;
    });
    onBeforeUnmount(function() {
      isMounted = false;
      abort();
    });
    var uploadFiles = function uploadFiles2(files) {
      var originFiles = _toConsumableArray(files);
      var postFiles = originFiles.map(function(file) {
        file.uid = uid();
        return processFile(file, originFiles);
      });
      Promise.all(postFiles).then(function(fileList) {
        var onBatchStart = props.onBatchStart;
        onBatchStart === null || onBatchStart === void 0 ? void 0 : onBatchStart(fileList.map(function(_ref3) {
          var origin = _ref3.origin, parsedFile = _ref3.parsedFile;
          return {
            file: origin,
            parsedFile
          };
        }));
        fileList.filter(function(file) {
          return file.parsedFile !== null;
        }).forEach(function(file) {
          post(file);
        });
      });
    };
    var onChange = function onChange2(e) {
      var accept = props.accept, directory = props.directory;
      var files = e.target.files;
      var acceptedFiles = _toConsumableArray(files).filter(function(file) {
        return !directory || attrAccept(file, accept);
      });
      uploadFiles(acceptedFiles);
      reset();
    };
    var onClick = function onClick2(e) {
      var el = fileInput.value;
      if (!el) {
        return;
      }
      var onClick3 = props.onClick;
      el.click();
      if (onClick3) {
        onClick3(e);
      }
    };
    var onKeyDown = function onKeyDown2(e) {
      if (e.key === "Enter") {
        onClick(e);
      }
    };
    var onFileDrop = function onFileDrop2(e) {
      var multiple = props.multiple;
      e.preventDefault();
      if (e.type === "dragover") {
        return;
      }
      if (props.directory) {
        traverseFileTree$1(Array.prototype.slice.call(e.dataTransfer.items), uploadFiles, function(_file) {
          return attrAccept(_file, props.accept);
        });
      } else {
        var files = partition$1(Array.prototype.slice.call(e.dataTransfer.files), function(file) {
          return attrAccept(file, props.accept);
        });
        var successFiles = files[0];
        var errorFiles = files[1];
        if (multiple === false) {
          successFiles = successFiles.slice(0, 1);
        }
        uploadFiles(successFiles);
        if (errorFiles.length && props.onReject)
          props.onReject(errorFiles);
      }
    };
    expose({
      abort
    });
    return function() {
      var _cls;
      var _a;
      var Tag = props.componentTag, prefixCls = props.prefixCls, disabled = props.disabled, id = props.id, multiple = props.multiple, accept = props.accept, capture = props.capture, directory = props.directory, openFileDialogOnClick = props.openFileDialogOnClick, onMouseenter = props.onMouseenter, onMouseleave = props.onMouseleave, otherProps = __rest$2(props, ["componentTag", "prefixCls", "disabled", "id", "multiple", "accept", "capture", "directory", "openFileDialogOnClick", "onMouseenter", "onMouseleave"]);
      var cls = (_cls = {}, _defineProperty$5(_cls, prefixCls, true), _defineProperty$5(_cls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$5(_cls, attrs.class, !!attrs.class), _cls);
      var dirProps = directory ? {
        directory: "directory",
        webkitdirectory: "webkitdirectory"
      } : {};
      var events = disabled ? {} : {
        onClick: openFileDialogOnClick ? onClick : function() {
        },
        onKeydown: openFileDialogOnClick ? onKeyDown : function() {
        },
        onMouseenter,
        onMouseleave,
        onDrop: onFileDrop,
        onDragover: onFileDrop,
        tabindex: "0"
      };
      return createVNode(Tag, _objectSpread2(_objectSpread2({}, events), {}, {
        "class": cls,
        "role": "button",
        "style": attrs.style
      }), {
        default: function _default() {
          return [createVNode("input", _objectSpread2(_objectSpread2(_objectSpread2({}, pickAttrs(otherProps, {
            aria: true,
            data: true
          })), {}, {
            "id": id,
            "type": "file",
            "ref": fileInput,
            "onClick": function onClick2(e) {
              return e.stopPropagation();
            },
            "key": uid$1.value,
            "style": {
              display: "none"
            },
            "accept": accept
          }, dirProps), {}, {
            "multiple": multiple,
            "onChange": onChange
          }, capture != null ? {
            capture
          } : {}), null), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
function empty() {
}
var Upload$1 = defineComponent({
  name: "Upload",
  inheritAttrs: false,
  props: initDefaultProps(uploadProps$1(), {
    componentTag: "span",
    prefixCls: "rc-upload",
    data: {},
    headers: {},
    name: "file",
    multipart: false,
    onStart: empty,
    onError: empty,
    onSuccess: empty,
    multiple: false,
    beforeUpload: null,
    customRequest: null,
    withCredentials: false,
    openFileDialogOnClick: true
  }),
  setup: function setup7(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var uploader = ref();
    var abort = function abort2(file) {
      var _a;
      (_a = uploader.value) === null || _a === void 0 ? void 0 : _a.abort(file);
    };
    expose({
      abort
    });
    return function() {
      return createVNode(AjaxUpload, _objectSpread2(_objectSpread2(_objectSpread2({}, props), attrs), {}, {
        "ref": uploader
      }), slots);
    };
  }
});
var PaperClipOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, "name": "paper-clip", "theme": "outlined" };
var PaperClipOutlinedSvg = PaperClipOutlined$2;
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
var PaperClipOutlined = function PaperClipOutlined2(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$3({}, p, {
    "icon": PaperClipOutlinedSvg
  }), null);
};
PaperClipOutlined.displayName = "PaperClipOutlined";
PaperClipOutlined.inheritAttrs = false;
var PaperClipOutlined$1 = PaperClipOutlined;
var PictureTwoTone$2 = { "icon": function render(primaryColor, secondaryColor) {
  return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", "fill": primaryColor } }] };
}, "name": "picture", "theme": "twotone" };
var PictureTwoToneSvg = PictureTwoTone$2;
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
var PictureTwoTone = function PictureTwoTone2(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": PictureTwoToneSvg
  }), null);
};
PictureTwoTone.displayName = "PictureTwoTone";
PictureTwoTone.inheritAttrs = false;
var PictureTwoTone$1 = PictureTwoTone;
var FileTwoTone$2 = { "icon": function render2(primaryColor, secondaryColor) {
  return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", "fill": primaryColor } }] };
}, "name": "file", "theme": "twotone" };
var FileTwoToneSvg = FileTwoTone$2;
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
var FileTwoTone = function FileTwoTone2(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": FileTwoToneSvg
  }), null);
};
FileTwoTone.displayName = "FileTwoTone";
FileTwoTone.inheritAttrs = false;
var FileTwoTone$1 = FileTwoTone;
function uploadProps2() {
  return {
    capture: [Boolean, String],
    type: String,
    name: String,
    defaultFileList: Array,
    fileList: Array,
    action: [String, Function],
    directory: {
      type: Boolean,
      default: void 0
    },
    data: [Object, Function],
    method: String,
    headers: Object,
    showUploadList: {
      type: [Boolean, Object],
      default: void 0
    },
    multiple: {
      type: Boolean,
      default: void 0
    },
    accept: String,
    beforeUpload: Function,
    onChange: Function,
    "onUpdate:fileList": Function,
    onDrop: Function,
    listType: String,
    onPreview: Function,
    onDownload: Function,
    onReject: Function,
    onRemove: Function,
    remove: Function,
    supportServerRender: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    customRequest: Function,
    withCredentials: {
      type: Boolean,
      default: void 0
    },
    openFileDialogOnClick: {
      type: Boolean,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    id: String,
    previewFile: Function,
    transformFile: Function,
    iconRender: Function,
    isImageUrl: Function,
    progress: Object,
    itemRender: Function,
    maxCount: Number,
    height: [Number, String],
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function
  };
}
function uploadListProps() {
  return {
    listType: String,
    onPreview: Function,
    onDownload: Function,
    onRemove: Function,
    items: Array,
    progress: Object,
    prefixCls: String,
    showRemoveIcon: {
      type: Boolean,
      default: void 0
    },
    showDownloadIcon: {
      type: Boolean,
      default: void 0
    },
    showPreviewIcon: {
      type: Boolean,
      default: void 0
    },
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function,
    locale: {
      type: Object,
      default: void 0
    },
    previewFile: Function,
    iconRender: Function,
    isImageUrl: Function,
    appendAction: Function,
    appendActionVisible: {
      type: Boolean,
      default: void 0
    },
    itemRender: Function
  };
}
function file2Obj(file) {
  return _extends(_extends({}, file), {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file
  });
}
function updateFileList(file, fileList) {
  var nextFileList = _toConsumableArray(fileList);
  var fileIndex = nextFileList.findIndex(function(_ref) {
    var uid2 = _ref.uid;
    return uid2 === file.uid;
  });
  if (fileIndex === -1) {
    nextFileList.push(file);
  } else {
    nextFileList[fileIndex] = file;
  }
  return nextFileList;
}
function getFileItem(file, fileList) {
  var matchKey = file.uid !== void 0 ? "uid" : "name";
  return fileList.filter(function(item) {
    return item[matchKey] === file[matchKey];
  })[0];
}
function removeFileItem(file, fileList) {
  var matchKey = file.uid !== void 0 ? "uid" : "name";
  var removed = fileList.filter(function(item) {
    return item[matchKey] !== file[matchKey];
  });
  if (removed.length === fileList.length) {
    return null;
  }
  return removed;
}
var extname = function extname2() {
  var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var temp = url.split("/");
  var filename = temp[temp.length - 1];
  var filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [""])[0];
};
var isImageFileType = function isImageFileType2(type) {
  return type.indexOf("image/") === 0;
};
var isImageUrl = function isImageUrl2(file) {
  if (file.type && !file.thumbUrl) {
    return isImageFileType(file.type);
  }
  var url = file.thumbUrl || file.url || "";
  var extension = extname(url);
  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)) {
    return true;
  }
  if (/^data:/.test(url)) {
    return false;
  }
  if (extension) {
    return false;
  }
  return true;
};
var MEASURE_SIZE = 200;
function previewImage(file) {
  return new Promise(function(resolve) {
    if (!file.type || !isImageFileType(file.type)) {
      resolve("");
      return;
    }
    var canvas = document.createElement("canvas");
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = "position: fixed; left: 0; top: 0; width: ".concat(MEASURE_SIZE, "px; height: ").concat(MEASURE_SIZE, "px; z-index: 9999; display: none;");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function() {
      var width = img.width, height = img.height;
      var drawWidth = MEASURE_SIZE;
      var drawHeight = MEASURE_SIZE;
      var offsetX = 0;
      var offsetY = 0;
      if (width > height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      var dataURL = canvas.toDataURL();
      document.body.removeChild(canvas);
      resolve(dataURL);
    };
    img.src = window.URL.createObjectURL(file);
  });
}
var DownloadOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, "name": "download", "theme": "outlined" };
var DownloadOutlinedSvg = DownloadOutlined$2;
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
var DownloadOutlined = function DownloadOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": DownloadOutlinedSvg
  }), null);
};
DownloadOutlined.displayName = "DownloadOutlined";
DownloadOutlined.inheritAttrs = false;
var DownloadOutlined$1 = DownloadOutlined;
var listItemProps = function listItemProps2() {
  return {
    prefixCls: String,
    locale: {
      type: Object,
      default: void 0
    },
    file: Object,
    items: Array,
    listType: String,
    isImgUrl: Function,
    showRemoveIcon: {
      type: Boolean,
      default: void 0
    },
    showDownloadIcon: {
      type: Boolean,
      default: void 0
    },
    showPreviewIcon: {
      type: Boolean,
      default: void 0
    },
    removeIcon: Function,
    downloadIcon: Function,
    previewIcon: Function,
    iconRender: Function,
    actionIconRender: Function,
    itemRender: Function,
    onPreview: Function,
    onClose: Function,
    onDownload: Function,
    progress: Object
  };
};
var ListItem = defineComponent({
  name: "ListItem",
  inheritAttrs: false,
  props: listItemProps(),
  setup: function setup8(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    var showProgress = ref(false);
    var progressRafRef = ref();
    onMounted(function() {
      progressRafRef.value = setTimeout(function() {
        showProgress.value = true;
      }, 300);
    });
    onBeforeUnmount(function() {
      clearTimeout(progressRafRef.value);
    });
    var _useConfigInject = useConfigInject("upload", props), rootPrefixCls = _useConfigInject.rootPrefixCls;
    var transitionProps = computed(function() {
      return getTransitionProps("".concat(rootPrefixCls.value, "-fade"));
    });
    return function() {
      var _infoUploadingClass, _listContainerNameCla;
      var _a, _b;
      var prefixCls = props.prefixCls, locale = props.locale, listType = props.listType, file = props.file, items = props.items, progressProps3 = props.progress, _props$iconRender = props.iconRender, iconRender = _props$iconRender === void 0 ? slots.iconRender : _props$iconRender, _props$actionIconRend = props.actionIconRender, actionIconRender = _props$actionIconRend === void 0 ? slots.actionIconRender : _props$actionIconRend, _props$itemRender = props.itemRender, itemRender = _props$itemRender === void 0 ? slots.itemRender : _props$itemRender, isImgUrl = props.isImgUrl, showPreviewIcon = props.showPreviewIcon, showRemoveIcon = props.showRemoveIcon, showDownloadIcon = props.showDownloadIcon, _props$previewIcon = props.previewIcon, customPreviewIcon = _props$previewIcon === void 0 ? slots.previewIcon : _props$previewIcon, _props$removeIcon = props.removeIcon, customRemoveIcon = _props$removeIcon === void 0 ? slots.removeIcon : _props$removeIcon, _props$downloadIcon = props.downloadIcon, customDownloadIcon = _props$downloadIcon === void 0 ? slots.downloadIcon : _props$downloadIcon, onPreview = props.onPreview, onDownload = props.onDownload, onClose = props.onClose;
      var className = attrs.class, style = attrs.style;
      var spanClassName = "".concat(prefixCls, "-span");
      var iconNode = iconRender({
        file
      });
      var icon = createVNode("div", {
        "class": "".concat(prefixCls, "-text-icon")
      }, [iconNode]);
      if (listType === "picture" || listType === "picture-card") {
        if (file.status === "uploading" || !file.thumbUrl && !file.url) {
          var _uploadingClassName;
          var uploadingClassName = (_uploadingClassName = {}, _defineProperty$5(_uploadingClassName, "".concat(prefixCls, "-list-item-thumbnail"), true), _defineProperty$5(_uploadingClassName, "".concat(prefixCls, "-list-item-file"), file.status !== "uploading"), _uploadingClassName);
          icon = createVNode("div", {
            "class": uploadingClassName
          }, [iconNode]);
        } else {
          var _aClassName;
          var thumbnail = (isImgUrl === null || isImgUrl === void 0 ? void 0 : isImgUrl(file)) ? createVNode("img", {
            "src": file.thumbUrl || file.url,
            "alt": file.name,
            "class": "".concat(prefixCls, "-list-item-image")
          }, null) : iconNode;
          var aClassName = (_aClassName = {}, _defineProperty$5(_aClassName, "".concat(prefixCls, "-list-item-thumbnail"), true), _defineProperty$5(_aClassName, "".concat(prefixCls, "-list-item-file"), isImgUrl && !isImgUrl(file)), _aClassName);
          icon = createVNode("a", {
            "class": aClassName,
            "onClick": function onClick(e) {
              return onPreview(file, e);
            },
            "href": file.url || file.thumbUrl,
            "target": "_blank",
            "rel": "noopener noreferrer"
          }, [thumbnail]);
        }
      }
      var infoUploadingClass = (_infoUploadingClass = {}, _defineProperty$5(_infoUploadingClass, "".concat(prefixCls, "-list-item"), true), _defineProperty$5(_infoUploadingClass, "".concat(prefixCls, "-list-item-").concat(file.status), true), _defineProperty$5(_infoUploadingClass, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _infoUploadingClass);
      var linkProps = typeof file.linkProps === "string" ? JSON.parse(file.linkProps) : file.linkProps;
      var removeIcon = showRemoveIcon ? actionIconRender({
        customIcon: customRemoveIcon ? customRemoveIcon({
          file
        }) : createVNode(DeleteOutlined$1, null, null),
        callback: function callback() {
          return onClose(file);
        },
        prefixCls,
        title: locale.removeFile
      }) : null;
      var downloadIcon = showDownloadIcon && file.status === "done" ? actionIconRender({
        customIcon: customDownloadIcon ? customDownloadIcon({
          file
        }) : createVNode(DownloadOutlined$1, null, null),
        callback: function callback() {
          return onDownload(file);
        },
        prefixCls,
        title: locale.downloadFile
      }) : null;
      var downloadOrDelete = listType !== "picture-card" && createVNode("span", {
        "key": "download-delete",
        "class": ["".concat(prefixCls, "-list-item-card-actions"), {
          picture: listType === "picture"
        }]
      }, [downloadIcon, removeIcon]);
      var listItemNameClass = "".concat(prefixCls, "-list-item-name");
      var preview = file.url ? [createVNode("a", _objectSpread2(_objectSpread2({
        "key": "view",
        "target": "_blank",
        "rel": "noopener noreferrer",
        "class": listItemNameClass,
        "title": file.name
      }, linkProps), {}, {
        "href": file.url,
        "onClick": function onClick(e) {
          return onPreview(file, e);
        }
      }), [file.name]), downloadOrDelete] : [createVNode("span", {
        "key": "view",
        "class": listItemNameClass,
        "onClick": function onClick(e) {
          return onPreview(file, e);
        },
        "title": file.name
      }, [file.name]), downloadOrDelete];
      var previewStyle = {
        pointerEvents: "none",
        opacity: 0.5
      };
      var previewIcon = showPreviewIcon ? createVNode("a", {
        "href": file.url || file.thumbUrl,
        "target": "_blank",
        "rel": "noopener noreferrer",
        "style": file.url || file.thumbUrl ? void 0 : previewStyle,
        "onClick": function onClick(e) {
          return onPreview(file, e);
        },
        "title": locale.previewFile
      }, [customPreviewIcon ? customPreviewIcon({
        file
      }) : createVNode(EyeOutlined, null, null)]) : null;
      var actions = listType === "picture-card" && file.status !== "uploading" && createVNode("span", {
        "class": "".concat(prefixCls, "-list-item-actions")
      }, [previewIcon, file.status === "done" && downloadIcon, removeIcon]);
      var message2;
      if (file.response && typeof file.response === "string") {
        message2 = file.response;
      } else {
        message2 = ((_a = file.error) === null || _a === void 0 ? void 0 : _a.statusText) || ((_b = file.error) === null || _b === void 0 ? void 0 : _b.message) || locale.uploadError;
      }
      var iconAndPreview = createVNode("span", {
        "class": spanClassName
      }, [icon, preview]);
      var dom = createVNode("div", {
        "class": infoUploadingClass
      }, [createVNode("div", {
        "class": "".concat(prefixCls, "-list-item-info")
      }, [iconAndPreview]), actions, showProgress.value && createVNode(Transition, transitionProps.value, {
        default: function _default() {
          return [withDirectives(createVNode("div", {
            "class": "".concat(prefixCls, "-list-item-progress")
          }, ["percent" in file ? createVNode(Progress, _objectSpread2(_objectSpread2({}, progressProps3), {}, {
            "type": "line",
            "percent": file.percent
          }), null) : null]), [[vShow, file.status === "uploading"]])];
        }
      })]);
      var listContainerNameClass = (_listContainerNameCla = {}, _defineProperty$5(_listContainerNameCla, "".concat(prefixCls, "-list-").concat(listType, "-container"), true), _defineProperty$5(_listContainerNameCla, "".concat(className), !!className), _listContainerNameCla);
      var item = file.status === "error" ? createVNode(__unplugin_components_1$2, {
        "title": message2,
        "getPopupContainer": function getPopupContainer(node) {
          return node.parentNode;
        }
      }, {
        default: function _default() {
          return [dom];
        }
      }) : dom;
      return createVNode("div", {
        "class": listContainerNameClass,
        "style": style,
        "ref": ref
      }, [itemRender ? itemRender({
        originNode: item,
        file,
        fileList: items,
        actions: {
          download: onDownload.bind(null, file),
          preview: onPreview.bind(null, file),
          remove: onClose.bind(null, file)
        }
      }) : item]);
    };
  }
});
var HackSlot = function HackSlot2(_, _ref) {
  var slots = _ref.slots;
  var _a;
  return filterEmpty((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))[0];
};
var UploadList = defineComponent({
  name: "AUploadList",
  props: initDefaultProps(uploadListProps(), {
    listType: "text",
    progress: {
      strokeWidth: 2,
      showInfo: false
    },
    showRemoveIcon: true,
    showDownloadIcon: false,
    showPreviewIcon: true,
    previewFile: previewImage,
    isImageUrl,
    items: [],
    appendActionVisible: true
  }),
  setup: function setup9(props, _ref2) {
    var slots = _ref2.slots, expose = _ref2.expose;
    var motionAppear = ref(false);
    var instance = getCurrentInstance();
    onMounted(function() {
      motionAppear.value == true;
    });
    watchEffect(function() {
      if (props.listType !== "picture" && props.listType !== "picture-card") {
        return;
      }
      (props.items || []).forEach(function(file) {
        if (typeof document === "undefined" || typeof window === "undefined" || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== void 0) {
          return;
        }
        file.thumbUrl = "";
        if (props.previewFile) {
          props.previewFile(file.originFileObj).then(function(previewDataUrl) {
            file.thumbUrl = previewDataUrl || "";
            instance.update();
          });
        }
      });
    });
    var onInternalPreview = function onInternalPreview2(file, e) {
      if (!props.onPreview) {
        return;
      }
      e === null || e === void 0 ? void 0 : e.preventDefault();
      return props.onPreview(file);
    };
    var onInternalDownload = function onInternalDownload2(file) {
      if (typeof props.onDownload === "function") {
        props.onDownload(file);
      } else if (file.url) {
        window.open(file.url);
      }
    };
    var onInternalClose = function onInternalClose2(file) {
      var _a;
      (_a = props.onRemove) === null || _a === void 0 ? void 0 : _a.call(props, file);
    };
    var internalIconRender = function internalIconRender2(_ref3) {
      var file = _ref3.file;
      var iconRender = props.iconRender || slots.iconRender;
      if (iconRender) {
        return iconRender({
          file,
          listType: props.listType
        });
      }
      var isLoading = file.status === "uploading";
      var fileIcon = props.isImageUrl && props.isImageUrl(file) ? createVNode(PictureTwoTone$1, null, null) : createVNode(FileTwoTone$1, null, null);
      var icon = isLoading ? createVNode(LoadingOutlined, null, null) : createVNode(PaperClipOutlined$1, null, null);
      if (props.listType === "picture") {
        icon = isLoading ? createVNode(LoadingOutlined, null, null) : fileIcon;
      } else if (props.listType === "picture-card") {
        icon = isLoading ? props.locale.uploading : fileIcon;
      }
      return icon;
    };
    var actionIconRender = function actionIconRender2(opt) {
      var customIcon = opt.customIcon, callback = opt.callback, prefixCls2 = opt.prefixCls, title = opt.title;
      var btnProps = {
        type: "text",
        size: "small",
        title,
        onClick: function onClick() {
          callback();
        },
        class: "".concat(prefixCls2, "-list-item-card-actions-btn")
      };
      if (isValidElement(customIcon)) {
        return createVNode(Button, btnProps, {
          icon: function icon() {
            return customIcon;
          }
        });
      }
      return createVNode(Button, btnProps, {
        default: function _default() {
          return [createVNode("span", null, [customIcon])];
        }
      });
    };
    expose({
      handlePreview: onInternalPreview,
      handleDownload: onInternalDownload
    });
    var _useConfigInject = useConfigInject("upload", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var listClassNames = computed(function() {
      var _ref4;
      return _ref4 = {}, _defineProperty$5(_ref4, "".concat(prefixCls.value, "-list"), true), _defineProperty$5(_ref4, "".concat(prefixCls.value, "-list-").concat(props.listType), true), _defineProperty$5(_ref4, "".concat(prefixCls.value, "-list-rtl"), direction.value === "rtl"), _ref4;
    });
    var transitionGroupProps = computed(function() {
      return _extends(_extends(_extends({}, collapseMotion("".concat(prefixCls.value, "-").concat(props.listType === "picture-card" ? "animate-inline" : "animate"))), getTransitionGroupProps("".concat(prefixCls.value, "-").concat(props.listType === "picture-card" ? "animate-inline" : "animate"))), {
        class: listClassNames.value,
        appear: motionAppear.value
      });
    });
    return function() {
      var listType = props.listType, locale = props.locale, isImgUrl = props.isImageUrl, _props$items = props.items, items = _props$items === void 0 ? [] : _props$items, showPreviewIcon = props.showPreviewIcon, showRemoveIcon = props.showRemoveIcon, showDownloadIcon = props.showDownloadIcon, removeIcon = props.removeIcon, previewIcon = props.previewIcon, downloadIcon = props.downloadIcon, progress = props.progress, appendAction = props.appendAction, itemRender = props.itemRender, appendActionVisible = props.appendActionVisible;
      var appendActionDom = appendAction === null || appendAction === void 0 ? void 0 : appendAction();
      return createVNode(TransitionGroup, _objectSpread2(_objectSpread2({}, transitionGroupProps.value), {}, {
        "tag": "div"
      }), {
        default: function _default() {
          return [items.map(function(file) {
            var key = file.uid;
            return createVNode(ListItem, {
              "key": key,
              "locale": locale,
              "prefixCls": prefixCls.value,
              "file": file,
              "items": items,
              "progress": progress,
              "listType": listType,
              "isImgUrl": isImgUrl,
              "showPreviewIcon": showPreviewIcon,
              "showRemoveIcon": showRemoveIcon,
              "showDownloadIcon": showDownloadIcon,
              "onPreview": onInternalPreview,
              "onDownload": onInternalDownload,
              "onClose": onInternalClose,
              "removeIcon": removeIcon,
              "previewIcon": previewIcon,
              "downloadIcon": downloadIcon,
              "itemRender": itemRender
            }, _extends(_extends({}, slots), {
              iconRender: internalIconRender,
              actionIconRender
            }));
          }), appendAction ? withDirectives(createVNode(HackSlot, {
            "key": "__ant_upload_appendAction"
          }, {
            default: function _default2() {
              return appendActionDom;
            }
          }), [[vShow, !!appendActionVisible]]) : null];
        }
      });
    };
  }
});
var __awaiter = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
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
var LIST_IGNORE = "__LIST_IGNORE_".concat(Date.now(), "__");
var Upload = defineComponent({
  name: "AUpload",
  inheritAttrs: false,
  props: initDefaultProps(uploadProps2(), {
    type: "select",
    multiple: false,
    action: "",
    data: {},
    accept: "",
    showUploadList: true,
    listType: "text",
    disabled: false,
    supportServerRender: true
  }),
  setup: function setup10(props, _ref) {
    var _this = this;
    var slots = _ref.slots, attrs = _ref.attrs, expose = _ref.expose;
    var formItemContext = useInjectFormItemContext();
    var _useMergedState = useMergedState(props.defaultFileList || [], {
      value: toRef(props, "fileList"),
      postState: function postState(list) {
        var timestamp = Date.now();
        return (list !== null && list !== void 0 ? list : []).map(function(file, index2) {
          if (!file.uid && !Object.isFrozen(file)) {
            file.uid = "__AUTO__".concat(timestamp, "_").concat(index2, "__");
          }
          return file;
        });
      }
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedFileList = _useMergedState2[0], setMergedFileList = _useMergedState2[1];
    var dragState = ref("drop");
    var upload2 = ref();
    onMounted(function() {
      devWarning(props.fileList !== void 0 || attrs.value === void 0, "Upload", "`value` is not a valid prop, do you mean `fileList`?");
      devWarning(props.transformFile === void 0, "Upload", "`transformFile` is deprecated. Please use `beforeUpload` directly.");
      devWarning(props.remove === void 0, "Upload", "`remove` props is deprecated. Please use `remove` event.");
    });
    var onInternalChange = function onInternalChange2(file, changedFileList, event) {
      var _a, _b;
      var cloneList = _toConsumableArray(changedFileList);
      if (props.maxCount === 1) {
        cloneList = cloneList.slice(-1);
      } else if (props.maxCount) {
        cloneList = cloneList.slice(0, props.maxCount);
      }
      setMergedFileList(cloneList);
      var changeInfo = {
        file,
        fileList: cloneList
      };
      if (event) {
        changeInfo.event = event;
      }
      (_a = props["onUpdate:fileList"]) === null || _a === void 0 ? void 0 : _a.call(props, changeInfo.fileList);
      (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, changeInfo);
      formItemContext.onFieldChange();
    };
    var mergedBeforeUpload = function mergedBeforeUpload2(file, fileListArgs) {
      return __awaiter(_this, void 0, void 0, /* @__PURE__ */ regenerator.mark(function _callee() {
        var beforeUpload, transformFile, parsedFile, result;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                beforeUpload = props.beforeUpload, transformFile = props.transformFile;
                parsedFile = file;
                if (!beforeUpload) {
                  _context.next = 13;
                  break;
                }
                _context.next = 5;
                return beforeUpload(file, fileListArgs);
              case 5:
                result = _context.sent;
                if (!(result === false)) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return", false);
              case 8:
                delete file[LIST_IGNORE];
                if (!(result === LIST_IGNORE)) {
                  _context.next = 12;
                  break;
                }
                Object.defineProperty(file, LIST_IGNORE, {
                  value: true,
                  configurable: true
                });
                return _context.abrupt("return", false);
              case 12:
                if (_typeof(result) === "object" && result) {
                  parsedFile = result;
                }
              case 13:
                if (!transformFile) {
                  _context.next = 17;
                  break;
                }
                _context.next = 16;
                return transformFile(parsedFile);
              case 16:
                parsedFile = _context.sent;
              case 17:
                return _context.abrupt("return", parsedFile);
              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    };
    var onBatchStart = function onBatchStart2(batchFileInfoList) {
      var filteredFileInfoList = batchFileInfoList.filter(function(info) {
        return !info.file[LIST_IGNORE];
      });
      if (!filteredFileInfoList.length) {
        return;
      }
      var objectFileList = filteredFileInfoList.map(function(info) {
        return file2Obj(info.file);
      });
      var newFileList = _toConsumableArray(mergedFileList.value);
      objectFileList.forEach(function(fileObj) {
        newFileList = updateFileList(fileObj, newFileList);
      });
      objectFileList.forEach(function(fileObj, index2) {
        var triggerFileObj = fileObj;
        if (!filteredFileInfoList[index2].parsedFile) {
          var originFileObj = fileObj.originFileObj;
          var clone;
          try {
            clone = new File([originFileObj], originFileObj.name, {
              type: originFileObj.type
            });
          } catch (e) {
            clone = new Blob([originFileObj], {
              type: originFileObj.type
            });
            clone.name = originFileObj.name;
            clone.lastModifiedDate = new Date();
            clone.lastModified = new Date().getTime();
          }
          clone.uid = fileObj.uid;
          triggerFileObj = clone;
        } else {
          fileObj.status = "uploading";
        }
        onInternalChange(triggerFileObj, newFileList);
      });
    };
    var onSuccess = function onSuccess2(response, file, xhr) {
      try {
        if (typeof response === "string") {
          response = JSON.parse(response);
        }
      } catch (e) {
      }
      if (!getFileItem(file, mergedFileList.value)) {
        return;
      }
      var targetItem = file2Obj(file);
      targetItem.status = "done";
      targetItem.percent = 100;
      targetItem.response = response;
      targetItem.xhr = xhr;
      var nextFileList = updateFileList(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList);
    };
    var onProgress = function onProgress2(e, file) {
      if (!getFileItem(file, mergedFileList.value)) {
        return;
      }
      var targetItem = file2Obj(file);
      targetItem.status = "uploading";
      targetItem.percent = e.percent;
      var nextFileList = updateFileList(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList, e);
    };
    var onError = function onError2(error, response, file) {
      if (!getFileItem(file, mergedFileList.value)) {
        return;
      }
      var targetItem = file2Obj(file);
      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = "error";
      var nextFileList = updateFileList(targetItem, mergedFileList.value);
      onInternalChange(targetItem, nextFileList);
    };
    var handleRemove = function handleRemove2(file) {
      var currentFile;
      var mergedRemove = props.onRemove || props.remove;
      Promise.resolve(typeof mergedRemove === "function" ? mergedRemove(file) : mergedRemove).then(function(ret) {
        var _a, _b;
        if (ret === false) {
          return;
        }
        var removedFileList = removeFileItem(file, mergedFileList.value);
        if (removedFileList) {
          currentFile = _extends(_extends({}, file), {
            status: "removed"
          });
          (_a = mergedFileList.value) === null || _a === void 0 ? void 0 : _a.forEach(function(item) {
            var matchKey = currentFile.uid !== void 0 ? "uid" : "name";
            if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
              item.status = "removed";
            }
          });
          (_b = upload2.value) === null || _b === void 0 ? void 0 : _b.abort(currentFile);
          onInternalChange(currentFile, removedFileList);
        }
      });
    };
    var onFileDrop = function onFileDrop2(e) {
      var _a;
      dragState.value = e.type;
      if (e.type === "drop") {
        (_a = props.onDrop) === null || _a === void 0 ? void 0 : _a.call(props, e);
      }
    };
    expose({
      onBatchStart,
      onSuccess,
      onProgress,
      onError,
      fileList: mergedFileList,
      upload: upload2
    });
    var _useConfigInject = useConfigInject("upload", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    var _useLocaleReceiver = useLocaleReceiver("Upload", defaultLocale.Upload, computed(function() {
      return props.locale;
    })), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1), locale = _useLocaleReceiver2[0];
    var renderUploadList = function renderUploadList2(button, buttonVisible) {
      var removeIcon = props.removeIcon, previewIcon = props.previewIcon, downloadIcon = props.downloadIcon, previewFile = props.previewFile, onPreview = props.onPreview, onDownload = props.onDownload, disabled = props.disabled, isImageUrl3 = props.isImageUrl, progress = props.progress, itemRender = props.itemRender, iconRender = props.iconRender, showUploadList = props.showUploadList;
      var _ref2 = typeof showUploadList === "boolean" ? {} : showUploadList, showDownloadIcon = _ref2.showDownloadIcon, showPreviewIcon = _ref2.showPreviewIcon, showRemoveIcon = _ref2.showRemoveIcon;
      return showUploadList ? createVNode(UploadList, {
        "listType": props.listType,
        "items": mergedFileList.value,
        "previewFile": previewFile,
        "onPreview": onPreview,
        "onDownload": onDownload,
        "onRemove": handleRemove,
        "showRemoveIcon": !disabled && showRemoveIcon,
        "showPreviewIcon": showPreviewIcon,
        "showDownloadIcon": showDownloadIcon,
        "removeIcon": removeIcon,
        "previewIcon": previewIcon,
        "downloadIcon": downloadIcon,
        "iconRender": iconRender,
        "locale": locale.value,
        "isImageUrl": isImageUrl3,
        "progress": progress,
        "itemRender": itemRender,
        "appendActionVisible": buttonVisible,
        "appendAction": button
      }, _extends({}, slots)) : button === null || button === void 0 ? void 0 : button();
    };
    return function() {
      var _classNames2;
      var _a, _b, _c;
      var listType = props.listType, disabled = props.disabled, type = props.type;
      attrs.class;
      attrs.style;
      var transAttrs = __rest$1(attrs, ["class", "style"]);
      var rcUploadProps = _extends(_extends(_extends({
        onBatchStart,
        onError,
        onProgress,
        onSuccess
      }, transAttrs), props), {
        id: (_a = props.id) !== null && _a !== void 0 ? _a : formItemContext.id.value,
        prefixCls: prefixCls.value,
        beforeUpload: mergedBeforeUpload,
        onChange: void 0
      });
      delete rcUploadProps.remove;
      if (!slots.default || disabled) {
        delete rcUploadProps.id;
      }
      if (type === "drag") {
        var _classNames;
        var dragCls = classNames(prefixCls.value, (_classNames = {}, _defineProperty$5(_classNames, "".concat(prefixCls.value, "-drag"), true), _defineProperty$5(_classNames, "".concat(prefixCls.value, "-drag-uploading"), mergedFileList.value.some(function(file) {
          return file.status === "uploading";
        })), _defineProperty$5(_classNames, "".concat(prefixCls.value, "-drag-hover"), dragState.value === "dragover"), _defineProperty$5(_classNames, "".concat(prefixCls.value, "-disabled"), disabled), _defineProperty$5(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _classNames), attrs.class);
        return createVNode("span", null, [createVNode("div", {
          "class": dragCls,
          "onDrop": onFileDrop,
          "onDragover": onFileDrop,
          "onDragleave": onFileDrop,
          "style": attrs.style
        }, [createVNode(Upload$1, _objectSpread2(_objectSpread2({}, rcUploadProps), {}, {
          "ref": upload2,
          "class": "".concat(prefixCls.value, "-btn")
        }), _objectSpread2({
          default: function _default() {
            return [createVNode("div", {
              "class": "".concat(prefixCls, "-drag-container")
            }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)])];
          }
        }, slots))]), renderUploadList()]);
      }
      var uploadButtonCls = classNames(prefixCls.value, (_classNames2 = {}, _defineProperty$5(_classNames2, "".concat(prefixCls.value, "-select"), true), _defineProperty$5(_classNames2, "".concat(prefixCls.value, "-select-").concat(listType), true), _defineProperty$5(_classNames2, "".concat(prefixCls.value, "-disabled"), disabled), _defineProperty$5(_classNames2, "".concat(prefixCls.value, "-rtl"), direction.value === "rtl"), _classNames2));
      var children = flattenChildren((_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots));
      var renderUploadButton = function renderUploadButton2(uploadButtonStyle) {
        return createVNode("div", {
          "class": uploadButtonCls,
          "style": uploadButtonStyle
        }, [createVNode(Upload$1, _objectSpread2(_objectSpread2({}, rcUploadProps), {}, {
          "ref": upload2
        }), slots)]);
      };
      if (listType === "picture-card") {
        return createVNode("span", {
          "class": classNames("".concat(prefixCls.value, "-picture-card-wrapper"), attrs.class)
        }, [renderUploadList(renderUploadButton, !!(children && children.length))]);
      }
      return createVNode("span", {
        "class": attrs.class
      }, [renderUploadButton(children && children.length ? void 0 : {
        display: "none"
      }), renderUploadList()]);
    };
  }
});
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
var Dragger = defineComponent({
  name: "AUploadDragger",
  inheritAttrs: false,
  props: uploadProps2(),
  setup: function setup11(props, _ref) {
    var slots = _ref.slots, attrs = _ref.attrs;
    return function() {
      var height = props.height, restProps = __rest(props, ["height"]);
      var style = attrs.style, restAttrs = __rest(attrs, ["style"]);
      var draggerProps = _extends(_extends(_extends({}, restProps), restAttrs), {
        type: "drag",
        style: _extends(_extends({}, style), {
          height: typeof height === "number" ? "".concat(height, "px") : height
        })
      });
      return createVNode(Upload, draggerProps, slots);
    };
  }
});
var UploadDragger = Dragger;
_extends(Upload, {
  Dragger,
  LIST_IGNORE,
  install: function install(app) {
    app.component(Upload.name, Upload);
    app.component(Dragger.name, Dragger);
    return app;
  }
});
class JSONUrlTemplateAdapter extends JSONTemplateAdapter {
  constructor(url, parserConfig) {
    const { $api } = useNuxtApp();
    const name = url.split("/").pop();
    super(name, parserConfig);
    this.url = url;
    this.$api = $api;
  }
  async init() {
    const data = await this.$api.utils.axiosRequestMake({
      apiMeta: {
        url: this.url
      }
    });
    this._jsonData = data;
    await super.init();
  }
}
class ExcelUrlTemplateAdapter extends ExcelTemplateAdapter {
  constructor(url, parserConfig) {
    const { $api } = useNuxtApp();
    const name = url == null ? void 0 : url.split("/").pop();
    super(name, parserConfig);
    this.url = url;
    this.excelData = null;
    this.$api = $api;
  }
  async init() {
    const data = await this.$api.utils.axiosRequestMake({
      apiMeta: {
        url: this.url
      }
    });
    this.excelData = data.data;
    await super.init();
  }
}
const _hoisted_1$7 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M21 6v2H3V6h18M3 18h9v-2H3v2m0-5h18v-2H3v2Z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
var __unplugin_components_17 = { name: "mdi-text", render: render$5 };
const _hoisted_1$6 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M11 7a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2h-2m0 2h2v2h-2V9Z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
var __unplugin_components_16 = { name: "mdi-alpha-a", render: render$4 };
const _hoisted_1$5 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M7.5 3C5 3 3 5 3 7.5S5 12 7.5 12c2 0 3.6-1.2 4.2-3H15v3h3V9h3V6h-9.3c-.6-1.8-2.2-3-4.2-3m0 3C8.3 6 9 6.7 9 7.5S8.3 9 7.5 9S6 8.3 6 7.5S6.7 6 7.5 6m4.5 8l-1.1 2.6l-2.9.3l2.2 1.9l-.7 2.8l2.5-1.5l2.4 1.5l-.6-2.8l2.2-1.9l-2.9-.2L12 14Z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
var __unplugin_components_13 = { name: "mdi-key-star", render: render$3 };
const _hoisted_1$4 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8H5m8 0v4h6V8h-6m-8 6v4h6v-4H5m8 0v4h6v-4h-6Z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var __unplugin_components_1$1 = { name: "mdi-table", render: render$2 };
const tableColumns = [
  {
    name: "Column Name",
    dataIndex: "column_name",
    key: "column_name",
    width: 250
  },
  {
    name: "Column Type",
    dataIndex: "column_type",
    key: "uidt",
    width: 250
  },
  {
    name: "Select Option",
    key: "dtxp"
  },
  {
    name: "Action",
    key: "action",
    align: "right"
  }
];
const srcDestMappingColumns = [
  {
    name: "Source column",
    dataIndex: "source_column",
    key: "source_column",
    width: 400
  },
  {
    name: "Destination column",
    dataIndex: "destination_column",
    key: "destination_column",
    width: 400
  },
  {
    name: "Action",
    key: "action",
    align: "right"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Editor",
  props: {
    quickImportType: null,
    projectTemplate: null,
    importData: null,
    importColumns: null,
    importOnly: { type: Boolean },
    maxRowsToParse: null
  },
  emits: ["import"],
  setup(__props, { expose, emit }) {
    const meta = inject(MetaInj, ref({}));
    const columns = computed(() => {
      var _a;
      return ((_a = meta.value) == null ? void 0 : _a.columns) || [];
    });
    const reloadHook = inject(ReloadViewDataHookInj, createEventHook());
    const useForm = Form.useForm;
    const { $api } = useNuxtApp();
    const { addTab } = useTabs();
    const { sqlUi, project, loadTables } = useProject();
    const hasSelectColumn = ref([]);
    const expansionPanel = ref([]);
    const editableTn = ref([]);
    const inputRefs = useTemplateRefsList();
    const isImporting = ref(false);
    const importingTip = ref("Importing");
    const uiTypeOptions = ref(Object.keys(UITypes).filter((uiType) => !isVirtualCol(UITypes[uiType]) && ![UITypes.ForeignKey, UITypes.ID, UITypes.CreateTime, UITypes.LastModifiedTime, UITypes.Barcode, UITypes.Button].includes(UITypes[uiType])).map((uiType) => ({
      value: uiType,
      label: uiType
    })));
    const srcDestMapping = ref([]);
    const data = reactive({
      title: null,
      name: "Project Name",
      tables: []
    });
    const validators = computed(() => data.tables.reduce((acc, table, tableIdx) => {
      var _a;
      acc[`tables.${tableIdx}.ref_table_name`] = [fieldRequiredValidator];
      hasSelectColumn.value[tableIdx] = false;
      (_a = table.columns) == null ? void 0 : _a.forEach((column, columnIdx) => {
        acc[`tables.${tableIdx}.columns.${columnIdx}.column_name`] = [fieldRequiredValidator];
        acc[`tables.${tableIdx}.columns.${columnIdx}.uidt`] = [fieldRequiredValidator];
        if (isSelect(column)) {
          hasSelectColumn.value[tableIdx] = true;
        }
      });
      return acc;
    }, {}));
    const { validate, validateInfos } = useForm(data, validators);
    const isValid = computed(() => {
      if (__props.importOnly) {
        for (const record of srcDestMapping.value) {
          if (!fieldsValidation(record)) {
            return false;
          }
        }
      } else {
        for (const [_, o] of Object.entries(validateInfos)) {
          if (o == null ? void 0 : o.validateStatus) {
            if (o.validateStatus === "error") {
              return false;
            }
          }
        }
      }
      return true;
    });
    onMounted(() => {
      parseAndLoadTemplate();
      nextTick(() => {
        var _a;
        (_a = inputRefs.value[0]) == null ? void 0 : _a.focus();
      });
    });
    function filterOption(input, option) {
      return option.value.toUpperCase().includes(input.toUpperCase());
    }
    function parseAndLoadTemplate() {
      if (__props.projectTemplate) {
        parseTemplate(__props.projectTemplate);
        expansionPanel.value = Array.from({ length: data.tables.length || 0 }, (_, i) => i);
        hasSelectColumn.value = Array.from({ length: data.tables.length || 0 }, () => false);
      }
    }
    function parseTemplate({ tables = [], ...rest }) {
      const parsedTemplate = {
        ...rest,
        tables: tables.map(({ v = [], columns: columns2 = [], ...rest2 }) => ({
          ...rest2,
          columns: [
            ...columns2.map((c, idx) => {
              c.key = idx;
              return c;
            }),
            ...v.map((v2) => ({
              column_name: v2.title,
              ref_table_name: {
                ...v2
              }
            }))
          ]
        }))
      };
      Object.assign(data, parsedTemplate);
    }
    function isSelect(col) {
      return col.uidt === "MultiSelect" || col.uidt === "SingleSelect";
    }
    function deleteTable(tableIdx) {
      data.tables.splice(tableIdx, 1);
    }
    function deleteTableColumn(tableIdx, columnIdx) {
      var _a;
      (_a = data.tables[tableIdx].columns) == null ? void 0 : _a.splice(columnIdx, 1);
    }
    function addNewColumnRow(table, uidt) {
      table.columns.push({
        key: table.columns.length,
        column_name: `title${table.columns.length + 1}`,
        uidt
      });
      nextTick(() => {
        const input = inputRefs.value[table.columns.length - 1];
        input.focus();
        input.select();
      });
    }
    function setEditableTn(tableIdx, val) {
      editableTn.value[tableIdx] = val;
    }
    function remapColNames(batchData, columns2) {
      return batchData.map((data2) => (columns2 || []).reduce((aggObj, col) => ({
        ...aggObj,
        [col.column_name]: data2[col.ref_column_name || col.column_name]
      }), {}));
    }
    function missingRequiredColumnsValidation() {
      const missingRequiredColumns = columns.value.filter((c) => (c.pk ? !c.ai && !c.cdf : !c.cdf && c.rqd) && !srcDestMapping.value.some((r) => r.destCn === c.title));
      if (missingRequiredColumns.length) {
        message.error(`Following columns are required : ${missingRequiredColumns.map((c) => c.title).join(", ")}`);
        return false;
      }
      return true;
    }
    function atLeastOneEnabledValidation() {
      if (srcDestMapping.value.filter((v) => v.enabled === true).length === 0) {
        message.error("At least one column has to be selected");
        return false;
      }
      return true;
    }
    function fieldsValidation(record) {
      if (!record.enabled) {
        return true;
      }
      const tableName = (meta == null ? void 0 : meta.value.title) || "";
      if (!record.destCn) {
        message.error(`Cannot find the destination column for ${record.srcCn}`);
        return false;
      }
      if (srcDestMapping.value.filter((v2) => v2.destCn === record.destCn).length > 1) {
        message.error("Duplicate mapping found, please remove one of the mapping");
        return false;
      }
      const v = columns.value.find((c) => c.title === record.destCn);
      if (v.pk ? !v.ai && !v.cdf : !v.cdf && v.rqd) {
        if (__props.importData[tableName].slice(0, __props.maxRowsToParse).some((r) => r[record.srcCn] === null || r[record.srcCn] === void 0 || r[record.srcCn] === "")) {
          message.error("null value violates not-null constraint");
        }
      }
      switch (v.uidt) {
        case UITypes.Number:
          if (__props.importData[tableName].slice(0, __props.maxRowsToParse).some((r) => r[record.sourceCn] !== null && r[record.srcCn] !== void 0 && isNaN(+r[record.srcCn]))) {
            message.error("Source data contains some invalid numbers");
            return false;
          }
          break;
        case UITypes.Checkbox:
          if (__props.importData[tableName].slice(0, __props.maxRowsToParse).some((r) => {
            if (r[record.srcCn] !== null && r[record.srcCn] !== void 0) {
              let input = r[record.srcCn];
              if (typeof input === "string") {
                input = input.replace(/["']/g, "").toLowerCase().trim();
                return !(input === "false" || input === "no" || input === "n" || input === "0" || input === "true" || input === "yes" || input === "y" || input === "1");
              }
              return input !== 1 && input !== 0 && input !== true && input !== false;
            }
            return false;
          })) {
            message.error("Source data contains some invalid boolean values");
            return false;
          }
          break;
      }
      return true;
    }
    async function importTemplate() {
      var _a, _b, _c, _d, _e, _f;
      if (__props.importOnly) {
        if (!missingRequiredColumnsValidation())
          return;
        if (!atLeastOneEnabledValidation())
          return;
        try {
          isImporting.value = true;
          const tableName = meta.value.title;
          const data2 = __props.importData[tableName];
          const projectName = project.value.title;
          const total = data2.length;
          for (let i = 0, progress = 0; i < total; i += __props.maxRowsToParse) {
            const batchData = data2.slice(i, i + __props.maxRowsToParse).map((row) => srcDestMapping.value.reduce((res, col) => {
              if (col.enabled && col.destCn) {
                const v = columns.value.find((c) => c.title === col.destCn);
                let input = row[col.srcCn];
                if (v.uidt === UITypes.Checkbox) {
                  input = input.replace(/["']/g, "").toLowerCase().trim();
                  if (input === "false" || input === "no" || input === "n") {
                    input = "0";
                  } else if (input === "true" || input === "yes" || input === "y") {
                    input = "1";
                  }
                } else if (v.uidt === UITypes.Number) {
                  if (input === "") {
                    input = null;
                  }
                } else if (v.uidt === UITypes.SingleSelect || v.uidt === UITypes.MultiSelect) {
                  if (input === "") {
                    input = null;
                  }
                }
                res[col.destCn] = input;
              }
              return res;
            }, {}));
            await $api.dbTableRow.bulkCreate("noco", projectName, tableName, batchData);
            importingTip.value = `Importing data to ${projectName}: ${progress}/${total} records`;
            progress += batchData.length;
          }
          reloadHook.trigger();
          message.success("Successfully imported table data");
        } catch (e) {
          message.error(e.message);
        } finally {
          isImporting.value = false;
        }
      } else {
        try {
          await validate();
        } catch (errorInfo) {
          isImporting.value = false;
          throw new Error("Please fill all the required values");
        }
        try {
          isImporting.value = true;
          const tab = {
            id: "",
            title: ""
          };
          for (const table of data.tables) {
            const systemColumns = sqlUi == null ? void 0 : sqlUi.value.getNewTableColumns().filter((c) => c.column_name !== "title");
            for (const systemColumn of systemColumns) {
              if (!((_a = table.columns) == null ? void 0 : _a.some((c) => {
                var _a2;
                return ((_a2 = c.column_name) == null ? void 0 : _a2.toLowerCase()) === systemColumn.column_name.toLowerCase();
              }))) {
                (_b = table.columns) == null ? void 0 : _b.push(systemColumn);
              }
            }
            if (table.columns) {
              for (const column of table.columns) {
                if (((_c = column.column_name) == null ? void 0 : _c.toLowerCase()) === "id" && !("pk" in column)) {
                  column.pk = true;
                  column.rqd = true;
                  break;
                }
              }
            }
            const tableMeta = await $api.dbTable.create((_d = project == null ? void 0 : project.value) == null ? void 0 : _d.id, {
              table_name: table.ref_table_name,
              title: "",
              columns: table.columns
            });
            table.title = tableMeta.title;
            if (tab.id === "" && tab.title === "") {
              tab.id = tableMeta.id;
              tab.title = tableMeta.title;
            }
            if ((_f = (_e = tableMeta == null ? void 0 : tableMeta.columns) == null ? void 0 : _e[0]) == null ? void 0 : _f.id) {
              await $api.dbTableColumn.primaryColumnSet(tableMeta.columns[0].id);
            }
          }
          if (__props.importData) {
            let total = 0;
            let progress = 0;
            const offset = __props.maxRowsToParse;
            const projectName = project.value.title;
            await Promise.all(data.tables.map((table) => (async (tableMeta) => {
              const data2 = __props.importData[tableMeta.ref_table_name];
              if (data2) {
                total += data2.length;
                for (let i = 0; i < data2.length; i += offset) {
                  importingTip.value = `Importing data to ${projectName}: ${progress}/${total} records`;
                  const batchData = remapColNames(data2.slice(i, i + offset), tableMeta.columns);
                  await $api.dbTableRow.bulkCreate("noco", projectName, tableMeta.title, batchData);
                  progress += batchData.length;
                }
              }
            })(table)));
          }
          await loadTables();
          addTab({
            ...tab,
            type: TabType.TABLE
          });
        } catch (e) {
          message.error(await extractSdkResponseErrorMsg(e));
        } finally {
          isImporting.value = false;
        }
      }
    }
    function mapDefaultColumns() {
      srcDestMapping.value = [];
      for (const col of __props.importColumns[0]) {
        const o = { srcCn: col.column_name, destCn: "", enabled: true };
        if (columns.value) {
          const tableColumn = columns.value.find((c) => c.title === col.column_name);
          if (tableColumn) {
            o.destCn = tableColumn.title;
          } else {
            o.enabled = false;
          }
        }
        srcDestMapping.value.push(o);
      }
    }
    expose({
      importTemplate,
      isValid
    });
    onMounted(() => {
      if (__props.importOnly) {
        mapDefaultColumns();
      }
    });
    const __returned__ = { emit, meta, columns, reloadHook, useForm, $api, addTab, sqlUi, project, loadTables, hasSelectColumn, expansionPanel, editableTn, inputRefs, isImporting, importingTip, uiTypeOptions, srcDestMapping, data, validators, validate, validateInfos, isValid, filterOption, parseAndLoadTemplate, parseTemplate, isSelect, deleteTable, deleteTableColumn, addNewColumnRow, setEditableTn, remapColNames, missingRequiredColumnsValidation, atLeastOneEnabledValidation, fieldsValidation, importTemplate, mapDefaultColumns, srcDestMappingColumns, tableColumns, getUIDTIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-58c00002"), n = n(), popScopeId(), n);
const _hoisted_1$3 = {
  key: 0,
  class: "text-center"
};
const _hoisted_2$3 = { class: "font-weight-bold text-lg flex items-center gap-2" };
const _hoisted_3$3 = { key: 0 };
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = { class: "flex items-center" };
const _hoisted_6$1 = { class: "ml-2" };
const _hoisted_7$1 = {
  key: 0,
  class: "text-center"
};
const _hoisted_8$1 = ["onClick"];
const _hoisted_9$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Delete Table", -1));
const _hoisted_10$1 = { key: 0 };
const _hoisted_11$1 = { key: 1 };
const _hoisted_12$1 = { key: 2 };
const _hoisted_13$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Primary Value", -1));
const _hoisted_14$1 = { class: "flex items-center float-right mr-4" };
const _hoisted_15$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Delete Column", -1));
const _hoisted_16$1 = { class: "flex items-center" };
const _hoisted_17$1 = { class: "mt-5 flex gap-2 justify-center" };
const _hoisted_18$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Add Number Column", -1));
const _hoisted_19$1 = { class: "flex items-center" };
const _hoisted_20$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Add SingleLineText Column", -1));
const _hoisted_21$1 = { class: "flex items-center" };
const _hoisted_22$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Add LongText Column", -1));
const _hoisted_23$1 = { class: "flex items-center" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Add Other Column", -1));
const _hoisted_25 = { class: "flex items-center gap-1" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_form = Form;
  const _component_mdi_table = __unplugin_components_1$1;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4;
  const _component_a_checkbox = Checkbox;
  const _component_a_table = __unplugin_components_13$1;
  const _component_a_collapse_panel = __unplugin_components_9;
  const _component_a_collapse = Collapse;
  const _component_a_card = Card;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2;
  const _component_mdi_delete_outline = __unplugin_components_3;
  const _component_a_tooltip = __unplugin_components_1$2;
  const _component_mdi_key_star = __unplugin_components_13;
  const _component_a_button = Button;
  const _component_mdi_numeric = NumericIcon;
  const _component_mdi_alpha_a = __unplugin_components_16;
  const _component_mdi_text = __unplugin_components_17;
  const _component_mdi_plus = MdiPlus;
  const _component_a_spin = Spin;
  return openBlock(), createBlock(_component_a_spin, {
    spinning: $setup.isImporting,
    tip: $setup.importingTip,
    size: "large"
  }, {
    default: withCtx(() => [
      $props.importOnly ? (openBlock(), createBlock(_component_a_card, { key: 0 }, {
        default: withCtx(() => [
          createVNode(_component_a_form, {
            model: $setup.data,
            name: "import-only"
          }, {
            default: withCtx(() => [
              $setup.data.tables && $props.quickImportType === "excel" ? (openBlock(), createElementBlock("p", _hoisted_1$3, toDisplayString($setup.data.tables.length) + " sheet" + toDisplayString($setup.data.tables.length > 1 ? "s" : "") + " available for import ", 1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["model"]),
          $setup.data.tables && $setup.data.tables.length ? (openBlock(), createBlock(_component_a_collapse, {
            key: 0,
            activeKey: $setup.expansionPanel,
            "onUpdate:activeKey": _cache[0] || (_cache[0] = ($event) => $setup.expansionPanel = $event),
            class: "template-collapse",
            accordion: ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.data.tables, (table, tableIdx) => {
                return openBlock(), createBlock(_component_a_collapse_panel, { key: tableIdx }, {
                  header: withCtx(() => [
                    createBaseVNode("span", _hoisted_2$3, [
                      createVNode(_component_mdi_table, { class: "text-primary" }),
                      createTextVNode(" " + toDisplayString(table.ref_table_name), 1)
                    ])
                  ]),
                  default: withCtx(() => [
                    $setup.srcDestMapping ? (openBlock(), createBlock(_component_a_table, {
                      key: 0,
                      class: "template-form",
                      "row-class-name": "template-form-row",
                      "data-source": $setup.srcDestMapping,
                      columns: $setup.srcDestMappingColumns,
                      pagination: false
                    }, {
                      headerCell: withCtx(({ column }) => [
                        column.key === "source_column" || column.key === "destination_column" ? (openBlock(), createElementBlock("span", _hoisted_3$3, toDisplayString(column.name), 1)) : createCommentVNode("", true)
                      ]),
                      bodyCell: withCtx(({ column, record }) => [
                        column.key === "source_column" ? (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(record.srcCn), 1)) : column.key === "destination_column" ? (openBlock(), createBlock(_component_a_select, {
                          key: 1,
                          value: record.destCn,
                          "onUpdate:value": ($event) => record.destCn = $event,
                          class: "w-52",
                          "show-search": "",
                          "filter-option": $setup.filterOption
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.columns, (col, i) => {
                              return openBlock(), createBlock(_component_a_select_option, {
                                key: i,
                                value: col.title
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_5$1, [
                                    (openBlock(), createBlock(resolveDynamicComponent($setup.getUIDTIcon(col.uidt)))),
                                    createBaseVNode("span", _hoisted_6$1, toDisplayString(col.title), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["value", "onUpdate:value"])) : createCommentVNode("", true),
                        column.key === "action" ? (openBlock(), createBlock(_component_a_checkbox, {
                          key: 2,
                          checked: record.enabled,
                          "onUpdate:checked": ($event) => record.enabled = $event
                        }, null, 8, ["checked", "onUpdate:checked"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["data-source", "columns"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["activeKey"])) : createCommentVNode("", true)
        ]),
        _: 1
      })) : (openBlock(), createBlock(_component_a_card, { key: 1 }, {
        default: withCtx(() => [
          createVNode(_component_a_form, {
            model: $setup.data,
            name: "template-editor-form",
            onKeydown: _cache[3] || (_cache[3] = withKeys(($event) => $setup.emit("import"), ["enter"]))
          }, {
            default: withCtx(() => [
              $setup.data.tables && $props.quickImportType === "excel" ? (openBlock(), createElementBlock("p", _hoisted_7$1, toDisplayString($setup.data.tables.length) + " sheet" + toDisplayString($setup.data.tables.length > 1 ? "s" : "") + " available for import ", 1)) : createCommentVNode("", true),
              $setup.data.tables && $setup.data.tables.length ? (openBlock(), createBlock(_component_a_collapse, {
                key: 1,
                activeKey: $setup.expansionPanel,
                "onUpdate:activeKey": _cache[2] || (_cache[2] = ($event) => $setup.expansionPanel = $event),
                class: "template-collapse",
                accordion: ""
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.data.tables, (table, tableIdx) => {
                    return openBlock(), createBlock(_component_a_collapse_panel, { key: tableIdx }, {
                      header: withCtx(() => [
                        $setup.editableTn[tableIdx] ? (openBlock(), createBlock(_component_a_form_item, mergeProps({ key: 0 }, $setup.validateInfos[`tables.${tableIdx}.ref_table_name`], { "no-style": "" }), {
                          default: withCtx(() => [
                            createVNode(_component_a_input, {
                              value: table.ref_table_name,
                              "onUpdate:value": ($event) => table.ref_table_name = $event,
                              class: "max-w-xs",
                              size: "large",
                              "hide-details": "",
                              onClick: _cache[1] || (_cache[1] = ($event) => $event.stopPropagation()),
                              onBlur: ($event) => $setup.setEditableTn(tableIdx, false),
                              onKeydown: withKeys(($event) => $setup.setEditableTn(tableIdx, false), ["enter"])
                            }, null, 8, ["value", "onUpdate:value", "onBlur", "onKeydown"])
                          ]),
                          _: 2
                        }, 1040)) : (openBlock(), createElementBlock("span", {
                          key: 1,
                          class: "font-weight-bold text-lg flex items-center gap-2",
                          onClick: ($event) => $setup.setEditableTn(tableIdx, true)
                        }, [
                          createVNode(_component_mdi_table, { class: "text-primary" }),
                          createTextVNode(" " + toDisplayString(table.ref_table_name), 1)
                        ], 8, _hoisted_8$1))
                      ]),
                      extra: withCtx(() => [
                        createVNode(_component_a_tooltip, { bottom: "" }, {
                          title: withCtx(() => [
                            _hoisted_9$1
                          ]),
                          default: withCtx(() => [
                            $setup.data.tables.length > 1 ? (openBlock(), createBlock(_component_mdi_delete_outline, {
                              key: 0,
                              class: "text-lg mr-8",
                              onClick: withModifiers(($event) => $setup.deleteTable(tableIdx), ["stop"])
                            }, null, 8, ["onClick"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      default: withCtx(() => [
                        table.columns && table.columns.length ? (openBlock(), createBlock(_component_a_table, {
                          key: 0,
                          class: "template-form",
                          "row-class-name": "template-form-row",
                          "data-source": table.columns,
                          columns: $setup.tableColumns,
                          pagination: false
                        }, {
                          headerCell: withCtx(({ column }) => [
                            column.key === "column_name" ? (openBlock(), createElementBlock("span", _hoisted_10$1, toDisplayString(_ctx.$t("labels.columnName")), 1)) : column.key === "uidt" ? (openBlock(), createElementBlock("span", _hoisted_11$1, toDisplayString(_ctx.$t("labels.columnType")), 1)) : column.key === "dtxp" && $setup.hasSelectColumn[tableIdx] ? (openBlock(), createElementBlock("span", _hoisted_12$1, " Options ")) : createCommentVNode("", true)
                          ]),
                          bodyCell: withCtx(({ column, record }) => [
                            column.key === "column_name" ? (openBlock(), createBlock(_component_a_form_item, normalizeProps(mergeProps({ key: 0 }, $setup.validateInfos[`tables.${tableIdx}.columns.${record.key}.${column.key}`])), {
                              default: withCtx(() => [
                                createVNode(_component_a_input, {
                                  ref_for: true,
                                  ref: $setup.inputRefs.set,
                                  value: record.column_name,
                                  "onUpdate:value": ($event) => record.column_name = $event
                                }, null, 8, ["value", "onUpdate:value"])
                              ]),
                              _: 2
                            }, 1040)) : column.key === "uidt" ? (openBlock(), createBlock(_component_a_form_item, normalizeProps(mergeProps({ key: 1 }, $setup.validateInfos[`tables.${tableIdx}.columns.${record.key}.${column.key}`])), {
                              default: withCtx(() => [
                                createVNode(_component_a_select, {
                                  value: record.uidt,
                                  "onUpdate:value": ($event) => record.uidt = $event,
                                  class: "w-52",
                                  "show-search": "",
                                  options: $setup.uiTypeOptions,
                                  "filter-option": $setup.filterOption
                                }, null, 8, ["value", "onUpdate:value", "options"])
                              ]),
                              _: 2
                            }, 1040)) : column.key === "dtxp" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                              $setup.isSelect(record) ? (openBlock(), createBlock(_component_a_form_item, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_input, {
                                    value: record.dtxp,
                                    "onUpdate:value": ($event) => record.dtxp = $event
                                  }, null, 8, ["value", "onUpdate:value"])
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ], 64)) : createCommentVNode("", true),
                            column.key === "action" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                              record.key === 0 ? (openBlock(), createBlock(_component_a_tooltip, { key: 0 }, {
                                title: withCtx(() => [
                                  _hoisted_13$1
                                ]),
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_14$1, [
                                    createVNode(_component_mdi_key_star, { class: "text-lg" })
                                  ])
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(_component_a_tooltip, { key: 1 }, {
                                title: withCtx(() => [
                                  _hoisted_15$1
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_a_button, {
                                    type: "text",
                                    onClick: ($event) => $setup.deleteTableColumn(tableIdx, record.key)
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_16$1, [
                                        createVNode(_component_mdi_delete_outline, { class: "text-lg" })
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024))
                            ], 64)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["data-source", "columns"])) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_17$1, [
                          createVNode(_component_a_tooltip, { bottom: "" }, {
                            title: withCtx(() => [
                              _hoisted_18$1
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, {
                                class: "group",
                                onClick: ($event) => $setup.addNewColumnRow(table, "Number")
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_19$1, [
                                    createVNode(_component_mdi_numeric, { class: "group-hover:!text-accent flex text-lg" })
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_a_tooltip, { bottom: "" }, {
                            title: withCtx(() => [
                              _hoisted_20$1
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, {
                                class: "group",
                                onClick: ($event) => $setup.addNewColumnRow(table, "SingleLineText")
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_21$1, [
                                    createVNode(_component_mdi_alpha_a, { class: "group-hover:!text-accent text-lg" })
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_a_tooltip, { bottom: "" }, {
                            title: withCtx(() => [
                              _hoisted_22$1
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, {
                                class: "group",
                                onClick: ($event) => $setup.addNewColumnRow(table, "LongText")
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_23$1, [
                                    createVNode(_component_mdi_text, { class: "group-hover:!text-accent text-lg" })
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_a_tooltip, { bottom: "" }, {
                            title: withCtx(() => [
                              _hoisted_24
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, {
                                class: "group",
                                onClick: ($event) => $setup.addNewColumnRow(table, "SingleLineText")
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_25, [
                                    createVNode(_component_mdi_plus, { class: "group-hover:!text-accent text-lg" })
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }, 8, ["activeKey"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["spinning", "tip"]);
}
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-58c00002"]]);
const _hoisted_1$2 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var __unplugin_components_1 = { name: "mdi-file-plus-outline", render: render$1 };
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-6-8l4 4h-2.5v3h-3v-3H8l4-4Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_0 = { name: "mdi-file-upload-outline", render: render3 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QuickImport",
  props: {
    modelValue: { type: Boolean },
    importType: null,
    importOnly: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    const rest = createPropsRestProxy(__props, ["importType", "importOnly"]);
    const { t } = useI18n();
    const { tables } = useProject();
    const activeKey = ref("uploadTab");
    const jsonEditorRef = ref();
    const templateEditorRef = ref();
    const loading = ref(false);
    const templateData = ref();
    const importData = ref();
    const importColumns = ref([]);
    const templateEditorModal = ref(false);
    const useForm = Form.useForm;
    const importState = reactive({
      fileList: [],
      url: "",
      jsonEditor: {},
      parserConfig: {
        maxRowsToParse: 500,
        normalizeNested: true,
        importData: true
      }
    });
    const isImportTypeJson = computed(() => __props.importType === "json");
    const isImportTypeCsv = computed(() => __props.importType === "csv");
    const IsImportTypeExcel = computed(() => __props.importType === "excel");
    const validators = computed(() => ({
      url: [fieldRequiredValidator, importUrlValidator, isImportTypeCsv.value ? importCsvUrlValidator : importExcelUrlValidator],
      maxRowsToParse: [fieldRequiredValidator]
    }));
    const { validate, validateInfos } = useForm(importState, validators);
    const importMeta = computed(() => {
      if (IsImportTypeExcel.value) {
        return {
          header: "QUICK IMPORT - EXCEL",
          uploadHint: t("msg.info.excelSupport"),
          urlInputLabel: t("msg.info.excelURL"),
          loadUrlDirective: ["c:quick-import:excel:load-url"],
          acceptTypes: ".xls, .xlsx, .xlsm, .ods, .ots"
        };
      } else if (isImportTypeCsv.value) {
        return {
          header: "QUICK IMPORT - CSV",
          uploadHint: "",
          urlInputLabel: t("msg.info.csvURL"),
          loadUrlDirective: ["c:quick-import:csv:load-url"],
          acceptTypes: ".csv"
        };
      } else if (isImportTypeJson.value) {
        return {
          header: "QUICK IMPORT - JSON",
          uploadHint: "",
          acceptTypes: ".json"
        };
      }
      return {};
    });
    const dialogShow = useVModel(rest, "modelValue", emit);
    const disablePreImportButton = computed(() => {
      var _a;
      if (activeKey.value === "uploadTab") {
        return !(importState.fileList.length > 0);
      } else if (activeKey.value === "urlTab") {
        if (!validateInfos.url.validateStatus)
          return true;
        return validateInfos.url.validateStatus === "error";
      } else if (activeKey.value === "jsonEditorTab") {
        return !((_a = jsonEditorRef.value) == null ? void 0 : _a.isValid);
      }
    });
    const disableImportButton = computed(() => {
      var _a;
      return !((_a = templateEditorRef.value) == null ? void 0 : _a.isValid);
    });
    const disableFormatJsonButton = computed(() => {
      var _a;
      return !((_a = jsonEditorRef.value) == null ? void 0 : _a.isValid);
    });
    const modalWidth = computed(() => {
      if (__props.importType === "excel" && templateEditorModal.value) {
        return "max(90vw, 600px)";
      }
      return "max(60vw, 600px)";
    });
    async function handlePreImport() {
      loading.value = true;
      if (activeKey.value === "uploadTab") {
        await parseAndExtractData(importState.fileList[0].data, importState.fileList[0].name);
      } else if (activeKey.value === "urlTab") {
        try {
          await validate();
          await parseAndExtractData(importState.url, "");
        } catch (e) {
          message.error(await extractSdkResponseErrorMsg(e));
        }
      } else if (activeKey.value === "jsonEditorTab") {
        await parseAndExtractData(JSON.stringify(importState.jsonEditor), "");
      }
      loading.value = false;
    }
    async function handleImport() {
      try {
        loading.value = true;
        await templateEditorRef.value.importTemplate();
      } catch (e) {
        return message.error(await extractSdkResponseErrorMsg(e));
      } finally {
        loading.value = false;
      }
      dialogShow.value = false;
    }
    async function parseAndExtractData(val, name) {
      try {
        templateData.value = null;
        importData.value = null;
        importColumns.value = [];
        const templateGenerator = getAdapter(name, val);
        if (!templateGenerator) {
          message.error("Template Generator cannot be found!");
          return;
        }
        await templateGenerator.init();
        templateGenerator.parse();
        templateData.value = templateGenerator.getTemplate();
        templateData.value.tables[0].table_name = populateUniqueTableName();
        importData.value = templateGenerator.getData();
        if (__props.importOnly)
          importColumns.value = templateGenerator.getColumns();
        templateEditorModal.value = true;
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    }
    function rejectDrop(fileList) {
      fileList.map((file) => {
        return message.error(`Failed to upload file ${file.name}`);
      });
    }
    function handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading" && status !== "removed") {
        const reader = new FileReader();
        reader.onload = (e) => {
          const target = importState.fileList.find((f) => f.uid === info.file.uid);
          if (e.target && e.target.result) {
            if (target) {
              target.data = e.target.result;
            } else if (!target) {
              importState.fileList.push({
                ...info.file,
                status: "done",
                data: e.target.result
              });
            }
          }
        };
        reader.readAsArrayBuffer(info.file.originFileObj);
      }
      if (status === "done") {
        message.success(`Uploaded file ${info.file.name} successfully`);
      } else if (status === "error") {
        message.error(`Failed to upload file ${info.file.name}`);
      }
    }
    function formatJson() {
      var _a;
      (_a = jsonEditorRef.value) == null ? void 0 : _a.format();
    }
    function populateUniqueTableName() {
      let c = 1;
      while (tables.value.some((t2) => t2.title === `Sheet${c}`)) {
        c++;
      }
      return `Sheet${c}`;
    }
    function getAdapter(name, val) {
      if (IsImportTypeExcel.value || isImportTypeCsv.value) {
        switch (activeKey.value) {
          case "uploadTab":
            return new ExcelTemplateAdapter(name, val, importState.parserConfig);
          case "urlTab":
            return new ExcelUrlTemplateAdapter(val, importState.parserConfig);
        }
      } else if (isImportTypeJson.value) {
        switch (activeKey.value) {
          case "uploadTab":
            return new JSONTemplateAdapter(name, val, importState.parserConfig);
          case "urlTab":
            return new JSONUrlTemplateAdapter(val, importState.parserConfig);
          case "jsonEditorTab":
            return new JSONTemplateAdapter(name, val, importState.parserConfig);
        }
      }
      return null;
    }
    expose({
      handleChange
    });
    const __returned__ = { emit, t, tables, activeKey, jsonEditorRef, templateEditorRef, loading, templateData, importData, importColumns, templateEditorModal, useForm, importState, isImportTypeJson, isImportTypeCsv, IsImportTypeExcel, validators, validate, validateInfos, importMeta, dialogShow, disablePreImportButton, disableImportButton, disableFormatJsonButton, modalWidth, handlePreImport, handleImport, parseAndExtractData, rejectDrop, handleChange, formatJson, populateUniqueTableName, getAdapter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "px-5" };
const _hoisted_2 = { class: "prose-xl font-weight-bold my-5" };
const _hoisted_3 = { class: "mt-5" };
const _hoisted_4 = { class: "flex items-center gap-2" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Upload ");
const _hoisted_6 = { class: "py-6" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "ant-upload-text" }, "Click or drag file to this area to upload", -1);
const _hoisted_8 = { class: "ant-upload-hint" };
const _hoisted_9 = { class: "flex items-center gap-2" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" JSON Editor ");
const _hoisted_11 = { class: "pb-3 pt-3" };
const _hoisted_12 = { class: "flex items-center gap-2" };
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" URL ");
const _hoisted_14 = { class: "pr-10 pt-5" };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = { class: "mb-4" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", { class: "prose-lg" }, "Advanced Settings", -1);
const _hoisted_18 = {
  key: 0,
  class: "mt-3"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "caption" }, "Flatten nested", -1);
const _hoisted_20 = {
  key: 1,
  class: "mt-4"
};
const _hoisted_21 = /* @__PURE__ */ createTextVNode("Import data");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("Back");
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Format JSON ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TemplateEditor = __nuxt_component_0;
  const _component_MdiFileUploadOutline = __unplugin_components_0;
  const _component_MdiFilePlusOutline = __unplugin_components_1;
  const _component_a_upload_dragger = UploadDragger;
  const _component_a_tab_pane = __unplugin_components_1$3;
  const _component_MdiCodeJson = JSONIcon;
  const _component_MonacoEditor = __nuxt_component_0$1;
  const _component_MdiLinkVariant = __unplugin_components_5;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2;
  const _component_a_form = Form;
  const _component_a_tabs = Tabs;
  const _component_a_divider = __unplugin_components_2$1;
  const _component_a_input_number = __unplugin_components_5$1;
  const _component_a_checkbox = Checkbox;
  const _component_a_button = Button;
  const _component_a_modal = Modal;
  return openBlock(), createBlock(_component_a_modal, {
    visible: $setup.dialogShow,
    "onUpdate:visible": _cache[9] || (_cache[9] = ($event) => $setup.dialogShow = $event),
    width: $setup.modalWidth,
    onKeydown: _cache[10] || (_cache[10] = withKeys(($event) => $setup.dialogShow = false, ["esc"]))
  }, {
    footer: withCtx(() => [
      $setup.templateEditorModal ? (openBlock(), createBlock(_component_a_button, {
        key: "back",
        onClick: _cache[7] || (_cache[7] = ($event) => $setup.templateEditorModal = false)
      }, {
        default: withCtx(() => [
          _hoisted_22
        ]),
        _: 1
      })) : (openBlock(), createBlock(_component_a_button, {
        key: "cancel",
        onClick: _cache[8] || (_cache[8] = ($event) => $setup.dialogShow = false)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("general.cancel")), 1)
        ]),
        _: 1
      })),
      $setup.activeKey === "jsonEditorTab" && !$setup.templateEditorModal ? (openBlock(), createBlock(_component_a_button, {
        key: "format",
        disabled: $setup.disableFormatJsonButton,
        onClick: $setup.formatJson
      }, {
        default: withCtx(() => [
          _hoisted_23
        ]),
        _: 1
      }, 8, ["disabled"])) : createCommentVNode("", true),
      !$setup.templateEditorModal ? (openBlock(), createBlock(_component_a_button, {
        key: "pre-import",
        type: "primary",
        class: "nc-btn-import",
        loading: $setup.loading,
        disabled: $setup.disablePreImportButton,
        onClick: $setup.handlePreImport
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("activity.import")), 1)
        ]),
        _: 1
      }, 8, ["loading", "disabled"])) : (openBlock(), createBlock(_component_a_button, {
        key: "import",
        type: "primary",
        loading: $setup.loading,
        disabled: $setup.disableImportButton,
        onClick: $setup.handleImport
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("activity.import")), 1)
        ]),
        _: 1
      }, 8, ["loading", "disabled"]))
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, toDisplayString($setup.importMeta.header), 1),
        createBaseVNode("div", _hoisted_3, [
          $setup.templateEditorModal ? (openBlock(), createBlock(_component_TemplateEditor, {
            key: 0,
            ref: "templateEditorRef",
            "project-template": $setup.templateData,
            "import-data": $setup.importData,
            "import-columns": $setup.importColumns,
            "import-only": $props.importOnly,
            "quick-import-type": $props.importType,
            "max-rows-to-parse": $setup.importState.parserConfig.maxRowsToParse,
            onImport: $setup.handleImport
          }, null, 8, ["project-template", "import-data", "import-columns", "import-only", "quick-import-type", "max-rows-to-parse"])) : (openBlock(), createBlock(_component_a_tabs, {
            key: 1,
            activeKey: $setup.activeKey,
            "onUpdate:activeKey": _cache[3] || (_cache[3] = ($event) => $setup.activeKey = $event),
            "hide-add": "",
            type: "editable-card",
            "tab-position": "top"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_tab_pane, {
                key: "uploadTab",
                closable: false
              }, {
                tab: withCtx(() => [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_component_MdiFileUploadOutline),
                    _hoisted_5
                  ])
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(_component_a_upload_dragger, {
                      fileList: $setup.importState.fileList,
                      "onUpdate:fileList": _cache[0] || (_cache[0] = ($event) => $setup.importState.fileList = $event),
                      name: "file",
                      class: "nc-input-import !scrollbar-thin-dull",
                      accept: $setup.importMeta.acceptTypes,
                      "max-count": 1,
                      "list-type": "picture",
                      onChange: $setup.handleChange,
                      onReject: $setup.rejectDrop
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_MdiFilePlusOutline, { size: "large" }),
                        _hoisted_7,
                        createBaseVNode("p", _hoisted_8, toDisplayString($setup.importMeta.uploadHint), 1)
                      ]),
                      _: 1
                    }, 8, ["fileList", "accept"])
                  ])
                ]),
                _: 1
              }),
              $setup.isImportTypeJson ? (openBlock(), createBlock(_component_a_tab_pane, {
                key: "jsonEditorTab",
                closable: false
              }, {
                tab: withCtx(() => [
                  createBaseVNode("span", _hoisted_9, [
                    createVNode(_component_MdiCodeJson),
                    _hoisted_10
                  ])
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_MonacoEditor, {
                      ref: "jsonEditorRef",
                      modelValue: $setup.importState.jsonEditor,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.importState.jsonEditor = $event),
                      class: "min-h-60 max-h-80"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_a_tab_pane, {
                key: "urlTab",
                closable: false
              }, {
                tab: withCtx(() => [
                  createBaseVNode("span", _hoisted_12, [
                    createVNode(_component_MdiLinkVariant),
                    _hoisted_13
                  ])
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(_component_a_form, {
                      model: $setup.importState,
                      name: "quick-import-url-form",
                      layout: "horizontal",
                      class: "mb-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_form_item, mergeProps({
                          label: $setup.importMeta.urlInputLabel
                        }, $setup.validateInfos.url), {
                          default: withCtx(() => [
                            createVNode(_component_a_input, {
                              value: $setup.importState.url,
                              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.importState.url = $event),
                              size: "large"
                            }, null, 8, ["value"])
                          ]),
                          _: 1
                        }, 16, ["label"])
                      ]),
                      _: 1
                    }, 8, ["model"])
                  ])
                ]),
                _: 1
              }))
            ]),
            _: 1
          }, 8, ["activeKey"]))
        ]),
        !$setup.templateEditorModal ? (openBlock(), createElementBlock("div", _hoisted_15, [
          createVNode(_component_a_divider),
          createBaseVNode("div", _hoisted_16, [
            _hoisted_17,
            createVNode(_component_a_form_item, mergeProps({
              class: "mt-4 mb-2",
              label: $setup.t("msg.info.footMsg")
            }, $setup.validateInfos.maxRowsToParse), {
              default: withCtx(() => [
                createVNode(_component_a_input_number, {
                  value: $setup.importState.parserConfig.maxRowsToParse,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.importState.parserConfig.maxRowsToParse = $event),
                  min: 1,
                  max: 5e4
                }, null, 8, ["value"])
              ]),
              _: 1
            }, 16, ["label"]),
            $setup.isImportTypeJson ? (openBlock(), createElementBlock("div", _hoisted_18, [
              createVNode(_component_a_checkbox, {
                checked: $setup.importState.parserConfig.normalizeNested,
                "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => $setup.importState.parserConfig.normalizeNested = $event)
              }, {
                default: withCtx(() => [
                  _hoisted_19
                ]),
                _: 1
              }, 8, ["checked"])
            ])) : createCommentVNode("", true),
            $setup.isImportTypeJson ? (openBlock(), createElementBlock("div", _hoisted_20, [
              createVNode(_component_a_checkbox, {
                checked: $setup.importState.parserConfig.importData,
                "onUpdate:checked": _cache[6] || (_cache[6] = ($event) => $setup.importState.parserConfig.importData = $event)
              }, {
                default: withCtx(() => [
                  _hoisted_21
                ]),
                _: 1
              }, 8, ["checked"])
            ])) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true)
      ])
    ]),
    _: 1
  }, 8, ["visible", "width"]);
}
var DlgQuickImport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { DlgQuickImport as D };
