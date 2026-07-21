/**
 * Seeds MongoDB from the same content file the frontend uses as its fallback,
 * so the API and the offline render can never drift apart.
 *
 * Run from the repo root (the import below reaches into ../client):
 *   node server/seed.js
 */
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Portfolio from './models/Portfolio.js'
import Project from './models/Project.js'
import { content } from '../client/src/data/content.js'

dotenv.config()

const seed = async () => {
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI is not set. Add it to server/.env before seeding.')
    process.exit(1)
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ Connected to MongoDB')

    await Promise.all([Portfolio.deleteMany({}), Project.deleteMany({})])
    console.log('🧹 Cleared existing portfolio and project documents')

    const { projects, ...portfolio } = content
    await Portfolio.create(portfolio)
    console.log('✅ Portfolio document seeded')

    await Project.insertMany(projects)
    console.log(`✅ ${projects.length} projects seeded: ${projects.map((p) => p.title).join(', ')}`)

    console.log('🎉 Database seeded successfully')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error.message)
    process.exit(1)
  }
}

seed()
