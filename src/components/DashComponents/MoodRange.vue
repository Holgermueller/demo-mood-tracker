<template>
  <div id="moodRange">
    <v-card class="mood-range-card" elevation="0" :loading="loading">
      <v-card-title>
        <h2>Hello, [username]</h2>
      </v-card-title>

      <v-card-text>
        <fieldset>
          <legend>
            How are you feeling?
          </legend>
          <!-- <div v-for="mood in moods" :key="mood.mood" class="buttons-array">
            <v-btn
              @click.prevent="incrementMood"
              :color="mood.color"
              :style="`border: 2px solid ${mood.borderColor}`"
              elevation="0"
              :id="mood.mood"
              :value="mood.timesFelt"
              :model="mood"
            >
              {{ mood.mood }}
            </v-btn>
          </div> -->
        </fieldset>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MoodRangeButtons",

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
    incrementMood() {
      // let moodValue = e.currentTarget.value;
      // let moodId = e.currentTarget.id;
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
