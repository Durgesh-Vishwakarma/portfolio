import { FaTwitter, FaLinkedin, FaGithub, FaAngleUp, FaHeart, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = ({ social }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <FaTwitter />, url: social?.twitter, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <FaLinkedin />, url: social?.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: <FaGithub />, url: social?.github, label: 'GitHub', color: 'hover:text-gray-400' },
  ]

  return (
    <footer className="relative bg-stone-900 text-white py-12 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-wheat/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Back to Top Button */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center text-xl shadow-warm transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaAngleUp />
          </motion.button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link, index) => (
            link.url && (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`w-11 h-11 bg-stone-800 rounded-lg flex items-center justify-center text-xl ${link.color} hover:bg-stone-700 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            )
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>

        {/* Footer Content */}
        <div className="text-center space-y-3">
          {/* Made with Love */}
          <motion.p
            className="text-gray-400 flex items-center justify-center gap-2 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span>Built with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            <span>and</span>
            <FaCode className="text-indigo-400" />
          </motion.p>

          {/* Tech Stack */}
          <motion.p
            className="text-sm text-stone-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="font-semibold text-accent-wheat">MERN Stack</span> • MongoDB • Express • React • Node.js • 
            <span className="font-semibold text-accent-wheat"> Tailwind CSS</span>
          </motion.p>

          {/* Copyright */}
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            © {new Date().getFullYear()} All rights reserved
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-xs text-gray-600 italic pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            "Code is poetry, design is art, together they create magic" ✨
          </motion.p>
        </div>

        {/* Decorative Dots */}
        <motion.div
          className="flex justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-accent-wheat rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
