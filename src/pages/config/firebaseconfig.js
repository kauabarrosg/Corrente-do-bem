import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCdV_xpSFOEZXnYwEVy8N7vTs443U7hQKc",
    authDomain: "projeto-9f8b3.firebaseapp.com",
    projectId: "projeto-9f8b3",
    storageBucket: "projeto-9f8b3.appspot.com",
    messagingSenderId: "285872337264",
    appId: "1:285872337264:web:0efa15f1df8f84eb411fb5",
    measurementId: "G-9ZZZDVGV41"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default database