// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmJPO3d3nak514ZpN7FSv531JbneYD7ew",
  authDomain: "borghi-77cca.firebaseapp.com",
  projectId: "borghi-77cca",
  storageBucket: "borghi-77cca.appspot.com",
  messagingSenderId: "987365118920",
  appId: "1:987365118920:web:d9c7c05b9062ac3fb0e6fd",
  measurementId: "G-QG0EBTE8GQ",
};

// For production only and declare the .env variables
// const firebaseConfig = {
//   apiKey: process.env.VITE_REACT_APP_API_KEY,
//   authDomain: process.env.VITE_REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.VITE_REACT_APP_PROJECT_ID,
//   storageBucket: process.env.VITE_REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.VITE_REACT_APP_APP_ID,
//   measurementId: process.env.VITE_REACT_APP_MEASUREMENT_ID,
// };

// Initialize Firebase with analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
