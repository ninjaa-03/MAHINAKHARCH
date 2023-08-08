const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema.js");
const bcrypt = require("bcryptjs");

// Home
router.get("/", (req, res) => {
  res.send("Home From Server");
});

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Filled all the Details carefully");
  }

  const alreadyUser = await User.findOne({email});

  if (alreadyUser) {
    return res.status(422).send({ message: "Already Registered" });
  }

  const salt = await bcrypt.genSaltSync(12);
  const hashedPassword = await bcrypt.hashSync(password, salt);

  const user = await new User({ name, email, password: hashedPassword });
  await user.save();

  return res.send({ message: "Registered Successfully" });
});

// Login


module.exports = router;
