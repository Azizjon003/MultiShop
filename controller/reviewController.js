const AppError = require("../utility/appError");
const catchAsyncUser = require("../utility/catchAsyncUser");
const Review = require("../model/review");

const getReview = catchAsyncUser(async (req, res, next) => {
  const filter = {};
  if (req.params.prodictid) filter.product = req.params.prodictid;
  const reviews = await Review.find(filter).select("-__v -product");
  res.status(200).json({
    status: "success",
    results: reviews.length,
    reviews,
  });
});
const addReview = catchAsyncUser(async (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.user);
  let review = await Review.create({
    description: req.body.description,
    rating: req.body.rating,
    user: req.user._id,
    product: req.params.prodictid,
  });
  res.status(201).json({
    status: "sucess",
    data: review,
  });
});

module.exports = {
  addReview,
  getReview,
};
