<template>
  <div id="moodRange">
    <h2>Hello, [username]</h2>

    <fieldset>
      <legend>
        How are you feeling today?
      </legend>
      <v-form ref="form" v-for="mood in moods" :key="mood.mood">
        <v-btn
          @click.prevent="incrementMood"
          :color="mood.color"
          :style="`border: 2px solid ${mood.borderColor}`"
          elevation="0"
          :id="mood.mood"
          :value="mood.mood"
        >
          {{ mood.mood }}
        </v-btn>
      </v-form>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "MoodRangeButtons",

  data() {
    return {};
  },

  computed: {
    moods() {
      return this.$store.getters.moods;
    },
  },

  methods: {
    incrementMood() {
      console.log(this.value);
    },
  },
};
</script>

<style scoped>
h2 {
  width: fit-content;
  margin: auto;
}
fieldset {
  width: 55%;
  margin: 4px auto;
  border-radius: 15px;
}
legend {
  margin: auto;
}
form {
  margin: 2px auto;
}
button {
  margin: 2px auto;
  border-radius: 7px;
  width: 15%;
}
</style>
