import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAfiRWAHnGdAO9aBUtTwptWYdInrPXC1lQ",
  authDomain: "clone-67d89.firebaseapp.com",
  projectId: "clone-67d89",
  storageBucket: "clone-67d89.appspot.com",
  messagingSenderId: "122821422567",
  appId: "1:122821422567:web:022398fe42be3928bbe142",
  measurementId: "G-BPNXF2VY3P",
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };
