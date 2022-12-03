import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/Dash";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
  ],
});

export default router;
