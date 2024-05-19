<template>
  <div class="main">
    <h1>INBOX</h1>
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
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/components/firebase.js';
import { auth } from '@/components/firebase.js';

export default {
  data() {
    return {
      emails: [],
    };
  },
  async created() {
    const user = auth.currentUser;

    if (user) {
      await this.fetchInboxEmails(user.email);
    }
  },
  methods: {
    async fetchInboxEmails(email) {
      const messagesCollection = collection(db, 'messages');
      const q = query(messagesCollection, where('recipient', '==', email));
      const querySnapshot = await getDocs(q);
      this.emails = querySnapshot.docs.map((doc) => doc.data());
    },
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
  margin-bottom: 100px;
}
}
</style>
