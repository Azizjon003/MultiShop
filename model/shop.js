const mongoose = require("mongoose");
const appError = require("../utility/appError");
const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is reequired"],
    },
    photo: {
      type: String,
      required: [true, "Photo is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    size: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Size",
      },
    ],
    color: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Color",
      },
    ],
    photos: [
      {
        type: String,
      },
    ],
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: 1,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      reqiured: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

Schema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "product",
});

Schema.pre(/^find/, function (next) {
  this.populate("color").populate("size").populate("category");
  next();
});

const Product = mongoose.model("Product", Schema);
module.exports = Product;
