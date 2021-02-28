import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyjXOe1-9x1ZzJnitTLOq72rzw_CcwrBo",
  authDomain: "divine-treasures-by-teresa.firebaseapp.com",
  projectId: "divine-treasures-by-teresa",
  storageBucket: "divine-treasures-by-teresa.appspot.com",
  messagingSenderId: "15170708105",
  appId: "1:15170708105:web:ae5e3177707c89bd81dc58",
  measurementId: "G-8FL1QWSDYS"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };