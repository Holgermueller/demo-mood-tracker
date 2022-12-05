<template>
  <div id="dashboard">
    <TodaysDateDisplay />

    <v-container>
      <v-row>
        <v-col>
          <MoodRangeButtons :moods="moods" />
        </v-col>
        <v-col>
          <MoodBarGraphs :moods="moods" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TodaysDateDisplay from "./DashComponents/TodaysDate.vue";
import MoodRangeButtons from "./DashComponents/MoodRange.vue";
import MoodBarGraphs from "./DashComponents/Graphs.vue";

export default {
  name: "Dashboard",

  components: {
    TodaysDateDisplay,
    MoodRangeButtons,
    MoodBarGraphs,
  },

  // created() {
  //   return this.$store.dispatch("getProfileAndMoods");
  // },

  computed: {
    moods() {
      return this.$store.getters.moods;
    },
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped></style>
