// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBP-rziQ_RpP_7uOFgCwXXCMjoNYCyh48k",
    authDomain: "fb-helpdesk-abed7.firebaseapp.com",
    projectId: "fb-helpdesk-abed7",
    storageBucket: "fb-helpdesk-abed7.appspot.com",
    messagingSenderId: "1076714086492",
    appId: "1:1076714086492:web:dd27fe89d1e61ae625c699",
    measurementId: "G-56CK7H7BWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };