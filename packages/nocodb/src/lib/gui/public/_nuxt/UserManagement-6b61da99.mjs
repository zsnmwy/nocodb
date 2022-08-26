import { o as openBlock, c as createElementBlock, b as createBaseVNode, _ as _export_sfc, d as defineComponent, a4 as toRef, u as useNuxtApp, r as ref, a9 as useProject, al as useClipboard, e as computed, s as onMounted, g as createVNode, v as toDisplayString, h as withCtx, k as createCommentVNode, j as createBlock, F as Fragment, f as renderList, I as message, K as extractSdkResponseErrorMsg, X as __unplugin_components_1, Y as __unplugin_components_0$1, a1 as Menu, ds as ProjectRole, H as Form, bX as isEmail, y as createTextVNode, aj as mergeProps, T as normalizeStyle, dt as projectRoleTagColors, du as projectRoles, G as __unplugin_components_2$1, m as useGlobal, N as useApi, dv as watchDebounced } from "./entry-d9bc2aad.mjs";
import { M as MdiPlus } from "./plus-e8140861.mjs";
import { _ as __unplugin_components_0 } from "./reload-63954944.mjs";
import { _ as __unplugin_components_3$3 } from "./delete-outline-29401aa6.mjs";
import { u as useDashboard, M as MdiOpenInNewIcon, _ as __unplugin_components_3$2 } from "./open-in-new-e3b3af09.mjs";
import { B as Button } from "./button-3d871114.mjs";
import { _ as __unplugin_components_2 } from "./Title-48d2388e.mjs";
import { I as Input } from "./Input-11f8ddea.mjs";
import { M as Modal } from "./Modal-3070863e.mjs";
import { D as Dropdown } from "./dropdown-5e0a28d4.mjs";
import "./index-16f90ce9.mjs";
import "./index-db456324.mjs";
import { S as SelectOption, _ as __unplugin_components_4 } from "./index-0b813702.mjs";
import { _ as __unplugin_components_0$2 } from "./index-8aa28bc0.mjs";
import "./index-1454f009.mjs";
import { u as useUIPermission } from "./index-3de9c023.mjs";
import { S as Spin, _ as __unplugin_components_5$1 } from "./index-c696756a.mjs";
const _hoisted_1$i = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$i = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M3 20V4l19 8Zm2-3l11.85-5L5 7v3.5l6 1.5l-6 1.5Zm0 0V7v6.5Z"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$i
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$i);
}
var __unplugin_components_6$2 = { name: "material-symbols-send-outline", render: render$d };
const _hoisted_1$h = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$h = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$h
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$h);
}
var __unplugin_components_3$1 = { name: "mdi-account-outline", render: render$c };
const _hoisted_1$g = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$g = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"
}, null, -1);
const _hoisted_3$g = [
  _hoisted_2$g
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$g);
}
var CloseIcon = { name: "material-symbols-close-rounded", render: render$b };
const _hoisted_1$f = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$f
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$f);
}
var __unplugin_components_6$1 = { name: "ic-round-keyboard-arrow-down", render: render$a };
const _hoisted_1$e = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$e = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m12.89 3l1.96.4L11.11 21l-1.96-.4L12.89 3m6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83L19.59 12M1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83L1.58 12Z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$e
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$e);
}
var __unplugin_components_5 = { name: "mdi-xml", render: render$9 };
var ShareBaseRole = /* @__PURE__ */ ((ShareBaseRole2) => {
  ShareBaseRole2["Editor"] = "editor";
  ShareBaseRole2["Viewer"] = "viewer";
  return ShareBaseRole2;
})(ShareBaseRole || {});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ShareBase",
  setup(__props, { expose }) {
    expose();
    const __$temp_1 = useDashboard(), dashboardUrl = toRef(__$temp_1, "dashboardUrl");
    const { $api, $e } = useNuxtApp();
    let base = ref(null);
    const showEditBaseDropdown = ref(false);
    const { project } = useProject();
    const { copy } = useClipboard();
    const url = computed(() => base.value && base.value.uuid ? `${dashboardUrl.value}/base/${base.value.uuid}` : null);
    const loadBase = async () => {
      try {
        if (!project.value.id)
          return;
        const res = await $api.project.sharedBaseGet(project.value.id);
        base.value = {
          uuid: res.uuid,
          url: res.url,
          role: res.roles
        };
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    };
    const createShareBase = async (role = "viewer") => {
      try {
        if (!project.value.id)
          return;
        const res = await $api.project.sharedBaseUpdate(project.value.id, {
          roles: role
        });
        base.value = res != null ? res : {};
        base.value.role = role;
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      $e("a:shared-base:enable", { role });
    };
    const disableSharedBase = async () => {
      try {
        if (!project.value.id)
          return;
        await $api.project.sharedBaseDisable(project.value.id);
        base.value = null;
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      $e("a:shared-base:disable");
    };
    const recreate = async () => {
      var _a, _b;
      try {
        if (!project.value.id)
          return;
        const sharedBase = await $api.project.sharedBaseCreate(project.value.id, {
          roles: ((_a = base.value) == null ? void 0 : _a.role) || "viewer"
        });
        const newBase = sharedBase || {};
        base.value = { ...newBase, role: (_b = base.value) == null ? void 0 : _b.role };
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      $e("a:shared-base:recreate");
    };
    const copyUrl = async () => {
      if (!url.value)
        return;
      await copy(url.value);
      message.success("Copied shareable base url to clipboard!");
      $e("c:shared-base:copy-url");
    };
    const navigateToSharedBase = () => {
      if (!url.value)
        return;
      window.open(url.value, "_blank");
      $e("c:shared-base:open-url");
    };
    const generateEmbeddableIframe = () => {
      if (!url.value)
        return;
      copy(`<iframe
class="nc-embed"
src="${url.value}?embed"
frameborder="0"
width="100%"
height="700"
style="background: transparent; border: 1px solid #ddd"></iframe>`);
      message.success("Copied embeddable html code!");
      $e("c:shared-base:copy-embed-frame");
    };
    onMounted(() => {
      if (!base.value) {
        loadBase();
      }
    });
    const __returned__ = { ShareBaseRole, dashboardUrl, $api, $e, base, showEditBaseDropdown, project, copy, url, loadBase, createShareBase, disableSharedBase, recreate, copyUrl, navigateToSharedBase, generateEmbeddableIframe };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$d = { class: "flex flex-col w-full" };
const _hoisted_2$d = { class: "flex flex-row items-center space-x-0.5 pl-2 h-[0.8rem]" };
const _hoisted_3$d = { class: "text-xs" };
const _hoisted_4$3 = {
  key: 0,
  class: "flex flex-row mt-2 bg-red-50 py-4 mx-1 px-2 items-center rounded-sm w-full justify-between"
};
const _hoisted_5$3 = { class: "flex text-xs overflow-x-hidden overflow-ellipsis text-gray-700 pl-2 nc-url" };
const _hoisted_6$3 = { class: "flex border-l-1 pt-1 pl-1" };
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("div", { class: "flex text-xs text-gray-500 mt-2 justify-start ml-2" }, "Generate publicly shareable readonly base", -1);
const _hoisted_8$3 = { class: "mt-4 flex flex-row justify-between mx-1" };
const _hoisted_9$3 = { class: "flex flex-row items-center space-x-2 nc-disable-shared-base" };
const _hoisted_10$3 = { key: 0 };
const _hoisted_11$3 = { key: 1 };
const _hoisted_12$3 = { class: "flex flex-row" };
const _hoisted_13$3 = { class: "w-full px-2 capitalize" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_MdiOpenInNew = MdiOpenInNewIcon;
  const _component_MdiReload = __unplugin_components_0;
  const _component_a_button = Button;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_MdiContentCopy = __unplugin_components_3$2;
  const _component_MdiXml = __unplugin_components_5;
  const _component_IcRoundKeyboardArrowDown = __unplugin_components_6$1;
  const _component_a_menu_item = __unplugin_components_0$1;
  const _component_a_menu = Menu;
  const _component_a_dropdown = Dropdown;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4;
  return openBlock(), createElementBlock("div", _hoisted_1$d, [
    createBaseVNode("div", _hoisted_2$d, [
      createVNode(_component_MdiOpenInNew),
      createBaseVNode("div", _hoisted_3$d, toDisplayString(_ctx.$t("activity.shareBase.link")), 1)
    ]),
    ((_a = $setup.base) == null ? void 0 : _a.uuid) ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
      createBaseVNode("span", _hoisted_5$3, toDisplayString($setup.url), 1),
      createBaseVNode("div", _hoisted_6$3, [
        createVNode(_component_a_tooltip, { placement: "bottom" }, {
          title: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(_ctx.$t("general.reload")), 1)
          ]),
          default: withCtx(() => [
            createVNode(_component_a_button, {
              type: "text",
              class: "!rounded-md mr-1 -mt-1.5 h-[1rem]",
              onClick: $setup.recreate
            }, {
              icon: withCtx(() => [
                createVNode(_component_MdiReload, { class: "flex mx-auto text-gray-600" })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_a_tooltip, { placement: "bottom" }, {
          title: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(_ctx.$t("activity.copyUrl")), 1)
          ]),
          default: withCtx(() => [
            createVNode(_component_a_button, {
              type: "text",
              class: "!rounded-md mr-1 -mt-1.5 h-[1rem]",
              onClick: $setup.copyUrl
            }, {
              icon: withCtx(() => [
                createVNode(_component_MdiContentCopy, { class: "flex mx-auto text-gray-600" })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_a_tooltip, { placement: "bottom" }, {
          title: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(_ctx.$t("activity.openTab")), 1)
          ]),
          default: withCtx(() => [
            createVNode(_component_a_button, {
              type: "text",
              class: "!rounded-md mr-1 -mt-1.5 h-[1rem]",
              onClick: $setup.navigateToSharedBase
            }, {
              icon: withCtx(() => [
                createVNode(_component_MdiOpenInNew, { class: "flex mx-auto text-gray-600" })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_a_tooltip, { placement: "bottom" }, {
          title: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(_ctx.$t("activity.iFrame")), 1)
          ]),
          default: withCtx(() => [
            createVNode(_component_a_button, {
              type: "text",
              class: "!rounded-md mr-1 -mt-1.5 h-[1rem]",
              onClick: $setup.generateEmbeddableIframe
            }, {
              icon: withCtx(() => [
                createVNode(_component_MdiXml, { class: "flex mx-auto text-gray-600" })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])) : createCommentVNode("", true),
    _hoisted_7$3,
    createBaseVNode("div", _hoisted_8$3, [
      createVNode(_component_a_dropdown, {
        modelValue: $setup.showEditBaseDropdown,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.showEditBaseDropdown = $event),
        class: "flex"
      }, {
        overlay: withCtx(() => [
          createVNode(_component_a_menu, null, {
            default: withCtx(() => [
              createVNode(_component_a_menu_item, null, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    ((_a2 = $setup.base) == null ? void 0 : _a2.uuid) ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      onClick: $setup.disableSharedBase
                    }, toDisplayString(_ctx.$t("activity.shareBase.disable")), 1)) : (openBlock(), createElementBlock("div", {
                      key: 1,
                      onClick: _cache[0] || (_cache[0] = ($event) => $setup.createShareBase($setup.ShareBaseRole.Viewer))
                    }, toDisplayString(_ctx.$t("activity.shareBase.enable")), 1))
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(_component_a_button, null, {
            default: withCtx(() => {
              var _a2;
              return [
                createBaseVNode("div", _hoisted_9$3, [
                  ((_a2 = $setup.base) == null ? void 0 : _a2.uuid) ? (openBlock(), createElementBlock("div", _hoisted_10$3, toDisplayString(_ctx.$t("activity.shareBase.enable")), 1)) : (openBlock(), createElementBlock("div", _hoisted_11$3, toDisplayString(_ctx.$t("activity.shareBase.disable")), 1)),
                  createVNode(_component_IcRoundKeyboardArrowDown, { class: "h-[1rem]" })
                ])
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      ((_b = $setup.base) == null ? void 0 : _b.uuid) ? (openBlock(), createBlock(_component_a_select, {
        key: 0,
        value: $setup.base.role,
        "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.base.role = $event),
        class: "flex nc-shared-base-role"
      }, {
        suffixIcon: withCtx(() => [
          createBaseVNode("div", _hoisted_12$3, [
            createVNode(_component_IcRoundKeyboardArrowDown, { class: "text-black -mt-0.5 h-[1rem]" })
          ])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList([$setup.ShareBaseRole.Editor, $setup.ShareBaseRole.Viewer], (role, index) => {
            return openBlock(), createBlock(_component_a_select_option, {
              key: index,
              value: role,
              "dropdown-class-name": "capitalize",
              onClick: ($event) => $setup.createShareBase(role)
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_13$3, toDisplayString(role), 1)
              ]),
              _: 2
            }, 1032, ["value", "onClick"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["value"])) : createCommentVNode("", true)
    ])
  ]);
}
var ShareBase = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UsersModal",
  props: {
    show: { type: Boolean },
    selectedUser: null
  },
  emits: ["closed", "reload"],
  setup(__props, { expose, emit }) {
    expose();
    const { project } = useProject();
    const { $api, $e } = useNuxtApp();
    const { copy } = useClipboard();
    const __$temp_1 = useDashboard(), dashboardUrl = toRef(__$temp_1, "dashboardUrl");
    const usersData = ref({ emails: void 0, role: ProjectRole.Viewer, invitationToken: void 0 });
    const formRef = ref();
    const useForm = Form.useForm;
    const validators = computed(() => {
      return {
        emails: [
          {
            validator: (rule, value, callback) => {
              if (!value || value.length === 0) {
                callback("Email is required");
                return;
              }
              const invalidEmails = (value || "").split(/\s*,\s*/).filter((e) => !isEmail(e));
              if (invalidEmails.length > 0) {
                callback(`${invalidEmails.length > 1 ? " Invalid emails:" : "Invalid email:"} ${invalidEmails.join(", ")} `);
              } else {
                callback();
              }
            }
          }
        ]
      };
    });
    const { validateInfos } = useForm(usersData.value, validators);
    onMounted(() => {
      var _a;
      if (!usersData.value.emails && ((_a = __props.selectedUser) == null ? void 0 : _a.email)) {
        usersData.value.emails = __props.selectedUser.email;
        usersData.value.role = __props.selectedUser.roles;
      }
    });
    const saveUser = async () => {
      var _a, _b;
      $e("a:user:invite", { role: usersData.value.role });
      if (!project.value.id)
        return;
      await ((_a = formRef.value) == null ? void 0 : _a.validateFields());
      try {
        if ((_b = __props.selectedUser) == null ? void 0 : _b.id) {
          await $api.auth.projectUserUpdate(project.value.id, __props.selectedUser.id, {
            roles: usersData.value.role,
            email: __props.selectedUser.email,
            project_id: project.value.id,
            projectName: project.value.title
          });
          emit("closed");
        } else {
          const res = await $api.auth.projectUserAdd(project.value.id, {
            roles: usersData.value.role,
            email: usersData.value.emails,
            project_id: project.value.id,
            projectName: project.value.title
          });
          usersData.value.invitationToken = res.invite_token;
        }
        emit("reload");
        message.success("Successfully updated the user details");
      } catch (e) {
        console.error(e);
        message.error(await extractSdkResponseErrorMsg(e));
      }
    };
    const inviteUrl = computed(() => usersData.value.invitationToken ? `${dashboardUrl.value}/signup/${usersData.value.invitationToken}` : null);
    const copyUrl = async () => {
      if (!inviteUrl.value)
        return;
      await copy(inviteUrl.value);
      message.success("Copied shareable base url to clipboard!");
      $e("c:shared-base:copy-url");
    };
    const clickInviteMore = () => {
      $e("c:user:invite-more");
      usersData.value.invitationToken = void 0;
      usersData.value.role = ProjectRole.Viewer;
      usersData.value.emails = void 0;
    };
    const __returned__ = { emit, project, $api, $e, copy, dashboardUrl, usersData, formRef, useForm, validators, validateInfos, saveUser, inviteUrl, copyUrl, clickInviteMore, ShareBase, projectRoles };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$c = { class: "flex flex-col" };
const _hoisted_2$c = { class: "flex flex-row justify-between items-center pb-1.5 mb-2 border-b-1 w-full" };
const _hoisted_3$c = { class: "px-2 mt-1.5" };
const _hoisted_4$2 = {
  key: 0,
  class: "flex flex-col mt-1 border-b-1 pb-5"
};
const _hoisted_5$2 = { class: "flex flex-row items-center pl-1.5 pb-1 h-[1.1rem]" };
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xs ml-0.5 mt-0.5" }, "Copy Invite Token", -1);
const _hoisted_7$2 = { class: "flex flex-row justify-between items-center py-1" };
const _hoisted_8$2 = { class: "flex pl-2 text-green-700 text-xs" };
const _hoisted_9$2 = { class: "flex text-xs text-gray-500 mt-2 justify-start ml-2" };
const _hoisted_10$2 = { class: "flex flex-row justify-start mt-4 ml-2" };
const _hoisted_11$2 = { class: "flex flex-row justify-center items-center space-x-0.5" };
const _hoisted_12$2 = { class: "text-xs text-gray-600" };
const _hoisted_13$2 = {
  key: 1,
  class: "flex flex-col pb-4"
};
const _hoisted_14$2 = { class: "flex flex-row items-center pl-2 pb-1 h-[1rem]" };
const _hoisted_15$2 = { class: "text-xs ml-0.5 mt-0.5" };
const _hoisted_16$2 = { class: "border-1 py-3 px-4 rounded-md mt-1" };
const _hoisted_17$2 = { class: "flex flex-row space-x-4" };
const _hoisted_18$2 = { class: "flex flex-col w-3/4" };
const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-1 mb-1 text-xs text-gray-500" }, "Email:", -1);
const _hoisted_20$2 = { class: "flex flex-col w-1/4" };
const _hoisted_21$2 = { class: "ml-1 mb-1 text-xs text-gray-500" };
const _hoisted_22$2 = { class: "flex flex-row h-full justify-start items-center" };
const _hoisted_23$2 = { class: "flex flex-row justify-center" };
const _hoisted_24$2 = { key: 0 };
const _hoisted_25$2 = {
  key: 1,
  class: "flex flex-row justify-center items-center space-x-1.5"
};
const _hoisted_26$2 = { class: "flex mt-4" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_typography_title = __unplugin_components_2;
  const _component_MaterialSymbolsCloseRounded = CloseIcon;
  const _component_a_button = Button;
  const _component_MdiAccountOutline = __unplugin_components_3$1;
  const _component_MdiContentCopy = __unplugin_components_3$2;
  const _component_a_alert = __unplugin_components_0$2;
  const _component_MaterialSymbolsSendOutline = __unplugin_components_6$2;
  const _component_a_input = Input;
  const _component_a_form_item = __unplugin_components_2$1;
  const _component_a_select_option = SelectOption;
  const _component_a_select = __unplugin_components_4;
  const _component_a_form = Form;
  const _component_a_modal = Modal;
  return openBlock(), createBlock(_component_a_modal, {
    footer: null,
    centered: "",
    visible: $props.show,
    closable: false,
    width: "max(50vw, 44rem)",
    onCancel: _cache[3] || (_cache[3] = ($event) => $setup.emit("closed"))
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$c, [
        createBaseVNode("div", _hoisted_2$c, [
          createVNode(_component_a_typography_title, {
            class: "select-none",
            level: 4
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("activity.share")) + ": " + toDisplayString($setup.project.title), 1)
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            type: "text",
            class: "!rounded-md mr-1 -mt-1.5",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("closed"))
          }, {
            icon: withCtx(() => [
              createVNode(_component_MaterialSymbolsCloseRounded, { class: "flex mx-auto" })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3$c, [
          $setup.usersData.invitationToken ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
            createBaseVNode("div", _hoisted_5$2, [
              createVNode(_component_MdiAccountOutline),
              _hoisted_6$2
            ]),
            createVNode(_component_a_alert, {
              class: "mt-1",
              type: "success",
              "show-icon": ""
            }, {
              message: withCtx(() => [
                createBaseVNode("div", _hoisted_7$2, [
                  createBaseVNode("div", _hoisted_8$2, toDisplayString($setup.inviteUrl), 1),
                  createVNode(_component_a_button, {
                    type: "text",
                    class: "!rounded-md -mt-0.5",
                    onClick: $setup.copyUrl
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_MdiContentCopy, { class: "flex mx-auto text-green-700 h-[1rem]" })
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_9$2, toDisplayString(_ctx.$t("msg.info.userInviteNoSMTP")) + " " + toDisplayString($setup.usersData.invitationToken && $setup.usersData.emails), 1),
            createBaseVNode("div", _hoisted_10$2, [
              createVNode(_component_a_button, {
                size: "small",
                outlined: "",
                onClick: $setup.clickInviteMore
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_11$2, [
                    createVNode(_component_MaterialSymbolsSendOutline, { class: "flex mx-auto text-gray-600 h-[0.8rem]" }),
                    createBaseVNode("div", _hoisted_12$2, toDisplayString(_ctx.$t("activity.inviteMore")), 1)
                  ])
                ]),
                _: 1
              })
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_13$2, [
            createBaseVNode("div", _hoisted_14$2, [
              createVNode(_component_MdiAccountOutline),
              createBaseVNode("div", _hoisted_15$2, toDisplayString($props.selectedUser ? "Edit User" : "Invite Team"), 1)
            ]),
            createBaseVNode("div", _hoisted_16$2, [
              createVNode(_component_a_form, {
                ref: "formRef",
                "validate-on-rule-change": false,
                model: $setup.usersData,
                "validate-trigger": "onBlur",
                onFinish: $setup.saveUser
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_17$2, [
                    createBaseVNode("div", _hoisted_18$2, [
                      createVNode(_component_a_form_item, mergeProps($setup.validateInfos.emails, {
                        "validate-trigger": "onBlur",
                        name: "emails",
                        rules: [{ required: true, message: "Please input email" }]
                      }), {
                        default: withCtx(() => [
                          _hoisted_19$2,
                          createVNode(_component_a_input, {
                            value: $setup.usersData.emails,
                            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.usersData.emails = $event),
                            "validate-trigger": "onBlur",
                            placeholder: _ctx.$t("labels.email"),
                            disabled: !!$props.selectedUser
                          }, null, 8, ["value", "placeholder", "disabled"])
                        ]),
                        _: 1
                      }, 16)
                    ]),
                    createBaseVNode("div", _hoisted_20$2, [
                      createVNode(_component_a_form_item, {
                        name: "role",
                        rules: [{ required: true, message: "Role required" }]
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_21$2, toDisplayString(_ctx.$t("labels.selectUserRole")), 1),
                          createVNode(_component_a_select, {
                            value: $setup.usersData.role,
                            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.usersData.role = $event),
                            class: "nc-user-roles"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.projectRoles, (role, index) => {
                                return openBlock(), createBlock(_component_a_select_option, {
                                  key: index,
                                  value: role,
                                  class: "nc-role-option"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_22$2, [
                                      createBaseVNode("div", {
                                        class: "px-2 py-1 flex rounded-full text-xs",
                                        style: normalizeStyle({ backgroundColor: projectRoleTagColors[role] })
                                      }, toDisplayString(role), 5)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_23$2, [
                    createVNode(_component_a_button, {
                      type: "primary",
                      "html-type": "submit"
                    }, {
                      default: withCtx(() => [
                        $props.selectedUser ? (openBlock(), createElementBlock("div", _hoisted_24$2, toDisplayString(_ctx.$t("general.save")), 1)) : (openBlock(), createElementBlock("div", _hoisted_25$2, [
                          createVNode(_component_MaterialSymbolsSendOutline, { class: "flex h-[0.8rem]" }),
                          createBaseVNode("div", null, toDisplayString(_ctx.$t("activity.invite")), 1)
                        ]))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["model"])
            ])
          ])),
          createBaseVNode("div", _hoisted_26$2, [
            createVNode($setup["ShareBase"])
          ])
        ])
      ])
    ]),
    _: 1
  }, 8, ["visible"]);
}
var UsersModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _hoisted_1$b = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 1.9a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9M4 7v3H1v2h3v3h2v-3h3v-2H6V7H4m11 6c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1Z"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$b
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$b);
}
var __unplugin_components_6 = { name: "mdi-account-plus-outline", render: render$8 };
const _hoisted_1$a = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$a
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$a);
}
var __unplugin_components_9 = { name: "ic-round-edit", render: render$7 };
const _hoisted_1$9 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$9);
}
var __unplugin_components_13 = { name: "ic-baseline-more-vert", render: render$6 };
const _hoisted_1$8 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5q0-1.875-1.312-3.188Q13.875 7 12 7q-1.875 0-3.188 1.312Q7.5 9.625 7.5 11.5q0 1.875 1.312 3.188Q10.125 16 12 16Zm0-1.8q-1.125 0-1.912-.788Q9.3 12.625 9.3 11.5t.788-1.913Q10.875 8.8 12 8.8t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Zm0 4.8q-3.65 0-6.65-2.038q-3-2.037-4.35-5.462q1.35-3.425 4.35-5.463Q8.35 4 12 4q3.65 0 6.65 2.037q3 2.038 4.35 5.463q-1.35 3.425-4.35 5.462Q15.65 19 12 19Z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$8);
}
var VisibilityOpenIcon = { name: "material-symbols-visibility", render: render$5 };
const _hoisted_1$7 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m19.8 22.6l-4.2-4.15q-.875.275-1.762.413Q12.95 19 12 19q-3.775 0-6.725-2.087Q2.325 14.825 1 11.5q.525-1.325 1.325-2.463Q3.125 7.9 4.15 7L1.4 4.2l1.4-1.4l18.4 18.4ZM12 16q.275 0 .512-.025q.238-.025.513-.1l-5.4-5.4q-.075.275-.1.513q-.025.237-.025.512q0 1.875 1.312 3.188Q10.125 16 12 16Zm7.3.45l-3.175-3.15q.175-.425.275-.862q.1-.438.1-.938q0-1.875-1.312-3.188Q13.875 7 12 7q-.5 0-.938.1q-.437.1-.862.3L7.65 4.85q1.025-.425 2.1-.638Q10.825 4 12 4q3.775 0 6.725 2.087Q21.675 8.175 23 11.5q-.575 1.475-1.512 2.738Q20.55 15.5 19.3 16.45Zm-4.625-4.6l-3-3q.7-.125 1.288.112q.587.238 1.012.688q.425.45.613 1.038q.187.587.087 1.162Z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
var VisibilityCloseIcon = { name: "material-symbols-visibility-off", render: render$4 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ApiTokenManagement",
  setup(__props, { expose }) {
    expose();
    const { $api, $e } = useNuxtApp();
    const __$temp_1 = useProject(), project = toRef(__$temp_1, "project");
    const { copy } = useClipboard();
    let tokensInfo = ref([]);
    let showNewTokenModal = ref(false);
    let showDeleteTokenModal = ref(false);
    let selectedTokenData = ref({});
    const loadApiTokens = async () => {
      var _a;
      if (!((_a = project.value) == null ? void 0 : _a.id))
        return;
      tokensInfo.value = await $api.apiToken.list(project.value.id);
    };
    const openNewTokenModal = () => {
      showNewTokenModal.value = true;
      $e("c:api-token:generate");
    };
    const copyToken = (token) => {
      if (!token)
        return;
      copy(token);
      message.info("Copied to clipboard");
      $e("c:api-token:copy");
    };
    const generateToken = async () => {
      var _a;
      try {
        if (!((_a = project.value) == null ? void 0 : _a.id))
          return;
        await $api.apiToken.create(project.value.id, selectedTokenData.value);
        showNewTokenModal.value = false;
        message.success("Token generated successfully");
        selectedTokenData.value = {};
        await loadApiTokens();
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      $e("a:api-token:generate");
    };
    const deleteToken = async () => {
      var _a;
      try {
        if (!((_a = project.value) == null ? void 0 : _a.id) || !selectedTokenData.value.token)
          return;
        await $api.apiToken.delete(project.value.id, selectedTokenData.value.token);
        message.success("Token deleted successfully");
        await loadApiTokens();
        showDeleteTokenModal.value = false;
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      $e("a:api-token:delete");
    };
    const openDeleteModal = (item) => {
      selectedTokenData.value = item;
      showDeleteTokenModal.value = true;
    };
    onMounted(() => {
      loadApiTokens();
    });
    const __returned__ = { $api, $e, project, copy, tokensInfo, showNewTokenModal, showDeleteTokenModal, selectedTokenData, loadApiTokens, openNewTokenModal, copyToken, generateToken, deleteToken, openDeleteModal, KebabIcon: __unplugin_components_13, MdiPlusIcon: MdiPlus, CloseIcon, ReloadIcon: __unplugin_components_0, VisibilityOpenIcon, VisibilityCloseIcon, MdiDeleteOutlineIcon: __unplugin_components_3$3, MdiContentCopyIcon: __unplugin_components_3$2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = { class: "relative flex flex-col h-full" };
const _hoisted_2$6 = { class: "flex flex-row justify-center w-full -mt-1" };
const _hoisted_3$6 = /* @__PURE__ */ createTextVNode("Generate Token");
const _hoisted_4$1 = { class: "flex flex-col mt-3 justify-center space-y-6" };
const _hoisted_5$1 = { class: "flex flex-row justify-center" };
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode(" Generate ");
const _hoisted_7$1 = { class: "flex flex-col h-full" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-row justify-center mt-2 text-center w-full text-base" }, "This action will remove this API Token", -1);
const _hoisted_9$1 = { class: "flex mt-6 justify-center space-x-2" };
const _hoisted_10$1 = { class: "flex flex-col px-10 mt-6" };
const _hoisted_11$1 = { class: "flex flex-row justify-end" };
const _hoisted_12$1 = { class: "flex flex-row space-x-1" };
const _hoisted_13$1 = { class: "flex flex-row justify-center items-center caption capitalize space-x-1" };
const _hoisted_14$1 = { class: "text-gray-500" };
const _hoisted_15$1 = { class: "flex flex-row justify-center items-center caption capitalize space-x-1" };
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("div", null, "Add New Token", -1);
const _hoisted_17$1 = {
  key: 0,
  class: "w-full flex flex-col mt-2 px-1"
};
const _hoisted_18$1 = { class: "flex flex-row border-b-1 text-gray-600 text-xs pb-2 pt-2" };
const _hoisted_19$1 = { class: "flex w-4/10 pl-2" };
const _hoisted_20$1 = { class: "flex w-4/10 justify-center" };
const _hoisted_21$1 = { class: "flex w-2/10 justify-end pr-2" };
const _hoisted_22$1 = { class: "flex flex-row border-b-1 items-center px-2 py-2" };
const _hoisted_23$1 = { class: "flex flex-row w-4/10 flex-wrap overflow-ellipsis" };
const _hoisted_24$1 = { class: "flex w-4/10 justify-center flex-wrap overflow-ellipsis" };
const _hoisted_25$1 = { key: 0 };
const _hoisted_26$1 = { key: 1 };
const _hoisted_27$1 = { class: "flex flex-row w-2/10 justify-end" };
const _hoisted_28$1 = { key: 0 };
const _hoisted_29$1 = { key: 1 };
const _hoisted_30$1 = /* @__PURE__ */ createTextVNode(" Copy token to clipboard ");
const _hoisted_31 = { class: "flex flex-row items-center" };
const _hoisted_32 = { class: "flex flex-row items-center h-[1.2rem]" };
const _hoisted_33 = ["onClick"];
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xs pl-2" }, "Remove API Token", -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = Button;
  const _component_a_typography_title = __unplugin_components_2;
  const _component_a_input = Input;
  const _component_a_modal = Modal;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_a_menu_item = __unplugin_components_0$1;
  const _component_a_menu = Menu;
  const _component_a_dropdown = Dropdown;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_a_modal, {
      visible: $setup.showNewTokenModal,
      "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => $setup.showNewTokenModal = $event),
      closable: false,
      width: "28rem",
      centered: "",
      footer: null
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$6, [
          createVNode(_component_a_button, {
            type: "text",
            class: "!absolute top-0 right-0 rounded-md -mt-2 -mr-3",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.showNewTokenModal = false)
          }, {
            icon: withCtx(() => [
              createVNode($setup["CloseIcon"], { class: "flex mx-auto" })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_2$6, [
            createVNode(_component_a_typography_title, { level: 5 }, {
              default: withCtx(() => [
                _hoisted_3$6
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(_component_a_input, {
              value: $setup.selectedTokenData.description,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.selectedTokenData.description = $event),
              placeholder: "Description"
            }, null, 8, ["value"]),
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(_component_a_button, {
                type: "primary",
                onClick: $setup.generateToken
              }, {
                default: withCtx(() => [
                  _hoisted_6$1
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible"]),
    createVNode(_component_a_modal, {
      visible: $setup.showDeleteTokenModal,
      "onUpdate:visible": _cache[5] || (_cache[5] = ($event) => $setup.showDeleteTokenModal = $event),
      closable: false,
      width: "28rem",
      centered: "",
      footer: null
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_7$1, [
          _hoisted_8$1,
          createBaseVNode("div", _hoisted_9$1, [
            createVNode(_component_a_button, {
              onClick: _cache[3] || (_cache[3] = ($event) => $setup.showDeleteTokenModal = false)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("general.cancel")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_a_button, {
              type: "primary",
              danger: "",
              onClick: _cache[4] || (_cache[4] = ($event) => $setup.deleteToken())
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("general.confirm")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible"]),
    createBaseVNode("div", _hoisted_10$1, [
      createBaseVNode("div", _hoisted_11$1, [
        createBaseVNode("div", _hoisted_12$1, [
          createVNode(_component_a_button, {
            size: "middle",
            type: "text",
            onClick: _cache[6] || (_cache[6] = ($event) => $setup.loadApiTokens())
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_13$1, [
                createVNode($setup["ReloadIcon"], { class: "text-gray-500" }),
                createBaseVNode("div", _hoisted_14$1, toDisplayString(_ctx.$t("general.reload")), 1)
              ])
            ]),
            _: 1
          }),
          createVNode(_component_a_button, {
            size: "middle",
            type: "primary",
            ghost: "",
            onClick: $setup.openNewTokenModal
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_15$1, [
                createVNode($setup["MdiPlusIcon"]),
                _hoisted_16$1
              ])
            ]),
            _: 1
          })
        ])
      ]),
      $setup.tokensInfo ? (openBlock(), createElementBlock("div", _hoisted_17$1, [
        createBaseVNode("div", _hoisted_18$1, [
          createBaseVNode("div", _hoisted_19$1, toDisplayString(_ctx.$t("labels.description")), 1),
          createBaseVNode("div", _hoisted_20$1, toDisplayString(_ctx.$t("labels.token")), 1),
          createBaseVNode("div", _hoisted_21$1, toDisplayString(_ctx.$t("labels.action")), 1)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.tokensInfo, (item, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "flex flex-col"
          }, [
            createBaseVNode("div", _hoisted_22$1, [
              createBaseVNode("div", _hoisted_23$1, toDisplayString(item.description), 1),
              createBaseVNode("div", _hoisted_24$1, [
                item.show ? (openBlock(), createElementBlock("span", _hoisted_25$1, toDisplayString(item.token), 1)) : (openBlock(), createElementBlock("span", _hoisted_26$1, "****************************************"))
              ]),
              createBaseVNode("div", _hoisted_27$1, [
                createVNode(_component_a_tooltip, { placement: "bottom" }, {
                  title: withCtx(() => [
                    item.show ? (openBlock(), createElementBlock("span", _hoisted_28$1, "Hide API token ")) : (openBlock(), createElementBlock("span", _hoisted_29$1, "Show API token "))
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_a_button, {
                      type: "text",
                      class: "!rounded-md",
                      onClick: ($event) => item.show = !item.show
                    }, {
                      icon: withCtx(() => [
                        item.show ? (openBlock(), createBlock($setup["VisibilityCloseIcon"], {
                          key: 0,
                          class: "flex mx-auto h-[1.1rem]"
                        })) : (openBlock(), createBlock($setup["VisibilityOpenIcon"], {
                          key: 1,
                          class: "flex mx-auto h-[1rem]"
                        }))
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_a_tooltip, { placement: "bottom" }, {
                  title: withCtx(() => [
                    _hoisted_30$1
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_a_button, {
                      type: "text",
                      class: "!rounded-md",
                      onClick: ($event) => $setup.copyToken(item.token)
                    }, {
                      icon: withCtx(() => [
                        createVNode($setup["MdiContentCopyIcon"], { class: "flex mx-auto h-[1rem]" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_a_dropdown, {
                  trigger: ["click"],
                  class: "flex",
                  placement: "bottomRight"
                }, {
                  overlay: withCtx(() => [
                    createVNode(_component_a_menu, null, {
                      default: withCtx(() => [
                        createVNode(_component_a_menu_item, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", {
                              class: "flex flex-row items-center py-1 h-[1rem]",
                              onClick: ($event) => $setup.openDeleteModal(item)
                            }, [
                              createVNode($setup["MdiDeleteOutlineIcon"], { class: "flex" }),
                              _hoisted_34
                            ], 8, _hoisted_33)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_31, [
                      createVNode(_component_a_button, {
                        type: "text",
                        class: "!px-0"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_32, [
                            createVNode($setup["KebabIcon"])
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 2
                }, 1024)
              ])
            ])
          ]);
        }), 128))
      ])) : createCommentVNode("", true)
    ])
  ], 64);
}
var ApiTokenManagement = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _hoisted_1$5 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M13 19c0-.34.04-.67.09-1H4V8l8 5l8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1m7-13l-8 5l-8-5h16m0 16v-2h-4v-2h4v-2l3 3l-3 3Z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
var __unplugin_components_14 = { name: "mdi-email-arrow-right-outline", render: render$3 };
const _hoisted_1$4 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M8.11 19.45a6.948 6.948 0 0 1-4.4-5.1L2.05 6.54c-.24-1.08.45-2.14 1.53-2.37l9.77-2.07l.03-.01c1.07-.21 2.12.48 2.34 1.54l.35 1.67l4.35.93h.03c1.05.24 1.73 1.3 1.51 2.36l-1.66 7.82a6.993 6.993 0 0 1-8.3 5.38a6.888 6.888 0 0 1-3.89-2.34M20 8.18L10.23 6.1l-1.66 7.82v.03c-.57 2.68 1.16 5.32 3.85 5.89c2.69.57 5.35-1.15 5.92-3.84L20 8.18m-4 8.32a2.962 2.962 0 0 1-3.17 1.39a2.974 2.974 0 0 1-2.33-2.55L16 16.5M8.47 5.17L4 6.13l1.66 7.81l.01.03c.15.71.45 1.35.86 1.9c-.1-.77-.08-1.57.09-2.37l.43-2c-.45-.08-.84-.33-1.05-.69c.06-.61.56-1.15 1.25-1.31h.25l.78-3.81c.04-.19.1-.36.19-.52m6.56 7.06c.32-.53 1-.81 1.69-.66c.69.14 1.19.67 1.28 1.29c-.33.52-1 .8-1.7.64c-.69-.13-1.19-.66-1.27-1.27m-4.88-1.04c.32-.53.99-.81 1.68-.66c.67.14 1.2.68 1.28 1.29c-.33.52-1 .81-1.69.68c-.69-.17-1.19-.7-1.27-1.31m1.82-6.76l1.96.42l-.16-.8l-1.8.38Z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var __unplugin_components_8 = { name: "mdi-drama-masks", render: render$2 };
const _hoisted_1$3 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.67 2L12 10.75L5.67 6ZM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2a1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var __unplugin_components_7 = { name: "eva-email-outline", render: render$1 };
const _hoisted_1$2 = {
  class: "nc-icon",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var __unplugin_components_3 = { name: "ic-round-search", render };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FeedbackForm",
  setup(__props, { expose }) {
    expose();
    const { feedbackForm } = useGlobal();
    const __returned__ = { feedbackForm, CloseIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "nc-feedback-form-wrapper mt-6"
};
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = { key: 1 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.feedbackForm && !$setup.feedbackForm.isHidden ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode($setup["CloseIcon"], {
      class: "nc-close-icon",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.feedbackForm.isHidden = true)
    }),
    createBaseVNode("iframe", {
      src: $setup.feedbackForm.url,
      width: "100%",
      height: "500",
      frameborder: "0",
      marginheight: "0",
      marginwidth: "0"
    }, "Loading\u2026 ", 8, _hoisted_2$1)
  ])) : (openBlock(), createElementBlock("div", _hoisted_3$1));
}
var FeedbackForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-13a08aba"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserManagement",
  setup(__props, { expose }) {
    expose();
    const { $e } = useNuxtApp();
    const { api } = useApi();
    const { project } = useProject();
    const { copy } = useClipboard();
    const { isUIAllowed } = useUIPermission();
    const __$temp_1 = useDashboard(), dashboardUrl = toRef(__$temp_1, "dashboardUrl");
    let users = ref(null);
    let selectedUser = ref(null);
    let showUserModal = ref(false);
    let showUserDeleteModal = ref(false);
    let isLoading = ref(false);
    let totalRows = ref(0);
    const currentPage = ref(1);
    const currentLimit = ref(10);
    const searchText = ref("");
    const loadUsers = async (page = currentPage.value, limit = currentLimit.value) => {
      var _a, _b, _c;
      try {
        if (!((_a = project.value) == null ? void 0 : _a.id))
          return;
        const response = await api.auth.projectUserList((_b = project.value) == null ? void 0 : _b.id, {
          query: {
            limit,
            offset: searchText.value.length === 0 ? (page - 1) * limit : 0,
            query: searchText.value
          }
        });
        if (!response.users)
          return;
        totalRows.value = (_c = response.users.pageInfo.totalRows) != null ? _c : 0;
        users.value = response.users.list;
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
    };
    const inviteUser = async (user) => {
      var _a;
      try {
        if (!((_a = project.value) == null ? void 0 : _a.id))
          return;
        await api.auth.projectUserAdd(project.value.id, user);
        message.success("Successfully added user to project");
        await loadUsers();
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      $e("a:user:add");
    };
    const deleteUser = async () => {
      var _a, _b;
      try {
        if (!((_a = project.value) == null ? void 0 : _a.id) || !((_b = selectedUser.value) == null ? void 0 : _b.id))
          return;
        await api.auth.projectUserRemove(project.value.id, selectedUser.value.id);
        message.success("Successfully deleted user from project");
        await loadUsers();
        showUserDeleteModal.value = false;
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      } finally {
        showUserDeleteModal.value = false;
      }
      $e("a:user:delete");
    };
    const onEdit = (user) => {
      selectedUser.value = user;
      showUserModal.value = true;
    };
    const onInvite = () => {
      selectedUser.value = null;
      showUserModal.value = true;
    };
    const onDelete = (user) => {
      selectedUser.value = user;
      showUserDeleteModal.value = true;
    };
    const resendInvite = async (user) => {
      var _a;
      if (!((_a = project.value) == null ? void 0 : _a.id))
        return;
      try {
        await api.auth.projectUserResendInvite(project.value.id, user.id, null);
        message.success("Invite email sent successfully");
        await loadUsers();
      } catch (e) {
        message.error(await extractSdkResponseErrorMsg(e));
      }
      $e("a:user:resend-invite");
    };
    const copyInviteUrl = (user) => {
      if (!user.invite_token)
        return;
      copy(`${dashboardUrl.value}/signup/${user.invite_token}`);
      message.success("Invite url copied to clipboard");
    };
    onMounted(() => {
      if (!users.value) {
        isLoading.value = true;
        loadUsers().finally(() => isLoading.value = false);
      }
    });
    watchDebounced(searchText, () => loadUsers(), { debounce: 300, maxWait: 600 });
    const __returned__ = { $e, api, project, copy, isUIAllowed, dashboardUrl, users, selectedUser, showUserModal, showUserDeleteModal, isLoading, totalRows, currentPage, currentLimit, searchText, loadUsers, inviteUser, deleteUser, onEdit, onInvite, onDelete, resendInvite, copyInviteUrl, UsersModal, FeedbackForm, projectRoleTagColors };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "h-full w-full flex flex-row justify-center mt-42"
};
const _hoisted_2 = {
  key: 1,
  class: "flex flex-col w-full px-6"
};
const _hoisted_3 = { class: "flex flex-col h-full" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-row justify-center mt-2 text-center w-full text-base" }, " This action will remove this user from this project ", -1);
const _hoisted_5 = { class: "flex mt-6 justify-center space-x-2" };
const _hoisted_6 = { class: "flex flex-row mb-4 mx-4 justify-between pb-2" };
const _hoisted_7 = { class: "flex w-1/3" };
const _hoisted_8 = { class: "flex flex-row space-x-1" };
const _hoisted_9 = { class: "flex flex-row justify-center items-center caption capitalize space-x-1" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "text-gray-500" }, "Reload", -1);
const _hoisted_11 = { class: "flex flex-row justify-center items-center caption capitalize space-x-1" };
const _hoisted_12 = { class: "px-5" };
const _hoisted_13 = { class: "flex flex-row border-b-1 pb-2 px-2" };
const _hoisted_14 = { class: "flex flex-row w-4/6 space-x-1 items-center pl-1" };
const _hoisted_15 = { class: "text-gray-600 text-xs space-x-1" };
const _hoisted_16 = { class: "flex flex-row justify-center w-1/6 space-x-1 items-center pl-1" };
const _hoisted_17 = { class: "text-gray-600 text-xs" };
const _hoisted_18 = { class: "flex flex-row w-1/6 justify-end items-center pl-1" };
const _hoisted_19 = { class: "text-gray-600 text-xs" };
const _hoisted_20 = { class: "flex w-4/6 flex-wrap nc-user-email" };
const _hoisted_21 = { class: "flex w-1/6 justify-center flex-wrap ml-4" };
const _hoisted_22 = { class: "flex w-1/6 flex-wrap justify-end" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", null, "Add user to the project", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", null, "Remove user from the project", -1);
const _hoisted_25 = { class: "flex flex-row items-center" };
const _hoisted_26 = { class: "flex flex-row items-center h-[1.2rem]" };
const _hoisted_27 = ["onClick"];
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xs pl-2" }, "Resend invite email", -1);
const _hoisted_29 = ["onClick"];
const _hoisted_30 = { class: "text-xs pl-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_spin = Spin;
  const _component_a_button = Button;
  const _component_a_modal = Modal;
  const _component_IcRoundSearch = __unplugin_components_3;
  const _component_a_input = Input;
  const _component_MdiReload = __unplugin_components_0;
  const _component_MdiAccountPlusOutline = __unplugin_components_6;
  const _component_EvaEmailOutline = __unplugin_components_7;
  const _component_MdiDramaMasks = __unplugin_components_8;
  const _component_IcRoundEdit = __unplugin_components_9;
  const _component_a_tooltip = __unplugin_components_1;
  const _component_MdiPlus = MdiPlus;
  const _component_MdiDeleteOutline = __unplugin_components_3$3;
  const _component_IcBaselineMoreVert = __unplugin_components_13;
  const _component_MdiEmailArrowRightOutline = __unplugin_components_14;
  const _component_a_menu_item = __unplugin_components_0$1;
  const _component_MdiContentCopy = __unplugin_components_3$2;
  const _component_a_menu = Menu;
  const _component_a_dropdown = Dropdown;
  const _component_a_pagination = __unplugin_components_5$1;
  return $setup.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_a_spin, { size: "large" })
  ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
    (openBlock(), createBlock($setup["UsersModal"], {
      key: $setup.showUserModal,
      show: $setup.showUserModal,
      "selected-user": $setup.selectedUser,
      onClosed: _cache[0] || (_cache[0] = ($event) => $setup.showUserModal = false),
      onReload: _cache[1] || (_cache[1] = ($event) => $setup.loadUsers())
    }, null, 8, ["show", "selected-user"])),
    createVNode(_component_a_modal, {
      visible: $setup.showUserDeleteModal,
      "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => $setup.showUserDeleteModal = $event),
      closable: false,
      width: "28rem",
      centered: "",
      footer: null
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3, [
          _hoisted_4,
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_a_button, {
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.showUserDeleteModal = false)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("general.cancel")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_a_button, {
              type: "primary",
              danger: "",
              onClick: $setup.deleteUser
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("general.confirm")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible"]),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("div", _hoisted_7, [
        createVNode(_component_a_input, {
          value: $setup.searchText,
          "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.searchText = $event),
          placeholder: "Filter by email"
        }, {
          prefix: withCtx(() => [
            createVNode(_component_IcRoundSearch, { class: "text-gray-400" })
          ]),
          _: 1
        }, 8, ["value"])
      ]),
      createBaseVNode("div", _hoisted_8, [
        createVNode(_component_a_button, {
          size: "middle",
          type: "text",
          onClick: _cache[5] || (_cache[5] = ($event) => $setup.loadUsers())
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_MdiReload, { class: "text-gray-500" }),
              _hoisted_10
            ])
          ]),
          _: 1
        }),
        $setup.isUIAllowed("newUser") ? (openBlock(), createBlock(_component_a_button, {
          key: 0,
          size: "middle",
          type: "primary",
          ghost: "",
          class: "nc-invite-team",
          onClick: $setup.onInvite
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_MdiAccountPlusOutline, { class: "mr-1" }),
              createBaseVNode("div", null, toDisplayString(_ctx.$t("activity.inviteTeam")), 1)
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ])
    ]),
    createBaseVNode("div", _hoisted_12, [
      createBaseVNode("div", _hoisted_13, [
        createBaseVNode("div", _hoisted_14, [
          createVNode(_component_EvaEmailOutline, { class: "flex text-gray-500 -mt-0.5" }),
          createBaseVNode("div", _hoisted_15, toDisplayString(_ctx.$t("labels.email")), 1)
        ]),
        createBaseVNode("div", _hoisted_16, [
          createVNode(_component_MdiDramaMasks, { class: "flex text-gray-500 -mt-0.5" }),
          createBaseVNode("div", _hoisted_17, toDisplayString(_ctx.$t("objects.role")), 1)
        ]),
        createBaseVNode("div", _hoisted_18, [
          createBaseVNode("div", _hoisted_19, toDisplayString(_ctx.$t("labels.actions")), 1)
        ])
      ]),
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.users, (user, index) => {
        return openBlock(), createElementBlock("div", {
          key: index,
          class: "flex flex-row items-center border-b-1 py-2 px-2 nc-user-row"
        }, [
          createBaseVNode("div", _hoisted_20, toDisplayString(user.email), 1),
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("div", {
              class: "rounded-full px-2 py-1 nc-user-role",
              style: normalizeStyle({ backgroundColor: $setup.projectRoleTagColors[user.roles] })
            }, toDisplayString(user.roles), 5)
          ]),
          createBaseVNode("div", _hoisted_22, [
            user.project_id ? (openBlock(), createBlock(_component_a_tooltip, {
              key: 0,
              placement: "bottom"
            }, {
              title: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(_ctx.$t("activity.editUser")), 1)
              ]),
              default: withCtx(() => [
                createVNode(_component_a_button, {
                  type: "text",
                  class: "!rounded-md nc-user-edit",
                  onClick: ($event) => $setup.onEdit(user)
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_IcRoundEdit, { class: "flex mx-auto h-[1rem] text-gray-500" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 2
            }, 1024)) : createCommentVNode("", true),
            !user.project_id ? (openBlock(), createBlock(_component_a_tooltip, {
              key: 1,
              placement: "bottom"
            }, {
              title: withCtx(() => [
                _hoisted_23
              ]),
              default: withCtx(() => [
                createVNode(_component_a_button, {
                  type: "text",
                  class: "!rounded-md nc-user-invite",
                  onClick: ($event) => $setup.inviteUser(user)
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_MdiPlus, { class: "flex mx-auto h-[1.1rem] text-gray-500" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 2
            }, 1024)) : (openBlock(), createBlock(_component_a_tooltip, {
              key: 2,
              placement: "bottom"
            }, {
              title: withCtx(() => [
                _hoisted_24
              ]),
              default: withCtx(() => [
                createVNode(_component_a_button, {
                  type: "text",
                  class: "!rounded-md nc-user-delete",
                  onClick: ($event) => $setup.onDelete(user)
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_MdiDeleteOutline, { class: "flex mx-auto h-[1.1rem] text-gray-500" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 2
            }, 1024)),
            createVNode(_component_a_dropdown, {
              trigger: ["click"],
              class: "flex",
              placement: "bottomRight"
            }, {
              overlay: withCtx(() => [
                createVNode(_component_a_menu, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_menu_item, null, {
                      default: withCtx(() => [
                        createBaseVNode("div", {
                          class: "flex flex-row items-center py-1",
                          onClick: ($event) => $setup.resendInvite(user)
                        }, [
                          createVNode(_component_MdiEmailArrowRightOutline, { class: "flex h-[1rem] text-gray-500" }),
                          _hoisted_28
                        ], 8, _hoisted_27)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_a_menu_item, null, {
                      default: withCtx(() => [
                        createBaseVNode("div", {
                          class: "flex flex-row items-center py-1",
                          onClick: ($event) => $setup.copyInviteUrl(user)
                        }, [
                          createVNode(_component_MdiContentCopy, { class: "flex h-[1rem] text-gray-500" }),
                          createBaseVNode("div", _hoisted_30, toDisplayString(_ctx.$t("activity.copyInviteURL")), 1)
                        ], 8, _hoisted_29)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_25, [
                  createVNode(_component_a_button, {
                    type: "text",
                    class: "!px-0"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_26, [
                        createVNode(_component_IcBaselineMoreVert)
                      ])
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 2
            }, 1024)
          ])
        ]);
      }), 128)),
      createVNode(_component_a_pagination, {
        current: $setup.currentPage,
        "onUpdate:current": _cache[6] || (_cache[6] = ($event) => $setup.currentPage = $event),
        "hide-on-single-page": "",
        class: "mt-4",
        "page-size": $setup.currentLimit,
        total: $setup.totalRows,
        "show-less-items": "",
        onChange: $setup.loadUsers
      }, null, 8, ["current", "page-size", "total"]),
      createVNode($setup["FeedbackForm"])
    ])
  ]));
}
var UserManagement = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ApiTokenManagement as A, CloseIcon as C, UserManagement as U, __unplugin_components_6 as _, UsersModal as a, __unplugin_components_9 as b };
