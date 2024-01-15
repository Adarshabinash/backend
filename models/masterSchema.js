const mongoose = require("mongoose");

const masterSchema = new mongoose.Schema({
  studentname: {
    type: String,
    required: true,
  },
  class: {
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
});

module.exports = mongoose.model("mastermodel", masterSchema);
