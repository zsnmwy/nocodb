import { az as useState, e as computed, u as useNuxtApp, a3 as useMetas, U as UITypes } from "./entry-3fb260b7.mjs";
function useSharedView() {
  const nestedFilters = useState("nestedFilters", () => []);
  const paginationData = useState("paginationData", () => ({ page: 1, pageSize: 25 }));
  const sharedView = useState("sharedView");
  const sorts = useState("sorts", () => []);
  const password = useState("password");
  const allowCSVDownload = useState("allowCSVDownload", () => false);
  const meta = useState("meta");
  const formColumns = computed(() => {
    var _a;
    return (_a = meta.value.columns.filter((f) => f.show && f.uidt !== UITypes.Rollup && f.uidt !== UITypes.Lookup && f.uidt !== UITypes.Formula).sort((a, b) => a.order - b.order).map((c) => ({ ...c, required: !!(c.required || 0) }))) != null ? _a : [];
  });
  const { $api } = useNuxtApp();
  const { setMeta } = useMetas();
  const loadSharedView = async (viewId, localPassword = void 0) => {
    const viewMeta = await $api.public.sharedViewMetaGet(viewId, {
      headers: {
        "xc-password": localPassword != null ? localPassword : password.value
      }
    });
    allowCSVDownload.value = JSON.parse(viewMeta.meta).allowCSVDownload;
    if (localPassword)
      password.value = localPassword;
    sharedView.value = { ...viewMeta };
    meta.value = { ...viewMeta.model };
    let order = 1;
    meta.value.columns = [...viewMeta.model.columns].filter((c) => c.show).map((c) => ({ ...c, order: order++ })).sort((a, b) => a.order - b.order);
    setMeta(viewMeta.model);
    const relatedMetas = { ...viewMeta.relatedMetas };
    Object.keys(relatedMetas).forEach((key) => setMeta(relatedMetas[key]));
  };
  const fetchSharedViewData = async () => {
    var _a;
    const page = paginationData.value.page || 1;
    const pageSize = paginationData.value.pageSize || 25;
    const { data } = await $api.public.dataList((_a = sharedView == null ? void 0 : sharedView.value) == null ? void 0 : _a.uuid, {
      offset: (page - 1) * pageSize,
      filterArrJson: JSON.stringify(nestedFilters.value),
      sortArrJson: JSON.stringify(sorts.value)
    }, {
      headers: {
        "xc-password": password.value
      }
    });
    return data;
  };
  const exportFile = async (fields, offset, type, responseType) => {
    var _a;
    return await $api.public.csvExport((_a = sharedView.value) == null ? void 0 : _a.uuid, type, {
      format: responseType,
      query: {
        fields: fields.map((field) => field.title),
        offset,
        sortArrJson: JSON.stringify(sorts.value),
        filterArrJson: JSON.stringify(nestedFilters.value)
      },
      headers: {
        "xc-password": password.value
      }
    });
  };
  return {
    sharedView,
    loadSharedView,
    meta,
    nestedFilters,
    fetchSharedViewData,
    paginationData,
    sorts,
    exportFile,
    formColumns,
    allowCSVDownload
  };
}
export { useSharedView as u };
