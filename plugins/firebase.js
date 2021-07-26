import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDowVTRwfglNwaDMoK3BzcqaYfPyUjmmH8",
    authDomain: "perro-donar.firebaseapp.com",
    databaseURL: "https://perro-donar-default-rtdb.firebaseio.com",
    projectId: "perro-donar",
    storageBucket: "perro-donar.appspot.com",
    messagingSenderId: "501723353856",
    appId: "1:501723353856:web:9ca05b8ad3b5604f6c99e5",
    measurementId: "G-91HL1BZC8J"
  })
}

export default firebase