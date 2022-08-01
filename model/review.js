const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
});
const review = mongoose.model("Review", reviewSchema);
module.exports = review;
