// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// storage
import { getFirestore } from "firebase/firestore";
// authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ni__5cxkBb3cO0BfSCg7V92b11-_TwE",
  authDomain: "realtor-clone-8b1d7.firebaseapp.com",
  projectId: "realtor-clone-8b1d7",
  storageBucket: "realtor-clone-8b1d7.appspot.com",
  messagingSenderId: "1061301477298",
  appId: "1:1061301477298:web:c72a91614a02fcd5778eab",
  measurementId: "G-PG27FTJNLG",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
