import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    moods: [
      {
        creatorId: "",
        mood: "Bored",
        moodId: "bored",
        timesFelt: 6,
        borderColor: "green",
        color: "rgba(69, 196, 150, 0.2)",
      },
      {
        creatorId: "",
        mood: "Happy",
        moodId: "happy",
        timesFelt: 1,
        borderColor: "#ffd700",
        color: "rgba(255, 215, 0, 0.2)",
      },
      {
        creatorId: "",
        mood: "Sad",
        moodId: "sad",
        timesFelt: 2,
        borderColor: "blue",
        color: "rgba(0, 0, 255, 0.2)",
      },
      {
        creatorId: "",
        mood: "Tired",
        moodId: "tired",
        timesFelt: 3,
        borderColor: "#9932cc",
        color: "rgba(153, 50, 204, 0.2)",
      },
      {
        creatorId: "",
        mood: "Anxious",
        moodId: "anxious",
        timesFelt: 4,
        borderColor: "#ffa500",
        color: "rgba(255, 165, 0, 0.2)",
      },
      {
        creatorId: "",
        mood: "Angry",
        moodId: "angry",
        timesFelt: 10,
        borderColor: "red",
        color: "rgba(217, 27, 66, 0.2)",
      },
      {
        creatorId: "",
        mood: "Uncomfortable",
        moodId: "uncomfortable",
        timesFelt: 5,
        borderColor: "#40E0D0",
        color: "rgba(64, 224, 208, 0.2)",
      },
      {
        creatorId: "",
        mood: "Calm",
        moodId: "calm",
        timesFelt: 3,
        borderColor: "#00005f",
        color: "rgba(0, 0, 95, 0.2)",
      },
      {
        creatorId: "",
        mood: "Weird",
        moodId: "weird",
        timesFelt: 75,
        borderColor: "#ff00ff",
        color: "rgba(255, 0, 255, 0.2)",
      },
    ],
  },

  mutations: {
    SET_USER_MOODS(state, payload) {
      state.moods = payload;
    },

    INCREMENT_MOOD(state, payload) {
      const moodToIncrement = state.moods.find((thisMood) => {
        return thisMood.id == payload.moodId;
      });

      if (payload.moodToIncrement) {
        moodToIncrement.timesFelt = payload.moodIncrement;
      }
    },
  },

  actions: {
    incrementMood() {},
  },

  getters: {
    moods(state) {
      return state.moods;
    },
  },
};
