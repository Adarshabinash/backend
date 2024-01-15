const express = require("express");
const router = express.Router();
// const getAllStudents = require("./routes/getAllStudents");

//*-------------Get all the data--------------------------
router.get("/getAllStudents", require("./routes/getAllStudents"));

module.exports = router;
