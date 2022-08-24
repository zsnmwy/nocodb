import { U as UserManagement, A as ApiTokenManagement } from "./UserManagement-3695989e.mjs";
import { _ as _export_sfc, d as defineComponent, r as ref, e as computed, o as openBlock, c as createElementBlock, g as createVNode, h as withCtx, F as Fragment, f as renderList, b as createBaseVNode, v as toDisplayString, j as createBlock, S as resolveDynamicComponent } from "./entry-3fb260b7.mjs";
import { _ as __unplugin_components_1, T as Tabs } from "./TabPane-0a9cd9c3.mjs";
import "./plus-e2b18616.mjs";
import "./reload-0c2a0aa7.mjs";
import "./delete-outline-27729fed.mjs";
import "./open-in-new-50799f30.mjs";
import "./button-b581df9e.mjs";
import "./wave-30eabfab.mjs";
import "./Title-e956b90a.mjs";
import "./omit-e185a391.mjs";
import "./TextArea-cb1658fc.mjs";
import "./Input-131cc256.mjs";
import "./antInputDirective-04640d14.mjs";
import "./index-0190fa17.mjs";
import "./pickAttrs-557680ad.mjs";
import "./useState-8faa8040.mjs";
import "./SearchOutlined-205148f4.mjs";
import "./Modal-ebea9398.mjs";
import "./index-fbd19973.mjs";
import "./dropdown-049aa5ad.mjs";
import "./Dropdown-936f0dc5.mjs";
import "./RightOutlined-bc158d3e.mjs";
import "./index-cfdffcbc.mjs";
import "./index-e8d77fbf.mjs";
import "./index-6a9826e0.mjs";
import "./Password-5ba00449.mjs";
import "./index-9ddc029b.mjs";
import "./index-d7455a19.mjs";
import "./LeftOutlined-04561eeb.mjs";
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
