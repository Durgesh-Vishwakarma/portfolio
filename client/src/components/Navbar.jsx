import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = ({ social }) => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-700/80 bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>

      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Durgesh Vishwakarma — home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-ink-950">
            DV
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
            Durgesh Vishwakarma
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? 'true' : undefined}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === l.href ? 'text-accent' : 'text-mist-300 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={social?.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="hidden h-9 w-9 place-items-center rounded-lg text-mist-300 transition-colors hover:bg-ink-800 hover:text-white sm:grid"
          >
            <FaGithub />
          </a>
          <a
            href={social?.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="hidden h-9 w-9 place-items-center rounded-lg text-mist-300 transition-colors hover:bg-ink-800 hover:text-white sm:grid"
          >
            <FaLinkedin />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-lg border border-ink-600 px-4 py-2 text-sm font-semibold text-mist-100 transition-colors hover:border-accent/50 hover:text-white md:block"
          >
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-lg text-mist-100 transition-colors hover:bg-ink-800 md:hidden"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink-700 bg-ink-950/98 backdrop-blur-xl md:hidden">
          <ul className="container-page flex flex-col py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink-800 py-3.5 text-base font-medium text-mist-200 transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href="/resume.pdf" target="_blank" rel="noreferrer noopener" className="btn-primary w-full">
                Download résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
