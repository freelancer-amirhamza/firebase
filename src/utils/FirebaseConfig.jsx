
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB0KKh51l9WUyYg0G3PT_z1xuV2dG3HaOk",
  authDomain: "learn-firebase-5abf4.firebaseapp.com",
  projectId: "learn-firebase-5abf4",
  storageBucket: "learn-firebase-5abf4.appspot.com",
  messagingSenderId: "596169092759",
  appId: "1:596169092759:web:2599f4b0f8d102a51d83d2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDB = getFirestore(app)


export {auth, fireDB }