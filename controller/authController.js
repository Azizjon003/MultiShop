const catchAsyncUser = require("../utility/catchAsyncUser");

const User = require("../model/user");
const AppError = require("../utility/appError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mail = require("../utility/email");
function resFunc(res, data, statusCode, token) {
  res.status(statusCode).json({
    status: "succes",
    results: data.length,
    data,
    token,
  });
}

function optionss(notSort, permission) {
  let option = {};

  Object.keys(notSort).forEach((key) => {
    if (permission.includes(key)) {
      option[key] = notSort[key];
    }
  });

  return option;
}
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
    role: req.body.role,
  });
  const token = jwt.sign({ id: signin._id }, process.env.SECRET, {
    expiresIn: "1d",
  });

  resFunc(res, data, 201, token);
});

const login = catchAsyncUser(async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return next(new AppError("email and password reqiured", 400));
  }
  let password = await User.findOne({ email: req.body.email }).select(
    "+password"
  );
  let inputPassword = req.body.password;

  const shart = await bcrypt.compare(inputPassword, password.password);
  if (!shart) {
    return next(new AppError("password incorrect", 401));
  }

  const token = jwt.sign({ id: password._id }, process.env.SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: req.protocol === "https" ? true : false,
  });

  resFunc(res, "password", 201, token);
});

const protect = catchAsyncUser(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else {
    if (req.headers.cookie) {
      token = req.headers.cookie.split("=")[1];
    }
  }
  console.log(token);
  const id = await jwt.verify(token, process.env.SECRET);
  console.log(id);
  if (!id) {
    return next(new AppError("token is not valid", 401));
  }

  const user = await User.findById(id.id);
  console.log(user);
  req.user = user;
  next();
});

const role = (roles) => {
  return catchAsyncUser(async (req, res, next) => {
    // 1) User ni roleni olamiz databasedan, tekshiramiz
    console.log(req.user);
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("Siz bu amaliyotni bajarish huquqiga ega emassiz!", 401)
      );
    }
    next();
  });
};
const forgotPassword = catchAsyncUser(async (req, res, next) => {
  let email = req.body.email;
  if (!email) {
    return next(new AppError("email is required", 400));
  }
  let user = await User.findOne({ email });
  if (!user) {
    return next(new AppError("email is not found", 404));
  }

  let token = await user.hashToken();
  user.save({
    validateBeforeSave: false,
  });

  await mail({
    email: user.email,
    subject: "Password reset token",
    message:
      "you are reset paswordLink is" +
      `    
      <a>${req.protocol}://${req.get(
        "host"
      )}/api/v1/users/resetPassword/${token}.This link expires 10 minutes after it was sent.</a>`,
  });
  res.status(200).json({
    status: "sucess",
    message: "send email  reset token ",
  });
});

const updatePassword = catchAsyncUser(async (req, res, next) => {
  let currentPass = req.body.currentPassword;
  let newPassword = req.body.password;
  let passwordConfirm = req.body.passwordConfirm;

  let user = await User.findById(req.user.id).select("+password");

  const shart = await bcrypt.compare(currentPass, user.password);

  if (!shart) {
    return next(new AppError("password incorrect", 401));
  }
  user.password = newPassword;
  user.passwordConfirm = passwordConfirm;

  user.save();

  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: req.protocol === "https" ? true : false,
  });
  resFunc(res, "password", 203, token);
});

const updateMe = catchAsyncUser(async (req, res, next) => {
  const id = req.user._id;
  const options = [
    "name",
    "email",
    "lastName",
    "firstName",
    "mobile",
    "country",
  ];

  const buyruq = optionss(req.body, options);
  console.log(buyruq);

  const user = await User.findByIdAndUpdate(id, buyruq, {
    new: true,
    runValidators: true,
  });

  resFunc(res, user, 203);
});
const deleteMe = catchAsyncUser(async (req, res, next) => {
  const id = req.user._id;
  const user = await User.findByIdAndDelete(id);
  resFunc(res, user, 204);
});
const isSignin = async (req, res, next) => {
  let token;
  console.log(req.headers.cookie);
  if (req.headers.cookie) {
    token = req.headers.cookie.split("=")[1];
  }

  console.log(token);
  if (!token || token == "logout") {
    return next();
  }
  // tokenni tekshirish kerak
  const id = await jwt.verify(token, process.env.SECRET);
  if (!id) {
    return next();
  }
  console.log(id);
  // user bazada bor yo'qligini tekshirib olish
  const user = await User.findById(id.id);

  if (!user) {
    return next();
  }

  console.log(user);
  res.locals.user = user;
  return next();
};

module.exports = {
  signin,
  login,
  protect,
  role,
  forgotPassword,
  updatePassword,
  deleteMe,
  updateMe,
  isSignin,
};
