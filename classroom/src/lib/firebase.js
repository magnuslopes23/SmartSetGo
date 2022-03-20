import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDob9gG05YugVH-XPODBuAIzU0Z_ALtZqw",
  authDomain: "smartsetgo-36722.firebaseapp.com",
  projectId: "smartsetgo-36722",
  storageBucket: "smartsetgo-36722.appspot.com",
  messagingSenderId: "500949895803",
  appId: "1:500949895803:web:39250dcdbcbb7a3cd2f0de",
  measurementId: "G-3J870L5C7Y"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
