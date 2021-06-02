import { ref, computed } from "vue";

export const collapsed = ref(false);
export const toggleSidebar = () => (collapsed.value = !collapsed.value);

const Hidden = 24;
export const SIDEBAR_WIDTH = 180;
export const SIDEBAR_WIDTH_COLLAPSED = Hidden;
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
);

export const SIDEBAR_HEIGHT = "97%";
export const SIDEBAR_HEIGHT_COLLAPSED = `${Hidden}px`;
export const sidebarHeight = computed(() =>
  collapsed.value ? SIDEBAR_HEIGHT_COLLAPSED : SIDEBAR_HEIGHT
);
