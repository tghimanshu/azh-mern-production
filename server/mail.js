const nodemailer = require("nodemailer");
const config = require("config");

const transporter = nodemailer.createTransport({
  port: config.get("mailingData.port"),
  host: config.get("mailingData.host"),
  auth: {
    user: config.get("mailingData.mail"),
    pass: config.get("mailPass"),
  },
  secure: true,
});

const advisorReccMadeMail = (name, email, client_name) => {
  if (config.get("mailing")) {
    const mailData = {
      from: config.get("mailingData.mail"),
      to: email,
      subject: "Recommendation Request - Adivsor Zaroori Hai",
      html: `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <style type='text/css'>
            body {
                padding: 15px;
            }
            img	{
                width: 140px;
                height: auto;
                display: block;
                margin: 0 auto;
                margin-bottom: 15px;
            }
            h1 {
                margin-bottom: 10px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <img src='https://advisorzaroorihai.com/assets/img/site-logo.png' alt='Site Logo'>
        <h1>Hi ${name}</h1>
        <p>A Recommendation Request has been made for you by ${client_name}.</p>
        <p>Please go through the same accordingly from your Advisor DashBoard!</p>
        <a href='http://advisorzaroorihai.com/advisor/'>Go To DashBoard</a>
        <br>
        <br>
        <br>
        <br>
        <p>For any business queries, </p>
        <p>Please visit: https://advisorzaroorihai.com</p>
        <p>Team AdvisorZarooriHai.</p>
    </body>
    </html>`,
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

const clientReccMadeMail = (name, email, advisor_name) => {
  if (config.get("mailing")) {
    const mailData = {
      from: config.get("mailingData.mail"),
      to: email,
      subject: "Recommendation Request - Adivsor Zaroori Hai",
      html: `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <style type='text/css'>
            body {
                padding: 15px;
            }
            img	{
                width: 140px;
                height: auto;
                display: block;
                margin: 0 auto;
                margin-bottom: 15px;
            }
            h1 {
                margin-bottom: 10px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <img src='https://advisorzaroorihai.com/assets/img/site-logo.png' alt='Site Logo'>
        <h1>Hi ${name}</h1>
        <p>Recommendation Request has been made from you for ${advisor_name}.</p>
        <p>Please go through the same accordingly from your Advisor DashBoard!</p>
        <a href='http://advisorzaroorihai.com/advisor/'>Go To DashBoard</a>
        <br>
        <br>
        <br>
        <br>
        <p>For any business queries, </p>
        <p>Please visit: https://advisorzaroorihai.com</p>
        <p>Team AdvisorZarooriHai.</p>
    </body>
    </html>`,
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

const clientRegistration = (name, email) => {
  if (config.get("mailing")) {
    const mailData = {
      from: config.get("mailingData.mail"),
      to: email,
      cc: config.get("mailingData.cc"),
      subject: "Thanks For Registration, " + name,
      html: `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <title>Registeration Success!</title>
        <style type='text/css'>
            body {
                padding: 15px;
            }
            img	{
                width: 140px;
                height: auto;
                display: block;
                margin: 0 auto;
                margin-bottom: 15px;
            }
            h1 {
                margin-bottom: 10px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <img src='https://advisorzaroorihai.com/assets/img/site-logo.png' alt='Site Logo'>
        <h1>Welcome, ${name}</h1>
        <p>Congratulations, You have successfully registered as an <b>User</b> at Advisor Zaroori Hai. We are looking forward to provide you expert advice in Investments.</p>
        <h3>What Next?</h3>
        <p>We are happy to have you as a part of our family. We hope that you get all your investment queries dealt with.</p>
        <br>
        <video controls='true' src='https://advisorzaroorihai.com/assets/img/azh.mp4' style='width:100%'></video>
        <br>
        <p>For any business queries, </p>
        <p>Please visit: https://advisorzaroorihai.com</p>
        <p>Team AdvisorZarooriHai.</p>
    </body>
    </html>`,
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

const advisorRegistration = (name, email) => {
  if (config.get("mailing")) {
    const mailData = {
      from: config.get("mailingData.mail"),
      to: email,
      cc: config.get("mailingData.cc"),
      subject: "Thank You For Registrating Advisor, " + name,
      html: `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <title>Registeration Success!</title>
        <style type='text/css'>
            body {
                padding: 15px;
            }
            img	{
                width: 140px;
                height: auto;
                display: block;
                margin: 0 auto;
                margin-bottom: 15px;
            }
            h1 {
                margin-bottom: 10px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <img src='https://advisorzaroorihai.com/assets/img/site-logo.png' alt='Site Logo'>
        <h1>Welcome, ${name}</h1>
        <p>Congratulations, You have successfully registered as an <b>Advisor</b> at Advisor Zaroori Hai. We are looking forward to utilize your expertise in Investments to provide best advices to the users.</p>
        <h3>What Next?</h3>
        <p>We are happy to have you as a part of our family.Your account is currently under review process. It will be reviewed and approved as soon as possible. On approval, your profile will be available to all the users.</p>
        <br>
        <video controls='true' src='https://advisorzaroorihai.com/assets/img/azh.mp4' style='width:100%'></video>
        <br>
        <p>For any business queries, </p>
        <p>Please visit: https://advisorzaroorihai.com</p>
        <p>Team AdvisorZarooriHai.</p>
    </body>
    </html>`,
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

const clientForgotPassword = (email, token, res) => {
  if (config.get("mailing")) {
    const mailData = {
      from: config.get("mailingData.mail"),
      to: email,
      subject: "Reset Password.",
      html: `<h1> Reset Password</h1>
      <p> Please Follow the below link to reset your AZH password.</p>
      <a href="https://advisorzaroorihai.com/reset/client/${token}">Reset Password</a>`,
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
      from: config.get("mailingData.mail"),
      to: email,
      subject: "Reset Password.",
      html: `<h1> Reset Password</h1>
      <p> Please Follow the below link to reset your AZH password.</p>
      <a href="https://advisorzaroorihai.com/reset/advisor/${token}">Reset Password</a>`,
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

module.exports = {
  clientRegistration,
  clientForgotPassword,
  clientReccMadeMail,
  advisorRegistration,
  advisorForgotPassword,
  advisorReccMadeMail,
};
