<template>
  <div>
    <h1>Sign up</h1>
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
  // SigninForm.vue
  methods: {
    async handleSignUp() {
      console.log('Handling sign up...');
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

        // Emit the event to notify the parent component (App.vue)
        this.$emit('onSignupSuccess', user);

      } catch (error) {
        // Handle sign-up errors
        this.passwordError = `Error signing up: ${error.message}`;
        console.error('Sign-up error:', error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 50px;
  color: white;
  margin-top: -20px;
}
form {
  max-width: 330px;
  margin: 35px auto;
  background-color: #111;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  border: 10px solid #9b9b9b;
}
label {
  color: white;
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
  background: #689E3B;
  border: 0;
  padding: 20px 40px;
  margin-top: 40px;
  color: white;
  border-radius: 20px;
}
button:hover {
  background: #486e29;
;
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
