<template>
  <div id="app">
    <router-view />
    <SigninForm v-if="showSigninForm" @onSigninSuccess="handleSigninSuccess" />
    <SignupForm v-if="showSignupForm" @onSignupSuccess="handleSignupSuccess" />
    <!-- Link to create a new account -->
    <p class="gotAccount">No account? <router-link class="link" to="/signup">Sign up here!</router-link></p>
  </div>
</template>

<script>
import SignupForm from '@/components/forms/SignUpForm.vue';
import SigninForm from '@/components/forms/SignInForm.vue'; 

export default {
  components: {
    SigninForm,
    SignupForm
  },
  data() {
    return {
      showSigninForm: true,
      showSignupForm: false,
    };
  },
  methods: {
    handleSigninSuccess(user) {
      console.log('User signed in successfully:', user);
      this.showSigninForm = false;
    },
    handleSignupSuccess(user) {
      console.log('User signed up successfully:', user);
      this.showSignupForm = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.gotAccount {
  margin-bottom: 300px;
  color: white;
}

.link {
  color: #689E3B;
}
</style>
