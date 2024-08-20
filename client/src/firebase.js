
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-be866.firebaseapp.com",
  projectId: "mern-blog-be866",
  storageBucket: "mern-blog-be866.appspot.com",
  messagingSenderId: "721576287345",
  appId: "1:721576287345:web:f1e7b828c92e6f5a9acfd0"
};


export const app = initializeApp(firebaseConfig);