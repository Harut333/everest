import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAPXZd3H_Ti1ZA-PphntsNqIGeLTeVaPI",
    authDomain: "everest-f86a7.firebaseapp.com",
    projectId: "everest-f86a7",
    storageBucket: "everest-f86a7.appspot.com",
    messagingSenderId: "466881771611",
    appId: "1:466881771611:web:446e4b0ce1cdbd998d677e",
    measurementId: "G-ZEPLK02CP3"
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Initialize Firebase authentication
export const auth = firebase.auth();
