// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjW2oe89zy7fJFM6UquKFgC6DcDlJF-1s",
  authDomain: "my-pokemon-encyclopedia.firebaseapp.com",
  projectId: "my-pokemon-encyclopedia",
  storageBucket: "my-pokemon-encyclopedia.appspot.com",
  messagingSenderId: "721330297478",
  appId: "1:721330297478:web:3c81c0a4ca853fd405cf07",
  measurementId: "G-GLWS79N6YQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
