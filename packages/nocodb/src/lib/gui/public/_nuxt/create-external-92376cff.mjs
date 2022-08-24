import { _ as __nuxt_component_0 } from "./NocoIcon-023b65d1.mjs";
import { _ as __unplugin_components_0 } from "./chevron-left-c9bfb55e.mjs";
import { _ as _export_sfc, d as defineComponent, H as Form, r as ref, N as useApi, u as useNuxtApp, M as useI18n, dP as getDefaultConnectionConfig, dQ as ClientType, e as computed, w as watch, s as onMounted, P as nextTick, o as openBlock, c as createElementBlock, g as createVNode, A as normalizeClass, b as createBaseVNode, v as toDisplayString, h as withCtx, dR as clientTypes, dp as navigateTo, dS as sslUsage, aj as mergeProps, F as Fragment, f as renderList, j as createBlock, y as createTextVNode, k as createCommentVNode, dO as projectTitleValidator, ag as fieldRequiredValidator, I as message, K as extractSdkResponseErrorMsg, dT as getTestDatabaseName, G as __unplugin_components_2, X as __unplugin_components_1 } from "./entry-3fb260b7.mjs";
import { r as readFile } from "./fileUtils-f5868683.mjs";
import { a as generateUniqueName } from "./generateName-b5da7037.mjs";
import { u as useSidebar } from "./index-42a23e87.mjs";
import { _ as __unplugin_components_5 } from "./index-23c6ffda.mjs";
import { _ as __unplugin_components_9, C as Collapse } from "./CollapsePanel-16b55852.mjs";
import { M as Modal } from "./Modal-ebea9398.mjs";
import { I as Input } from "./Input-131cc256.mjs";
import { S as SelectOption, _ as __unplugin_components_4 } from "./index-0190fa17.mjs";
import { _ as __unplugin_components_3 } from "./Password-5ba00449.mjs";
import { B as Button } from "./button-b581df9e.mjs";
import "./index-fbd19973.mjs";
import "./useState-8faa8040.mjs";
import "./omit-e185a391.mjs";
import "./RightOutlined-bc158d3e.mjs";
import "./pickAttrs-557680ad.mjs";
import "./antInputDirective-04640d14.mjs";
import "./SearchOutlined-205148f4.mjs";
import "./wave-30eabfab.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create-external",
  setup(__props, { expose }) {
    expose();
    const useForm = Form.useForm;
    const testSuccess = ref(false);
    const { api, isLoading } = useApi();
    const { $e } = useNuxtApp();
    useSidebar({ hasSidebar: false });
    const { t } = useI18n();
    const formState = ref({
      title: "",
      dataSource: { ...getDefaultConnectionConfig(ClientType.MYSQL) },
      inflection: {
        inflectionColumn: "camelize",
        inflectionTable: "camelize"
      },
      sslUse: "No"
    });
    const validators = computed(() => {
      return {
        "title": [
          {
            required: true,
            message: "Project name is required"
          },
          projectTitleValidator
        ],
        "dataSource.client": [fieldRequiredValidator],
        ...formState.value.dataSource.client === ClientType.SQLITE ? {
          "dataSource.connection.connection.filename": [fieldRequiredValidator]
        } : {
          "dataSource.connection.host": [fieldRequiredValidator],
          "dataSource.connection.port": [fieldRequiredValidator],
          "dataSource.connection.user": [fieldRequiredValidator],
          "dataSource.connection.password": [fieldRequiredValidator],
          "dataSource.connection.database": [fieldRequiredValidator],
          ...[ClientType.PG, ClientType.MSSQL].includes(formState.value.dataSource.client) ? {
            "dataSource.searchPath.0": [fieldRequiredValidator]
          } : {}
        }
      };
    });
    const { validate, validateInfos } = useForm(formState.value, validators);
    const onClientChange = () => {
      formState.value.dataSource = { ...getDefaultConnectionConfig(formState.value.dataSource.client) };
    };
    const inflectionTypes = ["camelize", "none"];
    const configEditDlg = ref(false);
    watch(() => formState.value.title, (v) => formState.value.dataSource.connection.database = `${v == null ? void 0 : v.trim()}_noco`);
    formState.value.title = generateUniqueName();
    const caFileInput = ref();
    const keyFileInput = ref();
    const certFileInput = ref();
    const onFileSelect = (key, el) => {
      readFile(el, (content) => {
        if ("ssl" in formState.value.dataSource.connection && formState.value.dataSource.connection.ssl)
          formState.value.dataSource.connection.ssl[key] = content != null ? content : "";
      });
    };
    const sslFilesRequired = computed(() => {
      var _a;
      return ((_a = formState.value) == null ? void 0 : _a.sslUse) && formState.value.sslUse !== "No";
    });
    function getConnectionConfig() {
      const connection = {
        ...formState.value.dataSource.connection
      };
      if ("ssl" in connection && connection.ssl && (!sslFilesRequired || Object.values(connection.ssl).every((v) => !v))) {
        delete connection.ssl;
      }
      return connection;
    }
    const form = ref();
    const focusInvalidInput = () => {
      var _a, _b, _c, _d, _e;
      (_e = (_d = (_c = (_b = (_a = form == null ? void 0 : form.value) == null ? void 0 : _a.$el.querySelector(".ant-form-item-explain-error")) == null ? void 0 : _b.parentNode) == null ? void 0 : _c.parentNode) == null ? void 0 : _d.querySelector("input")) == null ? void 0 : _e.focus();
    };
    const createProject = async () => {
      try {
        await validate();
      } catch (e) {
        focusInvalidInput();
        return;
      }
      try {
        const connection = getConnectionConfig();
        const config = { ...formState.value.dataSource, connection };
        const result = await api.project.create({
          title: formState.value.title,
          bases: [
            {
              type: formState.value.dataSource.client,
              config,
              inflection_column: formState.value.inflection.inflectionColumn,
              inflection_table: formState.value.inflection.inflectionTable
            }
          ],
          external: true
        });
        $e("a:project:create:extdb");
        await navigateTo(`/nc/${result.id}`);
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    };
    const testConnection = async () => {
      try {
        await validate();
      } catch (e) {
        focusInvalidInput();
        return;
      }
      $e("a:project:create:extdb:test-connection", []);
      try {
        if (formState.value.dataSource.client === ClientType.SQLITE) {
          testSuccess.value = true;
        } else {
          const connection = getConnectionConfig();
          connection.database = getTestDatabaseName(formState.value.dataSource);
          const testConnectionConfig = {
            ...formState.value.dataSource,
            connection
          };
          const result = await api.utils.testConnection(testConnectionConfig);
          if (result.code === 0) {
            testSuccess.value = true;
            Modal.confirm({
              title: t("msg.info.dbConnected"),
              icon: null,
              type: "success",
              okText: t("activity.OkSaveProject"),
              okType: "primary",
              cancelText: "Cancel",
              onOk: createProject
            });
          } else {
            testSuccess.value = false;
            message.error(`${t("msg.error.dbConnectionFailed")} ${result.message}`);
          }
        }
      } catch (e) {
        testSuccess.value = false;
        message.error(await extractSdkResponseErrorMsg(e));
      }
    };
    watch(() => formState.value.dataSource, () => testSuccess.value = false, { deep: true });
    onMounted(() => {
      nextTick(() => {
        setTimeout(() => {
          var _a, _b;
          const input = (_b = (_a = form.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.querySelector("input[type=text]");
          input.setSelectionRange(0, formState.value.title.length);
          input.focus();
        }, 500);
      });
    });
    const __returned__ = { useForm, testSuccess, api, isLoading, $e, t, formState, validators, validate, validateInfos, onClientChange, inflectionTypes, configEditDlg, caFileInput, keyFileInput, certFileInput, onFileSelect, sslFilesRequired, getConnectionConfig, form, focusInvalidInput, createProject, testConnection, clientTypes, navigateTo, sslUsage, ClientType };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "create-external bg-white relative flex flex-col justify-center gap-2 w-full p-8 md:rounded-lg md:border-1 md:border-gray-200 md:shadow-xl" };
const _hoisted_2 = { class: "prose-2xl font-bold self-center my-4" };
const _hoisted_3 = { class: "flex gap-2" };
const _hoisted_4 = { class: "flex justify-end" };
const _hoisted_5 = { class: "flex justify-center gap-2" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Submit ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_general_noco_icon = __nuxt_component_0;
  const _component_MdiChevronLeft = __unplugin_components_0;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4;
  const _component_a_input_number = __unplugin_components_5;
  const _component_a_input_password = __unplugin_components_3;
  const _component_a_button = Button;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_a_collapse_panel = __unplugin_components_9;
  const _component_a_collapse = Collapse;
  const _component_a_form = Form;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_general_noco_icon, {
      class: normalizeClass(["color-transition hover:ring hover:ring-accent", [$setup.isLoading ? "animated-bg-gradient" : ""]])
    }, null, 8, ["class"]),
    createBaseVNode("div", {
      class: "color-transition transform group absolute top-5 left-5 text-4xl rounded-full bg-white cursor-pointer",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.navigateTo("/"))
    }, [
      createVNode(_component_MdiChevronLeft, { class: "text-black group-hover:text-accent group-hover:scale-110" })
    ]),
    createBaseVNode("h1", _hoisted_2, toDisplayString(_ctx.$t("activity.createProject")), 1),
    createVNode(_component_a_form, {
      ref: "form",
      model: $setup.formState,
      name: "external-project-create-form",
      layout: "horizontal",
      "no-style": "",
      "label-col": { span: 8 }
    }, {
      default: withCtx(() => [
        createVNode(_component_a_form_item, mergeProps({
          label: _ctx.$t("placeholder.projName")
        }, $setup.validateInfos.title), {
          default: withCtx(() => [
            createVNode(_component_a_input, {
              value: $setup.formState.title,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.formState.title = $event),
              class: "nc-extdb-proj-name"
            }, null, 8, ["value"])
          ]),
          _: 1
        }, 16, ["label"]),
        createVNode(_component_a_form_item, mergeProps({
          label: _ctx.$t("labels.dbType")
        }, $setup.validateInfos["dataSource.client"]), {
          default: withCtx(() => [
            createVNode(_component_a_select, {
              value: $setup.formState.dataSource.client,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.formState.dataSource.client = $event),
              class: "nc-extdb-db-type",
              onChange: $setup.onClientChange
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.clientTypes, (client) => {
                  return openBlock(), createBlock(_component_a_select_option, {
                    key: client.value,
                    value: client.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(client.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 16, ["label"]),
        $setup.formState.dataSource.client === $setup.ClientType.SQLITE ? (openBlock(), createBlock(_component_a_form_item, mergeProps({
          key: 0,
          label: _ctx.$t("labels.sqliteFile")
        }, $setup.validateInfos["dataSource.connection.connection.filename"]), {
          default: withCtx(() => [
            createVNode(_component_a_input, {
              value: $setup.formState.dataSource.connection.connection.filename,
              "onUpdate:value": _cache[3] || (_cache[3] = ($event) => $setup.formState.dataSource.connection.connection.filename = $event)
            }, null, 8, ["value"])
          ]),
          _: 1
        }, 16, ["label"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_a_form_item, mergeProps({
            label: _ctx.$t("labels.hostAddress")
          }, $setup.validateInfos["dataSource.connection.host"]), {
            default: withCtx(() => [
              createVNode(_component_a_input, {
                value: $setup.formState.dataSource.connection.host,
                "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.formState.dataSource.connection.host = $event),
                class: "nc-extdb-host-address"
              }, null, 8, ["value"])
            ]),
            _: 1
          }, 16, ["label"]),
          createVNode(_component_a_form_item, mergeProps({
            label: _ctx.$t("labels.port")
          }, $setup.validateInfos["dataSource.connection.port"]), {
            default: withCtx(() => [
              createVNode(_component_a_input_number, {
                value: $setup.formState.dataSource.connection.port,
                "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.formState.dataSource.connection.port = $event),
                class: "!w-full nc-extdb-host-port"
              }, null, 8, ["value"])
            ]),
            _: 1
          }, 16, ["label"]),
          createVNode(_component_a_form_item, mergeProps({
            label: _ctx.$t("labels.username")
          }, $setup.validateInfos["dataSource.connection.user"]), {
            default: withCtx(() => [
              createVNode(_component_a_input, {
                value: $setup.formState.dataSource.connection.user,
                "onUpdate:value": _cache[6] || (_cache[6] = ($event) => $setup.formState.dataSource.connection.user = $event),
                class: "nc-extdb-host-user"
              }, null, 8, ["value"])
            ]),
            _: 1
          }, 16, ["label"]),
          createVNode(_component_a_form_item, {
            label: _ctx.$t("labels.password")
          }, {
            default: withCtx(() => [
              createVNode(_component_a_input_password, {
                value: $setup.formState.dataSource.connection.password,
                "onUpdate:value": _cache[7] || (_cache[7] = ($event) => $setup.formState.dataSource.connection.password = $event),
                class: "nc-extdb-host-password"
              }, null, 8, ["value"])
            ]),
            _: 1
          }, 8, ["label"]),
          createVNode(_component_a_form_item, mergeProps({
            label: _ctx.$t("labels.database")
          }, $setup.validateInfos["dataSource.connection.database"]), {
            default: withCtx(() => [
              createVNode(_component_a_input, {
                value: $setup.formState.dataSource.connection.database,
                "onUpdate:value": _cache[8] || (_cache[8] = ($event) => $setup.formState.dataSource.connection.database = $event),
                placeholder: _ctx.$t("labels.dbCreateIfNotExists"),
                class: "nc-extdb-host-database"
              }, null, 8, ["value", "placeholder"])
            ]),
            _: 1
          }, 16, ["label"]),
          [$setup.ClientType.MSSQL, $setup.ClientType.PG].includes($setup.formState.dataSource.client) && $setup.formState.dataSource.searchPath ? (openBlock(), createBlock(_component_a_form_item, mergeProps({
            key: 0,
            label: _ctx.$t("labels.schemaName")
          }, $setup.validateInfos["dataSource.searchPath.0"]), {
            default: withCtx(() => [
              createVNode(_component_a_input, {
                value: $setup.formState.dataSource.searchPath[0],
                "onUpdate:value": _cache[9] || (_cache[9] = ($event) => $setup.formState.dataSource.searchPath[0] = $event)
              }, null, 8, ["value"])
            ]),
            _: 1
          }, 16, ["label"])) : createCommentVNode("", true),
          createVNode(_component_a_collapse, {
            ghost: "",
            "expand-icon-position": "right",
            class: "!mt-6"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_collapse_panel, {
                key: "1",
                header: _ctx.$t("title.advancedParameters")
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_form_item, { label: "SSL mode" }, {
                    default: withCtx(() => [
                      createVNode(_component_a_select, {
                        value: $setup.formState.sslUse,
                        "onUpdate:value": _cache[10] || (_cache[10] = ($event) => $setup.formState.sslUse = $event),
                        onChange: $setup.onClientChange
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.sslUsage, (opt) => {
                            return openBlock(), createBlock(_component_a_select_option, {
                              key: opt,
                              value: opt
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(opt), 1)
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
                  createVNode(_component_a_form_item, { label: "SSL keys" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(_component_a_tooltip, { placement: "top" }, {
                          title: withCtx(() => [
                            createBaseVNode("span", null, toDisplayString(_ctx.$t("tooltip.clientCert")), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, {
                              disabled: !$setup.sslFilesRequired,
                              class: "shadow",
                              onClick: _cache[11] || (_cache[11] = ($event) => $setup.certFileInput.click())
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("labels.clientCert")), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tooltip, { placement: "top" }, {
                          title: withCtx(() => [
                            createBaseVNode("span", null, toDisplayString(_ctx.$t("tooltip.clientKey")), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, {
                              disabled: !$setup.sslFilesRequired,
                              class: "shadow",
                              onClick: _cache[12] || (_cache[12] = ($event) => $setup.keyFileInput.click())
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("labels.clientKey")), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tooltip, { placement: "top" }, {
                          title: withCtx(() => [
                            createBaseVNode("span", null, toDisplayString(_ctx.$t("tooltip.clientCA")), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, {
                              disabled: !$setup.sslFilesRequired,
                              class: "shadow",
                              onClick: _cache[13] || (_cache[13] = ($event) => $setup.caFileInput.click())
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("labels.serverCA")), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createBaseVNode("input", {
                    ref: "caFileInput",
                    type: "file",
                    class: "!hidden",
                    onChange: _cache[14] || (_cache[14] = ($event) => $setup.onFileSelect("ca", $setup.caFileInput))
                  }, null, 544),
                  createBaseVNode("input", {
                    ref: "certFileInput",
                    type: "file",
                    class: "!hidden",
                    onChange: _cache[15] || (_cache[15] = ($event) => $setup.onFileSelect("cert", $setup.certFileInput))
                  }, null, 544),
                  createBaseVNode("input", {
                    ref: "keyFileInput",
                    type: "file",
                    class: "!hidden",
                    onChange: _cache[16] || (_cache[16] = ($event) => $setup.onFileSelect("key", $setup.keyFileInput))
                  }, null, 544),
                  createVNode(_component_a_form_item, {
                    label: _ctx.$t("labels.inflection.tableName")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_select, {
                        value: $setup.formState.inflection.inflectionTable,
                        "onUpdate:value": _cache[17] || (_cache[17] = ($event) => $setup.formState.inflection.inflectionTable = $event),
                        onChange: $setup.onClientChange
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createElementBlock(Fragment, null, renderList($setup.inflectionTypes, (type) => {
                            return createVNode(_component_a_select_option, {
                              key: type,
                              value: type
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(type), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
                        ]),
                        _: 1
                      }, 8, ["value"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_a_form_item, {
                    label: _ctx.$t("labels.inflection.columnName")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_select, {
                        value: $setup.formState.inflection.inflectionColumn,
                        "onUpdate:value": _cache[18] || (_cache[18] = ($event) => $setup.formState.inflection.inflectionColumn = $event),
                        onChange: $setup.onClientChange
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createElementBlock(Fragment, null, renderList($setup.inflectionTypes, (type) => {
                            return createVNode(_component_a_select_option, {
                              key: type,
                              value: type
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(type), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
                        ]),
                        _: 1
                      }, 8, ["value"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(_component_a_button, {
                      class: "!shadow-md",
                      onClick: _cache[19] || (_cache[19] = ($event) => $setup.configEditDlg = true)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("activity.editConnJson")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["header"])
            ]),
            _: 1
          })
        ], 64)),
        createVNode(_component_a_form_item, { class: "flex justify-center !mt-5" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_a_button, {
                type: "primary",
                ghost: "",
                class: "nc-extdb-btn-test-connection",
                onClick: $setup.testConnection
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("activity.testDbConn")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_button, {
                type: "primary",
                disabled: !$setup.testSuccess,
                class: "nc-extdb-btn-submit !shadow",
                onClick: $setup.createProject
              }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model"])
  ]);
}
var createExternal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-397c5d62"]]);
export { createExternal as default };
