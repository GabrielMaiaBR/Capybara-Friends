import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO5yfJQ1iFhRV7t7BAZBNYald903PNK4o",
  authDomain: "capybara-friends.firebaseapp.com",
  projectId: "capybara-friends",
  storageBucket: "capybara-friends.appspot.com",
  messagingSenderId: "330574833621",
  appId: "1:330574833621:web:e1e3ca3a1869b50ea5ff5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }