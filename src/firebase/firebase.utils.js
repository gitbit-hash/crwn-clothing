import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { resolve } from 'uri-js';
import { reject } from 'q';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  var user = firebase.auth().currentUser;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const createdAt = new Date();
    const { displayName, email } = user;
    console.log(displayName)
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      resolve(userAuth);
      unsubscribe();
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;
