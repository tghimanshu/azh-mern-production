const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const {
  Admin,
  Client,
  Advisor,
  Feedback,
  adminValidate,
  hash_password,
} = require("../models/schemas");
const _ = require("lodash");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const converter = require("json-2-csv");
const fs = require("fs");
const {
  bulkMail,
  clientMiniSheetRequest,
  feedbackMiniSheetRequest,
} = require("../mail");
const { userInfo } = require("os");

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
      new Error("User Not A Admin");
    }
  } catch (error) {
    res.status(401).send("Access Denied!");
  }
};

router.get("/", async (req, res) => {
  const admins = await Admin.find().select(["name", "email"]);
  res.send(admins);
  res.end();
});

// router.get("/:id", async (req, res) => {
//   const admin = await Admin.findById(req.params.id);
//   res.send(admin);
//   res.end();
// });

router.post("/", async (req, res) => {
  const validate = adminValidate(req.body);
  if (validate.error) return res.status(400).send(validate.error.message);

  req.body.password = await hash_password(req.body.password);

  const admin = new Admin(_.pick(req.body, ["name", "email", "password"]));
  const result = await admin.save();
  res.send(result);
});

router.post("/login", async (req, res) => {
  const admin = await Admin.findOne({
    email: req.body.email,
  });
  if (!admin) return res.status(400).send("Invalid Username Or Password!");

  const pass = await bcrypt.compare(req.body.password, admin.password);

  if (!pass) return res.status(400).send("Invalid Username Or Password!");

  const token = admin.generateAuthToken();

  res.header("x-auth-token", token).send(token);
});

router.delete("/:id", adminAuth, async (req, res) => {
  const result = await Admin.findByIdAndRemove(req.params.id);
  res.send(result);
});

// * ASSIGNED LEADS TO ADVISORS
router.put("/called/:type/:id", async (req, res) => {
  try {
    switch (req.params.type) {
      case "client":
        const client = await Client.findById(req.params.id);
        client.called = {
          value: true,
          message: req.body.message,
        };
        await client.save();
        break;
      case "feedback":
        const feedback = await Feedback.findById(req.params.id);
        feedback.called = {
          value: true,
          message: req.body.message,
        };
        await feedback.save();
        break;
      default:
        break;
    }
    res.send("call message added successfully");
  } catch (err) {
    res.status(500).send("something went wrong!");
  }
});

router.put("/assign/:advId/:type/:id", async (req, res) => {
  try {
    const adv = await Advisor.findById(req.params.advId);
    const data = [...adv.assignedLeads];
    switch (req.params.type) {
      case "client":
        const client = await Client.findById(req.params.id);
        client.assigned = {
          value: true,
          name: adv.name,
        };
        await client.save();
        data.push({
          type: req.params.type,
          id: req.params.id,
          name: client.name,
        });
        break;
      case "feedback":
        const feedback = await Feedback.findById(req.params.id);
        feedback.assigned = {
          value: true,
          name: adv.name,
        };
        await feedback.save();
        data.push({
          type: req.params.type,
          id: req.params.id,
          name: feedback.answers[0].value,
        });
        break;
      default:
        break;
    }
    adv.assignedLeads = data;

    await adv.save();
    res.send("lead assigned successfully");
  } catch (err) {
    res.status(500).send("something went wrong!");
  }
});

// * CLIENTS

router.get("/clients", adminAuth, async (req, res) => {
  try {
    const clients = await Client.find();

    res.json(
      clients.map((client) => ({
        ...client.toObject(),
        creationDate: client._id.getTimestamp(),
      }))
    );
  } catch (err) {
    console.log(err);
  }
});

router.get("/client/:id", adminAuth, async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.send(client);
  } catch (error) {
    // console.log(error);
  }
});

// * ADVISORS

router.get("/advisors", adminAuth, async (req, res) => {
  try {
    const advisors = await Advisor.find();
    res.json(
      advisors.map((advisor) => ({
        ...advisor.toObject(),
        creationDate: advisor._id.getTimestamp(),
      }))
    );
  } catch (error) {
    console.log(error);
  }
});

router.get("/advisors/name", adminAuth, async (req, res) => {
  try {
    const advisors = await Advisor.find({ isApproved: true }).select("name");
    res.json(advisors);
  } catch (error) {
    console.log(error);
  }
});

router.put("/advisors/approve/:id", adminAuth, async (req, res) => {
  try {
    const advisor = await Advisor.findById(req.params.id);
    advisor.set({
      isApproved: req.body.isApproved,
    });
    const result = advisor.save();
    res.send(advisor);
  } catch (error) {
    res.send(error);
  }
});

// * FEEDBACKS

router.get("/feedbacks/checkRegistrations", async (req, res) => {
  try {
    const fbs = await Feedback.find();
    console.log("started");
    fbs.map(async (feedback) => {
      const client = await Client.findOne({
        email: feedback.answers.length > 1 && feedback.answers[1].value,
      });
      if (!client) return;
      feedback.registered = {
        value: true,
        id: client._id,
      };
      await feedback.save();
      return;
    });
    res.send("done");
  } catch (error) {
    console.log(error);
  }
});

