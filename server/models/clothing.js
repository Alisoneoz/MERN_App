const mongoose = require("mongoose");

const ClothingSchema = new Schema({
  item :{
    type: String,
    required: true
  },
  reference:{
    type: String
  },
  amount: {
    type: Number
  },
  comment: {
    type: String
  }
}, {timestamps: true})

module.exports= mongoose.model("clothing", ClothingSchema)