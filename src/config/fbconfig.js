// Your web app's Firebase configuration

import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC9CKaGhm6CrDmxxFYdA0V_e0egsaPAd5c",
    authDomain: "evernote-clone-efcba.firebaseapp.com",
    projectId: "evernote-clone-efcba",
    storageBucket: "evernote-clone-efcba.appspot.com",
    messagingSenderId: "737984377510",
    appId: "1:737984377510:web:3735083d6aa3cf18983a67"
  };
  // Initialize Firebase
  export const fbconfig = firebase.initializeApp(firebaseConfig);