import { d as defineComponent, aE as useConfigInject, aJ as _defineProperty, aL as getPropsSlot, g as createVNode, aH as PropTypes, e as computed, o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, j as createBlock, h as withCtx, v as toDisplayString, k as createCommentVNode, y as createTextVNode, dI as _imports_0, am as __nuxt_component_1$1 } from "./entry-fe2e349d.mjs";
import { C as Card } from "./Card-6955c823.mjs";
import { B as Button } from "./button-85170489.mjs";
var cardMetaProps = function cardMetaProps2() {
  return {
    prefixCls: String,
    title: PropTypes.any,
    description: PropTypes.any,
    avatar: PropTypes.any
  };
};
var __unplugin_components_0 = defineComponent({
  name: "ACardMeta",
  props: cardMetaProps(),
  slots: ["title", "description", "avatar"],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("card", props), prefixCls = _useConfigInject.prefixCls;
    return function() {
      var classString = _defineProperty({}, "".concat(prefixCls.value, "-meta"), true);
      var avatar = getPropsSlot(slots, props, "avatar");
      var title = getPropsSlot(slots, props, "title");
      var description = getPropsSlot(slots, props, "description");
      var avatarDom = avatar ? createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-avatar")
      }, [avatar]) : null;
      var titleDom = title ? createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-title")
      }, [title]) : null;
      var descriptionDom = description ? createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-description")
      }, [description]) : null;
      var MetaDetail = titleDom || descriptionDom ? createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-detail")
      }, [titleDom, descriptionDom]) : null;
      return createVNode("div", {
        "class": classString
      }, [avatarDom, MetaDetail]);
    };
  }
});
var cardGridProps = function cardGridProps2() {
  return {
    prefixCls: String,
    hoverable: {
      type: Boolean,
      default: true
    }
  };
};
var Grid = defineComponent({
  name: "ACardGrid",
  __ANT_CARD_GRID: true,
  props: cardGridProps(),
  setup: function setup2(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject("card", props), prefixCls = _useConfigInject.prefixCls;
    var classNames = computed(function() {
      var _ref2;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-grid"), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-grid-hoverable"), props.hoverable), _ref2;
    });
    return function() {
      var _a;
      return createVNode("div", {
        "class": classNames.value
      }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
Card.Meta = __unplugin_components_0;
Card.Grid = Grid;
Card.install = function(app) {
  app.component(Card.name, Card);
  app.component(__unplugin_components_0.name, __unplugin_components_0);
  app.component(Grid.name, Grid);
  return app;
};
const _hoisted_1$2 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var MdiTwitter = { name: "mdi-twitter", render: render$1 };
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_1 = { name: "mdi-cards-heart", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Sponsors",
  props: {
    nav: { type: Boolean, default: false }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("img", {
  class: "max-h-[180px] !rounded-t-lg",
  alt: "cover",
  src: _imports_0
}, null, -1);
const _hoisted_2 = {
  key: 0,
  class: "text-xl pb-4"
};
const _hoisted_3 = {
  key: 0,
  class: "py-5 text-sm"
};
const _hoisted_4 = { class: "flex justify-center" };
const _hoisted_5 = { class: "flex items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_card_meta = __unplugin_components_0;
  const _component_mdi_cards_heart = __unplugin_components_1;
  const _component_a_button = Button;
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_a_card = Card;
  return openBlock(), createBlock(_component_a_card, { class: "w-[300px] shadow-sm !rounded-lg" }, {
    cover: withCtx(() => [
      _hoisted_1
    ]),
    default: withCtx(() => [
      createVNode(_component_a_card_meta, null, {
        title: withCtx(() => [
          !$props.nav ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.$t("msg.info.sponsor.header")), 1)) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      !$props.nav ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.$t("msg.info.sponsor.message")), 1)) : createCommentVNode("", true),
      createBaseVNode("div", _hoisted_4, [
        createVNode(_component_nuxt_link, {
          href: "https://github.com/sponsors/nocodb",
          target: "_blank"
        }, {
          default: withCtx(() => [
            createVNode(_component_a_button, {
              class: "!shadow rounded",
              size: "large"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_mdi_cards_heart, { class: "text-red-500 mr-2" }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("activity.sponsorUs")), 1)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
var __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { MdiTwitter as M, __nuxt_component_1 as _ };
