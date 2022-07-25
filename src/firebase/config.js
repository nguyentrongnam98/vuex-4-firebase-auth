import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6iCq8sEKXPyOoJ_p6WRgQEPuxeLgiMAk",
    authDomain: "vuex-4-fb-auth-1d539.firebaseapp.com",
    projectId: "vuex-4-fb-auth-1d539",
    storageBucket: "vuex-4-fb-auth-1d539.appspot.com",
    messagingSenderId: "702243465958",
    appId: "1:702243465958:web:db5a025e2fa396d3482927"
};

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }