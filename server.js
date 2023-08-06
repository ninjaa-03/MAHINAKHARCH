// Imports & Calls
const express = require("express");
const app = express();
require("dotenv").config({path:"./config.env"});

// Port
const PORT = process.env.PORT;

// Database
require("./database/ConnectDB.js");


// Listening on port & server
app.listen(PORT, () =>
  console.log(`Running on http://localhost:${PORT}`)
);
