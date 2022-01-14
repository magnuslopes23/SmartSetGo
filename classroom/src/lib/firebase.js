import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0ZQ7cgewbe5k8uKKg0_xfC4kz44RwrJs",
  authDomain: "smartsetgo-41a2d.firebaseapp.com",
  projectId: "smartsetgo-41a2d",
  storageBucket: "smartsetgo-41a2d.appspot.com",
  messagingSenderId: "875488494808",
  appId: "1:875488494808:web:51e55babe5a801220d83ad",
  measurementId: "G-KBKPY3D4MZ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
