const { deletebid } = require("../controller/buyer.controller");
const sellerModal = require("../model/Seller.model");

class sellerService{
    static async createQoutation(userId,bidId,location,Qouteprice,quantity,description,category){
            const createQoutation = new sellerModal({userId,bidId,location,Qouteprice,quantity,description,category});
            return await createQoutation.save();
    }

    static async getQoutations(userId){
        const sellerBidList = await sellerModal.find({userId})
        return sellerBidList;
    }

   static async deleteQoutations(id){
        const deleted = await sellerModal.findByIdAndDelete({_id:id})
        return deleted;
   }
}

module.exports = sellerService;