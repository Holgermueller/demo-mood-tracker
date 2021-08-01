import firebase from "firebase/app";
import db from "../../firebase/firebaseInit";

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
    registerUser({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          let user = userCredential.user;

          let newUser = {
            email: user.email,
            userId: user.uid,
          };

          commit("SET_USER", newUser);

          db.collection("userProfiles")
            .add({
              username: payload.username,
              creatorId: user.uid,
              userMoods: [
                {
                  mood: "Bored",
                  timesFelt: 0,
                  borderColor: "green",
                  color: "rgba(69, 196, 150, 0.2)",
                },
                {
                  mood: "Happy",
                  timesFelt: 0,
                  borderColor: "#ffd700",
                  color: "rgba(255, 215, 0, 0.2)",
                },
                {
                  mood: "Sad",
                  timesFelt: 0,
                  borderColor: "blue",
                  color: "rgba(0, 0, 255, 0.2)",
                },
                {
                  mood: "Tired",
                  timesFelt: 0,
                  borderColor: "#9932cc",
                  color: "rgba(153, 50, 204, 0.2)",
                },
                {
                  mood: "Anxious",
                  timesFelt: 0,
                  borderColor: "#ffa500",
                  color: "rgba(255, 165, 0, 0.2)",
                },
                {
                  mood: "Angry",
                  timesFelt: 0,
                  borderColor: "red",
                  color: "rgba(217, 27, 66, 0.2)",
                },
                {
                  mood: "Uncomfortable",
                  timesFelt: 0,
                  borderColor: "#40E0D0",
                  color: "rgba(64, 224, 208, 0.2)",
                },
                {
                  mood: "Calm",
                  timesFelt: 0,
                  borderColor: "#00005f",
                  color: "rgba(0, 0, 95, 0.2)",
                },
                {
                  mood: "Weird",
                  timesFelt: 0,
                  borderColor: "#ff00ff",
                  color: "rgba(255, 0, 255, 0.2)",
                },
              ],
            })
            .then(() => {
              commit("SET_LOADING", false);
            })
            .catch((err) => {
              commit("SET_LOADING", true);
              commit("SET_ERROR", err);
            });

          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    loginUser({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const signedInUser = {
            email: user.user.email,
            userId: user.user.uid,
          };
          commit("SET_USER", signedInUser);
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

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

      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("SET_USER", null);
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },
  },

  getters: {
    user(state) {
      return state.user;
    },
  },
};
