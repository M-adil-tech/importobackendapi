const router = require("express").Router();
const buyerController = require('../controller/buyer.controller')
const transactioncontroller = require('../controller/transaction.controller')

router.post("/createbid",buyerController.createBid);

router.post('/getbid',buyerController.getBid);

router.post('/deletebid',buyerController.deleteBid);
router.post("/acceptbidresponse", buyerController.acceptBidResponse);
router.get("/getbid/:bidId", buyerController.getBidById);
router.post("/createpayment",transactioncontroller.createpayment);

module.exports = router;



