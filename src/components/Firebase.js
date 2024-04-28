import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAsYxNBYlDT4jzhs50YF4sexdpr3bXEfE",
  authDomain: "allinhacks.firebaseapp.com",
  projectId: "allinhacks",
  storageBucket: "allinhacks.appspot.com",
  messagingSenderId: "110403448693",
  appId: "1:110403448693:web:4c6a00127eac89af77ed3c",
  measurementId: "G-DNXEMYT1M6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export {
    app,
    db
}