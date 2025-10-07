import mongoose from 'mongoose'

const portfolioSchema = new mongoose.Schema({
  hero: {
    name: {
      type: String,
      required: true,
      default: 'Your Name'
    },
    title: {
      type: String,
      required: true,
      default: 'Full Stack Developer'
    }
  },
  about: {
    image: {
      type: String,
      default: '/profile.jpg'
    },
    paragraphs: [{
      type: String
    }],
    resumeUrl: {
      type: String,
      default: '/resume.pdf'
    }
  },
  contact: {
    text: {
      type: String,
      default: 'Would you like to work with me? Awesome!'
    },
    email: {
      type: String,
      required: true
    }
  },
  social: {
    twitter: String,
    linkedin: String,
    github: String
  }
}, {
  timestamps: true
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

export default Portfolio
