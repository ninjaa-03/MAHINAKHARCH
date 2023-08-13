const User = require("../models/UserSchema.js");
const jwt = require("jsonwebtoken");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookie.MahinaKharch;
    const verifyToken = jwt.verify(token,process.env.SECRET);

    const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});

    if(!rootUser) throw new Error("User Not found");

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();

  } catch (e) {
    res.status(401).send("Unauthorized");
    console.log(e);
  }
};

module.exports = Authenticate;