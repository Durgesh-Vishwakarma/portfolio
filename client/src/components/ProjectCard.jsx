import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectCard = ({ project, index, inView }) => {
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.08 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
    >
      {/* Preview */}
      <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group relative block overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 shadow-card transition-all duration-500 hover:border-accent/40 hover:shadow-lift"
          aria-label={`Open the live demo of ${project.title}`}
        >
          <img
            src={project.image}
            alt={project.alt || `${project.title} — ${project.subtitle}`}
            width="1200"
            height="750"
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-80"
            aria-hidden="true"
          />
          <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-lg bg-ink-950/85 px-3 py-1.5 font-mono text-[11px] font-medium text-accent opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            Open live site <FiArrowUpRight />
          </span>
        </a>
      </div>

      {/* Details */}
      <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
        <p className="mb-3 flex items-center gap-3 font-mono text-xs text-mist-500">
          <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
          <span className="h-px w-6 bg-ink-600" aria-hidden="true" />
          <span>{project.year}</span>
          {project.featured && (
            <span className="rounded border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
              Featured
            </span>
          )}
        </p>

        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
        <p className="mt-1.5 text-sm text-accent">{project.subtitle}</p>

        <p className="mt-5 text-sm leading-relaxed text-mist-300">{project.summary}</p>

        {project.highlights?.length > 0 && (
          <ul className="mt-5 space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-mist-400">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className="btn-primary group text-[13px]">
            Live demo
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost text-[13px]"
              aria-label={`View the ${project.title} source code on GitHub`}
            >
              <FaGithub /> Source
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
