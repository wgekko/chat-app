import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6atv3lw_8ESoYEHlvoiV2wB8wLFB1hI4",
  authDomain: "chat-app-8f391.firebaseapp.com",
  projectId: "chat-app-8f391",
  storageBucket: "chat-app-8f391.appspot.com",
  messagingSenderId: "228138510534",
  appId: "1:228138510534:web:77930c1f0e831f503e8fc7"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

