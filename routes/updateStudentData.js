const parentModel = require("../models/masterSchema");

const updateStudent = async (req, res) => {
  try {
    const selectedStudent = await parentModel.findById(req.params.id);
    selectedStudent.studentname = req.body.studentname;
    selectedStudent.classname = req.body.classname;
    selectedStudent.section = req.body.section;
    selectedStudent.subject = req.body.subject;

    const updatedStudentData = await selectedStudent.save();
    res.status(200).send(updatedStudentData);
  } catch (err) {
    res.status(500).send(`The Error is- ${err}`);
  }
};

module.exports = updateStudent;
