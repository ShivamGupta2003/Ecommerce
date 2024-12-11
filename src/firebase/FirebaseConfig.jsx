
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClBOD2yhzGLQtAa8laKXRk0Uc99Nx7BwI",
  authDomain: "myecom-2ebfc.firebaseapp.com",
  projectId: "myecom-2ebfc",
  storageBucket: "myecom-2ebfc.firebasestorage.app",
  messagingSenderId: "397846389590",
  appId: "1:397846389590:web:bdbc95668b2ebea8e62cf7"
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }