import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCuXKLppTQwjN8jDuPlF-kQJn-IsvSO7yo",
    authDomain: "website-chiara.firebaseapp.com",
    projectId: "website-chiara",
    storageBucket: "website-chiara.appspot.com",
    messagingSenderId: "87690857201",
    appId: "1:87690857201:web:10a6f248014688bac27750",
    measurementId: "G-QSJQYEJT97"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;