import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'

const TICKER = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'React Native',
  'Docker',
  'Tailwind CSS',
  'Jest',
  'REST APIs',
]

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const Hero = ({ data, social }) => {
  return (
    <section
      id="top"
      className="relative grid min-h-[100svh] items-center overflow-hidden pb-24 pt-28 sm:pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="grid-bg absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="glow-orb -left-32 top-0 h-[520px] w-[520px] bg-accent/10" aria-hidden="true" />
      <div className="glow-orb -right-40 bottom-0 h-[460px] w-[460px] bg-accent-alt/10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink-950 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.09 }} className="max-w-3xl">
          <motion.p variants={item} className="mb-6 flex items-center gap-2.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-mist-300">
              {data?.availability || 'Open to opportunities'}
            </span>
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{data?.name || 'Durgesh Vishwakarma'}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-mono text-base text-accent sm:text-lg">
            {data?.title || 'Full Stack Developer'}
            <span className="mx-2 text-ink-500">/</span>
            <span className="text-mist-400">{data?.tagline || 'MERN · Node.js'}</span>
          </motion.p>

          <motion.p variants={item} className="mt-7 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg">
            {data?.intro}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group">
              View my work
              <FaArrowRight
                className="text-xs transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="btn text-mist-300 hover:text-accent"
            >
              <HiOutlineDocumentText className="text-base" aria-hidden="true" />
              Résumé
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-10 flex items-center gap-3">
            <li>
              <a
                href={social?.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="grid h-10 w-10 place-items-center rounded-xl border border-ink-700 text-mist-300 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href={social?.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="grid h-10 w-10 place-items-center rounded-xl border border-ink-700 text-mist-300 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="ml-1 font-mono text-xs text-mist-500">{data?.location}</li>
          </motion.ul>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700"
        >
          {(data?.stats || []).map((s) => (
            <div key={s.label} className="bg-ink-900 px-4 py-5 sm:px-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl font-bold text-white sm:text-3xl">{s.value}</span>
                <span className="mt-1 block text-xs leading-snug text-mist-400 sm:text-sm">{s.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="mask-fade-x absolute inset-x-0 bottom-0 z-10 overflow-hidden border-t border-ink-800 py-4">
        <div className="flex w-max animate-marquee gap-8" aria-hidden="true">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={`${t}-${i}`} className="whitespace-nowrap font-mono text-xs text-ink-500">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
