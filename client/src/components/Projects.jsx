import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import Section from './Section'
import ProjectCard from './ProjectCard'
import { Reveal } from './ui/Motion'

const Projects = ({ data = [], social }) => {
  const sorted = [...data].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <Section
      id="projects"
      eyebrow="03 — Selected work"
      title="Projects in production"
      lead="Four applications currently live and publicly accessible. Each one built end to end — database schema, API, and interface."
      className="bg-base-950"
      mesh
    >
      <div className="space-y-28 sm:space-y-40">
        {sorted.map((project, index) => (
          <ProjectCard key={project.slug || project._id || project.title} project={project} index={index} />
        ))}
      </div>

      {/* Closing CTA */}
      <Reveal delay={0.1}>
        <div className="panel mt-28 flex flex-col items-center gap-6 px-8 py-12 text-center sm:mt-36">
          <p className="text-lg font-semibold text-white sm:text-xl">There's more on GitHub</p>
          <p className="max-w-lg text-sm leading-relaxed text-ghost-400">
            Smaller experiments, React Native work and the repositories behind everything above.
          </p>
          <a href={social?.github} target="_blank" rel="noreferrer noopener" className="btn-ghost group">
            <FaGithub />
            Browse all repositories
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}

export default Projects
