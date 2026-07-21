import mongoose from 'mongoose'

const portfolioSchema = new mongoose.Schema(
  {
    hero: {
      name: { type: String, required: true, default: 'Durgesh Vishwakarma' },
      title: { type: String, required: true, default: 'Full Stack Developer' },
      tagline: { type: String, default: '' },
      intro: { type: String, default: '' },
      location: { type: String, default: '' },
      availability: { type: String, default: '' },
      stats: [
        {
          _id: false,
          value: String,
          label: String,
        },
      ],
    },

    about: {
      image: { type: String, default: '/profile.jpg' },
      resumeUrl: { type: String, default: '/resume.pdf' },
      headline: { type: String, default: '' },
      paragraphs: [{ type: String }],
      principles: [{ _id: false, title: String, desc: String }],
      skillGroups: [{ _id: false, label: String, items: [String] }],
    },

    experience: [
      {
        _id: false,
        role: String,
        company: String,
        location: String,
        period: String,
        current: { type: Boolean, default: false },
        points: [String],
        stack: [String],
      },
    ],

    education: {
      degree: String,
      school: String,
      period: String,
      detail: String,
    },

    contact: {
      heading: { type: String, default: "Let's build something" },
      text: { type: String, default: '' },
      email: { type: String, required: true },
      altEmail: String,
      phone: String,
      location: String,
      responseTime: String,
    },

    social: {
      github: String,
      linkedin: String,
      email: String,
    },
  },
  { timestamps: true }
)

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

export default Portfolio
