<template>
  <div id="instancesTracked">
    <p>Total instances tracked: {{ instancesTracked }}</p>
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
p {
  width: fit-content;
  margin: 4px auto;
  font-size: large;
  font-weight: bold;
}
</style>
