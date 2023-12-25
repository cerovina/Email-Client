<template>
  <div id="app">
    <SignupForm @onSignupSuccess="handleSignupSuccess" />
  </div>
</template>

<script>
import SignupForm from '@/components/SigninForm.vue';

export default {
  components: {
    SignupForm,
  },
  methods: {
    handleSignupSuccess() {
      // Redirect the user to their profile or another route
      this.$router.push('/profile');
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
