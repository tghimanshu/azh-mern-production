const nodemailer = require("nodemailer");
const config = require("config");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "himnesh234@gmail.com",
    pass: "himanshugohil234",
  },
  secure: true,
});

const clientRegistration = () => {};

const advisorRegistration = () => {};

const clientForgotPassword = (email, token, res) => {
  if (config.get("mailing")) {
    const mailData = {
      from: "himnesh234@gmail.com",
      to: email,
      subject: "Reset Password.",
      html: `<h1> Reset Password</h1>
      <p> Please Follow the below link to reset your AZH password.</p>
      <a href="http://localhost:3000/reset/client/${token}">Reset Password</a>`,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
      }
      if (info) {
        console.log(info);
      }
    });
  }
};

const advisorForgotPassword = (email, token) => {
  if (config.get("mailing")) {
    const mailData = {
      from: "himnesh234@gmail.com",
      to: email,
      subject: "Reset Password.",
      html: `<h1> Reset Password</h1>
      <p> Please Follow the below link to reset your AZH password.</p>
      <a href="http://localhost:3000/reset/advisor/${token}">Reset Password</a>`,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        return Error("Mail Send Error!");
      }
      if (info) {
        console.log(info);
      }
    });
  }
};

// module.exports = transporter;

module.exports = {
  clientRegistration,
  clientForgotPassword,
  advisorRegistration,
  advisorForgotPassword,
};
