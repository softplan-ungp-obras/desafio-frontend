const firebase = require('firebase/app');
require('firebase/database');

const config = {
  apiKey: "AIzaSyD7WKC79ZJFvpFz4s5ki7v97QvpFeCtmpA",
  authDomain: "processos-3c583.firebaseapp.com",
  databaseURL: "https://processos-3c583.firebaseio.com",
  projectId: "processos-3c583",
  storageBucket: "processos-3c583.appspot.com",
  messagingSenderId: "**************************"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();