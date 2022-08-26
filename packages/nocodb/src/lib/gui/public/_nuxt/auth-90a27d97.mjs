import { U as UserManagement, A as ApiTokenManagement } from "./UserManagement-4d072020.mjs";
import { _ as _export_sfc, d as defineComponent, r as ref, e as computed, o as openBlock, c as createElementBlock, g as createVNode, h as withCtx, F as Fragment, f as renderList, b as createBaseVNode, v as toDisplayString, j as createBlock, S as resolveDynamicComponent } from "./entry-fe2e349d.mjs";
import { _ as __unplugin_components_1, T as Tabs } from "./TabPane-95cc1419.mjs";
import "./plus-0f42eb0d.mjs";
import "./reload-21536936.mjs";
import "./delete-outline-809194cc.mjs";
import "./open-in-new-2216ac81.mjs";
import "./button-85170489.mjs";
import "./wave-51bede47.mjs";
import "./Title-a5de800c.mjs";
import "./omit-bb2337ec.mjs";
import "./TextArea-19a941ff.mjs";
import "./Input-a826c0f4.mjs";
import "./antInputDirective-04640d14.mjs";
import "./index-80dcfdcf.mjs";
import "./pickAttrs-251338d2.mjs";
import "./useState-b38ec006.mjs";
import "./SearchOutlined-a319fe5d.mjs";
import "./Modal-6ec32f67.mjs";
import "./index-e4541ed7.mjs";
import "./dropdown-2e9bbb3f.mjs";
import "./Dropdown-d7fe3574.mjs";
import "./RightOutlined-593486a9.mjs";
import "./index-aa513677.mjs";
import "./index-1ad3b9bc.mjs";
import "./index-6cc9109e.mjs";
import "./Password-2bc07ccd.mjs";
import "./index-03dd499c.mjs";
import "./index-b5c7d9eb.mjs";
import "./LeftOutlined-b3330d93.mjs";
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
