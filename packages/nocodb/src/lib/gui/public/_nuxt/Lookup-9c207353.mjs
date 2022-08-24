import { c as __nuxt_component_3, d as __nuxt_component_4 } from "./Cell-284af952.mjs";
import { _ as _export_sfc, d as defineComponent, a3 as useMetas, p as provide, i as inject, e as computed, bZ as withAsyncContext, bs as useColumn, o as openBlock, c as createElementBlock, F as Fragment, f as renderList, j as createBlock, A as normalizeClass, g as createVNode, k as createCommentVNode, R as RelationTypes, U as UITypes, l as isVirtualCol } from "./entry-3fb260b7.mjs";
import { b as ReadonlyInj, e as ColumnInj, M as MetaInj, h as CellValueInj } from "./index-c79a04bb.mjs";
import "./useVirtualCell-c4e19ee4.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-9ddc029b.mjs";
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
import "./Checkbox-b6133900.mjs";
import "./close-cda37e18.mjs";
import "./plus-e2b18616.mjs";
import "./file-copy-outline-904a1ecf.mjs";
import "./reload-0c2a0aa7.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-ba9775f8.mjs";
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
