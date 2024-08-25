import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBgtzyIT0gOhRyFIho2lvuBB5aKNhKuhNU",
  authDomain: "learn-firebase-cafeb.firebaseapp.com",
  projectId: "learn-firebase-cafeb",
  storageBucket: "learn-firebase-cafeb.appspot.com",
  messagingSenderId: "339092021394",
  appId: "1:339092021394:web:56c7b71230b4ebec42864b",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
