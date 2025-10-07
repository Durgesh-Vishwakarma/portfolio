import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

// POST contact form
router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Please provide name, email, and message' 
    })
  }

  try {
    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    res.json({ 
      success: true,
      message: 'Message sent successfully!' 
    })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ 
      success: false,
      message: 'Failed to send message. Please try again later.' 
    })
  }
})

export default router
