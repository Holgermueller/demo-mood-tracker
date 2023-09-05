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
            <p class="about-text">
              This is just a front-end demo of what a user sees when they log in
              to the app. The app presents the user with a range of moods the
              user might be feeling. When the user clicks the button
              representing the mood they feel at that moment, the bar graph
              automatically updates. This gives the user a visual representation
              of how often the feel a given mood across a spectrum of moods.
            </p>
            <p class="about-text">
              A full-stack app will store user input, obviuosly.
            </p>
            <p class="about-text">
              And of course, the user can update as often as they would like.
            </p>
            <!-- <p class="about-text">
              Too see the full-stack app, click
              <v-btn text elevation="0">HERE</v-btn> or the link on the demo.
            </p> -->
          </v-card-text>

          <v-card-actions>
            <v-btn
              elevation="0"
              color="blue"
              persistent
              dark
              block
              @click="dialog = false"
            >
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

<style scoped>
.about-text {
  color: #080808;
  font-size: 1.25em;
  line-height: 1.25em;
}
</style>
