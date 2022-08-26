import { _ as _export_sfc, d as defineComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, dF as _imports_0, T as normalizeStyle } from "./entry-649fbf77.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NocoIcon",
  props: {
    width: { default: 90 },
    height: { default: 90 }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["width", "height"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    style: normalizeStyle({ left: `calc(50% - ${$props.width / 2}px)`, top: `-${$props.height * 0.6}px` }),
    class: "absolute rounded-lg !bg-primary"
  }, [
    createBaseVNode("img", {
      width: $props.width,
      height: $props.height,
      alt: "NocoDB",
      src: _imports_0
    }, null, 8, _hoisted_1)
  ], 4);
}
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __nuxt_component_0 as _ };
