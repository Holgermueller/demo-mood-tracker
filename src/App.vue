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
