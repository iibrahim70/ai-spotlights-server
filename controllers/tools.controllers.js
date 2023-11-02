const toolModels = require("../models/tool.models");

const getAllTools = async (req, res) => {
  const result = await toolModels.find().sort({ createdAt: -1 });
  res.send(result);
};

const getApproveTools = async (req, res) => {
  const result = await toolModels.find({ status: "approved" }).sort({
    updatedAt: -1,
    status: -1,
  });
  res.send(result);
};

const getMyTools = async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { userEmail: req.query.email };
  }

  // const decodedEmail = req.decoded.email;
  // if (query.userEmail !== decodedEmail)
  //   return res.status(403).send({ error: true, message: "Forbidden Access" });

  const result = await toolModels.find(query).sort({ createdAt: -1 });
  res.send(result);
};

const getSingleTools = async (req, res) => {
  const id = req.params.id;
  const result = await toolModels.findById(id);
  res.send(result);
};

const createTools = async (req, res) => {
  const result = await toolModels.create(req.body);
  res.send(result);
};

const approveTools = async (req, res) => {
  const id = req.params.id;
  const updateDoc = {
    $set: {
      status: "approved",
    },
  };
  const result = await toolModels.findByIdAndUpdate(id, updateDoc);
  res.send(result);
};

const denyTools = async (req, res) => {
  const id = req.params.id;
  const updateDoc = {
    $set: {
      status: "denied",
    },
  };
  const result = await toolModels.findByIdAndUpdate(id, updateDoc);
  res.send(result);
};

const verifyTools = async (req, res) => {
  const id = req.params.id;
  const updateDoc = {
    $set: {
      verified: "true",
    },
  };
  const result = await toolModels.findByIdAndUpdate(id, updateDoc);
  res.send(result);
};

const unverifyTools = async (req, res) => {
  const id = req.params.id;
  const updateDoc = {
    $set: {
      verified: "false",
    },
  };
  const result = await toolModels.findByIdAndUpdate(id, updateDoc);
  res.send(result);
};

const deleteTools = async (req, res) => {
  const id = req.params.id;
  const result = await toolModels.findByIdAndDelete(id);
  res.send(result);
};

module.exports = {
  getAllTools,
  getApproveTools,
  getMyTools,
  getSingleTools,
  createTools,
  approveTools,
  denyTools,
  verifyTools,
  unverifyTools,
  deleteTools,
};
