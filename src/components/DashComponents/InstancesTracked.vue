<template>
  <div id="instancesTracked">
    <h3>Total instances tracked: {{ instancesTracked }}</h3>
  </div>
</template>

<script>
export default {
  name: "MoodInstancesTracked",

  props: {
    instancesTracked: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
h3 {
  width: fit-content;
  margin: 4px auto;
}
</style>
