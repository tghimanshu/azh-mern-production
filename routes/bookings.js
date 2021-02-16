const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const { Booking } = require("../models/schemas");
const _ = require("lodash");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.send(booking);
  } catch (error) {
    console.log(error);
  }
});

router.get("/client/:id", async (req, res) => {
  try {
    const bookings = await Booking.find({ client_id: req.params.id }).populate(
      "advisor_id",
      "name"
    );
    res.send(bookings);
  } catch (error) {
    console.log(error);
  }
});

router.get("/advisor/:id", async (req, res) => {
  try {
    const bookings = await Booking.find({
      advisor_id: req.params.id,
    }).populate("client_id");
    res.send(bookings);
  } catch (error) {}
});

router.get("/", async (req, res) => {
  try {
    const result = await Booking.find()
      .populate("client_id", "name")
      .populate("advisor_id", "name");
    res.send(result);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  try {
    const found = await Booking.find({
      client_id: req.body.client_id,
      advisor_id: req.body.advisor_id,
    });
    if (found.length > 0)
      return res.status(400).send("Booking Already Made with this advisor!");

    const booking = new Booking({
      advisor_id: mongoose.Types.ObjectId(req.body.advisor_id),
      client_id: mongoose.Types.ObjectId(req.body.client_id),
      booking_time: req.body.b_time,
      remarks: req.body.remarks,
      isApproved: req.body.isApproved,
    });
    const result = await booking.save();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/:status/:id", async (req, res) => {
  try {
    switch (req.params.status) {
      case "approve":
        const approveRes = await Booking.findByIdAndUpdate(
          req.params.id,
          {
            $set: { isApproved: "approved" },
          },
          { new: true }
        );
        res.send(approveRes);
        break;
      case "unapprove":
        const unapproveRes = await Booking.findByIdAndUpdate(
          req.params.id,
          {
            $set: { isApproved: "unapproved" },
          },
          { new: true }
        );

        res.send(unapproveRes);
        break;
      default:
        res.send("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).send("Invalid Booking");
    booking.recommendation = req.body.recommendation;
    booking.save();
    res.send("Recommendation Saved");
  } catch (err) {
    console.log(err);
  }
});

router.put("/payment/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).send("Invalid Booking");
    booking.madePayment = true;
    booking.order_id = req.body.order_id;
    booking.save();
    res.send("Payment Made");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Booking.findByIdAndRemove(req.params.id);
    res.send(result);
  } catch (error) {}
});

module.exports = router;
