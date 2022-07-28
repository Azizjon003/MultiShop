const express = require("express");
const morgan = require("morgan");
const app = express();

const productRoute = require("../routes/products");

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/product", productRoute);

module.exports = app;
