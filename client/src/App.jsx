import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import api from './api/axios'

function App() {
  const [portfolioData, setPortfolioData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/portfolio')
        setPortfolioData(response.data)
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
        // Use default data if API fails
        setPortfolioData({
          hero: {
            name: 'Durgesh Vishwakarma',
            title: 'Aspiring Software Developer'
          },
          about: {
            image: '/profile.jpg',
            paragraphs: [ 'I\'m an aspiring Software Developer with hands-on experience in building full-stack web applications using the MERN stack. My journey in software development has been driven by a passion for creating efficient, scalable solutions that solve real-world problems. I specialize in developing modern web applications with React.js, Node.js, Express.js, and MongoDB.',
          'Through my academic projects and self-learning, I\'ve gained proficiency in various technologies including Docker containerization, WebAuthn passwordless authentication, REST APIs, and AI integration. I focus on writing clean, maintainable code and following industry best practices. My projects showcase my ability to work with both frontend and backend technologies, implementing features like secure authentication, responsive design, and optimized performance.',
          'I\'m actively seeking software development opportunities where I can contribute to innovative projects, collaborate with experienced developers, and continue expanding my technical skills. I\'m particularly interested in roles that involve modern web technologies, microservices architecture, and building user-centric applications.'
        ],
            resumeUrl: '/resume.pdf'
          },
          projects: [
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
    ],
          contact:{
        text: 'Would you like to work with me? Awesome!',
        email: 'vishwakarmadurgesh21@gmail.com',
      },
          social: {
        twitter: 'https://twitter.com/yourusername',
        linkedin: 'https://www.linkedin.com/in/durgesh-vishwakarma-94ab91228/',
        github: 'https://github.com/Durgesh-Vishwakarma'
      }
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="App">
      <Hero data={portfolioData?.hero} />
      <About data={portfolioData?.about} />
      <Projects data={portfolioData?.projects} />
      <Contact data={portfolioData?.contact} />
      <Footer social={portfolioData?.social} />
    </div>
  )
}

export default App
