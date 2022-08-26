import { d as defineComponent, g as createVNode, aW as _toConsumableArray, aD as classNames, aJ as _defineProperty, bj as initDefaultProps, aE as useConfigInject, aC as _extends, aN as _typeof, e as computed, aK as _objectSpread2 } from "./entry-61ceea7f.mjs";
import { o as omit } from "./omit-173fd1c5.mjs";
var skeletonTitleProps = function skeletonTitleProps2() {
  return {
    prefixCls: String,
    width: {
      type: [Number, String]
    }
  };
};
var SkeletonTitle = defineComponent({
  name: "SkeletonTitle",
  props: skeletonTitleProps(),
  setup: function setup(props) {
    return function() {
      var prefixCls = props.prefixCls, width = props.width;
      var zWidth = typeof width === "number" ? "".concat(width, "px") : width;
      return createVNode("h3", {
        "class": prefixCls,
        "style": {
          width: zWidth
        }
      }, null);
    };
  }
});
var SkeletonTitle$1 = SkeletonTitle;
var skeletonParagraphProps = function skeletonParagraphProps2() {
  return {
    prefixCls: String,
    width: {
      type: [Number, String, Array]
    },
    rows: Number
  };
};
var SkeletonParagraph = defineComponent({
  name: "SkeletonParagraph",
  props: skeletonParagraphProps(),
  setup: function setup2(props) {
    var getWidth = function getWidth2(index) {
      var width = props.width, _props$rows = props.rows, rows = _props$rows === void 0 ? 2 : _props$rows;
      if (Array.isArray(width)) {
        return width[index];
      }
      if (rows - 1 === index) {
        return width;
      }
      return void 0;
    };
    return function() {
      var prefixCls = props.prefixCls, rows = props.rows;
      var rowList = _toConsumableArray(Array(rows)).map(function(_, index) {
        var width = getWidth(index);
        return createVNode("li", {
          "key": index,
          "style": {
            width: typeof width === "number" ? "".concat(width, "px") : width
          }
        }, null);
      });
      return createVNode("ul", {
        "class": prefixCls
      }, [rowList]);
    };
  }
});
var Paragraph = SkeletonParagraph;
var skeletonElementProps = function skeletonElementProps2() {
  return {
    prefixCls: String,
    size: [String, Number],
    shape: String,
    active: {
      type: Boolean,
      default: void 0
    }
  };
};
var Element = function Element2(props) {
  var _classNames, _classNames2;
  var prefixCls = props.prefixCls, size = props.size, shape = props.shape;
  var sizeCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === "large"), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === "small"), _classNames));
  var shapeCls = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-circle"), shape === "circle"), _defineProperty(_classNames2, "".concat(prefixCls, "-square"), shape === "square"), _defineProperty(_classNames2, "".concat(prefixCls, "-round"), shape === "round"), _classNames2));
  var sizeStyle = typeof size === "number" ? {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    lineHeight: "".concat(size, "px")
  } : {};
  return createVNode("span", {
    "class": classNames(prefixCls, sizeCls, shapeCls),
    "style": sizeStyle
  }, null);
};
Element.displayName = "SkeletonElement";
var Element$1 = Element;
var skeletonProps = function skeletonProps2() {
  return {
    active: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    avatar: {
      type: [Boolean, Object],
      default: void 0
    },
    title: {
      type: [Boolean, Object],
      default: void 0
    },
    paragraph: {
      type: [Boolean, Object],
      default: void 0
    },
    round: {
      type: Boolean,
      default: void 0
    }
  };
};
function getComponentProps(prop) {
  if (prop && _typeof(prop) === "object") {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    return {
      size: "large",
      shape: "square"
    };
  }
  return {
    size: "large",
    shape: "circle"
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: "38%"
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: "50%"
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {};
  if (!hasAvatar || !hasTitle) {
    basicProps.width = "61%";
  }
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
var Skeleton = defineComponent({
  name: "ASkeleton",
  props: initDefaultProps(skeletonProps(), {
    avatar: false,
    title: true,
    paragraph: true
  }),
  setup: function setup3(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("skeleton", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction;
    return function() {
      var _a;
      var loading = props.loading, avatar = props.avatar, title = props.title, paragraph = props.paragraph, active = props.active, round = props.round;
      var pre = prefixCls.value;
      if (loading || props.loading === void 0) {
        var _classNames;
        var hasAvatar = !!avatar || avatar === "";
        var hasTitle = !!title || title === "";
        var hasParagraph = !!paragraph || paragraph === "";
        var avatarNode;
        if (hasAvatar) {
          var avatarProps3 = _extends(_extends({
            prefixCls: "".concat(pre, "-avatar")
          }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
          avatarNode = createVNode("div", {
            "class": "".concat(pre, "-header")
          }, [createVNode(Element$1, avatarProps3, null)]);
        }
        var contentNode;
        if (hasTitle || hasParagraph) {
          var $title;
          if (hasTitle) {
            var titleProps = _extends(_extends({
              prefixCls: "".concat(pre, "-title")
            }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
            $title = createVNode(SkeletonTitle$1, titleProps, null);
          }
          var paragraphNode;
          if (hasParagraph) {
            var paragraphProps = _extends(_extends({
              prefixCls: "".concat(pre, "-paragraph")
            }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
            paragraphNode = createVNode(Paragraph, paragraphProps, null);
          }
          contentNode = createVNode("div", {
            "class": "".concat(pre, "-content")
          }, [$title, paragraphNode]);
        }
        var cls = classNames(pre, (_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-with-avatar"), hasAvatar), _defineProperty(_classNames, "".concat(pre, "-active"), active), _defineProperty(_classNames, "".concat(pre, "-rtl"), direction.value === "rtl"), _defineProperty(_classNames, "".concat(pre, "-round"), round), _classNames));
        return createVNode("div", {
          "class": cls
        }, [avatarNode, contentNode]);
      }
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
var Skeleton$1 = Skeleton;
var skeletonButtonProps = function skeletonButtonProps2() {
  return _extends(_extends({}, skeletonElementProps()), {
    size: String,
    block: Boolean
  });
};
var SkeletonButton = defineComponent({
  name: "ASkeletonButton",
  props: initDefaultProps(skeletonButtonProps(), {
    size: "default"
  }),
  setup: function setup4(props) {
    var _useConfigInject = useConfigInject("skeleton", props), prefixCls = _useConfigInject.prefixCls;
    var cls = computed(function() {
      var _classNames;
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-element"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-active"), props.active), _defineProperty(_classNames, "".concat(prefixCls.value, "-block"), props.block), _classNames));
    });
    return function() {
      return createVNode("div", {
        "class": cls.value
      }, [createVNode(Element$1, _objectSpread2(_objectSpread2({}, props), {}, {
        "prefixCls": "".concat(prefixCls.value, "-button")
      }), null)]);
    };
  }
});
var SkeletonButton$1 = SkeletonButton;
var SkeletonInput = defineComponent({
  name: "ASkeletonInput",
  props: _extends(_extends({}, omit(skeletonElementProps(), ["shape"])), {
    size: String
  }),
  setup: function setup5(props) {
    var _useConfigInject = useConfigInject("skeleton", props), prefixCls = _useConfigInject.prefixCls;
    var cls = computed(function() {
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-element"), _defineProperty({}, "".concat(prefixCls.value, "-active"), props.active));
    });
    return function() {
      return createVNode("div", {
        "class": cls.value
      }, [createVNode(Element$1, _objectSpread2(_objectSpread2({}, props), {}, {
        "prefixCls": "".concat(prefixCls.value, "-input")
      }), null)]);
    };
  }
});
var SkeletonInput$1 = SkeletonInput;
var path = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";
var SkeletonImage = defineComponent({
  name: "ASkeletonImage",
  props: omit(skeletonElementProps(), ["size", "shape", "active"]),
  setup: function setup6(props) {
    var _useConfigInject = useConfigInject("skeleton", props), prefixCls = _useConfigInject.prefixCls;
    var cls = computed(function() {
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-element"));
    });
    return function() {
      return createVNode("div", {
        "class": cls.value
      }, [createVNode("div", {
        "class": "".concat(prefixCls.value, "-image")
      }, [createVNode("svg", {
        "viewBox": "0 0 1098 1024",
        "xmlns": "http://www.w3.org/2000/svg",
        "class": "".concat(prefixCls.value, "-image-svg")
      }, [createVNode("path", {
        "d": path,
        "class": "".concat(prefixCls.value, "-image-path")
      }, null)])])]);
    };
  }
});
var __unplugin_components_7 = SkeletonImage;
var avatarProps = function avatarProps2() {
  return _extends(_extends({}, skeletonElementProps()), {
    shape: String
  });
};
var SkeletonAvatar = defineComponent({
  name: "ASkeletonAvatar",
  props: initDefaultProps(avatarProps(), {
    size: "default",
    shape: "circle"
  }),
  setup: function setup7(props) {
    var _useConfigInject = useConfigInject("skeleton", props), prefixCls = _useConfigInject.prefixCls;
    var cls = computed(function() {
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-element"), _defineProperty({}, "".concat(prefixCls.value, "-active"), props.active));
    });
    return function() {
      return createVNode("div", {
        "class": cls.value
      }, [createVNode(Element$1, _objectSpread2(_objectSpread2({}, props), {}, {
        "prefixCls": "".concat(prefixCls.value, "-avatar")
      }), null)]);
    };
  }
});
var SkeletonAvatar$1 = SkeletonAvatar;
Skeleton$1.Button = SkeletonButton$1;
Skeleton$1.Avatar = SkeletonAvatar$1;
Skeleton$1.Input = SkeletonInput$1;
Skeleton$1.Image = __unplugin_components_7;
Skeleton$1.Title = SkeletonTitle$1;
Skeleton$1.install = function(app) {
  app.component(Skeleton$1.name, Skeleton$1);
  app.component(Skeleton$1.Button.name, SkeletonButton$1);
  app.component(Skeleton$1.Avatar.name, SkeletonAvatar$1);
  app.component(Skeleton$1.Input.name, SkeletonInput$1);
  app.component(Skeleton$1.Image.name, __unplugin_components_7);
  app.component(Skeleton$1.Title.name, SkeletonTitle$1);
  return app;
};
export { Skeleton$1 as S, __unplugin_components_7 as _ };
