//Imports
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});

// Connection Db
const db = async () => await mongoose.connect(process.env.DB);
db();

// Print Connection
console.log("DB is Connected");