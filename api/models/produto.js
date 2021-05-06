const mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  img: String,
  changeDescription: {
    type: Boolean,
    default: true,
  },
});

//Export the model
module.exports = mongoose.model("produtos", ProductSchema);
