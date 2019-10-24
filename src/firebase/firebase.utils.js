import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDRvFDN8ZVgsry7_l93gxn1w1MCI3KqxjQ",
    authDomain: "crwn-db-7cfb6.firebaseapp.com",
    databaseURL: "https://crwn-db-7cfb6.firebaseio.com",
    projectId: "crwn-db-7cfb6",
    storageBucket: "crwn-db-7cfb6.appspot.com",
    messagingSenderId: "972950068443",
    appId: "1:972950068443:web:797c6b6dddfdcc2fae80fe"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;