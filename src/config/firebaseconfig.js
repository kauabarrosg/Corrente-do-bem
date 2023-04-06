import firebase from "firebase";
import getAuth from 'firebase/auth'
import 'firebase/storage'


var firebaseConfig = {
  apiKey: "AIzaSyB0TSCw0MzCLAr0Vni5Ll2Gs7B8O3pqrAM",
  authDomain: "corrente-do-bem-10dcc.firebaseapp.com",
  databaseURL: "https://corrente-do-bem-10dcc-default-rtdb.firebaseio.com",
  projectId: "corrente-do-bem-10dcc",
  storageBucket: "corrente-do-bem-10dcc.appspot.com",
  messagingSenderId: "856324046590",
  appId: "1:856324046590:web:e6b75bce63e8bdc9ceefaf",
  measurementId: "G-MXT3Q2G8D9"
};

// Initialize Firebase
const app = firebase(firebaseConfig);
const database = firebase.firestore();
export default database;
 export const auth = getAuth(app)