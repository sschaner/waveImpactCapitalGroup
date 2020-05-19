const express = require("express"),
  router = express.Router(),
  nodemailer = require("nodemailer"),
  crypto = require("crypto");

// Root Route
router.get("/", (req, res) => {
  res.render("landing");
});

// Contact Form Route
router.get("/contact", (req, res) => {
  res.render("contact", { page: "contact" });
});

module.exports = router;
