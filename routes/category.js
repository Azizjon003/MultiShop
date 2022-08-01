const Router = require("express").Router();
const {
  getAllCategory,
  getOneCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/category");
Router.route("/").get(getAllCategory).post(addCategory);
Router.route("/:id")
  .get(getOneCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

module.exports = Router;
