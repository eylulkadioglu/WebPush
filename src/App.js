import React, { useEffect } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase";

function App() {
  useEffect(() => {
    // Request permission and get token
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getToken(messaging, {
          vapidKey: "YOUR_PUBLIC_VAPID_KEY_HERE"
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log("✅ FCM Token:", currentToken);
            } else {
              console.warn("⚠️ No registration token available.");
            }
          })
          .catch((err) => {
            console.error("An error occurred while retrieving token.", err);
          });
      }
    });

    // Listen for foreground messages
    onMessage(messaging, (payload) => {
      console.log("🔔 Message received (foreground):", payload);
      alert("New Notification: " + payload?.notification?.title);
    });
  }, []);

  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>Web Push Notification Demo</h1>
      <p>This app demonstrates Firebase Cloud Messaging in a React app.</p>
    </div>
  );
}

export default App;
