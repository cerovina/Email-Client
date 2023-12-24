<template>
    <div>
      <h1>Authentication</h1>
      <button @click="signIn">Sign In</button>
      <button @click="signUp">Sign Up</button>
      <button @click="signOut">Sign Out</button>
    </div>
  </template>
  
  <script>
  import { auth } from '@/components/firebase.js';
  
  export default {
    methods: {
      async signUp() {
        try {
          const { email, password } = await this.getUserCredentials();
          await auth.createUserWithEmailAndPassword(email, password);
          console.log('User signed up successfully!');
        } catch (error) {
          console.error('Error signing up:', error.message);
        }
      },
      async signIn() {
        try {
          const { email, password } = await this.getUserCredentials();
          await auth.signInWithEmailAndPassword(email, password);
          console.log('User signed in successfully!');
        } catch (error) {
          console.error('Error signing in:', error.message);
        }
      },
      async signOut() {
        try {
          await auth.signOut();
          console.log('User signed out successfully!');
        } catch (error) {
          console.error('Error signing out:', error.message);
        }
      },
      getUserCredentials() {
        // Implement a method to prompt the user for email and password or retrieve them from a form.
        return { email: 'test@example.com', password: 'test123' };
      },
    },
  };
  </script>
  
  <style>

  </style>  