import { _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, i as inject, r as ref, bZ as withAsyncContext, e as computed, o as openBlock, c as createElementBlock, b as createBaseVNode, j as createBlock, k as createCommentVNode, S as resolveDynamicComponent, g as createVNode, A as normalizeClass } from "./entry-61ceea7f.mjs";
import { e as ColumnInj, R as ReloadViewDataHookInj, h as CellValueInj, g as RowInj, f as ActiveCellInj, b as ReadonlyInj, c as IsLockedInj } from "./index-c79a04bb.mjs";
import { u as useUIPermission } from "./index-2b41c829.mjs";
import { u as useProvideLTARStore } from "./useLTARStore-f0967bf9.mjs";
import { d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-c8c479be.mjs";
import { M as MdiArrowExpand } from "./Cell-8f197eca.mjs";
import { M as MdiPlus } from "./plus-15c52e39.mjs";
import "./index-3e429aeb.mjs";
import "./Modal-d5a36a0f.mjs";
import "./omit-173fd1c5.mjs";
import "./pickAttrs-ba132318.mjs";
import "./index-cfa50bee.mjs";
import "./button-da542739.mjs";
import "./wave-52b13188.mjs";
import "./deepCompare-c3a57270.mjs";
import "./dropdown-ba657059.mjs";
import "./Dropdown-9f66da27.mjs";
import "./RightOutlined-4a9f51db.mjs";
import "./delete-outline-e19db0b9.mjs";
import "./menu-down-57034c65.mjs";
import "./index-1f166877.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./TextArea-4c687bd9.mjs";
import "./Input-081ff014.mjs";
import "./antInputDirective-04640d14.mjs";
import "./Card-637b0d8a.mjs";
import "./index-7349112e.mjs";
import "./TabPane-12ca446e.mjs";
import "./useState-068748ba.mjs";
import "./star-outline-35a0d043.mjs";
import "./index-ae866fde.mjs";
import "./index-0b1576d7.mjs";
import "./LeftOutlined-f246f0cb.mjs";
import "./index-3935e1b2.mjs";
import "./SearchOutlined-66b33d9a.mjs";
import "./CollapsePanel-3cbe710e.mjs";
import "./minus-circle-outline-fe5ab5b7.mjs";
import "./Checkbox-99b125b8.mjs";
import "./close-f98de9d8.mjs";
import "./file-copy-outline-b0187a2b.mjs";
import "./reload-23e1ac74.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-c5e00eea.mjs";
var BelongsTo_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".nc-action-icon[data-v-db219b8a]{cursor:pointer;display:none}.chips-wrapper.active .nc-action-icon[data-v-db219b8a],.chips-wrapper:hover .nc-action-icon[data-v-db219b8a]{display:inline-block}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BelongsTo",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const ItemChip = defineAsyncComponent(() => __vitePreload(() => import("./ItemChip-7d6aed4e.mjs"), true ? ["ItemChip-7d6aed4e.mjs","ItemChip.59078ca5.css","entry-61ceea7f.mjs","entry.05e9f68d.css","index-c79a04bb.mjs","index-2b41c829.mjs","useLTARStore-f0967bf9.mjs","index-3e429aeb.mjs","Modal-d5a36a0f.mjs","omit-173fd1c5.mjs","pickAttrs-ba132318.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs"] : void 0));
    const ListItems = defineAsyncComponent(() => __vitePreload(() => import("./ListItems-f4680860.mjs"), true ? ["ListItems-f4680860.mjs","ListItems.2e46f2c1.css","entry-61ceea7f.mjs","entry.05e9f68d.css","reload-23e1ac74.mjs","index-c79a04bb.mjs","useLTARStore-f0967bf9.mjs","index-3e429aeb.mjs","Modal-d5a36a0f.mjs","omit-173fd1c5.mjs","pickAttrs-ba132318.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs","useVirtualCell-c8c479be.mjs","deepCompare-c3a57270.mjs","Input-081ff014.mjs","antInputDirective-04640d14.mjs","Card-637b0d8a.mjs","index-7349112e.mjs","TabPane-12ca446e.mjs","Dropdown-9f66da27.mjs","useState-068748ba.mjs","index-0b1576d7.mjs","LeftOutlined-f246f0cb.mjs","RightOutlined-4a9f51db.mjs","index-3935e1b2.mjs","SearchOutlined-66b33d9a.mjs"] : void 0));
    const column = inject(ColumnInj);
    const reloadTrigger = inject(ReloadViewDataHookInj);
    const cellValue = inject(CellValueInj, ref(null));
    const row = inject(RowInj);
    const active = inject(ActiveCellInj);
    const readOnly = inject(ReadonlyInj, false);
    const isLocked = inject(IsLockedInj);
    const { isUIAllowed } = useUIPermission();
    const listItemsDlg = ref(false);
    const { state, isNew, removeLTARRef } = useSmartsheetRowStoreOrThrow();
    const { loadRelatedTableMeta, relatedTablePrimaryValueProp, unlink } = useProvideLTARStore(column, row, isNew, reloadTrigger.trigger);
    [__temp, __restore] = withAsyncContext(() => loadRelatedTableMeta()), await __temp, __restore();
    const addIcon = computed(() => (cellValue == null ? void 0 : cellValue.value) ? MdiArrowExpand : MdiPlus);
    const value = computed(() => {
      var _a;
      if (cellValue == null ? void 0 : cellValue.value) {
        return cellValue == null ? void 0 : cellValue.value;
      } else if (isNew.value) {
        return (_a = state == null ? void 0 : state.value) == null ? void 0 : _a[column == null ? void 0 : column.value.title];
      }
      return null;
    });
    const unlinkRef = async (rec) => {
      if (isNew.value) {
        removeLTARRef(rec, column == null ? void 0 : column.value);
      } else {
        await unlink(rec);
      }
    };
    const __returned__ = { ItemChip, ListItems, column, reloadTrigger, cellValue, row, active, readOnly, isLocked, isUIAllowed, listItemsDlg, state, isNew, removeLTARRef, loadRelatedTableMeta, relatedTablePrimaryValueProp, unlink, addIcon, value, unlinkRef };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "chips flex items-center flex-1" };
