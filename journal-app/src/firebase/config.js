import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCP68HaS3nmjqWIWgkaSKjybpHskk_5wzM",
  authDomain: "my-journal-44977.firebaseapp.com",
  projectId: "my-journal-44977",
  storageBucket: "my-journal-44977.appspot.com",
  messagingSenderId: "988651877328",
  appId: "1:988651877328:web:9f59cede6842f8a4863fd5",
  measurementId: "G-GZZJLJFTF3",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
