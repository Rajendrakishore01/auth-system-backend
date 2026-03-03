🛡️ Azure Secure Authentication API (Node.js + MongoDB + JWT)
📌 Project Overview

This project is a secure authentication backend system built using Node.js, Express, MongoDB, and JWT.
It provides user registration, login, password hashing, and protected routes using token-based authentication.

The project demonstrates secure backend architecture and is designed to be deployed on Microsoft Azure.

🚀 Features

User Registration API

User Login API

Password hashing using bcrypt

JWT-based authentication

Protected dashboard route

MongoDB Atlas database

Ready for Azure deployment

🛠️ Tech Stack

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT (JSON Web Token)

bcryptjs

Azure App Service (for deployment)

📂 Project Structure
project-folder
│── server.js
│── package.json
│── README.md
⚙️ Installation & Setup
1️⃣ Clone repository
git clone https://github.com/yourusername/auth-system-backend.git
cd azure-secure-auth
2️⃣ Install dependencies
npm install
3️⃣ Add MongoDB connection

Open server.js and paste your MongoDB Atlas connection string:

mongoose.connect("YOUR_MONGODB_LINK")
4️⃣ Run server
node server.js

Server will start at:

http://localhost:5000
🧪 API Endpoints
🔐 Register User

POST /register

{
"name":"Raj",
"email":"raj@gmail.com",
"password":"123456"
}
🔐 Login User

POST /login

{
"email":"raj@gmail.com",
"password":"123456"
}

Returns JWT token.

🛡️ Protected Dashboard

GET /dashboard

Header:

Authorization: Bearer YOUR_TOKEN

Response:

Welcome to secure dashboard 🔥
☁️ Azure Deployment

This project is designed to be deployed on Microsoft Azure App Service.

Steps:

Push code to GitHub

Create Azure App Service

Connect GitHub repo

Deploy Node.js backend

🎯 Learning Outcomes

Through this project I learned:

Secure authentication system design

JWT implementation

Password encryption

MongoDB integration

Azure deployment basics

👨‍💻 Author

Rajendra Kishore
B.Tech CSE | Aspiring Microsoft Student Ambassador
Cybersecurity & Cloud Enthusiast

LinkedIn:
https://www.linkedin.com/in/rajendrakishore/
