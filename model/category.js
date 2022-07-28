const mongoose = require("mongoose");

const categrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  photo: {
    type: String,
    required: [true, "Photo is required"],
  },
});
const sizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const category = mongoose.model("Category", categrySchema);
const size = mongoose.model("Size", sizeSchema);
const color = mongoose.model("Color", colorSchema);
module.exports = {
  category,
  size,
  color,
};
