const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const transporter = require("../mail");
const Excel = require("exceljs");
const workbook = new Excel.Workbook();
const path = require("path");
const md5 = require("md5");
const config = require("config");
const { Client, clientValidate, hash_password } = require("../models/schemas");
const _ = require("lodash");
const router = express.Router();
const { clientForgotPassword, clientRegistration } = require("../mail");

router.get("/sheet/:id", async (req, res) => {
  const clients = await Client.findById(req.params.id).select([
    "-password",
    "-__v",
  ]);
  workbook.xlsx
    .readFile(path.join(__dirname, "../", "excel", "main.xlsx"))
    .then(function () {
      var worksheet = workbook.getWorksheet(1);
      // Personal Detials
      // Self
      worksheet.getCell("F3").value = clients.personal_details.self_name;
      worksheet.getCell("G3").value = clients.personal_details.self_dob;
      worksheet.getCell("H3").value = clients.personal_details.self_contact;
      worksheet.getCell("I3").value = clients.personal_details.self_profdetails;
      worksheet.getCell("J3").value = clients.personal_details.self_email;
      // Spouse
      worksheet.getCell("F4").value = clients.personal_details.spouse_name;
      worksheet.getCell("G4").value = clients.personal_details.spouse_dob;
      worksheet.getCell("H4").value = clients.personal_details.spouse_contact;
      worksheet.getCell("I4").value =
        clients.personal_details.spouse_profdetails;
      worksheet.getCell("J4").value = clients.personal_details.spouse_email;
      // Child 1
      worksheet.getCell("F5").value = clients.personal_details.child1_name;
      worksheet.getCell("G5").value = clients.personal_details.child1_dob;
      worksheet.getCell("H5").value = clients.personal_details.child1_contact;
      worksheet.getCell("I5").value =
        clients.personal_details.child1_profdetails;
      worksheet.getCell("J5").value = clients.personal_details.child1_email;
      // Child 2
      worksheet.getCell("F6").value = clients.personal_details.child2_name;
      worksheet.getCell("G6").value = clients.personal_details.child2_dob;
      worksheet.getCell("H6").value = clients.personal_details.child2_contact;
      worksheet.getCell("I6").value =
        clients.personal_details.child2_profdetails;
      worksheet.getCell("J6").value = clients.personal_details.child2_email;
      // end Personal Details
      // Income
      worksheet.getCell("B7").value = parseInt(clients.income.inc_self);
      worksheet.getCell("B8").value = parseInt(clients.income.inc_spouse);
      worksheet.getCell("B9").value = parseInt(clients.income.inc_parents);
      worksheet.getCell("B10").value = parseInt(clients.income.inc_property);
      worksheet.getCell("B11").value = parseInt(clients.income.inc_business);
      worksheet.getCell("B12").value = parseInt(clients.income.inc_others);
      worksheet.getCell("B14").value = { formula: "SUM(B7:B12)" };
      worksheet.getCell("B16").value = { formula: "B14/12" };
      // Monthly Expenses
      worksheet.getCell("B21").value = parseInt(
        clients.expenses.monthly.groceries
      );
      worksheet.getCell("B22").value = parseInt(
        clients.expenses.monthly.education
      );
      worksheet.getCell("B23").value = parseInt(
        clients.expenses.monthly.house_helps
      );
      worksheet.getCell("B24").value = parseInt(clients.expenses.monthly.bills);
      worksheet.getCell("B25").value = parseInt(
        clients.expenses.monthly.entertainment
      );
      worksheet.getCell("B26").value = parseInt(clients.expenses.monthly.rent);
      worksheet.getCell("B27").value = parseInt(
        clients.expenses.monthly.petrol
      );
      worksheet.getCell("B28").value = parseInt(
        clients.expenses.monthly.others
      );
      worksheet.getCell("B29").value = parseInt(
        clients.expenses.monthly.car_loan
      );
      worksheet.getCell("B30").value = parseInt(
        clients.expenses.monthly.personal_loan
      );
      worksheet.getCell("B31").value = parseInt(
        clients.expenses.monthly.home_loan
      );
      // Irregular Expenses
      worksheet.getCell("C35").value = parseInt(
        clients.expenses.irregular.travel
      );
      worksheet.getCell("C36").value = parseInt(
        clients.expenses.irregular.big_purchases
      );
      worksheet.getCell("C37").value = parseInt(
        clients.expenses.irregular.gifts
      );
      worksheet.getCell("C38").value = parseInt(
        clients.expenses.irregular.medical
      );
      worksheet.getCell("C39").value = parseInt(
        clients.expenses.irregular.others
      );
      worksheet.getCell("B33").value = { formula: "SUM(B21:B31)" };
      worksheet.getCell("C33").value = { formula: "B33*12" };
      worksheet.getCell("B39").value = { formula: "C39/12" };
      worksheet.getCell("B40").value = { formula: "C40/12" };
      worksheet.getCell("B41").value = { formula: "B33+B40" };
      worksheet.getCell("B43").value = { formula: "B16-B41" };

      var goalsWorksheet = workbook.getWorksheet(2);
      let gn = 4;
      clients.goals.map((goal) => {
        goalsWorksheet.getCell("B" + gn).value = goal.goal;
        goalsWorksheet.getCell("C" + gn).value = goal.remark;
        goalsWorksheet.getCell("D" + gn).value = goal.timeHorizon;
        goalsWorksheet.getCell("E" + gn).value = goal.amtNeededToday;
        gn++;
      });
      return workbook.xlsx.writeFile(
        path.join(__dirname, "../", "excel", clients._id + ".xlsx")
      );
    });
  res.send("Generated!");
});

