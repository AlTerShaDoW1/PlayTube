# 🎬 PlayTube — Full Stack YouTube Clone

PlayTube is a modern full-stack video streaming platform inspired by YouTube. It enables users to register, upload videos, explore content, and manage their channels through a clean and responsive UI.

🔗 **Live Frontend:** https://play-tube-eta.vercel.app
🔗 **Backend API:** https://playtube-d8ug.onrender.com

---

## ✨ Features

* 🔐 Secure JWT authentication
* 📹 Video upload and streaming
* 🖼️ Thumbnail and avatar support
* 👤 User channel profiles
* 🔍 Browse and watch videos
* ❤️ Like system
* ☁️ Cloudinary media storage
* 📱 Fully responsive design
* 🌙 Modern YouTube-style UI

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Multer
* Cloudinary

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📁 Project Structure

```
PlayTube/
├── backend/
│   ├── src/
│   └── package.json
├── frontend/
│   ├── src/
│   └── package.json
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

```
PORT=8000
MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_secret
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CORS_ORIGIN=http://localhost:5173
NODE_ENV=production
```

---

### Frontend (`frontend/.env`)

```
VITE_BACKEND_URL=http://localhost:8000/api/v1
VITE_FRONTEND_URL=http://localhost:5173
```

---

## 🛠️ Local Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/playtube.git
cd playtube
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
npm run dev
```

Backend runs on:

```
http://localhost:8000
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🚀 Deployment

### Backend (Render)

* Root Directory: `backend`
* Build Command: `npm install`
* Start Command: `npm start`
* Add all backend environment variables

---

### Frontend (Vercel)

* Root Directory: `frontend`
* Framework: Vite
* Build Command: `npm run build`
* Output Directory: `dist`
* Add frontend environment variables

---

## 🧪 API Health Check

```
GET /api/v1/healthcheck
```

---

## 🎯 Future Improvements

* 💬 Comments system
* 🔔 Notifications
* 📂 Playlists
* 🔍 Advanced search
* ⚡ Skeleton loaders
* 🎞️ Video hover preview
* 📊 Analytics dashboard

---

## 🤝 Contributing

Contributions are welcome. Fork the repository and submit a pull request.

---

## 📜 License

This project is built for educational and portfolio purposes.

---

## 👨‍💻 Author

**Sonu Kumar Chaudhary**

---

⭐ If you found this project helpful, consider giving it a star!
