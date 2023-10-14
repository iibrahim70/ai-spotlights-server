require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");
const port = process.env.PORT || 5000;

// Routes
const toolsRoutes = require("./routes/tools.routes");

// Middleware
app.use(cors());
app.use(express.json());

// Database Connect
connectDB(process.env.MONGO_URI);

// Bypassed Api's
app.use("/tools", toolsRoutes);

app.get("/", (req, res) => {
  res.send("Ai SpotLights Is Running");
});

app.listen(port, () => {
  console.log(`Ai SpotLights Is Running On Port ${port}`);
});
