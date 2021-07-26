export default {
  state: {
    userMoods: null,

    moods: [
      {
        date: "xxx",
        mood: "Bored",
        id: "bored",
        timesFelt: 0,
        borderColor: "green",
        color: "rgba(69, 196, 150, 0.2)",
      },
      {
        date: "yyy",
        mood: "Happy",
        id: "happy",
        timesFelt: 1,
        borderColor: "#ffd700",
        color: "rgba(255, 215, 0, 0.2)",
      },
      {
        date: "xxx",
        mood: "Sad",
        id: "sad",
        timesFelt: 2,
        borderColor: "blue",
        color: "rgba(0, 0, 255, 0.2)",
      },
      {
        date: "xxx",
        mood: "Tired",
        id: "tired",
        timesFelt: 3,
        borderColor: "#9932cc",
        color: "rgba(153, 50, 204, 0.2)",
      },
      {
        date: "xxx",
        mood: "Crazed",
        id: "crazed",
        timesFelt: 4,
        borderColor: "#ffa500",
        color: "rgba(255, 165, 0, 0.2)",
      },
      {
        date: "xxx",
        mood: "Angry",
        id: "angry",
        timesFelt: 10,
        borderColor: "red",
        color: "rgba(217, 27, 66, 0.2)",
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
    // userMoods(state) {
    //   return state.userMoods;
    // },

    moods(state) {
      return state.moods;
    },
  },
};
