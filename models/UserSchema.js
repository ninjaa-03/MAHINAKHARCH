const mongoose = require("mongoose");
require("dotenv").config({path:"./config.env"});
const jwt = require("jsonwebtoken");

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
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

UserModel.methods.generateAuthToken = async function (){
    const token = jwt.sign({_id:this.id},"MYNAMEISNITISHKUMARANDIAMAWEBDEVELOPER");
    this.tokens = this.tokens.concat({token});
    await this.save();
    return token;
}

const User = new mongoose.model("USER",UserModel);

module.exports = User;