import { _ as __nuxt_component_0 } from "./NocoIcon-7191150c.mjs";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, N as useApi, M as useI18n, r as ref, n as reactive, bX as isEmail, j as createBlock, h as withCtx, dE as __nuxt_component_2, g as createVNode, A as normalizeClass, v as toDisplayString, F as Fragment, y as createTextVNode, aP as Transition, k as createCommentVNode, K as extractSdkResponseErrorMsg, am as __nuxt_component_1, G as __unplugin_components_2, H as Form } from "./entry-61ceea7f.mjs";
import { _ as __unplugin_components_4 } from "./login-5e20f57e.mjs";
import { _ as __unplugin_components_0$1 } from "./warning-0666c5fe.mjs";
import "./index-4f266bad.mjs";
import { I as Input } from "./Input-081ff014.mjs";
import "./SearchOutlined-66b33d9a.mjs";
import "./index-cfa50bee.mjs";
import "./button-da542739.mjs";
import "./wave-52b13188.mjs";
import "./omit-173fd1c5.mjs";
import "./TextArea-4c687bd9.mjs";
import "./antInputDirective-04640d14.mjs";
import "./Password-b51c8941.mjs";
const _hoisted_1$1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 36 36",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z",
  class: "clr-i-outline clr-i-outline-path-1"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "none",
  d: "M0 0h36v36H0z"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
}
var __unplugin_components_0 = { name: "clarity-success-line", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forgot-password",
  setup(__props, { expose }) {
    expose();
    const { api, isLoading } = useApi();
    const { t } = useI18n();
    let error = ref(null);
    let success = ref(false);
    const formValidator = ref();
    const form = reactive({
      email: ""
    });
    const formRules = {
      email: [
        { required: true, message: t("msg.error.signUpRules.emailReqd") },
        {
          validator: (_, v) => {
            return new Promise((resolve, reject) => {
              if (isEmail(v))
                return resolve(true);
              reject(new Error(t("msg.error.signUpRules.emailInvalid")));
            });
          },
          message: t("msg.error.signUpRules.emailInvalid")
        }
      ]
    };
    async function resetPassword() {
      if (!formValidator.value.validate())
        return;
      resetError();
      try {
        await api.auth.passwordForgot(form);
        success.value = true;
      } catch (e) {
        error.value = await extractSdkResponseErrorMsg(e);
      }
    }
    function resetError() {
      if (error.value)
        error.value = null;
    }
    const __returned__ = { api, isLoading, t, error, success, formValidator, form, formRules, resetPassword, resetError };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "md:bg-primary bg-opacity-5 forgot-password h-full min-h-[600px] flex flex-col justify-center items-center" };
const _hoisted_2 = { class: "bg-white mt-[60px] relative flex flex-col justify-center gap-2 w-full max-w-[500px] mx-auto p-8 md:rounded-lg md:border-1 md:border-gray-200 md:shadow-xl" };
const _hoisted_3 = { class: "self-center flex flex-col justify-center items-center text-center gap-2" };
const _hoisted_4 = { class: "prose-2xl font-bold my-4 w-full" };
const _hoisted_5 = { class: "prose-sm" };
const _hoisted_6 = { class: "prose-sm mb-4" };
const _hoisted_7 = { class: "prose-sm text-success flex items-center leading-8 gap-2" };
const _hoisted_8 = {
  key: 0,
  class: "self-center mb-4 bg-red-500 text-white rounded-lg w-3/4 mx-auto p-1"
};
const _hoisted_9 = { class: "flex items-center gap-2 justify-center" };
const _hoisted_10 = { class: "break-words" };
const _hoisted_11 = { class: "self-center flex flex-col gap-4 items-center justify-center w-full" };
const _hoisted_12 = {
  class: "submit",
  type: "submit"
};
const _hoisted_13 = { class: "flex items-center gap-2" };
const _hoisted_14 = { class: "text-end prose-sm" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_general_noco_icon = __nuxt_component_0;
  const _component_ClaritySuccessLine = __unplugin_components_0;
  const _component_nuxt_link = __nuxt_component_1;
  const _component_MaterialSymbolsWarning = __unplugin_components_0$1;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2;
  const _component_MdiLogin = __unplugin_components_4;
  const _component_a_form = Form;
  const _component_NuxtLayout = __nuxt_component_2;
  return openBlock(), createBlock(_component_NuxtLayout, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_general_noco_icon, {
            class: normalizeClass(["color-transition hover:ring hover:ring-accent", [$setup.isLoading ? "animated-bg-gradient" : ""]])
          }, null, 8, ["class"]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.$t("title.resetPassword")), 1),
            !$setup.success ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_5, toDisplayString(_ctx.$t("msg.info.passwordRecovery.message_1")), 1),
              createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("msg.info.passwordRecovery.message_2")), 1)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("div", _hoisted_7, [
                createTextVNode(toDisplayString(_ctx.$t("msg.info.passwordRecovery.success")) + " ", 1),
                createVNode(_component_ClaritySuccessLine)
              ]),
              createVNode(_component_nuxt_link, { to: "/signin" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("general.signIn")), 1)
                ]),
                _: 1
              })
            ], 64))
          ]),
          createVNode(_component_a_form, {
            ref: "formValidator",
            layout: "vertical",
            model: $setup.form,
            "no-style": "",
            onFinish: $setup.resetPassword
          }, {
            default: withCtx(() => [
              createVNode(Transition, { name: "layout" }, {
                default: withCtx(() => [
                  $setup.error ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createVNode(_component_MaterialSymbolsWarning),
                      createBaseVNode("div", _hoisted_10, toDisplayString($setup.error), 1)
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, {
                label: _ctx.$t("labels.email"),
                name: "email",
                rules: $setup.formRules.email
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_input, {
                    value: $setup.form.email,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.form.email = $event),
                    size: "large",
                    placeholder: _ctx.$t("msg.info.signUp.workEmail"),
                    onFocus: $setup.resetError
                  }, null, 8, ["value", "placeholder"])
                ]),
                _: 1
              }, 8, ["label", "rules"]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("button", _hoisted_12, [
                  createBaseVNode("span", _hoisted_13, [
                    createVNode(_component_MdiLogin),
                    createTextVNode(" " + toDisplayString(_ctx.$t("activity.sendEmail")), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createTextVNode(toDisplayString(_ctx.$t("msg.info.signUp.alreadyHaveAccount")) + " ", 1),
                  createVNode(_component_nuxt_link, { to: "/signin" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("general.signIn")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }, 8, ["model"])
        ])
      ])
    ]),
    _: 1
  });
}
var forgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { forgotPassword as default };
