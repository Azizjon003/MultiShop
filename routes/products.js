const Router = require("express").Router({
  mergeParams: true,
});
const reviewRoute = require("./review");
const {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
Router.use("/:prodictid/review", reviewRoute);
Router.route("/").get(getAllProducts).post(addProduct);
Router.route("/:id")
  .get(getOneProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = Router;
