const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors")

app.use(cors());

app.get("/", (req, res)=> {
  res.send("Hello World")
})

//Listen for requests
const PORT = process.env.PORT;

app.listen(PORT,()=> {
  console.log(`Server running on port: ${PORT}`)
})