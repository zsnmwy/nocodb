import { _ as __nuxt_component_0 } from "./NocoIcon-8acc214e.mjs";
import { _ as __unplugin_components_4 } from "./rocket-launch-outline-b4e5d955.mjs";
import { _ as __unplugin_components_0 } from "./chevron-left-efbd68d4.mjs";
import { _ as _export_sfc, d as defineComponent, N as useApi, $ as useRoute, r as ref, n as reactive, s as onMounted, P as nextTick, bZ as withAsyncContext, o as openBlock, c as createElementBlock, g as createVNode, A as normalizeClass, b as createBaseVNode, v as toDisplayString, h as withCtx, dp as navigateTo, H as Form, y as createTextVNode, dO as projectTitleValidator, I as message, K as extractSdkResponseErrorMsg, G as __unplugin_components_2 } from "./entry-fe2e349d.mjs";
import { u as useSidebar } from "./index-1ba20144.mjs";
import { I as Input } from "./Input-a826c0f4.mjs";
import "./antInputDirective-04640d14.mjs";
import "./omit-bb2337ec.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { api, isLoading } = useApi();
    useSidebar({ hasSidebar: false });
    const route = useRoute();
    const nameValidationRules = [
      {
        required: true,
        message: "Project name is required"
      },
      projectTitleValidator
    ];
    const form = ref();
    const formState = reactive({
      title: ""
    });
    const getProject = async () => {
      try {
        const result = await api.project.read(route.params.id);
        formState.title = result.title;
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    };
    const renameProject = async () => {
      try {
        await api.project.update(route.params.id, formState);
        navigateTo(`/nc/${route.params.id}`);
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    };
    onMounted(async () => {
      await nextTick(() => {
        setTimeout(() => {
          var _a, _b;
          const input = (_b = (_a = form.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.querySelector("input[type=text]");
          input.setSelectionRange(0, formState.title.length);
          input.focus();
        }, 500);
      });
    });
    [__temp, __restore] = withAsyncContext(() => getProject()), await __temp, __restore();
    const __returned__ = { api, isLoading, route, nameValidationRules, form, formState, getProject, renameProject, navigateTo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "update-project bg-white relative flex-auto flex flex-col justify-center gap-2 p-8 md:rounded-lg md:border-1 md:border-gray-200 md:shadow-xl" };
const _hoisted_2 = { class: "prose-2xl font-bold self-center my-4" };
const _hoisted_3 = { class: "text-center" };
const _hoisted_4 = {
  type: "submit",
  class: "submit"
};
const _hoisted_5 = { class: "flex items-center gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_general_noco_icon = __nuxt_component_0;
  const _component_MdiChevronLeft = __unplugin_components_0;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2;
  const _component_MaterialSymbolsRocketLaunchOutline = __unplugin_components_4;
  const _component_a_form = Form;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_general_noco_icon, {
      class: normalizeClass(["color-transition hover:ring hover:ring-accent", [$setup.isLoading ? "animated-bg-gradient" : ""]])
    }, null, 8, ["class"]),
    createBaseVNode("div", {
      class: "color-transition transform group absolute top-5 left-5 text-4xl rounded-full bg-white cursor-pointer",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.navigateTo("/"))
    }, [
      createVNode(_component_MdiChevronLeft, { class: "text-black group-hover:text-accent group-hover:scale-110" })
    ]),
    createBaseVNode("h1", _hoisted_2, toDisplayString(_ctx.$t("activity.editProject")), 1),
    createVNode(_component_a_form, {
      ref: "form",
      model: $setup.formState,
      name: "basic",
      layout: "vertical",
      class: "lg:max-w-3/4 w-full !mx-auto",
      "no-style": "",
      autocomplete: "off",
      onFinish: $setup.renameProject
    }, {
      default: withCtx(() => [
        createVNode(_component_a_form_item, {
          label: _ctx.$t("labels.projName"),
          name: "title",
          rules: $setup.nameValidationRules
        }, {
          default: withCtx(() => [
            createVNode(_component_a_input, {
              value: $setup.formState.title,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.formState.title = $event),
              name: "title",
              class: "nc-metadb-project-name"
            }, null, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label"]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("button", _hoisted_4, [
            createBaseVNode("span", _hoisted_5, [
              createVNode(_component_MaterialSymbolsRocketLaunchOutline),
              createTextVNode(" " + toDisplayString(_ctx.$t("general.edit")), 1)
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["model"])
  ]);
}
var _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _id_ as default };
