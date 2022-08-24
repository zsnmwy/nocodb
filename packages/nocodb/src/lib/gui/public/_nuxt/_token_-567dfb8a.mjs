import { _ as __nuxt_component_0 } from "./NocoIcon-023b65d1.mjs";
import { o as openBlock, c as createElementBlock, e0 as createStaticVNode, _ as _export_sfc, d as defineComponent, u as useNuxtApp, $ as useRoute, m as useGlobal, N as useApi, M as useI18n, r as ref, n as reactive, bX as isEmail, j as createBlock, h as withCtx, dE as __nuxt_component_2, b as createBaseVNode, g as createVNode, A as normalizeClass, v as toDisplayString, k as createCommentVNode, aP as Transition, y as createTextVNode, dp as navigateTo, K as extractSdkResponseErrorMsg, G as __unplugin_components_2, am as __nuxt_component_1, H as Form } from "./entry-3fb260b7.mjs";
import { _ as __unplugin_components_4 } from "./rocket-launch-outline-403ca289.mjs";
import { _ as __unplugin_components_0 } from "./warning-b71ce3b9.mjs";
import { I as Input } from "./Input-131cc256.mjs";
import { _ as __unplugin_components_3 } from "./Password-5ba00449.mjs";
import { _ as __unplugin_components_6 } from "./index-62f8c948.mjs";
import "./antInputDirective-04640d14.mjs";
import "./omit-e185a391.mjs";
import "./wave-30eabfab.mjs";
function validatePassword(p) {
  let error = "";
  let progress = 0;
  let hint = null;
  let valid = true;
  if (!p) {
    error = "At least 8 letters with one Uppercase, one number and one special letter";
    valid = false;
  } else {
    if (!(p.length >= 8)) {
      error += "Atleast 8 letters. ";
      valid = false;
    } else {
      progress = Math.min(100, progress + 25);
    }
    if (!p.match(/.*[A-Z].*/)) {
      error += "One Uppercase Letter. ";
      valid = false;
    } else {
      progress = Math.min(100, progress + 25);
    }
    if (!p.match(/.*[0-9].*/)) {
      error += "One Number. ";
      valid = false;
    } else {
      progress = Math.min(100, progress + 25);
    }
    if (!p.match(/[$&+,:;=?@#|'<>.^*()%!_-]/)) {
      error += "One special letter. ";
      hint = "Allowed special character list :  $&+,:;=?@#|'<>.^*()%!_-";
      valid = false;
    } else {
      progress = Math.min(100, progress + 25);
    }
  }
  return { error, valid, progress, hint };
}
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 193",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"></path><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z"></path><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"></path><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"></path><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"></path>', 5);
const _hoisted_7$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_7$1);
}
var __unplugin_components_5 = { name: "logos-google-gmail", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[[token]]",
  setup(__props, { expose }) {
    expose();
    const { $e } = useNuxtApp();
    const route = useRoute();
    const { appInfo, signIn } = useGlobal();
    const { api, isLoading } = useApi();
    const { t } = useI18n();
    const formValidator = ref();
    let error = ref(null);
    const subscribe = ref(false);
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
              if (!(v == null ? void 0 : v.length) || isEmail(v))
                return resolve(true);
              reject(new Error(t("msg.error.signUpRules.emailInvalid")));
            });
          },
          message: t("msg.error.signUpRules.emailInvalid")
        }
      ],
      password: [
        {
          validator: (_, v) => {
            return new Promise((resolve, reject) => {
              const { error: error2, valid } = validatePassword(v);
              if (valid)
                return resolve(true);
              reject(new Error(error2));
            });
          }
        }
      ]
    };
    async function signUp() {
      if (!formValidator.value.validate())
        return;
      resetError();
      const data = {
        ...form,
        token: route.params.token
      };
      if (subscribe.value) {
        data.ignore_subscribe = !subscribe.value;
      }
      api.auth.signup(data).then(async ({ token }) => {
        signIn(token);
        await navigateTo("/");
        $e("a:auth:sign-up");
      }).catch(async (err) => {
        error.value = await extractSdkResponseErrorMsg(err);
      });
    }
    function resetError() {
      if (error.value)
        error.value = null;
    }
    const __returned__ = { $e, route, appInfo, signIn, api, isLoading, t, formValidator, error, subscribe, form, formRules, signUp, resetError };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "md:bg-primary bg-opacity-5 signup h-full min-h-[600px] flex flex-col justify-center items-center" };
