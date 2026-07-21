import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiMapPin, FiArrowUpRight, FiClock, FiFileText } from 'react-icons/fi'
import Section from './Section'
import { Magnetic, Reveal, Spotlight, Stagger, StaggerItem } from './ui/Motion'

const Contact = ({ data, social }) => {
  const email = data?.email || 'vishwakarmadurgesh21@gmail.com'

  return (
    <Section
      id="contact"
      eyebrow="04 — Contact"
      title={data?.heading || "Let's build something"}
      lead={data?.text}
      className="relative overflow-hidden bg-base-900"
      align="center"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-soft" aria-hidden="true" />
      <div className="orb -left-20 top-20 h-[420px] w-[420px] animate-drift bg-violet/15" aria-hidden="true" />
      <div className="orb -right-20 bottom-10 h-[380px] w-[380px] animate-drift-rev bg-amber/10" aria-hidden="true" />
      <Spotlight color="rgba(255,184,107,.12)" size={460} />
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10">
        {/* Primary email card */}
        <Reveal>
          <div className="card-raised glow-border mx-auto max-w-3xl overflow-hidden px-7 py-12 text-center sm:px-14 sm:py-16">
            <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-grad-violet text-2xl text-white shadow-glow-violet">
              <FiMail aria-hidden="true" />
            </span>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ghost-500">Email me directly</p>

            <a
              href={`mailto:${email}`}
              className="mt-3 inline-block break-all text-xl font-extrabold tracking-tight text-white transition-colors duration-300 hover:text-amber sm:text-3xl"
            >
              {email}
            </a>

            <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-ghost-400">
              <FiClock aria-hidden="true" />
              {data?.responseTime}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <a href={`mailto:${email}`} className="btn-primary group">
                  <FiMail aria-hidden="true" />
                  Send an email
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="/resume.pdf?v=2026-07" target="_blank" rel="noreferrer noopener" className="btn-ghost">
                  <FiFileText aria-hidden="true" />
                  View resume
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>

        {/* Meta strip */}
        <Stagger className="mx-auto mt-6 grid max-w-3xl gap-5 sm:grid-cols-3" gap={0.1}>
          <StaggerItem>
            <div className="card card-hover h-full p-6 text-center">
              <FiMapPin className="mx-auto text-lg text-violet-light" aria-hidden="true" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ghost-500">Based in</p>
              <p className="mt-1.5 text-sm font-semibold text-white">{data?.location || 'Mumbai, India'}</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <a
              href={social?.github}
              target="_blank"
              rel="noreferrer noopener"
              className="card card-hover glow-border flex h-full flex-col items-center justify-center p-6 text-center"
            >
              <FaGithub className="text-lg text-violet-light" aria-hidden="true" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ghost-500">Code</p>
              <p className="mt-1.5 text-sm font-semibold text-white">GitHub</p>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a
              href={social?.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="card card-hover glow-border flex h-full flex-col items-center justify-center p-6 text-center"
            >
              <FaLinkedin className="text-lg text-violet-light" aria-hidden="true" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ghost-500">Network</p>
              <p className="mt-1.5 text-sm font-semibold text-white">LinkedIn</p>
            </a>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-md rounded-xl border border-amber/20 bg-amber/5 px-5 py-3.5 text-center text-xs leading-relaxed text-ghost-300">
            Currently open to full-stack engineering roles in Mumbai or remote.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

export default Contact
