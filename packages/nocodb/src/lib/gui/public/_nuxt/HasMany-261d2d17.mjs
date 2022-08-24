import { _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, i as inject, r as ref, bZ as withAsyncContext, e as computed, o as openBlock, c as createElementBlock, F as Fragment, b as createBaseVNode, f as renderList, j as createBlock, k as createCommentVNode, g as createVNode } from "./entry-3fb260b7.mjs";
import { M as MdiPlus } from "./plus-e2b18616.mjs";
import { M as MdiArrowExpand } from "./Cell-284af952.mjs";
import { u as useProvideLTARStore } from "./useLTARStore-717af265.mjs";
import { u as useUIPermission } from "./index-9ddc029b.mjs";
import { e as ColumnInj, h as CellValueInj, g as RowInj, R as ReloadViewDataHookInj, I as IsFormInj, b as ReadonlyInj, c as IsLockedInj } from "./index-c79a04bb.mjs";
import { d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-c4e19ee4.mjs";
import "./dropdown-049aa5ad.mjs";
import "./Dropdown-936f0dc5.mjs";
import "./index-fbd19973.mjs";
import "./button-b581df9e.mjs";
import "./wave-30eabfab.mjs";
import "./RightOutlined-bc158d3e.mjs";
import "./omit-e185a391.mjs";
import "./delete-outline-27729fed.mjs";
import "./menu-down-c09fa69d.mjs";
import "./Modal-ebea9398.mjs";
import "./pickAttrs-557680ad.mjs";
import "./index-18e1b69f.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./TextArea-cb1658fc.mjs";
import "./Input-131cc256.mjs";
import "./antInputDirective-04640d14.mjs";
import "./Card-76812586.mjs";
import "./index-20cf3a61.mjs";
import "./TabPane-0a9cd9c3.mjs";
import "./useState-8faa8040.mjs";
import "./star-outline-63b070a7.mjs";
import "./index-255af0e2.mjs";
import "./index-d7455a19.mjs";
import "./LeftOutlined-04561eeb.mjs";
import "./index-0190fa17.mjs";
import "./SearchOutlined-205148f4.mjs";
import "./CollapsePanel-16b55852.mjs";
import "./minus-circle-outline-bf16c42a.mjs";
import "./deepCompare-c3a57270.mjs";
import "./Checkbox-b6133900.mjs";
import "./close-cda37e18.mjs";
import "./file-copy-outline-904a1ecf.mjs";
import "./reload-0c2a0aa7.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-ba9775f8.mjs";
import "./index-b7cb064d.mjs";
var HasMany_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".nc-action-icon[data-v-5a6d9901]{cursor:pointer;display:none}.chips-wrapper:hover .nc-action-icon[data-v-5a6d9901]{display:flex}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HasMany",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const ItemChip = defineAsyncComponent(() => __vitePreload(() => import("./ItemChip-a2372421.mjs"), true ? ["ItemChip-a2372421.mjs","ItemChip.59078ca5.css","entry-3fb260b7.mjs","entry.05e9f68d.css","index-c79a04bb.mjs","useLTARStore-717af265.mjs","index-b7cb064d.mjs","Modal-ebea9398.mjs","omit-e185a391.mjs","pickAttrs-557680ad.mjs","index-fbd19973.mjs","button-b581df9e.mjs","wave-30eabfab.mjs","index-9ddc029b.mjs"] : void 0));
    const ListItems = defineAsyncComponent(() => __vitePreload(() => import("./ListItems-c6db559e.mjs"), true ? ["ListItems-c6db559e.mjs","ListItems.2e46f2c1.css","entry-3fb260b7.mjs","entry.05e9f68d.css","reload-0c2a0aa7.mjs","useLTARStore-717af265.mjs","index-c79a04bb.mjs","index-b7cb064d.mjs","Modal-ebea9398.mjs","omit-e185a391.mjs","pickAttrs-557680ad.mjs","index-fbd19973.mjs","button-b581df9e.mjs","wave-30eabfab.mjs","useVirtualCell-c4e19ee4.mjs","deepCompare-c3a57270.mjs","Input-131cc256.mjs","antInputDirective-04640d14.mjs","Card-76812586.mjs","index-20cf3a61.mjs","TabPane-0a9cd9c3.mjs","Dropdown-936f0dc5.mjs","useState-8faa8040.mjs","index-d7455a19.mjs","LeftOutlined-04561eeb.mjs","RightOutlined-bc158d3e.mjs","index-0190fa17.mjs","SearchOutlined-205148f4.mjs"] : void 0));
    const ListChildItems = defineAsyncComponent(() => __vitePreload(() => import("./ListChildItems-a880e00b.mjs"), true ? ["ListChildItems-a880e00b.mjs","ListChildItems.2ccb20cd.css","entry-3fb260b7.mjs","entry.05e9f68d.css","delete-outline-27729fed.mjs","reload-0c2a0aa7.mjs","useLTARStore-717af265.mjs","index-c79a04bb.mjs","index-b7cb064d.mjs","Modal-ebea9398.mjs","omit-e185a391.mjs","pickAttrs-557680ad.mjs","index-fbd19973.mjs","button-b581df9e.mjs","wave-30eabfab.mjs","useVirtualCell-c4e19ee4.mjs","deepCompare-c3a57270.mjs","Card-76812586.mjs","index-20cf3a61.mjs","TabPane-0a9cd9c3.mjs","Dropdown-936f0dc5.mjs","useState-8faa8040.mjs","index-d7455a19.mjs","LeftOutlined-04561eeb.mjs","RightOutlined-bc158d3e.mjs","index-0190fa17.mjs","antInputDirective-04640d14.mjs","SearchOutlined-205148f4.mjs"] : void 0));
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
