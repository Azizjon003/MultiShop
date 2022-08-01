const catchAsyncUser = require("../utility/catchAsyncUser");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
function resFunc(res, data, statusCode, token) {
  res.status(statusCode).json({
    status: "succes",
    results: data.length,
    data,
    token,
  });
}

function createToken() {}
const signin = catchAsyncUser(async (req, res, next) => {
  let data = await User.create({
    name: req.body.name,
    email: req.body.email,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    mobile: req.body.mobile,
    country: req.body.country,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    jonatmaUchun: req.body.jonatmaUchun,
  });
  const token = jwt.sign({ id: signin._id }, process.env.SECRET, {
    expiresIn: "1d",
  });

  resFunc(res, data, 201, token);
});

const login = catchUserAsync((module.exports = {}));
