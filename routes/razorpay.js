const express = require("express");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const crypto = require("crypto");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: "rzp_test_z6sSh70PmD2OvR",
  key_secret: "O9jKN11UJyyVxB8AYr1Hdm3N",
});

router.post("/", async (req, res) => {
  const payment_capture = 1;
  const amount = 5;
  const currency = "INR";
  const receipt = shortid.generate();
  const options = {
    amount: (amount * 100).toString(),
    currency,
    receipt,
    payment_capture,
  };
  const response = await razorpay.orders.create(options);
  console.log(response);
  res.send({
    id: response.id,
    amount: response.amount,
    currency: response.currency,
  });
});

router.post("/verification", (req, res) => {
  const secret = "12345678";

  console.log(req.body);

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    // process it
    console.log("approved payment");
  } else {
    // pass it
  }
  res.json({ status: "ok" });
});

module.exports = router;
