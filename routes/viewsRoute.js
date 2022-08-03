const router = require("express").Router();

const views = require("../controller/viewsController");

router.route("/home").get(views.home);

module.exports = router;
