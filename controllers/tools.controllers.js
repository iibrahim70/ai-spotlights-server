const Tools = require("../models/tool.models");

const getAllTools = async (req, res) => {
  let query = {};
  if (req.query?.createdAt) {
    query.createdAt = new Date(req.query.createdAt);
  }
  const result = await Tools.find({ status: "approve" }).sort({
    createdAt: -1,
  });
  res.send(result);
};

const getMyTools = async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { userEmail: req.query.email };
  }
  if (req.query?.createdAt) {
    query.createdAt = new Date(req.query.createdAt);
  }
  const result = await Tools.find(query).sort({ createdAt: -1 });
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
