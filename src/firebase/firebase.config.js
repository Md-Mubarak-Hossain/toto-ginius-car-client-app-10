// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPqqQDFKE0MXuWqDrzU7ZD-Vw9voEnDKg",
  authDomain: "toto-ginius-car-app-10.firebaseapp.com",
  projectId: "toto-ginius-car-app-10",
  storageBucket: "toto-ginius-car-app-10.appspot.com",
  messagingSenderId: "279279291719",
  appId: "1:279279291719:web:673d4d36c919c83d535062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;