import { _ as _export_sfc, d as defineComponent, $ as useRoute, r as ref, L as useVModel, o as openBlock, j as createBlock, h as withCtx, b as createBaseVNode, g as createVNode, y as createTextVNode, G as __unplugin_components_2$1, H as Form, I as message, K as extractSdkResponseErrorMsg, p as provide, c as createElementBlock, a7 as createEventHook, bZ as withAsyncContext, dE as __nuxt_component_2 } from "./entry-649fbf77.mjs";
import { u as useSharedView } from "./useSharedView-673cfa34.mjs";
import { _ as __unplugin_components_2 } from "./Title-c3a77074.mjs";
import { _ as __unplugin_components_3 } from "./Password-2e3cf13b.mjs";
import { B as Button } from "./button-65b4020b.mjs";
import { M as Modal } from "./Modal-affdb140.mjs";
import { e as __nuxt_component_0$1, d as __nuxt_component_1$1 } from "./Grid-7e2c6db8.mjs";
import { a as useProvideSmartsheetStore } from "./useVirtualCell-0b8c4e42.mjs";
import { R as ReloadViewDataHookInj, b as ReadonlyInj, M as MetaInj, A as ActiveViewInj, F as FieldsInj, d as IsPublicInj } from "./index-c79a04bb.mjs";
import "./omit-52a539d6.mjs";
import "./TextArea-1f0f670b.mjs";
import "./Input-35ebc16c.mjs";
import "./antInputDirective-04640d14.mjs";
import "./index-872b715c.mjs";
import "./pickAttrs-4efb0b19.mjs";
import "./useState-288afe6d.mjs";
import "./SearchOutlined-df5cb6c4.mjs";
import "./wave-1595a9a4.mjs";
import "./index-a2900c1e.mjs";
import "./chevron-right-rounded-e8f6ba9d.mjs";
import "./menu-4e5fc694.mjs";
import "./QuickImport-7223e90d.mjs";
import "./plus-a534904a.mjs";
import "./delete-outline-75e5fb2d.mjs";
import "./useTabs-88a857e1.mjs";
import "./index-b50bdfc6.mjs";
import "./index-60a073f2.mjs";
import "./index-90e3ebc3.mjs";
import "./LeftOutlined-863c43a5.mjs";
import "./RightOutlined-d6864b4a.mjs";
import "./Checkbox-40a38f26.mjs";
import "./index-cfa33e99.mjs";
import "./dropdown-7a7d5830.mjs";
import "./Dropdown-e42ed6e8.mjs";
import "./index-7f1b7214.mjs";
import "./CollapsePanel-ebd9dccf.mjs";
import "./index-3388b3af.mjs";
import "./Card-ba245270.mjs";
import "./index-22886cb7.mjs";
import "./TabPane-8801fde4.mjs";
import "./minus-circle-outline-ffe1f11a.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-14c9a254.mjs";
import "./Cell-ad8931db.mjs";
import "./index-443916db.mjs";
import "./menu-down-e5889364.mjs";
import "./index-fe104f94.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./star-outline-52ff6978.mjs";
import "./close-f8bfc949.mjs";
import "./file-copy-outline-3f97b751.mjs";
import "./reload-8e7c8b3b.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-8fe364cb.mjs";
import "./discord-2df38623.mjs";
import "./index-d05dbf89.mjs";
import "./open-in-new-745e33f8.mjs";
import "./plus-outline-816d7a07.mjs";
import "./index-ee84a878.mjs";
import "./index-1182cd3a.mjs";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AskPassword",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const route = useRoute();
    const { loadSharedView } = useSharedView();
    const formState = ref({ password: void 0 });
    const vModel = useVModel(props, "modelValue", emit);
    const onFinish = async () => {
      try {
        await loadSharedView(route.params.viewId, formState.value.password);
        vModel.value = false;
      } catch (e) {
        console.error(e);
        message.error(await extractSdkResponseErrorMsg(e));
      }
    };
    const __returned__ = { props, emit, route, loadSharedView, formState, vModel, onFinish };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "w-full flex flex-col" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("This shared view is protected");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Unlock");
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_typography_title = __unplugin_components_2;
  const _component_a_input_password = __unplugin_components_3;
  const _component_a_form_item = __unplugin_components_2$1;
  const _component_a_button = Button;
  const _component_a_form = Form;
  const _component_a_modal = Modal;
  return openBlock(), createBlock(_component_a_modal, {
    visible: $setup.vModel,
    "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => $setup.vModel = $event),
    closable: false,
    width: "28rem",
    centered: "",
    footer: null,
    "mask-closable": false,
    onClose: _cache[2] || (_cache[2] = ($event) => $setup.vModel = false)
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$2, [
        createVNode(_component_a_typography_title, { level: 4 }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }),
        createVNode(_component_a_form, {
          ref: "formRef",
          model: $setup.formState,
          class: "mt-2",
          onFinish: $setup.onFinish
        }, {
          default: withCtx(() => [
            createVNode(_component_a_form_item, {
              name: "password",
              rules: [{ required: true, message: "Password is required" }]
            }, {
              default: withCtx(() => [
                createVNode(_component_a_input_password, {
                  value: $setup.formState.password,
                  "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.formState.password = $event),
                  placeholder: "Enter password"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_a_button, {
              type: "primary",
              "html-type": "submit"
            }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ])
    ]),
    _: 1
  }, 8, ["visible"]);
}
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Grid",
  setup(__props, { expose }) {
    expose();
    const { sharedView, meta, sorts, nestedFilters } = useSharedView();
    const reloadEventHook = createEventHook();
    provide(ReloadViewDataHookInj, reloadEventHook);
    provide(ReadonlyInj, true);
    provide(MetaInj, meta);
    provide(ActiveViewInj, sharedView);
    provide(FieldsInj, ref(meta.value.columns));
    provide(IsPublicInj, ref(true));
    useProvideSmartsheetStore(sharedView, meta, true, sorts, nestedFilters);
    const __returned__ = { sharedView, meta, sorts, nestedFilters, reloadEventHook };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "nc-container flex flex-col h-full mt-1.5 px-12" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SmartsheetToolbar = __nuxt_component_0$1;
  const _component_SmartsheetGrid = __nuxt_component_1$1;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_SmartsheetToolbar),
    createVNode(_component_SmartsheetGrid)
  ]);
}
var __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-6289a322"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[viewId]",
  async setup(__props, { expose }) {
    var _a;
    expose();
    let __temp, __restore;
    const route = useRoute();
    const reloadEventHook = createEventHook();
    provide(ReloadViewDataHookInj, reloadEventHook);
    provide(ReadonlyInj, true);
    const { loadSharedView } = useSharedView();
    const showPassword = ref(false);
    try {
      [__temp, __restore] = withAsyncContext(() => loadSharedView(route.params.viewId)), await __temp, __restore();
    } catch (e) {
      if (((_a = e == null ? void 0 : e.response) == null ? void 0 : _a.status) === 403) {
        showPassword.value = true;
      } else {
        console.error(e);
        message.error(([__temp, __restore] = withAsyncContext(() => extractSdkResponseErrorMsg(e)), __temp = await __temp, __restore(), __temp));
      }
    }
    const __returned__ = { route, reloadEventHook, loadSharedView, showPassword };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SharedViewAskPassword = __nuxt_component_0;
  const _component_SharedViewGrid = __nuxt_component_1;
  const _component_NuxtLayout = __nuxt_component_2;
  return openBlock(), createBlock(_component_NuxtLayout, {
    id: "content",
    class: "flex",
    name: "shared-view"
  }, {
    default: withCtx(() => [
      $setup.showPassword ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_SharedViewAskPassword, {
          modelValue: $setup.showPassword,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.showPassword = $event)
        }, null, 8, ["modelValue"])
      ])) : (openBlock(), createBlock(_component_SharedViewGrid, { key: 1 }))
    ]),
    _: 1
  });
}
var _viewId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _viewId_ as default };
