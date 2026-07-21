import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'

const Footer = ({ social, name = 'Durgesh Vishwakarma' }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-mist-300">
            © {year} {name}
          </p>
          <p className="mt-1 font-mono text-xs text-mist-500">
            Built with React, Vite &amp; Tailwind CSS · Node/Express API · Deployed on Vercel
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={social?.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid h-9 w-9 place-items-center rounded-lg text-mist-400 transition-colors hover:bg-ink-800 hover:text-accent"
          >
            <FaGithub />
          </a>
          <a
            href={social?.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="grid h-9 w-9 place-items-center rounded-lg text-mist-400 transition-colors hover:bg-ink-800 hover:text-accent"
          >
            <FaLinkedin />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-lg border border-ink-700 text-mist-400 transition-colors hover:border-accent/50 hover:text-accent"
          >
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
