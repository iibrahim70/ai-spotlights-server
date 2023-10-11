const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { connectMongoDB } = require("./connection");
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Database Connect
connectMongoDB(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("Ai SpotLights Is Running");
});

app.listen(port, () => {
  console.log(`Ai SpotLights Is Running On Port ${port}`);
});
