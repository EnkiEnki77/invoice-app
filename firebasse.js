// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl7Vi-gAkN9P70rjhXeSK-wi3ldwSIfeY",
  authDomain: "invoice-app-8292a.firebaseapp.com",
  projectId: "invoice-app-8292a",
  storageBucket: "invoice-app-8292a.appspot.com",
  messagingSenderId: "408497015178",
  appId: "1:408497015178:web:90dd5164a977b9c154a073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);