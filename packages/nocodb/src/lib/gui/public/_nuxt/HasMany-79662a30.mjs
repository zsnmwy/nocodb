import { _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, i as inject, r as ref, bZ as withAsyncContext, e as computed, o as openBlock, c as createElementBlock, F as Fragment, b as createBaseVNode, f as renderList, j as createBlock, k as createCommentVNode, g as createVNode } from "./entry-61ceea7f.mjs";
import { M as MdiPlus } from "./plus-15c52e39.mjs";
import { M as MdiArrowExpand } from "./Cell-8f197eca.mjs";
import { u as useUIPermission } from "./index-2b41c829.mjs";
import { e as ColumnInj, h as CellValueInj, g as RowInj, R as ReloadViewDataHookInj, I as IsFormInj, b as ReadonlyInj, c as IsLockedInj } from "./index-c79a04bb.mjs";
import { u as useProvideLTARStore } from "./useLTARStore-f0967bf9.mjs";
import { d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-c8c479be.mjs";
import "./dropdown-ba657059.mjs";
import "./Dropdown-9f66da27.mjs";
import "./index-cfa50bee.mjs";
import "./button-da542739.mjs";
import "./wave-52b13188.mjs";
import "./RightOutlined-4a9f51db.mjs";
import "./omit-173fd1c5.mjs";
import "./delete-outline-e19db0b9.mjs";
import "./menu-down-57034c65.mjs";
import "./Modal-d5a36a0f.mjs";
import "./pickAttrs-ba132318.mjs";
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
import "./deepCompare-c3a57270.mjs";
import "./Checkbox-99b125b8.mjs";
import "./close-f98de9d8.mjs";
import "./file-copy-outline-b0187a2b.mjs";
import "./reload-23e1ac74.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-c5e00eea.mjs";
import "./index-3e429aeb.mjs";
var HasMany_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".nc-action-icon[data-v-5a6d9901]{cursor:pointer;display:none}.chips-wrapper:hover .nc-action-icon[data-v-5a6d9901]{display:flex}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HasMany",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const ItemChip = defineAsyncComponent(() => __vitePreload(() => import("./ItemChip-7d6aed4e.mjs"), true ? ["ItemChip-7d6aed4e.mjs","ItemChip.59078ca5.css","entry-61ceea7f.mjs","entry.05e9f68d.css","index-c79a04bb.mjs","index-2b41c829.mjs","useLTARStore-f0967bf9.mjs","index-3e429aeb.mjs","Modal-d5a36a0f.mjs","omit-173fd1c5.mjs","pickAttrs-ba132318.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs"] : void 0));
    const ListItems = defineAsyncComponent(() => __vitePreload(() => import("./ListItems-f4680860.mjs"), true ? ["ListItems-f4680860.mjs","ListItems.2e46f2c1.css","entry-61ceea7f.mjs","entry.05e9f68d.css","reload-23e1ac74.mjs","index-c79a04bb.mjs","useLTARStore-f0967bf9.mjs","index-3e429aeb.mjs","Modal-d5a36a0f.mjs","omit-173fd1c5.mjs","pickAttrs-ba132318.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs","useVirtualCell-c8c479be.mjs","deepCompare-c3a57270.mjs","Input-081ff014.mjs","antInputDirective-04640d14.mjs","Card-637b0d8a.mjs","index-7349112e.mjs","TabPane-12ca446e.mjs","Dropdown-9f66da27.mjs","useState-068748ba.mjs","index-0b1576d7.mjs","LeftOutlined-f246f0cb.mjs","RightOutlined-4a9f51db.mjs","index-3935e1b2.mjs","SearchOutlined-66b33d9a.mjs"] : void 0));
    const ListChildItems = defineAsyncComponent(() => __vitePreload(() => import("./ListChildItems-9f37cc22.mjs"), true ? ["ListChildItems-9f37cc22.mjs","ListChildItems.2ccb20cd.css","entry-61ceea7f.mjs","entry.05e9f68d.css","delete-outline-e19db0b9.mjs","reload-23e1ac74.mjs","index-c79a04bb.mjs","useLTARStore-f0967bf9.mjs","index-3e429aeb.mjs","Modal-d5a36a0f.mjs","omit-173fd1c5.mjs","pickAttrs-ba132318.mjs","index-cfa50bee.mjs","button-da542739.mjs","wave-52b13188.mjs","useVirtualCell-c8c479be.mjs","deepCompare-c3a57270.mjs","Card-637b0d8a.mjs","index-7349112e.mjs","TabPane-12ca446e.mjs","Dropdown-9f66da27.mjs","useState-068748ba.mjs","index-0b1576d7.mjs","LeftOutlined-f246f0cb.mjs","RightOutlined-4a9f51db.mjs","index-3935e1b2.mjs","antInputDirective-04640d14.mjs","SearchOutlined-66b33d9a.mjs"] : void 0));
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
