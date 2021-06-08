import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA_Dl6wZxDdJl-YR1rRLwHEi3K51HZZZJc",
    authDomain: "digimart-2209d.firebaseapp.com",
    projectId: "digimart-2209d",
    storageBucket: "digimart-2209d.appspot.com",
    messagingSenderId: "33932141174",
    appId: "1:33932141174:web:21e868ba19b68785a1b557"
  };

firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider();

function login() {
    firebase.auth().signInWithPopup(googleProvider);
}

function logout() {
    firebase.auth().signOut();
}

export { login, logout }