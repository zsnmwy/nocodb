import { _ as _export_sfc, d as defineComponent, i as inject, a9 as useProject, r as ref, e as computed, e4 as replaceUrlsWithLink, o as openBlock, c as createElementBlock, j as createBlock, h as withCtx, b as createBaseVNode, v as toDisplayString, k as createCommentVNode, X as __unplugin_components_1 } from "./entry-fe2e349d.mjs";
import { e as ColumnInj, h as CellValueInj } from "./index-c79a04bb.mjs";
import { h as handleTZ } from "./index-8ed197cb.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Formula",
  setup(__props, { expose }) {
    expose();
    const column = inject(ColumnInj);
    const value = inject(CellValueInj);
    const { isPg } = useProject();
    const showEditFormulaWarning = ref(false);
    const showEditFormulaWarningMessage = () => {
      showEditFormulaWarning.value = true;
      setTimeout(() => {
        showEditFormulaWarning.value = false;
      }, 3e3);
    };
    const result = isPg ? handleTZ(value) : value;
    const urls = computed(() => replaceUrlsWithLink(result.value));
    const __returned__ = { column, value, isPg, showEditFormulaWarning, showEditFormulaWarningMessage, result, urls };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "font-bold" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", null, "ERR!", -1);
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = { key: 1 };
const _hoisted_5 = {
  key: 2,
  class: "text-left text-wrap mt-2 text-[#e65100]"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_tooltip = __unplugin_components_1;
  return openBlock(), createElementBlock("div", null, [
    $setup.column && $setup.column.colOptions && $setup.column.colOptions.error ? (openBlock(), createBlock(_component_a_tooltip, {
      key: 0,
      placement: "bottom",
      class: "text-orange-700"
    }, {
      title: withCtx(() => [
        createBaseVNode("span", _hoisted_1, toDisplayString($setup.column.colOptions.error), 1)
      ]),
      default: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    })) : createCommentVNode("", true),
    createBaseVNode("div", {
      class: "p-2",
      onDblclick: $setup.showEditFormulaWarningMessage
    }, [
      $setup.urls ? (openBlock(), createElementBlock("div", {
        key: 0,
        innerHTML: $setup.urls
      }, null, 8, _hoisted_3)) : (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString($setup.result), 1)),
      $setup.showEditFormulaWarning ? (openBlock(), createElementBlock("div", _hoisted_5, " Warning: Formula fields should be configured in the field menu dropdown. ")) : createCommentVNode("", true)
    ], 32)
  ]);
}
var Formula = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Formula as default };
