<template>
  <div id="moodRange">
    <v-card class="mood-range-card" elevation="0" :loading="loading">
      <v-card-title>
        <h2>Hello, {{ userProfile[0].username }}</h2>
      </v-card-title>

      <v-card-text>
        <fieldset>
          <legend>
            How are you feeling?
          </legend>
          <div
            v-for="mood in userProfile[0].userMoods"
            :key="mood.mood"
            class="buttons-array"
          >
            <v-btn
              @click.prevent="incrementMood"
              :color="mood.color"
              :style="`border: 2px solid ${mood.borderColor}`"
              elevation="0"
              :id="mood.mood"
              :value="mood.timesFelt"
              :model="mood.mood"
            >
              {{ mood.mood }}
            </v-btn>
          </div>
        </fieldset>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MoodRangeButtons",

  props: {
    userProfile: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      moodToIncrement: this.mood,
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    incrementMood(e) {
      this.$store.dispatch("incrementMood", {
        mood: e.currentTarget.id,
        moodIncrement: e.currentTarget.value++,
        creatorId: this.userProfile[0].creatorId,
      });
    },
  },
};
</script>

<style scoped>
.mood-range-card {
  width: 75%;
  margin: 2px auto;
}
h2 {
  width: fit-content;
  margin: auto;
}
fieldset {
  width: fit-content;
  margin: 4px auto;
  border-radius: 15px;
  padding: 8px;
}
legend {
  margin: auto;
}
.buttons-array {
  display: inline;
  justify-content: center;
  padding: 8px;
}
.button {
  margin: auto;
  border-radius: 7px;
  width: 15%;
}
</style>
