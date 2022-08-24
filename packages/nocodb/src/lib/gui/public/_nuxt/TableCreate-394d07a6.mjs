import { _ as _export_sfc, d as defineComponent, L as useVModel, r as ref, a9 as useProject, H as Form, e as computed, dz as validateTableName, d9 as SYSTEM_COLUMNS, s as onMounted, o as openBlock, j as createBlock, h as withCtx, g as createVNode, y as createTextVNode, v as toDisplayString, b as createBaseVNode, ah as normalizeProps, ai as guardReactiveProps, A as normalizeClass, c as createElementBlock, k as createCommentVNode, aj as mergeProps, z as withKeys, C as pushScopeId, E as popScopeId, G as __unplugin_components_2, X as __unplugin_components_1 } from "./entry-3fb260b7.mjs";
import { a as MdiMinusIcon, M as MdiPlusIcon } from "./minus-circle-outline-bf16c42a.mjs";
import { u as useTabs, T as TabType } from "./useTabs-60039a93.mjs";
import { a as useTable } from "./index-023b4c5b.mjs";
import { b as __unplugin_components_6 } from "./index-bcdb7e23.mjs";
import { a as __unplugin_components_3 } from "./Card-76812586.mjs";
import { B as Button } from "./button-b581df9e.mjs";
import { I as Input } from "./Input-131cc256.mjs";
import { M as Modal } from "./Modal-ebea9398.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TableCreate",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const dialogShow = useVModel(props, "modelValue", emit);
    const isAdvanceOptVisible = ref(false);
    const inputEl = ref();
    const { addTab } = useTabs();
    const { loadTables, isMysql, isMssql, isPg } = useProject();
    const { table, createTable, generateUniqueTitle, tables, project } = useTable(async (table2) => {
      await loadTables();
      addTab({
        id: table2.id,
        title: table2.title,
        type: TabType.TABLE
      });
      dialogShow.value = false;
    });
    const useForm = Form.useForm;
    const validateDuplicateAlias = (v) => (tables.value || []).every((t) => t.title !== (v || "")) || "Duplicate table alias";
    const validators = computed(() => {
      return {
        title: [
          validateTableName,
          validateDuplicateAlias,
          {
            validator: (rule, value) => {
              return new Promise((resolve, reject) => {
                var _a;
                let tableNameLengthLimit = 255;
                if (isMysql) {
                  tableNameLengthLimit = 64;
                } else if (isPg) {
                  tableNameLengthLimit = 63;
                } else if (isMssql) {
                  tableNameLengthLimit = 128;
                }
                const projectPrefix = ((_a = project == null ? void 0 : project.value) == null ? void 0 : _a.prefix) || "";
                if ((projectPrefix + value).length > tableNameLengthLimit) {
                  return reject(new Error(`Table name exceeds ${tableNameLengthLimit} characters`));
                }
                resolve();
              });
            }
          }
        ],
        table_name: [validateTableName]
      };
    });
    const { validateInfos } = useForm(table, validators);
    const systemColumnsCheckboxInfo = SYSTEM_COLUMNS.map((c, index) => ({
      value: c,
      disabled: index === 0
    }));
    onMounted(() => {
      var _a;
      generateUniqueTitle();
      (_a = inputEl.value) == null ? void 0 : _a.focus();
    });
    const __returned__ = { props, emit, dialogShow, isAdvanceOptVisible, inputEl, addTab, loadTables, isMysql, isMssql, isPg, table, createTable, generateUniqueTitle, tables, project, useForm, validateDuplicateAlias, validators, validateInfos, systemColumnsCheckboxInfo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-057d5530"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "pl-10 pr-10 pt-5" };
const _hoisted_2 = { class: "prose-xl font-bold self-center my-4" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mb-2" }, "Table Name", -1));
const _hoisted_4 = { class: "flex justify-end items-center" };
const _hoisted_5 = {
  key: 0,
  class: "mb-2"
};
const _hoisted_6 = { class: "mb-1" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "ID column is required, you can rename this later if required.", -1));
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" ID ");
const _hoisted_9 = {
  key: 1,
  class: "flex"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = Button;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2;
  const _component_MdiMinusCircleOutline = MdiMinusIcon;
  const _component_MdiPlusCircleOutline = MdiPlusIcon;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_a_checkbox_group = __unplugin_components_6;
  const _component_a_row = __unplugin_components_3;
  const _component_a_form = Form;
  const _component_a_modal = Modal;
  return openBlock(), createBlock(_component_a_modal, {
    visible: $setup.dialogShow,
    "onUpdate:visible": _cache[6] || (_cache[6] = ($event) => $setup.dialogShow = $event),
    width: "max(30vw, 600px)",
    centered: "",
    onKeydown: _cache[7] || (_cache[7] = withKeys(($event) => $setup.dialogShow = false, ["esc"]))
  }, {
    footer: withCtx(() => [
      createVNode(_component_a_button, {
        key: "back",
        size: "large",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.dialogShow = false)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("general.cancel")), 1)
        ]),
        _: 1
      }),
      createVNode(_component_a_button, {
        key: "submit",
        size: "large",
        type: "primary",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.createTable())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.$t("general.submit")), 1)
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_a_form, {
          model: $setup.table,
          name: "create-new-table-form",
          onKeydown: withKeys($setup.createTable, ["enter"])
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("activity.createTable")), 1),
            _hoisted_3,
            createVNode(_component_a_form_item, normalizeProps(guardReactiveProps($setup.validateInfos.title)), {
              default: withCtx(() => [
                createVNode(_component_a_input, {
                  ref: "inputEl",
                  value: $setup.table.title,
                  "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.table.title = $event),
                  size: "large",
                  "hide-details": "",
                  placeholder: _ctx.$t("msg.info.enterTableName")
                }, null, 8, ["value", "placeholder"])
              ]),
              _: 1
            }, 16),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", {
                class: "pointer flex flex-row items-center gap-x-1",
                onClick: _cache[3] || (_cache[3] = ($event) => $setup.isAdvanceOptVisible = !$setup.isAdvanceOptVisible)
              }, [
                createTextVNode(toDisplayString($setup.isAdvanceOptVisible ? "Hide" : "Show") + " more ", 1),
                $setup.isAdvanceOptVisible ? (openBlock(), createBlock(_component_MdiMinusCircleOutline, {
                  key: 0,
                  class: "text-gray-500"
                })) : (openBlock(), createBlock(_component_MdiPlusCircleOutline, {
                  key: 1,
                  class: "text-gray-500"
                }))
              ])
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["nc-table-advanced-options", { active: $setup.isAdvanceOptVisible }])
            }, [
              !$setup.project.prefix ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(_ctx.$t("msg.info.tableNameInDb")), 1)) : createCommentVNode("", true),
              !$setup.project.prefix ? (openBlock(), createBlock(_component_a_form_item, normalizeProps(mergeProps({ key: 1 }, $setup.validateInfos.table_name)), {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    value: $setup.table.table_name,
                    "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.table.table_name = $event),
                    size: "large",
                    "hide-details": "",
                    placeholder: _ctx.$t("msg.info.tableNameInDb")
                  }, null, 8, ["value", "placeholder"])
                ]),
                _: 1
              }, 16)) : createCommentVNode("", true),
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("msg.info.addDefaultColumns")), 1),
                createVNode(_component_a_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_checkbox_group, {
                      value: $setup.table.columns,
                      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.table.columns = $event),
                      options: $setup.systemColumnsCheckboxInfo,
                      class: "!flex flex-row justify-between w-full"
                    }, {
                      label: withCtx(({ value }) => [
                        value === "id" ? (openBlock(), createBlock(_component_a_tooltip, {
                          key: 0,
                          placement: "top",
                          class: "!flex"
                        }, {
                          title: withCtx(() => [
                            _hoisted_7
                          ]),
                          default: withCtx(() => [
                            _hoisted_8
                          ]),
                          _: 1
                        })) : (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(value), 1))
                      ]),
                      _: 1
                    }, 8, ["value", "options"])
                  ]),
                  _: 1
                })
              ])
            ], 2)
          ]),
          _: 1
        }, 8, ["model", "onKeydown"])
      ])
    ]),
    _: 1
  }, 8, ["visible"]);
}
var DlgTableCreate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-057d5530"]]);
export { DlgTableCreate as D };
