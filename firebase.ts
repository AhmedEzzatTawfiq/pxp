// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBR2xTs0r7Nb5kaafKm7Dg3hC9ZcQ41s4",
  authDomain: "pxpp-bf86d.firebaseapp.com",
  projectId: "pxpp-bf86d",
  storageBucket: "pxpp-bf86d.firebasestorage.app",
  messagingSenderId: "945083192160",
  appId: "1:945083192160:web:cdee3f43612eb38b2c0405"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };