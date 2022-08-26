import { _ as _export_sfc, d as defineComponent, $ as useRoute, r as ref, L as useVModel, o as openBlock, j as createBlock, h as withCtx, b as createBaseVNode, g as createVNode, y as createTextVNode, G as __unplugin_components_2$1, H as Form, I as message, K as extractSdkResponseErrorMsg, p as provide, c as createElementBlock, a7 as createEventHook, bZ as withAsyncContext, dE as __nuxt_component_2 } from "./entry-fe2e349d.mjs";
import { u as useSharedView } from "./useSharedView-00e29e46.mjs";
import { _ as __unplugin_components_2 } from "./Title-a5de800c.mjs";
import { _ as __unplugin_components_3 } from "./Password-2bc07ccd.mjs";
import { B as Button } from "./button-85170489.mjs";
import { M as Modal } from "./Modal-6ec32f67.mjs";
import { e as __nuxt_component_0$1, d as __nuxt_component_1$1 } from "./Grid-eb0f952e.mjs";
import { a as useProvideSmartsheetStore } from "./useVirtualCell-79bce99d.mjs";
import { R as ReloadViewDataHookInj, b as ReadonlyInj, M as MetaInj, A as ActiveViewInj, F as FieldsInj, d as IsPublicInj } from "./index-c79a04bb.mjs";
import "./omit-bb2337ec.mjs";
import "./TextArea-19a941ff.mjs";
import "./Input-a826c0f4.mjs";
import "./antInputDirective-04640d14.mjs";
import "./index-80dcfdcf.mjs";
import "./pickAttrs-251338d2.mjs";
import "./useState-b38ec006.mjs";
import "./SearchOutlined-a319fe5d.mjs";
import "./wave-51bede47.mjs";
import "./index-e4541ed7.mjs";
import "./chevron-right-rounded-3f62f732.mjs";
import "./menu-6907f33d.mjs";
import "./QuickImport-adfa0418.mjs";
import "./plus-0f42eb0d.mjs";
import "./delete-outline-809194cc.mjs";
import "./useTabs-9007d20c.mjs";
import "./index-752e3e2c.mjs";
import "./index-e208122b.mjs";
import "./index-b5c7d9eb.mjs";
import "./LeftOutlined-b3330d93.mjs";
import "./RightOutlined-593486a9.mjs";
import "./Checkbox-fdabe561.mjs";
import "./index-aa513677.mjs";
import "./dropdown-2e9bbb3f.mjs";
import "./Dropdown-d7fe3574.mjs";
import "./index-6cc9109e.mjs";
import "./CollapsePanel-4933ec03.mjs";
import "./index-3d03647a.mjs";
import "./Card-6955c823.mjs";
import "./index-d5212021.mjs";
import "./TabPane-95cc1419.mjs";
import "./minus-circle-outline-a8e6550b.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-a0f8494e.mjs";
import "./Cell-e9645bc0.mjs";
import "./index-03dd499c.mjs";
import "./menu-down-d9199e40.mjs";
import "./index-8ed197cb.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./star-outline-d6c974b1.mjs";
import "./close-f6b140f8.mjs";
import "./file-copy-outline-caf79cf0.mjs";
import "./reload-21536936.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-964d6d26.mjs";
import "./discord-72f0b1e1.mjs";
import "./index-7f829eb1.mjs";
import "./open-in-new-2216ac81.mjs";
import "./plus-outline-d19e476e.mjs";
import "./index-1ba20144.mjs";
import "./index-60b554d6.mjs";
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
