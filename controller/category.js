const hand = require("./handlerController");
const { Category, size, color } = require("../model/category");
const getAllCategory = (req, res, next) => {
  hand.getAll(req, res, next, Category);
};

const getOneCategory = (req, res, next) => {
  hand.getOne(req, res, next, Category);
};
const addCategory = (req, res, next) => {
  hand.add(req, res, next, Category);
};

const updateCategory = (req, res, next) => {
  hand.update(req, res, next, Category);
};
const deleteCategory = (req, res, next) => {
  hand.deleteData(req, res, next, Category);
};
module.exports = {
  getAllCategory,
  getOneCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
