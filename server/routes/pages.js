const express = require("express");
const mongoose = require("mongoose");
const { Page } = require("../models/schemas");
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
    // console.log(decoded);
    if (decoded.role === "admin") {
      // console.log(req.header("x-auth-token"));

      next();
    } else {
      new Error("User Not A Advisor");
    }
  } catch (error) {
    // console.log(error);
    res.status(401).send("Access Denied!");
  }
};

router.get("/", async (req, res) => {
  const pages = await Page.find().select(["slug", "name", "content"]);
  res.send(pages);
  res.end();
});

router.get("/:slug", async (req, res) => {
  const page = await Page.findOne({ slug: req.params.slug });
  res.send(page);
  res.end();
});

router.post("/", adminAuth, async (req, res) => {
  req.body.content = req.body.content.replace('"', '\\"');
  const availablePage = await Page.findOne({ slug: req.body.slug });
  if (availablePage) return res.status(500).send("Page Already Exists");

  const page = new Page(_.pick(req.body, ["name", "slug", "content"]));
  const result = await page.save();
  res.send(result);
});

router.put("/:id", adminAuth, async (req, res) => {
  const page = await Page.findById(req.params.id);
  if (!page) res.status(400).send("Cannot locate the Client!");
  /* validation logic */

  page.set(_.pick(req.body, ["name", "slug", "content"]));
  const result = await page.save();
  res.send(result);
});

router.delete("/:id", adminAuth, async (req, res) => {
  const result = await Page.findByIdAndRemove(req.params.id);
  res.send(result);
});

module.exports = router;
