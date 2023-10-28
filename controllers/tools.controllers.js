const Tools = require("../models/tool.models");

const getAllTools = async (req, res) => {
  const result = await Tools.find({ status: "approve" });
  res.send(result);
};

const getMyTools = async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { userEmail: req.query.email };
  }
  const result = await Tools.find(query);
  res.send(result);
};

const createTools = async (req, res) => {
  const result = await Tools.create(req.body);
  res.send(result);
};

const deleteTools = async (req, res) => {
  const id = req.params.id;
  const result = await Tools.findByIdAndDelete(id);
  res.send(result);
};

module.exports = { getAllTools, createTools, getMyTools, deleteTools };
