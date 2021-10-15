const express = require("express");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const crypto = require("crypto");
const config = require("config");
const { Advisor, Booking } = require("../models/schemas");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: config.get("razorpayKey"),
  key_secret: config.get("razorpaySecret"),
});

router.post("/", async (req, res) => {
  try {
    // const booking = await Booking.findById(req.body.b_id);
    const payment_capture = 1;
    const amount = 999;
    const currency = "INR";
    const receipt = shortid.generate();
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt,
      payment_capture,
    };
    const response = await razorpay.orders.create(options);
    // console.log(response);
    res.send({
      id: response.id,
      amount: response.amount,
      currency: response.currency,
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/verification", (req, res) => {
  const secret = "12345678";

  // console.log(req.body);

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  // console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    // console.log("request is legit");
    // process it
    // console.log("approved payment");
  } else {
    // pass it
  }
  res.json({ status: "ok" });
});

module.exports = router;
