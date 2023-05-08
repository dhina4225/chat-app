// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS0lCTuOtXvYXn-eQR0VtZNpHAWy2vpn0",
  authDomain: "chat-app-1-b3c19.firebaseapp.com",
  projectId: "chat-app-1-b3c19",
  storageBucket: "chat-app-1-b3c19.appspot.com",
  messagingSenderId: "261316307497",
  appId: "1:261316307497:web:bc8a121c1cdcfae2194a38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
