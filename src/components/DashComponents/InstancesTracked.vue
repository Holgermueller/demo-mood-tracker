<template>
  <div id="instancesTracked">
    <v-card class="instances-tracked-card" elevation="0">
      <v-card-title>
        <h3>Instances tracked: {{ instancesTracked }}</h3>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MoodInstancesTracked",

  props: {
    userProfile: {
      type: Array,
      required: true,
    },
  },

  computed: {
    instancesTracked() {
      return this.userProfile[0].userMoods.reduce(
        (a, { timesFelt }) => a + timesFelt,
        0
      );
    },
  },
};
</script>

<style scoped>
.instances-tracked-card {
  width: 75%;
  margin: 2px auto;
}
h3 {
  width: fit-content;
  margin: auto;
}
</style>
