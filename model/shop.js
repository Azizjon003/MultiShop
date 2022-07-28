const mongoose = require("mongoose");

const category = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "categoriyaga nom berish majburiy"],
  },
  photo: {
    type: String,
    default: "no photo",
  },
});
const size = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    upper: true,
    enum: ["XS", "S", "M", "L", "XL"],
  },
});

const products = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
  },
  description: {
    type: String,
    required: true,
    mingLength: 25,
  },
  photo: {
    type: String,
    required: true,
  },
  photos: [
    {
      type: String,
      required: true,
    },
  ],
  size: {
    type: size,
    required: true,
  },
  color: [String],

  price: {
    type: Number,
    required: true,
    validate: {
      validator: function (val) {
        return val > 0;
      },
      message: "Narxi 0 dan katta va musbat bo'lsin",
    },
    priceType: {
      type: String,
      required: true,
    },
    baholar: {
      type: Number,
    },
  },
});
