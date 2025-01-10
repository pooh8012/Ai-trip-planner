// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoAHszMsaiygo4-2lsgqRwOS317SfFKH8",
  authDomain: "ai-trip-planner-bc192.firebaseapp.com",
  projectId: "ai-trip-planner-bc192",
  storageBucket: "ai-trip-planner-bc192.appspot.com",
  messagingSenderId: "698918558578",
  appId: "1:698918558578:web:5d2b24f2070aca2fa7dbeb",
  measurementId: "G-NJFE4HQV48",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
