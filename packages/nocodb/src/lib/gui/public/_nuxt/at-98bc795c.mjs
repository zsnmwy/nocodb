import { _ as _export_sfc, d as defineComponent, u as useNuxtApp, m as useGlobal, M as useI18n, e as computed, s as onMounted, o as openBlock, c as createElementBlock, F as Fragment, f as renderList, j as createBlock, h as withCtx, b as createBaseVNode, v as toDisplayString, A as normalizeClass, g as createVNode, dG as Language, Y as __unplugin_components_0 } from "./entry-61ceea7f.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  setup(__props, { expose }) {
    expose();
    const { $e } = useNuxtApp();
    const { lang: currentLang } = useGlobal();
    const { availableLocales = ["en"], locale } = useI18n();
    const languages = computed(() => availableLocales.sort());
    const isRtlLang = computed(() => ["fa"].includes(currentLang.value));
    function applyDirection() {
      const targetDirection = isRtlLang.value ? "rtl" : "ltr";
      const oppositeDirection = targetDirection === "ltr" ? "rtl" : "ltr";
      document.body.classList.remove(oppositeDirection);
      document.body.classList.add(targetDirection);
      document.body.style.direction = targetDirection;
    }
    function changeLanguage(lang) {
      currentLang.value = lang;
      locale.value = lang;
      applyDirection();
      $e("c:navbar:lang", { lang });
    }
    onMounted(() => {
      applyDirection();
    });
    const __returned__ = { $e, currentLang, availableLocales, locale, languages, isRtlLang, applyDirection, changeLanguage, Language };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = {
  href: "https://docs.nocodb.com/engineering/translation/#how-to-contribute--for-community-members",
  target: "_blank",
  class: "caption py-2 text-primary underline hover:opacity-75"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_menu_item = __unplugin_components_0;
  return openBlock(), createElementBlock(Fragment, null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.languages, (lang) => {
      return openBlock(), createBlock(_component_a_menu_item, {
        key: lang,
        class: normalizeClass([lang === $setup.locale ? "!bg-primary bg-opacity-10 text-primary" : "", "group"]),
        value: lang,
        onClick: ($event) => $setup.changeLanguage(lang)
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([lang === $setup.locale ? "!font-semibold !text-primary" : "", "nc-project-menu-item capitalize"])
          }, toDisplayString($setup.Language[lang] || lang), 3)
        ]),
        _: 2
      }, 1032, ["class", "value", "onClick"]);
    }), 128)),
    createVNode(_component_a_menu_item, { class: "mt-1" }, {
      default: withCtx(() => [
        createBaseVNode("a", _hoisted_1$4, toDisplayString(_ctx.$t("activity.translate")), 1)
      ]),
      _: 1
    })
  ], 64);
}
var __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const _hoisted_1$3 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var __unplugin_components_2 = { name: "mdi-dots-vertical", render: render$3 };
const _hoisted_1$2 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m11.9 22l4.55-12h2.1l4.55 12H21l-1.05-3.05H15.1L14 22Zm3.8-4.8h3.6l-1.75-4.95h-.1ZM4 19l-1.4-1.4l5.05-5.05q-.95-1.05-1.662-2.175Q5.275 9.25 4.75 8h2.1q.45.9.963 1.625q.512.725 1.237 1.525q1.1-1.2 1.825-2.462Q11.6 7.425 12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.775-1.425 3.45q-.9 1.675-2.225 3.15l2.4 2.45l-.75 2.05L9 14Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var __unplugin_components_12 = { name: "material-symbols-translate", render: render$2 };
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 17v-3H9v-4h7V7l5 5l-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_15 = { name: "mdi-logout", render: render$1 };
const _hoisted_1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 15c.81 0 1.5-.3 2.11-.89c.59-.61.89-1.3.89-2.11c0-.81-.3-1.5-.89-2.11C13.5 9.3 12.81 9 12 9c-.81 0-1.5.3-2.11.89C9.3 10.5 9 11.19 9 12c0 .81.3 1.5.89 2.11c.61.59 1.3.89 2.11.89m0-13c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12v1.45c0 1-.35 1.85-1 2.55c-.7.67-1.5 1-2.5 1c-1.2 0-2.19-.5-2.94-1.5c-1 1-2.18 1.5-3.56 1.5c-1.37 0-2.55-.5-3.54-1.46C7.5 14.55 7 13.38 7 12c0-1.37.5-2.55 1.46-3.54C9.45 7.5 10.63 7 12 7c1.38 0 2.55.5 3.54 1.46C16.5 9.45 17 10.63 17 12v1.45c0 .41.16.77.46 1.08c.3.31.65.47 1.04.47c.42 0 .77-.16 1.07-.47c.3-.31.43-.67.43-1.08V12c0-2.19-.77-4.07-2.35-5.65S14.19 4 12 4c-2.19 0-4.07.77-5.65 2.35S4 9.81 4 12c0 2.19.77 4.07 2.35 5.65S9.81 20 12 20h5v2h-5c-2.75 0-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var __unplugin_components_14 = { name: "mdi-at", render };
export { __unplugin_components_2 as _, __unplugin_components_12 as a, __nuxt_component_1 as b, __unplugin_components_14 as c, __unplugin_components_15 as d };
