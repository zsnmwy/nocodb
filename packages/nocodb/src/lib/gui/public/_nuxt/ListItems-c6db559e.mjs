import { _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, L as useVModel, i as inject, r as ref, w as watch, e as computed, U as UITypes, R as RelationTypes, o as openBlock, j as createBlock, h as withCtx, b as createBaseVNode, g as createVNode, k as createCommentVNode, c as createElementBlock, F as Fragment, f as renderList, y as createTextVNode, v as toDisplayString, e5 as Suspense, dl as __unplugin_components_6, C as pushScopeId, E as popScopeId } from "./entry-3fb260b7.mjs";
import { _ as __unplugin_components_0 } from "./reload-0c2a0aa7.mjs";
import { a as useLTARStoreOrThrow } from "./useLTARStore-717af265.mjs";
import { e as ColumnInj, d as IsPublicInj } from "./index-c79a04bb.mjs";
import { d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-c4e19ee4.mjs";
import { I as Input } from "./Input-131cc256.mjs";
import { B as Button } from "./button-b581df9e.mjs";
import { C as Card } from "./Card-76812586.mjs";
import { _ as __unplugin_components_5 } from "./index-d7455a19.mjs";
import { M as Modal } from "./Modal-ebea9398.mjs";
import "./index-b7cb064d.mjs";
import "./index-fbd19973.mjs";
import "./omit-e185a391.mjs";
import "./deepCompare-c3a57270.mjs";
import "./antInputDirective-04640d14.mjs";
import "./wave-30eabfab.mjs";
import "./index-20cf3a61.mjs";
import "./TabPane-0a9cd9c3.mjs";
import "./Dropdown-936f0dc5.mjs";
import "./useState-8faa8040.mjs";
import "./LeftOutlined-04561eeb.mjs";
import "./RightOutlined-bc158d3e.mjs";
import "./index-0190fa17.mjs";
import "./pickAttrs-557680ad.mjs";
import "./SearchOutlined-205148f4.mjs";
var ListItems_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "[data-v-39bc0ff4] .ant-pagination-item a{line-height:21px!important}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListItems",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "addNewRecord"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const ExpandedForm = defineAsyncComponent(() => __vitePreload(() => import("./index-7ecc7bae.mjs").then(function(n) {
      return n.i;
    }), true ? ["index-7ecc7bae.mjs","Cell-284af952.mjs","useVirtualCell-c4e19ee4.mjs","entry-3fb260b7.mjs","entry.05e9f68d.css","deepCompare-c3a57270.mjs","index-c79a04bb.mjs","index-9ddc029b.mjs","dropdown-049aa5ad.mjs","Dropdown-936f0dc5.mjs","index-fbd19973.mjs","button-b581df9e.mjs","wave-30eabfab.mjs","RightOutlined-bc158d3e.mjs","omit-e185a391.mjs","delete-outline-27729fed.mjs","menu-down-c09fa69d.mjs","Modal-ebea9398.mjs","pickAttrs-557680ad.mjs","index-18e1b69f.mjs","isNumeric-1b2178ad.mjs","TextArea-cb1658fc.mjs","Input-131cc256.mjs","antInputDirective-04640d14.mjs","Card-76812586.mjs","index-20cf3a61.mjs","TabPane-0a9cd9c3.mjs","useState-8faa8040.mjs","star-outline-63b070a7.mjs","index-255af0e2.mjs","index-d7455a19.mjs","LeftOutlined-04561eeb.mjs","index-0190fa17.mjs","SearchOutlined-205148f4.mjs","CollapsePanel-16b55852.mjs","minus-circle-outline-bf16c42a.mjs","Checkbox-b6133900.mjs","close-cda37e18.mjs","plus-e2b18616.mjs","file-copy-outline-904a1ecf.mjs","reload-0c2a0aa7.mjs","fileUtils-f5868683.mjs","index-ba9775f8.mjs"] : void 0));
    const vModel = useVModel(props, "modelValue", emit);
    const column = inject(ColumnInj);
    const {
      childrenExcludedList,
      loadChildrenExcludedList,
      childrenExcludedListPagination,
      relatedTablePrimaryValueProp,
      link,
      getRelatedTableRowId,
      relatedTableMeta,
      meta,
      row
    } = useLTARStoreOrThrow();
    const { addLTARRef, isNew } = useSmartsheetRowStoreOrThrow();
    const isPublic = inject(IsPublicInj, ref(false));
    const linkRow = async (row2) => {
      if (isNew.value) {
        addLTARRef(row2, column == null ? void 0 : column.value);
      } else {
        await link(row2);
      }
      vModel.value = false;
    };
    watch(vModel, (nextVal, prevVal) => {
      if (nextVal && !prevVal) {
        childrenExcludedListPagination.query = "";
        childrenExcludedListPagination.page = 1;
        loadChildrenExcludedList();
      }
    });
    const expandedFormDlg = ref(false);
    const newRowState = computed(() => {
      var _a, _b, _c, _d;
      const colOpt = (_a = column == null ? void 0 : column.value) == null ? void 0 : _a.colOptions;
      const colInRelatedTable = (_c = (_b = relatedTableMeta == null ? void 0 : relatedTableMeta.value) == null ? void 0 : _b.columns) == null ? void 0 : _c.find((col) => {
        if (col.uidt !== UITypes.LinkToAnotherRecord)
          return false;
        const colOpt1 = col == null ? void 0 : col.colOptions;
        if ((colOpt1 == null ? void 0 : colOpt1.fk_related_model_id) !== meta.value.id)
          return false;
        if (colOpt.type === RelationTypes.MANY_TO_MANY && (colOpt1 == null ? void 0 : colOpt1.type) === RelationTypes.MANY_TO_MANY) {
          return colOpt.fk_parent_column_id === colOpt1.fk_child_column_id && colOpt.fk_child_column_id === colOpt1.fk_parent_column_id;
        } else {
          return colOpt.fk_parent_column_id === colOpt1.fk_parent_column_id && colOpt.fk_child_column_id === colOpt1.fk_child_column_id;
        }
      });
      if (!colInRelatedTable)
        return {};
      const relatedTableColOpt = colInRelatedTable == null ? void 0 : colInRelatedTable.colOptions;
      if (!relatedTableColOpt)
        return {};
      if (relatedTableColOpt.type === RelationTypes.BELONGS_TO) {
        return {
          [colInRelatedTable.title]: (_d = row == null ? void 0 : row.value) == null ? void 0 : _d.row
        };
      } else {
        return {
          [colInRelatedTable.title]: (row == null ? void 0 : row.value) && [row.value.row]
        };
      }
    });
    const __returned__ = { props, emit, ExpandedForm, vModel, column, childrenExcludedList, loadChildrenExcludedList, childrenExcludedListPagination, relatedTablePrimaryValueProp, link, getRelatedTableRowId, relatedTableMeta, meta, row, addLTARRef, isNew, isPublic, linkRow, expandedFormDlg, newRowState, Empty: __unplugin_components_6 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-39bc0ff4"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "max-h-[max(calc(100vh_-_300px)_,500px)] flex flex-col py-6" };
const _hoisted_2 = { class: "flex mb-4 items-center gap-2 px-12" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Add new record");
const _hoisted_5 = { class: "flex-1 overflow-auto min-h-0 scrollbar-thin-dull px-12" };
const _hoisted_6 = { class: "hidden group-hover:inline text-gray-400 text-[11px] ml-1" };
const _hoisted_7 = { class: "flex justify-center mt-6" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_input = Input;
  const _component_MdiReload = __unplugin_components_0;
  const _component_a_button = Button;
  const _component_a_card = Card;
  const _component_a_pagination = __unplugin_components_5;
  const _component_a_empty = __unplugin_components_6;
  const _component_a_modal = Modal;
  return openBlock(), createBlock(_component_a_modal, {
    visible: $setup.vModel,
    "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => $setup.vModel = $event),
    footer: null,
    title: "Link Record",
    "body-style": { padding: 0 }
  }, {
    default: withCtx(() => {
      var _a, _b, _c, _d, _e;
      return [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_a_input, {
              value: $setup.childrenExcludedListPagination.query,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.childrenExcludedListPagination.query = $event),
              placeholder: "Filter query",
              class: "max-w-[200px]",
              size: "small"
            }, null, 8, ["value"]),
            _hoisted_3,
            createVNode(_component_MdiReload, {
              class: "cursor-pointer text-gray-500 nc-reload",
              onClick: $setup.loadChildrenExcludedList
            }, null, 8, ["onClick"]),
            !$setup.isPublic ? (openBlock(), createBlock(_component_a_button, {
              key: 0,
              type: "primary",
              size: "small",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.expandedFormDlg = true)
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          ((_b = (_a = $setup.childrenExcludedList) == null ? void 0 : _a.pageInfo) == null ? void 0 : _b.totalRows) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", _hoisted_5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList((_d = (_c = $setup.childrenExcludedList) == null ? void 0 : _c.list) != null ? _d : [], (refRow, i) => {
                return openBlock(), createBlock(_component_a_card, {
                  key: i,
                  class: "!my-4 cursor-pointer !hover:bg-gray-200/50 hover:shadow-md group",
                  onClick: ($event) => $setup.linkRow(refRow)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(refRow[$setup.relatedTablePrimaryValueProp]), 1),
                    createBaseVNode("span", _hoisted_6, "(Primary key : " + toDisplayString($setup.getRelatedTableRowId(refRow)) + ")", 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_7, [
              ((_e = $setup.childrenExcludedList) == null ? void 0 : _e.pageInfo) ? (openBlock(), createBlock(_component_a_pagination, {
                key: 0,
                current: $setup.childrenExcludedListPagination.page,
                "onUpdate:current": _cache[2] || (_cache[2] = ($event) => $setup.childrenExcludedListPagination.page = $event),
                "page-size": $setup.childrenExcludedListPagination.size,
                "onUpdate:page-size": _cache[3] || (_cache[3] = ($event) => $setup.childrenExcludedListPagination.size = $event),
                class: "mt-2 !text-xs",
                size: "small",
                total: $setup.childrenExcludedList.pageInfo.totalRows,
                "show-less-items": ""
              }, null, 8, ["current", "page-size", "total"])) : createCommentVNode("", true)
            ])
          ], 64)) : (openBlock(), createBlock(_component_a_empty, {
            key: 1,
            class: "my-10",
            image: $setup.Empty.PRESENTED_IMAGE_SIMPLE
          }, null, 8, ["image"])),
          (openBlock(), createBlock(Suspense, null, {
            default: withCtx(() => [
              $setup.expandedFormDlg ? (openBlock(), createBlock($setup["ExpandedForm"], {
                key: 0,
                modelValue: $setup.expandedFormDlg,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.expandedFormDlg = $event),
                meta: $setup.relatedTableMeta,
                row: { row: {}, oldRow: {}, rowMeta: { new: true } },
                state: $setup.newRowState,
                "use-meta-fields": ""
              }, null, 8, ["modelValue", "meta", "state"])) : createCommentVNode("", true)
            ]),
            _: 1
          }))
        ])
      ];
    }),
    _: 1
  }, 8, ["visible"]);
}
var ListItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-39bc0ff4"]]);
export { ListItems as default };
