import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtgssGW_1s9sQIkBjsMXL56fDWQB3zZS0",
  authDomain: "whatsapp-clone-cp-dddf6.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-cp-dddf6.firebaseio.com",
  projectId: "whatsapp-clone-cp-dddf6",
  storageBucket: "whatsapp-clone-cp-dddf6.appspot.com",
  messagingSenderId: "771538272165",
  appId: "1:771538272165:web:7306eb3a098faa7119324c",
  measurementId: "G-HNWZMXCG8G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
