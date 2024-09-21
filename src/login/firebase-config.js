// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqZCHxHZOYo3XM6yox-uvYB5ZgsIN6rGA",
  authDomain: "learning-dd5e5.firebaseapp.com",
  projectId: "learning-dd5e5",
  storageBucket: "learning-dd5e5.appspot.com",
  messagingSenderId: "1060439289868",
  appId: "1:1060439289868:web:82c5ade4ce723e88effe29",
  measurementId: "G-Y1MZXJBBDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();