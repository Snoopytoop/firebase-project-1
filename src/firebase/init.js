// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1cEO8Av4_ykMO-Rdt29QXyWaiVjq1qd0",
  authDomain: "fir-project-1-f0bc4.firebaseapp.com",
  projectId: "fir-project-1-f0bc4",
  storageBucket: "fir-project-1-f0bc4.appspot.com",
  messagingSenderId: "748488620707",
  appId: "1:748488620707:web:d9c35c3970a36394791d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()