import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAS-N6zaW0cYDz4kbjCIBznGrvImc3pcYk",
  authDomain: "crwn-db-ce948.firebaseapp.com",
  databaseURL: "https://crwn-db-ce948.firebaseio.com",
  projectId: "crwn-db-ce948",
  storageBucket: "crwn-db-ce948.appspot.com",
  messagingSenderId: "481378832590",
  appId: "1:481378832590:web:2b8598507a4d085fd1809f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
provider.setCustomParameters({ prompt: 'select_account' });

export default firebase;
