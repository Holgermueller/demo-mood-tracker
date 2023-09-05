<template>
  <div id="dashboard">
    <TodaysDateDisplay />

    <InfoLinks />

    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6 xl6>
          <MoodRangeButtons :moods="moods" />
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 xl6>
          <MoodBarGraphs :moods="moods" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TodaysDateDisplay from "./DashComponents/TodaysDate.vue";
import InfoLinks from "./DashComponents/Information.vue";
import MoodRangeButtons from "./DashComponents/MoodRange.vue";
import MoodBarGraphs from "./DashComponents/Graphs.vue";

export default {
  name: "Dashboard",

  components: {
    TodaysDateDisplay,
    InfoLinks,
    MoodRangeButtons,
    MoodBarGraphs,
  },

  computed: {
    moods() {
      return this.$store.getters.moods;
    },
  },
};
</script>

<style scoped></style>
