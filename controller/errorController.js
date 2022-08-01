const errorFunc = (err, req, res, next) => {
  err.statusCode = err.statusCode || 400;
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    ErrorInfo: err.stack,
  });
};

module.exports = errorFunc;
