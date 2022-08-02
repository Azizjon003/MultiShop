const AppError = require("./appError");

module.exports = (funksiya) => {
  const errorFunc = async (req, res, next, Model, option) => {
    funksiya(req, res, next, Model, option).catch((err) => {
      return next(new AppError(err.message, 404));
    });
  };
  return errorFunc;
};
