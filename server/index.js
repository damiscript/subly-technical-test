/** Config */
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
/**API Routes */
const userRouter = require("./lib/users/route");
const fileRouter = require("./lib/files/route");
app.use(cors()); //Middleware to accept cross site functionality
app.use(express.json());
// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(userRouter);
app.use(fileRouter);

app.listen(3001, () => {
  console.log("server has started on Port 3001");
});
