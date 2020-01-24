const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//myStuff
const routes = require("./routes/index");

//express
const app = express();
app.use(express.static(path.join(__dirname, "public")));

//pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//router
app.use("/", routes);

module.exports = app;
