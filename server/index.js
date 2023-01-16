const express = require("express");
const dotenv = require("dotenv")
const connectDB = require("./config/db");
dotenv.config();
const cors = require("cors");

const app = express();

//Connect Database
connectDB();



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