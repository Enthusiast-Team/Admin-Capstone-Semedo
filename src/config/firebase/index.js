import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


// const firebaseConfig = {
//   apiKey: "AIzaSyDQZ9Kq7bKgkPPz64P3OdRH4us_UwrStdw",
//   authDomain: "semedo-apps.firebaseapp.com",
//   databaseURL: "https://semedo-apps-default-rtdb.firebaseio.com",
//   projectId: "semedo-apps",
//   storageBucket: "semedo-apps.appspot.com",
//   messagingSenderId: "848501833083",
//   appId: "1:848501833083:web:4b9c4d759a9f8017c1d1de",
//   measurementId: "G-FF06FGLCVZ"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA7Z8G8IwOb3gaRTBE_sa7d65xxTGhyv-A",
  authDomain: "semedo-b548e.firebaseapp.com",
  databaseURL: "https://semedo-b548e-default-rtdb.firebaseio.com",
  projectId: "semedo-b548e",
  storageBucket: "semedo-b548e.appspot.com",
  messagingSenderId: "714808673899",
  appId: "1:714808673899:web:3ae6add5299fbde3ca132e",
  measurementId: "G-KGM326XP7R"
};


// Initialize Firebase
export const Fire = initializeApp(firebaseConfig);
export const database = getDatabase(Fire)
export const firestore = getFirestore(Fire);
export const auth = getAuth(Fire);

// const database = getDatabase(Fire);

