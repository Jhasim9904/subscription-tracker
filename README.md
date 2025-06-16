# 🔐 Subscription Tracker API (Backend)

A full-featured **backend API** built using **Node.js**, **Express**, and **MongoDB**, designed to manage user subscriptions with authentication, rate limiting, email notifications, and secure workflows.

> 🚀 Built by [Jhasim Hassan](https://github.com/Jhasim9904)  
> 🧠 Demonstrates real-world backend development best practices.

---

## 📌 Features Implemented

### ✅ Authentication & Authorization
- User registration & login with JWT tokens
- Password hashing using `bcrypt`
- Auth middleware to protect routes

### 📦 Subscription Management
- Add, update, delete subscriptions
- Filter subscriptions by user
- Calculate upcoming payments and reminders

### 💌 Email Notification System
- Integrated `Nodemailer` with dynamic email templates
- Sends reminder emails using **Upstash workflows**

### 🛡️ Security & Rate Limiting
- `Arcjet` used for bot protection and secure API rate limiting
- Custom error handling middleware

### 🔄 Workflow Automation
- Integration with Upstash to trigger reminders for due subscriptions
- Modular controller-service architecture

---

## 🧠 What You'll Learn (as a Developer)

This project is a **hands-on walkthrough** of how backend systems are built in real-world apps. Concepts covered:

| Concept                         | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| **REST API Architecture**       | Follows modular route-controller-service-model pattern                      |
| **Environment Configuration**   | Securely uses `.env` variables for API keys and config                      |
| **Token-Based Auth (JWT)**      | Full login system using signed tokens and middleware validation             |
| **MongoDB with Mongoose**       | Schema-based NoSQL modeling and efficient query design                      |
| **Error Handling Middleware**   | Centralized error handler with status codes and messages                    |
| **Third-Party API Integration** | Arcjet (rate limiting) & Upstash Workflows (reminders)                      |
| **Clean Code Structure**        | Follows separation of concerns with scalable folder structure               |

---

## ⚙️ Project Structure

```

subscription-tracker/
├── app.js
├── config/
│   ├── arcjet.js
│   ├── env.js
│   ├── nodemailer.js
│   └── upstash.js
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── database/
│   └── mongodb.js
└── package.json

````

---

## 🔧 Installation & Running Locally

### 1. Clone the Repository
```bash
git clone https://github.com/Jhasim9904/subscription-tracker.git
cd subscription-tracker
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file:

```bash
PORT=5000
MONGODB_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
SMTP_EMAIL=<your_email>
SMTP_PASSWORD=<your_password>
```

### 4. Run the Server

```bash
npm start
```

---

## 🚀 API Endpoints Overview

| Method | Endpoint                 | Description                     |
| ------ | ------------------------ | ------------------------------- |
| POST   | `/api/auth/register`     | Register new user               |
| POST   | `/api/auth/login`        | Login and get JWT token         |
| GET    | `/api/subscriptions`     | Get all user subscriptions      |
| POST   | `/api/subscriptions`     | Add a new subscription          |
| DELETE | `/api/subscriptions/:id` | Delete a subscription           |
| POST   | `/api/trigger-reminder`  | Manually trigger email reminder |

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **Nodemailer**
* **Upstash Workflows**
* **Arcjet Bot Protection**
* **Rate Limiting**
* **Dotenv for Config Management**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Thanks to:

* [Arcjet](https://arcjet.com) for security & rate limiting tools
* [Upstash](https://upstash.com/workflows) for workflow automation
* Community contributors and open source packages

---

> 📬 Want to connect?
> Follow me on [GitHub](https://github.com/Jhasim9904) or reach out on LinkedIn!
