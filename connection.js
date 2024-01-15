const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://0.0.0.0/student_database");
  const conn = mongoose.connection;

  conn.on("error", (err) => {
    console.error(`The error is: ${err}`);
  });

  conn.on("open", () => {
    console.log(
      "-------------------Connected to the DB-------------------------"
    );
  });
};

module.exports = dbConnection;
