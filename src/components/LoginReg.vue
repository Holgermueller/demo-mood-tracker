<template>
  <div id="loginRegister">
    <v-expansion-panels class="login-register" elevation="3">
      <v-expansion-panel
        v-for="(panelData, index) in expansionPanelData"
        :key="index"
      >
        <v-expansion-panel-header id="panelData.id">
          <v-container>
            <v-row>
              <v-col class="text-left">
                <v-icon left>
                  {{ panelData.icon }}
                </v-icon>
                {{ panelData.panelHeader }}
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-header>

        <v-expansion-panel-content
          v-if="panelData.panelHeader === 'Log In Here:'"
        >
          <LoginForm />
        </v-expansion-panel-content>

        <v-expansion-panel-content v-else>
          <RegisterForm />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import LoginForm from "./LogRegComponents/Login.vue";
import RegisterForm from "./LogRegComponents/Reg.vue";

export default {
  name: "LoginRegisterPage",

  components: {
    LoginForm,
    RegisterForm,
  },

  data() {
    return {
      expansionPanelData: [
        {
          id: 1,
          panelHeader: "Log In Here:",
          icon: "mdi-login",
        },
        {
          id: 2,
          panelHeader: "Register Here:",
          icon: "mdi-pen",
        },
      ],
    };
  },
};
</script>

<style scoped>
.login-register {
  width: 75%;
  margin: 5% auto;
  padding: 4px;
}
</style>
