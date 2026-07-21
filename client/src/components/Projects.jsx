import Section from './Section'
import ProjectCard from './ProjectCard'

const Projects = ({ data = [] }) => {
  const sorted = [...data].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <Section
      id="projects"
      eyebrow="03 — Selected work"
      title="Projects"
      lead="Four applications currently live in production. Each one is deployed, publicly accessible, and built end to end — database schema, API, and interface."
      className="border-t border-ink-800"
    >
      {(inView) => (
        <div className="space-y-24 sm:space-y-32">
          {sorted.map((project, index) => (
            <ProjectCard
              key={project.slug || project._id || project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      )}
    </Section>
  )
}

export default Projects
