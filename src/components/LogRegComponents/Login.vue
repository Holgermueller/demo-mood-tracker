<template>
  <div id="login">
    <v-card elevation="0">
      <v-card-text>
        <v-form ref="form">
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

          <v-flex xs12 sm12 md12 lg12 xl12>
            <p id="forgotPasswordLink">
              <a href="/forgotPassword" class="forgot-password-link"
                >Forgot password?</a
              >
            </p>
          </v-flex>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn @click.prevent="clearForm" elevation="0" color="red" dark>
          <v-icon left>mdi-cancel</v-icon>
          Cancel</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn @click.prevent="checkForm" elevation="0" color="primary" dark
          >Login

          <v-icon right>mdi-login</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginForm",

  data() {
    return {
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
      this.loginUser();
      this.clearForm();
    },

    loginUser() {
      let user = {
        email: this.email,
        password: this.password,
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

<style scoped>
.forgot-password-link {
  color: blue;
  text-decoration: none;
}
</style>
