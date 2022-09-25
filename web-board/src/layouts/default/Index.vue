<template lang="">
  <v-app>
    <default-bar />
    <default-view />
  </v-app>
</template>
<script lang="ts">
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";

export default {
  name: "DefaultLayout",
  components: {
    DefaultBar,
    DefaultView,
  },
};
</script>
<style lang=""></style>
