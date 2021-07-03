require("dotenv").config();
const https = require("https");
const express = require("express");
const app = express();
const path = require("path");
const admin = require("./routes/admin");
const advisor = require("./routes/advisors");
const client = require("./routes/clients");
const page = require("./routes/pages");
const booking = require("./routes/bookings");
const elearning = require("./routes/elearning");
const blog = require("./routes/blogs");
const helpers = require("./routes/helpers");
const payment = require("./routes/razorpay");
const feedback = require("./routes/feedback");
const category = require("./routes/category");
// const socket = require("./routes/socket");
const cors = require("cors");
const fs = require("fs");
const { config } = require("exceljs");
let Parser = require("rss-parser");
let parser = new Parser({
  customFields: {
    item: ["image"],
  },
});

app.use(express.json());

app.use(cors());

app.use("/api/uploads", express.static(path.join(__dirname, "/uploads")));

// app.use("/api/socket", socket);
app.use("/api/admin", admin);
app.use("/api/advisor", advisor);
app.use("/api/category", category);
app.use("/api/client", client);
app.use("/api/page", page);
app.use("/api/booking", booking);
app.use("/api/elearning", elearning);
app.use("/api/blog", blog);
app.use("/api/helpers", helpers);
app.use("/api/payment", payment);
app.use("/api/feedback", feedback);
app.get("/api/news", async (req, res) => {
  try {
    let feed = await parser.parseURL(
      "https://www.freepressjournal.in/stories.rss?section-id=9759&format=jio-news"
    );
    res.json(feed.items);
  } catch (error) {
    console.log(error);
  }
});
app.get("/", (req, res) => {
  res.json({
    status: "OK",
  });
});
// socket(io);

// * STARTING THE SERVER

const port = 5000;
if (process.env.NODE_ENV === "production") {
  const privateKey = fs.readFileSync("/etc/nginx/ssl/privateKey.key", "utf8"); // key
  const certificate = fs.readFileSync(
    "/etc/nginx/ssl/crts/sslCert.crt",
    "utf8"
  ); // certificate
  const credentials = {
    key: privateKey,
    cert: certificate,
  };
  const httpsServer = https.createServer(credentials, app);

  server = httpsServer.listen("8443", () => {
    console.log("listening on https://advisorzaroorihai.com:8443");
  });
} else {
  server = app.listen(port, () =>
    console.log(`Server Started at port ${port}....`)
  );
}

// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// socket(io);
