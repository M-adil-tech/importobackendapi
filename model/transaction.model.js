const mongoose = require('mongoose');
const { Schema } = mongoose;


const transactionSchema = new Schema({
 
  
  amount: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  
  buyername: {
    type: String,
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
