import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa'

const ProjectCard = ({ project, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false)
  const isEven = index % 2 === 0

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + index * 0.1,
        duration: 0.8,
        ease: [0.5, 0, 0, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4 + index * 0.1,
        duration: 0.8,
        ease: [0.5, 0, 0, 1],
      },
    },
  }

  // Mock tech stack - in real app, this would come from project data
  const techStack = ['React', 'Node.js', 'MongoDB', 'Tailwind']

  return (
    <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
      {/* Text Content */}
      <motion.div
        className={`space-y-4 ${isEven ? 'lg:pr-6' : 'lg:pl-6 lg:col-start-2'}`}
        variants={textVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Project Number Badge */}
        <div className="flex items-center gap-3">
          <span className="text-accent-wheat/50 text-4xl font-bold font-display">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1 text-amber-600">
            <FaStar className="text-sm" />
            <span className="text-stone-600 text-xs font-medium">Featured</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-stone-800 font-display">
          {project.title}
        </h3>

        {/* Description Card */}
        <div className="bg-stone-50 rounded-lg p-5 shadow-md border border-stone-100">
          <p className="text-stone-600 leading-relaxed text-sm">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-primary bg-accent-cream rounded-md hover:bg-accent-wheat/30 transition-colors duration-300 border border-stone-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-stone-700 text-stone-700 text-sm font-semibold rounded-lg hover:bg-stone-700 hover:text-white transition-all duration-300 transform hover:scale-105 group"
          >
            <FaExternalLinkAlt className="text-xs group-hover:rotate-45 transition-transform duration-300" />
            <span>Live Demo</span>
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-stone-700 text-stone-700 text-sm font-semibold rounded-lg hover:bg-stone-700 hover:text-white transition-all duration-300 transform hover:scale-105 group"
          >
            <FaGithub className="text-xs group-hover:rotate-12 transition-transform duration-300" />
            <span>Source Code</span>
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className={`relative ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
        variants={imageVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative group">
          {/* Gradient Background Glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-15 group-hover:opacity-25 blur-lg transition-all duration-500" />
          
          {/* Image Container */}
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noreferrer"
            className="relative block"
          >
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-warm-lg border border-stone-200"
              animate={{
                y: isHovered ? -5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-stone-900/95 to-primary/95 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-white text-center space-y-3">
                  <div className="text-4xl">
                    <FaExternalLinkAlt className="mx-auto" />
                  </div>
                  <p className="text-lg font-semibold">View Project</p>
                </div>
              </motion.div>
              
              {/* Corner Badge */}
              <div className="absolute top-3 right-3 bg-green-600 px-3 py-1 rounded-md text-white text-xs font-semibold">
                ⚡ Live
              </div>
            </motion.div>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
