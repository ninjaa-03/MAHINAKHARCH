// Imports & Calls
const express = require("express");
const app = express();
require("dotenv").config({path:"./config.env"});
const cookieParser = require("cookie-parser");
const path = require('path')

// Port
const PORT = process.env.PORT;

// Database
require("./database/ConnectDB.js");

// Middleware
app.use(require("cors")());
app.use(cookieParser());
app.use(express.json());
app.use("/api",require("./routers/Auth.js"));

//static serve
app.use(express.static(path.join(__dirname,"./client/build")));
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

// Listening on port & server
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

