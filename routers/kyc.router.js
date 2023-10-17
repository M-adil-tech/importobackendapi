const express = require('express');
const router = express.Router();
const multer = require('multer');
const kycController = require('../controller/kyc.controller');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads/')); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Define the API routes
router.post('/kyc', upload.single('image'), kycController.createIdCard);

module.exports = router;
