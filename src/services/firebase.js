import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const {
  VITE_FIREBASE_APIKEY,
  VITE_FIREBASE_AUTHDOMAIN,
  VITE_FIREBASE_PROJECTID,  
  VITE_FIREBASE_STORAGEBUCKET,
  VITE_FIREBASE_MESSAGINGSENDERID,  
  VITE_FIREBASE_APPID,
  VITE_FIREBASE_MEASUREMENTID,
} = import.meta.env;


const firebaseConfig = {
  apiKey: VITE_FIREBASE_APIKEY,
  authDomain: VITE_FIREBASE_AUTHDOMAIN,
  projectId: VITE_FIREBASE_PROJECTID,
  storageBucket: VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
  appId: VITE_FIREBASE_APPID,
  measurementId: VITE_FIREBASE_MEASUREMENTID,
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);