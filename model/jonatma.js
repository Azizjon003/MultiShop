const mongoose = require("mongoose");
const Schema = new mongoose.Router({
  address: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

const modelJonatma = mongoose.model("JonatmaUchun", Schema);
module.exports = modelJonatma;
