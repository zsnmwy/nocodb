import { c as __nuxt_component_3, d as __nuxt_component_4 } from "./Cell-ad8931db.mjs";
import { _ as _export_sfc, d as defineComponent, a3 as useMetas, p as provide, i as inject, e as computed, bZ as withAsyncContext, bs as useColumn, o as openBlock, c as createElementBlock, F as Fragment, f as renderList, j as createBlock, A as normalizeClass, g as createVNode, k as createCommentVNode, R as RelationTypes, U as UITypes, l as isVirtualCol } from "./entry-649fbf77.mjs";
import { b as ReadonlyInj, e as ColumnInj, M as MetaInj, h as CellValueInj } from "./index-c79a04bb.mjs";
import "./useVirtualCell-0b8c4e42.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-443916db.mjs";
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
import "./Checkbox-40a38f26.mjs";
import "./close-f8bfc949.mjs";
import "./plus-a534904a.mjs";
import "./file-copy-outline-3f97b751.mjs";
import "./reload-8e7c8b3b.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-8fe364cb.mjs";
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
