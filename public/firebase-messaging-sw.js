// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDjmX54F7UvteEgKUZdbs6C-i4TcU70NJc",
  authDomain: "deneme-b0c35.firebaseapp.com",
  projectId: "deneme-b0c35",
  storageBucket: "deneme-b0c35.appspot.com",
  messagingSenderId: "25983727680",
  appId: "1:25983727680:web:e81e12f7864d0a8c1b07a5",
  measurementId: "G-271XBW2788",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});