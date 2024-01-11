const express = require("express");
const route = express.Router();

const getAllStudents = require("./getAllStudents");

//&-------------Get All the available students--------------------
route.get("/getAllStudents", getAllStudents);

module.exports = route;
