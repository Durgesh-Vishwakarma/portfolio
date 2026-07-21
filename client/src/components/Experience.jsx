import { motion } from 'framer-motion'
import Section from './Section'

const Experience = ({ data = [] }) => {
  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      title="Where I've shipped"
      lead="Two years of production work across consulting and product teams — e-commerce, booking systems and AI-assisted features."
      className="border-t border-ink-800 bg-ink-900/40"
    >
      {(inView) => (
        <ol className="relative space-y-4">
          {data.map((job, i) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="surface surface-hover p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {job.role}
                    <span className="text-accent"> · {job.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-mist-500">{job.location}</p>
                </div>
                <p className="flex items-center gap-2 font-mono text-xs text-mist-400">
                  {job.current && (
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" aria-label="Current role" />
                  )}
                  {job.period}
                </p>
              </div>

              <ul className="mt-5 space-y-2.5">
                {job.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-mist-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-500" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      )}
    </Section>
  )
}

export default Experience
