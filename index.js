const app = require("./app");
// const db = require('./config/config')
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const mongoString = 'mongodb+srv://root:root@cluster0.btslc8f.mongodb.net';

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});



const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`Server Listening on Port ${port}`);
})