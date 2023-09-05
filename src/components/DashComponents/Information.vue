<template>
  <div id="infoBar">
    <div class="info-links">
      <AboutDialog />

      <!-- <v-btn text elevation="0">
        Full App
      </v-btn> -->
    </div>
  </div>
</template>

<script>
import AboutDialog from "./AboutDialog.vue";

export default {
  name: "InfoBar",

  components: {
    AboutDialog,
  },
};
</script>

<style scoped>
.info-links {
  width: 85%;
  margin: 8px auto;
  border-top: 1px solid #080808;
  border-bottom: 1px solid #080808;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
