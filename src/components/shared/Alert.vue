<template>
  <div id="alert">
    <v-alert type="error" dark dismissible tile @input="onClose">
      {{ text }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["text"],
  data() {
    return {
      alert: true,
    };
  },
  methods: {
    onClose() {
      this.$emit("dismissed");
    },
  },
};
</script>
