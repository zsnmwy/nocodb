import { _ as _export_sfc, d as defineComponent, af as createPropsRestProxy, L as useVModel, bU as onKeyDown, w as watch, o as openBlock, j as createBlock, b as createBaseVNode, a5 as renderSlot, aj as mergeProps, dn as Teleport, c as createElementBlock } from "./entry-3fb260b7.mjs";
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Overlay",
  props: {
    modelValue: null,
    inline: { type: Boolean, default: false },
    target: null,
    teleportDisabled: { default: false },
    transition: { type: Boolean, default: true }
  },
  emits: ["update:modelValue", "close", "open"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const rest = createPropsRestProxy(__props, ["transition", "teleportDisabled", "inline", "target"]);
    const vModel = useVModel(rest, "modelValue", emits);
    onKeyDown("Escape", () => {
      vModel.value = false;
    });
    watch(vModel, (nextVal) => {
      if (nextVal)
        emits("open");
      else
        emits("close");
    });
    const __returned__ = { emits, vModel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, {
    disabled: $props.teleportDisabled || $props.inline && !$props.target,
    to: $props.target || "body"
  }, [
    createBaseVNode("div", mergeProps(_ctx.$attrs, {
      class: [[
        $setup.vModel ? "opacity-100" : "opacity-0 pointer-events-none",
        $props.inline ? "absolute" : "fixed",
        $props.transition ? "transition-opacity duration-200 ease-in-out" : ""
      ], "z-100 top-0 left-0 bottom-0 right-0 bg-gray-700/75"]
    }), [
      renderSlot(_ctx.$slots, "default", { isOpen: $setup.vModel })
    ], 16)
  ], 8, ["disabled", "to"]);
}
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const _hoisted_1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19 19H8q-.825 0-1.412-.587Q6 17.825 6 17V3q0-.825.588-1.413Q7.175 1 8 1h7l6 6v10q0 .825-.587 1.413Q19.825 19 19 19ZM14 8V3H8v14h11V8ZM4 23q-.825 0-1.412-.587Q2 21.825 2 21V7h2v14h11v2ZM8 3v5v-5v14V3Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var __unplugin_components_0 = { name: "material-symbols-file-copy-outline", render };
export { __unplugin_components_0 as _, __nuxt_component_0 as a };
