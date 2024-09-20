import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjH7ZyIkpCdQKXDL88rmgOTulVCUyIXII",
  authDomain: "zelluloid42.firebaseapp.com",
  projectId: "zelluloid42",
  storageBucket: "zelluloid42.appspot.com",
  messagingSenderId: "889288450524",
  appId: "1:889288450524:web:fb6d22f05f15327909af19"
};

firebase.initializeApp(firebaseConfig);

export default firebase