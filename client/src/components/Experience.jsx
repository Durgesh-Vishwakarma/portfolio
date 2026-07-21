import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiCheck } from 'react-icons/fi'
import Section from './Section'
import { Reveal, Stagger, StaggerItem } from './ui/Motion'

const Experience = ({ data = [] }) => {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 80%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26 })
  const dotY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      title="Where I've shipped"
      lead="Two years of production work across consulting and product teams — e-commerce, booking systems and AI-assisted features."
      className="bg-base-900"
    >
      <div ref={trackRef} className="relative">
        {/* Animated timeline rail */}
        <div className="absolute left-[15px] top-2 hidden h-full w-px bg-base-700 md:block" aria-hidden="true">
          <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-grad-violet" />
          <motion.span
            style={{ top: dotY }}
            className="absolute -left-[5px] h-3 w-3 rounded-full bg-violet-light shadow-glow-violet"
          />
        </div>

        <Stagger className="space-y-6 md:pl-16" gap={0.14}>
          {data.map((job) => (
            <StaggerItem key={`${job.company}-${job.period}`}>
              <div className="group relative">
                {/* node */}
                <span
                  className="absolute -left-16 top-8 hidden h-[9px] w-[9px] -translate-x-[3px] rounded-full border-2 border-base-900 bg-base-500 transition-colors duration-500 group-hover:bg-amber md:block"
                  aria-hidden="true"
                />

                <div className="card card-hover p-7 sm:p-9">
                  <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{job.role}</h3>
                      <p className="mt-1.5 flex flex-wrap items-center gap-x-2 text-sm">
                        <span className="font-semibold text-violet-light">{job.company}</span>
                        <span className="text-ghost-600">·</span>
                        <span className="text-ghost-400">{job.location}</span>
                      </p>
                    </div>

                    <p
                      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] ${
                        job.current
                          ? 'border-amber/35 bg-amber/10 text-amber'
                          : 'border-base-650 bg-base-850 text-ghost-400'
                      }`}
                    >
                      {job.current && (
                        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-amber" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
                        </span>
                      )}
                      {job.period}
                    </p>
                  </div>

                  <ul className="mt-7 grid gap-3.5 lg:grid-cols-2">
                    {job.points.map((p, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed text-ghost-300">
                        <span
                          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-base-650 bg-base-850 text-[9px] text-violet-light"
                          aria-hidden="true"
                        >
                          <FiCheck />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-7 flex flex-wrap gap-2 border-t border-base-700 pt-6">
                    {job.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Education capstone */}
      <Reveal delay={0.1} className="md:pl-16">
        <div className="panel mt-6 flex flex-wrap items-center justify-between gap-4 px-7 py-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ghost-500">Education</p>
            <p className="mt-1.5 font-semibold text-white">B.E. Computer Engineering — Mumbai University</p>
          </div>
          <p className="font-mono text-sm text-violet-soft">Jan 2020 — May 2024 · CGPA 8.50</p>
        </div>
      </Reveal>
    </Section>
  )
}

export default Experience
