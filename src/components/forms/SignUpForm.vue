<template>
  <div>
    <h1>SIGN UP</h1>
    <form @submit.prevent="handleSignUp">
      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>Password:</label>
      <input type="password" required v-model="password">

      <label>Confirm Password:</label>
      <input type="password" required v-model="confirmPassword">
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <div class="submit">
        <button>SIGN UP</button>
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

        // Redirect the user to UserProfile
        this.$router.push({
          name: 'UserProfile',
          params: { userId: user.uid },
          query: { email: user.email },
        });

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
@font-face {
  font-family: 'Electrolize';
  src: url('~@/assets/fonts/Electrolize-Regular.ttf') format('truetype');
}
h1 {
  font-size: 50px;
  color: white;
  margin-top: -20px;
  font-family: "Electrolize";
}
form {
  max-width: 330px;
  margin: 35px auto;
  background-color: #111;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  border: 10px solid #9b9b9b;
  margin-bottom: 300px;
  font-family: "Electrolize";
}
label {
  color: white;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: "Electrolize";
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
button {
  font-size: 1em;
  background:  #26A95E;
  border: 0;
  padding: 20px 40px;
  margin-top: 40px;
  color: white;
  border-radius: 20px;
  font-family: "Electrolize";
}
button:hover {
  background: #828A37;
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
