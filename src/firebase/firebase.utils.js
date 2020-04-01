import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAI2qnRf1MIS18XCfmXMTc7LdWsWP3-MpQ",
  authDomain: "crwn-db-79f79.firebaseapp.com",
  databaseURL: "https://crwn-db-79f79.firebaseio.com",
  projectId: "crwn-db-79f79",
  storageBucket: "crwn-db-79f79.appspot.com",
  messagingSenderId: "248955098115",
  appId: "1:248955098115:web:a1e4f5b012c5ed47c92a36",
  measurementId: "G-LZ6DKEE564"
};
// Initialize Firebase
export var config =firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument=async (userAuth,additionalData)=>{
  if(!userAuth){
    return
  }
  
  var userRef= firestore.doc(`user/${userAuth.uid}`)
  const snapShot= await userRef.get()
  
 
  if(!snapShot.exists){
    console.log('Enter into not snapshot');
    
    const {displayName,email}=userAuth;
    const createdAt= new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user',error)
    }
  }
  
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

// export const signInWithGoogle= auth.signInWithPopup(provider)

export default firebase;
