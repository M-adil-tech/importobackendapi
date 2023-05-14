const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user.routes");
const buyerRoute = require('./routers/buyer.router');
const app = express();

app.use(bodyParser.json())

app.use("/",UserRoute);
app.use("/",buyerRoute);


module.exports = app;