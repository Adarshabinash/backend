const parentModel = require("../models/masterSchema");

const deleteAllStudents = async (req, res) => {
  try {
    const result = await parentModel.deleteMany({});
    res
      .status(200)
      .send({ msg: "Deleted all records", deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).send({ msg: err });
  }
};

module.exports = deleteAllStudents;
