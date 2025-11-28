// app/firebase/firebase.config.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZkHVwjjISkMJCT1a-gOYoihWArRuvhPA",
  authDomain: "laptop-client-227ce.firebaseapp.com",
  projectId: "laptop-client-227ce",
  storageBucket: "laptop-client-227ce.appspot.com",
  messagingSenderId: "893538538464",
  appId: "1:893538538464:web:0bb705d3677cbb21609185"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];


// Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
