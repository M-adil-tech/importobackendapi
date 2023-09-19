const express = require('express');
const router = express.Router();
const multer = require('multer');
const kycController = require('../controller/kyc.controller');

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Define the API routes
router.post('/kyc', upload.single('image'), kycController.createIdCard);

module.exports = router;
