import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD4vW3Ckccd_rk7cQw5T8Efroeof0WEhiw",
  authDomain: "ecommerce-fe063.firebaseapp.com",
  projectId: "ecommerce-fe063",
  storageBucket: "ecommerce-fe063.appspot.com",
  messagingSenderId: "203019023212",
  appId: "1:203019023212:web:03d5df3bd69a1be6eaf949",
  measurementId: "G-WKHFF0XFJH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);