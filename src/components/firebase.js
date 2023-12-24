// Import statements
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzqaAQ9rKf3N7IqFO4dzxzPzuAq4ZKxNI",
  authDomain: "email-client-nikola-cerovina.firebaseapp.com",
  projectId: "email-client-nikola-cerovina",
  storageBucket: "email-client-nikola-cerovina.appspot.com",
  messagingSenderId: "137188675381",
  appId: "1:137188675381:web:0a185a9d5b48ddbfd3867c",
  measurementId: "G-8DJRS5PTNX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export auth and database
export const auth = firebase.auth();
export const db = firebase.database();

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzqaAQ9rKf3N7IqFO4dzxzPzuAq4ZKxNI",
  authDomain: "email-client-nikola-cerovina.firebaseapp.com",
  projectId: "email-client-nikola-cerovina",
  storageBucket: "email-client-nikola-cerovina.appspot.com",
  messagingSenderId: "137188675381",
  appId: "1:137188675381:web:0a185a9d5b48ddbfd3867c",
  measurementId: "G-8DJRS5PTNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
