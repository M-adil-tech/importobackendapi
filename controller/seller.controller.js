const sellerServices = require('../services/seller.services');

exports.bidResponse =  async (req,res,next)=>{
    try {
        const { userId,bidId,location,Qouteprice,quantity,description,category} = req.body;
        let sellerResponse = await buyerService.createQoutation(userId,bidId,location,Qouteprice,quantity,description,category);
        res.json({status: true,success:sellerResponse});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.getBidResponse =  async (req,res,next)=>{
    try {
        const { userId } = req.body;
        let sellerResponseData = await sellerServices.getQoutations(userId);
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