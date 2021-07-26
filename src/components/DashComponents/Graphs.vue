<template>
  <div id="moodGraphs" class="graphs">
    <h1>Bar graphs</h1>

    <div class="graphs">
      <div v-for="mood in moods" :key="mood.mood" class="mood">
        <div
          class="single-mood"
          :class="mood.mood"
          style="border-left: mood.borderColor;"
        ></div>
        <span>{{ mood.mood }} | Times felt: {{ mood.timesFelt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoodBarGraphs",

  data() {
    return {};
  },

  computed: {
    moods() {
      return this.$store.getters.moods;
    },

    instancesTracked() {
      return this.$store.getters.moods.reduce(
        (a, { timesFelt }) => a + timesFelt,
        0
      );
    },
  },
};
</script>

<style scoped>
.graphs {
  width: 75%;
  margin: 0 auto;
}

.mood {
  background: #fafafa;
  margin: 10px auto;
  position: relative;
}

.single-mood {
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  border-left: 4px solid;
}

span {
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
}
</style>
