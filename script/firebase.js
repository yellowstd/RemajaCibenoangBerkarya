// Import Firebase
import { initializeApp }
from "firebase/app";

import { getFirestore }
from "firebase/app";


// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1GVdc2ms-Ga5SYaAVLzp49msiIfez6JI",
  authDomain: "rcb-199f1.firebaseapp.com",
  projectId: "rcb-199f1",
  storageBucket: "rcb-199f1.firebasestorage.app",
  messagingSenderId: "609750925259",
  appId: "1:609750925259:web:60f3fcaca92c0e60dd004e"
};


// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Hubungkan ke Firestore
const db = getFirestore(app);

// Export database
export { db };
