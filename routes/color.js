const Router = require("express").Router();
const {
  getAllColor,
  getOneColor,
  addColor,
  updateColor,
  deleteColor,
} = require("../controller/colorController");
Router.route("/").get(getAllColor).post(addColor);
Router.route("/:id").get(getOneColor).patch(updateColor).delete(deleteColor);

module.exports = Router;
