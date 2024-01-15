const express = require("express");
const router = express.Router();
const getAllStudents = require("./routes/getAllStudents");
const getSingleStudent = require("./routes/getSingleStudent");
const createStudentData = require("./routes/createStudentData");
const updatedStudentData = require("./routes/updateStudentData");
const deleteStudent = require("./routes/deleteStudent");
const deleteAllStudents = require("./routes/deleteAllStudents");

//*-------------Get all the data--------------------------

router.get("/getAllStudents", getAllStudents);

//*-------------Get individual student--------------------
router.get("/getSingleStudent/:id", getSingleStudent);

//^-------------Post data into the database---------------
router.post("/createStudentData", createStudentData);

//~-------------Update particular student-----------------
router.patch("/updateStudent/:id", updatedStudentData);

//!---------------Delete Student with id---------------------
router.delete("/deleteStudent/:id", deleteStudent);

//&--------------Delete All the students--------------------
router.delete("/deleteAllRecords", deleteAllStudents);

module.exports = router;
