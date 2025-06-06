import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get messaging instance
const messaging = getMessaging(firebaseApp);

// Export it for use in App.js
export { messaging };
