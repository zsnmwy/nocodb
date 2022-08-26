import { U as UserManagement, A as ApiTokenManagement } from "./UserManagement-e44cd05b.mjs";
import { _ as _export_sfc, d as defineComponent, r as ref, e as computed, o as openBlock, c as createElementBlock, g as createVNode, h as withCtx, F as Fragment, f as renderList, b as createBaseVNode, v as toDisplayString, j as createBlock, S as resolveDynamicComponent } from "./entry-649fbf77.mjs";
import { _ as __unplugin_components_1, T as Tabs } from "./TabPane-8801fde4.mjs";
import "./plus-a534904a.mjs";
import "./reload-8e7c8b3b.mjs";
import "./delete-outline-75e5fb2d.mjs";
import "./open-in-new-745e33f8.mjs";
import "./button-65b4020b.mjs";
import "./wave-1595a9a4.mjs";
import "./Title-c3a77074.mjs";
import "./omit-52a539d6.mjs";
import "./TextArea-1f0f670b.mjs";
import "./Input-35ebc16c.mjs";
import "./antInputDirective-04640d14.mjs";
import "./index-872b715c.mjs";
import "./pickAttrs-4efb0b19.mjs";
import "./useState-288afe6d.mjs";
import "./SearchOutlined-df5cb6c4.mjs";
import "./Modal-affdb140.mjs";
import "./index-a2900c1e.mjs";
import "./dropdown-7a7d5830.mjs";
import "./Dropdown-e42ed6e8.mjs";
import "./RightOutlined-d6864b4a.mjs";
import "./index-cfa33e99.mjs";
import "./index-0cebafde.mjs";
import "./index-7f1b7214.mjs";
import "./Password-2e3cf13b.mjs";
import "./index-443916db.mjs";
import "./index-90e3ebc3.mjs";
import "./LeftOutlined-863c43a5.mjs";
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
