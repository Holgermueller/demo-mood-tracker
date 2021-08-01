<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>
        <v-icon left>mdi-emoticon</v-icon>
        Mood Tracker
        <v-icon right>mdi-emoticon-angry</v-icon>
      </h1>
      <v-spacer></v-spacer>

      <v-btn
        v-if="userIsAuthenticated"
        color="primary"
        elevation="0"
        to="/dashboard"
        >Dash</v-btn
      >

      <v-btn color="primary" elevation="0" to="/about">
        About
      </v-btn>

      <v-btn color="primary" elevation="0" to="resources">Resources</v-btn>

      <v-btn
        v-if="userIsAuthenticated"
        color="primary"
        @click.prevent="logout"
        elevation="0"
        :loading="loading"
        :disabled="loading"
      >
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

  computed: {
    user() {
      return this.$store.getters.user;
    },

    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },

    loading() {
      return this.$store.getters.loading;
    },
  },

  data: () => ({
    //
  }),

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.go({
        path: this.$router.path,
      });
    },
  },
};
</script>

<style scoped>
footer {
  margin: 4px auto 0;
  text-align: center;
}
</style>
