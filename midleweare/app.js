const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const productRoute = require("../routes/products");
const UserRoute = require("../routes/user");
const CategoryRoute = require("../routes/category");
const ColorRoute = require("../routes/color");
const SizeRoute = require("../routes/size");
const ReviewRoute = require("../routes/review");
const errorHandler = require("../controller/errorController");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/product", productRoute);
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/category", CategoryRoute);
app.use("/api/v1/color", ColorRoute);
app.use("/api/v1/size", SizeRoute);
app.use("/api/v1/review", ReviewRoute);

app.use(errorHandler);
module.exports = app;
