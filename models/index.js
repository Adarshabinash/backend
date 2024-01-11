const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
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
  passed: {
    type: String,
    required: false,
    default: true,
  },
  division: {
    type: String,
    required: false,
    default: "1st",
  },
});

const studentDataModel = mongoose.model("studentModel", studentSchema);

module.exports = studentDataModel;
