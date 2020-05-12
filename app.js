require("dotenv").config();

const express = require("express"),
  app = express(),
  path = require("path"),
  bodyParser = require("body-parser"),
  favicon = require("serve-favicon");

// Requiring Routes
const indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(__dirname + "/public/favicon.ico"));

app.use("/", indexRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is started on port " + process.env.PORT);
});
