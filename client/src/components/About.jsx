import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaRocket, FaLightbulb, FaDownload } from 'react-icons/fa'

const About = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUp = {
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

  const skills = [
    "SQL", "Python", "Java", "JavaScript", "MongoDB", "Express.js", "React.js", "Node.js", "Docker", "WebAuthn", "Postman", "CI/CD", "GitHub", "REST API", "Hugging Face", "Security Hardening", "Agile", "Unit Testing", "Project Management"
  ]

  const highlights = [
    { icon: <FaCode />, title: 'Clean Code', desc: 'Writing maintainable & scalable code' },
    { icon: <FaRocket />, title: 'Performance', desc: 'Optimized for speed & efficiency' },
    { icon: <FaLightbulb />, title: 'Innovation', desc: 'Creative problem-solving approach' },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-wheat/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-stone-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto mb-16">
          {/* Image Section */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-start"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3 }}
          >
            <div className="relative group w-full max-w-sm">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-15 group-hover:opacity-25 blur-xl transition-all duration-500" />
              
              {/* Image Container */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-2xl bg-white p-2">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={data?.image || '/profile.jpg'}
                      alt="Profile"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
               

                
              </div>

                  <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
              className="pt-6"
            >
              <a
                href={data?.resumeUrl || '/resume.pdf'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-wheat hover:bg-accent-sand text-stone-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-warm hover:shadow-warm-lg group"
              >
                <FaDownload className="text-base group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>
            </motion.div>
              
            </div>
          </motion.div>

          

          {/* Content Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.5 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="space-y-4">
              {data?.paragraphs?.map((paragraph, index) => (
                <p key={index} className="text-base text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skills Section */}
            <div className="pt-4">
              <h3 className="text-xl font-bold text-stone-900 mb-5 font-display flex items-center gap-2">
                <span className="w-1 h-6 bg-accent-wheat rounded-full"></span>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3.5 py-1.5 bg-gradient-to-br from-accent-cream to-white border border-accent-wheat/30 text-primary text-sm font-medium rounded-lg hover:bg-accent-wheat hover:text-stone-900 hover:border-accent-wheat hover:shadow-warm transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.7 + index * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cream to-accent-wheat/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-wheat/30 to-primary/20 rounded-xl flex items-center justify-center text-3xl text-primary transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-2 font-display">
                  {item.title}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
