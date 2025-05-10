# 🎤 Srivix – AI Interview Mocker App

Srivix is a full-stack AI-powered mock interview platform that helps users simulate real job interviews based on their resumes, skills, and job roles. Built using **Next.js**, **React**, **Drizzle ORM**, **PostgreSQL**, and **Gemini AI**, this app enables users to prepare for interviews with dynamically generated questions, record their answers (audio & webcam), and receive AI-powered feedback.



## 🚀 Features

- 🧠 **AI-Generated Interview Questions** based on job title, description, and user resume
- 🗂️ **User Dashboard** to manage interviews, feedback, and recordings
- 🔐 **Secure Authentication** using Clerk
- 🎙️ **Webcam + Audio Recording** interface for real-time response recording
- ✨ **Speech-to-Text Transcription** for recorded answers
- 📊 **Feedback Page** with performance insights and user ratings
- 📁 **PostgreSQL Database** managed via Drizzle ORM for secure and structured data storage
- 🧩 **ShadCN UI Components** for consistent and responsive design
- ☁️ **Deployed on Vercel** for scalability and performance

---

## 🧰 Tech Stack

| Frontend | Backend | Database | AI | Deployment |
|---------|---------|----------|----|-------------|
| Next.js | Node.js API Routes | PostgreSQL | Gemini AI | Vercel |
| React   | Drizzle ORM        | Drizzle Schema | Google Jini (optional) | GitHub Integration |
| ShadCN UI | Clerk Auth |         | Speech Recognition | |

---

## 🛠️ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/srivix-ai-mock-interview.git
cd srivix-ai-mock-interview

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a `.env.local` file and add:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
DATABASE_URL=your_postgres_url
GOOGLE_API_KEY=your_gemini_or_jini_key

# 4. Push schema to PostgreSQL via Drizzle
npx drizzle-kit push

# 5. Run the development server
npm run dev
