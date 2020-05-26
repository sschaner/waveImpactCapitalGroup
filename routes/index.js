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

// Contact Form - Send
router.post("/send", (req, res) => {
  const output = `
    <body style="color: #233d89; ">
      <h1>Someone wants to join Wave Impact Capital Group</h1>
      <h3>Contact Details:</h3>
      <ul>
        <li>${req.body.name}</li>
        <li>${req.body.email}</li>
        <li>${req.body.phone}</li>
        <li>Accredited: <span style="color: #6d9eeb">${
          req.body.accredited === "yes" ? req.body.accredited : "no"
        }</span></li>
        <li>US Citizen: <span style="color: #6d9eeb">${
          req.body.usCitizen === "yes" ? req.body.usCitizen : "no"
        }</span></li>
        <li>Have a minimum of $25,000 to invest: <span style="color: #6d9eeb">${
          req.body.minimum25K === "yes" ? req.body.minimum25K : "no"
        }</span></li>
      </ul>
    </body>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "jordy.prosacco64@ethereal.email", // generated ethereal user
      pass: "TGj1GEuvz4TUsjgzwk", // generated ethereal password
    },
    tls: {
      rejectUnautorized: false,
    },
  });

  let mailOptions = {
    from: '"Nodemailer Contact" <jordy.prosacco64@ethereal.email>', // sender address
    to: "schanerrealestate@gmail.com", // list of receivers
    subject: "Someone Wants to Join Wave Impact Capital Group", // Subject line
    text: "I love you.", // plain text body
    html: output, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.render("contact", { msg: "Email has been sent." });
  });
});

module.exports = router;
