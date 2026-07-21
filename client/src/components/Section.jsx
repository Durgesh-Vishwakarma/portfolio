import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Shared section shell: consistent id/heading/eyebrow structure so every
 * section produces the same semantic landmark + heading hierarchy for SEO.
 */
const Section = ({ id, eyebrow, title, lead, children, className = '', headingLevel: H = 'h2' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id={id} ref={ref} className={`relative py-20 sm:py-28 ${className}`} aria-labelledby={`${id}-heading`}>
      <div className="container-page">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <H id={`${id}-heading`} className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </H>
          {lead && <p className="mt-4 text-base leading-relaxed text-mist-400 sm:text-lg">{lead}</p>}
        </motion.header>

        {typeof children === 'function' ? children(inView) : children}
      </div>
    </section>
  )
}

export default Section
