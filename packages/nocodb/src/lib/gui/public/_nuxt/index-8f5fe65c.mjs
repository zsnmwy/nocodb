import { _ as __nuxt_component_1 } from "./Sponsors-41e85fe3.mjs";
import { _ as __nuxt_component_1$1 } from "./SocialCard-1d724c3b.mjs";
import { _ as _export_sfc, d as defineComponent, $ as useRoute, b_ as resolveComponent, o as openBlock, j as createBlock, h as withCtx, dE as __nuxt_component_2, b as createBaseVNode, g as createVNode, cz as TransitionGroup, k as createCommentVNode } from "./entry-fe2e349d.mjs";
import "./Card-6955c823.mjs";
import "./index-d5212021.mjs";
import "./TabPane-95cc1419.mjs";
import "./Dropdown-d7fe3574.mjs";
import "./useState-b38ec006.mjs";
import "./omit-bb2337ec.mjs";
import "./button-85170489.mjs";
import "./wave-51bede47.mjs";
import "./discord-72f0b1e1.mjs";
import "./star-outline-d6c974b1.mjs";
import "./index-e208122b.mjs";
import "./index-b5c7d9eb.mjs";
import "./LeftOutlined-b3330d93.mjs";
import "./RightOutlined-593486a9.mjs";
import "./index-80dcfdcf.mjs";
import "./antInputDirective-04640d14.mjs";
import "./pickAttrs-251338d2.mjs";
import "./SearchOutlined-a319fe5d.mjs";
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
