export default {
  state: {
    user: null,
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    registerUser() {},

    loginUser() {},

    autoSignIn({ commit }, payload) {
      commit("SET_LOADING", false);

      commit("SET_USER", {
        userId: payload.uid,
        email: payload.email,
      });
    },

    logout({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");
    },
  },

  getters: {
    user(state) {
      return state.user;
    },
  },
};
