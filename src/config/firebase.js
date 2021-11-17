import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBC2053qZRPwuV5j2dheA5-Rfmrv6NcIXU",
  authDomain: "chatapp-700ab.firebaseapp.com",
  projectId: "chatapp-700ab",
  storageBucket: "chatapp-700ab.appspot.com",
  messagingSenderId: "653148973808",
  appId: "1:653148973808:web:1db4417d4bab8a7e633035",
};

// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();