// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhsvQs9pYLcn2xNNWX1J5yVfLtOYzxzAg",
  authDomain: "learnlingo-81776.firebaseapp.com",
  databaseURL:
    'https://learnlingo-81776-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: "learnlingo-81776",
  storageBucket: "learnlingo-81776.firebasestorage.app",
  messagingSenderId: "922606143562",
  appId: "1:922606143562:web:04233a2c276acc8925feb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);