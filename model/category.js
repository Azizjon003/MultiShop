const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    photo: {
      type: String,
      required: [true, "Photo is required"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const sizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const colorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

categorySchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "category",
});
const Category = mongoose.model("Category", categorySchema);
const Size = mongoose.model("Size", sizeSchema);
const Color = mongoose.model("Color", colorSchema);
module.exports = {
  Category,
  Size,
  Color,
};
