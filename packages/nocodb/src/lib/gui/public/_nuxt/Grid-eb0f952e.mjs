import { d as IsPublicInj, R as ReloadViewDataHookInj, A as ActiveViewInj, F as FieldsInj, M as MetaInj, c as IsLockedInj, O as OpenNewRecordFormHookInj, P as PaginationDataInj, C as ChangePageInj, b as ReadonlyInj, I as IsFormInj, a as IsGridInj } from "./index-c79a04bb.mjs";
import { a8 as useStyleTag, u as useNuxtApp, a3 as useMetas, r as ref, i as inject, e as computed, w as watch, a9 as useProject, I as message, K as extractSdkResponseErrorMsg, aa as NOCO, ab as h, U as UITypes, o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, ac as LockType, F as Fragment, j as createBlock, k as createCommentVNode, S as resolveDynamicComponent, y as createTextVNode, v as toDisplayString, A as normalizeClass, t as resolveDirective, g as createVNode, h as withCtx, B as withDirectives, ad as ExportTypes, Y as __unplugin_components_0$5, ae as xlsx, a2 as FileSaver, L as useVModel, f as renderList, G as __unplugin_components_2, af as createPropsRestProxy, s as onMounted, R as RelationTypes, l as isVirtualCol, x as withModifiers, a5 as renderSlot, C as pushScopeId, E as popScopeId, N as useApi, H as Form, n as reactive, ag as fieldRequiredValidator, ah as normalizeProps, ai as guardReactiveProps, aj as mergeProps, ak as __unplugin_components_12, X as __unplugin_components_1$2, z as withKeys, P as nextTick, al as useClipboard, a as unref, am as __nuxt_component_1$4, V as ViewTypes, T as normalizeStyle, W as viewIcons, an as __unplugin_components_11$1, ao as __unplugin_components_5, ap as __unplugin_components_18$1, a1 as Menu, aq as vShow, D as Draggable, m as useGlobal, a6 as watchEffect, q as onClickOutside, a4 as toRef, a7 as createEventHook, p as provide, ar as useEventListener, as as createSlots, at as enumColor, au as NavigateDir } from "./entry-fe2e349d.mjs";
import { a as __unplugin_components_13$1, b as __unplugin_components_3$2, c as __unplugin_components_4$1, d as __unplugin_components_10$3, _ as __unplugin_components_0$6, e as __unplugin_components_0$8 } from "./chevron-right-rounded-3f62f732.mjs";
import { M as MdiAccountGroup, _ as __unplugin_components_0$9 } from "./menu-6907f33d.mjs";
import { u as useSharedView } from "./useSharedView-00e29e46.mjs";
import { D as DlgQuickImport } from "./QuickImport-adfa0418.mjs";
import { _ as __nuxt_component_0$8 } from "./minus-circle-outline-a8e6550b.mjs";
import { M as MdiPlus } from "./plus-0f42eb0d.mjs";
import { _ as __unplugin_components_3$1 } from "./delete-outline-809194cc.mjs";
import { C as Checkbox } from "./Checkbox-fdabe561.mjs";
import { I as Input } from "./Input-a826c0f4.mjs";
import { B as Button } from "./button-85170489.mjs";
import { S as SelectOption, _ as __unplugin_components_4 } from "./index-80dcfdcf.mjs";
import { b as useSmartsheetStoreOrThrow, e as extractPkFromRow, u as useProvideSmartsheetRowStore } from "./useVirtualCell-79bce99d.mjs";
import { i as isSystemColumn, f as __nuxt_component_0$6, h as __nuxt_component_0$7, j as __unplugin_components_4$2, a as __nuxt_component_1$5, b as __nuxt_component_2$2, e as __nuxt_component_2$3, M as MdiArrowExpand, c as __nuxt_component_3$3, d as __nuxt_component_4$2 } from "./Cell-e9645bc0.mjs";
import { u as useUIPermission } from "./index-03dd499c.mjs";
import { _ as __unplugin_components_9$1, C as Collapse } from "./CollapsePanel-4933ec03.mjs";
import { M as MdiDiscord } from "./discord-72f0b1e1.mjs";
import { _ as __unplugin_components_2$2, a as __unplugin_components_3$3, C as Card } from "./Card-6955c823.mjs";
import { _ as __unplugin_components_2$1 } from "./index-a0f8494e.mjs";
import { _ as __unplugin_components_1$1, T as Tabs } from "./TabPane-95cc1419.mjs";
import { _ as __unplugin_components_13$2 } from "./TextArea-19a941ff.mjs";
import { _ as __unplugin_components_6, a as __unplugin_components_7$1, b as __unplugin_components_8$1 } from "./star-outline-d6c974b1.mjs";
import { a as LayoutContent, b as LayoutFooter, _ as __unplugin_components_2$3 } from "./index-7f829eb1.mjs";
import { u as useDashboard, _ as __unplugin_components_3$4, M as MdiOpenInNewIcon } from "./open-in-new-2216ac81.mjs";
import { _ as __unplugin_components_10$2, a as __unplugin_components_13$3 } from "./index-752e3e2c.mjs";
import { M as MdiMenuDown } from "./menu-down-d9199e40.mjs";
import { D as Dropdown } from "./dropdown-2e9bbb3f.mjs";
import { M as Modal } from "./Modal-6ec32f67.mjs";
import { _ as __unplugin_components_0$7 } from "./reload-21536936.mjs";
import { _ as __unplugin_components_4$3 } from "./plus-outline-d19e476e.mjs";
import { u as useSidebar } from "./index-1ba20144.mjs";
import { a as __unplugin_components_3$5, _ as __nuxt_component_7$1 } from "./index-60b554d6.mjs";
import { _ as __unplugin_components_5$1 } from "./index-b5c7d9eb.mjs";
const comparisonOpList = [
  {
    text: "is equal",
    value: "eq"
  },
  {
    text: "is not equal",
    value: "neq"
  },
  {
    text: "is like",
    value: "like"
  },
  {
    text: "is not like",
    value: "nlike"
  },
  {
    text: "is empty",
    value: "empty",
    ignoreVal: true
  },
  {
    text: "is not empty",
    value: "notempty",
    ignoreVal: true
  },
  {
    text: "is null",
    value: "null",
    ignoreVal: true
  },
  {
    text: "is not null",
    value: "notnull",
    ignoreVal: true
  },
  {
    text: ">",
    value: "gt"
  },
  {
    text: "<",
    value: "lt"
  },
  {
    text: ">=",
    value: "gte"
  },
  {
    text: "<=",
    value: "lte"
  }
];
function useGridViewColumnWidth(view) {
  const { css, load: loadCss, unload: unloadCss } = useStyleTag("");
  const { isUIAllowed } = useUIPermission();
  const { $api } = useNuxtApp();
  const { metas } = useMetas();
  const gridViewCols = ref({});
  const resizingCol = ref("");
  const resizingColWidth = ref("200px");
  const isPublic = inject(IsPublicInj, ref(false));
  const columns = computed(() => {
    var _a, _b, _c;
    return (_c = (_b = metas == null ? void 0 : metas.value) == null ? void 0 : _b[(_a = view == null ? void 0 : view.value) == null ? void 0 : _a.fk_model_id]) == null ? void 0 : _c.columns;
  });
  watch([gridViewCols, resizingCol, resizingColWidth], () => {
    var _a, _b;
    let style = "";
    for (const c of (columns == null ? void 0 : columns.value) || []) {
      const val = ((_b = (_a = gridViewCols == null ? void 0 : gridViewCols.value) == null ? void 0 : _a[c == null ? void 0 : c.id]) == null ? void 0 : _b.width) || "200px";
      if (val && c.title !== (resizingCol == null ? void 0 : resizingCol.value)) {
        style += `[data-col="${c.id}"]{min-width:${val};max-width:${val};width: ${val};}`;
      } else {
        style += `[data-col="${c.id}"]{min-width:${resizingColWidth == null ? void 0 : resizingColWidth.value};max-width:${resizingColWidth == null ? void 0 : resizingColWidth.value};width: ${resizingColWidth == null ? void 0 : resizingColWidth.value};}`;
      }
    }
    css.value = style;
  }, { deep: true, immediate: true });
  const loadGridViewColumns = async () => {
    var _a;
    if (!((_a = view.value) == null ? void 0 : _a.id) && !isPublic.value)
      return;
    const colsData = isPublic.value ? columns.value : await $api.dbView.gridColumnsList(view.value.id);
    gridViewCols.value = colsData.reduce((o, col) => ({
      ...o,
      [col.fk_column_id]: col
    }), {});
    loadCss();
  };
  watch(columns, loadGridViewColumns);
  const updateWidth = (id, width) => {
    var _a, _b;
    if ((_a = gridViewCols == null ? void 0 : gridViewCols.value) == null ? void 0 : _a[id]) {
      gridViewCols.value[id].width = width;
    }
    if (!isPublic.value && isUIAllowed("gridColUpdate") && ((_b = gridViewCols.value[id]) == null ? void 0 : _b.id)) {
      $api.dbView.gridColumnUpdate(gridViewCols.value[id].id, {
        width
      });
    }
  };
  return { loadGridViewColumns, updateWidth, resizingCol, resizingColWidth, loadCss, unloadCss };
}
function useViewSorts(view, reloadData) {
  const { sharedView } = useSharedView();
  const { sorts } = useSmartsheetStoreOrThrow();
  const reloadHook = inject(ReloadViewDataHookInj);
  const isPublic = inject(IsPublicInj, ref(false));
  const { $api } = useNuxtApp();
  const { isUIAllowed } = useUIPermission();
  const { isSharedBase } = useProject();
  const loadSorts = async () => {
    var _a, _b, _c, _d;
    if (isPublic.value) {
      const sharedSorts = ((_a = sharedView.value) == null ? void 0 : _a.sorts) || [];
      sorts.value = [...sharedSorts];
      return;
    }
    try {
      if (!(view == null ? void 0 : view.value))
        return;
      sorts.value = (_d = (_c = await $api.dbTableSort.list((_b = view == null ? void 0 : view.value) == null ? void 0 : _b.id)) == null ? void 0 : _c.sorts) == null ? void 0 : _d.list;
    } catch (e) {
      console.error(e);
      message.error(await extractSdkResponseErrorMsg(e));
    }
  };
  const saveOrUpdate = async (sort, i) => {
    var _a;
    if (isPublic.value || isSharedBase.value) {
      sorts.value[i] = sort;
      sorts.value = [...sorts.value];
      return;
    }
    try {
      if (isUIAllowed("sortSync")) {
        if (sort.id) {
          await $api.dbTableSort.update(sort.id, sort);
        } else {
          sorts.value[i] = await $api.dbTableSort.create((_a = view == null ? void 0 : view.value) == null ? void 0 : _a.id, sort);
        }
      }
      reloadData == null ? void 0 : reloadData();
    } catch (e) {
      console.error(e);
      message.error(await extractSdkResponseErrorMsg(e));
    }
  };
  const addSort = () => {
    sorts.value = [
      ...sorts.value,
      {
        direction: "asc"
      }
    ];
  };
  const deleteSort = async (sort, i) => {
    try {
      if (isUIAllowed("sortSync") && sort.id && !isPublic.value && !isSharedBase.value) {
        await $api.dbTableSort.delete(sort.id);
      }
      sorts.value.splice(i, 1);
      sorts.value = [...sorts.value];
    } catch (e) {
      console.error(e);
      message.error(await extractSdkResponseErrorMsg(e));
    }
  };
  watch(sorts, () => {
    reloadHook == null ? void 0 : reloadHook.trigger();
  });
  return { sorts, loadSorts, addSort, deleteSort, saveOrUpdate };
}
const formatData = (list) => list.map((row) => ({
  row: { ...row },
  oldRow: { ...row },
  rowMeta: {}
}));
function useViewData(meta, viewMeta, where) {
  if (!meta) {
    throw new Error("Table meta is not available");
  }
  const _paginationData = ref({ page: 1, pageSize: 25 });
  const aggCommentCount = ref([]);
  const galleryData = ref();
  const formColumnData = ref();
  const formViewData = ref();
  const formattedData = ref([]);
  const isPublic = inject(IsPublicInj, ref(false));
  const reloadHook = inject(ReloadViewDataHookInj);
  const { project, isSharedBase } = useProject();
  const { fetchSharedViewData, paginationData: sharedPaginationData } = useSharedView();
  const { $api } = useNuxtApp();
  const { sorts, nestedFilters } = useSmartsheetStoreOrThrow();
  const { isUIAllowed } = useUIPermission();
  const paginationData = computed({
    get: () => isPublic.value ? sharedPaginationData.value : _paginationData.value,
    set: (value) => {
      if (isPublic.value) {
        sharedPaginationData.value = value;
      } else {
        _paginationData.value = value;
      }
    }
  });
  const selectedAllRecords = computed({
    get() {
      return !!formattedData.value.length && formattedData.value.every((row) => row.rowMeta.selected);
    },
    set(selected) {
      formattedData.value.forEach((row) => row.rowMeta.selected = selected);
    }
  });
  const syncCount = async () => {
    var _a, _b, _c;
    const { count } = await $api.dbViewRow.count(NOCO, (_a = project == null ? void 0 : project.value) == null ? void 0 : _a.title, (_b = meta == null ? void 0 : meta.value) == null ? void 0 : _b.id, (_c = viewMeta == null ? void 0 : viewMeta.value) == null ? void 0 : _c.id);
    paginationData.value.totalRows = count;
  };
  const queryParams = computed(() => {
    var _a, _b, _c, _d, _e;
    return {
      offset: ((_b = (_a = paginationData.value) == null ? void 0 : _a.page) != null ? _b : 0) - 1,
      limit: (_d = (_c = paginationData.value) == null ? void 0 : _c.pageSize) != null ? _d : 25,
      where: (_e = where == null ? void 0 : where.value) != null ? _e : ""
    };
  });
  const loadAggCommentsCount = async () => {
    var _a, _b, _c, _d, _e;
    if (isPublic.value || isSharedBase.value)
      return;
    const ids = (_b = (_a = formattedData.value) == null ? void 0 : _a.filter(({ rowMeta: { new: isNew } }) => !isNew)) == null ? void 0 : _b.map(({ row }) => {
      var _a2;
      return extractPkFromRow(row, (_a2 = meta == null ? void 0 : meta.value) == null ? void 0 : _a2.columns);
    });
    if (!(ids == null ? void 0 : ids.length) || (ids == null ? void 0 : ids.some((id) => !id)))
      return;
    aggCommentCount.value = await $api.utils.commentCount({
      ids,
      fk_model_id: meta.value.id
    });
    for (const row of formattedData.value) {
      const id = extractPkFromRow(row.row, (_c = meta == null ? void 0 : meta.value) == null ? void 0 : _c.columns);
      row.rowMeta.commentCount = ((_e = (_d = aggCommentCount.value) == null ? void 0 : _d.find((c) => c.row_id === id)) == null ? void 0 : _e.count) || 0;
    }
  };
  const loadData = async (params = {}) => {
    var _a, _b, _c;
    if ((!((_a = project == null ? void 0 : project.value) == null ? void 0 : _a.id) || !((_b = meta == null ? void 0 : meta.value) == null ? void 0 : _b.id) || !((_c = viewMeta == null ? void 0 : viewMeta.value) == null ? void 0 : _c.id)) && !isPublic.value)
      return;
    const response = !isPublic.value ? await $api.dbViewRow.list("noco", project.value.id, meta.value.id, viewMeta.value.id, {
      ...params,
      ...isUIAllowed("sortSync") ? {} : { sortArrJson: JSON.stringify(sorts.value) },
      ...isUIAllowed("filterSync") ? {} : { filterArrJson: JSON.stringify(nestedFilters.value) },
      where: where == null ? void 0 : where.value
    }) : await fetchSharedViewData();
    formattedData.value = formatData(response.list);
    paginationData.value = response.pageInfo;
    await loadAggCommentsCount();
  };
  const loadGalleryData = async () => {
    var _a;
    if (!((_a = viewMeta == null ? void 0 : viewMeta.value) == null ? void 0 : _a.id))
      return;
    galleryData.value = await $api.dbView.galleryRead(viewMeta.value.id);
  };
  const insertRow = async (row, rowIndex = ((_a) => (_a = formattedData.value) == null ? void 0 : _a.length)()) => {
    var _a2, _b, _c, _d;
    try {
      const insertObj = (_b = (_a2 = meta == null ? void 0 : meta.value) == null ? void 0 : _a2.columns) == null ? void 0 : _b.reduce((o, col) => {
        if (!col.ai && (row == null ? void 0 : row[col.title]) !== null) {
          o[col.title] = row == null ? void 0 : row[col.title];
        }
        return o;
      }, {});
      const insertedData = await $api.dbViewRow.create(NOCO, project == null ? void 0 : project.value.id, meta == null ? void 0 : meta.value.id, (_c = viewMeta == null ? void 0 : viewMeta.value) == null ? void 0 : _c.id, insertObj);
      (_d = formattedData.value) == null ? void 0 : _d.splice(rowIndex != null ? rowIndex : 0, 1, {
        row: insertedData,
        rowMeta: {},
        oldRow: { ...insertedData }
      });
      await syncCount();
      return insertedData;
    } catch (error) {
      message.error(await extractSdkResponseErrorMsg(error));
    }
  };
  const updateRowProperty = async (row, property) => {
    var _a, _b, _c;
    try {
      const id = (_b = (_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.filter((c) => c.pk).map((c) => row[c.title]).join("___");
      return await $api.dbViewRow.update(NOCO, project == null ? void 0 : project.value.id, meta == null ? void 0 : meta.value.id, (_c = viewMeta == null ? void 0 : viewMeta.value) == null ? void 0 : _c.id, id, {
        [property]: row[property]
      });
    } catch (e) {
      message.error(`Row update failed ${await extractSdkResponseErrorMsg(e)}`);
    }
  };
  const updateOrSaveRow = async (row, property) => {
    if (row.rowMeta.new) {
      await insertRow(row.row, formattedData.value.indexOf(row));
    } else {
      await updateRowProperty(row.row, property);
    }
    reloadHook.trigger();
  };
  const changePage = async (page) => {
    paginationData.value.page = page;
    await loadData({ offset: (page - 1) * (paginationData.value.pageSize || 25), where: where == null ? void 0 : where.value });
  };
  const addEmptyRow = (addAfter = formattedData.value.length) => {
    formattedData.value.splice(addAfter, 0, {
      row: {},
      oldRow: {},
      rowMeta: { new: true }
    });
    return formattedData.value[addAfter];
  };
  const removeLastEmptyRow = () => {
    const lastRow = formattedData.value[formattedData.value.length - 1];
    if (lastRow.rowMeta.new) {
      formattedData.value.pop();
    }
  };
  const deleteRowById = async (id) => {
    if (!id) {
      throw new Error("Delete not allowed for table which doesn't have primary Key");
    }
    const res = await $api.dbViewRow.delete("noco", project.value.id, meta == null ? void 0 : meta.value.id, viewMeta == null ? void 0 : viewMeta.value.id, id);
    if (res.message) {
      message.info(`Row delete failed: ${h("div", {
        innerHTML: `<div style="padding:10px 4px">Unable to delete row with ID ${id} because of the following:
              <br><br>${res.message.join("<br>")}<br><br>
              Clear the data first & try again</div>`
      })}`);
      return false;
    }
    return true;
  };
  const deleteRow = async (rowIndex) => {
    var _a, _b;
    try {
      const row = formattedData.value[rowIndex];
      if (!row.rowMeta.new) {
        const id = (_b = (_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.filter((c) => c.pk).map((c) => row.row[c.title]).join("___");
        const deleted = await deleteRowById(id);
        if (!deleted) {
          return;
        }
      }
      formattedData.value.splice(rowIndex, 1);
      await syncCount();
    } catch (e) {
      message.error(`Failed to delete row: ${await extractSdkResponseErrorMsg(e)}`);
    }
  };
  const deleteSelectedRows = async () => {
    var _a, _b;
    let row = formattedData.value.length;
    while (row--) {
      try {
        const { row: rowObj, rowMeta } = formattedData.value[row];
        if (!rowMeta.selected) {
          continue;
        }
        if (!rowMeta.new) {
          const id = (_b = (_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.filter((c) => c.pk).map((c) => rowObj[c.title]).join("___");
          const successfulDeletion = await deleteRowById(id);
          if (!successfulDeletion) {
            continue;
          }
        }
        formattedData.value.splice(row, 1);
      } catch (e) {
        return message.error(`Failed to delete row: ${await extractSdkResponseErrorMsg(e)}`);
      }
    }
    await syncCount();
  };
  const loadFormView = async () => {
    var _a, _b, _c;
    if (!((_a = viewMeta == null ? void 0 : viewMeta.value) == null ? void 0 : _a.id))
      return;
    try {
      const { columns, ...view } = await $api.dbView.formRead(viewMeta.value.id);
      const fieldById = columns.reduce((o, f) => ({
        ...o,
        [f.fk_column_id]: f
      }), {});
      let order = 1;
      formViewData.value = view;
      formColumnData.value = (_c = (_b = meta == null ? void 0 : meta.value) == null ? void 0 : _b.columns) == null ? void 0 : _c.map((c) => ({
        ...c,
        fk_column_id: c.id,
        fk_view_id: viewMeta.value.id,
        ...fieldById[c.id] ? fieldById[c.id] : {},
        order: fieldById[c.id] && fieldById[c.id].order || order++,
        id: fieldById[c.id] && fieldById[c.id].id
      })).sort((a, b) => a.order - b.order);
    } catch (e) {
      return message.error(`Failed to set form data: ${await extractSdkResponseErrorMsg(e)}`);
    }
  };
  const updateFormView = async (view) => {
    var _a;
    try {
      if (!((_a = viewMeta == null ? void 0 : viewMeta.value) == null ? void 0 : _a.id) || !view)
        return;
      await $api.dbView.formUpdate(viewMeta.value.id, view);
    } catch (e) {
      return message.error(`Failed to update form view: ${await extractSdkResponseErrorMsg(e)}`);
    }
  };
  return {
    loadData,
    paginationData,
    queryParams,
    formattedData,
    insertRow,
    updateRowProperty,
    changePage,
    addEmptyRow,
    deleteRow,
    deleteSelectedRows,
    updateOrSaveRow,
    selectedAllRecords,
    syncCount,
    galleryData,
    loadGalleryData,
    loadFormView,
    formColumnData,
    formViewData,
    updateFormView,
    aggCommentCount,
    loadAggCommentsCount,
    removeLastEmptyRow
  };
}
function useViewFilters(view, parentId, autoApply, reloadData, currentFilters, isNestedRoot) {
  const reloadHook = inject(ReloadViewDataHookInj);
  const { nestedFilters } = useSmartsheetStoreOrThrow();
  const isPublic = inject(IsPublicInj, ref(false));
  const { $api } = useNuxtApp();
  const { isUIAllowed } = useUIPermission();
  const { metas } = useMetas();
  const _filters = ref([]);
  const nestedMode = computed(() => isPublic.value || !isUIAllowed("filterSync"));
  const filters = computed({
    get: () => nestedMode.value ? currentFilters : _filters.value,
    set: (value) => {
      if (nestedMode.value) {
        currentFilters = value;
        if (isNestedRoot)
          nestedFilters.value = value;
        nestedFilters.value = [...nestedFilters.value];
        reloadHook == null ? void 0 : reloadHook.trigger();
        return;
      }
      _filters.value = value;
    }
  });
  const placeholderFilter = {
    comparison_op: "eq",
    value: "",
    status: "create",
    logical_op: "and"
  };
  const loadFilters = async (hookId) => {
    var _a;
    if (nestedMode.value)
      return;
    try {
      if (hookId) {
        if (parentId) {
          filters.value = await $api.dbTableFilter.childrenRead(parentId);
        } else {
          filters.value = await $api.dbTableWebhookFilter.read(hookId);
        }
      } else {
        if (parentId) {
          filters.value = await $api.dbTableFilter.childrenRead(parentId);
        } else {
          filters.value = await $api.dbTableFilter.read((_a = view == null ? void 0 : view.value) == null ? void 0 : _a.id);
        }
      }
    } catch (e) {
      console.log(e);
      message.error(await extractSdkResponseErrorMsg(e));
    }
  };
  const sync = async (hookId, _nested = false) => {
    var _a;
    try {
      for (const [i, filter] of Object.entries(filters.value)) {
        if (filter.status === "delete") {
          await $api.dbTableFilter.delete(filter.id);
        } else if (filter.status === "update") {
          await $api.dbTableFilter.update(filter.id, {
            ...filter,
            fk_parent_id: parentId
          });
        } else if (filter.status === "create") {
          if (hookId) {
            filters.value[+i] = await $api.dbTableWebhookFilter.create(hookId, {
              ...filter,
              fk_parent_id: parentId
            });
          } else {
            filters.value[+i] = await $api.dbTableFilter.create((_a = view == null ? void 0 : view.value) == null ? void 0 : _a.id, {
              ...filter,
              fk_parent_id: parentId
            });
          }
        }
      }
      reloadData == null ? void 0 : reloadData();
    } catch (e) {
      console.log(e);
      message.error(await extractSdkResponseErrorMsg(e));
    }
  };
  const deleteFilter = async (filter, i) => {
    if (nestedMode.value) {
      filters.value.splice(i, 1);
      filters.value = [...filters.value];
      reloadData == null ? void 0 : reloadData();
    } else {
      if (filter.id) {
        if (!(autoApply == null ? void 0 : autoApply.value)) {
          filter.status = "delete";
        } else {
          try {
            await $api.dbTableFilter.delete(filter.id);
            reloadData == null ? void 0 : reloadData();
            filters.value.splice(i, 1);
          } catch (e) {
            console.log(e);
            message.error(await extractSdkResponseErrorMsg(e));
          }
        }
      } else {
        filters.value.splice(i, 1);
      }
    }
  };
  const saveOrUpdate = async (filter, i, force = false) => {
    var _a;
    if (!(view == null ? void 0 : view.value))
      return;
    try {
      if (nestedMode.value) {
        filters.value[i] = { ...filter };
        filters.value = [...filters.value];
      } else if (!(autoApply == null ? void 0 : autoApply.value) && !force) {
        filter.status = filter.id ? "update" : "create";
      } else if (filter.id) {
        await $api.dbTableFilter.update(filter.id, {
          ...filter,
          fk_parent_id: parentId
        });
      } else {
        filters.value[i] = await $api.dbTableFilter.create((_a = view == null ? void 0 : view.value) == null ? void 0 : _a.id, {
          ...filter,
          fk_parent_id: parentId
        });
      }
    } catch (e) {
      console.log(e);
      message.error(await extractSdkResponseErrorMsg(e));
    }
    reloadData == null ? void 0 : reloadData();
  };
  const addFilter = () => filters.value.push(placeholderFilter);
  const addFilterGroup = async () => {
    const child = placeholderFilter;
    const placeHolderGroupFilter = {
      is_group: true,
      status: "create",
      logical_op: "and"
    };
    if (nestedMode.value)
      placeHolderGroupFilter.children = [child];
    filters.value.push(placeHolderGroupFilter);
    const index = filters.value.length - 1;
    await saveOrUpdate(filters.value[index], index, true);
  };
  watch(() => {
    var _a, _b, _c, _d, _e, _f;
    if (!(view == null ? void 0 : view.value) || !((_b = metas == null ? void 0 : metas.value) == null ? void 0 : _b[(_a = view == null ? void 0 : view.value) == null ? void 0 : _a.fk_model_id])) {
      return 0;
    }
    return ((_f = (_e = (_d = metas == null ? void 0 : metas.value) == null ? void 0 : _d[(_c = view == null ? void 0 : view.value) == null ? void 0 : _c.fk_model_id]) == null ? void 0 : _e.columns) == null ? void 0 : _f.length) || 0;
  }, async (nextColsLength, oldColsLength) => {
    if (nextColsLength < oldColsLength)
      await loadFilters();
  });
  return { filters, loadFilters, sync, deleteFilter, saveOrUpdate, addFilter, addFilterGroup };
}
function useViewColumns(view, meta, reloadData) {
  const isPublic = inject(IsPublicInj, ref(false));
  const fields = ref();
  const filterQuery = ref("");
  const { $api } = useNuxtApp();
  const { isUIAllowed } = useUIPermission();
  const { isSharedBase } = useProject();
  const isLocalMode = computed(() => isPublic.value || !isUIAllowed("hideAllColumns") || !isUIAllowed("showAllColumns") || isSharedBase.value);
  const metaColumnById = computed(() => {
    var _a, _b, _c;
    if (!((_a = meta.value) == null ? void 0 : _a.columns))
      return {};
    return (_c = (_b = meta.value) == null ? void 0 : _b.columns) == null ? void 0 : _c.reduce((acc, curr) => ({
      ...acc,
      [curr.id]: curr
    }), {});
  });
  const loadViewColumns = async () => {
    var _a, _b, _c, _d;
    if (!meta || !view)
      return;
    let order = 1;
    if ((_a = view.value) == null ? void 0 : _a.id) {
      const data = isPublic.value ? (_b = meta.value) == null ? void 0 : _b.columns : await $api.dbViewColumn.list(view.value.id);
      const fieldById = data.reduce((acc, curr) => {
        curr.show = !!curr.show;
        return {
          ...acc,
          [curr.fk_column_id]: curr
        };
      }, {});
      fields.value = (_d = (_c = meta.value) == null ? void 0 : _c.columns) == null ? void 0 : _d.map((column) => {
        var _a2;
        const currentColumnField = fieldById[column.id] || {};
        return {
          title: column.title,
          fk_column_id: column.id,
          ...currentColumnField,
          order: currentColumnField.order || order++,
          system: isSystemColumn((_a2 = metaColumnById == null ? void 0 : metaColumnById.value) == null ? void 0 : _a2[currentColumnField.fk_column_id])
        };
      }).sort((a, b) => a.order - b.order);
    }
  };
  const showAll = async (ignoreIds) => {
    var _a, _b;
    if (isLocalMode.value) {
      fields.value = (_a = fields.value) == null ? void 0 : _a.map((field) => ({
        ...field,
        show: true
      }));
      reloadData == null ? void 0 : reloadData();
      return;
    }
    if ((_b = view == null ? void 0 : view.value) == null ? void 0 : _b.id) {
      if (ignoreIds) {
        await $api.dbView.showAllColumn(view.value.id, {
          ignoreIds
        });
      } else {
        await $api.dbView.showAllColumn(view.value.id);
      }
    }
    await loadViewColumns();
    reloadData == null ? void 0 : reloadData();
  };
  const hideAll = async (ignoreIds) => {
    var _a, _b;
    if (isLocalMode.value) {
      fields.value = (_a = fields.value) == null ? void 0 : _a.map((field) => ({
        ...field,
        show: false
      }));
      reloadData == null ? void 0 : reloadData();
      return;
    }
    if ((_b = view == null ? void 0 : view.value) == null ? void 0 : _b.id) {
      if (ignoreIds) {
        await $api.dbView.hideAllColumn(view.value.id, {
          ignoreIds
        });
      } else {
        await $api.dbView.hideAllColumn(view.value.id);
      }
    }
    await loadViewColumns();
    reloadData == null ? void 0 : reloadData();
  };
  const saveOrUpdate = async (field, index) => {
    var _a, _b, _c, _d;
    if (isPublic.value && fields.value) {
      fields.value[index] = field;
      meta.value.columns = (_b = (_a = meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.map((column) => {
        if (column.id === field.fk_column_id) {
          return {
            ...column,
            ...field
          };
        }
        return column;
      });
      reloadData == null ? void 0 : reloadData();
      return;
    }
    if (isUIAllowed("fieldsSync")) {
      if (field.id && ((_c = view == null ? void 0 : view.value) == null ? void 0 : _c.id)) {
        await $api.dbViewColumn.update(view.value.id, field.id, field);
      } else if ((_d = view == null ? void 0 : view.value) == null ? void 0 : _d.id) {
        if (fields.value)
          fields.value[index] = await $api.dbViewColumn.create(view.value.id, field);
      }
    }
    reloadData == null ? void 0 : reloadData();
  };
  const showSystemFields = computed({
    get() {
      var _a;
      return ((_a = view == null ? void 0 : view.value) == null ? void 0 : _a.show_system_fields) || false;
    },
    set(v) {
      var _a;
      if ((_a = view == null ? void 0 : view.value) == null ? void 0 : _a.id) {
        if (!isLocalMode.value) {
          $api.dbView.update(view.value.id, {
            show_system_fields: v
          }).finally(() => reloadData == null ? void 0 : reloadData());
        }
        view.value.show_system_fields = v;
      }
    }
  });
  const filteredFieldList = computed(() => {
    var _a;
    return ((_a = fields.value) == null ? void 0 : _a.filter((field) => {
      var _a2;
      if (!showSystemFields.value && isSystemColumn((_a2 = metaColumnById == null ? void 0 : metaColumnById.value) == null ? void 0 : _a2[field.fk_column_id])) {
        return false;
      }
      if (filterQuery.value === "") {
        return true;
      } else {
        return field.title.toLowerCase().includes(filterQuery.value.toLowerCase());
      }
    })) || [];
  });
  const sortedAndFilteredFields = computed(() => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = fields == null ? void 0 : fields.value) == null ? void 0 : _a.filter((field) => {
      var _a2, _b2, _c2;
      if (!showSystemFields.value && metaColumnById.value && ((_a2 = metaColumnById == null ? void 0 : metaColumnById.value) == null ? void 0 : _a2[field.fk_column_id]) && isSystemColumn((_b2 = metaColumnById.value) == null ? void 0 : _b2[field.fk_column_id])) {
        return false;
      }
      return field.show && ((_c2 = metaColumnById == null ? void 0 : metaColumnById.value) == null ? void 0 : _c2[field.fk_column_id]);
    })) == null ? void 0 : _b.sort((a, b) => a.order - b.order)) == null ? void 0 : _c.map((field) => {
      var _a2;
      return (_a2 = metaColumnById == null ? void 0 : metaColumnById.value) == null ? void 0 : _a2[field.fk_column_id];
    })) || [];
  });
  watch(meta, () => loadViewColumns());
  return {
    fields,
    loadViewColumns,
    filteredFieldList,
    filterQuery,
    showAll,
    hideAll,
    saveOrUpdate,
    sortedAndFilteredFields,
    showSystemFields,
    metaColumnById
  };
}
const getSortDirectionOptions = (uidt) => {
  switch (uidt) {
    case UITypes.Year:
    case UITypes.Number:
    case UITypes.Decimal:
    case UITypes.Rating:
    case UITypes.Count:
    case UITypes.AutoNumber:
    case UITypes.Time:
    case UITypes.Currency:
    case UITypes.Percent:
    case UITypes.Duration:
    case UITypes.PhoneNumber:
    case UITypes.Date:
    case UITypes.DateTime:
    case UITypes.CreateTime:
    case UITypes.LastModifiedTime:
      return [
        { text: "1 \u2192 9", value: "asc" },
        { text: "9 \u2192 1", value: "desc" }
      ];
    case UITypes.Checkbox:
      return [
        { text: "\u25A2 \u2192 \u2713", value: "asc" },
        { text: "\u2713 \u2192 \u25A2", value: "desc" }
      ];
    default:
      return [
        { text: "A \u2192 Z", value: "asc" },
        { text: "Z \u2192 A", value: "desc" }
      ];
  }
};
const _hoisted_1$H = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$D = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"
}, null, -1);
const _hoisted_3$y = [
  _hoisted_2$D
];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$H, _hoisted_3$y);
}
var __unplugin_components_0$4 = { name: "mdi-check", render: render$l };
const _hoisted_1$G = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$C = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
}, null, -1);
const _hoisted_3$x = [
  _hoisted_2$C
];
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$G, _hoisted_3$x);
}
var MdiLockOutlineIcon = { name: "mdi-lock-outline", render: render$k };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "LockType",
  props: {
    hideTick: { type: Boolean },
    type: null
  },
  emits: ["select"],
  setup(__props, { expose, emit }) {
    expose();
    const types = {
      [LockType.Personal]: {
        title: "title.personalView",
        icon: __unplugin_components_13$1,
        subtitle: "Only you can edit the view configuration. Other collaborators\u2019 personal views are hidden by default."
      },
      [LockType.Collaborative]: {
        title: "title.collabView",
        icon: MdiAccountGroup,
        subtitle: "Collaborators with edit permissions or higher can change the view configuration."
      },
      [LockType.Locked]: {
        title: "title.lockedView",
        icon: MdiLockOutlineIcon,
        subtitle: "No one can edit the view configuration until it is unlocked."
      }
    };
    const selectedView = inject(ActiveViewInj);
    const __returned__ = { emit, types, selectedView };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$F = { key: 1 };
const _hoisted_2$B = { class: "nc-subtitle whitespace-normal" };
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_MdiCheck = __unplugin_components_0$4;
  return openBlock(), createElementBlock("div", {
    class: "nc-locked-menu-item",
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("select", $props.type))
  }, [
    createBaseVNode("div", {
      class: normalizeClass({ "show-tick": !$props.hideTick })
    }, [
      !$props.hideTick ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        ((_a = $setup.selectedView) == null ? void 0 : _a.lock_type) === $props.type ? (openBlock(), createBlock(_component_MdiCheck, { key: 0 })) : (openBlock(), createElementBlock("span", _hoisted_1$F))
      ], 64)) : createCommentVNode("", true),
      createBaseVNode("div", null, [
        (openBlock(), createBlock(resolveDynamicComponent($setup.types[$props.type].icon), { class: "text-gray-500" })),
        createTextVNode(" " + toDisplayString(_ctx.$t($setup.types[$props.type].title)) + " ", 1),
        createBaseVNode("div", _hoisted_2$B, toDisplayString($setup.types[$props.type].subtitle), 1)
      ])
    ], 2)
  ]);
}
var __nuxt_component_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q], ["__scopeId", "data-v-2eeb54b8"]]);
const _hoisted_1$E = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$A = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M13 5v6h1.17L12 13.17L9.83 11H11V5h2m2-2H9v6H5l7 7l7-7h-4V3m4 15H5v2h14v-2Z"
}, null, -1);
const _hoisted_3$w = [
  _hoisted_2$A
];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, _hoisted_3$w);
}
var __unplugin_components_0$3 = { name: "mdi-download-outline", render: render$j };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "ExportSubActions",
  setup(__props, { expose }) {
    expose();
    const isPublicView = inject(IsPublicInj, ref(false));
    const fields = inject(FieldsInj, ref([]));
    const { project } = useProject();
    const { $api } = useNuxtApp();
    const meta = inject(MetaInj);
    const selectedView = inject(ActiveViewInj);
    const exportFile = async (exportType) => {
      let offset = 0;
      let c = 1;
      const responseType = exportType === ExportTypes.EXCEL ? "base64" : "blob";
      try {
        while (!isNaN(offset) && offset > -1) {
          let res;
          if (isPublicView.value) {
            const { exportFile: sharedViewExportFile } = useSharedView();
            res = await sharedViewExportFile(fields.value, offset, exportType, responseType);
          } else {
            res = await $api.dbViewRow.export("noco", project == null ? void 0 : project.value.title, meta == null ? void 0 : meta.value.title, selectedView == null ? void 0 : selectedView.value.title, exportType, {
              responseType,
              query: {
                offset
              }
            });
          }
          const { data, headers } = res;
          if (exportType === ExportTypes.EXCEL) {
            const workbook = xlsx.exports.read(data, { type: "base64" });
            xlsx.exports.writeFile(workbook, `${meta == null ? void 0 : meta.value.title}_exported_${c++}.xlsx`);
          } else if (exportType === ExportTypes.CSV) {
            const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
            FileSaver.saveAs(blob, `${meta == null ? void 0 : meta.value.title}_exported_${c++}.csv`);
          }
          offset = +headers["nc-export-offset"];
          if (offset > -1) {
            message.info("Downloading more files");
          } else {
            message.success("Successfully exported all table data");
          }
        }
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    };
    const __returned__ = { isPublicView, fields, project, $api, meta, selectedView, exportFile, ExportTypes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiDownloadOutline = __unplugin_components_0$3;
  const _component_a_menu_item = __unplugin_components_0$5;
  const _directive_t = resolveDirective("t");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_a_menu_item, null, {
      default: withCtx(() => [
        withDirectives((openBlock(), createElementBlock("div", {
          class: "nc-project-menu-item",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.exportFile($setup.ExportTypes.CSV))
        }, [
          createVNode(_component_MdiDownloadOutline, { class: "text-gray-500" }),
          createTextVNode(toDisplayString(_ctx.$t("activity.downloadCSV")), 1)
        ])), [
          [_directive_t, ["a:actions:download-csv"]]
        ])
      ]),
      _: 1
    }),
    createVNode(_component_a_menu_item, null, {
      default: withCtx(() => [
        withDirectives((openBlock(), createElementBlock("div", {
          class: "nc-project-menu-item",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.exportFile($setup.ExportTypes.EXCEL))
        }, [
          createVNode(_component_MdiDownloadOutline, { class: "text-gray-500" }),
          createTextVNode(toDisplayString(_ctx.$t("activity.downloadExcel")), 1)
        ])), [
          [_directive_t, ["a:actions:download-excel"]]
        ])
      ]),
      _: 1
    })
  ], 64);
}
var __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Params",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "modelValue", emits);
    const addParamRow = () => vModel.value.push({});
    const deleteParamRow = (idx) => vModel.value.splice(idx, 1);
    const __returned__ = { props, emits, vModel, addParamRow, deleteParamRow, MdiPlusIcon: MdiPlus, MdiDeleteOutlineIcon: __unplugin_components_3$1 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$D = { class: "flex flex-row justify-center" };
const _hoisted_2$z = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th"),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("div", { class: "text-center font-normal mb-2" }, "Param Name")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("div", { class: "text-center font-normal mb-2" }, "Value")
    ]),
    /* @__PURE__ */ createBaseVNode("th")
  ])
], -1);
const _hoisted_3$v = { class: "px-2" };
const _hoisted_4$c = { class: "px-2" };
const _hoisted_5$b = { class: "px-2" };
const _hoisted_6$a = { class: "relative" };
const _hoisted_7$7 = {
  key: 0,
  class: "absolute flex flex-col justify-start mt-2 -right-6 top-0"
};
const _hoisted_8$6 = {
  colspan: 12,
  class: "text-center"
};
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_checkbox = Checkbox;
  const _component_a_form_item = __unplugin_components_2;
  const _component_a_input = Input;
  const _component_a_button = Button;
  return openBlock(), createElementBlock("div", _hoisted_1$D, [
    createBaseVNode("table", null, [
      _hoisted_2$z,
      createBaseVNode("tbody", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.vModel, (paramRow, idx) => {
          return openBlock(), createElementBlock("tr", { key: idx }, [
            createBaseVNode("td", _hoisted_3$v, [
              createVNode(_component_a_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_a_checkbox, {
                    checked: paramRow.enabled,
                    "onUpdate:checked": ($event) => paramRow.enabled = $event
                  }, null, 8, ["checked", "onUpdate:checked"])
                ]),
                _: 2
              }, 1024)
            ]),
            createBaseVNode("td", _hoisted_4$c, [
              createVNode(_component_a_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    value: paramRow.name,
                    "onUpdate:value": ($event) => paramRow.name = $event,
                    size: "large",
                    placeholder: "Key"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 2
              }, 1024)
            ]),
            createBaseVNode("td", _hoisted_5$b, [
              createVNode(_component_a_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    value: paramRow.value,
                    "onUpdate:value": ($event) => paramRow.value = $event,
                    size: "large",
                    placeholder: "Value"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 2
              }, 1024)
            ]),
            createBaseVNode("td", _hoisted_6$a, [
              idx !== 0 ? (openBlock(), createElementBlock("div", _hoisted_7$7, [
                createVNode($setup["MdiDeleteOutlineIcon"], {
                  class: "cursor-pointer",
                  onClick: ($event) => $setup.deleteParamRow(idx)
                }, null, 8, ["onClick"])
              ])) : createCommentVNode("", true)
            ])
          ]);
        }), 128)),
        createBaseVNode("tr", null, [
          createBaseVNode("td", _hoisted_8$6, [
            createVNode(_component_a_button, {
              type: "default",
              class: "!bg-gray-100 rounded-md border-none mr-1",
              onClick: $setup.addParamRow
            }, {
              icon: withCtx(() => [
                createVNode($setup["MdiPlusIcon"], { class: "flex mx-auto" })
              ]),
              _: 1
            })
          ])
        ])
      ])
    ])
  ]);
}
var __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "Headers",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const vModel = useVModel(props, "modelValue", emits);
    const headerList = ref([
      "A-IM",
      "Accept",
      "Accept-Charset",
      "Accept-Encoding",
      "Accept-Language",
      "Accept-Datetime",
      "Access-Control-Request-Method",
      "Access-Control-Request-Headers",
      "Authorization",
      "Cache-Control",
      "Connection",
      "Content-Length",
      "Content-Type",
      "Cookie",
      "Date",
      "Expect",
      "Forwarded",
      "From",
      "Host",
      "If-Match",
      "If-Modified-Since",
      "If-None-Match",
      "If-Range",
      "If-Unmodified-Since",
      "Max-Forwards",
      "Origin",
      "Pragma",
      "Proxy-Authorization",
      "Range",
      "Referer",
      "TE",
      "User-Agent",
      "Upgrade",
      "Via",
      "Warning",
      "Non-standard headers",
      "Dnt",
      "X-Requested-With",
      "X-CSRF-Token"
    ]);
    const addHeaderRow = () => vModel.value.push({});
    const deleteHeaderRow = (idx) => vModel.value.splice(idx, 1);
    const __returned__ = { props, emits, vModel, headerList, addHeaderRow, deleteHeaderRow, MdiPlusIcon: MdiPlus, MdiDeleteOutlineIcon: __unplugin_components_3$1 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$C = { class: "flex flex-row justify-center" };
const _hoisted_2$y = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th"),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("div", { class: "text-center font-normal mb-2" }, "Header Name")
    ]),
    /* @__PURE__ */ createBaseVNode("th", null, [
      /* @__PURE__ */ createBaseVNode("div", { class: "text-center font-normal mb-2" }, "Value")
    ]),
    /* @__PURE__ */ createBaseVNode("th")
  ])
], -1);
const _hoisted_3$u = { class: "px-2 nc-hook-header-tab-checkbox" };
const _hoisted_4$b = { class: "px-2 w-min-[400px]" };
const _hoisted_5$a = { class: "px-2 w-min-[400px]" };
const _hoisted_6$9 = { class: "relative" };
const _hoisted_7$6 = {
  key: 0,
  class: "absolute flex flex-col justify-start mt-2 -right-6 top-0"
};
const _hoisted_8$5 = {
  colspan: 12,
  class: "text-center"
};
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_checkbox = Checkbox;
  const _component_a_form_item = __unplugin_components_2;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4;
  const _component_a_input = Input;
  const _component_a_button = Button;
  return openBlock(), createElementBlock("div", _hoisted_1$C, [
    createBaseVNode("table", null, [
      _hoisted_2$y,
      createBaseVNode("tbody", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.vModel, (headerRow, idx) => {
          return openBlock(), createElementBlock("tr", { key: idx }, [
            createBaseVNode("td", _hoisted_3$u, [
              createVNode(_component_a_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_a_checkbox, {
                    checked: headerRow.enabled,
                    "onUpdate:checked": ($event) => headerRow.enabled = $event
                  }, null, 8, ["checked", "onUpdate:checked"])
                ]),
                _: 2
              }, 1024)
            ]),
            createBaseVNode("td", _hoisted_4$b, [
              createVNode(_component_a_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_a_select, {
                    value: headerRow.name,
                    "onUpdate:value": ($event) => headerRow.name = $event,
                    size: "large",
                    placeholder: "Key",
                    class: "nc-input-hook-header-key"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.headerList, (header, i) => {
                        return openBlock(), createBlock(_component_a_select_option, {
                          key: i,
                          value: header
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(header), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["value", "onUpdate:value"])
                ]),
                _: 2
              }, 1024)
            ]),
            createBaseVNode("td", _hoisted_5$a, [
              createVNode(_component_a_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    value: headerRow.value,
                    "onUpdate:value": ($event) => headerRow.value = $event,
                    size: "large",
                    placeholder: "Value",
                    class: "nc-input-hook-header-value"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 2
              }, 1024)
            ]),
            createBaseVNode("td", _hoisted_6$9, [
              idx !== 0 ? (openBlock(), createElementBlock("div", _hoisted_7$6, [
                createVNode($setup["MdiDeleteOutlineIcon"], {
                  class: "cursor-pointer",
                  onClick: ($event) => $setup.deleteHeaderRow(idx)
                }, null, 8, ["onClick"])
              ])) : createCommentVNode("", true)
            ])
          ]);
        }), 128)),
        createBaseVNode("tr", null, [
          createBaseVNode("td", _hoisted_8$5, [
            createVNode(_component_a_button, {
              type: "default",
              class: "!bg-gray-100 rounded-md border-none mr-1",
              onClick: $setup.addHeaderRow
            }, {
              icon: withCtx(() => [
                createVNode($setup["MdiPlusIcon"], { class: "flex mx-auto" })
              ]),
              _: 1
            })
          ])
        ])
      ])
    ])
  ]);
}
var __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "ChannelMultiSelect",
  props: {
    modelValue: null,
    availableChannelList: null,
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const rest = createPropsRestProxy(__props, ["availableChannelList", "placeholder"]);
    const vModel = useVModel(rest, "modelValue", emit);
    const localChannelValues = ref([]);
    let availableChannelWithIdxList = ref();
    watch(() => localChannelValues.value, (v) => {
      const res = [];
      for (const channelIdx of v) {
        const target = availableChannelWithIdxList.value.find((availableChannel) => availableChannel.idx === channelIdx);
        if (target) {
          res.push({ webhook_url: target.webhook_url, channel: target.channel });
        }
      }
      vModel.value = res;
    });
    onMounted(() => {
      if (__props.availableChannelList.length) {
        let idx = 0;
        availableChannelWithIdxList.value = __props.availableChannelList.map((channel) => ({
          ...channel,
          idx: idx++
        }));
        for (const channel of rest.modelValue || []) {
          const target = availableChannelWithIdxList.value.find((availableChannelWithIdx) => availableChannelWithIdx.webhook_url === channel.webhook_url && availableChannelWithIdx.channel === channel.channel);
          if (target) {
            localChannelValues.value.push(target.idx);
          }
        }
      }
    });
    const __returned__ = { emit, vModel, localChannelValues, availableChannelWithIdxList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4;
  return openBlock(), createBlock(_component_a_select, {
    value: $setup.localChannelValues,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.localChannelValues = $event),
    mode: "multiple",
    placeholder: $props.placeholder,
    "max-tag-count": "responsive"
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.availableChannelWithIdxList, (channel) => {
        return openBlock(), createBlock(_component_a_select_option, {
          key: channel.idx,
          value: channel.idx
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(channel.channel), 1)
          ]),
          _: 2
        }, 1032, ["value"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["value", "placeholder"]);
}
var __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
const _hoisted_1$B = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$x = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.4 14L12 13.4L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4L13.4 12l3.6 3.6l-1.4 1.4Z"
}, null, -1);
const _hoisted_3$t = [
  _hoisted_2$x
];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _hoisted_3$t);
}
var __unplugin_components_3 = { name: "mdi-close-box", render: render$i };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "FieldListAutoCompleteDropdown",
  props: {
    modelValue: null,
    isSort: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const meta = inject(MetaInj);
    const localValue = computed({
      get: () => __props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const options = computed(() => {
      var _a, _b;
      return (_b = (_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.filter((c) => {
        if (__props.isSort) {
          return !(c.uidt === UITypes.LinkToAnotherRecord && c.colOptions.type !== RelationTypes.BELONGS_TO);
        } else {
          return !c.colOptions || !c.system;
        }
      }).map((c) => ({
        value: c.id,
        label: c.title,
        icon: h(isVirtualCol(c) ? __nuxt_component_0$6 : __nuxt_component_0$7, {
          columnMeta: c
        }),
        c
      }));
    });
    const filterOption = (input, option) => {
      var _a;
      return (_a = option.value.toLowerCase()) == null ? void 0 : _a.includes(input.toLowerCase());
    };
    const __returned__ = { emit, meta, localValue, options, filterOption };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$A = { class: "flex gap-2 items-center items-center h-full" };
const _hoisted_2$w = { class: "min-w-0" };
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4;
  return openBlock(), createBlock(_component_a_select, {
    value: $setup.localValue,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.localValue = $event),
    "dropdown-match-select-width": false,
    "show-search": "",
    placeholder: "Select a field",
    "filter-option": $setup.filterOption
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.options, (option) => {
        return openBlock(), createBlock(_component_a_select_option, {
          key: option.value,
          value: option.value
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$A, [
              (openBlock(), createBlock(resolveDynamicComponent(option.icon), { class: "min-w-5 !mx-0" })),
              createBaseVNode("span", _hoisted_2$w, toDisplayString(option.label), 1)
            ])
          ]),
          _: 2
        }, 1032, ["value"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["value"]);
}
var FieldListAutoCompleteDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "ColumnFilter",
  props: {
    nested: { type: Boolean, default: false },
    parentId: null,
    autoSave: { type: Boolean, default: true },
    hookId: { default: null },
    modelValue: null
  },
  emits: ["update:filtersLength"],
  setup(__props, { expose, emit }) {
    const logicalOps = [
      { value: "and", text: "AND" },
      { value: "or", text: "OR" }
    ];
    const meta = inject(MetaInj);
    const activeView = inject(ActiveViewInj);
    const reloadDataHook = inject(ReloadViewDataHookInj);
    const { $e } = useNuxtApp();
    const { nestedFilters } = useSmartsheetStoreOrThrow();
    const { filters, deleteFilter, saveOrUpdate, loadFilters, addFilter, addFilterGroup, sync } = useViewFilters(activeView, __props.parentId, computed(() => __props.autoSave), () => {
      reloadDataHook.trigger();
    }, __props.modelValue || nestedFilters.value, !__props.modelValue);
    const localNestedFilters = ref();
    const filterUpdateCondition = (filter, i) => {
      saveOrUpdate(filter, i);
      $e("a:filter:update", {
        logical: filter.logical_op,
        comparison: filter.comparison_op
      });
    };
    const columns = computed(() => {
      var _a;
      return (_a = meta.value) == null ? void 0 : _a.columns;
    });
    const types = computed(() => {
      var _a, _b, _c, _d;
      if (!((_b = (_a = meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.length)) {
        return {};
      }
      return (_d = (_c = meta.value) == null ? void 0 : _c.columns) == null ? void 0 : _d.reduce((obj, col) => {
        switch (col.uidt) {
          case UITypes.Number:
          case UITypes.Decimal:
            obj[col.title] = obj[col.column_name] = "number";
            break;
          case UITypes.Checkbox:
            obj[col.title] = obj[col.column_name] = "boolean";
            break;
        }
        return obj;
      }, {});
    });
    watch(() => {
      var _a;
      return (_a = activeView.value) == null ? void 0 : _a.id;
    }, (n, o) => {
      if (n !== o)
        loadFilters(__props.hookId);
    }, { immediate: true });
    watch(() => filters.value.length, (length) => {
      emit("update:filtersLength", length != null ? length : 0);
    });
    const applyChanges = async (hookId) => {
      var _a;
      await sync(hookId);
      if (!((_a = localNestedFilters.value) == null ? void 0 : _a.length))
        return;
      for (const nestedFilter of localNestedFilters.value) {
        if (nestedFilter.parentId) {
          await nestedFilter.applyChanges(hookId, true);
        }
      }
    };
    expose({
      applyChanges,
      parentId: __props.parentId
    });
    const __returned__ = { emit, logicalOps, meta, activeView, reloadDataHook, $e, nestedFilters, filters, deleteFilter, saveOrUpdate, loadFilters, addFilter, addFilterGroup, sync, localNestedFilters, filterUpdateCondition, columns, types, applyChanges, FieldListAutoCompleteDropdown, comparisonOpList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId$5 = (n) => (pushScopeId("data-v-e83dd9aa"), n = n(), popScopeId(), n);
const _hoisted_1$z = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", { class: "col-span-3" }, null, -1));
const _hoisted_2$v = { class: "col-span-5" };
const _hoisted_3$s = { key: 1 };
const _hoisted_4$a = {
  key: 2,
  class: "flex items-center"
};
const _hoisted_5$9 = { class: "flex gap-2 mb-2 mt-4" };
const _hoisted_6$8 = { class: "flex items-center gap-1" };
const _hoisted_7$5 = { class: "flex items-center gap-1" };
const _hoisted_8$4 = /* @__PURE__ */ createTextVNode(" Add Filter Group ");
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiCloseBox = __unplugin_components_3;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4;
  const _component_SmartsheetToolbarColumnFilter = __nuxt_component_0$3;
  const _component_a_checkbox = Checkbox;
  const _component_a_input = Input;
  const _component_MdiPlus = MdiPlus;
  const _component_a_button = Button;
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["p-6 menu-filter-dropdown bg-gray-50 !border", { "shadow-xl min-w-[430px] max-w-[630px] max-h-[max(80vh,500px)] overflow-auto": !$props.nested, "border-1 w-full": $props.nested }])
  }, [
    $setup.filters && $setup.filters.length ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "nc-filter-grid mb-2",
      onClick: _cache[4] || (_cache[4] = withModifiers(() => {
      }, ["stop"]))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.filters, (filter, i) => {
        return openBlock(), createElementBlock(Fragment, {
          key: filter.id || i
        }, [
          filter.status !== "delete" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            filter.is_group ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              !filter.readOnly ? (openBlock(), createBlock(_component_MdiCloseBox, {
                key: i,
                small: "",
                class: "nc-filter-item-remove-btn cursor-pointer text-grey",
                onClick: withModifiers(($event) => $setup.deleteFilter(filter, i), ["stop"])
              }, null, 8, ["onClick"])) : (openBlock(), createElementBlock("span", {
                key: `${i}dummy`
              })),
              (openBlock(), createElementBlock("div", {
                key: `${i}nested`,
                class: "flex"
              }, [
                createVNode(_component_a_select, {
                  value: filter.logical_op,
                  "onUpdate:value": ($event) => filter.logical_op = $event,
                  "dropdown-match-select-width": false,
                  class: "shrink grow-0",
                  placeholder: "Group op",
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                  }, ["stop"])),
                  onChange: ($event) => $setup.saveOrUpdate(filter, i)
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList($setup.logicalOps, (op) => {
                      return createVNode(_component_a_select_option, {
                        key: op.value,
                        value: op.value,
                        class: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(op.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ]),
                  _: 2
                }, 1032, ["value", "onUpdate:value", "onChange"])
              ])),
              _hoisted_1$z,
              createBaseVNode("div", _hoisted_2$v, [
                filter.id || filter.children ? (openBlock(), createBlock(_component_SmartsheetToolbarColumnFilter, {
                  key: 0,
                  ref_for: true,
                  ref: "localNestedFilters",
                  modelValue: filter.children,
                  "onUpdate:modelValue": ($event) => filter.children = $event,
                  "parent-id": filter.id,
                  nested: "",
                  "auto-save": $props.autoSave
                }, null, 8, ["modelValue", "onUpdate:modelValue", "parent-id", "auto-save"])) : createCommentVNode("", true)
              ])
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              !filter.readOnly ? (openBlock(), createBlock(_component_MdiCloseBox, {
                key: 0,
                class: "nc-filter-item-remove-btn text-grey self-center",
                onClick: withModifiers(($event) => $setup.deleteFilter(filter, i), ["stop"])
              }, null, 8, ["onClick"])) : (openBlock(), createElementBlock("span", _hoisted_3$s)),
              !i ? (openBlock(), createElementBlock("span", _hoisted_4$a, toDisplayString(_ctx.$t("labels.where")), 1)) : (openBlock(), createBlock(_component_a_select, {
                key: 3,
                value: filter.logical_op,
                "onUpdate:value": ($event) => filter.logical_op = $event,
                "dropdown-match-select-width": false,
                class: "h-full",
                "hide-details": "",
                disabled: filter.readOnly,
                onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                }, ["stop"])),
                onChange: ($event) => $setup.filterUpdateCondition(filter, i)
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList($setup.logicalOps, (op) => {
                    return createVNode(_component_a_select_option, {
                      key: op.value,
                      value: op.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(op.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 2
              }, 1032, ["value", "onUpdate:value", "disabled", "onChange"])),
              (openBlock(), createBlock($setup["FieldListAutoCompleteDropdown"], {
                key: `${i}_6`,
                modelValue: filter.fk_column_id,
                "onUpdate:modelValue": ($event) => filter.fk_column_id = $event,
                class: "nc-filter-field-select",
                columns: $setup.columns,
                disabled: filter.readOnly,
                onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                }, ["stop"])),
                onChange: ($event) => $setup.saveOrUpdate(filter, i)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "columns", "disabled", "onChange"])),
              createVNode(_component_a_select, {
                value: filter.comparison_op,
                "onUpdate:value": ($event) => filter.comparison_op = $event,
                "dropdown-match-select-width": false,
                class: "caption nc-filter-operation-select",
                placeholder: _ctx.$t("labels.operation"),
                density: "compact",
                variant: "solo",
                disabled: filter.readOnly,
                "hide-details": "",
                onChange: ($event) => $setup.filterUpdateCondition(filter, i)
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.comparisonOpList, (compOp) => {
                    return openBlock(), createBlock(_component_a_select_option, {
                      key: compOp.value,
                      value: compOp.value,
                      class: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(compOp.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["value", "onUpdate:value", "placeholder", "disabled", "onChange"]),
              ["null", "notnull", "empty", "notempty"].includes(filter.comparison_op) ? (openBlock(), createElementBlock("span", {
                key: `span${i}`
              })) : $setup.types[filter.field] === "boolean" ? (openBlock(), createBlock(_component_a_checkbox, {
                key: 5,
                checked: filter.value,
                "onUpdate:checked": ($event) => filter.value = $event,
                dense: "",
                disabled: filter.readOnly,
                onChange: ($event) => $setup.saveOrUpdate(filter, i)
              }, null, 8, ["checked", "onUpdate:checked", "disabled", "onChange"])) : (openBlock(), createBlock(_component_a_input, {
                key: `${i}_7`,
                value: filter.value,
                "onUpdate:value": ($event) => filter.value = $event,
                class: "nc-filter-value-select",
                disabled: filter.readOnly,
                onClick: _cache[3] || (_cache[3] = withModifiers(() => {
                }, ["stop"])),
                onInput: ($event) => $setup.saveOrUpdate(filter, i)
              }, null, 8, ["value", "onUpdate:value", "disabled", "onInput"]))
            ], 64))
          ], 64)) : createCommentVNode("", true)
        ], 64);
      }), 128))
    ])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_5$9, [
      createVNode(_component_a_button, {
        class: "elevation-0 text-capitalize",
        type: "primary",
        ghost: "",
        onClick: withModifiers($setup.addFilter, ["stop"])
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_6$8, [
            createVNode(_component_MdiPlus),
            createTextVNode(toDisplayString(_ctx.$t("activity.addFilter")), 1)
          ])
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "text-capitalize !text-gray-500",
        onClick: withModifiers($setup.addFilterGroup, ["stop"])
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_7$5, [
            createVNode(_component_MdiPlus),
            _hoisted_8$4
          ])
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
var __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__scopeId", "data-v-e83dd9aa"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Test",
  props: {
    hook: null
  },
  setup(__props, { expose }) {
    const { $api } = useNuxtApp();
    const meta = inject(MetaInj);
    const sampleData = ref({
      data: {}
    });
    const activeKey = ref(0);
    watch(() => {
      var _a;
      return (_a = __props.hook) == null ? void 0 : _a.operation;
    }, async () => {
      await loadSampleData();
    });
    async function loadSampleData() {
      var _a, _b;
      sampleData.value = {
        data: await $api.dbTableWebhook.samplePayloadGet((_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.id, ((_b = __props.hook) == null ? void 0 : _b.operation) || "insert")
      };
    }
    async function testWebhook() {
      try {
        await $api.dbTableWebhook.test(meta == null ? void 0 : meta.value.id, {
          hook: __props.hook,
          payload: sampleData.value
        });
        message.success("Webhook tested successfully");
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    }
    expose({
      testWebhook
    });
    onMounted(async () => {
      await loadSampleData();
    });
    const __returned__ = { $api, meta, sampleData, activeKey, loadSampleData, testWebhook };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MonacoEditor = __nuxt_component_0$8;
  const _component_a_collapse_panel = __unplugin_components_9$1;
  const _component_a_collapse = Collapse;
  return openBlock(), createBlock(_component_a_collapse, {
    activeKey: $setup.activeKey,
    "onUpdate:activeKey": _cache[1] || (_cache[1] = ($event) => $setup.activeKey = $event),
    ghost: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_a_collapse_panel, {
        key: "1",
        header: "Sample Payload"
      }, {
        default: withCtx(() => [
          createVNode(_component_MonacoEditor, {
            modelValue: $setup.sampleData,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.sampleData = $event),
            class: "min-h-60 max-h-80"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["activeKey"]);
}
var __nuxt_component_5$2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
const _hoisted_1$y = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$u = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
}, null, -1);
const _hoisted_3$r = [
  _hoisted_2$u
];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, _hoisted_3$r);
}
var __unplugin_components_24 = { name: "mdi-information", render: render$h };
const _hoisted_1$x = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$t = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M11 17V7H4v10h7m0-14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7m5.5 0h5A1.5 1.5 0 0 1 23 4.5v3A1.5 1.5 0 0 1 21.5 9H18l-3 3V4.5A1.5 1.5 0 0 1 16.5 3Z"
}, null, -1);
const _hoisted_3$q = [
  _hoisted_2$t
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$x, _hoisted_3$q);
}
var __unplugin_components_18 = { name: "mdi-cellphone-message", render: render$g };
const _hoisted_1$w = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$s = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z"
}, null, -1);
const _hoisted_3$p = [
  _hoisted_2$s
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_3$p);
}
var __unplugin_components_17 = { name: "mdi-whatsapp", render: render$f };
const _hoisted_1$v = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$r = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8Z"
}, null, -1);
const _hoisted_3$o = [
  _hoisted_2$r
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_3$o);
}
var __unplugin_components_16 = { name: "mdi-chat", render: render$e };
const _hoisted_1$u = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$q = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19.19 8.77q-.46 0-.86-.17q-.39-.17-.69-.47q-.3-.3-.47-.69q-.17-.4-.17-.86q0-.45.17-.85q.17-.4.47-.69q.3-.3.69-.47q.4-.18.86-.17q.45-.01.85.17q.4.17.7.47q.29.29.47.69q.17.4.17.85q0 .46-.17.86q-.17.39-.47.69q-.3.3-.7.47q-.4.17-.85.17m0-3.12q-.39 0-.69.27q-.25.27-.25.66t.25.67q.3.25.69.25q.39 0 .66-.25q.28-.25.28-.67q0-.39-.28-.66q-.27-.27-.66-.27M22 10.33V15q0 .63-.24 1.2q-.26.57-.67.99q-.43.43-1 .67q-.59.25-1.21.25q-.38 0-.76-.11q-.39-.07-.71-.25q-.24.79-.71 1.44q-.47.65-1.1 1.11q-.63.46-1.39.7q-.76.27-1.58.27q-.96 0-1.81-.33q-.82-.33-1.5-.94q-.66-.57-1.09-1.36q-.44-.8-.57-1.74H2.83q-.33 0-.59-.25q-.24-.24-.24-.58V7.73q0-.34.24-.59q.26-.24.59-.24H10q-.29-.6-.29-1.25q0-.61.23-1.15q.22-.5.62-.92q.4-.39.94-.62q.5-.23 1.12-.23q.61 0 1.14.23q.53.23.93.62q.4.42.62.92q.23.54.23 1.15q0 .6-.23 1.14q-.22.53-.62.92q-.4.4-.93.63q-.53.23-1.14.23q-.15 0-.31-.02q-.15-.02-.31-.05v.9h9.06q.39 0 .67.27q.27.27.27.66M12.63 4q-.35 0-.63.11q-.33.13-.56.36q-.22.23-.35.53q-.13.31-.13.65q0 .35.13.65q.13.3.35.53q.23.22.56.36q.28.13.63.13q.34 0 .64-.13q.3-.14.53-.36q.23-.23.36-.53q.14-.3.14-.65q0-.34-.14-.65q-.13-.3-.36-.53q-.23-.23-.53-.36q-.3-.11-.64-.11m-4.85 6.18h1.88V8.62H4.34v1.56h1.88v5h1.56m8.6 1.09v-5.62H12v5.42q0 .34-.24.58q-.26.25-.59.25H8.92q.13.67.47 1.25q.34.57.82.99q.48.41 1.1.65q.61.21 1.32.21q.77 0 1.45-.27q.68-.3 1.2-.81q.51-.51.8-1.19q.3-.68.3-1.46M20.75 15v-4.35h-3.12v5.71q.25.25.57.38q.3.12.68.12q.39 0 .73-.15q.34-.15.59-.4q.26-.25.4-.6q.15-.34.15-.71Z"
}, null, -1);
const _hoisted_3$n = [
  _hoisted_2$q
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, _hoisted_3$n);
}
var __unplugin_components_14 = { name: "mdi-microsoft-teams", render: render$d };
const _hoisted_1$t = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$p = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2m1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5m2-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2H9m0 1a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5m8 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2v-2m-1 0a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5m-2 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2h2m0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-5Z"
}, null, -1);
const _hoisted_3$m = [
  _hoisted_2$p
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_3$m);
}
var __unplugin_components_13 = { name: "mdi-slack", render: render$c };
const _hoisted_1$s = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$o = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"
}, null, -1);
const _hoisted_3$l = [
  _hoisted_2$o
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, _hoisted_3$l);
}
var __unplugin_components_11 = { name: "mdi-link", render: render$b };
const _hoisted_1$r = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$n = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19V9m1-4a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46v-1.22c.61-.55 1-1.35 1-2.24a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .89.39 1.69 1 2.24v1.22C7.8 11.77 7 10.5 7 9a4 4 0 0 1 4-4m0-2a6 6 0 0 1 6 6c0 1.7-.71 3.23-1.84 4.33l-1-.45A5.019 5.019 0 0 0 16 9a5 5 0 0 0-5-5a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58v1.08C6.67 13.83 5 11.61 5 9a6 6 0 0 1 6-6Z"
}, null, -1);
const _hoisted_3$k = [
  _hoisted_2$n
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, _hoisted_3$k);
}
var __unplugin_components_1 = { name: "mdi-gesture-double-tap", render: render$a };
const _hoisted_1$q = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$m = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M20 9v6h-8v4.84L4.16 12L12 4.16V9h8Z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$m
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_3$j);
}
var __unplugin_components_0$2 = { name: "mdi-arrow-left-bold", render: render$9 };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Editor",
  emits: ["backToList", "editOrAdd"],
  setup(__props, { expose, emit }) {
    const { $e } = useNuxtApp();
    const { api, isLoading: loading } = useApi();
    const meta = inject(MetaInj);
    const useForm = Form.useForm;
    const hook = reactive({
      id: "",
      title: "",
      event: "",
      operation: "",
      eventOperation: "",
      notification: {
        type: "URL",
        payload: {
          method: "POST",
          body: "{{ json data }}",
          headers: [{}],
          parameters: [{}]
        }
      },
      condition: false
    });
    const urlTabKey = ref("body");
    const apps = ref();
    const webhookTestRef = ref();
    const slackChannels = ref([]);
    const teamsChannels = ref([]);
    const discordChannels = ref([]);
    const mattermostChannels = ref([]);
    const filterRef = ref();
    const formInput = ref({
      "Email": [
        {
          key: "to",
          label: "To Address",
          placeholder: "To Address",
          type: "SingleLineText",
          required: true
        },
        {
          key: "subject",
          label: "Subject",
          placeholder: "Subject",
          type: "SingleLineText",
          required: true
        },
        {
          key: "body",
          label: "Body",
          placeholder: "Body",
          type: "LongText",
          required: true
        }
      ],
      "Slack": [
        {
          key: "body",
          label: "Body",
          placeholder: "Body",
          type: "LongText",
          required: true
        }
      ],
      "Microsoft Teams": [
        {
          key: "body",
          label: "Body",
          placeholder: "Body",
          type: "LongText",
          required: true
        }
      ],
      "Discord": [
        {
          key: "body",
          label: "Body",
          placeholder: "Body",
          type: "LongText",
          required: true
        }
      ],
      "Mattermost": [
        {
          key: "body",
          label: "Body",
          placeholder: "Body",
          type: "LongText",
          required: true
        }
      ],
      "Twilio": [
        {
          key: "body",
          label: "Body",
          placeholder: "Body",
          type: "LongText",
          required: true
        },
        {
          key: "to",
          label: "Comma separated Mobile #",
          placeholder: "Comma separated Mobile #",
          type: "LongText",
          required: true
        }
      ],
      "Whatsapp Twilio": [
        {
          key: "body",
          label: "Body",
          placeholder: "Body",
          type: "LongText",
          required: true
        },
        {
          key: "to",
          label: "Comma separated Mobile #",
          placeholder: "Comma separated Mobile #",
          type: "LongText",
          required: true
        }
      ]
    });
    const eventList = ref([
      { text: ["After", "Insert"], value: ["after", "insert"] },
      { text: ["After", "Update"], value: ["after", "update"] },
      { text: ["After", "Delete"], value: ["after", "delete"] }
    ]);
    const notificationList = ref([
      { type: "URL" },
      { type: "Email" },
      { type: "Slack" },
      { type: "Microsoft Teams" },
      { type: "Discord" },
      { type: "Mattermost" },
      { type: "Twilio" },
      { type: "Whatsapp Twilio" }
    ]);
    const methodList = ref([
      { title: "GET" },
      { title: "POST" },
      { title: "DELETE" },
      { title: "PUT" },
      { title: "HEAD" },
      { title: "PATCH" }
    ]);
    const validators = computed(() => {
      return {
        "title": [fieldRequiredValidator],
        "eventOperation": [fieldRequiredValidator],
        "notification.type": [fieldRequiredValidator],
        ...hook.notification.type === "URL" && {
          "notification.payload.method": [fieldRequiredValidator],
          "notification.payload.path": [fieldRequiredValidator]
        },
        ...hook.notification.type === "Email" && {
          "notification.payload.to": [fieldRequiredValidator],
          "notification.payload.subject": [fieldRequiredValidator],
          "notification.payload.body": [fieldRequiredValidator]
        },
        ...(hook.notification.type === "Slack" || hook.notification.type === "Microsoft Teams" || hook.notification.type === "Discord" || hook.notification.type === "Mattermost") && {
          "notification.payload.channels": [fieldRequiredValidator],
          "notification.payload.body": [fieldRequiredValidator]
        },
        ...(hook.notification.type === "Twilio" || hook.notification.type === "Whatsapp Twilio") && {
          "notification.payload.body": [fieldRequiredValidator],
          "notification.payload.to": [fieldRequiredValidator]
        }
      };
    });
    const { validate, validateInfos } = useForm(hook, validators);
    function onNotTypeChange(reset = false) {
      if (reset) {
        hook.notification.payload = {};
      }
      if (hook.notification.type === "Slack") {
        slackChannels.value = apps.value && apps.value.Slack && apps.Slack.parsedInput || [];
      }
      if (hook.notification.type === "Microsoft Teams") {
        teamsChannels.value = apps.value && apps.value["Microsoft Teams"] && apps.value["Microsoft Teams"].parsedInput || [];
      }
      if (hook.notification.type === "Discord") {
        discordChannels.value = apps.value && apps.value.Discord && apps.value.Discord.parsedInput || [];
      }
      if (hook.notification.type === "Mattermost") {
        mattermostChannels.value = apps.value && apps.value.Mattermost && apps.value.Mattermost.parsedInput || [];
      }
      if (hook.notification.type === "URL") {
        hook.notification.payload.body = hook.notification.payload.body || "{{ json data }}";
        hook.notification.payload.parameters = hook.notification.payload.parameters || [{}];
        hook.notification.payload.headers = hook.notification.payload.headers || [{}];
        hook.notification.payload.method = hook.notification.payload.method || "POST";
        hook.notification.payload.auth = hook.notification.payload.auth || "";
      }
    }
    function setHook(newHook) {
      Object.assign(hook, {
        ...newHook,
        notification: {
          ...newHook.notification,
          payload: newHook.notification.payload
        }
      });
    }
    async function onEventChange() {
      const { notification: { payload = {}, type = {} } = {} } = hook;
      Object.assign(hook, {
        ...hook,
        notification: {
          type,
          payload
        }
      });
      hook.notification.payload = payload;
      let channels = null;
      switch (hook.notification.type) {
        case "Slack":
          channels = slackChannels;
          break;
        case "Microsoft Teams":
          channels = teamsChannels;
          break;
        case "Discord":
          channels = discordChannels;
          break;
        case "Mattermost":
          channels = mattermostChannels;
          break;
      }
      if (channels) {
        hook.notification.payload.webhook_url = hook.notification.payload.webhook_url && hook.notification.payload.webhook_url.map((v) => channels == null ? void 0 : channels.find((s) => v.webhook_url === s.webhook_url));
      }
      if (hook.notification.type === "URL") {
        hook.notification.payload = hook.notification.payload || {};
        hook.notification.payload.parameters = hook.notification.payload.parameters || [{}];
        hook.notification.payload.headers = hook.notification.payload.headers || [{}];
        hook.notification.payload.method = hook.notification.payload.method || "POST";
      }
    }
    async function loadPluginList() {
      try {
        const plugins = (await api.plugin.list()).list;
        apps.value = plugins.reduce((o, p) => {
          p.tags = p.tags ? p.tags.split(",") : [];
          p.parsedInput = p.input && JSON.parse(p.input);
          o[p.title] = p;
          return o;
        }, {});
        if (hook.event && hook.operation) {
          hook.eventOperation = `${hook.event} ${hook.operation}`;
        }
        onNotTypeChange();
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    }
    async function saveHooks() {
      loading.value = true;
      try {
        await validate();
      } catch (_) {
        message.error("Invalid Form");
        loading.value = false;
        return;
      }
      try {
        let res;
        if (hook.id) {
          res = await api.dbTableWebhook.update(hook.id, {
            ...hook,
            notification: {
              ...hook.notification,
              payload: hook.notification.payload
            }
          });
        } else {
          res = await api.dbTableWebhook.create(meta.value.id, {
            ...hook,
            notification: {
              ...hook.notification,
              payload: hook.notification.payload
            }
          });
        }
        if (!hook.id && res) {
          hook.id = res.id;
        }
        if (filterRef.value) {
          await filterRef.value.applyChanges(hook.id);
        }
        message.success("Webhook details updated successfully");
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      } finally {
        loading.value = false;
      }
      $e("a:webhook:add", {
        operation: hook.operation,
        condition: hook.condition,
        notification: hook.notification.type
      });
    }
    async function testWebhook() {
      await webhookTestRef.value.testWebhook();
    }
    expose({
      onEventChange,
      setHook
    });
    watch(() => hook.eventOperation, () => {
      if (!hook.eventOperation)
        return;
      const [event, operation] = hook.eventOperation.split(" ");
      hook.event = event;
      hook.operation = operation;
    });
    onMounted(async () => {
      await loadPluginList();
    });
    const __returned__ = { emit, $e, api, loading, meta, useForm, hook, urlTabKey, apps, webhookTestRef, slackChannels, teamsChannels, discordChannels, mattermostChannels, filterRef, formInput, eventList, notificationList, methodList, validators, validate, validateInfos, onNotTypeChange, setHook, onEventChange, loadPluginList, saveHooks, testWebhook };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$p = { class: "flex" };
const _hoisted_2$l = { class: "flex-1" };
const _hoisted_3$i = { class: "flex items-center mt-2" };
const _hoisted_4$9 = { class: "inline text-xl font-bold" };
const _hoisted_5$8 = { class: "flex items-center" };
const _hoisted_6$7 = /* @__PURE__ */ createTextVNode(" Test Webhook ");
const _hoisted_7$4 = { class: "flex items-center" };
const _hoisted_8$3 = { class: "flex items-center" };
const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("span", { class: "text-gray-500 prose-sm p-2" }, [
  /* @__PURE__ */ createTextVNode(" For more about auth option refer "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "prose-sm",
    href: "https://github.com/axios/axios#request-config",
    target: "_blank"
  }, "axios docs"),
  /* @__PURE__ */ createTextVNode(". ")
], -1);
const _hoisted_10$2 = /* @__PURE__ */ createTextVNode("On Condition");
const _hoisted_11$2 = { class: "text-gray-600" };
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("em", null, [
  /* @__PURE__ */ createTextVNode("Use context variable "),
  /* @__PURE__ */ createBaseVNode("strong", null, "data"),
  /* @__PURE__ */ createTextVNode(" to refer the record under consideration")
], -1);
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("span", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "data"),
  /* @__PURE__ */ createTextVNode(" : Row data "),
  /* @__PURE__ */ createBaseVNode("br")
], -1);
const _hoisted_14$1 = { class: "mt-3" };
const _hoisted_15$1 = {
  href: "https://docs.nocodb.com/developer-resources/webhooks/",
  target: "_blank"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiArrowLeftBold = __unplugin_components_0$2;
  const _component_MdiGestureDoubleTap = __unplugin_components_1;
  const _component_a_button = Button;
  const _component_MdiContentSave = __unplugin_components_3$2;
  const _component_a_divider = __unplugin_components_2$1;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2;
  const _component_a_col = __unplugin_components_2$2;
  const _component_a_row = __unplugin_components_3$3;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4;
  const _component_MdiLink = __unplugin_components_11;
  const _component_MdiEmail = __unplugin_components_12;
  const _component_MdiSlack = __unplugin_components_13;
  const _component_MdiMicrosoftTeams = __unplugin_components_14;
  const _component_MdiDiscord = MdiDiscord;
  const _component_MdiChat = __unplugin_components_16;
  const _component_MdiWhatsapp = __unplugin_components_17;
  const _component_MdiCellphoneMessage = __unplugin_components_18;
  const _component_MonacoEditor = __nuxt_component_0$8;
  const _component_a_tab_pane = __unplugin_components_1$1;
  const _component_ApiClientParams = __nuxt_component_1$3;
  const _component_ApiClientHeaders = __nuxt_component_2$1;
  const _component_a_tabs = Tabs;
  const _component_WebhookChannelMultiSelect = __nuxt_component_3$2;
  const _component_a_textarea = __unplugin_components_13$2;
  const _component_a_checkbox = Checkbox;
  const _component_SmartsheetToolbarColumnFilter = __nuxt_component_0$3;
  const _component_a_card = Card;
  const _component_MdiInformation = __unplugin_components_24;
  const _component_a_tooltip = __unplugin_components_1$2;
  const _component_WebhookTest = __nuxt_component_5$2;
  const _component_a_form = Form;
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$p, [
      createBaseVNode("div", _hoisted_2$l, [
        createBaseVNode("div", _hoisted_3$i, [
          createVNode(_component_MdiArrowLeftBold, {
            class: "mr-3 text-xl cursor-pointer nc-icon-hook-navigate-left",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("backToList"))
          }),
          createBaseVNode("span", _hoisted_4$9, toDisplayString($setup.meta.title) + " : " + toDisplayString($setup.hook.title || "Webhooks"), 1)
        ])
      ]),
      createBaseVNode("div", null, [
        createVNode(_component_a_button, {
          class: "mr-3 nc-btn-webhook-test",
          size: "large",
          onClick: $setup.testWebhook
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_5$8, [
              createVNode(_component_MdiGestureDoubleTap, { class: "mr-2" }),
              _hoisted_6$7
            ])
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          class: "nc-btn-webhook-save",
          type: "primary",
          size: "large",
          onClick: withModifiers($setup.saveHooks, ["prevent"])
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_7$4, [
              createVNode(_component_MdiContentSave, { class: "mr-2" }),
              createTextVNode(toDisplayString(_ctx.$t("general.save")), 1)
            ])
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    createVNode(_component_a_divider),
    createVNode(_component_a_form, {
      model: $setup.hook,
      name: "create-or-edit-webhook"
    }, {
      default: withCtx(() => [
        createVNode(_component_a_form_item, null, {
          default: withCtx(() => [
            createVNode(_component_a_row, { type: "flex" }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_form_item, normalizeProps(guardReactiveProps($setup.validateInfos.title)), {
                      default: withCtx(() => [
                        createVNode(_component_a_input, {
                          value: $setup.hook.title,
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.hook.title = $event),
                          size: "large",
                          placeholder: _ctx.$t("general.title"),
                          class: "nc-text-field-hook-title"
                        }, null, 8, ["value", "placeholder"])
                      ]),
                      _: 1
                    }, 16)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_a_row, {
              type: "flex",
              gutter: [16, 16]
            }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 12 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_form_item, normalizeProps(guardReactiveProps($setup.validateInfos.eventOperation)), {
                      default: withCtx(() => [
                        createVNode(_component_a_select, {
                          value: $setup.hook.eventOperation,
                          "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.hook.eventOperation = $event),
                          size: "large",
                          placeholder: _ctx.$t("general.event"),
                          class: "nc-text-field-hook-event"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.eventList, (event, i) => {
                              return openBlock(), createBlock(_component_a_select_option, {
                                key: i,
                                value: event.value.join(" ")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(event.text.join(" ")), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["value", "placeholder"])
                      ]),
                      _: 1
                    }, 16)
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, { span: 12 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_form_item, normalizeProps(guardReactiveProps($setup.validateInfos["notification.type"])), {
                      default: withCtx(() => [
                        createVNode(_component_a_select, {
                          value: $setup.hook.notification.type,
                          "onUpdate:value": _cache[3] || (_cache[3] = ($event) => $setup.hook.notification.type = $event),
                          size: "large",
                          class: "nc-select-hook-notification-type",
                          placeholder: _ctx.$t("general.notification"),
                          onChange: _cache[4] || (_cache[4] = ($event) => $setup.onNotTypeChange(true))
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.notificationList, (notificationOption, i) => {
                              return openBlock(), createBlock(_component_a_select_option, {
                                key: i,
                                value: notificationOption.type
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_8$3, [
                                    notificationOption.type === "URL" ? (openBlock(), createBlock(_component_MdiLink, {
                                      key: 0,
                                      class: "mr-2"
                                    })) : createCommentVNode("", true),
                                    notificationOption.type === "Email" ? (openBlock(), createBlock(_component_MdiEmail, {
                                      key: 1,
                                      class: "mr-2"
                                    })) : createCommentVNode("", true),
                                    notificationOption.type === "Slack" ? (openBlock(), createBlock(_component_MdiSlack, {
                                      key: 2,
                                      class: "mr-2"
                                    })) : createCommentVNode("", true),
                                    notificationOption.type === "Microsoft Teams" ? (openBlock(), createBlock(_component_MdiMicrosoftTeams, {
                                      key: 3,
                                      class: "mr-2"
                                    })) : createCommentVNode("", true),
                                    notificationOption.type === "Discord" ? (openBlock(), createBlock(_component_MdiDiscord, {
                                      key: 4,
                                      class: "mr-2"
                                    })) : createCommentVNode("", true),
                                    notificationOption.type === "Mattermost" ? (openBlock(), createBlock(_component_MdiChat, {
                                      key: 5,
                                      class: "mr-2"
                                    })) : createCommentVNode("", true),
                                    notificationOption.type === "Whatsapp Twilio" ? (openBlock(), createBlock(_component_MdiWhatsapp, {
                                      key: 6,
                                      class: "mr-2"
                                    })) : createCommentVNode("", true),
                                    notificationOption.type === "Twilio" ? (openBlock(), createBlock(_component_MdiCellphoneMessage, {
                                      key: 7,
                                      class: "mr-2"
                                    })) : createCommentVNode("", true),
                                    createTextVNode(" " + toDisplayString(notificationOption.type), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["value", "placeholder"])
                      ]),
                      _: 1
                    }, 16)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            $setup.hook.notification.type === "URL" ? (openBlock(), createBlock(_component_a_row, {
              key: 0,
              class: "mb-5",
              type: "flex",
              gutter: [16, 0]
            }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 6 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_select, {
                      value: $setup.hook.notification.payload.method,
                      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.hook.notification.payload.method = $event),
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.methodList, (method, i) => {
                          return openBlock(), createBlock(_component_a_select_option, {
                            key: i,
                            value: method.title
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(method.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, { span: 18 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_form_item, normalizeProps(guardReactiveProps($setup.validateInfos["notification.payload.path"])), {
                      default: withCtx(() => [
                        createVNode(_component_a_input, {
                          value: $setup.hook.notification.payload.path,
                          "onUpdate:value": _cache[6] || (_cache[6] = ($event) => $setup.hook.notification.payload.path = $event),
                          size: "large",
                          placeholder: "http://example.com",
                          class: "nc-text-field-hook-url-path"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }, 16)
                  ]),
                  _: 1
                }),
                createVNode(_component_a_col, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_tabs, {
                      activeKey: $setup.urlTabKey,
                      "onUpdate:activeKey": _cache[11] || (_cache[11] = ($event) => $setup.urlTabKey = $event),
                      type: "card",
                      closeable: "false",
                      class: "shadow-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_tab_pane, {
                          key: "body",
                          tab: "Body"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_MonacoEditor, {
                              modelValue: $setup.hook.notification.payload.body,
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.hook.notification.payload.body = $event),
                              validate: false,
                              class: "min-h-60 max-h-80"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tab_pane, {
                          key: "params",
                          tab: "Params",
                          "force-render": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ApiClientParams, {
                              modelValue: $setup.hook.notification.payload.parameters,
                              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.hook.notification.payload.parameters = $event)
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tab_pane, {
                          key: "headers",
                          tab: "Headers",
                          class: "nc-tab-headers"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ApiClientHeaders, {
                              modelValue: $setup.hook.notification.payload.headers,
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.hook.notification.payload.headers = $event)
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tab_pane, {
                          key: "auth",
                          tab: "Auth"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_MonacoEditor, {
                              modelValue: $setup.hook.notification.payload.auth,
                              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.hook.notification.payload.auth = $event),
                              class: "min-h-60 max-h-80"
                            }, null, 8, ["modelValue"]),
                            _hoisted_9$3
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["activeKey"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            $setup.hook.notification.type === "Slack" ? (openBlock(), createBlock(_component_a_row, {
              key: 1,
              type: "flex"
            }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_form_item, normalizeProps(guardReactiveProps($setup.validateInfos["notification.channels"])), {
                      default: withCtx(() => [
                        $setup.slackChannels.length > 0 ? (openBlock(), createBlock(_component_WebhookChannelMultiSelect, {
                          key: 0,
                          modelValue: $setup.hook.notification.payload.channels,
                          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.hook.notification.payload.channels = $event),
                          "selected-channel-list": $setup.hook.notification.payload.channels,
                          "available-channel-list": $setup.slackChannels,
                          placeholder: "Select Slack channels"
                        }, null, 8, ["modelValue", "selected-channel-list", "available-channel-list"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 16)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            $setup.hook.notification.type === "Microsoft Teams" ? (openBlock(), createBlock(_component_a_row, {
              key: 2,
              type: "flex"
            }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_form_item, normalizeProps(guardReactiveProps($setup.validateInfos["notification.channels"])), {
                      default: withCtx(() => [
                        $setup.teamsChannels.length > 0 ? (openBlock(), createBlock(_component_WebhookChannelMultiSelect, {
                          key: 0,
                          modelValue: $setup.hook.notification.payload.channels,
                          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.hook.notification.payload.channels = $event),
                          "selected-channel-list": $setup.hook.notification.payload.channels,
                          "available-channel-list": $setup.teamsChannels,
                          placeholder: "Select Microsoft Teams channels"
                        }, null, 8, ["modelValue", "selected-channel-list", "available-channel-list"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 16)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            $setup.hook.notification.type === "Discord" ? (openBlock(), createBlock(_component_a_row, {
              key: 3,
              type: "flex"
            }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_form_item, normalizeProps(guardReactiveProps($setup.validateInfos["notification.channels"])), {
                      default: withCtx(() => [
                        $setup.discordChannels.length > 0 ? (openBlock(), createBlock(_component_WebhookChannelMultiSelect, {
                          key: 0,
                          modelValue: $setup.hook.notification.payload.channels,
                          "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.hook.notification.payload.channels = $event),
                          "selected-channel-list": $setup.hook.notification.payload.channels,
                          "available-channel-list": $setup.discordChannels,
                          placeholder: "Select Discord channels"
                        }, null, 8, ["modelValue", "selected-channel-list", "available-channel-list"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 16)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            $setup.hook.notification.type === "Mattermost" ? (openBlock(), createBlock(_component_a_row, {
              key: 4,
              type: "flex"
            }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_form_item, normalizeProps(guardReactiveProps($setup.validateInfos["notification.channels"])), {
                      default: withCtx(() => [
                        $setup.mattermostChannels.length > 0 ? (openBlock(), createBlock(_component_WebhookChannelMultiSelect, {
                          key: 0,
                          modelValue: $setup.hook.notification.payload.channels,
                          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.hook.notification.payload.channels = $event),
                          "selected-channel-list": $setup.hook.notification.payload.channels,
                          "available-channel-list": $setup.mattermostChannels,
                          placeholder: "Select Mattermost channels"
                        }, null, 8, ["modelValue", "selected-channel-list", "available-channel-list"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 16)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            $setup.formInput[$setup.hook.notification.type] && $setup.hook.notification.payload ? (openBlock(), createBlock(_component_a_row, {
              key: 5,
              type: "flex"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.formInput[$setup.hook.notification.type], (input, i) => {
                  return openBlock(), createBlock(_component_a_col, {
                    key: i,
                    span: 24
                  }, {
                    default: withCtx(() => [
                      input.type === "LongText" ? (openBlock(), createBlock(_component_a_form_item, normalizeProps(mergeProps({ key: 0 }, $setup.validateInfos[`notification.payload.${input.key}`])), {
                        default: withCtx(() => [
                          createVNode(_component_a_textarea, {
                            value: $setup.hook.notification.payload[input.key],
                            "onUpdate:value": ($event) => $setup.hook.notification.payload[input.key] = $event,
                            placeholder: input.label,
                            size: "large"
                          }, null, 8, ["value", "onUpdate:value", "placeholder"])
                        ]),
                        _: 2
                      }, 1040)) : (openBlock(), createBlock(_component_a_form_item, normalizeProps(mergeProps({ key: 1 }, $setup.validateInfos[`notification.payload.${input.key}`])), {
                        default: withCtx(() => [
                          createVNode(_component_a_input, {
                            value: $setup.hook.notification.payload[input.key],
                            "onUpdate:value": ($event) => $setup.hook.notification.payload[input.key] = $event,
                            placeholder: input.label,
                            size: "large"
                          }, null, 8, ["value", "onUpdate:value", "placeholder"])
                        ]),
                        _: 2
                      }, 1040))
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_a_row, {
              class: "mb-5",
              type: "flex"
            }, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 24 }, {
                  default: withCtx(() => [
                    createVNode(_component_a_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_a_checkbox, {
                          checked: $setup.hook.condition,
                          "onUpdate:checked": _cache[16] || (_cache[16] = ($event) => $setup.hook.condition = $event),
                          class: "nc-check-box-hook-condition"
                        }, {
                          default: withCtx(() => [
                            _hoisted_10$2
                          ]),
                          _: 1
                        }, 8, ["checked"]),
                        $setup.hook.condition ? (openBlock(), createBlock(_component_SmartsheetToolbarColumnFilter, {
                          key: 0,
                          ref: "filterRef",
                          "auto-save": false,
                          "hook-id": $setup.hook.id
                        }, null, 8, ["hook-id"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_a_row, null, {
              default: withCtx(() => [
                createVNode(_component_a_col, { span: 24 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_11$2, [
                      _hoisted_12$2,
                      createVNode(_component_a_tooltip, { bottom: "" }, {
                        title: withCtx(() => [
                          _hoisted_13$1
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_MdiInformation, { class: "ml-2" })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_14$1, [
                        createBaseVNode("a", _hoisted_15$1, toDisplayString(_ctx.$t("labels.docReference")), 1)
                      ])
                    ]),
                    createVNode(_component_WebhookTest, {
                      ref: "webhookTestRef",
                      hook: {
                        ...$setup.hook,
                        notification: {
                          ...$setup.hook.notification,
                          payload: $setup.hook.notification.payload
                        }
                      }
                    }, null, 8, ["hook"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model"])
  ], 64);
}
var __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
const _hoisted_1$o = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$k = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M18 6a3.99 3.99 0 0 1-3 3.86V17a5 5 0 0 1-5 5a5 5 0 0 1-5-5v-5l5 5H7a3 3 0 0 0 3 3a3 3 0 0 0 3-3V9.86c-1.77-.46-3-2.06-3-3.89C10 3.76 11.8 2 14 2c2.22 0 4 1.79 4 4m-4 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2Z"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$k
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_3$h);
}
var __unplugin_components_10$1 = { name: "mdi-hook", render: render$8 };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "List",
  emits: ["edit", "add"],
  setup(__props, { expose, emit }) {
    expose();
    const { $api, $e } = useNuxtApp();
    const hooks = ref([]);
    const meta = inject(MetaInj);
    async function loadHooksList() {
      try {
        const hookList = (await $api.dbTableWebhook.list(meta == null ? void 0 : meta.value.id)).list;
        hooks.value = hookList.map((hook) => {
          hook.notification = hook.notification && JSON.parse(hook.notification);
          return hook;
        });
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    }
    async function deleteHook(item, index) {
      try {
        if (item.id) {
          await $api.dbTableWebhook.delete(item.id);
          hooks.value.splice(index, 1);
        } else {
          hooks.value.splice(index, 1);
        }
        message.success("Hook deleted successfully");
        if (!hooks.value.length) {
          hooks.value = [];
        }
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      $e("a:webhook:delete");
    }
    onMounted(() => {
      loadHooksList();
    });
    const __returned__ = { emit, $api, $e, hooks, meta, loadHooksList, deleteHook };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$n = { class: "" };
const _hoisted_2$j = { class: "mb-2" };
const _hoisted_3$g = { class: "float-left font-bold text-xl mt-2 mb-4" };
const _hoisted_4$8 = {
  key: 0,
  class: ""
};
const _hoisted_5$7 = { class: "uppercase" };
const _hoisted_6$6 = { class: "text-xl normal-case" };
const _hoisted_7$3 = { class: "mt-4" };
const _hoisted_8$2 = { class: "mr-2" };
const _hoisted_9$2 = { class: "float-right pt-2 pr-1" };
const _hoisted_10$1 = {
  key: 1,
  class: "min-h-[75vh]"
};
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("div", { class: "p-4 bg-gray-100 text-gray-600" }, " Webhooks list is empty, create new webhook by clicking 'Create webhook' button. ", -1);
const _hoisted_12$1 = [
  _hoisted_11$1
];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = Button;
  const _component_a_divider = __unplugin_components_2$1;
  const _component_MdiHook = __unplugin_components_10$1;
  const _component_a_list_item_meta = __unplugin_components_6;
  const _component_MdiDeleteOutline = __unplugin_components_3$1;
  const _component_a_list_item = __unplugin_components_7$1;
  const _component_a_list = __unplugin_components_8$1;
  return openBlock(), createElementBlock("div", _hoisted_1$n, [
    createBaseVNode("div", _hoisted_2$j, [
      createBaseVNode("div", _hoisted_3$g, toDisplayString($setup.meta.title) + " : Webhooks", 1),
      createVNode(_component_a_button, {
        class: "float-right nc-btn-create-webhook",
        type: "primary",
        size: "large",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("add"))
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("activity.addWebhook")), 1)
        ]),
        _: 1
      })
    ]),
    createVNode(_component_a_divider),
    $setup.hooks.length ? (openBlock(), createElementBlock("div", _hoisted_4$8, [
      createVNode(_component_a_list, {
        "item-layout": "horizontal",
        "data-source": $setup.hooks,
        class: "cursor-pointer scrollbar-thin-primary"
      }, {
        renderItem: withCtx(({ item, index }) => [
          createVNode(_component_a_list_item, {
            class: "p-2 nc-hook",
            onClick: ($event) => $setup.emit("edit", item)
          }, {
            extra: withCtx(() => {
              var _a;
              return [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_8$2, toDisplayString(_ctx.$t("labels.notifyVia")) + " : " + toDisplayString((_a = item == null ? void 0 : item.notification) == null ? void 0 : _a.type), 1),
                  createBaseVNode("div", _hoisted_9$2, [
                    createVNode(_component_MdiDeleteOutline, {
                      class: "text-xl nc-hook-delete-icon",
                      onClick: withModifiers(($event) => $setup.deleteHook(item, index), ["stop"])
                    }, null, 8, ["onClick"])
                  ])
                ])
              ];
            }),
            default: withCtx(() => [
              createVNode(_component_a_list_item_meta, null, {
                description: withCtx(() => [
                  createBaseVNode("span", _hoisted_5$7, toDisplayString(item.event) + " " + toDisplayString(item.operation), 1)
                ]),
                title: withCtx(() => [
                  createBaseVNode("span", _hoisted_6$6, toDisplayString(item.title), 1)
                ]),
                avatar: withCtx(() => [
                  createBaseVNode("div", _hoisted_7$3, [
                    createVNode(_component_MdiHook, { class: "text-xl" })
                  ])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        _: 1
      }, 8, ["data-source"])
    ])) : (openBlock(), createElementBlock("div", _hoisted_10$1, _hoisted_12$1))
  ]);
}
var __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    expose();
    const props = __props;
    const editOrAdd = ref(false);
    const webhookEditorRef = ref();
    const vModel = useVModel(props, "modelValue", emits);
    async function editHook(hook) {
      editOrAdd.value = true;
      nextTick(async () => {
        webhookEditorRef.value.setHook(hook);
        await webhookEditorRef.value.onEventChange();
      });
    }
    const __returned__ = { props, emits, editOrAdd, webhookEditorRef, vModel, editHook };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$m = /* @__PURE__ */ createTextVNode(" \u{1F680} We are Hiring! \u{1F680} ");
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_WebhookEditor = __nuxt_component_0$2;
  const _component_WebhookList = __nuxt_component_1$2;
  const _component_a_layout_content = LayoutContent;
  const _component_a_button = Button;
  const _component_a_layout_footer = LayoutFooter;
  const _component_a_layout = __unplugin_components_2$3;
  const _component_a_drawer = __unplugin_components_4$1;
  const _directive_t = resolveDirective("t");
  return openBlock(), createBlock(_component_a_drawer, {
    visible: $setup.vModel,
    "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => $setup.vModel = $event),
    closable: false,
    placement: "right",
    width: "700px",
    "body-style": { background: "rgba(67, 81, 232, 0.05)", padding: "0px 0px", overflow: "hidden" },
    onKeydown: _cache[3] || (_cache[3] = withKeys(($event) => $setup.vModel = false, ["esc"]))
  }, {
    default: withCtx(() => [
      createVNode(_component_a_layout, { class: "" }, {
        default: withCtx(() => [
          createVNode(_component_a_layout_content, { class: "px-10 py-5 scrollbar-thin-primary" }, {
            default: withCtx(() => [
              $setup.editOrAdd ? (openBlock(), createBlock(_component_WebhookEditor, {
                key: 0,
                ref: "webhookEditorRef",
                onBackToList: _cache[0] || (_cache[0] = ($event) => $setup.editOrAdd = false)
              }, null, 512)) : (openBlock(), createBlock(_component_WebhookList, {
                key: 1,
                onEdit: $setup.editHook,
                onAdd: _cache[1] || (_cache[1] = ($event) => $setup.editOrAdd = true)
              }))
            ]),
            _: 1
          }),
          createVNode(_component_a_layout_footer, { class: "!bg-white flex" }, {
            default: withCtx(() => [
              withDirectives((openBlock(), createBlock(_component_a_button, {
                class: "mx-auto mb-4",
                href: "https://angel.co/company/nocodb",
                target: "_blank",
                size: "large"
              }, {
                default: withCtx(() => [
                  _hoisted_1$m
                ]),
                _: 1
              })), [
                [_directive_t, ["e:hiring"]]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["visible", "body-style"]);
}
var __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const _hoisted_1$l = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$i = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$i
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$f);
}
var MdiVisibilityOnIcon = { name: "mdi-visibility", render: render$7 };
const _hoisted_1$k = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$h = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$h
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_3$e);
}
var MdiVisibilityOffIcon = { name: "mdi-visibility-off", render: render$6 };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "SharedViewList",
  setup(__props, { expose }) {
    expose();
    const { $api, meta } = useSmartsheetStoreOrThrow();
    const { copy } = useClipboard();
    const { dashboardUrl } = useDashboard();
    const sharedViewList = ref();
    const loadSharedViewsList = async () => {
      var _a;
      const list = await $api.dbViewShare.list((_a = meta.value) == null ? void 0 : _a.id);
      console.log(unref(sharedViewList));
      console.log(list);
      sharedViewList.value = list;
    };
    onMounted(loadSharedViewsList);
    const sharedViewUrl = (view) => {
      let viewType;
      switch (view.type) {
        case ViewTypes.FORM:
          viewType = "form";
          break;
        case ViewTypes.KANBAN:
          viewType = "kanban";
          break;
        default:
          viewType = "view";
      }
      return `/nc/${viewType}/${view.uuid}`;
    };
    const renderAllowCSVDownload = (view) => {
      if (view.type === ViewTypes.GRID) {
        view.meta = view.meta && typeof view.meta === "string" ? JSON.parse(view.meta) : view.meta;
        return view.meta.allowCSVDownload ? "\u2714\uFE0F" : "\u274C";
      } else {
        return "N/A";
      }
    };
    const copyLink = (view) => {
      copy(`${dashboardUrl == null ? void 0 : dashboardUrl.value}/${sharedViewUrl(view)}`);
      message.success("Copied to clipboard");
    };
    const deleteLink = async (id) => {
      try {
        await $api.dbViewShare.delete(id);
        message.success("Deleted shared view successfully");
        await loadSharedViewsList();
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    };
    const __returned__ = { $api, meta, copy, dashboardUrl, sharedViewList, loadSharedViewsList, sharedViewUrl, renderAllowCSVDownload, copyLink, deleteLink, MdiVisibilityOnIcon, MdiVisibilityOffIcon, MdiCopyIcon: __unplugin_components_3$4, MdiDeleteIcon: __unplugin_components_3$1 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$j = { class: "w-full" };
const _hoisted_2$g = ["title"];
const _hoisted_3$d = { class: "flex items-center items-center gap-1" };
const _hoisted_4$7 = { class: "h-min" };
const _hoisted_5$6 = {
  key: 0,
  class: "text-center"
};
const _hoisted_6$5 = ["title"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_table_column = __unplugin_components_10$2;
  const _component_nuxt_link = __nuxt_component_1$4;
  const _component_a_table = __unplugin_components_13$3;
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    createVNode(_component_a_table, {
      class: "",
      size: "small",
      "data-source": $setup.sharedViewList,
      pagination: { position: ["bottomCenter"] }
    }, {
      default: withCtx(() => [
        createVNode(_component_a_table_column, {
          key: "title",
          title: _ctx.$t("labels.viewName"),
          "data-index": "title"
        }, {
          default: withCtx(({ text }) => [
            createBaseVNode("div", {
              class: "text-xs",
              title: text
            }, toDisplayString(text), 9, _hoisted_2$g)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_component_a_table_column, {
          key: "title",
          title: _ctx.$t("labels.viewLink"),
          "data-index": "title"
        }, {
          default: withCtx(({ record }) => [
            createVNode(_component_nuxt_link, {
              to: $setup.sharedViewUrl(record),
              class: "text-xs"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(`${$setup.dashboardUrl}/${$setup.sharedViewUrl(record)}`), 1)
              ]),
              _: 2
            }, 1032, ["to"])
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_component_a_table_column, {
          key: "password",
          title: _ctx.$t("labels.password"),
          "data-index": "title"
        }, {
          default: withCtx(({ record }) => [
            createBaseVNode("div", _hoisted_3$d, [
              record.password ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("span", _hoisted_4$7, toDisplayString(record.showPassword ? record.password : "***************************"), 1),
                (openBlock(), createBlock(resolveDynamicComponent(record.showPassword ? $setup.MdiVisibilityOffIcon : $setup.MdiVisibilityOnIcon), {
                  onClick: ($event) => record.showPassword = !record.showPassword
                }, null, 8, ["onClick"]))
              ], 64)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_component_a_table_column, {
          key: "meta",
          title: "Download allowed",
          "data-index": "title"
        }, {
          default: withCtx(({ record }) => [
            "meta" in record ? (openBlock(), createElementBlock("div", _hoisted_5$6, toDisplayString($setup.renderAllowCSVDownload(record)), 1)) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_a_table_column, {
          key: "id",
          title: _ctx.$t("labels.actions"),
          "data-index": "title"
        }, {
          default: withCtx(({ record }) => [
            createBaseVNode("div", {
              class: "text-sm flex gap-2",
              title: _ctx.text
            }, [
              createVNode($setup["MdiCopyIcon"], {
                class: "cursor-pointer",
                onClick: ($event) => $setup.copyLink(record)
              }, null, 8, ["onClick"]),
              createVNode($setup["MdiDeleteIcon"], {
                class: "cursor-pointer",
                onClick: ($event) => $setup.deleteLink(record.id)
              }, null, 8, ["onClick"])
            ], 8, _hoisted_6$5)
          ]),
          _: 1
        }, 8, ["title"])
      ]),
      _: 1
    }, 8, ["data-source"])
  ]);
}
var __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__scopeId", "data-v-7c3a5550"]]);
const _hoisted_1$i = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M3 5v14h17V5H3m4 2v2H5V7h2m-2 6v-2h2v2H5m0 2h2v2H5v-2m13 2H9v-2h9v2m0-4H9v-2h9v2m0-4H9V7h9v2Z"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$f
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$c);
}
var __unplugin_components_9 = { name: "mdi-view-list-outline", render: render$5 };
const _hoisted_1$h = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$e = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M9 10v6h6v-6h4l-7-7l-7 7h4m3-4.2L14.2 8H13v6h-2V8H9.8L12 5.8M19 18H5v2h14v-2Z"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$e
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$b);
}
var __unplugin_components_8 = { name: "mdi-upload-outline", render: render$4 };
const _hoisted_1$g = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$d = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M9 16v-6H5l7-7l7 7h-4v6H9m-4 4v-2h14v2H5Z"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$d
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$a);
}
var __unplugin_components_7 = { name: "mdi-upload", render: render$3 };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ViewActions",
  setup(__props, { expose }) {
    expose();
    const sharedViewListDlg = ref(false);
    const isPublicView = inject(IsPublicInj, ref(false));
    const isView = false;
    const { $api, $e } = useNuxtApp();
    const selectedView = inject(ActiveViewInj);
    const isLocked = inject(IsLockedInj);
    const showWebhookDrawer = ref(false);
    const quickImportDialog = ref(false);
    const { isUIAllowed } = useUIPermission();
    const Icon = computed(() => {
      var _a;
      switch ((_a = selectedView == null ? void 0 : selectedView.value) == null ? void 0 : _a.lock_type) {
        case LockType.Personal:
          return __unplugin_components_13$1;
        case LockType.Locked:
          return MdiLockOutlineIcon;
        case LockType.Collaborative:
        default:
          return MdiAccountGroup;
      }
    });
    async function changeLockType(type) {
      $e("a:grid:lockmenu", { lockType: type });
      if (!(selectedView == null ? void 0 : selectedView.value))
        return;
      if (type === "personal") {
        return message.info("Coming soon");
      }
      try {
        ;
        selectedView.value.lock_type = type;
        $api.dbView.update(selectedView.value.id, {
          lock_type: type
        });
        message.success(`Successfully Switched to ${type} view`);
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    }
    const __returned__ = { sharedViewListDlg, isPublicView, isView, $api, $e, selectedView, isLocked, showWebhookDrawer, quickImportDialog, isUIAllowed, Icon, changeLockType, LockType, viewIcons };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId$4 = (n) => (pushScopeId("data-v-69d6aade"), n = n(), popScopeId(), n);
const _hoisted_1$f = { class: "flex gap-2 items-center" };
const _hoisted_2$c = { class: "!text-sm font-weight-normal" };
const _hoisted_3$9 = { class: "nc-project-menu-item group px-0 !py-0" };
const _hoisted_4$6 = { class: "nc-project-menu-item group" };
const _hoisted_5$5 = /* @__PURE__ */ createTextVNode(" Download ");
const _hoisted_6$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_7$2 = { class: "nc-project-menu-item group" };
const _hoisted_8$1 = /* @__PURE__ */ createTextVNode(" Upload ");
const _hoisted_9$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiMenuDown = MdiMenuDown;
  const _component_a_button = Button;
  const _component_SmartsheetToolbarLockType = __nuxt_component_0$5;
  const _component_MaterialSymbolsChevronRightRounded = __unplugin_components_10$3;
  const _component_a_menu_item = __unplugin_components_0$5;
  const _component_a_sub_menu = __unplugin_components_11$1;
  const _component_a_menu_divider = __unplugin_components_5;
  const _component_MdiDownload = __unplugin_components_4$2;
  const _component_SmartsheetToolbarExportSubActions = __nuxt_component_0$4;
  const _component_MdiUpload = __unplugin_components_7;
  const _component_MdiUploadOutline = __unplugin_components_8;
  const _component_MdiViewListOutline = __unplugin_components_9;
  const _component_MdiHook = __unplugin_components_10$1;
  const _component_a_menu_item_group = __unplugin_components_18$1;
  const _component_a_menu = Menu;
  const _component_a_dropdown = Dropdown;
  const _component_DlgQuickImport = DlgQuickImport;
  const _component_WebhookDrawer = __nuxt_component_3$1;
  const _component_SmartsheetToolbarSharedViewList = __nuxt_component_4$1;
  const _component_a_modal = Modal;
  const _directive_t = resolveDirective("t");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_a_dropdown, { trigger: ["click"] }, {
      overlay: withCtx(() => [
        createVNode(_component_a_menu, { class: "ml-6 !text-sm !px-0 !py-2 !rounded" }, {
          default: withCtx(() => [
            createVNode(_component_a_menu_item_group, null, {
              default: withCtx(() => [
                $setup.isUIAllowed("view-type") ? (openBlock(), createBlock(_component_a_sub_menu, {
                  key: "lock-type",
                  class: "scrollbar-thin-dull min-w-50 max-h-90vh overflow-auto !py-0"
                }, {
                  title: withCtx(() => {
                    var _a;
                    return [
                      withDirectives((openBlock(), createElementBlock("div", _hoisted_3$9, [
                        createVNode(_component_SmartsheetToolbarLockType, {
                          "hide-tick": "",
                          type: ((_a = $setup.selectedView) == null ? void 0 : _a.lock_type) || $setup.LockType.Collaborative
                        }, null, 8, ["type"]),
                        createVNode(_component_MaterialSymbolsChevronRightRounded, { class: "transform group-hover:scale-115 group-hover:text-accent text-xl text-gray-400" })
                      ])), [
                        [_directive_t, ["c:navdraw:preview-as"]]
                      ])
                    ];
                  }),
                  expandIcon: withCtx(() => []),
                  default: withCtx(() => [
                    createVNode(_component_a_menu_item, {
                      onClick: _cache[0] || (_cache[0] = ($event) => $setup.changeLockType($setup.LockType.Collaborative))
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SmartsheetToolbarLockType, {
                          type: $setup.LockType.Collaborative
                        }, null, 8, ["type"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_menu_item, {
                      onClick: _cache[1] || (_cache[1] = ($event) => $setup.changeLockType($setup.LockType.Locked))
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SmartsheetToolbarLockType, {
                          type: $setup.LockType.Locked
                        }, null, 8, ["type"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_menu_item, {
                      onClick: _cache[2] || (_cache[2] = ($event) => $setup.changeLockType($setup.LockType.Personal))
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SmartsheetToolbarLockType, {
                          type: $setup.LockType.Personal
                        }, null, 8, ["type"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_a_menu_divider),
                createVNode(_component_a_sub_menu, { key: "download" }, {
                  title: withCtx(() => [
                    withDirectives((openBlock(), createElementBlock("div", _hoisted_4$6, [
                      createVNode(_component_MdiDownload, { class: "group-hover:text-accent text-gray-500" }),
                      _hoisted_5$5,
                      _hoisted_6$4,
                      createVNode(_component_MaterialSymbolsChevronRightRounded, { class: "transform group-hover:scale-115 group-hover:text-accent text-xl text-gray-400" })
                    ])), [
                      [_directive_t, ["c:navdraw:preview-as"]]
                    ])
                  ]),
                  expandIcon: withCtx(() => []),
                  default: withCtx(() => [
                    createVNode(_component_SmartsheetToolbarExportSubActions)
                  ]),
                  _: 1
                }),
                $setup.isUIAllowed("csvImport") && !$setup.isView && !$setup.isPublicView ? (openBlock(), createBlock(_component_a_sub_menu, { key: "upload" }, {
                  title: withCtx(() => [
                    withDirectives((openBlock(), createElementBlock("div", _hoisted_7$2, [
                      createVNode(_component_MdiUpload, { class: "group-hover:text-accent text-gray-500" }),
                      _hoisted_8$1,
                      _hoisted_9$1,
                      createVNode(_component_MaterialSymbolsChevronRightRounded, { class: "transform group-hover:scale-115 group-hover:text-accent text-xl text-gray-400" })
                    ])), [
                      [_directive_t, ["c:navdraw:preview-as"]]
                    ])
                  ]),
                  expandIcon: withCtx(() => []),
                  default: withCtx(() => [
                    createVNode(_component_a_menu_item, null, {
                      default: withCtx(() => [
                        $setup.isUIAllowed("csvImport") && !$setup.isView && !$setup.isPublicView ? withDirectives((openBlock(), createElementBlock("div", {
                          key: 0,
                          class: normalizeClass(["nc-project-menu-item", { disabled: $setup.isLocked }]),
                          onClick: _cache[3] || (_cache[3] = ($event) => !$setup.isLocked ? $setup.quickImportDialog = true : {})
                        }, [
                          createVNode(_component_MdiUploadOutline, { class: "text-gray-500" }),
                          createTextVNode(toDisplayString(_ctx.$t("activity.uploadCSV")), 1)
                        ], 2)), [
                          [_directive_t, ["a:actions:upload-csv"]]
                        ]) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_a_menu_divider),
                createVNode(_component_a_menu_item, null, {
                  default: withCtx(() => [
                    $setup.isUIAllowed("SharedViewList") && !$setup.isView && !$setup.isPublicView ? withDirectives((openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "py-2 flex gap-2 items-center",
                      onClick: _cache[4] || (_cache[4] = ($event) => $setup.sharedViewListDlg = true)
                    }, [
                      createVNode(_component_MdiViewListOutline, { class: "text-gray-500" }),
                      createTextVNode(toDisplayString(_ctx.$t("activity.listSharedView")), 1)
                    ])), [
                      [_directive_t, ["a:actions:shared-view-list"]]
                    ]) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_a_menu_item, null, {
                  default: withCtx(() => [
                    $setup.isUIAllowed("webhook") && !$setup.isView && !$setup.isPublicView ? withDirectives((openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "py-2 flex gap-2 items-center",
                      onClick: _cache[5] || (_cache[5] = ($event) => $setup.showWebhookDrawer = true)
                    }, [
                      createVNode(_component_MdiHook, { class: "text-gray-500" }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("objects.webhooks")), 1)
                    ])), [
                      [_directive_t, ["c:actions:webhook"]]
                    ]) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: withCtx(() => [
        withDirectives((openBlock(), createBlock(_component_a_button, { class: "nc-actions-menu-btn nc-toolbar-btn" }, {
          default: withCtx(() => {
            var _a, _b, _c;
            return [
              createBaseVNode("div", _hoisted_1$f, [
                (openBlock(), createBlock(resolveDynamicComponent($setup.viewIcons[(_a = $setup.selectedView) == null ? void 0 : _a.type].icon), {
                  class: "nc-view-icon group-hover:hidden",
                  style: normalizeStyle({ color: $setup.viewIcons[(_b = $setup.selectedView) == null ? void 0 : _b.type].color })
                }, null, 8, ["style"])),
                createBaseVNode("span", _hoisted_2$c, toDisplayString((_c = $setup.selectedView) == null ? void 0 : _c.title), 1),
                (openBlock(), createBlock(resolveDynamicComponent($setup.Icon), { class: "text-gray-500" })),
                createVNode(_component_MdiMenuDown, { class: "text-grey" })
              ])
            ];
          }),
          _: 1
        })), [
          [_directive_t, ["c:actions"]]
        ])
      ]),
      _: 1
    }),
    $setup.quickImportDialog ? (openBlock(), createBlock(_component_DlgQuickImport, {
      key: 0,
      modelValue: $setup.quickImportDialog,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.quickImportDialog = $event),
      "import-type": "csv",
      "import-only": true
    }, null, 8, ["modelValue"])) : createCommentVNode("", true),
    $setup.showWebhookDrawer ? (openBlock(), createBlock(_component_WebhookDrawer, {
      key: 1,
      modelValue: $setup.showWebhookDrawer,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.showWebhookDrawer = $event)
    }, null, 8, ["modelValue"])) : createCommentVNode("", true),
    createVNode(_component_a_modal, {
      visible: $setup.sharedViewListDlg,
      "onUpdate:visible": _cache[8] || (_cache[8] = ($event) => $setup.sharedViewListDlg = $event),
      title: "Shared view list",
      width: "max(900px,60vw)",
      footer: null
    }, {
      default: withCtx(() => [
        $setup.sharedViewListDlg ? (openBlock(), createBlock(_component_SmartsheetToolbarSharedViewList, { key: 0 })) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["visible"])
  ]);
}
var __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__scopeId", "data-v-69d6aade"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ViewInfo",
  setup(__props, { expose }) {
    expose();
    const selectedView = inject(ActiveViewInj);
    const __returned__ = { selectedView, viewIcons };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$e = { class: "flex gap-2 items-center ml-2 mr-2 pr-4 pb-1 py-0.5 border-r-1 border-gray-100" };
const _hoisted_2$b = { class: "!text-sm font-medium max-w-36 overflow-ellipsis overflow-hidden whitespace-nowrap" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  return openBlock(), createElementBlock("div", _hoisted_1$e, [
    ((_a = $setup.selectedView) == null ? void 0 : _a.type) ? (openBlock(), createBlock(resolveDynamicComponent($setup.viewIcons[(_b = $setup.selectedView) == null ? void 0 : _b.type].icon), {
      key: 0,
      class: "nc-view-icon group-hover:hidden",
      style: normalizeStyle({ color: $setup.viewIcons[(_c = $setup.selectedView) == null ? void 0 : _c.type].color })
    }, null, 8, ["style"])) : createCommentVNode("", true),
    createBaseVNode("span", _hoisted_2$b, toDisplayString((_d = $setup.selectedView) == null ? void 0 : _d.title), 1)
  ]);
}
var __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const _hoisted_1$d = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$a
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$8);
}
var __unplugin_components_10 = { name: "mdi-eye-off-outline", render: render$2 };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "FieldsMenu",
  setup(__props, { expose }) {
    expose();
    const meta = inject(MetaInj);
    const activeView = inject(ActiveViewInj);
    const reloadDataHook = inject(ReloadViewDataHookInj);
    const rootFields = inject(FieldsInj);
    const isLocked = inject(IsLockedInj, ref(false));
    const isPublic = inject(IsPublicInj, ref(false));
    const { $e } = useNuxtApp();
    const {
      showSystemFields,
      sortedAndFilteredFields,
      fields,
      loadViewColumns,
      filteredFieldList,
      filterQuery,
      showAll,
      hideAll,
      saveOrUpdate,
      metaColumnById
    } = useViewColumns(activeView, meta, () => reloadDataHook.trigger());
    watch(() => {
      var _a;
      return (_a = activeView.value) == null ? void 0 : _a.id;
    }, async (newVal, oldVal) => {
      if (newVal !== oldVal && meta.value) {
        await loadViewColumns();
      }
    }, { immediate: true });
    watch(sortedAndFilteredFields, (v) => {
      if (rootFields)
        rootFields.value = v || [];
    }, { immediate: true });
    const isAnyFieldHidden = computed(() => {
      var _a;
      return (_a = filteredFieldList.value) == null ? void 0 : _a.some((field) => !field.show);
    });
    const onMove = (event) => {
      if (!fields.value)
        return;
      if (fields.value.length < 2)
        return;
      fields.value.map((field, index) => {
        field.order = index + 1;
        return field;
      });
      saveOrUpdate(fields.value[event.moved.newIndex], event.moved.newIndex);
      $e("a:fields:reorder");
    };
    const getIcon = (c) => h(isVirtualCol(c) ? __nuxt_component_0$6 : __nuxt_component_0$7, {
      columnMeta: c
    });
    const __returned__ = { meta, activeView, reloadDataHook, rootFields, isLocked, isPublic, $e, showSystemFields, sortedAndFilteredFields, fields, loadViewColumns, filteredFieldList, filterQuery, showAll, hideAll, saveOrUpdate, metaColumnById, isAnyFieldHidden, onMove, getIcon, Draggable };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId$3 = (n) => (pushScopeId("data-v-7d56844f"), n = n(), popScopeId(), n);
const _hoisted_1$c = { class: "flex items-center gap-1" };
const _hoisted_2$9 = { class: "text-capitalize !text-sm font-weight-normal" };
const _hoisted_3$7 = { class: "nc-fields-list py-1" };
const _hoisted_4$5 = { class: "flex items-center" };
const _hoisted_5$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_6$3 = { class: "text-xs" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiEyeOffOutline = __unplugin_components_10;
  const _component_MdiMenuDown = MdiMenuDown;
  const _component_a_button = Button;
  const _component_a_input = Input;
  const _component_a_checkbox = Checkbox;
  const _component_MdiDrag = __unplugin_components_0$6;
  const _component_a_divider = __unplugin_components_2$1;
  const _component_a_dropdown = Dropdown;
  const _directive_t = resolveDirective("t");
  return openBlock(), createBlock(_component_a_dropdown, { trigger: ["click"] }, {
    overlay: withCtx(() => [
      createBaseVNode("div", {
        class: "p-3 min-w-[280px] bg-gray-50 shadow-lg nc-table-toolbar-menu max-h-[max(80vh,500px)] overflow-auto !border",
        onClick: _cache[10] || (_cache[10] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createBaseVNode("div", {
          class: "p-1",
          onClick: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createVNode(_component_a_input, {
            value: $setup.filterQuery,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.filterQuery = $event),
            size: "small",
            placeholder: _ctx.$t("placeholder.searchFields")
          }, null, 8, ["value", "placeholder"])
        ]),
        createBaseVNode("div", _hoisted_3$7, [
          createVNode($setup["Draggable"], {
            modelValue: $setup.fields,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.fields = $event),
            "item-key": "id",
            onChange: _cache[4] || (_cache[4] = ($event) => $setup.onMove($event))
          }, {
            item: withCtx(({ element: field, index }) => [
              withDirectives((openBlock(), createElementBlock("div", {
                key: field.id,
                class: "px-2 py-1 flex items-center",
                onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                }, ["stop"]))
              }, [
                createVNode(_component_a_checkbox, {
                  checked: field.show,
                  "onUpdate:checked": ($event) => field.show = $event,
                  class: "shrink",
                  onChange: ($event) => $setup.saveOrUpdate(field, index)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_4$5, [
                      (openBlock(), createBlock(resolveDynamicComponent($setup.getIcon($setup.metaColumnById[field.fk_column_id])))),
                      createBaseVNode("span", null, toDisplayString(field.title), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["checked", "onUpdate:checked", "onChange"]),
                _hoisted_5$4,
                createVNode(_component_MdiDrag, { class: "cursor-move" })
              ])), [
                [vShow, $setup.filteredFieldList.includes(field)]
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        createVNode(_component_a_divider, { class: "!my-2" }),
        !$setup.isPublic ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "p-2 py-1 flex",
          onClick: _cache[6] || (_cache[6] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createVNode(_component_a_checkbox, {
            checked: $setup.showSystemFields,
            "onUpdate:checked": _cache[5] || (_cache[5] = ($event) => $setup.showSystemFields = $event),
            class: "!items-center"
          }, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_6$3, toDisplayString(_ctx.$t("activity.showSystemFields")), 1)
            ]),
            _: 1
          }, 8, ["checked"])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "p-2 flex gap-2",
          onClick: _cache[9] || (_cache[9] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createVNode(_component_a_button, {
            size: "small",
            class: "!text-xs text-gray-500 text-capitalize",
            onClick: _cache[7] || (_cache[7] = withModifiers(($event) => $setup.showAll(), ["stop"]))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("general.showAll")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            size: "small",
            class: "!text-xs text-gray-500 text-capitalize",
            onClick: _cache[8] || (_cache[8] = withModifiers(($event) => $setup.hideAll(), ["stop"]))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("general.hideAll")), 1)
            ]),
            _: 1
          })
        ])
      ])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass({ "nc-badge nc-active-btn": $setup.isAnyFieldHidden })
      }, [
        withDirectives((openBlock(), createBlock(_component_a_button, {
          class: "nc-fields-menu-btn nc-toolbar-btn",
          disabled: $setup.isLocked
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$c, [
              createVNode(_component_MdiEyeOffOutline),
              createBaseVNode("span", _hoisted_2$9, toDisplayString(_ctx.$t("objects.fields")), 1),
              createVNode(_component_MdiMenuDown, { class: "text-grey" })
            ])
          ]),
          _: 1
        }, 8, ["disabled"])), [
          [_directive_t, ["c:fields"]]
        ])
      ], 2)
    ]),
    _: 1
  });
}
var __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-7d56844f"]]);
const _hoisted_1$b = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75v9.13M7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5H7.04Z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$8
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$6);
}
var __unplugin_components_0$1 = { name: "mdi-filter-outline", render: render$1 };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ColumnFilterMenu",
  setup(__props, { expose }) {
    expose();
    const isLocked = inject(IsLockedInj, ref(false));
    const activeView = inject(ActiveViewInj);
    const isPublic = inject(IsPublicInj, ref(false));
    const { filterAutoSave } = useGlobal();
    const filterComp = ref();
    const { nestedFilters } = useSmartsheetStoreOrThrow();
    const { filters, loadFilters } = useViewFilters(activeView, void 0, computed(() => true), () => false, nestedFilters.value, true);
    const filtersLength = ref(0);
    watchEffect(async () => {
      if (activeView == null ? void 0 : activeView.value) {
        await loadFilters();
        filtersLength.value = filters.value.length || 0;
      }
    });
    const applyChanges = async () => {
      var _a;
      return await ((_a = filterComp.value) == null ? void 0 : _a.applyChanges());
    };
    const __returned__ = { isLocked, activeView, isPublic, filterAutoSave, filterComp, nestedFilters, filters, loadFilters, filtersLength, applyChanges };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$a = { class: "flex items-center gap-1" };
const _hoisted_2$7 = { class: "text-capitalize !text-sm font-weight-normal" };
const _hoisted_3$5 = { class: "text-grey text-xs" };
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_5$3 = /* @__PURE__ */ createTextVNode(" Apply changes ");
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiFilterOutline = __unplugin_components_0$1;
  const _component_MdiMenuDown = MdiMenuDown;
  const _component_a_button = Button;
  const _component_a_checkbox = Checkbox;
  const _component_SmartsheetToolbarColumnFilter = __nuxt_component_0$3;
  const _component_a_dropdown = Dropdown;
  const _directive_t = resolveDirective("t");
  return openBlock(), createBlock(_component_a_dropdown, { trigger: ["click"] }, {
    overlay: withCtx(() => [
      createVNode(_component_SmartsheetToolbarColumnFilter, {
        ref: "filterComp",
        class: "nc-table-toolbar-menu shadow-lg",
        "auto-save": $setup.filterAutoSave,
        "onUpdate:filtersLength": _cache[2] || (_cache[2] = ($event) => $setup.filtersLength = $event)
      }, {
        default: withCtx(() => [
          !$setup.isPublic ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "flex items-end mt-2 min-h-[30px]",
            onClick: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createVNode(_component_a_checkbox, {
              id: "col-filter-checkbox",
              checked: $setup.filterAutoSave,
              "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => $setup.filterAutoSave = $event),
              class: "col-filter-checkbox",
              "hide-details": "",
              dense: ""
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_3$5, toDisplayString(_ctx.$t("msg.info.filterAutoApply")), 1)
              ]),
              _: 1
            }, 8, ["checked"]),
            _hoisted_4$4,
            withDirectives(createVNode(_component_a_button, {
              size: "small",
              class: "text-xs ml-2",
              onClick: $setup.applyChanges
            }, {
              default: withCtx(() => [
                _hoisted_5$3
              ]),
              _: 1
            }, 512), [
              [vShow, !$setup.filterAutoSave]
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["auto-save"])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass({ "nc-badge nc-active-btn": $setup.filtersLength })
      }, [
        withDirectives((openBlock(), createBlock(_component_a_button, {
          class: "nc-filter-menu-btn nc-toolbar-btn txt-sm",
          disabled: $setup.isLocked
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$a, [
              createVNode(_component_MdiFilterOutline),
              createBaseVNode("span", _hoisted_2$7, toDisplayString(_ctx.$t("activity.filter")), 1),
              createVNode(_component_MdiMenuDown, { class: "text-grey" })
            ])
          ]),
          _: 1
        }, 8, ["disabled"])), [
          [_directive_t, ["c:filter"]]
        ])
      ], 2)
    ]),
    _: 1
  });
}
var __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const _hoisted_1$9 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m18 21l-4-4h3V7h-3l4-4l4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2Z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$6
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$4);
}
var __unplugin_components_0 = { name: "mdi-sort", render };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SortListMenu",
  setup(__props, { expose }) {
    expose();
    const meta = inject(MetaInj);
    const view = inject(ActiveViewInj);
    const isLocked = inject(IsLockedInj, ref(false));
    const reloadDataHook = inject(ReloadViewDataHookInj);
    const { sorts, saveOrUpdate, loadSorts, addSort, deleteSort } = useViewSorts(view, () => reloadDataHook == null ? void 0 : reloadDataHook.trigger());
    const columns = computed(() => {
      var _a;
      return ((_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) || [];
    });
    const columnByID = computed(() => columns.value.reduce((obj, col) => {
      obj[col.id] = col;
      return obj;
    }, {}));
    watch(() => {
      var _a;
      return (_a = view == null ? void 0 : view.value) == null ? void 0 : _a.id;
    }, () => {
      loadSorts();
    }, { immediate: true });
    const __returned__ = { meta, view, isLocked, reloadDataHook, sorts, saveOrUpdate, loadSorts, addSort, deleteSort, columns, columnByID, FieldListAutoCompleteDropdown, getSortDirectionOptions };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$8 = { class: "flex items-center gap-1" };
const _hoisted_2$5 = { class: "text-capitalize !text-sm font-weight-normal" };
const _hoisted_3$3 = { class: "bg-gray-50 p-6 shadow-lg menu-filter-dropdown min-w-[400px] max-h-[max(80vh,500px)] overflow-auto !border" };
const _hoisted_4$3 = { class: "flex gap-1 items-center" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiSort = __unplugin_components_0;
  const _component_MdiMenuDown = MdiMenuDown;
  const _component_a_button = Button;
  const _component_MdiCloseBox = __unplugin_components_3;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4;
  const _component_MdiPlus = MdiPlus;
  const _component_a_dropdown = Dropdown;
  const _directive_t = resolveDirective("t");
  return openBlock(), createBlock(_component_a_dropdown, {
    "offset-y": "",
    class: "",
    trigger: ["click"]
  }, {
    overlay: withCtx(() => {
      var _a;
      return [
        createBaseVNode("div", _hoisted_3$3, [
          ((_a = $setup.sorts) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "sort-grid mb-2",
            onClick: _cache[2] || (_cache[2] = withModifiers(() => {
            }, ["stop"]))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.sorts || [], (sort, i) => {
              return openBlock(), createElementBlock(Fragment, { key: i }, [
                createVNode(_component_MdiCloseBox, {
                  class: "nc-sort-item-remove-btn text-grey self-center",
                  small: "",
                  onClick: withModifiers(($event) => $setup.deleteSort(sort, i), ["stop"])
                }, null, 8, ["onClick"]),
                createVNode($setup["FieldListAutoCompleteDropdown"], {
                  modelValue: sort.fk_column_id,
                  "onUpdate:modelValue": [($event) => sort.fk_column_id = $event, ($event) => $setup.saveOrUpdate(sort, i)],
                  class: "caption nc-sort-field-select",
                  columns: $setup.columns,
                  "is-sort": "",
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                  }, ["stop"]))
                }, null, 8, ["modelValue", "onUpdate:modelValue", "columns"]),
                createVNode(_component_a_select, {
                  value: sort.direction,
                  "onUpdate:value": ($event) => sort.direction = $event,
                  class: "shrink grow-0 nc-sort-dir-select !text-xs",
                  label: _ctx.$t("labels.operation"),
                  onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["stop"])),
                  onSelect: ($event) => $setup.saveOrUpdate(sort, i)
                }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getSortDirectionOptions((_a2 = $setup.columnByID[sort.fk_column_id]) == null ? void 0 : _a2.uidt), (option, j) => {
                        return openBlock(), createBlock(_component_a_select_option, {
                          key: j,
                          value: option.value
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", null, toDisplayString(option.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ];
                  }),
                  _: 2
                }, 1032, ["value", "onUpdate:value", "label", "onSelect"])
              ], 64);
            }), 128))
          ])) : createCommentVNode("", true),
          createVNode(_component_a_button, {
            class: "text-capitalize mb-1 mt-4",
            type: "primary",
            ghost: "",
            onClick: withModifiers($setup.addSort, ["stop"])
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4$3, [
                createVNode(_component_MdiPlus),
                createTextVNode(toDisplayString(_ctx.$t("activity.addSort")), 1)
              ])
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ];
    }),
    default: withCtx(() => {
      var _a;
      return [
        createBaseVNode("div", {
          class: normalizeClass({ "nc-badge nc-active-btn": (_a = $setup.sorts) == null ? void 0 : _a.length })
        }, [
          withDirectives((openBlock(), createBlock(_component_a_button, {
            class: "nc-sort-menu-btn nc-toolbar-btn",
            disabled: $setup.isLocked
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$8, [
                createVNode(_component_MdiSort),
                createBaseVNode("span", _hoisted_2$5, toDisplayString(_ctx.$t("activity.sort")), 1),
                createVNode(_component_MdiMenuDown, { class: "text-grey" })
              ])
            ]),
            _: 1
          }, 8, ["disabled"])), [
            [_directive_t, ["c:sort"]]
          ])
        ], 2)
      ];
    }),
    _: 1
  });
}
var __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-433591dd"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ShareView",
  setup(__props, { expose }) {
    expose();
    const { view, $api } = useSmartsheetStoreOrThrow();
    const { copy } = useClipboard();
    const { $e } = useNuxtApp();
    const { dashboardUrl } = useDashboard();
    const { isUIAllowed } = useUIPermission();
    const { isSharedBase } = useProject();
    let showShareModel = ref(false);
    let passwordProtected = ref(false);
    const shared = ref();
    const allowCSVDownload = computed({
      get() {
        var _a, _b;
        return !!((_b = ((_a = shared.value) == null ? void 0 : _a.meta) && typeof shared.value.meta === "string" ? JSON.parse(shared.value.meta) : shared.value.meta) == null ? void 0 : _b.allowCSVDownload);
      },
      set(allow) {
        shared.value.meta = { allowCSVDownload: allow };
        saveAllowCSVDownload();
      }
    });
    const genShareLink = async () => {
      shared.value = await $api.dbViewShare.create(view.value.id);
      showShareModel.value = true;
    };
    const sharedViewUrl = computed(() => {
      if (!shared.value)
        return;
      let viewType;
      switch (shared.value.type) {
        case ViewTypes.FORM:
          viewType = "form";
          break;
        case ViewTypes.KANBAN:
          viewType = "kanban";
          break;
        default:
          viewType = "view";
      }
      return `${dashboardUrl == null ? void 0 : dashboardUrl.value}/nc/${viewType}/${shared.value.uuid}`;
    });
    async function saveAllowCSVDownload() {
      try {
        const meta = shared.value.meta && typeof shared.value.meta === "string" ? JSON.parse(shared.value.meta) : shared.value.meta;
        await $api.dbViewShare.update(shared.value.id, {
          meta
        });
        message.success("Successfully updated");
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      if (allowCSVDownload == null ? void 0 : allowCSVDownload.value) {
        $e("a:view:share:enable-csv-download");
      } else {
        $e("a:view:share:disable-csv-download");
      }
    }
    const saveShareLinkPassword = async () => {
      try {
        await $api.dbViewShare.update(shared.value.id, {
          password: shared.value.password
        });
        message.success("Successfully updated");
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      $e("a:view:share:enable-pwd");
    };
    const copyLink = () => {
      copy(sharedViewUrl == null ? void 0 : sharedViewUrl.value);
      message.success("Copied to clipboard");
    };
    watch(() => passwordProtected.value, (value) => {
      if (!value) {
        shared.value.password = "";
        saveShareLinkPassword();
      }
    });
    onMounted(() => {
      var _a, _b;
      if ((_b = (_a = shared.value) == null ? void 0 : _a.password) == null ? void 0 : _b.length)
        passwordProtected.value = true;
    });
    const __returned__ = { view, $api, copy, $e, dashboardUrl, isUIAllowed, isSharedBase, showShareModel, passwordProtected, shared, allowCSVDownload, genShareLink, sharedViewUrl, saveAllowCSVDownload, saveShareLinkPassword, copyLink, ViewTypes, MdiOpenInNewIcon, MdiCopyIcon: __unplugin_components_3$4 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = { class: "!text-sm font-weight-normal" };
const _hoisted_2$4 = { class: "share-link-box nc-share-link-box bg-primary-50" };
const _hoisted_3$2 = { class: "flex-1 h-min text-xs" };
const _hoisted_4$2 = ["href"];
const _hoisted_5$2 = { class: "mb-2" };
const _hoisted_6$2 = {
  key: 0,
  class: "flex gap-2 mt-2 mb-4"
};
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode("Allow Download ");
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = Button;
  const _component_a_checkbox = Checkbox;
  const _component_a_input = Input;
  const _component_a_collapse_panel = __unplugin_components_9$1;
  const _component_a_collapse = Collapse;
  const _component_a_modal = Modal;
  const _directive_t = resolveDirective("t");
  return openBlock(), createElementBlock("div", null, [
    $setup.isUIAllowed("share-view") && !$setup.isSharedBase ? withDirectives((openBlock(), createBlock(_component_a_button, {
      key: 0,
      outlined: "",
      class: "nc-btn-share-view nc-toolbar-btn"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          class: "flex items-center gap-1",
          onClick: $setup.genShareLink
        }, [
          createVNode($setup["MdiOpenInNewIcon"]),
          createBaseVNode("span", _hoisted_1$7, toDisplayString(_ctx.$t("activity.shareView")), 1)
        ])
      ]),
      _: 1
    })), [
      [_directive_t, ["c:view:share"]]
    ]) : createCommentVNode("", true),
    createVNode(_component_a_modal, {
      visible: $setup.showShareModel,
      "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => $setup.showShareModel = $event),
      size: "small",
      title: _ctx.$t("msg.info.privateLink"),
      footer: null,
      width: "min(100vw,640px)"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("div", _hoisted_3$2, toDisplayString($setup.sharedViewUrl), 1),
          withDirectives((openBlock(), createElementBlock("a", {
            href: $setup.sharedViewUrl,
            target: "_blank"
          }, [
            createVNode($setup["MdiOpenInNewIcon"], { class: "text-sm text-gray-500 mt-2" })
          ], 8, _hoisted_4$2)), [
            [_directive_t, ["c:view:share:open-url"]]
          ]),
          createVNode($setup["MdiCopyIcon"], {
            class: "text-gray-500 text-sm cursor-pointer",
            onClick: $setup.copyLink
          })
        ]),
        createVNode(_component_a_collapse, { ghost: "" }, {
          default: withCtx(() => [
            createVNode(_component_a_collapse_panel, {
              key: "1",
              header: "More Options"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_5$2, [
                  createVNode(_component_a_checkbox, {
                    checked: $setup.passwordProtected,
                    "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => $setup.passwordProtected = $event),
                    class: "!text-xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("msg.info.beforeEnablePwd")), 1)
                    ]),
                    _: 1
                  }, 8, ["checked"]),
                  $setup.passwordProtected ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
                    createVNode(_component_a_input, {
                      value: $setup.shared.password,
                      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.shared.password = $event),
                      size: "small",
                      class: "!text-xs max-w-[250px]",
                      type: "password",
                      placeholder: _ctx.$t("placeholder.password.enter")
                    }, null, 8, ["value", "placeholder"]),
                    createVNode(_component_a_button, {
                      size: "small",
                      class: "!text-xs",
                      onClick: $setup.saveShareLinkPassword
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("placeholder.password.save")), 1)
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  $setup.shared && $setup.shared.type === $setup.ViewTypes.GRID ? (openBlock(), createBlock(_component_a_checkbox, {
                    key: 0,
                    checked: $setup.allowCSVDownload,
                    "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => $setup.allowCSVDownload = $event),
                    class: "!text-xs"
                  }, {
                    default: withCtx(() => [
                      _hoisted_7$1
                    ]),
                    _: 1
                  }, 8, ["checked"])) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["visible", "title"])
  ]);
}
var __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-3923e928"]]);
const _sfc_main$8 = {};
const _hoisted_1$6 = { class: "flex gap-2 items-center" };
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("span", { class: "text-capitalize !text-sm font-weight-normal" }, "Download", -1);
function _sfc_render$8(_ctx, _cache) {
  const _component_MdiDownload = __unplugin_components_4$2;
  const _component_MdiMenuDown = MdiMenuDown;
  const _component_a_button = Button;
  const _component_SmartsheetToolbarExportSubActions = __nuxt_component_0$4;
  const _component_a_menu = Menu;
  const _component_a_dropdown = Dropdown;
  const _directive_t = resolveDirective("t");
  return openBlock(), createBlock(_component_a_dropdown, { trigger: ["click"] }, {
    overlay: withCtx(() => [
      createVNode(_component_a_menu, { class: "ml-6 !text-sm !px-0 !py-2 !rounded" }, {
        default: withCtx(() => [
          createVNode(_component_SmartsheetToolbarExportSubActions)
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      withDirectives((openBlock(), createBlock(_component_a_button, { class: "nc-actions-menu-btn nc-toolbar-btn" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$6, [
            createVNode(_component_MdiDownload, { class: "group-hover:text-accent text-gray-500" }),
            _hoisted_2$3,
            createVNode(_component_MdiMenuDown, { class: "text-grey" })
          ])
        ]),
        _: 1
      })), [
        [_directive_t, ["c:actions"]]
      ])
    ]),
    _: 1
  });
}
var __nuxt_component_6$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Reload",
  setup(__props, { expose }) {
    expose();
    const reloadHook = inject(ReloadViewDataHookInj);
    const onClick = () => reloadHook.trigger();
    const __returned__ = { reloadHook, onClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = { class: "group flex align-center" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiReload = __unplugin_components_0$7;
  const _component_a_tooltip = __unplugin_components_1$2;
  return openBlock(), createBlock(_component_a_tooltip, { placement: "bottom" }, {
    title: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.$t("general.reload")), 1)
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$5, [
        createVNode(_component_MdiReload, {
          class: "cursor-pointer text-gray-500 group-hover:text-primary",
          onClick: $setup.onClick
        })
      ])
    ]),
    _: 1
  });
}
var __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AddRow",
  setup(__props, { expose }) {
    expose();
    const isLocked = inject(IsLockedInj);
    const openNewRecordFormHook = inject(OpenNewRecordFormHookInj);
    const onClick = () => {
      if (!(isLocked == null ? void 0 : isLocked.value))
        openNewRecordFormHook.trigger();
    };
    const __returned__ = { isLocked, openNewRecordFormHook, onClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiPlusOutline = __unplugin_components_4$3;
  const _component_a_tooltip = __unplugin_components_1$2;
  return openBlock(), createBlock(_component_a_tooltip, { placement: "bottom" }, {
    title: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.$t("activity.addRow")), 1)
    ]),
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass([{ "group": !$setup.isLocked, "disabled-ring": $setup.isLocked }, "nc-add-row flex align-center"])
      }, [
        createVNode(_component_MdiPlusOutline, {
          class: normalizeClass({ "cursor-pointer text-gray-500 group-hover:text-primary": !$setup.isLocked, "disabled": $setup.isLocked }),
          onClick: $setup.onClick
        }, null, 8, ["class"])
      ], 2)
    ]),
    _: 1
  });
}
var __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SearchData",
  setup(__props, { expose }) {
    expose();
    const reloadData = inject(ReloadViewDataHookInj);
    const { search, meta } = useSmartsheetStoreOrThrow();
    const isDropdownOpen = ref(false);
    const searchDropdown = ref(null);
    onClickOutside(searchDropdown, () => isDropdownOpen.value = false);
    const columns = computed(() => {
      var _a, _b;
      return (_b = (_a = meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.map((c) => ({
        value: c.id,
        label: c.title
      }));
    });
    function onPressEnter() {
      reloadData.trigger();
    }
    const __returned__ = { reloadData, search, meta, isDropdownOpen, searchDropdown, columns, onPressEnter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = { class: "flex flex-row border-1 rounded-sm" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiMagnify = __unplugin_components_0$8;
  const _component_MdiMenuDown = MdiMenuDown;
  const _component_a_select = __unplugin_components_4;
  const _component_a_input = Input;
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", {
      ref: "searchDropdown",
      class: normalizeClass(["flex items-center relative bg-gray-50 px-2 cursor-pointer border-r-1", { "!bg-gray-100 ": $setup.isDropdownOpen }]),
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.isDropdownOpen = !$setup.isDropdownOpen)
    }, [
      createVNode(_component_MdiMagnify, { class: "text-grey" }),
      createVNode(_component_MdiMenuDown, { class: "text-grey" }),
      createVNode(_component_a_select, {
        value: $setup.search.field,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.search.field = $event),
        open: $setup.isDropdownOpen,
        size: "small",
        "dropdown-match-select-width": false,
        options: $setup.columns,
        "dropdown-class-name": "!py-0 !rounded",
        class: "!absolute top-0 left-0 w-full h-full z-10 !text-xs opacity-0"
      }, null, 8, ["value", "open", "options"])
    ], 2),
    createVNode(_component_a_input, {
      value: $setup.search.query,
      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.search.query = $event),
      size: "small",
      class: "max-w-[200px]",
      placeholder: "Filter query",
      bordered: false,
      onPressEnter: $setup.onPressEnter
    }, {
      addonBefore: withCtx(() => []),
      _: 1
    }, 8, ["value"])
  ]);
}
var __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ToggleDrawer",
  setup(__props, { expose }) {
    expose();
    const { isOpen, toggle } = useSidebar({ storageKey: "nc-right-sidebar" });
    const __returned__ = { isOpen, toggle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createTextVNode(" Views ");
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiMenu = __unplugin_components_0$9;
  const _component_a_button = Button;
  return openBlock(), createElementBlock("div", {
    class: normalizeClass({ "nc-active-btn": $setup.isOpen })
  }, [
    createVNode(_component_a_button, {
      size: "small",
      class: "nc-toggle-right-navbar",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.toggle(!$setup.isOpen))
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          class: normalizeClass(["flex items-center gap-1 text-xs", { "text-gray-500": !$setup.isOpen }])
        }, [
          createVNode(_component_MdiMenu, { class: "!text-xs" }),
          _hoisted_1$3
        ], 2)
      ]),
      _: 1
    })
  ], 2);
}
var ToggleDrawer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Toolbar",
  setup(__props, { expose }) {
    expose();
    const { isGrid, isForm, isGallery } = useSmartsheetStoreOrThrow();
    const isPublic = inject(IsPublicInj, ref(false));
    const { isUIAllowed } = useUIPermission();
    const { isOpen } = useSidebar();
    const __returned__ = { isGrid, isForm, isGallery, isPublic, isUIAllowed, isOpen, ToggleDrawer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId$2 = (n) => (pushScopeId("data-v-1b10af4e"), n = n(), popScopeId(), n);
const _hoisted_1$2 = {
  class: "nc-table-toolbar w-full py-1 flex gap-1 items-center h-[var(--toolbar-height)] px-2 border-b overflow-x-hidden",
  style: { "z-index": "7" }
};
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SmartsheetToolbarViewActions = __nuxt_component_0$1;
  const _component_SmartsheetToolbarViewInfo = __nuxt_component_1$1;
  const _component_SmartsheetToolbarFieldsMenu = __nuxt_component_2;
  const _component_SmartsheetToolbarColumnFilterMenu = __nuxt_component_3;
  const _component_SmartsheetToolbarSortListMenu = __nuxt_component_4;
  const _component_SmartsheetToolbarShareView = __nuxt_component_5$1;
  const _component_SmartsheetToolbarExport = __nuxt_component_6$1;
  const _component_SmartsheetToolbarReload = __nuxt_component_7;
  const _component_SmartsheetToolbarAddRow = __nuxt_component_8;
  const _component_SmartsheetToolbarSearchData = __nuxt_component_9;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    $setup.isGrid && !$setup.isPublic && $setup.isUIAllowed("dataInsert") ? (openBlock(), createBlock(_component_SmartsheetToolbarViewActions, {
      key: 0,
      "show-system-fields": false,
      class: "ml-1"
    })) : createCommentVNode("", true),
    !$setup.isUIAllowed("dataInsert") && !$setup.isPublic ? (openBlock(), createBlock(_component_SmartsheetToolbarViewInfo, { key: 1 })) : createCommentVNode("", true),
    $setup.isGrid || $setup.isGallery ? (openBlock(), createBlock(_component_SmartsheetToolbarFieldsMenu, {
      key: 2,
      "show-system-fields": false,
      class: "ml-1"
    })) : createCommentVNode("", true),
    $setup.isGrid || $setup.isGallery ? (openBlock(), createBlock(_component_SmartsheetToolbarColumnFilterMenu, { key: 3 })) : createCommentVNode("", true),
    $setup.isGrid || $setup.isGallery ? (openBlock(), createBlock(_component_SmartsheetToolbarSortListMenu, { key: 4 })) : createCommentVNode("", true),
    ($setup.isForm || $setup.isGrid) && !$setup.isPublic ? (openBlock(), createBlock(_component_SmartsheetToolbarShareView, { key: 5 })) : createCommentVNode("", true),
    !$setup.isUIAllowed("dataInsert") ? (openBlock(), createBlock(_component_SmartsheetToolbarExport, { key: 6 })) : createCommentVNode("", true),
    _hoisted_2$2,
    !$setup.isPublic && !$setup.isForm ? (openBlock(), createBlock(_component_SmartsheetToolbarReload, {
      key: 7,
      class: "mx-1"
    })) : createCommentVNode("", true),
    $setup.isUIAllowed("dataInsert") && !$setup.isPublic && !$setup.isForm ? (openBlock(), createBlock(_component_SmartsheetToolbarAddRow, {
      key: 8,
      class: "mx-1"
    })) : createCommentVNode("", true),
    ($setup.isGrid || $setup.isGallery) && !$setup.isPublic ? (openBlock(), createBlock(_component_SmartsheetToolbarSearchData, {
      key: 9,
      class: "shrink mr-2 ml-2"
    })) : createCommentVNode("", true),
    !$setup.isOpen && !$setup.isPublic ? (openBlock(), createBlock($setup["ToggleDrawer"], {
      key: 10,
      class: "mr-2"
    })) : createCommentVNode("", true)
  ]);
}
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-1b10af4e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  setup(__props, { expose }) {
    expose();
    const paginatedData = inject(PaginationDataInj);
    const changePage = inject(ChangePageInj);
    const count = computed(() => {
      var _a, _b;
      return (_b = (_a = paginatedData.value) == null ? void 0 : _a.totalRows) != null ? _b : Infinity;
    });
    const size = computed(() => {
      var _a, _b;
      return (_b = (_a = paginatedData.value) == null ? void 0 : _a.pageSize) != null ? _b : 25;
    });
    const page = computed({
      get: () => {
        var _a, _b;
        return (_b = (_a = paginatedData == null ? void 0 : paginatedData.value) == null ? void 0 : _a.page) != null ? _b : 1;
      },
      set: (p) => changePage == null ? void 0 : changePage(p)
    });
    const __returned__ = { paginatedData, changePage, count, size, page };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-b0c03872"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "flex items-center mb-1" };
const _hoisted_2$1 = {
  key: 0,
  class: "caption ml-5 text-gray-500"
};
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_4$1 = {
  key: 2,
  class: "mx-auto flex items-center mt-n1",
  style: { "max-width": "250px" }
};
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text-xs",
  style: { "white-space": "nowrap" }
}, " Change page:", -1));
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_pagination = __unplugin_components_5$1;
  const _component_MdiKeyboardReturn = __unplugin_components_3$5;
  const _component_a_input = Input;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    $setup.count !== null && $setup.count !== Infinity ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString($setup.count) + " record" + toDisplayString($setup.count !== 1 ? "s" : ""), 1)) : createCommentVNode("", true),
    _hoisted_3$1,
    $setup.count !== Infinity ? (openBlock(), createBlock(_component_a_pagination, {
      key: 1,
      current: $setup.page,
      "onUpdate:current": _cache[0] || (_cache[0] = ($event) => $setup.page = $event),
      size: "small",
      class: "!text-xs !m-1 nc-pagination",
      total: $setup.count,
      "page-size": $setup.size,
      "show-less-items": "",
      "show-size-changer": false
    }, null, 8, ["current", "total", "page-size"])) : (openBlock(), createElementBlock("div", _hoisted_4$1, [
      _hoisted_5$1,
      createVNode(_component_a_input, {
        value: $setup.page,
        size: "small",
        class: "ml-1 !text-xs",
        type: "number",
        onKeydown: _cache[2] || (_cache[2] = withKeys(($event) => $setup.changePage($setup.page), ["enter"]))
      }, {
        suffix: withCtx(() => [
          createVNode(_component_MdiKeyboardReturn, {
            class: "mt-1",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.changePage($setup.page))
          })
        ]),
        _: 1
      }, 8, ["value"])
    ])),
    _hoisted_6$1
  ]);
}
var __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-b0c03872"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Row",
  props: {
    row: null
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const currentRow = toRef(props, "row");
    const { meta } = useSmartsheetStoreOrThrow();
    const { isNew, state, syncLTARRefs } = useProvideSmartsheetRowStore(meta, currentRow);
    watch(isNew, async (nextVal, prevVal) => {
      if (prevVal && !nextVal) {
        await syncLTARRefs(currentRow.value.row);
        currentRow.value.row = { ...currentRow.value.row, ...state.value };
        currentRow.value.oldRow = { ...currentRow.value.row, ...state.value };
      }
    });
    const __returned__ = { props, currentRow, meta, isNew, state, syncLTARRefs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { state: $setup.state });
}
var __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Grid",
  setup(__props, { expose }) {
    const meta = inject(MetaInj);
    const view = inject(ActiveViewInj);
    const isPublicView = inject(IsPublicInj, ref(false));
    const fields = inject(FieldsInj, ref([]));
    const readOnly = inject(ReadonlyInj, false);
    const isLocked = inject(IsLockedInj, ref(false));
    const reloadViewDataHook = inject(ReloadViewDataHookInj, createEventHook());
    const openNewRecordFormHook = inject(OpenNewRecordFormHookInj, createEventHook());
    const { isUIAllowed } = useUIPermission();
    const isView = false;
    const selected = reactive({ row: null, col: null });
    let editEnabled = ref(false);
    const { xWhere, isPkAvail, cellRefs } = useSmartsheetStoreOrThrow();
    const addColumnDropdown = ref(false);
    const _contextMenu = ref(false);
    const contextMenu = computed({
      get: () => _contextMenu.value,
      set: (val) => {
        if (!readOnly) {
          _contextMenu.value = val;
        }
      }
    });
    const contextMenuTarget = ref(false);
    const expandedFormDlg = ref(false);
    const expandedFormRow = ref();
    const expandedFormRowState = ref();
    const visibleColLength = computed(() => {
      var _a;
      return (_a = fields.value) == null ? void 0 : _a.length;
    });
    const {
      loadData,
      paginationData,
      formattedData: data,
      updateOrSaveRow,
      changePage,
      addEmptyRow,
      deleteRow,
      deleteSelectedRows,
      selectedAllRecords,
      removeLastEmptyRow
    } = useViewData(meta, view, xWhere);
    const { loadGridViewColumns, updateWidth, resizingColWidth, resizingCol } = useGridViewColumnWidth(view);
    onMounted(loadGridViewColumns);
    provide(IsFormInj, ref(false));
    provide(IsGridInj, true);
    provide(PaginationDataInj, paginationData);
    provide(ChangePageInj, changePage);
    provide(ReadonlyInj, !isUIAllowed("xcDatatableEditable"));
    reloadViewDataHook == null ? void 0 : reloadViewDataHook.on(async () => {
      await loadData();
    });
    const expandForm = (row, state) => {
      expandedFormRow.value = row;
      expandedFormRowState.value = state;
      expandedFormDlg.value = true;
    };
    openNewRecordFormHook == null ? void 0 : openNewRecordFormHook.on(async () => {
      const newRow = await addEmptyRow();
      expandForm(newRow);
    });
    const selectCell = (row, col) => {
      selected.row = row;
      selected.col = col;
    };
    watch(() => {
      var _a;
      return (_a = view == null ? void 0 : view.value) == null ? void 0 : _a.id;
    }, async (n, o) => {
      if (n && o && n !== o) {
        await loadData();
      }
    }, { immediate: true });
    const onresize = (colID, event) => {
      updateWidth(colID, event.detail);
    };
    const onXcResizing = (cn, event) => {
      resizingCol.value = cn;
      resizingColWidth.value = event.detail;
    };
    expose({
      loadData
    });
    watch(contextMenu, () => {
      if (!contextMenu.value) {
        contextMenuTarget.value = false;
      }
    });
    const clearCell = async (ctx) => {
      const rowObj = data.value[ctx.row];
      const columnObj = fields.value[ctx.col];
      if (isVirtualCol(columnObj)) {
        return;
      }
      rowObj.row[columnObj.title] = null;
      await updateOrSaveRow(rowObj, columnObj.title);
    };
    const { copy } = useClipboard();
    const makeEditable = (row, col) => {
      if (isPublicView.value || editEnabled.value || isView) {
        return;
      }
      if (!isPkAvail.value && !row.rowMeta.new) {
        message.info("Update not allowed for table which doesn't have primary Key");
        return;
      }
      if (col.ai) {
        message.info("Auto Increment field is not editable");
        return;
      }
      if (col.pk && !row.rowMeta.new) {
        message.info("Editing primary key not supported");
        return;
      }
      return editEnabled.value = true;
    };
    const onKeyDown = async (e) => {
      var _a;
      if (selected.row === null || selected.col === null)
        return;
      switch (e.key) {
        case "Tab":
          e.preventDefault();
          if (e.shiftKey) {
            if (selected.col > 0) {
              selected.col--;
            } else if (selected.row > 0) {
              selected.row--;
              selected.col = visibleColLength.value - 1;
            }
          } else {
            if (selected.col < visibleColLength.value - 1) {
              selected.col++;
            } else if (selected.row < data.value.length - 1) {
              selected.row++;
              selected.col = 0;
            }
          }
          break;
        case "Enter":
          e.preventDefault();
          makeEditable(data.value[selected.row], fields.value[selected.col]);
          break;
        case "Delete":
          e.preventDefault();
          await clearCell(selected);
          break;
        case "ArrowRight":
          e.preventDefault();
          if (selected.col < visibleColLength.value - 1)
            selected.col++;
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (selected.col > 0)
            selected.col--;
          break;
        case "ArrowUp":
          e.preventDefault();
          if (selected.row > 0)
            selected.row--;
          break;
        case "ArrowDown":
          e.preventDefault();
          if (selected.row < data.value.length - 1)
            selected.row++;
          break;
        default:
          {
            const rowObj = data.value[selected.row];
            const columnObj = fields.value[selected.col];
            if (e.metaKey || e.ctrlKey) {
              switch (e.keyCode) {
                case 67:
                  await copy(rowObj.row[columnObj.title] || "");
                  break;
              }
            }
            if (editEnabled.value || e.ctrlKey || e.altKey || e.metaKey) {
              return;
            }
            if (((_a = e == null ? void 0 : e.key) == null ? void 0 : _a.length) === 1) {
              if (!isPkAvail && !rowObj.rowMeta.new) {
                return message.info("Update not allowed for table which doesn't have primary Key");
              }
              if (makeEditable(rowObj, columnObj)) {
                rowObj.row[columnObj.title] = "";
              }
            }
          }
          break;
      }
    };
    useEventListener(document, "keydown", onKeyDown);
    const smartTable = ref(null);
    onClickOutside(smartTable, () => {
      if (selected.col === null)
        return;
      const activeCol = fields.value[selected.col];
      if (editEnabled.value && (isVirtualCol(activeCol) || activeCol.uidt === UITypes.JSON))
        return;
      selected.row = null;
      selected.col = null;
    });
    const onNavigate = (dir) => {
      if (selected.row === null || selected.col === null)
        return;
      switch (dir) {
        case NavigateDir.NEXT:
          if (selected.row < data.value.length - 1) {
            selected.row++;
          } else {
            editEnabled.value = false;
          }
          break;
        case NavigateDir.PREV:
          if (selected.row > 0) {
            selected.row--;
          } else {
            editEnabled.value = false;
          }
          break;
      }
    };
    const __returned__ = { meta, view, isPublicView, fields, readOnly, isLocked, reloadViewDataHook, openNewRecordFormHook, isUIAllowed, isView, selected, editEnabled, xWhere, isPkAvail, cellRefs, addColumnDropdown, _contextMenu, contextMenu, contextMenuTarget, expandedFormDlg, expandedFormRow, expandedFormRowState, visibleColLength, loadData, paginationData, data, updateOrSaveRow, changePage, addEmptyRow, deleteRow, deleteSelectedRows, selectedAllRecords, removeLastEmptyRow, loadGridViewColumns, updateWidth, resizingColWidth, resizingCol, expandForm, selectCell, onresize, onXcResizing, clearCell, copy, makeEditable, onKeyDown, smartTable, onNavigate, isVirtualCol, enumColor };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-382873d7"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "flex flex-col h-full min-h-0 w-full" };
const _hoisted_2 = { class: "nc-grid-wrapper min-h-0 flex-1 scrollbar-thin-dull" };
const _hoisted_3 = { class: "nc-grid-header border-1 bg-gray-100 sticky top[-1px]" };
const _hoisted_4 = { class: "w-full h-full bg-gray-100 flex min-w-[70px] pl-5 pr-1 items-center" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "flex-1" }, null, -1));
const _hoisted_6 = {
  key: 1,
  class: "text-gray-500"
};
const _hoisted_7 = ["data-col", "data-title", "onXcresize", "onXcresizing"];
const _hoisted_8 = { class: "w-full h-full bg-gray-100 flex items-center" };
const _hoisted_9 = { class: "h-full w-[60px] flex items-center justify-center" };
const _hoisted_10 = { class: "nc-grid-row" };
const _hoisted_11 = {
  key: "row-index",
  class: "caption nc-grid-cell pl-5 pr-1"
};
const _hoisted_12 = { class: "items-center flex gap-1 min-w-[55px]" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "flex-1" }, null, -1));
const _hoisted_14 = ["onClick"];
const _hoisted_15 = {
  key: 1,
  class: "cursor-pointer flex items-center border-1 active:ring rounded p-1 hover:bg-primary hover:bg-opacity-10"
};
const _hoisted_16 = ["data-key", "data-col", "data-title", "onClick", "onDblclick", "onContextmenu"];
const _hoisted_17 = { class: "w-full h-full" };
const _hoisted_18 = { key: 0 };
const _hoisted_19 = ["colspan"];
const _hoisted_20 = { class: "px-2 w-full flex items-center text-gray-500" };
const _hoisted_21 = { class: "ml-1" };
const _hoisted_22 = { class: "nc-project-menu-item" };
const _hoisted_23 = { class: "nc-project-menu-item" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "nc-project-menu-item" }, "Clear cell", -1));
const _hoisted_25 = { class: "nc-project-menu-item" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_checkbox = Checkbox;
  const _component_SmartsheetHeaderVirtualCell = __nuxt_component_1$5;
  const _component_SmartsheetHeaderCell = __nuxt_component_2$2;
  const _component_MdiPlus = MdiPlus;
  const _component_SmartsheetColumnEditOrAddProvider = __nuxt_component_2$3;
  const _component_a_dropdown = Dropdown;
  const _component_MdiArrowExpand = MdiArrowExpand;
  const _component_SmartsheetVirtualCell = __nuxt_component_3$3;
  const _component_SmartsheetCell = __nuxt_component_4$2;
  const _component_SmartsheetRow = __nuxt_component_5;
  const _component_a_menu_item = __unplugin_components_0$5;
  const _component_a_menu = Menu;
  const _component_SmartsheetPagination = __nuxt_component_6;
  const _component_SmartsheetExpandedForm = __nuxt_component_7$1;
  const _directive_xc_ver_resize = resolveDirective("xc-ver-resize");
  const _directive_t = resolveDirective("t");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_a_dropdown, {
        visible: $setup.contextMenu,
        "onUpdate:visible": _cache[16] || (_cache[16] = ($event) => $setup.contextMenu = $event),
        trigger: ["contextmenu"]
      }, createSlots({
        default: withCtx(() => [
          createBaseVNode("table", {
            ref: "smartTable",
            class: "xc-row-table nc-grid backgroundColorDefault !h-auto bg-white",
            onContextmenu: _cache[11] || (_cache[11] = withModifiers(($event) => $setup.contextMenu = true, ["prevent"]))
          }, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", _hoisted_3, [
                createBaseVNode("th", null, [
                  createBaseVNode("div", _hoisted_4, [
                    !$setup.readOnly ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createBaseVNode("div", {
                        class: normalizeClass(["nc-no-label text-gray-500", { hidden: $setup.selectedAllRecords }])
                      }, "#", 2),
                      createBaseVNode("div", {
                        class: normalizeClass([{ hidden: !$setup.selectedAllRecords, flex: $setup.selectedAllRecords }, "nc-check-all w-full items-center"])
                      }, [
                        createVNode(_component_a_checkbox, {
                          checked: $setup.selectedAllRecords,
                          "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => $setup.selectedAllRecords = $event)
                        }, null, 8, ["checked"]),
                        _hoisted_5
                      ], 2)
                    ], 64)) : (openBlock(), createElementBlock("div", _hoisted_6, "#"))
                  ])
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.fields, (col) => {
                  return withDirectives((openBlock(), createElementBlock("th", {
                    key: col.title,
                    "data-col": col.id,
                    "data-title": col.title,
                    onXcresize: ($event) => $setup.onresize(col.id, $event),
                    onXcresizing: ($event) => $setup.onXcResizing(col.title, $event),
                    onXcresized: _cache[1] || (_cache[1] = ($event) => $setup.resizingCol = null)
                  }, [
                    createBaseVNode("div", _hoisted_8, [
                      $setup.isVirtualCol(col) ? (openBlock(), createBlock(_component_SmartsheetHeaderVirtualCell, {
                        key: 0,
                        column: col,
                        "hide-menu": $setup.readOnly
                      }, null, 8, ["column", "hide-menu"])) : (openBlock(), createBlock(_component_SmartsheetHeaderCell, {
                        key: 1,
                        column: col,
                        "hide-menu": $setup.readOnly
                      }, null, 8, ["column", "hide-menu"]))
                    ])
                  ], 40, _hoisted_7)), [
                    [_directive_xc_ver_resize]
                  ]);
                }), 128)),
                !$setup.readOnly && !$setup.isLocked && $setup.isUIAllowed("add-column") ? withDirectives((openBlock(), createElementBlock("th", {
                  key: 0,
                  class: "cursor-pointer",
                  onClick: _cache[7] || (_cache[7] = withModifiers(($event) => $setup.addColumnDropdown = true, ["stop"]))
                }, [
                  createVNode(_component_a_dropdown, {
                    visible: $setup.addColumnDropdown,
                    "onUpdate:visible": _cache[6] || (_cache[6] = ($event) => $setup.addColumnDropdown = $event),
                    trigger: ["click"]
                  }, {
                    overlay: withCtx(() => [
                      $setup.addColumnDropdown ? (openBlock(), createBlock(_component_SmartsheetColumnEditOrAddProvider, {
                        key: 0,
                        onSubmit: _cache[2] || (_cache[2] = ($event) => $setup.addColumnDropdown = false),
                        onCancel: _cache[3] || (_cache[3] = ($event) => $setup.addColumnDropdown = false),
                        onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                        }, ["stop"])),
                        onKeydown: _cache[5] || (_cache[5] = withModifiers(() => {
                        }, ["stop"]))
                      })) : createCommentVNode("", true)
                    ]),
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_9, [
                        createVNode(_component_MdiPlus, { class: "text-sm nc-column-add" })
                      ])
                    ]),
                    _: 1
                  }, 8, ["visible"])
                ])), [
                  [_directive_t, ["c:column:add"]]
                ]) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.data, (row, rowIndex) => {
                return openBlock(), createBlock(_component_SmartsheetRow, {
                  key: rowIndex,
                  row
                }, {
                  default: withCtx(({ state }) => {
                    var _a, _b;
                    return [
                      createBaseVNode("tr", _hoisted_10, [
                        createBaseVNode("td", _hoisted_11, [
                          createBaseVNode("div", _hoisted_12, [
                            !$setup.readOnly || !$setup.isLocked ? (openBlock(), createElementBlock("div", {
                              key: 0,
                              class: normalizeClass(["nc-row-no text-xs text-gray-500", { hidden: row.rowMeta.selected }])
                            }, toDisplayString(rowIndex + 1), 3)) : createCommentVNode("", true),
                            !$setup.readOnly ? (openBlock(), createElementBlock("div", {
                              key: 1,
                              class: normalizeClass([{ hidden: !row.rowMeta.selected, flex: row.rowMeta.selected }, "nc-row-expand-and-checkbox"])
                            }, [
                              createVNode(_component_a_checkbox, {
                                checked: row.rowMeta.selected,
                                "onUpdate:checked": ($event) => row.rowMeta.selected = $event
                              }, null, 8, ["checked", "onUpdate:checked"])
                            ], 2)) : createCommentVNode("", true),
                            _hoisted_13,
                            !$setup.readOnly && !$setup.isLocked ? (openBlock(), createElementBlock("div", {
                              key: 2,
                              class: normalizeClass(["nc-expand", { "nc-comment": (_a = row.rowMeta) == null ? void 0 : _a.commentCount }])
                            }, [
                              ((_b = row.rowMeta) == null ? void 0 : _b.commentCount) ? (openBlock(), createElementBlock("span", {
                                key: 0,
                                class: "py-1 px-3 rounded-full text-xs cursor-pointer select-none transform hover:scale-110",
                                style: normalizeStyle({ backgroundColor: $setup.enumColor.light[row.rowMeta.commentCount % $setup.enumColor.light.length] }),
                                onClick: ($event) => $setup.expandForm(row, state)
                              }, toDisplayString(row.rowMeta.commentCount), 13, _hoisted_14)) : (openBlock(), createElementBlock("div", _hoisted_15, [
                                createVNode(_component_MdiArrowExpand, {
                                  class: "select-none transform hover:text-accent hover:scale-120 nc-row-expand",
                                  onClick: ($event) => $setup.expandForm(row, state)
                                }, null, 8, ["onClick"])
                              ]))
                            ], 2)) : createCommentVNode("", true)
                          ])
                        ]),
                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.fields, (columnObj, colIndex) => {
                          return openBlock(), createElementBlock("td", {
                            ref_for: true,
                            ref: $setup.cellRefs.set,
                            key: columnObj.id,
                            class: normalizeClass(["cell relative cursor-pointer nc-grid-cell", {
                              active: !$setup.isPublicView && $setup.selected.col === colIndex && $setup.selected.row === rowIndex
                            }]),
                            "data-key": rowIndex + columnObj.id,
                            "data-col": columnObj.id,
                            "data-title": columnObj.title,
                            onClick: ($event) => $setup.selectCell(rowIndex, colIndex),
                            onDblclick: ($event) => $setup.makeEditable(row, columnObj),
                            onContextmenu: ($event) => $setup.contextMenuTarget = { row: rowIndex, col: colIndex }
                          }, [
                            createBaseVNode("div", _hoisted_17, [
                              $setup.isVirtualCol(columnObj) ? (openBlock(), createBlock(_component_SmartsheetVirtualCell, {
                                key: 0,
                                modelValue: row.row[columnObj.title],
                                "onUpdate:modelValue": ($event) => row.row[columnObj.title] = $event,
                                column: columnObj,
                                active: $setup.selected.col === colIndex && $setup.selected.row === rowIndex,
                                row,
                                onNavigate: $setup.onNavigate
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "column", "active", "row"])) : (openBlock(), createBlock(_component_SmartsheetCell, {
                                key: 1,
                                modelValue: row.row[columnObj.title],
                                "onUpdate:modelValue": ($event) => row.row[columnObj.title] = $event,
                                column: columnObj,
                                "edit-enabled": $setup.isUIAllowed("xcDatatableEditable") && $setup.editEnabled && $setup.selected.col === colIndex && $setup.selected.row === rowIndex,
                                "row-index": rowIndex,
                                active: $setup.selected.col === colIndex && $setup.selected.row === rowIndex,
                                "onUpdate:editEnabled": _cache[8] || (_cache[8] = ($event) => $setup.editEnabled = false),
                                onSave: ($event) => $setup.updateOrSaveRow(row, columnObj.title),
                                onNavigate: $setup.onNavigate,
                                onCancel: _cache[9] || (_cache[9] = ($event) => $setup.editEnabled = false)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "column", "edit-enabled", "row-index", "active", "onSave"]))
                            ])
                          ], 42, _hoisted_16);
                        }), 128))
                      ])
                    ];
                  }),
                  _: 2
                }, 1032, ["row"]);
              }), 128)),
              !$setup.isView && !$setup.isLocked && !$setup.isPublicView && $setup.isUIAllowed("xcDatatableEditable") ? (openBlock(), createElementBlock("tr", _hoisted_18, [
                withDirectives((openBlock(), createElementBlock("td", {
                  colspan: $setup.visibleColLength + 1,
                  class: "text-left pointer nc-grid-add-new-cell cursor-pointer",
                  onClick: _cache[10] || (_cache[10] = ($event) => $setup.addEmptyRow())
                }, [
                  createBaseVNode("div", _hoisted_20, [
                    createVNode(_component_MdiPlus, { class: "text-pint-500 text-xs ml-2 text-primary" }),
                    createBaseVNode("span", _hoisted_21, toDisplayString(_ctx.$t("activity.addRow")), 1)
                  ])
                ], 8, _hoisted_19)), [
                  [_directive_t, ["c:row:add:grid-bottom"]]
                ])
              ])) : createCommentVNode("", true)
            ])
          ], 544)
        ]),
        _: 2
      }, [
        !$setup.isLocked && $setup.isUIAllowed("xcDatatableEditable") ? {
          name: "overlay",
          fn: withCtx(() => [
            createVNode(_component_a_menu, {
              class: "shadow !rounded !py-0",
              onClick: _cache[15] || (_cache[15] = ($event) => $setup.contextMenu = false)
            }, {
              default: withCtx(() => [
                $setup.contextMenuTarget ? (openBlock(), createBlock(_component_a_menu_item, {
                  key: 0,
                  onClick: _cache[12] || (_cache[12] = ($event) => $setup.deleteRow($setup.contextMenuTarget.row))
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_22, toDisplayString(_ctx.$t("activity.deleteRow")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_a_menu_item, { onClick: $setup.deleteSelectedRows }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_23, toDisplayString(_ctx.$t("activity.deleteSelectedRow")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                $setup.contextMenuTarget ? (openBlock(), createBlock(_component_a_menu_item, {
                  key: 1,
                  onClick: _cache[13] || (_cache[13] = ($event) => $setup.clearCell($setup.contextMenuTarget))
                }, {
                  default: withCtx(() => [
                    _hoisted_24
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                $setup.contextMenuTarget ? (openBlock(), createBlock(_component_a_menu_item, {
                  key: 2,
                  onClick: _cache[14] || (_cache[14] = ($event) => $setup.addEmptyRow($setup.contextMenuTarget.row + 1))
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_25, toDisplayString(_ctx.$t("activity.insertRow")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ])
        } : void 0
      ]), 1032, ["visible"])
    ]),
    createVNode(_component_SmartsheetPagination),
    $setup.expandedFormRow && $setup.expandedFormDlg ? (openBlock(), createBlock(_component_SmartsheetExpandedForm, {
      key: 0,
      modelValue: $setup.expandedFormDlg,
      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.expandedFormDlg = $event),
      row: $setup.expandedFormRow,
      state: $setup.expandedFormRowState,
      meta: $setup.meta,
      onCancel: $setup.removeLastEmptyRow
    }, null, 8, ["modelValue", "row", "state", "meta", "onCancel"])) : createCommentVNode("", true)
  ]);
}
var __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-382873d7"]]);
export { ToggleDrawer as T, __nuxt_component_5 as _, __nuxt_component_6 as a, useViewColumns as b, __unplugin_components_10 as c, __nuxt_component_1 as d, __nuxt_component_0 as e, useViewData as u };
