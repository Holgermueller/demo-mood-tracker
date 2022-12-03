<template>
  <v-app>
    <v-app-bar app class="text-center">
      <h1>
        Mood Tracker
      </h1>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <footer>&copy; 2021-2022 Holger Mueller</footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  computed: {},

  data: () => ({
    //
  }),

  methods: {},
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
