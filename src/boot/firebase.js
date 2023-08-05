import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  // Your Firebase project config
  apiKey: "AIzaSyAsHRqOFgU-A7SjTK39oNvIcR-Urod8z44",
  authDomain: "asquare-chat-74a44.firebaseapp.com",
  projectId: "asquare-chat-74a44",
  storageBucket: "asquare-chat-74a44.appspot.com",
  messagingSenderId: "435416239919",
  appId: "1:435416239919:web:8eda90a49b1b40f1da1bda",
  measurementId: "G-6QZD8241RF",
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();
const firebaseStorage = firebaseApp.storage(); // Make sure you have this line for storage

export { firebaseAuth, firebaseDb, firebaseStorage };
