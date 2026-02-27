// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  setAnalyticsCollectionEnabled,
} from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCNldx5vLeL__Ju_fTtJNz7CH87qgfGA78",
  authDomain: "shoutcast-web3.firebaseapp.com",
  databaseURL: "https://shoutcast-web3-default-rtdb.firebaseio.com",
  projectId: "shoutcast-web3",
  storageBucket: "shoutcast-web3.firebasestorage.app",
  messagingSenderId: "805515479553",
  appId: "1:805515479553:web:a2898edaa868d7c24d4e00",
  measurementId: "G-YH944MV857",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Only enable analytics in browser and production
let analytics = null;

if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
  try {
    analytics = getAnalytics(app);
    // Enable collection without debug mode — so events go to standard reports
    setAnalyticsCollectionEnabled(analytics, true);
    console.log("Firebase Analytics initialized (production mode).");
  } catch (error) {
    console.warn("Firebase Analytics initialization failed:", error);
    analytics = null;
  }
}

export { app, analytics };
