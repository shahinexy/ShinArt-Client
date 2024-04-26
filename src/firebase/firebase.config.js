
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRAoL4YDrxH8cIrWvvznIFC50VYWSApQA",
  authDomain: "sinerart-a-10.firebaseapp.com",
  projectId: "sinerart-a-10",
  storageBucket: "sinerart-a-10.appspot.com",
  messagingSenderId: "618064688832",
  appId: "1:618064688832:web:702cacaca67775db8fdf25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
