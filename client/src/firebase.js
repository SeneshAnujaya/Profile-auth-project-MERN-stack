// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "readempire-blog.firebaseapp.com",
  projectId: "readempire-blog",
  storageBucket: "readempire-blog.appspot.com",
  messagingSenderId: "403835274349",
  appId: "1:403835274349:web:9557aa836ce706ded0ab64"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);