<template>
    <div class="main">
      <h1>TRASH</h1>
      <div v-if="emails.length === 0" class="noEmails">No emails in the trash.</div>
      <div v-else>
        <div v-for="email in emails" :key="email.id" class="email">
          <div class="sender">{{ email.sender }}</div>
          <div class="subject">{{ email.subject }}</div>
          <div class="message">{{ email.message }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        emails: [], // Fetch and populate this array with deleted emails from Firebase
      };
    },
  };
  </script>
  
  <style scoped>
  @font-face {
  font-family: 'Electrolize';
  src: url('~@/assets/fonts/Electrolize-Regular.ttf') format('truetype');
}
  .main {
    padding: 10px;
    width: 800px;
    height: 500px;
    margin: auto;
    border-radius: 10px;
  }
  h1 {
    font-size: 3em;
    margin-bottom: 40px;
    margin-top: -20px;
    color: white;
    font-family: "Electrolize";
  }
  .noEmails {
    font-size: 1.2em;
    margin-top: 20px;
    color: white;
    font-family: "Electrolize";
  }
  .email {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
  .sender {
    font-weight: bold;
    color: white;
  }
  .subject {
    color: white;
  }
  .message {
    color: white;
  }
  @media (max-width: 768px) {
  .main {
    width: 90%;
    margin: auto;
    margin-top: -37px;
  }
}
  </style>
  