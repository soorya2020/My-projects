
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNH2sZTzxnIO9mRB4RTtANUEmZx9bDQcg",
  authDomain: "multimart-3edee.firebaseapp.com",
  projectId: "multimart-3edee",
  storageBucket: "multimart-3edee.appspot.com",
  messagingSenderId: "610765286323",
  appId: "1:610765286323:web:cd2db906595ab5301139c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db = getFirestore(app);
export const storage=getStorage(app)


export default app