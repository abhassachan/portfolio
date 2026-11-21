# Abhas Sachan — Personal Portfolio

Portfolio website of **Abhas Sachan** — Python & GenAI Developer | Full-Stack Developer | AI/ML Engineer. Built with React.js, Express.js, and Node.js.

- **Live Demo:** https://abhas-sachan.vercel.app/
- **Backend API:** https://abhas-portfolio-backend.onrender.com

---

## Features

- **Hero Section** — Animated intro with typewriter effect & CV download (PDF + DOCX)
- **About Me** — Bio, location, status with scroll-triggered animations
- **Skills** — Animated skill bars grouped by Backend / Frontend / Tools with tab filter
- **Projects** — Interactive cards with filter by tech category, GitHub & live demo links
- **Timeline** — Vertical animated education & experience timeline
- **Certifications** — Certificate cards with links to verified credentials
- **Contact Form** — Fully connected to Express backend, saved to MongoDB
- **Dark / Light Mode** — Toggle with localStorage persistence
- **Fully Responsive** — Mobile, tablet, and desktop layouts
- **CV Download** — Both PDF and DOCX served via Express routes

---

## Tech Stack

| Layer     | Technology                              |
|-----------|------------------------------------------|
| Frontend  | React.js, React Router, Framer Motion, AOS |
| Backend   | Node.js, Express.js                     |
| Database  | MongoDB, Mongoose                       |
| Styling   | CSS3, CSS Variables                     |
| Animation | Framer Motion, AOS, CSS Animations      |
| Deploy    | Vercel (frontend), Render (backend)     |

---

## Local Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier)
- Git

### 1. Clone the repo
```bash
git clone https://github.com/abhassachan/portfolio.git
cd portfolio
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create a `.env` file in the `server/` folder:
```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/portfolio
PORT=5000
CLIENT_URL=http://localhost:3000
EMAIL_USER=your_gmail@gmail.com    # optional
EMAIL_PASS=your_app_password        # optional
```

Add your CV files to `server/assets/cv/`:
- `Abhas_Sachan_CV.pdf`
- `Abhas_Sachan_CV.docx`

```bash
npm run dev
```
Server runs at `http://localhost:5000`

### 3. Setup Frontend
```bash
cd ../client
npm install
```

Create a `.env` file in the `client/` folder:
```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

```bash
npm start
```
App runs at `http://localhost:3000`

---
