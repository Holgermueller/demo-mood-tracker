export default {
  state: {
    userMoods: null,
  },

  mutations: {
    SET_USER_MOODS(state, payload) {
      state.userMoods = payload;
    },
  },

  actions: {},

  getters: {
    userMoods(state) {
      return state.userMoods;
    },
  },
};
