const mongoose = require("mongoose");

const masterSchema = new mongoose.Schema({
  studentname: {
    type: String,
    required: true,
  },
  classname: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  studentid: {
    type: Number,
    default: () => new Date().getTime(),
  },
});

module.exports = mongoose.model("mastermodel", masterSchema);
