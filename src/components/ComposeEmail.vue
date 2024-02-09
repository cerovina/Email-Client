<template>
  <div class="mainContainer">
    <h1>COMPOSE</h1>
    <form @submit.prevent="sendEmail">
      <label for="recipient">Recipient:</label>
      <input v-model="recipient" type="email" id="recipient" required />
      <br />
      <label for="subject">Subject:</label>
      <input v-model="subject" type="text" id="subject" required />
      <br />
      <label for="message">Message:</label>
      <textarea v-model="message" id="message" rows="5" required></textarea>
      <br />
      <button type="submit">Send Email</button>
    </form>
  </div>
</template>

<script>
import { auth, onAuthStateChanged } from '@/components/firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/components/firebase.js';

export default {
  data() {
    return {
      recipient: '',
      subject: '',
      message: '',
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user);
      } else {
        console.log('User is signed out');
      }
    });
  },
  methods: {
    async sendEmail() {
      try {
        const user = auth.currentUser;

        if (!user) {
          console.error('User not authenticated.');
          return;
        }

        const sender = user.email;

        const messagesCollection = collection(db, 'messages');
        await addDoc(messagesCollection, {
          sender,
          recipient: this.recipient,
          subject: this.subject,
          message: this.message,
          timestamp: serverTimestamp(),
          userId: user.uid,
        });

        this.recipient = '';
        this.subject = '';
        this.message = '';

        alert('Email sent!');
        this.$router.push('/sent');
      } catch (error) {
        console.error('Error sending email:', error.message);
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
  .mainContainer {
  background-color: #111;
  padding: 10px;
  width: 800px;
  height: 500px;
  margin: auto;
  border-radius: 10px;
  border: 10px solid #9b9b9b;
}
  .red {
    color: red;
  }
  h1 {
    font-size: 3em;
    margin-bottom: 20px;
    color: white;
    font-family: "Electrolize";
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
    font-family: "Electrolize";
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
    background: #26A95E;
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Electrolize";
  }
  button:hover {
    background: #828A37;
  }
  .submit {
    text-align: center;
  }
  @media (max-width: 768px) {
  .main {
    width: 90%;
    margin: auto;
    margin-top: -37px;
    margin-bottom: 100px;
  }
  button {
    margin-bottom: 500px;
  }
}
  </style>