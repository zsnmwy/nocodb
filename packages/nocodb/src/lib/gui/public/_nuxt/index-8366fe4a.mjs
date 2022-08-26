import { _ as __nuxt_component_0 } from "./NocoIcon-8acc214e.mjs";
import { _ as __unplugin_components_3 } from "./delete-outline-809194cc.mjs";
import { M as MdiEditOutline } from "./edit-outline-2d73eef7.mjs";
import { M as MdiDatabaseOutline } from "./database-outline-a199e608.mjs";
import { _ as __unplugin_components_4 } from "./plus-outline-d19e476e.mjs";
import { M as MdiMenuDown } from "./menu-down-d9199e40.mjs";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, u as useNuxtApp, N as useApi, r as ref, e as computed, bZ as withAsyncContext, t as resolveDirective, g as createVNode, A as normalizeClass, v as toDisplayString, h as withCtx, j as createBlock, k as createCommentVNode, cz as TransitionGroup, dp as navigateTo, C as pushScopeId, E as popScopeId, X as __unplugin_components_1, B as withDirectives, y as createTextVNode, x as withModifiers, I as message, K as extractSdkResponseErrorMsg, Y as __unplugin_components_0$1, a1 as Menu } from "./entry-fe2e349d.mjs";
import { u as useUIPermission } from "./index-03dd499c.mjs";
import { u as useSidebar } from "./index-1ba20144.mjs";
import { _ as __unplugin_components_2 } from "./index-6cc9109e.mjs";
import "./index-aa513677.mjs";
import { D as Dropdown } from "./dropdown-2e9bbb3f.mjs";
import { S as Skeleton } from "./index-964d6d26.mjs";
import { M as Modal } from "./Modal-6ec32f67.mjs";
import { _ as __unplugin_components_10, a as __unplugin_components_13 } from "./index-752e3e2c.mjs";
import "./Input-a826c0f4.mjs";
import "./antInputDirective-04640d14.mjs";
import "./omit-bb2337ec.mjs";
import "./SearchOutlined-a319fe5d.mjs";
import "./index-e4541ed7.mjs";
import "./button-85170489.mjs";
import "./wave-51bede47.mjs";
import "./TextArea-19a941ff.mjs";
import "./Password-2bc07ccd.mjs";
import "./Dropdown-d7fe3574.mjs";
import "./RightOutlined-593486a9.mjs";
import "./pickAttrs-251338d2.mjs";
import "./index-e208122b.mjs";
import "./index-b5c7d9eb.mjs";
import "./LeftOutlined-b3330d93.mjs";
import "./index-80dcfdcf.mjs";
import "./useState-b38ec006.mjs";
import "./Checkbox-fdabe561.mjs";
const _hoisted_1$1 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_0 = { name: "mdi-refresh", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { $e } = useNuxtApp();
    const { api, isLoading } = useApi();
    const { isUIAllowed } = useUIPermission();
    useSidebar({ hasSidebar: true, isOpen: true });
    const filterQuery = ref("");
    const projects = ref();
    const loadProjects = async () => {
      const response = await api.project.list({});
      projects.value = response.list;
    };
    const filteredProjects = computed(() => {
      var _a, _b;
      return (_b = (_a = projects.value) == null ? void 0 : _a.filter((project) => {
        var _a2, _b2;
        return !filterQuery.value || ((_b2 = (_a2 = project.title) == null ? void 0 : _a2.toLowerCase) == null ? void 0 : _b2.call(_a2).includes(filterQuery.value.toLowerCase()));
      })) != null ? _b : [];
    });
    const deleteProject = (project) => {
      $e("c:project:delete");
      Modal.confirm({
        title: `Do you want to delete '${project.title}' project?`,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        async onOk() {
          var _a, _b;
          try {
            await api.project.delete(project.id);
            $e("a:project:delete");
            (_b = projects.value) == null ? void 0 : _b.splice((_a = projects.value) == null ? void 0 : _a.indexOf(project), 1);
          } catch (e) {
            message.error(await extractSdkResponseErrorMsg(e));
          }
        }
      });
    };
    [__temp, __restore] = withAsyncContext(() => loadProjects()), await __temp, __restore();
    const __returned__ = { $e, api, isLoading, isUIAllowed, filterQuery, projects, loadProjects, filteredProjects, deleteProject, navigateTo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-5f02f69d"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "bg-white relative flex flex-col justify-center gap-2 w-full p-8 md:rounded-lg md:border-1 md:border-gray-200 md:shadow-xl" };
const _hoisted_2 = { class: "flex items-center justify-center gap-2 leading-8 mb-8 mt-4" };
const _hoisted_3 = { class: "text-4xl nc-project-page-title" };
const _hoisted_4 = { class: "flex mb-6" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_6 = { class: "nc-new-project-menu" };
const _hoisted_7 = { class: "flex items-center w-full" };
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { class: "capitalize color-transition group-hover:text-primary !w-[400px] overflow-hidden overflow-ellipsis whitespace-nowrap" };
const _hoisted_11 = { class: "flex items-center gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_general_noco_icon = __nuxt_component_0;
  const _component_MdiRefresh = __unplugin_components_0;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_a_input_search = __unplugin_components_2;
  const _component_MdiMenuDown = MdiMenuDown;
  const _component_MdiPlusOutline = __unplugin_components_4;
  const _component_a_menu_item = __unplugin_components_0$1;
  const _component_MdiDatabaseOutline = MdiDatabaseOutline;
  const _component_a_menu = Menu;
  const _component_a_dropdown = Dropdown;
  const _component_a_skeleton = Skeleton;
  const _component_a_table_column = __unplugin_components_10;
  const _component_MdiEditOutline = MdiEditOutline;
  const _component_MdiDeleteOutline = __unplugin_components_3;
  const _component_a_table = __unplugin_components_13;
  const _directive_t = resolveDirective("t");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_general_noco_icon, {
      class: normalizeClass(["color-transition hover:ring hover:ring-accent", [$setup.isLoading ? "animated-bg-gradient" : ""]])
    }, null, 8, ["class"]),
    createBaseVNode("h1", _hoisted_2, [
      createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.$t("title.myProject")), 1),
      createVNode(_component_a_tooltip, { title: "Reload projects" }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            class: normalizeClass(["transition-all duration-200 h-full flex items-center group hover:ring active:ring active:ring-accent rounded-full mt-1", $setup.isLoading ? "animate-spin ring ring-gray-200" : ""])
          }, [
            withDirectives(createVNode(_component_MdiRefresh, {
              class: normalizeClass(["text-xl text-gray-500 group-hover:text-accent cursor-pointer", $setup.isLoading ? "!text-primary" : ""]),
              onClick: $setup.loadProjects
            }, null, 8, ["class"]), [
              [_directive_t, ["a:project:refresh"]]
            ])
          ], 2)
        ]),
        _: 1
      })
    ]),
    createBaseVNode("div", _hoisted_4, [
      createVNode(_component_a_input_search, {
        value: $setup.filterQuery,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.filterQuery = $event),
        class: "max-w-[250px] nc-project-page-search rounded",
        placeholder: _ctx.$t("activity.searchProject")
      }, null, 8, ["value", "placeholder"]),
      _hoisted_5,
      $setup.isUIAllowed("projectCreate", true) ? (openBlock(), createBlock(_component_a_dropdown, {
        key: 0,
        trigger: ["click"]
      }, {
        overlay: withCtx(() => [
          createVNode(_component_a_menu, { class: "!py-0 rounded" }, {
            default: withCtx(() => [
              createVNode(_component_a_menu_item, null, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createElementBlock("div", {
                    class: "nc-project-menu-item group nc-create-xc-db-project",
                    onClick: _cache[1] || (_cache[1] = ($event) => $setup.navigateTo("/create"))
                  }, [
                    createVNode(_component_MdiPlusOutline, { class: "group-hover:text-accent" }),
                    createBaseVNode("div", null, toDisplayString(_ctx.$t("activity.createProject")), 1)
                  ])), [
                    [_directive_t, ["c:project:create:xcdb"]]
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_a_menu_item, null, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createElementBlock("div", {
                    class: "nc-project-menu-item group",
                    onClick: _cache[2] || (_cache[2] = ($event) => $setup.navigateTo("/create-external"))
                  }, [
                    createVNode(_component_MdiDatabaseOutline, { class: "group-hover:text-accent" }),
                    createBaseVNode("div", {
                      innerHTML: _ctx.$t("activity.createProjectExtended.extDB")
                    }, null, 8, _hoisted_8)
                  ])), [
                    [_directive_t, ["c:project:create:extdb"]]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_6, [
            createBaseVNode("span", _hoisted_7, [
              createTextVNode(toDisplayString(_ctx.$t("title.newProj")) + " ", 1),
              createVNode(_component_MdiMenuDown, { class: "menu-icon" })
            ])
          ])
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    createVNode(TransitionGroup, {
      name: "layout",
      mode: "out-in"
    }, {
      default: withCtx(() => [
        $setup.isLoading ? (openBlock(), createElementBlock("div", _hoisted_9, [
          createVNode(_component_a_skeleton)
        ])) : (openBlock(), createBlock(_component_a_table, {
          key: 1,
          "custom-row": (record) => ({
            onClick: () => {
              $setup.$e("a:project:open");
              $setup.navigateTo(`/nc/${record.id}`);
            },
            class: ["group"]
          }),
          "data-source": $setup.filteredProjects,
          pagination: { position: ["bottomCenter"] }
        }, {
          default: withCtx(() => [
            createVNode(_component_a_table_column, {
              key: "title",
              title: _ctx.$t("general.title"),
              "data-index": "title"
            }, {
              default: withCtx(({ text }) => [
                createBaseVNode("div", _hoisted_10, toDisplayString(text), 1)
              ]),
              _: 1
            }, 8, ["title"]),
            createVNode(_component_a_table_column, {
              key: "id",
              title: _ctx.$t("labels.actions"),
              "data-index": "id"
            }, {
              default: withCtx(({ text, record }) => [
                createBaseVNode("div", _hoisted_11, [
                  withDirectives(createVNode(_component_MdiEditOutline, {
                    class: "nc-action-btn",
                    onClick: withModifiers(($event) => $setup.navigateTo(`/${text}`), ["stop"])
                  }, null, 8, ["onClick"]), [
                    [_directive_t, ["c:project:edit:rename"]]
                  ]),
                  createVNode(_component_MdiDeleteOutline, {
                    class: "nc-action-btn",
                    onClick: withModifiers(($event) => $setup.deleteProject(record), ["stop"])
                  }, null, 8, ["onClick"])
                ])
              ]),
              _: 1
            }, 8, ["title"])
          ]),
          _: 1
        }, 8, ["custom-row", "data-source"]))
      ]),
      _: 1
    })
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5f02f69d"]]);
export { index as default };
