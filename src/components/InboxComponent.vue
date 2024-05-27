<template>
  <div class="main">
    <h1>INBOX</h1>
    <div v-if="emails.length === 0" class="noEmails">No emails in the inbox.</div>
    <div v-else>
      <div v-for="email in emails" :key="email.id" class="email">
        <div class="emailContent">
          <div class="sender"><span class="brown">From: </span>{{ email.sender }}</div>
          <div class="subject"><span class="green">Subject: </span>{{ email.subject }}</div>
          <div class="message"><span class="green">Message: </span>{{ email.message }}</div>
          <button @click="deleteEmail(email.id)" class="deleteButton">🗑️ Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
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
      this.emails = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    },
    async deleteEmail(emailId) {
      try {
        await deleteDoc(doc(db, 'messages', emailId));
        this.emails = this.emails.filter(email => email.id !== emailId);
      } catch (error) {
        console.error("Error deleting email:", error);
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
.green {
  color: #689E3B;
}
.brown {
  color: #828A37;
}
.email {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 10px solid #9b9b9b;
  font-family: "Electrolize";
  background-color: #111;
}
.sender {
  font-weight: bold;
  color: white;
  font-family: "Electrolize";
}
.subject {
  color: white;
  font-family: "Electrolize";
}
.message {
  color: white;
  font-family: "Electrolize";
}
.deleteButton {
  background: none;
  border: none;
  cursor: pointer;
  color: #d9534f;
  font-size: 1em;
  padding: 0;
  font-family: "Electrolize";
  margin-top: 5px;
}
.deleteButton:hover {
  color: #c9302c;
}
@media (max-width: 768px) {
  .main {
    width: 90%;
    margin: auto;
    margin-top: -37px;
  }
}
</style>
