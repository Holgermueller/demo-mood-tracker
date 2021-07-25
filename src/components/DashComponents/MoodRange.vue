<template>
  <div id="moodRange">
    <h2>Hello, [username]</h2>

    <fieldset>
      <legend>
        How are you feeling today?
      </legend>
      <v-form ref="form">
        <v-btn></v-btn>
        <v-btn></v-btn>
        <v-btn></v-btn>
        <v-btn></v-btn>
        <v-btn></v-btn>
        <v-btn></v-btn>
      </v-form>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "MoodRangeButtons",
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
  margin: 4px auto;
  border-radius: 7px;
  width: 15%;
}
</style>
