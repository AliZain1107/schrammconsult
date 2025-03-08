import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByEa1f7sV854mQ2qjxZZdO0PzQOo4-AoM",
    authDomain: "schramm-web-app.firebaseapp.com",
    projectId: "schramm-web-app",
    storageBucket: "schramm-web-app.firebasestorage.app",
    messagingSenderId: "711515182969",
    appId: "1:711515182969:web:5b902ee16b20f6ee65c1a8",
    measurementId: "G-RWSX10T2PQ"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);