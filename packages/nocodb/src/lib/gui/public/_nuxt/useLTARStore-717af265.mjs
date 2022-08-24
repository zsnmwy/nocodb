import { av as useInjectionState, a3 as useMetas, a9 as useProject, u as useNuxtApp, i as inject, r as ref, n as reactive, e as computed, w as watch, $ as useRoute, aa as NOCO, I as message, K as extractSdkResponseErrorMsg } from "./entry-3fb260b7.mjs";
import { S as SharedViewPasswordInj, d as IsPublicInj } from "./index-c79a04bb.mjs";
import "./index-b7cb064d.mjs";
import { M as Modal } from "./Modal-ebea9398.mjs";
const [useProvideLTARStore, useLTARStore] = useInjectionState((column, row, isNewRow, reloadData = () => {
}) => {
  const { metas, getMeta } = useMetas();
  const { project } = useProject();
  const { $api } = useNuxtApp();
  const sharedViewPassword = inject(SharedViewPasswordInj, ref(null));
  const childrenExcludedList = ref();
  const childrenList = ref();
  const childrenExcludedListPagination = reactive({
    page: 1,
    query: "",
    size: 10
  });
  const childrenListPagination = reactive({
    page: 1,
    query: "",
    size: 10
  });
  const isPublic = inject(IsPublicInj, ref(false));
  const colOptions = computed(() => column == null ? void 0 : column.value.colOptions);
  const meta = computed(() => {
    var _a, _b;
    return (_b = metas == null ? void 0 : metas.value) == null ? void 0 : _b[(_a = column == null ? void 0 : column.value) == null ? void 0 : _a.fk_model_id];
  });
  const relatedTableMeta = computed(() => {
    var _a, _b;
    return (_b = metas.value) == null ? void 0 : _b[(_a = colOptions.value) == null ? void 0 : _a.fk_related_model_id];
  });
  const rowId = computed(() => meta.value.columns.filter((c) => c.pk).map((c) => {
    var _a, _b;
    return (_b = (_a = row == null ? void 0 : row.value) == null ? void 0 : _a.row) == null ? void 0 : _b[c.title];
  }).join("___"));
  const getRelatedTableRowId = (row2) => {
    var _a, _b;
    return (_b = (_a = relatedTableMeta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.filter((c) => c.pk).map((c) => row2 == null ? void 0 : row2[c.title]).join("___");
  };
  const loadRelatedTableMeta = async () => {
    var _a;
    await getMeta((_a = colOptions.value) == null ? void 0 : _a.fk_related_model_id);
  };
  const relatedTablePrimaryValueProp = computed(() => {
    var _a, _b, _c, _d, _e;
    return (_e = ((_b = (_a = relatedTableMeta == null ? void 0 : relatedTableMeta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.find((c) => c.pv)) || ((_d = (_c = relatedTableMeta == null ? void 0 : relatedTableMeta.value) == null ? void 0 : _c.columns) == null ? void 0 : _d[0])) == null ? void 0 : _e.title;
  });
  const relatedTablePrimaryKeyProps = computed(() => {
    var _a, _b, _c, _d;
    return (_d = (_c = (_b = (_a = relatedTableMeta == null ? void 0 : relatedTableMeta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.filter((c) => c.pk)) == null ? void 0 : _c.map((c) => c.title)) != null ? _d : [];
  });
  const primaryValueProp = computed(() => {
    var _a, _b, _c, _d, _e;
    return (_e = ((_b = (_a = meta == null ? void 0 : meta.value) == null ? void 0 : _a.columns) == null ? void 0 : _b.find((c) => c.pv)) || ((_d = (_c = relatedTableMeta == null ? void 0 : relatedTableMeta.value) == null ? void 0 : _c.columns) == null ? void 0 : _d[0])) == null ? void 0 : _e.title;
  });
  const loadChildrenExcludedList = async () => {
    var _a, _b, _c;
    try {
      if (isPublic.value) {
        const route = useRoute();
        childrenExcludedList.value = await $api.public.dataRelationList(route.params.viewId, (_a = column == null ? void 0 : column.value) == null ? void 0 : _a.id, {}, {
          headers: {
            "xc-password": sharedViewPassword.value
          },
          query: {
            limit: childrenExcludedListPagination.size,
            offset: childrenExcludedListPagination.size * (childrenExcludedListPagination.page - 1),
            where: childrenExcludedListPagination.query && `(${relatedTablePrimaryValueProp.value},like,${childrenExcludedListPagination.query})`,
            fields: [relatedTablePrimaryValueProp.value, ...relatedTablePrimaryKeyProps.value]
          }
        });
      } else if (isNewRow == null ? void 0 : isNewRow.value) {
        childrenExcludedList.value = await $api.dbTableRow.list(NOCO, project.value.id, (_b = relatedTableMeta == null ? void 0 : relatedTableMeta.value) == null ? void 0 : _b.id, {
          limit: childrenExcludedListPagination.size,
          offset: childrenExcludedListPagination.size * (childrenExcludedListPagination.page - 1),
          where: childrenExcludedListPagination.query && `(${relatedTablePrimaryValueProp.value},like,${childrenExcludedListPagination.query})`,
          fields: [relatedTablePrimaryValueProp.value, ...relatedTablePrimaryKeyProps.value]
        });
      } else {
        childrenExcludedList.value = await $api.dbTableRow.nestedChildrenExcludedList(NOCO, project.value.id, meta.value.id, rowId.value, colOptions.value.type, (_c = column == null ? void 0 : column.value) == null ? void 0 : _c.title, {
          limit: String(childrenExcludedListPagination.size),
          offset: String(childrenExcludedListPagination.size * (childrenExcludedListPagination.page - 1)),
          where: childrenExcludedListPagination.query && `(${relatedTablePrimaryValueProp.value},like,${childrenExcludedListPagination.query})`
        });
      }
    } catch (e) {
      message.error(`Failed to load list: ${await extractSdkResponseErrorMsg(e)}`);
    }
  };
  const loadChildrenList = async () => {
    var _a;
    try {
      if (colOptions.value.type === "bt")
        return;
      childrenList.value = await $api.dbTableRow.nestedList(NOCO, project.value.id, meta.value.id, rowId.value, colOptions.value.type, (_a = column == null ? void 0 : column.value) == null ? void 0 : _a.title, {
        limit: String(childrenListPagination.size),
        offset: String(childrenListPagination.size * (childrenListPagination.page - 1)),
        where: childrenListPagination.query && `(${relatedTablePrimaryValueProp.value},like,${childrenListPagination.query})`
      });
    } catch (e) {
      message.error(`Failed to load children list: ${await extractSdkResponseErrorMsg(e)}`);
    }
  };
  const deleteRelatedRow = async (row2, onSuccess) => {
    Modal.confirm({
      title: "Do you want to delete the record?",
      type: "warning",
      onOk: async () => {
        const id = getRelatedTableRowId(row2);
        try {
          $api.dbTableRow.delete(NOCO, project.value.id, relatedTableMeta.value.id, id);
          reloadData == null ? void 0 : reloadData();
          if (!(isNewRow == null ? void 0 : isNewRow.value)) {
            await loadChildrenList();
          }
          onSuccess == null ? void 0 : onSuccess(row2);
        } catch (e) {
          message.error(`Delete failed: ${await extractSdkResponseErrorMsg(e)}`);
        }
      }
    });
  };
  const unlink = async (row2) => {
    var _a;
    try {
      await $api.dbTableRow.nestedRemove(NOCO, project.value.title, meta.value.title, rowId.value, colOptions.value.type, (_a = column == null ? void 0 : column.value) == null ? void 0 : _a.title, getRelatedTableRowId(row2));
    } catch (e) {
      message.error(`Unlink failed: ${await extractSdkResponseErrorMsg(e)}`);
    }
    reloadData == null ? void 0 : reloadData();
  };
  const link = async (row2) => {
    var _a;
    try {
      await $api.dbTableRow.nestedAdd(NOCO, project.value.title, meta.value.title, rowId.value, colOptions.value.type, (_a = column == null ? void 0 : column.value) == null ? void 0 : _a.title, getRelatedTableRowId(row2));
      await loadChildrenList();
    } catch (e) {
      message.error(`Linking failed: ${await extractSdkResponseErrorMsg(e)}`);
    }
    reloadData == null ? void 0 : reloadData();
  };
  watch(childrenExcludedListPagination, async () => {
    await loadChildrenExcludedList();
  });
  watch(childrenListPagination, async () => {
    await loadChildrenList();
  });
  return {
    relatedTableMeta,
    loadRelatedTableMeta,
    relatedTablePrimaryValueProp,
    childrenExcludedList,
    childrenList,
    rowId,
    childrenExcludedListPagination,
    childrenListPagination,
    primaryValueProp,
    meta,
    unlink,
    link,
    loadChildrenExcludedList,
    loadChildrenList,
    row,
    deleteRelatedRow,
    getRelatedTableRowId
  };
}, "ltar-store");
function useLTARStoreOrThrow() {
  const ltarStore = useLTARStore();
  if (ltarStore == null)
    throw new Error("Please call `useLTARStore` on the appropriate parent component");
  return ltarStore;
}
export { useLTARStoreOrThrow as a, useProvideLTARStore as u };
