// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSTFE36OzT229bSGAtxrT9pevV9l5nSCE",
  authDomain: "hspantryapp-64522.firebaseapp.com",
  projectId: "hspantryapp-64522",
  storageBucket: "hspantryapp-64522.appspot.com",
  messagingSenderId: "242604258012",
  appId: "1:242604258012:web:37922becd9de3bbb133a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore}