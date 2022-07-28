const hand = require("./handlerController");
console.log(hand);
const { Products, Category, sizes } = require("../model/shop");
const getAllProducts = (req, res, next) => {
  hand.getAll(req, res, next, Products);
};

const getOneProduct = (req, res, next) => {
  hand.getOne(req, res, next, Products);
};
const addProduct = (req, res, next) => {
  hand.add(req, res, next, Products);
};

const updateProduct = (req, res, next) => {
  hand.update(req, res, next, Products);
};
const deleteProduct = (req, res, next) => {
  hand.deleteData(req, res, next, Products);
};
module.exports = {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
