<template>
  <div id="register">
    <v-card elevation="0">
      <v-card-text>
        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12
            ><v-text-field
              outlined
              type="text"
              v-model="username"
              label="Username"
              prepend-icon="mdi-account-circle"
            ></v-text-field
          ></v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12
            ><v-text-field
              outlined
              type="email"
              v-model="email"
              label="Email"
              prepend-icon="mdi-email"
            ></v-text-field
          ></v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12
            ><v-text-field
              outlined
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              label="Password"
              prepend-icon="mdi-lock"
            ></v-text-field
          ></v-flex>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn @click.prevent="clearForm" elevation="0" color="red" dark>
          <v-icon left>mdi-cancel</v-icon>
          Cancel</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn @click.prevent="checkForm" elevation="0" color="primary" dark>
          Register
          <v-icon right>mdi-login</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",

  data() {
    return {
      username: "",
      email: "",
      password: "",
      showPassword: false,
      currentUser: false,
      userId: null,
    };
  },

  computed: {},

  watch: {},

  methods: {
    checkForm() {
      this.registerUser();
      this.clearForm();
    },

    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        email: this.email,
      };

      console.log(user);
    },

    clearForm() {
      this.$refs.form.reset();
    },

    onDismissed() {},
  },
};
</script>

<style scoped></style>
