"use client";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyArM3ZnRKLIbPkne4U7_h9RNzDwBAkfOCs",
  authDomain: "fassal360.firebaseapp.com",
  projectId: "fassal360",
  storageBucket: "fassal360.firebasestorage.app",
  messagingSenderId: "529158109251",
  appId: "1:529158109251:web:0e6281c041867ff9423cf6",
  measurementId: "G-2H31GLHGBD"
};

const app = initializeApp(firebaseConfig);

// Initialize browser-dependent services only in the client
let analytics = null;
let messaging = null;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
  messaging = getMessaging(app);
}

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, analytics, db, storage, auth, messaging, getToken };