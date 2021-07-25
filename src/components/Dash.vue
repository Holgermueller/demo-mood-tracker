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

  data() {
    return {};
  },
};
</script>

<style scoped></style>
