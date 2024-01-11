const express = require("express");
const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://0.0.0.0/studentDB");
  const conn = mongoose.connection;

  conn.on("error", (err) => {
    console.error(`The error-------> ${err}`);
  });

  conn.on("open", () => {
    console.log(
      `<------------------------Successfully connected to the Database---------------->`
    );
  });
};

module.exports = dbConnection;
