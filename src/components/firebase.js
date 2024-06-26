// Import the required Firebase services
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase config object
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

// Get Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Get the 'auth' object
const auth = getAuth(app);

// Export the 'auth' object and other functions
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, db, storage };

export default app;