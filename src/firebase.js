import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzEKly-KnVa9-3-KhS5p0k1Tf7sac5wD8",
  authDomain: "chat-app-45263.firebaseapp.com",
  projectId: "chat-app-45263",
  storageBucket: "chat-app-45263.appspot.com",
  messagingSenderId: "1072526116441",
  appId: "1:1072526116441:web:d981fc894e8df9d00b5348"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

