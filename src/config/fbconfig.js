import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHsqldj_DX_41Cq-U5Z-GCeUpuPw8lOXk",
    authDomain: "evernote-clone-c7216.firebaseapp.com",
    projectId: "evernote-clone-c7216",
    storageBucket: "evernote-clone-c7216.appspot.com",
    messagingSenderId: "1083897500176",
    appId: "1:1083897500176:web:a7de194e901deeddb57095"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase;