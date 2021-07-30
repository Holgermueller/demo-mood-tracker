<template>
  <div id="moodGraphs" class="graphs">
    <v-card elevation="0" :loading="loading">
      <v-card-text>
        <!-- <div class="graphs">
          <div v-for="mood in moods" :key="mood.mood" class="mood">
            <div
              class="single-mood"
              :class="mood.mood"
              :style="
                `width: ${Math.floor(
                  (100 / instancesTracked) * mood.timesFelt
                ) || 0}%;
            background: ${mood.color}; border-left: 4px solid ${
                  mood.borderColor
                }; `
              "
            ></div>
            <span>{{ mood.mood }} | Times felt: {{ mood.timesFelt }}</span>
          </div>
        </div> -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MoodBarGraphs",

  data() {
    return {};
  },

  props: {},

  computed: {
    instancesTracked() {
      return this.$store.getters.moods.reduce(
        (a, { timesFelt }) => a + timesFelt,
        0
      );
    },

    loading() {
      return this.$store.getters.loading;
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
}

span {
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
}
</style>
