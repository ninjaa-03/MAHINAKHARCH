const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    createdAt : {
        type:Date,
        default:Date.now(),
        required:true
    },
})

const User = new mongoose.model("USER",UserModel);

module.exports = User;