import { U as UserManagement, A as ApiTokenManagement } from "./UserManagement-a0bd4164.mjs";
import { _ as _export_sfc, d as defineComponent, r as ref, e as computed, o as openBlock, c as createElementBlock, g as createVNode, h as withCtx, F as Fragment, f as renderList, b as createBaseVNode, v as toDisplayString, j as createBlock, S as resolveDynamicComponent } from "./entry-61ceea7f.mjs";
import { _ as __unplugin_components_1, T as Tabs } from "./TabPane-12ca446e.mjs";
import "./plus-15c52e39.mjs";
import "./reload-23e1ac74.mjs";
import "./delete-outline-e19db0b9.mjs";
import "./open-in-new-51693019.mjs";
import "./button-da542739.mjs";
import "./wave-52b13188.mjs";
import "./Title-4dfe67df.mjs";
import "./omit-173fd1c5.mjs";
import "./TextArea-4c687bd9.mjs";
import "./Input-081ff014.mjs";
import "./antInputDirective-04640d14.mjs";
import "./index-3935e1b2.mjs";
import "./pickAttrs-ba132318.mjs";
import "./useState-068748ba.mjs";
import "./SearchOutlined-66b33d9a.mjs";
import "./Modal-d5a36a0f.mjs";
import "./index-cfa50bee.mjs";
import "./dropdown-ba657059.mjs";
import "./Dropdown-9f66da27.mjs";
import "./RightOutlined-4a9f51db.mjs";
import "./index-3d920faa.mjs";
import "./index-671ea125.mjs";
import "./index-4f266bad.mjs";
import "./Password-b51c8941.mjs";
import "./index-2b41c829.mjs";
import "./index-0b1576d7.mjs";
import "./LeftOutlined-f246f0cb.mjs";
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
