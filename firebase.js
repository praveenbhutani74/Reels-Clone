// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCeGQ-cqbmUfRs8ZwxkxaCVho6VSicM2JY",
  authDomain: "reels-clone-dfae2.firebaseapp.com",
  projectId: "reels-clone-dfae2",
  storageBucket: "reels-clone-dfae2.appspot.com",
  messagingSenderId: "336232690678",
  appId: "1:336232690678:web:941b8e4965bc491440cdd7"
};


const app = initializeApp(firebaseConfig);

const auth=getAuth();
const storage=getStorage();

export {auth,storage};

export default app;