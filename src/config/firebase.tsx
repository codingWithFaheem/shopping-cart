import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCUDYysSG2_1kypngMHfwI2AaPgxH4ajxg",
  authDomain: "honychair-ecommerce.firebaseapp.com",
  projectId: "honychair-ecommerce",
  storageBucket: "honychair-ecommerce.appspot.com",
  messagingSenderId: "235079521372",
  appId: "1:235079521372:web:81bd8772fdbc986f2dc299"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)  
export  const db = getFirestore(app)