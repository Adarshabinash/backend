const parentSchema = require("../models/masterSchema");

const getSingleStudent = async (req, res) => {
  try {
    const searchedStudent = await parentSchema.findById(req.params.id);
    res.send(searchedStudent);
  } catch (error) {
    res.send(`the error is----> ${error}`);
  }
};

module.exports = getSingleStudent;
