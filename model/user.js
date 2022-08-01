const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
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
    unique: true,
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
    unique: true,
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  password: {
    type: String,
    minLegnth: [8, "Password must be at least 8 characters"],
    required: [true, "Password is required"],
    select: false,
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
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  hashToken: String,
  expiresDate: Date,
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});
userSchema.methods.resetToken = async function () {
  let token = crypto.randomBytes(32).toString("hex");
  console.log("tokenhashmas", token);

  let hash = await crypto.createHash("sha256").update(token).digest("hex");
  this.hashToken = hash;
  this.expiresDate = Date.now() + 10 * 60 * 1000;
  return token;
};
const User = mongoose.model("User", userSchema);
module.exports = User;
