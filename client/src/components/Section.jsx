import { Reveal, SplitText } from './ui/Motion'

/**
 * Shared section shell — consistent landmark, heading hierarchy and
 * background layering so every section reads as its own elevation plane.
 */
const Section = ({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = '',
  mesh = false,
  align = 'left',
  headingLevel: H = 'h2',
}) => {
  const centered = align === 'center'

  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`} aria-labelledby={`${id}-heading`}>
      {mesh && <div className="pointer-events-none absolute inset-0 bg-mesh-soft" aria-hidden="true" />}
      <div className="hairline absolute inset-x-0 top-0 opacity-60" aria-hidden="true" />

      <div className="container-page relative z-10">
        <header className={`mb-14 sm:mb-20 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
          {eyebrow && (
            <Reveal y={14}>
              <p className="eyebrow mb-6">{eyebrow}</p>
            </Reveal>
          )}

          <H id={`${id}-heading`} className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            <SplitText text={title} />
          </H>

          {lead && (
            <Reveal delay={0.15} y={18}>
              <p className="mt-5 text-base leading-relaxed text-ghost-300 sm:text-lg">{lead}</p>
            </Reveal>
          )}
        </header>

        {children}
      </div>
    </section>
  )
}

export default Section
