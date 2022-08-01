const Router = require("express").Router();
const {
  getAllSize,
  getOneSize,
  addSize,
  updateSize,
  deleteSize,
} = require("../controller/sizeController");
Router.route("/").get(getAllSize).post(addSize);
Router.route("/:id").get(getOneSize).patch(updateSize).delete(deleteSize);

module.exports = Router;
