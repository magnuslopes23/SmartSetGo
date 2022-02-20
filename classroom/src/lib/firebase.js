import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNWzlZygaGq3yfjwWuRquxKfLZfNxhs4s",
  authDomain: "smartsetgo2.firebaseapp.com",
  projectId: "smartsetgo2",
  storageBucket: "smartsetgo2.appspot.com",
  messagingSenderId: "813389022880",
  appId: "1:813389022880:web:737d8027c63181c914ebc5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
