// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { firebaseConfig } from "./FirebaseConfig";

export const firebaseAuthServiceInit = () => {
  initializeApp(firebaseConfig);
}

export const firebaseAuthServiceSignInWithEmailAndPassword = (email, password, setLoginStatus, setUserInfo, setEmail, setPassword) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUserInfo(user);
      setLoginStatus(true);
      setEmail("");
      setPassword("");
    }).catch((error) => {
      console.log(error);
      setLoginStatus(false);
    });
}

export const firebaseAuthServiceSignOut = (setLoginStatus, setUserInfo) => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    setLoginStatus(false);
    setUserInfo();
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}