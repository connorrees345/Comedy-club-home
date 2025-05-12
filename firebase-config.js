import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB45d0nvG3TMiZ9mBfg64yrtUH2KUVZIog",
  authDomain: "joke-drop.firebaseapp.com",
  projectId: "joke-drop",
  storageBucket: "joke-drop.firebasestorage.app",
  messagingSenderId: "891390426911",
  appId: "1:891390426911:web:13b3104fae28d788f7fa2a",
  measurementId: "G-V18K3R96G9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
window.auth = auth;
