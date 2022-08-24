import { _ as _export_sfc, d as defineComponent, i as inject, o as openBlock, c as createElementBlock, v as toDisplayString } from "./entry-3fb260b7.mjs";
import { h as CellValueInj } from "./index-c79a04bb.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Rollup",
  setup(__props, { expose }) {
    expose();
    const value = inject(CellValueInj);
    const __returned__ = { value };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "text-center pl-3" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", _hoisted_1, toDisplayString($setup.value), 1);
}
var Rollup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Rollup as default };
