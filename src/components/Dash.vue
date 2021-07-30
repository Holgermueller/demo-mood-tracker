<template>
  <div id="dashboard">
    <v-layout row v-if="error">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <app-alert @dismissed="onDismissed" :v-text="error"></app-alert>
      </v-flex>
    </v-layout>

    {{ user }}
    <TodaysDateDisplay />

    <MoodRangeButtons />

    <InstancesTracked />

    <MoodBarGraphs />
  </div>
</template>

<script>
import TodaysDateDisplay from "./DashComponents/TodaysDate.vue";
import MoodRangeButtons from "./DashComponents/MoodRange.vue";
import InstancesTracked from "./DashComponents/InstancesTracked.vue";
import MoodBarGraphs from "./DashComponents/Graphs.vue";

export default {
  name: "Dashboard",

  components: {
    TodaysDateDisplay,
    MoodRangeButtons,
    InstancesTracked,
    MoodBarGraphs,
  },

  created() {
    return this.$store.dispatch("getProfileAndMoods");
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    userProfile() {
      return this.$store.getters.moods;
    },

    error() {
      return this.$store.getters.error;
    },
  },

  data() {
    return {};
  },

  methods: {
    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>

<style scoped></style>
