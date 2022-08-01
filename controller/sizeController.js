const hand = require("./handlerController");
const { Category, Size, color } = require("../model/category");
const getAllSize = (req, res, next) => {
  hand.getAll(req, res, next, Size);
};

const getOneSize = (req, res, next) => {
  hand.getOne(req, res, next, Size);
};
const addSize = (req, res, next) => {
  hand.add(req, res, next, Size);
};

const updateSize = (req, res, next) => {
  hand.update(req, res, next, Size);
};
const deleteSize = (req, res, next) => {
  hand.deleteData(req, res, next, Size);
};
module.exports = {
  getAllSize,
  getOneSize,
  addSize,
  updateSize,
  deleteSize,
};
