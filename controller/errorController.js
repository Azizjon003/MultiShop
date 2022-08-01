const errorFunc = (err, req, res, next) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    ErrorInfo: err.stack,
  });
};

module.exports = errorFunc;