const _hoisted_2 = {
  key: 0,
  class: "flex justify-end gap-1 min-h-[30px] items-center"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["flex w-full chips-wrapper items-center", { active: $setup.active }])
  }, [
    createBaseVNode("div", _hoisted_1, [
      $setup.value && $setup.relatedTablePrimaryValueProp ? (openBlock(), createBlock($setup["ItemChip"], {
        key: 0,
        item: $setup.value,
        value: $setup.value[$setup.relatedTablePrimaryValueProp],
        onUnlink: _cache[0] || (_cache[0] = ($event) => $setup.unlinkRef($setup.value))
      }, null, 8, ["item", "value"])) : createCommentVNode("", true)
    ]),
    !$setup.readOnly && !$setup.isLocked && $setup.isUIAllowed("xcDatatableEditable") ? (openBlock(), createElementBlock("div", _hoisted_2, [
      (openBlock(), createBlock(resolveDynamicComponent($setup.addIcon), {
        class: "text-sm nc-action-icon text-gray-500/50 hover:text-gray-500 select-none group-hover:text-gray-500 nc-plus",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.listItemsDlg = true)
      }))
    ])) : createCommentVNode("", true),
    createVNode($setup["ListItems"], {
      modelValue: $setup.listItemsDlg,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.listItemsDlg = $event),
      onAttachRecord: _cache[3] || (_cache[3] = ($event) => $setup.listItemsDlg = true)
    }, null, 8, ["modelValue"])
  ], 2);
}
var BelongsTo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-db219b8a"]]);
export { BelongsTo as default };
