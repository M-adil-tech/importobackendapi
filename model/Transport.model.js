const UserModel = require("./user.modal");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransportSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    TbidId:{
      type: Schema.Types.ObjectId,
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
      load: {
        type: Number,
        //required: true,
        min: 0
      },
    description: {
        type: String,
        required: true
    },
},{timestamps:true});

const TransportModal = mongoose.model('Transpoter',TransportSchema);
module.exports = TransportSchema;