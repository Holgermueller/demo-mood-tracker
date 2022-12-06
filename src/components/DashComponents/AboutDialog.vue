<template>
  <div id="About">
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text>
            About
          </v-btn>
        </template>

        <v-card>
          <v-card-title>
            Mood Tracker
          </v-card-title>

          <v-card-text>
            text here
          </v-card-text>

          <v-card-actions>
            <v-btn elevation="0" persistent block @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutDialog",

  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped></style>
