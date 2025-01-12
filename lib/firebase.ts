import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCSFE91wo_8IAU01vrdxCQj_ZCTgLaM66Y",
  authDomain: "flowqi-budget-app.firebaseapp.com",
  databaseURL: "https://flowqi-budget-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flowqi-budget-app",
  storageBucket: "flowqi-budget-app.firebasestorage.app",
  messagingSenderId: "914259926486",
  appId: "1:914259926486:web:189dd673cc6ce7987cd877",
  measurementId: "G-QMBVK4W0HK"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const rtdb = getDatabase(app)

// Initialize Analytics and export it
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes && (analytics = getAnalytics(app)))
}

export { app, auth, db, rtdb, analytics }


