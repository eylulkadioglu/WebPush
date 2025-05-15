import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD0Ysoet-W4RF98oyVqi9RIvRYGHJPtF8I",
  authDomain: "webpush-demo-a14eb.firebaseapp.com",
  projectId: "webpush-demo-a14eb",
  storageBucket: "webpush-demo-a14eb.firebasestorage.app",
  messagingSenderId: "318646882088",
  appId: "1:318646882088:web:2db615b89e50af5d6c8a1d",
  measurementId: "G-YRQWM91HY1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get messaging instance
const messaging = getMessaging(firebaseApp);

// Export it for use in App.js
export { messaging };
