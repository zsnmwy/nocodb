import { _ as __nuxt_component_0 } from "./NocoIcon-8acc214e.mjs";
import { a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3, d as __nuxt_component_4 } from "./Cell-e9645bc0.mjs";
import { _ as _export_sfc, d as defineComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, g as createVNode, A as normalizeClass, v as toDisplayString, k as createCommentVNode, j as createBlock, h as withCtx, F as Fragment, f as renderList, l as isVirtualCol, U as UITypes, R as RelationTypes, y as createTextVNode, G as __unplugin_components_2$1, H as Form } from "./entry-fe2e349d.mjs";
import { u as useSharedFormStoreOrThrow } from "./useSharedFormViewStore-4a716915.mjs";
import "./index-6bff7ef6.mjs";
import { M as Modal } from "./Modal-6ec32f67.mjs";
import { _ as __unplugin_components_0 } from "./index-1ad3b9bc.mjs";
import { B as Button } from "./button-85170489.mjs";
import { _ as __unplugin_components_2 } from "./Title-a5de800c.mjs";
import { _ as __unplugin_components_3 } from "./Password-2bc07ccd.mjs";
import "./useVirtualCell-79bce99d.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-c79a04bb.mjs";
import "./index-03dd499c.mjs";
import "./dropdown-2e9bbb3f.mjs";
import "./Dropdown-d7fe3574.mjs";
import "./index-e4541ed7.mjs";
import "./RightOutlined-593486a9.mjs";
import "./omit-bb2337ec.mjs";
import "./delete-outline-809194cc.mjs";
import "./menu-down-d9199e40.mjs";
import "./index-8ed197cb.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./TextArea-19a941ff.mjs";
import "./Input-a826c0f4.mjs";
import "./antInputDirective-04640d14.mjs";
import "./Card-6955c823.mjs";
import "./index-d5212021.mjs";
import "./TabPane-95cc1419.mjs";
import "./useState-b38ec006.mjs";
import "./star-outline-d6c974b1.mjs";
import "./index-e208122b.mjs";
import "./index-b5c7d9eb.mjs";
import "./LeftOutlined-b3330d93.mjs";
import "./index-80dcfdcf.mjs";
import "./pickAttrs-251338d2.mjs";
import "./SearchOutlined-a319fe5d.mjs";
import "./CollapsePanel-4933ec03.mjs";
import "./minus-circle-outline-a8e6550b.mjs";
import "./Checkbox-fdabe561.mjs";
import "./close-f6b140f8.mjs";
import "./plus-0f42eb0d.mjs";
import "./file-copy-outline-caf79cf0.mjs";
import "./reload-21536936.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-964d6d26.mjs";
import "./wave-51bede47.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const {
      sharedFormView,
      submitForm,
      v$,
      formState,
      notFound,
      formColumns,
      submitted,
      secondsRemain,
      passwordDlg,
      password,
      loadSharedView,
      isLoading
    } = useSharedFormStoreOrThrow();
    function isRequired(_columnObj, required = false) {
      var _a;
      let columnObj = _columnObj;
      if (columnObj.uidt === UITypes.LinkToAnotherRecord && columnObj.colOptions && columnObj.colOptions.type === RelationTypes.BELONGS_TO) {
        columnObj = (_a = formColumns.value) == null ? void 0 : _a.find((c) => c.id === columnObj.colOptions.fk_child_column_id);
      }
      return !!(required || columnObj && columnObj.rqd && !columnObj.cdf);
    }
    const __returned__ = { sharedFormView, submitForm, v$, formState, notFound, formColumns, submitted, secondsRemain, passwordDlg, password, loadSharedView, isLoading, isRequired, isVirtualCol };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "nc-form-view md:bg-primary bg-opacity-5 h-full min-h-[600px] flex flex-col justify-center items-center nc-form-signin" };
