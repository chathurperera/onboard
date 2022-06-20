import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider , signInWithPopup} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB5jhf4l8EWvccW0y62VNfuG-Wp1ZYk3FU",
  authDomain: "onboard-9e745.firebaseapp.com",
  projectId: "onboard-9e745",
  storageBucket: "onboard-9e745.appspot.com",
  messagingSenderId: "699119552424",
  appId: "1:699119552424:web:344c7a7dd56adb909dff9d",
  measurementId: "G-QNQESLP5M5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export  const signInWithGoogle  = () => {
  signInWithPopup(auth,provider).then((result) => {
    console.log(result)
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('profilePic',profilePic);

  }).catch((error) => {
    console.log(error)
  })
}