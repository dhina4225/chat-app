// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADrZL7PbMOgSJxn5oRiXJ4oax2ZHAeXFA",
  authDomain: "chat-app-new-70801.firebaseapp.com",
  projectId: "chat-app-new-70801",
  storageBucket: "chat-app-new-70801.appspot.com",
  messagingSenderId: "920907876297",
  appId: "1:920907876297:web:5b852420a4d146f4654a18",
  measurementId: "G-HTL2HJMZ4Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
