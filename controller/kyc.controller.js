const Picture = require('../model/kyc.model');

const uploadPicture = (req, res) => {
  // const { filename } = req.image;
  console.log("Filename => ")
  const picture = new Picture({
   image:"http://localhost/uploads/"+req.body.image,
  });

  picture.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save picture' });
    } else {
      res.json({ success: true, message: 'Picture uploaded successfully' });
    }
  });
};

module.exports = { uploadPicture };
