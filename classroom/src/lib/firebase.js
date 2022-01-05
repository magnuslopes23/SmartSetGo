import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS3sA_GhR9zv1pt6Td2Gwrvai64CO9cCo",
  authDomain: "smartsetgo-dc513.firebaseapp.com",
  projectId: "smartsetgo-dc513",
  storageBucket: "smartsetgo-dc513.appspot.com",
  messagingSenderId: "833272805099",
  appId: "1:833272805099:web:61cde22d4f866a3fc3b0ae"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
