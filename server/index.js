const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors()); //Middleware to accept cross site functionality
app.use(express.json());

app.listen(3001, () => {
  console.log("server has started on Port 3001");
});
