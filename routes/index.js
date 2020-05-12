const express = require("express"),
  router = express.Router(),
  nodemailer = require("nodemailer"),
  crypto = require("crypto");

// Root Route
router.get("/", (req, res) => {
  res.render("landing");
});

module.exports = router;
