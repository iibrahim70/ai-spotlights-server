const Tools = require("../models/tool.models");

const getAllTools = async (req, res) => {
  let query = {};
  if (req.query?.createdAt) {
    query.createdAt = new Date(req.query.createdAt);
  }
  const result = await Tools.find().sort({
    createdAt: -1,
  });
  res.send(result);
};

const getApproveTools = async (req, res) => {
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

const approveTools = async (req, res) => {
  const id = req.params.id;
  const updateDoc = {
    $set: {
      status: "approved",
    },
  };
  const result = await Tools.findByIdAndUpdate(id, updateDoc);
  res.send(result);
};

const denyTools = async (req, res) => {
  const id = req.params.id;
  const updateDoc = {
    $set: {
      status: "denied",
    },
  };
  const result = await Tools.findByIdAndUpdate(id, updateDoc);
  res.send(result);
};

const verifyTools = async (req, res) => {
  const id = req.params.id;
  const updateDoc = {
    $set: {
      verified: "true",
    },
  };
  const result = await Tools.findByIdAndUpdate(id, updateDoc);
  res.send(result);
};

const unverifyTools = async (req, res) => {
  const id = req.params.id;
  const updateDoc = {
    $set: {
      verified: "false",
    },
  };
  const result = await Tools.findByIdAndUpdate(id, updateDoc);
  res.send(result);
};

const deleteTools = async (req, res) => {
  const id = req.params.id;
  const result = await Tools.findByIdAndDelete(id);
  res.send(result);
};

module.exports = {
  getAllTools,
  getApproveTools,
  getMyTools,
  createTools,
  approveTools,
  denyTools,
  verifyTools,
  unverifyTools,
  deleteTools,
};
