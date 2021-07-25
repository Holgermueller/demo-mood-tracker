<template>
  <div id="todaysDate">
    <h1 class="date-display">Today's Date: {{ todaysDate }}</h1>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "TodaysDateDisplay",

  data() {
    return {
      todaysDate: moment().format("ddd Do MMM YYYY"),
    };
  },
};
</script>

<style scoped>
.date-display {
  width: fit-content;
  margin: 2px auto;
}
</style>
