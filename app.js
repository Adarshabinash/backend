const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const dbConnection = require("./connection");
const routers = require("./router");

app.use(express.json());

app.use("/", routers);

app.listen(port, () => {
  console.log(
    `<------------Server is running at port ${port}------------------->`
  );
  dbConnection();
});
