import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight, FiZap } from 'react-icons/fi'
import { ImageReveal, Parallax, Stagger, StaggerItem, Tilt } from './ui/Motion'

const EASE = [0.16, 1, 0.3, 1]

const ProjectCard = ({ project, index }) => {
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: EASE }}
      className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
    >
      {/* ---------- Preview ---------- */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
      >
        <Tilt max={5} className="group">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="card card-hover glow-border block overflow-hidden p-0 shadow-e3"
            aria-label={`Open the live demo of ${project.title}`}
          >
            {/* fake browser chrome for depth */}
            <div className="flex items-center gap-2 border-b border-base-650 bg-base-850/90 px-4 py-2.5">
              <span className="code-dot bg-[#FF5F57]/80" />
              <span className="code-dot bg-[#FEBC2E]/80" />
              <span className="code-dot bg-[#28C840]/80" />
              <span className="mx-auto max-w-[60%] truncate rounded-md bg-base-900 px-3 py-1 font-mono text-[10px] text-ghost-500">
                {project.liveUrl?.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                <FiZap className="text-[9px]" aria-hidden="true" /> live
              </span>
            </div>

            <ImageReveal className="relative overflow-hidden" delay={0.15}>
              <Parallax distance={16}>
                <img
                  src={project.image}
                  alt={project.alt || `${project.title} — ${project.subtitle}`}
                  width="1200"
                  height="750"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full scale-105 object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.12]"
                />
              </Parallax>

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-900/85 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-violet/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <span className="pointer-events-none absolute bottom-5 right-5 inline-flex translate-y-3 items-center gap-2 rounded-xl bg-grad-amber px-4 py-2.5 text-[12px] font-bold text-base-950 opacity-0 shadow-glow-amber transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Open live site <FiArrowUpRight />
              </span>
            </ImageReveal>
          </a>
        </Tilt>
      </motion.div>

      {/* ---------- Details ---------- */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}
      >
        <p className="mb-5 flex items-center gap-3.5">
          <span className="bg-grad-violet bg-clip-text font-mono text-4xl font-extrabold leading-none text-transparent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="h-px flex-1 max-w-14 bg-base-600" aria-hidden="true" />
          <span className="font-mono text-xs text-ghost-500">{project.year}</span>
          {project.featured && (
            <span className="rounded-full border border-amber/35 bg-amber/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber">
              Featured
            </span>
          )}
        </p>

        <h3 className="text-2xl font-extrabold tracking-tight sm:text-4xl">{project.title}</h3>
        <p className="mt-2 text-sm font-medium text-violet-light sm:text-base">{project.subtitle}</p>

        <p className="mt-6 text-[15px] leading-[1.8] text-ghost-300">{project.summary}</p>

        {project.highlights?.length > 0 && (
          <Stagger className="mt-6 space-y-3 border-l-2 border-base-700 pl-5" gap={0.09} as="ul">
            {project.highlights.map((h, i) => (
              <StaggerItem key={i} y={14} as="li" className="relative text-sm leading-relaxed text-ghost-400">
                <span className="absolute -left-[23px] top-2 h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
                {h}
              </StaggerItem>
            ))}
          </Stagger>
        )}

        <Stagger className="mt-7 flex flex-wrap gap-2" gap={0.035} as="ul">
          {project.tags?.map((t) => (
            <StaggerItem key={t} y={10} as="li" className="chip">
              {t}
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className="btn-primary group/btn">
            Live demo
            <FiArrowUpRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost"
              aria-label={`View the ${project.title} source code on GitHub`}
            >
              <FaGithub /> Source
            </a>
          ) : null}
        </div>
      </motion.div>
    </motion.article>
  )
}

export default ProjectCard
