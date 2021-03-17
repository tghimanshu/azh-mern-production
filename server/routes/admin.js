const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const {
  Admin,
  Client,
  Advisor,
  adminValidate,
  hash_password,
} = require("../models/schemas");
const _ = require("lodash");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");

const adminAuth = (req, res, next) => {
  if (!req.header("x-auth-token")) return res.status(401).send("Access Denied");
  try {
    const decoded = jwt.verify(
      req.header("x-auth-token"),
      config.get("jwt_secret")
    );
    if (decoded.role === "admin") {
      next();
    } else {
      new Error("User Not A Admin");
    }
  } catch (error) {
    res.status(401).send("Access Denied!");
  }
};

router.get("/", async (req, res) => {
  const admins = await Admin.find().select(["name", "email"]);
  res.send(admins);
  res.end();
});

router.post("/", async (req, res) => {
  const validate = adminValidate(req.body);
  if (validate.error) return res.status(400).send(validate.error.message);

  req.body.password = await hash_password(req.body.password);

  const admin = new Admin(_.pick(req.body, ["name", "email", "password"]));
  const result = await admin.save();
  res.send(result);
});

router.post("/login", async (req, res) => {
  const admin = await Admin.findOne({
    email: req.body.email,
  });
  if (!admin) return res.status(400).send("Invalid Username Or Password!");

  const pass = await bcrypt.compare(req.body.password, admin.password);

  if (!pass) return res.status(400).send("Invalid Username Or Password!");

  const token = admin.generateAuthToken();

  res.header("x-auth-token", token).send(token);
});

router.put("/:id", adminAuth, async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) res.status(400).send("Cannot locate the Admin!");
  /* validation logic */

  admin.set(_.pick(req.body[("name", "email")]));
  const result = await admin.save();
  res.send(result);
});

router.delete("/:id", adminAuth, async (req, res) => {
  const result = await Admin.findByIdAndRemove(req.params.id);
  res.send(result);
});

// * CLIENTS

router.get("/clients", adminAuth, async (req, res) => {
  const clients = await Client.find();
  res.send(clients);
});

router.get("/client/:id", adminAuth, async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.send(client);
  } catch (error) {
    // console.log(error);
  }
});

// * ADVISORS

router.get("/advisors", adminAuth, async (req, res) => {
  const advisors = await Advisor.find();
  res.send(advisors);
});

router.put("/advisors/approve/:id", adminAuth, async (req, res) => {
  try {
    const advisor = await Advisor.findById(req.params.id);
    advisor.set({
      isApproved: req.body.isApproved,
    });
    const result = advisor.save();
    res.send(advisor);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:status/:id", adminAuth, async () => {
  const advisor = await Advisor.findById(req.params.id);
  if (!advisor)
    return res.status(400).send("User Doesn't Exist, Please Register!");
  switch (req.params.satus) {
    case "approve":
      advisor.recc_amt = req.body.request.amount;
      advisor.recc_change[req.body.index].isApproved = "approved";
      return res.send("Approved!");
    case "reject":
      advisor.recc_change[req.body.index].isApproved = "rejected";
      return res.send("Rejected!");
    default:
      break;
  }
});

module.exports = router;
