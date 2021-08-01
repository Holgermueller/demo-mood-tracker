import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
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
      props: true,
      meta: {
        requiresAuth: true,
      },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
