import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "",
  authDomain: "clone-67d89.firebaseapp.com",
  projectId: "clone-67d89",
  storageBucket: "clone-67d89.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };
