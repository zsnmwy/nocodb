import { o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, N as useApi, M as useI18n, m as useGlobal, r as ref, n as reactive, g as createVNode, h as withCtx, H as Form, v as toDisplayString, aP as Transition, y as createTextVNode, k as createCommentVNode, I as message, dp as navigateTo, K as extractSdkResponseErrorMsg, G as __unplugin_components_2 } from "./entry-d9bc2aad.mjs";
import { _ as __unplugin_components_0 } from "./warning-18d39687.mjs";
import { _ as __unplugin_components_3$1 } from "./Password-e454255a.mjs";
import "./Input-11f8ddea.mjs";
import "./antInputDirective-04640d14.mjs";
import "./omit-79be01c9.mjs";
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M7.5 2c2 0 3.6 1.2 4.2 3H21v3h-3v3h-3V8h-3.3c-.6 1.8-2.3 3-4.2 3C5 11 3 9 3 6.5S5 2 7.5 2m0 3C6.7 5 6 5.7 6 6.5S6.7 8 7.5 8S9 7.3 9 6.5S8.3 5 7.5 5m0 8c2 0 3.6 1.2 4.2 3H21v3h-1v3h-2v-3h-2v3h-3v-3h-1.3c-.6 1.8-2.3 3-4.2 3C5 22 3 20 3 17.5S5 13 7.5 13m0 3c-.8 0-1.5.7-1.5 1.5S6.7 19 7.5 19S9 18.3 9 17.5S8.3 16 7.5 16Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_3 = { name: "mdi-key-change", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const { api } = useApi();
    const { t } = useI18n();
    const { signOut } = useGlobal();
    const formValidator = ref();
    let error = ref(null);
    const form = reactive({
      currentPassword: "",
      password: "",
      passwordRepeat: ""
    });
    const formRules = {
      currentPassword: [
        { required: true, message: t("msg.error.signUpRules.passwdRequired") }
      ],
      password: [
        { required: true, message: t("msg.error.signUpRules.passwdRequired") },
        { min: 8, message: t("msg.error.signUpRules.passwdLength") }
      ],
      passwordRepeat: [
        { required: true, message: t("msg.error.signUpRules.passwdRequired") },
        {
          validator: (_, _v) => {
            return new Promise((resolve, reject) => {
              if (form.password === form.passwordRepeat)
                return resolve(true);
              reject(new Error(t("msg.error.signUpRules.passwdMismatch")));
            });
          },
          message: t("msg.error.signUpRules.passwdMismatch")
        }
      ]
    };
    const passwordChange = async () => {
      const valid = formValidator.value.validate();
      if (!valid)
        return;
      error.value = null;
      try {
        await api.auth.passwordChange({
          currentPassword: form.currentPassword,
          newPassword: form.password
        });
        message.success("Password changed successfully. Please login again.");
        signOut();
        navigateTo("/signin");
      } catch (e) {
        error.value = await extractSdkResponseErrorMsg(e);
      }
    };
    const resetError = () => {
      if (error.value) {
        error.value = null;
      }
    };
    const __returned__ = { api, t, signOut, formValidator, error, form, formRules, passwordChange, resetError };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "mt-4 w-1/2 mx-auto" };
const _hoisted_2 = { class: "md:relative flex flex-col gap-2 w-full h-full p-8 w-full" };
const _hoisted_3 = { class: "prose-2xl font-bold mb-4" };
const _hoisted_4 = {
  key: 0,
  class: "self-center mb-4 bg-red-500 text-white rounded-lg w-3/4 p-1"
};
const _hoisted_5 = { class: "flex items-center gap-2 justify-center" };
const _hoisted_6 = { class: "flex flex-wrap gap-4 items-center mt-4 md:justify-between w-full" };
const _hoisted_7 = {
  class: "submit",
  type: "submit"
};
const _hoisted_8 = { class: "flex items-center gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MaterialSymbolsWarning = __unplugin_components_0;
  const _component_a_input_password = __unplugin_components_3$1;
  const _component_a_form_item = __unplugin_components_2;
  const _component_MdiKeyChange = __unplugin_components_3;
  const _component_a_form = Form;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_a_form, {
      ref: "formValidator",
      layout: "vertical",
      model: $setup.form,
      class: "change-password",
      onFinish: $setup.passwordChange
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h1", _hoisted_3, toDisplayString(_ctx.$t("activity.changePwd")), 1),
          createVNode(Transition, { name: "layout" }, {
            default: withCtx(() => [
              $setup.error ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_MaterialSymbolsWarning),
                  createTextVNode(" " + toDisplayString($setup.error), 1)
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(_component_a_form_item, {
            label: _ctx.$t("placeholder.password.current"),
            name: "currentPassword",
            rules: $setup.formRules.currentPassword
          }, {
            default: withCtx(() => [
              createVNode(_component_a_input_password, {
                value: $setup.form.currentPassword,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.form.currentPassword = $event),
                size: "large",
                class: "password",
                placeholder: _ctx.$t("placeholder.password.current"),
                onFocus: $setup.resetError
              }, null, 8, ["value", "placeholder"])
            ]),
            _: 1
          }, 8, ["label", "rules"]),
          createVNode(_component_a_form_item, {
            label: _ctx.$t("placeholder.password.new"),
            name: "password",
            rules: $setup.formRules.password
          }, {
            default: withCtx(() => [
              createVNode(_component_a_input_password, {
                value: $setup.form.password,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.form.password = $event),
                size: "large",
                class: "password",
                placeholder: _ctx.$t("placeholder.password.new"),
                onFocus: $setup.resetError
              }, null, 8, ["value", "placeholder"])
            ]),
            _: 1
          }, 8, ["label", "rules"]),
          createVNode(_component_a_form_item, {
            label: _ctx.$t("placeholder.password.confirm"),
            name: "passwordRepeat",
            rules: $setup.formRules.passwordRepeat
          }, {
            default: withCtx(() => [
              createVNode(_component_a_input_password, {
                value: $setup.form.passwordRepeat,
                "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.form.passwordRepeat = $event),
                size: "large",
                class: "password",
                placeholder: _ctx.$t("placeholder.password.confirm"),
                onFocus: $setup.resetError
              }, null, 8, ["value", "placeholder"])
            ]),
            _: 1
          }, 8, ["label", "rules"]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("button", _hoisted_7, [
              createBaseVNode("span", _hoisted_8, [
                createVNode(_component_MdiKeyChange),
                createTextVNode(" " + toDisplayString(_ctx.$t("activity.changePwd")), 1)
              ])
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["model"])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
