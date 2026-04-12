const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, message) are required.',
      });
    }

    // Save to MongoDB
    const contact = new Contact({
      name,
      email,
      message,
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
    });

    await contact.save();

    // Optional: Send email notification via Nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `📬 New Portfolio Message from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr/>
            <small>Received at: ${new Date().toLocaleString()}</small>
          `,
        });
      } catch (emailErr) {
        console.warn('Email notification failed (non-critical):', emailErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: "Thanks for reaching out, I'll get back to you soon!",
      data: { id: contact._id, name: contact.name },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    console.error('Contact form error:', error);
    return res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// GET /api/contact - Get all messages (admin use)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
