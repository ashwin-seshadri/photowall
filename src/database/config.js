// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt3yqSjrMPuEr_6bs5Et2_enwVwEJ-A1w",
  authDomain: "photowall-1b0f0.firebaseapp.com",
  databaseURL: "https://photowall-1b0f0-default-rtdb.firebaseio.com",
  projectId: "photowall-1b0f0",
  storageBucket: "photowall-1b0f0.appspot.com",
  messagingSenderId: "436838781021",
  appId: "1:436838781021:web:c0e1e61a4acd162a3bfdb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {database};