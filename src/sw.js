
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your_project.firebaseapp.com",
  projectId: "your_project",
  storageBucket: "your_project.appspot.com",
  messagingSenderId: "sender-id",
  appId: "your-app-id",
  measurementId: "measurement-id",
};

function handleError(err) {
  console.log(err);
}  

function requestNotification() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notifications");
  } else if (Notification.permission === "granted") {
    const notification = new Notification("Test Push Notification");
    console.log("Notification permission granted.");
    const app = initializeApp(firebaseConfig);

    const messaging = getMessaging(app);
    getToken(messaging, {
      vapidKey:
        "your-vapid key",
    }).then((currentToken) => {
      if (currentToken) {
        console.log("currentToken: ", currentToken);
        /*var mysql = require('mysql');

        var con = mysql.createConnection({
          host: "localhost",
          user: "username",
          password: "password"
        });

        con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
          })
        });*/
      } else {
        console.log("Can not get token");
      }
    }).catch(handleError);

  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
      }
    }).catch(handleError);
  }
} 
requestNotification();
