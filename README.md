# 🎥 Multimedia Upload & Search App

A full-stack web application for uploading, searching, and previewing multimedia content such as images and videos. The app features secure user authentication, file upload to Cloudinary, and a search functionality based on file metadata.

---

## 🧰 Tech Stack

- **Frontend:** React, Redux Toolkit, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Atlas)
- **Cloud Storage:** Cloudinary
- **Authentication:** JWT (stored in HTTP-only cookies)

---
## DB and Cloudinary Details
```
# MongoDB
MONGO_URI=mongodb+srv://anigounigoud:Jayanth%40123@multimedia-app-cluster.aj3yoca.mongodb.net/

# JWT
JWT_SECRET=ThisIsMultiMediaBackendApp
JWT_EXPIRES_IN=1d
PORT=8000

# Cloudinary
CLOUDINARY_URL=cloudinary://189349623174794:bAIHnHFv6nht2h5U83Xt5LkCSNc@jay14
CLOUDINARY_CLOUD_NAME=jay14
CLOUDINARY_API_KEY=189349623174794
CLOUDINARY_API_SECRET=bAIHnHFv6nht2h5U83Xt5LkCSNc
 
```

---
## 🚀 Getting Started

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Jay459/multimedia-app
```

### 2. Install Dependencies

Navigate to the server directory (for backend) and client directory (for frontend) to install the required dependencies.

### 3. To Start Backend Server

```bash 
cd server
```

```bash 
npm install
```

```bash 
npm run dev
```

### 4. To Start Frontend Server

```bash
cd ../client
```

```bash
npm install
```

```bash
npm start
```
