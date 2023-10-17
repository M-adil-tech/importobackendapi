const router = require("express").Router();
const buyerController = require('../controller/buyer.controller')

router.post("/createbid",buyerController.createBid);

router.post('/getbid',buyerController.getBid);

router.post("/getbid/:bidId",buyerController.getSingleBid);
router.post('/deletebid',buyerController.deleteBid);
router.post("/acceptbidresponse", buyerController.acceptBidResponse);


module.exports = router;



