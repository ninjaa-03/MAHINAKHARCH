const mongoose = require("mongoose");

const userTransaction = new mongoose.Schema({
    amount:Number,
    description:String,
    date:Date,
    userId:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const transation = new mongoose.model("Transaction",userTransaction);

module.exports = transation;