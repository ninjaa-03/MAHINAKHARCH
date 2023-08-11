const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema.js");
const bcrypt = require("bcryptjs");

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Filled all the Details carefully");
  }

  const alreadyUser = await User.findOne({ email });

  if (alreadyUser) {
    return res.status(422).send({ message: "Already Registered" });
  }

  const salt = await bcrypt.genSaltSync(12);
  const hashedPassword = await bcrypt.hashSync(password, salt);

  const user = await new User({ name, email, password: hashedPassword });
  await user.save();

  return res.status(200).send({ message: "Registered Successfully" });
});

// Login
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  if ( !email || !password) {
    return res.status(400).send("Filled all the Details carefully");
  }

  const userExist = await User.findOne({email});

  if(!userExist){
    return res.status(400).send("User not found please login first");
  }

  const isMatched = await bcrypt.compare( password, userExist.password);

  const token = await userExist.generateAuthToken();

  res.cookie("MahinaKharch",token,{
    expires:new Date(Date.now()+25892000000),
    httpOnly:true
  });

  console.log(token);

  if(isMatched)
  return res.json({ message: "User login" });
  else
  return res.status(422).json({ error: "Invalid credentials" });

});

module.exports = router;
