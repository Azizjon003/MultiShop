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
Router.route("/signin").post(auth.login);
// Router.route("/forgotpassword").post(auth.forgotPassword);
Router.route("/updatepassword").patch(auth.protect, auth.updatePassword);
Router.route("/updateme").patch(auth.protect, auth.updateMe);
Router.route("/deleteme").delete(auth.protect, auth.deleteMe);
Router.route("/")
  .get(auth.protect, auth.role(["admin"]), getAllUsers)
  .post(addUsers);
Router.route("/:id").get(getOneUsers).patch(updateUsers).delete(deleteUsers);

module.exports = Router;
