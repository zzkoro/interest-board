import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route } from "vue-router";

import type { RouteConfig } from "vue-router";

import { store } from "@/store";

import { fetchCompanyList } from "@/api";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "layouts-default-index" */
        "@/layouts/default/Index.vue"
      ),
    children: [
      {
        path: "/",
        name: "BasicTables",
        component: () =>
          import(
            /* webpackChunkName: "views-dashboard" */
            "@/views/BasicTables.vue"
          ),
        meta: { requiredAuth: true, authorize: [] },
        beforeEnter: (to: Route, from: Route, next: NavigationGuardNext) => {
          // ...
          next();
        },
      },
    ],
  },
];
const router = new VueRouter({
  mode: process.env.NODE_ENV === "production" ? "hash" : "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const meta = to.meta;

  fetchCompanyList();

  console.log("after fetchCompanyList");

  // const isAuthenticated = store.getters["user/isAuthenticated"];

  // if (meta && meta.requiredAuth && !isAuthenticated) {
  //   return next({ path: "/authentication/sign-in" });
  // }
  next();
});

export default router;
