import { _ as _export_sfc, d as defineComponent, u as useNuxtApp, o as openBlock, c as createElementBlock, b as createBaseVNode, v as toDisplayString, F as Fragment, f as renderList, dp as navigateTo, g as createVNode, x as withModifiers } from "./entry-fe2e349d.mjs";
import { _ as __unplugin_components_3 } from "./delete-outline-809194cc.mjs";
import { M as MdiEditOutline } from "./edit-outline-2d73eef7.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  props: {
    projects: { default: () => [] }
  },
  emits: ["delete-project"],
  setup(__props, { expose, emit }) {
    expose();
    const { $e } = useNuxtApp();
    const openProject = async (project) => {
      await navigateTo(`/nc/${project.id}`);
      $e("a:project:open", { count: __props.projects.length });
    };
    const __returned__ = { emit, $e, openProject, navigateTo, MdiDeleteOutline: __unplugin_components_3, MdiEditOutline };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid grid-cols-3 gap-2 prose-md p-2 font-semibold" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", null, "Updated At", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "col-span-3 w-full h-[1px] bg-gray-500/50" }, null, -1);
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "font-semibold capitalize" };
const _hoisted_7 = { class: "flex justify-center" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "col-span-3 w-full h-[1px] bg-gray-500/30" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", null, toDisplayString(_ctx.$t("general.title")), 1),
      _hoisted_2,
      _hoisted_3
    ]),
    _hoisted_4,
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.projects, (project) => {
      return openBlock(), createElementBlock(Fragment, {
        key: project.id
      }, [
        createBaseVNode("div", {
          class: "cursor-pointer grid grid-cols-3 gap-2 prose-md hover:bg-gray-300/30 p-2 transition-color ease-in duration-100",
          onClick: ($event) => $setup.openProject(project)
        }, [
          createBaseVNode("div", _hoisted_6, toDisplayString(project.title || "Untitled"), 1),
          createBaseVNode("div", null, toDisplayString(project.updated_at), 1),
          createBaseVNode("div", _hoisted_7, [
            createVNode($setup["MdiDeleteOutline"], {
              class: "text-gray-500 hover:text-red-500 mr-2",
              onClick: withModifiers(($event) => $setup.emit("delete-project", project), ["stop"])
            }, null, 8, ["onClick"]),
            createVNode($setup["MdiEditOutline"], {
              class: "text-gray-500 hover:text-primary mr-2",
              onClick: withModifiers(($event) => $setup.navigateTo(`/project/${project.id}`), ["stop"])
            }, null, 8, ["onClick"])
          ])
        ], 8, _hoisted_5),
        _hoisted_8
      ], 64);
    }), 128))
  ]);
}
var list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { list as default };
