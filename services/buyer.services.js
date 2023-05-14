const { deleteToDo } = require("../controller/buyer.controller");
const buyerModel = require("../model/buyer.model");

class buyerService{
    static async createBid(userId,location,price,quantity,description){
            const createBuyerBid = new buyerModel({userId,location,price,quantity,description});
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