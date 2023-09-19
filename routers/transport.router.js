const router = require("express").Router();
const transportController = require('../controller/transporter.controller')

router.post("/createtransportbid",transportController.transportBidResponse);

router.post('/gettransportbid',transportController.getTransportBid);

router.post("/deletetransportbid",transportController.deleteBidResponse);

module.exports = router;



