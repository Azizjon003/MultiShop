const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  baho: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
});

module.exports = mongoose.model("Review", reviewSchema);
