// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAywdwCDUid319AdN8uAWYKF7JDOHta68M",
  authDomain: "reddit-clone-67593.firebaseapp.com",
  projectId: "reddit-clone-67593",
  storageBucket: "reddit-clone-67593.appspot.com",
  messagingSenderId: "1014447038199",
  appId: "1:1014447038199:web:5f743be41fb4767e3f7df2",
  measurementId: "G-12LBVHTMHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
