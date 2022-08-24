import { _ as _export_sfc, o as openBlock, j as createBlock, h as withCtx, a5 as renderSlot, dE as __nuxt_component_2 } from "./entry-3fb260b7.mjs";
const _sfc_main = {
  name: "General"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __nuxt_component_2;
  return openBlock(), createBlock(_component_NuxtLayout, { name: "default" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "sidebar")
    ]),
    _: 3
  });
}
var general = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { general as default };
