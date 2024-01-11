const studentModel = require("../models/index");

const getAllStudents = async (req, res) => {
  console.log(`req----> ${req}    `);
  try {
    const allStudents = await studentModel.find();
    res.send(allStudents);
    console.log("Api hit");
  } catch (err) {
    console.error(`The following error occurred---> ${err}`);
  }
};

module.exports = getAllStudents;
