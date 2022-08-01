const Router = require("express").Router();
const {
  getAllUsers,
  getOneUsers,
  addUsers,
  updateUsers,
  deleteUsers,
} = require("../controller/userController");
const auth = require("../controller/authController");
Router.route("/signup").post(auth.signin);
Router.route("/").get(getAllUsers).post(addUsers);
Router.route("/:id").get(getOneUsers).patch(updateUsers).delete(deleteUsers);

module.exports = Router;
