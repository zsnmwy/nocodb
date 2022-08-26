import { m as useGlobal, az as useState, aA as USER_PROJECT_ROLES, e as computed } from "./entry-61ceea7f.mjs";
const rolePermissions = {
  creator: "*",
  owner: "*",
  guest: {},
  editor: {
    smartSheet: true,
    xcDatatableEditable: true,
    column: true,
    tableAttachment: true,
    tableRowUpdate: true,
    dataInsert: true,
    rowComments: true,
    gridViewOptions: true,
    sortSync: true,
    fieldsSync: true,
    gridColUpdate: true,
    filterSync: true,
    csvImport: true,
    apiDocs: true,
    projectSettings: true,
    newUser: false
  },
  commenter: {
    smartSheet: true,
    column: true,
    rowComments: true,
    projectSettings: true
  },
  viewer: {
    smartSheet: true,
    column: true,
    projectSettings: true
  },
  user: {
    projectCreate: true,
    projectActions: true,
    projectSettings: true
  }
};
function useUIPermission() {
  const { user, previewAs } = useGlobal();
  const projectRoles = useState(USER_PROJECT_ROLES, () => ({}));
  const baseRoles = computed(() => {
    var _a;
    let userRoles = ((_a = user.value) == null ? void 0 : _a.roles) || {};
    if (typeof userRoles === "string") {
      userRoles = userRoles.split(",").reduce((acc, role) => {
        acc[role] = true;
        return acc;
      }, {});
    }
    const roles = {
      ...userRoles,
      ...projectRoles.value
    };
    return roles;
  });
  const isUIAllowed = (permission, skipPreviewAs = false) => {
    let roles = baseRoles.value;
    if (previewAs.value && !skipPreviewAs) {
      roles = {
        [previewAs.value]: true
      };
    }
    return Object.entries(roles).some(([role, hasRole]) => {
      const rolePermission = rolePermissions[role];
      return hasRole && (rolePermission === "*" || (rolePermission == null ? void 0 : rolePermission[permission]));
    });
  };
  return { isUIAllowed };
}
export { useUIPermission as u };
