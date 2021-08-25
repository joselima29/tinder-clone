import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCm3MpHlYXWb0XqXOxILGF9LX3nr6LyBl4",
    authDomain: "tinder-clone-ad2d2.firebaseapp.com",
    projectId: "tinder-clone-ad2d2",
    storageBucket: "tinder-clone-ad2d2.appspot.com",
    messagingSenderId: "565982178228",
    appId: "1:565982178228:web:fb4cbdf1bcb72ab2d5e0e1",
    measurementId: "G-2T83H82NRJ",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;