router.get("/feedbacks/:id", async (req, res) => {
  try {
    const result = await Feedback.find({ formId: req.params.id }).populate(
      "formId"
    );
    if (!result) res.status(404).send("Feedbacks Doesn't Exist");
    res.json(
      result.map((feedback) => ({
        ...feedback.toObject(),
        creationDate: feedback._id.getTimestamp(),
      }))
    );
  } catch (err) {
    console.log("err");
  }
});
router.get("/feedbacks/export", async (req, res) => {
  try {
    const result = await Feedback.find();
    if (!result) res.status(404).send("Feedbacks Doesn't Exist");
    const myJson = [];
    result.map((feedback) => {
      const anss = {};
      feedback.answers.map((ans) => {
        anss[ans.text] = ans.value;
        return;
      });
      myJson.push(anss);
    });
    const data = await converter.json2csvAsync(myJson);
    res.setHeader(
      "Content-disposition",
      "attachment; filename=exportedData.csv"
    );
    res.set("Content-Type", "text/csv");
    res.status(200).send(data);
  } catch (err) {
    console.log("err");
  }
});

router.get("/feedbacks/export/:id", async (req, res) => {
  try {
    const result = await Feedback.find({ formId: req.params.id });
    if (!result) res.status(404).send("Feedbacks Doesn't Exist");
    const myJson = [];
    result.map((feedback) => {
      const anss = {};
      feedback.answers.map((ans) => {
        anss[ans.text] = ans.value;
        return;
      });
      myJson.push(anss);
    });
    const data = await converter.json2csvAsync(myJson);
    res.setHeader(
      "Content-disposition",
      "attachment; filename=exportedData.csv"
    );
    res.set("Content-Type", "text/csv");
    res.status(200).send(data);
  } catch (err) {
    console.log("err");
  }
});

router.get("/feedback/incminisheets/:id", async (req, res) => {
  try {
    const client = await Feedback.findById(req.params.id);
    if (!client) return res.status(404).send("Feedback not found");
    !client.miniSheetRequests
      ? (client.miniSheetRequests = 1)
      : (client.miniSheetRequests += 1);
    await client.save();
    feedbackMiniSheetRequest(client.answers[1].value, client.answers[0].value);
    return res.send("done");
  } catch (error) {}
});

router.get("/client/incminisheets/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).send("Feedback not found");
    !client.miniSheetRequests
      ? (client.miniSheetRequests = 1)
      : (client.miniSheetRequests += 1);
    clientMiniSheetRequest(client.email, client.name);
    await client.save();
    return res.send("done");
  } catch (error) {}
});

router.get("/feedback/incminisheets/;id", async (req, res) => {
  try {
    const fb = await Feedback.findById(req.params.id);
    if (!fb) return res.status(404).send("Feedback not found");
    console.log("prev", fb.miniSheetRequests);
    !fb.miniSheetRequests
      ? (fb.miniSheetRequests = 0)
      : (fb.miniSheetRequests += 1);
    console.log("new", fb.miniSheetRequests);
    fb.save();
    return res.send("done");
  } catch (error) {}
});

//  * BULK MAILS

router.post("/bulkmail/:type", async (req, res) => {
  try {
    switch (req.params.type) {
      case "client":
        const results = await Client.find();
        const emails = results.map((r) => r.email);
        while (emails.length > 0) {
          bulkMail(emails.splice(0, 20), req.body.subject, req.body.content);
        }
        res.send(emails);
        break;
      case "advisor":
        const results2 = await Advisor.find();
        const emails2 = results2.map((r) => r.email);
        while (emals2.length > 0) {
          bulkMail(emails2.splice(0, 20), req.body.subject, req.body.content);
        }
        res.send(emails2);
        break;
      case "feedback":
        const results3 = await Feedback.find({ formId: req.body.formId });
        const emails3 = results3.map((r) => r.answers[1].value);
        // let chunk = [];
        while (emails3.length > 0) {
          bulkMail(emails3.splice(0, 20), req.body.subject, req.body.content);
        }
        res.send(emails3);
        break;
      case "feedbacks":
        const results5 = await Feedback.find();
        const emails5 = results5.map((r) => r.answers[1].value);
        // let chunk = [];
        while (emails5.length > 0) {
          bulkMail(emails5.splice(0, 20), req.body.subject, req.body.content);
        }
        res.send(emails5);
        break;
      case "custom":
        bulkMail(req.body.emails, req.body.subject, req.body.content);
        res.send(req.body.emails);
        break;
      default:
        res.send("ok");
        break;
    }
  } catch (err) {
    console.log(err);
  }
});

// * HOMEPAGE DATA

router.get("/hpdata", (req, res) => {
  try {
    fs.readFile("models/homepage_data.json", (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      const hpd = JSON.parse(data);
      res.send(hpd);
    });
  } catch (err) {}
});

router.put("/hpdata", (req, res) => {
  try {
    fs.writeFile(
      "models/homepage_data.json",
      JSON.stringify(req.body.data),
      (err) => {
        if (err) {
          res.send(err);
        } else {
          res.json({ status: "OK" });
        }
      }
    );
  } catch (err) {
    res.send("error");
  }
});

router.put("/:status/:id", adminAuth, async () => {
  const advisor = await Advisor.findById(req.params.id);
  if (!advisor)
    return res.status(400).send("User Doesn't Exist, Please Register!");
  switch (req.params.satus) {
    case "approve":
      advisor.recc_amt = req.body.request.amount;
      advisor.recc_change[req.body.index].isApproved = "approved";
      return res.send("Approved!");
    case "reject":
      advisor.recc_change[req.body.index].isApproved = "rejected";
      return res.send("Rejected!");
    default:
      break;
  }
});

module.exports = router;
