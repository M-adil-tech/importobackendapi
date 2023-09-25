const transportServices = require('../services/transport.services');

exports.transportBidResponse =  async (req,res,next)=>{
    try {
        const { userId,bidId,location,Qouteprice,quantity,description,category} = req.body;
        let transporterResponse = await transportServices.createTransportBidResponse(userId,bidId,location,Qouteprice,quantity,description,category);
        res.json({status: true,success:transporterResponse});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}


exports.getTransportBid =  async (req,res,next)=>{
    try {
        const { userId } = req.body;
        let transportResponseData = await transportServices.gettransportBidResponse(userId);
        // let transport = req.body;
        res.json({status: true,success:transportResponseData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }

}

 

exports.deleteBidResponse =  async (req,res,next)=>{
    try {
        const { id } = req.body;
        let deletedData = await transportServices.deleteTransportBidResponse(id);
        res.json({status: true,success:deletedData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}




