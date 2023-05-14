const mongoose = require("mongoose");


const connection = mongoose.createConnection(`mongodb://127.0.0.1:27017/importo`).on("open", ()=>{
    console.log("Mongo Connected")
}).on("error", ()=>{
    console.log("Error")
});

module.exports= connection;
