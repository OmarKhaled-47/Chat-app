const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);

app.get("/", (req, res) => {
  res.send("welcome");
});

const port = process.env.PORT || 8080;
const uri = process.env.ATLAS_URL;

app.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});

mongoose
  .connect(uri, {})
  .then(() => console.log("MongoDB connected successful"))
  .catch((error) => console.log("MongoDB fail to connect: ", error.message));
