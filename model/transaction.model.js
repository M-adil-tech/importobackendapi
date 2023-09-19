const mongoose = require('mongoose');
const { Schema } = mongoose;


const transactionSchema = new Schema({
 
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', 
    required: true,
  },
  
  amount: {
    type: Number,
    required: true,
  },
  
  status: {
    type: String,
    enum: ['created', 'pending', 'completed', 'disputed', 'cancelled'],
    default: 'created',
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('Transaction', transactionSchema);
