<template>
  <div id="moodRange">
    <v-card class="mood-range-card" elevation="0">
      <v-card-text>
        <div>
          <p>
            How are you feeling today?
          </p>
          <div v-for="mood in moods" :key="mood.mood" class="buttons-array">
            <v-btn
              @click.prevent="incrementMood"
              :color="mood.color"
              :style="`border: 2px solid ${mood.borderColor}`"
              class="mood-button"
              elevation="0"
              :id="mood.mood"
              :value="mood.timesFelt"
              :model="mood.mood"
            >
              {{ mood.mood }}
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MoodRangeButtons",

  props: {
    moods: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      moodToIncrement: this.mood,
    };
  },

  methods: {
    incrementMood(e) {
      this.$store.dispatch("incrementMood", {
        mood: e.currentTarget.id,
        moodIncrement: e.currentTarget.value++,
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
p {
  text-align: center;
  margin: auto;
}
.buttons-array {
  display: inline;
  justify-content: center;
  padding: 8px;
}
.mood-button {
  margin: 4px auto;
  border-radius: 7px;
  width: 100%;
}
</style>
