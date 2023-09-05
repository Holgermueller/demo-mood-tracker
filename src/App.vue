<template>
  <v-app>
    <v-app-bar app class="text-center">
      <h1>
        Mood Tracker
      </h1>
    </v-app-bar>

    <v-main>
      <Dash />
    </v-main>

    <footer>&copy; 2021-2023 Holger Mueller</footer>
  </v-app>
</template>

<script>
import Dash from "./components/Dash.vue";

export default {
  name: "App",

  components: {
    Dash,
  },
};
</script>

<style scoped>
h1 {
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background-clip: text;
  color: transparent;
  width: max-content;
  margin: auto;
  font-weight: bolder;
}

footer {
  margin: 4px auto 0;
  text-align: center;
}
</style>
