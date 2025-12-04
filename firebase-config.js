// Importar Firebase desde CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_eDL44zO_5UR1jburjFrBSzqLBC9bX2w",
  authDomain: "homi-29ba2.firebaseapp.com",
  projectId: "homi-29ba2",
  storageBucket: "homi-29ba2.firebasestorage.app",
  messagingSenderId: "106684149925",
  appId: "1:106684149925:web:0095d2eec75241be3d6f8d",
  measurementId: "G-5ZFW0LP6BC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar para usar en otras páginas
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where, orderBy };