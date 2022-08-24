import { o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, bO as defineAsyncComponent, bP as __vitePreload, L as useVModel, i as inject, r as ref, w as watch, e as computed, ab as h, j as createBlock, h as withCtx, k as createCommentVNode, g as createVNode, y as createTextVNode, v as toDisplayString, F as Fragment, f as renderList, x as withModifiers, A as normalizeClass, e5 as Suspense, S as resolveDynamicComponent, dl as __unplugin_components_6, C as pushScopeId, E as popScopeId } from "./entry-3fb260b7.mjs";
import { _ as __unplugin_components_3 } from "./delete-outline-27729fed.mjs";
import { _ as __unplugin_components_0 } from "./reload-0c2a0aa7.mjs";
import { a as useLTARStoreOrThrow } from "./useLTARStore-717af265.mjs";
import { I as IsFormInj, d as IsPublicInj, e as ColumnInj, b as ReadonlyInj } from "./index-c79a04bb.mjs";
import { d as useSmartsheetRowStoreOrThrow } from "./useVirtualCell-c4e19ee4.mjs";
import { M as Modal } from "./Modal-ebea9398.mjs";
import { B as Button } from "./button-b581df9e.mjs";
import { C as Card } from "./Card-76812586.mjs";
import { _ as __unplugin_components_5 } from "./index-d7455a19.mjs";
import "./index-b7cb064d.mjs";
import "./index-fbd19973.mjs";
import "./omit-e185a391.mjs";
import "./deepCompare-c3a57270.mjs";
import "./pickAttrs-557680ad.mjs";
import "./wave-30eabfab.mjs";
import "./index-20cf3a61.mjs";
import "./TabPane-0a9cd9c3.mjs";
import "./Dropdown-936f0dc5.mjs";
import "./useState-8faa8040.mjs";
import "./LeftOutlined-04561eeb.mjs";
import "./RightOutlined-bc158d3e.mjs";
import "./index-0190fa17.mjs";
import "./antInputDirective-04640d14.mjs";
import "./SearchOutlined-205148f4.mjs";
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M10.6 13.4a1 1 0 0 1-1.4 1.4a4.8 4.8 0 0 1 0-7l3.5-3.6a5.1 5.1 0 0 1 7.1 0a5.1 5.1 0 0 1 0 7.1l-1.5 1.5a6.4 6.4 0 0 0-.4-2.4l.5-.5a3.2 3.2 0 0 0 0-4.3a3.2 3.2 0 0 0-4.3 0l-3.5 3.6a2.9 2.9 0 0 0 0 4.2m5.6.3a4.8 4.8 0 0 0-1.4-4.5a1 1 0 0 0-1.4 1.4a2.9 2.9 0 0 1 0 4.2l-3.5 3.6a3.2 3.2 0 0 1-4.3 0a3.2 3.2 0 0 1 0-4.3l.5-.4a7.3 7.3 0 0 1-.4-2.5l-1.5 1.5a5.1 5.1 0 0 0 0 7.1a5.1 5.1 0 0 0 7.1 0l1.8-1.8a6 6 0 0 1 3.1-4.3m4.9 1.8L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_1 = { name: "mdi-link-variant-remove", render };
var ListChildItems_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "[data-v-19cec0c2] .ant-pagination-item a{line-height:21px!important}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListChildItems",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "attachRecord"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const ExpandedForm = defineAsyncComponent(() => __vitePreload(() => import("./index-7ecc7bae.mjs").then(function(n) {
      return n.i;
    }), true ? ["index-7ecc7bae.mjs","Cell-284af952.mjs","useVirtualCell-c4e19ee4.mjs","entry-3fb260b7.mjs","entry.05e9f68d.css","deepCompare-c3a57270.mjs","index-c79a04bb.mjs","index-9ddc029b.mjs","dropdown-049aa5ad.mjs","Dropdown-936f0dc5.mjs","index-fbd19973.mjs","button-b581df9e.mjs","wave-30eabfab.mjs","RightOutlined-bc158d3e.mjs","omit-e185a391.mjs","delete-outline-27729fed.mjs","menu-down-c09fa69d.mjs","Modal-ebea9398.mjs","pickAttrs-557680ad.mjs","index-18e1b69f.mjs","isNumeric-1b2178ad.mjs","TextArea-cb1658fc.mjs","Input-131cc256.mjs","antInputDirective-04640d14.mjs","Card-76812586.mjs","index-20cf3a61.mjs","TabPane-0a9cd9c3.mjs","useState-8faa8040.mjs","star-outline-63b070a7.mjs","index-255af0e2.mjs","index-d7455a19.mjs","LeftOutlined-04561eeb.mjs","index-0190fa17.mjs","SearchOutlined-205148f4.mjs","CollapsePanel-16b55852.mjs","minus-circle-outline-bf16c42a.mjs","Checkbox-b6133900.mjs","close-cda37e18.mjs","plus-e2b18616.mjs","file-copy-outline-904a1ecf.mjs","reload-0c2a0aa7.mjs","fileUtils-f5868683.mjs","index-ba9775f8.mjs"] : void 0));
    const vModel = useVModel(props, "modelValue", emit);
    const isForm = inject(IsFormInj, ref(false));
    const isPublic = inject(IsPublicInj, ref(false));
    const column = inject(ColumnInj);
    const readonly = inject(ReadonlyInj, false);
    const {
      childrenList,
      deleteRelatedRow,
      loadChildrenList,
      childrenListPagination,
      relatedTablePrimaryValueProp,
      unlink,
      getRelatedTableRowId,
      relatedTableMeta
    } = useLTARStoreOrThrow();
    const { isNew, state, removeLTARRef } = useSmartsheetRowStoreOrThrow();
    watch([vModel, isForm], (nextVal) => {
      if ((nextVal[0] || nextVal[1]) && !isNew.value) {
        loadChildrenList();
      }
    }, { immediate: true });
    const unlinkRow = async (row) => {
      if (isNew.value) {
        removeLTARRef(row, column == null ? void 0 : column.value);
      } else {
        await unlink(row);
        await loadChildrenList();
      }
    };
    const unlinkIfNewRow = async (row) => {
      if (isNew.value) {
        removeLTARRef(row, column == null ? void 0 : column.value);
      }
    };
    const container = computed(() => (isForm == null ? void 0 : isForm.value) ? h("div", {
      class: "w-full p-2"
    }) : Modal);
    const expandedFormDlg = ref(false);
    const expandedFormRow = ref();
    const __returned__ = { props, emit, ExpandedForm, vModel, isForm, isPublic, column, readonly, childrenList, deleteRelatedRow, loadChildrenList, childrenListPagination, relatedTablePrimaryValueProp, unlink, getRelatedTableRowId, relatedTableMeta, isNew, state, removeLTARRef, unlinkRow, unlinkIfNewRow, container, expandedFormDlg, expandedFormRow, Empty: __unplugin_components_6 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-19cec0c2"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "max-h-[max(calc(100vh_-_300px)_,500px)] flex flex-col py-6" };
const _hoisted_2 = { class: "flex mb-4 items-center gap-2 px-12" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_4 = { class: "flex items-center gap-1" };
const _hoisted_5 = { class: "flex-1 overflow-auto min-h-0 scrollbar-thin-dull px-12" };
const _hoisted_6 = { class: "flex items-center" };
const _hoisted_7 = { class: "flex-1 overflow-hidden min-w-0" };
const _hoisted_8 = { class: "text-gray-400 text-[11px] ml-1" };
const _hoisted_9 = {
  key: 0,
  class: "flex gap-2"
};
const _hoisted_10 = { class: "flex justify-center mt-6" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiReload = __unplugin_components_0;
  const _component_MdiLinkVariantRemove = __unplugin_components_1;
  const _component_a_button = Button;
  const _component_MdiDeleteOutline = __unplugin_components_3;
  const _component_a_card = Card;
  const _component_a_pagination = __unplugin_components_5;
  const _component_a_empty = __unplugin_components_6;
  return openBlock(), createBlock(resolveDynamicComponent($setup.container), {
    visible: $setup.vModel,
    "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => $setup.vModel = $event),
    footer: null,
    title: "Child list",
    "body-style": { padding: 0 }
  }, {
    default: withCtx(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      return [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            !$setup.isForm ? (openBlock(), createBlock(_component_MdiReload, {
              key: 0,
              class: "cursor-pointer text-gray-500",
              onClick: $setup.loadChildrenList
            }, null, 8, ["onClick"])) : createCommentVNode("", true),
            !$setup.readonly ? (openBlock(), createBlock(_component_a_button, {
              key: 1,
              type: "primary",
              ghost: "",
              class: "!text-xs",
              size: "small",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.emit("attachRecord"))
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_MdiLinkVariantRemove, {
                    class: "text-xs",
                    type: "primary",
                    onClick: _cache[0] || (_cache[0] = ($event) => $setup.unlinkRow(_ctx.row))
                  }),
                  createTextVNode(" Link to '" + toDisplayString($setup.relatedTableMeta.title) + "' ", 1)
                ])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          $setup.isNew && ((_c = (_b = $setup.state) == null ? void 0 : _b[(_a = $setup.column) == null ? void 0 : _a.title]) == null ? void 0 : _c.length) || ((_e = (_d = $setup.childrenList) == null ? void 0 : _d.pageInfo) == null ? void 0 : _e.totalRows) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", _hoisted_5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList((_j = (_i = (_f = $setup.childrenList) == null ? void 0 : _f.list) != null ? _i : (_h = $setup.state) == null ? void 0 : _h[(_g = $setup.column) == null ? void 0 : _g.title]) != null ? _j : [], (row, i) => {
                return openBlock(), createBlock(_component_a_card, {
                  key: i,
                  class: "!my-4 !hover:bg-gray-200/50 hover:shadow-md",
                  onClick: () => {
                    $setup.expandedFormRow = row;
                    $setup.expandedFormDlg = true;
                  }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_6, [
                      createBaseVNode("div", _hoisted_7, [
                        createTextVNode(toDisplayString(row[$setup.relatedTablePrimaryValueProp]) + " ", 1),
                        createBaseVNode("span", _hoisted_8, "(Primary key : " + toDisplayString($setup.getRelatedTableRowId(row)) + ")", 1)
                      ]),
                      !$setup.readonly ? (openBlock(), createElementBlock("div", _hoisted_9, [
                        createVNode(_component_MdiLinkVariantRemove, {
                          class: "text-xs text-grey !hover:text-red-500 cursor-pointer",
                          onClick: withModifiers(($event) => $setup.unlinkRow(row), ["stop"])
                        }, null, 8, ["onClick"]),
                        !$setup.readonly && !$setup.isPublic ? (openBlock(), createBlock(_component_MdiDeleteOutline, {
                          key: 0,
                          class: "text-xs text-grey !hover:text-red-500 cursor-pointer",
                          onClick: withModifiers(($event) => $setup.deleteRelatedRow(row, $setup.unlinkIfNewRow), ["stop"])
                        }, null, 8, ["onClick"])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_10, [
              !$setup.isNew && ((_k = $setup.childrenList) == null ? void 0 : _k.pageInfo) ? (openBlock(), createBlock(_component_a_pagination, {
                key: 0,
                current: $setup.childrenListPagination.page,
                "onUpdate:current": _cache[2] || (_cache[2] = ($event) => $setup.childrenListPagination.page = $event),
                "page-size": $setup.childrenListPagination.size,
                "onUpdate:page-size": _cache[3] || (_cache[3] = ($event) => $setup.childrenListPagination.size = $event),
                class: "mt-2 mx-auto",
                size: "small",
                total: $setup.childrenList.pageInfo.totalRows,
                "show-less-items": ""
              }, null, 8, ["current", "page-size", "total"])) : createCommentVNode("", true)
            ])
          ], 64)) : (openBlock(), createBlock(_component_a_empty, {
            key: 1,
            class: normalizeClass({ "my-10": !$setup.isForm, "my-1 !text-xs": $setup.isForm }),
            image: $setup.Empty.PRESENTED_IMAGE_SIMPLE,
            "image-style": $setup.isForm ? { height: "20px" } : {}
          }, null, 8, ["class", "image", "image-style"]))
        ]),
        (openBlock(), createBlock(Suspense, null, {
          default: withCtx(() => [
            $setup.expandedFormRow && $setup.expandedFormDlg ? (openBlock(), createBlock($setup["ExpandedForm"], {
              key: 0,
              modelValue: $setup.expandedFormDlg,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.expandedFormDlg = $event),
              row: { row: $setup.expandedFormRow },
              meta: $setup.relatedTableMeta,
              "load-row": "",
              "use-meta-fields": ""
            }, null, 8, ["modelValue", "row", "meta"])) : createCommentVNode("", true)
          ]),
          _: 1
        }))
      ];
    }),
    _: 1
  }, 40, ["visible"]);
}
var ListChildItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19cec0c2"]]);
export { ListChildItems as default };
