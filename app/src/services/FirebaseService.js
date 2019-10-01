import app from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyD7WKC79ZJFvpFz4s5ki7v97QvpFeCtmpA",
  authDomain: "processos-3c583.firebaseapp.com",
  databaseURL: "https://processos-3c583.firebaseio.com",
  projectId: "processos-3c583",
  storageBucket: "processos-3c583.appspot.com",
  messagingSenderId: "**************************"
};

app.initializeApp(config);
const db = app.firestore();

export default class FirebaseService {

  static searchProcessos = (search) => {
    return db.collection("processos")
      .where("terms", "array-contains", search)
      .get();
  }

  static getProcessos = () => {
    return db.collection("processos");
  }

  static getProcesso = (id) => {
    return db.collection("processos").doc(id).get();
  }

  static addProcesso = (data) => {
    return db.collection("processos").add(data);
  }

  static editProcesso = (id, data) => {
    return db.collection("processos").doc(id).update(data);
  }

  static deleteProcesso = (id) => {
    return db.collection("processos").doc(id).delete();
  }
  
}