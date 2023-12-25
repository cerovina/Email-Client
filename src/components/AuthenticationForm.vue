<template>
  <div>
    <h1>Authentication</h1>

    <!-- Form for user input -->
    <form @submit.prevent="handleFormSubmit">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Sign In</button>
      <button type="button" @click="signUp">Sign Up</button>
      <button type="button" @click="signOut">Sign Out</button>
    </form>

    <!-- Display success or error messages -->
    <div v-if="successMessage">{{ successMessage }}</div>
    <div v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script>
import { auth } from '@/components/firebase.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    async signUp() {
      try {
        const { email, password } = this;
        await auth.createUserWithEmailAndPassword(email, password);
        this.clearForm();
        this.successMessage = 'User signed up successfully!';
      } catch (error) {
        this.errorMessage = `Error signing up: ${error.message}`;
      }
    },
    async signIn() {
      try {
        const { email, password } = this;
        await auth.signInWithEmailAndPassword(email, password);
        this.clearForm();
        this.successMessage = 'User signed in successfully!';
      } catch (error) {
        this.errorMessage = `Error signing in: ${error.message}`;
      }
    },
    async signOut() {
      try {
        await auth.signOut();
        this.clearForm();
        this.successMessage = 'User signed out successfully!';
      } catch (error) {
        this.errorMessage = `Error signing out: ${error.message}`;
      }
    },
    clearForm() {
      this.email = '';
      this.password = '';
    },
    handleFormSubmit() {
      // Customize this method if needed
      // For now, it's used to prevent the default form submission behavior
    },
  },
};
</script>

<style>
</style>
