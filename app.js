const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const dbConnection = require("./connection");
const routers = require("./router");

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/", routers);

app.listen(port, () => {
  console.log(
    `<------------Server is running at port ${port}------------------->`
  );
  dbConnection();
});
