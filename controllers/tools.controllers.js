const Tools = require("../models/tool.models");

const getAllTools = async (req, res) => {
  const result = await Tools.find();
  res.send(result);
};

const createTools = async (req, res) => {
  const result = await Tools.create(req.body);
  res.send(result);
};

module.exports = { getAllTools, createTools };
