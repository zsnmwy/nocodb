import { _ as _export_sfc, d as defineComponent, $ as useRoute, M as useI18n, e1 as useTitle, o as openBlock, c as createElementBlock, j as createBlock, a5 as renderSlot, dn as Teleport, g as createVNode, h as withCtx } from "./entry-61ceea7f.mjs";
import { u as useSidebar } from "./index-0e12d148.mjs";
import { a as LayoutContent } from "./index-65c9b1fe.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./RightOutlined-4a9f51db.mjs";
import "./LeftOutlined-f246f0cb.mjs";
const __default__ = {
  name: "DefaultLayout"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props, { expose }) {
    var _a;
    expose();
    const route = useRoute();
    const { te, t } = useI18n();
    const { hasSidebar } = useSidebar();
    useTitle(((_a = route.meta) == null ? void 0 : _a.title) && te(route.meta.title) ? `${t(route.meta.title)} | NocoDB` : "NocoDB");
    const __returned__ = { route, te, t, hasSidebar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "w-full h-full" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_layout_content = LayoutContent;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(), createBlock(Teleport, {
      to: $setup.hasSidebar ? "#nc-sidebar-left" : null,
      disabled: !$setup.hasSidebar
    }, [
      renderSlot(_ctx.$slots, "sidebar")
    ], 8, ["to", "disabled"])),
    createVNode(_component_a_layout_content, null, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    })
  ]);
}
var _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _default as default };
