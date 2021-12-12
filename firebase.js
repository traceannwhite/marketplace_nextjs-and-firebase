// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbyjt4Gl0rBQ9mMmVHFBbjnAdBJJVwK6A",
  authDomain: "nextjs-firebase-e871e.firebaseapp.com",
  projectId: "nextjs-firebase-e871e",
  storageBucket: "nextjs-firebase-e871e.appspot.com",
  messagingSenderId: "368166121274",
  appId: "1:368166121274:web:5646d7867b0dc18e622a03",
  measurementId: "G-VZL6T8JD2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);

export { db };
