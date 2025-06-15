// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Add other services as needed

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZsaaqlNl265R9AkOkBxYkLxeB82ejbNQ",
  authDomain: "gym-tracker-1cc79.firebaseapp.com",
  projectId: "gym-tracker-1cc79",
  storageBucket: "gym-tracker-1cc79.firebasestorage.app",
  messagingSenderId: "1064946087202",
  appId: "1:1064946087202:web:3ebbc0252cc0ef1950a17b",
  measurementId: "G-8G0ZC6JB0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;