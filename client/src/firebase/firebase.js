import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAX1jONtfeIkoCu0nXf2abkluwj0DRyHLM",
    authDomain: "whatsapp-clone-d3c60.firebaseapp.com",
    projectId: "whatsapp-clone-d3c60",
    storageBucket: "whatsapp-clone-d3c60.appspot.com",
    messagingSenderId: "297282423369",
    appId: "1:297282423369:web:32eb1c04f6b3aa58fd4d98"
  };

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider} ;
