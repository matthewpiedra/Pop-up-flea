import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  //the webapp's firebase config

  apiKey: "AIzaSyAygtFaft4BfymyMEKcd1Lrxba7A1Y69bY",
  authDomain: "create-contact-form-59f50.firebaseapp.com",
  projectId: "create-contact-form-59f50",
  storageBucket: "create-contact-form-59f50.appspot.com",
  messagingSenderId: "634733041220",
  appId: "1:634733041220:web:66b62486d13828431c8e11"
  
});

var db = firebaseApp.firestore();

export { db };
export default firebase;