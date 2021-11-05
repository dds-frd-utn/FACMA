import firebase from 'firebase/app'
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCaA25GjDHoHRXRck4ycPPwAWpIaHFFXdg",
  authDomain: "facma-cd9f2.firebaseapp.com",
  projectId: "facma-cd9f2",
  storageBucket: "facma-cd9f2.appspot.com",
  messagingSenderId: "978062242483",
  appId: "1:978062242483:web:e978fa9d0bf61eb83536c6"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage()
 
export {firebase, auth, db, storage}