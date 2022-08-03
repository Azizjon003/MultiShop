const AppError = require("../utility/appError");

const catchUser = require("../utility/catchAsyncUser");
const { Category } = require("../model/category");
const Product = require("../model/shop");

const home = catchUser(async (req, res, next) => {
  const datas = await Category.find().populate("products");
  const products = await Product.find();
  console.log(products);
  res.render("main", {
    data: datas,
    products: products,
  });
});

const getOneTour = catchUser(async (req, res, next) => {
  const data = await Tour.findById(req.params.id);
  if (!data) {
    return next(AppError("data not found", 401));
  }
  res.render("tour", {
    tour: data,
  });
});

const login = catchUser(async (req, res, next) => {
  res.render("loginUser");
});
const accaunt = catchUser(async (req, res, next) => {
  res.render("accaunt");
});
module.exports = {
  home,
  getOneTour,
  login,
  accaunt,
};
