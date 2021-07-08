require('dotenv').config()
const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: `http://localhost:${process.env.PORT}`
};

//Setting the encodings for post requests
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors(corsOptions));

const initRoutes = require("./src/routes");
initRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
})