import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import AlertCmp from "./components/shared/Alert.vue";

Vue.config.productionTip = false;

Vue.component("app-alert", AlertCmp);

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
