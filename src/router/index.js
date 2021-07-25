import Vue from "vue";
import VueRouter from "vue-router";
import LoginReg from "../components/LoginReg";
import Dashboard from "../components/Dash";
import About from "../components/About";
import Resources from "../components/Resources";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "LoginReg",
      component: LoginReg,
    },

    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },

    {
      path: "/about",
      name: "About",
      component: About,
    },

    {
      path: "/resources",
      name: "Resources",
      component: Resources,
    },
  ],
});

export default router;