router.get("/:id", async (req, res) => {
  const clients = await Client.findById(req.params.id).select([
    "-password",
    "-__v",
  ]);
  res.send(clients);
  res.end();
});

router.get("/", async (req, res) => {
  const clients = await Client.find().select(["name", "email"]);
  res.send(clients);
  res.end();
});

router.post("/", async (req, res) => {
  const { error } = clientValidate(req.body);
  if (error) return res.status(400).send(error.details);

  if (await Client.findOne({ email: req.body.email }))
    return res.status(400).send("Email Already Registered!");

  if (await Client.findOne({ username: req.body.username }))
    return res.status(400).send("Username Taken!");

  req.body.password = await hash_password(req.body.password);

  try {
    const client = new Client(req.body);

    const result = await client.save();
    const mailData = {
      from: "himnesh234@gmail.com",
      to: req.body.email,
      subject: "Registered Successfully!",
      text: "that was easy!",
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        // console.log(err);
      }
      if (info) {
        // console.log(info);
      }
    });

    res.send(result);
  } catch (error) {
    // console.log(error);
  }
});

router.post("/bulk", async (req, res) => {
  const allClients = req.body.clients;
  const doneIds = [];
  for (let i = 0; i < allClients.length; i++) {
    const { error } = clientValidate(allClients[i]);
    if (error) return res.status(400).send(error.details);

    if (await Client.findOne({ email: allClients[i].email }))
      return res.status(400).send("Email Already Registered!");

    if (await Client.findOne({ username: allClients[i].username }))
      return res.status(400).send("Username Taken!");

    req.body.password = await hash_password(allClients[i].password);

    try {
      const client = new Client(allClients[i]);

      const result = await client.save();

      doneIds.push(allClients[i].id);
    } catch (error) {
      // console.log(error);
      res.send("Witherror: " + doneIds.toString());
    }
  }
  res.send(doneIds.toString());
});

router.post("/login", async (req, res) => {
  const client =
    req.body.email.indexOf("@") !== -1
      ? await Client.findOne({
          email: req.body.email,
        })
      : await Client.findOne({
          username: req.body.email,
        });

  if (!client) return res.status(400).send("Invalid Username Or Password!");

  const pass = await bcrypt.compare(req.body.password, md5(client.password));
  const pass2 = await bcrypt.compare(req.body.password, client.password);
  console.log(pass, pass2);
  if ((!pass2 || !pass) === false)
    return res.status(400).send("Invalid Username Or Password!");

  const token = client.generateAuthToken();

  res.header("x-auth-token", token).send(token);
});

router.put("/:id", async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!client) res.status(400).send("Cannot locate the Client!");
  /* validation logic */

  client.set(req.body);
  const result = await client.save();
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const result = await Client.findByIdAndRemove(req.params.id);
  res.send(result);
});

router.post("/forgot-password", async (req, res) => {
  try {
    const client = await Client.findOne({ email: req.body.email });
    if (!client)
      return res.status(400).send("User Doesn't Exist, Please Register!");
    const token = jwt.sign({ email: req.body.email }, config.get("resetPass"), {
      expiresIn: "30m",
    });

    clientForgotPassword(req.body.email, token);

    res.send("Reset Link Sent Successfully!");
  } catch (error) {}
});

router.post("/reset-password", async (req, res) => {
  const client = await Client.findOne({ email: req.body.email });
  if (!client)
    return res.status(400).send("User Doesn't Exist, Please Register!");

  client.password = await hash_password(req.body.password);

  try {
    const result = await client.save();
    if (result) res.send(result);
  } catch (error) {
    // console.log(error);
  }
});

module.exports = router;
