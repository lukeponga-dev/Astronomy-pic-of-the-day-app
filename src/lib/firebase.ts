// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXe2mrNUff5ON7LVT-r54lAA0J8mi63Ac",
  authDomain: "apod-7b952.firebaseapp.com",
  projectId: "apod-7b952",
  storageBucket: "apod-7b952.appspot.com",
  messagingSenderId: "460017642768",
  appId: "1:460017642768:web:bb30725c1c1cddfcdd8995",
  measurementId: "G-RP3HCNL2Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
