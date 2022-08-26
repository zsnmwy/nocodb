import { o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, u as useNuxtApp, m as useGlobal, e as computed, s as onMounted, g as createVNode, h as withCtx, y as createTextVNode, v as toDisplayString, k as createCommentVNode, I as message, K as extractSdkResponseErrorMsg, am as __nuxt_component_1$1, j as createBlock, aj as mergeProps, a1 as Menu, a9 as useProject, $ as useRoute, r as ref, t as resolveDirective, B as withDirectives, aq as vShow, aP as Transition, A as normalizeClass, x as withModifiers, a5 as renderSlot, dp as navigateTo, C as pushScopeId, E as popScopeId, X as __unplugin_components_1, Y as __unplugin_components_0$1, ao as __unplugin_components_5$1, dF as _imports_0 } from "./entry-649fbf77.mjs";
import { _ as __unplugin_components_5 } from "./close-f8bfc949.mjs";
import { M as MdiMenuDown } from "./menu-down-e5889364.mjs";
import { B as Button } from "./button-65b4020b.mjs";
import { _ as __unplugin_components_2$1 } from "./index-14c9a254.mjs";
import { D as Dropdown } from "./dropdown-7a7d5830.mjs";
import { a as __unplugin_components_12, b as __nuxt_component_1$2, _ as __unplugin_components_2$2, c as __unplugin_components_14, d as __unplugin_components_15 } from "./at-c4dbbe4f.mjs";
import { _ as __unplugin_components_0 } from "./reload-8e7c8b3b.mjs";
import { c as LayoutHeader, _ as __unplugin_components_2$3 } from "./index-d05dbf89.mjs";
import "./wave-1595a9a4.mjs";
import "./Dropdown-e42ed6e8.mjs";
import "./index-a2900c1e.mjs";
import "./RightOutlined-d6864b4a.mjs";
import "./omit-52a539d6.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./LeftOutlined-863c43a5.mjs";
const _hoisted_1$3 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m13.13 22.19l-1.63-3.83c1.57-.58 3.04-1.36 4.4-2.27l-2.77 6.1M5.64 12.5l-3.83-1.63l6.1-2.77C7 9.46 6.22 10.93 5.64 12.5M19.22 4c.28 0 .53 0 .74.05c.17 1.39-.02 4.25-3.3 7.53c-1.7 1.71-3.73 3.02-6.01 3.89l-2.15-2.1c.92-2.31 2.23-4.34 3.92-6.03C15.18 4.58 17.64 4 19.22 4m0-2c-1.98 0-4.98.69-8.22 3.93c-2.19 2.19-3.5 4.6-4.35 6.71c-.28.75-.09 1.57.46 2.13l2.13 2.12c.38.38.89.61 1.42.61c.23 0 .47-.06.7-.15A19.1 19.1 0 0 0 18.07 13c5.66-5.66 3.54-10.61 3.54-10.61S20.7 2 19.22 2m-4.68 7.46c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c.77.78.78 2.05 0 2.83c-.78.78-2.05.78-2.83 0m-5.66 7.07l-1.41-1.41l1.41 1.41M6.24 22l3.64-3.64c-.34-.09-.67-.24-.97-.45L4.83 22h1.41M2 22h1.41l4.77-4.76l-1.42-1.41L2 20.59V22m0-2.83l4.09-4.08c-.21-.3-.36-.62-.45-.97L2 17.76v1.41Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var __unplugin_components_3 = { name: "mdi-rocket-launch-outline", render: render$1 };
const _hoisted_1$2 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M15 20a1 1 0 0 0 1-1V4H8a1 1 0 0 0-1 1v11H5V5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v1h-2V5a1 1 0 0 0-1-1a1 1 0 0 0-1 1v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1h11a2 2 0 0 0 2 2M9 6h5v2H9V6m0 4h5v2H9v-2m0 4h5v2H9v-2Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var __unplugin_components_2 = { name: "mdi-script-text-outline", render };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ReleaseInfo",
  setup(__props, { expose }) {
    expose();
    const { $api } = useNuxtApp();
    const { currentVersion, latestRelease, hiddenRelease } = useGlobal();
    const releaseAlert = computed(() => currentVersion.value && latestRelease.value && currentVersion.value !== latestRelease.value && latestRelease.value !== hiddenRelease.value);
    async function fetchReleaseInfo() {
      try {
        const versionInfo = await $api.utils.appVersion();
        if (versionInfo && versionInfo.releaseVersion && versionInfo.currentVersion && !/[^0-9.]/.test(versionInfo.currentVersion)) {
          currentVersion.value = versionInfo.currentVersion;
          latestRelease.value = versionInfo.releaseVersion;
        } else {
          currentVersion.value = null;
          latestRelease.value = null;
        }
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    }
    onMounted(async () => await fetchReleaseInfo());
    const __returned__ = { $api, currentVersion, latestRelease, hiddenRelease, releaseAlert, fetchReleaseInfo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_2$1 = { class: "flex gap-1 items-center text-white" };
const _hoisted_3$1 = { class: "text-sm font-weight-medium" };
const _hoisted_4$1 = { class: "mt-1 bg-white shadow-lg !border" };
const _hoisted_5$1 = { class: "nc-menu-item" };
const _hoisted_6$1 = { class: "nc-menu-item" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mdi_menu_down = MdiMenuDown;
  const _component_a_button = Button;
  const _component_mdi_script_text_outline = __unplugin_components_2;
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_mdi_rocket_launch_outline = __unplugin_components_3;
  const _component_a_divider = __unplugin_components_2$1;
  const _component_mdi_close = __unplugin_components_5;
  const _component_a_dropdown = Dropdown;
  return $setup.releaseAlert ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_a_dropdown, {
      trigger: ["click"],
      placement: "bottom"
    }, {
      overlay: withCtx(() => [
        createBaseVNode("div", _hoisted_4$1, [
          createVNode(_component_nuxt_link, {
            class: "text-primary",
            to: "https://github.com/nocodb/nocodb/releases",
            target: "_blank"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_5$1, [
                createVNode(_component_mdi_script_text_outline),
                createTextVNode(" " + toDisplayString($setup.latestRelease) + " " + toDisplayString(_ctx.$t("activity.upgrade.releaseNote")), 1)
              ])
            ]),
            _: 1
          }),
          createVNode(_component_nuxt_link, {
            class: "text-primary",
            to: "https://docs.nocodb.com/getting-started/upgrading",
            target: "_blank"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_6$1, [
                createVNode(_component_mdi_rocket_launch_outline),
                createTextVNode(toDisplayString(_ctx.$t("activity.upgrade.howTo")), 1)
              ])
            ]),
            _: 1
          }),
          createVNode(_component_a_divider, { class: "m-0" }),
          createBaseVNode("div", {
            class: "nc-menu-item",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.latestRelease = null)
          }, [
            createVNode(_component_mdi_close),
            createTextVNode(toDisplayString(_ctx.$t("general.hideMenu")), 1)
          ])
        ])
      ]),
      default: withCtx(() => [
        createVNode(_component_a_button, { class: "bg-primary border-none" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("span", _hoisted_3$1, toDisplayString(_ctx.$t("activity.upgrade.available")), 1),
              createVNode(_component_mdi_menu_down)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ])) : createCommentVNode("", true);
}
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
  const _component_MaterialSymbolsTranslate = __unplugin_components_12;
  const _component_GeneralLanguageMenu = __nuxt_component_1$2;
  const _component_a_menu = Menu;
  const _component_a_dropdown = Dropdown;
  return openBlock(), createBlock(_component_a_dropdown, {
    class: "select-none color-transition",
    trigger: ["click"]
  }, {
    overlay: withCtx(() => [
      createVNode(_component_a_menu, { class: "scrollbar-thin-dull min-w-50 max-h-90vh overflow-auto !py-0 rounded" }, {
        default: withCtx(() => [
          createVNode(_component_GeneralLanguageMenu)
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      createVNode(_component_MaterialSymbolsTranslate, mergeProps(_ctx.$attrs, { class: "md:text-xl cursor-pointer nc-menu-translate" }), null, 16)
    ]),
    _: 1
  });
}
var __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var base_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '.nc-lang-btn[data-v-52395efa]{--tw-shadow:0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1)!important;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)!important;--tw-shadow-color:#6b7280!important;--tw-shadow:var(--tw-shadow-colored)!important;--tw-text-opacity:1!important;align-items:center!important;background-color:rgba(var(--color-primary),var(--tw-bg-opacity))!important;border-radius:9999px!important;bottom:2.5rem!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important;color:rgba(255,255,255,var(--tw-text-opacity))!important;display:flex!important;height:3rem!important;justify-content:center!important;padding:.5rem!important;position:fixed!important;right:2.5rem!important;transition-duration:.1s;transition-timing-function:cubic-bezier(.4,0,1,1);width:3rem!important;z-index:99!important}.nc-lang-btn[data-v-52395efa]:active,.nc-lang-btn[data-v-52395efa]:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color:rgba(var(--color-accent),var(--tw-bg-opacity));box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.nc-lang-btn[data-v-52395efa]:after{background-color:rgba(var(--color-primary),var(--tw-bg-opacity));border-radius:9999px;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:-1}.nc-lang-btn[data-v-52395efa]:hover:after{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color:rgba(var(--color-accent),var(--tw-bg-opacity));--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-scale-x:1.1;--tw-scale-y:1.1;--tw-scale-z:1.1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.nc-lang-btn[data-v-52395efa]:active:after,.nc-lang-btn[data-v-52395efa]:hover:after{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.nc-lang-btn[data-v-52395efa]:active:after{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color:rgba(var(--color-accent),var(--tw-bg-opacity))}')();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "base",
  setup(__props, { expose }) {
    expose();
    const { signOut, signedIn, isLoading, user } = useGlobal();
    const { isSharedBase } = useProject();
    const route = useRoute();
    const email = computed(() => {
      var _a, _b;
      return (_b = (_a = user.value) == null ? void 0 : _a.email) != null ? _b : "---";
    });
    const hasSider = ref(false);
    const sidebar = ref();
    const logout = () => {
      signOut();
      navigateTo("/signin");
    };
    const { hooks } = useNuxtApp();
    hooks.hook("page:finish", () => {
      var _a;
      if (sidebar.value) {
        hasSider.value = ((_a = sidebar.value) == null ? void 0 : _a.children.length) > 0;
      }
    });
    const __returned__ = { signOut, signedIn, isLoading, user, isSharedBase, route, email, hasSider, sidebar, logout, hooks, navigateTo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-52395efa"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "nc-sidebar-left",
  ref: "sidebar"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  width: "35",
  alt: "NocoDB",
  src: _imports_0
}, null, -1));
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = { class: "!text-white flex justify-center" };
const _hoisted_5 = { class: "flex items-center gap-2 ml-3" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Switch language");
const _hoisted_8 = { class: "flex pr-4 items-center text-white" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\xA0 ");
const _hoisted_10 = { class: "prose group-hover:text-primary" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\xA0 ");
const _hoisted_12 = { class: "prose group-hover:text-primary" };
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" Switch language");
const _hoisted_14 = {
  key: 0,
  class: "nc-lang-btn"
};
const _hoisted_15 = { class: "w-full h-full overflow-hidden" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiReload = __unplugin_components_0;
  const _component_GeneralReleaseInfo = __nuxt_component_0;
  const _component_GeneralLanguage = __nuxt_component_1;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_MdiDotsVertical = __unplugin_components_2$2;
  const _component_MdiAt = __unplugin_components_14;
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_a_menu_item = __unplugin_components_0$1;
  const _component_a_menu_divider = __unplugin_components_5$1;
  const _component_MdiLogout = __unplugin_components_15;
  const _component_a_menu = Menu;
  const _component_a_dropdown = Dropdown;
  const _component_a_layout_header = LayoutHeader;
  const _component_a_layout = __unplugin_components_2$3;
  const _directive_t = resolveDirective("t");
  return openBlock(), createBlock(_component_a_layout, {
    id: "nc-app",
    "has-sider": ""
  }, {
    default: withCtx(() => [
      createVNode(Transition, { name: "slide" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", _hoisted_1, null, 512), [
            [vShow, $setup.hasSider]
          ])
        ]),
        _: 1
      }),
      createVNode(_component_a_layout, { class: "!flex-col" }, {
        default: withCtx(() => [
          !$setup.route.meta.public && $setup.signedIn && !$setup.route.meta.hideHeader ? (openBlock(), createBlock(_component_a_layout_header, {
            key: 0,
            class: "flex !bg-primary items-center text-white pl-4 pr-5 shadow-lg"
          }, {
            default: withCtx(() => [
              !$setup.route.params.projectType ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "transition-all duration-200 p-2 cursor-pointer transform hover:scale-105 nc-noco-brand-icon",
                onClick: _cache[0] || (_cache[0] = ($event) => $setup.navigateTo("/"))
              }, _hoisted_3)) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_4, [
                withDirectives(createBaseVNode("div", _hoisted_5, [
                  createTextVNode(toDisplayString(_ctx.$t("general.loading")) + " ", 1),
                  createVNode(_component_MdiReload, {
                    class: normalizeClass({ "animate-infinite animate-spin": $setup.isLoading })
                  }, null, 8, ["class"])
                ], 512), [
                  [vShow, $setup.isLoading]
                ])
              ]),
              _hoisted_6,
              createVNode(_component_GeneralReleaseInfo),
              createVNode(_component_a_tooltip, {
                placement: "bottom",
                "mouse-enter-delay": 1
              }, {
                title: withCtx(() => [
                  _hoisted_7
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_component_GeneralLanguage, { class: "cursor-pointer text-2xl hover:text-accent" })
                  ])
                ]),
                _: 1
              }),
              $setup.signedIn && !$setup.isSharedBase ? (openBlock(), createBlock(_component_a_dropdown, {
                key: 1,
                trigger: ["click"]
              }, {
                overlay: withCtx(() => [
                  createVNode(_component_a_menu, { class: "!py-0 leading-8 !rounded" }, {
                    default: withCtx(() => [
                      createVNode(_component_a_menu_item, {
                        key: "0",
                        class: "!rounded-t"
                      }, {
                        default: withCtx(() => [
                          withDirectives((openBlock(), createBlock(_component_nuxt_link, {
                            class: "nc-project-menu-item group !no-underline",
                            to: "/user"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_MdiAt, { class: "mt-1 group-hover:text-accent" }),
                              _hoisted_9,
                              createBaseVNode("span", _hoisted_10, toDisplayString($setup.email), 1)
                            ]),
                            _: 1
                          })), [
                            [_directive_t, ["c:navbar:user:email"]]
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_menu_divider, { class: "!m-0" }),
                      createVNode(_component_a_menu_item, {
                        key: "1",
                        class: "!rounded-b group"
                      }, {
                        default: withCtx(() => [
                          withDirectives((openBlock(), createElementBlock("div", {
                            class: "nc-project-menu-item group",
                            onClick: $setup.logout
                          }, [
                            createVNode(_component_MdiLogout, { class: "group-hover:text-accent" }),
                            _hoisted_11,
                            createBaseVNode("span", _hoisted_12, toDisplayString(_ctx.$t("general.signOut")), 1)
                          ])), [
                            [_directive_t, ["a:navbar:user:sign-out"]]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(_component_MdiDotsVertical, {
                    class: "md:text-xl cursor-pointer hover:text-accent nc-menu-accounts text-white",
                    onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                    }, ["prevent"]))
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_a_tooltip, { placement: "bottom" }, {
            title: withCtx(() => [
              _hoisted_13
            ]),
            default: withCtx(() => [
              createVNode(Transition, { name: "layout" }, {
                default: withCtx(() => [
                  !$setup.signedIn ? (openBlock(), createElementBlock("div", _hoisted_14, [
                    createVNode(_component_GeneralLanguage)
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_15, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var base = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-52395efa"]]);
export { base as default };
