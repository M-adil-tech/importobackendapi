
const UserModel = require("./user.modal");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const kycSchema = new Schema({
  idCardNo:{
    type:String
  },
      imagePath:{
        type:String
      },
      
},{timestamps:true});

const kycModal = mongoose.model('kyc1',kycSchema);
module.exports = kycModal;