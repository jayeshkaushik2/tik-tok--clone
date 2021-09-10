import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC53leyH1-JUrvZlnpcdbA3VRcpK9H_Kjo",
  authDomain: "tik-tok-clone-6b90f.firebaseapp.com",
  projectId: "tik-tok-clone-6b90f",
  storageBucket: "tik-tok-clone-6b90f.appspot.com",
  messagingSenderId: "790555979402",
  appId: "1:790555979402:web:f8c27269c93ac78f2a8773",
  measurementId: "G-LWJ2C1N351"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
