import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export { app, analytics, firestore, storage, auth, messaging, getToken };