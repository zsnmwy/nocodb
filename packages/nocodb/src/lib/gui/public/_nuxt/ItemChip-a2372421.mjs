import { o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, i as inject, r as ref, v as toDisplayString, B as withDirectives, aq as vShow, g as createVNode, x as withModifiers, k as createCommentVNode, j as createBlock, h as withCtx, e5 as Suspense, A as normalizeClass } from "./entry-3fb260b7.mjs";
import { b as ReadonlyInj, f as ActiveCellInj, I as IsFormInj, c as IsLockedInj } from "./index-c79a04bb.mjs";
import { a as useLTARStoreOrThrow } from "./useLTARStore-717af265.mjs";
import { u as useUIPermission } from "./index-9ddc029b.mjs";
import "./index-b7cb064d.mjs";
import "./Modal-ebea9398.mjs";
import "./omit-e185a391.mjs";
import "./pickAttrs-557680ad.mjs";
import "./index-fbd19973.mjs";
import "./button-b581df9e.mjs";
import "./wave-30eabfab.mjs";
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3);
}
var __unplugin_components_0 = { name: "mdi-close-thick", render };
var ItemChip_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".chip[data-v-5f8120cc]{max-width:max(100%,60px)}.chip .name[data-v-5f8120cc]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")();
const __default__ = {
  name: "ItemChip"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    value: { type: [String, Number, Boolean] },
    item: null
  },
  emits: ["unlink"],
  setup(__props, { expose, emit }) {
    expose();
    const ExpandedForm = defineAsyncComponent(() => __vitePreload(() => import("./index-7ecc7bae.mjs").then(function(n) {
      return n.i;
    }), true ? ["index-7ecc7bae.mjs","Cell-284af952.mjs","useVirtualCell-c4e19ee4.mjs","entry-3fb260b7.mjs","entry.05e9f68d.css","deepCompare-c3a57270.mjs","index-c79a04bb.mjs","index-9ddc029b.mjs","dropdown-049aa5ad.mjs","Dropdown-936f0dc5.mjs","index-fbd19973.mjs","button-b581df9e.mjs","wave-30eabfab.mjs","RightOutlined-bc158d3e.mjs","omit-e185a391.mjs","delete-outline-27729fed.mjs","menu-down-c09fa69d.mjs","Modal-ebea9398.mjs","pickAttrs-557680ad.mjs","index-18e1b69f.mjs","isNumeric-1b2178ad.mjs","TextArea-cb1658fc.mjs","Input-131cc256.mjs","antInputDirective-04640d14.mjs","Card-76812586.mjs","index-20cf3a61.mjs","TabPane-0a9cd9c3.mjs","useState-8faa8040.mjs","star-outline-63b070a7.mjs","index-255af0e2.mjs","index-d7455a19.mjs","LeftOutlined-04561eeb.mjs","index-0190fa17.mjs","SearchOutlined-205148f4.mjs","CollapsePanel-16b55852.mjs","minus-circle-outline-bf16c42a.mjs","Checkbox-b6133900.mjs","close-cda37e18.mjs","plus-e2b18616.mjs","file-copy-outline-904a1ecf.mjs","reload-0c2a0aa7.mjs","fileUtils-f5868683.mjs","index-ba9775f8.mjs"] : void 0));
    const { relatedTableMeta } = useLTARStoreOrThrow();
    const { isUIAllowed } = useUIPermission();
    const readOnly = inject(ReadonlyInj, false);
    const active = inject(ActiveCellInj, ref(false));
    const isForm = inject(IsFormInj);
    const isLocked = inject(IsLockedInj, ref(false));
    const expandedFormDlg = ref(false);
    const __returned__ = { emit, ExpandedForm, relatedTableMeta, isUIAllowed, readOnly, active, isForm, isLocked, expandedFormDlg };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "name" };
const _hoisted_2 = {
  key: 0,
  class: "flex items-center"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiCloseThick = __unplugin_components_0;
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["chip group py-1 px-2 mr-1 my-1 flex items-center bg-blue-100/60 hover:bg-blue-100/40 rounded-[2px]", { active: $setup.active }]),
    onClick: _cache[2] || (_cache[2] = ($event) => $setup.expandedFormDlg = true)
  }, [
    createBaseVNode("span", _hoisted_1, toDisplayString($props.value), 1),
    !$setup.readOnly && !$setup.isLocked && $setup.isUIAllowed("xcDatatableEditable") ? withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [
      createVNode(_component_MdiCloseThick, {
        class: "unlink-icon text-xs text-gray-500/50 group-hover:text-gray-500",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.emit("unlink"), ["stop"]))
      })
    ], 512)), [
      [vShow, $setup.active || $setup.isForm]
    ]) : createCommentVNode("", true),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        !$setup.readOnly && !$setup.isLocked && $setup.expandedFormDlg ? (openBlock(), createBlock($setup["ExpandedForm"], {
          key: 0,
          modelValue: $setup.expandedFormDlg,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.expandedFormDlg = $event),
          row: { row: $props.item, rowMeta: {}, oldRow: { ...$props.item } },
          meta: $setup.relatedTableMeta,
          "load-row": "",
          "use-meta-fields": ""
        }, null, 8, ["modelValue", "row", "meta"])) : createCommentVNode("", true)
      ]),
      _: 1
    }))
  ], 2);
}
var ItemChip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5f8120cc"]]);
export { ItemChip as default };
