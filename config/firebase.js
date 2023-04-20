const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

// Add Firebase SDK Snippet
const firebaseConfig = {
  apiKey: "AIzaSyB1-gOo9bumveVGrUSR0QgQ8wwqlMB6z6c",
  authDomain: "todo-app-533f3.firebaseapp.com",
  projectId: "todo-app-533f3",
  storageBucket: "todo-app-533f3.appspot.com",
  messagingSenderId: "810387081435",
  appId: "1:810387081435:web:fe41e0de2c972cf3a3a4fe",
  measurementId: "G-125FQKE2SX"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
