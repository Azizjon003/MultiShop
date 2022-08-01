const Users = require("../model/user");
const hand = require("./handlerController");
const getAllUsers = (req, res, next) => {
  hand.getAll(req, res, next, Users);
};

const getOneUsers = (req, res, next) => {
  hand.getOne(req, res, next, Users);
};
const addUsers = (req, res, next) => {
  hand.add(req, res, next, Users);
};

const updateUsers = (req, res, next) => {
  hand.update(req, res, next, Users);
};
const deleteUsers = (req, res, next) => {
  hand.deleteData(req, res, next, Users);
};
module.exports = {
  getAllUsers,
  getOneUsers,
  addUsers,
  updateUsers,
  deleteUsers,
};
