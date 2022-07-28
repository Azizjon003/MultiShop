const Router = require("express").Router();
const {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
Router.route("/").get(getAllProducts).post(addProduct);
Router.route("/:id")
  .get(getOneProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = Router;
