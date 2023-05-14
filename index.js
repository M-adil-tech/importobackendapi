const app = require("./app");
const db = require('./config/config')

const port = 3000;

app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
})