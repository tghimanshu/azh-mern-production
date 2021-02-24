const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const router = express.Router();

router.post("/getblog", async (req, res) => {
  try {
    const { data } = await axios.get(req.body.url);
    const $ = cheerio.load(data);
    const blogData = {
      title: $("meta[property='og:title']").attr("content"),
      description: $("meta[property='og:description']").attr("content"),
      image: $("meta[property='og:image']").attr("content"),
    };
    res.send(blogData);
  } catch (error) {
    res.status(404).send("Not Found");
  }
});

module.exports = router;
