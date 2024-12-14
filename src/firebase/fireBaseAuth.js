// Import only what you need from Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBaLinsOaUhap_vidOsea1iUfgtGoRsbSw",
  authDomain:
    "https://console.firebase.google.com/u/0/project/saha-yatri-d87a7/overview",
  projectId: "saha-yatri-d87a7",
  storageBucket: "saha-yatri-d87a7.firebasestorage.app",
  databaseURL:
    "https://console.firebase.google.com/u/0/project/saha-yatri-d87a7/firestore/databases/-default-/data",
  appId: "1:432369063180:android:e7511b952d754fd0f32529",
  messagingSenderId: "432369063180",
  // measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
