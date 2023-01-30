
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDjmX54F7UvteEgKUZdbs6C-i4TcU70NJc",
  authDomain: "deneme-b0c35.firebaseapp.com",
  projectId: "deneme-b0c35",
  storageBucket: "deneme-b0c35.appspot.com",
  messagingSenderId: "25983727680",
  appId: "1:25983727680:web:e81e12f7864d0a8c1b07a5",
  measurementId: "G-271XBW2788",
};

function handleError(err) {
  console.log(err);
}  

function requestNotification() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notifications");
  } else if (Notification.permission === "granted") {
    const notification = new Notification("Ekşi Sözlük");
    console.log("Notification permission granted.");
    const app = initializeApp(firebaseConfig);

    const messaging = getMessaging(app);
    getToken(messaging, {
      vapidKey:
        "BDlJbCXlzPxBWPUwRAHx2Ixk6opNP9FJ-0ybumnF47LDGdSOMc89NIcUPKO8JRLwyZ-Qrhf49TtEw8k22o-5Mow",
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
