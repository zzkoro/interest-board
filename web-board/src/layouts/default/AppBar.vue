<template lang="">
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>
<script lang="ts">
export default {
  name: "DefaultBar",
  computed: {
    drawer: {
      get() {
        return true;
      },
      set(value) {
        return value;
      },
    },
  },
};
</script>
<style lang=""></style>
