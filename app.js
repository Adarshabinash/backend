const express = require("express");
const app = express();
const port = 3000;

//^----------------File imports------------------------------->
const dbConnection = require("./connection");
const router = require("./routes/index");

app.use(express.json());

app.use("/", router);

app.listen(() => {
  console.log(
    `<------------------------Server is running at ${port}----------------------------->`
  );
  dbConnection();
  // console.log("first");
});
