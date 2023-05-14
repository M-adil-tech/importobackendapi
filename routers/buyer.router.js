const router = require("express").Router();
const buyerController = require('../controller/buyer.controller')

router.post("/createbid",buyerController.createBid);

router.get('/getbid',buyerController.getBid)

router.post("/deletebid",buyerController.deleteBid)

module.exports = router;