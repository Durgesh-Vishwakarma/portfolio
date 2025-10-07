import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChevronDown } from 'react-icons/fa'

const Hero = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.5, 0, 0, 1],
      },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-neutral-900 text-white px-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-wheat/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        ref={ref}
        className="container mx-auto text-center relative z-10 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Greeting Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6"
        >
          <span className="bg-accent-wheat/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium border border-accent-wheat/30 text-accent-wheat">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4"
          variants={itemVariants}
        >
          <span className="block text-stone-300 mb-2 text-lg md:text-xl font-normal">
            Hi, I'm
          </span>
          <span className="block text-white">
            {data?.name || 'Your Name'}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl mb-6 font-light text-accent-wheat"
          variants={itemVariants}
        >
          {data?.title || 'Full Stack Developer'}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          Crafting exceptional digital experiences with modern technologies
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-stone-800/50 backdrop-blur-sm border-2 border-accent-wheat/40 text-accent-wheat font-semibold rounded-lg hover:bg-stone-800/70 hover:border-accent-wheat transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-stone-800/50 backdrop-blur-sm border-2 border-accent-wheat/40 text-accent-wheat font-semibold rounded-lg hover:bg-stone-800/70 hover:border-accent-wheat transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-stone-400 hover:text-accent-wheat transition-colors cursor-pointer group"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-xs mb-2 uppercase tracking-wider font-medium">Scroll</span>
            <div className="w-6 h-10 border-2 border-stone-400 group-hover:border-accent-wheat rounded-full flex items-start justify-center p-2 transition-colors">
              <motion.div
                className="w-1.5 h-1.5 bg-accent-wheat rounded-full"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
