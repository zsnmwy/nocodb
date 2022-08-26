import { _ as _export_sfc, d as defineComponent, m as useGlobal, o as openBlock, j as createBlock, h as withCtx, g as createVNode, b as createBaseVNode, c as createElementBlock, v as toDisplayString, A as normalizeClass, F as Fragment, a5 as renderSlot, dp as navigateTo, dF as _imports_0 } from "./entry-649fbf77.mjs";
import { u as useSharedView } from "./useSharedView-673cfa34.mjs";
import { _ as __unplugin_components_0 } from "./reload-8e7c8b3b.mjs";
import { c as LayoutHeader, _ as __unplugin_components_2 } from "./index-d05dbf89.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./RightOutlined-d6864b4a.mjs";
import "./LeftOutlined-863c43a5.mjs";
const __default__ = {
  name: "SharedView"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props, { expose }) {
    expose();
    const { isLoading } = useGlobal();
    const { sharedView: sharedView2 } = useSharedView();
    const __returned__ = { isLoading, sharedView: sharedView2, navigateTo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("img", {
  width: "35",
  alt: "NocoDB",
  src: _imports_0
}, null, -1);
const _hoisted_2 = [
  _hoisted_1
];
const _hoisted_3 = { class: "flex justify-center items-center" };
const _hoisted_4 = { class: "flex items-center gap-2 ml-3 text-white" };
const _hoisted_5 = { class: "text-white" };
const _hoisted_6 = {
  key: 1,
  class: "text-xl font-semibold truncate text-white"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_8 = {
  class: "w-full overflow-hidden",
  style: { "height": "calc(100% - var(--header-height))" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MdiReload = __unplugin_components_0;
  const _component_a_layout_header = LayoutHeader;
  const _component_a_layout = __unplugin_components_2;
  return openBlock(), createBlock(_component_a_layout, { id: "nc-app" }, {
    default: withCtx(() => [
      createVNode(_component_a_layout, { class: "!flex-col bg-white" }, {
        default: withCtx(() => [
          createVNode(_component_a_layout_header, { class: "flex !bg-primary items-center text-white pl-3 pr-4 shadow-lg" }, {
            default: withCtx(() => {
              var _a;
              return [
                createBaseVNode("div", {
                  class: "transition-all duration-200 p-2 cursor-pointer transform hover:scale-105",
                  onClick: _cache[0] || (_cache[0] = ($event) => $setup.navigateTo("/"))
                }, _hoisted_2),
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_3, [
                    createBaseVNode("div", _hoisted_4, [
                      $setup.isLoading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createBaseVNode("span", _hoisted_5, toDisplayString(_ctx.$t("general.loading")), 1),
                        createVNode(_component_MdiReload, {
                          class: normalizeClass({ "animate-infinite animate-spin ": $setup.isLoading })
                        }, null, 8, ["class"])
                      ], 64)) : (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString((_a = $setup.sharedView) == null ? void 0 : _a.title), 1))
                    ])
                  ])
                ]),
                _hoisted_7
              ];
            }),
            _: 1
          }),
          createBaseVNode("div", _hoisted_8, [
            renderSlot(_ctx.$slots, "default")
          ])
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var sharedView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { sharedView as default };
