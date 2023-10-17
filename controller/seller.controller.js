const sellerServices = require('../services/seller.services');
const buyerModel = require("../model/buyer.model");
exports.bidResponse =  async (req,res,next)=>{
    try {
        const { bidId,location,Qouteprice,quantity,description,category} = req.body;
        // if (!bidId || !mongoose.Types.ObjectId.isValid(bidId)) {
        //     return res.status(400).json({ status: false, message: 'Invalid bidId' });
        // }
        
        await buyerModel.findByIdAndUpdate(bidId, { status: 'processing' });
        console.log(bidId);
        // const bid = await buyerModel.findById(bidId);
        // console.log(bid);
        // if (!bid ) {
        //     return res.status(404).json({ status: false, message: 'Invalid  bid ID' });
        // }
        // bid.status = 'processing';
        // await bid.save();

        let sellerResponse = await sellerServices.createQoutation(bidId,location,Qouteprice,quantity,description,category);
        res.json({status: true,success:sellerResponse});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.getBidResponse =  async (req,res,next)=>{
    try {
        const { bidId } = req.body;
        let sellerResponseData = await sellerServices.getQoutations(bidId);
        res.json({status: true,success:sellerResponseData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.deleteBidResponse =  async (req,res,next)=>{
    try {
        const { id } = req.body;
        let deletedData = await sellerServices.deleteQoutations(id);
        res.json({status: true,success:deletedData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}