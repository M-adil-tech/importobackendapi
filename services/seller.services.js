const { deletebid } = require("../controller/buyer.controller");
const sellerModal = require("../model/Seller.model");

class sellerService{
    static async createQoutation(bidId,location,Qouteprice,quantity,description,category,status){
            const createQoutation = new sellerModal({bidId,location,Qouteprice,quantity,description,category , status:'processing'});
            return await createQoutation.save();
    }

    static async getQoutations(bidId){
        const sellerBidList = await sellerModal.find({bidId})
        return sellerBidList;
    }

   static async deleteQoutations(id){
        const deleted = await sellerModal.findByIdAndDelete({_id:id})
        return deleted;
   }
}

module.exports = sellerService;