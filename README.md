# 🔔 Web Push Notification System (React + Firebase)

This project is a web-based push notification system built during my internship at **Ekşi Teknoloji (Ekşi Sözlük)**. The system simulates how web browsers receive and display push notifications using **Firebase Cloud Messaging (FCM)**, **React.js**, and **Service Workers**.

> 🚨 This project is a safe-to-share version and does not include production credentials from Ekşi Sözlük. It uses Firebase test credentials for demonstration purposes only.

---

## 🌟 Features

- One-click registration for push notifications
- Retrieval and logging of **FCM device tokens**
- Reception of **foreground messages** (while app is open)
- Reception of **background push notifications** via service worker
- Clean separation of logic into React components and Firebase config

---

## 🧠 System Architecture

### 1. React Frontend (`App.js`)
- Loads a simple page and requests browser permission
- Uses Firebase SDK to generate an FCM token
- Listens for foreground messages and displays alerts

### 2. Firebase Messaging (`firebase.js`)
- Initializes Firebase using modular SDK (`v9+`)
- Exports `messaging` object for FCM functionality

### 3. Service Worker (`firebase-messaging-sw.js`)
- Runs independently of the React app
- Listens for background messages
- Displays browser-level notifications using `self.registration.showNotification()`

---

## 🛠 Technologies Used

- **React.js** (with Create React App)
- **Firebase Cloud Messaging (FCM)**
- **Firebase Modular SDK (v9+)**
- **Service Workers**
- **JavaScript (ES6+)**

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js + npm
- A Firebase account with a project and VAPID key

### 🛠 Installation

```bash
git clone https://github.com/eylulkadioglu/WebPush.git
cd WebPush
npm install

---
### 🧪 Local Development

```bash
npm start

Then open [http://localhost:3000](http://localhost:3000) and approve notification permission in your browser.

---
##### 📦 Simulating a Notification

1. Get the FCM token printed in your browser console.
2. Go to **Firebase Console > Cloud Messaging**
3. Send a new message using the **“Single device”** option and paste your token.
4. You'll receive:
   - An alert if the app is open (foreground)
   - A browser notification if it’s in the background

---

###### 🧪 Learning Outcomes

Through this project, I gained experience in:

- Configuring and securing web-based push messaging
- React component lifecycle and effects
- Firebase SDK integration
- Service worker registration and lifecycle
- Managing public-safe credentials and structuring demos for GitHub

---

## 📄 Internship Context

This project was developed during my internship at **Ekşi Teknoloji**, and is part of a broader internal tool suite involving real-time notifications. This version has been adapted for public sharing and technical demonstration.

---

## 📄 License

This project is for educational and demonstration use only. No production credentials or private information from Ekşi Sözlük are included.
