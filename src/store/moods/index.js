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
        .where("userId", "==", getters.user.userId)
        .onSnapShot(
          (querySnapshot) => {
            console.log(querySnapshot);
            let userProfile = [];

            querySnapshot.forEach((doc) => {
              const profileData = {
                userProfileId: doc.id,
                profileId: doc.data().userId,
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

    incrementMood() {},
  },

  getters: {
    moods(state) {
      return state.moods;
    },
  },
};
