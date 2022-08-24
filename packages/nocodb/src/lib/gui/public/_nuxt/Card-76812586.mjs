import { b9 as withInstall, c0 as Row, c1 as Col, d as defineComponent, aH as PropTypes, aE as useConfigInject, c2 as filterEmptyWithUndefined, aM as flattenChildren, aJ as _defineProperty, g as createVNode, bf as devWarning, a5 as renderSlot, c3 as isVNode, c4 as isEmptyElement, c5 as isPlainObject } from "./entry-3fb260b7.mjs";
import "./index-20cf3a61.mjs";
import { T as Tabs } from "./TabPane-0a9cd9c3.mjs";
var __unplugin_components_3 = withInstall(Row);
var __unplugin_components_2 = withInstall(Col);
var TabPane = Tabs.TabPane;
var cardProps = function cardProps2() {
  return {
    prefixCls: String,
    title: PropTypes.any,
    extra: PropTypes.any,
    bordered: {
      type: Boolean,
      default: true
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    headStyle: {
      type: Object,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    actions: PropTypes.any,
    tabList: {
      type: Array
    },
    tabBarExtraContent: PropTypes.any,
    activeTabKey: String,
    defaultActiveTabKey: String,
    cover: PropTypes.any,
    onTabChange: {
      type: Function
    }
  };
};
var Card = defineComponent({
  name: "ACard",
  props: cardProps(),
  slots: ["title", "extra", "tabBarExtraContent", "actions", "cover", "customTab"],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("card", props), prefixCls = _useConfigInject.prefixCls, direction = _useConfigInject.direction, size = _useConfigInject.size;
    var getAction = function getAction2(actions) {
      var actionList = actions.map(function(action, index) {
        return isVNode(action) && !isEmptyElement(action) || !isVNode(action) ? createVNode("li", {
          "style": {
            width: "".concat(100 / actions.length, "%")
          },
          "key": "action-".concat(index)
        }, [createVNode("span", null, [action])]) : null;
      });
      return actionList;
    };
    var triggerTabChange = function triggerTabChange2(key) {
      var _a;
      (_a = props.onTabChange) === null || _a === void 0 ? void 0 : _a.call(props, key);
    };
    var isContainGrid = function isContainGrid2() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var containGrid;
      obj.forEach(function(element) {
        if (element && isPlainObject(element.type) && element.type.__ANT_CARD_GRID) {
          containGrid = true;
        }
      });
      return containGrid;
    };
    return function() {
      var _classString, _tabsProps;
      var _a, _b, _c, _d, _e, _f;
      var _props$headStyle = props.headStyle, headStyle = _props$headStyle === void 0 ? {} : _props$headStyle, _props$bodyStyle = props.bodyStyle, bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle, loading = props.loading, _props$bordered = props.bordered, bordered = _props$bordered === void 0 ? true : _props$bordered, type = props.type, tabList = props.tabList, hoverable = props.hoverable, activeTabKey = props.activeTabKey, defaultActiveTabKey = props.defaultActiveTabKey, _props$tabBarExtraCon = props.tabBarExtraContent, tabBarExtraContent = _props$tabBarExtraCon === void 0 ? filterEmptyWithUndefined((_a = slots.tabBarExtraContent) === null || _a === void 0 ? void 0 : _a.call(slots)) : _props$tabBarExtraCon, _props$title = props.title, title = _props$title === void 0 ? filterEmptyWithUndefined((_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots)) : _props$title, _props$extra = props.extra, extra = _props$extra === void 0 ? filterEmptyWithUndefined((_c = slots.extra) === null || _c === void 0 ? void 0 : _c.call(slots)) : _props$extra, _props$actions = props.actions, actions = _props$actions === void 0 ? filterEmptyWithUndefined((_d = slots.actions) === null || _d === void 0 ? void 0 : _d.call(slots)) : _props$actions, _props$cover = props.cover, cover = _props$cover === void 0 ? filterEmptyWithUndefined((_e = slots.cover) === null || _e === void 0 ? void 0 : _e.call(slots)) : _props$cover;
      var children = flattenChildren((_f = slots.default) === null || _f === void 0 ? void 0 : _f.call(slots));
      var pre = prefixCls.value;
      var classString = (_classString = {}, _defineProperty(_classString, "".concat(pre), true), _defineProperty(_classString, "".concat(pre, "-loading"), loading), _defineProperty(_classString, "".concat(pre, "-bordered"), bordered), _defineProperty(_classString, "".concat(pre, "-hoverable"), !!hoverable), _defineProperty(_classString, "".concat(pre, "-contain-grid"), isContainGrid(children)), _defineProperty(_classString, "".concat(pre, "-contain-tabs"), tabList && tabList.length), _defineProperty(_classString, "".concat(pre, "-").concat(size.value), size.value), _defineProperty(_classString, "".concat(pre, "-type-").concat(type), !!type), _defineProperty(_classString, "".concat(pre, "-rtl"), direction.value === "rtl"), _classString);
      var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === "0px" ? {
        padding: "24px"
      } : void 0;
      var block = createVNode("div", {
        "class": "".concat(pre, "-loading-block")
      }, null);
      var loadingBlock = createVNode("div", {
        "class": "".concat(pre, "-loading-content"),
        "style": loadingBlockStyle
      }, [createVNode(__unplugin_components_3, {
        "gutter": 8
      }, {
        default: function _default() {
          return [createVNode(__unplugin_components_2, {
            "span": 22
          }, {
            default: function _default2() {
              return [block];
            }
          })];
        }
      }), createVNode(__unplugin_components_3, {
        "gutter": 8
      }, {
        default: function _default() {
          return [createVNode(__unplugin_components_2, {
            "span": 8
          }, {
            default: function _default2() {
              return [block];
            }
          }), createVNode(__unplugin_components_2, {
            "span": 15
          }, {
            default: function _default2() {
              return [block];
            }
          })];
        }
      }), createVNode(__unplugin_components_3, {
        "gutter": 8
      }, {
        default: function _default() {
          return [createVNode(__unplugin_components_2, {
            "span": 6
          }, {
            default: function _default2() {
              return [block];
            }
          }), createVNode(__unplugin_components_2, {
            "span": 18
          }, {
            default: function _default2() {
              return [block];
            }
          })];
        }
      }), createVNode(__unplugin_components_3, {
        "gutter": 8
      }, {
        default: function _default() {
          return [createVNode(__unplugin_components_2, {
            "span": 13
          }, {
            default: function _default2() {
              return [block];
            }
          }), createVNode(__unplugin_components_2, {
            "span": 9
          }, {
            default: function _default2() {
              return [block];
            }
          })];
        }
      }), createVNode(__unplugin_components_3, {
        "gutter": 8
      }, {
        default: function _default() {
          return [createVNode(__unplugin_components_2, {
            "span": 4
          }, {
            default: function _default2() {
              return [block];
            }
          }), createVNode(__unplugin_components_2, {
            "span": 3
          }, {
            default: function _default2() {
              return [block];
            }
          }), createVNode(__unplugin_components_2, {
            "span": 16
          }, {
            default: function _default2() {
              return [block];
            }
          })];
        }
      })]);
      var hasActiveTabKey = activeTabKey !== void 0;
      var tabsProps = (_tabsProps = {
        size: "large"
      }, _defineProperty(_tabsProps, hasActiveTabKey ? "activeKey" : "defaultActiveKey", hasActiveTabKey ? activeTabKey : defaultActiveTabKey), _defineProperty(_tabsProps, "onChange", triggerTabChange), _defineProperty(_tabsProps, "class", "".concat(pre, "-head-tabs")), _tabsProps);
      var head;
      var tabs = tabList && tabList.length ? createVNode(Tabs, tabsProps, {
        default: function _default() {
          return [tabList.map(function(item) {
            var temp = item.tab, itemSlots = item.slots;
            var name = itemSlots === null || itemSlots === void 0 ? void 0 : itemSlots.tab;
            devWarning(!itemSlots, "Card", "tabList slots is deprecated, Please use `customTab` instead.");
            var tab = temp !== void 0 ? temp : slots[name] ? slots[name](item) : null;
            tab = renderSlot(slots, "customTab", item, function() {
              return [tab];
            });
            return createVNode(TabPane, {
              "tab": tab,
              "key": item.key,
              "disabled": item.disabled
            }, null);
          })];
        },
        rightExtra: tabBarExtraContent ? function() {
          return tabBarExtraContent;
        } : null
      }) : null;
      if (title || extra || tabs) {
        head = createVNode("div", {
          "class": "".concat(pre, "-head"),
          "style": headStyle
        }, [createVNode("div", {
          "class": "".concat(pre, "-head-wrapper")
        }, [title && createVNode("div", {
          "class": "".concat(pre, "-head-title")
        }, [title]), extra && createVNode("div", {
          "class": "".concat(pre, "-extra")
        }, [extra])]), tabs]);
      }
      var coverDom = cover ? createVNode("div", {
        "class": "".concat(pre, "-cover")
      }, [cover]) : null;
      var body = createVNode("div", {
        "class": "".concat(pre, "-body"),
        "style": bodyStyle
      }, [loading ? loadingBlock : children]);
      var actionDom = actions && actions.length ? createVNode("ul", {
        "class": "".concat(pre, "-actions")
      }, [getAction(actions)]) : null;
      return createVNode("div", {
        "class": classString,
        "ref": "cardContainerRef"
      }, [head, coverDom, children && children.length ? body : null, actionDom]);
    };
  }
});
var Card$1 = Card;
export { Card$1 as C, __unplugin_components_2 as _, __unplugin_components_3 as a };
