const parentModel = require("../models/masterSchema");

const createStudentData = async (req, res) => {
  const newStudentDetails = new parentModel({
    studentname: req.body.studentname,
    classname: req.body.classname,
    section: req.body.section,
    subject: req.body.subject,
  });
  try {
    const myStudent = await newStudentDetails.save();
    res.status(201).send({ data: myStudent });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = createStudentData;
