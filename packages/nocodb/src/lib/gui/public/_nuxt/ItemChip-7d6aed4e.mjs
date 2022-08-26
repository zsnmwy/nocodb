import { o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, i as inject, r as ref, v as toDisplayString, B as withDirectives, aq as vShow, g as createVNode, x as withModifiers, k as createCommentVNode, j as createBlock, h as withCtx, e5 as Suspense, A as normalizeClass } from "./entry-61ceea7f.mjs";
import { b as ReadonlyInj, f as ActiveCellInj, I as IsFormInj, c as IsLockedInj } from "./index-c79a04bb.mjs";
import { u as useUIPermission } from "./index-2b41c829.mjs";
import { a as useLTARStoreOrThrow } from "./useLTARStore-f0967bf9.mjs";
import "./index-3e429aeb.mjs";
import "./Modal-d5a36a0f.mjs";
import "./omit-173fd1c5.mjs";
import "./pickAttrs-ba132318.mjs";
import "./index-cfa50bee.mjs";
import "./button-da542739.mjs";
import "./wave-52b13188.mjs";
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
    const ExpandedForm = defineAsyncComponent(() => __vitePreload(() => import("./index-44c1b2d3.mjs").then(function(n) {
      return n.i;
    }), true ? ["index-44c1b2d3.mjs","Cell-8f197eca.mjs","useVirtualCell-c8c479be.mjs","entry-61ceea7f.mjs","entry.05e9f68d.css","deepCompare-c3a57270.mjs","index-c79a04bb.mjs","index-2b41c829.mjs","dropdown-ba657059.mjs","Dropdown-9f66da27.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs","RightOutlined-4a9f51db.mjs","omit-173fd1c5.mjs","delete-outline-e19db0b9.mjs","menu-down-57034c65.mjs","Modal-d5a36a0f.mjs","pickAttrs-ba132318.mjs","index-1f166877.mjs","isNumeric-1b2178ad.mjs","TextArea-4c687bd9.mjs","Input-081ff014.mjs","antInputDirective-04640d14.mjs","Card-637b0d8a.mjs","index-7349112e.mjs","TabPane-12ca446e.mjs","useState-068748ba.mjs","star-outline-35a0d043.mjs","index-ae866fde.mjs","index-0b1576d7.mjs","LeftOutlined-f246f0cb.mjs","index-3935e1b2.mjs","SearchOutlined-66b33d9a.mjs","CollapsePanel-3cbe710e.mjs","minus-circle-outline-fe5ab5b7.mjs","Checkbox-99b125b8.mjs","close-f98de9d8.mjs","plus-15c52e39.mjs","file-copy-outline-b0187a2b.mjs","reload-23e1ac74.mjs","fileUtils-f5868683.mjs","index-c5e00eea.mjs"] : void 0));
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
