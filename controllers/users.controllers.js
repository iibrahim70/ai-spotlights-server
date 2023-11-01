const userModels = require("../models/user.models");

const getAllUsers = async (req, res) => {
  const result = await userModels.find();
  res.send(result);
};

const creatUsers = async (req, res) => {
  const newUser = req.body;
  const query = { email: newUser.email };
  const existingUser = await userModels.findOne(query);
  if (existingUser) return res.send({ message: "User already exists" });
  const result = await userModels.create(newUser);
  res.send(result);
};

module.exports = { creatUsers, getAllUsers };
