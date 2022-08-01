const hand = require("./handlerController");
const { Category, Size, Color } = require("../model/category");
const getAllColor = (req, res, next) => {
  hand.getAll(req, res, next, Color);
};

const getOneColor = (req, res, next) => {
  hand.getOne(req, res, next, Color);
};
const addColor = (req, res, next) => {
  hand.add(req, res, next, Color);
};

const updateColor = (req, res, next) => {
  hand.update(req, res, next, Color);
};
const deleteColor = (req, res, next) => {
  hand.deleteData(req, res, next, Color);
};
module.exports = {
  getAllColor,
  getOneColor,
  addColor,
  updateColor,
  deleteColor,
};
