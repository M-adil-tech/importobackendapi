const kycModal = require('../model/kyc.model');

// Handle POST request to create a new ID card entry
const createIdCard = async (req, res) => {
  try {
    const { idCardNo } = req.body;
    const imagePath = req.file.path; // Assuming you're using multer for file uploads

    const newIdCard = new kycModal({ idCardNo, imagePath });
    await newIdCard.save();

    res.status(201).json(newIdCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createIdCard };
