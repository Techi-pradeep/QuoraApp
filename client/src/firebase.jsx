// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; /**Deleted getAnalysis and manually import this */

const firebaseConfig = {
  apiKey: "AIzaSyDHtJ-ob3mQDPBlFV_EgoRkwca-PewyjEw",
  authDomain: "quora-d271c.firebaseapp.com",
  projectId: "quora-d271c",
  storageBucket: "quora-d271c.appspot.com",
  messagingSenderId: "269357633124",
  appId: "1:269357633124:web:8731f528fb3267404bd971",
  measurementId: "G-MM1E2JBTC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = {getAuth}

export {app, auth}