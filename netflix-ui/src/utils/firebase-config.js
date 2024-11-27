import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAp6ZpFdGx6rrGf2gekn4_DJnRd9Gan2Po",
    authDomain: "react-netflix-clone-b6ecb.firebaseapp.com",
    projectId: "react-netflix-clone-b6ecb",
    storageBucket: "react-netflix-clone-b6ecb.firebasestorage.app",
    messagingSenderId: "868850884464",
    appId: "1:868850884464:web:9da9e193f43509e97379b5",
    measurementId: "G-H57BMR2V89"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);