const _hoisted_2 = { class: "bg-white mt-[60px] relative flex flex-col justify-center gap-2 w-full lg:max-w-1/2 max-w-500px mx-auto p-8 md:rounded-lg md:border-1 md:border-gray-200 md:shadow-xl" };
const _hoisted_3 = { class: "prose-2xl font-bold self-center my-4" };
const _hoisted_4 = {
  key: 0,
  class: "prose-lg text-gray-500 self-center"
};
const _hoisted_5 = {
  key: 2,
  class: "flex justify-center"
};
const _hoisted_6 = {
  key: 0,
  class: "min-w-350px mt-3"
};
const _hoisted_7 = {
  key: 0,
  class: "text-xs text-gray-500 text-center my-4"
};
const _hoisted_8 = {
  key: 1,
  class: "text-center"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Submit Another Form");
const _hoisted_10 = {
  key: 3,
  class: "nc-form-wrapper"
};
const _hoisted_11 = { class: "nc-form h-full max-w-3/4 mx-auto" };
const _hoisted_12 = { class: "flex" };
const _hoisted_13 = {
  key: 0,
  class: "mt-0"
};
const _hoisted_14 = {
  key: 0,
  class: "text-gray-500 text-[10px] mb-2 ml-1"
};
const _hoisted_15 = {
  key: 1,
  class: "mt-0"
};
const _hoisted_16 = {
  key: 0,
  class: "text-gray-500 text-[10px] mb-2 ml-1"
};
const _hoisted_17 = { class: "text-center my-9" };
const _hoisted_18 = { class: "w-full flex flex-col" };
const _hoisted_19 = /* @__PURE__ */ createTextVNode("This shared view is protected");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("Unlock");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_general_noco_icon = __nuxt_component_0;
  const _component_a_alert = __unplugin_components_0;
  const _component_a_button = Button;
  const _component_SmartsheetHeaderVirtualCell = __nuxt_component_1;
  const _component_SmartsheetHeaderCell = __nuxt_component_2;
  const _component_SmartsheetVirtualCell = __nuxt_component_3;
  const _component_SmartsheetCell = __nuxt_component_4;
  const _component_a_typography_title = __unplugin_components_2;
  const _component_a_input_password = __unplugin_components_3;
  const _component_a_form_item = __unplugin_components_2$1;
  const _component_a_form = Form;
  const _component_a_modal = Modal;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_general_noco_icon, {
        class: normalizeClass(["color-transition hover:ring hover:ring-accent", [$setup.isLoading ? "animated-bg-gradient" : ""]])
      }, null, 8, ["class"]),
      createBaseVNode("h1", _hoisted_3, toDisplayString($setup.sharedFormView.heading), 1),
      $setup.sharedFormView.subheading ? (openBlock(), createElementBlock("h2", _hoisted_4, toDisplayString($setup.sharedFormView.subheading), 1)) : createCommentVNode("", true),
      $setup.notFound ? (openBlock(), createBlock(_component_a_alert, {
        key: 1,
        type: "warning",
        class: "my-4 text-center",
        message: "Not found"
      })) : $setup.submitted ? (openBlock(), createElementBlock("div", _hoisted_5, [
        $setup.sharedFormView ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createVNode(_component_a_alert, {
            type: "success",
            class: "my-4 text-center",
            outlined: "",
            message: $setup.sharedFormView.success_msg || "Successfully submitted form data"
          }, null, 8, ["message"]),
          $setup.sharedFormView.show_blank_form ? (openBlock(), createElementBlock("p", _hoisted_7, " New form will be loaded after " + toDisplayString($setup.secondsRemain) + " seconds ", 1)) : createCommentVNode("", true),
          $setup.sharedFormView.submit_another_form ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createVNode(_component_a_button, {
              type: "primary",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.submitted = false)
            }, {
              default: withCtx(() => [
                _hoisted_9
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ])) : $setup.sharedFormView ? (openBlock(), createElementBlock("div", _hoisted_10, [
        createBaseVNode("div", _hoisted_11, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.formColumns, (field, index2) => {
            var _a, _b;
            return openBlock(), createElementBlock("div", {
              key: index2,
              class: "flex flex-col my-6 gap-2"
            }, [
              createBaseVNode("div", _hoisted_12, [
                $setup.isVirtualCol(field) ? (openBlock(), createBlock(_component_SmartsheetHeaderVirtualCell, {
                  key: 0,
                  column: { ...field, title: field.label || field.title },
                  required: $setup.isRequired(field, field.required),
                  "hide-menu": true
                }, null, 8, ["column", "required"])) : (openBlock(), createBlock(_component_SmartsheetHeaderCell, {
                  key: 1,
                  column: { ...field, title: field.label || field.title },
                  required: $setup.isRequired(field, field.required),
                  "hide-menu": true
                }, null, 8, ["column", "required"]))
              ]),
              $setup.isVirtualCol(field) ? (openBlock(), createElementBlock("div", _hoisted_13, [
                createVNode(_component_SmartsheetVirtualCell, {
                  class: "mt-0 nc-input",
                  column: field
                }, null, 8, ["column"]),
                field.description ? (openBlock(), createElementBlock("div", _hoisted_14, toDisplayString(field.description), 1)) : createCommentVNode("", true),
                $setup.v$.virtual.$dirty && ((_a = $setup.v$.virtual) == null ? void 0 : _a[field.title]) ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($setup.v$.virtual[field.title].$errors, (error) => {
                  return openBlock(), createElementBlock("div", {
                    key: error,
                    class: "text-xs text-red-500"
                  }, toDisplayString(error.$message), 1);
                }), 128)) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("div", _hoisted_15, [
                createVNode(_component_SmartsheetCell, {
                  modelValue: $setup.formState[field.title],
                  "onUpdate:modelValue": ($event) => $setup.formState[field.title] = $event,
                  class: "nc-input",
                  column: field,
                  "edit-enabled": true
                }, null, 8, ["modelValue", "onUpdate:modelValue", "column"]),
                field.description ? (openBlock(), createElementBlock("div", _hoisted_16, toDisplayString(field.description), 1)) : createCommentVNode("", true),
                $setup.v$.localState.$dirty && ((_b = $setup.v$.localState) == null ? void 0 : _b[field.title]) ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($setup.v$.localState[field.title].$errors, (error) => {
                  return openBlock(), createElementBlock("div", {
                    key: error,
                    class: "text-xs text-red-500"
                  }, toDisplayString(error.$message), 1);
                }), 128)) : createCommentVNode("", true)
              ]))
            ]);
          }), 128)),
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("button", {
              type: "submit",
              class: "submit",
              onClick: _cache[1] || (_cache[1] = (...args) => $setup.submitForm && $setup.submitForm(...args))
            }, toDisplayString(_ctx.$t("general.submit")), 1)
          ])
        ])
      ])) : createCommentVNode("", true),
      createVNode(_component_a_modal, {
        visible: $setup.passwordDlg,
        "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => $setup.passwordDlg = $event),
        closable: false,
        width: "28rem",
        centered: "",
        footer: null,
        "mask-closable": false,
        onClose: _cache[4] || (_cache[4] = ($event) => $setup.passwordDlg = false)
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_18, [
            createVNode(_component_a_typography_title, { level: 4 }, {
              default: withCtx(() => [
                _hoisted_19
              ]),
              _: 1
            }),
            createVNode(_component_a_form, {
              ref: "formRef",
              model: { password: $setup.password },
              class: "mt-2",
              onFinish: $setup.loadSharedView
            }, {
              default: withCtx(() => [
                createVNode(_component_a_form_item, {
                  name: "password",
                  rules: [{ required: true, message: _ctx.$t("msg.error.signUpRules.passwdRequired") }]
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_input_password, {
                      value: $setup.password,
                      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.password = $event),
                      placeholder: _ctx.$t("msg.info.signUp.enterPassword")
                    }, null, 8, ["value", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["rules"]),
                createVNode(_component_a_button, {
                  type: "primary",
                  "html-type": "submit"
                }, {
                  default: withCtx(() => [
                    _hoisted_20
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "onFinish"])
          ])
        ]),
        _: 1
      }, 8, ["visible"])
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
