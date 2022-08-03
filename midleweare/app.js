const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();

const productRoute = require("../routes/products");
const UserRoute = require("../routes/user");
const CategoryRoute = require("../routes/category");
const ColorRoute = require("../routes/color");
const SizeRoute = require("../routes/size");
const ReviewRoute = require("../routes/review");
const errorHandler = require("../controller/errorController");
const viewsRoute = require("../routes/viewsRoute");

app.use(cors());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(morgan("dev"));
app.use(express.json());
app.use("/", viewsRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/category", CategoryRoute);
app.use("/api/v1/color", ColorRoute);
app.use("/api/v1/size", SizeRoute);
app.use("/api/v1/review", ReviewRoute);

app.use(errorHandler);
module.exports = app;
