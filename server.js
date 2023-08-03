const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("Hello from server");
})

app.listen(PORT,()=>console.log(`Site is running on http://localhost:${PORT}`));