import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXEVvBVgl_pj6sYYQJ7DmYF39DgfGzLN8",
  authDomain: "miniblogdatebase.firebaseapp.com",
  projectId: "miniblogdatebase",
  storageBucket: "miniblogdatebase.appspot.com",
  messagingSenderId: "911835701701",
  appId: "1:911835701701:web:b21e1840311a79edd3ebac",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
