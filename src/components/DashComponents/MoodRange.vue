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
              large
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
  width: 95%;
  margin: 2px auto;
}
p {
  width: fit-content;
  margin: 4px auto;
  font-size: large;
  font-weight: bold;
}

.buttons-array {
  display: inline;
  justify-content: center;
}
.mood-button {
  margin: 4px auto;
  border-radius: 7px;
  width: 100%;
}
</style>
