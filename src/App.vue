<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>
        <v-icon left>mdi-emoticon</v-icon>
        Mood Tracker
        <v-icon right>mdi-emoticon-angry</v-icon>
      </h1>
      <v-spacer></v-spacer>
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
footer {
  margin: 4px auto 0;
  text-align: center;
}
</style>
