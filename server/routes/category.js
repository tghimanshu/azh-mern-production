const express = require("express");
const path = require("path");
const _ = require("lodash");
const config = require("config");

const { Category, categoryValidate } = require("../models/schemas");

const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/categories");
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

router.get("/:slug", async (req, res) => {
  try {
    const category = await Category.find({ slug: req.params.slug });
    res.send(category);
  } catch (error) {}
});

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().select(["-_v"]);
    res.send(categories);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  try {
    const { error } = categoryValidate(req.body);
    if (error) return res.status(400).send(error.details);

    if (await Category.findOne({ slug: req.body.slug }))
      return res.status(400).send("Category Already Exists");

    const category = new Category(req.body);

    const result = await category.save();

    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
