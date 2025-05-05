// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCPuLsX-Md4gLWE4DJ8yJpwF31QuNRaI_Q",
  authDomain: "appfinanceiro-97801.firebaseapp.com",
  databaseURL: "https://appfinanceiro-97801-default-rtdb.firebaseio.com",
  projectId: "appfinanceiro-97801",
  storageBucket: "appfinanceiro-97801.firebasestorage.app",
  messagingSenderId: "449665916545",
  appId: "1:449665916545:web:b16282f7801148ec6e7780",
  measurementId: "G-5CVLRGZ8W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}