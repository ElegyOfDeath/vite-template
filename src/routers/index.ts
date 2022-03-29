import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default Router;
