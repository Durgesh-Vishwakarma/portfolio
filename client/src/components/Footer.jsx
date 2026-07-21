import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowUp, FiMail } from 'react-icons/fi'
import { Magnetic } from './ui/Motion'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const Footer = ({ social, name = 'Durgesh Vishwakarma' }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-base-750 bg-base-950">
      <div className="dot-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="orb -bottom-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 bg-violet/12" aria-hidden="true" />

      <div className="container-page relative z-10">
        <div className="grid gap-10 py-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3" aria-label="Back to top">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-grad-violet font-mono text-sm font-bold text-white shadow-glow-violet">
                DV
              </span>
              <span className="text-base font-bold tracking-tight text-white">{name}</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ghost-400">
              Full stack developer in Mumbai building production web and mobile applications with React, Node.js and
              MongoDB.
            </p>
          </div>

          {/* Nav */}
          <nav className="md:col-span-3" aria-label="Footer">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ghost-500">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ghost-300 transition-colors duration-300 hover:text-amber"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ghost-500">Connect</p>
            <ul className="mt-4 flex gap-2.5">
              {[
                { icon: <FaGithub />, url: social?.github, label: 'GitHub profile' },
                { icon: <FaLinkedin />, url: social?.linkedin, label: 'LinkedIn profile' },
                { icon: <FiMail />, url: social?.email, label: 'Send an email' },
              ].map((s) => (
                <li key={s.label}>
                  <Magnetic strength={0.35}>
                    <a
                      href={s.url}
                      target={s.url?.startsWith('mailto') ? undefined : '_blank'}
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-base-650 bg-base-850 text-ghost-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/60 hover:text-violet-soft hover:shadow-glow-violet"
                    >
                      {s.icon}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>

            <a href="/resume.pdf" target="_blank" rel="noreferrer noopener" className="btn-ghost mt-6 w-full">
              Download résumé
            </a>
          </div>
        </div>

        <div className="hairline" aria-hidden="true" />

        <div className="flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-ghost-400">
              © {year} {name}
            </p>
            <p className="mt-1 font-mono text-[11px] text-ghost-600">
              React · Vite · Tailwind CSS · Node/Express API · Deployed on Vercel
            </p>
          </div>

          <Magnetic strength={0.35}>
            <a
              href="#top"
              aria-label="Back to top"
              className="group grid h-11 w-11 place-items-center rounded-xl border border-base-650 bg-base-850 text-ghost-300 transition-all duration-300 hover:border-amber/60 hover:text-amber"
            >
              <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  )
}

export default Footer
