const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

//Connect with Database

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("MongoDB is connected")
  } catch (err) {
    console.err(err.message);
    process.exit(1)
  }
}

module.exports = connectDB;