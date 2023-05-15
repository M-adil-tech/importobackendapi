const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user.routes");
const buyerRoute = require('./routers/buyer.router');
const app = express();
const cors = require('cors');

app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
app.use("/",UserRoute);
app.use("/",buyerRoute);


module.exports = app;