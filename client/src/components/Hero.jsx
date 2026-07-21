import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowRight, FiFileText, FiMapPin } from 'react-icons/fi'
import { Counter, Magnetic, Parallax, SplitText, Spotlight, Stagger, StaggerItem, Typewriter } from './ui/Motion'

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
  'Supabase',
  'Hugging Face',
]

const ROLES = ['Full Stack Developer', 'MERN Specialist', 'React Native Developer', 'API Engineer']

const CODE = [
  { t: 'const', c: 'text-violet-light' },
  { t: ' durgesh ', c: 'text-white' },
  { t: '= {', c: 'text-ghost-400' },
]

const Hero = ({ data, social }) => {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-28 pt-32 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      {/* ---- Layered background ---- */}
      <div className="absolute inset-0 bg-mesh-hero" aria-hidden="true" />
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="orb -left-40 -top-20 h-[540px] w-[540px] animate-drift bg-violet/20" aria-hidden="true" />
      <div className="orb -right-32 top-40 h-[440px] w-[440px] animate-drift-rev bg-magenta/12" aria-hidden="true" />
      <Spotlight />
      <div className="noise" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-base-900 via-base-900/70 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ================= Left: copy ================= */}
          <div className="lg:col-span-7">
            <Stagger className="max-w-2xl">
              <StaggerItem>
                <p className="eyebrow mb-7">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-amber" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                  </span>
                  {data?.availability || 'Open to opportunities'}
                </p>
              </StaggerItem>

              <h1
                id="hero-heading"
                className="text-[2.7rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
              >
                <SplitText text="Durgesh" className="block text-white" />
                <SplitText text="Vishwakarma" className="block text-gradient" delay={0.12} />
              </h1>

              <StaggerItem>
                <p className="mt-6 flex min-h-[2rem] flex-wrap items-center gap-x-3 font-mono text-base text-ghost-300 sm:text-lg">
                  <span className="text-ghost-500">{'>'}</span>
                  <Typewriter words={ROLES} className="font-semibold text-amber" />
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ghost-300 sm:text-lg">{data?.intro}</p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <a href="#projects" className="btn-primary group">
                      View my work
                      <FiArrowRight
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href="#contact" className="btn-ghost">
                      Get in touch
                    </a>
                  </Magnetic>
                  <a href="/resume.pdf?v=2026-07" target="_blank" rel="noreferrer noopener" className="btn-quiet">
                    <FiFileText aria-hidden="true" />
                    Resume
                  </a>
                </div>
              </StaggerItem>

              <StaggerItem>
                <ul className="mt-10 flex flex-wrap items-center gap-3">
                  <li>
                    <a
                      href={social?.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="GitHub profile"
                      className="grid h-11 w-11 place-items-center rounded-xl border border-base-650 bg-base-800/70 text-ghost-300 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/60 hover:text-violet-soft hover:shadow-glow-violet"
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
                      className="grid h-11 w-11 place-items-center rounded-xl border border-base-650 bg-base-800/70 text-ghost-300 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/60 hover:text-violet-soft hover:shadow-glow-violet"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-ghost-500">
                    <FiMapPin aria-hidden="true" />
                    {data?.location}
                  </li>
                </ul>
              </StaggerItem>
            </Stagger>
          </div>

          {/* ================= Right: code window ================= */}
          <div className="relative lg:col-span-5">
            <Parallax distance={26}>
              <motion.div
                initial={{ opacity: 0, y: 32, rotateX: 10, rotateY: -12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="perspective"
              >
                <div className="code-window glow-border">
                  {/* title bar */}
                  <div className="flex items-center gap-2 border-b border-base-650 bg-base-850/80 px-4 py-3">
                    <span className="code-dot bg-[#FF5F57]" />
                    <span className="code-dot bg-[#FEBC2E]" />
                    <span className="code-dot bg-[#28C840]" />
                    <span className="ml-3 font-mono text-[11px] text-ghost-500">developer.ts</span>
                  </div>

                  {/* code body */}
                  <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.85] sm:text-[13px]">
                    <code>
                      <span className="text-ghost-600 select-none">1  </span>
                      {CODE.map((s, i) => (
                        <span key={i} className={s.c}>
                          {s.t}
                        </span>
                      ))}
                      {'\n'}
                      <span className="text-ghost-600 select-none">2  </span>
                      <span className="text-ghost-400">{'  role: '}</span>
                      <span className="text-amber">{"'Full Stack Developer'"}</span>
                      <span className="text-ghost-400">,</span>
                      {'\n'}
                      <span className="text-ghost-600 select-none">3  </span>
                      <span className="text-ghost-400">{'  base: '}</span>
                      <span className="text-amber">{"'Mumbai, India'"}</span>
                      <span className="text-ghost-400">,</span>
                      {'\n'}
                      <span className="text-ghost-600 select-none">4  </span>
                      <span className="text-ghost-400">{'  stack: ['}</span>
                      <span className="text-violet-soft">{"'React'"}</span>
                      <span className="text-ghost-400">, </span>
                      <span className="text-violet-soft">{"'Node'"}</span>
                      <span className="text-ghost-400">, </span>
                      <span className="text-violet-soft">{"'Mongo'"}</span>
                      <span className="text-ghost-400">],</span>
                      {'\n'}
                      <span className="text-ghost-600 select-none">5  </span>
                      <span className="text-ghost-400">{'  years: '}</span>
                      <span className="text-violet-light">2</span>
                      <span className="text-ghost-400">,</span>
                      {'\n'}
                      <span className="text-ghost-600 select-none">6  </span>
                      <span className="text-ghost-400">{'  shipping: '}</span>
                      <span className="text-violet-light">true</span>
                      <span className="text-ghost-400">,</span>
                      {'\n'}
                      <span className="text-ghost-600 select-none">7  </span>
                      <span className="text-ghost-400">{'}'}</span>
                      {'\n'}
                      <span className="text-ghost-600 select-none">8  </span>
                      <span className="animate-blink text-amber">▋</span>
                    </code>
                  </pre>
                </div>
              </motion.div>
            </Parallax>

            {/* floating accent cards — depth in front of / behind the window */}
            <motion.div
              initial={{ opacity: 0, x: -24, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="card absolute -bottom-8 -left-4 hidden px-4 py-3 shadow-e4 sm:block lg:-left-12"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ghost-500">Currently</p>
              <p className="mt-1 text-sm font-semibold text-white">
                Full Stack Dev <span className="text-violet-light">@ Servora</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24, y: -16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="card absolute -right-3 -top-8 hidden px-4 py-3 shadow-e4 sm:block lg:-right-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ghost-500">Live projects</p>
              <p className="mt-1 text-sm font-semibold text-amber">4 in production</p>
            </motion.div>
          </div>
        </div>

        {/* ================= Stats bar ================= */}
        <motion.dl
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="panel mt-16 grid grid-cols-1 divide-y divide-base-750 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:mt-20"
        >
          {(data?.stats || []).map((s) => (
            <div key={s.label} className="group relative px-6 py-6 transition-colors duration-500 hover:bg-base-850/50 sm:px-8">
              <span
                className="absolute inset-x-6 top-0 h-px scale-x-0 bg-grad-violet transition-transform duration-700 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <Counter
                  value={s.value}
                  className="block text-3xl font-extrabold tracking-tight text-violet-gradient tabular-nums sm:text-4xl"
                />
                <span className="mt-1.5 block text-sm leading-snug text-ghost-400">{s.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* ================= Tech ticker ================= */}
      <div className="mask-fade-x absolute inset-x-0 bottom-0 z-10 overflow-hidden border-t border-base-750 bg-base-950/60 py-4 backdrop-blur">
        <div className="flex w-max animate-marquee gap-10" aria-hidden="true">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap font-mono text-xs tracking-wide text-ghost-600 transition-colors hover:text-violet-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
