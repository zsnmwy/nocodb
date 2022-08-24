import { _ as _export_sfc, d as defineComponent, $ as useRoute, bZ as withAsyncContext, p as provide, r as ref, b_ as resolveComponent, o as openBlock, j as createBlock, h as withCtx, a7 as createEventHook, dE as __nuxt_component_2, g as createVNode } from "./entry-3fb260b7.mjs";
import { d as IsPublicInj, I as IsFormInj, R as ReloadViewDataHookInj, M as MetaInj } from "./index-c79a04bb.mjs";
import { a as useProvideSharedFormStore } from "./useSharedFormViewStore-65a1a9fb.mjs";
import { a as useProvideSmartsheetStore } from "./useVirtualCell-c4e19ee4.mjs";
import { u as useSidebar } from "./index-42a23e87.mjs";
import "./deepCompare-c3a57270.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[viewId]",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    useSidebar({ hasSidebar: false });
    const route = useRoute();
    const { loadSharedView, sharedView, meta, notFound } = useProvideSharedFormStore(route.params.viewId);
    [__temp, __restore] = withAsyncContext(() => loadSharedView()), await __temp, __restore();
    if (!notFound.value) {
      provide(ReloadViewDataHookInj, createEventHook());
      provide(MetaInj, meta);
      provide(IsPublicInj, ref(true));
      provide(IsFormInj, ref(true));
      useProvideSmartsheetStore(sharedView, meta, true);
    }
    const __returned__ = { route, loadSharedView, sharedView, meta, notFound };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtPage = resolveComponent("NuxtPage");
  const _component_NuxtLayout = __nuxt_component_2;
  return openBlock(), createBlock(_component_NuxtLayout, null, {
    default: withCtx(() => [
      createVNode(_component_NuxtPage)
    ]),
    _: 1
  });
}
var _viewId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _viewId_ as default };
