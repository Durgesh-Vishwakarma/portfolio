import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiMapPin, FiArrowUpRight } from 'react-icons/fi'
import Section from './Section'

const Contact = ({ data, social }) => {
  const email = data?.email || 'vishwakarmadurgesh21@gmail.com'

  return (
    <Section
      id="contact"
      eyebrow="04 — Contact"
      title={data?.heading || "Let's build something"}
      lead={data?.text}
      className="border-t border-ink-800 bg-ink-900/40"
    >
      {(inView) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-4 lg:grid-cols-3"
        >
          {/* Primary card */}
          <div className="surface relative overflow-hidden p-8 lg:col-span-2 sm:p-10">
            <div className="glow-orb -right-24 -top-24 h-72 w-72 bg-accent/10" aria-hidden="true" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-500">Email</p>
              <a
                href={`mailto:${email}`}
                className="mt-3 inline-block break-all text-xl font-semibold text-white transition-colors hover:text-accent sm:text-2xl"
              >
                {email}
              </a>
              <p className="mt-4 text-sm text-mist-400">{data?.responseTime}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${email}`} className="btn-primary group">
                  <FiMail aria-hidden="true" />
                  Send an email
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer noopener" className="btn-ghost">
                  View résumé
                </a>
              </div>
            </div>
          </div>

          {/* Meta card */}
          <div className="surface flex flex-col justify-between p-8 sm:p-10">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-500">Based in</p>
                <p className="mt-2 flex items-center gap-2 text-mist-200">
                  <FiMapPin className="text-accent" aria-hidden="true" />
                  {data?.location || 'Mumbai, India'}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-500">Elsewhere</p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href={social?.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2.5 text-sm text-mist-300 transition-colors hover:text-accent"
                    >
                      <FaGithub aria-hidden="true" /> GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={social?.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2.5 text-sm text-mist-300 transition-colors hover:text-accent"
                    >
                      <FaLinkedin aria-hidden="true" /> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-8 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-xs leading-relaxed text-mist-300">
              Currently open to full-stack engineering roles in Mumbai or remote.
            </p>
          </div>
        </motion.div>
      )}
    </Section>
  )
}

export default Contact
