const { deletebid } = require("../controller/buyer.controller");
const buyerModel = require("../model/buyer.model");

class buyerService{
    static async createBid(userId,location,price,quantity,description,category, status){
            const createBuyerBid = new buyerModel({userId ,location,price,quantity,description,category , status:'active',
            deletionTime: new Date(Date.now() + 24 * 60 * 60 * 1000) });
            console.log("new bid", createBuyerBid);
            return await createBuyerBid.save();
    }

    static async getBid(userId){
        const bidList = await buyerModel.find({userId})
        return bidList;
    }

    static async getBid(userId) {
        if (userId) {
            const bidList = await buyerModel.find({ userId });
            return bidList;
        } else {
            const allBids = await buyerModel.find(); // Replace with your method to fetch all bids
            return allBids;
        }
    }

   static async deleteBid(id){
        const deleted = await buyerModel.findByIdAndDelete({_id:id})
        return deleted;
   }
   static async deleteExpiredBids() {
    try {
        const currentTime = new Date();
        const expiredBids = await buyerModel.find({ deletionTime: { $lte: currentTime } });

        if (expiredBids.length > 0) {
            for (const bid of expiredBids) {
                await buyerModel.findByIdAndDelete(bid._id);
                console.log(`Bid ${bid._id} deleted.`);
            }
        } else {
            console.log("No expired bids found.");
        }
    } catch (error) {
        console.error("Error while deleting expired bids:", error);
    }
}

}

module.exports = buyerService;