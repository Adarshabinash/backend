const parentModel = require("../models/masterSchema");

const deleteStudent = async (req, res) => {
  try {
    const studentSelected = await parentModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ data: studentSelected });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

module.exports = deleteStudent;
