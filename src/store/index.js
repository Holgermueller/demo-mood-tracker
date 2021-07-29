import Vue from "vue";
import Vuex from "vuex";

import User from "./user";
import Moods from "./moods";
import Shared from "./shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    User,
    Moods,
    Shared,
  },
});
