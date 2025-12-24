# 💬 Chatify — Real-Time Chat Application

Chatify is a full-stack **real-time one-to-one chat application** built using the **MERN stack** and **Socket.IO**.  
It supports instant messaging, authentication, online user tracking, and a smooth chat experience with optimistic UI updates.

This project focuses on **clean architecture**, **scalable real-time communication**, and **production-ready state management**.

---

## 🚀 Features

- 🔐 **Authentication**
  - User signup, login, logout
  - Secure JWT authentication using HTTP-only cookies

- 💬 **Real-Time Messaging**
  - Instant message delivery using Socket.IO
  - One-to-one private chats
  - No page refresh required

- ⚡ **Optimistic UI**
  - Messages appear instantly before server confirmation
  - Smooth user experience even on slow networks

- 🟢 **Online User Status**
  - Live tracking of online users

- 📂 **Chats & Contacts**
  - View chat partners
  - Contacts list
  - Message history per conversation

- 🔔 **Sound Notifications**
  - Toggleable notification sounds for new messages

- 🖼️ **Media Support**
  - Send text and image messages

- 📱 **Responsive Design**
  - Works on desktop and mobile screens

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Zustand (State Management)
- Tailwind CSS
- Socket.IO Client
- Axios

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Socket.IO
- JWT Authentication
- Arcjet (rate limiting & security)

---

## 🧠 Architecture Overview

- **Global Socket Management**
  - Socket connection is handled centrally to avoid duplicate listeners

- **State Separation**
  - Authentication state and chat state are managed independently

- **Real-Time Flow**
Socket Event → Zustand Store → React UI

- **Production-Safe Design**
- No component-level socket subscriptions
- Clean socket lifecycle management

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/chatify.git
cd chatify

2️⃣ Backend Setup
cd backend
npm install
Create a .env file inside backend/:
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
Start the backend:
npm run dev

3️⃣ Frontend Setup:

cd frontend
npm install
npm run dev
Frontend runs on:
http://localhost:5173

🌐 Deployment
Frontend is built and served from the backend in production

Socket.IO works in both development and production environments

CORS and cookies are configured for secure deployment

🧪 Future Improvements

✔️ Message delivered / seen indicators
✔️ Typing indicators
✔️ Group chats
✔️ File attachments
✔️ Message search
✔️ Push notifications

👨‍💻 Author

Shourya Singh
B.Tech (Information Technology)
Full-Stack Developer | MERN | Real-Time Systems

GitHub: https://github.com/shouryabyte

⭐ Acknowledgements
This project was built to practice:
Real-time system design
Scalable socket architecture
Clean state management
Production-ready MERN development
If you found this project helpful, consider giving it a ⭐!