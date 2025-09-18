// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lmsai-53f78.firebaseapp.com",
  projectId: "lmsai-53f78",
  storageBucket: "lmsai-53f78.firebasestorage.app",
  messagingSenderId: "194228578196",
  appId: "1:194228578196:web:e73b5b5607d9d592615181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}