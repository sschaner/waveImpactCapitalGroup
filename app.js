require("dotenv").config();

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  favicon = require("serve-favicon");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(favicon(__dirname + "/public/favicon.ico"));

app.get("/", (req, res) => {
  res.render("landing");
});

app.listen(process.env.PORT, () => {
  console.log("Server is started on port " + process.env.PORT);
});
