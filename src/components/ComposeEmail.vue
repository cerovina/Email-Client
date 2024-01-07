<template>
    <div class="main">
      <h1>Compose New Email <br> <span class="red">(in development...)</span></h1>
      <form @submit.prevent="sendEmail">
        <label>To:</label>
        <input type="email" required v-model="recipient">
  
        <label>Subject:</label>
        <input type="text" required v-model="subject">
  
        <label>Message:</label>
        <textarea rows="5" required v-model="message"></textarea>
  
        <div class="submit">
          <button>Send Email</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recipient: '',
        subject: '',
        message: '',
      };
    },
    methods: {
      sendEmail() {
        // Implement the logic to send the email
        // Use Firebase or your backend service for this
        // Use the Firebase Cloud Firestore to store email data
        // After sending the email, redirect the user to the Sent folder or show a confirmation message
        // Clear the form fields after sending the email
      },
    },
  };
  </script>
  
  <style scoped>
  .red {
    color: red;
  }
  .main {
    margin-bottom: 400px;
  }
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: white;
  }
  form {
    max-width: 500px;
    margin: 35px auto;
  }
  label {
    display: block;
    margin: 15px 0 5px;
    font-size: 1em;
    font-weight: bold;
    color: white;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    margin-bottom: 15px;
  }
  button {
    font-size: 1em;
    background: #689E3B;
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background: #486e29;
  }
  .submit {
    text-align: center;
  }
  </style>
  