import { _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, i as inject, r as ref, bZ as withAsyncContext, e as computed, o as openBlock, c as createElementBlock, b as createBaseVNode, j as createBlock, k as createCommentVNode, S as resolveDynamicComponent, g as createVNode, A as normalizeClass } from "./entry-d9bc2aad.mjs";
import { e as ColumnInj, R as ReloadViewDataHookInj, h as CellValueInj, g as RowInj, f as ActiveCellInj, b as ReadonlyInj, c as IsLockedInj } from "./index-c79a04bb.mjs";
import { u as useUIPermission } from "./index-3de9c023.mjs";
import { u as useProvideLTARStore } from "./useLTARStore-b10528dd.mjs";
import { d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-26259a59.mjs";
import { M as MdiArrowExpand } from "./Cell-0c4aa7dc.mjs";
import { M as MdiPlus } from "./plus-e8140861.mjs";
import "./index-32959b50.mjs";
import "./Modal-3070863e.mjs";
import "./omit-79be01c9.mjs";
import "./pickAttrs-fc04d54e.mjs";
import "./index-16f90ce9.mjs";
import "./button-3d871114.mjs";
import "./wave-d4537590.mjs";
import "./deepCompare-c3a57270.mjs";
import "./dropdown-5e0a28d4.mjs";
import "./Dropdown-ca677e8d.mjs";
import "./RightOutlined-05bf04ed.mjs";
import "./delete-outline-29401aa6.mjs";
import "./menu-down-f001ffbb.mjs";
import "./index-1ad4e0b9.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./TextArea-aec9452a.mjs";
import "./Input-11f8ddea.mjs";
import "./antInputDirective-04640d14.mjs";
import "./Card-59408c6a.mjs";
import "./index-fd7ac4f7.mjs";
import "./TabPane-b435e2ca.mjs";
import "./useState-7c8b49a7.mjs";
import "./star-outline-a2e25035.mjs";
import "./index-44e9a035.mjs";
import "./index-c696756a.mjs";
import "./LeftOutlined-fc38eee0.mjs";
import "./index-0b813702.mjs";
import "./SearchOutlined-8238e142.mjs";
import "./CollapsePanel-35d20477.mjs";
import "./minus-circle-outline-f6556adb.mjs";
import "./Checkbox-4ea45600.mjs";
import "./close-e1c8b11f.mjs";
import "./file-copy-outline-e7990d77.mjs";
import "./reload-63954944.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-43905f62.mjs";
var BelongsTo_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".nc-action-icon[data-v-db219b8a]{cursor:pointer;display:none}.chips-wrapper.active .nc-action-icon[data-v-db219b8a],.chips-wrapper:hover .nc-action-icon[data-v-db219b8a]{display:inline-block}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BelongsTo",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const ItemChip = defineAsyncComponent(() => __vitePreload(() => import("./ItemChip-19c1a5f2.mjs"), true ? ["ItemChip-19c1a5f2.mjs","ItemChip.59078ca5.css","entry-d9bc2aad.mjs","entry.05e9f68d.css","index-c79a04bb.mjs","index-3de9c023.mjs","useLTARStore-b10528dd.mjs","index-32959b50.mjs","Modal-3070863e.mjs","omit-79be01c9.mjs","pickAttrs-fc04d54e.mjs","index-16f90ce9.mjs","button-3d871114.mjs","wave-d4537590.mjs"] : void 0));
    const ListItems = defineAsyncComponent(() => __vitePreload(() => import("./ListItems-155d4236.mjs"), true ? ["ListItems-155d4236.mjs","ListItems.2e46f2c1.css","entry-d9bc2aad.mjs","entry.05e9f68d.css","reload-63954944.mjs","index-c79a04bb.mjs","useLTARStore-b10528dd.mjs","index-32959b50.mjs","Modal-3070863e.mjs","omit-79be01c9.mjs","pickAttrs-fc04d54e.mjs","index-16f90ce9.mjs","button-3d871114.mjs","wave-d4537590.mjs","useVirtualCell-26259a59.mjs","deepCompare-c3a57270.mjs","Input-11f8ddea.mjs","antInputDirective-04640d14.mjs","Card-59408c6a.mjs","index-fd7ac4f7.mjs","TabPane-b435e2ca.mjs","Dropdown-ca677e8d.mjs","useState-7c8b49a7.mjs","index-c696756a.mjs","LeftOutlined-fc38eee0.mjs","RightOutlined-05bf04ed.mjs","index-0b813702.mjs","SearchOutlined-8238e142.mjs"] : void 0));
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
