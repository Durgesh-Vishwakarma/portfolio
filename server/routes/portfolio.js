import express from 'express'
import Portfolio from '../models/Portfolio.js'
import Project from '../models/Project.js'

const router = express.Router()

// GET all portfolio data
router.get('/', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne().lean()
    const projects = await Project.find().sort({ order: 1 }).lean()

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio data not found' })
    }

    res.json({
      ...portfolio,
      projects
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET portfolio info (without projects)
router.get('/info', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne().lean()
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio data not found' })
    }
    res.json(portfolio)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 }).lean()
    res.json(projects)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST/UPDATE portfolio info
router.post('/info', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, runValidators: true }
    )
    res.json(portfolio)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// POST new project
router.post('/projects', async (req, res) => {
  try {
    const project = new Project(req.body)
    await project.save()
    res.status(201).json(project)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// PUT update project
router.put('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!project) {
      return res.status(404).json({ message: 'Project not found' })
    }
    res.json(project)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// DELETE project
router.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if (!project) {
      return res.status(404).json({ message: 'Project not found' })
    }
    res.json({ message: 'Project deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
