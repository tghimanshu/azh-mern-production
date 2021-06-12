const express = require("express");
const { Blog } = require("../models/schemas");
const config = require("config");

const router = express.Router();
const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  if (!req.header("x-auth-token")) return res.status(401).send("Access Denied");
  try {
    // console.log("object");
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

router.get("/:slug", async (req, res) => {
  const result = await Blog.find({ slug: req.params.slug });
  res.send(result);
  res.end();
});

router.get("/", async (req, res) => {
  const result = await Blog.find();
  res.send(result);
  res.end();
});

router.post("/", adminAuth, async (req, res) => {
  const elearning = new Blog(req.body);
  const result = await elearning.save();
  res.send(result);
});

module.exports = router;
