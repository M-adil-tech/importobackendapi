const router = require("express").Router();
const transactioncontroller = require('../controller/transaction.controller')

router.post("/createpayment",transactioncontroller.createpayment);