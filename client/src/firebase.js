// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "techblog-f2719.firebaseapp.com",
    projectId: "techblog-f2719",
    storageBucket: "techblog-f2719.appspot.com",
    messagingSenderId: "199819611770",
    appId: "1:199819611770:web:8741f48a603ee13d7435c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);