import { _ as _export_sfc, d as defineComponent, $ as useRoute, r as ref, L as useVModel, o as openBlock, j as createBlock, h as withCtx, b as createBaseVNode, g as createVNode, y as createTextVNode, G as __unplugin_components_2$1, H as Form, I as message, K as extractSdkResponseErrorMsg, p as provide, c as createElementBlock, a7 as createEventHook, bZ as withAsyncContext, dE as __nuxt_component_2 } from "./entry-61ceea7f.mjs";
import { u as useSharedView } from "./useSharedView-5255e3c8.mjs";
import { _ as __unplugin_components_2 } from "./Title-4dfe67df.mjs";
import { _ as __unplugin_components_3 } from "./Password-b51c8941.mjs";
import { B as Button } from "./button-da542739.mjs";
import { M as Modal } from "./Modal-d5a36a0f.mjs";
import { e as __nuxt_component_0$1, d as __nuxt_component_1$1 } from "./Grid-c85c6e36.mjs";
import { a as useProvideSmartsheetStore } from "./useVirtualCell-c8c479be.mjs";
import { R as ReloadViewDataHookInj, b as ReadonlyInj, M as MetaInj, A as ActiveViewInj, F as FieldsInj, d as IsPublicInj } from "./index-c79a04bb.mjs";
import "./omit-173fd1c5.mjs";
import "./TextArea-4c687bd9.mjs";
import "./Input-081ff014.mjs";
import "./antInputDirective-04640d14.mjs";
import "./index-3935e1b2.mjs";
import "./pickAttrs-ba132318.mjs";
import "./useState-068748ba.mjs";
import "./SearchOutlined-66b33d9a.mjs";
import "./wave-52b13188.mjs";
import "./index-cfa50bee.mjs";
import "./chevron-right-rounded-217eb6d1.mjs";
import "./menu-38d20d37.mjs";
import "./QuickImport-9f38e32c.mjs";
import "./plus-15c52e39.mjs";
import "./delete-outline-e19db0b9.mjs";
import "./useTabs-019d3d72.mjs";
import "./index-cac97bdd.mjs";
import "./index-ae866fde.mjs";
import "./index-0b1576d7.mjs";
import "./LeftOutlined-f246f0cb.mjs";
import "./RightOutlined-4a9f51db.mjs";
import "./Checkbox-99b125b8.mjs";
import "./index-3d920faa.mjs";
import "./dropdown-ba657059.mjs";
import "./Dropdown-9f66da27.mjs";
import "./index-4f266bad.mjs";
import "./CollapsePanel-3cbe710e.mjs";
import "./index-1a8b4410.mjs";
import "./Card-637b0d8a.mjs";
import "./index-7349112e.mjs";
import "./TabPane-12ca446e.mjs";
import "./minus-circle-outline-fe5ab5b7.mjs";
import "./deepCompare-c3a57270.mjs";
import "./index-c087887c.mjs";
import "./Cell-8f197eca.mjs";
import "./index-2b41c829.mjs";
import "./menu-down-57034c65.mjs";
import "./index-1f166877.mjs";
import "./isNumeric-1b2178ad.mjs";
import "./star-outline-35a0d043.mjs";
import "./close-f98de9d8.mjs";
import "./file-copy-outline-b0187a2b.mjs";
import "./reload-23e1ac74.mjs";
import "./fileUtils-f5868683.mjs";
import "./index-c5e00eea.mjs";
import "./discord-93550eaa.mjs";
import "./index-65c9b1fe.mjs";
import "./open-in-new-51693019.mjs";
import "./plus-outline-acc1ba2b.mjs";
import "./index-0e12d148.mjs";
import "./index-44c1b2d3.mjs";
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
