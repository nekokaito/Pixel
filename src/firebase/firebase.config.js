// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const { VITE_APIKEY, VITE_AUTHDOMAIN, VITE_PROJECTID, VITE_STORAGEBUCKET, VITE_MESSAGINGSENDERID, VITE_APPID, VITE_MEASUREMENTID } = import.meta.env;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
    measurementId: VITE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;