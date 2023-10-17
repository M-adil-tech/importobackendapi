const { deletebid } = require("../controller/buyer.controller");
const buyerModel = require("../model/buyer.model");

class buyerService{
    static async createBid(userId,location,price,quantity,description,category, status){
            const createBuyerBid = new buyerModel({userId,location,price,quantity,description,category , status:'active'});
            return await createBuyerBid.save();
    }

    static async getBid(userId){
        const bidList = await buyerModel.find({userId})
        return bidList;
    }

   static async deleteBid(id){
        const deleted = await buyerModel.findByIdAndDelete({_id:id})
        return deleted;
   }
}

module.exports = buyerService;