import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScrollProgress } from './components/ui/Motion'
import api from './api/axios'
import fallback from './data/content'

function App() {
  // Render immediately from local content; hydrate from the API if it responds.
  const [data, setData] = useState(fallback)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        const { data: remote } = await api.get('/api/portfolio')
        if (cancelled || !remote) return

        // Merge so a partial/legacy API payload can never blank out the page.
        setData((prev) => ({
          ...prev,
          ...remote,
          hero: { ...prev.hero, ...remote.hero },
          about: { ...prev.about, ...remote.about },
          contact: { ...prev.contact, ...remote.contact },
          social: { ...prev.social, ...remote.social },
          education: { ...prev.education, ...remote.education },
          experience: remote.experience?.length ? remote.experience : prev.experience,
          projects: remote.projects?.length ? remote.projects : prev.projects,
        }))
      } catch {
        // Offline / cold-start / no DB — local content already rendered.
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navbar social={data.social} />
      <main id="main">
        <Hero data={data.hero} social={data.social} />
        <About data={data.about} education={data.education} />
        <Experience data={data.experience} />
        <Projects data={data.projects} social={data.social} />
        <Contact data={data.contact} social={data.social} />
      </main>
      <Footer social={data.social} name={data.hero?.name} />
    </>
  )
}

export default App
