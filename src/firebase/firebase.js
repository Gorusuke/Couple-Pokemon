import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAOauBqpWW7LLl6CUeBB_MDVNSR1xAiBuE",
  authDomain: "ranking-e735a.firebaseapp.com",
  projectId: "ranking-e735a",
  storageBucket: "ranking-e735a.appspot.com",
  messagingSenderId: "67477904621",
  appId: "1:67477904621:web:60d1f8d8a109615f1600e4",
  measurementId: "G-2BQGPPV0V9"
};

firebase.initializeApp(firebaseConfig);

export default firebase;