const express = require('express');
const multer = require('multer');
const pictureController = require('../controller/kyc.controller');
const app=express()
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

app.use("/uploads",express.static("uploads"))
const upload = multer({ storage: storage });
// upload.single('image'),
const router = require("express").Router();

router.post('/upload',upload.single('userImage') ,pictureController.uploadPicture);

module.exports = router;
