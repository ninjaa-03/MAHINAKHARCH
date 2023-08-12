// Imports & Calls
const express = require("express");
const app = express();
require("dotenv").config({path:"./config.env"});

// Port
const PORT = process.env.PORT;

// Database
require("./database/ConnectDB.js");

// Middleware
app.use(require("cors")());
app.use(express.json());
app.use(require("./routers/Auth.js"));

// Listening on port & server
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));