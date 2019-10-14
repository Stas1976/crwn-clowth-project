import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBh0xheL2xdnV7vPkD2fQkBoijPFY0RSoU',
  authDomain: 'crwn-db-ade89.firebaseapp.com',
  databaseURL: 'https://crwn-db-ade89.firebaseio.com',
  projectId: 'crwn-db-ade89',
  storageBucket: 'crwn-db-ade89.appspot.com',
  messagingSenderId: '314901659165',
  appId: '1:314901659165:web:476a43de695dc475'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error ceating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
