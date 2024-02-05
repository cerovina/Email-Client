<template>
  <div class="main">
    <h1>Sent</h1>
    <div v-if="emails.length === 0" class="noEmails">No sent emails.</div>
    <div v-else>
      <div v-for="email in emails" :key="email.id" class="email">
        <div class="recipient"><span class="green">Recepient:</span> {{ email.recipient }}</div>
        <div class="subject"><span class="green">Subject:</span> {{ email.subject }}</div>
        <div class="message"><span class="green">Message:</span> {{ email.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/components/firebase.js';

export default {
  data() {
    return {
      emails: [],
    };
  },
  async created() {
    await this.fetchSentEmails();
  },
  methods: {
    async fetchSentEmails() {
      const messagesCollection = collection(db, 'messages');
      const querySnapshot = await getDocs(messagesCollection);
      this.emails = querySnapshot.docs.map((doc) => doc.data());
    },
  },
};
</script>

  
  <style scoped>
  .main {
    background-color: #111;
    padding: 10px;
    width: 800px;
    height: 500px;
    margin: auto;
    border-radius: 10px;
    border: 10px solid #9b9b9b;
    margin-bottom: 700px;
  }
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
    margin-top: 10px;
    color: white;
  }
  .green {
    color: #689E3B;
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
  .recipient {
    font-weight: bold;
    color: white;
  }
  .subject {
    color: white;
  }
  .message  {
    color: white;
  }
  @media (max-width: 768px) {
  .main {
    width: 90%;
    margin: auto;
    margin-top: -37px;
    margin-bottom: 100px;
  }
}
  </style>
  