import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, trim: true },
    year: { type: String, trim: true },
    summary: { type: String, required: true },
    highlights: [{ type: String }],
    image: { type: String, required: true },
    alt: { type: String },
    liveUrl: { type: String, required: true },
    sourceUrl: { type: String, default: '' },
    tags: [{ type: String }],
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0, index: true },
  },
  { timestamps: true }
)

const Project = mongoose.model('Project', projectSchema)

export default Project
