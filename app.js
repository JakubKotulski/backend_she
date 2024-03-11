require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.listen(4000, () => {
  console.log("Server has started");
});
