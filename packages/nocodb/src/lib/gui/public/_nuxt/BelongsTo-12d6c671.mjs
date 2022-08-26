import { _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, i as inject, r as ref, bZ as withAsyncContext, e as computed, o as openBlock, c as createElementBlock, b as createBaseVNode, j as createBlock, k as createCommentVNode, S as resolveDynamicComponent, g as createVNode, A as normalizeClass } from "./entry-fe2e349d.mjs";
import { e as ColumnInj, R as ReloadViewDataHookInj, h as CellValueInj, g as RowInj, f as ActiveCellInj, b as ReadonlyInj, c as IsLockedInj } from "./index-c79a04bb.mjs";
import { u as useProvideLTARStore } from "./useLTARStore-91f1276e.mjs";
import { u as useUIPermission } from "./index-03dd499c.mjs";
import { d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-79bce99d.mjs";
import { M as MdiArrowExpand } from "./Cell-e9645bc0.mjs";
import { M as MdiPlus } from "./plus-0f42eb0d.mjs";
import "./index-6bff7ef6.mjs";
import "./Modal-6ec32f67.mjs";
import "./omit-bb2337ec.mjs";
import "./pickAttrs-251338d2.mjs";
import "./index-e4541ed7.mjs";
import "./button-85170489.mjs";
import "./wave-51bede47.mjs";
import "./deepCompare-c3a57270.mjs";
import "./dropdown-2e9bbb3f.mjs";
import "./Dropdown-d7fe3574.mjs";
import "./RightOutlined-593486a9.mjs";
import "./delete-outline-809194cc.mjs";
import "./menu-down-d9199e40.mjs";
import "./index-8ed197cb.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./TextArea-19a941ff.mjs";
import "./Input-a826c0f4.mjs";
import "./antInputDirective-04640d14.mjs";
import "./Card-6955c823.mjs";
import "./index-d5212021.mjs";
import "./TabPane-95cc1419.mjs";
import "./useState-b38ec006.mjs";
import "./star-outline-d6c974b1.mjs";
import "./index-e208122b.mjs";
import "./index-b5c7d9eb.mjs";
import "./LeftOutlined-b3330d93.mjs";
import "./index-80dcfdcf.mjs";
import "./SearchOutlined-a319fe5d.mjs";
import "./CollapsePanel-4933ec03.mjs";
import "./minus-circle-outline-a8e6550b.mjs";
import "./Checkbox-fdabe561.mjs";
import "./close-f6b140f8.mjs";
import "./file-copy-outline-caf79cf0.mjs";
import "./reload-21536936.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-964d6d26.mjs";
var BelongsTo_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".nc-action-icon[data-v-db219b8a]{cursor:pointer;display:none}.chips-wrapper.active .nc-action-icon[data-v-db219b8a],.chips-wrapper:hover .nc-action-icon[data-v-db219b8a]{display:inline-block}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BelongsTo",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const ItemChip = defineAsyncComponent(() => __vitePreload(() => import("./ItemChip-3df768ad.mjs"), true ? ["ItemChip-3df768ad.mjs","ItemChip.59078ca5.css","entry-fe2e349d.mjs","entry.05e9f68d.css","index-c79a04bb.mjs","useLTARStore-91f1276e.mjs","index-6bff7ef6.mjs","Modal-6ec32f67.mjs","omit-bb2337ec.mjs","pickAttrs-251338d2.mjs","index-e4541ed7.mjs","button-85170489.mjs","wave-51bede47.mjs","index-03dd499c.mjs"] : void 0));
    const ListItems = defineAsyncComponent(() => __vitePreload(() => import("./ListItems-75177ff9.mjs"), true ? ["ListItems-75177ff9.mjs","ListItems.2e46f2c1.css","entry-fe2e349d.mjs","entry.05e9f68d.css","reload-21536936.mjs","useLTARStore-91f1276e.mjs","index-c79a04bb.mjs","index-6bff7ef6.mjs","Modal-6ec32f67.mjs","omit-bb2337ec.mjs","pickAttrs-251338d2.mjs","index-e4541ed7.mjs","button-85170489.mjs","wave-51bede47.mjs","useVirtualCell-79bce99d.mjs","deepCompare-c3a57270.mjs","Input-a826c0f4.mjs","antInputDirective-04640d14.mjs","Card-6955c823.mjs","index-d5212021.mjs","TabPane-95cc1419.mjs","Dropdown-d7fe3574.mjs","useState-b38ec006.mjs","index-b5c7d9eb.mjs","LeftOutlined-b3330d93.mjs","RightOutlined-593486a9.mjs","index-80dcfdcf.mjs","SearchOutlined-a319fe5d.mjs"] : void 0));
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
