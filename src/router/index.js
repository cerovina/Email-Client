import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserProfile from '../views/UserProfile.vue';
import ComposeEmail from '../components/ComposeEmail.vue';
import InboxComponent from '../components/InboxComponent.vue';
import SentComponent from '../components/SentComponent.vue';
import SignUpForm from '@/components/forms/SignUpForm.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user/:userId', // A dynamic parameter for the user ID
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/compose',
    name: 'ComposeEmail',
    component: ComposeEmail,
  },
  {
    path: '/inbox',
    name: 'InboxComponent',
    component: InboxComponent,
  },
  {
    path: '/sent',
    name: 'SentComponent',
    component: SentComponent,
  },
  { path: '/signup',
    name: 'SignUp',
    component: SignUpForm
   },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
