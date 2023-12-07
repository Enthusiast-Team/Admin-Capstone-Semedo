// //  action.js
// import axios from "axios";

// // aksi untuk menganbil semua artikel
// export  const fetchUsers = () => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get('http://localhost:5000/users');
//             dispatch({ type: 'SET_USERS', value: response.data })
//         } catch (error) {
//             console.log('Error Fecthing Users :', error);
//         }
//     };
// };


// Action Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import { Database, getDatabase, onValue, ref } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import "../reducer"
import "../store"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQZ9Kq7bKgkPPz64P3OdRH4us_UwrStdw",
  authDomain: "semedo-apps.firebaseapp.com",
  projectId: "semedo-apps",
  storageBucket: "semedo-apps.appspot.com",
  messagingSenderId: "848501833083",
  appId: "1:848501833083:web:4b9c4d759a9f8017c1d1de",
  measurementId: "G-FF06FGLCVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
