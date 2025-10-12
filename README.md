# 🎓 VirtualCourses | Node.js, Express.js, MongoDB, JWT, Razorpay,Tailwind, Gemini AI,Firebase

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) 
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![Razorpay](https://img.shields.io/badge/Razorpay-00B9F1?style=for-the-badge&logo=razorpay&logoColor=white)](https://razorpay.com/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://gemini.google.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Recharts](https://img.shields.io/badge/Recharts-FF4154?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://recharts.org/)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-339933?style=for-the-badge&logo=nodemon&logoColor=white)](https://nodemailer.com/)

A full-featured E-Learning platform with **AI-powered course discovery**, **secure payments**, **advanced analytics**, and **responsive design**. Educators can monetize their expertise while students access quality courses with intelligent search capabilities.

---

## 🚀 Live Demo
[VirtualCourses](https://virtualcourses-2.onrender.com/)

---


## ✨ Key Features
### 🔐 Authentication & Security
- **🔑 Multiple Login Options** - Email/password and Google OAuth via Firebase
- **👤 Social Login** - One-click Google authentication
- **🔒 JWT Authentication** - Secure token-based sessions
- **📧 Password Recovery** - Nodemailer integration for forgot password functionality
- **🛡️ Secure Sessions** - Protected routes and API endpoints
### 🎯 For Students
- **🎤 Voice-Activated Search** - Speak to search courses using natural language commands
- **🔍 AI-Powered Search**: Natural language course discovery using Google Gemini AI
- **💳 Secure Payments**: Razorpay integration for seamless course purchases
- **⭐ Course Reviews**: Rate and review courses to help other learners
- **📱 Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **📚 Category Filtering**: Browse courses by categories and subcategories

### 👨‍🏫 For Educators
- **📹 Course Management**: Upload, edit, and manage course content
- **💰 Monetization**: Set prices and earn from course sales
- **📊 Analytics Dashboard**: Visual insights with Recharts bar charts
- **👥 Student Management**: Track enrollments and progress

### 🔐 Platform Features
- **🔑 JWT Authentication**: Secure user authentication system
- **📧 Forgot Password**: Nodemailer integration for password recovery
- **🎯 Admin Panel**: Comprehensive admin analytics and management
- **💬 Review System**: Community-driven course evaluation

---

## 🗂 Tech Stack

| Backend        | Database       | Authentication | Payments      | AI Integration |
|----------------|----------------|----------------|---------------|----------------|
| Node.js        | MongoDB        | JWT,Firebase            | Razorpay      | Google Gemini  |
| Express.js     | Mongoose       | Bcrypt         | Webhooks      | NLP Processing |

| Frontend       | Analytics      | Email          | Storage       | Deployment     |
|----------------|----------------|----------------|---------------|----------------|
| React.js       | Recharts       | Nodemailer     | Cloudinary    | Render/Vercel  |
| Responsive CSS | Bar Charts     | SMTP           | Multer        | MongoDB Atlas  |

---






### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Razorpay account
- Google Gemini API key
- Firebase project with Authentication enabled

### Step-by-Step Installation
Clone the repository

bash
```http
git clone https://github.com/hiteshkumarroy/VirtualCourses.git
cd VirtualCourses
```
Install dependencies

bash
```http
npm install
```
Environment Configuration
# Create a .env file for Backend file with following variables:
```http
PORT="your port no.
MONGODB_URL="your mongodb url"
JWT_SECRET="secret key for jwt"
USER_PASS= "password for nodemailer email"
USER_EMAIL="nodemailer mail"
CLOUDINARY_NAME="cloudinary name"
CLOUDINARY_API_KEY="cloudinary api key"
CLOUDINARY_API_SECRET="cloudinary api secret"
RAZORPAY_KEY_ID="razorpay key id"
RAZORPAY_KEY_SECRET="razorpay key secret"
GEMINI_API_KEY="gemini api key"

 ```

# .env for frontend

```http
VITE_FIREBASE_API_KEY="firebase api key"
VITE_RAZORPAY_KEY_ID="razorpay key id"

 ```

 ### to run Backend
 ```http
 cd Backend
 npm i
 npm run dev
  ```


### to run Frontend
 ```http
 cd frontend
 npm i
 npm run dev
  ```



# 🤝 Contributing
### We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

🙏 Acknowledgments
Razorpay for seamless payment integration

Google Gemini for AI capabilities

Recharts for beautiful data visualization

Nodemailer for email functionality

MongoDB for reliable data storage




# ⭐ Don't forget to star this repository if you find it helpful!
