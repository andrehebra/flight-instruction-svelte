// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCII7xK01uOodP9uzZul7583HXj22tPi8Q",
  authDomain: "flight-instruction-ffdb7.firebaseapp.com",
  projectId: "flight-instruction-ffdb7",
  storageBucket: "flight-instruction-ffdb7.appspot.com",
  messagingSenderId: "950508746933",
  appId: "1:950508746933:web:28e135744861f236ce26fc",
  measurementId: "G-7388X41K0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);