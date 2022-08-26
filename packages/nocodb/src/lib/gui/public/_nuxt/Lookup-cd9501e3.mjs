import { c as __nuxt_component_3, d as __nuxt_component_4 } from "./Cell-8f197eca.mjs";
import { _ as _export_sfc, d as defineComponent, a3 as useMetas, p as provide, i as inject, e as computed, bZ as withAsyncContext, bs as useColumn, o as openBlock, c as createElementBlock, F as Fragment, f as renderList, j as createBlock, A as normalizeClass, g as createVNode, k as createCommentVNode, R as RelationTypes, U as UITypes, l as isVirtualCol } from "./entry-61ceea7f.mjs";
import { b as ReadonlyInj, e as ColumnInj, M as MetaInj, h as CellValueInj } from "./index-c79a04bb.mjs";
import "./useVirtualCell-c8c479be.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-2b41c829.mjs";
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
import "./Checkbox-99b125b8.mjs";
import "./close-f98de9d8.mjs";
import "./plus-15c52e39.mjs";
import "./file-copy-outline-b0187a2b.mjs";
import "./reload-23e1ac74.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-c5e00eea.mjs";
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
