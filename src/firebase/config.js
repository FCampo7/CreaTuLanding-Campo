// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA292sfBtQ7fK4Y7s66BhNvphdWuNVy4XQ",
	authDomain: "avra-studio.firebaseapp.com",
	projectId: "avra-studio",
	storageBucket: "avra-studio.firebasestorage.app",
	messagingSenderId: "209995779195",
	appId: "1:209995779195:web:ae358de6d7222750c6a6de",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
