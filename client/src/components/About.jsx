import { motion } from 'framer-motion'
import { HiOutlineDocumentText } from 'react-icons/hi'
import Section from './Section'

const About = ({ data, education }) => {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={data?.headline || 'About me'}
      className="border-t border-ink-800"
    >
      {(inView) => (
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Portrait + meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent/20 to-accent-alt/20 opacity-60 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={data?.image || '/profile.jpg'}
                alt="Durgesh Vishwakarma, Full Stack Developer based in Mumbai, India"
                width="480"
                height="600"
                loading="lazy"
                decoding="async"
                className="relative w-full rounded-2xl border border-ink-700 object-cover"
              />
            </div>

            <dl className="mt-6 space-y-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 text-sm">
              <div className="flex items-baseline justify-between gap-4 bg-ink-900 px-4 py-3">
                <dt className="font-mono text-xs uppercase tracking-wider text-mist-500">Education</dt>
                <dd className="text-right text-mist-200">{education?.degree}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 bg-ink-900 px-4 py-3">
                <dt className="font-mono text-xs uppercase tracking-wider text-mist-500">University</dt>
                <dd className="text-right text-mist-200">{education?.school}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 bg-ink-900 px-4 py-3">
                <dt className="font-mono text-xs uppercase tracking-wider text-mist-500">Result</dt>
                <dd className="text-right text-mist-200">{education?.detail}</dd>
              </div>
            </dl>

            <a
              href={data?.resumeUrl || '/resume.pdf'}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost mt-4 w-full"
            >
              <HiOutlineDocumentText className="text-base" aria-hidden="true" />
              Download résumé (PDF)
            </a>
          </motion.div>

          {/* Copy + skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="space-y-5">
              {data?.paragraphs?.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-mist-300">
                  {p}
                </p>
              ))}
            </div>

            {/* Principles */}
            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {data?.principles?.map((pr) => (
                <li key={pr.title} className="surface surface-hover p-5">
                  <h3 className="text-sm font-semibold text-white">{pr.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">{pr.desc}</p>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="mt-12">
              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-mist-500">Technical skills</h3>
              <div className="space-y-5">
                {data?.skillGroups?.map((group) => (
                  <div key={group.label} className="grid gap-3 sm:grid-cols-[112px_1fr] sm:gap-5">
                    <p className="pt-1 font-mono text-xs uppercase tracking-wider text-accent">{group.label}</p>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((s) => (
                        <li key={s} className="chip">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </Section>
  )
}

export default About
