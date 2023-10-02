import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwYfAmt6c5SMj47wspdYMzcnv4xUSZhpc",
  authDomain: "whatsapp-clone-84b27.firebaseapp.com",
  projectId: "whatsapp-clone-84b27",
  storageBucket: "whatsapp-clone-84b27.appspot.com",
  messagingSenderId: "110265170510",
  appId: "1:110265170510:web:bcd3e1317ef3fadf7ea11f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }