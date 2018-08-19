import firebase from '@firebase/app';
import '@firebase/auth';
import 'firebase/firestore';
var config = {
    apiKey: "AIzaSyCj1BFyxuhvd7Ye8i6MjEukx5cOUWn81rA",
    authDomain: "gitall-11403.firebaseapp.com",
    databaseURL: "https://gitall-11403.firebaseio.com",
    projectId: "gitall-11403",
    storageBucket: "gitall-11403.appspot.com",
    messagingSenderId: "272325796655"
  };
firebase.initializeApp(config);
/* FIREBASE PROVIDERS */
const auth = firebase.auth();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export {
  auth,
  GoogleProvider,
};