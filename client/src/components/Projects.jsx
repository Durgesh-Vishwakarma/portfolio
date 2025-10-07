import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './ProjectCard'

const Projects = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent-wheat/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3 text-stone-900">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-3" />
          <p className="text-stone-600 text-base max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development practices
          </p>
        </motion.div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {data?.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
