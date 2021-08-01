import firebase from "../../firebase/firebaseInit";

export default {
  state: {
    moods: null,
  },

  mutations: {
    SET_MOODS(state, payload) {
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
    getProfileAndMoods({ commit, getters }) {
      commit("SET_LOADING", true);

      firebase
        .collection("userProfiles")
        .where("creatorId", "==", getters.user.userId)
        .onSnapshot(
          (querySnapshot) => {
            let userProfile = [];
            querySnapshot.forEach((doc) => {
              const profileData = {
                userProfileId: doc.id,
                profileId: doc.data().creatorId,
                username: doc.data().username,
                userMoods: doc.data().userMoods,
              };
              userProfile.push(profileData);
            });

            commit("SET_MOODS", userProfile);
            commit("SET_LOADING", false);
          },
          (err) => {
            commit("SET_LOADING", true);
            commit("SET_ERROR", err);
          }
        );
    },

    incrementMood({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("userProfiles")
        .doc()
        .update()
        .then(() => {})
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },
  },

  getters: {
    moods(state) {
      return state.moods;
    },
  },
};
