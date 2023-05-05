import { initializeApp } from "firebase/app";
// import { getStorage } from a"firebase/storage";
import { getFirestore } from "firebase/firestore";
// import "firebase/storage";
import "firebase/auth"
import "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBxI8xTOBWj5a4VsO6lU3rriP5z6kLHHqQ",

  authDomain: "rn-social-2aa92.firebaseapp.com",

  projectId: "rn-social-2aa92",

  storageBucket: "rn-social-2aa92.appspot.com",

  messagingSenderId: "876564979886",

  appId: "1:876564979886:web:48d73a838069dd62c84d3f",

  measurementId: "G-6FE2ZRFBNP",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


