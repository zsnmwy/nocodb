import { _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, i as inject, r as ref, bZ as withAsyncContext, e as computed, o as openBlock, c as createElementBlock, F as Fragment, b as createBaseVNode, f as renderList, j as createBlock, k as createCommentVNode, g as createVNode } from "./entry-649fbf77.mjs";
import { M as MdiPlus } from "./plus-a534904a.mjs";
import { M as MdiArrowExpand } from "./Cell-ad8931db.mjs";
import { u as useUIPermission } from "./index-443916db.mjs";
import { e as ColumnInj, h as CellValueInj, g as RowInj, R as ReloadViewDataHookInj, I as IsFormInj, b as ReadonlyInj, c as IsLockedInj } from "./index-c79a04bb.mjs";
import { u as useProvideLTARStore } from "./useLTARStore-727cf8b3.mjs";
import { d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-0b8c4e42.mjs";
import "./dropdown-7a7d5830.mjs";
import "./Dropdown-e42ed6e8.mjs";
import "./index-a2900c1e.mjs";
import "./button-65b4020b.mjs";
import "./wave-1595a9a4.mjs";
import "./RightOutlined-d6864b4a.mjs";
import "./omit-52a539d6.mjs";
import "./delete-outline-75e5fb2d.mjs";
import "./menu-down-e5889364.mjs";
import "./Modal-affdb140.mjs";
import "./pickAttrs-4efb0b19.mjs";
import "./index-fe104f94.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./TextArea-1f0f670b.mjs";
import "./Input-35ebc16c.mjs";
import "./antInputDirective-04640d14.mjs";
import "./Card-ba245270.mjs";
import "./index-22886cb7.mjs";
import "./TabPane-8801fde4.mjs";
import "./useState-288afe6d.mjs";
import "./star-outline-52ff6978.mjs";
import "./index-60a073f2.mjs";
import "./index-90e3ebc3.mjs";
import "./LeftOutlined-863c43a5.mjs";
import "./index-872b715c.mjs";
import "./SearchOutlined-df5cb6c4.mjs";
import "./CollapsePanel-ebd9dccf.mjs";
import "./minus-circle-outline-ffe1f11a.mjs";
import "./deepCompare-c3a57270.mjs";
import "./Checkbox-40a38f26.mjs";
import "./close-f8bfc949.mjs";
import "./file-copy-outline-3f97b751.mjs";
import "./reload-8e7c8b3b.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-8fe364cb.mjs";
import "./index-a7729d94.mjs";
var HasMany_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".nc-action-icon[data-v-5a6d9901]{cursor:pointer;display:none}.chips-wrapper:hover .nc-action-icon[data-v-5a6d9901]{display:flex}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HasMany",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const ItemChip = defineAsyncComponent(() => __vitePreload(() => import("./ItemChip-c4325225.mjs"), true ? ["ItemChip-c4325225.mjs","ItemChip.59078ca5.css","entry-649fbf77.mjs","entry.05e9f68d.css","index-c79a04bb.mjs","index-443916db.mjs","useLTARStore-727cf8b3.mjs","index-a7729d94.mjs","Modal-affdb140.mjs","omit-52a539d6.mjs","pickAttrs-4efb0b19.mjs","index-a2900c1e.mjs","button-65b4020b.mjs","wave-1595a9a4.mjs"] : void 0));
    const ListItems = defineAsyncComponent(() => __vitePreload(() => import("./ListItems-645c72c2.mjs"), true ? ["ListItems-645c72c2.mjs","ListItems.2e46f2c1.css","entry-649fbf77.mjs","entry.05e9f68d.css","reload-8e7c8b3b.mjs","index-c79a04bb.mjs","useLTARStore-727cf8b3.mjs","index-a7729d94.mjs","Modal-affdb140.mjs","omit-52a539d6.mjs","pickAttrs-4efb0b19.mjs","index-a2900c1e.mjs","button-65b4020b.mjs","wave-1595a9a4.mjs","useVirtualCell-0b8c4e42.mjs","deepCompare-c3a57270.mjs","Input-35ebc16c.mjs","antInputDirective-04640d14.mjs","Card-ba245270.mjs","index-22886cb7.mjs","TabPane-8801fde4.mjs","Dropdown-e42ed6e8.mjs","useState-288afe6d.mjs","index-90e3ebc3.mjs","LeftOutlined-863c43a5.mjs","RightOutlined-d6864b4a.mjs","index-872b715c.mjs","SearchOutlined-df5cb6c4.mjs"] : void 0));
    const ListChildItems = defineAsyncComponent(() => __vitePreload(() => import("./ListChildItems-b63c87a4.mjs"), true ? ["ListChildItems-b63c87a4.mjs","ListChildItems.2ccb20cd.css","entry-649fbf77.mjs","entry.05e9f68d.css","delete-outline-75e5fb2d.mjs","reload-8e7c8b3b.mjs","index-c79a04bb.mjs","useLTARStore-727cf8b3.mjs","index-a7729d94.mjs","Modal-affdb140.mjs","omit-52a539d6.mjs","pickAttrs-4efb0b19.mjs","index-a2900c1e.mjs","button-65b4020b.mjs","wave-1595a9a4.mjs","useVirtualCell-0b8c4e42.mjs","deepCompare-c3a57270.mjs","Card-ba245270.mjs","index-22886cb7.mjs","TabPane-8801fde4.mjs","Dropdown-e42ed6e8.mjs","useState-288afe6d.mjs","index-90e3ebc3.mjs","LeftOutlined-863c43a5.mjs","RightOutlined-d6864b4a.mjs","index-872b715c.mjs","antInputDirective-04640d14.mjs","SearchOutlined-df5cb6c4.mjs"] : void 0));
    const column = inject(ColumnInj);
    const cellValue = inject(CellValueInj);
    const row = inject(RowInj);
    const reloadTrigger = inject(ReloadViewDataHookInj);
    const isForm = inject(IsFormInj);
    const readOnly = inject(ReadonlyInj, false);
    const isLocked = inject(IsLockedInj);
    const listItemsDlg = ref(false);
    const childListDlg = ref(false);
    const { isUIAllowed } = useUIPermission();
    const { state, isNew, removeLTARRef } = useSmartsheetRowStoreOrThrow();
    const { loadRelatedTableMeta, relatedTablePrimaryValueProp, unlink } = useProvideLTARStore(column, row, isNew, reloadTrigger.trigger);
    [__temp, __restore] = withAsyncContext(() => loadRelatedTableMeta()), await __temp, __restore();
    const localCellValue = computed(() => {
      var _a, _b, _c;
      if (cellValue == null ? void 0 : cellValue.value) {
        return (_a = cellValue == null ? void 0 : cellValue.value) != null ? _a : [];
      } else if (isNew.value) {
        return (_c = (_b = state == null ? void 0 : state.value) == null ? void 0 : _b[column == null ? void 0 : column.value.title]) != null ? _c : [];
      }
      return [];
    });
    const cells = computed(() => localCellValue.value.reduce((acc, curr) => {
      if (!relatedTablePrimaryValueProp.value)
        return acc;
      const value = curr[relatedTablePrimaryValueProp.value];
      if (!value)
        return acc;
      return [...acc, { value, item: curr }];
    }, []));
    const unlinkRef = async (rec) => {
      if (isNew.value) {
        removeLTARRef(rec, column == null ? void 0 : column.value);
      } else {
        await unlink(rec);
      }
    };
    const __returned__ = { ItemChip, ListItems, ListChildItems, column, cellValue, row, reloadTrigger, isForm, readOnly, isLocked, listItemsDlg, childListDlg, isUIAllowed, state, isNew, removeLTARRef, loadRelatedTableMeta, relatedTablePrimaryValueProp, unlink, localCellValue, cells, unlinkRef };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex items-center items-center gap-1 w-full chips-wrapper" };
const _hoisted_2 = { class: "chips flex items-center img-container flex-1 hm-items flex-nowrap min-w-0 overflow-hidden" };
const _hoisted_3 = {
  key: 0,
  class: "flex justify-end gap-1 min-h-[30px] items-center"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_MdiArrowExpand = MdiArrowExpand;
  const _component_MdiPlus = MdiPlus;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !$setup.isForm ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createBaseVNode("div", _hoisted_2, [
        $setup.cells ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.cells, (cell, i) => {
            return openBlock(), createBlock($setup["ItemChip"], {
              key: i,
              item: cell.item,
              value: cell.value,
              onUnlink: ($event) => $setup.unlinkRef(cell.item)
            }, null, 8, ["item", "value", "onUnlink"]);
          }), 128)),
          ((_a = $setup.cellValue) == null ? void 0 : _a.length) === 10 ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "caption pointer ml-1 grey--text",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.childListDlg = true)
          }, " more... ")) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ]),
      !$setup.isLocked && $setup.isUIAllowed("xcDatatableEditable") ? (openBlock(), createElementBlock("div", _hoisted_3, [
        createVNode(_component_MdiArrowExpand, {
          class: "select-none transform text-sm nc-action-icon text-gray-500/50 hover:text-gray-500 nc-arrow-expand",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.childListDlg = true)
        }),
        !$setup.readOnly ? (openBlock(), createBlock(_component_MdiPlus, {
          key: 0,
          class: "select-none text-sm nc-action-icon text-gray-500/50 hover:text-gray-500 nc-plus",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.listItemsDlg = true)
        })) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true),
    createVNode($setup["ListItems"], {
      modelValue: $setup.listItemsDlg,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.listItemsDlg = $event)
    }, null, 8, ["modelValue"]),
    createVNode($setup["ListChildItems"], {
      modelValue: $setup.childListDlg,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.childListDlg = $event),
      onAttachRecord: _cache[5] || (_cache[5] = () => {
        $setup.childListDlg = false;
        $setup.listItemsDlg = true;
      })
    }, null, 8, ["modelValue"])
  ]);
}
var HasMany = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5a6d9901"]]);
export { HasMany as default };
