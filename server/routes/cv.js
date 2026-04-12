const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const FILES_DIR = path.join(__dirname, '../assets/cv');

// GET /api/cv/pdf - Download CV as PDF
router.get('/pdf', (req, res) => {
  const filePath = path.join(FILES_DIR, 'Abhas_Sachan_CV.pdf');

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: 'CV PDF not found. Please upload your CV to server/assets/cv/',
    });
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Abhas_Sachan_CV.pdf"');
  res.download(filePath, 'Abhas_Sachan_CV.pdf', (err) => {
    if (err) {
      console.error('PDF download error:', err);
      res.status(500).json({ success: false, message: 'Error downloading file.' });
    }
  });
});

// GET /api/cv/docx - Download CV as Word document
router.get('/docx', (req, res) => {
  const filePath = path.join(FILES_DIR, 'Abhas_Sachan_CV.docx');

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: 'CV DOCX not found. Please upload your CV to server/assets/cv/',
    });
  }

  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  );
  res.setHeader('Content-Disposition', 'attachment; filename="Abhas_Sachan_CV.docx"');
  res.download(filePath, 'Abhas_Sachan_CV.docx', (err) => {
    if (err) {
      console.error('DOCX download error:', err);
      res.status(500).json({ success: false, message: 'Error downloading file.' });
    }
  });
});

module.exports = router;
