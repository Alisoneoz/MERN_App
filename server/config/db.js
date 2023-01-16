const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Connect with the DB

const MONGO_URI = process.env.MONGO_URI
const connectDB = async () => {
  try{
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser:true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB is connected");
  } catch(err){
    console.log(err.message);
    process.exit(1)
  }
}


module.exports= connectDB;

