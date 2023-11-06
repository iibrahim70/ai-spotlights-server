const toolModels = require("../models/tool.models");

const getAllTools = async (req, res) => {
  const result = await toolModels.find().sort({ createdAt: -1 });
  res.send(result);
};

const getApproveTools = async (req, res) => {
  const result = await toolModels
    .find({ status: "approved", featured: "false" })
    .sort({
      updatedAt: -1,
      status: -1,
    });
  res.send(result);
};

const getFeaturedTools = async (req, res) => {
  const result = await toolModels
    .find({ status: "approved", featured: "true" })
    .sort({
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

  const decodedEmail = req.decoded.email;
  if (query.userEmail !== decodedEmail)
    return res.status(403).send({ error: true, message: "Forbidden Access" });

  const result = await toolModels.find(query).sort({ createdAt: -1 });
  res.send(result);
};

const getSingleTools = async (req, res) => {
  const title = req.params.title;
  const formattedTitle = title.replace(/-/g, " ");
  const result = await toolModels.findOne({ title: formattedTitle });
  res.send(result);
};

const createTools = async (req, res) => {
  const result = await toolModels.create(req.body);
  res.send(result);
};

const approveTools = async (req, res) => {
  const id = req.params.id;
  const result = await toolModels.findByIdAndUpdate(id, {
    $set: {
      status: "approved",
    },
  });
  res.send(result);
};

const denyTools = async (req, res) => {
  const id = req.params.id;
  const result = await toolModels.findByIdAndUpdate(id, {
    $set: {
      status: "denied",
    },
  });
  res.send(result);
};

const verifyTools = async (req, res) => {
  const id = req.params.id;
  const result = await toolModels.findByIdAndUpdate(id, {
    $set: {
      verified: "true",
    },
  });
  res.send(result);
};

const unverifyTools = async (req, res) => {
  const id = req.params.id;
  const result = await toolModels.findByIdAndUpdate(id, {
    $set: {
      verified: "false",
    },
  });
  res.send(result);
};

const featuredTools = async (req, res) => {
  const id = req.params.id;
  const result = await toolModels.findByIdAndUpdate(id, {
    $set: {
      featured: "true",
    },
  });
  res.send(result);
};

const unfeaturedTools = async (req, res) => {
  const id = req.params.id;
  const result = await toolModels.findByIdAndUpdate(id, {
    $set: {
      featured: "false",
    },
  });
  res.send(result);
};

const updateTools = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updateTools = {
    $set: {
      title: body.title,
      subtitle: body.subtitle,
      tags: body.tags,
      toolsImage: body.toolsImage,
      ratings: body.ratings,
      description: body.description,
    },
  };
  const result = await toolModels.findByIdAndUpdate(id, updateTools);
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
  getFeaturedTools,
  getMyTools,
  getSingleTools,
  createTools,
  approveTools,
  denyTools,
  verifyTools,
  unverifyTools,
  featuredTools,
  unfeaturedTools,
  updateTools,
  deleteTools,
};
