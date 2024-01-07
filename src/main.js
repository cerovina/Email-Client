import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 

import './assets/global.css';
import { auth } from '@/components/firebase.js';

const app = createApp(App);

// Listen for changes in authentication state
auth.onAuthStateChanged((user) => {
  app.config.globalProperties.$auth = auth;
  
  // Ensure that the router is used in the app
  app.use(router);

  app.mount('#app');

  // If the user is authenticated, you can perform additional actions here
  if (user) {
    console.log('User is signed in:', user);
  }
});
