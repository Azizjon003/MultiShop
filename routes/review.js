let Router = require("express").Router({
  mergeParams: true,
});
const review = require("../controller/reviewController");
const auth = require("../controller/authController");
Router.route("/").get(review.getReview);
Router.route("/").post(auth.protect, review.addReview);

module.exports = Router;
