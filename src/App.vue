<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>
        <v-icon left>mdi-emoticon</v-icon>
        Mood Tracker
        <v-icon right>mdi-emoticon-angry</v-icon>
      </h1>
      <v-spacer></v-spacer>

      <v-btn to="/dashboard">Dash</v-btn>

      <v-btn to="/about">
        About
      </v-btn>

      <v-btn to="resources">Resources</v-btn>

      <v-btn elevation="0">
        Log out
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <footer>&copy; 2021 Holger Mueller</footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style scoped>
footer {
  margin: 4px auto 0;
  text-align: center;
}
</style>
