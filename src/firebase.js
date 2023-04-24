import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Ji4ITBQaP8p6aBdKhqwi0ihsSg3dP10",
  authDomain: "chat-app-51d4f.firebaseapp.com",
  projectId: "chat-app-51d4f",
  storageBucket: "chat-app-51d4f.appspot.com",
  messagingSenderId: "854636563140",
  appId: "1:854636563140:web:5e25dd1bb4849a836f5791"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

