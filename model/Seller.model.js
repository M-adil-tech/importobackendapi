const UserModel = require("./user.modal");
const buyerModel = require("./buyer.model");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const sellerSchema = new Schema({
   
    bidId:{
      type: Schema.Types.ObjectId,
      ref: buyerModel.modelName
  },
  
    location: {
        type: String,
        required: true
      },

      
      category:{
        type: String,
        required: true
      },
      Qouteprice: {
        type: Number,
        required: true,
        min: 0
      },
      quantity: {
        type: Number,
        //required: true,
        min: 0
      },
    description: {
        type: String,
        required: true
    },
},{timestamps:true});

const sellerModal = mongoose.model('seller',sellerSchema);
module.exports = sellerModal;
