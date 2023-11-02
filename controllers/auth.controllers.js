const jwt = require("jsonwebtoken");

const createJWT = (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.JSON_TOKEN, { expiresIn: "1h" });
  res.send({ token });
};

module.exports = createJWT;
