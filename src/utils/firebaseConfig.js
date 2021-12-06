// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI79_34KP_Gwy5JY7n-6Zy1v1IUE9FoRE",
  authDomain: "ecommercereact-56f3b.firebaseapp.com",
  projectId: "ecommercereact-56f3b",
  storageBucket: "ecommercereact-56f3b.appspot.com",
  messagingSenderId: "552115424789",
  appId: "1:552115424789:web:1811a10e49ac109a80c81c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  

export default db;