require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");
const port = process.env.PORT || 5000;

// Routes
const toolsRouter = require("./routes/tools.routes");
const usersRouter = require("./routes/users.route");
const authRouter = require("./routes/auth.routes");

// Middleware
app.use(cors());
app.use(express.json());

// Database Connect
connectDB();

// Bypassed Api's
app.use("/tools", toolsRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Ai SpotLights Is Running");
});

app.listen(port, () => {
  console.log(`Ai SpotLights Is Running On Port ${port}`);
});
