const AppError = require("./appError");

module.exports = (funksiya) => {
  const errorFunc = async (req, res, next) => {
    funksiya(req, res, next).catch((err) => {
      return next(new AppError(err.message, 404));
    });
  };
  return errorFunc;
};
