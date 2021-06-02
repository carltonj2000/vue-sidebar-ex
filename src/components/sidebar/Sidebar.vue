<script>
import { defineComponent } from "vue";
import { collapsed, toggleSidebar, sidebarWidth, sidebarHeight } from "./state";
import SidebarLink from "./SidebarLink.vue";
export default defineComponent({
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth, sidebarHeight };
  },
});
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth, height: sidebarHeight }">
    <span v-if="!collapsed"
      ><h1>Vue Sidebar</h1>
      <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
      <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
      <SidebarLink to="/about" icon="fas fa-image">About</SidebarLink>
    </span>
    <span class="collapse-icon" @click="toggleSidebar">
      <div v-if="collapsed">
        <i class="fas fa-bars"></i>
      </div>
      <div v-else>
        <i class="fas fa-angle-double-left"></i>
      </div>
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>
<style scoped>
h1 {
  margin-top: 0.5rem;
}
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  position: fixed;
  float: left;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.25s linear;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.collapse-icon {
  transition: 0.25s linear;
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
