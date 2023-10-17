const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user.routes");
const buyerRoute = require('./routers/buyer.router');
const kycRoute=require('./routers/kyc.router');
const sellerRoute=require('./routers/seller.router');
const transactionRoute=require('./routers/transaction.router')
const cors = require('cors');
// const transportRoute=require('./routers/transport.router')
const app = express();

app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 204, // Set the preflight response status to 204
  };
  app.use(cors(corsOptions));
app.use("/uploads",express.static("uploads"))
app.use(express.json());
app.use("/api",UserRoute);
app.use("/api",buyerRoute);
app.use("/api",sellerRoute);
// app.use("/api",transactionRoute);
app.use(express.json());
app.use("/api",kycRoute);




module.exports = app;