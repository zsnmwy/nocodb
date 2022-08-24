import { _ as _export_sfc, d as defineComponent, $ as useRoute, r as ref, L as useVModel, o as openBlock, j as createBlock, h as withCtx, b as createBaseVNode, g as createVNode, y as createTextVNode, G as __unplugin_components_2$1, H as Form, I as message, K as extractSdkResponseErrorMsg, p as provide, c as createElementBlock, a7 as createEventHook, bZ as withAsyncContext, dE as __nuxt_component_2 } from "./entry-3fb260b7.mjs";
import { u as useSharedView } from "./useSharedView-13bbe605.mjs";
import { _ as __unplugin_components_2 } from "./Title-e956b90a.mjs";
import { _ as __unplugin_components_3 } from "./Password-5ba00449.mjs";
import { B as Button } from "./button-b581df9e.mjs";
import { M as Modal } from "./Modal-ebea9398.mjs";
import { e as __nuxt_component_0$1, d as __nuxt_component_1$1 } from "./Grid-f9457a6b.mjs";
import { a as useProvideSmartsheetStore } from "./useVirtualCell-c4e19ee4.mjs";
import { R as ReloadViewDataHookInj, b as ReadonlyInj, M as MetaInj, A as ActiveViewInj, F as FieldsInj, d as IsPublicInj } from "./index-c79a04bb.mjs";
import "./omit-e185a391.mjs";
import "./TextArea-cb1658fc.mjs";
import "./Input-131cc256.mjs";
import "./antInputDirective-04640d14.mjs";
import "./index-0190fa17.mjs";
import "./pickAttrs-557680ad.mjs";
import "./useState-8faa8040.mjs";
import "./SearchOutlined-205148f4.mjs";
import "./wave-30eabfab.mjs";
import "./index-fbd19973.mjs";
import "./chevron-right-rounded-35585d85.mjs";
import "./menu-844eee66.mjs";
import "./QuickImport-daf29aa5.mjs";
import "./plus-e2b18616.mjs";
import "./delete-outline-27729fed.mjs";
import "./useTabs-60039a93.mjs";
import "./index-bcdb7e23.mjs";
import "./index-255af0e2.mjs";
import "./index-d7455a19.mjs";
import "./LeftOutlined-04561eeb.mjs";
import "./RightOutlined-bc158d3e.mjs";
import "./Checkbox-b6133900.mjs";
import "./index-cfdffcbc.mjs";
import "./dropdown-049aa5ad.mjs";
import "./Dropdown-936f0dc5.mjs";
import "./index-6a9826e0.mjs";
import "./CollapsePanel-16b55852.mjs";
import "./index-23c6ffda.mjs";
import "./Card-76812586.mjs";
import "./index-20cf3a61.mjs";
import "./TabPane-0a9cd9c3.mjs";
import "./minus-circle-outline-bf16c42a.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-f8f52388.mjs";
import "./Cell-284af952.mjs";
import "./index-9ddc029b.mjs";
import "./menu-down-c09fa69d.mjs";
import "./index-18e1b69f.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./star-outline-63b070a7.mjs";
import "./close-cda37e18.mjs";
import "./file-copy-outline-904a1ecf.mjs";
import "./reload-0c2a0aa7.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-ba9775f8.mjs";
import "./discord-6a5f6b2c.mjs";
import "./index-0d04b70f.mjs";
import "./open-in-new-50799f30.mjs";
import "./plus-outline-15081d4a.mjs";
import "./index-42a23e87.mjs";
import "./index-7ecc7bae.mjs";
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
