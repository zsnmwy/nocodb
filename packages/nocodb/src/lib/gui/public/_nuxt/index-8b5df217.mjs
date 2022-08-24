import { _ as __nuxt_component_1 } from "./Sponsors-c31ded29.mjs";
import { _ as __nuxt_component_1$1 } from "./SocialCard-b2d64f36.mjs";
import { _ as _export_sfc, d as defineComponent, $ as useRoute, b_ as resolveComponent, o as openBlock, j as createBlock, h as withCtx, dE as __nuxt_component_2, b as createBaseVNode, g as createVNode, cz as TransitionGroup, k as createCommentVNode } from "./entry-3fb260b7.mjs";
import "./Card-76812586.mjs";
import "./index-20cf3a61.mjs";
import "./TabPane-0a9cd9c3.mjs";
import "./Dropdown-936f0dc5.mjs";
import "./useState-8faa8040.mjs";
import "./omit-e185a391.mjs";
import "./button-b581df9e.mjs";
import "./wave-30eabfab.mjs";
import "./discord-6a5f6b2c.mjs";
import "./star-outline-63b070a7.mjs";
import "./index-255af0e2.mjs";
import "./index-d7455a19.mjs";
import "./LeftOutlined-04561eeb.mjs";
import "./RightOutlined-bc158d3e.mjs";
import "./index-0190fa17.mjs";
import "./antInputDirective-04640d14.mjs";
import "./pickAttrs-557680ad.mjs";
import "./SearchOutlined-205148f4.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const route = useRoute();
    const __returned__ = { route };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "min-h-[calc(100vh_-_var(--header-height))] h-auto bg-primary bg-opacity-5 flex flex-col lg:flex-row flex-wrap gap-6 py-6 px-12 pt-65px" };
const _hoisted_2 = { class: "flex-1 justify-end hidden xl:flex" };
const _hoisted_3 = { class: "min-w-2/4 xl:max-w-2/4 w-full mx-auto" };
const _hoisted_4 = { class: "flex flex-1 justify-between gap-6 lg:block" };
const _hoisted_5 = { class: "block mt-0 !lg:mt-6 xl:hidden" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GeneralSponsors = __nuxt_component_1;
  const _component_NuxtPage = resolveComponent("NuxtPage");
  const _component_GeneralSocialCard = __nuxt_component_1$1;
  const _component_NuxtLayout = __nuxt_component_2;
  return openBlock(), createBlock(_component_NuxtLayout, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            createVNode(_component_GeneralSponsors)
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_NuxtPage)
        ]),
        createBaseVNode("div", _hoisted_4, [
          $setup.route.name === "index-index" ? (openBlock(), createBlock(TransitionGroup, {
            key: 0,
            name: "page",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(_component_GeneralSocialCard)
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_GeneralSponsors)
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