const _hoisted_2 = { class: "bg-white mt-[60px] relative flex flex-col justify-center gap-2 w-full max-w-[500px] mx-auto p-8 md:rounded-lg md:border-1 md:border-gray-200 md:shadow-xl" };
const _hoisted_3 = { class: "prose-2xl font-bold self-center my-4" };
const _hoisted_4 = {
  key: 0,
  class: "prose !text-primary font-semibold self-center my-4"
};
const _hoisted_5 = {
  key: 0,
  class: "self-center mb-4 bg-red-500 text-white rounded-lg w-3/4 mx-auto p-1"
};
const _hoisted_6 = { class: "flex items-center gap-2 justify-center" };
const _hoisted_7 = { class: "break-words" };
const _hoisted_8 = { class: "self-center flex flex-col flex-wrap gap-4 items-center mt-4" };
const _hoisted_9 = {
  class: "submit",
  type: "submit"
};
const _hoisted_10 = { class: "flex items-center gap-2" };
const _hoisted_11 = ["href"];
const _hoisted_12 = { class: "flex items-center gap-2" };
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" Sign up with Google ");
const _hoisted_14 = { class: "flex items-center gap-2" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "prose-xs text-gray-500" }, "Subscribe to our weekly newsletter", -1);
const _hoisted_16 = { class: "text-end prose-sm" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "prose-sm mt-4 text-gray-500" }, [
  /* @__PURE__ */ createTextVNode(" By signing up, you agree to the "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "prose-sm !text-gray-500 underline",
    target: "_blank",
    href: "https://nocodb.com/policy-nocodb"
  }, "Terms of Service")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_general_noco_icon = __nuxt_component_0;
  const _component_MaterialSymbolsWarning = __unplugin_components_0;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2;
  const _component_a_input_password = __unplugin_components_3;
  const _component_MaterialSymbolsRocketLaunchOutline = __unplugin_components_4;
  const _component_LogosGoogleGmail = __unplugin_components_5;
  const _component_a_switch = __unplugin_components_6;
  const _component_nuxt_link = __nuxt_component_1;
  const _component_a_form = Form;
  const _component_NuxtLayout = __nuxt_component_2;
  return openBlock(), createBlock(_component_NuxtLayout, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_general_noco_icon, {
            class: normalizeClass(["color-transition hover:ring hover:ring-accent", [$setup.isLoading ? "animated-bg-gradient" : ""]])
          }, null, 8, ["class"]),
          createBaseVNode("h1", _hoisted_3, toDisplayString(_ctx.$t("general.signUp")) + " " + toDisplayString(_ctx.$route.query.redirect_to === "/referral" ? "& REFER" : "") + " " + toDisplayString(_ctx.$route.query.redirect_to === "/pricing" ? "& BUY" : ""), 1),
          $setup.appInfo.firstUser ? (openBlock(), createElementBlock("h2", _hoisted_4, toDisplayString(_ctx.$t("msg.info.signUp.superAdmin")), 1)) : createCommentVNode("", true),
          createVNode(_component_a_form, {
            ref: "formValidator",
            model: $setup.form,
            layout: "vertical",
            "no-style": "",
            onFinish: $setup.signUp
          }, {
            default: withCtx(() => [
              createVNode(Transition, { name: "layout" }, {
                default: withCtx(() => [
                  $setup.error ? (openBlock(), createElementBlock("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(_component_MaterialSymbolsWarning),
                      createBaseVNode("div", _hoisted_7, toDisplayString($setup.error), 1)
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
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("button", _hoisted_9, [
                  createBaseVNode("span", _hoisted_10, [
                    createVNode(_component_MaterialSymbolsRocketLaunchOutline),
                    createTextVNode(" " + toDisplayString(_ctx.$t("general.signUp")), 1)
                  ])
                ]),
                $setup.appInfo.googleAuthEnabled ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: `${$setup.api.instance.defaults.baseURL}/auth/google`,
                  class: "submit !after:bg-white !text-primary border-1 border-primary !no-underline"
                }, [
                  createBaseVNode("span", _hoisted_12, [
                    createVNode(_component_LogosGoogleGmail),
                    _hoisted_13
                  ])
                ], 8, _hoisted_11)) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_14, [
                  createVNode(_component_a_switch, {
                    checked: $setup.subscribe,
                    "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => $setup.subscribe = $event),
                    size: "small",
                    class: "my-1 hover:ring hover:ring-accent !focus:ring !focus:ring-accent"
                  }, null, 8, ["checked"]),
                  _hoisted_15
                ]),
                createBaseVNode("div", _hoisted_16, [
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
        ]),
        _hoisted_17
      ])
    ]),
    _: 1
  });
}
var __token__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __token__ as default };
