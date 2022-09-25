<template lang="">
  <v-main>
    <spinner :loading="loading"></spinner>
    <v-container fluid>
      <router-view />
    </v-container>
  </v-main>
</template>
<script lang="ts">
import { reactive, toRefs } from "vue";
import Vue from "vue";
import Spinner from "@/components/Spinner.vue";
import bus from "@/utils/bus";
export default Vue.extend({
  name: "DefaultView",
  components: {
    Spinner,
  },
  setup() {
    console.log(process.env);
    const state = reactive({
      loading: false,
    });

    const onProgress = () => {
      state.loading = true;
    };

    const offProgress = () => {
      state.loading = false;
    };

    bus.$on("on:progress", onProgress);
    bus.$on("off:progress", offProgress);

    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang=""></style>
