import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB-KeriNvSJgMKDYtmyN-1ywFCQngecOdg",
  authDomain: "car2go-f1956.firebaseapp.com",
  projectId: "car2go-f1956",
  storageBucket: "car2go-f1956.appspot.com",
  messagingSenderId: "1029962330361",
  appId: "1:1029962330361:web:d8d3c44e4a3d871d5e3228"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();


