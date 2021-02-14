const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "himnesh234@gmail.com",
    pass: "himanshugohil234",
  },
  secure: true,
});

module.exports = transporter;
