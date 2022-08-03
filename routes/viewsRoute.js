const router = require("express").Router();

const views = require("../controller/viewsController");
const auth = require("../controller/authController");

router.route("/home").get(auth.isSignin, views.home);
router.route("/detail").get(auth.isSignin, views.products);
router.route("/login").get(views.login);

module.exports = router;
