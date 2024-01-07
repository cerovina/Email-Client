<template>
    <div class="main">
      <h1>Inbox</h1>
      <div v-if="emails.length === 0" class="noEmails">No emails in the inbox.</div>
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
        emails: [], // Fetch and populate this array with emails from Firebase or your backend
      };
    },
  };
  </script>
  
  <style scoped>
  .main {
    margin-bottom: 700px;
  }
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: white;
  }
  .noEmails {
    font-size: 1.2em;
    margin-top: 20px;
    color: white;
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

  </style>
  