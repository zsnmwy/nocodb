import { c as __nuxt_component_3, d as __nuxt_component_4 } from "./Cell-e9645bc0.mjs";
import { _ as _export_sfc, d as defineComponent, a3 as useMetas, p as provide, i as inject, e as computed, bZ as withAsyncContext, bs as useColumn, o as openBlock, c as createElementBlock, F as Fragment, f as renderList, j as createBlock, A as normalizeClass, g as createVNode, k as createCommentVNode, R as RelationTypes, U as UITypes, l as isVirtualCol } from "./entry-fe2e349d.mjs";
import { b as ReadonlyInj, e as ColumnInj, M as MetaInj, h as CellValueInj } from "./index-c79a04bb.mjs";
import "./useVirtualCell-79bce99d.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-03dd499c.mjs";
import "./dropdown-2e9bbb3f.mjs";
import "./Dropdown-d7fe3574.mjs";
import "./index-e4541ed7.mjs";
import "./button-85170489.mjs";
import "./wave-51bede47.mjs";
import "./RightOutlined-593486a9.mjs";
import "./omit-bb2337ec.mjs";
import "./delete-outline-809194cc.mjs";
import "./menu-down-d9199e40.mjs";
import "./Modal-6ec32f67.mjs";
import "./pickAttrs-251338d2.mjs";
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
import "./plus-0f42eb0d.mjs";
import "./file-copy-outline-caf79cf0.mjs";
import "./reload-21536936.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-964d6d26.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Lookup",
  async setup(__props, { expose }) {
    var _a;
    expose();
    let __temp, __restore;
    const { metas, getMeta } = useMetas();
    provide(ReadonlyInj, true);
    const column = inject(ColumnInj);
    const meta = inject(MetaInj);
    const value = inject(CellValueInj);
    const arrValue = computed(() => {
      var _a2;
      return (_a2 = Array.isArray(value == null ? void 0 : value.value) ? value == null ? void 0 : value.value : [value == null ? void 0 : value.value]) != null ? _a2 : [];
    });
    const relationColumn = (_a = meta == null ? void 0 : meta.value.columns) == null ? void 0 : _a.find((c) => {
      var _a2;
      return c.id === ((_a2 = column.value.colOptions) == null ? void 0 : _a2.fk_relation_column_id);
    });
    [__temp, __restore] = withAsyncContext(() => getMeta(relationColumn.colOptions.fk_related_model_id)), await __temp, __restore();
    const lookupTableMeta = computed(() => metas.value[relationColumn.colOptions.fk_related_model_id]);
    const lookupColumn = computed(() => {
      var _a2;
      return (_a2 = lookupTableMeta.value.columns) == null ? void 0 : _a2.find((c) => {
        var _a3;
        return c.id === ((_a3 = column.value.colOptions) == null ? void 0 : _a3.fk_lookup_column_id);
      });
    });
    provide(MetaInj, lookupTableMeta);
    const lookupColumnMetaProps = useColumn(lookupColumn);
    const __returned__ = { metas, getMeta, column, meta, value, arrValue, relationColumn, lookupTableMeta, lookupColumn, lookupColumnMetaProps, RelationTypes, UITypes, isVirtualCol };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "w-full h-full flex gap-1" };
const _hoisted_2 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SmartsheetVirtualCell = __nuxt_component_3;
  const _component_SmartsheetCell = __nuxt_component_4;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $setup.lookupColumn ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      $setup.isVirtualCol($setup.lookupColumn) ? (openBlock(), createElementBlock("div", _hoisted_2, [
        $setup.lookupColumn.uidt === $setup.UITypes.LinkToAnotherRecord && $setup.lookupColumn.colOptions.type === $setup.RelationTypes.BELONGS_TO ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($setup.arrValue, (v, i) => {
          return openBlock(), createBlock(_component_SmartsheetVirtualCell, {
            key: i,
            "edit-enabled": false,
            "model-value": v,
            column: $setup.lookupColumn
          }, null, 8, ["model-value", "column"]);
        }), 128)) : (openBlock(), createBlock(_component_SmartsheetVirtualCell, {
          key: 1,
          "edit-enabled": false,
          "model-value": $setup.arrValue,
          column: $setup.lookupColumn
        }, null, 8, ["model-value", "column"]))
      ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($setup.arrValue, (v, i) => {
        return openBlock(), createElementBlock("div", {
          key: i,
          class: normalizeClass({ "bg-gray-100 px-2 rounded-full": !$setup.lookupColumnMetaProps.isAttachment })
        }, [
          createVNode(_component_SmartsheetCell, {
            "model-value": v,
            column: $setup.lookupColumn,
            "edit-enabled": false,
            virtual: true
          }, null, 8, ["model-value", "column"])
        ], 2);
      }), 128))
    ], 64)) : createCommentVNode("", true)
  ]);
}
var Lookup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Lookup as default };
