const express = require("express");
const mongoose = require("mongoose");
const { ContactUs } = require("../models/schemas");
const _ = require("lodash");
const router = express.Router();
const config = require("config");

router.get("/", async (req, res) => {
  const pages = await ContactUs.find();
  res.send(pages);
  res.end();
});

router.post("/", async (req, res) => {
  const page = new ContactUs(req.body);
  const result = await page.save();
  res.send(result);
});

module.exports = router;
