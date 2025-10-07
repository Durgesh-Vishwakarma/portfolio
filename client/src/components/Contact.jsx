import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPaperPlane, FaRocket } from 'react-icons/fa'

const Contact = ({ data }) => {
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

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-stone-800 via-stone-700 to-neutral-800 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-80 h-80 bg-accent-wheat/10 rounded-full blur-3xl"
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
        className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaRocket className="text-5xl mx-auto" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 text-center space-y-6 border border-white/20">
            {/* Icon */}
            <motion.div
              className="inline-block"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center text-3xl">
                <FaEnvelope />
              </div>
            </motion.div>

            {/* Text */}
            <div className="space-y-3">
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                {data?.text || 'Would you like to work with me? Awesome!'}
              </p>
              <p className="text-base text-white/80 max-w-xl mx-auto">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Email Display */}
            <motion.div
              className="bg-white/10 rounded-xl p-4 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 text-white">
                <FaEnvelope className="text-lg" />
                <span className="text-base font-medium">
                  {data?.email || 'example@email.com'}
                </span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href={`mailto:${data?.email || 'example@email.com'}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-wheat hover:bg-accent-sand text-stone-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-warm hover:shadow-warm-lg group"
              >
                <FaPaperPlane className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"  />
                <span>Send Message</span>
              </a>
            </motion.div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-white/20">
              <p className="text-white/70 text-sm">
                📍 Available for freelance opportunities • Remote or On-site
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Elements */}
        <motion.div
          className="flex justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white/30 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
