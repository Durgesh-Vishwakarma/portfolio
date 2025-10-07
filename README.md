# Simplefolio MERN Stack

<div align="center">
  
  ![Portfolio Banner](https://img.shields.io/badge/Portfolio-MERN_Stack-4F46E5?style=for-the-badge&logo=react&logoColor=white)
  ![Version](https://img.shields.io/badge/version-1.0.0-D4B896?style=for-the-badge)
  ![License](https://img.shields.io/badge/license-MIT-6B5B4F?style=for-the-badge)

  ### 🌐 [View Live Demo](https://portfolio-kappa-seven-j4ycbplqj1.vercel.app/) | [📖 Documentation](#-installation--setup) | [🐛 Report Bug](https://github.com/Durgesh-Vishwakarma/portfolio)

  <p align="center">
    <strong>A modern, full-stack portfolio website built with the MERN stack</strong>
    <br />
    MongoDB · Express.js · React · Node.js · Tailwind CSS · Framer Motion
  </p>

</div>

---

## 📸 Preview



---

## ✨ About The Project

A beautifully designed, full-stack portfolio website featuring:
- 🎨 **Modern UI/UX** with warm gray/wheat color palette
- ⚡ **Smooth animations** powered by Framer Motion
- 📱 **Fully responsive** design for all devices
- 🗄️ **Dynamic backend** with MongoDB for easy content management
- 📧 **Contact form** with email integration
- 🚀 **Fast performance** with Vite build tool

## 🚀 Features

- **Full MERN Stack Architecture**
  - MongoDB for data persistence
  - Express.js REST API
  - React with hooks and modern patterns
  - Node.js backend server

- **Modern UI/UX**
  - Tailwind CSS for styling
  - Framer Motion for smooth animations
  - Fully responsive design
  - Scroll-triggered animations
  - Hover effects and transitions

- **Portfolio Sections**
  - Hero section with gradient background
  - About me with profile image
  - Projects showcase with dynamic cards
  - Contact form with email integration
  - Social media links

- **Backend API**
  - RESTful API endpoints
  - MongoDB models for portfolio data
  - CRUD operations for projects
  - Contact form with Nodemailer
  - Database seeding script

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager

## 🛠️ Installation & Setup

### 1. Clone or Navigate to the Project

```powershell
cd d:\PROJECTS\Portfolio\simplefolio-mern
```

### 2. Install Server Dependencies

```powershell
cd server
npm install
```

### 3. Install Client Dependencies

```powershell
cd ..\client
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the `server` directory:

```powershell
cd ..\server
Copy-Item .env.example .env
```

Edit the `.env` file with your configuration:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development

# Optional: For contact form email functionality
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 5. Start MongoDB

Make sure MongoDB is running on your system:

```powershell
# Windows (if MongoDB is installed as a service)
net start MongoDB

# Or start manually
mongod
```

### 6. Seed the Database

Populate the database with initial portfolio data:

```powershell
cd server
npm run seed
```

## 🎯 Running the Application

### Development Mode

You need to run both the client and server simultaneously.

**Terminal 1 - Start the Backend Server:**

```powershell
cd server
npm run dev
```

Server will run on `http://localhost:5000`

**Terminal 2 - Start the Frontend Client:**

```powershell
cd client
npm run dev
```

Client will run on `http://localhost:3000`

### Production Build

**Build the client:**

```powershell
cd client
npm run build
```

**Start the server:**

```powershell
cd ..\server
npm start
```

## 📁 Project Structure

```
simplefolio-mern/
├── client/                  # React frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Tailwind styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── server/                  # Node.js backend
    ├── models/             # MongoDB models
    │   ├── Portfolio.js
    │   └── Project.js
    ├── routes/             # API routes
    │   ├── portfolio.js
    │   └── contact.js
    ├── server.js           # Express server
    ├── seed.js             # Database seeder
    ├── package.json
    └── .env.example
```

## 🔌 API Endpoints

### Portfolio

- `GET /api/portfolio` - Get all portfolio data (info + projects)
- `GET /api/portfolio/info` - Get portfolio info only
- `GET /api/portfolio/projects` - Get all projects
- `POST /api/portfolio/info` - Create/Update portfolio info
- `POST /api/portfolio/projects` - Create new project
- `PUT /api/portfolio/projects/:id` - Update project
- `DELETE /api/portfolio/projects/:id` - Delete project

### Contact

- `POST /api/contact` - Send contact form email

### Health Check

- `GET /api/health` - Server health check

## 🎨 Customization

### Update Portfolio Content

1. **Edit Portfolio Info:** Modify data in `server/seed.js` and run `npm run seed`
2. **Add Projects:** Use the API endpoints or modify seed data
3. **Change Colors:** Edit `client/tailwind.config.js` theme colors
4. **Update Styling:** Modify Tailwind classes in components

### Add Your Assets

Place your images in the `client/public` directory:
- `favicon.png` - Browser tab icon
- `profile.jpg` - Your profile photo
- `project.jpg` - Project screenshots
- `resume.pdf` - Your resume file

### Configure Email (Contact Form)

1. For Gmail, create an [App Password](https://support.google.com/accounts/answer/185833)
2. Update `.env` with your email credentials
3. For other providers, modify `server/routes/contact.js` transporter config

## 🚀 Deployment

This project is ready for deployment on **Vercel** (frontend) and **Render** (backend).

### Quick Deploy

#### Backend (Render)
1. Create account on [Render](https://render.com)
2. Create new Web Service from GitHub repo
3. Set root directory to `server`
4. Add environment variables (see [DEPLOYMENT.md](DEPLOYMENT.md))
5. Deploy!

#### Frontend (Vercel)
1. Create account on [Vercel](https://vercel.com)
2. Import GitHub repository
3. Set root directory to `client`
4. Add `VITE_API_URL` environment variable
5. Deploy!

### 📚 Detailed Deployment Guide

For step-by-step deployment instructions, including MongoDB Atlas setup, environment variables, and troubleshooting, see:

**👉 [DEPLOYMENT.md](DEPLOYMENT.md) - Complete Deployment Guide**

### Free Hosting Options

- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Render, Railway, Fly.io
- **Database**: MongoDB Atlas (Free M0 Cluster)

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- CORS

## 📝 Features Comparison

| Feature | Original | MERN Stack |
|---------|----------|------------|
| Framework | Static HTML | React |
| Styling | SCSS + Bootstrap | Tailwind CSS |
| Animations | ScrollReveal + Vanilla Tilt | Framer Motion |
| Content | Hard-coded | Database-driven |
| Backend | None | Express + MongoDB |
| Build Tool | Parcel | Vite |
| Contact Form | Email link | API with Nodemailer |

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📧 Support

For questions or support, open an issue in the repository.

---

Built with ❤️ using MERN Stack & Tailwind CSS
