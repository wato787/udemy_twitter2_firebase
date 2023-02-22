import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyDXCE1_wcolGGZqZ-qx64n5nXONpaj4ERs",
  authDomain:"twitter-app2-7cd6a.firebaseapp.com",
  databaseURL:"https://twitter-app2-7cd6a.firebaseio.com",
  projectId:"twitter-app2-7cd6a",
  storageBucket:"twitter-app2-7cd6a.appspot.com",
  messagingSenderId:"1047725284721",
  appId:"1:1047725284721:web:f6f56fc2479521aa602ad0",
  generateSourcemap:false
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
