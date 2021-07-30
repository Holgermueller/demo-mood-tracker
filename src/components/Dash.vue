<template>
  <div id="dashboard">
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

  mounted() {
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
};
</script>

<style scoped></style>
