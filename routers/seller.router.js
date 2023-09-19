const router = require("express").Router();
const sellerController = require('../controller/seller.controller')

router.post("/bidresponse",sellerController.bidResponse);

router.post('/getBidResponse',sellerController.getBidResponse);

router.post("/deleteBidResponse",sellerController.deleteBidResponse);

module.exports = router;



