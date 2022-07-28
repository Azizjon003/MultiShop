const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    validate: {
      validator: function (val) {
        return validator.isEmail(val);
      },
      message: "Now email is not valid",
    },
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile is required"],
    validate: {
      validator: function (val) {
        return validator.isMobilePhone(val, "any");
      },
      message: "Now mobile is not valid",
    },
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  password: {
    type: String,
    minLegnth: [8, "Password must be at least 8 characters"],
    required: [true, "Password is required"],
    validate: {
      validator: function (val) {
        return validator.isStrongPassword(val);
      },
      message: "Now password is not valid",
    },
  },
  passwordConfirm: {
    type: String,
    required: [true, "Password confirm is required"],
    validate: {
      validator: function (val) {
        return this.password === val;
      },
    },
  },
  jonatmaUchun: {
    type: mongoose.Schema.ObjectId,
    ref: "JonatmaUchun",
  },
});
