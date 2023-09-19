const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user.routes");
const buyerRoute = require('./routers/buyer.router');
const kycRoute=require('./routers/kyc.router');
const sellerRoute=require('./routers/seller.router')
const transportRoute=require('./routers/transport.router')
const app = express();
const cors = require('cors');
app.use(bodyParser.json())
app.use(cors());
app.use("/uploads",express.static("uploads"))
app.use(express.json());
app.use("/api",UserRoute);
app.use("/api",buyerRoute);
app.use("/api",sellerRoute);
app.use("/api",transportRoute);
app.use(express.json());
app.use("/api",kycRoute);




module.exports = app;