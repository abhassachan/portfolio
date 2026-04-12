# Abhas Sachan — Personal Portfolio

A full-stack personal portfolio website built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

🌐 **Live Demo:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app)  
🔧 **Backend API:** [your-backend.onrender.com](https://your-backend.onrender.com)

---

## Features

- ✅ **Hero Section** — Animated intro with typewriter effect & CV download (PDF + DOCX)
- ✅ **About Me** — Bio, location, status with scroll-triggered animations
- ✅ **Skills** — Animated skill bars grouped by Backend / Frontend / Tools with tab filter
- ✅ **Projects** — Interactive cards with filter by tech category, GitHub & live demo links
- ✅ **Timeline** — Vertical animated education & experience timeline
- ✅ **Certifications** — Certificate cards with links to verified credentials
- ✅ **Contact Form** — Fully connected to Express backend, saved to MongoDB
- ✅ **Dark / Light Mode** — Toggle with localStorage persistence
- ✅ **Fully Responsive** — Mobile, tablet, and desktop layouts
- ✅ **CV Download** — Both PDF and DOCX served via Express routes

---

## Tech Stack

| Layer     | Technology                              |
|-----------|------------------------------------------|
| Frontend  | React.js, React Router, Framer Motion, AOS |
| Backend   | Node.js, Express.js                     |
| Database  | MongoDB, Mongoose                       |
| Styling   | CSS3, CSS Variables                     |
| Animation | Framer Motion, AOS, CSS Animations      |
| Email     | Nodemailer (optional)                   |
| Deploy    | Vercel (frontend), Render (backend)     |

---

## Project Structure

```
portfolio/
├── client/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/   # All section components
│       ├── styles/       # Global CSS
│       └── App.js
│
├── server/               # Node.js + Express backend
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── assets/cv/        # CV files (PDF + DOCX) — add yours here
│   └── index.js
│
├── .gitignore
└── README.md
```

---

## Local Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Setup the Backend
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
npm run dev
```

### 3. Add your CV files
Place your CV files in `server/assets/cv/`:
- `Abhas_Sachan_CV.pdf`
- `Abhas_Sachan_CV.docx`

### 4. Setup the Frontend
```bash
cd ../client
npm install
cp .env.example .env
# .env already points to http://localhost:5000
npm start
```

The app runs at **http://localhost:3000**

---

## Environment Variables

### Server (`server/.env`)
```
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio
PORT=5000
CLIENT_URL=http://localhost:3000
EMAIL_USER=your_gmail@gmail.com   # optional
EMAIL_PASS=your_app_password       # optional
```

### Client (`client/.env`)
```
REACT_APP_BACKEND_URL=http://localhost:5000
```

> ⚠️ **Never push `.env` files to GitHub.** The `.gitignore` already excludes them.

---

## Deployment

### Frontend → Vercel
1. Push code to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Set `REACT_APP_BACKEND_URL` environment variable to your Render URL
4. Deploy

### Backend → Render
1. Create a new **Web Service** on [render.com](https://render.com)
2. Set root directory to `server`
3. Build command: `npm install`
4. Start command: `node index.js`
5. Add all environment variables from `server/.env`

---

## API Endpoints

| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| POST   | /api/contact     | Submit contact form message   |
| GET    | /api/contact     | Fetch all messages (admin)    |
| GET    | /api/cv/pdf      | Download CV as PDF            |
| GET    | /api/cv/docx     | Download CV as Word document  |
| GET    | /api/health      | Server health check           |

---

## License

MIT © Abhas Sachan
