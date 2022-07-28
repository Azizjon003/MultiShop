const AppError = require("./appError");

module.exports = (funksiya) => {
  const errorFunc = async (req, res, next, Model) => {
    funksiya(req, res, next, Model).catch((err) => {
      next(new AppError(err.message, 404));
    });
  };
  return errorFunc;
};
