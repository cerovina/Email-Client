<template>
  <div id="app">
    <router-view />
    <SigninForm v-if="showSigninForm" @onSigninSuccess="handleSigninSuccess" />
    <SignupForm v-if="showSignupForm" @onSignupSuccess="handleSignupSuccess" />
    <!-- Link to create a new account -->
    <p class="gotAccount" v-if="showSigninForm">No account? <router-link class="link" to="/signup">Sign up here!</router-link></p>
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
  computed: {
    showSigninForm() {
      // Check if the current route is not a wrong page and, if so, hide the Sign in form
      return this.$route.name !== 'UserProfile' &&
             this.$route.path !== "/compose" &&
             this.$route.path !== "/inbox" &&
             this.$route.path !== "/sent" &&
             this.$route.path !== "/trash" &&
             this.$route.path !== "/signup";
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
  color: #828A37;
}
</style>
