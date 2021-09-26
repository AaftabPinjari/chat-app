import firebase from 'firebase/app'
// import { initializeApp } from "firebase"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBS94u_CxYHwLNeMu6ZNOlK4HhguR4EE9M",
    authDomain: "signal-42e49.firebaseapp.com",
    projectId: "signal-42e49",
    storageBucket: "signal-42e49.appspot.com",
    messagingSenderId: "477519035352",
    appId: "1:477519035352:web:10cb5e6f658ce30dd190ad"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }