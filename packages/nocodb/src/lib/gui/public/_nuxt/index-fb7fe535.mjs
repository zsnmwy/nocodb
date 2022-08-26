import { k as __unplugin_components_0, i as isSystemColumn, d as __nuxt_component_4, c as __nuxt_component_3, a as __nuxt_component_1, b as __nuxt_component_2 } from "./Cell-0c4aa7dc.mjs";
import { av as useInjectionState, u as useNuxtApp, N as useApi, r as ref, a9 as useProject, e as computed, U as UITypes, aR as dayjs, I as message, aa as NOCO, K as extractSdkResponseErrorMsg, o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, bZ as withAsyncContext, w as watch, b_ as resolveComponent, t as resolveDirective, j as createBlock, F as Fragment, f as renderList, g as createVNode, A as normalizeClass, v as toDisplayString, T as normalizeStyle, B as withDirectives, h as withCtx, k as createCommentVNode, z as withKeys, x as withModifiers, at as enumColor, C as pushScopeId, E as popScopeId, y as createTextVNode, S as resolveDynamicComponent, X as __unplugin_components_1, a4 as toRef, b$ as computedInject, p as provide, L as useVModel, l as isVirtualCol } from "./entry-d9bc2aad.mjs";
import { t as timeAgo } from "./index-1ad4e0b9.mjs";
import { u as useProvideSmartsheetRowStore, e as extractPkFromRow, b as useSmartsheetStoreOrThrow, d as useSmartsheetRowStoreOrThrow, a as useProvideSmartsheetStore } from "./useVirtualCell-26259a59.mjs";
import { C as Checkbox } from "./Checkbox-4ea45600.mjs";
import { I as Input } from "./Input-11f8ddea.mjs";
import { _ as __unplugin_components_0$1 } from "./reload-63954944.mjs";
import { u as useUIPermission } from "./index-3de9c023.mjs";
import { B as Button } from "./button-3d871114.mjs";
import { M as MetaInj, I as IsFormInj, F as FieldsInj } from "./index-c79a04bb.mjs";
import { M as Modal } from "./Modal-3070863e.mjs";
const [useProvideExpandedFormStore, useExpandedFormStore] = useInjectionState((meta, row) => {
  const { $e, $state, $api } = useNuxtApp();
  const { api, isLoading: isCommentsLoading, error: commentsError } = useApi();
  const commentsOnly = ref(false);
  const commentsAndLogs = ref([]);
  const comment = ref("");
  const commentsDrawer = ref(false);
  const changedColumns = ref(/* @__PURE__ */ new Set());
  const { project } = useProject();
  const rowStore = useProvideSmartsheetRowStore(meta, row);
  const primaryValue = computed(() => {
    var _a, _b, _c, _d;
    if ((_a = row == null ? void 0 : row.value) == null ? void 0 : _a.row) {
      const col = (_c = (_b = meta == null ? void 0 : meta.value) == null ? void 0 : _b.columns) == null ? void 0 : _c.find((c) => c.pv);
      if (!col) {
        return;
      }
      const value = (_d = row.value.row) == null ? void 0 : _d[col.title];
      const uidt = col.uidt;
      if (uidt === UITypes.Date) {
        return (/^\d+$/.test(value) ? dayjs(+value) : dayjs(value)).format("YYYY-MM-DD");
      } else if (uidt === UITypes.DateTime) {
        return (/^\d+$/.test(value) ? dayjs(+value) : dayjs(value)).format("YYYY-MM-DD HH:mm");
      } else if (uidt === UITypes.Time) {
        let dateTime = dayjs(value);
        if (!dateTime.isValid()) {
          dateTime = dayjs(value, "HH:mm:ss");
        }
        if (!dateTime.isValid()) {
          dateTime = dayjs(`1999-01-01 ${value}`);
        }
        if (!dateTime.isValid()) {
          return value;
        }
        return dateTime.format("HH:mm:ss");
      }
      return value;
    }
  });
  const loadCommentsAndLogs = async () => {
    var _a, _b;
    if (!row.value)
      return;
    const rowId = extractPkFromRow(row.value.row, meta.value.columns);
    if (!rowId)
      return;
    commentsAndLogs.value = ((_b = (_a = await api.utils.commentList({
      row_id: rowId,
      fk_model_id: meta.value.id,
      comments_only: commentsOnly.value
    })) == null ? void 0 : _a.reverse) == null ? void 0 : _b.call(_a)) || [];
  };
  const isYou = (email) => {
    var _a, _b;
    return ((_b = (_a = $state.user) == null ? void 0 : _a.value) == null ? void 0 : _b.email) === email;
  };
  const saveComment = async () => {
    var _a;
    try {
      if (!row.value || !comment.value)
        return;
      const rowId = extractPkFromRow(row.value.row, meta.value.columns);
      if (!rowId)
        return;
      await api.utils.commentRow({
        fk_model_id: (_a = meta.value) == null ? void 0 : _a.id,
        row_id: rowId,
        description: comment.value
      });
      comment.value = "";
      message.success("Comment added successfully");
      await loadCommentsAndLogs();
    } catch (e) {
      message.error(e.message);
    }
    $e("a:row-expand:comment");
  };
  const save = async () => {
    var _a;
    let data;
    try {
      const updateOrInsertObj = [...changedColumns.value].reduce((obj, col) => {
        obj[col] = row.value.row[col];
        return obj;
      }, {});
      if ((_a = row.value.rowMeta) == null ? void 0 : _a.new) {
        data = await $api.dbTableRow.create("noco", project.value.title, meta.value.title, updateOrInsertObj);
        Object.assign(row.value, {
          row: data,
          rowMeta: {},
          oldRow: { ...data }
        });
      } else if (Object.keys(updateOrInsertObj).length) {
        const id = extractPkFromRow(row.value.row, meta.value.columns);
        if (!id) {
          return message.info("Update not allowed for table which doesn't have primary Key");
        }
        await $api.dbTableRow.update(NOCO, project.value.title, meta.value.title, id, updateOrInsertObj);
        for (const key of Object.keys(updateOrInsertObj)) {
          $api.utils.auditRowUpdate(id, {
            fk_model_id: meta.value.id,
            column_name: key,
            row_id: id,
            value: getPlainText(updateOrInsertObj[key]),
            prev_value: getPlainText(row.value.oldRow[key])
          }).then(() => {
          });
        }
      } else {
        return message.info("No columns to update");
      }
      message.success(`${primaryValue.value || "Row"} updated successfully.`);
      changedColumns.value = /* @__PURE__ */ new Set();
    } catch (e) {
      message.error(`Failed to update row: ${await extractSdkResponseErrorMsg(e)}`);
    }
    $e("a:row-expand:add");
    return data;
  };
  return {
    ...rowStore,
    commentsOnly,
    loadCommentsAndLogs,
    commentsAndLogs,
    isCommentsLoading,
    commentsError,
    saveComment,
    comment,
    isYou,
    commentsDrawer,
    row,
    primaryValue,
    save,
    changedColumns
  };
}, "expanded-form-store");
function useExpandedFormStoreOrThrow() {
  const expandedFormStore = useExpandedFormStore();
  if (expandedFormStore == null)
    throw new Error("Please call `useExpandedFormStore` on the appropriate parent component");
  return expandedFormStore;
}
function getPlainText(htmlString) {
  const div = document.createElement("div");
  div.textContent = htmlString || "";
  return div.innerHTML;
}
const _hoisted_1$6 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7h-2Z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
var __unplugin_components_3 = { name: "mdi-keyboard-return", render: render$3 };
const _hoisted_1$5 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
var __unplugin_components_2 = { name: "mdi-account-circle", render: render$2 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Comments",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { loadCommentsAndLogs, commentsAndLogs, isCommentsLoading, commentsOnly, saveComment, isYou, comment } = useExpandedFormStoreOrThrow();
    const commentsWrapperEl = ref();
    [__temp, __restore] = withAsyncContext(() => loadCommentsAndLogs()), await __temp, __restore();
    const showborder = ref(false);
    watch(commentsAndLogs, () => {
      setTimeout(() => {
        var _a;
        if (commentsWrapperEl.value)
          commentsWrapperEl.value.scrollTop = (_a = commentsWrapperEl.value) == null ? void 0 : _a.scrollHeight;
      }, 200);
    }, { immediate: true });
    const __returned__ = { loadCommentsAndLogs, commentsAndLogs, isCommentsLoading, commentsOnly, saveComment, isYou, comment, commentsWrapperEl, showborder, enumColor, timeAgo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-65ddea57"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "h-full flex flex-col w-full bg-[#eceff1] p-2" };
const _hoisted_2$4 = {
  ref: "commentsWrapperEl",
  class: "flex-1 min-h-[100px] overflow-y-auto scrollbar-thin-primary p-2 space-y-2"
};
const _hoisted_3$4 = { class: "flex-1" };
const _hoisted_4$2 = { class: "mb-1 caption edited-text text-[10px] text-gray-500" };
const _hoisted_5$2 = {
  key: 1,
  class: "caption my-3",
  style: { "word-break": "break-all" }
};
const _hoisted_6$1 = { class: "time text-right text-[10px] mb-0 mt-1 text-gray-500" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "border-1 my-2 w-full" }, null, -1));
const _hoisted_8 = { class: "p-0" };
const _hoisted_9 = { class: "flex justify-center" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-[11px] text-gray-500" }, "Comments only", -1));
const _hoisted_11 = { class: "shrink mt-2 flex" };
const _hoisted_12 = { class: "flex items-center" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_skeleton_loader = resolveComponent("v-skeleton-loader");
  const _component_MdiAccountCircle = __unplugin_components_2;
  const _component_a_checkbox = Checkbox;
  const _component_mdi_account_circle = __unplugin_components_2;
  const _component_mdi_keyboard_return = __unplugin_components_3;
  const _component_a_input = Input;
  const _directive_dompurify_html = resolveDirective("dompurify-html");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$4, [
      $setup.isCommentsLoading && !$setup.commentsAndLogs ? (openBlock(), createBlock(_component_v_skeleton_loader, {
        key: 0,
        type: "list-item-avatar-two-line@8"
      })) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($setup.commentsAndLogs, (log) => {
        return openBlock(), createElementBlock("div", {
          key: log.id,
          class: "flex gap-1 text-xs"
        }, [
          createVNode(_component_MdiAccountCircle, {
            class: normalizeClass(["row-span-2", $setup.isYou(log.user) ? "text-pink-300" : "text-blue-300 "])
          }, null, 8, ["class"]),
          createBaseVNode("div", _hoisted_3$4, [
            createBaseVNode("p", _hoisted_4$2, toDisplayString($setup.isYou(log.user) ? "You" : log.user == null ? "Shared base" : log.user) + " " + toDisplayString(log.op_type === "COMMENT" ? "commented" : log.op_sub_type === "INSERT" ? "created" : "edited"), 1),
            log.op_type === "COMMENT" ? (openBlock(), createElementBlock("p", {
              key: 0,
              class: "block caption my-2 nc-chip w-full min-h-20px p-2 rounded",
              style: normalizeStyle({ backgroundColor: $setup.enumColor.light[2] })
            }, toDisplayString(log.description), 5)) : withDirectives((openBlock(), createElementBlock("p", _hoisted_5$2, null, 512)), [
              [_directive_dompurify_html, log.details]
            ]),
            createBaseVNode("p", _hoisted_6$1, toDisplayString($setup.timeAgo(log.created_at)), 1)
          ])
        ]);
      }), 128))
    ], 512),
    _hoisted_7,
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("div", _hoisted_9, [
        createVNode(_component_a_checkbox, {
          checked: $setup.commentsOnly,
          "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => $setup.commentsOnly = $event),
          onChange: $setup.loadCommentsAndLogs
        }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        }, 8, ["checked", "onChange"])
      ]),
      createBaseVNode("div", _hoisted_11, [
        createVNode(_component_a_input, {
          value: $setup.comment,
          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.comment = $event),
          class: normalizeClass(["!text-xs nc-comment-box", { focus: $setup.showborder }]),
          ghost: "",
          onFocusin: _cache[2] || (_cache[2] = ($event) => $setup.showborder = true),
          onFocusout: _cache[3] || (_cache[3] = ($event) => $setup.showborder = false),
          onKeyup: withKeys(withModifiers($setup.saveComment, ["prevent"]), ["enter"])
        }, {
          addonBefore: withCtx(() => [
            createBaseVNode("div", _hoisted_12, [
              createVNode(_component_mdi_account_circle, {
                class: "text-lg text-pink-300",
                small: "",
                onClick: $setup.saveComment
              }, null, 8, ["onClick"])
            ])
          ]),
          suffix: withCtx(() => [
            $setup.comment ? (openBlock(), createBlock(_component_mdi_keyboard_return, {
              key: 0,
              class: "text-sm",
              small: "",
              onClick: $setup.saveComment
            }, null, 8, ["onClick"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["value", "class", "onKeyup"])
      ])
    ])
  ]);
}
var Comments = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-65ddea57"]]);
const _hoisted_1$3 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 3c-1.11 0-2 .89-2 2H3v14H2v2h20v-2h-1V5c0-1.11-.89-2-2-2h-7m0 2h7v14h-7V5m-7 6h2v2H5v-2Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var MdiDoorOpen = { name: "mdi-door-open", render: render$1 };
const _hoisted_1$2 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 11h2v2h-2v-2m-4-8h7c1.11 0 2 .89 2 2v14h1v2H2v-2h8V5c0-1.11.89-2 2-2m0 2v14h7V5h-7Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var MdiDoorClosed = { name: "mdi-door-closed", render };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  emits: ["cancel"],
  setup(__props, { expose, emit }) {
    expose();
    const { meta } = useSmartsheetStoreOrThrow();
    const { commentsDrawer, primaryValue, save: _save } = useExpandedFormStoreOrThrow();
    const { isNew, syncLTARRefs } = useSmartsheetRowStoreOrThrow();
    const { isUIAllowed } = useUIPermission();
    const save = async () => {
      if (isNew.value) {
        const data = await _save();
        await syncLTARRefs(data);
      } else {
        await _save();
      }
    };
    const drawerToggleIcon = computed(() => commentsDrawer.value ? MdiDoorOpen : MdiDoorClosed);
    const iconColor = "#1890ff";
    const __returned__ = { emit, meta, commentsDrawer, primaryValue, _save, isNew, syncLTARRefs, isUIAllowed, save, drawerToggleIcon, iconColor };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex p-2 items-center gap-2 p-4" };
const _hoisted_2$1 = { class: "text-lg font-weight-medium flex items-center gap-1 mb-0 min-w-0 overflow-x-hidden truncate" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center w-full" }, "Reload", -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center w-full" }, "Toggle comments draw", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mdi_table_arrow_right = __unplugin_components_0;
  const _component_mdi_reload = __unplugin_components_0$1;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_a_button = Button;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("h5", _hoisted_2$1, [
      createVNode(_component_mdi_table_arrow_right, {
        style: normalizeStyle({ color: $setup.iconColor })
      }, null, 8, ["style"]),
      $setup.meta ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString($setup.meta.title), 1)
      ], 64)) : createCommentVNode("", true),
      $setup.primaryValue ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createTextVNode(": " + toDisplayString($setup.primaryValue), 1)
      ], 64)) : createCommentVNode("", true)
    ]),
    _hoisted_3$1,
    createVNode(_component_a_tooltip, { placement: "bottom" }, {
      title: withCtx(() => [
        _hoisted_4$1
      ]),
      default: withCtx(() => [
        createVNode(_component_mdi_reload, { class: "cursor-pointer select-none" })
      ]),
      _: 1
    }),
    createVNode(_component_a_tooltip, { placement: "bottom" }, {
      title: withCtx(() => [
        _hoisted_5$1
      ]),
      default: withCtx(() => [
        $setup.isUIAllowed("rowComments") && !$setup.isNew ? (openBlock(), createBlock(resolveDynamicComponent($setup.drawerToggleIcon), {
          key: 0,
          class: "cursor-pointer select-none nc-toggle-comments",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.commentsDrawer = !$setup.commentsDrawer)
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(_component_a_button, {
      class: "!text",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.emit("cancel"))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.$t("general.cancel")), 1)
      ]),
      _: 1
    }),
    createVNode(_component_a_button, {
      disabled: !$setup.isUIAllowed("tableRowUpdate"),
      type: "primary",
      onClick: $setup.save
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.$t("activity.saveRow")), 1)
      ]),
      _: 1
    }, 8, ["disabled"])
  ]);
}
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const __default__ = {
  name: "ExpandedForm"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    modelValue: { type: Boolean },
    row: null,
    state: null,
    meta: null,
    loadRow: { type: Boolean },
    useMetaFields: { type: Boolean }
  },
  emits: ["update:modelValue", "cancel"],
  async setup(__props, { expose, emit: emits }) {
    expose();
    let __temp, __restore;
    const props = __props;
    const row = toRef(props, "row");
    const state = toRef(props, "state");
    const meta = toRef(props, "meta");
    const fields = computedInject(FieldsInj, (_fields) => {
      var _a, _b;
      if (props.useMetaFields) {
        return ((_a = meta.value.columns) != null ? _a : []).filter((col) => !isSystemColumn(col));
      }
      return (_b = _fields == null ? void 0 : _fields.value) != null ? _b : [];
    });
    provide(MetaInj, meta);
    const { commentsDrawer, changedColumns, state: rowState, isNew } = useProvideExpandedFormStore(meta, row);
    const { $api } = useNuxtApp();
    if (props.loadRow) {
      const { project } = useProject();
      row.value.row = ([__temp, __restore] = withAsyncContext(() => $api.dbTableRow.read(NOCO, project.value.id, meta.value.title, extractPkFromRow(row.value.row, meta.value.columns))), __temp = await __temp, __restore(), __temp);
      row.value.oldRow = { ...row.value.row };
      row.value.rowMeta = {};
    }
    useProvideSmartsheetStore(ref({}), meta);
    provide(IsFormInj, ref(true));
    watch(state, () => {
      if (state.value) {
        rowState.value = state.value;
      } else {
        rowState.value = {};
      }
    }, { immediate: true });
    const isExpanded = useVModel(props, "modelValue", emits, {
      defaultValue: false
    });
    const onClose = () => {
      var _a, _b;
      if ((_b = (_a = row.value) == null ? void 0 : _a.rowMeta) == null ? void 0 : _b.new)
        emits("cancel");
      isExpanded.value = false;
    };
    const __returned__ = { props, emits, row, state, meta, fields, commentsDrawer, changedColumns, rowState, isNew, $api, isExpanded, onClose, isVirtualCol, Cell: __nuxt_component_4, VirtualCell: __nuxt_component_3, Comments, Header };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "!bg-gray-100 rounded" };
