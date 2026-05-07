# 🎥 ConvoSpace – Video Conferencing Software

## 📌 Overview
**ConvoSpace** is a web-based video conferencing application designed to enable seamless real-time communication. It allows users to connect through video, audio, and chat features, making it suitable for online meetings, virtual classrooms, and collaboration.

This project was developed as a mini project for the **Bachelor of Engineering (Information Technology)** under **Savitribai Phule Pune University, Pune**.

---

## 🚀 Features
- 📹 Real-time Video Calling  
- 🎤 Audio Communication  
- 💬 Live Chat Messaging  
- 👥 Multi-user Meeting Support  
- 🔗 Room-based Connection System  
- 🌐 User-friendly Interface  

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript, React.js
- **Backend:** Node.js, Express.js , JWT Authentication
- **Real-time Communication:** WebRTC, Socket.IO  
- **Database:** MongoDB 

---

## 🏗️ System Architecture
![Architecture](assets/architecture.png)

---
## 📂 Project Structure

### Backend Structure

```
backend/
│
├── node_modules/
│
├── src/
│   ├── contexts/
│   │
│   ├── controllers/
│   │   ├── socketManager.js
│   │   ├── user.controller.js
│   │
│   ├── models/
│   │   ├── meeting.model.js
│   │   ├── users.model.js
│   │
│   ├── routes/
│   │   ├── users.routes.js
│   │
│   ├── app.js
│
├── package.json
├── package-lock.json
```
### Frontend Structure
```
frontend/
├── node_modules/
├── public/
├── src/
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── authentication.jsx
│   │   ├── history.jsx
│   │   ├── home.jsx
│   │   ├── landing.jsx
│   │   └── VideoMeet.jsx
│   ├── styles/
│   │   └── videoComp.css
│   ├── utils/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── environment.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package-lock.json
└── package.json
```
## Installation and Setup
### 1. Clone the repository
```
git clone https://github.com/Komal251005/ConvoSpace.git
cd ConvoSpace
```
### 2. Install frontend dependencies
```
cd frontend
npm install
```
### 3. Install backend dependencies
```
cd ../backend
npm install
```

### Environment Variables
```
Create a .env file inside the backend folder.

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
In the frontend, update the API server URL inside:

frontend/src/environment.js
Example:

export const server = "http://localhost:8000";
Running the Project
Start the backend server
cd backend
npm start
Backend will run on:

http://localhost:8000
Start the frontend
Open a new terminal:

cd frontend
npm start
Frontend will run on:

http://localhost:3000
Available Scripts
Frontend
npm start
Runs the React app in development mode.

npm run build
Builds the frontend for production.

npm test
Runs frontend tests.

Backend
npm start
Starts the backend server.

npm run dev
Starts the backend server with nodemon, if configured.
```

## 👩‍💻Author
Komal Mhaske

### GitHub: 
Komal251005
### LinkedIn: 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/komal-mhaske-8b554331a/)
## 📜License
This project is licensed under the MIT License.
