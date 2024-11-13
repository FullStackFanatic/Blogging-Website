

let firebaseConfig = {
    apiKey: "AIzaSyAk-R0NJNZvyut5F4nPMF48VpRsMVe5EXA",
    authDomain: "blogging-website-5fc93.firebaseapp.com",
    projectId: "blogging-website-5fc93",
    storageBucket: "blogging-website-5fc93.appspot.com",
    messagingSenderId: "944090486679",
    appId: "1:944090486679:web:d9cf2ff6acaf071599d6d2"
  };

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
    
}

