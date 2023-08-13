const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema.js");
const Transaction = require("../models/Transaction.js");
const bcrypt = require("bcryptjs");
const Authenticate = require("../middleware/Authentication.js");

//-----------------------------------------------------------------------------------------------------------

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

  if (!email || !password) {
    return res.status(400).send("Filled all the Details carefully");
  }

  const userExist = await User.findOne({ email });

  if (!userExist) {
    return res.status(400).send("User not found please login");
  }

  const isMatched = await bcrypt.compare(password, userExist.password);

  const token = await userExist.generateAuthToken();

  res.cookie("mahinakharch", token, {
    expires: new Date(Date.now() + 25892000000),
    httpOnly: true,
  });

  console.log(token);

  if (isMatched) return res.status(200).json({ message: "User login" });
  else return res.status(400).json({ error: "Invalid credentials" });
});

//-----------------------------------------------------------------------------------------------------------

// User & New transaction
router.get("/getuser", Authenticate, async (req, res) => {
  res.send(req.rootUser);
});

router.post("/", Authenticate, async (req, res) => {
  try {
    const { amount, description, date } = req.body;
    if (!amount || !description || !date) {
      return res.status(404).json("Pls fill the form");
    }
    const transact = new Transaction({
      amount,
      description,
      date,
      userId: req.userId,
    });
    await transact.save();
    res.status(200).json("Successfully added");
  } catch (e) {
    console.log(e);
  }
});

router.get("/totalexpense", Authenticate, async (req, res) => {

  const total = await Transaction.find({
    $and: [
      { userId: req.userId },
      {
        date: {
          $lt: new Date(),
          $gt: new Date(new Date().getTime() - 2629800000),
        },
      },
    ],
    
  });
  let totalAmount = 0;
  total.map((trx)=>{totalAmount+=trx.amount});
  res.json({ data: totalAmount });
});

//-----------------------------------------------------------------------------------------------------------

// Old Expenses
router.get("/oldexpense", Authenticate, async (req, res) => {
  const allTransactions = await Transaction.find({ userId: req.userId }).sort({
    date: -1,
  });
  res.status(200).json({ data: allTransactions });
});
// Delete Transaction
router.delete("/:id", async (req, res) => {
  await Transaction.findOneAndDelete({ _id: req.params.id });
  res.json({ message: "Ok deleted" });
});

//-----------------------------------------------------------------------------------------------------------

// LogOut
router.get("/logout", (req, res) => {
  res.clearCookie("mahinakharch", {
    path: "/",
  });
  res.status(200).send("User logout");
});

//-----------------------------------------------------------------------------------------------------------

module.exports = router;
