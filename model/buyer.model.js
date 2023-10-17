
const UserModel = require("./user.modal");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const buyerSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName,
        
    },
   
    location: {
        type: String,
        required: true
      },
      category:{
        type: String,
        required: true
      },
      price: {
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
    status: {
      type: String,
      enum: ['active', 'processing', 'completed'],
      default: 'active',
      required: true,
    },
},{timestamps:true});

const buyerModal = mongoose.model('buyer',buyerSchema);
module.exports = buyerModal;