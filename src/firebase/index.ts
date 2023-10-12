import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqV0fCFOfONv1KrVtWiXWfbHzF9Luic68",
  authDomain: "diyor-movie-app.firebaseapp.com",
  projectId: "diyor-movie-app",
  storageBucket: "diyor-movie-app.appspot.com",
  messagingSenderId: "460149538278",
  appId: "1:460149538278:web:cb92f118f736d995846a27",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
