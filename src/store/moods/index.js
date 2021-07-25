export default {
  state: {
    userMoods: null,

    placeHolderMoods: [
      {
        mood:'Sad',
        timesFelt:,
      },

      {
        mood:,
        timesFelt:,
      },

      {
        mood:,
        timesFelt:,
      },

      {
        mood:,
        timesFelt:,
      },

      {
        mood:,
        timesFelt:,
      },

      {
        mood:,
        timesFelt:,
      },
    ],
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
