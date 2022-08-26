import { _ as __unplugin_components_3, M as MdiAirTableIcon } from "./table-large-3e1ba686.mjs";
import { _ as __unplugin_components_0, M as MdiAccountGroup } from "./menu-4e5fc694.mjs";
import { _ as _export_sfc, d as defineComponent, m as useGlobal, p as provide, b_ as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, g as createVNode, A as normalizeClass, k as createCommentVNode, h as withCtx, B as withDirectives, aq as vShow, y as createTextVNode, v as toDisplayString, C as pushScopeId, E as popScopeId, F as Fragment, f as renderList, j as createBlock, S as resolveDynamicComponent, dA as MdiView } from "./entry-649fbf77.mjs";
import { T as TabMetaInj } from "./index-c79a04bb.mjs";
import { u as useTabs, T as TabType } from "./useTabs-88a857e1.mjs";
import { u as useSidebar } from "./index-ee84a878.mjs";
import "./index-22886cb7.mjs";
import { T as Tabs, _ as __unplugin_components_1 } from "./TabPane-8801fde4.mjs";
import "./Dropdown-e42ed6e8.mjs";
import "./useState-288afe6d.mjs";
import "./omit-52a539d6.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const { tabs, activeTabIndex, activeTab, closeTab } = useTabs();
    const { isLoading } = useGlobal();
    provide(TabMetaInj, activeTab);
    const icon = (tab) => {
      switch (tab.type) {
        case TabType.TABLE:
          return MdiAirTableIcon;
        case TabType.VIEW:
          return MdiView;
        case TabType.AUTH:
          return MdiAccountGroup;
      }
    };
    const { isOpen, toggle } = useSidebar();
    function onEdit(targetKey, action) {
      if (action === "remove")
        closeTab(targetKey);
    }
    const __returned__ = { tabs, activeTabIndex, activeTab, closeTab, isLoading, icon, isOpen, toggle, onEdit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-3d49f6e2"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "h-full w-full nc-container" };
const _hoisted_2 = { class: "h-full w-full flex flex-col" };
const _hoisted_3 = { class: "flex items-end !min-h-[50px] !bg-primary" };
const _hoisted_4 = {
  key: 0,
  class: "nc-sidebar-left-toggle-icon hover:after:bg-primary hover:after:bg-opacity-75 group nc-sidebar-add-row py-2 px-3"
};
const _hoisted_5 = { class: "flex items-center gap-2" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "flex-1" }, null, -1));
const _hoisted_7 = { class: "flex justify-center self-center mr-2 min-w-[115px]" };
const _hoisted_8 = { class: "flex items-center gap-2 ml-3 text-gray-200" };
const _hoisted_9 = { class: "w-full min-h-[300px] flex-auto" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiMenu = __unplugin_components_0;
  const _component_a_tab_pane = __unplugin_components_1;
  const _component_a_tabs = Tabs;
  const _component_MdiLoading = __unplugin_components_3;
  const _component_NuxtPage = resolveComponent("NuxtPage");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        !$setup.isOpen ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(_component_MdiMenu, {
            class: normalizeClass(["cursor-pointer transform transition-transform duration-500 text-white", { "rotate-180": !$setup.isOpen }]),
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.toggle(!$setup.isOpen))
          }, null, 8, ["class"])
        ])) : createCommentVNode("", true),
        createVNode(_component_a_tabs, {
          activeKey: $setup.activeTabIndex,
          "onUpdate:activeKey": _cache[1] || (_cache[1] = ($event) => $setup.activeTabIndex = $event),
          class: "nc-root-tabs",
          type: "editable-card",
          onEdit: $setup.onEdit
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.tabs, (tab, i) => {
              return openBlock(), createBlock(_component_a_tab_pane, { key: i }, {
                tab: withCtx(() => [
                  createBaseVNode("div", _hoisted_5, [
                    (openBlock(), createBlock(resolveDynamicComponent($setup.icon(tab)), { class: "text-sm" })),
                    createTextVNode(" " + toDisplayString(tab.title), 1)
                  ])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        }, 8, ["activeKey"]),
        _hoisted_6,
        createBaseVNode("div", _hoisted_7, [
          withDirectives(createBaseVNode("div", _hoisted_8, [
            createTextVNode(toDisplayString(_ctx.$t("general.loading")) + " ", 1),
            createVNode(_component_MdiLoading, {
              class: normalizeClass({ "animate-infinite animate-spin": $setup.isLoading })
            }, null, 8, ["class"])
          ], 512), [
            [vShow, $setup.isLoading]
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_9, [
        createVNode(_component_NuxtPage)
      ])
    ])
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3d49f6e2"]]);
export { index as default };
