import { av as useInjectionState, u as useNuxtApp, a9 as useProject, a3 as useMetas, r as ref, e as computed, a as unref, a4 as toRef, I as message, U as UITypes, aa as NOCO, K as extractSdkResponseErrorMsg, aw as useTemplateRefsList, n as reactive, V as ViewTypes, R as RelationTypes } from "./entry-61ceea7f.mjs";
import { d as deepCompare } from "./deepCompare-c3a57270.mjs";
const extractPkFromRow = (row, columns) => {
  return row && (columns == null ? void 0 : columns.filter((c) => c.pk).map((c) => row == null ? void 0 : row[c.title]).join("___"));
};
const [useProvideSmartsheetRowStore, useSmartsheetRowStore] = useInjectionState((meta, row) => {
  const { $api } = useNuxtApp();
  const { project } = useProject();
  const { metas } = useMetas();
  const state = ref({});
  const isNew = computed(() => {
    var _a, _b;
    return (_b = (_a = unref(row).rowMeta) == null ? void 0 : _a.new) != null ? _b : false;
  });
  const addLTARRef = async (value, column) => {
    const __$temp_1 = useVirtualCell(ref(column)), isHm = toRef(__$temp_1, "isHm"), isMm = toRef(__$temp_1, "isMm"), isBt = toRef(__$temp_1, "isBt");
    if (isHm.value || isMm.value) {
      if (!state.value[column.title])
        state.value[column.title] = [];
      if (state.value[column.title].find((ln) => deepCompare(ln, value))) {
        return message.info("This value is already in the list");
      }
      state.value[column.title].push(value);
    } else if (isBt.value) {
      state.value[column.title] = value;
    }
  };
  const removeLTARRef = async (value, column) => {
    var _a, _b;
    const __$temp_2 = useVirtualCell(ref(column)), isHm = toRef(__$temp_2, "isHm"), isMm = toRef(__$temp_2, "isMm"), isBt = toRef(__$temp_2, "isBt");
    if (isHm.value || isMm.value) {
      (_b = state.value[column.title]) == null ? void 0 : _b.splice((_a = state.value[column.title]) == null ? void 0 : _a.indexOf(value), 1);
    } else if (isBt.value) {
      state.value[column.title] = null;
    }
  };
  const linkRecord = async (rowId, relatedRowId, column, type) => {
    try {
      await $api.dbTableRow.nestedAdd(NOCO, project.value.title, meta.value.title, rowId, type, column.title, relatedRowId);
    } catch (e) {
      message.error(await extractSdkResponseErrorMsg(e));
    }
  };
  const syncLTARRefs = async (row2) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const id = extractPkFromRow(row2, meta.value.columns);
    for (const column of (_b = (_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) != null ? _b : []) {
      if (column.uidt !== UITypes.LinkToAnotherRecord)
        continue;
      const colOptions = column == null ? void 0 : column.colOptions;
      const __$temp_3 = useVirtualCell(ref(column)), isHm = toRef(__$temp_3, "isHm"), isMm = toRef(__$temp_3, "isMm"), isBt = toRef(__$temp_3, "isBt");
      const relatedTableMeta = (_c = metas.value) == null ? void 0 : _c[colOptions == null ? void 0 : colOptions.fk_related_model_id];
      if (isHm.value || isMm.value) {
        const relatedRows = (_e = (_d = state.value) == null ? void 0 : _d[column.title]) != null ? _e : [];
        for (const relatedRow of relatedRows) {
          await linkRecord(id, extractPkFromRow(relatedRow, relatedTableMeta.columns), column, colOptions.type);
        }
      } else if (isBt.value && ((_f = state == null ? void 0 : state.value) == null ? void 0 : _f[column.title])) {
        await linkRecord(id, extractPkFromRow((_g = state.value) == null ? void 0 : _g[column.title], relatedTableMeta.columns), column, colOptions.type);
      }
    }
  };
  return {
    row,
    state,
    isNew,
    addLTARRef,
    removeLTARRef,
    syncLTARRefs
  };
}, "smartsheet-row-store");
function useSmartsheetRowStoreOrThrow() {
  const smartsheetRowStore = useSmartsheetRowStore();
  if (smartsheetRowStore == null)
    throw new Error("Please call `useSmartsheetRowStore` on the appropriate parent component");
  return smartsheetRowStore;
}
const [useProvideSmartsheetStore, useSmartsheetStore] = useInjectionState((view, meta, shared = false, initalSorts, initialFilters) => {
  const { $api } = useNuxtApp();
  const { sqlUi } = useProject();
  const cellRefs = useTemplateRefsList();
  const search = reactive({
    field: "",
    query: ""
  });
  const isLocked = computed(() => {
    var _a;
    return ((_a = view == null ? void 0 : view.value) == null ? void 0 : _a.lock_type) === "locked";
  });
  const isPkAvail = computed(() => {
    var _a, _b;
    return (_b = (_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.some((c) => c.pk);
  });
  const isGrid = computed(() => {
    var _a;
    return ((_a = view == null ? void 0 : view.value) == null ? void 0 : _a.type) === ViewTypes.GRID;
  });
  const isForm = computed(() => {
    var _a;
    return ((_a = view == null ? void 0 : view.value) == null ? void 0 : _a.type) === ViewTypes.FORM;
  });
  const isSharedForm = computed(() => (isForm == null ? void 0 : isForm.value) && shared);
  const isGallery = computed(() => {
    var _a;
    return ((_a = view == null ? void 0 : view.value) == null ? void 0 : _a.type) === ViewTypes.GALLERY;
  });
  const xWhere = computed(() => {
    var _a, _b, _c, _d;
    let where;
    const col = ((_b = (_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.find(({ id }) => id === search.field)) || ((_d = (_c = meta == null ? void 0 : meta.value) == null ? void 0 : _c.columns) == null ? void 0 : _d.find((v) => v.pv));
    if (!col)
      return;
    if (!search.query.trim())
      return;
    if (["text", "string"].includes(sqlUi.value.getAbstractType(col)) && col.dt !== "bigint") {
      where = `(${col.title},like,%${search.query.trim()}%)`;
    } else {
      where = `(${col.title},eq,${search.query.trim()})`;
    }
    return where;
  });
  const sorts = initalSorts != null ? initalSorts : ref([]);
  const nestedFilters = initialFilters != null ? initialFilters : ref([]);
  return {
    view,
    meta,
    isLocked,
    $api,
    search,
    xWhere,
    isPkAvail,
    isForm,
    isGrid,
    isGallery,
    cellRefs,
    isSharedForm,
    sorts,
    nestedFilters
  };
}, "smartsheet-store");
function useSmartsheetStoreOrThrow() {
  const smartsheetStore = useSmartsheetStore();
  if (smartsheetStore == null)
    throw new Error("Please call `useSmartsheetStore` on the appropriate parent component");
  return smartsheetStore;
}
function useVirtualCell(column) {
  const isHm = computed(() => {
    var _a, _b;
    return ((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.uidt) === UITypes.LinkToAnotherRecord && ((_b = column == null ? void 0 : column.value) == null ? void 0 : _b.colOptions).type === RelationTypes.HAS_MANY;
  });
  const isMm = computed(() => {
    var _a, _b;
    return ((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.uidt) === UITypes.LinkToAnotherRecord && ((_b = column == null ? void 0 : column.value) == null ? void 0 : _b.colOptions).type === RelationTypes.MANY_TO_MANY;
  });
  const isBt = computed(() => {
    var _a, _b;
    return ((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.uidt) === UITypes.LinkToAnotherRecord && ((_b = column == null ? void 0 : column.value) == null ? void 0 : _b.colOptions).type === RelationTypes.BELONGS_TO;
  });
  const isLookup = computed(() => {
    var _a;
    return ((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.uidt) === UITypes.Lookup;
  });
  const isRollup = computed(() => {
    var _a;
    return ((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.uidt) === UITypes.Rollup;
  });
  const isFormula = computed(() => {
    var _a;
    return ((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.uidt) === UITypes.Formula;
  });
  const isCount = computed(() => {
    var _a;
    return ((_a = column == null ? void 0 : column.value) == null ? void 0 : _a.uidt) === UITypes.Count;
  });
  return {
    isHm,
    isMm,
    isBt,
    isLookup,
    isRollup,
    isFormula,
    isCount
  };
}
export { useProvideSmartsheetStore as a, useSmartsheetStoreOrThrow as b, useVirtualCell as c, useSmartsheetRowStoreOrThrow as d, extractPkFromRow as e, useProvideSmartsheetRowStore as u };
