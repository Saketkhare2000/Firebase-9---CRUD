// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT3cw-9QiX9TGUWMvLpLxijKSUnfvuLBE",
  authDomain: "fir-9-58e1a.firebaseapp.com",
  projectId: "fir-9-58e1a",
  storageBucket: "fir-9-58e1a.appspot.com",
  messagingSenderId: "84767960817",
  appId: "1:84767960817:web:066267ffa7b304205a4350",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
