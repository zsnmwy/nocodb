import { U as UserManagement, A as ApiTokenManagement } from "./UserManagement-6b61da99.mjs";
import { _ as _export_sfc, d as defineComponent, r as ref, e as computed, o as openBlock, c as createElementBlock, g as createVNode, h as withCtx, F as Fragment, f as renderList, b as createBaseVNode, v as toDisplayString, j as createBlock, S as resolveDynamicComponent } from "./entry-d9bc2aad.mjs";
import { _ as __unplugin_components_1, T as Tabs } from "./TabPane-b435e2ca.mjs";
import "./plus-e8140861.mjs";
import "./reload-63954944.mjs";
import "./delete-outline-29401aa6.mjs";
import "./open-in-new-e3b3af09.mjs";
import "./button-3d871114.mjs";
import "./wave-d4537590.mjs";
import "./Title-48d2388e.mjs";
import "./omit-79be01c9.mjs";
import "./TextArea-aec9452a.mjs";
import "./Input-11f8ddea.mjs";
import "./antInputDirective-04640d14.mjs";
import "./index-0b813702.mjs";
import "./pickAttrs-fc04d54e.mjs";
import "./useState-7c8b49a7.mjs";
import "./SearchOutlined-8238e142.mjs";
import "./Modal-3070863e.mjs";
import "./index-16f90ce9.mjs";
import "./dropdown-5e0a28d4.mjs";
import "./Dropdown-ca677e8d.mjs";
import "./RightOutlined-05bf04ed.mjs";
import "./index-db456324.mjs";
import "./index-8aa28bc0.mjs";
import "./index-1454f009.mjs";
import "./Password-e454255a.mjs";
import "./index-3de9c023.mjs";
import "./index-c696756a.mjs";
import "./LeftOutlined-fc38eee0.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Auth",
  setup(__props, { expose }) {
    expose();
    const tabsInfo = [
      {
        title: "Users Management",
        body: () => UserManagement
      },
      {
        title: "API Token Management",
        body: () => ApiTokenManagement
      }
    ];
    const selectedTabKey = ref(0);
    const selectedTab = computed(() => tabsInfo[selectedTabKey.value]);
    const __returned__ = { tabsInfo, selectedTabKey, selectedTab };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "mx-4 py-6 mt-2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_tab_pane = __unplugin_components_1;
  const _component_a_tabs = Tabs;
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_a_tabs, {
      "active-key": $setup.selectedTabKey,
      "onUpdate:active-key": _cache[0] || (_cache[0] = ($event) => $setup.selectedTabKey = $event),
      "open-keys": [],
      mode: "horizontal",
      class: "nc-auth-tabs !mx-6"
    }, {
      default: withCtx(() => [
        (openBlock(), createElementBlock(Fragment, null, renderList($setup.tabsInfo, (tab, key) => {
          return createVNode(_component_a_tab_pane, {
            key,
            class: "select-none"
          }, {
            tab: withCtx(() => [
              createBaseVNode("span", null, toDisplayString(tab.title), 1)
            ]),
            _: 2
          }, 1024);
        }), 64))
      ]),
      _: 1
    }, 8, ["active-key"]),
    createBaseVNode("div", _hoisted_1, [
      (openBlock(), createBlock(resolveDynamicComponent($setup.selectedTab.body())))
    ])
  ]);
}
var Auth = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-72986580"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auth",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { Auth };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Auth"]);
}
var auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { auth as default };
