// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQVvF42euW4DNYMnjXFlNXoM7tj9zsVjs",
  authDomain: "chat-app-69f52.firebaseapp.com",
  projectId: "chat-app-69f52",
  storageBucket: "chat-app-69f52.appspot.com",
  messagingSenderId: "209241623008",
  appId: "1:209241623008:web:a8e544c7891afbd630c385",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
