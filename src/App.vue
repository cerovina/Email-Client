<template>
  <div id="app">
    <router-view />
    <SignupForm v-if="showSignupForm" @onSignupSuccess="handleSignupSuccess" />
  </div>
</template>

<script>
import SignupForm from '@/components/SigninForm.vue';

export default {
  components: {
    SignupForm,
  },
  data() {
    return {
      showSignupForm: true,
    };
  },
  methods: {
        handleSignupSuccess(user) {
      console.log('User signed up successfully:', user);

      this.showSignupForm = false;

      this.$router.push({
        name: 'UserProfile',
        params: { userId: user.uid },
        query: { email: user.email },
      });
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

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}
</style>
