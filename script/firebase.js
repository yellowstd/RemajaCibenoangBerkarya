// Import Firebase
import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// Konfigurasi Firebase
const firebaseConfig = {

    apiKey: "API_KEY_ANDA",

    authDomain: "PROJECT_ID.firebaseapp.com",

    projectId: "PROJECT_ID",

    storageBucket: "PROJECT_ID.firebasestorage.app",

    messagingSenderId: "XXXXXXXX",

    appId: "APP_ID_ANDA"

};


// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Hubungkan ke Firestore
const db = getFirestore(app);

// Export database
export { db };
