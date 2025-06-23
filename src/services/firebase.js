// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBdOJ6ZmpDxoq2o9FqG41zbqFVA_50huQ",
  authDomain: "youshop-25bf2.firebaseapp.com",
  projectId: "youshop-25bf2",
  storageBucket: "youshop-25bf2.firebasestorage.app",
  messagingSenderId: "894086369007",
  appId: "1:894086369007:web:455877ddb138bc3d6e951a",
  measurementId: "G-NE65JHXTWB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);