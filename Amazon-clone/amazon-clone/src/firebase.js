import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import App from "./App";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJPqsxi7IsbEnENoZyCAiKGR9uznI1c5o",
  authDomain: "aug-28c0f.firebaseapp.com",
  projectId: "aug-28c0f",
  storageBucket: "aug-28c0f.appspot.com",
  messagingSenderId: "930442732092",
  appId: "1:930442732092:web:94a71cbae0ab027ce9d939",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };


  
  
