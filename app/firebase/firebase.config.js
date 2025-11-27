// app/firebase/firebase.config.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuYwPNDg_g0s6Co5YojAwLF6nVOqB6mko",
  authDomain: "rentwheels-auth-4626a.firebaseapp.com",
  projectId: "rentwheels-auth-4626a",
  storageBucket: "rentwheels-auth-4626a.appspot.com",
  messagingSenderId: "1039335519519",
  appId: "1:1039335519519:web:be19c005a164e6583dec2a",
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
