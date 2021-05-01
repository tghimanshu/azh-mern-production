const express = require("express");
const { FeedbackForm, Feedback } = require("../models/schemas");
const config = require("config");

const router = express.Router();
const jwt = require("jsonwebtoken");
const { feedbackCertificate } = require("../mail");

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
      new Error("User Not A Advisor");
    }
  } catch (error) {
    res.status(401).send("Access Denied!");
  }
};

router.get("/", async (req, res) => {
  const result = await FeedbackForm.find();
  // res.send(result);
  res.json(
    result.map((feedback) => ({
      ...feedback.toObject(),
      creationDate: feedback._id.getTimestamp(),
    }))
  );
  res.end();
});

router.get("/:id", async (req, res) => {
  const result = await FeedbackForm.findById(req.params.id);
  if (!result) res.status(404).send("Form Doesn't Exist");
  res.send(result);
  res.end();
});

router.get("/single/:id", async (req, res) => {
  const result = await Feedback.findById(req.params.id);
  if (!result) res.status(404).send("Form Doesn't Exist");
  res.send(result);
  res.end();
});

router.post("/", adminAuth, async (req, res) => {
  const feedbackForm = new FeedbackForm(req.body);
  const result = await feedbackForm.save();

  // const width = 600; // width of the image
  // const height = 474; // height of the image
  // const canvas = createCanvas(width, height);
  // const context = canvas.getContext("2d");

  // context.textAlign = "center";
  // context.textBaseline = "top";
  // context.fillStyle = "#FFFFFF";
  // context.font = "80px 'signpainter' bold";
  // loadImage("./images/background.jpg").then((image) => {
  //   context.drawImage(image, 0, 0, 600, 474);
  //   context.fillText(req.body.answers[0].value, 300, 150);

  //   const imageBUffer = canvas.toBuffer("image/png");

  //   // Set and send the response as a PNG
  //   // res.set({ "Content-Type": "image/png" });
  //   feedbackCertificate(
  //     req.body.answers[0].value,
  //     req.body.answers[1].value,
  //     imageBuffer
  //   );
  // });
  res.send(result);
});

router.get("/:role/:id", async (req, res) => {
  const result = await Feedback.find({
    "user.role": req.params.role,
    "user.id": req.params.id,
  }).populate("formId");
  if (!result) return res.status(404).send("NO Data Found");
  res.send(result);
  res.end();
});

router.post("/single", async (req, res) => {
  const feedback = new Feedback(req.body);
  const result = await feedback.save();
  res.send(result);
});

module.exports = router;
