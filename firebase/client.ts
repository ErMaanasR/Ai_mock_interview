import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDcEkRu4A1h49VQjSWADL046zuKABv7vts",
  authDomain: "letsprep-688b9.firebaseapp.com",
  projectId: "letsprep-688b9",
  storageBucket: "letsprep-688b9.firebasestorage.app",
  messagingSenderId: "1031038609434",
  appId: "1:1031038609434:web:2a052c5265303ab4c609a3",
  measurementId: "G-W77WZ8MYWR"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)