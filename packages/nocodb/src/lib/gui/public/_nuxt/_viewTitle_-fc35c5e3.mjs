import { u as useViewData, _ as __nuxt_component_5, a as __nuxt_component_6, b as useViewColumns, c as __unplugin_components_10, T as ToggleDrawer, d as __nuxt_component_1$2, e as __nuxt_component_0$3 } from "./Grid-7e2c6db8.mjs";
import { _ as __unplugin_components_0$3, a as __nuxt_component_1$1, b as __nuxt_component_2$1, c as __nuxt_component_3$1, d as __nuxt_component_4, g as getSystemColumns, e as __nuxt_component_2$2 } from "./Cell-ad8931db.mjs";
import { _ as __nuxt_component_7 } from "./index-1182cd3a.mjs";
import { M as MetaInj, A as ActiveViewInj, R as ReloadViewDataHookInj, I as IsFormInj, a as IsGridInj, P as PaginationDataInj, C as ChangePageInj, b as ReadonlyInj, F as FieldsInj, V as ViewListInj, c as IsLockedInj, T as TabMetaInj, O as OpenNewRecordFormHookInj } from "./index-c79a04bb.mjs";
import { u as useUIPermission } from "./index-443916db.mjs";
import { r as ref, u as useNuxtApp, a as unref, w as watch, o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, i as inject, p as provide, e as computed, F as Fragment, f as renderList, g as createVNode, h as withCtx, j as createBlock, k as createCommentVNode, l as isVirtualCol, m as useGlobal, n as reactive, q as onClickOutside, s as onMounted, t as resolveDirective, v as toDisplayString, x as withModifiers, y as createTextVNode, z as withKeys, A as normalizeClass, B as withDirectives, U as UITypes, D as Draggable, C as pushScopeId, E as popScopeId, G as __unplugin_components_2$1, H as Form, I as message, R as RelationTypes, J as useDebounceFn, K as extractSdkResponseErrorMsg, L as useVModel, M as useI18n, N as useApi, V as ViewTypes, O as capitalize, P as nextTick, Q as onKeyStroke, S as resolveDynamicComponent, T as normalizeStyle, W as viewIcons, X as __unplugin_components_1, Y as __unplugin_components_0$6, Z as useRouter, $ as useRoute, a0 as Sortable, a1 as Menu, a2 as FileSaver, a3 as useMetas, a4 as toRef, a5 as renderSlot, a6 as watchEffect, a7 as createEventHook } from "./entry-649fbf77.mjs";
import { C as Card, _ as __unplugin_components_2, a as __unplugin_components_3 } from "./Card-ba245270.mjs";
import { u as useProvideSmartsheetRowStore, a as useProvideSmartsheetStore } from "./useVirtualCell-0b8c4e42.mjs";
import { M as MdiPlus } from "./plus-a534904a.mjs";
import { _ as __unplugin_components_4$1 } from "./index-fe104f94.mjs";
import { _ as __unplugin_components_0$4 } from "./index-0cebafde.mjs";
import { B as Button } from "./button-65b4020b.mjs";
import { D as Dropdown } from "./dropdown-7a7d5830.mjs";
import { I as Input } from "./Input-35ebc16c.mjs";
import { _ as __unplugin_components_6 } from "./index-36668914.mjs";
import { _ as __unplugin_components_13 } from "./TextArea-1f0f670b.mjs";
import { g as generateUniqueTitle } from "./generateName-b5da7037.mjs";
import { M as Modal } from "./Modal-affdb140.mjs";
import { u as useSidebar, p as provideSidebar } from "./index-ee84a878.mjs";
import { _ as __unplugin_components_3$1 } from "./open-in-new-745e33f8.mjs";
import { _ as __unplugin_components_0$5 } from "./chevron-right-rounded-e8f6ba9d.mjs";
import { u as useDialog, a as useTable } from "./index-cb517d9e.mjs";
import { _ as __nuxt_component_0$2 } from "./minus-circle-outline-ffe1f11a.mjs";
import { _ as __unplugin_components_1$1, T as Tabs } from "./TabPane-8801fde4.mjs";
import { L as LayoutSider } from "./index-d05dbf89.mjs";
import "./menu-4e5fc694.mjs";
import "./useSharedView-673cfa34.mjs";
import "./QuickImport-7223e90d.mjs";
import "./delete-outline-75e5fb2d.mjs";
import "./useTabs-88a857e1.mjs";
import "./index-b50bdfc6.mjs";
import "./index-60a073f2.mjs";
import "./index-90e3ebc3.mjs";
import "./LeftOutlined-863c43a5.mjs";
import "./RightOutlined-d6864b4a.mjs";
import "./index-872b715c.mjs";
import "./antInputDirective-04640d14.mjs";
import "./pickAttrs-4efb0b19.mjs";
import "./useState-288afe6d.mjs";
import "./omit-52a539d6.mjs";
import "./SearchOutlined-df5cb6c4.mjs";
import "./Checkbox-40a38f26.mjs";
import "./index-cfa33e99.mjs";
import "./index-a2900c1e.mjs";
import "./index-7f1b7214.mjs";
import "./Password-2e3cf13b.mjs";
import "./CollapsePanel-ebd9dccf.mjs";
import "./index-3388b3af.mjs";
import "./index-22886cb7.mjs";
import "./index-14c9a254.mjs";
import "./discord-2df38623.mjs";
import "./star-outline-52ff6978.mjs";
import "./menu-down-e5889364.mjs";
import "./reload-8e7c8b3b.mjs";
import "./plus-outline-816d7a07.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./close-f8bfc949.mjs";
import "./file-copy-outline-3f97b751.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-8fe364cb.mjs";
import "./wave-1595a9a4.mjs";
import "./deepCompare-c3a57270.mjs";
import "./Dropdown-e42ed6e8.mjs";
function useViews(meta) {
  let views = ref([]);
  const { $api } = useNuxtApp();
  const loadViews = async () => {
    const _meta = unref(meta);
    if (_meta && _meta.id) {
      const response = (await $api.dbView.list(_meta.id)).list;
      if (response) {
        views.value = response.sort((a, b) => a.order - b.order);
      }
    }
  };
  watch(() => meta, loadViews, { immediate: true });
  return { views, loadViews };
}
const _hoisted_1$g = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /* @__PURE__ */ createBaseVNode("path", {
  d: "M8.5 13.498l2.5 3.006l3.5-4.506l4.5 6H5m16 1v-14a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$b
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$a);
}
var ImageIcon = { name: "mdi-file-image-box", render: render$4 };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Gallery",
  setup(__props, { expose }) {
    expose();
    const meta = inject(MetaInj);
    const view = inject(ActiveViewInj);
    const reloadViewDataHook = inject(ReloadViewDataHookInj);
    const expandedFormDlg = ref(false);
    const expandedFormRow = ref();
    const expandedFormRowState = ref();
    const { loadData, paginationData, formattedData: data, loadGalleryData, galleryData, changePage } = useViewData(meta, view);
    const { isUIAllowed } = useUIPermission();
    provide(IsFormInj, ref(false));
    provide(IsGridInj, false);
    provide(PaginationDataInj, paginationData);
    provide(ChangePageInj, changePage);
    provide(ReadonlyInj, !isUIAllowed("xcDatatableEditable"));
    const fields = inject(FieldsInj, ref([]));
    const coverImageColumn = computed(() => fields.value.find((col) => {
      var _a;
      return col.id === ((_a = galleryData.value) == null ? void 0 : _a.fk_cover_image_col_id);
    }));
    watch([meta, view], async () => {
      if ((meta == null ? void 0 : meta.value) && (view == null ? void 0 : view.value)) {
        await loadData();
        await loadGalleryData();
      }
    }, { immediate: true });
    const isRowEmpty = (record, col) => {
      const val = record.row[col.title];
      if (!val)
        return true;
      return Array.isArray(val) && val.length === 0;
    };
    const attachments = (record) => {
      var _a, _b;
      try {
        return (_b = JSON.parse(record.row[(_a = coverImageColumn.value) == null ? void 0 : _a.title])) != null ? _b : [];
      } catch (e) {
        return [];
      }
    };
    reloadViewDataHook == null ? void 0 : reloadViewDataHook.on(async () => {
      await loadData();
    });
    const expandForm = (row, state) => {
      if (!isUIAllowed("xcDatatableEditable"))
        return;
      expandedFormRow.value = row;
      expandedFormRowState.value = state;
      expandedFormDlg.value = true;
    };
    const __returned__ = { meta, view, reloadViewDataHook, expandedFormDlg, expandedFormRow, expandedFormRowState, loadData, paginationData, data, loadGalleryData, galleryData, changePage, isUIAllowed, fields, coverImageColumn, isRowEmpty, attachments, expandForm, isVirtualCol, Row: __nuxt_component_5, ImageIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$f = { class: "flex flex-col h-full w-full" };
const _hoisted_2$a = { class: "nc-gallery-container min-h-0 flex-1 grid grid-cols-4 gap-4 my-4 px-3 overflow-auto" };
const _hoisted_3$9 = ["onClick"];
const _hoisted_4$5 = ["src"];
const _hoisted_5$3 = { class: "flex flex-row w-full justify-start border-b-1 border-gray-100 py-2.5" };
const _hoisted_6$2 = { class: "w-full text-gray-600" };
const _hoisted_7$2 = { class: "flex flex-row w-full pb-3 pt-2 pl-2 items-center justify-start" };
const _hoisted_8$2 = {
  key: 0,
  class: "h-3 bg-gray-200 px-5 rounded-lg"
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_carousel = __unplugin_components_0$3;
  const _component_SmartsheetHeaderVirtualCell = __nuxt_component_1$1;
  const _component_SmartsheetHeaderCell = __nuxt_component_2$1;
  const _component_SmartsheetVirtualCell = __nuxt_component_3$1;
  const _component_SmartsheetCell = __nuxt_component_4;
  const _component_a_card = Card;
  const _component_SmartsheetPagination = __nuxt_component_6;
  const _component_SmartsheetExpandedForm = __nuxt_component_7;
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    createBaseVNode("div", _hoisted_2$a, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.data, (record, recordIndex) => {
        return openBlock(), createElementBlock("div", {
          key: recordIndex,
          class: "flex flex-col",
          onClick: ($event) => $setup.expandForm(record)
        }, [
          createVNode($setup["Row"], { row: record }, {
            default: withCtx(() => [
              createVNode(_component_a_card, {
                hoverable: "",
                class: "!rounded-lg h-full"
              }, {
                cover: withCtx(() => [
                  $setup.attachments(record).length !== 0 ? (openBlock(), createBlock(_component_a_carousel, {
                    key: 0,
                    autoplay: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.attachments(record), (attachment, index) => {
                        return openBlock(), createElementBlock("img", {
                          key: index,
                          class: "h-52 rounded-t-lg",
                          src: attachment.url
                        }, null, 8, _hoisted_4$5);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024)) : (openBlock(), createBlock($setup["ImageIcon"], {
                    key: 1,
                    class: "w-full h-48 my-4 text-cool-gray-200"
                  }))
                ]),
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.fields, (col, colIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: colIndex,
                      class: "flex flex-col space-y-1 px-4 mb-6 bg-gray-50 rounded-lg w-full"
                    }, [
                      createBaseVNode("div", _hoisted_5$3, [
                        createBaseVNode("div", _hoisted_6$2, [
                          $setup.isVirtualCol(col) ? (openBlock(), createBlock(_component_SmartsheetHeaderVirtualCell, {
                            key: 0,
                            column: col,
                            "hide-menu": true
                          }, null, 8, ["column"])) : (openBlock(), createBlock(_component_SmartsheetHeaderCell, {
                            key: 1,
                            column: col,
                            "hide-menu": true
                          }, null, 8, ["column"]))
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_7$2, [
                        $setup.isRowEmpty(record, col) ? (openBlock(), createElementBlock("div", _hoisted_8$2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          $setup.isVirtualCol(col) ? (openBlock(), createBlock(_component_SmartsheetVirtualCell, {
                            key: 0,
                            modelValue: record.row[col.title],
                            "onUpdate:modelValue": ($event) => record.row[col.title] = $event,
                            column: col,
                            row: record
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "column", "row"])) : (openBlock(), createBlock(_component_SmartsheetCell, {
                            key: 1,
                            modelValue: record.row[col.title],
                            "onUpdate:modelValue": ($event) => record.row[col.title] = $event,
                            column: col,
                            "edit-enabled": false,
                            "read-only": true
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "column"]))
                        ], 64))
                      ])
                    ]);
                  }), 128))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["row"])
        ], 8, _hoisted_3$9);
      }), 128))
    ]),
    createVNode(_component_SmartsheetPagination),
    $setup.expandedFormRow && $setup.expandedFormDlg ? (openBlock(), createBlock(_component_SmartsheetExpandedForm, {
      key: 0,
      modelValue: $setup.expandedFormDlg,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.expandedFormDlg = $event),
      row: $setup.expandedFormRow,
      state: $setup.expandedFormRowState,
      meta: $setup.meta
    }, null, 8, ["modelValue", "row", "state", "meta"])) : createCommentVNode("", true)
  ]);
}
var __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__scopeId", "data-v-1e7da728"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Form",
  setup(__props, { expose }) {
    expose();
    provide(IsFormInj, ref(true));
    const hiddenCols = ["created_at", "updated_at"];
    const state = useGlobal();
    const formRef = ref();
    const { $api, $e } = useNuxtApp();
    const { isUIAllowed } = useUIPermission();
    const formState = reactive({});
    const secondsRemain = ref(0);
    const isEditable = isUIAllowed("editFormView");
    const meta = inject(MetaInj);
    const view = inject(ActiveViewInj);
    const { loadFormView, insertRow, formColumnData, formViewData, updateFormView } = useViewData(meta, view);
    const { showAll, hideAll, saveOrUpdate } = useViewColumns(view, meta, async () => {
      await loadFormView();
      setFormData();
    });
    const { syncLTARRefs } = useProvideSmartsheetRowStore(meta, ref({
      row: formState,
      oldRow: {},
      rowMeta: { new: true }
    }));
    const columns = computed(() => {
      var _a;
      return ((_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) || [];
    });
    const localColumns = ref([]);
    const hiddenColumns = ref([]);
    const draggableRef = ref();
    const systemFieldsIds = ref([]);
    const showColumnDropdown = ref(false);
    const moved = ref(false);
    const drag = ref(false);
    const emailMe = ref(false);
    const submitted = ref(false);
    const activeRow = ref("");
    function updateView() {
      var _a, _b;
      if ((((_b = (_a = formViewData.value) == null ? void 0 : _a.subheading) == null ? void 0 : _b.length) || 0) > 255) {
        message.error("Data too long for Form Description");
        return;
      }
      updateFormView(formViewData.value);
    }
    async function submitForm() {
      var _a;
      try {
        await ((_a = formRef.value) == null ? void 0 : _a.validateFields());
      } catch (e) {
        e.errorFields.map((f) => message.error(f.errors.join(",")));
        return;
      }
      const insertedRowData = await insertRow(formState);
      if (insertedRowData) {
        await syncLTARRefs(insertedRowData);
      }
      submitted.value = true;
    }
    function isDbRequired(column) {
      if (hiddenCols.includes(column.fk_column_id)) {
        return false;
      }
      let isRequired2 = !isVirtualCol(column) && column.rqd && !column.cdf && !columns.value.some((c) => {
        var _a;
        return c.uidt === UITypes.LinkToAnotherRecord && ((_a = c == null ? void 0 : c.colOptions) == null ? void 0 : _a.type) === RelationTypes.BELONGS_TO && column.fk_column_id === c.colOptions.fk_child_column_id;
      }) || column.pk && !column.ai && !column.cdf;
      if (column.uidt === UITypes.LinkToAnotherRecord && column.colOptions.type === RelationTypes.BELONGS_TO) {
        const col = columns.value.find((c) => c.id === column.colOptions.fk_child_column_id);
        if (col.rqd && !col.default) {
          isRequired2 = true;
        }
      }
      return isRequired2;
    }
    function onMoveCallback(event) {
      if (shouldSkipColumn(event.draggedContext.element)) {
        return false;
      }
    }
    function onMove(event) {
      var _a, _b, _c;
      const { newIndex, element, oldIndex } = event.added || event.moved || event.removed;
      if (shouldSkipColumn(element)) {
        return;
      }
      if (event.added) {
        element.show = true;
      }
      if (event.removed) {
        element.show = false;
        saveOrUpdate(element, oldIndex);
      } else {
        if (!localColumns.value.length || localColumns.value.length === 1) {
          element.order = 1;
        } else if (localColumns.value.length - 1 === newIndex) {
          element.order = (((_a = localColumns.value[newIndex - 1]) == null ? void 0 : _a.order) || 0) + 1;
        } else if (newIndex === 0) {
          element.order = (((_b = localColumns.value[1]) == null ? void 0 : _b.order) || 0) / 2;
        } else {
          element.order = ((((_c = localColumns.value[newIndex - 1]) == null ? void 0 : _c.order) || 0) + (localColumns.value[newIndex + 1].order || 0)) / 2;
        }
        saveOrUpdate(element, newIndex);
      }
      $e("a:form-view:reorder");
    }
    function hideColumn(idx) {
      if (shouldSkipColumn(localColumns.value[idx])) {
        message.info("Required field can't be moved");
        return;
      }
      saveOrUpdate({
        ...localColumns.value[idx],
        show: false
      }, idx);
      localColumns.value[idx].show = false;
      $e("a:form-view:hide-columns");
    }
    async function addAllColumns() {
      for (const col of localColumns == null ? void 0 : localColumns.value) {
        if (!systemFieldsIds.value.includes(col.fk_column_id)) {
          col.show = true;
        }
      }
      await showAll(systemFieldsIds.value);
      $e("a:form-view:add-all");
    }
    function shouldSkipColumn(col) {
      return isDbRequired(col) || !!col.required || !!col.rqd;
    }
    async function removeAllColumns() {
      for (const col of localColumns == null ? void 0 : localColumns.value) {
        if (!shouldSkipColumn(col))
          col.show = false;
      }
      await hideAll(localColumns == null ? void 0 : localColumns.value.filter((col) => shouldSkipColumn(col)).map((col) => col.fk_column_id));
      $e("a:form-view:remove-all");
    }
    async function checkSMTPStatus() {
      if (emailMe.value) {
        const emailPluginActive = await $api.plugin.status("SMTP");
        if (!emailPluginActive) {
          emailMe.value = false;
          message.info("Please activate SMTP plugin in App store for enabling email notification");
        }
      }
    }
    function setFormData() {
      var _a, _b, _c, _d, _e, _f;
      const col = formColumnData == null ? void 0 : formColumnData.value;
      formViewData.value = {
        ...formViewData.value,
        submit_another_form: !!((_b = (_a = formViewData == null ? void 0 : formViewData.value) == null ? void 0 : _a.submit_another_form) != null ? _b : 0),
        show_blank_form: !!((_d = (_c = formViewData == null ? void 0 : formViewData.value) == null ? void 0 : _c.show_blank_form) != null ? _d : 0)
      };
      {
        let data = {};
        try {
          data = JSON.parse(((_e = formViewData.value) == null ? void 0 : _e.email) || "") || {};
        } catch (e) {
        }
        data[(_f = state.user.value) == null ? void 0 : _f.email] = emailMe.value;
        formViewData.value.email = JSON.stringify(data);
        checkSMTPStatus();
      }
      localColumns.value = col.filter((f) => f.show && f.uidt !== UITypes.Rollup && f.uidt !== UITypes.Lookup && f.uidt !== UITypes.Formula && f.uidt !== UITypes.SpecificDBType).sort((a, b) => a.order - b.order).map((c) => ({ ...c, required: !!(c.required || 0) }));
      systemFieldsIds.value = getSystemColumns(col).map((c) => c.fk_column_id);
      hiddenColumns.value = col.filter((f) => !f.show && !systemFieldsIds.value.includes(f.fk_column_id) && f.uidt !== UITypes.Rollup && f.uidt !== UITypes.Lookup && f.uidt !== UITypes.Formula && f.uidt !== UITypes.SpecificDBType);
    }
    function isRequired(_columnObj, required = false) {
      let columnObj = _columnObj;
      if (columnObj.uidt === UITypes.LinkToAnotherRecord && columnObj.colOptions && columnObj.colOptions.type === RelationTypes.BELONGS_TO) {
        columnObj = columns.value.find((c) => c.id === columnObj.colOptions.fk_child_column_id);
      }
      return required || columnObj && columnObj.rqd && !columnObj.cdf;
    }
    function onEmailChange() {
      updateView();
      checkSMTPStatus();
    }
    async function submitCallback() {
      await loadFormView();
      setFormData();
      showColumnDropdown.value = false;
    }
    const updateColMeta = useDebounceFn(async (col) => {
      if (col.id) {
        try {
          await $api.dbView.formColumnUpdate(col.id, col);
        } catch (e) {
          message.error(await extractSdkResponseErrorMsg(e));
        }
      }
    }, 250);
    watch(submitted, (v) => {
      var _a;
      if (v && ((_a = formViewData == null ? void 0 : formViewData.value) == null ? void 0 : _a.show_blank_form)) {
        secondsRemain.value = 5;
        const intvl = setInterval(() => {
          if (--secondsRemain.value < 0) {
            submitted.value = false;
            clearInterval(intvl);
          }
        }, 1e3);
      }
    });
    function handleMouseUp(col) {
      if (!moved.value) {
        const index = localColumns.value.length;
        col.order = (index ? localColumns.value[index - 1].order : 0) + 1;
        col.show = true;
        saveOrUpdate(col, index);
      }
    }
    onClickOutside(draggableRef, () => {
      activeRow.value = "";
    });
    onMounted(async () => {
      await loadFormView();
      setFormData();
    });
    const __returned__ = { hiddenCols, state, formRef, $api, $e, isUIAllowed, formState, secondsRemain, isEditable, meta, view, loadFormView, insertRow, formColumnData, formViewData, updateFormView, showAll, hideAll, saveOrUpdate, syncLTARRefs, columns, localColumns, hiddenColumns, draggableRef, systemFieldsIds, showColumnDropdown, moved, drag, emailMe, submitted, activeRow, updateView, submitForm, isDbRequired, onMoveCallback, onMove, hideColumn, addAllColumns, shouldSkipColumn, removeAllColumns, checkSMTPStatus, setFormData, isRequired, onEmailChange, submitCallback, updateColMeta, handleMouseUp, Draggable, isVirtualCol };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-36ebfda6"), n = n(), popScopeId(), n);
const _hoisted_1$e = {
  key: 0,
  class: "items-center justify-center text-center mt-2"
};
const _hoisted_2$9 = { class: "text-center" };
const _hoisted_3$8 = {
  key: 0,
  class: "text-gray-400 mt-4"
};
const _hoisted_4$4 = {
  key: 1,
  class: "text-center mt-4"
};
const _hoisted_5$2 = /* @__PURE__ */ createTextVNode(" Submit Another Form");
const _hoisted_6$1 = { class: "flex" };
const _hoisted_7$1 = { class: "flex flex-row flex-1 text-lg" };
const _hoisted_8$1 = { class: "flex flex-row" };
const _hoisted_9$1 = { class: "cursor-pointer mr-2" };
const _hoisted_10 = { class: "flex" };
const _hoisted_11 = { class: "flex flex-row flex-1" };
const _hoisted_12 = { class: "flex flex-row" };
const _hoisted_13 = { class: "mt-4 border-dashed border-2 border-gray-400 py-3 text-gray-400 text-center nc-drag-n-drop-to-hide" };
const _hoisted_14 = { class: "flex items-center prose-sm justify-center text-gray-400" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "h-[200px] !bg-[#dbdad7]" }, null, -1));
const _hoisted_16 = {
  key: 1,
  class: "ml-3 w-full text-bold text-h3"
};
const _hoisted_17 = {
  key: 3,
  class: "ml-3 mb-5 w-full text-bold text-h3"
};
const _hoisted_18 = ["onClick"];
const _hoisted_19 = {
  key: 0,
  class: "absolute flex top-2 right-2"
};
const _hoisted_20 = { class: "flex" };
const _hoisted_21 = { class: "flex flex-row" };
const _hoisted_22 = { class: "items-center flex" };
const _hoisted_23 = ["onClick"];
const _hoisted_24 = { class: "my-3" };
const _hoisted_25 = { class: "text-gray-500 text-xs -mt-1 block" };
const _hoisted_26 = {
  key: 0,
  class: "mt-4 border-dashed border-2 border-gray-400 py-3 text-gray-400 text-center"
};
const _hoisted_27 = { class: "justify-center flex mt-10" };
const _hoisted_28 = {
  key: 0,
  class: "mx-10 px-10"
};
const _hoisted_29 = { class: "text-gray-500 mt-4 mb-2" };
const _hoisted_30 = { class: "text-gray-600 text-bold" };
const _hoisted_31 = { class: "mt-4" };
const _hoisted_32 = { class: "my-4" };
const _hoisted_33 = { class: "ml-4" };
const _hoisted_34 = { class: "my-4" };
const _hoisted_35 = { class: "ml-4" };
const _hoisted_36 = { class: "my-4" };
const _hoisted_37 = { class: "ml-4" };
const _hoisted_38 = { class: "text-bold text-gray-600" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_alert = __unplugin_components_0$4;
  const _component_a_button = Button;
  const _component_a_col = __unplugin_components_2;
  const _component_a_row = __unplugin_components_3;
  const _component_SmartsheetHeaderVirtualCell = __nuxt_component_1$1;
  const _component_SmartsheetHeaderCell = __nuxt_component_2$1;
  const _component_mdi_drag_vertical = __unplugin_components_4$1;
  const _component_a_card = Card;
  const _component_mdi_plus = MdiPlus;
  const _component_SmartsheetColumnEditOrAddProvider = __nuxt_component_2$2;
  const _component_a_dropdown = Dropdown;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2$1;
  const _component_mdi_eye_off_outline = __unplugin_components_10;
  const _component_a_switch = __unplugin_components_6;
  const _component_SmartsheetVirtualCell = __nuxt_component_3$1;
  const _component_SmartsheetCell = __nuxt_component_4;
  const _component_a_form = Form;
  const _component_a_textarea = __unplugin_components_13;
  const _directive_t = resolveDirective("t");
  return $setup.submitted ? (openBlock(), createBlock(_component_a_row, {
    key: 0,
    class: "h-full"
  }, {
    default: withCtx(() => [
      createVNode(_component_a_col, { span: 24 }, {
        default: withCtx(() => [
          $setup.formViewData ? (openBlock(), createElementBlock("div", _hoisted_1$e, [
            createVNode(_component_a_alert, { type: "success" }, {
              message: withCtx(() => [
                createBaseVNode("div", _hoisted_2$9, toDisplayString($setup.formViewData.success_msg || "Successfully submitted form data"), 1)
              ]),
              _: 1
            }),
            $setup.formViewData.show_blank_form ? (openBlock(), createElementBlock("div", _hoisted_3$8, " New form will be loaded after " + toDisplayString($setup.secondsRemain) + " seconds ", 1)) : createCommentVNode("", true),
            $setup.formViewData.submit_another_form ? (openBlock(), createElementBlock("div", _hoisted_4$4, [
              createVNode(_component_a_button, {
                type: "primary",
                size: "large",
                onClick: _cache[0] || (_cache[0] = ($event) => $setup.submitted = false)
              }, {
                default: withCtx(() => [
                  _hoisted_5$2
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : (openBlock(), createBlock(_component_a_row, {
    key: 1,
    class: "h-full flex"
  }, {
    default: withCtx(() => [
      $setup.isEditable ? (openBlock(), createBlock(_component_a_col, {
        key: 0,
        span: 8,
        class: "bg-[#f7f7f7] shadow-md p-5 h-full overflow-auto scrollbar-thin-primary nc-form-left-drawer"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("div", _hoisted_7$1, [
              createBaseVNode("span", null, toDisplayString(_ctx.$t("objects.fields")), 1)
            ]),
            createBaseVNode("div", _hoisted_8$1, [
              createBaseVNode("div", _hoisted_9$1, [
                $setup.hiddenColumns.length ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: "mr-2 nc-form-add-all",
                  style: { "border-bottom": "2px solid rgb(218, 218, 218)" },
                  onClick: $setup.addAllColumns
                }, toDisplayString(_ctx.$t("general.addAll")), 1)) : createCommentVNode("", true),
                $setup.localColumns.length ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: "ml-2 nc-form-remove-all",
                  style: { "border-bottom": "2px solid rgb(218, 218, 218)" },
                  onClick: $setup.removeAllColumns
                }, toDisplayString(_ctx.$t("general.removeAll")), 1)) : createCommentVNode("", true)
              ])
            ])
          ]),
          createVNode($setup["Draggable"], {
            list: $setup.hiddenColumns,
            "item-key": "id",
            draggable: ".item",
            group: "form-inputs",
            onStart: _cache[8] || (_cache[8] = ($event) => $setup.drag = true),
            onEnd: _cache[9] || (_cache[9] = ($event) => $setup.drag = false)
          }, {
            item: withCtx(({ element }) => [
              createVNode(_component_a_card, {
                size: "small",
                class: "m-0 p-0 cursor-pointer item mb-2",
                onMousedown: _cache[1] || (_cache[1] = ($event) => $setup.moved = false),
                onMousemove: _cache[2] || (_cache[2] = ($event) => $setup.moved = false),
                onMouseup: ($event) => $setup.handleMouseUp(element)
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      $setup.isVirtualCol(element) ? (openBlock(), createBlock(_component_SmartsheetHeaderVirtualCell, {
                        key: 0,
                        column: { ...element, title: element.label || element.title },
                        required: $setup.isRequired(element, element.required),
                        "hide-menu": true
                      }, null, 8, ["column", "required"])) : (openBlock(), createBlock(_component_SmartsheetHeaderCell, {
                        key: 1,
                        class: "w-full",
                        column: { ...element, title: element.label || element.title },
                        required: $setup.isRequired(element, element.required),
                        "hide-menu": true
                      }, null, 8, ["column", "required"]))
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      createVNode(_component_mdi_drag_vertical, { class: "flex flex-1" })
                    ])
                  ])
                ]),
                _: 2
              }, 1032, ["onMouseup"])
            ]),
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.$t("msg.info.dragDropHide")), 1),
              createVNode(_component_a_dropdown, {
                visible: $setup.showColumnDropdown,
                "onUpdate:visible": _cache[7] || (_cache[7] = ($event) => $setup.showColumnDropdown = $event),
                trigger: ["click"]
              }, {
                overlay: withCtx(() => [
                  $setup.showColumnDropdown ? (openBlock(), createBlock(_component_SmartsheetColumnEditOrAddProvider, {
                    key: 0,
                    onSubmit: $setup.submitCallback,
                    onCancel: _cache[4] || (_cache[4] = ($event) => $setup.showColumnDropdown = false),
                    onClick: _cache[5] || (_cache[5] = withModifiers(() => {
                    }, ["stop"])),
                    onKeydown: _cache[6] || (_cache[6] = withModifiers(() => {
                    }, ["stop"]))
                  })) : createCommentVNode("", true)
                ]),
                default: withCtx(() => [
                  createVNode(_component_a_button, {
                    type: "link",
                    class: "w-full caption mt-2",
                    size: "large",
                    onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.showColumnDropdown = true, ["stop"]))
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_14, [
                        createVNode(_component_mdi_plus),
                        createTextVNode(toDisplayString(_ctx.$t("activity.addField")), 1)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["visible"])
            ]),
            _: 1
          }, 8, ["list"])
        ]),
        _: 1
      })) : createCommentVNode("", true),
      $setup.formViewData ? (openBlock(), createBlock(_component_a_col, {
        key: 1,
        span: $setup.isEditable ? 16 : 24,
        class: "h-full overflow-auto scrollbar-thin-primary"
      }, {
        default: withCtx(() => [
          _hoisted_15,
          createVNode(_component_a_card, {
            class: "m-0 rounded-b-0 p-4 border-none",
            "body-style": {
              maxWidth: "700px",
              margin: "0 auto",
              marginTop: "-200px"
            }
          }, {
            default: withCtx(() => {
              var _a;
              return [
                createVNode(_component_a_form, {
                  ref: "formRef",
                  model: $setup.formState,
                  class: "nc-form"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_card, { class: "rounded m-2 py-10 px-5" }, {
                      default: withCtx(() => [
                        $setup.isEditable ? (openBlock(), createBlock(_component_a_form_item, {
                          key: 0,
                          class: "m-0 gap-0 p-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_a_input, {
                              value: $setup.formViewData.heading,
                              "onUpdate:value": _cache[10] || (_cache[10] = ($event) => $setup.formViewData.heading = $event),
                              class: "w-full !font-bold !text-4xl",
                              size: "large",
                              "hide-details": "",
                              placeholder: "Form Title",
                              bordered: false,
                              onBlur: $setup.updateView,
                              onKeydown: withKeys($setup.updateView, ["enter"])
                            }, null, 8, ["value", "onKeydown"])
                          ]),
                          _: 1
                        })) : (openBlock(), createElementBlock("div", _hoisted_16, toDisplayString($setup.formViewData.heading), 1)),
                        $setup.isEditable ? (openBlock(), createBlock(_component_a_form_item, {
                          key: 2,
                          class: "m-0 gap-0 p-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_a_input, {
                              value: $setup.formViewData.subheading,
                              "onUpdate:value": _cache[11] || (_cache[11] = ($event) => $setup.formViewData.subheading = $event),
                              class: "w-full",
                              size: "large",
                              "hide-details": "",
                              placeholder: _ctx.$t("msg.info.formDesc"),
                              bordered: false,
                              disabled: !$setup.isEditable,
                              onBlur: $setup.updateView,
                              onClick: $setup.updateView
                            }, null, 8, ["value", "placeholder", "disabled"])
                          ]),
                          _: 1
                        })) : (openBlock(), createElementBlock("div", _hoisted_17, toDisplayString($setup.formViewData.subheading), 1)),
                        createVNode($setup["Draggable"], {
                          ref: "draggableRef",
                          list: $setup.localColumns,
                          "item-key": "fk_column_id",
                          draggable: ".item",
                          group: "form-inputs",
                          class: "h-full",
                          move: $setup.onMoveCallback,
                          onChange: _cache[14] || (_cache[14] = ($event) => $setup.onMove($event)),
                          onStart: _cache[15] || (_cache[15] = ($event) => $setup.drag = true),
                          onEnd: _cache[16] || (_cache[16] = ($event) => $setup.drag = false)
                        }, {
                          item: withCtx(({ element, index }) => [
                            createBaseVNode("div", {
                              class: normalizeClass(["nc-editable item cursor-pointer hover:bg-primary hover:bg-opacity-10 p-3 my-2 relative", [
                                `nc-form-drag-${element.title.replaceAll(" ", "")}`,
                                {
                                  "border-1": $setup.activeRow === element.title
                                }
                              ]]),
                              onClick: ($event) => $setup.activeRow = element.title
                            }, [
                              $setup.isUIAllowed("editFormView") && !$setup.isRequired(element, element.required) ? (openBlock(), createElementBlock("div", _hoisted_19, [
                                createVNode(_component_mdi_eye_off_outline, {
                                  class: "opacity-0 nc-field-remove-icon",
                                  onClick: withModifiers(($event) => $setup.hideColumn(index), ["stop"])
                                }, null, 8, ["onClick"])
                              ])) : createCommentVNode("", true),
                              $setup.activeRow === element.title ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                createBaseVNode("div", _hoisted_20, [
                                  createBaseVNode("div", {
                                    class: normalizeClass(["flex flex-1 opacity-0 align-center gap-2", { "opacity-100": $setup.activeRow === element.title }])
                                  }, [
                                    createBaseVNode("div", _hoisted_21, [
                                      createVNode(_component_mdi_drag_vertical, { class: "flex flex-1" })
                                    ]),
                                    createBaseVNode("div", _hoisted_22, [
                                      createBaseVNode("span", {
                                        class: "text-xs text-gray-500 mr-2 nc-form-input-required",
                                        onClick: () => {
                                          element.required = !element.required;
                                          $setup.updateColMeta(element);
                                        }
                                      }, toDisplayString(_ctx.$t("general.required")), 9, _hoisted_23),
                                      createVNode(_component_a_switch, {
                                        checked: element.required,
                                        "onUpdate:checked": ($event) => element.required = $event,
                                        size: "small",
                                        class: "ml-2",
                                        onChange: ($event) => $setup.updateColMeta(element)
                                      }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                    ])
                                  ], 2)
                                ]),
                                createBaseVNode("div", _hoisted_24, [
                                  createVNode(_component_a_form_item, { class: "my-0 w-1/2 !mb-1" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_input, {
                                        value: element.label,
                                        "onUpdate:value": ($event) => element.label = $event,
                                        size: "small",
                                        class: "form-meta-input !bg-[#dbdbdb] nc-form-input-label",
                                        placeholder: _ctx.$t("msg.info.formInput"),
                                        onChange: ($event) => $setup.updateColMeta(element)
                                      }, null, 8, ["value", "onUpdate:value", "placeholder", "onChange"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_a_form_item, { class: "mt-2 mb-0 w-1/2 !mb-1" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_input, {
                                        value: element.description,
                                        "onUpdate:value": ($event) => element.description = $event,
                                        size: "small",
                                        class: "form-meta-input !bg-[#dbdbdb] text-sm nc-form-input-help-text",
                                        placeholder: _ctx.$t("msg.info.formHelpText"),
                                        onChange: ($event) => $setup.updateColMeta(element)
                                      }, null, 8, ["value", "onUpdate:value", "placeholder", "onChange"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ], 64)) : createCommentVNode("", true),
                              createBaseVNode("div", null, [
                                $setup.isVirtualCol(element) ? (openBlock(), createBlock(_component_SmartsheetHeaderVirtualCell, {
                                  key: 0,
                                  column: { ...element, title: element.label || element.title },
                                  required: $setup.isRequired(element, element.required),
                                  "hide-menu": true
                                }, null, 8, ["column", "required"])) : (openBlock(), createBlock(_component_SmartsheetHeaderCell, {
                                  key: 1,
                                  column: { ...element, title: element.label || element.title },
                                  required: $setup.isRequired(element, element.required),
                                  "hide-menu": true
                                }, null, 8, ["column", "required"]))
                              ]),
                              $setup.isVirtualCol(element) ? (openBlock(), createBlock(_component_a_form_item, {
                                key: 2,
                                class: "!m-0 gap-0 p-0",
                                name: element.title,
                                rules: [{ required: element.required, message: `${element.title} is required` }]
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_SmartsheetVirtualCell, {
                                    modelValue: $setup.formState[element.title],
                                    "onUpdate:modelValue": ($event) => $setup.formState[element.title] = $event,
                                    class: normalizeClass(["nc-input", `nc-form-input-${element.title.replaceAll(" ", "")}`]),
                                    column: element,
                                    onClick: _cache[12] || (_cache[12] = withModifiers(() => {
                                    }, ["stop", "prevent"]))
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "column"])
                                ]),
                                _: 2
                              }, 1032, ["name", "rules"])) : (openBlock(), createBlock(_component_a_form_item, {
                                key: 3,
                                class: "!m-0 gap-0 p-0",
                                name: element.title,
                                rules: [{ required: element.required, message: `${element.title} is required` }]
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_SmartsheetCell, {
                                    modelValue: $setup.formState[element.title],
                                    "onUpdate:modelValue": ($event) => $setup.formState[element.title] = $event,
                                    class: normalizeClass(["nc-input", `nc-form-input-${element.title.replaceAll(" ", "")}`]),
                                    column: element,
                                    "edit-enabled": true,
                                    onClick: _cache[13] || (_cache[13] = withModifiers(() => {
                                    }, ["stop", "prevent"]))
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "column"])
                                ]),
                                _: 2
                              }, 1032, ["name", "rules"])),
                              createBaseVNode("span", _hoisted_25, toDisplayString(element.description), 1)
                            ], 10, _hoisted_18)
                          ]),
                          footer: withCtx(() => [
                            !$setup.localColumns.length ? (openBlock(), createElementBlock("div", _hoisted_26, " Drag and drop fields here to add ")) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["list"]),
                        createBaseVNode("div", _hoisted_27, [
                          createVNode(_component_a_button, {
                            type: "primary",
                            class: "flex items-center gap-2 nc-form-submit",
                            size: "large",
                            onClick: $setup.submitForm
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("general.submit")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"]),
                $setup.isEditable ? (openBlock(), createElementBlock("div", _hoisted_28, [
                  createBaseVNode("div", _hoisted_29, toDisplayString(_ctx.$t("msg.info.afterFormSubmitted")), 1),
                  createBaseVNode("label", _hoisted_30, toDisplayString(_ctx.$t("msg.info.showMessage")) + ": ", 1),
                  createVNode(_component_a_textarea, {
                    value: $setup.formViewData.success_msg,
                    "onUpdate:value": _cache[17] || (_cache[17] = ($event) => $setup.formViewData.success_msg = $event),
                    rows: 3,
                    "hide-details": "",
                    class: "nc-form-after-submit-msg",
                    onChange: $setup.updateView
                  }, null, 8, ["value"]),
                  createBaseVNode("div", _hoisted_31, [
                    createBaseVNode("div", _hoisted_32, [
                      withDirectives(createVNode(_component_a_switch, {
                        checked: $setup.formViewData.submit_another_form,
                        "onUpdate:checked": _cache[18] || (_cache[18] = ($event) => $setup.formViewData.submit_another_form = $event),
                        size: "small",
                        class: "nc-form-checkbox-submit-another-form",
                        onChange: $setup.updateView
                      }, null, 8, ["checked"]), [
                        [_directive_t, [`a:form-view:submit-another-form`]]
                      ]),
                      createBaseVNode("span", _hoisted_33, toDisplayString(_ctx.$t("msg.info.submitAnotherForm")), 1)
                    ]),
                    createBaseVNode("div", _hoisted_34, [
                      withDirectives(createVNode(_component_a_switch, {
                        checked: $setup.formViewData.show_blank_form,
                        "onUpdate:checked": _cache[19] || (_cache[19] = ($event) => $setup.formViewData.show_blank_form = $event),
                        size: "small",
                        class: "nc-form-checkbox-show-blank-form",
                        onChange: $setup.updateView
                      }, null, 8, ["checked"]), [
                        [_directive_t, [`a:form-view:show-blank-form`]]
                      ]),
                      createBaseVNode("span", _hoisted_35, toDisplayString(_ctx.$t("msg.info.showBlankForm")), 1)
                    ]),
                    createBaseVNode("div", _hoisted_36, [
                      withDirectives(createVNode(_component_a_switch, {
                        checked: $setup.emailMe,
                        "onUpdate:checked": _cache[20] || (_cache[20] = ($event) => $setup.emailMe = $event),
                        size: "small",
                        class: "nc-form-checkbox-send-email",
                        onChange: $setup.onEmailChange
                      }, null, 8, ["checked"]), [
                        [_directive_t, [`a:form-view:email-me`]]
                      ]),
                      createBaseVNode("span", _hoisted_37, [
                        createTextVNode(toDisplayString(_ctx.$t("msg.info.emailForm")) + " ", 1),
                        createBaseVNode("span", _hoisted_38, toDisplayString((_a = $setup.state.user.value) == null ? void 0 : _a.email), 1)
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["span"])) : createCommentVNode("", true)
    ]),
    _: 1
  }));
}
var __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-36ebfda6"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ViewCreate",
  props: {
    modelValue: { type: Boolean },
    type: null,
    title: null,
    selectedViewId: null
  },
  emits: ["update:modelValue", "created"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const inputEl = ref();
    const formValidator = ref();
    const vModel = useVModel(props, "modelValue", emits);
    const { t } = useI18n();
    const { isLoading: loading, api } = useApi();
    const meta = inject(MetaInj);
    const viewList = inject(ViewListInj);
    const form = reactive({
      title: props.title || "",
      type: props.type,
      copy_from_id: null
    });
    const formRules = [
      { required: true, message: `${t("labels.viewName")} ${t("general.required")}` },
      {
        validator: (_, v) => new Promise((resolve, reject) => {
          (unref(viewList) || []).every((v1) => (v1.alias || v1.title) !== v) ? resolve(true) : reject(new Error(`View name should be unique`));
        }),
        message: "View name should be unique"
      }
    ];
    const typeAlias = computed(() => ({
      [ViewTypes.GRID]: "grid",
      [ViewTypes.GALLERY]: "gallery",
      [ViewTypes.FORM]: "form",
      [ViewTypes.KANBAN]: "kanban"
    })[props.type]);
    watch(vModel, (value) => value && init());
    watch(() => props.type, (newType) => form.type = newType);
    function init() {
      form.title = generateUniqueTitle(capitalize(ViewTypes[props.type].toLowerCase()), (viewList == null ? void 0 : viewList.value) || [], "title");
      if (props.selectedViewId) {
        form.copy_from_id = props.selectedViewId;
      }
      nextTick(() => {
        var _a;
        const el = (_a = inputEl.value) == null ? void 0 : _a.$el;
        if (el) {
          el.focus();
          el.select();
        }
      });
    }
    async function onSubmit() {
      var _a;
      const isValid = await ((_a = formValidator.value) == null ? void 0 : _a.validateFields());
      if (isValid && form.type) {
        const _meta = unref(meta);
        if (!_meta || !_meta.id)
          return;
        try {
          let data = null;
          switch (form.type) {
            case ViewTypes.GRID:
              data = await api.dbView.gridCreate(_meta.id, form);
              break;
            case ViewTypes.GALLERY:
              data = await api.dbView.galleryCreate(_meta.id, form);
              break;
            case ViewTypes.FORM:
              data = await api.dbView.formCreate(_meta.id, form);
              break;
          }
          if (data) {
            message.success("View created successfully");
            emits("created", data);
          }
        } catch (e) {
          message.error(e.message);
        }
        vModel.value = false;
      }
    }
    const __returned__ = { props, emits, inputEl, formValidator, vModel, t, loading, api, meta, viewList, form, formRules, typeAlias, init, onSubmit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$d = { class: "text-capitalize" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2$1;
  const _component_a_form = Form;
  const _component_a_button = Button;
  const _component_a_modal = Modal;
  return openBlock(), createBlock(_component_a_modal, {
    visible: $setup.vModel,
    "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => $setup.vModel = $event),
    class: "!top-[35%]",
    "confirm-loading": $setup.loading
  }, {
    title: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.$t("general.create")) + " ", 1),
      createBaseVNode("span", _hoisted_1$d, toDisplayString($setup.typeAlias), 1),
      createTextVNode(" " + toDisplayString(_ctx.$t("objects.view")), 1)
    ]),
    footer: withCtx(() => [
      createVNode(_component_a_button, {
        key: "back",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.vModel = false)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("general.cancel")), 1)
        ]),
        _: 1
      }),
      createVNode(_component_a_button, {
        key: "submit",
        type: "primary",
        loading: $setup.loading,
        onClick: $setup.onSubmit
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("general.submit")), 1)
        ]),
        _: 1
      }, 8, ["loading"])
    ]),
    default: withCtx(() => [
      createVNode(_component_a_form, {
        ref: "formValidator",
        layout: "vertical",
        model: $setup.form
      }, {
        default: withCtx(() => [
          createVNode(_component_a_form_item, {
            label: _ctx.$t("labels.viewName"),
            name: "title",
            rules: $setup.formRules
          }, {
            default: withCtx(() => [
              createVNode(_component_a_input, {
                ref: "inputEl",
                value: $setup.form.title,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.form.title = $event),
                autofocus: "",
                onKeydown: withKeys($setup.onSubmit, ["enter"])
              }, null, 8, ["value", "onKeydown"])
            ]),
            _: 1
          }, 8, ["label"])
        ]),
        _: 1
      }, 8, ["model"])
    ]),
    _: 1
  }, 8, ["visible", "confirm-loading"]);
}
var __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const _hoisted_1$c = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$8
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$7);
}
var __unplugin_components_4 = { name: "mdi-trash-can", render: render$3 };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "RenameableMenuItem",
  props: {
    view: null,
    onValidate: null
  },
  emits: ["update:view", "changeView", "rename", "delete", "openModal"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "view", emits);
    const { $e } = useNuxtApp();
    const { isUIAllowed } = useUIPermission();
    const isLocked = inject(IsLockedInj);
    let isEditing = ref(false);
    let isStopped = ref(false);
    let originalTitle = ref();
    const onClick = useDebounceFn(() => {
      if (isEditing.value || isStopped.value)
        return;
      emits("changeView", vModel.value);
    }, 250);
    function onDblClick() {
      if (!isEditing.value) {
        isEditing.value = true;
        originalTitle.value = vModel.value.title;
      }
    }
    function onKeyDown(event) {
      if (event.key === "Escape") {
        onKeyEsc(event);
      } else if (event.key === "Enter") {
        onKeyEnter(event);
      }
    }
    function onKeyEnter(event) {
      event.stopImmediatePropagation();
      event.preventDefault();
      onRename();
    }
    function onKeyEsc(event) {
      event.stopImmediatePropagation();
      event.preventDefault();
      onCancel();
    }
    onKeyStroke("Enter", (event) => {
      if (isEditing.value) {
        onKeyEnter(event);
      }
    });
    function focusInput(el) {
      if (el)
        el.focus();
    }
    function onDuplicate() {
      emits("openModal", { type: vModel.value.type, title: vModel.value.title, copyViewId: vModel.value.id });
      $e("c:view:copy", { view: vModel.value.type });
    }
    async function onDelete() {
      emits("delete", vModel.value);
    }
    async function onRename() {
      if (!isEditing.value)
        return;
      const isValid = props.onValidate(vModel.value);
      if (isValid !== true) {
        message.error(isValid);
        onCancel();
        return;
      }
      if (vModel.value.title === "" || vModel.value.title === originalTitle.value) {
        onCancel();
        return;
      }
      emits("rename", vModel.value);
      onStopEdit();
    }
    function onCancel() {
      if (!isEditing.value)
        return;
      vModel.value.title = originalTitle.value;
      onStopEdit();
    }
    function onStopEdit() {
      isStopped.value = true;
      isEditing.value = false;
      originalTitle.value = "";
      setTimeout(() => {
        isStopped.value = false;
      }, 250);
    }
    const __returned__ = { props, emits, vModel, $e, isUIAllowed, isLocked, isEditing, isStopped, originalTitle, onClick, onDblClick, onKeyDown, onKeyEnter, onKeyEsc, focusInput, onDuplicate, onDelete, onRename, onCancel, onStopEdit, viewIcons };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$b = { class: "text-xs flex items-center w-full gap-2" };
const _hoisted_2$7 = { class: "flex w-auto" };
const _hoisted_3$6 = { key: 1 };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_5$1 = {
  key: 2,
  class: "flex items-center gap-1"
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiDrag = __unplugin_components_0$5;
  const _component_a_input = Input;
  const _component_MdiContentCopy = __unplugin_components_3$1;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_MdiTrashCan = __unplugin_components_4;
  const _component_a_menu_item = __unplugin_components_0$6;
  const _directive_t = resolveDirective("t");
  return openBlock(), createBlock(_component_a_menu_item, {
    class: "select-none group !flex !items-center !my-0 hover:bg-primary !hover:bg-opacity-5",
    onDblclick: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.isUIAllowed("virtualViewsCreateOrEdit") && $setup.onDblClick(), ["stop"])),
    onClick: withModifiers($setup.onClick, ["stop"])
  }, {
    default: withCtx(() => {
      var _a, _b;
      return [
        withDirectives((openBlock(), createElementBlock("div", _hoisted_1$b, [
          createBaseVNode("div", _hoisted_2$7, [
            createVNode(_component_MdiDrag, {
              class: "nc-drag-icon hidden group-hover:block transition-opacity opacity-0 group-hover:opacity-100 text-gray-500 !cursor-move",
              onClick: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop", "prevent"]))
            }),
            (openBlock(), createBlock(resolveDynamicComponent($setup.viewIcons[$setup.vModel.type].icon), {
              class: "nc-view-icon group-hover:hidden",
              style: normalizeStyle({ color: (_b = $setup.viewIcons[(_a = $setup.vModel) == null ? void 0 : _a.type]) == null ? void 0 : _b.color })
            }, null, 8, ["style"]))
          ]),
          $setup.isEditing ? (openBlock(), createBlock(_component_a_input, {
            key: 0,
            ref: $setup.focusInput,
            value: $setup.vModel.title,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.vModel.title = $event),
            onBlur: $setup.onCancel,
            onKeydown: _cache[2] || (_cache[2] = ($event) => $setup.onKeyDown($event))
          }, null, 8, ["value"])) : (openBlock(), createElementBlock("div", _hoisted_3$6, toDisplayString($setup.vModel.alias || $setup.vModel.title), 1)),
          _hoisted_4$3,
          !$setup.isEditing && !$setup.isLocked && $setup.isUIAllowed("virtualViewsCreateOrEdit") ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
            createVNode(_component_a_tooltip, { placement: "left" }, {
              title: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("activity.copyView")), 1)
              ]),
              default: withCtx(() => [
                createVNode(_component_MdiContentCopy, {
                  class: "hidden group-hover:block text-gray-500",
                  onClick: withModifiers($setup.onDuplicate, ["stop"])
                }, null, 8, ["onClick"])
              ]),
              _: 1
            }),
            !$setup.vModel.is_default ? (openBlock(), createBlock(_component_a_tooltip, {
              key: 0,
              placement: "left"
            }, {
              title: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("activity.deleteView")), 1)
              ]),
              default: withCtx(() => [
                createVNode(_component_MdiTrashCan, {
                  class: "hidden group-hover:block text-red-500 nc-view-delete-icon",
                  onClick: withModifiers($setup.onDelete, ["stop"])
                }, null, 8, ["onClick"])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ])), [
          [_directive_t, ["a:view:open", { view: $setup.vModel.type }]]
        ])
      ];
    }),
    _: 1
  }, 8, ["onClick"]);
}
var RenameableMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ViewDelete",
  props: {
    modelValue: { type: Boolean },
    view: null
  },
  emits: ["update:modelValue", "deleted"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "modelValue", emits);
    const { api, isLoading } = useApi();
    const { $e } = useNuxtApp();
    onKeyStroke("Escape", () => vModel.value = false);
    onKeyStroke("Enter", () => onDelete());
    async function onDelete() {
      if (!props.view)
        return;
      try {
        await api.dbView.delete(props.view.id);
        message.success("View deleted successfully");
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      emits("deleted");
      $e("a:view:delete", { view: props.view.type });
    }
    const __returned__ = { props, emits, vModel, api, isLoading, $e, onDelete };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$a = /* @__PURE__ */ createTextVNode(" Are you sure you want to delete this view? ");
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = Button;
  const _component_a_modal = Modal;
  return openBlock(), createBlock(_component_a_modal, {
    visible: $setup.vModel,
    "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => $setup.vModel = $event),
    class: "!top-[35%]",
    "confirm-loading": $setup.isLoading
  }, {
    title: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.$t("general.delete")) + " " + toDisplayString(_ctx.$t("objects.view")), 1)
    ]),
    footer: withCtx(() => [
      createVNode(_component_a_button, {
        key: "back",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.vModel = false)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("general.cancel")), 1)
        ]),
        _: 1
      }),
      createVNode(_component_a_button, {
        key: "submit",
        danger: "",
        "html-type": "submit",
        loading: $setup.isLoading,
        onClick: $setup.onDelete
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("general.submit")), 1)
        ]),
        _: 1
      }, 8, ["loading"])
    ]),
    default: withCtx(() => [
      _hoisted_1$a
    ]),
    _: 1
  }, 8, ["visible", "confirm-loading"]);
}
var DlgViewDelete = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MenuTop",
  emits: ["openModal", "deleted", "sorted"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const viewTypeAlias = {
      [ViewTypes.GRID]: "grid",
      [ViewTypes.FORM]: "form",
      [ViewTypes.GALLERY]: "gallery"
    };
    const activeView = inject(ActiveViewInj, ref());
    const views = inject(ViewListInj, ref([]));
    const { api } = useApi();
    const router = useRouter();
    const route = useRoute();
    const selected = ref([]);
    let dragging = ref(false);
    const menuRef = ref();
    let isMarked = ref(false);
    watch(activeView, (nextActiveView) => {
      const _nextActiveView = nextActiveView;
      if (_nextActiveView && _nextActiveView.id) {
        selected.value = [_nextActiveView.id];
      }
    });
    function markItem(id) {
      isMarked.value = id;
      setTimeout(() => {
        isMarked.value = false;
      }, 300);
    }
    function validate(view) {
      if (!view.title || view.title.trim().length < 0) {
        return "View name is required";
      }
      if (views.value.some((v) => v.title === view.title && v.id !== view.id)) {
        return "View name should be unique";
      }
      return true;
    }
    function onSortStart(evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();
      dragging.value = true;
    }
    async function onSortEnd(evt) {
      evt.stopImmediatePropagation();
      evt.preventDefault();
      dragging.value = false;
      if (views.value.length < 2)
        return;
      const { newIndex = 0, oldIndex = 0 } = evt;
      if (newIndex === oldIndex)
        return;
      const children = evt.to.children;
      const previousEl = children[newIndex - 1];
      const nextEl = children[newIndex + 1];
      const currentItem = views.value.find((v) => v.id === evt.item.id);
      const previousItem = previousEl ? views.value.find((v) => v.id === previousEl.id) : {};
      const nextItem = nextEl ? views.value.find((v) => v.id === nextEl.id) : {};
      let nextOrder;
      if (views.value.length - 1 === newIndex) {
        nextOrder = parseFloat(previousItem.order) + 1;
      } else if (newIndex === 0) {
        nextOrder = parseFloat(nextItem.order) / 2;
      } else {
        nextOrder = (parseFloat(previousItem.order) + parseFloat(nextItem.order)) / 2;
      }
      const _nextOrder = !isNaN(Number(nextOrder)) ? nextOrder.toString() : oldIndex.toString();
      currentItem.order = _nextOrder;
      await api.dbView.update(currentItem.id, { order: _nextOrder });
      markItem(currentItem.id);
    }
    let sortable;
    const initSortable = (el) => {
      if (sortable)
        sortable.destroy();
      sortable = new Sortable(el, {
        handle: ".nc-drag-icon",
        ghostClass: "ghost",
        onStart: onSortStart,
        onEnd: onSortEnd
      });
    };
    onMounted(() => menuRef.value && initSortable(menuRef.value.$el));
    function changeView(view) {
      router.push({ params: { viewTitle: view.title || "" } });
      if (view.type === 1 && selected.value[0] === view.id) {
        router.go(0);
      }
    }
    async function onRename(view) {
      try {
        await api.dbView.update(view.id, {
          title: view.title,
          order: String(view.order)
        });
        message.success("View renamed successfully");
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    }
    function openDeleteDialog(view) {
      const isOpen = ref(true);
      const { close } = useDialog(DlgViewDelete, {
        "modelValue": isOpen,
        "view": view,
        "onUpdate:modelValue": closeDialog,
        "onDeleted": () => {
          closeDialog();
          emits("deleted");
          activeView.value = views.value[0];
        }
      });
      function closeDialog() {
        isOpen.value = false;
        close(1e3);
      }
    }
    const __returned__ = { emits, viewTypeAlias, activeView, views, api, router, route, selected, dragging, menuRef, isMarked, markItem, validate, onSortStart, onSortEnd, sortable, initSortable, changeView, onRename, openDeleteDialog, RenameableMenuItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_menu = Menu;
  return openBlock(), createBlock(_component_a_menu, {
    ref: "menuRef",
    class: normalizeClass([{ dragging: $setup.dragging }, "nc-views-menu flex-1"]),
    "selected-keys": $setup.selected
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.views, (view, index) => {
        return openBlock(), createBlock($setup["RenameableMenuItem"], {
          id: view.id,
          key: view.id,
          view,
          "on-validate": $setup.validate,
          class: normalizeClass(["transition-all ease-in duration-300", {
            "bg-gray-100": $setup.isMarked === view.id,
            "active": $setup.route.params.viewTitle && $setup.route.params.viewTitle === view.title || $setup.route.params.viewTitle === "" && index === 0,
            [`nc-view-item nc-${$setup.viewTypeAlias[view.type] || view.type}-view-item`]: true
          }]),
          onChangeView: $setup.changeView,
          onOpenModal: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("openModal", $event)),
          onDelete: ($event) => $setup.openDeleteDialog(view),
          onRename: $setup.onRename
        }, null, 8, ["id", "view", "class", "onDelete"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["class", "selected-keys"]);
}
var MenuTop = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MenuBottom",
  emits: ["openModal"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const { isUIAllowed } = useUIPermission();
    const isView = ref(false);
    function onOpenModal(type, title = "") {
      emits("openModal", { type, title });
    }
    const __returned__ = { emits, isUIAllowed, isView, onOpenModal, ViewTypes, viewIcons };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$9 = { key: 0 };
const _hoisted_2$6 = { class: "px-3 py-1 text-xs font-semibold flex items-center gap-4 text-gray-500" };
const _hoisted_3$5 = { class: "nc-project-menu-item text-xs flex items-center h-full w-full gap-2" };
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_5 = { class: "nc-project-menu-item text-xs flex items-center h-full w-full gap-2" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_7 = { class: "nc-project-menu-item text-xs flex items-center h-full w-full gap-2" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "w-full h-4" }, null, -1);
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mdi_plus = MdiPlus;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_a_menu_item = __unplugin_components_0$6;
  const _component_a_menu = Menu;
  return openBlock(), createBlock(_component_a_menu, {
    "selected-keys": [],
    class: "flex flex-col"
  }, {
    default: withCtx(() => [
      $setup.isUIAllowed("virtualViewsCreateOrEdit") ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("h3", _hoisted_2$6, toDisplayString(_ctx.$t("activity.createView")), 1),
        createVNode(_component_a_menu_item, {
          key: "grid",
          class: "group !flex !items-center !my-0 !h-[30px] nc-create-3-view",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.onOpenModal($setup.ViewTypes.GRID))
        }, {
          default: withCtx(() => [
            createVNode(_component_a_tooltip, {
              "mouse-enter-delay": 1,
              placement: "left"
            }, {
              title: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("msg.info.addView.grid")), 1)
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3$5, [
                  (openBlock(), createBlock(resolveDynamicComponent($setup.viewIcons[$setup.ViewTypes.GRID].icon), {
                    style: normalizeStyle({ color: $setup.viewIcons[$setup.ViewTypes.GRID].color })
                  }, null, 8, ["style"])),
                  createBaseVNode("div", null, toDisplayString(_ctx.$t("objects.viewType.grid")), 1),
                  _hoisted_4$2,
                  createVNode(_component_mdi_plus, { class: "group-hover:text-primary" })
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_a_menu_item, {
          key: "gallery",
          class: "group !flex !items-center !my-0 nc-create-2-view",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.onOpenModal($setup.ViewTypes.GALLERY))
        }, {
          default: withCtx(() => [
            createVNode(_component_a_tooltip, {
              "mouse-enter-delay": 1,
              placement: "left"
            }, {
              title: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("msg.info.addView.gallery")), 1)
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_5, [
                  (openBlock(), createBlock(resolveDynamicComponent($setup.viewIcons[$setup.ViewTypes.GALLERY].icon), {
                    style: normalizeStyle({ color: $setup.viewIcons[$setup.ViewTypes.GALLERY].color })
                  }, null, 8, ["style"])),
                  createBaseVNode("div", null, toDisplayString(_ctx.$t("objects.viewType.gallery")), 1),
                  _hoisted_6,
                  createVNode(_component_mdi_plus, { class: "group-hover:text-primary" })
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        !$setup.isView ? (openBlock(), createBlock(_component_a_menu_item, {
          key: "form",
          class: "group !flex !items-center !my-0 !h-[30px] nc-create-1-view",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.onOpenModal($setup.ViewTypes.FORM))
        }, {
          default: withCtx(() => [
            createVNode(_component_a_tooltip, {
              "mouse-enter-delay": 1,
              placement: "left"
            }, {
              title: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("msg.info.addView.form")), 1)
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_7, [
                  (openBlock(), createBlock(resolveDynamicComponent($setup.viewIcons[$setup.ViewTypes.FORM].icon), {
                    style: normalizeStyle({ color: $setup.viewIcons[$setup.ViewTypes.FORM].color })
                  }, null, 8, ["style"])),
                  createBaseVNode("div", null, toDisplayString(_ctx.$t("objects.viewType.form")), 1),
                  _hoisted_8,
                  createVNode(_component_mdi_plus, { class: "group-hover:text-primary" })
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        _hoisted_9
      ])) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
var MenuBottom = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _hoisted_1$8 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m23 12l-4-4v3h-9v2h9v3M1 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3h-2V6H3v12h12v-3h2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$5
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$4);
}
var __unplugin_components_0$2 = { name: "mdi-export", render: render$2 };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ExportCache",
  setup(__props, { expose }) {
    expose();
    const { api } = useApi();
    async function exportCache() {
      try {
        const data = await api.utils.cacheGet();
        if (!data) {
          message.info("Cache is empty");
          return;
        }
        const blob = new Blob([JSON.stringify(data)], {
          type: "text/plain;charset=utf-8"
        });
        FileSaver.saveAs(blob, "cache_exported.json");
        message.info("Exported Cache Successfully");
      } catch (e) {
        message.error(e.message);
      }
    }
    const __returned__ = { api, exportCache };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = /* @__PURE__ */ createBaseVNode("span", null, " Export Cache ", -1);
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mdi_export = __unplugin_components_0$2;
  const _component_a_tooltip = __unplugin_components_1;
  return openBlock(), createBlock(_component_a_tooltip, { placement: "bottom" }, {
    title: withCtx(() => [
      _hoisted_1$7
    ]),
    default: withCtx(() => [
      createVNode(_component_mdi_export, {
        class: "cursor-pointer",
        onClick: $setup.exportCache
      })
    ]),
    _: 1
  });
}
var ExportCache = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _hoisted_1$6 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$4
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$3);
}
var __unplugin_components_0$1 = { name: "mdi-delete", render: render$1 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DeleteCache",
  setup(__props, { expose }) {
    expose();
    const { api } = useApi();
    async function deleteCache() {
      try {
        await api.utils.cacheDelete();
        message.info("Deleted Cache Successfully");
      } catch (e) {
        message.error(e.message);
      }
    }
    const __returned__ = { api, deleteCache };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode("span", null, " Delete Cache ", -1);
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mdi_delete = __unplugin_components_0$1;
  const _component_a_tooltip = __unplugin_components_1;
  return openBlock(), createBlock(_component_a_tooltip, { placement: "bottom" }, {
    title: withCtx(() => [
      _hoisted_1$5
    ]),
    default: withCtx(() => [
      createVNode(_component_mdi_delete, {
        class: "cursor-pointer",
        onClick: $setup.deleteCache
      })
    ]),
    _: 1
  });
}
var DeleteCache = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _hoisted_1$4 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M20 8h-2.81c-.45-.8-1.07-1.5-1.82-2L17 4.41L15.59 3l-2.17 2.17a6.002 6.002 0 0 0-2.83 0L8.41 3L7 4.41L8.62 6c-.75.5-1.36 1.21-1.81 2H4v2h2.09c-.06.33-.09.66-.09 1v1H4v2h2v1c0 .34.03.67.09 1H4v2h2.81A5.988 5.988 0 0 0 15 20.18c.91-.52 1.67-1.28 2.19-2.18H20v-2h-2.09c.06-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.03-.67-.09-1H20V8m-4 7a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4v4m-2-5v2h-4v-2h4m-4 4h4v2h-4v-2Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$2);
}
var __unplugin_components_0 = { name: "mdi-bug-outline", render };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DebugMeta",
  setup(__props, { expose }) {
    expose();
    const editorOpen = ref(false);
    const tabKey = ref();
    const __$temp_1 = useMetas(), metas = toRef(__$temp_1, "metas");
    const { tables } = useTable();
    const localTables = tables.value.filter((t) => metas.value[t.id]);
    const __returned__ = { editorOpen, tabKey, metas, tables, localTables };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("span", null, " Debug Meta ", -1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mdi_bug_outline = __unplugin_components_0;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_MonacoEditor = __nuxt_component_0$2;
  const _component_a_tab_pane = __unplugin_components_1$1;
  const _component_a_tabs = Tabs;
  const _component_a_modal = Modal;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_a_tooltip, { placement: "bottom" }, {
      title: withCtx(() => [
        _hoisted_1$3
      ]),
      default: withCtx(() => [
        createVNode(_component_mdi_bug_outline, {
          class: "cursor-pointer",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.editorOpen = true)
        })
      ]),
      _: 1
    }),
    createVNode(_component_a_modal, {
      visible: $setup.editorOpen,
      "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => $setup.editorOpen = $event),
      footer: null,
      width: "80%"
    }, {
      default: withCtx(() => [
        createVNode(_component_a_tabs, {
          activeKey: $setup.tabKey,
          "onUpdate:activeKey": _cache[1] || (_cache[1] = ($event) => $setup.tabKey = $event),
          type: "card",
          closeable: "false",
          class: "shadow-sm"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.localTables, (table) => {
              return openBlock(), createBlock(_component_a_tab_pane, {
                key: table.id,
                tab: table.title
              }, {
                default: withCtx(() => [
                  createVNode(_component_MonacoEditor, {
                    modelValue: $setup.metas[table.id],
                    "onUpdate:modelValue": ($event) => $setup.metas[table.id] = $event,
                    class: "h-max-[70vh]",
                    "read-only": true
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 2
              }, 1032, ["tab"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["activeKey"])
      ]),
      _: 1
    }, 8, ["visible"])
  ], 64);
}
var DebugMeta = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const debug = ref(false);
    const clickCount = ref(0);
    const __returned__ = { debug, clickCount, ExportCache, DeleteCache, DebugMeta, ToggleDrawer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-3a24e446"), n = n(), popScopeId(), n);
const _hoisted_1$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, null, -1));
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "dot" }, null, -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "dot" }, null, -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "dot" }, null, -1));
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "flex gap-2 justify-start",
    onClick: _cache[0] || (_cache[0] = () => {
      $setup.clickCount = $setup.clickCount + 1;
      $setup.debug = $setup.clickCount >= 4;
    })
  }, [
    renderSlot(_ctx.$slots, "start", {}, void 0, true),
    createVNode($setup["ToggleDrawer"]),
    _hoisted_1$2,
    $setup.debug ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createVNode($setup["ExportCache"]),
      _hoisted_2$2,
      createVNode($setup["DeleteCache"]),
      _hoisted_3$1,
      createVNode($setup["DebugMeta"]),
      _hoisted_4$1
    ], 64)) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "end", {}, void 0, true)
  ]);
}
var Toolbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-3a24e446"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const meta = inject(MetaInj, ref());
    const activeView = inject(ActiveViewInj, ref());
    const { views, loadViews } = useViews(meta);
    const { isUIAllowed } = useUIPermission();
    const router = useRouter();
    const route = useRoute();
    provide(ViewListInj, views);
    const { isOpen } = useSidebar({ storageKey: "nc-right-sidebar" });
    const sidebarCollapsed = computed(() => !isOpen.value);
    const sidebar = ref();
    let viewCreateType = ref();
    let viewCreateTitle = ref("");
    let selectedViewId = ref("");
    let modalOpen = ref(false);
    watch([views, () => route.params.viewTitle], ([nextViews, viewTitle]) => {
      if (viewTitle) {
        const view = nextViews.find((v) => v.title === viewTitle);
        if (view) {
          activeView.value = view;
        }
      }
      if (!activeView.value && nextViews.length) {
        activeView.value = nextViews[0];
      }
    }, { immediate: true });
    function openModal({ type, title = "", copyViewId }) {
      modalOpen.value = true;
      viewCreateType.value = type;
      viewCreateTitle.value = title;
      selectedViewId.value = copyViewId;
    }
    function onCreate(view) {
      views.value.push(view);
      activeView.value = view;
      router.push({ params: { viewTitle: view.title || "" } });
      modalOpen.value = false;
    }
    const __returned__ = { meta, activeView, views, loadViews, isUIAllowed, router, route, isOpen, sidebarCollapsed, sidebar, viewCreateType, viewCreateTitle, selectedViewId, modalOpen, openModal, onCreate, MenuTop, MenuBottom, Toolbar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 1,
  class: "flex-1 flex flex-col min-h-0"
};
const _hoisted_2$1 = {
  key: 0,
  class: "!my-3 w-full border-b-1"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_dlg_view_create = __nuxt_component_0$1;
  const _component_a_layout_sider = LayoutSider;
  return openBlock(), createBlock(_component_a_layout_sider, {
    ref: "sidebar",
    collapsed: $setup.sidebarCollapsed,
    collapsiple: "",
    "collapsed-width": "50",
    width: "250",
    class: "relative shadow-md h-full",
    theme: "light"
  }, {
    default: withCtx(() => [
      $setup.isOpen ? (openBlock(), createBlock($setup["Toolbar"], {
        key: 0,
        class: "min-h-[var(--toolbar-height)] max-h-[var(--toolbar-height)] flex items-center py-3 px-3 justify-between border-b-1"
      })) : createCommentVNode("", true),
      $setup.isOpen ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode($setup["MenuTop"], {
          onOpenModal: $setup.openModal,
          onDeleted: $setup.loadViews,
          onSorted: $setup.loadViews
        }, null, 8, ["onDeleted", "onSorted"]),
        $setup.isUIAllowed("virtualViewsCreateOrEdit") ? (openBlock(), createElementBlock("div", _hoisted_2$1)) : createCommentVNode("", true),
        createVNode($setup["MenuBottom"], { onOpenModal: $setup.openModal })
      ])) : createCommentVNode("", true),
      $setup.views ? (openBlock(), createBlock(_component_dlg_view_create, {
        key: 2,
        modelValue: $setup.modalOpen,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modalOpen = $event),
        title: $setup.viewCreateTitle,
        type: $setup.viewCreateType,
        "selected-view-id": $setup.selectedViewId,
        onCreated: $setup.onCreate
      }, null, 8, ["modelValue", "title", "type", "selected-view-id"])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["collapsed"]);
}
var __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-4c8aac70"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Smartsheet",
  setup(__props, { expose }) {
    expose();
    const { getMeta, metas } = useMetas();
    const activeView = ref();
    const el = ref();
    const fields = ref([]);
    const tabMeta = inject(TabMetaInj, computed(() => ({})));
    const meta = computed(() => {
      var _a, _b;
      return (_b = metas.value) == null ? void 0 : _b[(_a = tabMeta == null ? void 0 : tabMeta.value) == null ? void 0 : _a.id];
    });
    watchEffect(async () => {
      var _a;
      await getMeta((_a = tabMeta == null ? void 0 : tabMeta.value) == null ? void 0 : _a.id);
    });
    const reloadEventHook = createEventHook();
    const openNewRecordFormHook = createEventHook();
    const { isGallery, isGrid, isForm, isLocked } = useProvideSmartsheetStore(activeView, meta);
    provideSidebar({ storageKey: "nc-right-sidebar" });
    provide(MetaInj, meta);
    provide(TabMetaInj, tabMeta);
    provide(ActiveViewInj, activeView);
    provide(IsLockedInj, isLocked);
    provide(ReloadViewDataHookInj, reloadEventHook);
    provide(OpenNewRecordFormHookInj, openNewRecordFormHook);
    provide(FieldsInj, fields);
    provide(IsFormInj, isForm);
    const treeViewIsLockedInj = inject("TreeViewIsLockedInj", ref(false));
    watch(tabMeta, async (newTabMeta, oldTabMeta) => {
      if (newTabMeta !== oldTabMeta && (newTabMeta == null ? void 0 : newTabMeta.id))
        await getMeta(newTabMeta.id);
    });
    watch(isLocked, (nextValue) => treeViewIsLockedInj.value = nextValue, { immediate: true });
    const __returned__ = { getMeta, metas, activeView, el, fields, tabMeta, meta, reloadEventHook, openNewRecordFormHook, isGallery, isGrid, isForm, isLocked, treeViewIsLockedInj, SmartsheetGrid: __nuxt_component_1$2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "nc-container flex h-full" };
const _hoisted_2 = { class: "flex flex-col h-full flex-1 min-w-0" };
const _hoisted_3 = {
  key: 0,
  class: "flex flex-1 min-h-0"
};
const _hoisted_4 = {
  key: 0,
  class: "h-full flex-1 min-w-0 min-h-0 bg-gray-50"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SmartsheetToolbar = __nuxt_component_0$3;
  const _component_SmartsheetGallery = __nuxt_component_1;
  const _component_SmartsheetForm = __nuxt_component_2;
  const _component_SmartsheetSidebar = __nuxt_component_3;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_SmartsheetToolbar),
      $setup.meta ? (openBlock(), createElementBlock("div", _hoisted_3, [
        $setup.activeView ? (openBlock(), createElementBlock("div", _hoisted_4, [
          $setup.isGrid ? (openBlock(), createBlock($setup["SmartsheetGrid"], {
            key: 0,
            ref: $setup.el
          }, null, 512)) : $setup.isGallery ? (openBlock(), createBlock(_component_SmartsheetGallery, { key: 1 })) : $setup.isForm ? (openBlock(), createBlock(_component_SmartsheetForm, { key: 2 })) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ]),
    $setup.meta ? (openBlock(), createBlock(_component_SmartsheetSidebar, {
      key: 0,
      class: "nc-right-sidebar"
    })) : createCommentVNode("", true)
  ]);
}
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-44151840"]]);
const _sfc_main = {
  name: "Index"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TabsSmartsheet = __nuxt_component_0;
  return openBlock(), createBlock(_component_TabsSmartsheet);
}
var __viewTitle__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __viewTitle__ as default };
