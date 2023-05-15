const app = require("./app");
const db = require('./config/config')
require('dotenv').config();
const cors = require('cors');



const port = process.env.PORT || 80;

app.listen(port,()=>{
    console.log(`Server Listening on Port ${port}`);
})