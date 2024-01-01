// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";

import {GoogleAuthProvider, getAuth} from 'firebase/auth'

import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyC33YdBUXteTmbRgQSe35PztpY8MxLpu7Y",

  authDomain: "myproject-8a29b.firebaseapp.com",

  projectId: "myproject-8a29b",

  storageBucket: "myproject-8a29b.appspot.com",

  messagingSenderId: "601538555051",

  appId: "1:601538555051:web:a8202d29092734dfc2dbee",

  measurementId: "G-K7VS74M866"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

//contains all of users information
export const authentication = getAuth(app);
export const provider = new GoogleAuthProvider();

export const database = getFirestore(app);
//const analytics = getAnalytics(app);