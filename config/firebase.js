const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

// Add Firebase SDK Snippet
const firebaseConfig = {
  apiKey: "ur api key",
  authDomain: "m",
  projectId: "t3",
  storageBucket: "todm",
  messagingSenderId: "81",
  appId: "1:8104fe",
  measurementId: "SX"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
