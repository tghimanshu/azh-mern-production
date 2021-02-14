const express = require("express");
const path = require("path");
const admin = require("./routes/admin");
const advisor = require("./routes/advisors");
const client = require("./routes/clients");
const page = require("./routes/pages");
const booking = require("./routes/bookings");
const elearning = require("./routes/elearning");
const payment = require("./routes/razorpay");
const cors = require("cors");
const { config } = require("exceljs");

const app = express();

app.use(express.json());

app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   next();
// });

app.use("/api/uploads", express.static(path.join(__dirname, "/uploads")));

app.use("/api/admin", admin);
app.use("/api/advisor", advisor);
app.use("/api/client", client);
app.use("/api/page", page);
app.use("/api/booking", booking);
app.use("/api/elearning", elearning);
app.use("/api/payment", payment);
app.get("/", (req, res) => {
  res.json({
    status: "Ok",
  });
});

const port = 5000;
//const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Started at port ${port}....`));
