import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  liveUrl: {
    type: String,
    required: true
  },
  sourceUrl: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }],
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const Project = mongoose.model('Project', projectSchema)

export default Project
