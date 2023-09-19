const { deletebid } = require("../controller/buyer.controller");
const transportModal = require("../model/transport.model");

class transportService{
    static async createTransportBidResponse(userId,bidId,location,Qouteprice,quantity,description,category){
            const createTransportQoutation = new transportModal({userId,bidId,location,Qouteprice,quantity,description,category});
            return await createTransportQoutation.save();
    }

    static async getTransportBidResponse(userId){
        const transportBidList = await transportModal.find({userId})
        return transportBidList;
        
    }

   static async deleteTransportBidResponse(id){
        const deleted = await transportModal.findByIdAndDelete({_id:id})
        return deleted;
   }
}



module.exports = transportService;