import { _ as _export_sfc, d as defineComponent, $ as useRoute, r as ref, L as useVModel, o as openBlock, j as createBlock, h as withCtx, b as createBaseVNode, g as createVNode, y as createTextVNode, G as __unplugin_components_2$1, H as Form, I as message, K as extractSdkResponseErrorMsg, p as provide, c as createElementBlock, a7 as createEventHook, bZ as withAsyncContext, dE as __nuxt_component_2 } from "./entry-d9bc2aad.mjs";
import { u as useSharedView } from "./useSharedView-a44d0005.mjs";
import { _ as __unplugin_components_2 } from "./Title-48d2388e.mjs";
import { _ as __unplugin_components_3 } from "./Password-e454255a.mjs";
import { B as Button } from "./button-3d871114.mjs";
import { M as Modal } from "./Modal-3070863e.mjs";
import { e as __nuxt_component_0$1, d as __nuxt_component_1$1 } from "./Grid-00f8dc73.mjs";
import { a as useProvideSmartsheetStore } from "./useVirtualCell-26259a59.mjs";
import { R as ReloadViewDataHookInj, b as ReadonlyInj, M as MetaInj, A as ActiveViewInj, F as FieldsInj, d as IsPublicInj } from "./index-c79a04bb.mjs";
import "./omit-79be01c9.mjs";
import "./TextArea-aec9452a.mjs";
import "./Input-11f8ddea.mjs";
import "./antInputDirective-04640d14.mjs";
import "./index-0b813702.mjs";
import "./pickAttrs-fc04d54e.mjs";
import "./useState-7c8b49a7.mjs";
import "./SearchOutlined-8238e142.mjs";
import "./wave-d4537590.mjs";
import "./index-16f90ce9.mjs";
import "./chevron-right-rounded-50eabc5c.mjs";
import "./menu-1e22d23a.mjs";
import "./QuickImport-2ebd5947.mjs";
import "./plus-e8140861.mjs";
import "./delete-outline-29401aa6.mjs";
import "./useTabs-12375259.mjs";
import "./index-ad6f0376.mjs";
import "./index-44e9a035.mjs";
import "./index-c696756a.mjs";
import "./LeftOutlined-fc38eee0.mjs";
import "./RightOutlined-05bf04ed.mjs";
import "./Checkbox-4ea45600.mjs";
import "./index-db456324.mjs";
import "./dropdown-5e0a28d4.mjs";
import "./Dropdown-ca677e8d.mjs";
import "./index-1454f009.mjs";
import "./CollapsePanel-35d20477.mjs";
import "./index-7b32c79f.mjs";
import "./Card-59408c6a.mjs";
import "./index-fd7ac4f7.mjs";
import "./TabPane-b435e2ca.mjs";
import "./minus-circle-outline-f6556adb.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-af437c52.mjs";
import "./Cell-0c4aa7dc.mjs";
import "./index-3de9c023.mjs";
import "./menu-down-f001ffbb.mjs";
import "./index-1ad4e0b9.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./star-outline-a2e25035.mjs";
import "./close-e1c8b11f.mjs";
import "./file-copy-outline-e7990d77.mjs";
import "./reload-63954944.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-43905f62.mjs";
import "./discord-ae218ea0.mjs";
import "./index-f6f991be.mjs";
import "./open-in-new-e3b3af09.mjs";
import "./plus-outline-737c662f.mjs";
import "./index-80bcfe34.mjs";
import "./index-fb7fe535.mjs";
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
