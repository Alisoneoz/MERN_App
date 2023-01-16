require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();


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

console.log(process.env.MONGO_URI);