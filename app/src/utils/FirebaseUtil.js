import firebase from 'firebase';

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