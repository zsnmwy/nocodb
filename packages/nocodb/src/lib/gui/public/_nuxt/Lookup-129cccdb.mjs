import { c as __nuxt_component_3, d as __nuxt_component_4 } from "./Cell-0c4aa7dc.mjs";
import { _ as _export_sfc, d as defineComponent, a3 as useMetas, p as provide, i as inject, e as computed, bZ as withAsyncContext, bs as useColumn, o as openBlock, c as createElementBlock, F as Fragment, f as renderList, j as createBlock, A as normalizeClass, g as createVNode, k as createCommentVNode, R as RelationTypes, U as UITypes, l as isVirtualCol } from "./entry-d9bc2aad.mjs";
import { b as ReadonlyInj, e as ColumnInj, M as MetaInj, h as CellValueInj } from "./index-c79a04bb.mjs";
import "./useVirtualCell-26259a59.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-3de9c023.mjs";
import "./dropdown-5e0a28d4.mjs";
import "./Dropdown-ca677e8d.mjs";
import "./index-16f90ce9.mjs";
import "./button-3d871114.mjs";
import "./wave-d4537590.mjs";
import "./RightOutlined-05bf04ed.mjs";
import "./omit-79be01c9.mjs";
import "./delete-outline-29401aa6.mjs";
import "./menu-down-f001ffbb.mjs";
import "./Modal-3070863e.mjs";
import "./pickAttrs-fc04d54e.mjs";
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
import "./plus-e8140861.mjs";
import "./file-copy-outline-e7990d77.mjs";
import "./reload-63954944.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-43905f62.mjs";
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
