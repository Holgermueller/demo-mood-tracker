<template>
  <div id="instancesTracked">
    <h3>Instances tracked: {{ instancesTracked }}</h3>
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
h3 {
  width: fit-content;
  margin: auto;
}
</style>
