import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBZsaaqlNl265R9AkOkBxYkLxeB82ejbNQ",
  authDomain: "gym-tracker-1cc79.firebaseapp.com",
  projectId: "gym-tracker-1cc79",
  storageBucket: "gym-tracker-1cc79.firebasestorage.app",
  messagingSenderId: "1064946087202",
  appId: "1:1064946087202:web:3ebbc0252cc0ef1950a17b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
