// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeGQ-cqbmUfRs8ZwxkxaCVho6VSicM2JY",
  authDomain: "reels-clone-dfae2.firebaseapp.com",
  projectId: "reels-clone-dfae2",
  storageBucket: "reels-clone-dfae2.appspot.com",
  messagingSenderId: "336232690678",
  appId: "1:336232690678:web:941b8e4965bc491440cdd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {auth};

export default app;