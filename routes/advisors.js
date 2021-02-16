const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const md5 = require("md5");
const _ = require("lodash");
const config = require("config");
const { advisorForgotPassword, advisorRegistration } = require("../mail");

const advisorAuth = (req, res, next) => {
  if (!req.header("x-auth-token")) return res.status(401).send("Access Denied");
  try {
    console.log("object");
    const decoded = jwt.verify(
      req.header("x-auth-token"),
      config.get("jwt_secret")
    );
    console.log(decoded);
    if (decoded.role === "advisor") {
      console.log(req.header("x-auth-token"));

      next();
    } else {
      new Error("User Not A Advisor");
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("Access Denied!");
  }
};

const transporter = require("../mail");
const {
  Advisor,
  advisorValidate,
  hash_password,
  Client,
} = require("../models/schemas");

const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/advisors");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileTypes(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images Only");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileTypes(file, cb);
  },
});

router.post("/upload", upload.single("image"), (req, res) => {
  res.send(`\\${req.file.path}`);
});

router.get("/username/:username", async (req, res) => {
  try {
    const advisors = await Advisor.findOne({
      username: req.params.username,
    }).select(["-password", "-__v"]);
    res.send(advisors);
    res.end();
  } catch (error) {}
});

router.get("/:id", async (req, res) => {
  try {
    const advisors = await Advisor.findById(req.params.id).select([
      "-password",
      "-__v",
    ]);
    res.send(advisors);
    res.end();
  } catch (error) {}
});

router.get("/", async (req, res) => {
  try {
    const advisors = await Advisor.find().select([
      "username",
      "name",
      "email",
      "location",
      "expertise",
      "experience",
      "profile_pic",
      "isApproved",
    ]);
    res.send(advisors);
    res.end();
  } catch (error) {}
});

router.post("/", async (req, res) => {
  try {
    const { error } = advisorValidate(req.body);
    if (error) return res.status(400).send(error.details);

    if (await Advisor.findOne({ email: req.body.email }))
      return res.status(400).send("Email Already Registered!");

    if (await Advisor.findOne({ username: req.body.username }))
      return res.status(400).send("Username Taken!");
    req.body.password = await hash_password(req.body.password);

    const advisor = new Advisor(req.body);

    const result = advisor.save();
    const mailData = {
      from: "himnesh234@gmail.com",
      to: req.body.email,
      subject: "Registered Successfully!",
      text: "that was easy!",
    };

    // transporter.sendMail(mailData, function (err, info) {
    //   if (err) {
    //     console.log(err);
    //   }
    //   if (info) {
    //     console.log(info);
    //   }
    // });

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  const advisor =
    req.body.email.indexOf("@") !== -1
      ? await Advisor.findOne({
          email: req.body.email,
        })
      : await Advisor.findOne({
          username: req.body.email,
        });
  if (!advisor) return res.status(400).send("Invalid Username Or Password!");
  const pass = await bcrypt.compare(req.body.password, md5(advisor.password));
  const pass2 = await bcrypt.compare(req.body.password, advisor.password);
  if ((!pass2 || !pass) === false)
    return res.status(400).send("Invalid Username Or Password!");

  const token = advisor.generateAuthToken();

  res.header("x-auth-token", token).send(token);
});

router.put("/:id", advisorAuth, async (req, res) => {
  const advisor = await Advisor.findById(req.params.id);
  if (!advisor) res.status(400).send("Cannot locate the Advisor!");
  /* validation logic */

  advisor.set(req.body);
  const result = await advisor.save();
  res.send(result);
});

router.delete("/:id", advisorAuth, async (req, res) => {
  const result = await Advisor.findByIdAndRemove(req.params.id);
  res.send(result);
});

router.post("/forgot-password", async (req, res) => {
  const advisor = await Advisor.findOne({ email: req.body.email });
  if (!advisor)
    return res.status(400).send("User Doesn't Exist, Please Register!");
  const token = jwt.sign({ email: req.body.email }, config.get("resetPass"), {
    expiresIn: "30m",
  });

  advisorForgotPassword(req.body.email, token);

  res.send("Reset Link Sent Successfully!");
});

router.post("/reset-password", async (req, res) => {
  const advisor = await Advisor.findOne({ email: req.body.email });
  if (!advisor)
    return res.status(400).send("User Doesn't Exist, Please Register!");

  advisor.password = await hash_password(req.body.password);

  try {
    const result = await advisor.save();
    if (result) res.send(result);
  } catch (error) {
    console.log(error);
  }
});

router.get("/client/:id", advisorAuth, async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    console.log(client);
    res.send(client);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
