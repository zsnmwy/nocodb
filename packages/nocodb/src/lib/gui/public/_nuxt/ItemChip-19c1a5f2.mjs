import { o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, i as inject, r as ref, v as toDisplayString, B as withDirectives, aq as vShow, g as createVNode, x as withModifiers, k as createCommentVNode, j as createBlock, h as withCtx, e5 as Suspense, A as normalizeClass } from "./entry-d9bc2aad.mjs";
import { b as ReadonlyInj, f as ActiveCellInj, I as IsFormInj, c as IsLockedInj } from "./index-c79a04bb.mjs";
import { u as useUIPermission } from "./index-3de9c023.mjs";
import { a as useLTARStoreOrThrow } from "./useLTARStore-b10528dd.mjs";
import "./index-32959b50.mjs";
import "./Modal-3070863e.mjs";
import "./omit-79be01c9.mjs";
import "./pickAttrs-fc04d54e.mjs";
import "./index-16f90ce9.mjs";
import "./button-3d871114.mjs";
import "./wave-d4537590.mjs";
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
    const ExpandedForm = defineAsyncComponent(() => __vitePreload(() => import("./index-fb7fe535.mjs").then(function(n) {
      return n.i;
    }), true ? ["index-fb7fe535.mjs","Cell-0c4aa7dc.mjs","useVirtualCell-26259a59.mjs","entry-d9bc2aad.mjs","entry.05e9f68d.css","deepCompare-c3a57270.mjs","index-c79a04bb.mjs","index-3de9c023.mjs","dropdown-5e0a28d4.mjs","Dropdown-ca677e8d.mjs","index-16f90ce9.mjs","button-3d871114.mjs","wave-d4537590.mjs","RightOutlined-05bf04ed.mjs","omit-79be01c9.mjs","delete-outline-29401aa6.mjs","menu-down-f001ffbb.mjs","Modal-3070863e.mjs","pickAttrs-fc04d54e.mjs","index-1ad4e0b9.mjs","isNumeric-1b2178ad.mjs","TextArea-aec9452a.mjs","Input-11f8ddea.mjs","antInputDirective-04640d14.mjs","Card-59408c6a.mjs","index-fd7ac4f7.mjs","TabPane-b435e2ca.mjs","useState-7c8b49a7.mjs","star-outline-a2e25035.mjs","index-44e9a035.mjs","index-c696756a.mjs","LeftOutlined-fc38eee0.mjs","index-0b813702.mjs","SearchOutlined-8238e142.mjs","CollapsePanel-35d20477.mjs","minus-circle-outline-f6556adb.mjs","Checkbox-4ea45600.mjs","close-e1c8b11f.mjs","plus-e8140861.mjs","file-copy-outline-e7990d77.mjs","reload-63954944.mjs","fileUtils-f5868683.mjs","index-43905f62.mjs"] : void 0));
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
