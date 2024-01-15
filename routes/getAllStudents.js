const parentModel = require("../models/masterSchema");

const getAllStudents = async (req, res) => {
  try {
    const allStudData = await parentModel.find();
    res.send(allStudData);
  } catch (error) {
    res.send(`The error is- ${error}`);
  }
};

module.exports = getAllStudents;
