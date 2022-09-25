<template lang="">
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script lang="ts">
import "@/styles/overrides.sass";
import Vue from "vue";

export default Vue.extend({
  name: "App",

  setup() {
    console.log(process.env);
    // const state = reactive({
    //   loading: true,
    // });
    // return {
    //   ...toRefs(state),
    // };
  },
});
</script>
<style lang=""></style>
