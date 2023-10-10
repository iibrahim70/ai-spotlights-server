const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Ai SpotLights Is Running");
});

app.listen(port, () => {
  console.log(`Ai SpotLights Is Running On Port ${port}`);
});
