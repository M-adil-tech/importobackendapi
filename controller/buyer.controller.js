const buyerService = require('../services/buyer.services');

exports.createBid =  async (req,res,next)=>{
    try {
        const { userId,location,price,quantity,description,category} = req.body;
        let buyerData = await buyerService.createBid(userId,location,price,quantity,description,category);
        res.json({status: true,success:buyerData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.getBid =  async (req,res,next)=>{
    try {
        const { userId } = req.body;
        let buyerData = await buyerService.getBid(userId);
        res.json({status: true,success:buyerData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}
exports.getSingleBid =  async (req,res,next)=>{
    const bidId = req.params.bidId;

   
    const singleBid = getBidById(bidId); 
  
  
    if (singleBid) {
      
      res.json(singleBid);
    } else {
     
      res.status(404).json({ error: 'Bid not found' });
    }
}
exports.deleteBid =  async (req,res,next)=>{
    try {
        const { id } = req.body;
        let deletedData = await buyerService.deleteBid(id);
        res.json({status: true,success:deletedData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}
exports.getBidById = async (req, res, next) => {
    try {
        const { bidId } = req.params;
        const bid = await buyerModel.findById(bidId);
        if (bid) {
            res.json({ status: true, success: bid });
        } else {
            res.status(404).json({ status: false, message: 'Bid not found' });
        }
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};
exports.acceptBidResponse = async (req, res, next) => {
    try {
        const { bidId } = req.body;
        // Assuming you have validation logic for bidId and bid response acceptance
        // ...

        // Update the bid status to 'completed'
        await buyerModel.findByIdAndUpdate(bidId, { status: 'completed' });

        res.json({ status: true, message: 'Bid response accepted successfully.' });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};