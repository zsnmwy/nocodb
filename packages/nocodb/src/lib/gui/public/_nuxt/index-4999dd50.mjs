import { dU as effectScope, r as ref, a as unref, u as useNuxtApp, w as watch, a6 as watchEffect, e as computed, dd as tryOnScopeDispose, dV as theme, _ as _export_sfc, d as defineComponent, b_ as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, g as createVNode, h as withCtx, F as Fragment, f as renderList, dp as navigateTo, v as toDisplayString, y as createTextVNode, x as withModifiers, T as normalizeStyle, Y as __unplugin_components_0, a1 as Menu } from "./entry-61ceea7f.mjs";
import { M as MdiMenuDown } from "./menu-down-57034c65.mjs";
import { _ as __unplugin_components_3 } from "./delete-outline-e19db0b9.mjs";
import { M as MdiPlus } from "./plus-15c52e39.mjs";
import { M as MdiDatabaseOutline } from "./database-outline-9a124e5e.mjs";
import { M as MdiEditOutline } from "./edit-outline-700acb0b.mjs";
import { D as Dropdown } from "./dropdown-ba657059.mjs";
import "./Dropdown-9f66da27.mjs";
import "./index-cfa50bee.mjs";
import "./button-da542739.mjs";
import "./wave-52b13188.mjs";
import "./RightOutlined-4a9f51db.mjs";
import "./omit-173fd1c5.mjs";
function useColors(darkMode) {
  const scope = effectScope();
  let mode = ref(unref(darkMode));
  const { $state } = useNuxtApp();
  if (typeof mode.value === "undefined")
    mode.value = $state.darkMode.value;
  scope.run(() => {
    watch($state.darkMode, (newMode) => {
      if (typeof mode.value === "undefined")
        mode.value = newMode;
    });
    watchEffect(() => {
      const newMode = unref(darkMode);
      if (newMode)
        mode.value = newMode;
    });
  });
  tryOnScopeDispose(() => scope.stop());
  const colors = computed(() => mode.value ? theme.dark : theme.light);
  return { colors, getColorByIndex: (i) => colors.value[i % colors.value.length] };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    projects: { default: () => [] }
  },
  emits: ["delete-project"],
  setup(__props, { expose, emit }) {
    expose();
    const { $e } = useNuxtApp();
    const { getColorByIndex } = useColors(true);
    const openProject = async (project) => {
      await navigateTo(`/nc/${project.id}`);
      $e("a:project:open", { count: __props.projects.length });
    };
    const formatTitle = (title) => title.split(" ").map((w) => w[0]).slice(0, 2).join("");
    const __returned__ = { emit, $e, getColorByIndex, openProject, formatTitle, navigateTo, MdiMenuDown, MdiDeleteOutline: __unplugin_components_3, MdiPlus, MdiDatabaseOutline, MdiEditOutline };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 3xl:grid-cols-8 gap-6 md:gap-y-16" };
const _hoisted_2 = { class: "group flex flex-col items-center gap-2" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "prose-lg font-semibold" };
const _hoisted_5 = { class: "col-span-10 text-sm xl:text-md" };
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "grid grid-cols-6 cursor-pointer flex items-center p-2" };
const _hoisted_9 = { class: "col-span-4 text-sm xl:text-md" };
const _hoisted_10 = { class: "grid grid-cols-6 cursor-pointer flex items-center p-2" };
const _hoisted_11 = { class: "col-span-4 text-sm xl:text-md" };
const _hoisted_12 = { class: "prose-lg font-semibold overflow-ellipsis w-full overflow-hidden text-center capitalize" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_list = resolveComponent("v-list");
  const _component_v_menu = resolveComponent("v-menu");
  const _component_a_menu_item = __unplugin_components_0;
  const _component_a_menu = Menu;
  const _component_a_dropdown = Dropdown;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_v_menu, null, {
        activator: withCtx(({ props }) => [
          createBaseVNode("div", {
            class: "thumbnail hover:after:!opacity-100 hover:shadow-lg hover:to-primary/50",
            style: { "--thumbnail-color": "#1348ba" },
            onClick: props.onClick
          }, [
            createVNode($setup["MdiPlus"])
          ], 8, _hoisted_3),
          createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("title.newProj")), 1)
        ]),
        default: withCtx(() => [
          createVNode(_component_v_list, { class: "!py-0 flex flex-col bg-white rounded-lg shadow-md border-1 border-gray-300 mt-2 ml-2" }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: "grid grid-cols-12 cursor-pointer hover:bg-gray-200 flex items-center p-2",
                onClick: _cache[0] || (_cache[0] = ($event) => $setup.navigateTo("/project/create"))
              }, [
                createVNode($setup["MdiPlus"], { class: "col-span-2 mr-1 mt-[1px] text-primary text-lg" }),
                createBaseVNode("div", _hoisted_5, toDisplayString(_ctx.$t("activity.createProject")), 1)
              ]),
              createBaseVNode("div", {
                class: "grid grid-cols-12 cursor-pointer hover:bg-gray-200 flex items-center p-2",
                onClick: _cache[1] || (_cache[1] = ($event) => $setup.navigateTo("/project/create-external"))
              }, [
                createVNode($setup["MdiDatabaseOutline"], { class: "col-span-2 mr-1 mt-[1px] text-green-500 text-lg" }),
                createBaseVNode("div", {
                  class: "col-span-10 text-sm xl:text-md",
                  innerHTML: _ctx.$t("activity.createProjectExtended.extDB")
                }, null, 8, _hoisted_6)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.projects, (project, i) => {
      return openBlock(), createElementBlock("div", {
        key: project.id,
        class: "group flex flex-col items-center gap-2"
      }, [
        createBaseVNode("div", {
          class: "thumbnail",
          style: normalizeStyle({ "--thumbnail-color": $setup.getColorByIndex(i) }),
          onClick: ($event) => $setup.openProject(project)
        }, [
          createTextVNode(toDisplayString($setup.formatTitle(project.title)) + " ", 1),
          createVNode(_component_a_dropdown, {
            onClick: _cache[2] || (_cache[2] = withModifiers(() => {
            }, ["stop"]))
          }, {
            overlay: withCtx(() => [
              createVNode(_component_a_menu, null, {
                default: withCtx(() => [
                  createVNode(_component_a_menu_item, {
                    onClick: withModifiers(($event) => $setup.emit("delete-project", project), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_8, [
                        createVNode($setup["MdiDeleteOutline"], { class: "col-span-2 mr-1 mt-[1px] text-red text-lg" }),
                        createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.$t("general.delete")), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_a_menu_item, {
                    onClick: withModifiers(($event) => $setup.navigateTo(`/project/${project.id}`), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_10, [
                        createVNode($setup["MdiEditOutline"], { class: "col-span-2 mr-1 mt-[1px] text-primary text-lg" }),
                        createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.$t("general.edit")), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 2
              }, 1024)
            ]),
            default: withCtx(() => [
              createVNode($setup["MdiMenuDown"], { class: "menu-icon" })
            ]),
            _: 2
          }, 1024)
        ], 12, _hoisted_7),
        createBaseVNode("div", _hoisted_12, toDisplayString(project.title || "Untitled"), 1)
      ]);
    }), 128))
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-55a07e36"]]);
export { index as default };
