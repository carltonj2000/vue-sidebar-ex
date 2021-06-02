<script>
import { defineComponent } from "vue";
import { collapsed, toggleSidebar } from "../components/sidebar/state";

export default defineComponent({
  setup() {
    return { collapsed, toggleSidebar };
  },
});
</script>

<template>
  <h1>The sidebar is {{ collapsed ? "closed" : "open" }}</h1>
  <button @click="toggleSidebar">Toggle Sidebar</button>
</template>
