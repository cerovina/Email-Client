<template>
  <div>
    <h1>Sign in</h1>
    <form @submit.prevent="handleSignIn">
      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>Password:</label>
      <input type="password" required v-model="password">

      <div class="submit">
        <button>Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from '@/components/firebase.js';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSignIn() {
      try {
        // Use signInWithEmailAndPassword from the imported auth module
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        // Handle sign-in success as needed
        const user = userCredential.user;
        console.log('User signed in successfully:', user);

        // Emit the event to notify the parent component (App.vue)
        this.$emit('onAuthSuccess', user);

        // Redirect the user to UserProfile
        this.$router.push({
          name: 'UserProfile',
          params: { userId: user.uid },
          query: { email: user.email },
        });

      } catch (error) {
        // Handle sign-in errors
        console.error('Sign-in error:', error.message);
        alert('User does not exist or password is incorrect');

        // Check the error code
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          console.error('User does not exist or password is incorrect');
        }
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
  