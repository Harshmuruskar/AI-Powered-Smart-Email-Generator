# 📧 AI-Powered Email Assistant

An intelligent full-stack web application that reads email content and generates AI-based replies in different tones such as **Friendly**, **Casual**, and **Professional**.

Built using **React**, **Spring Boot**, and **Gemini API (Free Tier)**.

---

## 🚀 Features

* 📥 Input email content manually or paste received emails
* 🤖 AI-generated reply suggestions
* 🎯 Multiple tone options:

  * Friendly
  * Casual
  * Professional
* ⚡ Fast and responsive UI
* 🔗 REST API integration between frontend and backend

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Material UI (MUI)
* Axios

### Backend

* Spring Boot
* REST APIs
* WebClient (for API calls)

### AI Integration

* Gemini API (Free Tier)

---

## 📂 Project Structure

```
├── frontend/        # React Application
├── backend/         # Spring Boot Application
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-email-assistant.git
cd ai-email-assistant
```

---

### 2️⃣ Backend Setup (Spring Boot)

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Make sure to configure your **Gemini API Key** in `application.properties`:

```properties
gemini.api.key=YOUR_API_KEY
```

---

### 3️⃣ Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

---

## 🔌 API Endpoint

### Generate Email Reply

**POST** `/api/email/generate`

#### Request Body:

```json
{
  "emailContent": "Your email text here",
  "tone": "PROFESSIONAL"
}
```

#### Response:

```json
{
  "generatedReply": "AI generated response..."
}
```

---

## 🎯 Usage

1. Enter or paste the email content
2. Select the desired tone
3. Click **Generate Reply**
4. Copy and use the AI-generated response

---

## 📸 Screenshots

> (Add your UI screenshots here)

---

## 🔐 Environment Variables

| Variable       | Description         |
| -------------- | ------------------- |
| GEMINI_API_KEY | Your Gemini API key |

---

## 🚧 Future Enhancements

* 📬 Direct email integration (Gmail/Outlook)
* 🌐 Multi-language support
* 🧠 Context-aware replies
* 📊 Tone customization (custom prompts)
* 📱 Mobile responsive improvements

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License 

---

## 👨‍💻 Author

**Harsh Muruskar**

* LinkedIn: (Add your profile)
* GitHub: (Add your GitHub link)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
