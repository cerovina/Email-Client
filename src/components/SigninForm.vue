<template>
  <div>
    <h1>SIGN UP 🚀</h1>
    <form @submit.prevent="handleSignUp">
      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>Password:</label>
      <input type="password" required v-model="password">

      <label>Confirm Password:</label>
      <input type="password" required v-model="confirmPassword">
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <div class="submit">
        <button>Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from '@/components/firebase.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      passwordError: '',
    };
  },
  methods: {
    async handleSignUp() {
      try {
        // Check if passwords match
        if (this.password !== this.confirmPassword) {
          this.passwordError = "Passwords don't match";
          return;
        }

        // Sign up with Firebase using the imported method
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        // Clear form and error
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.passwordError = '';

        alert("Account created!");

        // Get the user from the userCredential
        const user = userCredential.user;

        // Redirect to the user's profile page
        this.$router.push({ name: 'UserProfile', params: { userId: user.uid } });
      } catch (error) {
        // Handle sign-up errors
        this.passwordError = `Error signing up: ${error.message}`;
        console.error('Sign-up error:', error);
      }
    },
  },
};
</script>

<style>
h1 {
  color: white;
  margin-top: -20px;
}
form {
  max-width: 330px;
  margin: 35px auto;
  background-color: #59CBE8;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  border: 10px solid rgb(0, 0, 0);
}
label {
  color: rgb(0, 0, 0);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
button {
  font-size: 1em;
  background: #E93CAC;
  border: 0;
  padding: 20px 40px;
  margin-top: 40px;
  color: black;
  border-radius: 20px;
}
button:hover {
  background: #781e58;
  color: white;
}
.submit {
  text-align: center;
}
.error {
  color: #FF3131;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
