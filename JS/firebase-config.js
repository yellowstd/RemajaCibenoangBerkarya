// Firebase SDK
import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyB1GVdc2ms-Ga5SYaAVLzp49msiIfez6JI",

    authDomain: "rcb-199f1.firebaseapp.com",

    projectId: "rcb-199f1",

    storageBucket: "rcb-199f1.firebasestorage.app",

    messagingSenderId: "609750925259",

    appId: "1:609750925259:web:60f3fcaca92c0e60dd004e"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
