import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import { Magnetic } from './ui/Motion'

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
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-base-750 bg-base-900/75 shadow-e2 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-base-950"
      >
        Skip to content
      </a>

      <nav className="container-page flex h-[72px] items-center justify-between" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-3" aria-label="Durgesh Vishwakarma — home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-grad-violet font-mono text-[13px] font-bold text-white shadow-glow-violet transition-transform duration-500 group-hover:rotate-6">
            DV
          </span>
          <span className="hidden text-sm font-bold tracking-tight text-white sm:block">Durgesh Vishwakarma</span>
        </a>

        {/* Pill nav with animated active indicator */}
        <ul className="hidden items-center gap-1 rounded-full border border-base-700 bg-base-850/70 p-1.5 backdrop-blur-xl md:flex">
          {LINKS.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                aria-current={active === l.href ? 'true' : undefined}
                className={`relative z-10 block rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  active === l.href ? 'text-white' : 'text-ghost-400 hover:text-ghost-100'
                }`}
              >
                {l.label}
              </a>
              {active === l.href && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-grad-violet opacity-90 shadow-glow-violet"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={social?.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="hidden h-9 w-9 place-items-center rounded-lg text-ghost-400 transition-colors duration-300 hover:bg-base-800 hover:text-violet-soft lg:grid"
          >
            <FaGithub />
          </a>
          <a
            href={social?.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="hidden h-9 w-9 place-items-center rounded-lg text-ghost-400 transition-colors duration-300 hover:bg-base-800 hover:text-violet-soft lg:grid"
          >
            <FaLinkedin />
          </a>

          <Magnetic strength={0.2}>
            <a
              href="#contact"
              className="hidden rounded-xl bg-grad-amber px-5 py-2.5 text-[13px] font-bold text-base-950 shadow-glow-amber transition-transform duration-300 hover:-translate-y-0.5 md:block"
            >
              Hire me
            </a>
          </Magnetic>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-lg border border-base-700 text-ghost-100 transition-colors duration-300 hover:bg-base-800 md:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-base-750 bg-base-950/98 backdrop-blur-xl md:hidden"
          >
            <ul className="container-page flex flex-col py-4">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-base-800 py-4 text-base font-medium text-ghost-200 transition-colors hover:text-amber"
                  >
                    {l.label}
                    <span className="font-mono text-xs text-ghost-600">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-5">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Hire me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
