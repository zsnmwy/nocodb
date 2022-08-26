import { az as useState, $ as useRoute, Z as useRouter, a9 as useProject, e as computed, dp as navigateTo } from "./entry-649fbf77.mjs";
var TabType = /* @__PURE__ */ ((TabType2) => {
  TabType2["TABLE"] = "table";
  TabType2["VIEW"] = "view";
  TabType2["AUTH"] = "auth";
  return TabType2;
})(TabType || {});
function getPredicate(key) {
  return (tab) => (!("id" in key) || tab.id === key.id) && (!("title" in key) || tab.title === key.title) && (!("type" in key) || tab.type === key.type);
}
function useTabs() {
  const tabs = useState("tabs", () => []);
  const route = useRoute();
  const router = useRouter();
  const { tables } = useProject();
  const projectType = computed(() => route.params.projectType);
  const activeTabIndex = computed({
    get() {
      var _a, _b, _c, _d, _e;
      if (((_a = route.name) == null ? void 0 : _a.startsWith("projectType-projectId-index-index-type-title-viewTitle")) && ((_b = tables.value) == null ? void 0 : _b.length)) {
        const tab = { type: route.params.type, title: route.params.title };
        const id = (_d = (_c = tables.value) == null ? void 0 : _c.find((t) => t.title === tab.title)) == null ? void 0 : _d.id;
        if (!id)
          return -1;
        tab.id = id;
        let index = tabs.value.findIndex((t) => t.id === tab.id);
        if (index === -1) {
          tabs.value.push(tab);
          index = tabs.value.length - 1;
        }
        return index;
      } else if ((_e = route.name) == null ? void 0 : _e.startsWith("nc-projectId-index-index-auth")) {
        return tabs.value.findIndex((t) => t.type === "auth");
      }
      return 0;
    },
    set(index) {
      if (index === -1) {
        navigateTo(`/${projectType.value}/${route.params.projectId}`);
      } else {
        const tab = tabs.value[index];
        if (!tab)
          return;
        return navigateToTab(tab);
      }
    }
  });
  const activeTab = computed(() => {
    var _a;
    return (_a = tabs.value) == null ? void 0 : _a[activeTabIndex.value];
  });
  const addTab = (tabMeta) => {
    const tabIndex = tabs.value.findIndex((tab) => tab.id === tabMeta.id);
    if (tabIndex > -1) {
      activeTabIndex.value = tabIndex;
    } else {
      tabs.value = [...tabs.value || [], tabMeta];
      activeTabIndex.value = tabs.value.length - 1;
    }
  };
  const clearTabs = () => {
    tabs.value = [];
  };
  const closeTab = async (key) => {
    var _a, _b;
    const index = typeof key === "number" ? key : tabs.value.findIndex(getPredicate(key));
    if (activeTabIndex.value === index) {
      let newTabIndex = index - 1;
      if (newTabIndex < 0 && ((_a = tabs.value) == null ? void 0 : _a.length) > 1)
        newTabIndex = index + 1;
      if (newTabIndex === -1) {
        await navigateTo(`/${projectType.value}/${route.params.projectId}`);
      } else {
        await navigateToTab((_b = tabs.value) == null ? void 0 : _b[newTabIndex]);
      }
    }
    tabs.value.splice(index, 1);
  };
  function navigateToTab(tab) {
    switch (tab.type) {
      case "table":
        return navigateTo(`/${projectType.value}/${route.params.projectId}/table/${tab == null ? void 0 : tab.title}${tab.viewTitle ? `/${tab.viewTitle}` : ""}`);
      case "view":
        return navigateTo(`/${projectType.value}/${route.params.projectId}/view/${tab == null ? void 0 : tab.title}${tab.viewTitle ? `/${tab.viewTitle}` : ""}`);
      case "auth":
        return navigateTo(`/${projectType.value}/${route.params.projectId}/auth`);
    }
  }
  const updateTab = (key, newTabItemProps) => {
    const tab = typeof key === "number" ? tabs.value[key] : tabs.value.find(getPredicate(key));
    if (tab) {
      const isActive = tabs.value.indexOf(tab) === activeTabIndex.value;
      Object.assign(tab, newTabItemProps);
      if (isActive && tab.title)
        router.replace({
          params: {
            title: tab.title
          }
        });
    }
  };
  return { tabs, addTab, activeTabIndex, activeTab, clearTabs, closeTab, updateTab };
}
export { TabType as T, useTabs as u };