const _hoisted_2 = { class: "flex h-full nc-form-wrapper items-stretch min-h-[70vh]" };
const _hoisted_3 = { class: "flex-1 overflow-auto scrollbar-thin-primary" };
const _hoisted_4 = { class: "w-[500px] mx-auto" };
const _hoisted_5 = { class: "!bg-white rounded px-1 min-h-[35px] flex items-center mt-2" };
const _hoisted_6 = { class: "h-full" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SmartsheetHeaderVirtualCell = __nuxt_component_1;
  const _component_SmartsheetHeaderCell = __nuxt_component_2;
  const _component_a_modal = Modal;
  return openBlock(), createBlock(_component_a_modal, {
    visible: $setup.isExpanded,
    "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => $setup.isExpanded = $event),
    footer: null,
    width: "min(90vw,1000px)",
    "body-style": { padding: 0 },
    closable: false
  }, {
    default: withCtx(() => [
      createVNode($setup["Header"], { onCancel: $setup.onClose }),
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.fields, (col) => {
                return openBlock(), createElementBlock("div", {
                  key: col.title,
                  class: normalizeClass(["mt-2 py-2", `nc-expand-col-${col.title}`])
                }, [
                  $setup.isVirtualCol(col) ? (openBlock(), createBlock(_component_SmartsheetHeaderVirtualCell, {
                    key: 0,
                    column: col
                  }, null, 8, ["column"])) : (openBlock(), createBlock(_component_SmartsheetHeaderCell, {
                    key: 1,
                    column: col
                  }, null, 8, ["column"])),
                  createBaseVNode("div", _hoisted_5, [
                    $setup.isVirtualCol(col) ? (openBlock(), createBlock($setup["VirtualCell"], {
                      key: 0,
                      modelValue: $setup.row.row[col.title],
                      "onUpdate:modelValue": ($event) => $setup.row.row[col.title] = $event,
                      row: $setup.row,
                      column: col
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "row", "column"])) : (openBlock(), createBlock($setup["Cell"], {
                      key: 1,
                      modelValue: $setup.row.row[col.title],
                      "onUpdate:modelValue": [($event) => $setup.row.row[col.title] = $event, ($event) => $setup.changedColumns.add(col.title)],
                      column: col,
                      "edit-enabled": true
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "column"]))
                  ])
                ], 2);
              }), 128))
            ])
          ]),
          !$setup.isNew ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["nc-comments-drawer min-w-0 min-h-full max-h-full", { active: $setup.commentsDrawer }])
          }, [
            createBaseVNode("div", _hoisted_6, [
              $setup.commentsDrawer ? (openBlock(), createBlock($setup["Comments"], { key: 0 })) : createCommentVNode("", true)
            ])
          ], 2)) : createCommentVNode("", true)
        ])
      ])
    ]),
    _: 1
  }, 8, ["visible"]);
}
var __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a56f6926"]]);
var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __nuxt_component_7
}, Symbol.toStringTag, { value: "Module" }));
export { __nuxt_component_7 as _, __unplugin_components_3 as a, index as i };
