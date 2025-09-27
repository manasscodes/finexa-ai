# 🚀 Finexa AI

**Finexa AI** is an AI-powered Finance SaaS platform built with the **MERN stack**. It helps users track income & expenses, scan receipts with AI, import CSV files, and generate smart monthly reports with AI insights.

Finexa AI is designed as a **university project** to showcase how modern **AI + Web technologies** can transform financial management into a seamless, intelligent experience.

---

## ✨ Features

* 📊 **Track Income & Expenses** with categories and filters
* 🧾 **Receipt Scanning with AI (Gemini)** for auto-extraction
* 📥 **CSV Import** for bulk financial data
* 📅 **Filter by Date** & generate insights easily
* 📈 **Data Visualization** with MongoDB aggregation
* 🤖 **Monthly AI Reports** with personalized suggestions
* 💳 **Stripe Integration** for SaaS monetization
* 🔐 **JWT Authentication** for secure user sessions
* 📧 **Resend Email API** for user verification & notifications

---

## 🛠️ Tech Stack

<p align="center">  
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />  
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />  
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />  
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />  
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />  
</p>  

<p align="center">  
  <img src="https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white" />  
  <img src="https://img.shields.io/badge/Resend-FF6B6B?style=for-the-badge&logo=resend&logoColor=white" />  
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />  
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" />  
</p>  

---

## 📂 Project Structure

```
FinexaAI/
│── client/         # React + TypeScript frontend  
│── server/         # Express + Node.js backend  
│── models/         # MongoDB Mongoose schemas  
│── routes/         # Express routes for APIs  
│── controllers/    # Business logic + AI integration  
│── utils/          # JWT, middleware, helpers  
│── .env            # Environment variables  
│── README.md       # Project documentation  
```

---

## ⚡ Getting Started

### Prerequisites

* Node.js v18+
* MongoDB Atlas / local MongoDB
* Stripe account (for payments)
* Resend account (for email service)
* Gemini API key (for AI insights & OCR parsing)

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/finexa-ai.git
cd finexa-ai

# Install dependencies
cd server && npm install
cd ../client && npm install

# Run backend
cd server && npm run dev

# Run frontend
cd client && npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the `server/` folder:

```
MONGO_URI=your_mongodb_connection  
JWT_SECRET=your_jwt_secret  
STRIPE_SECRET_KEY=your_stripe_secret  
RESEND_API_KEY=your_resend_key  
GEMINI_API_KEY=your_gemini_key  
```

---

## 🛡️ Authentication

* **JWT (JSON Web Tokens)** is used for secure authentication.
* Tokens are signed with a secret and refreshed on expiry.

---

## 📊 AI Features Powered by Gemini

* **Receipt Parsing** → Extract merchant, date, amount, items
* **Monthly Insights** → Analyze transactions & generate suggestions
* **Smart Categorization** → Auto-tag expenses by type

---

## 💡 Future Enhancements

* 📱 Mobile app (React Native) for quick expense tracking
* 🔔 Push/email alerts when nearing budget limits
* 🧩 Bank API integration for live transaction sync
* 🌎 Multi-currency support

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss your ideas.

---

## 📜 License

MIT License © 2025 Finexa AI
