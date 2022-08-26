import { av as useInjectionState, r as ref, ax as toRefs, ay as useStorage, w as watch } from "./entry-649fbf77.mjs";
const [setup, use] = useInjectionState((props = {}) => {
  var _a, _b;
  let isOpen = ref((_a = props.isOpen) != null ? _a : false);
  let hasSidebar = ref((_b = props.hasSidebar) != null ? _b : true);
  function toggle(state) {
    isOpen.value = state != null ? state : !isOpen.value;
  }
  function toggleHasSidebar(state) {
    hasSidebar.value = state != null ? state : !hasSidebar.value;
  }
  if (props.storageKey) {
    const storage = toRefs(useStorage(props.storageKey, { isOpen, hasSidebar }, localStorage, { mergeDefaults: true }).value);
    isOpen = storage.isOpen;
    hasSidebar = storage.hasSidebar;
  }
  watch(hasSidebar, (nextHasSidebar) => {
    if (!nextHasSidebar)
      toggle(false);
  }, { immediate: true });
  watch(isOpen, (nextIsOpen) => {
    if (nextIsOpen && !hasSidebar.value)
      toggleHasSidebar(true);
  }, { immediate: true });
  return {
    isOpen,
    toggle,
    hasSidebar,
    toggleHasSidebar
  };
}, "useSidebar");
const provideSidebar = setup;
function useSidebar(props = {}) {
  const state = use();
  if (!state) {
    return setup(props);
  } else {
    if (typeof props.isOpen !== "undefined")
      state.isOpen.value = props.isOpen;
    if (typeof props.hasSidebar !== "undefined")
      state.hasSidebar.value = props.hasSidebar;
  }
  return state;
}
export { provideSidebar as p, useSidebar as u };
