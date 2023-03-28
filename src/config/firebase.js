import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDB-09Wa0v633w_qqdOrcA8DgiHzxek7hQ",
  authDomain: "personalportfoliowebsite-91052.firebaseapp.com",
  projectId: "personalportfoliowebsite-91052",
  storageBucket: "personalportfoliowebsite-91052.appspot.com",
  messagingSenderId: "307490907427",
  appId: "1:307490907427:web:b713d88237619d1e1f5896",
  measurementId: "G-LEPZ9SC0YF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);