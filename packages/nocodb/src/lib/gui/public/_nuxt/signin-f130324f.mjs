import { _ as __nuxt_component_0 } from "./NocoIcon-db0acad1.mjs";
import { _ as _export_sfc, d as defineComponent, m as useGlobal, N as useApi, M as useI18n, r as ref, n as reactive, bX as isEmail, o as openBlock, j as createBlock, h as withCtx, dE as __nuxt_component_2, b as createBaseVNode, g as createVNode, A as normalizeClass, v as toDisplayString, aP as Transition, c as createElementBlock, k as createCommentVNode, y as createTextVNode, dp as navigateTo, K as extractSdkResponseErrorMsg, G as __unplugin_components_2, am as __nuxt_component_1, H as Form } from "./entry-d9bc2aad.mjs";
import { _ as __unplugin_components_4 } from "./login-ce5c6a45.mjs";
import { _ as __unplugin_components_0 } from "./warning-18d39687.mjs";
import { u as useSidebar } from "./index-80bcfe34.mjs";
import { I as Input } from "./Input-11f8ddea.mjs";
import { _ as __unplugin_components_3 } from "./Password-e454255a.mjs";
import "./antInputDirective-04640d14.mjs";
import "./omit-79be01c9.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signin",
  setup(__props, { expose }) {
    expose();
    const { signIn: _signIn } = useGlobal();
    const { api, isLoading } = useApi();
    const { t } = useI18n();
    useSidebar({ hasSidebar: false });
    const formValidator = ref();
    let error = ref(null);
    const form = reactive({
      email: "",
      password: ""
    });
    const formRules = {
      email: [
        { required: true, message: t("msg.error.signUpRules.emailReqd") },
        {
          validator: (_, v) => {
            return new Promise((resolve, reject) => {
              if (isEmail(v))
                return resolve();
              reject(new Error(t("msg.error.signUpRules.emailInvalid")));
            });
          },
          message: t("msg.error.signUpRules.emailInvalid")
        }
      ],
      password: [
        { required: true, message: t("msg.error.signUpRules.passwdRequired") }
      ]
    };
    async function signIn() {
      if (!formValidator.value.validate())
        return;
      resetError();
      api.auth.signin(form).then(async ({ token }) => {
        _signIn(token);
        await navigateTo("/");
      }).catch(async (err) => {
        error.value = await extractSdkResponseErrorMsg(err);
      });
    }
    function resetError() {
      if (error.value)
        error.value = null;
    }
    const __returned__ = { _signIn, api, isLoading, t, formValidator, error, form, formRules, signIn, resetError };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "md:bg-primary bg-opacity-5 signin h-full min-h-[600px] flex flex-col justify-center items-center nc-form-signin" };
const _hoisted_2 = { class: "bg-white mt-[60px] relative flex flex-col justify-center gap-2 w-full max-w-[500px] mx-auto p-8 md:rounded-lg md:border-1 md:border-gray-200 md:shadow-xl" };
const _hoisted_3 = { class: "prose-2xl font-bold self-center my-4" };
const _hoisted_4 = {
  key: 0,
  class: "self-center mb-4 bg-red-500 text-white rounded-lg w-3/4 mx-auto p-1"
};
const _hoisted_5 = { class: "flex items-center gap-2 justify-center" };
const _hoisted_6 = { class: "break-words" };
const _hoisted_7 = { class: "hidden md:block text-right" };
const _hoisted_8 = { class: "self-center flex flex-col flex-wrap gap-4 items-center mt-4 justify-center" };
const _hoisted_9 = {
  class: "submit group",
  type: "submit"
};
const _hoisted_10 = { class: "flex items-center gap-2" };
const _hoisted_11 = { class: "text-end prose-sm" };
const _hoisted_12 = { class: "md:hidden" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_general_noco_icon = __nuxt_component_0;
  const _component_MaterialSymbolsWarning = __unplugin_components_0;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2;
  const _component_a_input_password = __unplugin_components_3;
  const _component_nuxt_link = __nuxt_component_1;
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
          createBaseVNode("h1", _hoisted_3, toDisplayString(_ctx.$t("general.signIn")), 1),
          createVNode(_component_a_form, {
            ref: "formValidator",
            model: $setup.form,
            layout: "vertical",
            "no-style": "",
            onFinish: $setup.signIn
          }, {
            default: withCtx(() => [
              createVNode(Transition, { name: "layout" }, {
                default: withCtx(() => [
                  $setup.error ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(_component_MaterialSymbolsWarning),
                      createBaseVNode("div", _hoisted_6, toDisplayString($setup.error), 1)
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
              createVNode(_component_a_form_item, {
                label: _ctx.$t("labels.password"),
                name: "password",
                rules: $setup.formRules.password
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_input_password, {
                    value: $setup.form.password,
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.form.password = $event),
                    size: "large",
                    class: "password",
                    placeholder: _ctx.$t("msg.info.signUp.enterPassword"),
                    onFocus: $setup.resetError
                  }, null, 8, ["value", "placeholder"])
                ]),
                _: 1
              }, 8, ["label", "rules"]),
              createBaseVNode("div", _hoisted_7, [
                createVNode(_component_nuxt_link, {
                  class: "prose-sm",
                  to: "/forgot-password"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("msg.info.signUp.forgotPassword")), 1)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("button", _hoisted_9, [
                  createBaseVNode("span", _hoisted_10, [
                    createVNode(_component_MdiLogin),
                    createTextVNode(" " + toDisplayString(_ctx.$t("general.signIn")), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createTextVNode(toDisplayString(_ctx.$t("msg.info.signUp.dontHaveAccount")) + " ", 1),
                  createVNode(_component_nuxt_link, { to: "/signup" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("general.signUp")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createVNode(_component_nuxt_link, {
                    class: "prose-sm",
                    to: "/forgot-password"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("msg.info.signUp.forgotPassword")), 1)
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
var signin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { signin as default };
