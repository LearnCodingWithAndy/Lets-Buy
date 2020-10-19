import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCfXTWZXmnkTxHi27zPKLhz-QAFwU2E2bQ",
    authDomain: "shop-mart-at-home.firebaseapp.com",
    databaseURL: "https://shop-mart-at-home.firebaseio.com",
    projectId: "shop-mart-at-home",
    storageBucket: "shop-mart-at-home.appspot.com",
    messagingSenderId: "680593903867",
    appId: "1:680593903867:web:db9d60a84ca2141cbb205e",
    measurementId: "G-FE6LZTHJ8Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
