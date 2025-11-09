import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkCLEQI9k5O5DgSq5sU0H73OtVIO7f9wE",
  authDomain: "treasurequest-77339.firebaseapp.com",
  projectId: "treasurequest-77339",
  storageBucket: "treasurequest-77339.firebasestorage.app",
  messagingSenderId: "673024718031",
  appId: "1:673024718031:web:a9c8369b58c6c69541f3ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);

const database = getDatabase(app);
const analytics = getAnalytics(app);

export { app, auth, db,database, analytics };
