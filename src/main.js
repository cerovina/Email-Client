import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import { auth } from '@/components/firebase.js';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$auth = auth;

createApp(App).use(router).mount('#app')