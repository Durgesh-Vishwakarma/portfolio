import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Portfolio from './models/Portfolio.js'
import Project from './models/Project.js'

dotenv.config()

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ Connected to MongoDB')

    // Clear existing data
    await Portfolio.deleteMany({})
    await Project.deleteMany({})
    console.log('🧹 Cleared existing data')

    // Seed Portfolio Info
    const portfolioData = {
      hero: {
        name: 'Durgesh Vishwakarma',
        title: 'Aspiring Software Developer'
      },
      about: {
        image: '/profile.jpg',
        paragraphs: [
          'I\'m an aspiring Software Developer with hands-on experience in building full-stack web applications using the MERN stack. My journey in software development has been driven by a passion for creating efficient, scalable solutions that solve real-world problems. I specialize in developing modern web applications with React.js, Node.js, Express.js, and MongoDB.',
          'Through my academic projects and self-learning, I\'ve gained proficiency in various technologies including Docker containerization, WebAuthn passwordless authentication, REST APIs, and AI integration. I focus on writing clean, maintainable code and following industry best practices. My projects showcase my ability to work with both frontend and backend technologies, implementing features like secure authentication, responsive design, and optimized performance.',
          'I\'m actively seeking software development opportunities where I can contribute to innovative projects, collaborate with experienced developers, and continue expanding my technical skills. I\'m particularly interested in roles that involve modern web technologies, microservices architecture, and building user-centric applications.'
        ],
        resumeUrl: '/resume.pdf'
      },
      contact: {
        text: 'Would you like to work with me? Awesome!',
        email: 'vishwakarmadurgesh21@gmail.com'
      },
      social: {
        twitter: 'https://twitter.com/yourusername',
        linkedin: 'https://www.linkedin.com/in/durgesh-vishwakarma-94ab91228/',
        github: 'https://github.com/Durgesh-Vishwakarma'
      }
    }

    await Portfolio.create(portfolioData)
    console.log('✅ Portfolio info seeded')

    // Seed Projects
    const projects = [
      {
        title: 'ShopSphere - Modern E-Commerce Platform',
        description: 'ShopSphere is a modern, feature-rich e-commerce platform that demonstrates advanced full-stack development skills. Built with cutting-edge technologies and following industry best practices, this project showcases everything from responsive UI design to secure backend architecture.',
        image: '/shopsphere.png',
        liveUrl: 'https://shop-sphere-steel.vercel.app/',
        sourceUrl: 'https://github.com/Durgesh-Vishwakarma/ShopSphere',
        tags: ['React', 'Node.js', 'MongoDB' , 'Express', 'docker', 'Tailwind CSS'],
        order: 1
      },
      {
        title: 'AI Notes App – Smart Notes Manager',
        description: 'An intelligent note-taking application that combines traditional note management with cutting-edge AI summarization. Built with modern web technologies and production-ready architecture patterns.',
        image: '/notes.png',
        liveUrl: 'https://ai-notes-app-pi.vercel.app/',
        sourceUrl: 'https://github.com/Durgesh-Vishwakarma/AI_Notes_App',
        tags: ['React 18', 'Node.js', 'MongoDB', 'Express', 'Context API ', 'Tailwind CSS','Hugging Face API'],
        order: 2
      },
      {
        title: 'Passkey Readiness & Integration Tester',
        description: 'A production-ready demonstration of modern passwordless authentication using Passkeys (WebAuthn), featuring live metrics, security posture analysis, and a professional CLI testing suite. Built to showcase cybersecurity expertise and full-stack development skills.',
        image: '/passkey.png',
        liveUrl: 'https://passkey-readiness-tester-web.vercel.app/',
        sourceUrl: 'https://github.com/Durgesh-Vishwakarma/Passkey-Readiness-Tester',
        tags: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'WebAuthn'],
        order: 3
      }
    ]

    await Project.insertMany(projects)
    console.log('✅ Projects seeded')

    console.log('🎉 Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seedData()
