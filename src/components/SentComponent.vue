<template>
  <div class="main">
    <h1>SENT</h1>
    <div v-if="emails.length === 0" class="noEmails">No sent emails.</div>
    <div v-else>
      <div v-for="email in emails" :key="email.id" class="email">
        <div class="recipient"><span class="brown">Recipient: </span>{{ email.recipient }}</div>
        <div class="subject"><span class="green">Subject: </span>{{ email.subject }}</div>
        <div class="message"><span class="green">Message: </span>{{ email.message }}</div>
        <button @click="deleteEmail(email.id)" class="deleteButton">🗑️ Delete</button>
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
      await this.fetchSentEmails(user.uid);
    }
  },
  methods: {
    async fetchSentEmails(userId) {
      const messagesCollection = collection(db, 'messages');
      const q = query(messagesCollection, where('userId', '==', userId));
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
  margin-bottom: 700px;
}
h1 {
  font-size: 3em;
  margin-bottom: 40px;
  margin-top: -20px;
  color: white;
  font-family: "Electrolize";
  border-radius: 10px;
}
.green {
  color: #689E3B;
}
.brown {
  color: #828A37;
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
  border-radius: 10px;
  border: 10px solid #9b9b9b;
  font-family: "Electrolize";
  background-color: #111;
}
.recipient {
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
  margin-top: 5px;
  font-family: 'Electrolize';
}
.deleteButton:hover {
  color: #c9302c;
}
@media (max-width: 768px) {
  .main {
    width: 90%;
    margin: auto;
    margin-top: -45px;
  }
}
</style>
