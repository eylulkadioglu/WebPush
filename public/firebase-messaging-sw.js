importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD0Ysoet-W4RF98oyVqi9RIvRYGHJPtF8I",
  authDomain: "webpush-demo-a14eb.firebaseapp.com",
  projectId: "webpush-demo-a14eb",
  storageBucket: "webpush-demo-a14eb.firebasestorage.app",
  messagingSenderId: "318646882088",
  appId: "1:318646882088:web:2db615b89e50af5d6c8a1d",
  measurementId: "G-YRQWM91HY1"
});

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// Handle background push notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('📦 Received background message: ', payload);

  const { title, body, icon } = payload.notification;

  self.registration.showNotification(title, {
    body,
    icon: icon || '/logo192.png' // fallback icon if none provided
  });
});
