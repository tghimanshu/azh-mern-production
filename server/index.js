require("dotenv").config();
const https = require("https");
const express = require("express");
const path = require("path");
const admin = require("./routes/admin");
const advisor = require("./routes/advisors");
const client = require("./routes/clients");
const page = require("./routes/pages");
const booking = require("./routes/bookings");
const elearning = require("./routes/elearning");
const helpers = require("./routes/helpers");
const payment = require("./routes/razorpay");
const feedback = require("./routes/feedback");
const cors = require("cors");
const fs = require("fs");
const { config } = require("exceljs");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

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
app.use("/api/helpers", helpers);
app.use("/api/payment", payment);
app.use("/api/feedback", feedback);
app.get("/", (req, res) => {
  res.json({
    status: "Ok",
  });
});

// * SOCKET IO CODE

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

// * STARTING THE SERVER

const port = 5000;
//const port = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  const privateKey = fs.readFileSync("/etc/nginx/ssl/privateKey.key", "utf8"); // key
  const certificate = fs.readFileSync(
    "/etc/nginx/ssl/crts/sslCert.crt",
    "utf8"
  ); // certificate
  // const ca = fs.readFileSync('/etc/letsencrypt/live/.com/chain.pem', 'utf8'); // chain
  const credentials = {
    key: privateKey,
    cert: certificate,
  };
  const httpsServer = https.createServer(credentials, app);

  httpsServer.listen("8443", () => {
    console.log("listening on https://advisorzaroorihai.com:8443");
  });
} else {
  app.listen(port, () => console.log(`Server Started at port ${port}....`));
}
