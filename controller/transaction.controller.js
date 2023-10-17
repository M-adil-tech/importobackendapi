const { STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY } = process.env;
const stripe = require('stripe')(STRIPE_SECRET_KEY)
const Transaction = require("../model/transaction.model");

exports.createpayment = async(req,res)=>{
    const { amount, quantity,buyername ,status} = req.body;

    try {
        // const paymentIntent = await stripe.paymentIntents.create({
        //   amount: amount,
        //   currency: 'usd', 
        //   description: `Payment for ${quantity} items`,

        // });
        const transaction = new Transaction({
            amount: amount,
            quantity: quantity,
            buyername: buyername,
            status: 'created', 
          });
      
          await transaction.save();
    
        res.json({
            status: true,
            message:'payment sucessfull'
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}