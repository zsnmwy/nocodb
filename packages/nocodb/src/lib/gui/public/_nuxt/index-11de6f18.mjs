import { n as reactive, d9 as SYSTEM_COLUMNS, u as useNuxtApp, a3 as useMetas, a9 as useProject, U as UITypes, I as message, K as extractSdkResponseErrorMsg, w as watch, ab as h, da as isClient, a7 as createEventHook, r as ref, c3 as isVNode, db as render, dc as toReactive, dd as tryOnScopeDispose } from "./entry-61ceea7f.mjs";
import { u as useTabs, T as TabType } from "./useTabs-019d3d72.mjs";
import { M as Modal } from "./Modal-d5a36a0f.mjs";
function useTable(onTableCreate) {
  const table = reactive({
    title: "",
    table_name: "",
    columns: SYSTEM_COLUMNS
  });
  const { $e, $api } = useNuxtApp();
  const { getMeta, removeMeta } = useMetas();
  const { loadTables } = useProject();
  const { closeTab } = useTabs();
  const { sqlUi, project, tables } = useProject();
  const createTable = async () => {
    var _a, _b;
    if (!(sqlUi == null ? void 0 : sqlUi.value))
      return;
    const columns = (_a = sqlUi == null ? void 0 : sqlUi.value) == null ? void 0 : _a.getNewTableColumns().filter((col) => {
      var _a2, _b2, _c;
      if (col.column_name === "id" && table.columns.includes("id_ag")) {
        Object.assign(col, (_a2 = sqlUi == null ? void 0 : sqlUi.value) == null ? void 0 : _a2.getDataTypeForUiType({ uidt: UITypes.ID }, "AG"));
        col.dtxp = (_b2 = sqlUi == null ? void 0 : sqlUi.value) == null ? void 0 : _b2.getDefaultLengthForDatatype(col.dt);
        col.dtxs = (_c = sqlUi == null ? void 0 : sqlUi.value) == null ? void 0 : _c.getDefaultScaleForDatatype(col.dt);
        return true;
      }
      return table.columns.includes(col.column_name);
    });
    try {
      const tableMeta = await $api.dbTable.create((_b = project == null ? void 0 : project.value) == null ? void 0 : _b.id, {
        ...table,
        columns
      });
      onTableCreate == null ? void 0 : onTableCreate(tableMeta);
    } catch (e) {
      message.error(await extractSdkResponseErrorMsg(e));
    }
  };
  watch(() => table.title, (title) => {
    var _a;
    table.table_name = `${((_a = project == null ? void 0 : project.value) == null ? void 0 : _a.prefix) || ""}${title}`;
  });
  const generateUniqueTitle = () => {
    var _a;
    let c = 1;
    while ((_a = tables == null ? void 0 : tables.value) == null ? void 0 : _a.some((t) => t.title === `Sheet${c}`)) {
      c++;
    }
    table.title = `Sheet${c}`;
  };
  const deleteTable = (table2) => {
    $e("c:table:delete");
    Modal.confirm({
      title: `Do you want to delete the table : ${table2.title}`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        var _a;
        try {
          const meta = await getMeta(table2.id);
          const relationColumns = (_a = meta == null ? void 0 : meta.columns) == null ? void 0 : _a.filter((c) => c.uidt === UITypes.LinkToAnotherRecord);
          if (relationColumns == null ? void 0 : relationColumns.length) {
            const refColMsgs = await Promise.all(relationColumns.map(async (c, i) => {
              var _a2;
              const refMeta = await getMeta((_a2 = c == null ? void 0 : c.colOptions) == null ? void 0 : _a2.fk_related_model_id);
              return `${i + 1}. ${c.title} is a LinkToAnotherRecord of ${refMeta && refMeta.title || c.title}`;
            }));
            message.info(h("div", {
              innerHTML: `<div style="padding:10px 4px">Unable to delete tables because of the following.
              <br><br>${refColMsgs.join("<br>")}<br><br>
              Delete them & try again</div>`
            }));
            return;
          }
          await $api.dbTable.delete(table2 == null ? void 0 : table2.id);
          closeTab({
            type: TabType.TABLE,
            id: table2.id,
            title: table2.title
          });
          await loadTables();
          removeMeta(table2.id);
          message.info(`Deleted table ${table2.title} successfully`);
          $e("a:table:delete");
        } catch (e) {
          message.error(await extractSdkResponseErrorMsg(e));
        }
      }
    });
  };
  return { table, createTable, generateUniqueTitle, tables, project, deleteTable };
}
function useDialog(componentOrVNode, props = {}, mountTarget) {
  if (typeof document === "undefined" || !isClient) {
    console.warn("[useDialog]: Cannot use outside of browser!");
  }
  const closeHook = createEventHook();
  const mountedHook = createEventHook();
  const isMounted = ref(false);
  const domNode = document.createElement("div");
  const vNodeRef = ref();
  mountTarget = mountTarget ? "$el" in mountTarget ? mountTarget.$el : mountTarget : document.body;
  mountTarget.appendChild(domNode);
  const stop = watch(toReactive(props), (reactiveProps) => {
    const vNode = isVNode(componentOrVNode) ? componentOrVNode : h(componentOrVNode, reactiveProps);
    vNode.appContext = useNuxtApp().vueApp._context;
    vNodeRef.value = vNode;
    render(vNode, domNode);
    if (!isMounted.value)
      mountedHook.trigger();
  }, { deep: true, immediate: true, flush: "post" });
  tryOnScopeDispose(close);
  function close(debounce = 0) {
    setTimeout(() => {
      stop();
      render(null, domNode);
      setTimeout(() => {
        mountTarget.removeChild(domNode);
      }, 100);
      closeHook.trigger();
    }, debounce);
  }
  return {
    close,
    onClose: closeHook.on,
    onMounted: mountedHook.on,
    domNode,
    vNode: vNodeRef
  };
}
export { useTable as a, useDialog as u };
